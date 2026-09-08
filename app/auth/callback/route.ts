/**
 * Where Google comes back to.
 *
 * Supabase redirects here with a one-time `code`; exchanging it is what sets
 * the session cookies. It lives at `/auth/callback` (outside `app/[locale]`)
 * and `proxy.ts` excludes `/auth` from its matcher — next-intl does not
 * recognise `auth` as a locale, so leaving it in rewrote this to
 * `/fr/auth/callback` and answered 404 to a perfectly good code.
 *
 * It is also where the closed beta is enforced. The allowlist lives in
 * Postgres (`public.allowed_emails`) rather than in the code, so adding a
 * tester is one row and not a deployment.
 *
 * Every outcome is written to `public.auth_events`. Until it was, an invited
 * account that could not get in left no trace at all — not the address it
 * tried, not the reason — so the only evidence was a screenshot of the refusal
 * and a person saying "but I am on the list".
 */

import { NextResponse, type NextRequest } from 'next/server'

import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next')
  // An internal path or nothing: an unchecked value here is an open redirect,
  // and it would be reached through a genuine Zabaqist sign-in.
  const to = next && /^\/(?!\/)/.test(next) ? next : '/home'

  if (!code) return NextResponse.redirect(`${origin}/signin?error=1`)

  let supabase
  try {
    supabase = await createClient()
  } catch {
    // Unconfigured: say so on the sign-in page rather than throwing a 500 at
    // someone who has just come back from Google.
    return NextResponse.redirect(`${origin}/signin?error=1`)
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(code)
  if (error || !data.user?.email)
    return NextResponse.redirect(`${origin}/signin?error=1`)

  // Closed beta. `is_email_allowed` is SECURITY DEFINER and answers a yes/no —
  // the table itself has no RLS policy, so the guest list cannot be read out
  // through the publishable key that ships to every browser.
  //
  // Gmail ignores dots, and Google returns the undotted form; the SQL function
  // normalises both sides, so `omry.otmane@` and `omryotmane@` are one account.
  const email = data.user.email

  /** Never let the journal break a sign-in that would otherwise work. */
  const log = async (event: string, detail: Record<string, unknown> = {}) => {
    try {
      await supabase.rpc('log_auth_event', {
        p_event: event,
        p_email: email,
        p_detail: detail,
      })
    } catch {
      /* the log is diagnostic; losing a line is not worth failing a login */
    }
  }

  const { data: allowed, error: checkError } = await supabase.rpc(
    'is_email_allowed',
    { addr: email },
  )

  // A failed CHECK is not a refusal, and telling an invited student they are
  // "not yet invited" because the database hiccuped is how you lose them. The
  // two cases now say different things and are logged apart.
  if (checkError) {
    await log('signin_check_failed', {
      code: checkError.code ?? null,
      message: checkError.message ?? null,
    })
    await supabase.auth.signOut()
    return NextResponse.redirect(`${origin}/signin?error=check-failed`)
  }

  if (!allowed) {
    await log('signin_denied', { reason: 'not_on_allowlist' })
    // Do not leave a usable session behind for an address that is not invited.
    await supabase.auth.signOut()
    return NextResponse.redirect(`${origin}/signin?error=not-allowed`)
  }

  await log('signin_ok')
  return NextResponse.redirect(`${origin}${to}`)
}
