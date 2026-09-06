# Chapitre 7 : Équations différentielles

## Histoire

La notion d'équation différentielle apparaît vers 1690 avec Huygens et Leibniz : comme souvent en mathématiques, la résolution de certains cas particuliers notamment par Newton en 1670, avait précédé l'étude du problème général. Ce sont des problèmes d'origine mécanique et géométrique qui sont à la base de l'introduction des équations différentielles. La théorie des équations différentielles ne se structure qu'au 19ième siècle avec Cauchy. Au 20ième siècle, avec Klein et Poincaré, les progrès sont considérables. La loi d'évolution de nombreux phénomènes naturels est souvent solution d'une équation différentielle. C'est le cas, par exemple, lorsque deux quantités x et y sont telles que dy/dx est proportionnel à y. Ce type d'équations différentielles du premier ordre apparaît en biologie (prolifération de bactéries) et dans de nombreuses réactions chimiques. La physique utilise la solution d'équations différentielles du premier ordre et du second ordre dans les problèmes d'oscillations non amorties ou entretenues, des problèmes de décharge d'un condensateur ou de résistance de matériaux.

Source : https://fr.wikipedia.org

> **Christiaan Huygens** (1629–1695)
> **Gottfried Leibniz** (1646–1716)
> **Augustin-Louis Cauchy** (1789–1857)

## Capacités attendues

- Resoudre de I'equation \(y^{\prime} = ay + b\)
- Resoudre de I'equation \(y^{\prime \prime} + ay^{\prime} + by = 0\)
- Resolution d'équations différentielles se ramenant à la résolution de l'une des deux équations précédentes.

## Plan du cours

- Activités Préparatoires *(page 302)*
- Connaissances Fondamentales
- Equations differentielles de 1re ordre *(page 304)*
- Equations differentielles de 2ndordre *(page 306)*- Techniques Et Astuces *(page 308)*- Exercices d'application *(page 311)*
- Exercices de perfectionnement *(page 312)*
- Problèmes de synthese *(page 315)*

## Prérequis

- Dérivation, primitives et fonctions dérivables sur un intervalle.
- Fonction exponentielle et fonction logarithme népérien.
- Équations du second degré dans $\mathbb{R}$ et dans $\mathbb{C}$.
- Fonctions trigonométriques et leurs dérivées.

## Activités préparatoires

### RAPPELS
1. a) On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par : $f(x) = 5e^{-3x}$

On pose : $y = f(x)$ et $y' = f'(x)$ et $y'' = f''(x)$

vérifier que : $y'' + 5y' + 6y = 0$ $(E)$

b) Dans les deux cas suivants, la fonction $g$ est-elle solution de l'équation $(E)$ ?

$1^{er}$ cas : $g(x) = e^{-2x}$ ; $2^{nd}$ cas : $g(x) = 4e^{-2x} - \frac{2}{5}e^{-3x}$

2. Determiner les solutions de l'equation differentielle: \( y' = 3x^2 \)
3. Determiner les solutions de l'equation differentielle: \( y' = 2x - 1 \)
4. Verifier que la fonction \( h: x \mapsto e^{5x} - \frac{2}{5} \) est une solution de l'équation différentielle: \( y' = 5y + 2 \)
5. Verifier que la fonction \(\varphi : x \mapsto e^{-x} (\cos(2x) + \sin(2x))\) est une solution de l'équation \(y'' + 2y' + 5y = 0\).
6. Résoudre chacune des équations différentielles suivantes:

$y'' + 9y = 0$ ; $2y'' + 3y = 0$ ; $y'' + 6y' = 0$

### RÉSOLUTION DE L'ÉQUATION DIFFÉRENTIELLE $y' = ay + b$ où $a \neq 0$
On considère l'équation différentielle : $(E_1)$ : $y' = 2y$

1. Montrer que les fonctions définies par \( x \mapsto \lambda e^{2x} \) ou \( \lambda \in \mathbb{R} \), sont des solutions de l'equation différentielle \( (E_1) \).
2. Soit \( f \) une fonction numérique dérivable sur \( \mathbb{R} \). On suppose que \( f \) est solution de l'équation \( (E_1) \).

On pose : $g(x) = f(x)e^{-2x}$

a) Montrer que la fonction \( g \) est constante sur \( \mathbb{R} \).
b) En déduire qu'il existe un réel \( \lambda \) tel que: \( (\forall x \in \mathbb{R}) \) \( f(x) = \lambda e^{2x} \)
c) Determiner les solutions de l'equation différentielle \((E_{1})\) qui verifie la condition initiale: \(f(\ln 2) = 4\)

3. On considère l'équation différentielle : $(E_2)$ : $y' = 2y + 3$

a) Verifier que la fonction \( y_0: x \mapsto -\frac{3}{2} \) est une solution de l'équation \( (E_2) \).
b) Montrer l'equivalence suivante: \([y\) est solution de \((E_2)]\Leftrightarrow [(y - y_0)\) est solution de \((E_1)]\)
c) En déduire les solutions de l'equation différentielle \((E_2)\).

### RÉSOLUTION DE L'ÉQUATION DIFFÉRENTIELLE $y' + by = 0$
A) On considère l'équation différentielle : $(E)$ : $y'' - 4y = 0$

1. Déterminer les valeurs du réel $r$ pour que la fonction $x \mapsto e^{rx}$ soit solution de l'équation différentielle $(E)$.

2. Montrer que les fonctions $x \mapsto \lambda e^{2x} + \mu e^{-2x}$,

où $(\lambda; \mu) \in \mathbb{R}^2$, sont des solutions de

l'équation différentielle $(E)$.

3. Soit $f$ une solution de l'équation différentielle $(E)$.

On pose: $g(x) = f(x)e^{-2x}$

a) Montrer que: $(\forall x \in \mathbb{R}) g''(x) + 4g'(x) = 0$

b) En déduire qu'il existe $(\lambda; \mu) \in \mathbb{R}^2$ tel que:

$$(\forall x \in \mathbb{R}) g(x) = \lambda + \mu e^{-4x}$$

c) En déduire que: $(\forall x \in \mathbb{R}) f(x) = \lambda e^{2x} + \mu e^{-2x}$

d) Déterminer l'ensemble des solutions de l'équation différentielle $(E)$.

B) On considère l'équation différentielle: $(F): y'' + 4y = 0$

1. Montrer que les fonctions $x \mapsto \lambda \cos(2x) + \mu \sin(2x)$ où $(\lambda; \mu) \in \mathbb{R}^2$, sont des solutions de l'équation $(F)$.

2. Montrer que les fonctions $x \mapsto A \cos(2x + \theta)$ où $(A; \theta) \in \mathbb{R}^2$, sont des solutions de l'équation $(F)$.

### RÉSOLUTION DE L'ÉQUATION DIFFÉRENTIELLE $y'' + ay' + by = 0$
On considère l'équation différentielle: $(E): y'' + ay' + by = 0$ où $(a; b) \in \mathbb{R}^2$

L'équation $r^2 + ar + b = 0$ où $r \in \mathbb{C}$ est appelée l'équation caractéristique de l'équation différentielle $(E)$.

Dans tout ce qui suit, $\alpha$ et $\beta$ sont des réels quelconques.

1. On considère l'équation différentielle: $(E_1): y'' + 3y' - 4y = 0$

a) Déterminer les solutions $r_1$ et $r_2$ de l'équation caractéristique de l'équation différentielle $(E_1)$.

b) Montrer que toute fonction $f_1$ qui s'écrit sous la fonction $f_1: x \mapsto \alpha e^{\alpha x} + \beta e^{\beta x}$ est une solution de $(E_1)$.

2. On considère l'équation différentielle: $(E_2): y'' + 2y' + y = 0$

