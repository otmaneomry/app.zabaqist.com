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

import { pullAll, pushAll, SYNC_EVENTS } from '@/lib/sync'

/** Long enough to coalesce a burst of writes, short enough to survive a tab close. */
const DEBOUNCE_MS = 1500

export default function SyncProvider({
  userId,
  email,
}: {
  userId: string
  email: string
}) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  // Set while the initial pull is writing to localStorage, so the events it
  // triggers are not immediately pushed straight back up.
  const pulling = useRef(true)

  const push = useCallback(() => {
    if (pulling.current) return
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      void pushAll(userId, email)
    }, DEBOUNCE_MS)
  }, [userId, email])

  useEffect(() => {
    let cancelled = false

    ;(async () => {
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
        if (!cancelled && complete) void pushAll(userId, email)
      }
    })()

    for (const e of SYNC_EVENTS) window.addEventListener(e, push)

    // A tab being hidden is the last reliable moment to save. `visibilitychange`
    // and not `beforeunload`: on mobile a tab is often killed without ever
    // firing the latter.
    const onHide = () => {
      if (document.visibilityState === 'hidden' && !pulling.current)
        void pushAll(userId, email)
    }
    document.addEventListener('visibilitychange', onHide)

    return () => {
      cancelled = true
      if (timer.current) clearTimeout(timer.current)
      for (const e of SYNC_EVENTS) window.removeEventListener(e, push)
      document.removeEventListener('visibilitychange', onHide)
    }
  }, [userId, email, push])

  return null
}
