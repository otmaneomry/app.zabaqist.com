# Chapitre 3 : Dérivation

## Histoire

Le mathematicien français d'origine italienne
Joseph Lagrange a consacré de nombreux
travaux à l'étude de fonctions. C'est à lui que
l'on doit les termes de dérivée et de primitives
il considérait en effet que la première dérivait
de la seconde considérée elle-même comme
la fonction première, donc la primitive.
Lagrange s'est penché sur presque tous les
domiciles des mathématiques. Citons
de l'enfant ses travaux en mécanique, colesté
et ceux sur les équations différentielles.

Source : https://fr.wikipedia.org

> **Joseph-Louis Lagrange** (1736–1813)

## Objectifs

- Maîtriser les règles de dérivation et calculer la dérivée d’une fonction composée.
- Étudier la dérivabilité, la continuité et les extrema d’une fonction.
- Déterminer et exploiter la dérivée d’une fonction réciproque.
- Utiliser les théorèmes de Rolle et des accroissements finis.
- Étudier les variations, les branches infinies et la convexité d’une courbe.
- Déterminer les primitives usuelles d’une fonction sur un intervalle.

## Plan du chapitre

- Activités préparatoires.
- **Cours** : dérivabilité · compléments de dérivation · accroissements finis · étude des fonctions · primitives.
- **Méthodes** : utilisation de la dérivation · fonctions par morceaux · fonctions irrationnelles · inégalité des accroissements finis.
- **Exercices et problèmes** : applications · perfectionnement · problèmes de synthèse · devoirs.

## Prérequis

- Limites et continuité des fonctions numériques.
- Fonctions trigonométriques et fonction arctangente.
- Fonctions réciproques et théorème de la bijection.
- Suites numériques et raisonnement par récurrence.

## Activités préparatoires

### Rappels
A) Soit $f$ la fonction numérique définie sur $\mathbb{R}$ par :

$$\left\{ \begin{array}{l} f(x) = x^3 - 4x \quad \text{si } x \le 1 \\ f(x) = x^2 - 3x - 1 \quad \text{si } x > 1 \end{array} \right.$$

($\mathcal{C}_f$) désigne sa courbe représentative dans un repère orthonormé.

1.a) Étudier la dérivabilité de la fonction $f$ au point $x_0 = -1$.

b) Déterminer l'équation de la tangente à la courbe ($\mathcal{C}_f$) au point d'abscisse $x_0 = -1$.

2.a) Étudier la dérivabilité à droite et à gauche de la fonction $f$ au point $x_1 = 1$.

b) La fonction $f$ est-elle dérivable en 1 ?

B) Soit $g$ la fonction définie sur $\mathbb{R}$ par : $g(x) = \sqrt{x|x-2|}$

Étudier la dérivabilité de la fonction $g$ en 1 et en 2 puis interpréter les résultats obtenus.

C) Soit $f$ la fonction numérique définie sur $[-3; 3]$ et représentée dans la figure ci-contre :

1.a) Calculer les limites $\lim_{h \to 0} \frac{f(h)-1}{h}$ et $\lim_{x \to 2} \frac{f(x)-f(-2)}{x+2}$.

b) Déterminer le signe de $f(x)$ selon les valeurs de $x$.

2. On pose : $f(x) = 1 + 2x + x\varphi(x)$

Déterminer $\lim_{x \to 0} \varphi(x)$ et déterminer le signe de $\varphi(x)$ sur

$[-3; 3] - \{0\}$ selon les valeurs de $x$.

D) Dans chacun des cas suivants, déterminer le domaine de définition de la fonction $f$ et les intervalles où elle est dérivable puis calculer $f'(x)$ :

$$f(x) = x^2 - 4x^3 + 3x + 2 \quad ; \quad f(x) = 5x^3 - 4x^2 + \frac{3}{x} \quad ; \quad f(x) = \frac{2}{3}(x^2 - 4x + 3)^6$$

$$f(x) = x\sqrt{x^2 + x + 5} \quad ; \quad f(x) = \frac{3x - 7}{x^2 + 2} \quad ; \quad f(x) = \sin(2x) - 5\cos(3x) + 8\tan x$$

E) Sur l'intervalle $I = \left[0; \frac{\pi}{4}\right]$, on considère les fonctions $f, g$ et $h$ définies par :

$$f(x) = \tan x - x \quad ; \quad g(x) = f(x) - \frac{1}{3}x^3 \quad ; \quad h(x) = f(x) - \frac{4}{3}x^3$$

1. Étudier les variations des fonctions $f, g$ et $h$.

2. En déduire que pour tout $x \in I$ : $x + \frac{1}{3}x^3 \le \tan x \le x + \frac{4}{3}x^3$

3. En utilisant ce qui précède, déterminer la valeur de la limite : $\lim_{x \to 0^+} \frac{\tan x - x}{x^2}$

# 3

# ACTIVITES PRÉPARATURES

### DÉRIVABILITÉ ET CONTINUITÉ
1. Soit $f$ une fonction dérivable en 0 telle que $f'(0) = 2$ et $f(0) = \frac{1}{2}$.

a) Montrer qu'il existe une fonction $c$ définie sur un intervalle ouvert $I$ centré en 0 telle que :

$$(\forall h \in I) f(h) = \frac{1}{2} + 2h + h\epsilon(h) \quad \text{et} \quad \lim_{h \to 1} \epsilon(h) = 0$$

b) En déduire que $f$ est continue en 0.

2. Soit $g$ la fonction numérique définie par : $g(x) = |x - 1|$

La fonction $g$ est-elle continue en 1 ? dérivable en 1 ?

3. Soit $h$ la fonction numérique définie par :

$$\begin{cases} h(x) = \frac{1 - \cos x}{x} \text{ si } x \neq 0 \\ h(0) = 0 \end{cases}$$

a) Montrer que $ h $ est continue en 0.
b) Etudier la dérivabilité de la fonction $ h $ en 0.

### DÉRIVABILITÉ ET EXTREMA D'UNE FONCTION NUMÉRIQUE
1. Soit $f$ une fonction dérivable sur un intervalle ouvert $I$ et soit $a$ un élément de $I$.

On suppose que $f$ admet un extremum en $a$.

En utilisant la définition de nombre dérivé de la fonction $f$, montrer que $f'(a) = 0$.

2. Soit $g$ la fonction numérique définie par : $g(x) = (x - a)^2$ où $a$ un réel donné.

Déterminer la fonction $g'$ puis calculer $g'(a)$. La fonction $g$ admet-elle un extremum en $a$ ? Justifier.

3. On considère la fonction $h$ définie sur $\mathbb{R}$ par : $h(x) = |x^2 - x^3|$

a) Etudier la dérivabilité de la fonction $ h $ en 0 et en 1.
b) Etudier les variations de la fonction $ h $ puis déterminer ses extremums.

### DÉRIVÉE DE LA COMPOSÉE DE DEUX FONCTIONS
A) Soit $F$ la fonction numérique définie sur $\mathbb{R}$ par : $F(x) = (x^2 + 1)^k$

1. Calculer $F^{\prime}(x)$ pour tout $x\in \mathbb{R}$
2. Determiner deux fonctions $ f $ et $ g $ telles que $ F = g \circ f $.
3. Comparer $F^{\prime}(x)$ et $g^{\prime}(f(x))\times f^{\prime}(x)$

g) Soit f une fonction définie sur un intervalle I et g une fonction définie sur un intervalle J telles que f(I) ⊂ J, et soit a ∈ I. On suppose que f est dérivable en a et que g est dérivable en b = f(a).

On considère la fonction G définie sur J par : G(x) = { g(x) - g(a) / (x - a) } si x ≠ b
G(b) = g'(b)

1. Montrer que G est continue en a.

2. Soit x un élément de I distinct de a.

a) Montrer que si f(x) ≠ f(a), alors : g(f(x)) - g(f(a)) / (x - a) = G(f(x)) × f(x) - f(a) / (x - a)

b) Montrer que : lim G(f(x)) = g'(f(a)).

c) En déduire que g of est dérivable en a et que : (g of)'(a) = g'(f(a)) × f'(a)

### DÉRIVÉE DE LA FONCTION RÉCIPROQUE
Soit f la fonction numérique définie sur [1; +∞[ par : f(x) = 1/2 x² - x + 5/2

1. Montrer que f réalise une bijection de [1; +∞[ sur [2; +∞[.

2. Soit f⁻¹ la fonction réciproque de f. Déterminer f⁻¹(x) pour tout x ∈ [2; +∞[.

3. Montrer que f⁻¹ est dérivable sur ]2; +∞[ puis déterminer (f⁻¹)'(x) pour tout x ∈ ]2; +∞[.

4. Vérifier que pour tout x ∈ ]2; +∞[ : (f⁻¹)'(x) = 1 / f'(f⁻¹(x))

### THÉORÈME DE ROLLE - THÉORÈME DES ACCROISSEMENTS FINIS
A) On considère la fonction f définie sur l'intervalle [0; 2] par : f(x) = 5 + x√2x - x²

1. Justifier que f est continue sur [0; 2] et dérivable sur ]0; 2[ puis comparer f(0) et f(2).

2. Calculer f'(x) pour tout x ∈ ]0; 2[.

3. Montrer qu'il existe c ∈ ]0; 2[ tel que f'(c) = 0.

B) On considère la fonction g définie sur I = [0; π/2] par : g(x) = √x cos x

1. a) Vérifier que g(0) = g(π/2).

b) Montrer que g est continue sur [0; π/2] et dérivable sur ]0; π/2[.

2. a) Montrer que 0 est le minimum de g sur I.

b) Soit $M$ le maximum de $g$ sur $I$.

Montrer qu'il existe un réel $\alpha \in ]0; \frac{\pi}{2[$ tel que $g(\alpha) = M$ et $g'(\alpha) = 0$

C) Soit $h$ la fonction numérique définie par : $h(x) = \frac{x-1}{2x+1}$.

1. Montrer que $h$ est continue sur $[0; 2]$ et dérivable sur $]0; 2[$.

2. a) Vérifier que $h(0) = h(1)$.

b) Montrer qu'il existe un réel $c \in ]0; 2[$ tel que : $h(2) - h(0) = 2h'(c)$

3. Le plan est rapporté à un repère orthonormé $(O, \vec{i}, \vec{j})$. On considère les points $A(0, f(0))$ et $B(2, f(2))$
a) Déterminer $m$ le coefficient directeur de la droite $(AB)$.
b) Comparer $f'(c)$ et $m$. Quelle conclusion graphique peut-on déduire ?

### BRANCHES INFINIES - CONVEXITÉ
A) Dans chacun des cas suivants, déterminer les branches infinies de la courbe $(\mathcal{C}_f)$ de la fonction $f$ :

$$f(x) = \frac{2x^2+1}{x^2-1} \quad ; \quad f(x) = x + \frac{|x-1|}{x+1} \quad ; \quad f(x) = 3x-2 + \frac{\text{Arctan } x}{x} \quad ; \quad f(x) = \sqrt{\frac{x^2}{x-2}}$$

$$\begin{cases} f(x) = \frac{x^2}{2-x} & \text{si } x \in [0, 1] \\ f(x) = x - \sqrt{x^2-x} & \text{si } x \in ]-\infty, 0[ \cup ]1, +\infty[ \end{cases} \quad ; \quad \begin{cases} f(x) = \frac{\sqrt{x}-4}{\sqrt{x}-2} & \text{si } x > 2 \\ f(x) = \text{Arctan}\left(\frac{1}{\sqrt{2-x}}\right) & \text{si } x < 2 \end{cases}$$

B) Dans chacun des cas suivants, étudier la convexité de la courbe $(\mathcal{C}_f)$ de la fonction $f$ :

$$f(x) = x^4 + x^3 - 18x^2 + 24x \quad ; \quad f(x) = \cos x - \sin x \quad ; \quad f(x) = 2 - |x^4 - 1| \quad ; \quad f(x) = \frac{3x}{\sqrt{2x+1}}$$

$$f(x) = 3x + 5 + \frac{x+1}{x^2+2x+2} \quad ; \quad f(x) = \frac{x^2+2x}{|x|+1} \quad ; \quad f(x) = \sin(2x) + 4\cos x - 7$$

C) On considère la fonction $g$ définie sur $[0; \pi]$ par : $g(x) = x^2 + \cos x$

$(\mathcal{C}_g)$ désigne sa courbe représentative dans un repère orthonormé $(O; \vec{i}, \vec{j})$.

1. Montrer que la fonction $ g $ est convexe.
2. Écrire l'équation de la tangente à la courbe $(\mathcal{C}_g)$ au point d'abscisse $\frac{\pi}{6}$.
3. En déduire que pour tout $ x \in [0, \pi] $: $ x^2 + (1 - \pi)x + \cos x \geq \frac{2\pi - \pi^2}{4} $

## Cours

### 1. Dérivabilité d'une fonction numérique (rappels)
#### 1.1. DÉRIVABILITÉ D'UNE FONCTION EN UN POINT

> **Définition 1.**
Soit $f$ une fonction numérique définie sur un intervalle ouvert $I$ et $x_0$ un élément de $I$.
On dit que $f$ est dérivable en $x_0$ s'il existe un réel $\ell$ tel que : $\lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \ell$
Le nombre $\ell$ est appelé le nombre dérivé de la fonction $f$ en $x_0$. Il est noté $f'(x_0)$.

> **Remarques.**
- On trouve parfois, notamment en physique, la notation $\frac{df}{dx}(x_0)$ pour le nombre dérivé de $f$ en $x_0$.
On trouve également, la notation $\dot{f}(x_0)$, lorsque la variable désigne le temps.
- Un simple changement d'écriture montre, en s'appuyant sur la composition des limites, que $ f $ est dérivable en $ x_0 $ si la fonction $ h \mapsto \frac{f(x_0 + h) - f(x_0)}{h} $ a une limite finie en 0 et alors :

$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$

- La notion de dérivabilité, étant définie à l'aide d'une limite, est une notion locale.

> **Définition 2.**
Soit $f$ une fonction dérivable en $x_0$.
La droite $(T)$ d'équation $y = f'(x_0)(x - x_0) + f(x_0)$ est appelée la tangente à la courbe $\mathcal{C}_f$ de la fonction $f$ au point d'abscisse $x_0$.
La fonction $x \mapsto f'(x_0)(x - x_0) + f(x_0)$ s'appelle l'approximation affine de $f$ au voisinage de $x_0$.
On écrit alors :
$f(x) = f'(x_0)(x - x_0) + f(x_0)$ au voisinage de $x_0$ ou $f(x_0 + h) = hf'(x_0) + f(x_0)$ au voisinage de 0

> **Proposition 1.**
Soit $f$ une fonction numérique définie sur un intervalle ouvert $I$ et $x_0$ un élément de $I$.
La fonction $f$ est dérivable en $x_0$ si, et seulement s'il existe $\ell \in \mathbb{R}$ et une fonction $\varphi : I \to \mathbb{R}$ tels que :
$(\forall x \in I) \ f(x) = f(x_0) + \ell(x - x_0) + (x - x_0)\varphi(x)$ et $\lim_{x \to x_0} \varphi(x) = 0$
Dans ces conditions : $f'(x_0) = \ell$

CONSEILS EN CONJECTE D'ACTIVITE

#### 1.2. DÉRIVABILITÉ À DROITE - DÉRIVABILITÉ À GAUCHE

> **Définition 3.**
- Soit $f$ une fonction définie sur un intervalle du type $[x_0, x_0 + r[$ où $r \in \mathbb{R}^*$.

On dit que $f$ est dérivable à droite de $x_0$ s'il existe un réel $\ell_1$ tel que : $\lim_{x \to x_0^+} \frac{f(x) - f(x_0)}{x - x_0} = \ell_1$

Le nombre $\ell_1$ est appelé le nombre dérivé de la fonction $f$ à droite en $x_0$. Il est noté $f'_d(x_0)$.

- Soit $f$ une fonction définie sur un intervalle du type $]x_0 - r, x_0]$ où $r \in \mathbb{R}^*$.

On dit que $f$ est dérivable à gauche de $x_0$ s'il existe un réel $\ell_2$ tel que : $\lim_{x \to x_0^+} \frac{f(x) - f(x_0)}{x - x_0} = \ell_2$

Le nombre $\ell_2$ est appelé le nombre dérivé de la fonction $f$ à gauche en $x_0$. Il est noté $f'_g(x_0)$.

> **Proposition 2.**
Soit $f$ une fonction numérique définie sur un intervalle ouvert $I$ et $x_0$ un élément de $I$.

La fonction $f$ est dérivable en $x_0$ si, et seulement si, elle est dérivable à droite et à gauche en $x_0$, avec

$$f'_d(x_0) = f'_g(x_0), \text{ et alors : } f'(x_0) = f'_d(x_0) = f'_g(x_0)$$

> **Exemple.**
On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$\begin{cases} f(x) = (x+1)^2 \sin\left(\frac{1}{x+1}\right) \text{ si } x > -1 \\ f(x) = \text{Arctan}\sqrt{-x-1} \text{ si } x \le -1 \end{cases}$$

- Dérivabilité à droite en $x_0 = -1$ :

On a : $\lim_{x \to -1^+} \frac{f(x) - f(-1)}{x+1} = \lim_{x \to -1^+} (x+1) \sin\left(\frac{1}{x+1}\right)$. On sait que pour tout $x \in ]-1, +\infty[$, $\left|\sin\left(\frac{1}{x+1}\right)\right|^2$.

Il s'ensuit donc que $\left|(x+1)\sin\left(\frac{1}{x+1}\right)\right| \le |x+1|$. Comme $\lim_{x \to -1^+} |x+1| = 0$ alors $\lim_{x \to -1^+} (x+1) \sin\left(\frac{1}{x+1}\right) = 0$.

Donc $\lim_{x \to -1^+} \frac{f(x) - f(-1)}{x+1} = 0$. D'où, la fonction $f$ est dérivable à droite en $x_0 = -1$ et $f'_d(-1) = 0$.

On peut interpréter ce résultat graphiquement comme suit :

« La courbe représentative de $f$ admet une demi-tangente horizontale à droite en son point d'abscisme »

- Dérivabilité à gauche en $x_0 = -1$ :

$$\lim_{x \to -1^+} \frac{f(x) - f(-1)}{x+1} = \lim_{x \to -1^+} \frac{\text{Arctan}\sqrt{-x-1}}{\sqrt{-x-1}} = \lim_{x \to -1^+} -\frac{\text{Arctan}\sqrt{-x-1}}{\sqrt{-x-1}} \times \frac{1}{\sqrt{-x-1}} = -\infty$$

$$\text{Car: } \lim_{x \to -1} \frac{\text{Arctan} \sqrt{-x-1}}{\sqrt{-x-1}} = \lim_{x \to 0^+} \frac{\text{Arctan} X}{X} = 1 \text{ et } \lim_{x \to -1} \frac{-1}{\sqrt{-x-1}} = -x.$$

Par conséquent, la fonction $f$ n'est pas dérivable à gauche en $x_0 = -1$.

On peut interpréter ce résultat graphiquement comme suit :

« La courbe représentative de $f$ admet une demi-tangente verticale à gauche en son point d'abscisse $-1$, dirigée vers le haut »

En résumé, la fonction $f$ n'est pas dérivable en $x_0 = -1$.

#### 1.3. DÉRIVABILITÉ D'UNE FONCTION SUR UN INTERVALLE

> **Définition 4.**
Soit $f$ une fonction numérique définie sur un intervalle $I$.

On dit que $f$ est dérivable sur $I$ si elle est dérivable en tout point $x$ de $I$. On note $f'$ la fonction qui à $x \in I$ associe le nombre dérivée de $f$ en $x$. On l'appelle la fonction dérivée de $f$, ou plus simplement la dérivée de $f$. On écrit aussi : $$f' = \frac{df}{dx}$$

TABLEAU DES DÉRIVÉES USUELLES

|  La fonction $f$ | La fonction $f'$ | Domaine de dérivabilité  |
| --- | --- | --- |
|  $x \mapsto a \quad (a \in \mathbb{R})$ | $x \mapsto 0$ | $\mathbb{R}$  |
|  $x \mapsto ax \quad (a \in \mathbb{R}^*)$ | $x \mapsto a$ | $\mathbb{R}$  |
|  $x \mapsto x^n \quad (n \in \mathbb{N}^*)$ | $x \mapsto nx^{n-1}$ | $\mathbb{R}$  |
|  $x \mapsto \frac{1}{x}$ | $x \mapsto -\frac{1}{x^2}$ | $\mathbb{R}^*$  |
|  $x \mapsto \sqrt{x}$ | $x \mapsto \frac{1}{2\sqrt{x}}$ | $\mathbb{R}^*$  |
|  $x \mapsto \sin x$ | $x \mapsto \cos x$ | $\mathbb{R}$  |
|  $x \mapsto \cos x$ | $x \mapsto -\sin x$ | $\mathbb{R}$  |
|  $x \mapsto \tan x$ | $x \mapsto 1 + \tan^2 x = \frac{1}{\cos^2 x}$ | $\frac{\pi}{2} + k\pi \cdot \frac{\pi}{2} + k\pi \quad (k \in \mathbb{Z})$  |
|  $x \mapsto \sin(ax+b) \quad (a, b \in \mathbb{R})$ | $x \mapsto a \cos(ax+b)$ | $\mathbb{R}$  |
|  $x \mapsto \cos(ax+b) \quad (a, b \in \mathbb{R})$ | $x \mapsto -a \sin(ax+b)$ | $\mathbb{R}$  |

# 3

#### 1.4. OPÉRATIONS SUR LES FONCTIONS DÉRIVABLES

> **Proposition 3.**
Soit $f$ et $g$ deux fonctions dérivables sur un intervalle $I$ et $\alpha \in \mathbb{R}$. Alors :

$$(f + g)' = f' + g' \quad ; \quad (\alpha f)' = \alpha f' \quad ; \quad (f \cdot g)' = f' \cdot g + g' \cdot f \quad ; \quad (f'')' = n \cdot f' \cdot f'^2$$

Si la fonction $g$ ne s'annule pas sur $I$ alors : $\left(\frac{1}{g}\right)' = -\frac{g'}{g^2}$ et $\left(\frac{f}{g}\right)' = \frac{f' \cdot g - f \cdot g'}{g^2}$

Enfin, si $f$ est strictement positive sur $I$ alors : $\left(\sqrt{f}\right)' = \frac{f'}{2\sqrt{f}}$

### 2. Compléments sur la dérivation
#### 2.1. DÉRIVABILITÉ ET CONTINUITÉ

> **Proposition 4.**
Soit $f$ une fonction numérique définie sur un intervalle $I$ et $x_0$ un élément de $I$.

Si $f$ est dérivable en $x_0$, alors $f$ est continue en $x_0$.

> **Remarques.**
- Une conséquence immédiate de la proposition 4 est la suivante : toute fonction dérivable sur un intervalle est continue sur cet intervalle.
- La réciproque de la proposition 4 est fausse. Par exemple, la fonction $x \mapsto |x|$ est continue en 0 mais n'est pas dérivable en 0. (Figure ci-contre)

#### 2.2. DÉRIVÉE DE LA FONCTION COMPOSÉE

> **Proposition 5.**
Soit $I$ et $J$ deux intervalles ouverts, et $f : I \to \mathbb{R}$ et $g : J \to \mathbb{R}$ deux fonctions numériques, avec $f(I) \subset J$. Soit $x_0$ un élément de $I$. Si :

- la fonction $ f $ est dérivable en $ x_0 $.
- la fonction $ g $ est dérivable en $ y_0 = f(x_0) $,

alors la fonction $gof$ est dérivable en $x_0$ et de plus :

$$(gof)'(x_0) = g'(f(x_0)) \times f'(x_0)$$

> **Corollaire.**
Si $f$ est dérivable sur un intervalle $I$ et $g$ est dérivable sur un intervalle $J$ tel que $f(I) \subset J$, alors la $gof$ est dérivable sur $I$ et de plus, pour tout $x \in I$: $(gof)'(x) = f'(x) \times g'(f(x))$

> **Exemples.**
1) On considère la fonction $U$ définie sur $\mathbb{R}$ par :

