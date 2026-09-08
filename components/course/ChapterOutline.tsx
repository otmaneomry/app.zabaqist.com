'use client'

/**
 * The chapter's plan, as DataCamp draws a course's chapters.
 *
 * `wokflow-datacamp/9_1-example-course.png` and `3-course-outline.png`: a
 * numbered disc, the part's name, a progress bar pinned right, and — once
 * expanded — every lesson inside it as a row with its own icon, a tick when it
 * is done, and its XP at the end. One `Start Chapter` button per part.
 *
 * It replaces `components/course/CoursePath.tsx` on this view, and the reason is
 * worth recording because the path was not a bad idea. Brilliant's serpentine
 * (BRILLIANT_WORKFLOW.md §3) made the chapter feel like a journey and made
 * "where am I" answerable at a glance. What it could not do is show **what a
 * section is worth and how much of a part is left** without becoming a chart,
 * and those two facts are what a student revising for a bac actually needs from
 * a plan. The outline answers both in the row itself.
 *
 * Three things carry over from the path and are not lost:
 *
 *  · **Nothing is locked.** DataCamp greys unavailable chapters behind a
 *    subscription; every part here is open, in any order, always. Drawing a
 *    padlock would promise a gate that does not exist.
 *  · **The tick is the khatim**, the same mark as the streak strip and the list
 *    bullets — it appears where it means "this one is done", never as chrome.
 *  · **The CTA verb carries the state** — `Commencer` / `Continuer` / `Revoir`.
 *
 * XP is shown per section, from `XP_BY_KIND`. It is what the section is worth,
 * not what the student has scored: nothing here is auto-graded.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import {
  IconChevronDown,
  IconFlask,
  IconRoute,
  IconSchool,
  IconTargetArrow,
  IconTrophy,
  type IconProps,
} from '@tabler/icons-react'

import { Link } from '@/i18n/navigation'
import { KHATIM } from '@/components/landing/Zellige'
import { getCourseProgress } from '@/lib/progressTracking'

/** One section of the chapter, flattened for this list. */
export interface OutlineView {
  id: string
  label: string
  kind: string
  xp: number
}

/** One `##` part of the chapter. */
export interface OutlinePart {
  id: string
  label: string
  kind: string
  views: OutlineView[]
}

/** Per-kind glyph, matching the trio on the dashboard so a devoir looks like a
 *  devoir wherever the student meets it. */
const KIND_ICON: Record<string, React.ComponentType<IconProps>> = {
  cours: IconSchool,
  methode: IconRoute,
  exercices: IconFlask,
  devoir: IconTargetArrow,
  bilan: IconTrophy,
}

/** The eight-point star as a polygon, sized to a box of `r * 2`. */
function starPoints(r: number): string {
  const inner = r * KHATIM
  return Array.from({ length: 16 }, (_, i) => {
    const rad = i % 2 === 0 ? r : inner
    const a = (Math.PI / 8) * i - Math.PI / 2
    return `${(r + rad * Math.cos(a)).toFixed(2)},${(r + rad * Math.sin(a)).toFixed(2)}`
  }).join(' ')
}

