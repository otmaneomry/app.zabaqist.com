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

import React, { useRef } from 'react'

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
  labelledBy,
}: {
  choices: Choice[]
  value: string | null
  onChange: (id: string) => void
  columns?: 1 | 2
  /**
   * The id of the question this answers.
   *
   * A `radiogroup` with no name announces itself as "group" and the reader is
   * left to infer the question from the options. The step's own heading is
   * already on screen saying it; this points at that rather than repeating it
   * in a second string to translate.
   */
  labelledBy: string
}) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([])

  /**
   * Arrow keys move the selection, as a radio group does everywhere else.
   *
   * With plain buttons the reader had to Tab through every option, and Tab in
   * a radio group is supposed to leave it. Down/Right advance and Up/Left go
   * back in both writing directions: the vertical pair always means what it
   * says, which is what a reader falls back on when the horizontal pair does
   * not match the script.
   */
  const move = (from: number, delta: number) => {
    const to = (from + delta + choices.length) % choices.length
    const target = choices[to]
    if (!target) return
    onChange(target.id)
    buttons.current[to]?.focus()
  }

  // One tab stop for the whole group — the selected option, or the first one
  // when nothing is selected yet.
  const stop = choices.findIndex((c) => c.id === value)
  const tabStop = stop === -1 ? 0 : stop

  return (
    <div
      role="radiogroup"
      aria-labelledby={labelledBy}
      className={`mt-8 grid gap-3 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}
    >
      {choices.map((c, i) => {
        const active = value === c.id
        return (
          <button
            key={c.id}
            ref={(el) => {
              buttons.current[i] = el
            }}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={i === tabStop ? 0 : -1}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault()
                move(i, 1)
              } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault()
                move(i, -1)
              }
            }}
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
