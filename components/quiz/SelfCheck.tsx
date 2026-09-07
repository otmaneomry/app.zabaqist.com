'use client'

/**
 * The chapter's own `## Auto-évaluation`, one item at a time.
 *
 * This replaces three hardcoded mock quizzes — "Algèbre · Niveau 1",
 * "Introduction aux équations du premier degré" — which were collège-level,
 * unrelated to any of the thirteen chapters, and answered against
 * `lib/mockApi.ts`. Every chapter has one of these now, and every item is the
 * pedagogue's own sentence.
 *
 * Nothing is marked. That is the same rule the checkpoints follow: the reader
 * judges their own work, and the three verdicts are the same three words.
 * Auto-grading would mean generating maths questions and declaring answers
 * correct, and a wrong "correct answer" teaches a falsehood to someone sitting
 * the Bac.
 *
 * The result is not a score out of ten. It is a list of what to go back to,
 * with the chapter one tap away — the only output a self-assessment can
 * honestly produce.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import Markdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

import 'katex/dist/katex.min.css'

import { Link } from '@/i18n/navigation'
import {
  clearSelfCheck,
  readSelfCheck,
  writeSelfCheck,
  type Verdict,
} from '@/lib/selfCheck'

const CHOICES: { id: Verdict; key: 'got' | 'close' | 'notYet'; tone: string }[] = [
  { id: 'got', key: 'got', tone: 'border-zb-mint bg-zb-mint-tint text-zb-mint-deep' },
  { id: 'close', key: 'close', tone: 'border-zb-gold bg-zb-gold-soft text-zb-gold-deep' },
  { id: 'not-yet', key: 'notYet', tone: 'border-zb-rose/40 bg-zb-rose-soft text-zb-rose-deep' },
]

/**
 * Items carry inline maths, so they render through the same pipeline as the
 * chapters — and under the same direction rule.
 *
 * The chapters are authored in French and served on the Arabic route too, so
 * an item is Latin text sitting inside an RTL page. With no direction of its
 * own the bidi algorithm moves the full stop to the left of the sentence,
 * which is how `.complexe et savoir passer de l'une à l'autre` reached the
 * screen. `contentDir` is the same field `CourseDoc` already reads, so a
 * chapter authored in Arabic later flips both together.
 */
function Item({ text, dir }: { text: string; dir: 'ltr' | 'rtl' }) {
  return (
    <span dir={dir} className="block">
      <Markdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[[rehypeKatex, { output: 'html', throwOnError: false }]]}
        components={{ p: ({ children }) => <>{children}</> }}
      >
        {text}
      </Markdown>
    </span>
  )
}

export default function SelfCheck({
  slug,
  chapter,
  items,
  contentDir,
}: {
  slug: string
  chapter: string
  items: string[]
  /** Writing direction of the authored chapter, not of the interface. */
  contentDir: 'ltr' | 'rtl'
}) {
  const t = useTranslations('selfcheck')
  const [answers, setAnswers] = useState<Record<string, Verdict>>({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setAnswers(readSelfCheck(slug))
    setReady(true)
  }, [slug])

  const answer = useCallback(
    (i: number, v: Verdict) => {
      writeSelfCheck(slug, i, v)
      setAnswers((a) => ({ ...a, [i]: v }))
    },
    [slug],
  )

  const reset = useCallback(() => {
    clearSelfCheck(slug)
    setAnswers({})
  }, [slug])

  const answered = items.filter((_, i) => answers[i]).length
  const shaky = items.filter((_, i) => answers[i] && answers[i] !== 'got')
  const complete = answered === items.length && items.length > 0

  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-10 sm:px-6">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zb-gold-deep">
        {chapter}
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-zb-ink">
        {t('title')}
      </h1>
      <p className="mt-3 leading-relaxed text-zb-ink-2">
        {t('subN', { n: items.length })}
      </p>

      {/* Progress, not a score: it counts answers given, not answers right. */}
      <div className="mt-6 flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zb-cream-3">
          <div
            className="h-full rounded-full bg-zb-mint transition-[width] duration-300 motion-reduce:transition-none"
            style={{ width: `${items.length ? (answered / items.length) * 100 : 0}%` }}
          />
        </div>
        <span dir="ltr" className="font-mono text-xs tabular-nums text-zb-ink-3">
          {t('progress', { answered, total: items.length })}
        </span>
      </div>

      <ol className="mt-8 space-y-5">
        {items.map((text, i) => {
          const chosen = answers[i]
          return (
            <li
              key={i}
              className="rounded-2xl border border-zb-line bg-white p-5 shadow-[var(--zb-shadow-sm)]"
            >
              <p className="text-[15px] leading-relaxed text-zb-ink">
                <Item text={text} dir={contentDir} />
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {CHOICES.map((c) => {
                  const on = chosen === c.id
                  return (
                    <button
                      key={c.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => answer(i, c.id)}
                      className={`h-9 rounded-full border-2 px-4 text-sm font-semibold transition-colors ${
                        on
                          ? c.tone
                          : 'border-zb-line text-zb-ink-2 hover:border-zb-mint/40 hover:text-zb-ink'
                      }`}
                    >
                      {t(c.key)}
                    </button>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ol>

      {/* The result appears only once every item has an answer — a partial
          verdict would be read as a score, and this is not one. */}
      {ready && complete && (
        <section className="mt-8 rounded-2xl border border-zb-line bg-zb-cream-2 p-6">
          <h2 className="font-display text-xl font-bold tracking-tight text-zb-ink">
            {t('resultTitle')}
          </h2>
          <p className="mt-2 leading-relaxed text-zb-ink-2">
            {shaky.length === 0
              ? t('resultAllGood', { n: items.length })
              : t('resultSome', { n: shaky.length })}
          </p>

          {shaky.length > 0 && (
            <ul className="zb-star-list mt-4 space-y-2 text-sm text-zb-ink">
              {shaky.map((text) => (
                <li key={text}>
                  <Item text={text} dir={contentDir} />
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/courses/${slug}`}
              className="inline-flex h-11 items-center justify-center rounded-full bg-zb-mint px-6 text-sm font-semibold text-white no-underline shadow-[0_3px_0_0_var(--zb-mint-deep),var(--zb-shadow-sm)] transition-colors hover:bg-zb-mint-deep"
            >
              {t('backToChapter')}
            </Link>
            <button
              type="button"
              onClick={reset}
              className="inline-flex h-11 items-center justify-center rounded-full border border-zb-line bg-white px-6 text-sm font-semibold text-zb-ink-2 transition-colors hover:text-zb-ink"
            >
              {t('restart')}
            </button>
          </div>
        </section>
      )}
    </div>
  )
}
