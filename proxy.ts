/**
 * Locale negotiation and the route gate, at the edge.
 *
 * `proxy.ts` and not `middleware.ts`: Next 16 renamed the convention and warns
 * on every `next dev` while the old name is used.
 *
 * The two concerns are composed rather than chosen between, and the order
 * matters. next-intl runs FIRST and its response is what we return, because it
 * is what rewrites `/courses` to `/fr/courses` and sets the NEXT_LOCALE cookie;
 * dropping it to answer an auth question breaks every route in both languages.
 * The gate then only replaces that response when it has to redirect.
 *
 * next-intl decides the locale with `as-needed` prefixing: French is served
 * unprefixed at `/`, Arabic at `/ar`.
 */

import createMiddleware from 'next-intl/middleware'
import { NextResponse, type NextRequest } from 'next/server'

import { auth } from '@/auth'
import { routing } from '@/i18n/routing'

const intl = createMiddleware(routing)

/**
 * Paths a signed-out visitor may reach, as they appear WITHOUT a locale prefix.
 *
 * Everything else under the app requires a session. The landing page stays
 * public on purpose: it is the marketing surface, and `app/sitemap.ts` and
 * `app/robots.ts` exist to have it indexed before the September 2026 launch.
 */
const PUBLIC = ['/', '/signin', '/signup']

/** Strip the locale so one list covers both languages. */
function withoutLocale(pathname: string): string {
  for (const l of routing.locales) {
    if (pathname === `/${l}`) return '/'
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1)
  }
  return pathname
}

export default auth((req: NextRequest & { auth: unknown }) => {
  const path = withoutLocale(req.nextUrl.pathname)
  const response = intl(req)

  if (req.auth || PUBLIC.includes(path)) return response

  // Send them to sign in, and remember where they were headed so the round
  // trip through Google lands on the page they actually asked for.
  const url = req.nextUrl.clone()
  url.pathname = '/signin'
  url.search = ''
  url.searchParams.set('next', req.nextUrl.pathname)
  const redirect = NextResponse.redirect(url)

  // Carry next-intl's cookie across: without it the locale it just negotiated
  // is lost on the redirect, and an Arabic reader is bounced into French.
  const locale = response.headers.get('x-middleware-request-x-next-intl-locale')
  if (locale) redirect.cookies.set('NEXT_LOCALE', locale)
  return redirect
}) as unknown as (req: NextRequest) => ReturnType<typeof intl>

export const config = {
  // Everything except API routes, Next internals, and anything with a file
  // extension (favicon, images, robots.txt). Excluding `/api` is what keeps the
  // Google callback off the locale prefix — see the route handler's note.
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
}
