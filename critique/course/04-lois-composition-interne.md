# Chapitre 4 : Lois de composition interne

## Histoire

Après son doctorat, Abel ne parvient pas à trouver un poste, ses conditions de vie sont de plus en plus précaires et sa santé se fait fragile : il est atteint de tuberculose. Malgré des déplacements à Paris et à Berlin, ses travaux ne sont toujours pas perçus à leur juste valeur. Dans ses dernières semaines, il n'a plus assez de force pour quitter son lit. Il décède le 5 avril 1829, à même pas 27 ans, alors qu'un ami venait juste de lui trouver un poste à Berlin.

C'est Jacobi qui comprendra tout le génie de ce jeune mathématicien. Abel avait notamment démontré, à l'âge de 19 ans, l'impossibilité de résoudre par radicaux les équations algébriques de degré 5, ce que son contemporain Galois généralisera à tout entier n supérieur ou égal à 5. À titre posthume, Abel recevra en 1830 le grand prix de Mathématiques de l'Institut de France.

Source : https://fr.wikipedia.org

> **Niels Henrik Abel** (1802–1829)
> **Carl Gustav Jacobi** (1804–1851)

## Objectifs

- Maîtriser les opérations associées aux structures algébriques usuelles.
- Vérifier qu'une opération est une loi de composition interne sur un ensemble.
- Étudier la stabilité, la commutativité, l'associativité, l'élément neutre et les éléments symétrisables.
- Comparer et transporter des structures algébriques à l'aide des morphismes et des isomorphismes.
- Exploiter les lois de composition de fonctions et les opérations matricielles.

## Plan du chapitre

- Activités préparatoires
- **Cours** : loi de composition interne · propriétés d'une loi · morphismes et isomorphismes.
- **Méthodes** : étude d'une loi · stabilité · lois dans $\mathbb{C}$ · morphismes · isomorphismes · calcul matriciel.
- **Exercices et problèmes** : exercices d'application · exercices de perfectionnement · problèmes de synthèse.

## Prérequis

- Ensembles, applications, injections, surjections et bijections.
- Opérations usuelles dans $\mathbb{R}$ et $\mathbb{C}$.
- Composition des applications et fonctions réciproques.
- Calcul matriciel élémentaire.

## Activités préparatoires

### RAPPELS
A) À propos des propriétés sur quelques opérations :

1. Déterminer les propositions vraies et les propositions fausses parmi les propositions suivantes :

(On rappelle que $\mathcal{V}_3$ est l'ensemble des vecteurs de l'espace euclidien)

|  $P_1 : \forall (x; y) \in \mathbb{N}^2 \quad x + y \in \mathbb{N}$ | $P_1 : \forall (x; y) \in \mathbb{N}^2 \quad x - y \in \mathbb{N}$  |
| --- | --- |
|  $P_3 : \forall (\vec{u}; \vec{v}) \in \mathcal{V}_3^2 \quad 2\vec{u} + \vec{v} \in \mathcal{V}_3$ | $P_4 : \forall (\vec{u}; \vec{v}) \in \mathcal{V}_3^2 \quad \vec{u} - \vec{v} \in \mathcal{V}_3$  |
|  $P_5 : \forall (\vec{u}; \vec{v}) \in \mathcal{V}_3^2 \quad \vec{u} \cdot \vec{v} \in \mathcal{V}_3$ | $P_6 : \forall (\vec{u}; \vec{v}) \in \mathcal{V}_3^2 \quad \vec{u} \wedge \vec{v} \in \mathcal{V}_3$  |
|  $P_7 : \forall (z; z') \in (i\mathbb{R})^2 \quad z \cdot z' \in i\mathbb{R}$ | $P_8 : \forall (z; z') \in (i\mathbb{R})^2 \quad z + z' \in i\mathbb{R}$  |
|  $P_9 : \forall (a; b; c) \in \mathbb{R}^3 \quad a - (b - c) = (a - b) - c$ | $P_{10} : \forall (x; y; z) \in (\mathbb{N}^*)^3 \quad x^{(y)'} = (x^y)^y$  |

2. Soit $\mathcal{A}$ l'ensemble des fonctions affines définies sur $\mathbb{R}$. Soit $f$ et $g$ deux fonctions appartenant à $\mathcal{A}$.

a) Montrer que: $f + g\in \mathcal{A}$ et $fog\in \mathcal{A}$
b) A-t-on $f\times g\in \mathcal{A}$ ?Justifier.

B) La multiplication dans l'ensemble des racines cinquième de l'unité :

On considère l'ensemble : $\mathbb{U} = \{z \in \mathbb{C} / z^5 = 1\}$, et on pose pour tout $\lambda \in \mathbb{Z}$ : $\omega_\lambda = e^{\frac{2i\lambda\pi}{5}}$.

1. Vérifier que: $(\forall \lambda \in \mathbb{Z})$ : $\omega_{\lambda} \in \mathbb{U}$.
2. Établir que: $\mathbb{U} = \{\omega_k / k\in \{0;1;2;3;4\} \}$
3. Vérifier que: $(\forall k \in \{0;1;2;3;4\})$ $\omega_{k} = \omega_{1}^{k}$.
4. a) Copier puis replir le tableau ci-contre.
b) Vérifier que pour tout $ k $ et $ k' $ de $ \{0;1;2;3;4\} $,

il existe $p \in \{0; 1; 2; 3; 4\}$ tel que : $\omega_k \times \omega_{k'} = \omega_p$

|  x | $\omega_0$ | $\omega_1$ | $\omega_2$ | $\omega_3$ | $\omega_4$  |
| --- | --- | --- | --- | --- | --- |
|  $\omega_0$ |  |  |  |  |   |
|  $\omega_1$ |  |  |  |  |   |
|  $\omega_2$ |  |  |  |  |   |
|  $\omega_3$ |  |  |  |  |   |
|  $\omega_4$ |  |  |  |  |   |

C) Composition des applications :

1. Soient $(\alpha; \beta) \in (\mathbb{R}^*)^2$, et $\vec{u}$ et $\vec{v}$ deux vecteurs du plan et $\Omega$ un point du plan.

- $ H(\Omega; \alpha) $ est l'homothétie de centre $ \Omega $ est de rapport $ \alpha $.
- $ R(\Omega; \alpha) $ est l'homothétie de centre $ \Omega $ est d'angle $ \alpha $.
- $ t_{\alpha} $ est la translation de vecteur $ \vec{u} $.

On considère les transformations suivantes : $f = t_a \omega t_g$ et $g = R(\Omega; \alpha) o R(\Omega; \beta)$ et $h = H(\Omega; \alpha) o H(\Omega; \beta)$

Déterminer la nature et les éléments caractéristiques de chacune de ces transformations.

2. On considère les applications :

$$\begin{array}{c c} f: [-1; +\infty[ \to \mathbb{R}^+ & g: \mathbb{R}^+ \to [-1; 1[ \\ x \mapsto \sqrt{x+1} & x \mapsto \frac{x-2}{x+2} \end{array}$$ et on pose : $$h = gof$$

a) Montrer que $ f $ et $ g $ sont bijectives et déterminer $ f^{-1} $ et $ g^{-1} $.
b) Montrer que $ h $ est bijective et vérifier que $ h^{-1} = f^{-1}og^{-1} $.

### Loi de composition interne
On considère l'ensemble : $$E = \{0; 1; 2; 3; 4; 5\}$$

Pour tout $$(x; y) \in E \times E$$, on note $$x \oplus y$$ le reste de la division euclidienne du nombre $$x + y$$ par 5.

1. Montrer que pour tout $$(x; y) \in E \times E$$, $$x \oplus y$$ est un élément de $$E$$.
Puisque pour tout $$(x; y) \in E \times E$$, $$x \oplus y$$ est un élément de $$E$$, on dit qu'on a défini une loi de composition interne sur l'ensemble $$E$$.
(Abréviation : L.C.I sur $$E$$).

2. Calculer: $ 2 \oplus 2 $ et $ 4 \oplus 3 $ et $ 4 \oplus 4 $.
3. Compléter le tableau ci-contre.
4. Vérifier que pour tout $(x; y; z) \in E^3$:

$$(x \oplus y) \oplus z = x \oplus (y \oplus z)$$

5. Montrer que : $$(\forall (x; y) \in E \times E) \quad x \oplus y = y \oplus x$$

|  ⊕ | 0 | 1 | 2 | 3 | 4  |
| --- | --- | --- | --- | --- | --- |
|  0 |  | 1 |  |  |   |
|  1 |  |  |  |  |   |
|  2 |  |  |  |  | 1  |
|  3 |  |  |  |  |   |
|  4 |  |  |  | 2 |   |

### PARTIE STABLE D'UN ENSEMBLE MUNI D'UNE L.C.I
A) On considère l'ensemble : $$S = \{a + b\sqrt{2} / (a; b) \in \mathbb{R}^2\}$$.

1. Montrer que $S \neq \emptyset$.
2. Déterminer deux éléments de $S$.
3. Vérifier que $ S \subset \mathbb{R} $ puis montré que la multiplication $ \times $ est une loi de composition interne dans $ S $. Puisque $ S \subset \mathbb{R} $ et que $ \times $ est une loi de composition interne dans $ S $: $ (\forall (x; y) \in S^2) \quad x \times y \in S $ alors on dit que $ S $ est une partie stable de $ \mathbb{R} $ pour la loi $ \times $ (ou que $ S $ est stable dans $ (\mathbb{R}; \times) $).

4. Montrer que $$S$$ est une partie stable de $$(\mathbb{R}; +)$$.

B) On considère l'ensemble $$E = \mathbb{Z}/10\mathbb{Z}$$ et son sous-ensemble $$F = \{\overline{1}; \overline{3}; \overline{5}; \overline{7}; \overline{9}\}$$.

1. Montrer que la partie $F$ est une partie stable pour la loi $\times$ dans $E$.
2. Est-ce-que la partie $F$ est stable dans $(E; + )$ ? Justifier votre reponse.
C) On considère la loi de composition T definie sur $\mathbb{C}$ par: $\left(\forall (z;z^{\prime})\in \mathbb{C}^{2}\right)z\top z^{\prime} = z.z^{\prime} + i(z + z^{\prime}) - (1 + i)$ et soit $\mathcal{D} = \{z\in \mathbb{C} / |z + i|\leq 1\}$. Montrer que $\mathcal{D}$ est une partie stable de $(\mathbb{C};\top)$.

### PROPRIÉTÉS D'UNE LOI DE COMPOSITION INTERNE
A) On considère l'ensemble $E = [1; +\infty[$.

Pour tous $x$ et $y$ de $E$, on pose : $x * y = (x - 1)(y - 1) + 1$

1. Montrer que * est une loi de composition interne sur $E$.
2. Montrer que pour tout $(x; y) \in E^2$ : $x * y = y * x$. On dit alors que la loi * est commutative.
3. Montrer que pour tout $(x; y; z) \in E^3$ : $(x * y) * z = x * (y * z)$. On dit alors que la loi * est associative.
4. Montrer que pour tout $x \in E$ : $x * 2 = 2 * x = x$. On dit que 2 est un élément neutre pour $(E; *)$.
5. Soit $x \in E - \{1\}$. Montrer qu'il existe $x' \in E$ tel que : $x * x' = x' * x = 2$

L'élément $x'$ s'appelle un symétrique de l'élément $x$ pour la loi * dans $E$.

B) On considère la loi de composition interne T définie sur $\mathbb{N}^*$ par : $\left( \forall (n; m) \in (\mathbb{N}^*)^2 \right) n \text{ T } m = n^m$.

1. Montrer que la loi T n'est pas commutative.
2. Montrer que la loi T n'est pas associative.
3. Est-ce que 1 est un élément neutre dans $(\mathbb{N}^*; \mathbb{T})$ ? Justifier.

C) On considère l'ensemble fini $E = \{0; 1; 2; 3; 4; 5\}$.

Soit $\bot$ la loi de composition interne définie par le tableau ci-contre :

1. Vérifier que la loi $\bot$ est commutative.
2. La loi $\bot$ est-elle associative ? Justifier.

D) On considère l'ensemble $E = \mathbb{Z}/6\mathbb{Z}$ et ses deux parties :

$$A = \{\overline{0}; \overline{2}; \overline{4}\} \quad \text{et} \quad B = \{\overline{0}; \overline{3}\}$$

1. a) Montrer que $A$ est une partie stable pour les lois + et $\times$ dans $E$.
b) Montrer que $\overline{4}$ est l'élément neutre pour $(A; \times)$.
2. a) Montrer que $A$ est une partie stable de $(E; \times)$.
b) Montrer que $(B; \times)$ admet un élément neutre que l'on déterminera.

|  ⊥ | 0 | 1 | 2 | 3 | 4 | 5  |
| --- | --- | --- | --- | --- | --- | --- |
|  0 | 0 | 1 | 2 | 3 | 4 | 5  |
|  1 | 1 | 2 | 3 | 4 | 5 | 0  |
|  2 | 2 | 3 | 0 | 5 | 1 | 4  |
|  3 | 3 | 4 | 5 | 0 | 1 | 2  |
|  4 | 4 | 5 | 4 | 2 | 0 | 3  |
|  5 | 5 | 0 | 4 | 1 | 2 | 3  |

### HOMOMORPHISMES OU MORPHISMES
A) Soit $K$ un ensemble donné. On sait que $\cap$ et $\cup$ sont des lois de composition internes dans $\mathscr{P}(K)$ (On rappelle que $\mathscr{P}(K)$ est l'ensemble des parties de $K$).

1. On considère l'application : $\varphi : \mathscr{P}(K) \to \mathscr{P}(K)$

$X \mapsto \overline{X} = K - X$

Montrer que : $\left( \forall (X; Y) \in (\mathscr{P}(K))^2 \right) \quad \varphi(X \cup Y) = \varphi(X) \cap \varphi(Y)$

On dit alors que $\varphi$ est un homomorphisme (ou simplement un morphisme) de $(\mathcal{P}(K); \cup)$ dans $(\mathcal{P}(K); \cup)$.

2. Montrer que $\varphi$ est un homomorphisme de $(\mathcal{P}(K); \cap)$ dans $(\mathcal{P}(K); \cup)$.

### GÉNÉRALISATION
On dit qu'une application $\varphi$ de $E$ dans $F$ est un homomorphisme (ou simplement un morphisme) de $(E; *)$ dans $(F; \top)$ si : $(\forall (x; y) \in E^2) \quad \varphi(x * y) = \varphi(x) \top \varphi(y)$

B) Soit $*$ la loi de composition interne définie sur $\mathbb{R}$ par : $x * y = x\sqrt{1 + y^2} + y\sqrt{1 + x^2}$

On considère l'application $f$ définie de $\mathbb{R}$ dans $\mathbb{R}$ par : $(\forall x \in \mathbb{R}) \quad f(x) = \frac{e^x - e^{-x}}{2}$

