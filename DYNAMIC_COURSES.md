# Cours dynamiques (markdown)

Un cours n'est plus une page React écrite à la main. C'est un **document markdown**
sous `content/course/`, rendu tel quel.

## Ajouter un chapitre — 2 étapes

1. Copier le `.md` dans `content/course/`
2. Ajouter une ligne dans `COURSE_CATALOG` (`lib/courseCatalog.ts`) :

```ts
{
  slug: 'suites-numeriques',            // → /courses/suites-numeriques
  file: '02-suites-numeriques.md',
  title: 'Suites numériques',
  titleAr: 'المتتاليات العددية',
  description: '…',
  descriptionAr: '…',
  level: LEVEL, levelAr: LEVEL_AR,
  image: '/brilliant-image/search-fundamentals.png',
  semester: 1,
  sections: 21,        // = views.length  — vérifié par les tests
  exercises: 8,        // = checkpoints   — vérifié par les tests
  branch: 'analyse',   // 'analyse' | 'algebre'
  n: 2,                // numéro DANS sa branche, pas dans l'année
  filieres: ['sm', 'sx'],
  contentDir: 'ltr',
}
```

`sections` et `exercises` sont dénormalisés depuis le markdown pour que le
client puisse les afficher sans le loader (qui lit le disque). Ils ne sont pas
approximatifs : `scripts/test-course.mjs` les recalcule sur chaque chapitre et
échoue s'ils ont divergé du document.

Le chapitre apparaît alors sur `/courses` et s'ouvre sur `/courses/<slug>`.
Rien d'autre à écrire : pas de JSX, pas de découpage manuel, pas d'onglets à
déclarer.

## Mise en page — le chapitre est un parcours

`/courses/<slug>` **est le parcours** : une colonne de nœuds où **un seul est
allumé** et tous les autres sont désaturés, plus une carte collante en bas qui
porte l'action suivante. Ouvrir un nœud (`?s=<sectionId>`) bascule sur le
lecteur. Adapté de Brilliant — voir `BRILLIANT_WORKFLOW.md` §3.

Deux écarts délibérés avec la source :

- **Rien n'est verrouillé.** Brilliant grise *et* bloque les nœuds non atteints.
  Ici ils sont désaturés mais restent ouverts : verrouiller un contenu dont
  l'élève pourrait apprendre est une impasse, pas une courbe de difficulté.
  Seule l'*emphase* est séquentielle.
- **Rail droit, pas de serpentin.** Le méandre de Brilliant fonctionne à côté
  d'étiquettes courtes ; les nôtres sont des titres de chapitre entiers, et
  décaler chaque ligne sortait les connecteurs de l'axe.

L'épingle « tu es ici » est le **khatim** — la même forme que le logo et le
favicon.

