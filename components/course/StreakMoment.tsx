'use client'

/**
 * The two screens that fire the first time a student works on a given day.
 *
 * DataCamp runs them back to back (`wokflow-datacamp/4-streak.png`, then
 * `5-set-goal.png`): the page ground turns dark, the streak numeral fills the
 * screen with the week's dots under it, and then — once, when there is no goal
 * yet — it asks for one. Nothing else is on either screen.
 *
 * Three rules this inherits from BRILLIANT_WORKFLOW.md §4, which studied the
 * same mechanic in another product and they all still hold:
 *
 *  1. **The loudest celebration is for showing up.** Not for being right, not
 *     for finishing — for turning up. This is the only screen in the product
 *     that recolours the whole page, and that is deliberate.
 *  2. **The size of the interruption matches the size of the achievement.**
 *     Which is why it fires once a day and never on a section boundary.
 *  3. **No monetisation in the celebration chain.** DataCamp puts an `Upgrade`
 *     button in its own header directly above this; that stays out.
 *
 * The mark is the khatim, not a lightning bolt — the same call
 * `components/StreakCard.tsx` documents. The bolt is Brilliant's, then
 * DataCamp's; the khatim is ours, and one mark per worked day is exactly where
 * it means something.
 *
 * It mounts in the reader, because reading a section is what moves the streak,
 * and it renders nothing at all until that has happened today.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { IconArrowRight } from '@tabler/icons-react'

import { KHATIM } from '@/components/landing/Zellige'
import {
  ACTIVITY_EVENT,
  GOAL_CHOICES,
  currentStreak,
  dayKey,
  markStreakSeen,
  readGoal,
  streakSeenToday,
  thisWeek,
  writeGoal,
  type Goal,
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

type Stage = 'hidden' | 'streak' | 'goal'

export default function StreakMoment() {
  const t = useTranslations('streak')
  const [stage, setStage] = useState<Stage>('hidden')
  const [streak, setStreak] = useState(0)
  const [week, setWeek] = useState<WeekDay[]>([])
  const [picked, setPicked] = useState<Goal>(GOAL_CHOICES[0])

  const check = useCallback(() => {
    // `streakSeenToday` returns true on the server and when storage is
    // unreadable, so this can only ever open on a client that has a log.
    if (streakSeenToday()) return
    const n = currentStreak()
    if (n <= 0) return
    setStreak(n)
    setWeek(thisWeek())
    setStage('streak')
    // Marked as soon as it opens, not on dismissal: a student who closes the
    // tab mid-celebration should not meet it again on the next section.
    markStreakSeen()
  }, [])

  useEffect(() => {
    check()
    window.addEventListener(ACTIVITY_EVENT, check)
    return () => window.removeEventListener(ACTIVITY_EVENT, check)
  }, [check])

  if (stage === 'hidden') return null

  const todayKey = dayKey(new Date())

  const close = () => setStage('hidden')

  // The goal is asked for once, and only after the streak screen — a student who
  // already named a number is never asked again.
  const afterStreak = () => setStage(readGoal() === null ? 'goal' : 'hidden')

  const commit = () => {
    writeGoal(picked)
    close()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={stage === 'streak' ? t('title') : t('goalTitle')}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-zb-navy px-5 py-10 text-center"
    >
      {stage === 'streak' ? (
        <>
          <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-zb-navy-line">
            <p className="flex items-center justify-center gap-4 bg-zb-navy-2/40 py-10">
              <svg viewBox="0 0 88 88" className="size-16 shrink-0" aria-hidden>
                <polygon points={starPoints(44)} className="fill-zb-mint-on-dark" />
              </svg>
              <span
                dir="ltr"
                className="font-display text-6xl font-bold leading-none tabular-nums text-white"
              >
                {streak}
              </span>
            </p>

            {/* Monday to Sunday. `dir="ltr"` keeps time running left to right on
                the Arabic route too: a calendar strip is a chart, and charts do
                not mirror. */}
            <ul
              dir="ltr"
              className="flex items-end justify-between gap-1 bg-zb-navy-2/70 px-4 py-4"
            >
              {week.map((d) => (
                <li key={d.key} className="flex flex-1 flex-col items-center gap-1.5">
                  <span className="font-mono text-[11px] uppercase text-zb-navy-dim">
                    {d.date.toLocaleDateString(undefined, { weekday: 'narrow' })}
                  </span>
                  <svg viewBox="0 0 28 28" className="w-full max-w-7" aria-hidden>
                    {/* Never filled except when earned — the same four states as
                        the dashboard strip. A filled shape reads as "done", so
                        filling a day that has not happened claims something on
                        the student's behalf. */}
                    <polygon
                      points={starPoints(14)}
                      className={
                        d.worked
                          ? 'fill-zb-mint-on-dark'
                          : d.future
                            ? 'fill-transparent stroke-zb-navy-line [stroke-width:1.5]'
                            : 'fill-transparent stroke-zb-navy-dim/50 [stroke-width:1.5]'
                      }
                    />
                    {d.key === todayKey && !d.worked && (
                      <polygon
                        points={starPoints(14)}
                        className="fill-transparent stroke-zb-gold [stroke-dasharray:3_3] [stroke-width:1.8]"
                      />
                    )}
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="mt-8 text-balance font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {t('title')}
          </h2>
          <p className="mt-3 max-w-sm leading-relaxed text-zb-navy-dim">
            {t('body', { n: streak })}
          </p>

          <button
            type="button"
            onClick={afterStreak}
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-zb-mint px-7 text-[15px] font-bold text-white transition-colors hover:bg-zb-mint-deep"
          >
            {t('continue')}
            <IconArrowRight size={18} className="rtl:rotate-180" />
          </button>
        </>
      ) : (
        <>
          <h2 className="text-balance font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {t('goalTitle')}
          </h2>
          <p className="mt-3 max-w-sm leading-relaxed text-zb-navy-dim">
            {t('goalBody')}
          </p>

          {/* A radiogroup, not three buttons: arrow keys move between the
              options and only one lands in the tab order, which is what a
              keyboard expects of a single choice. */}
          <div
            role="radiogroup"
            aria-label={t('goalTitle')}
            className="mt-8 w-full max-w-sm overflow-hidden rounded-xl border border-zb-navy-line"
          >
            {GOAL_CHOICES.map((n, i) => {
              const on = picked === n
              return (
                <button
                  key={n}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setPicked(n)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-start transition-colors ${
                    i > 0 ? 'border-t border-zb-navy-line' : ''
                  } ${on ? 'bg-zb-mint/15' : 'hover:bg-zb-navy-2'}`}
                >
                  <span className="flex items-center gap-3">
                    <svg viewBox="0 0 20 20" className="size-5 shrink-0" aria-hidden>
                      <polygon
                        points={starPoints(10)}
                        className={
                          on
                            ? 'fill-zb-mint-on-dark'
                            : 'fill-transparent stroke-zb-navy-dim/60 [stroke-width:1.5]'
                        }
                      />
                    </svg>
                    <span className="font-semibold text-white">
                      {t('goalDays', { n })}
                    </span>
                  </span>
                  <span className="text-sm text-zb-navy-dim">
                    {t(`goalLabel-${n}`)}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {/* Declining is a first-class option and is not styled as a
                mistake — the student can set a goal later from the streak card
                on their activity page. */}
            <button
              type="button"
              onClick={close}
              className="inline-flex h-12 items-center rounded-full border border-zb-navy-line px-6 text-[15px] font-semibold text-white transition-colors hover:bg-zb-navy-2"
            >
              {t('goalSkip')}
            </button>
            <button
              type="button"
              onClick={commit}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-zb-mint px-7 text-[15px] font-bold text-white transition-colors hover:bg-zb-mint-deep"
            >
              {t('goalCommit')}
              <IconArrowRight size={18} className="rtl:rotate-180" />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
