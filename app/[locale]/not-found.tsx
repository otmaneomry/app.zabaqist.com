/**
 * 404 — a page that is not continuous at 404.
 *
 * The joke is the curriculum. Chapter 1 of both programmes is "Limites et
 * continuité", and a missing page is exactly the object that chapter opens
 * with: both one-sided limits exist, they disagree, and the function has no
 * value at the point at all. So the graph below is not decoration — it is a
 * correctly drawn jump discontinuity with two hollow circles and no filled
 * one, which is what "this page does not exist" looks like in the notation the
 * reader is here to learn.
 *
 * Server component. KaTeX renders to HTML at request time, as it does for the
 * chapters, so a 404 ships no JavaScript to be funny.
 */

import React from 'react'
import katex from 'katex'
import { getTranslations } from 'next-intl/server'

import 'katex/dist/katex.min.css'

import { Link } from '@/i18n/navigation'
import Logo from '@/components/landing/Logo'

const LIMITS = String.raw`\lim_{x \to 404^-} f(x) \;\neq\; \lim_{x \to 404^+} f(x)`

/**
 * The discontinuity, drawn.
 *
 * Two hollow circles and no filled one: both one-sided limits exist, and `f`
 * takes no value at 404. A filled dot on either branch would quietly turn this
 * into a removable discontinuity and make the picture wrong — the pedagogue's
 * chapter is explicit about the difference, and a student who has read it
 * would notice.
 *
 * No `dir` needed: an SVG coordinate system does not mirror under RTL, so the
 * curve reads left-to-right on the Arabic route exactly as a graph should.
 */
function Discontinuity({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 400 210"
      className="h-auto w-full"
      role="img"
      aria-label={label}
    >
      {/* axes */}
      <line x1="24" y1="176" x2="380" y2="176" stroke="var(--zb-line)" strokeWidth="1.5" />
      <line x1="24" y1="20" x2="24" y2="176" stroke="var(--zb-line)" strokeWidth="1.5" />

      {/* the point that is missing */}
      <line
        x1="200" y1="26" x2="200" y2="176"
        stroke="var(--zb-gold)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.7"
      />

      {/* left branch, climbing to a limit it never reaches */}
      <path
        d="M 34 158 C 90 152, 150 128, 200 74"
        fill="none" stroke="var(--zb-mint)" strokeWidth="3" strokeLinecap="round"
      />
      {/* right branch, resuming somewhere else entirely */}
      <path
        d="M 200 134 C 250 122, 310 96, 372 44"
        fill="none" stroke="var(--zb-mint)" strokeWidth="3" strokeLinecap="round"
      />

      {/* both ends hollow: neither one-sided limit is a value of f */}
      <circle cx="200" cy="74" r="6" fill="var(--zb-cream)" stroke="var(--zb-mint-deep)" strokeWidth="2.5" />
      <circle cx="200" cy="134" r="6" fill="var(--zb-cream)" stroke="var(--zb-mint-deep)" strokeWidth="2.5" />

      <text
        x="200" y="196" textAnchor="middle"
        className="fill-zb-gold-deep font-mono" fontSize="13" fontWeight="600"
      >
        404
      </text>
    </svg>
  )
}

export default async function NotFound() {
  const t = await getTranslations('notFound')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zb-cream px-5 py-16">
      <div className="w-full max-w-lg">
        <div className="flex justify-center">
          <Link href="/" aria-label="Zabaqist" className="no-underline">
            <Logo size={26} />
          </Link>
        </div>

        <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.18em] text-zb-gold-deep">
          {t('eyebrow')}
        </p>

        <h1 className="mt-3 text-center font-display text-[28px] font-bold leading-tight tracking-tight text-zb-ink md:text-[32px]">
          {t('title')}
        </h1>

        <figure className="mt-8 rounded-2xl border border-zb-line bg-white p-5 shadow-[var(--zb-shadow-sm)]">
          <Discontinuity label={t('caption')} />
          <figcaption className="mt-2 text-center text-xs text-zb-ink-3">
            {t('caption')}
          </figcaption>
        </figure>

        <div
          dir="ltr"
          className="mt-7 overflow-x-auto text-center text-[15px] text-zb-ink"
          dangerouslySetInnerHTML={{
            __html: katex.renderToString(LIMITS, {
              displayMode: true,
              output: 'html',
              throwOnError: false,
            }),
          }}
        />

        <p className="mt-5 text-center text-sm leading-relaxed text-zb-ink-2">
          {t('body')}
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-zb-mint px-6 text-sm font-semibold text-white no-underline shadow-[0_3px_0_0_var(--zb-mint-deep),var(--zb-shadow-sm)] transition-colors hover:bg-zb-mint-deep sm:w-auto"
          >
            {t('home')}
          </Link>
          {/* The chapter this joke is quoting. A wrong turn is a decent moment
              to be handed the lesson rather than only an apology. */}
          <Link
            href="/courses/limites-et-continuite"
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-zb-line bg-white px-6 text-sm font-semibold text-zb-mint-deep no-underline transition-colors hover:border-zb-mint/40 sm:w-auto"
          >
            {t('revise')}
          </Link>
        </div>
      </div>
    </main>
  )
}