a) Déterminer $r_0$ l'unique solution de l'équation caractéristique de l'équation différentielle $(E_2)$.

b) Montrer que toute fonction $f_2$ qui s'écrit sous la fonction $f_2: x \mapsto (\alpha x + \beta) e^{\alpha x}$ est une solution de $(E_2)$.

3. On considère l'équation différentielle: $(E_3): y'' + y' + y = 0$

a) Déterminer les solutions $r_1$ et $r_2$ de l'équation caractéristique de l'équation différentielle $(E_3)$.

b) On pose: $p = \text{Re}(r_1)$ et $q = \text{Im}(r_1)$

Montrer que toute fonction $f_3$ qui s'écrit sous la fonction $f_3: x \mapsto e^{px} (\alpha \cos(qx) + \beta \sin(qx))$ est une solution de l'équation différentielle $(E_3)$.

En général:

• Les solutions de l'équation différentielle $y'' - \omega^2 y = 0$ sont les fonctions:

$$x \mapsto \lambda e^{\omega x} + \mu e^{-\omega x} \text{ où } (\lambda; \mu) \in \mathbb{R}^2$$

• Les solutions de l'équation différentielle $y'' + \omega^2 y = 0$ sont les fonctions:

$$x \mapsto \lambda \cos(\omega x) + \mu \sin(\omega x) \text{ où } (\lambda; \mu) \in \mathbb{R}^2$$

## Cours

### 1. Équations différentielles du premier ordre
#### 1.1. L'ÉQUATION DIFFÉRENTIELLE $y' = ay$ ($a \in \mathbb{R}^*$)
Soit $a$ un réel non nul. L'équation $y' = ay$ où l'inconnue est une fonction numérique $y$, dérivable sur $\mathbb{R}$ (ou sur un intervalle de $\mathbb{R}$) est appelée équation différentielle du premier ordre.

Remarquons que la fonction $y_0 : x \mapsto e^{ax}$ est une solution particulière de cette équation. Le but de ce paragraphe est la détermination de toutes les fonctions $y$ vérifiant la relation $y' = ay$. $y$ est appelé la solution générale de cette équation différentielle.

Signalons qu'au cours de cette leçon, on écrit par exemple $y = \lambda e^{ax}$ au lieu d'écrire $y(x) = \lambda e^{ax}$ ou $y : x \mapsto \lambda e^{ax}$.

> **Proposition 1.**
La solution générale de l'équation différentielle $y' = ay$ est : $y = \lambda e^{ax}$ où $\lambda \in \mathbb{R}$.

> **Preuve.**
Soit $y$ une solution de l'équation différentielle $(E) : y' = ay$ et posons $z = y.e^{-ax}$.

On a alors $z' = y'.e^{-ax} - aye^{-ax} = (y' - ay)e^{-ax}$. Puisque $y' = ay$ alors $z' = 0$. Il s'ensuit donc que la fonction $z$ est constante sur $\mathbb{R}$. En posant $z = \lambda$ avec $\lambda \in \mathbb{R}$ on obtient $y = \lambda.e^{ax}$.

On vérifie aisément que la fonction $x \mapsto \lambda e^{ax}$ est bien une solution de $(E)$.

> **Remarque.**
Pour tout $(x_0, y_0) \in \mathbb{R}^2$ il existe une solution unique $f$ de l'équation différentielle $y' = ay$ vérifiant la condition $f(x_0) = y_0$.

> **Exemples.**
1) La solution générale de l'équation différentielle $(E) : y' + 2y = 0$ est : $y = \lambda e^{-2x}$ avec $\lambda \in \mathbb{R}$ Soit $f$ la solution de l'équation $(E)$ vérifiant la condition $f(0) = 3$. On a alors pour tout $x \in \mathbb{R}$,

$f(x) = \lambda e^{-2x}$. Donc : $f(0) = 3 \Leftrightarrow \lambda e^0 = 3 \Leftrightarrow \lambda = 3$. Par suite, pour tout $x \in \mathbb{R} : f(x) = 3e^{-2x}$

2) Dans une culture de microbes, le nombre de microbes à l'instant $t$, exprimé en heures,

peut être considéré comme une fonction $y$ à valeurs réelles de la variable $t$.

La vitesse de prolifération à l'instant $t$ du nombre des microbes est

la dérivée $y'$ de cette fonction. On a constaté que $y'(t) = ky(t)$, où $k$ est

un coefficient strictement positif. On désigne par $N$ le nombre de microbes à l'instant $t = 0$.

Déterminons l'unique solution de l'équation différentielle $y' = ky$ telle que $y(0) = N$ :
La solution générale de l'équation $y' = ky$ est $y = \alpha e^{ky}$ où $\alpha \in \mathbb{R}$. Si on désigne par $f$ la solution de $y' = ky$ vérifiant $y(0) = N$, on trouve $\alpha = N$, ce qui donne $f(t) = Ne^{kt}$.

> **Applications.**
1. Résoudre les équations différentielles suivantes: $y' = 5y$ ; $y' + \sqrt{2}y = 0$ ; $y' = (\ln 2)y$
2. Déterminer la solution de l'équation différentielle $3y' + 5y = 0$ vérifiant $y(0) = -7$.

#### 1.2. L'ÉQUATION DIFFÉRENTIELLE $y' = ay + b$ ($a \in \mathbb{R}^*, b \in \mathbb{R}$)
Soit $a$ un réel non nul. Déterminons la solution générale de l'équation différentielle $y' = ay + b$.
On remarque bien que $y_0 = -\frac{b}{a}$ est une solution de l'équation $y' = ay + b$ car $y'_0 = 0$ et $ay_0 + b = 0$.
Soit $y$ une solution de l'équation $y' = ay + b$. Puisque $y'_0 = ay_0 + b$ alors $y' - y'_0 = a(y - y_0)$. Donc $Y = y - y_0$ est une solution de l'équation $Y' = aY$, et d'après ce qui précède on tire : $Y = \lambda e^{ax}$ où $\lambda \in \mathbb{R}$. Par conséquent : $y = \lambda e^{ax} - \frac{b}{a}$. Réciproquement, Si $y = \lambda e^{ax} - \frac{b}{a}$, alors $y$ est solution de l'équation différentielle $y' = ay + b$.

> **Proposition 2.**
La solution générale de l'équation différentielle $y' = ay + b$ est : $y = \lambda e^{ax} - \frac{b}{a}$ où $\lambda \in \mathbb{R}$.

> **Exemple.**
La solution générale de l'équation différentielle $y' = 3y + 2$ est : $y = \lambda e^{3y} - \frac{2}{3}$ où $\lambda \in \mathbb{R}$.

Déterminons la solution $f$ de l'équation $y' = 3y + 2$ qui vérifie la condition $f(-1) = \frac{1}{3}$.

On a pour tout $x \in \mathbb{R}$, $f(x) = \lambda e^{3x} - \frac{2}{3}$. La condition $f(-1) = \frac{1}{3}$ donne $\lambda e^{-3} - \frac{2}{3} = \frac{1}{3}$ et donc $\lambda = e^3$.

Il s'ensuit donc : $(\forall x \in \mathbb{R}) f(x) = e^{3x+3} - \frac{2}{3}$

> **Applications.**
1. Résoudre les équations différentielles suivantes :

$y' + 4y - 7 = 0$ ; $y' = -9y + 2$ ; $3y' + 5y = 8$ ; $y'' = -2y' + 3$

2. Determiner la solution \( f \) de l'equation \( y' - 6y = 3 \) verifiant la condition: \( f\left(\frac{1}{6}\right) = 0 \)
3. Determiner la solution \( g \) de l'equation \( y' = \pi y + \sqrt{2} \) verifiant la condition: \( g(0) = -1 \)

