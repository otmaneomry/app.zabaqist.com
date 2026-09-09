'use client'

/**
 * The dashboard.
 *
 * Laid out as DataCamp's `Learn → Dashboard` (`wokflow-datacamp/7_1-learn.png`):
 * one full-width column, top to bottom, each band answering one question.
 *
 *   greeting     who am I, what have I banked, did I show up
 *   resume strip what is the one thing to press
 *   trio         what else could I do that is not reading
 *   pick-up list what else is in flight
 *   discovery    where is everything
 *
 * Two things left this file to get here.
 *
 * **The right rail is gone.** It held `StreakCard` and `ComebackCard`, and both
 * moved to `/progres` — which is DataCamp's split exactly: the dashboard routes
 * you into work, "My Activity" is where you go to look at yourself. The streak
 * has not been demoted; its number is in the greeting and in the header chip,
 * one glance from anywhere. What moved is the *week strip and the totals*, which
 * are a thing you study, not a thing you check.
 *
 * **The thirteen-tile grid is gone**, and this is the reversal worth being
 * explicit about, because the version of this file being replaced argued for
 * keeping it — as "a way to overrule" the panel's choice of chapter. The
 * override is still there; it is now a link to `/courses`, where the catalogue
 * has filters, branch grouping and room to be read. What the grid actually cost
 * on the dashboard was the fold: thirteen equal tiles under a strip that had
 * just made a recommendation is the product taking its own advice back.
 */

import React from 'react'
import { useTranslations } from 'next-intl'
import { IconArrowRight } from '@tabler/icons-react'

import { Link } from '@/i18n/navigation'
import type { ChapterShape } from '@/lib/chapterShape'
import DashboardGreeting from '@/components/home/DashboardGreeting'
import KindTrio from '@/components/home/KindTrio'
import PickUpList from '@/components/home/PickUpList'
import ResumeBanner from '@/components/home/ResumeBanner'
import { useChapterStates } from '@/components/home/useChapterStates'

/** Where the catalogue is. Two rows, because there are two of them. */
const DISCOVERY = [
  { href: '/courses', key: 'chapters' },
  { href: '/quiz', key: 'revision' },
] as const

export default function MainContent({
  shape,
  name,
  image,
}: {
  shape: ChapterShape
  name?: string | null
  image?: string | null
}) {
  const t = useTranslations('dashboard')
  const tn = useTranslations('nav')
  const { ready, all, current, inProgress } = useChapterStates(shape)

  return (
    <>
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4 py-6 sm:px-6 sm:py-8">
        <DashboardGreeting name={name} image={image} />

        <ResumeBanner state={current} ready={ready} />

        {/* Ordered after the strip on purpose: the trio is the alternative to
            the recommendation, and an alternative offered before the
            recommendation is just a fourth choice. */}
        <KindTrio states={all} ready={ready} />

        <PickUpList states={inProgress} current={current} ready={ready} />
      </div>

      {/* The source ends the page on a band of a different ground — the signal
          that the dashboard is over and this is the way out of it. Cream-2
          rather than the source's grey: on our ground a neutral grey reads as
          dirt (see the shadow note in app/globals.css). */}
      <div className="border-t border-zb-line bg-zb-cream-2">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 text-center sm:px-6">
          <h2 className="font-display text-lg font-bold tracking-tight text-zb-ink">
            {t('discoverTitle')}
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {DISCOVERY.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-zb-line bg-white px-5 text-sm font-semibold text-zb-ink no-underline transition-colors hover:border-zb-mint hover:text-zb-mint-deep"
              >
                {tn(key)}
                <IconArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
