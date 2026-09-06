/**
 * End-to-end checks for the markdown-backed courses.
 *
 * Not a unit-test suite: it drives the real built app in a real browser,
 * because everything that broke while building this was integration-shaped —
 * an RSC boundary, a CSS `display: contents`, a dropped `start` attribute.
 *
 *   npm run build && npm start -- -p 3111
 *   node scripts/test-course.mjs [baseUrl] [slug]
 *
 * Needs Chrome and playwright:  npm i -D playwright
 */

import { readFileSync, readdirSync } from 'node:fs'

import { chromium } from 'playwright'
import { listCourses, loadCourseDoc, tabsOf } from '../lib/courseDoc.ts'
import { CHAPTERS_SM, CHAPTERS_SX } from '../lib/programme.ts'

/** UI copy is translated; assert against the catalogue, not against literals. */
const messages = JSON.parse(
  readFileSync(new URL('../messages/fr.json', import.meta.url), 'utf8'),
)
const messagesAr = JSON.parse(
  readFileSync(new URL('../messages/ar.json', import.meta.url), 'utf8'),
)

/** Set by ClientLayout's mount effect — the signal that the page is interactive. */
const HYDRATED = 'body.client-side-classes'

const BASE = process.argv[2] ?? 'http://localhost:3111'

/**
 * Give a browser context a real session, without driving Google.
 *
 * Posts to the `e2e` credentials provider in `auth.ts`, which exists only when
 * E2E_AUTH_SECRET is set and still checks the value. Auth.js requires the CSRF
 * token from its own cookie, so fetch that first and let the context keep the
 * cookies it sets.
 */
const E2E_SECRET = process.env.E2E_AUTH_SECRET
/**
 * Past the gate, without a real Google account.
 *
 * Supabase OAuth leaves the origin and shows a consent screen, so it cannot be
 * scripted; signing in for real would also make 178 local checks depend on a
 * remote service being reachable. `proxy.ts` therefore honours a `zb-e2e`
 * cookie carrying E2E_AUTH_SECRET — see the note there for why that is safe.
 *
 * It grants passage through the gate and nothing else: there is no Supabase
 * session behind it, so `auth.uid()` is null and RLS still refuses every row.
 * Anything that reads the database needs a real session and does not belong in
 * this suite.
 */
const E2E_COOKIE = { name: 'zb-e2e', value: E2E_SECRET ?? '' }

/** As a `cookie:` header, for the checks that fetch HTML directly. */
function sessionCookieHeader() {
  if (!E2E_SECRET)
    throw new Error('E2E_AUTH_SECRET is not set — run via `npm run test:course`')
  return `zb-e2e=${E2E_SECRET}`
}

async function signInAs(ctx) {
  if (!E2E_SECRET)
    throw new Error('E2E_AUTH_SECRET is not set — run via `npm run test:course`')
  // `url` OR `domain`+`path` — Playwright rejects both together.
  await ctx.addCookies([{ ...E2E_COOKIE, url: BASE }])
}
const SLUG = process.argv[3] ?? 'limites-et-continuite'
const url = (s) => `${BASE}/courses/${SLUG}${s ? `?s=${s}` : ''}`

let failures = 0
const ok = (pass, label, detail = '') => {
  if (!pass) failures++
  console.log(`  ${pass ? '✓' : '✗'} ${label}${detail ? `  ${detail}` : ''}`)
}
const section = (t) => console.log(`\n${t}`)

/* ---------------------------------------------------------------- */
/* 1. The loader: does the document parse into sane sections?        */
/* ---------------------------------------------------------------- */

section('Loader')
const doc = await loadCourseDoc(SLUG)
ok(!!doc, 'chapter loads from content/course/')
if (!doc) process.exit(1)

const tabs = tabsOf(doc.views)
ok(doc.views.length > 1, 'chapter is paginated', `${doc.views.length} sections`)
ok(tabs.length > 1, 'tabs derived from the `##` plan', tabs.map((t) => t.label).join(' / '))
ok(
  doc.views.every((v) => v.body.trim().length > 0),
  'no empty section',
)
ok(
  new Set(doc.views.map((v) => v.id)).size === doc.views.length,
  'section ids are unique',
)
ok(
  doc.views.some((v) => v.checkpoints > 0),
  'checkpoints detected',
  `${doc.views.reduce((n, v) => n + v.checkpoints, 0)} total`,
)
ok(
  doc.views.some((v) => v.tools.length > 0),
  'named results detected (hint level 2)',
)
// Kind drives XP, and kind comes from the parent `##` — a regression here
// silently reprices the whole chapter.
ok(
  doc.views.filter((v) => v.parent === 'Exercices').every((v) => v.kind === 'exercices'),
  'sections split out of `## Exercices` keep that kind',
)

/* ---------------------------------------------------------------- */
/* 2. Every section renders                                          */
/* ---------------------------------------------------------------- */

section('Server render')
// These fetch the HTML directly rather than through a browser, so they need the
// session cookie explicitly. Without it every request follows the gate's
// redirect to /signin and returns a perfectly valid 200 with no maths on it —
// the assertions below would fail while looking like a rendering bug.
const COOKIE = sessionCookieHeader()
const get = (u) => fetch(u, { headers: { cookie: COOKIE } })

let broken = []
for (const v of doc.views) {
  const res = await get(url(v.id))
  const html = await res.text()
  if (!res.ok || html.includes('__next_error__')) broken.push(`${v.id} (${res.status})`)
  if (/\/signin/.test(res.url)) broken.push(`${v.id} (redirected to sign-in)`)
}
ok(broken.length === 0, `all ${doc.views.length} sections return 200`, broken.join(', '))

const heavy = doc.views.reduce((a, b) => (b.body.length > a.body.length ? b : a))
const html = await (await get(url(heavy.id))).text()
ok(/class="katex/.test(html), 'KaTeX rendered server-side (no client math runtime)')
ok(/katex-display/.test(html), 'block formulas are display math, not inline')
ok(!html.includes(heavy.body.slice(0, 80)), 'raw markdown is not shipped to the client')

/* ---------------------------------------------------------------- */
/* 3. The browser: layout, gates, persistence                        */
/* ---------------------------------------------------------------- */

const browser = await chromium.launch({ channel: 'chrome' })

/**
 * Every context in this file gets a session.
 *
 * Nearly all of the suite exercises pages that now sit behind `proxy.ts`, and
 * each `browser.newPage()` is its own cookie jar. Rather than thread a sign-in
 * through fifteen call sites, sign in once, keep the cookies, and hand them to
 * every context created afterwards. Tests that need a signed-OUT browser opt
 * back out with `{ storageState: undefined }` — see the Auth section.
 */
const AUTH_STATE = {
  cookies: [
    {
      name: 'zb-e2e',
      value: E2E_SECRET ?? '',
      domain: new URL(BASE).hostname,
      path: '/',
      expires: -1,
      httpOnly: false,
      secure: false,
      sameSite: 'Lax',
    },
  ],
  // Signing in is not enough to stay on /home: FiliereGate sends a student who
  // has never picked a filière into the funnel. That is the intended flow, so
  // the default session carries a choice and the tests that care about the
  // unanswered case clear it themselves.
  origins: [
    {
      origin: BASE,
      localStorage: [
        {
          name: 'zabaqist:filiere',
          value: JSON.stringify({ track: '2bac-pc', filiere: 'sx' }),
        },
      ],
    },
  ],
}
{
  const rawPage = browser.newPage.bind(browser)
  const rawCtx = browser.newContext.bind(browser)
  browser.newPage = (o = {}) =>
    rawPage('storageState' in o ? o : { ...o, storageState: AUTH_STATE })
  browser.newContext = (o = {}) =>
    rawCtx('storageState' in o ? o : { ...o, storageState: AUTH_STATE })
}

section('Layout')
// A chapter's display formulas are routinely wider than a phone. Each must
// scroll inside its own box; the PAGE must never scroll sideways — not on the
// course, and not on the shell that wraps it.
const pageWidth = async (page, u) => {
  await page.goto(u, { waitUntil: 'load' })
  // Measure after hydration, not at `load`: a Mantine grid measured mid-layout
  // reports a width it never actually paints, which showed up as a 1-in-3
  // phantom overflow on /home.
  await page.waitForSelector(HYDRATED, { timeout: 30000 })
  await page.waitForTimeout(200)
  return page.evaluate(() => document.documentElement.scrollWidth)
}
for (const width of [390, 768, 1440]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } })
  const worst = []
  for (const u of [`${BASE}/`, `${BASE}/home`, `${BASE}/courses`, ...[heavy, ...doc.views.slice(0, 4)].map((v) => url(v.id))]) {
    const w = await pageWidth(page, u)
    if (w > width) worst.push(`${u.replace(BASE, '')} ${w}>${width}`)
  }
  ok(worst.length === 0, `${width}px: no horizontal page scroll`, worst.join(', '))
  // And the formulas really are scrollable rather than clipped away.
  if (width === 390) {
    await page.goto(url(heavy.id), { waitUntil: 'load' })
    const scrollable = await page.evaluate(() =>
      [...document.querySelectorAll('.katex-display')].some(
        (el) => el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).overflowX === 'auto',
      ),
    )
    ok(scrollable, '390px: over-wide formulas scroll inside their own box')
  }
  await page.close()
}

