'use client'

/**
 * The onboarding funnel.
 *
 * Structure adapted from Brilliant (BRILLIANT_WORKFLOW.md §1): chrome-free,
 * segmented progress with no counter, no skip link, and — critically — it asks
 * for no account. The rhythm alternates asking with giving, so the reader is
 * never asked twice in a row without being handed something first:
 *
 *     welcome → ask → GIVE → ask → ask → GIVE → ask → reveal
 *
 * The step lives in the URL (`?e=`) so the browser's back button works and a
 * half-finished funnel is resumable.
 */

import React, { useCallback, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import ChoiceGrid, { type Choice } from '@/components/onboarding/ChoiceGrid'
import ContinueButton from '@/components/onboarding/ContinueButton'
import OnboardingShell from '@/components/onboarding/OnboardingShell'
import PlanReveal from '@/components/onboarding/PlanReveal'
import Logo from '@/components/landing/Logo'
import ProblemPreview from '@/components/landing/ProblemPreview'
import Zellige from '@/components/landing/Zellige'
import MathContent from '@/components/math/MathContent'
import { useRouter as useLocaleRouter } from '@/i18n/navigation'
import {
  MOTIVATIONS,
  saveAnswers,
  STEPS,
  stepAt,
  type Motivation,
} from '@/lib/onboarding'
import {
  FILIERE_TRACKS,
  FILIERES,
  saveFiliere,
  type Filiere,
  type Track,
} from '@/lib/filiere'
import { chaptersOf } from '@/lib/programme'
import { listCourses } from '@/lib/courseCatalog'

/**
 * The hardest question, asked by recognition.
 *
 * A student cannot reliably self-assess "am I in Sciences Maths?", but they can
 * always recognise which of two exercises looks like their homework. Structures
 * algébriques only exists in SM; a limit study is the analysis core that
 * Sciences Exp lives on.
 */
const FILIERE_EXAMPLE: Record<Filiere, string> = {
  sm: '(G,*) \\text{ groupe} \\Rightarrow \\forall x,\\ x*x^{-1}=e',
  sx: '\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1',
}

export default function DemarrerPage() {
  const t = useTranslations('onboarding')
  const a = useTranslations('auth')
  const router = useRouter()
  const localeRouter = useLocaleRouter()
  const params = useSearchParams()

  const index = Math.min(
    Math.max(Number(params.get('e') ?? 0) || 0, 0),
    STEPS.length - 1,
  )
  const step = stepAt(index)

  const [motivation, setMotivation] = useState<Motivation | null>(null)
  const [filiere, setFiliere] = useState<Filiere | null>(null)
  const [track, setTrack] = useState<Track | null>(null)

  const go = useCallback(
    (i: number) => {
      const next = Math.min(Math.max(i, 0), STEPS.length - 1)
      router.push(`?e=${next}`, { scroll: false })
    },
    [router],
  )

  // Each answer is written as it is given, not batched at the end: a reader who
  // abandons at step 5 should not lose the four answers before it.
  const commitAndGo = useCallback(() => {
    if (step.id === 'motivation' && motivation) saveAnswers({ motivation })
    if (step.id === 'option' && track) {
      saveFiliere(track)
      saveAnswers({ track, filiere: filiere ?? undefined })
    }
    // The funnel counts as finished on leaving the last question, which is now
    // `programme`. This used to ride along with the daily goal; leaving it
    // there when that step came out would have meant `completedAt` was never
    // written and `hasOnboarded()` stayed false forever.
    if (step.id === 'programme')
      saveAnswers({ completedAt: new Date().toISOString() })
    go(index + 1)
  }, [step.id, motivation, track, filiere, go, index])

  /** Continue is disabled until the current question has an answer. */
  const answered =
    step.kind !== 'ask' ||
    (step.id === 'motivation' && !!motivation) ||
    (step.id === 'filiere' && !!filiere) ||
    (step.id === 'option' && !!track)

  const motivationChoices: Choice[] = useMemo(
    () =>
      MOTIVATIONS.map((m) => ({
        id: m,
        label: t(`motivation-${m}`),
        hint: t(`motivation-${m}-hint`),
      })),
    [t],
  )

  const filiereChoices: Choice[] = useMemo(
    () =>
      FILIERES.map((f) => ({
        id: f,
        label: a(`filiere-${f}`),
        meta: a(`filiereShort-${f}`),
        example: (
          <span dir="ltr" className="text-sm">
            <MathContent>{FILIERE_EXAMPLE[f]}</MathContent>
          </span>
        ),
      })),
    [a],
  )

  const optionChoices: Choice[] = useMemo(
    () =>
      (filiere ? FILIERE_TRACKS[filiere] : []).map((tr) => ({
        id: tr,
        label: a(`track-${tr}`),
      })),
    [a, filiere],
  )

  // The plan reveal owns the whole screen — no progress bar, no Continue.
  if (step.kind === 'reveal') {
    return (
      <PlanReveal
        filiere={filiere ?? 'sx'}
        onStart={(slug) => localeRouter.push(`/courses/${slug}`)}
      />
    )
  }

  return (
    <>
      <OnboardingShell
        step={step}
        backLabel={t('back')}
        onBack={index > 0 ? () => go(index - 1) : undefined}
      >
        {step.id === 'welcome' && (
          <div className="flex flex-col items-center text-center">
            <Logo size={30} />
            <h1 className="mt-10 text-3xl font-bold leading-tight sm:text-4xl">
              {t('welcomeTitle')}
            </h1>
            <p className="mt-4 max-w-md leading-relaxed text-gray-600">
              {t('welcomeBody')}
            </p>
          </div>
        )}

        {step.id === 'motivation' && (
          <>
            <h1 className="text-3xl font-bold leading-tight">
              {t('motivationTitle')}
            </h1>
            <ChoiceGrid
              choices={motivationChoices}
              value={motivation}
              onChange={(id) => setMotivation(id as Motivation)}
            />
          </>
        )}

        {/* GIVE — the interactive claim, proved rather than asserted. */}
        {step.id === 'apercu' && (
          <>
            <h1 className="text-3xl font-bold leading-tight">
              {t('apercuTitle')}
            </h1>
            <p className="mt-3 leading-relaxed text-gray-600">
              {t('apercuBody')}
            </p>
            <div className="mt-6">
              <ProblemPreview />
            </div>
          </>
        )}

        {step.id === 'filiere' && (
          <>
            <h1 className="text-3xl font-bold leading-tight">
              {t('filiereTitle')}
            </h1>
            <p className="mt-3 leading-relaxed text-gray-600">
              {t('filiereBody')}
            </p>
            <ChoiceGrid
              choices={filiereChoices}
              value={filiere}
              onChange={(id) => {
                setFiliere(id as Filiere)
                setTrack(null)
              }}
            />
          </>
        )}

        {step.id === 'option' && (
          <>
            <h1 className="text-3xl font-bold leading-tight">
              {t('optionTitle')}
            </h1>
            <ChoiceGrid
              choices={optionChoices}
              value={track}
              onChange={(id) => setTrack(id as Track)}
            />
          </>
        )}

        {/* GIVE — the authority claim. */}
        {step.id === 'programme' && (
          <div className="relative overflow-hidden rounded-2xl border border-zb-line bg-white p-8">
            <Zellige id="zellige-onboarding" density={72} opacity={0.05} />
            <div className="relative">
              <h1 className="text-3xl font-bold leading-tight">
                {t('programmeTitle')}
              </h1>
              <p className="mt-3 leading-relaxed text-gray-600">
                {t('programmeBody')}
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  // Real counts, re-derived from the chapters themselves and
                  // checked against them in scripts/test-course.mjs. They used
                  // to be `chapters × 33` and `chapters × 16`, which sat
                  // directly under a paragraph promising "rien d'inventé" and
                  // overstated the section count by about eighty percent.
                  [chaptersOf(filiere ?? 'sx').length, t('programmeStat1')],
                  [
                    listCourses(filiere ?? 'sx').reduce(
                      (n, c) => n + c.sections,
                      0,
                    ),
                    t('programmeStat2'),
                  ],
                  [
                    listCourses(filiere ?? 'sx').reduce(
                      (n, c) => n + c.exercises,
                      0,
                    ),
                    t('programmeStat3'),
                  ],
                ].map(([n, label]) => (
                  <div key={String(label)}>
                    <dt className="sr-only">{label}</dt>
                    <dd>
                      <span
                        dir="ltr"
                        className="block text-3xl font-bold text-zb-mint"
                      >
                        {n}
                      </span>
                      <span className="mt-1 block text-xs text-gray-500">
                        {label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        )}

      </OnboardingShell>

      <ContinueButton
        label={t('continue')}
        disabled={!answered}
        onClick={commitAndGo}
      />
    </>
  )
}
