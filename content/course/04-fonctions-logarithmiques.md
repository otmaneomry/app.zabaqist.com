# Chapitre 5 : Fonctions logarithmiques

## Objectifs

- Définir la fonction logarithme népérien comme réciproque de l'exponentielle.
- Déterminer son ensemble de définition et ses valeurs remarquables.
- Utiliser les propriétés algébriques pour simplifier et résoudre.
- Dériver $\ln(u)$ et l'employer dans une étude de fonction.
- Lire la courbe de $\ln$ : asymptote, variations, concavité, limites.

## Prérequis

- Fonction exponentielle et fonction réciproque.
- Dérivation d'une fonction composée.
- Limites usuelles et étude de variations.

## Cours

### 1. Définition

La fonction logarithme népérien, notée $\ln$, est la fonction réciproque de la fonction exponentielle.

> **Définition.** Pour tout $x \in \mathbb{R}^*_+$ :
> $$\forall x \in \mathbb{R}^*_+, \quad y = \ln(x) \iff x = e^y$$

### 2. Ensemble de définition

La fonction logarithme népérien n'est définie que pour les réels strictement positifs.

$$D_f = \mathbb{R}^*_+ = \left]0, +\infty\right[$$

> **Remarque.** Écrire $\ln(x)$ sans avoir vérifié $x > 0$ est l'erreur la plus fréquente du chapitre. Le domaine se détermine avant tout calcul.

### 3. Valeurs remarquables

$$\ln(1) = 0$$

$$\ln(e) = 1$$

$$\ln(e^2) = 2$$

$$\ln\left(\frac{1}{e}\right) = -1$$

> **Application.** Sans calculatrice, donner la valeur de $\ln(e^5) - \ln(e^2)$, puis celle de $\ln\left(\frac{1}{e^3}\right)$.

### 4. Propriétés algébriques

> **Proposition 1.** Logarithme d'un produit.
> $$\ln(ab) = \ln(a) + \ln(b)$$
> Le logarithme transforme la multiplication en addition.

> **Proposition 2.** Logarithme d'un quotient.
> $$\ln\left(\frac{a}{b}\right) = \ln(a) - \ln(b)$$
> Le logarithme transforme la division en soustraction.

> **Proposition 3.** Logarithme d'une puissance.
> $$\ln(a^n) = n \cdot \ln(a)$$
> Le logarithme transforme l'exponentiation en multiplication.

> **Proposition 4.** Logarithme d'une racine.
> $$\ln(\sqrt{a}) = \frac{1}{2} \ln(a)$$

> **Exemple.** Simplifier $\ln(8) + \ln(2)$.
> $$\ln(8) + \ln(2) = \ln(8 \times 2) = \ln(16) = \ln(2^4) = 4\ln(2)$$

> **Application.** Simplifier $\ln(8) + \ln(2) - \ln(4)$ en écrivant chaque nombre comme une puissance de $2$.

### 5. Dérivée

> **Proposition 5.** Formule fondamentale.
> $$\left(\ln(x)\right)' = \frac{1}{x}$$

Pour une fonction composée $\ln(u(x))$ :

$$\left(\ln(u)\right)' = \frac{u'}{u}$$

> **Exemple.** Soit $f(x) = \ln(x^2 + 1)$. On pose $u(x) = x^2 + 1$, donc $u'(x) = 2x$ :
> $$f'(x) = \frac{u'(x)}{u(x)} = \frac{2x}{x^2 + 1}$$

> **Exemple.** Soit $g(x) = \ln(\sin(x))$. On pose $u(x) = \sin(x)$, donc $u'(x) = \cos(x)$ :
> $$g'(x) = \frac{\cos(x)}{\sin(x)} = \cot(x)$$

> **Exemple.** Soit $h(x) = x \ln(x)$. Avec la règle du produit $(uv)' = u'v + uv'$ :
> $$h'(x) = 1 \cdot \ln(x) + x \cdot \frac{1}{x} = \ln(x) + 1$$