section('Interaction')
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
const errors = []
page.on('pageerror', (e) => errors.push(String(e)))
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))

/**
 * Load a page and wait until it is actually interactive.
 *
 * A click dispatched between `load` and the end of hydration makes React
 * regenerate that subtree and log a hydration mismatch — which then fails the
 * "no console errors" check for a page that is perfectly fine. Plain loads show
 * 0 mismatches across every page; only synthetic clicks faster than hydration
 * produce one. So wait, rather than whitelist the error.
 */
const settle = async (p) => {
  await p.waitForSelector(HYDRATED, { timeout: 30000 })
  // `client-side-classes` lands when the ROOT layout mounts; the page's own
  // client components (the path, the sticky card, the progress card) hydrate
  // just after. Clicking in that gap makes React regenerate the subtree and log
  // a mismatch on a page that is otherwise fine.
  await p.waitForTimeout(450)
}
const open = async (u) => {
  await page.goto(u, { waitUntil: 'load' })
  await settle(page)
}

// Tabs navigate to the tab's first section. Opened at a section, not at the
// course root — the root is the path now, and the tabs live in the reader.
await open(url(doc.views[0].id))
const secondTab = tabs[1]
await page.getByRole('tab', { name: secondTab.label }).click()
await page.waitForURL(`**/courses/${SLUG}?s=${secondTab.viewIds[0]}`, { timeout: 15000 })
ok(true, `tab "${secondTab.label}" opens its first section`)

// A solution stays closed until asked for.
const gated = doc.views.find((v) => /^> \*\*(Solution|Preuve|Démonstration)/im.test(v.body))
await open(url(gated.id))
const gate = page.getByRole('button', { name: /SOLUTION|PREUVE/i }).first()
const bodyText = () => page.locator('.course-doc').innerText()
const closedLen = (await bodyText()).length
await gate.click()
await page.waitForTimeout(250)
ok((await bodyText()).length > closedLen + 50, 'solution is closed until "Afficher" is clicked')

// A checkpoint: hint -> commit -> self-assess -> survives a reload.
const withCp = doc.views.find((v) => v.checkpoints > 0)
await open(url(withCp.id))
await page.locator('textarea').first().fill('brouillon de test')
await page.getByRole('button', { name: /Indice 1/ }).click()
await page.waitForTimeout(150)
ok(await page.locator(`text=${messages.course.hint1.slice(0, 24)}`).isVisible(), 'hint 1 opens')
await page.getByRole('button', { name: new RegExp(messages.course.iTried) }).click()
await page.getByRole('button', { name: messages.course['verdict-got'] }).click()
await page.waitForTimeout(250)
ok(
  await page.locator(`text=${messages.course['after-got'].slice(0, 16)}`).isVisible(),
  'self-assessment gives feedback',
)

await page.reload({ waitUntil: 'load' })
await settle(page)
const saved = await page.evaluate(() => {
  const k = Object.keys(localStorage).find((k) => k.startsWith('zabaqist:cp:'))
  return k ? JSON.parse(localStorage.getItem(k)) : null
})
ok(saved?.tried && saved.verdict === 'got' && saved.hints === 1, 'checkpoint survives a reload', JSON.stringify(saved))

// XP: base 5, one hint -> 5 * 0.8 = 4.
const expected = Math.round(withCp.xp * 0.8)
ok(
  (await page.locator('text=/✦ \\d+ XP/').first().innerText()).includes(String(expected)),
  `XP applies the hint penalty (${withCp.xp} base, 1 hint -> ${expected})`,
)

// The phone header hides its text nav, so the hamburger has to work — hiding
// the links without a drawer behind them would leave a phone with no way out.
await open(`${BASE}/home`)
// Scoped to <header>: the footer carries its own courses link. The label is
// translated, so it comes from the catalogue rather than being typed here.
const NAV_COURSES = messages.nav.courses
const headerNav = page.locator('header').getByRole('link', { name: NAV_COURSES })
ok(
  !(await headerNav.isVisible().catch(() => false)),
  '390px: the header text nav is hidden behind the hamburger',
)
await page.getByRole('button', { name: /Ouvrir le menu/i }).click()
await page.getByRole('dialog').getByRole('link', { name: NAV_COURSES }).click()
await page.waitForURL('**/courses', { timeout: 15000 })
ok(true, '390px: the hamburger menu navigates')

// Mantine's own display rule outranks Tailwind's `hidden` at equal
// specificity, so this pairing is worth pinning down.
const wide = await browser.newPage({ viewport: { width: 1280, height: 800 } })
await wide.goto(`${BASE}/home`, { waitUntil: 'load' })
await settle(wide)
ok(
  await wide.locator('header').getByRole('link', { name: NAV_COURSES }).isVisible(),
  '1280px: the text nav is visible',
)
ok(
  !(await wide.getByRole('button', { name: /Ouvrir le menu/i }).isVisible().catch(() => false)),
  '1280px: the hamburger is hidden',
)
await wide.close()

ok(errors.length === 0, 'no console errors', errors.slice(0, 3).join(' | '))

/* ---------------------------------------------------------------- */
/* 4. Nothing else moved                                             */
/* ---------------------------------------------------------------- */

