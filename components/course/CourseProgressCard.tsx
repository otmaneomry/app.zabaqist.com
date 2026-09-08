'use client'

/**
 * The progress header, same as the hand-written course page's:
 * "Progression du cours", time spent, percentage, bar.
 *
 * Two differences, both because this course is a document:
 *  · the denominator is the chapter's real section count, not a hardcoded 6;
 *  · XP earned at the checkpoints is shown next to the percentage.
 *
 * It also owns the two side effects of *being on* a section — marking it read
 * and accumulating time — so the page itself stays a server component.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { IconClock } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

import {
  chapterTotals,
  rememberCourseShape,
  type ChapterTotals,
} from '@/lib/courseProgress'
import {
  addTimeSpent,
  getCourseProgress,
  getFormattedTimeSpent,
  markTabCompleted,
} from '@/lib/progressTracking'

export default function CourseProgressCard({
  slug,
  activeId,
  viewIds,
  xpByView,
  markVisited = true,
  chromeless = false,
}: {
  slug: string
  activeId: string
  viewIds: string[]
  xpByView: Record<string, number>
  /**
   * Whether being on this page counts as having READ `activeId`.
   *
   * False on the course path: looking at the map is not reading the first
   * section, and marking it would light the second node before the reader has
   * opened the first.
   */
  markVisited?: boolean
  /**
   * Keep the side effects, drop the card.
   *
   * The reader's `CampusHeader` already states the chapter's XP against its
   * total, and the outline drawer states the per-part progress — so a second
   * progress card directly under that bar prints the same two facts twice, in a
   * different visual language, above the first line of the chapter. What is
   * still needed on that page is everything this component does *invisibly*:
   * marking the section read, accumulating time, and recording the chapter's
   * shape so the dashboard and the catalogue can read it back.
   */
  chromeless?: boolean
}) {
  const t = useTranslations('course')
  const [timeSpent, setTimeSpent] = useState('0m')
  const [totals, setTotals] = useState<ChapterTotals>({
    sectionsDone: 0,
    xp: 0,
    attempted: 0,
  })

  const idsKey = viewIds.join(',')

  const refresh = useCallback(() => {
    const seen = getCourseProgress(slug)?.completedTabs ?? []
    setTotals(chapterTotals(slug, idsKey.split(','), xpByView, seen))
    setTimeSpent(getFormattedTimeSpent(slug))
    // xpByView is rebuilt each render but keyed by idsKey.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, idsKey])

  // Opening a section is what marks it read. localStorage does not exist during
  // SSR, so this can only run after mount.
  useEffect(() => {
    if (markVisited) markTabCompleted(slug, activeId)
    // Only this page knows the chapter's sections and what each is worth;
    // the home and landing pages read it back from here.
    rememberCourseShape(slug, xpByView)
    refresh()
  }, [slug, activeId, idsKey, markVisited, refresh])

  // Time on the chapter, flushed every 10s and once more on the way out — the
  // same cadence the hand-written course page uses.
  // Seeded at 0 rather than Date.now(): reading the clock during render is
  // impure and recomputed on every render, and the effect below overwrote the
  // value on its first line regardless — the render-time reading was never
  // the one that counted.
  const since = useRef(0)
  useEffect(() => {
    since.current = Date.now()
    const flush = () => {
      const secs = Math.floor((Date.now() - since.current) / 1000)
      if (secs <= 0) return
      addTimeSpent(slug, secs)
      since.current = Date.now()
    }
    const id = setInterval(() => {
      flush()
      setTimeSpent(getFormattedTimeSpent(slug))
    }, 10000)
    return () => {
      clearInterval(id)
      flush()
    }
  }, [slug])

  // A checkpoint saved on this page dispatches `zabaqist:progress`; another tab
  // fires the native `storage` event.
  useEffect(() => {
    window.addEventListener('zabaqist:progress', refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener('zabaqist:progress', refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [refresh])

  const pct = viewIds.length
    ? Math.min(100, Math.round((totals.sectionsDone / viewIds.length) * 100))
    : 0

  if (chromeless) return null

  return (
    <section className="rounded-xl border border-zb-line bg-white px-5 py-4 shadow-[var(--zb-shadow-sm)]">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-ink-3">
          {t('progressTitle')}
        </h2>

        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-sm text-zb-ink-2">
            <IconClock size={15} />
            <span dir="ltr" className="tabular-nums">
              {timeSpent}
            </span>
          </span>

          {/* No `✦`. The khatim is the brand's one mark and it means "item in a
              list" (see `.zb-star-list` in app/globals.css); a decorative star
              beside a number is the sprinkled-chrome use that rule refuses. */}
          {totals.xp > 0 && (
            <span
              dir="ltr"
              className="inline-flex h-6 items-center rounded-full bg-zb-gold/20 px-2.5 font-mono text-xs font-semibold tabular-nums text-zb-gold-deep"
            >
              {totals.xp} XP
            </span>
          )}

          <span
            dir="ltr"
            className="text-sm font-bold tabular-nums text-zb-mint-deep"
          >
            {pct}%
          </span>
        </div>
      </div>

      <div
        className="mt-3 h-2 overflow-hidden rounded-full bg-zb-cream-3"
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

      <p className="mt-2 text-xs text-zb-ink-3">
        {t('sectionsSeen', {
          done: totals.sectionsDone,
          total: viewIds.length,
        })}
      </p>
    </section>
  )
}
