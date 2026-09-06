# Chapitre 6 : Espaces vectoriels réels

## Histoire

Les espaces vectoriels ont été introduits par Cayley et Grassmann au milieu du XIXème siècle.

Cependant, le premier ne proposait qu'un calcul sur des n-uplets et la formalisation du second était des plus obscures. Ce fut l'œuvre de Giuseppe Peano de déchiffrer le travail du mathématicien allemand et de donner le premier, en 1888, une définition satisfaisante d'un espace vectoriel. Il introduisit les applications linéaires et montra que cette théorie ne se réduit pas à la dimension finie en citant l'exemple des polynômes.

Giuseppe Peano est aussi connu pour son axiomatique des entiers naturels et pour avoir construit une courbe remplissant un carré. On lui doit d'astucieux contre-exemples qui ont remis en cause des assertions qui semblaient pourtant bien établies.

James Sylvester s'intéresse à des tableaux de nombres qu'il nomme matrices en 1850. Peu après,

Cayley définit des opérations sur les matrices. Leur collaboration a fait faire de remarquables progrès à l'algèbre linéaire.

Source : https://fr.wikipedia.org

## Objectifs

- Reconnaître une loi de composition externe et une structure d'espace vectoriel réel.
- Montrer qu'une partie est un sous-espace vectoriel.
- Manipuler les combinaisons linéaires et les familles génératrices.
- Étudier la liberté ou la dépendance linéaire d'une famille.
- Déterminer une base, les coordonnées d'un vecteur et la dimension d'un espace.

## Plan du chapitre

- Activités préparatoires
- **Cours** : espace vectoriel réel · sous-espaces vectoriels · familles libres et génératrices · bases · dimension.
- **Méthodes** : familles libres · espaces de fonctions · espaces de matrices.
- **Exercices et problèmes** : applications · perfectionnement · devoirs · problèmes de synthèse.

## Prérequis

- Groupes commutatifs et lois de composition.
- Résolution de systèmes linéaires.
- Calcul matriciel, fonctions et polynômes.
- Vecteurs de $\mathbb{R}^2$ et $\mathbb{R}^3$.

## Activités préparatoires

### RAPPELS
A) Résolution d'un système paramétrique :

Résoudre dans $\mathbb{R}^2$ le système suivant : $\begin{cases} x + my = 2m - 1 \\ mx + y = 3m - 2 \end{cases}$ (Discuter selon les valeurs du réel $m$)

B) Étude d'un ensemble de fonctions continues

On note $\mathcal{C}([0;1])$ l'ensemble des fonctions continues sur le segment $[0;1]$. On considère l'ensemble :

$$G = \left\{ f \in \mathcal{C}([0;1]) \mid \int_0^1 f(t)dt = 0 \right\}$$

1. Montrer que $G\neq \emptyset$
2. Montrer que $(G; + )$ est un groupe commutatif.
3. Montrer que pour tout $(\alpha ;\beta)\in \mathbb{R}^2$ et pour tout $(f;g)\in G^{2}$ .. $\alpha f + \beta g\in G$
C) Une fonction vérifier des conditions linéaires :

On considère les fonctions numériques $f$, $g$ et $h$ définies sur $\mathbb{R}$ par : $f(x) = e^x$ ; $g(x) = e^{2x}$ ; $h(x) = e^{3x}$

Montrer que : $(\forall (a;b;c) \in \mathbb{R}^3)$ $af + bg + ch = 0 \Rightarrow a = b = c = 0$

D) Ensemble des solutions d'une équation différentielle :

On note $\mathcal{D}^2(\mathbb{R})$ l'ensemble des fonctions deux fois dérivables sur $\mathbb{R}$. On considère l'ensemble :

$$E = \left\{ f \in \mathcal{D}^2(\mathbb{R}) \mid f^* - 2f' + f = 0 \right\}$$

1. Montrer que les fonctions suivantes: $ g_0: x \mapsto e^x $; $ g_1: x \mapsto xe^x $; $ g: x \mapsto (ax + b)e^x $ (ou $ a, b \in \mathbb{R} $) appartiennent à l'ensemble $ E $.
2. On considère la fonction $ h: x \mapsto f(x).e^{-x} $ ou $ f \in E $.

a) Montrer que: $(\forall x\in \mathbb{R})h^{\prime \prime}(x) = 0.$
b) En déduire une expression de $ h(x) $ puis celle de $ f(x) $ en fonction de $ x $.

### LOI DE COMPOSITION EXTERNE
1. Parmi les propositions suivantes, déterminer celles qui sont vraies :

$$\begin{array}{l} (P_1) : (\forall \lambda \in \mathbb{R}) \ (\forall \bar{u} \in {}^c\mathcal{V}_2) \ \lambda.\bar{u} \in {}^c\mathcal{V}_2 \quad ; \quad (P_2) : (\forall \alpha \in \mathbb{R}) \ (\forall x \in \mathbb{Q}) \ \alpha.x \in \mathbb{Q} \\ (P_3) : (\forall \alpha \in \mathbb{Q}) \ (\forall x \in \mathbb{R}) \ \alpha.x \in \mathbb{R} \quad ; \quad (P_4) : (\forall n \in \mathbb{N}^+) \ (\forall x \in \mathbb{R}) \ x^n \in \mathbb{R} \\ (P_5) : (\forall \alpha \in \mathbb{R}) \ (\forall f \in \mathcal{F}(\mathbb{R};\mathbb{R})) \ \alpha f \in \mathcal{F}(\mathbb{R};\mathbb{R}) \end{array}$$

2. Soit $A$ et $E$ deux ensembles non vides. Toute application :

$$\begin{array}{l} f : A \times E \to E \\ (\alpha, x) \mapsto f(\alpha, x) \end{array}$$

s'appelle une loi de composition externe sur $E$ à coefficients dans $A$, et on écrit : $f(\alpha, x) = \alpha.x$

3. Parmi les applications suivantes, déterminer celles qui définissent une loi de composition externe :

a) $$f_1: \mathbb{R} \times \mathbb{M}_2(\mathbb{R}) \to \mathbb{M}_2(\mathbb{R})$$

$$\left( \alpha ; \begin{pmatrix} a & b \\ c & d \end{pmatrix} \right) \mapsto \begin{pmatrix} \alpha a & \alpha b \\ \alpha c & \alpha d \end{pmatrix}$$

b) $$f_2: \mathbb{R} \times \mathcal{V}_2 \to \mathcal{V}_2$$

$$(\alpha, \bar{u}) \mapsto \alpha. \bar{u}$$

c) $$f_3: \mathbb{N}^* \times \mathbb{R} \to \mathbb{R}$$

$$(n; x) \mapsto x^n$$

d) $$f_4: \mathbb{Z} \times \mathbb{R}^3 \to \mathbb{R}^3$$

$$(\alpha; (a, b, c)) \mapsto (0, 0, 0)$$

e) $$f_5: \mathbb{R} \times \mathcal{I}(\mathbb{R}; \mathbb{R}) \to \mathcal{I}(\mathbb{R}; \mathbb{R})$$

$$(\alpha; f) \mapsto \alpha. f$$

f) $$f_6: \mathbb{R} \times \mathbb{Q} \to \mathbb{Q}$$

$$(\alpha; x) \mapsto \alpha. x$$

### ESPACES VECTORIELS RÉELS
On considère l'ensemble : $$P = \{ f \in \mathcal{I}(\mathbb{R}; \mathbb{R}) / (\forall x \in \mathbb{R}) \ f(-x) = f(x) \}$$

On munit $$P$$ de deux lois :

- Loi de composition interne: $(f; g) \mapsto f + g$;
- Loi de composition interne: $(\alpha; f) \mapsto \alpha. f$.

telles que : $$(\forall x \in \mathbb{R}) \begin{cases} (f+g)(x) = f(x) + g(x) \\ (\alpha f)(x) = \alpha f(x) \end{cases}$$

1. Montrer que $(P, + )$ est un groupe commutatif.
2. Pour tout $(\alpha ;\beta)\in \mathbb{R}^2$ , et pour tous $f$ et $g$ de $P$ , vérifier les quatre relations suivantes:

a) $$(\alpha + \beta)f = \alpha f + \beta f$$ ; b) $$(\alpha \beta).f = \alpha.(\beta.f)$$ ; c) $$\alpha(f+g) = \alpha f + \alpha g$$ ; d) $$1.f = f$$

L'ensemble $$P$$, muni d'une loi de composition interne + et d'une loi de composition externe •, vérifie alors les conditions citées dans les questions 1 et 2. On dit alors que $$(P; +; \cdot)$$ est espace vectoriel réel.

### GÉNÉRALISATION
Soit $$E$$ un ensemble muni d'une loi de composition interne notée + et d'une loi de composition externe à coefficients dans $$\mathbb{R}$$ notée •. On dit que $$(E; +; \cdot)$$ est un espace vectoriel réel si :

- $(E; + )$ est un groupe commutatif,
- Pour tout $(x; y) \in E^2$, et pour tout $(\alpha; \beta) \in \mathbb{R}^2$:

$$1 \cdot x = x \ ; \ \alpha \cdot (x+y) = \alpha \cdot x + \alpha \cdot y \ ; \ (\alpha + \beta) \cdot x = \alpha \cdot x + \beta \cdot x \ ; \ \alpha \cdot (\beta \cdot x) = (\alpha \beta) \cdot x$$

3. On considère les ensembles : $$A = \{ f \in \mathcal{I}(\mathbb{R}; \mathbb{R}) / f(5) = f(1) \}$$ et $$A = \{ f \in \mathcal{I}(\mathbb{R}; \mathbb{R}) / f \geq 0 \}$$

a) Montrer que $(A; +; \cdot)$ est un espace vectoriel réel.
b) Est-ce-que $(B; + ; \cdot)$ est un espace vectoriel réel? Justifier.

Le tableau suivant résume les espaces vectoriels réels les plus importants et utilisés dans la pratique :

|  L'ensemble | La loi externe | La structure  |
| --- | --- | --- |
|  $$\mathbb{R}^2$$ ou $$\mathcal{Y}_2$$ | $$\alpha \cdot (a; b) = (\alpha a; \alpha b)$$ | $$(\mathbb{R}^2; +; \cdot)$$ est un espace vectoriel réel  |
|  $$\mathbb{R}^3$$ ou $$\mathcal{Y}_3$$ | $$\alpha \cdot (a; b; c) = (\alpha a; \alpha b; \alpha c)$$ | $$(\mathbb{R}^3; +; \cdot)$$ est un espace vectoriel réel  |
|  $$\mathcal{F}(I; \mathbb{R})$$ | $$(\forall x \in I) \quad (\alpha \cdot f)(x) = \alpha f(x)$$ | $$(\mathcal{F}(I; \mathbb{R}); +; \cdot)$$ est un espace vectoriel réel  |
|  $$\mathbf{M}_2(\mathbb{R})$$ | $$\alpha \cdot \begin{pmatrix} a & c \\ b & d \end{pmatrix} = \begin{pmatrix} \alpha a & \alpha c \\ \alpha b & \alpha d \end{pmatrix}$$ | $$(\mathbf{M}_2(\mathbb{R}); +; \cdot)$$ est un espace vectoriel réel  |
|  $$\mathbf{M}_3(\mathbb{R})$$ | $$\alpha \cdot \begin{pmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{pmatrix} = \begin{pmatrix} \alpha a_1 & \alpha a_2 & \alpha a_3 \\ \alpha b_1 & \alpha b_2 & \alpha b_3 \\ \alpha c_1 & \alpha c_2 & \alpha c_3 \end{pmatrix}$$ | $$(\mathbf{M}_3(\mathbb{R}); +; \cdot)$$ est un espace vectoriel réel  |

### COMBINAISONS LINÉAIRES – FAMILLE GÉNÉRATRICE
Dans l'espace vectoriel réel $$(\mathbb{R}^3; +; \cdot)$$ muni des lois usuelles, on considère les vecteurs :

$$\vec{u} = (1; -4; 0) \quad ; \quad \vec{v} = (0; 5; -1) \quad ; \quad \vec{s} = (3; -37; 5)$$

1. Vérifier que $$\vec{s} = 3\vec{u} - 5\vec{v}$$.

Le vecteur $$\vec{s}$$ est appelé une combinaison linéaire des vecteurs $$\vec{u}$$ et $$\vec{v}$$.

### GÉNÉRALISATION
Soit $$(E; +; \cdot)$$ un espace vectoriel réel.

Soit $$\vec{x}_1, \vec{x}_2, ..., \vec{x}_n$$ des vecteurs de $$E$$, et $$\alpha_1, \alpha_2, ..., \alpha_n$$ des nombres réels.

• Le vecteur $$\vec{x} = \sum_{i=1}^{n} \alpha_i \cdot \vec{x}_i$$ est appelé une combinaison linéaire des vecteurs

$$\vec{x}_1, \vec{x}_2, ..., \vec{x}_n$$. On dit aussi que la famille $$B = (\vec{x}_1; \vec{x}_2; ...; \vec{x}_n)$$ engendre $$\vec{x}$$.

• On dit que la famille $$B = (\vec{x}_1; \vec{x}_2; ...; \vec{x}_n)$$ engendre l'espace $$E$$ si tout élément $$\vec{x} \in E$$ peut s'écrire comme combinaison linéaire des vecteurs $$\vec{x}_1, \vec{x}_2, ..., \vec{x}_n$$.

2. a) Montrer que $$\vec{w}_1 = (-4; -11; 22)$$ est une combinaison linéaire des vecteurs $$\vec{u}_1 = (1; -4; 5)$$ et $$\vec{v}_1 = (2; 1; -4)$$
b) Le vecteur $$\vec{w}_2 = (3; 2; -3)$$ est-il une combinaison linéaire des vecteurs :

$$\vec{u}_2 = (1; 1; 1) \quad \text{et} \quad \vec{v}_2 = (3; 1; 2) \quad \text{et} \quad \vec{t}_2 = (1; -3; -1) ?$$

3. Montrer que la matrice $$M = \begin{pmatrix} 2 & 5 \\ 3 & 8 \end{pmatrix}$$ est une combinaison linéaire des matrices $$J = \begin{pmatrix} 0 & 2 \\ 2 & 0 \end{pmatrix}$$ et $$K = \begin{pmatrix} 2 & 2 \\ 0 & 8 \end{pmatrix}$$.

### DÉPENDANCE ET INDÉPENDANCE LINÉAIRE
Dans l'espace vectoriel $$(\mathbb{R}^2; +; \cdot)$$, on considère les vecteurs :

$$\vec{u}_1 = (1; 2) \quad ; \quad \vec{v}_1 = (-4; 3) \quad ; \quad \vec{u}_2 = (2; -4) \quad ; \quad \vec{v}_2 = (-3; 6)$$

1. a) Pour tous réels $$\alpha_1$$ et $$\beta_1$$, montrer que : $$\alpha_1 \vec{u}_1 + \beta_1 \vec{v}_1 = \vec{0} \Rightarrow \alpha_1 = \beta_1 = 0$$.

On dit que la famille $$(\vec{u}_1; \vec{v}_1)$$ est libre ou linéairement indépendante.

b) Montrer qu'il existe $$(\alpha_2; \beta_2) \in \mathbb{R}^2 - \{(0; 0)\}$$ tel que $$\alpha_2 \vec{u}_2 + \beta_2 \vec{v}_2 = \vec{0}$$.

On dit que la famille $$(\vec{u}_2; \vec{v}_2)$$ est liée ou linéairement dépendante.

2. Dans l'espace vectoriel réel $$(\mathcal{F}(\mathbb{R}; \mathbb{R}); +; \cdot)$$, on considère la famille $$B = (f_1; f_2)$$ définie par :

$$f_1 : x \mapsto \sin x \quad \text{et} \quad f_2 : x \mapsto \cos x$$

Montrer que la famille $$B$$ est libre.

3. Dans l'espace vectoriel réel $$(\vec{v}_3; +; \cdot)$$, on considère les vecteurs :

$$\vec{u} = \begin{pmatrix} \cos a \\ \cos b \\ \cos c \end{pmatrix} \quad ; \quad \vec{v} = \begin{pmatrix} \sin a \\ \sin b \\ \sin c \end{pmatrix} \quad ; \quad \vec{w} = \begin{pmatrix} \cos(x + a) \\ \cos(x + b) \\ \cos(x + c) \end{pmatrix}$$

où $$(a; b; c; x) \in \mathbb{R}^4$$.

Montrer que la famille $$(\vec{u}; \vec{v}; \vec{w})$$ est liée.

4. On pose : $$\vec{e}_1 = (1; 0; 0) \quad ; \quad \vec{e}_2 = (0; 1; 0) \quad ; \quad \vec{e}_3 = (0; 0; 1)$$

Montrer que la famille $$B_1 = (\vec{e}_1; \vec{e}_2; \vec{e}_3)$$ engendre l'espace vectoriel $$(\mathbb{R}^3; +; \cdot)$$.

On dit aussi que $$B_1 = (\vec{e}_1; \vec{e}_2; \vec{e}_3)$$ est une famille génératrice de l'espace vectoriel $$(\mathbb{R}^3; +; \cdot)$$.

5. Déterminer une famille génératrice de l'espace vectoriel $$(\mathbb{M}_2(\mathbb{R}); +; \cdot)$$.

### BASES D'UN ESPACE VECTORIEL - DIMENSION
Dans l'espace vectoriel réel $$(\mathbb{R}^2; +; \cdot)$$, on considère la famille $$B = (\vec{u}; \vec{v})$$ telle que :

$$\vec{u} = (1; 3) \quad \text{et} \quad \vec{v} = (-2; 1)$$

1. Montrer que : $$(\forall \vec{w} \in \mathbb{R}^2) \quad (\exists! (\alpha; \beta) \in \mathbb{R}^2) \quad \vec{w} = \alpha \vec{u} + b \vec{v}$$

On dit que $$B$$ est une base de l'espace vectoriel $$(\mathbb{R}^2; +; \cdot)$$.

2. Montrer que la famille $$B$$ est libre et génératrice de l'espace vectoriel $$(\mathbb{R}^2; +; \cdot)$$.

### GÉNÉRALISATION
Soit $(E; +; \cdot)$ un espace vectoriel réel, et $B = (\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$ une famille de vecteurs de $E$.
Dire que la famille $B = (\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$ est une base de $E$ signifie qu'elle est à la fois libre et génératrice dans $E$. Ce qui est est équivalent de dire :

$$(\forall \vec{x} \in E) \left( \exists! (\alpha_1; \alpha_2; \dots; \alpha_n) \in \mathbb{R}^n \right) \quad \vec{x} = \sum_{i=1}^n \alpha_i \cdot \vec{x}_i$$

Les réels $\alpha_1; \alpha_2; \dots; \alpha_n$ sont appelés alors les composants du vecteur $\vec{x}$ dans la base $B$.
Enfin, le nombre $n$ des éléments de $B$ est appelé la dimension de $E$, et on note : $\dim E = n$.

3. Dans l'espace vectoriel $(\mathbb{R}^3; +; \cdot)$, on considère la famille $B = (\vec{e}_1; \vec{e}_2; \vec{e}_3)$ telle que :

$$\vec{e}_1 = (1; 0; 0) \quad ; \quad \vec{e}_2 = (0; 1; 0) \quad ; \quad \vec{e}_3 = (0; 0; 1)$$

a) Montrer que $B$ est une base de l'espace vectoriel $\left(\mathbb{R}^3; +; \cdot\right)$.
b) On considère les vecteurs: $\vec{x}_1 = (1;2;3)$ ； $\vec{x}_2 = (1; - 1;1)$ ； $\vec{x}_3 = (1;1;1)$

b1) Montrer que $B^{\prime} = (\vec{x}_{1};\vec{x}_{2};\vec{x}_{3})$ est une base de l'espace vectoriel $\left(\mathbb{R}^3; + ;\cdot\right)$.
b2) On considère le vecteur $\vec{x} = (3;4;5)$ de l'espace vectoriel $\mathbb{R}^3$

- Déterminer les composants du vecteur $\vec{x}$ dans la base $B$.
- Déterminer les composants du vecteur $\vec{x}$ dans la base $B'$.

### SOUS-ESPACE VECTORIEL
Soit : $\mathbb{F} = \{ f \in \mathcal{I}(\mathbb{R}; \mathbb{R}) \mid \exists (a; b; c) \in \mathbb{R}^3 \mid (\forall x \in \mathbb{R}) \ f(x) = (ax^2 + bx + c)e^{3x} \}$

1. a) Montrer que $\mathbb{F} \neq \emptyset$, et que: $\left(\forall (\alpha; \beta) \in \mathbb{R}^2\right) \left(\forall (f; g) \in \mathbb{F}^2\right) \quad \alpha f + \beta g \in \mathbb{F}$.
b) En déduire que $(\mathbb{F}; + ;\cdot)$ est un espace vectoriel réel.

On a $\mathbb{F} \subset \mathcal{I}(\mathbb{R}; \mathbb{R})$ et $(\mathbb{F}; +; \cdot)$ est un espace vectoriel réel.

On dit que $\mathbb{F}$ est un sous-espace vectoriel de l'espace vectoriel réel $(\mathcal{I}(\mathbb{R}; \mathbb{R}); +; \cdot)$.

2. On considère la famille $B = (f_0; f_1; f_2)$ telle que pour tout $x \in \mathbb{R}$ :

$$f_0(x) = e^{3x} \quad ; \quad f_1(x) = xe^{3x} \quad ; \quad f_2(x) = x^2e^{3x}$$

Montrer que $B$ est une base de l'espace vectoriel $(\mathbb{F}; +; \cdot)$.

3. Soit $f$ un élément de $\mathbb{F}$.

Montrer que la fonction dérivée $f'$ est aussi un élément de $\mathbb{F}$.

4. Déterminer les coordonnées de $f'$ dans la base $B$.

## Cours
### 1. Espace vectoriel réel
#### 1.1. Loi de composition externe
> **Définition 1.**
Soit $\mathbb{K}$ un corps et E un ensemble.

On appelle loi de composition externe de $\mathbb{K}$ sur E, toute application de $\mathbb{K} \times \mathbb{E}$ dans E.