section('Brand')
{
  // The mark, the SEO copy and the OG card come from zabaqist.com — the app and
  // the marketing site must describe one product, not two.
  const headFr = await (await fetch(`${BASE}/`)).text()
  const headAr = await (await fetch(`${BASE}/ar`)).text()

  ok(
    /<link rel="icon" href="data:image\/svg\+xml/.test(headFr),
    'the khatim favicon is served',
  )
  ok(
    /<link rel="apple-touch-icon" href="data:image\/svg\+xml/.test(headFr),
    'the apple touch icon is served',
  )
  ok(
    !/<link rel="icon" href="\/favicon\.ico/.test(headFr),
    'the placeholder favicon.ico no longer competes with it',
  )
  ok(
    /<meta name="theme-color" content="#1a4d40"/.test(headFr),
    'theme-color is the brand green',
  )
  ok(
    headFr.includes(messages.meta.title) && headAr.includes(messagesAr.meta.title),
    'each locale carries its own SEO title',
  )
  ok(
    /og:image"? content="[^"]*\/og\.png"/.test(headFr) &&
      (await fetch(`${BASE}/og.png`)).ok,
    'the OG card is referenced and served',
  )
  // React serialises the attribute as `hrefLang`; HTML attribute names are
  // case-insensitive, so match it that way rather than "fixing" the output.
  ok(
    /hreflang="ar"/i.test(headFr) &&
      /hreflang="fr"/i.test(headFr) &&
      /hreflang="x-default"/i.test(headFr),
    'both locales and x-default are declared to search engines',
  )
}

section('Landing page')
{
  const lp = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  const lpErrors = []
  lp.on('pageerror', (e) => lpErrors.push(String(e)))
  lp.on('console', (m) => m.type() === 'error' && lpErrors.push(m.text()))
  await lp.goto(`${BASE}/`, { waitUntil: 'load' })
  await lp.waitForSelector(HYDRATED)
  await lp.waitForTimeout(300)

  ok(
    await lp.getByRole('heading', { level: 1, name: /Apprends/ }).isVisible(),
    'the hero renders',
  )
  ok(
    await lp.getByRole('img', { name: messages.home.geoFigureAlt }).isVisible(),
    'the khatim construction figure renders',
  )

  // Every link must land on a route this app actually serves.
  const links = Object.fromEntries(
    await Promise.all(
      [
        // The primary CTA opens the onboarding funnel, not the catalogue.
        [messages.home.ctaPrimary, '/demarrer'],
        [messages.home.ctaSecondary, `/courses/${SLUG}`],
        [messages.nav.parcours, '/courses'],
        [messages.nav.quiz, '/quiz/1'],
        [messages.nav.dashboard, '/home'],
      ].map(async ([name, want]) => [
        name,
        [await lp.getByRole('link', { name }).first().getAttribute('href'), want],
      ]),
    ),
  )
  for (const [name, [got, want]] of Object.entries(links)) {
    ok(got === want, `"${name}" → ${want}`, got === want ? '' : `got ${got}`)
  }
  for (const [, [href]] of Object.entries(links)) {
    const res = await fetch(`${BASE}${href}`)
    if (!res.ok) failures++, console.log(`  ✗ ${href} returned ${res.status}`)
  }
  ok(true, 'every hero and nav target returns 200')

  // The interactive problem is the page's own claim about how it teaches.
  await lp.getByRole('button', { name: messages.preview.label0 }).click()
  await lp.waitForTimeout(200)
  ok(
    await lp.locator(`text=${messages.preview.wrong.slice(0, 24)}`).isVisible(),
    'a wrong answer explains where to look',
  )
  await lp.getByRole('button', { name: messages.preview.label1, exact: true }).click()
  await lp.waitForTimeout(200)
  ok(
    await lp.locator(`text=${messages.preview.correct.slice(0, 18)}`).isVisible(),
    'the right answer is confirmed',
  )

  // Fresh device: chapter 1 is where you begin, and nothing is locked shut.
  const cta = lp.getByRole('link', { name: messages.path.ctaCurrent }).first()
  ok(await cta.isVisible(), 'chapter 1 is the current station')
  ok(
    (await cta.getAttribute('href')) === `/courses/${SLUG}`,
    'its CTA opens the chapter',
    await cta.getAttribute('href'),
  )
  const preview = lp.getByRole('link', { name: messages.path.ctaLocked }).first()
  ok(
    (await preview.getAttribute('href'))?.startsWith('/courses/'),
    'a chapter with no document is still openable, not a dead end',
    await preview.getAttribute('href'),
  )

  // After reading, the station resumes where the student stopped.
  const at = doc.views[5]
  await lp.goto(url(at.id), { waitUntil: 'load' })
  await lp.waitForSelector(HYDRATED)
  await lp.waitForTimeout(400)
  await lp.goto(`${BASE}/`, { waitUntil: 'load' })
  await lp.waitForSelector(HYDRATED)
  await lp.waitForTimeout(400)
  ok(
    (await lp
      .getByRole('link', { name: messages.path.ctaCurrent })
      .first()
      .getAttribute('href')) === `/courses/${SLUG}?s=${at.id}`,
    'the station resumes at the section last read',
    await lp.getByRole('link', { name: messages.path.ctaCurrent }).first().getAttribute('href'),
  )
  ok(lpErrors.length === 0, 'no console errors on the landing page', lpErrors.slice(0, 2).join(' | '))
  await lp.close()
}

section('Progress dashboard')
{
  // Brilliant's "You" tab, with the public layer removed. See
  // BRILLIANT_WORKFLOW.md §5 and §6 — Leagues are deliberately not ported.
  const pr = JSON.parse(
    readFileSync(new URL('../messages/fr.json', import.meta.url), 'utf8'),
  ).progress
  const ctx = await browser.newContext({ viewport: { width: 1000, height: 1200 } })
  const pg = await ctx.newPage()
  const dErrors = []
  pg.on('pageerror', (e) => dErrors.push(String(e)))
  pg.on('console', (m) => m.type() === 'error' && dErrors.push(m.text()))
  const settle = async () => {
    await pg.waitForSelector(HYDRATED)
    await pg.waitForTimeout(450)
  }
  const bars = () => pg.locator('[role="img"] > div').count()

  await pg.goto(`${BASE}/progres`, { waitUntil: 'load' })
  await settle()
  ok(
    await pg.locator(`text=${pr.empty}`).isVisible(),
    'a device with no history says so instead of drawing a fake chart',
  )

  // Read three sections; the history is dated from that moment on.
  for (const v of doc.views.slice(0, 3)) {
    await pg.goto(url(v.id), { waitUntil: 'load' })
    await settle()
  }
  await pg.goto(`${BASE}/progres`, { waitUntil: 'load' })
  await settle()

  const stats = await pg.locator('p[dir="ltr"]').allInnerTexts()
  ok(stats[0] === '3', 'the snapshot counts the sections read', stats.join(' | '))

  // Re-reading must not inflate the chart.
  await pg.goto(url(doc.views[0].id), { waitUntil: 'load' })
  await settle()
  await pg.goto(`${BASE}/progres`, { waitUntil: 'load' })
  await settle()
  ok(
    (await pg.locator('p[dir="ltr"]').first().innerText()) === '3',
    'revisiting a section does not count twice',
  )

  // The bucket contract: 7 daily / 4 weekly / 12 monthly.
  ok((await bars()) === 7, 'Week draws 7 daily buckets')
  await pg.getByRole('tab', { name: pr.month }).click()
  await pg.waitForTimeout(350)
  ok(
    (await bars()) === 4,
    'Month draws 4 WEEKLY buckets over 28 days, not a calendar month',
  )
  await pg.getByRole('tab', { name: pr.year }).click()
  await pg.waitForTimeout(350)
  ok((await bars()) === 12, 'Year draws 12 monthly buckets')

  // The only comparison this product makes.
  await pg.getByRole('tab', { name: pr.week }).click()
  await pg.waitForTimeout(350)
  const shown = await pg.locator('main, body').first().innerText()
  ok(
    /période précédente|Première période/.test(shown),
    'progress is compared against the reader\'s own previous window',
  )
  ok(
    await pg.locator(`text=${pr.privacyNote.slice(0, 30)}`).isVisible(),
    'the page states that nothing is shared or ranked',
  )

  // No public comparison layer, in any form.
  const withoutNote = shown.replace(pr.privacyNote, '')
  ok(
    !/(ligue|league|classement|rang\b|podium|leaderboard)/i.test(withoutNote),
    'no ranking, league or leaderboard anywhere on the page',
  )

  // Arabic route serves the same page.
  const arRes = await fetch(`${BASE}/ar/progres`)
  ok(arRes.ok, 'the dashboard serves on the Arabic route too')

  ok(
    dErrors.filter((e) => !/404|Failed to load resource/.test(e)).length === 0,
    'no console errors on the dashboard',
    dErrors.filter((e) => !/404|Failed to load resource/.test(e)).slice(0, 2).join(' | '),
  )
  await ctx.close()
}

section('Learning loop')
{
  // Wrong answers are amber, never red; nothing is taken; retry is unlimited
  // and is the encouraged path. See BRILLIANT_WORKFLOW.md §4.
  const c = JSON.parse(
    readFileSync(new URL('../messages/fr.json', import.meta.url), 'utf8'),
  ).course
  const ctx = await browser.newContext({ viewport: { width: 1000, height: 900 } })
  const pg = await ctx.newPage()
  const lErrors = []
  pg.on('pageerror', (e) => lErrors.push(String(e)))
  pg.on('console', (m) => m.type() === 'error' && lErrors.push(m.text()))
  const settle = async () => {
    await pg.waitForSelector(HYDRATED)
    await pg.waitForTimeout(450)
  }

  const cp = doc.views.find((v) => v.checkpoints > 0)
  await pg.goto(url(cp.id), { waitUntil: 'load' })
  await settle()

  // Scoped to the checkpoint's own chip: the progress card grows an XP chip of
  // its own once there is something to show, which would otherwise become the
  // first `text=/XP/` match and make this compare two different elements.
  const cpXp = pg
    .locator('section')
    .filter({ hasText: c.yourTurn })
    .first()
    .locator('span[dir="ltr"]')
    .first()
  const xpBefore = await cpXp.innerText()
  await pg.locator('textarea').first().fill('essai')
  await pg.getByRole('button', { name: new RegExp(c.iTried) }).click()
  await pg.getByRole('button', { name: c['verdict-not-yet'] }).click()
  await pg.waitForTimeout(300)

  ok(
    await pg.getByRole('button', { name: new RegExp(c.retry) }).isVisible(),
    'a miss offers retry as the primary action',
  )
  ok(
    await pg.locator(`text=${c.nothingLost.slice(0, 20)}`).isVisible(),
    'and says explicitly that nothing was lost',
  )
  ok(
    (await cpXp.innerText()) === xpBefore,
    'XP is unchanged by a miss',
    `${xpBefore} → ${await cpXp.innerText()}`,
  )
  await pg.getByRole('button', { name: new RegExp(c.retry) }).click()
  await pg.waitForTimeout(300)
  ok(
    await pg.locator('textarea').first().isVisible(),
    'retry returns to the attempt, in place',
  )

  // The word "Incorrect" and the colour red are banned from the answering flow.
  const shown = await pg.locator('body').innerText()
  ok(!/incorrect/i.test(shown), 'the word "Incorrect" never appears')

  // Finishing the chapter pays the total the card advertises, once.
  await pg.evaluate((ids) => {
    const all = JSON.parse(
      localStorage.getItem('zabaqist_course_progress') ?? '{}',
    )
    all['limites-et-continuite'] = {
      courseId: 'limites-et-continuite',
      lastVisitedTab: ids[0],
      completedTabs: ids,
      exercisesAttempted: [],
      exercisesCompleted: [],
      homeworkStarted: false,
      homeworkCompleted: false,
      lastUpdated: new Date().toISOString(),
      timeSpent: 0,
    }
    localStorage.setItem('zabaqist_course_progress', JSON.stringify(all))
  }, doc.views.map((v) => v.id))

  await pg.goto(`${BASE}/courses/${SLUG}`, { waitUntil: 'load' })
  await settle()
  ok(await pg.getByRole('dialog').isVisible(), 'finishing the chapter is celebrated')
  const total = doc.views.reduce((n, v) => n + v.xp, 0)
  ok(
    (await pg.getByRole('dialog').innerText()).includes(String(total)),
    'the celebration pays the total the course card advertises',
    String(total),
  )
  ok(
    !/premium|essai gratuit|abonn/i.test(await pg.getByRole('dialog').innerText()),
    'no monetisation in the celebration',
  )
  await pg.getByRole('button', { name: new RegExp(c.doneCta) }).click()
  await pg.goto(`${BASE}/courses/${SLUG}`, { waitUntil: 'load' })
  await settle()
  ok(
    !(await pg.getByRole('dialog').isVisible().catch(() => false)),
    'it fires once, not on every visit',
  )

  ok(
    lErrors.filter((e) => !/404|Failed to load resource/.test(e)).length === 0,
    'no console errors in the loop',
    lErrors.filter((e) => !/404|Failed to load resource/.test(e)).slice(0, 2).join(' | '),
  )
  await ctx.close()
}

section('Course path')
{
  // The course landing is a journey with one node lit, not a document with a
  // contents list on top. See BRILLIANT_WORKFLOW.md §3.
  const c = JSON.parse(
    readFileSync(new URL('../messages/fr.json', import.meta.url), 'utf8'),
  ).course
  const ctx = await browser.newContext({ viewport: { width: 1100, height: 1000 } })
  const pg = await ctx.newPage()
  const pErrors = []
  pg.on('pageerror', (e) => pErrors.push(String(e)))
  pg.on('console', (m) => m.type() === 'error' && pErrors.push(m.text()))
  const settle = async () => {
    await pg.waitForSelector(HYDRATED)
    await pg.waitForTimeout(450)
  }
  const path = `${BASE}/courses/${SLUG}`

  await pg.goto(path, { waitUntil: 'load' })
  await settle()

  ok(
    (await pg.locator('ol li a').count()) === doc.views.length,
    `the path has one node per section (${doc.views.length})`,
  )
  ok(
    (await pg.locator('.course-doc').count()) === 0,
    'the landing view is the path, not the document',
  )
  ok(
    (await pg.locator('[aria-current="step"]').count()) === 1,
    'exactly one node is current',
  )
  ok(
    (await pg.locator(`text=${c.youAreHere}`).count()) === 1,
    'the "you are here" pin appears once',
  )
  ok(
    (await pg.locator('.sticky a').last().innerText()).trim() === c.pathStart,
    'a fresh device is offered Start, not Continue',
  )

  // Nothing is locked: an unreached section is still openable.
  const last = pg.locator('ol li a').last()
  ok(
    (await last.getAttribute('href'))?.includes('?s='),
    'unreached sections stay openable — desaturated, not locked',
  )

  // Looking at the map must not count as reading.
  ok(
    !(await pg.evaluate(() =>
      localStorage.getItem('zabaqist_course_progress'),
    )),
    'opening the path marks nothing as read',
  )

  // Read one section, come back: the node is stamped and the verb flips.
  await pg.goto(`${path}?s=${doc.views[0].id}`, { waitUntil: 'load' })
  await settle()
  ok(
    (await pg.locator('.course-doc').count()) === 1,
    'opening a node opens the reader',
  )
  await pg.goto(path, { waitUntil: 'load' })
  await settle()
  ok(
    (await pg.locator('ol li a span:text-is("✓")').count()) === 1,
    'the section just read is stamped done',
  )
  ok(
    (await pg.locator('.sticky a').last().innerText()).trim() === c.pathContinue,
    'and the CTA verb carries the state — Continue',
  )

  ok(
    pErrors.filter((e) => !/404|Failed to load resource/.test(e)).length === 0,
    'no console errors on the path',
    pErrors.filter((e) => !/404|Failed to load resource/.test(e)).slice(0, 2).join(' | '),
  )
  await ctx.close()
}

section('Onboarding funnel')
{
  // The funnel asks for no account, alternates asking with giving, and never
  // auto-advances. See BRILLIANT_WORKFLOW.md §1.
  const ob = JSON.parse(
    readFileSync(new URL('../messages/fr.json', import.meta.url), 'utf8'),
  ).onboarding
  const ctx = await browser.newContext({ viewport: { width: 900, height: 1000 } })
  const pg = await ctx.newPage()
  const oErrors = []
  pg.on('pageerror', (e) => oErrors.push(String(e)))
  pg.on('console', (m) => m.type() === 'error' && oErrors.push(m.text()))
  const settle = async () => {
    await pg.waitForSelector(HYDRATED)
    await pg.waitForTimeout(350)
  }
  const cont = () => pg.getByRole('button', { name: ob.continue })

  await pg.goto(`${BASE}/demarrer`, { waitUntil: 'load' })
  await settle()

  // The welcome step shows no progress bar — you commit before learning the length.
  ok(
    (await pg.locator('header div[aria-hidden]').count()) === 0,
    'the welcome step shows no progress bar',
  )
  ok(
    (await pg.locator('footer').count()) === 0,
    'the funnel ships no footer — every exit is removed',
  )
  await cont().click()
  await pg.waitForTimeout(400)

  ok(await cont().isDisabled(), 'Continue is disabled until the question is answered')
  ok(
    (await pg.locator('header div[aria-hidden]').count()) > 0,
    'the progress bar mounts on the first question',
  )
  await pg.getByRole('radio').first().click()
  await pg.waitForTimeout(200)
  ok(!(await cont().isDisabled()), 'answering enables Continue')
  ok(
    (await pg.getByRole('radio', { checked: true }).count()) === 1,
    'selecting does not auto-advance — the reader presses Continue',
  )

  // give → ask → ask → give → ask, then the reveal.
  await cont().click()
  await pg.waitForTimeout(400)
  ok(
    await pg.getByRole('button', { name: messages.preview.label1 }).isVisible(),
    'the first give-step hands over a real interactive problem',
  )

  await cont().click()
  await pg.waitForTimeout(400)
  const cards = await pg.getByRole('radio').allInnerTexts()
  ok(
    cards.length === 2 && cards.join(' ').includes(messages.auth['filiere-sm']),
    'the filière is asked by recognition, with a worked example per card',
  )
  ok(
    (await pg.locator('.katex').count()) >= 2,
    'each filière card carries real maths, not a label',
  )

  await pg.getByRole('radio').first().click()
  await cont().click()
  await pg.waitForTimeout(400)
  await pg.getByRole('radio').first().click()
  await cont().click()
  await pg.waitForTimeout(400)
  await cont().click()
  await pg.waitForTimeout(400)
  await pg.getByRole('radio').nth(1).click()
  await cont().click()
  await pg.waitForTimeout(600)

  // The reveal: the promise rendered, with one chapter lit.
  ok(
    (await pg.locator('h1').innerText()).includes(messages.auth['filiere-sm']),
    'the plan reveal names the programme that was chosen',
  )
  ok(
    (await pg.locator(`text=${ob.planStartHere}`).count()) === 1,
    'exactly one chapter is marked as the starting point',
  )

  const stored = await pg.evaluate(() => ({
    filiere: localStorage.getItem('zabaqist:filiere'),
    answers: localStorage.getItem('zabaqist:onboarding'),
  }))
  ok(
    stored.filiere?.includes('sm') && stored.answers?.includes('completedAt'),
    'the funnel records the filière and marks itself complete',
  )

  // Nothing in the funnel asks for an account.
  ok(
    (await pg.locator('input[type="email"], input[type="password"]').count()) === 0,
    'the funnel never asks for an account',
  )

  ok(
    oErrors.filter((e) => !/404|Failed to load resource/.test(e)).length === 0,
    'no console errors in the funnel',
    oErrors.filter((e) => !/404|Failed to load resource/.test(e)).slice(0, 2).join(' | '),
  )
  await ctx.close()
}

section('Filière')
{
  // The whole point of asking: SM and Sciences Exp are different programmes,
  // so the answer has to change what the student is shown.
  // Scoped to the catalogue section by its own h2: `/courses` also carries the
  // browse-all grid, and the catalogue now nests course titles (h4) under a
  // branch heading (h3), so a bare `section h3` reads the branch names instead.
  const titles = async (pg) =>
    (
      await pg
        .locator('section')
        .filter({
          has: pg.getByRole('heading', {
            level: 2,
            name: messages.catalog.title,
          }),
        })
        .locator('li h4')
        .allInnerTexts()
    ).join(' | ')
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 1000 } })
  const pg = await ctx.newPage()
  const fErrors = []
  pg.on('pageerror', (e) => fErrors.push(String(e)))
  pg.on('console', (m) => m.type() === 'error' && fErrors.push(m.text()))
  const settle = async () => {
    await pg.waitForSelector(HYDRATED)
    await pg.waitForTimeout(350)
  }
  const smOnly = 'Nombres complexes'
  const shared = doc.meta.title

  await pg.goto(`${BASE}/courses`, { waitUntil: 'load' })
  await settle()
  const before = await titles(pg)
  ok(before.includes(shared), 'a fresh device sees the default programme')
  ok(!before.includes(smOnly), 'and not the SM-only chapter')

  // Pick Sciences Mathématiques.
  await pg.goto(`${BASE}/filiere`, { waitUntil: 'load' })
  await settle()
  await pg.getByRole('button', { name: messages.auth['filiere-sm'] }).click()
  await pg.getByRole('button', { name: messages.auth['track-2bac-sm-a'] }).click()
  await pg.getByRole('button', { name: new RegExp(messages.auth.confirm) }).click()
  await pg.waitForURL('**/home', { timeout: 15000 })
  ok(true, 'choosing a filière lands on the dashboard')

  await pg.goto(`${BASE}/courses`, { waitUntil: 'load' })
  await settle()
  const sm = await titles(pg)
  ok(sm.includes(smOnly), 'SM gains its own chapter')
  ok(sm.includes(shared), 'and keeps the shared one')

  await pg.goto(`${BASE}/`, { waitUntil: 'load' })
  await settle()
  const path = (await pg.locator('main h3').allInnerTexts()).join(' | ')
  ok(
    path.includes(smOnly),
    "the landing parcours walks the SM programme",
  )

  // The choice survives a reload — it is the student's, not the page's.
  await pg.reload({ waitUntil: 'load' })
  await settle()
  ok(
    (await pg.locator('main h3').allInnerTexts()).join(' | ').includes(smOnly),
    'the choice survives a reload',
  )

  // Switch back.
  await pg.goto(`${BASE}/filiere`, { waitUntil: 'load' })
  await settle()
  ok(
    (await pg
      .getByRole('button', { name: messages.auth['filiere-sm'] })
      .getAttribute('aria-pressed')) === 'true',
    'the picker opens on the current answer, not a blank form',
  )
  await pg.getByRole('button', { name: messages.auth['filiere-sx'] }).click()
  await pg.getByRole('button', { name: messages.auth['track-2bac-svt'], exact: true }).click()
  await pg.getByRole('button', { name: new RegExp(messages.auth.confirm) }).click()
  await pg.waitForURL('**/home', { timeout: 15000 })
  await pg.goto(`${BASE}/courses`, { waitUntil: 'load' })
  await settle()
  ok(
    !(await titles(pg)).includes(smOnly),
    'switching back drops the chapters that are not on that programme',
  )

  // `?next=` is a path, never a URL — it must not bounce anyone off-site.
  await pg.goto(`${BASE}/filiere?next=https://example.com`, { waitUntil: 'load' })
  await settle()
  await pg.getByRole('button', { name: new RegExp(messages.auth.confirm) }).click()
  await pg.waitForURL('**/home', { timeout: 15000 })
  ok(
    new URL(pg.url()).origin === BASE,
    'an off-site `next` is refused',
    new URL(pg.url()).href,
  )

  ok(
    fErrors.filter((e) => !/404|Failed to load resource/.test(e)).length === 0,
    'no console errors in the filière flow',
    fErrors.filter((e) => !/404|Failed to load resource/.test(e)).slice(0, 2).join(' | '),
  )
  await ctx.close()
}

