'use client'

/**
 * Sections read, over the selected window.
 *
 * A plain bar chart, deliberately: the source product ships almost no meters at
 * all, and the one place it does use a chart is here. Zero buckets render as a
 * thin sliver rather than a gap, so the axis reads as a continuous period and a
 * quiet week does not look like missing data.
 */

import React from 'react'

import type { Bucket } from '@/lib/activity'

export default function ActivityChart({
  buckets,
  emptyLabel,
}: {
  buckets: Bucket[]
  emptyLabel: string
}) {
  const max = Math.max(...buckets.map((b) => b.sections), 1)
  const anything = buckets.some((b) => b.sections > 0)

  return (
    <div>
      {/* `items-stretch`, not `items-end`: the columns must be full height for
          a bar's percentage height to resolve against anything. Each column
          then pushes its own bar to the bottom. */}
      <div className="flex h-44 items-stretch gap-2" role="img">
        {buckets.map((b) => {
          const pct = (b.sections / max) * 100
          return (
            <div
              key={b.start.toISOString()}
              className="flex h-full flex-1 flex-col items-center justify-end gap-1.5"
              title={`${b.label} · ${b.sections}`}
            >
              <span
                className="h-4 shrink-0 font-mono text-xs text-gray-500"
                dir="ltr"
              >
                {b.sections > 0 ? b.sections : ''}
              </span>
              <span
                className={`w-full rounded-t-md ${
                  b.sections > 0 ? 'bg-zb-mint' : 'bg-gray-200'
                }`}
                // A zero bucket keeps a 3px sliver: the period is continuous,
                // and a gap would read as "no data recorded" instead of "quiet".
                style={{ height: b.sections > 0 ? `${Math.max(pct, 6)}%` : 3 }}
              />
              <span className="h-4 shrink-0 font-mono text-[0.65rem] uppercase text-gray-400">
                {b.label}
              </span>
            </div>
          )
        })}
      </div>
      {!anything && (
        <p className="mt-4 text-center text-sm text-gray-500">{emptyLabel}</p>
      )}
    </div>
  )
}
