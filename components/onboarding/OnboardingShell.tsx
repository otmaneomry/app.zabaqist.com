'use client'

/**
 * The funnel's frame: a segmented progress bar, a back chevron, and nothing else.
 *
 * No header, no footer, no sign-in link, no skip. The first click into the
 * funnel removes every exit — and the progress bar deliberately does NOT render
 * on the welcome step, so the reader commits before learning how long this is.
 *
 * Segments rather than a single bar, and no "n of m" counter: the reader sees
 * movement without seeing a length they can bargain with.
 */

import React from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useLocale } from 'next-intl'

import type { Step } from '@/lib/onboarding'

const SEGMENTS = [1, 2] as const

export default function OnboardingShell({
  step,
  onBack,
  backLabel,
  children,
}: {
  step: Step
  /** Absent on the first step — there is nowhere back to go. */
  onBack?: () => void
  backLabel: string
  children: React.ReactNode
}) {
  const rtl = useLocale() === 'ar'
  const Chevron = rtl ? IconChevronRight : IconChevronLeft

  return (
    <main className="flex min-h-dvh flex-col bg-zb-cream font-display text-zb-ink">
      <header className="flex items-center gap-4 px-5 pt-6 sm:px-8">
        <button
          type="button"
          onClick={onBack}
          aria-label={backLabel}
          className={`grid size-9 shrink-0 place-items-center rounded-full transition-colors hover:bg-black/5 ${
            onBack ? '' : 'invisible'
          }`}
        >
          <Chevron size={22} />
        </button>

        {/* Mounted only from the first question onward. */}
        {step.kind !== 'welcome' && (
          <div className="flex flex-1 gap-2" aria-hidden>
            {SEGMENTS.map((n) => {
              const fill =
                step.segment > n ? 100 : step.segment === n ? step.fill : 0
              return (
                <div
                  key={n}
                  className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/10"
                >
                  <div
                    className="h-full rounded-full bg-zb-mint transition-[width] duration-500"
                    style={{ width: `${fill}%` }}
                  />
                </div>
              )
            })}
          </div>
        )}
      </header>

      {/* pb leaves room for the fixed Continue button. */}
      <div className="flex flex-1 flex-col items-center justify-center px-5 pb-40 pt-10 sm:px-8">
        <div className="w-full max-w-[560px]">{children}</div>
      </div>
    </main>
  )
}