section('Auth (Google)')
{
  // Connecting is where the question is asked — but only once.
  //
  // `storageState: undefined` opts out of the shared session this file injects:
  // these checks are about what happens BEFORE there is one, so inheriting it
  // would assert nothing.
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    storageState: undefined,
  })
  const pg = await ctx.newPage()
  // Visiting /ar makes the locale sticky in a cookie, which is the point of the
  // feature — so these assertions compare paths with the prefix removed rather
  // than pinning a language they are not about.
  const at = () => new URL(pg.url()).pathname.replace(/^\/ar(?=\/|$)/, '') || '/'

  // 1. Signed out, the gate turns you away and remembers where you were going.
  await pg.goto(`${BASE}/home`, { waitUntil: 'load' })
  ok(
    at() === '/signin',
    'a signed-out visitor cannot reach the dashboard',
    pg.url().replace(BASE, ''),
  )
  ok(
    new URL(pg.url()).searchParams.get('next') === '/home',
    'and the gate remembers where they were headed',
  )

  // 2. The sign-in page offers Google and nothing that pretends to work.
  await pg.waitForSelector(HYDRATED)
  ok(
    await pg.getByRole('button', { name: new RegExp(messages.auth.google) }).isVisible(),
    'the sign-in page offers Google',
  )
  ok(
    (await pg.locator('input[type="password"]').count()) === 0,
    'and no password field that leads nowhere',
  )

  // 3. The OAuth callback must be reachable without a session, and must NOT be
  //    locale-rewritten. next-intl ran before the gate and did not recognise
  //    `auth` as a locale, so it rewrote /auth/callback to /fr/auth/callback —
  //    Google returned with a valid code and the app answered 404. The matcher
  //    now skips /auth entirely.
  {
    const res = await pg.goto(`${BASE}/auth/callback?code=invalid`, {
      waitUntil: 'load',
    })
    ok(
      res.status() !== 404,
      'the OAuth callback is not swallowed by the locale rewrite',
      `HTTP ${res.status()} at ${pg.url().replace(BASE, '')}`,
    )
    ok(
      at() === '/signin',
      'and an invalid code lands back on sign-in rather than crashing',
      pg.url().replace(BASE, ''),
    )
  }

  // 4. The public face stays public — the sitemap and robots.txt depend on it.
  for (const [path, label] of [
    ['/', 'the landing page'],
    ['/ar', 'the Arabic landing page'],
  ]) {
    const res = await pg.goto(`${BASE}${path}`, { waitUntil: 'load' })
    ok(
      res.status() === 200 && new URL(pg.url()).pathname === path,
      `${label} is reachable signed out`,
      pg.url().replace(BASE, ''),
    )
  }

  // 5. With a session but no filière, the funnel is where you land — the
  //    programme differs between SM and Sciences Exp, so nothing can be shown
  //    until that is answered.
  await signInAs(ctx)
  await pg.goto(`${BASE}/home`, { waitUntil: 'load' })
  await pg.waitForURL('**/demarrer**', { timeout: 15000 })
  ok(true, 'signing in with no filière opens the funnel')

  // 6. Answered once, it is not asked again.
  await pg.evaluate(() => {
    localStorage.setItem(
      'zabaqist:filiere',
      JSON.stringify({ track: '2bac-pc', filiere: 'sx' }),
    )
  })
  await pg.goto(`${BASE}/home`, { waitUntil: 'load' })
  await pg.waitForSelector(HYDRATED)
  await pg.waitForTimeout(600)
  ok(
    at() === '/home',
    'and answering it once is enough',
    pg.url().replace(BASE, ''),
  )

  // 7. The account menu is the way out, and it names who is signed in.
  //
  // Either language: step 3 visited /ar, which makes the locale sticky, so
  // pinning the French label here would be testing the cookie, not the menu.
  const either = (k) => new RegExp(`${messages.auth[k]}|${messagesAr.auth[k]}`)
  await pg.getByRole('button', { name: either('account') }).click()
  ok(
    await pg.getByRole('menuitem', { name: either('signOut') }).isVisible(),
    'the account menu offers a way to sign out',
  )

  // Signing out really ends it. The button calls Supabase, which has no session
  // to clear here — this suite never had one — so the bypass cookie is what
  // stands in for it. Dropping it is the same thing from the gate's side.
  await ctx.clearCookies()
  await pg.goto(`${BASE}/home`, { waitUntil: 'load' })
  ok(
    at() === '/signin',
    'and without a session the dashboard closes again',
    pg.url().replace(BASE, ''),
  )
  await ctx.close()
}

