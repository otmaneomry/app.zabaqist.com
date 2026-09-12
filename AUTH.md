# Authentification — Supabase + Google

L'application est fermée : `proxy.ts` renvoie vers `/signin` toute visite d'une
page protégée sans session. La connexion se fait **avec Google uniquement**,
via **Supabase Auth**.

## Pourquoi Supabase et pas Auth.js

Auth.js a été écrit puis remplacé, en connaissance de cause. La raison tient en
une ligne : `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` part dans **chaque
navigateur**. Cette clé n'est sans danger que parce que Row Level Security se
tient derrière — et RLS répond `auth.uid()` à partir du JWT **de Supabase**.

Avec Auth.js, Postgres ne voyait jamais ce JWT : `auth.uid()` restait nul, RLS
ne pouvait rien protéger, et toute la sécurité retombait sur du code serveur
qu'il aurait fallu écrire sans jamais se tromper. Autrement dit, on aurait payé
Supabase pour ne pas s'en servir.

## Ce qui tourne

| | |
| --- | --- |
| Bibliothèques | `@supabase/supabase-js`, `@supabase/ssr` |
| Session | cookies Supabase, rafraîchis à chaque requête dans `proxy.ts` |
| Client navigateur | `lib/supabase/client.ts` |
| Client serveur | `lib/supabase/server.ts` |
| Portail | `proxy.ts` — locale, rafraîchissement, porte |
| Retour OAuth | `app/auth/callback/route.ts` |
| Page | `app/[locale]/signin/` + `components/auth/GoogleButton.tsx` |
| Menu compte | `components/auth/AccountMenu.tsx` |

### L'ordre dans `proxy.ts` est le fichier entier

1. **next-intl d'abord**, et c'est sa réponse qui est renvoyée : c'est elle qui
   réécrit `/courses` en `/fr/courses` et pose `NEXT_LOCALE`.
2. **Supabase rafraîchit ensuite, sur cette réponse-là.** Un composant serveur
   ne peut pas écrire de cookie : si le rafraîchissement n'a pas lieu ici, il
   n'a lieu nulle part, et l'élève est déconnecté sans raison à l'expiration du
   jeton. *C'est le bug classique de Supabase sur Next : créer une seconde
   réponse et écrire les jetons sur celle qu'on jette.*
3. **La porte décide en dernier**, et ne remplace la réponse que pour rediriger
   — en recopiant les cookies déjà posés.

`getUser()` et non `getSession()` : le jeton est revalidé auprès de Supabase au
lieu d'être cru sur parole depuis un cookie que le navigateur pourrait avoir
écrit lui-même.

### Public / protégé

| Public | Protégé |
| --- | --- |
| `/`, `/ar` | `/home`, `/progres`, `/demarrer`, `/filiere` |
| `/signin`, `/signup` (redirige) | `/courses`, `/courses/[courseId]`, `/subscribe` |
| `/auth/callback` | `/quiz/[quizId]` |
| `robots.txt`, `sitemap.xml` | |

`/auth/callback` **doit** rester public : une porte devant lui renverrait chaque
connexion vers `/signin` avant même l'échange du code.

### Variables d'environnement

```bash
NEXT_PUBLIC_SUPABASE_URL=https://<ref>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<colle-la-vraie-cle-publishable>
```

C'est tout. Pas d'`AUTH_URL` : le callback est construit à partir de l'origine
de la requête, donc localhost, une préversion et la production reviennent
chacune chez elles sans variable à oublier.

### Console Google

Depuis le passage à Supabase, l'URI de redirection à déclarer n'est plus celle
de l'application mais **celle de Supabase** :

```
https://<ref>.supabase.co/auth/v1/callback
```

## Tests

OAuth ne se pilote pas depuis un script — le flux quitte l'origine et affiche un
écran de consentement — et se connecter pour de vrai ferait dépendre 178
vérifications locales d'un service distant. `lib/e2e.ts` définit donc un cookie
`zb-e2e`, **fermé par deux verrous** :

1. il n'est honoré que si `E2E_AUTH_SECRET` est défini ;
2. il doit alors porter exactement cette valeur.

Le garde n'est **pas** `NODE_ENV` : la suite tourne contre un build de
production, donc un test sur `NODE_ENV` désactiverait le contournement
précisément quand il sert.

