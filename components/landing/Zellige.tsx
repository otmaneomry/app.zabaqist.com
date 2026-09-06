/**
 * Zellige — the Moroccan 8-point star (khatam) as a tiled background, and the
 * single star as a vector primitive.
 *
 * Server-safe: the pattern id is a prop rather than `useId()`, so this stays
 * out of the client bundle.
 */

import React from 'react'

/**
 * The khatim's inner radius, as a fraction of the outer.
 *
 * NOT a style choice — a derivation. The shape is the {8/2} octagram: a square
 * and the same square turned 45°. The radius where their edges cross is fixed
 * by the geometry:
 *
 *     a square's edge lies at  R·cos45°  from the centre
 *     the two edges meet at    (R − R·cos45°, R·cos45°)
 *     |that| = R·√0.5858 = 0.7654·R
 *
 * 0.5 draws a spiky asterisk; 0.7654 draws the star that is actually on the
 * wall. Do not "tidy" it to 0.75 or 0.8.
 * Source: zabaqist.com, src/components/khatim.jsx.
 */
export const KHATIM = Math.sqrt(0.5858) // 0.76537…

export function Khatam({
  size = 64,
  cx = 0,
  cy = 0,
  stroke = 'currentColor',
  strokeWidth = 1.25,
  fill = 'none',
}: {
  size?: number
  cx?: number
  cy?: number
  stroke?: string
  strokeWidth?: number
  fill?: string
}) {
  // 16 vertices alternating outer and inner radius draw an 8-point star.
  const r1 = size / 2
  const r2 = r1 * KHATIM
  const points: string[] = []
  for (let i = 0; i < 16; i++) {
    const r = i % 2 === 0 ? r1 : r2
    const a = (Math.PI / 8) * i - Math.PI / 2
    points.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`)
  }
  return (
    <polygon
      points={points.join(' ')}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      strokeLinejoin="round"
    />
  )
}

export default function Zellige({
  id = 'zellige',
  density = 88,
  color = 'var(--zb-mint)',
  opacity = 0.06,
}: {
  /** Unique per instance — two patterns sharing an id collide. */
  id?: string
  /** Tile size in px. */
  density?: number
  color?: string
  opacity?: number
}) {
  return (
    <svg aria-hidden className="absolute inset-0 size-full" style={{ opacity }}>
      <defs>
        <pattern
          id={id}
          width={density}
          height={density}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(15)"
        >
          <Khatam
            size={density * 0.7}
            cx={density / 2}
            cy={density / 2}
            stroke={color}
          />
          <circle cx={0} cy={0} r={1.4} fill={color} />
          <circle cx={density} cy={0} r={1.4} fill={color} />
          <circle cx={0} cy={density} r={1.4} fill={color} />
          <circle cx={density} cy={density} r={1.4} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