section('Home page')
// "Jump back in" must resume the course this device was actually on — the card
// used to be a hardcoded link to a different course.
const home = await browser.newPage({ viewport: { width: 1280, height: 900 } })
await home.goto(`${BASE}/home`, { waitUntil: 'load' })
await home.waitForSelector(HYDRATED)
await home.waitForTimeout(400)
const jump = home.getByRole('link', { name: messages.dashboard.start })
ok(await jump.isVisible(), 'fresh device: the card offers to start chapter 1')
ok(
  (await jump.getAttribute('href')) === `/courses/${SLUG}`,
  `"Jump back in" links to /courses/${SLUG}`,
  await jump.getAttribute('href'),
)
ok(
  await home.getByRole('link', { name: new RegExp(doc.meta.title, 'i') }).first().isVisible(),
  'the chapter is listed under "Continuer l\'apprentissage"',
)

// After reading a section it must resume there, not at the top.
const resumeAt = doc.views[3]
await home.goto(url(resumeAt.id), { waitUntil: 'load' })
await home.waitForSelector(HYDRATED)
await home.waitForTimeout(400)
await home.goto(`${BASE}/home`, { waitUntil: 'load' })
await home.waitForSelector(HYDRATED)
await home.waitForTimeout(400)
const resume = home.getByRole('link', { name: messages.dashboard.resume })
ok(await resume.isVisible(), 'after reading, the card offers to resume')
ok(
  (await resume.getAttribute('href')) === `/courses/${SLUG}?s=${resumeAt.id}`,
  'it resumes at the section last read',
  await resume.getAttribute('href'),
)
ok(
  /\d+%/.test(await home.locator('text=/%/').first().innerText()),
  'it shows real progress, not a placeholder',
)
await home.close()

