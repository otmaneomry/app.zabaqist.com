/**
 * What a signed-out visitor — and therefore a crawler — may reach.
 *
 * One list, because two drifted. `proxy.ts` gated everything except these three
 * paths while `app/sitemap.ts` advertised the landing page, `/courses` and all
 * thirteen chapters: fifteen URLs, fourteen of which answered a crawler with a
 * 307 to `/signin`, which `app/robots.ts` disallows. Google reports that as
 * "Page with redirect" and drops the URL, so the sitemap was spending crawl
 * budget to have its own contents excluded.
 *
 * The chapters are gated deliberately — Zabaqist is a closed beta — so the fix
 * is not to open them. It is to stop claiming they are open.
 *
 * The second half of the file is the other side of the same coin: not which
 * paths exist, but how each one is spelled to a crawler in both languages, and
 * whether the app is offering itself for indexing at all.
 */

import type { Metadata } from 'next'

import { routing, type Locale } from '@/i18n/routing'

/**
 * Paths reachable without a session, WITHOUT a locale prefix.
 *
 * `/demarrer` is here because the funnel's entire premise is that it runs
 * before there is an account — "sans chrome, sans sortie, et sans jamais
 * demander de compte". It was gated anyway, so the landing page's own primary
 * call to action answered a visitor with a redirect to a sign-in for a beta
 * they cannot join.
 *
 * It exposes nothing new: `PlanReveal` renders `chaptersOf(filiere)`, the same
 * chapter titles `components/landing/ChapterPath.tsx` already shows on `/`.
 * The chapters themselves stay gated, so finishing the funnel still lands on
 * `/signin` — which is the conversion the funnel exists to earn, and `next=`
 * carries the reader back. `app/robots.ts` already disallows it, so opening it
 * to a visitor does not offer it to a crawler.
 */
export const PUBLIC_PATHS = ['/', '/signin', '/signup', '/demarrer'] as const

/**
 * The subset worth indexing.
 *
 * `/signin` and `/signup` are public because a visitor has to be able to get
 * in, not because a search result should land on them — `robots.ts` disallows
 * both, and a URL that is crawl-blocked has no business in a sitemap.
 */
export const INDEXABLE_PATHS = ['/'] as const

export const isPublicPath = (p: string): boolean =>
  (PUBLIC_PATHS as readonly string[]).includes(p)

/* ── The indexing posture ─────────────────────────────────────────────── */

/**
 * The one switch, read in one place.
 *
 * Four things have to say the same sentence to a crawler: `robots.txt`, the
 * `robots` meta, the `canonical`, and whether a sitemap exists at all. They
 * used to be read from `process.env` in two files and ignored in the other two,
 * which is how the app shipped "do not index me" and "here are my URLs to
 * index" on the same deploy. Google resolves a contradiction like that by
 * guessing.
 *
 * `NEXT_PUBLIC_` means the value is substituted at build time, so this is a
 * constant in the bundle and not a runtime lookup.
 */
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === '1'

/**
 * Where the public, indexable version of this content lives while the beta is
 * closed.
 *
 * It sits next to the flag because it is the same decision: with the flag off
 * the app is not a search destination, it is the private half of a product
 * whose public half is `zabaqist.com`. Anything that names an origin to a
 * crawler — the canonical, the Open Graph URL, the JSON-LD — has to name this
 * one, or the app contradicts itself on the page it is deferring from.
 */
export const MARKETING_SITE = 'https://zabaqist.com'

/**
 * An unprefixed path as it is written in one locale.
 *
 * `localePrefix: 'as-needed'` leaves French at `/courses` and puts Arabic at
 * `/ar/courses`. Every place that has to name a URL to a crawler — the sitemap,
 * the canonical, the hreflang pair, the robots disallow list — needs the same
 * transformation, and each of them used to do it by hand or not at all. The
 * robots list was the one that did not: it disallowed `/home` and nothing else,
 * and robots.txt matching is literal prefix, so `/ar/home` was never covered.
 */
export const localeHref = (locale: string, path: string): string =>
  locale === routing.defaultLocale
    ? path
    : `/${locale}${path === '/' ? '' : path}`

type Alternates = NonNullable<Metadata['alternates']>

/**
 * What one page may tell a crawler about itself and its translation.
 *
 * Metadata is merged SHALLOWLY from the root layout down (see the "Merging"
 * section of
 * node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md),
 * so a page that sets no `alternates` inherits the layout's whole object —
 * which is the root's. Every chapter, the dashboard and the paywall were
 * therefore emitting `<link rel="canonical" href="…/">`: thirteen chapters all
 * claiming to be the homepage, on the deploy that would start inviting
 * crawlers. Google consolidates a set like that into the one URL they name and
 * indexes none of them.
 *
 * So a page names ITSELF, and pairs itself with ITS counterpart in the other
 * language. hreflang only works when the pair is reciprocal, and the marketing
 * homepage will never return the favour to a chapter.
 *
 * `null` while the beta is closed, and that is not a shortcut: `metadataBase`
 * is `zabaqist.com` then, so a relative canonical would resolve to a marketing
 * URL that does not exist. A page nobody may index has nothing true to say
 * here, and saying nothing is better than naming someone else's page.
 */
export function alternatesFor(path: string, locale: Locale): Alternates | null {
  if (!ALLOW_INDEXING) return null

  const languages: NonNullable<Alternates['languages']> = {}
  for (const l of routing.locales) languages[l] = localeHref(l, path)
  languages['x-default'] = localeHref(routing.defaultLocale, path)

  return { canonical: localeHref(locale, path), languages }
}
