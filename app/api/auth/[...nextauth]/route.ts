/**
 * The OAuth endpoints: /api/auth/signin, /callback/google, /signout, /session.
 *
 * Under `app/api/`, which `proxy.ts` excludes from its matcher — so the Google
 * callback is never locale-prefixed. A `/fr/api/auth/callback/google` would not
 * match the redirect URI registered with Google and every sign-in would fail
 * with `redirect_uri_mismatch`.
 */

export { GET, POST } from '@/auth'
