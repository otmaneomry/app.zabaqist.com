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
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_…
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

## Reste à faire

La progression, l'XP, la filière et les réponses du tunnel vivent encore dans
`localStorage`, répartis sur cinq fichiers : `lib/courseProgress.ts`,
`lib/activity.ts`, `lib/filiere.ts`, `lib/onboarding.ts`,
`lib/progressTracking.ts`.

**Un élève connecté sur son téléphone ne voit toujours rien de ce qu'il a fait
sur son ordinateur.** La base existe désormais, et RLS est en place pour la
protéger — il reste à créer les tables et à y brancher ces cinq fichiers.
