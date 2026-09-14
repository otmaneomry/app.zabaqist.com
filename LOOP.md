# Boucles — vérification automatique

D'après [loop-engineering](https://github.com/cobusgreyling/loop-engineering) :
*« Stop prompting. Design the loop. Get a score. »* — concevoir un système qui
**découvre le travail, le vérifie et garde l'état**, plutôt que de reposer sur
quelqu'un qui pense à poser la question.

L'escalade se fait dans cet ordre, et pas plus vite :

| Niveau | Ce que la boucle fait | Quand y passer |
| --- | --- | --- |
| **L1** | rapporte, ne touche à rien | maintenant |
| **L2** | agit, sous relecture humaine | quand L1 a eu raison une semaine |
| **L3** | agit seule | quand L2 n'a rien cassé |

## La règle avant toutes les autres

**Un contrôle qui ne peut pas échouer est pire que pas de contrôle**, parce
qu'il achète de la confiance sans rien vérifier. Trois formes reviennent, et
toutes les trois ont été trouvées ici :

- **l'oracle muet** — l'assertion s'exécute mais son résultat est vrai quoi
  qu'il arrive (`ok(true, …)`, une boucle sur un tableau vide, un `fetch` qui
  suit la redirection de la porte et lit `/signin`) ;
- **le contrôle qui a cessé de tourner** — il ne dit rien, et le silence se lit
  comme un succès (`db:check` sans identifiants en CI, un `catch {}` autour d'un
  JSON qui ne parse plus) ;
- **le contrôle qui mesure autre chose** — il lit un commentaire, un nom de
  dossier, une chaîne que next-intl met dans *toutes* les pages.

D'où les deux règles d'écriture de ce dépôt :

1. **Aucun compte n'est écrit en prose.** Chaque script imprime le sien. Trois
   nombres différents étaient notés comme des faits — 189 dans `ci.yml`, 189
   dans `prod-check.mjs`, ~236 dans `CLAUDE.md` — et les trois étaient faux.
2. **Chaque réparation d'un vérificateur se prouve par injection.** On introduit
   la panne, on montre le rouge, on restaure, on montre le vert. Les tableaux
   plus bas sont cette preuve.

## Boucle 1 — la structure de la base (L1)

```bash
npm run db:check
```

Elle compare **trois sources** et signale leurs désaccords :

| Source | Ce que c'est |
| --- | --- |
| **Déclarée** | `supabase/migrations/*.sql` — la forme qu'on a écrite |
| **Attendue** | `lib/sync.ts` et les cinq magasins — ce que l'application demande |
| **Vivante** | le projet Supabase — ce qui existe réellement |

### Ce qu'elle vérifie

Le nombre exact est imprimé à chaque exécution, sous la forme
`N of M checks ran` — *M* est ce qu'elle déclare, *N* ce qu'elle a réellement pu
exécuter, et l'écart est détaillé par identifiant.

- RLS activé sur **chaque** table, et une policy sur chacune — sauf
  `allowed_emails` et `auth_events`, où l'absence de policy *est* la protection.
- `on delete cascade` vers `auth.users`, sinon supprimer un compte laisse ses
  lignes derrière lui.
- **Chaque colonne** envoyée à Postgres, et la **table** à laquelle elle est
  envoyée. Le lecteur analyse `.from('table')` puis la chaîne d'appels
  (`select`, `eq`, `upsert`, `insert`, `update`), résout les littéraux et les
  variables, et dit quand il n'a pas su lire un argument.
- Chaque fonction appelée par `.rpc('…')` est déclarée quelque part en SQL.
- Chaque table déclarée existe vraiment dans le projet.
- Une lecture anonyme ne renvoie **aucune ligne**.
- Une écriture anonyme est **refusée** sur chaque table, par la policy (`42501`)
  et pas par une clé étrangère.
- La liste blanche répond encore, et replie toujours les points de Gmail.
- Le hook d'inscription de `0004` existe, **et refuse vraiment** une adresse non
  invitée.

### Ce qu'elle ne peut pas vérifier, et qu'elle dit

