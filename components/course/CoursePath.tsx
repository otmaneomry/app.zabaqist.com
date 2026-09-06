'use client'

/**
 * The chapter as a journey, not a table of contents.
 *
 * Adapted from Brilliant (BRILLIANT_WORKFLOW.md §3): a vertical path where
 * **exactly one node is lit** and every other node is desaturated, so the eye
 * cannot land anywhere but the next action. Levels are labelled runs of nodes on
 * one continuous scroll — there is no level page to drill into.
 *
 * Two deliberate departures from the source:
 *  · **Nothing is locked.** Brilliant greys unreached nodes *and* blocks them.
 *    Here upcoming nodes are desaturated but still open — locking content a
 *    student could learn from is a dead end, not a difficulty curve. Only the
 *    *emphasis* is sequential.
 *  · The "you are here" pin is the **khatim**, the same mark as the logo and the
 *    favicon, rather than a separate glyph.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Khatam } from '@/components/landing/Zellige'
import { Link } from '@/i18n/navigation'
import { getCourseProgress } from '@/lib/progressTracking'

export interface PathNode {
  id: string
  label: string
  /** The `##` this section belongs to — the "level". */
  level: string
  /** `devoir` closes a level, and is drawn as a wider gate. */
  isGate: boolean
  xp: number
}

type NodeState = 'done' | 'current' | 'upcoming'

export default function CoursePath({
  slug,
  nodes,
  dir = 'ltr',
}: {
  slug: string
  nodes: PathNode[]
  /** The document's direction — these labels are its headings. */
  dir?: 'ltr' | 'rtl'
}) {
  const t = useTranslations('course')
  const [visited, setVisited] = useState<string[] | null>(null)

  const refresh = useCallback(() => {
    setVisited(getCourseProgress(slug)?.completedTabs ?? [])
  }, [slug])

  // localStorage does not exist during SSR. Until it is read, `visited` is null
  // and every node renders in its resting state — no node flashes as "current"
  // and then moves.
  useEffect(() => {
    refresh()
    window.addEventListener('zabaqist:progress', refresh)
    return () => window.removeEventListener('zabaqist:progress', refresh)
  }, [refresh])

  const seen = new Set(visited ?? [])
  // The current node is the first one not yet opened; a fully-read chapter has
  // no current node, which is the honest state rather than re-lighting the end.
  const currentIdx = visited === null ? -1 : nodes.findIndex((n) => !seen.has(n.id))

  const stateOf = (i: number): NodeState =>
    i === currentIdx ? 'current' : seen.has(nodes[i]!.id) ? 'done' : 'upcoming'

  // Precomputed, not tracked with a `let` mutated inside the map: reassigning a
  // closure variable during render carries stale state if the map runs twice
  // (StrictMode, or a partial re-render), and React flags it for that reason.
  const startsLevel = nodes.map((n, i) => i === 0 || nodes[i - 1]!.level !== n.level)

  return (
    <ol dir={dir} className="relative">
      {nodes.map((n, i) => {
        const state = stateOf(i)
        const newLevel = startsLevel[i]!

        return (
          <li key={n.id}>
            {newLevel && (
              <p className="mb-4 mt-10 flex items-center gap-3 first:mt-0">
                <span className="rounded-full border border-zb-mint/40 px-3 py-1 font-mono text-xs uppercase tracking-wider text-zb-mint-deep">
                  {n.level}
                </span>
                <span className="h-px flex-1 bg-gray-200" />
              </p>
            )}

            {/* A straight rail, not Brilliant's serpentine: their meander works
                beside short node labels, and these are full chapter headings —
                offsetting each row just pulled the connectors out of true. The
                journey reads from the node states and the pin, not the wiggle.
                Extra top room on the live node so the pin clears the row above. */}
            <div
              className={`relative flex items-center gap-4 pb-3 ${
                state === 'current' && !newLevel ? 'pt-10' : 'pt-3'
              }`}
            >
              {/* Connector, drawn upward to the previous node in the level. */}
              {!newLevel && (
                <span
                  aria-hidden
                  className={`absolute bottom-1/2 top-0 w-0.5 -translate-x-1/2 ${
                    state === 'done' ? 'bg-zb-mint/40' : 'bg-gray-200'
                  }`}
                  style={{ insetInlineStart: n.isGate ? 30 : 22 }}
                />
              )}

              <Link
                href={`/courses/${slug}?s=${n.id}`}
                aria-current={state === 'current' ? 'step' : undefined}
                className="group flex items-center gap-4 no-underline"
              >
                <span className="relative grid shrink-0 place-items-center">
                  {state === 'current' && (
                    <>
                      {/* The pin, floating above the live node. */}
                      <span
                        aria-hidden
                        className="absolute -top-8 grid size-7 place-items-center rounded-lg bg-zb-mint shadow-md"
                      >
                        <svg width={14} height={14} viewBox="-8 -8 16 16">
                          <Khatam size={13} stroke="white" fill="white" strokeWidth={0} />
                        </svg>
                      </span>
                      <span
                        aria-hidden
                        className="absolute size-16 animate-pulse rounded-full bg-zb-mint/15"
                      />
                    </>
                  )}
                  <span
                    className={`grid place-items-center rounded-full border-2 font-semibold transition-colors ${
                      n.isGate ? 'size-[60px]' : 'size-11'
                    } ${
                      state === 'current'
                        ? 'border-zb-mint bg-white text-zb-mint-deep shadow-[0_0_0_6px_rgba(44,176,161,0.15)]'
                        : state === 'done'
                          ? 'border-zb-mint/40 bg-zb-mint-soft text-zb-mint-deep'
                          : 'border-gray-200 bg-gray-100 text-gray-400 group-hover:border-zb-mint/40'
                    }`}
                  >
                    {state === 'done' ? '✓' : i + 1}
                  </span>
                </span>

                <span className="min-w-0">
                  <span
                    className={`block text-[0.95rem] leading-snug ${
                      state === 'current'
                        ? 'font-semibold text-zb-ink'
                        : state === 'done'
                          ? 'text-gray-600'
                          : 'text-gray-400'
                    }`}
                  >
                    {n.label}
                  </span>
                  {state === 'current' && (
                    <span className="mt-0.5 block font-mono text-[0.7rem] uppercase tracking-wider text-zb-mint">
                      {t('youAreHere')}
                    </span>
                  )}
                </span>
              </Link>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
