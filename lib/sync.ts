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
import { SELFCHECK_KEY } from '@/lib/selfCheck'
import type { CourseProgress } from '@/lib/progressTracking'

const CP_PREFIX = 'zabaqist:cp:'
const PROGRESS_KEY = 'zabaqist_course_progress'
const ACTIVITY_KEY = 'zabaqist:activity'
const FILIERE_KEY = 'zabaqist:filiere'
const ONBOARDING_KEY = 'zabaqist:onboarding'
const PROGRESS_EVENT = 'zabaqist:progress'
/** When this device last completed a pull. Used to date-order drafts. */
const PULLED_AT_KEY = 'zabaqist:pulled-at'
/**
 * When the filière was last chosen ON THIS DEVICE.
 *
 * `zabaqist:filiere` carries no date of its own and `lib/filiere.ts` is written
 * by the picker, which knows nothing about syncing. `SyncProvider` stamps this
 * when the picker announces a change; `pullAll` is the only reader. See the
 * filière block there for why a pull that can never change its mind is a
 * deadlock rather than a precaution.
 */
const FILIERE_AT_KEY = 'zabaqist:filiere-at'
/** Which account the work in localStorage belongs to. */
export const OWNER_KEY = 'zabaqist:owner'
/** `components/course/ChapterComplete.tsx` — one marker per chapter celebrated. */
const CELEBRATED_PREFIX = 'zabaqist:celebrated:'
/** Where a dispossessed student's device-local work waits for them. */
const ARCHIVE_PREFIX = 'zabaqist:device-local:'
/**
 * The shape of every key this app owns.
 *
 * Exported because `app/auth/signout/route.ts` has to clear exactly this set
 * from a page that cannot import this module, and two regexes that are supposed
 * to agree drift the moment one of them is edited alone.
 */
export const DEVICE_KEY_PATTERN = '^zabaqist[:_]'

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
 *
 * Two exceptions, both because the only caller is `claimDevice`.
 *
 * `zabaqist:owner`, which that function overwrites in the same breath. It does
 * NOT survive signing out, and that distinction is the whole of the rule: an
 * owner that is never removed is an owner that outlives the student, and this
 * key used to be removed by nothing at all. The last student's uuid stayed on
 * the machine for good, so the next genuine visitor — who answered the entire
 * funnel while signed OUT — had that work wiped the instant they signed up,
 * because `claimDevice` saw a previous owner who was not them. Work done while
 * nobody was signed in should follow whoever then signs up; work belonging to
 * an identified student must not. Only sign-out can tell the two apart, and now
 * it does: see `app/auth/signout/route.ts`, which clears this whole set, owner
 * and archives included.
 *
 * And the archives, which belong to students who are not party to this claim.
 * On a machine three or four students share, a wipe that took them too would
 * mean each arrival destroyed everyone else's — the feature would work for
 * exactly the previous student and nobody before them.
 */
export function resetLocalState(): void {
  const ours = new RegExp(DEVICE_KEY_PATTERN)
  try {
    const doomed: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (!k || k === OWNER_KEY || !ours.test(k)) continue
      if (k.startsWith(ARCHIVE_PREFIX)) continue
      doomed.push(k)
    }
    for (const k of doomed) localStorage.removeItem(k)
  } catch {
    /* storage unavailable — there is nothing to forget */
  }
}

/**
 * What this device holds that the server cannot give back.
 *
 * Two stores, and both on purpose: `lib/selfCheck.ts` — the `## Auto-évaluation`
 * verdicts, this product's only assessment — and the per-chapter celebration
 * markers. Neither has a table, and neither is asking for one; see the header of
 * `lib/selfCheck.ts` for why a self-assessment that becomes a row starts
 * becoming a mark. The consequence is that a wipe is permanent for them, so the
 * claim below moves them aside rather than deleting them.
 */
function deviceLocalEntries(): Record<string, string> {
  const out: Record<string, string> = {}
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (!k) continue
      if (k !== SELFCHECK_KEY && !k.startsWith(CELEBRATED_PREFIX)) continue
      const v = localStorage.getItem(k)
      if (v !== null) out[k] = v
    }
  } catch {
    /* storage unavailable — there is nothing to set aside */
  }
  return out
}