### 2. Équations différentielles du second ordre
#### 2.1. L'ÉQUATION DIFFÉRENTIELLE $y'' + ay' + by = 0$ ($(a; b) \in \mathbb{R}^2$)
Soit $(a, b) \in \mathbb{R}^2$. L'équation $y^* + ay' + by = 0$ où l'inconnue est une fonction numérique $y$, deux fois dérivable sur $\mathbb{R}$ (ou sur un intervalle de $\mathbb{R}$) est appelée équation différentielle du second ordre.
Cas Particuliers :

- Cas où \( a = b = 0 \): Dans ce cas, l'équation différentielle ci-dessus devient sous la forme \( y^{*} = 0 \) et ceci est équivaut à: \( y = ax + \beta \) avec \( (\alpha; \beta) \in \mathbb{R}^2 \).
- Cas où \( b = 0 \): Dans ce cas, l'équation différentielle ci-dessus devient sous la forme

$y^* + ay' = 0$ ou aussi $(y' + ay)' = 0$, et ceci est équivalent à : $(\exists \beta \in \mathbb{R})$ ; $y' + ay = \beta$

D'après la proposition 2 du paragraphe précédent, on obtient : $y = ae^{-ax} + \frac{\beta}{a}$ où $a \in \mathbb{R}$.
On admet les résultats cités dans la proposition suivante :

> **Proposition 3.**
Soit $a$ et $b$ deux réels quelconques. On considère l'équation différentielle : $(E)$ : $y^* + ay' + by = 0$

L'équation caractéristique de $(E)$ est $r^2 + ar + b = 0$. Son discriminant est : $\Delta = a^2 - 4b$

1) Si \(\Delta > 0\), alors l'équation caractéristique admet deux racines réelles distinctes \(r_1\) et \(r_2\), et la solution générale de \((E)\) est donnée par: \(y = \alpha e^{r_1x} + \beta e^{r_2x}\) ou \((\alpha; \beta) \in \mathbb{R}^2\)
2) Si \(\Delta = 0\), alors l'équation caractéristique admet une racine double \(r\), et la solution générale de \((E)\) est donnée par: \(y = (\alpha x + \beta)e^{rx}\) ou \((\alpha; \beta) \in \mathbb{R}^2\)
3) Si \(\Delta < 0\), alors l'équation caractéristique admet deux racines complexes conjuguées. En posant \(r_1 = p + iq\) et \(r_2 = p - iq\) avec \((p;q) \in \mathbb{R}^2\), la solution générale de \((E)\) est donnée par:

$y = (\alpha \cos(qx) + \beta \sin(qx))e^{rx}$ où $(\alpha; \beta) \in \mathbb{R}^2$

> **Exemple.**
On considère l'équation différentielle : $(E_m)$ : $y'' - 2y' + (1 - m)y = 0$ où $m$ est une constante réelle.
L'équation caractéristique de $(E_m)$ est $r^2 - 2r + (1 - m) = 0$. Son discriminant est : $\Delta = 4m$

D'où la discussion suivante :

- Si $m = 0$, alors $\Delta = 0$ et l'équation caractéristique admet une solution double $r = 1$.

D'après la proposition 3, la solution générale de $(E_0)$ est : $y = (\alpha x + \beta)e^x$ avec $(\alpha; \beta) \in \mathbb{R}^2$

- Si $m > 0$, alors $\Delta > 0$ et l'équation caractéristique admet deux solutions réelles distinctes qui sont :

$r_1 = 1 + \sqrt{m}$ et $r_2 = 1 - \sqrt{m}$

D'après la proposition 3, la solution générale de $(E_m)$ est : $y = \alpha e^{(1-\sqrt{m})x} + \beta e^{(1-\sqrt{m})y}$ où $(\alpha; \beta) \in \mathbb{R}^2$

• Si $m < 0$, alors $\Lambda < 0$ et l'équation caractéristique admet deux solutions complexes conjuguées

qui sont : $r_1 = 1 + i\sqrt{-m}$ et $r_2 = 1 - i\sqrt{-m}$

D'après la proposition 3, la solution générale de l'équation différentielle $(E_m)$ est :

$$y = \left(\alpha \cos(x\sqrt{-m}) + \beta \sin(x\sqrt{-m})\right)e^x \text{ avec } (\alpha, \beta) \in \mathbb{R}^2$$

> **Applications.**
1. Résoudre les équations différentielles suivantes :

$$y^* + y' - 2y = 0 \quad ; \quad 4y^* - 4y' + y = 0 \quad ; \quad y^* - y' + y = 0 \quad ; \quad y^* = -2y' + 3$$

2. Discuter selon les valeurs du réel $m$ l'ensemble de solutions de l'équation : $(E_m)$ : $y^* - 2my' + my = 0$

3. Soit $(E)$ l'équation différentielle : $4y^* + 5y' + y = 2e^{-2x}(7x - 11)$

a) Vérifier que la fonction $g$ définie par $g(x) = 2xe^{-2x}$ est une solution particulière de $(E)$ puis trouver la solution générale de $(E)$.

b) Déterminer la solution $f$ de $(E)$ dont la courbe passe par le point $A(0, -1)$ et admet en ce point une tangente parallèle à l'axe des abscisses.

> **Remarques.**
• Pour tout $(x_0; y_0; z_0) \in \mathbb{R}^1$ il existe une unique solution de l'équation $(E)$ : $y^* + ay' + by = 0$ vérifiant les conditions initiales : $y(x_0) = y_0$ et $y'(x_0) = z_0$

• L'équation $y^* + \omega^2 y = 0$ est un cas particulier de l'équation différentielle $(E)$ : $y^* + ay' + by = 0$ :

• La solution générale de l'équation différentielle $y^* + \omega^2 y = 0$ est :

$$y = \alpha \cos(\omega x) + \beta \sin(\omega x) \quad \text{où} \quad (\alpha; \beta) \in \mathbb{R}^2$$

• La solution générale de l'équation différentielle $y^* - \omega^2 y = 0$ est :

$$y = \alpha e^{\omega x} + \beta e^{-\omega x} \quad \text{où} \quad (\alpha; \beta) \in \mathbb{R}^2$$

• En gros, on peut exprimer les conditions initiales d'une équation différentielle par diverses formules, par exemple :

- Le point $A(x_0, y_0)$ appartient à la courbe de $f$ ce qui se traduit par : $y_0 = f(x_0)$

- La fonction $f$ prend la valeur $y_0$ en $x_0$ ce qui se traduit par : $y_0 = f(x_0)$

- La courbe $\mathcal{C}_f$ de $f$ admet au point $A(x_0, y_0)$ une tangente de pente $y_1$ : $y_0 = f(x_0)$ et $y_1 = f'(x_0)$

• Dans les sciences physiques, on rencontre souvent les équations différentielles $ay^* + by' + cy = 0$ sous la forme (A titre d'exemple) : $a \frac{d^2x}{dt^2} + b \frac{dx}{dt} + cx = 0$ ou sous la forme : $a\ddot{x} + b\dot{x} + cx = 0$

## Méthodes

### A. Résolution des équations différentielles
1) On considère l'équation différentielle suivante : $$(E_1) : y' - 4y = 5$$

Trouver la solution de $$(E_1)$$ vérifiant $$y(0) = -7$$

2) On considère l'équation différentielle suivante : $$(E_2) : y'' + y' - 2y = 0$$

