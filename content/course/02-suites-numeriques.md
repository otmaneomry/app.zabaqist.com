# Chapitre 2 : Suites numériques

## Histoire

Au début du XIIIe siècle le mathématicien italien Leonard de Pisse connu sous le nom de Fibonacci, introduit une suite sous la forme amusante suivante : Partant d'un couple de lapins, combien en obtiendra-t-on après un nombre donné de mois, sachant que chaque couple produit chaque mois un nouveau couple, lequel ne devient productif qu'après deux mois. Si on note F, le nombre de couples au bout de n mois, on aboutit à la relation $F_{n+1} = F_{n+1} + F_n$. Le rapport $F_{n+1}/F_n$ tend vers le nombre d'or (1+√5)/2.

Source : https://fr.wikipedia.org

> **Leonardo Fibonacci** (vers 1170–1250)

## Objectifs

- Étudier la monotonie, la majoration, la minoration et le caractère borné d'une suite.
- Calculer les limites des suites usuelles et utiliser les opérations sur les limites.
- Employer les critères de convergence et les théorèmes d'encadrement.
- Étudier les suites récurrentes de la forme $u_{n+1}=f(u_n)$.
- Déterminer la limite d'une suite composée $v_n=f(u_n)$.
- Reconnaître et exploiter deux suites adjacentes.

## Plan du chapitre

- Activités préparatoires
- **Cours** : généralités · limites · critères de convergence · suites récurrentes · suites adjacentes.
- **Méthodes** : monotonie · convergence et divergence · suites implicites · suites récurrentes.
- **Exercices et problèmes** : applications · perfectionnement · devoirs · examens.

## Prérequis

- Suites arithmétiques et géométriques.
- Raisonnement par récurrence.
- Limites et continuité des fonctions numériques.
- Inégalités, encadrements et sommes finies.

## Activités préparatoires

### RAPPELS
A) On considère les suites numériques $(u_n)$, $(v_n)$ et $(w_n)$ définies comme suit :

$$\begin{cases} u_0 = 4 \\ u_{n+1} = \frac{1}{4}u_n + 6 \quad (\forall n \in \mathbb{N}) \end{cases} ; \quad \begin{cases} v_0 = 1 \\ v_{n+1} = \sqrt{v_n^2 + 2n + 3} \quad (\forall n \in \mathbb{N}) \end{cases} ; \quad \begin{cases} w_0 = 3 \\ w_{n+1} = w_n + 2 \times 3^{n+1} \quad (\forall n \in \mathbb{N}) \end{cases}$$

1. Montrer par récurrence que pour tout $n \in \mathbb{N}$ : $u_n = 8 - \left(\frac{1}{4}\right)^{n-1}$

2. Montrer que la suite $(v_n)$ est arithmétique puis exprimer $v_n$ en fonction de $n$.

3. Montrer que la suite $(w_n)$ est géométrique puis exprimer $w_n$ en fonction de $n$.

B) Soit $(a_n)$ et $(b_n)$ les suites numérique définies pour tout $n \in \mathbb{N}$ par : $a_n = 2\sqrt{n+1} - 5$ et $b_n = \frac{5}{4} + \frac{3}{5n+3}$
Montrer que la suite $(a_n)$ est croissante et que la suite $(b_n)$ est décroissante.

C) On considère la suite $(S_n)_{n \ge 2}$ définie par : $S_n = 1 + \frac{1}{2^2} + ... + \frac{1}{n^2}$

1. Montrer que la suite $(S_n)_{n \ge 2}$ est croissante.

2. Justifier que pour tout $x \in [2; +\infty[$ : $\frac{1}{x^2} \le \frac{1}{x-1} - \frac{1}{x}$

3. En déduire que la suite $(S_n)_{n \ge 2}$ est majorée.

D) On considère les suites $(\alpha_n)$ et $(\beta_n)$ définie par :

$$\begin{cases} \alpha_0 = 2 \\ \alpha_{n+1} = \sqrt{6 + \alpha_n} \quad (\forall n \in \mathbb{N}) \end{cases} \text{ et } \begin{cases} \beta_0 = 4 \\ \beta_{n+1} = \sqrt{6 + \beta_n} \quad (\forall n \in \mathbb{N}) \end{cases}$$

1. En utilisant les variations de de la fonction $f : x \mapsto \sqrt{6+x}$ et le raisonnement par récurrence, établir que la suite $(\alpha_n)$ est croissante et la suite $(\beta_n)$ est décroissante.

2. Montrer que la suite $(\alpha_n)$ est majorée et que la suite $(\beta_n)$ est minorée.

E) Soit $(r_n)$ et $(t_n)$ les suites récurrentes définies par :

$$\begin{cases} r_0 = 2 \\ r_{n+1} = \frac{1}{5}r_n + 2 \quad (\forall n \in \mathbb{N}) \end{cases} \text{ et } \begin{cases} t_0 = 3 \\ t_{n+1} = \frac{1}{5}t_n + 2 \quad (\forall n \in \mathbb{N}) \end{cases}$$

On pose pour tout $n \in \mathbb{N}$ : $d_n = r_n - t_n$ et $c_n = r_n + t_n$

1. Montrer que $(d_n)$ est une suite géométrique dont on déterminera la raison.

2. Montrer que $(c_n)$ est une suite constante puis en déduire les expressions de $r_n$ et $t_n$ en fonction de $n$.

A) ÉTUDE GRAPHIQUE :

Les figures suivantes (1), (2), (3) et (4) présentent successivement les graphes des suites numériques $$(\sqrt{n}), (n), (n^2)$$ et $$(n^3)$$

1. a) En s'inspirant des graphes ci-dessus, qu'elle remarque peut-on tirer sur les termes de ces suites quand $ n $ prend des valeurs assez grandes?
b) Montrer que pour tout $ n \in \mathbb{N} $, $ \sqrt{n} \leq n \leq n^2 \leq n^3 $, et en déduire que si $ n $ est supérieur à $ 10^{12} $ alors les suites $ (\sqrt{n}), (n), (n^2) $ et $ (n^3) $ prennet de plus en plus des grandes valeurs.

2. Montrer que si $$n \ge 10^{12}$$ alors $$\frac{1}{n^3} \le \frac{1}{n^2} \le \frac{1}{n} \le \frac{1}{\sqrt{n}}$$, et en déduire que si $$n \ge 10^{12}$$ alors les suites $$\left(\frac{1}{n^3}\right)_{n \in \mathbb{N}^*}, \left(\frac{1}{n^2}\right)_{n \in \mathbb{N}^*}, \left(\frac{1}{n}\right)_{n \in \mathbb{N}^*}$$ et $$\left(\frac{1}{n^3}\right)_{n \in \mathbb{N}^*}$$ prennent de plus en plus des petites valeurs.

B) ÉTUDE THÉORIQUE :

1. a) En utilisant la définition de la limite de la fonction $$x \mapsto \sqrt{x}$$ quand $$x$$ tend vers $$+\infty$$, montrer que :

$$(\forall A > 0) (\exists B > 0) ; (\forall x \in \mathbb{R}) (x > B \Rightarrow \sqrt{x} > A)$$

b) Soit $$A > 0$$. On considère le nombre $$B$$ définie en 1.a) et on pose $$N = E(B) + 1$$ ($$E(B)$$ étant la parie entière de $$B$$). Montrer que : $$(\forall n \in \mathbb{N}) (n \ge N \Rightarrow \sqrt{n} > A)$$

On peut dire donc qu'à partir du rang $$N$$, tous les termes de la suite $$(\sqrt{n})$$ sont strictement supérieurs à $$A$$.

On dit aussi que la suite $$(\sqrt{n})$$ tend vers $$+\infty$$ quand $$n$$ tend vers $$+\infty$$ et on écrit : $$\lim_{n \to \infty} \sqrt{n} = +\infty$$

c) Soit $$p \in \mathbb{N}^*$$. Vérifier que : $$(\forall n \in \mathbb{N}), n^p > \sqrt{n}$$

Montrer que : $$(\forall A > 0) (\exists N' \in \mathbb{N}) ; (\forall n \in \mathbb{N}) (n \ge N' \Rightarrow n^p > A)$$

On dit que la suite $$(n^p)$$ tend vers $$+\infty$$ quand $$n$$ tend vers $$+\infty$$ et on écrit : $$\lim_{n \to \infty} n^p = +\infty$$

2. a) Déterminer un entier $n_0$ de $\mathbb{N}$ tel que pour tout $n \ge n_0$ : $0 < \frac{1}{\sqrt{n}} < 10^{-3}$

b) Montrer que : $(\forall \varepsilon > 0) (\exists N \in \mathbb{N}) ; (\forall n \in \mathbb{N}) \left( n \ge N \Rightarrow 0 < \frac{1}{\sqrt{n}} < \varepsilon \right)$

On dit aussi que la suite $\left( \frac{1}{\sqrt{n}} \right)_{n \ge 1}$ tend vers 0 quand $n$ tend vers $+\infty$ et on écrit : $\lim_{n \to +\infty} \frac{1}{\sqrt{n}} = 0$

c) Soit $p \in \mathbb{N}^*$. En utilisant l'inégalité $n^p \ge n$, valable pour tout $n \in \mathbb{N}^*$, montrer que :

$(\forall \varepsilon > 0) (\exists N' \in \mathbb{N}) : (\forall n \in \mathbb{N}) \left( n \ge N' \Rightarrow 0 < \frac{1}{n^p} < \varepsilon \right)$

On dit aussi que la suite $\left( \frac{1}{n^p} \right)_{n \ge 1}$ tend vers 0 quand $n$ tend vers $+\infty$ et on écrit : $\lim_{n \to +\infty} \frac{1}{n^p} = 0$

### LIMITE FINIE D'UNE SUITE NUMÉRIQUE
On considère la fonction définie sur $\mathbb{R}^*$, par : $f(x) = 2 + \frac{1}{x}$

1. Étudier les variations de la fonction $ f $ puis calculer $ \lim_{x \to +\infty} f(x) $.
2. Tracer la courbe $\mathcal{C}$ de la fonction $f$ dans un repere orthonormé $(O, \vec{i}, \vec{j})$.
3. On considere maintainant la suite $\left(u_{n}\right)_{n\geq 1}$ definie pour tout $n\in \mathbb{N}^*$ par: $u_{n} = 2 + \frac{1}{n}$
a) Placer dans le repère $\left(O, \vec{i}, \vec{j}\right)$ les points $M_{n}(n, u_{n})$ pour $n \in \{1, 2, 3, 4\}$.

b) Le tableau ci-contre donne les valeurs de $u_n$.
Quelle remarque peut-on tirer sur les termes de la suite $(u_n)$ pour des valeurs de $n$ assez grandes ?

|  n | u_n  |
| --- | --- |
|  1 | 3  |
|  2 | 2,5  |
|  3 | 2,33333333  |
|  4 | 2,25  |
|  5 | 2,2  |
|  6 | 2,16666667  |
|  7 | 2,14285714  |
|  8 | 2,125  |
|  9 | 2,11111111  |
|  10 | 2,1  |
|  11 | 2,09090909  |
|  12 | 2,08333333  |
|  13 | 2,07692308  |

|  100 | 2,01  |
| --- | --- |
|  101 | 2,00990099  |
|  102 | 2,00980392  |
|  103 | 2,00970874  |
|  104 | 2,00961538  |
|  105 | 2,00952381  |
|  106 | 2,00943396  |
|  107 | 2,00934579  |
|  108 | 2,00925926  |
|  109 | 2,00917431  |
|  110 | 2,00909091  |
|  111 | 2,00900901  |
|  112 | 2,00892857  |
|  113 | 2,00884956  |

4. On considère l'intervalle ouvert $I$ de centre 2 et de rayon $10^{-2}$ : $I = ]1,99; 2,01[$

Montrer qu'à partir d'un rang $N_1$ à déterminer, tous les termes de la suite $(u_n)_{n \ge 1}$ appartiennent à $I$.

5. Soit $\varepsilon > 0$. On considère l'intervalle $I_\varepsilon$ de centre 2 et de rayon $\varepsilon$ : $I_\varepsilon = ]2 - \varepsilon, 2 + \varepsilon[$

a) Montrer qu'à partir d'un rang $N_\varepsilon$ dépendant de $\varepsilon$, tous les termes de la suite $(u_n)_{n \ge 1}$ appartiennent à $I_\varepsilon$.

b) En déduire que : $(\forall \varepsilon > 0) (\exists N_\varepsilon \in \mathbb{N}) ; (\forall n \in \mathbb{N}^*) (n \ge N_\varepsilon \Rightarrow |u_n - 2| < \varepsilon)$

On dit que la suite $(u_n)_{n \ge 1}$ tend vers 2 quand $n$ tend vers $+\infty$ et on écrit : $\lim_{n \to +\infty} u_n = 2$ ou $\lim_{n \to +\infty} u_n = 2$

### LES SUITES CONVERGENTES
Soit $(u_n)_{n \in \mathbb{N}^*}$ la suite définie pour tout $n \in \mathbb{N}^*$ par : $u_n = \frac{3n + 5(-1)^n}{2n}$

1. Calculer les termes $u_{1}, u_{2}, u_{3}, u_{4}$ et $u_{5}$.
2. Déterminer $n_0 \in \mathbb{N}$ tel que pour tout $n > n_0$: $u_n \in \left[\frac{7}{5}, \frac{8}{5}\right]$
3. Montrer que: $(\forall \varepsilon > 0) (\exists N \in \mathbb{N})(\forall n \in \mathbb{N})$ $\left(n \geq N \Rightarrow u_n \in \left] \frac{3}{2} - \varepsilon, \frac{3}{2} + \varepsilon \right[\right)$

- On dit qu'une suite $\left(u_{n}\right)$ est convergente de limite $\ell$, si tout intervalle ouvert centré en $\ell$ contient tous les termes de la suite $\left(u_{n}\right)$ sauf, peut-être, un nombre fini d'entre eux. On écrit alors: $\lim_{n\to \infty}u_n = \ell$ ou $\lim_{n\to \infty}u_n = \ell$
Toute suite admettant une limite fine est dite convergente. Plus precisement:

$$\begin{array}{l} \lim_{n \to \infty} u_n = \ell \Leftrightarrow [(\forall \varepsilon > 0)(\exists N \in \mathbb{N})(\forall n \in \mathbb{N}) \quad (n \geq N \Rightarrow u_n \in ]\ell - \varepsilon, \ell + \varepsilon[)] \\ \Leftrightarrow [(\forall \varepsilon > 0)(\exists N \in \mathbb{N})(\forall n \in \mathbb{N}) \quad (n \geq N \Rightarrow [u_n - \ell] < \varepsilon)] \end{array}$$

### LES SUITES DIVERGENTES
On considère la fonction $f$ définie sur $\mathbb{R}^*$ par : $f(x) = \frac{x^2 + 2}{x}$

1. Étudier les variations de $ f $ puis calculer $ \lim_{x \to \infty} f(x) $.
2. Tracer la courbe $\mathcal{C}$ dans un repere orthonormé $\left(O; \vec{i}, \vec{j}\right)$.
3. On considere la suite numérique $\left(u_{n}\right)_{n\in \mathbb{N}}$ , définie par: $u_{n} = \frac{n^{2} + 2}{n}$

a) Calculer les termes $u_{1}, u_{2}, u_{3}$ et $u_{4}$.
b) Placer dans le repère $\left(O; \vec{i}, \vec{j}\right)$ les points $M_{n}(n, u_{n})$ pour $n \in \{1, 2, 3, 4\}$.

4. On considère l'intervalle ouvert $I = ]10; +\infty[$. Montrer qu'à partir d'un certain rang $N$ à déterminer, tous les termes de la suite $(u_n)_{n \in \mathbb{N}^*}$ appartiennent à l'intervalle $I$.

Il s'ensuit donc que tout intervalle ouvert $]A, +\infty[$, avec $A > 0$, contient tous les termes de la suite $(u_n)_{n \in \mathbb{N}^*}$ à partir d'un certain rang.

On dit que la suite $(u_n)_{n \in \mathbb{N}}$ tend vers $+\infty$ quand $n$ tend vers $+\infty$ et on écrit : $\lim_{n \to \infty} u_n = +\infty$ ou $\lim_{n \to \infty} u_n = +\infty$

En d'autres termes : $\lim_{n \to \infty} u_n = +\infty \Leftrightarrow [(\forall A > 0)(\exists N \in \mathbb{N})(\forall n \in \mathbb{N}) \quad (n \geq N \Rightarrow u_n > A)]$

On définit de même : $\lim_{n \to \infty} u_n = -\infty \Leftrightarrow [(\forall A > 0)(\exists N \in \mathbb{N})(\forall n \in \mathbb{N}) \quad (n \geq N \Rightarrow u_n < -A)]$

### CONVERGENCE ET ORDRE
I - LA CONVERGENCE :

A) On considère la suite numérique $$(a_n)$$ définie pour tout $$n \in \mathbb{N}^*$$ : $$a_n = \frac{3n + \sin n}{n}$$

1. Montrer que pour tout $ n \in \mathbb{N}^* $: $ |a_n - 3| \leq \frac{1}{n} $
2. En déduire que $\lim_{n\to \infty}a_n = 3$
B) Soit $(u_{n})$ et $(v_{n})$ deux suites numériques telles que $\lim_{n\to \infty}v_n = 0$ , et $\ell$ un nombre réel.

De façon générale on a l'implication suivante :

$$\left\{ \begin{array}{l} \forall n \in \mathbb{N}, x_n \leq u_n \leq y_n \\ \lim_{n \to \infty} x_n = \lim_{n \to \infty} y_n = \ell \end{array} \right. \Rightarrow \left[ (u_n) \text{ converge et } \lim_{n \to \infty} u_n = \ell \right]$$

On suppose qu'il existe un entier naturel $$n_0$$ tel que pour tout entier $$n \geq n_0$$, $$|u_n - \ell| \leq v_n$$.

Montrer que la suite $$(u_n)$$ est convergente et que $$\lim_{n \to \infty} u_n = \ell$$.

C) On considère la suite numérique $$(u_n)$$ définie pour tout $$n \in \mathbb{N}$$ : $$u_n = \frac{n + \cos 3n}{n + 1}$$

1. Montrer que: $(\forall n \in \mathbb{N})$, $1 - \frac{2}{n + 1} \leq u_n \leq 1$
2. En déduire en utilisant la définition que: $\lim_{n\to \infty}u_n = 1$

### II - LA DIVERGENCE :
A) Soit $(a_{n})$ la suite numérique définie pour tout $n\in \mathbb{N}$ par: $a_{n} = 1 + \sqrt{n} +\sin n$
1. Vérifier que pour tout $ n \in \mathbb{N} $: $ a_{n} \geq \sqrt{n} $
2. En déduire $\lim_{n\to \infty}a_n$
B) Soit $\left(u_{n}\right)_{n\geq n_{0}}$ et $\left(v_{n}\right)_{n\geq n_{0}}$ deux suites numériques telles que: $\left(\forall n\geq n_0\right)$ $u_{n}\leq v_{n}$