1. Montrer que $f$ est bijective de $\mathbb{R}$ dans $\mathbb{R}$.
2. a) Montrer que: $(\forall (x,y)\in \mathbb{R}^2)$ $f(x + y) = f(x)*f(y)$
b) En déduire que $\star$ est commutative et associative dans $\mathbb{R}$.
3. Montrer que $ f(0) $ est l'objet neutre pour $ (\mathbb{R};*) $.
4. En déduire que tout élément de $(\mathbb{R};*)$ admet un symétrique.
5. Vérifier que $(\mathbb{R}; + )$ et $(\mathbb{R};*)$ ont la même structure.
6. Soit $ f^{-1} $ la bijection réciproque de l'application $ f $.

a) Montrer que: $(\forall x \in \mathbb{R}) f^{-1}(x) = \ln \left(x + \sqrt{x^2 + 1}\right)$.
b) Calculer $A(x) = \underbrace{x*x*\ldots*x}_{2020\text{ fois}}$ en fonction de $x$

Déterminer la structure de $(E; *)$, signifie la détermination des propriétés de $*$ dans $E$

### CALCUL MATRICIEL
Dans une entreprise de vente des matériaux de construction, deux clients A et B ont acheté durant les mois d'Avril et de Mai des sacs de sable et des sacs de ciment selon les tableaux suivants :

|   | Sable | Ciment  |
| --- | --- | --- |
|  Client A | 10 sacs | 12 sacs  |
|  Client B | 15 sacs | 7 sacs  |

Mois d'Avril

|   | Sable | Ciment  |
| --- | --- | --- |
|  Client A | 8 sacs | 17 sacs  |
|  Client B | 9 sacs | 10 sacs  |

Mois de Mai

On peut exprimer aussi les données de ces tableaux par :

$$C_1 = \begin{pmatrix} 10 & 12 \\ 15 & 7 \end{pmatrix} \quad \begin{array}{l} \leftarrow \text{Client A} \\ \leftarrow \text{Client B} \end{array}$$

$$C_2 = \begin{pmatrix} 8 & 17 \\ 9 & 10 \end{pmatrix} \quad \begin{array}{l} \leftarrow \text{Client A} \\ \leftarrow \text{Client B} \end{array}$$

Chacun des tableaux $C_1$ et $C_2$ est appelé une matrice carrée d'ordre 2.

Les matrices $C_1$ et $C_2$ sont à deux lignes et deux colonnes.

1. Durant les mois d'Avril et de Mai, le client A a acheté 29 sacs de sable et 18 sacs de ciment, et le client B a acheté 17 sacs de sable et 24 sacs de ciment.

Ces résultats peuvent être exprimés par la matrice :

$$C = \begin{pmatrix} 18 & 29 \\ 24 & 17 \end{pmatrix}$$

La matrice $C$ est appelé la somme des matrices $C_1$ et $C_2$, et on écrit :

$$C = C_1 + C_2 = \begin{pmatrix} 10 & 12 \\ 15 & 7 \end{pmatrix} + \begin{pmatrix} 8 & 17 \\ 9 & 10 \end{pmatrix} = \begin{pmatrix} 10+8 & 12+17 \\ 15+9 & 7+10 \end{pmatrix} = \begin{pmatrix} 18 & 29 \\ 24 & 17 \end{pmatrix}$$

Calculer de la même façon, la somme des matrices : $E = \begin{pmatrix} 3 & 15 \\ 4 & 7 \end{pmatrix}$ et $F = \begin{pmatrix} 37 & 27 \\ 18 & 60 \end{pmatrix}$

2. Le prix unité d'un sac de sable est $20 Dh$ et le prix unité de sa livraison est $1 Dh$.

Le prix unité d'un sac de ciment est $55 Dh$ et le prix unité de sa livraison est $2 Dh$.

On exprime ces données des prix par la matrice $P$ :

Prix Achat Prix Livraison

$$P = \begin{pmatrix} 55 & 2 \\ 20 & 1 \end{pmatrix} \leftarrow \text{Ciment} \leftarrow \text{Sable}$$

a) Vérifier que les montants d'achats et de livraison payés par les clients A et B durant le mois d'Avril sont :

Pour le client A: Prix d'achat $= 790Dh$ ：Prix de livraison $= 32Dh$
Pour le client B: Prix d'achat $= 965Dh$ ：Prix de livraison $= 37Dh$

On exprime ces prix par la matrice :

Prix Achat Prix Livraison

$$F_1 = \begin{pmatrix} 790 & 32 \\ 965 & 37 \end{pmatrix} \leftarrow \text{Client A} \leftarrow \text{Client B}$$

Remarquons bien que :

$$790 = 10 \times 55 + 12 \times 20 \quad ; \quad 32 = 10 \times 2 + 12 \times 1 \quad ; \quad 965 = 15 \times 55 + 7 \times 20 \quad ; \quad 37 = 15 \times 2 + 7 \times 1$$

La matrice $F_1$ est le produit des deux matrices $C_1$ et $P$ dans cet ordre et on écrit :

$$F_1 = C_1 \times P = \begin{pmatrix} 10 & 12 \\ 15 & 7 \end{pmatrix} \times \begin{pmatrix} 55 & 2 \\ 20 & 1 \end{pmatrix} = \begin{pmatrix} 10 \times 55 + 12 \times 20 & 10 \times 2 + 12 \times 1 \\ 15 \times 55 + 7 \times 20 & 15 \times 2 + 7 \times 1 \end{pmatrix} = \begin{pmatrix} 790 & 32 \\ 965 & 37 \end{pmatrix}$$

b) Calculer de la même façon $ F_{2} = C_{2} \times P $ qui exprime les montants d'achats et de livraison payés par les clients A et B durant le mois de Mai.
c) Déterminer la matrice $ F = F_{1} + F_{2} $ qui exprime les frais des clients A et B durant les mois d'Avril et de Mai.

> **Remarques.**
Afin de simplifier, la matrice notée $\propto M$ est la matrice obtenue en multipliant tous les termes de la matrice par le réel $\propto$.

## Cours
### 1. Loi de composition interne
#### 1.1. INTRODUCTION

Pour une bonne compréhension du contenu de ce chapitre, voici quelques rappels concernant les opérations usuelles sur quelques ensembles particuliers. Ils ont pour but principalement d'enrichir ce chapitre grâce à des exemples et contre-exemples

|  L'ensemble des polynômes de degré inférieur ou égal à n | Notation : $$\mathcal{P}_n$$ ou $$\mathbb{R}_n[X]$$  |
| --- | --- |
|  $$P \in \mathcal{P}_n$$ signifie que P est un polynôme de degré inférieur ou égal à n $$\left( \forall (P;Q) \in \mathcal{P}_n^2 \right) (\forall x \in \mathbb{R}) \begin{cases} (P+Q)(x) = P(x) + Q(x) \\ (P \times Q)(x) = P(x) \times Q(x) \end{cases}$$  |   |

|  L'ensemble des fonctions définies sur un intervalle I à valeurs dans $$\mathbb{R}$$ | Notation : $$\mathcal{I}(I;\mathbb{R})$$  |
| --- | --- |
|  $$\mathcal{I}(I;\mathbb{R}) = \{f \mid f : I \to \mathbb{R} \text{ , } x \mapsto f(x)\}$$ $$\left( \forall (f;g) \in (\mathcal{I}(I;\mathbb{R}))^2 \right) (\forall x \in I) \begin{cases} (f+g)(x) = f(x) + g(x) \\ (f \times g)(x) = f(x) \times g(x) \end{cases}$$  |   |

|  L'ensemble des classes modulo n | Notation : $$\mathbb{Z}/n\mathbb{Z}$$  |
| --- | --- |
|  $$\mathbb{Z}/n\mathbb{Z} = \{\overline{0}; \overline{1}; \overline{2}; \dots; \overline{n}\}$$ Pour tous $$\overline{x}$$ et $$\overline{y}$$ de $$\mathbb{Z}/n\mathbb{Z}$$ : $$\overline{x} + \overline{y} = \overline{x+y}$$ et $$\overline{x} \times \overline{y} = \overline{x \times y}$$  |   |

|  L'ensemble des parties d'un ensemble A | Notation : $$\mathcal{P}(A)$$  |
| --- | --- |
|  $$X \in \mathcal{P}(A) \Leftrightarrow X \subset A$$ Pour tous X et Y de $$\mathcal{P}(A)$$ : $$x \in X \cap Y \Leftrightarrow (x \in X \text{ et } x \in Y)$$ ; $$x \in X \cup Y \Leftrightarrow (x \in X \text{ ou } x \in Y)$$ $$x \in \overline{X} \Leftrightarrow (x \in A \text{ et } x \notin X)$$ ; $$x \in X - Y \Leftrightarrow (x \in X \text{ et } x \notin Y)$$ ; $$X \Delta Y = (X - Y) \cup (Y - X)$$  |   |

|  L'ensemble des matrices carrées d'ordre 2 | Notation : $$\mathbb{M}_2(\mathbb{R})$$  |
| --- | --- |
|  $$\mathbb{M}_2(\mathbb{R}) = \left\{ \begin{pmatrix} a & c \\ b & d \end{pmatrix} \bigg/ (a; b; c; d) \in \mathbb{R}^4 \right\}$$ On définit l'addition et la multiplication dans $$\mathbb{M}_2(\mathbb{R})$$ comme suit : $$\begin{pmatrix} a & c \\ b & d \end{pmatrix} + \begin{pmatrix} x & z \\ y & t \end{pmatrix} = \begin{pmatrix} a+x & c+z \\ b+y & d+t \end{pmatrix}$$ et $$\begin{pmatrix} a & c \\ b & d \end{pmatrix} \times \begin{pmatrix} x & z \\ y & t \end{pmatrix} = \begin{pmatrix} ax+cy & az+ct \\ bx+dy & bz+dt \end{pmatrix}$$  |   |

|  L'ensemble des matrices carrées d'ordre 3 | Notation: M₃(R)  |
| --- | --- |
|  M₃(R) = { (a₁ a₂ a₃, b₁ b₂ b₃, c₁ c₂ c₃) / (a₁; a₂; a₃; b₁; b₂; b₃; c₁; c₂; c₃) ∈ R⁹ } On définit l'addition et la multiplication dans M₃(R) comme suit: (a₁ a₂ a₃, b₁ b₂ b₃, c₁ c₂ c₃) + (x₁ x₂ x₃, y₁ y₂ y₃, z₁ z₂ z₃) = (a₁ + x₁ a₂ + x₂ a₃ + x₃, b₁ + y₁ b₂ + y₂ b₃ + y₃, c₁ + z₁ c₂ + z₂ c₃ + z₃) (a₁ a₂ a₃, b₁ b₂ b₃, c₁ c₂ c₃) × (x₁ x₂ x₃, y₁ y₂ y₃, z₁ z₂ z₃) = (a₁x₁ + a₂y₁ + a₃z₁ a₁x₂ + a₂y₂ + a₃z₂ a₁x₃ + a₂y₃ + a₃z₃, b₁x₁ + b₂y₁ + b₃z₁ b₁x₂ + b₂y₂ + b₃z₂ b₁x₃ + b₂y₃ + b₃z₃, c₁x₁ + c₂y₁ + c₃z₁ c₁x₂ + c₂y₂ + c₃z₂ c₁x₃ + c₂y₃ + c₃z₃)  |   |

|  L'ensemble des transformations du plan | Notation: T  |
| --- | --- |
|  Toute application bijective de plan P vers P s'appelle une transformation du plan. Les translations, les homothéties et les rotations font parties de l'ensemble des transformations T. (∀(f; g) ∈ T²) (∀M ∈ P) (fog)(M) = f(g(M))  |   |

#### 1.2. DÉFINITION D'UNE LOI DE COMPOSITION INTERNE

> **Définition 1.**
On appelle loi de composition interne sur un ensemble E, toute application de E × E dans E.

Traditionnellement, on utilise la notation x * y pour désigner l'image d'un couple (x; y) ∈ E × E par une loi • plutôt qu'une notation fonctionnelle.

On note (E;*) un ensemble E muni d'une loi de composition interne « * ».

> **Notations d'une loi de composition interne.**
- Les opérations usuelles sont notées +, -, ×, ... dans N, Z, Q, R et C.
- L'opération o est utilisée pour la composition des applications.
- Les opérations ∩, ∪, Δ sont utilisées pour les ensembles.
- ∧, ∨, *, T, ⊥, ⊕, ⊗, •, ... sont utilisées pour des opérations moins familières.

> **Exemples.**
1) L'addition et la multiplication sont des lois de composition interne sur N, Z, Q, R et C.
2) La soustraction est une loi de composition interne sur Z, Q, R et C, mais pas sur N.

3) La division est une loi de composition interne sur $\mathbb{Q}^*$, $\mathbb{R}^*$ et $\mathbb{C}^*$, mais pas sur $\mathbb{Z}^*$ et $\mathbb{C}$.
4) Si $E$ est un ensemble, on a sur $\mathcal{P}(E)$ les lois de composition internes suivantes:

L'intersection: $(A;B)\mapsto A\cap B$
La réunion: $(A;B)\mapsto A\cup B$
La difference: $(A;B)\mapsto A\backslash B$
La difference symétrique: $(A;B)\mapsto A\Delta B$

5) Soit $\mathcal{F}(I; \mathbb{R})$ l'ensemble des fonctions réelles définies sur un intervalle $I$.

L'addition et la multiplication sont des lois de composition interne sur $\mathcal{F}(I;\mathbb{R})$
Pour $I = \mathbb{R}$ ,la composition o est une loi de composition interne sur $\mathcal{F}(\mathbb{R};\mathbb{R})$

6) L'addition et la multiplication matricielles sont des lois de composition interne sur $\mathbb{M}_2(\mathbb{R})$ et $\mathbb{M}_3(\mathbb{R})$
7) L'addition et la multiplication sur $\mathbb{Z} / n\mathbb{Z}$ définies dans le chapitre « Arithmetique dans $\mathbb{Z}$ » sont des lois de composition interne sur $\mathbb{Z} / n\mathbb{Z}$.
8) Le produit scalaire dans le plan vectoriel $\mathcal{V}_2$ n'est pas une loi de composition interne car si $(\vec{u},\vec{v})\in \mathcal{V}_2$ alors $\vec{u}.\vec{v}\in \mathbb{R}$, et donc $\vec{u}.\vec{v}\notin \mathcal{V}_2$.

> **Applications.**
1. Pour tous $x$ et $y$ de $\mathbb{R} - \left\{\frac{1}{2}\right\}$, on pose : $x * y = x + y - 2xy$.

Montrer que $*$ est une loi de composition interne sur $\mathbb{R} - \left\{\frac{1}{2}\right\}$.

2. Sur l'intervalle $I = ]-1; 1[$, on définit la relation $\bot$ par : $(\forall (x; y) \in I^2) \quad x \bot y = \frac{x+y}{1+xy}$.

La relation $\bot$ est-elle une loi de composition interne sur $I$? Justifier.

3. On considère l'ensemble $E = \{f_1; f_2; f_3; f_4\}$ où les fonctions $f_i$ ($i \in \{1; 2; 3; 4\}$) des fonctions numérique

définies de $\mathbb{R}^*$ vers $\mathbb{R}^*$ par : $f_1 : x \mapsto x \quad ; \quad f_2 : x \mapsto -x \quad ; \quad f_3 : x \mapsto \frac{1}{x} \quad ; \quad f_4 : x \mapsto -\frac{1}{x}$

