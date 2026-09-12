# Chapitre 1 : Limites et continuité

## Histoire

La définition de la dérivée se fait à l'aide de la limite d'un quotient a priori indéterminé.

Lorsque cette notion fut introduite à la fin du XVIIe siècle, la notion de limite n'existait pas.

Leibniz et Euler considéraient l'existence d'un état intermédiaire appelé infiniment petit situé entre le fait d'être différent de 0 et celui d'être nul. Ceci explique que certains

mathématiciens aient combattu ces nouveaux outils malgré leur efficacité pour résoudre de nombreux problèmes jusque-là sans réponse.

Jean le Rond d'Alembert chercha fort maladroitement à formuler une définition de la limite mais il faut attendre le milieu du siècle suivant pour que ce concept soit introduit de manière rigoureuse par Augustin-Louis

Cauchy puis Karl Weierstrass.

Source : https://fr.wikipedia.org

> **Augustin-Louis Cauchy** (1789–1857)
> **Karl Weierstrass** (1815–1897)

## Objectifs

- Calculer la limite d'une fonction en un point ou aux bornes de son domaine.
- Étudier la continuité en un point et sur un intervalle.
- Déterminer l'image d'un intervalle par une fonction continue.
- Utiliser le théorème des valeurs intermédiaires et la méthode de dichotomie.
- Étudier la fonction réciproque d'une fonction continue et strictement monotone.
- Manipuler la fonction arctangente, les racines n-ièmes et les puissances rationnelles.

## Plan du chapitre

- Activités préparatoires
- **Cours** : limites · continuité · image d'un intervalle · valeurs intermédiaires · fonction réciproque.
- **Méthodes** : continuité · prolongement · valeurs intermédiaires · fonctions réciproques usuelles.
- **Exercices et problèmes** : applications · perfectionnement · devoirs et synthèse.

## Prérequis

- Limites usuelles et opérations sur les limites.
- Fonctions usuelles et variations.
- Trigonométrie et calcul algébrique.
- Valeur absolue, partie entière et encadrements.

## Activités préparatoires

### RAPPELS
1. Calculer les limites suivantes :

$$\lim_{x \to 1} \frac{x^2 - 1}{2x^2 - 5x + 3}$$

$$\lim_{x \to 1} \frac{x^3 + 3x^2 - 4}{x - 1}$$

$$\lim_{x \to 1} \frac{x^3 + 2x^2 - 11x - 12}{x^4 - 81} ; \quad \lim_{x \to 2} \frac{x^2 + x - 6}{\sqrt{x} - \sqrt{2}}$$

$$\lim_{\substack{x \to -2 \\ x \to -2}} \frac{\sqrt{x^2 + x - 2}}{x^2 - 4}$$

$$\lim_{x \to +\infty} \frac{\sqrt{x^2 + 3x} - x}{\sqrt{2x^2 + x - 5}}$$

$$\lim_{x \to +\infty} \frac{x\sqrt{x}}{x - 3\sqrt{x}} ; \quad \lim_{x \to +\infty} (\sqrt{x^2 + 3x + 2} + x + 1)$$

2. Calculer les limites suivantes : $$\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right) ; \quad \lim_{x \to +\infty} \frac{1 - 4\cos x}{x + 3} ; \quad \lim_{x \to \frac{\pi}{2}} (\pi - 2x) \tan x$$

3. Soit $$\varphi$$ une fonction numérique définie sur $$[1, +\infty[$$ telle que $$\lim_{x \to +\infty} (x - 2)\varphi(x) = 2$$.

Montrer que $$\lim_{x \to +\infty} \varphi(x) = 0$$.

4. On considère la fonction $$g : x \mapsto 4(x - 1)E(x) + 3$$ ($$E(x)$$ étant la partie entière de réel $$x$$)

a) Soit $$x \in \left]\frac{1}{2}, \frac{3}{2}\right[$$. Montrer que : $$|g(x) - 3| \le 4|x - 1|$$

b) Montrer que : $$(\forall \varepsilon > 0)(\exists \alpha > 0)(\forall x \in \mathbb{R})(|x - 1| < \alpha \Rightarrow |g(x) - 3| < \varepsilon)$$

c) En déduire $$\lim_{x \to 1} g(x)$$.

5. On considère la fonction $$h$$ définie sur $$[-1, 1]$$ par : $$h(x) = \frac{2x}{x^2 + 1}$$

Montrer que $$h$$ une bijection de $$[-1, 1]$$ sur $$[-1, 1]$$, puis déterminer

l'expression de $$h^{-1}(x)$$ pour tout $$x \in [-1, 1]$$.

6. Soit $$f$$ la fonction numérique représentée sur la figure ci-contre.

Déterminer les limites de $$f$$ aux bornes de son ensemble de définition.

### CONTINUITE D'UNE FONCTION EN UN POINT
Soit $$\mathcal{C}_f$$ la courbe représentative d'une fonction numérique $$f$$ dans un repère orthonormé $$(O, \vec{i}, \vec{j})$$.

Dans chacun des cas (1), (2), (3) et (4) comparer chacune des limites $$\lim_{x \to x_0^+} f(x)$$, $$\lim_{x \to x_0^-} f(x)$$ et $$\lim_{x \to x_0} f(x)$$ avec le nombre $$f(x_0)$$ (s'il existe).

Que peut-on remarquer graphiquement sur la courbe $$\mathcal{C}_f$$ au voisinage du point $$M_0$$ d'abscisse $$x_0$$ ?

Soit $$f$$ une fonction définie sur un intervalle ouvert de centre $$x_0$$.

On dit que $$f$$ est continue en $$x_0$$ si : $$\lim_{x \to x_0} f(x) = f(x_0)$$

On dit que $$f$$ est continue à droite de $$x_0$$ si : $$\lim_{x \to x_0^+} f(x) = f(x_0)$$

On dit que $$f$$ est continue à gauche de $$x_0$$ si : $$\lim_{x \to x_0^-} f(x) = f(x_0)$$

### CONTINUITE À GAUCHE ET À DROITE - PROLONGEMENT PAR CONTINUITÉ
A) Soit $$f$$ la fonction numérique définie sur $$[-1, 2]$$ par :

1. Calculer $$f(1)$$ puis montrer que $$f$$ est continue à droite en 1.

$$\left\{ \begin{array}{l} f(x) = \frac{7 \sin(a(x-1))}{x-1} \text{ si } -1 \le x < 1 \\ f(x) = 6x + a \quad \text{ si } 1 \le x \le 2 \end{array} \right.$$

2. Calculer $$\lim_{x \to 1^+} f(x)$$ puis déterminer $$a$$ pour que $$f$$ soit continue en 1.

Pour que la fonction $$f$$ soit continue en $$x_0$$ il faut et il suffit qu'elle soit continue à gauche et à droite en $$x_0$$

B) Soit $$f$$ la fonction de la variable $$x$$ définie par : $$f(x) = \frac{x^2 - 2x}{|x-5| - 3}$$

1. Déterminer l'ensemble de définition $$\mathcal{D}$$ de la fonction $$f$$.

2. a) Montrer que $$\lim_{x \to 2} f(x) = -2$$.

b) Soit $$\tilde{f}$$ la fonction numérique définie sur $$\mathcal{D} \cup \{2\}$$ par :

$$\tilde{f}(x) = \left\{ \begin{array}{l} f(x) \text{ si } x \neq 2 \\ \tilde{f}(2) = -2 \end{array} \right.$$

Montrer que $$\tilde{f}$$ est continue au point 2.

On dit alors que la fonction $$f$$ est prolongeable par continuité en 2. La fonction $$\tilde{f}$$ est appelée alors le prolongement par continuité de la fonction $$f$$ au point 2.

3. La fonction $$f$$ est-elle prolongeable par continuité au point 8 ? Justifier votre réponse.

### GÉNÉRALISATION
Soit $$f$$ une fonction numérique et $$x_0 \notin \mathcal{D}_f$$. Supposons que $$f$$ ait une limite finie $$\ell$$ au point $$x_0$$. On dit alors que $$f$$ est prolongeable par continuité en $$x_0$$.

La fonction $$\tilde{f}$$ définie sur $$\mathcal{D}_f \cup \{x_0\}$$ par $$\tilde{f}(x) = f(x)$$, si $$x \neq x_0$$, et $$\tilde{f}(x_0) = \ell$$ est appelée le prolongement par continuité de $$f$$ au point $$x_0$$.

### CONTINUITÉ SUR UN INTERVALLE
1. La figure ci-contre présente la courbe représentative

d'une fonction numérique $f$ sur l'intervalle $]0, +\infty[$.

a) La fonction $ f $ est elle-continue au point 2?
b) Parmi les intervalles suivants, déterminer ceux sur lesquels la fonction $ f $ est continue en chacun de ses points:

$I = ]0,1] \quad ; \quad J = [1,3] \quad ; \quad K = [2,4] \quad ; \quad L = ]0, +\infty[$

2. Soit $g$ la fonction numérique définie par : $g(x) = \frac{1}{\sqrt{1-x^2}}$

a) Vérifier que $ g $ est bien définie sur $ ] - 1,1[ $.
b) Soit $x_0 \in ]-1,1[$. Montrer que $g$ est continue en $x_0$.

3. On considère la fonction $h$ définie sur $\mathbb{R}$ par :

$\begin{cases} h(x) = \frac{\sqrt{x}-1}{x^2-x} \quad \text{si } x > 1 \\ h(x) = x^2 + ax \quad \text{si } x \le 1 \end{cases}$ où $a \in \mathbb{R}$

a) Montrer que $ h $ est continue en tout point de $ ] - \infty, 1[ $ et en tout point de $ ]1, +\infty[ $
b) Déterminer la valeur de $a$ pour laquelle la fonction $h$ est continue en tout point de $\mathbb{R}$.

### COMPOSÉE DE DEUX FONCTIONS CONTINUES
A) Soit $f$ et $g$ les deux fonctions numériques définies sur $\mathbb{R}$ par :

$f(x) = \frac{1}{2}x^2 - x + 3 \quad \text{et} \quad g(x) = |x+3|$

1. Montrer que $ f $ et $ g $ sont continues sur $ \mathbb{R} $.
2. Soit $x_0 \in \mathbb{R}$. Comparer gof $(x_0)$ et $\lim_{x \to x_0} gof(x)$.

En déduire que la fonction $gof$ est continue sur $\mathbb{R}$.

De façon générale, si $f$ est continue en $x_0$ et $g$ est continue en $f(x_0)$ alors $gof$ est continue en $x_0$

B) Soit $ f $ la fonction numérique définie par: $ f(x) = \frac{\sin x}{x - \pi} $.
1. Montrer que $\lim_{x\to \pi}f(x) = -1$
2. Soit $\tilde{f}$ le prolongement par continuité de la fonction $f$ au point $\pi$ et $g$ une fonction continue au point $-1$.
a) En utilisant le résultat de A), montré que: $\lim_{x\to \pi}go\tilde{f}(x) = g(-1)$
b) En déduire que: $\lim_{x\to \pi}gof(x) = g(-1)$

### GÉNÉRALISATION
Si $$\lim_{x \to x_0} f(x) = \ell$$ ($$\ell \in \mathbb{R}$$), et si $$g$$ est continue en $$\ell$$ alors $$\lim_{x \to x_0} gof(x) = g(\ell)$$

C) On considère les deux fonctions $$f$$ et $$g$$ définies par : $$\begin{cases} f(x) = 1 \text{ si } x \neq 0 \\ f(0) = 2 \end{cases}$$ et $$\begin{cases} g(x) = 3 \text{ si } x \neq 1 \\ g(1) = 4 \end{cases}$$

1. Vérifier que: $\lim_{x\to 0}f(x) = 1$ et $\lim_{x\to 1}g(x) = 3$
2. Déterminer l'expression de gof $(x)$ puis calculer $\lim_{x\to 0}gof(x)$

A Si $$\lim_{x \to x_0} f(x) = \ell$$ et $$\lim_{x \to \ell} g(x) = m$$ alors la limite de la fonction $$gof$$ (si elle existe) quand $$x$$ tend vers $$x_0$$ n'est pas nécessairement égale à $$m$$.

### IMAGE D'UN INTERVALLE PAR UNE FONCTION CONTINUE
A) On considère les fonctions $$f$$ et $$g$$ définies sur $$\mathbb{R}$$ par : $$f(x) = \sin x$$ et $$g(x) = (x-1)^2$$ Les fonctions $$f$$ et $$g$$ sont évidemment continues sur $$\mathbb{R}$$.

1. Déterminer $$f(\mathbb{R})$$ et $$f\left(\left[-\frac{\pi}{4}, \pi\right]\right)$$ puis vérifier qu'ils sont des intervalles de $$\mathbb{R}$$.

Remarquer bien que les intervalles $$I$$ et $$f(I)$$ ne sont pas en général de même nature.

2. Déterminer $$g([1, +\infty[)$$ et $$g([1, 2]$$) et $$g([0, 3[)$$ puis vérifier qu'ils sont des intervalles.

### RÉSULTAT ADMIS
L'image d'un intervalle par une fonction continue est un intervalle. L'image d'un segment par une fonction continue est un segment.

Si $$f$$ est continue sur $$[a, b]$$ alors $$f([a, b]) = [m, M]$$ où $$m$$ est le minimum de $$f$$ sur $$[a, b]$$ et $$M$$ est le maximum de $$f$$ sur $$[a, b]$$

B) Dans la figure ci-contre, $$\mathcal{C}_f$$ représente la courbe d'une fonction $$f$$ définie sur $$[-1, 2]$$.

1. Définir $ f $ sur $[-1,2]$.
2. Vérifier que $ f $ n'est pas continue au point 1.
3. Déterminer $f([-1,2])$
4. Est-ce que la condition « $f$ continue sur un intervalle $I$ »

est nécessaire pour que $$f(I)$$ soit un intervalle ?

### THÉORÈME DES VALEURS INTERMÉDIAIRES
A) Soit $f$ une fonction continue sur un intervalle $I$, et soit $a$ et $b$ deux éléments de $I$ tels que $a < b$.

On suppose que $f(a), f(b) < 0$.

1. Montrer que $0 \in f(I)$.
2. En déduire qu'il existe au moins un élément $ c $ de l'intervalle $[a, b]$ tel que $ f(c) = 0 $.
3. Montrer que l'équation $ x^3 + 2x + 1 = 0 $ admet au moins une solution dans l'intervalle $[-1, 1]$.

B) Soit $f$ une fonction continue sur un segment $[a, b]$, et soit $\lambda$ un nombre réel compris strictement entre $f(a)$ et $f(b)$. On pose $g(x) = f(x) - \lambda$.

1. Vérifier que $ g(a) \times g(b) < 0 $.
2. En déduire qu'il existe un nombre réel $ c $ de l'intervalle $ [a, b] $ tel que $ f(c) = \lambda $.

On a donc montré que si $f$ est une fonction continue sur $[a, b]$, alors pour tout réel $\lambda$ compris entre $f(a)$ et $f(b)$, il existe au moins un réel $c$ dans $[a, b]$ tel que $f(c) = \lambda$. Ce résultat porte le nom de « théorème des valeurs intermédiaires ».

#### Avant de démontrer : essaie de mettre le théorème en défaut

Ci-dessous, $f(x) = x^3 + 2x + 1$ sur $[-1\,;1]$, avec $f(-1) = -2$ et $f(1) = 4$.
La droite horizontale $y = k$ se déplace avec le curseur.

**Fais une hypothèse avant de toucher au curseur :** existe-t-il une hauteur $k$
entre $-2$ et $4$ pour laquelle la droite **ne coupe pas** la courbe ?

Cherche-la. Prends le temps d'essayer plusieurs valeurs.

```geogebra
{
  "coords": [-2, 2, -3, 5],
  "commands": [
    "f(x) = x^3 + 2x + 1",
    "k = Slider(-2, 4, 0.1)",
    "SetValue(k, 2.5)",
    "d: y = k",
    "A = (-1, -2)",
    "B = (1, 4)",
    "C = Intersect(f, d)"
  ],
  "style": {
    "f": { "color": [44, 176, 161], "thickness": 4 },
    "d": { "color": [232, 176, 74], "thickness": 3 }
  },
  "points": { "A": "a = −1", "B": "b = 1", "C": "c" }
}
```

Tu n'en trouveras pas, et **c'est exactement ce que le théorème affirme**. La
démonstration que tu viens de faire en A) et B) explique *pourquoi* : la courbe
ne peut pas passer de l'autre côté de la droite sans la traverser, parce qu'elle
n'a pas le droit de sauter.

Le mot « continue » dans l'énoncé n'est donc pas une précaution d'écriture. C'est
l'hypothèse qui interdit le saut — et l'activité suivante te montre ce qui se
passe quand on l'enlève.

3. Soit $h$ la fonction numérique définie par : $h(x) = x^4 - \frac{4}{x}$

Montrer que l'équation $h(x) = x$ admet au moins une solution dans l'intervalle $[1, 2]$.

#### Le contre-exemple : ce que devient le théorème sans la continuité

Voici $g$, définie sur $[-1\,;2]$ par $g(x) = x^2 - 1$ si $x < 1$, et
$g(x) = x^2 + 1$ si $x \geq 1$. Elle **saute** en $x = 1$ : elle vaut $0$ juste
avant, et $2$ en ce point.

$g(-1) = 0$ et $g(2) = 5$. **Hypothèse avant de manipuler :** la valeur $k = 1$
est comprise entre les deux. Penses-tu qu'elle est atteinte ?

```geogebra
{
  "coords": [-1.5, 2.5, -2, 6],
  "commands": [
    "g(x) = If(x < 1, x^2 - 1, x^2 + 1)",
    "k = Slider(0, 5, 0.1)",
    "SetValue(k, 1)",
    "d: y = k",
    "P = (-1, 0)",
    "Q = (2, 5)"
  ],
  "style": {
    "g": { "color": [44, 176, 161], "thickness": 4 },
    "d": { "color": [199, 63, 46], "thickness": 3 }
  },
  "points": { "P": "g(−1) = 0", "Q": "g(2) = 5" }
}
```

Déplace le curseur entre $0$ et $2$ : la droite passe **dans le trou**. Aucune
valeur strictement entre $0$ et $2$ n'est atteinte, alors qu'elle est bien
comprise entre $g(-1)$ et $g(2)$.

> **À retenir.** Le théorème des valeurs intermédiaires n'est pas vrai « en
> général » : il est vrai **parce que** la fonction est continue. Un seul point
> de discontinuité suffit à le faire tomber.

### THÉORÈME DE LA FONCTION RÉCIPROQUE
Soit $f$ la fonction numérique définie sur $\mathbb{R}$ par : $f(x) = \frac{x}{1 + |x|}$

1. Montrer que $ f $ est continue sur $ \mathbb{R} $ et que $ f(\mathbb{R}) = ] - 1,1[ $.
2. Montrer que $f$ est strictement croissant sur $\mathbb{R}$
3. Montrer que pour tout $y \in ] - 1,1[$, il existe un unique réel $x \in \mathbb{R}$ tel que $f(x) = y$.

Si on pose $x = f^{-1}(y)$ alors $f^{-1}$ est la fonction réciproque de $f$. De plus, $f^{-1}$ est définie de $]-1,1[$ dans $\mathbb{R}$.

#### Observer la réciproque avant de la définir

La fonction de l'exercice, $f(x) = \dfrac{x}{1 + |x|}$, est tracée en vert ; sa
réciproque $f^{-1}$ en doré, et la droite $y = x$ en pointillés.

**Regarde d'abord, formule ensuite :** quel lien géométrique unit les deux
courbes ? Et que deviennent les asymptotes horizontales $y = -1$ et $y = 1$ de
$f$ lorsqu'on passe à $f^{-1}$ ?

```geogebra
{
  "coords": [-4, 4, -4, 4],
  "commands": [
    "f(x) = x / (1 + abs(x))",
    "g(x) = If(abs(x) < 1, x / (1 - abs(x)))",
    "h(x) = x"
  ],
  "style": {
    "f": { "color": [44, 176, 161], "thickness": 4 },
    "g": { "color": [232, 176, 74], "thickness": 4 },
    "h": { "color": [150, 150, 150], "thickness": 2 }
  }
}
```

Les deux courbes sont **symétriques par rapport à la droite $y = x$**, et les
asymptotes horizontales de $f$ deviennent les asymptotes verticales de $f^{-1}$ :
échanger $x$ et $y$ échange aussi les directions asymptotiques.

C'est la traduction graphique de l'équivalence que tu viens d'établir :
$y = f(x) \Leftrightarrow x = f^{-1}(y)$.

Toute fonction $f$ continue et strictement monotone sur un intervalle $I$ réalise une bijection de $I$ sur $f(I)$. Dans ce cas, $f$ admet une fonction réciproque $f^{-1}$ définie de $f(I)$ dans $I$.

On a alors : $(\forall x \in I) (\forall y \in f(I)) : y = f(x) \Leftrightarrow x = f^{-1}(y)$

et : $(\forall x \in I)\ (f^{-1} \circ f)(x) = x$ ; $(\forall y \in f(I))\ (f \circ f^{-1})(y) = y$

## Cours
### 1. Limite d'une fonction en un point
Dans tout ce qui suit, $x_0$ est un nombre réel.

#### 1.1. RAPPELS ET COMPLÉMENTS

> **Définition 1.**
Soit $f$ une fonction numérique telle que : $(\exists r > 0) ; ]x_0 - r, x_0 + r[ - \{x_0\} \subset D_f$ et $\ell \in \mathbb{R}$.

On dit que la limite de $f$ en $x_0$ est $\ell$, ou encore, $f(x)$ tend vers $\ell$ lorsque $x$ tend vers $x_0$, si :

$$(\forall \varepsilon > 0)(\exists \alpha > 0)(\forall x \in D_f) \quad (0 < |x - x_0| < \alpha \Rightarrow |f(x) - \ell| < \varepsilon)$$

On écrit : $\lim_{x \to x_0} f(x) = \ell$

> **Exemple.**
Soit $f$ la fonction définie par :

$$f(x) = 2x^2 + 3x + 1$$

Montrons en utilisant la définition que :

$$\lim_{x \to 1} f(x) = 6$$

Soit $I = \left]1 - \frac{1}{2}; 1 + \frac{1}{2}\right[ = \left]\frac{1}{2}; \frac{3}{2}\right[$. On a pour tout

$$\begin{array}{l} x \in I : |f(x) - 6| = |(x - 1)(2x + 5)| \\ = |x - 1||2x + 5| \end{array}$$

On a $x \in \left]\frac{1}{2}; \frac{3}{2}\right[$ : d'où $|x - 1| < \frac{1}{2}$ et $6 < 2x + 5 < 8$

Et alors $|2x + 5| < 8$. Il s'ensuit donc que :

$$|x - 1||2x + 5| \le 8|x - 1|$$

Soit $\varepsilon > 0$. Pour que $|f(x) - 6| < \varepsilon$ il suffit que

$8|x - 1| < \varepsilon$ et $|x - 1| < \frac{1}{2}$, c'est-à-dire que :

$$|x - 1| < \frac{\varepsilon}{8} \quad \text{et} \quad |x - 1| < \frac{1}{2}$$

En prenant $\alpha = \inf\left(\frac{1}{2}, \frac{\varepsilon}{8}\right)$, on vérifie que : Pour

tout $\varepsilon > 0$ il existe $\alpha = \inf\left(\frac{1}{2}, \frac{\varepsilon}{8}\right) > 0$ tel que :

$$(\forall x \in D_f) \quad (0 < |x - 1| < \alpha \Rightarrow |f(x) - 6| < \varepsilon)$$

Ce qui signifie que : $\lim_{x \to 1} f(x) = 6$

> **Application.**
Soit $f$ la fonction numérique de la variable réelle $x$ définie par : $f(x) = \frac{2x + 1}{x + 1}$

1. Montrer que pour tout $ x \in ]0;2[ : \left|f(x) - \frac{3}{2}\right| \leq \frac{1}{2} |x - 1| $
2. En utilisant la définition, montré que $\lim_{x \to 1} f(x) = \frac{3}{2}$

#### 1.2. UNICITÉ DE LA LIMITE

> **Proposition 1.**
Si la limite d'une fonction numérique $f$ existe en un point, alors elle est unique.

> **Preuve.**
Soit $f$ une fonction numérique admettant une limite finie au point $x_0$.

Par l'absurde, supposons que $f$ admet deux limites distinctes $\ell_1$ et $\ell_2$. En prenant $\varepsilon = \frac{|\ell_1 - \ell_2|}{2}$ on obtient:

$$\begin{array}{l} (\exists \alpha_1 > 0)(\forall x \in D_f) \quad (0 < |x - x_0| < \alpha_1 \Rightarrow |f(x) - \ell_1| < \varepsilon) \\ (\exists \alpha_2 > 0)(\forall x \in D_f) \quad (0 < |x - x_0| < \alpha_2 \Rightarrow |f(x) - \ell_2| < \varepsilon) \end{array}$$

Soit $\alpha = \inf(\alpha_1, \alpha_2)$. Il en résulte donc:

$$(\forall x \in D_f) \quad (0 < |x - x_0| < \alpha \Rightarrow |f(x) - \ell_2| < \varepsilon \text{ et } |f(x) - \ell_2| < \varepsilon)$$

Puisque $|\ell_1 - \ell_2| = |(\ell_1 - f(x)) + (f(x) - \ell_2)|$ alors:

$$|\ell_1 - \ell_2| \le |f(x) - \ell_1| + |f(x) - \ell_2| < \frac{|\ell_1 - \ell_2|}{2} + \frac{|\ell_1 - \ell_2|}{2}$$

Donc $|\ell_1 - \ell_2| < |\ell_1 - \ell_2|$; ce qui est absurde. Par suite, $\ell_1 = \ell_2$.

#### 1.3. LIMITES DES FONCTIONS USUELLES

> **Proposition 2.**
Soit $P$ et $Q$ deux fonctions polynomiales et $x_0 \in \mathbb{R}$. Alors:

(1) $\lim_{x \to x_0} P(x) = P(x_0)$

(2) Si $Q(x_0) \neq 0$ alors $\lim_{x \to x_0} \frac{P(x)}{Q(x)} = \frac{P(x_0)}{Q(x_0)}$

(3) $\lim_{x \to x_0} \sin x = \sin x_0$

(4) Si $x_0 \neq \frac{\pi}{2} + k\pi$ avec $k \in \mathbb{Z}$ alors $\lim_{x \to x_0} \tan x = \tan x_0$

(5) $\lim_{x \to x_0} \cos x = \cos x_0$

(6) Si $x_0 \ge 0$ alors $\lim_{x \to x_0} \sqrt{x} = \sqrt{x_0}$

(7) $\lim_{x \to 0} \frac{\sin x}{x} = 1$

(8) $\lim_{x \to 0} \frac{\tan x}{x} = 1$

(9) $\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$

#### 1.4. OPÉRATIONS SUR LES LIMITES

> **Proposition 3.**
Soit $f$ et $g$ deux fonctions numériques et $x_0 \in \mathbb{R}$. Si $\lim_{x \to x_0} f(x) = \ell$ et $\lim_{x \to x_0} g(x) = \ell'$ alors:

(1) $\lim_{x \to x_0} (f + g)(x) = \ell + \ell'$

(2) $\lim_{x \to x_0} (f \cdot g)(x) = \ell \ell'$

(3) Si $\ell' \neq 0$ alors $\lim_{x \to x_0} \left(\frac{1}{g}\right)(x) = \frac{1}{\ell'}$ et $\lim_{x \to x_0} \left(\frac{f}{g}\right)(x) = \frac{\ell}{\ell'}$

### 2. Continuité d'une fonction numérique
#### 2.1. CONTINUITÉ D'UNE FONCTION EN UN POINT

> **Définition 2.**
Soit $f$ une fonction numérique définie sur un intervalle ouvert centré en un point $x_0$.

On dit que la fonction $f$ est continue au point $x_0$ si $\lim_{x \to x_0} f(x) = f(x_0)$.

> **Interprétation Graphique.**
$f$ est discontinue au point $x_0$

signifie que la courbe $\mathcal{C}_f$ est

discontinue au point $M_0(x_0, f(x_0))$

$f$ est continue au point $x_0$

signifie que la courbe $\mathcal{C}_f$ est

continue au point $M_0(x_0, f(x_0))$

> **Remarques.**
- Si $ f $ est définie au point $ x_0 $ et n'admet pas de limite en $ x_0 $ ou sa limite est infinie en $ x_0 $, on dit que $ f $ est discontinue au point $ x_0 $.
- $ f $ est continue en $ x_0 $ si: $ (\forall \varepsilon > 0)(\exists \alpha > 0)(\forall x \in D_f) $ ( $ 0 < |x - x_0| < \alpha \Rightarrow |f(x) - f(x_0)| < \varepsilon $ )

> **Exemples.**
1) Soit $f$ la fonction numérique définie par :

