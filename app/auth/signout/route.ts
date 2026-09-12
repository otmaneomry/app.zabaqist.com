/**
 * Ending a session from somewhere that cannot end one.
 *
 * A server COMPONENT cannot write cookies — `lib/supabase/server.ts` swallows
 * the attempt on purpose, and says so. So when the signed-in layout found an
 * account that is no longer on the allowlist and called `signOut()`, nothing
 * was cleared: the redirect landed on `/signin`, that page still saw a valid
 * user, sent them back to `/home`, and the layout refused them again. A loop,
 * until the browser gave up with ERR_TOO_MANY_REDIRECTS.
 *
 * A route handler CAN write cookies. This one actually ends the session, so the
 * next request is signed out and the loop has nowhere to go.
 *
 * It lives under `/auth`, which `proxy.ts` excludes from its matcher — a reader
 * being turned away has to be able to reach the door.
 */

import { NextResponse, type NextRequest } from 'next/server'

import { createClient } from '@/lib/supabase/server'

/** Only the reasons `app/[locale]/signin/page.tsx` knows how to render. */
const REASONS = new Set(['not-allowed', 'check-failed'])

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const raw = searchParams.get('reason')
  const reason = raw && REASONS.has(raw) ? raw : null

  try {
    const supabase = await createClient()
    // `local`, matching `signOutAction`: signing out of a school computer must
    // not sign the student out on their phone.
    await supabase.auth.signOut({ scope: 'local' })
  } catch {
    // Unconfigured or unreachable. The redirect below still gets them off the
    // page that refused them, and the cookies expire on their own.
  }

  return NextResponse.redirect(
    `${origin}/signin${reason ? `?error=${reason}` : ''}`,
  )
}
