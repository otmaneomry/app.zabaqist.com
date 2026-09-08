'use client'

/**
 * One answer to "where is this student, in every chapter?", shared by everything
 * on the dashboard that draws it.
 *
 * DataCamp's dashboard states the same progress three times — in the resume
 * banner, in the activity trio, and again in "Pick up where you left off" — and
 * it only survives that because one number feeds all three. This hook is that
 * number. `lib/courseProgress.ts` already makes the same argument for
 * `summarize()`: *"kept here rather than in the cards so 'Jump back in' and
 * 'Continuer l'apprentissage' cannot disagree about what counts as progress."*
 *
 * Progress lives in `localStorage`, so it cannot be read during render — the
 * server would print one student's figures into another's HTML, and the
 * mismatch is what made `ContinueLearningSection` throw away its server markup.
 * `ready` is false until the effect has run; every consumer renders a settled
 * zero state until then.
 */

import { useCallback, useEffect, useMemo, useState } from 'react'

import type { ChapterShape, ChapterTab } from '@/components/home/ContinuePanel'
import { listCourses, type CourseMeta } from '@/lib/courseCatalog'
import { getCourseProgress } from '@/lib/progressTracking'
import {
  DEFAULT_FILIERE,
  FILIERE_EVENT,
  readFiliere,
  type Filiere,
} from '@/lib/filiere'

const EVENTS = [FILIERE_EVENT, 'zabaqist:progress']

export interface ChapterState {
  course: CourseMeta
  tabs: ChapterTab[]
  /** Section ids this device has opened. */
  read: Set<string>
  /** Sections opened, and sections there are. */
  done: number
  total: number
  pct: number
  started: boolean
  finished: boolean
  /** The first part not fully read, and the first unread section inside it. */
  nextTab?: ChapterTab
  nextView?: string
  /**
   * Where "carry on" goes.
   *
   * An unstarted chapter opens on its path view, which lays the whole journey
   * out; a started one goes straight to the section, because a student mid-way
   * has seen the map and wants the page.
   */
  href: string
}

export interface ChapterStates {
  /** False until the device's own figures have been read. */
  ready: boolean
  /** Every chapter of the student's filière, in programme order. */
  all: ChapterState[]
  /**
   * The one chapter the dashboard leads with: the furthest one started but not
   * finished, else the first unstarted. Never a finished chapter while an
   * unfinished one exists — the banner is for the next step, not a trophy shelf.
   */
  current: ChapterState | null
  /** Started, not finished — the rows under "pick up where you left off". */
  inProgress: ChapterState[]
}

const EMPTY: ChapterStates = {
  ready: false,
  all: [],
  current: null,
  inProgress: [],
}

export function useChapterStates(shape: ChapterShape): ChapterStates {
  const [filiere, setFiliere] = useState<Filiere>(DEFAULT_FILIERE)
  // `null`, not `{}`: an empty map is indistinguishable from "read the device
  // and it had nothing", and the two need different renders — the first is a
  // skeleton, the second is a genuine zero state.
  const [seen, setSeen] = useState<Record<string, string[]> | null>(null)

  const refresh = useCallback(() => {
    setFiliere(readFiliere()?.filiere ?? DEFAULT_FILIERE)
    const map: Record<string, string[]> = {}
    for (const c of listCourses())
      map[c.slug] = getCourseProgress(c.slug)?.completedTabs ?? []
    setSeen(map)
  }, [])

  useEffect(() => {
    refresh()
    for (const e of EVENTS) window.addEventListener(e, refresh)
    return () => {
      for (const e of EVENTS) window.removeEventListener(e, refresh)
    }
  }, [refresh])

  return useMemo(() => {
    if (!seen) return EMPTY

    const all: ChapterState[] = listCourses(filiere).map((course) => {
      const tabs = shape[course.slug]?.tabs ?? []
      const read = new Set(seen[course.slug] ?? [])
      // Sections, not parts. Counting parts rounds a half-read part to nothing,
      // which is what made the panel say 0% to someone who had just spent
      // twenty minutes inside one.
      const views = tabs.flatMap((tab) => tab.viewIds)
      const total = views.length
      const done = views.filter((v) => read.has(v)).length

      const tabDone = (tab: ChapterTab) => tab.viewIds.every((v) => read.has(v))
      const nextTab = tabs.find((tab) => !tabDone(tab)) ?? tabs[0]
      const nextView = nextTab?.viewIds.find((v) => !read.has(v)) ?? nextTab?.id

      const base = `/courses/${course.slug}`
      return {
        course,
        tabs,
        read,
        done,
        total,
        pct: total ? Math.round((done / total) * 100) : 0,
        started: done > 0,
        finished: total > 0 && done === total,
        nextTab,
        nextView,
        href: done === 0 ? base : `${base}${nextView ? `?s=${nextView}` : ''}`,
      }
    })

    return {
      ready: true,
      all,
      current:
        all.find((x) => x.started && !x.finished) ??
        all.find((x) => !x.started) ??
        all[0] ??
        null,
      inProgress: all.filter((x) => x.started && !x.finished),
    }
  }, [filiere, shape, seen])
}
