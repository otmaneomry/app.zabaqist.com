/**
 * What a student says they can do, chapter by chapter.
 *
 * The verdicts are the same three the checkpoints use — `got`, `close`,
 * `not-yet` — because it is the same act: the reader judging their own work.
 * Nothing here is marked by the app, and that is a decision rather than a
 * shortcut. The chapters contain no multiple-choice data, so an auto-graded
 * quiz would mean generating mathematics questions and declaring answers
 * correct; a wrong "correct answer" teaches a falsehood to someone sitting the
 * Bac, and no amount of interface polish is worth that.
 *
 * What the chapters DO contain is `## Auto-évaluation` — six or seven
 * capability statements per chapter, written by the pedagogue. Those are the
 * questions.
 */

import type { Verdict } from '@/lib/courseProgress'

export type { Verdict }

const KEY = 'zabaqist:selfcheck'
export const SELFCHECK_EVENT = 'zabaqist:selfcheck'

/** slug → item index → verdict. */
type Store = Record<string, Record<string, Verdict>>

function read(): Store {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}') as Store
  } catch {
    return {}
  }
}

export function readSelfCheck(slug: string): Record<string, Verdict> {
  if (typeof window === 'undefined') return {}
  return read()[slug] ?? {}
}

export function writeSelfCheck(slug: string, index: number, verdict: Verdict) {
  if (typeof window === 'undefined') return
  try {
    const all = read()
    all[slug] = { ...(all[slug] ?? {}), [index]: verdict }
    localStorage.setItem(KEY, JSON.stringify(all))
    window.dispatchEvent(new Event(SELFCHECK_EVENT))
  } catch {
    /* storage unavailable — the answer is lost, the page still works */
  }
}

export function clearSelfCheck(slug: string) {
  if (typeof window === 'undefined') return
  try {
    const all = read()
    delete all[slug]
    localStorage.setItem(KEY, JSON.stringify(all))
    window.dispatchEvent(new Event(SELFCHECK_EVENT))
  } catch {
    /* nothing to clear */
  }
}

/** How many of `total` were answered, and how many were answered `got`. */
export function scoreOf(
  slug: string,
  total: number,
): { answered: number; got: number; shaky: number } {
  const v = Object.values(readSelfCheck(slug)).slice(0, total)
  return {
    answered: v.length,
    got: v.filter((x) => x === 'got').length,
    // `close` and `not-yet` together: both mean "come back to this", and
    // splitting them in the summary would imply a precision the reader did not
    // claim.
    shaky: v.filter((x) => x !== 'got').length,
  }
}
