import React from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import CourseCatalog from '@/components/course/CourseCatalog'
import { alternatesFor } from '@/lib/publicPaths'
import type { ContentLocale } from '@/lib/courseCatalog'

/**
 * The catalogue, described in the language it is served in.
 *
 * This was a hardcoded French `export const metadata`, so `/ar/courses` — a
 * page whose body, chapter titles and chrome are all Arabic — announced itself
 * to a crawler and to anyone sharing the link as "Cours · Zabaqist". A static
 * object cannot read the locale; `generateMetadata` can, and the strings it
 * needs are the ones `CourseCatalog` already renders as its own heading.
 *
 * `alternates` is set for the same reason the chapters set theirs: the root
 * layout's belongs to the root page, and Next merges metadata shallowly, so
 * inheriting it made this page claim the homepage as its canonical URL.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const l: ContentLocale = locale === 'ar' ? 'ar' : 'fr'
  const t = await getTranslations({ locale: l, namespace: 'catalog' })

  return {
    title: `${t('title')} · Zabaqist`,
    description: t('sub'),
    alternates: alternatesFor('/courses', l),
  }
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
