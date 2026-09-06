# Chapitre 5 : Groupes, anneaux et corps

## Histoire

La notion de groupe est issue de la théorie des substitutions pour la résolution des équations algébriques, à laquelle ont contribué Carl Friedrich Gauss, Joseph - Louis Lagrange, Augustins Cauchy et Niels Abel. Cauchy a publié vingt-cinq articles sur les « groupes ». Mais l'apport majeur est dû à Galois, lequel est le premier à dégager la notion de sous-groupe distingué et à qui revient la première idée de la notion de représentation linéaire d'un groupe. C'est également sous sa plume qu'apparaît le terme groupe d'une équation algébrique.

D'autres structures sont mises en évidence, particulièrement en Allemagne. Indépendamment des travaux de Galois, Kummer étudie des anneaux et découvre l'ancêtre de la notion d'idéal. Kronecker et

Dedekind développent les prémisses de la théorie des anneaux et des corps. Kronecker établit le pont entre les écoles française et allemande. Il donne la définition moderne de groupe de Galois à partir d'automorphismes de corps.

Source : https://fr.wikipedia.org

> **Évariste Galois** (1811–1832)
> **Augustin-Louis Cauchy** (1789–1857)

## Objectifs

- Reconnaître et étudier une structure de groupe ou de groupe commutatif.
- Caractériser un sous-groupe et exploiter les morphismes de groupes.
- Reconnaître une structure d'anneau, un anneau intègre et leurs principales propriétés.
- Reconnaître une structure de corps et effectuer des calculs dans un corps commutatif.
- Transporter une structure algébrique par un isomorphisme.

## Plan du chapitre

- Activités préparatoires
- **Cours** : groupes · sous-groupes · morphismes · anneaux · anneaux intègres · corps.
- **Méthodes** : exemples de groupes · calcul dans un groupe et un anneau · sous-groupes et morphismes · transfert de structure.
- **Exercices et problèmes** : applications · perfectionnement · devoirs · problèmes de synthèse.

## Prérequis

- Lois de composition interne, associativité, commutativité et distributivité.
- Élément neutre, symétrique et morphisme.
- Calcul dans $\mathbb{R}$ et $\mathbb{C}$.
- Calcul matriciel et applications bijectives.

## Activités préparatoires

### RAPPELS
A) Propriétés d'une loi de composition interne

On considère dans $\mathbb{R}$ la loi de composition interne * définie par : $(\forall (x; y) \in \mathbb{R}^2)$ $x * y = xy - (ax + by)$ où $a$ et $b$ sont deux réels donnés.

1. Déterminer une condition nécessaire et suffisante pour que la loi $\cdot$ soit commutative.
2. Calculer: $(0\ast 1)\ast 1$ ； $0\ast (1\ast 1)$ ； $0\ast (1\ast 1)$ ； $(1\ast 1)\ast 0$ ； $1\ast (1\ast 0)$
3. Montrer que la loi $\star$ est associative si, et seulement si: $(a = 0$ et $b = 0)$ ou $(a = -1$ et $b = -1)$.
4. On suppose dans cette question que $ a = b = -1 $.

a) Montrer que $\star$ admet un élément neutre que l'on déterminera.
b) Déterminer les nombres admettant un symétrique pour la loi $\star$.

B) Structure de $\mathbb{Z}/4\mathbb{Z}$ et l'arithmétique :

1. a) Donner la table de multiplication dans $\mathbb{Z} / 4\mathbb{Z}$.
b) Est-ce-que tout élément $\alpha$ de $\mathbb{Z} / 4\mathbb{Z} - \{\overline{0}\}$ admet un symétrique pour la multiplication? Justifier.
c) Résoudre dans $\mathbb{Z} / 4\mathbb{Z}$ les équations suivantes:

$$(E_1) : \overline{2}x = \overline{1} \quad ; \quad (E_2) : \overline{2}x = \overline{2} \quad ; \quad (E_3) : \overline{3}x = \overline{2}$$

2. Soit $n$ et $p$ deux entiers tels que $n > p \ge 1$. On pose : $\sigma = n \wedge p$ et $n = k\sigma$ et $p = q\sigma$.

et on considère l'ensemble : $E = \{x \in \mathbb{Z}/n\mathbb{Z} \mid x = \lambda \cdot \overline{p} \text{ et } \lambda \in \mathbb{Z}\}$

a) Montrer que $E$ est une partie stable pour les lois d'addition et de multiplication dans $\mathbb{Z} / n\mathbb{Z}$.
b) Montrer que: $(\forall x \in E)(\forall \alpha \in \mathbb{Z} / n\mathbb{Z}) \alpha x \in E$.
c) Montrer que: $\overline{1} \in E \Leftrightarrow p \wedge n = 1$
d) On suppose que: $\forall (x,y)\in E^2 x.y = \overline{0}$ (1)

Montrer que $k$ divise $p$.

Application : En considérant $n = 18$ ; déterminer tous les entiers $p$ pour lesquels (1) est vérifiée ($n > p \ge 1$)

C) Des matrices régulières :

Dans $\mathbb{M}_2(\mathbb{R})$, ensemble des matrices carrées d'ordre 2, on considère les matrices :

$$A = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} \quad ; \quad B = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \quad ; \quad C = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$$

1. Calculer: $A^2$; $B \times C$; $C \times B$.
2. La proposition « $\forall (M;N)\in \mathbb{M}_2(\mathbb{R})$ $AM = AN\Rightarrow M = N$ » est-elle vraie? Justifier.
D) Des fonctions numériques symétrisables :

Soit $\mathcal{F}$ l'ensemble des fonctions numériques de $\mathbb{R}$ dans $\mathbb{R}$.

1. Montrer que tout élément $ f \in \mathcal{F} $ admet un symétrique dans $ (\mathcal{F}; +) $.
2. Donner une condition nécessaire et suffisante pour qu'un élément $ f \in \mathcal{F} $ admet un symétrique dans $ (\mathcal{F}; \times) $.

### GROUPE ET SOUS-GROUPE
On considère l'ensemble $E = \mathbb{R}^* \times \mathbb{R}$, et on définit sur $E$ une loi de composition interne comme suit :

$$\left(\forall (a; b) \in E\right) \left(\forall (x; y) \in E\right) \quad (a; b) * (x; y) = \left(ax; bx + \frac{y}{a}\right)$$

1. a) Montrer que pour tous $(a; b)$, $(x; y)$ et $(z; t)$ de $E$, on a: $\left[(a; b) * (x; y)\right] * (z; t) = \left(axz; bxz + \frac{yz}{a} + \frac{t}{ax}\right)$
b) Montrer que la loi $\ast$ est associative et admet un élément neutre $(e;u)$ à déterminer; et que tout élément $(a;b)$ de $E$ admet un symétrique dans $E$ que l'on déterminera (on note $(a;b)$ le symétrique de $(a;b)$). On dit que $(E;\ast)$ est un groupe.

### GÉNÉRALISATION
Soit $(G; T)$ un ensemble muni d'une loi de composition interne.

On dit que $(G; T)$ est un groupe si, et seulement si, la loi $T$ est associative, admet un élément neutre et tout élément de $G$ admet un symétrique pour la loi $T$. Si de plus, la loi $T$ est commutative, on dit que le groupe $(G; T)$ est commutatif.

c) Le groupe $(E; *)$ est-il commutatif ?

2. Les ensembles $(\mathbb{C}^*; \times), (\mathbb{C}; +), (\mathbb{M}_2(\mathbb{R}); +)$ et $(\mathbb{M}_2(\mathbb{R}); \times)$ sont-ils des groupes? sont-ils commutatif?
3. Soit $ F = \{(a;0) / a\in \mathbb{R}^*\} $.

a) Montrer que $F$ est une partie stable de $(E;*)$.
b) Montrer que $(F;*)$ est un groupe commutatif.

On dit que $(F; *)$ est un sous-groupe du groupe $(E; *)$.

### GÉNÉRALISATION
On dit que $H$ est un sous-groupe de groupe $(G; T)$ si $H$ est une partie stable de $G$ pour la loi $T$ et $(H; T)$ est un groupe.

4. Soit $K$ une partie non vide de $E$ et vérifiant : $\left(\forall (X; Y) \in K^2\right) X * Y^* \in K$

($Y^*$ est le symétrique de $Y$ dans $(E; *)$)

a) Vérifier que $(e; u) \in K$ (ou $(e; u)$ est l'élement neutre déjà déterminé dans la question 1) b).
b) Montrer que pour tout $Y \in K: Y^{*} \in K$.
c) En déduire que $ K $ est une partie stable dans $ (E;*) $ et que $ (K;*) $ est un sous-groupe de $ (E;*) $.

5. On considère l'ensemble $L = \left\{\left(x; x - \frac{1}{x}\right) / x \in ]0; +\infty[\right\}$. Montrer que $(L; *)$ est un sous-groupe de $(E; *)$.

### IMAGE D'UN GROUPE PAR UN MORPHISME
Pour tout réel $\alpha$, on pose : $M_\alpha = \begin{pmatrix} \cos \alpha & -\sin \alpha \\ \sin \alpha & \cos \alpha \end{pmatrix}$, et on considère les ensembles :

$$\mathbb{M} = \{M_\alpha / \alpha \in \mathbb{R}\} \quad \text{et} \quad \mathbb{U} = \{e^{i\theta} / \theta \in \mathbb{R}\}$$

1. Montrer que $\times$ est une loi de composition interne sur $\mathbb{M}$
2. a) Montrer que $\mathbb{U}$ est une partie stable pour la multiplication dans $\mathbb{C}$.
b) Montrer que $(\mathbb{U};\times)$ est un sous-groupe du groupe commutatif $(\mathbb{C}^*;\times)$

3. On considère l'application :

$$f: \mathbb{U} \to \mathbb{M}$$

$$e^{\theta\theta} \mapsto M_\theta$$

a) Montrer que $f$ est une morphisme surjectif de $(\mathbb{U};\times)$ vers $(\mathbb{M};\times)$.
b) En déduire que $(\mathbb{M};\times)$ est un groupe commutatif.

### DISTRIBUTIVITÉ
A) Soit $A$, $B$ et $M$ des matrices de $\mathbb{M}_2(\mathbb{R})$ définies par :

$$A = \begin{pmatrix} 2 & 5 \\ -1 & 3 \end{pmatrix} \quad ; \quad B = \begin{pmatrix} 1 & -4 \\ 1 & 2 \end{pmatrix} \quad ; \quad M = \begin{pmatrix} x & z \\ y & t \end{pmatrix} \quad \text{où } (x; y; z; t) \in \mathbb{R}^4.$$

Montrer que : $(A+B)M = AM + BM$ et $M(A+B)M = MA + MB$

En fait, on peut généraliser ces deux résultats comme suit :

$$\left( \forall (M; E; F) \in (\mathbb{M}_2(\mathbb{R}))^3 \right) \begin{cases} M(E+F) = ME + MF \\ (E+F)M = EM + FM \end{cases}$$

On dit alors que « la loi $\times$ est distributive par rapport à la loi $+$ dans $\mathbb{M}_2(\mathbb{R})$ »

B) Soit $E$ un ensemble non vide et $\mathcal{P}(E)$ l'ensemble des parties de $E$.

Pour tous $X$ et $Y$ de $\mathcal{P}(E)$, on pose : $X \Delta Y = (X-Y) \cup (Y-X)$.

a) Montrer que $\cap$ (l'intersection) est distributive par rapport à $\cup$ (la réunion) dans $\mathcal{P}(E)$.
b) Montrer que $\cap$ est distributive par rapport à $\Delta$ dans $\mathcal{P}(E)$.

C) On munit l'ensemble $\mathcal{V}_3$ des vecteurs de l'espace de deux lois de composition internes :

L'addition vectorielle: +
Le produit vectoriel: $\wedge$

On suppose que l'espace est muni d'un repère orthonormé direct $(O; \vec{i}, \vec{j}, \vec{k})$.

Montrer que le produit vectoriel $\wedge$ est distributif par rapport à l'addition vectorielle $+$ dans $\mathcal{V}_3$.

Indication : On pourra utiliser les égalités : $\vec{i} \wedge \vec{i} = \vec{j} \wedge \vec{j} = \vec{k} \wedge \vec{k} = \vec{0}$ ; $\vec{i} \wedge \vec{j} = \vec{k}$ ; $\vec{j} \wedge \vec{k} = \vec{i}$ ; $\vec{k} \wedge \vec{i}$.

### ANNEAU
1. On considère l'ensemble $\mathbb{R}$ muni de deux lois de composition internes $T$ et $*$ définies par :

\[
\left(\forall (x; y) \in \mathbb {R} ^ {2}\right) \left\{ \begin{array}{l} x T y = x + y - 1 \\ x * y = (x - 1) (y - 1) + 1 \end{array} \right.
\]

a) Montrer que $(\mathbb{R};\mathsf{T})$ est un groupe commutatif.
b) Montrer que la loi * est associative et distributive par rapport à la loi T dans R.

On exprime les propriétés citées en a) et b) en disant que $(\mathbb{R};\mathsf{T};*)$ est un anneau.

Et comme on a en plus, la loi * est commutative (à vérifier), on dit que $(\mathbb{R};\mathsf{T};*)$ est un anneau commutatif.

c) Vérifier que * admet un élément neutre u à déterminer. On dit que (R; T; *) est un anneau commutatif unitaire. (Ainsi, (R; T; *) est un anneau commutatif d'unité u).

2. Les ensembles suivants munis de deux lois de composition internes sont-ils des anneaux ? Si c'est le cas, sont-ils commutatif ? sont-ils unitaires ?

\[
(\mathbb {C}; +; \times) \quad ; \quad (\mathbb {Z} / 4 \mathbb {Z}; +; \times) \quad ; \quad (\mathbb {M} _ {2} (\mathbb {R}); +; \times) \quad ; \quad (\mathcal {V} _ {3}; +; \wedge)
\]

3. Soit $ (A;T;*) $ un anneau d'élément neutre $ 0_{A} $ pour la loi T.

On dit que l'anneau $(A;T;*)$ est intègre si: $\left(\forall (x;y)\in A^{2}\right)\left[x*y=0_{A}\Rightarrow(x=0_{A}\text{ ou }y=0_{A})\right]$.

a) Vérifier que l'anneau $(\mathbb{R};\mathsf{T};*)$, cités dans la question 1), est un anneau intègre.

b) L'anneau $(\mathbb{M}_2(\mathbb{R}); + ; \times)$ est-il intègre ? Même question pour l'anneau $(\mathbb{Z}/4\mathbb{Z}; + ; \times)$ ?

### CORPS
A) Soit $\xi$ l'ensemble des matrices $M(a; b) = \begin{pmatrix} a & -b \\ b & a \end{pmatrix}$ où $(a; b) \in \mathbb{R}^2$.

1. Montrer que $\xi$ est une partie stable dans $(\mathbb{M}_2(\mathbb{R}); + ; \times)$, et que $(\xi; +)$ est un sous-groupe de $(\mathbb{M}_2(\mathbb{R}); + )$.
2. Montrer que $(\xi; +; \times)$ est un anneau unitaire, et que toute matrice non nulle de $\xi$ admet un inverse dans $\xi$. On dit alors que $(\xi; +; \times)$ est un corps.
3. Montrer que l'anneau $(\xi; +; \times)$ intègre.
B) Dresser la table de multiplication de $(\mathbb{Z}/5\mathbb{Z};\times)$ puis vérifier que $(\mathbb{Z}/5\mathbb{Z};+;\times)$ est un corps commutatif.
C) Soit $ p $ un nombre premier positif, et soit $ x \in \mathbb{Z} / p\mathbb{Z} - \{\overline{0}\} $. On note $ x = \overline{m} $.

1. Montrer qu'il existe $(\alpha; \beta) \in \mathbb{Z}^2$ tel que $\alpha m + \beta p = 1$. En déduire que: $\overline{\alpha}. \overline{m} = \overline{1}$.
2. Montrer que: $\left(\forall x\in \mathbb{Z} / p\mathbb{Z} - \{\overline{0}\}\right)\left(\exists !y\in \mathbb{Z} / p\mathbb{Z} - \{\overline{0}\}\right):x.y = \overline{1}$
3. En déduire que $(\mathbb{Z} / p\mathbb{Z} - \{\overline{0}\} ;\times)$ est un groupe commutatif et que $(\mathbb{Z} / p\mathbb{Z}; + ;\times)$ est un corps commutatif.

## Cours
### 1. Groupe
#### 1.1. Définition d'un groupe
> **Définition 1.**
Soit G un ensemble muni d'une loi de composition interne (notée *).

On dit que (G;*) est un groupe lorsque :

1) La loi $\star$ est associative,
2) $(G;*)$ possede un element neutre,
3) Tout élément de $ G $ possède un symétrique dans $ G $ pour la loi $ * $.

Si de plus la loi * est commutative, on dit que (G;*) est un groupe commutatif (ou groupe abélien).

> **Exemples.**
1) $(\mathbb{Z}; + )$ $(\mathbb{Q}; + )$ $(\mathbb{R}; + )$ et $(\mathbb{C}; + )$ sont des groupes commutatif, mais $(\mathbb{N}; + )$ n'est pas un groupe car aucun entier $n\geq 1$ n'est symétrisable.
2) $(\mathbb{Q}^{\star};\times),(\mathbb{R}^{\star};\times)$ et $(\mathbb{C}^{\star};\times)$ sont des groupes commutatif, mais $(\mathbb{Z}^{\star};\times)$ n'en est pas un car aucun élément (excepté 1 et -1) n'est symétrisable.
3) $(\mathbb{Q}_{+}^{*};\times)$ et $(\mathbb{R}_{+}^{*};\times)$ sont des groupes commutatif.
4) $(\mathcal{V}_2; + )$ et $(\mathcal{V}_3; + )$ sont des groupes commutatif.
5) $(\mathbb{M}_2(\mathbb{R}); + )$ et $(\mathbb{M}_3(\mathbb{R}); + )$ sont des groupes commutatif, mais $(\mathbb{M}_2(\mathbb{R});\times)$ n'est pas un groupe car les matrices $O = \begin{pmatrix} 0 & 0\\ 0 & 0 \end{pmatrix}$ et $A = \begin{pmatrix} 1 & 1\\ 0 & 0 \end{pmatrix}$, par exemple, ne sont pas inversibles dans $(\mathbb{M}_2(\mathbb{R});\times)$.
6) $(\mathbb{Z} / 6\mathbb{Z}; + )$ et $(\mathbb{Z} / 5\mathbb{Z};\times)$ sont des groupes commutatif, mais $(\mathbb{Z} / 4\mathbb{Z};\times)$ n'en est pas un car $\overline{2}$ n'est pas symétrisable dans $(\mathbb{Z} / 4\mathbb{Z};\times)$.
7) La composée de deux rotations de même centre $\Omega$ et d'angles $\theta$ et $\theta'$ est une rotation de centre $\Omega$ et d'angle $\theta +\theta^{\prime}$. Ces deux rotations commutent, c'est-à-dire que:

$$R(\Omega;\theta)oR(\Omega;\theta') = R(\Omega;\theta')oR(\Omega;\theta)$$

L'ensemble des rotations de centre Ω, muni de la loi de composition est donc un groupe commutatif.
8) Soit n ∈ ℕ* - {1}. En munissant ℝⁿ de l'addition terme à terme définie par :

Pour tous (x₁;...;xₙ) et (y₁;...;yₙ) de ℝⁿ : (x₁;...;xₙ) + (y₁;...;yₙ) = (x₁ + y₁;...;xₙ + yₙ)

On obtient un groupe commutatif. L'élément neutre est (0;...;0) et l'opposé de (x₁;...;xₙ) est (-x₁;...;xₙ).
L'associativité et la commutativité sont immédiates.

> **Remarques.**
- Lorsqu'on travaille de manière abstraite dans un groupe non connu, il est fréquent d'emprunter les notations d'un groupe usuel, par exemple $(\mathbb{R}; + )$ ou $(\mathbb{R}^{*}; \times)$. Deux types de notations seront ainsi fréquemment utilisées : La notation additive et la notation multiplicative.

|  Loi | Composé de deux éléments | Neutre | Symétrique d'un élément x | Composé de x et d'un symétrique  |
| --- | --- | --- | --- | --- |
|  + | $ x + y $ | 0 | $ -x $ | $ x - y $  |
|  × ou • | $ xy $ | 1 | $ x^{-1} $ | $ xy^{-1} $  |

De la même façon, si $x \in G$ et si $n \in \mathbb{N}^*$, on notera :

- $nx = \underbrace{x + x + \ldots + x}_{n\text{iso}}$ si la notation est additive.

- $x^{*} = \underbrace{x.x\ldots x}_{n\text{iso}}$ si la notation est multiplicative.

- Par abus de langage et lorsqu'il n'y a aucune ambiguïté, on dit souvent « soit $G$ un groupe ... » sans préciser la loi.

> **Applications.**
1. On considère l'ensemble : $\mathbb{U} = \{z\in \mathbb{C} / |z| = 1\}$

Montrer que $(\mathbb{U};\times)$ est un groupe commutatif.

2. Soit $(G;*)$ un groupe d'élément neutre $e$ tel que pour tout $x \in G: x * x * x = e$.

Montrer que pour tout $(x;y)\in G^2$ : $x*y*x*y=y*y*x*x$ et $x*y*y*x=y*x*x*y$

3. On munit $\mathbb{R}^2$ d'une loi de composition interne $T$ comme suit :

Pour tous $(a;b)$ et $(x;y)$ de $\mathbb{R}^2$ : $(x;y)\mathsf{T}(a;b) = (x + a;ye^x +be^{-x})$

Montrer que $(\mathbb{R}^2; \mathsf{T})$ est un groupe non commutatif.

4. Montrer que l'ensemble $ G = \left] - \frac{\pi}{2}; \frac{\pi}{2} \right[ $ muni de la loi $ \bot $ définie par : $ x \perp y = \text{Arctan}(\tan(x) + \tan(y)) $

est un groupe commutatif.

5. On pose $ G = \mathbb{R}^* \times \mathbb{R} $, et on définit sur $ G $ une loi de composition interne par :

Pour tous $(a;b)$ et $(c;d)$ de $G:(a;b)*(c;d)=(ac;ad+b)$

a) Montrer que la loi * est associative. La loi * est-elle commutative dans $(G;*)$ ? Justifier.

