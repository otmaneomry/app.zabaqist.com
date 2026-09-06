# Cours dynamiques (markdown)

Un cours n'est plus une page React écrite à la main. C'est un **document markdown**
sous `content/course/`, rendu tel quel.

## Ajouter un chapitre — 2 étapes

1. Copier le `.md` dans `content/course/`
2. Ajouter une ligne dans `COURSE_CATALOG` (`lib/courseDoc.ts`) :

```ts
{
  slug: 'suites-numeriques',            // → /courses/suites-numeriques
  file: '02-suites-numeriques.md',
  title: 'Suites numériques',
  description: '…',
  level: 'MATHÉMATIQUES · 2ème BAC',
  semester: 1,
  n: 2,
}
```

Le chapitre apparaît alors sur `/courses` et s'ouvre sur `/courses/<slug>`.
Rien d'autre à écrire : pas de JSX, pas de découpage manuel, pas d'onglets à
déclarer.

## Mise en page

Identique au cours écrit à la main (`/courses/fonctions-logarithmiques`) :
carte de progression, en-tête, onglets défilants, contenu en carte, appel au
quiz. La différence est l'origine des onglets — **ce sont les `##` du chapitre**,
pas une liste tapée à la main :

```
## Activités préparatoires   →  onglet « Activités »   (7 sections)
## Cours                     →  onglet « Cours »       (5 sections)
## Méthodes                  →  onglet « Méthodes »    (6 sections)
## Exercices                 →  onglet « Exercices »  (11 sections)
## Devoirs et synthèse       →  onglet « Devoir »      (2 sections)
```

Deux niveaux de navigation, tous deux dans l'URL (`?s=<sectionId>`) — l'onglet
ouvert est déduit de la section lue, donc un lien profond reste valable :

1. **onglet** — la partie du chapitre
2. **pastilles** — la section dans cette partie (point plein = déjà consultée)

## Tests

```bash
npm run build && npm start -- -p 3111
npm run test:course              # 83 vérifications
```

`scripts/test-course.mjs` pilote l'application réelle dans un navigateur réel :
découpage du document, rendu des 33 sections, absence de défilement horizontal
à 390/768/1440 px, onglets, solution repliée, indices, persistance des
checkpoints, XP, en-tête mobile (nav repliée dans le tiroir), page d'accueil
publique (liens, problème interactif, parcours), reprise depuis le tableau de
bord, route arabe (`/ar`, RTL, bascule de langue), marque (favicon, thème, OG,
hreflang), choix de filière (SM / SX, persistance, redirection à la connexion)
et non-régression des pages existantes. Nécessite Chrome et `npm i -D playwright`.

Les interactions attendent `body.client-side-classes` — la classe posée par
l'effet de montage de `ClientLayout`. Un clic envoyé entre `load` et la fin de
l'hydratation fait régénérer le sous-arbre par React et journalise une erreur
d'hydratation sur une page pourtant saine : les chargements simples n'en
produisent aucune (0/36 mesurées).

## Filière — SM ou Sciences Exp

Le programme de maths **n'est pas le même** dans les deux filières, donc la
question est posée à la connexion et tout en dépend ensuite.

```
connexion / inscription
   └─ pas de filière ?  →  /filiere?next=/home   (2 taps : filière, puis option)
   └─ déjà choisie ?    →  /home
```

| Fichier | Rôle |
| --- | --- |
| `lib/filiere.ts` | Types, pistes par filière, lecture/écriture (localStorage), événement `zabaqist:filiere` |
| `components/filiere/FilierePicker.tsx` | Le sélecteur en deux temps |
| `app/[locale]/filiere/page.tsx` | La page d'onboarding (`?next=` = chemin interne uniquement) |
| `lib/programme.ts` | `PROGRAMMES.sx` (11 chapitres) et `PROGRAMMES.sm` (12) |
| `lib/courseCatalog.ts` | `filieres: Filiere[]` par chapitre ; `listCourses(filiere)` |

Ce qui suit le choix : le parcours de la page d'accueil, le catalogue
`/courses`, « Jump back in » et « Continuer l'apprentissage ». Sans choix, le
programme de Sciences Expérimentales est affiché — la plus grosse cohorte — et
la question est posée juste au-dessus plutôt que de laisser une page vide.