Si $\alpha \in \mathbb{K}$ et $x \in \mathbb{E}$, on note en général $\alpha \cdot x$ ou $\alpha x$ l'image de $(\alpha; x)$ par cette application.

> **Remarques.**
- Dans la définition précédente, on peut avoir $ \mathbf{E} = \mathbb{K} $; et dans ce cas, on parle d'une loi de composition interne. Ainsi, toute loi de composition interne sur $ \mathbf{E} $ peut être considérée comme une loi de composition externe sur $ \mathbf{E} $ à coefficients dans $ \mathbf{E} $.
Au cours de ce chapitre, on prendra $\mathbb{K} = \mathbb{R}$ comme corps de reference.

> **Exemples.**
1) L'ensemble $\mathbb{M}_2(\mathbb{R})$ : ensemble des matrices carrées d'ordre 2 à coefficients réels.

Pour toute matrice $M = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ et pour tout réel $\alpha$, on appelle produit de $\alpha$ par $M$, et on le note $\alpha M$, la matrice $\begin{pmatrix} \alpha a & \alpha b \\ \alpha c & \alpha d \end{pmatrix}$. On a alors obtenu une loi de composition externe de $\mathbb{R}$ sur $\mathbb{M}_2(\mathbb{R})$. Cette loi s'appelle multiplication d'une matrice par un réel.

2) L'ensemble $\mathbb{R}^n$ ($n \in \mathbb{N}^*$) : ensemble des n-uplets.

Pour tout $X = (x_1; x_2; ...; x_n) \in \mathbb{R}^n$ et pour tout réel $\alpha$, on appelle produit de $X$ par $\alpha$, et on le note $\alpha X$, le $n$-uplet $\alpha X = (\alpha x_1; \alpha x_2; ...; \alpha x_n)$. On a alors obtenu une loi de composition externe de $\mathbb{R}$ sur $\mathbb{R}^n$.

Dans l'usage pratique, on prend souvent $\mathbb{R}^2$ (ensemble des couples) et $\mathbb{R}^3$ (ensemble des triplets)

3) L'ensemble $\mathcal{V}_2$ : ensemble des vecteurs du plan.

Pour tout vecteur $\vec{u} \in \mathcal{V}_2$ et pour tout réel $\alpha$, Le produit de $\alpha$ par $\vec{u}$, noté $\alpha \vec{u}$, est un élément de $\mathcal{V}_2$.

On a alors obtenu une loi de composition externe de $\mathbb{R}$ sur $\mathcal{V}_2$. Cette loi s'appelle multiplication d'un vecteur par un réel.

La multiplication d'un vecteur de $\mathcal{V}_3$ par un réel est aussi une loi de composition externe de $\mathbb{R}$ sur $\mathcal{V}_3$.

4) L'ensemble $\mathcal{P}_n$ ($n \in \mathbb{N}^*$) : ensemble des polynômes de degré inférieur ou égale à $n$.

Pour tout polynôme $P \in \mathcal{P}_n$ et pour tout réel $\alpha$, Le produit de $P$ par $\alpha$, noté $\alpha P$, est un élément de $\mathcal{P}_n$. On a alors obtenu une loi de composition externe de $\mathbb{R}$ sur $\mathcal{P}_n$.

#### 1.2. Structure d'espace vectoriel réel
Au secondaire, que ce soit en Mathématiques ou en Physique, nous avons utilisé les vecteurs du plan ou de l'espace : nous avons déjà additionné deux vecteurs et effectué le produit d'un vecteur par un réel. Par des démonstrations élémentaires de géométrie, on peut constater certaines propriétés de ces deux opérations parmi lesquelles la commutativité et l'associativité de l'addition.

En se plaçant dans une base $(\vec{i}; \vec{j})$, on peut aussi :

- associier, à tout vecteur $\vec{u}$, le couple de ses composants réels;
- traduire les opérations précédentes sur ces couples de coordonnées et ainsi obtenir, sur les éléments de $\mathbb{R}^2$, des opérations d'addition, et de multiplication par un réel.

Enfin, aux chapitres 4 et 5 de cet ouvrage, nous avons vu l'ensemble $\mathcal{F}(I; \mathbb{R})$ des fonctions définies sur un intervalle $I$ et à valeurs dans $\mathbb{R}$, dans lequel, l'addition de deux fonctions et le produit d'une fonction par un réel ont les mêmes propriétés que les opérations précédentes.

La structure d'espace vectoriel, que nous allons introduire et qui est très importante en Mathématique, pourra paraître abstraite au prime abord ; c'est pourquoi, pour l'assimiler plus facilement, il est bon, tout au long de ce qui va suivre, de garder à l'esprit les trois exemples précédents et de ne pas hésiter à les manipuler.

> **Définition 2.**
Un espace vectoriel réel (ou $\mathbb{R}$-espace vectoriel) est un triplet $(\mathrm{E}; +; \cdot)$ dans lequel E est un ensemble non vide muni :

(1) d'une loi de composition interne, notée +, telle que $(\mathrm{E}; + )$ est un groupe commutatif, cette loi est l'addition de E ; son élément neutre est noté $0_{\mathrm{E}}$
(2) d'une loi de composition externe, application de $\mathbb{R} \times \mathbb{E}$ dans $\mathbb{E}$, appelée produit externe ou produit par un scalaire, notée $(\alpha; x) \mapsto \alpha \cdot x$, et possédant les propriétés suivantes:

$\left(\forall (\alpha ;\beta)\in \mathbb{R}^2\right)(\forall x\in \mathrm{E})(\alpha +\beta)\cdot x = \alpha \cdot x + \beta \cdot x;$
$\left(\forall \alpha \in \mathbb{R}\right)\left(\forall (x;y)\in \mathrm{E}^{2}\right)$ $\alpha \cdot (x + y) = \alpha \cdot x + \alpha \cdot y$
$\left(\forall (\alpha ;\beta)\in \mathbb{R}^2\right)(\forall x\in \mathrm{E})$ $(\alpha \beta)\cdot x = \alpha \cdot (\beta \cdot x);$
$\left(\forall x \in \mathrm{E}\right) 1 \cdot x = x$

On appelle alors vecteurs les éléments de E et scalaires les éléments de $\mathbb{R}$.

> **Exemples.**
1) Le corps $(\mathbb{R}; + ; \times)$ est un espace vectoriel réel.
2) L'ensemble $\mathbb{C}$ est un espace vectoriel réel si on le munit de son addition « + » et de la loi externe « · »

$$\begin{array}{l} \mathbb{R} \times \mathbb{C} \to \mathbb{C} \\ (\alpha; x) \mapsto \alpha x \end{array}$$

3) $$(M_2(\mathbb{R}); +; \cdot)$$ est un espace vectoriel réel.

4) $$(R^2; +; \cdot)$$ et $$(R^3; +; \cdot)$$ sont des espaces vectoriels réels.

5) $$(Q_2'; +; \cdot)$$ et $$(Q_3'; +; \cdot)$$ sont des espaces vectoriels réels.

6) L'ensemble $$\mathcal{P}_n$$ est un espace vectoriel réel si on le munit de son addition « + » et de la loi externe « · »

$$\mathbb{R} \times \mathcal{P}_n \to \mathcal{P}_n$$

$$(\alpha; P) \mapsto \alpha P$$

7) L'ensemble $$\mathcal{F}(I; \mathbb{R})$$ est un espace vectoriel réel si on le munit de son addition « + » et de la loi externe « · »

$$\mathbb{R} \times \mathcal{F}(I; \mathbb{R}) \to \mathcal{F}(I; \mathbb{R})$$

$$(\alpha; f) \mapsto \alpha f$$

> **Notations.**
• Dans tout ce qui suit, on adopte les conventions et les symboles suivants :

✓ En l'absence d'informations sur la nature des éléments de E, un élément de E sera noté généralement $$\vec{x}$$.

✓ On utilise l'écriture $$\alpha \vec{x}$$ au lieu $$\alpha \cdot \vec{x}$$ où $$\alpha \in \mathbb{R}$$ et $$\vec{x} \in E$$.

✓ L'élément neutre de $$(E; +)$$ sera noté $$\vec{0}$$. C'est le vecteur nul de l'espace vectoriel E.

✓ Si $$\alpha \in \mathbb{R}^*$$ et $$\vec{x} \in E$$, on peut « diviser $$\vec{x}$$ par $$\alpha$$ » : cela revient à multiplier

le vecteur $$\vec{x}$$ par le scalaire $$\alpha^{-1}$$. Ainsi $$\frac{1}{\alpha}\vec{x}$$ se note aussi $$\frac{\vec{x}}{\alpha}$$.

✓ Si $$\vec{u}$$ et $$\vec{v}$$ sont deux vecteurs de E, le vecteur $$\vec{u} + (-\vec{v})$$ s'écrit $$\vec{u} - \vec{v}$$.

Le vecteur $$\vec{u} - \vec{v}$$ s'appelle la différence des vecteurs $$\vec{u}$$ et $$\vec{v}$$ dans cet ordre.

• En pratique, les opérations « + » et « · » sont le plus souvent utilisées sans ambiguïté.

En conséquence, l'espace vectoriel réel $$(E; +; \cdot)$$ sera plus simplement noté E, et on dira que

E est un $$\mathbb{R}$$ - espace vectoriel.

En tenant compte de ces nouvelles notations, on aboutit à la définition suivante d'un $$\mathbb{R}$$ - espace vectoriel.

> **Définition 3.**
$$(E; +; \cdot)$$ est un espace vectoriel réel (ou $$\mathbb{R}$$ - espace vectoriel) lorsque :

(1) $(\mathbf{E}; + )$ est un groupe commutatif.
(2) $(\forall (\alpha ;\beta)\in \mathbb{R}^2)$ $(\forall \vec{x}\in E)$ $(\alpha +\beta)\vec{x} = \alpha \vec{x} +\beta \vec{x}$
(3) $(\forall \alpha \in \mathbb{R})(\forall (\vec{x};\vec{y})\in E^2)$ $\alpha (\vec{x} +\vec{y}) = \alpha \vec{x} +\alpha \vec{y}$
(4) $(\forall (\alpha ;\beta)\in \mathbb{R}^2)$ $(\forall \vec{x}\in E)$ $(\alpha \beta)\vec{x} = \alpha (\beta \vec{x})$
(5) $(\forall \vec{x}\in E)$ $1\vec{x} = \vec{x}$

#### 1.3. Règles de calcul dans un espace vectoriel réel
> **Proposition 1.**
Soit (E; +; ·) est un espace vectoriel réel. Alors :

1) Tout vecteur de E est un élément régulier dans $(E; +)$
2) Pour tout $\vec{x} \in E: 0\vec{x} = \vec{0}$.
3) Pour tout $\alpha \in \mathbb{R}$: $\alpha, \vec{0} = \vec{0}$.
4) Pour tous $\alpha \in \mathbb{R}$ et pour tout $\vec{x} \in E$: $\alpha \vec{x} = \vec{0} \Leftrightarrow (\alpha = 0 \text{ ou } \vec{x} = \vec{0})$.

> **Preuve.**
1) Puisque $(E; + )$ est un groupe commutatif alors tout vecteur de E est régulier pour l'addition.
2) On a pour tout $\vec{x} \in E: 0\vec{x} + \vec{0} = 0\vec{x} \Leftrightarrow 0\vec{x} + \vec{0} = (0 + 0)\vec{x} \Leftrightarrow 0\vec{x} + \vec{0} = 0\vec{x} + 0\vec{x} \Leftrightarrow 0\vec{x} = \vec{0}$
3) On a pour tout $\alpha \in \mathbb{R}$ .. $\alpha \vec{0} = \alpha (\vec{0} +\vec{0})\Leftrightarrow \vec{0} +\alpha \vec{0} = \alpha \vec{0} +\alpha \vec{0}\Leftrightarrow \alpha \vec{0} = \vec{0}$
4) Soit $\alpha \in \mathbb{R}$ et $\vec{x} \in E$.

$\cdot (\Leftarrow)$ :deja montre en 1) et 2).
$\cdot (\Rightarrow)$ : Supposons que $\alpha \vec{x} = \vec{0}$ . Si $\alpha \neq 0$ alors: $\frac{1}{\alpha} (\alpha \vec{x}) = \left(\frac{\alpha}{\alpha}\right)\vec{x} = \vec{0}$ (d'après la definition 3);

il s'ensuit l x̄ = 0 et donc x̄ = 0. D'où le résultat.

> **Proposition 2.**
Soit (E; +; ·) est un espace vectoriel réel. Alors :

1) Pour tous $\alpha \in \mathbb{R}$ et pour tout $\vec{x} \in E$: $(- \alpha) \vec{x} = \alpha (-\vec{x}) = -(\alpha \vec{x})$
2) Pour tout $(\vec{u};\vec{v})\in E^2$ , l'équation $\vec{x} +\vec{u} = \vec{v}$ admet une solution unique dans E. Cette solution est $\vec{x} = \vec{v} +(-\vec{u}) = \vec{v} -\vec{u}$ . $(\vec{v} -\vec{u}$ etant la difference des vecteurs $\vec{u}$ et $\vec{v}$ dans cet ordre).
3) Pour tous $(\alpha ;\beta)\in \mathbb{R}^2$ et pour tout $(\vec{x};\vec{y})\in \mathrm{E}^2$ .. $\alpha (\vec{x} -\vec{y}) = \alpha \vec{x} -\alpha \vec{y}$ et $(\alpha -\beta)\vec{x} = \alpha \vec{x} -\beta \vec{x}$

> **Preuve.**
1) Soit α ∈ R et x̄ ∈ E. On a : (α + (-α)) x̄ = αx̄ + (-α)x̄, et donc 0x̄ = αx̄ + (-α)x̄, d'où α(-x̄) = -(α). L'égalité (-α)x̄ = α(-x̄) provient immédiatement de la définition 3 (prendre β = -1 dans 3). Ainsi :

(-α)x̄ = α(-x̄) = -(αλ)

2) Puisque (E; +) est un groupe commutatif alors tout élément de E est symétrisable pour la loi « + ».

Ainsi : x̄ + ū = v̄ ⇔ x̄ + ū + (-ū) = v̄ + (-ū) ⇔ x̄ + 0̄ = v̄ - ū ⇔ x̄ = v̄ - ū

3) C'est une conséquence immédiate du 1). en utilisant la définition 3.

> **Example.**
Dans l'espace vectorie $M_3(\mathbb{R})$, on considère les matrices :

$$A = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} \quad ; \quad O_3 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \quad ; \quad I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

a) Vérifier que : $A^2 - A - 2I_3 = O_3$.

b) Résoudre dans $\mathbb{R}$ l'équation : $xI_3 = (3x + 5)(A + 3I_3)(A - 4I_3)$ (E)

Réponse :

a) On a :

$$A^2 = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix} \text{ et } A^2 - A - 2I_3 = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix} - \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} - 2 \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = O_3$$

Ainsi : $A^2 - A - 2I_3 = O_3$

b) Résolvons l'équation : $xI_3 = (3x + 5)(A + 3I_3)(A - 4I_3)$ (E)

On a $A^2 - A - 2I_3 = O_3$ et donc $A^2 - A = 2I_3$ ; il s'ensuit alors :

$$\begin{aligned} (E) &\Leftrightarrow xI_3 = (3x + 5)(A + 3I_3)(A - 4I_3) \\ &\Leftrightarrow xI_3 = (3x + 5)(A^2 - A - 12I_3) \\ &\Leftrightarrow xI_3 = (3x + 5)(-2I_3 - 12I_3) \\ &\Leftrightarrow xI_3 = -14(3x + 5)I_3 \\ &\Leftrightarrow (42x + 71)I_3 = O_3 \end{aligned}$$

Comme $I_3 \neq O_3$ : $(E) \Leftrightarrow 42x + 71 = 0 \Leftrightarrow x = -\frac{71}{42}$

Par suite, l'ensemble solution de l'équation $(E)$ est : $S = \left\{-\frac{71}{42}\right\}$.

> **Applications.**
1. On définit sur $\mathbb{R}^*$ une loi de composition externe « · » à coefficients réels par :

$$(\forall \alpha \in \mathbb{R}) (\forall x \in \mathbb{R}^*) \alpha \cdot x = x^\alpha$$

Montrer que $(\mathbb{R}^*; \times; \cdot)$ est un espace vectoriel réel.

2. On munit $\mathbb{R}^2$ de deux lois :

- d'une loi interne: $(x; y) + (x'; y') = (x + x'; y + y')$
- d'une loi externe: $(\forall \lambda \in \mathbb{R})$ $\lambda \cdot (x;y) = (0;\lambda y)$

$(\mathbb{R}^2; +; \cdot)$ est-il un espace vectoriel réel ? Justifier.

### 2. Sous-espace vectoriel
#### 2.1. Définition et exemples
> **Définition 4.**
Étant donné un espace vectoriel réel (E; +; ·), une partie F de E est un sous-espace vectoriel de E lorsque :

(1) $F\neq \emptyset$
(2) $F$ est stable pour l'addition: $\left(\forall (\vec{x};\vec{y})\in F^2\right)$ $\vec{x} +\vec{y}\in F$
(3) $F$ est stable pour le produit externe: $\left(\forall (\alpha ;\vec{x})\in \mathbb{R}\times F\right)$ $\alpha \cdot \vec{x}\in F$
(4) $(F; + ; \cdot)$ est un espace vectoriel réel.

> **Remarques.**
- Attention! pour couver que $ F $ est un sous-espace vectoriel de $ E $, ne pas oublier de vérifier que $ F \neq \emptyset $ et $ F \subset E $. Le plus fréquent pour montrer que $ F \neq \emptyset $ est de justifier que $ \vec{0} \in F $.
- E et $\{\vec{0}\}$ sont des sous-espaces vectoriels de E, $\{\vec{0}\}$ est appelé le sous-espace nul.
- Avec $\vec{u} \in \mathbb{E} - \{\vec{0}\}$, le sous-ensemble $\mathbb{R}\vec{u} = \{\alpha\vec{u} / \alpha \in \mathbb{R}\}$ est un sous-espace vectoriel de E, appelé la droite vectorielle dirigée par le vecteur $\vec{u}$.

> **Exemples.**
1) Dans $(\mathcal{V}_2; +; \cdot)$, l'ensemble des vecteurs colinéaires à $\vec{u} = (2; 1)$ est un sous-espace vectoriel de $(\mathcal{V}_2; +; \cdot)$. C'est la droite vectorielle dirigée par le vecteur $\vec{u}$, c'est-à-dire $\mathbb{R}\vec{u}$.
2) L'ensemble $\mathbb{R}$ des nombres réels et l'ensemble $i\mathbb{R}$ des imaginaires purs sont deux sous-espaces vectoriels de l'espace vectoriel $(\mathbb{C}; + ; \times)$.
3) On note $\mathcal{C}(I; \mathbb{R})$ l'ensemble des fonctions continues sur un intervalle $I$ à valeurs dans $\mathbb{R}$. Alors, $\mathcal{C}(I; \mathbb{R})$ est un sous-espace vectoriel de $\mathcal{F}(I; \mathbb{R})$. De même, l'ensemble $\mathcal{D}(I; \mathbb{R})$ des fonctions dérivables sur un intervalle $I$ à valeurs dans $\mathbb{R}$ est aussi un sous-espace vectoriel de $\mathcal{F}(I; \mathbb{R})$.
4) L'ensemble $\mathcal{P}_n$ ($n \in \mathbb{N}^*$): ensemble des polynômes de degré inférieur ou égale à $n$ est un sous-espace vectoriel de $\mathcal{F}(\mathbb{R};\mathbb{R})$.
5) Dans l'espace vectoriel $\left(\mathcal{F}(\mathbb{R};\mathbb{R}); + ;\cdot\right)$, l'ensemble $F$ des solutions d'une équation différentielle linéaire de la forme $ay^{*} + by^{\prime} + cy = 0$ (avec $(a;b;c)\in \mathbb{R}^3$) est un sous-espace vectoriel de $\left(\mathcal{F}(\mathbb{R};\mathbb{R}); + ;\cdot\right)$. En effet, $F$ n'est pas vide car il contient au moins la fonction nulle. Si deux fonctions $f_{1}$ et $f_{2}$ sont solutions de l'équation différentielle, il en est de même de la fonction somme $f_{1} + f_{2}$. Enfin, si $f_{1}$ est une solution et $\alpha \in \mathbb{R}$, alors la fonction $\alpha f_{1}$ est solution.

6) L'ensemble $F = \{(x; y; z) \in \mathbb{R}^3 / x + y + z = 1\}$ n'est pas un sous-espace vectoriel du $(\mathbb{R}^3; +; \cdot)$ car il ne contient pas le vecteur nul $\vec{0} = (0; 0; 0)$.
7) L'ensemble $G = \{(x; y) \in \mathbb{R}^2 / xy = 0\}$ n'est pas un sous-espace vectoriel du $(\mathbb{R}^2; +; \cdot)$ car il n'est stable pour l'addition. Contre-exemple : $(1; 0) \in G$ et $(0; 1) \in G$, mais $(1; 0) + (0; 1) = (1; 1) \notin G$.

#### 2.2. Caractérisation d'un sous-espace vectoriel
> **Proposition 3.**
Soit $(E; +; \cdot)$ est un espace vectoriel réel et $F$ une partie de $E$. On a l'équivalence :

$$ (F \text{ est un sous-espace vectoriel de } E) \Leftrightarrow \begin{cases} F \neq \emptyset \\ (\forall (\alpha; \beta) \in \mathbb{R}^2) (\forall (\vec{x}; \vec{y}) \in F^2) \quad \alpha \vec{x} + \beta \vec{y} \in F \end{cases} $$

> **Preuve.**
(⇒) Supposons que $F$ est un sous-espace vectoriel de $E$. Alors, $F \neq \emptyset$. Soit maintenant $(\vec{x}; \vec{y}) \in F^2$ et $(\alpha; \beta) \in \mathbb{R}^2$. Par définition d'un sous-espace vectoriel, on peut affirmer successivement que $\alpha \vec{x} \in F$ et $\beta \vec{y} \in F$ puis que $\alpha \vec{x} + \beta \vec{y} \in F$.
(⊖) La réciproque est facile en prenant successivement $\alpha = \beta = 1$, puis $\beta = 0$.