Le lecteur (`?s=…`) garde sa mise en page d'origine, identique au cours écrit à
la main (`/courses/fonctions-logarithmiques`) : carte de progression, en-tête,
onglets défilants, contenu en carte, appel au quiz. L'origine des onglets —
**ce sont les `##` du chapitre**, pas une liste tapée à la main :

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
npm run test:course              # 156 vérifications
```

`scripts/test-course.mjs` pilote l'application réelle dans un navigateur réel :
découpage du document, rendu des 33 sections, absence de défilement horizontal
à 390/768/1440 px, onglets, solution repliée, indices, persistance des
checkpoints, XP, en-tête mobile (nav repliée dans le tiroir), page d'accueil
publique (liens, problème interactif, parcours), reprise depuis le tableau de
bord, route arabe (`/ar`, RTL, bascule de langue), marque (favicon, thème, OG,
hreflang), tunnel d'accueil (`/demarrer`), parcours du chapitre (`/courses/<slug>`),
boucle d'apprentissage (ambre jamais rouge, reprise illimitée, célébration),
tableau de progression (`/progres`, fenêtres 7 / 4 / 12, aucun classement),
pied de page (aucun lien mort), traduction du quiz, migration du chapitre
écrit à la main vers le markdown (figure GeoGebra comprise),
choix de filière (SM / SX, persistance, redirection à la connexion) et
non-régression des pages existantes. Nécessite Chrome et `npm i -D playwright`.

Les interactions attendent `body.client-side-classes` — la classe posée par
l'effet de montage de `ClientLayout`. Un clic envoyé entre `load` et la fin de
l'hydratation fait régénérer le sous-arbre par React et journalise une erreur
d'hydratation sur une page pourtant saine : les chargements simples n'en
produisent aucune (0/36 mesurées).

## Tunnel d'accueil (`/demarrer`)

Adapté de Brilliant — voir `BRILLIANT_WORKFLOW.md` §1. Sans chrome, sans sortie,
**et sans jamais demander de compte** :

```
accueil → question → DON → question → question → DON → question → révélation
```

- **La barre de progression n'apparaît pas sur le premier écran** : on s'engage
  avant d'apprendre la longueur. Deux segments, aucun compteur « n sur m ».
- **`Continuer` est désactivé tant qu'il n'y a pas de réponse**, et rien ne passe
  à l'écran suivant tout seul. Un seul bouton, une seule position, deux états —
  l'ombre portée *est* le signal d'affordance.
- **Les deux « dons »** ne sont pas du remplissage : l'un prouve l'interactivité
  (le vrai problème `lim sin x / x`), l'autre l'autorité (le programme officiel,
  chiffré).
- **La question la plus difficile est posée par reconnaissance** : au lieu de
  « quelle est ta filière ? », deux cartes portant un vrai exercice de chacune —
  une structure de groupe contre une étude de limite. L'élève reconnaît son
  cahier au lieu de s'auto-évaluer.
- Chaque réponse est écrite au moment où elle est donnée : abandonner à l'étape 5
  ne fait pas perdre les quatre premières. L'étape vit dans l'URL (`?e=`), donc
  le bouton retour du navigateur fonctionne.

**Ce qui n'a délibérément pas été copié :** Brilliant grise le chapitre *avant*
le point de départ pour que le quiz ressemble à des acquis déjà en banque. Ici ce
serait revendiquer un travail que l'élève n'a pas fait.

## Tableau de progression (`/progres`)

L'onglet « You » de Brilliant, **sans sa couche publique** — voir
`BRILLIANT_WORKFLOW.md` §5 et §6.

| Vue | Compartiments | Fenêtre |
| --- | --- | --- |
| Semaine | 7 quotidiens | la semaine (lundi d'abord) |
| Mois | **4 hebdomadaires** | 28 jours — *pas* un mois calendaire |
| Année | 12 mensuels | 12 mois |

Un compartiment vide garde un filet de 3 px au lieu d'un trou : la période reste
continue, et une semaine calme ne ressemble pas à une donnée manquante.

**L'historique daté n'existait pas.** L'application savait *ce qui* avait été lu,
jamais *quand*. `lib/activity.ts` l'enregistre à partir du jour où il est
déployé, branché sur les trois endroits qui suivaient déjà quelque chose
(première ouverture d'une section, engagement sur un checkpoint, temps de
lecture). Le tableau montre exactement ce qui a été enregistré — inventer une
histoire aurait été pire qu'un graphique vide.

### Ce qui n'est pas porté

Les **Leagues** de Brilliant : un classement obligatoire d'autres élèves par nom
et par XP exact, avec rétrogradation et sans désactivation possible. Le produit
promet le contraire dans du texte déjà livré — *« Sans classement public :
personne ne voit ton score. »*

La seule comparaison faite ici est **le lecteur contre sa propre période
précédente**. Également écarté : le pourcentage de justesse brut — un élève en
difficulté qui rencontre un « 0,0 % » en gros caractères reçoit à la fois un
découragement et une statistique dénuée de sens.

## La boucle d'apprentissage

Adapté de Brilliant — voir `BRILLIANT_WORKFLOW.md` §4. Une erreur ne coûte
**qu'un essai de plus, et rien d'autre.**

| Règle | Où |
| --- | --- |
| **Ambre, jamais rouge** — l'ambre dit « pas encore », le rouge dirait « échoué » | `ExerciseWithSolution`, `MultipleChoiceQuestion` |
| Le mot « Incorrect » n'apparaît nulle part — « Encore un essai. » | idem |
| **Reprise illimitée** : plus de plafond à 3 tentatives, plus de solution imposée | `ExerciseWithSolution` |
| La réponse n'est jamais révélée ; l'aide est proposée, pas poussée | idem |
| **Rien n'est repris** : ni XP, ni progression | `Checkpoint` |
| Réussite amplifiée, échec atténué (contraste des marqueurs) | `Checkpoint`, `MultipleChoiceQuestion` |
| « Réessayer » est l'action principale après un manque | `Checkpoint` |

**Ce qui a été supprimé :** `ExerciseWithSolution` bloquait la saisie après trois
tentatives et affichait la solution d'autorité. C'est exactement la mécanique de
punition que le guide pédagogique interdit (*تجنب كل أشكال التثبيط*) — le
compteur d'essais reste, mais comme un constat, pas comme un budget.

**La célébration** (`ChapterComplete`) est une prise de plein écran, sans chrome,
qui se déclenche **une seule fois** à la fin du chapitre. Elle verse le total que
la carte du cours annonce (« … · 400 points ») : **les points paient
l'achèvement**, pas la justesse — noter la célébration sur les checkpoints
tentés donnerait 6 points à quelqu'un qui a lu les 33 sections, ce qui se lit
comme un reproche.

Deux écarts avec la source : **une seule prise et non trois** (les deux autres
fêtent une série quotidienne, que ce produit n'a pas), et **aucune
monétisation** dans la chaîne — Brilliant place une bannière promo juste
au-dessus de la récompense que le lecteur vient de gagner.

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
| `lib/programme.ts` | `PROGRAMMES.sx` (11 chapitres) et `PROGRAMMES.sm` (13) |
| `lib/courseCatalog.ts` | `filieres: Filiere[]` par chapitre ; `listCourses(filiere)` |

Ce qui suit le choix : le parcours de la page d'accueil, le catalogue
`/courses`, « Jump back in » et « Continuer l'apprentissage ». Sans choix, le
programme de Sciences Expérimentales est affiché — la plus grosse cohorte — et
la question est posée juste au-dessus plutôt que de laisser une page vide.

**Le contenu diffère vraiment.** C'est ce qui rend le choix visible plutôt que
décoratif : la partie analyse est partagée, la partie algèbre est propre à SM.
Objectifs repris des `## Objectifs` des chapitres, liste des cours corroborée
par `@zabaqist/curriculum` (`bac2SmA`).

