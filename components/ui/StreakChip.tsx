'use client'

/**
 * The current streak, as a chip in the chrome.
 *
 * DataCamp keeps `⚡ Daily Streak 1` pinned at the top of every screen, and that
 * placement is the point: regularity is the metric their retention rests on, so
 * it is never more than a glance away. This is the same idea on our own terms.
 *
 * The mark is the khatim, not a lightning bolt — the same call
 * `components/StreakCard.tsx` documents. The bolt is Brilliant's, then
 * DataCamp's; the khatim is ours, and a streak counter is one of the few places
 * it MEANS something (one mark, one run of days) rather than decorating.
 *
 * Hidden at zero, like `XpChip`: a counter that greets a student who has not
 * started with a nought is a reproach, and the streak card on the dashboard is
 * where a zero belongs, with the sentence that explains how to move it.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { KHATIM } from '@/components/landing/Zellige'
import { ACTIVITY_EVENT, currentStreak } from '@/lib/activity'

/** The eight-point star as a polygon, sized to a box of `r * 2`. */
function starPoints(r: number): string {
  const inner = r * KHATIM
  return Array.from({ length: 16 }, (_, i) => {
    const rad = i % 2 === 0 ? r : inner
    const a = (Math.PI / 8) * i - Math.PI / 2
    return `${(r + rad * Math.cos(a)).toFixed(2)},${(r + rad * Math.sin(a)).toFixed(2)}`
  }).join(' ')
}

export default function StreakChip({ className = '' }: { className?: string }) {
  const t = useTranslations('nav')
  const [streak, setStreak] = useState(0)

  const refresh = useCallback(() => setStreak(currentStreak()), [])

  useEffect(() => {
    refresh()
    window.addEventListener(ACTIVITY_EVENT, refresh)
    return () => window.removeEventListener(ACTIVITY_EVENT, refresh)
  }, [refresh])

  if (streak <= 0) return null

  return (
    <span
      dir="ltr"
      aria-label={t('streakLabel', { n: streak })}
      className={`inline-flex h-7 items-center gap-1.5 rounded-full bg-zb-mint-tint px-3 text-xs font-semibold tabular-nums text-zb-mint-deep ${className}`}
    >
      <svg viewBox="0 0 20 20" className="size-3.5" aria-hidden>
        <polygon points={starPoints(10)} className="fill-zb-mint" />
      </svg>
      {streak}
    </span>
  )
}