`0004_signup_hook.sql` le note dans son propre en-tête : *« Ce fichier ne suffit
pas. Le hook doit être activé dans le tableau de bord Supabase. »* Une fonction
définie et jamais appelée est, vue du SQL, indiscernable d'une fonction qui
protège la bêta. Or le contrôle par requête (`is_email_allowed`) n'existe que
dans `app/[locale]/(with-header)/layout.tsx`, et `/filiere`, `/quiz`,
`/quiz/[quizId]` et le catch-all sont **hors** de ce groupe : si l'interrupteur
est éteint, une session obtenue par un échange PKCE direct — exactement le trou
que `0004` ferme — atteint ces routes.

Seule l'API Management de Supabase sait dire si un hook est **activé**, et ni la
clé publiable ni la clé secrète ne peuvent la lire. Donc :

- avec `SUPABASE_ACCESS_TOKEN` dans l'environnement, `hook-enabled` est vérifié
  pour de bon ;
- sans lui, il est compté comme **NOT RUN**, nommé, et accompagné d'un
  avertissement qui donne le chemin exact : *Authentication → Hooks → Before
  User Created → Postgres → `public.hook_restrict_signup_to_allowlist`*.

Un contrôle qui n'a pas tourné ne peut ni passer ni être déclaré **FIXED**.

### Identifiants

`.env.local` **puis** `process.env`, l'environnement l'emportant. Lire le seul
fichier voulait dire qu'en CI — où il est gitignoré, donc absent — quatorze
contrôles prenaient silencieusement la branche « ignoré » : toutes les sondes
RLS, toutes les écritures anonymes, la liste blanche. Les variables de `ci.yml`
étaient décoratives, le script ne les voyait pas.

Un hôte réservé (`.invalid`, `.example`, `.test`) est reconnu comme un
bouchon : la moitié vivante est **sautée bruyamment**, ni échouée ni réussie.
`localhost` n'en fait pas partie — `supabase start` y sert un vrai projet.

### Pourquoi elle existe

La panne qu'elle attrape est **silencieuse**. Une colonne renommée dans le SQL
et pas dans `sync.ts` ne lève aucune erreur : PostgREST accepte l'écriture,
jette le champ inconnu, et la progression d'un élève cesse d'être synchronisée
pendant que tous les écrans continuent d'avoir l'air normaux.

Les vérifications de `scripts/test-course.mjs` ne peuvent pas la voir : elles ne
se connectent jamais pour de vrai.

### Le vérificateur a été vérifié

Un contrôleur qui ne dit jamais rien ne vaut rien. Chaque panne ci-dessous a été
injectée volontairement, détectée, puis restaurée — et le vert est revenu.

| Panne injectée | Détectée |
| --- | --- |
| colonne renommée dans `sync.ts` | ✓ `sends fields no table declares` |
| RLS retiré d'une table | ✓ `checkpoints: RLS is not enabled` |
| policy ajoutée sur `allowed_emails` | ✓ `meant to be unreachable from the browser` |
| table inexistante dans `sync.ts` | ✓ `which no migration declares` |

Second passage, sur les trous trouvés dans le vérificateur lui-même
(2026-09-14). Les pannes « vivantes » ont été injectées avec un faux PostgREST
local plutôt que contre le vrai projet : la boucle ne modifie rien, nulle part.

| Panne injectée | Détectée |
| --- | --- |
| `track:` → `trak:` dans l'upsert `profiles` | ✓ `profiles.trak (upsert)` — **restait vert avant** |
| ni `.env.local` ni variables d'environnement | ✓ la moitié vivante comptée `skipped`, chaque identifiant nommé |
| identifiants fournis par l'environnement seul | ✓ tout tourne sauf `hook-enabled` — la moitié vivante s'exécute enfin |
| `NEXT_PUBLIC_SUPABASE_URL=https://ci.invalid` | ✓ sauté bruyamment, jamais confondu avec un succès |
| fuite réelle ouverte + `.env.local` retiré | ✓ `STILL OPEN, not re-tested: leak-profiles` — **disait `FIXED` avant** |
| lecture anonyme renvoyant une ligne | ✓ `profiles: returns rows to an anonymous caller` |
| écriture anonyme acceptée | ✓ `an ANONYMOUS WRITE was not refused by RLS`, sur les six tables |
| liste blanche admettant un inconnu | ✓ `admits an address that was never invited` |
| hook absent du projet | ✓ `is in the migrations but not in the project` |
| hook présent mais laissant passer | ✓ `the signup hook does NOT refuse an uninvited address` |

