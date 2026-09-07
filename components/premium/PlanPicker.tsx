'use client'

/**
 * The two announced plans, and an honest button.
 *
 * The button goes to the waitlist rather than a checkout, because there is no
 * checkout: nothing in this repository takes a payment. The page it replaced
 * said "S'abonner maintenant" on a button with no handler at all, which is the
 * one thing a pricing page must never do.
 *
 * Prices come from the caller, which reads them from one place, so the figure
 * in the toggle and the figure in the note can never disagree.
 */

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

export interface Plan {
  id: 'annual' | 'monthly'
  /** Dirhams for one `period`. */
  price: number
  /** The undiscounted price for the same period, when there is one. */
  was?: number
  /**
   * What `price` buys. Carried per plan rather than assumed: with both labelled
   * "/mois" the yearly plan read as 399 DH a month beside a monthly plan at 50,
   * which is eight times the price for the cheaper option.
   */
  period: 'month' | 'year'
}

export default function PlanPicker({
  plans,
  waitlist,
}: {
  plans: Plan[]
  waitlist: string
}) {
  const t = useTranslations('premium')
  const [id, setId] = useState<Plan['id']>(plans[0]?.id ?? 'annual')
  const plan = plans.find((p) => p.id === id) ?? plans[0]

  return (
    <div className="rounded-2xl border border-zb-line bg-white p-5 shadow-[var(--zb-shadow-md)] sm:p-6">
      <div
        role="radiogroup"
        aria-label={t('plansTitle')}
        className="flex gap-2 rounded-full bg-zb-cream-2 p-1"
      >
        {plans.map((p) => {
          const on = p.id === id
          return (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => setId(p.id)}
              className={`flex h-10 flex-1 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors ${
                on
                  ? 'bg-white text-zb-ink shadow-[var(--zb-shadow-sm)]'
                  : 'text-zb-ink-2 hover:text-zb-ink'
              }`}
            >
              {t(p.id === 'annual' ? 'planAnnual' : 'planMonthly')}
              {p.id === 'annual' && (
                <span className="rounded-full bg-zb-mint-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-zb-mint-deep">
                  {t('planPopular')}
                </span>
              )}
            </button>
          )
        })}
      </div>

      <p className="mt-6 flex items-baseline justify-center gap-2" dir="ltr">
        {plan?.was && (
          <span className="font-mono text-sm text-zb-ink-3 line-through">
            {plan.was} DH
          </span>
        )}
        <span className="font-display text-4xl font-bold tabular-nums text-zb-ink">
          {plan?.price} DH
        </span>
        <span className="text-sm text-zb-ink-2">
          {t(plan?.period === 'year' ? 'perYear' : 'perMonth')}
        </span>
      </p>

      {/* What a year works out to per month, so the two plans can be compared
          at all. Rounded down to the dirham; the exact figure is above. */}
      {plan?.period === 'year' && (
        <p className="mt-1 text-center text-sm text-zb-ink-2">
          {t('annualEquivalent', { n: Math.round(plan.price / 12) })}
        </p>
      )}

      <a
        href={waitlist}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-zb-mint px-6 text-[15px] font-bold text-white no-underline shadow-[0_3px_0_0_var(--zb-mint-deep),var(--zb-shadow-sm)] transition-colors hover:bg-zb-mint-deep"
      >
        {t('cta')}
      </a>

      <p className="mt-3 text-center text-xs leading-relaxed text-zb-ink-3">
        {t('ctaNote')}
      </p>
      <p className="mt-3 text-center text-xs leading-relaxed text-zb-ink-3">
        {t(id === 'annual' ? 'annualNote' : 'monthlyNote')}
      </p>
    </div>
  )
}
