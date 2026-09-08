'use client'

/**
 * The chapters that exist, for the student's own filière.
 *
 * Built from `content/course/` — adding a markdown chapter adds a card here with
 * no further edit. Client-side because the filière lives on the device, and SM
 * and Sciences Exp do not have the same chapters; a visitor who has not chosen
 * sees the default programme, with the question right above it.
 *
 * ### What DataCamp's catalogue contributes
 *
 * `wokflow-datacamp/8_1-courses.png` is a dark banner, a row of filter chips, a
 * live result count, a search field, and then cards. Three of those five are
 * genuinely new here and all three earn their place at thirteen chapters:
 *
 *  · **the count** — "13 chapitres" above the grid tells a student the size of
 *    the programme before they scroll it, which the branch headings never did;
 *  · **the chips** — the branches, as one-tap filters, instead of two headings
 *    that can only be navigated by scrolling past one to reach the other;
 *  · **the search** — thirteen French/Arabic titles are more than a tired
 *    student wants to read to find "logarithme".
 *
 * The chips are the **real** branches from `lib/courseCatalog.ts`. The version of
 * this page that was deleted alongside this rewrite (`BrowseAllCourses.tsx`) had
 * a chip row too — `Toutes · Algèbre · Analyse · Géométrie · Probabilités` — and
 * it filtered nothing, over six chapter titles that do not exist. The distance
 * between that and this is the whole point: same furniture, wired to the real
 * catalogue.
 *
 * Not taken from the source: the instructor lockup at the foot of every card
 * (a face, a name, a job title). There is one pedagogue and no photograph, and
 * inventing an "Instructeur" line would be the same fabrication.
 */

