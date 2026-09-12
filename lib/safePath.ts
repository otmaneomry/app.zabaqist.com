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
