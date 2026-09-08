'use client'

/**
 * The in-app top bar.
 *
 * Navigation left this file when `components/shell/AppSidebar.tsx` arrived. The
 * bar used to carry three nav pills AND a premium CTA AND a language switch AND
 * an XP chip AND an avatar, which is why it needed a drawer at `md` — laid out
 * side by side the two groups totalled ~600px and scrolled every page sideways
 * on a phone. Now the rail owns *where you can go* and this owns *who you are
 * and how you are doing*, which is the split DataCamp uses and the reason its
 * bar stays legible at 1280px with eleven destinations behind it.
 *
 * What is NOT here is DataCamp's global search field. It is the most prominent
 * thing in their bar, and it would be the most prominent thing in ours with
 * nothing behind it: thirteen chapters do not need a search box, and one that
 * returned nothing would be the third piece of invented chrome this codebase has
 * had to delete (see `MainContent.tsx` on `PremiumCard` and `RecommendedSection`).
 * The catalogue filters itself, on the catalogue page, where the material is.
 *
 * Below `lg` the rail is not rendered, so the drawer here carries its rows —
 * from `NAV_GROUPS`, so the two lists cannot drift apart.
 */

import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Drawer } from '@mantine/core'
import { IconMenu2, IconTrophy } from '@tabler/icons-react'

import { Link, usePathname } from '@/i18n/navigation'
import AccountMenu from '@/components/auth/AccountMenu'
import LangSwitch from '@/components/landing/LangSwitch'
import Logo from '@/components/landing/Logo'
import StreakChip from '@/components/ui/StreakChip'
import XpChip from '@/components/ui/XpChip'
import {
  NAV_GROUPS,
  NavRow,
  isActiveHref,
} from '@/components/shell/AppSidebar'

/** Only what the chrome draws — never the whole session object. */
export interface HeaderUser {
  name?: string | null
  email?: string | null
  image?: string | null
}

export default function Header({ user }: { user?: HeaderUser }) {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // A tap in the drawer navigates; without this the drawer stays open over the
  // page it just moved to.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header data-app-chrome className="sticky top-0 z-30 border-b border-zb-line bg-white">
      <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          {/* The hamburger leads on a phone, where it is the only way to the
              rail's rows. On `lg` the rail is on screen and it disappears. */}
          <button
            type="button"
            aria-label={t('openMenu')}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="-ms-2 inline-flex size-10 items-center justify-center rounded-full text-zb-ink-2 transition-colors hover:bg-zb-cream-2 hover:text-zb-ink lg:hidden"
          >
            <IconMenu2 size={21} />
          </button>

          <Link
            href="/home"
            aria-label="Zabaqist"
            className="shrink-0 no-underline"
          >
            <Logo size={20} />
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* XP, and only XP. The streak is at the foot of the rail on `lg`,
              in the greeting on the dashboard, and in the drawer on a phone —
              putting it here too would print the same number twice on the one
              screen where both are visible, which reads as a fault rather than
              as emphasis. Hidden below `md`, where it costs the avatar its room
              and the drawer carries it anyway. */}
          <XpChip className="max-md:hidden" />

          <LangSwitch className="max-sm:hidden" />

          {/* Icon only on a phone: the label is what pushed this row past the
              viewport. `h-11` because at that width the box IS the tap target
              and 36px is under the 44px standard. */}
          <Link
            href="/subscribe"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-zb-mint px-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-zb-mint-deep sm:px-4"
          >
            <IconTrophy size={16} stroke={2} />
            <span className="hidden sm:inline">{t('premium')}</span>
            <span className="sr-only sm:hidden">{t('premium')}</span>
          </Link>

          {user && <AccountMenu {...user} />}
        </div>
      </div>

      {/* The drawer is the rail, on the rail's own ground — a cream drawer would
          make the same rows look like a different menu at a different width. */}
      <Drawer
        opened={menuOpen}
        onClose={() => setMenuOpen(false)}
        position="left"
        size="80%"
        title={<Logo size={18} />}
        hiddenFrom="lg"
        classNames={{
          content: 'bg-zb-navy',
          header: 'bg-zb-navy',
          title: 'text-white',
          close: 'text-zb-navy-dim hover:bg-zb-navy-2',
        }}
      >
        <div className="space-y-6 pb-6">
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
                      size="drawer"
                    />
                  </li>
                ))}
              </ul>
              {group.heading === null && (
                <hr className="mt-6 border-zb-navy-line" />
              )}
            </div>
          ))}

          <Link
            href="/subscribe"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-zb-mint px-4 text-base font-semibold text-white no-underline"
          >
            <IconTrophy size={19} stroke={2} />
            <span>{t('premium')}</span>
          </Link>

          {/* What the bar drops below `md`, plus the streak the rail would have
              carried if there were a rail at this width. Nothing in the chrome
              is unreachable on a phone. */}
          <div className="flex flex-wrap items-center gap-3 px-3 pt-2">
            <XpChip />
            <StreakChip />
            <LangSwitch />
          </div>
        </div>
      </Drawer>
    </header>
  )
}
