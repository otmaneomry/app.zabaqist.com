'use client'

/**
 * The next step, reachable no matter how far the reader has scrolled.
 *
 * Brilliant pins this to the bottom of the course page (BRILLIANT_WORKFLOW.md
 * §3) and lets **the CTA verb carry the state** — `Start` before you have begun,
 * `Continue` once you have. The card never says how much is left: it is a
 * bookmark, not a summary.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import { getCourseProgress } from '@/lib/progressTracking'

export default function StickyNextCard({
  slug,
  nodes,
  dir = 'ltr',
}: {
  slug: string
  nodes: { id: string; label: string }[]
  dir?: 'ltr' | 'rtl'
}) {
  const t = useTranslations('course')
  const [visited, setVisited] = useState<string[] | null>(null)

  const refresh = useCallback(() => {
    setVisited(getCourseProgress(slug)?.completedTabs ?? [])
  }, [slug])

  useEffect(() => {
    refresh()
    window.addEventListener('zabaqist:progress', refresh)
    return () => window.removeEventListener('zabaqist:progress', refresh)
  }, [refresh])

  // Before the read lands, offer the first section — the same thing a fresh
  // device would see, so nothing shifts under the reader's thumb.
  const seen = new Set(visited ?? [])
  const started = seen.size > 0
  const next = nodes.find((n) => !seen.has(n.id))

  if (!next) {
    return (
      <div className="sticky bottom-4 mt-8 rounded-2xl border border-zb-line bg-white p-4 text-center text-sm text-gray-600 shadow-lg">
        {t('pathDoneAll')}
      </div>
    )
  }

  return (
    <div
      dir={dir}
      className="sticky bottom-4 mt-8 rounded-2xl border border-zb-line bg-white p-4 shadow-lg"
    >
      <p className="mb-3 text-center text-sm font-semibold">{next.label}</p>
      <Link
        href={`/courses/${slug}?s=${next.id}`}
        className="flex h-12 w-full items-center justify-center rounded-xl bg-zb-mint text-base font-semibold text-white no-underline transition-colors hover:bg-zb-mint-deep"
      >
        {started ? t('pathContinue') : t('pathStart')}
      </Link>
    </div>
  )
}
