/**
 * Course page.
 *
 * When a chapter has been authored as markdown under `content/course/`, that
 * document IS the page: loaded, paginated and rendered verbatim. Slugs with no
 * document fall back to `CourseFallback` — the hardcoded chapter list and the
 * "coming soon" card the app shipped before.
 *
 * Two layouts, chosen by `?s=`:
 *
 *  · **without it** — the chapter's own page. A dark banner naming the chapter
 *    and holding the button that starts it, then the plan as an outline with
 *    per-part progress and per-section XP. DataCamp's course page.
 *  · **with it** — the reader. The app's chrome steps aside (`data-reader-mode`)
 *    and the section gets the screen under one bar: breadcrumb out, the outline
 *    behind a button, the chapter's XP. DataCamp's campus.
 *
 * Both are documented in DATACAMP_WORKFLOW.md §3 and §4, including what was
 * deliberately not ported — chiefly the split instructions/workspace pane, which
 * exists to put an editor beside a brief and would give a display formula a
 * 360px column.
 *
 * Server component: the maths is rendered to HTML here, so a phone downloads
 * text and not a KaTeX runtime. Only the three pieces that read localStorage or
 * navigate are client components.
 */

import React from 'react'
import {Link} from '@/i18n/navigation'
import { notFound } from 'next/navigation'
import {
  IconArrowLeft,
  IconArrowRight,
  IconListCheck,
} from '@tabler/icons-react'
import { getLocale, getTranslations } from 'next-intl/server'

import CourseDoc from '@/components/course/CourseDoc'
import ChapterComplete from '@/components/course/ChapterComplete'
import CampusHeader from '@/components/course/CampusHeader'
import StreakMoment from '@/components/course/StreakMoment'
import ChapterOutline, {
  type OutlinePart,
} from '@/components/course/ChapterOutline'
import CourseProgressCard from '@/components/course/CourseProgressCard'
import PageBanner, { BannerStat } from '@/components/shell/PageBanner'
import ViewHeader from '@/components/course/ViewHeader'
import {
  branchLabel,
  courseBySlug,
  courseDescription,
  courseLevel,
  listCourses,
  loadCourseDoc,
  tabsOf,
  viewLabel,
  type ContentLocale,
} from '@/lib/courseDoc'
import CourseFallback from './CourseFallback'

interface PageProps {
  params: Promise<{ courseId: string }>
  searchParams: Promise<{ s?: string }>
}

/** Prerender the markdown courses; other slugs still render on demand. */
export function generateStaticParams() {
  return listCourses().map((c) => ({ courseId: c.slug }))
}

export async function generateMetadata({ params }: Pick<PageProps, 'params'>) {
  const { courseId } = await params
  const meta = courseBySlug(courseId)
  return meta
    ? { title: `${meta.title} · Zabaqist`, description: meta.description }
    : { title: 'Cours · Zabaqist' }
}

