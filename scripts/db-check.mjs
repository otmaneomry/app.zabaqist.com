/**
 * Is the database still well structured?  —  L1, report-only.
 *
 * Loop engineering (github.com/cobusgreyling/loop-engineering) says: design a
 * system that discovers work, verifies it, and persists state, then escalate
 * L1 report → L2 assisted → L3 unattended only once the verifier has been
 * right for a week. This is the L1 verifier. It changes nothing, anywhere —
 * not the schema, not the app. It reads three sources and tells you where they
 * disagree:
 *
 *   DECLARED   supabase/migrations/*.sql   — what we said the shape is
 *   EXPECTED   lib/sync.ts, lib/*.ts       — what the app actually asks for
 *   LIVE       the Supabase project        — what is really there
 *
 * The failure this exists to catch is silent. A column renamed in SQL and not
 * in `sync.ts` does not throw: PostgREST accepts the write, drops the unknown
 * field, and a student's progress stops syncing while every screen still looks
 * right. Nothing in the browser suite can see that, because the browser suite
 * never signs in for real.
 *
 *   npm run db:check
 *
 * Credentials come from `.env.local` OR from the environment, whichever has
 * them — `process.env` wins, so CI can pass them as secrets. That matters more
 * than it sounds: reading `.env.local` alone meant that in CI, where the file
 * is gitignored and absent, fourteen checks — every RLS probe, every anonymous
 * write, the allowlist — silently took the "skipped" path and the run went
 * green on structure alone. A run now says how many checks it RAN against how
 * many it DECLARES, so a half-run cannot pass for a whole one.
 *
 * State is kept in `.loop/db-check.json` so a run can say what changed since
 * the last one rather than restating everything every day.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const STATE = path.join(ROOT, '.loop', 'db-check.json')

/* ------------------------------------------------------------------ */
/* Findings                                                            */
/* ------------------------------------------------------------------ */

const findings = []
const add = (level, id, message, detail = '') =>
  findings.push({ level, id, message, detail })

/**
 * Which checks actually executed.
 *
 * A verifier that cannot tell "passed" from "never ran" will eventually
 * announce that a problem is fixed because it stopped looking. That happened
 * here: `cleared` was computed as "in the previous run's findings and not in
 * this one's", so moving `.env.local` aside printed `FIXED: leak-profiles`
 * while the leak was wide open, and the state file was then rewritten without
 * it — the memory of the problem was gone too. Only a check that RAN can
 * clear a finding.
 */
const ran = new Set()
/** Checks this run declares but could not execute, with the reason. */
const skipped = []
const skip = (id, why) => skipped.push({ id, why })

const check = (passed, level, id, message, detail = '') => {
  ran.add(id)
  if (!passed) add(level, id, message, detail)
  return passed
}

/* ------------------------------------------------------------------ */
/* Sources                                                             */
/* ------------------------------------------------------------------ */

/**
 * `.env.local` first, then the real environment on top.
 *
 * `scripts/events.mjs` already merged both; this one and `whois.mjs` read only
 * the file, which is precisely why the workflow's `NEXT_PUBLIC_SUPABASE_URL`
 * was decorative — the script could not see it.
 */
const dotEnv = Object.fromEntries(
  (existsSync('.env.local') ? readFileSync('.env.local', 'utf8') : '')
    .split('\n')
    .filter((l) => l.includes('=') && !l.trimStart().startsWith('#'))
    .map((l) => {
      const i = l.indexOf('=')
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()]
    }),
)
const env = { ...dotEnv, ...process.env }

const URL_ = env.NEXT_PUBLIC_SUPABASE_URL
const KEY = env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
// For the allowlist probe only. Every other live check deliberately uses the
// PUBLISHABLE key, because "Postgres has to say no, not the app" is the property
// being tested; the allowlist probe tests something else entirely.
const SECRET = env.SUPABASE_SECRET_KEY || env.SUPABASE_SERVICE_ROLE_KEY
/**
 * A Supabase Management API personal access token, if there is one.
 *
 * The only key that can read whether an auth hook is ENABLED. See the hook
 * probe at the end of section C for why nothing else can answer that.
 */
const MGMT = env.SUPABASE_ACCESS_TOKEN || env.SUPABASE_MANAGEMENT_TOKEN

/**
 * CI points these at `https://ci.invalid` on purpose, so that a build does not
 * depend on a remote service. That is a fine thing to do and a terrible thing
 * to mistake for a live run: a placeholder host must skip the live half loudly,
 * not fail it and not pass it.
 *
 * `.invalid` and `.example` are reserved for exactly this (RFC 2606); localhost
 * is NOT on the list, because `supabase start` serves a real project there and
 * refusing to check it would be refusing to check the one database a developer
 * can safely break.
 */
const PLACEHOLDER = /\.(invalid|example|test)(:\d+)?\/?$/i

