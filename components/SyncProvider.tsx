'use client'

/**
 * Keeps this device and the account in step.
 *
 * Renders nothing. Mounted once in the signed-in shell, it pulls the server's
 * copy on arrival and pushes again whenever one of the stores announces a
 * change — the events already exist, so no writer had to be rewritten.
 *
 * Deliberately quiet. There is no spinner and no "syncing…" badge: reads come
 * from `localStorage` and are instant, and a student who has just answered a
 * checkpoint should be told about their answer, not about a network call. A
 * failed push is not surfaced either — the next event retries it, and the work
 * is still safe on the device meanwhile.
 */

import { useCallback, useEffect, useRef } from 'react'

import { FILIERE_EVENT } from '@/lib/filiere'
import { SELFCHECK_EVENT } from '@/lib/selfCheck'
import {
  claimDevice,
  deviceIsSealed,
  deviceOwner,
  noteFiliereChange,
  OWNER_KEY,
  pullAll,
  pushAll,
  sealDevice,
  SYNC_EVENTS,
} from '@/lib/sync'

/** Long enough to coalesce a burst of writes, short enough to survive a tab close. */
const DEBOUNCE_MS = 1500

export default function SyncProvider({
  userId,
  email,
  name = null,
  avatar = null,
}: {
  userId: string
  email: string
  /**
   * What Google told the server about this person, as the header draws it.
   *
   * Passed in rather than read here: the browser client has no session to read
   * it from, and `profiles.full_name` / `avatar_url` are otherwise written by
   * nothing at all once an account exists — `handle_new_user` fires only on
   * `auth.users` INSERT, which never happens twice.
   */
  name?: string | null
  avatar?: string | null
}) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  // Set while the initial pull is writing to localStorage, so the events it
  // triggers are not immediately pushed straight back up.
  const pulling = useRef(true)

  const push = useCallback(() => {
    if (pulling.current || deviceIsSealed()) return
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      void pushAll(userId, email, { name, avatar })
    }, DEBOUNCE_MS)
  }, [userId, email, name, avatar])

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      // BEFORE anything is read or merged. If this device was last used by a
      // different account, its work is not this reader's — and `pullAll` would
      // union the two together and `pushAll` would file the result under this
      // account, which is not a thing that can be undone.
      const wasSomeoneElses = claimDevice(userId)
      if (wasSomeoneElses && !cancelled) {
        for (const e of SYNC_EVENTS) window.dispatchEvent(new Event(e))
        // Not a sync event — the auto-évaluation has no table and is never
        // pushed — but the claim may just have handed this student back the
        // verdicts it had set aside for them, and the chapter page is already
        // listening.
        window.dispatchEvent(new Event(SELFCHECK_EVENT))
      }

      let complete = false
      try {
        const result = await pullAll(userId)
        if (cancelled) return
        complete = result.complete
        // Tell the interface to re-read: cards, the dashboard and the header
        // all listen already.
        if (result.changed)
          for (const e of SYNC_EVENTS) window.dispatchEvent(new Event(e))
      } catch {
        /* offline, or RLS said no — the device copy still works */
      } finally {
        pulling.current = false
        // Send whatever this device had before it knew about the account — but
        // only if the pull actually finished. Pushing after a partial pull
        // hands the server this device's unmerged copy and deletes the rows the
        // pull failed to read.
        if (!cancelled && complete) void pushAll(userId, email, { name, avatar })
      }
    })()

    for (const e of SYNC_EVENTS) window.addEventListener(e, push)

    // Date the filière the moment the picker says it changed, and only then.
    // `lib/filiere.ts` stores no date of its own, and without one a pull has no
    // way to tell "this device chose SM ten minutes ago" from "this device was
    // handed SM by a pull last week" — which is why the two devices in the
    // filière block of `pullAll` used to disagree for ever. Nothing is stamped
    // while the pull is running: the events it fires are the server talking,
    // not the student.
    const onFiliereChosen = () => {
      if (!pulling.current && !deviceIsSealed()) noteFiliereChange()
    }
    window.addEventListener(FILIERE_EVENT, onFiliereChosen)

    // The only signal a tab gets that it no longer owns the device.
    //
    // Shared school PC: A is reading in this tab, B signs in in another one,
    // and `claimDevice(B)` wipes the stores and writes B's uuid to
    // `zabaqist:owner`. `storage` fires in every OTHER tab, which is this one.
    // From that instant every click A makes repopulates stores that belong to
    // B, and B's own perfectly legitimate push files them under B — permanently,
    // because 0006 unions and takes the greatest.
    //
    // Sealing stops this tab syncing; the reload is what stops it WRITING,
    // because the React tree holding A's session is what does the writing and a
    // reload replaces it with whoever actually holds the cookies now. It is
    // abrupt on purpose: A's session ended the moment B signed in — the cookies
    // are browser-wide — so this tab was already showing a page that is not
    // A's, and every second it stays up is a second of one student's work
    // landing in another's account. `e.key === null` is `clear()`, and a
    // removed owner means a sign-out somewhere else: the same conclusion.
    const onOwnerChanged = (e: StorageEvent) => {
      if (e.key !== null && e.key !== OWNER_KEY) return
      if (deviceOwner() === userId) return
      sealDevice()
      if (timer.current) clearTimeout(timer.current)
      window.location.reload()
    }
    window.addEventListener('storage', onOwnerChanged)

    // A tab being hidden is the last reliable moment to save. `visibilitychange`
    // and not `beforeunload`: on mobile a tab is often killed without ever
    // firing the latter.
    const onHide = () => {
      if (
        document.visibilityState === 'hidden' &&
        !pulling.current &&
        !deviceIsSealed()
      )
        void pushAll(userId, email, { name, avatar })
    }
    document.addEventListener('visibilitychange', onHide)

    return () => {
      cancelled = true
      if (timer.current) clearTimeout(timer.current)
      for (const e of SYNC_EVENTS) window.removeEventListener(e, push)
      window.removeEventListener(FILIERE_EVENT, onFiliereChosen)
      window.removeEventListener('storage', onOwnerChanged)
      document.removeEventListener('visibilitychange', onHide)
    }
  }, [userId, email, name, avatar, push])

  return null
}
