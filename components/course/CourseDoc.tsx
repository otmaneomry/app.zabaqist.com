/**
 * Renders a pedagogue-authored chapter verbatim: markdown + KaTeX, with the
 * `> **Définition.**` blockquotes promoted to typed callouts so a theorem does
 * not look like an aside.
 *
 * Server component — KaTeX renders to HTML at build/request time, so no client
 * JS ships for the maths. Only the two interactive callouts (Reveal,
 * Checkpoint) are client components.
 */

import type { Components } from 'react-markdown'
import React from 'react'
import Markdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

import 'katex/dist/katex.min.css'

import Checkpoint from '@/components/course/Checkpoint'
import Reveal from '@/components/course/Reveal'
import GeogebraBlock from '@/components/math/GeogebraBlock'
import { parseSpec } from '@/lib/geogebraSpec'
import { slugifyHeading } from '@/lib/courseDoc'
import { checkpointKey } from '@/lib/courseProgress'

/**
 * Callout kinds the chapters actually use, most specific first.
 *
 * `behaviour` is what makes the page active rather than readable:
 *  - "reveal"     — a solution or proof, closed until the reader asks for it;
 *  - "checkpoint" — a question the pedagogue wrote, turned into a stop.
 * Everything else is static.
 */
const CALLOUTS: {
  match: RegExp
  label: string
  tone: keyof typeof TONES
  behaviour?: 'reveal' | 'checkpoint'
}[] = [
  { match: /^(théorème|theoreme)/i, label: 'théorème', tone: 'gold' },
  { match: /^(corollaire)/i, label: 'corollaire', tone: 'gold' },
  { match: /^(proposition)/i, label: 'proposition', tone: 'gold' },
  { match: /^(définition|definition)/i, label: 'définition', tone: 'teal' },
  {
    match: /^(preuve|démonstration)/i,
    label: 'preuve',
    tone: 'muted',
    behaviour: 'reveal',
  },
  {
    match: /^(solution)/i,
    label: 'solution',
    tone: 'muted',
    behaviour: 'reveal',
  },
  {
    match: /^(applications?)/i,
    label: 'application',
    tone: 'rose',
    behaviour: 'checkpoint',
  },
  { match: /^(exemples?)/i, label: 'exemple', tone: 'muted' },
  {
    match: /^(remarques?|interprétation)/i,
    label: 'remarque',
    tone: 'muted',
  },
]

const TONES = {
  gold: {
    box: 'border-zb-gold/35 bg-zb-gold-soft',
    label: 'text-zb-gold',
  },
  teal: {
    box: 'border-zb-mint/30 bg-zb-mint-soft',
    label: 'text-zb-mint-deep',
  },
  rose: {
    box: 'border-zb-rose/30 bg-zb-rose-soft',
    label: 'text-zb-rose',
  },
  muted: {
    box: 'border-gray-200 bg-gray-50',
    label: 'text-gray-500',
  },
} as const

/** Flatten a React subtree to plain text, for heading anchors and callout matching. */
function textOf(node: React.ReactNode): string {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textOf).join('')
  if (React.isValidElement(node))
    return textOf((node.props as { children?: React.ReactNode }).children)
  return ''
}

