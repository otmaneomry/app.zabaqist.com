/**
 * Carries a student's work between their devices.
 *
 * The five stores under `lib/` keep writing to `localStorage` exactly as they
 * did — nothing above them changes, and the app still works with the network
 * off. This module makes `localStorage` a *cache* of Postgres rather than the
 * only copy: pull once on sign-in, then push whenever one of the existing
 * events fires.
 *
 * Every writer already announces itself (`zabaqist:progress`,
 * `zabaqist:filiere`, `zabaqist:activity`, `zabaqist:onboarding`), so there is
 * no need to wrap or intercept a single one of them.
 *
 * ── The merge rule ──────────────────────────────────────────────────────────
 * Union and maximum, never last-write-wins.
 *
 * Learning progress only ever grows: a section read stays read, a checkpoint
 * attempted stays attempted. Merging by taking the union of the sets and the
 * larger of each number cannot lose a section or a checkpoint, and needs no
 * clock agreement between a phone and a laptop.
 *
 * It DOES undercount the cumulative counters: seconds and the daily tallies are
 * additive, and the maximum of two totals is not their sum. Two devices that
 * both start at 100 and read 20 and 30 offline meet at 130, not 150. Counting
 * exactly would need a per-device delta; what is at stake is a reading
 * statistic rather than the student's work. Last-write-wins would let a
 * stale tab left open overnight quietly erase a morning's reading — the one
 * failure a student would never forgive and never be able to report precisely.
 */

import { createClient } from '@/lib/supabase/client'
import { dayKey, type DayActivity } from '@/lib/activity'
import {
  FILIERE_EVENT,
  type Filiere,
  type FiliereChoice,
  type Track,
} from '@/lib/filiere'
import { ONBOARDING_EVENT, type Answers } from '@/lib/onboarding'
import { EMPTY_CHECKPOINT, type CheckpointState } from '@/lib/courseProgress'
import type { CourseProgress } from '@/lib/progressTracking'

const CP_PREFIX = 'zabaqist:cp:'
const PROGRESS_KEY = 'zabaqist_course_progress'
const ACTIVITY_KEY = 'zabaqist:activity'
const FILIERE_KEY = 'zabaqist:filiere'
const ONBOARDING_KEY = 'zabaqist:onboarding'
const PROGRESS_EVENT = 'zabaqist:progress'
/** When this device last completed a pull. Used to date-order drafts. */
const PULLED_AT_KEY = 'zabaqist:pulled-at'
/** Which account the work in localStorage belongs to. */
const OWNER_KEY = 'zabaqist:owner'

/** Every event a store fires when it changes something worth keeping. */
export const SYNC_EVENTS = [
  PROGRESS_EVENT,
  FILIERE_EVENT,
  ACTIVITY_KEY,
  ONBOARDING_EVENT,
] as const

/* ------------------------------------------------------------------ */
/* Whose device is this?                                               */
/* ------------------------------------------------------------------ */

/**
 * Forget every trace of the account this device was last used for.
 *
 * Everything under `zabaqist:` and the one legacy `zabaqist_` key: progress,
 * checkpoints, activity, filière, the funnel's answers, the chapter shapes and
 * the celebration markers.
 */
export function resetLocalState(): void {
  try {
    const doomed: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k && k !== OWNER_KEY && /^zabaqist[:_]/.test(k)) doomed.push(k)
    }
    for (const k of doomed) localStorage.removeItem(k)
  } catch {
    /* storage unavailable — there is nothing to forget */
  }
}

/**
 * Claim this device for `userId`, and say whether it had to be taken off
 * somebody else first.
 *
 * `signin/actions.ts` asks Google for `prompt: 'select_account'` with the
 * comment "Students share machines." It was right, and nothing acted on it:
 * not one storage key is namespaced by account and sign-out clears only
 * cookies. So the next student to sign in on a school computer mounted
 * `SyncProvider` over the last one's work, `pullAll` UNIONED their own rows
 * into it — union and maximum, which cannot drop anything — and `pushAll`
 * wrote the result up. One student's chapters, checkpoints and XP, filed under
 * another student's account, permanently.
 *
 * A device with NO recorded owner is not the same thing. That is a visitor who
 * used the funnel or read a chapter before signing up, and carrying that work
 * into their new account is the intended behaviour.
 */
export function claimDevice(userId: string): boolean {
  try {
    const previous = localStorage.getItem(OWNER_KEY)
    const takenFromSomeoneElse = previous !== null && previous !== userId
    if (takenFromSomeoneElse) resetLocalState()
    if (previous !== userId) localStorage.setItem(OWNER_KEY, userId)
    return takenFromSomeoneElse
  } catch {
    return false
  }
}

/* ------------------------------------------------------------------ */
/* localStorage helpers                                                */
/* ------------------------------------------------------------------ */

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

/** True when the value actually landed. Quota and private mode both throw. */
function writeJSON(key: string, value: unknown): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    // The caller has to know. This used to be swallowed, and `pullAll` then
    // reported success — after which `pushAll` read the UNMERGED local value
    // and wrote it over the server's, deleting whatever the pull had just
    // fetched. A write that did not happen cannot be followed by a push.
    return false
  }
}

