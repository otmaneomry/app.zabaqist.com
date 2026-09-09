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
import type { ChapterShape } from '@/lib/chapterShape'
import { listCourses, loadCourseDoc, tabsOf } from '@/lib/courseDoc'
import { createClient } from '@/lib/supabase/server'

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

/**
 * The name and face the dashboard greets the reader with.
 *
 * Read here as well as in the layout rather than threaded down through it: the
 * layout hands its copy to the header, which needs an avatar, and the greeting
 * needs a first name. Passing one shape through a shared layout to satisfy two
 * unrelated consumers is what makes layouts grow props they do not use. Supabase
 * serves this from the session cookie already in the request, so the second read
 * costs no round trip.
 *
 * It must not take the page down when the service is unusable — an e2e-bypassed
 * request reaches here with no Supabase at all, and a dashboard that fails to
 * render because it could not draw an avatar is a worse outcome than "Te
 * revoilà" with no name after it.
 */
async function greeting() {
  try {
    const supabase = await createClient()
    const meta = (await supabase.auth.getUser()).data.user?.user_metadata ?? {}
    return {
      name: (meta.full_name ?? meta.name ?? null) as string | null,
      // Google spells the avatar two ways depending on how the identity was
      // linked; both appear in the wild on this project.
      image: (meta.avatar_url ?? meta.picture ?? null) as string | null,
    }
  } catch {
    return { name: null, image: null }
  }
}

export default async function Home() {
  const [shape, { name, image }] = await Promise.all([chapterShape(), greeting()])

  return (
    <main>
      {/* Google's callback cannot know whether this reader has picked a
          filière — that answer is in localStorage. So the funnel is entered
          from here, on the client, rather than from the sign-in redirect. */}
      <FiliereGate />
      <MainContent shape={shape} name={name} image={image} />
    </main>
  )
}
