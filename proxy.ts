/**
 * Locale negotiation, session refresh, and the route gate — at the edge.
 *
 * `proxy.ts` and not `middleware.ts`: Next 16 renamed the convention and warns
 * on every `next dev` while the old name is used.
 *
 * Three concerns, and the order between them is the whole file:
 *
 *  1. next-intl runs FIRST and its response is the one that gets returned. It
 *     is what rewrites `/courses` to `/fr/courses` and sets NEXT_LOCALE;
 *     discarding it to answer an auth question breaks every route in both
 *     languages.
 *  2. Supabase refreshes the session and writes any rotated tokens ONTO that
 *     response. This has to happen on every request: a server component cannot
 *     set cookies, so if the refresh does not happen here it cannot happen at
 *     all, and the reader is silently signed out when the access token expires.
 *  3. Only then does the gate decide, replacing the response only to redirect.
 *
 * Getting 2 wrong is the classic Supabase-on-Next bug: create a second response
 * object and the refreshed cookies are written to the one you throw away.
 */

import { createServerClient } from '@supabase/ssr'
import createMiddleware from 'next-intl/middleware'
import { NextResponse, type NextRequest } from 'next/server'

import { E2E_COOKIE, isE2E } from '@/lib/e2e'
import { supabaseConfig } from '@/lib/supabase/config'
import { PUBLIC_PATHS } from '@/lib/publicPaths'
import { routing } from '@/i18n/routing'

const intl = createMiddleware(routing)

/**
 * Paths a signed-out visitor may reach, as they appear WITHOUT a locale prefix.
 *
 * The landing page stays public on purpose: it is the marketing surface, and
 * `app/sitemap.ts` and `app/robots.ts` exist to have it indexed before the
 * September 2026 launch. The list lives in `lib/publicPaths.ts` because the
 * sitemap has to agree with it — see the note there.
 */
const PUBLIC = PUBLIC_PATHS as readonly string[]

/** Strip the locale so one list covers both languages. */
function withoutLocale(pathname: string): string {
  for (const l of routing.locales) {
    if (pathname === `/${l}`) return '/'
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1)
  }
  return pathname
}

/** The suite's way past the gate — see `lib/e2e.ts` for why this is safe. */
const hasE2EBypass = (req: NextRequest) =>
  isE2E(req.cookies.get(E2E_COOKIE)?.value)

/**
 * Who is asking, or null.
 *
 * Never throws. Two ways this used to take the whole site down with a 500 on
 * every request, including the public landing page:
 *
 *   · a missing env var — `createServerClient(undefined!, undefined!)` throws
 *     immediately, and a Vercel deployment without the two NEXT_PUBLIC_SUPABASE
 *     variables set is exactly that;
 *   · Supabase being unreachable — the `getUser()` call rejects.
 *
 * Both now resolve to "nobody is signed in", which fails CLOSED: protected
 * routes redirect to sign-in rather than opening, and the marketing page keeps
 * serving. An outage should cost reach, not the whole site.
 */
async function currentUser(req: NextRequest, response: Response) {
  // Missing OR malformed — a placeholder pasted into .env.local throws inside
  // the auth client and is then *retried*, which cost 25 seconds a page.
  const config = supabaseConfig()
  if (!config) return null

  try {
    const supabase = createServerClient(config.url, config.key, {
      cookies: {
        getAll: () => req.cookies.getAll(),
        // Refresh onto `response` — never onto a fresh NextResponse, or the
        // rotated tokens are written to the object we throw away.
        setAll: (list) => {
          for (const { name, value, options } of list) {
            req.cookies.set(name, value)
            ;(response as unknown as { cookies: { set: (n: string, v: string, o?: unknown) => void } })
              .cookies.set(name, value, options)
          }
        },
      },
    })

    // `getUser`, not `getSession`: it revalidates the token with Supabase
    // rather than trusting a cookie the browser could have written.
    const {
      data: { user },
    } = await supabase.auth.getUser()
    return user ?? null
  } catch {
    return null
  }
}

export default async function proxy(req: NextRequest) {
  const response = intl(req)
  const user = await currentUser(req, response)

  const path = withoutLocale(req.nextUrl.pathname)
  if (user || PUBLIC.includes(path) || hasE2EBypass(req)) return response

  // Send them to sign in, remembering where they were headed so the round trip
  // through Google lands on the page they actually asked for.
  const url = req.nextUrl.clone()
  url.pathname = '/signin'
  url.search = ''
  url.searchParams.set('next', req.nextUrl.pathname)
  const redirect = NextResponse.redirect(url)

  // Carry across what the two steps above already decided, or the redirect
  // throws away the negotiated locale and any refreshed token.
  for (const c of response.cookies.getAll()) redirect.cookies.set(c)
  return redirect
}

export const config = {
  /**
   * Everything except API routes, the OAuth callback, Next internals, and
   * anything with a file extension (favicon, images, robots.txt).
   *
   * `auth` has to be excluded, not merely allow-listed in PUBLIC. next-intl
   * runs before the gate and does not recognise `auth` as a locale, so it
   * rewrote `/auth/callback` to `/fr/auth/callback` — a path with no route
   * behind it. Google returned with a valid code and the app answered 404.
   * Skipping the proxy entirely is also correct on its own terms: the callback
   * has no interface to translate and no session to check, since exchanging
   * the code is what creates one.
   */
  matcher: '/((?!api|auth|_next|_vercel|.*\\..*).*)',
}