> **Remarques.**
- Dans un contexte de sous-espaces vectoriels, on étudie l'appartenance de $\vec{0}$ à $F$ :

- $\vec{0} \in F$ donne $F \neq \emptyset$,
- $\vec{0} \notin F$, alors $F$ n'est pas un sous-espace vectoriel de $E$.

- Lorsqu'on souhaite montrer qu'un ensemble $F$ est un sous-vectoriel d'un espace vectoriel $E$, on aura le choix, ou bien d'utiliser la définition ou bien de se ramener à la proposition 3.

- Dans la pratique, pour montrer qu'un ensemble $F$ est un espace vectoriel réel, il peut être beaucoup plus facile de démontrer que c'est un sous-espace vectoriel d'un espace vectoriel réel connu. C'est pour cette raison qu'il faut connaître quelques espaces vectoriels réels les plus familiers, à savoir :

$$ (\mathbb{R}; +; \times) ; (\mathbb{C}; +; \cdot) ; (\mathbb{R}^n; +; \cdot) ; (\mathbb{M}_2(\mathbb{R}); +; \cdot) ; (\mathbb{M}_3(\mathbb{R}); +; \cdot) ; (\mathcal{I}(\mathbb{R}; \mathbb{R}); +; \cdot), \dots $$

> **Exemples.**
1) On considère l'ensemble : $E = \{(x; y) \in \mathbb{R}^2 / y = 2x\}$

Montrons que $(E; +; \cdot)$ est un sous-espace vectoriel de l'espace vectoriel $(\mathbb{R}^2; +; \cdot)$ :

On a $(0; 0) \in E$ (car $0 = 2 \times 0$) et donc $E \neq \emptyset$.

Soit $\vec{u}_1 = (x_1; y_1)$ et $\vec{u}_2 = (x_2; y_2)$ deux éléments de $E$ et $(\alpha; \beta) \in \mathbb{R}^2$.

On a $y_1 = 2x_1$ et $y_2 = 2x_2$, par conséquent :

$$\alpha \bar{u}_1 + \beta \bar{u}_2 = \alpha(x_1; y_1) + \beta(x_2; y_2) = (\alpha x_1 + \beta x_2; \alpha y_1 + \beta y_2)$$

On a : $\alpha y_1 + \beta y_2 = 2\alpha x_1 + 2\beta x_2 = 2(\alpha x_1 + \beta x_2)$, ce qui montre que : $\alpha \bar{u}_1 + \beta \bar{u}_2 \in \mathbb{E}$.

Par suite, $(\mathbb{E}; +; \cdot)$ est un sous-espace vectoriel de l'espace vectoriel $(\mathbb{R}^2; +; \cdot)$.

2) On considère l'ensemble : $F = \left\{ \begin{pmatrix} a+b & b \\ -b & a-b \end{pmatrix} / (a; b) \in \mathbb{R}^2 \right\}$

Montrons que $(F; +; \cdot)$ est un espace vectoriel réel :

Puisque $(\mathbb{M}_2(\mathbb{R}); +; \cdot)$ est un espace vectoriel réel et $F \subset \mathbb{M}_2(\mathbb{R})$, alors il suffit de montrer que $F$ est un sous-espace vectoriel de $(\mathbb{M}_2(\mathbb{R}); +; \cdot)$. On pose pour tout $(a; b) \in \mathbb{R}^2$ : $M(a; b) = \begin{pmatrix} a+b & b \\ -b & a-b \end{pmatrix}$

On a $F \neq \emptyset$ car $O_2 = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} \in F$ (remarquer bien que $O_2 = M(0; 0)$). Soit maintenant $M(a_1; b_1)$ et $M(a_2; b_2)$ deux éléments de $F$ et $(\alpha; \beta) \in \mathbb{R}^2$. On a alors :

$$\begin{aligned} \alpha M(a_1; b_1) + \beta M(a_2; b_2) &= \alpha \begin{pmatrix} a_1 + b_1 & b_1 \\ -b_1 & a_1 - b_1 \end{pmatrix} + \beta \begin{pmatrix} a_2 + b_2 & b_2 \\ -b_2 & a_2 - b_2 \end{pmatrix} \\ &= \begin{pmatrix} \alpha(a_1 + b_1) + \beta(a_2 + b_2) & \alpha b_1 + \beta b_2 \\ -\alpha b_1 - \beta b_2 & \alpha(a_1 - b_1) + \beta(a_2 - b_2) \end{pmatrix} \\ &= \begin{pmatrix} (\alpha a_1 + \beta a_2) + (\alpha b_1 + \beta b_2) & \alpha b_1 + \beta b_2 \\ -(\alpha b_1 + \beta b_2) & (\alpha a_1 + \beta a_2) - (\alpha b_1 + \beta b_2) \end{pmatrix} \\ &= M(\alpha a_1 + \beta a_2; \alpha b_1 + \beta b_2) \end{aligned}$$

Par conséquent : $\alpha M(a_1; b_1) + \beta M(a_2; b_2) \in F$. Ainsi, $(F; +; \cdot)$ est un espace vectoriel réel.

> **Applications.**
1. Montrer que les ensembles suivants sont des sous-espaces vectoriels de l'espace $(\mathbb{R}^3; +; \cdot)$ :

$$\begin{aligned} \mathbb{E} &= \{(x; y; z) \in \mathbb{R}^3 / x + 2y + 3z = 0\} \quad ; \quad F = \{(x + y; 2x - y; -3x + 2y) / x \in \mathbb{R} \text{ et } y \in \mathbb{R}\} \\ G &= \{(x; y; z) \in \mathbb{R}^3 / x + y + z = 0 \text{ et } 2x - 5y + z = 0\} \quad ; \quad H = \{(x; y; z) \in \mathbb{R}^3 / x = 3y = -z\} \end{aligned}$$

2. Justifier pourquoi les parties suivantes ne sont pas des sous-espaces vectoriels de $\mathbb{R}^3$ :

$$\mathbb{E}_1 = \{(x; y; z) \in \mathbb{R}^3 / x - y + z = 5\} \quad ; \quad \mathbb{E}_2 = \{(x; y; z) \in \mathbb{R}^3 / x + y + z \le 1\}$$

$$\mathbb{E}_3 = \{(x; y; z) \in \mathbb{R}^3 / x^2 - y^2 = 0\} \quad ; \quad \mathbb{E}_4 = \{(x; 1; z) \in \mathbb{R}^3 / x \in \mathbb{R} \text{ et } z \in \mathbb{R}\}$$

3. Soit $\mathbb{S}$ l'ensemble des suites numériques, muni de l'addition « + » et de la multiplication par un réel « · ».

a) Montrer que $(\mathbb{S}; +; \cdot)$ est un espace vectoriel réel.
b) Est-ce que les parties suivantes sont des sous-espaces vectoriels de l'espace $\mathbb{S}$?

$$S_1 = \{(u_n) \in \mathbb{S} / (\forall n \in \mathbb{N}) u_{n+1} = 3u_n\} \quad ; \quad S_2 = \{(u_n) \in \mathbb{S} / \lim_{n \to +\infty} |u_n| = +\infty\}$$

### 3. Familles libres ou génératrices et bases
#### 3.1. Combinaisons linéaires
> **Définition 5.**
Soit $n \in \mathbb{N}^*$ ainsi que $\vec{x}_1, \vec{x}_2, ..., \vec{x}_n$ des vecteurs d'un espace vectoriel réel $(E; +; \cdot)$.

On appelle combinaison linéaire des vecteurs $\vec{x}_1, \vec{x}_2, ..., \vec{x}_n$, ou encore combinaison linéaire de la

famille $(\vec{x}_1; \vec{x}_2; ...; \vec{x}_n)$, tout vecteur de la forme :

$$\alpha_1 \vec{x}_1 + \alpha_2 \vec{x}_2 + ... + \alpha_n \vec{x}_n = \sum_{i=1}^n \alpha_i \vec{x}_i \quad \text{avec} \quad \alpha_1, \alpha_2, ..., \alpha_n \in \mathbb{R}$$

Les réels $\alpha_1, \alpha_2, ..., \alpha_n$ sont appelés les coefficients de la combinaison linéaire $\sum_{i=1}^n \alpha_i \vec{x}_i$.

> **Remarques.**
- Il s'agit évidemment d'une généralisation de la définition d'une combinaison linéaire de deux vecteurs vue dans la proposition 3. De plus, un vecteur $\vec{x}$ est combinaison linéaire des vecteurs $\vec{x}_1, \vec{x}_2, \ldots, \vec{x}_n$ si, et seulement si, il existe des réels $\alpha_1, \alpha_2, \ldots, \alpha_n$ tels que: $\vec{x} = \sum_{i=1}^n \alpha_i \vec{x}_i$.
- Si $F$ est un sous-espace vectoriel de $(E; +; \cdot)$ contenant les vecteurs $\vec{x}_1, \vec{x}_2, \ldots, \vec{x}_n$, alors toute combinaison linéaire de ces vecteurs appartient encore à $F$.

> **Exemples.**
1) Les combinaisons linéaires de la famille à un seul élément $(\vec{u})$ sont les vecteurs $\alpha \vec{u}$ ou $\alpha \in \mathbb{R}$, celles de la famille à deux éléments $(\vec{u}; \vec{v})$ sont les vecteurs $\alpha \vec{u} + \beta \vec{v}$ ou $(\alpha; \beta) \in \mathbb{R}^2$.
2) Dans l'espace vectoriel $(\mathbb{M}_2(\mathbb{R}); + ;\cdot)$, on considère les matrices:

$$M_1 = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \quad \text{et} \quad M_2 = \begin{pmatrix} 1 & 1 \\ 0 & 4 \end{pmatrix}$$

La matrice $M = \begin{pmatrix} 2 & 5 \\ 3 & 8 \end{pmatrix}$ est une combinaison linéaire de $M_1$ et $M_2$ car :

$$3M_1 + 2M_2 = 3 \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} + 2 \begin{pmatrix} 1 & 1 \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 0 & 3 \\ 3 & 0 \end{pmatrix} + \begin{pmatrix} 2 & 2 \\ 0 & 8 \end{pmatrix} = \begin{pmatrix} 2 & 5 \\ 3 & 8 \end{pmatrix} = M$$

3) Dans l'espace vectoriel $(\mathcal{P}_3; +; \cdot)$ des polynômes de degré inférieur ou égale à 3, on considère les

polynômes $P_0, P_1, P_2$ et $P_3$ définis sur $\mathbb{R}$ par : $P_0(x) = 1$ ; $P_1(x) = x$ ; $P_2(x) = x^2$ ; $P_3(x) = x^3$

Tout élément $P$ de $\mathcal{P}_3$ peut s'écrire sous la forme : $(\forall x \in \mathbb{R}) \ P(x) = ax^3 + bx^2 + cx + d$, c'est-à-dire

$P(x) = a.P_1(x) + b.P_2(x) + c.P_1(x) + d.P_0(x)$. Ainsi, tout élément de $\mathcal{P}_3$ est combinaison linéaire de la

famille des polynômes $(P_0; P_1; P_2; P_3)$.

4) Dans l'espace vectoriel réel $(\mathbb{C}; +; \times)$, tout nombre complexe $z$ peut être considéré comme combinaison des nombres 1 et $i$ car : $(\forall z \in \mathbb{C}) \left( \exists (a; b) \in \mathbb{R}^2 \right) z = a + ib$.

> **Applications.**
1. On munit $\mathbb{R}^3$ des lois d'addition et de multiplication par un réel comme suit :

$$ (x; y; z) + (x'; y'; z') = (x + x'; y + y'; z + z') \quad \text{et} \quad \alpha(x; y; z) = (\alpha x; \alpha y; \alpha z) \text{ pour tout } \alpha \in \mathbb{R}. $$

On considère les vecteurs : $\vec{u} = (1; -4; 5)$ et $\vec{v} = (1; 2; -4)$

a) Montrer que le vecteur $\vec{w} = (3;18; - 30)$ est une combinaison linéaire des vecteurs $\vec{u}$ et $\vec{v}$
b) Le vecteur $\vec{p} = (-7;1;4)$ peut-il s'écrire comme combinaison linéaire des vecteurs $\vec{u}$ et $\vec{v}$ ? Justifier.

2. Dans l'espace vectoriel $(\mathcal{F}(\mathbb{R}; \mathbb{R}); +; \cdot)$, on considère les fonctions suivantes :

$$ \omega_1 : x \mapsto e^{-2x} \cos x \quad ; \quad \omega_2 : x \mapsto e^{-2x} \sin x $$

Et l'ensemble : $E = \{ \alpha \omega_1 + \beta \omega_2 \mid (\alpha; \beta) \in \mathbb{R}^2 \}$

a) Montrer que $E$ est un sous-espace vectoriel de $\left(\mathcal{F}(\mathbb{R};\mathbb{R}); + ;\cdot\right)$.
b) Montrer que si $ f \in E $ alors $ f' \in E $. ($ f' $ étant la dérivée de la fonction $ f $).
c) Soit $a \in \mathbb{R}$ et on considère la fonction $f_{a}$ définie sur $\mathbb{R}$ par: $f_{a}(x) = e^{-2x} \cos (x + a)$

Montrer que $f_a$ est une combinaison linéaire de $\omega_1$ et $\omega_2$.

3. Soit $\sigma$ un nombre complexe non réel (c'est-à-dire $\sigma \in \mathbb{C} \setminus \mathbb{R}$).

Montrer que tout nombre complexe est combinaison linéaire de 1 et $\sigma$.

#### 3.2. Familles libres et familles liées
> **Définition 6.**
Soit $E$ un espace vectoriel réel, $n \in \mathbb{N}^*$ et $(\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$ une famille de vecteurs de $E$.

• On dit que la famille $(\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$ est une famille libre de $E$, si :

$$ \left( \forall (\alpha_1; \alpha_2; \dots; \alpha_n) \in \mathbb{R}^n \right) ; \quad \sum_{i=1}^n \alpha_i \vec{x}_i = \vec{0} \Rightarrow \alpha_1 = \alpha_2 = \dots = \alpha_n = 0 $$

On dit encore dans ce cas-là que les vecteurs $\vec{x}_1, \vec{x}_2, \dots, \vec{x}_n$ sont linéairement indépendants.

• On dit que la famille $(\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$ est une famille liée de $E$, si elle n'est pas libre. Cela signifie donc qu'il existe une famille $(\alpha_1; \alpha_2; \dots; \alpha_n)$ de réels non tous nuls vérifiant $\sum_{i=1}^n \alpha_i \vec{x}_i = \vec{0}$ :

On dit encore dans ce cas-là que les vecteurs $\vec{x}_1, \vec{x}_2, \dots, \vec{x}_n$ sont linéairement dépendants.

> **Remarque.**
Dans la pratique, lorsque qu'on s'intéresse à la liberté éventuelle d'une famille $(\vec{x}_1; \vec{x}_2; \ldots; \vec{x}_n)$, on considère $(\alpha_1; \alpha_2; \ldots; \alpha_n) \in \mathbb{R}^n$ tel que $\alpha_1 \vec{x}_1 + \alpha_2 \vec{x}_2 + \ldots + \alpha_n \vec{x}_n = \vec{0}$. Si cette égalité nous conduit forcément vers $\alpha_1 = \alpha_2 = \ldots = \alpha_n = 0$, alors, la famille $(\vec{x}_1; \vec{x}_2; \ldots; \vec{x}_n)$ est libre. Dans le cas contraire, elle est liée.

> **Exemples.**
1) Placons-nous dans $ E = \mathbb{R}^3 $ et considérons les trois vecteurs :

\[
\vec {u} _ {1} = (2; - 1; 3) \quad ; \quad \vec {u} _ {2} = (1; - 3; - 1) \quad ; \quad \vec {u} _ {3} = (0; 1; 1)
\]

La famille $(\vec{u}_1; \vec{u}_2; \vec{u}_3)$ est liée car $\frac{1}{5} \vec{u}_1 - \frac{2}{5} \vec{u}_2 - \vec{u}_3 = \vec{0}$.

La famille $(\vec{u}_1; \vec{u}_2; \vec{u}_3)$ est liée car $\frac{1}{5} \vec{u}_1 - \frac{2}{5} \vec{u}_2 - \vec{u}_3 = \vec{0}$.

par: $ P_{1}(x) = x^{3} - 1 $; $ P_{2}(x) = x^{3} + x $; $ P_{3}(x) = x^{2} - x $; $ P_{4}(x) = -1 + x^{2} $

La famille $(P_{1};P_{2};P_{3};P_{4})$ est libre. En effet, si $(\alpha_{1};\alpha_{2};\alpha_{3};\alpha_{4})\in \mathbb{R}^{4}$ vérifie $\alpha_{1}P_{1} + \alpha_{2}P_{2} + \alpha_{3}P_{3} + \alpha_{4}P_{4} = 0$

Alors, pour tout $ x \in \mathbb{R} : (\alpha_1 + \alpha_2)x^3 + (\alpha_3 + \alpha_4)x^2 + (\alpha_2 - \alpha_3)x + (-\alpha_1 - \alpha_4) = 0 $.

Alors, pour tout $ x \in \mathbb{R} : (\alpha_1 + \alpha_2)x^3 + (\alpha_3 + \alpha_4)x^2 + (\alpha_2 - \alpha_3)x + (-\alpha_1 - \alpha_4) = 0 $. Un polynôme n'est nul que lorsque tous ses coefficients sont nuls. Cela conduit à résoudre le système :

\[
\left\{ \begin{array}{l} \alpha_ {1} + \alpha_ {2} = 0 \\ \alpha_ {3} + \alpha_ {4} = 0 \\ \alpha_ {2} - \alpha_ {3} = 0 \\ - \alpha_ {1} - \alpha_ {4} = 0 \end{array} ; c ^ {\prime} \text {est - à - dire}: \left\{ \begin{array}{l} \alpha_ {2} = - \alpha_ {1} \\ \alpha_ {4} = - \alpha_ {3} \\ - \alpha_ {1} - \alpha_ {3} = 0 \\ - \alpha_ {1} + \alpha_ {3} = 0 \end{array} ; d ^ {\prime} o u: \left\{ \begin{array}{l} \alpha_ {1} = 0 \\ \alpha_ {2} = 0 \\ \alpha_ {3} = 0 \\ \alpha_ {4} = 0 \end{array} . \right. \right. \right.
\]

Ainsi, la famille $(P_{1}; P_{2}; P_{3}; P_{4})$ est libre.

3) Toute famille de vecteurs $(\vec{x}_1; \vec{x}_2; \ldots; \vec{x}_n)$ contenant le vecteur nul est liée : en effet, si $\vec{x}_j = \vec{0}$, alors en

prenant $\alpha_{i}=0$ pour $i\neq j$, et $\alpha_{j}=1$, on a $\sum_{i=1}^{n}\alpha_{i}\vec{x}_{i}=\vec{x}_{j}=\vec{0}$.

4) Soit $\sigma \in \mathbb{C} \setminus \mathbb{R}$. Montrons que la famille $(1; \sigma)$ est libre dans l'espace vectoriel réel $(\mathbb{C}; +; \times)$:

Puisque $\sigma \in \mathbb{C} \setminus \mathbb{R}$ alors sa forme algébrique est $\sigma = \operatorname{Re}(\sigma) + i \operatorname{Im}(\sigma)$ avec $\operatorname{Im}(\sigma) \neq 0$.

Soit maintenant $(\alpha; \beta) \in \mathbb{R}^2$ tel que $\alpha \times 1 + \beta \times \sigma = 0$. On a alors:

\[
\alpha + \beta \sigma = 0 \Rightarrow \alpha + \beta (\operatorname{Re} (\sigma) + i \operatorname{Im} (\sigma)) = 0 \Rightarrow \alpha + \beta \operatorname{Re} (\sigma) + i \beta \operatorname{Im} (\sigma) = 0
\]

Un nombre complexe est nul si sa partie réelle et sa partie imaginaire sont nulles. On obtient alors

le système : $\left\{ \begin{array}{l} \alpha + \beta \operatorname{Re}(\sigma) = 0 \\ \beta \operatorname{Im}(\sigma) = 0 \end{array} \right.$

Comme $\operatorname{Im}(\sigma) \neq 0$ alors nécessairement $\beta = 0$ et donc, d'après $\alpha + \beta \operatorname{Re}(\sigma) = 0$, $\alpha = 0$.

Par suite, la famille $(1; \sigma)$ est libre dans l'espace vectoriel réel $(\mathbb{C}; +; \times)$.

5) Plaçons-nous dans E = ℝ³ et considérons les trois vecteurs :

$$\vec{u} = (\cos a; \cos b; \cos c) \quad ; \quad \vec{v} = (\sin a; \sin b; \sin c) \quad ; \quad \vec{w} = (\sin(x+a); \sin(x+b); \sin(x+c))$$
où (a; b; c; x) ∈ ℝ⁴.

Montrons que la famille (ū; v⃗; w⃗) est liée :

On a pour tout (a; b; c; x) ∈ ℝ⁴ :

$$\begin{cases} \sin(x+a) = \sin x.\cos a + \cos x.\sin a \\ \sin(x+b) = \sin x.\cos b + \cos x.\sin b \\ \sin(x+c) = \sin x.\cos c + \cos x.\sin c \end{cases}$$

Il s'ensuit donc : w⃗ = sin x(cos a; cos b; cos c) + cos x(sin a; sin b; sin c), d'où : w⃗ = (sin x)u⃗ + (cos x)v⃗

Par suite, la famille (ū; v⃗; w⃗) est liée.

> **Applications.**
1. Dans l'espace vectoriel réel (ℱ(ℝ; ℝ); +; ·), on considère les fonctions :

$$f : x \mapsto x+1 \quad ; \quad g : x \mapsto x^2 \quad ; \quad h : x \mapsto x^2 - x + 3$$

Montrer que la famille (f; g; h) est libre.

2. Dans l'espace vectoriel (M₂(ℝ); +; ·), on considère les matrices :

$$A = \begin{pmatrix} 2 & 6 \\ 3 & 4 \end{pmatrix} \quad ; \quad D = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix} \quad ; \quad J = \begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix}$$

a) Montrer que la famille $(D;J)$ est libre et que la famille $(A;D;J)$ est liée.
b) La famille $(A;D)$ est-elle libre? Justifier.