b) Montrer que $(G;*)$ est un groupe.

c) On pose: $ H = \{(x;0) / x \in \mathbb{R}^*\} $ et $ K = \{(1;x) / x \in \mathbb{R}\} $

c1) Montrer que les parties $H$ et $K$ sont stables dans $(G;*)$.
c2) Montrer, en utilisant la definition, que $(H;*)$ et $(K;*)$ sont des groupes commutatif.
c3) Justifier pourquoi $(H\cup K;*)$ n'est pas un groupe.

#### 1.2. Principales propriétés d'un groupe
> **Proposition 1.**
Soit $(G; *)$ un groupe. Alors :

1) $G$ est non vide: il contient au moins son élément neutre.
2) L'élement neutre $ e $ de $ G $ est unique.
3) Le symétrique de tout élément de $ G $ est unique.
4) Pour tout $(x; y) \in G^2: (x')' = x$ et $(x * y)' = y' * x'$. ($x'$ étant le symétrique de $x$ dans $(G; *)$)
5) Tout élément $ x \in G $ est régulier. Autrement dit, pour tout $ (a; x; y) \in G^3 $:

$$(a * x = a * y \Rightarrow x = y) \quad \text{et} \quad (x * a = y * a \Rightarrow x = y)$$

> **Preuve.**
Les propriétés 2), 3) et 4) ont été déjà établies dans le chapitre précédent. Montrons 5) :

Soit $(a; x; y) \in G^3$. En notant $a'$ le symétrique de $a$ dans $G$, l'associativité de $*$ donne :

$$a * x = a * y \Rightarrow a' * (a * x) = a' * (a * y) \Rightarrow (a' * a) * x = (a' * a) * y \Rightarrow e * x = e * y \Rightarrow x = y$$

On montre de même que $x * a = y * a \Rightarrow x = y$, d'où le résultat.

> **Proposition 2.**
Soit $(G; *)$ un groupe d'élément neutre $e$.

Pour tout $(a; b) \in G^2$, l'équation $a * x = b$ (resp. $x * a = b$) admet une solution unique dans $E$ qui est $x = a' * b$ (resp. $x = b * a'$), où $a'$ désigne le symétrique de $a$ dans $(G; *)$. En d'autres termes :

Pour tout $(a; b; x) \in G^3$ : $(a * x = b \Leftrightarrow x = a' * b)$ et $(x * a = b \Leftrightarrow x = b * a')$

> **Applications.**
1. Soit $(G; *)$ un groupe et $a$ un élément de $G$. On considère les applications $f$ et $g$ définies de $G$ dans $G$

par : $f(x) = a * x$ et $g(x) = x * a$

Montrer que les applications $f$ et $g$ sont bijectives de $G$ dans $G$.

2. Soit $(G; *)$ un groupe tel que : $(\forall (x; y; z) \in G^3) \ x * y * z = y * z * x$

Montrer que le groupe $(G; *)$ est commutatif.

#### 1.3. Sous-groupes
> **Définition 2.**
Soit $(G;*)$ un groupe et $H$ une partie non vide de $G$.

On dit que $H$ est un sous-groupe de $(G;*)$ lorsque :

√ H est stable par la loi *, c'est-à-dire :  $ \left(\forall(x;y)\in H^{2}\right) $   $ x*y\in H $ .
$ \checkmark(H;*) $ est un groupe.

> **Exemples.**
1) $(\mathbb{Z}; + )$ est un sous-groupe de $(\mathbb{R}; + )$
2) $(\mathbb{R}^*; \times)$ est un sous-groupe de $(\mathbb{R}^*; \times)$.
3) L'ensemble U constitué des nombres complexes de module 1 est un sous-groupe de $(\mathbb{C}^*; \times)$.
4) $G$ et $\{e\}$ sont des sous-groupes du groupe $(G;*)$. On les appelle sous-groupes triviaux de $G$.
5) L'ensemble des racines n-ièmes de l'unité est un sous-groupe de $(\mathbb{C}^*; \times)$.
6) $(\mathbb{Z}^{*};\times)$ n'est pas un sous-groupe de $(\mathbb{R}^{*};\times)$.
7) On pose: $ E = \left\{\begin{pmatrix} 1 & a \\ 2 & 0 \end{pmatrix} / a \in \mathbb{R}\right\} $. Alors, $ (E; + ) $ n'est pas un sous-groupe de $ (\mathbb{M}_2(\mathbb{R}); + ) $, car :

\[
A = \left( \begin{array}{c c} 1 & 0 \\ 2 & 0 \end{array} \right) \in E \text {   mais   sa   matrice   opposée   } - A = \left( \begin{array}{c c} - 1 & 0 \\ - 2 & 0 \end{array} \right) \text {   n'appartient   pas   à   } E
\]

#### 1.4. Propriété caractéristique d'un sous-groupe
> **Proposition 3.**
Soit $ (G;*) $ un groupe d'élément neutre e, et H une partie de G.

\[
H \text {   est   un   sous - groupe   de   } (G; *) \Leftrightarrow \left\{ \begin{array}{l} H \neq \emptyset \\ (\forall (x; y) \in H ^ {2}) x * y ^ {\prime} \in H \end{array} \right.
\]

où $ y' $ est le symétrique de $ y $ dans $ (G;*) $.

> **Preuve.**
Commençons par montrer la condition est nécessaire. Supposons que H est un sous-groupe de G.

Puisque $H$ est non vide, alors il contient au moins un élément $a$, et d'après la définition 2, on déduit que

$a^{\prime}\in H$ , et par stabilité: $e = a^{\prime}*a\in H$ . Soit $(x;y)\in H^{2}$ . D'après la définition 2: $x*y^{\prime}\in H$

Réciproquement, On a H est non vide. D'autre part, si  $ x \in H $ , alors  $ e = x * x' \in H $  et  $ x' = e * x' \in H $ , ce

qui montre que $H$ contient tous les inverses de tous ses éléments. Enfin, si $(x; y) \in H^2$, alors $y' \in H$, donc $x * y = x * (y')' \in H$, ce qui montre la stabilité de $H$ pour la loi *.

> **Remarques.**
- En notation additive, la propriété caractéristique précédente s'écrit :

$$\left\{ \begin{array}{l} H \neq \emptyset \\ \left( \forall (x; y) \in H^2 \right) \quad x - y \in H \end{array} \right.$$

- En notation multiplicative, la propriété caractéristique précédente s'écrit :

$$\left\{ \begin{array}{l} H \neq \emptyset \\ \left( \forall (x; y) \in H^2 \right) \quad x.y^{-1} \in H \end{array} \right.$$

- Muni de la loi induite, un sous-groupe est un groupe. C'est la méthode habituelle, car la plus efficace, pour montrer que l'on a affaire à un groupe : on démontre en général que c'est un sous-groupe d'un groupe connu. Cela permet, en particulier, de ne pas à avoir à montrer l'associativité. Le lecteur est donc invité à bien connaître les exemples classiques cités en 1.1, afin de pouvoir les utiliser pour démontrer qu'une de leurs parties est un groupe.

> **Exemples.**
1) On considère l'ensemble $\mathbb{U} = \{z \in \mathbb{C} / |z| = 1\}$. Démontrons que $(\mathbb{U}; \times)$ est groupe commutatif :

On sait que $(\mathbb{C}^*; \times)$ est un groupe commutatif, donc, il suffira de montrer que $(\mathbb{U}; \times)$ est un sous-groupe de $(\mathbb{C}^*; \times)$.

Tout d'abord, on a $1 \in \mathbb{U}$ et $\mathbb{U} \subset \mathbb{C}^*$, donc $\mathbb{U} \neq \emptyset$; ensuite, on a pour tout $(z_1; z_2) \in \mathbb{U}^2$, $|z_1| = |z_2| = 1$,

et donc : $|z_1 \times z_2^{-1}| = \frac{|z_1|}{|z_2|} = \frac{|z_1|}{|z_2|} = \frac{1}{1} = 1$. On a donc montré que : $(\forall (z_1; z_2) \in \mathbb{U}^2) \quad z_1 \times z_2^{-1} \in \mathbb{U}$

Par conséquent, $(\mathbb{U}; \times)$ est un sous-groupe de $(\mathbb{C}^*; \times)$, et donc en particulier, c'est groupe commutatif.

2) On considère l'ensemble $\mathbb{Z}[i] = \{a + ib / (a; b) \in \mathbb{Z}^2\}$. Montrons que $(\mathbb{Z}[i]; +)$ est groupe commutatif :

Pour cela, il suffit de montrer qu'il s'agit d'un sous-groupe du groupe commutatif $(\mathbb{C}; +)$.

On a tout d'abord $0 \in \mathbb{Z}[i]$ (car $0 = 0 + i \times 0$) et $\mathbb{Z}[i] \subset \mathbb{C}$. Soit maintenant $z_1$ et $z_2$ deux éléments de $\mathbb{Z}[i]$.

Par définition de l'ensemble $\mathbb{Z}[i]$, il existe $(a_1; b_1; a_2; b_2) \in \mathbb{Z}^4$ tel que : $z_1 = a_1 + ib_1$ et $z_2 = a_2 + ib_2$ :

il s'ensuit donc : $z_1 - z_2 = (a_1 + ib_1) - (a_2 + ib_2) = (a_1 - a_2) + i(b_1 - b_2)$

Comme $(a_1; b_1; a_2; b_2) \in \mathbb{Z}^4$ alors $a_1 - a_2 \in \mathbb{Z}$ et $b_1 - b_2 \in \mathbb{Z}$, ce qui entraîne que $z_1 - z_2 \in \mathbb{Z}[i]$.

Par suite, $(\mathbb{Z}[i]; +)$ est un sous-groupe de $(\mathbb{C}; +)$, et donc en particulier, c'est groupe commutatif.

3) On considère l'ensemble : $$\mathbb{E} = \left\{ M(a; b) = \begin{pmatrix} a & b & 0 \\ -b & a & 0 \\ 0 & 0 & 0 \end{pmatrix} / (a; b) \in \mathbb{R}^2 \right\}$$

Montrons que $$(\mathbb{E}; +)$$ est un sous-groupe de $$(\mathbb{M}_3(\mathbb{R}); +)$$ : ( on rappelle que $$O_3$$ est matrice nulle)

On a $$O_3 \in \mathbb{E}$$ (car $$O_3 = M(0; 0)$$) et $$\mathbb{E} \subset \mathbb{M}_3(\mathbb{R})$$. Soit $$M(a; b)$$ et $$M(c; d)$$ deux éléments de $$\mathbb{E}$$ avec $$(a; b; c; b; d) \in \mathbb{R}^4$$. On a :

$$M(a; b) - M(c; d) = \begin{pmatrix} a & b & 0 \\ -b & a & 0 \\ 0 & 0 & 0 \end{pmatrix} - \begin{pmatrix} c & d & 0 \\ -d & c & 0 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} a - c & b - d & 0 \\ -(b - d) & a - c & 0 \\ 0 & 0 & 0 \end{pmatrix} = M(a - c; b - d)$$

Il s'ensuit donc que $$M(a; b) - M(c; d) \in \mathbb{E}$$. Ainsi, $$(\mathbb{E}; +)$$ est un sous-groupe de $$(\mathbb{M}_2; +)$$.

> **Applications.**
1. On considère l'ensemble suivant : $$\mathbb{H} = \{3^m \times 7^n / (m; n) \in \mathbb{Z}^2\}$$

Montrer que $$\mathbb{H}$$ est un sous-groupe de $$(\mathbb{R}^*; *; \times)$$.

2. Soit $ H $ et $ K $ deux sous-groupes d'un groupe $ (G; \bullet) $. Montré que $ H \cap K $ est un sous-groupe de $ (G; \bullet) $.
3. Soit $(G; \times)$ un groupe et a un élément de $G$. On considère les ensembles:

$$C_a = \{x \in G / ax = xa\} \quad \text{et} \quad Z(G) = \{x \in G / (\forall y \in G) \ xy = yx\}$$

(L'ensemble $$C_a$$ est appelé le centralisateur de $$a$$ et l'ensemble $$Z(G)$$ est appelé le centre du groupe $$G$$)
Montrer que $$C_a$$ et $$Z(G)$$ sont des sous-groupes de $$G$$.

#### 1.5. Morphismes de groupes
> **Proposition 4.**
Soit $$f$$ un morphisme d'un groupe $$(G; *)$$ dans un groupe $$(F; \mathsf{T})$$. Alors :

L'image de groupe $$(G; *)$$ est le groupe $$(f(G); \mathsf{T})$$.

> **Preuve.**
On a déjà démontré les propriétés suivantes dans les sections précédentes :

Si $$f$$ est un morphisme de $$(G; *)$$ dans $$(F; \mathsf{T})$$, alors :

- $ f(G) $ est une partie stable de $ (F; \mathsf{T}) $.
- * est associative dans $(G;*)$, donc, T est associative dans $(f(G); \mathsf{T})$.
- $ e $ est l'élement neutre dans $ (G;*) $, donc, $ f(e) $ est l'élement neutre dans $ (f(G); \mathsf{T}) $.
- $ x' $ est le symétrique de $ x $ dans $ (G;*) $, donc, $ f(x') $ est le symétrique de $ f(x) $ dans $ (f(G); \mathsf{T}) $.

Par suite, $$(f(G); \mathsf{T})$$ est un groupe.

5 CONNAISSANCES FONDAMENTALES

Remarques

• Soit $f$ un morphisme d'un groupe $(G; *)$ dans un groupe $(F; \mathsf{T})$. On dit aussi :
  • $f$ est un isomorphisme de groupes si $f$ est bijectif.
  • $f$ est un endomorphisme de groupe $(G; *)$ si $f$ est défini de $(G; *)$ dans $(G; *)$.
  • $f$ est un automorphisme de groupe $(G; *)$ si $f$ est un endomorphisme bijectif.
• Si le morphisme $f$ est surjectif ou un isomorphisme de groupes alors $f(G) = F$, et dans ce cas, l'image du groupe $(G; *)$ par $f$ est le groupe $(F; \mathsf{T})$. On dit alors que le morphisme $f$ transfère « la structure du groupe $(G; *)$ » en celle du groupe $(F; \mathsf{T})$.
• Si $f$ est un isomorphisme de $(G; *)$ dans $(F; \mathsf{T})$, alors $(G; *)$ et $(F; \mathsf{T})$ ont la même structure.
En particulier :
  • Si $(G; *)$ est un groupe, alors $(F; \mathsf{T})$ est un groupe.
  • Si $(G; *)$ est un groupe commutatif, alors $(F; \mathsf{T})$ est un groupe commutatif.
Ce résultat est très utile en pratique.

Exemples

1) L'égalité : $(\forall (t; t') \in \mathbb{R}^2) \exp(t + t') = \exp(t) \times \exp(t')$
signifie que l'application :
$f: \mathbb{R} \to \mathbb{R}_+^*$
$t \mapsto \exp(t)$
est un isomorphisme du groupe $(\mathbb{R}; +)$ dans le groupe $(\mathbb{R}_+^*; \times)$. Sa bijection réciproque :
$g: \mathbb{R}_+^* \to \mathbb{R}$
$t \mapsto \ln(t)$
est un isomorphisme du groupe $(\mathbb{R}_+^*; \times)$ dans le groupe $(\mathbb{R}; +)$.

2) Pour $\alpha \in \mathbb{R}$, les applications :
$f_\alpha : (\mathbb{R}; +) \to (\mathbb{R}; +)$
$x \mapsto \alpha x$

et $g_\alpha : (\mathbb{R}_+^*; \times) \to (\mathbb{R}_+^*; \times)$
$x \mapsto x^\alpha$
sont des morphisme de groupes.

3) On considère l'ensemble $\mathbb{U} = \{z \in \mathbb{C} / |z| = 1\}$. Les applications :
$h : (\mathbb{U}; \times) \to (\mathbb{U}; \times)$
$z \mapsto z^2$

et $k : (\mathbb{C}^*; \times) \to (\mathbb{C}^*; \times)$
$z \mapsto \overline{z}$
sont des endomorphismes de groupes.

> **Applications.**
1. On définit sur $\mathbb{R}^2$ une loi de composition interne * comme suit :

Pour tous $(a; b)$ et $(c; d)$ de $\mathbb{R}^2 : (a; b) * (c; d) = \left( \frac{1}{2} ad + \frac{1}{2} bc ; \frac{1}{2} bd - \frac{9}{4} ac \right)$

Et soit $f$ l'application définie par :

$$\begin{array}{l} f : \mathbb{C} \to \mathbb{R}^2 \\ z = a + ib \mapsto \left( \frac{4b}{3} ; 3a \right) \end{array}$$

a) Montrer que $f$ est un morphisme de $(\mathbb{C};\times)$ dans $(\mathbb{R}^2;\ast)$.
b) En déduire la structure de $\left(\mathbb{R}^2 -\left\{(0;0)\right\} ;*\right)$
c) Déterminer le symétrique de l'élement $(a; b)$ de $\left(\mathbb{R}^2 - \left\{(0; 0)\right\}; *\right)$ par la loi $*$.
d) Résoudre dans $\mathbb{R}^2 -\left\{(0;0)\right\}$ l'équation: $(a;b)*\left(a;b\right) = (0;2)$

2. Soit $\mathcal{L}(\mathbb{R}; \mathbb{R})$ l'ensemble des fonctions linéaires. On note $\theta$ la fonction numérique nulle.

On a donc : $\mathcal{L}(\mathbb{R}; \mathbb{R}) = \{f_a / (\forall x \in \mathbb{R}) \ f_a(x) = ax\}$

En utilisant un morphisme bien adapté, montrer que $(\mathcal{L}(\mathbb{R}; \mathbb{R}); +)$ est un groupe commutatif, et que $(\mathcal{L}(\mathbb{R}; \mathbb{R}) - \{\theta\}; o)$ est un groupe. ($o$ étant la loi de compositions des applications).

3. On considère l'ensemble : $\mathbb{E} = \left\{ M(\theta) = \begin{pmatrix} \cos \theta & \sin \theta & 0 \\ -\sin \theta & \cos \theta & 0 \\ 0 & 0 & 1 \end{pmatrix} / \theta \in \mathbb{R} \right\}$

a) Montrer que $\mathbb{E}$ est une partie stable de $(\mathbb{M}_3(\mathbb{R});\times)$.
b) En utilisant un morphisme de groupes, montré que $(\mathbb{E};\times)$ est un groupe commutatif.

### 2. Anneau
#### 2.1. Distributivité
> **Définition 3.**
Soit $E$ un ensemble muni de deux lois de composition interne $\oplus$ et $\otimes$.

On dit que la loi $\otimes$ est distributive par rapport à la loi $\oplus$ si pour tous $x$, $y$ et $z$ de $E$, on a :

$$x \otimes (y \oplus z) = (x \otimes y) \oplus (x \otimes z) \quad \text{et} \quad (y \oplus z) \otimes x = (y \otimes x) \oplus (z \otimes x)$$

> **Exemples.**
1) Sur $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ ou $\mathbb{C}$, la multiplication est distributive par rapport à l'addition ; c'est-à-dire :

$$x \times (y + z) = x \times y + x \times z \quad \text{et} \quad (y + z) \times x = y \times z + z \times x$$

2) Dans $\mathcal{P}(E)$, ensemble des parties de $E$, l'intersection est distributive par rapport à la réunion :

$$A \cap (B \cup C) = (A \cap B) \cup (A \cap C) \quad \text{et} \quad (B \cup C) \cap A = (B \cap A) \cup (C \cap A)$$

De même, la réunion est distributive par rapport à l'intersection:

$$A \cup (B \cap C) = (A \cup B) \cap (A \cup C) \quad \text{et} \quad (B \cap C) \cup A = (B \cup A) \cap (C \cup A)$$

3) Dans $\mathbf{M}_2(\mathbb{R})$ et $\mathbf{M}_3(\mathbb{R})$, la multiplication est distributive par rapport à l'addition ; c'est-à-dire :

$$M_1 \times (M_2 + M_3) = M_1 \times M_2 + M_1 \times M_3 \quad \text{et} \quad (M_2 + M_3) \times M_1 = M_2 \times M_1 + M_3 \times M_1$$

4) Soit $\mathcal{A}(\mathbb{R}; \mathbb{R})$ l'ensemble des applications de $\mathbb{R}$ dans $\mathbb{R}$, $\mathbb{R}$ étant muni de l'addition usuelle,

$f$ et $g$ étant dans $E$, $f + g$ est l'application définie sur $\mathcal{A}(\mathbb{R}; \mathbb{R})$ par :

$$(\forall x \in E) \quad (f + g)(x) = f(x) + g(x)$$

Etudions la distributivité de composition usuelle « $o$ » par rapport à « $+$ ».

Soit $f$, $g$ et $h$ trois éléments de $\mathcal{A}(\mathbb{R}; \mathbb{R})$.

- On a pour tout $x \in \mathbb{R}$ :

$$((f + g)oh)(x) = (f + g)(h(x)) = f(h(x)) + g(h(x)) = foh(x) + goh(x) = (foh + goh)(x)$$

D'où : $(f + g)oh = (foh) + (goh)$

- On a pour tout $x \in \mathbb{R}$ :

$$(ho(f + g))(x) = h((f + g)(x)) = h(f(x) + g(x))$$

Faute d'une propriété telle que $f(y + z) = f(y) + f(z)$, on ne peut pas poursuivre. On peut donner dans ce cas un simple contre-exemple :

$f = g = Id_{\mathbb{R}}$ et pour tout $x \in \mathbb{R}$, $h(x) = x^2$. Alors pour tout $x \in \mathbb{R}$ :

$$h(f(x) + g(x)) = h(2x) = 4x^2 \quad \text{et} \quad h(f(x)) + h(g(x)) = 2h(x) = 2x^2$$

Donc, on n'a pas en général : $ho(f + g) = hof + hog$

Conclusion : La composition usuelle « $o$ » n'est pas distributive par rapport à la loi « $+$ » dans $\mathcal{A}(\mathbb{R}; \mathbb{R})$.

> **Applications.**
1. On définit sur $\mathbb{R}^2$ une loi de composition interne T comme suit :

$$(\forall (x; y) \in \mathbb{R}^2) (\forall (x'; y') \in \mathbb{R}^2) \quad (x; y) T(x'; y') = (xx' + 2yy'; xy' + x'y)$$

