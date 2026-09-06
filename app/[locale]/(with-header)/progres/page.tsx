import React from 'react'
import { getTranslations } from 'next-intl/server'

import ProgressDashboard from '@/components/progress/ProgressDashboard'

export async function generateMetadata() {
  const t = await getTranslations('progress')
  return { title: `${t('title')} · Zabaqist`, description: t('sub') }
}

export default function ProgresPage() {
  return <ProgressDashboard />
}
