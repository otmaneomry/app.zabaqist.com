import { readdirSync } from 'node:fs'
import { join } from 'node:path'

import type { MetadataRoute } from 'next'

import {
  ALLOW_INDEXING,
  INDEXABLE_PATHS,
  localeHref,
} from '@/lib/publicPaths'
import { routing } from '@/i18n/routing'
import { siteUrl } from '@/lib/siteUrl'

/**
 * Crawl rules, read off the route tree rather than typed out.
 *
 * The list used to be written by hand and it drifted twice. The first time
 * `/home` — the private dashboard — was simply missing. The second time was
 * worse and invisible: every entry was written unprefixed (`/home`,
 * `/progres`, `/signin`), robots.txt matching is literal prefix, and
 * `localePrefix: 'as-needed'` puts the whole Arabic app under `/ar`. So
 * `Disallow: /home` did not cover `/ar/home`, and the Arabic half of the
 * private app was crawlable while the French half was not. `/subscribe` and
 * `/quiz` were never on the list in either language.
 *
 * So the list is derived instead. Walking `app/[locale]` gives every route that
 * exists; `INDEXABLE_PATHS` says which of them are offered for indexing; the
 * rest are disallowed, each one spelled in both languages by the same helper
 * the sitemap uses. Adding a page now covers it automatically, and opening a
 * page for indexing removes it from here — one list, no second edit to forget.
 *
 * The walk runs at build: `robots.js` is a Route Handler that Next caches
 * unless it reads a request-time API, and this one does not — see
 * node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/robots.md
 * ("`robots.js` is a special Route Handler that is cached by default unless it
 * uses a Request-time API or dynamic config option").
 */

/** Route file conventions that mark a directory as a page. */
const PAGE = /^page\.(tsx|ts|jsx|js)$/

/**
 * Every route under `app/[locale]`, as an unprefixed path.
 *
 * Three folder shapes are not paths and are handled rather than listed:
 *
 *  · `(with-header)` is a route group — chrome, not a segment, so it
 *    contributes nothing to the URL and its children belong to the parent;
 *  · `[...rest]` is the catch-all behind `app/[locale]/not-found.tsx`. It
 *    matches every URL including `/`, so disallowing it would disallow the
 *    site;
 *  · `[courseId]` is a dynamic segment. A crawler cannot be told about a
 *    pattern, only about a prefix, and `Disallow: /courses` already covers
 *    every chapter under it — which is also why opening the chapters means
 *    listing them in `INDEXABLE_PATHS`, not editing this file.
 */
function routesUnder(dir: string, prefix: string): string[] {
  const out: string[] = []

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      if (PAGE.test(entry.name)) out.push(prefix || '/')
      continue
    }

    const name = entry.name
    if (name.startsWith('_') || name.startsWith('@')) continue
    if (name.startsWith('(')) out.push(...routesUnder(join(dir, name), prefix))
    else if (name.startsWith('[[') || name.startsWith('[...')) continue
    else if (name.startsWith('[')) out.push(prefix || '/')
    else out.push(...routesUnder(join(dir, name), `${prefix}/${name}`))
  }

  return out
}

/**
 * Routes the walk must find, or it is not walking the tree any more.
 *
 * A derived list has one failure mode a hand-written one does not: if the walk
 * silently returns nothing — a renamed folder, a moved `app/`, a build that
 * runs from another directory — robots.txt would come out with an empty
 * disallow list and open the private app to everyone. This is the assertion
 * that turns that into a failed build instead. `/home` is the dashboard,
 * `/progres` the private progress page, `/demarrer` the onboarding funnel: the
 * three the hand-written list got wrong, which makes them the three worth
 * naming here.
 */
const MUST_EXIST = ['/home', '/progres', '/demarrer', '/signin']

const routes = [...new Set(routesUnder(join(process.cwd(), 'app', '[locale]'), ''))]

const missing = MUST_EXIST.filter((p) => !routes.includes(p))
if (missing.length > 0) {
  throw new Error(
    `app/robots.ts: the route walk did not find ${missing.join(', ')} — ` +
      'refusing to publish a crawl policy derived from an incomplete tree.',
  )
}

/** Not offered for indexing, in every language it is reachable in. */
const PRIVATE = routes
  .filter((p) => !(INDEXABLE_PATHS as readonly string[]).includes(p))
  .flatMap((p) => routing.locales.map((l) => localeHref(l, p)))
  .sort()

export default function robots(): MetadataRoute.Robots {
  // While the beta is closed the app defers to zabaqist.com, which carries the
  // same landing copy and has public content behind it. Offering a sitemap and
  // a canonical that point in opposite directions is what this used to do —
  // and `app/sitemap.ts` now 404s under the same flag, so the missing
  // `Sitemap:` line below is a fact rather than an omission.
  if (!ALLOW_INDEXING) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        ...PRIVATE,
        // Never locale-prefixed: `proxy.ts` excludes both from the matcher, so
        // next-intl never rewrites them and there is no `/ar` form to cover.
        '/auth/',
        '/api/',
      ],
    },
    // `siteUrl()` refuses a localhost origin in a production build; this line
    // used to publish whatever was in .env.local straight into robots.txt.
    sitemap: `${siteUrl()}/sitemap.xml`,
  }
}
