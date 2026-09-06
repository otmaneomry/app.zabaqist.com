import { defineRouting } from 'next-intl/routing'

/**
 * French is the product's primary register and stays unprefixed at `/`; Arabic
 * lives under `/ar/…`.
 *
 * `as-needed` is what lets this be added to an app that already had routes:
 * every existing French URL keeps working unchanged, and Arabic gets its own
 * shareable, indexable address rather than hiding behind a cookie.
 */
export const routing = defineRouting({
  locales: ['fr', 'ar'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
})

export type Locale = (typeof routing.locales)[number]

/**
 * Tag Moroccan Arabic as `ar-MA`, never `ary`: CSS `:lang(ar)` matches `ar-MA`
 * and does NOT match `ary`, so the Arabic typography guard in globals.css would
 * be escaped silently.
 */
export const htmlLang: Record<Locale, string> = { fr: 'fr', ar: 'ar-MA' }
export const dir: Record<Locale, 'ltr' | 'rtl'> = { fr: 'ltr', ar: 'rtl' }
