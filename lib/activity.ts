/**
 * A per-day record of what was done, so the dashboard can show a real history.
 *
 * The app already tracked *what* has been read; it never tracked *when*. A chart
 * needs the when, and inventing it would be worse than an empty chart — so this
 * starts recording from the day it ships and the dashboard shows exactly what
 * has been recorded, no more.
 *
 * Client-safe: no filesystem, no server imports.
 */

export interface DayActivity {
  /** Sections opened for the first time. */
  sections: number
  /** Checkpoints the reader committed an attempt to. */
  checkpoints: number
  /** Seconds spent reading. */
  seconds: number
}

export type Granularity = 'week' | 'month' | 'year'

const KEY = 'zabaqist:activity'
export const ACTIVITY_EVENT = 'zabaqist:activity'

const EMPTY: DayActivity = { sections: 0, checkpoints: 0, seconds: 0 }

/** Local calendar day, not UTC — a student's "yesterday" is their own. */
export function dayKey(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

type Log = Record<string, DayActivity>

function readLog(): Log {
  if (typeof window === 'undefined') return {}
  try {
    // `JSON.parse` is happy with "null", "3" and "[]". Only an object can be
    // indexed by day, and every caller does exactly that.
    const parsed: unknown = JSON.parse(localStorage.getItem(KEY) ?? '{}')
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
      ? (parsed as Log)
      : {}
  } catch {
    return {}
  }
}

function bump(patch: Partial<DayActivity>): void {
  if (typeof window === 'undefined') return
  try {
    const log = readLog()
    const k = dayKey(new Date())
    const cur = log[k] ?? { ...EMPTY }
    log[k] = {
      sections: cur.sections + (patch.sections ?? 0),
      checkpoints: cur.checkpoints + (patch.checkpoints ?? 0),
      seconds: cur.seconds + (patch.seconds ?? 0),
    }
    localStorage.setItem(KEY, JSON.stringify(log))
    window.dispatchEvent(new Event(ACTIVITY_EVENT))
  } catch {
    /* storage unavailable — the dashboard shows the zero state, which is honest */
  }
}

export const logSectionRead = () => bump({ sections: 1 })
export const logCheckpointTried = () => bump({ checkpoints: 1 })
export const logSeconds = (seconds: number) => {
  if (seconds > 0) bump({ seconds })
}

export interface Bucket {
  label: string
  /** Inclusive start of the bucket. */
  start: Date
  sections: number
  checkpoints: number
  seconds: number
}

export interface Window {
  /** What the date stepper reads. */
  label: string
  buckets: Bucket[]
}

const startOfDay = (d: Date) => {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

const addDays = (d: Date, n: number) => {
  const x = new Date(d)
  x.setDate(x.getDate() + n)
  return x
}

/** Monday-first, which is the Moroccan school week. */
const startOfWeek = (d: Date) => {
  const x = startOfDay(d)
  const dow = (x.getDay() + 6) % 7
  return addDays(x, -dow)
}

const sum = (log: Log, from: Date, days: number): Omit<Bucket, 'label' | 'start'> => {
  let sections = 0
  let checkpoints = 0
  let seconds = 0
  for (let i = 0; i < days; i++) {
    const a = log[dayKey(addDays(from, i))]
    if (!a) continue
    sections += a.sections
    checkpoints += a.checkpoints
    seconds += a.seconds
  }
  return { sections, checkpoints, seconds }
}

/**
 * The window the chart draws.
 *
 * Note the middle case: **`month` is four *weekly* buckets over 28 days**, not a
 * calendar month — which is what the source product does, and what makes the
 * three views comparable (7 · 4 · 12 buckets rather than 7 · 30 · 12).
 *
 * `offset` pages backwards: 0 is the current window, -1 the previous one.
 */
export function windowFor(
  g: Granularity,
  offset: number,
  locale: string,
  now = new Date(),
): Window {
  const log = readLog()
  const fmt = (d: Date, o: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat(locale, o).format(d)

  if (g === 'week') {
    const from = addDays(startOfWeek(now), offset * 7)
    const buckets: Bucket[] = Array.from({ length: 7 }, (_, i) => {
      const start = addDays(from, i)
      return {
        label: fmt(start, { weekday: 'narrow' }),
        start,
        ...sum(log, start, 1),
      }
    })
    const to = addDays(from, 6)
    return {
      label: `${fmt(from, { day: 'numeric', month: 'short' })} – ${fmt(to, { day: 'numeric', month: 'short' })}`,
      buckets,
    }
  }

  if (g === 'month') {
    // 4 weeks back from the start of this week, so the last bucket is the week
    // in progress rather than a stub.
    const thisWeek = addDays(startOfWeek(now), offset * 28)
    const buckets: Bucket[] = Array.from({ length: 4 }, (_, i) => {
      const start = addDays(thisWeek, (i - 3) * 7)
      return {
        label: fmt(start, { day: 'numeric', month: 'short' }),
        start,
        ...sum(log, start, 7),
      }
    })
    const first = buckets[0]!.start
    const last = addDays(buckets[3]!.start, 6)
    return {
      label: `${fmt(first, { day: 'numeric', month: 'short' })} – ${fmt(last, { day: 'numeric', month: 'short' })}`,
      buckets,
    }
  }

  // Year: 12 monthly buckets ending with the current month.
  const anchor = new Date(now.getFullYear(), now.getMonth() + offset * 12, 1)
  const buckets: Bucket[] = Array.from({ length: 12 }, (_, i) => {
    const start = new Date(anchor.getFullYear(), anchor.getMonth() - (11 - i), 1)
    const days =
      new Date(start.getFullYear(), start.getMonth() + 1, 0).getDate()
    return {
      label: fmt(start, { month: 'narrow' }),
      start,
      ...sum(log, start, days),
    }
  })
  return {
    label: `${fmt(buckets[0]!.start, { month: 'short', year: 'numeric' })} – ${fmt(anchor, { month: 'short', year: 'numeric' })}`,
    buckets,
  }
}

/** Totals across the whole recorded history. */
/** A day counts as worked if anything at all was logged on it. */
const worked = (d?: DayActivity) =>
  !!d && (d.sections > 0 || d.checkpoints > 0 || d.seconds > 0)

const shift = (d: Date, days: number) => {
  const n = new Date(d)
  n.setDate(n.getDate() + days)
  return n
}

export interface WeekDay {
  key: string
  date: Date
  worked: boolean
  /** Later than today: nothing could have been done yet. */
  future: boolean
}

/**
 * This week, Monday to Sunday, in the student's own calendar.
 *
 * A rolling seven days ending today would be easier, but it starts on a
 * different weekday every morning — so the strip a student learned to read on
 * Monday means something else by Thursday, and "the beginning of the strip"
 * never lines up with the beginning of their week. A calendar week is the one
 * they already have in their head.
 *
 * Monday-first: the Moroccan school week starts Monday, and that is the week
 * this is measuring.
 */
export function thisWeek(): WeekDay[] {
  const log = readLog()
  const today = new Date()
  const todayKey = dayKey(today)
  // getDay() is 0 for Sunday, so Sunday belongs to the week that just ended.
  const monday = shift(today, today.getDay() === 0 ? -6 : 1 - today.getDay())

  return Array.from({ length: 7 }, (_, i) => {
    const date = shift(monday, i)
    const key = dayKey(date)
    return { key, date, worked: worked(log[key]), future: key > todayKey }
  })
}

/**
 * Consecutive worked days, counting back from today.
 *
 * A day that has not finished does not break the streak: someone who worked
 * yesterday and has not yet started this morning is on a streak, not off one.
 * Counting from today alone would tell a student at 9am that they had lost
 * something they still have all day to keep.
 */
export function currentStreak(): number {
  const log = readLog()
  const today = new Date()
  // Start at today if it counts, otherwise at yesterday — anything older means
  // a whole day was missed and the streak really is over.
  let cursor = worked(log[dayKey(today)]) ? today : shift(today, -1)
  let streak = 0
  while (worked(log[dayKey(cursor)])) {
    streak++
    cursor = shift(cursor, -1)
  }
  return streak
}

/** The best run ever recorded on this device. */
export function longestStreak(): number {
  const keys = Object.keys(readLog()).filter((k) => worked(readLog()[k])).sort()
  let best = 0
  let run = 0
  let previous: string | null = null
  for (const key of keys) {
    const expected = previous
      ? dayKey(shift(new Date(`${previous}T12:00:00`), 1))
      : null
    run = expected === key ? run + 1 : 1
    best = Math.max(best, run)
    previous = key
  }
  return best
}

export function lifetime(): DayActivity & { days: number } {
  const log = readLog()
  const days = Object.keys(log).length
  return Object.values(log).reduce(
    (a, d) => ({
      sections: a.sections + d.sections,
      checkpoints: a.checkpoints + d.checkpoints,
      seconds: a.seconds + d.seconds,
      days,
    }),
    { ...EMPTY, days },
  )
}