1. Montrer que: $\lim_{n\to \infty}u_n = +\infty \Rightarrow \lim_{n\to \infty}v_n = +\infty$
2. Montrer que: $\lim_{n\to \infty}v_n = -\infty \Rightarrow \lim_{n\to \infty}u_n = -\infty$

### LIMITE D'UNE SUITE RÉCURRENTE DE LA FORME $$u_{n+1} = f(u_n)$$
On considère la suite numérique $$(u_n)$$ définie par : $$u_0 = 3$$ et pour tout $$n \in \mathbb{N}$$, $$u_{n+1} = f(u_n)$$ où $$f(x) = 5 - \frac{4}{x}$$
b) Montrer par récurrence que pour tout $$n \in \mathbb{N}$$ : $$u_n \in I$$
c) Montrer que la suite $$(u_n)$$ est croissante et majorée.

2. a) Représenter graphiquement la courbe $$\mathcal{C}$$ de la fonction $$f$$ dans un repère orthonormé $$(O, \vec{i}, \vec{j})$$.

b) Tracer dans le même repère la droite $\Delta$ d'équation $y = x$ après avoir étudié la position relative de la courbe $\mathcal{C}$ et de la droite $\Delta$.

c) En utilisant $\mathcal{C}$ et $\Delta$, représenter les cinq premiers termes de la suite $(u_n)$. Conjecturer alors la limite de $(u_n)$.
3. a) Montrer que pour tout $n \in \mathbb{N} : 0 \le 4 - u_{n+1} \le \frac{1}{2}(4 - u_n)$

b) En déduire par récurrence que pour tout $ n \in \mathbb{N} : 0 \leq 4 - u_n \leq \left(\frac{1}{2}\right)^n $.
c) Montrer par récurrence que pour tout $n\in \mathbb{N}^{\circ}:2^{n}\geq n$
d) En déduire que pour tout $ n \in \mathbb{N}^* $, $ 0 \leq 4 - u_n \leq \frac{1}{n} $.

Que peut-en déduire alors sur la convergence de la suite $(u_n)$ ? Quelle est la limite de la suite $(u_n)$ ?

### SUITES ADJACENTES
Étant donnés deux points distincts $A_0$ et $B_0$ d'une droite $\Delta$, on définit les points :

$A_1$ milieu du segment $[A_0 B_0]$ et $B_1$ barycentre du système pondéré $\{(A_0, 1) ; (B_0, 2)\}$

Puis, pour tout entier naturel $n$, $A_{n+1}$ milieu du segment $[A_n B_n]$ et $B_{n+1}$ barycentre de $\{(A_n, 1) ; (B_n, 2)\}$
1. Placer les points $A_1, B_1, A_2$ et $B_2$ pour $A_0 B_0 = 12cm$.

Quelle conjecture peut-on faire sur les points $A_n$ et $B_n$ quand $n$ devient très grand ?

2. On munit la droite $(A_0 B_0)$ du repère $(A_0; \vec{i})$ avec $\vec{i} = \frac{1}{12} \overline{A_0 B_0}$

Soit $u_n$ et $v_n$ les abscisses respectives des points $A_n$ et $B_n$.

Justifier que pour tout $n \in \mathbb{N}^*$, on a : $u_{n+1} = \frac{u_n + v_n}{2}$ et $v_{n+1} = \frac{u_n + 2v_n}{3}$

3. On considère les suites $(u_n)$ et $(v_n)$ définies par : $u_0 = 0$, $v_0 = 12$, $u_{n+1} = \frac{u_n + v_n}{2}$ et $v_{n+1} = \frac{u_n + 2v_n}{3}$

a) Démontrer que la suite $(w_n)$ définie par $w_n = v_n - u_n$ est une suite géométrique convergente et que tous ses termes sont positifs.

b) Montrer que la suite $(u_n)$ est croissante puis que la suite $(v_n)$ est décroissante.

c) Déduire des deux questions précédentes que les suites $(u_n)$ et $(v_n)$ sont convergentes et ont la même limite.

d) On considère la suite $(t_n)$ définie par $t_n = 2u_n + 3v_n$.

4. Montrer qu'elle est constante.
À partir des résultats obtenus dans les questions 2 et 3, préciser la position limite des points $A_n$ et $B_n$ quand $n$ tend vers plus l'infini.

Si $(u_n)$ croissante et $(v_n)$ décroissante, $u_n \le v_n$ et $\lim_{n \to \infty} (v_n - u_n) = 0$, on dit que les suites

$(u_n)$ et $(v_n)$ sont adjacentes

SUR LES SUITES (RAPPEL)

## Cours
### 1. Généralités sur les suites
Soit $n_0$ un entier naturel. On pose $I = \{n \in \mathbb{N} / n \geq n_0\}$ et on considère la suite numérique $(u_n)_{n \geq n_0}$.

#### 1.1. SUITE MAJORÉE – SUITE MINORÉE – SUITE BORNÉE

> **Définition 1.**
- On dit que la suite $\left(u_{n}\right)_{n\geq n_{0}}$ est majorée s'il existe un réel $M$ tel que: $(\forall n\in I)u_n\leq M$
- On dit que la suite $\left(u_{n}\right)_{n\geq n_{0}}$ est minoree s'il existe un reel $m$ tel que: $(\forall n\in I)u_n\geq m$
- On dit que la suite $\left(u_{n}\right)_{n\geq n_{0}}$ est bornée si elle est à la fois majorée et minore.

#### 1.2. MONOTONIE D'UNE SUITE NUMÉRIQUE

> **Définition 2.**
- On dit que la suite $\left(u_{n}\right)_{n\geq n_{0}}$ est croissant si: $(\forall n\in I)u_{n + 1} - u_n\geq 0$
- On dit que la suite $\left(u_{n}\right)_{n\geq n_{0}}$ est décroissant si: $(\forall n\in I)u_{n + 1} - u_n\leq 0$
- On dit que la suite $\left(u_{n}\right)_{n\geq n_{0}}$ est constante si: $(\forall n\in I)u_{n + 1} = u_n$

> **Remarque.**
- Si la suite $\left(u_{n}\right)_{n\geq n_{0}}$ est croissant alors: $(\forall n\in I)u_n\geq u_{n_0}$
- Si la suite $\left(u_{n}\right)_{n\geq n_{0}}$ est décroissant alors: $(\forall n\in I)u_{n}\leq u_{n_{0}}$

#### 1.3. SUITE ARITHMÉTIQUE

> **Définition 3.**
On dit que la suite $(u_n)_{n \geq n_0}$ est arithmétique s'il existe un réel $r$ (indépendant de $n$) tel que :

$$(\forall n \in I) u_{n+1} - u_n = r$$

Le nombre $r$ est appelé la raison de la suite $(u_n)_{n \geq n_0}$.

> **Propriété 1.**
Si la suite $(u_n)_{n \geq n_0}$ est une suite arithmétique de raison $r$ alors pour tout $(n, p) \in I^2$ :

$$u_n = u_p + (n - p)r \quad \text{et} \quad u_p + u_{p+1} + ... + u_n = \frac{n - p + 1}{2}(u_p + u_n)$$

#### 1.4. SUITE GÉOMÉTRIQUE

> **Définition 4.**
On dit que la suite $$(u_n)_{n \ge n}$$ est géométrique s'il existe un réel $$q$$ (indépendant de $$n$$) tel que :

$$(\forall n \in I) \ u_{n+1} = q u_n$$

Le nombre $$q$$ est appelé la raison de la suite $$(u_n)_{n \ge n}$$.

> **Propriété 2.**
Si la suite $$(u_n)_{n \ge n}$$ est une suite géométrique de raison $$q \in \mathbb{R}^* - \{1\}$$ alors pour tout $$(n, p) \in I^2$$ :

$$u_n = u_p . q^{n-p} \quad \text{et} \quad u_p + u_{p+1} + ... + u_n = u_p . \frac{1 - q^{n-p+1}}{1 - q} \quad (n \ge p)$$

### 2. Limite d'une suite numérique
#### 2.1. SUITE DE LIMITE INFINIE

> **Définition 5.**
- On dit que la suite $$(u_n)_{n \ge n}$$ a pour limite $$+\infty$$ si tout intervalle de type $$]A, +\infty[$$, où $$A > 0$$, contient tous les termes de la suite à partir d'un certain rang ; ce qui revient à dire que :

$$(\forall A > 0) (\exists n \in \mathbb{N}) (\forall n \ge N) \ u_n \in ]A, +\infty[$$

On dit alors que la suite $$(u_n)_{n \ge n}$$ diverge vers $$+\infty$$ et on notera :

$$\lim_{n \to +\infty} u_n = +\infty \quad \text{ou} \quad \lim_{n \to +\infty} u_n = +\infty$$

- On dit que la suite $$(u_n)_{n \ge n}$$ a pour limite $$-\infty$$ si tout intervalle de type $$]-\infty, -A[$$ contient tous les termes de la suite à partir d'un certain rang ; ce qui revient à dire que :

$$(\forall A > 0) (\exists n \in \mathbb{N}) (\forall n \ge N) \ u_n \in ]-\infty, -A[$$

On dit alors que la suite $$(u_n)_{n \ge n}$$ diverge vers $$-\infty$$ et on notera :

$$\lim_{n \to +\infty} u_n = -\infty \quad \text{ou} \quad \lim_{n \to +\infty} u_n = -\infty$$

> **Remarques.**
- Si $k \in \mathbb{R}^*$, alors on a l'implication: $\lim_{n \to +\infty} u_n = +\infty \Rightarrow \lim_{n \to +\infty} k u_n = +\infty$
- On a les équivalences suivantes:

$$\lim_{n \to +\infty} u_n = +\infty \Leftrightarrow \lim_{n \to +\infty} (-u_n) = -\infty \quad ; \quad \lim_{n \to +\infty} u_n = -\infty \Leftrightarrow \lim_{n \to +\infty} (-u_n) = +\infty$$

CONFUSION(S)SONDIALES

> **Exemples.**
1) On considère la suite numérique $(u_n)$ définie

par : $u_n = n^2$

Montrons que : $\lim_{n \to +\infty} u_n = +\infty$

Soit $A > 0$. On a alors :

$u_n \in ]A, +\infty[ \Leftrightarrow u_n > A \Leftrightarrow n^2 > A \Leftrightarrow n > \sqrt{A}$

Posons $N = E(\sqrt{A}) + 1$, d'où $N > \sqrt{A}$ et $N \in \mathbb{N}$.

On a donc :

$n \ge N \Rightarrow n > \sqrt{A} \Rightarrow n^2 > A \Rightarrow u_n \in ]A, +\infty[$

Par suite : $\lim_{n \to +\infty} u_n = +\infty$

2) Soit $(v_n)$ la suite définie par : $v_n = 3 - 2n$

Montrons que : $\lim_{n \to +\infty} v_n = -\infty$

Soit $A > 0$. On a alors :

$v_n \in ]-\infty, -A[ \Leftrightarrow 3 - 2n < -A \Leftrightarrow n > \frac{A+3}{2}$

Posons $N = E\left(\frac{A+3}{2}\right) + 1$, d'où $N > \frac{A+3}{2}$ et $N \in \mathbb{N}$

On a donc :

$n \ge N \Rightarrow n > \frac{A+3}{2} \Rightarrow v_n < -A \Rightarrow v_n \in ]-\infty, -A[$

Par suite : $\lim_{n \to +\infty} v_n = -\infty$

#### 2.2. LIMITE INFINIE DES SUITES USUELLES

> **Proposition 1.**
Les suites $(\sqrt{n})_n, (n)_n, (n^2)_n$ et $(n^3)_n$ tendent vers $+\infty$ quand $n$ tend vers $+\infty$.

> **Proposition 2.**
Soit $(u_n)_{n \ge n_0}$ et $(v_n)_{n \ge n_0}$ deux suites numériques telles que pour tout $n \ge n_0$ : $u_n \le v_n$

- Si $\lim_{n\to +\infty}u_n = +\infty$ alors $\lim_{n\to +\infty}v_n = +\infty$
- Si $\lim_{n\to +\infty}v_n = -\infty$ alors $\lim_{n\to +\infty}u_n = -\infty$

> **Exemples.**
1) Soit $(u_n)$ la suite numérique définie par :

$u_n = \sqrt[n^6 + 1 + \sin n]$

On a pour tout $n \in \mathbb{N}$ : $n^6 + 1 + \sin n \ge n^6$

Donc : $u_n \ge n^2$

Puisque $\lim_{n \to +\infty} n^2 = +\infty$ alors $\lim_{n \to +\infty} u_n = +\infty$

2) Soit $(v_n)$ la suite numérique définie par :

$v_n = E(\sqrt{n}) + 1$

On a pour tout $n \in \mathbb{N}$ : $\sqrt{n} - 1 \le E(\sqrt{n})$

Donc : $\sqrt{n} \le v_n$

Puisque $\lim_{n \to +\infty} \sqrt{n} = +\infty$ alors $\lim_{n \to +\infty} v_n = +\infty$

3) Soit $(w_n)$ la suite numérique définie par :

$w_n = \text{Arctan}(\cos n) - n$

On a pour tout $n \in \mathbb{N}$ : $\text{Arctan}(\cos n) \le \frac{\pi}{2}$

Donc : $w_n \le \frac{\pi}{2} - n$

Puisque $\lim_{n \to +\infty} \frac{\pi}{2} - n = -\infty$ alors $\lim_{n \to +\infty} w_n = -\infty$

> **Proposition 3.**
Soit $a$ un réel quelconque.

$\bullet \mathrm{Si}a > 1$ alors $\lim_{n\to +\infty}a^n = +\infty$
$\bullet \mathrm{Si}p\in \mathbb{N}^{\circ}$ alors $\lim_{n\to +\infty}n^{p} = +\infty$

> **Preuve.**
• Soit $a > 1$. On pose $\alpha = a - 1$, c'est-à-dire $a = \alpha + 1$ et $\alpha > 0$. D'après l'inégalité de Bernoulli à savoir : « $(\forall (x, n) \in \mathbb{R}^+ \times \mathbb{N}) (1 + x)^n \geq 1 + nx$ », on a pour tout $n \in \mathbb{N}^+$, $a^n \geq 1 + n\alpha$ et donc $a^n > n\alpha$.

Puisque $\lim_{n \to +\infty} n\alpha = +\infty$ alors $\lim_{n \to +\infty} a^n = +\infty$.

• On a pour tout $n \in \mathbb{N}$ et $p \in \mathbb{N}^+$, $n \leq n^p$. Puisque $\lim_{n \to +\infty} n = +\infty$ alors $\lim_{n \to +\infty} n^p = +\infty$

> **Exemples.**
1) On a $\lim_{n\to +\infty}3^n = +\infty \operatorname {car}3 > 1$ . De meme, $\lim_{n\to +\infty}\left(\frac{7}{4}\right)^n = +\infty \operatorname {car}\frac{7}{4} >1.$
2) On a $\lim_{n\to +\infty}n^{5} = +\infty \operatorname {car}5\in \mathbb{N}^{\circ}$

> **Applications.**
Déterminer les limites suivantes :

1) $\lim_{n \to +\infty} \left( \frac{2017}{2016} \right)^n$ ; 2) $\lim_{n \to +\infty} \left( \frac{1 + \sqrt{2}}{\sqrt{3}} \right)^n$ ; 3) $\lim_{n \to +\infty} n^{2017}$ ; 4) $\lim_{n \to +\infty} (n^3 + 2^n)$ ; 5) $\lim_{n \to +\infty} \frac{5^n + 2^n}{3^n}$

#### 2.3. CONVERGENCE D'UNE SUITE NUMÉRIQUE

> **Définition 6.**
Étant donné une suite numérique $(u_n)_{n \geq n_0}$ et $\ell \in \mathbb{R}$, on dit que $(u_n)_{n \geq n_0}$ tend vers $\ell$, ou encore converge vers $\ell$, si tout intervalle ouvert centré en $\ell$ contient tous les termes de la suite $(u_n)_{n \geq n_0}$ à partir d'un certain rang. En d'autres termes :

$$(\forall \varepsilon > 0) (\exists N \in \mathbb{N}) ; (\forall n \geq N) |u_n - \ell| < \varepsilon$$

Et on écrit : $\lim_{n \to +\infty} u_n = \ell$ ou $\lim_{n \to +\infty} u_n = \ell$

> **Définition 7.**
On dit qu'une suite numérique est convergente si elle admet une limite réelle. Dans le cas contraire, on dit qu'elle est divergente.

> **Exemple.**
Soit $(u_n)$ la suite numérique définie par : $u_n = \frac{3n-1}{n+1}$. Montrons que : $\lim_{n \to +\infty} u_n = 3$

Soit $\varepsilon > 0$. On a pour tout $n \in \mathbb{N}$ : $|u_n - 3| = \left| \frac{3n-1}{n+1} - 3 \right| = \frac{4}{n+1}$

Pour avoir $|u_n - 3| < \varepsilon$, il suffit d'avoir $\frac{4}{n+1} < \varepsilon$, c'est-à-dire que $\frac{4}{\varepsilon} < n+1$, et donc $\frac{4}{\varepsilon} - 1 < n$.

On pose $N = E\left(\left|\frac{4}{\varepsilon} - 1\right|\right) + 1$. On a alors pour tout $n \ge N$ : $n > \left|\frac{4}{\varepsilon} - 1\right|$, et donc $n > \frac{4}{\varepsilon} - 1$.

On a montré donc que : $(\forall \varepsilon > 0) (\exists N \in \mathbb{N}) (\forall n \in \mathbb{N}) (n \ge N \Rightarrow |u_n - 3| < \varepsilon)$. Par suite : $\lim_{n \to +\infty} u_n = 3$

> **Applications.**
1) Soit $\left(u_{n}\right)_{n\geq 1}$ la suite numérique définie par: $u_{n} = \frac{1}{n^{2}}$. Montrer en utilisant la définition que $\lim_{n\to +\infty}u_n = 0$
2) On considere les deux suites $\left(v_{n}\right)$ et $\left(w_{n}\right)$ definies par: $v_{n} = \frac{7n - 2}{3n + 4}$ et $w_{n} = \frac{2n^{2} - \sin n}{n^{2} + 3}$

Montrer en utilisation la définition que : $\lim_{n \to +\infty} v_n = \frac{7}{3}$ et $\lim_{n \to +\infty} w_n = 2$

#### 2.4. CONVERGENCE DES SUITES USUELLES

> **Proposition 4.**
Les suites $\left(\frac{1}{\sqrt{n}}\right)_{n \ge 1}, \left(\frac{1}{n}\right)_{n \ge 1}, \left(\frac{1}{n^2}\right)_{n \ge 1}$ tendent vers 0 quand $n$ tend vers $+\infty$.

#### 2.5. UNICITÉ DE LA LIMITE

> **Proposition 5.**
La limite d'une suite numérique, lorsqu'elle existe, est unique.

> **Preuve.**
Raisonnons par l'absurde et supposons qu'une suite $(u_n)_{n \ge n}$ possède deux limites distinctes $\ell_1$ et $\ell_2$.

En posant $\varepsilon = \frac{|\ell_1 - \ell_2|}{3} > 0$, on obtient par la définition de la limite :

