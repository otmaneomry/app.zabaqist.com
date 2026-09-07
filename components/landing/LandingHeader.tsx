'use client'

/**
 * The landing page's own header.
 *
 * Separate from `components/Header.tsx`, which is the in-app chrome (the three
 * nav tabs, premium). This one is the public face: brand, two links, and the
 * way in. Both share the same surface, height and wordmark, and both draw the
 * XP chip from `components/ui/XpChip.tsx` so they cannot show two totals.
 *
 * ⚠️ THE TWO NAV LINKS USED TO VANISH ON MOBILE. They were `hidden … md:flex`,
 * and unlike `components/Header.tsx` — which moves its nav into a drawer below
 * `md` — nothing replaced them here. So on the device this audience actually
 * uses, the public header offered exactly one destination, and Parcours and
 * Quiz were unreachable from the top of the page.
 *
 * ⚠️ AND THEY DO NOT FIT ON ONE ROW. Simply un-hiding them is worse than hiding
 * them: brand + 2 links + toggle + "Mon tableau de bord" needs ~470px, the
 * viewport is 390px, and the three middle items collapse ON TOP of each other —
 * measured, not guessed. So the row WRAPS below `sm`: brand and the way in stay
 * on line one, the two nav links take their own line underneath. That is the
 * same answer the marketing site reached for the same reason (see its
 * CLAUDE.md: "they wrap to their own row instead of disappearing"), and it
 * costs ~40px of header height on a page that is thousands of pixels long.
 *
 * The dashboard link is `h-11` (44px), not `h-9`: 36px is under every mobile
 * target guideline, and it is the primary action on the page. Its label is
 * `whitespace-nowrap` because "Mon tableau de bord" wrapped to two lines at
 * 390px and pushed the header off its 64px grid.
 */

import React from 'react'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import LangSwitch from '@/components/landing/LangSwitch'
import Logo from '@/components/landing/Logo'
import XpChip from '@/components/ui/XpChip'

export default function LandingHeader() {
  const t = useTranslations('nav')

  return (
    <header className="sticky top-0 z-20 border-b border-zb-line bg-zb-cream/85 backdrop-blur-md">
      {/* `flex-wrap` + `order-last` on the nav is the whole mobile layout: two
          rows under `sm`, the original single 64px row from `sm` up. */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-2 gap-y-0 px-4 py-1 sm:h-16 sm:flex-nowrap sm:gap-3 sm:px-6 sm:py-0">
        <Link
          href="/"
          aria-label="Zabaqist"
          className="inline-flex min-h-11 shrink-0 items-center no-underline"
        >
          <Logo size={20} />
        </Link>

        <nav className="order-last flex w-full items-center gap-5 border-t border-zb-line/60 pt-0.5 text-sm text-zb-ink-2 sm:order-none sm:w-auto sm:gap-5 sm:border-0 sm:pt-0">
          <Link
            href="/courses"
            className="inline-flex min-h-11 items-center whitespace-nowrap no-underline hover:text-zb-ink"
          >
            {t('parcours')}
          </Link>
          <Link
            href="/quiz"
            className="inline-flex min-h-11 items-center whitespace-nowrap no-underline hover:text-zb-ink"
          >
            {t('quiz')}
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch />
          <XpChip className="max-sm:hidden" />
          <Link
            href="/home"
            className="inline-flex h-11 shrink-0 items-center whitespace-nowrap rounded-full bg-zb-mint px-4 text-[13px] font-semibold text-white no-underline transition-colors hover:bg-zb-mint-deep sm:text-sm"
          >
            {t('dashboard')}
          </Link>
        </div>
      </div>
    </header>
  )
}
