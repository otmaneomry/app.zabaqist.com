/**
 * The two 2ème Bac maths programmes: Sciences Expérimentales (SVT / PC) and
 * Sciences Mathématiques (SM A / B).
 *
 * Eleven and thirteen chapters with their exam priority, used by the landing
 * page's parcours and by anything that needs a programme's shape. Slugs match
 * `lib/courseCatalog.ts`, so a chapter that has an authored markdown document
 * opens it and the rest fall through to the "coming soon" page — for SM every
 * chapter is authored, so nothing falls through.
 *
 * The Sciences Exp list is ported from
 * zabaqist-turbo/apps/nextjs/src/content/programme-se.ts; the Arabic titles and
 * objectives were authored here, not transliterated.
 */

import type { Branch } from './courseCatalog.ts'
import type { Filiere } from './filiere.ts'

export type Semester = 1 | 2
export type PriorityKey = 'fondations' | 'coeur' | 'rentable' | 'soutien'

export const PRIORITY_COLORS: Record<PriorityKey, string> = {
  fondations: 'var(--zb-gold)',
  coeur: 'var(--zb-gold-deep)',
  rentable: 'var(--zb-mint)',
  soutien: '#C2410C',
}

export const PRIORITY_LABELS: Record<PriorityKey, string> = {
  fondations: 'Fondations',
  coeur: "Cœur d'examen",
  rentable: 'Rentable & indépendant',
  soutien: 'À ne pas négliger',
}

export const PRIORITY_BLURBS: Record<PriorityKey, string> = {
  fondations: 'Conditionnent presque tout le reste. À solidifier en premier.',
  coeur:
    "Rendement maximal : l'étude de fonction (ln/exp) + intégrale, le gros problème.",
  rentable: 'Exercice détachable : des points à sécuriser à part.',
  soutien: 'Petits exercices sûrs, souvent en fin de problème.',
}

export interface ChapterMeta {
  n: number
  slug: string
  title: string
  /** Arabic title. Authored, not transliterated. */
  titleAr: string
  semester: Semester
  objective: string
  objectiveAr: string
  priority: PriorityKey
  /**
   * Which half of the programme this chapter belongs to — see `Branch` in
   * `lib/courseCatalog.ts`.
   *
   * Optional because it only means something for Sciences Mathématiques, the
   * one programme that is genuinely taught as two parallel series. Sciences
   * Expérimentales runs a single thread that also happens to include a
   * geometry chapter belonging to neither branch, so labelling it would be
   * inventing a structure the student is never shown.
   */
  branch?: Branch
}

export type ContentLocale = 'fr' | 'ar'

export const chapterTitle = (c: ChapterMeta, l: ContentLocale) =>
  l === 'ar' ? c.titleAr : c.title

export const chapterObjective = (c: ChapterMeta, l: ContentLocale) =>
  l === 'ar' ? c.objectiveAr : c.objective

/**
 * Sciences Expérimentales (SVT / PC) — 11 chapitres.
 * Ported from zabaqist-turbo/apps/nextjs/src/content/programme-se.ts.
 */