$\left[ (\exists N_1 \in \mathbb{N}); (\forall n \in \mathbb{N}) \ (n \ge N_1 \Rightarrow |u_n - \ell_1| < \varepsilon) \right]$ et $(\exists N_2 \in \mathbb{N}); (\forall n \in \mathbb{N}) \ (n \ge N_2 \Rightarrow |u_n - \ell_2| < \varepsilon)$

Soit $N = \sup(N_1, N_2)$. On a d'après l'inégalité triangulaire, pour tout $n \ge N$ :

$$|\ell_1 - \ell_2| \le |u_n - \ell_1| + |u_n - \ell_2| \le 2\varepsilon$$

On obtient alors $|\ell_1 - \ell_2| \le \frac{2}{3} |\ell_1 - \ell_2|$, ce qui est absurde. D'où le résultat.

> **Proposition 6.**
Toute suite convergente est bornée. La réciproque est fausse.

> **Preuve.**
• Soit $(u_n)_{n \ge n_0}$ une suite convergeant vers un réel $\ell$. La définition de la convergence appliquée par exemple pour $\varepsilon = 1$, nous permet de fixer un rang $N$ tel que :

$$\begin{aligned} (\forall n \in \mathbb{N}) \quad n \ge N &\Rightarrow |u_n - \ell| < 1 \\ &\Rightarrow \ell - 1 < u_n < \ell + 1 \end{aligned}$$

On constate alors que la suite $(u_n)_{n \ge n_0}$ est majorée par le réel $M = \max \{u_{n_0}, \dots, u_{N-1}, \ell + 1\}$ et minorée par le réel $m = \min \{u_{n_0}, \dots, u_{N-1}, \ell - 1\}$. Il s'ensuit donc la suite $(u_n)_{n \ge n_0}$ est bornée.

• La réciproque est fausse : par exemple la suite de terme général $(-1)^n$ est bornée mais non convergente.

#### 2.6. OPÉRATIONS SUR LES LIMITES

> **Proposition 7.**
Soit $(u_n)_{n \ge n_0}$ et $(v_n)_{n \ge n_0}$ deux suites numériques convergentes. Alors :

- La suite $\left(u_{n} + v_{n}\right)_{n\geq n_{0}}$ est convergente et de plus: $\lim \left(u_n + v_n\right) = \lim \left(u_n\right) + \lim \left(v_n\right)$.
- La suite $\left(u_{n}v_{n}\right)_{n\geq n_{0}}$ est convergente et de plus: $\lim \left(u_{n}v_{n}\right) = \lim \left(u_{n}\right)\times \lim \left(v_{n}\right)$.
- Si $\lim (v_n)\neq 0$ , alors la suite $\left(\frac{u_n}{v_n}\right)_{n\geq n_0}$ est convergente et de plus: $\lim \left(\frac{u_n}{v_n}\right) = \frac{\lim (u_n)}{\lim (v_n)}.$

> **Preuve.**
Supposons que $(u_n)_{n \ge n_0}$ et $(v_n)_{n \ge n_0}$ sont convergentes et posons $\lim u_n = \ell$ et $\lim v_n = \ell'$ où $(\ell, \ell') \in \mathbb{R}^2$.

• Montrons que la suite $(u_n + v_n)_{n \ge n_0}$ est convergente vers $\ell + \ell'$ :

Soit $\varepsilon > 0$. Puisque $\lim u_n = \ell$ et $\lim v_n = \ell'$ alors :

