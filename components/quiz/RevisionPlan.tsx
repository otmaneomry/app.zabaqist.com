'use client'

/**
 * The whole programme in one view, and what to do about it.
 *
 * `/quiz/<slug>` asks one chapter's questions. This page reads the answers to
 * ALL of them and turns them into a revision order — the thing a student in
 * their Bac year needs and cannot get from thirteen separate pages: not "how
 * did I do", but "what do I open next".
 *
 * The first version of this page was thirteen identical rows, each with a mark
 * and `0/7`, which is a database listing rather than a diagnostic: every row
 * looked the same whatever the reader had done, and the programme's own shape —
 * Analyse and Algèbre, seven chapters and six — was flattened away.
 *
 * So the chapter row IS the information now: one khatim per capability, filled
 * when the reader says they can do it, gold when they said not yet, hollow when
 * they have not judged it. Thirteen strips of different lengths and densities,
 * which is what the programme actually looks like from inside. It also puts the
 * brand mark where it carries meaning and nowhere it doesn't — the same rule
 * the streak calendar and the list bullets follow.
 *
 * It asks nothing of its own. Every verdict shown here was given on a chapter's
 * own self-assessment, so this page can never disagree with one, and reading it
 * changes nothing. Chapters with nothing answered are not failures and are not
 * ranked: "not yet assessed" and "assessed and shaky" call for completely
 * different actions.
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { IconArrowRight } from '@tabler/icons-react'

import ItemText from '@/components/quiz/ItemText'
import { KHATIM } from '@/components/landing/Zellige'
import { Link } from '@/i18n/navigation'
import {
  branchLabel,
  courseTitle,
  BRANCHES,
  type Branch,
  type ContentLocale,
} from '@/lib/courseCatalog'
import { readSelfCheck, SELFCHECK_EVENT, type Verdict } from '@/lib/selfCheck'

/** One chapter, as the server read it off disk. */
export interface ChapterCheck {
  slug: string
  title: string
  titleAr: string
  branch: Branch
  /** The chapter's `## Auto-évaluation`, verbatim. */
  items: string[]
  /** Writing direction of the authored chapter, not of the interface. */
  contentDir: 'ltr' | 'rtl'
}

/** What the reader has said about one capability. */
type State = 'solid' | 'shaky' | 'open'

interface Row extends ChapterCheck {
  states: State[]
  solid: number
  shaky: { text: string; verdict: Verdict }[]
  judged: number
}

const POINTS = (() => {
  const r = 8
  const inner = r * KHATIM
  return Array.from({ length: 16 }, (_, i) => {
    const rad = i % 2 === 0 ? r : inner
    const a = (Math.PI / 8) * i - Math.PI / 2
    return `${(r + rad * Math.cos(a)).toFixed(1)},${(r + rad * Math.sin(a)).toFixed(1)}`
  }).join(' ')
})()

const TONE: Record<State, string> = {
  solid: 'fill-zb-mint',
  shaky: 'fill-zb-gold',
  // Never filled unless earned: a filled mark reads as "done", so filling one
  // the reader has not judged would claim something on their behalf.
  open: 'fill-transparent stroke-zb-line [stroke-width:1.6]',
}

/** One capability. */
function Khatim({ state, size = 14 }: { state: State; size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      className="shrink-0 overflow-visible"
      aria-hidden
    >
      <polygon points={POINTS} className={TONE[state]} />
    </svg>
  )
}

