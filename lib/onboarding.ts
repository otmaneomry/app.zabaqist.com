/**
 * The onboarding funnel: what it asks, and what the answers are worth.
 *
 * Shape borrowed from Brilliant (see BRILLIANT_WORKFLOW.md §1): the flow
 * alternates asking with giving, never asks twice in a row early on, and asks
 * for no account at all. Every question is answerable by *recognition* — the
 * hardest one (which filière) is asked with worked examples rather than with
 * the names of the two programmes.
 *
 * Client-safe: no filesystem, no server imports.
 */

import type { Filiere, Track } from './filiere'

/** A step is either a question, or something handed back to the reader. */
export type StepKind = 'welcome' | 'ask' | 'give' | 'reveal'

export interface Step {
  id: string
  kind: StepKind
  /**
   * Which progress segment this step belongs to, and where in it.
   * Brilliant shows a segmented bar with no "n of m" counter: the reader sees
   * movement without seeing a length they can bargain with.
   */
  segment: 1 | 2
  /** 0–100 within that segment, at the moment the step is shown. */
  fill: number
}

/**
 * The funnel.
 *
 * `welcome` shows NO progress bar — you commit with the first click before
 * learning how long the flow is. The bar mounts on the first question.
 */
export const STEPS: Step[] = [
  { id: 'welcome', kind: 'welcome', segment: 1, fill: 0 },
  { id: 'motivation', kind: 'ask', segment: 1, fill: 20 },
  { id: 'apercu', kind: 'give', segment: 1, fill: 50 },
  { id: 'filiere', kind: 'ask', segment: 1, fill: 75 },
  { id: 'option', kind: 'ask', segment: 1, fill: 100 },
  { id: 'programme', kind: 'give', segment: 2, fill: 50 },
  // `objectif` — the daily-goal question — is deliberately out for now.
  // The type and DAILY_GOALS below stay: putting the step back is one line
  // here plus its block in the funnel, and nothing else was built on it.
  { id: 'plan', kind: 'reveal', segment: 2, fill: 100 },
]

/**
 * The step at `i`, clamped.
 *
 * `Math.trunc` is not decoration: the index comes from `?e=`, and `?e=1.5`
 * clamped to 1.5, indexed STEPS with a float, and handed the page `undefined`
 * to read `.kind` from.
 */
export const stepAt = (i: number): Step =>
  STEPS[Math.min(Math.max(Math.trunc(i) || 0, 0), STEPS.length - 1)]!

/** Why the student is here. Shapes tone later; never gates content. */
export type Motivation = 'bac' | 'rattraper' | 'avance' | 'parent'
export const MOTIVATIONS: Motivation[] = ['bac', 'rattraper', 'avance', 'parent']

/** Minutes a day. Kept for when the question returns — see STEPS above. */
export type DailyGoal = 10 | 20 | 30 | 60
export const DAILY_GOALS: DailyGoal[] = [10, 20, 30, 60]

export interface Answers {
  motivation?: Motivation
  track?: Track
  filiere?: Filiere
  dailyGoal?: DailyGoal
  /** ISO date the funnel was completed. Absent means never finished. */
  completedAt?: string
}

const KEY = 'zabaqist:onboarding'

export const ONBOARDING_EVENT = 'zabaqist:onboarding'

export function readAnswers(): Answers {
  if (typeof window === 'undefined') return {}
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(KEY) ?? '{}')
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {}
    // Anything can be written to `localStorage`, and `/demarrer` is a public
    // page: a stored `filiere` of "invalid" used to reach `chaptersOf` and
    // return undefined to a caller about to index it.
    const a = raw as Answers
    if (a.filiere && a.filiere !== 'sm' && a.filiere !== 'sx') delete a.filiere
    return a
  } catch {
    return {}
  }
}

export function saveAnswers(patch: Answers): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...readAnswers(), ...patch }))
    window.dispatchEvent(new Event(ONBOARDING_EVENT))
  } catch {
    /* storage unavailable — the funnel still completes for this session */
  }
}

/** True once the reader has been through the funnel to the plan reveal. */
export const hasOnboarded = (): boolean => !!readAnswers().completedAt
