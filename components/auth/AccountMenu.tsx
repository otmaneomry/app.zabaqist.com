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
 *
 * ── The fallback has to cover a photo that FAILS, not only one that is absent ─
 * `image ? <img> : initial` treats "Google gave us no URL" as the only way to
 * end up without a picture. A URL that is present and does not load — an ad
 * blocker or privacy extension refusing `googleusercontent.com`, a phone with
 * no signal, an expired link — left the browser's own broken-image glyph inside
 * a 36px circular button: a grey or blue box with a question mark in it, which
 * is precisely the "looks broken" this component's fallback exists to avoid.
 * Verified from the outside first: Google answers that URL 200 with
 * `access-control-allow-origin: *` under every request shape, and this app
 * sends no CSP or COEP that could block it, so the failure is in the reader's
 * browser and nothing here can prevent it — only stop it from showing.
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
  // Set when the photo fails to load, so the initial takes over. Keyed by the
  // URL: a student who signs in as someone else must not inherit the previous
  // account's failure.
  const [brokenSrc, setBrokenSrc] = useState<string | null>(null)
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

  // `??` only falls through on null/undefined, and Google returns an empty
  // `full_name` often enough: the avatar then drew a circle with no letter in
  // it rather than falling back to the address.
  const initial = ((name || email || '?').trim().charAt(0) || '?').toUpperCase()

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
        {image && brokenSrc !== image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt=""
            width={36}
            height={36}
            className="size-full object-cover"
            // Google serves these with `access-control-allow-origin: *` and no
            // referer requirement, but some hosts 403 a hotlinked avatar and
            // the referer buys us nothing either way.
            referrerPolicy="no-referrer"
            onError={() => setBrokenSrc(image)}
          />
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
