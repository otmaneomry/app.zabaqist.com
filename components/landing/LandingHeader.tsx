'use client'

/**
 * The landing page's own header.
 *
 * Separate from `components/Header.tsx`, which is the in-app chrome (search,
 * premium, streak counter). This one is the public face: brand, two links, and
 * the way in. The XP chip is real — it totals what the checkpoints stored on
 * this device — and stays hidden until there is something to show.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import LangSwitch from '@/components/landing/LangSwitch'
import Logo from '@/components/landing/Logo'
import { listCourses } from '@/lib/courseCatalog'
import { totalXp } from '@/lib/courseProgress'

export default function LandingHeader() {
  const t = useTranslations('nav')
  const [xp, setXp] = useState(0)

  const refresh = useCallback(
    () => setXp(totalXp(listCourses().map((c) => c.slug))),
    [],
  )

  useEffect(() => {
    refresh()
    window.addEventListener('zabaqist:progress', refresh)
    return () => window.removeEventListener('zabaqist:progress', refresh)
  }, [refresh])

  return (
    <header className="sticky top-0 z-20 border-b border-zb-line bg-zb-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-6">
        <Link href="/" aria-label="Zabaqist" className="no-underline">
          <Logo size={20} />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-gray-600 md:flex">
          <Link href="/courses" className="no-underline hover:text-zb-ink">
            {t('parcours')}
          </Link>
          <Link href="/quiz/1" className="no-underline hover:text-zb-ink">
            {t('quiz')}
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch />
          {xp > 0 && (
            <span
              dir="ltr"
              className="hidden rounded-full bg-zb-saffron/20 px-3 py-1 text-xs font-semibold text-zb-gold-warm sm:inline"
            >
              ✦ {xp} XP
            </span>
          )}
          <Link
            href="/home"
            className="inline-flex h-9 items-center rounded-full bg-zb-mint px-4 text-sm font-semibold text-white no-underline transition-colors hover:bg-zb-mint-deep"
          >
            {t('dashboard')}
          </Link>
        </div>
      </div>
    </header>
  )
}
