'use client'

/**
 * The chapters that exist, for the student's own filière.
 *
 * Everything else on `/courses` is a hardcoded grid of thumbnails that leads to
 * a "coming soon" card. This section lists what a student can actually open,
 * and it is built from `content/course/` — adding a markdown chapter adds a
 * card here with no further edit.
 *
 * Client-side because the filière lives on the device, and SM and Sciences Exp
 * do not have the same chapters. A visitor who has not chosen sees the default
 * programme, with the question right above it.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { IconArrowRight, IconBook } from '@tabler/icons-react'

import { Link } from '@/i18n/navigation'
import {
  branchLabel,
  courseDescription,
  courseTitle,
  listByBranch,
  type ContentLocale,
} from '@/lib/courseCatalog'
import {
  DEFAULT_FILIERE,
  FILIERE_EVENT,
  readFiliere,
  type Filiere,
} from '@/lib/filiere'

export default function CourseCatalog() {
  const t = useTranslations('catalog')
  const a = useTranslations('auth')
  const locale = useLocale() as ContentLocale
  const [filiere, setFiliere] = useState<Filiere>(DEFAULT_FILIERE)
  const [chosen, setChosen] = useState(false)

  const refresh = useCallback(() => {
    const c = readFiliere()
    setFiliere(c?.filiere ?? DEFAULT_FILIERE)
    setChosen(!!c)
  }, [])

  useEffect(() => {
    refresh()
    window.addEventListener(FILIERE_EVENT, refresh)
    return () => window.removeEventListener(FILIERE_EVENT, refresh)
  }, [refresh])

  const groups = listByBranch(filiere)

  return (
    <section className="mb-12">
      <h2 className="mb-1 text-2xl font-bold">{t('title')}</h2>
      <p className="mb-4 text-gray-600">{t('sub')}</p>

      <p className="mb-6 flex flex-wrap items-center gap-2 text-sm">
        <span className="text-gray-500">{a('current')} :</span>
        <span className="inline-flex items-center rounded-full bg-zb-mint-soft px-3 py-1 font-semibold text-zb-mint-deep">
          {a(`filiere-${filiere}`)}
        </span>
        <Link
          href="/filiere?next=/courses"
          className="font-medium text-zb-mint-deep underline underline-offset-2"
        >
          {chosen ? a('changeFiliere') : a('pickFiliere')}
        </Link>
      </p>

      {groups.map(({ branch, courses }) => (
        <div key={branch} className="mb-10 last:mb-0">
          {/* The heading only earns its space when there is a second group to
              tell it apart from — a Sciences Exp student has one thread, and
              labelling it "Analyse" would name a distinction they never meet. */}
          {groups.length > 1 && (
            <h3 className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-zb-mint-deep">
              {branchLabel(branch, locale)}
              <span className="h-px flex-1 bg-zb-line" />
              <span className="font-mono text-xs font-medium normal-case tracking-normal text-gray-500">
                {t('branchCount', { count: courses.length })}
              </span>
            </h3>
          )}

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/courses/${c.slug}`}
                  className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-zb-mint/40 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-zb-mint-soft text-zb-mint-deep">
                      <IconBook size={20} />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
                      {t('chapterMeta', { n: c.n, semester: c.semester })}
                    </span>
                  </div>
                  <h4 className="mt-3 text-lg font-bold tracking-tight">
                    {courseTitle(c, locale)}
                  </h4>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-gray-600">
                    {courseDescription(c, locale)}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-zb-mint-deep">
                    {t('open')}
                    <IconArrowRight size={16} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