import React, { useCallback, useDeferredValue, useEffect, useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { IconArrowRight, IconSearch } from '@tabler/icons-react'

import { Link } from '@/i18n/navigation'
import CourseCover from '@/components/course/CourseCover'
import PageBanner from '@/components/shell/PageBanner'
import {
  BRANCHES,
  branchLabel,
  courseDescription,
  courseTitle,
  listCourses,
  type Branch,
  type ContentLocale,
  type CourseMeta,
} from '@/lib/courseCatalog'
import { summarize } from '@/lib/courseProgress'
import {
  DEFAULT_FILIERE,
  FILIERE_EVENT,
  readFiliere,
  type Filiere,
} from '@/lib/filiere'

const EVENTS = [FILIERE_EVENT, 'zabaqist:progress']

/** `null` is "all branches" — the source's leading `All` chip. */
type Chip = Branch | null

/**
 * Accent-blind, case-blind matching.
 *
 * "logarithme" must find "Fonctions logarithmiques" and "equations" must find
 * "Équations différentielles". A French student types without accents far more
 * often than with them, and a search that answers "no results" to `equations`
 * on a page that contains the word is worse than no search.
 */
const fold = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

export default function CourseCatalog() {
  const t = useTranslations('catalog')
  const a = useTranslations('auth')
  const td = useTranslations('dashboard')
  const locale = useLocale() as ContentLocale

  const [filiere, setFiliere] = useState<Filiere>(DEFAULT_FILIERE)
  const [chosen, setChosen] = useState(false)
  const [chip, setChip] = useState<Chip>(null)
  const [query, setQuery] = useState('')
  // Empty until mounted: progress is on the device, and rendering it during SSR
  // is what made `ContinueLearningSection` throw away its server markup.
  const [pct, setPct] = useState<Record<string, number | null>>({})

  // Typing re-filters thirteen cards, each with a KaTeX-free but non-trivial
  // subtree. Deferring keeps the field itself responsive on a slow phone.
  const deferred = useDeferredValue(query)

  const refresh = useCallback(() => {
    const c = readFiliere()
    setFiliere(c?.filiere ?? DEFAULT_FILIERE)
    setChosen(!!c)
    const map: Record<string, number | null> = {}
    for (const course of listCourses()) map[course.slug] = summarize(course.slug).pct
    setPct(map)
  }, [])

  useEffect(() => {
    refresh()
    for (const e of EVENTS) window.addEventListener(e, refresh)
    return () => {
      for (const e of EVENTS) window.removeEventListener(e, refresh)
    }
  }, [refresh])

  const all = useMemo(() => listCourses(filiere), [filiere])

  // Which chips to draw. A Sciences Exp student's programme is one branch, and
  // a filter row offering a single filter plus "all" is two buttons that do the
  // same thing.
  const branches = useMemo(
    () => BRANCHES.filter((b) => all.some((c) => c.branch === b)),
    [all],
  )

  const shown = useMemo(() => {
    const q = fold(deferred.trim())
    return all.filter((c) => {
      if (chip && c.branch !== chip) return false
      if (!q) return true
      // Both languages' titles, always: a student on the Arabic route may well
      // know the chapter by its French name, and the reverse is just as common.
      return [c.title, c.titleAr, c.description, c.descriptionAr].some((s) =>
        fold(s).includes(q),
      )
    })
  }, [all, chip, deferred])

  return (
    <div className="space-y-6">
      <PageBanner
        title={t('title')}
        badge={
          <span className="inline-flex h-7 items-center rounded-md bg-zb-mint-on-dark/15 px-2.5 text-xs font-semibold text-zb-mint-on-dark">
            {a(`filiere-${filiere}`)}
          </span>
        }
        description={t('sub')}
        actions={
          <Link
            href="/filiere?next=/courses"
            className="inline-flex h-10 items-center rounded-full border border-zb-navy-line px-4 text-sm font-semibold text-white no-underline transition-colors hover:bg-zb-navy-2"
          >
            {chosen ? a('changeFiliere') : a('pickFiliere')}
          </Link>
        }
      />

      {/* ── Filters ──────────────────────────────────────────────────────── */}
      {branches.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {[null, ...branches].map((b) => (
            <button
              key={b ?? 'all'}
              type="button"
              aria-pressed={chip === b}
              onClick={() => setChip(b)}
              className={`inline-flex h-9 items-center rounded-md px-3.5 text-sm font-semibold transition-colors ${
                chip === b
                  ? 'bg-zb-navy text-white'
                  : 'bg-zb-cream-2 text-zb-ink-2 hover:bg-zb-cream-3'
              }`}
            >
              {b ? branchLabel(b, locale) : t('filterAll')}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-zb-ink" aria-live="polite">
          {t('resultCount', { n: shown.length })}
        </p>

        <div className="relative w-full sm:w-72">
          <IconSearch
            size={17}
            className="pointer-events-none absolute inset-y-0 my-auto text-zb-ink-3 ltr:left-3 rtl:right-3"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            aria-label={t('searchPlaceholder')}
            className="h-10 w-full rounded-full border border-zb-line bg-white text-sm text-zb-ink outline-none transition-colors placeholder:text-zb-ink-3 focus:border-zb-mint ltr:pl-9 ltr:pr-4 rtl:pl-4 rtl:pr-9"
          />
        </div>
      </div>

      {/* ── The chapters ─────────────────────────────────────────────────── */}
      {shown.length === 0 ? (
        <p className="rounded-xl border border-dashed border-zb-line px-5 py-12 text-center text-sm text-zb-ink-2">
          {t('noResults', { q: query.trim() })}
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c) => (
            <li key={c.slug}>
              <CatalogCard
                course={c}
                locale={locale}
                pct={pct[c.slug] ?? null}
                openLabel={t('open')}
                resumeLabel={td('resumeCta')}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function CatalogCard({
  course,
  locale,
  pct,
  openLabel,
  resumeLabel,
}: {
  course: CourseMeta
  locale: ContentLocale
  pct: number | null
  openLabel: string
  resumeLabel: string
}) {
  const started = pct !== null && pct > 0

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="flex h-full flex-col rounded-xl border border-zb-line bg-white p-5 no-underline shadow-[var(--zb-shadow-sm)] transition-all hover:-translate-y-0.5 hover:border-zb-mint/40 hover:shadow-[var(--zb-shadow-md)]"
    >
      <div className="flex items-start gap-3">
        <div className="w-11 shrink-0">
          <CourseCover
            seed={course.slug}
            tone={course.branch}
            className="h-auto w-full"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-ink-3">
            {branchLabel(course.branch, locale)}
          </p>
          <h3 className="mt-0.5 text-balance font-display text-base font-bold leading-snug tracking-tight text-zb-ink">
            {courseTitle(course, locale)}
          </h3>
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zb-ink-2">
        {courseDescription(course, locale)}
      </p>

      {/* Only once opened. A 0% bar on every card in the catalogue turns the
          programme into thirteen pictures of not having started. */}
      {started && (
        <div className="mt-4 flex items-center gap-2.5">
          <div
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-zb-cream-3"
            role="progressbar"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-zb-mint transition-[width] duration-500 motion-reduce:transition-none"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span
            dir="ltr"
            className="font-mono text-[11px] tabular-nums text-zb-ink-3"
          >
            {pct}%
          </span>
        </div>
      )}

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-zb-mint-deep">
        {started ? resumeLabel : openLabel}
        <IconArrowRight size={16} className="rtl:rotate-180" />
      </span>
    </Link>
  )
}
