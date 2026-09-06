/**
 * The khatim, constructed.
 *
 * A square, the same square turned 45°, and the eight-point star their union
 * makes. It is the brand's own argument for its mark — the shape is not a
 * decoration chosen because it looks Moroccan, it is the {8/2} octagram, and
 * rotation / symmetry / tiling are on the reader's exam.
 *
 * Server component: pure geometry, no state.
 */

import React from 'react'

import { KHATIM } from './Zellige'

const S = 120
const C = S / 2
const R = S * 0.38

/** A square inscribed in radius R, rotated by `deg`. */
function square(deg: number) {
  return [0, 1, 2, 3]
    .map((i) => {
      const a = (Math.PI / 2) * i - Math.PI / 4 + (deg * Math.PI) / 180
      return `${(C + R * Math.cos(a)).toFixed(1)},${(C + R * Math.sin(a)).toFixed(1)}`
    })
    .join(' ')
}

/** The union of those two squares: 16 vertices at alternating radii. */
function star() {
  return Array.from({ length: 16 }, (_, i) => {
    const a = (Math.PI / 8) * i - Math.PI / 2
    const r = i % 2 === 0 ? R : R * KHATIM
    return `${(C + r * Math.cos(a)).toFixed(1)},${(C + r * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}

function Panel({
  children,
  caption,
}: {
  children: React.ReactNode
  caption: string
}) {
  return (
    <li className="flex flex-col items-center gap-3">
      <svg
        viewBox={`0 0 ${S} ${S}`}
        className="w-full max-w-[120px]"
        aria-hidden
      >
        {children}
      </svg>
      <p className="text-center text-sm text-gray-600">{caption}</p>
    </li>
  )
}

export default function KhatimFigure({
  steps,
  alt,
}: {
  steps: [string, string, string]
  alt: string
}) {
  const line = {
    fill: 'none',
    stroke: 'var(--zb-mint)',
    strokeWidth: 1.6,
    strokeLinejoin: 'round' as const,
  }

  return (
    <ol
      role="img"
      aria-label={alt}
      className="grid grid-cols-3 gap-4 sm:gap-6"
    >
      <Panel caption={steps[0]}>
        <polygon points={square(0)} {...line} />
      </Panel>
      <Panel caption={steps[1]}>
        <polygon points={square(0)} {...line} opacity={0.25} />
        <polygon points={square(45)} {...line} />
      </Panel>
      <Panel caption={steps[2]}>
        <polygon points={star()} fill="var(--zb-mint)" stroke="none" />
      </Panel>
    </ol>
  )
}
