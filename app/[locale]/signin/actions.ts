'use server'

/**
 * Server actions for the sign-in page.
 *
 * `signIn` and `signOut` must run on the server: they set the session cookie
 * and read AUTH_GOOGLE_SECRET, neither of which can touch the client bundle.
 */

import { signIn, signOut } from '@/auth'

/**
 * Start the Google flow.
 *
 * `next` is where to land afterwards; it is validated as an internal path
 * because an unchecked value here is an open redirect — an attacker can send a
 * student through a genuine Zabaqist sign-in and out to a page they control.
 */
export async function signInWithGoogle(next?: string) {
  const safe = next && /^\/(?!\/)/.test(next) ? next : '/home'
  await signIn('google', { redirectTo: safe })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' })
}
