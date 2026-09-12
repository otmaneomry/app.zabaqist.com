/**
 * Progress for markdown-backed courses.
 *
 * Sits on top of `lib/progressTracking.ts` — a section of a chapter is stored
 * as a "tab" there, so the dashboard and the course card keep working — and
 * adds the per-checkpoint layer the JSX courses never had: what the student
 * wrote, whether they committed to an attempt, how many hints they opened, and
 * how they self-assessed.
 *
 * Deliberately NOT a score and NOT a comparison: no rank, no podium, no streak.
 * It answers one question — how far am I through this chapter?
 */

import { getCourseProgress } from './progressTracking'

export type Verdict = 'got' | 'close' | 'not-yet'

export interface CheckpointState {
  draft: string
  tried: boolean
  verdict: Verdict | null
  hints: number
}

export const EMPTY_CHECKPOINT: CheckpointState = {
  draft: '',
  tried: false,
  verdict: null,
  hints: 0,
}

const CP_PREFIX = 'zabaqist:cp:'

/** Storage key for one checkpoint. Stable across reloads: the document is static. */
export const checkpointKey = (
  courseId: string,
  viewId: string,
  index: number,
) => `${CP_PREFIX}${courseId}:${viewId}:${index}`

/**
 * XP for a checkpoint: −20% per hint opened, +20% for solving with none.
 * Never below 40% — a student who needed every hint still did the work.
 */
export function xpFor(base: number, hintsUsed: number): number {
  const factor = hintsUsed === 0 ? 1.2 : Math.max(0.4, 1 - 0.2 * hintsUsed)
  return Math.round(base * factor)
}

export function readCheckpoint(key: string): CheckpointState {
  if (typeof window === 'undefined') return EMPTY_CHECKPOINT
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return EMPTY_CHECKPOINT
    const saved = JSON.parse(raw) as Partial<CheckpointState>
    return {
      draft: saved.draft ?? '',
      tried: saved.tried ?? false,
      verdict: saved.verdict ?? null,
      hints: saved.hints ?? 0,
    }
  } catch {
    return EMPTY_CHECKPOINT
  }
}

export function writeCheckpoint(key: string, state: CheckpointState): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(key, JSON.stringify(state))
    // A plain `storage` event does not fire in the tab that wrote it, so the
    // progress bar on the same page needs an explicit nudge.
    window.dispatchEvent(new Event('zabaqist:progress'))
  } catch {
    /* storage unavailable; the checkpoint still works this session */
  }
}

export interface ChapterTotals {
  /** Sections opened, out of the chapter's total. */
  sectionsDone: number
  /** XP earned from checkpoints actually attempted. */
  xp: number
  /** Checkpoints the student committed an attempt to. */
  attempted: number
}

/**
 * Total up a chapter from what this device stored.
 *
 * @param courseId  slug of the course
 * @param viewIds   every section id in the chapter, so "done" is measured
 *                  against the whole and not against what happens to be stored
 * @param xpByView  base XP per section, keyed by section id
 * @param visited   section ids already recorded as visited (from progressTracking)
 */
export function chapterTotals(
  courseId: string,
  viewIds: string[],
  xpByView: Record<string, number>,
  visited: string[],
  cpsByView?: Record<string, number>,
): ChapterTotals {
  const known = new Set(viewIds)
  let xp = 0
  let attempted = 0

  if (typeof window !== 'undefined') {
    const prefix = `${CP_PREFIX}${courseId}:`
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (!key?.startsWith(prefix)) continue
        const viewId = key.slice(prefix.length).replace(/:\d+$/, '')
        if (!known.has(viewId)) continue
        const state = readCheckpoint(key)
        if (!state.tried) continue
        attempted += 1
        // A view's XP is what the view is worth, not what each of its
        // checkpoints is worth. Crediting the whole view per checkpoint paid 48
        // for a ten-XP view with four of them, and the chapter card advertises
        // the sum of the view XP.
        const n = cpsByView?.[viewId]
        const share = n && n > 1 ? (xpByView[viewId] ?? 0) / n : xpByView[viewId] ?? 0
        xp += xpFor(share, state.hints)
      }
    } catch {
      /* storage unavailable — report the zero state, which is honest */
    }
  }

  return {
    sectionsDone: visited.filter((v) => known.has(v)).length,
    xp,
    attempted,
  }
}

/* ------------------------------------------------------------------ */
/* Home-page summaries                                                 */
/* ------------------------------------------------------------------ */