$$U(x) = \cos(\sqrt{x^2 + 5})$$

En posant : $f(x) = \sqrt{x^2 + 5}$ et $g(x) = \cos x$

On aura pour $x \in \mathbb{R}$ :

$$U(x) = gof(x)$$

Puisque $f$ et $g$ sont dérivables sur $\mathbb{R}$ et que

$f(\mathbb{R}) \subset \mathbb{R}$ alors la fonction $U = gof$ est aussi

dérivable sur $\mathbb{R}$ et de plus, pour tout $x \in \mathbb{R}$ :

$$U'(x) = g'(f(x)) \times f'(x) = \frac{x \sin(\sqrt{x^2 + 5})}{\sqrt{x^2 + 5}}$$

> **Applications.**
1. Montrer que la fonction $ f: x \mapsto \sin(x \cos x) $ est dérivable sur $ \mathbb{R} $ puis déterminer sa dérivée.
2. Etudier la dérivabilité de la fonction $ g: x \mapsto \sin \left(x\sqrt{x}\right) + \cos \left(x^3\right) $ puis définir sa fonction dérivée.

#### 2.3. DÉRIVÉE DE LA FONCTION RÉCIPROQUE

> **Proposition 6.**
Soit $f$ une fonction continue et strictement monotone sur un intervalle $I$ de $\mathbb{R}$, et $x_0 \in I$.

Si $f$ est dérivable en $x_0$ avec $f'(x_0) \neq 0$ alors la fonction $f^{-1}$ est dérivable en $y_0 = f(x_0)$ et de plus :

$$(f^{-1})'(y_0) = \frac{1}{f'(x_0)}$$

> **Corollaire.**
Soit $f$ une fonction continue et strictement monotone sur un intervalle $I$ de $\mathbb{R}$.

Si $f$ est dérivable sur $I$ telle que la fonction $f'$ ne s'annule pas sur $I$ alors la fonction $f^{-1}$ est dérivable

sur $J = f(I)$. De plus, on a pour tout $x \in J$: $(f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}$

2) On considère la fonction $V$ définie sur $]l, 2[$ par :

$$V(x) = \tan\left(\frac{\pi}{x}\right)$$

En posant : $f(x) = \frac{\pi}{x}$ et $g(x) = \tan x$

On aura pour $x \in ]l; 2[$ : $V(x) = gof(x)$

$f$ étant dérivable sur $]l; 2[$ et $f(]|l; 2[)$ $\subset$ $]\frac{\pi}{2}; \pi[$.

Donc $g$ est dérivable sur $f(]|l; 2[)$. Par suite, $V$ est dérivable sur $]|l; 2[$ et de plus, pour tout $x \in ]l; 2[$ :

$$V'(x) = g'(f(x)) \times f'(x) = -\frac{\pi}{x^2} \left(1 + \tan^2\left(\frac{\pi}{x}\right)\right)$$

> **Exemples.**
Soit $f$ la fonction numérique définie sur $I = \left[0; \frac{\pi}{2}\right]$ par : $f(x) = x \sin x$
La fonction $f$ est dérivable sur $I$ en tant que produit de deux fonctions dérivables sur $I$. De plus, on a pour $x \in I$, $f'(x) = \sin x + x \cos x$. Puisque $f'(x) > 0$ pour tout $x \in \left[0; \frac{\pi}{2}\right]$, alors $f$ est strictement croissante sur $I$. Par suite, $f$ réalise une bijection de $I$ sur $f(I) = I$.
On a $f\left(\frac{\pi}{6}\right) = \frac{\pi}{12}$ et $f'\left(\frac{\pi}{6}\right) = \frac{6 + \pi\sqrt{3}}{12}$. Or $f'\left(\frac{\pi}{6}\right) \neq 0$ donc la fonction $f^{-1}$ est dérivable en $\frac{\pi}{12}$ et on a:
$$\left(f^{-1}\right)'\left(\frac{\pi}{12}\right) = \frac{1}{f'\left(\frac{\pi}{6}\right)} = \frac{12}{6 + \pi\sqrt{3}}$$

> **Applications.**
1. Soit $f$ la fonction définie sur $\mathbb{R}$ par : $f(x) = \sqrt{x^2 + 1} - x$
Montrer que $f$ est une bijection de $\mathbb{R}$ sur un intervalle $J$ à déterminer puis calculer $\left(f^{-1}\right)'(1)$.

2. Soit $g$ la fonction définie sur $[1; +\infty[$ par : $g(x) = x^3 - 3x - 3$]
a) Montrer que la fonction $g$ admet une fonction réciproque puis déterminer son ensemble de définition
b) Montrer que l'équation $g(x) = 0$ admet une unique solution $\alpha$ dans $[1; +\infty[$.
c) Montrer que $\left(g^{-1}\right)'(0) = \frac{1}{3(\alpha^2 - 1)}$.

#### 2.4. DÉRIVÉE DE LA FONCTION ARCTANGENTE

> **Proposition 7.**
- La fonction Arctan est dérivable sur $\mathbb{R}$ et on a pour tout $x \in \mathbb{R}$ : $\operatorname{Arctan}'(x) = \frac{1}{1 + x^2}$
- Si $u$ est une fonction dérivable sur un intervalle $I$ alors la fonction $x \mapsto \operatorname{Arctan}(u(x))$ est dérivable sur $I$ et sa fonction dérivée est donnée par : $x \mapsto \frac{u'(x)}{1 + u^2(x)}$

> **Preuve.**
On sait que la fonction Arctan est la fonction réciproque de la fonction $f$ définie sur l'intervalle $I = \left[\frac{x}{2}\right]$
par $f(x) = \tan x$. Puisque $f$ est dérivable sur $I$ et sa dérivée $f' : x \mapsto 1 + \tan^2 x$ ne s'annule pas sur $I$, car sa fonction réciproque $f^{-1}$ est dérivable sur $f(I) = \mathbb{R}$. On a pour tout $x \in \mathbb{R}$ :

$$\operatorname{Arctan}'(x) = \left(f^{-1}\right)'(x) = \frac{1}{f'\left(f^{-1}(x)\right)} = \frac{1}{1 + \tan^2(\operatorname{Arctan} x)} = \frac{1}{1 + x^2}$$

Si est une fonction dérivable sur un intervalle I alors la fonction x ↦ Arctan(u(x)) est dérivable sur I en

c'est que composée de deux fonctions dérivables. De plus, pour tout x ∈ I :
$$\left(\operatorname{Arctan}(u(x))\right)' = \operatorname{Arctan}'(u(x)) \times u'(x) = \frac{u'(x)}{1 + u^2(x)}$$

> **Exemple.**
Soit f la fonction définie sur ℝ par : $$f(x) = \operatorname{Arctan}\left(\frac{x}{x^2 + 1}\right)$$
Puisque la fonction u : x ↦ x/(x² + 1) est rationnelle alors elle est dérivable sur ℝ. Il s'ensuit que la fonction f = Arctan u est dérivable sur ℝ et de plus, pour tout x ∈ ℝ :

$$f'(x) = \frac{\left(\frac{x}{x^2 + 1}\right)'}{1 + \left(\frac{x}{x^2 + 1}\right)^2} = \frac{\frac{1 - x^2}{(x^2 + 1)^2}}{1 + \left(\frac{x}{x^2 + 1}\right)^2} = \frac{1 - x^2}{x^4 + 3x^2 + 1}$$

> **Applications.**
1. Calculer les dérivées des fonctions suivantes :

$$u(x) = x \cdot \operatorname{Arctan}(\sqrt{x}) \quad ; \quad v(x) = \sqrt{x^2 + \operatorname{Arctan} x} \quad ; \quad w(x) = \left(\operatorname{Arctan}(\cos x)\right)^2$$

2. Étudier la dérivabilité de la fonction f définie sur [1, +∞[ par : f(x) = Arctan(√x² - 1)]
3. Soit g la fonction définie sur ℝ par : g(x) = Arctan x - Arctan(x + 1) + Arctan(1/(x² + x + 1))

Montrer que pour tout x ∈ ℝ : g'(x) = 0

#### 2.5. DÉRIVÉE DE LA FONCTION RACINE Nème

> **Proposition 8.**
Soit n un entier naturel supérieur ou égal à 2.

• La fonction x ↦ √[x] est dérivable sur ℝ*, et on a pour tout x ∈ ℝ*.

$$\left(\sqrt[n]{x}\right)' = \left(\frac{1}{x^n}\right)' = \frac{1}{n} x^{\frac{1}{n}-1} = \frac{1}{n \cdot \sqrt[n]{x^{n-1}}}$$

• Si u est une fonction dérivable et strictement positive sur un intervalle I de ℝ alors la fonction x ↦ √[u(x)] est dérivable sur I et sa fonction dérivée est donnée par :

$$\left(\sqrt[n]{u(x)}\right)' = \frac{1}{n} u'(x)(u(x))^{\frac{1}{n}-1} = \frac{u'(x)}{n \left(\sqrt[n]{u(x)}\right)^{n-1}}$$

> **Preuve.**
On sait que la fonction $x \mapsto \sqrt[x]{x}$ est la fonction réciproque de la fonction $f$ définie sur $\mathbb{R}^*$ par $f(x) = x^*$. Puisque $f$ est dérivable sur $\mathbb{R}^*$, et sa dérivée $f' : x \mapsto nx^{n-1}$ ne s'annule pas sur $\mathbb{R}^*$, alors sa fonction réciproque $f^{-1}$ est dérivable sur $f(\mathbb{R}^*) = \mathbb{R}^*$. On a pour tout $x \in \mathbb{R}^*$ :

$$\left(\sqrt[x]{x}\right)' = \left(f^{-1}\right)'(x) = \frac{1}{f'\left(f^{-1}(x)\right)} = \frac{1}{n\left(\sqrt[x]{x}\right)^{n-1}}$$

Si $u$ est une fonction dérivable et strictement positive sur un intervalle $I$ de $\mathbb{R}$ alors la fonction $x \mapsto \sqrt[u]{u(x)}$ est dérivable sur $I$ en tant que composée de deux fonctions dérivables. De plus, pour tout $x \in I$ :

$$\left(\sqrt[u(x)]\right)' = f'(u(x)) \times u'(x) = \frac{1}{n}(u(x))^{\frac{1}{n}-1} u'(x) = \frac{u'(x)}{n\left(\sqrt[u]{u(x)}\right)^{n-1}}$$

> **Exemples.**
1) La fonction $ x \mapsto \sqrt{x} $ est dérivable sur $ \mathbb{R}^* $, et on a pour tout $ x \in \mathbb{R}^* $: $ \left(\sqrt{x}\right)' = \frac{1}{3} x^{-\frac{2}{3}} = \frac{1}{3\sqrt{x^2}} $.
2) On considere la fonction $ f $ définie par: $ f(x) = \sqrt[3]{8x - 5} $

La fonction $u : x \mapsto 8x - 5$ est dérivable et strictement positive sur l'intervalle $\left]\frac{5}{8}; +\infty\right[$. Par conséquent

La fonction $f$ est dérivable sur $\left]\frac{5}{8}; +\infty\right[$ et on a pour tout $x \in \left]\frac{5}{8}; +\infty\right[$ :

$$f'(x) = \frac{1}{3}u'(x)(u(x))^{\frac{1}{3}-1} = \frac{8}{3}(8x - 5)^{-\frac{2}{3}} = \frac{8}{3\sqrt[3]{(8x - 5)^2}}$$

> **Applications.**
Calculer la dérivée de chacune des fonctions suivantes :

$$f(x) = \sqrt[3]{3 + \cos^2 x} \quad ; \quad g(x) = x\sqrt[3]{x^2 - x} \quad ; \quad h(x) = \sin\left(\sqrt[3]{x^2 + x + 1}\right) \quad ; \quad k(x) = \sqrt[3]{(x^3 - 1)^2}$$

> **Proposition 9.**
Soit $r$ un nombre rationnel non nul.

La fonction $x\mapsto x^{\prime}$ est derivable sur $\mathbb{R}^*$ et sa derivee est la fonction $x\mapsto r\cdot x^{r - 1}$
- Si u est une fonction dérivable et strictement positive sur un intervalle I de R alors la fonction $ x \mapsto (u(x))^{\prime} $ est dérivable sur I et sa fonction dérivée est donnée par:

$$\left(\left(u(x)\right)'\right)' = r\cdot u'(x)\cdot\left(u(x)\right)'^{-1}$$

> **Exemple.**
On considère la fonction $f$ définie sur $\mathbb{R}$ par : $f(x) = (x^2 - x + 5)^{\frac{7}{8}}$
La fonction $x \mapsto x^2 - x + 5$ est dérivable et strictement positive sur $\mathbb{R}$. Donc la fonction $f$ est dérivable sur $\mathbb{R}$ et on a pour tout $x \in \mathbb{R}$ :
$$f'(x) = \left( (x^2 - x + 5)^{\frac{7}{8}} \right)^x = -\frac{7}{8}(2x - 1)(x^2 - x + 5)^{\frac{7}{8} - 1} = \frac{-7(2x - 1)}{8 \sqrt{(x^2 - x + 5)^{15}}}$$

> **Applications.**
Pour chacune des fonctions suivantes, déterminer les intervalles où elles sont dérivables puis donner les fonctions dérivées :
$$f(x) = (3 - \cos 2x)^{\frac{4}{3}}$$ ; $$g(x) = (\sqrt{x} + \sqrt[3]{x})^{-\frac{1}{3}}$$ ; $$h(x) = (\operatorname{Arc} \tan(x^2 + 1))^{\frac{5}{8}}$$

### 3. Théorèmes de Rolle et des accroissements finis
#### 3.1. Théorème de Rolle
> **THÉORÈME 1.**
Soit $a$ et $b$ deux réels, avec $a < b$, et $f : [a, b] \to \mathbb{R}$ une fonction continue sur $[a, b]$, dérivable sur $[a, b]$, telle que $f(a) = f(b)$.
Alors il existe au moins un réel $c \in ]a, b[$ tel que $f'(c) = 0$.

> **Preuve.**
Puisque $f$ est continue sur le segment $[a, b]$, elle admet un maximum et un minimum sur $[a, b]$.

- S'ils sont tous les deux en $a$ ou $b$, la fonction $f$ est constante et donc dans ce cas $f' = 0$.
- Sinon, soit le maximum $M$, soit le minimum $m$ est atteint dans $]a, b[$. Il existe donc un réel $c \in ]a, b[$ tel que $f(c) = m$ ou $f(c) = M$. Puisque $f$ est dérivable et présente un extremum en $c$ alors $f'(c) = 0$.

> **Interprétation géométrique.**
Considérerons le graphe d'une fonction numérique continue sur un segment $[a, b]$, dérivable sur $]a, b[$.
Si le graphe comporte deux points distincts de même ordonnée, alors il existe au moins une tangente au graphe qui soit parallèle à l'axe des abscisses.
Bien noter que le théorème de Rolle fournit l'existence d'un réel $c$ tel que $f'(c) = 0$, mais ne garantit pas l'unicité.

# 3

> **Interprétation cinématique.**
Considérons un marcheur qui se promène le long d'une route rectiligne et qui revient à son point de départ. En supposant que la position du marcheur soit une fonction dérivable du temps, hypothèse physiquement raisonnable, le théorème de Rolle affirme qu'il existe au moins un moment où la vitesse instantanée du marcheur est nulle.

> **Exemple.**
Soit $f$ la fonction numérique définie par $f(x) = \sin(2x)$. Il est clair que $f$ est continue sur $\left[0; \frac{\pi}{2}\right]$, dérivée sur $\left]0; \frac{\pi}{2}\right[$ et telle que $f(0) = f\left(\frac{\pi}{2}\right) = 0$. D'après le théorème de Rolle, il existe au moins un réel $c \in ]0; \frac{\pi}{2}[$ tel que $f'(c) = 0$, c'est-à-dire que $2 \cos(2c) = 0$. (Pour cet exemple, on peut prendre $c = \frac{\pi}{4}$)

> **Applications.**
1. Vérifier que les conditions du théorème de Rolle sont vérifiées pour la fonction $f$ sur l'intervalle $I$:

a) $f(x) = x^2 - 3x + 2$ et $I = [1; 2]$ ; b) $f(x) = \sqrt[3]{x^2 - 5x + 6}$ et $I = [2; 3]$

2. Soit $g$ une fonction continue sur un segment $[a, b]$ et dérivable sur $]a, b[$. On suppose qu'il existe un élément $x_0 \in ]a, b[$ tel que $g(b) = \frac{g(a) + g(x_0)}{2}$. Montrer qu'il existe un réel $c \in ]a, b[$ tel que $g'(c) = 0$

3. Soit $P$ une fonction polynomiale admettant trois racines réelles distinctes.
Montrer que la fonction polynomiale $P'$ admet au moins deux racines réelles distinctes.

#### 3.2. THÉORÈME DES ACCROISSEMENTS FINIS

> **THÉORÈME 2.**
Soit $a$ et $b$ deux réels, avec $a < b$, et $f : [a, b] \to \mathbb{R}$ une fonction continue sur $[a, b]$, dérivable sur $]a, b[$. Il existe alors au moins un réel $c \in ]a, b[$ tel que : $f(b) - f(a) = (b - a)f'(c)$.

> **Preuve.**
Soit $f$ une fonction continue sur le segment $[a, b]$ et dérivable sur $]a, b[$. On considère la fonction $g$

sur $[a, b]$ par : $g(x) = f(x) - f(a) - \frac{f(b) - f(a)}{b - a}(x - a)$

La fonction $g$ est continue sur $[a, b]$ et dérivable sur $]a, b[$ en tant que somme de deux fonctions continue sur $[a, b]$ et dérivables sur $]a, b[$. On a $g(a) = g(b) = 0$ et, pour tout $x \in ]a, b[$, on a par ailleurs :

$$g'(x) = f'(x) - \frac{f(b) - f(a)}{b - a}$$

d'après le théorème de Rolle, il existe au moins un réel $c \in ]a, b[$ tel que $g'(c) = 0$, ce qui entraîne que

$f'(c) = \frac{f(b) - f(a)}{b - a}$. D'où le résultat.

Interprétation géométrique
Le théorème des accroissements finis signifie que
si $f$ est une fonction continue sur le segment $[a, b]$,
dérivable sur $]a, b[$, alors il existe (au moins) une
tangente à son graphe qui soit parallèle à la corde
$(AB)$, où $A(a, f(a))$ et $B(b, f(b))$.

Interprétation cinématique
Considérerons une randonneuse qui marche cinq kilomètres en une heure le long d'un sentier rectiligne.
En supposant que sa position soit une fonction dérivable du temps, il existe un moment où la vitesse ins-
tantanée est de $5 \text{ km/h}$.

> **Exemple.**
On considère la fonction numérique $f$ définie par : $f(x) = x^3 - 3x + 12$

La fonction $f$ est continue sur $[1; 2]$ et dérivable sur $]1; 2[$. D'après le théorème des accroissements finis, il
existe au moins un réel $c \in ]1, 2[$ tel que $f(2) - f(1) = (2 - 1)f'(c)$, c'est-à-dire $f'(c) = 4$.

Pour la vérification : $f'(c) = 4 \Leftrightarrow 3c^2 - 3 = 4 \Leftrightarrow c^2 = \frac{7}{3} \Leftrightarrow c = \sqrt{\frac{7}{3}}$ (on a bien $\sqrt{\frac{7}{3}} \in ]1; 2[$).

> **Applications.**
1. Vérifier que les conditions du théorème des accroissements finis sont vérifiées pour la fonction $f$ sur
l'intervalle $I$ :

a) $f(x) = 2\sqrt{x} + \sin x$ et $I = [0; \pi]$ ; b) $\begin{cases} f(x) = (1 - \sqrt{2} \cos x)^2 \text{ si } 0 \le x \le \frac{\pi}{4} \\ f(x) = (\sqrt{2} \sin x - 1)^2 \text{ si } \frac{\pi}{4} < x \le \frac{\pi}{3} \end{cases}$ et $I = [0; \frac{\pi}{3}]$

2. Montrer que : $\frac{1}{26} < \text{Arctan } 5 - \text{Arctan } 4 < \frac{1}{17}$

3. On considère la fonction $g$ définie sur $\mathbb{R}$ par : $g(x) = x - \cos x$

a) Établir que l'équation $g(x) = 0$ admet une unique solution $\alpha$ dans l'intervalle $\left]\frac{\pi}{6}; \frac{\pi}{4}\right[$.

b) Montrer qu'il existe un réel $c \in ]\alpha; \frac{\pi}{2}[$ tel que : $f\left(\frac{\pi}{4}\right) = \left(\frac{\pi}{4} - \alpha\right)f'(c)$

#### 3.3. INÉGALITÉ DES ACCROISSEMENTS FINIS

> **THÉORÈME 3.**
Soit $a$ et $b$ deux réels, avec $a < b$, et $f : [a, b] \to \mathbb{R}$ une fonction continue sur $[a, b]$, dérivable sur $]a, b[$. On suppose qu'il existe deux réels $m$ et $M$ tels que pour tout $x \in ]a, b[ : m \le f'(x) \le M$

Alors :

$$m(b - a) \le f(b) - f(a) \le M(b - a)$$

> **Preuve.**
Soit $f$ une fonction continue sur le segment $[a, b]$ et dérivable sur $]a, b[$. D'après le théorème des accroissements finis, il existe au moins un réel $c \in ]a, b[$ tel que : $$\frac{f(b) - f(a)}{b - a} = f'(c)$$

Comme $m \le f'(c) \le M$ alors $m \le \frac{f(b) - f(a)}{b - a} \le M$ et par suite : $m(b - a) \le f(b) - f(a) \le M(b - a)$

> **Corollaire.**
Soit $a$ et $b$ deux réels, avec $a < b$, et $f : [a, b] \to \mathbb{R}$ une fonction continue sur $[a, b]$, dérivable sur $]a, b[$. On suppose qu'il existe $k \in \mathbb{R}^+$ tel que pour tout $x \in ]a, b[ : |f'(x)| \le k$

Alors pour tout $(x, y) \in [a, b]^2$ :

$$|f(x) - f(y)| \le k|x - y|$$

> **Exemples.**
1) Soit $f$ la fonction numérique définie sur $\mathbb{R}$ par : $f(x) = \sin x$