export const CHAPTERS_SX: ChapterMeta[] = [
  {
    n: 1,
    slug: 'limites-et-continuite',
    title: 'Limites et continuité',
    titleAr: 'النهايات والاتصال',
    semester: 1,
    priority: 'fondations',
    objective:
      "Étudier le comportement d'une fonction aux bornes de son domaine et garantir l'existence de solutions d'équations.",
    objectiveAr: 'دراسة سلوك دالة عند حدود مجال تعريفها، وضمان وجود حلول للمعادلات.',
  },
  {
    n: 2,
    slug: 'suites-numeriques',
    title: 'Suites numériques',
    titleAr: 'المتتاليات العددية',
    semester: 1,
    priority: 'soutien',
    objective:
      "Étudier des grandeurs définies pas à pas et leur comportement à l'infini.",
    objectiveAr: 'دراسة مقادير مُعرَّفة خطوة بخطوة، وسلوكها بجوار ما لا نهاية.',
  },
  {
    // Suites before Dérivation: the dérivation chapter lists "Suites numériques
    // et raisonnement par récurrence" in its own `## Prérequis`. `listCourses`
    // was corrected when the source content arrived; this list was not, so a
    // Sciences Exp student saw Dérivation as chapter 2 in the programme and
    // Suites as chapter 2 in the catalogue.
    n: 3,
    slug: 'derivation-etude-fonctions',
    title: 'Dérivation et étude des fonctions',
    titleAr: 'الاشتقاق ودراسة الدوال',
    semester: 1,
    priority: 'coeur',
    objective:
      'Étudier complètement une fonction et tracer sa courbe, du domaine aux asymptotes.',
    objectiveAr: 'دراسة دالة دراسة كاملة ورسم منحناها، من المجال إلى المقاربات.',
  },
  {
    n: 4,
    slug: 'fonctions-primitives',
    title: 'Fonctions primitives',
    titleAr: 'الدوال الأصلية',
    semester: 1,
    priority: 'fondations',
    objective:
      "Inverser la dérivation : la porte d'entrée obligatoire vers le calcul intégral.",
    objectiveAr: 'عكس الاشتقاق: المدخل الإجباري إلى الحساب التكاملي.',
  },
  {
    n: 5,
    slug: 'fonctions-logarithmiques',
    title: 'Fonctions logarithmiques',
    titleAr: 'الدوال اللوغاريتمية',
    semester: 1,
    priority: 'coeur',
    objective:
      "Introduire la fonction ln, et s'en servir dans les études de fonctions et les équations.",
    objectiveAr: 'تقديم الدالة ln، واستعمالها في دراسة الدوال وفي المعادلات.',
  },
  {
    n: 6,
    slug: 'fonctions-exponentielles',
    title: 'Fonctions exponentielles',
    titleAr: 'الدوال الأسية',
    semester: 2,
    priority: 'coeur',
    objective:
      'La réciproque de ln, omniprésente en modélisation (physique, biologie).',
    objectiveAr: 'الدالة العكسية لـ ln، حاضرة في كل نمذجة (فيزياء، بيولوجيا).',
  },
  {
    // `nombres-complexes-sx`, and deliberately not `nombres-complexes`: the
    // written document is the SM version, marked `['sm']` in the catalogue
    // because Sciences Exp studies a lighter chapter of its own. Reusing the
    // SM slug meant the catalogue hid the chapter while the programme linked
    // straight to it, and an SVT student clicking chapter 7 was handed 34
    // sections of the Sciences Maths syllabus. With a slug of its own it falls
    // back to "cours en développement", like the three other SX chapters that
    // have not been written yet — which is the truth.
    n: 7,
    slug: 'nombres-complexes-sx',
    title: 'Nombres complexes',
    titleAr: 'الأعداد العقدية',
    semester: 2,
    priority: 'rentable',
    objective:
      "Un ensemble ℂ où toute équation du 2ⁿᵈ degré a des solutions, et une façon de traiter la géométrie plane par le calcul.",
    objectiveAr: 'مجموعة ℂ حيث لكل معادلة من الدرجة الثانية حلول، وطريقة لمعالجة هندسة المستوى بالحساب.',
  },
  {
    n: 8,
    slug: 'calcul-integral',
    title: 'Calcul intégral',
    titleAr: 'الحساب التكاملي',
    semester: 2,
    priority: 'coeur',
    objective:
      "Calculer aires et grandeurs cumulées ; l'aboutissement du chapitre Primitives.",
    objectiveAr: 'حساب المساحات والمقادير المتراكمة ؛ تتويج فصل الدوال الأصلية.',
  },
  {
    n: 9,
    slug: 'equations-differentielles',
    title: 'Équations différentielles',
    titleAr: 'المعادلات التفاضلية',
    semester: 2,
    priority: 'soutien',
    objective:
      'Résoudre des équations reliant une fonction et ses dérivées (RC, RLC, oscillateurs).',
    objectiveAr: 'حل معادلات تربط دالة بمشتقاتها (RC، RLC، المتذبذبات).',
  },
  {
    n: 10,
    slug: 'geometrie-dans-l-espace',
    title: "Géométrie dans l'espace",
    titleAr: 'الهندسة في الفضاء',
    semester: 2,
    priority: 'rentable',
    objective:
      'Étude analytique de l’espace : droites, plans, sphères, distances.',
    objectiveAr: 'الدراسة التحليلية للفضاء: المستقيمات، المستويات، الفلكات، المسافات.',
  },
  {
    n: 11,
    slug: 'denombrement-probabilites',
    title: 'Dénombrement et probabilités',
    titleAr: 'التعداد والاحتمالات',
    semester: 2,
    priority: 'rentable',
    objective: 'Compter des configurations et modéliser l’aléatoire.',
    objectiveAr: 'عدّ التشكيلات ونمذجة العشوائي.',
  },
]

