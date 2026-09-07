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
 * Needs `.env.local` (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY).
 * State is kept in `.loop/db-check.json` so a run can say what changed since
 * the last one rather than restating everything every day.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const STATE = path.join(ROOT, '.loop', 'db-check.json')

/* ------------------------------------------------------------------ */
/* Findings                                                            */
/* ------------------------------------------------------------------ */

const findings = []
const add = (level, id, message, detail = '') =>
  findings.push({ level, id, message, detail })
const fail = (...a) => add('fail', ...a)
const warn = (...a) => add('warn', ...a)

let checks = 0
const check = (passed, level, id, message, detail = '') => {
  checks++
  if (!passed) add(level, id, message, detail)
  return passed
}

/* ------------------------------------------------------------------ */
/* Sources                                                             */
/* ------------------------------------------------------------------ */

const env = Object.fromEntries(
  (existsSync('.env.local') ? readFileSync('.env.local', 'utf8') : '')
    .split('\n')
    .filter((l) => l.trim() && !l.startsWith('#'))
    .map((l) => {
      const i = l.indexOf('=')
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()]
    }),
)
const URL_ = env.NEXT_PUBLIC_SUPABASE_URL
const KEY = env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

const migrationsDir = path.join(ROOT, 'supabase', 'migrations')
const sql = existsSync(migrationsDir)
  ? readdirSync(migrationsDir)
      .filter((f) => f.endsWith('.sql'))
      .sort()
      .map((f) => readFileSync(path.join(migrationsDir, f), 'utf8'))
      .join('\n')
  : ''

const syncTs = existsSync('lib/sync.ts') ? readFileSync('lib/sync.ts', 'utf8') : ''

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
  return out
}

/* ------------------------------------------------------------------ */
/* A. Declared structure — is the SQL itself sound?                     */
/* ------------------------------------------------------------------ */

const tables = declaredTables()
const names = Object.keys(tables)

check(names.length > 0, 'fail', 'sql-parsed', 'no CREATE TABLE found in supabase/migrations/')

for (const t of names) {
  check(
    new RegExp(`alter table public\\.${t} enable row level security`).test(sql),
    'fail',
    `rls-${t}`,
    `${t}: RLS is not enabled`,
    'without it the publishable key reads the whole table',
  )
}

// allowed_emails is deliberately policy-less: no policy means no access through
// the browser key, which is what keeps the guest list private.
const INTENTIONALLY_UNREADABLE = new Set(['allowed_emails'])
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

