import type { MetadataRoute } from 'next'
import { notFound } from 'next/navigation'

import {
  ALLOW_INDEXING,
  INDEXABLE_PATHS,
  localeHref,
} from '@/lib/publicPaths'
import { routing } from '@/i18n/routing'
import { siteUrl } from '@/lib/siteUrl'

/**
 * Every indexable URL, in both locales — or nothing at all.
 *
 * It used to list `/courses` and all thirteen chapters. Those are gated —
 * Zabaqist is a closed beta — so a crawler asking for any of them got a 307 to
 * `/signin`, which `app/robots.ts` disallows: fourteen of fifteen entries were
 * URLs the sitemap was asking Google to fetch and Google was then excluding as
 * "Page with redirect".
 *
 * `INDEXABLE_PATHS` is what `app/robots.ts` derives its crawl rules from, so
 * the sitemap cannot promise a page the app will refuse. When the chapters open
 * at launch, adding them there adds them here.
 *
 * `alternates.languages` is what tells a crawler the French and Arabic pages
 * are one document in two languages rather than duplicates — the same pairing
 * the `hreflang` tags make in the document head.
 *
 * ── Why a 404 and not an empty sitemap ──
 *
 * While `NEXT_PUBLIC_ALLOW_INDEXING` is off the app defers to the marketing
 * site: `noindex` on every page, a canonical pointing at `zabaqist.com`, and
 * `robots.txt` that disallows everything and offers no `Sitemap:` line. This
 * route was the one signal the flag did not move — it answered 200 with the
 * app's own URLs on the very deploy that was asking not to be indexed.
 *
 * Two ways to stop offering one, and they are not the same thing to a crawler.
 * An empty `<urlset>` is a valid document that says "these are all my URLs:
 * none" — Search Console keeps it, reports it as an error, and re-fetches it.
 * A 404 says there is no sitemap here, which is the truth, and it is the answer
 * that agrees with `robots.txt` already staying silent about one. Crawlers
 * probe `/sitemap.xml` by convention whether or not robots.txt names it, so the
 * route has to answer for itself rather than rely on not being advertised.
 *
 * `notFound()` is callable from a Route Handler, which is what `sitemap.ts`
 * compiles to — see
 * node_modules/next/dist/docs/01-app/03-api-reference/04-functions/not-found.md
 * ("`notFound()` can be invoked in Server Components, Server Functions, and
 * Route Handlers").
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!ALLOW_INDEXING) notFound()

  const SITE = siteUrl()
  const url = (locale: string, path: string) =>
    `${SITE}${localeHref(locale, path) === '/' ? '' : localeHref(locale, path)}`

  return INDEXABLE_PATHS.map((path) => ({
    url: url(routing.defaultLocale, path),
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: {
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, url(l, path)])),
        // `alternatesFor` publishes an `x-default` in the head and this did
        // not, so the two hreflang signals for the same URL disagreed about
        // which version an unmatched reader should get. Google reads both.
        'x-default': url(routing.defaultLocale, path),
      },
    },
  }))
}
