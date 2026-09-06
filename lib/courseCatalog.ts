/**
 * The course catalog — which chapters exist, and how they present.
 *
 * Split out of `lib/courseDoc.ts` so the client can import it: that module
 * reads the filesystem, so pulling it into a client component would break the
 * bundle. This one is plain data and safe on both sides.
 */

import type { Filiere } from './filiere.ts'

/**
 * The two halves of the Sciences Mathématiques programme.
 *
 * This is not a tidying device: it is how the year is actually taught and how
 * the pedagogue numbered the source documents in `critique/course/` — two
 * independent series, `01-limites-continuite` … `07-equations-differentielles`
 * and `01-nombres-complexes` … `06-espaces-vectoriels-reels`. `n` below is the
 * chapter's number *inside its branch*, which is why two chapters share n = 1.
 *
 * Sciences Expérimentales follows the analysis branch only; the algebra branch
 * is the thing that makes SM a different programme rather than a longer one.
 */
export type Branch = 'analyse' | 'algebre'

/** Display order of the branches. Analysis first: the algebra half leans on it. */
export const BRANCHES: Branch[] = ['analyse', 'algebre']

export const BRANCH_LABEL: Record<Branch, string> = {
  analyse: 'Analyse',
  algebre: 'Algèbre',
}

export const BRANCH_LABEL_AR: Record<Branch, string> = {
  analyse: 'التحليل',
  algebre: 'الجبر',
}

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
  /**
   * How many sections the document paginates into, and how many checkpoints it
   * asks the reader to attempt.
   *
   * Denormalised from the markdown so the client can show a real figure without
   * the loader (which reads the filesystem). It is not a guess and must not
   * become one: `scripts/test-course.mjs` re-derives both from every chapter and
   * fails if a number here has drifted from the document it describes.
   */
  sections: number
  exercises: number
  /** Which half of the programme this chapter belongs to. */
  branch: Branch
  /**
   * Chapter number **within its branch** — the number the pedagogue gave it,
   * and the prefix of its file. Not globally unique: analysis 1 is "Limites et
   * continuité" and algebra 1 is "Nombres complexes".
   */
  n: number
  /**
   * The filières whose programme contains this chapter.
   *
   * Analysis is shared; the algebra half is not. A student in SVT has no reason
   * to be shown "Groupes, anneaux et corps", and one in SM has every reason to
   * be shown it — this is what makes the filière choice mean something.
   *
   * Two chapters that *look* shared are marked `sm` only on purpose: the
   * authored "Nombres complexes" and "Calcul de probabilités" are the SM
   * versions (algebraic structures of ℂ, conditional probability with
   * counting models). Sciences Expérimentales has its own lighter chapters
   * under different names — see `lib/programme.ts` — and serving the SM
   * document there would misrepresent that student's programme.
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

const LEVEL = 'MATHÉMATIQUES · 2ème BAC'
const LEVEL_AR = 'الرياضيات · الثانية باكالوريا'

/**
 * The courses that have an authored markdown chapter. Adding a course is a
 * two-step change: drop the `.md` in `content/course/`, add a row here.
 *
 * All thirteen chapters of the Sciences Mathématiques programme are authored,
 * so this list and `CHAPTERS_SM` in `lib/programme.ts` are the same thirteen
 * slugs — the plan a student is shown is the plan they can actually open.
 */
