'use client'

/**
 * Sends a signed-in reader who has never chosen a filière into the funnel.
 *
 * This used to live in the mock sign-in page's submit handler, which decided
 * between `/demarrer` and `/home` before redirecting. Google's callback cannot
 * make that decision: the filière is in `localStorage`, so the only place that
 * can read it is the browser, after the page has mounted.
 *
 * Renders nothing. It runs once on `/home` and gets out of the way — the choice
 * is a one-time question, and a reader who has answered it must never see this
 * flicker again.
 */

import { useEffect } from 'react'

import { useRouter } from '@/i18n/navigation'
import { readFiliere } from '@/lib/filiere'

export default function FiliereGate() {
  const router = useRouter()

  useEffect(() => {
    if (!readFiliere()) router.replace('/demarrer')
  }, [router])

  return null
}
