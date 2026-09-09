/**
 * The shape of a chapter, as the server reads it off disk and hands it to the
 * dashboard.
 *
 * This lived in `components/home/ContinuePanel.tsx`. The panel was replaced by
 * the resume strip in the DataCamp pass and nothing rendered it afterwards, but
 * three live files still imported its type — so a dead 244-line component was
 * kept in the tree by two lines of `interface`. The type belongs with the data,
 * not with one of the components that happens to draw it.
 */

/** One `##` part of a chapter, as the course page's own tabs divide it. */
export interface ChapterTab {
  /** The first section of the part — where opening it lands. */
  id: string
  label: string
  kind: string
  /** Every section in the part, in order. */
  viewIds: string[]
}

/** Every chapter, keyed by slug. */
export type ChapterShape = Record<string, { tabs: ChapterTab[]; views: number }>
