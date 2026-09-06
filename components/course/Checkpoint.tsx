'use client'

/**
 * An `Application.` from the chapter, turned from prose into a stop.
 *
 * Three graded hints, never a bare correction: −20% XP per hint opened, +20%
 * for solving with none. Nothing is auto-graded and nothing is scored for the
 * student — they commit to an attempt, then self-assess. There are no lives, no
 * timer and no failure state, on purpose.
 */

import React, { useEffect, useState } from 'react'
import { IconBulb } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import {
  EMPTY_CHECKPOINT,
  readCheckpoint,
  writeCheckpoint,
  xpFor,
  type CheckpointState,
  type Verdict,
} from '@/lib/courseProgress'

const VERDICTS: Verdict[] = ['got', 'close', 'not-yet']

export default function Checkpoint({
  storageKey,
  baseXp,
  tools,
  hasSolution,
  children,
}: {
  storageKey: string
  baseXp: number
  /** Named results stated in this section — hint level 2. */
  tools: string[]
  /** Whether this section carries a worked solution to point at — hint level 3. */
  hasSolution: boolean
  children: React.ReactNode
}) {
  const t = useTranslations('course')
  // One state object, not four: hydrating from localStorage would otherwise
  // fire four setStates in a single effect and cascade renders.
  const [state, setState] = useState<CheckpointState>(EMPTY_CHECKPOINT)
  const { draft, tried, verdict, hints } = state

  const patch = (p: Partial<CheckpointState>) =>
    setState((s) => ({ ...s, ...p }))

  // localStorage does not exist during SSR, so hydrating can only happen here.
  useEffect(() => {
    setState(readCheckpoint(storageKey))
  }, [storageKey])

  useEffect(() => {
    if (!tried && !draft && !verdict && !hints) return
    writeCheckpoint(storageKey, { draft, tried, verdict, hints })
  }, [storageKey, draft, tried, verdict, hints])

  // Level 3 only exists where the pedagogue wrote a solution to point at.
  const maxHints = hasSolution ? 3 : 2
  const earned = xpFor(baseXp, hints)


  return (
    <section className="mt-6 rounded-xl border border-zb-rose/30 bg-zb-rose-soft px-5 py-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-zb-rose">
          {t('yourTurn')}
        </p>
        <span className="font-mono text-xs text-gray-500" dir="ltr">
          {hints === 0 ? t('noNet', { xp: earned }) : `${earned} XP`}
        </span>
      </div>

      <div className="mt-1 [&>p:first-child]:mt-0">{children}</div>

      {!tried && (
        <div className="mt-4">
          <label htmlFor={`${storageKey}-draft`} className="sr-only">
            {t('scratchLabel')}
          </label>
          <textarea
            id={`${storageKey}-draft`}
            value={draft}
            onChange={(e) => patch({ draft: e.target.value })}
            rows={3}
            placeholder={t('scratchPlaceholder')}
            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-zb-teal focus:ring-[3px] focus:ring-zb-teal/20"
          />
          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => patch({ tried: true })}
              className="inline-flex h-9 items-center rounded-lg bg-zb-teal px-4 text-sm font-semibold text-white transition-colors hover:bg-zb-teal-dark"
            >
              {t('iTried')} →
            </button>
            {hints < maxHints && (
              <button
                type="button"
                onClick={() => patch({ hints: hints + 1 })}
                className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 text-sm font-medium transition-colors hover:border-zb-gold"
              >
                <IconBulb size={16} /> {t('hintCta', { n: hints + 1 })}
              </button>
            )}
          </div>
          <p className="mt-2 text-xs text-gray-500">
            {t('scratchNote')}
          </p>
        </div>
      )}

      {hints > 0 && (
        <ol className="mt-3 space-y-2">
          {hints >= 1 && (
            <Hint label={t('hintCta', { n: 1 })}>
              {t('hint1')}
            </Hint>
          )}
          {hints >= 2 && (
            <Hint label={t('hintCta', { n: 2 })}>
              {tools.length > 0
                ? t('hint2', { tools: tools.join(' · ') })
                : t('hint2Empty')}
            </Hint>
          )}
          {hints >= 3 && (
            <Hint label={t('hintCta', { n: 3 })}>
              {t('hint3')}
            </Hint>
          )}
        </ol>
      )}

      {tried && (
        <div className="mt-4 border-t border-zb-rose/20 pt-3.5">
          <p className="text-sm font-medium">{t('selfCheck')}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {VERDICTS.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => patch({ verdict: v })}
                aria-pressed={verdict === v}
                className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                  verdict === v
                    ? 'border-zb-teal bg-zb-teal-soft text-zb-teal-dark'
                    : 'border-gray-300 bg-white hover:border-zb-teal/50'
                }`}
              >
                {t(`verdict-${v}`)}
              </button>
            ))}
          </div>
          {verdict && (
            <p className="mt-3 text-sm text-gray-700">{t(`after-${verdict}`)}</p>
          )}
        </div>
      )}
    </section>
  )
}

function Hint({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="rounded-lg border border-zb-gold/25 bg-zb-gold-soft px-4 py-2.5 text-sm">
      <span className="font-mono text-xs uppercase tracking-wide text-zb-gold">
        {label}
      </span>
      <p className="mt-0.5 text-gray-800">{children}</p>
    </li>
  )
}
