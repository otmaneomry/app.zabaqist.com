# Authentification Google

L'application est fermée : `proxy.ts` renvoie vers `/signin` toute visite d'une
page protégée sans session. La connexion se fait **avec Google uniquement**.

## Ce qui tourne

| | |
| --- | --- |
| Bibliothèque | `next-auth@5` (Auth.js v5) |
| Session | JWT signé dans un cookie — **aucune base de données** |
| Configuration | `auth.ts` |
| Endpoints | `app/api/auth/[...nextauth]/route.ts` |
| Portail | `proxy.ts` (locale + porte, composés) |
| Page | `app/[locale]/signin/page.tsx` + `components/auth/GoogleButton.tsx` |
| Menu compte | `components/auth/AccountMenu.tsx` |

### Public / protégé

| Public | Protégé |
| --- | --- |
| `/`, `/ar` | `/home`, `/progres`, `/demarrer`, `/filiere` |
| `/signin`, `/signup` (redirige) | `/courses`, `/courses/[courseId]`, `/subscribe` |
| `robots.txt`, `sitemap.xml` | `/quiz/[quizId]` |

### Variables d'environnement

```bash
AUTH_SECRET=            # openssl rand -base64 32
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
AUTH_URL=http://localhost:3000        # en prod : l'URL publique exacte
```

`AUTH_URL` doit correspondre **au port réellement servi**. Sinon `auth()`
appelle son propre endpoint de session sur le mauvais port et chaque page
rendue côté serveur tombe en `ECONNREFUSED`.

### Google Cloud Console

Les **Authorized redirect URIs** doivent contenir, à l'identique :

- `http://localhost:3000/api/auth/callback/google`
- `https://<domaine-de-prod>/api/auth/callback/google`

Le matcher de `proxy.ts` exclut `/api`, donc le callback n'est jamais préfixé
par la locale — un `/fr/api/auth/callback/google` ne correspondrait à aucune URI
enregistrée et toute connexion échouerait en `redirect_uri_mismatch`.

## Ce qui a disparu

`stores/useUserStore.ts` (zustand persisté), `authApi.login`, le formulaire
email/mot de passe et les identifiants de test affichés sur la page. Il n'y a
plus de page d'inscription séparée : Google ne distingue pas les deux cas, donc
`/signup` redirige vers `/signin`.

Le choix de la filière était décidé dans le `onSubmit` du faux formulaire. Le
callback Google ne peut pas le faire — la filière est dans `localStorage` — donc
`components/onboarding/FiliereGate.tsx` s'en charge côté client depuis `/home`.

## Tests

`scripts/test-course.mjs` ne peut pas piloter OAuth : le flux quitte l'origine,
demande un vrai compte et affiche un écran de consentement. `auth.ts` expose
donc un provider `credentials` d'identifiant `e2e`, **fermé par deux verrous** :

1. il n'existe pas si `E2E_AUTH_SECRET` n'est pas défini ;
2. quand il existe, l'appelant doit présenter la valeur exacte.

Le garde n'est **pas** `NODE_ENV` : la suite tourne contre un build de
production (`npm run build && npm start`), donc un test sur `NODE_ENV`
supprimerait le provider précisément quand il sert.

Vérifié sur un serveur démarré sans la variable : `/api/auth/providers`
n'annonce que `google`, l'appel au callback `e2e` ne pose aucun cookie de
session, et `/home` répond toujours 307.

```bash
npm run build
AUTH_URL=http://localhost:3111 E2E_AUTH_SECRET=e2e-local-only npm start -- -p 3111 &
npm run test:course     # 178 vérifications
```

## La décision qui reste ouverte

Les sessions JWT ne demandent aucune base de données, mais la progression,
l'XP, la filière et les réponses du tunnel vivent toujours dans `localStorage`,
répartis sur cinq fichiers : `lib/courseProgress.ts`, `lib/activity.ts`,
`lib/filiere.ts`, `lib/onboarding.ts`, `lib/progressTracking.ts`.

**Un élève connecté sur son téléphone ne voit rien de ce qu'il a fait sur son
ordinateur.** Le compte existe, le travail ne le suit pas.

`auth.ts` conserve déjà le `sub` Google dans `session.user.id` — c'est la clé
sur laquelle une base brancherait la progression. La porter plus tard invalide
toutes les sessions existantes ; la garder dès maintenant ne coûte rien.

| Option | Coût | Ce que ça donne |
| --- | --- | --- |
| **Rien de plus** | 0 | Ce qui tourne aujourd'hui. Progression par appareil. |
| **Ajouter une base** | ~6-8 h | La progression suit le compte. Les cinq fichiers changent. |
