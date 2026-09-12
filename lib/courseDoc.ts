/**
 * Markdown-backed course loader.
 *
 * Until now every course was a hand-written React page (see
 * `app/courses/fonctions-logarithmiques/page.tsx`, 684 lines of JSX). This
 * module makes a course a *document*: the pedagogue's markdown under
 * `content/course/` is the source of truth and is rendered verbatim.
 *
 * Only three things are derived here:
 *   1. the slug -> file map (`COURSE_CATALOG`),
 *   2. the heading outline used for the table of contents,
 *   3. the pagination into "views" — a whole chapter is ~15 MB of rendered
 *      KaTeX, which is unusable on the phones that are most of this audience.
 *
 * Server-only: it reads from the filesystem.
 */

import { readFile } from 'node:fs/promises'
import path from 'node:path'

import type { CourseMeta } from './courseCatalog.ts'

// The catalog lives in its own module so client components can read it —
// this file touches the filesystem and cannot cross that boundary.
export * from './courseCatalog.ts'

import { courseBySlug } from './courseCatalog.ts'

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface Section {
  /** Heading depth: 2 for `##`, 3 for `###`. */
  level: 2 | 3
  title: string
  id: string
}

/**
 * What kind of activity a section is. Reading, a guided problem, a short drill
 * and a recap are not the same work and should not cost the same, so each is
 * typed and priced.
 */
export type ViewKind = 'cours' | 'methode' | 'exercices' | 'devoir' | 'bilan'

/** Points awarded for completing a section. */
export const XP_BY_KIND: Record<ViewKind, number> = {
  cours: 5,
  methode: 20,
  exercices: 10,
  devoir: 50,
  bilan: 5,
}

export const KIND_LABEL: Record<ViewKind, string> = {
  cours: 'Cours',
  methode: 'Méthode',
  exercices: 'Exercices',
  devoir: 'Devoir',
  bilan: 'Bilan',
}

/** One pageful of the chapter: a `##` section, or a run of short ones. */
export interface View {
  id: string
  /**
   * The `##` heading this view was cut out of, when it was.
   *
   * Set only by `splitHeavyView`. A view that merely merged several short `##`
   * sections has several `titles` and NO parent — without this flag the two
   * cases are indistinguishable, and the front matter rendered in the table of
   * contents as "Histoire" with the other three as its children.
   */
  parent?: string
  /** The headings this view covers, in order. */
  titles: string[]
  body: string
  kind: ViewKind
  xp: number
  /** Questions the reader is asked to commit to (the `Application.` callouts). */
  checkpoints: number
  /**
   * Named results stated in this view — the tools a student may reach for when
   * stuck. Feeds hint level 2.
   */
  tools: string[]
}

export interface CourseDocument {
  meta: CourseMeta
  /** The `# …` title line from the markdown. */
  title: string
  /** Everything after the title line, normalized. */
  body: string
  /** `##` and `###` headings, in document order. */
  outline: Section[]
  /** The chapter paginated by section. */
  views: View[]
  /**
   * The `## Auto-évaluation` items — what the pedagogue says a student should
   * be able to DO after this chapter.
   *
   * These are capability statements ("Calculer une limite en utilisant les
   * opérations…"), not multiple-choice questions, and that is exactly why the
   * chapter self-assessment at `/quiz/<slug>` is built on them: they are real,
   * authored, and specific to the chapter. Generating quiz questions and
   * declaring answers correct would mean inventing mathematics, which is the
   * one thing this codebase must not do to someone sitting the Bac.
   */
  checklist: string[]
}

/* ------------------------------------------------------------------ */
/* Anchors                                                             */
/* ------------------------------------------------------------------ */

/** Stable, collision-free anchor for a heading. */
export function slugifyHeading(text: string, seen?: Map<string, number>) {
  const base =
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'section'
  if (!seen) return base
  const n = seen.get(base) ?? 0
  seen.set(base, n + 1)
  return n === 0 ? base : `${base}-${n + 1}`
}

/* ------------------------------------------------------------------ */
/* Normalizers                                                         */
/* ------------------------------------------------------------------ */