$$\left\{ \begin{array}{l} f(x) = \frac{x^2 - 6x + 5}{x - 1} \text{ si } x \neq 1 \\ f(1) = -4 \end{array} \right.$$

Etudions la continuité de $f$ au point $x_0 = 1$. On a :

$$\lim_{x \to 1} f(x) = \lim_{x \to 1} \frac{(x - 1)(x - 5)}{x - 1} = \lim_{x \to 1} (x - 5) = -4$$

D'où $\lim_{x \to 1} f(x) = f(1)$. Par suite $f$ est continue au

point $x_0 = 1$.

2) Soit $g$ la fonction numérique définie sur $\mathbb{R}^*$ par :

$$\left\{ \begin{array}{l} g(x) = \frac{\sin(x - 2)}{x^2 - 2x} \text{ si } x \neq 0 \text{ et } x \neq 2 \\ g(2) = \frac{1}{2} \end{array} \right.$$

Etudions la continuité de $g$ au point $x_0 = 2$.

On a :

$$\lim_{x \to 2} g(x) = \lim_{x \to 2} \frac{1}{x} \times \frac{\sin(x-2)}{x-2} = \frac{1}{2} = g(2)$$

Ainsi, la fonction $g$ est continue au point $x_0 = 2$.

Etudions la continuité de $g$ au point $x_1 = 0$.

On a $0 \notin D_g$ donc $g$ n'est pas continue en $x_1 = 0$.

3) Soit $h$ la fonction numérique définie sur $[-1, 2]$

par : $h(x) = E(x)$

On a alors :

$$\forall x \in [-1, 0[, h(x) = -1$$

$$\forall x \in [0, 1[, h(x) = 0$$

$$\forall x \in [1, 2[, h(x) = 1$$

Et enfin : $h(2) = E(2) = 2$

> **Applications.**
1) Soit $f$ la fonction numérique définie par :

$$\begin{cases} f(x) = \frac{-2x^2 - x + 1}{x + 1} \text{ si } x \neq -1 \\ f(-1) = 1 \end{cases}$$

Étudier la continuité de la fonction $f$ au point $x_0 = -1$.

2) Soit $g$ la fonction numérique définie par :

$$\begin{cases} g(x) = \frac{x + \tan(2x)}{\sin(3x)} \text{ si } x \neq 0 \\ g(0) = 1 \end{cases}$$

La fonction $g$ est-elle continue au point $x_0 = 0$ ? Justifier la réponse.

#### 2.2. CONTINUITÉ À DROITE - CONTINUITÉ À GAUCHE

> **Définition 3.**
1) Soit $f$ une fonction définie sur un intervalle de la forme $[x_0, x_0 + \alpha[$ où $\alpha \in \mathbb{R}^*$.

On dit que $f$ est continue à droite en $x_0$ si : $\lim_{\substack{x \to x_0 \\ x > x_0}} f(x) = f(x_0)$

2) Soit $f$ une fonction définie sur un intervalle de la forme $]x_0 - \alpha, x_0]$ où $\alpha \in \mathbb{R}^*$.

On dit que $f$ est continue à gauche en $x_0$ si : $\lim_{\substack{x \to x_0 \\ x < x_0}} f(x) = f(x_0)$

Représentons la fonction $h$ :

Remarquons bien que la courbe $\mathcal{C}_h$ présente des sauts aux points 0, 1 et 2. Par suite, la fonction $h$ est discontinue aux points 0, 1 et 2.

> **Exemples.**
1) Soit $f$ la fonction numérique définie par :

$$\left\{ \begin{array}{l} f(x) = 3 - x^2 \text{ si } x \le 0 \\ f(x) = \frac{x^2 - 3}{2x - 1} \text{ si } x > 0 \end{array} \right.$$

Étudions la continuité à droite et à gauche de la fonction $f$ au point $x_0 = 0$ :

On a $f(0) = 3$ et de plus :

$$\lim_{\substack{x \to 0 \\ x > 0}} f(x) = \lim_{\substack{x \to 0 \\ x > 0}} \frac{x^2 - 3}{2x - 1} = 3 = f(0)$$

Donc $f$ est continue à droite au point $x_0 = 0$.

$$\lim_{\substack{x \to 0 \\ x < 0}} f(x) = \lim_{\substack{x \to 0 \\ x < 0}} (3 - x^2) = 3 = f(0)$$

Donc $f$ est continue à gauche au point $x_0 = 0$.

Puisque $\lim_{\substack{x \to 0 \\ x > 0}} f(x) = \lim_{\substack{x \to 0 \\ x < 0}} f(x) = f(0)$ alors $f$ est

continue au point $x_0 = 0$.

> **Proposition 4.**
Une fonction numérique $f$ est continue au point $x_0$ si, et seulement si elle est continue à droite et à gauche au point $x_0$. En d'autres termes :

$$(f \text{ est continue au point } x_0) \Leftrightarrow \lim_{x \to x_0} f(x) = \lim_{x \to x_0} f(x) = f(x_0)$$

> **Applications.**
1) Soit $f$ la fonction numérique définie par :

$$\left\{ \begin{array}{l} f(x) = \frac{x}{x + 1} \text{ si } x \le 0 \\ f(x) = \frac{x^2 - x}{x + 3} \text{ si } x > 0 \end{array} \right.$$

Étudier la continuité de la fonction $f$ en 0.

2) Soit $g$ la fonction numérique définie par :

$$\left\{ \begin{array}{l} g(x) = x^2 + 2x \text{ si } x \le 1 \\ g(x) = \frac{\text{a sin}(x - 1)}{x - 1} \text{ si } x > 1 \end{array} \right.$$

2) Soit $g$ la fonction numérique définie par :

$$\left\{ \begin{array}{l} g(x) = \frac{x^2 - 1}{|x - 1|} \text{ si } x \ne 1 \\ g(1) = 2 \end{array} \right.$$

Étudions la continuité à droite et à gauche de la fonction $g$ au point $x_0 = 1$ :

On a : $\lim_{\substack{x \to 1 \\ x > 1}} g(x) = \lim_{\substack{x \to 1 \\ x > 1}} \frac{x^2 - 1}{x - 1} = \lim_{\substack{x \to 1 \\ x > 1}} (x + 1) = 2$

Donc $\lim_{\substack{x \to 1 \\ x > 1}} g(x) = g(1)$ et la fonction $g$ est continue

à droite au point $x_0 = 1$.

On a : $\lim_{\substack{x \to 1 \\ x < 1}} g(x) = \lim_{\substack{x \to 1 \\ x < 1}} \frac{x^2 - 1}{-(x - 1)} = \lim_{\substack{x \to 1 \\ x > 1}} (-x - 1) = -2$

Donc $\lim_{\substack{x \to 1 \\ x < 1}} g(x) \neq g(1)$ et la fonction $g$ n'est pas

continue à gauche au point $x_0 = 1$.

Déterminer la valeur du réel a pour que la fonction $g$ soit continue au point $x_0 = 1$.

3) On considère la fonction $h$ définie par :

$$\left\{ \begin{array}{l} h(x) = \frac{|\sqrt{2} - 2 \cos x|}{4x - \pi} \text{ si } x \ne \frac{\pi}{4} \\ h\left(\frac{\pi}{4}\right) = \frac{\sqrt{2}}{4} \end{array} \right.$$

Montrer que la fonction $h$ n'est pas continue au point $x_0 = \frac{\pi}{4}$

#### 2.3. PROLONGEMENT PAR CONTINUITÉ EN UN POINT

> **Définition 4.**
Soit $f$ une fonction numérique non définie en un point $x_0$ ($x_0 \notin D_f$) et admettant une limite finie $\ell$ au point $x_0$: $\lim_{x \to x_0} f(x) = \ell$

La fonction $\tilde{f}$ définie sur $D_{\tilde{f}} = D_f \cup \{x_0\}$ par: $\begin{cases} \tilde{f}(x) = f(x) \text{ si } x \in D_f \\ \tilde{f}(x_0) = \ell \end{cases}$

est continue au point $x_0$, et est appelée le prolongement par continuité de $f$ au point $x_0$.

> **Exemples.**
1) Soit $f$ la fonction numérique définie par:

$$f(x) = \frac{x^3 - 1}{x - 1}$$

On a $1 \notin D_f$ et de plus:

$$\lim_{x \to 1} f(x) = \lim_{x \to 1} \frac{(x - 1)(x^2 + x + 1)}{x - 1} = 3$$

Donc la fonction $f$ admet un prolongement par continuité au point $x_0 = 1$. Ce prolongement est donné par:

$$\begin{cases} \tilde{f}(x) = \frac{x^3 - 1}{x - 1} \text{ si } x \neq 1 \\ \tilde{f}(1) = 3 \end{cases}$$

On pourra remarquer que pour tout $x \in \mathbb{R}$:

$$\tilde{f}(x) = x^2 + x + 1$$

2) Soit $g$ la fonction numérique définie sur $\mathbb{R}^*$ par:

$$g(x) = \frac{\sqrt{1 + \sin x} - 1}{x}$$

On a $0 \notin D_g$ et de plus:

$$\begin{aligned} \lim_{x \to 0} g(x) &= \lim_{x \to 0} \frac{\sqrt{1 + \sin x} - 1}{x} \\ &= \lim_{x \to 0} \frac{\sin x}{x} \cdot \frac{1}{\sqrt{1 + \sin x} + 1} = \frac{1}{2} \end{aligned}$$

Donc la fonction $g$ admet un prolongement par continuité au point $x_0 = 0$. Ce prolongement est donné par:

$$\begin{cases} \tilde{g}(x) = \frac{\sqrt{1 + \sin x} - 1}{x} \text{ si } x \neq 0 \\ \tilde{g}(0) = \frac{1}{2} \end{cases}$$

> **Applications.**
Pour chacun des cas suivants, montrer que la fonction $f$ admet un prolongement par continuité au point puis donner ce prolongement:

1) $f(x) = \frac{x^3 - 2x^2 + 3x + 6}{x + 1}$ et $x_0 = -1$

2) $f(x) = \frac{x^3 - a^3}{x - a}$ et $x_0 = a$ ($a \in \mathbb{R}$)

3) $f(x) = \frac{x \sin x}{\cos x - 1}$ et $x_0 = 0$

4) $f(x) = \frac{(x - 2)^2}{4x - x^3}$ et $x_0 = 2$

5) $f(x) = \frac{|x^2 + 4x| - 3}{x + 3}$ et $x_0 = -3$

6) $f(x) = (x - 1)\sin\left(\frac{1}{x - 1}\right)$ et $x_0 = 1$

#### 2.4. CONTINUITÉ D'UNE FONCTION SUR UN INTERVALLE

1) Une fonction $ f $ est continue sur un intervalle ouvert $ I $ si elle est continue en tout point de $ I $. En particulier: $ f $ est continue sur $ ]a, b[ $ si elle est continue en tout point de $ ]a, b[ $.
2) Une fonction $ f $ est continue sur $ [a, b] $ si elle est continue sur $ ]a, b[ $ et continue à droite en $ a $ et à gauche en $ b $.
3) Une fonction $ f $ est continue sur $ [a, b] $ si elle est continue sur $ ]a, b[ $ et continue à droite en $ a $.
4) Une fonction $ f $ est continue sur $ ]a, b] $ si elle est continue sur $ ]a, b[ $ et continue à gauche en $ b $.

> **Exemples.**
1) Toute fonction constante est continue sur $\mathbb{R}$.
2) Toute fonction polynomial $P$ est continue sur $\mathbb{R}$ car pour tout $x_0 \in \mathbb{R}$: $\lim_{x \to x_0} P(x) = P(x_0)$.
3) Tout fonction rationnelle est continue sur son domaine de définition.
4) Les fonctions $ x \mapsto \sin x $ et $ x \mapsto \cos x $ sont continues sur $ \mathbb{R} $.
5) La fonction $ x \mapsto \tan x $ est continue sur tout intervalle inclus dans son domaine de définition.
6) La fonction $x \mapsto \sqrt{x}$ est continue sur $\mathbb{R}^+$.

> **Application.**
Soit $f$ la fonction numérique de la variable réelle $x$ définie par : $f(x) = x - E(x)$

1. Montrer que la fonction $ f $ est continue sur l'intervalle [1, 2].
2. Montrer que pour tout $k\in \mathbb{Z}$ , la fonction $f$ est continue sur l'intervalle $[k,k + 1[$

#### 2.5. OPÉRATIONS SUR LES FONCTIONS CONTINUES

> **Proposition 5.**
Soit $f$ et $g$ sont deux fonctions continues sur un intervalle $l$ et $k$ un nombre réel. Alors :

(1) Les fonctions $ f + g, k, f $ et $ f, g $ sont continues sur $ l $.
(2) Pour tout $n \in \mathbb{N}^*$, la fonction $f^n: x \mapsto (f(x))^n$ est continue sur $l$.
(3) Si la fonction $ g $ ne s'annule pas sur $ l $ alors $ \frac{1}{g} $ et $ \frac{f}{g} $ sont continues sur $ l $.
(4) La fonction $ |f| $ est continue sur $ l $.
(4) Si $ f $ est positive sur $ l $ alors $ \sqrt{f} $ est continue sur $ l $.

> **Exemples.**
1) La fonction $ f $ définie par $ f(x) = x^2 + 5x + \cos x $ est continue sur $ \mathbb{R} $ en tant que somme de deux fonctions continue sur $ \mathbb{R} $ qui sont $ x \mapsto x^2 + 5x $ et $ x \mapsto \cos x $.
2) La fonction $ g $ définie par $ g(x) = \sqrt{x} (x^3 + 5x - 7) $ est continue sur $ \mathbb{R}^+ $ en tant que produit de deux fonctions continues sur $ \mathbb{R}^+ $ qui sont $ x \mapsto \sqrt{x} $ et $ x \mapsto x^3 + 5x - 7 $.
3) On considere la fonction $ h $ définie par $ h(x) = \frac{x^2 - 2x + 3}{2|x + 1| - 5} $. Etudions la continuité de $ h $ sur $ D_h $.

On a tout d'abord $D_h = \left] -\infty; -\frac{7}{2} \left[ \cup \right] - \frac{7}{2}; \frac{3}{2} \left[ \cup \right] \frac{3}{2}; +\infty \right[$. Soit maintenant $u$ et $v$ les deux fonctions définies sur $\mathbb{R}$ par : $u(x) = x^2 - 2x + 3$ et $v(x) = 2|x + 1| - 5$

La fonction $u$ est continue sur $\mathbb{R}$ car c'est une fonction polynomiale.

La fonction $v$ est continue sur $\mathbb{R}$ en tant que somme de deux fonctions continues sur $\mathbb{R}$.

De plus, la fonction $v$ ne s'annule pas sur $D_h$. Par suite, la fonction $h$ est continue sur tout intervalle inclus dans son domaine de définition.

> **Applications.**
1. Dans chacun des cas suivants, montrer que la fonction $f$ est continue sur son domaine de définition :

a) $f(x) = \frac{4x + 5}{x^2 + 3} \cdot \sin x$

b) $f(x) = |2x - 3| + \frac{x + 1}{x^2 + x + 1}$

c) $f(x) = x^2 - \tan x - 1$

2. Soit $ g $ la fonction numérique définie par $ g(x) = \frac{\sqrt{x - 2}}{4 - x} $. Montré que $ g $ est continue sur l'intervalle [2].
3. Étudier la continuité de la fonction $ x \mapsto xE(x) $ sur l'intervalle [0; 2].

#### 2.6. CONTINUITÉ DE LA COMPOSÉE DE DEUX FONCTIONS

> **Proposition 6.**
Soit $f$ une fonction définie sur un intervalle $I$ et $g$ une fonction définie sur un intervalle $J$ tel que $f(I) \subset J$, et soit $x_0$ un élément de $I$.

Si $f$ est continue au point $x_0$ et $g$ est continue au point $f(x_0)$ alors la fonction $gof$ est continue en $x_0$.

> **Corollaire.**
Si $f$ est continue sur un intervalle $I$ et $g$ est continue sur un intervalle $J$ tel que $f(I) \subset J$ alors la fonction $gof$ est continue sur l'intervalle $I$.

> **Exemples.**
1) Soit $f$ la fonction numérique définie par : $f(x) = \cos(2x^2 - 3x + 4)$

Montrons que la fonction $f$ est continue sur $\mathbb{R}$ :

Puisque les fonctions $f_1 : x \mapsto 2x^2 - 3x + 4$ et $f_2 : x \mapsto \cos x$ sont continues sur $\mathbb{R}$ et $f_1(\mathbb{R}) \subset \mathbb{R}$ alors

la fonction $f = f_2 \circ f_1$ est continue sur $\mathbb{R}$.

2) Soit $g$ la fonction numérique définie par : $g(x) = \sqrt{\frac{x}{1 + \sin^2 x}}$

Etudions la continuité de $g$ sur $\mathbb{R}^*$ :

La fonction $g_1 : x \mapsto \frac{x}{1 + \sin^2 x}$ est continue sur $\mathbb{R}^*$ et $g_1(\mathbb{R}^*) \subset \mathbb{R}^*$, et la fonction $g_2 : x \mapsto \sqrt{x}$ est

continue sur $\mathbb{R}^*$. Il s'ensuit donc que la fonction $g = g_2 \circ g_1$ est continue sur $\mathbb{R}^*$.

> **Applications.**
Dans chacun des cas suivants, étudier la continuité de la fonction $f$ sur les intervalles de $D_f$.

1) $f(x) = \sin\left(\frac{2x + 1}{x^2 - 1}\right)$

2) $f(x) = \sqrt{\frac{x - 3}{x + 2}}$

3) $f(x) = \tan\left(\frac{\pi}{x}\right)$

4) $f(x) = \cos\left(\sqrt{x^2 + 1}\right)$

5) $f(x) = \sqrt{1 - \sin x}$

6) $f(x) = \cos(\tan^2 x)$

#### 2.7. Composée d'une fonction continue et d'une fonction admettant une limite
> **Proposition 7.**
Soit $f$ une fonction définie sur l'ensemble $]x_0 - r, x_0 + r[\ (r > 0)$ et $g$ la fonction définie sur un intervalle ouvert $J$ centré en $\ell$ tel que $f(I) \subset J$.

Si $\lim_{x \to x_0} f(x) = \ell$ et $g$ est continue en $\ell$ alors : $\lim_{x \to x_0} g \circ f(x) = g(\ell)$

> **Remarque.**
La proposition 7 reste valable en $x_0$ à droite ou $x_0$ à gauche ou en $+\infty$ ou en $-\infty$ à condition de remplacer l'intervalle $I$ par un intervalle convenable.

> **Exemples.**
1) Déterminons la limite : $\lim_{x \to 0} \sin\left(\frac{1 - \cos x}{x^2} \pi\right)$

On a $$\lim_{x\to 0}\frac{1 - \cos x}{x^2}\pi = \frac{\pi}{2}$$. Puisque la fonction sin est continue en $$\frac{\pi}{2}$$ alors :

$$\lim_{x\to 0}\sin\left(\frac{1 - \cos x}{x^2}\pi\right) = \sin\frac{\pi}{2} = 1$$

2) Déterminons la limite $$\lim_{x\to +\infty}\cos\left(\pi\sqrt{\frac{x-1}{x+1}}\right)$$

On a $$\lim_{x\to +\infty}\pi\sqrt{\frac{x-1}{x+1}} = \lim_{x\to +\infty}\pi\sqrt{\frac{1-\frac{1}{x}}{1+\frac{1}{x}}} = \pi$$. Puisque la fonction cos est continue en $$\pi$$ alors :

$$\lim_{x\to +\infty}\cos\left(\pi\sqrt{\frac{x-1}{x+1}}\right) = \cos(\pi) = -1$$

> **Applications.**
Calculer les limites suivantes :

1) $$\lim_{x\to +\infty}\left(x - 2\sqrt{x} + \frac{1}{x}\right)^3$$

2) $$\lim_{x\to 0}\tan\left(\frac{\pi\sin x}{3x}\right)$$

3) $$\lim_{x\to -\infty}\cos\left(\frac{\pi x + 1}{x + 2}\right)$$

4) $$\lim_{x\to +\infty}\cos\left(\sin\left(\frac{1}{x}\right)\right)$$

### 3. Image d'un intervalle par une fonction continue
#### 3.1. IMAGE D'UN SEGMENT PAR UNE FONCTION CONTINUE

