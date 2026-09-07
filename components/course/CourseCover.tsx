/**
 * Card art for a chapter, drawn rather than downloaded.
 *
 * Every course card used to show an illustration from `public/brilliant-image/`
 * — Brilliant.org's own artwork, kept from the period when their screenshots
 * were the reference. Shipping a competitor's illustrations on a product you
 * intend to sell is a licensing problem before it is a taste one, so they are
 * gone.
 *
 * What replaces them is the brand's own geometry: the khatim, the same {8/2}
 * octagram as the wordmark, the favicon and the list bullets. The arrangement
 * is derived from the chapter's slug, so every chapter gets a stable figure of
 * its own that nobody had to draw and no two chapters share — and adding a
 * fourteenth chapter costs no asset, no upload and no kilobyte.
 *
 * Pure SVG, no image request, correct at any size, and it inherits the palette
 * rather than fighting it.
 */

import React from 'react'

import { KHATIM } from '@/components/landing/Zellige'

/** Small, stable, and enough: this picks a layout, not a cryptographic key. */
function hash(seed: string): number {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

/** The eight-point star, as a polygon of the given radius. */
function star(cx: number, cy: number, r: number): string {
  const inner = r * KHATIM
  const pts: string[] = []
  for (let i = 0; i < 16; i++) {
    const rad = i % 2 === 0 ? r : inner
    // Start at the top so the mark sits the same way up as the wordmark's.
    const a = (Math.PI / 8) * i - Math.PI / 2
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`)
  }
  return pts.join(' ')
}

const TONES = {
  analyse: { ground: 'var(--zb-mint-tint)', mark: 'var(--zb-mint)', accent: 'var(--zb-mint-deep)' },
  algebre: { ground: 'var(--zb-gold-soft)', mark: 'var(--zb-gold-deep)', accent: 'var(--zb-gold)' },
  neutral: { ground: 'var(--zb-cream-2)', mark: 'var(--zb-ink-2)', accent: 'var(--zb-ink-3)' },
} as const

export type CoverTone = keyof typeof TONES

export default function CourseCover({
  seed,
  tone = 'neutral',
  className = '',
  rounded = true,
}: {
  /** Anything stable for this chapter — the slug is ideal. */
  seed: string
  tone?: CoverTone
  className?: string
  rounded?: boolean
}) {
  const h = hash(seed)
  const t = TONES[tone]

  // Four satellites on a ring, rotated by the seed, with a seeded size ratio.
  // Enough variation to make chapters distinguishable at a glance; not so much
  // that any of them stops looking like the same family.
  const spin = (h % 45) * (Math.PI / 180)
  const ratio = 0.30 + ((h >> 5) % 5) * 0.035
  const ringR = 30 + ((h >> 9) % 4) * 3

  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      role="presentation"
      aria-hidden
    >
      <rect
        width="96" height="96"
        rx={rounded ? 18 : 0}
        fill={t.ground}
      />
      {[0, 1, 2, 3].map((i) => {
        const a = spin + (i * Math.PI) / 2
        return (
          <polygon
            key={i}
            points={star(48 + ringR * Math.cos(a), 48 + ringR * Math.sin(a), 11 * ratio * 2.1)}
            fill={t.accent}
            opacity="0.42"
          />
        )
      })}
      <polygon points={star(48, 48, 21)} fill={t.mark} />
      {/* The negative-space centre, as in the wordmark: the mark reads as one
          shape rather than a filled blob. */}
      <polygon points={star(48, 48, 21 * KHATIM * 0.62)} fill={t.ground} />
    </svg>
  )
}
