#!/usr/bin/env node
/**
 * Read the journal.
 *
 *   npm run events                  the last 30 lines
 *   npm run events -- --n 100       more of them
 *   npm run events -- --denied      only refusals
 *   npm run events -- --who omry    only lines whose email contains this
 *   npm run events -- --event signin_ok
 *
 * `public.auth_events` is written by `log_auth_event`, which any visitor may
 * call, and read by nobody: the table has RLS on and no SELECT policy, so the
 * publishable key that ships to every browser sees an empty list. That is the
 * point — a log of who tried to sign in is exactly the sort of thing that must
 * not be readable from a browser — and it is also why this script needs the
 * secret key rather than the one in NEXT_PUBLIC_*.
 *
 * The secret key is never printed, never sent anywhere but Supabase, and lives
 * in .env.local, which is gitignored.
 *
 * Despite the table's name the `event` column is free text: anything else worth
 * a durable, append-only line — a failed sync, a migration run — can use the
 * same function and show up here.
 */

import { readFileSync } from 'node:fs'

/* ── config ─────────────────────────────────────────────────────────── */

function env() {
  let raw = ''
  try {
    raw = readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
  } catch {
    return {}
  }
  return Object.fromEntries(
    raw
      .split('\n')
      .filter((l) => l.includes('=') && !l.trimStart().startsWith('#'))
      .map((l) => {
        const i = l.indexOf('=')
        return [l.slice(0, i).trim(), l.slice(i + 1).trim()]
      }),
  )
}

const e = { ...env(), ...process.env }
const URL_ = e.NEXT_PUBLIC_SUPABASE_URL
// Supabase calls this the service_role / secret key. Either name works.
const SECRET = e.SUPABASE_SECRET_KEY || e.SUPABASE_SERVICE_ROLE_KEY

if (!URL_) {
  console.error('NEXT_PUBLIC_SUPABASE_URL is missing from .env.local')
  process.exit(1)
}
if (!SECRET) {
  console.error(`
  This reads a table the browser key cannot see, by design.

  Supabase → Project Settings → API Keys → secret / service_role,
  then add the line to .env.local (it is gitignored):

      SUPABASE_SECRET_KEY=<paste it>

  It is a full-access key: keep it out of NEXT_PUBLIC_* and out of git.
`)
  process.exit(1)
}

/* ── arguments ──────────────────────────────────────────────────────── */

const argv = process.argv.slice(2)
const flag = (name) => {
  const i = argv.indexOf(`--${name}`)
  return i >= 0 ? (argv[i + 1] ?? '') : null
}
const has = (name) => argv.includes(`--${name}`)

const limit = Number(flag('n') ?? 30) || 30
const who = flag('who')
const event = flag('event')
const deniedOnly = has('denied')

/* ── query ──────────────────────────────────────────────────────────── */

const params = new URLSearchParams({
  select: 'at,event,email,user_id,detail',
  order: 'at.desc',
  limit: String(limit),
})
// PostgREST filters. `ilike` needs the wildcards spelled out.
if (who) params.append('email', `ilike.*${who}*`)
if (event) params.append('event', `eq.${event}`)
else if (deniedOnly) params.append('event', 'in.(signin_denied,signin_check_failed)')

const r = await fetch(`${URL_}/rest/v1/auth_events?${params}`, {
  headers: {
    apikey: SECRET,
    Authorization: `Bearer ${SECRET}`,
    Accept: 'application/json',
  },
})

if (!r.ok) {
  console.error(`\n  Supabase refused: HTTP ${r.status}`)
  const body = await r.text()
  if (r.status === 401) console.error('  The key in SUPABASE_SECRET_KEY is not the secret one.')
  else if (body) console.error(`  ${body.slice(0, 300)}`)
  process.exit(1)
}

const rows = await r.json()

/* ── report ─────────────────────────────────────────────────────────── */

const GREY = '\x1b[90m'
const RED = '\x1b[31m'
const GREEN = '\x1b[32m'
const YELLOW = '\x1b[33m'
const OFF = '\x1b[0m'

const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`

const tone = (ev) =>
  ev === 'signin_ok' ? GREEN : /denied|failed|error/.test(ev) ? RED : YELLOW

console.log(`\n  ${plural(rows.length, 'event', 'events')}${who ? ` for “${who}”` : ''}\n`)

if (rows.length === 0) {
  console.log(`  ${GREY}Nothing recorded yet. The journal fills on the next sign-in.${OFF}\n`)
  process.exit(0)
}

for (const row of rows) {
  // Casablanca is what the school day runs on; UTC in the column, local here.
  const at = new Date(row.at).toLocaleString('fr-MA', {
    timeZone: 'Africa/Casablanca',
    dateStyle: 'short',
    timeStyle: 'medium',
  })
  const detail =
    row.detail && Object.keys(row.detail).length > 0
      ? ` ${GREY}${JSON.stringify(row.detail)}${OFF}`
      : ''
  console.log(
    `  ${GREY}${at}${OFF}  ${tone(row.event)}${row.event.padEnd(20)}${OFF}` +
      `${row.email ?? '—'}${detail}`,
  )
}

// The one number worth counting: refusals are the reason this table exists.
const denied = rows.filter((x) => /denied|failed/.test(x.event))
if (denied.length > 0) {
  const names = [...new Set(denied.map((x) => x.email).filter(Boolean))]
  console.log(
    `\n  ${RED}${plural(denied.length, 'refusal', 'refusals')}${OFF}` +
      ` — ${names.join(', ') || 'no address recorded'}`,
  )
  console.log(`  ${GREY}Check the list with: npm run whois -- <address>${OFF}`)
}
console.log()
