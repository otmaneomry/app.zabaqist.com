/**
 * The course catalog — which chapters exist, and how they present.
 *
 * Split out of `lib/courseDoc.ts` so the client can import it: that module
 * reads the filesystem, so pulling it into a client component would break the
 * bundle. This one is plain data and safe on both sides.
 */

import type { Filiere } from './filiere.ts'

export interface CourseMeta {
  /** URL segment: /courses/<slug> */
  slug: string
  /** Filename under `content/course/`. */
  file: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  /** Niveau / filière badge shown in the hero. */
  level: string
  levelAr: string
  /** Card art on the home page and the catalog. */
  image: string
  /** Semester in the Moroccan 2ème Bac programme. */
  semester: 1 | 2
  /** Ordering in the catalog listing. */
  n: number
  /**
   * The filières whose programme contains this chapter.
   *
   * Analysis is shared; the algebra half is not. A student in SVT has no reason
   * to be shown "Structures algébriques", and one in SM has every reason to be
   * shown it — this is what makes the filière choice mean something.
   */
  filieres: Filiere[]
  /**
   * Writing direction of the authored markdown.
   *
   * The chapter is content, not UI copy: a French document rendered inside the
   * Arabic route must stay LTR, or its punctuation moves to the wrong end of
   * every sentence and inline subscripts flip (x₀ becomes ₀x).
   */
  contentDir: 'ltr' | 'rtl'
}

/**
 * The courses that have an authored markdown chapter. Adding a course is a
 * two-step change: drop the `.md` in `content/course/`, add a row here.
 */
export const COURSE_CATALOG: CourseMeta[] = [
  {
    slug: 'limites-et-continuite',
    file: '01-limites-continuite.md',
    title: 'Limites et continuité',
    titleAr: 'النهايات والاتصال',
    description:
      "Calculer des limites, étudier la continuité, appliquer le théorème des valeurs intermédiaires et construire des fonctions réciproques.",
    descriptionAr:
      'حساب النهايات، ودراسة الاتصال، وتطبيق مبرهنة القيم الوسطية، وبناء الدوال العكسية.',
    level: 'MATHÉMATIQUES · 2ème BAC',
    levelAr: 'الرياضيات · الثانية باكالوريا',
    image: '/brilliant-image/foundational-math.png',
    semester: 1,
    n: 1,
    filieres: ['sm', 'sx'],
    contentDir: 'ltr',
  },
  {
    slug: 'nombres-complexes',
    file: '01-nombres-complexes.md',
    title: 'Nombres complexes',
    titleAr: 'الأعداد العقدية',
    description:
      "Forme algébrique, trigonométrique et exponentielle ; équations du second degré et transformations du plan.",
    descriptionAr:
      'الشكل الجبري والمثلثي والأسي ؛ معادلات الدرجة الثانية وتحويلات المستوى.',
    level: 'MATHÉMATIQUES · 2ème BAC',
    levelAr: 'الرياضيات · الثانية باكالوريا',
    image: '/brilliant-image/computer-science.png',
    semester: 2,
    n: 4,
    filieres: ['sm'],
    contentDir: 'ltr',
  },
]

export type ContentLocale = 'fr' | 'ar'

// Narrow parameters, so a card that carries only a title and a level (see
// LEGACY_COURSES) can use these too.
export const courseTitle = (
  c: Pick<CourseMeta, 'title' | 'titleAr'>,
  l: ContentLocale,
) => (l === 'ar' ? c.titleAr : c.title)

export const courseDescription = (
  c: Pick<CourseMeta, 'description' | 'descriptionAr'>,
  l: ContentLocale,
) => (l === 'ar' ? c.descriptionAr : c.description)

export const courseLevel = (
  c: Pick<CourseMeta, 'level' | 'levelAr'>,
  l: ContentLocale,
) => (l === 'ar' ? c.levelAr : c.level)

export const courseBySlug = (slug: string): CourseMeta | undefined =>
  COURSE_CATALOG.find((c) => c.slug === slug)

/** True when a slug is served by the markdown pipeline rather than a JSX page. */
export const isMarkdownCourse = (slug: string): boolean => !!courseBySlug(slug)

/**
 * The markdown-backed courses, in chapter order.
 *
 * Pass a filière to get only that programme's chapters; pass nothing for the
 * whole catalogue (the case where no choice has been made yet).
 */
export const listCourses = (filiere?: Filiere): CourseMeta[] =>
  COURSE_CATALOG.filter((c) => !filiere || c.filieres.includes(filiere)).sort(
    (a, b) => a.n - b.n,
  )

/**
 * The one course that predates the markdown pipeline and still has its own
 * hand-written page. Listed here only so "Jump back in" can offer it too.
 */
export const LEGACY_COURSES: Pick<
  CourseMeta,
  'slug' | 'title' | 'titleAr' | 'level' | 'levelAr' | 'image' | 'filieres'
>[] = [
  {
    slug: 'fonctions-logarithmiques',
    title: 'Fonctions Logarithmiques',
    titleAr: 'الدوال اللوغاريتمية',
    level: 'MATHÉMATIQUES · BAC',
    levelAr: 'الرياضيات · باكالوريا',
    image: '/brilliant-image/data-analysis.png',
    filieres: ['sm', 'sx'],
  },
]
