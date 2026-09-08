'use client'

/**
 * The persistent navigation rail.
 *
 * This is the one structural idea worth taking from DataCamp: the whole product
 * hangs off a dark rail that never moves. Before this, navigation lived in the
 * header as three pills, which meant the app's shape was only ever visible as
 * three words — a student could not see that there was a programme behind them.
 * A rail shows the shape of the product on every screen, and the cost is 240px
 * on a desktop that has them to spare.
 *
 * Two rules taken with it:
 *
 *  1. **Sections are labelled, and the labels are not links.** `APPRENDRE` is a
 *     heading, not a destination. It groups; it does not add a tier to click
 *     through.
 *  2. **The rail lists only what exists.** DataCamp's rail carries eleven rows
 *     because it has eleven products. Ours carries four, and inventing
 *     "Certifications" or "Projets" to make the column look fuller would be
 *     advertising a thing a student cannot open.
 *
 * What is deliberately NOT here is the Leaderboard, which sits third in
 * DataCamp's rail. `components/course/Checkpoint.tsx` and the landing copy both
 * promise no ranking and no comparison, on the pedagogue's instruction
 * (تجنب كل أشكال التثبيط — avoid every form of discouragement). BRILLIANT_WORKFLOW.md
 * §6 made the same call about Brilliant's Leagues. The promise outranks the
 * pattern; see DATACAMP_WORKFLOW.md §6.
 *
 * Below `lg` the rail is not rendered at all — the header's drawer carries the
 * same list. A 240px rail on a 390px phone is not navigation, it is the page.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import {
  IconBook2,
  IconChartHistogram,
  IconLayoutDashboard,
  IconListCheck,
  type IconProps,
} from '@tabler/icons-react'

import { Link, usePathname } from '@/i18n/navigation'
import { ACTIVITY_EVENT, currentStreak } from '@/lib/activity'

type Icon = React.ComponentType<IconProps>

interface NavItem {
  href: string
  /** Key under the `nav` namespace. */
  key: string
  icon: Icon
}

interface NavGroup {
  /** Key under `nav`, or null for the ungrouped rows at the top. */
  heading: string | null
  items: NavItem[]
}

/**
 * The rail, in the order a student meets it: where they are, what they have
 * done, then the material itself.
 */
export const NAV_GROUPS: NavGroup[] = [
  {
    heading: null,
    items: [
      { href: '/home', key: 'overview', icon: IconLayoutDashboard },
      { href: '/progres', key: 'activity', icon: IconChartHistogram },
    ],
  },
  {
    heading: 'learnSection',
    items: [
      { href: '/courses', key: 'chapters', icon: IconBook2 },
      { href: '/quiz', key: 'revision', icon: IconListCheck },
    ],
  },
]

/**
 * `/courses/<slug>` is still the Chapitres row.
 *
 * Exact matching lit nothing as soon as a chapter was open, which is where a
 * student spends nearly all of their time — the rail would go blank precisely
 * when it was most useful for saying where they are.
 */
export const isActiveHref = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`)

/**
 * One row. Shared with the mobile drawer so the two lists cannot drift — they
 * did drift in the header this replaces, where the drawer had a premium link
 * the desktop nav did not.
 */
export function NavRow({
  href,
  label,
  icon: Icon,
  active,
  size = 'rail',
}: {
  href: string
  label: string
  icon: Icon
  active: boolean
  size?: 'rail' | 'drawer'
}) {
  const rail = size === 'rail'
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`flex items-center gap-3 rounded-lg no-underline transition-colors ${
        rail ? 'px-3 py-2 text-sm' : 'px-3 py-3 text-base'
      } ${
        active
          ? 'bg-zb-navy-3 font-semibold text-white'
          : 'font-medium text-zb-navy-dim hover:bg-zb-navy-2 hover:text-white'
      }`}
    >
      {/* The active row is marked twice — background AND a mint glyph — because
          on a dark ground a background change alone is a ~1.2:1 difference that
          disappears under sunlight, which is where a phone gets used. */}
      <Icon
        size={rail ? 19 : 21}
        stroke={1.8}
        className={active ? 'text-zb-mint-on-dark' : ''}
      />
      <span className="truncate">{label}</span>
    </Link>
  )
}

export default function AppSidebar() {
  const t = useTranslations('nav')
  const pathname = usePathname()

  return (
    // Two elements, and the split is load-bearing. The **outer** one carries the
    // navy and nothing else: as a flex child it stretches to the row's height,
    // so the rail's ground reaches the bottom of a thirteen-card catalogue
    // instead of stopping one viewport down and leaving cream under it. The
    // **inner** one sticks under the 64px header and scrolls its own overflow.
    //
    // `sticky`, not `fixed`: fixed takes the rail out of flow, and the main
    // column then has to be padded by hand at every breakpoint to make room.
    <div data-app-rail className="hidden w-60 shrink-0 bg-zb-navy lg:block">
      <nav
        aria-label={t('primary')}
        className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col overflow-y-auto px-3 py-5"
      >
        <div className="flex-1 space-y-6">
          {NAV_GROUPS.map((group, i) => (
            <div key={group.heading ?? `group-${i}`}>
              {group.heading && (
                <h2 className="mb-2 px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-navy-dim">
                  {t(group.heading)}
                </h2>
              )}
              <ul className="space-y-0.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <NavRow
                      href={item.href}
                      label={t(item.key)}
                      icon={item.icon}
                      active={isActiveHref(pathname, item.href)}
                    />
                  </li>
                ))}
              </ul>
              {/* A rule under the ungrouped rows, matching the source: it
                  separates "you" from "the material", which is a real boundary
                  and the only one in a four-row list worth drawing. */}
              {group.heading === null && (
                <hr className="mt-6 border-zb-navy-line" />
              )}
            </div>
          ))}
        </div>

        {/* DataCamp pins a CTA to the floor of the rail. Ours is not a second
            "Passer au premium" — the header already carries that one, at every
            width, and the same button twice on one screen reads as a fault
            rather than as emphasis. The floor gets the thing the rail is
            otherwise silent about: whether you turned up. */}
        <RailStreak />
      </nav>
    </div>
  )
}

/**
 * The streak, at the foot of the rail.
 *
 * Renders nothing at zero — the same rule as `XpChip` and `StreakChip`. A
 * counter that greets a student who has not started with a nought is a
 * reproach, and the dashboard's streak card is where a zero belongs, with the
 * sentence that explains how to move it.
 */
function RailStreak() {
  const t = useTranslations('dashboard')
  const [streak, setStreak] = useState(0)

  const refresh = useCallback(() => setStreak(currentStreak()), [])

  useEffect(() => {
    refresh()
    window.addEventListener(ACTIVITY_EVENT, refresh)
    return () => window.removeEventListener(ACTIVITY_EVENT, refresh)
  }, [refresh])

  if (streak <= 0) return null

  return (
    <div className="mt-6 rounded-lg bg-zb-navy-2 px-3 py-3">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-zb-navy-dim">
        {t('streakTitle')}
      </p>
      <p dir="ltr" className="mt-1 flex items-baseline gap-1.5">
        <span className="font-display text-xl font-bold tabular-nums leading-none text-white">
          {streak}
        </span>
        <span className="text-xs text-zb-navy-dim">
          {t('streakDays', { n: streak })}
        </span>
      </p>
    </div>
  )
}