const migrationsDir = path.join(ROOT, 'supabase', 'migrations')
const sql = existsSync(migrationsDir)
  ? readdirSync(migrationsDir)
      .filter((f) => f.endsWith('.sql'))
      .sort()
      .map((f) => readFileSync(path.join(migrationsDir, f), 'utf8'))
      .join('\n')
  : ''

/** Tables and their columns, as declared in SQL. */
function declaredTables() {
  const out = {}
  for (const m of sql.matchAll(
    /create table if not exists public\.(\w+) \(([\s\S]*?)\n\);/g,
  )) {
    const cols = []
    for (const line of m[2].split('\n')) {
      const t = line.trim()
      if (!t || t.startsWith('--') || /^(primary key|constraint|unique|check)\b/i.test(t))
        continue
      const c = /^([a-z_]+)\s+\S/.exec(t)
      if (c) cols.push(c[1])
    }
    out[m[1]] = cols
  }
  // `alter table ... add column` is how a column arrives after the first
  // migration. Reading only CREATE TABLE would report every one of them as a
  // field no table declares.
  for (const m of sql.matchAll(
    /alter table (?:if exists )?public\.(\w+)\s+add column (?:if not exists )?([a-z_]+)/gi,
  ))
    if (out[m[1]] && !out[m[1]].includes(m[2])) out[m[1]].push(m[2])
  return out
}

/* ------------------------------------------------------------------ */
/* A. Declared structure — is the SQL itself sound?                     */
/* ------------------------------------------------------------------ */

const tables = declaredTables()
const names = Object.keys(tables)

check(names.length > 0, 'fail', 'sql-parsed', 'no CREATE TABLE found in supabase/migrations/')

/**
 * Can the profile trigger refuse a signup?
 *
 * `public.profiles.email` is `not null` (0001) and `handle_new_user` inserts
 * `new.email` from an AFTER trigger on `auth.users` — so an account with no
 * address does not fail to get a profile, it fails to be CREATED: the
 * exception rolls back GoTrue's own insert. Google always sends an address,
 * which is the only reason this has never happened; adding a provider that
 * does not would break the first signup through it, and the trail would lead
 * back to a not-null constraint written years earlier.
 *
 * Declared, not probed. The only honest live test is to create a user with no
 * email, which is a write, and this script does not write. What it can do is
 * refuse to let the guard be dropped again: 0009 is the last definition of
 * this function, so it is the one whose body has to carry the early return.
 */
{
  const defs = [...sql.matchAll(
    /create or replace function public\.handle_new_user[\s\S]*?\$\$;/gi,
  )].map((m) => m[0])
  if (defs.length === 0)
    check(false, 'fail', 'profile-trigger-declared',
      'supabase/migrations declares no public.handle_new_user',
      'nothing would fill a profile from the identity Google returns')
  else
    check(/if\s+new\.email\s+is\s+null\s+then/i.test(defs[defs.length - 1]),
      'fail', 'profile-trigger-null-email',
      'the last public.handle_new_user has no null-email guard',
      'profiles.email is `not null` and this is an AFTER trigger, so a signup' +
      ' with no address would be rolled back — the account could not be created')
}

for (const t of names) {
  // The LAST word wins. Migrations are concatenated in order, so a later
  // `DISABLE ROW LEVEL SECURITY` is what the database ends up with — and a test
  // that only asked whether ENABLE appears anywhere would report green on a
  // table whose protection had since been switched off.
  const toggles = [
    ...sql.matchAll(
      new RegExp(`alter table public\\.${t} (enable|disable) row level security`, 'g'),
    ),
  ]
  const last = toggles.at(-1)?.[1]
  check(
    last === 'enable',
    'fail',
    `rls-${t}`,
    last === 'disable'
      ? `${t}: RLS is enabled and then DISABLED again`
      : `${t}: RLS is not enabled`,
    'without it the publishable key reads the whole table',
  )
}

// Policy-less on purpose: no policy means no access through the browser key.
// `allowed_emails` is the guest list; `auth_events` is the journal, and it
// holds the address of everyone who has tried to sign in. Both are written
// through SECURITY DEFINER functions and read from the dashboard.
const INTENTIONALLY_UNREADABLE = new Set(['allowed_emails', 'auth_events'])
for (const t of names) {
  const hasPolicy = new RegExp(`create policy [^\\n]* on public\\.${t}`).test(sql)
  if (INTENTIONALLY_UNREADABLE.has(t)) {
    check(
      !hasPolicy,
      'warn',
      `policy-${t}`,
      `${t}: has a policy, but is meant to be unreachable from the browser`,
      'a readable allowlist tells an attacker who is invited',
    )
  } else {
    check(hasPolicy, 'fail', `policy-${t}`, `${t}: RLS is on but no policy exists`,
      'the table is enabled and then denied to everyone, including its owner')
  }
}

