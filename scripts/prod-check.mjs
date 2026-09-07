/**
 * Is this ready for real students?  —  L1, report-only.
 *
 * The second loop-engineering verifier, same contract as `db-check.mjs`:
 * discover, verify, persist state, change nothing. Where that one asks whether
 * the database still matches the app, this one asks what still stands between
 * the repository and a public launch.
 *
 * It only reports things it can actually prove from the tree. Anything that
 * needs a judgement call — is this copy good, is this the right pedagogy —
 * belongs to a person, not to a loop.
 *
 *   npm run prod:check
 *
 * State in `.loop/prod-check.json`, so a run says what is NEW or FIXED rather
 * than restating the whole list every time.
 */

import { execSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const STATE = path.join(ROOT, '.loop', 'prod-check.json')

const findings = []
let checks = 0
/** `blocker` stops a launch; `should` is real debt; `note` is a judgement call. */
const check = (passed, level, id, message, detail = '') => {
  checks++
  if (!passed) findings.push({ level, id, message, detail })
  return passed
}

const read = (f) => (existsSync(f) ? readFileSync(f, 'utf8') : '')
const walk = (d, out = []) => {
  if (!existsSync(d)) return out
  for (const e of readdirSync(d)) {
    if (e === 'node_modules' || e.startsWith('.')) continue
    const p = path.join(d, e)
    statSync(p).isDirectory() ? walk(p, out) : out.push(p)
  }
  return out
}
const src = [...walk('app'), ...walk('components'), ...walk('lib'), ...walk('i18n')]
  .filter((f) => /\.tsx?$/.test(f))

/* ── Secrets ──────────────────────────────────────────────────────────── */

const gitignore = read('.gitignore')
check(/^\.env\*?\.local|^\.env\*/m.test(gitignore), 'blocker', 'env-ignored',
  '.env.local is not gitignored')

let tracked = ''
try { tracked = execSync('git ls-files', { encoding: 'utf8' }) } catch {}
check(!/^\.env(\.|$)/m.test(tracked), 'blocker', 'env-committed',
  'an .env file is committed to git')

// A literal key in source, as opposed to a process.env read.
const SECRET_SHAPES = [
  [/\bsb_secret_[A-Za-z0-9_-]{10,}/, 'a Supabase secret key'],
  [/\bGOCSPX-[A-Za-z0-9_-]{10,}/, 'a Google OAuth client secret'],
  [/\beyJ[A-Za-z0-9_-]{30,}\.[A-Za-z0-9_-]{20,}\./, 'a JWT'],
  [/\bsk-[A-Za-z0-9]{32,}/, 'an API key'],
]
for (const f of src) {
  const body = read(f)
  for (const [re, what] of SECRET_SHAPES)
    check(!re.test(body), 'blocker', `secret-${f}`, `${f}: contains ${what}`)
}

/* ── The gate ─────────────────────────────────────────────────────────── */

const proxy = read('proxy.ts')
// A deployment missing NEXT_PUBLIC_SUPABASE_* must degrade, not 500 every
// page including the public landing one. That is how the first Vercel deploy
// failed.
check(/catch\s*\{/.test(proxy) && /if \(!url \|\| !key\) return null/.test(proxy),
  'blocker', 'gate-resilient',
  'proxy.ts throws when Supabase is missing or unreachable',
  'an unset env var would 500 every page, landing included')

check(/getUser\(\)/.test(proxy), 'blocker', 'gate-getuser',
  'proxy.ts does not revalidate the session with getUser()',
  'getSession() trusts a cookie the browser could have written')
check(!/E2E_AUTH_SECRET\s*=/.test(read('.env.production') + read('vercel.json')),
  'blocker', 'e2e-in-prod', 'E2E_AUTH_SECRET is set in a production config file',
  'it opens the test bypass to anyone who guesses the value')

const robots = read('app/robots.ts')
for (const p of ['/home', '/progres', '/demarrer'])
  check(robots.includes(p), 'should', `robots-${p}`,
    `app/robots.ts does not disallow ${p}`, 'private pages should not be indexed')

// A sitemap or robots pointing at another origin sends crawlers to URLs this
// deployment does not serve. Missed on the first pass: both files named the
// marketing site rather than the app.
const sitemapTs = read('app/sitemap.ts')
for (const [f, body] of [
  ['app/sitemap.ts', sitemapTs],
  ['app/robots.ts', robots],
].filter(([, b]) => b))
  check(!/['"`]https:\/\/zabaqist\.com/.test(body), 'should', `origin-${f}`,
    `${f} points at zabaqist.com, the marketing site`,
    'crawlers would be sent to URLs this deployment does not serve')

/* ── Shipped noise ────────────────────────────────────────────────────── */

const logs = src.filter((f) => /^\s*console\.(log|debug)\(/m.test(read(f)))
check(logs.length === 0, 'should', 'console-logs',
  `${logs.length} file(s) still call console.log in shipped code`,
  logs.slice(0, 4).join(', '))

const markers = src.filter((f) => /\b(TODO|FIXME|XXX|HACK)\b/.test(read(f)))
check(markers.length === 0, 'note', 'markers',
  `${markers.length} file(s) carry TODO/FIXME markers`, markers.slice(0, 4).join(', '))

/* ── Content actually exists ──────────────────────────────────────────── */

const catalog = read('lib/courseCatalog.ts')
for (const m of catalog.matchAll(/file: '([^']+)'/g))
  check(existsSync(path.join('content/course', m[1])), 'blocker', `md-${m[1]}`,
    `content/course/${m[1]} is in the catalogue but missing on disk`)

const images = [...catalog.matchAll(/image: '([^']+)'/g)].map((m) => m[1])
const missingImg = [...new Set(images)].filter((i) => !existsSync(path.join('public', i)))
check(missingImg.length === 0, 'blocker', 'images-missing',
  'catalogue images that do not exist in public/', missingImg.join(', '))

// Third-party artwork is a rights question, not a taste one.
const borrowed = [...new Set(images)].filter((i) => /brilliant/i.test(i))
check(borrowed.length === 0, 'should', 'images-thirdparty',
  `${borrowed.length} course card(s) still use artwork from a competitor's site`,
  'public/brilliant-image/ — replace before launch, this is a licensing risk')

/* ── Bilingual ────────────────────────────────────────────────────────── */

const keys = (o, p = '') =>
  Object.entries(o).flatMap(([k, v]) =>
    v && typeof v === 'object' ? [p + k, ...keys(v, p + k + '.')] : [p + k])
try {
  const fr = new Set(keys(JSON.parse(read('messages/fr.json'))))
  const ar = new Set(keys(JSON.parse(read('messages/ar.json'))))
  const diff = [...fr].filter((k) => !ar.has(k)).concat([...ar].filter((k) => !fr.has(k)))
  check(diff.length === 0, 'blocker', 'i18n-parity',
    'fr.json and ar.json do not carry the same keys', diff.slice(0, 6).join(', '))
} catch {
  check(false, 'blocker', 'i18n-parse', 'a messages file does not parse')
}

// Untranslated user-facing copy: a bare French string sitting in JSX.
const hardcoded = src.filter((f) => {
  if (/messages|i18n|\.d\.ts$/.test(f)) return false
  return /<(p|h[1-6]|span|button|a)[^>]*>\s*[A-ZÀ-Ý][a-zà-ÿ]+(\s+[a-zà-ÿ']+){2,}\s*</m.test(read(f))
})
check(hardcoded.length === 0, 'should', 'hardcoded-copy',
  `${hardcoded.length} component(s) appear to hardcode French copy`,
  hardcoded.slice(0, 4).join(', '))

/* ── Operations ───────────────────────────────────────────────────────── */

const nextConfig = read('next.config.mjs') + read('next.config.js') + read('next.config.ts')
check(/headers\s*\(/.test(nextConfig), 'should', 'security-headers',
  'no security headers configured in next.config',
  'no Content-Security-Policy, X-Frame-Options or Referrer-Policy is sent')

const deps = JSON.parse(read('package.json') || '{}').dependencies ?? {}
const hasMonitoring = Object.keys(deps).some((d) => /sentry|bugsnag|rollbar|datadog|highlight/.test(d))
check(hasMonitoring, 'should', 'monitoring',
  'no error monitoring is installed',
  'a runtime error in production would be invisible until a student reports it')

check(existsSync('.github/workflows'), 'should', 'ci',
  'no CI workflow: the 189 checks only run when someone remembers',
  'a regression reaches main unnoticed')

/* ── Gates that already exist ─────────────────────────────────────────── */

const pkg = JSON.parse(read('package.json') || '{}')
for (const s of ['check', 'build', 'test:course'])
  check(!!pkg.scripts?.[s], 'blocker', `script-${s}`, `package.json has no "${s}" script`)

/* ── Report ───────────────────────────────────────────────────────────── */

const by = (l) => findings.filter((f) => f.level === l)
const [blockers, should, notes] = [by('blocker'), by('should'), by('note')]

let previous = null
try { previous = JSON.parse(readFileSync(STATE, 'utf8')) } catch {}
const ids = findings.map((f) => f.id).sort()
const before = previous?.ids ?? []
const appeared = ids.filter((i) => !before.includes(i))
const cleared = before.filter((i) => !ids.includes(i))

const show = (title, list, mark) => {
  if (!list.length) return
  console.log(`\n  ${title}`)
  for (const f of list)
    console.log(`    ${mark} ${f.message}${f.detail ? `\n        ${f.detail}` : ''}`)
}

console.log(`\nProduction readiness — ${checks} checks`)
show('BLOCKS A LAUNCH', blockers, '✗')
show('SHOULD FIX FIRST', should, '!')
show('WORTH A LOOK', notes, '·')
if (!findings.length) console.log('\n  ✓ nothing found that can be checked mechanically')

if (previous) {
  if (appeared.length) console.log(`\n  NEW since ${previous.at.slice(0, 16)}: ${appeared.join(', ')}`)
  if (cleared.length) console.log(`  FIXED since ${previous.at.slice(0, 16)}: ${cleared.join(', ')}`)
}

mkdirSync(path.dirname(STATE), { recursive: true })
writeFileSync(STATE, JSON.stringify({ at: new Date().toISOString(), checks, ids, findings }, null, 2) + '\n')

console.log(
  `\n${blockers.length ? `✗ ${blockers.length} blocker(s)` : '✓ no blockers'}` +
  `, ${should.length} to fix first, ${notes.length} to look at\n`,
)

// Report-only. Only a blocker fails the run — debt should not stop a build, or
// the loop gets muted and stops being read at all.
process.exit(blockers.length ? 1 : 0)
