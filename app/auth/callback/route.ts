/**
 * Where Google comes back to.
 *
 * Supabase redirects here with a one-time `code`; exchanging it is what sets
 * the session cookies. It lives at `/auth/callback` (outside `app/[locale]`)
 * and `proxy.ts` lets it through unauthenticated — a gate in front of the
 * callback would bounce every sign-in to /signin before the code was ever
 * exchanged.
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

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) return NextResponse.redirect(`${origin}${to}`)
  }

  return NextResponse.redirect(`${origin}/signin?error=1`)
}