a) Montrer que $o$ (composition des fonctions) est une loi de composition interne sur $E$.
b) Dresser la table de $(E;0)$.

4. On considère l'ensemble $A = \{1; 2; 4; 6; 18\}$, et soit $f$ l'application définie par :

$$\begin{array}{l} f : A \times A \to A \\ (x; y) \mapsto x \wedge y \quad (x \wedge y \text{ étant le plus grand commun diviseur des entiers } x \text{ et } y) \end{array}$$

a) Dresser la table de la loi $\wedge$ dans $A$.
b) En déduire que $\wedge$ est une loi de composition interne dans $A$.

#### 1.3. PARTIE STABLE - LOI INDUITE

> **Définition 2.**
Soit $(E; \bullet)$ un ensemble muni d'une loi de composition interne et $F$ une partie de $E$.

On dit que $F$ est stable par $\bullet$ si : $(\forall (x; y) \in F^2) \quad x \bullet y \in F$

La loi de composition interne alors définie sur $F$ par : $\begin{array}{c} F^2 \to F \\ (x; y) \mapsto x \bullet y \end{array}$ est appelée loi induite par $\bullet$ sur $F$.

> **Exemples.**
1) L'ensemble $\mathbb{R}^*$ (resp. $\mathbb{C}^*$) est une partie stable de $(\mathbb{R}; \times)$ (resp. $(\mathbb{C}; \times)$).
2) L'ensemble des nombres complexes de module 1 est une partie stable de $(\mathbb{C}; \times)$.
3) L'ensemble $\mathbb{Z}^-$ est une partie stable de $(\mathbb{R}; +)$, mais n'est pas une partie stable de $(\mathbb{R}; \times)$ car :

$$(-1; -1) \in (\mathbb{Z}^-)^2 \quad \text{et} \quad -1 \times (-1) = 1 \notin \mathbb{Z}^-$$

4) L'ensemble $\mathcal{A}(\mathbb{R}; \mathbb{R})$ des fonctions affines est une partie stable de $(\mathcal{T}(\mathbb{R}; \mathbb{R}); o)$.
5) L'ensemble $\mathbb{H} = \left\{ \begin{pmatrix} 1 & a \\ 0 & 1 \end{pmatrix} / a \in \mathbb{R} \right\}$ est une partie stable de $(\mathbb{M}_2(\mathbb{R}); \times)$. En effet, on a pour tout

$$(a; b) \in \mathbb{R}^2 : \quad \begin{pmatrix} 1 & a \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & b \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & a+b \\ 0 & 1 \end{pmatrix} \in \mathbb{H}.$$

6) L'ensemble $\mathbb{R}^*$ n'est pas stable pour l'addition dans $\mathbb{R}$ car $(1; -1) \in (\mathbb{R}^*)^2$ mais $1 + (-1) = 0 \notin \mathbb{R}^*$.
7) L'ensemble $P = \{z \in \mathbb{C} / \operatorname{Re}(z) \ge 0\}$ est une partie stable de $(\mathbb{C}; +)$, mais n'est pas une partie stable de $(\mathbb{C}; \times)$. (Remarquer bien que : $i \times i = -1 \notin P$ malgré que $i \in P$).
8) On munit $\mathbb{R}$ d'une loi de composition interne $\bullet$ comme suit : $(\forall (x; y) \in \mathbb{R}^2) \quad x \bullet y = xy - 3x - 3y + 12$ On considère la partie $S = ]3; +\infty[$. Montrons que $S$ est une partie stable de $(\mathbb{R}; \bullet)$ :

On a pour tous $x$ et $y$ de $S$ : $x \bullet y - 3 = xy - 3x - 3y + 9 = (x - 3)(y - 3)$

Et puisque : $(x \in S \text{ et } y \in S) \Rightarrow (x > 3 \text{ et } y > 3) \Rightarrow (x - 3)(y - 3) > 0 \Rightarrow x \bullet y - 3 > 0$

alors : $(\forall (x; y) \in S^2) \quad x \bullet y \in S$. Par suite, $S$ est une partie stable de $(\mathbb{R}; \bullet)$.

> **Applications.**
1. On considère l'ensemble : $S = \{x^2 + y^2 / (x; y) \in \mathbb{N}\}$

a) Montrer $S$ est une partie stable de $(\mathbb{N}; \times)$.
b) L'ensemble $S$ est-il stable pour l'addition dans $\mathbb{N}$ ? Justifier.

2. On considère les ensembles : $A = \{3^n \times 2^m / (n; m) \in \mathbb{N}^2\}$ et $B = \{n^2 / n \in \mathbb{N}\}$.
a) Étudier la stabilité de $A$ pour l'addition et la multiplication dans $\mathbb{N}$.
b) Même question pour l'ensemble $B$.

3. On considère l'ensemble : $G = \left\{ \begin{pmatrix} 1 & 0 & 0 \\ a & 1 & 0 \\ b & c & 1 \end{pmatrix} / (a; b; c) \in \mathbb{R}^3 \right\}$.

Montrer que $G$ est une partie stable de $(\mathbb{M}_3(\mathbb{R}); \times)$.

4. Dans l'espace $\mathcal{V}_3$ rapporté à un repère orthonormé direct $(O; \vec{i}; \vec{j}; \vec{k})$, on considère l'ensemble :
$$E = \{\vec{0}; \vec{i}; \vec{j}; \vec{k}; -\vec{i}; -\vec{j}; -\vec{k}\}$$

a) Dresser la table de la loi $\wedge$ dans $E$. ( $\wedge$ étant le produit vectoriel dans $\mathcal{V}_3$).
b) Verifier que $E$ est une partie stable de $\left(\mathcal{V}_3; \wedge\right)$.

### 2. Propriétés d'une loi de composition interne

#### 2.1. Associativité et commutativité
2.1. ASSOCIATIVITÉ - COMMUTATIVITÉ

> **Définition 3.**
Soit $(E; *)$ un ensemble muni d'une loi de composition interne.

• On dit que la loi * est associative dans $(E; *)$ si :

$$(\forall (a; b; c) \in E^3) \quad (a * b) * c = a * (b * c)$$

• On dit que la loi * est commutative dans $(E; *)$ si :

$$(\forall (a; b) \in E^2) \quad a * b = b * a$$

> **Exemples.**
1) Sur $\mathbb{N},\mathbb{Z},\mathbb{Q},\mathbb{R}$ et $\mathbb{C}$, l'addition et la multiplication sont associatives et commutatives.
2) Sur l'ensemble $\mathcal{P}(E)$ des parties de $E$, les lois $\cap$ et $\cup$ sont associatives et commutatives.
3) Sur $\mathbb{R}$, la soustraction n'est ni commutative, ni associative. Contre-exemples:

$$5 - 7 \neq 7 - 5 \quad \text{et} \quad (7 - 5) - 1 \neq 7 - (5 - 1)$$

4) L'addition matricielle est associative et commutative dans $\mathbb{M}_2(\mathbb{R})$ et $\mathbb{M}_3(\mathbb{R})$.
5) La multiplication matricielle est associative dans $\mathbb{M}_2(\mathbb{R})$ et $\mathbb{M}_3(\mathbb{R})$, mais pas commutative.
6) Dans $\mathcal{V}_3$, le produit vectoriel n'est ni commutative, ni associative. Contre-exemples: Si $(O; \vec{i})$, un repère orthonormé direct, alors: $\vec{i} \wedge \vec{j} = -\vec{j} \wedge \vec{i}$ et $(\vec{i} \wedge \vec{j}) \wedge \vec{j} \neq \vec{i} \wedge (\vec{j} \wedge \vec{j})$
7) La composition des fonctions est associative dans $\mathcal{F}(\mathbb{R};\mathbb{R})$ , mais pas commutative.

> **Remarques.**
La loi n'est pas commutative dans $(E;*)$ signifie que: $\left(\exists (a;b)\in E^2\right)$ $a*b\neq b*a$
La loi n'est pas associative dans $(E;\star)$ signifie que: $\left(\exists (a;b;c)\in E^3\right)$ $(a*b)*c\neq a*(b*c)$
Si la loi est associative dans $(E;\star)$ , alors on peut supprimer les parentheses et ecrire :

$$(a*b)*c = a*(b*c) = a*b*c$$

Si la loi * est associative dans $(E; *)$, alors, par récurrence sur $n \in \mathbb{N}^*$, on définit en général des applications $(x_1; x_2; \dots; x_n) \mapsto x_1 * x_2 * \dots * x_n$ de $E^n$ dans $E$ : pour $n = 1$, on part de l'application identique de $E$, puis on utilise la formule de récurrence : $x_1 * x_2 * \dots * x_n = (x_1 * x_2 * \dots * x_{n-1}) * x_n$, $n \ge 2$.

Si $x_1, x_2, \dots, x_n \in E$ et $y_1, y_2, \dots, y_m \in E$ ($n, m \in \mathbb{N}^*$), on a :

$$(x_1 * x_2 * \dots * x_n) * (y_1 * y_2 * \dots * y_m) = x_1 * x_2 * \dots * x_n * y_1 * y_2 * \dots * y_m$$

On le montre par récurrence sur $m \in \mathbb{N}^*$. En notation additive, $x_1 + x_2 + \dots + x_n$ est aussi noté $\sum_{i=1}^n x_i$, en notation multiplicative, $x_1 \cdot x_2 \dots x_n$ est aussi noté $\prod_{i=1}^n x_i$. Le cas où tous les $x_i$ sont égaux à un même élément $x$ est important.

> **Définition 4.**
Soit $E$ un ensemble muni d'une loi associative et $x \in E$. Pour tous entiers non nuls $m$ et $n$, on a :

- En notation additive: $ mx + nx = (m + n)x $ et $ m(nx) = (mn)x $.
- En notation multiplicative: $ x^{m}x^{n} = x^{m + n} $ et $ \left(x^{m}\right)^{n} = x^{mn} $.

> **Applications.**
1. Étudier la commutativité et l'associativité de la loi de composition interne * définie sur $\mathbb{R}$ par :

$$(\forall (x; y) \in \mathbb{R}^2) \quad x * y = 2^{xy}$$

2. Étudier la commutativité et l'associativité de la loi de composition interne T définie sur $E = \mathbb{Z} \times \mathbb{Z}$ par :

$$(a; b) \mathrm{T}(x; y) = (ax; ay + bx)$$

3. Étudier la commutativité et l'associativité de la loi de composition interne $\bot$ définie sur $\mathbb{C}$ par :

$$(\forall (z; z') \in \mathbb{C}^2) \quad z \perp z' = iz \cdot z' + 2z + (1+i)z' + 2$$

4. On munit un ensemble $E$ d'une loi de composition interne • (notation multiplicative) telle que :

$$(\forall (x; y) \in E^2) \quad x(xy) = (yx)x = y$$

Montrer que la loi • est commutative.

5. Soit $(E; \cdot)$ un ensemble muni d'une loi multiplicative telle que : $$(\forall (x; y; z; \omega) \in E^4) \quad x(\omega x)(yz) = \omega x$$ Montrer que : $$(\forall (a; b; c) \in E^3) \quad c = ab \Rightarrow c^2 = c$$. En déduire que : $$(\forall (a; b; x) \in E^3) \quad (ab)x = ax$$.

#### 2.2. L'ÉLÉMENT NEUTRE

> **Définition 5.**
Soit $(E; *)$ un ensemble muni d'une loi de composition interne.

Un élément $e$ de $(E; *)$ est dit neutre si : $(\forall x \in E) \ e * x = x * e = x$

> **Exemples.**
1) 0 est un élément neutre de $(\mathbb{N}; +), (\mathbb{Z}; +), (\mathbb{Q}; +), (\mathbb{R}; +)$ et $(\mathbb{C}; +)$.
2) I est un élément neutre de $(\mathbb{N};\times),(\mathbb{Z};\times),(\mathbb{Q};\times),(\mathbb{R};\times)$ et $(\mathbb{C};\times)$.
2) Dans l'ensemble $\mathcal{P}(E)$, $\varnothing$ est neutre pour $\cup$ et $E$ est neutre pour $\cap$.
3) Dans $\mathcal{F}(\mathbb{R};\mathbb{R})$ , la fonction identique $Id:x\mapsto x$ est neutre pour la composition.
4) La matrice nulle $O_{2} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ est neutre dans $\left(\mathbb{M}_{2}(\mathbb{R}); +\right): \left(\forall M \in \mathbb{M}_{2}(\mathbb{R})\right) M + O_{2} = O_{2} + M$.
5) La matrice identité $ I_{2} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} $ est neutre dans $ \left(\mathbb{M}_{2}(\mathbb{R}); \times\right): \left(\forall M \in \mathbb{M}_{2}(\mathbb{R})\right) M \times I_{2} = I_{2} \times M $.

De même, la matrice identité $I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ est neutre dans $(\mathbb{M}_3(\mathbb{R}); \times)$.

6) La loi soustraction «-» définie sur $\mathbb{R}$ ne possède pas d'élément neutre.
7) La loi $\bot$ définie sur $\mathbb{R}$ par: $(\forall (x;y)\in \mathbb{R}^2)$ $x\bot y = x + y + 2 + xy$ ne possede pas d'element neutr. En effet, il est impossible de trouver $e\in \mathbb{R}$ tel que: $(\forall x\in \mathbb{R})$ $x + e + 2 + xe = x$

> **Remarques.**
- Si la loi * est commutative dans $(E;*)$, alors une des relations de la définition 5 suffit. On peut prendre alors soit « $(\forall x \in E) e * x = x$ » ou bien « $(\forall x \in E) x * e = x$ ».
- Si $ S $ est une partie stable de $ (E;*) $, et si $ e $ est neutre dans $ (E;*) $ alors cela n'implique pas que $ e $ est neutre dans $ (S;*) $. À titre d'exemple: Prenons $ E = \mathbb{Z} / 6\mathbb{Z} $ et $ S = \{\overline{0};\overline{2};\overline{4}\} $. $ \overline{1} $ est neutre dans $ E $ et $ \overline{4} $ est neutre dans $ S $.

> **Applications.**
1. On munit l'ensemble $\mathbb{Z}$ d'une loi de composition interne * définie par : $(\forall (x; y) \in \mathbb{Z}^2) \ x * y = x + y^{-3}$. Montrer que $(\mathbb{Z}; *)$ admet un élément neutre.

2. On considère l'ensemble : $$E = \{(x; y) \in \mathbb{Z}^2 / x^2 - 2y^2 = 1\}$$

On définit sur $$E$$ l'opération suivante : $$(x; y) * (a; b) = (xa + 2yb; xb + ya)$$

a) Montrer que $\star$ est une loi de composition interne sur $E$
b) La loi $\star$ admet-elle un élément neutre? Justifier.

3. On considère l'ensemble : $$A = \left\{ \begin{pmatrix} \alpha & \beta \\ 0 & \alpha \end{pmatrix} / (\alpha; \beta) \in \mathbb{R}^2 \right\}$$

a) Montrer que $\times$ est une loi de composition interne sur $A$.
b) Est-ce-que $(A;\times)$ admet un élément neutre? Justifier.

