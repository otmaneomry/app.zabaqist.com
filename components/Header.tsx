'use client'

/**
 * The in-app header, for a reader who has signed in.
 *
 * It is deliberately the *same chrome* as `components/landing/LandingHeader.tsx`
 * — same 64px height, same cream surface under a blur, same hairline border,
 * same wordmark — because the public page and the app are one product and used
 * not to look like it. This header was white with a drop shadow and a plain
 * black "Zabaqist" set in the body font, so signing in swapped the brand for
 * something anonymous. What changes after auth is the *navigation*, not the
 * identity.
 *
 * Mobile-first, because the audience is: below `md` the nav moves into a drawer
 * behind the hamburger and the premium CTA keeps only its icon. Laid side by
 * side at every width the two groups totalled ~600px, which scrolled every page
 * sideways on a phone — including pages with nothing wide on them.
 */

import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Drawer } from '@mantine/core'
import {
  IconBook,
  IconChartBar,
  IconHome,
  IconMenu2,
  IconTrophy,
} from '@tabler/icons-react'

import { Link, usePathname } from '@/i18n/navigation'
import AccountMenu from '@/components/auth/AccountMenu'
import LangSwitch from '@/components/landing/LangSwitch'
import Logo from '@/components/landing/Logo'
import XpChip from '@/components/ui/XpChip'

/** Only what the chrome draws — never the whole session object. */
export interface HeaderUser {
  name?: string | null
  email?: string | null
  image?: string | null
}

// Three items, like the source: where you are, what there is, and how you are
// doing. The third is private — see components/progress/ProgressDashboard.tsx.
const NAV = [
  { href: '/home', key: 'home', icon: IconHome },
  { href: '/courses', key: 'courses', icon: IconBook },
  { href: '/progres', key: 'progress', icon: IconChartBar },
] as const

export default function Header({ user }: { user?: HeaderUser }) {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // A tap in the drawer navigates; without this the drawer stays open over the
  // page it just moved to.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // `/courses/<slug>` is still the Cours tab. Exact matching lit nothing at all
  // as soon as the reader opened a chapter, which is most of the time.
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-20 border-b border-zb-line bg-zb-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-6">
        <div className="flex min-w-0 items-center gap-6">
          <Link href="/home" aria-label="Zabaqist" className="shrink-0 no-underline">
            <Logo size={20} />
          </Link>

          {/* Below md these live in the drawer instead. */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map(({ href, key, icon: Icon }) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm no-underline transition-colors ${
                    active
                      ? 'bg-zb-mint-tint font-semibold text-zb-mint-deep'
                      : 'font-medium text-zb-ink-2 hover:bg-zb-cream-2 hover:text-zb-ink'
                  }`}
                >
                  <Icon size={17} stroke={1.8} />
                  <span>{t(key)}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <XpChip className="max-sm:hidden" />
          <LangSwitch className="max-sm:hidden" />

          {/* Full label from sm up; icon only on a phone, where the label is
              what pushed the row past the viewport. */}
          <Link
            href="/subscribe"
            // `h-11`, not `h-9`: 36px is under the 44px mobile target standard,
            // and on a phone this shrinks to an icon — so the box IS the target.
            className="inline-flex h-11 items-center gap-2 rounded-full border-2 border-zb-mint px-3 text-sm font-semibold text-zb-mint-deep no-underline transition-colors hover:bg-zb-mint-tint sm:px-4"
          >
            <IconTrophy size={16} stroke={2} />
            <span className="hidden sm:inline">{t('premium')}</span>
            <span className="sr-only sm:hidden">{t('premium')}</span>
          </Link>

          {/* `user` is absent in two different situations, and only one of
              them means signed out. `proxy.ts` has already refused anyone
              without a session, so a reader who reaches this header IS signed
              in — the layout simply could not read their profile, because
              Supabase was unreachable for that request. Rendering nothing took
              away the account menu, and with it the sign-out button, from
              someone perfectly entitled to both. */}
          <AccountMenu {...(user ?? {})} />

          <div className="md:hidden">
            <button
              type="button"
              aria-label={t('openMenu')}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="inline-flex size-9 items-center justify-center rounded-full text-zb-ink-2 transition-colors hover:bg-zb-cream-2 hover:text-zb-ink"
            >
              <IconMenu2 size={20} />
            </button>
          </div>
        </div>
      </div>

      <Drawer
        opened={menuOpen}
        onClose={() => setMenuOpen(false)}
        position="right"
        size="78%"
        title={<Logo size={18} />}
        hiddenFrom="md"
      >
        <nav className="flex flex-col gap-1">
          {NAV.map(({ href, key, icon: Icon }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-base no-underline transition-colors ${
                  active
                    ? 'bg-zb-mint-tint font-semibold text-zb-mint-deep'
                    : 'text-zb-ink-2 hover:bg-zb-cream-2 hover:text-zb-ink'
                }`}
              >
                <Icon size={20} stroke={1.8} />
                <span>{t(key)}</span>
              </Link>
            )
          })}

          <Link
            href="/subscribe"
            className="mt-2 flex items-center gap-3 rounded-lg border-2 border-zb-mint px-3 py-3 text-base font-semibold text-zb-mint-deep no-underline"
          >
            <IconTrophy size={20} />
            <span>{t('premium')}</span>
          </Link>

          <div className="mt-5 flex items-center gap-3">
            <LangSwitch />
            <XpChip />
          </div>
        </nav>
      </Drawer>
    </header>
  )
}
