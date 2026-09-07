'use client'

/**
 * What a student sees when a page throws.
 *
 * Next's default is a blank screen in production, which reads as "the app is
 * broken and your work is gone". Neither half is usually true, so this says the
 * second part out loud: progress is on the device and has not moved.
 *
 * `retry()` re-fetches and re-renders the segment, which is what these errors
 * usually need: a Supabase hiccup or a dropped request succeeds on the second
 * go. `reset()` — which this used before — only clears the boundary and
 * re-renders the same already-failed payload, so the page tended to come back
 * broken. Next 16 passes both; `retry` became stable in 16.3.
 *
 * There is no error-reporting service wired in. `console.error` is the honest
 * placeholder: it reaches the browser console and nowhere else, so until a
 * monitor is chosen, a production error is still invisible unless someone
 * writes in. That is a known gap, tracked by `npm run prod:check`.
 */

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import Logo from '@/components/landing/Logo'

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  const t = useTranslations('notFound')

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zb-cream px-5 py-16">
      <div className="w-full max-w-md text-center">
        <div className="flex justify-center">
          <Logo size={26} />
        </div>

        <h1 className="mt-9 font-display text-[26px] font-bold leading-tight tracking-tight text-zb-ink">
          {t('errorTitle')}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zb-ink-2">{t('errorBody')}</p>

        {/* The digest is the only handle on a production stack trace, so it is
            worth showing rather than hiding — it is what a student can quote. */}
        {error.digest && (
          <p dir="ltr" className="mt-4 font-mono text-[11px] text-zb-ink-3">
            {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => retry()}
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-zb-mint px-6 text-sm font-semibold text-white shadow-[0_3px_0_0_var(--zb-mint-deep),var(--zb-shadow-sm)] transition-colors hover:bg-zb-mint-deep sm:w-auto"
          >
            {t('errorRetry')}
          </button>
          <Link
            href="/"
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-zb-line bg-white px-6 text-sm font-semibold text-zb-mint-deep no-underline transition-colors hover:border-zb-mint/40 sm:w-auto"
          >
            {t('errorHome')}
          </Link>
        </div>
      </div>
    </main>
  )
}