$$\left[ (\exists N_1 \in \mathbb{N}); (\forall n \in \mathbb{N}) \left( n \ge N_1 \Rightarrow |u_n - \ell| < \frac{\varepsilon}{2} \right) \right] \text{ et } \left[ (\exists N_2 \in \mathbb{N}); (\forall n \in \mathbb{N}) \left( n \ge N_2 \Rightarrow |v_n - \ell'| < \frac{\varepsilon}{2} \right) \right]$$

En choisissant $N = \sup(N_1, N_2)$ on obtient : $n \ge N \Rightarrow |(u_n + v_n) - (\ell + \ell')| \le |u_n - \ell| + |v_n - \ell'| < \varepsilon$

Par conséquent, la suite $(u_n + v_n)_{n \ge n_0}$ converge vers $\ell + \ell'$.

- Montrons que la suite $(u_n v_n)_{n \ge n_0}$ est convergente vers $\ell \ell'$ :

Comme la suite $(v_n)_{n \ge n_0}$ est convergente alors elle est bornée. Donc, il existe $M \in \mathbb{R}^*$ tel que pour tout $n \in \mathbb{N}$, $|v_n| \le M$.

Soit maintenant $\varepsilon > 0$. Puisque $\lim u_n = \ell$ et $\lim v_n = \ell'$ alors :

$$(\exists N_1 \in \mathbb{N}); (\forall n \in \mathbb{N}) \left( n \ge N_1 \Rightarrow |u_n - \ell| < \frac{\varepsilon}{2M} \right)$$

$$(\exists N_2 \in \mathbb{N}); (\forall n \in \mathbb{N}) \left( n \ge N_2 \Rightarrow |v_n - \ell'| < \frac{\varepsilon}{2(|\ell| + 1)} \right)$$

En choisissant $N = \sup(N_1, N_2)$, on obtient : $n \ge N \Rightarrow |u_n v_n - \ell \ell'| \le |(u_n - \ell) v_n + \ell (v_n - \ell')|$

Par conséquent : $n \ge N \Rightarrow |u_n v_n - \ell \ell'| \le |v_n| |u_n - \ell| + |\ell| |v_n - \ell'|$

C'est-à-dire : $n \ge N \Rightarrow |u_n v_n - \ell \ell'| \le M |u_n - \ell| + (|\ell| + 1) |v_n - \ell'|$

Par suite : $n \ge N \Rightarrow |u_n v_n - \ell \ell'| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} \Rightarrow |u_n v_n - \ell \ell'| < \varepsilon$

Ainsi, la suite $(u_n v_n)_{n \ge n_0}$ converge vers $\ell \ell'$.

- Montrons que la suite $\left( \frac{u_n}{v_n} \right)_{n \ge n_0}$ est convergente vers $\frac{\ell}{\ell'}$ : (on suppose ici que $v_n \neq 0$ et $\ell' \neq 0$)

Puisque $\frac{|\ell'|}{2} > 0$ alors : $(\exists N_1 \in \mathbb{N}); (\forall n \in \mathbb{N}) \left( n \ge N_1 \Rightarrow |v_n - \ell'| < \frac{|\ell'|}{2} \right)$

Puisque $\|v_n| - |\ell'| \le |v_n - \ell'|$ alors : $(\exists N_1 \in \mathbb{N}); \left( n \ge N_1 \Rightarrow \|v_n| - |\ell'| < \frac{|\ell'|}{2} \right)$

Donc pour tout $n \ge N_1$ : $|v_n| > \frac{|\ell'|}{2}$

Soit maintenant $\varepsilon > 0$.

Puisque $\lim v_n = \ell'$ alors : $(\exists N_2 \in \mathbb{N}); (\forall n \in \mathbb{N}) \left( n \ge N_2 \Rightarrow |v_n - \ell'| < \frac{\varepsilon \cdot \ell'^2}{2} \right)$

En choisissant $N = \sup(N_1, N_2)$, on obtient : $n \ge N \Rightarrow \left| \frac{1}{v_n} - \frac{1}{\ell'} \right| = \frac{|v_n - \ell'|}{|v_n| |\ell'|} < \frac{\varepsilon \ell'^2}{|\ell'^2|}$

C'est-à-dire : $n \ge N \Rightarrow \left| \frac{1}{v_n} - \frac{1}{\ell'} \right| < \varepsilon$. Par conséquent : $\lim \frac{1}{v_n} = \frac{1}{\ell'}$

Enfin : $\lim \frac{u_n}{v_n} = \lim u_n \times \frac{1}{v_n} = \frac{\ell}{\ell'}$, ce qui achève la démonstration.

> **Exemples.**
1) Soit $(u_n)_{n\ge 1}$ la suite définie pour tout $n \in \mathbb{N}^*$ par : $u_n = 3 - \frac{1}{n} + \frac{4}{\sqrt{n}}$
On a : $\lim_{n \to +\infty} u_n = 3 - \lim_{n \to +\infty} \frac{1}{n} + \lim_{n \to +\infty} \frac{4}{\sqrt{n}} = 3$ (car $\lim_{n \to +\infty} \frac{1}{n} = \lim_{n \to +\infty} \frac{4}{\sqrt{n}} = 0$)

2) Soit $(v_n)$ la suite définie par : $v_n = \frac{2\sqrt{n} + 7}{3n - 2}$

On a : $\lim_{n \to +\infty} v_n = \lim_{n \to +\infty} \frac{\sqrt{n} \left( 2 + \frac{7}{\sqrt{n}} \right)}{n \left( 3 - \frac{2}{n} \right)} = \lim_{n \to +\infty} \frac{1}{\sqrt{n}} \times \frac{2 + \frac{7}{\sqrt{n}}}{3 - \frac{2}{n}}$

Puisque $\lim_{n \to +\infty} \frac{1}{\sqrt{n}} = \lim_{n \to +\infty} \frac{2}{n} = \lim_{n \to +\infty} \frac{7}{\sqrt{n}} = 0$, alors $\lim_{n \to +\infty} v_n = 0$.

> **Applications.**
Calculer la limite de chacune des suites suivantes définies par :

$$u_n = \frac{2\sqrt{n} - 7}{7\sqrt{n} + 3} \quad ; \quad v_n = \frac{n^2 - 3n + 4}{n^2 + 5n + 7} \quad ; \quad w_n = \frac{2n - 3}{n^3 + 3n^2 + 1} \quad ; \quad x_n = \frac{(n + 4)(-3n^2 + 1)}{5n^3 + 8n}$$

#### 2.7. EXTENSION DES OPÉRATIONS SUR LA LIMITE DE SUITE

On admet que les résultats sur les limites des fonctions restent valables pour les limites des suites :

➤ Limite d'une somme :

|  lim $u_n$ | $\ell$ | $\ell$ | $\ell$ | $+\infty$ | $-\infty$ | $+\infty$  |
| --- | --- | --- | --- | --- | --- | --- |
|  lim $v_n$ | $\ell'$ | $+\infty$ | $-\infty$ | $+\infty$ | $-\infty$ | $-\infty$  |
|  lim $(u_n + v_n)$ | $\ell + \ell'$ | $+\infty$ | $-\infty$ | $+\infty$ | $-\infty$ | Forme indéterminée  |

➤ Limite d'un produit :

|  lim $u_n$ | $\ell$ | $+\infty$ | $+\infty$ | $-\infty$ | $-\infty$ | $+\infty$ | $+\infty$ ou $-\infty$  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  lim $v_n$ | $\ell'$ | $\ell' > 0$ | $\ell' < 0$ | $+\infty$ | $-\infty$ | $+\infty$ | $0$  |
|  lim $(u_n \times v_n)$ | $\ell\ell'$ | $+\infty$ | $-\infty$ | $-\infty$ | $+\infty$ | $+\infty$ | Forme indéterminée  |

➤ Limite d'une inverse :

|  $$\lim u_n$$ | $$\ell \neq 0$$ | $$+\infty$$ ou $$+\infty$$ | 0  |
| --- | --- | --- | --- |
|  $$\lim \frac{1}{u_n}$$ | $$\frac{1}{\ell}$$ | 0 | $$\lim \frac{1}{|u_n|} = +\infty$$  |

#### 2.8. LIMITES ET ORDRE

> **Proposition 8.**
Soit $$(u_n)_{n \ge n_0}$$ et $$(v_n)_{n \ge n_0}$$ deux suites numériques convergentes. Alors :

- Si la suite $\left(u_{n}\right)_{n\geq n_{0}}$ est positive alors lim $u_{n}\geq 0$
- Si $u_{n} \leq v_{n}$ pour tout entier $n \geq n_{0}$ alors $\lim u_{n} \leq \lim v_{n}$.

> **Preuve.**
Supposons que les suites $$(u_n)_{n \ge n_0}$$ et $$(v_n)_{n \ge n_0}$$ convergent et posons $$\lim u_n = \ell$$ et $$\lim v_n = \ell'$$ où $$(\ell, \ell') \in \mathbb{Z}$$

- Si la suite $\left(u_{n}\right)_{n\geq n_{0}}$ est positive alors on a $u_{n} = |u_{n}|$ pour tout $n\geq n_0$ . Comme $\left(|u_n|\right)_{n\geq n_0}$ converge vers $|\ell |$ (cela revient en fait de l'inégalité $\| u_n\| -|\ell \| \leq |u_n - \ell |$ et de la définition de convergence d'une suite), et par unicité de la limite, on en déduit que $|\ell | = \ell$ , c'est-à-dire que $\ell \geq 0$
- Si $u_{n} \leq v_{n}$ pour tout $n \geq n_{0}$, alors en posant $w_{n} = v_{n} - u_{n}$, la suite $\left(w_{n}\right)_{n \geq n_{0}}$ est positive et convergent. Comme $\lim w_{n} \geq 0$ et $\lim w_{n} = \lim v_{n} - \lim u_{n}$ alors $\lim u_{n} \leq \lim v_{n}$.

> **Remarque.**
- Si $$(u_n)_{n \ge n_0}$$ est une suite convergente dont on souhaite montrer que sa limite est strictement positive, alors il suffit de chercher un réel $$m > 0$$ tel que $$u_n \ge m$$ à partir d'un certain rang.

#### 2.9. MONOTONIE ET CONVERGENCE

> **Théorème 1.**
- Toute suite croissant majorée est convergente.
- Toute suite décroissant minorée est convergente.
Ce résultat porte le nom de « Théorème de la convergence monotone »

> **Remarque.**
- Le théorème ci-dessus assure la convergence de la suite mais ne détermine pas sa limite.

> **Exemple.**
On considère la suite $(u_n)$ définie par $u_0 = 0$ et pour tout $n \in \mathbb{N}$ : $u_{n+1} = \sqrt{2 + u_n}$
Montrons par récurrence que pour tout $n \in \mathbb{N}$ : $0 \le u_n \le 2$
- Initialisation : Pour $n = 0$, on a $u_0 = 0$ ; donc $0 \le u_0 \le 2$.

- Hérédité : Soit $n \in \mathbb{N}$. Supposons que $0 \le u_n \le 2$ et montrons que $0 \le u_{n+1} \le 2$.
On a : $0 \le u_n \le 2 \Rightarrow 2 \le 2 + u_n \le 4 \Rightarrow \sqrt{2} \le \sqrt{2 + u_n} \le 2 \Rightarrow 0 \le u_{n+1} \le 2$

- Conclusion : Pour tout $n \in \mathbb{N}$ : $0 \le u_n \le 2$
Étudions maintenant la monotonie de la suite $(u_n)$ :

On a pour tout $n \in \mathbb{N}$ : $u_{n+1} - u_n = \sqrt{2 + u_n} - u_n = \frac{2 + u_n - u_n^2}{\sqrt{2 + u_n + u_n}} = \frac{(u_n + 1)(2 - u_n)}{\sqrt{2 + u_n + u_n}}$
Comme $0 \le u_n \le 2$ alors $\frac{(u_n + 1)(2 - u_n)}{\sqrt{2 + u_n + u_n}} \ge 0$ pour tout $n \in \mathbb{N}$, donc $u_{n+1} - u_n \ge 0$.

Ainsi, la suite $(u_n)$ est croissante majorée par 2, donc elle est convergente.

Applications
1. Montrer que la suite $(u_n)$ définie par $u_0 = 3$ et pour tout $n \in \mathbb{N}$ : $u_{n+1} = 3 - \frac{9}{4u_n}$
est décroissante et minorée par $\frac{3}{2}$. Que peut-on en déduire quant à la convergence de la suite $(u_n)$ ?

2. Soit $(v_n)_{n \ge 1}$ la suite numérique définie par : $v_n = 1 + \frac{1}{1!} + \frac{1}{2!} + ... + \frac{1}{n!}$
a) Montrer que pour tout entier $k \ge 2$, $k! \ge 2^{k-1}$. En déduire que la suite $(v_n)_{n \ge 1}$ est majorée.
b) Montrer que la suite $(v_n)_{n \ge 1}$ est croissante puis en déduire qu'elle est convergente.

> **Proposition 9.**
- Toute suite croissant non majorée tend vers $+\infty$.
- Toute suite décroissante non minorée tend vers $-\infty$.

> **Preuve.**
- Soit $(u_n)_{n \ge n}$ une suite croissant.
Si elle est non majorée alors : $(\forall A > 0) (\exists N \in \mathbb{N})$ ; $u_N > A$. Comme $(u_n)_{n \ge n}$ est croissante alors pour tout entier $n \ge N$, $u_n \ge u_N > A$. Par conséquent : $(\exists N \in \mathbb{N}) ; (\forall n \in \mathbb{N}) \ u_n > A$
Par définition de la limite d'une suite tendant vers $+\infty$, on en déduit que $\lim u_n = +\infty$.
- Si $(u_n)_{n \ge n}$ est une suite décroissante non minorée alors $(-u_n)_{n \ge n}$ est une suite croissante non majorée.
Comme $\lim (-u_n) = +\infty$ alors $\lim u_n = -\infty$. Ce qui achève la démonstration.

### 3. Critères de convergence
#### 3.1. EXISTENCE DE LA LIMITE PAR ENCADREMENT

> **Théorème 2.**
Soit $(v_n)_{n \ge n_0}$ et $(w_n)_{n \ge n_0}$ deux suites numériques convergeant vers une limite commune $\ell$.

Si $(u_n)_{n \ge n_0}$ est une suite vérifiant l'encadrement $v_n \le u_n \le w_n$ à partir d'un certain rang, alors la suite $(u_n)_{n \ge n_0}$ converge et sa limite vaut $\ell$. Ce résultat est appelé « Théorème des gendarmes »

> **Preuve.**
Soit $(u_n)_{n \ge n_0}, (v_n)_{n \ge n_0}$ et $(w_n)_{n \ge n_0}$ trois suites numériques. Supposons que $(v_n)_{n \ge n_0}$ et $(w_n)_{n \ge n_0}$ convergent vers une même limite $\ell$ et qu'à partir d'un certain rang $N_1, v_n \le u_n \le w_n$.

Soit $\varepsilon > 0$. D'après la définition de la convergence d'une suite :

$$\left[ (\exists N_2 \in \mathbb{N}); (n \ge N_2 \Rightarrow |v_n - \ell| < \varepsilon) \right] \quad \text{et} \quad \left[ (\exists N_3 \in \mathbb{N}); (n \ge N_2 \Rightarrow |w_n - \ell| < \varepsilon) \right]$$

Par conséquent, à partir du rang $\max(N_2, N_3)$ : $\ell - \varepsilon < v_n < \ell + \varepsilon$ et $\ell - \varepsilon < w_n < \ell + \varepsilon$

Comme $v_n \le u_n \le w_n$, à partir du rang $N_1$, alors à partir du rang $N = \max(N_1, N_2, N_3)$ :

$$\ell - \varepsilon < v_n \le u_n \le w_n < \ell + \varepsilon$$

Par conséquent : $(\forall \varepsilon > 0) (\exists N \in \mathbb{N}); (\forall n \in \mathbb{N}) (n \ge N \Rightarrow |u_n - \ell| < \varepsilon)$

Ce qui revient à dire que la suite $(u_n)_{n \ge n_0}$ converge et sa limite vaut $\ell$.

> **Exemple.**
Montrons que la suite $(u_n)$ définie sur $\mathbb{N}$ par $u_n = \sum_{k=1}^n \frac{n}{\sqrt{n^4 + k}}$ converge, et déterminons sa limite :

Soit $n \in \mathbb{N}^*$. On a pour tout $k \in \{1, 2, \dots, n\}$ : $\frac{n}{\sqrt{n^4 + n}} \le \frac{n}{\sqrt{n^4 + k}} \le \frac{n}{\sqrt{n^4 + 1}}$

En sommant ces $n$ encadrements, on obtient : $\sum_{k=1}^n \frac{n}{\sqrt{n^4 + n}} \le \sum_{k=1}^n \frac{n}{\sqrt{n^4 + k}} \le \sum_{k=1}^n \frac{n}{\sqrt{n^4 + 1}}$

ce qui donne $\frac{n^2}{\sqrt{n^4 + n}} \le u_n \le \frac{n^2}{\sqrt{n^4 + 1}}$.

Puisque $\lim_{n \to \infty} \frac{n^2}{\sqrt{n^4 + n}} = \lim_{n \to \infty} \frac{1}{\sqrt{1 + \frac{1}{n^3}}} = 1$ et $\lim_{n \to \infty} \frac{n^2}{\sqrt{n^4 + 1}} = \lim_{n \to \infty} \frac{1}{\sqrt{1 + \frac{1}{n^4}}} = 1$ alors la suite $(u_n)$ est

convergente, et de plus : $\lim_{n \to \infty} u_n = 1$

> **Applications.**
1. Soit $\left(u_{n}\right)$ la suite numérique définie par: $u_{n} = \frac{\sqrt{n}\sin(n)}{n + 1}$ Paternimer la limite de la suite $\left(u_{n}\right)$.
2. Calculer les limites des suites $\left(v_{n}\right)_{n\geq 1}$ et $\left(w_{n}\right)_{n\geq 1}$ définies par: $v_{n} = \sum_{k = 1}^{2n + 1}\frac{1}{n^{2} + k}$ et $w_{n} = \sum_{k = 1}^{3n + 1}\frac{1}{\sqrt[3]{n^{3} + k}}$

> **Corollaire.**
Soit $\left(u_{n}\right)_{n\geq n_{0}}$ une suite numérique et $\ell$ un nombre réel. S'il existe une suite $\left(v_{n}\right)_{n\geq n_{0}}$ tendant vers 0 telle que pour tout $n\geq n_{0}$, $\left|u_{n}-\ell\right|\leq v_{n}$, alors la suite $\left(u_{n}\right)_{n\geq n_{0}}$ converge et sa limite vaut $\ell$.

> **Proposition 10.**
Soit $r$ un nombre rationnel non nul.

- Si $ r > 0 $ alors $ \lim_{n \to +\infty} n^{r} = +\infty $.
- Si $ r < 0 $ alors $ \lim_{n \to +\infty} n^{r} = 0 $.

> **Exemples.**
$\lim_{n\to\infty} n^{\frac{5}{6}} = +\infty \quad ; \quad \lim_{n\to+\infty} n^{\frac{2}{7}} = +\infty \quad ; \quad \lim_{n\to+\infty} n^{\frac{2}{3}} = 0 \quad ; \quad \lim_{n\to+\infty} n^{\frac{20}{17}} = 0$

#### 3.2. LIMITE D'UNE SUITE GÉOMÉTRIQUE

> **Proposition 11.**
Soit $q$ un nombre réel non nul.

- Si $ q > 1 $ alors $ \lim q^n = +\infty $.
- Si $-1 < q < 1$ alors $\lim q^n = 0$.
- Si $ q = 1 $ alors $ \lim q^n = 1 $.
- Si $ q \leq -1 $ alors la suite $ \left(q^n\right)_{n \in \mathbb{N}} $ n'admet pas de limite.

> **Exemples.**
1 On a $\lim_{n\to +\infty}\left(\frac{\sqrt{3}}{2}\right)^n = 0\mathrm{car} - 1 <   \frac{\sqrt{3}}{2} <  1.$ De mme: $\lim_{n\to +\infty}\left(-\frac{1}{4}\right)^n = 0\mathrm{car} - 1 <   - \frac{1}{4} <  1.$
2 On a $\lim_{n\to +\infty}\left(\frac{3}{2}\right)^n = +\infty \operatorname {car}\frac{3}{2} >1.$ Par contre, la suite $\left(\left(-\frac{3}{2}\right)^n\right)_{n\in \mathbb{N}}$ n'a pas de limite quand n tend vers $+\infty$

### 4. Suites de la forme $U_{n+1} = f(U_n)$ ET $V_n = f(U_n)$

#### 4.1. SUITE DE LA FORME $U_{n+1} = f(U_n)$

> **Proposition 12.**
Soit $f$ une fonction continue sur un intervalle $I$ telle que $f(I) \subset I$.

Soit $(u_n)_{n \ge n_0}$ une suite réelle définie par $u_{n_0} \in I$ et $(\forall n \ge n_0) u_{n+1} = f(u_n)$.

Si $(u_n)_{n \ge n_0}$ est convergente de limite $\ell$ et $\ell \in I$, alors $\ell$ est solution dans $I$ de l'équation $f(x) = x$.

> **Preuve.**
$(u_n)_{n \ge n_0}$ est convergente : $\lim_{n \to +\infty} u_n = \ell$. Soit $\varepsilon$ un nombre strictement positif.

Puisque $f$ est continue en $\ell$ alors : $(\exists \alpha > 0); (\forall x \in I) (|x - \ell| < \alpha \Rightarrow |f(x) - f(\ell)| < \varepsilon)$

Et comme $\lim_{n \to +\infty} u_n = \ell$ alors : $(\exists n_0 \in \mathbb{N}); (\forall n \ge n_0) (|u_n - \ell| < \alpha)$

Il est aisément facile de montrer par récurrence que pour tout entier $n \ge n_0, u_n \in I$.

On a : $(\exists n_0 \in \mathbb{N}); (\forall n \ge n_0) (|f(u_n) - f(\ell)| < \varepsilon)$. Ce dernier résultat est valable pour tout $\varepsilon > 0$.

Par suite, $\lim_{n \to +\infty} f(u_n) = f(\ell)$. Et puisque $\lim_{n \to +\infty} u_{n+1} = \ell$ alors $f(\ell) = \ell$. D'où le résultat.

> **Exemple.**
Soit $(u_n)$ la suite numérique définie par : $u_0 = 1$ et $u_{n+1} = \sqrt{\frac{1 + u_n}{2}}$ ($\forall n \in \mathbb{N}$)

Étudions la convergence de la suite $(u_n)$.

On considère la fonction numérique $f$ définie sur $I = [0; 1]$ par : $f(x) = \sqrt{\frac{1 + x}{2}}$

- La fonction $f$ est continue et croissante sur $I$, donc : $f(I) = [f(0); f(1)] = \left[\frac{\sqrt{2}}{2}; 1\right]$.

Par conséquent, $f(I) \subset I$.

- Montrons que pour tout $n \in \mathbb{N}, 0 \le u_n \le 1$ :

Initialisation : Pour $n = 0$, on a $u_0 = 1$ donc $0 \le u_0 \le 1$.

Hérédité : Soit $n \in \mathbb{N}$. Supposons que $0 \le u_n \le 1$ et montrons que $0 \le u_{n+1} \le 1$

On a $0 \le u_n \le 1$, c'est-à-dire $u_n \in I$, donc $f(u_n) \in f(I)$. Et comme $f(I) \subset I$ alors $u_{n+1} \in I$, d'où $0 \le u_{n+1} \le 1$.

Conclusion : Pour tout $n \in \mathbb{N}, 0 \le u_n \le 1$

• Étudions la monotonie de la suite $(u_n)$ :

On a pour tout $n \in \mathbb{N}$ :

$$u_{n+1} - u_n = \sqrt{\frac{1+u_n}{2}} - u_n = \left(\frac{1+u_n}{2} - u_n^2\right) \frac{1}{\sqrt{\frac{1+u_n}{2} + u_n}} = \frac{1+u_n - 2u_n^2}{2\left(\sqrt{\frac{1+u_n}{2} + u_n}\right)} = -\frac{(2u_n + 1)(1-u_n)}{2\left(\sqrt{\frac{1+u_n}{2} + u_n}\right)}$$

Puisque $0 \le u_n \le 1$ alors $-\frac{(2u_n + 1)(1-u_n)}{2\left(\sqrt{\frac{1+u_n}{2} + u_n}\right)} \le 0$, et donc $u_{n+1} - u_n \le 0$. La suite $(u_n)$ est décroissante.

• Puisque la suite $(u_n)$ est décroissante minorée par 0 alors elle est convergente. Soit $\ell$ sa limite.

D'après la proposition 12, la limite $\ell$ vérifie : $f(\ell) = \ell$ et $0 \le \ell \le 1$

On a : $f(\ell) = \ell \Leftrightarrow \sqrt{\frac{1+\ell}{2}} = \ell \Leftrightarrow 2\ell^2 - \ell - 1 = 0 \Leftrightarrow \left(\ell = 0 \text{ ou } \ell = -\frac{1}{2}\right)$

Et comme $0 \le \ell \le 1$ alors $\ell = 0$. Ainsi, la suite $(u_n)$ converge vers 0.

> **Application.**
Étudier la convergence de la suite $(u_n)$ définie par : $u_0 = \frac{1}{2}$ et $u_{n+1} = \frac{5}{2}u_n(1-u_n)$ ($\forall n \in \mathbb{N}$)

#### 4.2. LIMITE D'UNE SUITE DE LA FORME $V_n = f(U_n)$

> **Proposition 13.**
Si une suite $(u_n)$ est convergente vers $\ell$ et $f$ est une fonction continue en $\ell$ alors la suite $(v_n)$ définie par $v_n = f(u_n)$ est convergente et sa limite est $f(\ell)$.

> **Exemple.**
Soit $(v_n)$ la suite numérique définie par : $v_n = \tan\left(\frac{\pi n + 1}{3n + 2}\right)$

On pose pour tout $n \in \mathbb{N}$ : $u_n = \frac{\pi n + 1}{3n + 2}$. On a donc $v_n = f(u_n)$ avec $f(x) = \tan x$.

On a : $\lim_{n \to \infty} u_n = \lim_{n \to \infty} \frac{\pi n + 1}{3n + 2} = \lim_{n \to \infty} \frac{\pi + \frac{1}{n}}{3 + \frac{2}{n}} = \frac{\pi}{3}$. Puisque la fonction $f$ est continue en $\frac{\pi}{3}$ alors :

$$\lim_{n \to \infty} f(u_n) = f\left(\frac{\pi}{3}\right) = \tan\frac{\pi}{3} = \sqrt{3}.$$

En résumé : $\lim_{n \to \infty} v_n = \sqrt{3}$.

> **Applications.**
Déterminer les limites des suites définies par :

$$u_n = \sqrt[3]{\frac{24n^4 - n + 1}{3n^4 - n^2 - 7}} \quad ; \quad v_n = \sqrt[3]{\frac{16n^3 - 3n + 1}{2n^3 + 1}} \quad ; \quad w_n = \cos\left(\frac{n\pi - 2}{n^2 + 1}\right) \quad ; \quad t_n = \sin\left(\frac{\pi}{n + 1}\right)$$

### 5. Suites adjacentes
> **Définition 8.**
On dit que deux suites numériques $(u_n)$ et $(v_n)$ sont adjacentes si une est croissante, l'autre est décroissante et $\lim_{n \to +\infty} (v_n - u_n) = 0$.

> **Exemple.**
Soit $(u_n)_{n \ge 1}$ et $(v_n)_{n \ge 1}$ les suites numériques définies sur $\mathbb{N}^*$ par : $u_n = \frac{-2}{n}$ et $v_n = \frac{1}{n}$.

On a $(u_n)_{n \ge 1}$ est croissante, $(v_n)_{n \ge 1}$ est décroissante et de plus : $\lim_{n \to +\infty} (v_n - u_n) = \lim_{n \to +\infty} \frac{3}{n} = 0$.

Par conséquent, les suites $(u_n)_{n \ge 1}$ et $(v_n)_{n \ge 1}$ sont adjacentes.

> **Applications.**
On considère les suites numériques $(u_n)$ et $(v_n)$ définies par : $u_n = \sum_{k=0}^{\infty} \frac{1}{k!}$ et $v_n = u_n + \frac{1}{n!}$.

Montrer que les suites $(u_n)$ et $(v_n)$ sont adjacentes.

> **Proposition 14.**
Si $(u_n)$ et $(v_n)$ sont deux suites adjacentes alors elles sont convergentes et ont la même limite.

> **Preuve.**
Soit $(u_n)$ et $(v_n)$ sont deux suites adjacentes. Supposons que $(u_n)$ est croissante et $(v_n)$ décroissante.

Comme $(u_n)$ est croissante et $(v_n)$ décroissante, la suite $(u_n - v_n)$ est croissante. Comme de plus elle tend vers 0, elle est à valeurs négatives, ce qui donne : $\forall n \in \mathbb{N}, u_n \le v_n$.

On en déduit que la suite $(u_n)$ est majorée par $v_0$ puisque : $\forall n \in \mathbb{N}, u_n \le v_n \le v_0$.

Comme elle est croissante alors elle convergente.

De même, la suite $(v_n)$ étant décroissante et minorée par $u_0$, elle converge.

Enfin, l'écriture $v_n = u_n + (v_n - u_n)$ permet de prouver que $(v_n)$ converge et nous donne :

$$\lim_{n \to +\infty} v_n = \lim_{n \to +\infty} u_n + \lim_{n \to +\infty} (v_n - u_n) = \lim_{n \to +\infty} u_n \quad (\text{car } \lim_{n \to +\infty} (v_n - u_n) = 0)$$

Ainsi, les suites $(u_n)$ et $(v_n)$ sont convergentes et ont la même limite.

> **Exemple.**
Soit $(u_n)_{n\ge 1}$ et $(v_n)_{n\ge 1}$ les suites numériques définies sur $\mathbb{N}^*$ par :

$$u_n = 1 + \frac{1}{\sqrt{2}} + ... + \frac{1}{\sqrt{n}} - 2\sqrt{n+1} \quad \text{et} \quad v_n = 1 + \frac{1}{\sqrt{2}} + ... + \frac{1}{\sqrt{n}} - 2\sqrt{n}$$

On montre facilement que la suite $(u_n)_{n\ge 1}$ est croissante et $(v_n)_{n\ge 1}$ est décroissante. On a de plus :

$$\lim_{n \to +\infty} (v_n - u_n) = \lim_{n \to +\infty} 2(\sqrt{n+1} - \sqrt{n}) = \lim_{n \to +\infty} \frac{2}{\sqrt{n+1} + \sqrt{n}} = 0$$

Il s'ensuit donc que les suites $(u_n)_{n\ge 1}$ et $(v_n)_{n\ge 1}$ sont adjacentes, donc elles sont toutes les deux convergentes et ont la même limite.

> **Applications.**
Soit $a$ et $b$ deux réels strictement positifs tels que $a < b$. On considère les suites $(u_n)$ et $(v_n)$ définies par :

$$\begin{cases} u_0 = a \\ u_{n+1} = \frac{2u_n v_n}{u_n + v_n} \end{cases}, \forall n \in \mathbb{N} \quad \text{et} \quad \begin{cases} v_0 = b \\ v_{n+1} = \frac{u_n + v_n}{2} \end{cases}, \forall n \in \mathbb{N}$$

1. Montrer par récurrence que pour tout $n\in \mathbb{N}$ .. $u_{n}\leq v_{n}$
2. Montrer que la suite $\left(u_{n}\right)$ est croissant et que $\left(v_{n}\right)$ est decroissant.
3. Montrer que pour tout $n\in \mathbb{N}$ .. $v_{n + 1} - u_{n + 1}\leq \frac{1}{2} (v_n - u_n)$
4. En déduire que les suites $\left(u_{n}\right)$ et $\left(v_{n}\right)$ sont adjacentes.
5. Montrer que la suite $\left(u_{n}v_{n}\right)$ est constante, et en deduire la limite commune des suites $\left(u_{n}\right)$ et $\left(v_{n}\right)$.

## Méthodes

### A. Monotonie d'une suite
Dans les cas suivants, étudier la monotonie de la suite $(u_n)$ :
a) $u_n = \left(\sum_{k=0}^{n} \frac{1}{2^k}\right) - n$ $(n \in \mathbb{N})$ ; b) $u_n = \frac{1}{n(n+1)}$ $(n \in \mathbb{N}^*)$ ; c) $u_n = \frac{n^2}{3^n}$ $(n \ge 2)$
d) $u_n = 2^n \sin\left(\frac{\theta}{2^n}\right)$ avec $\theta \in ]0; \pi[$ $(n \in \mathbb{N})$

> **Solution.**
a) On a pour tout $n \in \mathbb{N}$ : $u_{n+1} - u_n = \left(\sum_{k=0}^{n+1} \frac{1}{2^k} - (n+1)\right) - \left(\sum_{k=0}^{n} \frac{1}{2^k} - n\right) = \frac{1}{2^{n+1}} - 1$. Puisque $2^{n+1} \ge 1$ alors $\frac{1}{2^{n+1}} \le 1$ et donc $u_{n+1} - u_n \le 0$. on peut donc en déduire que $(u_n)$ est une suite décroissante.

b) Pour étudier la monotonie de la suite $(u_n)_{n \ge 1}$ on peut utiliser l'une des deux méthodes suivantes :

1ère méthode : On a pour tout entier $n \ge 1$,
$u_{n+1} - u_n = \frac{1}{(n+1)(n+2)} - \frac{1}{n(n+1)} = \frac{n-n-2}{n(n+1)(n+2)} = \frac{-2}{n(n+1)(n+2)}$ : d'où $u_{n+1} - u_n < 0$.

On en déduit donc que la suite $(u_n)_{n \ge 1}$ est strictement décroissante.

2ème méthode : On pose $f(x) = \frac{1}{x(x+1)}$ alors : $\forall n \ge 1, u_n = f(n)$. On étudie alors la monotonie de

