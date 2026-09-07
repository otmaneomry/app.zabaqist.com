import type { MetadataRoute } from 'next'

import { siteUrl } from '@/lib/siteUrl'

/**
 * Crawl rules.
 *
 * The app pages worth indexing are the landing page and the chapters; the
 * onboarding funnel, the private dashboard and the auth screens are not — they
 * are either per-device state or a flow a search result should not drop someone
 * into halfway.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // `/home` is the private dashboard and belongs here as much as /progres
    // does; it was the one page in the signed-in shell nobody listed.
    disallow: [
      '/home',
      '/demarrer',
      '/filiere',
      '/progres',
      '/signin',
      '/signup',
      '/auth/',
      '/api/',
    ],
    },
    // `siteUrl()` refuses a localhost origin in a production build; this line
    // used to publish whatever was in .env.local straight into robots.txt.
    sitemap: `${siteUrl()}/sitemap.xml`,
  }
}
