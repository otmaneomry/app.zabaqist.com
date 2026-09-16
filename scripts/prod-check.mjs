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
 * than restating the whole list every time — and what it could NOT re-test,
 * which is not the same thing as fixed. A run prints how many of the checks it
 * declares actually executed; anything else lets a check that stopped running
 * pass for a check that stopped failing.
 */

import { execSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const STATE = path.join(ROOT, '.loop', 'prod-check.json')

const findings = []

/**
 * Which checks actually executed, and which declared themselves and could not.
 *
 * `cleared` used to be "in the previous run's findings, not in this one's",
 * which conflates "passed" with "never evaluated". `orphan-namespaces` sits
 * inside a `try` that swallows a parse error: break `messages/fr.json` and the
 * finding vanished, the run reported it FIXED, and the state file was rewritten
 * without it. A check has to RUN before it may clear anything.
 */
const ran = new Set()
const skipped = []
const skip = (id, why) => skipped.push({ id, why })

/** `blocker` stops a launch; `should` is real debt; `note` is a judgement call. */
const check = (passed, level, id, message, detail = '') => {
  ran.add(id)
  if (!passed) findings.push({ level, id, message, detail })
  return passed
}

const read = (f) => (existsSync(f) ? readFileSync(f, 'utf8') : '')
/**
 * Source with its comments removed — for the checks that must read the CODE and
 * not the prose explaining why the code does not do a thing.
 *
 * `(?<!:)` is load-bearing: without it `src="https://brilliant.org/x.png"` has
 * everything from `//brilliant…` stripped as a line comment, and a check for
 * assets loaded off a competitor's servers finds nothing at all.
 */
const stripComments = (t) => t.replace(/\/\*[\s\S]*?\*\/|(?<!:)\/\/[^\n]*/g, '')
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

/**
 * Is the value that is REDIRECTED TO the value that was checked?
 *
 * `lib/safePath.ts` rejects `//host`, and `app/[locale]/signin/page.tsx` also
 * has to strip the locale before handing the path to a locale-aware redirect
 * that will put one back. Both were there; they ran in the wrong order.
 * `safeInternalPath('/fr//evil.com')` passes — one leading slash, then `f` —
 * and stripping `/fr` afterwards turns it back into `//evil.com`, which the
 * default locale takes no prefix for. A protocol-relative `Location`, reached
 * through a real Zabaqist sign-in link: exactly the attack safePath documents,
 * rebuilt downstream of it.
 *
 * So this reads the expression each `redirect({ href })` is given and asks
 * whether the sanitiser is the OUTERMOST call — not whether it appears, which
 * it did the whole time. Renaming `unprefixed` cannot slip past it; only
 * putting something back around the check can.
 */
const hrefArg = (body, from) => {
  let depth = 0
  for (let i = from; i < body.length; i++) {
    const c = body[i]
    if ('([{'.includes(c)) depth++
    else if (')]}'.includes(c)) {
      if (depth === 0) return body.slice(from, i).trim()
      depth--
    } else if (c === ',' && depth === 0) return body.slice(from, i).trim()
  }
  return body.slice(from).trim()
}

const rewrapped = []
for (const f of src) {
  const body = stripComments(read(f))
  for (const m of body.matchAll(/redirect\(\s*\{[\s\S]{0,200}?href:\s*/g)) {
    const expr = hrefArg(body, m.index + m[0].length)
    if (/safeInternalPath/.test(expr) && !/^safeInternalPath\s*\(/.test(expr))
      rewrapped.push(`${f}: ${expr}`)
  }
}
check(rewrapped.length === 0, 'blocker', 'redirect-sanitised-last',
  'a redirect target is rewritten AFTER it was checked, so the check no longer describes it',
  rewrapped.join(' · '))

const robots = read('app/robots.ts')

/**
 * Is a private page really excluded from crawling?
 *
 * This asked `robots.includes('/home')` — a substring of the WHOLE FILE. Moving
 * `/home` from the disallow list to `allow` left it green, and so did a comment
 * mentioning the path; today `app/robots.ts` derives its list from the route
 * tree and the only literal `/home` left in the file is inside a build-time
 * assertion, so the old check was passing off a string that has nothing to do
 * with crawling at all.
 *
 * The policy is now a function of two things: every route that exists, and
 * `INDEXABLE_PATHS`. So compute it the same way `app/robots.ts` does and ask
 * whether the page comes out private. Add `/home` to `INDEXABLE_PATHS` and this
 * goes red, which is the actual mistake worth catching.
 */
const PAGE_FILE = /^page\.(tsx|ts|jsx|js)$/
const routesUnder = (dir, prefix = '') => {
  const out = []
  if (!existsSync(dir)) return out
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) {
      if (PAGE_FILE.test(e.name)) out.push(prefix || '/')
      continue
    }
    const n = e.name
    if (n.startsWith('_') || n.startsWith('@')) continue
    // A route group is chrome, not a segment; a catch-all matches everything
    // including `/`; a dynamic segment is covered by its parent prefix.
    if (n.startsWith('(')) out.push(...routesUnder(path.join(dir, n), prefix))
    else if (n.startsWith('[[') || n.startsWith('[...')) continue
    else if (n.startsWith('[')) out.push(prefix || '/')
    else out.push(...routesUnder(path.join(dir, n), `${prefix}/${n}`))
  }
  return out
}
const listOf = (body, name) =>
  [...body.matchAll(new RegExp(`${name} = \\[([^\\]]*)\\]`, 'g'))]
    .flatMap((m) => [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]))

const publicPathsTs = read('lib/publicPaths.ts')
const indexablePaths = listOf(publicPathsTs, 'INDEXABLE_PATHS')
const appRoutes = [...new Set(routesUnder(path.join('app', '[locale]')))]
const privateRoutes = appRoutes.filter((p) => !indexablePaths.includes(p))

// If robots.ts stops deriving its list, the three checks below stop meaning
// anything — so that has to be a finding of its own rather than a silent
// assumption.
check(/INDEXABLE_PATHS/.test(robots) && /readdirSync|routesUnder/.test(robots),
  'should', 'robots-derived',
  'app/robots.ts no longer derives its disallow list from the route tree and INDEXABLE_PATHS',
  'a hand-written list drifted twice: /home was missing, then every entry was' +
  ' written unprefixed and the whole Arabic app was crawlable')
// robots.txt matching is literal prefix and `localePrefix: as-needed` puts the
// Arabic app under /ar, so a policy that names only the unprefixed path covers
// half the site.
check(/routing\.locales|localeHref/.test(robots), 'should', 'robots-locales',
  'app/robots.ts does not spell its disallow list in both locales',
  'Disallow: /home does not cover /ar/home')
check(appRoutes.length > 0, 'blocker', 'robots-routes-found',
  'no route was found under app/[locale]: the crawl policy would come out empty')
for (const p of ['/home', '/progres', '/demarrer'])
  check(privateRoutes.includes(p), 'should', `robots-${p}`,
    `${p} is offered for indexing, so app/robots.ts will not disallow it`,
    'private pages should not be indexed')

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

/**
 * Parsed once, at the top, and shared.
 *
 * It used to be parsed inside two separate `try` blocks whose `catch` dropped
 * the check entirely — which is how `orphan-namespaces` could be reported FIXED
 * by breaking the JSON it reads. Now a parse failure is a finding AND the
 * checks that depended on the file say they did not run.
 */
const CATALOGUES = {}
for (const loc of ['fr', 'ar']) {
  try { CATALOGUES[loc] = JSON.parse(read(`messages/${loc}.json`)) } catch { CATALOGUES[loc] = null }
}
const parsed = CATALOGUES.fr && CATALOGUES.ar
check(!!parsed, 'blocker', 'i18n-parse', 'a messages file does not parse',
  Object.entries(CATALOGUES).filter(([, v]) => !v).map(([k]) => `messages/${k}.json`).join(', '))

if (parsed) {
  const fr = new Set(keys(CATALOGUES.fr))
  const ar = new Set(keys(CATALOGUES.ar))
  const diff = [...fr].filter((k) => !ar.has(k)).concat([...ar].filter((k) => !fr.has(k)))
  check(diff.length === 0, 'blocker', 'i18n-parity',
    'fr.json and ar.json do not carry the same keys', diff.slice(0, 6).join(', '))
} else {
  skip('i18n-parity', 'a messages file does not parse')
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
  /**
   * Anything robots.ts disallows must not be offered for indexing.
   *
   * This read the literal `disallow: [ … ]` array out of `app/robots.ts`. That
   * file now DERIVES its list from a build-time walk of the route tree, so the
   * regex matches `[...PRIVATE, '/auth/', '/api/']`, extracts two strings that
   * were never the point, and the clash is computed against almost nothing. It
   * had quietly stopped measuring — which is the same failure as the check it
   * was written to improve on.
   *
   * The invariant is enforced by construction now (`app/robots.ts` subtracts
   * `INDEXABLE_PATHS` from the routes it found), so this asserts the derived
   * OUTPUT instead: the same subtraction, done here, must leave every indexable
   * path outside the disallow list and must leave every private route inside it.
   * Re-deriving is the only way to notice if the construction itself changes.
   */
  const alwaysBlocked = ['/auth/', '/api/']
  const disallowed = [
    ...privateRoutes.flatMap((r) => ['fr', 'ar'].map((l) => (l === 'fr' ? r : `/ar${r === '/' ? '' : r}`))),
    ...alwaysBlocked,
  ]
  const indexableBoth = indexablePaths.flatMap((r) => [r, `/ar${r === '/' ? '' : r}`])
  const clash = indexableBoth.filter((p) => disallowed.includes(p))
  check(clash.length === 0, 'blocker', 'sitemap-vs-robots',
    'a path is both indexable and disallowed', clash.join(', '))
  // And the derivation has to actually cover the Arabic half. `Disallow: /home`
  // is a literal prefix and does not reach `/ar/home`; that was live.
  const arMissing = ['/ar/home', '/ar/progres', '/ar/demarrer']
    .filter((p) => !disallowed.includes(p))
  check(arMissing.length === 0, 'blocker', 'robots-arabic-half',
    'the crawl policy does not cover the Arabic half of the private app',
    arMissing.join(', '))
}

/**
 * An absolute URL built from an env var that is localhost on every developer's
 * machine. Shipped, it tells crawlers the sitemap lives on their own computer.
 *
 * This used to grep `lib/siteUrl.ts` for the string "localhost" — which appears
 * three times in that file's own header comment explaining the danger. Deleting
 * the guard line and keeping the comment left the check green, which is the
 * exact inversion of what a verifier is for.
 *
 * So the module is RUN instead, in a child process, with the environment that
 * produces the failure: a localhost origin in a production build. Node strips
 * the types; the file imports nothing, so there is no bundler to stand in for.
 */
{
  const siteUrlWith = (value) => {
    try {
      return execSync(
        "node --experimental-strip-types --no-warnings --input-type=module -e " +
        "\"const m = await import('./lib/siteUrl.ts'); process.stdout.write(String(m.siteUrl()))\"",
        {
          encoding: 'utf8',
          stdio: ['ignore', 'pipe', 'ignore'],
          env: { ...process.env, NODE_ENV: 'production', NEXT_PUBLIC_SITE_URL: value },
        },
      ).trim()
    } catch {
      return null
    }
  }
  const local = siteUrlWith('http://localhost:3000')
  const weird = siteUrlWith('javascript:alert(1)')
  if (local === null || weird === null) {
    skip('site-url-guard', 'lib/siteUrl.ts could not be executed')
    skip('site-url-scheme', 'lib/siteUrl.ts could not be executed')
    check(false, 'should', 'site-url-unrunnable',
      'lib/siteUrl.ts could not be executed, so its guard was not verified',
      'needs a node that supports --experimental-strip-types')
  } else {
    check(true, 'should', 'site-url-unrunnable', 'lib/siteUrl.ts could not be executed')
    check(!/localhost|127\.0\.0\.1|\[::1\]/.test(local), 'should', 'site-url-guard',
      'lib/siteUrl.ts publishes a localhost origin in a production build',
      `NEXT_PUBLIC_SITE_URL=http://localhost:3000 came back as ${local} — robots.txt` +
      " would tell every crawler the sitemap lives on their own computer")
    check(/^https?:\/\//.test(weird), 'should', 'site-url-scheme',
      'lib/siteUrl.ts passes a non-http origin through',
      `NEXT_PUBLIC_SITE_URL=javascript:alert(1) came back as ${weird} — it would be` +
      ' concatenated into every canonical tag')
  }
}

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
const ALL_SRC = src.map(read).join('\n')
if (CATALOGUES.fr) {
  const defined = Object.entries(CATALOGUES.fr)
    .filter(([, v]) => v && typeof v === 'object')
    .map(([k]) => k)
  const orphans = defined.filter(
    (ns) =>
      !new RegExp(`(use|get)Translations\\(\\s*['"\`]${ns}['"\`]`).test(ALL_SRC) &&
      !new RegExp(`namespace:\\s*['"\`]${ns}['"\`]`).test(ALL_SRC),
  )
  check(orphans.length === 0, 'should', 'orphan-namespaces',
    `${orphans.length} message namespace(s) are never rendered`, orphans.join(', '))
} else {
  // A `catch {}` here is how this check reported FIXED on a file that had
  // stopped parsing: it never ran, and "did not run" was indistinguishable
  // from "found nothing".
  skip('orphan-namespaces', 'messages/fr.json does not parse')
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

/* ── What this product refuses ────────────────────────────────────────── */

/**
 * Three refusals are written into CLAUDE.md on the pedagogue's instruction, and
 * all three were asserted as blocklists of yesterday's mistakes: one regex on
 * one page for ranking, four string literals for invented claims, three message
 * keys for grading. A blocklist catches the thing that already happened once.
 *
 * What follows are the same three refusals written as PROPERTIES of the tree,
 * so that a new violation — a different word, a different number, a different
 * page — trips them too. The browser half (every page, rendered, including
 * anything `display: none`) lives in `scripts/test-course.mjs`; this half reads
 * the copy before it is ever rendered, which is where it arrives first.
 */

/** Every string in a catalogue, with its dotted key, for the rules below. */
const flatten = (o, p = '') =>
  Object.entries(o ?? {}).flatMap(([k, v]) =>
    v && typeof v === 'object' ? flatten(v, `${p}${k}.`) : [[`${p}${k}`, String(v)]])
const CATALOGUE_STRINGS = Object.entries(CATALOGUES)
  .filter(([, v]) => v)
  .flatMap(([loc, v]) => flatten(v).map(([k, str]) => [`${loc}:${k}`, str]))

/**
 * No ranking, league or leaderboard — anywhere.
 *
 * Progress is compared to the student's own previous window, never to another
 * student. The only assertion on this looked at `/progres`, in French, through
 * `innerText` — so it missed English (`rang\b` does not match "ranking"), missed
 * anything hidden with `display: none`, and missed every other page.
 *
 * Denial is the whole difficulty. "Sans classement public" and "لا ترتيب" are
 * the product saying out loud that it does not rank, and a list of forbidden
 * words has to let those through somehow. Allowing them BY KEY would just be a
 * blocklist again, one key at a time. So a ranking word is a finding only when
 * nothing denies it in the words immediately before it — a rule about meaning
 * rather than a list of exceptions, and a page that quietly starts ranking
 * students cannot phrase its way past it.
 */
const RANKING =
  /(classements?|ligues?|league|leaderboards?|rankings?|\brangs?\b|palmar[eè]s|podium|top ?\d+|تصنيف|ترتيب|لوحة الصدارة|صدارة)/gi
// One small function word may stand between the denial and the noun —
// "jamais DE ligue", "no such leaderboard" — and it changes nothing about the
// meaning, so it must not be a way through.
const DENIAL =
  /(sans|aucunes?|aucun|jamais|ni|pas|no|never|without|بدون|بلا|لا|دون|غير)(\s+(de|des|du|d['’]|la|le|les|such|any|a|of))?[\s'’"«»:,،-]*$/i
const rankingHits = (text) => {
  const out = []
  for (const m of text.matchAll(RANKING)) {
    const before = text.slice(Math.max(0, m.index - 28), m.index)
    if (!DENIAL.test(before)) out.push(m[0])
  }
  return out
}
{
  const claims = CATALOGUE_STRINGS
    .map(([k, v]) => [k, rankingHits(v)])
    .filter(([, hits]) => hits.length)
  check(claims.length === 0, 'blocker', 'refuses-ranking',
    `${claims.length} message(s) offer a ranking, league or leaderboard`,
    claims.slice(0, 4).map(([k, h]) => `${k}: ${h.join('/')}`).join(', '))

  // And in the components, where a feature arrives before its copy does.
  const ranked = src.filter((f) => rankingHits(stripComments(read(f))).length)
  check(ranked.length === 0, 'blocker', 'refuses-ranking-src',
    `${ranked.length} component(s) name a ranking, league or leaderboard`,
    ranked.slice(0, 4).join(', '))
}

/**
 * Nothing invented.
 *
 * The old check was four literals on one page — "Ministère de l'Éducation",
 * "10,000 avis", a chapter that does not exist, and a competitor's domain. It
 * catches those four and nothing else, which means the next fabricated figure
 * ships.
 *
 * A fabricated claim has a shape: a LITERAL number — not an ICU placeholder,
 * because a placeholder is filled from data that exists — standing next to a
 * noun that turns it into a claim about people, opinions, or the length of the
 * course. That shape is what is forbidden. `onboarding.objectif-10` is "10 min"
 * with no such noun anywhere near it: the reader choosing their own daily goal,
 * not the product claiming anything. It passes without being named.
 */
const QUANTITY_NOUN =
  /(avis|évaluations?|notes?|étoiles?|témoignages?|élèves?|étudiants?|utilisateurs?|membres?|inscrits?|abonnés?|apprenants?|reviews?|ratings?|stars?|students?|users?|members?|مراجعات?|تقييمات?|نجوم|نجمة|تلاميذ|تلميذ|طلاب|مستخدمين|أعضاء|شهادات)/i
const DURATION_NOUN =
  /(heures?|minutes?|semaines?|jours?|hours?|weeks?|days?|ساعات?|دقائق|أسابيع|أيام)/i
const CONTENT_NOUN =
  /(cours|chapitres?|leçons?|programme|vidéos?|exercices?|module|دروس|درس|فصل|برنامج|تمارين|وحدة)/i
const EFFICACY =
  /(fois plus|plus de chances|more likely|times more|x plus|plus rapide|أضعاف|أسرع)/i
{
  const counts = []
  const durations = []
  const efficacy = []
  for (const [key, raw] of CATALOGUE_STRINGS) {
    // ICU placeholders are filled from data that exists; a literal is a claim.
    const text = raw.replace(/\{[^}]*\}/g, '')
    for (const m of text.matchAll(/\d[\d\s.,  ]*/g)) {
      // A number with a unit after it is a measurement. "un carré tourné de 45
      // degrés" is the khatim construction, and the `étoile` it builds is an
      // eight-pointed shape — not a review rating, which is what this read it as.
      const after = text.slice(m.index + m[0].length)
      if (/^(degrés?|degrees?|°|%|px|km|cm|mm|€|dh|mad|min\b|درجة)/i.test(after)) continue
      const w = text.slice(Math.max(0, m.index - 30), m.index + m[0].length + 30)
      if (QUANTITY_NOUN.test(w)) counts.push(`${key} (${m[0].trim()})`)
      else if (DURATION_NOUN.test(w) && CONTENT_NOUN.test(w)) durations.push(key)
      if (EFFICACY.test(w)) efficacy.push(key)
    }
  }
  check(counts.length === 0, 'blocker', 'invented-counts',
    `${counts.length} message(s) state a number of students, reviews or ratings`,
    `${[...new Set(counts)].slice(0, 4).join(', ')} — a closed beta with a handful of` +
    ' invited addresses has no such figure, and an honest count beats an invented estimate')
  check(durations.length === 0, 'should', 'invented-durations',
    `${durations.length} message(s) claim a duration for the course`,
    [...new Set(durations)].slice(0, 4).join(', '))
  check(efficacy.length === 0, 'blocker', 'invented-efficacy',
    `${efficacy.length} message(s) claim an effect no measurement backs`,
    `${[...new Set(efficacy)].slice(0, 4).join(', ')} — "6x more likely" sat on the` +
    ' dashboard and came from nowhere')

  /**
   * A testimonial: something in quotation marks, long enough to be a sentence,
   * signed by somebody. There are no real ones — nobody has finished a chapter
   * of this yet — so the shape itself is the finding.
   */
  const TESTIMONIAL = /[«“"][^»”"]{25,}[»”"]\s*[—–-]\s*\p{Lu}/u
  const quoted = CATALOGUE_STRINGS.filter(([, v]) => TESTIMONIAL.test(v)).map(([k]) => k)
  check(quoted.length === 0, 'blocker', 'invented-testimonials',
    `${quoted.length} message(s) read as a quoted endorsement attributed to someone`,
    `${quoted.slice(0, 4).join(', ')} — one of them was signed "Ministère de l'Éducation"`)
}

/**
 * No asset served from somebody else's domain.
 *
 * `borrowed-assets` greps the source for `brilliant.org`, the one competitor
 * whose paywall video and two illustrations were genuinely found being served
 * from their servers on `/subscribe`. It stays. This is the property behind it:
 * an app that loads nothing from a third party cannot be loading a competitor's
 * artwork either, and it is not telling a stranger who is reading which chapter.
 *
 * Read from ASSET POSITIONS — `src=`, `href=`, `url(…)` — and not from the raw
 * text, deliberately. `lib/safePath.ts` documents a redirect attack using
 * `https://evil.com` in its header, and a comment about a URL is not a request
 * to one. The neighbouring check learned that lesson already.
 */
const OWN_HOST =
  /^(([a-z0-9-]+\.)*zabaqist\.com|fonts\.(googleapis|gstatic)\.com|([a-z0-9-]+\.)*geogebra\.org|([a-z0-9-]+\.)*supabase\.(co|com)|accounts\.google\.com|schema\.org|www\.w3\.org|localhost(:\d+)?|127\.0\.0\.1(:\d+)?)$/i
{
  const foreign = []
  const hostOf = (u) => { try { return new URL(u).host } catch { return '' } }
  for (const f of [...src, 'app/globals.css', 'tailwind.config.ts'].filter((x) => read(x))) {
    for (const m of stripComments(read(f)).matchAll(
      /(?:src|href|poster|srcSet|action|content|url)\s*=?\s*[({'"`]+\s*(https?:\/\/[^'"`)\s]+)/gi,
    )) {
      const host = hostOf(m[1])
      if (host && !OWN_HOST.test(host)) foreign.push(`${f}: ${host}`)
    }
  }
  for (const [key, v] of CATALOGUE_STRINGS)
    for (const m of v.matchAll(/https?:\/\/[^\s"'<)]+/g)) {
      const host = hostOf(m[0])
      if (host && !OWN_HOST.test(host)) foreign.push(`${key}: ${host}`)
    }
  check(foreign.length === 0, 'blocker', 'third-party-assets',
    `${foreign.length} asset(s) are loaded from a domain this product does not own`,
    [...new Set(foreign)].slice(0, 4).join(', '))
}

/**
 * No auto-graded mathematics — as a structure, not as three message keys.
 *
 * The assertion was that `course.ctaBody + ctaTitle + ctaButton` promise no
 * score. That is a promise about the COPY. The thing that must not exist is the
 * machinery: a stored correct answer, a mark computed from it, a verdict the app
 * decides on the reader's behalf. All three are readable from the tree.
 *
 * DELIBERATE EXCEPTION, and it is not a lapse: the landing page's preview
 * problem DOES tell you which of two answers is right — `preview.correct` /
 * `preview.wrong`, asserted in `scripts/test-course.mjs` as "a wrong answer
 * explains where to look". It is one hand-authored illustration of how the
 * product teaches, it is not a chapter, nothing about it is stored or counted,
 * and the pedagogue wrote both lines. `components/landing/` is outside the set
 * below for that reason and no other — do not "fix" it.
 */
const GRADING =
  /\b(correctAnswer|correctIndex|correctOption|isCorrect|rightAnswer|answerKey|expectedAnswer|checkAnswer|autoGrade|autoGraded|markScheme|bareme)\b/
/**
 * A MARK is a ratio taken over correctness.
 *
 * `answered / items.length` in `SelfCheck` is progress — it counts answers
 * given, not answers right — and the component says so in a comment. A grade
 * would divide the `got` verdicts by the total, and that is what this refuses.
 */
const MARK = /\b(got|correct|right|justes?|r[ée]ussis?)\b[^\n]{0,24}\/[^\n]{0,24}\b(length|total|items|count)\b/i
{
  const assessment = src.filter(
    (f) =>
      /(^|\/|\[)quiz/i.test(f) ||
      /selfCheck|SelfCheck/.test(f) ||
      /courseDoc\.ts$|courseProgress\.ts$|Checkpoint\.tsx$/.test(f),
  )
  check(assessment.length >= 4, 'blocker', 'refuses-autograding-scope',
    `only ${assessment.length} assessment file(s) were found to check`,
    'the quiz route, its components, the checkpoint and the document loader —' +
    ' if this set empties, the check below asserts nothing')
  // Comments stripped first. Both of these files EXPLAIN at length why nothing
  // is auto-graded, and "Auto-grading would mean…" is not auto-grading.
  const graded = assessment.filter((f) => GRADING.test(stripComments(read(f))))
  check(graded.length === 0, 'blocker', 'refuses-autograding',
    `${graded.length} assessment file(s) carry a correct-answer or score field`,
    `${graded.slice(0, 4).join(', ')} — the self-assessment asks the chapter's own` +
    ' `## Auto-évaluation` items and the reader judges')

  const marked = assessment.filter((f) => MARK.test(stripComments(read(f))))
  check(marked.length === 0, 'blocker', 'quiz-no-mark',
    `${marked.length} assessment file(s) compute a mark out of the reader's verdicts`,
    `${marked.slice(0, 4).join(', ')} — the output of a self-assessment is a list of` +
    ' what to go back to, not a score out of ten')

  // The checklist is what `/quiz/<slug>` renders. Anything richer than a list of
  // sentences has room for an answer in it.
  check(/checklist:\s*string\[\]/.test(read('lib/courseDoc.ts')), 'blocker', 'checklist-is-text',
    'CourseDoc.checklist is no longer a plain string[]',
    'a capability statement has no answer to be right or wrong about; a richer' +
    ' type is exactly where a correct answer would go')

  // The three verdicts are the reader's own words. An app that grades needs a
  // fourth one that it decided itself.
  const verdicts = /export type Verdict = ([^\n]+)/.exec(read('lib/courseProgress.ts'))?.[1] ?? ''
  const allowed = verdicts.replace(/[\s']/g, '').split('|').filter(Boolean).sort()
  check(JSON.stringify(allowed) === JSON.stringify(['close', 'got', 'not-yet']),
    'blocker', 'verdict-reader-supplied',
    "the verdict vocabulary is no longer the reader's three self-judgements",
    `got "${verdicts.trim()}" — "correct", "incorrect" or "pass" would be the app` +
    ' deciding, which is the thing this product refuses')

  // And nothing derives one. A verdict has to arrive from a gesture.
  const derived = assessment.filter((f) =>
    /(verdict|answer)[^\n]{0,40}(===|==)[^\n]{0,40}(answer|correct|solution|expected)/i.test(read(f)),
  )
  check(derived.length === 0, 'blocker', 'verdict-not-computed',
    `${derived.length} file(s) compute a verdict by comparing against an answer`,
    derived.slice(0, 4).join(', '))
}

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

/**
 * Does CI actually run the checks?
 *
 * This asked whether `.github/workflows` EXISTS as a directory. Replacing
 * `ci.yml` with a workflow that echoes "hello" left it green, and so would
 * deleting every step in it. A folder is not a pipeline.
 *
 * `continue-on-error` is in here because of what it did: `db:check` carried it
 * once, so a migration that left RLS disabled reported red in the log and green
 * overall, and the pipeline went on to build and deploy it. CLAUDE.md still
 * described that as current behaviour months after it was removed — a claim in
 * prose nobody could check. Now it is one.
 */
{
  const dir = '.github/workflows'
  const files = existsSync(dir) ? readdirSync(dir).filter((f) => /\.ya?ml$/.test(f)) : []
  const body = files.map((f) => read(path.join(dir, f))).join('\n')
  const REQUIRED = ['npm run check', 'npm run db:check', 'npm run prod:check', 'npm run build', 'npm run test:course']
  const absent = REQUIRED.filter((c) => !body.includes(c))
  check(files.length > 0 && absent.length === 0, 'should', 'ci',
    files.length === 0
      ? 'no CI workflow: the checks only run when someone remembers'
      : `the CI workflow never runs ${absent.join(', ')}`,
    'a regression reaches main unnoticed')
  check(files.length > 0 && /^on:/m.test(body) && /push:|pull_request:/.test(body),
    'should', 'ci-triggers', 'the CI workflow is not triggered by a push or a pull request')
  check(!/continue-on-error:\s*true/.test(body), 'should', 'ci-soft-gates',
    'a CI step carries continue-on-error: true',
    'it reports without gating — a red run still builds, deploys and ships')
}

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
// The memory is everything that was open last time — reported, or carried
// because a run could not re-test it. Dropping the second set is how a problem
// disappears by never being looked at twice.
const before = [...new Set([...(previous?.ids ?? []), ...(previous?.carried ?? [])])]
const appeared = ids.filter((i) => !before.includes(i))
/** FIXED means its check RAN and passed. Nothing else may claim it. */
const cleared = before.filter((i) => ran.has(i) && !ids.includes(i))
/** Open last time, not re-tested this time. Still open as far as anyone knows. */
const carried = before.filter((i) => !ran.has(i) && !ids.includes(i))

const show = (title, list, mark) => {
  if (!list.length) return
  console.log(`\n  ${title}`)
  for (const f of list)
    console.log(`    ${mark} ${f.message}${f.detail ? `\n        ${f.detail}` : ''}`)
}

const declared = ran.size + skipped.length
console.log(`\nProduction readiness — ${ran.size} of ${declared} checks ran` +
  `${skipped.length ? `, ${skipped.length} skipped` : ''}`)
show('BLOCKS A LAUNCH', blockers, '✗')
show('SHOULD FIX FIRST', should, '!')
show('WORTH A LOOK', notes, '·')
if (!findings.length) console.log('\n  ✓ nothing found that can be checked mechanically')

if (skipped.length) {
  console.log('\n  NOT RUN — these prove nothing this time:')
  for (const sk of skipped) console.log(`    · ${sk.id}\n        ${sk.why}`)
}

if (previous) {
  if (appeared.length) console.log(`\n  NEW since ${previous.at.slice(0, 16)}: ${appeared.join(', ')}`)
  if (cleared.length) console.log(`  FIXED since ${previous.at.slice(0, 16)}: ${cleared.join(', ')}`)
  if (carried.length) console.log(`  STILL OPEN, not re-tested: ${carried.join(', ')}`)
}

mkdirSync(path.dirname(STATE), { recursive: true })
writeFileSync(
  STATE,
  JSON.stringify(
    { at: new Date().toISOString(), declared, ran: [...ran].sort(), skipped, ids, carried, findings },
    null,
    2,
  ) + '\n',
)

console.log(
  `\n${blockers.length ? `✗ ${blockers.length} blocker(s)` : '✓ no blockers'}` +
  `, ${should.length} to fix first, ${notes.length} to look at` +
  `${skipped.length ? `, ${skipped.length} NOT RUN` : ''}\n`,
)

// Report-only. Only a blocker fails the run — debt should not stop a build, or
// the loop gets muted and stops being read at all.
process.exit(blockers.length ? 1 : 0)
