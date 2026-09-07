/**
 * The Supabase URL and key, checked before anyone tries to use them.
 *
 * A malformed key does not fail cleanly. `@supabase/ssr` puts it straight into
 * an HTTP header, and a header value has to be a ByteString — so a single
 * non-ASCII character throws `Cannot convert argument to a ByteString`, which
 * the auth client treats as a *retryable network error* and retries. The
 * observed cost was a 25-second page load and an error repeated on every
 * request, with nothing in the message naming the key.
 *
 * That happened for a mundane reason worth designing against: the value pasted
 * into `.env.local` was `sb_publishable_…` — the literal placeholder from
 * DEPLOY.md, ellipsis and all. Copying an example into a config file is a
 * completely ordinary thing to do, so the software should say so plainly
 * instead of retrying a request that can never succeed.
 *
 * `configured()` returns false for anything unusable, and the callers treat
 * that as "nobody is signed in" — the same fail-closed path as an unset
 * variable, which the public pages already survive.
 */

const URL_ = process.env.NEXT_PUBLIC_SUPABASE_URL
const KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

/** Anything a header cannot carry. */
const isAscii = (s: string) => !/[^\x20-\x7e]/.test(s)

/**
 * Usable, or a reason it is not.
 *
 * The reason is logged once per process rather than per request: a message
 * repeated on every page load is the thing people learn to scroll past.
 */
function validate(): { ok: true } | { ok: false; why: string } {
  if (!URL_ || !KEY) return { ok: false, why: 'NEXT_PUBLIC_SUPABASE_* is not set' }
  if (!isAscii(KEY))
    return {
      ok: false,
      why:
        'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY contains a non-ASCII character — ' +
        'it looks like a placeholder was pasted rather than the real key ' +
        '(Supabase → Project Settings → API Keys)',
    }
  if (!isAscii(URL_)) return { ok: false, why: 'NEXT_PUBLIC_SUPABASE_URL contains a non-ASCII character' }
  // The shortest real publishable key is far longer than any placeholder.
  if (KEY.length < 40)
    return {
      ok: false,
      why: `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY is ${KEY.length} characters — too short to be a real key`,
    }
  return { ok: true }
}

const result = validate()
let warned = false

/**
 * Why the configuration is unusable, or null when it is fine.
 *
 * For the sign-in page to show in development. Never shown in production: a
 * visitor has no use for the name of an environment variable, and saying which
 * one is missing tells an attacker how the deployment is wired.
 */
export const supabaseConfigError = (): string | null =>
  result.ok ? null : result.why

export function supabaseConfig(): { url: string; key: string } | null {
  if (result.ok) return { url: URL_!, key: KEY! }
  if (!warned) {
    warned = true
    console.error(`[supabase] disabled: ${result.why}`)
  }
  return null
}