> **Proposition 1.**
Soit $$(E; *)$$ un ensemble muni d'une loi de composition interne.

Si $$e$$ et $$e'$$ sont deux éléments neutres pour la loi * dans $$E$$, alors $$e = e'$$. Autrement dit : un élément neutre pour une loi de composition interne, lorsqu'il existe, est unique.

> **Preuve.**
Si deux tels éléments existent, on a $$e * e' = e$$ car $$e'$$ est neutre, et $$e * e' = e'$$ car $$e$$ est neutre, d'où : $$e = e'$$.

#### 2.3. SYMÉTRIQUE D'UN ÉLÉMENT

> **Définition 6.**
Soit $$(E; *)$$ un ensemble muni d'une loi de composition interne et possédant un élément neutre $$e$$.

Un élément $$a \in E$$ est dit symétrisable (ou inversible) pour * s'il existe un élément $$a'$$ de $$E$$ tel que $$a * a' = a' * a = e$$. Un tel élément $$a'$$ (s'il existe) est appelé un symétrique (ou inverse) de $$a$$ pour *.

> **Remarques.**
$\bullet$ Si $a^{\prime}$ est un symétrique de a pour la loi $\star$, alors a est un symétrique de $a^{\prime}$ pour la même loi.
$\bullet$ Si la loi $\star$ est commutative, alors on peut se contenter de l'une des relations $a\star a^{\prime} = e$ ou $a^{\prime}\star a = e$
$\bullet$ Si $a^{\prime}$ est un symétrique de a pour la loi $\star$ , on dit alors que a et a' sont symétriques dans $(E;\star)$

> **Exemples.**
1) Dans $(\mathbf{Z}; + )$ $(\mathbb{Q}; + )$ $(\mathbb{R}; + )$ et $(\mathbb{C}; + )$ , tout element $a$ admet un symétrique qui est son opposé $-a$
2) Dans $(\mathbb{Q}^{\star};\times)$, $(\mathbb{R}^{\star};\times)$ et $(\mathbb{C}^{\star};\times)$, tout élément $a$ admet un symétrique qui est son inverse $a^{-1}$ ou $\frac{1}{a}$.
3) Dans $(\mathcal{P}(E); \cap)$, l'unique élément symétrisable est $E$ et, dans $(\mathcal{P}(E); \cup)$, l'unique élément symétrisable est l'ensemble vide $\varnothing$.

4) S'il existe, l'élément neutre de $(E;*)$ est symétrisable pour $*$ et il est son propre symétrique.
5) Dans $(\mathbb{Z} / n\mathbb{Z}; + )$ , tout element $\overline{a}$ admet un symétrique qui est $-\overline{a}$ (ou encore $\overline{(-a)}$
6) Dans $(\mathbb{Z} / 5\mathbb{Z};\times)$, tout élément $\overline{a}$ différent de $\overline{0}$ admet un inverse.
7) Dans $(\mathbb{Z} / 4\mathbb{Z};\times)$, l'élément $\overline{2}$ n'admet pas d'inverse.
8) Dans $(\mathbb{M}_2(\mathbb{R});\times)$, La matrice $\begin{pmatrix} 2 & 5 \\ 1 & 3 \end{pmatrix}$ admet un inverse qui est $\begin{pmatrix} 3 & -5 \\ -1 & 2 \end{pmatrix}$, par contre la matrice n'en a pas.

> **Proposition 2.**
Soit $(E; *)$ un ensemble muni d'une loi de composition interne associative et possédant un élément neutre $e$.
Si un élément $a \in E$ est symétrisable, alors, le symétrique de $a$ est unique.

> **Preuve.**
Supposons qu'il existe deux éléments $b$ et $c$ dans $E$ tels que : $a * b = b * a = e$ et $a * c = c * a = e$
L'associativité de la loi * permet alors d'écrire : $b = b * e = b * (a * c) = (b * a) * c = e * c = c$
ce qui achève la démonstration.

> **Remarques.**
- Le symétrique d'un élément $a$ se note :

- $a^{-1}$ pour une loi notée multiplicativement et s'appelle inverse de $a$.
- $a$ pour une loi notée additivement et s'appelle opposé de $a$.

- Lorsque $f$ est une bijection de $E$ dans $E$, il n'y a donc pas ambiguïté dans la notation $f^{-1}$ : il s'agit aussi bien de son application réciproque que de son inverse pour la loi $o$.

> **Proposition 3.**
Soit $(E; *)$ un ensemble muni d'une loi de composition interne associative et possédant un élément neutre $e$.

Si $a$ et $b$ sont deux éléments symétrisables, alors $a * b$ est aussi symétrisable et son symétrique est $(a * b)' = b' * a'$, où $a'$ et $b'$ sont respectivement les symétriques de $a$ et $b$.

> **Preuve.**
Il suffit de vérifier que : $(a * b) * (b' * a') = e$ et $(b' * a') * (a * b) = e$
e qui découle immédiatement de l'associativité de *.

> **Exemples.**
1) Si $ f $ et $ g $ sont deux bijections d'un ensemble $ E $ dans lui-même, alors $ f \circ g $ est également bijective et sa bijection réciproque est $ g^{-1} \circ f^{-1} : (f \circ g)^{-1} = g^{-1} \circ f^{-1} $.
2) Si $A$ et $B$ sont deux matrices inversibles dans $\left(\mathbb{M}_3(\mathbb{R});\times\right)$, alors le produit $AB$ est également inversible et son inverse est $B^{-1}A^{-1}$: $(AB)^{-1} = B^{-1}A^{-1}$

> **Applications.**
1. On munit $\mathbb{R}$ d'une loi de composition interne définie comme suit : $(\forall (x; y) \in \mathbb{R}^2) \quad x * y = x + y + \frac{1}{2} xy$.

a) Montrer que la loi $\star$ est associative.
b) Montrer que $\star$ admet un élément neutre que l'on déterminera.
c) Déterminer les éléments symétrisables pour la loi $\star$.
d) Montrer que le symétrique de -1 est 2, et que le symétrique de 6 est -3.

2. On définit sur l'intervalle $I = ]-1; 1[$ une loi T comme suit : $(\forall x, y \in I) \quad x \top y = \frac{x+y}{1+xy}$

a) Montrer que T est une loi de composition interne sur I.
b) Montrer que la loi T est associative dans $I$.
c) Déterminer l'élément neutre $ e $ dans $ (I; \mathsf{T}) $.
d) Montrer que tout élément $ x \in I $ admet un symétrique dans $ (I; \mathsf{T}) $.

3. On munit $\mathbb{C}$ de la loi de composition interne définie comme suit :

$$(\forall (z; z') \in \mathbb{C}^2) \quad z \perp z' = zz' + i(z+z') - (1+i)$$

a) Montrer que $\perp$ est commutative et associative.
b) Montrer que $\perp$ admet un élément neutre que l'on déterminera.
c) Déterminer les éléments symétrisables pour la loi $\perp$.

#### 2.4. ÉLÉMENT RÉGULIER D'UNE LOI DE COMPOSITION INTERNE

> **Définition 7.**
Soit $(E; \star)$ un ensemble muni d'une loi de composition interne.

Un élément $a \in E$ est dit régulier ou simplifiable si, et seulement si :

$$(\forall (x; y) \in E^2) \begin{cases} a \star x = a \star y \Rightarrow x = y & (1) \\ x \star a = y \star a \Rightarrow x = y & (2) \end{cases}$$

> **Remarque.**
Si la loi $\star$ est commutative dans $E$, alors l'une des implications (1) ou (2) suffit pour que l'élément $a$ soit régulier dans $(E; \star)$.

> **Exemples.**
1) Dans $\mathbb{R}$ ou $\mathbb{C}$, tout élément est régulier pour l'addition.
2) Dans $\mathbb{R}^{\bullet}$ ou $\mathbb{C}^{\bullet}$, tout élément est régulier pour la multiplication.
3) Soit $(E;*)$ un ensemble muni d'une loi de composition interne associative et possedant un élément neutre $e$. Alors, tout élément inversible de $E$ est régulier. En effet, soit $x \in E$ un élément inversible et $x'$ son inverse.

Soit $(a; b) \in E^2$. On a : $x' * (x * a) = (x' * x) * a = e * a = a$ et de même $x' * (x * b) = b$.

On en déduit donc que si $x * a = x * b$, alors $a = b$. On démontre de même que : $a * x = a * y \Rightarrow x = y$.

4) Attention, un élément régulier n'est pas nécessairement inversible. A titre d'exemple, dans $(\mathbb{N}; +)$, tout élément est régulier mais seul 0 est inversible : $(\forall (a; x; y) \in \mathbb{N}^3)$ $a + x = a + y \Rightarrow x = y$.

> **Applications.**
1. On considère l'ensemble $\mathbb{N}^*$ muni de la loi de composition interne définie par : $a \wedge b = c$ où $c$ est le plus grand commun diviseur des entiers $a$ et $b$.

Est-ce-que tout élément de $\mathbb{N}^*$ est régulier dans $(\mathbb{N}^*; \wedge)$ ? Justifier.

2. On définit sur l'ensemble $\mathbb{Q}^*$, une loi de composition interne comme suit :

$$\left(\forall (x; y) \in \left(\mathbb{Q}^*\right)^2\right) \quad x \top y = \frac{xy}{x + y}$$

Déterminer les éléments réguliers dans $(\mathbb{Q}^*; \top)$.

3. Soit $\mathcal{A}(E; E)$ l'ensemble des applications de $E$ dans $E$ muni de la loi de composition $o$.

a) Montrer que les éléments $ f $ qui vérifie: « Pour tous $ g $ et $ h $ de $ \mathcal{A}(E; E) $, $ foh = fog \Rightarrow h = g $ » sont les applications injectives.
b) Montrer que les éléments $ f $ qui vérifie: « Pour tous $ g $ et $ h $ de $ \mathcal{A}(E; E) $, $ hof = gof \Rightarrow h = g $ » sont les applications surjectives.

4. Est-ce-que tout élément de $(\mathbb{M}_2(\mathbb{R}); \times)$ est régulier ? Justifier.

### 3. Morphismes
#### 3.1. DÉFINITION D'UN MORPHISME

> **Définition 8.**
Soit $(E; *)$ et $(F; \top)$ deux ensembles munis de lois de composition interne et soit $f$ une application de $E$ dans $F$. On dit que $f$ est un morphisme de $(E; *)$ dans $(F; \top)$ lor

$$\left(\forall (x; y) \in E^2\right) \quad f(x * y) = f(x) \top f(y)$$

> **Définition 9.**
- Un morphisme s'appelle aussi un homomorphisme.
- Un endomorphisme de $(E; \bullet)$ est un morphisme de $(E; \bullet)$ dans lui-même.
- Un isomorphisme est un morphisme bijectif.
- Un automorphisme est un endomorphisme bijectif.

> **Exemples.**
1) On considère l'application : $$f : (\mathbb{Z}; +) \to (\mathbb{Z}^*; \times)$$

$$x \mapsto 5^x$$

On a pour tout $$(x; y) \in \mathbb{Z}^2$$ : $$f(x + y) = 5^{x+y} = 5^x \times 5^y = f(x) \times f(y)$$

Par conséquent, $$f$$ est un morphisme de $$(\mathbb{Z}; +)$$ dans $$(\mathbb{Z}^*; \times)$$.

2) On considère l'application : $$g : ]0; +\infty[ \to \mathbb{R}$$

$$x \mapsto \ln x$$

On a pour tout $$(x; y) \in (]0; +\infty[)^2$$ : $$g(xy) = \ln(xy) = \ln x + \ln y = g(x) + g(y)$$

Par conséquent, $$g$$ est un morphisme de $$]0; +\infty[$$ dans $$\mathbb{R}$$.

3) On considère l'application : $$h : \mathbb{C} \to \mathbb{R}$$

$$z \mapsto |z|$$

On a pour tout $$(z_1; z_2) \in \mathbb{C}^2$$ : $$h(z_1 \times z_2) = |z_1 \times z_2| = |z_1| \times |z_2| = h(z_1) \times h(z_2)$$

Par conséquent, $$h$$ est un morphisme de $$(\mathbb{C}; \times)$$ dans $$(\mathbb{R}; \times)$$.

4) On considère l'application : $$k : \mathbb{R} \to \mathbb{M}_2(\mathbb{R})$$

$$x \mapsto \begin{pmatrix} 1 & x \\ 0 & 1 \end{pmatrix}$$

On a pour tout $$(x; y) \in \mathbb{R}^2$$ : $$k(x + y) = \begin{pmatrix} 1 & x + y \\ 0 & 1 \end{pmatrix}$$. D'autre part :

$$k(x) \times k(y) = \begin{pmatrix} 1 & x \\ 0 & 1 \end{pmatrix} \times \begin{pmatrix} 1 & y \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & x + y \\ 0 & 1 \end{pmatrix} = k(x + y)$$

Par conséquent, $$k$$ est un morphisme de $$(\mathbb{R}; +)$$ dans $$(\mathbb{M}_2(\mathbb{R}); \times)$$.

5) On considère l'application : $$\varphi : \mathbb{R} \to \mathbb{C}^*$$

$$\theta \mapsto e^{\theta\theta}$$

On a pour tout $$(\theta_1; \theta_2) \in \mathbb{R}^2$$ : $$\varphi(\theta_1 + \theta_2) = e^{\theta(\theta_1 + \theta_2)} = e^{\theta\theta_1} \times e^{\theta\theta_2} = \varphi(\theta_1) \times \varphi(\theta_2)$$.

Par conséquent, $$\varphi$$ est un morphisme de $$(\mathbb{R}; +)$$ dans $$(\mathbb{C}^*; \times)$$.

> **Applications.**
1. Soit $f_a$ l'application définie de $\mathbb{R}^2$ dans $\mathbb{R}^2$ par : $(\forall (x; y) \in \mathbb{R}^2) f_a(x; y) = \left(ax; \frac{y}{a}\right)$ (où $a \in \mathbb{R}^*$)

a) Montrer que $f_{a}$ est une application bijective.
b) Soit $\mathcal{F}$ l'ensemble des applications $f_{a}$ quand a varie sur $\mathbb{R}^*$.

- Déterminer l'application $ f_{a} \circ f_{a} $ ou $ (a; a') \in (\mathbb{R}^{*})^{2} $.
- En déduire que la composition des applications $ o $ est une loi de composition interne sur $ \mathcal{F} $.

c) On considère l'application : $h : \mathbb{R}^* \to \mathcal{F}$

$$a \mapsto f_a$$

Montrer que $h$ est un morphisme de $(\mathbb{R}^*; \times)$ dans $(\mathcal{F}; o)$.

2. Soit $f$ l'application définie de $\mathcal{P}(E)$ dans $\mathcal{P}(E)$ par : $f(X) = C_E^X = E - X$

a) Montrer que $f$ est un morphisme de $\left(\mathcal{P}(E);\cap\right)$ dans $\left(\mathcal{P}(E);\cup\right)$.
b) Montrer que $f$ est un morphisme de $\left(\mathcal{P}(E);\cup\right)$ dans $\left(\mathcal{P}(E);\cap\right)$.
c) L'application $ f $ est-elle un automorphisme? Justifier.

