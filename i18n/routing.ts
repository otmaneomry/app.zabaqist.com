import { defineRouting } from 'next-intl/routing'

/**
 * French is the product's primary register and stays unprefixed at `/`; Arabic
 * lives under `/ar/…`.
 *
 * `as-needed` is what lets this be added to an app that already had routes:
 * every existing French URL keeps working unchanged, and Arabic gets its own
 * shareable, indexable address rather than hiding behind a cookie.
 */
/**
 * The same flag `lib/publicPaths.ts` exports as `ALLOW_INDEXING`, read again
 * here rather than imported: that file imports `routing` from this one, so
 * importing it back would close a cycle. Both spellings are the same
 * build-time `NEXT_PUBLIC_` inline, and the rule they serve is the one CLAUDE.md
 * states — the flag moves every indexing signal together or it moves none.
 */
const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === '1'

export const routing = defineRouting({
  locales: ['fr', 'ar'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
  /**
   * next-intl publishes `Link: rel="alternate" hreflang` RESPONSE HEADERS from
   * the proxy, on every route, in both languages. Google honours those exactly
   * as it honours the tags in the head — which made them a sixth indexing
   * signal, and the only one nobody had counted.
   *
   * While the beta is closed the app says three things: `noindex`, no sitemap,
   * canonical deferring to `zabaqist.com`. The headers were saying a fourth —
   * "the Arabic version of this app page is at app.zabaqist.com/ar" — on the
   * same response. That is the contradiction this flag exists to prevent, one
   * layer below the HTML, where reading the page source would never show it.
   *
   * At launch the pairing is wanted and correct, so it follows the flag rather
   * than being switched off outright.
   */
  alternateLinks: ALLOW_INDEXING,
})

export type Locale = (typeof routing.locales)[number]

/**
 * Tag Moroccan Arabic as `ar-MA`, never `ary`: CSS `:lang(ar)` matches `ar-MA`
 * and does NOT match `ary`, so the Arabic typography guard in globals.css would
 * be escaped silently.
 */
export const htmlLang: Record<Locale, string> = { fr: 'fr', ar: 'ar-MA' }
export const dir: Record<Locale, 'ltr' | 'rtl'> = { fr: 'ltr', ar: 'rtl' }
