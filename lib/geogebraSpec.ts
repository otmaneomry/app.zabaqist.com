/**
 * The shape of a ```geogebra fence, and its parser.
 *
 * Deliberately NOT in `components/math/GeogebraBlock.tsx`: that file is
 * `'use client'`, and a function imported from a client module is only a client
 * reference on the server — calling it during render fails with "Attempted to
 * call parseSpec() from the server". The parser runs while the document is
 * rendered server-side, so it has to live in a module with no directive.
 */

export interface GeogebraSpec {
  appName?: 'graphing' | 'geometry' | 'classic' | '3d' | 'scientific'
  /** xMin, xMax, yMin, yMax */
  coords?: [number, number, number, number]
  commands?: string[]
  style?: Record<string, { color?: [number, number, number]; thickness?: number }>
  /** Object name → caption, for labelled points. */
  points?: Record<string, string>
}

/** Parses the fence body, returning null rather than throwing on bad JSON. */
export function parseSpec(source: string): GeogebraSpec | null {
  try {
    const spec: unknown = JSON.parse(source)
    // `typeof [] === 'object'` and `[]` is truthy, so a fence containing
    // `[1,2,3]` came back as a spec and `GeogebraBlock` then read `.commands`
    // off an array and got undefined — an empty applet where a figure should
    // be, with the null this function promises never returned.
    return typeof spec === 'object' && spec !== null && !Array.isArray(spec)
      ? (spec as GeogebraSpec)
      : null
  } catch {
    return null
  }
}
