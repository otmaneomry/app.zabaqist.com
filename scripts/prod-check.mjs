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
// Anchored at BOTH ends. `^\.env\*?\.local` also matched the line
// `.env.local.example`, so a repo that ignored only the example file — and
// tracked the real one — passed a blocker check.
check(/^\.env(\*|\*?\.local\*?)\s*$/m.test(gitignore), 'blocker', 'env-ignored',
  '.env.local is not gitignored')

let tracked = ''
try { tracked = execSync('git ls-files', { encoding: 'utf8' }) } catch {}
// Any directory, not just the repository root: `config/.env.production` is
// every bit as committed as `.env.production`.
check(!/(^|\/)\.env(\.|$)/m.test(tracked), 'blocker', 'env-committed',
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
// Assert the PROPERTY, not one spelling of it: the guard moved into
// lib/supabase/config.ts, which also catches a malformed key the earlier
// `if (!url || !key)` could not. Pinning the old line made this fail on an
// improvement — a verifier has to track what is true, not what it once read.
check(/catch\s*\{/.test(proxy) && /supabaseConfig\(\)/.test(proxy),
  'blocker', 'gate-resilient',
  'proxy.ts does not guard against Supabase being missing or unreachable',
  'an unset or malformed env var would 500 every page, landing included')

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

// A marker is unfinished work left in the code, so the word has to stand on
// its own. `\b` alone also matched `TODO-zabaqist.md` — a comment pointing at
// the roadmap is a reference, not a loose end, and reporting it teaches people
// to ignore this check.
const markers = src.filter((f) => /\b(TODO|FIXME|XXX|HACK)\b(?![-.\w])/.test(read(f)))
check(markers.length === 0, 'note', 'markers',
  `${markers.length} file(s) carry TODO/FIXME markers`, markers.slice(0, 4).join(', '))

/* ── Content actually exists ──────────────────────────────────────────── */

const catalog = read('lib/courseCatalog.ts')
for (const m of catalog.matchAll(/file: '([^']+)'/g))
  check(existsSync(path.join('content/course', m[1])), 'blocker', `md-${m[1]}`,
    `content/course/${m[1]} is in the catalogue but missing on disk`)

// Brilliant was the visual reference for this product and its assets kept ending
// up in the tree — a paywall video and two illustrations were still being served
// from brilliant.org's own domain on /subscribe, which is both a competitor's
// copyright and a third party watching our users load a page.
// The narrower `images-thirdparty` check below only reads catalogue `image:`
// fields, which is exactly how a paywall video and two illustrations kept being
// served from brilliant.org on /subscribe without anything failing.
// Matched as a URL, not as a word: the check is about assets being loaded from
// their servers, and a comment recording that we removed some is not one.
const borrowedSrc = src.filter((f) => /https?:\/\/(www\.)?brilliant\.org/.test(read(f)))
check(borrowedSrc.length === 0, 'blocker', 'borrowed-assets',
  `${borrowedSrc.length} file(s) reference brilliant.org`, borrowedSrc.slice(0, 4).join(', '))

// A chapter slug written into a link is a link that breaks silently the day the
// programme is reordered or that chapter is renamed — it 404s, or worse lands on
// the "coming soon" fallback, and nothing fails until a student reports it. The
// 404 page is the one exception: it quotes the limits chapter because the joke on
// it is about limits, so that link belongs to the copy rather than to the order.
const SLUG_LINK_OK = ['app/[locale]/not-found.tsx']
const slugs = [...catalog.matchAll(/slug: '([^']+)'/g)].map((m) => m[1])
const hardLinks = src
  .filter((f) => !SLUG_LINK_OK.includes(f))
  .filter((f) => slugs.some((g) => read(f).includes(`href="/courses/${g}"`)))
check(hardLinks.length === 0, 'should', 'hardcoded-chapter-links',
  `${hardLinks.length} file(s) link to a chapter by literal slug`,
  hardLinks.slice(0, 4).join(', '))

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

// A sitemap is a list of pages you are asking Google to index. It listed
// `/courses` and all thirteen chapters while `proxy.ts` answered a crawler with
// a 307 to `/signin` — which `robots.ts` disallows, so the crawler could not
// even follow it. Both now read `lib/publicPaths.ts`; this checks they still do.
{
  const pub = read('lib/publicPaths.ts')
  const sm = read('app/sitemap.ts')
  check(/INDEXABLE_PATHS/.test(sm), 'should', 'sitemap-source',
    'app/sitemap.ts does not build its list from lib/publicPaths.ts')
  check(/PUBLIC_PATHS/.test(read('proxy.ts')), 'should', 'gate-source',
    'proxy.ts does not gate on lib/publicPaths.ts')
  // Anything robots.ts disallows must not be offered for indexing.
  // Only the disallow array: a naive scan also picks up `allow: '/'`, which
  // made this report the landing page as blocked by robots on a clean tree.
  const block = /disallow:\s*\[([\s\S]*?)\]/.exec(read('app/robots.ts'))?.[1] ?? ''
  const disallowed = [...block.matchAll(/'([^']+)'/g)].map((m) => m[1])
  const indexable = [...pub.matchAll(/INDEXABLE_PATHS = \[([^\]]*)\]/g)]
    .flatMap((m) => [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]))
  const clash = indexable.filter((p) => disallowed.includes(p))
  check(clash.length === 0, 'blocker', 'sitemap-vs-robots',
    'a path is both indexable and disallowed', clash.join(', '))
}

