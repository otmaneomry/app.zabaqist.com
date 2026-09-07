'use client'

/**
 * Regularity, as this device actually recorded it.
 *
 * Everything here used to be invented: a hardcoded `0`, a hardcoded `3` for
 * longest streak, a hardcoded `33` for lessons completed, five English day
 * initials starting on Sunday, and a collapse chevron with no handler behind
 * it. A student who had read thirty sections saw the same numbers as one who
 * had read none — which makes the whole card noise the moment anyone notices.
 *
 * Now: `currentStreak()`, `thisWeek()` and `lifetime()` from lib/activity.ts,
 * all computed from the same log the progress dashboard reads.
 *
 * The day marker is the khatim, not a lightning bolt. The bolt was Brilliant's
 * icon; the khatim is ours, and this is a place it MEANS something — one mark
 * per day, filled when the day was worked. That is the same rule as the list
 * bullets in `.zb-star-list`: the mark appears where it carries meaning and
 * nowhere it doesn't.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { KHATIM } from '@/components/landing/Zellige'
import {
  ACTIVITY_EVENT,
  currentStreak,
  dayKey,
  lifetime,
  longestStreak,
  thisWeek,
  type WeekDay,
} from '@/lib/activity'

/** The eight-point star as a polygon, sized to a box of `r * 2`. */
function starPoints(r: number): string {
  const inner = r * KHATIM
  return Array.from({ length: 16 }, (_, i) => {
    const rad = i % 2 === 0 ? r : inner
    const a = (Math.PI / 8) * i - Math.PI / 2
    return `${(r + rad * Math.cos(a)).toFixed(2)},${(r + rad * Math.sin(a)).toFixed(2)}`
  }).join(' ')
}

/**
 * Four states, and the distinction between the last two is the point: a day
 * that has not arrived is not a day you missed. Showing Thursday as an empty
 * slot on Monday would read as five failures before the week has begun.
 */
function DayMark({
  worked,
  today,
  future,
}: {
  worked: boolean
  today: boolean
  future: boolean
}) {
  return (
    <svg viewBox="0 0 34 34" className="size-full" aria-hidden>
      <polygon
        points={starPoints(17)}
        // Never filled except when earned. A filled shape reads as "done", so
        // filling a day that has not happened yet — even palely — claims
        // something on the student's behalf. Both unearned states are outlines;
        // the missed one is drawn a shade firmer, because a gap in the past is
        // a fact and a gap in the future is only a space.
        className={
          worked
            ? 'fill-zb-mint'
            : future
              ? 'fill-transparent stroke-zb-line [stroke-width:1.5]'
              : 'fill-transparent stroke-zb-ink-3/40 [stroke-width:1.5]'
        }
      />
      {/* Today is ringed rather than filled when unworked: it is still open,
          not yet missed. Colouring it like a missed day would be a reproach
          before the day is over. */}
      {today && !worked && (
        <polygon
          points={starPoints(17)}
          className="fill-transparent stroke-zb-gold [stroke-dasharray:3_3] [stroke-width:1.8]"
        />
      )}
    </svg>
  )
}

interface Snapshot {
  streak: number
  best: number
  days: number
  week: WeekDay[]
}

const EMPTY: Snapshot = { streak: 0, best: 0, days: 0, week: [] }

export default function StreakCard() {
  const t = useTranslations('dashboard')
  const locale = useLocale()
  // Starts empty and fills after mount: the log is on the device, so rendering
  // it on the server would print one student's numbers into another's HTML.
  const [s, setS] = useState<Snapshot>(EMPTY)

  const read = useCallback(() => {
    const life = lifetime()
    setS({
      streak: currentStreak(),
      best: longestStreak(),
      days: life.days,
      week: thisWeek(),
    })
  }, [])

  useEffect(() => {
    read()
    window.addEventListener(ACTIVITY_EVENT, read)
    return () => window.removeEventListener(ACTIVITY_EVENT, read)
  }, [read])

  const todayKey = dayKey(new Date())
  const workedToday = s.week.some((d) => d.key === todayKey && d.worked)

  const message =
    s.streak === 0
      ? t('streakNone')
      : workedToday
        ? t('streakToday')
        : t('streakKeep')

  return (
    <section
      aria-label={t('streakTitle')}
      className="rounded-2xl border border-zb-line bg-white p-5 shadow-[var(--zb-shadow-sm)]"
    >
      <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-ink-3">
        {t('streakTitle')}
      </h2>

      <p className="mt-3 flex items-baseline gap-2">
        <span
          dir="ltr"
          className="font-display text-4xl font-bold leading-none tabular-nums text-zb-ink"
        >
          {s.streak}
        </span>
        <span className="text-sm font-medium text-zb-ink-2">
          {t('streakDays', { n: s.streak })}
        </span>
      </p>

      <p className="mt-2 text-sm leading-relaxed text-zb-ink-2">{message}</p>

      {/* Monday to Sunday. `dir="ltr"` keeps time running left-to-right on the
          Arabic route too: a calendar strip is a chart, and charts do not
          mirror — a week that ran right-to-left would put Monday where the
          reader looks for Sunday. */}
      <ul dir="ltr" className="mt-5 flex items-end justify-between gap-1.5">
        {s.week.map((d) => (
          <li key={d.key} className="flex flex-1 flex-col items-center gap-1.5">
            <span className="w-full max-w-8">
              <DayMark
                worked={d.worked}
                today={d.key === todayKey}
                future={d.future}
              />
            </span>
            <span
              className={`font-mono text-[11px] uppercase ${
                d.future ? 'text-zb-ink-3/50' : 'text-zb-ink-3'
              }`}
            >
              {d.date.toLocaleDateString(locale, { weekday: 'narrow' })}
            </span>
          </li>
        ))}
      </ul>

      <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-zb-line pt-4">
        {[
          [s.best, t('streakBest')],
          [s.days, t('streakActive')],
        ].map(([value, label]) => (
          <div key={String(label)}>
            <dt className="sr-only">{label}</dt>
            <dd>
              <span
                dir="ltr"
                className="block text-lg font-bold tabular-nums text-zb-ink"
              >
                {value}
              </span>
              <span className="text-xs text-zb-ink-3">{label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
