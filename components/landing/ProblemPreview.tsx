'use client'

/**
 * The hero's interactive problem — the "learn by solving" hook.
 *
 * The iconic trig limit lim(x→0) sin(x)/x = 1, with a live curve and tappable
 * answers. Purely illustrative: nothing is scored and nothing is stored. It is
 * here because a claim like "tu réponds, et tu sais tout de suite où ça a
 * cassé" is better demonstrated than asserted.
 */

import React, { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'

import MathContent from '@/components/math/MathContent'

// `labelKey` names what a screen reader announces: the visible content is
// rendered maths, which has no useful accessible name of its own.
const CHOICES: {
  id: string
  tex: string | null
  labelKey: 'label0' | 'label1' | 'labelInf' | 'noAnswer'
  correct?: boolean
}[] = [
  { id: '0', tex: '0', labelKey: 'label0' },
  { id: '1', tex: '1', labelKey: 'label1', correct: true },
  { id: 'inf', tex: '+\\infty', labelKey: 'labelInf' },
  { id: 'none', tex: null, labelKey: 'noAnswer' },
]

/** f(x) = sin(x)/x sampled across [-10, 10], mapped into the viewBox. */
function useCurve(w: number, h: number) {
  return useMemo(() => {
    const pad = 10
    const xMin = -10
    const xMax = 10
    const yMin = -0.3
    const yMax = 1.15
    const sx = (x: number) => pad + ((x - xMin) / (xMax - xMin)) * (w - 2 * pad)
    const sy = (y: number) =>
      h - pad - ((y - yMin) / (yMax - yMin)) * (h - 2 * pad)
    const pts: string[] = []
    for (let i = 0; i <= 160; i++) {
      const x = xMin + (i / 160) * (xMax - xMin)
      const y = x === 0 ? 1 : Math.sin(x) / x
      pts.push(`${sx(x).toFixed(1)},${sy(y).toFixed(1)}`)
    }
    return { path: pts.join(' '), holeX: sx(0), holeY: sy(1), axisY: sy(0) }
  }, [w, h])
}

export default function ProblemPreview() {
  const t = useTranslations('preview')
  const [picked, setPicked] = useState<string | null>(null)
  const c = useCurve(400, 190)
  const solved = picked === '1'

  return (
    <div className="rounded-[22px] border border-zb-line bg-white p-5 shadow-[0_30px_60px_-30px_rgba(15,38,32,0.35)] sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-zb-mint-soft px-3 py-1 text-xs font-semibold text-zb-mint">
          {t('badge')}
        </span>
        <span className="shrink-0 font-mono text-xs uppercase tracking-wide text-gray-500">
          {t('try')} 👇
        </span>
      </div>

      <div className="relative h-[190px] overflow-hidden rounded-[14px] bg-zb-mint-soft/60">
        <svg
          width="100%"
          height="190"
          viewBox="0 0 400 190"
          preserveAspectRatio="none"
          aria-hidden
        >
          <line
            x1="0"
            y1={c.axisY}
            x2="400"
            y2={c.axisY}
            stroke="var(--zb-line)"
            strokeWidth={1.5}
          />
          <polyline
            points={c.path}
            fill="none"
            stroke="var(--zb-mint)"
            strokeWidth={3}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <circle
            cx={c.holeX}
            cy={c.holeY}
            r={5}
            fill={solved ? 'var(--zb-mint)' : 'var(--zb-gold)'}
          />
          {solved && (
            <circle
              cx={c.holeX}
              cy={c.holeY}
              r={12}
              fill="none"
              stroke="var(--zb-mint)"
              strokeWidth={1.5}
              opacity={0.5}
            />
          )}
        </svg>
      </div>

      <div className="my-5 text-center">
        <MathContent block>
          {'\\lim_{x\\to 0}\\ \\dfrac{\\sin x}{x}\\ = \\ ?'}
        </MathContent>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {CHOICES.map((ch) => {
          const isPicked = picked === ch.id
          const ok = isPicked && ch.correct
          const no = isPicked && !ch.correct
          return (
            <button
              key={ch.id}
              type="button"
              aria-label={t(ch.labelKey)}
              aria-pressed={isPicked}
              onClick={() => setPicked(ch.id)}
              className={`flex min-h-[52px] items-center justify-center rounded-xl border-[1.5px] px-1 py-3 text-sm font-bold transition-colors sm:text-base ${
                ok
                  ? 'border-zb-mint bg-zb-mint-soft text-zb-mint'
                  : no
                    ? 'border-zb-rose bg-zb-rose-soft text-zb-rose'
                    : 'border-zb-line bg-white text-zb-ink hover:border-zb-mint/50'
              }`}
            >
              {ch.tex ? <MathContent>{ch.tex}</MathContent> : t('noAnswer')}
            </button>
          )
        })}
      </div>

      <p
        aria-live="polite"
        className={`mt-4 text-sm font-medium transition-opacity ${
          picked ? 'opacity-100' : 'opacity-0'
        } ${solved ? 'text-zb-mint' : 'text-zb-rose'}`}
      >
        {solved ? t('correct') : t('wrong')}
      </p>
    </div>
  )
}
