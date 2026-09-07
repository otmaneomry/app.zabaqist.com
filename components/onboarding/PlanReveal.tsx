'use client'

/**
 * The plan reveal — the promise rendered.
 *
 * Brilliant's equivalent (BRILLIANT_WORKFLOW.md §2) is not a welcome screen: it
 * shows the whole path with one node lit and the node *before* it already
 * greyed out, so the questions just answered read as progress already banked
 * rather than as a form that was filled in.
 *
 * That is the detail worth copying exactly. Everything the reader told us is
 * spent here, visibly, in one screen.
 */

import React from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import { courseBySlug } from '@/lib/courseCatalog'
import { chapterTitle, chaptersOf, type ContentLocale } from '@/lib/programme'
import type { Filiere } from '@/lib/filiere'

export default function PlanReveal({
  filiere,
  onStart,
}: {
  filiere: Filiere
  onStart: (slug: string) => void
}) {
  const t = useTranslations('onboarding')
  const a = useTranslations('auth')
  const locale = useLocale() as ContentLocale

  const chapters = chaptersOf(filiere)
  // The first chapter that actually has a document is where "start here" points;
  // pointing at a chapter with nothing behind it would be a broken promise on
  // the very first click.
  const startIdx = Math.max(
    chapters.findIndex((c) => courseBySlug(c.slug)),
    0,
  )
  const start = chapters[startIdx]!
  // Show a window around the start so the path visibly continues past it.
  const window = chapters.slice(Math.max(startIdx - 1, 0), startIdx + 5)

  return (
    <main className="flex min-h-dvh flex-col bg-zb-cream font-display text-zb-ink">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-5 py-14 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zb-gold-deep">
          {t('planEyebrow')}
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight">
          {a(`filiere-${filiere}`)}
        </h1>

        <ol className="mt-10 space-y-1">
          {window.map((c) => {
            const isStart = c.slug === start.slug
            const before = c.n < start.n
            return (
              <li
                key={c.slug}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 ${
                  isStart ? 'bg-white shadow-sm ring-2 ring-zb-mint' : ''
                }`}
              >
                <span
                  aria-hidden
                  className={`grid size-9 shrink-0 place-items-center rounded-full text-sm font-semibold ${
                    isStart
                      ? 'bg-zb-mint text-white'
                      : before
                        ? 'bg-zb-mint/20 text-zb-mint'
                        : 'bg-black/5 text-gray-400'
                  }`}
                >
                  {before ? '✓' : c.n}
                </span>
                <span
                  className={`min-w-0 flex-1 ${
                    isStart
                      ? 'font-semibold'
                      : before
                        ? 'text-gray-500'
                        : 'text-gray-400'
                  }`}
                >
                  {chapterTitle(c, locale)}
                </span>
                {isStart && (
                  <span className="shrink-0 rounded-full bg-zb-mint-soft px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-zb-mint">
                    {t('planStartHere')}
                  </span>
                )}
              </li>
            )
          })}
        </ol>

        <button
          type="button"
          onClick={() => onStart(start.slug)}
          className="mt-10 h-14 w-full rounded-full bg-zb-ink text-base font-semibold text-white shadow-[0_3px_0_0_var(--zb-mint-deep),var(--zb-shadow-sm)] transition-transform active:translate-y-[2px] active:shadow-[0_1px_0_0_var(--zb-mint-deep)]"
        >
          {t('planCta', { chapter: chapterTitle(start, locale) })} →
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          {t('planNote')}{' '}
          <Link href="/filiere" className="underline underline-offset-2">
            {a('changeFiliere')}
          </Link>
        </p>
      </div>
    </main>
  )
}
