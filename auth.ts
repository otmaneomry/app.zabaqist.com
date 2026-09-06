/**
 * Google sign-in, on JWT sessions.
 *
 * No database adapter, deliberately and for now: the session lives in a signed
 * cookie, which is enough to know who is reading and to close the routes. What
 * it is NOT enough for is carrying a student's work between devices — progress,
 * XP, filière and the funnel's answers still live in `localStorage` across five
 * lib files, so signing in on a phone shows nothing from the laptop. See
 * AUTH.md §3: that is a decision still open, not an oversight.
 *
 * Credentials come from `.env.local` (AUTH_SECRET, AUTH_GOOGLE_ID,
 * AUTH_GOOGLE_SECRET, AUTH_URL). Auth.js reads AUTH_GOOGLE_* by convention, so
 * the provider is configured without naming them here.
 */

import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'

/**
 * A way for the browser suite to obtain a session without driving Google.
 *
 * OAuth cannot be scripted — it leaves the origin, needs a real account and
 * shows a consent screen — so the 169 checks in `scripts/test-course.mjs` would
 * otherwise have no way past the gate.
 *
 * Gated on `E2E_AUTH_SECRET`, NOT on `NODE_ENV`: the suite runs against a real
 * production build (`npm run build && npm start`), so a NODE_ENV check would
 * delete the provider in exactly the case that needs it. Two locks instead:
 * the provider does not exist unless the variable is set, and when it does the
 * caller still has to present the matching value. A deployment that never sets
 * it has no endpoint to find; one that sets it by accident still has nothing an
 * attacker can guess.
 */
const e2eSecret = process.env.E2E_AUTH_SECRET
const testProvider = e2eSecret
  ? [
      Credentials({
        id: 'e2e',
        name: 'End-to-end tests',
        credentials: { email: {}, secret: {} },
        authorize: (c) =>
          c.secret === e2eSecret
            ? {
                id: 'e2e-user',
                email: String(c.email ?? 'test@test.com'),
                name: 'Test',
              }
            : null,
      }),
    ]
  : []

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      // Ask Google for a fresh account choice rather than silently reusing the
      // one already signed in on the device. Students share machines.
      authorization: { params: { prompt: 'select_account' } },
    }),
    ...testProvider,
  ],

  // Our own page, not Auth.js's default — it is branded, bilingual, and the
  // one place the product asks for anything.
  pages: { signIn: '/signin', error: '/signin' },

  session: { strategy: 'jwt' },

  callbacks: {
    /**
     * Keep the Google `sub` on the token and expose it as `session.user.id`.
     *
     * This is the value a future database would key a student's progress on,
     * so it is worth carrying from the first day even while nothing reads it —
     * adding it later means every existing session has to be invalidated.
     */
    jwt({ token, account }) {
      if (account?.providerAccountId) token.sub = account.providerAccountId
      return token
    },
    session({ session, token }) {
      if (session.user && token.sub) session.user.id = token.sub
      return session
    },
  },
})

export const { GET, POST } = handlers