section('Migrated chapter')
{
  // The hand-written course became a document, and a ```geogebra fence keeps the
  // interactive figure it used to declare in JSX.
  const migrated = await loadCourseDoc('fonctions-logarithmiques')
  ok(!!migrated, 'the chapter loads from content/course/')
  const tabsHere = tabsOf(migrated.views).map((t) => t.label)
  ok(
    ['Introduction', 'Cours', 'Graphique', 'Exercices', 'Devoir', 'Résumé'].every(
      (l) => tabsHere.includes(l),
    ),
    'all six parts survive the migration',
    tabsHere.join(' · '),
  )
  ok(
    migrated.views.reduce((n, v) => n + v.checkpoints, 0) >= 10,
    'its exercises became checkpoints',
    String(migrated.views.reduce((n, v) => n + v.checkpoints, 0)),
  )
  ok(
    listCourses('sm').some((c) => c.slug === 'fonctions-logarithmiques') &&
      listCourses('sx').some((c) => c.slug === 'fonctions-logarithmiques'),
    'it is on both filières, as ln is',
  )

  const pg = await browser.newPage({ viewport: { width: 1100, height: 1000 } })
  const gErrors = []
  pg.on('pageerror', (e) => gErrors.push(String(e)))
  await pg.goto(`${BASE}/courses/fonctions-logarithmiques?s=graphique`, {
    waitUntil: 'load',
  })
  await pg.waitForSelector(HYDRATED)
  await pg.waitForTimeout(5000)
  ok(
    (await pg.locator('iframe, .appletContainer, [id^="ggb"]').count()) > 0,
    'the ```geogebra fence renders an interactive figure',
  )
  ok(
    !(await pg.locator('body').innerText()).includes('"commands"'),
    'and not its raw JSON as a code block',
  )
  ok(gErrors.length === 0, 'no page errors on the figure', gErrors.slice(0, 2).join(' | '))
  await pg.close()
}

section('Programme complet (13 chapitres)')
{
  // The whole Sciences Mathématiques year is authored, split into the two
  // series the pedagogue actually numbered: analysis and algebra. These checks
  // exist because the failure mode is silent — a chapter that paginates into
  // one giant view, or a catalogue row whose slug no chapter answers to, both
  // still render a page.
  const all = listCourses()
  ok(all.length === 13, 'thirteen chapters in the catalogue', String(all.length))

  const docs = new Map()
  for (const c of all) docs.set(c.slug, await loadCourseDoc(c.slug))

  ok(
    all.every((c) => docs.get(c.slug)),
    'every catalogue row has a document behind it',
    all.filter((c) => !docs.get(c.slug)).map((c) => c.slug).join(', '),
  )
  ok(
    all.every((c) => docs.get(c.slug).views.length >= 5),
    'no chapter collapses into a handful of giant sections',
    all
      .filter((c) => docs.get(c.slug).views.length < 5)
      .map((c) => `${c.slug}:${docs.get(c.slug).views.length}`)
      .join(', '),
  )
  ok(
    all.every((c) => {
      const t = tabsOf(docs.get(c.slug).views)
      return t.length >= 5 && new Set(t.map((x) => x.id)).size === t.length
    }),
    'every chapter has at least five tabs, all distinct',
  )
  ok(
    all.every((c) => {
      const kinds = new Set(docs.get(c.slug).views.map((v) => v.kind))
      return kinds.has('cours') && kinds.has('exercices') && kinds.has('bilan')
    }),
    'every chapter has lesson, drill and review sections',
  )

  // The catalogue's `sections` / `exercises` are denormalised from the markdown
  // and shown to students under a promise that nothing is invented. Re-derive
  // them, so editing a chapter without updating its row fails here rather than
  // quietly misreporting the programme.
  const drift = all.filter((c) => {
    const d = docs.get(c.slug)
    const cp = d.views.reduce((n, v) => n + v.checkpoints, 0)
    return d.views.length !== c.sections || cp !== c.exercises
  })
  ok(
    drift.length === 0,
    'catalogue section/exercise counts match the documents',
    drift.map((c) => c.slug).join(', '),
  )

  // `critique/course/` is where the chapters are authored and `content/course/`
  // is what the app reads. Both are committed, so a chapter edited in one and
  // not the other drifts silently — the site would keep serving the stale copy.
  const authoredDir = new URL('../critique/course/', import.meta.url)
  const servedDir = new URL('../content/course/', import.meta.url)
  const stale = readdirSync(authoredDir)
    .filter((f) => f.endsWith('.md'))
    .filter((f) => {
      let served
      try {
        served = readFileSync(new URL(f, servedDir), 'utf8')
      } catch {
        return true // authored but never copied across
      }
      return served !== readFileSync(new URL(f, authoredDir), 'utf8')
    })
  ok(
    stale.length === 0,
    'content/course/ is in sync with critique/course/',
    stale.join(', '),
  )

  // The plan a student is shown must be the plan they can open.
  const catSm = listCourses('sm').map((c) => c.slug).sort()
  const progSm = CHAPTERS_SM.map((c) => c.slug).sort()
  ok(
    JSON.stringify(catSm) === JSON.stringify(progSm),
    'the SM programme and the SM catalogue are the same chapters',
    [
      ...progSm.filter((x) => !catSm.includes(x)).map((x) => `plan only: ${x}`),
      ...catSm.filter((x) => !progSm.includes(x)).map((x) => `catalogue only: ${x}`),
    ].join(', '),
  )
  ok(
    CHAPTERS_SM.every((c, i) => c.n === i + 1) &&
      CHAPTERS_SM.every((c) => c.branch === 'analyse' || c.branch === 'algebre'),
    'the SM plan is numbered 1..13 and every chapter has a branch',
  )
  ok(
    listCourses('sm').filter((c) => c.branch === 'analyse').length === 7 &&
      listCourses('sm').filter((c) => c.branch === 'algebre').length === 6,
    'SM splits 7 analyse / 6 algèbre',
  )
  ok(
    listCourses('sx').every((c) => c.branch === 'analyse'),
    'Sciences Exp is served the analysis thread only',
    listCourses('sx').filter((c) => c.branch !== 'analyse').map((c) => c.slug).join(', '),
  )

  // Each chapter's path page and its first section, rendered for real. A
  // chapter can load fine through the loader and still throw in the browser —
  // that is how the parseSpec RSC boundary bug surfaced.
  const pg = await browser.newPage({ viewport: { width: 1100, height: 900 } })
  const broken = []
  for (const c of all) {
    const errs = []
    const onErr = (e) => errs.push(`${c.slug}: ${e}`)
    pg.on('pageerror', onErr)
    const first = docs.get(c.slug).views[0].id
    for (const u of [`${BASE}/courses/${c.slug}`, `${BASE}/courses/${c.slug}?s=${first}`]) {
      const res = await pg.goto(u, { waitUntil: 'load' })
      if (!res || res.status() >= 400) errs.push(`${c.slug}: HTTP ${res?.status()}`)
    }
    await pg.waitForSelector(HYDRATED, { timeout: 30000 })
    const wide = await pg.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    )
    if (wide) errs.push(`${c.slug}: page scrolls sideways`)
    pg.off('pageerror', onErr)
    if (errs.length) broken.push(...errs)
  }
  ok(broken.length === 0, 'all 13 chapters render without errors', broken.slice(0, 3).join(' | '))

  // The catalogue groups SM into its two branches; SX has one thread and gets
  // no headings, because naming a distinction a student never meets is noise.
  await pg.goto(`${BASE}/courses`, { waitUntil: 'load' })
  await pg.waitForSelector(HYDRATED, { timeout: 30000 })
  await pg.evaluate(() => {
    localStorage.setItem(
      'zabaqist:filiere',
      JSON.stringify({ track: '2bac-sm-a', filiere: 'sm' }),
    )
  })
  await pg.reload({ waitUntil: 'load' })
  await pg.waitForSelector(HYDRATED, { timeout: 30000 })
  await pg.waitForTimeout(400)
  const catalogue = await pg.locator('body').innerText()
  ok(
    catalogue.includes('Analyse') && catalogue.includes('Algèbre'),
    'the catalogue shows both branches for SM',
  )
  ok(
    listCourses('sm').every((c) => catalogue.includes(c.title)),
    'and lists all thirteen SM chapters',
    listCourses('sm').filter((c) => !catalogue.includes(c.title)).map((c) => c.slug).join(', '),
  )
  await pg.close()
}

