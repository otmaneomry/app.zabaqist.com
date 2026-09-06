'use client'

/**
 * Total XP banked on this device, as a chip.
 *
 * Shared by both headers so the public page and the app cannot drift into
 * showing the reader two different totals. The in-app header used to print a
 * bare `<span>0</span>` — hardcoded, wired to nothing, and unlabelled, so it
 * read as a rendering fault rather than a score.
 *
 * Hidden at zero rather than shown as "0 XP": the chip is there to reflect
 * work done, and a counter that greets a new reader with nought is a reproach.
 *
 * No star glyph. The khatim is the brand's one mark and it means "item in a
 * list" (see `.zb-star-list` in app/globals.css); a decorative ✦ next to a
 * number is exactly the sprinkled-chrome use that principle exists to refuse.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { listCourses } from '@/lib/courseCatalog'
import { totalXp } from '@/lib/courseProgress'

export default function XpChip({ className = '' }: { className?: string }) {
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

  if (xp <= 0) return null

  return (
    <span
      // The number and its unit are LTR even on the Arabic route.
      dir="ltr"
      aria-label={t('xpLabel', { xp })}
      className={`inline-flex h-7 items-center rounded-full bg-zb-gold/20 px-3 text-xs font-semibold tabular-nums text-zb-gold-deep ${className}`}
    >
      {xp} XP
    </span>
  )
}
