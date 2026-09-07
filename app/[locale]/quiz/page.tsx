/**
 * The revision plan: every chapter's self-assessment, read back as one list.
 *
 * `/quiz/<slug>` asks one chapter's questions. This is the index above them —
 * what the whole programme asks, and where this reader's gaps are.
 *
 * It is static by design for now: the questions are the pedagogue's authored
 * `## Auto-évaluation` items, in the programme's own order. A random draw
 * across all thirteen chapters is the better instrument and is the next step,
 * but it needs an item bank that does not exist yet — see TODO-zabaqist.md.
 * Shuffling thirteen fixed checklists would look like an exam and measure
 * nothing more than reading them in order does.
 */

import React from 'react'
import { getTranslations } from 'next-intl/server'

import BackLink from '@/components/quiz/BackLink'
import RevisionPlan, { type ChapterCheck } from '@/components/quiz/RevisionPlan'
import { listCourses } from '@/lib/courseCatalog'
import { loadCourseDoc } from '@/lib/courseDoc'

export async function generateMetadata() {
  const t = await getTranslations('revision')
  return { title: t('title'), description: t('metaDescription') }
}

export default async function RevisionPage() {
  const courses = listCourses()
  const docs = await Promise.all(courses.map((c) => loadCourseDoc(c.slug)))

  const chapters: ChapterCheck[] = courses.flatMap((c, i) => {
    const doc = docs[i]
    // A chapter with no authored self-assessment has nothing to ask. The
    // browser suite asserts there are none, so this is a guard, not a case.
    if (!doc || doc.checklist.length === 0) return []
    return [
      {
        slug: c.slug,
        title: c.title,
        titleAr: c.titleAr,
        branch: c.branch,
        items: doc.checklist,
        contentDir: c.contentDir,
      },
    ]
  })

  const t = await getTranslations('revision')

  return (
    <main className="mx-auto w-full max-w-3xl px-5 pb-16 pt-8 sm:px-6">
      {/* Above the client component on purpose: the plan waits for the device
          before it can draw anything, and the way out should not wait with it. */}
      <BackLink href="/home" label={t('backToDashboard')} />
      <RevisionPlan chapters={chapters} />
    </main>
  )
}