Montrer que T est distributive par rapport à l'addition « $+$ » dans $\mathbb{R}^2$.

(on rappelle que : $(x; y) + (x'; y') = (x + x'; y + y')$)

2. On définit sur $\mathbb{R}$ deux lois de composition interne T et * comme suit :

Pour tout $(x; y) \in \mathbb{R}^2$ : $x * y = x + y - 1$ et $x T y = x + y - xy$

Montrer que T est distributive par rapport à l'addition « $*$ » dans $\mathbb{R}$.

#### 2.2. Structure d'anneau
> **Définition 4.**
Soit $A$ un ensemble muni de deux lois de composition interne $\oplus$ et $\otimes$.

On dit que $(A; \oplus; \otimes)$ est un anneau lorsque :

(1) $(A; \oplus)$ est un groupe commutatif.
(2) La loi $\otimes$ est associative et distributive par rapport à la loi $\oplus$.

On dit que l'anneau $(A; \oplus; \otimes)$ est commutatif si la loi $\otimes$ est commutative.

On dit que l'anneau $(A; \oplus; \otimes)$ est unitaire si la loi $\otimes$ possède un élément neutre pour la loi $\otimes$.

> **Notations.**
Lorsqu'il n'y a pas d'ambiguïté, on note les lois $\oplus$ et $\otimes$ respectivement + (notation additive) et $\times$ (notation multiplicative). Dans le cas habituel :

On note 0 (ou $0_{A}$), appelé le zéro de l'anneau $A$, l'élement neutre pour $+$, et
On note 1 (ou $1_{A}$), appelé l'élement unité de l'anneau $A$, l'élement neutre pour $\times$ si $A$ est unitaire.
On note couramment $x,y$ ou meme $xy$ a la place de $x\times y$
$\checkmark$ Le symétrique de $x \in A$ pour l'addition (opposé de $x$) est noté $-x$.
$\checkmark$ Le symétrique de $x \in A$ pour la multiplication (inverse de $x$), s'il existe, est noté $x^{-1}$.

Soit $(A; +; \times)$ un anneau unitaire. Soient $x \in A$ et $n \in \mathbb{Z}$. On peut définir le symbole $nx$ dans $A$ par :

$$nx = \underbrace{x + x + \dots + x}_{n \text{ fois}} \text{ si } n \ge 1 \quad ; \quad nx = \underbrace{(-x) + (-x) + \dots + (-x)}_{-n \text{ fois}} \text{ si } n \le -1 \quad ; \quad 0x = 0_A$$

De même, on peut définir le symbole $x^n$ dans $A$ par :

$$x^n = \underbrace{x \times x \times \dots \times x}_{n \text{ fois}} \text{ si } n \ge 1 \quad ; \quad x^n = \underbrace{x^{-1} \times \dots \times x^{-1}}_{-n \text{ fois}} \text{ si } x \text{ est inversible et } n \le -1 \quad ; \quad x^0 = 1_A$$

Ces notations sont très utiles dans les calculs numériques (réels et complexes) et matriciels.

> **Exemples.**
1) $(\mathbb{Z}; + ; \times), (\mathbb{Q}; + ; \times), (\mathbb{R}; + ; \times)$ et $(\mathbb{C}; + ; \times)$ sont des anneaux commutatif unitaires, mais $(\mathbb{N}; + ; \times)$ n'est pas un anneau car $(\mathbb{N}; + )$ n'est pas un groupe.
2) Pour $n\in \mathbb{N}^*$ $(\mathbb{Z} / n\mathbb{Z}; + ;\times)$ est un anneau commutatif unitaire. Son zero est $\overline{0}$ , et son element unité est $\overline{1}$
3) $(\mathbb{M}_2(\mathbb{R}); + ;\times)$ et $(\mathbb{M}_3(\mathbb{R}); + ;\times)$ sont des anneaux unitaires non commutatif. L'lement unité pour

$$(\mathbb{M}_2(\mathbb{R}); +; \times) \text{ est } I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \text{ et l'élément unité pour l'anneau } (\mathbb{M}_3(\mathbb{R}); +; \times) \text{ est } I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

4) $(\mathcal{F}(\mathbb{R};\mathbb{R}); + ;\times)$ est un anneau commutatif unitaire. Son élément unité est la fonction $u:x\mapsto 1$
5) $(\mathcal{P}(E); \Delta; \cap)$ est un anneau commutatif unitaire. Son élément unité est $E$. Par contre, $(\mathcal{P}(E); \Delta; \cap)$ n'est pas un anneau, car on n'a pas en général: $(A \cup B) \Delta(A \cup C) = A \Delta(B \cup C)$

> **Applications.**
1. On considère l'ensemble : $$A = \{a + b\sqrt{2} / (a; b) \in \mathbb{Z}\}$$

a) Montrer que pour tout $(a; b) \in \mathbb{Z}^2$: $a + b\sqrt{2} = 0 \Leftrightarrow a = b = 0$
b) Montrer que $(A; + ; \times)$ est un anneau commutatif unitaire.

2. On considère l'ensemble : $$\mathbb{K} = \left\{ \begin{pmatrix} \alpha & \beta \\ -3\beta & \alpha \end{pmatrix} / (\alpha; \beta) \in \mathbb{R}^2 \right\}$$

Montrer que $$(\mathbb{K}; +; \times)$$ est un anneau commutatif unitaire.

#### 2.3. Règles de calcul dans un anneau
> **Proposition 5.**
Soit $$(A; +; \cdot)$$ un anneau unitaire. On a les propriétés suivantes :

1) Pour tout $ x \in A: 0_A \cdot x = x \cdot 0_A = 0_A $.
2) Pour tout $ x \in A: (-1_A) \cdot x = x \cdot (-1_A) = -x $.
3) Pour tout $(x; y) \in A^2: (-x) \cdot y = x \cdot (-y) = -(x \cdot y)$.
4) Pour tout $(x; y) \in A^2: (-x) \cdot (-y) = x \cdot y$.

> **Preuve.**
1) De l'égalité $$x + 0_A = x$$, on déduit successivement :

$$x + 0_A = x \Rightarrow x \cdot (x + 0_A) = x^2 \Rightarrow x^2 + x \cdot 0_A = x^2 \Rightarrow x \cdot 0_A = 0_A$$

$$x + 0_A = x \Rightarrow (x + 0_A) \cdot x = x^2 \Rightarrow x^2 + 0_A \cdot x = x^2 \Rightarrow 0_A \cdot x = 0_A$$

2) De l'égalité $$1_A + (-1_A) = 0_A$$, on déduit que pour tout $$x \in A : (1_A + (-1_A)) \cdot x = 0_A \cdot x = 0_A$$, il s'ensuit donc $$1_A \cdot x + (-1_A) \cdot x = 0_A$$, c'est-à-dire $$x + (-1_A) \cdot x = 0_A$$. Par conséquent : $$(-1_A) \cdot x = -x$$. On montre de même : $$x \cdot (-1_A) = -x$$.

3) On a pour tout $$(x; y) \in A^2$$ :

$$x + (-x) = 0_A \Rightarrow (x + (-x)) \cdot y = 0_A \cdot y \Rightarrow x \cdot y + (-x) \cdot y = 0_A \Rightarrow (-x) \cdot y = -(x \cdot y)$$

On montre de même l'égalité : $$x \cdot (-y) = -(x \cdot y)$$

4) On a pour tout $$(x; y) \in A^2$$ :

$$x + (-x) = 0_A \Rightarrow (x + (-x)) \cdot (-y) = 0_A \cdot y \Rightarrow -x \cdot y + (-x) \cdot (-y) = 0_A \Rightarrow (-x) \cdot (-y) = x \cdot y$$

> **Remarques.**
• En appliquant les règles de calcul citées dans la proposition 5 dans l'anneau (ℝ; +; ×), on obtient :

$$0 \times x = x \times 0 = 0 \quad ; \quad x \times (-y) = (-x) \times y = -(x \times y)$$

$$(-1) \times x = x \times (-1) = -x \quad ; \quad (-x) \times (-y) = x \times y$$

• Attention, il ne faut pas déduire trop hâtivement de la première propriété qu'un produit n'est nul que lorsqu'un des deux éléments multipliés est nul. Par exemple, dans l'anneau (ℳ₂(ℝ); +; ×) :

$$\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \times \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} \text{ malgré que les deux matrices } \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \text{ et } \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} \text{ ne sont pas nulles}$$

• Il peut arriver que l'on rencontre, dans la littérature, une autre définition de la notion d'anneau dans laquelle on suppose la seconde loi admit un élément neutre. D'ailleurs, tous les anneaux envisagés dans cet ouvrage ou même dans les programmes du BAC+2 (LICENCE & CLASSES PRÉPAS) seront unitaires. Les anneaux non unitaires n'ont pas en général d'intérêt pratique car on peut toujours injecter un anneau non unitaire dans un anneau unitaire.

#### 2.4. Diviseurs de zéro et anneaux intègres
> **Définition 5.**
Soit (A; +; •) un anneau et a ∈ A - {0_A}.

On dit que a est un diviseur de zéro dans l'anneau A s'il existe b ∈ A - {0_A} tel que :

$$a \cdot b = 0_A \quad \text{ou} \quad b \cdot a = 0_A$$

> **Exemples.**
1) Dans l'anneau ℤ/6ℤ, l'élément 2̄ est un diviseur de zéro car : 2̄ ≠ 0̄ et 2̄ × 3̄ = 3̄ × 2̄ = 0̄.

De même, 3̄ est un diviseur de zéro dans cet anneau.

2) Dans l'anneau (ℳ₂(ℝ); +; ×), l'élément (1 0; 2 0) est un diviseur de zéro car :

$$\begin{pmatrix} 1 & 0 \\ 2 & 0 \end{pmatrix} \neq O_2 \quad \text{et} \quad \begin{pmatrix} 1 & 0 \\ 2 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} = O_2$$

3) Dans l'anneau (∅(ℝ; ℝ); +; ×), on considère les fonctions suivantes :

$$f : x \mapsto \begin{cases} \frac{1}{x^2 + 1} & \text{si } x \ge 0 \\ 0 & \text{si } x < 0 \end{cases} \quad \text{et} \quad g : x \mapsto \begin{cases} 0 & \text{si } x \ge 0 \\ x^3 & \text{si } x < 0 \end{cases}$$

On a f ≠ θ et g ≠ θ où θ est la fonction nulle (zéro de l'anneau ∅(ℝ; ℝ)), mais f × g = θ.

Il s'ensuit donc que les fonctions f et g sont des diviseurs de zéro dans l'anneau (∅(ℝ; ℝ); +; ×).

> **Définition 6.**
On dit qu'un anneau $$(A; +; \cdot)$$ est intègre s'il n'est pas réduit à zéro et n'admet aucun diviseur de zéro.
Autrement dit : $$[(A; +; \cdot)$$ est intègre $$] \Leftrightarrow [( \forall (a; b) \in A^2 ) \ ab = 0_A \Rightarrow (a = 0_A \text{ ou } b = 0_A )]$$

> **Exemples.**
1) $(\mathbb{Z}; + ; \times), (\mathbb{Q}; + ; \times), (\mathbb{R}; + ; \times)$ et $(\mathbb{C}; + ; \times)$ sont des anneaux intègres.
2) Les anneaux $(\mathbb{M}_2(\mathbb{R}); + ;\times),(\mathbb{M}_3(\mathbb{R}); + ;\times),(\mathcal{F}(\mathbb{R};\mathbb{R}); + ;\times)$ et $(\mathbb{Z} / 6\mathbb{Z}; + ;\times)$ ne sont pas intègre.

> **Applications.**
1. Montrer que l'anneau $(\mathbb{Z} / 5\mathbb{Z}; + ;\times)$ est intègre.
2. On considère l'ensemble $A = \{x + y\sqrt{7} / (x;y)\in \mathbb{Z}^2\}$ . Montrer que I'anneau $(A; + ;\times)$ est intègre.
3. Dans l'ensemble $A = \mathbb{Q} \times \mathbb{Z}$, on définit les deux lois de composition interne par:

Pour tous $$(x; y)$$ et $$(x'; y')$$ de $$A : (x; y) + (x'; y') = (x + x'; y + y')$$ et $$(x; y) \times (x'; y') = (xx'; yy')$$

a) Montrer que $(A; + ; \times)$ est un anneau commutatif.
b) Déterminer les diviseurs de zéro dans l'anneau $(A; +; \times)$. L'anneau $(A; +; \times)$ est-il intéig?

> **Proposition 6.**
Soit $$(A; +; \cdot)$$ un anneau unitaire et $$a \in A$$.

Si $$a$$ est inversible dans $$(A; \cdot)$$ alors $$a$$ n'est pas un diviseur de zéro dans l'anneau $$(A; +; \cdot)$$.

> **Preuve.**
Supposons que $$a$$ est inversible dans $$(A; \cdot)$$. On note $$a^{-1}$$ sont inverse. On a donc pour tout $$b \in A$$ :

$$a \cdot b = 0_A \Rightarrow a^{-1} \cdot (a \cdot b) = a^{-1} \cdot 0_A \Rightarrow (a^{-1} \cdot a) \cdot b = 0_A \Rightarrow 1_A \cdot b = 0_A \Rightarrow b = 0_A$$

On montre de même que $$b \cdot a = 0_A \Rightarrow b = 0_A$$. Ainsi, $$a$$ n'est pas un diviseur de zéro dans $$(A; +; \cdot)$$. Signalons au passage que la réciproque est fausse en général. Par exemple, dans l'anneau $$(\mathbb{Z}; +; \times)$$, l'élément 2 n'est pas un diviseur de zéro et n'est pas inversible dans $$(\mathbb{Z}; \times)$$.

> **Remarque.**
Soit $$M = \begin{pmatrix} a & c \\ b & d \end{pmatrix}$$ une matrice de $$(\mathbb{M}_2(\mathbb{R}); +; \times)$$. On rappelle que : $$\det M = \begin{vmatrix} a & c \\ b & d \end{vmatrix} = ad - bc$$

La matrice $$M$$ est inversible dans $$(\mathbb{M}_2(\mathbb{R}); +; \times)$$ si, et seulement si, son déterminant est non nul.

Si $$\det M \neq 0$$ alors la matrice inverse de $$M$$ est donnée par la formule : $$M^{-1} = \frac{1}{\det M} \begin{pmatrix} d & -c \\ -b & a \end{pmatrix}$$

### 3. Corps
Certains anneaux jouissent propriétés supplémentaires qui les rendent plus aisés à manier. Les règles de calculs et les réflexes acquis depuis longtemps dans $\mathbb{R}$ ou $\mathbb{C}$ y sont encore valables.

> **Définition 7.**
On appelle corps tout anneau unitaire $(K; +; \cdot)$ non réduit à $\{0_k\}$ tel que tout élément autre que $0_k$ est inversible pour la loi $\cdot$.

Un corps est dit commutatif si sa multiplication $\cdot$ est commutative.

> **Exemples.**
1) $(\mathbb{Q}; +; \times)$, $(\mathbb{R}; +; \times)$ et $(\mathbb{C}; +; \times)$ sont des corps commutatif, mais $(\mathbb{Z}; +; \times)$ n'est pas un corps car l'élément 2 n'a pas d'inverse pour la loi $\times$ dans $\mathbb{Z}$.

2) Si $p$ est un nombre premier, alors $(\mathbb{Z}/p\mathbb{Z}; +; \times)$ est un corps commutatif. C'est une conséquence du théorème 17 du cours d'arithmétique et du fait que $(\mathbb{Z}/p\mathbb{Z}; +; \times)$ est un anneau commutatif.

3) $(\mathbb{M}_2(\mathbb{R}); +; \times)$ n'est pas un corps car la matrice $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ n'a pas d'inverse pour la loi $\times$ dans $\mathbb{M}_2(\mathbb{R})$.

4) $(\mathbb{Z}/6\mathbb{Z}; +; \times)$ n'est pas un corps.

5) On considère l'ensemble : $K = \{a + b\sqrt{5} \mid (a; b) \in \mathbb{Q}^2\}$. Montrons que $(K; +; \times)$ est un corps commutatif : Tout d'abord, $(K; +; \times)$ est un anneau commutatif unitaire (À vérifier). Soit maintenant $x \in K - \{0\}$.

Il existe $(a; b) \in \mathbb{Q}^2 - \{(0; 0)\}$ tel que $x = a + b\sqrt{5}$. Puisque $x \neq 0$ alors il admet un inverse dans $\mathbb{R}$ qui

est : $x^{-1} = \frac{1}{a + b\sqrt{5}} = \frac{a - b\sqrt{5}}{a^2 - 5b^2} = \frac{a}{a^2 - 5b^2} - \frac{b}{a^2 - 5b^2}\sqrt{5}$ (remarquer bien que $a \neq b\sqrt{5}$ car $\sqrt{5} \notin \mathbb{Q}$)

Puisque $(a; b) \in \mathbb{Q}^2 - \{(0; 0)\}$ alors $\left(\frac{a}{a^2 - 5b^2}; \frac{-b}{a^2 - 5b^2}\right) \in \mathbb{Q}$, ce qui montre que $x^{-1} \in \mathbb{Q}$.

En résumé, $(K; +; \times)$ est un corps commutatif.

> **Remarques.**
- Il peut arriver que l'on rencontre, dans la littérature, une autre définition de la notion de corps dans laquelle on suppose la commutativité de la multiplication $\cdot$. D'ailleurs, tous les corps envisagés dans cet ouvrage ou même dans les programmes du BAC+2 (LICENCE & CLASSES PRÉPAS) seront commutatif. Les corps non commutatif n'ont pas en général d'intérêt pratique.

- D'après la proposition 6, l'intégrité est une condition nécessaire, mais insuffisant, pour qu'un anneau soit un corps. Ainsi, $(\mathbb{Z}/6\mathbb{Z}; +; \times)$ n'est pas un corps car il n'est pas un anneau intègre.

> **Proposition 7.**
Soit $(K; +; \cdot)$ un ensemble muni de deux lois de composition interne + et $\cdot$.

Pour que $(K; +; \cdot)$ soit un corps, il faut et il suffit que les trois axiomes suivants soient vérifiés :

(1) $(K; + )$ est un groupe commutatif.
(2) $\left(K - \{0_{K}\} ;\cdot\right)$ est un groupe.
(3) La loi est distributive par rapport à la loi +.

> **Applications.**
1. Dans l'ensemble $\mathbb{R}^2$, on définit les deux lois de compositions interne $\oplus$ et $\otimes$ par :

$$(a; b) \oplus (a'; b') = (a + a'; b + b') \quad \text{et} \quad (a; b) \otimes (a'; b') = (aa' - bb'; ab' + ba')$$

Montrer que $(\mathbb{R}^2; \oplus; \otimes)$ est un corps commutatif.

2. On considère l'ensemble : $A = \left\{ \begin{pmatrix} a & b \\ -5b & a + 2b \end{pmatrix} / (a; b) \in \mathbb{R}^2 \right\}$

Montrer que $(A; +; \times)$ est un corps commutatif.

3. On munit l'ensemble $\mathbb{C}$ de deux lois de compositions interne T et * comme suit :

$$z_1 T z_2 = z + z' - i \quad \text{et} \quad z_1 * z_2 = izz' + z + z'$$

Montrer que $(\mathbb{C}; T; *)$ est un corps commutatif.

4. On muni l'ensemble $K = \{0; 1\}$ des lois + et $\times$ définies par les tables suivantes :

|  + | 0 | 1  |
| --- | --- | --- |
|  0 | 0 | 1  |
|  1 | 1 | 0  |

|  × | 0 | 1  |
| --- | --- | --- |
|  0 | 0 | 0  |
|  1 | 0 | 1  |

Vérifier que $(K; +; \times)$ est un corps dans lequel chaque élément est son propre symétrique pour l'addition.

> **Proposition 8.**
Soit $(K; +; \cdot)$ un corps. On a alors les propriétés suivantes :

1) Tout élément $a$ de $K - \{0_K\}$ est régulier pour l'opération $\cdot$ :

Pour tout $(x; y) \in K^2$ : $a \cdot x = a \cdot y \Rightarrow x = y$ et $x \cdot a = y \cdot a \Rightarrow x = y$

2) $(K; + ; \cdot)$ est un anneau intégre: $\left(\forall (x; y) \in K^{2}\right)$ $\left[x \cdot y = 0_{K} \Rightarrow \left(x = 0_{K} \text{ ou } y = 0_{K}\right)\right]$
3) Pour tous $a \in K - \{0_K\}$ et $b \in K$, on a:

$$a \cdot x = b \Leftrightarrow x = a^{-1} \cdot b \quad \text{et} \quad x \cdot a = b \Leftrightarrow x = b \cdot a^{-1}$$

Voici enfin un récapitulatif des règles de calcul dans un corps commutatif $(K; +; \cdot)$ vues dans ce paragraphe :

1) Associativité de + : pour tout $(a; b; c) \in K^3$, $(a + b) + c = a + (b + c)$.
2) Commutativité de +: pour tout $(a; b) \in K^2$, $a + b = b + a$.
3) Pour tout $a \in K$, $a + 0_K = a$ et $a + (-a) = 0_K$.
4) Associativité de $\cdot$: pour tout $(a; b; c) \in K^3$, $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
5) Commutativité de $\cdot$: pour tout $(a; b) \in K^2$, $a \cdot b = b \cdot a$.
6) Pour tout $a \in K$, $1_K \cdot a = a$.
7) Pour tout $a \in K - \{0_K\}$, $a \cdot a^{-1} = 1_K$.
8) Pour tout $a \in K$, $0_K \cdot a = 0_K$.
9) Distributivité de la loi $\cdot$ par rapport à la loi $+$ : pour tout $(a; b; c) \in K^3$, $a \cdot (b + c) = a \cdot b + a \cdot c$.
10) Pour tout $(a; b) \in K^2$, $(-a) \cdot b = -(a \cdot b) = a \cdot (-b)$ et $(-a) \cdot (-b) = a \cdot b$.
11) Régularité de +: pour tout $(a; b; c) \in K^3$, $a + b = a + c \Rightarrow b = c$.
12) Pour tout $(a; b) \in K^2$, la différence $a - b$ est définie, elle vaut $a + (-b)$.
13) Intégrité: pour tout $(a; b) \in K^2$: $a \cdot b = 0_K \Rightarrow (a = 0_K \text{ ou } b = 0_K)$
14) Régularité de $\cdot$: pour tous $a \in K - \{0_K\}$ et $(b; c) \in K^2$, $a \cdot b = a \cdot c \Rightarrow b = c$.
15) Pour tous $a \in K - \{0_K\}$ et $b \in K$, $a \cdot x = b \Leftrightarrow x = a^{-1} \cdot b$.