### Les deux séries de Sciences Maths

L'année SM se suit comme **deux séries parallèles** — c'est ainsi que le
pédagogue a numéroté les documents sources sous `critique/course/`, deux
séries `01…07` et `01…06` indépendantes. `branch` porte cette division ;
`CourseMeta.n` est le numéro **dans la branche** (analyse 1 = Limites,
algèbre 1 = Complexes), tandis que `ChapterMeta.n` est la position dans
l'année (1 à 13), les deux fils s'alternant par semestre comme un emploi
du temps.

| Analyse (7) | S | Algèbre (6) | S |
| --- | --- | --- | --- |
| 1 · Limites et continuité | 1 | 1 · Nombres complexes | 1 |
| 2 · Suites numériques | 1 | 2 · Arithmétique dans ℤ | 1 |
| 3 · Dérivation et étude des fonctions | 1 | 3 · Calcul de probabilités | 2 |
| 4 · Fonctions logarithmiques | 1 | 4 · Lois de composition interne | 2 |
| 5 · Fonctions exponentielles | 2 | 5 · Groupes, anneaux et corps | 2 |
| 6 · Calcul intégral | 2 | 6 · Espaces vectoriels réels | 2 |
| 7 · Équations différentielles | 2 | | |

**Les 13 chapitres SM sont rédigés.** `COURSE_CATALOG` et `CHAPTERS_SM` portent
donc les mêmes 13 slugs : le plan qu'on montre à un élève est le plan qu'il peut
ouvrir. Un test le vérifie, parce que la divergence est silencieuse — un slug de
plan sans document affiche simplement « cours en développement ».

Deux endroits où le contenu source a corrigé l'ébauche précédente :

- **Suites avant Dérivation.** Le chapitre de dérivation liste « Suites
  numériques et raisonnement par récurrence » dans ses propres `## Prérequis`.
- **« Structures algébriques » est deux chapitres**, pas un : le vocabulaire
  (lois de composition interne) est enseigné avant les structures qu'on
  construit dessus (groupes, anneaux, corps).

Sciences Expérimentales reçoit les **7 chapitres d'analyse** et rien d'autre :
son catalogue n'affiche aucun titre de branche, parce que nommer une division
que l'élève ne rencontre jamais est du bruit. Les deux chapitres qui *semblent*
communs — « Nombres complexes » et « Calcul de probabilités » — sont marqués
`['sm']` exprès : les documents rédigés sont les versions SM, et Sciences Exp a
ses propres chapitres, plus légers, sous d'autres noms.

## Marque — repris de `zabaqist.com`

L'application et le site vitrine décrivent **un seul produit**, donc la marque
vient de la source canonique (`/Users/otmane/www/zabaqist/zabaqist.com`).

### Une seule palette

