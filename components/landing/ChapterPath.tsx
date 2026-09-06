'use client'

/**
 * The parcours as a vertical station trail: a left rail with node states
 * (done / current / locked), and per station the chapter title, its objective,
 * its exam-priority tag and a call to action.
 *
 * The states are real. They come from the progress this device stored, so the
 * "En cours · reprends ta progression" node is the chapter actually being read,
 * and its button resumes at the exact section — see `lib/courseProgress.ts`.
 *
 * Nothing is locked shut: a chapter with no authored document still opens, to
 * its "coming soon" page. Locking content nobody can complete would be a dead
 * end, not a difficulty curve.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import {
  chapterObjective,
  chapterTitle,
  chaptersOf,
  PRIORITY_COLORS,
  type ChapterMeta,
  type ContentLocale,
  type Semester,
} from '@/lib/programme'
import type { Filiere } from '@/lib/filiere'
import { summarize } from '@/lib/courseProgress'

type NodeState = 'done' | 'current' | 'locked'

interface Station extends ChapterMeta {
  state: NodeState
  href: string
}

/**
 * Turn saved progress into node states: a chapter is `done` once every section
 * has been opened, the first started-but-unfinished one is `current`, and with
 * nothing started chapter 1 is where you begin — not a locked door.
 */
function stationsFor(filiere: Filiere, semester: Semester): Station[] {
  // Scored over the WHOLE programme, then filtered: "current" is the first
  // unfinished chapter overall, which a per-semester pass would get wrong.
  let currentTaken = false
  const rows: Station[] = chaptersOf(filiere).map((c) => {
    const s = summarize(c.slug)
    let state: NodeState = 'locked'
    if (s.pct === 100) state = 'done'
    else if (s.started && !currentTaken) {
      state = 'current'
      currentTaken = true
    }
    return { ...c, state, href: s.href }
  })
  if (!currentTaken && !rows.some((r) => r.state === 'done')) {
    const first = rows.find((r) => r.n === 1)
    if (first) first.state = 'current'
  }
  return rows.filter((r) => r.semester === semester)
}

function StationNode({
  n,
  state,
  doneLabel,
}: {
  n: number
  state: NodeState
  doneLabel: string
}) {
  const base =
    'relative z-10 grid size-12 shrink-0 place-items-center rounded-full font-display text-xl font-semibold'
  if (state === 'done')
    return (
      <div
        className={`${base} bg-zb-mint text-white shadow-[0_8px_20px_-8px_rgba(31,100,82,0.6)]`}
        aria-label={doneLabel}
      >
        ✓
      </div>
    )
  if (state === 'current')
    return (
      <div
        className={`${base} bg-zb-saffron text-zb-ink shadow-[0_0_0_6px_rgba(224,169,46,0.25)]`}
      >
        {n}
      </div>
    )
  return (
    <div className={`${base} border border-zb-line bg-gray-100 text-gray-500`}>
      {n}
    </div>
  )
}

export default function ChapterPath({
  filiere,
  semester = 1,
}: {
  /** The programme to walk. Defaults to what this device chose. */
  filiere: Filiere
  semester?: Semester
}) {
  const t = useTranslations('path')
  const p = useTranslations('priority')
  const locale = useLocale() as ContentLocale
  // Server render shows the zero state (chapter 1 current); localStorage only
  // exists after mount, so the real states arrive in an effect.
  const [stations, setStations] = useState<Station[]>(() =>
    chaptersOf(filiere)
      .filter((c) => c.semester === semester)
      .map((c) => ({
        ...c,
        state: c.n === 1 ? 'current' : 'locked',
        href: `/courses/${c.slug}`,
      })),
  )

  const refresh = useCallback(
    () => setStations(stationsFor(filiere, semester)),
    [filiere, semester],
  )

  useEffect(() => {
    refresh()
    window.addEventListener('zabaqist:progress', refresh)
    return () => window.removeEventListener('zabaqist:progress', refresh)
  }, [refresh])

  return (
    <ol className="mt-6">
      {stations.map((c, i) => {
        const done = c.state === 'done'
        const current = c.state === 'current'
        return (
          <li key={c.slug} className="relative flex gap-5 pb-8 last:pb-0">
            {i < stations.length - 1 && (
              <span
                aria-hidden
                className={`absolute top-12 bottom-0 w-0.5 ltr:left-6 ltr:-translate-x-1/2 rtl:right-6 rtl:translate-x-1/2 ${
                  done ? 'bg-zb-mint' : 'bg-zb-line'
                }`}
              />
            )}
            <StationNode n={c.n} state={c.state} doneLabel={t('nodeDone')} />
            <div className="min-w-0 pt-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-display text-xl font-bold leading-tight tracking-tight">
                  {chapterTitle(c, locale)}
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium">
                  <span
                    aria-hidden
                    className="size-2 rounded-full"
                    style={{ background: PRIORITY_COLORS[c.priority] }}
                  />
                  {p(c.priority)}
                </span>
              </div>
              <p className="mt-1 max-w-[58ch] text-sm leading-relaxed text-gray-600">
                {current
                  ? t('current')
                  : done
                    ? t('done')
                    : chapterObjective(c, locale)}
              </p>
              <Link
                href={c.href}
                className={`mt-2.5 inline-flex h-9 items-center rounded-lg text-sm font-semibold transition-colors ${
                  current
                    ? 'bg-zb-mint px-4 text-white hover:bg-zb-mint-deep'
                    : done
                      ? 'text-zb-mint hover:underline'
                      : 'text-gray-500 hover:text-zb-ink'
                }`}
              >
                {current ? t('ctaCurrent') : done ? t('ctaDone') : t('ctaLocked')} →
              </Link>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
