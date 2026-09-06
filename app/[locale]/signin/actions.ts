'use server'

/**
 * Server actions for signing in and out.
 *
 * They run on the server because they set session cookies; the Supabase client
 * they use reads and writes those through `next/headers`.
 */

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

/**
 * Start the Google flow.
 *
 * `next` is where to land afterwards, validated as an internal path — an
 * unchecked value is an open redirect reached through a real sign-in page.
 */
export async function signInWithGoogle(next?: string) {
  const safe = next && /^\/(?!\/)/.test(next) ? next : '/home'
  const supabase = await createClient()

  // Build the callback from the request's own host rather than a hardcoded URL,
  // so localhost, a preview deployment and production each come back to
  // themselves without a per-environment variable to forget.
  const origin = (await headers()).get('origin') ?? ''

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(safe)}`,
      // Ask Google for a fresh account choice rather than silently reusing the
      // one already signed in on the device. Students share machines.
      queryParams: { prompt: 'select_account' },
    },
  })

  if (error || !data.url) redirect('/signin?error=1')
  redirect(data.url)
}

export async function signOutAction() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}
