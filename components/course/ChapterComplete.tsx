'use client'

/**
 * The chapter payout — a chrome-free full-screen takeover.
 *
 * Brilliant runs three of these back to back (lesson → streak → map) sharing one
 * skeleton: illustration → numeral → heading → stat row → dark pill CTA. Two
 * departures here (BRILLIANT_WORKFLOW.md §4, §6):
 *
 *  · **One takeover, not three.** The other two celebrate a streak, and this
 *    product deliberately has no streak to celebrate.
 *  · **No monetisation in the chain.** Brilliant puts a promo bar directly above
 *    the reward the reader just earned; that stays out of here.
 *
 * XP pays for *completion*, which is why the numeral is the points total and
 * there is no accuracy score — nothing in this chapter is auto-graded.
 *
 * It fires once per chapter, then never again: a celebration that repeats on
 * every visit is wallpaper.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Khatam } from '@/components/landing/Zellige'
import { getCourseProgress } from '@/lib/progressTracking'

const seenKey = (slug: string) => `zabaqist:celebrated:${slug}`

export default function ChapterComplete({
  slug,
  viewIds,
  xpByView,
}: {
  slug: string
  viewIds: string[]
  xpByView: Record<string, number>
}) {
  const t = useTranslations('course')
  const [open, setOpen] = useState(false)
  const [xp, setXp] = useState(0)

  const check = useCallback(() => {
    const seen = getCourseProgress(slug)?.completedTabs ?? []
    const done = viewIds.every((id) => seen.includes(id))
    if (!done) return
    try {
      if (localStorage.getItem(seenKey(slug))) return
      localStorage.setItem(seenKey(slug), new Date().toISOString())
    } catch {
      /* storage unavailable — celebrate this once, in memory */
    }
    // The points the chapter advertises on its own card ("… · 400 points"),
    // paid in full for finishing it. XP pays for COMPLETION — scoring the
    // celebration on checkpoints attempted would hand a reader who read all 33
    // sections a number like 6, which reads as a rebuke rather than a reward.
    setXp(viewIds.reduce((sum, id) => sum + (xpByView[id] ?? 0), 0))
    setOpen(true)
    // xpByView is rebuilt each render but keyed by the ids.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, viewIds.join(',')])

  useEffect(() => {
    check()
    window.addEventListener('zabaqist:progress', check)
    return () => window.removeEventListener('zabaqist:progress', check)
  }, [check])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zb-cream px-6 text-center"
    >
      <span aria-hidden className="animate-[pulse_2s_ease-in-out_infinite]">
        <svg width={96} height={96} viewBox="-48 -48 96 96">
          <Khatam size={92} stroke="var(--zb-mint)" fill="var(--zb-mint)" strokeWidth={0} />
          <Khatam size={52} stroke="var(--zb-cream)" fill="var(--zb-cream)" strokeWidth={0} />
        </svg>
      </span>

      <p dir="ltr" className="mt-8 font-display text-6xl font-bold text-zb-mint">
        {xp}
      </p>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-gray-500">
        {t('donePoints')}
      </p>

      <h2 className="mt-6 font-display text-3xl font-bold">{t('doneTitle')}</h2>
      <p className="mt-3 max-w-sm leading-relaxed text-gray-600">
        {t('doneSub', { sections: viewIds.length })}
      </p>

      <button
        type="button"
        onClick={() => setOpen(false)}
        className="mt-10 h-14 w-full max-w-[420px] rounded-full bg-zb-ink text-base font-semibold text-white shadow-[0_3px_0_0_var(--zb-mint-deep),var(--zb-shadow-sm)] transition-transform active:translate-y-[2px] active:shadow-[0_1px_0_0_var(--zb-mint-deep)]"
      >
        {t('doneCta')}
      </button>
    </div>
  )
}
