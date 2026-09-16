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
 * scripted; signing in for real would also make every check in this file depend
 * on a remote service being reachable. `proxy.ts` therefore honours a `zb-e2e`
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
let checks = 0
const ok = (pass, label, detail = '') => {
  checks++
  if (!pass) failures++
  console.log(`  ${pass ? '✓' : '✗'} ${label}${detail ? `  ${detail}` : ''}`)
}
const section = (t) => console.log(`\n${t}`)

/**
 * Fetch as a signed-in reader, and do NOT follow the gate's redirect.
 *
 * Both halves matter. A bare `fetch` of a gated path is answered by `proxy.ts`
 * with a 307 to `/signin`, fetch follows it, and `/signin` answers 200 — so
 * `fetch('/totally-made-up-gated-route')` came back `ok: true`. Three checks
 * were built on that: the hero and nav targets, `/ar/progres`, and "both
 * locales serve every route". None of them could fail, for any route, ever.
 *
 * `redirect: 'manual'` is the second half: with the cookie a gated route
 * answers 200 directly, so a 3xx now means the gate turned us away and a 404
 * means the route is not there — both of which are the failure being looked
 * for rather than something to follow.
 */
const COOKIE = sessionCookieHeader()
const get = (u, o = {}) =>
  fetch(u, { redirect: 'manual', ...o, headers: { cookie: COOKIE, ...(o.headers ?? {}) } })

/**
 * A hydration mismatch, seen from a PRODUCTION build.
 *
 * This suite runs against `npm run build && npm start`, and React 19.2 strips
 * its error text out of the production bundle: "Hydration failed because…"
 * appears zero times in `react-dom`'s production build and zero times in
 * `.next/static/chunks`. What it actually logs is
 *
 *   Error: Minified React error #418; visit https://react.dev/errors/418…
 *
 * so a filter for `/hydrat|did ?n.t match/i` matched nothing and could not
 * fire — and it is the ONLY guard on "never read device state during render",
 * the trap CLAUDE.md names. 418 is a text mismatch, 423 a recoverable error
 * during hydration, 425 a text-content difference; the dev spellings stay for
 * anyone running this against `next dev`.
 */
const isHydrationError = (text) =>
  /minified react error #?\s*(418|423|425)\b|react\.dev\/errors\/(418|423|425)\b|hydrat|did ?n.t match/i.test(
    String(text),
  )

/**
 * Wait for a navigation and report it as ONE check.
 *
 * `await page.waitForURL(...)` followed by `ok(true, 'it navigated')` prints a
 * ✓ for something never evaluated, and when the navigation does not happen the
 * throw is an unhandled rejection: the run dies mid-file, every later check
 * goes with it, and `✗ N check(s) failed` is never printed at all. A failure
 * has to be one red line among many.
 */
const arrived = async (p, pattern, label, detail = '') => {
  try {
    await p.waitForURL(pattern, { timeout: 15000 })
    ok(true, label, detail)
  } catch {
    ok(false, label, `never got there — still at ${p.url().replace(BASE, '')}`)
  }
}

/**
 * How many elements match, and whether the one that matches is on screen.
 *
 * `!(await x.isVisible().catch(() => false))` is true when the element is
 * hidden AND when it is not in the page at all — so three "must be hidden"
 * assertions passed on a header that had failed to render. Worse, the `.catch`
 * swallowed Playwright's strict-mode violation, which is what a DUPLICATE
 * looks like: two dialogs read as "fires once".
 */
const visibility = async (locator) => {
  const n = await locator.count()
  return { n, visible: n === 1 && (await locator.first().isVisible()) }
}

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
// session cookie explicitly — `get()` at the top of this file carries it.
// Without it every request follows the gate's redirect to /signin and returns a
// perfectly valid 200 with no maths on it.
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
/**
 * Raw markdown must not reach the browser — in either spelling.
 *
 * The needle was a literal 80-character slice of the chapter, which contains a
 * real newline. The regression that ships markdown to the client ships it
 * through an RSC prop, where it is JSON-encoded and that newline is the two
 * characters `\` and `n`. The needle could not match that form, so the check
 * could only ever catch markdown pasted into the HTML verbatim — which is not
 * how it would arrive.
 */
{
  const needle = heavy.body.slice(0, 80)
  const asProp = JSON.stringify(needle).slice(1, -1)
  const found = [
    ['verbatim', needle],
    ['JSON-escaped in an RSC payload', asProp],
  ].filter(([, n]) => html.includes(n))
  ok(
    found.length === 0,
    'raw markdown is not shipped to the client',
    found.map(([how]) => how).join(', '),
  )
}

/* ---------------------------------------------------------------- */
/* 3. The browser: layout, gates, persistence                        */
/* ---------------------------------------------------------------- */

// System Chrome locally, Playwright's own chromium in CI where there is no
// branded install to find.
const browser = await chromium.launch(
  process.env.CI ? {} : { channel: 'chrome' },
)

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
await arrived(
  page,
  `**/courses/${SLUG}?s=${secondTab.viewIds[0]}`,
  `tab "${secondTab.label}" opens its first section`,
)

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
// Asserted WITH its replacement. On its own, "the text nav is not visible" is
// satisfied by a header that failed to render at all — `.catch(() => false)`
// answered false for "hidden", for "absent", and for "two of them", which is
// three different states reported as one pass.
{
  const nav = await visibility(headerNav)
  const burger = await visibility(page.getByRole('button', { name: /Ouvrir le menu/i }))
  ok(
    !nav.visible && burger.n === 1 && burger.visible,
    '390px: the text nav gives way to a hamburger that is really there',
    `nav ×${nav.n} visible=${nav.visible} · hamburger ×${burger.n} visible=${burger.visible}`,
  )
}
await page.getByRole('button', { name: /Ouvrir le menu/i }).click()
await page.getByRole('dialog').getByRole('link', { name: NAV_COURSES }).click()
await arrived(page, '**/courses', '390px: the hamburger menu navigates')

