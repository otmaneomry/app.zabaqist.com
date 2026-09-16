/**
 * Sign in with Google.
 *
 * Server component: the session is read on the server and the Google flow is a
 * server action, so no secret and no auth SDK reaches the client bundle. What
 * used to be here was a mock — a react-hook-form posting to `lib/mockApi.ts`
 * through a zustand store, with working test credentials printed on the page.
 *
 * The shape follows the reference in `workflow-briliant.org/11-signin.png`: one
 * centred column, mark, headline, the provider button, then the legal line. The
 * differences are deliberate. There is no email field, because email is not
 * wired to anything and an input that silently does nothing is worse than an
 * absent one. The button says what it does rather than showing a bare "G".
 */

import React from 'react'
import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'

import { Link, redirect } from '@/i18n/navigation'
import { routing, type Locale } from '@/i18n/routing'
import Logo from '@/components/landing/Logo'
import GoogleButton from '@/components/auth/GoogleButton'
import { alternatesFor } from '@/lib/publicPaths'
import { safeInternalPath } from '@/lib/safePath'
import { createClient } from '@/lib/supabase/server'
import { supabaseConfigError } from '@/lib/supabase/config'

/**
 * The marketing site's waitlist form, which already asks for filière, first
 * name and a phone number — everything the beta needs to invite someone. There
 * is no second form to build here.
 */
const WAITLIST = 'https://www.zabaqist.com/#waitlist'

/**
 * `next=` as a path with no language in it.
 *
 * `proxy.ts` sets it to the full pathname, so an Arabic reader turned away from
 * `/ar/progres` arrives here with `next=/ar/progres` — already prefixed — while
 * the fallback is the bare `/home`. Handing either straight to a locale-aware
 * redirect would produce `/ar/ar/progres` or drop the reader into French.
 * Stripping first means one shape goes in and the redirect puts back the prefix
 * the reader is actually reading in. (`proxy.ts` has the same function under
 * the name `withoutLocale`; it runs at the edge and cannot import from here.)
 */
const unprefixed = (p: string): string => {
  for (const l of routing.locales) {
    if (p === `/${l}`) return '/'
    if (p.startsWith(`/${l}/`)) return p.slice(l.length + 1)
  }
  return p
}

/**
 * Sign-in names itself, rather than inheriting the root layout's canonical.
 *
 * Metadata merges shallowly from the root segment down, so with no `alternates`
 * of its own this page told a crawler its canonical URL was the homepage. It is
 * disallowed in `robots.txt` in both languages and will stay that way, so what
 * it claims here should be itself or nothing — never another page.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const l: Locale = locale === 'ar' ? 'ar' : 'fr'
  return { alternates: alternatesFor('/signin', l) }
}

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>
}) {
  const { next, error } = await searchParams
  const locale = await getLocale()
  // This page is public and must render even when Supabase is unconfigured or
  // unreachable — it is where a reader is sent when anything else fails, so it
  // is the one page that cannot itself depend on the service being up.
  let user = null
  try {
    const supabase = await createClient()
    user = (await supabase.auth.getUser()).data.user
  } catch {
    /* signed out, and the button below will say so when clicked */
  }
  // Already signed in: this page has nothing to offer. The locale-aware
  // redirect, or an Arabic reader is sent to the French copy of wherever they
  // were going.
  // Strip first, THEN validate. The other order let `/fr//evil.com` through:
  // `safeInternalPath` saw a single leading slash followed by `f` and passed
  // it, `unprefixed` then removed `/fr` and handed `//evil.com` to a redirect
  // that adds no prefix for the default locale — a protocol-relative Location
  // header, reached through a genuine Zabaqist sign-in link. Sanitising the
  // value that is actually redirected to is the only order that holds.
  if (user) redirect({ href: safeInternalPath(unprefixed(next ?? '')), locale })

  const t = await getTranslations('auth')
  const notAllowed = error === 'not-allowed'
  // A check that FAILED is not a refusal. Telling an invited student they are
  // "not yet invited" because the database hiccuped reads as a rejection and
  // sends them to the waitlist they are already past.
  const checkFailed = error === 'check-failed'

  // In development, a failed sign-in is far more often a misconfigured key
  // than a real outage, and "réessaie" invites retrying something that cannot
  // work. Say what is wrong instead. `NODE_ENV` is inlined at build time, so
  // this text is not in the production bundle at all.
  const misconfigured =
    process.env.NODE_ENV !== 'production' ? supabaseConfigError() : null
  // The headline is authored with a line break so it falls the same way in both
  // languages instead of wherever the container happens to wrap.
  const title = t('signInTitle').split('\n')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zb-cream px-5 py-16">
      <div className="w-full max-w-[380px]">
        <div className="flex justify-center">
          <Link href="/" aria-label="Zabaqist" className="no-underline">
            <Logo size={30} compact />
          </Link>
        </div>

        <h1 className="mt-7 text-center font-display text-[26px] font-bold leading-[1.25] tracking-tight text-zb-ink">
          {title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-3 text-center text-sm leading-relaxed text-zb-ink-2">
          {t('signInSub')}
        </p>

        {misconfigured && (
          <p
            role="alert"
            dir="ltr"
            className="mt-6 rounded-xl border border-zb-gold/40 bg-zb-gold-soft px-4 py-3 text-start font-mono text-xs leading-relaxed text-zb-gold-deep"
          >
            <strong className="block">Configuration · dev only</strong>
            {misconfigured}
          </p>
        )}

        {error && !misconfigured && (
          <p
            role="alert"
            className="mt-6 rounded-xl border border-zb-rose/30 bg-zb-rose-soft px-4 py-3 text-center text-sm font-medium leading-relaxed text-zb-rose-deep"
          >
            {/* An uninvited account is not a failure — say which it is, or the
                reader retries the same address forever. */}
            {notAllowed
              ? t('notAllowed')
              : checkFailed
                ? t('checkFailed')
                : t('signInError')}
          </p>
        )}

        {/* Someone who is not on the list has done nothing wrong and should not
            be left at a dead end. The waitlist is the next step for them, so it
            becomes the primary action and Google drops to a quieter second —
            still there, because the usual cause is signing in with the wrong
            one of two Google accounts. */}
        {notAllowed ? (
          <div className="mt-8">
            <a
              href={WAITLIST}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-zb-gold px-5 text-[15px] font-bold text-zb-on-accent no-underline shadow-[var(--zb-shadow-sm)] transition-all hover:shadow-[var(--zb-shadow-md)]"
            >
              {t('notAllowedCta')}
              <span aria-hidden>→</span>
            </a>

            <p className="mt-6 text-center text-xs text-zb-ink-3">
              {t('notAllowedOther')}
            </p>
            <div className="mt-3">
              <GoogleButton next={next} label={t('google')} />
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <GoogleButton next={next} label={t('google')} />
          </div>
        )}

        <p className="mt-6 text-center text-xs leading-relaxed text-zb-ink-3">
          {t.rich('legal', {
            terms: (c) => (
              <a
                href="https://zabaqist.com/conditions"
                className="underline underline-offset-2 hover:text-zb-ink-2"
              >
                {c}
              </a>
            ),
            privacy: (c) => (
              <a
                href="https://zabaqist.com/confidentialite"
                className="underline underline-offset-2 hover:text-zb-ink-2"
              >
                {c}
              </a>
            ),
          })}
        </p>

        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-zb-gold-deep">
          {t('beta')}
        </p>
      </div>
    </main>
  )
}