export default function CourseDoc({
  body,
  courseId,
  viewId,
  baseXp,
  tools,
  dir = 'ltr',
}: {
  body: string
  courseId: string
  viewId: string
  /** Writing direction of the authored markdown, not of the interface. */
  dir?: 'ltr' | 'rtl'
  /** Per-checkpoint XP before the hint penalty. */
  baseXp: number
  /** Named results stated in this view — feeds hint level 2. */
  tools: string[]
}) {
  // Hint level 3 only exists where the pedagogue wrote a solution to point at.
  const hasSolution = /^> \*\*(Solution|Preuve|Démonstration)/im.test(body)
  // Mirrors the loader's counter so TOC links and heading ids agree.
  const seen = new Map<string, number>()
  // Stable per-checkpoint key: position within this view. Stable across reloads
  // because the document is static.
  let checkpointIdx = 0
  let revealIdx = 0

  const components: Components = {
    h2: ({ children }) => (
      <h2
        id={slugifyHeading(textOf(children), seen)}
        className="mt-12 scroll-mt-24 border-b border-gray-200 pb-3 text-2xl font-bold tracking-tight first:mt-0 md:text-3xl"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={slugifyHeading(textOf(children), seen)}
        className="mt-10 scroll-mt-24 text-lg font-bold tracking-tight text-zb-mint-deep md:text-xl"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 font-mono text-sm uppercase tracking-wide text-zb-gold">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="mt-4 leading-relaxed text-gray-800">{children}</p>
    ),
    // The khatim is the bullet. One shape, used where it MEANS something —
    // "this is an item in a list" — and nowhere it doesn't. See the note on
    // `.zb-star-list` in app/globals.css.
    ul: ({ children }) => (
      <ul className="zb-star-list mt-4 space-y-2">{children}</ul>
    ),
    // `start` must be forwarded: the chapters write `1)` `2)` `3)` with a
    // paragraph between each, which markdown parses as separate one-item lists.
    // Dropping the attribute renumbered every exercise to "1".
    ol: ({ children, start }) => (
      <ol
        start={start}
        className="mt-4 space-y-2 ps-5 [&>li]:list-decimal [&>li]:marker:text-gray-400"
      >
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-zb-mint-deep underline underline-offset-2"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    hr: () => <hr className="my-10 border-gray-200" />,
    // Wide formula tables must scroll inside themselves, never the page.
    table: ({ children }) => (
      <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
    th: ({ children }) => (
      <th className="border-b border-gray-200 px-4 py-2.5 text-start font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-b border-gray-200 px-4 py-2.5 align-middle">
        {children}
      </td>
    ),
    // A ```geogebra fence is a figure, not code. Everything else stays code.
    code: ({ children, className }) => {
      if (/language-geogebra/.test(className ?? '')) {
        const spec = parseSpec(textOf(children))
        return spec ? <GeogebraBlock spec={spec} /> : null
      }
      return (
        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.9em]">
          {children}
        </code>
      )
    },
    // react-markdown wraps a fence in <pre>; the figure supplies its own frame.
    pre: ({ children }) => <>{children}</>,
    blockquote: ({ children }) => {
      const label = textOf(children).trim()
      const kind = CALLOUTS.find((c) => c.match.test(label))

      if (kind?.behaviour === 'reveal') {
        // Keyed by view AND by position. Without it React reconciles the
        // solution of one section onto the solution of the next, and an
        // already-opened `open` state travels with it: the reader arrives at a
        // new exercise with the answer showing. Same defect the checkpoints
        // had, in the component next door.
        return (
          <Reveal
            key={`${viewId}:reveal:${revealIdx++}`}
            kind={kind.label === 'preuve' ? 'preuve' : 'solution'}
          >
            {children}
          </Reveal>
        )
      }
      if (kind?.behaviour === 'checkpoint') {
        return (
          <Checkpoint
            storageKey={checkpointKey(courseId, viewId, checkpointIdx++)}
            baseXp={baseXp}
            tools={tools}
            hasSolution={hasSolution}
          >
            {children}
          </Checkpoint>
        )
      }

      const tone = TONES[kind?.tone ?? 'muted']
      return (
        <aside className={`mt-6 rounded-xl border px-5 py-4 ${tone.box}`}>
          {kind && (
            <p
              className={`mb-1 font-mono text-xs uppercase tracking-[0.14em] ${tone.label}`}
            >
              {kind.label}
            </p>
          )}
          <div className="[&>p:first-child]:mt-0">{children}</div>
        </aside>
      )
    },
  }

  return (
    <div dir={dir} className="course-doc max-w-[72ch] text-[15px] md:text-base">
      <Markdown
        remarkPlugins={[remarkGfm, remarkMath]}
        // output "html" instead of the default "htmlAndMathml": emitting both
        // duplicates every one of the ~2300 formulas in a chapter and pushes the
        // payload past what a phone will render. Screen readers still get the
        // TeX via KaTeX's own aria markup.
        rehypePlugins={[
          [rehypeKatex, { output: 'html', throwOnError: false, strict: false }],
        ]}
        components={components}
      >
        {body}
      </Markdown>
    </div>
  )
}