> **Remarque.**
• Soit $(A; \oplus; \otimes)$ un anneau unitaire d'élément unité $1_A$, et soit $K$ une partie de $A$, stable pour les lois $\oplus$ et $\otimes$ dans $A$.

On peut avoir $(K; \oplus; \otimes)$ un corps commutatif d'élément unité $1_K$ différent de $1_A$. À titre d'exemple,

considérons : $A = \mathbb{M}_2(\mathbb{R})$ et $K = \left\{\begin{pmatrix} x & x \\ x & x \end{pmatrix} / x \in \mathbb{R}\right\}$

$(K; +; \times)$ est un corps commutatif. Son zéro est $O_2 = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ et son élément unité est $J = \begin{pmatrix} \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & \frac{1}{2} \end{pmatrix}$. Par contre, l'élément unité de $(A; +; \times)$ est la matrice identité $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.

L'inverse de $M = \begin{pmatrix} x & x \\ x & x \end{pmatrix}$ (pour $x \neq 0$) est la matrice : $M^{-1} = \begin{pmatrix} \frac{1}{4x} & \frac{1}{4x} \\ \frac{1}{4x} & \frac{1}{4x} \end{pmatrix} = \frac{1}{4x} \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$

## Méthodes

### A. Des exemples de groupes
Les parties A et B sont indépendantes.

Partie A:

En relativité restreinte, la loi de composition des vitesses est donnée par la formule :

$$v_1 * v_2 = \frac{v_1 + v_2}{1 + \frac{v_1 \cdot v_2}{c^2}}$$ où $c \in \mathbb{R}^*$ désigne la vitesse de la lumière.

1) Montrer que $ ] - c; c[ $ est stable pour la loi $ * $.
2) Montrer que $(\cdot - c; c[; *)$ est un groupe commutatif.

Partie B:

Pour $(a; b) \in \mathbb{C}^* \times \mathbb{C}$, on définit l'application $f_{(a;b)}$ définie de $\mathbb{C}$ dans $\mathbb{C}$ par : $f_{(a;b)}(z) = az + b$, et on pose : $G = \{f_{(a;b)} / (a; b) \in \mathbb{C}^* \times \mathbb{C}\}$

Montrer que la composition des applications est une loi de composition interne sur $G$ et que $(G; a)$ est un groupe.

> **Solution.**
Partie A:

1) Soit $(u; v) \in (]-c; c[)^2$ et $w = u * v$. On a :

$$\begin{array}{l} c - w = c - \frac{u + v}{1 + \frac{uv}{c^2}} = c - \frac{c^2(u + v)}{c^2 + uv} = c \left(1 - \frac{cu + cv}{c^2 + uv}\right) = c \left(\frac{c^2 + uv - cu - cv}{c^2 + uv}\right) = \frac{c(c - u)(c - v)}{c^2 + uv} \\ w + c = c + \frac{u + v}{1 + \frac{uv}{c^2}} = c + \frac{c^2(u + v)}{c^2 + uv} = c \left(1 + \frac{cu + cv}{c^2 + uv}\right) = c \left(\frac{c^2 + uv + cu + cv}{c^2 + uv}\right) = \frac{c(c + u)(c + v)}{c^2 + uv} \end{array}$$

Puisque $-c < u < c$ et $-c < v < c$, alors $\frac{c(c - u)(c - v)}{c^2 + uv} > 0$ et $\frac{c(c + u)(c + v)}{c^2 + uv} > 0$ ; Il s'ensuit donc que $-c < w < c$. Par suite, l'ensemble $]-c; c[$ est stable pour la loi $*$.

2) La question précédente montre que $*$ est une loi de composition interne sur $]-c; c[$. On vérifie maintenant les trois points de la définition d'un groupe :

- Commutativité : On a pour tout $(u; v) \in (]-c; c[)^2$ : $u * v = \frac{u + v}{1 + \frac{uv}{c^2}} = \frac{v + u}{1 + \frac{vu}{c^2}} = v * u$
Ainsi, la loi $*$ est commutative.

- Associativité : Soit $(u; v; w) \in (]-c; c[)^3$. On calcule :

$$u * (v * w) = v * \frac{v + w}{1 + \frac{vw}{c^2}} = \frac{u + \frac{v + w}{1 + \frac{vw}{c^2}}}{1 + \frac{u}{c^2} \times \frac{v + w}{1 + \frac{vw}{c^2}}} = \frac{\left(1 + \frac{vw}{c^2}\right)u + v + w}{1 + \frac{vw}{c^2} + \frac{u(v + w)}{c^2}} = \frac{c^2u + uvw + c^2v + c^2w}{c^2 + vw + uv + uw}$$

$$(u * v) * w = \frac{u + v}{1 + \frac{uv}{c^2}} * w = \frac{\frac{u + v}{1 + \frac{uv}{c^2}} + w}{1 + \frac{u + v}{1 + \frac{uv}{c^2}} \times \frac{w}{c^2}} = \frac{u + v + \left(1 + \frac{uv}{c^2}\right)w}{1 + \frac{uv}{c^2} + \frac{(u + v)w}{c^2}} = \frac{c^2u + uvw + c^2v + c^2w}{c^2 + vw + uv + uw}$$

Donc $(u * v) * w = u * (v * w)$. Ainsi, la loi * est associative.

- Élément neutre: On a pour tout $u \in ]-c; c[$, $u * 0 = 0 * u = u$. Donc * admet 0 comme élément neutre.
- Inverse: Soit $u \in ]-c; c[$. Posons $v = -u \in ]-c; c[$. Alors: $u * v = v * u = \frac{u - u}{1 - \frac{u^2}{c^2}} = 0$.

Donc tout élément admet un inverse pour la loi *. En conclusion, $(]-c; c[; *)$ est un groupe commutatif.

Partie B:
Montrons que $(G; o)$ est un groupe :

- On a $G \neq \emptyset$ car $f_{(1;0)} = Id_{\mathbb{C}} \in G$ ($Id_{\mathbb{C}}$ étant l'application identique définie sur $\mathbb{C}$ par $Id_{\mathbb{C}}(z) = z$).
- On a $o$ est une loi de composition interne dans $G$. En effet, pour tous $(a; b)$ et $(a'; b')$ de $\mathbb{C}^* \times \mathbb{C}$ et pour tout $z \in \mathbb{C}$: $f_{(a; b)} \circ f_{(a'; b')} (z) = a f_{(a'; b')} (z) + b = a (a' z + b') + b = aa' z + ab' + b = f_{(aa'; ab' + b)} (z)$

Par conséquent, $f_{(a; b)} \circ f_{(a'; b')} = f_{(aa'; ab' + b)}$ et cette application est bien un élément de $G$.

- En notant $\mathcal{F}$ l'ensemble de toutes les applications de $\mathbb{C}$ dans $\mathbb{C}$, le sous-ensemble $G$ de $\mathcal{F}$ est stable dans $(\mathcal{F}; o)$. Comme la loi de composition est associative dans $\mathcal{F}$, alors elle en est de même dans $G$.
- On a pour tout $ f \in G $: $ f \circ Id_{\mathbb{C}} = Id_{\mathbb{C}} \circ f = f $. Ainsi, $ Id_{\mathbb{C}} $ est l'élement neutre dans $ (G; o) $.
- Enfin, on a pour tout $(z; z') \in \mathbb{C}^2$: $f_{(a; b)}(z) = z' \Leftrightarrow z = \frac{z' - b}{a} \Leftrightarrow z = f_{\left(\frac{1}{a}; -\frac{b}{a}\right)}(z')$

On en déduit que tout élément $f_{(a; b)} \in G$ est symétrisable dans $(G; o)$ et son symétrique est :

$$\left(f_{(a; b)}\right)^{-1} = f_{\left(\frac{1}{a}; -\frac{b}{a}\right)} \in G$$. Par suite, $(G; o)$ a une structure de groupe.

Lorsqu'on doit montrer que $(G; *)$ est un groupe, on commence par se regarder si la loi * est la même que celle d'un exemple usuel $(H; *)$ avec $G \subset H$. Dans ce cas, on montre que $G$ est un sous-groupe de $H$. Sinon, on vérifie point par point la définition d'un groupe.

### B. Exemples de calcul dans un groupe et dans un anneau
Les parties A et B sont indépendantes.

Partie A :

Soit $ (G; \cdot) $ un groupe d'élément neutre e.

1) Montrer que si pour tout $ (x; y) \in G^2 : (x \cdot y) \cdot (x \cdot y) = (x \cdot x) \cdot (y \cdot y) $ alors la loi • est commutative dans $ G $.

2) Montrer que si pour tout $ x \in G $, $ x \cdot x = e $, alors la loi • est commutative dans $ G $. Partie B :

Soi $ (A; *; T) $ un anneau d'élément neutre e tel que : $ (\forall x \in A) x T x = x $.

1) a) Montrer que pour tous x et y de A :  $ (x*y)\mathrm{T}(x*y)=(x\mathrm{T}y)*(y\mathrm{T}x)*(x*y) $
b) En déduire que pour tous $ x $ et $ y $ de $ A: (yTx)' = xTy $ ($ x' $ est le symétrique de $ x $ dans $ (A;*) $).
c) En déduire que pour tout $ x \in A : x' = x $.
d) En déduire que la loi T est commutative dans A.

2) Montrer que pour tout $ (x; y) \in A^{2} : (x \top y) \top (x * y) = e $

> **Solution.**
**Partie A :**
1) Soit $ (x; y) \in G^{2} $. On a $ (x \cdot y) \cdot (x \cdot y) = (x \cdot x) \cdot (y \cdot y) $, donc $ x \cdot (y \cdot x) \cdot y = x \cdot (x \cdot y) \cdot y $ car la loi • est associative dans $ G $; et comme $ (G; \cdot) $ un groupe alors tout élément de $ G $ est régulier; il s'ensuit donc $ (y \cdot x) \cdot y = (x \cdot y) \cdot y $ car $ x $ est régulier puis $ y \cdot x = x \cdot y $ car $ y $ est régulier.

Par suite, pour tout $(x; y) \in G^2$, $y \cdot x = x \cdot y$, c'est-à-dire que la loi • est commutative dans $G$.

2) On a pour tout $ x \in G $, $ x \cdot x = e $; donc pour tout $ (x; y) \in G^2 $, $ (x \cdot y) \cdot (x \cdot y) = e $, c'est-à-dire que $ x \cdot (y \cdot x) \cdot y = e $; il s'ensuit donc les implications suivantes:

\[
x \cdot (y \cdot x) \cdot y = e \Rightarrow x \cdot (x \cdot (y \cdot x) \cdot y) \cdot y = x \cdot y \Rightarrow (x \cdot x) \cdot (y \cdot x) \cdot (y \cdot y) = x \cdot y \Rightarrow e \cdot (y \cdot x) \cdot e = x \cdot y
\]

Par suite, pour tout $ (x; y) \in G^{2} $, $ y \cdot x = x \cdot y $, c'est-à-dire que la loi • est commutative dans $ G $.

1) a) Pour tout $(x; y) \in A^2$, on pose: $z = (x \top y) * (y \top x) * (x * y)$. On a:

$ z = (x \top y) * (y \top x) * ((x \top x) * (y \top y)) $ car $ x \top x = x $ et $ y \top y = y $; et comme la loi * est commutative et associative dans $ A $ alors: $ z = ((x \top y) * (x \top x)) * ((y \top x) * (y \top y)) $. La distributivité de la loi $ T $ par rapport à la loi * donne: $ z = (x \top (y * x)) * (y \top (x * y)) = (x \top (x * y)) * (y \top (x * y)) = (x * y) \top (x * y) $. Ainsi: $ (\forall (x; y) \in A^2) \quad (x * y) \top (x * y) = (x \top y) * (y \top x) * (x * y) $

b) Soit $(x; y) \in A^2$. Pour montrer que $(y \top x)' = x \top y$, il suffit de montrer que $(y \top x) * (x \top y) = e$. D'après le résultat de la question précédente, on a: $(x * y) \top (x * y) = (x \top y) * (y \top x) * (x * y)$, donc $(x \top y) * (y \top x) * (x * y) = x * y$ car pour tout $z \in A$, $z \top z = z$. Comme $(A; *)$ est un groupe commutatif, alors tout élément de $A$ est régulier; en particulier $x * y$ est régulier, d'où: $(x \top y) * (y \top x) = e$. La commutativité de la loi * dans $A$ donne: $(\forall (x; y) \in A^2) (y \top x)' = x \top y$

c) Soit $ x \in A $. D'après le résultat de la question précédente, $ (x \top x)' = x \top x $; et comme $ x \top x = x $ alors $ x' = x $.
d) On a pour tout $ (x; y) \in A^2 : (y \top x)' = x \top y $ et $ (y \top x)' = y \top x $ (d'après 1) b et c). Il s'ensuit donc que $ x \top y = y \top x $. Ainsi, la loi T est commutative dans $ A $.

2) Montrons que pour tout $(x; y) \in A^2 : (x \top y) \top (x * y) = e$

Pour tout $(x; y) \in A^2$, on pose: $z = (x \top y) \top (x * y)$. Puisque la loi $\top$ est associative et distributive par rapport à la loi $*$, alors:

\[
z = x \top (y \top (x * y)) = x \top ((y \top x) * (y \top y)) = x \top ((y \top x) * y) = (x \top (y \top x)) * (x \top y) \quad (\text { car } y \top y = y)
\]

Il en résulte de l'égalité $(y\top x)' = x\top y$ et la commutativité de la loi T que :

\[
z = \left(\left(x \top x\right) \top y\right) * (x \top y) = \left(x \top y\right) ^ {\prime} * (x \top y) = e. \text {   Ainsi:   } \left(\forall (x; y) \in A ^ {2}\right) (x \top y) \top (x * y) = e
\]

### C. Étude d'une loi, sous-groupe et morphisme
On définit sur $\mathbb{R}^2$ une loi de composition interne $\top$ comme suit :

Pour tous $(a; b)$ et $(a'; b')$ de $\mathbb{R}^2: (a; b)\top (a'; b') = \left(\frac{1}{3}ab' + \frac{1}{3}ba'; \frac{1}{3}bb' - \frac{3}{4}aa'\right)$

1) Étudier les propriétés de la loi T (commutativité, associativité, existence d'élément neutre).
2) a) Déterminer G l'ensemble des éléments symétrisables dans  $ \left(\mathbb{R}^{2};\mathbb{T}\right) $ .

b) Montrer que G est une partie stable de  $ \left(\mathbb{R}^{2};\top\right) $ .

c) Montrer que $(G; \top)$ est un groupe commutatif.

3) On considère l'application $f$ définie de $\mathbb{C}^*$ dans $G$ par :

\[
\text { Pour   tout } (a; b) \in \mathbb {R} ^ {2} - \{(0; 0) \}: f (a + i b) = (2 b; 3 a)
\]

a) Montrer que $ f $ est un isomorphisme de $ (\mathbb{C}^*; \times) $ dans $ (G; \top) $.
b) Retrouver le résultat de la question 2) c).
c) Pour tout $n \in \mathbb{N}^*$, on pose: $Z_n = \underbrace{\left(\sqrt{3}; \frac{3}{2}\right) \top \left(\sqrt{3}; \frac{3}{2}\right) \top \ldots \top \left(\sqrt{3}; \frac{3}{2}\right)}_{n \text{ fois}}$

Montrer que pour tout $n \in \mathbb{N}^*$: $Z_n = \left(2\sin \frac{n\pi}{3}; 3\cos \frac{n\pi}{3}\right)$

4) On considère l'ensemble : $S = \{(2 \sin x; 3 \cos x) / x \in \mathbb{R}\}$

a) Montrer que $(S;T)$ est un sous-groupe de $(G;T)$.
b) Résoudre dans R l'équation suivante: $(2\sin x;3\cos x)\mathrm{T}(2;0) = (0;3)$

> **Solution.**
1) Étudions les propriétés de la loi T :

• La commutativité : On a pour tous $(a; b)$ et $(a'; b')$ de $\mathbb{R}^2$,

$$(a; b) \mathrm{T}(a'; b') = \left(\frac{1}{3}ab' + \frac{1}{3}ba'; \frac{1}{3}bb' - \frac{3}{4}aa'\right) = \left(\frac{1}{3}a'b + \frac{1}{3}b'a; \frac{1}{3}b'b - \frac{3}{4}a'a\right) = (a'; b') \mathrm{T}(a; b)$$

Donc la loi T est commutative.

• L'associativité : On a pour tous $(a; b), (a'; b')$ et $(a''; b'')$ de $\mathbb{R}^2$,

$$\begin{array}{l} ((a; b) \mathrm{T}(a'; b')) \mathrm{T}(a''; b'') = \left(\frac{1}{3}ab' + \frac{1}{3}ba'; \frac{1}{3}bb' - \frac{3}{4}aa'\right) \mathrm{T}(a''; b'') \\ = \left(\frac{1}{9}ab'b'' + \frac{1}{9}ba'b'' + \frac{1}{9}bb'a'' - \frac{1}{4}aa'a''; \frac{1}{9}bb'b'' - \frac{1}{4}aa'b'' - \frac{1}{4}ab'a'' - \frac{1}{4}ba'a''\right) \end{array}$$

$$\begin{array}{l} (a; b) \mathrm{T}((a'; b') \mathrm{T}(a''; b'')) = (a; b) \mathrm{T} \left(\frac{1}{3}a'b'' + \frac{1}{3}b'a''; \frac{1}{3}b'b'' - \frac{3}{4}a'a''\right) \\ = \left(\frac{1}{9}ab'b'' - \frac{1}{4}aa'a'' + \frac{1}{9}ba'b'' + \frac{1}{9}bb'a''; \frac{1}{9}bb'b'' - \frac{1}{4}aa'b'' - \frac{1}{4}ba'a'' - \frac{1}{4}ab'a''\right) \end{array}$$

D'où : $((a; b) \mathrm{T}(a'; b')) \mathrm{T}(a''; b'') = (a; b) \mathrm{T}((a'; b') \mathrm{T}(a''; b''))$. Donc la loi T est associative

• Existence d'élément neutre : Cherchons $(e_1; e_2) \in \mathbb{R}^2$ tel que : $(\forall (a; b) \in \mathbb{R}^2) (a; b) \mathrm{T}(e_1; e_2) = (a; b)$
On a pour tout $(a; b) \in \mathbb{R}^2$ :

$$(a; b) \mathrm{T}(e_1; e_2) = (a; b) \Leftrightarrow \left(\frac{1}{3}ae_2 + \frac{1}{3}be_1; \frac{1}{3}be_2 - \frac{3}{4}ae_1\right) = (a; b) \Leftrightarrow \begin{cases} \frac{1}{3}ae_2 + \frac{1}{3}be_1 = a \\ \frac{1}{3}be_2 - \frac{3}{4}ae_1 = b \end{cases}$$

Pour que ce dernier système soit valable pour tout $(a; b) \in \mathbb{R}$, il faut et il suffit : $(e_1; e_2) = (0; 3)$.

On a donc pour tout $(a; b) \in \mathbb{R}$ : $(a; b) \mathrm{T}(0; 3) = (0; 3) \mathrm{T}(a; b) = (a; b)$.

Donc $(0; 3)$ est l'élément neutre pour la loi T.

2) a) Soit $(a; b) \in \mathbb{R}^2$ un élément symétrisable dans $(\mathbb{R}^2; \mathrm{T})$ ; il existe donc $(a'; b') \in \mathbb{R}^2$ tel que :

$$(a; b) \mathrm{T}(a'; b') = (0; 3), \text{ ce qui conduit au système suivant d'inconnue } (a'; b') : \begin{cases} \frac{1}{3}ab' + \frac{1}{3}ba' = 0 \\ \frac{1}{3}bb' - \frac{3}{4}aa' = 3 \end{cases}$$

Le déterminant de ce système est $\Delta = \frac{1}{9}b^2 + \frac{1}{4}a^2$ ; et on a : $\Delta = 0 \Leftrightarrow (a; b) = (0; 0)$

par suite, l'élément $(a; b)$ est symétrisable dans $(\mathbb{R}^2; \mathsf{T})$ si, et seulement si $(a; b) \neq (0; 0)$ ; et son symétrique est donné par : $(a'; b') = \left(\frac{-36a}{9a^2 + 4b^2}; \frac{36b}{9a^2 + 4b^2}\right)$. Enfin, l'ensemble $G$ est : $G = \mathbb{R}^2 - \{(0; 0)\}$

b) Montrons que $G$ est une partie stable de $(\mathbb{R}^2; \mathsf{T})$ :

Soit $(a; b)$ et $(a'; b')$ deux éléments de $G$. Montrons que $(a; b)\mathsf{T}(a'; b') \neq (0; 0)$.

En utilisant un raisonnement par contraposé, on a :

$$(a; b)\mathsf{T}(a'; b') = (0; 0) \Rightarrow \begin{cases} \frac{1}{3}ab' + \frac{1}{3}ba' = 0 \\ \frac{1}{3}bb' - \frac{3}{4}aa' = 0 \end{cases} \Rightarrow \begin{cases} \frac{1}{3}abb' + \frac{1}{3}b^2a' = 0 \\ \frac{1}{3}abb' - \frac{3}{4}a^2a' = 0 \\ \frac{3}{4}a^2b' + \frac{3}{4}aba' = 0 \\ \frac{1}{3}b^2b' - \frac{3}{4}aba' = 0 \end{cases} \Rightarrow \begin{cases} \frac{1}{3}b^2a' + \frac{3}{4}a^2a' = 0 \\ \frac{1}{3}a^2b' + \frac{3}{4}b^2b' = 0 \end{cases}$$

par conséquent : $(a; b)\mathsf{T}(a'; b') = (0; 0) \Rightarrow \begin{cases} a'\left(\frac{1}{3}b^2 + \frac{3}{4}a^2\right) = 0 \\ b'\left(\frac{1}{3}a^2 + \frac{3}{4}b^2\right) = 0 \end{cases} \Rightarrow \begin{cases} a' = 0 \\ b' = 0 \end{cases}$ ou $\begin{cases} a = 0 \\ b = 0 \end{cases}$

