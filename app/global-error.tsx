'use client'

/**
 * The last resort: an error in the root layout itself.
 *
 * `app/[locale]/error.tsx` catches anything thrown inside a page. It cannot
 * catch a throw in the root layout, because that is the boundary it lives in —
 * so until this file existed, a failure there fell through to Next's own screen,
 * which in production is an unbranded "Application error: a client-side
 * exception has occurred" on a white page. For a student mid-revision that
 * reads as "the site is gone and so is my work."
 *
 * Two constraints make this file unlike every other page, and both come from
 * it REPLACING the root layout rather than rendering inside it:
 *
 *  1. It must supply its own `<html>` and `<body>`.
 *  2. There is no `NextIntlClientProvider` above it, so `useTranslations` would
 *     throw — inside an error boundary, which is how you turn one error into a
 *     blank page. The copy is therefore inline, and since the provider that
 *     knows the reader's language is exactly what is missing, it is written in
 *     both: Arabic first for an Arabic reader, French under it. Short enough
 *     that neither is a wall.
 *
 * Styling is inline for the same reason a global error page usually is: if the
 * stylesheet is what failed, class names buy nothing. These are the Mint Tea
 * values, hard-coded, so the page still looks like Zabaqist when nothing else
 * loads.
 */

import { useEffect } from 'react'

const INK = '#1c2b26'
const INK_2 = '#48605a'
const MINT = '#1a4d40'
const CREAM = '#fbf9f4'
const LINE = '#e6e1d6'

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    // Same honest placeholder as the segment boundary: this reaches the
    // browser console and nowhere else until a monitor is chosen.
    console.error(error)
  }, [error])

  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1.25rem',
          background: CREAM,
          color: INK,
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <main style={{ width: '100%', maxWidth: '30rem', textAlign: 'center' }}>
          {/* The khatim, drawn inline — no font, no stylesheet, no request. */}
          <svg width="34" height="34" viewBox="-13 -13 26 26" aria-hidden>
            <polygon
              points="0,-12.35 3.62,-8.73 8.73,-8.73 8.73,-3.62 12.35,0 8.73,3.62 8.73,8.73 3.62,8.73 0,12.35 -3.62,8.73 -8.73,8.73 -8.73,3.62 -12.35,0 -8.73,-3.62 -8.73,-8.73 -3.62,-8.73"
              fill={MINT}
            />
          </svg>

          <h1
            dir="rtl"
            lang="ar"
            style={{
              margin: '1.75rem 0 0',
              fontSize: '1.35rem',
              lineHeight: 1.4,
              fontWeight: 700,
            }}
          >
            حدث خطأ ما
          </h1>
          <p
            dir="rtl"
            lang="ar"
            style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: INK_2, lineHeight: 1.7 }}
          >
            الخطأ منّا، لا منك. تقدّمك محفوظ على هذا الجهاز ولم يتغيّر.
          </p>

          <hr
            style={{
              margin: '1.5rem auto',
              width: '3rem',
              border: 0,
              borderTop: `1px solid ${LINE}`,
            }}
          />

          <h2 lang="fr" style={{ margin: 0, fontSize: '1.35rem', lineHeight: 1.4, fontWeight: 700 }}>
            Quelque chose a mal tourné
          </h2>
          <p
            lang="fr"
            style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: INK_2, lineHeight: 1.7 }}
          >
            L’erreur vient de nous, pas de toi. Ta progression est enregistrée sur
            cet appareil : elle n’a pas bougé.
          </p>

          {/* The digest is the only handle on a production stack trace, so it is
              worth showing rather than hiding — it is what a student can quote. */}
          {error.digest && (
            <p
              dir="ltr"
              style={{
                margin: '1rem 0 0',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: '0.7rem',
                color: INK_2,
              }}
            >
              {error.digest}
            </p>
          )}

          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
            }}
          >
            <button
              type="button"
              onClick={() => retry()}
              style={{
                height: '2.75rem',
                padding: '0 1.5rem',
                borderRadius: '999px',
                border: 0,
                background: MINT,
                color: '#fff',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              إعادة المحاولة · Réessayer
            </button>
            {/* A plain anchor, not next/link. `no-html-link-for-pages` is
                right everywhere else and wrong here: this boundary replaces the
                root layout, so the router it would need is part of what failed,
                and a full document load is the recovery. Next's own docs for
                this file use plain HTML for the same reason. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              style={{
                height: '2.75rem',
                padding: '0 1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: '999px',
                border: `1px solid ${LINE}`,
                background: '#fff',
                color: MINT,
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              الرئيسية · Accueil
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}
