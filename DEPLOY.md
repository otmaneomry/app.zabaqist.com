# Mise en production

## Avant de déployer

```bash
npm run check        # tsc --noEmit && eslint .   → 0 erreur attendu
npm run build
E2E_AUTH_SECRET=e2e-local-only npm start -- -p 3111 &
npm run test:course  # 178 vérifications
```

## Vercel — à faire avant le premier déploiement

Les deux variables Supabase doivent être définies **dans le projet Vercel**,
pour `Production` *et* `Preview`. Sans elles, `proxy.ts` ne peut plus joindre
Supabase ; il dégrade désormais proprement (les pages publiques répondent, les
pages privées renvoient vers la connexion) mais **personne ne peut se
connecter**.

```
NEXT_PUBLIC_SUPABASE_URL=https://<ref>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_…
NEXT_PUBLIC_SITE_URL=https://app.zabaqist.com
```

Ne **jamais** définir `E2E_AUTH_SECRET` sur Vercel : cela ouvre le
contournement de test.

Deux choses à ajouter en dehors de Vercel, sinon la connexion échoue :

1. **Google Cloud Console** → l'URI de redirection reste celle de Supabase
   (`https://<ref>.supabase.co/auth/v1/callback`) — inchangée par le
   déploiement.
2. **Supabase → Authentication → URL Configuration** → ajouter le domaine
   Vercel dans *Site URL* et *Redirect URLs*, sinon Supabase refuse de
   renvoyer vers lui après Google.

## Variables d'environnement

| Variable | Défaut | À définir en production |
| --- | --- | --- |
| `NEXT_PUBLIC_USE_MOCK_API` | *(absente = mock actif)* | `false` **quand le backend existe** |
| `NEXT_PUBLIC_API_URL` | `http://127.0.0.1:8000/api` | l'URL réelle de l'API |
| `NEXT_PUBLIC_SUPABASE_URL` | — | **obligatoire** — `https://<ref>.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | — | **obligatoire** — clé publishable du projet |
| `E2E_AUTH_SECRET` | non défini | **ne jamais définir** — ouvre le contournement de test |

**L'API est encore simulée** (`lib/mockApi.ts`). C'est désormais une décision
d'environnement et non une modification de code : un déploiement qui dispose
d'une API pose `NEXT_PUBLIC_USE_MOCK_API=false`.

Tant que le mock est actif, la connexion accepte des comptes de test. Les
identifiants ne sont plus affichés en production (`NODE_ENV`), mais **ils
fonctionnent toujours** — c'est le dernier point bloquant avant une ouverture
publique.

## Ce qui a été durci

| Point | Avant | Après |
| --- | --- | --- |
| Identifiants de test | affichés sur `/signin` et `/signup` | supprimés du bundle de production |
| `/test-quiz` | route livrée | supprimée |
| `…/chapter-N/lesson-M` | route de démonstration, bouton mort | supprimée |
| `USE_MOCK_API` | constante `true` dans le code | pilotée par l'environnement |
| `console.log` | 11, dont un à chaque chargement GeoGebra | 0 en production |
| `robots.txt` / `sitemap.xml` | absents | générés, bilingues (`hreflang`) |
| ESLint | cassé depuis la v9 (`.eslintrc.json` ignoré) | config plate, `npm run lint` fonctionne |
| `package-lock.json.backup` | suivi par git | retiré, `*.backup` ignoré |

## Ce qui reste

- **Backend réel** — voir ci-dessus. Tout le reste en dépend.
- **Modules orphelins** : `ExerciseWithSolution`, `DevoirAssignment`,
  `SimpleMathInput`, `MathInput`, `lib/mathValidation.ts` ne sont référencés par
  aucune route depuis la migration du chapitre écrit à la main. À supprimer, ou
  à rebrancher via une balise de réponse validée dans le markdown.
- **Avertissements ESLint** (15) : tous le même motif d'hydratation depuis
  `localStorage`, délibéré et commenté sur place. Laissés en avertissement pour
  que de nouvelles occurrences restent visibles.
- **Progression stockée sur l'appareil** : effacer les données du navigateur
  efface la progression. Acceptable sans compte, à migrer vers le backend
  ensuite.
