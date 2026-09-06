'use client'

/**
 * The signed-in reader's avatar, and the way out.
 *
 * Google returns a picture URL for most accounts and nothing for some, so the
 * initial is not a loading state — it is the fallback for accounts that have no
 * image, and it has to look deliberate rather than broken.
 *
 * Plain <img>, not next/image: the source is `lh3.googleusercontent.com`, and
 * routing an avatar through the optimiser means either allow-listing a Google
 * domain in next.config or a build-time failure the first time someone signs in
 * with a photo.
 */

import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { IconLogout } from '@tabler/icons-react'

import { signOutAction } from '@/app/[locale]/signin/actions'

export default function AccountMenu({
  name,
  email,
  image,
}: {
  name?: string | null
  email?: string | null
  image?: string | null
}) {
  const t = useTranslations('auth')
  const [open, setOpen] = useState(false)
  const box = useRef<HTMLDivElement>(null)

  // Close on an outside click or Escape — a menu that can only be dismissed by
  // reopening it is a trap on touch, where there is no cursor to move away.
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!box.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const initial = (name ?? email ?? '?').trim().charAt(0).toUpperCase()

  return (
    <div ref={box} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t('account')}
        className="block size-9 overflow-hidden rounded-full border border-zb-line bg-zb-mint-soft transition-shadow hover:shadow-[var(--zb-shadow-sm)]"
      >
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="" width={36} height={36} className="size-full object-cover" />
        ) : (
          <span className="grid size-full place-items-center text-sm font-bold text-zb-mint-deep">
            {initial}
          </span>
        )}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute end-0 top-11 z-30 w-60 rounded-xl border border-zb-line bg-white p-1.5 shadow-[var(--zb-shadow-lg)]"
        >
          <div className="border-b border-zb-line px-3 pb-2.5 pt-2">
            {name && (
              <p className="truncate text-sm font-semibold text-zb-ink">{name}</p>
            )}
            {email && (
              <p dir="ltr" className="truncate text-xs text-zb-ink-3">
                {email}
              </p>
            )}
          </div>

          <form action={signOutAction}>
            <button
              type="submit"
              role="menuitem"
              className="mt-1 flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-zb-ink-2 transition-colors hover:bg-zb-cream-2 hover:text-zb-ink"
            >
              <IconLogout size={17} stroke={1.8} />
              {t('signOut')}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