Ce cookie **ne crée aucune session Supabase**. Une requête contournée n'a pas
d'`auth.uid()`, donc RLS lui refuse toutes les lignes : la base ne fait jamais
partie du marché, et l'identité de `E2E_USER` est une étiquette pour l'en-tête,
pas une clé.

Vérifié sur un serveur démarré sans la variable : `/home` répond 307 avec ou
sans le cookie.

```bash
npm run build
E2E_AUTH_SECRET=e2e-local-only npm start -- -p 3111 &
npm run test:course     # 178 vérifications
```

## Bêta fermée — qui a le droit d'entrer

Tant que le produit n'est pas public, seules les adresses présentes dans
`public.allowed_emails` peuvent se connecter. La liste est **dans la base**, pas
dans le code : inviter quelqu'un est une ligne SQL, pas un déploiement.

```sql
insert into public.allowed_emails (email, note)
values (public.normalize_email('prenom.nom@gmail.com'), 'Prof de maths')
on conflict (email) do nothing;
```

Le contrôle a lieu dans `app/auth/callback/route.ts`, juste après l'échange du
code : si l'adresse n'est pas invitée, la session est immédiatement fermée et
l'élève revient sur `/signin?error=not-allowed`, avec un message qui dit que
c'est une bêta fermée — sinon il réessaie indéfiniment la même adresse.

Deux détails qui comptent :

- **La table n'a aucune policy RLS.** Elle est donc invisible via la clé
  publishable, qui part dans chaque navigateur. Le seul accès est
  `is_email_allowed(addr)`, une fonction `security definer` qui ne rend qu'un
  booléen : impossible d'en extraire la liste des invités.
- **Gmail ignore les points.** `omry.otmane@gmail.com` et `omryotmane@gmail.com`
  sont le même compte, et Google renvoie la forme sans points — une liste qui
  stocke la forme pointée refuserait la connexion réelle.
  `public.normalize_email()` normalise les deux côtés.

## Quand quelqu'un n'arrive pas à entrer

Deux commandes, dans cet ordre.

### `npm run whois -- <adresse>`

Répond à une seule question : **la liste dit-elle oui ?** Elle interroge
`is_email_allowed` comme le fait la connexion, avec la casse et les points de
Gmail, donc sa réponse est celle que l'élève obtiendra.

### `npm run events`

Lit `public.auth_events`, le journal écrit à chaque tentative.

```
npm run events                  les 30 dernières lignes
npm run events -- --denied      les refus seulement
npm run events -- --who omry    une personne
npm run events -- --event signin_ok
npm run events -- --n 100
```

Un refus porte sa raison :

| `event` | ce que ça veut dire |
| --- | --- |
| `signin_ok` | entré |
| `signin_denied` | la liste a dit non — `detail.reason` le précise |
| `signin_check_failed` | la vérification elle-même a échoué, code dans `detail` |

La distinction est le tout : `signin_denied` est une décision,
`signin_check_failed` est une panne, et les deux ressemblaient auparavant à
« ça ne marche pas ».

### Il faut la clé secrète

Le journal est scellé côté navigateur : RLS est actif et il n'existe aucune
politique `SELECT`, donc la clé publiable — celle qui part dans chaque page —
ne voit qu'une liste vide. C'est voulu : la liste de qui a essayé de se
connecter n'a rien à faire dans un navigateur. La lecture demande donc la clé
secrète, dans `.env.local` (ignoré par git) :

```
SUPABASE_SECRET_KEY=<Project Settings → API Keys → secret>
```

Sans elle, `npm run events` explique où la trouver au lieu de planter.

### Le journal ne sert pas qu'à l'authentification

`event` est du texte libre. Tout ce qui mérite une ligne durable et
append-only — une synchronisation qui échoue, une migration jouée — peut
appeler `log_auth_event` et apparaîtra dans le même flux. Seul le nom de la
table est spécifique à l'authentification.

### Ce que le journal a déjà trouvé

Le 8 septembre 2026, un compte pourtant invité s'est vu refuser l'entrée. La
ligne `signin_denied` disait `reason: not_on_allowlist` — donc la liste avait
bien répondu « non ». La cause : la ligne stockée dans `allowed_emails` ne
l'était pas sous forme normalisée. `is_email_allowed` normalise l'adresse
**qu'on lui donne**, puis la compare à l'adresse **telle qu'elle est
stockée** : une ligne saisie avec des points ne correspond donc à rien.