/** Every stored checkpoint, keyed by its parsed coordinates. */
function localCheckpoints(): {
  course_slug: string
  view_id: string
  idx: number
  state: CheckpointState
}[] {
  const out: ReturnType<typeof localCheckpoints> = []
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key?.startsWith(CP_PREFIX)) continue
      // `<course>:<view>:<index>` — slugs are kebab-case, so the last two
      // colons are the real separators.
      const rest = key.slice(CP_PREFIX.length)
      const lastColon = rest.lastIndexOf(':')
      const prevColon = rest.lastIndexOf(':', lastColon - 1)
      if (lastColon < 0 || prevColon < 0) continue
      const idx = Number(rest.slice(lastColon + 1))
      if (!Number.isFinite(idx)) continue
      out.push({
        course_slug: rest.slice(0, prevColon),
        view_id: rest.slice(prevColon + 1, lastColon),
        idx,
        state: readJSON<CheckpointState>(key, EMPTY_CHECKPOINT),
      })
    }
  } catch {
    /* storage unavailable */
  }
  return out
}

const cpKey = (c: string, v: string, i: number) => `${CP_PREFIX}${c}:${v}:${i}`

/* ------------------------------------------------------------------ */
/* Pull — the server's copy, merged into this device                   */
/* ------------------------------------------------------------------ */

/** What a pull managed to do. */
export interface PullResult {
  /** Something on this device changed, so the interface should re-read. */
  changed: boolean
  /**
   * Every read AND every write succeeded. When false this device is not
   * current, and pushing would overwrite the server with a stale copy.
   */
  complete: boolean
}

/** True when the server's row was written after this device last pulled. */
function remoteIsNewer(remoteAt?: string | null): boolean {
  if (!remoteAt) return false
  try {
    const seen = localStorage.getItem(PULLED_AT_KEY)
    return !!seen && remoteAt > seen
  } catch {
    return false
  }
}

/**
 * Read everything back and merge it in.
 */
export async function pullAll(userId: string): Promise<PullResult> {
  const supabase = createClient()
  let changed = false
  let complete = true

  /** A failed merge — network or storage — means this device is not current. */
  const kept = (ok: boolean) => {
    if (!ok) complete = false
    return ok
  }

  const [profile, progress, checkpoints, activity] = await Promise.all([
    supabase.from('profiles').select('filiere, track, onboarding').eq('id', userId).maybeSingle(),
    supabase.from('course_progress').select('*').eq('user_id', userId),
    supabase.from('checkpoints').select('*').eq('user_id', userId),
    supabase.from('activity').select('*').eq('user_id', userId),
  ])

  // A select that FAILED looks exactly like one that found nothing: both leave
  // `.data` empty. Merging nothing and then pushing would hand the server this
  // device's stale copy as the truth, so a failed read has to be recorded.
  for (const r of [profile, progress, checkpoints, activity])
    if (r.error) complete = false

  // ── Filière and the funnel's answers.
  if (profile.data) {
    const { filiere, track, onboarding } = profile.data
    // Only adopt the remote choice when this device has none: a student who
    // just switched filière here should not have it undone by a stale row.
    if (filiere && track && !localStorage.getItem(FILIERE_KEY)) {
      if (kept(writeJSON(FILIERE_KEY, { filiere, track } satisfies FiliereChoice)))
        changed = true
    }
    const remote = (onboarding ?? {}) as Answers
    if (Object.keys(remote).length) {
      const local = readJSON<Answers>(ONBOARDING_KEY, {})
      // The funnel is answered once; keep whichever copy finished it.
      const merged: Answers = { ...remote, ...local }
      if (JSON.stringify(merged) !== JSON.stringify(local)) {
        if (kept(writeJSON(ONBOARDING_KEY, merged))) changed = true
      }
    }
  }

  // ── Per-chapter progress: union the sections, take the larger time.
  if (progress.data?.length) {
    const map = readJSON<Record<string, CourseProgress>>(PROGRESS_KEY, {})
    for (const row of progress.data) {
      const local = map[row.course_slug]
      const views = new Set([
        ...(local?.completedTabs ?? []),
        ...((row.completed_views ?? []) as string[]),
      ])
      map[row.course_slug] = {
        courseId: row.course_slug,
        lastVisitedTab: local?.lastVisitedTab || (row.last_visited_view ?? ''),
        completedTabs: [...views],
        lastUpdated: row.updated_at ?? local?.lastUpdated ?? new Date().toISOString(),
        timeSpent: Math.max(local?.timeSpent ?? 0, row.time_spent_seconds ?? 0),
      }
      changed = true
    }
    kept(writeJSON(PROGRESS_KEY, map))
  }

  // ── Checkpoints: the more advanced attempt wins, and it is never "less
  //    tried" than before. `hints` takes the max so the XP penalty a student
  //    already paid on one device is not refunded on another.
  for (const row of checkpoints.data ?? []) {
    const key = cpKey(row.course_slug, row.view_id, row.idx)
    const local = readJSON<CheckpointState>(key, EMPTY_CHECKPOINT)
    // `tried`, `verdict` and `draft` are the CURRENT attempt, not a total.
    // "Réessayer" clears all three on purpose — reprise illimitée — so folding
    // them with `local || row` resurrected the failed attempt the moment an
    // older row came back from another device. The date decides instead.
    const fresher = remoteIsNewer(row.updated_at)
    const merged: CheckpointState = {
      draft: fresher ? (row.draft ?? '') : local.draft || row.draft || '',
      tried: fresher ? !!row.tried : local.tried || row.tried,
      verdict: fresher ? (row.verdict ?? null) : (local.verdict ?? row.verdict ?? null),
      // The one that only grows: the XP penalty already paid.
      hints: Math.max(local.hints, row.hints ?? 0),
    }
    if (JSON.stringify(merged) !== JSON.stringify(local)) {
      if (kept(writeJSON(key, merged))) changed = true
    }
  }

  // ── Activity: per day, the larger of each counter.
  if (activity.data?.length) {
    const log = readJSON<Record<string, DayActivity>>(ACTIVITY_KEY, {})
    for (const row of activity.data) {
      const local = log[row.day] ?? { sections: 0, checkpoints: 0, seconds: 0 }
      log[row.day] = {
        sections: Math.max(local.sections, row.sections ?? 0),
        checkpoints: Math.max(local.checkpoints, row.checkpoints ?? 0),
        seconds: Math.max(local.seconds, row.seconds ?? 0),
      }
      changed = true
    }
    kept(writeJSON(ACTIVITY_KEY, log))
  }

  // What the server was known to hold at this moment, so a later merge can tell
  // "this device has not seen that row yet" from "this device has a newer one".
  if (complete) writeJSON(PULLED_AT_KEY, new Date().toISOString())

  return { changed, complete }
}

