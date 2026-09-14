import React from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import ProgressDashboard from '@/components/progress/ProgressDashboard'
import { alternatesFor } from '@/lib/publicPaths'

/**
 * `alternates` for the same reason every other page now sets it: the root
 * layout's belongs to the root page, Next merges metadata shallowly, and
 * inheriting it made the dashboard tell a crawler its canonical URL was the
 * homepage.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const l = locale === 'ar' ? 'ar' : 'fr'
  const t = await getTranslations({ locale: l, namespace: 'progress' })

  return {
    title: `${t('title')} · Zabaqist`,
    description: t('sub'),
    alternates: alternatesFor('/progres', l),
  }
}

export default function ProgresPage() {
  return <ProgressDashboard />
}
