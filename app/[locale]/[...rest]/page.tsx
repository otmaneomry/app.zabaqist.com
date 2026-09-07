/**
 * Every path that matches no real route.
 *
 * Without this, an unknown URL matches nothing inside `app/[locale]/`, so Next
 * falls back to its own global 404 — the black page with a bare "404" — and
 * `app/[locale]/not-found.tsx` is never reached. A `not-found` boundary only
 * catches `notFound()` thrown from inside its own segment, and nothing was
 * throwing it.
 *
 * A catch-all is the lowest-priority match in the App Router, so this shadows
 * nothing: every real page still wins.
 */

import { notFound } from 'next/navigation'

export default function CatchAll(): never {
  notFound()
}
