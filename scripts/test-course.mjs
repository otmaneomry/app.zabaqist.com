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

import { readFileSync } from 'node:fs'

import { chromium } from 'playwright'
import { listCourses, loadCourseDoc, tabsOf } from '../lib/courseDoc.ts'
import { CHAPTERS_SX } from '../lib/programme.ts'

/** UI copy is translated; assert against the catalogue, not against literals. */
const messages = JSON.parse(
  readFileSync(new URL('../messages/fr.json', import.meta.url), 'utf8'),
)
const messagesAr = JSON.parse(
  readFileSync(new URL('../messages/ar.json', import.meta.url), 'utf8'),
)

const BASE = process.argv[2] ?? 'http://localhost:3111'
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
let broken = []
for (const v of doc.views) {
  const res = await fetch(url(v.id))
  const html = await res.text()
  if (!res.ok || html.includes('__next_error__')) broken.push(`${v.id} (${res.status})`)
}
ok(broken.length === 0, `all ${doc.views.length} sections return 200`, broken.join(', '))

const heavy = doc.views.reduce((a, b) => (b.body.length > a.body.length ? b : a))
const html = await (await fetch(url(heavy.id))).text()
ok(/class="katex/.test(html), 'KaTeX rendered server-side (no client math runtime)')
ok(/katex-display/.test(html), 'block formulas are display math, not inline')
ok(!html.includes(heavy.body.slice(0, 80)), 'raw markdown is not shipped to the client')

/* ---------------------------------------------------------------- */
/* 3. The browser: layout, gates, persistence                        */
/* ---------------------------------------------------------------- */

const browser = await chromium.launch({ channel: 'chrome' })

section('Layout')
// A chapter's display formulas are routinely wider than a phone. Each must
// scroll inside its own box; the PAGE must never scroll sideways — not on the
// course, and not on the shell that wraps it.
const pageWidth = async (page, u) => {
  await page.goto(u, { waitUntil: 'load' })
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
const HYDRATED = 'body.client-side-classes' // set by ClientLayout's mount effect
const settle = async (p) => {
  await p.waitForSelector(HYDRATED, { timeout: 30000 })
  await p.waitForTimeout(150)
}
const open = async (u) => {
  await page.goto(u, { waitUntil: 'load' })
  await settle(page)
}

// Tabs navigate to the tab's first section.
await open(url())
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
        [messages.home.ctaPrimary, '/courses'],
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

section('Filière')
{
  // The whole point of asking: SM and Sciences Exp are different programmes,
  // so the answer has to change what the student is shown.
  const titles = async (pg) => (await pg.locator('section h3').allInnerTexts()).join(' | ')
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

{
  // Connecting is where the question is asked — but only once.
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const pg = await ctx.newPage()
  const signIn = async () => {
    await pg.goto(`${BASE}/signin`, { waitUntil: 'load' })
    await pg.waitForSelector(HYDRATED)
    await pg.locator('input[type="email"], input[name="email"]').first().fill('test@test.com')
    await pg.locator('input[type="password"]').first().fill('password')
    await pg.getByRole('button', { name: /Se connecter|Connexion/i }).first().click()
  }
  await signIn()
  await pg.waitForURL('**/filiere**', { timeout: 15000 })
  ok(true, 'signing in with no filière asks for one')

  await pg.getByRole('button', { name: messages.auth['filiere-sx'] }).click()
  await pg.getByRole('button', { name: messages.auth['track-2bac-pc'], exact: true }).click()
  await pg.getByRole('button', { name: new RegExp(messages.auth.confirm) }).click()
  await pg.waitForURL('**/home', { timeout: 15000 })

  await signIn()
  await pg.waitForURL('**/home', { timeout: 15000 })
  ok(true, 'signing in again goes straight to the dashboard')
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

section('Regressions')
const legacy = await fetch(`${BASE}/courses/fonctions-logarithmiques`)
ok(
  legacy.ok && (await legacy.text()).includes('Fonctions Logarithmiques'),
  'the hand-written course still serves its own page',
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
const catalog = await fetch(`${BASE}/courses`)
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
    const missing = [
      messagesAr.course.back,
      messagesAr.course.quiz,
      messagesAr.course.progressTitle,
    ].filter((v) => !shown.includes(v))
    ok(missing.length === 0, 'the course chrome is in Arabic', missing.join(' | '))
    ok(
      !shown.includes(messages.course.progressTitle) &&
        !shown.includes(messages.course.back),
      'no French chrome is on screen on the Arabic route',
    )

    // The document keeps its own direction: a French chapter inside the
    // Arabic route must not be laid out RTL, or its punctuation and inline
    // subscripts land on the wrong side.
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
