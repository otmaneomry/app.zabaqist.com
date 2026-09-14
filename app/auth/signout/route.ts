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
 *
 * ── Why it answers with a page instead of a redirect ─────────────────────────
 * Cookies are only half of what a session leaves behind. The other half is
 * `localStorage`, and no server can touch it: both sign-out paths ran entirely
 * on the server and nothing client-side ever called `resetLocalState`. On a
 * shared machine that meant signing out cleared nothing a reader can see. A
 * signed-out visitor loading `/` saw the previous student's chapters lit as
 * done, and `/demarrer` — a PUBLIC path, no session required — handed them back
 * that student's motivation, filière and track.
 *
 * So the last step of signing out has to happen in the browser, and the only
 * place this route can put browser code is in its own response. Both sign-out
 * paths come through here now, including `signOutAction`, so there is one
 * answer to "what does signing out clear" rather than two that drift.
 *
 * With JavaScript off the `<noscript>` refresh still gets the reader out, and
 * nothing is left behind either — every key this app stores was written by
 * JavaScript, so a browser that never ran any has none to clear.
 */

import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

import { E2E_COOKIE } from '@/lib/e2e'
import { safeInternalPath } from '@/lib/safePath'
import { createClient } from '@/lib/supabase/server'
import { DEVICE_KEY_PATTERN } from '@/lib/sync'

/** Only the reasons `app/[locale]/signin/page.tsx` knows how to render. */
const REASONS = new Set(['not-allowed', 'check-failed'])

/** For the `<noscript>` refresh, which puts the destination in an attribute. */
const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/**
 * The page that finishes the job.
 *
 * The pattern is imported rather than retyped: two regexes that are supposed to
 * describe the same set of keys stop agreeing the moment one of them is edited
 * alone, and the one that would be wrong here is the one nothing tests.
 *
 * Everything goes, the owner included. That is the point of the button — the
 * device stops belonging to this student — and keeping it was its own defect:
 * nothing else ever removed `zabaqist:owner`, so the last student's uuid sat on
 * the machine for good and the next genuine visitor, who answered the whole
 * funnel while signed OUT, had that work wiped the instant they signed up,
 * because `claimDevice` saw a previous owner who was not them. Work done while
 * nobody was signed in should follow whoever then signs up; work belonging to
 * an identified student must not. Sign-out is what tells the two apart.
 */
function farewellPage(dest: string): string {
  // `JSON.stringify` for the string literal, and `<` neutralised so no
  // destination can close this script tag early.
  const js = JSON.stringify(dest).replace(/</g, '\\u003C')
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<title>Déconnexion…</title>
<noscript><meta http-equiv="refresh" content="0;url=${escapeHtml(dest)}"></noscript>
</head>
<body>
<script>
(function () {
  try {
    var doomed = []
    var re = new RegExp(${JSON.stringify(DEVICE_KEY_PATTERN)})
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i)
      if (k && re.test(k)) doomed.push(k)
    }
    for (var j = 0; j < doomed.length; j++) localStorage.removeItem(doomed[j])
  } catch (e) {
    /* storage unavailable — there was nothing to forget */
  }
  location.replace(${js})
})()
</script>
</body>
</html>
`
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const raw = searchParams.get('reason')
  const reason = raw && REASONS.has(raw) ? raw : null

  // Where to land afterwards. `signOutAction` passes the landing page in the
  // reader's own language; the layout's refusal passes nothing and goes to the
  // sign-in page with its reason. Validated either way — an unchecked `next` is
  // an open redirect reached through a real sign-out.
  const dest = safeInternalPath(
    searchParams.get('next'),
    `/signin${reason ? `?error=${reason}` : ''}`,
  )

  try {
    const supabase = await createClient()
    // `local`, matching `signOutAction`: signing out of a school computer must
    // not sign the student out on their phone.
    await supabase.auth.signOut({ scope: 'local' })
  } catch {
    // Unconfigured or unreachable. The page below still gets them off the
    // page that refused them, and the cookies expire on their own.
  }

  // The e2e bypass IS the session in a test run, so sign-out has to end it too
  // — including on this path, which the refused-account redirect also uses.
  const store = await cookies()
  store.delete(E2E_COOKIE)

  return new NextResponse(farewellPage(dest), {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      // Never reused: it carries a destination and it clears a device.
      'cache-control': 'no-store',
    },
  })
}