const archiveKey = (owner: string) => `${ARCHIVE_PREFIX}${owner}`

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
 * into their new account is the intended behaviour — a sentence that was only
 * true on a device nobody had ever signed in on, until `/auth/signout` started
 * removing the owner along with the work.
 *
 * The wipe is right for everything the server can hand back. It is not right
 * for the two stores that have nowhere to be handed back FROM, so those are
 * archived under the outgoing student's uuid and restored when that student
 * signs back in on this machine. Archiving rather than simply sparing them:
 * sparing them would show one student their neighbour's self-assessment, which
 * is the very leak this function exists to prevent.
 */
export function claimDevice(userId: string): boolean {
  try {
    const previous = localStorage.getItem(OWNER_KEY)
    const takenFromSomeoneElse = previous !== null && previous !== userId
    if (takenFromSomeoneElse) {
      // Set aside, wipe, hand back — and `theirs` is an IN-MEMORY copy, so
      // whether it survives depends entirely on that write landing. It was
      // attempted once, after the wipe, with its result discarded: quota or
      // private mode — the two failures `writeJSON` returns false for, both
      // documented at the top of this file — and the outgoing student's
      // self-assessments were gone with nothing left to restore them from.
      //
      // Twice, then, either side of the wipe. Before, because the data still
      // exists to be re-read if it fails; after, because `resetLocalState`
      // frees exactly the space their own keys were occupying, so the retry
      // has room the first attempt did not. The wipe itself stays
      // unconditional: a device that cannot archive must still not show this
      // student the last one's work, which is the leak this function exists
      // to prevent.
      const theirs = deviceLocalEntries()
      const filed =
        Object.keys(theirs).length === 0 || writeJSON(archiveKey(previous), theirs)
      resetLocalState()
      if (!filed) writeJSON(archiveKey(previous), theirs)
      const mine = readJSON<Record<string, string>>(archiveKey(userId), {})
      for (const [k, v] of Object.entries(mine)) {
        try {
          localStorage.setItem(k, v)
        } catch {
          /* quota or private mode — the verdicts stay in the archive */
        }
      }
    }
    if (previous !== userId) localStorage.setItem(OWNER_KEY, userId)
    return takenFromSomeoneElse
  } catch {
    return false
  }
}

/* ------------------------------------------------------------------ */
/* The seal                                                            */
/* ------------------------------------------------------------------ */

/**
 * Set when this tab has been dispossessed, and never unset.
 *
 * `OWNER_KEY` was consulted in exactly two places — the claim, and the guard in
 * `pushNow` — and in no write path at all. On a shared school PC that left a
 * hole with no lock on it: A reads in tab 1 and leaves it open, B signs in in
 * tab 2, the claim wipes the stores and hands them to B, and then A keeps
 * clicking. Every click repopulates a store B now owns, tab 2's own perfectly
 * legitimate push sends the result, and migration 0006's union-and-greatest
 * makes A's chapters part of B's account for good.
 *
 * The lock is here rather than in the five stores because the stores cannot see
 * the claim: it happens in another tab, and the only thing that crosses a tab
 * boundary is the `storage` event. `SyncProvider` listens for it, seals this
 * module so nothing further is pulled or pushed, and reloads the tab — which is
 * what actually stops the writing, since the page that was writing is gone.
 * Anything short of that leaves a live React tree holding one student's work
 * and writing it into another student's storage.
 */
let sealed = false

/** This tab no longer owns the device. Nothing may be pulled or pushed again. */
export function sealDevice(): void {
  sealed = true
}

export const deviceIsSealed = (): boolean => sealed

/** Whose work is in localStorage right now, or null on a fresh device. */
export function deviceOwner(): string | null {
  return readString(OWNER_KEY)
}

/** True while this device is unclaimed, or claimed by `userId`. */
function ownedBy(userId: string): boolean {
  if (sealed) return false
  const owner = deviceOwner()
  return owner === null || owner === userId
}

/**
 * Remember that the filière was chosen on THIS device, just now.
 *
 * Called by `SyncProvider` when `lib/filiere.ts` announces a change, and only
 * when that change did not come from a pull.
 */
