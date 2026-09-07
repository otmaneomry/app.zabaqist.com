/**
 * The signed-in home.
 *
 * The chapter structure is loaded here, on the server, because `loadCourseDoc`
 * reads the filesystem. All thirteen chapters' tab lists come to 6.7 KB — small
 * enough to send every time and avoid a request when the reader's chapter is
 * only known on the client, where their progress lives.
 */

import React from 'react'

import MainContent from '@/components/MainContent'
import FiliereGate from '@/components/onboarding/FiliereGate'
import type { ChapterShape } from '@/components/home/ContinuePanel'
import { listCourses, loadCourseDoc, tabsOf } from '@/lib/courseDoc'

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