3. On considère l'ensemble : $\mathcal{E} = \left\{ M(x; y) = \begin{pmatrix} x & y \\ -y & x+y \end{pmatrix} \ / \ (x; y) \in \mathbb{R}^2 \right\}$

Et soit $z_0 = a + ib$ un nombre complexe avec $(a; b) \in \mathbb{R} \times \mathbb{R}^*$.

On considère l'application : $\phi : E \to \mathbb{C}$

$$M(x; y) \mapsto x + yz_0$$

a) Montrer que $\phi$ est un isomorphisme de $(E; + )$ dans $(\mathbb{C}; + )$
b) Déterminer le nombre complexe $ z_0 $ pour que $ \phi $ soit un morphisme de $ (E; \times) $ dans $ (\mathbb{C}; \times) $.

#### 3.2. PROPRIÉTÉS D'UN MORPHISME

> **Proposition 4.**
Soit $f$ un morphisme de $(E; *)$ dans $(F; \mathsf{T})$.

1) $f(E)$ est une partie stable de $(F; \mathsf{T})$.
2) Si la loi $\star$ est associative dans $(E;\star)$, alors la loi T est associative dans $(f(E);\mathsf{T})$.
3) Si la loi $\star$ est commutative dans $(E;\star)$, alors la loi T est commutative dans $(f(E);\mathsf{T})$.
4) Si la loi $\star$ admet un élément neutre $e$ dans $(E;\star)$, alors $f(e)$ est un élément neutre dans $(f(E);\tau)$.
5) Si la loi $\star$ admet un élément neutre $e$ dans $(E;\star)$, et un élément $x$ admet un symétrique $x'$ dans $(E;\star)$, alors $f(x)$ admet un symétrique dans $(f(E);\mathsf{T})$ qui est $f(x')$.

> **Preuve.**
1) Soit $y_1$ et $y_2$ deux éléments de $f(E)$. Il existe donc $(x_1; x_2) \in E^2$ tel que : $y_1 = f(x_1)$ et $y_2 = f(x_2)$.

Puisque $f$ un morphisme de $(E; *)$ dans $(F; \mathsf{T})$, alors : $y_1 \mathsf{T} y_2 = f(x_1) \mathsf{T} f(x_2) = f(x_1 * x_2)$

Comme $*$ est une loi de composition interne sur $E$, alors $x_1 * x_2 \in E$, et donc $f(x_1 * x_2) \in f(E)$.

Par suite, $y_1 \mathsf{T} y_2 \in f(E)$. Ainsi, $f(E)$ est une partie stable de $(F; \mathsf{T})$.

2) Soit $(u; v; w) \in (f(E))^3$. Il existe donc $(x; y; z) \in E^3$ tel que : $u = f(x)$ et $v = f(y)$ et $w = f(z)$.

Puisque $f$ un morphisme de $(E; *)$ dans $(F; \mathsf{T})$, alors :

$$(u \mathsf{T} v) \mathsf{T} w = (f(x) \mathsf{T} f(y)) \mathsf{T} f(z) = f(x * y) \mathsf{T} f(z) = f[(x * y) * z]$$

Si la loi $*$ est associative dans $(E; *)$, alors :

$$(u \mathsf{T} v) \mathsf{T} w = f[x * (y * z)] = f(x) \mathsf{T} f(y * z) = f(x) \mathsf{T} [f(y) \mathsf{T} f(z)] = u \mathsf{T} (v \mathsf{T} w)$$

Par suite, la loi $\mathsf{T}$ est associative dans $(f(E); \mathsf{T})$.

3) Supposons que la loi $*$ est commutative dans $(E; *)$. En conservant les notations de 1), on obtient :

$$y_1 \mathsf{T} y_2 = f(x_1) \mathsf{T} f(x_2) = f(x_1 * x_2) = f(x_2 * x_1) = f(x_2) \mathsf{T} f(x_1) = y_2 \mathsf{T} y_1$$

ce qui montre bien que la loi $\mathsf{T}$ est commutative dans $(f(E); \mathsf{T})$.

4) Soit $u \in f(E)$. Il existe alors $x \in E$ tel que $u = f(x)$. On suppose que la loi $*$ admet un élément neutre $e$

dans $(E; *)$. Il s'ensuit donc : $u \mathsf{T} f(e) = f(x) \mathsf{T} f(e) = f(x * e) = f(x) = u$. On montre de même que

$f(e) \mathsf{T} u = u$, ce qui entraîne immédiatement que $f(e)$ est l'élément neutre dans $(f(E); \mathsf{T})$.

5) Soit $x'$ le symétrique de $x$ dans $(E; *)$. De $x * x' = e$ et $x' * x = e$, ajouté au fait que $f$ un morphisme de $(E; *)$

dans $(F; \mathsf{T})$, on déduit : $f(x) \mathsf{T} f(x') = f(x * x') = f(e)$ et $f(x') \mathsf{T} f(x) = f(x' * x) = f(e)$. Comme

$f(e)$ est un élément neutre dans $(f(E); \mathsf{T})$, alors $f(x)$ admet un symétrique dans $(f(E); \mathsf{T})$ qui est $f(x')$.

> **Corollaire.**
Si $f$ un isomorphisme de $(E; *)$ dans $(F; \mathsf{T})$ (c'est-à-dire morphisme bijectif), alors $f$ transfère les propriétés de la loi $*$ dans $(E; *)$ vers la loi $\mathsf{T}$ de $(F; \mathsf{T})$, et va ainsi conserver toutes les propriétés liées à cette loi. On exprime ce résultat en disant que $(E; *)$ et $(F; \mathsf{T})$ ont la même structure.

## Méthodes

### A. Une loi de composition interne et ses propriétés
Soit * la loi de composition interne définie sur ℝ par : (∀(x;y) ∈ ℝ²) x * y = xy + (x² - 1)(y² - 1)

1) Montrer que la loi * est commutative.
2) Montrer que la loi $\cdot$ n'est pas associative.
3) La loi $\cdot$ admet-elle un élément neutre? Justifier.
4) Résoudre dans $\mathbb{R}$ les équations suivantes: $(E_1)$ $2\star x = 5$ ； $(E_2)$ $x\star x = 1$

> **Solution.**
1) Montrons que la loi * est commutative :

Soit (x;y) ∈ ℝ². On a : x * y = xy + (x² - 1)(y² - 1) et y * x = yx + (y² - 1)(x² - 1)

donc x * y = y * x (car la multiplication est associative dans ℝ). Ainsi, la loi * est commutative.

2) Montrons que la loi * n'est pas associative :

On a : (-1 * 0) * 2 = 0 * 2 = -3 et (-1) * (0 * 2) = (-1) * (-3) = 3 ; donc la loi * n'est pas associative.

3) On a pour tout $ x \in \mathbb{R} : x * 1 = 1 * x = x $; d'où l'est l'élément neutre pour la loi *.
4) Résolution des équations :

• Pour l'équation (E₁) :

2 * x = 5 ⇔ 2x + 3(x² - 1) = 5 ⇔ 3x² + 2x - 8 = 0 ⇔ (x = -2 ou x = 4/3)

L'ensemble solution de cette équation est : S = {-2; 4/3}.

• Pour l'équation (E₂) :

x * x = 1 ⇔ x² + (x² - 1)² = 1 ⇔ x⁴ - x² = 0 ⇔ x²(x² - 1) = 0

Par conséquent : x * x = 1 ⇔ (x = 0 ou x = -1 ou x = 1).

L'ensemble solution de cette équation est : S = {0; 1; -1}.

### B. Stabilité
On munit l'ensemble ℝ² d'une loi de composition interne * comme suit :

Pour tous (x; y) et (x'; y') de ℝ² : (x; y) * (x'; y') = (xx'; yy')

1) Montrer que la loi $\cdot$ est commutative et associative.
2) Montrer que la loi $\cdot$ admet un élément neutre puis déterminer les éléments symétrisables pour la loi.
3) On considère l'ensemble $S = \mathbb{R}\times \{0\}$

a) Montrer que $S$ est une partie stable de $\left(\mathbb{R}^2;\star\right)$.
b) Montrer que $(S;\star)$ admet un élément neutre puis Comparer cet élément neutre avec celui de $\left(\mathbb{R}^{2};\star\right)$.

> **Solution.**
1) On a pour tous $(x; y)$ et $(x'; y')$ de $\mathbb{R}^2$ : $(x; y) * (x'; y') = (xx'; yy') = (x'x; y'y) = (x'; y') * (x; y)$.

Donc, la loi * est commutative.

On a pour tous $(x; y), (x'; y')$ et $(x^*; y^*)$ de $\mathbb{R}^2$ :

$$\begin{array}{l} [(x; y) * (x'; y')] * (x^*; y^*) = (xx'; yy') * (x^*; y^*) = (xx'x^*; yy'y^*) \\ (x; y) * [(x'; y') * (x^*; y^*)] = (x; y) * (xx^*; yy^*) = (xx'x^*; yy'y^*) \end{array}$$

Donc, la loi * est associative.

2) On a pour tout $(x; y) \in \mathbb{R}^2$, $(x; y) * (1; 1) = (1; 1) * (x; y) = (x; y)$ ; donc $(1; 1)$ est l'élément neutre pour *.

Cherchons maintenant les éléments symétrisables pour la loi * :

On a pour tous $(x; y)$ et $(x'; y')$ de $\mathbb{R}^2$ : $(x; y) * (x'; y') = (1; 1) \Leftrightarrow (xx'; yy') = (1; 1) \Leftrightarrow \begin{cases} xx' = 1 \\ yy' = 1 \end{cases}$

Si $x \neq 0$ et $y \neq 0$ alors $x' = \frac{1}{x}$ et $y' = \frac{1}{y}$. Donc tout élément de $(\mathbb{R}^*)^2$ est symétrisable pour la loi *.

3) a) Soit $(x; 0)$ et $(y; 0)$ deux éléments de $S$. On a : $(x; 0) * (y; 0) = (xy; 0)$, donc $(x; 0) * (y; 0) \in S$.

Par suite, $S$ est une partie stable de $(\mathbb{R}^2; *)$.

b) Soit $(x; 0)$ un élément de $S$. On a : $(x; 0) * (1; 0) = (x; 0)$ et $(1; 0) * (x; 0) = (x; 0)$.

Par conséquent, $(S; *)$ admet $(1; 0)$ comme élément neutre pour la loi *.

On a enfin $(1; 0) \neq (1; 1)$. Ainsi, l'élément neutre de $(S; *)$ est différent de celui de $(\mathbb{R}^2; *)$.

### C. Une loi de composition interne dans $\mathbb{C}$
On considère dans l'ensemble des nombres complexes $\mathbb{C}$ la loi de composition interne T définie par :

$$\text{Pour tout } (z; z') \in \mathbb{C}^2 : \quad z \text{T} z' = z.\overline{z'}$$

1) Étudier la commutativité et l'associativité de la loi T.
2) Résoudre dans C l'équation suivante: $(z\mathrm{T}z)\mathrm{T} = i$

> **Solution.**
1) Étude de la commutativité : On a $i \text{T} 1 = i$ et $1 \text{T} i = -i$, donc $i \text{T} 1 \neq 1 \text{T} i$.

Ainsi, la loi T n'est pas commutative.

Étude de l'associativité : On a $(i \text{T} 1) \text{T} i = i \text{T} i = i \times (-i) = 1$ et $i \text{T} (1 \text{T} i) = i \text{T} (-i) = i \times i = -1$, donc

$(i \text{T} 1) \text{T} i \neq i \text{T} (1 \text{T} i)$. Ainsi, la loi T n'est pas associative.

2) Résolution de l'équation $(z \text{T} z) \text{T} = i$ : On pose $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$. On a :

$$\begin{array}{l} (z \top z) \top = i \Leftrightarrow |z|^2 \bar{z} = i \Leftrightarrow (x^2 + y^2)(x - iy) = i \Leftrightarrow (x^2 + y^2)x - i(x^2 + y^2)y = i \\ \text{Par identification on trouve : } (z \top z) \top = i \Leftrightarrow \begin{cases} x^2 + y^2 = 0 \text{ ou } x = 0 \\ (x^2 + y^2)y = -1 \end{cases} \Leftrightarrow \begin{cases} x = 0 \\ y = -1 \end{cases} \\ \text{Par conséquent : } (z \top z) \top = i \Leftrightarrow z = -i. \text{ Ainsi, l'ensemble solution est : } S = \{-i\}. \end{array}$$

### D. Exemple de morphisme
On définit sur l'intervalle $I = ]0; +\infty[$ une loi de composition interne * comme suit :

$$\text{Pour tout } (x; y) \in I^2 : x * y = \sqrt{x^2 + y^2}$$

On définit une application $f$ définie de $I$ sur $I$ par : $f(x) = x^2$.

1) Montrer que pour tout $(x;y)\in I^2$ .. $f(x*y) = f(x) + f(y)$
2) a) Montrer que la loi $\ast$ est associative. b) La loi $\ast$ admet-elle un element neutre? Justifier.
3) Soit $ a $ un élément de $ I $ et $ n \in \mathbb{N}^* $. Calculer: $ A = \underbrace{a * a * \ldots * a}_{n \text{ fois}} $

> **Solution.**
1) On a pour tout $(x;y)\in I^2:f(x*y) = (x*y)^2 = \left(\sqrt{x^2 + y^2}\right)^2 = x^2 +y^2 = f(x) + f(y).$
2) On a $f$ est un isomorphisme de $(I;*)\mathrm{de}(I; + )$ ,donc $(I;*)\mathrm{et}(I; + )$ ont la même structure.

a) Puisque la loi + est associative dans $ I $ alors la loi * est associative dans $ I $.
b) Puisque la loi + n'admet pas d'élément neutre dans $ I $, alors $ (I;*) $ n'a pas d'élément neutre.

3) On a pour tout $n \in \mathbb{N}^* : f(A) = f\underbrace{(a * a * \ldots * a)}_{n \text{ fois}} = \underbrace{f(a) + f(a) + \ldots + f(a)}_{n \text{ fois}} = nf(a) = na^2$.

Et comme $f$ est un isomorphisme de $I$ dans $I$, alors : $A = f^{-1}(na^2) = \sqrt{na^2} = a\sqrt{n}$

### E. Exemple d'isomorphisme
On définit sur $\mathbb{R}$ une loi de composition interne * comme suit : Pour tout $(x; y) \in \mathbb{R}^2$, $x * y = x + y - xy$

On considère l'application $f$ définie de $\mathbb{R}$ dans $\mathbb{R}$ par : $f(x) = 1 - x$

1) Montrer que $f$ est un isomorphisme de $(\mathbb{R};*)$ dans $(\mathbb{R};\times)$.
2) En déduire que $\ast$ est associative et admet un élément neutre qu'on déterminera.
3) Déterminer les éléments symétrisables pour la loi $\ast$.
4) Soit $ a \in \mathbb{R} $ et $ n \in \mathbb{N}^* $. Calculer: $ A = \underbrace{a * a * \ldots * a}_{n \text{ fois}} $

1)

2)

> **Solution.**
1) L'application $f$ est bijective de $\mathbb{R}$ dans $\mathbb{R}$ et $f^{-1} = f$

