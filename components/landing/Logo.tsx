/**
 * Zabaqist wordmark: the 'Z' replaced by an 8-point khatam, a quiet nod to
 * zellige tilework. `compact` renders the mark alone.
 */

import React from 'react'
import { Khatam } from './Zellige'

export default function Logo({
  size = 22,
  compact = false,
  color = 'var(--zb-mint)',
  className = '',
}: {
  size?: number
  compact?: boolean
  color?: string
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-display font-bold leading-none tracking-tight ${className}`}
      style={{ color, fontSize: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`-${size / 2} -${size / 2} ${size} ${size}`}
        aria-hidden
      >
        <Khatam size={size * 0.95} stroke={color} fill={color} strokeWidth={0} />
        <Khatam
          size={size * 0.55}
          stroke="var(--zb-cream)"
          fill="var(--zb-cream)"
          strokeWidth={0}
        />
      </svg>
      {!compact && <span>Zabaqist</span>}
    </span>
  )
}
