'use client'

/**
 * The funnel's answer control: cards you recognise, not a list you read.
 *
 * No dropdowns, no sliders, no free text. Each card carries an optional
 * `example` — for the hardest question (which programme?) that slot holds real
 * maths from each filière, so a student matches a picture instead of
 * self-assessing an abstraction.
 *
 * Selecting never auto-advances; the reader presses Continue.
 */

import React from 'react'

export interface Choice {
  id: string
  label: string
  /** A first-person sentence: "je sais résoudre…". */
  hint?: string
  /** Rendered above the label — a worked example, an icon, anything. */
  example?: React.ReactNode
  /** Small mono text at the trailing edge. */
  meta?: string
}

export default function ChoiceGrid({
  choices,
  value,
  onChange,
  columns = 2,
}: {
  choices: Choice[]
  value: string | null
  onChange: (id: string) => void
  columns?: 1 | 2
}) {
  return (
    <div
      role="radiogroup"
      className={`mt-8 grid gap-3 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}
    >
      {choices.map((c) => {
        const active = value === c.id
        return (
          <button
            key={c.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(c.id)}
            className={`flex flex-col items-start gap-2 rounded-2xl border-2 p-5 text-start transition-colors ${
              active
                ? 'border-zb-mint bg-zb-mint-soft'
                : 'border-zb-line bg-white hover:border-zb-mint/40'
            }`}
          >
            {c.example && (
              <span className="flex min-h-[52px] w-full items-center justify-center rounded-xl bg-black/[0.03] px-3 py-2">
                {c.example}
              </span>
            )}
            <span className="flex w-full items-baseline justify-between gap-3">
              <span className="font-semibold">{c.label}</span>
              {c.meta && (
                <span className="shrink-0 font-mono text-xs text-gray-500">
                  {c.meta}
                </span>
              )}
            </span>
            {c.hint && (
              <span className="text-sm leading-relaxed text-gray-600">
                {c.hint}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