On a pour tout $(x; y) \in \mathbb{R}^2$ : $f(x * y) = 1 - (x * y) = 1 - (x + y - xy) = (1 - x)(1 - y) = f(x) \times f(y)$.

Par suite, l'application $f$ est un isomorphisme de $(\mathbb{R}; *)$ dans $(\mathbb{R}; \times)$.

2) Puisque $f$ est un isomorphisme de $(\mathbb{R}; *)$ dans $(\mathbb{R}; \times)$, alors l'ensemble $(\mathbb{R}; *)$ a la même structure de l'ensemble $(\mathbb{R}; \times)$. Puisque la loi $\times$ est associative dans $\mathbb{R}$ alors la loi $*$ est associative dans $\mathbb{R}$.

Puisque $1$ est l'élément neutre dans $(\mathbb{R}; \times)$, alors $f^{-1}(1)$ est l'élément neutre dans $(\mathbb{R}; *)$.

Comme $f^{-1}(x) = f(x)$ alors $f^{-1}(1) = f(1) = 0$. Donc $0$ est l'élément neutre dans $(\mathbb{R}; *)$.

3) On a $0$ est l'unique élément non symétrisable dans $(\mathbb{R}; \times)$. Comme $f(0) = 1$ alors l'ensemble des éléments symétrisables pour la loi $*$ est $\mathbb{R} - \{1\}$.

4) Soit $a$ un élément de $\mathbb{R}$. On a : $f(A) = f\underbrace{(a * a * \dots * a)}_{n \text{ fois}} = \underbrace{f(a) \times f(a) \times \dots \times f(a)}_{n \text{ fois}} = (f(a))^n = (1 - a)^n$

Par suite : $A = f^{-1}((1 - a)^n) = f((1 - a)^n) = 1 - (1 - a)^n$

### F. Calcul matriciel
On considère dans l'ensemble $\mathbb{M}_3(\mathbb{R})$ les matrices suivantes :

$$A = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} \quad ; \quad I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

1) a) Calculer $A^2$ et $A^3$.

b) En déduire $A^n$ pour tout entier $n \ge 3$.

2) Dans cette question, $M$ désigne une matrice de $\mathbb{M}_3(\mathbb{R})$ qui commute avec la matrice $A$, c'est-à-dire qui vérifie la relation : $AM = MA$

On pose : $M = \begin{pmatrix} a & b & c \\ u & v & w \\ x & y & z \end{pmatrix}$ avec $(a; b; c; u; v; w; x; y; z) \in \mathbb{R}^9$

a) Montrer que les matrices qui commutent avec $A$ sont de la forme :

$$M = \begin{pmatrix} a & b & c \\ 0 & a & b \\ 0 & 0 & a \end{pmatrix} = aI + bA + cA^2$$

b) En déduire que l'on a : $M^2 = a^2I + 2abA + (b^2 + 2ac)A^2$

Écrire explicitement la matrice $M^2$ en fonction de $a, b$ et $c$.

3) On se propose de montrer qu'il n'existe aucune matrice $N \in \mathbb{M}_3(\mathbb{R})$ telle que $N^2 = A$.

a) Montrer que si une telle matrice $N$ existait, alors elle vérifierait: $AN = NA$
b) En utilisant la question 2)b), en déduire qu'il n'existe pas de matrice $N$ telle que $N^2 = A$.

4) L'objectif de cette question est de trouver les matrices $P \in \mathbb{M}_3(\mathbb{R})$ vérifiant : $PA = P - A$

a) Développer le produit $(I - A)(I + A + A^2)$ et en déduire l'inverse de la matrice $I - A$ en fonction de $A$ et $A^2$.
b) Soit $ P $ une matrice carrée d'ordre 3 vérifier $ PA = P - A $. Montré que: $ P = A(I - A)^{-1} $. En déduire l'expression de $ P $ en fonction de $ A $ et $ A^2 $.

> **Solution.**
1) a) Calcul de $A^2$ et $A^3$ :

$$A^2 = A \times A = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \text{ et } A^3 = A \times A^2 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = 0$$

b) Puisque $A^3 = 0$ alors pour tout entier $n \ge 3$ : $A^n = 0$

2) a) Avec les notations de l'exercice, on a :

$$AM = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} \times \begin{pmatrix} a & b & c \\ u & v & w \\ x & y & z \end{pmatrix} = \begin{pmatrix} u & v & w \\ x & y & z \\ 0 & 0 & 0 \end{pmatrix} \text{ et } MA = \begin{pmatrix} a & b & c \\ u & v & w \\ x & y & z \end{pmatrix} \times \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & a & b \\ 0 & u & v \\ 0 & x & y \end{pmatrix}$$

La condition $AM = MA$ se traduit alors par : $u = x = y = 0$ et $z = v = a$ et $w = b$

Par suite, la matrice $M$ est de la forme : $M = \begin{pmatrix} a & b & c \\ 0 & a & b \\ 0 & 0 & a \end{pmatrix} = aI + bA + cA^2$

b) Montrons l'égalité : $M^2 = a^2I + 2abA + (b^2 + 2ac)A^2$

De l'égalité $M = aI + bA + cA^2$ on tire :

$$M^2 = (aI + bA + cA^2)(aI + bA + cA^2) = a^2I + b^2A^2 + c^2A^4 + 2abA + 2bcA^3 + 2acA^2$$

Comme $A^3 = A^4 = 0$ alors : $M^2 = a^2I + 2abA + (b^2 + 2ac)A^2$

Explicitement : $M^2 = \begin{pmatrix} a^2 & 2ab & b^2 + 2ac \\ 0 & a^2 & 2ab \\ 0 & 0 & a^2 \end{pmatrix}$

3) On se propose de montrer qu'il n'existe aucune matrice $N$ d'ordre 3 telle que $N^2 = A$.

a) Si une telle matrice $N$ existait, on aura alors : $NA = N.N^2 = N^3$ et $AN = N^2.N = N^3$.

Donc : $NA = AN$

b) D'après la question 2) b), la matrice $N$ s'écrit :

$$N = \begin{pmatrix} a & b & c \\ 0 & a & b \\ 0 & 0 & a \end{pmatrix} \quad \text{et} \quad N^2 = \begin{pmatrix} a^2 & 2ab & b^2 + 2ac \\ 0 & a^2 & 2ab \\ 0 & 0 & a^2 \end{pmatrix}$$

L'égalité $N^2 = A$ donne : $a^2 = 0$ et $2ab = 1$ et $b^2 + 2ac = 0$

Ce qui est impossible car on aura $a = 0$ et $2ab = 1$.

En résumé : Il n'existe pas une matrice $N$ telle que $N^2 = A$.

4) L'objectif de cette question est de trouver les matrices $P$, carrées d'ordre 3, vérifiant : $PA = P - A$

a) Le calcul donne : $(I - A)(I + A + A^2) = I + A + A^2 - A - A^2 - A^3 = I - A^3$

Comme $A^3 = O$ alors $(I - A)(I + A + A^2) = I$.

Il s'ensuit donc que $I - A$ est inversible et son inverse est : $(I - A)^{-1} = I + A + A^2$

b) Soit $P$ une matrice vérifiant $PA = P - A$. On a alors $P - PA = A$ et donc $P(I - A) = A$.

Puisque $I - A$ est inversible, alors $P(I - A)(I - A)^{-1} = A(I - A)^{-1}$ et donc $P = A(I - A)^{-1}$.

Puisque $(I - A)^{-1} = I + A + A^2$ et $A^3 = O$ : $P = A(I - A)^{-1} = A(I + A + A^2) = A + A^2 + A^3 = A + A^2$

Conclusion : $P = A + A^2$.

• L'addition et la multiplication de matrices possèdent des propriétés qui peuvent être utiles dans les exercices et problèmes. À titre d'exemple : Si $A, B$ et $C$ sont trois matrices de même taille, alors : ($O$ étant la matrice nulle et $I$ la matrice identité)

$$A + B = B + A \quad ; \quad (A + B) + C = A + (B + C) \quad ; \quad A + O = A \quad ; \quad A + (-A) = O$$

$$(AB)C = A(BC) \quad ; \quad AO = OA = O \quad ; \quad AI = IA = A$$

Mais une chose très importante et qui appelle la prudence est que le produit matriciel n'est pas commutatif. C'est-à-dire qu'on n'a pas en général $AB = BA$.

• Dans la plupart des exercices et problème, on demande de montrer qu'une matrice $A$ est inversible et déterminer son inverse. Pour cela, plusieurs questions peuvent se poser :

- Connaît-on une matrice $ B $ telle que $ BA = I $ ou $ AB = I $? Dans ce cas, $ A $ est inversible et $ A^{-1} = B $.
- Existe-t-il une relation entre les puissances de $ A $? Par exemple, supposons qu'on a montré l'égalité $ aA^2 + bA + cI = O $ avec $ c \neq 0 $. On aura alors $ A(aA + bI) = -cI $, ce qui donne $ A\left(\frac{aA + bI}{-c}\right) = I $.

Par suite, $A$ est inversible et on a : $A^{-1} = -\frac{1}{c}(aA + bI)$

## Exercices

### Exercices d'application
#### Lois de composition interne — propriétés
**Exercice 1.**
On considère la loi de composition interne * définie sur R par : $$x * y = xy - 2(x + y) + 6$$

1) a) Montrer que * est commutative et associative.
b) Montrer que * admet un élément neutre.
2) a) Est-ce-que tout élément de $\mathbb{R}$ est symétrisable pour la loi $*$? Justifier.
b) On pose: $E = ]2; + \infty [$

Montrer que E est une partie stable de (R;*) .

**Exercice 2.**
On munit l'ensemble R*+ de la loi de composition interne * définie comme suit : $$x * y = \sqrt[3]{x^3 + y^3}$$

1) Étudier la commutativité et l'associativité de $\star$
2) La loi $\star$ admet-elle un élément neutre dans $\mathbb{R}_{+}^{*}$?
3) Soit $n\in \mathbb{N}^*$ et $a\in \mathbb{R}_+^*$ , calculer: $\underbrace{a\star a\star\dots\star a}_{n\text{ fois}}$

**Exercice 3.**
On définit sur l'ensemble des nombres complexes C, la loi de composition interne T définie comme suit :

$$z \text{T} z' = z.\overline{z'} + i$$

1) Étudier la commutativité et l'associativité de T.
2) Résoudre dans C l'équation: $(z\text{T}z)\text{T}z = i$

**Exercice 4.**
On considère la loi de composition interne T définie sur R par : $$x \text{T} y = xy - x - y + 2$$

1) Déterminer l'élément neutre de la loi T.
2) Déterminer les éléments symétrisables dans $(\mathbb{R};\mathbb{T})$
3) Montrer que $]1; + \infty [$ est stable pour la loi T.

4) Montrer que tout élément de ]1; +∞[ est symétrisable dans ( ]1; +∞[;T) .

**Exercice 5.**
On munit R de la loi de composition interne * ainsi suit : $$x * y = xy - 3x - 3y + 12$$

1) a) Déterminer l'élément neutre $ e $ dans $ (\mathbb{R};*) $.
b) Déterminer les éléments symétrisables dans $(\mathbb{R};*)$
2) a) Montrer que $]3; + \infty [$ est stable dans $(\mathbb{R};*)$
b) Soit $x \in ]3; +\infty[$ et $x'$ son symétrique dans $(\mathbb{R};$ A-t-on $x' \in ]3; +\infty[$? Justifier votre réponse.

**Exercice 6.**
On pose pour tout (x; y) ∈ ]-1; 1[ × ]-1; 1[, on pose

$$x \text{T} y = \frac{x + y}{1 + xy}$$

1) Montrer que T est une loi de composition inter dans ]-1;1[.
2) Montrer que la loi T est associative dans $] - 1;1[$
3) Déterminer l'élément neutre de la loi T.
4) Montrer que tout élément $ x $ de $ ] - 1;1[ $ est symétrisables dans $ (] - 1;1[;T) $.

**Exercice 7.**
On considère la loi ⊥ définie sur R+ par :

$$\left( \forall (x; y) \in (\mathbb{R}^+)^2 \right) \quad x \perp y = \ln \left( e^x + e^y - 1 \right)$$

1) Montrer que $\perp$ est une loi de composition inter dans $\mathbb{R}^+$.
2) Montrer que $\perp$ est commutative et associative
3) Montrer que la loi $\perp$ admet un élément neutre
4) Déterminer les éléments symétrisables dans

**Exercice 8.**
1) Soit $(E;T)$ un ensemble muni d'une loi de composition interne et admettant un élément neutre $e$. Montrer qu'il existe au moins un élément symétrisable dans $(E;T)$.
2) On prend $ E = \{a; b\} $ et on considère le tableau:

|  T | a | b  |
| --- | --- | --- |
|  a | a | b  |
|  b | b |   |

Compléter le tableau pour que b soit symétrisable dans (E; T).

**Exercice 9.**
Soit a ∈ ℝ⁺ et G = ]-a; a[. On définit l'opération :

$$\left(\forall(x; y) \in G^2\right) \quad x \top y = \frac{x+y}{1+\frac{xy}{a^2}}$$

1) Montrer que T est une loi de composition interne dans $G$
2) Montrer que T est commutative et associative.
3) Montrer que T admet un élément neutre.
4) Déterminer les éléments symétrisables dans $ G $.

**Exercice 10.**
Soit ABCDEF un hexagone régulier de centre O.

On considère l'ensemble :

$$X = \{A; B; C; D; E; F\}$$

On définit sur X une loi de composition interne

• comme suit : Pour tous M et N de X, M • N

est le symétrique de M par rapport à la droite (ON).

1) Déterminer la table de la loi.
2) La loi est-elle commutative? Associative?
3) La loi admet un élément neutre?

**Exercice 11.**
On définit dans ℝ⁺ l'opération suivante :

$$\left(\forall(x; y) \in (\mathbb{R}^+)^2\right) \quad x \perp y = \frac{x+y+|x-y|}{2}$$

1) Montrer que $\perp$ est une loi de composition interne dans $\mathbb{R}^+$.
2) Montrer que la loi $\perp$ est commutative.
3) La loi est-elle associative? Justifier.
4) Montrer que la loi $\perp$ admet un élément neutre.
5) Déterminer les éléments symétrisables dans

$$(\mathbb{R}^+; \perp).$$

**Exercice 12.**
On considère l'ensemble E = {1; 2; 3; 4}, muni d'une loi de composition interne T définie par :

Pour tout (x; y) ∈ E², x T y est le reste de la division euclidienne de x² par 5.

1) Déterminer la table de la loi T.
2) La loi T admet un élément neutre?
3) La loi T est-elle associative? Commutative?
4) Résoudre dans $E$ les équations suivantes:

a) 1 Tx = 1 ; b) x Tx = 3 ; c) 3 Tx = 1

**Exercice 13.**
Soit (E; *) un ensemble muni d'une loi de composition interne. On suppose que la loi * est associative.

Soit A l'ensemble des éléments régulier dans (E; *). Montrer que A est une partie stable dans (E; *).

**Exercice 14.**
Soit T une loi de composition interne définie sur ℝ⁺