export default function RevisionPlan({ chapters }: { chapters: ChapterCheck[] }) {
  const t = useTranslations('revision')
  const locale = useLocale() as ContentLocale
  // `null` until mounted: the verdicts live on the device, so the server has no
  // way to know them and must not print one student's gaps into another's HTML.
  const [rows, setRows] = useState<Row[] | null>(null)

  const read = useCallback(() => {
    setRows(
      chapters.map((c) => {
        const given = readSelfCheck(c.slug)
        const shaky: Row['shaky'] = []
        const states = c.items.map((text, i) => {
          const v = given[i]
          if (!v) return 'open' as const
          if (v === 'got') return 'solid' as const
          shaky.push({ text, verdict: v })
          return 'shaky' as const
        })
        return {
          ...c,
          states,
          shaky,
          solid: states.filter((s) => s === 'solid').length,
          judged: states.filter((s) => s !== 'open').length,
        }
      }),
    )
  }, [chapters])

  useEffect(() => {
    read()
    window.addEventListener(SELFCHECK_EVENT, read)
    return () => window.removeEventListener(SELFCHECK_EVENT, read)
  }, [read])

  const total = useMemo(
    () => chapters.reduce((n, c) => n + c.items.length, 0),
    [chapters],
  )

  // `courseTitle` takes only the two title fields, which `ChapterCheck` has.
  const name = (c: ChapterCheck) => courseTitle(c, locale)

  // Reserve the height rather than collapsing: this is the whole page, and a
  // layout that jumps on hydration is worse than a blank frame.
  if (!rows) return <div className="mt-5 min-h-[32rem]" aria-hidden />

  const judged = rows.reduce((n, r) => n + r.judged, 0)
  const solid = rows.reduce((n, r) => n + r.solid, 0)
  // Ranked by how much is shaky. Only chapters actually assessed appear: a
  // chapter never opened is not a weakness, it is just not started.
  const gaps = rows
    .filter((r) => r.shaky.length > 0)
    .sort((a, b) => b.shaky.length - a.shaky.length)
  const shakyTotal = gaps.reduce((n, r) => n + r.shaky.length, 0)

  const groups = BRANCHES.map((branch) => ({
    branch,
    rows: rows.filter((r) => r.branch === branch),
  })).filter((g) => g.rows.length > 0)

  return (
    <div className="mt-5">
      <header>
        <h1 className="font-display text-[32px] font-bold leading-tight tracking-tight text-zb-ink sm:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-3 max-w-[62ch] leading-relaxed text-zb-ink-2">
          {t('sub', { items: total, chapters: chapters.length })}
        </p>
      </header>

      {/* Three counts that add up to the programme. Not a score: the reader
          supplied every one of them, and the third is the only one that asks
          for anything. */}
      <dl className="mt-7 flex flex-wrap items-stretch gap-2.5">
        {(
          [
            ['solid', solid, 'solid'],
            ['shaky', shakyTotal, 'shaky'],
            ['open', total - judged, 'open'],
          ] as const
        ).map(([key, n, state]) => (
          <div
            key={key}
            className="flex min-w-[7.5rem] flex-1 items-center gap-3 rounded-xl border border-zb-line bg-white px-4 py-3"
          >
            <Khatim state={state} size={16} />
            <div className="min-w-0">
              <dt className="truncate text-[11px] font-semibold uppercase tracking-[0.1em] text-zb-ink-3">
                {t(`stat-${key}`)}
              </dt>
              <dd
                dir="ltr"
                className="font-display text-xl font-bold leading-tight tabular-nums text-zb-ink"
              >
                {n}
              </dd>
            </div>
          </div>
        ))}
      </dl>

      {/* Priority first, and only when the reader has actually declared one. */}
      {gaps.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold tracking-tight text-zb-ink">
            {t('gapsTitle')}
          </h2>
          <p className="mt-1.5 max-w-[60ch] leading-relaxed text-zb-ink-2">
            {t('gapsBody', { n: shakyTotal })}
          </p>

          <ol className="mt-5 space-y-3">
            {gaps.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/courses/${r.slug}`}
                  className="group block rounded-2xl border border-zb-line bg-white p-5 no-underline shadow-[var(--zb-shadow-sm)] transition-all hover:-translate-y-0.5 hover:border-zb-gold/50 hover:shadow-[var(--zb-shadow-md)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-gold-deep">
                      {branchLabel(r.branch, locale)}
                    </span>
                    <span
                      dir="ltr"
                      className="shrink-0 font-mono text-[11px] tabular-nums text-zb-ink-3"
                    >
                      {t('shakyCount', { n: r.shaky.length, total: r.items.length })}
                    </span>
                  </div>
                  <p className="mt-1 font-display text-lg font-bold tracking-tight text-zb-ink">
                    {name(r)}
                  </p>
                  {/* The reader's own words back to them: this is the list they
                      said they could not do yet. */}
                  <ul className="mt-3 space-y-1.5">
                    {r.shaky.slice(0, 3).map((s) => (
                      <li key={s.text} className="flex items-start gap-2.5 text-sm text-zb-ink-2">
                        <span className="mt-[3px]">
                          <Khatim state="shaky" size={12} />
                        </span>
                        <ItemText
                          text={s.text}
                          dir={r.contentDir}
                          className="block flex-1 leading-relaxed"
                        />
                      </li>
                    ))}
                    {r.shaky.length > 3 && (
                      <li className="ps-[22px] text-sm text-zb-ink-3">
                        {t('andMore', { n: r.shaky.length - 3 })}
                      </li>
                    )}
                  </ul>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-zb-mint-deep">
                    {t('openChapter')}
                    <IconArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* The programme, in its own two halves. Each row carries its chapter's
          capabilities rather than a count of them, so no two rows look alike
          and the shape of the reader's year is legible at a glance. */}
      <section className="mt-12">
        <h2 className="font-display text-xl font-bold tracking-tight text-zb-ink">
          {t('mapTitle')}
        </h2>
        <p className="mt-1.5 max-w-[60ch] leading-relaxed text-zb-ink-2">
          {judged === 0 ? t('mapEmpty') : t('mapBody')}
        </p>

        {groups.map(({ branch, rows: group }) => (
          <div key={branch} className="mt-7">
            <h3 className="flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-zb-mint-deep">
              {branchLabel(branch, locale)}
              <span className="h-px flex-1 bg-zb-line" />
              <span className="font-medium normal-case tracking-normal text-zb-ink-3">
                {t('branchCount', { n: group.length })}
              </span>
            </h3>

            <ul className="mt-3 space-y-1">
              {group.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/quiz/${r.slug}`}
                    className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl px-3 py-2.5 no-underline transition-colors hover:bg-zb-cream-2"
                  >
                    <span className="min-w-0 flex-1 truncate text-[15px] text-zb-ink">
                      {name(r)}
                    </span>
                    {/* One mark per capability, in the chapter's own order. */}
                    <span
                      dir="ltr"
                      className="flex items-center gap-1"
                      role="img"
                      aria-label={t('rowLabel', {
                        solid: r.solid,
                        shaky: r.shaky.length,
                        total: r.items.length,
                      })}
                    >
                      {r.states.map((s, i) => (
                        <Khatim key={i} state={s} size={13} />
                      ))}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Nothing judged anywhere: one clear way in, under the map it refers
            to, rather than a box occupying the fold before the reader has seen
            what the page is. */}
        {judged === 0 && (
          <Link
            href={`/quiz/${chapters[0]?.slug ?? ''}`}
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zb-mint px-6 text-[15px] font-bold text-white no-underline shadow-[0_3px_0_0_var(--zb-mint-deep),var(--zb-shadow-sm)] transition-colors hover:bg-zb-mint-deep"
          >
            {t('emptyCta')}
            <IconArrowRight size={18} className="rtl:rotate-180" />
          </Link>
        )}
      </section>
    </div>
  )
}