C'est ce qui autorisera un jour le passage en L2 — pas l'ancienneté.

### État

`.loop/db-check.json` (hors dépôt). Chaque exécution dit ce qui est **NEW**,
**FIXED**, ou **STILL OPEN, not re-tested**. Cette troisième colonne est la
correction de fond : `FIXED` se calculait comme « était signalé avant, ne l'est
plus », ce qui confond *réussi* et *jamais évalué*. La mémoire du problème est
reportée d'une exécution à l'autre tant que son contrôle n'a pas re-tourné.

### Sortie

`1` si un contrôle échoue, `0` sinon. Les avertissements ne font jamais échouer
la commande : une boucle qui crie au loup finit par être ignorée.

## Boucle 2 — prêt pour la production (L1)

```bash
npm run prod:check
```

Classée par ce que chaque constat coûte :

| Niveau | Sens |
| --- | --- |
| **blocker** | empêche une mise en ligne ; fait échouer la commande |
| **should** | dette réelle, à traiter avant le lancement |
| **note** | jugement humain requis |

Elle vérifie des choses **démontrables depuis l'arborescence** : aucun secret
en clair ni fichier `.env` commité, `getUser()` et non `getSession()` dans la
porte, les pages privées interdites aux robots, chaque chapitre du catalogue
présent sur le disque, chaque image existante, parité des clés fr/ar, absence
de `console.log` livré, en-têtes de sécurité, supervision d'erreurs, CI.

Ce qu'elle ne fait **pas** : juger la qualité d'un texte ou d'une pédagogie.
Cela appartient à une personne, pas à une boucle.

### Les trois refus du produit, écrits comme des propriétés

`CLAUDE.md` en énonce trois. Ils étaient contrôlés par des listes noires de
l'erreur déjà commise : une regex sur une seule page, quatre chaînes
littérales, trois clés de traduction. Une liste noire attrape ce qui est arrivé
une fois. Ce sont maintenant des propriétés :

- **Aucun classement.** Un mot de classement compte comme un constat *sauf* si
  une négation le précède immédiatement. « Sans classement public » et
  « لا ترتيب » sont le produit qui dit à voix haute qu'il ne classe pas ;
  exempter ces clés une par une aurait été refaire une liste noire. Le même
  balayage est fait sur **toutes les pages rendues**, dans les deux langues, en
  lisant aussi le texte que `display: none` cache — `innerText` ne le voit pas.
- **Rien d'inventé.** La forme est le constat : un nombre **littéral** — jamais
  un placeholder ICU, qui est rempli par des données qui existent — à côté d'un
  nom qui en fait une affirmation sur des personnes, des avis, ou la durée du
  cours ; une citation signée ; un actif chargé depuis un hôte qui n'est pas le
  nôtre. `onboarding.objectif-10` = « 10 min » passe sans être nommé : c'est
  l'élève qui choisit son objectif, pas le produit qui affirme quoi que ce soit.
- **Aucune correction automatique.** La machinerie doit être absente : aucun
  champ de bonne réponse dans les sources de l'auto-évaluation, `checklist`
  toujours `string[]`, le vocabulaire des verdicts toujours les trois mots de
  l'élève, aucun rapport calculé sur la justesse. **Une exception assumée** : la
  démonstration de la page d'accueil *dit* quelle réponse est juste. Elle est
  écrite à la main par le pédagogue, elle n'est ni stockée ni comptée, et
  `test:course` l'affirme positivement. Les deux scripts portent un commentaire
  qui le dit — ce n'est pas un oubli à « corriger ».

### Elle a déjà trouvé ce qu'une relecture avait laissé passer

- `app/robots.ts` n'interdisait pas `/home` — la seule page du shell connecté
  que personne n'avait listée.
- `app/sitemap.ts` et `app/robots.ts` annonçaient `zabaqist.com`, le site
  vitrine, alors que chaque URL listée n'est servie que par cette application.
  Les robots étaient envoyés vers des pages qui répondent 404 là-bas.