> **Proposition 8.**
L'image d'un segment par une fonction continue est un segment.

Autrement dit :

$$(f \text{ continue sur}[a,b]) \Rightarrow f([a,b]) = [m,M]$$

> **Remarque.**
Si $$f$$ est continue sur un segment $$[a,b]$$ alors $$M = f(\alpha)$$ est le maximum de $$f$$ sur $$[a,b]$$ et $$m = f(\beta)$$ est le minimum de $$f$$ sur $$[a,b]$$. On a alors : $$f([a,b]) = [m,M]$$ (voir la figure)

> **Exemple.**
Soit $f$ la fonction numérique définie sur $\mathbb{R}$ par : $f(x) = x^2 - 2x$

A partir du graphe de la fonction $f$, on déduit que :

$$\begin{array}{l} f([-1; 2]) = [-1; 3] \quad ; \quad f([0; 2[) = [-1; 0] \\ f([-1; 0]) = [0; 3[ \quad ; \quad f([2; +\infty[) = [0; +\infty[ \\ f([-\infty; 1]) = [-1; +\infty[ \quad ; \quad f(\mathbb{R}) = [-1; +\infty[ \end{array}$$

> **Remarques.**
• La continuité d'une fonction est une condition suffisante pour que l'image d'un intervalle soit un intervalle, mais cette condition n'est pas évidemment nécessaire. En effet, il se peut que l'image d'un intervalle par une fonction discontinue soit un intervalle comme le montre l'exemple suivant :

Considérons la fonction $f$ définie sur $[-1; 2]$ par :

$$\left\{ \begin{array}{l} f(x) = 2x \text{ si } x \in [-1; 1] \\ f(x) = x - 1 \text{ si } x \in ]1; 2] \end{array} \right.$$

L'image de l'intervalle $[-1; 2]$ par la fonction $f$ est l'intervalle $[-2; 2]$ bien que la fonction $f$ ne soit pas continue sur $[-1; 2]$.

• Les intervalles $I$ et $f(I)$ ne sont pas toujours de même nature. A titre d'exemple, l'image de l'intervalle semi-ouvert $[-1; 2]$ par la fonction $x \mapsto x^2$ est le segment $[0; 4]$.

> **Applications.**
Pour chacun des cas suivants, montrer que la fonction $f$ est continue sur l'intervalle $I$ puis déterminer $f(I)$ :

1) $f(x) = x^2 + 2$

et $I = [-1; 3]$

2) $f(x) = \frac{x - 4}{x - 2}$ et $I = [5; 8]$

3) $f(x) = 2x\sqrt{x + 1}$

et $I = [3; 5]$

4) $f(x) = \tan x$ et $I = \left] -\frac{\pi}{2}; \frac{\pi}{2} \right[$

5) $\left\{ \begin{array}{l} f(x) = x + 3 \text{ si } x \le 2 \\ f(x) = x^2 + 1 \text{ si } x > 2 \end{array} \right.$

et $I = [-3; 5]$

#### 3.2. IMAGE D'UN INTERVALLE PAR UNE FONCTION CONTINUE ET STRICTEMENT MONOTONE

Soit $f$ une fonction continue et strictement monotone sur un intervalle $I$.

On a alors les résultats suivants :

|   | L'image de l'intervalle $I$ par la fonction $f$  |   |
| --- | --- | --- |
|  L'intervalle $I$ | $f$ strictement croissante sur $I$ | $f$ strictement décroissante sur $I$  |
|  $[a, b]$ | $[f(a), f(b)]$ | $[f(b), f(a)]$  |
|  $]a, b[$ | $]\lim_{x \to a^+} f(x), \lim_{x \to b^-} f(x)[$ | $]\lim_{x \to b^+} f(x), \lim_{x \to a^+} f(x)[$  |
|  $[a, b[$ | $[f(a), \lim_{x \to b^-} f(x)]$ | $]\lim_{x \to b^+} f(x), f(a)]$  |
|  $]-\infty, a]$ | $]\lim_{x \to -\infty} f(x), f(a)]$ | $[f(a), \lim_{x \to -\infty} f(x)]$  |
|  $]a, +\infty[$ | $]\lim_{x \to a^+} f(x), \lim_{x \to +\infty} f(x)[$ | $]\lim_{x \to -\infty} f(x), \lim_{x \to a^+} f(x)[$  |
|  $\mathbb{R}$ | $]\lim_{x \to -\infty} f(x), \lim_{x \to +\infty} f(x)[$ | $]\lim_{x \to +\infty} f(x), \lim_{x \to -\infty} f(x)[$  |

> **Exemple.**
On considère la fonction numérique $f$ définie par : $f(x) = \frac{2x - 3}{x + 1}$

On a $D_f = ]-\infty; -1[ \cup ]-1; +\infty[$ et $\begin{vmatrix} 2 & -3 \\ 1 & 1 \end{vmatrix} = 2 + 3 = 5 > 0$. La fonction $f$ est donc continue et strictement croissante sur chacun des intervalles $]-\infty; -1[$ et $]-1; +\infty[$. Il en découle donc les résultats suivants :

$$f([0; 1]) = [f(0); f(1)] = [-3; -\frac{1}{2}] \quad , \quad f([-2; -1]) = [f(-2); \lim_{x \to -1^+} f(x)] = [7; +\infty[$$

$$f([-1; 1]) = ]\lim_{x \to -1^+} f(x); f(1)] = ]-\infty; -\frac{1}{2}] \quad , \quad f([2; +\infty[) = [f(2); \lim_{x \to +\infty} f(x)] = [\frac{1}{3}; 2[$$

> **Application.**
Soit $f$ la fonction numérique définie sur $\mathbb{R}$ par : $f(x) = x^2 - 2x + 3$

Déterminer les images des intervalles suivants par la fonction $f$ :

$$I = ]-\infty; 0] \quad ; \quad J = [1; 2] \quad ; \quad K = ]-5; -1[ \quad ; \quad L = [\sqrt{2}; +\infty[$$

#### 3.3. THÉORÈME DES VALEURS INTERMÉDIAIRES

> **Proposition 10.**
Si $f$ une fonction continue sur un intervalle $[a, b]$ alors, pour tout réel $\lambda$ compris entre $f(a)$ et $f(b)$ il existe au moins un réel $c$ appartenant à l'intervalle $[a, b]$ tel que $f(c) = \lambda$.

En d'autres termes : l'équation $f(x) = \lambda$ d'inconnue $x$ admet au moins une solution dans $[a, b]$, pour tout $\lambda$ compris entre $f(a)$ et $f(b)$.

> **Preuve.**
Comme $f$ est continue sur l'intervalle $[a, b]$ alors il existe deux réels $m$ et $M$ tels que $f([a, b]) = [m, M]$. Puisque les réels $f(a)$ et $f(b)$ appartiennent à $[m, M]$ (en supposant par exemple que $f(a) \le f(b)$) alors $[f(a), f(b)] \subset [m, M]$, c'est-à-dire que $[f(a), f(b)] \subset f([a, b])$. Il s'ensuit donc que pour tout réel $\lambda$ compris entre $f(a)$ et $f(b)$, il existe au moins un réel $c$ appartenant à $[a, b]$ tel que $f(c) = \lambda$.

> **Exemple.**
Soit $f$ la fonction définie sur $[0; \pi]$ par : $f(x) = x + \cos x$

La fonction $f$ est continue sur $[0; \pi]$ et de plus $f(0) = 1$ et $f(\pi) = \pi - 1$.

Puisque 2 est compris entre $f(0)$ et $f(\pi)$ alors il existe au moins un réel $c \in [0; \pi]$ tel que $f(c) = 2$.

Cela signifie que l'équation $x + \cos x = 2$ admet au moins une solution sur l'intervalle $[0; \pi]$.

> **Corollaire.**
Si la fonction $f$ est continue sur $[a, b]$ tel que $f(a), f(b) < 0$ alors l'équation $f(x) = 0$ admet au moins une solution dans l'intervalle $[a, b]$. Si de plus, la fonction $f$ est strictement monotone, cette solution est unique.

> **Remarque.**
On peut interpréter le résultat du corollaire précédent comme suit : Si la fonction $f$ est continue sur $[a, b]$ et si $f(a)$ et $f(b)$ sont de signes contraires alors le graphe $\mathcal{C}_f$ coupe l'axe des abscisses, au moins une fois, en un point dont l'abscisse appartient à $[a, b]$.

> **Exemples.**
1) Montrons que l'équation $8x^3 - 6x - 1 = 0$ admet une solution dans chacun des intervalles $]-1; -\frac{1}{2}[$,

$$]-\frac{1}{2}; 0[ \text{ et } ]0; 1[ :$$

On considère la fonction $g$ définie sur $\mathbb{R}$ par : $g(x) = 8x^3 - 6x - 1$

La fonction $g$ est évidemment continue sur $\mathbb{R}$ car c'est une fonction polynomiale.

- On a $g(-1) = -3$ et $g\left(-\frac{1}{2}\right) = 1$, donc $g(-1).g\left(-\frac{1}{2}\right) < 0$. D'après le théorème des valeurs

intermédiaires, l'équation $g(x) = 0$ admet une solution dans l'intervalle $]-1; -\frac{1}{2}[$.

- On a $g\left(-\frac{1}{2}\right) = 1$ et $g(0) = -1$, donc $g(0).g\left(-\frac{1}{2}\right) < 0$. D'après le théorème des valeurs

intermédiaires, l'équation $g(x) = 0$ admet une solution dans l'intervalle $]-\frac{1}{2}; 0[$.

- On a $g(1) = 1$ et $g(0) = -1$, donc $g(0).g(1) < 0$. D'après le théorème des valeurs intermédiaires,

l'équation $g(x) = 0$ admet une solution dans l'intervalle $]0; 1[$.

D'où l'équation $8x^3 - 6x - 1 = 0$ admet une solution dans chacun des intervalles $]-1; -\frac{1}{2}[, ]-\frac{1}{2}; 0[$ et

Comme de plus $g$ est un polynôme de degré 3, ce sont les seules solutions sur $\mathbb{R}$.

2) Montrons que l'équation $x + \sin x - 1 = 0$ admet une unique solution dans l'intervalle $\left[0; \frac{\pi}{2}\right]$:

On considère la fonction $f$ définie sur $\left[0; \frac{\pi}{2}\right]$ par : $f(x) = x + \sin x - 1$

La fonction $f$ est continue et strictement croissante sur $\left[0; \frac{\pi}{2}\right]$ en tant que somme des fonctions conti

et strictement croissantes sur $\left[0; \frac{\pi}{2}\right]$. De plus $f(0) = -1$ et $f\left(\frac{\pi}{2}\right) = \frac{\pi}{2}$, donc $f(0).f\left(\frac{\pi}{2}\right) < 0$. D'ap

le théorème des valeurs intermédiaires, l'équation $f(x) = 0$ admet une unique solution dans $\left[0; \frac{\pi}{2}\right]$.

> **Applications.**
1) Montrer que chacune des équations suivantes admet au moins une solution dans l'intervalle $I$ :

a) $x^4 + x^3 + 4x - 1 = 0$ et $I = [0; 1]$ ;

b) $2 \cos x - x = 0$

et $I = [0; \pi]$

c) $1 + \sin x = 4x$ et et $I = \left[0; \frac{\pi}{2}\right]$ ;

d) $\tan x + x^2 = 2$

et $I = \left]\frac{\pi}{4}; \frac{\pi}{3}\right[$

2) Montrer que l'équation $x^3 - 6x^2 + 6 = 0$ admet une solution unique dans l'intervalle $[-2; 0]$.

3) Soit $f$ une fonction continue sur un intervalle $I$ de $\mathbb{R}$ telle que : $\forall x \in I, f(x) \neq 0$

Montrer par l'absurde que la fonction $f$ garde un signe constant sur l'intervalle $I$.

#### 3.4. PRINCIPE DE LA MÉTHODE DE DICHOTOMIE

Soit $f$ une fonction continue sur un segment $[a, b]$ telle que l'équation $f(x) = 0$ admet une solution unique $\alpha$ dans $[a, b]$.
pour déterminer un encadrement du nombre $\alpha$, on démarre donc en ayant localisé la racine $\alpha$ entre $a$ et $b$ ($a < \alpha < b$); et on sait par exemple que sur cet intervalle, la fonction $f$ (continue) est strictement croissante.
On calcule alors le centre $m$ du segment $[a, b]$ (à savoir $m = \frac{a + b}{2}$) puis son image par $f: f(m)$, et on la compare à 0.
Deux cas peuvent alors se produire :

Cas où $f(m) < 0$

On a alors $m < \alpha < b$. On reprend

la bissection de l'intervalle en posant :

$a = m$ et $b = b$

puis on continue comme précédemment...

Cas où $f(m) > 0$

On a alors $a < \alpha < m$. On reprend

la bissection de l'intervalle en posant :

$a = a$ et $b = m$

puis on continue comme précédemment...

> **Exemple.**
Soit $f$ la fonction définie par : $f(x) = x^3 + x^2 + x - 2$

La fonction $f$ est continue et strictement croissante sur $[0, 1]$ et on a $f(0), f(1) < 0$. Donc l'équation $f(x) = 0$ admet une solution unique $\alpha$ tel que $0 < \alpha < 1$. Déterminons un encadrement de $\alpha$ de longueur 0,25.

Le centre du $[0, 1]$ est $\frac{1}{2}$ et on a $f\left(\frac{1}{2}\right) = -\frac{9}{8}$. Donc $f\left(\frac{1}{2}\right) \times f(1) < 0$ et $\frac{1}{2} < \alpha < 1$. (Longueur : $1 - \frac{1}{2} = \frac{1}{2}$)

Le centre du $\left[\frac{1}{2}, 1\right]$ est $\frac{3}{4}$ et on a $f\left(\frac{3}{4}\right) = -\frac{17}{64}$. Donc $f(1) \times f\left(\frac{3}{4}\right) < 0$ et $\frac{3}{4} < \alpha < 1$. (Longueur : $1 - \frac{3}{4} = \frac{1}{4}$)

Ainsi : $\frac{3}{4} < \alpha < 1$

### 4. Fonction réciproque d'une fonction continue et strictement monotone
#### 4.1. THÉORÈME DE LA FONCTION RÉCIPROQUE

Proposition 11

Si $f$ est une fonction continue et strictement monotone sur un intervalle $I$ alors elle réalise une bijection de $I$ sur l'intervalle $f(I)$.

Preuve

Puisque $I$ est un intervalle de $\mathbb{R}$ et $f$ est continue sur $I$ alors $f(I)$ est aussi un intervalle de $\mathbb{R}$. Donc :

$$\forall y \in f(I), \exists x \in I: y = f(x)$$

Soit $a$ et $b$ deux éléments distincts de $I$. Puisque $f$ est strictement monotone sur $I$ alors $f(a) < f(b)$ ou $f(a) > f(b)$, donc $f(a) \neq f(b)$. Par suite, pour tout $y \in f(I)$, l'équation $f(x) = y$ admet une solution unique dans $I$, et donc $f$ est une bijection de $I$ sur $f(I)$.

Exemple

Soit $f$ la fonction numérique définie sur $I = ]-\infty; -1]$ par : $f(x) = \frac{x^2 + 5}{x - 2}$

Montrons que $f$ est une bijection de $I$ sur un intervalle $J$ à déterminer et calculons $f^{-1}(x)$ pour $x \in J$. La fonction $f$ étant continue et dérivable sur $I$ car c'est la restriction d'une fonction rationnelle et on a pour tout $x \in I$: $f'(x) = \frac{2x(x-2)-(x^2+5)}{(x-2)^2} = \frac{(x+1)(x-5)}{(x-2)^2}$. Il s'ensuit donc que : $\forall x \in ]-\infty; -1[, f'(x) > f'(x)$

Puisque la fonction $f$ est continue et strictement croissante sur $I$ alors elle est une bijection de $I$ sur l'intervalle $J = f(I)$ avec : $J = f(I) = \left] \lim_{x \to -\infty} f(x); f(-1) \right] = ]-\infty; -2]$

Détermination de $f^{-1}(x)$ pour tout $x \in J$: Soit $x \in J$ et $y \in I$ tels que $y = f^{-1}(x)$. On a donc :

$$y = f^{-1}(x) \Leftrightarrow x = f(y) \Leftrightarrow \frac{y^2 + 5}{y - 2} = x \Leftrightarrow y^2 - xy + 2x + 5 = 0$$

Cette équation admet deux solutions réelles qui sont : $y_1 = \frac{x - \sqrt{x^2 - 8x - 20}}{2}$ et $y_2 = \frac{x + \sqrt{x^2 - 8x - 20}}{2}$

On a : $y_1 + 1 = \frac{x + 2 - \sqrt{x^2 - 8x - 20}}{2} \leq 0$ (car $x \in J$ c'est-à-dire : $x + 2 \leq 0$ et $-\sqrt{x^2 - 8x - 20} \leq 0$)

En définitive : $(\forall x \in J), f^{-1}(x) = \frac{x - \sqrt{x^2 - 8x - 20}}{2}$

> **Applications.**
Dans chacun des cas suivants, montrer que la fonction $f$ réalise une bijection de $I$ sur un intervalle $J$ à déterminer puis déterminer une expression de $f^{-1}(x)$ pour $x \in J$ :

1) $f(x) = x^2 - 2x + 5$ et $I = [1; +\infty[$

2) $f(x) = 4x - x^2$ et $I = ]-\infty; 2[$

3) $f(x) = \sqrt{x^2 - x} - x$ et $I = ]-\infty; 0]$

4) $f(x) = \frac{x}{x^2 + 2}$ et $I = [0; \sqrt{2}]$

#### 4.2. PROPRIÉTÉS DE LA FONCTION RÉCIPROQUE

> **Proposition 12.**
Si $f$ est une fonction continue et strictement monotone sur un intervalle $I$ alors :

- La fonction réciproque $ f^{-1} $ est continue sur $ f(I) $ et a même sens de variation que la fonction $ f $.
- Les courbes représentatives de $ f $ et de $ f^{-1} $, dans un repère orthonormé, sont symétriques par rapport à la première bissectrice (c'est-à-dire par rapport à la droite d'équation $ y = x $)

> **Preuve.**
Soit $y_1$ et $y_2$ deux éléments distincts de $f(I)$. Il existe deux réels distincts $x_1$ et $x_2$ de $I$ tels que $y_1 = f(x_1)$ et $y_2 = f(x_2)$ (car $f$ est une bijection de $I$ sur $f(I)$). Donc : $x_1 = f^{-1}(y_1)$ et $x_2 = f^{-1}(y_2)$, et alors :

$$\frac{f^{-1}(y_2) - f^{-1}(y_1)}{y_2 - y_1} = \frac{x_1 - x_2}{f(x_1) - f(x_2)}$$

Cela signifie donc que les taux de variation des deux fonctions $f$ et $f^{-1}$ ont le même signe et par suite $f$ et $f^{-1}$ ont le même sens de variation.

Soit $\mathcal{C}_f$ et $\mathcal{C}_{f^{-1}}$ les graphes de $f$ et $f^{-1}$ respectivement dans un repère orthonormé $(O, \bar{i}, \bar{j})$.

Soit $M(x, y)$ un point du plan et $M'(y, x)$ son symétrique par rapport à la première bissectrice. On a alors :

$$M(x, y) \in \mathcal{C}_f \Leftrightarrow y = f(x) \Leftrightarrow x = f^{-1}(y) \Leftrightarrow M'(y, x) \in \mathcal{C}_{f^{-1}}$$

Il s'ensuit donc que $\mathcal{C}_f$ et $\mathcal{C}_{f^{-1}}$ sont symétriques par rapport à la première bissectrice.

### 5. Fonctions réciproques usuelles
#### 5.1. FONCTION ARCTANGENTE

> **Définition 6.**
La fonction $x \mapsto \tan x$ est une bijection de $]-\frac{\pi}{2}; \frac{\pi}{2}[$ sur $\mathbb{R}$. Sa fonction réciproque est appelée fonction Arctangente et on la note Arctan.

> **Proposition 13.**
- La fonction Arctan est définie sur $\mathbb{R}$ et à valeurs dans $]-\frac{\pi}{2}; \frac{\pi}{2}[$ . On a de plus :

$$(\forall x \in \mathbb{R}) \left( \forall y \in \right) - \frac{\pi}{2}; \frac{\pi}{2} \left[ \right] \quad (\operatorname{Arc} \tan x = y \Leftrightarrow x = \tan y)$$

Pour tout $x\in \mathbb{R}$ .. $\tan (\operatorname {Arc}\tan x) = x$
Pour tout $x\in ] - \frac{\pi}{2};\frac{\pi}{2} ]$ .. $\operatorname {Arctan}(\tan x) = x$
- La fonction Arc tan est continue et strictement croissant sur $\mathbb{R}$. On a pour tout $(x_{1}, x_{2}) \in \mathbb{R}^{2}$:

$$(\operatorname{Arc} \tan x_{1} = \operatorname{Arc} \tan x_{2} \Leftrightarrow x_{1} = x_{2}) \quad \text{et} \quad (\operatorname{Arc} \tan x_{1} < \operatorname{Arc} \tan x_{2} \Leftrightarrow x_{1} < x_{2})$$

- La fonction $ x \mapsto \operatorname{Arc} \tan x $ est impaire: $ (\forall x \in \mathbb{R}) \operatorname{Arctan}(-x) = -\operatorname{Arc} \tan x $
- On a les limites suivantes: $\lim_{x \to -\infty} \operatorname{Arc} \tan x = \frac{\pi}{2}$, $\lim_{x \to -\infty} \operatorname{Arc} \tan x = -\frac{\pi}{2}$, $\lim_{x \to 0} \frac{\operatorname{Arc} \tan x}{x} = 1$

Tableau de quelques valeurs importantes

|  $x$ | 0 | $\frac{\sqrt{3}}{3}$ | 1 | $\sqrt{3}$  |
| --- | --- | --- | --- | --- |
|  Arctan $x$ | 0 | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$  |

La courbe représentative de la fonction Arctan