> **Application.** Dériver $f(x) = \ln(x^2 + 3x + 2)$, puis factoriser le dénominateur.

## Graphique

Déplace le graphique, zoome, et observe le comportement de la courbe près de $x = 0$ et à l'infini.

```geogebra
{
  "coords": [-1, 8, -3, 3],
  "commands": ["f(x) = ln(x)", "A = (1, 0)", "B = (e, 1)"],
  "style": { "f": { "color": [44, 176, 161], "thickness": 4 } },
  "points": { "A": "(1, 0)", "B": "(e, 1)" }
}
```

### Propriétés du graphique

> **Proposition 6.** Domaine et image.
> Domaine : $\mathbb{R}^*_+$ — Image : $\mathbb{R}$.

> **Proposition 7.** Asymptote verticale.
> La droite d'équation $x = 0$ est asymptote verticale à la courbe.
> $$\lim_{x \to 0^+} \ln(x) = -\infty$$

> **Proposition 8.** Croissance.
> La fonction $\ln$ est strictement croissante sur $\mathbb{R}^*_+$.
> $$\forall x > 0, \quad \ln'(x) = \frac{1}{x} > 0$$

> **Proposition 9.** Limites aux bornes.
> $$\lim_{x \to 0^+} \ln(x) = -\infty$$
> $$\lim_{x \to +\infty} \ln(x) = +\infty$$

> **Proposition 10.** Concavité.
> La fonction est concave : la courbe est tournée vers le bas.
> $$\ln''(x) = -\frac{1}{x^2} < 0$$

## Exercices

### Exercice 1 — Calcul direct

Calculer : $\ln(e^3) + \ln(e^2) - \ln(e)$

> **Application.** Utilise $\ln(e^n) = n$ sur chaque terme avant d'additionner.

> **Solution.**
> Chaque terme se simplifie : $\ln(e^3) = 3$, $\ln(e^2) = 2$, $\ln(e) = 1$.
> Puis : $3 + 2 - 1 = 4$.

### Exercice 2 — Équation logarithmique

Résoudre l'équation : $\ln(x) = 3$

> **Application.** La fonction exponentielle est la réciproque du logarithme. Que se passe-t-il si tu l'appliques aux deux membres ?

> **Solution.**
> On applique l'exponentielle aux deux membres : $e^{\ln(x)} = e^3$.
> Or $e^{\ln(x)} = x$, donc $x = e^3 \approx 20{,}09$.
> Vérification : $\ln(e^3) = 3 \cdot \ln(e) = 3$. ✓

### Exercice 3 — Simplification

Simplifier : $\ln(8) + \ln(2) - \ln(4)$

> **Application.** Écris $8$, $2$ et $4$ comme des puissances de $2$, puis factorise.

> **Solution.**
> En puissances de $2$ : $\ln(2^3) + \ln(2) - \ln(2^2)$.
> Par $\ln(a^n) = n\ln(a)$ : $3\ln(2) + \ln(2) - 2\ln(2)$.
> En factorisant : $(3 + 1 - 2)\ln(2) = 2\ln(2) = \ln(2^2) = \ln(4)$.

### Exercice 4 — Dérivation

Dériver $f(x) = \ln(x^2 + 3x + 2)$

