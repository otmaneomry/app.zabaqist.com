/**
 * A chapter's self-assessment.
 *
 * `quizId` is a chapter slug. It used to be a number indexing three hardcoded
 * mock quizzes in `lib/mockApi.ts` — "Algèbre · Niveau 1", collège-level, tied
 * to none of the thirteen chapters — so every reader got the same three, and
 * twelve chapters had nothing at all.
 *
 * Numeric ids still resolve, because `/quiz/1` is linked from the landing
 * header, the course pages and the fallback: they now mean "the nth chapter of
 * the catalogue" rather than a 404 or a broken link.
 */

import React from 'react'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

import SelfCheck from '@/components/quiz/SelfCheck'
import { Link } from '@/i18n/navigation'
import { courseTitle, listCourses, type ContentLocale } from '@/lib/courseCatalog'
import { loadCourseDoc } from '@/lib/courseDoc'

export default async function QuizPage({
  params,
}: {
  params: Promise<{ quizId: string; locale: string }>
}) {
  const { quizId, locale } = await params

  // A number means the nth chapter — the old links keep working.
  const courses = listCourses()
  const byNumber = /^\d+$/.test(quizId) ? courses[Number(quizId) - 1] : undefined
  const slug = byNumber?.slug ?? quizId

  const doc = await loadCourseDoc(slug)
  if (!doc) notFound()

  const t = await getTranslations('selfcheck')

  if (doc.checklist.length === 0) {
    return (
      <main className="mx-auto w-full max-w-2xl px-5 py-16 text-center">
        <p className="text-zb-ink-2">{t('none')}</p>
        <Link
          href={`/courses/${slug}`}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-zb-mint px-6 text-sm font-semibold text-white no-underline"
        >
          {t('backToChapter')}
        </Link>
      </main>
    )
  }

  return (
    <main>
      <SelfCheck
        slug={slug}
        chapter={courseTitle(doc.meta, locale as ContentLocale)}
        items={doc.checklist}
        contentDir={doc.meta.contentDir}
      />
    </main>
  )
}