// A user-scoped table must cascade, or deleting an account leaves its rows.
for (const [t, cols] of Object.entries(tables)) {
  const key = cols.includes('user_id') ? 'user_id' : t === 'profiles' ? 'id' : null
  if (!key) continue
  const decl = new RegExp(
    `${key}\\s+uuid[^,]*references auth\\.users\\(id\\) on delete cascade`,
  )
  check(decl.test(sql), 'warn', `cascade-${t}`,
    `${t}.${key}: no "on delete cascade" to auth.users`,
    'deleting an account would leave its rows behind')
}

/* ------------------------------------------------------------------ */
/* B. Declared vs what the app asks for                                 */
/* ------------------------------------------------------------------ */

/**
 * Every column name the app sends to Postgres, and the table it sends it to.
 *
 * This is the whole reason this script exists, and for months it could not see
 * most of it. The old reader was two lines: a regex for key lines indented four
 * to six spaces, then `c.includes('_')` to "only judge names that look like
 * columns". Between them they exempted `id, email, filiere, track, onboarding,
 * day, idx, draft, tried, verdict, hints, event` — every column without an
 * underscore — and saw about twenty of the fifty-nine indented key lines in
 * `lib/sync.ts`. Renaming `track:` to `trak:` in the profile upsert, which is
 * exactly the silent failure the header describes, left this green.
 *
 * It also had no idea which table a key belonged to, so a column that exists on
 * ANY table passed for every table. `activity.sections` written to `profiles`
 * would have been accepted.
 *
 * So the source is read rather than grepped: find each `.from('<table>')`, walk
 * the chained calls after it, and resolve the argument of every `select`,
 * filter and write. When an argument cannot be resolved that is reported too —
 * a reader that has stopped understanding the file has to say so, or it goes
 * back to being a check that cannot fail.
 */
const QUOTES = new Set(["'", '"', '`'])

/** Skip a string, template or comment starting at `i`; returns the index after. */
function skipAt(src, i) {
  const c = src[i]
  if (c === '/' && src[i + 1] === '/') {
    const n = src.indexOf('\n', i)
    return n < 0 ? src.length : n
  }
  if (c === '/' && src[i + 1] === '*') {
    const n = src.indexOf('*/', i + 2)
    return n < 0 ? src.length : n + 2
  }
  if (QUOTES.has(c)) {
    let j = i + 1
    while (j < src.length) {
      if (src[j] === '\\') { j += 2; continue }
      if (src[j] === c) return j + 1
      j++
    }
    return src.length
  }
  return i
}

/** The index just past the bracket balancing the one opened at `open`. */
function matchBracket(src, open) {
  const close = { '(': ')', '{': '}', '[': ']' }[src[open]]
  let depth = 0
  let i = open
  while (i < src.length) {
    const c = src[i]
    const j = skipAt(src, i)
    if (j !== i) { i = j; continue }
    if (c === src[open]) depth++
    else if (c === close) { depth--; if (depth === 0) return i + 1 }
    i++
  }
  return src.length
}

/** Top-level property names of the object literal opened at `open`. */
function literalKeys(src, open) {
  const end = matchBracket(src, open)
  const keys = []
  let unresolved = 0
  let i = open + 1
  let expectKey = true
  let depth = 0
  while (i < end - 1) {
    const c = src[i]
    const j = skipAt(src, i)
    if (j !== i) { i = j; continue }
    if ('([{'.includes(c)) { depth++; i++; continue }
    if (')]}'.includes(c)) { depth--; i++; continue }
    if (depth === 0) {
      if (c === ',') { expectKey = true; i++; continue }
      if (c === ':') { expectKey = false; i++; continue }
      if (expectKey && /\s/.test(c)) { i++; continue }
      // `...spread` and `['computed']` keys hide a name from this reader.
      if (expectKey && (c === '.' || QUOTES.has(c))) { unresolved++; expectKey = false; i++; continue }
      if (expectKey && /[A-Za-z_$]/.test(c)) {
        const m = /^[A-Za-z0-9_$]+/.exec(src.slice(i))
        keys.push(m[0])
        i += m[0].length
        expectKey = false
        continue
      }
      expectKey = false
    }
    i++
  }
  return { keys, unresolved }
}

/** The first object literal in the initialiser of `const <name> = …`. */
function literalOfVar(src, name) {
  const m = new RegExp(`(?:const|let|var)\\s+${name}\\s*(?::[^=\\n]*)?=`).exec(src)
  if (!m) return null
  let i = m.index + m[0].length
  while (i < src.length) {
    const c = src[i]
    const j = skipAt(src, i)
    if (j !== i) { i = j; continue }
    if (c === '{') return literalKeys(src, i)
    if (c === ';') return null
    i++
  }
  return null
}

const WRITE_CALLS = new Set(['upsert', 'insert', 'update'])
const FILTER_CALLS = new Set([
  'eq', 'neq', 'gt', 'gte', 'lt', 'lte', 'like', 'ilike', 'is', 'in',
  'contains', 'containedBy', 'order', 'not',
])