Le second point, la boucle ne le voyait pas non plus au premier passage : il a
été trouvé en relisant ce qu'elle signalait, puis **ajouté à la boucle**. C'est
le cycle attendu — un vérificateur apprend de ce qu'il a manqué.

### Le vérificateur a été vérifié

| Panne injectée | Détectée |
| --- | --- |
| ligne de garde supprimée de `lib/siteUrl.ts`, commentaire gardé | ✓ `publishes a localhost origin in a production build` — **restait vert avant**, la regex lisait l'en-tête |
| `ci.yml` remplacé par un workflow qui fait `echo hello` | ✓ `the CI workflow never runs npm run check, …` — **restait vert avant** (le dossier existait) |
| `continue-on-error: true` remis sur `db:check` | ✓ `a CI step carries continue-on-error: true` |
| `/home` déplacé dans `INDEXABLE_PATHS` | ✓ `/home is offered for indexing` — **restait vert avant**, `robots.includes('/home')` lisait une assertion de build |
| « Classement de la semaine… » ajouté aux catalogues | ✓ `message(s) offer a ranking, league or leaderboard` |
| le même en anglais (« ranking ») | ✓ détecté — `rang\b` ne le matchait pas |
| « Aucun classement, jamais de ligue, no leaderboard, sans podium » | ✓ **reste vert** : ce sont des négations, pas des offres |
| « Plus de 10 000 avis 5 étoiles » | ✓ `state a number of students, reviews or ratings` |
| « 6 fois plus de chances de réussir » | ✓ `claim an effect no measurement backs` |
| « … » — Ministère | ✓ `read as a quoted endorsement attributed to someone` |
| « 40 heures de cours vidéo » | ✓ `claim a duration for the course` |
| `<img src="https://brilliant.org/…">` | ✓ par les deux contrôles |
| `<img src="https://cdn.some-analytics.io/…">` | ✓ `loaded from a domain this product does not own` — invisible pour la liste noire `brilliant.org` |
| commentaire citant `https://evil.com` dans `lib/safePath.ts` | ✓ **reste vert** : un commentaire n'est pas une requête |
| `const correctAnswer = 2` dans `SelfCheck.tsx` | ✓ `carry a correct-answer or score field` |
| `got.length / items.length` | ✓ `compute a mark out of the reader's verdicts` |
| `checklist: { text, answer }[]` | ✓ `no longer a plain string[]` |
| `Verdict` élargi à `'incorrect'` | ✓ `no longer the reader's three self-judgements` |
| `messages/fr.json` cassé | ✓ `orphan-namespaces` compté **NOT RUN** — **était déclaré `FIXED` avant** |

### État

`.loop/prod-check.json`, même contrat que la boucle 1 : `ran`, `skipped`,
`carried`. Un `catch {}` autour du parsing de `messages/fr.json` suffisait à
faire disparaître `orphan-namespaces` de la liste, donc à le déclarer réparé,
donc à l'effacer de la mémoire.

## Les deux ensemble

```bash
npm run loop        # db:check PUIS prod:check, quoi qu'il arrive
```

C'était `db:check && prod:check`. `&&` court-circuite : une base rouge cachait
**tous** les bloqueurs de production, alors que `CLAUDE.md` dit au lecteur de
lancer `npm run loop` et d'attendre « no blockers ». Les deux tournent
maintenant et la commande échoue si l'une échoue.

## Boucle 3 — l'application réelle, dans un vrai navigateur

```bash
npm run build && E2E_AUTH_SECRET=e2e-local-only npm start -- -p 3111
npm run test:course
```

Elle imprime son propre total (`all N checks passed`). Quelques réparations qui
valent d'être connues, parce qu'elles décrivent des façons de se tromper plutôt
que des bugs ponctuels :

- **La porte répond 200.** `proxy.ts` redirige toute route non publique vers
  `/signin`, `fetch` suit la redirection, et `/signin` répond 200. Trois
  contrôles étaient bâtis là-dessus :
  `fetch('/totally-made-up-gated-route')` revenait `ok`. Tout passe désormais
  par `get()`, qui porte le cookie **et** ne suit pas les redirections.