a) Resoudre \((E_{2})\)
b) Trouver la solution de \((E_2)\) verifiant \(y(0) = 1\) et \(y'(0) = 1\)

3) Soit $$(\tau; i_0) \in \mathbb{R}^* \times \mathbb{R}^*$$. Déterminer la fonction $$i$$ dérivable sur $$[0; +\infty[$$, vérifiant :

$$\frac{di}{dt} + 3\frac{i}{\tau} = 0 \text{ avec } i(0) = -i_0$$

4) L'accroissement de la population $$P$$ d'un pays est proportionnel à cette population. La population double tous les 50 ans. En combien de temps triplerait-elle ?

> **Solution.**
1) La solution générale de l'équation $$(E_1)$$ est donnée par : $$y = \lambda e^{4x} - \frac{5}{4}$$ où $$\lambda \in \mathbb{R}$$

$$y(0) = -7 \Leftrightarrow \lambda - \frac{5}{4} = -7 \Leftrightarrow \lambda = \frac{-23}{4}$$

Par conséquent, la solution demandée est : $$y = -\frac{23}{4}e^{4x} - \frac{5}{4}$$

2) On considère l'équation différentielle suivante : $$(E_2) : y'' + y' - 2y = 0$$

a) L'équation caractéristique de $$(E_2)$$ est $$r^2 + r - 2 = 0$$. Ses solutions sont $$r_1 = 1$$ et $$r_2 = -2$$

En définitive, la solution générale de $$(E_2)$$ est donnée par : $$y = \lambda e^x + \mu e^{-2x}$$ où $$(\lambda; \mu) \in \mathbb{R}^2$$

b) Soit $$y$$ la solution de $$(E_2)$$ vérifiant $$y(0) = 1$$ et $$y'(0) = 1$$. Dans ce cas :

$$y(0) = 1 \Leftrightarrow \lambda + \mu = 1 \quad \text{et} \quad y'(0) = 1 \Leftrightarrow \lambda - 2\mu = 1$$

La résolution de système $$\begin{cases} \lambda + \mu = 1 \\ \lambda - 2\mu = 1 \end{cases}$$ donne $$\begin{cases} \lambda = 1 \\ \mu = 0 \end{cases}$$. La solution demandée est : $$y = e^x$$

3) Puisque la fonction \(i\) vérifie \(\frac{di}{dt} + 3\frac{i}{\tau} = 0\), alors \(i(t) = \lambda e^{-\frac{1}{\tau}}\) avec \(\lambda \in \mathbb{R}\). Or \(i(0) = -i_0\), donc \(i(t) = -i_0e^{-\frac{1}{\tau}}\).
4) L'accroissement de la population est mesurée par \( P'(t) \). Par hypothèse, \( P'(t) \) et \( P(t) \) sont proportionnelles, ce qui se traduit par l'existence d'un réel \( \alpha \in \mathbb{R} \) tel que \( P'(t) = \alpha P(t) \). Par suite, \( P(t) \) s'écrit sous la forme \( P(t) = ke^{\alpha t} \) ou \( k \in \mathbb{R} \). Comme la population double tous les 50 ans, alors cela se traduit par:

$$(\forall t \in \mathbb{R}^*) \quad P(t+50) = 2P(t)$$

Ce qui est équivalent à $ke^{\alpha(t+50)} = 2ke^{\alpha t}$, puis $50\alpha = \ln 2$, et par suite $\alpha = \frac{\ln 2}{50}$.

Soit $T$ le réel positif vérifiant $P(t+T) = 3P(t)$. On procède de la même manière on trouve :

$$ke^{\alpha(t+T)} = 3ke^{\alpha t} \Leftrightarrow \alpha T = \ln 3 \Leftrightarrow T = \frac{\ln 3}{\alpha} \Leftrightarrow T = \frac{50 \ln 3}{\ln 2}$$

Approximativement on trouve $T \approx 79$ ans. La population triplerait approximativement tous les 79 ans.

### B. Équation différentielle en biologie
Dans une culture de microbes, le nombre de microbes à l'instant $t$, exprimé en heures, peut être considéré comme une fonction $y$ à valeurs réelles de la variable $t$.

La vitesse de prolifération à l'instant $t$ du nombre des microbes est la dérivée $y'$ de cette fonction. On a constaté que $y'(t) = ky(t)$, où $k$ est un coefficient strictement positif.

On désigne par $N$ le nombre de microbes à l'instant $t = 0$.

1) Détérminer l'unique solution de l'équation différentielle \( y' = ky \) telle que \( y(0) = N \)
2) Sachant qu'au bout de \( 2h \), le nombre de microbes a quadruple, déterminer l'équation qui permet de trouver la constante \( k \).
3) Détérminer la valeur de \( N \) (au microbes pres) sachant que la culture contient 6400 microbes au bout de cinq heures.

> **Solution.**
1) La solution générale de l'équation \( y' = ky \) est \( y = \alpha e^{kt} \) ou \( \alpha \in \mathbb{R} \). Si on désigne par \( f \) la solution de \( y' = ky \) vérifier \( y(0) = N \), on trouve \( \alpha = N \), ce qui donne \( f(t) = Ne^{kt} \).
2) Au bout de \( 2h \), la population est quadruplee, donc \( f(2) = 4N \) ce qui donne \( e^{2k} = 4 \) (attention: ne pas transformer \( 2h \) en seconde car l'énoncé indique que \( t \) en \( h \)). Par suite \( k = \ln 2 \).
3) D'après les données de l'exercice \( f(t) = N e^{t \ln 2} \) et \( f(5) = 6400 \) d'ou: \( N = \frac{6400}{e^{5 \ln 2}} = \frac{6400}{e^{\ln 32}} = \frac{6400}{32} = 200 \).

### C. Équation différentielle en mécanique
On étudie un élément d'une structure métallique soumis à une force concentrée en un point. Cette force est la résultante des forces dues aux effets du vent sur la structure.

On note $y(t)$ le déplacement, en mètres, de cet élément en fonction du temps $t$ en secondes.

Le principe fondamental de la dynamique permet d'établir l'équation différentielle suivante :

$$y'' - \varphi.y' + 100y = 0$$

où $\varphi$ est un coefficient qui caractérise l'amortissement du déplacement par dissipation d'énergie dans

structure. Il s'agit d'étudier les variations du déplacement $y(t)$ lorsque l'on fait varier le coefficient $\varphi$.

On considère les conditions initiales suivantes : $y(0) = 0,05m$ et $y'(0) = 0$

1) Hypothèse d'absence d'amortissement :

On fait l'hypothèse de l'absence d'amortissement du déplacement. On obtient l'équation différentielle

suivante : $y^*(t) + 100y(t) = 0$

Résoudre cette équation puis déterminer l'expression du déplacement $y(t)$ de l'élément.

2) Hypothèse d'amortissement faible:

On fait l'hypothèse d'un faible amortissement du déplacement. On obtient l'équation différentielle

suivante : $y^*(t) + \sqrt{39} y'(t) + 100y(t) = 0$

Résoudre cette équation puis déterminer l'expression du déplacement $y(t)$ de l'élément.

3) Hypothèse d'amortissement classique:

On fait l'hypothèse d'un faible amortissement du déplacement. On obtient l'équation différentielle

suivante : $y^*(t) + 20 y'(t) + 100y(t) = 0$

Résoudre cette équation puis déterminer l'expression du déplacement $y(t)$ de l'élément.

> **Solution.**
1) Hypothèse d'absence d'amortissement :

La solution générale de l'équation $y^* + 100y = 0$ est : $y(t) = \alpha \cos(10t) + \beta \sin(10t)$

Les conditions initiales $y(0) = 0,05$ et $y'(0) = 0$ donnent $\alpha = 0,05$ et $\beta = 0$

On en déduit la solution du système étudié : $y(t) = 0,05 \cos(10t)$

2) Hypothèse d'amortissement faible :

