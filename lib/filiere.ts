/**
 * The student's filière, and the option inside it.
 *
 * A Moroccan 2ème Bac student says "je suis en SVT" or "je suis en SM" — the
 * filière is the word they use, the *track* is what the programme is keyed by.
 * The picker asks for the filière first and the option second, so the question
 * matches the way it is actually answered.
 *
 * There is no backend here, so the choice lives on the device alongside every
 * other piece of progress. Client-safe: no filesystem, no server imports.
 */

export type Filiere = 'sm' | 'sx'
export type Track = '2bac-sm-a' | '2bac-sm-b' | '2bac-svt' | '2bac-pc'

export const FILIERES: Filiere[] = ['sm', 'sx']

/** The two options offered inside each filière, in the order the form shows them. */
export const FILIERE_TRACKS: Record<Filiere, Track[]> = {
  sm: ['2bac-sm-a', '2bac-sm-b'],
  sx: ['2bac-svt', '2bac-pc'],
}

export const TRACK_FILIERE: Record<Track, Filiere> = {
  '2bac-sm-a': 'sm',
  '2bac-sm-b': 'sm',
  '2bac-svt': 'sx',
  '2bac-pc': 'sx',
}

export interface FiliereChoice {
  filiere: Filiere
  track: Track
}

const KEY = 'zabaqist:filiere'

/** Fired on the tab that wrote, so the header and cards can re-read. */
export const FILIERE_EVENT = 'zabaqist:filiere'

const isFiliere = (v: unknown): v is Filiere =>
  v === 'sm' || v === 'sx'

const isTrack = (v: unknown): v is Track =>
  typeof v === 'string' && v in TRACK_FILIERE

/** The choice stored on this device, or null if the student has not picked yet. */
export function readFiliere(): FiliereChoice | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const v = JSON.parse(raw) as Partial<FiliereChoice>
    if (!isTrack(v.track)) return null
    // The filière is derivable from the track, so trust the track and re-derive
    // rather than letting the two drift apart.
    return { track: v.track, filiere: TRACK_FILIERE[v.track] }
  } catch {
    return null
  }
}

export function saveFiliere(track: Track): void {
  if (typeof window === 'undefined') return
  try {
    const choice: FiliereChoice = { track, filiere: TRACK_FILIERE[track] }
    localStorage.setItem(KEY, JSON.stringify(choice))
    window.dispatchEvent(new Event(FILIERE_EVENT))
  } catch {
    /* storage unavailable — the picker still works for this session */
  }
}

export function clearFiliere(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(KEY)
    window.dispatchEvent(new Event(FILIERE_EVENT))
  } catch {
    /* nothing to clear */
  }
}

/**
 * The filière to show content for when nothing has been chosen.
 *
 * Sciences Expérimentales, because it is the larger cohort — and because
 * showing *something* beats an empty page for a visitor who has not signed in.
 * The picker still asks; this only decides what they see meanwhile.
 */
export const DEFAULT_FILIERE: Filiere = 'sx'

export { isFiliere, isTrack }
