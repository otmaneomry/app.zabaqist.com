'use server'

/**
 * Server actions for signing in and out.
 *
 * They run on the server because they set session cookies; the Supabase client
 * they use reads and writes those through `next/headers`.
 */

import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { E2E_COOKIE } from '@/lib/e2e'
import { routing } from '@/i18n/routing'
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

  // `local`, not the default `global`. Global revokes every refresh token the
  // account holds, so signing out of a school computer would also sign the
  // student out on their phone — a punishment for tidying up after yourself.
  await supabase.auth.signOut({ scope: 'local' })

  // The e2e bypass IS the session in a test run, so sign-out has to end it too.
  // Otherwise the gate keeps letting the browser through and the check that
  // sign-out works can only ever be performed by clearing cookies by hand,
  // which tests the test rather than the button.
  const store = await cookies()
  store.delete(E2E_COOKIE)

  // Back to the landing page the reader was actually using. Dropping an Arabic
  // reader onto the French page is a small thing that says the language was a
  // costume rather than a setting.
  const locale = store.get('NEXT_LOCALE')?.value
  const home =
    locale && locale !== routing.defaultLocale && routing.locales.includes(locale as never)
      ? `/${locale}`
      : '/'
  redirect(home)
}