C'est exactement le cas que le déclencheur de `0002_auth_events.sql` empêche
désormais, et que sa reprise a corrigé. Le symptôme au niveau du vérificateur
est reconnaissable : `dotted=false plain=false` — **les deux** orthographes
échouent, puisque seule l'entrée est normalisée.

## La base

`supabase/migrations/0001_init.sql`, à coller dans **Supabase → SQL Editor**.
Réexécutable sans casse.

| Table | Remplace |
| --- | --- |
| `profiles` | `lib/filiere.ts`, `lib/onboarding.ts` |
| `course_progress` | `lib/progressTracking.ts` |
| `checkpoints` | `lib/courseProgress.ts` |
| `activity` | `lib/activity.ts` |
| `allowed_emails` | — (bêta fermée) |

Chaque table porte la même règle RLS : `auth.uid()` doit être le propriétaire de
la ligne. C'est Postgres qui décide, pas le code serveur — la raison même du
passage à Supabase Auth.

Le profil est créé par un trigger sur `auth.users`, donc dès la première
connexion, sans aller-retour depuis l'application.

## La synchronisation

`lib/sync.ts` + `components/SyncProvider.tsx`.

Les cinq magasins sous `lib/` écrivent toujours dans `localStorage`, exactement
comme avant : rien au-dessus d'eux n'a changé, et l'application continue de
fonctionner sans réseau. Ce que la synchronisation change, c'est le statut de
`localStorage` — un **cache** de Postgres, et non plus la seule copie.

- **À l'arrivée**, `pullAll()` lit les quatre tables et fusionne dans le cache.
- **À chaque changement**, `pushAll()` renvoie tout, avec 1,5 s de regroupement.
  Aucun écrivain n'a eu besoin d'être réécrit : ils annoncent déjà tous leurs
  changements (`zabaqist:progress`, `zabaqist:filiere`, `zabaqist:activity`,
  `zabaqist:onboarding`), et c'est à ces événements que le provider s'abonne.
- **À la mise en arrière-plan** (`visibilitychange`, pas `beforeunload` : sur
  mobile un onglet est souvent tué sans que ce dernier ne se déclenche jamais).

### La règle de fusion : union et maximum, jamais « le dernier gagne »

La progression ne fait que croître — une section lue reste lue, un checkpoint
tenté reste tenté, les secondes s'accumulent. Prendre l'union des ensembles et
le plus grand de chaque nombre **ne peut pas perdre une section ni un
checkpoint**, et n'exige aucun accord d'horloge entre un téléphone et un
ordinateur.

La limite est assumée : les compteurs cumulatifs (secondes lues, tallies
quotidiens) s'additionnent, et le maximum de deux totaux n'est pas leur somme.
Deux appareils partis de 100 s et ayant lu 20 s et 30 s hors ligne se
rejoignent à 130 et non à 150. Ce qui est en jeu est une statistique de
lecture, pas le travail de l'élève.

« Le dernier gagne » laisserait un onglet resté ouvert toute la nuit effacer une
matinée de lecture — la seule panne qu'un élève ne pardonnerait pas et ne
saurait jamais décrire précisément.

Deux exceptions assumées :

- **La filière distante n'est adoptée que si l'appareil n'en a aucune.** Un
  élève qui vient d'en changer ici ne doit pas la voir annulée par une ligne
  périmée.
- **`hints` prend le maximum**, pour que la pénalité d'XP déjà payée sur un
  appareil ne soit pas remboursée sur un autre.

### Silencieux par choix

Ni indicateur, ni « synchronisation… ». Les lectures viennent de
`localStorage` et sont instantanées ; un élève qui vient de répondre à un
checkpoint doit qu'on lui parle de sa réponse, pas d'un appel réseau. Un envoi
qui échoue n'est pas signalé non plus : l'événement suivant le rejoue, et le
travail est de toute façon en sûreté sur l'appareil.

### Ce qui n'est pas synchronisé

Une requête passée par le contournement e2e n'a pas d'`auth.uid()` : le
provider n'est donc pas monté pour elle. Sans cela, la synchronisation
réessaierait indéfiniment contre une base qui a raison de refuser.