La fonction $f$ est dérivable sur $\mathbb{R}$ et on a pour tout $x \in \mathbb{R}$, $f(x) = \cos x$. D'où : $\forall x \in \mathbb{R}, |f'(x)| \le 1$

D'après le corollaire 3, on a pour tout $(a, b) \in \mathbb{R}^2$ : $|\sin b - \sin a| \le |b - a|$

En particulier, pour tout $x \in \mathbb{R}$ : $|\sin x| \le |x|$ (Ici on a pris $b = x$ et $a = 0$)

2) Soit $g$ la fonction numérique définie sur $\mathbb{R}$ par : $g(x) = \text{Arc tan } x$

Soit $a$ et $b$ deux réels positifs tels que $a < b$. La fonction $g$ étant continue sur $[a, b]$, dérivable sur $]a, b[$.

De plus, on a pour tout $x \in ]a, b[$, $g'(x) = \frac{1}{1 + x^2}$. Comme $x \in ]a, b[$ alors $\frac{1}{1 + b^2} \le g'(x) \le \frac{1}{1 + a^2}$.

Il résulte de l'inégalité des accroissements finis que : $$\frac{b - a}{1 + b^2} \le g(b) - g(a) \le \frac{b - a}{1 + a^2}$$

Par suite, pour tout $(a, b) \in (\mathbb{R}^+)^2$ tel que $a < b$ :

> **Applications.**
1. Montrer que pour tous a et b de l'intervalle $$\left[\frac{\pi}{4}; \frac{\pi}{3}\right] : |\tan a - \tan b| \leq 4|a - b|$$
2. On considère la fonction f définie sur $$\mathbb{R}$$ par : $$f(x) = x \sin x$$
Montrer que pour tous x et y de l'intervalle $$[-4; 4] : |f(x) - f(y)| \leq 5|x - y|$$

### 4. Étude des fonctions numériques (rappels)
#### 4.1. Monotonie d'une fonction numérique
> **Proposition 10.**
Soit f une fonction dérivable sur un intervalle I de $$\mathbb{R}$$.

- La fonction f est constante sur I si, et seulement, si: $$(\forall x \in I)$$, $$f'(x) = 0$$
- La fonction f est croissante sur I si, et seulement, si : $$(\forall x \in I)$$, $$f'(x) \geq 0$$
- La fonction f est décroissante sur I si, et seulement, si : $$(\forall x \in I)$$, $$f'(x) \leq 0$$

> **Remarques.**
- Les résultats de la proposition 10 ne sont valables que sur un intervalle.
- Si f'est positive sur I et ne s'y annule qu'en un nombre fini de points, alors la fonction f est strictement croissante sur I.
- Si f'est négative sur I et ne s'y annule qu'en un nombre fini de points, alors la fonction f est strictement décroissante sur I.

> **Exemple.**
Montrons que pour tout $$x \in \mathbb{R}^*$$ : $$\operatorname{Arc} \tan x + \operatorname{Arc} \tan \frac{1}{x} = \frac{\pi}{2}$$
On considère la fonction f définie sur $$\mathbb{R}^*$$ par : $$f(x) = \operatorname{Arc} \tan x + \operatorname{Arc} \tan \frac{1}{x}$$
La fonction f est dérivable sur $$\mathbb{R}^*$$ en tant que somme de deux fonctions dérivables sur $$\mathbb{R}^*$$ et on a pour

$$\text{tout } x \in \mathbb{R}^* : \quad f'(x) = \left(\operatorname{Arc} \tan x + \operatorname{Arc} \tan \frac{1}{x}\right)^* = \frac{1}{1+x^2} + \frac{\frac{1}{x^2}}{1+\frac{1}{x^2}} = \frac{1}{1+x^2} - \frac{1}{1+x^2} = 0$$

Donc f est constante sur $\mathbb{R}^*$ . Comme $f(1) = \operatorname {Arc}\tan 1 + \operatorname {Arc}\tan 1 = \frac{\pi}{4} +\frac{\pi}{4} = \frac{\pi}{2}$ alors pour tout $x\in \mathbb{R}^*$ ..
\[
\begin{array}{l} f (x) = f (1) = \frac {\pi}{2}. \text {Ainsi, pour tout} x \in \mathbb {R} _ {+} ^ {*}: \quad \operatorname {A r c} \tan x + \operatorname {A r c} \tan \frac {1}{x} = \frac {\pi}{2} \end{array}
\]

#### 4.2. AXE DE SYMÉTRIE - CENTRE DE SYMÉTRIE

> **Proposition 11.**
Soit $f$ une fonction numérique et $\mathcal{C}_f$ sa courbe représentative dans un repère orthogonal.

Pour que la droite $\Delta$ d'équation $x = a$ soit un axe de symétrie de la courbe $\mathcal{C}_f$, il faut et il suffit que pour tout $x \in D_f : (2a - x) \in D_f$ et $f(2a - x) = f(x)$

> **Exemple.**
On considère la fonction $f$ définie par : $f(x) = \sqrt{x^2 + 6x + 5}$

$\mathcal{C}_f$ désigne sa courbe représentative dans un repère orthogonal. Montrons que la droite $\Delta$ d'équation $x = -3$ est un axe de symétrie de la courbe $\mathcal{C}_f$ :

Le domaine de définition de $f$ est $D_f = ]-\infty, -5] \cup [-1; +\infty[$. On a d'une part :

$$x \in D_f \Leftrightarrow (x \le -5 \text{ ou } x \ge -1) \Leftrightarrow (-6 - x \ge -1 \text{ ou } -6 - x \le -5) \Leftrightarrow (-6 - x) \in D_f$$

D'autre part, pour tout $x \in D_f$ :

$$f(-6 - x) = \sqrt{(-6 - x)^2 + 6(-6 - x) + 5} = \sqrt{x^2 + 12x + 36 - 36 - 6x + 5} = \sqrt{x^2 + 6x + 5} = f(x)$$

Par suite, la droite $\Delta$ d'équation $x = -3$ est un axe de symétrie de la courbe $\mathcal{C}_f$.

> **Proposition 12.**
Soit $f$ une fonction numérique et $\mathcal{C}_f$ sa courbe représentative dans un repère donné.

Pour que le point $\Omega(a, b)$ soit un centre de symétrie de la courbe $\mathcal{C}_f$, il faut et il suffit que

pour tout $x \in D_f : (2a - x) \in D_f$ et $f(2a - x) + f(x) = 2b$

> **Exemple.**
On considère la fonction $f$ définie par : $f(x) = \frac{\cos x}{2 - \sin x}$

Montrons que $\Omega\left(\frac{\pi}{2}, 0\right)$ est un point de symétrie de la courbe $\mathcal{C}_f$ :

Le domaine de définition de $f$ est $D_f = \mathbb{R}$. Donc, pour tout $x \in D_f$, $(\pi - x) \in D_f$.

On a maintenant pour tout $x \in D_f$ :

$$f(\pi - x) + f(x) = \frac{\cos(\pi - x)}{2 - \sin(\pi - x)} + \frac{\cos x}{2 - \sin x} = -\frac{\cos x}{2 - \sin x} + \frac{\cos x}{2 - \sin x} = 0$$

Par conséquent, le point $\Omega\left(\frac{\pi}{2}, 0\right)$ est un centre de symétrie de la courbe $\mathcal{C}_f$.

CONFIDENTIALES D'INNOVATION

> **Remarques.**
- Si $f$ est une fonction paire alors sa courbe $\mathcal{C}_f$ admet l'axe des ordonnées comme axe de symétrie.
- Si $f$ est une fonction impaire alors $\mathcal{C}_f$ admet l'origine du repère comme centre de symétrie.
- Si la courbe $\mathcal{C}_f$ de la fonction $f$ admet la droite d'équation $x = a$ comme axe de symétrie ou admet le point de coordonnées $(a, b)$ comme centre de symétrie alors on peut restreindre l'étude de la fonction $f$ sur l'ensemble $D_{fimode} = D_f \cap [a, +\infty[$.

#### 4.3. LES FONCTIONS PÉRIODIQUES
> **Définition 5.**
Soit $f$ une fonction numérique de domaine de définition $D_f$.

On dit que $f$ est périodique s'il existe un réel non nul $T$ tel que pour tout $x \in D_f$ :

$$(x + T) \in D_f \quad \text{et} \quad (x - T) \in D_f \quad \text{et} \quad f(x + T) = f(x)$$

Le nombre réel $T$ est appelé alors une période de $f$. La plus petite période strictement positive de

la fonction $f$ est appelée la période de la fonction $f$.

> **Exemples.**
1) Si $\omega_0$ est un réel strictement positif alors les fonctions $t \mapsto \sin(\omega_0 t + \varphi)$ et $t \mapsto \cos(\omega_0 t + \varphi)$ sont périodiques de période $T = \frac{2\pi}{\omega_0}$.
2) Si $a$ est un réel non nul alors la fonction $x \mapsto \tan(ax + b)$ est périodique de période $T = \frac{\pi}{a}$.
3) La fonction $x \mapsto x - E(x)$ est périodique de période $T = 1$.

> **Proposition 13.**
Soit $f$ une fonction périodique de période $T$ et $\mathcal{C}_f$ sa courbe représentative dans un repère $(O, \vec{i}, \vec{j})$.

- Pour tout $n \in \mathbb{Z}$, le nombre $nT$ est aussi une période de la fonction $f$.
- La courbe de $\mathcal{C}_f$ est invariante par toute translation de vecteur $nT.\vec{i}$ avec $n \in \mathbb{Z}$.
- Si $x_0 \in \mathbb{R}$ est un réel donné, la courbe représentative $\mathcal{C}_f$ est la réunion des images de l'ensemble $\{M(x, f(x)) / x \in D_f \cap [x_0, x_0 + T[\}$ par toutes les translations de vecteur $nT.\vec{i}$ avec $n \in \mathbb{Z}$.
Ainsi, pour étudier une fonction périodique de période $T$, il suffit de l'étudier sur un intervalle de $\mathbb{R}$ de longueur $T$. (Très souvent, on choisit un des deux intervalles $[0, T[$ ou $\left[-\frac{T}{2}, \frac{T}{2}\right]$.

#### 4.4. ÉTUDE DE LA CONCAVITÉ D'UNE COURBE

> **Définition 6.**
Soit $f$ une fonction dérivable sur un intervalle $I$ et $\mathcal{C}_f$ sa courbe représentative dans un repère.

- On dit que la courbe $\mathcal{C}_f$ est convexe si elle est entierement située au-dessus de chacune de ses tangentes, et on dit qu'elle est concave si elle est entierement située en dessous de chacune de ses tangentes.
- On dit que le point $ M_0(x_0, f(x_0)) $ est un point d'inflexion de la courbe $ \mathcal{C}_f $ si, en $ M_0 $, la courbe traverse sa tangente.

> **Exemple.**
On considère la figure ci-contre qui présente le graphe d'une fonction $f$ sur $\mathbb{R}$.

La courbe $\mathcal{C}_f$ est convexe sur $[3; +\infty[$ et concave sur $]-\infty; 3]$.

Le point $M_0(3, 2)$ est un point d'inflexion de la courbe $\mathcal{C}_f$.

La tangente $T$ traverse la courbe $\mathcal{C}_f$ en $M_0(3, 2)$.

> **Proposition 14.**
Soit $f$ une fonction deux fois dérivable sur un intervalle $I$.

- Pour que la courbe $\mathcal{C}_f$ de $f$ soit convexe sur $I$, il faut et il suffit que: $(\forall x \in I)$, $f^*(x) \geq 0$
- Pour que la courbe $\mathcal{C}_f$ de $f$ soit concave sur $I$, il faut et il suffit que: $(\forall x \in I)$, $f^*(x) \leq 0$
- Pour que le point $ M_0(x_0, f(x_0)) $ soit un point d'inflexion de la courbe $ \mathcal{C}_f $, il faut et il suffit que la dérivée seconde $ f^* $ s'annule en $ x_0 $ et change de signe de part et d'autre de $ x_0 $.

> **Applications.**
Pour chacun des cas suivants, étudier la concavité de la courbe $\mathcal{C}_f$ et déterminer ses points d'inflexion (sous réserve d'existence) :

$$f(x) = \frac{x}{x^2 + 1} \quad ; \quad f(x) = 3x - \text{Arc tan } x \quad ; \quad f(x) = \frac{\sin^2 x}{\cos 2x} \quad ; \quad f(x) = (x-1)^{\frac{1}{2}x-1}$$

#### 4.5. ÉTUDE DES BRANCHES INFINIES (RAPPEL)

### 5. Les fonctions primitives
#### 5.1. PRIMITIVE D'UNE FONCTION SUR UN INTERVALLE

> **Exemple.**
On considère les fonctions f et F définies sur l'intervalle I = ]0; +∞[ par :

$$f(x) = \frac{1}{\sqrt{x}} - \frac{1}{x^2} + \frac{1}{x^2 + 1} \quad \text{et} \quad F(x) = 2\sqrt{x} + \frac{1}{x} + \operatorname{Arc} \tan x$$

La fonction $F$ est une primitive de la fonction $f$ sur $I$ car $F$ est dérivable sur $I$ et pour tout $x \in I$ :

$$F'(x) = \left( 2\sqrt{x} + \frac{1}{x} + \operatorname{Arc} \tan x \right)' = \frac{1}{\sqrt{x}} - \frac{1}{x^2} + \frac{1}{1 + x^2} = f(x)$$

> **Proposition 15.**
Toute fonction continue sur un intervalle $I$ admet une primitive définie sur cet intervalle.

#### 5.2. PRIMITIVES D'UNE FONCTION CONTINUE

> **Proposition 16.**
Soit $f$ une fonction continue sur un intervalle $I$ de $\mathbb{R}$.

- Si $ F $ est une primitive de la fonction $ f $ sur $ I $ alors les primitives de $ f $ sur $ I $ sont les fonctions $ x \mapsto F(x) + c $ ou $ c $ est une constante réelle.
Pour tout $x_0 \in I$ et $y_0 \in \mathbb{R}$, il existe une unique primitive $G$ de $f$ sur $I$ vérifier: $G(x_0) = y_0$

> **Exemple.**
On considère la fonction $f$ définie sur l'intervalle $I = ]0, +\infty[$ par : $f(x) = \frac{1}{\sqrt{x}} - \frac{1}{x^2} + \frac{1}{x^2 + 1}$

On a déjà vu que la fonction $F$ définie sur $I$ par : $F(x) = 2\sqrt{x} + \frac{1}{x} + \operatorname{Arc} \tan x$ est une primitive de $f$ sur $I$.

Donc les primitives de la fonction $f$ sur l'intervalle $I$ sont les fonctions $x \mapsto 2\sqrt{x} + \frac{1}{x} + \operatorname{Arc} \tan x + c$ où $c$ est une constante réelle.

Soit $G$ la primitive de la fonction $f$ sur $I$ qui s'annule en 1. On a donc $G(x) = 2\sqrt{x} + \frac{1}{x} + \operatorname{Arc} \tan x + c$ avec $G(1) = 0$.

On a alors : $G(1) = 0 \Leftrightarrow 2\sqrt{1} + \frac{1}{1} + \operatorname{Arc} \tan 1 + c = 0 \Leftrightarrow 3 + \frac{\pi}{4} + c = 0 \Leftrightarrow c = -3 - \frac{\pi}{4}$

Ainsi : $(\forall x \in ]0; +\infty[)$ $G(x) = 2\sqrt{x} + \frac{1}{x} + \operatorname{Arc} \tan x - 3 - \frac{\pi}{4}$

#### 5.3. OPÉRATIONS SUR LES PRIMITIVES

> **Proposition 17.**
Si $F$ et $G$ sont respectivement des primitives des fonctions $f$ et $g$ sur un intervalle $I$ alors :

- $ F + G $ est une primitive de la fonction $ f + g $ sur $ I $.
Pour tout $(\alpha ,\beta)\in \mathbb{R}^2$ $\alpha F + \beta G$ est une primitive de $\alpha f + \beta g$ sur $I$

#### Tableau des primitives usuelles
|  La fonction f | Les primitives F de f | L'intervalle I  |
| --- | --- | --- |
|  0 | c (c ∈ ℝ) | ℝ  |
|  x ↦ a (a ∈ ℝ*) | x ↦ ax + c | ℝ  |
|  x ↦ xⁿ (n ∈ ℕ*) | x ↦ (xⁿ⁺¹/(n+1)) + c | ℝ  |
|  x ↦ 1/xⁿ (n ∈ ℕ* - {1}) | x ↦ 1/(1-n)xⁿ⁺¹ + c | ℝ* ou ℝ*  |
|  x ↦ x* (r ∈ ℚ* - {1}) | x ↦ (xʳ⁺¹/(r+1)) + c | ℝ*  |
|  x ↦ cos x | x ↦ sin x + c | ℝ  |
|  x ↦ sin x | x ↦ -cos x + c | ℝ  |
|  x ↦ 1 + tan² x = 1/cos² x | x ↦ tan x + c | ⌈ - π/2 + kπ; π/2 + kπ⌉ (k ∈ ℤ)  |
|  x ↦ sin(ax + b) (a ∈ ℝ*) | x ↦ -1/a cos(ax + b) + c | ℝ  |
|  x ↦ cos(ax + b) (a ∈ ℝ*) | x ↦ 1/a sin(ax + b) + c | ℝ  |
|  x ↦ 1/(1+x²) | x ↦ Arc tan x + c | ℝ  |
|  u'v + uv' | uv + c | Intervalle où u et v sont dérivables  |
|  -u'/u² | 1/u + c | Intervalle où u est dérivable et ne s'annule pas  |
|  u'u' (r ∈ ℚ* - {1}) | (uʳ⁺¹/(r+1)) + c | Intervalle où u est dérivable et u' est définie  |
|  u'/1+u² | Arc tan u + c | Intervalle où u est dérivable  |
|  (u'v - uv')/v² | (u/v) + c | Intervalle où u et v sont dérivables et v ne s'annule pas  |

## Méthodes

### A. Utilisation de la dérivation
1) Montrer que pour tout $ x \in \mathbb{R} $: $ \frac{1}{2} \operatorname{Arc} \tan x + \operatorname{Arc} \tan \left( \sqrt{1 + x^2} - x \right) = \frac{\pi}{4} $.
2) Montrer que pour tout $x\in [0, + \infty ]$ .. $(1 + x)\operatorname {Arc}\tan \sqrt{x} -\sqrt{x}\geq 0$
3) Montrer que pour tout $t \in \mathbb{R}^+$: $0 \leq t - \operatorname{Arc} \tan t \leq \frac{1}{3} t^3$ puis calculer $\lim_{x \to +\infty} x\left(1 - x \operatorname{Arc} \tan \frac{1}{x}\right)$.

> **Solution.**
1) Soit $f$ la fonction définie sur $\mathbb{R}$ par : $f(x) = \frac{1}{2} \operatorname{Arc} \tan x + \operatorname{Arc} \tan \left( \sqrt{1 + x^2} - x \right)$

On va montrer que la fonction $f$ est constante sur $\mathbb{R}$ et que sa valeur est $\frac{\pi}{4}$.

Les fonctions $u : x \mapsto \sqrt{1 + x^2} - x$ et Arc tan sont dérivables sur $\mathbb{R}$, donc il en est de même pour la fonction $f$ et on a pour tout $x \in \mathbb{R}$ :

$$f'(x) = \frac{1}{2} \cdot \frac{1}{1 + x^2} + \frac{\frac{x}{\sqrt{1 + x^2}} - 1}{1 + (\sqrt{1 + x^2} - x)^2} = \frac{1}{2(1 + x^2)} - \frac{x - \sqrt{x^2 + 1}}{\sqrt{1 + x^2} (2 + 2x^2 - 2x\sqrt{1 + x^2})}$$

Il en résulte donc que : $f'(x) = \frac{1}{2(1 + x^2)} - \frac{1}{2(1 + x^2)} = 0$, d'où : $(\exists c \in \mathbb{R}) ; (\forall x \in \mathbb{R}) f(x) = c$

Pour $x = 0$ on trouve $f(0) = c = \frac{\pi}{4}$. Par suite : $(\forall x \in \mathbb{R}) f(x) = \frac{\pi}{4}$

2) On pose pour tout $x \in \mathbb{R}^+$ : $g(x) = (1 + x) \operatorname{Arc} \tan \sqrt{x} - \sqrt{x}$

Les fonctions $u : x \mapsto \sqrt{x}$, $v : x \mapsto 1 + x$ et Arc tan sont dérivables sur $\mathbb{R}^+$, donc $g = v \times \operatorname{Arc} \tan \omega - 1$ est dérivables sur $\mathbb{R}^+$, et on a pour tout $x \in \mathbb{R}^+$ :

$$g'(x) = \operatorname{Arc} \tan \sqrt{x} + (1 + x) \frac{1}{2\sqrt{x} \cdot (x + 1)} - \frac{1}{2\sqrt{x}} = \operatorname{Arc} \tan (\sqrt{x})$$

Comme $x > 0$ alors $\operatorname{Arc} \tan (\sqrt{x}) > 0$ et donc $g'(x) > 0$. Ainsi, $g$ est strictement croissante sur $\mathbb{R}^+$.

Puisque $x \geq 0$ alors $g(x) \geq g(0)$ et donc : $(\forall x \in \mathbb{R}^+)$ $g(x) \geq 0$

3) On pose pour tout $t \in \mathbb{R}^+$ : $f(t) = t - \operatorname{Arc} \tan t$ et $g(t) = \frac{1}{3} t^3 - t + \operatorname{Arc} \tan t$.

On a pour tout $t \in \mathbb{R}^+$ : $f'(t) = 1 - \frac{1}{1 + t^2} = \frac{t^2}{1 + t^2}$ et $g'(t) = t^2 - 1 + \frac{1}{1 + t^2} = \frac{t^3}{1 + t^2}$

Puisque $f'(t) \geq 0$ et $g'(t) \geq 0$ pour tout $t \in \mathbb{R}^+$ alors $f$ et $g$ sont croissantes sur $\mathbb{R}^+$. Donc si $t \geq 0$ alors $f(t) \geq f(0)$ et $g(t) \geq g(0)$. Ainsi, pour tout $t \in \mathbb{R}^+$ : $f(t) \geq 0$ et $g(t) \geq 0$.

On conclut donc que pour tout $t \in \mathbb{R}^r : 0 \le t - \operatorname{Arc} \tan t \le \frac{1}{3} t$

Calculons $\lim_{x \to \infty} x \left( 1 - x \operatorname{Arc} \tan \frac{1}{x} \right)$ : On pose $t = \frac{1}{x}$. Puisque $\lim_{x \to \infty} \frac{1}{x} = 0^r$, alors :

$$\lim_{x \to \infty} x \left( 1 - x \operatorname{Arc} \tan \frac{1}{x} \right) = \lim_{t \to \infty} \frac{t - \operatorname{Arc} \tan t}{t}$$