export const COURSE_CATALOG: CourseMeta[] = [
  /* ── Analyse ─────────────────────────────────────────────────────────── */
  {
    slug: 'limites-et-continuite',
    file: '01-limites-continuite.md',
    title: 'Limites et continuité',
    titleAr: 'النهايات والاتصال',
    description:
      "Calculer des limites, étudier la continuité, appliquer le théorème des valeurs intermédiaires et construire des fonctions réciproques.",
    descriptionAr:
      'حساب النهايات، ودراسة الاتصال، وتطبيق مبرهنة القيم الوسطية، وبناء الدوال العكسية.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/foundational-math.png',
    semester: 1,
    sections: 33,
    exercises: 16,
    branch: 'analyse',
    n: 1,
    filieres: ['sm', 'sx'],
    contentDir: 'ltr',
  },
  {
    slug: 'suites-numeriques',
    file: '02-suites-numeriques.md',
    title: 'Suites numériques',
    titleAr: 'المتتاليات العددية',
    description:
      "Raisonner par récurrence, étudier monotonie et convergence, et traiter les suites adjacentes et les suites récurrentes.",
    descriptionAr:
      'البرهان بالترجع، ودراسة الرتابة والتقارب، ومعالجة المتتاليات المتجاورة والمتتاليات التراجعية.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/search-fundamentals.png',
    semester: 1,
    sections: 21,
    exercises: 8,
    branch: 'analyse',
    n: 2,
    filieres: ['sm', 'sx'],
    contentDir: 'ltr',
  },
  {
    slug: 'derivation-etude-fonctions',
    file: '03-derivation.md',
    title: 'Dérivation et étude des fonctions',
    titleAr: 'الاشتقاق ودراسة الدوال',
    description:
      "Dériver, appliquer le théorème des accroissements finis, étudier les variations et la concavité, puis tracer la courbe complète.",
    descriptionAr:
      'الاشتقاق، وتطبيق مبرهنة التزايدات المنتهية، ودراسة التغيرات والتقعر، ثم رسم المنحنى كاملًا.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/science.png',
    semester: 1,
    sections: 15,
    exercises: 9,
    branch: 'analyse',
    n: 3,
    filieres: ['sm', 'sx'],
    contentDir: 'ltr',
  },
  {
    slug: 'fonctions-logarithmiques',
    file: '04-fonctions-logarithmiques.md',
    title: 'Fonctions logarithmiques',
    titleAr: 'الدوال اللوغاريتمية',
    description:
      "Définir ln comme réciproque de l'exponentielle, manipuler ses propriétés, la dériver et lire sa courbe.",
    descriptionAr:
      'تعريف ln كدالة عكسية للأسية، وتوظيف خاصياتها، واشتقاقها، وقراءة منحناها.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/data-analysis.png',
    semester: 1,
    sections: 6,
    exercises: 12,
    branch: 'analyse',
    n: 4,
    filieres: ['sm', 'sx'],
    contentDir: 'ltr',
  },
  {
    slug: 'fonctions-exponentielles',
    file: '05-exponentielle.md',
    title: 'Fonctions exponentielles',
    titleAr: 'الدوال الأسية',
    description:
      "Construire exp comme réciproque de ln, exploiter ses propriétés algébriques, ses limites et ses dérivées, et l'utiliser en modélisation.",
    descriptionAr:
      'بناء الدالة الأسية كدالة عكسية لـ ln، وتوظيف خاصياتها الجبرية ونهاياتها ومشتقاتها، واستعمالها في النمذجة.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/suppercharging.png',
    semester: 2,
    sections: 15,
    exercises: 6,
    branch: 'analyse',
    n: 5,
    filieres: ['sm', 'sx'],
    contentDir: 'ltr',
  },
  {
    slug: 'calcul-integral',
    file: '06-calcul-integral.md',
    title: 'Calcul intégral',
    titleAr: 'الحساب التكاملي',
    description:
      "Primitives, intégrale d'une fonction continue, intégration par parties et changement de variable, aires et volumes.",
    descriptionAr:
      'الدوال الأصلية، وتكامل دالة متصلة، والمكاملة بالأجزاء وتغيير المتغير، والمساحات والحجوم.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/Designing_Programs_Course_Card.png',
    semester: 2,
    sections: 25,
    exercises: 13,
    branch: 'analyse',
    n: 6,
    filieres: ['sm', 'sx'],
    contentDir: 'ltr',
  },
  {
    slug: 'equations-differentielles',
    file: '07-equations-differentielles.md',
    title: 'Équations différentielles',
    titleAr: 'المعادلات التفاضلية',
    description:
      "Résoudre y′ = ay + b et y″ + ay′ + by = 0, et s'en servir pour modéliser un circuit ou une désintégration.",
    descriptionAr:
      'حل المعادلتين ′y = ay + b و ″y + ay′ + by = 0، واستعمالهما لنمذجة دارة كهربائية أو تفكك إشعاعي.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/programming-python.png',
    semester: 2,
    sections: 7,
    exercises: 3,
    branch: 'analyse',
    n: 7,
    filieres: ['sm', 'sx'],
    contentDir: 'ltr',
  },

  /* ── Algèbre ─────────────────────────────────────────────────────────── */
  {
    slug: 'nombres-complexes',
    file: '01-nombres-complexes.md',
    title: 'Nombres complexes',
    titleAr: 'الأعداد العقدية',
    description:
      "Forme algébrique, trigonométrique et exponentielle ; équations du second degré et transformations du plan.",
    descriptionAr:
      'الشكل الجبري والمثلثي والأسي ؛ معادلات الدرجة الثانية وتحويلات المستوى.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/computer-science.png',
    semester: 1,
    sections: 33,
    exercises: 20,
    branch: 'algebre',
    n: 1,
    filieres: ['sm'],
    contentDir: 'ltr',
  },
  {
    slug: 'arithmetique-dans-z',
    file: '02-arithmetique-dans-z.md',
    title: 'Arithmétique dans ℤ',
    titleAr: 'الحسابيات في ℤ',
    description:
      "Divisibilité, PGCD et PPCM, congruences modulo n, et les théorèmes de Bézout, de Gauss et de Fermat.",
    descriptionAr:
      'القابلية للقسمة، والقاسم المشترك الأكبر والمضاعف المشترك الأصغر، والمتوافقات بترديد n، ومبرهنات بيزو وغوص وفيرما.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/how-llms-work.png',
    semester: 1,
    sections: 19,
    exercises: 15,
    branch: 'algebre',
    n: 2,
    filieres: ['sm'],
    contentDir: 'ltr',
  },
  {
    slug: 'calcul-probabilites',
    file: '03-calcul-probabilites.md',
    title: 'Calcul de probabilités',
    titleAr: 'حساب الاحتمالات',
    description:
      "Dénombrement, probabilité conditionnelle, indépendance et variables aléatoires : choisir le modèle adapté à une expérience.",
    descriptionAr:
      'التعداد، والاحتمال الشرطي، والاستقلال، والمتغيرات العشوائية: اختيار النموذج الملائم لتجربة عشوائية.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/data-analysis.png',
    semester: 2,
    sections: 13,
    exercises: 10,
    branch: 'algebre',
    n: 3,
    filieres: ['sm'],
    contentDir: 'ltr',
  },
  {
    slug: 'lois-composition-interne',
    file: '04-lois-composition-interne.md',
    title: 'Lois de composition interne',
    titleAr: 'قوانين التركيب الداخلي',
    description:
      "Associativité, commutativité, élément neutre et symétrique : le vocabulaire dont toute structure algébrique est faite.",
    descriptionAr:
      'التجميعية والتبادلية والعنصر المحايد والمماثل: المعجم الذي تُبنى منه كل بنية جبرية.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/foundational-math.png',
    semester: 2,
    sections: 18,
    exercises: 7,
    branch: 'algebre',
    n: 4,
    filieres: ['sm'],
    contentDir: 'ltr',
  },
  {
    slug: 'groupes-anneaux-corps',
    file: '05-groupes-anneaux-corps.md',
    title: 'Groupes, anneaux et corps',
    titleAr: 'الزمر والحلقات والأجسام',
    description:
      "Reconnaître un groupe, un anneau ou un corps, et exploiter sous-groupes, morphismes et éléments inversibles.",
    descriptionAr:
      'التعرّف على زمرة أو حلقة أو جسم، وتوظيف الزمر الجزئية والتشاكلات والعناصر القابلة للقلب.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/computer-science.png',
    semester: 2,
    sections: 16,
    exercises: 8,
    branch: 'algebre',
    n: 5,
    filieres: ['sm'],
    contentDir: 'ltr',
  },
  {
    slug: 'espaces-vectoriels-reels',
    file: '06-espaces-vectoriels-reels.md',
    title: 'Espaces vectoriels réels',
    titleAr: 'الفضاءات المتجهية الحقيقية',
    description:
      "Sous-espaces vectoriels, familles libres et génératrices, bases et dimension d'un espace vectoriel réel.",
    descriptionAr:
      'الفضاءات المتجهية الجزئية، والأسر الحرة والمولّدة، والأساسات وبُعد فضاء متجهي حقيقي.',
    level: LEVEL,
    levelAr: LEVEL_AR,
    image: '/brilliant-image/science.png',
    semester: 2,
    sections: 18,
    exercises: 7,
    branch: 'algebre',
    n: 6,
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

export const branchLabel = (b: Branch, l: ContentLocale) =>
  l === 'ar' ? BRANCH_LABEL_AR[b] : BRANCH_LABEL[b]

export const courseBySlug = (slug: string): CourseMeta | undefined =>
  COURSE_CATALOG.find((c) => c.slug === slug)

/** True when a slug is served by the markdown pipeline rather than a JSX page. */
export const isMarkdownCourse = (slug: string): boolean => !!courseBySlug(slug)

/**
 * The markdown-backed courses, in programme order: analysis, then algebra, each
 * in the pedagogue's own chapter numbering.
 *
 * Pass a filière to get only that programme's chapters; pass nothing for the
 * whole catalogue (the case where no choice has been made yet).
 */
export const listCourses = (filiere?: Filiere): CourseMeta[] =>
  COURSE_CATALOG.filter((c) => !filiere || c.filieres.includes(filiere)).sort(
    (a, b) =>
      BRANCHES.indexOf(a.branch) - BRANCHES.indexOf(b.branch) || a.n - b.n,
  )

/**
 * The same courses, grouped into the branches that actually have one.
 *
 * A Sciences Expérimentales student sees a single "Analyse" group rather than
 * an empty "Algèbre" heading — the grouping describes their programme, it does
 * not advertise chapters they will never sit.
 */
export const listByBranch = (
  filiere?: Filiere,
): { branch: Branch; courses: CourseMeta[] }[] => {
  const all = listCourses(filiere)
  return BRANCHES.map((branch) => ({
    branch,
    courses: all.filter((c) => c.branch === branch),
  })).filter((g) => g.courses.length > 0)
}

/**
 * Courses that predate the markdown pipeline and still have a hand-written page.
 *
 * Empty: `fonctions-logarithmiques` was the last one, and its content now lives
 * in `content/course/04-fonctions-logarithmiques.md`. Kept as a seam so a future
 * hand-built course can be surfaced on the dashboard without special-casing it.
 */
export const LEGACY_COURSES: Pick<
  CourseMeta,
  'slug' | 'title' | 'titleAr' | 'level' | 'levelAr' | 'image' | 'filieres'
>[] = []
