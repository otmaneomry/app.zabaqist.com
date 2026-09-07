'use client'

/**
 * The one thing to do next, given the whole page to say it in.
 *
 * Brilliant's home is built around a single dominant panel — the chapter
 * you're in, what's done, what's next, one button — and that structure is
 * worth taking: a dashboard that opens with a grid of thirteen identical
 * cards asks a tired student to make a decision before they can start. This
 * panel makes the decision for them and leaves the grid as a way to overrule
 * it.
 *
 * What is NOT taken from that screenshot:
 *  · the league table and the XP ranking — public comparison is the one thing
 *    this product's design refused outright;
 *  · "LEVEL 1", which is a made-up ladder on top of a real chapter plan; the
 *    eyebrow here is the chapter's actual branch and number;
 *  · lock icons. Nothing in Zabaqist is locked, so nothing is drawn as if it
 *    were.
 *
 * The tick is the khatim, the palette is Mint Tea, and every figure comes from
 * the reader's own device.
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { IconArrowRight } from '@tabler/icons-react'

import { Link } from '@/i18n/navigation'
import { KHATIM } from '@/components/landing/Zellige'
import {
  branchLabel,
  courseTitle,
  listCourses,
  type ContentLocale,
} from '@/lib/courseCatalog'
import { DEFAULT_FILIERE, FILIERE_EVENT, readFiliere, type Filiere } from '@/lib/filiere'
import { getCourseProgress } from '@/lib/progressTracking'

/** One `##` part of a chapter, as the course page's own tabs divide it. */
export interface ChapterTab {
  /** The first section of the part — where opening it lands. */
  id: string
  label: string
  kind: string
  /** Every section in the part, in order. */
  viewIds: string[]
}
export type ChapterShape = Record<string, { tabs: ChapterTab[]; views: number }>

function Tick({ done, current }: { done: boolean; current: boolean }) {
  const r = 9
  const inner = r * KHATIM
  const pts = Array.from({ length: 16 }, (_, i) => {
    const rad = i % 2 === 0 ? r : inner
    const a = (Math.PI / 8) * i - Math.PI / 2
    return `${(r + rad * Math.cos(a)).toFixed(1)},${(r + rad * Math.sin(a)).toFixed(1)}`
  }).join(' ')

  return (
    <svg viewBox="0 0 18 18" className="size-[18px] shrink-0" aria-hidden>
      <polygon
        points={pts}
        className={
          done
            ? 'fill-zb-mint'
            : current
              ? 'fill-zb-gold'
              : 'fill-transparent stroke-zb-line [stroke-width:1.5]'
        }
      />
    </svg>
  )
}