section('Chrome')
{
  // The footer used to link to seven pages that did not exist. Next prefetches
  // footer links, so every page in the app logged seven 404s on load.
  const pg = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  const failed = new Set()
  pg.on('response', (r) => {
    if (r.status() >= 400) failed.add(`${r.status()} ${new URL(r.url()).pathname}`)
  })
  for (const u of ['/home', '/courses', '/progres', '/']) {
    await pg.goto(`${BASE}${u}`, { waitUntil: 'load' })
    await pg.waitForTimeout(600)
  }
  ok(failed.size === 0, 'no page requests a URL that 404s', [...failed].join(', '))

  // Back to a page with the GLOBAL footer: the landing page ships its own.
  await pg.goto(`${BASE}/home`, { waitUntil: 'load' })
  await pg.waitForSelector(HYDRATED)
  ok(
    (await pg.locator('footer a[href^="https://zabaqist.com"]').count()) >= 4,
    'the footer points at the marketing site for the pages it publishes',
    String(await pg.locator('footer a[href^="https://zabaqist.com"]').count()),
  )
  await pg.goto(`${BASE}/ar/home`, { waitUntil: 'load' })
  await pg.waitForSelector(HYDRATED)
  ok(
    (await pg.locator('footer a[href^="https://zabaqist.com/ar/"]').count()) >= 3,
    'and carries the locale across to it',
  )
  await pg.close()
}

{
  // `QuizPlayer` / `MultipleChoiceQuestion` predate next-intl and were hardcoded
  // French inside a bilingual app. (`ExerciseWithSolution` and
  // `DevoirAssignment` were translated too, but the JSX course that used them
  // has been migrated to markdown, so no route renders them any more.)
  const ar = JSON.parse(
    readFileSync(new URL('../messages/ar.json', import.meta.url), 'utf8'),
  )
  const quizHtml = await (await get(`${BASE}/ar/quiz/1`)).text()
  ok(
    quizHtml.includes(ar.quiz.loading) || quizHtml.includes(ar.quiz.previous),
    'the quiz player speaks Arabic',
  )
  ok(
    !/Chargement du quiz|Voir les corrections/.test(quizHtml),
    'and no French is left in it on the Arabic route',
  )
}

section('Brand identity')
{
  const pg = await browser.newPage({ viewport: { width: 1100, height: 900 } })
  await pg.goto(`${BASE}/courses/${SLUG}?s=${doc.views[0].id}`, { waitUntil: 'load' })
  await pg.waitForSelector(HYDRATED)
  await pg.waitForTimeout(450)

  // The khatim is the bullet. This is the thing that stops the product looking
  // like every other learning app — see BRILLIANT_WORKFLOW.md and the note on
  // `.zb-star-list` in app/globals.css.
  const bullet = await pg.evaluate(() => {
    const li = document.querySelector('.zb-star-list > li')
    if (!li) return null
    const cs = getComputedStyle(li, '::before')
    return { w: cs.width, bg: cs.backgroundImage.slice(0, 30) }
  })
  ok(
    bullet?.w === '11px' && bullet.bg.startsWith('url("data:image/svg'),
    'list bullets are the khatim, not a disc',
    JSON.stringify(bullet),
  )

  // One palette. The landing page and the course pages ran on two different
  // greens; a stray `zb-teal` would mean that has come back.
  const html = await pg.content()
  ok(
    !/zb-teal|zb-saffron|zb-gold-warm|#2CB0A1/i.test(html),
    'no off-palette colour names survive',
  )

  // The two measured accessibility fixes in the palette. Someone "brightening"
  // the gold back to #b8841a drops it to 3.22:1 and fails AA in both
  // directions — this is the guard against that.
  const contrast = await pg.evaluate(() => {
    const rs = getComputedStyle(document.documentElement)
    const cv = document.createElement('canvas')
    cv.width = cv.height = 1
    const ctx = cv.getContext('2d', { willReadFrequently: true })
    // Paint and read back: parsing the computed string does not resolve
    // oklch() to sRGB, and its components are not r,g,b.
    const rgb = (v) => {
      ctx.clearRect(0, 0, 1, 1)
      ctx.fillStyle = '#000'
      ctx.fillStyle = v
      ctx.fillRect(0, 0, 1, 1)
      const d = ctx.getImageData(0, 0, 1, 1).data
      return [d[0], d[1], d[2]]
    }
    const lum = ([r, g, b]) => {
      const f = (c) => {
        c /= 255
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
      }
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
    }
    const ratio = (a, b) => {
      const [x, y] = [lum(rgb(a)), lum(rgb(b))].sort((m, n) => n - m)
      return (x + 0.05) / (y + 0.05)
    }
    const t = (n) => rs.getPropertyValue(n).trim()
    return {
      goldOnCream: ratio(t('--zb-gold-deep'), t('--zb-cream')),
      inkOnCream: ratio(t('--zb-ink-3'), t('--zb-cream')),
      creamOnMint: ratio(t('--zb-cream'), t('--zb-mint')),
      creamOnRose: ratio(t('--zb-cream'), t('--zb-rose')),
    }
  })
  for (const [name, r] of Object.entries(contrast)) {
    ok(r >= 4.5, `${name} clears AA`, `${r.toFixed(2)}:1`)
  }
  await pg.close()
}