/**
 * The chapters write display equations as a single line `$$…$$`. remark-math
 * only treats `$$` as *display* math when the delimiters sit on their own
 * lines — otherwise every one of the 2000+ formulas renders inline and cramped,
 * which is not what the pedagogue wrote. Split those lines onto three.
 *
 * Only a line that is ENTIRELY one formula is touched: a line mixing prose and
 * maths, or carrying two `$$…$$` pairs, stays inline on purpose.
 */
export function normalizeDisplayMath(md: string): string {
  // The optional `> ` is the whole point of the first group. Sixteen of the
  // logarithm chapter's boxed identities are authored inside a blockquote, and
  // a pattern anchored without it left every one of them as a remark-math
  // `inlineMath` node — ln(ab) = ln a + ln b, set in running text.
  const whole = /^([ \t]*(?:> ?)*)\$\$((?:(?!\$\$)[\s\S])+?)\$\$[ \t]*$/
  let inFence = false
  return md
    .split('\n')
    .map((line) => {
      if (line.startsWith('```')) inFence = !inFence
      if (inFence) return line
      const m = whole.exec(line)
      if (!m?.[2]) return line
      // Carry the prefix onto all three lines: `> $$` / `> body` / `> $$` is
      // one blockquote holding one display formula, which is what was meant.
      const quote = m[1]
      return `${quote}$$\n${quote}${m[2].trim()}\n${quote}$$`
    })
    .join('\n')
}

/**
 * A `> **Solution.**` marker is a ONE-LINE blockquote in these chapters: the
 * worked solution that follows is plain paragraphs. Rendered as-is, the
 * "Afficher" gate would wrap only the word "Solution" and print the answer
 * underneath it anyway.
 *
 * Absorb the block that follows a callout marker into its blockquote, so the
 * gate actually contains what it is gating. Runs AFTER `normalizeDisplayMath`,
 * because that one only matches at the start of a line and these lines gain a
 * `> ` prefix here.
 *
 * Stops at the next heading, the next `> **` marker, or a horizontal rule.
 */
export function groupCallouts(md: string): string {
  // Every callout marker, not just the interactive ones. `Proposition` and
  // `Définition` carry their statement on the next line (markdown's lazy
  // continuation keeps it inside the quote), but `Exemple.` and `Remarque.` are
  // followed by a BLANK line, which closes the blockquote — so their boxes
  // would render empty with the body spilling out underneath.
  const opens = /^> \*\*[A-Za-zÀ-ÿ]/
  const stops = /^(#{1,6} |> \*\*|---\s*$)/

  const out: string[] = []
  const lines = md.split('\n')
  let inFence = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? ''
    if (line.startsWith('```')) inFence = !inFence
    out.push(line)
    if (inFence || !opens.test(line)) continue

    // Absorb the marker's body, keeping blank lines as bare `>` so the
    // blockquote does not terminate early.
    for (let j = i + 1; j < lines.length; j++) {
      const next = lines[j] ?? ''
      if (stops.test(next)) break
      out.push(next.trim() === '' ? '>' : `> ${next}`)
      i = j
    }
    // Trailing bare `>` lines add an empty paragraph inside the callout.
    while (out.length && out[out.length - 1] === '>') out.pop()
    // Two `>` blocks with no blank line between them are ONE blockquote in
    // markdown, so without this separator every callout in a section would fuse
    // into the first one.
    out.push('')
  }
  return out.join('\n')
}

/**
 * The chapters were extracted from a PDF, so a sentence is often split across
 * two paragraphs at the point where the original had a line break:
 *
 *     signifie que la courbe $\mathcal{C}_f$ est
 *
 *     discontinue au point $M_0(x_0, f(x_0))$
 *
 * Rendered faithfully that is two paragraphs and reads as broken text. Rejoin a
 * pair only when the first line clearly does not end a sentence and the second
 * clearly does not start one — anything structural (heading, list, quote,
 * table, maths delimiter) is left alone.
 */