3. Dans l'espace vectoriel ℝ³, déterminer si les familles de vecteurs suivants sont libres ou liées :

a) ū = (1; 2; 3) et v⃗ = (3; 2; 1).

b) ū = (-1; 0; 2), v⃗ = (0; 1; -2) et w⃗ = (2; 1; 0).

c) ū = (7; 2; -1), v⃗ = (1; -3; 2), w⃗ = (5; 1; 1) et t⃗ = (-2; 1; 3).

> **Proposition 4.**
Soit E un espace vectoriel réel.

1) Une famille $(\vec{x})$ constituee d'un seul vecteur est libre si, et seulement si, $\vec{x}\neq \vec{0}$
2) Les éléments d'une famille libre sont deux à deux distincts.
3) Si une famille $ B = \left( {\vec{x}}_{1};{\vec{x}}_{2},\ldots ,{\vec{x}}_{n}\right) $ est libre, alors toute famille contenue dans $ B $ est aussi libre.
4) Si une famille $ B = \left( {\vec{x}}_{1};{\vec{x}}_{2},\ldots ,{\vec{x}}_{n}\right) $ est liée, alors toute famille contenant $ B $ est aussi liée.
5) Une famille $ B = \left( {\vec{x}}_{1};{\vec{x}}_{2},\ldots ,{\vec{x}}_{n}\right) $ est liée si, et seulement si, l'un des vecteurs de $ B $ est une combinaison linéaire des $ n - 1 $ autres.

> **Preuve.**
1) Supposons que la famille $$(\vec{x})$$ est libre. Si $$\vec{x} \neq \vec{0}$$ était nul, on aurait l $$\vec{x} = \vec{0}$$ ce qui entraînerait $$(\vec{x})$$ liée. Réciproquement, si $$\vec{x} \neq \vec{0}$$, l'égalité $$\alpha\vec{x} = \vec{0}$$ entraîne $$\alpha = 0$$, ce qui prouve la liberté de $$(\vec{x})$$.

2) Supposons que la famille $$B = (\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$$ contient deux vecteurs égaux. Supposons par exemple que $$\vec{x}_1 = \vec{x}_2$$. Alors : $$\vec{x}_1 - \vec{x}_2 + 0\vec{x}_3 + \dots + 0\vec{x}_n = \vec{0}$$, ce qui est en contradiction avec le fait que la famille $$B = (\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$$ est libre. D'où le résultat.

3) Supposons que la famille $$B = (\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$$ est libre. Considérons une sous-famille, par exemple $$(\vec{x}_1; \vec{x}_2; \dots; \vec{x}_p)$$ et supposons que $$\alpha_1\vec{x}_1 + \alpha_2\vec{x}_2 + \dots + \alpha_p\vec{x}_p = \vec{0}$$. On peut encore écrire cette égalité : $$\alpha_1\vec{x}_1 + \alpha_2\vec{x}_2 + \dots + \alpha_p\vec{x}_p + 0\vec{x}_{p+1} + 0\vec{x}_{p+2} + \dots + 0\vec{x}_n = \vec{0}$$, ce qui entraîne la nullité des $$\alpha_i$$.

4) Supposons que la famille $$B = (\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$$ est liée. Soit $$(\vec{y}_1; \vec{y}_2; \dots; \vec{y}_p) \in E^p$$. Si la famille de vecteurs $$(\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n; \vec{y}_1; \vec{y}_2; \dots; \vec{y}_p)$$ était libre, sa sous-famille $$(\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$$ serait aussi libre d'après 3), ce qui est faux.

5) Supposons que la famille $$(\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$$ est liée. Par définition, il existe $$(\alpha_1; \alpha_2; \dots; \alpha_n) \in \mathbb{R}^n - \{0; 0; \dots; 0\}$$ tel que $$\alpha_1\vec{x}_1 + \alpha_2\vec{x}_2 + \dots + \alpha_n\vec{x}_n = \vec{0}$$. L'un des $$\alpha_i$$ est non nul. Supposons qu'il s'agit de $$\alpha_1$$. On peut donc écrire : $$\vec{x}_1 = -\sum_{k=2}^n \frac{\alpha_k}{\alpha_1}\vec{x}_k$$, ce qui montre que l'un des vecteurs peut s'écrire comme combinaison linéaire des autres.

Réciproquement, supposons que l'un des vecteurs peut s'écrire comme combinaison linéaire des $$n-1$$ autres. On a, par exemple $$\vec{x}_1 = \sum_{k=2}^n \beta_k \vec{x}_k$$, d'où $$\vec{x}_1 - \sum_{k=2}^n \beta_k \vec{x}_k = \vec{0}$$. Nous avons donc une combinaison linéaire nulle des vecteurs $$\vec{x}_1, \vec{x}_2, \dots, \vec{x}_n$$ avec au moins un coefficient non nul ($$1 \neq 0$$), donc la famille est liée.

#### 3.3. Familles génératrices
> **Définition 7.**
Soit $$E$$ un espace vectoriel réel, $$n \in \mathbb{N}^*$$ et $$(\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$$ une famille de vecteurs de $$E$$.

• On dit qu'un vecteur $$\vec{x}$$ est engendré par la famille $$(\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$$ s'il peut s'écrire comme combinaison linéaire des vecteurs cette famille. Autrement dit :

$$\left(\exists (\alpha_1; \alpha_2; \dots; \alpha_n) \in \mathbb{R}^n\right) \quad \vec{x} = \sum_{i=1}^n \alpha_i \vec{x}_i$$

• On dit que la famille $$(\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$$ est une famille génératrice de $$E$$, si :

$$(\forall \vec{x} \in E) \left(\exists (\alpha_1; \alpha_2; \dots; \alpha_n) \in \mathbb{R}^n\right) \quad \vec{x} = \sum_{i=1}^n \alpha_i \vec{x}_i$$

On dit encore dans ce cas-là que la famille $$(\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$$ engendre l'espace vectoriel $$E$$.

> **Exemples.**
1) La famille $(1; i)$ est une famille génératrice de l'espace vectoriel réel $(\mathbb{C}; +; \cdot)$ car tout nombre complexe $z$ peut s'écrire sous la forme $z = a + ib$ avec $(a; b) \in \mathbb{R}^2$.

2) Si $n \in \mathbb{N}^+$, alors la famille des vecteurs $(\vec{e}_1; \vec{e}_2; \dots; \vec{e}_n)$ définie par :

$$\vec{e}_1 = (1; 0; \dots; 0) \quad ; \quad \vec{e}_2 = (0; 1; 0; \dots; 0) \quad ; \quad \vec{e}_3 = (0; 0; 1; 0; \dots; 0) \quad ; \quad \dots \quad ; \quad \vec{e}_n = (0; \dots; 0; 1)$$

est une famille génératrice de l'espace vectoriel réel $(\mathbb{R}^n; +; \cdot)$, puisque, pour tout vecteur

$$\vec{x} = (x_1; x_2; \dots; x_n) \in \mathbb{R}^n, \text{ on a : } \vec{x} = \sum_{j=1}^n x_j \vec{e}_j = x_1 \vec{e}_1 + x_2 \vec{e}_2 + \dots + x_n \vec{e}_n$$

En pratique, on se contente souvent de $n \in \{2; 3; 4\}$. Géométriquement, on « voit » que :

- deux vecteurs non colinéaires du plan en forment une partie génératrice :

- trois vecteurs non coplanaires de l'espace en forment une partie génératrice.

3) Désignons par $E$ l'espace vectoriel réel constitué par les suites arithmétiques. Considérons les deux suites $U = (u_n)$ et $V = (v_n)$ définies sur $\mathbb{N}$ par : $u_n = n$ et $v_n = 1$

La famille $(U; V)$ est génératrice de $E$ car si $W = (w_n)$ est une suite arithmétique de raison $r \in \mathbb{R}$, on a pour tout $n \in \mathbb{N}$, $w_n = w_0 + nr$, ce qui peut encore s'écrire $W = w_0 V + rU$.

> **Applications.**
1. Dans l'espace vectoriel $(\mathbb{M}_2(\mathbb{R}); +; \cdot)$, on considère les matrices :

$$M_1 = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \quad ; \quad M_2 = \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} \quad ; \quad M_3 = \begin{pmatrix} 0 & 1 \\ 2 & 0 \end{pmatrix}$$

Montrer que la famille $\mathbf{B} = (M_1; M_2; M_3)$ engendre la matrice $M = \begin{pmatrix} 1 & 4 \\ 10 & -4 \end{pmatrix}$.

2. On rappelle que $\left(\mathcal{P}_3; +, \cdot\right)$ est l'espace vectoriel des polynômes de degré inférieur ou égal à 3.
On considère la famille $B = \left(f_1; f_2; f_3; f_4\right)$ formée par les fonctions :

$$f_1 : x \mapsto x^2 - 4x + 1 \quad ; \quad f_2 : x \mapsto -x^2 + 2 \quad ; \quad f_3 : x \mapsto 3x - 4 \quad ; \quad f_4 : x \mapsto 4x^3 + x$$

Dans chacun des cas suivants, la fonction $f$ est-elle engendrée par la famille B ?

a) $f : x \mapsto -4x^3 + 5x^2 - 13x - 1$ ; b) $f : x \mapsto 5x + 7$ ; c) $f : x \mapsto 0$

3. Montrer que la famille $\mathbf{B} = ((1;2);(-1;1);(2;1))$ est generatrice de l'espace vectoriel $(\mathbb{R}^2; + ;\cdot)$
4. On pose $\vec{u} = (-5;3)$ et $\vec{v} = (a;9)$. Déterminer les valeurs de $a$ pour lesquelles la famille $\mathbf{B} = (\vec{u};\vec{v})$ engendre l'espace vectoriel $(\mathbb{R}^2; + ;\cdot)$.

#### 3.4. Bases d'un espace vectoriel réel
> **Définition 8.**
Soit E un espace vectoriel réel, $n \in \mathbb{N}^*$ et $B = (\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$ une famille de vecteurs de E.

On dit que la famille B est une base de E si c'est une famille libre et génératrice de E, ce qui revient

à écrire : $$(\forall \vec{x} \in E) \left( \exists! (\alpha_1; \alpha_2; \dots; \alpha_n) \in \mathbb{R}^n \right) \quad \vec{x} = \sum_{i=1}^n \alpha_i \vec{x}_i$$

Dans ces conditions, les nombres $\alpha_1; \alpha_2; \dots; \alpha_n$ s'appellent les composantes (ou coordonnées) du vecteur $\vec{x}$ dans la base B, et on écrit $\vec{x}(\alpha_1; \dots; \alpha_n)_{(B)}$ ou tout simplement $\vec{x}(\alpha_1; \dots; \alpha_n)$.

Le réel $\alpha_k$ s'appelle la $k^{ème}$ composant (ou coordonnée) de $\vec{x}$ dans la base B.

> **Remarques.**
- Plaçons-nous dans l'espace vectoriel réel $(\mathbb{R}^n; +; \cdot)$. On a déjà vu que la famille de vecteurs $B = (\vec{e}_1; \vec{e}_2; \dots; \vec{e}_n)$ définie par :

$$\vec{e}_1 = (1; 0; \dots; 0) \quad ; \quad \vec{e}_2 = (0; 1; 0; \dots; 0) \quad ; \quad \vec{e}_3 = (0; 0; 1; 0; \dots; 0) \quad ; \quad \dots \quad ; \quad \vec{e}_n = (0; \dots; 0; 1)$$

est une famille génératrice de l'espace vectoriel réel. Par ailleurs, si $\alpha_1 \vec{e}_1 + \alpha_2 \vec{e}_2 + \dots + \alpha_n \vec{e}_n = \vec{0}$, alors $(\alpha_1; \alpha_2; \dots; \alpha_n) = (0; 0; \dots; 0)$, d'où $\alpha_1 = \alpha_2 = \dots = \alpha_n = 0$, ce qui montre que la famille B est libre. C'est donc une base, appelée base canonique de l'espace vectoriel réel $(\mathbb{R}^n; +; \cdot)$. C'est la base la plus naturelle et la plus simple de $\mathbb{R}^n$.

- Une fois choisie une base $B = (\vec{x}_1; \vec{x}_2; \dots; \vec{x}_n)$ de E, il arrive souvent que l'on identifie chaque vecteur $\vec{x} \in E$ avec le $n$-uplet de ses composantes. C'est pourquoi, une base doit être une famille (ordonnée) et non un ensemble. Par exemple, si $B = (\vec{e}_1; \vec{e}_2; \vec{e}_3)$ est une base de E, alors le vecteur de composantes $(1; 2; 3)$ dans la base B est $\vec{e}_1 + 2\vec{e}_2 + 3\vec{e}_3$ et non pas $\vec{e}_2 + 2\vec{e}_1 + 3\vec{e}_3$.

> **Exemples.**
1) Dans l'espace vectoriel $(\mathbb{R}^2; +; \cdot)$, la famille $\mathbf{B} = (\vec{e}_1; \vec{e}_2)$ avec $\vec{e}_1 = (1; 0)$ et $\vec{e}_2 = (0; 1)$ est une base de $\mathbb{R}^2$. C'est la base canonique de $\mathbb{R}^2$.
2) Dans l'espace vectoriel $(\mathbb{R}^3; +; \cdot)$, la famille $\mathbf{B} = (\vec{e}_1; \vec{e}_2; \vec{e}_3)$ avec $\vec{e}_1 = (1; 0; 0)$, $\vec{e}_2 = (0; 1; 0)$ et $\vec{e}_3 = (0; 0; 1)$ est une base de $\mathbb{R}^3$. C'est la base canonique de $\mathbb{R}^3$.

Comme il a été déjà signalé dans la remarque précédente, cette base avec la base canonique de $$(\mathbb{R}^3; +; \cdot)$$, vue dans l'exemple précédent sont les plus naturelles et les plus simples pour modéliser les problèmes, que ça soit en mathématiques, en physique, en chimie, en astronomie, en économie ou en sciences industrielles.

3) La famille $$(1; i)$$ est une base de l'espace vectoriel réel $$(\mathbb{C}; +; \times)$$, puisqu'elle est libre et qu'elle est génératrice de $$\mathbb{C}$$ comme on l'a vu précédemment. Les coordonnées d'un nombre complexe dans cette base sont ses partie réelle et imaginaire.

Plus généralement, si $$\sigma \in \mathbb{C} \setminus \mathbb{R}$$, alors la famille $$(1; \sigma)$$ est une base de l'espace vectoriel réel $$(\mathbb{C}; +; \times)$$. En effet, on a déjà vu que $$(1; \sigma)$$ est une famille libre de $$(\mathbb{C}; +; \times)$$. Montrons qu'elle est génératrice :

Soit $$z = a + ib$$ un nombre complexe avec $$(a; b) \in \mathbb{R}^2$$. Montrons qu'il existe $$(x; y) \in \mathbb{R}^2$$ tel que $$z = x + \sigma$$
On a : $$z = x + \sigma y \Leftrightarrow a + ib = x + y(\operatorname{Re}(\sigma) + i\operatorname{Im}(\sigma)) \Leftrightarrow a + ib = x + y\operatorname{Re}(\sigma) + i y\operatorname{Im}(\sigma)$$

ce qui revient à résoudre le système :

$$\left\{ \begin{array}{l} x + y \operatorname{Re}(\sigma) = a \\ b = y \operatorname{Im}(\sigma) \end{array} \right. \Leftrightarrow \left\{ \begin{array}{l} x = a - y \operatorname{Re}(\sigma) = a - \frac{\operatorname{Re}(\sigma)}{\operatorname{Im}(\sigma)} b \\ y = \frac{b}{\operatorname{Im}(\sigma)} \end{array} \right. \quad (\text{car } \operatorname{Im}(\sigma) \neq 0)$$

Ainsi, la famille $$(1; \sigma)$$ est libre et génératrice de $$\mathbb{C}$$, donc c'est une base de cet espace vectoriel.

4) Posons $$\mathbf{E} = \mathcal{P}_n$$ où $$n \in \mathbb{N}^*$$. Considérons les polynômes suivants :

$$P_0 : x \mapsto 1 \quad ; \quad P_1 : x \mapsto x \quad ; \quad P_2 : x \mapsto x^2 \quad ; \quad P_3 : x \mapsto x^3 \quad ; \quad \dots \quad ; \quad P_n : x \mapsto x^n$$

Montrons que la famille $$\mathbf{B} = (P_0; P_1; \dots; P_n)$$ est une base de l'espace vectoriel réel $$\mathcal{P}_n$$ :

On sait que tout polynôme $$P : x \mapsto \alpha_n x^n + \dots + \alpha_1 x + \alpha_0$$ est par définition une combinaison linéaire des polynômes $$P_0, \dots, P_n$$. La famille $$\mathbf{B}$$ est donc génératrice de $$\mathcal{P}_n$$. Par ailleurs, si $$\alpha_n x^n + \dots + \alpha_1 x + \alpha_0 = 0$$, alors, par définition d'un polynôme nul, tous les coefficients $$\alpha_i$$ sont nuls, ce qui montre que $$\mathbf{B}$$ est libre.

Cette famille de polynômes est donc une base, appelée base canonique de l'espace vectoriel $$\mathcal{P}_n$$.

5) La famille $$B = \left\{ \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} : \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} : \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} : \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} \right\}$$ est une base de l'espace vectoriel $$(\mathbf{M}_2(\mathbb{R}); +; \cdot)$$.

> **Applications.**
Applications
1. On considère l'ensemble : E = {(a; a; b) / (a; b) ∈ ℝ²}

a) Montrer que (E; +; ·) est espace vectoriel réel.

b) Déterminer une base de (E; +; ·).

2. On considère l'ensemble suivant : E = {f : x ↦ (ax + b)e²ˣ / (a; b) ∈ ℝ²}

a) Montrer que (E; +; ·) est espace vectoriel réel.

b) Soit f₁ et f₂ les fonctions numériques définies sur ℝ par : f₁(x) = e²ˣ et f₂(x) = xe²ˣ

Montrer que la famille B = (f₁; f₂) est une base de l'espace vectoriel E.

c) Montrer que la fonction u : x ↦ ∫₀ˣ(t + 1/2)e²ˣdt est un élément de E puis déterminer ses

coordonnées dans la base B.

3. Soit E l'ensemble des fonctions numériques f définies sur ℝ par : f(x) = P(x)cos x + Q(x)sin x où P et Q sont des fonctions affines. (C'est-à-dire de la forme x ↦ ax + b avec (a; b) ∈ ℝ²)

a) Montrer que (E; +; ·) est espace vectoriel réel.

b) On considère la famille B = (f₁; f₂; f₃; f₄) telle que :

f₁(x) = cos x ; f₂(x) = sin x ; f₃(x) = x cos x ; f₄(x) = x sin x

Montrer que B est une base de l'espace vectoriel E.

c) Montrer que la fonction h : x ↦ cos(x + a) avec a ∈ ℝ est un élément de E puis déterminer ses coordonnées dans la base B.

> **Proposition 5.**
Soit E un espace vectoriel réel, n ∈ ℕ* et B = (x̄₁; x̄₂; ...; x̄ₙ) une base de E. Soit x̄ et ȳ deux vecteurs

de E tels que : x̄(α₁; ...; αₙ)₍ₑ₎ et ȳ(β₁; ...; βₙ)₍ₑ₎. Alors :

x̄ + ȳ(α₁ + β₁; ...; αₙ + βₙ)₍ₑ₎ et λx̄(λα₁; ...; λαₙ)₍ₑ₎ (où λ ∈ ℝ)

#### 3.5. Dimension d'un espace vectoriel
> **Proposition 6.**
Soit E un espace vectoriel réel, n ∈ ℕ* et B = (x̄₁; x̄₂; ...; x̄ₙ) une base de E. Alors, toutes les bases de E ont le même cardinal. Ce cardinal est appelé la dimension de E et noté dim E, et on écrit dim E = n.

> **Exemples.**
1) Pour tout $n \in \mathbb{N}^*$ : $\dim \mathbb{R}^n = n$. En particulier :

- L'espace vectoriel réel $\mathbb{R}$ est de dimension 1. Il admet pour base (1) et plus généralement toute famille formée d'un unique élément non nul.
L'espace vectoriel réel $\mathbb{R}^2$ est de dimension 2. Il admet pour base $\mathbf{B} = ((1;0);(0;1))$
L'espace vectoriel réel $\mathbb{R}^3$ est de dimension 3. Il admet pour base $\mathbf{B} = ((1;0;0);(0;1;0);(0;0;1))$

Ainsi : $\dim \mathbb{R} = 1$ ; $\dim \mathbb{R}^2 = 2$ ; $\dim \mathbb{R}^3 = 3$.

2) L'espace vectoriel réel $(\mathbb{C}; + ; \times)$ est de dimension 2: $\dim \mathbb{C} = 2$.
3) L'espace vectoriel réel $(\mathbf{M}_2(\mathbb{R}); + ;\cdot)$ est de dimension 4: $\dim \mathbf{M}_2(\mathbb{R}) = 4$. Il admet pour base $\mathbf{B} = (A_1;A_2;A_3;A_4)$ avec:

$$A_1 = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \quad ; \quad A_2 = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} \quad ; \quad A_3 = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \quad ; \quad A_4 = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$$

4) Plaçons-nous dans l'espace vectoriel $(\mathcal{V}_3; +; \cdot)$ constitué par les vecteurs de l'espace ordinaire.

On a déjà vu dans le cours de géométrie de l'espace (1ère année du bac) que $(\vec{i}; \vec{j}; \vec{k})$ est une base de $\mathcal{V}_3$ avec : $\vec{i} = (1; 0; 0)$ ; $\vec{j} = (0; 1; 0)$ ; $\vec{k} = (0; 0; 1)$