L'équation caractéristique de l'équation $y^*(t) + \sqrt{39} y'(t) + 100y(t) = 0$ est $r^2 + \sqrt{39} r + 100 = 0$.

Elle a deux racines complexes conjuguées qui sont : $r_1 = -\frac{\sqrt{39}}{2} + \frac{19}{2}i$ et $r_2 = -\frac{\sqrt{39}}{2} - \frac{19}{2}i$

On en déduit la solution de l'équation différentielle : $y(t) = e^{-\frac{\sqrt{39}}{2}t} \left( \alpha \cos\left(\frac{19}{2}t\right) + \beta \sin\left(\frac{19}{2}t\right) \right)$

Les conditions initiales permettent de déterminer les deux équations suivantes :

$\alpha = 0,05$ et $\beta = 0,05 \times \frac{\sqrt{39}}{19}$. Il s'ensuit alors : $y(t) = 0,05 e^{-\frac{\sqrt{39}}{2}t} \left( \cos\left(\frac{19}{2}t\right) + \frac{\sqrt{39}}{19} \sin\left(\frac{19}{2}t\right) \right)$

3) Hypothèse d'amortissement classique :

L'équation caractéristique de l'équation $y^*(t) + 20 y'(t) + 100 y(t) = 0$ est $r^2 + 20r + 100 = 0$. Elle a une

seule racine qui est $r = -10$. On en déduit la solution de l'équation différentielle : $y(t) = (\alpha t + \beta) e^{-10t}$

Les conditions initiales permettent de déterminer les deux équations suivantes : $\alpha = 0,5$ et $\beta = 0,05$

Il s'ensuit alors : $y(t) = 0,05(10t + 1)e^{-10t}$

## Exercices

### Exercices d'application

SURGEON GENERAL

L'ÉQUATION DIFFÉRENTIELLE $y' = ay$

#### Exercice 01
Résoudre les équations différentielles suivantes :

1) \( y' = 3y \); 2) \( y' = -2y \); 3) \( 2y' + 3y = 0 \)
4) \(\sqrt{2} y' - \sqrt{3} y = 0\) ; 5) \((\ln 2)y - \pi y' = 0\)
6) \(ny' + (n + 1)y = 0\) (ou \(n\in \mathbb{N}\)

#### Exercice 02
Déterminer la solution de l'équation différentielle $(E)$

qui vérifie la condition initiale $y(x_0) = y_0$ dans chacun des cas suivants :

1) \((E): y' - 4y = 0\) et \(x_0 = 0\) et \(y_0 = 2\)
2) \((E): y' + 3y = 0\) et \(x_0 = -1\) et \(y_0 = 1\)
3) \((E): 2y' - \sqrt{2} y = 0\) et \(x_0 = -2\) et \(y_0 = -3\)

#### Exercice 03
Soit $f$ la fonction définie sur $\mathbb{R}$ par : $f(x) = 3e^{-\frac{1}{2}x}$
Déterminer une équation différentielle de la forme $y' = ay$ dont la fonction $f$ est une solution.

L'ÉQUATION DIFFÉRENTIELLE $y' = ay + b$

#### Exercice 04
Résoudre les équations différentielles suivantes :

1) \( y' = 2y + 3 \); 2) \( \sqrt{2} y' + \sqrt{2} y = \sqrt{3} \)
3) \( 3y' + 2y = 4 \); 4) \( y' - (\ln 2)y = \ln 3 \)

#### Exercice 05
Déterminer la solution $y$ de l'équation différentielle $(E)$ qui vérifie la condition initiale $y_0 = y(x_0)$ pour chacun des cas suivants :

1) $(E) : 2y' + 5y = \frac{1}{2}$ et $x_0 = -1$ et $y_0 = 2$

2) \((E): 3y' - 4y = \sqrt{2}\) et \(x_0 = -2\) et \(y_0 = -3\)
3) \((E): y' \ln 2 + y = \ln 8\) et \(x_0 = \ln 2\) et \(y_0 = \frac{1}{e}\)

L'ÉQUATION DIFFÉRENTIELLE $y'' + ay' + by = 0$

#### Exercice 06
Résoudre les équations différentielles suivantes :

1) \( y'' + 2y' - 3y = 0 \); 2) \( y'' + 3y' - 4y = 0 \)
3) \( y'' - y' - 2y = 0 \); 4) \( y'' + 10y' + 25y = 0 \)
5) \( y'' + 6y' + \frac{5}{2} y = 0 \); 6) \( y'' - \sqrt{3} y' + \frac{3}{4} y = 0 \)
7) \(2y^{\prime \prime} - 2\sqrt{3} y^{\prime} = 0\) 8) \(4y^{\prime \prime} + 25y = 0\)
9) \(5y^{\prime \prime} - 4y = 0\) 10) \(-2y^{\prime \prime} - \sqrt{3} y^{\prime} + y = 0\)

#### Exercice 07
Déterminer la solution $y$ de l'équation différentielle $(E)$ qui vérifie les conditions initiales données pour chacun des cas suivants :

1) \((E): 2y'' - 3y' - 2y = 0\) et \(y(0) = 1\) et \(y'(0) = 1\)
2) \((E): 2y'' + 3y' + y = 0\) et \(y(0) = -1\) et \(y'(0) = 2\)
3) \((E): y'' - 6y' + 9y = 0\) et \(y(-1) = 1\) et \(y'(-1) = 3\)
4) \((E): y'' + \pi^2 y = 0\) et \(y(1) = 1\) et \(y(1) = -1\)
5) \((E): y'' - 16y = 0\) et \(y(0) = 1\) et \(y'(0) = -1\)

#### Exercice 08
1) Résoudre l'équation différentielle :

$$(E) : 4y'' + 4y' + y = 0$$

2) Déterminer la solution $g$ de l'équation $(E)$ vérifiant les conditions initiales : $g(0) = -1$ et $g'(0) = \frac{3}{2}$

3) a) Calculer : $\lim_{x \to +\infty} g(x)$ et $\lim_{x \to -\infty} g(x)$

b) Étudier les variations de la fonction $g$.

### Exercices de perfectionnement

SECTION 1

#### NORDICATION DE L'ÉQUATION DIFFÉRENTIELLE

Soit $f$ une fonction dérivable sur $\mathbb{R}$ et $e^{\prime}$ est courbe représentative dans un repère orthonormé $(O, \bar{l}, \bar{j})$.

Déterminer la fonction $f$ vérifiant les deux conditions :

a) Pour tout \(x \in \mathbb{R} : f(x) = -5f'(x)\)
b) \(A(-2,1)\) est un point de la courbe \(\mathcal{C}\)

On considère l'équation différentielle suivante :

$$(E) : 4y^2 + x^2y = 0$$

1) Resoudre I'equation differentielle \((E)\)
2) Determiner la fonction \( g \) solution de l'equation \( (E) \) verifiant les deux conditions suivantes:

a) $A\left(\frac{1}{2}, \frac{\sqrt{2}}{2}\right)$ est un point de la courbe $e^{\prime}_e$ de $g$ dans un repère orthonormé $(O, \bar{l}, \bar{j})$.

b) $e^{\prime}_e$ admet une tangente horizontale en $A$.

On considère l'équation différentielle :

$$(E) : y^2 - 2y = e^{2x}$$

1) Montrer que la fonction \( u: x \mapsto xe^{2x} \) est une solution de l'equation \( (E) \).
2) Resoudre I'equation differentielle: \(\left(E_{n}\right):y^{\prime} - 2y = 0\)
3) Soit \( f \) une fonction définie et dérivable sur \( \mathbb{R} \). Montrer que la fonction \( f \) est une solution de \( (E) \) si, et seulement si, la fonction \( (f - u) \) est solution de l'équation différentielle \( (E_0) \).
4) En déduire les solutions de l'equation \((E)\).
5) Determiner la solution \( g \) de \( (E) \) telle que: \( g(0) = 1 \)

