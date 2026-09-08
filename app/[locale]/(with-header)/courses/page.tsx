import React from 'react'

import CourseCatalog from '@/components/course/CourseCatalog'

export const metadata = {
  title: 'Cours · Zabaqist',
  description:
    'Chapitres de mathématiques du programme du Baccalauréat Marocain.',
}

/**
 * The catalogue.
 *
 * `CourseCatalog` owns the banner, the branch filters, the search and the grid —
 * everything DataCamp puts on `Learn → Courses` — and every card in it comes from
 * a markdown chapter that really opens.
 *
 * Three components used to render underneath it and all three were fiction:
 * `LearningPaths` (six invented "Thématiques" and a completeness claim for a
 * programme half of which Sciences Expérimentales students are never shown),
 * `BrowseAllCourses` (a dead search box, chips that filtered nothing, and six
 * chapter titles with no document behind them), and the `CoursesPage` wrapper
 * that rendered the pair. Their render was removed earlier with a note saying to
 * delete the files once nothing wanted them; the rewrite that gave this page a
 * real filter row and a real search made that true, so they are gone.
 */
export default function Courses() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
      <CourseCatalog />
    </div>
  )
}
