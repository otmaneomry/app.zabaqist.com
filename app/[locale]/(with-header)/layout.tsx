/**
 * The signed-in shell: brand chrome, then the page.
 *
 * `bg-zb-cream` and not the body's white. The cream is the ground the palette
 * was measured against — every AA ratio in scripts/test-course.mjs is "on
 * cream" — and it is what the landing page stands on, so leaving the app white
 * made signing in feel like leaving the product. It also earns the white cards
 * inside: on white they were invisible rectangles held together by a border.
 *
 * The session is read here, once, and only the three fields the header draws
 * are passed down.
 *
 * It is ALSO where the closed beta is enforced for a second time. `proxy.ts`
 * asks only whether Supabase recognises the caller; the guest list is
 * `public.allowed_emails`, and it was checked in exactly one place —
 * `/auth/callback`. The publishable key ships in every browser bundle, so a
 * PKCE exchange run directly against the project never passes through that
 * route, and arrived here holding a session the gate was happy to accept. RLS
 * still refused such a caller every row, but the chapters are the thing the
 * beta is keeping closed.
 *
 * The real fix is a Supabase `before_user_created` auth hook, so no session is
 * ever minted for an address that is not invited. That needs enabling in the
 * dashboard; this check does not, and costs one indexed lookup per page.
 */

import React from 'react'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Header from '@/components/Header'
import SyncProvider from '@/components/SyncProvider'
import { E2E_COOKIE, E2E_USER, isE2E } from '@/lib/e2e'
import { createClient } from '@/lib/supabase/server'

export default async function WithHeaderLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // `proxy.ts` has already turned away anyone without a session, so this is
  // for drawing an avatar. It must not take the page down when the service is
  // unusable — an e2e-bypassed request reaches here with no Supabase at all.
  let account = null
  let refused = false
  try {
    const supabase = await createClient()
    account = (await supabase.auth.getUser()).data.user

    if (account?.email) {
      const { data: allowed, error } = await supabase.rpc('is_email_allowed', {
        addr: account.email,
      })
      // A check that FAILED is not a refusal — the same distinction the
      // callback makes. A database hiccup must not throw out an invited
      // student mid-session.
      if (!error && allowed === false) {
        // NOT `signOut()` here. A server component cannot write cookies —
        // `lib/supabase/server.ts` swallows the attempt by design — so the
        // session survived, `/signin` saw a valid user, sent them back, and
        // this refused them again: a redirect loop. `/auth/signout` is a route
        // handler, which can end it for real.
        account = null
        refused = true
      }
    }
  } catch {
    /* no profile to draw */
  }

  // Outside the try: `redirect` works by throwing, and catching it here would
  // swallow the redirect and render the page to someone just turned away.
  if (refused) redirect('/auth/signout?reason=not-allowed')

  // Google's profile fields arrive under user_metadata, with two spellings of
  // the avatar depending on how the identity was linked.
  const meta = account?.user_metadata ?? {}
  const user = account
    ? {
        name: (meta.full_name ?? meta.name ?? null) as string | null,
        email: account.email ?? null,
        image: (meta.avatar_url ?? meta.picture ?? null) as string | null,
      }
    : // A bypassed request has passed the gate but holds no Supabase session,
      // so there is no profile to draw. Give the chrome a label rather than
      // leaving the account menu — and its sign-out — untestable.
      isE2E((await cookies()).get(E2E_COOKIE)?.value)
      ? E2E_USER
      : undefined

  return (
    <div className="min-h-screen bg-zb-cream">
      {/* Only for a real session. A request through the e2e bypass has no
          `auth.uid()`, so every RLS policy would refuse it and the sync would
          retry forever against a database that is right to say no. */}
      {account?.email && (
        <SyncProvider userId={account.id} email={account.email} />
      )}
      <Header user={user} />
      <main>{children}</main>
    </div>
  )
}