export default async function CoursePage({ params, searchParams }: PageProps) {
  const { courseId } = await params
  const { s: requestedView } = await searchParams

  const doc = await loadCourseDoc(courseId)

  // No authored chapter for this slug — the pre-markdown page still serves it.
  if (!doc) return <CourseFallback courseId={courseId} />
  if (doc.views.length === 0) notFound()

  // Which section is being read. Unknown or absent -> the first.
  const foundIdx = doc.views.findIndex((v) => v.id === requestedView)
  const idx = foundIdx >= 0 ? foundIdx : 0
  const view = doc.views[idx]!
  const prev = idx > 0 ? doc.views[idx - 1] : undefined
  const next = doc.views[idx + 1]

  // The open tab is whichever one holds the section being read.
  const tabs = tabsOf(doc.views)
  const activeTab = tabs.find((t) => t.viewIds.includes(view.id)) ?? tabs[0]!
  const pickerItems = activeTab.viewIds.map((id) => ({
    id,
    label:
      doc.views.find((w) => w.id === id)?.titles.join(' · ') ?? activeTab.label,
  }))

  const viewIds = doc.views.map((v) => v.id)
  const xpByView = Object.fromEntries(doc.views.map((v) => [v.id, v.xp]))
  const totalXp = doc.views.reduce((sum, v) => sum + v.xp, 0)

  const t = await getTranslations('course')
  const locale = (await getLocale()) as ContentLocale

  /**
   * With no `?s=`, this is the chapter's own page: a dark banner that says what
   * the chapter is and holds the one button that starts it, then the plan as an
   * outline. DataCamp's course page, on our material — see
   * `wokflow-datacamp/9_1-example-course.png` and DATACAMP_WORKFLOW.md §3.
   *
   * It replaces the Brilliant serpentine (`components/course/CoursePath.tsx`).
   * The path made "where am I" answerable at a glance and that was worth having;
   * what it could not show is what a section is worth and how much of a part is
   * left, which is what a student revising for a bac needs from a plan. The
   * outline answers both in the row itself. `CoursePath` and `StickyNextCard`
   * are still in the tree and unreferenced — delete them once nothing wants the
   * serpentine back.
   */
  if (!requestedView) {
    const parts: OutlinePart[] = tabs.map((tab) => ({
      id: tab.id,
      label: tab.label,
      kind: tab.kind,
      views: tab.viewIds.map((id) => {
        const v = doc.views.find((w) => w.id === id)!
        return { id, label: viewLabel(v), kind: v.kind, xp: v.xp }
      }),
    }))

    // Where the banner's button goes. The reader's own progress is not knowable
    // here — it is on their device — so this is the chapter's first section, and
    // `ChapterOutline` offers the resume points per part once it has mounted.
    const first = doc.views[0]!.id

    return (
      <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
        {/* Owns "section read" and time-on-chapter. `markVisited={false}`:
            looking at the plan is not reading the first section. */}
        <CourseProgressCard
          slug={courseId}
          activeId={view.id}
          viewIds={viewIds}
          xpByView={xpByView}
          markVisited={false}
        />

        <PageBanner
          eyebrow={courseLevel(doc.meta, locale)}
          title={doc.title}
          dir={doc.meta.contentDir}
          badge={
            <span className="inline-flex h-7 items-center rounded-md bg-zb-mint-on-dark/15 px-2.5 text-xs font-semibold text-zb-mint-on-dark">
              {branchLabel(doc.meta.branch, locale)}
            </span>
          }
          description={courseDescription(doc.meta, locale)}
          actions={
            <>
              <Link
                href={`/courses/${courseId}?s=${first}`}
                className="inline-flex h-11 items-center rounded-full bg-zb-mint px-6 text-sm font-bold text-white no-underline transition-colors hover:bg-zb-mint-deep"
              >
                {t('startChapter')}
              </Link>
              <Link
                href={`/quiz/${courseId}`}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-zb-navy-line px-5 text-sm font-semibold text-white no-underline transition-colors hover:bg-zb-navy-2"
              >
                <IconListCheck size={16} />
                {t('quiz')}
              </Link>
            </>
          }
          meta={
            <>
              <BannerStat>{t('partCount', { n: tabs.length })}</BannerStat>
              <BannerStat>
                {t('sectionCount', { n: doc.views.length })}
              </BannerStat>
              <BannerStat tone="gold">{totalXp} XP</BannerStat>
            </>
          }
        />

        <div>
          <h2 className="mb-3 font-display text-lg font-bold tracking-tight text-zb-ink">
            {t('plan')}
          </h2>
          <ChapterOutline
            slug={courseId}
            parts={parts}
            dir={doc.meta.contentDir}
          />
        </div>

        {/* Fires once, when the last section has been read. */}
        <ChapterComplete
          slug={courseId}
          viewIds={viewIds}
          xpByView={xpByView}
        />
      </div>
    )
  }

  /**
   * The reader.
   *
   * DataCamp's campus, on our material: the chapter gets the screen, the app's
   * chrome steps out of the way (`data-reader-mode`, see the rule in
   * app/globals.css), and everything that used to sit above the first line of
   * the document — a back-link, a badge, an H1, a description, a stats line, a
   * scrolling tab bar and a section dropdown — is now one 56px bar with the
   * outline behind a single button.
   *
   * `CourseTabs` and `SectionPicker` are what that bar replaced; the outline
   * drawer in `CampusHeader` does both jobs and shows XP and what is read while
   * doing them. Both files are unreferenced now.
   */
  const parts: OutlinePart[] = tabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    kind: tab.kind,
    views: tab.viewIds.map((id) => {
      const v = doc.views.find((w) => w.id === id)!
      return { id, label: viewLabel(v), kind: v.kind, xp: v.xp }
    }),
  }))

  // Where this section sits inside its part — the source's dot strip at the
  // foot of every exercise.
  const dotIndex = activeTab.viewIds.indexOf(view.id)

  return (
    <div data-reader-mode className="min-h-screen bg-zb-cream">
      <CampusHeader
        slug={courseId}
        chapterTitle={doc.title}
        parts={parts}
        activeId={view.id}
        prevId={prev?.id}
        nextId={next?.id}
        totalXp={totalXp}
        dir={doc.meta.contentDir}
      />

      {/* Owns "section read" and time-on-chapter, and is the reason this stays a
          server component: the page renders KaTeX to HTML, and only the pieces
          that touch localStorage are client. */}
      <CourseProgressCard
        slug={courseId}
        activeId={view.id}
        viewIds={viewIds}
        xpByView={xpByView}
        chromeless
      />

      {/* Fires once on the day's first section — reading is what moves the
          streak, so this is where it belongs. */}
      <StreakMoment />

      <main className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Which part of the chapter this is. It replaces the H1 + badge +
            description block: inside a section, the chapter's identity is
            context, not a headline. */}
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-gold-deep">
          {activeTab.label}
        </p>

        <div className="mt-4">
          <ViewHeader view={view} />
          <CourseDoc
            body={view.body}
            courseId={courseId}
            viewId={view.id}
            baseXp={view.xp}
            tools={view.tools}
            dir={doc.meta.contentDir}
          />
        </div>

        {/* The source's dot strip: where you are in this part, at a glance,
            without a percentage. `dir="ltr"` because it is a chart of order and
            charts do not mirror. */}
        {activeTab.viewIds.length > 1 && (
          <ol
            dir="ltr"
            aria-label={t('tabSections')}
            className="mt-10 flex items-center justify-center gap-1.5"
          >
            {activeTab.viewIds.map((id, i) => (
              <li key={id}>
                <Link
                  href={`/courses/${courseId}?s=${id}`}
                  aria-current={i === dotIndex ? 'step' : undefined}
                  className={`block h-1.5 rounded-full transition-all ${
                    i === dotIndex
                      ? 'w-8 bg-zb-mint'
                      : i < dotIndex
                        ? 'w-4 bg-zb-mint/40'
                        : 'w-4 bg-zb-cream-3'
                  }`}
                >
                  <span className="sr-only">{i + 1}</span>
                </Link>
              </li>
            ))}
          </ol>
        )}

        {/* Prev / next as real buttons rather than the two bare links this
            replaces. The forward one is the primary action on the page once the
            section has been read, and it was styled as body text. */}
        <nav
          dir={doc.meta.contentDir}
          className="mt-8 flex items-stretch justify-between gap-3"
        >
          {prev ? (
            <Link
              href={`/courses/${courseId}?s=${prev.id}`}
              className="inline-flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-zb-line bg-white px-4 py-3 text-sm text-zb-ink-2 no-underline transition-colors hover:border-zb-mint/40 hover:text-zb-ink sm:flex-none sm:max-w-[45%]"
            >
              <IconArrowLeft size={17} className="shrink-0 rtl:rotate-180" />
              <span className="truncate">{viewLabel(prev)}</span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/courses/${courseId}?s=${next.id}`}
              className="inline-flex min-w-0 flex-1 items-center justify-end gap-2 rounded-xl bg-zb-mint px-4 py-3 text-sm font-semibold text-white no-underline shadow-[0_3px_0_0_var(--zb-mint-deep)] transition-colors hover:bg-zb-mint-deep sm:flex-none sm:max-w-[45%]"
            >
              <span className="truncate">{viewLabel(next)}</span>
              <IconArrowRight size={17} className="shrink-0 rtl:rotate-180" />
            </Link>
          ) : (
            <span />
          )}
        </nav>

        {/* Only on the last section: this asks what the student can do now, and
            under the introduction it was asking that before they had read
            anything. `next` is null exactly at the end of the chapter. */}
        {!next && (
          <section className="mt-10 rounded-2xl bg-zb-navy px-6 py-8 text-center">
            <h2 className="text-balance font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
              {t('ctaTitle')}
            </h2>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-zb-navy-dim">
              {t('ctaBody')}
            </p>
            <Link
              href={`/quiz/${courseId}`}
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-zb-mint px-6 text-[15px] font-bold text-white no-underline transition-colors hover:bg-zb-mint-deep"
            >
              <IconListCheck size={19} />
              {t('ctaButton')}
            </Link>
          </section>
        )}
      </main>
    </div>
  )
}
