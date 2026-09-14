/**
 * The signed-in home.
 *
 * The chapter structure is loaded here, on the server, because `loadCourseDoc`
 * reads the filesystem. All thirteen chapters' tab lists come to 6.7 KB — small
 * enough to send every time and avoid a request when the reader's chapter is
 * only known on the client, where their progress lives.
 */

import React from 'react'
import type { Metadata } from 'next'

import MainContent from '@/components/MainContent'
import FiliereGate from '@/components/onboarding/FiliereGate'
import type { ChapterShape } from '@/components/home/ContinuePanel'
import { listCourses, loadCourseDoc, tabsOf } from '@/lib/courseDoc'
import { alternatesFor } from '@/lib/publicPaths'

/**
 * Only `alternates`, so the title and description still come from the root
 * layout — metadata merges shallowly, and this page has nothing better to say
 * about itself than the product's own name.
 *
 * What it must NOT inherit is the root's `alternates`, which names the root.
 * Every page that skipped this was telling a crawler its canonical URL was the
 * homepage. This one is disallowed in robots.txt in both locales, so no crawler
 * reads it today — the line is here so that stays true of the next page too.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return { alternates: alternatesFor('/home', locale === 'ar' ? 'ar' : 'fr') }
}

async function chapterShape(): Promise<ChapterShape> {
  const out: ChapterShape = {}
  await Promise.all(
    listCourses().map(async (c) => {
      const doc = await loadCourseDoc(c.slug)
      if (!doc) return
      out[c.slug] = {
        // Every view, not just the first: a tab is only finished when all of
        // its sections are, and progress has to count sections or a reader
        // three sections into a seven-section part still shows nothing.
        tabs: tabsOf(doc.views).map((t) => ({
          id: t.viewIds[0]!,
          label: t.label,
          kind: t.kind,
          viewIds: t.viewIds,
        })),
        views: doc.views.length,
      }
    }),
  )
  return out
}

export default async function Home() {
  const shape = await chapterShape()

  return (
    <main>
      {/* Google's callback cannot know whether this reader has picked a
          filière — that answer is in localStorage. So the funnel is entered
          from here, on the client, rather than from the sign-in redirect. */}
      <FiliereGate />
      <MainContent shape={shape} />
    </main>
  )
}
