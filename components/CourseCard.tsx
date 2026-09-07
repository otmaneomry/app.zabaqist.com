'use client'

/**
 * A course tile.
 *
 * Two things were wrong with the version this replaces.
 *
 * It ignored the `href` its callers passed and built one from the title
 * instead — `/courses/${title.toLowerCase().replace(/\s+/g, '-')}` — so
 * "Limites et continuité" linked to `/courses/limites-et-continuité`, accent
 * and all, and every authored chapter tile led to a 404. `href` is now used.
 *
 * And its art came from `public/brilliant-image/`: a competitor's
 * illustrations, which is a licensing problem on a product you mean to sell.
 * `CourseCover` draws the brand's own khatim instead, seeded by the slug.
 */

import React from 'react'

import { Link } from '@/i18n/navigation'
import CourseCover, { type CoverTone } from '@/components/course/CourseCover'

export interface CourseCardProps {
  title: string
  level: string
  /** Where it goes. Omit only for a tile with no chapter behind it yet. */
  href?: string
  /** Stable per chapter — the slug. Falls back to the title. */
  seed?: string
  tone?: CoverTone
  /** 0–100, from this device. Omitted on a tile with no chapter behind it. */
  progress?: number
}

export default function CourseCard({
  title,
  level,
  href,
  seed,
  tone = 'neutral',
  progress,
}: CourseCardProps) {
  const body = (
    <>
      <div className="mx-auto mb-3 w-16 transition-transform duration-200 group-hover:scale-105">
        <CourseCover seed={seed ?? title} tone={tone} className="h-auto w-full" />
      </div>
      <p className="mb-1 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-zb-mint-deep">
        {level}
      </p>
      <h3 className="text-center text-sm font-bold text-zb-ink">{title}</h3>
      {progress !== undefined && (
        <div
          className="mt-4 h-1 overflow-hidden rounded-full bg-zb-cream-3"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-zb-mint transition-[width] duration-500"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      )}
    </>
  )

  const shell =
    'group block rounded-2xl border border-zb-line bg-white p-4 no-underline transition-all hover:-translate-y-1 hover:border-zb-mint/40 hover:shadow-[var(--zb-shadow-md)]'

  // A tile with nowhere to go is not a link. Rendering it as one gives a
  // keyboard user a stop that does nothing.
  return href ? (
    <Link href={href} title={title} className={shell}>
      {body}
    </Link>
  ) : (
    <div className={`${shell} cursor-default`} aria-disabled>
      {body}
    </div>
  )
}
