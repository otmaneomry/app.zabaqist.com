/**
 * The Supabase client for server components, actions and route handlers.
 *
 * Async because `cookies()` is: the session lives in cookies, and reading them
 * is what tells Supabase who is asking.
 *
 * The `setAll` catch is not laziness. A server *component* cannot set cookies —
 * only actions and route handlers can — so a token refresh attempted during a
 * render must be allowed to fail silently. `proxy.ts` refreshes on every
 * request, which is what makes that safe: the write it could not do here has
 * already happened at the edge.
 */

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const store = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll: () => store.getAll(),
        setAll: (list) => {
          try {
            for (const { name, value, options } of list)
              store.set(name, value, options)
          } catch {
            /* called from a server component — see the note above */
          }
        },
      },
    },
  )
}