Par contraposé, on en déduit que : $(a; b)\mathsf{T}(a'; b') \neq (0; 0)$. Ainsi, $G$ est une partie stable de $(\mathbb{R}^2; \mathsf{T})$.

c) Montrons que $(G; \mathsf{T})$ est un groupe commutatif :

- On a $G$ est une partie stable de $\left(\mathbb{R}^2; \mathsf{T}\right)$ et la loi T est commutative et associative dans $\mathbb{R}^2$, donc elle en est de même dans $G$.
Puisque $(0;3)$ est I'elément neutre dans $\left(\mathbb{R}^2;\mathsf{T}\right)$ et $G$ est une partie stable de $\left(\mathbb{R}^2;\mathsf{T}\right)$ et $(0;3)\in G$ alors $(0;3)$ est I'elément neutre dans $(G;\mathsf{T})$
- Tout élément $(a; b) \in G$ est symétrisable dans $\left(\mathbb{R}^2; \mathsf{T}\right)$ et a pour symétrique $\left(\frac{-36a}{9a^2 + 4b^2}; \frac{36b}{9a^2 + 4b^2}\right)$ qui est un élément de $G$ (car $(a; b) \neq (0; 0)$)

En résumé, $(G; \mathsf{T})$ est un groupe commutatif.

3) Soit $f$ l'application définie de $\mathbb{C}^*$ dans $G$ par : Pour tout $(a; b) \in \mathbb{R}^2 - \{(0; 0)\}$ $f(a + ib) = (2b; 3a)$

a) On a pour tous $(a; b)$ et $(a'; b')$ de $\mathbb{R}^2 - \{(0; 0)\}$ :

$$f((a + ib)(a' + ib')) = f(aa' - bb' + i(ab' + ba')) = (aa' - bb'; ab' + ba')$$

D'autre part :

$$f ( a + i b ) \top f ( a ^ { \prime } + i b ^ { \prime } ) = ( 2 b ; 3 a ) \top ( 2 b ^ { \prime } ; 3 a ^ { \prime } ) = \left( \frac { 1 } { 3 } ( 2 b ) ( 3 a ^ { \prime } ) + \frac { 1 } { 3 } ( 3 a ) ( 2 b ^ { \prime } ) ; \frac { 1 } { 3 } ( 3 a ) ( 3 a ^ { \prime } ) - \frac { 3 } { 4 } ( 2 b ) ( 2 b ^ { \prime } ) \right)$$

Il s'ensuit donc que : $$f \left( ( a + i b ) ( a ^ { \prime } + i b ^ { \prime } ) \right) = ( a a ^ { \prime } - b b ^ { \prime } ; a b ^ { \prime } + b a ^ { \prime } ) = f ( a + i b ) \top f ( a ^ { \prime } + i b ^ { \prime } ) .$$

c'est-à-dire que $$f$$ est un morphisme de $$(\mathbb{C}^*; \times)$$ dans $$(G; \top)$$.

Soit maintenant $$(a; b) \in G$$. Résolvons l'équation $$f(z) = (a; b)$$ dans $$\mathbb{C}^*$$. On pose $$z = x + iy$$ avec

$$(x; y) \in \mathbb{R}^2 - \{(0; 0)\}$$. On a :

$$f ( z ) = ( a ; b ) \Leftrightarrow f ( x + i y ) = ( a ; b ) \Leftrightarrow ( 2 y ; 3 x ) = ( a ; b ) \Leftrightarrow \left( x = \frac { b } { 3 } \text { et } y = \frac { a } { 2 } \right)$$

Ainsi, l'équation $$f(z) = (a; b)$$ admet une solution unique dans $$\mathbb{C}^*$$ qui est $$z = \frac { b } { 3 } + \frac { a } { 2 } i$$.

Enfin $$f$$ est bijective et donc c'est un isomorphisme de $$(\mathbb{C}^*; \times)$$ dans $$(G; \top)$$.

b) On a $$f$$ est isomorphisme de $$(\mathbb{C}^*; \times)$$ dans $$(G; \top)$$ et $$(\mathbb{C}^*; \times)$$ est un groupe commutatif, donc $$(G; \top)$$ est aussi un groupe commutatif.

c) Pour tout $$n \in \mathbb{N}^*$$, on pose : $$Z _ { n } = \underbrace { \left( \sqrt { 3 } ; \frac { 3 } { 2 } \right) \top \left( \sqrt { 3 } ; \frac { 3 } { 2 } \right) \top \dots \top \left( \sqrt { 3 } ; \frac { 3 } { 2 } \right) } _ { n \text { fois } }$$

On a $$\left( \sqrt { 3 } ; \frac { 3 } { 2 } \right) = f \left( \frac { 1 } { 2 } + i \frac { \sqrt { 3 } } { 2 } \right)$$ donc : $$Z _ { n } = \underbrace { f \left( \frac { 1 } { 2 } + i \frac { \sqrt { 3 } } { 2 } \right) \top f \left( \frac { 1 } { 2 } + i \frac { \sqrt { 3 } } { 2 } \right) \top \dots \top f \left( \frac { 1 } { 2 } + i \frac { \sqrt { 3 } } { 2 } \right) } _ { n \text { fois } }$$

Et comme $$f$$ est un morphisme de $$(\mathbb{C}^*; \times)$$ dans $$(G; \top)$$ alors :

$$Z _ { n } = f \left( \left( \frac { 1 } { 2 } + \frac { \sqrt { 3 } } { 2 } i \right) ^ { n } \right) = f \left( e ^ { i \frac { n \pi } { 3 } } \right) = f \left( \cos \frac { n \pi } { 3 } + i \sin \frac { n \pi } { 3 } \right) = \left( 2 \sin \frac { n \pi } { 3 } ; 3 \cos \frac { n \pi } { 3 } \right)$$

D'où le résultat souhaité.

4) On considère l'ensemble : $$S = \{ ( 2 \sin x ; 3 \cos x ) / x \in \mathbb{R} \}$$

a) Montrons que $$(S; \top)$$ est un sous-groupe de $$(G; \top)$$ :

- On a $S$ est une partie non vide de $G\operatorname {car}(0;3)\in S$ et pour tout $x\in S:(2\sin x;3\cos x)\neq (0;0)$
Soit $(2\sin x;3\cos x)$ et $(2\sin y;3\cos y)$ deux éléments de $S$ (ou $(x;y)\in \mathbb{R}^2$). Le symétrique de $(2\sin y;3\cos y)$ étant le couple $(a;b)$ avec:

$$a = \frac { - 3 6 ( 2 \sin y ) } { 9 ( 4 \sin ^ { 2 } y ) + 4 ( 9 \cos ^ { 2 } y ) } = - 2 \sin y \quad \text { et } \quad b = \frac { 3 6 ( 3 \cos y ) } { 9 ( 4 \sin ^ { 2 } y ) + 4 ( 9 \cos ^ { 2 } y ) } = 3 \cos y$$

Et on a :[{"box_2d": [158, 861, 880, 915], "label": "equation", "caption": "$$\\begin{array} { l } { ( 2 \\sin x ; 3 \\cos x ) \\top ( - 2 \\sin y ; 3 \\cos y ) = ( 2 ( \\sin x \\cos y - \\cos x \\sin y ) ; 3 ( \\cos x \\cos y - \\sin x \\sin y ) ) } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text { et } \\\\ { \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad

D'où, $$(2 \sin x; 3 \cos x) \top (-2 \sin y; 3 \cos y) \in S$$. Ainsi, $$(S; \top)$$ est un sous-groupe de $$(G; \top)$$.

b) Résolution dans $$\mathbb{R}$$ de l'équation $$(2 \sin x; 3 \cos x) \top (2; 0) = (0; 3)$$

$$(2 \sin x; 3 \cos x) \top (2; 0) = (0; 3) \Leftrightarrow (2 \cos x; -3 \sin x) = (0; 3) \Leftrightarrow (\cos x = 0 \text{ et } \sin x = -1)$$

D'où : $$x = -\frac{\pi}{2} + 2k\pi$$ avec $$k \in \mathbb{Z}$$. Ainsi, l'ensemble solution est : $$S = \left\{ -\frac{\pi}{2} + 2k\pi / k \in \mathbb{Z} \right\}$$

- Pour montré qu'une loi de composition interne est commutative, ou est associative, ou admet un neutre, ou que certains éléments admettent un symétrique, il suffit de revenir aux définitions et les appliquer.
- Pour montré que $ H $ est un sous-groupe de $ (G;*) $, il suffit de démontré que:

- $ H $ est une partie non vide de $ G $ (pour $ H \neq \emptyset $, on prouve en général que l'élement neutre de $ G $ est un élément de $ H $);
- pour tout $(x; y) \in H^2$: ($x'$ est le symétrique de $x$ dans $(G;*)$

$$(x * y \in H \text{ et } x' \in H) \quad \text{ou bien} \quad (x * y' \in H)$$

- Pour démontrer que $$(G;*)$$ est un groupe, il suffit de montrer que $$G$$ est un sous-groupe d'un groupe $$(G';*)$$ connu.

### D. Transfert de la structure de groupe
Soit $$G$$ et $$H$$ deux ensembles non vides et $$f$$ une bijection de $$G$$ dans $$H$$. On munit $$G$$ d'une loi de composition interne * et on pose pour tout $$(x; y) \in H^2$$ : $$x \top y = f(f^{-1}(x) * f^{-1}(y))$$

1) Montré que $\top$ est une loi de composition interne définie sur $H$.
2) Montrer que $ f $ est un isomorphisme de $ (G;*) $ dans $ (H; \top) $.
3) Montrer que pour tout $(x;y)\in G^2:x*y = f^{-1}\big(f(x)\top f(y)\big).$
4) En déduire que les lois* et T ont les mêmes propriétés.

Que peut-on déduire si $$(G;*)$$ est un groupe commutatif ?

5) Applications : Dans chacun des cas suivants, montrer que $$(H; \top)$$ est un groupe commutatif :

a) $H = \left] - \frac{\pi}{2},\frac{\pi}{2}\right[$ et la loi T est définie par: $\left(\forall (x;y)\in H^2\right)x\top y = \operatorname {Arctan}\left(\tan (x) + \tan (y)\right)$
b) $H = \mathbb{R}_+^* -\{1\}$ et la loi T est définie par: $\left(\forall (x;y)\in \left(\mathbb{R}_+^*\right)^2\right)x\top y = e^{\operatorname {lo}(x),\operatorname {lo}(y)}.$
c) $H = ]0;1[$ et la loi T est définie par: $\left(\forall (x;y)\in \left(\left]0;1\right[\right]^2\right)x\top y = e^{-\ln (x),\ln (y)}.$
d) $H = ]a; + \infty [$ et la loi T est définie par: $\left(\forall (x;y)\in \mathbb{R}^2\right)x\top y = (x - a)(y - a) + a$ (ici $a\in \mathbb{R}$

6) Soit $\alpha \in \mathbb{C}$. On définit sur $\mathbb{C}$ les deux lois de composition interne $\oplus$ et $\otimes$ par :

$$\left(\forall(z; z') \in \mathbb{C}^2\right): z \oplus z' = z + z' - \alpha \text{ et } z \otimes z' = \alpha z + \alpha z' - zz' - \alpha^2 + \alpha$$

En considérant l'application $f$ définie de $\mathbb{C}$ dans $\mathbb{C}$ par $f(z) = -z + \alpha$, montrer que $(\mathbb{C}; \oplus; \otimes)$ est un corps commutatif

> **Solution.**
1) Montrons que $\mathsf{T}$ est une loi de composition interne définie sur $H$ :

Soit $(x; y) \in H^2$. Puisque $f$ une bijection de $G$ dans $H$, alors, en notant $f^{-1}$ sa bijection réciproque, on aura $f^{-1}(x) \in G$ et $f^{-1}(y) \in G$. Puisque la loi $*$ est interne dans $G$, alors $f^{-1}(x) * f^{-1}(y) \in G$; donc $f(f^{-1}(x) * f^{-1}(y)) \in H$. Ainsi, $\mathsf{T}$ est une loi de composition interne définie sur $H$.

2) Montrons que $f$ est un isomorphisme de $(G; *)$ dans $(H; \mathsf{T})$ :

On sait que $f$ est une bijection de $G$ dans $H$. Il suffit donc de montrer que $f$ est un morphisme.

On a pour tout $(x; y) \in G^2$ : $f(x * y) = f(f^{-1}(f(x)) * f^{-1}(f(y))) = f(x)\mathsf{T}f(y)$

Il s'ensuit donc que $f$ est un isomorphisme de $(G; *)$ dans $(H; \mathsf{T})$.

3) Montrer que pour tout $(x; y) \in G^2$ : $x * y = f^{-1}(f(x)\mathsf{T}f(y))$

Soit $(x; y) \in G^2$. On a déjà vu dans la question 3) : $f(x * y) = f(x)\mathsf{T}f(y)$; ceci entraîne immédiatement : $x * y = f^{-1}(f(x * y)) = f^{-1}(f(x)\mathsf{T}f(y))$. D'où le résultat souhaité.

4) Puisque $f$ est un isomorphisme de $(G; *)$ dans $(H; \mathsf{T})$, le cours nous enseigne que $(G; *)$ et $(H; \mathsf{T})$ ont la même structure et donc les lois $*$ et $\mathsf{T}$ ont les mêmes propriétés.

Si $(G; *)$ est un groupe commutatif, il en est de même pour $(H; \mathsf{T})$.

5) Montrons que $(H; \mathsf{T})$ est un groupe commutatif :

a) On sait que Arctan est une bijection de $\mathbb{R}$ dans l'intervalle $\left]-\frac{\pi}{2}; \frac{\pi}{2}\right[$ et que $(\mathbb{R}; +)$ est un groupe commutatif; donc $\left(\right]-\frac{\pi}{2}; \frac{\pi}{2}[; \mathsf{T}]$ est un groupe commutatif.

b) On sait que exp est une bijection de $\mathbb{R}^*$ dans $H = \mathbb{R}_+^*$ - $\{1\}$ et que $(\mathbb{R}^*; \times)$ est un groupe commutatif; donc $(\mathbb{R}_+^*) - \{1\}; \mathsf{T}$ est un groupe commutatif.

c) On sait que $x \mapsto e^{-x}$ est une bijection de $\mathbb{R}_+^*$ dans $]0; 1[$ et que $(\mathbb{R}_+^*; \times)$ est un groupe commutatif; donc $(]0; 1[; \mathsf{T})$ est un groupe commutatif.

d) On sait que $x \mapsto x + \alpha$ est une bijection de $\mathbb{R}_+^*$ dans l'intervalle $]\alpha; +\infty[$ et que $(\mathbb{R}_+^*; \times)$ est un groupe commutatif; donc $(]\alpha; +\infty[; \mathsf{T})$ est un groupe commutatif.

6) L'application $f$ définie de $\mathbb{C}$ dans $\mathbb{C}$ par $f(z) = -z + \alpha$ étant bijective et sa bijection réciproque est $f$ elle-même. On a de plus : $(\forall (z; z') \in \mathbb{C}^2) \quad z \oplus z' = z + z' - \alpha = f(f^{-1}(z) + f^{-1}(z'))$

Puisque $(\mathbb{C}; +)$ est un groupe commutatif, alors $(\mathbb{C}; \oplus)$ est aussi un groupe commutatif.

On a aussi : $(\forall (z; z') \in \mathbb{C}^2) \quad z \otimes z' = \alpha z + \alpha z' - z \cdot z' - \alpha^2 + \alpha^2 z + z' - \alpha = f(f^{-1}(z) \times f^{-1}(z'))$

On en déduit alors que les lois $\times$ et $\otimes$ ont les mêmes propriétés (commutativité, associativité, existence d'un élément neutre pour $\otimes$ qui est $f(1) = \alpha - 1$ et tout élément différent de $\alpha$ est symétrisable dans $(\mathbb{C}; \otimes)$).

De plus, pour tout $(z; z'; z'') \in \mathbb{C}^3$ : $z \otimes (z' \oplus z'') = f(f^{-1}(z) \times f^{-1}(z' \oplus z'))$

donc : $z \otimes (z' \oplus z'') = f(f^{-1}(z) \times f^{-1}(f(f^{-1}(z') + f^{-1}(z')))) = f(f^{-1}(z) \times (f^{-1}(z') + f^{-1}(z')))$

Par suite : $z \otimes (z' \oplus z'') = f(f^{-1}(z \otimes z') + f^{-1}(z \otimes z')) = (z \otimes z') \oplus (z \otimes z'')$, ce qui montre bien que $\otimes$ est distributive par rapport à $\oplus$ dans $\mathbb{C}$. Ainsi, $(\mathbb{C}; \oplus; \otimes)$ est un corps commutatif.

- Pour montrer que $(A; +; \times)$ est un anneau unitaire, $+$ et $\times$ étant des lois de composition interne sur $A$, on applique la définition vue dans le cours, c'est-à-dire que l'on montre :

- $(A; +)$ est un groupe commutatif (en général, il suffit pour cela de monrer que $A$ est un sous-groupe d'un groupe commutatif $(A'; +)$);
- La loi $\times$ admet un élément neutre (appartenant à $A$);
- La loi $\times$ est associative et distributive par rapport à la loi $+$.

Pour le dernier point, on peut noter que si $+$ et $\times$ sont des lois de composition internes sur un ensemble $A'$ telles que $\times$ est associative et distributive par rapport à la loi $+$ et $A$ est une partie de $A'$ stable pour les lois $+$ et $\times$, alors dans $A$ la loi induite par $\times$ est également associative et distributive par rapport à la loi

- Pour monrer qu'un anneau n'est pas un corps, il suffit de trouver un élément non nul et non inversible dans cet anneau.
- Pour démontrer qu'un anneau $(A; +; \times)$ n'est pas intègre, il suffit de trouver deux éléments $X$ et $Y$ de $A$ tels que : $X \neq O$ et $Y \neq O$ et $X \times Y = O$, où $O$ représente l'élément neutre pour la loi $+$.
- Pour montrer que $(K; +; \times)$ est un corps, on applique la définition, c'est-à-dire que l'on montre que $(K; +; \times)$ est un anneau unitaire non réduit à $\{0_k\}$ et que tout élément $x \in K - \{0_k\}$ possède un symétrique (appartenant à $K$) pour la loi $\times$.

On peut aussi utiliser dans quelques situations montrer les trois axiomes suivants:

- $(K; +)$ est un groupe commutatif.
- $(K - \{0_K\}; \times)$ est un groupe.
- La loi $\times$ est distributive par rapport à la loi $+$.

## Exercices

### Exercices d'application
#### Groupes et morphismes de groupes
**Exercice 1.**
Soit : $$E = \{(x; y) \in \mathbb{R}^2 \mid x^2 - y^2 = 1\}$$

Pour tout $$(x; y) \in E$$ et $$(x'; y') \in E$$, on pose :

$$(x; y) \top (x'; y') = (xx' + yy'; xy' + yx')$$

1) Montrer que $\top$ est une loi de composition interne dans $E$.
2) Montrer que $(E; \mathsf{T})$ est un groupe commutatif.

**Exercice 2.**
On considère l'intervalle $$I = ]-1; 1[$$ de $$\mathbb{R}$$.

1) Montrer que: $\left(\forall (a; b) \in I^2\right) - 1 < \frac{a + b}{1 + ab} < 1$
2) On définit sur $I$ une loi de composition interne* comme suit: $\left(\forall (a; b) \in I^2\right) a * b = \frac{a + b}{1 + ab}$

Montrer que $$(I; *)$$ est un groupe commutatif.

**Exercice 3.**
On définit sur l'ensemble $$G = \mathbb{R}^* \times \mathbb{R}$$ une loi de composition interne comme suit :

$$(a; b) * (c; d) = (ac; bc + d)$$

1) Montrer que $(G;*)$ est un groupe.
2) On considère l'ensemble:

$$H = \{(1; x) \in G \mid x \in \mathbb{R}\}$$

Montrer que $$H$$ est un sous-groupe de $$(G; *)$$.

**Exercice 4.**
On considère l'ensemble $$E = \mathbb{R}^* \times \mathbb{R}$$. On définit sur $$E$$ une loi de composition interne * comme suit :

Pour tous $$(x; y)$$ et $$(z; t)$$ de $$E$$ :

$$(x; y) * (z; t) = (xz; xt + z^n y)$$

où $$n$$ est un entier naturel supérieur ou égal à 2.

Montrer que $$(E; *)$$ est un groupe non commutatif.

**Exercice 5.**
Soit $$(G; *)$$ un groupe d'élément neutre $$e$$.

On note $$a^{-1}$$ le symétrique de $$a$$.

On considère l'application $$f$$ définie de $$G$$ dans $$G$$ par $$f(a) = a^{-1}$$

Montrer que $$f$$ est un isomorphisme si, et seulement si, le groupe $$(G; *)$$ est commutatif.

**Exercice 6.**
On considère l'ensemble :

$$E = \left\{ M(x) = \begin{pmatrix} 1 & 0 & x \\ -x & 1 & -\frac{x^2}{2} \\ 0 & 0 & 1 \end{pmatrix} \mid x \in \mathbb{R} \right\}$$

1) Calculer $M(x)\times M(x^{\prime})$ pour tout $(x,x^{\prime})\in \mathbb{R}^{2}$
2) Montrer que $(E; \times)$ est un groupe.

**Exercice 7.**
$$(E; *)$$ est un groupe d'élément neutre $$e$$.

Pour un élément $$a \in E$$ donné $$(a \neq e)$$, on définit la loi $$\top$$ sur $$E$$ par : $$(\forall (x; y) \in E^2) \quad x \top y = x * y * a$$ Montrer que $$(E; \top)$$ est un groupe commutatif.

**Exercice 8.**
Soit $$(G; *)$$ un groupe d'élément neutre $$e$$.

On note $$a^{-1}$$ le symétrique de $$a$$. Soit $$H$$ un sous-groupe de $$(G; *)$$ et $$n \in G$$ ($$n$$ donné). Montrer que l'ensemble $$H_n = \{n * h * n^{-1}\}$$ est un sous-groupe de $$(G; *)$$.

**Exercice 9.**

Soit $p$ et $q$ deux nombres premiers positifs distincts.

Montrer que: $H = \{p^m q^n / (m; n) \in \mathbb{Z}^2\}$