L'application tournait sur **deux verts** : un teal générique `#2CB0A1` sur les
pages de cours, et le vert de marque sur la page d'accueil. Le teal
n'apparaissait nulle part dans la marque. Tout est désormais sur *Mint Tea*,
défini une fois dans `app/globals.css` :

- les jetons Tailwind `zb-*` lisent les variables CSS ;
- le thème Mantine (`ClientLayout`) porte la même rampe en hexadécimal — Mantine
  calcule ses variantes à la compilation et ne peut pas lire une variable CSS —
  et `primaryColor` est `mint`, donc chaque bouton, badge et barre de
  progression Mantine est sur la marque ;
- 41 littéraux hexadécimaux en style *inline* ont été remplacés par le jeton.

**Deux valeurs sont des corrections d'accessibilité mesurées, pas des choix
esthétiques.** `--zb-gold-deep` était `#b8841a` = 3,22:1 sur crème et échouait AA
*dans les deux sens* ; il vaut `#8a5f14` = **5,49:1**. Ne pas l'éclaircir. Le
test le vérifie en peignant la couleur sur un canvas et en relisant le pixel —
analyser la chaîne calculée ne résout pas `oklch()`, et ses composantes ne sont
pas r,g,b.

### Le khatim est la puce

C'est ce qui distingue le produit d'une n-ième application d'apprentissage :
**une seule forme, employée partout où elle veut dire quelque chose** (« ceci est
un élément de liste ») et nulle part ailleurs. `.zb-star-list` dans
`app/globals.css`, appliqué aux listes du document de cours. `inset-inline-start`
pour que la puce se reflète en RTL sans seconde règle.

Les boutons portent une **tablette de couleur** (`0 3px 0 var(--zb-mint-deep)`)
et non l'arête noire dure de Brilliant : la profondeur vient de la teinte propre
du bouton.

| Élément | Où |

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
| `proxy.ts` | Détection et préfixe de locale |
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
- `ExerciseWithSolution`, `MultipleChoiceQuestion`, `QuizPlayer` et
  `DevoirAssignment` sont antérieurs à next-intl : leurs 26 chaînes visibles
  sont désormais dans `exercise`, `quiz` et `homework`.

### Pied de page

Les sept liens du pied de page pointaient vers des pages inexistantes — et Next
les préchargeant, **chaque page de l'application produisait sept 404**. Ils
visent maintenant ce qui existe : les routes de l'application, et le site
vitrine (`zabaqist.com`), qui publie réellement le programme, l'approche, la
mission et la politique de confidentialité, dans les deux langues. `pricing`,
`careers`, `help` et `educators` ont été retirés : rien n'a jamais été derrière
eux, et un lien qui ne mène nulle part coûte plus cher qu'un lien absent.

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

## Figures GeoGebra dans le markdown

Un chapitre est un document, donc une figure doit pouvoir s'écrire *dans* le
document — pas se câbler en JSX. Une clôture le permet :

````
```geogebra
{ "coords": [-1, 8, -3, 3],
  "commands": ["f(x) = ln(x)", "A = (1, 0)", "B = (e, 1)"],
  "style": { "f": { "color": [44, 176, 161], "thickness": 4 } },
  "points": { "A": "(1, 0)", "B": "(e, 1)" } }
```
````

`GeogebraViewer` acceptait déjà une prop `commands` mais n'en faisait rien :
l'API de l'applet n'existe sur `window.ggbApplet` qu'après chargement.
`GeogebraBlock` les applique au bon moment. Le parseur vit dans
`lib/geogebraSpec.ts` et **non** dans le composant : une fonction importée d'un
module `'use client'` n'est qu'une référence côté serveur, et le document est
rendu côté serveur.

## Cours non migrés

Un slug sans `.md` retombe sur `CourseFallback.tsx` (l'ancienne page « Cours en
développement »).

**`fonctions-logarithmiques` a été migré.** C'était 684 lignes de JSX ; c'est
maintenant `content/course/04-fonctions-logarithmiques.md`, servi par le même
pipeline que les autres, à la même URL. Les six onglets survivent, la figure
GeoGebra aussi.

Ce que la migration a coûté : `ExerciseWithSolution` validait les réponses en
LaTeX (`lib/mathValidation.ts`), les checkpoints markdown non — ils reposent sur
l'auto-évaluation. C'est cohérent avec le principe déjà en place (*rien n'est
corrigé automatiquement*), mais c'est une capacité en moins, et
`ExerciseWithSolution`, `DevoirAssignment` et `mathValidation` ne sont plus
référencés par aucune route.