Il s'ensuit donc : $\dim \mathcal{V}_3 = 3$.

Soit maintenant F un sous-espace vectoriel de $(\mathcal{V}_3; +; \cdot)$ différent de $\{\vec{0}\}$.

- Si dim $ \mathbf{F} = 1 $, alors $ \mathbf{F} $ est un espace vectoriel engendré par un vecteur non nul $ \vec{u} $. On dit alors que $ \mathbf{F} $ est la droite vectorielle de direction $ \vec{u} $.
- Si dim $ \mathbf{F} = 2 $, alors $ \mathbf{F} $ est un espace vectoriel engendré par deux vecteurs non colinéaires $ \vec{u} $ et $ \vec{v} $. On dit alors que $ \mathbf{F} $ est le plan vectorielle dirigé par les vecteurs $ \vec{u} $ et $ \vec{v} $.

A titre d'exemple, considérons le sous-ensemble F de $(\mathcal{V}_3; +; \cdot)$ définie par :

$$F = \{\vec{u} = (x; y; z) \in \mathcal{V}_3 \mid x - y + 3z = 0\}$$

On montre facilement que F est un sous-espace vectoriel de $(\mathcal{V}_3; +; \cdot)$. Déterminons une base de F. On a pour tout $\vec{u} = (x; y; z) \in \mathbf{F}$, $y = x + 3z$, il s'ensuit donc :

$$\vec{u} = (x; x + 3z; z) = (x; x; 0) + (0; 3z; z) = x(1; 1; 0) + z(0; 3; 1)$$

On pose : $\vec{v} = (1; 1; 0)$ et $\vec{w} = (0; 3; 1)$. Il s'ensuit donc que $\mathbf{B} = (\vec{v}; \vec{w})$ est une famille génératrice de F. Il est facile de montrer que $\mathbf{B} = (\vec{v}; \vec{w})$ est libre. Ainsi, $\mathbf{B} = (\vec{v}; \vec{w})$ est une base de F et que $\dim \mathbf{F} = 2$.

5) Posons $\mathbf{E} = \mathcal{P}_n$ où $n \in \mathbb{N}^*$. Considérons les polynômes suivants :

$$P_0 : x \mapsto 1 \quad ; \quad P_1 : x \mapsto x \quad ; \quad P_2 : x \mapsto x^2 \quad ; \quad P_3 : x \mapsto x^3 \quad ; \quad . \quad . \quad ; \quad P_n : x \mapsto x^n$$

On a déjà vu que $\mathbf{B} = (P_0; P_1; \dots; P_n)$ est une base de l'espace vectoriel réel $\mathcal{P}_n$. Par suite : $\dim \mathcal{P}_n = n + 1$.

> **Applications.**
1. On considère l'ensemble E = {(x; y; z) ∈ ℝ³ / x + y - z = 0}.

On munit E de l'addition « + » et la multiplication par un réel définies sur ℝ³.

Montrer que (E; +; ·) est espace vectoriel réel puis déterminer sa dimension.

2. On considère l'ensemble : K = { (a b; -b a) / (a; b) ∈ ℝ² }.

Montrer que (K; +; ·) est espace vectoriel réel puis déterminer sa dimension.

3. Soit E l'ensemble des fonctions numériques définies sur ℝ par :

$$f(x) = (a \sin x + b \cos x)e^{3x} \quad \text{où} \quad (a; b) \in \mathbb{R}^2$$

a) Montrer que E, muni de l'addition des fonctions et la multiplication par un réel, est un espace vectoriel réel.

b) On considère la famille B = (f₁; f₂) telle que : f₁(x) = e³ˣ cos x et f₂(x) = e³ˣ sin x
Montrer que B est une base de E.

c) Soit f un élément de E.
Montrer que f' est un élément de E et déterminer les coordonnées de f' dans la base B.

> **Proposition 7.**
1) Soit E un espace vectoriel réel de dimension 2 et B = (ī; j̄) un base de E.

Soit B' = (ū; v̄) une famille de vecteurs de E tels que ū(a; b) et v̄(a'; b') dans la base B. Alors :

(B' est une base de E) ⇔ (B' est génératrice de E) ⇔ (B' est libre dans E) ⇔ |a a'| |b b'| ≠ 0

2) Soit E un espace vectoriel réel de dimension 3 et B = (ī; j̄; k̄) un base de E.

Soit B' = (ū; v̄; w̄) une famille de vecteurs de E tels que ū(a; b; c) et v̄(a'; b'; c') et w̄(a"; b"; c")

dans la base B. Alors :

(B' est une base de E) ⇔ (B' est génératrice de E) ⇔ (B' est libre dans E) ⇔ |a a' a"| |b b' b"| |c c' c"| ≠ 0

> **Remarque.**
La proposition 7 est d'une importance pratique capitale. Elle affirme qu'une famille de cardinal égal à la dimension de l'espace vectoriel devient une base dès qu'elle est libre ou génératrice. En pratique, il est plus facile de vérifier qu'elle est libre soit en calculant le déterminant soit par un calcul direct.

## Méthodes

### A. Exemple d'une famille libre
On considère les fonctions suivantes :

$$f_1 : \mathbb{R} \to \mathbb{R}$$

$$x \mapsto \sin(x)$$

$$f_2 : \mathbb{R} \to \mathbb{R}$$

$$x \mapsto \sin(x^2)$$

$$f_3 : \mathbb{R} \to \mathbb{R}$$

$$x \mapsto \sin(x^3)$$

Dans l'espace vectoriel réel $(\mathcal{F}; +; \cdot)$, on considère la famille $B = (f_1; f_2; f_3)$.

Montrer que la famille $B$ est libre.

> **Solution.**
Soit $\alpha_1, \alpha_2$ et $\alpha_3$ des réels tels que $\alpha_1 f_1 + \alpha_2 f_2 + \alpha_3 f_3 = 0$, donc pour tout $x \in \mathbb{R}$ :

$$\alpha_1 \sin(x) + \alpha_2 \sin(x^2) + \alpha_3 \sin(x^3) = 0 \quad (*)$$

En dérivant cette dernière égalité on obtient : $(\forall x \in \mathbb{R}) \ \alpha_1 \cos(x) + 2\alpha_2 x \cos(x^2) + 3\alpha_3 x^2 \cos(x^3) = 0$.

En prenant $x = 0$ on obtient $\alpha_1 = 0$. En prenant $x = \sqrt[3]{\pi}$ dans la relation $(*)$ on obtient :

$\alpha_2 \sin(\sqrt[3]{\pi}) + \alpha_3 \sin(\pi) = 0$, ce qui donne $\alpha_2 = 0$. En prenant $x = \sqrt{\frac{\pi}{2}}$ dans la relation $(*)$ on obtient $\alpha_3 = 0$

En résumé : $\alpha_1 = \alpha_2 = \alpha_3 = 0$. Ainsi, la famille $B$ est libre.

### B. Espace vectoriel des fonctions numériques
**Exercice 1.**

Pour tout $x \in \mathbb{R}$, on pose : $e_1(x) = \frac{1}{\sqrt{2}}$ ; $e_2(x) = \cos x$ ; $e_3(x) = \sin x$.

1) Soit $E$ l'ensemble des fonctions numériques $f$ tels que : $(\exists (a; b; c) \in \mathbb{R}^3) \ f = ae_1 + be_2 + ce_3$

a) Montrer que $(E; + ;\cdot)$ est un espace vectoriel réel.
b) Montrer que $ B = (e_1; e_2; e_3) $ est une base de l'espace vectoriel $ (E; +; \cdot) $.
c) Soit $ f \in E $ et $ f' $ sa fonction dérivée.

Montrer que $f' \in E$ puis déterminer les coordonnées de $f'$ dans la base $B$ en fonction de celles de $f$.

2) Soit $g = \alpha e_1 + \beta e_2 + \gamma e_3$ un élément de $E$ et $t \in \mathbb{R}$.

On considère la fonction $g_t$ définie sur $\mathbb{R}$ par : $g_t(x) = g(t - x)$.

Montrer que $g_t \in E$ et déterminer les coordonnées de $g_t$ dans la base $B$ en fonction de $\alpha, \beta, \gamma$ et $t$.

3) Soit $f$ et $g$ deux éléments de $E$. On considère le nombre réel $f \top g$ tel que : $f \top g = \frac{1}{\pi} \int_0^{2\pi} f(t) g(t) dt$.

On pose : $f = ae_1 + be_2 + ce_3$ et $g = \alpha e_1 + \beta e_2 + \gamma e_3$

Calculer $f \top g$ en fonction des coordonnées de $f$ et $g$.

a) Soit $f$ et $g$ deux éléments de $E$. On pose : $(\forall t \in \mathbb{R}) (f * g)(t) = f \top g$,
Montrer que $f * g \in E$ puis déterminer les coordonnées de $f * g$ dans la base $B$ en fonction de celles de $f$ et $g$.

> **Solution.**
1) a) Montrons que $(E; +; \cdot)$ est un espace vectoriel réel :

puisque $E \subset \mathcal{F}(\mathbb{R}; \mathbb{R})$ et $(\mathcal{F}(\mathbb{R}; \mathbb{R}); +; \cdot)$ est un espace vectoriel réel, alors il suffit de montrer que $E$ est un sous-espace vectoriel de $(\mathcal{F}(\mathbb{R}; \mathbb{R}); +; \cdot)$.

- La fonction nulle $\theta$ appartient à $E$, donc $E \neq \emptyset$.

- Soit $(\mu; \lambda) \in \mathbb{R}^2$ et $f = ae_1 + be_2 + ce_3$ et $g = \alpha e_1 + \beta e_2 + \gamma e_3$ deux élément de $E$. On a :

$$\lambda f + \mu g = (\lambda a + \mu \alpha)e_1 + (\lambda b + \mu \beta)e_2 + (\lambda c + \mu \gamma)e_3. \text{Par conséquent : } \lambda f + \mu g \in E$$

En résumé, $(E; +; \cdot)$ est un espace vectoriel réel.

b) Montrons que $B$ base de $E$ :

Par définition de $E$, la famille $B$ engendre l'espace vectoriel $E$. Montrons maintenant que $B$ est libre :

Soit $(a; b; c) \in \mathbb{R}^3$ tel que $ae_1 + be_2 + ce_3 = \theta$. Donc : $(\forall x \in \mathbb{R}) \frac{a}{\sqrt{2}} + b \cos x + c \sin x = 0$

en prenant $x = 0$ puis $x = \pi$ puis $x = \frac{\pi}{2}$ on obtient le système suivant :

$$\begin{cases} \frac{a}{\sqrt{2}} + b = 0 \\ \frac{a}{\sqrt{2}} - b = 0 \\ \frac{a}{\sqrt{2}} + c = 0 \end{cases}$$

ce qui donne $a = b = c = 0$. Ainsi, la famille $B$ est libre et donc c'est une base de $E$.

c) Soit $f = ae_1 + be_2 + ce_3$ un élément de $E$. Pour tout $x \in \mathbb{R}$, on a : $f(x) = \frac{a}{\sqrt{2}} + b \cos x + c \sin x$, donc

$f'(x) = c \cos x - b \sin x$, c'est-à-dire que $f' = ce_2 - be_3$. Par suite, $f' \in E$ et le système de coordonnées

de $f'$ dans la base $B$ est donnée par $(0; c; -b)$.

2) On a pour tout $x \in \mathbb{R}$ : $g_i(x) = g(t - x) = \frac{a}{\sqrt{2}} + \beta \cos(x - t) + \gamma \sin(x - t)$

Il s'ensuit donc :

$$\begin{array}{l} g _ { t } ( x ) = \frac { \alpha } { \sqrt { 2 } } + \beta ( \cos t \cos x + \sin t \sin x ) + \gamma ( - \sin t \cos x + \cos t \sin x ) \\ = \frac { \alpha } { \sqrt { 2 } } + ( \beta \cos t - \gamma \sin t ) \cos x + ( \beta \sin t + \gamma \cos t ) \sin x \end{array}$$

Donc: $g _ { t } = \frac { \alpha } { \sqrt { 2 } } e _ { 1 } + ( \beta \cos t - \gamma \sin t ) e _ { 2 } + ( \beta \sin t + \gamma \cos t ) e _ { 3 }$. Par suite, $g _ { t } \in E$ et le système de

coordonnées de $g _ { i }$ dans la base $B$ est donnée par $(\alpha ; \beta \cos t - \gamma \sin t ; \beta \sin t + \gamma \cos t)$.

3) On a: $\int _ { 0 } ^ { 2 \pi } \cos ^ { 2 } x d x = \int _ { 0 } ^ { 2 \pi } \sin ^ { 2 } x d x = \pi$ et $\int _ { 0 } ^ { 2 \pi } \cos x d x = \int _ { 0 } ^ { 2 \pi } \sin x d x = 0$ et $\int _ { 0 } ^ { 2 \pi } ( \sin x - \cos x ) d x = 0$

Donc: $e _ { i } \mathrm { T } e _ { i } = 1$ et $e _ { i } \mathrm { T } e _ { j } = 0$ pour tout $i \neq j$. Ainsi on trouve: $f \mathrm { T } g = a \alpha + b \beta + c \gamma$

4) D'après le résultat de la question précédente, on a:

$$f * g ( x ) = f \mathrm { T } g _ { x } = a \alpha + b ( \beta \cos x - \gamma \sin x ) + c ( \beta \sin x + \gamma \cos x )$$

D'où: $f * g ( x ) = a \alpha + ( b \beta + c \gamma ) \cos x + ( - b \gamma + c \beta ) \sin x$. Ainsi:

$$f * g = \sqrt { 2 } a \alpha e _ { 1 } + ( b \beta + c \gamma ) e _ { 2 } - ( b \gamma - c \beta ) e _ { 3 }$$

Ce qui montre que $f * g \in E$ et les coordonnées de $f * g$ dans la base $B$ est: $(\sqrt { 2 } a \alpha ; b \beta + c \gamma ; - b \gamma + c \beta)$.

### C. Espaces vectoriels et matrices
Pour tout réel $p$, on pose: $E _ { p } = \left\{ M _ { p } ( a ; b ) = \left( \begin{array} { c c } { { a } } & { { b } } \\ { { p b } } & { { a } } \end{array} \right) / ( a ; b ) \in \mathbb { R } ^ { 2 } \right\}$

On rappelle que $( \mathbb { M } _ { 2 } ( \mathbb { R } ) ; + ; \times )$ est un anneau de zéro $O = \left( \begin{array} { c c } { { 0 } } & { { 0 } } \\ { { 0 } } & { { 0 } } \end{array} \right)$ et d'unité $I = \left( \begin{array} { c c } { { 1 } } & { { 0 } } \\ { { 0 } } & { { 1 } } \end{array} \right)$. On rappelle aussi que $( \mathbb { M } _ { 2 } ( \mathbb { R } ) ; + ; \cdot )$ est un espace vectoriel réel.

**Partie A :**
1) Montrer que $\left(E_{p} ; + ; \cdot\right)$ est un espace vectoriel réel et déterminer une base et sa dimension.
2) Montrer que $E_{p}$ est stable dans $\left(\mathbb{M}_{2}\left(\mathbb{R}\right); \times\right)$ et en déduire que $\left(E_{p} ; + ; \times\right)$ est un anneau commutatif.
3) Montrer l'équivalence suivante: $p < 0 \Leftrightarrow (E_p; +; \times)$ est un corps commutatif.

Partie B: On suppose dans cette partie que $p < 0$.

1) Montrer que la famille $\left(1;i\sqrt{-p}\right)$ est une base de l'espace vectoriel réel $(\mathbb{C}; + ;\cdot)$
2) On considère l'application $f$ définie de $\mathbb{C}$ dans $E_{p}$ par: $f(a + i\sqrt{-p} b) = M_p(a;b)$ (ou $(a;b)\in \mathbb{R}^2$

a) Montrer que $f$ est un isomorphisme de $(\mathbb{C};\times)$ dans $\left(E_{p};\times\right)$.
b) En déduire encore une fois que $\left(E_{p} ; + ; \times\right)$ est un corps commutatif.

> **Solution.**
partie A:
1) Montrons d'abord que $ (E_{p}; + ; \cdot) $ est un espace vectoriel réel :

1) Montrons d'abord que $ (E_{p}; + ; \cdot) $ est un espace vectoriel réel :

Il suffit de montrer que c'est un sous-espace vectoriel de $ (\mathbb{M}_2(\mathbb{R}); + ; \cdot) $.

On a $ E_p \neq \emptyset $ car $ O \in E_p $. Soit $ M_p(a; b) $ et $ M_p(c; d) $ deux éléments de $ E_p $ avec $ (a; b; c; d) \in \mathbb{R}^4 $.

On a alors pour tout $ (\alpha; \beta) \in \mathbb{R}^2 $: $ \alpha M_p(a; b) + \beta M_p(c; d) = M_p(\alpha a + \beta c; \alpha b + \beta d) $

Il s'ensuit donc que : $ \alpha M_p(a; b) + \beta M_p(c; d) \in E_p $, ce qui montre que $ (E_p; +; \cdot) $ est un sous-espace vectoriel de $ (\mathbb{M}_2(\mathbb{R}); +; \cdot) $. Ainsi, $ (E_p; +; \cdot) $ est un espace vectoriel réel.

Déterminons ensuite une base de $ (E_{p}; + ; \cdot) $ :

On a pour tout $ (a;b)\in\mathbb{R}^{2} $:

\[
M _ {p} (a; b) = \left( \begin{array}{c c} a & b \\ p b & a \end{array} \right) = \left( \begin{array}{c c} a & 0 \\ 0 & a \end{array} \right) + \left( \begin{array}{c c} 0 & b \\ p b & 0 \end{array} \right) = a \left( \begin{array}{c c} 1 & 0 \\ 0 & 1 \end{array} \right) + b \left( \begin{array}{c c} 0 & 1 \\ p & 1 \end{array} \right) = a I + b J \quad \text {où} \quad J = \left( \begin{array}{c c} 0 & 1 \\ p & 1 \end{array} \right).
\]

ce qui montre que $(I;J)$ est une famille génératrice de l'espace vectoriel réel $(E_p; + ;\cdot)$. Montrons

maintenant la liberté de cette famille. Soit $ (a;b)\in\mathbb{R}^{2} $ tel que $ aI+bJ=O $. On aura alors :

\[
a I + b J = O \Rightarrow \left( \begin{array}{c c} a & b \\ p b & a \end{array} \right) = \left( \begin{array}{c c} 0 & 0 \\ 0 & 0 \end{array} \right) \Rightarrow \left\{ \begin{array}{l} a = 0 \\ b = 0 \end{array} \right.
\]

Puisque la famille $(I;J)$ est libre et génératrice de $(E_p; + ;\cdot)$, alors c'est une base de $E_{p}$. Ainsi: $\dim E_{p} = 2$.

2) Montrons que $E_{p}$ est stable dans $(\mathbb{M}_{2}(\mathbb{R});\times)$:

On a pour tout $ (a;b;c;d)\in\mathbb{R}^{4} $:

\[
M _ {p} (a; b) \times M _ {p} (c; d) = \left( \begin{array}{c c} a & b \\ p b & a \end{array} \right) \left( \begin{array}{c c} c & d \\ p d & c \end{array} \right) = \left( \begin{array}{c c} a c + p b d & a d + b c \\ p (a d + b c) & a c + p b d \end{array} \right) = M _ {p} (a c + p b d; a d + b c)
\]

Comme $ M_p(ac + pbd; ad + bc) \in E_p $ alors $ E_p $ est stable dans $ (\mathbb{M}_2(\mathbb{R}); \times) $.

Conclusion :

D'après la question 1), $ (E_{p}; + ; \cdot) $ est un espace vectoriel réel, donc $ (E_{p}; + ) $ est un groupe commutatif;

Puisque $ E_{p} $ est stable dans $ (\mathbb{M}_{2}(\mathbb{R});\times) $ et la loi × est associative et distributive par rapport à + dans

$ (\mathbb{M}_{2}(\mathbb{R}); + ; \times) $ alors il en est de même dans l'ensemble $ E_{p} $. Enfin, on a $ I $ est l'élément neutre dans $ (E_{p}; \times) $.

Par conséquent, $ (E_{p}; + ; \times) $ est un anneau. La commutativité de la loi × résulte du fait que :

\[
M _ {p} (a; b) \times M _ {p} (c; d) = M _ {p} (a c + p b d; a d + b c) = M _ {p} (c a + p d b; d a + c b) = M _ {p} (c; d) \times M _ {p} (a; b)
\]

Ainsi, $ (E_{p}; + ; \times) $ est un anneau commutatif.

3) Montrons l'équivalence suivante : $p < 0 \Leftrightarrow (E_p; +; \times)$ est un corps commutatif.

On sait que $(E_p; +; \times)$ est un anneau commutatif. Pour que $(E_p; +; \times)$ soit un corps commutatif, il faut et il suffit que tout élément non nul soit inversible dans $(E_p; +; \times)$. Soit $(a; b) \in \mathbb{R}^2 - \{(0; 0)\}$, on a :

$$\det M_p(a; b) = \begin{vmatrix} a & b \\ pb & a \end{vmatrix} = a^2 - pb^2$$

La matrice $M_p(a; b)$ est inversible si $a^2 - pb^2 \neq 0$ ; et son inverse est la matrice :

$$(M_p(a; b))^{-1} = \frac{1}{a^2 - pb^2} \begin{pmatrix} a & -b \\ -pb & a \end{pmatrix} = M_p \left( \frac{a}{a^2 - pb^2} ; -\frac{b}{a^2 - pb^2} \right) \text{ qui est un élément de } E_p.$$

Il s'ensuit donc que $(E_p; +; \times)$ est un corps commutatif si : $(\forall (a; b) \in \mathbb{R}^2 - \{(0; 0)\}) \ a^2 - pb^2 \neq 0$

Si $p \ge 0$ alors l'élément non nul $M_p(\sqrt{p}; 1)$ n'est pas inversible dans $(E_p; +; \times)$ ; et si $p < 0$ alors