la fonction $f$ sur $[1; +\infty[$.

$f$ est dérivable sur $[1; +\infty[$ et pour tout $x \in [1; +\infty[$, $f'(x) = -\frac{2x+1}{x^2(x+1)^2} < 0$. Donc la fonction

$f$ est décroissante sur $[1; +\infty[$.

Considérons $n \ge 1$, alors $1 \le n \le n+1$ donc $f(n) \ge f(n+1)$ d'où $u_n \ge u_{n+1}$.

On en déduit donc que la suite $(u_n)_{n \ge 1}$ est décroissante.

c) On a pour tout $n \ge 2$, $u_n > 0$. Étudions $\frac{u_{n+1}}{u_n}$. On a pour tout $n \ge 2$ : $\frac{u_{n+1}}{u_n} = \frac{1}{3}\left(\frac{n+1}{n}\right)^2 = \frac{1}{3}\left(1 + \frac{1}{n}\right)^2$

Puisque $n \ge 2$ alors $1 + \frac{1}{n} \le \frac{3}{2}$ et donc $\frac{1}{3}\left(1 + \frac{1}{n}\right)^2 \le \frac{3}{4}$. Il s'ensuit donc que : $\forall n \ge 2, \frac{u_{n+1}}{u_n} \le 1$

On en déduit donc que la suite $(u_n)_{n \ge 2}$ est décroissante.

d) On a pour tout entier $n \ge 0$ :

$u_{n+1} - u_n = 2^{n+1} \sin\left(\frac{\theta}{2^{n+1}}\right) - 2^n \sin\left(\frac{\theta}{2^n}\right) = 2^n \left(2 \sin\left(\frac{\theta}{2^{n+1}}\right) - \sin\left(\frac{\theta}{2^n}\right)\right)$

Or $$\sin\left(\frac{\theta}{2^n}\right) = \sin\left(2\frac{\theta}{2^{n+1}}\right) = 2\sin\left(\frac{\theta}{2^{n+1}}\right)\cos\left(\frac{\theta}{2^{n+1}}\right)$$, ce qui donne :

$$u_{n+1} - u_n = 2^{n+1} \left( \sin\left(\frac{\theta}{2^{n+1}}\right) - \sin\left(\frac{\theta}{2^{n+1}}\right) \cos\left(\frac{\theta}{2^{n+1}}\right) \right) = 2^{n+1} \sin\left(\frac{\theta}{2^{n+1}}\right) \left( 1 - \cos\left(\frac{\theta}{2^{n+1}}\right) \right)$$

De plus, sachant que $$\theta \in ]0, \pi[$$ alors $$\frac{\theta}{2^{n+1}} \in ]0, \pi[$$ donc $$\sin\left(\frac{\theta}{2^{n+1}}\right) \ge 0$$ et $$1 - \cos\left(\frac{\theta}{2^{n+1}}\right) \ge 0$$.

Il s'ensuit donc que $$u_{n+1} - u_n \ge 0$$. Ainsi, la suite $$(u_n)$$ est croissante.

Remarque : On pourra aussi étudier $$\frac{u_{n+1}}{u_n}$$. En effet, on montre facilement que pour tout $$n \in \mathbb{N}$$, $$u_n > 0$$

et de plus : $$\frac{u_{n+1}}{u_n} = \frac{2\sin\left(\frac{\theta}{2^{n+1}}\right)}{\sin\left(\frac{\theta}{2^n}\right)} = \frac{2\sin\left(\frac{\theta}{2^{n+1}}\right)}{2\sin\left(\frac{\theta}{2^{n+1}}\right)\cos\left(\frac{\theta}{2^{n+1}}\right)} = \frac{1}{\cos\left(\frac{\theta}{2^{n+1}}\right)} \ge 1$$

Ce qui montre que la suite $$(u_n)$$ est croissante.

• Pour étudier la monotonie d'une suite $$(u_n)_{n \ge n_0}$$, on dispose de plusieurs méthodes selon l'expression des termes de la suite $$(u_n)_{n \ge n_0}$$ :

Méthode 1 : On étudie le signe de $$u_{n+1} - u_n$$ : cette méthode est particulièrement intéressante lorsque $$u_n$$ s'écrit avec des sommes.

Méthode 2 : Si la suite $$(u_n)_{n \ge n_0}$$ est strictement positive, on peut alors étudier la position

de $$\frac{u_{n+1}}{u_n}$$ par rapport à 1. On a alors : $$[ (u_n)_{n \ge n_0} \text{ est croissante} ] \Leftrightarrow \forall n \ge n_0, \frac{u_{n+1}}{u_n} \ge 1$$

Cette méthode est particulièrement intéressante lorsque $$u_n$$ s'écrit avec des produits, factorielles, ...

Méthode 3 : Si $$u_n = f(n)$$, alors on étudie la monotonie de la fonction $$f$$ sur $$[n_0, +\infty[$$.

Si $$f$$ est croissante sur $$[n_0, +\infty[$$ on montre facilement que $$(u_n)_{n \ge n_0}$$ est croissante.

Si $$f$$ est décroissante sur $$[n_0, +\infty[$$ on montre facilement que $$(u_n)_{n \ge n_0}$$ est décroissante.

### B. Critères de convergence
1) Dans chacun des exemples suivants, montrer que la suite, dont le terme générale $$u_n$$ converge et calculer sa limite :

a) $$u_n = \sum_{k=1}^n \frac{n}{n^2 + k}$$ ; b) $$u_n = \frac{1}{n} \sum_{k=1}^n E(kx) \quad (x \in \mathbb{R}^n)$$ ; c) $$u_n = \sum_{k=0}^n (C_n^k)^{-1} \quad (n \ge 5)$$

2) On considère la suite la suite $$(v_n)_{n \ge 1}$$ définie pour tout $$n \in \mathbb{N}^*$$ par : $$v_n = \sum_{k=1}^n \frac{1}{n + k}$$

Démontrer que la suite $$(v_n)_{n \ge 1}$$ est monotone puis démontrer que cette suite converge.

3) On considère la suite $(w_n)$ définie par : $w_0 = \frac{1}{2}$ et $w_{n+1} = w_n + \frac{1}{w_n}$ pour tout $n \in \mathbb{N}$.

Démontrer que $(w_n)$ est croissante puis montrer qu'elle est divergente.

4) On considère la suite $(S_n)_{n \in \mathbb{N}^*}$ définie pour tout $n \in \mathbb{N}^*$ par : $S_n = \frac{1}{n!} \sum_{k=1}^n k!$

a) Justifier que la suite $\left(S_{n}\right)_{n\in \mathbb{N}}$ est minorée par 1.
b) Montrer que pour tout entier $n\geq 3$ ： $\sum_{k = 1}^{n - 1}k!\leq (2n - 3),(n - 2)!$
c) En déduire que pour tout $ n \geq 3 $, $ S_{n} \leq 1 + \frac{2n - 3}{n(n - 1)} $. Déterminer alors la limite de la suite $ (S_{n})_{n \in \mathbb{N}} $.

> **Solution.**
1) a) Soit $k \in \{1, 2, \dots, n\}$. De $1 \le k \le n$, on en déduit les implications suivantes :

$$1 \le k \le n \Rightarrow 0 < n^2 + 1 \le n^2 + k \le n^2 + n \Rightarrow \frac{1}{n^2 + n} \le \frac{1}{n^2 + k} \le \frac{1}{n^2 + 1} \Rightarrow \frac{n}{n^2 + n} \le \frac{n}{n^2 + k} \le \frac{n}{n^2 + 1}$$

Et alors : $1 \le k \le n \Rightarrow \sum_{k=1}^n \frac{n}{n^2 + n} \le \sum_{k=1}^n \frac{n}{n^2 + k} \le \sum_{k=1}^n \frac{n}{n^2 + 1} \Rightarrow \frac{n^2}{n^2 + n} \le u_n \le \frac{n^2}{n^2 + 1}$

Or : $\lim_{n \to +\infty} \frac{n^2}{n^2 + n} = \lim_{n \to +\infty} \frac{1}{1 + \frac{1}{n}} = 1$ et $\lim_{n \to +\infty} \frac{n^2}{n^2 + 1} = \lim_{n \to +\infty} \frac{1}{1 + \frac{1}{n^2}} = 1$. D'après le théorème de la limite

par encadrement (appelé aussi théorèmes des gendarmes), on en déduit que : $\lim_{n \to +\infty} u_n = 1$

b) Puisque : $(\forall t \in \mathbb{R}) \, t-1 < E(t) \le t$, on a : $(\forall n \in \mathbb{N}^*)$ $\frac{1}{n^2} \sum_{k=1}^n (kx-1) < u_n \le \frac{1}{n^2} \sum_{k=1}^n (kx)$

c'est-à-dire : $(\forall n \in \mathbb{N}^*)$ $\frac{n+1}{2n}x - \frac{1}{n} < u_n \le \frac{n+1}{2n}x$

On conclut, par le théorème de la limite par encadrement : $\lim_{n \to +\infty} u_n = \frac{x}{2}$

c) On a pour tout entier $n \ge 5$ :

$$u_n = (C_n^0)^{-1} + (C_n^1)^{-1} + \sum_{k=2}^{n-2} (C_n^k)^{-1} + (C_n^{n-1})^{-1} + (C_n^n)^{-1} = 2\left(1 + \frac{1}{n}\right) + \sum_{k=2}^{n-2} (C_n^k)^{-1}$$

Comme : $k \in \{2, \dots, n-2\}$, $C_n^k \ge C_n^2 = \frac{n(n-1)}{2}$; alors : $0 \le \sum_{k=2}^{n-2} (C_n^k)^{-1} \le \frac{2(n-3)}{n(n-1)}$

Puisque $\lim_{n \to +\infty} \frac{2(n-3)}{n(n-1)} = \lim_{n \to +\infty} \frac{2\left(1 - \frac{3}{n}\right)}{n-1} = 0$, alors d'après le théorème de la limite par encadrement

$$\lim_{n \to +\infty} \sum_{k=2}^{n-2} (C_n^k)^{-1} = 0. \text{ Comme } \lim_{n \to +\infty} 2\left(1 + \frac{1}{n}\right) = 2 \text{ alors : } \lim_{n \to +\infty} u_n = 2$$

• Pour montrer qu'une suite $(u_n)$ converge et trouver sa limite, on essaie d'exprimer le terme général $u_n$ de façon à pouvoir appliquer les théorèmes généraux comme :

o Les théorèmes d'encadrement :

$$\left\{ \begin{array}{l} v_n \le u_n \le w_n \\ \lim_{n \to +\infty} v_n = \lim_{n \to +\infty} w_n = \ell \end{array} \right. \Rightarrow \lim_{n \to +\infty} u_n = \ell \quad ; \quad \left\{ \begin{array}{l} |u_n - \ell| \le v_n \\ \lim_{n \to +\infty} v_n = 0 \end{array} \right. \Rightarrow \lim_{n \to +\infty} u_n = \ell$$

o Les opérations sur les limites :

$$\left\{ \begin{array}{l} \lim_{n \to +\infty} u_n = \ell \\ \lim_{n \to +\infty} v_n = \ell' \end{array} \right. \Rightarrow \left\{ \begin{array}{l} \lim_{n \to +\infty} (u_n + v_n) = \ell + \ell' \\ \lim_{n \to +\infty} (u_n v_n) = \ell \ell' \end{array} \right. ; \quad \left\{ \begin{array}{l} \lim_{n \to +\infty} u_n = \ell \neq 0 \\ \lim_{n \to +\infty} v_n = \ell' \ge 0 \end{array} \right. \Rightarrow \left\{ \begin{array}{l} \lim_{n \to +\infty} \frac{1}{u_n} = \frac{1}{\ell} \\ \lim_{n \to +\infty} \sqrt{v_n} = \sqrt{\ell'} \end{array} \right.$$

o Utilisation des limites des fonctions numériques : $$\left\{ \begin{array}{l} u_n = f(n) \\ \lim_{x \to +\infty} f(x) = \ell \end{array} \right. \Rightarrow \lim_{n \to +\infty} u_n = \ell$$

Pour encadrer un produit, il suffit parfois d'encadrer chacun des facteurs du produit.
- On retiendra que lorsque l'on « passe » aux limites dans des inégalités, on perd les inégalités strictes.
- Il ne faut pas « passer » à la limite dans des inégalités avant de prouver que toutes les suites concernées convergent.

2) On a pour tout $n \in \mathbb{N}^*$ : $v_{n+1} - v_n = \sum_{k=1}^{n+1} \frac{1}{n+1+k} - \sum_{k=1}^{n} \frac{1}{n+k} = \sum_{k=2}^{n+2} \frac{1}{n+k} - \sum_{k=1}^{n} \frac{1}{n+k} = \frac{1}{2n+2} + \frac{1}{2n+1} - \frac{1}{n+1}$

Il s'ensuit donc : $v_{n+1} - v_n = \frac{(2n+1) + (2n+2) - 2(2n+1)}{(2n+2)(2n+1)} = \frac{1}{(2n+2)(2n+1)} \ge 0$

On en déduit donc que la suite $(v_n)_{n \ge 1}$ est croissante.

Soit $n \in \mathbb{N}^*$ et $1 \le k \le n$. On a $0 < n+1 \le 2n$. Alors $\frac{1}{2n} \le \frac{1}{n+k} \le \frac{1}{n+1}$, donc : $\sum_{k=1}^{n} \frac{1}{2n} \le v_n \le \sum_{k=1}^{n} \frac{1}{n+1}$

d'où : $\forall n \in \mathbb{N}^*, v_n \le \frac{n}{n+1} \le 1$. La suite $(v_n)_{n \ge 1}$ est croissante majorée par 1, donc elle est convergente.

- Pour encadrer une somme, il suffit parfois d'encadrer chacun des termes de la somme.
- Lorsque l'on sait qu'une suite $\left(u_{n}\right)$ est croissant (respectivement décroissant) pour démontré qu'elle est convergente, il suffit de montré qu'elle est majorée (respectivement minorée).

3) Une démonstration par récurrence permet de montrer facilement que : $\forall n \in \mathbb{N}, w_n > 0$

Alors, pour tout $n \in \mathbb{N}$, $w_{n+1} - w_n = \frac{1}{w_n} > 0$. Par conséquent, la suite $(w_n)$ est croissante.

Supposons que la suite $(w_n)$ converge vers une valeur $\alpha$.

Comme la suite $(w_n)$ est croissante et $w_0 = 0,5$ on a $\alpha \ge 0,5$.

Soit $f$ la fonction définie sur $\mathbb{R}^*$ par : $f(x) = x + \frac{1}{x}$. On a alors pour tout $n \in \mathbb{N}$, $w_{n+1} = f(w_n)$. Or $\lim_{n \to +\infty} w_{n+1} = \alpha$, de plus $\lim_{n \to +\infty} w_n = \alpha$ et $\lim_{x \to \alpha} f(x) = f(\alpha)$ donc $\lim_{n \to +\infty} f(w_n) = f(\alpha) = \alpha + \frac{1}{\alpha}$. On en déduit que $\alpha$ est solution de l'équation $\alpha = \alpha + \frac{1}{\alpha}$, or cette équation n'a pas de solution. Donc la suite $(w_n)$ ne converge pas, de plus elle croissante, donc $\lim_{n \to +\infty} w_n = +\infty$.

- Pour montrer qu'une suite $(u_n)$ diverge, on essaye d'exprimer le terme général $u_n$ de façon à pouvoir appliquer les théorèmes généraux comme :

o Les théorèmes d'encadrement :

$$\left\{ \begin{array}{l} v_n \le u_n \\ \lim_{n \to +\infty} v_n = +\infty \end{array} \right. \Rightarrow \lim_{n \to +\infty} u_n = +\infty \quad ; \quad \left\{ \begin{array}{l} u_n \le v_n \\ \lim_{n \to +\infty} v_n = -\infty \end{array} \right. \Rightarrow \lim_{n \to +\infty} u_n = -\infty$$

o Les opérations sur les limites : (A titre d'exemple)

$$\left\{ \begin{array}{l} \lim_{n \to +\infty} u_n = \pm\infty \\ \lim_{n \to +\infty} v_n = \ell \neq 0 \end{array} \right. \Rightarrow \left\{ \begin{array}{l} \lim_{n \to +\infty} (u_n + v_n) = \pm\infty \\ \lim_{n \to +\infty} (u_n v_n) = \pm\infty \end{array} \right. ; \quad \left\{ \begin{array}{l} \lim_{n \to +\infty} u_n = +\infty \\ \lim_{n \to +\infty} v_n = +\infty \end{array} \right. \Rightarrow \left\{ \begin{array}{l} \lim_{n \to +\infty} (u_n + v_n) = +\infty \\ \lim_{n \to +\infty} (u_n v_n) = +\infty \\ \lim_{n \to +\infty} \sqrt{u_n} = +\infty \end{array} \right.$$

o Utilisation des limites des fonctions numériques : $\left\{ \begin{array}{l} u_n = f(n) \\ \lim_{x \to +\infty} f(x) = \pm\infty \end{array} \right. \Rightarrow \lim_{n \to +\infty} u_n = \pm\infty$

- On peut aussi utiliser le raisonnement par l'absurde en supposant que la suite $(u_n)$ est convergente et amener à une contradiction. Cette méthode est praticable pour les suites de la forme $u_{n+1} = f(u_n)$ où $(u_n)$ est strictement monotone et l'équation $x = f(x)$ n'admet pas de solutions réelles dans un intervalle $I$ tel que $u_0 \in I$ et $f(I) \subset I$.

- Signalons enfin un résultat intéressant pour les suites monotones qui affirme :

o Si la suite $(u_n)$ est croissante non majorée alors $\lim_{n \to +\infty} u_n = +\infty$.

o Si la suite $(u_n)$ est décroissante non minorée alors $\lim_{n \to +\infty} u_n = -\infty$.

$$1!+2!+\ldots+(n-2)!+(n-1)!\leq(n-2+n-1).(n-2)! \text{ et par suite : } \sum_{k=1}^{n-1} k!\leq(2n-3).(n-2)!$$

c) Soit $n$ un entier supérieur ou égal à 3. On a : $S_n = \frac{1}{n!} \sum_{k=1}^{n-1} k!+1$

Puisque : $\sum_{k=1}^{n-1} k!\leq(2n-3)(n-2)!$ alors $\frac{1}{n!} \sum_{k=1}^{n-1} k!\leq \frac{2n-3}{n(n-1)}$. Par suite : $S_n \leq 1 + \frac{2n-3}{n(n-1)}$

Calculons maintenant $\lim_{n\to+\infty} S_n$ : On a pour tout entier $n \geq 3$, $1 \leq S_n \leq 1 + \frac{2n-3}{n(n-1)}$.

Puisque $\lim_{n\to+\infty} 1 + \frac{2n-3}{n(n-1)} = \lim_{n\to+\infty} 1 + \frac{2-\frac{3}{n}}{n-1} = 1$ alors on en déduit que $\lim_{n\to+\infty} S_n = 1$.

### C. Étude d'une suite définie implicitement
Pour tout $n \in \mathbb{N}$, on considère l'équation : $(F_n) : x^n + 5x - 1 = 0$

1) Montrer que pour tout $n \in \mathbb{N}$, l'équation $(F_n)$ admet une et une seule solution sur $\mathbb{R}^+$.

On note $\beta_n$ cette solution.

2) a) Calculer $\beta_0, \beta_1$ et $\beta_2$.

b) Démontrer que pour tout $ n \in \mathbb{N} $, $ 0 \leq \beta_{n} \leq \frac{1}{5} $.
c) En déduire que $\lim_{n\to \infty}\left(\beta_n\right)^n = 0$
d) En utilisant l'équation satisfait par $\beta_{n}$, en déduire $\lim_{n\to \infty}\beta_{n}$.

3) On souhaite maintenant déterminer la monotonie de la suite $(\beta_n)$.

Pour cela, on considère la fonction $f_n$ définie sur $[0;1[$ par : $f_n(x) = x^n + 5x - 1$

a) Montrer que pour tout $ x \in [0;1[ : f_{n+1}(x) < f_n(x) $
b) En évaluant cette inégalité en $ x = \beta_{n} $, déterminer le signe de $ f_{n+1}(\beta_{n}) $.
c) Que vaut $ f_{n+1}(\beta_{n+1}) $? D'éduire de cette question et de la précédente que pour tout $ n \in \mathbb{N} $,

$$f_{n+1}(\beta_n) < f_{n+1}(\beta_{n+1})$$

d) Quelle est la monotonie de la suite $(\beta_n)$ ?

> **Solution.**
Pour tout $n \in \mathbb{N}$, on considère l'équation : $(F_n) : x^n + 5x - 1 = 0$

1) Pour chaque $n \in \mathbb{N}$ fixé, la fonction polynomiale $g_n$ définie par $g_n(x) = x^n + 5x - 1$, est continue et strictement croissante sur $\mathbb{R}^+$ car pour tout $(a, b) \in (\mathbb{R}^+)^2$ tel que $a < b$ alors :

$$a^n + 5a - 1 < b^n + 5b - 1, \text{ et donc } g_n(a) < g_n(b).$$

Il s'ensuit alors, d'après le théorème de la bijection que $g_n$ réalise une bijection de $\mathbb{R}^+$ sur l'intervalle $g_n(\mathbb{R}^+)=\lfloor g_n(0); \lim_{n \to \infty} g_n(x)\rfloor = [-1; +\infty[$. Puisque $0 \in [-1; +\infty[$, alors l'équation $g_n(x) = 0$, c'est-à-dire l'équation $(F_n)$, admet une et une seule solution dans $\mathbb{R}^+$, notée $\beta_n$.

2) a) Calcul de $\beta_0, \beta_1$ et $\beta_2$ :

$\beta_0$ est l'unique solution dans $\mathbb{R}^+$ de $(F_0): x^0 + 5x - 1 = 0$, c'est-à-dire $(F_0): 5x = 0$, ce qui donne $\beta_0 = 0$
$\beta_1$ est l'unique solution dans $\mathbb{R}^+$ de $(F_1): x^1 + 5x - 1 = 0$, c'est-à-dire $(F_1): 6x - 1 = 0$, ce qui donne $\beta_1 = \frac{1}{6}$
$\beta_2$ est l'unique solution dans $\mathbb{R}^+$ de $(F_2): x^2 + 5x - 1 = 0$, ce qui donne $\beta_2 = \frac{-5 + \sqrt{29}}{2}$.

b) Montrons que pour tout $n \in \mathbb{N}$, $0 \le \beta_n \le \frac{1}{5}$.