par : $$\left(\forall(x; y) \in (\mathbb{R}^+)^2\right) \quad x \top y = \frac{xy}{x+y}$$

1) Montrer que la loi T est-elle associative.
2) La loi T admet un élément neutre?
3) Déterminer les éléments réguliers dans $(\mathbb{R}^+; \mathbb{T})$.

#### Morphismes et propriétés
**Exercice 15.**
On définit sur l'ensemble des nombres complexes $\mathbb{C}$, la loi de composition interne T définie comme suit :

$$z \mathsf{T} z' = zz' + i(z + z') - 1 - i$$

On pose : $E = \mathbb{C} - \{-i\}$.

1) Montrer que $E$ est stable dans $(\mathbb{C};\mathbb{T})$
2) Montrer que T admet un élément neutre.
3) Montrer que tout élément de $E$ admet un symétri- que dans $(\mathbb{C};\mathbb{T})$

4) On considère l'application :

$$\begin{array}{l} f : \mathbb{C}^* \to E \\ z \mapsto f(z) = z - i \end{array}$$

a) Montrer que $f$ est un isomorphisme de $(\mathbb{C}^*; \times)$ dans $(E; \mathsf{T})$.
b) Montrer que T est commutative et associative.

5) Soit $z \in \mathbb{C}^*$. Déterminer le symétrique de $f(z)$ dans $(E; \mathsf{T})$.

**Exercice 16.**
On considère l'ensemble : $A = \{a + ib / (a; b) \in \mathbb{Z}^2\}$

1) On considère l'application :

$$\begin{array}{c c c} A & \to & \mathbb{Z} \\ z = a + ib & \mapsto & \varphi(z) = \sqrt{a^2 + b^2} \end{array}$$

a) Montrer que l'application $\varphi$ est un morphisme de $(A; \times)$ dans $(\mathbb{Z}; \times)$.
b) Soit $z \in A$.

Montrer que $z$ admet un symétrique par rapport à la loi $\times$ si, et seulement si : $\varphi(z) = 1$

2) On note $\mathcal{V}$ le sous-ensemble de $A$ admettant un symétrique dans $(A; \times)$.

Déterminer en extension l'ensemble $\mathcal{V}$.

**Exercice 17.**
Soit $\bot$ la loi de composition interne définie sur $\mathbb{R}$ par $(\forall (x; y) \in \mathbb{R}^2) \ x \bot y = x + y - xy$

et soit $f$ l'application définie de $\mathbb{R}$ dans $\mathbb{R}$ par : $f(x) = 1 - x$

1) Montrer que $f$ est un isomorphisme de $(\mathbb{R}; \times)$ dans $(\mathbb{R}; \bot)$.

2) En déduire que :

a) La loi $\perp$ est associative.
b) La loi $\perp$ admet un élément neutre à déterminer

3) Déterminer les éléments symétrisables dans $(\mathbb{R};\bot)$
4) Soit $a \in \mathbb{R}$. Calculer: $\frac{a \perp a \perp \ldots \perp a}{n\text{ fois}}$

**Exercice 18.**
Soit : $E = \{1; 2; 3; 4\}$ et $F = \{a; b; c; d; e\}$

On définit sur $E$ et $F$ les deux lois de compositions internes $*$ et $\mathsf{T}$ respectivement par ses tableaux :

|  T | a | b | c | d | e  |
| --- | --- | --- | --- | --- | --- |
|  a | a | b | c | d | e  |
|  b | b | b | a | d | a  |
|  c | c | e | b | a | c  |
|  d | d | d | a | b | a  |
|  e | e | b | c | d | e  |

|  * | 1 | 2 | 3 | 4  |
| --- | --- | --- | --- | --- |
|  1 | 1 | 2 | 3 | 4  |
|  2 | 2 | 2 | 4 | 4  |
|  3 | 3 | 3 | 3 | 4  |
|  4 | 4 | 3 | 4 | 3  |

1) Déterminer l'élément neutre pour chacun de $(E; \star)$ et $(F; \mathsf{T})$.
2) Soit $ f $ l'application de $ E $ dans $ F $ et qui est définie par: $ f(1) = f(2) = f(3) = f(4) = b $

a) $f$ est-elle injective? Surjective?
b) $f$ est-elle un morphisme de $(E;\star)$ dans $(F;\mathsf{T})$?
c) Déterminer l'image de l'élément neutre de $(E;\star)$
d) Comparer l'élément neutre de $(f(E); \mathsf{T})$ avec celui de $(F; \mathsf{T})$.

**Exercice 19.**
On considère $F$ l'application $\mathbb{C}$ dans $\mathbb{C}^*$ définie par :

Pour tout $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$, on pose :

$$F(z) = e^x (\cos y + i \sin y)$$

1) Calculer $x$ et $y$ en fonction de $\left|F(z)\right|$ et $\arg \left(F(z)\right)$.
2) En déduire que $F$ est surjective de $\mathbb{C}$ dans $\mathbb{C}^*$.
3) L'application $F$ est-elle injective?
4) Montrer que pour tout $(z;z^{\prime})\in \mathbb{C}^{2}$

$$F(z + z') = F(z)F(z')$$

5) Montrer que l'application $F$ est un morphisme de $(\mathbb{C}; + )$ dans $(\mathbb{C}^{*};\times)$
6) Montrer que pour tout $x\in \mathbb{R}:F(x)\in \mathbb{R}^*$
7) On pose: $ I = \{ix / x\in \mathbb{R}^*\} $ et $ U = \{z\in \mathbb{C} / |z| = 1\} $.

a) Montrer que pour tout $z\in I:F(z)\in U$
b) En déduire que $F$ est un morphisme de $(I; + )$ dans $(U;\times)$.

**Exercice 20.**
Pour tout réel non nul $a$, on considère l'application $f_a$

définie de $\mathbb{R}^2$ dans $\mathbb{R}^2$ par : $f_a(x; y) = \left(ax; \frac{y}{a}\right)$

1) Montrer que $f_{a}$ est bijective.
2) On considère l'ensemble: $\mathcal{E} = \{f_a / a\in \mathbb{R}^*\}$

a) Pour tous $a$ et $b$ de $\mathbb{R}^*$, déterminer l'application $f_{a} \circ f_{b}$.
b) En déduire que la composition des applications est une loi de composition interne dans $\mathcal{E}$.

3) On considère l'application $\varphi$ définie de $\mathbb{R}^*$ dans $E$

par : $\varphi(a) = f_a$

a) Montrer que l'application $\varphi$ est un isomorphisme de $\mathbb{R}^*$ dans $\mathcal{E}$.
b) En déduire les propriétés de la loi $o$ dans $\mathcal{E}$.

**Exercice 21.**
On considère l'ensemble $F = \{0; 1; 2\}$. On définit sur

$F$ une loi de composition interne $*$ donnée par le tableau suivant :

1) La loi $\ast$ est-elle associative? commutative?
2) On considère l'ensemble $\mathcal{I}$ des applications $f_{a}$ definies de $F$

|  * | 0 | 1 | 2  |
| --- | --- | --- | --- |
|  0 | 0 | 1 | 2  |
|  1 | 1 | 1 | 2  |
|  2 | 2 | 2 | 2  |

dans $F$ par : $(\forall a \in F) \ f_a(x) = a * (x * x)$

On définit la loi T sur $\mathcal{I}$ par :

$$(\forall (a; b) \in F^2) \ f_a \top f_b = f_{a+b}$$

a) T est-elle une loi de composition interne sur $\mathcal{I}$?
b) La loi T est-elle associative?
c) On considère l'application $\varphi$ de $F$ dans $\mathcal{I}$ définie

par : $\varphi(a) = f_a$.

Comparer $\varphi(a) \top \varphi(b)$ et $\varphi(a * b)$ pour tout

$$(a; b) \in F^2.$$

**Exercice 22.**
Soit $f$ morphisme de $(E; *)$ dans $(F; \top)$. Soit $A$ une partie stable de $(E; *)$ et $B$ une partie stable de $(F; \top)$

1) Montrer que $f(A)$ est une partie stable de $(F; \top)$.
2) Montrer que $f^{-1}(B)$ est une partie stable de $(E;*)$.

**Exercice 23.**
On munit le plan $\mathcal{P}$ d'un repère $(O; \bar{i}; \bar{j})$.

Pour tout $\alpha \in \mathbb{R}$, on considère l'application $f_\alpha$ définie

par : $f_\alpha : \mathcal{P} \to \mathcal{P}$, $M(x; y) \mapsto M'(x'; y')$

avec : $x' = x + \alpha$ et $y' = 2\alpha x + y + \alpha^2 - 4\alpha$

On considère l'ensemble : $E = \{f_\alpha / \alpha \in \mathbb{R}\}$

1) Montrer que la composition des applications « o » est une loi de composition interne dans E.
2) Montrer que $f_{\alpha}$ est une application bijective.
3) Montrer que $(\mathbf{E};o)$ et $(\mathbb{R}; + )$ sont isomorphes.
4) Déterminer $f_{\alpha} \circ f_{\alpha}$ et $\left(f_{\alpha}\right)^{-1}$.

### Exercices de perfectionnement
**Exercice 24.**
Pour tout $x \in \mathbb{Z}$, on pose : $M(x) = \begin{pmatrix} e^x & 0 \\ xe^x & e^x \end{pmatrix}$

Et on pose : $E = \{M(x) / x \in \mathbb{Z}\}$

1) Montrer que $E$ est une partie stable de l'ensemble $(\mathbb{M}_2(\mathbb{R});\times)$.
2) Calculer $\left(M(x)\right)^n$ pour tout $(n;x)\in \mathbb{N}\times \mathbb{Z}$

**Exercice 25.**
On munit $\mathbb{R}^2$ d'une loi de composition interne T définie comme suit :

$$(x; y) \mathsf{T}(x'; y') = (xx'; xy' + yx'^2)$$

Déterminer les propriétés de la loi T.

**Exercice 26.**
On munit $\mathbb{R}$ d'une loi de composition interne * comme

suit : $\forall (x; y) \in \mathbb{R}^2$ ; $x * y = xy + (x^2 - 4)(y^2 - 4)$

1) a) Montrer que la loi $\star$ est commutative.
b) Vérifier que la loi $\star$ n'est pas associative.
2) Déterminer l'élément neutre de la loi $\star$.
3) Résoudre dans $\mathbb{R}$ les deux équations:

a) $3 * x = 72$

b) $x * x = 16$

**Exercice 27.**
Soit $A$ l'ensemble des fonctions définies de $\mathbb{R} - \{0; 1\}$ vers $\mathbb{R} - \{0; 1\}$ tel que : $A = \{f_0; f_1; f_2; f_3; f_4; f_5\}$

avec : $f_0(x) = x$ ; $f_1(x) = \frac{1}{1-x}$ ; $f_2(x) = \frac{x-1}{x}$

$$f_3(x) = \frac{1}{x} \quad ; \quad f_4(x) = 1-x \quad ; \quad f_5(x) = \frac{x}{x-1}$$

1) Dresser la table de la loi de composition $o$ dans $A$.
2) La loi o est-elle commutative dans $A$?
3) La loi o admet-elle un élément neutre dans $A$?

**Exercice 28.**
On considère l'ensemble :

$$E = \{(x; y) \in \mathbb{Z}^2 \mid x^2 - 2y^2 = 1\}$$

et l'application T définie de $E^2$ dans $\mathbb{Z}^2$ par :

$$(x; y) \mathsf{T}(x'; y') = (xx' + 2yy'; xy' + x'y)$$

1) Montrer que T est une loi de composition interne définie sur $E$.
2) La loi T admet-elle un élément neutre?

**Exercice 29.**
Soit $(E; \cdot)$ un ensemble muni d'une loi multiplicative. On suppose que la loi $\cdot$ est associative, admet un élément neutre $e$ et tout élément $x$ de $E$ admet un symétrique noté $x^{-1}$.

Soit l'ensemble : $C = \{a \in E \mid \forall x \in E \ xa = ax\}$

1) Vérifier que $C \neq \emptyset$. Dans quel cas $C = E$?
2) Montrer que $C$ est une partie stable de $(E; \cdot)$ et que

$$\forall (a; b) \in C^2 \ ab^{-1} \in C$$

3) Soit $a \in E$ et on considère l'application :

$$f_a : E \to E$$

$$x \mapsto axa^{-1}$$

Soit $E' = \{f_a \mid a \in E\}$.

a) Montrer que $f_{a}$ est un isomorphisme de $(E;\cdot)$ dans $(E;\cdot)$.
b) Montrer que $(E^{\prime};o)$ admet un élément neutre et que o est associative et que tout élément de $E^{\prime}$ est symétrisable.
c) Soit $\varphi$ l'application définie de $E$ dans $E^{\prime}$ par:

$$\varphi(a) = f_a$$

Montrer que $\varphi$ est un morphisme de $(E; \cdot)$ dans $(E'; o)$ puis montrer que $\varphi$ est un isomorphisme si $C = \{e\}$.

**Exercice 30.**
On considère l'ensemble $E = \mathbb{R}^* \times \mathbb{R}$.

On considère dans $E$ la loi T telle que :

$$(a; b) \top (a'; b') = (aa'; ab' + b)$$

pour tout $(a; b)$ et $(a'; b')$ de $E$.

1) a) Montrer que T est associative.

b) La loi T est-elle commutative ?

c) Montrer que la loi T admet un élément neutre et que tout élément de $E$ admet un symétrique qu'on déterminera.

2) Soit $F = \{(a; 0) / a \in \mathbb{R}^*\}$.

Montrer que $F$ est une partie stable de $(E; \top)$ et que $(F; \top)$ et $(\mathbb{R}^*; \times)$ sont isomorphes.

3) On considère l'application : $\varphi : E \to \mathbb{R}^*$
$(a; b) \mapsto a$

a) Montrer que $\varphi$ est un morphisme de $(E; \top)$ dans $(\mathbb{R}^*; \times)$.

b) Soit $G = \varphi^{-1}(\{1\})$. Montrer que $(G; \top)$ et $(\mathbb{R}; +)$ sont homomorphes.

4) Soit $(\mathcal{F}(\mathbb{R}; \mathbb{R}); o)$ l'ensemble des fonctions numériques muni de l'opération « composition des fonctions » et $\mathcal{A}(\mathbb{R}; \mathbb{R})$ l'ensemble des fonctions $f_{(a; b)}$ telles que : $f_{(a; b)}(x) = ax + b$ avec $(a; b) \in \mathbb{R}^* \times \mathbb{R}$.

a) Montrer que $\mathcal{A}$ est stable dans $(\mathcal{F}(\mathbb{R}; \mathbb{R}); o)$.

b) Montrer que l'application : $\psi : \mathcal{A} \to E$
$f_{(a; b)} \mapsto (a; b)$

est un morphisme de $(\mathcal{A}; o)$ dans $(E; \top)$.

**Exercice 31.**
On considère la matrice :

$$B = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix}$$

1) Calculer $B^2$ et $B^3$.
2) Montrer que pour tout $n \in \mathbb{N}$ :

$$B^n = \begin{pmatrix} 1 & 2n & a_n \\ 0 & 1 & 2n \\ 0 & 0 & 1 \end{pmatrix} \text{ avec } a_{n+1} = a_n + 4n + 3$$

