import type { MetadataRoute } from 'next'

import { listCourses } from '@/lib/courseCatalog'
import { routing } from '@/i18n/routing'

// The app's own origin, not the marketing site's. Every entry below is a page
// only this deployment serves; listing them under zabaqist.com pointed Google
// at URLs that 404 there.
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://app.zabaqist.com'

/**
 * Every indexable URL, in both locales.
 *
 * `alternates.languages` is what tells a crawler the French and Arabic pages
 * are one document in two languages rather than duplicates — the same pairing
 * the `hreflang` tags make in the document head.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/courses', ...listCourses().map((c) => `/courses/${c.slug}`)]

  const url = (locale: string, path: string) =>
    locale === routing.defaultLocale ? `${SITE}${path}` : `${SITE}/${locale}${path}`

  return paths.map((path) => ({
    url: url(routing.defaultLocale, path),
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/courses' ? 0.8 : 0.7,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, url(l, path)]),
      ),
    },
  }))
}
