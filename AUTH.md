# Authentification Google

> **État actuel : il n'y a pas d'authentification.**
> `stores/useUserStore.ts` est un store zustand persisté dans `localStorage`, et
> `authApi.login` répond depuis `lib/mockApi.ts`. Aucune session serveur,
> aucune route protégée : `/home`, `/courses` et `/progres` s'ouvrent en tapant
> l'URL, connecté ou non. Ce document décrit ce qu'il faut faire pour que ça
> cesse d'être vrai.

## 1. Ce que toi seul peux faire — Google Cloud Console (~10 min)

1. [console.cloud.google.com](https://console.cloud.google.com) → nouveau projet **Zabaqist**
2. **APIs & Services → OAuth consent screen** → *External* → nom de l'app, email
   de support, logo
3. **Credentials → Create credentials → OAuth client ID → Web application**
4. **Authorized redirect URIs** — ajouter les deux :
   - `http://localhost:3000/api/auth/callback/google`
   - `https://<domaine-de-prod>/api/auth/callback/google`
5. Reporter les identifiants dans `.env.local` :

```bash
AUTH_SECRET=            # openssl rand -base64 32
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
AUTH_URL=http://localhost:3000        # en prod : l'URL publique
```

Rien ne fonctionne tant que l'étape 4 n'existe pas : Google refuse toute URL de
callback non enregistrée, avec `redirect_uri_mismatch`.

`.env.local` ne doit **jamais** être commité — vérifier qu'il est dans
`.gitignore` avant de coller le secret.

## 2. Ce qu'il y a à écrire (~2 h)

| # | Tâche | Fichiers |
| --- | --- | --- |
| 1 | `next-auth@5` (Auth.js v5, la ligne App Router) + provider Google, sessions JWT | `auth.ts`, `package.json` |
| 2 | **Composer le proxy** avec next-intl | `proxy.ts` |
| 3 | Supprimer le simulacre : mock, store zustand, identifiants de test | `lib/api.ts`, `lib/mockApi.ts`, `stores/useUserStore.ts`, `app/[locale]/signin/`, `app/[locale]/signup/` |
| 4 | Protéger les routes côté serveur | `proxy.ts`, `app/robots.ts` |
| 5 | Avatar + menu de déconnexion | `components/Header.tsx` |

### Le point qui casse : le proxy

`proxy.ts` (l'ancien `middleware.ts` : Next 16 a renommé la convention)
exécute aujourd'hui `createMiddleware(routing)` de next-intl.
L'authentification doit **l'envelopper**, pas le remplacer — sinon la
négociation de locale disparaît et toutes les routes `/ar` se cassent.

Un coup de chance dans la configuration actuelle : le matcher exclut déjà
`/api`, donc le callback OAuth n'est pas préfixé par la locale. C'est la
première chose qui casse d'habitude dans une application Next bilingue.

### Public / protégé

| Public | Protégé |
| --- | --- |
| `/`, `/ar` | `/home` |
| `/signin` | `/courses`, `/courses/[courseId]` |
| `robots.txt`, `sitemap.xml` | `/progres`, `/demarrer`, `/filiere`, `/subscribe` |

Les routes protégées doivent aussi passer en `disallow` dans `app/robots.ts`.

## 3. La décision qui compte : base de données ou non

Google + sessions JWT **ne demande aucune base de données**. Mais la progression,
l'XP, les séries, la filière et les réponses du tunnel d'accueil vivent dans
`localStorage`, répartis sur cinq fichiers : `lib/courseProgress.ts`,
`lib/activity.ts`, `lib/filiere.ts`, `lib/onboarding.ts`,
`lib/progressTracking.ts`.

Conséquence directe : **un élève se connecte avec Google sur son téléphone et
ne voit rien de ce qu'il a fait sur son ordinateur.** Le compte et le travail
restent sans lien. Pour un produit payant c'est un motif de remboursement, pas
un détail.

| Option | Coût | Ce que ça donne |
| --- | --- | --- |
| **Auth seule** | ~2 h | Connexion réelle, routes fermées. Progression par appareil. |
| **Auth + base** | ~6-8 h de plus | La progression suit le compte. Les cinq fichiers ci-dessus changent. |

Si la base se fait un jour, la choisir **maintenant** : Supabase donne l'auth
Google *et* Postgres en une seule intégration, alors que partir sur Auth.js seul
puis ajouter une base demande de refaire la couche session.

## 4. Tests

24 des 169 vérifications de `scripts/test-course.mjs` se connectent via le
formulaire simulé. OAuth Google ne se pilote pas ainsi : prévoir un provider
`credentials` réservé aux tests, fermé par `NODE_ENV !== 'production'` — la même
garde que celle qui retire déjà les identifiants de test du bundle de prod.