> **Exemples.**
1. Calculons $\text{Arctan}\left(\tan \frac{101\pi}{4}\right)$ : On sait que si $x \in \left]-\frac{\pi}{2}; \frac{\pi}{2}\right[$ alors $\text{Arctan}(\tan x) = x$.

Puisque $\frac{101\pi}{4} = 25\pi + \frac{\pi}{4}$ et la fonction tan est périodique de période $\pi$ et $\frac{\pi}{4} \in \left]-\frac{\pi}{2}; \frac{\pi}{2}\right[$ alors :

$$\text{Arctan}\left(\tan \frac{101\pi}{4}\right) = \text{Arctan}\left(\tan\left(25\pi + \frac{\pi}{4}\right)\right) = \text{Arctan}\left(\tan \frac{\pi}{4}\right) = \frac{\pi}{4}$$

2. Résolvons dans $\mathbb{R}$ l'équation : $(E)$ : $\text{Arctan } x = \text{Arctan } \frac{1}{2} + \text{Arctan } \frac{1}{3}$

On pose : $\text{Arctan } \frac{1}{2} = \alpha$ et $\text{Arctan } \frac{1}{3} = \beta$ donc : $\tan \alpha = \frac{1}{2}$ et $\tan \beta = \frac{1}{3}$

L'équation $(E)$ est donc équivalente à $\text{Arctan } x = \alpha + \beta$. Puisque $0 < \frac{1}{2} < \frac{\sqrt{3}}{3}$ et $0 < \frac{1}{3} < \frac{\sqrt{3}}{3}$ alors

$0 < \alpha < \frac{\pi}{6}$ et $0 < \beta < \frac{\pi}{6}$ et donc $0 < \alpha + \beta < \frac{\pi}{3}$. Par conséquent :

$$(E) \Leftrightarrow x = \tan(\alpha + \beta) \Leftrightarrow x = \frac{\tan \alpha + \tan \beta}{1 - \tan \alpha \cdot \tan \beta} = \frac{\frac{1}{2} + \frac{1}{3}}{1 - \frac{1}{6}} = 1$$

Par suite, l'ensemble des solutions de l'équation $(E)$ est : $S = \{1\}$

3. Calculons les limites de la fonction $f : x \mapsto (x+1)\text{Arctan } \frac{1}{x}$ aux bornes de son domaine de définition.

On a $D_f = ]-\infty, 0[ \cup ]0, +\infty[$. On a donc :

- $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (x + 1) \operatorname{Arctan} \frac{1}{x} = \frac{\pi}{2} \operatorname{car}: \lim_{x \to 0^+} \frac{1}{x} = +\infty \operatorname{et} \lim_{x \to +\infty} \operatorname{Arctan} x = \frac{\pi}{2}$
- $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (x + 1) \operatorname{Arctan} \frac{1}{x} = -\frac{\pi}{2} \operatorname{car}: \lim_{x \to 0^+} \frac{1}{x} = -\infty \operatorname{et} \lim_{x \to -\infty} \operatorname{Arctan} x = -\frac{\pi}{2}$
- En posant $ X = \operatorname{Arctan} \frac{1}{x} $ on obtient: $ \lim_{|x| \to +\infty} f(x) = \lim_{x \to 0} \frac{X}{\tan x} + X = 1 $

> **Applications.**
1. Déterminer le domaine de définition de la fonction $ f: x \mapsto \tan(2\operatorname{Arctan} x) $ puis donner une expression simplifiée de $ f(x) $.
2. Résoudre dans $\mathbb{R}$ ce qui suit: $\operatorname{Arctan} x + \operatorname{Arctan}(3x) = \frac{\pi}{3}$; $\operatorname{Arctan}(2x) + \operatorname{Arctan}(x - 1) \leq 0$
3. Simplifier les écrites des nombres suivants: $\operatorname{Arc}\tan \left(\tan \left(\frac{35\pi}{6}\right)\right)$ et $\operatorname{Arc}\tan \left(\frac{1}{\tan\left(\frac{36\pi}{7}\right)}\right)$

4. Calculer les limites suivantes: $\lim_{x\to 2}\frac{\operatorname{Arc}\tan(x - 2)}{x^2 - 4}$ et $\lim_{x\to -\infty}x\left(\frac{\pi}{2} +\operatorname{Arc}\tan x\right)$
5. Montrer que la fonction $ g: x \mapsto \tan x - \sqrt{\tan^2 x - \tan x} $ réalise une bijection de $ I = \left[\frac{\pi}{4}; \frac{\pi}{2}\right] $ sur un intervalle $ J $ à déterminer puis calculer $ f^{-1}(x) $ pour tout $ x \in J $.

#### 5.2. FONCTION RACINE n$^{ième}$

> **Définition 7.**
Soit $n$ un entier naturel non nul.

La fonction $x \mapsto x^n$ réalise une bijection de $\mathbb{R}^+$ sur $\mathbb{R}^+$. Sa fonction réciproque est appelée la fonction racine $n^{ième}$ et on la note $\sqrt[n]{x}$.

Pour tout $x \in \mathbb{R}^+$, $\sqrt[n]{x}$ se lit « racine $n^{ième}$ de $x$ ».

> **Proposition 14.**
Soit $n \in \mathbb{N}^*$.

- On a alors pour tous $x$ et $y$ de $\mathbb{R}^+$:

$$\sqrt[n]{x} = y \Leftrightarrow y^n = x \quad ; \quad \sqrt[n]{x} = \sqrt[n]{y} \Leftrightarrow x = y \quad ; \quad \sqrt[n]{x} < \sqrt[n]{y} \Leftrightarrow x < y$$

- On a alors pour tout $ x \in \mathbb{R}^+ $: $ \sqrt[n]{x^n} = \left(\sqrt[n]{x}\right)^n = x $
- La fonction $ x \mapsto \sqrt[n]{x} $ est continue sur $ \mathbb{R}^+ $ et de plus: $ \lim_{x \to +\infty} \sqrt[n]{x} = +\infty $

> **Remarque.**
Soit $a$ un réel non nul et $n \in \mathbb{N}^* - \{1\}$.

L'ensemble des solutions de l'équation $x^n = a$ dépend de signe du nombre $a$ et de la parité de l'entier $n$.

Le tableau ci-contre résume les cas possibles.

|  Parité de n Signe de a | n pair | n impair  |
| --- | --- | --- |
|  $a > 0$ | $S = \{-\sqrt[n]{a}; \sqrt[n]{a}\}$ | $S = \{\sqrt[n]{a}\}$  |
|  $a < 0$ | $S = \emptyset$ | $S = \{-\sqrt[n]{-a}\}$  |

> **Proposition 15.**
Soit $a$ et $b$ deux réels, et $p$ et $n$ deux entiers naturels supérieurs ou égaux à 2.

On a alors les propriétés suivantes :

$$\sqrt[n]{a} \times \sqrt[n]{b} = \sqrt[n]{ab} \quad ; \quad \sqrt[n]{\frac{1}{a}} = \frac{1}{\sqrt[n]{a}} \quad (\text{avec } a \neq 0) \quad ; \quad \sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}} \quad (\text{avec } b \neq 0)$$

$$\sqrt[n]{a^p} = \sqrt[n]{a} \quad ; \quad \sqrt[n]{\sqrt[n]{a}} = \sqrt[n]{a} \quad ; \quad (\sqrt[n]{a})^p = \sqrt[n]{a^p}$$

> **Exemple.**
Simplifions le nombre : $$A = \frac{\sqrt[4]{32} \times \sqrt[4]{27} \times \sqrt[4]{108}}{\sqrt[4]{144}}$$

On a : $$A = \frac{\sqrt[4]{2^1} \times \sqrt[4]{3^1} \times \sqrt[4]{2^2} \times 3^1}{\sqrt[4]{2^4} \times 3^2} = \frac{\sqrt[4]{2^4} \times 2 \times \sqrt[4]{3^1} \times \sqrt[4]{2^2} \times \sqrt[4]{3^1}}{\sqrt[4]{2^8} \times \sqrt[4]{3^2}} = \frac{2\sqrt[4]{2} \times \sqrt{3} \times \sqrt{2} \times \sqrt[4]{3^1}}{\sqrt{2} \times \sqrt[4]{3}} = 6\sqrt[4]{2}$$

> **Applications.**
1. Simplifier les nombres suivants: $ A = \frac{\sqrt[4]{\sqrt{256}} \times \sqrt[4]{64}}{\sqrt[4]{24300000} \times \sqrt[4]{1024}} $ et $ B = \frac{\sqrt[4]{9} \times \sqrt[4]{\sqrt{3}} \times \sqrt[4]{9}}{\sqrt[4]{729}\sqrt[4]{\sqrt{3}}} $.
2. Comparer les nombres $\sqrt[4]{5}$ et $\sqrt[4]{4}$.
3. Montrer que: $(\forall a \in \mathbb{R}^*)(\forall n \in \mathbb{N}^*)(\forall p \in \mathbb{Z}) : \sqrt[a^p] = (\sqrt[a]^p)$
4. Montrer que: $(\forall a \in \mathbb{R}^*)(\forall n \in \mathbb{N}^*)(\forall p \in \mathbb{N}^*) : \sqrt[a]{a} \times \sqrt[a]{a} = \sqrt[a^{n+p}]$
5. Résoudre dans $\mathbb{R}$ l'équation: $\sqrt[3]{(x + 1)^2} -\sqrt[3]{(x - 1)^2} = \sqrt[3]{4x}$

> **Proposition 16.**
Soit $$u$$ une fonction positive sur un intervalle ouvert $$I$$ et $$x_0 \in I$$.

- Si $ u $ est continue sur $ I $ alors la fonction $ \sqrt{u} $ est continue sur $ I $.
- Si $\lim_{x\to x_0}u(x) = \ell$ alors $\lim_{x\to x_0}\sqrt{u(x)} = \sqrt{\ell}$
- Si $\lim_{x\to x_0}u(x) = +\infty$ alors $\lim_{x\to x_0}\sqrt{u(x)} = +\infty$

> **Exemples.**
1. Etudions la continuité de la fonction $$f : x \mapsto \sqrt[4]{\operatorname{Arc} \tan x}$$ sur $$\mathbb{R}^+$$ :

La fonction Arc tan est continue et positive sur $$\mathbb{R}^+$$. Il s'ensuit donc que $$f$$ est continue sur $$\mathbb{R}^+$$.

2. Calculons la limite : $$\lim_{x \to 1} \frac{\sqrt[4]{x} - 1}{x - 1}$$

En utilisant l'identité remarquable $$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$ on obtient :

$$\lim_{x \to 1} \frac{\sqrt[4]{x} - 1}{x - 1} = \lim_{x \to 1} \frac{1}{\sqrt[4]{x^2} + \sqrt[4]{x} + 1} = \frac{1}{3}$$

> **Applications.**
1. Étudier la continuité de la fonction $ f: x \mapsto \sqrt{\frac{x}{x - 1}} $ sur chaque intervalle de son domaine de définition.
2. Calculer les limites suivantes: $\lim_{x\to 0}\frac{\sqrt{x + 1} - 1}{\sqrt{x + 1} - 1}$, $\lim_{x\to +\infty}\left(\sqrt{x^3 + x} -x\right)$, $\lim_{x\to +\infty}\left(\sqrt{x^2 + 1} -\sqrt{x^2 + 1}\right)$

#### 5.3. PUISSANCE RATIONNELLE D'UN NOMBRE STRICTEMENT POSITIF

> **Définition 8.**
Soit $a$ un réel strictement positif et $r$ un nombre rationnel. On pose $r = \frac{p}{q}$ avec $p \in \mathbb{Z}$ et $q \in \mathbb{N}^*$.

Le nombre $a^r$ est le nombre $\sqrt[q]{a^p}$. Ce nombre est appelé la puissance rationnelle de nombre $a$ d'exposant $r$.

> **Remarque.**
Soit $a$ un réel strictement positif et $n \in \mathbb{N}^* - \{1\}$.

On a : $\sqrt{a} = \sqrt[2]{a} = a^{\frac{1}{2}}$ et $\sqrt[3]{a} = a^{\frac{1}{3}}$. De façon générale, on a l'égalité : $\sqrt[n]{a} = a^{\frac{1}{n}}$

> **Proposition 17.**
Soit $r$ et $r'$ deux nombres rationnels, et $a$ et $b$ deux réels strictement positifs.

Alors on a les égalités suivantes :

$$a^r \times a^{r'} = a^{r+r'} \ ;\ (ab)^r = a^r b^r \ ;\ (a^r)^{r'} = a^{rr'} \ ;\ a^{-r} = \frac{1}{a^r} \ ;\ \left(\frac{a}{b}\right)^r = \frac{a^r}{b^r} \ ;\ \frac{a^r}{a^{r'}} = a^{r-r'}$$

> **Exemple.**
Simplifions le nombre $A = \frac{\sqrt[4]{32} \times \sqrt[4]{27} \times \sqrt[4]{108}}{\sqrt[4]{6}}$ :

On a : $A = \frac{(2^3)^{\frac{1}{4}} \times (3^3)^{\frac{1}{6}} \times (2^2 \times 3^3)^{\frac{1}{4}}}{(2 \times 3)^{\frac{1}{4}}} = \frac{2^{\frac{5}{4}} \times 3^{\frac{1}{2}} \times 2^{\frac{1}{2}} \times 3^{\frac{3}{4}}}{2^{\frac{1}{4}} \times 3^{\frac{1}{4}}} = 2^{\frac{5}{4} \cdot \frac{1}{2} \cdot \frac{1}{4}} \times 3^{\frac{1}{2} \cdot \frac{3}{4} \cdot \frac{1}{4}} = 2^{\frac{3}{2}} \times 3 = 6\sqrt{2}$

> **Applications.**
1) Simplifier les nombres suivants :

$$X = \frac{(125)^{\frac{2}{6}} \times (625)^{\frac{1}{4}} \times (25)^{\frac{5}{2}}}{5^{\frac{12}{3}}} \quad \text{et} \quad Y = \frac{(7^{\frac{2}{3}})^{\frac{1}{2}} \times (3^{\frac{2}{3}})^{\frac{3}{2}} \times (21)^{\frac{3}{4}}}{(7^{\frac{3}{2}})^{\frac{1}{3}} \times (243)^{\frac{2}{3}} \times (63^{-2})^{\frac{1}{6}}}$$

2) Soit $f$ une fonction continue sur l'intervalle $[-1; 0]$.

Montrer qu'il existe $c \in ]-1; 0[$ tel que : $f(c) = \frac{c}{4\operatorname{Arc}\tan c + \pi} + (-c)^{-\frac{1}{3}}$

3) a) Montrer que pour tout $ x \in ]0;1[:x^{\frac{6}{7}} > x $
b) En déduire que pour tout $(x,y)\in \left(\mathbb{R}_{+}^{*}\right)^{2}:\sqrt[3]{x^{n}} +\sqrt[3]{y^{n}} >\sqrt[3]{(x + y)^{n}}$

## Méthodes

### A. Étude de la continuité
On considère la fonction numérique f définie sur ℝ par :

$$\left\{ \begin{array}{l} f(x) = x \cos \left(\frac{1}{x}\right) \quad \text{si} \quad x \neq 0 \\ f(0) = 0 \end{array} \right.$$

1) Montrer que la fonction $ f $ est continue en 0.
2) Étudier la continuité de la fonction $ f $ sur chacun des intervalles $ ]0; +\infty[ $ et $ ] - \infty; 0[ $.
La fonction $f$ est-elle continue sur $\mathbb{R}$?
3) Déterminer $\lim_{x\to +\infty}f(x)$

> **Solution.**
1) Montrons que la fonction f est continue en 0 :

On a pour tout x ∈ ℝ*, |f(x)| = |x| . |cos(1/x)|. Puisque |cos(1/x)| ≤ 1 alors : ∀x ∈ ℝ*, |f(x)| ≤ |x|.

Puisque lim_{x→0} |x| = 0 alors lim_{x→0} f(x) = 0 = f(0). Donc : f est continue en 0.

• Pour montrer que lim_{x→a} f(x) = ℓ, il suffit de montrer qu'au voisinage de a :

$$|f(x) - \ell| \leq g(x) \text{ avec } \lim_{x \to a} g(x) = 0$$

On pourra aussi montrer que : h(x) ≤ f(x) - ℓ ≤ g(x) avec lim_{x→a} g(x) = lim_{x→a} h(x) = 0

• On étudiera la continuité d'une fonction f en x₀ lorsque f sera définie sur un intervalle ouvert contenant x₀. Pour démontrer que f est continue en x₀ il suffit de montrer que lim_{x→x₀} f(x) = f(x₀).

2) Étudions la continuité de la fonction f sur chacun des intervalles ]0; +∞[ et ]-∞; 0[ :

La fonction f₁ : x ↦ 1/x est continue sur chacun des intervalles ]0; +∞[ et ]-∞; 0[, et les fonctions

f₂ : x ↦ cos x et f₃ : x ↦ x sont continues sur ℝ. Donc les fonctions f₂ ∘ f₁ : x ↦ cos(1/x) et f₃ : x ↦ x sont continues sur chacun des intervalles ]0; +∞[ et ]-∞; 0[. Par conséquent, la fonction f = f₃ × (f₂ ∘ f₁) est continue sur chacun des intervalles ]0; +∞[ et ]-∞; 0[.

• Pour étudier la continuité d'une fonction f sur un intervalle I avec une définition

« particulière » en certains points de I : x₀ < x₁ < ... < xₙ, il faut étudier deux aspects :

Aspect global : Sur des intervalles ne contenant pas les nombres xᵢ, pour cela on utilise

les résultats généraux sur les fonctions continues (propositions 5, 12, 6 et son corollaire)

et la continuité des fonctions usuelles.

Aspect local: en chacun des points $x_i$ : pour cela on étudie $\lim_{x \to x_i} f(x)$.

2)- Déterminons la limite $\lim_{x \to +\infty} f(x)$ :

On a $\lim_{x \to +\infty} \frac{1}{x} = 0$ et la fonction $\cos$ est continue en 0. Donc : $\lim_{x \to +\infty} \cos\left(\frac{1}{x}\right) = \cos(0) = 1$

Puisque $\lim_{x \to +\infty} x = +\infty$, alors : $\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} x \cos\left(\frac{1}{x}\right) = +\infty$

### B. Opérations sur les fonctions continues
On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par : $f(x) = E(x) + (x - E(x))^2$

1) Étudier la continuité de $ f $ au point $ x_0 = 2 $.
2) Étudier la continuité de $ f $ au point $ x_{1} = \sqrt{2} $.
3) Étudier la continuité de la fonction $ f $ sur $ \mathbb{R} $.

> **Solution.**
1) Étudions la continuité de $f$ au point $x_0 = 2$ :

Pour cela, il suffit de donner l'expression de $f(x)$ sur chacun des intervalles $[1; 2[$ et $[2; 3[$ (car la continuité en un point est une notion locale). On a $f(2) = 2$ et :

$\forall x \in [1; 2[$, $f(x) = 1 + (x - 1)^2$. Donc : $\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (1 + (x - 1)^2) = 2 = f(2)$

La fonction $f$ est donc continue à gauche en $x_0 = 2$.

$\forall x \in [2; 3[$, $f(x) = 2 + (x - 2)^2$. Donc : $\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (2 + (x - 2)^2) = 2 = f(2)$

La fonction $f$ est donc continue à droite en $x_0 = 2$.

En résumé, la fonction $f$ est continue au point $x_0 = 2$.

Pour étudier la continuité d'une fonction $f$ en un point $x_0$, il est parfois intéressant d'étudier la continuité à gauche et la continuité à droite puis appliquer le résultat :

$$(f \text{ est continue en } x_0) \Leftrightarrow \lim_{x \to x_0^+} f(x) = \lim_{x \to x_0} f(x) = f(x_0)$$

2) Étudions la continuité de $f$ au point $x_1 = \sqrt{2}$ :

Puisque les fonctions $g : x \mapsto E(x)$ et $h : x \mapsto x$ sont continues en $x_1 = \sqrt{2}$, alors la fonction $f = g + (h - g)^2$ est continue au point $x_1 = \sqrt{2}$.

3) Étudions la continuité de $f$ sur $\mathbb{R}$ :

Puisque les fonctions $g : x \mapsto E(x)$ et $h : x \mapsto x$ sont continues sur chaque intervalle inclus dans

$\mathbb{R} - \mathbb{Z}$, alors la fonction $f = g + (h - g)^2$ est continue sur chaque intervalle inclus dans $\mathbb{R} - \mathbb{Z}$.

- Étudions maintenant la continuité de la fonction $f$ en chaque point de l'ensemble $\mathbb{Z}$ :

Soit $k \in \mathbb{Z}$. On a $f(k) = k$ et pour tout $x \in [k - 1, k[$ : $f(x) = k - 1 + (x - k + 1)^2$ (car $E(x) = k - 1$).

Il s'ensuit donc que $\lim_{x \to 0} f(x) = k = f(k)$. Ainsi, la fonction $f$ est continue à gauche au point $k$.

De même, pour tout $x \in [k, k + 1[$ : $f(x) = k + (x - k)^2$ (car $E(x) = k$). Il s'ensuit donc que

$\lim_{x \to 0} f(x) = k = f(k)$. Ainsi, la fonction $f$ est continue à droite au point $k$.

En définitive, la fonction $f$ est continue sur $\mathbb{R}$.

### C. Prolongement par continuité
On considère la fonction numérique $f$ définie sur $\mathbb{R}^*$ par : $f(x) = \sin\left(xE\left(\frac{\pi}{x}\right)\right)$

Montrer que $f$ admet un prolongement par continuité en 0 que l'on déterminera.

> **Solution.**
On a pour tout $x \in \mathbb{R}^* : \frac{\pi}{x} - 1 \le E\left(\frac{\pi}{x}\right) \le \frac{\pi}{x}$. Il en résulte alors que :

- Si $x > 0$, $\pi - x \le xE\left(\frac{\pi}{x}\right) \le \pi$, et d'après le théorème de la limite par encadrement : $\lim_{x \to 0^+} xE\left(\frac{\pi}{x}\right) = \pi$.

- Si $x < 0$, $\pi \le xE\left(\frac{\pi}{x}\right) \le \pi - x$, et d'après le théorème de la limite par encadrement : $\lim_{x \to 0^+} xE\left(\frac{\pi}{x}\right) = \pi$.

Comme $\lim_{x \to 0} xE\left(\frac{\pi}{x}\right) = \lim_{x \to 0^+} xE\left(\frac{\pi}{x}\right) = \pi$, on en déduit que $\lim_{x \to 0} xE\left(\frac{\pi}{x}\right) = \pi$ ; puis, par continuité de la

fonction sinus on déduit que : $\lim_{x \to 0} f(x) = \lim_{x \to 0} \sin\left(xE\left(\frac{\pi}{x}\right)\right) = \sin \pi = 0$.

Par suite, la fonction $f$ admet un prolongement par continuité en 0 donné par :

$$\tilde{f}(x) = \begin{cases} \sin\left(xE\left(\frac{\pi}{x}\right)\right) \text{ si } x \neq 0 \\ \tilde{f}(0) = 0 \end{cases}$$

- Comme pour montrer la continuité en un point, on a ici calculé une limite pour conclure. Cependant, la fonction n'est pas définie en ce point. Il faut donc la prolonger en lui attribuant une valeur. Pour obtenir une fonction continue, on choisit de lui attribuer la valeur égale à la limite finie de $f(x)$ quand $x$ tend vers ce point. On parle alors de prolongement par continuité.
- On étudie un prolongement par continuité d'une fonction $f$ en $x_0$ lorsque $f$ n'est pas définie en $x_0$ : $f$ peut être prolongée par continuité en $x_0$ lorsque $f$ admet donc une limite finie quand $x \to x_0$.

### D. Théorème des valeurs intermédiaires
1) Soit $f$ une fonction définie et continue de $[0;1]$ à valeurs dans $[0;1]$ et $a$ un réel tel que $a \ge 1$.

Montrer qu'il existe un réel $c \in [0;1]$ tel que $f(c) = ac$. Interpréter graphiquement le résultat.

2) Soit $F$ une fonction définie et continue sur $[a, b]$ ($a < b$), $p$ et $q$ deux réels positifs.

Montrer qu'il existe un réel $c \in [a, b]$ tel que $pF(a) + qF(b) = (p + q)F(c)$.

3) Soit $f$ une fonction définie et continue de $[0;1]$ avec $f(0) = 0$ et $f(1) = 4$.

Montrer qu'il existe un réel $c \in [0;1]$ tel que : $f\left(c + \frac{1}{2}\right) - f(c) = 2$

4) Soit $f$ une fonction définie et continue sur $\mathbb{R}$ vérifiant $\lim_{x \to -c} f(x) = a > 0$ et $\lim_{x \to -c} f(x) = b < 0$.

Montrer qu'il existe un réel $c$ tel que : $f(c) = 0$.

> **Solution.**
1) Le problème posé est équivalent au problème suivant :

« L'équation d'inconnue $x : f(x) - ax = 0$ admet au moins une solution sur $[0;1]$ »

Considérons alors la fonction $g$ définie sur $[0;1]$ par $g(x) = f(x) - ax$ ; $g$ est une fonction continue sur $[0;1]$ comme somme de fonctions continues.

On a $g(0) = f(0)$ et $f$ est à valeurs dans $[0;1]$ donc $g(0) = f(0) \ge 0$.

On a $g(1) = f(1) - a$ et $f$ est à valeurs dans $[0;1]$. Comme $a \ge 1$ alors $g(1) \le 0$. Ainsi, on a :

$g$ est continue sur $[0;1]$ et $g(0) \cdot g(1) \le 0$ ; donc d'après le théorème des valeurs intermédiaires, il existe au moins $c \in [0;1]$ tel que $g(c) = 0$ ; donc : il existe un réel $c \in [0;1]$ tel que $f(c) = ac$.

Interprétation graphique : Si une fonction $f$ est définie et continue de $[0;1]$ à valeurs dans $[0;1]$ et si $a \ge 1$ alors la droite d'équation $y = ax$ coupe la courbe représentative de $f$ en au moins un point.

• Pour montrer qu'il existe au moins un réel $c \in I$ (où $I$ est un intervalle de $\mathbb{R}$) tel que $F(c) = G(c)$ où $F$ et $G$ sont deux fonctions continues sur $I$, on peut :

- considérer la fonction $ H: x \mapsto F(x) - G(x) $: fonction continue sur $ I $.
- trouver deux réels distincts $\alpha$ et $\beta$ tels que: $H(\alpha).H(\beta) \leq 0$

D'après le théorème des valeurs intermédiaires, on peut en déduire qu'il existe $c \in I$ tel que $H(c) = 0$.

On peut alors conclure car : $H(c) = 0 \Leftrightarrow F(c) = G(c)$

G est continue sur [a, b] comme combinaison linéaire de fonctions continues, de plus :

$$G(a) = q(F(b) - F(a)) \quad \text{et} \quad G(b) = p(F(b) - F(a))$$

Comme p et q sont des réels positifs, on en déduit que : $$G(a).G(b) = -pq(F(b) - F(a))^2 \le 0$$.

D'après le théorème des valeurs intermédiaires, il existe au moins $$c \in [a, b]$$ tel que $$G(c) = 0$$, c'est-à-dire que : $$pF(a) + qF(b) = (p + q)F(c)$$, d'où le résultat.

3) Le problème posé est équivalent au problème suivant : « L'équation d'inconnue x : $$f\left(x + \frac{1}{2}\right) - f(x) - 2 = 0$$ admet au moins une solution sur [0; 1] »