$a^2 - pb^2 > 0$ et en particulier $a^2 - pb^2 \neq 0$. En résumé : $p < 0 \Leftrightarrow (E_p; +; \times)$ est un corps commutatif.

Partie B : On suppose dans cette partie que $p < 0$.

1) On sait que $(1; i)$ est une base de l'espace vectoriel réel $(\mathbb{C}; +; \cdot)$. On a dans cette base :

Le couple de coordonnées de I est: $(1;0)$
Le couple de coordonnées de $i\sqrt{-p}$ est: $\left(0;\sqrt{-p}\right)$

Donc : $\det(1; i\sqrt{-p}) = \begin{vmatrix} 1 & 0 \\ 0 & \sqrt{-p} \end{vmatrix} = \sqrt{-p}$. Comme $\det(1; i\sqrt{-p}) \neq 0$ alors c'est une base de $(\mathbb{C}; +; \cdot)$.

Remarque : On pourra aussi montrer que la famille $(1; i\sqrt{-p})$ est à la fois libre et génératrice.

2) On considère l'application $f$ définie de $\mathbb{C}$ dans $E_p$ par : $f(a + i\sqrt{-p}b) = M_p(a; b)$ (où $(a; b) \in \mathbb{R}^2$)

a) Montrer que $f$ est un isomorphisme de $(\mathbb{C}; \times)$ dans $(E_p; \times)$ :

- Tout d'abord, $f$ est un morphisme de $(\mathbb{C}; \times)$ dans $(E_p; \times)$. En effet, pour tout $(a; b; c; d) \in \mathbb{R}^4$ :

$$\begin{aligned} f\left(\left(a + i\sqrt{-p}b\right) \times \left(c + i\sqrt{-p}d\right)\right) &= f\left(ac + pbd + i\sqrt{-p}(ad + bc)\right) \\ &= M_p(ac + pbd; ad + bc) \\ &= M_p(a; b) \times M_p(c; d) \\ &= f(a + i\sqrt{-p}b) \times f(c + i\sqrt{-p}d) \end{aligned}$$

- Ensuite $f$ est injective car, pour tout $(a; b; c; d) \in \mathbb{R}^4$ :

$$f(a + i\sqrt{-p}b) = f(c + i\sqrt{-p}d) \Rightarrow M_p(a; b) = M_p(c; d) \Rightarrow \begin{pmatrix} a & b \\ pb & a \end{pmatrix} = \begin{pmatrix} c & d \\ pd & c \end{pmatrix}$$

$$p'\circ\ddot{u}: f(a+i\sqrt{-p}b)=f(c+i\sqrt{-p}d)\Rightarrow(a;b)=(c;d)\Rightarrow a+i\sqrt{-p}b=c+i\sqrt{-p}d$$

De plus, $f$ est surjective d'après sa construction.

Par suite, $f$ est un isomorphisme de $(\mathbb{C};\times)$ dans $(E_p;\times)$.

b) On sait que $(E_p;+;\times)$ est un anneau commutatif et $f(0)=O$. Puisque, $f$ est un isomorphisme de $(\mathbb{C};\times)$ dans $(E_p;\times)$ et $(\mathbb{C}^*;\times)$ est un groupe commutatif, alors $(E_p-\{O\};\times)$ est un groupe commutatif.

Par suite: $(E_p;+;\times)$ est un corps commutatif.

• Montrer que $E$ est un espace vectoriel est une question très classique des sujets du bac ; elle n'utilise en fait jamais la définition d'un espace vectoriel. En effet, tous les espaces vectoriels rencontrés dans les sujets sont des sous-espaces vectoriels d'espaces vectoriels de référence. Pour cela, on utilise le théorème de caractérisation qui dit :

$F$ est un sous-espace vectoriel d'un espace vectoriel $E$ si, et seulement si, il vérifie les trois conditions suivantes :

suivantes :

$$\checkmark F \subset E \text{ et } F \neq \emptyset ;$$

$$\checkmark (\forall (\vec{u};\vec{v}) \in F^2)(\forall \alpha \in \mathbb{R}) : \vec{u}+\vec{v} \in F \text{ et } \alpha\vec{u} \in F$$

• Soit $(\vec{u}_1, \vec{u}_2, ..., \vec{u}_n)$ une famille de vecteurs d'un espace vectoriel $E$. On considère $n$ réels $(a_1, a_2, ..., a_n)$ tels que :

$$a_1\vec{u}_1 + a_2\vec{u}_2 + ... + a_n\vec{u}_n = \vec{0}$$

• Si l'équation ci-dessus d'inconnues $a_1, ..., a_n$ possède comme unique solution : $a_1 = ... = a_n = 0$

Alors la famille $(\vec{u}_1, \vec{u}_2, ..., \vec{u}_n)$ est libre.

• S'il existe des réels non tous nuls $a_1, ..., a_n$ tels que $a_1\vec{u}_1 + a_2\vec{u}_2 + ... + a_n\vec{u}_n = \vec{0}$, alors la famille $(\vec{u}_1, \vec{u}_2, ..., \vec{u}_n)$ est liée.

• Une famille de vecteurs contenant le vecteur nul, deux vecteurs égaux ou, plus généralement, un des vecteurs qui est combinaison linéaire d'autres vecteurs de la famille est liée.

• Soit $(\vec{u}_1, \vec{u}_2, ..., \vec{u}_n)$ une famille de vecteurs d'un espace vectoriel $E$. La famille $(\vec{u}_1, \vec{u}_2, ..., \vec{u}_n)$ est génératrice si, et seulement si, tout vecteur de $E$ s'écrit comme combinaison linéaire de $(\vec{u}_1, \vec{u}_2, ..., \vec{u}_n)$.

Cette combinaison n'est pas unique.

• Une famille à la fois libre et génératrice est une base.

• Une autre méthode pour montrer que la famille $(\vec{u}_1, \vec{u}_2, ..., \vec{u}_n)$ est une base de $E$ consiste à montrer que tout vecteur de $E$ s'écrit de manière unique comme combinaison linéaire des vecteurs $(\vec{u}_1, \vec{u}_2, ..., \vec{u}_n)$.

• Dans la pratique, la méthode suivante est la plus fréquemment utilisée pour montrer qu'une famille est une base de l'espace vectoriel $E$ :

• Si $\dim E = 2$ et $(\vec{u}_1; \vec{u}_2) \in E^2$ alors : $(\vec{u}_1; \vec{u}_2)$ est une base de $E \Leftrightarrow \det(\vec{u}_1; \vec{u}_2) \neq 0$.

• Si $\dim E = 3$ et $(\vec{u}_1; \vec{u}_2; \vec{u}_3) \in E^3$ alors : $(\vec{u}_1; \vec{u}_2; \vec{u}_3)$ est une base de $E \Leftrightarrow \det(\vec{u}_1; \vec{u}_2; \vec{u}_3) \neq 0$.

C'est d'ailleurs le dernier résultat vu dans le cours.

## Exercices

### Exercices d'application
#### Espaces vectoriels réels
**Exercice 2.**
On munit $\mathbb{R}^*$ d'une loi de composition interne $\times$ et d'une loi de composition externe $\bullet$ comme suit :

- La loi $\times$ est la multiplication usuelle dans $\mathbb{R}^*$.
- $(\forall \lambda \in \mathbb{R}) (\forall x \in \mathbb{R}^*) \lambda \cdot x = x^\lambda$

$(\mathbb{R}^*; \times; \cdot)$ est-il un espace vectoriel réel ?

**Exercice 3.**
On considère l'ensemble suivant :

$$E = \{(x; y; z) \in \mathbb{R}^3 / x = y = 2z\}$$

1) Montrer que pour tout $\lambda \in \mathbb{R}$ et pour tous $(x; y; z)$

et $(x'; y'; z')$ :

$$(x; y; z) + (x'; y'; z') \in E \text{ et } \lambda \cdot (x; y; z) \in E$$

2) Montrer que $(E; +; \cdot)$ est un espace vectoriel réel.
3) Trouver un vecteur $\vec{u}$ de $\mathbb{R}^3$ tel que :

$$(\forall \vec{x} \in E) (\exists \lambda \in \mathbb{R}) \vec{x} = \lambda \vec{u}$$

**Exercice 4.**
On considère dans $\mathbb{M}_2(\mathbb{R})$ l'ensemble :

$$E = \left\{ M = \begin{pmatrix} a+b & -5b \\ b & a+3b \end{pmatrix} / (a; b) \in \mathbb{R}^2 \right\}$$

1) Montrer que pour tous $M$ et $M'$ de $E$ et $\alpha \in \mathbb{R}$ :

$$M + M' \in E \text{ et } \alpha M \in E$$

2) Montrer que $(E; +; \cdot)$ est un espace vectoriel réel.

**Exercice 5.**
Dans l'espace vectoriel $(\mathbb{R}^3; +; \cdot)$, montrer que le vecteur $\vec{x} = (-13; 12; 5)$ s'écrit comme combinaison linéaire des vecteurs : $\vec{u} = (5; -2; 3)$ et $\vec{v} = (1; 3; 7)$

**Exercice 6.**
Soit $\mathcal{F}(\mathbb{R}; \mathbb{R})$ l'ensemble des fonctions numériques définies sur $\mathbb{R}$. On considère l'ensemble :

$$\mathcal{E} = \{ f \in \mathcal{F}(\mathbb{R}; \mathbb{R}) / f(5) = f(1) \}$$

Montrer que $(\mathcal{E}; +; \cdot)$ est un espace vectoriel réel.

**Exercice 7.**
Soit $\vec{u}$, $\vec{v}$ et $\vec{w}$ trois vecteurs de l'espace vectoriel $\mathbb{R}^3$. Montrer qu'il existe trois vecteurs uniques $\vec{a}, \vec{b}$ et $\vec{c}$ tels que :

$$\begin{cases} \vec{a} + \vec{b} + \vec{c} = \vec{u} \\ \vec{a} + 3\vec{b} - 4\vec{c} = \vec{v} \\ \vec{a} + 9\vec{b} + 16\vec{c} = \vec{w} \end{cases}$$

#### Familles libres, familles génératrices et bases
**Exercice 8.**
Dans l'espace vectoriel $(\mathbb{R}^3; +; \cdot)$, déterminer si les familles de vecteurs sont libres ou liées, génératrices ou pas et si ce sont des bases de $\mathbb{R}^3$ :

1) $\vec{u} = (1; 2; 3)$ et $\vec{v} = (3; 2; 1)$.
2) $\vec{u} = (-1; 0; 2)$, $\vec{v} = (0; 1; -2)$ et $\vec{w} = (2; 1; 0)$.
3) $\vec{u} = (1; -1; -1)$, $\vec{v} = (3; 3; 1)$ et $\vec{w} = (1; 2; 1)$.
4) $\vec{u} = (7; 2; -1)$, $\vec{v} = (1; -3; 2)$, $\vec{w} = (5; 1; 1)$ et $\vec{t} = (-2; 1; 3)$.

**Exercice 9.**
Dans l'espace vectoriel réel $(\mathcal{F}(\mathbb{R}; \mathbb{R}); +; \cdot)$, on considère les fonctions :

$$f : x \mapsto 1 ; g : x \mapsto \cos^2 x ; h : x \mapsto \cos(2x)$$

Montrer que la famille $(f; g; h)$ est liée.

**Exercice 10.**
Dans l'espace vectoriel réel ($\mathcal{F}(\mathbb{R}; \mathbb{R}); +; \cdot$), on considère les fonctions :
$f : x \mapsto x$ ; $g : x \mapsto \sin x$ ; $h : x \mapsto \cos(2x)$
Montrer que la famille $(f; g; h)$ est libre.

**Exercice 11.**
Dans l'espace vectoriel ($\mathbb{M}_3(\mathbb{R}); +; \cdot$), on considère les matrices suivantes :
$I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ ; $J = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ ; $K = \begin{pmatrix} 0 & 1 \\ 0 & 1 \end{pmatrix}$ ; $L = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$
1) Montrer que la famille $B = (I; J; K; L)$ est libre dans l'espace vectoriel ($\mathbb{M}_3(\mathbb{R}); +; \cdot$).
2) Écrire la matrice $M = \begin{pmatrix} 2 & 2 \\ -2 & 0 \end{pmatrix}$ comme combinaison linéaire des éléments de la famille $B$.

**Exercice 12.**
On considère l'ensemble :

$$E = \{(x; y; z) \in \mathbb{R}^3 / x + y + z = 0\}$$

1) Montrer que pour tous $(x; y; z)$ et $(x'; y'; z')$ de $E$ et pour tout $\alpha \in \mathbb{R}$ :
$(x; y; z) + (x'; y'; z') \in E$ et $\alpha \cdot (x; y; z) \in E$
2) Montrer que $(E; +; \cdot)$ est un espace vectoriel réel.
3) Montrer qu'il existe deux vecteurs $\vec{u}_1$ et $\vec{u}_2$ de $\mathbb{R}^3$ tels que la famille $(\vec{u}_1; \vec{u}_2)$ engendre l'espace $E$.

**Exercice 13.**
Dans l'espace vectoriel $\mathbb{R}^3$, on considère les vecteurs :

$$\vec{e}_1 = (1; 0; 0) \quad ; \quad \vec{e}_2 = (0; 1; 0) \quad ; \quad \vec{e}_3 = (0; 0; 1)$$

1) Montrer que la famille $B = (\vec{e}_1; \vec{e}_2; \vec{e}_3)$ est une base de l'espace vectoriel $\mathbb{R}^3$.
2) On considère les vecteurs suivants écrits dans la base $B$ : $\vec{u}_1 = (1; 1; 1)$ ; $\vec{u}_2 = (1; -1; 1)$ ; $\vec{u}_3 = (1; 2; 3)$ et la famille $B' = (\vec{u}_1; \vec{u}_2; \vec{u}_3)$.

a) Montrer que la famille $B' = (\vec{u}_1; \vec{u}_2; \vec{u}_3)$ est une base de l'espace vectoriel $\mathbb{R}^3$.
b) Soit $\vec{x} = 3\vec{e}_1 + 4\vec{e}_2 + 5\vec{e}_3$ un vecteur de $\mathbb{R}^3$.
Calculer les coordonnées de $\vec{x}$ dans la base $B'$.

**Exercice 14.**
Dans l'espace vectoriel réel $\mathbb{R}^4$, on considère les vecteurs :

$$\vec{u} = (1; 1; 1; 1) \quad ; \quad \vec{v} = (1; 2; 3; 4) \quad ; \quad \vec{w} = (1; 2; 8; 16)$$

1) Montrer que est une famille libre de $\mathbb{R}^4$.
2) La famille $(\vec{u}; \vec{v}; \vec{w})$ est-elle une base de $\mathbb{R}^4$? Justifier
3) Déterminer un vecteur $\vec{t}$ pour que la famille $(\vec{u}; \vec{v}; \vec{w}; \vec{t})$ soit une base de l'espace vectoriel $\mathbb{R}^4$.

**Exercice 16.**
Soit $(\vec{e}_1; \vec{e}_2; \vec{e}_3)$ une base de l'espace vectoriel $\mathbb{R}^3$.
Montrer que la famille $(\vec{e}_1; \vec{e}_2 + 2\vec{e}_3; 2\vec{e}_2 + \vec{e}_3)$ est également une base de $\mathbb{R}^3$.

**Exercice 17.**
Dans un espace vectoriel $E$ de dimension 3, on considère une base $B_1 = (\vec{u}_1; \vec{u}_2; \vec{u}_3)$ et une famille $B_2 = (\vec{e}_1; \vec{e}_2; \vec{e}_3)$ telle que :

$$\begin{cases} \vec{e}_1 = \vec{u}_1 + \vec{u}_2 + \vec{u}_3 \\ \vec{e}_2 = \vec{u}_1 - 2\vec{u}_2 - \vec{u}_3 \\ \vec{e}_3 = 2\vec{u}_1 - \vec{u}_2 + \vec{u}_3 \end{cases}$$

1) Montrer $B_2$ est une base de $E$.
2) On considère le vecteur $\vec{u} = (1; 2; 3)$ dans la base $B_1$.
Trouver les coordonnées de $\vec{u}$ dans la base $B_2$.

**Exercice 19.**
Dans l'espace vectoriel $\mathbb{R}^3$, on considère les vecteurs :

$$\vec{u} = (1; 2; -1) \quad \text{et} \quad \vec{v} = (0; 1; 1)$$

Montrer que les vecteurs sont linéairement indépendants puis déterminer un vecteur $\vec{w} \in \mathbb{R}^3$ tel que la famille $(\vec{u}; \vec{v}; \vec{w})$ soit une base de $\mathbb{R}^3$.

#### Sous-espaces vectoriels
**Exercice 21.**
Est-ce que les parties suivantes sont des sous-espaces vectoriels de l'espace vectoriel réel $\mathbb{R}^3$ ?

$$E_1 = \{(x; y; z) \in \mathbb{R}^3 / x + 2y + z = 0\}$$

$$E_2 = \{(x; y; z) \in \mathbb{R}^3 / x - y + z = 5\}$$

$$E_3 = \{(x; y; z) \in \mathbb{R}^3 / x^2 - y^2 = 0\}$$

$$E_4 = \{(x; y; z) \in \mathbb{R}^3 / x + y + z \le 1\}$$

$$E_5 = \{(x; y; z) \in \mathbb{R}^3 / x + 3y = 0 \text{ et } 2x - y + z = 0\}$$

$$E_6 = \{(x; y; z) \in \mathbb{R}^3 / z = 0\}$$

$$E_7 = \{(x; y; z) \in \mathbb{R}^3 / x - y + 2z = 2 \text{ et } x + z \ge 0\}$$

$$E_8 = \{(x; y; z) \in \mathbb{R}^3 / z = 1\}$$

**Exercice 23.**
Montrer que les ensembles suivants, muni des opérations habituelles définies dans $\mathbb{R}^3$, sont des espaces vectoriels réels :

$$E = \{(x; y; z) \in \mathbb{R}^3 / x + 2y + 3z = 0\}$$

$$F = \{(x + y; 2x - y; -3x + 2y) / x \in \mathbb{R} \text{ et } y \in \mathbb{R}\}$$

$$G = \{(x; y; z) \in \mathbb{R}^3 / x + y + z = 0 \text{ et } 2x - 5y + z = 0\}$$

**Exercice 25.**
On note $\mathcal{F}(\mathbb{R}, \mathbb{R})$ l'espace vectoriel réel des fonctions numériques définies sur $\mathbb{R}$. Les ensembles définis ci-après sont-ils des sous-espaces vectoriels de $\mathcal{F}(\mathbb{R}, \mathbb{R})$ ?

1) $F_1$ est l'ensemble des fonctions paires.

2) $F_2$ est l'ensemble des fonctions impaires.

3) $F_3$ est l'ensemble des polynômes de degré égal à 1.

4) $F_4$ est l'ensemble des fonctions $f$ deux fois dérivables sur $\mathbb{R}$ telles que : $(\forall x \in \mathbb{R}) f(x) - f'(x) = 0$

5) $F_5$ est l'ensemble des fonctions croissantes sur $\mathbb{R}$.

6) $F_6$ est l'ensemble des fonctions telles que :

$$\lim_{x \to +\infty} f(x) = 0$$

7) $F_7$ est l'ensemble des fonctions telles que :

$$\lim_{x \to +\infty} f(x) = +\infty$$

8) $F_8$ est l'ensemble des fonctions telles que :

$$f(0) = f(1)$$

9) $F_9$ est l'ensemble des fonctions $f$ de $\mathcal{F}(\mathbb{R}, \mathbb{R})$ continues sur $[0, 1]$ telles que : $\int_0^1 f(t) dt = 0$

**Exercice 28.**
Soit $(U; +; \cdot)$ l'espace vectoriel des suites réelles, les ensembles ci-après sont-ils des sous-espaces vectoriels de $U$ ?

1) L'ensemble $U_1$ des suites croissantes.

2) L'ensemble $U_2$ des suites décroissantes.

3) L'ensemble $U_3$ des suites convergentes.

4) L'ensemble $U_4$ des suites réelles $(u_n)$ vérifiant $\lim_{n \to +\infty} u_n = +\infty$.

5) L'ensemble $U_5$ des suites réelles $(u_n)$ vérifiant la relation de récurrence : $(\forall n \in \mathbb{N}) u_{n+2} = 2u_{n+1} - u_n$

**Exercice 29.**
On considère les ensembles suivants :

$$E = \{(x; y; z) \in \mathbb{R}^3 / x = y = z\}$$

$$F = \{(x; y; z) \in \mathbb{R}^3 / x - 2y + z = 0\}$$

$$G = \{(x; y; z) \in \mathbb{R}^3 / x + y + z = 0\}$$

1) Montrer que $(E; +; \cdot), (F; +; \cdot)$ et $(G; +; \cdot)$ sont des espaces vectoriels réels.

2) Déterminer une base et la dimension de chacun des espaces vectoriels $E, F$ et $G$.

3) Montrer que $E \cap F = \{\vec{0}\}$.

4) On pose : $H = F \cap G$ et $K = E \cup F$

a) Justifier pourquoi $K$ n'est pas un espace vectoriel réel.

b) Montrer que $(H; +; \cdot)$ est un espace vectoriel réel de dimension 1.

On considère le sous-ensemble $E$ de $\mathbb{M}_{2}(\mathbb{R})$ défini par: $E = \left\{\begin{array}{ll}a & b\\ c & d\end{array}\right\} \in \mathbb{M}_{2}(\mathbb{R}) / a + d = b + c$

1) Montrer que $ E $ est un sous-espace vectoriel de l'espace vectoriel réel $ (M_2(\mathbb{R}); +; \cdot) $.
2) Donner une base et la dimension de l'espace vectoriel $E$.

**Exercice 30.**

On considère les ensembles suivants :

\[
\begin{array}{l} E = \left\{\left(x; 0; x\right) / x \in \mathbb {R} \right\}; F = \left\{\left(- x; 2 x; 0\right) / x \in \mathbb {R} \right\} \\ H = \left\{\left(- x + 2 y; 2 x - 3 y; x + y\right) / (x; y) \in \mathbb {R} ^ {2} \right\} \\ K = \left\{\left(- x + 2 y; x + z; x + y\right) / (x; y; z) \in \mathbb {R} ^ {3} \right\} \\ \end{array}
\]