Puisque pour tout $t > 0$, $0 \le \frac{t - \operatorname{Arc} \tan t}{t^2} \le \frac{1}{3} t$ et que $\lim_{t \to \infty} \frac{1}{3} t = 0$, alors $\lim_{t \to \infty} \frac{t - \operatorname{Arc} \tan t}{t^3} = 0$.

Par suite : $\lim_{x \to \infty} x \left( 1 - x \operatorname{Arc} \tan \frac{1}{x} \right) = 0$

• Pour étudier le sens de variation d'une fonction $f$ dérivable sur son ensemble de définition, on étudie le signe de $f'(x)$ sur cet ensemble. En pratique, on étudie le sens de variation d'une fonction dérivable sur un ensemble en prenant les recommandations suivantes :

o Avant de dériver une fonction, on justifie (meme brievement) sa dérivabilité.
o On ne parle de monotonie que sur un intervalle, pas sur une réunion d'intervalles.
o Pour etudier le signe de $ f'(x) $, il peut etre utile d'etudier une fonction auxiliaire.
o Pour etudier les extrema locaux d'une fonction $ f $ dérivable sur un intervalle ouvert $ ]a, b[ $, il suffit de calculer $ f'(x) $ pour tout $ x \in ]a, b[ : f $ admet alors un extremum local en $ x_0 $ si et seulement si $ f' $ s'annule en $ x_0 $ et change de signe de part et d'autre en $ x_0 $.

• Si la dérivée d'une fonction sur un intervalle $I$ est strictement positive, alors la fonction est strictement croissante sur $I$, mais la réciproque n'est pas vraie. Cependant, on dispose du résultat suivant : Si la dérivée est positive et ne s'annule qu'en un nombre fini de points sur un intervalle $I$, alors la fonction est strictement croissante sur $I$.

### B. Étude d'une fonction définie sur plusieurs intervalles
Soit $f$ la fonction numérique définie sur $\mathbb{R}$ par :

$$\begin{cases} f(x) = x - 1 + 3\sqrt[3]{1 - x} & \text{si } x \le 1 \\ f(x) = (x - 1)\left(1 + \operatorname{Arc} \tan \frac{1}{x}\right) & \text{si } x > 1 \end{cases}$$

$^r\ell_f$ désigne sa courbe représentative dans un repère orthonormé.

1) a) Montrer que la fonction $ f $ est continue au point $ x_0 = 1 $.
b) Etudier la derivabilité de $ f $ au point $ x_0 = 1 $ et interpréter les résultats obtenus.
2) a) Calculer les limites: $\lim_{x \to \infty} f(x)$ et $\lim_{x \to \infty} f(x)$.
b) Montrer que la droite $(\Delta): y = x$ est une asymptote oblique de la courbe $\mathcal{C}_f$ au voisinage de $+\infty$.
c) Etudier la nature de la branche infinie au voisinage de $-\infty$

3) a) Étudier les variations de la fonction $f$ sur l'intervalle $I = ]-\infty; 1]$.

b) Donner le tableau de variations de la fonction $f'$ sur $K = ]1; +\infty[$ puis en déduire les variations de la fonction $f$ sur l'intervalle $K$.

4) Soit $g$ la restriction de la fonction $f$ sur $J = ]-\infty; 0]$.

a) Montrer que $g$ realise une bijection de $J$ sur un intervalle $L$ a determiner.
b) Résoudre dans $\mathbb{R}^+$ l'équation $t^3 - 3t - 2 = 0$ puis déterminer $\left(g^{-1}\right)'(-2)$.
c) Tracer dans le même repère les courbes $\mathcal{C}_f$ et $\mathcal{C}_{g^{-1}}$.

> **Solution.**
1) a) Montrons que : $\lim_{x \to 1^+} f(x) = \lim_{x \to 1^-} f(x) = f(1)$

On a : $\lim_{x \to 1^+} f(x) = \lim_{x \to 1^-} (x - 1 + 3\sqrt[3]{1 - x}) = 0$ et $\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (x - 1) \left( 1 + \operatorname{Arc} \tan \frac{1}{x} \right) = 0$

Il s'ensuit donc que $\lim_{x \to 1^+} f(x) = \lim_{x \to 1^-} f(x) = f(1) = 0$. Donc : $f$ est continue au point $x_0 = 1$.

b) Dérivabilité à droite de la fonction $f$ au point $x_0 = 1$ :

On a : $\lim_{x \to 1^+} \frac{f(x) - f(1)}{x - 1} = \lim_{x \to 1^+} \left( 1 + \operatorname{Arc} \tan \left( \frac{1}{x} \right) \right) = 1 + \frac{\pi}{4}$. Donc la fonction $f$ est dérivable à droite

en 1 et $f'_d(1) = 1 + \frac{\pi}{4}$ et $\mathcal{C}_f$ admet une demi-tangente à droite au point $A(1, 0)$ définie par le système :

$$(T_d) : \begin{cases} y = \left( 1 + \frac{\pi}{4} \right) (x - 1) \\ x \ge 1 \end{cases}$$

Dérivabilité à gauche de la fonction $f$ au point $x_0 = 1$ :

On a : $\lim_{x \to 1^+} \frac{f(x) - f(1)}{x - 1} = \lim_{x \to 1^-} \left( 1 + 3\sqrt[3]{1 - x} \right) = \lim_{x \to 1^+} \left( 1 - 3\sqrt[3]{\frac{1}{(1 - x)^2}} \right) = -\infty$

Donc la fonction $f$ n'est pas dérivable à gauche au point $x_0 = 1$ et $\mathcal{C}_f$ admet une demi-tangente verticale à gauche au point $A(1, 0)$ dirigée vers le haut.

2) a) On a pour tout $x < 0$, $-x = \sqrt[3]{-x^3}$. Il s'ensuit donc que : $\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} -1 + x \left( 1 - 3\sqrt[3]{\frac{1 - x}{-x^3}} \right) = -\infty$

car : $\lim_{x \to -\infty} \left( 1 - 3\sqrt[3]{\frac{1 - x}{-x^3}} \right) = 1$ et $\lim_{x \to -\infty} x = -\infty$

On a : $\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} (x - 1) \left( 1 + \operatorname{Arc} \tan \frac{1}{x} \right) = +\infty$ car : $\lim_{x \to +\infty} x - 1 = +\infty$ et $\lim_{x \to +\infty} 1 + \operatorname{Arc} \tan \frac{1}{x} = 1$

b) Montrons que $$\lim_{x \to +\infty} (f(x) - x) = 0$$ :

On a : $$\lim_{x \to +\infty} (f(x) - x) = \lim_{x \to +\infty} \left( x \operatorname{Arc} \tan \frac{1}{x} - 1 - \operatorname{Arc} \tan \frac{1}{x} \right)$$. Puisque $$\lim_{x \to +\infty} x \operatorname{Arc} \tan \frac{1}{x} = \lim_{\alpha \to 0} \frac{\alpha}{\tan \alpha} = 1$$

(on a posé $$\alpha = \operatorname{Arc} \tan \frac{1}{x}$$) et $$\lim_{x \to +\infty} \operatorname{Arc} \tan \frac{1}{x} = 0$$, alors : $$\lim_{x \to +\infty} (f(x) - x) = 0$$.

c) Calculons $$\lim_{x \to -\infty} \frac{f(x)}{x}$$: On a $$\lim_{x \to -\infty} \frac{f(x)}{x} = \lim_{x \to -\infty} 1 - \frac{1}{x} - 3 \sqrt{\frac{1 - x}{-x^3}} = 1$$

Calculons maintenant $$\lim_{x \to -\infty} (f(x) - x) : \lim_{x \to -\infty} (f(x) - x) = \lim_{x \to -\infty} (-1 + 3 \sqrt[3]{1 - x}) = +\infty$$

D'où la courbe $$\mathcal{C}_f$$ admet une branche parabolique au voisinage de $$-\infty$$ de direction la droite $$(\Delta) : y = x$$.

3) a) On a pour tout $$x < 1$$, $$f(x) = x - 1 + 3(1 - x)^{\frac{1}{3}}$$. La fonction $$f$$ est dérivable sur $$]-\infty; 1[$$ en tant que somme de deux fonctions dérivables sur cet intervalle et on a pour tout $$x \in ]-\infty; 1[$$ :

$$f'(x) = 1 + 3 \times (1 - x)' (1 - x)^{\frac{2}{3}} = \frac{\sqrt[3]{(1 - x)^2} - 1}{\sqrt[3]{(1 - x)^2}}$$

Puisque $$\sqrt[3]{(1 - x)^2} > 0$$ alors le signe de $$f'(x)$$ est celui de $$\sqrt[3]{(1 - x)^2} - 1$$ et aussi le signe de $$(1 - x)^2 - 1$$. or pour tout $$x \in ]-\infty; 1[, (1 - x)^2 - 1 = x(x - 2)$$, d'où le tableau de variations de $$f$$ sur $$I = ]-\infty; 1[$$ est :

|  x | -∞ | 0 | 1  |
| --- | --- | --- | --- |
|  f'(x) | + | 1 0 | -  |
|  f(x) | -∞ | 2 | 0  |

b) On a $$f$$ est dérivable sur $$K = ]1; +\infty[$$ en tant que produit de deux fonctions dérivables sur $$K$$ et on a pour

tout $$x \in K$$ : $$f'(x) = 1 + \operatorname{Arc} \tan \frac{1}{x} + (x - 1) \frac{-\frac{1}{x^2}}{1 + \frac{1}{x^2}} = 1 + \operatorname{Arc} \tan \frac{1}{x} - \frac{x - 1}{x^2 + 1}$$

De même la fonction $$f'$$ est dérivable sur $$K$$ en tant que somme de deux fonctions dérivables sur cet

intervalle et on a pour tout $$x \in K$$ : $$f''(x) = \frac{-\frac{1}{x^2}}{1 + \frac{1}{x^2}} + \frac{x^2 - 2x - 1}{(x^2 + 1)^2} = \frac{-2(x + 1)}{(x^2 + 1)^2}$$

Puisque $$f''(x) > 0$$ pour tout $$x \in K$$ alors $$f'$$ est strictement décroissante sur $$K$$, et comme $$f'$$ est continue

sur $$K$$ alors $$f'(K) = \lim_{x \to +\infty} f'(x) ; \lim_{x \to 1} f' = \left[ 1; 1 + \frac{\pi}{4} \right]$$. Il s'ensuit donc que $$f'(x) > 0$$ pour tout $$x \in K$$, et

par suite $$f$$ est strictement croissante sur $$K$$. D'où le tableau de variation de $$f$$ sur $$\mathbb{R}$$.

|  x | -∞ | 0 | 1 | +∞  |
| --- | --- | --- | --- | --- |
|  f'(x) | + | 0 | - | +  |
|  f(x) | -∞ | 2 | 0 | +∞  |

4) a) On a pour tout $$x \in J$$, $$g(x) = f(x) = x - 1 + 3\sqrt[3]{1 - x}$$. D'après les questions précédentes, la fonction $$g$$ est continue et strictement croissante sur $$J$$. D'après le théorème de la bijection, la fonction $$g$$ réalise une bijection de $$J$$ sur $$L = g(J) = \left]\lim_{x \to -\infty} g(x); g(0)\right]$$, ce qui donne : $$L = ]-\infty; 2]$$.
b) Remarquons que le nombre $$t = 2$$ est une solution de l'équation $$t^3 - 3t - 2 = 0$$, et en effectuant la division euclidienne de $$P(t) = t^3 - 3t - 2$$ par $$t - 2$$, on trouve $$P(t) = (t - 2)(t + 1)^2$$. Il s'ensuit que l'ensemble des solutions de l'équation dans $$\mathbb{R}^+$$ est $$P(t) = 0$$ est $$S = \{2\}$$.

On pose $$g^{-1}(-2) = x$$. On a alors $$g(x) = -2$$ et $$x \in J$$, d'où $$x - 1 + 3\sqrt[3]{1 - x} = -2$$ et $$x \in J$$.

On pose $$t = \sqrt[3]{1 - x}$$ et donc : $$t^3 - 3t - 2 = 0$$ et $$t \ge 1$$. D'après ce qui précède, on trouve $$t = 2$$ et donc $$x = 1 - t^3 = -7$$, et par suite $$g^{-1}(-2) = -7$$.

Comme $$g'(-7) \neq 0$$ alors : $$\left(g^{-1}\right)'(-2) = \frac{1}{g'\left(g^{-1}(-2)\right)} = \frac{1}{g'(-7)}$$. Et puisque $$g'(x) = 1 - \frac{1}{\sqrt[3]{(1 - x)^2}}$$ pour

tout $$x \in J$$ alors $$g'(-7) = \frac{3}{4}$$ et par conséquent : $$\left(g^{-1}\right)'(-2) = \frac{4}{3}$$

Pour montrer qu'une fonction $f$ est dérivable sur un intervalle $I$ et calculer sa dérivée,

Il suffit d'utiliser les théorèmes d'opérations sur les fonctions dérivables. Pratiquement : il s'agit de considérer que la fonction $f$ est une somme, un produit, un quotient, une composée,...et d'appliquer le théorème et la formule qui correspondent. Attention à bien vérifier que les conditions d'application sont satisfaites ; si ce n'est pas le cas, il faut revenir à l'une des deux méthodes précédentes.
Il va sans dire qu'il faut par conséquent connaître sur le bout des doigts les dérivées des fonctions classiques, ainsi que les formules de dérivation.
On suppose maintenant que la fonction $f$ est dérivable et strictement monotone sur un intervalle $I$. Soit $x_0 \in I$ et $y_0 = f(x_0)$, c'est-à-dire $x_0 = f^{-1}(y_0)$.
Si $f'(x_0) \neq 0$, alors $f^{-1}$ est dérivable en $y_0$ et de plus : $(f^{-1})'(y_0) = \frac{1}{f'(x_0)} = \frac{1}{f'(f^{-1}(y_0))}$
Si $f'(x_0) = 0$, alors $f^{-1}$ n'est pas dérivable en $y_0$ et la courbe représentative de $f^{-1}$ admet au point d'abscisse $y_0$ une tangente parallèle à l'axe des ordonnées.

### C. Étude d'une fonction irrationnelle
On considère la fonction $f$ définie sur $\mathbb{R}$ par : $f(x) = 4.\sqrt[4]{(x-1)^2} - 3.\sqrt[3]{(x-1)^2}$

$\mathcal{C}_f$ désigne sa courbe représentative dans un repère orthonormé $(O, \bar{i}, \bar{j})$.

Partie 1 :

1) Montrer que la droite $(\Delta)$ : $x = 1$ est un axe de symétrie pour la courbe $\mathcal{C}_f$.
2) a) Étudier la dérivabilité à droite au point $x_0 = 1$ (on pourra poser $t = \sqrt[4]{x-1}$)

b) Montrer que la fonction $f$ est dérivable sur l'intervalle $]1, +\infty[$ et que pour tout $x \in ]1; +\infty[$ :

$$f'(x) = \frac{2\left(\sqrt[4]{(x-1)^2} - \sqrt[3]{(x-1)^3}\right)}{\sqrt[4]{(x-1)^3}}$$ Puis déterminer les variations de la fonction $f$ sur $[1; +\infty[$.

3) a) Vérifier que : $(\forall x \in ]1; +\infty[)$ $f(x) = \sqrt[3]{(x-1)^2} \cdot \left(4.\sqrt[4]{\frac{1}{x-1}} - 3\right)$

b) Étudier la nature de la branche infinie de la courbe $\mathcal{C}_f$ au voisinage de $+\infty$.
c) Déterminer les points d'intersection de la courbe $\mathcal{C}_f$ avec les axes du repère.
d) Montrer que l'équation $f(x) = x$ admet une solution unique $\alpha$ tel que $0 < \alpha < 1$ et étudier le signe de $f(x) - x$ sur l'intervalle $[0; 1]$.
4) Tracer la courbe $\mathcal{C}_f$.

# TECHNIQUES ET

#### Partie II
On considère la suite numérique définie par :

1) Montrer que pour tout $ n \in \mathbb{N} $: $ 0 < u_n < 1 $
2) On pose pour tout $ n \in \mathbb{N} $: $ v_{n} = u_{2n} $ et $ w_{n} = u_{2n + 1} $.
3) On pose pour tout $ n \in \mathbb{N} $: $ v_{n+1} = \text{fof}(v_n) $ et $ w_{n+1} = \text{fof}(w_n) $.

a) Vérifier que pour tout $ n \in \mathbb{N} $: $ v_{n} < \alpha < w_{n} $.
b) Montrer que pour tout $ n \in \mathbb{N} $: $ v_{n} < \alpha < w_{n} $.

3) Dans cette question seulement, on pose :

a) Etudier la monotonie de chacune des suites $(v_{n})$ et $(w_{n})$.
b) Montrer que les suites $(v_{n})$ et $(w_{n})$ sont convergentes et déterminer la limite de chacune d'elles.

Les suites $(v_n)$ et $(w_n)$ sont-elles adjacentes ?

c) En utilisant la définition de la limite d'une suite numérique, montrer que la suite

$(u_n)$ est convergente et déterminer sa limite.

> **Solution.**
#### Partie I
1) Puisque $(x-1)^2 \ge 0$ pour tout $x \in \mathbb{R}$ alors la fonction $f$ est définie sur $\mathbb{R}$. Ainsi : $D_f = \mathbb{R}$

On a pour tout $x \in \mathbb{R}$ : $f(2-x) = 4\sqrt[4]{(2-x-1)^2} - 3\sqrt[3]{(2-x-1)^2} = 4\sqrt[4]{(x-1)^2} - 3\sqrt[3]{(x-1)^2} = f(x)$

(car : $(1-x)^2 = (x-1)^2$). Donc la droite $(\Delta)$ : $x=1$ est un axe de symétrie de la courbe $\mathcal{C}_f$.

Remarquons alors qu'on peut restreindre l'étude de la fonction $f$ à $D_E = [1; +\infty[$.

2) a) Rappelons que pour tout réel $a > 0$, $\sqrt[4]{a^2} = \sqrt{a}$. En posant $t = \sqrt[6]{x-1}$ on obtient :

$$\lim_{x \to 1^+} \frac{f(x) - f(1)}{x-1} = \lim_{x \to 1^+} \frac{4\sqrt{x-1} - 3\sqrt[3]{(x-1)^2}}{x-1} = \lim_{t \to 0^+} \frac{4t^3 - 3t^4}{t^6} = \lim_{t \to 0^+} \frac{4-3t}{t^3} = +\infty$$

Donc $f$ n'est dérivable à droite au point 1 et donc $\mathcal{C}_f$ admet une demi-tangente verticale à droite au

point $A(1, 0)$, dirigée vers le haut.

b) On a pour tout $x \in ]1; +\infty[$, $f(x) = 4(x-1)^{\frac{1}{2}} - 3(x-1)^{\frac{2}{3}}$. Puisque la fonction $x \mapsto x-1$ est dérivable et strictement positive sur $I = ]1; +\infty[$ alors les fonctions $x \mapsto 4(x-1)^{\frac{1}{2}}$ et $x \mapsto -3(x-1)^{\frac{2}{3}}$ sont aussi dérivable sur $I$ et on a pour tout $x \in I$ :

$$f'(x) = 4 \times \frac{1}{2}(x-1)^{-\frac{1}{2}} - 3 \times \frac{2}{3}(x-1)^{-\frac{1}{3}} = \frac{2}{\sqrt{x-1}} - \frac{2}{\sqrt[3]{x-1}} = \frac{2\left(\sqrt[6]{(x-1)^2} - \sqrt[6]{(x-1)^3}\right)}{\sqrt[6]{(x-1)^5}}$$

Puisque $\sqrt[6]{(x-1)^5} > 0$ pour tout $x \in I$ alors le signe de $f'(x)$ sur $I$ est celui de $\sqrt[6]{(x-1)^2} - \sqrt[6]{(x-1)^3}$.

est aussi le signe de $$(x-1)^2 - (x-1)^3$$ et on a de plus : $$(x-1)^2 - (x-1)^3 = (x-1)^2(2-x)$$

On obtient alors les résultats suivants :

• Pour tout $$x \in ]1; 2[$$ : $$f'(x) > 0$$ et donc $$f$$ est strictement croissante sur $$[1; 2]$$.

• Pour tout $$x \in ]2; +\infty[$$ : $$f'(x) < 0$$ et donc $$f$$ est strictement décroissante sur $$[2; +\infty[$$.

• $$f'(2) = 0$$ et donc $$f$$ admet un extremum en 2 (car $$f'$$ change de signe en ce point)

5) (a) On a pour tout $$x > 1$$ :

$$f(x) = 4\sqrt{x-1} - 3\sqrt[3]{(x-1)^2} = \sqrt[3]{(x-1)^2} \left( 4\frac{\sqrt{x-1}}{\sqrt[3]{(x-1)^2}} - 3 \right) = \sqrt[3]{(x-1)^2} \left( 4\sqrt[4]{\frac{1}{x-1}} - 3 \right)$$

b) On a pour tout $$x > 1$$, $$f(x) = \sqrt[3]{(x-1)^2} \left( 4\sqrt[4]{\frac{1}{x-1}} - 3 \right)$$.

Puisque $$\lim_{x \to +\infty} \sqrt[3]{(x-1)^2} = +\infty$$ et $$\lim_{x \to +\infty} \left( 4\sqrt[4]{\frac{1}{x-1}} - 3 \right) = -3$$ alors $$\lim_{x \to +\infty} f(x) = -\infty$$. Calculons $$\lim_{x \to +\infty} \frac{f(x)}{x}$$ :

On a : $$\lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} \sqrt[3]{\frac{(x-1)^2}{x^3}} \left( 4\sqrt[4]{\frac{1}{x-1}} - 3 \right) = 0 \times (-3) = 0$$. Par conséquent, $$\mathcal{C}_f$$ admet une

une branche parabolique au voisinage de $$+\infty$$ dirigée vers l'axe des abscisses.
c) On a $$f(0) = 1$$ donc $$\mathcal{C}_f$$ coupe l'axe des ordonnées au point $$B(0, 1)$$.