**Le contenu diffère vraiment.** `01-limites-continuite.md` est commun aux deux
filières ; `01-nombres-complexes.md` n'existe qu'en SM. C'est ce qui rend le
choix visible plutôt que décoratif. La partie analyse est partagée, la partie
algèbre (complexes, arithmétique dans ℤ, structures, espaces vectoriels) est
propre à SM — objectifs repris des `## Objectifs` des chapitres, liste des
cours corroborée par `@zabaqist/curriculum` (`bac2SmA`).

## Marque — repris de `zabaqist.com`

L'application et le site vitrine décrivent **un seul produit**, donc la marque
vient de la source canonique (`/Users/otmane/www/zabaqist/zabaqist.com`) :

| Élément | Où |
| --- | --- |
| Favicon + icône Apple | `app/[locale]/layout.tsx` — SVG inline, khatim doré sur vert profond `#1a4d40` |
| `theme-color` | `#1a4d40` (teinte la barre du navigateur sur Android) |
| Carte OG | `public/og.png`, 1200×630 |
| Titres, descriptions, mots-clés, `hreflang` | `messages/{fr,ar}.json` → `meta`, appliqués par le layout |
| Section « Pourquoi cette étoile » | `components/landing/KhatimFigure.tsx` |

**Le ratio du khatim est une dérivation, pas un goût.** La forme est
l'octagramme {8/2} — un carré et le même carré tourné de 45° — et le rayon où
leurs arêtes se croisent vaut `√0.5858 ≈ 0.7654`, pas 0,5 (qui donne un
astérisque) ni 0,75 (qui ne dérive de rien). `KHATIM` dans
`components/landing/Zellige.tsx` ; le favicon, le logotype et le motif zellige
sont **la même forme**.

Le titre SEO est posé par le layout, pas par la page d'accueil : `/` est la
racine du site, donc un `generateMetadata` de page écraserait silencieusement
les titres sur lesquels `zabaqist.com` se positionne.

## Bilingue — français / العربية

`next-intl`, configuré comme dans `zabaqist-turbo` : **le français reste à `/`**
(donc aucune URL existante ne change) et **l'arabe vit sous `/ar/…`**, avec sa
propre adresse partageable et indexable.

| Fichier | Rôle |
| --- | --- |
| `i18n/routing.ts` | Locales, `localePrefix: 'as-needed'`, `lang` / `dir` par locale |
| `i18n/navigation.ts` | `Link`, `useRouter`, `usePathname` conscients de la locale |
| `i18n/request.ts` | Charge `messages/<locale>.json` par requête |
| `middleware.ts` | Détection et préfixe de locale |
| `messages/{fr,ar}.json` | Toute la copie d'interface, mêmes clés des deux côtés |
| `components/landing/LangSwitch.tsx` | La bascule, dans les deux en-têtes |

Points à connaître :

- **Importer `Link` depuis `@/i18n/navigation`**, jamais depuis `next/link`, ou
  le préfixe `/ar` saute au premier clic.
- La bascule **reste sur la page courante** (`usePathname` est dépouillé de la
  locale) et le choix est mémorisé (cookie `NEXT_LOCALE`) : une URL non préfixée
  suit ensuite la langue choisie.
- `<html lang dir>` est posé par le layout ; les utilitaires logiques
  (`ps-`, `me-`, `text-start`, `ltr:`/`rtl:`) assurent le miroir.
- **Le chapitre garde sa propre direction** (`contentDir` dans le catalogue) :
  un document français affiché dans la route arabe reste LTR, sinon sa
  ponctuation et ses indices passent du mauvais côté (x₀ devient ₀x).
- L'interface est traduite ; **le contenu du chapitre ne l'est pas** — c'est le
  markdown du pédagogue, et le traduire est un travail de contenu, pas de code.

## Page d'accueil publique (`/`)

Portée depuis `zabaqist-turbo/apps/nextjs` : héros « Apprends en résolvant »,
problème interactif (lim sin x / x), parcours en stations, trois piliers, pied
de page. Deux choses ne sont pas des copies :

