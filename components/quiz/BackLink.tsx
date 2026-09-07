/**
 * The way out of a focus-mode page.
 *
 * `/quiz` and `/quiz/<slug>` sit outside the `(with-header)` route group, so
 * they carry no site header — which is the point: a self-assessment is one
 * thing at a time and the chrome would compete with it. But removing the header
 * also removed the only way back, leaving the browser's own button as the sole
 * exit. This is the missing half of that trade.
 *
 * It names its destination rather than saying "back". A generic "Retour" makes
 * the reader guess where they will land, and after answering seven questions
 * the answer matters: the chapter they came from is not the same place as the
 * dashboard.
 */

import React from 'react'
import { IconArrowLeft } from '@tabler/icons-react'

import { Link } from '@/i18n/navigation'

export default function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="-ms-1 inline-flex h-9 items-center gap-1.5 rounded-full px-2 text-sm font-semibold text-zb-ink-2 no-underline transition-colors hover:bg-zb-cream-2 hover:text-zb-ink"
    >
      {/* Mirrored on the Arabic route: an arrow that points out of the page has
          to point the way the reader leaves it. */}
      <IconArrowLeft size={16} className="rtl:rotate-180" />
      {label}
    </Link>
  )
}
