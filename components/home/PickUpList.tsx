'use client'

/**
 * "Reprends où tu en étais" — every chapter in flight, as rows.
 *
 * DataCamp's version of this list is one bordered card with hairline-divided
 * rows: art, eyebrow, title, a thin progress bar, and a green Continue button
 * pinned right. Rows, not tiles, and the reason is worth stating because this
 * codebase has argued the other way before: a tile grid makes thirteen chapters
 * look like thirteen equivalent choices, while a row list is ordered, scannable
 * in one column, and has room for the button that makes the choice unnecessary.
 *
 * Two deliberate departures from the source:
 *
 *  1. **The chapter in the strip above is excluded.** DataCamp shows its current
 *     course in both places, which it can afford at three-in-flight. A student
 *     here usually has one, and printing it twice in 200px would read as a
 *     rendering fault rather than emphasis.
 *  2. **When nothing is in flight the list does not vanish, it changes
 *     question.** An empty "pick up where you left off" is a dead heading. With
 *     nothing to resume it shows what the programme does next instead, and says
 *     so in the heading.
 */

import React from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import CourseCover from '@/components/course/CourseCover'
import type { ChapterState } from '@/components/home/useChapterStates'
import {
  branchLabel,
  courseTitle,
  type ContentLocale,
} from '@/lib/courseCatalog'

/** How many chapters to suggest when there is nothing to resume. */
const SUGGEST = 3

function Row({ state, locale }: { state: ChapterState; locale: ContentLocale }) {
  const t = useTranslations('dashboard')
  const { course, pct, started, href } = state

  return (
    <li className="flex items-center gap-4 px-4 py-4 sm:px-5">
      <div className="w-10 shrink-0 sm:w-11">
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
        <h3 className="mt-0.5 truncate text-sm font-bold text-zb-ink sm:text-[15px]">
          {courseTitle(course, locale)}
        </h3>

        {/* Only for a chapter that has been opened. A 0% bar under an unstarted
            chapter is a picture of failure drawn before anything happened. */}
        {started && (
          <div className="mt-2 flex items-center gap-2.5">
            <div
              className="h-1.5 w-full max-w-[10rem] overflow-hidden rounded-full bg-zb-cream-3"
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
      </div>

      {/* The verb carries the state — the one mechanic BRILLIANT_WORKFLOW.md §3
          singled out and the source uses too. Never "Open". */}
      <Link
        href={href}
        className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-zb-mint px-4 text-sm font-semibold text-white no-underline transition-colors hover:bg-zb-mint-deep max-sm:px-3"
      >
        {started ? t('resumeCta') : t('startCta')}
      </Link>
    </li>
  )
}

export default function PickUpList({
  states,
  current,
  ready,
}: {
  states: ChapterState[]
  current: ChapterState | null
  ready: boolean
}) {
  const t = useTranslations('dashboard')
  const locale = useLocale() as ContentLocale

  if (!ready) return <div className="min-h-[12rem]" aria-hidden />

  const inFlight = states.filter(
    (s) => s.started && !s.finished && s.course.slug !== current?.course.slug,
  )

  // Nothing to resume: change the question rather than the heading's answer.
  const suggesting = inFlight.length === 0
  const rows = suggesting
    ? states
        .filter((s) => !s.started && s.course.slug !== current?.course.slug)
        .slice(0, SUGGEST)
    : inFlight

  if (rows.length === 0) return null

  return (
    <section>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <h2 className="font-display text-lg font-bold tracking-tight text-zb-ink sm:text-xl">
          {suggesting ? t('nextUp') : t('pickUp')}
        </h2>
        <Link
          href="/progres"
          className="shrink-0 text-sm font-semibold text-zb-mint-deep no-underline hover:underline"
        >
          {t('seeActivity')}
        </Link>
      </div>

      <ul className="divide-y divide-zb-line overflow-hidden rounded-xl border border-zb-line bg-white shadow-[var(--zb-shadow-sm)]">
        {rows.map((state) => (
          <Row key={state.course.slug} state={state} locale={locale} />
        ))}
      </ul>
    </section>
  )
}