> **Application.** Identifie $u$, calcule $u'$, puis applique $(\ln(u))' = \dfrac{u'}{u}$.

> **Solution.**
> On pose $u(x) = x^2 + 3x + 2$, donc $u'(x) = 2x + 3$.
> $$f'(x) = \frac{2x + 3}{x^2 + 3x + 2}$$
> En factorisant le dénominateur : $f'(x) = \dfrac{2x + 3}{(x + 1)(x + 2)}$.

## Devoirs et synthèse

Réponds en détaillant tes calculs. La rédaction et la rigueur comptent autant que le résultat.

### Devoir 1 — Calcul sans calculatrice

Calculer : $\ln(e^5) - \ln(e^2) + 2\ln(e)$

> **Application.** Utilise $\ln(e^n) = n$.

> **Solution.**
> $5 - 2 + 2 = 5$.

### Devoir 2 — Équation

Résoudre : $\ln(x - 1) + \ln(x + 1) = \ln(8)$

> **Application.** Commence par le domaine : que faut-il pour que les deux logarithmes existent ?

> **Solution.**
> Domaine : $x - 1 > 0$ et $x + 1 > 0$, donc $x > 1$.
> Par $\ln(a) + \ln(b) = \ln(ab)$ : $(x-1)(x+1) = 8$, soit $x^2 - 1 = 8$, donc $x^2 = 9$.
> D'où $x = 3$ ou $x = -3$ ; seul $x = 3$ appartient au domaine.

### Devoir 3 — Démonstration

Démontrer que pour tous réels $a$ et $b$ strictement positifs : $\ln\left(\frac{a}{b}\right) = \ln(a) - \ln(b)$

> **Application.** Pose $y = \dfrac{a}{b}$ et exprime $a$ en fonction de $b$ et $y$.

> **Solution.**
> Soit $y = \dfrac{a}{b}$, alors $a = by$.
> En appliquant $\ln$ : $\ln(a) = \ln(by) = \ln(b) + \ln(y)$.
> Donc $\ln(y) = \ln(a) - \ln(b)$, c'est-à-dire $\ln\left(\dfrac{a}{b}\right) = \ln(a) - \ln(b)$.

### Devoir 4 — Étude de fonction

Soit $f(x) = x \ln(x)$. Calculer $f'(x)$ et dresser le tableau de variations de $f$ sur $\left]0, +\infty\right[$.

> **Application.** Règle du produit, puis étudie le signe de $f'(x)$.

> **Solution.**
> $f'(x) = \ln(x) + 1$, qui s'annule en $x = \dfrac{1}{e}$.
> $f$ est décroissante sur $\left]0, \dfrac{1}{e}\right[$ et croissante sur $\left]\dfrac{1}{e}, +\infty\right[$.
> Minimum en $x = \dfrac{1}{e}$ : $f\left(\dfrac{1}{e}\right) = -\dfrac{1}{e}$.

### Devoir 5 — Inéquation

Résoudre : $\ln(x^2 - 4) > \ln(5)$

> **Application.** La fonction $\ln$ est strictement croissante — et n'oublie pas le domaine.

> **Solution.**
> Domaine : $x^2 - 4 > 0$.
> Par stricte croissance : $x^2 - 4 > 5$, soit $x^2 > 9$.
> D'où $x \in \left]-\infty, -3\right[ \cup \left]3, +\infty\right[$ (ce qui satisfait aussi le domaine).

## Résumé

- $\ln$ est définie sur $\mathbb{R}^*_+$ seulement : vérifier le domaine avant tout calcul.
- $\ln(1) = 0$, $\ln(e) = 1$.
- $\ln(ab) = \ln a + \ln b$ ; $\ln\left(\frac{a}{b}\right) = \ln a - \ln b$ ; $\ln(a^n) = n\ln a$.
- $(\ln x)' = \dfrac{1}{x}$ et $(\ln u)' = \dfrac{u'}{u}$.
- $\lim_{x \to 0^+} \ln x = -\infty$, $\lim_{x \to +\infty} \ln x = +\infty$ ; croissante et concave.

## Auto-évaluation

- Déterminer le domaine de définition d'une expression contenant $\ln$.
- Utiliser $\ln(ab)$, $\ln\left(\frac{a}{b}\right)$ et $\ln(a^n)$ pour simplifier une expression.
- Résoudre une équation ou une inéquation faisant intervenir $\ln$.
- Dériver une fonction de la forme $\ln(u)$ et en déduire ses variations.
- Calculer les limites de $\ln$ en $0^+$ et en $+\infty$, et les utiliser dans une étude de fonction.
- Lire la courbe de $\ln$ : croissance, concavité, asymptote verticale.