On considère l'équation différentielle :

$$(E) : 2y^2 + 3y = 6x^2 - 7x + 2$$

1) Montrer que I'equation \((E)\) admet une solution \(u\) de la forme: \(u: x \mapsto ax^2 + bx + c\)
2) Resoudre I'equation differentielle: \(\left(E_{n}\right): 2y^{\prime} + 3y = 0\)
3) Soit \( f \) une fonction définie et dérivable sur \( \mathbb{R} \). Montrer que la fonction \( f \) est une solution de \( (E) \) si, et seulement si, la fonction \( (f - u) \) est solution de l'équation différentielle \( (E_0) \).
4) En déduire les solutions de l'equation \((E)\).

On considère l'équation différentielle :

$$(E) : y^2 - 2y = \frac{2}{1 + e^{-2x}}$$

Soit $g$ une fonction définie et dérivable sur $\mathbb{R}$ et $f$ la fonction définie sur $\mathbb{R}$ par : $f(x) = e^{2x} \cdot g(x)$

1) Montrer que $f$ est solution de $(E)$ si, et seulement si :

$$g'(x) = \frac{2e^{-2x}}{1 + e^{-2x}}$$

2) En déduire les solutions de l'équation $(E)$.

Soit $f$ une fonction numérique dérivable sur $\mathbb{R}$ telle que pour tout $x \in \mathbb{R}$ :

$$f(x) \neq 0 \quad \text{et} \quad f'(x) = f(x)(1 - f(x))$$

1) On pose \( g = \frac{1}{f} \). Montrer que la fonction \( g \) est solution de l'equation différentielle: \( (E): y' = -y + 1 \)
2) Resoudre I'equation differentielle \((E)\)
3) En déduire toutes les fonctions \( f \).

#### Exercice 15
On considère l'équation différentielle :

$$(E): y' = ky(A - y)$$

où $A$ et $k$ sont des réels tels que : $A > 0$ et $k \neq 0$
Soit $y$ une fonction dérivable et ne s'annulant pas sur
$\mathbb{R}$ et vérifiant l'équation $(E)$. On pose : $z = \frac{1}{y}$

1) Montrer que $z$ est solution d'une équation différen-

tielle de la forme $z' = az + b$.

2) En déduire qu'il existe une constante $B \in \mathbb{R}$ telle
que : $$(\forall x \in \mathbb{R}) \quad y(x) = \frac{A}{1 + Bc^{-1/2}}$$

3) Tracer la courbe représentative de la fonction $y$,
solution de l'équation différentielle $(E)$, dans

chacun des cas suivants :
a) $k < 0$ ;

b) $k > 0$

#### Exercice 16
On considère l'équation différentielle :

$$(E): y'' + 2y = -2 \cos(2x)$$

1) Montrer que la fonction $n : x \mapsto \cos(2x)$ est
solution de l'équation $(E)$.

2) Résoudre l'équation différentielle : $(E_n) : y'' + 2y = 0$

3) Soit $f$ une fonction définie et dérivable sur $\mathbb{R}$.
Montrer que la fonction $f$ est une solution de $(E)$
si, et seulement si, la fonction $(f - n)$ est solution
de l'équation différentielle $(E_n)$.

4) En déduire les solutions de l'équation $(E)$.

5) Déterminer la solution $g$ de $(E)$ telle que :

$$g(0) = g'(0) = 0$$

#### Exercice 17
Soit $y$ une fonction dérivable sur $\mathbb{R}$ vérifiant l'équation
différentielle : $(E) : y' = ay^2 + by$ où $(a, b) \in \mathbb{R}^2$

On suppose que $y$ ne s'annule pas sur $\mathbb{R}$ et on pose :

$$z = \frac{1}{y}$$

Déterminer une équation différentielle vérifiée par $z$
puis résoudre l'équation différentielle $(E)$.

#### Exercice 18
Soit $m$ un nombre réel. Résoudre et discuter les
équations différentielles suivantes :

1) $y' - my + 1 = 0$ ; 2) $y'' + my = 0$

3) $y'' + my' = 0$ ; 4) $y'' - 2my' + my = 0$

5) $y'' - 2y' + (1 - m)y = 0$

5) $y'' - 2y' + (1 - m)y = 0$

#### Exercice 19
Soit $F$ la primitive de la fonction $f : I \mapsto \frac{2}{\sqrt{1 + 4I^2}}$ sur

$\mathbb{R}$ qui s'annule en 0.

1) Montrer que la fonction $F$ est impaire.
2) Montrer que : $$(\forall x \in \mathbb{R}^*) \ln(1 + 2x) \le F(x)$$

et déterminer $$\lim_{x \to +\infty} F(x)$$.

3) a) Montrer que $F$ est une bijection de $\mathbb{R}$ sur $\mathbb{R}$.

On pose : $G = F^{-1}$

b) Montrer que $G$ est dérivable sur $\mathbb{R}$ et que :

$$(\forall x \in \mathbb{R}^*) \quad G'(x) = \frac{1}{2} \sqrt{1 + 4G^2(x)}$$

c) En déduire que $G$ est deux fois dérivable sur $\mathbb{R}$ et
que $G$ est solution de l'équation différentielle :

$$y'' - y = 0$$

d) Calculer $G(0)$ et $G'(0)$ puis déterminer $G(x)$
et $F(x)$ en fonction $x$.

#### Exercice 20
Soit $f$ une fonction numérique deux fois dérivable sur

$\mathbb{R}$ telle que : $$(\forall x \in \mathbb{R}) f'(x) = f(-x) + x$$

On pose pour tout $x \in \mathbb{R}$ :

$$g(x) = f(x) + f(-x)$$

et : $$h(x) = f(x) - f(-x) - 2x$$

1) a) Vérifier que $g$ est paire et que $h$ est impaire.

b) Montrer que $g$ est solution de l'équation diffé-

#### Exercice 21
rentielle $y^* = y$ et que $h$ est solution de l'équation différentielle $y^* = -y$.

2) Écrire $f(x)$ en fonction de $g(x)$ et $h(x)$ puis donner l'expression de $f(x)$ en fonction de $x$.

#### Exercice 22
Déterminer toutes les fonctions $f$ deux fois dérivables sur $\mathbb{R}$ telles que : $(\forall x \in \mathbb{R}) f'(1-x) = f(x)$

#### Exercice 23
On considère l'équation différentielle :

$$(E) : y^* - y' - 2y = (-6x - 4)e^{-4}$$

1) Résoudre l'équation: \((E_0): y^* - y' - 2y = 0\)
2) Démontré que la fonction \( u \) définie sur \( \mathbb{R} \) par \( u(x) = (x^2 + 2x)e^{-4} \) est une solution de \( (E) \).
3) Soit \( f \) une fonction définie et dérivable sur \( \mathbb{R} \). Montré que la fonction \( f \) est une solution de \( (E) \) si, et seulement si, la fonction \( (f - u) \) est solution de l'équation différentielle \( (E_0) \).
4) En déduire l'ensemble des solutions de \((E)\).
5) Détérminer la solution \( g \) de \( (E) \) vérifier les conditions initiales: \( g(0) = g'(0) = 1 \).

#### Exercice 24
Une citerne calorifugée chauffée par une résistance à sa température $\theta(t)$ (en $^\circ$C) l'instant $t$ (en $s$) vérifie l'équation différentielle $(E) : y' = a - by$ avec :

$$a = 2,088 \times 10^{-2} \text{ et } b = 2,32 \times 10^{-4}.$$

1) Résoudre l'équation différentielle.
2) En déduire l'expression de \(\theta(t)\) en fonction de \(t\) sachant que \(\theta(0) = 20\).
3) Au bout de combien de temps la température atteint-elle \(80^{\circ}C?\)

