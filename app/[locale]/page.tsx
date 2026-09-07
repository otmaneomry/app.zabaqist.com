/**
 * Landing page.
 *
 * Ported from zabaqist-turbo/apps/nextjs — the "Apprends en résolvant" hero,
 * the parcours as a station trail, three pillars, footer. Two things are not
 * ports:
 *
 *  · the links point at this app's routes (`/courses`, `/courses/<slug>`,
 *    `/quiz/1`, `/home`), so everything already built keeps working;
 *  · the station states are real, read from the progress this device stored,
 *    so "En cours" is the chapter actually being read and "Continuer" resumes
 *    at the exact section.
 *
 * The previous Brilliant-style landing is still in the repo at
 * `components/frontend/BrilliantLandingPage.tsx`.
 */

import React from 'react'
import { getTranslations } from 'next-intl/server'

import { listCourses } from '@/lib/courseCatalog'

import { Link } from '@/i18n/navigation'

import KhatimFigure from '@/components/landing/KhatimFigure'
import LandingHeader from '@/components/landing/LandingHeader'
import Logo from '@/components/landing/Logo'
import ProblemPreview from '@/components/landing/ProblemPreview'
import ProgrammeSection from '@/components/landing/ProgrammeSection'
import Zellige from '@/components/landing/Zellige'

// No `generateMetadata` here on purpose: the landing page IS the site root, so
// it inherits the layout's SEO title and description — the ones zabaqist.com
// actually ranks on. A page-level title would silently override them.

export default async function Home() {
  // The catalogue decides which chapter this opens. It used to be the literal
  // slug `limites-et-continuite`, which silently 404s the moment that chapter
  // is renamed or the programme is reordered.
  const firstChapter = listCourses()[0]?.slug ?? ''

  const t = await getTranslations('home')
  const pillars = [1, 2, 3].map((i) => ({
    title: t(`pillar${i}Title`),
    body: t(`pillar${i}Body`),
  }))

  return (
    <main className="min-h-dvh bg-zb-cream font-display text-zb-ink">
      <LandingHeader />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden border-b border-zb-line">
        <Zellige id="zellige-hero" density={88} opacity={0.06} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zb-gold-deep">
              {t('eyebrow')}
            </p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              {t('titleA')}
              <br />
              {t('titleB')}{' '}
              <span className="text-zb-mint">{t('titleC')}</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-zb-ink/75">
              {t('sub')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {/* The funnel, not the catalogue: the reader is asked what they
                  need before being shown every chapter. */}
              <Link
                href="/demarrer"
                className="inline-flex h-12 items-center rounded-xl bg-zb-mint px-6 text-base font-semibold text-white no-underline transition-colors hover:bg-zb-mint-deep"
              >
                {t('ctaPrimary')} →
              </Link>
              <Link
                href={`/courses/${firstChapter}`}
                className="inline-flex h-12 items-center rounded-xl border border-zb-line bg-white px-6 text-base font-semibold text-zb-ink no-underline transition-colors hover:border-zb-mint/50"
              >
                {t('ctaSecondary')}
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              {t('legal')}
            </p>
          </div>
          <ProblemPreview />
        </div>
      </section>

      {/* ─── Parcours preview ───
          Client-side: which programme is shown depends on the filière the
          student picked, and SM and Sciences Exp are different programmes. */}
      <ProgrammeSection />

      {/* ─── Why this star ───
          The mark explains itself: the khatim IS the {8/2} octagram, and
          rotation / symmetry / tiling are on the reader's own exam. Ported from
          zabaqist.com, where it is the brand's central argument. */}
      <section className="border-b border-zb-line">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zb-gold-deep">
                {t('geoKicker')}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {t('geoTitle')}
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-zb-ink/75">
                {t('geoBody')}
              </p>
              <p className="mt-5 max-w-xl font-semibold leading-relaxed text-zb-mint">
                {t('geoPunch')}
              </p>
            </div>
            <KhatimFigure
              steps={[t('geoStep1'), t('geoStep2'), t('geoStep3')]}
              alt={t('geoFigureAlt')}
            />
          </div>
        </div>
      </section>

      {/* ─── Three pillars ─── */}
      <section className="border-b border-zb-line">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
          <ul className="grid gap-10 md:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.title}>
                <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-zb-cream-2">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-gray-600 sm:px-6 md:flex-row md:items-center md:justify-between">
          <Logo size={16} />
          <p>{t('footer', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </main>
  )
}
