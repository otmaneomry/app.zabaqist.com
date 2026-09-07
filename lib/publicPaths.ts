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
 */

/** Paths reachable without a session, WITHOUT a locale prefix. */
export const PUBLIC_PATHS = ['/', '/signin', '/signup'] as const

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
