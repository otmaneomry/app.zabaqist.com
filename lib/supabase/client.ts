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

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  )