export default function ChapterOutline({
  slug,
  parts,
  dir = 'ltr',
}: {
  slug: string
  parts: OutlinePart[]
  dir?: 'ltr' | 'rtl'
}) {
  const t = useTranslations('course')
  // `null` until mounted — the read set lives on the device, so the server
  // renders every part closed and unread and the client fills it in.
  const [read, setRead] = useState<Set<string> | null>(null)
  const [open, setOpen] = useState<string | null>(null)

  const refresh = useCallback(() => {
    setRead(new Set(getCourseProgress(slug)?.completedTabs ?? []))
  }, [slug])

  useEffect(() => {
    refresh()
    window.addEventListener('zabaqist:progress', refresh)
    return () => window.removeEventListener('zabaqist:progress', refresh)
  }, [refresh])

  // Open the part the student is actually in, once their progress is known.
  // DataCamp ships with chapter 1 expanded; expanding the *unfinished* one is
  // the same intent applied to someone who is nine sections in.
  useEffect(() => {
    if (!read || open !== null) return
    const next = parts.find((p) => p.views.some((v) => !read.has(v.id)))
    setOpen((next ?? parts[0])?.id ?? null)
  }, [read, open, parts])

  return (
    <ol className="space-y-3">
      {parts.map((part, i) => {
        const doneCount = read
          ? part.views.filter((v) => read.has(v.id)).length
          : 0
        const total = part.views.length
        const pct = total ? Math.round((doneCount / total) * 100) : 0
        const finished = total > 0 && doneCount === total
        const expanded = open === part.id
        // Resume inside the part, not at its top: someone six sections in does
        // not want to be sent back to the first.
        const resumeAt =
          part.views.find((v) => !read?.has(v.id))?.id ?? part.views[0]?.id

        return (
          <li
            key={part.id}
            className="overflow-hidden rounded-xl border border-zb-line bg-white shadow-[var(--zb-shadow-sm)]"
          >
            <div className="flex flex-wrap items-center gap-3 px-4 py-4 sm:px-5">
              <span
                dir="ltr"
                className={`grid size-8 shrink-0 place-items-center rounded-full text-sm font-bold tabular-nums ${
                  finished
                    ? 'bg-zb-mint text-white'
                    : 'bg-zb-cream-3 text-zb-ink-2'
                }`}
              >
                {i + 1}
              </span>

              <h3
                dir={dir}
                className="min-w-0 flex-1 text-balance font-display text-base font-bold leading-snug tracking-tight text-zb-ink"
              >
                {part.label}
              </h3>

              {/* Only once opened. A row of 0% bars turns a chapter plan into a
                  picture of not having started it. */}
              {doneCount > 0 && (
                <span className="flex shrink-0 items-center gap-2.5">
                  <span
                    className="block h-1.5 w-24 overflow-hidden rounded-full bg-zb-cream-3"
                    role="progressbar"
                    aria-valuenow={pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span
                      className="block h-full rounded-full bg-zb-mint transition-[width] duration-500 motion-reduce:transition-none"
                      style={{ width: `${pct}%` }}
                    />
                  </span>
                  <span
                    dir="ltr"
                    className="font-mono text-[11px] tabular-nums text-zb-ink-3"
                  >
                    {pct}%
                  </span>
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zb-line bg-zb-cream/40 px-4 py-3 sm:px-5">
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : part.id)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-zb-mint-deep transition-colors hover:text-zb-mint"
              >
                {expanded ? t('hideSections') : t('showSections')}
                <IconChevronDown
                  size={16}
                  className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
                />
              </button>

              <Link
                href={`/courses/${slug}?s=${resumeAt}`}
                className="inline-flex h-10 items-center justify-center rounded-full bg-zb-mint px-5 text-sm font-semibold text-white no-underline transition-colors hover:bg-zb-mint-deep"
              >
                {finished
                  ? t('partReview')
                  : doneCount > 0
                    ? t('partResume')
                    : t('partStart')}
              </Link>
            </div>

            {expanded && (
              <ul className="divide-y divide-zb-line border-t border-zb-line">
                {part.views.map((view) => {
                  const Icon = KIND_ICON[view.kind] ?? IconSchool
                  const isRead = read?.has(view.id) ?? false
                  return (
                    <li key={view.id}>
                      <Link
                        href={`/courses/${slug}?s=${view.id}`}
                        className="flex items-center gap-3 px-4 py-3 no-underline transition-colors hover:bg-zb-cream-2 sm:px-5"
                      >
                        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-zb-cream-2 text-zb-ink-2">
                          <Icon size={15} stroke={1.9} />
                        </span>

                        <span
                          dir={dir}
                          className={`min-w-0 flex-1 truncate text-sm ${
                            isRead ? 'text-zb-ink-2' : 'text-zb-ink'
                          }`}
                        >
                          {view.label}
                        </span>

                        {isRead && (
                          <svg
                            viewBox="0 0 16 16"
                            className="size-4 shrink-0"
                            aria-label={t('sectionDone')}
                            role="img"
                          >
                            <polygon
                              points={starPoints(8)}
                              className="fill-zb-mint"
                            />
                          </svg>
                        )}

                        {/* What the section is worth, not what was scored. */}
                        <span
                          dir="ltr"
                          className="shrink-0 rounded bg-zb-gold/20 px-1.5 py-0.5 font-mono text-[11px] font-semibold tabular-nums text-zb-gold-deep"
                        >
                          {view.xp} XP
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
        )
      })}
    </ol>
  )
}
