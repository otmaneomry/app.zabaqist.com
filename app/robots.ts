import type { MetadataRoute } from 'next'

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
      disallow: ['/demarrer', '/filiere', '/progres', '/signin', '/signup', '/api/'],
    },
    sitemap: 'https://zabaqist.com/sitemap.xml',
  }
}
