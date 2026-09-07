import type { MetadataRoute } from 'next'

import { INDEXABLE_PATHS } from '@/lib/publicPaths'
import { routing } from '@/i18n/routing'
import { siteUrl } from '@/lib/siteUrl'

/**
 * Every indexable URL, in both locales.
 *
 * It used to list `/courses` and all thirteen chapters. Those are gated —
 * Zabaqist is a closed beta — so a crawler asking for any of them got a 307 to
 * `/signin`, which `app/robots.ts` disallows: fourteen of fifteen entries were
 * URLs the sitemap was asking Google to fetch and Google was then excluding as
 * "Page with redirect".
 *
 * `INDEXABLE_PATHS` is the same list `proxy.ts` gates on, so the sitemap cannot
 * promise a page the app will refuse. When the chapters open at launch, adding
 * them there adds them here.
 *
 * `alternates.languages` is what tells a crawler the French and Arabic pages
 * are one document in two languages rather than duplicates — the same pairing
 * the `hreflang` tags make in the document head.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const SITE = siteUrl()

  const url = (locale: string, path: string) =>
    locale === routing.defaultLocale
      ? `${SITE}${path === '/' ? '' : path}`
      : `${SITE}/${locale}${path === '/' ? '' : path}`

  return INDEXABLE_PATHS.map((path) => ({
    url: url(routing.defaultLocale, path),
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, url(l, path)]),
      ),
    },
  }))
}