/** `{ uses: [{table, column, how}], blind: [{table, method, why}] }` for one file. */
function supabaseColumnUse(src) {
  const uses = []
  const blind = []
  const re = /\.from\(\s*'(\w+)'\s*\)/g
  let m
  while ((m = re.exec(src))) {
    const table = m[1]
    let i = m.index + m[0].length
    for (;;) {
      while (i < src.length && /\s/.test(src[i])) i++
      if (src[i] !== '.') break
      const call = /^\.([A-Za-z_$][\w$]*)\s*\(/.exec(src.slice(i))
      if (!call) break
      const method = call[1]
      const open = i + call[0].length - 1
      const end = matchBracket(src, open)
      const args = src.slice(open + 1, end - 1).trim()

      if (method === 'select' || method === 'order') {
        const s = /^'([^']*)'/.exec(args)
        if (s && s[1].trim() !== '*')
          for (const col of s[1].split(',').map((x) => x.trim()).filter(Boolean))
            // `alias:column` — PostgREST renames on the way out.
            uses.push({ table, column: col.split(':').pop().trim(), how: method })
      } else if (FILTER_CALLS.has(method)) {
        const s = /^'([^']*)'/.exec(args)
        if (s) uses.push({ table, column: s[1], how: method })
        else blind.push({ table, method, why: `argument is not a literal: ${args.slice(0, 40)}` })
      } else if (WRITE_CALLS.has(method)) {
        const brace = args.indexOf('{')
        let lit = null
        if (args.startsWith('{')) lit = literalKeys(src, open + 1)
        else if (/^[A-Za-z_$][\w$]*$/.test(args)) lit = literalOfVar(src, args)
        else if (brace >= 0) lit = literalKeys(src, open + 1 + brace)
        if (!lit) blind.push({ table, method, why: `cannot resolve ${args.slice(0, 40)}` })
        else {
          if (lit.unresolved)
            blind.push({ table, method, why: `${lit.unresolved} key(s) are spread or computed` })
          for (const k of lit.keys) uses.push({ table, column: k, how: method })
        }
      }
      i = end
    }
  }
  return { uses, blind }
}