On sait que $\beta_n$ est l'unique solution de l'équation $(F_n)$, donc $\beta_n^n + 5\beta_n - 1 = 0$ et $\beta_n \ge 0$.

On en déduit donc que $(\beta_n)^n = 1 - 5\beta_n$, et alors $1 - 5\beta_n \ge 0$, d'où $0 \le \beta_n \le \frac{1}{5}$.

c) D'après la question précédente, on a pour tout $n \in \mathbb{N}$, $0 \le \beta_n \le \frac{1}{5}$, ce qui entraîne que $0 \le (\beta_n)^n \le \left(\frac{1}{5}\right)^n$.
Mais comme $\left|\frac{1}{5}\right| < 1$, alors $\lim_{n \to \infty} \left(\frac{1}{5}\right)^n = 0$, et donc $\lim_{n \to \infty} (\beta_n)^n = 0$.

d) On a déjà remarqué dans 2)b) que $(\beta_n)^n = 1 - 5\beta_n$ pour tout $n \in \mathbb{N}$.

Or $\lim_{n \to \infty} (\beta_n)^n = 0$ donc $\lim_{n \to \infty} (1 - 5\beta_n) = 0$, et alors $\lim_{n \to \infty} \beta_n = \frac{1}{5}$.

3) On considère la fonction $f_n$ définie sur $[0, 1[$ par : $f_n(x) = x^n + 5x - 1$

a) On a pour tout $x \in [0; 1[$ et $n \in \mathbb{N}$ : $f_{n+1}(x) - f_n(x) = x^{n+1} - x^n = x^n(x - 1)$

Puisque $x^n(x - 1) < 0$ alors $f_{n+1}(x) - f_n(x) < 0$, d'où $f_{n+1}(x) < f_n(x)$ pour tout $x \in [0; 1[$.

b) En évaluant cette inégalité en $x = \beta_n$, on obtient $f_{n+1}(\beta_n) < f_n(\beta_n)$. Comme $f_n(\beta_n) = 0$ alors $f_{n+1}(\beta_n) < 0$.

c) Puisque $\beta_{n+1}$ est solution de $f_{n+1}(x) = 0$ alors $f_{n+1}(\beta_{n+1}) = 0$.

Puisqu'on a déjà montré que $f_{n+1}(\beta_n) < 0$ et $f_{n+1}(\beta_{n+1}) = 0$ alors $f_{n+1}(\beta_n) < f_{n+1}(\beta_{n+1})$.

d) On sait que pour la fonction $f_{n+1}$ est strictement croissante sur $[0; 1[$, il s'ensuit donc que $\beta_n < \beta_{n+1}$.
On peut en déduire donc que la suite $(\beta_n)$ est strictement croissante.

• Pour comparer deux éléments d'un intervalle $I$, on peut comparer leurs images par une fonction $f$ strictement monotone sur $I$. Plus précisément : soient $(x, y) \in I^2$.

Si $f$ est strictement croissante sur $I$ avec $f(x) \le f(y)$ alors $x \le y$.

Si $f$ est strictement décroissante sur $I$ avec $f(x) \le f(y)$ alors $x \ge y$.

### D. Généralités sur les suites récurrentes
On considère un intervalle $I$ de $\mathbb{R}$ et une fonction $f : I \to I$ continue sur $I$.

On considère la suite $(u_n)$ définie par : $u_0 \in I$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$.

1) Démontrer que: $(\forall n \in \mathbb{N}) u_n \in I$
2) On suppose dans cette question que $ f $ est croissant sur $ I $.

a) Démontrer que $(u_{n})$ est monotone (Étudier deux cas selon la position relative de $u_{0}$ et $u_{1}$)
b) On suppose que $ I $ est un segment, $ I = [a, b] $. Démontrer que la suite $ (u_n) $ est convergente déterminer une équation satisfaite par sa limite $ \alpha $.

3) On suppose dans cette question que $f$ est décroissante sur $I$. On pose : $v_n = u_{2n}$ et $w_n = u_{2n+1}$
Démontrer que les suites $(v_n)$ et $(w_n)$ sont monotones et qu'elles ont des sens de variations contraires.

> **Solution.**
1) Démontrons par récurrence que : $(\forall n \in \mathbb{N}) u_n \in I$. Posons $P(n) : u_n \in I$

Par hypothèse $u_0 \in I$, $P(0)$ est vraie. Supposons que pour un entier $n$ fixé avec $n \ge 0$, $u_n \in I$.

Par définition $f(u_n) \in f(I)$. Or, par hypothèse $f(I) \subset I$ donc $u_{n+1} = f(u_n) \in I$, ce qui prouve que $P(n+1)$ est vraie. On peut donc conclure que : $\forall n \in \mathbb{N}, u_n \in I$.

2) a) Nous allons démontrer que si $u_0 \le u_1$ alors la suite $(u_n)$ est croissante.

et si $u_0 \ge u_1$ alors la suite $(u_n)$ est décroissante.

• Supposons $u_0 \le u_1$ :

Montrons par récurrence que : $(\forall n \in \mathbb{N}) u_n \le u_{n+1}$. Notons : $P(n) : u_n \le u_{n+1}$

Par hypothèse $u_0 \le u_1$ ; donc $P(0)$ vraie.

Supposons que $P(n)$ vraie pour un entier $n$ fixé. On a $u_n \le u_{n+1}$ et $f$ est croissante sur $I$ donc $f(u_n) \le f(u_{n+1})$ ; d'où par définition $u_{n+1} \le u_{n+2}$ ; donc $P(n+1)$ est vraie.

On peut donc en conclure que : $(\forall n \in \mathbb{N}) u_n \le u_{n+1}$, ce qui prouve que la suite $(u_n)$ est croissante.

• Supposons $u_0 \ge u_1$ :

Montrons par récurrence que : $(\forall n \in \mathbb{N}) u_n \ge u_{n+1}$. Notons : $P(n) : u_n \ge u_{n+1}$

Par hypothèse $u_0 \ge u_1$ ; donc $P(0)$ vraie.

Supposons que $P(n)$ vraie pour un entier $n$ fixé. On a $u_n \ge u_{n+1}$ et $f$ est croissante sur $I$ ; donc $f(u_n) \ge f(u_{n+1})$ ; d'où par définition $u_{n+1} \ge u_{n+2}$ ; donc $P(n+1)$ est vraie.

On peut donc en conclure que : $(\forall n \in \mathbb{N}) u_n \ge u_{n+1}$, ce qui prouve que la suite $(u_n)$ est décroissante.

b) D'après la question précédente la suite $(u_n)$ est monotone. De plus : $(\forall n \in \mathbb{N}) u_n \in [a, b]$, donc la suite

$$(u_n)$$ est bornée. La suite $$(u_n)$$ est monotone et bornée (donc soit croissante majorée par $$b$$, soit décroissante minorée par $$a$$) ce qui prouve que la suite $$(u_n)$$ est convergente.

Par définition $$\lim_{n \to \infty} u_n = \alpha$$ donc $$\lim_{n \to \infty} u_{n+1} = \alpha$$, de plus $$\lim_{x \to \alpha} f(x) = f(\alpha)$$ car $$f$$ est continue sur $$I$$ donc $$\lim_{n \to \infty} f(u_n) = f(\alpha)$$ et sachant que par définition $$u_{n+1} = f(u_n)$$, on en déduit que $$\alpha = f(\alpha)$$.

Donc : $$\alpha$$ est solution de l'équation $$f(x) = x$$.

3) Supposons que $$u_0 \le u_2$$.

Démontrons que $$(v_n)$$ est une suite croissante et $$(w_n)$$ est une suite décroissante.

Démontrons par récurrence que pour tout $$n \in \mathbb{N}$$, $$v_n \le v_{n+1}$$. Notons : $$P(n) : v_n \le v_{n+1}$$

Par hypothèse $$u_0 \le u_2$$ ; donc $$v_0 \le v_1$$ et alors $$P(0)$$ vraie.

Supposons que $$P(n)$$ vraie pour un entier $$n$$ fixé. Donc $$v_n \le v_{n+1}$$ et $$f$$ est décroissante sur $$I$$ ; donc $$f(v_n) \ge f(v_{n+1})$$ et en composant à nouveau par $$f$$, on obtient : $$f(f(v_n)) \le f(f(v_{n+1}))$$ ; ce qui donne $$v_{n+1} \le v_{n+2}$$, on peut donc en conclure que pour tout $$n \in \mathbb{N}$$, $$v_n \le v_{n+1}$$. La suite $$(v_n)$$ est donc croissante.

On montre de même que la suite $$(w_n)$$ est décroissante.

Si maintenant on suppose $$u_0 \ge u_2$$, on montre avec une méthode similaire que $$(v_n)$$ est décroissante et que $$(w_n)$$ est croissante.

On peut conclure : les suites $$(v_n)$$ et $$(w_n)$$ sont monotones et qu'elles ont des sens de variations contraires.

- Si aucune indication n'est donnée et si les deux suites ont un veritable lien, on peut espérer prouover que ce sont deux suites adjacentes et par conséquent, deux suites convergeant vers la même limite.
- Soit donc $(u_{n})$ et $(v_{n})$ deux suites à étudier. La situation la plus fréquence, statistiquement parlant, est celle où l'on arrive à montré que:

1ère étape : $$(u_n)$$ est croissante et $$(v_n)$$ est décroissante (ou le contraire)

2ème étape : $$\lim_{n \to \infty} (v_n - u_n) = 0$$

Pour prouver que $$(v_n - u_n)_{n \in \mathbb{N}}$$ tend vers 0, il y a deux façons de faire :

Ou bien on etudie cette suite et on montre qu'elle tend vers 0 par calcul de limites ou encadrements, etc.
Ou bien on appelle $\ell_1$ et $\ell_2$ les limites de ces suites et en passant aux limites dans les relations de definiptions, on montre que $\ell_1 = \ell_2$

- Là encore, on obtient uniquement le caractère qualitatif du problème : la convergence des deux suites étudiées. La valeur de la limite commune – qui ne peut d'ailleurs pas toujours se déterminer explicitement- est à étudier dans un deuxième temps seulement. L'unique résultat immédiat est l'encadrement de la limite commune $$\ell$$ de $$(u_n)$$ et $$(v_n)$$ :

« Pour tout $$n \in \mathbb{N}$$ : $$u_n \le \ell \le v_n$$ »

## Exercices

### Exercices d'application

**Exercice 1.**

On considère la suite $(u_n)$ définie par :

$$u_0 = \frac{1}{2} \text{ et } u_{n+1} = \frac{2u_n + 1}{u_n + 1} \text{ pour tout } n \in \mathbb{N}$$

1) Montrer par récurrence que pour tout $n\in \mathbb{N}^*$ 1
2) Montrer que la suite $(u_{n})$ est croissante.
3) En déduire que la suite $(u_{n})$ est convergente.

**Exercice 2.**
Soit $(u_n)$ la suite numérique définie par :

$$u_0 = 2 \text{ et } u_{n+1} = \frac{1}{2}(1 + u_n)^2 \text{ pour tout } n \in \mathbb{N}$$

1) Montrer que la suite $(u_{n})$ est croissante.
2) a) Montrer que: $(\forall n \in \mathbb{N}) u_{n+1} - u_n \geq \frac{5}{2}$.
b) En déduire que: $(\forall n \in \mathbb{N}) u_n \geq 2 + \frac{5n}{2}$.

Préciser alors la limite de la suite $(u_n)$.

**Exercice 3.**
On considère la suite $(u_n)_{n \ge 1}$ définie pour tout $n \in \mathbb{N}^*$ :

$$u_n = 1 + \frac{1}{2^3} + \frac{1}{3^3} + \dots + \frac{1}{n^3}$$

1) Montrer que la suite $(u_{n})_{n\geq 1}$ est croissante.
2) Montrer que pour tout $n\in \mathbb{N}^*$ .. $u_{n}\leq 2 - \frac{1}{n}$
3) En déduire que la suite $(u_{n})_{n\geq 1}$ est convergente.

**Exercice 4.**
Soit $(u_n)$ la suite numérique définie par :

$$u_0 = 1 \text{ et } u_{n+1} = \sqrt[3]{3u_n + 1} - 1 \text{ pour tout } n \in \mathbb{N}$$

1) Montrer que pour tout $n\in \mathbb{N}$ .. $0\leq u_{n}\leq 1$
2) Étudier la monotonie de la suite $(u_{n})$
3) En déduire que la suite $(u_{n})$ est convergente.

### SUITES DE TYPE $U_{n+1} = a U_n + b$
**Exercice 5.**
Soit $(u_n)$ la suite numérique définie par :

$$u_0 = 1 \text{ et } u_{n+1} = \frac{2}{3}u_n + \frac{2}{3} \text{ pour tout } n \in \mathbb{N}$$

On pose : $v_n = 2 - u_n$ pour tout $n \in \mathbb{N}$

1) Montrer que $(v_{n})$ est géométrie et déterminer raison et son premier terme.
2) a) Déterminer $ v_{n} $ et $ u_{n} $ en fonction de $ n $.
b) Déterminer la limite de la suite $(u_{n})$.
3) On pose pour tout $n\in \mathbb{N}$ .. $S_{n} = \sum_{k = 0}^{n}u_{k}$

Exprimer $S_n$ en fonction de $n$. Préciser $\lim_{n \to \infty} S_n$.

### SUITES DE TYPE $V_n = f(U_n)$
**Exercice 6.**
Déterminer la limite de chacune des suites suivantes :

$$\begin{array}{l} a_n = \sqrt{\frac{3n-4}{2n+1}} \quad ; \quad b_n = n^2 \sin\left(\frac{1}{n}\right) \quad ; \quad c_n = \sqrt{2^{n-3}} \\ u_n = \cos\left(\frac{n\pi-3}{2n+1}\right) \quad ; \quad v_n = 4^n \left(1 - \cos\left(-\frac{1}{2}\right)\right) \\ w_n = \pi 2^{n-1} - 2^n \text{Arctan}(2^n) \quad ; \quad x_n = \sqrt{\frac{-2n+1}{n+1}} \end{array}$$

**Exercice 7.**
1) Montre que pour tout $x \in ]0, +\infty[$ :

$$\text{Arctan}\left(\frac{1}{1+x+x^2}\right) = \text{Arctan}\left(\frac{1}{x}\right) - \text{Arctan}\left(\frac{1}{1+x}\right)$$

2) Posons pour tout $n \in \mathbb{N}^*$ :

$$u_n = \text{Arctan}\left(\frac{1}{1+n+n^2}\right) \text{ et } S_n = \sum_{k=0}^{n} u_k$$

a) Calculer $\lim u_n$.

b) Exprimer $S_n$ en fonction de $n$. Préciser $\lim S_n$.

### SUITES DE TYPE $U_{n+1} = f(U_n)$
**Exercice 8.**
Soit $f$ la fonction définie sur $i = \left[0, \frac{1}{4}\right]$ par :

$$f(x) = x^2 + \frac{3}{4}x$$

1) Déterminer $f(I)$
2) Soit $u_{n}$ la suite numérique définie par:

$$u_0 = \frac{1}{5} \text{ et } u_{n+1} = f(u_n) \text{ pour tout } n \in \mathbb{N}$$

a) Montrer que: $(\forall n\in \mathbb{N})0\leq u_n\leq \frac{1}{4}$
b) Étudier la monotonie de la suite $\left(u_{n}\right)$.
c) En déduire que $ \left( {u}_{n}\right) $ est convergente.
d) Calculer la limite de la suite $\left(u_{n}\right)$

**Exercice 9.**
Soit $g$ la fonction définie sur $i = ]1; +\infty[$ par :

$$g(x) = \frac{x^2 - 3x + 6}{x - 1}$$

1) Montrer que pour tout $ x \in I: g(x) \geq 3 $
2) On considere la suite numérique $\left(u_{n}\right)$ définie par:

$$u_0 = 5 \text{ et } u_{n+1} = g(u_n) \text{ pour tout } n \in \mathbb{N}$$

a) Montrer que: $\left(\forall n\in \mathbb{N}^{\prime}\right)u_{n}\geq 3$
b) Montrer que la suite $\left(u_{n}\right)$ est monotone.
c) En déduire que la suite $\left(u_{n}\right)$ est convergente puis calculer sa limite.

**Exercice 10.**
Soit $(u_n)$ la suite numérique définie par :

