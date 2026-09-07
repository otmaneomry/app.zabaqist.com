'use client'

/**
 * One `## Auto-évaluation` line, rendered the way the chapters are.
 *
 * The items carry inline maths — "une équation de la forme $z^n = a$" — so
 * printing them as plain text leaks the dollar signs onto the page. That is
 * exactly what the revision plan did until this was shared: `SelfCheck` piped
 * items through remark-math and the plan did not, and the same sentence read
 * correctly on one page and as source code on the other.
 *
 * `dir` is the chapter's writing direction, not the interface's. The chapters
 * are authored in French and served on the Arabic route too, so an item is
 * Latin text inside an RTL page; with no direction of its own the bidi
 * algorithm moves the full stop to the left of the sentence.
 */

import React from 'react'
import Markdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

import 'katex/dist/katex.min.css'

export default function ItemText({
  text,
  dir,
  className,
}: {
  text: string
  dir: 'ltr' | 'rtl'
  className?: string
}) {
  return (
    <span dir={dir} className={className ?? 'block'}>
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
