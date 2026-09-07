# app.zabaqist.com

L'application Zabaqist : le programme officiel de mathématiques du 2ᵉ Bac
marocain, en leçons qu'un élève manipule au lieu de les regarder.

Sciences Mathématiques et Sciences Expérimentales, en français et en arabe.
`zabaqist.com` est le site vitrine ; ceci en est l'implémentation.

## Démarrer

```bash
npm install
npm run dev            # http://localhost:3000
```

Il faut un `.env.local` avec les deux variables Supabase — voir
[AUTH.md](AUTH.md).

## Vérifier

```bash
npm run check          # tsc --noEmit && eslint .   → 0 erreur attendu
npm run build
E2E_AUTH_SECRET=e2e-local-only npm start -- -p 3111 &
npm run test:course    # 182 vérifications dans un vrai navigateur
```

La suite n'est pas une batterie de tests unitaires : elle pilote l'application
construite dans Chrome, parce que tout ce qui a cassé pendant la construction
était de nature intégrative — une frontière RSC, un `display: contents`, un
attribut `start` perdu, une réécriture de locale qui avalait un callback OAuth.

## Où lire

| Document | Sujet |
| --- | --- |
| [DYNAMIC_COURSES.md](DYNAMIC_COURSES.md) | Le pipeline markdown → cours, la marque, le bilingue |
| [AUTH.md](AUTH.md) | Connexion Google, base de données, synchronisation |
| [DEPLOY.md](DEPLOY.md) | Mise en production, variables d'environnement |
| [BRILLIANT_WORKFLOW.md](BRILLIANT_WORKFLOW.md) | L'étude de Brilliant.org, et ce qui en a été refusé |

## Ajouter un chapitre

Deux étapes : déposer le `.md` dans `content/course/`, ajouter une ligne dans
`COURSE_CATALOG` (`lib/courseCatalog.ts`). Pas de JSX, pas d'onglets à
déclarer — le plan du chapitre EST la navigation.
