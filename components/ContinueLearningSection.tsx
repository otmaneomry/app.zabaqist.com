'use client'

/**
 * Every chapter of the student's filière, as tiles.
 *
 * Progress is read in an effect, never during render. It used to be computed
 * inline — `progress: summarize(c.slug).pct ?? 0` — and `summarize` reads
 * localStorage, which does not exist on the server: the HTML came back with
 * `aria-valuenow="0"` and the browser's first render said 18, so React reported
 * a hydration mismatch and discarded the server markup for this tree.
 *
 * The zero state is rendered on both sides and the real figures arrive after
 * mount. Bars therefore animate up from zero on load, which the existing
 * width transition already does for free, rather than the page jumping as
 * progress bars appear.
 *
 * It also listens for `zabaqist:progress` now. Without it a tile still showed
 * the figure from page load after the reader had gone and read a section.
 */

import React from 'react'
import { useLocale, useTranslations } from 'next-intl'

import CourseCard, { type CourseCardProps } from '@/components/CourseCard'
import { Link } from '@/i18n/navigation'
import {
  courseLevel,
  courseTitle,
  listCourses,
  type ContentLocale,
} from '@/lib/courseCatalog'
import { summarize } from '@/lib/courseProgress'
import {
  DEFAULT_FILIERE,
  FILIERE_EVENT,
  readFiliere,
  type Filiere,
} from '@/lib/filiere'

const EVENTS = [FILIERE_EVENT, 'zabaqist:progress']

const ContinueLearningSection: React.FC = () => {
  const t = useTranslations('dashboard')
  const locale = useLocale() as ContentLocale
  // The filière decides which chapters exist for this student.
  const [filiere, setFiliere] = React.useState<Filiere>(DEFAULT_FILIERE)
  // Empty, not null: an empty map reads as 0% everywhere, which is exactly what
  // the server rendered, so the first client render matches it.
  const [pct, setPct] = React.useState<Record<string, number>>({})

  const refresh = React.useCallback(() => {
    setFiliere(readFiliere()?.filiere ?? DEFAULT_FILIERE)
    const map: Record<string, number> = {}
    for (const c of listCourses()) map[c.slug] = summarize(c.slug).pct ?? 0
    setPct(map)
  }, [])

  React.useEffect(() => {
    refresh()
    for (const e of EVENTS) window.addEventListener(e, refresh)
    return () => {
      for (const e of EVENTS) window.removeEventListener(e, refresh)
    }
  }, [refresh])

  const courses: CourseCardProps[] = listCourses(filiere).map((c) => ({
    title: courseTitle(c, locale),
    seed: c.slug,
    tone: c.branch,
    level: courseLevel(c, locale),
    href: `/courses/${c.slug}`,
    // Read here rather than inside the card, so the card stays a card.
    progress: pct[c.slug] ?? 0,
  }))

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-zb-ink">
        {t('nextUp')}
      </h2>
      <div className="mb-4 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
        {courses.map((course) => (
          <CourseCard key={course.seed ?? course.title} {...course} />
        ))}
      </div>
      <Link
        href="/courses"
        className="flex h-11 w-full items-center justify-center rounded-full border-2 border-zb-mint text-sm font-semibold text-zb-mint-deep no-underline transition-colors hover:bg-zb-mint-tint"
      >
        {t('seeMore')}
      </Link>
    </section>
  )
}

export default ContinueLearningSection