est un sous-groupe de $(\mathbb{R}^+; \times)$.

**Exercice 10.**

Soit $f$ un morphisme de groupe $(G; \top)$ dans un groupe $(G'; \bot)$. Soit $H'$ un sous-groupe de $(G'; \bot)$.

Montrer que $f^{-1}(H')$ est un sous-groupe de $(G; \top)$.

**Exercice 11.**

On munit $\mathbb{R}$ d'une loi de composition interne * comme

suit: $(\forall (x; y) \in \mathbb{R}^2) \quad x * y = x\sqrt{y^2 + 1} + y\sqrt{x^2 + 1}$

et on considère l'application $s$ définie de $\mathbb{R}$ dans $\mathbb{R}$

par: $s(x) = \frac{e^x - e^{-x}}{2}$

1) Montrer que $s$ est un isomorphisme de $(\mathbb{R}; + )$ dans $(\mathbb{R};*)$
2) En déduire la structure de $(\mathbb{R};*)$ en déterminant son élément neutre et le symétrique de tout élément dans $(\mathbb{R};*)$.
3) Pour tout $x \in \mathbb{R}$ et pour tout entier $n \geq 2$, on pose:

$$x^{(n)} = \underbrace{x * x * \dots * x}_{n \text{ fois}}$$

Calculer $x^{(n)}$.

**Exercice 12.**

On munit le plan $\mathcal{P}$ d'un repère $(O; \bar{i}; \bar{j})$.

Pour tout $a \in \mathbb{R}^*$, on considère l'application $\varphi_a$ définie par:

$$\varphi_a: \mathcal{P} \to \mathcal{P}$$

$$M(x; y) \mapsto M'(x'; y')$$

avec: $x' = x + \ln a$ et $y' = ay$

On considère l'ensemble: $F = \{\varphi_a / a \in \mathbb{R}^*\}$

1) Montrer que la composition des applications « $o$ » est une loi de composition interne dans $F$.

2) On considère l'application:

$$f: \mathbb{R}^*_+ \to F$$

$$a \mapsto \varphi_a$$

a) Montrer que $f$ est un isomorphisme de $\left(\mathbb{R}_{+}^{*};\times\right)$ dans $(F;o)$.
b) En déduire la structure de $(F; o)$.
c) Déterminer le symétrique de $\varphi_{a}$ dans $(F; o)$, pour tout $a \in \mathbb{R}_{+}^{*}$.

**Exercice 13.**

On considère l'ensemble: $E = \left\{\frac{1+2p}{1+2q} / (p; q) \in \mathbb{Z}^2\right\}$

Montrer que $(E; \times)$ est un sous-groupe de $(\mathbb{Q}; \times)$.

**Exercice 14.**

1) Soit $A, J$ et $I$ les trois matrices carrées d'ordre 2 définies par:

$$A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}; \quad J = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}; \quad I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

a) Déterminer $(a; b) \in \mathbb{R}^2$ tel que: $A = aJ + bI$
b) Calculer $J^2$ en fonction de $J$.
c) A l'aide d'un raisonnement par récurrence, étabir pour tout $ n \in \mathbb{N} $, la relation suivante:

$$A^n = (-2)^n I + \frac{1}{2}(4^n - (-2)^n)J$$

d) Donner l'expression explicite de $A^n$ sous forme d'une matrice carrée d'ordre 2.
e) Montrer que $A$ est inversible et donner $A^{-1}$.

2) On note $(v_n)$ et $(w_n)$ les deux suites définies par: $v_0 = 3, w_0 = 3$ et les relations suivantes: $(n \in \mathbb{N})$

$$\begin{cases} v_{n+1} = v_n + 3w_n \\ w_{n+1} = 3v_n + w_n \end{cases} \text{ et on pose: } X_n = \begin{pmatrix} u_n \\ v_n \end{pmatrix}$$

a) Montrer que: $(\forall n \in \mathbb{N}) X_n = A^n X_0$
b) En déduire l'expression de $X_{n}$ en fonction de $n$
c) Calculer les valeurs de $ v_{n} $ et $ w_{n} $ en fonction de $ n $.

#### Anneaux et corps
**Exercice 17.**
Soit T et ⊥ deux lois de composition interne dans ℝ définies par : Pour tout (x; y) ∈ ℝ²,

$$x \perp y = 2y - x \quad \text{et} \quad x \top y = \frac{1}{2}(x + y)$$

1) Étudier les propriétés des lois T et $\perp$.
2) a) Montrer que la loi T est distributive par rapport à la loi $\perp$.
b) Montrer que la loi $\perp$ est distributive par rapport à la loi T.

**Exercice 18.**
On définit sur ℝ² deux lois de composition interne + et × comme suit : Pour tous (a; b) et (a'; b') de ℝ²,

$$\begin{array}{l} (a; b) + (a'; b') = (a + a'; b + b') \\ (a; b) \times (a'; b') = (aa'; ab' + ba') \end{array}$$

Montrer que (ℝ²; +; ×) est un anneau commutatif unitaire.

**Exercice 19.**
On définit sur l'ensemble ℤ deux lois de composition interne T et * comme suit : Pour tout (x; y) ∈ ℤ²,

$$x \top y = x + y + 3 \quad \text{et} \quad x * y = xy + 3x + 3y + 6$$

1) Montrer que $(\mathbb{Z};\mathbb{T})$ est un groupe commutatif.
2) Montrer que $(\mathbb{Z};\mathbb{T};*)$ est un anneau commutatif.

**Exercice 20.**
On munit ℤ² de deux lois de composition interne + et × comme suit : Pour tous (a; b) et (a'; b') de ℤ²,

$$\begin{array}{l} (a; b) + (a'; b') = (a + a'; b + b') \\ (a; b) \times (a'; b') = (aa' + 2bb'; ab' + ba') \end{array}$$

Montrer que (ℤ²; +; ×) est un anneau commutatif.

**Exercice 21.**
Soit (A; +; ×) un anneau unitaire.

On définit sur A une loi de composition interne T comme suit : (∀(x; y) ∈ A²) xᵀy = xy - yx

1) Montrer que: $(\forall (x;y)\in A^2)$ $x\top y = -(y\top \tau)$
2) Montrer que la loi T n'est pas associative.
3) Montrer que $(A;T)$ n'admet pas d'element nesh
4) Montrer que T est distributive par rapport à la li
5) Montrer que pour tout $(x;y;z)\in A^3$

$$x \top (y \top z) + y \top (z \top x) + z \top (x \top y) = 0$$

et que : yᵀ(xᵀz) = xᵀ(yᵀz) - (xᵀy)ᵀz

**Exercice 22.**
Soit (A; +; ×) un anneau unitaire tel que pour tout xᵀ² = x. On note 0_A le zéro de A et 1_A son élément

1) Montrer que: $(\forall x \in A)$ $x = -x$
2) Montrer que: $(\forall x \in A) x^8 + x^4 = 0_A$

(Remarquer que : (x + 1_A)¹² = x + 1_A)

3) Montrer que : (∀x ∈ A) x² = x

**Exercice 23.**
On considère l'ensemble :

$$E = \left\{ \begin{pmatrix} a & b \\ 7b & a \end{pmatrix} / (a; b) \in \mathbb{Z}^2 \right\}$$

1) Montrer que $(E; +; \times)$ est un anneau commutat
2) Soit $a$ et $b$ deux éléments de $\mathbb{Z}$. Montrer que:

$$a^2 - 7b^2 = 0 \Leftrightarrow (a = 0 \text{ ou } b = 0)$$

3) Montrer que l'anneau (E; +; ×) est intègre.

**Exercice 24.**
On considère l'ensemble :

$$K = \{ a + b\sqrt{S} \mid a \in \mathbb{Q} \text{ et } b \in \mathbb{Q} \}$$

Montrer que (K; +; ×) est un corps commutatif.

**Exercice 25.**

On considère l'ensemble $\mathbb{Z}/6\mathbb{Z}$.

1) Montrer que l'ensemble des solutions de l'équation $x^2 = \overline{2}$ dans $\mathbb{Z}/6\mathbb{Z}$ est vide.

2) On considère l'ensemble $A = \mathbb{Z}/6\mathbb{Z} \times \mathbb{Z}/6\mathbb{Z}$.

On munit $A$ des deux lois de composition interne :

$$(x_1; y_1) \oplus (x_2; y_2) = (x_1 + x_2; y_1 + y_2)$$

$$(x_1; y_1) \otimes (x_2; y_2) = (x_1 x_2 + 2 y_1 y_2; x_1 y_2 + x_2 y_1)$$

Montrer que $(A; \oplus; \otimes)$ est un anneau commutatif.

3) Soit $B = \mathbb{Z}/6\mathbb{Z} \times \{\overline{0}\}$. Trouver un morphisme de $B$ dans $(\mathbb{Z}/6\mathbb{Z}; +; \times)$.

**Exercice 26.**

On considère l'ensemble :

$$E = \left\{ M(x; y) = \begin{pmatrix} x & y \\ -y & x+y \end{pmatrix} / (x; y) \in \mathbb{R}^2 \right\}$$

1) Montrer que $E$ est une partie stable pour l'addition et la multiplication dans $\mathbb{M}_2(\mathbb{R})$.
2) Montrer que $(E; +; \times)$ est un anneau commutatif. L'anneau $(E; +; \times)$ est-il intègre? Justifier
3) Montrer que $(E; +; \times)$ est un corps commutatif.
4) Résoudre dans $E$ l'équation: $-X^2 + 4X - 3I = 0$

**Exercice 27.**

On définit sur l'ensemble $\mathbb{C}$ une loi de composition interne * comme suit :

$$(\forall (z; z') \in \mathbb{C}^2) \quad z * z' = z + z' - i$$

1) Montrer que $(\mathbb{C};*)$ est un groupe commutatif.
2) Soit $m \in \mathbb{C}^*$. On définit sur $\mathbb{C}$ une loi de composition interne T comme suit:

$$(\forall (z; z') \in \mathbb{C}^2) \, z \, \mathsf{T} \, z' = mi\,zz' + m(z + z') + i(1 - m)$$

a) Montrer que T est commutative et distributive

par rapport à la loi * dans $\mathbb{C}$.

b) Montrer que $(\mathbb{C}; *; \text{T})$ est un corps commutatif.

On considère l'ensemble :

**Exercice 28.**

$$K = \left\{ M(x; y) = \begin{pmatrix} x & x \\ -5y & x+2y \end{pmatrix} / (x; y) \in \mathbb{R}^2 \right\}$$

Montrer que $(K; +; \times)$ est un corps commutatif.

On considère l'ensemble :

**Exercice 29.**

$$L = \left\{ \begin{pmatrix} x & y & z \\ 2x & x & y \\ 2y & 2z & x \end{pmatrix} / (x; y; z) \in \mathbb{R}^3 \right\}$$

Montrer que $(L; +; \times)$ est un corps commutatif.

**Exercice 30.**

Soit $(A; +; \times)$ un anneau unitaire d'élément unité I.

Soit $(a; b) \in A^2$ tel que $1 - ab$ admet un inverse dans $A$.

1) Calculer $(1 + bca)(1 - ba)$ et $(1 - ba)(1 + bca)$ pour tout $c\in A$
2) En déduire que $ 1 - ba $ est inversible dans $ A $ et que son inverse: $ (1 - ba)^{-1} = 1 + b(1 - ab)^{-1}a $

**Exercice 31.**

On considère l'ensemble : $\mathbb{Z}[i] = \{a + ib / (a; b) \in \mathbb{Z}^2\}$

1) Montrer que $\mathbb{Z}[i]$ est une partie stable de $(\mathbb{C}; + )$ et de $(\mathbb{C};\times)$
2) Montrer que $(\mathbb{Z}[i]; \times)$ est un anneau commutatif unitaire.
3) Soit $\mathcal{U}$ l'ensemble des éléments inversibles dans $(\mathbb{Z}[i]; \times)$. On pose: $(\forall z \in \mathbb{C}) N(z) = z \times \overline{z} = |z|^2$

a) Soit $x \in \mathbb{Z}[i]$. Montrer que: $x \in \mathcal{U} \Leftrightarrow N(x) = 1$
b) En déduire que: $\mathcal{U} = \{1; -1; i; -i\}$

### Exercices de perfectionnement
**Exercice 32.**
On considère les matrices suivantes :

$$A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix} ; B = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix} ; I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

1) Calculer $B^2$ et $B^n$ pour tout entier $n\geq 2$
2) a) Exprimer $A$ en fonction de $I$ et $B$.
b) En déduire $A^n$ en fonction de $n \in \mathbb{N}^*$.

**Exercice 33.**
On considère les deux matrices suivantes : $(a \in \mathbb{R}^*)$

$$D = \begin{pmatrix} a & 0 & 0 \\ 0 & a & 0 \\ 0 & 0 & a \end{pmatrix} \quad \text{et} \quad N = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$$

1) a) Calculer $N^2$ et $N^3$.
b) Vérifier que: $ ND = DN $
2) On considère la matrice: $ A = N + D $

Exprimer $A^n$ en fonction de $a$ et $n$. $(n \in \mathbb{N}^*)$

**Exercice 34.**
On considère dans $\mathbb{M}_3(\mathbb{R})$ l'ensemble suivant :

$$G = \left\{ M = \begin{pmatrix} 1 & x & y \\ 0 & 1 & z \\ 0 & 0 & 1 \end{pmatrix} / (x; y; z) \in \mathbb{R}^3 \right\}$$

1) Montrer que $G$ est stable dans $\left(\mathbb{M}_3(\mathbb{R});\times\right)$.
2) Montrer que $(G; \times)$ est un groupe.
3) Déterminer l'ensemble $C$ défini par:

$$C = \{A \in G \mid \forall M \in G; AM = MA\}$$

**Exercice 35.**
Soit $H$ et $K$ deux sous-groupes d'un groupe $(G; *)$.

Montrer que : $H \cup G$ est un sous-groupe de $(G; *)$ si, et seulement si : $H \subset G$ ou $G \subset H$

**Exercice 36.**
Soit $K$ un ensemble fini tel que $(K; +; \times)$ est un ou commutatif. On pose : $K^* = K - \{0\}$

Montrer que : $\prod_{x \in K^*} x = -1$

**Exercice 37.**
Soit $(G; *)$ un groupe d'élément neutre $e$.

Pour tout $x \in G$, on note $x^2 = x * x$ et $x'$ le symétrie le symétrique de $x$ dans $(G; *)$

Montrer que si l'une des conditions suivantes est satisfaite :

C1) $(\forall (a;b)\in G^2)$ $(a*b)^2 = a^2*b^2$
C2) $(\forall a\in G)$ $a^2 = e$
C3) $(\forall a\in G)$ $a^{\prime} = a$

alors le groupe $(G; *)$ est commutatif.

**Exercice 38.**
On considère l'ensemble :

$$E = \left\{ M_a = \begin{pmatrix} 2^a & 0 \\ a2^a & 2^a \end{pmatrix} \mid a \in \mathbb{Z} \right\}$$

1) Montrer que $(E; \times)$ est un groupe commutatif isomorphe à $(\mathbb{Z}; +)$.
2) Montrer que pour tout $p \in \mathbb{Z} : (M_a)^p = M_a$
3) Soit $(a; b) \in \mathbb{Z}^2$ et on considère l'ensemble:

$$F_{(a;b)} = \left\{ (M_a)^p \times (M_b)^q \mid (p; q) \in \mathbb{Z}^2 \right\}$$

a) Montrer que $F_{(a;b)}$ est un sous-groupe de $(E;$
b) Soit $c\in \mathbb{Z}$ . Montrer que:

$$M_c \in F_{(a;b)} \Leftrightarrow (c \text{ divise } a \wedge b)$$

c) En déduire que : $F_{(a;b)} = E \Leftrightarrow a \wedge b = 1$

**Exercice 39.**
On considère l'ensemble E définie par :

$$E = \left\{ M(x) = \begin{pmatrix} x & 0 \\ x \ln x & x \end{pmatrix} / x \in \mathbb{R}_+^\times \right\}$$

et on considère l'application ψ définie par :

$$\psi : \mathbb{R}_+^\times \to E$$

$$x \mapsto M(x)$$

1) Montrer que ψ est un isomorphisme de (R*ₓ; ×) dans (E; ×).

2) Quelle est la structure de (E; ×) ?

3) Soit x ∈ R*ₓ et n ∈ ℕ*.

Calculer les matrices : (M(x))⁻¹ et (M(x))ⁿ

**Exercice 40.**
Soit I et J les deux matrices de M₂ (ℝ) données :

$$I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \quad \text{et} \quad J = \begin{pmatrix} 0 & p \\ 1 & 0 \end{pmatrix} \quad \text{où} \quad p \in \mathbb{R}$$

On considère l'ensemble :

$$E = \left\{ M(x; y) = \begin{pmatrix} x & py \\ y & x \end{pmatrix} / (x; y) \in \mathbb{R}^2 \right\}$$

1) Vérifier que J² = pI puis montrer que (E; +; ×) est un anneau commutatif unitaire.

2) On suppose que p < 0 et on pose : E* = E - {O}
On considère l'application φ de E* dans ℂ* définie par :

$$(\forall M(x; y) \in E^*) \quad \varphi(M(x; y)) = x + iy\sqrt{-p}$$

a) Montrer que φ est un isomorphisme de (E*; ×) dans (ℂ*; ×).

b) Quelle est la structure de (E*; ×) ?

c) Développer (√-p + i)² puis en déduire les solutions dans E* de l'équation : X² = (-p - 1)I + 2J

**Exercice 41.**
On définit sur E = ℝ* × ℝ une loi de composition interne * comme suit :

$$(x; y) * (x'; y') = \left( xx'; \frac{y'}{x} + x'y \right)$$

1) Montrer que (E; *) est un groupe.

Le groupe (E; *) est-il commutatif ? Justifier.

2) Soit f une fonction définie sur ℝ* et on pose :

$$\Gamma(f) = \{(x; f(x)) / x \in \mathbb{R}^*\}$$

a) Montrer que Γ(f) est une partie stable de (E; *) si, et seulement si :

$$(\forall (x; y) \in (\mathbb{R}^*)^2) \quad f(xy) = \frac{1}{x}f(y) + yf(x)$$

b) Soit fₖ la fonction définie sur ℝ* par :

$$f_k(x) = k\left(x - \frac{1}{x}\right) \quad \text{où} \quad k \in \mathbb{R}$$

Montrer que (Γ(fₖ); *) est un sous-groupe de (E; *).

c) Montrer que si Γ(f) est stable de (E; *), alors :

$$(\forall (x; y) \in (\mathbb{R}^*)^2) \left( y - \frac{1}{y} \right) f(x) = \left( x - \frac{1}{x} \right) f(y)$$

d) Montrer que (Γ(f); *) est un sous-groupe de (E; *) si, et seulement si : (∃k ∈ ℝ) f = fₖ

**Exercice 42.**
On considère l'ensemble F définie par :

$$F = \left\{ \begin{pmatrix} x & 2y \\ y & x \end{pmatrix} / (x; y) \in \mathbb{Q}^2 \right\}$$

1) Montrer que (F; +) est un groupe commutatif.

2) Montrer que (F; +; ×) est un anneau unitaire.

3) a) Soit (x; y) ∈ ℚ². Montrer l'équivalence suivante :

$$x^2 = 2y^2 \Leftrightarrow x = y = 0$$

b) Montrer que (F; +; ×) est un corps commutatif.

c) Résoudre dans F l'équation suivante :

$$(X \in F) ; X^2 - 4X + 3I = O$$

(O est la matrice nulle et I est la matrice identité)

**Exercice 43.**
Soit $a \in \mathbb{C} \setminus \mathbb{R}$ tel que :

$$a = r e^{i\theta} \text{ avec : } |a| = r \text{ et } \alpha \neq k\pi \ (k \in \mathbb{Z})$$

Pour tout $(x; y) \in \mathbb{R}^2$, on pose :

$$M(x; y) = \begin{pmatrix} x & y \\ -r^2y & x + 2ry \cos \alpha \end{pmatrix}$$

Soit E l'ensemble : $E = \{M(x; y) / (x; y) \in \mathbb{R}^2\}$

1) a) Montrer que $(E; + )$ est un groupe commutatif.
b) Montrer que $(E; + ; \times)$ est un corps commutatif.
2) a) Montrer que:

$$(\forall z \in \mathbb{C}) (\exists! (x; y) \in \mathbb{R}^2) / z = x + ay$$

On pose donc : $M(x; y) = M(z)$

b) Soit $\varphi$ l'application définie de $\mathbb{C}$ dans E par :

$$(\forall z \in \mathbb{C}) \ \varphi(z) = M(z)$$

Montrer que $\varphi$ est un morphisme de $(\mathbb{C}; \times)$

dans $(E; \times)$.

c) Calculer $(\varphi(a))^n$ pour tout $n \in \mathbb{N}$.

**Exercice 44.**
**Partie A :**
Soit $(G; *)$ un groupe commutatif et $f$ une bijection de $G$ dans un ensemble $H$. On considère la loi de composition interne T définie sur $H$ par :

$$(\forall (x; y) \in H^2) \ x \top y = f(f^{-1}(x) * f^{-1}(y))$$

1) Montrer que $f$ est un isomorphisme de $(G;*)$ dans $(H;T)$.
2) En déduire la structure de $(H;T)$.

**Partie B :**
Soit $a$ un réel et $g$ la bijection de $\mathbb{R}$ dans $\mathbb{R}$ définie par :

$$(\forall x \in \mathbb{R}) \ g(x) = x + a$$

1) Déterminer $g^{-1}(x)$ pour tout $x \in \mathbb{R}$.
2) Soit $\star$ la loi de composition interne définie sur par:

a) Montrer que $(\mathbb{R};*)$ un groupe commutatif.
b) Soit $\alpha \in \mathbb{R}$. Pour tout $n \in \mathbb{N}^*$, on pose:

$$\alpha^n = \underbrace{\alpha * \alpha * \dots * \alpha}_{n \text{ fois}}$$

Calculer $\alpha^n$ en fonction de $n$.

3) Soit T la loi de composition interne définie sur $E = \mathbb{R} - \{a\}$ par :

$$(\forall (x; y) \in E^2) \ x \top y = (x - a)(y - a) + a$$

