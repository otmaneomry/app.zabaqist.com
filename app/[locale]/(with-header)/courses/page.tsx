import React from 'react'

import CourseCatalog from '@/components/course/CourseCatalog'

export const metadata = {
  title: 'Cours · Zabaqist',
  description:
    'Chapitres de mathématiques du programme du Baccalauréat Marocain.',
}

/**
 * ⚠️ `<CoursesPage />` USED TO RENDER UNDER THIS, AND IT WAS FICTION.
 *
 * It was the last of the Brilliant scaffolding on a signed-in route — its own
 * file called it "the two legacy grids" — and below the real catalogue a
 * student scrolled into:
 *
 *  · `LearningPaths`: six invented "Thématiques" (Algèbre, Analyse, Géométrie,
 *    Probabilités, …) and a card announcing "Mathématiques - Sciences Maths ·
 *    Programme complet du Baccalauréat Marocain" — a completeness claim, for a
 *    filière whose algebra half a Sciences Expérimentales reader is not even
 *    shown;
 *  · `BrowseAllCourses`: a search box wired to nothing, category chips that
 *    filtered nothing, and six more invented titles including "Géométrie dans
 *    l'Espace" and "Probabilités Continues" — neither of which is a chapter in
 *    `content/course/`.
 *
 * Both were hardcoded French, so the Arabic route served them in French; both
 * were inline styles with literal hex colours (`#4b5563`, `white`) against a
 * token system used everywhere else. `<CourseCatalog />` above already renders
 * the chapters that really open, from the markdown, filière-aware and bilingual
 * — so this was a fake catalogue sitting under the true one.
 *
 * The files are still in the tree (`CoursesPage.tsx`, `LearningPaths.tsx`,
 * `BrowseAllCourses.tsx`); only the render is gone, so restoring is one import.
 * They should be deleted once nothing else wants them.
 */
export default function Courses() {
  return (
    <div className="container mx-auto max-w-6xl p-6">
      {/* Server-rendered from `content/course/`: the chapters that really open. */}
      <CourseCatalog />
    </div>
  )
}