/* ------------------------------------------------------------------ */
/* Push — this device's copy, up                                       */
/* ------------------------------------------------------------------ */

/**
 * Send everything this device knows.
 *
 * Whole-state rather than a diff: the payload is a few kilobytes even for a
 * student who has finished the year, and a diff would need change tracking in
 * five stores that currently need none. Upserts are idempotent, so a push that
 * fails is simply retried by the next event.
 */
let inFlight: Promise<void> = Promise.resolve()

/**
 * Queue a push behind any push already running.
 *
 * Three callers fire this — the debounce, the end of the initial pull, and the
 * tab being hidden — and only the first went through a timer. Two could be in
 * the air at once, and the one that started with the OLDER snapshot could land
 * second and put the server back.
 */
export function pushAll(userId: string, email: string): Promise<void> {
  inFlight = inFlight.catch(() => {}).then(() => pushNow(userId, email))
  return inFlight
}

async function pushNow(userId: string, email: string): Promise<void> {
  const supabase = createClient()

  const filiere = readJSON<FiliereChoice | null>(FILIERE_KEY, null)
  const onboarding = readJSON<Answers>(ONBOARDING_KEY, {})
  const progress = readJSON<Record<string, CourseProgress>>(PROGRESS_KEY, {})
  const activity = readJSON<Record<string, DayActivity>>(ACTIVITY_KEY, {})
  const checkpoints = localCheckpoints()
  const now = new Date().toISOString()

  const jobs: PromiseLike<unknown>[] = []

  // Upsert, not update: an account that signed in before the schema existed
  // never fired the profile trigger, so an update would write to no row at all
  // — and say nothing about it.
  jobs.push(
    supabase.from('profiles').upsert({
      id: userId,
      email,
      filiere: (filiere?.filiere ?? null) as Filiere | null,
      track: (filiere?.track ?? null) as Track | null,
      onboarding,
      updated_at: now,
    }),
  )

  const progressRows = Object.values(progress).map((p) => ({
    user_id: userId,
    course_slug: p.courseId,
    last_visited_view: p.lastVisitedTab || null,
    completed_views: p.completedTabs ?? [],
    time_spent_seconds: p.timeSpent ?? 0,
    updated_at: now,
  }))
  if (progressRows.length)
    jobs.push(supabase.from('course_progress').upsert(progressRows))

  const cpRows = checkpoints.map((c) => ({
    user_id: userId,
    course_slug: c.course_slug,
    view_id: c.view_id,
    idx: c.idx,
    draft: c.state.draft ?? '',
    tried: c.state.tried ?? false,
    verdict: c.state.verdict,
    hints: c.state.hints ?? 0,
    updated_at: now,
  }))
  if (cpRows.length) jobs.push(supabase.from('checkpoints').upsert(cpRows))

  const activityRows = Object.entries(activity).map(([day, a]) => ({
    user_id: userId,
    day,
    sections: a.sections ?? 0,
    checkpoints: a.checkpoints ?? 0,
    seconds: a.seconds ?? 0,
  }))
  if (activityRows.length)
    jobs.push(supabase.from('activity').upsert(activityRows))

  await Promise.allSettled(jobs)
}

/** Today, in the student's own calendar — matches `lib/activity.ts`. */
export const today = () => dayKey(new Date())