/**
 * A chapter's shape: its section ids and what each is worth.
 *
 * Neither the home page nor the landing page can work this out — it comes from
 * parsing the markdown, which only the server does. So the course page records
 * it the first time a chapter is opened, and the other surfaces read it back.
 * Unknown means "never opened", which is exactly when there is no progress to
 * report anyway.
 */
const SHAPE_KEY = 'zabaqist:course-shape'

type Shapes = Record<string, Record<string, number>>

const readShapes = (): Shapes => {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(localStorage.getItem(SHAPE_KEY) ?? '{}') as Shapes
  } catch {
    return {}
  }
}

export function rememberCourseShape(
  slug: string,
  xpByView: Record<string, number>,
  cpsByView?: Record<string, number>,
): void {
  if (typeof window === 'undefined') return
  try {
    const all = readShapes()
    const ids = Object.keys(xpByView)
    // Cheap equality: same count and same total is the same chapter.
    const prev = all[slug]
    if (prev && Object.keys(prev).length === ids.length) {
      if (cpsByView) rememberCheckpointCounts(slug, cpsByView)
      return
    }
    all[slug] = xpByView
    localStorage.setItem(SHAPE_KEY, JSON.stringify(all))
    if (cpsByView) rememberCheckpointCounts(slug, cpsByView)
  } catch {
    /* storage unavailable — the cards just show no percentage */
  }
}

/**
 * How many checkpoints each view holds.
 *
 * Kept beside the shape rather than inside it: the shape is what the dashboard
 * already has stored on thousands of devices, and widening its value from a
 * number to an object would make every one of those unreadable.
 */
const CPS_KEY = 'zabaqist:course-checkpoints'

function rememberCheckpointCounts(
  slug: string,
  cpsByView: Record<string, number>,
): void {
  try {
    const all = JSON.parse(localStorage.getItem(CPS_KEY) ?? '{}') as Record<
      string,
      Record<string, number>
    >
    all[slug] = cpsByView
    localStorage.setItem(CPS_KEY, JSON.stringify(all))
  } catch {
    /* the totals simply fall back to one checkpoint per view */
  }
}

export function readCheckpointCounts(
  slug: string,
): Record<string, number> | null {
  if (typeof window === 'undefined') return null
  try {
    const all = JSON.parse(localStorage.getItem(CPS_KEY) ?? '{}') as Record<
      string,
      Record<string, number>
    >
    return all[slug] ?? null
  } catch {
    return null
  }
}

export const readCourseShape = (slug: string): Record<string, number> | null =>
  readShapes()[slug] ?? null

export function readSectionCount(slug: string): number | null {
  const shape = readCourseShape(slug)
  return shape ? Object.keys(shape).length : null
}

/**
 * XP earned across every chapter opened on this device.
 *
 * A total, never a position: no rank, no comparison, no streak.
 */
export function totalXp(slugs: string[]): number {
  let sum = 0
  for (const slug of slugs) {
    const shape = readCourseShape(slug)
    if (!shape) continue
    const visited = getCourseProgress(slug)?.completedTabs ?? []
    sum += chapterTotals(
      slug,
      Object.keys(shape),
      shape,
      visited,
      readCheckpointCounts(slug) ?? undefined,
    ).xp
  }
  return sum
}

export interface CourseSummary {
  slug: string
  /** Percentage of sections opened, or null when the chapter was never opened. */
  pct: number | null
  /** Where to resume: the section last read, if any. */
  href: string
  /** ISO timestamp of the last activity, for "most recent course" ordering. */
  lastUpdated: string | null
  started: boolean
}

/**
 * What the home page needs about one course, from this device only.
 *
 * Kept here rather than in the cards so "Jump back in" and "Continuer
 * l'apprentissage" cannot disagree about what counts as progress.
 */
export function summarize(slug: string): CourseSummary {
  const base = `/courses/${slug}`
  if (typeof window === 'undefined')
    return { slug, pct: null, href: base, lastUpdated: null, started: false }

  const progress = getCourseProgress(slug)
  if (!progress) return { slug, pct: null, href: base, lastUpdated: null, started: false }

  const total = readSectionCount(slug)
  const done = progress.completedTabs.length
  return {
    slug,
    pct: total && total > 0 ? Math.min(100, Math.round((done / total) * 100)) : null,
    href: progress.lastVisitedTab ? `${base}?s=${progress.lastVisitedTab}` : base,
    lastUpdated: progress.lastUpdated,
    started: done > 0,
  }
}