3) Montrer que : $(\forall n \in \mathbb{N}) a_n = 2n^2 + n$

**Exercice 32.**
On considère l'ensemble :

$$\mathbb{H} = \left\{ \begin{pmatrix} 2^n & 0 & 2^n \\ 0 & 1 & 0 \\ 2^n & 0 & 2^n \end{pmatrix} \bigg/ n \in \mathbb{N} \right\}$$

1) Montrer que $\mathbb{H} \neq \emptyset$.
2) Montrer que $\mathbb{H}$ est stable dans $(\mathbb{M}_2(\mathbb{R}); \times)$.
3) Déterminer l'élément neutre de $(\mathbb{H}; \times)$.
4) La loi $\times$ est-elle commutative dans $\mathbb{H}$ ?

5) On pose : $A = \begin{pmatrix} 2 & 0 & 2 \\ 0 & 1 & 0 \\ 2 & 0 & 2 \end{pmatrix}$. Calculer $A^{2017}$.

**Exercice 33.**
Dans $\mathbb{M}_2(\mathbb{R})$, on considère l'ensemble :

$$\mathbb{H} = \left\{ M(a; b) = \begin{pmatrix} a + \frac{\sqrt{2}}{2}b & -\frac{\sqrt{2}}{2}b \\ \frac{3\sqrt{2}}{2}b & a - \frac{\sqrt{2}}{2}b \end{pmatrix} \bigg/ (a; b) \in \mathbb{R}^2 \right\}$$

1) Montrer que $\mathbb{H}$ est stable dans $(\mathbb{M}_2(\mathbb{R}); +)$.
2) Déterminer les propriétés de la loi + dans $\mathbb{H}$.
3) Montrer que $\mathbb{H}$ est stable dans $(\mathbb{M}_2(\mathbb{R}); \times)$.
4) La loi $\times$ est-elle commutative dans $\mathbb{H}$ ? Justifier.

**Exercice 34.**
On considère l'ensemble :

$$E = \{ x \in \mathbb{N} \mid \exists (a; b) \in \mathbb{N}^2; x = a^2 + b^2 \}$$

Montrer que $E$ est une partie stable de $(\mathbb{R}; \times)$.

**Exercice 35.**
On considère l'intervalle $I = ]-1; 1[$.

1) a) Montrer que : $(\forall (t; s) \in I^2) \text{ } st + 1 \neq 0$

b) Soit $s \in I$. On considère la fonction $T_s$ définie

sur $I$ par : $T_s(t) = \frac{s+t}{1+st}$

Étudier les variations de la fonction $T_s$ sur $I$.

c) Pour tout $t$ et $s$ de $I$, on pose : $s * t = \frac{s+t}{st+1}$.

En déduire de ce qui précède que $*$ est une loi de composition interne dans $I$.

2) a) Donner le tableau de variation de la fonction $G$

définie sur $\mathbb{R}$ par : $G(x) = \frac{e^{2x} - 1}{e^{2x} + 1}$

b) Montrer que: $(\forall x\in \mathbb{R}^{+})G(x)\leq x$
c) Montrer que $G$ est un isomorphisme de $(\mathbb{R}; + )$ dans $(I;*)$
d) Quelles sont les propriétés de la loi $\ast$ ?

**Exercice 36.**
Pour tous $\alpha$ et $\alpha'$ de l'intervalle $I = ]-1; 1[$, on pose :

$$\alpha * \alpha' = \frac{\alpha + \alpha'}{1 + \alpha \alpha'}$$

1) Montrer que $\star$ est une loi de composition interne dans $I$.
2) On considère l'ensemble: $\mathbb{U} = \{z\in \mathbb{C} / |z| = 1\}$

a) Soit $\alpha \in ]-1; 1[$ et $z \in \mathbb{U}$.

Comparer les nombres $|z - \alpha|$ et $|1 - \alpha z|$ et en déduire que si $z \in \mathbb{U}$ alors $\frac{z - \alpha}{1 - \alpha z} \in \mathbb{U}$.

b) On considère l'application :

$$\begin{array}{l} f_\alpha : \mathbb{U} \to \mathbb{U} \\ z \mapsto f_\alpha(z) = \frac{z - \alpha}{1 - \alpha z} \end{array}$$

Montrer que $f_\alpha$ est bijective et déterminer sa bijection réciproque.

3) On pose : $\mathcal{F} = \{f_\alpha / \alpha \in I\}$

Montrer que la composition des applications $o$ est une loi de composition interne dans $\mathcal{F}$.

et que l'application : $\varphi : I \to \mathcal{F}$
$\alpha \mapsto f_\alpha$

est un morphisme de $(I; *)$ dans $(\mathcal{F}; o)$.

**Exercice 37.**
On considère l'ensemble :

$$E = \{z \in D \mid z = x + iy \text{ et } (x; y) \in \mathbb{R}^2 \text{ et } xy > 0\}$$

1) a) La partie $E$ est-elle stable dans $(\mathbb{C}; + )$?
b) La partie $E$ est-elle stable dans $(\mathbb{C};\times)$?
2) On définit dans $\mathbb{C}$ la loi $\star$ telle que: $z \star z' = xx' + iy$
ou: $z = x + iy$ et $z' = x' + iy'$ et $(x;y;x';y')\in \mathbb{R}$
Montrer que la loi $\star$ est interne dans $E$
3) Soit $ f $ l'application définie de $ E $ dans $ \mathbb{R} $ par:

$$f(z) = \ln(xy) \text{ avec } z = x + iy \in E \text{ et } (x; y) \in \mathbb{R}$$

a) Montrer que l'application $ f $ est un morphisme de $ (E;*) $ dans $ (\mathbb{R}; + ) $.
b) Déterminer l'ensemble $N$ tel que:

$$N = \{z \in E \mid f(z) = 0\}$$

L'application $f$ est-elle bijective ?

c) Construire dans le plan complexe l'ensemble des points $M(z)$ tels que : $z \in \mathbb{N}$

**Exercice 38.**
On considère la matrice : $A = \begin{pmatrix} 3 & 1 \\ -2 & 0 \end{pmatrix}$

1) Montrer que: $(\forall n \in \mathbb{N}^{\star}) A^{n} = \begin{pmatrix} 2^{n+1} - 1 & 2^{n} - 1 \\ 2 - 2^{n+1} & 2 - 2^{n} \end{pmatrix}$
2) Montrer que pour tout $n \in \mathbb{N}^{\star}$, $A^n$ est inversible dans $(\mathbb{M}_2(\mathbb{R}); \times)$ et déterminer son inverse.

### Problèmes de synthèse
#### Se préparer aux devoirs
**Devoir 1.**
Les parties A), B) et C) sont indépendantes.

**Partie A :**
Soit * la loi de composition interne définie sur R par :

$$\left(\forall(x;y)\in\mathbb{R}^{2}\right)\quad x*y=x+y+x^{2}y^{2}$$

1) Vérifier que la loi * est commutative.
2) La loi * est-elle associative ? Justifier.
3) Montrer que $\mathbb{R}$ admet un élément neutre pour et calculer ce neutre.
4) Résoudre les deux équations suivantes dans $\mathbb{R}$:

$$\left(E_{1}\right)1*x=0\quad ;\quad\left(E_{2}\right)1*x=1$$

**Partie B :**
On note T la loi de composition interne dans l'ensemble $G=\mathbb{C}\times\mathbb{R}$ définie, pour tous $(z;t)$ et $(z';t')$ de $G$ :

$$(z;t)\mathrm{T}(z';t')=(z+z';t+t'+\mathrm{Im}(\overline{z}.z'))$$

1) Montrer que la loi T est associative.
2) La loi T est-elle commutative? Justifier.
3) Montrer que la loi T admet un élément neutre dans $G$ qu'on déterminera.
4) Montrer que tout élément de $ G $ est symétrisable pour la loi $ T $ et déterminer son symétrique.

**Partie C :**
Soit $E$ un ensemble muni d'une loi de composition interne noté multiplicativement, associative et telle qu'il existe $a\in E$ tel que :

$$\left(\forall y\in E\right)\left(\exists x\in E\right)y=axa$$

1) Démontrer que $(E; \bullet)$ admet un élément neutre.
2) Établir que a est symétrisable et exprimer le symétrique de $a^{-1}$ de $a$.

**Devoir 2.**
Les parties A) et B) sont indépendantes.

**Partie A :**
On munit le plan $\mathscr{P}$ d'un repère $(O;\overline{i};\overline{j})$.

Pour tout $a\in\mathbb{R}$, on considère l'application $T_a$ définie par :

$$\begin{array}{l} T_{a}:\quad\mathscr{P}\quad\rightarrow\quad\mathscr{P} \\ M(x;y)\mapsto M'(x';y') \end{array}$$

avec : $x'=x+a$ et $y'=ye^{a}$

On considère l'ensemble : $\mathrm{E}=\{T_{a}|a\in\mathbb{R}\}$

1) Montrer que la composition des applications « o » est une loi de composition interne dans E.
2) On considère l'application :

$$\begin{array}{l} \varphi:\mathbb{R}\rightarrow\mathrm{E} \\ a\mapsto T_{a} \end{array}$$

a) Montrer que $ f $ est un isomorphisme de $ \left(\mathbb{R}^{*};\times\right) $ dans $ \left(\mathrm{E};o\right) $.
b) En déduire l'élément neutre de $(\mathrm{E};o)$.
b) Déterminer $\left(T_{a}\right)^{-1}$ dans $(\mathrm{E};o)$ pour tout $a\in \mathbb{R}$

**Partie B :**
Soit T une loi de composition interne associative définie sur un ensemble $E$ et $a$ un élément de $E$.

Soit * la loi de composition interne définie sur $E$ par :

$$\left(\forall(x;y)\in E\right)x*y=x\mathrm{T}a\mathrm{T}y$$

1) Montrer que la loi $\ast$ est associative.
2) Montrer que si la loi T est commutative alors la loi $\ast$ l'est aussi.
3) On suppose que la loi T est commutative et admet un élément neutre $ e $ tel que $ e \neq a $ et que $ a $ admet un symétrique $ a' $ dans $ (E; \mathsf{T}) $.

a) Montrer que $(E; \ast)$ admet un élément neutre.
b) Soit $ x \in E $ et $ x' $ son symétrique dans $ (E; \mathsf{T}) $.

Établir que $x$ est symétrisable dans $(E; *)$.

#### Se préparer aux examens
**Problème 1.**
On munit $\mathbb{R}$ d'une loi de composition interne * comme suit : $x * y = xy - 3x - 3y + 12$

1) a) Déterminer l'élément neutre $ e $ de $ (\mathbb{R};*) $.
b) Déterminer les éléments symétrisables dans $(\mathbb{R};*)$
2) a) Montrer que $ ]3; +\infty [ $ est stable dans $ (\mathbb{R};*) $.
b) Soit $ x \in ]3; +\infty[ $ et $ x' $ son symétrique dans $ (\mathbb{R};*) $. A-t-on $ x' \in ]3; +\infty[ $? Justifier.

**Examen Bac 1987 (session normale).**

**Problème 2.**
On munit $\mathbb{Z}$ d'une loi de composition interne * comme suit : $(\forall (x; y) \in \mathbb{Z}^2) x * y = xy(x + y)$

1) Montrer que la loi $\cdot$ est commutative.
2) Calculer $(1\ast (-1))\ast 2$ et $1\ast ((-1)\ast 2)$

La loi * est-elle associative ?

3) Résoudre dans $\mathbb{Z}$ l'équation: $x \star x = 16$
4) Montrer que $\star$ n'admet pas un élément neutre.

**Examen Bac 1989 (session normale).**

**Problème 3.**
On munit $\mathbb{R}^+$ de la loi de composition interne * définie par :

$$(\forall (x; y) \in \mathbb{R}^+ \times \mathbb{R}^+) x * y = (\sqrt{x} - \sqrt{y})^2$$

1) Calculer $ 1 \star (4 \star 9) $ et $ (1 \star 4) \star 9 $.
La loi est-elle associative?
2) Montrer que la loi $\star$ est commutative et admet un élément neutre qu'on déterminera.
3) Quels sont les éléments symétrisables dans $(\mathbb{R}^{+};*)$?

**Examen Bac 1989 (session normale).**

**Problème 4.**
On munit $\mathbb{Z}$ de la loi de composition interne * définie comme suit : $(\forall (x; y) \in \mathbb{Z}^2) x * y = x + y - 3$

1) Montrer que $\star$ est commutative et associative.
2) Montrer que $(\mathbb{Z};\star)$ admet un élément neutre.
3) a) Déterminer le symétrique de 2 pour la loi.
b) Résoudre dans $\mathbb{Z}$ l'équation: $x \star 5 = 7$

**Examen Bac 1988 (session normale).**

**Problème 5.**
On munit $\mathbb{R}$ d'une loi de composition interne * comme suit : $x * y = xy + (x^2 - 1)(y^2 - 1)$

1) Montrer que la loi $\star$ est commutative.
2) Calculer $\left((-1)\star 0\right)\star 3$ et $(-1)\star (0\star 3)$

La loi * est-elle associative ?

3) Montrer que $(\mathbb{R};\star)$ admet un élément neutre que l'on déterminera.
4) Résoudre les deux équations suivantes dans $\mathbb{R}$:

$$(E_1) 2 * x = 5 \quad ; \quad (E_2) x * x = 1$$

**Examen Bac 1981 (session normale).**

## Résumé

- **Loi de composition interne.** Une application $\star:E\times E\to E$ définit une loi de composition interne sur $E$.
- **Stabilité.** Une partie $A\subset E$ est stable si, pour tous $x,y\in A$, on a $x\star y\in A$ ; la restriction définit alors une loi induite sur $A$.
- **Commutativité.** La loi est commutative lorsque $x\star y=y\star x$ pour tous $x,y\in E$.
- **Associativité.** La loi est associative lorsque $(x\star y)\star z=x\star(y\star z)$ pour tous $x,y,z\in E$.
- **Élément neutre.** Un élément $e$ est neutre si $e\star x=x\star e=x$ pour tout $x\in E$ ; lorsqu'il existe, il est unique.
- **Symétrique.** Si la loi est associative et possède un neutre $e$, un symétrique de $x$ vérifie $x\star x'=x'\star x=e$.
- **Morphisme.** Une application $f:(E,\star)\to(F,\top)$ est un morphisme si $f(x\star y)=f(x)\top f(y)$.
- **Isomorphisme.** Un morphisme bijectif transporte toutes les propriétés algébriques de la structure de départ vers la structure d'arrivée.

## Auto-évaluation

- Vérifier qu'une opération donnée est interne sur un ensemble.
- Étudier la stabilité d'une partie et identifier la loi induite.
- Tester la commutativité et l'associativité à partir d'une formule ou d'une table.
- Déterminer un élément neutre et les éléments symétrisables ou réguliers.
- Vérifier qu'une application est un morphisme ou un isomorphisme.
- Transporter les propriétés d'une loi à l'aide d'un isomorphisme.
- Manipuler des lois définies sur des fonctions, des nombres complexes ou des matrices.