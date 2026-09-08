/**
 * The dark slab a section of the app opens on.
 *
 * DataCamp puts one at the top of the course catalogue and another at the top of
 * every course page (`8_1-courses.png`, `9_1-example-course.png`), and it does
 * the same two jobs each time: it says what this place is, and it holds the
 * primary action so that action is the highest-contrast thing on the screen
 * before a single card is read.
 *
 * Everything below it is cream and white, so the slab also works as punctuation
 * — the reader can tell at a glance which page they are on from the shape of the
 * first 200px, without reading a word.
 *
 * Server component: it has no state, and keeping it out of the client bundle
 * means the course page's banner costs nothing to hydrate.
 *
 * On the navy, use `zb-navy-dim` for secondary text and `zb-mint-on-dark` for
 * anything meaningful — plain `zb-mint` is 3.4:1 here and was only ever measured
 * on cream. See the token block in `app/globals.css`.
 */

import React from 'react'

export default function PageBanner({
  eyebrow,
  title,
  /** Sits inline after the title — a status or category pill. */
  badge,
  description,
  /** Buttons, rendered under the description. */
  actions,
  /** Stat chips, rendered under the actions. */
  meta,
  dir,
}: {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  badge?: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  meta?: React.ReactNode
  dir?: 'ltr' | 'rtl'
}) {
  return (
    <div className="rounded-xl bg-zb-navy px-5 py-7 sm:px-8 sm:py-9">
      {eyebrow && (
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-navy-dim">
          {eyebrow}
        </p>
      )}

      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
        <h1
          dir={dir}
          className="text-balance font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl"
        >
          {title}
        </h1>
        {badge}
      </div>

      {description && (
        <p className="mt-3 max-w-2xl leading-relaxed text-zb-navy-dim">
          {description}
        </p>
      )}

      {actions && <div className="mt-5 flex flex-wrap gap-3">{actions}</div>}

      {/* The source's chip row: `1 hr · 6 videos · 20 Exercises · 1650 XP`.
          Wrapping, not scrolling — a horizontal scroller of four short chips is
          a gesture nobody discovers, and on a 390px phone these fit two-up. */}
      {meta && <div className="mt-5 flex flex-wrap gap-2">{meta}</div>}
    </div>
  )
}

/**
 * One stat chip for the `meta` row.
 *
 * `gold` is reserved for the XP chip, which is the only figure in the row the
 * student earns rather than merely reads — the same distinction the header's
 * `XpChip` makes on cream.
 */
export function BannerStat({
  icon,
  children,
  tone = 'plain',
}: {
  icon?: React.ReactNode
  children: React.ReactNode
  tone?: 'plain' | 'gold'
}) {
  return (
    <span
      dir="ltr"
      className={`inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-semibold tabular-nums ${
        tone === 'gold'
          ? 'bg-zb-gold text-zb-on-accent'
          : 'bg-zb-navy-2 text-white'
      }`}
    >
      {icon}
      {children}
    </span>
  )
}
