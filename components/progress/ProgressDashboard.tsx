'use client'

/**
 * The private progress dashboard.
 *
 * Adapted from Brilliant's "You" tab (BRILLIANT_WORKFLOW.md §5) with the public
 * layer removed. Their equivalent ends in Leagues: a compulsory ranked list of
 * other learners by name and exact XP, with demotion and no opt-out. This
 * product promises the opposite in shipped copy — *"Sans classement public :
 * personne ne voit ton score."* — so the comparison here is only ever
 * **the reader against their own previous window**.
 *
 * Also dropped: the bare accuracy percentage. A struggling student meeting a
 * 44px "0.0%" is being told something discouraging and statistically
 * meaningless at the same time.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import ActivityChart from '@/components/progress/ActivityChart'
import { Link } from '@/i18n/navigation'
import {
  ACTIVITY_EVENT,
  windowFor,
  type Granularity,
  type Window,
} from '@/lib/activity'
import {
  courseTitle,
  listCourses,
  type ContentLocale,
} from '@/lib/courseCatalog'
import { readCourseShape } from '@/lib/courseProgress'
import { DEFAULT_FILIERE, FILIERE_EVENT, readFiliere } from '@/lib/filiere'
import { getCourseProgress } from '@/lib/progressTracking'

const GRANULARITIES: Granularity[] = ['week', 'month', 'year']

const EMPTY_WINDOW: Window = { label: '', buckets: [] }

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white px-5 py-4">
      <p dir="ltr" className="text-2xl font-bold tracking-tight">
        {value}
      </p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </div>
  )
}

export default function ProgressDashboard() {
  const t = useTranslations('progress')
  const locale = useLocale()
  const contentLocale = locale as ContentLocale

  const [g, setG] = useState<Granularity>('week')
  const [offset, setOffset] = useState(0)
  const [win, setWin] = useState<Window>(EMPTY_WINDOW)
  const [prev, setPrev] = useState<Window>(EMPTY_WINDOW)
  const [courses, setCourses] = useState<
    { slug: string; title: string; done: number; total: number }[]
  >([])

  const refresh = useCallback(() => {
    setWin(windowFor(g, offset, locale))
    setPrev(windowFor(g, offset - 1, locale))

    const filiere = readFiliere()?.filiere ?? DEFAULT_FILIERE
    setCourses(
      listCourses(filiere)
        .map((c) => {
          const shape = readCourseShape(c.slug)
          const seen = getCourseProgress(c.slug)?.completedTabs ?? []
          // Only sections this chapter still has. A chapter that gains, loses
          // or renames one leaves the old id behind on the device, and counting
          // it unfiltered is how a card reads "2 of 1".
          const done = shape
            ? seen.filter((id) => id in shape).length
            : seen.length
          return {
            slug: c.slug,
            title: courseTitle(c, contentLocale),
            done,
            total: shape ? Object.keys(shape).length : 0,
          }
        })
        .filter((c) => c.total > 0),
    )
  }, [g, offset, locale, contentLocale])

  // localStorage does not exist during SSR, so the first read lands after mount.
  useEffect(() => {
    refresh()
    // `storage` too: the three custom events are dispatched on the window that
    // fired them, so a dashboard left open in one tab never noticed the reading
    // done in another. `storage` is the only one the browser sends across tabs.
    const EVENTS = [ACTIVITY_EVENT, 'zabaqist:progress', FILIERE_EVENT, 'storage']
    for (const e of EVENTS) window.addEventListener(e, refresh)
    return () => {
      for (const e of EVENTS) window.removeEventListener(e, refresh)
    }
  }, [refresh])

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
    <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
      <p className="mt-2 text-gray-600">{t('sub')}</p>

      {/* Range controls */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={t('prev')}
            onClick={() => setOffset((o) => o - 1)}
            className="grid size-9 place-items-center rounded-full border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
          >
            <IconChevronLeft size={18} />
          </button>
          <span className="min-w-[10rem] text-center text-sm font-semibold">
            {win.label}
          </span>
          <button
            type="button"
            aria-label={t('next')}
            disabled={offset >= 0}
            onClick={() => setOffset((o) => Math.min(o + 1, 0))}
            className="grid size-9 place-items-center rounded-full border border-gray-200 transition-colors hover:bg-gray-50 disabled:opacity-30 rtl:rotate-180"
          >
            <IconChevronRight size={18} />
          </button>
        </div>

        <div
          role="tablist"
          className="flex rounded-full border border-gray-200 p-1"
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
                g === k ? 'bg-zb-mint text-white' : 'text-gray-600'
              }`}
            >
              {t(k)}
            </button>
          ))}
        </div>
      </div>

      {/* Snapshot */}
      <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-gray-500">
        {t('snapshot')}
      </h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <Stat value={String(sections)} label={t('sectionsRead')} />
        <Stat value={String(checkpoints)} label={t('checkpointsTried')} />
        <Stat value={`${minutes} min`} label={t('timeSpent')} />
      </div>
      <p className="mt-3 text-sm text-gray-500">{comparison}</p>

      {/* Chart */}
      <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-gray-500">
          {t('chartTitle')}
        </h2>
        <ActivityChart buckets={win.buckets} emptyLabel={t('empty')} />
        {sections === 0 && (
          <p className="mt-2 text-center text-xs text-gray-400">
            {t('emptyHint')}
          </p>
        )}
      </div>

      {/* Chapters */}
      <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-gray-500">
        {t('coursesTitle')}
      </h2>
      {courses.length === 0 ? (
        <p className="mt-3 text-sm text-gray-500">{t('noCourses')}</p>
      ) : (
        <ul className="mt-3 space-y-2">
          {courses.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/courses/${c.slug}`}
                className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 no-underline transition-colors hover:border-zb-mint/40"
              >
                <span className="min-w-0">
                  <span className="block font-semibold">{c.title}</span>
                  <span className="mt-0.5 block text-sm text-gray-500">
                    {t('sectionsOf', { done: c.done, total: c.total })}
                  </span>
                </span>
                <span className="shrink-0 text-sm font-semibold text-zb-mint-deep">
                  {t('openCourse')} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-10 text-center text-xs leading-relaxed text-gray-400">
        {t('privacyNote')}
      </p>
    </div>
  )
}
