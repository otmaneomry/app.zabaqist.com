'use client'

/**
 * Three ways to work, as three doors.
 *
 * DataCamp puts ASSESS / PRACTICE / APPLY under the resume strip: three cards,
 * three saturated discs, one named destination each. The idea underneath is that
 * "carry on reading" is not the only next action a student has, and a dashboard
 * that offers only that will only ever produce readers.
 *
 * Zabaqist already types its sections by the work they ask for —
 * `ViewKind` in `lib/courseDoc.ts`, priced at 5/20/10/50/5 XP — so the three
 * doors are not invented for this layout, they are the three kinds that are not
 * plain reading:
 *
 *   · **Méthode** (20 XP) — the worked technique. DataCamp's ASSESS slot.
 *   · **Exercices** (10 XP) — the drill. Their PRACTICE.
 *   · **Devoir** (50 XP) — the gate at the end of a part. Their APPLY.
 *
 * Each card points at the *first section of that kind this student has not
 * read*, scanned in programme order across their filière. A card whose kind has
 * nothing left unread offers the last one again, marked as review; a kind with
 * no sections at all in this filière is not drawn, because a door to nothing is
 * worse than three cards that do not fill the row.
 */

import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import {
  IconChevronRight,
  IconFlask,
  IconTargetArrow,
  IconRoute,
  type IconProps,
} from '@tabler/icons-react'

import { Link } from '@/i18n/navigation'
import type { ChapterState } from '@/components/home/useChapterStates'
import { courseTitle, type ContentLocale } from '@/lib/courseCatalog'

/**
 * The three kinds, in the order the work happens: see it done, do it, be
 * examined on it.
 *
 * `tone` maps onto colours the product already assigns meaning to rather than
 * inventing a third palette: mint is the brand and the "learning" colour, gold
 * is the accent used for XP and effort, and rose is what
 * `components/course/Checkpoint.tsx` uses for "à toi de jouer" — which is
 * exactly what a devoir is.
 */
const KINDS = [
  { kind: 'methode', icon: IconRoute, tone: 'mint' },
  { kind: 'exercices', icon: IconFlask, tone: 'gold' },
  { kind: 'devoir', icon: IconTargetArrow, tone: 'rose' },
] as const

const TONE: Record<
  (typeof KINDS)[number]['tone'],
  { disc: string; glyph: string }
> = {
  mint: { disc: 'bg-zb-mint-tint', glyph: 'text-zb-mint-deep' },
  gold: { disc: 'bg-zb-gold-soft', glyph: 'text-zb-gold-deep' },
  rose: { disc: 'bg-zb-rose-soft', glyph: 'text-zb-rose' },
}

interface Door {
  kind: string
  icon: React.ComponentType<IconProps>
  tone: keyof typeof TONE
  /** The part being opened — the chapter's own `##` heading. */
  label: string
  /** Which chapter it is in. */
  chapter: string
  href: string
  /** Nothing of this kind is unread — the card offers a revisit instead. */
  review: boolean
}

export default function KindTrio({
  states,
  ready,
}: {
  states: ChapterState[]
  ready: boolean
}) {
  const t = useTranslations('dashboard')
  const tc = useTranslations('course')
  const locale = useLocale() as ContentLocale

  // Same reason as the strip above it: reserve the band so hydration does not
  // shove the list below out from under the student's thumb.
  if (!ready) return <div className="min-h-[6rem]" aria-hidden />

  const doors: Door[] = []
  for (const { kind, icon, tone } of KINDS) {
    let fallback: Door | undefined

    for (const state of states) {
      for (const tab of state.tabs) {
        if (tab.kind !== kind) continue
        const unread = tab.viewIds.find((v) => !state.read.has(v))
        const door: Door = {
          kind,
          icon,
          tone,
          // The part, not the chapter. All three doors routinely resolve into
          // the same chapter — a student works through one at a time — and
          // three cards reading "Limites et continuité" is a row that looks
          // broken. The part name is also simply the truer answer to "what am
          // I about to open".
          label: tab.label,
          chapter: courseTitle(state.course, locale),
          href: `/courses/${state.course.slug}?s=${unread ?? tab.id}`,
          review: !unread,
        }
        if (unread) {
          doors.push(door)
          fallback = undefined
          break
        }
        // Keep the last fully-read one as the revisit target, but carry on
        // looking for something genuinely unread first.
        fallback ??= door
      }
      if (doors.at(-1)?.kind === kind) break
    }

    if (doors.at(-1)?.kind !== kind && fallback) doors.push(fallback)
  }

  if (doors.length === 0) return null

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {doors.map(({ kind, icon: Icon, tone, label, chapter, href, review }) => (
        <Link
          key={kind}
          href={href}
          className="group flex items-center gap-4 rounded-xl border border-zb-line bg-white p-4 no-underline transition-all hover:border-zb-mint/40 hover:shadow-[var(--zb-shadow-md)]"
        >
          <span
            className={`flex size-11 shrink-0 items-center justify-center rounded-full ${TONE[tone].disc}`}
          >
            <Icon size={21} stroke={1.9} className={TONE[tone].glyph} />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-ink-3">
              {tc(`kind-${kind}`)}
              {review && ` · ${t('kindReview')}`}
            </span>
            <span className="mt-0.5 block truncate text-sm font-bold text-zb-ink">
              {label}
            </span>
            <span className="block truncate text-xs text-zb-ink-3">
              {chapter}
            </span>
          </span>

          <IconChevronRight
            size={18}
            className="shrink-0 text-zb-ink-3 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
          />
        </Link>
      ))}
    </div>
  )
}