a) Montrer que $(E; \top)$ est un groupe commutatif et déterminer son élément neutre.
b) Soit $\beta \in E$. Pour tout $n \in \mathbb{N}^*$, on pose:

$$\beta^n = \underbrace{\beta \top \beta \top \dots \top \beta}_{n \text{ fois}}$$

Calculer $\beta^n$ en fonction de $n$.

**Partie C :**
Soit $m \in \mathbb{R}_+^n$. On pose $I = ]-m; m[$ et on considère la fonction $f_m$ définie sur $\mathbb{R}$ par :

$$(\forall x \in \mathbb{R}) \ f_m(x) = m \left( \frac{e^{2mx} - 1}{e^{2mx} + 1} \right)$$

1) Montrer que $f_{m}$ est bijective de $\mathbb{R}$ dans $I$
2) Déterminer $f_{m}^{-1}(x)$ pour tout $x\in I$
3) Calculer $ f_{m}\left(f_{m}^{-1}(x) + f_{m}^{-1}(y)\right) $ pour tout $(x,y)$
4) Pour tout $(x; y) \in I^2$, on pose:

$$x * y = \frac{m^2(x + y)}{m^2 + xy}$$

Montrer que $(I; *)$ est un groupe commutatif.

### Problèmes de synthèse
#### Se préparer aux devoirs
**Devoir 1.**
Les parties A), B) et C) sont indépendantes.

Partie A:

On définit sur l'ensemble $G = \mathbb{R}^* \times \mathbb{R}$ une loi de composition interne comme suit :

Pour tous $(a; b)$ et $(c; d)$ de $G$ :

$$(a; b) * (c; d) = (ac; ad + b)$$

1) Montrer que $\star$ est associative dans $G$
La loi $\star$ est-elle commutative?
2) Montrer que $(G;\star)$ est un groupe.
3) On pose:

$$H = \{(x; 0) / x \in \mathbb{R}^*\} \text{ et } K = \{(1; x) / x \in \mathbb{R}\}$$

a) Montrer que $H$ et $K$ sont des parties dans $(G;*)$.
b) Montrer que $(H;\star)$ et $(K;\star)$ sont des groupes commutatif.
c) $\star$ est-elle une loi de composition interne sur $H\cup K$ ?Justifier

4) On considère l'ensemble :

$$E = \left\{ \begin{pmatrix} a & b \\ 0 & 1 \end{pmatrix} / (a; b) \in G \right\}$$

a) Montrer que $E$ est stable dans $\left(\mathbb{M}_2(\mathbb{R});\times\right)$.
b) Montrer que $(E;\times)$ est un groupe.

Partie B :

On considère l'ensemble :

$$E = \left\{ M(a; b) = \begin{pmatrix} a+b & a-b \\ a-b & a+b \end{pmatrix} / (a; b) \in \mathbb{R}^2 \right\}$$

et on pose : $J = M(1; 0)$ et $L = M(0; 1)$

1) Montrer que $(E; +)$ est un sous-groupe du groupe $(\mathbb{M}_2(\mathbb{R}); +)$ des matrices carrées d'ordre 2.

2) a) Calculer: $L^2$; $J^2$; $JL$; $LJ$.
b) Montrer que $(E; +; \times)$ est un anneau commutatif.
3) a) Déterminer les diviseurs de zéro dans l'anneau $(E; +; \times)$.
b) L'anneau $(E; +; \times)$ est-il intégre? Est-il un corps?
4) Soit $(a; b) \in \mathbb{R}^2$. Montré que pour tout $n \in \mathbb{N}^*$:

$$(M(a; b))^n = 2^{n-1} M(a^n; b^n)$$

Partie C :

Soit $\alpha \in \mathbb{R}^*$. On définit sur l'ensemble $E = \mathbb{R} - \left\{ \frac{1}{\alpha} \right\}$

une loi de composition interne $\star$ comme suit :

$$(\forall (x; y) \in E^2) \quad x * y = x + y - \alpha xy$$

On considère l'application $f$ définie de $E$ sur $\mathbb{R}^*$ par :

$$f(x) = 1 - \alpha x$$

1) a) Montrer que $f$ est un isomorphisme de $(E;\star)$ dans $\left(\mathbb{R}^{*};\star\right)$.
b) En déduire la structure de $(E;\star)$ en déterminant son élément neutre $e$.

2) On note par $x^{-1}$ le symétrique de $x$ dans $(E; \star)$.

On pose :

$$x^0 = e \quad \text{et} \quad (\forall n \in \mathbb{N}^*) \quad x^n = \underbrace{x * x * \dots * x}_{n \text{ fois}}$$

$$\text{et} \quad (\forall n \in \mathbb{Z}^-) \quad x^n = (x^{-1})^{-n}$$

On admet qu'on a pour tout $(m; n) \in \mathbb{Z}^2$ :

$$x^n * x^m = x^{n+m} \quad \text{et} \quad (x * y)^n = x^n * y^n$$

On pose enfin : $G = \{x^n / n \in \mathbb{Z}\}$ où $x \in E$

a) Montrer que: $G = \left\{\frac{1}{\alpha}\left(1 - (1 - \alpha x)^n\right) / n \in \mathbb{Z}\right\}$
b) Montrer que $G$ est un sous-groupe de $(E;\star)$

**Devoir 2.**
Les parties A), B) et C) sont indépendantes.

Partie A:

Pour tous $z = x + iy$ et $z' = x' + iy'$ de $\mathbb{C}$ avec $x, y, x'$ et $y'$ de $\mathbb{R}$, on pose: $z \top z' = xx' + i(xy' + yx')$

1) Étudier les propriétés de de la loi de composition interne * dans $\mathbb{C}$:

(commutativité – associativité – élément neutre)

2) a) Déterminer l'ensemble $G$ des éléments symétri-sables dans $(\mathbb{C}; \top)$.

b) Montrer que $G$ est une partie stable de $(\mathbb{C}; \top)$ puis que $(G; \top)$ est un groupe commutatif.

3) Soit $n \in \mathbb{N}^*$ et $z = x + iy$ un élément de $\mathbb{C}$.

a) Montrer que pour tout $\alpha \in ]1; +\infty[$:

$$1 + 2\alpha + 3\alpha^2 + ... + n\alpha^{n-1} = \frac{n\alpha^{n+1} - (n+1)\alpha^n + 1}{(\alpha - 1)^2}$$

b) Écrire $u_n = \underbrace{z \top z \top ... \top z}_{n \text{ fois}}$ en fonction de $x, y$ et $n$

puis calculer $\sum_{n=1}^{2012} u_n$.

4) On pose: $S = \{x + ix \ln x / x \in \mathbb{R}^*\}$

a) Montrer que $(S; \top)$ est un sous-groupe de $(G; \top)$.

b) Résoudre dans $S$ l'équation:

$$z \top (2 + i(2 \ln 2)) = 3 + i(3 \ln 3)$$

5) On considère l'ensemble:

$$E = \left\{ M_z = \begin{pmatrix} x & 0 \\ y & x \end{pmatrix} / z = x + iy \in G \right\}$$

a) Montrer que $E$ est stable dans $(\mathbb{M}_2(\mathbb{R}); \times)$.

b) En utilisant un morphisme convenable, étudier les propriétés de $(E; \times)$.

c) Calculer $M_z^n$ pour tout $n \in \mathbb{N}^*$.

6) Déterminer l'ensemble des points $M(z)$ du plan complexe pour lesquels:

$$z \in G \quad \text{et} \quad (z+1+i) \top 2i = 4i$$

Partie B:

Soit $(G; +)$ un sous-groupe du groupe $(\mathbb{C}; +)$ ou $\mathbb{R}^2$ ($\forall x \in [0;1]$) $x + ix^2 \in G$

1) Montrer que: $(\forall x \in [0;1])$ $(2x-1)(1+i) \in G$

2) En déduire que: $(\forall x \in [0;1])$ $x + ix \in G$

3) a) Montrer que: $(\forall x \in [0;1])$ $x - x^2 \in G$

b) En déduire que: $\left[0; \frac{1}{4}\right] \subset G$

4) a) Montrer que: $(\forall x \in \mathbb{R})$ ($\exists n \in \mathbb{Z}$) $\frac{x}{n} \in [0; \frac{1}{4}]$ b) En déduire que: $\mathbb{R} \subset G$

5) Montrer que: $(\forall x \in [0;1])$ $i(x - x^2) \in G$

6) Montrer que: $G = \mathbb{C}$

Partie C:

On considère l'ensemble suivant:

$$E = \left\{ M(a; b) = \begin{pmatrix} a & -b \\ \beta b & a + \alpha b \end{pmatrix} / (a; b) \in \mathbb{R}^2 \right\}$$

où $\alpha$ et $\beta$ deux réels fixés.

1) Montrer que $(E; +; \times)$ est un anneau commutatif.

2) Montrer que si $\alpha^2 - 4\beta < 0$, alors $(E; +; \times)$ est un corps commutatif.

3) On suppose dans cette question que: $\alpha = 2$ et $\beta =$ a) On considère l'application $d$ définie par:

$$d: \quad E \quad \rightarrow \quad \mathbb{R}^*$$

$$M(a; b) \mapsto \det(M(a; b))$$

Montrer que $d$ est un morphisme de $(E; \times) \det(\mathbb{R}^*; \times)$.

b) On considère l'ensemble:

$$F = \{ M(a; b) \in E \mid \det(M(a; b)) = 1 \}$$

Déterminer la structure de $(F; \times)$.

c) Résoudre dans l'intervalle $[0; 2\pi[$:

$$\det\left( M\left( \frac{1}{2} \cos x; \frac{\sqrt{3}}{2} \sin x \right) \right) = \frac{3}{4}$$

**Devoir 3.**
**Partie A :**
Pour tous $(a; b)$ et $(a'; b')$ de $\mathbb{C} \times \mathbb{C}^*$, on pose :

$$(a; b) \top (a'; b') = (aa'; ab' + b)$$

1) Montrer que $\top$ est une loi de composition interne dans $\mathbb{C} \times \mathbb{C}^*$.
2) Justifier que $\mathsf{T}$ n'est pas commutative.
3) Montrer que $(\mathbb{C}\times \mathbb{C}^*;\top)$ est un groupe.
4) Montrer que $(\mathbb{R}\times \mathbb{R}^{*};\top)$ est un groupe.

**Partie B :**
Pour tout $(a; b) \in \mathbb{C} \times \mathbb{C}^*$, on considère les applications $f_{(a;b)}$ et $g_{(a;b)}$ définie de $\mathbb{C}$ dans $\mathbb{C}$ par :

$$f_{(a;b)}(z) = az + b \quad \text{et} \quad g_{(a;b)}(z) = a\overline{z} + b$$

et on considère les ensembles :

$$F = \{f_{(a;b)} / (a; b) \in \mathbb{C}^* \times \mathbb{C}\}$$

$$G = \{g_{(a;b)} / (a; b) \in \mathbb{C}^* \times \mathbb{C}\} \text{ et } H = F \cup G$$

1) a) Montrer que l'opération « composition des applications $o$ » est une loi de composition interne dans l'ensemble $F$.
b) On considère l'application $\Phi$ de $\mathbb{C}\times \mathbb{C}^*$ dans $F$ qui, à tout élément $(a;b)\in \mathbb{C}\times \mathbb{C}^*$, associe l'application $f_{(a;b)}$ de $F$.

Montrer que l'application $\Phi$ est un isomorphisme de $(\mathbb{C} \times \mathbb{C}^*; \top)$ dans $(F; o)$.

c) Déterminer la structure de $(F; o)$ puis déterminer son élément neutre et $\left(f_{(a; b)}\right)^{-1}$ pour tout élément $(a; b)$ de $\mathbb{C} \times \mathbb{C}^*$.
d) On pose: $ E = \left\{f_{(a;b)} / (a;b) \in \mathbb{R}^* \times \mathbb{R}\right\} $

Montrer que $(E; o)$ est un groupe.

2) Montrer que $\ll o\gg n$ est pas une loi de composition interne dans l'ensemble $G$
3) a) Montrer que $\ll o\gg$ est une loi de composition interne dans l'ensemble $H$

b) Montrer que $(H; o)$ est un groupe non commutatif.

**Partie C :**
Pour tout $(a; b) \in \mathbb{R} \times \mathbb{R}^*$, on considère la fonction affine $h_{(a;b)}$ définie sur $\mathbb{R}$ par : $h_{(a;b)}(x) = ax + b$

et on considère l'ensemble :

$$A = \{h_{(a;b)} / (a; b) \in \mathbb{R}^* \times \mathbb{R}\}$$

1) Montrer que $\ll o\gg$ est une loi de composition interne dans l'ensemble $A$
2) Exhiber un isomorphisme de $(\mathbb{R} \times \mathbb{R}^{*}; \top)$ dans $(A; o)$ puis en déduire la structure de $(A; o)$.

**Devoir 4.**
On rappelle que $(\mathbb{M}_2(\mathbb{R}); +; \times)$ est un anneau de zéro

$$O = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} \text{ et d'unité } I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}.$$

Pour toute matrice $M = \begin{pmatrix} a & c \\ b & d \end{pmatrix}$ de $\mathbb{M}_2(\mathbb{R})$, on pose :

$\det M = ad - bc$ (c'est le déterminant de $M$)

On considère les ensembles suivants :

$$\begin{aligned} G &= \{M \in \mathbb{M}_2(\mathbb{R}) / \det M \neq 0\} \\ G^+ &= \{M \in \mathbb{M}_2(\mathbb{R}) / \det M > 0\} \\ S &= \{M \in \mathbb{M}_2(\mathbb{R}) / \det M = 1\} \end{aligned}$$

1) Montrer que l'application :

$$\begin{aligned} \det : (\mathbb{M}_2(\mathbb{R}); \times) &\to (\mathbb{R}; \times) \\ M &\mapsto \det M \end{aligned}$$

est un morphisme.

2) a) Montrer que $(G; \times)$ est un groupe.

b) Montrer que $\left(G^{+};\times\right)$ est un sous-groupe de $\left(G;\times\right)$.
c) Montrer que $(S; \times)$ est un sous-groupe de $\left(G^{+}; \times\right)$.

3) On note $M^{-1}$ l'inverse de $M$ dans $(G; \times)$.

Montrer que : $(\forall M \in G)(\forall A \in G^+) \ MAM^{-1} \in G^+$

4) a) Vérifier que $(\{-1; 1\}; \times)$ est un groupe commutatif.

b) Montrer que l'application :

$$f: (G; \times) \rightarrow (\{-1; 1\}; \times)$$

$$M \mapsto f(M) = \frac{\det M}{|\det M|}$$

est un morphisme surjectif.

c) Déterminer l'ensemble :

$$K = \{M \in G / f(M) = 1\}$$

5) On considère l'ensemble suivant :

$$E = \left\{ M(\theta) = \begin{pmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{pmatrix} / \theta \in \mathbb{R} \right\}$$

a) Montrer que $(E; \times)$ est un sous-groupe de $(S; \times)$.
b) Soit $\theta \in \mathbb{R}$ et $n\in \mathbb{N}^*$. Calculer $\left(M(\theta)\right)^n$ ou:

$$(M(\theta))^n = \underbrace{M(\theta) \times M(\theta) \times \dots \times M(\theta)}_{n \text{ fois}}$$

6) Soit $(a; b) \in \mathbb{R}^2$.

Montrer qu'il existe $r \in \mathbb{R}^+$ et $\theta \in \mathbb{R}$ tel que :

$$\begin{pmatrix} a & b \\ -b & a \end{pmatrix} = \begin{pmatrix} r & 0 \\ 0 & r \end{pmatrix} \times \begin{pmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{pmatrix} = \begin{pmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{pmatrix} \times \begin{pmatrix} r & 0 \\ 0 & r \end{pmatrix}$$

7) On pose : $F = \left\{ \begin{pmatrix} a & b \\ -b & a \end{pmatrix} / (a; b) \in \mathbb{R}^2 \right\}$

et on considère l'application :

$$g: \mathbb{C} \rightarrow F$$

$$z = a + ib \mapsto M_{(a; b)} = \begin{pmatrix} a & b \\ -b & a \end{pmatrix}$$

a) Calculer $ g(1), g(i) $ et $ g(\overline{z}) $ avec: $ z = a + ib $
b) Montrer que $g$ est bijective.
c) Montrer que $(F; + )$ et $\left(F - \{0\} ;\times\right)$ sont des groupes commutatif.
d) Calculer $\left(M_{(a; b)}\right)^n$ avec $n\in \mathbb{N}$ et $(a;b)\in \left(\mathbb{R}^{*}\right)^{2}$
e) Résoudre dans $F$ l'équation d'inconnue $M$:

$$(M - I)(M - J) = O$$

$$\text{avec : } O = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}; I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}; J = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$$

**Devoir 5.**
On considère dans $\mathbb{M}_2(\mathbb{R})$ les matrices suivantes :

$$I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \quad \text{et} \quad J = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$$

Soit $E$ l'ensemble :

$$E = \{M \in \mathbb{M}_2(\mathbb{R}) / M = xI + yJ; (x; y) \in \mathbb{R}^2\}$$

1) Montrer que $(E; + )$ est un groupe commutatif.
2) a) Montrer que $E$ est une partie stable dans $\left(\mathbb{M}_2(\mathbb{R});\times\right)$.

b) Montrer que $(E; +; \times)$ est un anneau commutatif non intègre.

3) a) Déterminer $F$ l'ensemble des éléments de $E$ qui admettent un inverse dans $\left(\mathbb{M}_2(\mathbb{R});\times\right)$.
b) Montrer que $(E; \times)$ est un groupe commutatif.
4) On définit sur l'ensemble $ G = \mathbb{R}^* \times \mathbb{R} $ une loi de composition interne $ \mathsf{T} $ comme suit:

Pour tous $(x; y)$ et $(a; b)$ de $(x; y)$ :

$$(a; b)\mathsf{T}(x; y) = (ax; ay + bx)$$

Et on considère l'application $\varphi$ de $F$ dans $G$ défini par : $(\forall (xI + yJ) \in F) \quad \varphi(xI + yJ) = (x; y)$

a) Montrer que $\varphi$ est un isomorphisme de $(F; \times)$ dans $(G; \mathsf{T})$.
b) Quelle est la structure de $(G; \mathsf{T})$?
c) Soit $(x; y) \in G$. Déterminer le symétrique de $(x; y)$ dans $(G; \mathsf{T})$.

5) Pour tout $(x; y) \in \mathbb{R}^* \times \mathbb{R}$, on pose : $M = \begin{pmatrix} x & y \\ 0 & x \end{pmatrix}$

a) Calculer $M^2$ et $M^3$.
b) En utilisant un raisonnement par récurrence, trouver une expression de $ M^n $ pour tout $ n \geq 2 $.
c) Soit $(x; y) \in G$. Déterminer $(x; y)^n$ pour tout

$$n \geq 2 \text{ avec : } (x; y)^n = \underbrace{(x; y)\mathsf{T}(x; y)\mathsf{T} \dots \mathsf{T}(x; y)}_{n \text{ fois}}$$

#### Se préparer aux examens
**Problème 1.**

On rappelle que $$(\mathbb{M}_2(\mathbb{R}); +; \times)$$ est un anneau de zéro
$$O = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$ et d'unité $$I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$, et que $$(\mathbb{C}; +; \times)$$

est un corps commutatif.

Pour tous $$a$$ et $$b$$ de $$\mathbb{R}$$, on pose :

$$M(a; b) = \begin{pmatrix} a & a - b \\ b & a + b \end{pmatrix}$$

et on considère l'ensemble :

$$E = \{M(a; b) / (a; b) \in \mathbb{R}^2\}$$

1) Montrer que $E$ est un sous-groupe de $\left(\mathbb{M}_2\left(\mathbb{R}\right); + \right)$.
2) Calculer $J^2 = J \times J$ ou $J = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ puis en déduire que $E$ n'est pas une partie stable de $\left(\mathbb{M}_2(\mathbb{R}); \times\right)$.
3) On définit sur l'ensemble $\mathbb{M}_2(\mathbb{R})$ une loi de composition interne $\star$ par: $A \star B = A \times N \times B$

avec : $$N = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$$

et on considère l'application $$\varphi$$ de $$\mathbb{C}^*$$ dans $$\mathbb{M}_2(\mathbb{R})$$
et qui, à chaque nombre complexe non nul $$a + ib$$
$$(a$$ et $$b$$ deux réels), la matrice $$M(a; b)$$.

a) Montrer que $\varphi$ est un morphisme de $(\mathbb{C}^*; \times)$ dans $\mathbb{M}_2(\mathbb{R})$.
b) On pose: $E^{*} = E - \{O\}$.

Montrer que : $$\varphi(\mathbb{C}^*) = E^*$$

c) Montrer que $$(E^*; \star)$$ est un groupe commutatif.

4) Montrer que pour tout $$(A; B; C) \in E^3$$ :

$$A \star (B + C) = A \star B + A \star C$$

5) En déduire de ce qui précède que $$(E; +; \star)$$ est un corps commutatif.
**Examen National 2014 (Session Normale).**

**Problème 2.**
On rappelle $$(\mathbb{M}_3(\mathbb{R}); +; \times)$$ est un anneau non commutatif.

On considère l'ensemble :

$$E = \left\{ M(x) = \begin{pmatrix} 1 & 0 & 0 \\ x & 1 & 0 \\ x^2 & 2x & 1 \end{pmatrix} / x \in \mathbb{R} \right\}$$

1) Montrer que $E$ est une partie stable de $\left(\mathbb{M}_3\left(\mathbb{R}\right); \times\right)$.
2) a) Montrer que l'application $\varphi$ qui, à tout réel $x$, associe la matrice $M(x)$ de $E$, est un isomorphisme de $(\mathbb{R}; +)$ dans $(E; \times)$.

b) En déduire que $$(E; \times)$$ est un groupe commutatif.

c) Déterminer $$(M(x))^{-1}$$, la matrice inverse de $$M(x)$$.

d) Résoudre dans $$E$$ l'équation $$A^2 X = B$$ où :
$$A = M(2)$$, $$B = M(12)$$ et $$A^3 = A \times A \times A$$

3) Montrer que l'ensemble $$F = \{M(\ln x) / x \in \mathbb{R}^*\}$$ est sous-groupe de groupe $$(E; \times)$$.
**Examen National 2010 (Session De Rattrapage).**

