'use client'

/**
 * The parcours section of the landing page.
 *
 * Client-side because the filière lives on the device: which programme a
 * visitor sees is their answer to "SM or Sciences Exp ?", and the two are
 * genuinely different programmes, not the same list relabelled.
 *
 * Until they answer, Sciences Expérimentales is shown — the larger cohort — and
 * the section says so, with the way to change it right there. Showing nothing
 * until a choice is made would make the landing page a form.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import ChapterPath from '@/components/landing/ChapterPath'
import { Link } from '@/i18n/navigation'
import {
  DEFAULT_FILIERE,
  FILIERE_EVENT,
  readFiliere,
  type Filiere,
} from '@/lib/filiere'
import { chaptersOf } from '@/lib/programme'

export default function ProgrammeSection() {
  const t = useTranslations('home')
  const a = useTranslations('auth')
  const [filiere, setFiliere] = useState<Filiere>(DEFAULT_FILIERE)
  const [chosen, setChosen] = useState(false)

  const refresh = useCallback(() => {
    const c = readFiliere()
    setFiliere(c?.filiere ?? DEFAULT_FILIERE)
    setChosen(!!c)
  }, [])

  // localStorage does not exist during SSR, so the choice arrives after mount.
  useEffect(() => {
    refresh()
    window.addEventListener(FILIERE_EVENT, refresh)
    return () => window.removeEventListener(FILIERE_EVENT, refresh)
  }, [refresh])

  const count = chaptersOf(filiere).length

  return (
    <section className="border-b border-zb-line bg-zb-cream-2/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zb-gold-deep">
              {t('pathKicker')}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {t('pathTitle')}
            </h2>
            <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span className="inline-flex items-center rounded-full bg-zb-mint-soft px-3 py-1 font-semibold text-zb-mint">
                {a(`filiere-${filiere}`)}
              </span>
              <Link
                href="/filiere"
                className="font-medium text-zb-mint underline underline-offset-2"
              >
                {chosen ? a('changeFiliere') : a('pickFiliere')}
              </Link>
            </p>
          </div>
          <Link
            href="/courses"
            className="inline-flex h-9 items-center rounded-full border border-zb-line bg-white px-4 text-sm font-semibold text-zb-ink no-underline transition-colors hover:border-zb-mint/50"
          >
            {t('pathCta', { count })} →
          </Link>
        </div>

        <div className="mt-8 max-w-2xl rounded-2xl border border-zb-line bg-white p-5 sm:p-8">
          <ChapterPath filiere={filiere} semester={1} />
        </div>
      </div>
    </section>
  )
}
