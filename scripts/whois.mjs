/**
 * Why can this address not sign in?
 *
 *   npm run whois -- someone@gmail.com
 *
 * Asks the live database the same question the auth callback asks, in every
 * form the address can take. Until this existed the only way to answer was to
 * ask the person to try again and watch.
 *
 * It uses the publishable key, so it can call `is_email_allowed` — which is
 * SECURITY DEFINER and answers a yes/no — but it cannot read `allowed_emails`
 * or `auth_events`. That is deliberate: those hold every invited address, and
 * this key ships to every browser. To READ the journal, use the dashboard or a
 * service key.
 */

import { readFileSync } from 'node:fs'
import { createClient } from '@supabase/supabase-js'

const env = Object.fromEntries(
  readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.trimStart().startsWith('#'))
    .map((l) => {
      const i = l.indexOf('=')
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()]
    }),
)

const url = env.NEXT_PUBLIC_SUPABASE_URL
const key = env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
if (!url || !key) {
  console.error('NEXT_PUBLIC_SUPABASE_URL / _PUBLISHABLE_KEY missing from .env.local')
  process.exit(1)
}

const addr = process.argv[2]
if (!addr) {
  console.error('usage: npm run whois -- someone@gmail.com')
  process.exit(1)
}

/** Gmail ignores dots and case; the database folds both. */
const forms = (a) => {
  const [user = '', domain = ''] = a.split('@')
  const set = new Set([
    a,
    a.toLowerCase(),
    a.toUpperCase(),
    `${user.replace(/\./g, '')}@${domain}`.toLowerCase(),
  ])
  return [...set]
}

const sb = createClient(url, key)

console.log(`\nChecking ${addr}\n`)

let anyAllowed = false
for (const form of forms(addr)) {
  const { data, error } = await sb.rpc('is_email_allowed', { addr: form })
  if (error) {
    console.log(`  ERROR    ${form}`)
    console.log(`           ${error.code ?? ''} ${error.message}`)
    continue
  }
  if (data) anyAllowed = true
  console.log(`  ${data ? 'ALLOWED ' : 'refused '} ${form}`)
}

console.log()
if (anyAllowed) {
  console.log('  On the list. If this account still cannot sign in, the refusal')
  console.log('  came from somewhere else — read public.auth_events for the')
  console.log('  attempt: signin_denied means the list said no, and')
  console.log('  signin_check_failed means the check itself errored.')
} else {
  console.log('  Not on the list in any form. Add it with:')
  console.log(`    insert into public.allowed_emails (email, note)`)
  console.log(`    values ('${addr}', 'why');`)
  console.log('  The trigger from 0002 normalises it on the way in, so a typed')
  console.log('  address with dots or capitals now matches what Google sends.')
}
console.log()
