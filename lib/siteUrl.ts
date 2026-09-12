/**
 * This deployment's public origin, for the places a URL has to be absolute:
 * `robots.txt`, `sitemap.xml`, canonical tags and Open Graph.
 *
 * It reads `NEXT_PUBLIC_SITE_URL`, which is `http://localhost:3000` in a
 * developer's `.env.local` — correct there, and quietly catastrophic if it ever
 * reaches a build that ships, because `robots.txt` then tells every crawler the
 * sitemap lives on their own machine. That failure is invisible: the page looks
 * fine and nothing throws.
 *
 * So a production build refuses a localhost origin rather than publishing one.
 * Development keeps it, because that is what a dev server is.
 */

const FALLBACK = 'https://app.zabaqist.com'

const isLocal = (u: string) => /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])/.test(u)

export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (!raw) return FALLBACK

  let url: URL
  try {
    url = new URL(raw)
  } catch {
    // A malformed value is worse than no value: it would be concatenated into
    // every canonical tag on the site.
    return FALLBACK
  }

  // `new URL` is happy with `mailto:` and `javascript:`; their `origin` is the
  // string "null", which would be concatenated into every canonical tag and
  // then thrown at `new URL()` by the layout's metadataBase.
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return FALLBACK

  if (isLocal(url.origin) && process.env.NODE_ENV === 'production') return FALLBACK

  // Trailing slashes double up when paths are appended.
  return url.origin
}