#### Exercice 24
L'étude d'un mouvement a montré que la vitesse exprimée, en mètres par seconde est une fonction dérivable $y$ de la variable réelle positive $t$ vérifiant l'équation différentielle : $(E) : y' + 2y = 50$

1) Résoudre l'équation différentielle \((E)\).
2) Sachant que \( y(0) = 0 \), déterminer la vitesse \( y \) en fonction de \( t \).

#### Exercice 25
L'objet de ce problème est l'étude de la décharge d'un condensateur de capacité $C$ dans un circuit comprenant une résistance $R$ et une inductance $L$. On admet que la

décharge $q$ du condensateur est une fonction du temps qui vérifie :

$$Lq^*(t) + Rq'(t) + \frac{1}{C}q(t) = 0$$

1) On donne \( L = 10H \), \( C = 0,2F \) et \( R = 22,5\Omega \). Détérminer la solution \( q \) de l'équation différentielle telle que \( q(0) = 1 \) et \( q'(0) = \frac{13}{4} \).
2) Soit \( g \) la fonction définie sur \( \mathbb{R}^* \) par:

$$g(t) = -2e^{-2t} + 3e^{-\frac{t}{4}}$$

a) Calculator \(\lim_{t\to \infty}g(t)\)
b) Calculer \( g'(t) \). Détérminer la valeur exacte de la solution \( \alpha \) de l'équation \( g'(t) = 0 \) puis donner une valeur approchée de \( \alpha \) à \( 10^{-2} \) pres.
c) Etudier le signe de \( g'(t) \) puis dresser le tableau de variations de la fonction \( g \) sur \( \mathbb{R}^* \).

3) Tracer la courbe \(\mathcal{C}_g\) de \(g\) dans un repere orthonorme et sa tangente \(\mathcal{T}\) au point d'abscisse 0.
4) Utiliser la courbe \(\mathcal{C}\) pour déterminer une valeur approchée à 0,2 seconde pres de l'instant où la charge du condensateur est devenue inférieure à 0,2 coulomb.

## Problèmes de synthèse

STÉRÉCIÈSSES PROHIBITÉS

Dévoirs 1
1) Résoudre les équations différentielles suivantes :
$$3y^2 - 4y = 5$$ ; $$3y^2 - 5y^2 = 0$$ ; $$3y^2 + y = 0$$
$$y^2 - \sqrt{10}y^2 + \frac{5}{2}y = 0$$ ; $$3y^2 - 7y^2 + 4y = 0$$
$$(1 - \sqrt{2})y^2 + y^2 - (1 + \sqrt{2})y = 0$$

2) Résoudre les équations différentielles suivantes puis déterminer la solution vérifiant les conditions initiales données :
$$(E_1) : y^2 - 8y^2 + 16y = 0$$ et $$y(0) = 1$$ et $$y'(0) = 0$$
$$(E_2) : y^2 + y = 0$$ et $$y(0) = 0$$ et $$y'(0) = \frac{\pi}{2}$$

3) On considère les équations différentielles suivantes :
$$(E) : y^2 + y = \cos^2 x$$ et $$(E_0) : y^2 + y = 0$$

a) Vérifier que pour tout $$x \in \mathbb{R}$$ :
$$\cos^2 x = \frac{1}{8}\cos(4x) + \frac{1}{2}\cos(2x) + \frac{3}{8}$$

b) Déterminer les réels $$a, b$$ et $$c$$ pour que la fonction $$u : x \to a\cos(2x) + b\cos(4x) + c$$ soit solution de l'équation différentielle $$(E)$$.

c) Soit $$f$$ une fonction définie et dérivable sur $$\mathbb{R}$$.
Montrer que la fonction $$f$$ est une solution de $$(E)$$ si, et seulement si, la fonction $$(f - u)$$ est solution de l'équation différentielle $$(E_0)$$.

d) Résoudre l'équation $$(E_0)$$ puis déterminer toutes les solutions de l'équation $$(E)$$.

e) Déterminer la solution $$g$$ de $$(E)$$ telle que :
$$g(0) = -2$$ et $$g'(0) = 0$$

Dévoirs 2
Soit $$f$$ une fonction définie et dérivable sur $$\mathbb{R}^*$$, telle que :
$$(\forall x \in \mathbb{R}^*) f'(x) = f\left(\frac{1}{x}\right)$$ (*)

1) Soit $$g$$ la fonction définie sur $$\mathbb{R}$$ par : $$g(x) = f(e^x)$$
a) Montrer que : $$(\forall x \in \mathbb{R}^*) x^2 f^*(x) + f(x) = 0$$
b) En déduire que la fonction $$g$$ est solution de l'équation différentielle : $$y^2 - y^2 + y = 0$$
2) Déterminer toutes les fonctions $$f$$ vérifiant (*).

#### Devoir 3
On considère l'équation différentielle suivante :
$$(E) : yy^2 - 2(y^2)^2 - 2yy^2 - y^2 = 0$$

On pose : $$y = \frac{1}{z}$$

1) Calculer $$y'$$ et $$y''$$ en fonction de $$z$$ et $$z'$$ et $$z''$$
2) Montrer que $$y$$ est une solution de $$(E)$$ si, et seulement si, $$z$$ est solution de l'équation différentielle :
$$(E') : z^2 - 2z^2 + z = 0$$

3) En déduire la solution $$f$$ de $$(E)$$ vérifiant les conditions initiales :
$$f(1) = \frac{1}{e}$$ et $$f(0) = 1$$

#### Devoir 4
1) Résoudre l'équation :
$$(E) : y^2 - 2y^2 + 5y = 0$$

2) a) Déterminer la solution $$f$$ de l'équation $$(E)$$ qui vérifie les conditions :
$$f(0) = f'(0) = 1$$

b) En déduire que :
$$\int_0^x e^x \cos(2x) dx = \frac{e^x - 1}{5}$$

3) Soit $$\theta \in \mathbb{R}$$. Résoudre et discuter selon les valeurs de $$\theta$$ l'équation différentielle suivante :

$$y^2 - (2\sin\theta)y^2 + y = 0$$

Soit $n \in \mathbb{N}^*$, on considère la fonction numérique $f$ définie sur $\mathbb{R}^*$, par :

$$f(x) = \frac{1}{x^{n+1}} \int_0^t u^n \sin(u) du$$

1) Montrer que $f$ est dérivable sur $\mathbb{R}^*$, et que :

$$(\forall x \in \mathbb{R}^*) \quad x.f'(x) + (n+1)f(x) = \sin x$$

2) Determiner l'expression de \( f(x) \) pour \( n = 1 \).
3) On considere l'equation differentielle:

$$(E): xy' + 2y = \sin(x) \text{ avec } x \in \mathbb{R}^*$$

Et on pose : $z = y - f$

a) Montrer que $y$ est une solution de $(E)$ si, et seulement si, $z$ est une solution de l'équation :

$$(E'): xz' + 2z = 0 \text{ avec } x \in \mathbb{R}^*$$

b) Resoudre l'equation differentielle \((E^{\prime})\)
c) En déduire les solutions de l'equation \((E)\).

#### DÉFOND

Un condensateur de capacité $C$ est chargé sous une tension initiale de 20 volts. Il se décharge ensuite dans un résistor de résistance $R$.