/**
 * A chapter shared with the other filière, renumbered for this one. The text is
 * the pedagogue's; only its position in the year differs.
 */
function chapterOf(
  slug: string,
  n: number,
  semester: Semester,
  branch: Branch,
): ChapterMeta {
  const base = CHAPTERS_SX.find((c) => c.slug === slug)
  if (!base) throw new Error(`unknown shared chapter: ${slug}`)
  return { ...base, n, semester, branch }
}

/**
 * Sciences Mathématiques (SM A / B) — 13 chapitres.
 *
 * The year runs as two parallel series, which is how the pedagogue numbered
 * the source documents under `critique/course/`: an analysis thread
 * (limites → suites → dérivation → ln → exp → intégrale → équations
 * différentielles) and an algebra thread (complexes → arithmétique →
 * probabilités → lois de composition → structures → espaces vectoriels).
 * `branch` carries that split; `n` below is the position in the year, so the
 * two threads interleave by semester the way a timetable does.
 *
 * The analysis core is shared with Sciences Expérimentales; the algebra half is
 * what makes SM a different programme rather than a longer one.
 *
 * Every slug here has an authored chapter in `lib/courseCatalog.ts` — the plan
 * a student is shown is the plan they can open. Two consequences of following
 * the source rather than the older sketch this replaces:
 *   · Suites comes before Dérivation. The dérivation chapter lists "Suites
 *     numériques et raisonnement par récurrence" in its own `## Prérequis`.
 *   · "Structures algébriques" was one chapter here and is two in the source —
 *     the vocabulary (lois de composition interne) is taught before the
 *     structures built out of it (groupes, anneaux, corps).
 *
 * Objectives are the pedagogue's own, taken from the `## Objectifs` of each
 * chapter; the SM course list is corroborated by `@zabaqist/curriculum`
 * (`bac2SmA`). Nothing here is invented.
 */
