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

  const supabase = await createClient()
  const { data, error } = await supabase.auth.exchangeCodeForSession(code)
  if (error || !data.user?.email)
    return NextResponse.redirect(`${origin}/signin?error=1`)

  // Closed beta. `is_email_allowed` is SECURITY DEFINER and answers a yes/no —
  // the table itself has no RLS policy, so the guest list cannot be read out
  // through the publishable key that ships to every browser.
  //
  // Gmail ignores dots, and Google returns the undotted form; the SQL function
  // normalises both sides, so `omry.otmane@` and `omryotmane@` are one account.
  const { data: allowed, error: checkError } = await supabase.rpc(
    'is_email_allowed',
    { addr: data.user.email },
  )

  if (checkError || !allowed) {
    // Do not leave a usable session behind for an address that is not invited.
    await supabase.auth.signOut()
    return NextResponse.redirect(`${origin}/signin?error=not-allowed`)
  }

  return NextResponse.redirect(`${origin}${to}`)
}
