'use client'

/**
 * "Mon activité" — everything this student is working on and has finished.
 *
 * Two lineages meet in this file and both are load-bearing.
 *
 * The **shape** is DataCamp's My Activity (`wokflow-datacamp/10-my-activity.png`):
 * a lifetime stat row in one card split by vertical rules, then a segmented
 * filter over one list of rows, each row carrying its own resume button. It is
 * the page you open to answer "what is still open?", and it answers it with a
 * count on the tab before you have read a single row.
 *
 * The **content** is still the private dashboard adapted from Brilliant's "You"
 * tab, with the public layer removed. Their equivalent ends in Leagues: a
 * compulsory ranked list of other learners by name and exact XP, with demotion
 * and no opt-out. DataCamp ships the same thing one rung down as a weekly
 * Leaderboard, third in its sidebar. This product promises the opposite in
 * shipped copy — *"Sans classement public : personne ne voit ton score."* — so
 * the only comparison here is **the reader against their own previous window**,
 * and DATACAMP_WORKFLOW.md §6 records that the Leaderboard was not ported.
 *
 * Also still dropped: the bare accuracy percentage. A struggling student meeting
 * a 44px "0.0%" is being told something discouraging and statistically
 * meaningless at the same time.
 *
 * The week strip and the lifetime totals moved here from the dashboard's right
 * rail when that rail was removed — see `components/MainContent.tsx`. They are a
 * thing you study, not a thing you check, and this is the page for studying.
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import ActivityChart from '@/components/progress/ActivityChart'
import StreakCard from '@/components/StreakCard'
import CourseCover from '@/components/course/CourseCover'
import { Link } from '@/i18n/navigation'
import {
  ACTIVITY_EVENT,
  lifetime,
  windowFor,
  type Granularity,
  type Window,
} from '@/lib/activity'
import {
  branchLabel,
  courseTitle,
  listCourses,
  type Branch,
  type ContentLocale,
} from '@/lib/courseCatalog'
import { readCourseShape, totalXp } from '@/lib/courseProgress'
import { DEFAULT_FILIERE, FILIERE_EVENT, readFiliere } from '@/lib/filiere'
import { getCourseProgress } from '@/lib/progressTracking'

const GRANULARITIES: Granularity[] = ['week', 'month', 'year']

const EMPTY_WINDOW: Window = { label: '', buckets: [] }

/** The two states a chapter can be filtered to. There is no "skipped". */
type Filter = 'active' | 'done'

interface Row {
  slug: string
  title: string
  branch: Branch
  done: number
  total: number
  pct: number
  started: boolean
  finished: boolean
  href: string
}

/**
 * One figure in the lifetime row.
 *
 * DataCamp draws these as four cells of a single card divided by vertical
 * hairlines rather than as four separate cards, and the difference is not
 * cosmetic: four cards read as four things, one card reads as one summary, which
 * is what it is.
 */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 px-5 py-5 text-center">
      <dt className="order-2 mt-1 text-sm text-zb-ink-2">{label}</dt>
      <dd
        dir="ltr"
        className="order-1 font-display text-2xl font-bold tabular-nums tracking-tight text-zb-ink sm:text-3xl"
      >
        {value}
      </dd>
    </div>
  )
}

