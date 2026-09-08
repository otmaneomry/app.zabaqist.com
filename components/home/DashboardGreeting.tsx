'use client'

/**
 * The line that opens the dashboard: who you are, what you have banked, whether
 * you showed up.
 *
 * DataCamp's is `[avatar] Hey, Otmane! / 450 XP` on the left and a `Daily
 * Streak 1` pill on the right, and the ordering is the whole argument — the
 * student's name and their own totals come before any course, any button and
 * any offer. It costs one row and it is the difference between a dashboard and
 * a directory.
 *
 * Their row also carries a `Review 0` pill for a spaced-repetition queue. We do
 * not have one, and a pill reading `Révisions 0` wired to nothing is precisely
 * the invented chrome this codebase keeps having to delete — see `MainContent`
 * on `PremiumCard`, `StreakCard` on its hardcoded `33`. The slot stays empty
 * until there is a queue behind it.
 *
 * Both figures come from this device, so both start at their zero and fill after
 * mount; the server cannot know them and must not print a guess.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { KHATIM } from '@/components/landing/Zellige'
import { ACTIVITY_EVENT, currentStreak } from '@/lib/activity'
import { listCourses } from '@/lib/courseCatalog'
import { totalXp } from '@/lib/courseProgress'

/** The eight-point star as a polygon, sized to a box of `r * 2`. */
function starPoints(r: number): string {
  const inner = r * KHATIM
  return Array.from({ length: 16 }, (_, i) => {
    const rad = i % 2 === 0 ? r : inner
    const a = (Math.PI / 8) * i - Math.PI / 2
    return `${(r + rad * Math.cos(a)).toFixed(2)},${(r + rad * Math.sin(a)).toFixed(2)}`
  }).join(' ')
}

export default function DashboardGreeting({
  name,
  image,
}: {
  name?: string | null
  image?: string | null
}) {
  const t = useTranslations('dashboard')
  const [xp, setXp] = useState(0)
  const [streak, setStreak] = useState(0)

  const refresh = useCallback(() => {
    setXp(totalXp(listCourses().map((c) => c.slug)))
    setStreak(currentStreak())
  }, [])

  useEffect(() => {
    refresh()
    for (const e of ['zabaqist:progress', ACTIVITY_EVENT])
      window.addEventListener(e, refresh)
    return () => {
      for (const e of ['zabaqist:progress', ACTIVITY_EVENT])
        window.removeEventListener(e, refresh)
    }
  }, [refresh])

  // Google gives a full name; the greeting wants the first word of it. A student
  // called "Otmane Omry" is greeted as Otmane, not as their whole record.
  const first = name?.trim().split(/\s+/)[0]

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element -- Google's CDN, sized here, not a layout image worth a loader.
          <img
            src={image}
            alt=""
            width={52}
            height={52}
            referrerPolicy="no-referrer"
            className="size-11 shrink-0 rounded-full object-cover sm:size-13"
          />
        ) : (
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-zb-mint-tint sm:size-13">
            <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
              <polygon points={starPoints(12)} className="fill-zb-mint" />
            </svg>
          </span>
        )}

        <div className="min-w-0">
          <h1 className="truncate font-display text-xl font-bold tracking-tight text-zb-ink sm:text-2xl">
            {first ? t('welcomeNamed', { name: first }) : t('welcome')}
          </h1>
          {/* Hidden at zero, like every other counter in the product: a total of
              nought under a student's own name is a reproach, not information. */}
          {xp > 0 && (
            <p
              dir="ltr"
              className="mt-0.5 font-mono text-sm tabular-nums text-zb-ink-2"
            >
              {xp} XP
            </p>
          )}
        </div>
      </div>

      {streak > 0 && (
        <span
          dir="ltr"
          className="inline-flex h-11 shrink-0 items-center gap-2.5 rounded-full border border-zb-line bg-white px-4 shadow-[var(--zb-shadow-sm)]"
        >
          <svg viewBox="0 0 22 22" className="size-4.5" aria-hidden>
            <polygon points={starPoints(11)} className="fill-zb-mint" />
          </svg>
          <span className="whitespace-nowrap text-sm font-semibold text-zb-ink-2">
            {t('streakTitle')}
          </span>
          <span className="text-sm font-bold tabular-nums text-zb-ink">
            {streak}
          </span>
        </span>
      )}
    </div>
  )
}