section('Production readiness')
{
  // Things that must not reach a real deployment.
  const creds = await (await fetch(`${BASE}/signin`)).text()
  ok(
    !creds.includes('test@test.com') && !/Mot de passe:.*<strong>password/.test(creds),
    'the sign-in page does not print working test credentials',
  )
  ok(
    (await get(`${BASE}/test-quiz`)).status === 404,
    'the dev scratch route is not a production URL',
  )
  ok(
    (await get(`${BASE}/courses/x/chapter-1/lesson-1`)).status === 404,
    'the placeholder lesson route is gone',
  )

  const robots = await fetch(`${BASE}/robots.txt`)
  const robotsTxt = await robots.text()
  ok(robots.ok && /Sitemap:/.test(robotsTxt), 'robots.txt is served with a sitemap')
  ok(
    ['/demarrer', '/progres', '/signin'].every((p) =>
      robotsTxt.includes(`Disallow: ${p}`),
    ),
    'the funnel, the private dashboard and auth are excluded from crawling',
  )

  const sm = await fetch(`${BASE}/sitemap.xml`)
  const smXml = await sm.text()
  ok(sm.ok && smXml.includes('<urlset'), 'sitemap.xml is served')
  ok(
    listCourses().every((c) => smXml.includes(`/courses/${c.slug}`)),
    'every chapter is in the sitemap',
  )
  ok(
    /hreflang="ar"/.test(smXml) && /hreflang="fr"/.test(smXml),
    'and each entry pairs its two locales',
  )
}

section('Regressions')
// `fonctions-logarithmiques` used to be a 684-line JSX page. Its content is
// markdown now, and the URL still resolves — through the document pipeline.
const migrated = await get(`${BASE}/courses/fonctions-logarithmiques`)
const migratedHtml = await migrated.text()
ok(
  migrated.ok && migratedHtml.includes('Chapitre 5'),
  'the migrated course keeps its URL and is served from markdown',
)
ok(
  migratedHtml.includes(messages.course.youAreHere),
  'and gets the path treatment like every other chapter',
)
// Derived, not hardcoded: a chapter that has no markdown yet. Naming one
// meant the check broke the day that chapter got written.
const authored = new Set(listCourses().map((c) => c.slug))
const pending = CHAPTERS_SX.map((c) => c.slug).find((slug) => !authored.has(slug))
const unknown = await fetch(`${BASE}/courses/${pending}`)
ok(
  unknown.ok && (await unknown.text()).includes('Cours en développement'),
  'a slug with no document still falls back to "coming soon"',
  pending,
)
const catalog = await get(`${BASE}/courses`)
ok(
  (await catalog.text()).includes(`/courses/${SLUG}`),
  'the chapter is listed on /courses',
)

/* ---------------------------------------------------------------- */
/* 5. Arabic                                                         */
/* ---------------------------------------------------------------- */

section('Arabic (/ar)')
{
  // French stays unprefixed at `/`, so every URL that worked before still
  // works; Arabic gets its own shareable address rather than a cookie.
  const pairs = [
    ['/', '/ar'],
    ['/courses', '/ar/courses'],
    [`/courses/${SLUG}`, `/ar/courses/${SLUG}`],
    ['/home', '/ar/home'],
  ]
  const bad = []
  for (const [fr, ar] of pairs) {
    for (const u of [fr, ar]) {
      const r = await fetch(`${BASE}${u}`)
      if (!r.ok) bad.push(`${u} → ${r.status}`)
    }
  }
  ok(bad.length === 0, 'both locales serve every route', bad.join(', '))

  const arHtml = await (await fetch(`${BASE}/ar`)).text()
  const frHtml = await (await fetch(`${BASE}/`)).text()
  ok(/<html lang="ar-MA" dir="rtl"/.test(arHtml), 'the Arabic route is lang=ar-MA dir=rtl')
  ok(/<html lang="fr" dir="ltr"/.test(frHtml), 'the French route is lang=fr dir=ltr')

  // A fresh context per case: next-intl's middleware remembers the reader's
  // choice in a NEXT_LOCALE cookie, so a page that has seen /ar is redirected
  // there from the unprefixed URL. That is the intended behaviour, and it is
  // asserted below — but it means these cases cannot share a session.
  const fresh = async () => {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
    const pg = await ctx.newPage()
    pg.on('pageerror', (e) => arErrors.push(String(e)))
    pg.on('console', (m) => m.type() === 'error' && arErrors.push(m.text()))
    return { ctx, pg }
  }
  const arErrors = []

  {
    const { ctx, pg } = await fresh()
    await pg.goto(`${BASE}/ar`, { waitUntil: 'load' })
    await pg.waitForSelector(HYDRATED)
    await pg.waitForTimeout(300)
    const heroAr = await pg.getByRole('heading', { level: 1 }).innerText()
    ok(/[\u0600-\u06FF]/.test(heroAr), 'the hero is in Arabic', heroAr.replace(/\n/g, ' '))
    ok(
      await pg.getByRole('link', { name: /الفصل|تابع|معاينة/ }).first().isVisible(),
      'the parcours stations are in Arabic',
    )
    await ctx.close()
  }

  {
    // The switch must keep the reader on the page they are on, both ways.
    const { ctx, pg } = await fresh()
    await pg.goto(`${BASE}/courses/${SLUG}`, { waitUntil: 'load' })
    await pg.waitForSelector(HYDRATED)
    await pg.waitForTimeout(300)
    // The switcher carries an aria-label, which IS its accessible name — the
    // visible "العربية" / "Français" text does not name it.
    await pg.getByRole('link', { name: messages.lang.label }).first().click()
    await pg.waitForURL(`**/ar/courses/${SLUG}`, { timeout: 15000 })
    ok(true, 'the switcher stays on the same page')
    await pg.waitForSelector(HYDRATED)
    await pg.waitForTimeout(400)

    // The chrome is translated; the chapter itself stays as the pedagogue
    // wrote it, which is the point — the document is content, not UI copy.
    //
    // Assert on rendered TEXT, not `page.content()`: after a client-side
    // navigation the document still carries the previous page's RSC payload in
    // inline scripts, so the raw HTML reports French that is not on screen.
    const shown = await pg.locator('body').innerText()
    // The course landing is the path, whose job is ONE next action — so the
    // quiz CTA is not on it. Assert the chrome that view actually renders.
    const missing = [
      messagesAr.course.back,
      messagesAr.course.progressTitle,
      messagesAr.course.youAreHere,
    ].filter((v) => !shown.includes(v))
    ok(missing.length === 0, 'the course chrome is in Arabic', missing.join(' | '))
    ok(
      !shown.includes(messages.course.progressTitle) &&
        !shown.includes(messages.course.back),
      'no French chrome is on screen on the Arabic route',
    )

    // The document keeps its own direction: a French chapter inside the
    // Arabic route must not be laid out RTL, or its punctuation and inline
    // subscripts land on the wrong side. Checked in the reader — the course
    // landing is the path, which carries no document.
    await pg.goto(`${BASE}/ar/courses/${SLUG}?s=${doc.views[0].id}`, {
      waitUntil: 'load',
    })
    await pg.waitForSelector(HYDRATED)
    await pg.waitForTimeout(300)
    ok(
      (await pg.locator('.course-doc').first().getAttribute('dir')) === 'ltr',
      'the French chapter stays LTR on the Arabic route',
    )

    await pg.getByRole('link', { name: messagesAr.lang.label }).first().click()
    await pg.waitForURL(`**/courses/${SLUG}`, { timeout: 15000 })
    ok(true, 'switching back returns to the French URL')
    await ctx.close()
  }

  {
    // Choosing Arabic sticks: the unprefixed URL follows the reader's choice
    // rather than dropping them back into French.
    const { ctx, pg } = await fresh()
    await pg.goto(`${BASE}/ar`, { waitUntil: 'load' })
    await pg.waitForSelector(HYDRATED)
    await pg.goto(`${BASE}/courses`, { waitUntil: 'load' })
    ok(
      new URL(pg.url()).pathname === '/ar/courses',
      'the chosen locale is remembered across visits',
      new URL(pg.url()).pathname,
    )
    await ctx.close()
  }

  ok(arErrors.length === 0, 'no console errors on the Arabic route', arErrors.slice(0, 2).join(' | '))
}

await browser.close()
console.log(`\n${failures === 0 ? '✓ all checks passed' : `✗ ${failures} check(s) failed`}`)
process.exit(failures === 0 ? 0 : 1)