Les abscisses des points d'intersections de la courbe $$\mathcal{C}_f$$ avec l'axe des abscisses sont (s'ils existent)

les solutions de l'équation $$f(x) = 0$$. Puisque $$(x-1)^2 = |x-1|^2$$ pour tout $$x \in \mathbb{R}$$ alors :
$$f(x) = 0 \Leftrightarrow 4\sqrt{|x-1|} - 3\sqrt[3]{|x-1|^2} = 0 \Leftrightarrow 4\sqrt[4]{|x-1|^3} - 3\sqrt[4]{|x-1|^4} = 0$$

En posant $$t = \sqrt[4]{|x-1|}$$ on obtient :
$$f(x) = 0 \Leftrightarrow 4t^3 - 3t^4 = 0 \Leftrightarrow t^3(4-3t) = 0 \Leftrightarrow \left( t = 0 \text{ ou } t = \frac{4}{3} \right) \Leftrightarrow \left[ x = 1 \text{ ou } x = 1 + \left( \frac{4}{3} \right)^6 \text{ ou } x = 1 - \left( \frac{4}{3} \right)^6 \right]$$

Par suite, $$\mathcal{C}_f$$ coupe l'axe des abscisses en trois points dont les abscisses : 1 et $$1 + \left( \frac{4}{3} \right)^6$$ et $$1 - \left( \frac{4}{3} \right)^6$$

d) On pose pour tout $$x \in [0, 1]$$ : $$g(x) = f(x) - x$$
D'après la question 1) on a $$f(x) = f(2-x)$$, et donc : $$\forall x \in [0, 1]$$ : $$g(x) = f(2-x) - x$$
On a la fonction $$u : x \mapsto 2-x$$ est continue et strictement décroissante sur $$[0; 1]$$ et $$u([0; 1]) = [1; 2]$$ et $$f$$ continue sur $$[1; 2]$$ donc la fonction $$fou : x \mapsto f(2-x)$$ est continue et strictement décroissante sur $$[0; 1]$$,
et on sait que $$v : x \mapsto -x$$ est continue et strictement décroissante sur $$[0; 1]$$ donc $$g = gou + v$$ est continue
et strictement décroissante sur $$[0; 1]$$ et par suite $$g$$ réalise une bijection de $$[0; 1]$$ sur $$g([0; 1]) = [-1; 1]$$.
Or $$0 \in [-1; 1[$$ donc il existe un unique réel $$\alpha \in ]0; 1[$$ tel que $$g(\alpha) = 0$$. Par suite : $$\exists! \alpha \in ]0; 1[ / f(\alpha) = \alpha$$

# 3

Le signe de $f(x) - x$ sur $[0;1]$ est celui de $g(x)$ sur $[0;1]$ et puisque $g$ est strictement décroissante sur $[0;1]$ alors :

- Si $0 \leq x \leq \alpha$ alors $g(x) \geq g(\alpha)$ c'est-à-dire que $g(x) \geq 0$.
- Si $\alpha \leq x \leq 1$ alors $g(x) \leq g(\alpha)$ c'est-à-dire que $g(x) \leq 0$.

4) La courbe $\mathcal{C}_f$ de la fonction $f$ :

#### Partie II
1) Montrons par récurrence que : $(\forall n \in \mathbb{N}) \ 0 < u_n < 1$

Initialisation : On a $0 < u_0 < \alpha$ et puisque $0 < \alpha < 1$ alors $0 < u_0 < 1$.

Hérédité : Soit $n \in \mathbb{N}$. Supposons que $0 < u_n < 1$ et montrons que $0 < u_{n+1} < 1$.

On sait que la fonction $f$ est strictement décroissante sur $[0;1]$ et puisque $0 < u_n < 1$ alors $f(1) < f(u_n) < f(0)$ et donc : $0 < u_{n+1} < 1$

Conclusion : $(\forall n \in \mathbb{N}) \ 0 < u_n < 1$

2) a) On a pour tout $n \in \mathbb{N}$ :

$$v_{n+1} = u_{2n+2} = f(u_{2n+1}) = f(f(u_{2n})) = fof(u_{2n}) = fof(v_n)$$

b) Montrons par récurrence que : $(\forall n \in \mathbb{N}) \ v_n < \alpha$

Initialisation : On a $v_0 = u_0$, et puisque $0 < u_0 < \alpha$ alors $v_0 < \alpha$.

Hérédité : Soit $n \in \mathbb{N}$. Supposons que $v_n < \alpha$ et montrons que $v_{n+1} < \alpha$.

On a par hypothèse et d'après ce qui précède $0 < v_n < \alpha < 1$ et on sait que la fonction $f$ est strictement décroissante sur $[0;1]$ et que $f([0;1]) = [0;1]$. Donc la fonction $fof$ est strictement croissante sur $[0;1]$, et alors $fof(v_n) < fof(\alpha)$, d'où $v_{n+1} < \alpha$.

Conclusion : $(\forall n \in \mathbb{N}) \ v_n < \alpha$.

On montre de la même façon (par récurrence) que : $(\forall n \in \mathbb{N}) \ w_n > \alpha$. Par suite : $(\forall n \in \mathbb{N}) \ v_n < \alpha < 1$.

c) Montrons que la suite $(v_n)$ est croissante et la suite $(w_n)$ est décroissante :
pour cela, on va montrer par récurrence que : $(\forall n \in \mathbb{N}) v_{n+1} \geq v_n$ et $w_{n+1} \leq w_n$
initialisation : On vérifie bien que $v_0 \leq v_1$ et $w_1 \leq w_0$
décédité : Supposons que $v_{n+1} \geq v_n$ et $w_{n+1} \leq w_n$ et montrons que $v_{n+2} \geq v_{n+1}$ et $w_{n+2} \leq w_{n+1}$.
puisque $1 > v_{n+1} \geq v_n > 0$ et $0 < w_{n+1} \leq w_n < 1$ et la fonction $fof$ est strictement croissante sur $[0;1]$, alors $fof(v_{n+1}) \geq fof(v_n)$ et $fof(w_{n+1}) \leq fof(w_n)$, ce qui entraîne $v_{n+2} \geq v_{n+1}$ et $w_{n+2} \leq w_{n+1}$.
conclusion : la suite $(v_n)$ est croissante et la suite $(w_n)$ est décroissante.
b) Puisque la suite $(v_n)$ est croissante et majorée par $\alpha$ alors elle est convergente. De même, la suite $(w_n)$ est décroissante minorée par $\alpha$, donc elle est convergente.
On a $v_{n+1} = fof(v_n)$, $fof$ est continue sur $I = [0;1]$, $fof(I) \subset I$ et $(v_n)$ est convergente. Il s'ensuit donc que la limite $\ell$ de la suite $(v_n)$ est solution de l'équation $fof(x) = x$ avec $x \in I$. On vérifie aisément que $\alpha$ est l'unique solution de cette équation. Ainsi : $\lim_{n \to +\infty} v_n = \alpha$
On montre de même que $\lim_{n \to +\infty} w_n = \alpha$. Par suite, les suites $(v_n)$ et $(w_n)$ sont adjacentes.
c) Montrons en utilisant la définition que $\lim_{n \to +\infty} u_n = \alpha$ :
Puisque $\lim_{n \to +\infty} v_n = \alpha$ et $\lim_{n \to +\infty} w_n = \alpha$ alors :
$(\forall \varepsilon > 0) (\exists N_1 \in \mathbb{N}) ; (n \geq N_1 \Rightarrow |v_n - \ell| < \varepsilon)$ et $(\forall \varepsilon > 0) (\exists N_2 \in \mathbb{N}) ; (n \geq N_2 \Rightarrow |w_n - \ell| < \varepsilon)$
En posant $N = \text{Max}(N_1, N_2)$ on en déduit que : $(\forall n \geq N) (|v_n - \ell| < \varepsilon$ et $|w_n - \ell| < \varepsilon)$
On a donc montré que : $(\forall \varepsilon > 0) (\exists N \in \mathbb{N}) ; (n \geq N \Rightarrow |u_n - \ell| < \varepsilon)$
ce qui prouve bien que $\lim_{n \to +\infty} u_n = \alpha$.
### D. Inégalité des accroissements finis
On considère la fonction numérique $f$ définie sur $\left]\frac{\pi}{6}; \frac{\pi}{2}\right[$ par : $f(x) = \frac{\pi}{2} - \sin x$
Soit $(u_n)$ une suite définie pour tout $n \in \mathbb{N}$ par : $u_{n+1} = f(u_n)$ et $u_0 \in \left]\frac{\pi}{6}; \frac{\pi}{2}\right[$.
1) Montrer que l'équation $f(x) = x$ admet une unique solution $\alpha$ dans l'intervalle $\left]\frac{\pi}{6}; \frac{\pi}{2}\right[$.
2) Montrer que pour tout $n \in \mathbb{N}$ : $\frac{\pi}{6} < u_n < \frac{\pi}{2}$
3) a) Montrer que pour tout $x \in \left]\frac{\pi}{6}; \frac{\pi}{2}\right[$ : $|f'(x)| \leq \frac{\sqrt{3}}{2}$
b) En déduire que : $\forall n \in \mathbb{N}, |u_{n+1} - \alpha| \leq \frac{\sqrt{3}}{2} |u_n - \alpha|$
c) Déterminer la limite de la suite $(u_n)$.

> **Solution.**
1) Montrons que l'équation $f(x) = x$ admet une solution unique $\alpha$ dans l'intervalle $\left]\frac{\pi}{6}; \frac{\pi}{2}\right[$ :

On considère la fonction $g$ définie sur $\left]\frac{\pi}{6}; \frac{\pi}{2}\right[$ par : $g(x) = f(x) - x$

La fonction $g$ est dérivable sur $\left]\frac{\pi}{6}; \frac{\pi}{2}\right[$ et on a pour tout $x \in \left]\frac{\pi}{6}; \frac{\pi}{2}\right[$ : $g'(x) = f'(x) - 1 = -\cos x - 1 \neq 1$

La fonction $g$ est continue et strictement décroissante sur $\left]\frac{\pi}{6}; \frac{\pi}{2}\right[$. D'après le théorème de la bijection,

la fonction $g$ réalise une bijection de $\left]\frac{\pi}{6}; \frac{\pi}{2}\right[$ sur l'intervalle $g\left(\left]\frac{\pi}{6}; \frac{\pi}{2}\right[\right) = \left]-1; \frac{2\pi - 3}{6}\right[$. Et puisque

$0 \in \left]-1; \frac{2\pi - 3}{6}\right[$ alors il existe un unique antécédent $\alpha \in \left]\frac{\pi}{6}; \frac{\pi}{2}\right[$ tel que $g(\alpha) = 0$, c'est-à-dire $f(\alpha) = 2$

2) Montrons par récurrence que : $(\forall n \in \mathbb{N}) \frac{\pi}{6} < u_n < \frac{\pi}{2}$

Initialisation : On a pour $n = 0$, $\frac{\pi}{6} < u_n < \frac{\pi}{2}$

Hérédité : Soit $n \in \mathbb{N}$. Supposons que $\frac{\pi}{6} < u_n < \frac{\pi}{2}$ et montrons que $\frac{\pi}{6} < u_{n+1} < \frac{\pi}{2}$.

Puisque $\frac{\pi}{6} < u_n < \frac{\pi}{2}$ et la fonction $f$ est strictement décroissante sur $\left]\frac{\pi}{6}; \frac{\pi}{2}\right[$ alors :

$\lim_{x \to \left[\frac{\pi}{2}\right]} f(x) < f(u_n) < \lim_{x \to \left[\frac{\pi}{2}\right]} f(x)$ ce qui donne $\frac{\pi}{2} - 1 < u_{n+1} < \frac{\pi}{2} - \frac{1}{2}$. Et comme $\frac{\pi}{2} - 1 < \frac{\pi}{2}$ et $\frac{\pi}{6} < \frac{\pi}{2} \frac{1}{2}$

alors $\frac{\pi}{6} < u_{n+1} < \frac{\pi}{2}$.

Conclusion : $(\forall n \in \mathbb{N}) \frac{\pi}{6} < u_n < \frac{\pi}{2}$

3) a) Montrons que pour tout $x \in \left]\frac{\pi}{6}; \frac{\pi}{2}\right[$, $|f'(x)| < \frac{\sqrt{3}}{2}$ :

Soit $x \in \left]\frac{\pi}{6}; \frac{\pi}{2}\right[$. On a $f(x) = \frac{\pi}{2} - \sin x$ et $f'(x) = -\cos x$. Puisque la fonction $x \mapsto \cos x$ est strictement

décroissante sur $\left]\frac{\pi}{6}; \frac{\pi}{2}\right[$ alors $\cos \frac{\pi}{2} < \cos x < \cos \frac{\pi}{6}$, c'est-à-dire que $0 < \cos x < \frac{\sqrt{3}}{2}$. Par conséquent

$-\frac{\sqrt{3}}{2} < -\cos x < 0 < \frac{\sqrt{3}}{2}$. Il s'ensuit donc que $|f'(x)| < \frac{\sqrt{3}}{2}$ pour tout $x \in \left]\frac{\pi}{6}; \frac{\pi}{2}\right[$.

b) Montrons que : $(\forall n \in \mathbb{N}) |u_{n+1} - \alpha| \leq \frac{\sqrt{3}}{2} |u_n - \alpha|$

puisque $f$ est continue et dérivable sur $\left]\frac{\pi}{6}; \frac{\pi}{2}\right[$ alors elle continue et dérivable sur chaque segment.

inclus dans $$\left]\frac{\pi}{6}; \frac{\pi}{2}\right[$$. Puisque pour tout $$x \in \left]\frac{\pi}{6}; \frac{\pi}{2}\right[$$, $$|f'(x)| < \frac{\sqrt{3}}{2}$$ alors, d'après l'inégalité des accroisse-

ments finis, on a: $$|f(b) - f(a)| \leq \frac{\sqrt{3}}{2} |b - a|$$. En prenant: $$b = u_n$$ et $$a = \alpha$$. On obtient alors:

$$|f(u_n) - f(\alpha)| \leq \frac{\sqrt{3}}{2} |u_n - \alpha|$$. Comme $$f(\alpha) = \alpha$$ et $$f(u_n) = u_{n+1}$$ alors: $$|u_{n+1} - \alpha| \leq \frac{\sqrt{3}}{2} |u_n - \alpha|$$.

si Déterminons la limite de la suite $$(u_n)$$:

On a pour tout $$n \in \mathbb{N}$$, $$|u_{n+1} - \alpha| \leq \frac{\sqrt{3}}{2} |u_n - \alpha|$$.

Montrons par récurrence que: $$\forall n \in \mathbb{N}, |u_n - \alpha| \leq \left(\frac{\sqrt{3}}{2}\right)^n |u_0 - \alpha|$$

Initialisation: On a pour $$n = 0$$, $$|u_0 - \alpha| \leq \left(\frac{\sqrt{3}}{2}\right)^0 |u_0 - \alpha|$$.

Hérédité: Supposons que $$|u_n - \alpha| \leq \left(\frac{\sqrt{3}}{2}\right)^n |u_0 - \alpha|$$ et montrons que $$|u_{n+1} - \alpha| \leq \left(\frac{\sqrt{3}}{2}\right)^{n+1} |u_0 - \alpha|$$

On a d'après la question précédente: $$|u_{n+1} - \alpha| \leq \frac{\sqrt{3}}{2} |u_n - \alpha|$$ et $$\frac{\sqrt{3}}{2} |u_n - \alpha| \leq \left(\frac{\sqrt{3}}{2}\right)^{n+1} |u_0 - \alpha|$$

Donc: $$|u_{n+1} - \alpha| \leq \left(\frac{\sqrt{3}}{2}\right)^{n+1} |u_0 - \alpha|$$. Par suite: $$(\forall n \in \mathbb{N}) |u_n - \alpha| \leq \left(\frac{\sqrt{3}}{2}\right)^n |u_0 - \alpha|$$

Comme $$\left|\frac{\sqrt{3}}{2}\right| < 1$$ alors $$\lim_{n \to +\infty} \left(\frac{\sqrt{3}}{2}\right)^n = 0$$. Par suite: $$\lim_{n \to +\infty} u_n = \alpha$$

On rappelle que si $ f $ est continue sur $ [a, b] $, dérivable sur $ ]a, b[ $, et telle que pour tout $ x \in ]a, b[ $, $ |f'(x)| \leq M $ alors $ |f(b) - f(a)| \leq M |b - a| $.
Pour appliquer l'une des inégalités des accroissements finis à la fonction $ f $ entre $ a $ et $ b $, il suffit, soit d'encadrer $ f'(x) $ sur $ [a, b] $, avec $ a < b $, soit de majorer $ |f'(x)| $ sur un intervalle $ I $ contenant $ a $ et $ b $, avec $ a $ et $ b $ quelconques dans $ I $.
La correspondance entre $(a,b)\in I^2$ et le nombre $c\in ]a,b[$ verifiant $f(b) - f(a) = f'(c)(b - a)$ n'est pas fonctionnelle, c'est le cas par exemple de la fonction numérique $f:[0;4\pi ]\to \mathbb{R}$ définie par $f(x) = \cos x$ . Cela explique partiellement l'intérêt accordé à l'inégalité des accroissements finis. D'ailleurs l'égalité n'a lieu que par les fonctions à valeurs réelles.

## Exercices

### Exercices d’application
#### DÉRIVABILITÉ D'UNE FONCTION EN UN POINT
**Exercice 1.**
En utilisant la définition, montrer que la fonction $f$ est dérivable en $x_0$ en déterminant le nombre dérivé $f'(x_0)$ dans chacun des cas suivants :

1) $f(x) = \sqrt{x^2 + 1}$ 1. $x_0 = 0$
2) $f(x) = 2x - \sqrt[3]{x}$ 1. $x_0 = 1$
3) $f(x) = \frac{1}{x^2 + 2}$ 1. $x_0 = -2$
4) $f(x) = x|x|$ 1. $x_0 = 0$
5) $f(x) = 2x - \operatorname {Arctan}\sqrt{x + 1}$ （20 $x_0 = 0$
6) $f(x) = \cos x - \sin^2 x + \tan (4x)$ （20 $x_0 = 0$
7) $\begin{array}{l}f(x) = \frac{\sqrt{x + 1} - 1}{x}\text{si} x\neq 0\\ f(0) = \frac{1}{2} \end{array}$ （20 $x_0 = 0$
8) $\begin{array}{l}f(x) = x^{2}\cos \left(\frac{1}{x}\right)\text{si} x\neq 0\\ f(0) = 0 \end{array}$ （20 $x_0 = 0$
9) $f(x) = \frac{\sin(x^2 - 1)}{x - 1}$ （20 $x_0 = -1$

**Exercice 2.**
Étudier la dérivabilité à droite et à gauche en $x_0$ de chacune des fonctions suivantes puis préciser si la fonction est dérivable en $x_0$ ou non :

1) $f(x) = |x^2 - 1|$ （20 $x_0 = 1$
2) $g(x) = \sqrt{|x^2 - 4|}$ （20 $x_0 = -2$
3) $\begin{array}{l}h(x) = 4x^{3} - 3\text{si} x\geq 1\\ h(x) = 2x^{2} - 1\text{si} x <   1 \end{array}$ （20 $x_0 = 1$

**Exercice 3.**
On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$\left\{ \begin{array}{l} f(x) = (x-1)\sqrt{x-1} \text{ si } x \ge 1 \\ f(x) = x^3 - x \text{ si } x < 1 \end{array} \right.$$

1) Montrer que la fonction $ f $ est continue en 1.
2) Etudier la dérivabilité à droite et à gauche en I de la fonction $ f $ puis interpréter les résultats obt

**Exercice 4.**
Étudier la dérivabilité à droite en $x_0$ de la fonction $f$ puis interpréter le résultat obtenu :

1) $f(x) = \sqrt[3]{x - 2}$ （20 $x_0 = 2$
2) $f(x) = \sqrt{1 - x^2}$ （20 $x_0 = -1$
3) $f(x) = \sqrt{x^2 + x - 2}$ （20 $x_0 = 1$
4) $f(x) = \frac{x}{\sqrt[3]{x + 5}}$ （20 $x_0 = 0$
5) $f(x) = \cos \left(\sqrt[3]{x}\right)$ （20 $x_0 = 0$
6) $f(x) = \left(\operatorname{Arctan}\sqrt{x - 3}\right)^2$ （20 $x_0 = 3$

**Exercice 5.**
Étudier la dérivabilité à gauche en $x_0$ de la fonction $f$ puis interpréter le résultat obtenu :

1) $f(x) = x + \sqrt[3]{1 - x}$ （20 $x_0 = 1$
2) $f(x) = \sqrt{x^2 - 5x + 4}$ （20 $x_0 = 1$
3) $f(x) = \sqrt{\frac{x^3}{x - 2}}$ （20 $x_0 = 0$
4) $f(x) = \sqrt{\pi - 3\operatorname {Arc}\tan x}$ （20 $x_0 = \sqrt{3}$
5) $f(x) = \sqrt{x^2 + x - 2}$ （20 $x_0 = -2$
6) $f(x) = \sqrt{1 - x^3}$ （20 $x_0 = 1$
7) $f(x) = \sqrt[3]{x} -\sqrt[3]{x - x^2}$ （20 $x_0 = 1$

**Exercice 6.**
Soit $f$ la fonction définie par : $f(x) = \frac{x^2 - 2x - 3}{|x - 2| - 2}$

1) Détérminer $D_{f}$ le domaine de définition de $f$.
2) Etudier la dérivabilité à droite et à gauche de la fonction $ f $ au point $ x_0 = 2 $ puis interpréter géométriquement les résultats obtenus.

**Exercice 7.**
Soit $f$ la fonction numérique définie sur $\mathbb{R} - \{4\}$ par :

$$\left\{ \begin{array}{l} f(x) = x - \sqrt[3]{1 - x} \quad \text{si } x < 1 \\ f(x) = \frac{1}{2 - \sqrt{x}} \quad \text{si } x \ge 1 \text{ et } x \neq 4 \end{array} \right.$$

1) Etudier la dérivabilité à droite et à gauche de la fonction $ f $ au point $ x_0 = 1 $.
2) Interpréter géométriequement les résultats obtenus.

**Exercice 8.**
Pour chacun des cas suivants, étudier la dérivabilité de la fonction $f$ puis interpréter géométriquement les résultats obtenus :

1) $\left\{ \begin{array}{l} f(x) = (1 + x)\sqrt{1 - x^2} \\ f(x) = \sqrt[3]{x^3 - x} \end{array} \right.$ si $0 \leq x \leq 1$ ; $x_0 = 1$
2) $\left\{ \begin{array}{l} f(x) = \frac{\tan x}{\sqrt{x}} \\ f(x) = \sqrt{\frac{x^2}{1 - x}} \end{array} \right.$ si $0 < x < \frac{\pi}{2}$ $x_0 = 0$
3) $\left\{ \begin{array}{l} f(x) = 1 + \sqrt[3]{x^3 - 2x^2} \\ f(x) = \frac{2}{\pi} \operatorname{Arctan} \frac{1}{\sqrt{2 - x}} \end{array} \right.$ si $x \geq 2$ $x_0 = 2$
4) $\left\{ \begin{array}{l} f(x) = \operatorname{Arctan}\left(x\sqrt{x}\right) \\ f(x) = \sqrt{|x|}\sin x^2 \end{array} \right.$ si $x \geq 0$ $x_0 = 0$
5) $\left\{ \begin{array}{l} f(x) = \sqrt[3]{\operatorname{Arctan}(1 - x)} \\ f(x) = (x^2 - 1)^{\frac{3}{4}} + 2(x - 1)^{\frac{4}{3}} \end{array} \right.$ si $x \leq 1$ $x_0 = 1$

#### DÉRIVATION ET APPROXIMATION
**Exercice 9.**
Soit $f$ la fonction définie par : $f(x) = \sqrt[3]{x^3 + 8}$

1) Justifier que $ f $ est dérivable en 0.
2) En déduire une approximation affine de l'expression $\sqrt[3]{x^3 + 8}$ au voisinage de 0.
3) Determiner une valeur approchée des nombres:

