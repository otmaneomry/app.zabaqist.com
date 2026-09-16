/**
 * Where a redirect may send someone.
 *
 * Four places validated `next=` independently and all four had the same hole:
 * they rejected `//evil.com` and accepted a backslash. A browser resolves a
 * backslash as a slash, so `/\evil.com` leaves the site —
 *
 *   new URL(String.raw`/\evil.com`, 'https://app.zabaqist.com')
 *     → https://evil.com/
 *
 * — and it is reached through a genuine Zabaqist sign-in, which is exactly what
 * makes an open redirect worth phishing with. One function now, so the next
 * caller inherits the fix instead of rewriting the bug.
 */

import { routing } from '@/i18n/routing'

/** A backslash, or a control character. No in-app path contains either. */
const HOSTILE = /[\\\x00-\x1f\x7f]/

/**
 * `raw` if it is an in-app path, `fallback` otherwise.
 *
 * Accepts only a single leading slash followed by something that is not a
 * second slash — `//host` and `/\host` are both protocol-relative once a
 * browser has finished parsing them.
 */
export function safeInternalPath(
  raw: string | null | undefined,
  fallback = '/home',
): string {
  if (typeof raw !== 'string' || raw.length === 0) return fallback
  if (raw[0] !== '/') return fallback
  if (raw[1] === '/' || raw[1] === '\\') return fallback
  if (HOSTILE.test(raw)) return fallback
  return raw
}

/** `p` without its locale prefix: `/ar/progres` → `/progres`, `/ar` → `/`. */
function unprefixLocale(p: string): string {
  for (const l of routing.locales) {
    if (p === `/${l}`) return '/'
    if (p.startsWith(`/${l}/`)) return p.slice(l.length + 1)
  }
  return p
}

/**
 * An in-app path with its locale prefix removed — for the locale-aware
 * navigation that will put one back.
 *
 * Both halves in one function because the ORDER is the whole point, and it was
 * wrong: `safeInternalPath` accepted `/fr//evil.com` (one leading slash, then
 * `f`), stripping `/fr` afterwards turned it back into `//evil.com`, and the
 * default locale takes no prefix — so `redirect` sent a protocol-relative
 * Location, reached through a genuine Zabaqist sign-in link. Validating what
 * is actually navigated to is the only order that holds, and a caller that
 * cannot see both steps cannot get them the wrong way round.
 *
 * `proxy.ts` keeps its own `withoutLocale`: it runs before the gate on every
 * request and does not sanitise anything, so it is a different job that
 * happens to look the same.
 */
export function safeUnprefixedPath(
  raw: string | null | undefined,
  fallback = '/home',
): string {
  return safeInternalPath(
    typeof raw === 'string' ? unprefixLocale(raw) : raw,
    fallback,
  )
}