export default function ContinuePanel({ shape }: { shape: ChapterShape }) {
  const t = useTranslations('dashboard')
  const locale = useLocale() as ContentLocale
  const [filiere, setFiliere] = useState<Filiere>(DEFAULT_FILIERE)
  // `null` until mounted: progress is on the device, so the server cannot know
  // which chapter this is and must not guess in the HTML.
  const [seen, setSeen] = useState<Record<string, string[]> | null>(null)

  const refresh = useCallback(() => {
    setFiliere(readFiliere()?.filiere ?? DEFAULT_FILIERE)
    const map: Record<string, string[]> = {}
    for (const c of listCourses())
      map[c.slug] = getCourseProgress(c.slug)?.completedTabs ?? []
    setSeen(map)
  }, [])

  useEffect(() => {
    refresh()
    for (const e of [FILIERE_EVENT, 'zabaqist:progress'])
      window.addEventListener(e, refresh)
    return () => {
      for (const e of [FILIERE_EVENT, 'zabaqist:progress'])
        window.removeEventListener(e, refresh)
    }
  }, [refresh])

  const chapters = useMemo(() => listCourses(filiere), [filiere])

  /**
   * The chapter to show: the furthest one started but not finished, else the
   * first unstarted. Never a finished chapter while an unfinished one exists —
   * the panel is for the next step, not a trophy shelf.
   */
  const current = useMemo(() => {
    if (!seen) return null
    const withState = chapters.map((c) => {
      const tabs = shape[c.slug]?.tabs ?? []
      const read = new Set(seen[c.slug] ?? [])
      // Count sections, not parts: a part half-read is half of the work done,
      // and rounding it to nothing is what made the panel say 0% to someone
      // who had just spent twenty minutes in it.
      const views = tabs.flatMap((tab) => tab.viewIds)
      const readViews = views.filter((v) => read.has(v)).length
      return {
        course: c,
        tabs,
        read,
        done: readViews,
        total: views.length,
      }
    })
    return (
      withState.find((x) => x.done > 0 && x.done < x.total) ??
      withState.find((x) => x.done === 0) ??
      withState[0] ??
      null
    )
  }, [chapters, shape, seen])

  // Reserve the space rather than collapsing it: this is the tallest thing on
  // the page and a layout that jumps on hydration is worse than a blank frame.
  if (!current) return <div className="min-h-[22rem]" aria-hidden />

  const { course, tabs, read, done, total } = current
  const pct = total ? Math.round((done / total) * 100) : 0
  // A part is finished only when all of its sections are.
  const tabDone = (tab: ChapterTab) => tab.viewIds.every((v) => read.has(v))
  const nextTab = tabs.find((tab) => !tabDone(tab)) ?? tabs[0]
  // Resume at the first section not yet read inside that part, not at its top.
  const nextView = nextTab?.viewIds.find((v) => !read.has(v)) ?? nextTab?.id
  const finished = total > 0 && done === total

  const label = finished
    ? t('continueReview')
    : done === 0
      ? t('continueStart')
      : t('continueResume', { tab: nextTab?.label ?? '' })

  const branchN =
    chapters.filter((c) => c.branch === course.branch).findIndex((c) => c.slug === course.slug) + 1

  return (
    <section className="rounded-2xl border border-zb-line bg-white p-6 shadow-[var(--zb-shadow-sm)] sm:p-7">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-gold-deep">
        {t('continueEyebrow', {
          branch: branchLabel(course.branch, locale),
          n: branchN,
        })}
      </p>

      <h2 className="mt-2 text-balance font-display text-2xl font-bold leading-tight tracking-tight text-zb-ink sm:text-[28px]">
        {courseTitle(course, locale)}
      </h2>

      <div className="mt-5 flex items-center gap-3">
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
          {t('continuePct', { pct })}
        </span>
      </div>

      {/* The chapter's own plan, at the granularity the course page navigates
          by. Nothing is greyed out as unavailable: a reader may open any part
          at any time, and drawing a lock would promise a gate that is not
          there. */}
      <ul className="mt-6 space-y-0.5">
        {tabs.map((tab) => {
          const isDone = tabDone(tab)
          const isNext = !isDone && tab.id === nextTab?.id
          return (
            <li key={tab.id}>
              <Link
                href={`/courses/${course.slug}?s=${tab.id}`}
                className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm no-underline transition-colors hover:bg-zb-cream-2 ${
                  isNext
                    ? 'font-semibold text-zb-ink'
                    : isDone
                      ? 'text-zb-ink-2'
                      : 'text-zb-ink-3'
                }`}
              >
                <Tick done={isDone} current={isNext} />
                <span className="flex-1">{tab.label}</span>
                {tab.viewIds.length > 1 && (
                  <span
                    dir="ltr"
                    className="font-mono text-[11px] tabular-nums text-zb-ink-3"
                  >
                    {tab.viewIds.filter((v) => read.has(v)).length}/
                    {tab.viewIds.length}
                  </span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Starting goes to the chapter's own path view, which lays the whole
          journey out; resuming goes straight to the section, because someone
          mid-chapter has already seen the map and wants the page. */}
      <Link
        href={
          done === 0
            ? `/courses/${course.slug}`
            : `/courses/${course.slug}${nextView ? `?s=${nextView}` : ''}`
        }
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-zb-mint px-6 text-[15px] font-bold text-white no-underline shadow-[0_3px_0_0_var(--zb-mint-deep),var(--zb-shadow-sm)] transition-colors hover:bg-zb-mint-deep"
      >
        {label}
        <IconArrowRight size={18} className="rtl:rotate-180" />
      </Link>
    </section>
  )
}
