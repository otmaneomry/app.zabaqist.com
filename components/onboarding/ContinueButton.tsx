'use client'

/**
 * The one button in the funnel.
 *
 * One label, one position, two states — the same component on every step, so
 * the reader's thumb never has to look for it. Enabled is dark with a hard
 * offset edge and no blur; disabled is flat with no edge at all. **The edge's
 * presence is the affordance signal**, which is why the disabled state removes
 * it rather than just dimming the fill.
 *
 * It never auto-advances. Pacing stays with the reader.
 */

import React from 'react'

export default function ContinueButton({
  label,
  disabled = false,
  onClick,
}: {
  label: string
  disabled?: boolean
  onClick: () => void
}) {
  // `pb-[max(...)]`: a fixed bar at the bottom of an iPhone sits under the
  // home indicator, and this is the only control on the screen.
  return (
    <div className="fixed inset-x-0 bottom-0 z-10 flex justify-center bg-gradient-to-t from-zb-cream via-zb-cream to-transparent px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-10">
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        // The single CTA of the whole funnel had no focus style of its own,
        // leaving a keyboard reader with whatever ring the browser draws over
        // a near-black pill — which on the disabled state is nothing at all.
        className={`h-14 w-full max-w-[509px] rounded-full text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zb-ink focus-visible:ring-offset-2 focus-visible:ring-offset-zb-cream ${
          disabled
            ? 'cursor-not-allowed bg-gray-200 text-gray-400'
            : 'bg-zb-ink text-white shadow-[0_3px_0_0_var(--zb-mint-deep),var(--zb-shadow-sm)] active:translate-y-[2px] active:shadow-[0_1px_0_0_var(--zb-mint-deep)]'
        }`}
      >
        {label}
      </button>
    </div>
  )
}