Considérons alors la fonction g définie sur par : $$g(x) = f\left(x + \frac{1}{2}\right) - f(x) - 2$$.

$$(g(x) \text{ existe})$$ si et seulement si : $$\begin{cases} 0 \le x + \frac{1}{2} \le 1 \Leftrightarrow 0 \le x \le \frac{1}{2}, \text{ donc } g \text{ est définie sur } \left[0; \frac{1}{2}\right]. \\ 0 \le x \le 1 \end{cases}$$

g est continue sur $$\left[0; \frac{1}{2}\right]$$ comme composée et somme de fonctions continues. De plus :

$$g(0) = f\left(\frac{1}{2}\right) - 0 - 2 = f\left(\frac{1}{2}\right) - 2 \quad \text{et} \quad g\left(\frac{1}{2}\right) = f(1) - f\left(\frac{1}{2}\right) - 2 = 2 - f\left(\frac{1}{2}\right), \text{ donc } g(0).g\left(\frac{1}{2}\right) \le 0.$$

D'après le théorème des valeurs intermédiaires, il existe au moins $$c \in \left[0; \frac{1}{2}\right]$$ tel que $$g(c) = 0$$.

Or $$g(c) = 0 \Leftrightarrow f\left(c + \frac{1}{2}\right) - f(c) = 2$$.

Par suite : $$(\exists c \in [0, 1]); f\left(c + \frac{1}{2}\right) - f(c) = 2$$

4) Sachant que $$\lim_{x \to +\infty} f(x) = a$$, on en déduit par définition que :

$$(\forall \varepsilon > 0) (\exists A > 0); (\forall x \in ]A; +\infty[) |f(x) - a| \le \varepsilon$$

Prenons $$\varepsilon = \frac{a}{2} > 0$$ alors : $$(\exists A > 0); (\forall x \in ]A; +\infty[) |f(x) - a| \le \frac{a}{2}$$.

Donc pour $$x > A$$, on a : $$0 < \frac{a}{2} \le f(x) \le \frac{3a}{2}$$. Donc en particulier $$f(A+1) > 0$$.

De même, pour $$\lim_{x \to -\infty} f(x) = b$$ ; on en déduit par définition que :

$$(\exists B > 0); (\forall x \in ]-\infty; -B[) |f(x) - b| \le -\frac{b}{2}$$

Donc pour $$x < -B$$, on a : $$\frac{3b}{2} \le f(x) \le \frac{b}{2} < 0$$. Donc en particulier $$f(-B-1) < 0$$.

f est continue sur $$\mathfrak{R}$$ donc est continue sur $$[-B-1, A+1]$$, de plus $$f(A+1) > 0$$ et $$f(-B-1) < 0$$.

Donc : il existe $$c \in [-B-1, A+1]$$ tel que $$f(c) = 0$$.

### E. Théorème de la fonction réciproque
1) On considère la fonction $f$ définie sur $\mathbb{R}$ par : $f(x) = \operatorname{Arc} \tan(3x) + 2x - 1$

a) Montrer que $ f $ réalise une bijection de $ \mathbb{R} $ sur $ \mathbb{R} $. Soit $ f^{-1} $ sa fonction réciproque.
b) Montrer que l'équation $ f^{-1}(x) = x $ admet une solution unique $ \alpha $ dans $ \mathbb{R} $ puis que $ 0 < \alpha < \frac{1}{3} $.
c) Vérifier que $\alpha = 1 - \operatorname{Arc}\tan (3\alpha)$ et que: $1 - \frac{\pi}{4} < \alpha < \frac{1}{3}$
d) Montrer que pour tout $x\in ]\alpha ; + \infty [,$ $f^{-1}(x) <   x$ et interpréter graphiquement ce résultat.

2) Soit $t$ un réel positif.

a) Montrer que: $\exists !a\in \left[0;\frac{\pi}{2}\right]\tan (a) = \sqrt{t}$ et en deduire que $\sqrt{t} +\sqrt{t + 1} = \tan \left(\frac{\pi}{4} +\frac{a}{2}\right).$
b) Montrer que: $\left(\forall t\in \mathbb{R}^{+}\right),\operatorname {Arc}\tan \left(\sqrt{t} +\sqrt{t + 1}\right) = \frac{\pi}{4} +\frac{1}{2}\operatorname {Arc}\tan \left(\sqrt{t}\right)$
c) En déduire que: $\tan \left(\frac{5\pi}{12}\right) = 2 + \sqrt{3}$

> **Solution.**
1) a) Les fonctions $x \mapsto \operatorname{Arc} \tan(3x)$ et $x \mapsto 2x - 1$ sont continues et strictement croissantes sur $\mathbb{R}$, donc la fonction $f$ est continue et strictement croissante sur $\mathbb{R}$ en tant que somme de deux fonctions continues et strictement croissantes sur $\mathbb{R}$. D'après le théorème de la fonction réciproque, la fonction $f$ réalise une bijection de $\mathbb{R}$ sur $f(\mathbb{R}) = f(\cdot) - \infty; +\infty[\cdot] = \lim_{x \to -\infty} f(x); \lim_{x \to +\infty} f(x)[\cdot] = \mathbb{R}$ car :

$$\lim_{x \to +\infty} \operatorname{Arc} \tan(3x) = \frac{\pi}{2}, \lim_{x \to -\infty} \operatorname{Arc} \tan(3x) = -\frac{\pi}{2}, \lim_{x \to +\infty} 2x - 1 = +\infty \quad \text{et} \quad \lim_{x \to -\infty} 2x - 1 = -\infty$$

b) Soit $x \in \mathbb{R}$. L'équation $f^{-1}(x) = x$ est équivalente à $f(x) = x$. On pose alors :

$$\forall x \in \mathbb{R}, g(x) = f(x) - x = \operatorname{Arc} \tan(3x) + x - 1$$

Tout comme la fonction $f$, $g$ est continue et strictement croissante sur $\mathbb{R}$. D'après le théorème de la fonction réciproque, la fonction $g$ réalise une bijection de $\mathbb{R}$ sur $g(\mathbb{R}) = \mathbb{R}$. Puisque $0 \in \mathbb{R}$ alors il existe un unique réel $\alpha$ tel que $g(\alpha) = 0$. Enfin, puisque $g(0) = -1 < 0$ et $g\left(\frac{1}{3}\right) = \frac{\pi}{4} - \frac{2}{3} > 0$ alors, d'après le théorème des valeurs intermédiaires : $0 < \alpha < \frac{1}{3}$.

c) Puisque $ f(\alpha) = \alpha $ alors $ \operatorname{Arc} \tan(3\alpha) + 2\alpha - 1 = \alpha $ et donc: $ \alpha = 1 - \operatorname{Arc} \tan(3\alpha) $.
d) Montrons que pour tout $x \in ]\alpha; +\infty[\cdot, f^{-1}(x) < x$:

On a d'après 1) b), la fonction $g$ est strictement croissante sur $\mathbb{R}$. Il s'ensuit donc que pour tout $x > \alpha$, $g(x) > g(\alpha)$ et donc $f(x) - x > 0$. Par suite, pour tout $x > \alpha$ : $f(x) > x$. Et puisque la fonction $f^{-1}$ est

strictement croissante sur $]\alpha; +\infty[$ et $f(\cdot; +\infty[) = \cdot; +\infty[$ alors $f^{-1}(f(x)) > f^{-1}(x)$ pour tout $x > \alpha$. D'où, pour tout $x > \alpha$, $x > f^{-1}(x)$. Cela signifie que la courbe $\mathcal{C}_f$, est en-dessous de la droite $(\Delta): y = x$.

- Pour montré qu'une équation $ f(x) = m $ admet une unique solution dans $ I $, on peut montré que $ f $ réalise une bijection de $ I $ sur $ J $ avec $ m \in J $. La solution de cette équation est alors $ f^{-1}(m) $.
- En général, on ne sait pas expliciter la bijection réciproque d'une fonction continue et strictement monotone sur un intervalle, mais on connait des propriétés sur cette fonction : monotonie, continuité, limites, graphe,...
- Pour déterminer si une équation de la forme $ f(x) = g(x) $ admet une solution, on peut toujours se ramener à une équation de la forme $ h(x) = 0 $.

2) Soit $t$ un réel positif.

a) La fonction $x \mapsto \tan x$ est une bijection de $\left[0; \frac{\pi}{2}\right[$ sur $\mathbb{R}^*$. Or $\sqrt{t} \in \mathbb{R}^*$ donc : $\exists! a \in \left[0; \frac{\pi}{2}\right[ \tan(a) = \sqrt{t}$.

Pour tout $t \in \mathbb{R}^*$ et pour tout $a \in \left[0; \frac{\pi}{2}\right[$, on a : $\sqrt{t} = \tan a \Leftrightarrow t = \tan^2 a \Leftrightarrow \sqrt{1+t} = \frac{1}{\cos a}$

Par suite : $\sqrt{t} + \sqrt{t+1} = \tan a + \frac{1}{\cos a} = \frac{1+\sin a}{\cos a} = \frac{2\cos^2\left(\frac{\pi}{4} - \frac{a}{2}\right)}{2\sin\left(\frac{\pi}{4} - \frac{a}{2}\right)\cos\left(\frac{\pi}{4} - \frac{a}{2}\right)} = \tan\left(\frac{\pi}{4} + \frac{a}{2}\right)$

b) On a $a \in \left[0; \frac{\pi}{2}\right[$ donc $\left(\frac{\pi}{4} + \frac{a}{2}\right) \in \left[\frac{\pi}{4}; \frac{\pi}{2}\right[$ et par suite :

$$\sqrt{t} + \sqrt{t+1} = \tan\left(\frac{\pi}{4} + \frac{a}{2}\right) \Leftrightarrow \operatorname{Arc}\tan\left(\sqrt{t} + \sqrt{t+1}\right) = \frac{\pi}{4} + \frac{a}{2}$$

D'autre part on a $a = \operatorname{Arc}\tan\sqrt{t}$, donc : $\forall t \in \mathbb{R}^*$, $\operatorname{Arc}\tan\left(\sqrt{t} + \sqrt{t+1}\right) = \frac{\pi}{4} + \frac{1}{2}\operatorname{Arc}\tan\sqrt{t}$.

c) En remplaçant $t$ par 3 dans le résultat de la question précédente on trouve :

$\operatorname{Arc}\tan\left(\sqrt{3} + 2\right) = \frac{\pi}{4} + \frac{1}{2}\operatorname{Arc}\tan\sqrt{3} = \frac{\pi}{4} + \frac{1}{2} \cdot \frac{\pi}{3} = \frac{5\pi}{12}$. Par suite : $\tan\left(\frac{5\pi}{12}\right) = 2 + \sqrt{3}$

### F. Utilisation des fonctions irrationnelles
1) Résoudre dans $\mathbb{R}$ les équations :

$$\sqrt[3]{3+x} - \sqrt[3]{3-x} = \sqrt[4]{9-x^2} \text{ ; } 2x\sqrt{x} - 3x\sqrt[4]{\frac{1}{x}} = 20 \text{ ; } \sqrt{x+1} - \sqrt[4]{x} = 1 \text{ ; } \operatorname{Arc}\tan x + \operatorname{Arc}\tan(2x) = \frac{\pi}{4}$$

2) Calculer les limites suivantes :

$$\lim_{x \to 0} \frac{\sqrt[3]{x^2}-1}{\sqrt[3]{x}-1} \text{ ; } \lim_{x \to +\infty} \frac{\sqrt[4]{x}-\sqrt[4]{x+1}}{\sqrt[4]{x}-\sqrt[4]{x+1}} \text{ ; } \lim_{x \to +\infty} \left(\sqrt[3]{x^3+x^2}-x\right) \text{ ; } \lim_{x \to 0^+} \frac{1}{x}\left(\operatorname{Arc}\tan\frac{1}{x}-\frac{\pi}{2}\right)$$

TECHNIQUES ET STUDIES

> **Solution.**
1) Résolution des équations :

• Pour l'équation : $$\sqrt[3]{3+x} - \sqrt[3]{3-x} = \sqrt[6]{9-x^2}$$

Le domaine de définition de cette équation est $$D_1 = [-3; 3]$$.

En utilisant l'identité remarquable $$(a-b)^3 = a^3 - b^3 - 3ab(a-b)$$, on a alors pour tout $$x \in D_1$$ :

$$\begin{array}{l} \sqrt[3]{3+x} - \sqrt[3]{3-x} = \sqrt[6]{9-x^2} \Leftrightarrow (\sqrt[3]{3+x} - \sqrt[3]{3-x})^3 = \sqrt{9-x^2} \\ \Leftrightarrow (3+x) - (3-x) - 3\sqrt[3]{9-x^2} \cdot \sqrt[6]{9-x^2} = \sqrt{9-x^2} \\ \Leftrightarrow 2x - 3\sqrt{9-x^2} = \sqrt{9-x^2} \\ \Leftrightarrow x = 2\sqrt{9-x^2} \\ \Leftrightarrow (x^2 = 4(9-x^2) \text{ et } x \in [0; 3]) \\ \Leftrightarrow x = \frac{6\sqrt{5}}{5} \end{array}$$ (car : $$\sqrt[3]{a} \cdot \sqrt[6]{a} = \sqrt{a}$$)

Par suite, l'ensemble des solutions de cette équation est : $$S_1 = \left\{ \frac{6\sqrt{5}}{5} \right\}$$

• Pour l'équation : $$2x\sqrt{x} - 3x \cdot \sqrt[4]{\frac{1}{x}} = 20$$

Le domaine de définition de cette équation est $$D_2 = \mathbb{R}^+$$. On pose $$t = \sqrt[4]{x}$$. On a alors :

$$2x\sqrt{x} - 3x \cdot \sqrt[4]{\frac{1}{x}} = 20 \Leftrightarrow 2t^6 - 3t^3 - 20 = 0 \Leftrightarrow 2T^2 - 3T - 20 = 0 \quad (\text{où } T = t^3)$$

La seule solution positive de l'équation $$2T^2 - 3T - 20 = 0$$ est $$T = 4$$. Donc $$t^3 = 4$$ ce qui donne $$t = \sqrt[3]{4}$$. Et comme $$x = t^4$$ alors $$x = 4 \cdot \sqrt[3]{4}$$. Ainsi, l'ensemble des solutions de cette équation est : $$S_2 = \{4 \cdot \sqrt[3]{4}\}$$

• Pour l'équation : $$\sqrt{x+1} - \sqrt[3]{x} = 1$$

Le domaine de définition de cette équation est $$D_3 = \mathbb{R}^+$$.

On a pour tout $$x \in \mathbb{R}^+$$ :

$$\sqrt{x+1} - \sqrt[3]{x} = 1 \Leftrightarrow \sqrt{x+1} - 1 = \sqrt[3]{x} \Leftrightarrow (\sqrt{x+1} - 1)^3 = x \Leftrightarrow (x+1)\sqrt{x+1} - 3(x+1) + 3\sqrt{x+1} - 1 = 1$$

ce qui donne : $$\sqrt{x+1} - \sqrt[3]{x} = 1 \Leftrightarrow \sqrt{x+1}(x+4 - 4\sqrt{x+1}) = 0 \Leftrightarrow (\sqrt{x+1} = 0 \text{ ou } x+4 = 4\sqrt{x+1})$$

Par conséquent : $$\sqrt{x+1} - \sqrt[3]{x} = 1 \Leftrightarrow (x+4)^2 = 16(x+4) \Leftrightarrow x^2 - 8x = 0 \Leftrightarrow (x=0 \text{ ou } x=8)$$

Par suite, l'ensemble des solutions de cette équation est : $$S_3 = \{0; 8\}$$

• Pour l'équation : $$\operatorname{Arc} \tan x + \operatorname{Arc} \tan(2x) = \frac{\pi}{4}$$

Le domaine de définition de cette équation est $$D_4 = \mathbb{R}$$.

On sait que le signe de Arc tan $$x$$ est celui de $$x$$, et puisque $$\frac{\pi}{4} > 0$$ alors nécessairement $$x > 0$$.

Comme $x > 0$ alors $0 < \operatorname{Arc} \tan x < \frac{\pi}{2}$ et $-\frac{\pi}{4} < \frac{\pi}{4} - \operatorname{Arc} \tan x < \frac{\pi}{2}$, donc :

$$\operatorname{Arc} \tan x + \operatorname{Arc} \tan (2x) = \frac{\pi}{4} \Leftrightarrow 2x = \tan \left(\frac{\pi}{4} - \operatorname{Arc} \tan x\right) \Leftrightarrow 2x = \frac{1-x}{1+x}$$

ceci est dû aux formules : $\tan (\operatorname{Arc} \tan x) = x$ et $\tan (a-b) = \frac{\tan a - \tan b}{1 + \tan a \cdot \tan b}$.

Ainsi : $\operatorname{Arc} \tan x + \operatorname{Arc} \tan (2x) = \frac{\pi}{4} \Leftrightarrow 2x^2 + 3x - 1 = 0 \Leftrightarrow x = \frac{\sqrt{17} - 3}{4}$

L'ensemble des solutions de cette équation est : $S_4 = \left\{\frac{\sqrt{17} - 3}{4}\right\}$

• Pour résoudre une équation avec des fonctions racines n$^{ème}$ ou la fonction Arctan, l'idée générale va être d'appliquer les identités remarquables et les formules de trigonométrie. Souvent en pratique, on utilise les règles suivantes :

$$\begin{array}{l} (a \pm b)^2 = a^2 \pm 2ab + b^2 ; (a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3 = a^3 - b^3 - 3ab(a-b) \\ (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 = a^3 + b^3 + 3ab(a+b) ; a^3 - b^3 = (a-b)(a^2 + ab + b^2) \\ \tan(a \pm b) = \frac{\tan a \pm \tan b}{1 \mp \tan a \cdot \tan b} ; 1 + \cos x = 2 \cos^2 \frac{x}{2} ; 1 - \cos x = 2 \sin^2 \frac{x}{2} ; \sin x = 2 \sin \frac{x}{2} \cos \frac{x}{2} \end{array}$$

2) Calculer des limites :

$$\begin{array}{l} \bullet \lim_{x \to 1} \frac{\sqrt[3]{x^2} - 1}{\sqrt[3]{x} - 1} = \lim_{x \to 1} \frac{(x^2 - 1)\left(\sqrt[3]{x^3} + \sqrt[3]{x^2} + \sqrt[3]{x} + 1\right)}{(x - 1)\left(\sqrt[3]{x^4} + \sqrt[3]{x^2} + 1\right)} = \lim_{x \to 1} \frac{(x + 1)\left(\sqrt[3]{x^3} + \sqrt[3]{x^2} + \sqrt[3]{x} + 1\right)}{\sqrt[3]{x^4} + \sqrt[3]{x^2} + 1} = \frac{8}{3} \\ \bullet \lim_{x \to \infty} \frac{\sqrt[4]{x} - \sqrt[4]{x + 1}}{\sqrt{x} - \sqrt[4]{x + 1}} = \lim_{x \to \infty} \frac{\sqrt[12]{x^3} - \sqrt[12]{(x + 1)^3}}{\sqrt[12]{x^6} - \sqrt[12]{(x + 1)^2}} = \lim_{x \to \infty} \sqrt[12]{\frac{(x + 1)^4}{x^6}} \times \frac{\sqrt[12]{\frac{x^3}{(x + 1)^3}} - 1}{1 - \sqrt[12]{\frac{(x + 1)^2}{x^6}}} \end{array}$$

Comme $\lim_{x \to \infty} \sqrt[12]{\frac{(x + 1)^4}{x^6}} = \lim_{x \to \infty} \sqrt[12]{\frac{x^3}{(x + 1)^4}} = \lim_{x \to \infty} \sqrt[12]{\frac{(x + 1)^2}{x^6}} = 0$ alors $\lim_{x \to \infty} \frac{\sqrt[4]{x} - \sqrt[4]{x + 1}}{\sqrt{x} - \sqrt[4]{x + 1}} = 0$

$$\begin{array}{l} \bullet \lim_{x \to \infty} \sqrt[3]{x^3 + x^2} - x = \lim_{x \to \infty} \frac{x^2}{\sqrt[3]{(x^3 + x^2)^2 + x \cdot \sqrt[3]{x^3 + x^2} + x^2}} = \lim_{x \to \infty} \frac{1}{\sqrt[3]{(1 + \frac{1}{x})^2 + \sqrt[3]{1 + \frac{1}{x}} + 1}} = \frac{1}{3} \\ \bullet \text{Pour la limite } \lim_{x \to 0^+} \frac{1}{x} \left( \operatorname{Arc} \tan \frac{1}{x} - \frac{\pi}{2} \right) ; \text{on pose } \operatorname{Arc} \tan \frac{1}{x} - \frac{\pi}{2} = t \text{ avec } x > 0. \end{array}$$

Puisque $\lim_{x \to 0^+} \left( \operatorname{Arc} \tan \frac{1}{x} - \frac{\pi}{2} \right) = 0^+$ et $x = -\tan t$ alors : $\lim_{x \to 0^+} \frac{1}{x} \left( \operatorname{Arc} \tan \frac{1}{x} - \frac{\pi}{2} \right) = \lim_{t \to 0^-} -\frac{t}{\tan t} = -1$

## Exercices

### Limites d'une fonction numérique
**Exercice 1.**
Calculer les limites suivantes :

$$\lim_{x \to 0} \frac{\sqrt{x+4}-2}{x-x^2} ; \quad \lim_{x \to +\infty} \frac{1}{x} \left( \sqrt{3x^2+1} - \sqrt{x^2+x} \right)$$
$$\lim_{x \to 4} \frac{\sqrt{2x+1}-3}{\sqrt{x}-2} ; \quad \lim_{x \to +\infty} \frac{3x\sqrt{x^2+x}-3x^2+x}{5\sqrt{x^2+3}}$$
$$\lim_{x \to 3} \frac{\sqrt{2x+3}-\sqrt{x+6}}{\sqrt{x-1}-\sqrt{8-2x}} ; \quad \lim_{x \to 2} \frac{\sqrt{x}+\sqrt{x-2}-\sqrt{2}}{\sqrt{x^2-4}}$$
$$\lim_{x \to -\infty} \sqrt{\frac{x^3}{x+1}} - x ; \quad \lim_{x \to +\infty} \frac{x}{\sqrt{x-2}} - \frac{x}{\sqrt{x+2}}$$

**Exercice 2.**
Calculer les limites suivantes :

$$\lim_{x \to 4} \frac{|x^2-2x|-8}{x^2-5x+4} ; \quad \lim_{x \to +\infty} \frac{\sqrt{x^2+x+1}-\sqrt{x^2-4}}{x+\sqrt{x+2}}$$
$$\lim_{x \to -\infty} \sqrt{x^4-x^3} - x^2 ; \quad \lim_{x \to +\infty} x\sqrt{4x^2+3x-7} - 2x^2$$
$$\lim_{x \to -\infty} \frac{\sqrt{10x^2+9}-7}{\sqrt{2-x}+\sqrt{x^2+5}-5} ; \quad \lim_{x \to -\infty} \frac{\sqrt{x^4+1}-\sqrt{x^4-1}}{\sqrt{x^2+1}-\sqrt{x^2-1}}$$
$$\lim_{x \to -\infty} \sqrt{x^3+ax^2+x+1} - x\sqrt{x+1} \quad (\text{où } a \in \mathbb{R})$$
$$\lim_{x \to a^*} \frac{\sqrt{x^2-ax} + \sqrt{x^2-a^2}}{\sqrt{x-a}} \quad (\text{où } a \in \mathbb{R})$$

**Exercice 3.**
Soit $m$ un nombre réel et $f$ la fonction définie par :

$$f(x) = \frac{mx^3 + (m-2)x^2 + (m-1)x + m-3}{x(x-2)(x-3)}$$

1) Déterminer le domaine de définition de $ f $.
2) Étudier les limites de la fonction $ f $ aux bornes de son domaine de définition.

**Exercice 4.**
Calculer les limites suivantes :

$$\lim_{x \to 0} \frac{\sin 3x}{7x} ; \quad \lim_{x \to 0} \frac{\tan 5x}{\sin x} ; \quad \lim_{x \to 0} \frac{1-\cos 2x}{x^2}$$
$$\lim_{x \to 0} \frac{\tan x - \sin x}{\sqrt{x}} ; \quad \lim_{x \to 0} \frac{\sin x - \tan x}{x^3}$$
$$\lim_{x \to 0} \frac{\sin x \cdot \sin 2x}{1-\cos x} ; \quad \lim_{x \to 0} \frac{\sqrt{1+\sin x} - \sqrt{1-\sin x}}{x}$$
$$\lim_{x \to 0} \frac{1-\cos^3 x}{x \cdot \sin 4x} ; \quad \lim_{x \to 0} \frac{1-\cos 5x}{(x^2+x)\tan 3x} ; \quad \lim_{x \to 0} \frac{1-\frac{x}{2}}{\sin x}$$
$$\lim_{x \to \frac{\pi}{4}} \frac{\tan^2 x + 2\tan x - 3}{\sin x - \cos x} ; \quad \lim_{x \to \frac{\pi}{3}} \frac{\cos 2x + \cos x}{2\cos x - 1}$$

**Exercice 5.**
Calculer les limites suivantes :

$$\lim_{x \to \frac{\pi}{4}} \frac{\sin x - \cos x}{x + x\cos 4x} ; \quad \lim_{x \to \frac{\pi}{2}} \frac{2\tan 2x - \sqrt{3}\cos x}{\pi - 2x}$$
$$\lim_{x \to \frac{\pi}{2}} \left( x\tan x - \frac{\pi}{2\cos x} \right) ; \quad \lim_{x \to \frac{\pi}{3}} \frac{\sqrt{3}\sin x - \cos x - 1}{2\cos x + \cos 3x}$$
$$\lim_{x \to \frac{\pi}{2}} \left( \frac{\pi}{2} - x \right)\tan x ; \quad \lim_{x \to \frac{\pi}{4}} \left( 2 - 3x + x^2 \right)\tan \left( \frac{\pi}{2} \right)$$
$$\lim_{x \to -\infty} \left( x^2 - x + 1 \right)\sin^2 \left( \frac{1}{x} \right) ; \quad \lim_{x \to \frac{\pi}{4}} \frac{\cos^3 x - \sin^3 x}{\sin \left( \frac{\pi}{4} - x \right)}$$
$$\lim_{x \to 0} \frac{\cos ax - \cos bx}{x^2} \quad (\text{où } (a, b) \in (\mathbb{R}^*)^2)$$

**Exercice 6.**
Soit $f$ une fonction numérique vérifiant :

$$(\forall x \in \mathbb{R}) \quad 1+x-x^2 \le f(x) \le 1+x-x^2+3$$

Calculer les limites suivantes :

$$\lim_{x \to +\infty} \left( f(x) + x^2 \right) ; \quad \lim_{x \to 0} \frac{f(x)-1}{x} ; \quad \lim_{x \to 0} \frac{f(x)-\frac{1}{x}}{x}$$

**Exercice 7.**
En utilisant les propriétés des limites et encadrement, calculer les limites suivantes :

$$\lim_{x \to 0} \frac{3x+2}{5-4\sin x} ; \lim_{x \to 0} x^2 \sin \frac{1}{x} ; \lim_{x \to \infty} \frac{x+\cos x}{x^2+1}$$
$$\lim_{x \to 0^+} \sqrt{x} \cos \frac{1}{\sqrt{x}} ; \lim_{x \to \infty} (\sqrt{x}-\cos x) ; \lim_{x \to 0^+} \frac{x-E(x)}{x^2}$$
$$\lim_{x \to 0} \frac{\sin(E(x))}{x} ; \lim_{x \to \infty} \frac{x \cdot \sin x^2}{x^2-3} ; \lim_{x \to 0} \frac{(x-2)\sqrt{5-x}}{2+\sin\left(\frac{1}{x-2}\right)}$$
$$\lim_{x \to 0} \frac{x}{3+\sin\left(\frac{1}{x}\right)} ; \lim_{x \to -1} \frac{1+\cos^2 x}{(x+1)^2} ; \lim_{x \to \infty} \frac{x-E(x)}{x^2}$$

### CONTINUITÉ D'UNE FONCTION EN UN POINT
**Exercice 8.**
On considère la fonction $f$ définie par :

$$\begin{cases} f(x) = \frac{x^5 - x^4 + x^3 + 3}{x+1} \text{ si } x \neq -1 \\ f(-1) = 12 \end{cases}$$

Montrer que la fonction $f$ est continue en $-1$.

**Exercice 9.**
On considère la fonction $f$ définie par :

$$\begin{cases} f(x) = \frac{\sqrt{3+\cos x}-2}{x^2} \text{ si } x \neq 0 \\ f(0) = -\frac{1}{8} \end{cases}$$

Montrer que la fonction $f$ est continue en $0$.

**Exercice 10.**
Déterminer le réel $a$ pour que la fonction $f$ définie par :

$$\begin{cases} f(x) = \frac{\cos^3 x-1}{\sin^2 x} \text{ si } x \neq 0 \\ f(0) = a \end{cases}$$

soit continue en $0$.

**Exercice 11.**
**Exercice 12.**
Déterminer le réel $a$ pour que la fonction $f$ définie par :

$$\begin{cases} f(x) = \frac{\sqrt{\sin x}-1}{x-\frac{\pi}{2}} \text{ si } x \neq \frac{\pi}{2} \\ f\left(\frac{\pi}{2}\right) = a \end{cases}$$

soit continue au point $x_0 = \frac{\pi}{2}$.

**Exercice 13.**
Soit $a$ un réel strictement positif.

On considère la fonction $g$ définie par :

$$\begin{cases} g(x) = \frac{x^2+\sqrt{x+a}-\sqrt{a}}{x} \text{ si } x \geq -a \text{ et } x \neq 0 \\ g(0) = \frac{1}{2\sqrt{a}} \end{cases}$$

1) Montrer que $ g $ est continue en 0.
2) Preciser la limite de $ g $ quand $ x $ tend vers $ +\infty $.

**Exercice 14.**
Dans chacun des cas suivants, étudier la continuité de la fonction $f$ au point $x_0$ :

1) $ f(x) = \frac{|x^2 - 5| + 3}{\sqrt{x} + 2} $ et $ x_0 = 1 $
2) $\begin{cases} f(x) = \frac{x^3 - 8}{\sqrt{x^2 + 5} - 3} \text{ si } x \neq 2 \\ f(2) = 18 \end{cases}$ et $x_0 = 2$
3) $\begin{cases} f(x) = (x^2 - 9).\sin \left(\frac{1}{x - 3}\right) \text{ si } x \neq 3 \\ f(3) = 0 \end{cases}$ et $x_0 = 3$
4) $\begin{cases} f(x) = \frac{(1 - \tan x)^2}{1 + \cos 4x} \text{ si } x \neq \frac{\pi}{4} \\ f\left(\frac{\pi}{4}\right) = -\frac{1}{2} \end{cases}$ et $x_0 = \frac{\pi}{4}$

