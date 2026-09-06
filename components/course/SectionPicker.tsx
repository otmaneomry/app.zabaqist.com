'use client'

/**
 * The sections inside the open tab.
 *
 * A tab like "Exercices" is eleven sections and several megabytes of rendered
 * KaTeX, so it cannot all be one panel. These pills are the second level of
 * navigation: the tab picks the part of the chapter, this picks the page.
 *
 * A filled dot marks a section already opened, which is the only "where am I"
 * signal a document this long can give cheaply.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'

import { getCourseProgress } from '@/lib/progressTracking'

export interface PickerItem {
  id: string
  label: string
}

/** The chapters number their own headings ("1. Limite…", "A. Étude…"). Adding
 *  a position on top of that reads as "1. 1. Limite…". */
const isNumbered = (label: string) => /^([0-9]+|[A-Z])\s*[.)]/.test(label)

export default function SectionPicker({
  slug,
  items,
  activeId,
  dir = 'ltr',
}: {
  slug: string
  items: PickerItem[]
  activeId: string
  /** These labels are the document's headings, so they follow the document. */
  dir?: 'ltr' | 'rtl'
}) {
  const t = useTranslations('course')
  const [visited, setVisited] = useState<string[]>([])

  const refresh = useCallback(() => {
    setVisited(getCourseProgress(slug)?.completedTabs ?? [])
  }, [slug])

  useEffect(() => {
    refresh()
  }, [refresh, activeId])

  useEffect(() => {
    window.addEventListener('zabaqist:progress', refresh)
    return () => window.removeEventListener('zabaqist:progress', refresh)
  }, [refresh])

  // One section in the tab: the tab itself is the navigation.
  if (items.length < 2) return null

  const seen = new Set(visited)

  return (
    <nav dir={dir} aria-label={t('tabSections')} className="flex flex-wrap gap-2">
      {items.map((it, i) => {
        const active = it.id === activeId
        return (
          <Link
            key={it.id}
            href={`/courses/${slug}?s=${it.id}`}
            aria-current={active ? 'page' : undefined}
            title={it.label}
            className={`inline-flex max-w-full items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              active
                ? 'border-zb-teal bg-zb-teal text-white'
                : 'border-gray-200 bg-white text-gray-700 hover:border-zb-teal/50 hover:bg-zb-teal-soft'
            }`}
          >
            <span
              aria-hidden
              className={`size-1.5 shrink-0 rounded-full ${
                active
                  ? 'bg-white/80'
                  : seen.has(it.id)
                    ? 'bg-zb-teal'
                    : 'bg-gray-300'
              }`}
            />
            <span className="truncate">
              {isNumbered(it.label) ? it.label : `${i + 1}. ${it.label}`}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