$$\sqrt[3]{8,004} \quad \text{et} \quad \sqrt[3]{7,9995}$$

**Exercice 10.**
1) Donner une approximation affine de la fonction $x \mapsto \cos x$ au voisinage de $\frac{\pi}{4}$ puis déterminer une valeur approchée au nombre $\cos(46^{\circ})$.
2) Determiner une valeur approchée à chacun des nombres $\sin (46^{\circ})$ et $\tan (46^{\circ})$.

**Exercice 11.**
1) Donner une approximation affine a chacune des expressions: $(1 + x)^{10}$ et $\frac{1}{(x + 1)^2}$ et sin x au voisinage de 0.
2) Donne une valeur approchée à chacun des nombres:

$$(1,004)^{10} \quad \text{et} \quad \frac{1}{(1,02)^2} \quad \text{et} \quad \sin(0,1^\circ)$$

#### CALCUL DE LA FONCTION DÉRIVÉE
**Exercice 12.**
Calculer les dérivées des fonctions suivantes :

$$f(x) = 4x^5 + 8x^2 - 13x + 7 \quad ; \quad g(x) = \frac{5}{\sqrt{x^4 + 1}}$$

$$h(x) = (x^2 + 5x + 4 \cos x)^7 \quad ; \quad k(x) = \frac{2x^3 + x + 2}{x^2 + x}$$

$$u(x) = (x^4 + x + 2)\sin(8x) \quad ; \quad v(x) = \sqrt[3]{x^2 + x + 4}$$

# 3

#### L'ARTICLES DE DÉFINITION
**Exercice 13.**
Pour chacun des cas suivants, étudier la dérivabilité de la fonction $f$ sur son domaine de définition puis déterminer une expression de sa dérivée :

1) $f(x) = x^4 - 2x^3 + 3x^2 + x + 55$

2) $f(x) = \frac{1}{x} + \frac{1}{x^2} + \frac{1}{x^3} + \frac{1}{x^4}$

3) $f(x) = x\sqrt{x} + \frac{x}{x-1}$ ; 4) $f(x) = \sqrt{x^2 - 3x}$

5) $f(x) = (\sqrt{x-1} + x)^3$ ; 6) $f(x) = \cos^8 x$

7) $f(x) = \frac{1}{2x+1} - \frac{1}{\sqrt{x-2}}$

8) $f(x) = \cos(3x) - \sin(6x)$

9) $f(x) = \frac{\cos x + \sin x}{\cos x - \sin x}$ ; 10) $f(x) = |x^3 - x|$

11) $\begin{cases} f(x) = \sqrt{x^2 - 4} & \text{si } x > 2 \\ f(x) = \sqrt{x^2 - x} & \text{si } x \le 2 \end{cases}$

12) $\begin{cases} f(x) = x\sin x & \text{si } x \ge 0 \\ f(x) = 1 - \cos x & \text{si } x < 0 \end{cases}$

**Exercice 14.**
Pour chacun des cas suivants, étudier la dérivabilité de la fonction $f$ sur son domaine de définition puis déterminer une expression de sa dérivée :

1) $f(x) = (x^2 + 3x)\sqrt[3]{2x}$ ; 2) $f(x) = (\sqrt[3]{x^2} - 5)^7$

3) $f(x) = \sqrt[3]{x^2 + 3x - 4}$ ; 4) $f(x) = \sqrt{\frac{x^2 + x}{x - 1}}$

5) $f(x) = -x + \sqrt[3]{2x + 1}$ ; 6) $f(x) = \sqrt[3]{(x - 2)^3}$

7) $f(x) = \frac{4\sqrt[3]{x}}{x\sqrt[3]{x + 1}}$ ; 8) $f(x) = x\sqrt[3]{\frac{x + 2}{x - 2}}$

9) $f(x) = \frac{1}{\sqrt[3]{x^2 - 2x}}$ ; 10) $f(x) = \sqrt{\frac{x}{x^2 + 3}}$

**Exercice 15.**
Calculer les dérivées des fonctions suivantes :

$f(x) = \left(x^{\frac{1}{3}} - x^{\frac{2}{3}}\right)^{\frac{3}{2}}$ ; $g(x) = \sqrt[3]{x^2} + (x - 1)$

$h(x) = |4x - 2|^{\frac{1}{3}}$ ; $k(x) = x^{\frac{2}{3}} - \sqrt[3]{x^2 + 1}$

**Exercice 16.**
1) Montrer que la fonction $f$ définie sur $\mathbb{R}^+$ par :

$f(x) = \sin(x\sqrt{x})$

est dérivable sur $\mathbb{R}^+$ puis déterminer sa dérivée.

2) Étudier la dérivabilité de la fonction $g$ définie par $g(x) = \cos(\sqrt{x^2 - x})$ sur son domaine de définition puis déterminer sa dérivée.

**Exercice 17.**
Calculer les dérivées des fonctions suivantes après avoir déterminé leurs domaines de définition :

1) $f(x) = \cos(3x + 4\sqrt{x})$ ; 2) $f(x) = \frac{3\sin x - 1}{\sin x - 1}$

3) $f(x) = \left(\frac{x + 1}{x^2 + 3x + 7}\right)^3$ ; 4) $f(x) = \sqrt{x^2 + x^2}$

5) $f(x) = \cos\left(\frac{2x + 1}{3x - 2}\right)$ ; 6) $f(x) = \sin\left(\frac{1 + x}{1 + x^2}\right)$

7) $f(x) = \cos(3x + 1) \cdot \sin(2x - 1)$

8) $f(x) = \sin(\cos x)$ ; 9) $f(x) = x^2 \tan\left(\frac{1}{x}\right)$

**Exercice 18.**
Calculer les dérivées des fonctions suivantes après avoir déterminé leurs domaines de définition :

1) $f(x) = \sin\left(\cos\left(\frac{\pi}{4} - x\right)\right)$

2) $f(x) = \sqrt{2 + \sin\left(x + \frac{1}{x}\right)}$

3) $f(x) = \sqrt[3]{1 + \tan^{-1}(\sqrt[3]{x})}$
**Exercice 19.**
calculer les dérivées des fonctions suivantes après
pour déterminer leurs domaines de définition :
1) $$f(x) = x^4 \text{Arc tan } x$$ ; 2) $$f(x) = x \text{Arc tan } \sqrt{x}$$
3) $$f(x) = \sqrt[4]{\text{Arc tan } x}$$ ; 4) $$f(x) = \sqrt{x + \text{Arc tan } x}$$
5) $$f(x) = \frac{\text{Arc tan } x}{\sqrt{x}}$$ ; 6) $$f(x) = \text{Arc tan } \left( \frac{2x}{1 - x^2} \right)$$
7) $$f(x) = (\text{Arc tan } (\sin x))^4 + (\text{Arc tan } x - x)^3$$
9) $$f(x) = 3 \text{Arc tan } \left( \frac{x-1}{x+1} \right) + 2x \text{Arc tan } \left( \frac{1}{x+1} \right)$$
**Exercice 20.**
Soit $$f$$ la fonction définie sur $$\mathbb{R}$$ par : $$f(x) = (2x^3 - 1)^4$$
1) Calculer $$f'(x)$$ pour tout $$x \in \mathbb{R}$$.
2) En utilisant la formule donnant la dérivée de la
fonction composée, en déduire les dérivées des
fonctions suivantes :
$$g(x) = f(\cos x)$$ ; $$h(x) = f\left(\sqrt[3]{6x+1}\right)$$
$$k(x) = f\left(\frac{2}{\sqrt{x}}\right)$$ ; $$s(x) = f\left(\tan \frac{\pi}{x}\right)$$
$$u(x) = f\left(\sqrt[4]{x}\right)$$ ; $$v(x) = f\left((\text{Arc tan } x)^4\right)$$

#### DÉRIVATION ET CALCUL DES LIMITES
**Exercice 21.**
1) Montrer que la fonction $$f : x \mapsto (2x - 1)^{15}$$ est
dérivable sur $$\mathbb{R}$$ puis calculer la limite :

$$\lim_{x \to 1} \frac{(2x - 1)^{15} - 1}{x - 1}$$

2) On considère la fonction $$g : x \mapsto 3 \cos^2 x - \sin^2 x$$.
Calculer $$g'(x)$$ pour tout $$x \in \mathbb{R}$$ puis calculer la

limite : $$\lim_{x \to \frac{\pi}{3}} \frac{3 \cos^2 x - \sin^2 x}{3x - \pi}$$

**Exercice 22.**
En utilisant le nombre dérivé, calculer les limites
suivantes :

$$\lim_{x \to 0} \frac{x^4 - 625}{x - 5} ; \lim_{x \to 0} \frac{(1+x)^{10} - 1}{x} ; \lim_{x \to 0} \frac{\sqrt[3]{x+8} - 2}{x}$$

$$\lim_{x \to 0} \frac{\sqrt{x+3} - \sqrt[3]{4x+3}}{x - 3} ; \lim_{x \to \pi} \frac{x + \sin^2 x - \pi}{x - \pi}$$

$$\lim_{x \to \frac{\pi}{3}} \frac{4 \cos^2 x - 1}{x - \frac{\pi}{3}} ; \lim_{x \to \frac{\pi}{6}} \frac{\sqrt[3]{7 - 4 \sin x} - \sqrt[3]{5}}{x - \frac{\pi}{6}}$$

$$\lim_{x \to 0} \frac{x - \sin x}{\tan x - x} ; \lim_{x \to \frac{\pi}{4}} \frac{2 \cos x - \sqrt{2}}{\tan x + 1} ; \lim_{x \to 1} \frac{x \sin(x - 1)}{(2 - x)^n - 1}$$

$$\lim_{x \to 0} \frac{\sqrt{x^{12} + 1} - \cos(x)}{x} ; \lim_{x \to \frac{\pi}{4}} \frac{\sin x - \cos x}{\sin x + \cos x - \sqrt{2}}$$

$$\lim_{x \to \frac{\pi}{4}} \frac{2 \cos x - \sqrt{2}}{\tan^2 x - 1} ; \lim_{x \to 1} \frac{1 - x}{1 - \sqrt{1 - \cos\left(\frac{\pi}{2} x\right)}}$$

**Exercice 23.**
Soit $$n$$ un entier naturel non nul. En utilisant le nombre
dérivé, calculer les limites suivantes : $$(a \in \mathbb{R}^n)$$

$$\lim_{x \to a} \frac{x^n - a^n}{x - a} ; \lim_{x \to 0} \frac{\cos^n x - 1}{x} ; \lim_{x \to 0} \frac{(1+x)^n - 1}{x}$$
$$\lim_{x \to a} \frac{\sqrt[3]{x+a} - \sqrt[3]{a}}{x - a} ; \lim_{x \to a} \frac{x\sqrt{x} - a\sqrt{a}}{x - a}$$

**Exercice 24.**
Soit $$a$$ un réel quelconque.

1) Montrer que: $\lim_{x \to a} \frac{\text{Arc tan } x - \text{Arc tan } a}{x - a} = \frac{1}{1 + a^2}$
2) En déduire les valeurs des limites suivantes:

$$\lim_{x \to 1} \frac{\text{Arc tan } x - \frac{\pi}{4}}{x - 1} ; \lim_{x \to \sqrt{3}} \frac{\text{Arc tan } x - \frac{\pi}{3}}{x - \sqrt{3}}$$

$$\lim_{x \to \frac{\sqrt{3}}{3}} \frac{\text{Arc tan } x + \frac{\pi}{6}}{3x + \sqrt{3}} ; \lim_{x \to -1} \frac{4 \text{Arc tan } x + \pi}{x + 1}$$

#### DERIVATION ET MONOTONIE
#### DÉRIVATION ET MONOTONIE
**Exercice 25.**
Le dessin suivant présente la courbe d'une fonction $f$ sur l'intervalle $[-3; 3]$ :

1) Résoudre l'équation $ f'(x) = 0 $.
2) Determiner les limites suivantes:

$$\lim_{x \to -2} \frac{f(x) - f(-2)}{x + 2} \quad ; \quad \lim_{x \to 2} \frac{f(x)}{x - 2}$$

3) a) Résoudre dans $[-3; 3]$ l'inéquation: $ f'(x) \geq 0 $
b) Dresser le tableau de variations de $ f $.
4) Donner l'équation de la tangente à la courbe $\mathcal{C}_f$ aux points d'abscisses let 2.

**Exercice 26.**
Pour chacune des fonctions suivantes, calculer $f'(x)$ puis dresser le tableau de variations sur $I$ :

1) $f(x) = x^4 - 4x$ $I = \mathbb{R}$
2) $f(x) = \sqrt{x^2 + 1} - x$ $I = \mathbb{R}$
3) $f(x) = \sqrt[3]{x^3 - 3x^2 + 8}$ $I = \mathbb{R}$
4) $f(x) = 6x - 4x\sqrt[3]{x} +1$ $I = \mathbb{R}$
5) $f(x) = 2\sin x + \cos (2x)$ $I = ] - \pi ;\pi ]$
6) $f(x) = \frac{\tan x - 1}{\tan x + 1}$ $I = \left] - \frac{\pi}{4};\frac{\pi}{2}\right[$
7) $f(x) = \operatorname{Arctan}\left(x - 2\sqrt{x}\right)$ $I = \mathbb{R}$

**Exercice 27.**
On considère la fonction $f$ définie sur $[-1; +\infty[$ par $f(x) = x - \sqrt[3]{x + 1}$

1) Vérifier que $ f\left(\frac{\sqrt{3}}{9} - 1\right) = \frac{-2\sqrt{3}}{9} - 1 $ puis calculer $ \lim_{x \to \infty} f(x) $.
2) Etudier la dérivabilité à droite de $ f $ en-1 puis interpréter graphiquement le résultat obtenu.
3) Calculer $ f'(x) $ pour tout $ x \in ]-1; +\infty[ $ puis dresser le tableau des variations de $ f $.

#### DÉRIVABILITÉ DE LA FONCTION RÉCIPROQUE
**Exercice 28.**
Soit $f$ la fonction définie sur $I = ]-\infty; 2]$ par :

$$f(x) = \sqrt{2-x} - x$$

1) Montrer que $ f $ réalise une bijection de $ I $ sur un intervalle $ J $ à déterminer.
2) Soit $ f^{-1} $ la fonction réciproque de la fonction $ f $. Montré que $ f^{-1} $ est dérivable sur $ ] - 2; +\infty[ $ puis calculer $ (f^{-1})^{\prime}(0) $.

**Exercice 29.**
On considère la fonction $g$ définie sur $[1; +\infty[$ par :

$$g(x) = x - 3 + \sqrt{x^2 - x}$$

1) Etudier la dérivabilité de la fonction $ g $ à droite en puis interpréter le résultat géométriquement.
2) Etudier les variations de la fonction $ g $.
3) a) Montrer que $ g $ admet une fonction réciproque dont on déterminera le domaine de définition b) Montrer que $ g^{-1} $ est dérivable en $ (\sqrt{2} - 1) $ puis calculer $ (g^{-1})'(\sqrt{2} - 1) $.

**Exercice 30.**
Suit f la fonction définie sur l'intervalle $I = \left[0; \frac{\pi}{2}\right]$
par: $f(x) = \cos(2x)$
1) Montrer que $f$ est une bijection de $I$ sur $J = [-1; 1]$.
2) Montrer que la fonction réciproque $f^{-1}$ est dérivable sur $]-1; 1[$ puis déterminer $(f^{-1})'(0)$.
3) Montrer que: $(\forall x \in ]-1; 1[)$ $(f^{-1})'(x) = \frac{-1}{2\sqrt{1-x^2}}$
**Exercice 32.**
Soit f la fonction numérique définie sur $\mathbb{R}$ par:
$f(x) = x^3 - 3x - 3$

1) Etudier les variations de la fonction $ f $.
2) Soit $ g $ la restriction de $ f $ sur $ [1, +\infty[ $.
a) Montrer que $ g $ admet une fonction reciproque définie sur un intervalle $ J $ à déterminer.
b) Montrer que l'équation $ g(x) = 0 $ admet une unique solution $ \alpha $ et que $ 2 < \alpha < 3 $.
c) Montrer que: $\left(g^{-1}\right)'(0) = \frac{1}{3\left(\alpha^2 - 1\right)}$

Suit f la fonction définie sur $I = \left[\frac{\pi}{2}; \pi\right]$ par:

$$f(x) = 1 + \frac{1}{\sin x}$$

1) Etudier les variations de la fonction $ f $.
2) En déduire que la fonction $ f $ admet une fonction réciproque sur un intervalle $ J $ à déterminer.
3) Montrer que pour tout $ x \in I $:

$$f'(x) = (f(x)-1)\sqrt{(f(x))^2 - 2f(x)}$$

4) Montrer que $f^{-1}$ est dérivable sur $]2; +\infty[$ et que:

$$(\forall x \in ]2; +\infty[)$ $(f^{-1})'(x) = \frac{1}{(x-1)\sqrt{x^2 - 2x}}$$
**Exercice 33.**
Soit f une fonction dérivable sur un intervalle I. On suppose que f est strictement monotone sur I.
Montrer que si $x_0 \in I$ et $y_0 = f(x_0)$ avec $f'(x_0) \neq 0$, alors l'équation de la tangente à la courbe $\mathcal{C}_{f'}$, de $f^{-1}$ au point d'abscisse $M(y_0, x_0)$ est donnée par:

$$y = \frac{1}{f'(x_0)}x + x_0 - \frac{f(x_0)}{f'(x_0)}$$

**Exercice 34.**
Soit g la fonction définie sur $\mathbb{R}$ par:

$$\begin{cases} g(x) = 4x\sqrt[3]{x} & \text{si } x > 0 \\ g(x) = -\frac{2x}{\sqrt[3]{1-x}} & \text{si } x \leq 0 \end{cases}$$

1) Etudier la derivabilité à gauche et à droite de la fonction $ g $ au point $ x_0 = 0 $ puis interpréter graphiquement les résultats obtenus.
2) Etudier les variations de la fonction $ g $.
3) Soit $ h $ la restriction de $ g $ sur $ \mathbb{R}^+ $.

a) Montrer que $ h $ est une bijection de $ \mathbb{R}^+ $ sur un intervalle $ I $ à déterminer.
b) Etudier la derivabilité de la fonction $ h^{-1} $ sur $ I $ puis calculer $ (h^{-1})'(7) $.

#### THÉORÈME DE ROLLE ET ACCROISSEMENTS FINIS
**Exercice 35.**
Dans chacun des cas suivants, montrer que la fonction f vérifie les conditions du théorème de Rolle sur I puis déterminer un nombre réel c de I vérifiant $f'(c) = 0$:

1) $ f(x) = x^{3} - 6x^{2} + 11x - 6 $ $ I = [1;3] $
2) $ f(x) = x - \sqrt[3]{4x} + 2017 $ $ I = [0;2] $
3) $ f(x) = \pi x - 3\sqrt{3} $ Arc tan $ x + 1 $ $ I = [0; \sqrt{3}] $

# 3

### Exercices de perfectionnement
**Exercice 36.**
Soit $f$ la fonction définie par : $f(x) = x^2 - 4x$
On considère les points $A(1, -1)$ et $B(4, 0)$ de la courbe $\mathcal{C}_r$ de $f$. Déterminer le point $M(\alpha, f(\alpha))$ tel que la tangente à la courbe $\mathcal{C}_r$ au point $M$ soit parallèle à la droite $(AB)$.

**Exercice 37.**
On considère la fonction $g$ définie sur $\mathbb{R}$ par :

$$g(x) = |x| - 2\sqrt{|x|}$$

1) Justifier la continuité de $ g $ sur $ \mathbb{R} $.
2) Determiner $ g'(x) $ sur les intervalles $ \mathbb{R}^* $, et $ \mathbb{R}^* $.
3) Verifier que: $ g\left(-\frac{1}{4}\right) = g\left(\frac{1}{4}\right) $
4) Montrer que: $\left(\forall x\in \right] - \frac{1}{4};\frac{1}{4}\bigg[\backslash \{0\} \bigg]g'(x)\neq 0$
5) Montrer que: $\left(\exists c\in \right] - \frac{1}{4};2\left[\right]$; $g^{\prime}(c) = 0$

**Exercice 38.**
On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$f(x) = (x^2 - 1)(x - 2)^4 (x + 3)^2 (x + 4)^2$$

Montrer que l'équation $f'(x) = 0$ admet au moins quatre solutions dans $\mathbb{R}$.

**Exercice 39.**
On considère la fonction $f$ définie sur $[0; 1]$ par :

$$\begin{cases} f(x) = x \sin\left(\frac{\pi}{x}\right) \text{ si } x \in ]0; 1] \\ f(0) = 0 \end{cases}$$

1) Soit $n$ un entier naturel non nul.

Montre qu'il existe un élément $c_n \in \left]\frac{1}{n+1}, \frac{1}{n}\right[$ tel que : $f'(c_n) = 0$

2) En déduire que l'équation $\tan x = x$ admet une infinité de solutions dans $\mathbb{R}$.

**Exercice 40.**
Soit $f$ la fonction définie par : $f(x) = \sin x - x^2$

1) Montrer que: $\left(\exists a\in \left]\frac{\pi}{4};\frac{\pi}{2}\right[\right);f(a) = 0$
2) En déduire que l'équation $\cos (x) - 2x = 0$ admits une solution sur $\mathbb{R}$.

Cette solution est-elle unique ? Justifier.

**Exercice 41.**
Soit $f$ une fonction dérivable sur un intervalle $I$ de $\mathbb{R}$.
Soit $x_1, x_2$ et $x_3$ trois éléments distincts de $I$ tels que :

$$2f(x_2) = f(x_1) + f(x_2)$$

Montrer que : $(\exists c \in I) ; f'(c) = 0$

**Exercice 42.**
Soit $f$ une fonction continue sur $[a, b]$ et deux fois dérivable sur $]a, b[$ tel que :

$$f(a) = f(b) = 0 \text{ et } f^*(x) \neq 0 \text{ pour tout } x \in ]a, b[$$

Montrer par l'absurde que : $(\forall x \in ]a, b[)$ $f(x) \neq 0$

**Exercice 43.**
Montrer que pour tout $n \in \mathbb{N}^*$ et $r \in ]0; 1[ \cap \mathbb{Q} \text{ ou } x$ :

$$\frac{r}{(n+1)^{1-r}} \leq (n+1)^r - n^r \leq \frac{r}{n^{1-r}}$$

Indication : On pourra appliquer le théorème des accroissements finis à la fonction $f : x \mapsto x^r$

**Exercice 44.**
En utilisant le théorème des accroissements finis, montrer les inégalités suivantes :

1) $(\forall (x,y)\in \mathbb{R}^2)$ $|\sin x - \sin y|\leq |x - y|$
2) $(\forall x\in \mathbb{R}^{\prime})$ $\frac{x}{1 + x^2} <  \mathrm{Arc}\tan x <   x$
3) $(\forall (x,y)\in [0;10]^2)$ $|x\sin x - y\sin y|\leq 1|\| x - y|$
4) $\left(\forall x\in \left]0;\frac{\pi}{4}\right[\right)$ $\sin x\geq \frac{\sqrt{2}}{2} x$
**Exercice 45.**
2) Soit $a$ et $b$ deux réels tels que $0 < a < b < \frac{\pi}{2}$.
Montrer que: $\frac{b-a}{\cos^2 a} < \tan b - \tan a < \frac{b-a}{\cos^2 b}$

