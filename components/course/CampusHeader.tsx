'use client'

/**
 * The bar a student reads under.
 *
 * DataCamp's campus header (`wokflow-datacamp/2-inside-course-quiz.png`,
 * `6-inside-course.png`) is three groups and nothing else: a breadcrumb back out
 * on the left, `← ≡ Course Outline →` centred, and the day's XP on the right. No
 * search, no upgrade button, no avatar — everything that is not the chapter has
 * been taken off the screen, and the outline is one tap away rather than a
 * column that is permanently in the way.
 *
 * That is the whole idea and it is worth taking exactly: reading a maths chapter
 * on a 390px phone is the case this product exists for, and the version this
 * replaces spent the top of that screen on a back-link, a badge, an H1, a
 * description, a stats line, a scrolling tab bar and a section dropdown before a
 * single line of the chapter appeared.
 *
 * ### What is not ported
 *
 * The source's split view — instructions in a 360px left pane, a workspace on
 * the right — is not here, and not because it was hard. It exists to put an
 * editor next to a brief. Our sections are prose and KaTeX, and this codebase
 * has already measured what a narrow column does to them: *"`padding="xl"` is
 * what the hand-written course uses, but on a 390px phone it leaves a 292px
 * column for formulas."* A display formula in a 360px pane scrolls sideways on
 * every line. The document keeps the full column; see DATACAMP_WORKFLOW.md §4.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import {
  IconChevronLeft,
  IconChevronRight,
  IconLayoutList,
  IconX,
} from '@tabler/icons-react'

import { Link, useRouter } from '@/i18n/navigation'
import LangSwitch from '@/components/landing/LangSwitch'
import { KHATIM } from '@/components/landing/Zellige'
import { chapterTotals } from '@/lib/courseProgress'
import { getCourseProgress } from '@/lib/progressTracking'
import type { OutlinePart } from '@/components/course/ChapterOutline'

/** The eight-point star as a polygon, sized to a box of `r * 2`. */
function starPoints(r: number): string {
  const inner = r * KHATIM
  return Array.from({ length: 16 }, (_, i) => {
    const rad = i % 2 === 0 ? r : inner
    const a = (Math.PI / 8) * i - Math.PI / 2
    return `${(r + rad * Math.cos(a)).toFixed(2)},${(r + rad * Math.sin(a)).toFixed(2)}`
  }).join(' ')
}

