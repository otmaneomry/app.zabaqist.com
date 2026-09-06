/**
 * The browser suite's way past the gate — defined once, so the two places that
 * honour it cannot drift apart.
 *
 * Supabase OAuth leaves the origin and shows a consent screen, so it cannot be
 * scripted, and signing in for real would make 178 local checks depend on a
 * remote service being reachable.
 *
 * Two locks, and NOT a `NODE_ENV` check: the suite runs against a production
 * build, so a NODE_ENV guard would disable this in exactly the case that needs
 * it. The cookie is only honoured when `E2E_AUTH_SECRET` is set at all, and
 * then only when it carries that exact value. A deployment that never sets the
 * variable has nothing to bypass; one that sets it by accident still has
 * nothing an attacker can guess.
 *
 * What this does NOT do is mint a Supabase session. A bypassed request has no
 * `auth.uid()`, so Row Level Security refuses it every row — the database is
 * never part of the bargain, and the identity below is a label for the header,
 * not a key to anything.
 */

export const E2E_COOKIE = 'zb-e2e'

const secret = process.env.E2E_AUTH_SECRET

export const isE2E = (cookieValue?: string): boolean =>
  !!secret && cookieValue === secret

/** What the chrome shows for a bypassed request. Display only. */
export const E2E_USER = {
  name: 'Test',
  email: 'test@test.com',
  image: null,
} as const