if (syncTs) {
  // Tables named in sync.ts.
  const used = new Set([...syncTs.matchAll(/\.from\('(\w+)'\)/g)].map((m) => m[1]))
  for (const t of used)
    check(!!tables[t], 'fail', `table-${t}`,
      `lib/sync.ts reads or writes "${t}", which no migration declares`)

  // Column names in the payload literals. A renamed column does not throw —
  // PostgREST drops the unknown field and the sync silently stops carrying it.
  const payloadCols = new Set(
    [...syncTs.matchAll(/^\s{4,6}([a-z_]{3,}):/gm)].map((m) => m[1]),
  )
  const allDeclared = new Set(Object.values(tables).flat())
  // Only judge names that look like columns, not local variables.
  const suspicious = [...payloadCols].filter(
    (c) => c.includes('_') && !allDeclared.has(c),
  )
  check(suspicious.length === 0, 'fail', 'sync-columns',
    'lib/sync.ts sends fields no table declares',
    suspicious.join(', '))
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

let live = false
if (!URL_ || !KEY) {
  warn('env', 'no Supabase credentials in .env.local — live checks skipped')
} else {
  live = true
  const h = { apikey: KEY, authorization: `Bearer ${KEY}`, 'content-type': 'application/json' }

  for (const t of names) {
    const r = await fetch(`${URL_}/rest/v1/${t}?select=*&limit=1`, { headers: h })
    const body = await r.text()

    if (/does not exist|find the table/i.test(body)) {
      check(false, 'fail', `live-${t}`, `${t}: declared in SQL but not in the project`,
        'the migration has not been run against this database')
      continue
    }
    checks++

    // Anonymous read must return nothing. Rows coming back means RLS is off or
    // a policy is wider than intended.
    if (r.status === 200 && body.trim() !== '[]')
      fail(`leak-${t}`, `${t}: returns rows to an anonymous caller`,
        `RLS is not protecting it — ${body.slice(0, 60)}`)
  }

  // A write must be refused on every table. This is the property the whole
  // publishable-key design rests on: the key is public, so Postgres has to say
  // no, not the app.
  const PROBE = '00000000-0000-0000-0000-000000000000'
  const probes = {
    profiles: { id: PROBE, email: 'probe@example.invalid' },
    course_progress: { user_id: PROBE, course_slug: '__probe' },
    checkpoints: { user_id: PROBE, course_slug: '__probe', view_id: 'v', idx: 0 },
    activity: { user_id: PROBE, day: '1970-01-01' },
    allowed_emails: { email: 'probe@example.invalid' },
  }
  for (const [t, row] of Object.entries(probes)) {
    if (!tables[t]) continue
    const r = await fetch(`${URL_}/rest/v1/${t}`, {
      method: 'POST', headers: h, body: JSON.stringify(row),
    })
    check(r.status >= 400, 'fail', `write-${t}`,
      `${t}: accepted an ANONYMOUS WRITE`,
      `HTTP ${r.status} — anyone with the public key can write to this table`)
  }

  // The allowlist still has to answer, and still has to fold Gmail's dots.
  const ask = async (addr) => {
    const r = await fetch(`${URL_}/rest/v1/rpc/is_email_allowed`, {
      method: 'POST', headers: h, body: JSON.stringify({ addr }),
    })
    return r.ok ? (await r.text()).trim() : `ERROR ${r.status}`
  }
  const [dotted, plain, stranger] = await Promise.all([
    ask('omry.otmane@gmail.com'),
    ask('omryotmane@gmail.com'),
    ask('definitely-not-invited@example.com'),
  ])
  check(dotted === 'true' && plain === 'true', 'fail', 'allowlist-dots',
    'the allowlist no longer folds Gmail dots',
    `dotted=${dotted} plain=${plain} — one spelling would be locked out`)
  check(stranger === 'false', 'fail', 'allowlist-open',
    'the allowlist admits an address that was never invited', `got ${stranger}`)
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
const before = previous?.ids ?? []
const appeared = ids.filter((i) => !before.includes(i))
const cleared = before.filter((i) => !ids.includes(i))

console.log(`\nDatabase structure — ${checks} checks${live ? '' : ' (live checks skipped)'}`)
console.log(`  tables declared: ${names.length ? names.join(', ') : 'none'}\n`)

for (const f of fails) console.log(`  ✗ ${f.message}${f.detail ? `\n      ${f.detail}` : ''}`)
for (const f of warns) console.log(`  ! ${f.message}${f.detail ? `\n      ${f.detail}` : ''}`)
if (!findings.length) console.log('  ✓ declared, expected and live all agree')

if (previous) {
  if (appeared.length) console.log(`\n  NEW since ${previous.at.slice(0, 16)}: ${appeared.join(', ')}`)
  if (cleared.length) console.log(`  FIXED since ${previous.at.slice(0, 16)}: ${cleared.join(', ')}`)
  if (!appeared.length && !cleared.length)
    console.log(`\n  unchanged since ${previous.at.slice(0, 16)}`)
}

mkdirSync(path.dirname(STATE), { recursive: true })
writeFileSync(
  STATE,
  JSON.stringify({ at: new Date().toISOString(), checks, ids, findings }, null, 2) + '\n',
)

console.log(
  `\n${fails.length ? `✗ ${fails.length} problem(s)` : '✓ well structured'}` +
    `${warns.length ? `, ${warns.length} warning(s)` : ''}\n`,
)

// Report-only by design: warnings never fail the run, so this can sit on a
// schedule without crying wolf. Escalate to L2 only once it has been right for
// a week — that is the whole point of starting at L1.
process.exit(fails.length ? 1 : 0)