1) Montrer que chacun des ensembles ci-dessus, muni des opérations habituelles définies dans $\mathbb{R}^3$, sont des espaces vectoriels réels.
2) Déterminer une base et la dimension de chacun des espaces vectoriels montrés dans la question 1).

On considère le sous-ensemble suivant de $\mathbb{R}^3$ :

\[
F = \left\{\alpha (1; 1; 1) + \beta (1; 0; - 1) / (\alpha , \beta) \in \mathbb {R} ^ {2} \right\}
\]

1) Montrer que $F$ est un sous-espace vectoriel de $\mathbb{R}^3$.
2) Soit $\bar{u} = (x; y; z)$ un élément de $E$.

Quelle relation lie les composantes de vecteur $\bar{u}$ ?

Pour tout $x \in \mathbb{R}$, on pose :

\[
A (x) = x e ^ {x}; \quad B (x) = e ^ {x}; \quad C (x) = e ^ {- x}
\]

et soit $E$ l'ensemble des fonctions $f$ telles que: $\left(\exists (\alpha ;\beta ;\gamma)\in \mathbb{R}^3\right)f = \alpha A + \beta B + \gamma C$

1) a) Montrer que $(E; +; \cdot)$ est un espace vectoriel réel.

b) Montrer que $(A; B; C)$ est une base de $E$.

2) Soit $ f \in E $ et $ f' $ sa fonction dérivée.

Montrer que $ f' \in E $ puis déterminer les coordonnées de $ f' $ dans la base $ (A; B; C) $.

3) Soit $ f = \alpha A + \beta B + \gamma C $ un élément de $ E $.

Montrer que si $\alpha\gamma \neq 0$ alors $(f; f'; f'')$ est une base de l'espace vectoriel réel $E$.

**Exercice 31.**
Soit $E$ le sous-ensemble de $\mathbb{R}^{3}$ définie par :

\[
E = \left\{\left(x; y; z\right) \in \mathbb {R} ^ {3} / x ^ {2} + 2 y ^ {2} + z ^ {2} + 2 x y + 2 y z = 0 \right\}
\]

Est-ce que $E$ est un sous-espace vectoriel de l'espace vectoriel réel $(\mathbb{R}^3; +; \cdot)$? Justifier.

**Exercice 32.**
Soit $\mathcal{E}$ l'ensemble des fonctions polynômiales :

\[
\begin{array}{l} f: x \mapsto a x ^ {2} + b x + c \text {   telles   que   :   } \int_ {0} ^ {1} x ^ {n} f (x) d x = 0 \\ \text {   où   } n \in \mathbb {N} ^ {*} \text {   et   } (a; b; c) \in \mathbb {R} ^ {3}. \end{array}
\]

1) On considère les deux fonctions polynômiales $u$ et $v$ définies par :

\[
u (x) = x - \frac {n + 1}{n + 2} \quad \text { et } \quad v (x) = x ^ {2} - \frac {n + 1}{n + 3}
\]

a) Montrer que la famille $(u; v)$ est libre dans l'espace vectoriel réel $(\mathcal{I}(\mathbb{R}, \mathbb{R}); +; \cdot)$.

b) Montrer que :

\[
\left(\forall f \in \mathcal {E}\right) \left(\exists (\alpha ; \beta) \in \mathbb {R} ^ {2}\right) f = \alpha u + \beta v
\]

c) Montrer que $(\mathcal{E}; +; \cdot)$ est un espace vectoriel réel de dimension 2.

**Exercice 33.**
On considère le sous-ensemble $E$ de $\mathbb{M}_{3}(\mathbb{R})$ défini

\[
\text { par: } \mathcal {E} = \left\{M (x; y) = \left( \begin{array}{c c c} x & y & y \\ y & x & y \\ y & y & x \end{array} \right) / (x; y) \in \mathbb {R} ^ {2} \right\}
\]

Montrer que $(\mathcal{E}; +; \cdot)$ est un espace vectoriel réel puis déterminer sa dimension.

### Exercices de perfectionnement
**Exercice 34.**
Soit $\vec{x}$ et $\vec{y}$ deux vecteurs d'un espace vectoriel réel $(E; +; \cdot)$. Démontrer l'équivalence :

$(\vec{x}; \vec{y})$ est libre $\Leftrightarrow (\vec{x} + \vec{y}; \vec{y})$ est libre

**Exercice 35.**
Dans l'espace vectoriel réel $(\mathbb{R}^3; +; \cdot)$, on considère les vecteurs : $\vec{u} = (1; 2; -1)$ ; $\vec{v} = (2; -1; 1)$

$$\vec{w} = (3; 0; -1) \quad ; \quad \vec{f} = (1; -2; 3)$$

1) Montrer que la famille $(\vec{u}; \vec{v}; \vec{w})$ est une base de l'espace vectoriel $\mathbb{R}^3$.

2) a) Montrer qu'il existe un couple $(\alpha, \beta) \in \mathbb{R}^2$ tel que : $\vec{f} = \alpha \vec{u} + \beta \vec{v}$

b) Que peut-on en déduire concernant la famille $(\vec{u}; \vec{v}; \vec{f})$ ? Justifier.

**Exercice 36.**
Soit $\mathcal{D}$ l'ensemble des fonctions deux fois dérivables sur $\mathbb{R}^*$ telles que :

$$(\forall x \in \mathbb{R}^*) \ x f''(x) - (x+1) f'(x) + f(x) = 0$$

1) Montrer que $(\mathcal{D}; +; \cdot)$ est un espace vectoriel réel.

2) Soit $u$ et $v$ les fonctions numériques définies sur $\mathbb{R}^*$ par : $u(x) = x+1$ et $v(x) = e^x$

a) Vérifier que $u$ et $v$ sont des éléments de $\mathcal{D}$.

b) Montrer que la famille $(u; v)$ est libre dans $\mathcal{D}$.

3) Soit $f$ une fonction deux fois dérivables sur $\mathbb{R}^*$. Montrer que si $f \in \mathcal{D}$, alors :

$$(\forall x \in \mathbb{R}^*) \ f''(x) = f''(x)$$

4) Montrer que $\mathcal{D}$ est l'ensemble des fonctions $f$ telles : $(\exists (a; b) \in \mathbb{R}^2)$ $f(x) = ae^x + bx + b$

5) Montrer que $(u; v)$ est une base de de $\mathcal{D}$.

**Exercice 37.**
On considère l'ensemble suivant :

$$E = \left\{ M = \begin{pmatrix} x & y & z \\ 0 & x & y \\ 0 & 0 & x \end{pmatrix} / (x; y; z) \in \mathbb{R}^3 \right\}$$

1) Montrer que $(E; +; \cdot)$ est un espace vectoriel réel.
2) Déterminer une base de $(E; +; \cdot)$ et sa dimension.
3) On considère les matrices :

$$X = \begin{pmatrix} -1 & 2 & 0 \\ 0 & -1 & 2 \\ 0 & 0 & -1 \end{pmatrix} \quad ; \quad Y = \begin{pmatrix} 1 & 0 & 4 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

$$Z = \begin{pmatrix} 2 & -1 & 3 \\ 0 & 2 & -1 \\ 0 & 0 & 2 \end{pmatrix}$$

La famille $(X; Y; Z)$ est-elle une base de l'espace vectoriel $(E; +; \cdot)$ ? Justifier.

**Exercice 38.**
On note $f_{(a;b)}$ l'ensemble des fonctions numériques

définies sur $\mathbb{R}$ par : $f_{(a;b)}(x) = \frac{ax}{e^x} + \frac{be^x}{1+e^x}$

On considère l'ensemble : $E = \{f_{(a;b)} / (a; b) \in \mathbb{R}^2\}$

1) Montrer que $(E; +; \cdot)$ est un sous-espace vectoriel de l'espace vectoriel réel $(\mathcal{F}(\mathbb{R}; \mathbb{R}); +; \cdot)$.
2) Montrer que la famille $B = (f_{(1;0)}; f_{(0;1)})$ est une base de l'espace vectoriel réel $(E; +; \cdot)$.
3) On considère la fonction $g$ définie sur $\mathbb{R}$ par :

$$g(x) = \frac{e^{2x} + xe^x + x}{e^{2x} + e^x}$$

a) Montrer que $g \in E$.

b) Déterminer les coordonnées de $g$ dans la base $\mathcal{B}$

**Exercice 39.**
On considère l'ensemble suivant :

$$E = \left\{ M = \begin{pmatrix} a & c & b \\ b & a+c & b+c \\ c & b & a+c \end{pmatrix} / (a; b; c) \in \mathbb{R}^3 \right\}$$

On pose :

$$I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} ; J = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix} ; K = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$$

1) Vérifier que: $J^2 = K$ ； $K^2 = J + K$ ； $JK = KJ = I + J$
2) Montrer que $(E; + ;\bullet)$ est un espace vectoriel réel et déterminer sa dimension.
3) Montrer que $(E; + ; \times)$ est un anneau commutatif.
4) Vérifier que $ J^2 = I + J $ puis déterminer $ J^{-1} $.

**Exercice 40.**
Soit $S$ une matrice non nulle de $\mathbb{M}_3(\mathbb{R})$. On pose :

$$E = \{ M \in \mathbb{M}_3(\mathbb{R}) \mid M \times S = O \}$$

$$F = \{ M + I \mid M \in E \} \quad (I \text{ est la matrice identité}).$$

1) Montrer que $(E; + ; \bullet)$ est un espace vectoriel réel.
2) a) Montrer que pour tout $A \in \mathbb{M}_3(\mathbb{R})$:

$$A \in F \Leftrightarrow A \times S = \bar{S}$$

b) Montrer que $F$ est stable dans $(\mathbb{M}_3(\mathbb{R}); \times)$.

3) Soit $A \in F$. Montrer que si $A$ est inversible dans $(\mathbb{M}_3(\mathbb{R}); \times)$ alors $A^{-1} \in F$.

**Exercice 41.**
On considère dans $\mathbb{M}_3(\mathbb{R})$ les deux matrices :

$$I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \quad \text{et} \quad J = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$$

1) a) Calculer $J^2$ et $J^3$ et en déduire que :

$$J^3 - 3J^2 + 3J = I$$

b) En déduire que $J$ admet un inverse $J^{-1}$ dans $(\mathbb{M}_3(\mathbb{R}); \times)$ qu'on déterminera.

2) On considère l'ensemble :

$$E = \left\{ M = \begin{pmatrix} a+b & a & a \\ 0 & a+b & a \\ 0 & 0 & a+b \end{pmatrix} / (a; b) \in \mathbb{R}^2 \right\}$$

a) Montrer que $(E; + ; \bullet)$ est un espace vectoriel réel.
b) Établir que $(I;J)$ est une base de $E$

**Exercice 42.**
Soit $n \in \mathbb{N}^*$ et $\alpha \in \mathbb{R}^*$. On désigne par $\mathcal{P}_n$ l'ensemble des polynômes de degré inférieur ou égal à $n$.

On pose pour tout $x \in \mathbb{R}$ :

$$P_k(x) = x^k \text{ et } Q_k(x) = (x - \alpha)^k \text{ avec } k \in \{0; 1; ..; n\}.$$

1) Montrer que $(\mathcal{P}_n; +; \bullet)$ est un espace vectoriel réel.
2) Montrer que la famille $\left(P_0; P_1; \ldots; P_n\right)$ est une base de l'espace vectoriel réel $\left(\mathcal{P}_n; +; \bullet\right)$.
3) a) Montrer que pour tout $ k \in \{0;1;..;n\} $:

$$P_k = \sum_{i=0}^k C_k^i \alpha^{k-i} Q_i$$

b) En déduire que la famille $B' = (Q_0; Q_1; ...; Q_n)$ est une base de l'espace vectoriel réel $(\mathcal{P}_n; +; \bullet)$.

4) Pour tout $k \in \{0; 1; ..; n\}$, on considère la fonction numérique $G_k$ définie sur $\mathbb{R}$ par :

$$\begin{cases} G_k(x) = \frac{1}{x} \int_x^{2x} P_k(t) dt \text{ si } x \in \mathbb{R}^* \\ G_k(0) = 0 \end{cases}$$

a) Montrer que pour tout $k\in \{0;1;..;n\}$ .. $G_{k}\in \mathcal{P}_{n}$
b) Pour tout $k\in \{0;1;..;n\}$, déterminer les coordonnées de $G_{k}$ dans la base $B^{\prime}$.

**Exercice 43.**
On désigne par $\mathcal{C}$ l'ensemble des fonctions continues sur l'intervalle $I = [a; b]$ tel que : $ab < 0$

On considère l'ensemble suivant :

$$E = \{f \in \mathcal{C} / (\exists \varepsilon > 0) (\forall x \in I) |f(x)| \leq \varepsilon |x|\}$$

1) Montrer que pour tout $ f \in E $: $ f(0) = 0 $
2) Montrer que $(E; +; \cdot)$ est un espace vectoriel réel.
3) Montrer que les fonctions sin et Arctan sont des éléments de $E$.

**Exercice 44.**
Soit $I$ et $J$ les deux matrices de $\mathbb{M}_2(\mathbb{R})$ définies par :

$$I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \quad \text{et} \quad J = \begin{pmatrix} 0 & 1 \\ -1 & \sqrt{3} \end{pmatrix}$$

On considère l'ensemble suivant :

$$E = \{M(a; b) = aI + bJ / (a; b) \in \mathbb{R}^2\}$$

1) a) Montrer que la famille $(I;J)$ est libre dans l'espace vectoriel réel $(\mathbb{M}_2(\mathbb{R}); + ;\cdot)$.
b) Montrer que $(E; +; \cdot)$ est un espace vectoriel réel de dimension 2.
2) a) Vérifier que: $ J^2 = \sqrt{3} J - I $
b) Montrer que $E$ est stable dans $\left(\mathbb{M}_2(\mathbb{R});\times\right)$.
c) Montrer que $(E; +; \times)$ est un corps commutatif.

3) Soit $\alpha$ un nombre complexe non réel.

a) Montrer que la famille $(1; \alpha)$ est une base de l'espace vectoriel réel $(\mathbb{C}; +; \cdot)$.
b) On considère l'application $f_{\alpha}$ définie de $E$ dans $\mathbb{C}$ par: $(\forall M(a; b) \in E) f_{\alpha}(M(a; b)) = a + \alpha b$ Montrer que $f_{\alpha}$ est un isomorphisme de $(E; +)$ dans $(\mathbb{C}; +)$.

c) Déterminer les valeurs de $\alpha$ pour lesquelles $f_\alpha$ est un morphisme de $(E; \times)$ dans $(\mathbb{C}; \times)$.

4) On prend: $\alpha = \frac{\sqrt{3}}{2} +\frac{1}{2} i$
a) Déterminer $f_{\alpha}^{-1}$, l'application réciproque de $f_{\alpha}$.

b) Soit $n \in \mathbb{N}$. Calculer $J^n$ en fonction de $n$ puis en déduire que : $J^n = I \Leftrightarrow n \equiv 0 \ [12]$

**Exercice 45.**
Soit $n \in \mathbb{N}^*$, $(a_1; a_2; \dots; a_n) \in \mathbb{R}^n$ tels que $a_1 < \dots < a_n$. La famille des fonctions $(f_{a_1}; f_{a_2}; \dots; f_{a_n})$ est-elle libre ou est-elle liée, dans les cas suivants :

1) $f_{a_1}:\mathbb{R}\to \mathbb{R},x\mapsto |x - a_i|$
2) $f_{a_1}:\mathbb{R}\to \mathbb{R},x\mapsto e^{a_1x}$
3) $f_{a_1}:\mathbb{R} - \{a_1;\dots;a_n\} \to \mathbb{R},x\mapsto \frac{1}{x - a_i}.$

**Exercice 46.**
Soit $I$ et $A$ les deux matrices de $\mathbb{M}_2(\mathbb{R})$ définies par

$$I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \quad \text{et} \quad A = \begin{pmatrix} 1 & 2 \\ -2 & -1 \end{pmatrix}$$

1) Résoudre dans $\mathbb{M}_2(\mathbb{R})$ l'équation :

$$A \times M = M \times A \quad (M \text{ étant l'inconnue})$$

2) Soit $S$ l'ensemble solution de l'équation précédente

a) Montrer que :

$$(\forall M \in S) (\exists (\alpha; \beta) \in \mathbb{R}^2) / M = \alpha A + \beta I$$

b) Établir que $(S; +; \cdot)$ est un espace vectoriel réel et déterminer sa dimension.

3) a) Montrer que $S$ est stable dans $\left(\mathbb{M}_2(\mathbb{R});\times\right)$.
b) Montrer que $(S; +; \times)$ est un corps commutatif.
c) Résoudre dans $S$ l'équation: $M^3 = M$

4) Soit $n$ un entier naturel.

a) Calculer $A^n$ en fonction de $n$ avec :

$$A^n = \underbrace{A \times \dots \times A}_{n \text{ fois}} \quad \text{et} \quad A^0 = I$$

b) En utilisant la formule du binôme de Newton, déterminer l'expression de $(A + I)^n$ en fonction de $n$.

### Problèmes de synthèse
#### Se préparer aux devoirs
**Devoir 1.**
Partie A:
On définit dans $\mathbb{C}$ une loi de composition interne *
comme suit : Pour tout $(a; b; x; y) \in \mathbb{R}^4$,

$$(a + ib) * (x + iy) = ax + i(ay + bx)$$

1) Montrer que la loi * est commutative, associative et admettant un élément neutre qu'on déterminera.

2) Déterminer $G$, ensemble des éléments symétrisables pour la loi * et montrer que $(G; *)$ est un groupe commutatif.

3) Soit $H$ une partie de $\mathbb{C}$ telle que $H \neq \{0\}$.

Montrer que si $(H; *)$ est groupe alors $H \subset G$.

4) Montrer que l'ensemble $E$ définie par :

$$E = \{e^t + ite^t / t \in \mathbb{R}\}$$

est un sous-groupe de $(G; *)$.

5) a) Montrer que : $(\forall z \in G) \ \overline{z} \in G$

b) Montrer que l'application $f : z \mapsto \overline{z}$ est un automorphisme de $(G; *)$.

6) a) Montrer que * est distributive par rapport à l'addition dans $\mathbb{C}$.

b) Montrer que $(\mathbb{C}; *; +)$ est un anneau non intègre.

7) Déterminer les diviseurs de zéro dans l'anneau $(\mathbb{C}; *; +)$.

Partie B:

On considère l'ensemble $\mathcal{E}$ suivant :

$$\mathcal{E} = \left\{ M(a; b) = \begin{pmatrix} a & -b \\ 0 & a \end{pmatrix} / (a; b) \in \mathbb{R}^2 \right\}$$

1) Montrer que $(\mathcal{E}; +; \cdot)$ est un espace vectoriel réel et en déterminer une base.

2) a) Montrer que $\mathcal{E}$ est stable dans $(\mathbb{M}_2(\mathbb{R}); \times)$.

b) Montrer que l'application :

$$f : z = a + ib \mapsto M(a; b)$$

est un isomorphisme de $(\mathbb{C}; *)$ dans $(\mathcal{E}; \times)$.

c) En déduire l'ensemble des matrices admettant un inverse dans $(\mathcal{E}; \times)$.

**Devoir 2.**
Les parties A), B) et C) sont indépendantes.

Partie A:

Soit $E$ l'ensemble des fonctions $f$ définie sur $\mathbb{R}$ par :

$$(\forall (x; y) \in \mathbb{R}^2) \ f(x) + f(y) = 2f\left(\frac{x+y}{2}\right)$$

1) Montrer que $(E; +; \cdot)$ est un espace vectoriel réel.

2) Soit $\mathcal{A}$ l'ensemble des fonctions affines définies de $\mathbb{R}$ dans $\mathbb{R}$.

Montrer que $\mathcal{A} \subset E$ et que $(\mathcal{A}; +; \cdot)$ est un espace vectoriel réel.

Partie B:

Pour tout $(a; b) \in \mathbb{R}^2$, on pose :

$$f_{(a; \beta)}(x) = \alpha e^x \cos(ax) + \beta e^x \sin(bx)$$

avec $(\alpha; \beta) \in \mathbb{R}^2$. On considère l'ensemble suivant :

$$E_{(a; b)} = \{f_{(\alpha; \beta)} / (\alpha; \beta) \in \mathbb{R}^2\}$$

1) Montrer que $(E_{(a; b)}; +; \cdot)$ est un espace vectoriel réel.

2) Déterminer, selon les valeurs des réels $a$ et $b$, la dimension de l'espace vectoriel $E_{(a; b)}$.

Partie C:

Dans cette partie, $(\mathcal{F}(\mathbb{R}_+^\bullet); +; \cdot)$ désigne l'espace vectoriel des fonctions numériques définies sur $\mathbb{R}_+^\bullet$.

Pour tout $(a; b) \in \mathbb{R}^2$ et pour tout $x \in \mathbb{R}_+^\bullet$, on pose :

$$f_{(a; b)}(x) = x^a e^{bx} \ \text{et} \ \varphi_{(a; b)}(x) = \ln(f_{(a; b)}(x))$$

On considère l'ensemble : $\mathcal{L} = \{\varphi_{(a;b)} / (a;b) \in \mathbb{R}^2\}$

1) Montrer que $(\mathcal{L}; + )$ est un sous-groupe du groupe $\left(\mathcal{F}\left(\mathbb{R}_{+}^{*}\right); + \right)$.
2) a) Vérifier que pour tout $\varphi_{(a; b)} \in \mathcal{L}$ et pour tout

$$\lambda \in \mathbb{R} : \lambda \cdot \varphi_{(a;b)} \in \mathcal{L}$$

b) En déduire que $(\mathcal{L}; + ; \cdot)$ est un espace vectoriel réel.
c) Montrer que $\left(\varphi_{(1;0)}; \varphi_{(0;1)}\right)$ est une base de l'espace vectoriel $\mathcal{L}$ puis déterminer sa dimension.

**Devoir 3.**
Les parties A), B) et C) sont indépendantes.