export function mendParagraphs(md: string): string {
  const structural = /^\s*(#{1,6} |> |[-*+] |\d+[.)] |\||\$\$|```|---)/
  const unfinished = /[a-zà-ÿ,;:(]$/
  const continues = /^[a-zà-ÿ(]/

  const lines = md.split('\n')
  const out: string[] = []
  let inFence = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? ''
    if (line.startsWith('```')) inFence = !inFence
    const next = lines[i + 2]
    if (
      !inFence &&
      lines[i + 1] === '' &&
      next !== undefined &&
      line.trim() !== '' &&
      next.trim() !== '' &&
      !structural.test(line) &&
      !structural.test(next) &&
      unfinished.test(line.trim()) &&
      continues.test(next.trim())
    ) {
      out.push(`${line.trim()} ${next.trim()}`)
      i += 2
      continue
    }
    out.push(line)
  }
  return out.join('\n')
}

/* ------------------------------------------------------------------ */
/* Loader                                                              */
/* ------------------------------------------------------------------ */

export async function loadCourseDoc(
  slug: string,
): Promise<CourseDocument | null> {
  const meta = courseBySlug(slug)
  if (!meta) return null

  const abs = path.join(process.cwd(), 'content', 'course', meta.file)
  let raw: string
  try {
    raw = await readFile(abs, 'utf8')
  } catch {
    return null
  }

  const lines = raw.split('\n')
  const titleIdx = lines.findIndex((l) => l.startsWith('# '))
  const title = lines[titleIdx]?.slice(2).trim() ?? meta.title
  // Order matters: mend prose first (it matches on bare lines), then promote
  // display maths (line-start match), then absorb callout bodies (adds `> `).
  const body = groupCallouts(
    normalizeDisplayMath(
      mendParagraphs(titleIdx >= 0 ? lines.slice(titleIdx + 1).join('\n') : raw),
    ),
  )

  // Outline. Fences are skipped so a `##` inside a code block never becomes a
  // heading, and the counter mirrors the renderer's so anchors line up.
  const seen = new Map<string, number>()
  const outline: Section[] = []
  let inFence = false
  for (const line of body.split('\n')) {
    if (line.startsWith('```')) inFence = !inFence
    if (inFence) continue
    const m = /^(#{2,3}) (.+)$/.exec(line)
    if (!m) continue
    const text = m[2]?.trim() ?? ''
    outline.push({
      level: (m[1]?.length ?? 2) as 2 | 3,
      title: text,
      id: slugifyHeading(text, seen),
    })
  }

  return {
    meta,
    title,
    body,
    outline,
    views: splitIntoViews(body),
    checklist: checklistOf(body),
  }
}

/**
 * The bullet list under `## Auto-évaluation`.
 *
 * Stops at the next `##`, so a chapter that ends on the section still reads
 * cleanly. Returns `[]` for a chapter that has none — one does, and the page
 * says so rather than inventing items to fill the space.
 */
function checklistOf(body: string): string[] {
  const out: string[] = []
  let inside = false
  for (const line of body.split('\n')) {
    if (/^## /.test(line)) {
      inside = /^## auto-évaluation/i.test(line)
      continue
    }
    if (!inside) continue
    const m = /^[-*] +(.+)$/.exec(line.trim())
    if (m?.[1]) out.push(m[1].trim())
  }
  return out
}

/* ------------------------------------------------------------------ */
/* Tabs                                                                */
/* ------------------------------------------------------------------ */

/**
 * One tab of the course page — a `##` section of the chapter, with the sections
 * it was paginated into.
 *
 * The tabbed layout is the app's existing course shape (see
 * `app/courses/fonctions-logarithmiques/page.tsx`). Here the tabs are not
 * hand-written: they ARE the chapter's own top-level plan.
 */
export interface CourseTab {
  id: string
  label: string
  kind: ViewKind
  viewIds: string[]
}

/**
 * Short tab labels for the headings the chapters actually use.
 *
 * The chapters were authored over months and do not name their sections
 * identically — "Objectifs" vs "Capacités attendues", "Devoirs et synthèse" vs
 * "Problèmes de synthèse", "Activités préparatoires" vs "Activité
 * d'introduction". Those are the same tab to a reader, so they get the same
 * label; `tabsOf` then folds consecutive same-label runs into one tab, which is
 * also what pulls "Auto-évaluation" back under "Résumé" where it belongs.
 */
const TAB_LABEL: [RegExp, string][] = [
  [/^histoire|^objectifs|^capacités attendues/i, 'Introduction'],
  [/^activités?\b/i, 'Activités'],
  [/^devoirs?|^problèmes? de synthèse/i, 'Devoir'],
  [/^résumé|^resume|^auto-évaluation/i, 'Résumé'],
]

const tabLabel = (raw: string) =>
  TAB_LABEL.find(([re]) => re.test(raw))?.[1] ?? raw

/** Group the paginated sections back into the chapter's `##` plan. */
export function tabsOf(views: View[]): CourseTab[] {
  const tabs: CourseTab[] = []
  const seen = new Map<string, number>()
  for (const v of views) {
    // A view with no parent is a `##` of its own (or a merged run of short
    // ones); one with a parent belongs to the `##` it was cut out of.
    const raw = v.parent ?? v.titles[0] ?? 'Section'
    const last = tabs[tabs.length - 1]
    if (last && last.label === tabLabel(raw)) {
      last.viewIds.push(v.id)
      continue
    }
    tabs.push({
      id: slugifyHeading(tabLabel(raw), seen),
      label: tabLabel(raw),
      kind: v.kind,
      viewIds: [v.id],
    })
  }
  return tabs
}

/** Full breadcrumb for a section: the `##` it came from, then its headings. */
/**
 * A view's XP, split between the checkpoints that can earn it.
 *
 * `chapterTotals` credited the WHOLE view to every checkpoint in it, and
 * `xpFor` adds 20% for solving without a hint: the four checkpoints in the
 * logarithm chapter's ten-XP exercises view paid 48. The chapter card
 * advertises the sum of the view XP, and the completion celebration pays that
 * sum, so a running total above it makes the two disagree.
 */
export const checkpointXp = (view: Pick<View, 'xp' | 'checkpoints'>): number =>
  view.checkpoints > 1 ? view.xp / view.checkpoints : view.xp

export const viewLabel = (view: Pick<View, 'parent' | 'titles'>): string =>
  [view.parent, ...view.titles].filter(Boolean).join(' · ') || 'Section'

/* ------------------------------------------------------------------ */
/* Pagination                                                          */
/* ------------------------------------------------------------------ */

/** Which activity a section is, from the heading the pedagogue gave it. */
function kindOf(parent: string | undefined, titles: string[]): ViewKind {
  // For a split view the `##` it came from is what names the activity:
  // "Exercices" / "1. Limite d'une fonction…" is a drill, not a lesson.
  const head = (parent ?? titles[0] ?? '').toLowerCase()
  if (/devoir|synth/.test(head)) return 'devoir'
  if (head.includes('exercice') || head.includes('problème')) return 'exercices'
  if (/méthode|methode/.test(head)) return 'methode'
  if (/résumé|resume|auto-évaluation|auto-evaluation|bilan/.test(head))
    return 'bilan'
  return 'cours'
}

/** Named results stated in a view: `> **Théorème des valeurs intermédiaires.**` */
function toolsIn(body: string): string[] {
  const out = new Set<string>()
  const re =
    /^> \*\*((?:Théorème|Theoreme|Proposition|Corollaire|Définition|Definition)[^*]*)\*\*/gim
  let m
  while ((m = re.exec(body))) {
    const name = (m[1] ?? '').replace(/[.\s]+$/, '').trim()
    if (name) out.add(name)
  }
  return [...out].slice(0, 6)
}

function annotate(
  v: Omit<View, 'kind' | 'xp' | 'checkpoints' | 'tools'>,
): View {
  const kind = kindOf(v.parent, v.titles)
  const checkpoints = (v.body.match(/^> \*\*Applications?\b/gim) ?? []).length
  return {
    ...v,
    kind,
    xp: XP_BY_KIND[kind],
    checkpoints,
    tools: toolsIn(v.body),
  }
}

const formulaCount = (md: string) => (md.match(/\$/g)?.length ?? 0) / 2

/** Short enough to share a page with its neighbour. */
const isLight = (md: string) =>
  md.split('\n').length <= 60 && formulaCount(md) <= 40

/**
 * Paginate the chapter by its own `##` sections.
 *
 * Splitting changes nothing about the content: every view is a verbatim run of
 * the document. Three passes:
 *   1. cut strictly at each `##`;
 *   2. merge *runs of consecutive short* sections, so Histoire / Objectifs /
 *      Plan / Prérequis open together as the chapter's front matter rather than
 *      as four near-empty pages;
 *   3. cut any still-heavy section at its `###`, carrying the parent heading.
 */
function splitIntoViews(body: string): View[] {
  const seen = new Map<string, number>()
  const sections: View[] = []
  let inFence = false
  let cur: { id: string; titles: string[]; lines: string[] } | null = null

  for (const line of body.split('\n')) {
    if (line.startsWith('```')) inFence = !inFence
    const m = inFence ? null : /^## (.+)$/.exec(line)
    if (m) {
      if (cur)
        sections.push(
          annotate({
            id: cur.id,
            titles: cur.titles,
            body: cur.lines.join('\n'),
          }),
        )
      const title = m[1]?.trim() ?? ''
      cur = { id: slugifyHeading(title, seen), titles: [title], lines: [line] }
      continue
    }
    if (cur) cur.lines.push(line)
    else cur = { id: 'intro', titles: [], lines: [line] }
  }
  if (cur)
    sections.push(
      annotate({ id: cur.id, titles: cur.titles, body: cur.lines.join('\n') }),
    )

  const merged: View[] = []
  for (const sec of sections) {
    const last = merged[merged.length - 1]
    // Same KIND only. The merge exists so Histoire / Objectifs / Plan open as
    // one front-matter page instead of four near-empty ones — but fusing
    // `## Exercices` into `## Graphique` because both happen to be short loses
    // a tab, and the tabs are the chapter's own plan.
    if (last && last.kind === sec.kind && isLight(last.body) && isLight(sec.body)) {
      last.titles.push(...sec.titles)
      last.body = `${last.body}\n${sec.body}`
      continue
    }
    merged.push(annotate({ ...sec, titles: [...sec.titles] }))
  }

  return merged
    .map((v) => annotate(v))
    .flatMap(splitHeavyView)
    .filter((v) => v.body.trim().length > 0)
}

/**
 * `Cours` and `Exercices` are megabytes of rendered KaTeX on their own, so
 * split those by `###` too, carrying the parent `##` heading into each part for
 * context. Under the threshold a view is returned untouched.
 */
function splitHeavyView(view: View): View[] {
  const MAX_FORMULAS = 200
  if (formulaCount(view.body) <= MAX_FORMULAS) return [view]

  const parent = view.titles[view.titles.length - 1] ?? ''
  const head: string[] = []
  const parts: { title: string; lines: string[] }[] = []
  let inFence = false
  let cur: { title: string; lines: string[] } | null = null

  for (const line of view.body.split('\n')) {
    if (line.startsWith('```')) inFence = !inFence
    const m = inFence ? null : /^### (.+)$/.exec(line)
    if (m) {
      if (cur) parts.push(cur)
      cur = { title: m[1]?.trim() ?? '', lines: [line] }
      continue
    }
    if (cur) cur.lines.push(line)
    else head.push(line)
  }
  if (cur) parts.push(cur)
  if (parts.length < 2) return [view]

  // The first part keeps whatever sat between the `##` and the first `###`.
  const bodies = parts.map((part, i) =>
    (i === 0 ? [...head, ...part.lines] : part.lines).join('\n'),
  )

  // Same merge as the `##` pass: `Activités préparatoires` is a dozen
  // three-paragraph `###` blocks, and a dozen near-empty pages is worse
  // navigation than three real ones.
  const chunks: { titles: string[]; body: string }[] = []
  for (let i = 0; i < parts.length; i++) {
    const title = parts[i]?.title ?? ''
    const body = bodies[i] ?? ''
    const last = chunks[chunks.length - 1]
    if (last && isLight(last.body) && isLight(body)) {
      last.titles.push(title)
      last.body = `${last.body}\n${body}`
      continue
    }
    chunks.push({ titles: [title], body })
  }

  const seen = new Map<string, number>()
  return chunks.map((chunk) =>
    annotate({
      id: `${view.id}-${slugifyHeading(chunk.titles[0] ?? '', seen)}`,
      parent,
      titles: chunk.titles,
      body: chunk.body,
    }),
  )
}