$$u_0 = 1 \text{ et } u_{n+1} = u_n + u_n^2 \text{ pour tout } n \in \mathbb{N}$$

1) Montrer que la suite $\left(u_{n}\right)$ est croissante.
2) Montrer par l'absurde que $\left(u_{n}\right)$ n'est pas majorée.
3) Déterminer la limite de la suite $\left(u_{n}\right)$

### 5. Suites adjacentes
**Exercice 11.**
Dans chacun des cas suivants, montrer que les suites $(u_n)$ et $(v_n)$ sont adjacentes :

1) $u_{n} = \frac{2n}{n + 2}$ et $v_{n} = 2 + \frac{1}{n!}$
2) $u_{n} = 1 + \frac{1}{1!} +\frac{1}{2!} +\ldots +\frac{1}{n!}$ et $v_{n} = u_{n} + \frac{1}{n,n!}$
3) $u_{n} = \sum_{k = 1}^{n - 1}\frac{1}{k^{2}(k + 1)^{2}}$ et $v_{n} = u_{n} + \frac{1}{3n^{2}}$

**Exercice 12.**
On considère les suites $(u_n)_{n \ge 1}$ et $(v_n)_{n \ge 1}$ définies par :

$$u_n = 1 + \frac{1}{2^2} + \ldots + \frac{1}{n^2} \quad \text{et} \quad v_n = u_n + \frac{1}{n}$$

Montrer que $(u_n)_{n \ge 1}$ et $(v_n)_{n \ge 1}$ sont convergentes et ont la même limite.

**Exercice 13.**
On considère les suites $(u_n)$ et $(v_n)$ définies par :

$$\begin{cases} u_0 = a \\ u_{n+1} = \sqrt{u_n v_n}, \, n \in \mathbb{N} \end{cases} \text{ et } \begin{cases} v_0 = 2a \\ v_{n+1} = \frac{u_n + v_n}{2}, \, n \in \mathbb{N} \end{cases}$$

où $a$ est un réel strictement positif.

1) Montrer que pour tout $ n \in \mathbb{N} $: $ 0 < u_n < v_n $
2) Montrer que la suite $\left(u_{n}\right)$ est croissante et que la suite $\left(v_{n}\right)$ est décroissante.
3) Montrer que les suites $\left(u_{n}\right)$ et $\left(v_{n}\right)$ sont adjacentes.

**Exercice 14.**
Soit $(u_n)_{n \ge 2}$ et $(v_n)_{n \ge 2}$ les suites définies par :

$$u_n = 2^{n+1} \sin \frac{\pi}{2^{n+1}} \quad \text{et} \quad v_n = 2^{n+1} \tan \frac{\pi}{2^{n+1}}$$

Montrer que $(u_n)_{n \ge 2}$ et $(v_n)_{n \ge 2}$ sont adjacentes.

### Exercices de perfectionnement
**Exercice 15.**
Soit $(u_n)_{n\ge 1}$ la suite numérique définie par :

$$u_n = \frac{2n - \cos \frac{\pi}{n}}{7n + \sin \frac{2\pi}{n}}$$

1) Montrer que: $\left(\forall n\in \mathbb{N}^{\prime}\right)\left|u_{n} - \frac{2}{7}\right|\leq \frac{9}{49n - 7}$
2) En déduire la limite de la suite $\left(u_{n}\right)_{n\ge 1}$.

**Exercice 16.**
Soit $(u_n)_{n\ge 1}$ la suite numérique définie par :

$$u_n = 1 + \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{3}} + \dots + \frac{1}{\sqrt{n}}$$

1) Montrer que pour tout $n\in \mathbb{N}^{\prime}$ .. $u_{n}\geq \sqrt{n}$
2) Préciser la limite de la suite $\left(u_{n}\right)_{n\ge 1}$.

**Exercice 17.**
Soit $(u_n)_{n\ge 1}$ la suite numérique définie par :

$$u_n = 1 + \frac{1}{4} + \frac{1}{9} + \dots + \frac{1}{n^2}$$

1) Étudier la monotonie de la suite $\left(u_{n}\right)_{n\geq 1}$
2) a) Verifier que pour tout entier $k\geq 2$

$$\frac{1}{k(k-1)} = \frac{1}{k} - \frac{1}{k-1} \quad \text{et que} \quad \frac{1}{k^2} < \frac{1}{k-1} - \frac{1}{k}$$

b) En déduire que: $\left(\forall n\in \mathbb{N}^{\prime}\right)2 - \frac{1}{n} <  u_{n} <   2$
c) Montrer que $\left(u_{n}\right)_{n\geq 1}$ est convergente.

**Exercice 18.**
Soit $a$ et $b$ deux réels tels que $b \neq -a$.

On considère la suite $(u_n)$ définie par : $u_n = \frac{a^n - b^n}{a^n + b^n}$

Déterminer la limite de la suite $(u_n)$ selon les valeurs

de la suite $a$ : la suite $b$ : la suite $c$ : la suite $d$ : la suite $e$ : la suite $f$ : la suite $g$ : la suite $h$ : la suite $i$ : la suite $j$ : la suite $k$ : la suite $l$ : la suite $m$ : la suite $n$ : la suite $o$ : la suite $p$ : la suite $q$ : la suite $r$ : la suite $s$ : la suite $t$ : la suite $u$ : la suite $v$ : la suite $w$ : la suite $x$ : la suite $y$ : la suite $z$ : la suite $w$ : la suite $x$ : la suite $y$ : la suite $z$ : la suite $w$ : la suite $x$ : la suite $y$ : la suite $x$ : la suite $y$ : la suite $x$ : la suite $y$ : la suite $x$ : la suite $y$ : la suite $x$ : la suite $y$ : la suite $x$ : la

**Exercice 19.**
On considère la suite $(u_n)$ définie par :

$$u_0 = 0 \quad \text{et} \quad u_{n+1} = \sqrt{12 + u_n} \quad (\forall n \in \mathbb{N})$$

1) Montrer que pour tout $n\in \mathbb{N}$ .. $u_{n}\leq 4$
2) a) Montrer que: $(\forall n \in \mathbb{N}) 4 - u_{n+1} \leq \frac{1}{4}(4 - u_n)$
b) En déduire que: $(\forall n \in \mathbb{N}) 4 - u_n \leq \left(\frac{1}{4}\right)^{n-1}$
3) Déterminer la limite de la suite $\left(u_{n}\right)$.

**Exercice 20.**
On considère la suite $(u_n)$ définie par :

$$\begin{cases} u_0 = 2 \\ u_{n+1} = \frac{2}{3}u_n - n - \frac{8}{3} \end{cases} ; \quad n \in \mathbb{N}$$

1) Pour tout $ n \in \mathbb{N} $ on pose: $ v_{n} = u_{n} + \alpha n - 1 $ ou $ \alpha \in \mathbb{N} $.
Déterminer la valeur de $ \alpha $ pour laquelle la suite $ (v_{n}) $ est géométrie.
Dans la suite, on prend pour $ \alpha $ la valeur trouvee en
2) Calculer $ v_{n} $ et $ u_{n} $ en fonction de $ n $.
3) Exprimer la somme $ S_{n} = v_{0} + v_{1} + \ldots + v_{n} $ en fonction de $ n $ puis calculer $ \lim_{n\to \infty}S_n $.
4) Exprimer $ T_{n} = u_{0} + u_{1} + \ldots + u_{n} $ en fonction de $ d \in \mathbb{R} $.

**Exercice 21.**
Soit $(u_n)$ la suite numérique définie par :

$$u_0 = 2 \quad \text{et} \quad (\forall n \in \mathbb{N}) \quad u_{n+1} = \sqrt{\frac{u_n^2}{3} + 2}$$

1) Montrer que pour tout $ n \in \mathbb{N} $: $ u_{n} \geq \sqrt{3} $.
2) Étudier la monotonie de la suite $\left(u_{n}\right)$.
3) En déduire que la suite $\left(u_{n}\right)$ est convergente.

Déterminer sa limite.

**Exercice 22.**
On considère la suite numérique $(u_n)$ définie par :

$$u_0 \in [0;1] \text{ et } u_{n+1} = \sqrt{\frac{1+u_n}{2}} \quad (\forall n \in \mathbb{N})$$

1) Montrer que pour tout $ n \in \mathbb{N} $: $ 0 \leq u_n \leq 1 $
2) Montrer que la suite $\left(u_{n}\right)$ est convergente.
3) On pose: $u_0 = \cos \theta$ avec $\theta \in \left[0; \frac{\pi}{2}\right]$

a) Établir par récurrence que pour tout $n \in \mathbb{N}$ :

$$u_n = \cos\left(\frac{\theta}{2^n}\right)$$

b) En déduire la limite de la suite $(u_n)$.

**Exercice 23.**
Soit $(u_n)$ la suite numérique définie par :

$$u_0 = -2 \quad \text{et} \quad u_{n+1} = \frac{3u_n + 5}{u_n + 3} \quad (\forall n \in \mathbb{N})$$

1) Montrer que pour tout $ n \in \mathbb{N} $: $ u_n < \sqrt{5} $
2) Montrer que la suite $\left(u_{n}\right)$ est croissante.
3) En déduire que la suite $\left(u_{n}\right)$ est convergente puis déterminer sa limite.

**Exercice 24.**
Soit $(u_n)$ la suite numérique définie par :

$$u_0 = \sqrt[3]{\frac{2}{7}} \quad \text{et} \quad u_{n+1} = \sqrt[3]{\frac{1+u_n^3}{8}} \quad (\forall n \in \mathbb{N})$$

1) a) Montrer que : $(\forall n \in \mathbb{N}) \ u_n > \sqrt[3]{\frac{1}{7}}$

b) En déduire que : $(\forall n \in \mathbb{N}) \ \frac{u_{n+1}}{u_n} < 1$

2) Montrer que la suite $\left(u_{n}\right)$ est convergente.
3) On pose pour tout $ n \in \mathbb{N} $: $ v_{n} = \frac{7}{8} u_{n}^{3} - \frac{1}{8} $

a) Montrer que $\left(v_{n}\right)$ est une suite géométrie.
b) Exprimer $ u_{n} $ en fonction de $ n $ puis donner $ \lim u_{n} $.

**Exercice 25.**
Soit $(u_n)$ la suite numérique définie par :

$$u_0 = 3 \quad \text{et} \quad u_{n+1} = \frac{8(u_n - 1)}{u_n + 2} \quad (\forall n \in \mathbb{N})$$

1) Montrer que: $(\forall n \in \mathbb{N}) 2 < u_n < 4$
2) Étudier la monotonie de la suite $\left(u_{n}\right)$ puis en deduire qu'elle est convergente.

3) a) Montrer que : $(\forall n \in \mathbb{N}) \ 4 - u_{n+1} \le \frac{4}{5}(4 - u_n)$

b) En déduire que : $(\forall n \in \mathbb{N}) \ 4 - u_n \le \left(\frac{4}{5}\right)^n$
Puis déterminer $\lim_{n \to +\infty} u_n$.

4) On pose pour tout $n \in \mathbb{N}$ : $v_n = \frac{u_n - 4}{u_n - 2}$

a) Etablier que la suite $\left(v_{n}\right)$ est géométrie dont on déterminera la raison et le premier terme.
b) Exprimer $v_{n}$ puis $u_{n}$ en fonction de $n$
c) Retrover la valeur de la limite de $\left(u_{n}\right)$.

5) On pose pour tout $n \in \mathbb{N}^*$ : $S_n = v_0 + v_1 + ... + v_{n-1}$

Exprimer $S_n$ en fonction de $n$ puis conclure $\lim_{n \to +\infty} S_n$.

**Exercice 26.**
Soit $(u_n)$ la suite numérique définie par :

$$u_0 = 0 \text{ et } u_1 = 2 \text{ et } u_{n+2} = 7u_{n+1} + 8u_n \quad (\forall n \in \mathbb{N})$$

1) On pose pour tout $n \in \mathbb{N}$ : $S_n = u_{n+1} + u_n$

Montrer que la suite $(S_n)$ est géométrique puis en déduire l'expression de $S_n$ en fonction de $n$.

2) On pose pour tout $n \in \mathbb{N}$ :

$$v_n = (-1)^n u_n \quad \text{et} \quad t_n = v_{n+1} - v_n$$

Exprimer $t_n$ en fonction de $S_n$

3) a) Déterminer la somme $t_0 + t_1 + ... + t_{n-1}$ en fonction de $n$ puis en déduire $v_n$ et $u_n$ en fonction de $n$.

b) Déterminer $\lim_{n \to +\infty} \frac{u_n}{2^n}$.

**Exercice 27.**
**Exercice 28.**
Soit $(u_n)$ la suite numérique définie par :

$$u_0 = 1 \quad \text{et} \quad u_{n+1} = \sqrt{u_n^2 + \frac{1}{(n+1)^2}} \quad (\forall n \in \mathbb{N})$$

1) Montrer que pour tout $ n \in \mathbb{N} $: $ u_{n} > 0 $
2) Montrer que la suite $\left(u_{n}\right)$ est croissante.
3) On pose pour tout $ n \in \mathbb{N}^* $: $ v_n = \sum_{k=1}^{n} \frac{1}{k^2} $.

a) Montrer que: $\left(\forall n\in \mathbb{N}^{\bullet}\right)\quad v_{n}\leq 2 - \frac{1}{n}$
b) Montrer que: $\left(\forall n\in \mathbb{N}^{\bullet}\right)u_{n} = \sqrt{1 + v_{n}}$
c) En déduire que pour tout $ n \in \mathbb{N} $: $ u_{n} \leq \sqrt{3} $ et que $ (u_{n}) $ est convergente.

4) a) Montrer par récurrence que pour tout entier

$$k \geq 3 : \quad 2^{k+1} \geq (k+1)^2$$

b) En déduire que: $(\forall k \geq 3), u_{k+1}^2 - u_k^2 \geq \frac{1}{2^{k+1}}$
c) En déduire que la limite $\ell$ de la suite $(u_{n})$ vérifie

les inégalités : $\sqrt{\frac{179}{72}} \leq \ell \leq \sqrt{3}$

**Exercice 29.**
Soit $f$ une fonction définie sur $\mathbb{R}$ et continue en 0. On suppose que $f$ vérifie : $(\forall x \in \mathbb{R}) f(x) = f(2x)$

1) Montrer que pour tout $ n \in \mathbb{N} $: $ f(x) = f\left(\frac{x}{2^n}\right) $.
2) En déduire que $ f $ est une fonction constante.

**Exercice 30.**
1) Montrer par récurrence que: $\forall n\in \mathbb{N}^{\bullet}$ $2^{n}\geq n + 1$
2) On pose pour tout $n\in \mathbb{N}^{\bullet}$

$$u_n = \sum_{k=1}^{n} \frac{1}{k \cdot 2^k} \quad \text{et} \quad v_n = u_n + \frac{1}{n} - \frac{1}{n \cdot 2^n}$$

Montrer que les suites $(u_n)_{n \geq 1}$ et $(v_n)_{n \geq 1}$ convergent et ont la même limite.

**Exercice 31.**
On considère la suite numérique $(u_n)$ définie par :

$$u_0 = 2\pi \quad \text{et} \quad u_{n+1} = \frac{\pi u_n}{\pi + 2u_n} + \cos\left(\frac{\pi^2}{u_n}\right) \quad (\forall n \in \mathbb{N})$$

1) Montrer que pour tout $n \in \mathbb{N}$ :

$$u_n > 0 \quad \text{et} \quad \frac{\pi^2}{u_n} = \frac{\pi}{2} [2\pi]$$

2) Montrer que la suite $\left(\frac{1}{u_n}\right)$ est arithmetique.
3) En déduire $ u_{n} $ en fonction $ n $ puis déterminer $ \lim_{n\to \infty} $

**Exercice 32.**
Soit $\alpha \in \mathbb{R}_+^n$. On considère la suite $(u_n)$ définie par :

$$\begin{cases} u_0 = \alpha \quad (\alpha > \sqrt[3]{a} \text{ et } \alpha \in \mathbb{R}) \\ u_{n+1} = \frac{1}{3} \left( 2u_n + \frac{\alpha}{u_n^2} \right) \end{cases}$$

1) a) Montrer que: $(\forall n \in \mathbb{N}) u_n > 0$
b) Montrer que pour tout $n\in \mathbb{N}$

$$u_{n+1} - \sqrt[3]{a} = \frac{2u_n + \sqrt[3]{a}}{3u_n^2} (u_n - \sqrt[3]{a})^2$$

c) Montrer que pour tout $n \in \mathbb{N}$ : $u_n > \sqrt[3]{a}$

En déduire que la suite $(u_n)$ est convergente.

2) a) Montrer que: $(\forall n \in \mathbb{N}) u_{n+1} - \sqrt[3]{a} \leq \frac{2}{3} (u_n - \sqrt[3]{a})$
b) En déduire que:

$$(\forall n \in \mathbb{N}) u_{n+1} - \sqrt[3]{a} \leq \left(\frac{2}{3}\right)^n (u_0 - \sqrt[3]{a})$$

c) Déterminer $\lim_{n \to +\infty} u_n$.

**Exercice 33.**
Soit $(u_n)$ une suite croissante et majorée.

On pose pour tout $n \in \mathbb{N}^*$ : $v_n = \frac{u_1 + u_2 + \dots + u_n}{n}$

Montrer que la suite $(v_n)$ est croissante et en déduire qu'elle est convergente.

**Exercice 34.**

Pour tout $n \in \mathbb{N}^*$ on considère la fonction $f_n$ définie sur 8 par : $f_n(x) = x^3 + nx - 1$
1) Montrer que l'équation $f_n(x) = 0$ admet une solution unique $x_n$ dans l'intervalle $]0, 1[$.
2) a) Montrer que la suite $(x_n)_{n \ge 1}$ est décroissante.
b) En déduire que la suite $(x_n)_{n \ge 1}$ est convergente.
3) Montrer que pour tout $n \in \mathbb{N}^*$, $x_n < \frac{1}{n}$. Déterminer la limite de la suite $(x_n)_{n \ge 1}$.

**Exercice 35.**

Soit $(u_n)$ et $(v_n)$ les suites numériques définies par :
$$\begin{cases} u_0 = -1 \text{ et } v_0 = 2 \\ u_{n+1} = \frac{u_n + v_n}{2} \text{ et } v_{n+1} = \frac{u_n + 4v_n}{5} \quad (\forall n \in \mathbb{N}) \end{cases}$$
1) a) Montrer que : $(\forall n \in \mathbb{N}) \ u_n < v_n$
b) Montrer que $(u_n)$ et $(v_n)$ sont adjacentes.
2) a) Déterminer deux réels $\alpha$ et $\beta$ pour lesquels les suites numérique $(t_n)$ et $(s_n)$ définies par :
$$t_n = u_n + \alpha v_n \text{ et } s_n = u_n + \beta v_n$$
sont géométriques.
b) Exprimer $t_n$ et $s_n$ en fonction de $n$.
3) Déterminer la limite commune de $(u_n)$ et $(v_n)$.

**Exercice 36.**

