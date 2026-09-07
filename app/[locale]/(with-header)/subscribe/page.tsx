/**
 * What Premium will be, said honestly.
 *
 * The page this replaces was the last of the Brilliant scaffolding, and it was
 * the most dangerous thing in the repository, because everything on it was
 * presented as fact:
 *
 *  · a testimonial reading "Excellent" attributed to the Ministère de
 *    l'Éducation — a real government body that has endorsed nothing;
 *  · "Plus de 10,000 avis 5 étoiles", for a product in closed beta whose
 *    allow-list holds two addresses;
 *  · a second testimonial from "Parents & Étudiants", equally invented;
 *  · a video and two illustrations hotlinked from brilliant.org's own servers;
 *  · a chapter list that was not the programme — "Développements limités" is
 *    not in it — under tabs (Géométrie, Statistiques) that filtered nothing;
 *  · "S'abonner maintenant" on a button with no handler, next to prices, with
 *    no payment integration anywhere in the codebase.
 *
 * None of that is fixed by translating it into Arabic, which is what the open
 * i18n finding asked for. So: the invented social proof is gone, the borrowed
 * assets are gone, the chapter list is read from the catalogue, and the button
 * goes to the waitlist because the waitlist is what actually exists.
 *
 * The prices are the ones that were already here — they are the team's numbers,
 * not mine to invent or to delete — but they are now labelled as the tariffs
 * announced for launch, which is what they are while the beta is free.
 */

import React from 'react'
import { getTranslations } from 'next-intl/server'

import CourseCover from '@/components/course/CourseCover'
import PlanPicker, { type Plan } from '@/components/premium/PlanPicker'
import {
  branchLabel,
  courseTitle,
  listByBranch,
  type ContentLocale,
} from '@/lib/courseCatalog'
import { loadCourseDoc } from '@/lib/courseDoc'

/** The marketing site's form, the same one an uninvited account is sent to. */
const WAITLIST = 'https://www.zabaqist.com/#waitlist'

/**
 * One place, so the toggle, the note and the per-month equivalent cannot
 * disagree. Each plan states the period its price covers: with both labelled
 * "/mois" the yearly plan read as 399 DH a month next to a monthly plan at 60.
 */
const PLANS: Plan[] = [
  { id: 'annual', price: 399, was: 499, period: 'year' },
  { id: 'monthly', price: 60, period: 'month' },
]

const FEATURES = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'] as const

export async function generateMetadata() {
  const t = await getTranslations('premium')
  return { title: t('title'), description: t('metaDescription') }
}

export default async function SubscribePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations('premium')
  const l = locale as ContentLocale

  // The programme as written, not a list typed into this page. The old one
  // named chapters that do not exist and omitted ones that do.
  const groups = listByBranch()
  const chapters = groups.reduce((n, g) => n + g.courses.length, 0)

  // Every capability the self-assessments ask about, counted rather than
  // claimed — the same figure the revision plan shows.
  const docs = await Promise.all(
    groups.flatMap((g) => g.courses).map((c) => loadCourseDoc(c.slug)),
  )
  const items = docs.reduce((n, d) => n + (d?.checklist.length ?? 0), 0)

  return (
    <main className="pb-20">
      <section className="border-b border-zb-line bg-zb-cream-2">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_26rem] lg:items-start">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-gold-deep">
              {t('eyebrow')}
            </p>
            <h1 className="mt-3 text-balance font-display text-[34px] font-bold leading-tight tracking-tight text-zb-ink sm:text-[42px]">
              {t('heroTitle')}
            </h1>
            <p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-zb-ink-2">
              {t('heroBody', { chapters })}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold tracking-tight text-zb-ink">
              {t('plansTitle')}
            </h2>
            <p className="mb-4 mt-1.5 text-sm leading-relaxed text-zb-ink-2">
              {t('plansBody')}
            </p>
            <PlanPicker plans={PLANS} waitlist={WAITLIST} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-zb-ink">
          {t('includedTitle')}
        </h2>
        {/* Each of these is something the app already does; nothing here is a
            promise that no code backs. */}
        <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <li key={f}>
              <h3 className="font-display text-base font-bold tracking-tight text-zb-ink">
                {t(f)}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zb-ink-2">
                {t(`${f}Body`, { chapters, items })}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-zb-line bg-zb-cream-2">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_20rem] lg:items-start">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-zb-ink">
              {t('programmeTitle')}
            </h2>
            <p className="mt-2 max-w-[62ch] leading-relaxed text-zb-ink-2">
              {t('programmeBody')}
            </p>

            {groups.map(({ branch, courses }) => (
              <div key={branch} className="mt-7">
                <h3 className="flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-zb-mint-deep">
                  {branchLabel(branch, l)}
                  <span className="h-px flex-1 bg-zb-line" />
                  <span className="font-medium normal-case tracking-normal text-zb-ink-3">
                    {t('branchCount', { n: courses.length })}
                  </span>
                </h3>
                <ul className="mt-3 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
                  {courses.map((c) => (
                    <li key={c.slug} className="text-[15px] text-zb-ink-2">
                      {courseTitle(c, l)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Our own artwork. The page used to embed brilliant.org's. */}
          <CourseCover seed="premium" tone="algebre" className="hidden lg:block" />
        </div>
      </section>
    </main>
  )
}
