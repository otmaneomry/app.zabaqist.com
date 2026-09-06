'use client'

/**
 * A GeoGebra figure declared from markdown.
 *
 * The chapter is a document, so a figure has to be expressible *in* the
 * document — not as a callback wired up in JSX. A fenced block does it:
 *
 * ```geogebra
 * { "coords": [-1, 8, -3, 3],
 *   "commands": ["f(x) = ln(x)", "A = (1, 0)"],
 *   "style": { "f": { "color": [44, 176, 161], "thickness": 4 } },
 *   "points": { "A": "(1, 0)" } }
 * ```
 *
 * `GeogebraViewer` already accepted a `commands` prop but never did anything
 * with it; the applet's API only exists on `window.ggbApplet` after load, which
 * is why this runs them in `appletOnLoad` rather than passing them down.
 */

import React, { useCallback } from 'react'
import { useMediaQuery } from '@mantine/hooks'

import GeogebraViewer from '@/components/math/GeogebraViewer'
import type { GeogebraSpec } from '@/lib/geogebraSpec'

export default function GeogebraBlock({ spec }: { spec: GeogebraSpec }) {
  const isTablet = useMediaQuery('(min-width: 769px)')
  const isDesktop = useMediaQuery('(min-width: 1025px)')

  const onLoad = useCallback(() => {
    // The applet publishes its API on the window a moment after the callback
    // fires; this mirrors what the hand-written course page had to do.
    setTimeout(() => {
      const api = (window as unknown as { ggbApplet?: Record<string, Function> })
        .ggbApplet
      if (!api) return
      try {
        if (spec.coords) api.setCoordSystem?.(...spec.coords)
        for (const cmd of spec.commands ?? []) api.evalCommand?.(cmd)
        for (const [name, s] of Object.entries(spec.style ?? {})) {
          if (s.color) api.setColor?.(name, ...s.color)
          if (s.thickness) api.setLineThickness?.(name, s.thickness)
        }
        for (const [name, caption] of Object.entries(spec.points ?? {})) {
          api.setPointStyle?.(name, 3)
          api.setPointSize?.(name, 5)
          api.setCaption?.(name, caption)
          api.setLabelVisible?.(name, true)
        }
      } catch {
        /* the figure is an aid, not the lesson — a failure here is not fatal */
      }
    }, 2000)
  }, [spec])

  return (
    <div className="mt-6">
      <GeogebraViewer
        appName={spec.appName ?? 'graphing'}
        width={isDesktop ? 800 : isTablet ? 600 : 340}
        height={isDesktop ? 560 : isTablet ? 460 : 340}
        showAlgebraInput={!!isTablet}
        showToolBar
        appletOnLoad={onLoad}
      />
    </div>
  )
}
