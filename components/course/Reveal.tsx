'use client'

/**
 * A solution or a proof, closed by default.
 *
 * Reading a correction feels like understanding it; redoing it alone is what
 * proves it. The chapters print the worked answer directly under the question,
 * so without this gate the exercise is spoiled before it is attempted. The gate
 * costs one click and buys the attempt.
 */

import React, { useState } from 'react'
import { IconChevronDown } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

export default function Reveal({
  kind,
  children,
}: {
  kind: 'solution' | 'preuve'
  children: React.ReactNode
}) {
  const t = useTranslations('course')
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50/70">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-5 py-3 text-start transition-colors hover:bg-gray-100"
      >
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-zb-gold">
          {t(kind)}
        </span>
        <span className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
          {open ? t('hide') : t('reveal')}
          <IconChevronDown
            size={16}
            className={`transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </span>
      </button>
      {open && (
        <div className="border-t border-gray-200 px-5 py-4 [&>p:first-child]:mt-0">
          {children}
        </div>
      )}
    </div>
  )
}