/** Every source file that talks to PostgREST, not just `lib/sync.ts`. */
const walkTs = (d, out = []) => {
  if (!existsSync(d)) return out
  for (const e of readdirSync(d)) {
    if (e === 'node_modules' || e.startsWith('.')) continue
    const p = path.join(d, e)
    statSync(p).isDirectory() ? walkTs(p, out) : /\.tsx?$/.test(p) && out.push(p)
  }
  return out
}
const callers = [...walkTs('lib'), ...walkTs('app'), ...walkTs('components')].filter((f) =>
  /\.(from|rpc)\(\s*'/.test(readFileSync(f, 'utf8')),
)

{
  const allUses = []
  const allBlind = []
  const usedTables = new Set()
  const usedFns = new Set()

  for (const file of callers) {
    const src = readFileSync(file, 'utf8')
    const { uses, blind } = supabaseColumnUse(src)
    for (const u of uses) { allUses.push({ ...u, file }); usedTables.add(u.table) }
    for (const b of blind) allBlind.push({ ...b, file })
    for (const m of src.matchAll(/\.rpc\(\s*'(\w+)'/g)) usedFns.add(m[1])
    for (const m of src.matchAll(/\.from\(\s*'(\w+)'\s*\)/g)) usedTables.add(m[1])
  }

  for (const t of usedTables)
    check(!!tables[t], 'fail', `table-${t}`,
      `the app reads or writes "${t}", which no migration declares`,
      [...new Set(allUses.filter((u) => u.table === t).map((u) => u.file))].join(', '))

  // A renamed column does not throw — PostgREST drops the unknown field and the
  // sync silently stops carrying it. Judged against the columns of the table it
  // is actually sent to, so a name borrowed from another table still fails.
  const wrong = allUses.filter(
    (u) => tables[u.table] && !tables[u.table].includes(u.column),
  )
  check(wrong.length === 0, 'fail', 'sync-columns',
    'the app sends or selects fields the table does not declare',
    [...new Set(wrong.map((u) => `${u.file}: ${u.table}.${u.column} (${u.how})`))].join(', '))

  // A reader that stopped understanding the code is a reader that stopped
  // checking it. This is the guard against this whole section quietly going
  // blind again.
  check(allBlind.length === 0, 'warn', 'sync-unreadable',
    `${allBlind.length} Supabase call(s) could not be read for column names`,
    allBlind.map((b) => `${b.file}: ${b.table}.${b.method} — ${b.why}`).slice(0, 4).join('; '))
  check(allUses.length >= 20, 'fail', 'sync-coverage',
    `only ${allUses.length} column use(s) found across ${callers.length} file(s)`,
    'the extractor has lost the thread: it once saw twenty of fifty-nine key' +
    ' lines and reported green. A sudden drop means it is reading nothing again.')

  // An RPC that no migration declares answers PGRST202 at runtime, which the
  // callers treat as "the check failed" — and the layout that asks
  // `is_email_allowed` fails OPEN on that.
  const declaredFns = new Set(
    [...sql.matchAll(/create (?:or replace )?function public\.(\w+)/gi)].map((m) => m[1]),
  )
  const unknownFns = [...usedFns].filter((f) => !declaredFns.has(f))
  check(unknownFns.length === 0, 'fail', 'rpc-declared',
    'the app calls a Postgres function no migration declares', unknownFns.join(', '))
}

// Every device-local store should have somewhere to land.
const STORES = {
  'lib/courseProgress.ts': 'checkpoints',
  'lib/progressTracking.ts': 'course_progress',
  'lib/activity.ts': 'activity',
  'lib/filiere.ts': 'profiles',
  'lib/onboarding.ts': 'profiles',
}
for (const [file, table] of Object.entries(STORES)) {
  if (!existsSync(file)) continue
  check(!!tables[table], 'warn', `store-${table}`,
    `${file} has no table: its data cannot leave the device`)
}

/* ------------------------------------------------------------------ */
/* C. Live — what is actually deployed                                  */
/* ------------------------------------------------------------------ */

// Hoisted so the skip list below can name the checks it is skipping. A run that
// cannot reach the project still has to DECLARE what it would have verified.
const PROBE = '00000000-0000-0000-0000-000000000000'
const probes = {
  profiles: { id: PROBE, email: 'probe@example.invalid' },
  course_progress: { user_id: PROBE, course_slug: '__probe' },
  checkpoints: { user_id: PROBE, course_slug: '__probe', view_id: 'v', idx: 0 },
  activity: { user_id: PROBE, day: '1970-01-01' },
  allowed_emails: { email: 'probe@example.invalid' },
  auth_events: { event: '__probe' },
}
const LIVE_IDS = [
  ...names.flatMap((t) => [`live-${t}`, `unread-${t}`, `leak-${t}`]),
  ...Object.keys(probes).filter((t) => tables[t]).map((t) => `write-${t}`),
  'allowlist-dots',
  'allowlist-open',
  'allowlist-fixture',
  'hook-defined',
  'hook-refuses',
  'hook-enabled',
  'hook-enabled-unknown',
]

const noCreds = !URL_ || !KEY
const placeholder = !noCreds && PLACEHOLDER.test(URL_)

// `env` is itself a check and has to be registered as one. A bare `warn` never
// enters `ran`, so it could never be cleared either — it would be carried as an
// open finding for ever, even on a run that reached the project perfectly well.
const liveWhy = noCreds
  ? 'no Supabase credentials in .env.local or the environment'
  : placeholder
    ? `NEXT_PUBLIC_SUPABASE_URL is a placeholder (${URL_})`
    : ''
check(!liveWhy, 'warn', 'env',
  `${liveWhy} — ${LIVE_IDS.length} live checks skipped`,
  'set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY' +
  ' in the environment (CI secrets work) or in .env.local. Until then this' +
  ' run proves nothing about RLS, anonymous writes or the allowlist.')

if (liveWhy) {
  for (const id of LIVE_IDS) skip(id, liveWhy)
} else {
  const h = { apikey: KEY, authorization: `Bearer ${KEY}`, 'content-type': 'application/json' }

  for (const t of names) {
    const r = await fetch(`${URL_}/rest/v1/${t}?select=*&limit=1`, { headers: h })
    const body = await r.text()

    if (/does not exist|find the table/i.test(body)) {
      check(false, 'fail', `live-${t}`, `${t}: declared in SQL but not in the project`,
        'the migration has not been run against this database')
      skip(`unread-${t}`, `${t} does not exist in the project`)
      skip(`leak-${t}`, `${t} does not exist in the project`)
      continue
    }
    // Reached. Registered as a check that RAN and passed, so that a later run
    // that cannot reach the project does not report it as FIXED.
    check(true, 'fail', `live-${t}`, `${t}: declared in SQL but not in the project`)

    // Anything but a 200 proved nothing. A 401, 403 or 500 is not a table that
    // was verified — it is a table that was not reached, and counting it as a
    // pass is how this check would report green on a project it never
    // successfully queried.
    if (!check(r.status === 200, 'fail', `unread-${t}`,
      `${t}: could not be read to verify it`,
      `HTTP ${r.status} — ${body.slice(0, 60)}`)) {
      skip(`leak-${t}`, `${t} could not be read (HTTP ${r.status})`)
      continue
    }
    // Anonymous read must return nothing. Rows coming back means RLS is off or
    // a policy is wider than intended.
    check(body.trim() === '[]', 'fail', `leak-${t}`,
      `${t}: returns rows to an anonymous caller`,
      `RLS is not protecting it — ${body.slice(0, 60)}`)
  }

  // A write must be refused on every table. This is the property the whole
  // publishable-key design rests on: the key is public, so Postgres has to say
  // no, not the app.
  for (const [t, row] of Object.entries(probes)) {
    if (!tables[t]) continue
    const r = await fetch(`${URL_}/rest/v1/${t}`, {
      method: 'POST', headers: h, body: JSON.stringify(row),
    })
    const body = await r.text()
    // Postgres refusing on POLICY grounds is `42501`, "new row violates
    // row-level security policy", served as 401. Accepting any status >= 400
    // meant the probe's own foreign key could answer for RLS: a 409 from the
    // zero UUID looked exactly like a refusal, so this check would pass with
    // RLS switched off entirely.
    const byPolicy = /42501|row-level security/i.test(body) ||
      r.status === 401 || r.status === 403
    check(byPolicy, 'fail', `write-${t}`,
      `${t}: an ANONYMOUS WRITE was not refused by RLS`,
      `HTTP ${r.status} — expected a 42501 policy refusal, got ${body.slice(0, 60)}`)
  }

  /**
   * The allowlist still has to answer, and still has to fold Gmail's dots.
   *
   * Retried once, but only when the answer is not a clean true/false — an
   * HTTP error, or PostgREST answering mid-schema-reload after a migration.
   * A genuine `false` is reported on the first attempt and never retried,
   * because a real lockout is exactly what this check exists to catch: it
   * fired for real on 2026-09-08, when a row stored with Gmail dots matched
   * nothing and an invited account was refused.
   */
  const rpcHeaders = SECRET
    ? { apikey: SECRET, authorization: `Bearer ${SECRET}`, 'content-type': 'application/json' }
    : h
  const ask = async (addr) => {
    let last = ''
    for (let attempt = 0; attempt < 2; attempt++) {
      // The SECRET key, not the publishable one. This probe is not testing
      // RLS — it is asking whether the allowlist still folds Gmail's dots —
      // and 0005 revoked `anon` from the function, because a yes/no anyone can
      // ask repeatedly is the guest list.
      const r = await fetch(`${URL_}/rest/v1/rpc/is_email_allowed`, {
        method: 'POST', headers: rpcHeaders, body: JSON.stringify({ addr }),
      })
      last = r.ok ? (await r.text()).trim() : `ERROR ${r.status}`
      // 'true' and 'false' are both real answers; anything else is the cache.
      if (last === 'true' || last === 'false') return last
      await new Promise((res) => setTimeout(res, 1500))
    }
    return last
  }
  /**
   * The address to probe comes FROM the list.
   *
   * It used to be the literal `omry.otmane@gmail.com` seeded by 0001. That
   * stopped being a row on 2026-09-12 and this check went red for a reason
   * that had nothing to do with folding — it was asserting something about
   * data that no longer existed, which is the one thing a verifier must never
   * do. Taking a real Gmail row and dotting it tests the same property and
   * cannot go stale.
   */
  let plainAddr = null
  if (SECRET) {
    try {
      const r = await fetch(`${URL_}/rest/v1/allowed_emails?select=email`, { headers: rpcHeaders })
      if (r.ok) {
        const rows = JSON.parse(await r.text())
        plainAddr = rows
          .map((x) => x.email)
          .find((e) => /@gmail\.com$/.test(e) && e.split('@')[0].length > 1)
      }
    } catch { /* falls through to the skip below */ }
  }

  check(!!plainAddr, 'warn', 'allowlist-fixture',
    'no @gmail.com row to probe — the dot-folding check needs one, and' +
    ' SUPABASE_SECRET_KEY in .env.local to read it')
  if (!plainAddr) {
    skip('allowlist-dots', 'no @gmail.com row to probe')
    skip('allowlist-open', 'no @gmail.com row to probe')
  } else {
    const [user, domain] = plainAddr.split('@')
    // A dot anywhere in the local part must fold to the same address.
    const dottedAddr = `${user.slice(0, 1)}.${user.slice(1)}@${domain}`

    // Sequential, not Promise.all: three concurrent RPCs during a schema reload
    // is how one of them gets the stale answer in the first place.
    const dotted = await ask(dottedAddr)
    const plain = await ask(plainAddr)
    const stranger = await ask('definitely-not-invited@example.com')
    check(dotted === 'true' && plain === 'true', 'fail', 'allowlist-dots',
      `the allowlist no longer folds Gmail dots (probed ${plainAddr})`,
    `dotted=${dotted} plain=${plain} — one spelling would be locked out.` +
    ' ONE of the two false means the folding itself broke.' +
    ' BOTH false has two causes and this check cannot tell them apart:' +
    ' either this address is no longer on the list at all (someone edited' +
    ' or removed the row — check it first, it is the likelier one), or a row' +
    ' is stored unnormalised, because' +
    ' is_email_allowed folds the address it is GIVEN, then compares it to the' +
    ' address as STORED, so a row typed with dots matches nothing. The trigger' +
    ' in 0002 prevents new ones; run `npm run whois -- <address>` to confirm.')
    check(stranger === 'false', 'fail', 'allowlist-open',
      'the allowlist admits an address that was never invited', `got ${stranger}`)
  }

  /**
   * The closed beta's strongest lock — and the one nobody was checking.
   *
   * `0004_signup_hook.sql` refuses the CREATION of an account that is not on
   * the list. It is the only thing standing between the beta and a PKCE
   * exchange run directly against the project: the publishable key is in every
   * browser bundle, and `proxy.ts` only asks whether Supabase recognises the
   * caller, not whether the caller was invited. Routes outside
   * `(with-header)` — `/filiere`, `/quiz`, `/quiz/[quizId]`, the catch-all —
   * never ask the allowlist at all.
   *
   * And the migration says so itself: "⚠ Ce fichier ne suffit pas. Le hook
   * doit être activé dans le tableau de bord Supabase." A function that exists
   * and is never called looks identical, from SQL, to one that is enforcing the
   * beta.
   *
   * Three things, and they are NOT the same thing:
   *
   *   hook-defined   the function is in the project at all
   *   hook-refuses   it actually refuses — real behaviour, read-only
   *   hook-enabled   Supabase Auth is configured to CALL it
   *
   * Only the Management API can answer the third, and it needs a personal
   * access token, which neither the publishable nor the secret key is. Without
   * one this run says so loudly and names the dashboard path rather than
   * leaving a silence that reads like a pass.
   */
  {
    const hookName = 'hook_restrict_signup_to_allowlist'
    const declaredHook = new RegExp(`create (?:or replace )?function public\\.${hookName}`, 'i').test(sql)
    if (!declaredHook) {
      check(false, 'fail', 'hook-defined',
        `supabase/migrations declares no public.${hookName}`,
        'the closed beta would then rest on the app alone, which a direct PKCE' +
        ' exchange never goes through')
      skip('hook-refuses', 'the hook is not declared in SQL')
      skip('hook-enabled', 'the hook is not declared in SQL')
      skip('hook-enabled-unknown', 'the hook is not declared in SQL')
    } else if (!SECRET) {
      for (const id of ['hook-defined', 'hook-refuses', 'hook-enabled'])
        skip(id, 'needs SUPABASE_SECRET_KEY to call the function')
      check(false, 'warn', 'hook-enabled-unknown',
        'the signup hook could not be probed: SUPABASE_SECRET_KEY is not set',
        'the beta rests on this hook and nothing here has confirmed it')
    } else {
      // Read-only: the function is a pure predicate over its argument. It is
      // not a signup — nothing is created, nothing is written.
      const call = async (body) => {
        const r = await fetch(`${URL_}/rest/v1/rpc/${hookName}`, {
          method: 'POST',
          headers: { apikey: SECRET, authorization: `Bearer ${SECRET}`, 'content-type': 'application/json' },
          body: JSON.stringify({ event: body }),
        })
        return { status: r.status, text: (await r.text()).trim() }
      }
      const stranger = await call({ user: { email: 'definitely-not-invited@example.com' } })
      const defined = stranger.status !== 404 && !/PGRST202/.test(stranger.text)
      if (!check(defined, 'fail', 'hook-defined',
        `public.${hookName} is in the migrations but not in the project`,
        'the migration has not been run against this database')) {
        skip('hook-refuses', 'the function is not in the project')
        skip('hook-enabled', 'the function is not in the project')
        skip('hook-enabled-unknown', 'the function is not in the project')
      } else {
        check(/403|bêta fermée|waitlist/i.test(stranger.text), 'fail', 'hook-refuses',
          'the signup hook does NOT refuse an uninvited address',
          `it answered ${stranger.text.slice(0, 80)} — an uninvited account could` +
          ' be created by a direct PKCE exchange')

        /**
         * Defined is not enabled. Supabase records enabled auth hooks in the
         * project's auth configuration, which only the Management API exposes
         * (`GET /v1/projects/<ref>/config/auth`, field
         * `hook_before_user_created_enabled`). Neither key this script holds
         * can read it.
         */
        const ref = /https?:\/\/([a-z0-9]+)\.supabase\.(co|in)/i.exec(URL_)?.[1]
        if (!MGMT || !ref) {
          skip('hook-enabled', MGMT
            ? 'the project ref could not be read from NEXT_PUBLIC_SUPABASE_URL'
            : 'no SUPABASE_ACCESS_TOKEN: only the Management API can read whether a hook is enabled')
          check(false, 'warn', 'hook-enabled-unknown',
            `public.${hookName} EXISTS and refuses correctly, but nothing here can` +
            ' say whether Supabase Auth actually CALLS it',
            'Authentication → Hooks → Before User Created → Postgres →' +
            ` public.${hookName}. Confirm it is ON in the dashboard, or set` +
            ' SUPABASE_ACCESS_TOKEN (a Supabase personal access token) so this' +
            ' check can read it. Until then the beta rests on a toggle nobody' +
            ' is verifying.')
        } else {
          let cfg = null
          let why = ''
          try {
            const r = await fetch(`https://api.supabase.com/v1/projects/${ref}/config/auth`, {
              headers: { authorization: `Bearer ${MGMT}` },
            })
            if (r.ok) cfg = JSON.parse(await r.text())
            else why = `HTTP ${r.status}`
          } catch (e) {
            why = String(e).slice(0, 60)
          }
          const field = cfg && Object.keys(cfg).find((k) => /hook_before_user_created.*enabled/i.test(k))
          const uriField = cfg && Object.keys(cfg).find((k) => /hook_before_user_created.*uri/i.test(k))
          if (!cfg || !field) {
            skip('hook-enabled', `the Management API did not report the hook (${why || 'field absent'})`)
            check(false, 'warn', 'hook-enabled-unknown',
              'the Management API answered, but not with the Before User Created hook',
              'Authentication → Hooks → Before User Created → Postgres →' +
              ` public.${hookName} — confirm it by hand`)
          } else {
            // The Management API answered: "unknown" is no longer the situation.
            check(true, 'warn', 'hook-enabled-unknown',
              'the enabled state of the hook could not be read')
            check(cfg[field] === true && String(cfg[uriField] ?? '').includes(hookName),
              'fail', 'hook-enabled',
              'the Before User Created hook is NOT enabled on this project',
              `enabled=${cfg[field]} uri=${cfg[uriField] ?? 'none'} — the function` +
              ' exists and is never called, so an uninvited account can be created' +
              ' by a direct PKCE exchange. Authentication → Hooks → Before User' +
              ` Created → Postgres → public.${hookName}`)
          }
        }
      }
    }
  }
}

/* ------------------------------------------------------------------ */
/* Report, and what changed since last time                             */
/* ------------------------------------------------------------------ */

const fails = findings.filter((f) => f.level === 'fail')
const warns = findings.filter((f) => f.level === 'warn')

let previous = null
try {
  previous = JSON.parse(readFileSync(STATE, 'utf8'))
} catch {
  /* first run */
}

const ids = findings.map((f) => f.id).sort()
// The memory is every id that was open last time — the ones that were reported,
// AND the ones a previous run could not re-test. Dropping the second set is how
// a problem disappears by never being looked at twice.
const before = [...new Set([...(previous?.ids ?? []), ...(previous?.carried ?? [])])]
const appeared = ids.filter((i) => !before.includes(i))
/** FIXED means its check RAN and passed. Nothing else may claim it. */
const cleared = before.filter((i) => ran.has(i) && !ids.includes(i))
/** Open last time, not re-tested this time. Still open as far as anyone knows. */
const carried = before.filter((i) => !ran.has(i) && !ids.includes(i))

const declared = ran.size + skipped.length
console.log(`\nDatabase structure — ${ran.size} of ${declared} checks ran` +
  `${skipped.length ? `, ${skipped.length} skipped` : ''}`)
console.log(`  tables declared: ${names.length ? names.join(', ') : 'none'}\n`)

for (const f of fails) console.log(`  ✗ ${f.message}${f.detail ? `\n      ${f.detail}` : ''}`)
for (const f of warns) console.log(`  ! ${f.message}${f.detail ? `\n      ${f.detail}` : ''}`)
if (!findings.length) console.log('  ✓ declared, expected and live all agree')

if (skipped.length) {
  console.log(`\n  NOT RUN — these prove nothing this time:`)
  const byReason = new Map()
  for (const s of skipped) byReason.set(s.why, [...(byReason.get(s.why) ?? []), s.id])
  for (const [why, list] of byReason)
    console.log(`    · ${list.join(', ')}\n        ${why}`)
}

if (previous) {
  if (appeared.length) console.log(`\n  NEW since ${previous.at.slice(0, 16)}: ${appeared.join(', ')}`)
  if (cleared.length) console.log(`  FIXED since ${previous.at.slice(0, 16)}: ${cleared.join(', ')}`)
  if (carried.length)
    console.log(`  STILL OPEN, not re-tested: ${carried.join(', ')}`)
  if (!appeared.length && !cleared.length && !carried.length)
    console.log(`\n  unchanged since ${previous.at.slice(0, 16)}`)
}

mkdirSync(path.dirname(STATE), { recursive: true })
writeFileSync(
  STATE,
  JSON.stringify(
    {
      at: new Date().toISOString(),
      declared,
      ran: [...ran].sort(),
      skipped,
      ids,
      carried,
      findings,
    },
    null,
    2,
  ) + '\n',
)

console.log(
  `\n${fails.length ? `✗ ${fails.length} problem(s)` : '✓ well structured'}` +
    `${warns.length ? `, ${warns.length} warning(s)` : ''}` +
    `${skipped.length ? `, ${skipped.length} check(s) NOT RUN` : ''}\n`,
)

// Report-only by design: warnings never fail the run, so this can sit on a
// schedule without crying wolf. Escalate to L2 only once it has been right for
// a week — that is the whole point of starting at L1.
process.exit(fails.length ? 1 : 0)