// Mantine's own display rule outranks Tailwind's `hidden` at equal
// specificity, so this pairing is worth pinning down.
const wide = await browser.newPage({ viewport: { width: 1280, height: 800 } })
await wide.goto(`${BASE}/home`, { waitUntil: 'load' })
await settle(wide)
{
  const nav = await visibility(wide.locator('header').getByRole('link', { name: NAV_COURSES }))
  const burger = await visibility(wide.getByRole('button', { name: /Ouvrir le menu/i }))
  ok(nav.n === 1 && nav.visible, '1280px: the text nav is visible', `×${nav.n}`)
  ok(
    !burger.visible && nav.n === 1 && nav.visible,
    '1280px: the hamburger gives way to the text nav, which is really there',
    `hamburger ×${burger.n} visible=${burger.visible}`,
  )
}
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
        [messages.nav.quiz, '/quiz'],
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
  // Every one of these is behind the gate except `/` and `/demarrer`, so a bare
  // `fetch` was answered with a 307 to `/signin`, followed it, and reported the
  // sign-in page's 200 as the target's. `/totally-made-up-gated-route` came
  // back ok. And the verdict was `ok(true, …)` — a ✓ printed for a loop whose
  // result nothing looked at.
  const dead = []
  for (const [name, [href]] of Object.entries(links)) {
    const res = await get(`${BASE}${href}`)
    if (res.status !== 200) dead.push(`${name} → ${href} HTTP ${res.status}`)
  }
  ok(dead.length === 0, 'every hero and nav target returns 200', dead.join(', '))

  /**
   * The interactive problem is the page's own claim about how it teaches.
   *
   * DELIBERATE EXCEPTION to "no auto-graded mathematics", and the only one. The
   * two assertions below check that the landing preview DOES tell the reader
   * which answer is right — which is the opposite of what `/quiz/<slug>` and
   * the checkpoints are allowed to do, and it is not an oversight. It is one
   * hand-authored illustration of how the product teaches, written by the
   * pedagogue (`preview.correct` / `preview.wrong`); it is not a chapter,
   * nothing about it is stored, counted or compared, and no answer is
   * generated. `scripts/prod-check.mjs` excludes `components/landing/` from its
   * structural grading check for this reason and no other.
   *
   * So: do not "fix" these two by making them assert the absence of feedback.
   */
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

  // Arabic route serves the same page. Cookie-carrying and not redirect-
  // following: `/ar/progres` is gated, so a bare fetch reported the sign-in
  // page's 200 and would have said `ok` for a route that does not exist.
  const arRes = await get(`${BASE}/ar/progres`)
  ok(arRes.status === 200, 'the dashboard serves on the Arabic route too', `HTTP ${arRes.status}`)

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
      lastUpdated: new Date().toISOString(),
      timeSpent: 0,
    }
    localStorage.setItem('zabaqist_course_progress', JSON.stringify(all))
  }, doc.views.map((v) => v.id))

  await pg.goto(`${BASE}/courses/${SLUG}`, { waitUntil: 'load' })
  await settle()
  // Counted, not asked. Two dialogs is a real regression and `isVisible()` on a
  // locator that matches two throws a strict-mode violation — which the paired
  // check below swallowed with `.catch(() => false)` and read as "fires once".
  {
    const dlg = await visibility(pg.getByRole('dialog'))
    ok(dlg.n === 1 && dlg.visible, 'finishing the chapter is celebrated', `×${dlg.n}`)
  }
  // `.first()`, now that the count above has established there is exactly one.
  // `innerText()` on a locator matching two throws a strict-mode violation, and
  // an uncaught throw here ends the whole run — every later check goes with it
  // and the failure count is never printed. See `arrived` at the top.
  const dialogText = await pg.getByRole('dialog').first().innerText()
  const total = doc.views.reduce((n, v) => n + v.xp, 0)
  ok(
    dialogText.includes(String(total)),
    'the celebration pays the total the course card advertises',
    String(total),
  )
  ok(
    !/premium|essai gratuit|abonn/i.test(dialogText),
    'no monetisation in the celebration',
  )
  await pg.getByRole('button', { name: new RegExp(c.doneCta) }).first().click()
  await pg.goto(`${BASE}/courses/${SLUG}`, { waitUntil: 'load' })
  await settle()
  {
    const again = await pg.getByRole('dialog').count()
    ok(again === 0, 'it fires once, not on every visit', `${again} dialog(s) on the second visit`)
  }

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
  //
  // `:has(div)` names the BAR rather than "any decorative div in the header".
  // The bar is a wrapper around its segments; without the qualifier this also
  // counted the empty spacer that holds the back chevron's place on step one,
  // and the check failed on a change that had nothing to do with progress.
  const bar = 'header div[aria-hidden]:has(div)'
  ok((await pg.locator(bar).count()) === 0, 'the welcome step shows no progress bar')
  ok(
    (await pg.locator('footer').count()) === 0,
    'the funnel ships no footer — every exit is removed',
  )
  await cont().click()
  await pg.waitForTimeout(400)

  ok(await cont().isDisabled(), 'Continue is disabled until the question is answered')
  ok(
    (await pg.locator(bar).count()) > 0,
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
  // Leaving `programme` lands on the reveal: the daily-goal question that used
  // to sit between them is out for now (see STEPS in lib/onboarding.ts), and
  // `completedAt` moved here with it.
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
  await arrived(pg, '**/home', 'choosing a filière lands on the dashboard')

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
  await arrived(pg, '**/home', 'switching filière lands on the dashboard too')
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
  await arrived(pg, '**/home', 'an off-site `next` still lands on the dashboard')
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

  // An uninvited account is the commonest way to arrive here during the beta,
  // and it must not be a dead end: the waitlist is that reader's next step.
  await pg.goto(`${BASE}/signin?error=not-allowed`, { waitUntil: 'load' })
  await pg.waitForSelector(HYDRATED)
  const waitlist = pg.getByRole('link', {
    name: new RegExp(`${messages.auth.notAllowedCta}|${messagesAr.auth.notAllowedCta}`),
  })
  ok(await waitlist.isVisible(), 'an uninvited account is offered the waitlist')
  ok(
    (await waitlist.getAttribute('href')) === 'https://www.zabaqist.com/#waitlist',
    'which points at the marketing site\'s form, not a second one to build',
    (await waitlist.getAttribute('href')) ?? 'missing',
  )
  ok(
    await pg.getByRole('button', { name: new RegExp(messages.auth.google) }).isVisible(),
    'and Google stays available, since the usual cause is the wrong account',
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
  await arrived(pg, '**/demarrer**', 'signing in with no filière opens the funnel')

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

  // Signing out really ends it — by clicking the button, not by clearing
  // cookies from the test. The action drops the e2e bypass alongside the
  // Supabase session precisely so this can be exercised for real.
  await pg.getByRole('menuitem', { name: either('signOut') }).click()
  await arrived(pg, /\/(ar)?$/, 'signing out returns to a public page')
  ok(
    at() === '/',
    'signing out lands back on the landing page',
    pg.url().replace(BASE, ''),
  )

  await pg.goto(`${BASE}/home`, { waitUntil: 'load' })
  ok(
    at() === '/signin',
    'and the dashboard is closed again afterwards',
    pg.url().replace(BASE, ''),
  )

  // The bypass cookie is gone, not merely ignored.
  const left = (await ctx.cookies()).filter((c) => c.name === 'zb-e2e')
  ok(left.length === 0, 'and the session cookie is actually cleared')
  await ctx.close()
}

section('Home page')
// The dashboard opens on one dominant panel: the chapter to continue, its plan,
// and a single button. It replaced a resume card, a premium banner claiming
// "6x more likely", and six recommended chapters that did not exist.
const home = await browser.newPage({ viewport: { width: 1280, height: 1000 } })
await home.goto(`${BASE}/home`, { waitUntil: 'load' })
await home.waitForSelector(HYDRATED)
await home.waitForTimeout(500)

const startCta = home.getByRole('link', { name: messages.dashboard.continueStart })
ok(await startCta.isVisible(), 'fresh device: the panel offers to start chapter 1')
ok(
  (await startCta.getAttribute('href')) === `/courses/${SLUG}`,
  'and starting opens the chapter path, not a section',
  await startCta.getAttribute('href'),
)
ok(
  (await home.locator(`a[href^="/courses/${SLUG}?s="]`).count()) >= 5,
  "the chapter's own plan is listed, each part linked",
)

// After reading, the panel must resume at the next unread part.
const resumeAt = doc.views[3]
await home.goto(url(resumeAt.id), { waitUntil: 'load' })
await home.waitForSelector(HYDRATED)
await home.waitForTimeout(400)
await home.goto(`${BASE}/home`, { waitUntil: 'load' })
await home.waitForSelector(HYDRATED)
await home.waitForTimeout(500)

const resume = home.getByRole('link', { name: /Reprendre/ })
ok(await resume.isVisible(), 'after reading, the panel offers to resume')
ok(
  (await resume.getAttribute('href'))?.startsWith(`/courses/${SLUG}?s=`),
  'and resuming goes straight to a section',
  await resume.getAttribute('href'),
)
// `\d+%` accepted `0%` — which IS the placeholder this check is named after.
// A section has just been read above, so the figure has to have moved.
const pct = await home.locator('text=/%/').first().innerText()
ok(
  /[1-9]\d*%/.test(pct),
  'it shows real progress, not a placeholder',
  pct,
)

// Nothing fabricated survives on this page.
const homeText = await home.locator('body').innerText()
ok(
  !/Hydrogen League|6x more likely|Matrices et D/.test(homeText),
  'no invented league, claim or chapter is left on the dashboard',
)
ok(
  await home.getByRole('link', { name: new RegExp(doc.meta.title, 'i') }).first().isVisible(),
  'the chapter is still reachable from the programme grid',
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

  // The dashboard tiles read progress from localStorage, which the server does
  // not have. Computing it during render made the server send
  // `aria-valuenow="0"` while the browser's first render said 18, and React
  // threw away the server markup for that whole tree. The zero state has to be
  // what both sides render; the real figures arrive in an effect.
  {
    const ctx = await browser.newContext({ storageState: AUTH_STATE })
    const hp = await ctx.newPage()
    const bad = []
    hp.on('pageerror', (e) => bad.push(String(e)))
    hp.on('console', (m) => m.type() === 'error' && bad.push(m.text()))

    await hp.goto(`${BASE}/home`, { waitUntil: 'networkidle' })
    await hp.evaluate(() =>
      localStorage.setItem(
        'zabaqist:filiere',
        JSON.stringify({ filiere: 'sm', track: '2bac-sm-a' }),
      ),
    )
    // Progress has to be non-zero, or the zero state matches by accident.
    const first = docs.get(all[0].slug).views[0].id
    await hp.goto(`${BASE}/courses/${all[0].slug}?s=${first}`, { waitUntil: 'networkidle' })

    bad.length = 0
    await hp.goto(`${BASE}/home`, { waitUntil: 'networkidle' })
    await hp.waitForTimeout(900)

    // `isHydrationError` — see the top of this file. The filter used to be
    // `/hydrat|did ?n.t match/i`, which is the DEVELOPMENT text; this suite runs
    // a production build, where React 19.2 emits "Minified React error #418"
    // instead. Verified against this very build: an injected text mismatch logs
    // `Error: Minified React error #418; visit https://react.dev/errors/418…`,
    // which the old filter matched zero times.
    const hydration = bad.filter(isHydrationError)
    ok(hydration.length === 0, 'the dashboard hydrates without a mismatch',
      hydration[0]?.slice(0, 120) ?? '')
    const bars = await hp
      .locator('[role="progressbar"]')
      .evaluateAll((els) => els.map((e) => e.getAttribute('aria-valuenow')))
    ok(bars.length > 0, 'and still draws its progress bars', `${bars.length} bars`)
    ok(bars.some((v) => v !== '0'), 'showing the progress this device recorded')
    await ctx.close()
  }

  // The premium page was the last of the Brilliant scaffolding, and every claim
  // on it was invented: a testimonial attributed to the Ministère de
  // l'Éducation, "Plus de 10,000 avis 5 étoiles" for a closed beta with two
  // invited addresses, and a chapter list that named chapters not in the
  // programme. None of that is fixed by translating it.
  {
    const fr = JSON.parse(readFileSync(new URL('../messages/fr.json', import.meta.url), 'utf8'))
    const arM = JSON.parse(readFileSync(new URL('../messages/ar.json', import.meta.url), 'utf8'))
    const html = await (await get(`${BASE}/subscribe`)).text()
    const invented = [
      "Ministère de l'Éducation",
      '10,000 avis',
      'Développements Limités',
      'brilliant.org',
    ].filter((x) => html.includes(x))
    ok(invented.length === 0, 'the premium page claims nothing invented', invented.join(', '))

    // Its chapter list is the catalogue's, so it cannot drift from the
    // programme the way a typed-in list did.
    const missing = all.filter((c) => !html.includes(c.title))
    ok(missing.length === 0, 'and lists the real programme', missing.map((c) => c.slug).join(', '))

    // There is no checkout anywhere in this repository, so the button must not
    // imply one. It used to read "S'abonner maintenant" with no handler at all.
    ok(
      html.includes('zabaqist.com/#waitlist') && !/S'abonner maintenant/.test(html),
      'and its call to action goes where something actually happens',
    )

    // Rendered, not grepped. Every string of `ar.json` is in the HTML of every
    // page — `/ar/quiz/does-not-exist` returns 404 and still contains
    // `ar.premium.heroTitle` — so `html.includes(...)` proved nothing about
    // this page at all.
    const sp = await browser.newPage({ viewport: { width: 1100, height: 1000 } })
    await sp.goto(`${BASE}/ar/subscribe`, { waitUntil: 'load' })
    await sp.waitForSelector(HYDRATED, { timeout: 30000 })
    await sp.waitForTimeout(250)
    const arHero = await visibility(sp.getByRole('heading', { name: arM.premium.heroTitle }))
    ok(arHero.visible, 'and the premium page speaks Arabic', `×${arHero.n}`)
    const onScreen = await sp.locator('body').innerText()
    ok(!onScreen.includes(fr.premium.heroTitle), 'with no French left on the Arabic route')
    await sp.close()
  }

  // `/quiz` is the index above the per-chapter self-assessments: every
  // capability the programme asks for, with the reader's own gaps first.
  {
    const fr = JSON.parse(readFileSync(new URL('../messages/fr.json', import.meta.url), 'utf8'))
    const arMsg = JSON.parse(readFileSync(new URL('../messages/ar.json', import.meta.url), 'utf8'))
    const ctx = await browser.newContext({ storageState: AUTH_STATE })
    const rp = await ctx.newPage()

    await rp.goto(`${BASE}/quiz`, { waitUntil: 'networkidle' })
    ok(
      (await rp.locator('h1').textContent())?.trim() === fr.revision.title,
      'the revision plan renders',
    )
    // A reader who has judged nothing has no gaps. Ranking chapters they never
    // opened would invent a weakness.
    // Before anything is judged the page shows the programme, never a gap
    // section: ranking chapters the reader never opened would invent one.
    ok(
      (await rp.locator('h2').first().textContent())?.trim() === fr.revision.mapTitle,
      'and claims no gap before anything has been judged',
    )
    // `/quiz` and `/quiz/<slug>` sit outside `(with-header)`, so there is no
    // site header and the browser's own button was the only way out. Both must
    // carry their own exit, and the plan's must be in the server HTML: it would
    // otherwise wait for hydration along with everything else on the page.
    ok(
      /href="\/home"/.test(await (await get(`${BASE}/quiz`)).text()),
      'the plan offers a way back before it has read the device',
    )
    ok(
      await rp.locator('a[href="/home"]').first().isVisible(),
      'and it names where it goes',
    )
    {
      const chk = await (await get(`${BASE}/quiz/${all[0].slug}`)).text()
      ok(
        chk.includes(`href="/courses/${all[0].slug}"`),
        'a chapter self-assessment leads back to its own chapter',
      )
    }

    // Every capability gets its own mark, so the strip is the programme.
    const marks = await rp.locator('a[href*="/quiz/"] svg').count()
    ok(marks >= 84, 'and draws one mark per capability', `${marks} marks`)
    // Every chapter must be reachable from it, or it is a plan for part of the
    // programme rather than for the programme.
    const hrefs = await rp.locator('a[href*="/quiz/"]').evaluateAll((as) =>
      as.map((a) => a.getAttribute('href')),
    )
    const missing = all.filter((c) => !hrefs.some((h) => h?.endsWith(`/quiz/${c.slug}`)))
    ok(missing.length === 0, 'and links to all thirteen chapters', missing.map((c) => c.slug).join(', '))

    // Answer one chapter badly and the plan must name it.
    await rp.goto(`${BASE}/quiz/${all[0].slug}`, { waitUntil: 'networkidle' })
    const items = await rp.locator('ol > li').count()
    for (let i = 0; i < items; i++)
      await rp.locator('ol > li').nth(i).locator('button').nth(i === 0 ? 2 : 0).click()
    await rp.goto(`${BASE}/quiz`, { waitUntil: 'networkidle' })
    ok(
      (await rp.locator('h2').first().textContent())?.trim() === fr.revision.gapsTitle,
      'a declared gap reaches the plan',
    )
    ok(
      await rp.locator('ol > li').first().getByText(all[0].title).isVisible(),
      'and names the chapter it came from',
    )

    await rp.goto(`${BASE}/ar/quiz`, { waitUntil: 'networkidle' })
    ok(
      (await rp.locator('h1').textContent())?.trim() === arMsg.revision.title,
      'and the plan speaks Arabic on the Arabic route',
    )
    await ctx.close()
  }

  // The self-assessment a chapter links to must be its OWN. Both CTAs on the
  // course page were hardcoded to `/quiz/1` — "the first chapter of the
  // catalogue" — so every chapter but Limites sent the reader to the wrong
  // self-assessment, and Limites only looked right by coincidence.
  /**
   * The loop iterated the links FOUND on the page. Delete the feature and there
   * are no links, so there are no iterations, so `wrong` is empty and the check
   * passes — the strongest possible regression reads as a ✓. "Every quiz link
   * names this chapter" is only half the property; the other half is that there
   * is one.
   *
   * Its companion counted links on `all[0]` alone, so chapters 2 to 13 were
   * uncovered by it entirely. Both halves are folded into this one pass, over
   * every chapter's FIRST and LAST section.
   */
  {
    const links = (html) =>
      [...html.matchAll(/href="([^"]*\/quiz\/[^"]+)"/g)].map((m) => m[1]).filter((h) => !/\/quiz\/$/.test(h))
    const wrong = []
    const absent = []
    const header = []
    const endCard = []
    const fr = JSON.parse(readFileSync(new URL('../messages/fr.json', import.meta.url), 'utf8'))
    for (const c of all) {
      const views = docs.get(c.slug).views
      const first = await (await get(`${BASE}/courses/${c.slug}?s=${views[0].id}`)).text()
      const last = await (await get(`${BASE}/courses/${c.slug}?s=${views[views.length - 1].id}`)).text()
      for (const [html, where] of [[first, 'first'], [last, 'last']]) {
        const hrefs = links(html)
        if (hrefs.length === 0) absent.push(`${c.slug}/${where}`)
        for (const h of hrefs)
          if (!h.endsWith(`/quiz/${c.slug}`)) wrong.push(`${c.slug}/${where} -> ${h}`)
      }
      // Counted per chapter, not just for the first one: the end-of-chapter
      // invitation used to render under EVERY section, so the intro offered to
      // check what the reader knew before they had read a word.
      const mine = (html) => (html.match(new RegExp(`href="/quiz/${c.slug}"`, 'g')) ?? []).length
      if (mine(first) !== 1) header.push(`${c.slug}:${mine(first)}`)
      if (mine(last) !== 2) endCard.push(`${c.slug}:${mine(last)}`)
    }
    ok(absent.length === 0, 'every chapter offers its self-assessment at all',
      `${absent.length} page(s) carry no quiz link: ${absent.slice(0, 3).join(', ')}`)
    ok(wrong.length === 0, 'every chapter links to its own self-assessment', wrong.slice(0, 3).join(', '))
    ok(header.length === 0,
      'the first section offers the self-assessment once, in the header',
      header.slice(0, 3).join(', '))
    ok(endCard.length === 0,
      'and the last adds the end-of-chapter card',
      endCard.slice(0, 3).join(', '))
    // It must not promise a mark: nothing on the self-assessment is graded.
    ok(
      !/score|note\b|Quiz/i.test(fr.course.ctaBody + fr.course.ctaTitle + fr.course.ctaButton),
      'and it promises no score, because nothing is graded',
    )
  }

  // Every chapter must have a self-assessment: /quiz/<slug> is built from the
  // pedagogue's own `## Auto-évaluation`, and a chapter without one has a quiz
  // page with nothing on it.
  const noChecklist = all.filter((c) => (docs.get(c.slug).checklist ?? []).length === 0)
  ok(
    noChecklist.length === 0,
    'every chapter has an authored self-assessment',
    noChecklist.map((c) => c.slug).join(', '),
  )
  ok(
    all.every((c) => docs.get(c.slug).checklist.length >= 5),
    'each with at least five items',
    all
      .filter((c) => docs.get(c.slug).checklist.length < 5)
      .map((c) => `${c.slug}:${docs.get(c.slug).checklist.length}`)
      .join(', '),
  )

  /**
   * `critique/course/` is where the chapters are authored and `content/course/`
   * is what the app reads. Both are committed, so a chapter edited in one and
   * not the other drifts silently — the site would keep serving the stale copy.
   *
   * The comparison ran one way only: it iterated `critique/`, so a file that
   * exists ONLY in `content/` was never compared to anything. That is correct
   * for exactly one file and silent for any other — and "anything you put in
   * content/" is not an exception, it is a hole. So the exception is named.
   *
   * `04-fonctions-logarithmiques.md` was migrated from a 684-line JSX page and
   * has no authored original; see CLAUDE.md. If it ever gains one, the first
   * loop starts comparing it and this list should lose it.
   */
  const MIGRATED_ONLY = ['04-fonctions-logarithmiques.md']
  const authoredDir = new URL('../critique/course/', import.meta.url)
  const servedDir = new URL('../content/course/', import.meta.url)
  const mdIn = (dir) => readdirSync(dir).filter((f) => f.endsWith('.md'))
  const authoredMd = mdIn(authoredDir)
  const servedMd = mdIn(servedDir)
  const stale = authoredMd.filter((f) => {
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
  const unauthored = servedMd.filter(
    (f) => !authoredMd.includes(f) && !MIGRATED_ONLY.includes(f),
  )
  ok(
    unauthored.length === 0,
    'and carries no chapter critique/course/ has never seen',
    `${unauthored.join(', ')} — edit the source, not the served copy: the next sync deletes work done here`,
  )
  const goneExceptions = MIGRATED_ONLY.filter((f) => !servedMd.includes(f))
  ok(
    goneExceptions.length === 0,
    'and the one documented exception is still the one',
    goneExceptions.join(', '),
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
    for (const u of [
      `${BASE}/courses/${c.slug}`,
      `${BASE}/courses/${c.slug}?s=${first}`,
      `${BASE}/quiz/${c.slug}`,
    ]) {
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
  // Case-INSENSITIVE, and that is the point of the check rather than a
  // convenience. `innerText` returns text as rendered, and the branch headings
  // are `text-transform: uppercase` — so they read "ANALYSE" / "ALGÈBRE" here,
  // never the title case this compared against. It passed anyway, because the
  // page also carried a hardcoded placeholder grid whose invented categories
  // happened to include the words "Analyse" and "Algèbre" in title case. The
  // assertion was green off the fiction and blind to the real catalogue; when
  // the placeholder was removed (see courses/page.tsx) it went red while the
  // thing it describes had never stopped working.
  const cat = catalogue.toLocaleLowerCase('fr')
  ok(
    cat.includes('analyse') && cat.includes('algèbre'),
    'the catalogue shows both branches for SM',
  )
  ok(
    listCourses('sm').every((c) => catalogue.includes(c.title)),
    'and lists all thirteen SM chapters',
    listCourses('sm').filter((c) => !catalogue.includes(c.title)).map((c) => c.slug).join(', '),
  )
  await pg.close()
}

section('404')
{
  // The joke is the curriculum: chapter 1 is "Limites et continuité", and a
  // missing page is that chapter's opening object. These checks exist because
  // the page silently did not render at first — an unmatched URL never enters
  // the [locale] tree, so Next served its own black 404 and the branded one was
  // unreachable. A catch-all route is what routes it there.
  const pg = await browser.newPage({ viewport: { width: 900, height: 1000 } })

  for (const [path, label] of [
    ['/nope', 'French'],
    ['/ar/nope', 'Arabic'],
  ]) {
    const res = await pg.goto(`${BASE}${path}`, { waitUntil: 'load' })
    ok(res.status() === 404, `${label}: a missing page really answers 404`, `HTTP ${res.status()}`)
  }

  await pg.goto(`${BASE}/nope`, { waitUntil: 'load' })
  const html = await pg.content()
  ok(
    /class="katex/.test(html),
    'the limits are set in real notation, server-rendered',
  )
  ok(
    (await pg.locator('svg circle[fill*="cream"], svg circle').count()) >= 2,
    'the discontinuity is drawn with two hollow circles',
  )
  ok(
    await pg.getByRole('heading', { level: 1 }).isVisible(),
    'and it is the branded page, not the default black one',
    (await pg.getByRole('heading', { level: 1 }).innerText()).slice(0, 40),
  )
  // Either language: visiting /ar above makes the locale sticky, so pinning the
  // French label here would be testing the cookie rather than the link.
  ok(
    await pg
      .getByRole('link', {
        name: new RegExp(
          `${messages.notFound.revise}|${messagesAr.notFound.revise}`,
        ),
      })
      .isVisible(),
    'it offers the chapter the joke is quoting',
  )

  // A catch-all is the lowest-priority match, but that is worth pinning: if it
  // ever shadowed a real route, every page in the app would become a 404.
  const real = await pg.goto(`${BASE}/courses/limites-et-continuite`, { waitUntil: 'load' })
  ok(real.status() === 200, 'and it shadows no real route', `HTTP ${real.status()}`)

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
  /**
   * The quiz is a chapter's own `## Auto-évaluation` now, so it is bilingual
   * for the same reason the chapters are.
   *
   * Asserted on RENDERED ELEMENTS, and that is the whole point of this block.
   * `<NextIntlClientProvider>` gets no `messages` prop, so the ENTIRE locale
   * bundle is serialised into every page: `/ar/quiz/does-not-exist` answers
   * HTTP 404 and its HTML still contains `ar.selfcheck.title` and
   * `ar.selfcheck.got`. `html.includes(<a message string>)` therefore cannot
   * fail — not for a missing component, not for a missing page.
   */
  const qp = await browser.newPage({ viewport: { width: 1000, height: 1100 } })
  await qp.goto(`${BASE}/ar/quiz/1`, { waitUntil: 'load' })
  await qp.waitForSelector(HYDRATED, { timeout: 30000 })
  await qp.waitForTimeout(300)
  {
    const title = await visibility(qp.getByRole('heading', { level: 1, name: ar.selfcheck.title }))
    const got = await qp.getByRole('button', { name: ar.selfcheck.got }).count()
    ok(title.visible && got >= 1, 'the self-assessment speaks Arabic',
      `title ×${title.n} visible=${title.visible} · "${ar.selfcheck.got}" ×${got}`)
  }
  {
    // `body`, not `main`: a page that failed to render has no `main`, and
    // `innerText()` on a missing locator throws rather than returning ''.
    const onScreen = await qp.locator('body').innerText()
    ok(
      !/Je sais faire|Pas encore/.test(onScreen),
      'and no French is left in it on the Arabic route',
    )
    /**
     * The chapters are authored in French and served on the Arabic route too,
     * so each item is Latin text inside an RTL page. Without an explicit
     * direction the bidi algorithm moves the full stop to the left of the
     * sentence — the rendered line read `.complexe et savoir passer de l'une à
     * l'autre`. The items carry the chapter's `contentDir`, the same field
     * `CourseDoc` reads.
     */
    const ltrItems = await qp.locator('ol > li [dir="ltr"]').count()
    ok(ltrItems >= 3, 'and its French items keep their own writing direction', `×${ltrItems}`)
    // The interface stays in the reader's language: `contentDir` must not leak
    // onto the chrome, or the whole page would flip back to LTR. Read the
    // COMPUTED direction of the rendered heading, not a regex over the source.
    const h1 = qp.getByRole('heading', { level: 1 })
    const dir =
      (await h1.count()) > 0
        ? await h1.first().evaluate((el) => getComputedStyle(el).direction)
        : 'no heading'
    ok(dir === 'rtl', 'while the interface around them stays Arabic', dir)
  }
  await qp.close()
}

section('Auth diagnostics')
{
  const fr = JSON.parse(
    readFileSync(new URL('../messages/fr.json', import.meta.url), 'utf8'),
  )
  // A check that FAILED is not a refusal. The callback used to treat
  // `checkError || !allowed` as one case, so an invited student whose lookup
  // errored was told they were "not yet invited" and pointed at the waitlist
  // they were already past.
  // Read the rendered alert, not the page source: next-intl ships the whole
  // `auth` namespace to the client, so every string in it is present in the
  // HTML whether or not anything displayed it.
  const alertText = (html) =>
    (/bg-zb-rose-soft[^>]*>([\s\S]*?)<\/(?:p|div)>/.exec(html)?.[1] ?? '')
      .replace(/<[^>]*>/g, '')
      .trim()

  const denied = await (await get(`${BASE}/signin?error=not-allowed`)).text()
  const failed = await (await get(`${BASE}/signin?error=check-failed`)).text()

  ok(alertText(denied) === fr.auth.notAllowed,
    'a refusal says the account is not invited', alertText(denied).slice(0, 60))
  ok(alertText(failed) === fr.auth.checkFailed,
    'a failed check says it is not a refusal', alertText(failed).slice(0, 60))
  ok(alertText(failed) !== fr.auth.notAllowed,
    'and never claims the account was refused')

  // The waitlist is the right next step for someone genuinely not invited, and
  // the wrong one for someone whose lookup merely timed out. That link is
  // rendered, not translated copy, so the raw HTML is the right place to look.
  ok(
    /href="[^"]*#waitlist"/.test(denied) && !/href="[^"]*#waitlist"/.test(failed),
    'only a real refusal offers the waitlist',
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

section('What this product refuses')
{
  /**
   * No ranking, league or leaderboard. Anywhere.
   *
   * This was asserted on `/progres` and nowhere else, plus a three-literal
   * blocklist on `/home` — so `/`, `/courses`, `/quiz`, the reader, `/subscribe`
   * and the whole Arabic side were never looked at. The regex was French-only
   * (`rang\b` does not match "ranking"), and it read `innerText`, which returns
   * text AS RENDERED and therefore skips anything `display: none` — a ranking
   * panel hidden behind a feature flag would not have been seen.
   *
   * So: every page, both languages, every text node whether or not it is
   * painted, plus the accessible names a screen reader would announce.
   *
   * `<script>` is excluded deliberately, and it is not a loophole — it is the
   * opposite. next-intl serialises the entire locale bundle into every page, so
   * reading script contents would find every string in `fr.json` on every route
   * and the check would fire for the copy that says this product does NOT rank.
   * The catalogues are checked directly, as text, by `scripts/prod-check.mjs`.
   */
  const RANKING =
    /(classements?|ligues?|league|leaderboards?|rankings?|\brangs?\b|palmar[eè]s|podium|top ?\d+|تصنيف|ترتيب|لوحة الصدارة|صدارة)/gi
  const DENIAL =
    /(sans|aucunes?|aucun|jamais|ni|pas|no|never|without|بدون|بلا|لا|دون|غير)(\s+(de|des|du|d['’]|la|le|les|such|any|a|of))?[\s'’"«»:,،-]*$/i

  /** Everything a reader could be told, painted or not. */
  const readableText = (pg) =>
    pg.evaluate(() => {
      const SKIP = new Set(['SCRIPT', 'STYLE', 'TEMPLATE', 'NOSCRIPT'])
      let out = ''
      const walk = (el) => {
        for (const n of el.childNodes) {
          if (n.nodeType === 3) out += `${n.nodeValue} `
          else if (n.nodeType === 1 && !SKIP.has(n.tagName)) {
            for (const a of ['aria-label', 'alt', 'title'])
              if (n.hasAttribute(a)) out += `${n.getAttribute(a)} `
            walk(n)
          }
        }
      }
      walk(document.body)
      return out
    })

  const slugs = listCourses().map((c) => c.slug)
  const routes = [
    '/', '/home', '/courses', '/progres', '/quiz', '/subscribe', '/demarrer', '/filiere',
    `/courses/${SLUG}`, `/courses/${SLUG}?s=${doc.views[0].id}`, `/quiz/${SLUG}`,
    `/courses/${slugs[slugs.length - 1]}`,
    '/ar', '/ar/home', '/ar/progres', '/ar/quiz', '/ar/subscribe', `/ar/courses/${SLUG}`,
  ]

  const rp = await browser.newPage({ viewport: { width: 1280, height: 1000 } })
  const ranked = []
  const unreachable = []
  for (const r of routes) {
    const res = await rp.goto(`${BASE}${r}`, { waitUntil: 'load' })
    if (!res || res.status() !== 200) {
      unreachable.push(`${r} → ${res?.status()}`)
      continue
    }
    await rp.waitForSelector(HYDRATED, { timeout: 30000 })
    await rp.waitForTimeout(150)
    const text = await readableText(rp)
    for (const m of text.matchAll(RANKING)) {
      const before = text.slice(Math.max(0, m.index - 28), m.index)
      if (!DENIAL.test(before)) ranked.push(`${r}: “…${before.trim().slice(-22)}${m[0]}…”`)
    }
  }
  await rp.close()
  ok(
    unreachable.length === 0,
    `all ${routes.length} pages answered, so they were all actually read`,
    unreachable.join(', '),
  )
  ok(
    ranked.length === 0,
    'no ranking, league or leaderboard on any page, in either language',
    ranked.slice(0, 3).join(' | '),
  )
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
  ok(robots.ok, 'robots.txt is served')

  /**
   * Three signals have to say the same thing, and they used to say three
   * different things: the canonical pointed at zabaqist.com ("do not index
   * me"), the sitemap listed app.zabaqist.com URLs ("index these"), and the
   * robots meta said `index, follow`. Google resolves that by guessing.
   *
   * `NEXT_PUBLIC_ALLOW_INDEXING=1` is the switch, and the half of this section
   * behind it had NEVER RUN. The flag was set nowhere — not in `ci.yml`'s env,
   * not in the `test:course` script, not by any developer — so four assertions
   * about the exact transition CLAUDE.md warns about had executed zero times
   * since they were written.
   *
   * Worse, `indexing` was read from THIS PROCESS's environment while the app
   * bakes `NEXT_PUBLIC_*` into the bundle at BUILD time. Setting the variable
   * at test time would not have flipped the app; it would have flipped the
   * expectations and produced a red run for the wrong reason.
   *
   * So the state is read off the APP, from the one signal that is always
   * present, and the environment is used only to check that the build under
   * test is the build this run meant to test. CI builds and runs both ways.
   */
  const homeHtml = await (await get(`${BASE}/`)).text()
  const robotsMeta = /<meta name="robots" content="([^"]+)"/.exec(homeHtml)?.[1] ?? ''
  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(homeHtml)?.[1] ?? ''

  const built = robotsMeta.startsWith('index')
    ? 'on'
    : robotsMeta.startsWith('noindex')
      ? 'off'
      : 'unknown'
  ok(built !== 'unknown', 'the app states an indexing posture at all',
    robotsMeta || 'no robots meta on /')
  const asked = process.env.NEXT_PUBLIC_ALLOW_INDEXING
  if (asked !== undefined) {
    ok(
      built === (asked === '1' ? 'on' : 'off'),
      `the build under test was made with NEXT_PUBLIC_ALLOW_INDEXING=${asked}`,
      `the app says indexing is ${built} — the flag is baked by \`next build\`,` +
        ' so setting it at test time changes nothing but these expectations',
    )
  }

  const sm = await fetch(`${BASE}/sitemap.xml`, { redirect: 'manual' })
  const smXml = await sm.text()

  /**
   * The sixth signal, and the one that lives below the HTML.
   *
   * next-intl publishes `Link: <…>; rel="alternate"; hreflang="…"` RESPONSE
   * HEADERS from the proxy, on every route, in both languages. Google honours
   * those exactly as it honours the tags in the head — so while the beta was
   * saying `noindex`, no sitemap, canonical at zabaqist.com, the same responses
   * were telling a crawler where the app's Arabic pages live. Nothing that
   * reads page source can see that, which is why it survived four other checks.
   */
  const altLinks = async (path) => {
    const r = await get(`${BASE}${path}`)
    return (r.headers.get('link') ?? '').includes('rel="alternate"')
  }

  if (built === 'on') {
    ok(/Sitemap:/.test(robotsTxt), 'robots.txt offers a sitemap when indexing is on')
    // Parsed as rules, not as a substring of the file. robots.txt matching is
    // literal PREFIX, and `localePrefix: 'as-needed'` puts the whole Arabic app
    // under `/ar` — so `Disallow: /home` does not cover `/ar/home`, and the
    // Arabic half of the private app was crawlable while the French half was
    // not. Both spellings have to be covered.
    const disallowed = robotsTxt
      .split('\n')
      .map((l) => /^\s*Disallow:\s*(\S*)\s*$/i.exec(l)?.[1])
      .filter((x) => x)
    const uncovered = [
      '/home', '/progres', '/demarrer', '/signin',
      '/ar/home', '/ar/progres', '/ar/demarrer', '/ar/signin',
    ].filter((p) => !disallowed.some((d) => p.startsWith(d)))
    ok(
      uncovered.length === 0,
      'the funnel, the private dashboard and auth are excluded from crawling, in BOTH languages',
      uncovered.join(', '),
    )
    ok(robotsMeta.startsWith('index'), 'and the robots meta agrees')
    ok(
      canonical.includes('app.zabaqist.com'),
      'and the canonical claims the app itself',
      canonical,
    )

    /**
     * A chapter has to name ITSELF.
     *
     * `generateMetadata` merges SHALLOWLY from the root layout down, so a page
     * that sets no `alternates` inherits the root's whole object — thirteen
     * chapters all emitting `<link rel="canonical" href=".../">`. Google
     * consolidates a set like that into the one URL they name and indexes none
     * of them. This is the check that could only ever have run on the launch
     * branch, which is the branch that had never run.
     */
    const drift = []
    for (const c of listCourses()) {
      const h = await (await get(`${BASE}/courses/${c.slug}`)).text()
      const can = /<link rel="canonical" href="([^"]+)"/.exec(h)?.[1] ?? ''
      if (!can.endsWith(`/courses/${c.slug}`)) drift.push(`${c.slug} → ${can || 'none'}`)
    }
    ok(
      drift.length === 0,
      "and every chapter's canonical names that chapter, not the homepage",
      drift.slice(0, 3).join(', '),
    )

    ok(sm.status === 200 && smXml.includes('<urlset'), 'sitemap.xml is served', `HTTP ${sm.status}`)
    // The chapters used to be listed here. They are gated — Zabaqist is a
    // closed beta — so a crawler asking for one got a 307 to `/signin`, which
    // robots.txt disallows: fourteen of fifteen entries were URLs the sitemap
    // asked Google to fetch and Google then excluded as "Page with redirect".
    const gated = listCourses().filter((c) => smXml.includes(`/courses/${c.slug}`))
    ok(gated.length === 0, 'the sitemap offers no page the app will refuse',
      gated.map((c) => c.slug).join(', '))

    // Whatever it does list has to answer a signed-out request itself.
    const locs = [...smXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
    ok(locs.length > 0, 'the sitemap is not empty')
    const unreachable = []
    for (const loc of locs) {
      const path = new URL(loc).pathname || '/'
      // No session cookie: this is what a crawler is.
      const r = await fetch(`${BASE}${path}`, { redirect: 'manual' })
      if (r.status !== 200) unreachable.push(`${path} -> ${r.status}`)
    }
    ok(unreachable.length === 0, 'and every URL in it answers a crawler with 200',
      unreachable.join(', '))

    ok(
      /hreflang="ar"/.test(smXml) && /hreflang="fr"/.test(smXml),
      'and each entry pairs its two locales',
    )
    const noHeader = []
    for (const path of ['/', '/ar']) if (!(await altLinks(path))) noHeader.push(path)
    ok(
      noHeader.length === 0,
      'and the Link: rel="alternate" response headers pair them too',
      noHeader.join(', '),
    )
  } else {
    ok(/Disallow: \/\s*$/m.test(robotsTxt), 'the closed beta disallows crawling outright')
    ok(!/Sitemap:/.test(robotsTxt), 'and offers no sitemap to crawl')
    // Not advertising one is not the same as not having one: crawlers probe
    // `/sitemap.xml` by convention whether or not robots.txt names it, so the
    // route has to answer for itself. An empty `<urlset>` would be a valid
    // document saying "these are all my URLs: none", which Search Console keeps
    // and re-fetches; 404 is the truth and agrees with robots.txt's silence.
    ok(sm.status === 404, 'and /sitemap.xml is not there to be found either',
      `HTTP ${sm.status}`)
    ok(robotsMeta.startsWith('noindex'), 'the robots meta says noindex')
    // `follow` stays on: a crawler that arrives should still walk the links.
    ok(/follow/.test(robotsMeta), 'while still allowing links to be followed')
    ok(
      canonical === 'https://zabaqist.com',
      'and the canonical defers to the site that has public content',
      canonical || 'none',
    )
    // No page may claim the app while no page may be indexed. A chapter that
    // named itself here would be asking to be indexed on a deploy that has just
    // said noindex — the contradiction this whole flag exists to prevent.
    const claiming = []
    for (const c of listCourses().slice(0, 3)) {
      const h = await (await get(`${BASE}/courses/${c.slug}`)).text()
      const can = /<link rel="canonical" href="([^"]+)"/.exec(h)?.[1] ?? ''
      if (can.includes('app.zabaqist.com')) claiming.push(`${c.slug} → ${can}`)
    }
    ok(claiming.length === 0,
      'and no gated chapter claims itself as a canonical URL while the beta is closed',
      claiming.join(', '))
    const leaking = []
    for (const path of ['/', '/ar', '/home', `/courses/${SLUG}`])
      if (await altLinks(path)) leaking.push(path)
    ok(
      leaking.length === 0,
      'and no response advertises an alternate URL of the app in its headers',
      `${leaking.join(', ')} — next-intl\'s alternateLinks is a sixth indexing signal` +
        ' and has to move with the other five',
    )
  }

  // Structured data: the public surface had none, so every rich result was
  // guessed from the prose. `Course` is deliberately absent — its pages are
  // gated, and declaring them would be a mismatch rather than a rich result.
  for (const [loc, label] of [['', 'French'], ['/ar', 'Arabic']]) {
    // `${loc}/` would be `/ar/`, which the app 308s to `/ar` — and `get()` does
    // not follow redirects, deliberately. Name the URL the app actually serves.
    const html = await (await get(`${BASE}${loc || '/'}`)).text()
    const m = /application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/.exec(html)
    ok(!!m, `the ${label} landing page carries structured data`)
    if (m) {
      let parsed
      try {
        parsed = JSON.parse(m[1])
      } catch {
        /* reported below */
      }
      ok(parsed?.['@type'] === 'EducationalOrganization',
        `and it parses as an organization (${label})`, parsed ? '' : 'invalid JSON')
      ok(!JSON.stringify(parsed ?? {}).includes('"Course"'),
        `and claims no Course whose page a crawler cannot fetch (${label})`)
    }
  }
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
// The "you are here" pin, RENDERED once — not `html.includes(the string)`,
// which is true on every page in the app because next-intl ships the whole
// `course` namespace into all of them.
{
  const mp = await browser.newPage({ viewport: { width: 1100, height: 1000 } })
  await mp.goto(`${BASE}/courses/fonctions-logarithmiques`, { waitUntil: 'load' })
  await mp.waitForSelector(HYDRATED, { timeout: 30000 })
  await mp.waitForTimeout(300)
  const pin = await mp.getByText(messages.course.youAreHere, { exact: true }).count()
  const nodes = await mp.locator('ol li a').count()
  ok(
    pin === 1 && nodes > 1,
    'and gets the path treatment like every other chapter',
    `“you are here” ×${pin} · ${nodes} station(s)`,
  )
  await mp.close()
}
/**
 * Derived, not hardcoded: a chapter that has no markdown yet. Naming one meant
 * the check broke the day that chapter got written.
 *
 * It asserted two things and proved neither. The bare `fetch` never reached the
 * page — `/courses/<slug>` is gated, so it followed the 307 and read `/signin`
 * — and the needle, `'Cours en développement'`, is `catalog.soonTitle`, which
 * next-intl serialises into the client bundle of EVERY route in the app. The
 * string was in the sign-in page's HTML. The check was green on two mistakes
 * that cancelled out.
 */
{
  const authored = new Set(listCourses().map((c) => c.slug))
  const pending = CHAPTERS_SX.map((c) => c.slug).find((slug) => !authored.has(slug))
  const fb = await browser.newPage({ viewport: { width: 1000, height: 900 } })
  const res = await fb.goto(`${BASE}/courses/${pending}`, { waitUntil: 'load' })
  await fb.waitForSelector(HYDRATED, { timeout: 30000 })
  ok(
    res.status() === 200 && new URL(fb.url()).pathname.endsWith(`/courses/${pending}`),
    'a slug with no document is served rather than redirected',
    `HTTP ${res.status()} at ${fb.url().replace(BASE, '')}`,
  )
  // The RENDERED heading, not the string: see the note above.
  const soon = await visibility(
    fb.getByRole('heading', { name: messages.catalog.soonTitle }),
  )
  ok(soon.visible, 'a slug with no document still falls back to "coming soon"', `${pending} — ×${soon.n}`)
  // `getAttribute` on a locator that matches nothing does not return null — it
  // WAITS for the element and then throws, and an uncaught throw here ends the
  // run. Count first. (Found by the injection that proved the check above: with
  // the fallback gone, the check went red and then the suite died.)
  const quizCta = fb.getByRole('link', { name: messages.catalog.soonQuiz })
  const quizHref = (await quizCta.count()) === 1 ? await quizCta.getAttribute('href') : null
  ok(
    quizHref === `/quiz/${pending}`,
    'and the fallback offers that chapter\'s own self-assessment',
    quizHref ?? 'no such link on the page',
  )
  await fb.close()
}
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
  // Four of these eight are gated. Without the cookie every one of them was a
  // 307 to `/signin` that fetch followed and reported as 200, which is why this
  // loop passed for routes that do not exist at all.
  const bad = []
  for (const [fr, ar] of pairs) {
    for (const u of [fr, ar]) {
      const r = await get(`${BASE}${u}`)
      if (r.status !== 200) bad.push(`${u} → ${r.status}`)
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
    await arrived(pg, `**/ar/courses/${SLUG}`, 'the switcher stays on the same page')
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
    await arrived(pg, `**/courses/${SLUG}`, 'switching back returns to the French URL')
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
// The count is printed, never quoted. Three different numbers for this suite
// were written down as fact in three files — 189 in ci.yml, 189 in
// prod-check.mjs, ~236 in CLAUDE.md — and all three were stale, because a
// number in prose does not move when a check is added.
console.log(
  `\n${failures === 0 ? `✓ all ${checks} checks passed` : `✗ ${failures} of ${checks} check(s) failed`}`,
)
process.exit(failures === 0 ? 0 : 1)