### CONTINUITÉ À GAUCHE - CONTINUITÉ À DROITE
**Exercice 15.**
Dans chacun des cas suivants, étudier la continuité de la fonction $f$ à droite et à gauche au point $x_0$ :

1) $$\begin{cases} f(x) = \frac{|x| + 3x}{x^2 - 2|x|} \text{ si } x \neq 0 \\ f(0) = 4 \end{cases}$$ et $x_0 = 0$

2) $$f(x) = xE\left(\frac{1}{x+1}\right)$$ et $x_0 = 0$

3) $$\begin{cases} f(x) = \frac{x - 2\sqrt{x}}{x - 4} \text{ si } 0 \leq x < 4 \\ f(4) = \frac{1}{2} \\ f(x) = \frac{\sqrt{x-4}}{x-4} \text{ si } x > 4 \end{cases}$$ et $x_0 = 4$

4) $$\begin{cases} f(x) = \frac{2\sin x - \sin 2x}{x^3} \text{ si } x \in ]0; \frac{\pi}{2}[ \\ f(0) = 1 \\ f(x) = \frac{\tan x - \sin x}{x^3} \text{ si } x \in ]-\frac{\pi}{2}; 0[ \end{cases}$$ et $x_0 = 0$

**Exercice 16.**
On considère la fonction numérique $g$ définie par :

$$\begin{cases} g(x) = (2x + \pi)\tan x \text{ si } x \in ]-\pi; -\frac{\pi}{2}[ \\ g(x) = \frac{1 - \cos^3 x}{x \cdot \tan x \cdot \cos^2 x} \text{ si } x \in ]-\frac{\pi}{2}; 0[ \\ g(x) = \frac{3\sqrt{1+x^4} - x}{2+x} \text{ si } x \in [0; +\infty[ \end{cases}$$

1) Calculer les limites suivantes :

$$\lim_{x \to +\infty} g(x), \lim_{x \to -\frac{\pi}{2}} g(x), \lim_{x \to -\frac{\pi}{2}} g(x)$$

2) Établir la continuité de la fonction $g$ en 0.

**Exercice 17.**
Déterminer les deux réels $a$ et $b$ pour que la fonction définie sur $\mathbb{R}$ par :

$$\begin{cases} f(x) = \frac{x^2 + x - a}{x - 2} \text{ si } x > 2 \\ f(x) = \frac{2x + b}{3} \text{ si } x \leq 2 \end{cases}$$

soit continue au point $x_0 = 2$.

**Exercice 18.**
Déterminer les réels $a$, $b$ et $c$ pour que la fonction $f$ définie par :

$$\begin{cases} f(x) = \frac{3x^2 - 2bx + 1}{2x^2 + ax - a - 2} \text{ si } x < 1 \\ f(1) = \frac{2 + c}{3} \\ f(x) = \frac{-2x^2 + 3x + 3}{x^2 + 1} \text{ si } x > 1 \end{cases}$$

soit continue au point $x_0 = 1$.

**Exercice 19.**
Soit $n \in \mathbb{N}^*$. On considère la fonction $f_n$ définie par :

$$\begin{cases} f_n(x) = \frac{(3-x)^n - a}{x - 2} \text{ si } x < 2 \\ f_n(x) = \frac{3x + b}{4} \text{ si } x \geq 2 \end{cases} \quad (\text{où } (a, b) \in \mathbb{R}^2)$$

Déterminer $a$ et $b$ pour que $f_n$ soit continue en 2.

**Exercice 20.**
Soit $f$ la fonction définie sur $\mathbb{R}$ par :

$$\begin{cases} f(x) = \frac{ax^2 + bx - 1}{x^2 - 1} \text{ si } x \geq 2 \\ f(x) = 3x + c \quad \text{ si } x < 2 \end{cases}$$

Déterminer les réels $a$, $b$ et $c$ pour que les conditions suivantes soit vérifiées :

$\nu \lim_{x \to +\infty} f(x) = 2$ et $\lim_{x \to 0} f(x) = \lim_{x \to 1} f(x)$
$\nu f$ continue en $x_0 = 2$

### PROLONGEMENT PAR CONTINUITÉ
**Exercice 21.**
Pour chacun des cas suivants, montrer que la fonction $f$ admet un prolongement par continuité en $x_0$ puis donner ce prolongement :

1) $ f(x) = \frac{x\sqrt{x} - 1}{\sqrt{3x + 1} - \sqrt{x + 3}} $ et $ x_0 = 1 $
2) $ f(x) = \frac{\sqrt{x + 6} + \sqrt{2x + 5} - 3}{4 - x^2} $ et $ x_0 = -2 $
3) $ f(x) = \frac{\tan x - \sin x}{x + \sin x} $ et $ x_0 = 0 $
4) $ f(x) = \frac{\cos x - \sqrt{1 + \sin x}}{x} $ et $ x_0 = 0 $

**Exercice 22.**
On considère la fonction $f$ définie par :

$$f(x) = \frac{\sqrt{8x+1}}{2(x-1)} + \frac{3|x|}{1-x^2}$$

1) Déterminer $D_{f}$ le domaine de définition de $f$
2) $f$ admet-elle un prolongement par continuité en 1?

**Exercice 23.**
On considère la fonction $g$ définie par :

$$g(x) = \frac{3x^2 + 5x + 2}{|x^2 - 1| - |x + 1|}$$

1) Déterminer $D_{\mathrm{g}}$ le domaine de définition de $g$
2) $g$ admet-elle un prolongement par continuité en-1?

**Exercice 24.**
Soit $f$ la fonction définie sur $\mathbb{R}^*$ par : $f(x) = x^2 E\left(\frac{1}{x}\right)$

1) Montrer que pour tout $ x \in \mathbb{R}^* $: $ x - x^2 \leq f(x) \leq x $.
2) En déduire que $ f $ admet un prolongement par continuité en 0 puis donner ce prolongement.

**Exercice 25.**
Pour chacun des cas suivants, montrer que la fonction $f$ admet un prolongement par continuité en $x_0$ puis donner ce prolongement :

1) $ f(x) = \frac{2x^{15} - 17x + 15}{x - 1} $ et $ x_0 = 1 $
2) $f(x) = \frac{1 + \cos x\cos 2x}{x - \pi}$ et $x_0 = \pi$
3) $f(x) = \frac{x^n - a^n}{x - a}$ et $x_0 = a$ (ici $a\in \mathbb{R}$ et $n\in \mathbb{N}^*$)

4) $f(x) = \frac{x\sin x - \cos\left(\frac{x}{2}\right)}{x + \pi}$ et $x_0 = -\pi$
5) $f(x) = \frac{\sin(\pi\sqrt{\cos x})}{x}$ et $x_0 = 0$
6) $f(x) = \frac{x^{p + 1} - (p + 1)x + p}{(x - 1)^2}$ et $x_0 = 1$ (ici $p\in \mathbb{N}^*$)
7) $f(x) = \frac{\sqrt{a^2 + x} - a}{\tan x}$ et $x_0 = 0$ (ici $a\in \mathbb{R}_+$)
8) $f(x) = \frac{\tan x - 1}{\sqrt{2}\cos x - 1}$ et $x_0 = \frac{\pi}{4}$
9) $f(x) = \frac{\cos x + \cos 2x - 2}{\cos 3x + \sin x - 1}$ et $x_0 = 0$
10) $f(x) = \frac{1}{(5 - x)^2}\left(1 - \sin\left(\frac{\pi x}{10}\right)\right)$ et $x_0 = 5$

**Exercice 26.**
Soit $f$ la fonction définie par :

$$\begin{cases} f(x) = \frac{(x-1)^2}{\sqrt{x^2-1}} \quad \text{si } |x| > 1 \\ f(x) = x^2 - 3x + 2 \quad \text{si } |x| < 1 \end{cases}$$

1) a) Calculer $\lim_{x\to 1}f(x)$ et $\lim_{x\to 1}f(x)$
b) $f$ admet-elle un prolongement par continuité en 1?
2) $f$ admet-elle un prolongement par continuité en-1?

**Exercice 27.**
Soit $f$ la fonction définie sur $\left[0; \frac{\pi}{2}\right]$ par :

$$f(x) = \frac{(1 - \tan x)^2}{\cos 2x}$$

Est-ce-que la fonction $f$ admet un prolongement par continuité en $\frac{\pi}{4}$ ? Justifier votre réponse.

**Exercice 28.**
On considère la fonction $f$ définie par :

$$\begin{cases} f(x) = \frac{x^2 - x + 1}{3x^2 + 6} \text{ si } x \ge 1 \\ f(x) = \frac{1}{x^2 - x} \sin\left(\frac{\pi}{2}x\right) \text{ si } x < 1 \end{cases}$$

1) Étudier la continuité de la fonction $ f $ en 1.
2) $f$ admet-elle un prolongement par continuité en 0?

**Exercice 29.**
On considère la fonction $g$ définie par :

$$g(x) = \frac{\tan(\pi x)}{x - E(x)}$$

1) Déterminer $D_{g}$, le domaine de définition de $g$.
2) $g$ admet-elle un prolongement par continuité en 0?

### LIMITE D'UNE COMPOSÉE DE DEUX FONCTIONS
**Exercice 30.**
Calculer les limites suivantes :

$$\begin{array}{l} \lim_{x \to 0} \frac{\sin(\pi \sqrt{\cos x})}{x} ; \quad \lim_{x \to 0} \tan\left(\frac{\sin(\pi x)}{x}\right) \\ \lim_{x \to +\infty} \left(x - \sqrt{x} + \frac{1}{x}\right)^{1/2} ; \quad \lim_{x \to 0^+} \tan\left(\sqrt{x} \cdot \cos\left(\frac{1}{x^2}\right)\right) \\ \lim_{x \to 0^+} \cos\left(\frac{E(\sqrt{x})}{x}\right) ; \quad \lim_{x \to +\infty} \tan\left(\pi \sqrt{\frac{x^2 - 1}{4x^2 + 1}}\right) \end{array}$$

**Exercice 31.**
Calculer les limites suivantes :

$$\begin{array}{l} \lim_{x \to 1} \frac{\sin\left(\cos\left(\frac{\pi}{2}x\right)\right)}{x - 1} ; \quad \lim_{x \to 0^+} \tan\left(\frac{\pi \sin x}{6|x - x^2|}\right) \\ \lim_{x \to 0} \cos\left(\frac{\tan(2\pi x) - \tan(6\pi x)}{3x}\right) ; \quad \lim_{x \to +\infty} E\left(\frac{x}{x + 1}\right) \\ \lim_{x \to +\infty} \cos\left(\frac{\pi x^3 + 2x}{5 - 4x^3}\right) ; \quad \lim_{x \to 0} \sin\left(x^3 \sin\left(\frac{1}{x}\right) - 2x\right) \end{array}$$

### Continuité sur un intervalle
**Exercice 32.**
Pour chacun des cas suivants, montrer que la fonction $f$ est continue sur son domaine de définition :

1) $ f(x) = -5x^{3} + 7x^{2} - 5 $
2) $ f(x) = \frac{x^2 + 2}{(x + 2)(x - 1)(2x - 3)} $
3) $ f(x) = x^{3} + 3x^{2} + 5x - \sin x $
4) $ f(x) = \frac{\cos x}{3x^2 - 5x + 2} $
5) $ f(x) = \sin^3 x - 5\cos x + 4 $
6) $ f(x) = \frac{\sqrt{x^4 - 5x^2 + 6}}{(x - 1)(x^2 + 1)} $
7) $ f(x) = \sin (\sqrt{x}) + \frac{x^2 + 4x - 5}{\sqrt{x}} $

**Exercice 33.**
On considère la fonction $f$ définie sur $\mathbb{R}$ par

$$\begin{cases} f(x) = \frac{x^3 + 6}{3x - 2} \quad \text{si } x \le -1 \\ f(x) = \cos(\pi x) \quad \text{si } -1 < x < 1 \\ f(x) = -\frac{1}{2}\sqrt{x^2 + 3} \quad \text{si } x \ge 1 \end{cases}$$

Montrer que $f$ est continue sur $\mathbb{R}$.

**Exercice 34.**
Pour chacune des fonctions suivantes, déterminer le domaine de définition puis étudier la continuité sur chaque sous-intervalle du domaine de définition :

$$f(x) = \tan\left(\frac{\pi}{2x-1}\right) \quad ; \quad g(x) = \sin\left(\cos\frac{\pi}{x}\right)$$

$$h(x) = \frac{x^2 - \sqrt{2-x}}{|x+1|-2} \quad ; \quad k(x) = \frac{1-\cos(2\pi x)}{x(x-1)}$$

$$\begin{cases} u(x) = \frac{1-\cos\sqrt{|x|}}{|x|} \text{ si } x \neq 0 \\ u(0) = \frac{1}{2} \end{cases} \quad ; \quad v(x) = \frac{x}{\tan(\pi x)}$$

**Exercice 35.**
Soit $g$ la fonction définie sur $\mathbb{R}$ par :

$$\begin{cases} g(x) = \alpha^2 x + 3 & \text{si } x \leq 1 \\ g(x) = \frac{8-\beta^2 x}{2x-1} & \text{si } 1 < x < 3 \\ g(x) = \frac{2}{5}x^2 - \frac{\beta^2}{5}x + \alpha\beta & \text{si } x \geq 3 \end{cases}$$

Déterminer les réels $\alpha$ et $\beta$ sachant que la fonction $g$ est continue sur $\mathbb{R}$.

**Exercice 36.**
Soit $f$ la fonction définie sur $\mathbb{R}$ par :

$$f(x) = x^3 - 3x + 1$$

Déterminer les images des intervalles suivants par $f$ :

$$I = ]0; +\infty[ \quad ; \quad J = ]0; 1[ \quad ; \quad K = ]-\infty; -1]$$

**Exercice 37.**
On considère la fonction $f$ définie sur $\mathbb{R}$ :

$$f(x) = \begin{cases} 2x-3 & \text{si } x < 2 \\ x^2-3 & \text{si } x \geq 2 \end{cases}$$

1) Justifier la continuité de $ f $ sur $ \mathbb{R} $.
2) Déterminer: $ f([ - 2;4]) $ et $ f(\cdot ] - \infty ;1] $

**Exercice 38.**
Soit $f$ la fonction définie par : $f(x) = \frac{x^3}{x+1}$

1) Montrer que $ f $ est strictement croissant sur l'intervalle $ I = \left[-\frac{3}{2}; -1\right] $.
2) Déterminer l'image de $ I $ par la fonction $ f $.
3) En déduire que l'équation $ f(x) = 10 $ admet une unique solution dans l'intervalle $ I $.

### Théorème des valeurs intermédiaires
**Exercice 39.**
Dans chacun des cas suivants, montrer que l'équation proposée admet au moins une solution dans l'intervalle $I$ :

1) $x^{3} - 2x^{2} - 1 = 0$ $I = [2;3]$
2) $x^4 - 2x - \sqrt{x} + 1 = 0$ $I = ]0;1[$
3) $x^4 + x^2 + 4x = 1$ $I = [0;1]$
4) $x - 2\sin x = 0$ $I = \left]\frac{\pi}{3};\pi \right[$
5) $\sqrt{1 + \frac{1}{x}} = x$ $I = \left[\frac{5}{4},\frac{3}{2}\right]$
6) $6\cos x = x$ $I = [0;\pi ]$

**Exercice 40.**
Dans chacun des cas suivants, montrer que l'équation proposée admet au moins une solution dans l'intervalle $I$ :

1) $2x^{3} + 3x - 3 = 0$ $I = [0;1]$
2) $\sin x = 2 - x$ $I = \left]0;\frac{\pi}{2}\right[$
3) $\tan x + 4x = 5$ $I = \left[\frac{\pi}{4};\frac{\pi}{3}\right]$
4) $x^{3} + E\left(\frac{x}{3}\right) = x + 1$ $I = [1;2]$

1) Montrer que l'équation $x^2 + x^3 - x^2 + x + 1 = 0$

Montrer que chacune des équations suivantes admet au moins une solution dans l'intervalle $I$ :

1) $x^3 - 3x^2 + 15x - 7 = 0$ ; $I = \mathbb{R}$
2) $1 + \sin x - x^2 = 0$ ; $I = \mathbb{R}$
3) $x^{17} = x^{11} + 1$ ; $I = \mathbb{R}^*$
4) $\sqrt{x^3 + 5x + 4} = 100$ ; $I = \mathbb{R}^*$
5) $\cos x = \frac{2}{(x + 1)^2}$ ; $I = \mathbb{R}$
6) $x^2 \cos x + x \sin x + 1 = 0$ ; $I = \mathbb{R}^*$

1) Montrer que l'équation $x^2 + x^3 - x^2 + x + 1 = 0$ admet une unique solution dans $\left] -\infty; \frac{1}{2}\right]$.

2) Montrer que la courbe de la fonction $f$, telle que $f(x) = 2x^3 + 3x + 4$ coupe l'axe des abscisses en un seul point dont l'abscisse $\alpha$ est tel que $-1 < \alpha < 0$.

3) Soit $g$ la fonction définie sur $\mathbb{R}$ par :

$$g(x) = x^3 - 6x^2 + 11$$

a) Montrer que l'équation $g(x) = 0$ admet trois solutions distinctes dans $\mathbb{R}$, notées $x_1, x_2$ et $x_3$. (On adoptera l'ordre suivant $x_1 < x_2 < x_3$)

b) En déduire le signe de $g(x)$ sur $\mathbb{R}$.

Soit $f$ la fonction définie sur $[0; 1]$ par :

$$f(x) = \frac{x}{\sqrt{x^2 + 1}} - \cos(\pi x)$$

