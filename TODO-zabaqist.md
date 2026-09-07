## Auth by google
- [x] Setup Auth by google
- [x] Register in supabase
- [x] also made an funny math 404 creative
- [x] rename this project and repo to app.zabaqist.com
## Auto-évaluation
- [x] Chaque chapitre pose ses propres questions (`/quiz/<slug>`, depuis son `## Auto-évaluation`)
- [x] Les liens « quiz » d'un chapitre pointent vers CE chapitre (avant : `/quiz/1` partout)
- [x] Plan de révision statique sur tout le programme (`/quiz`) : 84 capacités, 13 chapitres, lacunes en tête
- [ ] **Évaluation aléatoire sur tout le programme** — le vrai objectif

### Ce qui manque pour l'évaluation aléatoire

Le tirage au sort n'a d'intérêt que s'il y a de quoi tirer. Aujourd'hui chaque
chapitre a 6 ou 7 énoncés de capacité (« Calculer module et argument d'un
produit… ») — c'est une liste à cocher, pas une banque d'exercices. Mélanger 84
phrases fixes aurait l'air d'un examen sans rien mesurer de plus que de les
lire dans l'ordre.

Dans l'ordre :

1. **Banque d'items** — plusieurs exercices réels par capacité, avec énoncé,
   réponse attendue et correction. Écrits par le pédagogue, pas générés : une
   « bonne réponse » fausse enseigne une erreur à quelqu'un qui passe le Bac.
2. **Correction automatique** — seulement pour ce qui se corrige sans ambiguïté
   (numérique, QCM, expression normalisable). Tout le reste reste auto-jugé,
   comme aujourd'hui.
3. **Tirage pondéré** — piocher d'abord dans les capacités marquées « presque »
   et « pas encore », puis dans celles vues il y a longtemps. Les verdicts sont
   déjà stockés par chapitre (`lib/selfCheck.ts`), donc la pondération est
   possible dès que la banque existe.
4. **Répétition espacée** — reproposer une capacité réussie après quelques
   jours. C'est ce qui distingue « je savais faire ce jour-là » de « je sais
   faire ».
5. **Synchronisation** — les verdicts sont en `localStorage` uniquement.
   `course_progress` existe déjà côté Supabase ; y ajouter les auto-évaluations
   pour qu'un élève retrouve ses lacunes sur un autre appareil.

Le plan de révision statique (`/quiz`) est l'étape 0 : il classe déjà les
lacunes, il ne fait que s'appuyer sur des verdicts déclarés plutôt que mesurés.