**Problème 3.**
On rappelle que $$(\mathbb{M}_3(\mathbb{R}); +; \times)$$ est un anneau d'unité

$$I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$, et que $$(\mathbb{C}; +; \times)$$ est un corps com-

mutatif.

Pour tout $$(x; y) \in \mathbb{R}^2$$, on pose :

$$M(x; y) = \begin{pmatrix} x + y & 0 & -2y \\ 0 & 0 & 0 \\ y & 0 & x - y \end{pmatrix}$$

et $$E = \{M(x; y) / (x; y) \in \mathbb{R}^2\}$$.

1) Montrer que $E$ est un sous-groupe de $\left(\mathbb{M}_3\left(\mathbb{R}\right); + \right)$.
2) Vérifier que pour tous $(x; y)$ et $(x'; y')$ de $\mathbb{R}^2$:

$$M(x; y) \times M(x'; y') = M(xx' - yy'; xy' + yx')$$

3) On pose $E^* = E - \{M(0;0)\}$ et on considère l'application $\varphi : \mathbb{C}^* \mapsto E$ qui, à chaque nombre complexe $x + iy$ ($x$ et $y$ deux réels), la matrice $M(x; y)$ de $E$.

a) Montrer que l'application $\varphi$ est un morphisme de $(\mathbb{C}^*; \times)$ dans $(E; \times)$.

b) En déduire que $(E^*; \times)$ est un groupe commutatif et que son élément neutre est la matrice $M(1;0)$.

4) Montrer que $(E; +; \times)$ est un corps commutatif.

5) On pose : $A = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.

a) Calculer $A \times M(x; y)$ pour $M(x; y) \in E$.

b) En déduire qu'aucun élément de $E$ n'est inversible dans $(\mathbb{M}_3(\mathbb{R}); \times)$.
**Examen National 2016 (Session Normale).**

**Problème 4.**
On rappelle que $(\mathbb{M}_3(\mathbb{R}); +; \times)$ est un anneau d'unité
$I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ et que $(\mathbb{R}; +)$ est un groupe commutatif.

Soit $a$ un réel strictement positif.

Soit $E$ le sous-ensemble de $\mathbb{M}_3(\mathbb{R})$ définie par :

$$E = \left\{ M(x) = \begin{pmatrix} a^x & 0 & 0 \\ 0 & 1 & x \\ 0 & 0 & 1 \end{pmatrix} \ / \ x \in \mathbb{R} \right\}$$

1) Montrer que $E$ est stable dans $\left(\mathbb{M}_3\left(\mathbb{R}\right); \times\right)$.
2) Montrer que l'application $\varphi$ définie par:

$$\varphi(x) = M(x)$$

est un isomorphisme de $(\mathbb{R}; +)$ dans $(E; \times)$.

3) Montrer de deux façons différentes que $(E; \times)$ est un groupe commutatif.
**Examen National 1997 (Session Normale).**

**Problème 5.**
**Partie A :**
Pour tout $x$ et $y$ de $\mathbb{R} - \left\{\frac{1}{2}\right\}$, on pose :

$$x * y = x + y - xy$$

1) Montrer que $\ast$ est une loi de composition interne dans $\mathbb{R} - \left\{\frac{1}{2}\right\}$.
2) Montrer que la loi $\ast$ est commutative et associative
3) Montrer que $\left(\mathbb{R} - \left\{\frac{1}{2}\right\} ;*\right)$ est un groupe commutatif.
4) Montrer que pour tout $x \in \mathbb{R} - \left\{\frac{1}{2}\right\}$ et pour tout

entier $n \ge 2$ : $\underbrace{x * x * \dots * x}_{n \text{ fois}} = \frac{1}{2} \left(1 - (1 - 2x)^n\right)$

**Partie B :**
Pour tout $x \in \mathbb{R} - \left\{\frac{1}{2}\right\}$, on pose :

$$A(x) = \begin{pmatrix} 1 - x & 0 & x \\ 0 & 1 & 0 \\ x & 0 & 1 - x \end{pmatrix}$$

Soit $\mathcal{E}$ l'ensemble : $\mathcal{E} = \left\{ A(x) / x \in \mathbb{R} - \left\{\frac{1}{2}\right\} \right\}$

1) Montrer que $\mathcal{E}$ est une partie stable de $\left(\mathbb{M}_2\left(\mathbb{R}\right);\right)$
2) On considère l'application :

$$f : \mathbb{R} - \left\{\frac{1}{2}\right\} \to \mathcal{E}$$

$$x \mapsto A(x)$$

a) Montrer que l'application $f$ est un isomorphisme de $\left(\mathbb{R} - \left\{\frac{1}{2}\right\}; *\right)$ dans $(\mathcal{E}; \times)$.

b) En déduire une structure de $(\mathcal{E};\times)$.
c) Soit $n\in \mathbb{N}^*$ et $B = A\left(-\frac{1}{2}\right)$. Montrer que:

$$B^n = A\left(\frac{1 - 2^n}{2}\right) \text{ et } \left(B^n\right)^{-1} = A\left(\frac{1}{2} - \frac{1}{2^{n+1}}\right)$$
**Examen National 2000 (Session Normale).**

**Problème 6.**

Les parties A et B sont indépendantes.

**Partie A :**

Pour tout x et y de l'intervalle G = ]1; 2[, on pose :

$$x * y = \frac{2(x-1)(y-1) + (x-2)(y-2)}{(x-1)(y-1) + (x-2)(y-2)}$$

1) Montrer que $\star$ est une loi de composition interne sur l'ensemble $G$.
2) On rappelle que $(\mathbb{R}_+^* ;\times)$ est un groupe commutatif. On considère l'application $f$ de $\mathbb{R}_+^*$ dans $G$ définie

par : $$f(x) = \frac{x+2}{x+1}$$

a) Montrer que $f$ est un morphisme de $\left(\mathbb{R}_{+}^{*};\times\right)$ dans $(G;*)$
b) En déduire que $(G;*)$ est un groupe commutatif et déterminer son élément neutre.

Partie B:

On rappelle que (M₃(R); +; ×) est un anneau de zéro

$$O = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \text{ et d'unité } I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \text{ et que}$$

(M₃(R); +; •) est un espace vectoriel réel.

On pose : $$A = \begin{pmatrix} 0 & 3 & 2 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$.

1) a) Vérifier que $ A^3 = O $ puis en déduire que $ A $ est diviseur de zéro dans l'anneau $ (\mathbb{M}_3(\mathbb{R}); +; \times) $.
b) Vérifier que: $\left(A^{2} - A + I\right)\left(A + I\right) = I$ puis en déduire que la matrice $A + I$ admet un inverse dans $\left(\mathbb{M}_{3}\left(\mathbb{R}\right); + ;\times\right)$ que l'on déterminera.
2) Pour tout $(a; b) \in \mathbb{R}^2$, on pose: $M(a; b) = aI + bA$ et on considère l'ensemble:

$$E = \{M(a; b) / (a; b) \in \mathbb{R}^2\}$$

Montrer que (E; +; •) est un espace vectoriel réel et déterminer une base
**Examen National 2013 (Session De Rattrapage).**
**Problème 7.**
Les parties A et B sont indépendantes.

Partie A:

Dans l'anneau (M₃(R); +; ×), on considère les deux matrices :

$$A = \begin{pmatrix} \frac{\sqrt{5}-1}{2} & 0 & 0 \\ 0 & -2 & -1 \\ 0 & 1 & 1 \end{pmatrix} \text{ et } I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

1) Calculer $I - A$ et $A^2$
2) En déduire que la matrice $ A $ est inversible et déterminer son inverse.

Partie B:

Pour tous a et b de l'intervalle I = ]1; +∞[, on pose :

$$a * b = \sqrt{a^2 b^2 - a^2 - b^2 + 2}$$

1) Vérifier que pour tout (x; y) ∈ I² :

$$x^2 y^2 - x^2 - y^2 + 2 = (x^2 - 1)(y^2 - 1) + 1$$

2) Montrer que $\star$ est une loi de composition interne dans $I$.
3) On rappelle que $\left(\mathbb{R}_{+}^{*};\times\right)$ est un groupe commutatif. On considère l'application:

$$\begin{array}{l} \varphi : \mathbb{R}_{+}^{*} \to I \\ x \mapsto \sqrt{x+1} \end{array}$$

a) Montrer que l'application $\varphi$ est un isomorphisme de $\left(\mathbb{R}_{+}^{*};\times\right)$ dans $(I;*)$
b) En déduire la structure de $(I;*)$
c) Montrer que l'ensemble $\Gamma = \left\{\sqrt{1 + 2^m} / m \in \mathbb{Z}\right\}$ est un sous-groupe de $(I;*)$.
**Examen National 2012 (Session Normale).**

**Problème 8.**
On rappelle que $(\mathbb{M}_3(\mathbb{R}); + ;\times)$ est un anneau d'unité

\[
I = \left( \begin{array}{c c c} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{array} \right), \text { et   que } (\mathbb {C}; +; \times) \text { est   un   corps   com- }
\]

mutatif.

Pour tout $z = x + iy$ avec $(x;y)\in \mathbb{R}^2$ , on pose:

\[
M (z) = \left( \begin{array}{c c c} x + 2 y & 0 & 5 y \\ 0 & 1 & 0 \\ - y & 0 & x - 2 y \end{array} \right)
\]

et on considère l'ensemble $E=\{M(z)/z\in\mathbb{C}\}$.

1) On munit E d'une loi de composition interne comme suit : Pour tout  $ (z; z') \in \mathbb{C}^{2} $ :

\[
M (z) * M \left(z ^ {\prime}\right) = M (z) + M \left(z ^ {\prime}\right) - M (0)
\]

Montrer que $(E;*)$ est un groupe commutatif.

2) On considère l'application $\varphi$ définie de $\mathbb{C}^{\bullet}$ dans $E$ et qui, à tout $z \in \mathbb{C}^{\bullet}$, on associe la matrice $M(z)$.

a) Montrer que $\varphi$ est un morphisme de $(\mathbb{C}^{\bullet};\times)$ dans $(E;\times)$.

b) Montrer que $\left(E - \{M(0)\}; *\right)$ est un groupe commutatif.

3) Montrer que $(E; *; \times)$ est un corps commutatif.

**Examen National 2016 (Session De Rattrapage).**

**Problème 9.**
On rappelle que $(\mathbb{M}_2(\mathbb{R}); + ; \times)$ est un anneau d'unité $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$, et que $(\mathbb{R}; +)$ est un groupe commutatif.

Pour tout réel x, on pose :  $ M(x) = \begin{pmatrix} 1 - x & x \\ -2x & 1 + 2x \end{pmatrix} $

et on considère l'ensemble: $ E = \{M(x) / x \in \mathbb{R}\} $

On munit E d'une loi de composition interne T donnée par :

\[
\forall (x; y) \in \mathbb {R} ^ {2} M (x) \top M (y) = M (x + y + 1)
\]

1) Soit $\varphi$ l'application définie de $\mathbb{R}$ dans $E$ par:

\[
(\forall x \in \mathbb {R}) \varphi (x) = M (x - 1)
\]

a) Montrer que $\varphi$ est un morphisme de $(\mathbb{R}; + )$ dans $(E; \top)$.

b) Montrer que $(E; \top)$ est un groupe commutatif.

2) a) Montrer que pour tout $(x;y)\in \mathbb{R}^2$

\[
M (x) \times M (y) = M (x + y + x y)
\]

b) En déduire que $E$ est stable dans $(\mathbb{M}_{2}(\mathbb{R});\times)$ et que la loi « × » est commutatif dans $E$.

c) Montrer que la loi « × » est distributive par rapport à la loi « T » dans E.

d) Vérifier que $ M(-1) $ est l'élément neutre dans $ (E; \top) $ et que $ I $ est l'élément neutre dans $ (E; \times) $.

3) a) Vérifier que pour tout $x \in \mathbb{R} - \{-1\}$:

\[
M (x) \times M \left(\frac {- x}{1 + x}\right) = I
\]

b) Montrer que $(E; \top; \times)$ est un corps commutatif.

**Examen National 2015 (Session Normale).**

**Problème 10.**
On rappelle que $(\mathbb{M}_2(\mathbb{R}); + ; \times)$ est un anneau d'unité

\[
I = \left( \begin{array}{c c} 1 & 0 \\ 0 & 1 \end{array} \right). \text { Soit } F \text { l'ensemble des matrices } M (x; y)
\]

de $\mathbb{M}_{2}(\mathbb{R})$ telles que :

\[
M (x; y) = \left( \begin{array}{c c} x & y \\ 0 & \frac {1}{x} \end{array} \right) \text { avec } (x; y) \in \mathbb {R} ^ {*} \times \mathbb {R}
\]

1) a) Montrer que $F$ est une partie stable de $(\mathbb{M}_2(\mathbb{R}); \times)$.

b) Montrer que $(F; \times)$ est un groupe non commutatif.

2) Soit $G$ l'ensemble des matrices $M(x;0)$ de $F$ tel que $x \in \mathbb{R}^*$.

Montrer que $G$ est un sous-groupe de $(F; \times)$.

3) Soit $E = \mathbb{R}^* \times \mathbb{R}$. On munit l'ensemble $E$ d'une loi de composition interne $\bot$ définie par :

Pour tous $(x; y) \in E$ et $(a; b) \in E$ :

$$(x; y) \perp (a; b) = \left( x a; x b + \frac{y}{a} \right)$$

On considère l'application :

$$\varphi : (F; \times) \rightarrow (E; \bot)$$

$$M(x; y) \mapsto \varphi(M(x; y)) = (x; y)$$

a) Montrer que $(1;1)\perp (2;3)$ et $(2;3)\perp (1;1)$.
b) Montrer que $\varphi$ est un isomorphisme.
c) En déduire la structure de $(E; \bot)$.
**Examen National 2009 (Session Normale).**

**Problème 11.**
On pose $J = ]-1; 1[$.

**Partie A :**
Pour tous éléments $a$ et $b$ de l'intervalle $J$, on pose :

$$a * b = \frac{a+b}{1+ab}$$

1) Vérifier que pour tout $(a; b) \in J^2: 1 + ab > 0$ puis en déduire que $\star$ est une loi de composition interne dans $J$.
2) a) Montrer que la loi $\star$ est commutative et associative dans $J$.
b) Montrer que $(J; \star)$ admet un élément neutre que l'on déterminera.
c) Montrer que $(J; \star)$ est un groupe commutatif.

**Partie B :**
On considère l'application $f$ définie sur $\mathbb{R}$ par :

$$f(x) = \frac{e^x - 1}{e^x + 1}$$

1) Montrer que $f$ est bijective de $\mathbb{R}$ dans $J$.
2) Soit $ g $ l'application réciproque de l'application $ f $ (la détermination de $ g $ n'est pas demandée)

Pour tout $(x; y) \in J^2$, on pose :

$$x \perp y = f(g(x) \times g(y))$$

$$(J^*; \bot) \text{ où } J^* = J - \{0\}.$$

3) On rappelle que $(\mathbb{R}^*; \times)$ est un groupe commutatif, et on admet que $\bot$ est distributive par rapport à la loi $*$ dans $J$.

Montrer que $(J; \star; \bot)$ est un corps commutatif.
**Examen National 2014 (Session De Rattrapage).**

**Problème 12.**
**Partie A :**
Soit $E = \mathbb{R} - \left\{ \frac{1}{\sqrt{2}} \right\}$. Pour tout $(a; b) \in E^2$, on pose :

$$a \perp b = a+b-ab\sqrt{2}$$

1) a) Vérifier que pour tout $(a; b) \in E^2$ :

$$a \perp b = \frac{1}{\sqrt{2}} - \frac{1}{\sqrt{2}}(a\sqrt{2}-1)(b\sqrt{2}-1)$$

b) En déduire que $\bot$ est une loi de composition interne dans $E$.
2) Montrer que $(E; \bot)$ est un groupe commutatif.

**Partie B :**
On rappelle que $(\mathbb{M}_2(\mathbb{R}); +; \times)$ est un anneau d'unité

$$I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}.$$

Soit $\mathcal{F}$ l'ensemble des matrices de $\mathbb{M}_2(\mathbb{R})$ qui s'écrivent sous la forme :

$$M(a) = \frac{1}{\sqrt{2}} \begin{pmatrix} \sqrt{2}-a & a \\ a & \sqrt{2}-a \end{pmatrix} \text{ avec } a \in \mathbb{R}$$

On pose : $A = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix}$

1) a) Vérifier que: $ A^2 = -2A $ et $ M(a) = I + \frac{a}{\sqrt{2}} A $
b) Montrer que $\mathcal{F}$ est stable dans $(\mathbb{M}_2(\mathbb{R});\times)$.
2) On considère l'application :

$$\begin{array}{l} \varphi : (E; \bot) \rightarrow (\mathcal{F}; \times) \\ a \mapsto \varphi (a) = M (a) \end{array}$$

a) Montrer que $\varphi$ est un isomorphisme.
b) En déduire la structure de $(\mathcal{F};\times)$
**Examen National 2007 (Session Normale).**

**Problème 13.**
On munit l'ensemble $\mathbb{R}$ d'une loi de composition interne comme suit : $(\forall (x; y) \in \mathbb{R}^2) \ x * y = x + y - 3xy$

1) a) Vérifier que pour tout $(x; y) \in \mathbb{R}^2$ :

$$(1 - 3x)(1 - 3y) = 1 - 3(x * y)$$

b) Montrer que $\left( \mathbb{R} - \left\{ \frac{1}{3} \right\} ; * \right)$ est un groupe commutatif.

2) Soit $\varphi$ l'application définie de $\mathbb{R} - \left\{ \frac{1}{3} \right\}$ dans $\mathbb{R}^*$ :

$$\varphi (x) = 1 - 3x$$

a) Montrer que $\varphi$ est un isomorphisme de

$$\left( \mathbb{R} - \left\{ \frac{1}{3} \right\} ; * \right) \text{ dans } (\mathbb{R}^*; \times).$$

b) Montrer que: $\varphi^{-1}\left(\mathbb{R}_{+}^{*}\right) = \left]-\infty ;\frac{1}{3}\right[$
c) Montrer que $\left]-\infty ;\frac{1}{3}\right[ ;*$ est un sous-groupe

de groupe $\left( \mathbb{R} - \left\{ \frac{1}{3} \right\} ; * \right)$.

3) Pour tout $x \in \mathbb{R} - \left\{ \frac{1}{3} \right\}$ et pour tout $n \in \mathbb{N}$, on pose :

$$x^{(0)} = 0 \text{ et } x^{(n+1)} = x^{(n)} * x$$

a) Montrer que: $\varphi \left(x^{(n)}\right) = \left(\varphi (x)\right)^{(n)}$
b) En déduire $ x^{(n)} $ en fonction de $ x $ et $ n $.

4) On munit l'ensemble $\mathbb{R}$ d'une loi de composition interne T comme suit :

$$(\forall (x; y) \in \mathbb{R}^2) \ x \top y = x + y - \frac{1}{3}$$

a) Montrer que $(\mathbb{R};\top)$ est un groupe commutatif.
b) Montrer que $(\mathbb{R};\top ;*)$ est un corps commutatif.
**Examen National 2008 (Session de rattrapage).**

**Problème 14.**
Les parties A et B sont indépendantes.

Partie A :

Dans l'anneau $(\mathbb{M}_3(\mathbb{R}); +; \times)$, on considère les deux matrices :

$$A = \begin{pmatrix} \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} & 0 \\ \frac{\sqrt{2}}{2} & -\frac{\sqrt{2}}{2} & 0 \\ 0 & 0 & 1 \end{pmatrix} \text{ et } I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

On pose : $A^0 = I$ , $A^1 = A$ , $A^2 = A \times A$

et $A^{n+1} = A^n \times A$ pour tout $n \in \mathbb{N}$

1) Montrer que: $(\forall k \in \mathbb{N}) A^{2k} = I$
2) Montrer que la matrice $A$ est inversible et déterminer son inverse.

Partie B :

Soit $a$ un nombre réel.

Pour tous $x$ et $y$ de l'intervalle $I = ]a; +\infty[$, on pose :

$$x * y = (x - a)(y - a) + a$$

1) a) Montrer que $\star$ est une loi de composition interne dans l'intervalle $I$.
b) Montrer que $\star$ est commutative et associative.
c) Montrer que $(I; \star)$ admet un élément neutre que l'on déterminera.
2) Montrer que $(I; \star)$ est un groupe commutatif.
3) On considère l'application :

$$\begin{array}{l} \varphi : I \rightarrow \mathbb{R}_+^* \\ x \mapsto \frac{1}{x - a} \end{array}$$

a) Montrer que $\varphi$ est un isomorphisme de $(I; \star)$ dans $(\mathbb{R}_+^*; \times)$.

b) Résoudre dans $I$ l'équation : $x * x * x = a^3 + a$
**Examen National 2011 (Session Normale).**

## Résumé

- **Groupe.** Une loi associative munie d'un élément neutre et pour laquelle chaque élément possède un symétrique définit une structure de groupe.
- **Sous-groupe.** Une partie non vide $H$ d'un groupe multiplicatif $G$ est un sous-groupe lorsque $xy^{-1}\in H$ pour tous $x,y\in H$.
- **Morphisme de groupes.** Une application $f:G\to G'$ est un morphisme si $f(xy)=f(x)f(y)$ ; elle conserve le neutre et les symétriques.
- **Anneau.** Dans $(A,+,\times)$, la loi $+$ forme un groupe commutatif, tandis que $\times$ est associative et distributive par rapport à $+$.
- **Anneau intègre.** Un anneau non nul est intègre lorsqu'il ne possède aucun diviseur de zéro.
- **Corps.** Un anneau unitaire non nul dans lequel tout élément non nul est inversible est un corps.
- **Transfert de structure.** Un isomorphisme permet de transporter les propriétés algébriques d'une structure connue vers une nouvelle structure.

## Auto-évaluation

- Vérifier les axiomes d'un groupe et déterminer son neutre et ses symétriques.
- Utiliser la caractérisation d'un sous-groupe.
- Étudier un morphisme ou un isomorphisme de groupes.
- Vérifier les axiomes d'un anneau et appliquer ses règles de calcul.
- Identifier les diviseurs de zéro et décider si un anneau est intègre.
- Reconnaître une structure de corps et exploiter les inverses multiplicatifs.
- Transférer une structure par une bijection compatible avec les lois.