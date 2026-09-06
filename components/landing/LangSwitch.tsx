'use client'

/**
 * Locale toggle.
 *
 * Renders the OTHER language in its own script — "العربية" while reading
 * French, "Français" while reading Arabic — which is how a bilingual reader
 * spots it without having to read the current one first.
 *
 * It keeps the reader on the page they are on: `usePathname` from next-intl is
 * locale-stripped, so switching from `/courses/limites-et-continuite` lands on
 * `/ar/courses/limites-et-continuite`, not back at the home page.
 */

import React from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { Link, usePathname } from '@/i18n/navigation'
import type { Locale } from '@/i18n/routing'

export default function LangSwitch({
  className = '',
}: {
  className?: string
}) {
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const t = useTranslations('lang')
  const other: Locale = locale === 'fr' ? 'ar' : 'fr'

  return (
    <Link
      href={pathname}
      locale={other}
      aria-label={t('label')}
      className={`inline-flex h-8 items-center rounded-full border border-zb-line px-3 text-xs font-medium text-gray-600 no-underline transition-colors hover:border-zb-mint/40 hover:text-zb-ink ${className}`}
    >
      {t('switch')}
    </Link>
  )
}
