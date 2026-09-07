'use client'

/**
 * What this student has actually done — the honest replacement for a ranking.
 *
 * This card used to read: "🏆 It s comeback time! You finished #26 and kept
 * your spot in the Hydrogen League", above a Continue button that did nothing.
 * There is no league, there is no #26, and there never will be: leagues and
 * public ranking are the one thing this product's design explicitly refused
 * (see BRILLIANT_WORKFLOW.md). It was a competitor's screenshot transcribed
 * into JSX, and it told every student the same invented sentence.
 *
 * What replaces it is the same motivation without the lie. XP, sections read
 * and time spent are real, they are this reader's own, and they are compared
 * to nobody — which is stated on the card rather than merely being true, so a
 * student knows the number is theirs and not a position in a table.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { ACTIVITY_EVENT, lifetime } from '@/lib/activity'
import { listCourses } from '@/lib/courseCatalog'
import { totalXp } from '@/lib/courseProgress'

interface Totals {
  xp: number
  sections: number
  minutes: number
}

export default function ComebackCard() {
  const t = useTranslations('dashboard')
  const [total, setTotal] = useState<Totals>({ xp: 0, sections: 0, minutes: 0 })

  const read = useCallback(() => {
    const life = lifetime()
    setTotal({
      xp: totalXp(listCourses().map((c) => c.slug)),
      sections: life.sections,
      minutes: Math.round(life.seconds / 60),
    })
  }, [])

  useEffect(() => {
    read()
    for (const e of [ACTIVITY_EVENT, 'zabaqist:progress'])
      window.addEventListener(e, read)
    return () => {
      for (const e of [ACTIVITY_EVENT, 'zabaqist:progress'])
        window.removeEventListener(e, read)
    }
  }, [read])

  const started = total.xp > 0 || total.sections > 0 || total.minutes > 0

  const rows: [number, string][] = [
    [total.xp, t('workXp')],
    [total.sections, t('workSections')],
    [total.minutes, t('workTime')],
  ]

  return (
    <section
      aria-label={t('workTitle')}
      className="rounded-2xl border border-zb-line bg-white p-5 shadow-[var(--zb-shadow-sm)]"
    >
      <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-ink-3">
        {t('workTitle')}
      </h2>

      {started ? (
        <>
          {/* A row of figures, not three boxes: nested cards inside a card is
              always the wrong answer, and these belong together. */}
          <dl className="mt-4 space-y-3">
            {rows.map(([value, label]) => (
              <div key={label} className="flex items-baseline gap-3">
                <dt className="sr-only">{label}</dt>
                <dd className="contents">
                  <span
                    dir="ltr"
                    className="min-w-12 text-right font-display text-2xl font-bold leading-none tabular-nums text-zb-mint-deep"
                  >
                    {value}
                  </span>
                  <span className="text-sm text-zb-ink-2">{label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 border-t border-zb-line pt-4 text-xs leading-relaxed text-zb-ink-3">
            {t('workPrivate')}
          </p>
        </>
      ) : (
        // An empty state that says what makes the number move, rather than
        // "nothing here" — the counter is otherwise indistinguishable from a
        // broken one.
        <p className="mt-3 text-sm leading-relaxed text-zb-ink-2">
          {t('workNone')}
        </p>
      )}
    </section>
  )
}