export function noteFiliereChange(): void {
  // Best effort: a device that cannot store the stamp simply lets the server
  // win the next time it pulls, which is the safe half of the rule.
  writeStamp(FILIERE_AT_KEY, new Date().toISOString())
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

/** A raw stored string, or null — including when storage itself is refused. */
function readString(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

/**
 * A stored ISO date, read back as it was written.
 *
 * `PULLED_AT_KEY` used to go through `writeJSON`, which wraps a string in
 * quotes — so what came back was `"2026-09-14T…"`, a value no date parser
 * accepts and no ISO string ever compares equal to. The old text comparison in
 * `remoteIsNewer` did not notice, because every digit sorts above `"`: it
 * answered "the remote is newer" for every row, every time, and the merge that
 * was supposed to be decided by date was decided by nothing. Dates are stored
 * raw now; the unwrapping below is for the devices that already have the old
 * spelling, and costs one pull.
 */
function readStamp(key: string): string | null {
  const raw = readString(key)
  if (raw === null) return null
  return raw.startsWith('"') && raw.endsWith('"') ? raw.slice(1, -1) : raw
}

/** True when the value actually landed — same contract as `writeJSON`. */
function writeStamp(key: string, iso: string): boolean {
  try {
    localStorage.setItem(key, iso)
    return true
  } catch {
    return false
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

/**
 * An ISO date as a number of milliseconds, or null when there is nothing usable.
 *
 * Explicit rather than `new Date(x).getTime()`: an unparseable value yields NaN,
 * every comparison against NaN is false, and a silent false here reads exactly
 * like "the remote is older" — a wrong answer dressed as a decision.
 */
function instant(value?: string | null): number | null {
  if (!value) return null
  const ms = Date.parse(value)
  return Number.isFinite(ms) ? ms : null
}

/**
 * True when the server's row was written after this device last pulled.
 *
 * Parsed, not compared as text. PostgREST answers
 * `2026-09-14T10:00:00.123456+00:00` and `toISOString()` produces
 * `2026-09-14T10:00:00.123Z`; inside the same second `+` and the extra digits
 * both sort BELOW `Z`, so a string comparison reported a remote row that was
 * genuinely newer as older. This is the sole tie-breaker for the « Réessayer »
 * rule — getting it backwards keeps a draft the student had just abandoned.
 *
 * The fallback only, since the merge below started comparing the two attempts'
 * own stamps: this answers "has the server moved at all", which is the best
 * that can be said about a local attempt stored before `at` was carried.
 */
function remoteIsNewer(remoteAt?: string | null): boolean {
  const remote = instant(remoteAt)
  if (remote === null) return false
  const seen = instant(readStamp(PULLED_AT_KEY))
  if (seen === null) return false
  return remote > seen
}

/**
 * Read everything back and merge it in.
 */
export async function pullAll(userId: string): Promise<PullResult> {
  // This device may already be somebody else's. Merging the server's rows for
  // `userId` into another student's storage is the first half of the accident
  // `claimDevice` exists to prevent; `pushNow` guarded against the second half
  // and nothing guarded against this one. `complete: false` so the caller does
  // not then push what it did not manage to read.
  if (!ownedBy(userId)) return { changed: false, complete: false }

  const supabase = createClient()
  let changed = false
  let complete = true

  /** A failed merge — network or storage — means this device is not current. */
  const kept = (ok: boolean) => {
    if (!ok) complete = false
    return ok
  }

  const [profile, progress, checkpoints, activity] = await Promise.all([
    supabase
      .from('profiles')
      .select('filiere, track, onboarding, updated_at')
      .eq('id', userId)
      .maybeSingle(),
    supabase.from('course_progress').select('*').eq('user_id', userId),
    supabase.from('checkpoints').select('*').eq('user_id', userId),
    supabase.from('activity').select('*').eq('user_id', userId),
  ])

  // Four network round trips is plenty of time for a second tab to sign a
  // DIFFERENT student in, wipe this storage and claim it for them. Everything
  // below is synchronous, so one re-check here covers every write that follows.
  if (!ownedBy(userId)) return { changed: false, complete: false }

  // A select that FAILED looks exactly like one that found nothing: both leave
  // `.data` empty. Merging nothing and then pushing would hand the server this
  // device's stale copy as the truth, so a failed read has to be recorded.
  for (const r of [profile, progress, checkpoints, activity])
    if (r.error) complete = false

  // ── Filière and the funnel's answers.
  if (profile.data) {
    const { filiere, track, onboarding, updated_at: profileAt } = profile.data

    // The profile row is the one place a student's filière exists for all their
    // devices, so a pull has to be able to change this device's mind.
    //
    // Adopting the remote choice ONLY when the device had none read as caution
    // and was a deadlock: 0006's trigger keeps whichever non-null value arrived
    // last, so two devices that disagreed never agreed. The phone kept serving
    // the Sciences Exp syllabus, the laptop kept serving SM, and each push
    // flipped `profiles.filiere` again — indefinitely, with the student seeing
    // two different programmes depending on what they picked up.
    //
    // The rule is: the server wins unless this device chose more recently.
    // `FILIERE_AT_KEY` is what makes "more recently" answerable at all. A device
    // that has a filière but no stamp cannot prove it chose anything — it
    // stored that value before this rule existed — so the server wins there
    // too. The cost is at most one re-pick; the alternative is the deadlock.
    const stored = readJSON<FiliereChoice | null>(FILIERE_KEY, null)
    if (filiere && track) {
      const chosenHere = instant(readStamp(FILIERE_AT_KEY))
      const serverAt = instant(profileAt)
      const serverWins =
        stored === null ||
        chosenHere === null ||
        (serverAt !== null && serverAt > chosenHere)
      if (serverWins && (stored?.filiere !== filiere || stored?.track !== track)) {
        if (kept(writeJSON(FILIERE_KEY, { filiere, track } satisfies FiliereChoice))) {
          // Dated by the server, not by the clock of the device adopting it:
          // otherwise this pull would look like a local choice and the next one
          // would refuse to adopt anything.
          writeStamp(FILIERE_AT_KEY, profileAt ?? new Date().toISOString())
          changed = true
        }
      }
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
    // Which attempt is newer is a question about the two ATTEMPTS.
    // `remoteIsNewer` answers a different one — "has the server been written
    // to since this device last pulled" — and an attempt made on this device
    // after that pull is invisible to it. An older remote row that also
    // postdates the pull therefore won, resurrecting the very attempt
    // « Réessayer » had just cleared. Both sides carry their own stamp now,
    // so compare those; the pull stamp stays as the fallback for state
    // written before `at` existed, which has no date of its own to offer.
    const remoteAt = instant(row.updated_at)
    const localAt = instant(local.at)
    const fresher =
      remoteAt !== null &&
      (localAt !== null ? remoteAt > localAt : remoteIsNewer(row.updated_at))
    // The stamp travels with the attempt it describes — the winning side's.
    // Building `merged` without it broke two things at once: the next push had
    // no date to send and fell back to the moment of upload, and the object
    // could never equal `local`, which DID carry one. So the comparison below
    // was true for every checkpoint on every pull, every one was rewritten, and
    // `SyncProvider` was told the interface had changed on every single mount.
    const at = fresher ? (row.updated_at ?? local.at) : local.at
    const merged: CheckpointState = {
      draft: fresher ? (row.draft ?? '') : local.draft || row.draft || '',
      tried: fresher ? !!row.tried : local.tried || row.tried,
      verdict: fresher ? (row.verdict ?? null) : (local.verdict ?? row.verdict ?? null),
      // The one that only grows: the XP penalty already paid.
      hints: Math.max(local.hints, row.hints ?? 0),
      ...(at ? { at } : {}),
    }
    // Field by field, and the attempt apart from its date. A stamp that moved
    // on its own is worth storing — it is what the next merge reads — but it is
    // not worth telling the interface to re-read, because nothing it displays
    // has changed.
    const attemptMoved =
      merged.draft !== (local.draft ?? '') ||
      merged.tried !== (local.tried ?? false) ||
      merged.verdict !== (local.verdict ?? null) ||
      merged.hints !== (local.hints ?? 0)
    if (attemptMoved || (merged.at ?? null) !== (local.at ?? null)) {
      if (kept(writeJSON(key, merged)) && attemptMoved) changed = true
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
  if (complete) writeStamp(PULLED_AT_KEY, new Date().toISOString())

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
/**
 * What Google told us about the person, as the header already draws it.
 *
 * Not device state, so it is NOT part of the snapshot below: it comes from the
 * session on the server and is the same on every device the student signs in
 * on. It is passed through rather than read here because `lib/supabase/client`
 * has no session to read it from.
 */
export type Identity = { name: string | null; avatar: string | null }

const NO_IDENTITY: Identity = { name: null, avatar: null }

export function pushAll(
  userId: string,
  email: string,
  identity: Identity = NO_IDENTITY,
): Promise<void> {
  // Sealed means another account has taken this device while this tab was still
  // open. Whatever is in storage now is theirs, and the snapshot below would
  // read it.
  if (sealed) return Promise.resolve()

  // Read the stores NOW, not when the queue reaches us.
  //
  // `pushNow` used to read them at the moment it ran, which is fine until two
  // things added on the same day meet: the queue above, and `claimDevice`
  // wiping and repopulating those same stores when a DIFFERENT student signs
  // in. A push queued for A, running after B has claimed the device, read B's
  // work and filed it under A. Capturing here makes the snapshot belong to the
  // account that asked for it.
  const snapshot = {
    owner: deviceOwner(),
    filiere: readJSON<FiliereChoice | null>(FILIERE_KEY, null),
    onboarding: readJSON<Answers>(ONBOARDING_KEY, {}),
    progress: readJSON<Record<string, CourseProgress>>(PROGRESS_KEY, {}),
    activity: readJSON<Record<string, DayActivity>>(ACTIVITY_KEY, {}),
    checkpoints: localCheckpoints(),
  }
  inFlight = inFlight
    .catch(() => {})
    .then(() => pushNow(userId, email, identity, snapshot))
  return inFlight
}

type Snapshot = {
  owner: string | null
  filiere: FiliereChoice | null
  onboarding: Answers
  progress: Record<string, CourseProgress>
  activity: Record<string, DayActivity>
  checkpoints: ReturnType<typeof localCheckpoints>
}

/**
 * The date for an attempt whose date is not known.
 *
 * Only pre-`at` checkpoints reach this: everything written since carries the
 * moment it actually changed. The honest thing to send for "I do not know when
 * this changed" is the oldest instant there is, not the current one — an
 * unknown date must never be allowed to beat a known one. 0006 then keeps the
 * server's `tried`, `verdict` and `draft`, and the union in `pullAll` still
 * carries the undated attempt to the student's other devices, so nothing is
 * lost by refusing to invent a time.
 */
const UNDATED = new Date(0).toISOString()

async function pushNow(
  userId: string,
  email: string,
  identity: Identity,
  snap: Snapshot,
): Promise<void> {
  // The device changed hands between the queue and here. The snapshot is one
  // student's work and `userId` is another's; sending it would be the very
  // thing `claimDevice` exists to prevent.
  if (sealed) return
  if (snap.owner !== null && snap.owner !== userId) return

  const supabase = createClient()

  const { filiere, onboarding, progress, activity, checkpoints } = snap
  const now = new Date().toISOString()

  const jobs: PromiseLike<unknown>[] = []

  // Upsert, not update: an account that signed in before the schema existed
  // never fired the profile trigger, so an update would write to no row at all
  // — and say nothing about it.
  //
  // `full_name` and `avatar_url` are sent because THIS upsert is what creates
  // the row for such an account, and `handle_new_user` fires only on `auth.users`
  // INSERT — which will never happen again for someone who already has an
  // account. A profile deleted during testing, or created before those columns
  // existed, was recreated here with both fields null and nothing ever filled
  // them: the app was reading the name and the photo out of the session to draw
  // the header, and dropping them on the way to the table.
  //
  // Null is safe to send. `profiles_merge` (0006, clamped in 0007) resolves
  // them with `coalesce(new, old)`, so a device that has no identity to offer
  // cannot blank one another device already stored.
  jobs.push(
    supabase.from('profiles').upsert({
      id: userId,
      email,
      full_name: identity.name,
      avatar_url: identity.avatar,
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
    // When the ATTEMPT changed, not when it was uploaded. Stamping `now` on
    // every checkpoint made migration 0006's date rule meaningless: a tab open
    // since before "Réessayer" would reconnect, have its stale draft dated to
    // this instant, and win the merge it should have lost. Falling back to
    // `now` for a checkpoint that carries no stamp is the same lie in smaller
    // print, so it falls back to `UNDATED` instead — see there.
    updated_at: c.state.at ?? UNDATED,
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