export default function CampusHeader({
  slug,
  chapterTitle,
  parts,
  activeId,
  prevId,
  nextId,
  totalXp,
  dir = 'ltr',
}: {
  slug: string
  chapterTitle: string
  parts: OutlinePart[]
  activeId: string
  prevId?: string
  nextId?: string
  /** What the whole chapter is worth — the denominator for the XP readout. */
  totalXp: number
  dir?: 'ltr' | 'rtl'
}) {
  const t = useTranslations('course')
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [read, setRead] = useState<Set<string>>(new Set())
  const [earned, setEarned] = useState(0)

  const refresh = useCallback(() => {
    const visited = getCourseProgress(slug)?.completedTabs ?? []
    setRead(new Set(visited))
    // `chapterTotals`, and not a sum of the sections read.
    //
    // XP in this product is earned by *attempting a checkpoint*, minus the
    // hints opened — `xpFor(base, hints)` in lib/courseProgress.ts. Summing the
    // worth of every section a reader has scrolled past would pay them for
    // scrolling, and would put a number in this bar that disagreed with the
    // header's XP chip and the progress card on the chapter page. One
    // definition, one function, three surfaces.
    const views = parts.flatMap((p) => p.views)
    setEarned(
      chapterTotals(
        slug,
        views.map((v) => v.id),
        Object.fromEntries(views.map((v) => [v.id, v.xp])),
        visited,
      ).xp,
    )
  }, [slug, parts])

  useEffect(() => {
    refresh()
    window.addEventListener('zabaqist:progress', refresh)
    return () => window.removeEventListener('zabaqist:progress', refresh)
  }, [refresh])

  // Close on the section changing — the drawer's whole purpose is to navigate,
  // and leaving it open over the page it just moved to is the same bug the
  // header's drawer had.
  useEffect(() => setOpen(false), [activeId])

  /**
   * Arrow keys move between sections.
   *
   * The source binds number keys to its answer tiles and arrows to the section
   * stepper. Only the stepper applies here — and it is skipped whenever the
   * student is typing, because `components/course/Checkpoint.tsx` has a scratch
   * textarea on many of these pages and jumping chapter mid-sentence would lose
   * what they had written.
   */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const el = e.target as HTMLElement | null
      if (
        el &&
        (el.isContentEditable ||
          ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName))
      )
        return
      // In RTL the right arrow points at the previous section, because the
      // document runs the other way.
      const rtl = dir === 'rtl'
      const forward = rtl ? 'ArrowLeft' : 'ArrowRight'
      const back = rtl ? 'ArrowRight' : 'ArrowLeft'
      if (e.key === forward && nextId)
        router.push(`/courses/${slug}?s=${nextId}`)
      else if (e.key === back && prevId)
        router.push(`/courses/${slug}?s=${prevId}`)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dir, nextId, prevId, router, slug])

  const step = (id: string | undefined, label: string, back: boolean) =>
    id ? (
      <Link
        href={`/courses/${slug}?s=${id}`}
        aria-label={label}
        className="grid size-10 shrink-0 place-items-center rounded-lg text-zb-ink-2 no-underline transition-colors hover:bg-zb-cream-2 hover:text-zb-ink"
      >
        {back ? (
          <IconChevronLeft size={19} className="rtl:rotate-180" />
        ) : (
          <IconChevronRight size={19} className="rtl:rotate-180" />
        )}
      </Link>
    ) : (
      <span className="size-10 shrink-0" aria-hidden />
    )

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-zb-line bg-white">
        <div className="flex h-14 items-center justify-between gap-2 px-3 sm:h-16 sm:px-5">
          {/* The way out. Truncates rather than wrapping: a two-line breadcrumb
              would push the stepper off a phone. */}
          <nav
            aria-label={t('back')}
            className="flex min-w-0 flex-1 items-center gap-1.5 text-sm"
          >
            <Link
              href="/courses"
              className="shrink-0 text-zb-ink-2 no-underline hover:text-zb-ink hover:underline"
            >
              {t('breadcrumbCourses')}
            </Link>
            <span className="shrink-0 text-zb-ink-3" aria-hidden>
              /
            </span>
            <Link
              href={`/courses/${slug}`}
              dir={dir}
              className="truncate font-semibold text-zb-ink no-underline hover:underline"
            >
              {chapterTitle}
            </Link>
          </nav>

          {/* `← ≡ Plan du chapitre →`. The label collapses to the icon below
              `sm`, where the breadcrumb needs the room more than the word does. */}
          <div className="flex shrink-0 items-center rounded-lg border border-zb-line">
            {step(prevId, t('prevSection'), true)}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              // The visible label is dropped below `sm`, where the breadcrumb
              // needs the room more than the word does — so the button has to
              // carry its name here or it is an unlabelled icon on exactly the
              // screen size this product is mostly used at.
              aria-label={t('outline')}
              className="inline-flex h-10 items-center gap-2 border-zb-line px-2 text-sm font-semibold text-zb-ink transition-colors hover:bg-zb-cream-2 ltr:border-x rtl:border-x sm:px-4"
            >
              <IconLayoutList size={17} aria-hidden />
              <span aria-hidden className="hidden sm:inline">
                {t('outline')}
              </span>
            </button>
            {step(nextId, t('nextSection'), false)}
          </div>

          {/* The source's `Daily XP 400`. Ours is XP banked in THIS chapter over
              what the chapter can pay: a bare running total tells a student
              nothing about the thing in front of them, and a denominator makes
              the same number mean "how far through".

              Hidden until something has been earned — the same rule as `XpChip`
              and the streak counters. `0 / 400 XP` above an unread chapter is a
              reproach printed before the student has done anything. */}
          <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
            {/* The app's own bar is hidden in reading mode, and it is where the
                language switch normally lives — so without this, a student who
                opened a chapter could not change language without leaving it.
                DataCamp's campus header keeps its `🌐 EN` for the same reason. */}
            <LangSwitch className="max-sm:hidden" />

            {earned > 0 && (
              <span
                dir="ltr"
                aria-label={t('dailyXp')}
                className="inline-flex h-8 items-center gap-1 rounded-full bg-zb-gold/20 px-3 font-mono text-xs font-semibold tabular-nums text-zb-gold-deep"
              >
                {earned}
                <span className="text-zb-gold-deep/60">/{totalXp}</span>
                <span className="ms-0.5">XP</span>
              </span>
            )}
          </div>
        </div>
      </header>

      {open && (
        <OutlineOverlay
          slug={slug}
          chapterTitle={chapterTitle}
          parts={parts}
          activeId={activeId}
          read={read}
          dir={dir}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}

/**
 * The whole chapter, over the page, without leaving it.
 *
 * `3-course-outline.png`: every part, every section, a tick on what is done and
 * the XP on the end of each row, with the section you are on highlighted. It is
 * the same information as `ChapterOutline` on the course page — deliberately, so
 * a student navigates by the same map in both places — laid out for jumping
 * rather than for deciding.
 */
function OutlineOverlay({
  slug,
  chapterTitle,
  parts,
  activeId,
  read,
  dir,
  onClose,
}: {
  slug: string
  chapterTitle: string
  parts: OutlinePart[]
  activeId: string
  read: Set<string>
  dir: 'ltr' | 'rtl'
  onClose: () => void
}) {
  const t = useTranslations('course')

  // Escape closes, and the page behind must not scroll while it is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t('outline')}
      className="fixed inset-0 z-50 flex items-start justify-center bg-zb-ink/50 p-0 sm:p-6"
    >
      {/* The scrim closes. A separate element rather than a click handler on the
          dialog, so a click inside the panel cannot bubble out and dismiss it. */}
      <button
        type="button"
        aria-label={t('closeOutline')}
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />

      <div className="relative flex max-h-full w-full max-w-3xl flex-col overflow-hidden bg-white sm:rounded-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-zb-line px-5 py-4">
          <h2
            dir={dir}
            className="min-w-0 truncate font-display text-lg font-bold tracking-tight text-zb-ink"
          >
            {chapterTitle}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('closeOutline')}
            className="grid size-9 shrink-0 place-items-center rounded-full text-zb-ink-2 transition-colors hover:bg-zb-cream-2 hover:text-zb-ink"
          >
            <IconX size={19} />
          </button>
        </div>

        <ol className="min-h-0 flex-1 overflow-y-auto px-3 py-3 sm:px-4">
          {parts.map((part, i) => {
            const doneCount = part.views.filter((v) => read.has(v.id)).length
            const pct = part.views.length
              ? Math.round((doneCount / part.views.length) * 100)
              : 0
            return (
              <li key={part.id} className="mb-4 last:mb-0">
                <div className="flex items-center gap-3 px-2 py-2">
                  <span
                    dir="ltr"
                    className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold tabular-nums ${
                      pct === 100
                        ? 'bg-zb-mint text-white'
                        : 'bg-zb-cream-3 text-zb-ink-2'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <h3
                    dir={dir}
                    className="min-w-0 flex-1 truncate text-sm font-bold text-zb-ink"
                  >
                    {part.label}
                  </h3>
                  {doneCount > 0 && (
                    <span
                      dir="ltr"
                      className="shrink-0 font-mono text-[11px] tabular-nums text-zb-ink-3"
                    >
                      {pct}%
                    </span>
                  )}
                </div>

                <ul>
                  {part.views.map((v) => {
                    const here = v.id === activeId
                    const isRead = read.has(v.id)
                    return (
                      <li key={v.id}>
                        <Link
                          href={`/courses/${slug}?s=${v.id}`}
                          aria-current={here ? 'page' : undefined}
                          className={`flex items-center gap-3 rounded-lg px-2 py-2.5 no-underline transition-colors ${
                            here
                              ? 'bg-zb-mint-tint'
                              : 'hover:bg-zb-cream-2'
                          }`}
                        >
                          {/* The "you are here" pin. A filled mark for a section
                              read, an outline for the one open, nothing for the
                              rest — the same three states as the streak strip. */}
                          <svg
                            viewBox="0 0 16 16"
                            className="size-4 shrink-0"
                            aria-hidden
                          >
                            <polygon
                              points={starPoints(8)}
                              className={
                                isRead
                                  ? 'fill-zb-mint'
                                  : here
                                    ? 'fill-transparent stroke-zb-mint [stroke-width:1.5]'
                                    : 'fill-transparent stroke-zb-line [stroke-width:1.5]'
                              }
                            />
                          </svg>

                          <span
                            dir={dir}
                            className={`min-w-0 flex-1 truncate text-sm ${
                              here
                                ? 'font-semibold text-zb-mint-deep'
                                : isRead
                                  ? 'text-zb-ink-2'
                                  : 'text-zb-ink'
                            }`}
                          >
                            {v.label}
                          </span>

                          <span
                            dir="ltr"
                            className="shrink-0 font-mono text-[11px] tabular-nums text-zb-ink-3"
                          >
                            {v.xp} XP
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
