/**
 * What this section is and what it costs, before the reader starts it.
 *
 * Naming both up front is what removes the reason to postpone: starting is the
 * hardest step, and "20 XP, one guided problem, uses the IVT" is a smaller step
 * than an untyped wall of text.
 */

import React from 'react'
import { getTranslations } from 'next-intl/server'

import type { View } from '@/lib/courseDoc'

const TONE: Record<View['kind'], string> = {
  cours: 'border-gray-200 bg-gray-50 text-gray-600',
  methode: 'border-zb-mint/30 bg-zb-mint-soft text-zb-mint-deep',
  exercices: 'border-blue-200 bg-blue-50 text-blue-700',
  devoir: 'border-zb-gold/40 bg-zb-gold-soft text-zb-gold',
  bilan: 'border-gray-200 bg-gray-50 text-gray-600',
}

export default async function ViewHeader({ view }: { view: View }) {
  const t = await getTranslations('course')

  return (
    <div className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      <span
        className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wide ${TONE[view.kind]}`}
      >
        {t(`kind-${view.kind}`)}
      </span>
      <span className="font-mono text-xs text-gray-500" dir="ltr">
        +{view.xp} XP
      </span>
      {view.checkpoints > 0 && (
        <span className="text-gray-500">
          · {t('questionCount', { count: view.checkpoints })}
        </span>
      )}
      {view.tools.length > 0 && (
        <span className="w-full text-xs leading-relaxed text-gray-500">
          {t('toolsHere')} {view.tools.join(' · ')}
        </span>
      )}
    </div>
  )
}