La tension aux bornes du condensateur est une fonction $u$ (du temps) définie sur $[0; +\infty[$. Cette fonction $u$ est solution, sur $[0; +\infty[$ de l'équation différentielle :

$$(E): u'(t) + \frac{1}{RC} u(t) = 0$$

1) Determiner toutes les solutions de l'equation différentielle \((E)\).
2) On rappelle que \( u(0) = 20 \). Détérminer la fonction \( u \). Dans la suite: \( R = 1000\Omega \) et \( C = 10^{-4}\Omega \)
3) a) Montrer que pour tout \( t \in \mathbb{R}^* \): \( u(t) = 20e^{-10t} \)
b) Determiner les valeurs de \( t \) pour lesquelles on a: \( u(t) \geq 0.02 \)

4) L'intensité traversant le circuit est une fonction \( i \) (du temps) définie sur \( [0; +\infty[ \) par: \( i(t) = Cu'(t) \) a) Déterminer \( i(t) \).
b) L'énergie \( W \) (exprimée en joules) dissipée dans le résistor, entre les instants \( t = 0 \) et \( t = 0.69s \), est égale à \( W = \int_{0}^{0.69} R \cdot i^2(t) dt \).

Calculer $W$ à 0,01 près.

#### DÉFOND

On se propose de déterminer toutes les fonctions $f$ définies et dérivables sur $]0; +\infty[$ vérifiant l'équation différentielle :

$$(E): xf'(x) - (2x+1)f(x) = 8x^2$$

1) a) Démontrer que si $f$ est solution de $(E)$ alors la fonction $g$ définie sur l'intervalle $]0; +\infty[$ par $g(x) = \frac{f(x)}{x}$ est solution de l'équation différentielle : $(E') : y' = 2y + 8$

b) Démontrer que si $h$ est solution de $(E')$ alors la fonction $f$ définie par $f(x) = xh(x)$ est solution de $(E)$.

2) Résoudre \((E^{\prime})\) et en déduire toutes les solutions de l'équation différentielle \((E)\).
3) Existe-il une fonction \( f \) solution de l'equation différentielle \( (E) \) dont la représentation graphique dans un repère donné passse par le point \( A(\ln 2;0) \).

#### DÉFOND

**Partie A.**
1) Trouver trois réels $a, b$ et $c$ tels que :

$$(\forall x \in ]0; +\infty[ \quad \frac{1}{x(1+x^2)} = \frac{a}{x} + \frac{bx+c}{1+x^2}$$

2) En déduire une primitive de la fonction $u$ définie

sur $]0; +\infty[$ par : $u(x) = \frac{1}{x(1+x^2)}$

Partie B:
On s'intéresse à l'équation différentielle suivante :

$$(E): y'' - \frac{2x}{1+x^2} y' + \frac{2}{1+x^2} y = 0$$

1) Vérifie que la fonction $y_0$ définie sur $]0; +\infty[$ par

$y_0(x) = x$ est solution de $(E)$.

2) On pose pour tout $x \in ]0; +\infty[ : y(x) = x.z(x)$

a) Vérifier que $z$ est deux fois dérivable sur $\mathbb{R}^*$.
b) Montrer que $y$ est solution de $(E)$ si et seulement si $z$ vérifie $x(1+x^2)z'' + 2z' = 0$.

c) En déduire que pour tout $x \in ]0; +\infty[$ :

$$z(x) = -\frac{\alpha}{x} + \alpha x + \beta \text{ où } (\alpha; \beta) \in \mathbb{R}^2.$$

d) Donner toutes les solutions de $(E)$ sur $\mathbb{R}^*$.

e) Déterminer la solution $y$ de $(E)$ vérifiant :
$y(1) = 0$ et $y'(1) = 2$

#### REVERSE

Soit $(E)$ l'équation différentielle :

$$4y'' + 5y' + y = 2e^{-2x}(7x - 11)$$

1) Vérifier que la fonction $g$ définie par $g(x) = 2xe^{-2x}$ est une solution de l'équation différentielle $(E)$.

2) Soit $u$ une fonction définie et dérivable sur $\mathbb{R}$.
Montrer que la fonction $u$ est une solution de $(E)$ si, et seulement si, la fonction $(u - g)$ est solution de l'équation différentielle :

$$(E_0): 4y'' + 5y' + y = 0$$

3) Résoudre l'équation $(E_0)$ et en déduire toutes les solutions de l'équation $(E)$.

4) Déterminer la solution $f$ de $(E)$ dont la courbe passe par le point $A(0, -1)$ et admet en ce point une tangente parallèle à l'axe des abscisses.

On considère l'équation différentielle :
$$(E): y'' - 5y' + 6y = (2x - 3)e^x$$

1) Déterminer les réels $a, b$ et $c$ pour que la fonction $f: x \mapsto (ax^2 + bx + c)e^x$ soit solution de $(E)$.

2) Déterminer la solution générale de l'équation $(E)$.
3) a) En utilisant une intégration par parties, calculer l'intégrale $\int_2^t (2t - 1)e^t dt$ où $x \in \mathbb{R}$.

b) En déduire la solution de l'équation différentielle :
$$(E^*): z''' - 5z'' + 6z' = (2t - 1)e^t$$

vérifiant : $$z'\left(\frac{3}{2}\right) = z''\left(\frac{3}{2}\right) = 0$$

#### DEVOIR SI

Soit $S$ l'ensemble des fonctions $f$ définies et dérivables sur $\mathbb{R}$ et qui vérifient la condition suivante :

$$(\forall x \in \mathbb{R}) f(x) - x \int_0^x f(t) dt + \int_0^x tf(t) dt = x$$

1) On considère l'équation : $(E): y'' - y = 0$

a) Déterminer la fonction $h$ solution de $(E)$ et dont la courbe passe par le point $A\left(\ln 2; \frac{3}{4}\right)$ et admet une tangente de pente $\frac{5}{4}$ en ce point.

b) Soit $x \in \mathbb{R}$. Calculer $I = \int_0^x I(e^t - e^{-t}) dt$ en fonction de $x$ puis conclure que $h \in S$.

2) Soit $f$ un élément de $S$.

a) Montrer que :

$$(\forall x \in \mathbb{R}) f'(x) = 1 + \int_0^x f(t) dt$$

b) Montrer que $f$ est une solution de $(E)$.

c) Calculer $f(0)$ et $f'(0)$ puis en déduire l'ensemble $S$.

## Résumé

- Les solutions de $y'=ay$ sont les fonctions $x\mapsto Ce^{ax}$, avec $C\in\mathbb{R}$.
- Les solutions de $y'=ay+b$ sont les fonctions $x\mapsto Ce^{ax}-\dfrac{b}{a}$, avec $a\neq 0$.
- Pour $y''+ay'+by=0$, la forme des solutions dépend du discriminant de l'équation caractéristique $r^2+ar+b=0$.
- Deux racines réelles distinctes $r_1$ et $r_2$ donnent $x\mapsto \alpha e^{r_1x}+\beta e^{r_2x}$.
- Une racine double $r$ donne $x\mapsto(\alpha x+\beta)e^{rx}$.
- Deux racines complexes conjuguées $p\pm\mathrm{i}q$ donnent $x\mapsto e^{px}(\alpha\cos qx+\beta\sin qx)$.
- Une condition initiale détermine les constantes et donc la solution unique du problème posé.

## Auto-évaluation

- Reconnaître l'ordre d'une équation différentielle et vérifier qu'une fonction en est solution.
- Résoudre $y'=ay$ et $y'=ay+b$.
- Écrire l'équation caractéristique de $y''+ay'+by=0$ et discuter selon son discriminant.
- Déterminer la solution vérifiant des conditions initiales données.
- Ramener une équation à l'une des deux formes étudiées par un changement de fonction.
- Modéliser un phénomène de croissance, de décroissance ou d'oscillation par une équation différentielle.