1) Montrer que l'équation $ f(x) = 0 $ admet une unique solution $ \alpha $ dans $ ]0;1[ $.
2) Par la méthode de dichotomie, trouver un intervalle $[a,b]$ de longueur 0,25 tel que $a < \alpha < b$.

Soit $n$ un entier naturel non nul.

1) Montrer que l'équation :

$$\cos x + \cos 2x + \dots + \cos nx = 0$$

admet au moins une solutions dans $[0; \pi]$.

2) Montrer que l'équation $\frac{2\sin^n x}{1 + \cos x} = \frac{1}{4} - x$ admet une unique solution dans $\left] 0; \frac{\pi}{2} \right[$.

### THÉORÈME DE LA FONCTION RÉCIPROQUE
Dans chacun des cas suivants, montrer que $f$ réalise une bijection de $I$ sur un intervalle $J$ à déterminer puis déterminer une expression de $f^{-1}(x)$ :

1) $ f(x) = \frac{x^2 + 5x}{x - 2} $ $ I = [5; +\infty[ $
2) $f(x) = x^{2} - 6x + 5$ $I = ] - \infty ;3[$
3) $f(x) = \frac{x}{\sqrt{x^2 + 1}}$ $I = \mathbb{R}^*$
4) $f(x) = \left(\sqrt{3 - x} +1\right)^2$ $I = ] - \infty ;3]$
5) $f(x) = x - \sqrt{x^2 - x}$ 1=1; $+\infty [$
6) $f(x) = 2x - \sqrt{x}$ 1=0;1 16

On considère la fonction $f$ définie sur $\left] -1, +\infty \right[$ par

$$f(x) = \frac{x}{\sqrt{x + 1}}$$

1) Montrer que $ f $ admet une fonction réciproque définie sur un intervalle $ J $ à déterminer.
2) Dresser le tableau de variations de la fonction
3) Déterminer l'expression de $ f^{-1}(x) $ pour tout

### FONCTION RACINE N°ème - PUISSANCE RATIONNELLE
**Exercice 41.**
1) Simplifier les nombres suivants :

$$a = \frac{\sqrt{18} \times \sqrt{\sqrt[3]{256}} \times \sqrt[4]{64}}{\sqrt[3]{1024} \times \sqrt[4]{64} \times 10^6} ; b = \frac{\sqrt[3]{3} \times \sqrt[3]{9} \times (\sqrt{9})^3}{\sqrt[4]{27} \times \sqrt{\sqrt{3}}}$$

$$c = \frac{\sqrt[4]{2048} \times \sqrt[4]{160000}}{\sqrt[4]{4096} \times \sqrt[4]{256} \times \sqrt{512}}$$

2) Simplifier les nombres suivants :

$$x = (27)^{\frac{2}{3}} + (16)^{\frac{3}{4}} - \frac{2}{\sqrt[3]{8^{-2}}} + \frac{\sqrt[3]{2}}{4^{\frac{2}{3}}}$$

$$y = \frac{(81)^{\frac{2}{6}} \times (27)^{\frac{1}{4}} \times 9^{\frac{5}{2}}}{3^{\frac{14}{3}}}$$

$$z = \frac{a^{\frac{5}{3}} \times \left(\sqrt[4]{\frac{1}{a^2}}\right)^{\frac{3}{2}} \times b^{\frac{5}{2}}}{\left(a^{\frac{5}{3}}\right)^{\frac{2}{3}} \times \sqrt[4]{b^{\frac{3}{4}}}} \quad (\text{ici } (a, b) \in (\mathbb{R}_+^*)^2)$$

3) Comparer les deux nombres: $\sqrt[4]{91}$ et $\sqrt[4]{15}$
4) Ordonner dans l'ordre croissant les nombres:

$$A = \sqrt{2} ; B = \sqrt[3]{4} ; C = \sqrt[4]{5} ; D = \sqrt[4]{3}$$

5) Écrire les dénominateurs des nombres suivants sous la forme d'un nombre rationnel :

$$\frac{1}{2\sqrt[3]{4}} ; \frac{2}{\sqrt[3]{3}-1} ; \frac{\sqrt[3]{5}+\sqrt[3]{2}}{\sqrt[3]{5}-\sqrt[3]{2}} ; \frac{1}{\sqrt[3]{25}-\sqrt[3]{10}+\sqrt[3]{4}}$$

**Exercice 42.**
Résoudre dans $\mathbb{R}$ les équations suivantes :

1) $x^8 - 25 = 0$ 2) $x^3 + 8 = 0$
3) $x^7 = \sqrt{3}$ 4) $\sqrt[3]{x} = \sqrt[6]{7}$
5) $x^4 = 16$ 6) $(3x - 4)^{3} = 32$
7) $\sqrt[3]{x^2} - 5\sqrt[3]{x} + 4 = 0$ 8) $9x - 7\sqrt[3]{x} - 2 = 0$

**Exercice 43.**
Résoudre dans $\mathbb{R}$ les équations suivantes :

1) $x^4 - 5x^2 - 24 = 0$ 2) $x^6 + 3x^3 - 4 = 0$
3) $\sqrt{3x^2 + 5x + 8} -\sqrt{3x^2 + 5x + 1} = 1$
4) $\sqrt{x^2 - 4} + 2\sqrt{x^2 - 1} = x$
5) $\sqrt[3]{\frac{2 - x}{3 + x}} + \sqrt[3]{\frac{3 + x}{2 - x}} = 2$ 6) $(\sqrt[3]{x} - 1)^{3} - 54 = 0$
7) $\sqrt[3]{1 - x} +\sqrt[3]{1 + x} = \sqrt[3]{2}$ 8) $\sqrt[3]{x + 8} +\sqrt[3]{27 - x} = 5$
9) $\sqrt[3]{x + 8} -\sqrt[3]{8 - x} = \sqrt[3]{64 - x^3}$
10) $\sqrt{3} +\sqrt{x} +\sqrt{3} -\sqrt{x} = \sqrt[4]{2x}$
11) $5x - 4\sqrt[3]{x} - 1 = 0$ 12) $\sqrt{x} +\sqrt[3]{x} -12 = 0$
13) $\frac{\sqrt{x + 3}}{3} +\sqrt{\frac{3}{x^3} + \frac{1}{x^2}} = \frac{\sqrt{x}}{2}$

**Exercice 44.**
Résoudre dans $\mathbb{R}$ les inéquations suivantes :

1) $\sqrt{x + 2} < x$ 2) $\sqrt{2x + 1} - 3 < \sqrt{x + 2}$
3) $(2 - x)^{3}\leq x$ 4) $\sqrt{x^2 + 8} -2 <   x$
5) $\sqrt[3]{x^3 - 3x^2 + x + 1} \geq x - 1; 2\sqrt[3]{x^3} - \frac{3x}{\sqrt[3]{x}} \leq 20$

**Exercice 45.**
Calculer les limites suivantes :

1) $\lim_{x\to 0}\frac{\sqrt{x + 8} - 2}{x}$ 2) $\lim_{x\to 0}\frac{\sqrt{x^2} - x}{x}$
3) $\lim_{x\to 0}\frac{\sqrt{x} - 1}{\sqrt{x^2 + 1}}$ 4) $\lim_{x\to 0}\frac{x - \sqrt{x + 6}}{3 - \sqrt{2x + 5}}$
5) $\lim_{x\to 1}\frac{\sqrt{x + 7} - 2}{\sqrt{x} - 1}$ 6) $\lim_{x\to 1}\frac{\sqrt{5 - x} - 1}{2 - \sqrt{x} + 4}$
7) $\lim_{x\to 0}\sqrt{x^3 + x} -x$ 8) $\lim_{x\to 0}x - \sqrt{x} -\sqrt{x}$
9) $\lim_{x\to 0}\sqrt{x^3 + x^2 + 1} -2x$ 10) $\lim_{x\to 0}\sqrt{x^3 + x^2 + 1} -x$
11) $\lim_{x\to 0}\sqrt{x^2 - x} -x - 1$ 12) $\lim_{x\to 0}\sqrt{x^3 + 5} +2x$

**Exercice 46.**
**Exercice 47.**
Calculer les limites suivantes :

1) $\lim_{x\to \infty}\frac{\sqrt{x^2 + 1} - x}{\sqrt{x^2 + 1} - x^2}$ 2) $\lim_{x\to \infty}\frac{\sqrt{x - 1} - \sqrt{x}}{\sqrt{x - 1} - \sqrt{x}}$
2) $\lim_{x\to \infty}\sqrt{x(1)^2 - \sqrt{x(1)^2}}$ 4) $\lim_{x\to \infty}x^{\frac{3}{4}} - x^{\frac{5}{2}}$
5) $\lim_{x\to \infty}\frac{\sqrt[3]{2x^3 - x} - \sqrt[3]{x^3 + 2x}}{x}$ 6) $\lim_{x\to \infty}\frac{(4 - x^{\frac{2}{3}})^{\frac{3}{2}}}{x - 8}$
7) $\lim_{x\to \infty}\frac{\sqrt{x^3 + x - 3}}{5x}$ 8) $\lim_{x\to \infty}\frac{\sqrt{x^3 + x - 3}}{x}$
9) $\lim_{x\to \infty}\frac{\sqrt{x + 2} - \sqrt{x}}{\sqrt{x} - \sqrt{x + 1}}$ 10) $\lim_{x\to \infty}\frac{\sqrt{x + 1} - \sqrt{x}}{\sqrt{x + 1} - \sqrt{x}}\sqrt[3]{x}$

**Exercice 48.**
Calculer les limites suivantes :

$$\lim_{x \to 0} \frac{\sqrt[3]{1 + \tan x} - \sqrt[3]{1 + \sin x}}{x^3} ; \lim_{x \to 0} \frac{\cos x - \sqrt[3]{\cos x}}{x}$$
$$\lim_{x \to 1} \frac{\sqrt{2x + 2} - \sqrt[3]{x + 7}}{1 - \tan\left(\frac{\pi x}{4}\right)} ; \lim_{x \to \infty} \frac{\sin\left(\frac{1}{x}\right)}{\sqrt{\frac{1 + 8x}{x^4}}}$$

### LA FONCTION ARCTANGENTE
**Exercice 49.**
Simplifier les expressions suivantes :

$$\text{Arctan}\left(\tan\left(\frac{41\pi}{17}\right)\right) ; \text{Arctan}\left(\tan\left(-\frac{79\pi}{3}\right)\right)$$
$$\text{Arctan}\left(\tan 5\left(\text{Arctan}\sqrt{3}\right)\right) ; \text{Arctan}\left(\frac{1}{\tan\left(\frac{3\pi}{11}\right)}\right)$$
$$\tan\left(\text{Arctan}(2016)\right) ; \tan\left(\text{Arctan}\frac{2}{3} - \text{Arctan}\frac{3}{7}\right)$$
$$\tan(-\text{Arctan}(5)) ; \tan(2\text{Arctan}(3))$$

**Exercice 50.**
1) Simplifier les expressions suivantes :

$$A = \text{Arctan } 2 + \text{Arctan } \frac{1}{2}$$
$$B = \text{Arctan}\left(1 - \sqrt{2}\right) - \text{Arctan}\left(1 + \sqrt{2}\right)$$

2) Établir les égalités suivantes :

$$\text{Arctan } \frac{1}{2} + \text{Arctan } \frac{1}{3} = \frac{\pi}{4}$$
$$\text{Arctan } \frac{1}{2} + \text{Arctan } \frac{1}{5} + \text{Arctan } \frac{1}{8} = \frac{\pi}{4}$$
$$4\text{Arctan } \frac{1}{5} - \text{Arctan } \frac{1}{239} = \frac{\pi}{4}$$

3) On pose : $$\alpha = 2\text{Arctan}\left(\frac{1}{2}\right) - \text{Arctan}\left(\frac{1}{7}\right)$$

a) Vérifier que $0 < \alpha < \frac{\pi}{3}$
b) Calculer tan $\alpha$ puis en deduire la valeur de

**Exercice 51.**
Résoudre les équations suivantes :

$$\text{Arctan}(3x) = \frac{\pi}{8} ; \text{Arctan}\left(x^2 + 2\right) = \text{Arctan}(3x)$$

$$\text{Arctan}\left(x^2 - x\right) = \frac{3\pi}{4} ; \text{Arctan } x = \frac{\pi}{4} + 2\text{Arctan}(3x)$$

$$\text{Arctan } x + \text{Arctan}(2x) = \frac{\pi}{3} ; \text{Arctan } \sqrt{x} = -\frac{\pi}{4}$$

**Exercice 52.**
Calculer les limites suivantes :

$$\lim_{x \to 0} \frac{\text{Arctan}(3x)}{x} ; \lim_{x \to 1} \frac{\text{Arctan}\left(x^2 + 4x\right)}{x}$$
$$\lim_{x \to \infty} \text{Arctan}\left(x^4 - x\right) ; \lim_{x \to \infty} \left(x^2 + 1\right)\text{Arctan} \frac{1}{x}$$
$$\lim_{x \to \infty} x\text{Arctan } x - \frac{\pi}{2}x ; \lim_{x \to 1} \frac{\text{Arctan}\left(\frac{1}{1 - x^2}\right)}{x - 1}$$
$$\lim_{x \to 1} \frac{x - 2\sqrt{\text{Arctan } x - \frac{\pi}{4} - 1}}{x - 1} ; \lim_{x \to 1} \frac{\text{Arctan } \sqrt{x - 1}}{x - 1}$$

### Exercices de perfectionnement
**Exercice 53.**
Soit n un entier naturel non nul.
Calculer les limites suivantes :

$$\lim_{x \to 0} \frac{x + x^2 + \dots + x^n - n}{(2 - x)^n - 1} : \lim_{x \to \frac{\pi}{2n}} \frac{\sqrt{\frac{\sin 2nx}{1 + \cos nx}}}{4n^2 x^2 - \pi^2}$$

$$\lim_{x \to 0} \frac{1 - \cos x \times \cos 2x \times \dots \times \cos nx}{x^2}$$

$$\lim_{x \to \frac{\pi}{2}} \frac{(1 - \sin x)(1 - \sin^2 x)\dots(1 - \sin^n x)}{\cos^{2n} x}$$

**Exercice 54.**
Étudier la continuité en 0 des fonctions suivantes :

$$\left\{ \begin{array}{l} f(x) = \frac{\sqrt{x} - \sqrt{1 + x^2}}{x + 1} \quad \text{si } x \ge 0 \\ f(x) = \frac{\cos x - \sqrt{1 + \sin x}}{x} \quad \text{si } x < 0 \end{array} \right.$$

$$\left\{ \begin{array}{l} g(x) = \frac{\sin x - \tan x}{\sqrt{x}} \quad \text{si } x > 0 \\ g(0) = 0 \\ g(x) = x \sin\left(\frac{1}{x}\right) \quad \text{si } x < 0 \end{array} \right.$$

$$\left\{ \begin{array}{l} h(x) = x E\left(\frac{1}{x}\right) \quad \text{si } x < 0 \\ h(0) = 0 \\ h(x) = \frac{x - E(x)}{\sqrt{x}} \quad \text{si } x > 0 \end{array} \right.$$

$$\left\{ \begin{array}{l} k(x) = \text{Arc tan } x \cdot \sin\left(1 + \frac{2}{x^3}\right) \quad \text{si } x < 0 \\ k(0) = 0 \\ k(x) = \sqrt{x} \sin\left(\frac{1}{\sqrt{x}}\right) \quad \text{si } x > 0 \end{array} \right.$$

**Exercice 55.**
Soit $f_m$ la fonction définie par :

$$\left\{ \begin{array}{l} f_m(x) = \frac{\cos\left(\frac{2}{3}x\right) - \sqrt{3}\sin\left(2x - \frac{\pi}{3}\right)}{\cos 2x} \quad \text{si } x > 0 \\ f_m(x) = x^2 + mx + m + \frac{2m+1}{x+1} \quad \text{si } x \le 0 \text{ et } x \ne -1 \end{array} \right.$$

Où m est un paramètre réel.

1) Calculer: $\lim_{x\to \frac{\pi}{4}}f_m(x)$ et $\lim_{x\to -\pi}f_m(x)$
2) Déterminer $m$ pour que $f_{m}$ soit continue en 0.
3) Déterminer $m$ pour que $f_{m}$ soit prolongable par continuité en-1.

**Exercice 56.**
Soit f la fonction définie par : $f(x) = \sqrt{x - E(x)} - x$

1) Déterminer $D_{f}$ le domaine de définition de $f$
2) Résoudre dans $\mathbb{R}$ l'équation $f(x) = 0$.
3) Soit $ p $ un entier relatif.

a) Étudier la continuité de $f$ en $p$
b) Étudier la continuité de $f$ sur $]p,p + 1[$

4) Montrer que: $(\forall x \in \mathbb{R}) - x \leq f(x) \leq 1 - x$
5) En déduire $\lim_{x\to -\infty}f(x)$ et $\lim_{x\to -\infty}f(x)$

**Exercice 57.**
1) Soit $ f $ une fonction continue sur $ \mathbb{R} $ et périodique. Montré que $ f $ est bornée sur $ \mathbb{R} $.
2) Soit $n\in \mathbb{N}^*$ . On considere la fonction $f_{n}$ definie par:

$$f_n(x) = \frac{1 + \cos x + \cos^2 x + \dots + \cos^n x}{1 + \cos^{2n} x}$$

Montrer que $f_n$ est continue et bornée sur $\mathbb{R}$.

**Exercice 58.**
On considère la fonction $f$ définie sur $\left[0; \frac{\pi}{2}\right]$ par :

$$\left\{ \begin{array}{l} f(x) = \frac{1}{\sin x} - \frac{1}{x} \text{ si } 0 < x < \frac{\pi}{2} \\ f(0) = 0 \end{array} \right.$$

1) Montrer que: $\left(\forall x\in \right]0;\frac{\pi}{2}\bigg[\bigg]\sin x\leq x\leq \tan x$
2) En déduire que pour tout $ x \in \left]0; \frac{\pi}{2}\right[ $:

$$0 < f(x) < \frac{1 - \cos x}{\sin x}$$

3) Étudier la continuité de $f$ à droite de $0$.

**Exercice 59.**
On considère la fonction $g$ définie par :

$$\left\{ \begin{array}{l} g(x) = \frac{ax^2 - ax}{x^2 - 5x + 4} \text{ si } x > 1 \\ g(x) = \frac{x^3 - 1}{\sqrt[3]{x + x} - 2} \text{ si } x < 1 \end{array} \right.$$

Déterminer la valeur de $a$ pour que la fonction $g$ soit prolongeable par continuité en $1$.

**Exercice 60.**
On considère la fonction définie par :

$$f(x) = \tan x \cdot E\left(\frac{1}{x}\right)$$

1) Déterminer $D_{f}$ le domaine de définition de $f$
2) Montrer que: $\left(\forall x\in D_f\right)\left|f(x) - \frac{\tan x}{x}\right|\leq |\tan x|$
3) En déduire que $ f $ est prolongable par continuité en 0 puis donner ce prolongement.

**Exercice 61.**
Soit $f$ une fonction définie sur $\mathbb{R}$ et $k$ un réel tel que :

$$\left(\forall (x, y) \in \mathbb{R}^2\right) : |f(x) - f(y)| \leq k|x - y|$$

Montrer que $f$ est continue sur $\mathbb{R}$.

**Exercice 62.**
Soit $f$ une fonction définie sur $\mathbb{R}$ telle que :

$$\left(\forall (x, y) \in \mathbb{R}^2\right) : f(x + y) = f(x) + f(y)$$

Montrer que si la fonction $f$ est continue en $0$ alors est continue sur $\mathbb{R}$ tout entier.

**Exercice 63.**
1) Montrer que l'équation $2x^{3} - 4x + 1 = 3\sqrt{x} + 1$ admet au moins une solution dans [0;1].
2) Montrer que l'équation $4x^{5} + x^{3} = 27$ admet une solution unique dans $]1;2[$.
3) Soit $ f $ la fonction définie sur $ \mathbb{R} $ par:

$$f(x) = \frac{9x^5 - x - 2}{x^2 + 1} - \sin\left(\frac{\pi}{2}x\right)$$

Montrer que la courbe $\mathscr{C}_f$ coupe l'axe des abscises en un point dont l'abscisse appartient à $[0; 1]$.

4) Soit $u$ et $v$ les deux fonctions définies par :

$$u(x) = \sqrt[3]{3x^2 + 7x + 1} \quad \text{et} \quad v(x) = \sqrt{5 - x^2}$$

Montrer que les courbes $\mathscr{C}_u$ et $\mathscr{C}_v$ se coupent en point dont l'abscisse appartient à $[0; 2]$.

**Exercice 64.**
Soit $f$ la fonction définie par :

$$f(x) = \frac{\sqrt{1 + \frac{1}{x} - \sqrt{x^2 + 2x}}}{x} - 1$$

1) Déterminer $D$ le domaine de définition de $f$.
2) Calculer les limites de $f$ aux bornes de $D$.
3) Montrer qu'il existe un couple $(\alpha, \beta) \in \mathbb{R}^2$ tel

$$\left(\forall x \in \left[\frac{1}{2}; 1\right]\right) \quad \alpha x \leq \sqrt{1 + \frac{1}{x} - \sqrt{x^2 + 2x}} \leq \beta$$

4) Montrer qu'il existe un réel $c \in \left]\frac{1}{2}; 1\right[$ tel que :

$$\sqrt{1 + \frac{1}{x} - \sqrt{c^2 + 2c}} = c$$

**Exercice 65.**
Soit $f$ la fonction numérique définie par :

$$f(x) = \frac{1}{2} \left( \sqrt{\frac{2x}{x+1}} + \sqrt{2x - x^2} \right)$$

1) Déterminer $D$ le domaine de définition de $f$.
2) Justifier la continuité de la fonction $ f $ sur $ D $.
3) Montrer qu'il existe un couple $(\alpha, \beta) \in \mathbb{R}^2$ tel que:

$$\left( \forall x \in \left[ \frac{1}{2}; \frac{3}{2} \right] \right) \quad 2\alpha \leq \sqrt{\frac{2x}{x+1}} + \sqrt{2x - x^2} \leq 2\beta$$

4) Montrer que $ f $ réalise une bijection de [0;1] sur [0;1]
5) Soit $[a,b]$ un segment inclus dans [0;1].

Montrer que : $(\exists c \in [a, b]) f(c) = \frac{a - c}{a - 2b + c}$

**Exercice 66.**
Soit $f$ une fonction définie de $[0; 1]$ dans $[0; 1]$ et continue sur $[0; 1]$.

Établir que : $(\exists c \in [0; 1]) f(c) + f(1 - c) = 2c$

**Exercice 67.**
Soit $f : [a, b] \to [a, b]$ une fonction continue sur $[a, b]$.
Montrer que $f$ admet un point invariant.

**Exercice 68.**
Soit $f$ une fonction continue sur $[0; 1]$ telle que :

$$f(0) = f(1) = \frac{1}{2}$$

Montrer qu'il existe $c \in ]0; 1[$ tel que : $f(c) = \frac{1 - c}{1 + c}$

**Exercice 69.**
Soit $f$ une fonction continue sur $[a, b]$ telle que :

$$f(a) = f(b)$$

Montrer que l'équation $f(x) = f\left(x + \frac{b - a}{2}\right)$ admet au moins une solution dans $[a, b]$.

**Exercice 70.**
Soit $f$ et $g$ deux fonctions continues sur $[0; 1]$ telles que : $(f(0) - g(0))(f(1) - g(1)) \leq 0$

1) Montrer qu'il existe $c\in [0;1]$ tel que $f(c) = g(c)$
2) On suppose dans cette question que:

$$f(0) = g(1) = 0 \quad \text{et} \quad f(1) = g(0) = 1$$

Montrer que :

$$(\forall \lambda \in \mathbb{R}^+) (\exists \alpha \in [0; 1]) f(\alpha) = \lambda g(\alpha)$$

**Exercice 71.**
Soit $f$ une fonction continue sur $[a, b]$ et $p$ et $q$ deux réels strictement positifs.

Montrer qu'il existe un réel $c \in [a, b]$ tel que :

$$pf(a) + qf(b) = (p + q)f(c)$$

**Exercice 72.**
Soit $f$ une fonction définie et continue sur $\mathbb{R}$ telle que :

$$(\exists a \in \mathbb{R}) \quad f \circ f(a) = a$$

Montrer que : $(\exists c \in \mathbb{R}) f(c) = c$

**Exercice 73.**
Soit $f$ une fonction définie et continue sur un intervalle $I$ de $\mathbb{R}$. On suppose que $f$ ne s'annule pas sur $I$.

Montrer que $f$ garde un signe constant sur $I$.