- **React 19 en production n'écrit pas « Hydration failed ».** Le détecteur de
  désynchronisation filtrait `/hydrat|did ?n.t match/i` ; la suite tourne contre
  un build de production, où React émet `Minified React error #418` et une URL
  `react.dev/errors/418`. Zéro occurrence du texte attendu dans `react-dom` ni
  dans `.next/static/chunks` : **le seul garde-fou de « ne jamais lire l'état de
  l'appareil pendant le rendu » ne pouvait pas se déclencher.**
- **next-intl sérialise tout le catalogue dans chaque page.**
  `/ar/quiz/does-not-exist` répond 404 et contient quand même
  `ar.selfcheck.title`. `html.includes(<une traduction>)` ne peut donc pas
  échouer ; ces assertions portent maintenant sur des **éléments rendus**.
- **`!(await x.isVisible().catch(() => false))`** est vrai quand l'élément est
  caché *et* quand il est absent — et le `.catch` avale la violation de mode
  strict de Playwright, donc deux boîtes de dialogue se lisaient « une seule
  fois ». On compte les éléments, et chaque « doit être caché » est affirmé avec
  son remplaçant.
- **`ok(true, …)`** imprimait un ✓ pour sept choses jamais évaluées. Six étaient
  adossées à un `waitForURL` qui *lève* — donc un échec arrivait en rejet non
  géré, tuait la suite au milieu du fichier, emportait tous les contrôles
  suivants, et `✗ N check(s) failed` ne s'imprimait jamais. Un échec doit être
  une ligne rouge parmi d'autres.

### Le vérificateur a été vérifié

| Panne injectée | Détectée |
| --- | --- |
| route inexistante dans les cibles du héros | ✓ `every hero and nav target returns 200` — **revenait `ok` avant** |
| désynchronisation d'hydratation réelle, injectée dans le HTML servi | ✓ `Minified React error #418` capté ; l'ancien filtre en captait **zéro** |
| page « à venir » remplacée par un chapitre qui existe | ✓ le titre rendu est absent |
| assertions arabes pointées sur une page 404 | ✓ l'élément n'est pas là ; `html.includes` restait vert |
| lien « hamburger » introuvable à 390px | ✓ la paire nav/hamburger tombe |
| deuxième boîte de dialogue clonée dans le DOM | ✓ `×2` ; `.catch(() => false)` la lisait comme « aucune » |
| markdown livré sous forme JSON-échappée (`\n` en deux caractères) | ✓ l'aiguille échappée est cherchée aussi |
| navigation qui n'arrive jamais | ✓ un contrôle rouge, la suite continue |
| liens de quiz retirés de toutes les pages | ✓ `every chapter offers its self-assessment at all` : `26 page(s) carry no quiz link` — **zéro itération = zéro constat avant** |
| fichier ajouté dans `content/course/` seul | ✓ `carries no chapter critique/course/ has never seen` |

## Le drapeau d'indexation, et pourquoi il fallait le construire deux fois

`NEXT_PUBLIC_ALLOW_INDEXING` est substitué **à la compilation**. La suite lisait
`process.env` au moment du test, c'est-à-dire ce qu'on lui demandait d'attendre
et non ce que l'application servait ; et le drapeau n'était positionné nulle
part — ni dans `ci.yml`, ni dans le script. Les quatre assertions sur la
transition que `CLAUDE.md` décrit comme dangereuse n'avaient **jamais tourné**.

La suite lit désormais la posture **sur l'application** (la balise `robots`),
vérifie les six signaux de ce côté-là, et n'utilise l'environnement que pour
dire « ce n'est pas le build que tu voulais tester ». `ci.yml` construit et
teste dans les deux états (`matrix.indexing: ['0', '1']`).

## Passer en L2

Rien n'est automatique aujourd'hui. Pour mettre celle-ci sur un rythme :

```
/loop 1d npm run db:check
```

À ne faire qu'après une semaine de L1 sans faux positif. Et à garder en tête —
c'est l'avertissement du dépôt d'origine : *« Loop engineering amplifies
judgment. Token costs can explode. »*