**Partie A :**
Soit $E$ l'ensemble suivant :

$$\mathcal{E} = \{f : x \mapsto (ax + b)e^{2x} / (a;b) \in \mathbb{R}^2\}$$

1) Montrer que $(\mathcal{E}; + ; \cdot)$ est un espace vectoriel réel.
2) Soit $ f_{1} $ et $ f_{2} $ les deux fonctions numériques définies sur $ \mathbb{R} $ par: $ f_{1}(x) = e^{2x} $ et $ f_{2}(x) = xe^{2x} $

Montrer que la famille $B = (f_1; f_2)$ est une base de l'espace vectoriel $\mathcal{E}$.

3) Montrer que la fonction $g : x \mapsto \int_0^x \left(t + \frac{1}{2}\right)e^{2t} dt$ est appartient à l'ensemble $\mathcal{E}$ en déterminant ses coordonnées dans la base $B$.

**Partie B :**
On définit sur l'ensemble $H = \mathbb{R}_+^* \times \mathbb{R}$ une loi de composition interne « + » comme suit :

Pour tous $(x; y)$ et $(x'; y')$ de $H$ :

$$(x; y) + (x'; y') = (x + x'; y + y')$$

et une loi de composition externe à coefficients réels « • » comme suit :

$$(\forall \alpha \in \mathbb{R}) (\forall (x; y) \in H) \alpha \cdot (x; y) = (x^\alpha; \alpha y)$$

1) On considère l'application $\varphi$ définie de $\mathbb{R}^2$ dans $H$ par : $\varphi((x; y)) = (e^x; y)$

(En considérant $(\mathbb{R}^2; +; \cdot)$ l'espace vectoriel issu

a) Montrer que $\varphi$ est un morphisme de $(\mathbb{R}^2; + )$ da $(\mathrm{H}; + )$
b) En déduire que $(\mathrm{H}; + )$ est un groupe commutati
c) Déterminer l'élement neutre dans $(\mathrm{H}; + )$

Quelle est le symétrique de $(x; y)$ dans $(H; +)$.

2) Montrer que $(H; +; \cdot)$ est un espace vectoriel réel

**Partie C :**
On considère dans $\mathbb{M}_3(\mathbb{R})$ la matrice suivante :

$A = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$

On considère l'ensemble défini par :

$$E = \{M \in \mathbb{M}_3(\mathbb{R}) / M = xI + yA ; (x; y) \in \mathbb{R}^2\}$$

1) a) Montrer que $(E; +; \cdot)$ est un espace vectoriel ré

b) Montrer que : $(\forall \alpha \in \mathbb{R}) A \neq \alpha I$ puis en déduire que la famille $(I; A)$ est une base de l'espace vectoriel $E$.

2) Vérifier que $ A^2 = A + 2I $ puis en déduire que $ A $ admet un inverse $ A^{-1} $ appartenant à $ E $.
3) a) Montrer que $E$ est stable dans $\left(\mathbb{M}_3(\mathbb{R});\times\right)$.
b) Montrer que $(E; + ;\times)$ est un anneau commutati
4) a) Montrer que l'équation: $(X \in E); X^2 = X$ admet quatre solutions:

La matrice nulle, la matrice identité et deux matrices que nous les noterons $P$ et $Q$.

b) Calculer le produit $P \times Q$. Les matrices $P$ et $Q$ admettent-elles un inverse dans $(E; \times)$? Justifier
c) Déterminer les coordonnées de $ P $ et $ Q $ dans la base $ (I; A) $.
d) En déduire que la famille $(P;Q)$ est une base de l'espace vectoriel $E$.

#### Se préparer aux examens
**Problème 1.**
Partie A:
On munit $\mathbb{R}$ d'une loi de composition interne comme

ou munit $\forall (x; y) \in \mathbb{R}^2$ $x * y = x + y - e^{xy} + 1$

suit:
1) a) Montrer que la loi * est commutative dans $\mathbb{R}$.

b) Montrer que la loi * admet un élément neutre qu'on déterminera.

2) Sachant que l'équation : $(E) : 3 + x - e^{2x} = 0$
admet deux solutions réelles distinctes $\alpha$ et $\beta$, montrer que la loi * n'est pas associative.

Partie B:
On rappelle que $(\mathbb{M}_2(\mathbb{R}); +; \times)$ est un anneau non

commutatif d'élément unité $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$, et que

$(\mathbb{C}^*; \times)$ est un groupe commutatif.

Pour tout $(x; y) \in \mathbb{R}^2$, on pose : $M(x; y) = \begin{pmatrix} x & -2y \\ \frac{y}{2} & x \end{pmatrix}$

et soit : $F = \{M(x; y) / (x; y) \in \mathbb{R}^2\}$

1) Montrer que $F$ est un sous-espace vectoriel de l'espace vectoriel réel $(\mathbb{M}_2(\mathbb{R}); + ;\bullet)$.
2) Montrer que $F$ est une partie stable de $\left(\mathbb{M}_2(\mathbb{R});\times\right)$.
3) On considère l'application $\varphi$ de $\mathbb{C}^*$ dans $F$ est qui, à tout nombre complexe $z = x + iy$ avec $(x;y)\in \mathbb{R}^2$ associe la matrice $M(x;y)$.

a) Montrer que l'application $\varphi$ est un morphisme de $(\mathbb{C}^*; \times)$ dans $(F; \times)$.
b) On pose: $ F^{*} = F - \{M(0;0)\} $. Montrer que $ \varphi(\mathbb{C}^{*}) = F^{*} $.
c) Montrer que $(F^{*};\times)$ est un groupe commutatif.
4) Montrer que $(F; + ; \times)$ est un corps commutatif.
**Examen National 2015 (session de rattrapage).**

**Problème 2.**
Partie A:

Pour tout $(a; b) \in \mathbb{R}^2$, on considère dans $\mathbb{M}_2(\mathbb{R})$ la

matrice : $M(a; b) = \begin{pmatrix} a + b & -b \\ b & a \end{pmatrix}$

Soit $\mathcal{E}$ l'ensemble des matrices :

$$\mathcal{E} = \{M(a; b) / (a; b) \in \mathbb{R}^2\}$$

On rappelle que $(\mathbb{M}_2(\mathbb{R}); +; \times)$ est un anneau non

commutatif d'élément unité $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.

1) Montrer que $\mathcal{E}$ est stable dans $(\mathbb{M}_2(\mathbb{R}); + )$ et dans $(\mathbb{M}_2(\mathbb{R});\times)$
2) Montrer que $(\mathcal{E}; + ;\times)$ est un anneau commutatif.
3) a) Montrer que pour tout $(x;y)\in \mathbb{R}^2$ , on a:

$$x^2 + xy + y^2 = 0 \Leftrightarrow x = y = 0$$

b) Déterminer les éléments inversibles dans l'anneau $(\mathcal{E}; + ; \times)$.
c) En déduire que $(\mathcal{E}; + ; \times)$ est un corps commutatif.

Partie B:

Soit $\sigma$ un nombre complexe n'appartenant pas à $\mathbb{R}$.

1) Montrer que $(1; \sigma)$ est une base de l'espace vectoriel réel $(\mathbb{C}; +; \bullet)$.
2) On considère l'application $\psi$ définie de $\mathcal{E}$ dans $\mathbb{C}$ par: $\psi (M(a;b)) = a + \sigma b$

Montrer que $\psi$ est un isomorphisme de $(\mathcal{E}; +)$ dans $(\mathbb{C}; +)$.

3) On considère dans $\mathbb{C}$ l'équation $(E):z^2 -z + 1 = 0$
Résoudre l'équation $(E)$ puis écrire les solutions sous forme trigonométrique.
4) On suppose dans cette question que: $\sigma = \frac{1}{2} + i\frac{\sqrt{3}}{2}$
Montrer que $\psi$ est un morphisme de $(\mathcal{E};\times)$ dans $(\mathbb{C};\times)$.
**Examen National 2003 (Session Normale).**

**Problème 3.**

On rappelle que $\left(\mathbb{M}_{2}(\mathbb{R});+; \times\right)$ est un anneau de zéro
$$O=\begin{pmatrix}0&0\\0&0\end{pmatrix}$$ et d'unité $I=\begin{pmatrix}1&0\\0&1\end{pmatrix}$ . On rappelle aussi que $\left(\mathbb{M}_{2}(\mathbb{R});+; \cdot\right)$ est un espace vectoriel réel.

Soit $V$ l'ensemble des matrices $M(a; b)=\begin{pmatrix}a&b\\4 b&a\end{pmatrix}$ avec $(a; b) \in \mathbb{R}^{2}$ .

1) Montrer que $V$ est un sous-espace vectoriel de $\left(\mathbb{M}_{2}(\mathbb{R});+; \cdot\right)$ et déterminer en une base.

2) a) Montrer que $V$ est stable dans $\left(\mathbb{M}_{2}(\mathbb{R}); \times\right)$ .

b) Montrer que $(V; +; \times)$ est un anneau commutatif.

3) a) Calculer $M\left(\frac{1}{2};-\frac{1}{4}\right) \times M\left(\frac{1}{2}; \frac{1}{4}\right)$ .

b) L'anneau $(V; +; \times)$ est-il un corps ? Justifier.

4) Soit $X$ une matrice de $V$ telle que :

$$X=\left(\begin{array}{cc}a&b\\4 b&a\end{array}\right) \text { avec }(a ; b) \in \mathbb{R}^{2}$$

a) Montrer que : $X^{2}-2 a X+\left(a^{2}-4 b^{2}\right) I=0$

b) On suppose que $a^{2}-4 b^{2} \neq 0$ .

Montrer que $X$ est inversible dans $(V; +; \times)$ et déterminer sa matrice inverse.

**Examen National 2009 (session de rattrapage).**

**Problème 4.**

On rappelle que $\left(\mathbb{M}_{3}(\mathbb{R});+; \times\right)$ est un anneau de zéro

$$O=\left(\begin{array}{ccc}0&0&0\\0&0&0\\0&0&0\end{array}\right) \text { et d'unité } I=\left(\begin{array}{ccc}1&0&0\\0&1&0\\0&0&1\end{array}\right) \text { et que }$$

$\left(\mathbb{M}_{3}(\mathbb{R});+; \cdot\right)$ est un espace vectoriel réel.

On pose $A=\left(\begin{array}{lll}0&0&1\\1&0&0\\0&1&0\end{array}\right)$ et on considère l'ensemble :

$$\mathcal{E}=\left\{M \in \mathbb{M}_{3}(\mathbb{R}) / M A=A M\right\}$$

1) a) Montrer que $(\mathcal{E} ;+; \cdot)$ est un espace vectoriel réel.

b) Montrer que la famille $(I ; A ; A^{2})$ est une base de l'espace vectoriel $(\mathcal{E} ;+; \cdot)$ .

2) Montrer que $(\mathcal{E} ;+; \times)$ est un anneau commutatif.

3) On considère l'ensemble :

$$\mathcal{I}=\{M \in \mathcal{E} / \operatorname{det} M \neq 0\}$$

Montrer que $(\mathcal{I} ; \times)$ est un groupe commutatif.

4) On pose : $B=I+A+A^{2}$

a) Déterminer l'ensemble des matrices $M$ qui appartiennent à $\mathcal{E}$ et qui vérifie $M \times B=O$ .

b) Montrer que pour tout $(a ; b ; c) \in \mathbb{R}^{3}$ , on a :

$$\operatorname{det}\left(a I+b A+c A^{2}\right)=a^{3}+b^{3}+c^{3}-3 a b c=$$

$$\frac{1}{2}(a+b+c)\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\right]$$

c) Déterminer l'ensemble des diviseurs de zéro dans l'anneau $(\mathcal{E} ;+; \times)$ .

**Examen National 2002 (Session Normale).**

**Problème 5.**
On rappelle aussi que $\left(\mathbb{M}_{2}(\mathbb{R});+; \cdot\right)$ est un espace vectoriel réel.

Pour tout $(a ; b) \in \mathbb{R}^{2}$ , on pose :

$$M(a ; b)=\left(\begin{array}{cc}a+b & -b\\5 b & a-3 b\end{array}\right)$$

et on considère l'ensemble :

$$\mathcal{I}=\{M(a ; b) /(a ; b) \in \mathbb{R}\}$$

On note : $O=M(0 ; 0)$ et $J=M(0 ; 1)$ et $I=M(1 ; 0)$

1) a) Montrer que $(\mathcal{I} ;+; \cdot)$ est un espace vectoriel réel. b) Montrer que $(I;J)$ est une base de l'espace vectoriel $(\mathcal{I} ;+; \cdot)$ et donner sa dimension.

2) Soit $\alpha$ un nombre complexe n'appartenant pas à $\mathbb{R}$ . Montrer que la famille $(1 ; \alpha)$ est une base de l'espace vectoriel réel $(\mathbb{C} ;+; \cdot)$ .

3) On considère l'application ψ de ℂ dans 𝒯 définie
par : ψ(z) = M(a; b)

avec : z = a + bα et (a; b) ∈ ℝ²

a) Vérifier que : J² = -2(I + J) et ψ(α) = J

b) Déterminer les deux valeurs de α pour lesquelles l'application ψ est un isomorphisme de (ℂ; ×) dans (𝒯; ×).

4) On prend dans cette question : α = -1 + i
Écrire dans la base (I; J) la matrice J²⁰⁰⁷.
**Examen National 2007 (session de rattrapage).**

On rappelle aussi que (M₃(ℝ); +; •) est un espace vectoriel réel.

Pour tout (a; b; c) ∈ ℝ³, on pose :

$$M(a; b; c) = \begin{pmatrix} a & -c & -b \\ b & a & -c \\ c & b & a \end{pmatrix}$$

et on considère l'ensemble :

$$E = \{M(a; b; c) / (a; b; c) \in \mathbb{R}^3\}$$

On note :

$$I = M(1; 0; 0) ; A = M(0; 1; 0) ; B = M(0; 0; 1)$$

1) Montrer que $(E; +; \cdot)$ est un espace vectoriel réel.
2) Montrer que la famille $(I; A; B)$ est une base de l'espace vectoriel $E$.
3) a) Vérifier que:

$$A^2 = B \quad \text{et} \quad B^2 = -A \quad \text{et} \quad AB = BA = -I$$

b) Montrer que pour tous X et Y de E :

$$XY \in E \quad \text{et} \quad XY = YX$$

4) On considère la matrice : D = M(0; -1; 1)

a) Montrer que $D$ est une matrice inversible.
b) Montrer que: $D^2 - D - 2I = O$
c) Déterminer $D^{-1}$ puis montrer que $D^{-1} \in E$.
**Examen National 2002 (Session Normale).**

**Problème 6.**

On rappelle que (M₂(ℝ); +; •) est un espace vectoriel réel.

Pour tout (a; b) ∈ ℝ², on pose :

$$M(a; b) = \begin{pmatrix} a+b & b \\ -b & a-b \end{pmatrix} \text{ avec } (a; b) \in \mathbb{R}^2$$

et on considère l'ensemble :

$$V = \{M(a; b) / (a; b) \in \mathbb{R}^2\}$$

On note : $I = M(1; 0)$ et $J = M(0; 1)$.

1) a) Montrer que $(V; +; \cdot)$ est un espace vectoriel réel.
b) Montrer que $(I;J)$ est une base de $V$ puis déterminer les coordonnées d'un élément $M\in V$ dans cette base.

2) a) Calculer J².

b) Montrer que $(V; +; \times)$ est un anneau.
c) L'anneau $(V; +; \times)$ est-elle commutatif?
d) L'anneau $(V; +; \times)$ est-il intègre?

3) Déterminer les éléments inversibles dans $(V; +; \times)$.
4) Soit $M \in V$. On pose:

$$M^1 = M \text{ et } M^{n+1} = M^n \times M \text{ pour } n \in \mathbb{N}^* - \{1\}.$$

Montrer que le système de coordonnées de Mⁿ dans la base (I; J) sont (aⁿ; naⁿ⁻¹b).

5) Déterminer le couples des coordonnées de la matrice M + M² + ... + Mⁿ dans la base (I; J) en fonction de a, b et n.
**Examen National 2005 (session de rattrapage).**

**Problème 7.**

On considère l'espace vectoriel réel (𝒯(ℝ; ℝ); +; •) des fonctions numériques définies de ℝ dans ℝ.

Soit 𝒜 l'ensemble des fonctions polynomiales P de degré inférieur ou égal à 2 et vérifiant l'égalité :

$$\int_0^1 xP(x)dx = 0$$

1) On pose pour tout $x \in \mathbb{R}$:

$$P_1(x) = x - \frac{2}{3} \quad \text{et} \quad P_2(x) = x^2 - \frac{1}{2}$$

a) Montrer que $(P_1; P_2)$ est une famille libre dans l'espace vectoriel $(\mathcal{F}(\mathbb{R}; \mathbb{R}); +; \cdot)$.

b) Montrer que :

$$(\forall P \in \mathscr{A}) (\exists(\alpha; \beta) \in \mathbb{R}^2) P = \alpha P_1 + \beta P_2$$

2) Montrer que $(\mathscr{A}; +; \cdot)$ est un espace vectoriel de dimension 2.
**Examen National 1998 (Session Normale).**

**Problème 8.**
On rappelle que $(\mathbb{M}_3(\mathbb{R}); +; \times)$ est un anneau de zéro

$$O = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \text{ et d'unité } I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \text{ et que }$$

$(\mathbb{M}_3(\mathbb{R}); +; \cdot)$ est un espace vectoriel réel.

Pour tout $(a; b; c) \in \mathbb{R}^3$, on pose :

$$M(a; b; c) = \begin{pmatrix} a & b & c \\ b & a+c & b \\ c & b & a \end{pmatrix}$$

$$J = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix} \quad \text{et} \quad K = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}$$

On considère l'ensemble :

$$E = \{M(a; b; c) / (a; b; c) \in \mathbb{R}^3\}$$

1) Montrer que $(E; +; \cdot)$ est un espace vectoriel réel.

2) Montrer que $(I; J; K)$ est une base de $(E'; +; \cdot)$.

3) a) Vérifier que :

$$J^2 = I + K \quad \text{et} \quad K^2 = I \quad \text{et} \quad KJ = JK = J$$

b) En déduire que $E$ est stable dans $(\mathbb{M}_3(\mathbb{R}); \times)$.

c) Montrer que $(E; +; \times)$ est un anneau commutatif.

4) $(E; +; \times)$ es-il un corps ? (On pourra utiliser le résultat de la question 3) a).

5) On pose : $X = \frac{1}{\sqrt{2}} J$

a) Montrer que $X^2 = \frac{1}{2}(I + K)$ puis que : $X^3 = X$

b) En déduire que pour tout $n \in \mathbb{N}^* : X^{2n-1} = X$
**Examen National 2001 (Session Normale).**

**Problème 9.**
On rappelle que $(\mathbb{M}_2(\mathbb{R}); +; \times)$ est un anneau de zéro

$$O = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} \text{ et que } (\mathbb{M}_2(\mathbb{R}); +; \cdot) \text{ est un espace}$$

vectoriel réel.

On considère l'ensemble $E$ définie par :

$$E = \{M(a; b) = \begin{pmatrix} a & -2b \\ b & a \end{pmatrix} / (a; b) \in \mathbb{R}^2\}$$

1) Montrer que $(E; +; \cdot)$ est un espace vectoriel réel.

2) Montrer que $(I; J)$ est une base de l'espace $E$.

3) On pose : $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \quad \text{et} \quad J = \begin{pmatrix} 0 & -2 \\ 1 & 0 \end{pmatrix}$

a) Calculer $J^2$ puis déterminer $J^n$ en fonction de $n \in \mathbb{N}^*$.

b) Déterminer les coordonnées de la matrice $A = I + J + J^2 + ... + J^{2n}$ en fonction de $n$ dans la base $(I; J)$.

4) On considère l'application $\varphi$ définie par :

$$\varphi : E \to \mathbb{C}$$

$$M(a; b) \mapsto a + ib\sqrt{2}$$

a) Montrer que $\varphi$ est un isomorphisme de $(E; \times)$ dans $(\mathbb{C}; \times)$.

b) Montrer que $(E'; +; \times)$ est un corps commutatif.

c) Résoudre dans $E$ l'équation :

$$M^3(a; b) = -\sqrt{2}I + J$$
**Examen National 1999 (Session Normale).**

## Résumé

- **Espace vectoriel réel.** Un ensemble $E$ muni d'une addition interne et d'une multiplication externe par les réels est un espace vectoriel lorsqu'il satisfait les axiomes de compatibilité usuels.
- **Sous-espace vectoriel.** Une partie non vide $F\subset E$ est un sous-espace si $\alpha x+\beta y\in F$ pour tous $x,y\in F$ et $\alpha,\beta\in\mathbb{R}$.
- **Combinaison linéaire.** Un vecteur $x$ est combinaison linéaire de $(u_1,\ldots,u_n)$ s'il existe des scalaires $\lambda_i$ tels que $x=\sum_{i=1}^n\lambda_i u_i$.
- **Famille libre.** La famille $(u_1,\ldots,u_n)$ est libre lorsque $\sum\lambda_i u_i=0$ implique $\lambda_1=\cdots=\lambda_n=0$.
- **Famille génératrice.** Elle engendre $E$ lorsque tout vecteur de $E$ est combinaison linéaire de ses éléments.
- **Base.** Une base est une famille à la fois libre et génératrice ; chaque vecteur y possède des coordonnées uniques.
- **Dimension.** Dans un espace vectoriel de dimension finie, toutes les bases ont le même nombre d'éléments.

## Auto-évaluation

- Vérifier qu'un ensemble muni de deux lois est un espace vectoriel réel.
- Utiliser la caractérisation d'un sous-espace vectoriel.
- Écrire un vecteur comme combinaison linéaire d'une famille.
- Déterminer si une famille est libre, liée ou génératrice.
- Construire une base et calculer les coordonnées d'un vecteur.
- Déterminer la dimension d'un espace ou d'un sous-espace vectoriel.
- Manipuler des espaces de vecteurs, de matrices, de fonctions et de polynômes.