Pour tout $n \in \mathbb{N}^*$ et $x \in \mathbb{R}^+$, on pose :
$$P_n(x) = x^n + x^{n-1} + \dots + x^2 + x - 1$$
1) Montrer que l'équation $P_n(x) = 0$ admet une solution unique $\alpha_n \in ]0, \infty[$.
2) Montrer que la suite $(\alpha_n)_{n \ge 1}$ est décroissante, puis en déduire qu'elle est convergente.
3) Montrer que $\lim_{n \to \infty} \alpha_n = \frac{1}{2}$

**Exercice 37.**
Soit $(u_n)_{n\ge 1}$ la suite numérique définie par :

$$u_n = 1 + \frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{n}$$

1) Montrer que: $\left(\forall n\in \mathbb{N}^{\bullet}\right)u_{2n}\geq \frac{1}{2} +u_n$
2) Montrer que $\left(u_{n}\right)_{n\geq 1}$ est strictement croissant.
3) Montrer par l'absurde que $\lim_{n\to +\infty}u_n = +\infty$

**Exercice 38.**
Soit $(u_n)_{n\ge 1}$ la suite numérique définie par : $u_n = \frac{n^2}{2^n}$

1) Déterminer $\lim_{n\to +\infty} \frac{u_{n+1}}{u_n}$ puis en déduire qu'il existe un

entier $n_0 \in \mathbb{N}$ tel que pour tout $n \ge n_0$ : $\frac{u_{n+1}}{u_n} < \frac{3}{4}$

2) a) Montrer par récurrence que pour tout $n \ge n_0$ :

$$u_n \le \left(\frac{3}{4}\right)^{n-n_0} u_{n_0}$$

b) Déterminer la limite de la suite $(u_n)_{n\ge 1}$.

**Exercice 39.**
Soit $(u_n)$ une suite positive vérifiant pour tout $n \in \mathbb{N}$,

$u_n \le \frac{1}{2^n}$. On pose pour tout $n \in \mathbb{N}$ : $S_n = \sum_{k=0}^n u_k$

Montrer que la suite $(S_n)$ est convergente.

**Exercice 40.**
Soit $(\phi_n)$ la suite réelle définie par $\phi_0 = 0$, $\phi_1 = 1$ et

pour tout $n \in \mathbb{N}$ : $\phi_{n+2} = \phi_{n+1} + \phi_n$

1) Montrer par récurrence que :

$$(\forall n \in \mathbb{N}) \ \phi_n = \frac{\sqrt{5}}{5} \left( \left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n \right)$$

2) Montrer que: $(\forall n \in \mathbb{N}) \phi_{n+1}^2 - \phi_n \phi_{n+2} = (-1)^n$
3) Etabir que la suite numérique $\left(\frac{\phi_{n+1}}{\phi_n}\right)_{n\geq 1}$ converge et trouver sa limite.

4) Montrer que pour tout $n \in \mathbb{N}$ :

$$\sum_{k=0}^n C_n^k \phi_k = \phi_{2n} \quad \text{et} \quad \sum_{k=0}^n (-1)^k C_n^k \phi_k = -\phi_n$$

**Exercice 41.**
Soit $a$ un réel supérieur ou égal à 1 et $(x_n)$ la suite numérique définie par :

$$x_0 = a \text{ et pour tout } n \in \mathbb{N}, \ x_{n+1} = \frac{x_n}{1 + (n+1)x_n^2}$$

1) On suppose dans cette question que $a = 1$. Montrer par récurrence que :

$$(\forall n \in \mathbb{N}^\bullet) \ x_n = \frac{1}{n+1}$$

2) On suppose maintenant que $a > 1$.

a) Montrer que la suite $\left(x_{n}\right)$ est décroissant et minorée.
b) En déduire que la suite $\left(x_{n}\right)$ est convergente puis déterminer sa limite.

3) On considère la fonction $f_n$ définie sur $\mathbb{R}^\bullet$ par :

$$f_n(x) = \frac{x}{1 + (n+1)x^2}$$

a) Montrer que la fonction $ f_{n} $ est croissant sur l'intervalle $ \left[0; \frac{1}{\sqrt{n + 1}}\right] $.
b) Montrer que: $\left(\forall n\in \mathbb{N}^{\bullet}\right)0 <   x_{n}\leq \frac{1}{n + 1}$
c) Montrer que pour tout $k\in \mathbb{N}^{\bullet}$

$$\frac{1}{x_{k+1}} - \frac{1}{x_k} = (k+1)x_k$$

d) En déduire que pour tout $n \in \mathbb{N}^\bullet$ :

$$\frac{1}{n-1 + \frac{1}{x_1}} \le x_n \le \frac{1}{n+1}$$

e) Calculer $\lim_{n\to +\infty} nx_n$.

3. GR(0) (0) 2. (0) 3. (0) 4. (0)

## Problèmes de synthèse
### Se préparer aux devoirs
**Devoir 1.**
1) Pour $x \in ]0;1[$, calculer les limites suivantes :

$$\lim_{n \to +\infty} \sum_{k=0}^n x^k \quad , \quad \lim_{n \to +\infty} \sum_{k=0}^n k \cdot x^k$$

2) Calculer les limites suivantes :

$$\lim_{n \to +\infty} \frac{1! + 2! + \dots + n!}{n!} \quad ; \quad \lim_{n \to +\infty} \frac{1! + 2! + \dots + n!}{(n+1)!}$$

3) Soit $(u_n)$ une suite bornée, vérifiant la condition :

$$\forall n \in \mathbb{N}^*, \ 2u_n \le u_{n-1} + u_{n+1}$$

Montrer que $\lim_{n \to +\infty} (u_{n+1} - u_n) = 0$

4) Montrer que : $\lim_{n \to +\infty} \frac{\sin 1 + \sin 2 + \dots + \sin n}{n\sqrt{n}} = 0$

et $\lim_{n \to +\infty} \frac{\cos 1 + \cos 2 + \dots + \cos n}{n\sqrt{n}} = 0$

5) Soit $(u_n)$ et $(v_n)$ deux suites réelles telles que :

$$(\forall n \in \mathbb{N}) \ 0 \le u_n \le 2 \text{ et } 0 \le v_n \le 3$$

On suppose que $\lim_{n \to +\infty} u_n \cdot v_n = 6$.

Que peut-on dire des suites $(u_n)$ et $(v_n)$ ?

6) Soient $(u_n)$ et $(v_n)$ deux suites telles que :

$$\lim_{n \to +\infty} (u_n^2 + u_n v_n + v_n^2) = 0$$

Montrer que : $\lim_{n \to +\infty} u_n = \lim_{n \to +\infty} v_n = 0$

7) On considère la suite réelle $(u_n)$ définie par $u_0 = 0$, $u_1 = \frac{1}{2}$ et pour tout $n \in \mathbb{N}$ : $u_{n+1} = \frac{1}{3}(1 + u_{n+1} + u_n^3)$

a) Montrer que pour tout $n\in \mathbb{N}$ $u_{n}\in [0;1]$
b) Montrer que la suite $\left(u_{n}\right)$ est croissante.
c) Etabir que la suite $\left(u_{n}\right)$ est convergente puis

**Devoir 2.**
Le paradoxe suivant a été imaginé par Zénon d'Elée (490- 430 avant J.C). Achille fait une course avec la tortue. Il part 100 mètres derrière la tortue, mais il va dix fois plus vite qu'elle. Quand Achille arrive au point de départ de la tortue, la tortue a parcouru 10 mètres. Pendant qu'Achille parcourt ces mètres, la tourte a avancé de 10 cm ... Puisqu'on peut réitérer ce raisonnement à l'infini, Zénon conclut qu'Achille ne peut pas dépasser la tortue.

Avec des outils plus modernes que ceux dont disposait Zénon, calculer le temps nécessaire à Achille pour dépasser la tortue en notant v sa vitesse supposée constante.

**Devoir 3.**
Soit $(u_n)_{n \ge 1}$ une suite réelle. On pose pour tout $n \in \mathbb{N}^*$ :

$$S_n = \frac{u_1 + u_2 + \dots + u_n}{n}$$

1) On suppose que $\lim_{n \to +\infty} u_n = 0$. Soient $\varepsilon > 0$ et $n_0 \in \mathbb{N}$ tel que, pour tout $n \ge n_0$, on a $|u_n| \le \varepsilon$.

a) Montrer qu'il existe une constante $M$ telle que,

pour tout $n \ge n_0$, on a : $|S_n| \le \frac{M(n_0 - 1)}{n} + \varepsilon$

b) En déduire que $\lim_{n \to +\infty} S_n = 0$.

2) On suppose que pour tout $n \in \mathbb{N}^*$, $u_n = (-1)^n$. Que dire de $(S_n)_{n \ge 1}$ ? Qu'en déduisez-vous ?

3) On suppose que $\lim_{n \to +\infty} u_n = \ell$.

Montrer que $\lim_{n \to +\infty} S_n = \ell$.

4) On suppose que $\lim_{n \to +\infty} u_n = +\infty$.

Montrer que $\lim_{n \to +\infty} S_n = +\infty$.

**Devoir 4.**
On considère la suite $(u_n)$ définie par $u_0 = -2$ et pour tout $n \in \mathbb{N}$ : $u_{n+1} = u_n + n^2 - n$

1) Montrer que pour tout entier $n\geq 3$ , on a $u_{n} > n$
2) En déduire la limite de la suite $\left(u_{n}\right)$.
3) On donne les sommes suivantes:

$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2} \quad \text{et} \quad \sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$$

Donner l'expression de $u_n$ en fonction de $n$, puis retrouver $\lim_{n \to +\infty} u_n$.

**Devoir 5.**
Le but de ce problème est l'étude de quelques exemples de suites adjacentes.

Les parties A, B, C et D sont indépendantes et peuvent être traitées séparément.

Partie A : étude de suites adjacentes et détermination de leur limite commune

On pose pour tout entier $n \ge 2$ :

$$u_n = \sum_{k=1}^{n} \frac{1}{k^2 - 1} \quad \text{et} \quad v_n = u_n + \frac{1}{n}$$

1) Montrer que les suites $\left(u_{n}\right)_{n\geq 2}$ et $\left(v_{n}\right)_{n\geq 2}$ sont adjacentes. Que peut-on en conclude?
2) En remarquant que pour tout $k\geq 2$

$$\frac{1}{k^2 - 1} = \frac{1}{2} \left( \frac{1}{k-1} - \frac{1}{k+1} \right)$$

donner une expression simplifiée de $u_n$.

En déduire $\lim_{n \to +\infty} u_n$.

Partie B : étude de suites adjacentes et caractérisation de la limite d'une suite

Soit $(S_n)_{n \ge 1}$ la suite définie par :

$$S_n = \sum_{k=1}^{n} \frac{(-1)^{k+1}}{k} = 1 - \frac{1}{2} + \dots + \frac{(-1)^{n+1}}{n}$$

On note pour tout entier $n \ge 1$ : $a_n = S_{2n}$ et $b_n = S_{2n+1}$

1) Montrer que les suites $\left(a_{n}\right)_{n\geq 1}$ et $\left(b_{n}\right)_{n\geq 1}$ sont adjacentes.
2) Conclude sur la nature de la suite $\left(S_{n}\right)_{n\geq 1}$

Partie C : étude de suites croisées

On se propose d'étudier les deux suites $(x_n)$ et $(y_n)$ définies par $x_0 = a$, $y_0 = b$ et pour tout $n \in \mathbb{N}$

$$x_{n+1} = \frac{px_n + qy_n}{p+q} \quad \text{et} \quad y_{n+1} = \frac{qx_n + py_n}{p+q}$$

Où $a, b, p, q$ sont des réels strictement positifs tels que $0 < a < b$ et $0 < q < p$

1) a) Déterminer pour tout $ n \in \mathbb{N} $, $ x_{n} = y_{n} $ et $ x_{n+1} $ et en déduire une expression de $ x_{n} $ et $ y_{n} $ en fonction de $ a, b, p, q $ et $ n $.
b) Deduire du 1)a) que les suites $\left(x_{n}\right)$ et $\left(y_{n}\right)$ convergent vers une limite commune $f = \frac{q + 1}{2}$
2) Retrover le résultat du 1)b) en établissant que les suites $\left(x_{n}\right)$ et $\left(y_{n}\right)$ sont adjacentes.

Partie D : Calcul de la limite d'une somme à l'aide des suites adjacentes

On se propose de calculer la limite de $\frac{1}{\sqrt{n}} \sum_{k=1}^{n} \frac{1}{\sqrt{n+1}}$ lorsque $n \to +\infty$. Pour $n \ge 1$, on pose :

$$S_n = \sum_{k=1}^{n} \frac{1}{\sqrt{k}}, \quad U_n = 2\sqrt{n} - S_n \quad \text{et} \quad V_n = 2\sqrt{n+1} - S_n$$

1) Montrer que $\lim_{n\to +\infty}S_n = +\infty$
2) Montrer que les suites $\left(U_{n}\right)_{n\geq 1}$ et $\left(V_{n}\right)_{n\geq 1}$ sont adjacentes, de limite commune $L\geq 1$
3) Calculer $\lim_{n\to +\infty}\frac{S_n}{n}$ et $\lim_{n\to +\infty}\frac{S_n}{\sqrt{n}}$
4) Deduire de ce qui precede la valeur de:

$$\lim_{n \to +\infty} \frac{1}{\sqrt{n}} \sum_{k=1}^{n} \frac{1}{\sqrt{n+k}}$$

### Se préparer aux examens
**Problème 1.**
On considère la suite numérique $(u_n)$ définie par :

$$u_0 = a \text{ et } u_{n+1} = \frac{u_n^2}{1 - 2u_n^2} \text{ pour tout } n \in \mathbb{N}$$

où $a$ est un réel de l'intervalle $]0; \frac{1}{4}[$.

1) a) Montrer que: $(\forall n \in \mathbb{N}) 0 < u_n < \frac{1}{4}$
b) Montrer que la suite $\left(u_{n}\right)$ est décroissante.
c) En déduire que la suite $\left(u_{n}\right)$ est convergente et que $\lim_{n\to \infty}u_n = 0$

2) Soit $(S_n)$ la suite définie sur $\mathbb{N}$ par : $S_n = \sum_{k=0}^n (-1)^k u_k$

On pose pour tout $n \in \mathbb{N}$ : $v_n = S_{2n}$ et $w_n = S_{2n+1}$

a) Montrer que les suites numériques $\left(v_{n}\right)$ et $\left(w_{n}\right)$ sont adjacentes. On note $\ell$ la limite commune de ces deux suites.
b) Montrer que: $(\forall n\in \mathbb{N})u_{n + 1}\leq \frac{2}{7} u_n$
c) En déduire que pour tout $ n \in \mathbb{N} $:

$$|S_n - v_n| \leq a \sum_{k=n+1}^{k=2n} \left(\frac{2}{7}\right)^k$$

d) En déduire que : $\lim_{n \to +\infty} S_n = \ell$

(Remarquer que : $|S_n - \ell| \leq |S_n - v_n| + |v_n - \ell|$)

Examen Normalisé Sc. Maths 1998

**Problème 2.**
Soit $\alpha$ un réel de l'intervalle $]0; 1[$.

On considère les suites numériques $(a_n)$ et $(S_n)$ définies par :

$$a_n = (1 - \alpha)^n \text{ et } S_n = \sum_{k=0}^n a_k$$

1) Montrer que les suites $(a_n)$ et $(S_n)$ convergent puis calculer les limites : $\lim a_n$ et $\lim S_n$

2) On considère la suite numérique $(u_n)$ définie par :

$u_0 > 0$ et $u_{n + 1} = u_n + \frac{a_n}{u_n}$ pour tout $n\in \mathbb{N}$
a) Montrer que: $(\forall n\in \mathbb{N})u_n > 0$
b) Montrer que $\left(u_{n}\right)$ est strictement croissant.
c) Montrer que: $(\forall n\in \mathbb{N})u_n\leq u_0 + \frac{1}{\alpha u_0}$
d) En déduire que la suite $\left(u_{n}\right)$ est convergente.

Examen Normalisé Sc. Maths 1999

**Problème 3.**
On considère la suite numérique $(u_n)$ définie par :

$$u_0 = \frac{1}{2} \text{ et } u_1 = 1 \text{ et } \frac{1}{u_{n+2}} = \frac{1}{2} \left(\frac{1}{u_{n+1}} + \frac{1}{u_n}\right) (\forall n \in \mathbb{N})$$

1) Calculer $u_{2}$ et $u_{3}$
2) Montrer par récurrence que: $(\forall n\in \mathbb{N})u_{n + 1} = \frac{2u_n}{4u_n - 1}$
3) Montrer que: $(\forall n\in \mathbb{N})\frac{1}{2}\leq u_n\leq 1$
4) On considere les suites $\left(a_{n}\right)$ et $\left(b_{n}\right)$ definies pour tout $n\in \mathbb{N}$ par: $a_{n} = u_{2n}$ et $b_{n} = u_{2n + 1}$

a) On pose pour tout $x \in \left[\frac{1}{2}; 1\right]$ : $f(x) = \frac{2x}{-1 + 4x}$

Montrer que $f\left(\left[\frac{1}{2}; 1\right]\right) \subset \left[\frac{1}{2}; 1\right]$

b) Montrer par récurrence que la suite $\left(a_{n}\right)$ est croissant et que $\left(b_{n}\right)$ est décroissante.
c) En déduire que les suites $\left(a_{n}\right)$ et $\left(b_{n}\right)$ convergent et déterminer la limite de chacune d'elles.

5) On pose pour tout $n \in \mathbb{N}$ : $v_n = \frac{1}{u_n} - \frac{4}{3}$

a) Montrer que la suite $\left(v_{n}\right)$ est géométrie.
b) Exprimer $ v_{n} $ et $ u_{n} $ en fonction de $ n $. Préciser $ \lim_{n\to \infty}u_n $

Examen Normalisé Sc. Maths 1997

## Résumé

- **Monotonie.** Le signe de $u_{n+1}-u_n$, ou la comparaison de $u_{n+1}/u_n$ à 1 pour une suite positive, permet d'étudier les variations.
- **Convergence monotone.** Toute suite croissante et majorée, ou décroissante et minorée, est convergente.
- **Encadrement.** Si $v_n\le u_n\le w_n$ et si $v_n$ et $w_n$ ont la même limite, alors $u_n$ possède cette limite.
- **Suite récurrente.** Si $u_{n+1}=f(u_n)$ converge vers $\ell$ et si $f$ est continue en $\ell$, alors $\ell=f(\ell)$.
- **Suite composée.** Si $u_n\to\ell$ et si $f$ est continue en $\ell$, alors $f(u_n)\to f(\ell)$.
- **Suites adjacentes.** Deux suites adjacentes convergent vers une même limite.

## Auto-évaluation

- Étudier la monotonie et le caractère borné d'une suite.
- Calculer une limite à partir des limites usuelles et des opérations.
- Appliquer un théorème d'encadrement ou de convergence monotone.
- Étudier une suite récurrente et déterminer l'équation de sa limite.
- Utiliser la continuité pour calculer la limite de $f(u_n)$.
- Reconnaître des suites adjacentes et calculer leur limite commune.