// An absolute URL built from an env var that is localhost on every developer's
// machine. Shipped, it tells crawlers the sitemap lives on their own computer.
check(/localhost|127\.0\.0\.1/.test(read('lib/siteUrl.ts')), 'should', 'site-url-guard',
  'lib/siteUrl.ts does not reject a localhost origin in production')

// The journal is only useful if someone can read it, and the reader is only
// findable if it is written down. Both commands existed for a day with no
// mention anywhere — the next person to hit a refused sign-in would have gone
// to the Supabase dashboard, which is what they replace.
{
  const auth = read('AUTH.md')
  const scripts = JSON.parse(read('package.json') || '{}').scripts ?? {}
  const undocumented = ['whois', 'events'].filter(
    (n) => scripts[n] && !auth.includes(`npm run ${n}`),
  )
  check(undocumented.length === 0, 'should', 'undocumented-tools',
    `${undocumented.length} support command(s) are not documented in AUTH.md`,
    undocumented.join(', '))
}

// Copy nobody renders. `exercise` and `homework` — 25 keys about checking an
// answer and a teacher grading your work — outlived the feature they were
// written for by months, and one of them promised a correction no code could
// deliver. Dead copy is worse than no copy: it gets translated, reviewed and
// believed.
try {
  const defined = Object.entries(JSON.parse(read('messages/fr.json')))
    .filter(([, v]) => v && typeof v === 'object')
    .map(([k]) => k)
  const all = src.map(read).join('\n')
  const orphans = defined.filter(
    (ns) =>
      !new RegExp(`(use|get)Translations\\(\\s*['"\`]${ns}['"\`]`).test(all) &&
      !new RegExp(`namespace:\\s*['"\`]${ns}['"\`]`).test(all),
  )
  check(orphans.length === 0, 'should', 'orphan-namespaces',
    `${orphans.length} message namespace(s) are never rendered`, orphans.join(', '))
} catch {
  /* i18n-parse already reported it */
}

// Untranslated user-facing copy: a bare French string sitting in JSX.
//
// `app/global-error.tsx` is the one place this is correct rather than lazy. It
// REPLACES the root layout, so `NextIntlClientProvider` is not above it and
// `useTranslations` would throw — inside an error boundary, which turns one
// error into a blank page. It carries both languages inline instead.
const COPY_OK = ['app/global-error.tsx']
const hardcoded = src.filter((f) => {
  if (COPY_OK.includes(f)) return false
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

// An error in the ROOT layout is not caught by `app/[locale]/error.tsx` — that
// boundary lives inside the layout that threw. Without `app/global-error.tsx`
// it falls through to Next's unbranded "Application error" on a white page.
check(existsSync('app/global-error.tsx'), 'should', 'global-error',
  'no global-error boundary: a root-layout throw shows Next\'s default page')

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
