/**
 * The Supabase client for browser code.
 *
 * Safe to ship: it carries only the publishable key, and what that key can read
 * or write is decided by Row Level Security in Postgres, not by keeping it
 * secret. That is the whole reason this project moved off Auth.js — RLS answers
 * `auth.uid()` from Supabase's own JWT, so the database can enforce "a student
 * sees only their own rows" without any server code being trusted to remember.
 */

import { createBrowserClient } from '@supabase/ssr'

import { supabaseConfig } from './config'

/**
 * Throws when the configuration is unusable, rather than letting the auth
 * client retry a request that can never succeed — see `./config.ts`. Callers
 * here are all inside effects that already tolerate a rejection.
 */
export const createClient = () => {
  const config = supabaseConfig()
  if (!config) throw new Error('Supabase is not configured')
  return createBrowserClient(config.url, config.key)
}
