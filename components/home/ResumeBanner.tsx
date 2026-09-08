'use client'

/**
 * The chapter in hand, as one wide row.
 *
 * This replaces the tall `ContinuePanel` at the top of the dashboard. The panel
 * was right that the dashboard should decide for the student instead of handing
 * them thirteen tiles — that argument still holds and is not being reversed.
 * What changes is the shape: DataCamp states the same thing in a single 120px
 * strip and spends the rest of the fold on *the other things the student could
 * do*, where the panel spent ~460px re-printing the chapter plan that the course
 * page shows again two clicks later.
 *
 * The plan is not lost. It moved to where it is acted on — the course page's
 * path view and the outline drawer — which is the trade the whole DataCamp
 * layout is built on: the dashboard routes, the course page details.
 *
 * ### On "2 hr 38 min to go"
 *
 * DataCamp's strip ends with a time estimate. We do not have one: no chapter
 * carries a per-section duration and inventing a minute figure would be the same
 * class of mistake as the hardcoded `33 lessons completed` that
 * `components/StreakCard.tsx` had to delete. What we do have, exactly, is how
 * many sections are left — so that is what the slot says.
 */

import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { IconArrowRight } from '@tabler/icons-react'

import { Link } from '@/i18n/navigation'
import CourseCover from '@/components/course/CourseCover'
import type { ChapterState } from '@/components/home/useChapterStates'
import { courseTitle, type ContentLocale } from '@/lib/courseCatalog'

export default function ResumeBanner({
  state,
  ready,
}: {
  state: ChapterState | null
  ready: boolean
}) {
  const t = useTranslations('dashboard')
  const locale = useLocale() as ContentLocale

  // Hold the height rather than collapsing it. This is the first thing under
  // the greeting, and a strip that appears after hydration shoves the whole
  // page down as the student is reaching for it.
  if (!ready || !state)
    return <div className="min-h-[7.5rem] sm:min-h-[6.5rem]" aria-hidden />

  const { course, pct, started, finished, done, total, href, nextTab } = state
  const remaining = Math.max(0, total - done)

  const label = finished
    ? t('continueReview')
    : started
      ? t('resumeCta')
      : t('continueStart')

  return (
    <section className="rounded-xl border border-zb-line bg-white p-5 shadow-[var(--zb-shadow-sm)] sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
        {/* DataCamp puts a saturated colour disc here, one hue per activity
            type. Ours is the chapter's own seeded khatim: it does the same job
            — an anchor the eye returns to — while also being unique per chapter,
            so the strip is recognisable as *this* chapter and not just as
            "the learn row". */}
        <div className="w-14 shrink-0 sm:w-16">
          <CourseCover
            seed={course.slug}
            tone={course.branch}
            className="h-auto w-full"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-gold-deep">
            {t('resumeEyebrow')}
          </p>

          <h2 className="mt-1 text-balance font-display text-xl font-bold leading-tight tracking-tight text-zb-ink sm:text-2xl">
            {courseTitle(course, locale)}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex min-w-[8rem] max-w-xs flex-1 items-center gap-2.5">
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
                className="shrink-0 font-mono text-xs tabular-nums text-zb-ink-3"
              >
                {pct}%
              </span>
            </div>

            {/* The honest version of "2 hr 38 min to go". */}
            {remaining > 0 && (
              <span className="text-xs text-zb-ink-3">
                {t('sectionsLeft', { n: remaining })}
              </span>
            )}
          </div>

          {/* Where resuming actually lands. DataCamp's strip never says this and
              it is the one thing a returning student most wants to know before
              pressing — the difference between "carry on" and "carry on *where*". */}
          {started && !finished && nextTab && (
            <p className="mt-2 truncate text-sm text-zb-ink-2">
              {t('resumeAt', { tab: nextTab.label })}
            </p>
          )}
        </div>

        <Link
          href={href}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-zb-mint px-6 text-[15px] font-bold text-white no-underline shadow-[0_3px_0_0_var(--zb-mint-deep),var(--zb-shadow-sm)] transition-colors hover:bg-zb-mint-deep max-sm:w-full"
        >
          {label}
          <IconArrowRight size={18} className="rtl:rotate-180" />
        </Link>
      </div>
    </section>
  )
}
