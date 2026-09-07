'use client'

/**
 * The dashboard layout.
 *
 * One dominant panel, one supporting rail. It used to be four stacked sections
 * on the right — a resume card, a premium banner, thirteen identical chapter
 * cards, and six recommended chapters that did not exist — which asked a
 * student to choose before they could begin.
 *
 * Gone with them: `PremiumCard`, whose entire content was "Premium users are 6x
 * more likely to reach their learning goals" (a claim nobody here can
 * substantiate, lifted from a competitor), and `RecommendedSection`, six
 * hardcoded chapter names — one of which, "Matrices et Déterminants", is not
 * in either programme — linking nowhere.
 */

import React from 'react'
import { useTranslations } from 'next-intl'

import ContinuePanel, { type ChapterShape } from '@/components/home/ContinuePanel'
import ContinueLearningSection from '@/components/ContinueLearningSection'
import StreakCard from '@/components/StreakCard'
import ComebackCard from '@/components/ComebackCard'

export default function MainContent({ shape }: { shape: ChapterShape }) {
  const t = useTranslations('dashboard')

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight text-zb-ink">
        {t('welcome')}
      </h1>

      {/* The panel leads on every width. On a phone it comes first because it
          is the reason the page was opened; the rail is context, and context
          belongs after the thing it contextualises. */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div className="space-y-8">
          <ContinuePanel shape={shape} />
          <ContinueLearningSection />
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <StreakCard />
          <ComebackCard />
        </aside>
      </div>
    </div>
  )
}