**Exercice 74.**
Soit $f$ et $g$ deux fonctions définies de $[0; 1]$ dans $[0; 1]$ et continues sur $[0; 1]$ telles que $f \circ g = g \circ f$.

1) Montrer que si un reel $a$ est solution de $f(x) = x$ alors $g(a)$ est aussi solution de cette solution.
2) Montrer qu'il existe un reel $\alpha \in [0;1]$ tel que:

$$f(\alpha) = g(\alpha)$$

(On pourra utiliser un raisonnement par l'absurde)

Soit $f$ une fonction continue sur un segment $[a, b]$, et $x_1, x_2, \ldots$ et $x_n$ des éléments distincts de $[a, b]$.

Montrer qu'il existe un réel $c \in [a, b]$ tel que :

$$f(c) = \frac{1}{n} \sum_{k=1}^{n} f(x_k)$$

Soit $f$ une fonction numérique continue sur $\mathbb{R}$ et telle que : $\lim_{x \to \infty} f(x) = a$ et $\lim_{x \to \infty} f(x) = b$ et $ab < 0$

1) Montrer que: $\left(\exists \left(x_{0},y_{0}\right)\in \mathbb{R}^{2}\right)f\left(x_{0}\right),f\left(y_{0}\right) < 0$
2) En déduire que l'équation $ f(x) = 0 $ admet au moins une solution dans $ \mathbb{R} $.

**Exercice 75.**
Soit $P$ une fonction polynomiale de degré impair. Montrer que l'équation $P(x) = 0$ admet au moins une solution réelle.

**Exercice 76.**
Soit $f$ une fonction numérique continue sur $[0; 1]$ telle que $f(0) = f(1)$.

Pour tout entier $n \ge 2$, on considère la fonction $f_n$ définie sur $\left[0; 1 - \frac{1}{n}\right]$ par : $f_n(x) = f\left(x + \frac{1}{n}\right) - f(x)$

1) Calculer $\sum_{k=0}^{n-1} f_k \left( \frac{k}{n} \right)$.
2) Montrer que: $(\exists x_0 \in ]0; 1[)$ $f(x_0) = f\left(x_0 + \frac{1}{n}\right)$

**Exercice 77.**
Soit $f$ une fonction continue et positive sur $\mathbb{R}^*$ telle que : $\lim_{x \to \infty} \frac{f(x)}{x} < 1$

Montrer que l'équation $f(x) = x$ admet au moins une solution dans $\mathbb{R}^*$.

**Exercice 78.**
Soit $n \in \mathbb{N}^* - \{1\}$. On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par : $f(x) = x^{n+1} - 2x^n + 1$

1) Montrer que $f$ est strictement décroissant sur l'intervalle $\left[0; \frac{2n}{n+1}\right]$.
2) En déduire que $ f\left(\frac{2n}{n + 1}\right) < 0 $.
3) Montrer qu'il existe au moins un réel $\alpha \in \left[\frac{2n}{n + 1}\right]$ tel que $f(\alpha) = 0$
4) Vérifier que: $\alpha^n = \frac{1}{2 - \alpha}$

**Exercice 79.**
Soit $f$ une fonction numérique continue sur $[a, b]$ telle que $f(a) < ab$ et $b^2 < f(b)$.

Montrer que : $(\exists \alpha \in [a, b]) \ f(\alpha) = \alpha b$

**Exercice 80.**
1) Soit $f$ une fonction continue et strictement positive sur un intervalle $[a, b]$.

Montrer que :

$$(\exists \alpha > 0); (\forall x \in [a, b]) \ f(x) \ge \alpha$$

2) Soit $g$ et $h$ deux fonctions continues sur $[a, b]$ telle que : $(\forall x \in [a, b]) \ g(x) > h(x)$

Montrer que :

$$(\exists \beta > 0); (\forall x \in [a, b]) \ g(x) \ge h(x) + \beta$$

**Exercice 81.**
Soit $f$ une fonction numérique continue sur $[a, b]$. Montrer qu'il existe au moins un réel $c \in ]a, b[$ telle

$$f(c) = \frac{1}{a - c} + \frac{1}{b - c}$$

**Exercice 82.**
Calculer les limites suivantes :

$$\lim_{x \to \infty} \sqrt{x^2 + 3} - \sqrt{x^2 + 3} \quad ; \quad \lim_{x \to \infty} \sqrt[3]{1 - x^3} - \sqrt[4]{x^4 - 1}$$
$$\lim_{x \to \infty} \frac{\sqrt{x-1} - 1}{\sqrt{x-1} - 1} \quad ; \quad \lim_{x \to \infty} \frac{\sqrt{x}}{\sqrt[3]{x+1} - \sqrt{x-1}}$$
$$\lim_{x \to \infty} \frac{\sqrt{x-1} - \sqrt{x-1}}{\sqrt{x-1} - \sqrt{x-1}} \quad ; \quad \lim_{x \to \infty} \frac{\sqrt{x-1}}{\sqrt[3]{x+63} - 4}$$
$$\lim_{x \to \infty} \frac{\sqrt{x+3} - \sqrt{x}}{\sqrt{x+3} - \sqrt{x}} \times \sqrt[4]{x} \quad ; \quad \lim_{x \to \infty} \frac{3\sqrt{x+1} - 1\sqrt{x^3}}{2\sqrt[3]{(x-1)^3} - \sqrt[3]{x}}$$

**Exercice 83.**
Résoudre les équations suivantes :

$$\sqrt[3]{2+x} - \sqrt[3]{2-x} = \sqrt[6]{4-x^2} \quad ; \quad \sqrt[3]{x-1} = \sqrt[3]{2} \cdot \sqrt{x-1}$$
$$2x\sqrt[3]{x} - 3x\sqrt[3]{\frac{1}{x}} = 20 \quad ; \quad \left(\frac{1-\sqrt[3]{x}}{3-\sqrt[3]{x}}\right)^3 + 125 = 0$$

**Exercice 84.**
1) Résoudre les équations suivantes :

$$\sqrt[3]{x^2} - 3\sqrt[3]{x(x-1)} + 2\sqrt[3]{(x-1)^2} = 0$$
$$\sqrt[3]{(1+x)^2} + 4\sqrt[3]{(1-x)^2} = 4\sqrt[3]{1-x^2}$$

2) Calculer les limites suivantes :

$$\lim_{x \to \infty} x^{\frac{3}{2}} \left(\sqrt[3]{x+1} - \sqrt[3]{x-1}\right) \quad ; \quad \lim_{x \to \infty} \sqrt[3]{x^4 + x} - x - 2$$

3) Étudier selon les valeurs du paramètre m la limite

suivante : $$\lim_{x \to \infty} \sqrt[3]{x^3 + x^2 + 1} + mx$$

**Exercice 85.**
Résoudre dans R les inéquations suivantes :

$$\sqrt{2x+1} - \sqrt{x+8} > 3 \quad ; \quad \sqrt[3]{x^2 - 8} < x+2$$
$$x\sqrt[3]{x^4} \le 20 + \frac{3x}{\sqrt[3]{x}} \quad ; \quad \frac{x-\sqrt[3]{x}}{4} \ge \frac{\sqrt{x}-1}{3}$$
$$\sqrt[3]{x^3 - 3x^2 + 5x - 6} > x-2 \quad ; \quad 3\sqrt{x} - \sqrt[3]{x} \ge 20$$

**Exercice 86.**
Un marcheur parcourt 12km en une heure.

Montrer qu'il existe au moins un intervalle de 30 min pendant lequel il parcourt exactement 6km.

**Exercice 87.**
Discuter suivant les valeurs des paramètres réels a, b, c et m l'existence et la valeur des limites :

$$\lim_{x \to \infty} \left(\sqrt{x^3 + ax^2 + bx + c} + mx\sqrt{x+2}\right)$$
$$\lim_{x \to \infty} \left(\sqrt[3]{x^3 + x^2 + 1} + mx\right)$$

**Exercice 88.**
Soit f une fonction continue sur [0;1] et à valeurs dans [0;1]. On suppose que :

$$(\forall x \in [0;1]) \quad \text{for } f(x) = x \quad \text{et} \quad f(0) = 0$$

1) Montrer que $ f $ est injective.
2) Montrer que $ f $ est strictement monotone sur $[0;1]$.
3) En déduire que $ f $ est strictement croissant sur

$$[0;1] \text{ puis que : } (\forall x \in [0;1]) \quad f(x) = x$$

**Exercice 89.**
On considère la fonction h définie par :

$$h(x) = \text{Arc tan}\left(\frac{x^2 - 4x + 2}{x^2 - 2}\right)$$

1) Déterminer $D_{n}$ le domaine de définition de $h$.
2) Calculer les limites de $ h $ aux bornes du $ D_{n} $.
3) Montrer que $ h $ réalise une bijection de $ K = \sqrt[3]{2}; +\infty $ à valeurs dans un intervalle $ L $ à déterminer.
4) On considere la fonction $ f $ définie sur l'intervalle

$$I = \sqrt[3]{2} - 1; +\infty \quad \text{[ par : } f(x) = h(x+1)$$

Montrer que f réalise une bijection de I sur un intervalle J à déterminer puis déterminer f⁻¹(x) pour tout x ∈ J.

## Devoirs et synthèse

### Se préparer aux devoirs
**Devoir 1.**
I) Calculer les limites suivantes :

$$\lim_{x \to +\infty} \frac{x^{\frac{2}{3}} - 1}{\operatorname{Arc} \tan(x - 1)} ; \lim_{x \to +\infty} x \operatorname{Arc} \tan(\sqrt{x}) - \frac{\pi}{2} x$$
$$\lim_{x \to +\infty} \left( \sqrt[3]{\left(\sqrt{x}\right)^3 + x} - \sqrt[3]{x^3 + x^2} \right) ; \lim_{x \to +\infty} \frac{x - \sqrt[3]{x^2}}{x}$$
$$\lim_{x \to +\infty} \left( 2x + 1 - \sqrt[3]{x - 8x^3} \right) ; \lim_{x \to +\infty} \frac{1}{x} \operatorname{Arc} \tan\left( \frac{\sqrt{x}}{x + 1} \right)$$
$$\lim_{x \to +\infty} \frac{2\sqrt[3]{x + 1} - \sqrt[3]{x} \sqrt[3]{x^2}}{\sqrt[3]{x - 1} - \sqrt[3]{x}} ; \lim_{x \to +\infty} \frac{1}{x} \left( x^{\frac{2}{3}} - x^{\frac{1}{3}} \right)^{\frac{3}{2}}$$

II) Montrer que: $2\operatorname{Arctan}(2) + \operatorname{Arctan}\left(\frac{4}{3}\right) = \pi$
III) Montrer que pour tout $x\in ]1; + \infty [$

$$\operatorname{Arctan}\left( \frac{2x}{1 - x^2} \right) = 2 \operatorname{Arctan}(x) - \pi$$

IV) Soit $f$ une fonction continue sur $[0; 1]$ telle que :

$$(\forall x \in [0; 1] \ f(x) \le 0) \text{ et } f(0) = f(1) = 0$$

Montrer que :

$$(\forall n \in \mathbb{N}^*) (\exists c \in [0; 1]) \ f(c) = f\left(c + \frac{1}{n}\right)$$

V) Résoudre dans $\mathbb{R}$ ce qui suit :

$$\operatorname{Arc} \tan x + \operatorname{Arctan}(2x) = \frac{\pi}{3}$$

$$\operatorname{Arc} \tan x + \operatorname{Arctan}(2x) > \frac{\pi}{3}$$

VI) On considère la fonction $g$ définie sur l'intervalle

$$I = \left[ 0; \frac{\pi}{4} \right] \text{ par : } f(x) = \frac{-1}{1 - \tan^3 x}$$

1) Montrer que $ f $ admet une fonction réciproque $ f^{-1} $ définie sur un intervalle $ J $ à déterminer.
2) Dresser le tableau de variations de $ f^{-1} $.
3) Calculer $f^{-1}(x)$ pour tout $x\in J$

**Devoir 2.**
Soit $f$ la fonction définie sur $\left] -\infty; \frac{\pi}{2} \right]$ par :

$$\left\{ \begin{array}{l} f(x) = \operatorname{Arctan}\left( \sqrt[3]{\tan x} \right) \text{ si } x \in \left[ 0; \frac{\pi}{2} \right] \\ f(x) = \frac{x}{\sqrt[3]{1 - x^3}} \text{ si } x < 0 \\ f\left( \frac{\pi}{2} \right) = \frac{\pi}{2} \end{array} \right.$$

1) Montrer que $ f $ est continue sur $ \left[0; \frac{\pi}{2}\right] $.
2) Calculer: $\lim_{x\to +\infty}f(x)$ et $\lim_{x\to \left(\frac{\pi}{2}\right)}\frac{f(x) - f\left(\frac{\pi}{2}\right)}{x - \frac{\pi}{2}}$
3) Soit $ g $ la restriction de la fonction $ f $ sur $ \left[0; \frac{\pi}{2}\right] $.

a) Montrer que $g$ realise une bijection de $\left[0; \frac{\pi}{2}\right]$ sur un intervalle $J$ à déterminer.
b) Dresser le tableau de variations de $ g^{-1} $.
c) Déterminer $g^{-1}(x)$ pour tout $x\in J$

**Devoir 3.**
Soit la fonction numérique $f$ définie sur $\mathbb{R}$ par :

$$\left\{ \begin{array}{l} f(x) = 1 + \sqrt[3]{x^3 - 2x^2} \quad \text{si } x \ge 2 \\ f(x) = \frac{2}{\pi} \operatorname{Arctan}\left( \frac{1}{\sqrt{2 - x}} \right) \text{ si } x < 2 \end{array} \right.$$

1) Calculer: $\lim_{x\to +\infty}f(x)$ et $\lim_{x\to +\infty}f(x)$
2) Étudier la continuité de la fonction $ f $ en 2.
3) Soit $ g $ la restriction de $ f $ sur $ I = ] - \infty; 2[ $.

Montrer que $g$ réalise une bijection de $I$ sur un intervalle $J$ à déterminer puis calculer $g^{-1}(x)$ pour

I) Calculer les limites suivantes :

$$\lim_{x \to 0} \frac{\sqrt[3]{x^2(x+1)}}{x} ; \lim_{x \to 1} \frac{2 \text{Arctan}\left(\frac{1}{\sqrt{1-x}}\right) - \pi}{x-1}$$
$$\lim_{x \to -\infty} \frac{\sqrt[3]{x+1} - \sqrt[3]{x+1}}{\sqrt[3]{x+1} - \sqrt{x+1}} ; \lim_{x \to 0} \frac{\sin(\pi\sqrt{\cos x})}{x}$$
$$\lim_{x \to -\infty} \left(\sqrt{x^2+1} \cdot \text{Arc tan } x - \frac{\pi}{2}x\right) ; \lim_{x \to -\infty} \frac{x}{\sqrt[3]{1-x^3}}$$

II) On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$\begin{cases} f(x) = \sqrt[3]{1-x^3} \quad \text{si } x \le 1 \\ f(x) = 2 \text{Arctan}\left(\frac{2}{x+1} - 1\right) \quad \text{si } x > 1 \end{cases}$$

1) Déterminer les limites: $\lim_{x\to -x}f(x)$ et $\lim_{x\to +x}f(x)$
2) Étudier la continuité de $f$ sur $\mathbb{R}$
3) Montrer que la fonction $ f $ est strictement décroissant sur $ \mathbb{R} $.
4) a)- Montrer que la fonction $ f $ réalise une bijection de $ \mathbb{R} $ sur un intervalle $ J $ à déterminer.

b)- Calculer $f^{-1}(x)$ pour tout $x \in J$.

III) On considère la fonction numérique $g$ définie sur

$$[0;1] \text{ par : } g(x) = \sqrt[3]{1-x} - \sqrt[3]{x}$$

1) Montrer qu'il existe au moins un réel $c \in ]0;1[$ tel que : $\sqrt[3]{1-c} = \sqrt[3]{c} + c^3$

2) Résoudre dans [0;1] l'équation: $ g(x) = \sqrt[3]{1 - x} $.
3) Montrer que $ g $ admet une fonction réciproque $ g^{-1} $ définie sur un intervalle $ J $ à déterminer.

4) Calculer la limite : $\lim_{x \to 0} \frac{g^{-1}(x) - \frac{1}{2}}{x}$

IV) Soit $n$ un entier naturel supérieur ou égal à 2, et $a_1, a_2, ..., a_n$ des réels de l'intervalle $[0;1]$.

Montrer que : $(\exists \alpha \in [0;1]) \frac{1}{n} \sum_{k=1}^{n} |\alpha - a_k| = \frac{1}{2}$

I)

1) Montrer que :

$$\forall x \in ]-\frac{\pi}{4}, \frac{\pi}{4}[ ; \frac{1+\sin x}{\cos x} = \frac{1+\tan\left(\frac{x}{2}\right)}{1-\tan\left(\frac{x}{2}\right)}$$

2) a)- Montrer que pour tout $a \in [0, +\infty[$ :

$$\text{Arctan}\left(\sqrt{a} + \sqrt{a+1}\right) = \frac{\pi}{4} + \frac{1}{2} \text{Arctan}\left(\sqrt{a}\right)$$

b)- En déduire que : $\tan\left(\frac{5\pi}{12}\right) = 2 + \sqrt{3}$

II) Calculer les limites suivantes :

$$\lim_{x \to 0^+} \left(1 - \sqrt[3]{x^2}\right) \left(\text{Arctan}\left(\frac{1}{x}\right) + \frac{\pi}{2}\right)$$

$$\lim_{x \to 0^+} \frac{\text{Arc tan}\left(1 - \sqrt[3]{x^2}\right) - \frac{\pi}{4}}{x} ; \lim_{x \to -\infty} \frac{\sqrt[3]{2-x} - \sqrt[3]{2-x}}{\sqrt[3]{2-x} - \sqrt{2-x}}$$

$$\lim_{x \to -\infty} \left(\sqrt{x^2+2x} - (x+1)\right) \text{Arctan}\left(\sqrt{x^2+2x} + x+1\right)$$

III) Soit $f$ la fonction définie sur $]-\infty, \frac{\pi}{2}[$ par :

$$\begin{cases} f(x) = \sqrt[3]{1-x} + x-1 & \text{si } x < 0 \\ f(x) = \text{Arctan}\left(\sqrt[3]{x} + \tan x\right) & \text{si } x \in \left[0; \frac{\pi}{2}\right] \end{cases}$$

1) Montrer que la fonction $ f $ est continue en 0.
2) Calculer les limites suivantes:

$$\lim_{x \to 0^+} \frac{f(x)}{x} ; \lim_{x \to 0} \frac{f(x)}{x} ; \lim_{x \to -\infty} f(x) ; \lim_{x \to -\infty} \frac{f(x)}{x}$$

3) Soit $g$ la restriction de $f$ à l'intervalle $I = \left[0; \frac{\pi}{2}\right]$.

a) Montrer que $ g $ est strictement croissant sur $ I $.
b) Montrer que $ g $ est une bijection de $ I $ sur $ I $.

On note $g^{-1}$ la fonction réciproque de $g$.

c) Résoudre dans $ I $ l'équation: $ g^{-1}(x) = x $
d) Montrer que: $(\forall x \in I) g^{-1}(x) \leq x$

### Problème de synthèse
I) On considère dans $\mathbb{R}$ l'équation suivante :

$$(E): x^3 + 3x - 4 = 0$$

1) Montrer que l'équation $(E)$ admet une solution unique dans $\mathbb{R}$.
2) On pose: $\alpha = \sqrt[3]{\sqrt{5} + 2} -\sqrt[3]{\sqrt{5} - 2}$

Établir que $\alpha$ est une solution de $(E)$ puis en déduire que $\alpha = 1$.

II) On considère la fonction numérique $g$ définie par :

$$g(x) = \frac{2}{3} \cdot \frac{\text{Arctan}(\sqrt[3]{x} - 1)}{\sqrt[3]{x} - \sqrt{x}}$$

1) Déterminer $D_{g}$, le domaine de définition de $g$.
2) Calculer les limites: $\lim_{x\to 0}g(x)$ et $\lim_{x\to +x}g(x)$
3) Montrer que $ g $ admet un prolongement par continuité en 1 qu'on déterminera.

III) On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$\begin{cases} f(x) = (x-1)E\left(\frac{1}{x-1}\right) \text{ si } x \neq 0 \\ f(1) = 1 \end{cases}$$

1) Étudier la continuité de $ f $ en 1.
2) Calculer les limites: $\lim_{x\to -x}f(x)$ et $\lim_{x\to +x}f(x)$

1) Résoudre dans $\mathbb{R}$ l'équation suivante :

$$\sqrt{x+1} - \sqrt[3]{x} = 1 \text{ (On pourra poser : } t = \sqrt[3]{x})$$

2) Soit $h$ une fonction continue sur $[0; 2]$ telle que $h(0) = h(2)$.

Montrer que l'équation $h(x+1) = h(x)$ admet au moins une solutions dans l'intervalle $[0; 1]$.

3) Calculer les limites suivantes :

$$\lim_{x \to +\infty} x \left( \sqrt[3]{1 + \frac{1}{x}} - 1 \right) \text{ et } \lim_{x \to -\infty} \sqrt[3]{x^4 + x^2 + 1} + x - 2$$

On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$\begin{cases} f(x) = x \text{Arctan}\left(\frac{1 + \sqrt{x^2 + 1}}{x}\right) \text{ si } x \neq 0 \\ f(0) = 0 \end{cases}$$

1) Étudier la continuité de $ f $ en 0.
2) Étudier la parité de la fonction $ f $.
3)a)- Montrer que pour tout $x\in \mathbb{R}^*$

$$f(x) = \frac{\pi}{2}x - \frac{x}{2} \text{Arctan } x$$

(On pourra poser $x = \tan \alpha$ avec $\alpha \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$)

b)- En déduire une expression simple de $f(x)$ sur

4) On considère dans $\mathbb{R}^*$ l'équation suivante :

$$(E): \text{Arctan}\left(\frac{\sqrt{x^2 + x} + \sqrt{x}}{x}\right) = \frac{5\pi}{12}$$

a)- Montrer que: $(E)\Leftrightarrow f(\sqrt{x}) = \frac{5\pi}{12}\sqrt{x}$
b)-En déduire les solutions de l'équation $(E)$

I) Soit $f$ la fonction numérique définie sur $\mathbb{R}^*$ :

$$f(x) = 5 - \left(\frac{1}{1 + \sqrt{-x}} - 1\right)^3$$

1) Montrer que la fonction $ f $ est continue sur $ \mathbb{R}^* $.
2) Montrer que $ f $ est strictement décroissant sur $ \mathbb{R} $.
3) En déduire que $ f $ réalise une bijection de $ \mathbb{R}^* $ sur intervalle $ J $ à déterminer.
4) Déterminer $ f^{-1}(x) $ pour tout $ x \in J $.

II) On considère la fonction $g$ définie sur l'intervalle

$$I = \left[\frac{\pi}{4}; \frac{\pi}{2}\right] \text{ par : } g(x) = \sqrt[3]{1 + \frac{15}{\tan^3 x}} - 2$$

Montrer que $g$ réalise une bijection de $I$ sur une intervalle $J$ à déterminer puis calculer $g^{-1}(x)$ pour

## Résumé

- **Limite.** La limite d'une fonction décrit son comportement au voisinage d'un point ou d'une borne de son domaine.
- **Continuité en un point.** Une fonction $f$ est continue en $a$ lorsque $\lim_{x\to a}f(x)=f(a)$.
- **Continuité sur un intervalle.** Une fonction est continue sur un intervalle lorsqu'elle est continue en chacun de ses points, avec les adaptations unilatérales aux extrémités.
- **Valeurs intermédiaires.** Une fonction continue sur un intervalle prend toutes les valeurs comprises entre deux de ses images.
- **Fonction réciproque.** Une fonction continue et strictement monotone sur un intervalle réalise une bijection sur son image ; sa réciproque est continue et de même monotonie.
- **Dichotomie.** La méthode de dichotomie fournit des encadrements successifs d'une solution d'une équation continue.

## Auto-évaluation

- Calculer une limite en utilisant les opérations, les limites usuelles ou un encadrement.
- Étudier la continuité à gauche, à droite ou en un point.
- Construire un prolongement par continuité.
- Déterminer l'image d'un intervalle par une fonction continue et monotone.
- Prouver l'existence ou l'unicité d'une solution.
- Appliquer une dichotomie pour encadrer une racine.
- Manipuler une fonction réciproque, la fonction arctangente et les puissances rationnelles.