3) Soit $f$ la fonction définie sur $]-\infty; \frac{5}{3}]$ par:
$f(x) = \sqrt[3]{5-3x} + x-2$
Montrer que pour tout $a, b \in ]-1; \frac{4}{3}[$ :

$|f(b) - f(a)| < \frac{3}{4} |b-a|$
2) Soit $g$ la fonction définie par: $g(x) = x \text{ Arc tan } x$
Montrer que:

$(\forall (a,b) \in \mathbb{R}^2) |g(b) - g(a)| \le 3 |b-a|$
4) Etablir l'inégalité suivante:
$(\forall (a,b) \in \mathbb{R}^2) |\text{Arc tan } a - \text{Arc tan } b| \le |b-a|$
**Exercice 46.**
En utilisant le théorème des accroissements finis,
établir les inégalités suivantes:

$$\frac{\sqrt{2}}{2} < \sin 50' < \frac{\sqrt{2}}{2} + \frac{\pi}{36} \quad ; \quad |\sin 80' - 1| \le \frac{\pi}{36}$$
**Exercice 47.**
On considère la fonction $f$ définie par: $f(x) = \sqrt[x]{x}$

1) Montrer que pour tout $x \in [1000; 1001]$ :

$$\frac{1}{3 \times (10,1)^2} \le f'(x) \le \frac{1}{3 \times 10^2}$$

2) En déduire que: $10,0032 < \sqrt[3]{1001} < 10,0034$
**Exercice 48.**
Soit $f$ une fonction continue sur $[0; 1]$ et dérivable sur
$f(0) = 0$ et $f(1) = 1$
Montrer qu'il existe au moins un réel $c \in ]0; 1[$ tel que:

$$f'(c) = \frac{1}{2\sqrt{c}}$$

**Exercice 49.**
Soit $f$ la fonction définie sur $\mathbb{R}^1$ par: $f(t) = \sqrt[t]{t}$

1) Soit $x$ un réel strictement positif.

a) Montrer que pour tout $t \in [x, x+1]$ :

$$\frac{1}{2\sqrt{x+1}} \le f'(t) \le \frac{1}{2\sqrt{x}}$$

b) En déduire que pour tout $x \in \mathbb{R}^*$, :

$$\frac{1}{2\sqrt{x+1}} \le \sqrt{x+1} - \sqrt{x} \le \frac{1}{2\sqrt{x}}$$

2) On considère la suite numérique $(u_n)_{n=1}$ définie

par: $u_n = 1 + \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{3}} + ... + \frac{1}{\sqrt{n}}$

Montrer que la suite $(u_n)_{n=1}$ est divergente.

**Exercice 50.**
Soit $f$ une fonction continue sur un segment $[a, b]$ et
dérivable sur $[a, b[$ telle que: $f(b) = 0$ et $f'_a(a) = 0$
En considérant la fonction $g$ définie sur $[a, b]$ par:

$$g(x) = \frac{f(x)}{x-a} \text{ si } x \neq a \text{ , et } g(a) = 0$$

Montrer que: $(\exists c \in ]a, b[)$ ; $\frac{f(c)}{c-a} = f'(c)$

#### CONCAVITÉ ET POINTS D'INFLEXION
**Exercice 51.**
Dans chacun des cas suivants, étudier la concavité de
de la courbe $\mathcal{C}$, de $f$ en déterminant ses éventuels
points d'inflexion :

1) $ f(x) = \frac{x}{x^2 + 1} $; 2) $ f(x) = \frac{2x - 1}{x + 2 - x^2} $
3) $ f(x) = \frac{\sqrt{x}}{(x - 1)^2} $; 4) $ f(x) = 3x + \frac{1}{\sqrt{x^2 + 1}} $
5) $ f(x) = -\cos^2 x - 2\sin x $; 6) $ f(x) = \frac{\sin^2 x}{\cos(2x)} $
7) $ f(x) = x - \operatorname{Arc} \tan x $; 8) $ f(x) = (x - 1)^{\frac{2}{3}} $

DÉTERMINER

#### AXE DE SYMÉTRIE - CENTRE DE SYMÉTRIE
**Exercice 54.**
Dans chacun des cas suivants, montrer que la droite (Δ) est un axe de symétrie de la courbe $\mathcal{C}_f$ de $f$ :

1) $f(x) = \sqrt{x^2 - 4x + 1}$ et (A): $x = 2$
2) $f(x) = \sin^4 x - 5\cos^2 x + 7$ et (A): $x = \frac{\pi}{2}$
3) $f(x) = \operatorname{Arctan}\left(\sqrt{x^2 + 4x}\right)$ et (A): $x = -2$
4) $f(x) = \frac{2 - \sin^4 x}{\cos x + 3}$ et (A): $x = 0$

**Exercice 55.**
Dans chacun des cas suivants, montrer que le point Ω est un centre de symétrie de la courbe $\mathcal{C}_f$ de $f$ :

1) $f(x) = \frac{3x^2 + 8x + 4}{x + 1}$ et $\Omega (-1,2)$
2) $f(x) = \sqrt{3}\cos (2x) + \sin (2x)$ et $\Omega \left(\frac{\pi}{3},0\right)$
3) $f(x) = \frac{\sin x}{\sin x + \cos x}$ et $\Omega \left(\frac{\pi}{4},\frac{1}{2}\right)$

#### ÉTUDE DES FONCTIONS NUMÉRIQUES
**Exercice 56.**
Étudier puis représenter graphiquement la fonction $f$ dans chacun des cas suivants :

1) $f(x) = \frac{\sqrt{x}}{x - 1}$; 2) $f(x) = \operatorname{Arctan}(2x) - x$
3) $f(x) = \frac{\sin x.\cos x}{1 - \cos(4x)}$; 4) $f(x) = \frac{x^2 - 3x + 2}{(x + 1)^2}$
5) $f(x) = \sqrt[3]{x^2} +\sqrt[3]{x} -x$ 6) $f(x) = \sqrt[3]{1 - x} -1$
7) $f(x) = \frac{x}{\sqrt{x + 2} - 1}$; 8) $f(x) = \sqrt{x^2 - |x| + 1}$
9) $f(x) = \tan x - \frac{1}{\cos x}$; 10) $f(x) = (4 - x)^{\frac{3}{2}}$

#### LES FONCTIONS PRIMITIVES
**Exercice 57.**
Dans chacun des cas suivants, Déterminer une primitive de la fonction $f$ ainsi les intervalles où elle est définie :

1) $f(x) = x^{2} + \sqrt{x} +\sqrt{x}$ 2) $f(x) = \frac{1}{x^2} +\frac{3}{x^2}$
3) $f(x) = \frac{x}{\sqrt{x^2 + 1}}$; 4) $f(x) = x\sqrt{x^2 + 1}$
5) $f(x) = \frac{1}{x^2}\left(\frac{1}{x} - 1\right)^3$ 6) $f(x) = \sqrt{x + 1}$
7) $f(x) = x\sqrt{x^2 - 1}$; 8) $f(x) = \frac{x^2}{1 + x^2}$
9) $f(x) = \left(x - \frac{3}{2}\right)\sqrt{x^2 - 3x + 8}$
10) $f(x) = \sin x.\cos^3 x$ 11) $f(x) = \sin x.\sin 2x$
12) $f(x) = \frac{x}{(x^2 + 3)\sqrt{x^2 + 3}} +\frac{x^2}{\sqrt{x^2 - 1}}$
13) $f(x) = \sin x.\cos x.\sqrt{1 - \cos 2x}$
14) $f(x) = \sin x.\cos 2x$ 15) $f(x) = \cos^4 x$
16) $f(x) = \sin^3 x$ 17) $f(x) = \tan^2 x$
18) $f(x) = \frac{5}{x^2 + 6x + 10}$; 19) $f(x) = 1 + \frac{1}{\tan^2 x}$
20) $f(x) = \frac{1}{(2x + 1)^2} -\frac{1}{(x - 1)^2} +\frac{x + 1}{(x^2 + 2x + 7)}$
21) $f(x) = \frac{\operatorname{Arctan}x}{1 + x^2}$; 22) $f(x) = \frac{\sin x}{1 + \cos^2 x}$
23) $f(x) = \frac{x^2 - x + 1}{(1 + x^2)^2}$; 24) $f(x) = \frac{1}{\sqrt{x(1 + x)}}$
25) $f(x) = \frac{\sin x - x\cos x}{x^2}$; 26) $f(x) = \frac{x}{\sqrt{x + 1}}$
27) $f(x) = 3\cos \frac{x}{2} -5\sin \frac{2x}{3} +\sin \left(2x + \frac{x}{3}\right)$

**Exercice 58.**
On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par : $f(x) = \sqrt[3]{x^2} - \sqrt[3]{(x-1)^2}$

1) Étudier la dérivabilité de $f$ en 1 puis interpréter les résultats obtenus graphiquement.

2) a) Montrer que le point $I\left(\frac{1}{2}, 0\right)$ est un centre de

symétrie de la courbe $\mathcal{C}_f$ de $f$.

b) Montrer que $f$ est dérivable sur chacun des inter-

valles $J = \left[\frac{1}{2}; 1\right]$ et $J' = ]1; +\infty[$ et étudier les va-

riations de $f$ sur chacun des intervalles $J$ et $J'$.

c) Montrer que le point $I$ est un point d'inflexion de la courbe $\mathcal{C}_f$.

3) a) Déterminer la nature de la branche infinie de $\mathcal{C}_f$ au voisinage de $+\infty$.

b) Tracer la courbe $\mathcal{C}_f$.

**Exercice 59.**
On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$\left\{ \begin{array}{l} f(x) = \sqrt{1+x^2} - 2x - 1 \quad \text{si } x \ge 0 \\ f(x) = x + \frac{\pi}{2} + \text{Arctan} \frac{1}{x} \quad \text{si } x < 0 \end{array} \right.$$

1) a) Montrer que $f$ est continue en 0.

b) Montrer que $f$ est dérivable à droite en 0.

c) Étudier la dérivabilité à gauche de la fonction $f$

en 0 (On pourra poser : $t = \frac{\pi}{2} + \text{Arctan} \frac{1}{x}$)

d) $f$ est-elle dérivable en 0 ? Interpréter graphique-

ment les résultats obtenus.

2) Étudier les branches infinies de la courbe $\mathcal{C}_f$ de $f$.

3) Étudier les variations de la fonction $f$ sur chacun des

intervalles $]-\infty; 0[$ et $[0; +\infty[$.

4) Soit $g$ la restriction de $f$ à $I = [0; +\infty[$.

a) Montrer que $g$ réalise une bijection de $I$ sur un intervalle $J$ à déterminer.

b) Calculer $g^{-1}(x)$ pour tout $x \in J$.

c) Calculer $(g^{-1})'(-1)$ puis tracer $\mathcal{C}_f$ et $\mathcal{C}_{g^{-1}}$.

**Exercice 60.**
On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$\left\{ \begin{array}{l} f(x) = \text{Arctan} x - \frac{1}{\text{Arctan} x} \quad \text{si } x > 0 \\ f(0) = -1 \\ f(x) = \frac{\sqrt[3]{1-6x} + x - 1}{x} \quad \text{si } x < 0 \end{array} \right.$$

1) $f$ est-elle continue en 0 ? Justifier votre réponse.

2) Étudier la dérivabilité à gauche de la fonction $f$ en 0 puis interpréter le résultat obtenu.

3) Étudier les branches infinies de la courbe $\mathcal{C}_f$ de $f$.

4) a) Résoudre dans $\mathbb{R}$ l'équation $f(x) = 0$.

b) Étudier les variations de la fonction $f$.

c) Tracer la courbe $\mathcal{C}_f$.

5) Soit $g$ la restriction de $f$ sur $I = ]0; +\infty[$.

a) Montrer que $g$ réalise une bijection de $I$ sur un intervalle $J$ à déterminer puis tracer $\mathcal{C}_{g^{-1}}$.

b) Calculer $g^{-1}(x)$ pour tout $x \in J$.

**Exercice 61.**
On considère la fonction numérique $f$ définie par :

$$f(x) = \frac{\tan x}{1 - 2\sin x}$$

1) Déterminer $D$ le domaine de définition de $f$.

2) a) Montrer que le point $I\left(\frac{\pi}{2}, 0\right)$ est un centre de

symétrie de la courbe $\mathcal{C}$, et qu'il suffit d'étudier

la fonction $f$ sur $\mathbb{R} = \begin{bmatrix} \frac{\pi}{2} & \frac{3\pi}{6} \\ \frac{1}{2} & \frac{1}{6} \end{bmatrix} = \begin{bmatrix} \frac{3\pi}{6} & \frac{3\pi}{2} \end{bmatrix}$.

b) Calculer les limites de $f$ aux bornes de $\mathbb{R}$.

c) Étudier les variations de $f$ sur chacun des intervalles de $\mathbb{R}$.

3) Tracer la courbe $\mathcal{C}$, sur $[-\pi, \pi] \cap D$.

# **Première partie :**

# **Première partie :**

On considère la fonction $g$ définie sur $\mathbb{R}^2$ par :

$$g(x) = 2x^3 - 5x^2 = 3$$

1) Étudier les variations de la fonction $g$.

2) Montrer que l'équation $g(x) = 0$ admet une solu-

tion $\alpha$ puis vérifier que $\frac{5}{2} < \alpha < 3$.

3) Déterminer le signe de $g(x)$ sur $\mathbb{R}^2$.

# **Deuxième partie :**

On considère la fonction $h$ définie sur $]-\infty, 0[$ par :

$$h(x) = 2 \text{Arctan} \frac{1}{x} - \frac{x-1}{x^2+1}$$

1) Donner le tableau de variations de $h$.

2) Déterminer le signe de $h(x)$ sur $]-\infty, 0[$.

3) a) En utilisant le théorème des accroissements finis,

montrer que : $(\forall t \in \mathbb{R}^2) \text{ } t \le \text{Arctan } t \le \frac{t}{1+t^2}$

b) En déduire que : $\lim_{t \to 0} \frac{\text{Arctan } t-t}{t} = 0$

# **Troisième partie :**

On considère la fonction $f$ définie sur $\mathbb{R} - \{1\}$ par :

$$\begin{cases} f(x) = (x-1)^2 \text{Arctan} \left(\frac{1}{x}\right) + \frac{\pi}{2} \text{ si } x < 0 \\ f(x) = \frac{x}{x-1} (1+x^2)^{\frac{1}{2}} \text{ si } x \ge 0 \text{ et } x \neq -1 \end{cases}$$

Et soit $\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O, \bar{i}, \bar{j})$.

1) Calculer les limites suivantes :

$$\lim_{x \to \infty} f(x), \lim_{x \to 0} f(x), \lim_{x \to \infty} f(x), \lim_{x \to \infty} f(x)$$

2) Montrer que la fonction $f$ est continue en $0$.

3) Étudier la dérivabilité à droite de la fonction $f$ en

0 et interpréter le résultat géométriquement.

4) Montrer que : $\lim_{x \to 0} \frac{f(x)}{x} = \pi - 1$ puis donner une interprétation géométrique de ce résultat.

5) a) Montrer que :

$$(\forall x \in \mathbb{R}^2) \quad f'(x) = \frac{g(x)}{3(x-1)^2(x^2+1)^2}$$

$$(\forall x \in \mathbb{R}^2) \quad f'(x) = (x-1)h(x)$$

b) Dresser le tableau de variations de $f$.

6) a) En posant $t = \frac{1}{x}$, montrer que :

$$\lim_{x \to \infty} \left[ f(x) - \left(x - 2 + \frac{\pi}{2}\right) \right] = 0$$

b) Étudier les branches infinies de la courbe $\mathcal{C}$.

7) Tracer la courbe $\mathcal{C}$ (On prend : $f(\alpha) = 3, 2$)

8) Soit $u$ la restriction de $f$ à $\mathbb{R}^2$.

a) Montrer que $u$ réalise une bijection de $\mathbb{R}^2$ sur intervalle $J$ à déterminer.

b) Montrer que $u^{-1}$ est dérivable sur $J$ et détemi-

$$\text{ner} \left(u^{-1}\right)^2 \left(-\frac{\pi}{2}\right).$$

On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$\begin{cases} f(x) = -2x \text{Arctan } x \text{ si } x \le 1 \\ f(x) = \sqrt{x^2-1} \text{Arctan } x + \text{Arctan } \sqrt{x^2-1} - \frac{\pi}{2} \text{ si } x \ge 1 \end{cases}$$

1) a) Montrer que la fonction $f$ est continue en $1$.

b) Étudier la dérivabilité à droite et à gauche de la fonction $f$ en $1$ puis donner une interprétation géométrique des résultats obtenus.

2) Calculer $f'(x)$ et $f''(x)$ et $f'(0)$ puis donner le

tableau de variation de la fonction $f'$.
( $\forall x > 0$ ) $\text{Arc tan } x + \text{Arc tan } \frac{1}{x} = \frac{\pi}{2}$
( $\forall x < 0$ ) $\text{Arc tan } x + \text{Arc tan } \frac{1}{x} = -\frac{\pi}{2}$
( $\forall x < 0$ ) $\text{Arc tan } x + \text{Arc tan } \frac{1}{x} = -\frac{\pi}{2}$
1) Montrer que la droite $(\Delta): y = \frac{\pi}{2} x - 1$ est une asymptote de la courbe $\mathcal{C}_f$ au voisinage de $+\infty$, et la droite $(\Delta'): y = \pi x + 2$ est une asymptote de la courbe $\mathcal{C}_f$ au voisinage de $-\infty$.
2) Tracer la courbe $\mathcal{C}_f$ dans un repère orthonormé.
3) On considère l'équation $f(x) = x$. Déterminer la solution $\alpha$ de cette équation dans $\mathbb{R}^+$.
4) On considère une suite $(u_n)$ définie par :
$\alpha < u_n < 0$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$.
5) Montrer que : $(\forall n \in \mathbb{N}) \ \alpha < u_n < 0$
6) Montrer que $(u_n)$ est convergente et déterminer sa limite.

**Exercice 62.**
On considère la fonction $f$ définie sur $I = [0; 8]$ par :

$$f(x) = \sqrt{\left(4 - \sqrt[3]{x^2}\right)^3}$$

1) Montrer que $\lim_{x \to 0} \frac{f(x) - 8}{x} = -\infty$ et interpréter

g) numétriquement le résultat obtenu.

2) Montrer que $f$ est strictement décroissante sur $I$.
3) Montrer que $f$ est bijective de $I$ vers $I$.

4) Soyez la courbe de $f$ et $\mathcal{C}$ celle de $f^{-1}$ dans un

a) Montrer que la droite $(\Delta): y = x$ est un axe de symétrie pour la courbe $\mathcal{C}$.
b) En déduire une expression de $f^{-1}(x)$ en fonction de $x$ puis calculer $\lim_{x \to 0} \frac{f(x)}{x - 8}$ et interpréter géométriquement le résultat obtenu.

3) Tracer dans le même repère les courbe $\mathcal{C}$ et $\mathcal{C}'$.

4) Soit $(x_n)$ la suite numérique définie par :

$$\begin{cases} x_0 = 2\sqrt{2} \\ x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \text{ si } n \in \mathbb{N} \end{cases}$$

a) Montrer que : $(\forall n \in \mathbb{N}) \ 2\sqrt{2} \le x_n \le 8$

b) Étudier la monotonie de $(x_n)$ et sa convergence.

c) Déterminer la limite de la suite $(x_n)$.

**Exercice 63.**
Soit $f$ la fonction numérique définie sur $I = ]\sqrt{3}; +\infty[$

par : $f(x) = \frac{1}{2}\left(\frac{3}{x} + x\right)$

1) a) Montrer que $f$ est strictement croissante sur $I$.

b) En déduire que : $(\forall x \in I) \ f(x) \ge \sqrt{3}$

2) a) Montrer que : $(\forall x \in I) \ 0 \le f'(x) \le \frac{1}{2}$

b) En déduire que pour tout $x \in I$ :

$$0 \le f(x) - \sqrt{3} \le \frac{1}{2}(x - \sqrt{3})$$

3) On considère la suite numérique $(u_n)$ définie par :

$u_0 = 4$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$

a) Montrer que : $(\forall n \in \mathbb{N}) \ u_n \ge \sqrt{3}$

b) En déduire que pour tout $n \in \mathbb{N}$ :

$$0 \le u_{n+1} - \sqrt{3} \le \frac{1}{2}(u_n - \sqrt{3})$$

c) Montrer par récurrence que pour tout $n \in \mathbb{N}$ :

$$0 \le u_n - \sqrt{3} \le \frac{1}{2^n}(4 - \sqrt{3})$$

puis en déduire que la suite $(u_n)$ est convergente.

**Exercice 64.**
Montrer géométriquement ce qui suit :

1) $\left(\forall x\in \left[0,\frac{\pi}{2}\right]\right)\frac{2}{\pi} x\leq \sin x\leq x$
2) $\left(\forall x\in \left[0,\frac{\pi}{2}\right]\right)1 - \frac{2}{\pi} x\leq \cos x\leq \frac{\pi}{2} -x$
3) $\left(\forall x\in \left[0,\frac{\pi}{4}\right]\right)x\leq \tan x\leq \frac{4}{\pi} x$

**Exercice 65.**
1) Montrer que: $\left(\forall x\in \left[0,\frac{\pi}{2}\right]\right)\sin x\leq x\leq \tan x$
2) Montrer que la fonction $ x \mapsto \frac{\sin x}{x} $ est décroissant sur l'intervalle $ \left]0; \frac{\pi}{2}\right[ $.
3) Montrer que: $\left(\forall x\in \left[0,\frac{\pi}{2}\right]\right)x\leq \tan x\leq \frac{x}{\cos^2x}$
4) Montrer que:

$$\left(\forall x \in \left]0; \frac{\pi}{2}\right]\right) \cos x \leq \frac{\sin x}{x} \leq \frac{1}{\cos x}$$

5) On considère la fonction numérique définie sur $\mathbb{R}$

par : $g(x) = \frac{\sin x}{x}$ si $x \neq 0$ , et $g(0) = 1$

Montrer que $g$ est dérivable en $0$ puis donner $g'(0)$.

**Exercice 66.**
Soit $f : \left[0, \frac{\pi}{2}\right] \to \mathbb{R}$ définie par : $f(x) = \sqrt{\sin x} + x$

1) Justifier que $ f $ réalise une bijection de $ \left[0; \frac{\pi}{2}\right] $ vers un intervalle $ J $ à préciser.
2) Montrer que la fonction reciproque $ f^{-1} $ est continue sur $ J $ et dérivable sur $ J - \{0\} $.
3) Montrer que: $\left(\exists c\in \left]0;\frac{\pi}{2}\right]\right)\frac{\cos c}{\sqrt{\sin c}} = \frac{4}{\pi}$