export const CHAPTERS_SM: ChapterMeta[] = [
  /* ── Semestre 1 ─────────────────────────────────────────────────────── */
  chapterOf('limites-et-continuite', 1, 1, 'analyse'),
  chapterOf('suites-numeriques', 2, 1, 'analyse'),
  chapterOf('derivation-etude-fonctions', 3, 1, 'analyse'),
  chapterOf('fonctions-logarithmiques', 4, 1, 'analyse'),
  {
    n: 5,
    slug: 'nombres-complexes',
    title: 'Nombres complexes',
    titleAr: 'الأعداد العقدية',
    semester: 1,
    branch: 'algebre',
    priority: 'coeur',
    objective:
      'Maîtriser le calcul sur les nombres complexes et interpréter géométriquement leurs expressions.',
    objectiveAr:
      'إتقان الحساب على الأعداد العقدية وتأويل تعابيرها تأويلًا هندسيًا.',
  },
  {
    n: 6,
    slug: 'arithmetique-dans-z',
    title: 'Arithmétique dans ℤ',
    titleAr: 'الحسابيات في ℤ',
    semester: 1,
    branch: 'algebre',
    priority: 'rentable',
    objective:
      'Utiliser les congruences modulo n et mettre en œuvre les théorèmes de Bézout, de Gauss et de Fermat.',
    objectiveAr:
      'استعمال المتوافقات بترديد n، وتوظيف مبرهنات بيزو وغوص وفيرما.',
  },

  /* ── Semestre 2 ─────────────────────────────────────────────────────── */
  chapterOf('fonctions-exponentielles', 7, 2, 'analyse'),
  chapterOf('calcul-integral', 8, 2, 'analyse'),
  chapterOf('equations-differentielles', 9, 2, 'analyse'),
  {
    n: 10,
    slug: 'calcul-probabilites',
    title: 'Calcul de probabilités',
    titleAr: 'حساب الاحتمالات',
    semester: 2,
    branch: 'algebre',
    priority: 'rentable',
    objective:
      "Calculer des probabilités conditionnelles et choisir un modèle de dénombrement adapté à une expérience aléatoire.",
    objectiveAr:
      'حساب الاحتمالات الشرطية واختيار نموذج تعداد ملائم لتجربة عشوائية.',
  },
  {
    n: 11,
    slug: 'lois-composition-interne',
    title: 'Lois de composition interne',
    titleAr: 'قوانين التركيب الداخلي',
    semester: 2,
    branch: 'algebre',
    priority: 'fondations',
    objective:
      "Vérifier qu'une opération est une loi de composition interne, et étudier stabilité, commutativité, associativité, élément neutre et éléments symétrisables.",
    objectiveAr:
      'التحقق من كون عملية ما قانون تركيب داخلي، ودراسة الاستقرار والتبادلية والتجميعية والعنصر المحايد والعناصر القابلة للتماثل.',
  },
  {
    n: 12,
    slug: 'groupes-anneaux-corps',
    title: 'Groupes, anneaux et corps',
    titleAr: 'الزمر والحلقات والأجسام',
    semester: 2,
    branch: 'algebre',
    priority: 'rentable',
    objective:
      "Reconnaître une structure de groupe, d'anneau ou de corps, caractériser un sous-groupe et exploiter les morphismes.",
    objectiveAr:
      'التعرّف على بنية زمرة أو حلقة أو جسم، وتمييز زمرة جزئية، وتوظيف التشاكلات.',
  },
  {
    n: 13,
    slug: 'espaces-vectoriels-reels',
    title: 'Espaces vectoriels réels',
    titleAr: 'الفضاءات المتجهية الحقيقية',
    semester: 2,
    branch: 'algebre',
    priority: 'rentable',
    objective:
      "Reconnaître une structure d'espace vectoriel réel, ses sous-espaces et ses familles génératrices.",
    objectiveAr:
      'التعرّف على بنية فضاء متجهي حقيقي، وفضاءاته الجزئية وأسره المولّدة.',
  },
]

/** The programme a student actually follows, by filière. */
export const PROGRAMMES: Record<Filiere, ChapterMeta[]> = {
  sx: CHAPTERS_SX,
  sm: CHAPTERS_SM,
}

/**
 * Total by construction.
 *
 * `PROGRAMMES[f]` for anything that is not a filière is `undefined`, and every
 * caller goes straight on to `.map` or `.findIndex`. The argument reaches here
 * from `localStorage`, which is to say from a value anyone can set, and
 * `/demarrer` is a public page.
 */
export const chaptersOf = (f: Filiere): ChapterMeta[] =>
  PROGRAMMES[f] ?? PROGRAMMES.sx

export const chaptersOfSemester = (f: Filiere, s: Semester) =>
  chaptersOf(f).filter((c) => c.semester === s)