- les liens visent les routes de cette application — `/courses`,
  `/courses/<slug>`, `/quiz/1`, `/home` — donc tout l'existant continue de
  fonctionner ;
- les états des stations sont réels : ils viennent de la progression stockée sur
  l'appareil, donc « En cours » désigne le chapitre réellement lu et
  « Continuer » reprend à la section exacte.

Palette : la page utilise le vert « Mint Tea » (`--zb-mint`) et le crème de la
maquette d'origine. Les pages de cours gardent leur teal `#2CB0A1` — les deux
jeux de jetons coexistent dans `tailwind.config.ts` (`zb-mint*` / `zb-teal*`).
L'ancienne page reste au chaud dans
`components/frontend/BrilliantLandingPage.tsx`.

## Accueil connecté (`/home`)

« Jump back in » reprend le cours réellement ouvert sur cet appareil, à la
section quittée (`?s=…`), et affiche sa progression. Sans historique, la carte
propose de commencer le chapitre 1. Les chapitres apparaissent aussi en tête de
« Continuer l'apprentissage », avec leur vraie progression — les autres
vignettes restent des espaces réservés.

Le décompte des sections vient du serveur, que l'accueil n'interroge pas : la
page de cours l'enregistre (`rememberSectionCount`) à la première ouverture, et
les cartes le relisent.

## Ce que le pipeline fait du markdown

| Fichier | Rôle |
| --- | --- |
| `lib/courseDoc.ts` | Charge, normalise et pagine le chapitre (serveur uniquement) |
| `components/course/CourseDoc.tsx` | Rend markdown + KaTeX, promeut les blockquotes en encadrés typés |
| `components/course/CourseTabs.tsx` | Le plan `##` du chapitre en onglets Mantine |
| `components/course/SectionPicker.tsx` | Les sections de l'onglet ouvert, en pastilles |
| `components/course/CourseProgressCard.tsx` | Progression, temps passé, XP |
| `components/course/Checkpoint.tsx` | Transforme un `> **Application.**` en arrêt avec indices |
| `components/course/Reveal.tsx` | Ferme les `> **Solution.**` / `> **Preuve.**` derrière un clic |
| `lib/courseProgress.ts` | XP et état des checkpoints (localStorage) |

### Normalisations appliquées au markdown

Les chapitres sont extraits de PDF ; trois passes les rendent affichables sans
toucher au contenu :

1. `mendParagraphs` — recolle les phrases coupées en deux paragraphes
2. `normalizeDisplayMath` — met les `$$…$$` d'une ligne sur trois lignes, sinon
   remark-math les rend en ligne et illisibles
3. `groupCallouts` — absorbe le corps d'un `> **Solution.**` dans son blockquote,
   sinon la réponse s'affiche sous le bouton « Afficher » au lieu d'être dedans

### Pagination

Un chapitre entier fait ~15 Mo de KaTeX rendu : inutilisable sur téléphone. Il est
donc découpé par `##`, les sections courtes consécutives sont fusionnées, et les
sections lourdes (> 200 formules) sont recoupées par `###`. Chaque page est un
extrait **verbatim** du document — `?s=<sectionId>` choisit laquelle.

Résultat pour ce chapitre : 33 sections, 175–200 Ko gzippés pour les plus
lourdes, 13 Ko pour l'introduction.

## Conventions du markdown

| Écriture | Rendu |
| --- | --- |
| `> **Définition.** …` | encadré teal |
| `> **Théorème.** / **Proposition.** / **Corollaire.**` | encadré doré |
| `> **Exemple.** / **Remarque.**` | encadré gris |
| `> **Solution.** / **Preuve.**` | replié derrière « Afficher » |
| `> **Application.** …` | checkpoint : brouillon, 3 indices, auto-évaluation |

Le type de section (`Cours`, `Méthodes`, `Exercices`, `Devoirs`, `Résumé`) est déduit
du titre `##` et fixe les XP — voir `XP_BY_KIND`.

## Cours non migrés

Un slug sans `.md` retombe sur `CourseFallback.tsx` (l'ancienne page « Cours en
développement »). `/courses/fonctions-logarithmiques` reste servi par sa page JSX
statique : rien n'a changé pour lui.