**Exercice 67.**
Soit $f$ la fonction numérique définie sur $I = \left[0; \frac{\pi}{2}\right]$ par : $f(x) = \sqrt{\frac{2}{1 + \sin x}}$

1) a) Montrer que: $(\forall x \in I) f'(x) = -\frac{\cos x}{\sqrt{2}(1 + \sin x)}$
b) Montrer que l'équation $ f(x) = x $ admet une solution unique $ \lambda $ dans l'intervalle $ I $.
c) Montrer que: $(\forall x \in I) |f'(x)| \leq \frac{\sqrt{2}}{2}$

2) On considère la suite numérique $(u_n)$ définie par : $u_0 = 0$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$

a) Verifier que $f(I)\subset I$
b) Montrer que: $(\forall n\in \mathbb{N})u_n\in I$
c) Montrer que: $(\forall n \in \mathbb{N}) |u_{n+1} - \lambda| \leq \frac{\sqrt{2}}{2} |u_n - \lambda|$ puis déterminer $\lim_{n \to \infty} u_n$.

**Exercice 68.**
On considère la fonction $f$ définie sur $[0;1]$ par :

$$f(x) = \frac{1}{4} \tan \left(\frac{1}{x+1}\right)$$

1) Montrer que $f$ est dérivable sur $[0;1]$ et que :

$$\left(\forall x \in [0;1]\right) |f'(x)| < \frac{1}{4 \cos^2 1}$$

2) Montrer qu'il existe un unique réel $\alpha \in ]0;1[$ tel

que : $f(\alpha) = \alpha$

3) On considère une suite numérique $(u_n)$ définie par :

$$\begin{cases} u_0 \in ]0;1[-\{\alpha\} \\ u_{n+1} = f(u_n) \end{cases}$$

a) Montrer que pour tout $n \in \mathbb{N}$ :

$$|u_n - \alpha| < \left(\frac{1}{4 \cos^2 1}\right)^n |u_0 - \alpha|$$

b) En déduire que la suite $(u_n)$ est convergente et précisant sa limite.

**Exercice 69.**
Soit $f$ une fonction dérivable sur $\mathbb{R}$ telle que :

$$\lim_{x \to \infty} f(x) = \lim_{x \to \infty} f(x) = +\infty$$

1) Montrer qu'il existe $a \in \mathbb{R}^*$ et $b \in \mathbb{R}^*$, tels que :

$$f(a) > f(0) + 1 \quad \text{et} \quad f(b) > f(0) + 1$$

2) En déduire qu'il existe $\alpha \in ]a, b[$ et $\beta \in ]0, b[$ tels

que : $$f(\alpha) = f(\beta)$$

3) Montrer qu'il existe $c \in \mathbb{R}$ tel que : $f'(c) = 0$

**Exercice 70.**
Soit $I$ un intervalle borné de $\mathbb{R}$ et $f$ une fonction dérivable sur $I$ telle que $f'$ soit bornée sur $I$.

Montrer que la fonction $f$ est aussi bornée sur $I$.

**Exercice 71.**
Soit $f$ une fonction dérivable sur $[a, b]$ telle que :

$$f(a) = f(b) = 0 \quad \text{et} \quad f'(a) > 0 \quad \text{et} \quad f'(b) < 0$$

1) Montrer que :

$$(\exists x_1 \in ]a, b[) f(x_1) > 0 \quad \text{et} \quad (\exists x_2 \in ]a, b[) f(x_2) < 0$$

2) En déduire qu'il existe des réels $c_1, c_2$ et $c_3$ de $]a, b[$ tels que :

$$f'(c_1) = f(c_2) = f'(c_3) = 0 \quad \text{et} \quad c_1 < c_2 < c_3$$

**Exercice 72.**
Soit $f$ une fonction continue sur $[a, b]$ et dérivable sur

$]a, b[$ telle que : $$\lim_{x \to \infty} f'(x) = \lambda \in \mathbb{R}$$

Montrer $f$ est dérivable à droite en $\alpha$ et que $f'(a) = \lambda$. La réciproque est-elle vraie ? Justifier votre réponse.

**Exercice 73.**
1) Étudier les variations de la fonction $f$ définie sur

$$[0, 1] \text{ par : } f(x) = x^3(1 - x)^3$$

2) Soit $x$ et $y$ deux réels strictement positifs tels que :

$$x + y = 1$$

Déterminer la valeur maximale de l'expression :

$$\sqrt{x^2 y}$$

# 2.1. (1) (2) (3) (4) (5) (6)

**Exercice 74.**
Soit $g$ la fonction numérique définie sur $\mathbb{R}^*$ par :

$$g(x) = \sqrt[3]{x} - \sin \sqrt[3]{x}$$

1) Montrer que pour tout $t \in \mathbb{R}^*$, il existe au moins

$$c_1 \in ]0, t^3[ \text{ tel que : } t - \sin t = \frac{1}{3} t^3 \left( \frac{1 - \cos \sqrt[3]{c_1}}{\sqrt[3]{c_1^3}} \right)$$

2) En déduire la valeur de la limite : $$\lim_{t \to \infty} \frac{t - \sin t}{t^3}$$

**Exercice 75.**
1) On considère la fonction $h$ définie sur $\mathbb{R}^*$ par :

$$h(x) = \frac{1}{x} - 2 \operatorname{Arc} \tan x$$

a) Montrer que l'équation $h(x) = 0$ admet une solu-

tion unique $\alpha$ dans $\mathbb{R}^*$, et que $\frac{\sqrt{3}}{3} < \alpha < 1$.

b) Étudier le signe de $h(x)$ sur $\mathbb{R}^*$.

2) On considère la fonction $f$ définie sur $\mathbb{R}^*$ par :

$$f(x) = \frac{\operatorname{Arc} \tan x}{1 + x^2}$$

a) Étudier les variations de la fonction $f$ sur $\mathbb{R}^*$.

b) Montrer que : $$f(\alpha) = \frac{1}{2\alpha(1 + \alpha^2)}$$

c) En déduire que : $$(\forall x \in \mathbb{R}^*) \ 0 \le f(x) < \frac{3\sqrt{3}}{8}$$

3) En utilisant l'inégalité des accroissements finis, montrer que pour tout $(x, x_0) \in (\mathbb{R}^*)^2$ tel que $x > x_0$ :

$$(\operatorname{Arc} \tan x)^2 - (\operatorname{Arc} \tan x_0)^2 \le \frac{3\sqrt{3}}{4}(x - x_0)$$

4) Soit $x \in \mathbb{R}^*$. On considère la suite $(u_\alpha(x))_{\alpha \in \mathbb{N}}$ définie

par : $$u_\alpha(x) = \sum_{p=0}^{\infty} \left( \operatorname{Arc} \tan \frac{x}{2^p} \right)^2$$

Montrer que $(u_\alpha(x))_{\alpha \in \mathbb{N}}$ est majorée par $\frac{3\sqrt{3}}{2}x$.

5) Pour tout $x \in \mathbb{R}^*$ on pose : $C(x) = \lim_{\alpha \to \infty} u_\alpha(x)$

a) Montrer que pour tout $(x, x_0) \in (\mathbb{R}^*)^2$ :

CARACTÈRES

$$\left| u _ { n } ( x ) - u _ { n } \left( x _ { 0 } \right) \right| \leq \frac { 3 \sqrt { 3 } } { 4 } \left| x - x _ { 0 } \right| \sum _ { p = 0 } ^ { \infty } \frac { 1 } { 2 ^ { p } }$$

b) En déduire que la fonction $C$ est continue sur $\mathbb{R}^*$.

**Exercice 76.**
Première partie :

1) Montrer que : $\left( \forall t \in \mathbb{R}_+^ { * } \right) 0 < \frac { t - \operatorname { A r c } \tan t } { t ^ { 2 } } < \frac { t } { 3 }$

Puis calculer la limite : $\lim _ { t \to 0 ^ { + } } \frac { t - \operatorname { A r c } \tan t } { t ^ { 2 } }$

2) a) Montrer que pour tout $x \in \mathbb{R}^*$ :

$$\operatorname { A r c t a n } | x | + \operatorname { A r c t a n } \frac { 1 } { | x | } = \frac { \pi } { 2 }$$

b) En déduire que :

$$\lim _ { x \to 0 ^ { + } } \frac { ( x - 1 ) ^ { 2 } \operatorname { A r c t a n } \frac { 1 } { x } - \frac { \pi } { 2 } } { x } = - 1 - \pi$$

$$\lim _ { x \to 0 ^ { + } } \frac { - ( x - 1 ) ^ { 2 } \operatorname { A r c t a n } \frac { 1 } { x } - \frac { \pi } { 2 } } { x } = 1 - \pi$$

Deuxième Partie :

On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$f ( x ) = ( x - 1 ) ^ { 2 } \left| \operatorname { A r c t a n } \frac { 1 } { x } \right| \text { s i } x \neq 0 \text { e t } f ( 0 ) = \frac { \pi } { 2 }$$

1) a) Montrer que $f$ est continue en 0.

b) Étudier la dérivabilité de la fonction $f$ en 0 puis interpréter géométriquement les résultats.

c) Montrer que : $\lim _ { | x | \to + \infty } f ( x ) = + \infty$

2) On pose pour tout $x \in \mathbb{R}^*$ :

$$g ( x ) = 2 \operatorname { A r c t a n } \frac { 1 } { x } - \frac { x - 1 } { x ^ { 2 } + 1 }$$

a) Étudier les variations de la fonction $g$ sur $\mathbb{R}^*$.

b) En déduire le signe de $g ( x )$ sur $\mathbb{R}^*$.

c) Montrer que :

$$\left\{ \begin{array} { l l } { f ^ { \prime } ( x ) = ( x - 1 ) g ( x ) } & { \text { s i } x > 0 } \\ { f ^ { \prime } ( x ) = ( 1 - x ) g ( x ) } & { \text { s i } x < 0 } \end{array} \right.$$

d) Dresser le tableau de variations de $f$.

3) Soit $x \in \mathbb{R}_+^ { * }$ et posons $t = \frac { 1 } { x }$.

a) Vérifier que :

$$f ( x ) - ( x - 2 ) = ( t - 2 ) \cdot \frac { \operatorname { A r c } \tan t } { t } + \frac { \operatorname { A r c } \tan t } { t ^ { 2 } + 1 }$$

b) Calculer $\lim _ { x \to + \infty } \left( f ( x ) - ( x - 2 ) \right)$ puis interpréter graphiquement le résultat obtenu.

c) Calculer $\lim _ { x \to - \infty } \left( f ( x ) + x \right)$ puis interpréter graphiquement le résultat obtenu.

4) Tracer $\mathcal{C}_f$ dans un repère orthonormé.

**Exercice 77.**
On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$\left\{ \begin{array} { l l } { f ( x ) = x - \sqrt [ 3 ] { x - 1 } } & { \text { s i } x \geq 1 } \\ { f ( x ) = \frac { \operatorname { A r c t a n } \sqrt { 1 - x } } { \sqrt { 1 - x } } } & { \text { s i } x < 1 } \end{array} \right.$$

1) Montrer que $f$ est continue en 1.

2) Étudier les branches infinies de la courbe $\mathcal{C}_f$ de $f$.

3) Étudier la dérivabilité de la fonction $f$ à droite en 1 puis interpréter géométriquement le résultat.

4) On pose pour tout $t \in \mathbb{R}_+^ { * }$ :

$$u ( t ) = t - \operatorname { A r c } \tan t \text { e t } v ( t ) = t ^ { 3 }$$

a) Vérifier que : $\lim _ { x \to 1 ^ { + } } \frac { f ( x ) - f ( 1 ) } { x - 1 } = \lim _ { t \to 0 ^ { + } } \frac { u ( t ) } { v ( t ) }$

b) On pose : $g ( x ) = u ( t ) v ( x ) - u ( x ) v ( t )$

Montrer que : $\left( \exists c \in ] 0 , t [ \right) g ^ { \prime } ( c ) = 0$

c) En déduire que $\lim _ { t \to 0 ^ { + } } \frac { u ( t ) } { v ( t ) } = \frac { 1 } { 3 }$ et que $f$ est dérivable à gauche en 1 puis donner une interprétation graphique du résultat obtenu.

5) a) Étudier le signe de $f ^ { \prime } ( x )$ sur $] 1 ; + \infty [$.

b) Montrer que pour tout $x \in ] - \infty ; 1 [$ :

$$f ^ { \prime } ( x ) = \frac { 1 } { 2 ( 1 - x ) ^ { \frac { 3 } { 2 } } } \left( \operatorname { A r c t a n } \sqrt { 1 - x } - \frac { \sqrt { 1 - x } } { 2 - x } \right)$$

c) Montrer que: $$(\forall t \in \mathbb{R}^n) \text{ Arc tan } t - \frac{t}{1 + t^2} \geq 0$$
d) En déduire que $$f$$ est croissante sur $$]-\infty; 1]$$.
e) a) Montrer que l'équation $$f(x) = 0$$ admet une solution unique dans $$]3; 4[$$.
b) Tracer $$\Psi_x$$ dans un repère orthonormé.

**Exercice 78.**
Soit $$f$$ la fonction numérique définie sur l'intervalle $$I = \left[\frac{\pi}{4}, \frac{5\pi}{12}\right]$$ par: $$f(x) = \frac{1}{1 - \sin(2x)}$$

1) Montrer que $$f$$ réalise une bijection de $$I$$ sur $$J = \left[\frac{1}{2}; +\infty\right]$$. On pose $$g = f^{-1}$$ et $$K = [1; 2]$$
2) Montrer que l'équation $$g(x) = x$$ admet une unique solution $$\alpha$$ dans $$K$$ et que $$g(K) \subset K$$.
3) En utilisant le théorème des accroissements finis, montrer que: $$(\forall (x, t) \in K^2) |g(x) - g(t)| \leq \frac{1}{2} |x - t|$$
4) On considère la suite numérique $$(u_n)$$ définie par: $$u_0 = 1$$ et $$(\forall n \in \mathbb{N}) u_{n+1} = g(u_n)$$

a) Montrer que: $$(\forall n \in \mathbb{N}) u_n \in K$$
b) Montrer que: $$(\forall n \in \mathbb{N}) |u_{n+1} - \alpha| \leq \frac{1}{2} |u_n - \alpha|$$
c) Montrer que $$\lim_{n \to \infty} u_n = \alpha$$.

**Exercice 79.**
Soit $$g$$ la fonction définie sur $$\mathbb{R}$$ par: $$g(x) = \frac{x + 1}{\sqrt{2x^2 + 2}}$$

1) a) Calculer: $$\lim_{x \to \infty} g(x)$$ et $$\lim_{x \to \infty} g(x)$$
b) Montrer que: $$(\forall x \in \mathbb{R}) g'(x) = \frac{1 - x}{\sqrt{2x^2 + 2}}$$
c) En déduire que: $$(\forall x \in ]0; 1[) \quad 0 < g(x) < \frac{1}{\sqrt{2}}$$
d) Dresser le tableau de variations de $$g$$.
2) On considère la suite $$(u_n)$$ définie par: $$u_0 = 0$$ et $$(\forall n \in \mathbb{N}) u_{n+1} = g(u_n)$$

a) Montrer que: $$(\forall n \in \mathbb{N}) 0 \leq u_n < 1$$
b) Établir que: $$(\forall n \in \mathbb{N}) |u_{n+1} - 1| \leq \frac{1}{\sqrt{2}} |u_n - 1|$$
c) En déduire que $$(u_n)$$ est convergente et préciser sa limite.

**Exercice 80.**
On considère la fonction définie sur $$[0; 1]$$ par: $$f(x) = \frac{x}{1 + x \sin\left(\frac{1}{x}\right)}$$ si $$x \neq 0$$ et $$f(0) = 0$$.

Montrer que $$f$$ est dérivable sur $$[0; 1]$$, strictement croissante mais que l'équation $$f'(x) = 0$$ admet une infinité de solutions dans l'intervalle $$[0; 1]$$.

**Exercice 81.**
La Terre possède un champ magnétique intrinsèque, appelé champ géomagnétique, provenant du mouvement des particules chargées dans son noyau fluide. En première approximation, ce champ est celui d'un dipôle placé au centre $$O$$ de la Terre. Le champ magnétique $$B$$ à la surface de la terre est de la forme:

$$B(\lambda) = k \frac{\sqrt{1 + 3 \sin^2(\lambda)}}{\cos^2(\lambda)}$$

Où $$\lambda$$ est la latitude géomagnétique et $$k$$ une constante positive.
Etudier la fonction $$B$$ pour $$\lambda \in \left[-\frac{\pi}{3}; \frac{\pi}{3}\right]$$.

**Exercice 82.**
Soit un filtre analogique composé d'une résistance et d'un condensateur. Le déphasage du signal à la sortie du filtre par rapport au signal à l'entrée du filtre est égale à: $$\varphi(f) = -\arctan(2\pi\tau f)$$

Où $$\tau$$ est une constante de temps du filtre et $$f$$ indique la fréquence.

Calculer $$\varphi'(f)$$ pour tout $$f \in [0; +\infty[$$ puis dresser le tableau complet de variations de $$\varphi$$.

## Problèmes de synthèse

> **Page source 160.** Cette page, intitulée « Problèmes de synthèse — Se préparer aux devoirs », est uniquement disponible sous forme d’image dans l’extraction source. [Consulter la page numérisée](../pages/page-160/img-60.jpeg). Les éléments textuels lisibles reprennent à la page 161.

19.13.1 (1) (2) (3) (4) (5) (6) (7) (8) (9) (10)

orthonormé (Unité: 2cm)
1) On pose $ I = \left[\frac{1}{4}; 1\right] $. Montrer que $ f(I) \subset I $.
5) On considere la suite numérique $\left(u_{n}\right)$ définie par: $u_{0} = 1$ et $u_{n + 1} = f(u_n)$ pour tout $n\in \mathbb{N}$
a) Montrer que pour tout $x\in I$ .. $\left|f^{\prime}(x)\right|\leq \frac{4}{5}$
b) En utilisant l'inégalité des accroissements finis, montré que pour tout $ n \in \mathbb{N} $:

$$\left| u _ {n + 1} - \frac {\sqrt {3}}{3} \right| \leq \frac {4}{5} \left| u _ {n} - \frac {\sqrt {3}}{3} \right|$$

c) En déduire que la suite $\left(u_{n}\right)$ est convergente et donner sa limite.
d) Montrer que:

$$\left(\forall x \in \left[ 0; \frac {\pi}{2} \right]\right) f \left(\frac {1}{\tan x}\right) = \tan \left(\frac {x}{2}\right)$$

e) On pose pour tout $n \in \mathbb{N}$ : $a_n = \frac{2^{n+1} + (-1)^n}{3}$

Vérifier que $a_0 = 1$ et que pour tout $n \in \mathbb{N}$ :

$$a _ {n + 1} = 2 ^ {n + 1} - a _ {n}$$

f) Montrer que : $(\forall n \in \mathbb{N}) u_n = \tan \left(\frac{\pi a_n}{2^{n+2}}\right)$

**Devoir 4.**
Partie A : Etude d'une fonction auxiliaire

On considère la fonction $f$ définie pour tout $x \in \mathbb{R}^+$

par : $f(x) = x^3 + 4x^2 + 6x - 1$

1) Calculer $ f(0), f\left(\frac{1}{2}\right), f(1) $ et $ \lim_{x \to +\infty} f(x) $.
2) Calculer $ f'(x) $ pour tout $ x \in \mathbb{R}^+ $ puis dresser le tableau de variations de $ f $.
3) Prover que $ f $ s'annule une fois et une seule sur $ [0, +\infty[ $ en un point $ \alpha $ et que $ \alpha \in ]0; \frac{1}{2}[ $.

4) Déterminer le signe de $f$ sur $[0, \alpha[$ et sur $]\alpha, +\infty[$.

Partie B : Détermination d'une valeur approchée de $\alpha$

On considère la fonction $g$ définie pour tout $x \in \mathbb{R}^+$

par : $g(x) = \frac{1}{x^2 + 4x + 6}$

1) Determiner un encadrement de $ x^{2} + 4x + 6 $ pour $ x \in \left[0; \frac{1}{2}\right] $ et en déduire que: $ 0 \leq g(x) \leq \frac{1}{2} $.
2) Montrer que pour tout $ x \in \left[0; \frac{1}{2}\right] : \left|g'(x)\right| \leq \frac{5}{36} $.
3) On considere maintainant la suite $\left(u_{n}\right)$ définie par

$u_0 = 0$ et pour tout $n \in \mathbb{N}$ : $u_{n+1} = g(u_n)$

a) Prover que pour tout $n\in \mathbb{N}$ .. $u_{n}\in \left[0;\frac{1}{2}\right]$
b) Prover que $ g(\alpha) = \alpha $ et déduire que pour

tout $n \in \mathbb{N}$ : $|u_{n+1} - \alpha| \leq \frac{5}{36} |u_n - \alpha|$

c) En déduire que la suite $\left(u_{n}\right)$ est convergente et donner sa limite.
e) Justifier que $ u_0 \leq \alpha \leq u_1 $ puis en déduire, par récurrencé, que: $ (\forall n \in \mathbb{N}) u_{2n} \leq \alpha \leq u_{2n+1} $.

**Devoir 5.**
1) Soit $f$ une fonction dérivable en un point $x_0$.

a) Montrer que :

$$\lim_{h \to 0} \frac{f(x_0 + h) - f(x_0 - h)}{2h} = f'(x_0)$$

b) Réciproquement, si la limite précédente existe, peut-on dire que $f$ est dérivable en $x_0$ ?

2) Soit $g$ une fonction continue sur $\mathbb{R}$ telle que :

$$\lim_{x \to 0} \frac{g(2x) - g(x)}{x} = \ell$$

Montrer que $g$ est dérivable en $0$ et que $g'(0) = \ell$.

3) Etudier puis représenter la fonction numérique $h$ définie par :

$$h(x) = x E\left(\frac{1}{x}\right)$$

## Résumé

- **Dérivabilité.** Une fonction dérivable en un point est continue en ce point ; la réciproque est fausse en général.
- **Composition.** Si les dérivées existent, $(g\circ f)'=(g'\circ f)f'$.
- **Fonction réciproque.** Lorsque $f'(f^{-1}(y))\ne0$, on a $(f^{-1})'(y)=1/f'(f^{-1}(y))$.
- **Accroissements finis.** Une borne de $|f'|$ fournit une majoration de $|f(b)-f(a)|$.
- **Variations et convexité.** Le signe de $f'$ détermine les variations et celui de $f''$ la convexité.
- **Primitives.** Deux primitives d’une même fonction sur un intervalle diffèrent d’une constante.

## Auto-évaluation

- Étudier la dérivabilité en un point et interpréter graphiquement le résultat.
- Calculer la dérivée d’une fonction composée ou réciproque.
- Appliquer les théorèmes de Rolle et des accroissements finis.
- Construire un tableau de variations et étudier la convexité.
- Déterminer les branches infinies d’une courbe.
- Calculer une primitive en utilisant le tableau des primitives usuelles.