export default function ProgressDashboard() {
  const t = useTranslations('progress')
  const td = useTranslations('dashboard')
  const locale = useLocale()
  const contentLocale = locale as ContentLocale

  const [g, setG] = useState<Granularity>('week')
  const [offset, setOffset] = useState(0)
  const [filter, setFilter] = useState<Filter>('active')
  const [win, setWin] = useState<Window>(EMPTY_WINDOW)
  const [prev, setPrev] = useState<Window>(EMPTY_WINDOW)
  const [rows, setRows] = useState<Row[]>([])
  const [life, setLife] = useState({ xp: 0, sections: 0, days: 0 })

  const refresh = useCallback(() => {
    setWin(windowFor(g, offset, locale))
    setPrev(windowFor(g, offset - 1, locale))

    const l = lifetime()
    setLife({
      xp: totalXp(listCourses().map((c) => c.slug)),
      sections: l.sections,
      days: l.days,
    })

    const filiere = readFiliere()?.filiere ?? DEFAULT_FILIERE
    setRows(
      listCourses(filiere)
        .map((c) => {
          const shape = readCourseShape(c.slug)
          const progress = getCourseProgress(c.slug)
          const done = progress?.completedTabs.length ?? 0
          const total = shape ? Object.keys(shape).length : 0
          return {
            slug: c.slug,
            title: courseTitle(c, contentLocale),
            branch: c.branch,
            done,
            total,
            pct: total ? Math.min(100, Math.round((done / total) * 100)) : 0,
            started: done > 0,
            finished: total > 0 && done >= total,
            href: progress?.lastVisitedTab
              ? `/courses/${c.slug}?s=${progress.lastVisitedTab}`
              : `/courses/${c.slug}`,
          }
        })
        // A chapter this device has never opened has no recorded shape, so
        // there is no honest denominator for it. It belongs in the catalogue,
        // not in a history of what was done.
        .filter((c) => c.total > 0),
    )
  }, [g, offset, locale, contentLocale])

  // localStorage does not exist during SSR, so the first read lands after mount.
  useEffect(() => {
    refresh()
    for (const e of [ACTIVITY_EVENT, 'zabaqist:progress', FILIERE_EVENT]) {
      window.addEventListener(e, refresh)
    }
    return () => {
      for (const e of [ACTIVITY_EVENT, 'zabaqist:progress', FILIERE_EVENT]) {
        window.removeEventListener(e, refresh)
      }
    }
  }, [refresh])

  const counts = useMemo(
    () => ({
      active: rows.filter((r) => !r.finished).length,
      done: rows.filter((r) => r.finished).length,
    }),
    [rows],
  )
  const shown = rows.filter((r) =>
    filter === 'done' ? r.finished : !r.finished,
  )

  const total = (w: Window) => w.buckets.reduce((n, b) => n + b.sections, 0)
  const sections = total(win)
  const checkpoints = win.buckets.reduce((n, b) => n + b.checkpoints, 0)
  const minutes = Math.round(
    win.buckets.reduce((n, b) => n + b.seconds, 0) / 60,
  )

  // The only comparison this product makes: you, against you, last time.
  const delta = sections - total(prev)
  const comparison =
    total(prev) === 0 && sections === 0
      ? t('vsPrevNone')
      : delta > 0
        ? t('vsPrevUp', { n: delta })
        : delta < 0
          ? t('vsPrevDown', { n: -delta })
          : t('vsPrevSame')

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
      <h1 className="font-display text-2xl font-bold tracking-tight text-zb-ink sm:text-3xl">
        {t('title')}
      </h1>
      <p className="mt-2 text-zb-ink-2">{t('sub')}</p>

      {/* ── Lifetime, in one card ─────────────────────────────────────────
          Three figures, not the source's four: it counts Courses, Tracks,
          DataLab projects and Certifications, and three of those do not exist
          here. A fourth cell reading "0 certifications" would be advertising an
          absence. */}
      <dl
        aria-label={t('lifetime')}
        className="mt-6 flex flex-col divide-y divide-zb-line rounded-xl border border-zb-line bg-white shadow-[var(--zb-shadow-sm)] sm:flex-row sm:divide-x sm:divide-y-0 rtl:sm:divide-x-reverse"
      >
        <Stat value={String(counts.done)} label={t('chaptersDone')} />
        <Stat value={String(life.sections)} label={t('sectionsRead')} />
        <Stat value={String(life.xp)} label={td('workXp')} />
      </dl>

      {/* ── What is open ──────────────────────────────────────────────────
          The source's In Progress / Completed / Skipped, minus Skipped: nothing
          in this product marks a chapter skipped, and a permanently empty tab
          is a control that teaches the reader the tabs are decorative. */}
      <div
        role="tablist"
        aria-label={t('coursesTitle')}
        className="mt-8 flex gap-2"
      >
        {(['active', 'done'] as const).map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={filter === k}
            onClick={() => setFilter(k)}
            className={`inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors ${
              filter === k
                ? 'bg-zb-navy text-white'
                : 'bg-zb-cream-2 text-zb-ink-2 hover:bg-zb-cream-3'
            }`}
          >
            {t(k === 'active' ? 'inProgress' : 'completed')}
            <span
              dir="ltr"
              className={`rounded px-1.5 py-0.5 text-xs tabular-nums ${
                filter === k ? 'bg-zb-navy-3' : 'bg-white'
              }`}
            >
              {counts[k]}
            </span>
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="mt-4 rounded-xl border border-dashed border-zb-line px-5 py-8 text-center text-sm text-zb-ink-2">
          {filter === 'done' ? t('noneDone') : t('noCourses')}
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-zb-line overflow-hidden rounded-xl border border-zb-line bg-white shadow-[var(--zb-shadow-sm)]">
          {shown.map((c) => (
            <li key={c.slug} className="flex items-center gap-4 px-4 py-4 sm:px-5">
              <div className="w-10 shrink-0 sm:w-11">
                <CourseCover
                  seed={c.slug}
                  tone={c.branch}
                  className="h-auto w-full"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-ink-3">
                  {branchLabel(c.branch, contentLocale)}
                </p>
                <h3 className="mt-0.5 truncate text-sm font-bold text-zb-ink sm:text-[15px]">
                  {c.title}
                </h3>
                <div className="mt-2 flex items-center gap-2.5">
                  <div
                    className="h-1.5 w-full max-w-[10rem] overflow-hidden rounded-full bg-zb-cream-3"
                    role="progressbar"
                    aria-valuenow={c.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full rounded-full bg-zb-mint transition-[width] duration-500 motion-reduce:transition-none"
                      style={{ width: `${c.pct}%` }}
                    />
                  </div>
                  <span
                    dir="ltr"
                    className="shrink-0 font-mono text-[11px] tabular-nums text-zb-ink-3"
                  >
                    {t('sectionsOf', { done: c.done, total: c.total })}
                  </span>
                </div>
              </div>

              <Link
                href={c.href}
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-zb-mint px-4 text-sm font-semibold text-white no-underline transition-colors hover:bg-zb-mint-deep max-sm:px-3"
              >
                {c.finished ? td('continueReview') : td('resumeCta')}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* ── Regularity ────────────────────────────────────────────────────
          Off the dashboard's rail and onto the page that is about looking at
          yourself. */}
      <div className="mt-10">
        <StreakCard />
      </div>

      {/* ── History ───────────────────────────────────────────────────────
          No DataCamp equivalent — this is the part of Brilliant's "You" tab
          worth keeping, and it is kept because every figure in it was recorded
          on this device rather than assumed. */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={t('prev')}
            onClick={() => setOffset((o) => o - 1)}
            className="grid size-9 place-items-center rounded-full border border-zb-line bg-white transition-colors hover:bg-zb-cream-2 rtl:rotate-180"
          >
            <IconChevronLeft size={18} />
          </button>
          <span className="min-w-[10rem] text-center text-sm font-semibold text-zb-ink">
            {win.label}
          </span>
          <button
            type="button"
            aria-label={t('next')}
            disabled={offset >= 0}
            onClick={() => setOffset((o) => Math.min(o + 1, 0))}
            className="grid size-9 place-items-center rounded-full border border-zb-line bg-white transition-colors hover:bg-zb-cream-2 disabled:opacity-30 rtl:rotate-180"
          >
            <IconChevronRight size={18} />
          </button>
        </div>

        <div
          role="tablist"
          aria-label={t('chartTitle')}
          className="flex rounded-full border border-zb-line bg-white p-1"
        >
          {GRANULARITIES.map((k) => (
            <button
              key={k}
              role="tab"
              aria-selected={g === k}
              onClick={() => {
                setG(k)
                setOffset(0)
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                g === k ? 'bg-zb-mint text-white' : 'text-zb-ink-2'
              }`}
            >
              {t(k)}
            </button>
          ))}
        </div>
      </div>

      {/* Labelled, because the lifetime row above shares three of these four
          labels — without a name on each group, "sections lues" on this page
          identifies two different numbers. */}
      <dl aria-label={t('snapshot')} className="mt-4 grid gap-3 sm:grid-cols-3">
        {(
          [
            [String(sections), t('sectionsRead')],
            [String(checkpoints), t('checkpointsTried')],
            [`${minutes} min`, t('timeSpent')],
          ] as const
        ).map(([value, label]) => (
          <div
            key={label}
            className="flex flex-col rounded-xl border border-zb-line bg-white px-5 py-4"
          >
            <dt className="order-2 mt-1 text-sm text-zb-ink-2">{label}</dt>
            <dd
              dir="ltr"
              className="order-1 text-2xl font-bold tabular-nums tracking-tight text-zb-ink"
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-sm text-zb-ink-3">{comparison}</p>

      <div className="mt-6 rounded-xl border border-zb-line bg-white p-6">
        <h2 className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-ink-3">
          {t('chartTitle')}
        </h2>
        <ActivityChart buckets={win.buckets} emptyLabel={t('empty')} />
        {sections === 0 && (
          <p className="mt-2 text-center text-xs text-zb-ink-3">
            {t('emptyHint')}
          </p>
        )}
      </div>

      <p className="mt-10 text-center text-xs leading-relaxed text-zb-ink-3">
        {t('privacyNote')}
      </p>
    </div>
  )
}
