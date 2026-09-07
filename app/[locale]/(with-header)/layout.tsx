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
 * are passed down. `proxy.ts` has already turned away anyone without one, so
 * this is for rendering an avatar, not for deciding access.
 */

import React from 'react'

import { cookies } from 'next/headers'

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
  try {
    const supabase = await createClient()
    account = (await supabase.auth.getUser()).data.user
  } catch {
    /* no profile to draw */
  }

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
