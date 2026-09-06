/**
 * Locale negotiation, at the edge.
 *
 * `proxy.ts` and not `middleware.ts`: Next 16 renamed the convention and warns
 * on every `next dev` while the old name is used. Same contract — a default
 * export and a `config.matcher` — so this is the rename and nothing else.
 *
 * next-intl decides the locale here: `as-needed` prefixing means French is
 * served unprefixed at `/` and Arabic at `/ar`, with the choice remembered in
 * a NEXT_LOCALE cookie.
 */

import createMiddleware from 'next-intl/middleware'

import { routing } from '@/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Everything except API routes, Next internals, and anything with a file
  // extension (favicon, images, robots.txt).
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
}
