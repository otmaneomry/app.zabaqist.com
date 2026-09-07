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

### Ce qu'elle vérifie (37 contrôles)

- RLS activé sur **chaque** table, et une policy sur chacune — sauf
  `allowed_emails`, où l'absence de policy *est* la protection.
- `on delete cascade` vers `auth.users`, sinon supprimer un compte laisse ses
  lignes derrière lui.
- Chaque table et **chaque colonne** que `lib/sync.ts` écrit est déclarée.
- Chaque table déclarée existe vraiment dans le projet.
- Une lecture anonyme ne renvoie **aucune ligne**.
- Une écriture anonyme est **refusée** sur chaque table.
- La liste blanche répond encore, et replie toujours les points de Gmail.

### Pourquoi elle existe

La panne qu'elle attrape est **silencieuse**. Une colonne renommée dans le SQL
et pas dans `sync.ts` ne lève aucune erreur : PostgREST accepte l'écriture,
jette le champ inconnu, et la progression d'un élève cesse d'être synchronisée
pendant que tous les écrans continuent d'avoir l'air normaux.

Les 189 vérifications de `scripts/test-course.mjs` ne peuvent pas la voir : elles
ne se connectent jamais pour de vrai.

### Le vérificateur a été vérifié

Un contrôleur qui ne dit jamais rien ne vaut rien. Quatre pannes ont été
injectées volontairement, chacune détectée, et le vert est revenu après
restauration :

| Panne injectée | Détectée |
| --- | --- |
| colonne renommée dans `sync.ts` | ✓ `sends fields no table declares` |
| RLS retiré d'une table | ✓ `checkpoints: RLS is not enabled` |
| policy ajoutée sur `allowed_emails` | ✓ `meant to be unreachable from the browser` |
| table inexistante dans `sync.ts` | ✓ `which no migration declares` |

C'est ce qui autorisera un jour le passage en L2 — pas l'ancienneté.

### État

`.loop/db-check.json` (hors dépôt). Chaque exécution dit ce qui est **NEW** ou
**FIXED** depuis la précédente, au lieu de tout répéter chaque jour.

### Sortie

`1` si un contrôle échoue, `0` sinon. Les avertissements ne font jamais échouer
la commande : une boucle qui crie au loup finit par être ignorée.

## Passer en L2

Rien n'est automatique aujourd'hui. Pour mettre celle-ci sur un rythme :

```
/loop 1d npm run db:check
```

À ne faire qu'après une semaine de L1 sans faux positif. Et à garder en tête —
c'est l'avertissement du dépôt d'origine : *« Loop engineering amplifies
judgment. Token costs can explode. »*
