# Chapitre 1 : Nombres complexes

## Histoire

Les nombres complexes tels que nous les connaissons et utilisons aujourd'hui datent du XIXème siècle. Ils étaient cependant connus et utilisés depuis plusieurs siècles sous le nom de nombres imaginaires (terme qui est resté dans l'expression « partie imaginaire ») et sont apparus lorsqu'on a essayé de résoudre les équations du 3ème degré.

La notion de nombre complexe a été introduite par les mathématiciens italiens Jérôme Cardan, Raphaël Bombelli et Tartaglia comme intermédiaire de calcul pour trouver des solutions aux équations polynomiales du troisième degré. Il semblerait que ce soit Héron d'Alexandrie qui ait inventé le nombre impossible. L'aspect géométrique des nombres complexes ne se développe qu'à partir du XIXème siècle avec les travaux de l'abbé Buée et Jean-Robert Argand, puis ensuite Carl Friedrich Gauss et Augustin Louis Cauchy.

> **Jérôme Cardan** (1501 – 1576)
> **Jean-Robert Argand** (1768 – 1822)

*Source : https://fr.wikipedia.org*

## Objectifs

- Maîtriser le calcul sur les nombres complexes.
- Interpréter géométriquement des expressions et des formules complexes.
- Utiliser les nombres complexes dans le calcul trigonométrique (formules de transformation, linéarisation et développement).
- Interpréter les notions géométriques suivantes en utilisant l'outil complexe : la distance entre deux points, alignement et orthogonalité de deux vecteurs, cocyclicité de quatre points…
- Résoudre une équation du second degré à une inconnue.
- Résoudre des équations se ramenant à la résolution d'équation du second degré à une inconnue.
- Interpréter géométriquement l'ensemble des solutions de l'équation $z^n = 1$ et résoudre cette équation.
- Déterminer les expressions complexes des transformations.
- Utiliser les expressions complexes des transformations usuelles pour étudier des situations géométriques.

## Plan du chapitre

- Activités préparatoires
- **Connaissances fondamentales** : L'ensemble des nombres complexes · Opérations sur les nombres complexes · Représentation géométrique d'un nombre complexe · Conjugué d'un nombre complexe · Module d'un nombre complexe · Forme trigonométrique d'un complexe · Racines $n^{\text{èmes}}$ d'un nombre complexe non nul · Équations du second degré dans $\mathbb{C}$ · Transformations usuelles du plan.
- **Techniques et Astuces**
- **Exercices et Problèmes** : Exercices d'application · Exercices de perfectionnement · Problèmes de synthèse.

## Prérequis

- Trigonométrie : mesure principale d'un angle orienté, formules de transformation, valeurs remarquables.
- Angles et coordonnées dans un repère orthonormé direct.
- Équations de cercles et de droites dans le plan.
- Formules du binôme de Newton et calcul algébrique.

## Activité d'introduction

### Rappels

**A) Autour de la trigonométrie :**

1. a) On sait que $\dfrac{2017\pi}{9}$ est une mesure d'un angle orienté ; déterminer sa mesure principale.
   b) Calculer $\cos\left(\dfrac{17\pi}{3}\right)$ et $\sin\left(-\dfrac{213\pi}{4}\right)$.

2. a) Montrer que pour tout $x \in \mathbb{R}$ :
$$\cos(3x) + \sqrt{3}\sin(3x) = 2\cos\left(3x - \frac{\pi}{3}\right) \quad \text{et} \quad \cos(3x) - \sin(2x) = 2\cos\left(\frac{5}{2}x + \frac{\pi}{4}\right)\cos\left(\frac{x}{2} - \frac{\pi}{4}\right)$$
   b) Résoudre dans $\mathbb{R}$ l'équation : $\cos(3x) + \sqrt{3}\sin(3x) = -1$.

3. a) Résoudre dans $]-\pi, \pi]$ l'équation : $\sin(3x) + \sin(2x) + \sin x = 0$.
   b) Résoudre dans $]-2\pi, 3\pi]$ l'équation : $\tan^2 x - (1 + \sqrt{3})\tan x + \sqrt{3} = 0$.

**B) Autour des angles et des coordonnées :**

Le plan $\mathcal{P}$ est rapporté à un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$.

1. Soit $A$ le point du plan $\mathcal{P}$ déterminé par : $OA = 2$ et $\left(\widehat{\vec{\imath}, \overrightarrow{OA}}\right) \equiv \frac{2\pi}{3} \,[2\pi]$.
   a) À l'aide de la règle et du compas, construire le point $A$ en indiquant les étapes suivies.
   b) Déterminer les coordonnées du point $A$.

2. Dans la figure ci-contre, $RST$ est un triangle isocèle en $R$ tel que :
$$RS = RT = 2 \quad \text{et} \quad \left(\widehat{\overrightarrow{RS}, \overrightarrow{RT}}\right) \equiv \frac{\pi}{6} \,[2\pi] \quad \text{et} \quad \left(\widehat{\vec{\imath}, \overrightarrow{RS}}\right) \equiv \theta \,[2\pi]$$
   où $\theta$ est un réel donné.
   Montrer que les coordonnées du point $T$ dans le repère $(R; \vec{\imath}, \vec{\jmath})$ sont :
$$\begin{cases} x_T = \sqrt{3}\cos\theta - \sin\theta \\ y_T = \sqrt{3}\sin\theta + \cos\theta \end{cases}$$

3. On considère le point $E(\sqrt{3}; 1)$.
   a) Calculer la distance $OE$ et déterminer une mesure de l'angle orienté $\left(\widehat{\vec{\imath}, \overrightarrow{OE}}\right)$.
   b) Soit $F$ le point du plan $\mathcal{P}$ tel que : $OF = 2OE$ et $\left(\widehat{\overrightarrow{OE}, \overrightarrow{OF}}\right) \equiv \frac{\pi}{4} \,[2\pi]$.
      - En utilisant les formules de transformation, calculer : $\cos\left(\frac{7\pi}{12}\right)$ et $\sin\left(\frac{7\pi}{12}\right)$.
      - En déduire les coordonnées du point $F$.

4. On note $(\mathcal{U})$ le cercle trigonométrique associé au repère $(O; \vec{\imath}, \vec{\jmath})$.
   Représenter sur le cercle $(\mathcal{U})$ les points $M_k$ dont les abscisses curvilignes sont : $\frac{5\pi}{6} + \frac{k\pi}{2}$ où $k \in \mathbb{Z}$.

**C) Autour des cercles :**

Le plan $\mathcal{P}$ est rapporté à un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$.

1. Dans chacun des cas suivants, déterminer la nature et les éléments caractéristiques de l'ensemble des points $M(x; y)$ vérifiant la condition donnée :
$$1^{\text{er}} \text{ cas} : x^2 + y^2 + 4x - 8y - 5 = 0 \quad ; \quad 2^{\text{ème}} \text{ cas} : (x - 2)(x - 1) + (y + 1)(y - 3) = 0$$
$$3^{\text{ème}} \text{ cas} : \begin{cases} x = 2 + 3 \cos t \\ y = -1 + 3 \sin t \end{cases} \quad (t \in \mathbb{R})$$

2. On considère les points : $A(-4; 5)$ ; $B(-2; 7)$ ; $C(0; 3)$.
   a) Montrer que les points $A$, $B$ et $C$ ne sont pas alignés.
   b) Écrire l'équation du cercle circonscrit au triangle $ABC$.

### Le nombre $i$ et les nombres complexes

**A)** On considère dans $\mathbb{R}$ l'équation suivante : $(E_1) : x^3 - 13x + 12 = 0$.
Déterminer une solution triviale de cette équation puis la résoudre.

**B)** On considère dans $\mathbb{R}$ l'équation suivante : $(E_2) : x^3 - 9x - 11 = 0$.

1. a) Étudier les variations de la fonction numérique $f$ définie par : $f(x) = x^3 - 9x - 11$.
   b) En déduire que l'équation $(E_2)$ admet une solution unique $\alpha$ et que $\alpha \in [3;4]$.

2. Soit $u$ et $v$ deux nombres réels.
   a) Montrer que le nombre $u + v$ est une solution de $(E_2)$ si, et seulement si : $u^3 + v^3 + 3(uv - 3)(u + v) - 11 = 0$.
   b) Montrer que si $\begin{cases} u^3 + v^3 = 11 \\ uv = 3 \end{cases}$, alors $u + v$ est une solution de $(E_2)$.
   c) On suppose que : $u^3 + v^3 = 11$ et $uv = 3$. Vérifier que :
$$(\forall X \in \mathbb{R}), \quad (X - u^3)(X - v^3) = X^2 - 11X + 27$$
   puis déterminer $u^3$ et $v^3$ ; puis en déduire $u$ et $v$.
   d) Déterminer l'unique solution de l'équation $(E_2)$, et vérifier que la solution trouvée correspond bien à la formule donnée par Cardan dans « la position historique ».

**C)** On considère dans $\mathbb{R}$ l'équation suivante : $(E) : x^3 = 15x + 4$.

1. a) Étudier les variations de la fonction numérique $g$ définie par : $g(x) = x^3 - 15x - 4$.
   b) En déduire que l'équation $(E)$ admet trois solutions réelles.

> **Position historique.** En 1545, Jérôme Cardan publie l'*Ars Magna* dans lequel il fournit des formules de résolution d'une équation de la forme $x^3 = px + q$ avec $p$ et $q$ entiers positifs. Il développe des méthodes empruntées à Nicolo Tartaglia et découvre que si $27q^2 - 4p^3 \ge 0$, alors le réel positif :
$$\sqrt{\frac{q}{2} + \sqrt{\left(\frac{q}{2}\right)^2 - \left(\frac{p}{3}\right)^2}} + \sqrt{\frac{q}{2} - \sqrt{\left(\frac{q}{2}\right)^2 - \left(\frac{p}{3}\right)^2}}$$
est une solution de l'équation.

2. a) Montrer que si $\begin{cases} u^3 + v^3 = 4 \\ uv = 5 \end{cases}$, alors $u + v$ est une solution de $(E)$.
   b) Établir que s'il existe deux réels $u^3$ et $v^3$ vérifiant $(u^3 + v^3 = 4$ et $u^3 v^3 = 125)$ alors ils seront des solutions de l'équation : $(F): X^2 - 4X + 125 = 0$.
   c) Justifier que l'équation $(F)$ n'admet pas de solution réelle.

3. a) Montrer que l'équation $(F)$ est équivalente à l'équation : $(F_1):(X - 2)^2 = -121$.
   b) On admet l'existence d'un nombre « imaginaire », qu'on note $i$, vérifiant $i^2 = -1$. En utilisant les mêmes règles de calcul vues dans $\mathbb{R}$, vérifier que l'équation $(F_1)$ admet les nombres $2 + 1i$ et $2 - 1i$ pour solutions.
   c) Calculer $(2 + i)^3$ et $(2 - i)^3$, et déduire de ce qui précède que le nombre 4 est une solution de $(E)$.

4. Vérifier que pour tout $x \in \mathbb{R}$ : $x^3 - 15x - 4 = (x - 4)(x^2 + 4x + 1)$, puis résoudre l'équation $(E)$.

### Opérations sur les nombres complexes

Les éléments de la forme $x + iy$, où $x$ et $y$ sont des réels, sont appelés nombres complexes.

L'écriture $z = x + iy$ où $(x; y) \in \mathbb{R}^2$ s'appelle la forme algébrique du nombre $z$ : $x$ est la partie réelle de $z$ et on écrit $x = \operatorname{Re}(z)$ ; $y$ est la partie imaginaire de $z$ et on écrit $y = \operatorname{Im}(z)$.

Si $z = iy$ avec $y \in \mathbb{R}$, on dit que $z$ est imaginaire pur. L'ensemble des imaginaires purs est noté $i\mathbb{R}$.

**A)** On considère les nombres complexes : $z_1 = 1 + 2i$ et $z_2 = 1 - \frac{3}{2}i$.

1. Écrire sous forme algébrique les nombres complexes suivants :
$$-2(z_2 + i) \quad ; \quad iz_1 \quad ; \quad z_1 + z_2 \quad ; \quad z_1 - z_2 \quad ; \quad z_1 z_2 \quad ; \quad z_1^2 \quad ; \quad -2z_1 + z_2^2 \quad ; \quad (2z_2 - z_1 + 4i)^{2n+1}$$

2. Vérifier que : $\dfrac{1}{z_1} = \dfrac{1}{5} - \dfrac{2}{5}i$ et $\dfrac{1}{z_2} = \dfrac{4}{13} + \dfrac{6}{13}i$.

3. Montrer que si $z$ est un nombre complexe non nul de forme algébrique $z = x + iy$ avec $(x; y) \in \mathbb{R}^2 - \{(0, 0)\}$ alors :
$$\frac{1}{z} = \frac{x}{x^2 + y^2} + \frac{-y}{x^2 + y^2}i$$

**B)** Soit $z = x + iy$ un nombre complexe où $(x; y) \in \mathbb{R}^2$.
Déterminer, en fonction de $x$ et $y$, la partie réelle et la partie imaginaire de chacun des nombres complexes suivants :
$$U = 3z^2 - 2z + 1 \quad ; \quad V = z(iz + 3) \quad ; \quad W = \frac{2z}{iz - 1} \quad (\text{ici } z \neq -i)$$

**C)** Déterminer les réels $\alpha$ et $\beta$ sachant que : $\dfrac{\alpha + i}{2 - i} = 5 + \beta i$.

**D)** On considère les nombres complexes : $z_1 = 7 + 9i$ et $z_2 = (1 + 4i)a + i(b - 7)$ où $(a; b) \in \mathbb{R}^2$.
Déterminer les réels $a$ et $b$ pour que : $z_1 = z_2$.

### Représentation géométrique d'un complexe

Le plan $\mathcal{P}$ est rapporté à un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$.

À tout nombre complexe $z = x + iy$ où $(x; y) \in \mathbb{R}^2$ on associe le point $M(x; y)$ du plan $\mathcal{P}$. Inversement, à chaque point $M(x; y)$ du plan $\mathcal{P}$ on associe le nombre complexe $z = x + iy$.

Le point $M$ s'appelle l'image du nombre complexe $z$. Le nombre $z$ s'appelle l'affixe du point $M$ ; on écrit $M(z)$. On écrit $z_M$ pour désigner l'affixe du point $M$ ou $Aff(M)$.

À chaque vecteur $\vec{u}$ du plan on associe l'unique point $M$ du plan $\mathcal{P}$ tel que $\overrightarrow{OM} = \vec{u}$. Le complexe $z_M = z$ est appelé aussi l'affixe du vecteur $\vec{u}$ et on écrit $\vec{u}(z)$.

On a ainsi réalisé une bijection de l'ensemble des points du plan $\mathcal{P}$ sur l'ensemble des nombres complexes $\mathbb{C}$. Le plan $\mathcal{P}$ est appelé alors le plan complexe.

**A)**

1. Représenter dans le plan $\mathcal{P}$ les images des nombres complexes suivants :
$$z_1 = 0 \quad ; \quad z_2 = 1 \quad ; \quad z_3 = -1 \quad ; \quad z_4 = i \quad ; \quad z_5 = -4i \quad ; \quad z_6 = 1-i \quad ; \quad z_7 = \frac{1+i}{2} \quad ; \quad z_8 = \frac{\sqrt{3}}{2} + \frac{1}{2}i$$

2. Déterminer les affixes des points $A, B, C, D, E, F$ et $H$ indiqués sur la figure ci-contre.

3. On considère les points $K(1; 1)$, $L(2; 2)$ et $N\left(\frac{1}{2}; 1\right)$. Déterminer les affixes des vecteurs suivants :
$$\overrightarrow{OK} \quad ; \quad \overrightarrow{OL} \quad ; \quad \overrightarrow{ON} \quad ; \quad \overrightarrow{KN} \quad ; \quad \overrightarrow{LN} \quad ; \quad 2\overrightarrow{KL} - \overrightarrow{NK}$$

**B)** Soit $M$ et $M'$ deux points du plan complexe.

1. Montrer que l'affixe du vecteur $\vec{v} = \overrightarrow{MM'}$ est : $z_{\vec{v}} = z_{M'} - z_M$.

2. Montrer que pour tout $(\lambda; \mu) \in \mathbb{R}^2$ et pour tous vecteurs $\vec{v}$ et $\vec{v}'$ du plan, on a :
$$Aff(\lambda\vec{v} + \mu\vec{v}') = \lambda Aff(\vec{v}) + \mu Aff(\vec{v}')$$

3. Soit $G$ le barycentre du système pondéré $\{(A, \alpha), (B, \beta)\}$ avec $(\alpha; \beta) \in \mathbb{R}^2$ et $\alpha + \beta \neq 0$. Montrer que l'affixe du point $G$ est : $z_G = \dfrac{\alpha z_A + \beta z_B}{\alpha + \beta}$.

4. Soit $A(z_A)$, $B(z_B)$ et $C(z_C)$ trois points deux à deux distincts du plan $\mathcal{P}$. Montrer que :
$$\frac{z_C - z_A}{z_B - z_A} \in \mathbb{R} \Leftrightarrow (\text{les points } A, B \text{ et } C \text{ sont alignés})$$

### Nombres complexes et géométrie

Dans le plan complexe rapporté à un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$, on considère les points $A, B, C$ et $E$ d'affixes respectives : $z_A = -2 + 2i$, $z_B = 3 + 4i$, $z_C = 4 + 7i$, $z_E = 1 + \frac{9}{2}i$.

1. Déterminer l'affixe du point $D$ pour lequel $ABCD$ est un parallélogramme.
2. Déterminer les affixes des vecteurs $\overrightarrow{AC}$ et $\overrightarrow{AE}$ ; en déduire que les points $A$, $E$ et $C$ sont alignés.
3. Déterminer deux réels $\alpha$ et $\beta$ tels que : $\alpha + \beta = 1$ et $E$ le barycentre du système $\{(A; \alpha), (C; \beta)\}$.
4. Soit $\mathfrak{D}$ l'ensemble des points $M(z)$ tels que : $(\exists \lambda \in \mathbb{R})\; z = 6\lambda - 2 + i(5\lambda + 2)$. Montrer que $\mathfrak{D}$ est la droite $(AC)$.

### Conjugué d'un nombre complexe

**A)** Dans le plan complexe rapporté à un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$, on considère les points suivants :
$$A(1+i) \quad ; \quad B(-2i) \quad ; \quad C(-3+2i) \quad ; \quad D(-2) \quad ; \quad E(4+2i)$$

1. Représenter les points ci-dessus.
2. Soit $A'$, $B'$, $C'$ et $D'$ les symétriques respectifs des points $A$, $B$, $C$ et $D$ par rapport à l'axe des abscisses.
   a) Déterminer les affixes des points $A'$, $B'$, $C'$ et $D'$.
   b) Comparer $\operatorname{Re}(z_A)$ et $\operatorname{Re}(z_{A'})$ puis $\operatorname{Re}(z_B)$ et $\operatorname{Re}(z_{B'})$ puis $\operatorname{Re}(z_C)$ et $\operatorname{Re}(z_{C'})$.
   c) Comparer $\operatorname{Im}(z_A)$ et $\operatorname{Im}(z_{A'})$ puis $\operatorname{Im}(z_B)$ et $\operatorname{Im}(z_{B'})$ puis $\operatorname{Im}(z_C)$ et $\operatorname{Im}(z_{C'})$.

Soit $x$ et $y$ deux nombres réels et $z$ le nombre complexe défini par $z = x + iy$. Le nombre complexe $x - iy$ est appelé le conjugué de $z$ et est noté $\overline{z}$.

3. Quelle est la nature de la transformation :
$$\varphi : \mathscr{P} \to \mathscr{P}, \qquad M(z) \mapsto M'(\overline{z})$$

4. Déterminer le conjugué de chacun des complexes suivants :
$$z_1 = 5 - i \quad ; \quad z_2 = -3 \quad ; \quad z_3 = -3i \quad ; \quad z_4 = \frac{1}{2} + i(1+i) \quad ; \quad z_5 = (1+i) - i(3-i)$$

**B)** Soit $z$ et $z'$ deux nombres complexes.

1. a) Montrer que : $\overline{\overline{z}} = z$ et $z + \overline{z} = 2\operatorname{Re}(z)$ et $z - \overline{z} = 2i\operatorname{Im}(z)$.
   b) Montrer que : $z\in \mathbb{R} \Leftrightarrow \overline{z} = z$ et $z\in i\mathbb{R} \Leftrightarrow \overline{z} = -z$.

2. Dans le plan complexe rapporté à un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$, déterminer les ensembles suivants :
$$\mathscr{D}_1 = \{M(z) \;/\; (z - 2i) \in \mathbb{R}\} \quad \text{et} \quad \mathscr{D}_2 = \{M(z) \;/\; (z - 2i) \in i\mathbb{R}\}$$

3. a) Montrer que : $\overline{z + z'} = \overline{z} + \overline{z'}$ et $\overline{z \times z'} = \overline{z} \times \overline{z'}$.
   b) En déduire que pour tout $n \in \mathbb{N}^*$ : $\overline{z^n} = (\overline{z})^n$.
   c) On suppose que $z \neq 0$. Déterminer $\frac{1}{z}$ en fonction de $\overline{z}$ et $z \cdot \overline{z}$.
   d) Montrer que si $z \neq 0$ alors : $\overline{\left(\frac{1}{z}\right)} = \frac{1}{\overline{z}}$ et $\overline{\left(\frac{z'}{z}\right)} = \frac{\overline{z'}}{\overline{z}}$.
   e) Déterminer de deux façons différentes les conjugués des nombres complexes suivants :
$$Z_1 = (2 + 5i)(4 - 3i) \quad ; \quad Z_2 = \frac{1 - i}{3 + i} \quad ; \quad Z_3 = (5 - 2i)^2 \quad ; \quad Z_4 = \frac{(2 + 5i)i}{(4 - i)^2}$$

4. Résoudre dans $\mathbb{C}$ l'équation : $3\overline{z} + 2z = 5 - i$.
5. Déterminer l'ensemble des points $M(z)$ du plan pour lesquels $z^2 + 2z + \overline{z}$ est réel.
6. Déterminer l'ensemble des points $M(z)$ du plan pour lesquels $3\overline{z} + i \neq 0$ et $\dfrac{1 + i\overline{z}}{3\overline{z} + i} \in \mathbb{R}$.

### Module d'un nombre complexe

**A)** Le plan complexe $\mathcal{P}$ est rapporté à un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$.

1. Soit $z = x + iy$ un nombre complexe avec $(x; y) \in \mathbb{R}^2$ et $M$ l'image du nombre $z$ dans le plan $\mathcal{P}$.
   a) Calculer la distance $OM$ en fonction de $x$ et $y$ puis vérifier que : $OM = \sqrt{z \cdot \overline{z}}$.
      Le nombre positif $\sqrt{z \cdot \overline{z}}$ est appelé le module du nombre complexe $z$, et est noté $|z|$. On a donc : $|z| = \sqrt{z \cdot \overline{z}} = \sqrt{x^2 + y^2}$.
   b) Représenter les points $M(z)$ et $N(\overline{z})$ dans le plan $\mathcal{P}$ puis en déduire que : $|z| = |\overline{z}|$.
   c) Calculer : $|\sqrt{3} + i|$ ; $|\sqrt{2} - i\sqrt{2}|$ ; $|-5|$ ; $|-i|$ ; $|\pi - 2|$.

2. On considère les deux points $A(z_A)$ et $B(z_B)$ et le vecteur $\vec{u}$ d'affixe $z$.
   a) Montrer que : $\|\vec{u}\| = |z|$ et $AB = |z_B - z_A|$.
   b) On suppose dans cette question : $A(-1 + i)$ et $B(1 + 3i)$. Montrer que le triangle $OAB$ est rectangle en $A$.

**B)** Le plan complexe $\mathcal{P}$ est rapporté à un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$.

1. Soit $z$ et $z'$ deux nombres complexes et $M$ et $M'$ leurs images respectives dans le plan $\mathcal{P}$.
   a) Montrer que : $(|z| = 0 \Leftrightarrow z = 0)$ et $|\operatorname{Re}(z)| \leq |z|$ et $|\operatorname{Im}(z)| \leq |z|$.
   b) Construire le point $S(z + z')$ dans le plan $\mathcal{P}$ puis en déduire que : $|z + z'| \leq |z| + |z'|$ (cette inégalité est appelée « inégalité triangulaire »).
   c) Montrer que $|z \cdot z'| = |z| \times |z'|$ puis en déduire par récurrence que pour tout $n \in \mathbb{N}^*$ : $|z^n| = |z|^n$.
   d) En déduire que si $z \neq 0$ alors : $\left|\frac{1}{z}\right| = \frac{1}{|z|}$ et $\left|\frac{z'}{z}\right| = \frac{|z'|}{|z|}$.
   e) Calculer le module de chacun des nombres complexes suivants :
$$z_1 = (5 + i\sqrt{3})(1 - i\sqrt{6}) \quad ; \quad z_2 = \frac{1 + i\sqrt{3}}{\sqrt{3} - i} \quad ; \quad z_3 = \frac{(1 - 2i)^5}{1 + i} \quad ; \quad z_4 = \left(\frac{\sqrt{3}}{2} - \frac{1}{2}i\right)^{2018}$$
$$z_5 = \frac{2}{1 - 3i} + \frac{3}{1 + i} \quad ; \quad z_6 = (\sqrt{5} - 2i)\left(\sin\frac{\pi}{7} - i\cos\frac{\pi}{7}\right) \quad ; \quad z_7 = 1 + i\tan\theta \quad \left(\text{ici } \theta \in \left]-\frac{\pi}{2}, \frac{\pi}{2}\right[\right)$$

2. Dans le plan complexe, déterminer les ensembles suivants :
$$\mathcal{C} = \{M(z) \;/\; |z - 3 + 4i| = 2\} \quad ; \quad \mathcal{D} = \{M(z) \;/\; |z - 5 + 2i| = |z + 1|\} \quad ; \quad \mathcal{E} = \left\{M(z) \;/\; \left|\frac{z - 1}{z + 1 + 2i}\right| = 3\right\}$$

### Argument d'un nombre complexe

1. Soit $\mathcal{C}_1$ le cercle de centre $O$ et de rayon 1. Soit $M(x; y)$ un point du cercle $\mathcal{C}_1$ et $\theta$ une mesure de l'angle orienté $\left(\widehat{\vec{\imath}, \overrightarrow{OM}}\right)$. Montrer que l'affixe $z_M$ du point $M$ est déterminée par la relation :
$$z_M = \cos\theta + i\sin\theta$$

2. Soit $r$ un réel strictement positif, et soit $\mathcal{C}$ le cercle de centre $O$ et de rayon $r$. On considère le point $M(z)$ de $\mathcal{C}$ et on pose : $\left(\widehat{\vec{\imath}, \overrightarrow{OM}}\right) \equiv \theta \,[2\pi]$. Montrer que : $z = r(\cos\theta + i\sin\theta)$.

3. Soit $r \in \mathbb{R}^*$, $\theta \in \mathbb{R}$ et $z = r(\cos\theta + i\sin\theta)$. Montrer que le point $M(z)$ appartient au cercle de centre $O$ et de rayon $r$.

Toute mesure $\theta$ (en rad) de l'angle orienté $\left(\widehat{\vec{\imath}, \overrightarrow{OM}}\right)$ est appelée un argument du nombre complexe $z$, et on le note $\arg z$, et on écrit : $\arg z \equiv \theta \,[2\pi]$.

### Forme trigonométrique d'un complexe — notation exponentielle

Soit $z$ un nombre complexe non nul. L'écriture $z = r(\cos\theta + i\sin\theta)$ où $r = |z|$ et $\theta \equiv \arg z \,[2\pi]$ est appelée forme trigonométrique du nombre complexe $z$. On peut aussi écrire : $z = [r; \theta]$.

On pose : $e^{i\theta} = \cos\theta + i\sin\theta$. L'écriture $z = |z|e^{i\theta}$ s'appelle la notation exponentielle du nombre $z$.

**A) Préliminaire.**

1. Déterminer : $e^{i0}$, $e^{i\pi}$, $e^{i\frac{\pi}{2}}$, $e^{i\frac{\pi}{2}}$, $e^{i\frac{4\pi}{3}}$.
2. Déterminer la forme trigonométrique du nombre $-\sqrt{2} + i\sqrt{6}$.
3. Soit $t$ le nombre complexe de module $\sqrt{2}$ et d'argument $\frac{25\pi}{4}$. Quelle est la forme algébrique de $t$ ?
4. Soit $\theta \in \mathbb{R}$ et $k \in \mathbb{R}_+^*$. Vérifier que : $|e^{i\theta}| = 1$ et $\arg(ke^{i\theta}) \equiv \theta \,[2\pi]$.
5. Dans le plan complexe, on considère le cercle $\mathcal{C}$ de centre $\Omega(\omega)$ et de rayon $r > 0$ ; et soit $M(z)$ un point quelconque du plan complexe. Montrer que : $M \in \mathcal{C} \Leftrightarrow \left[(\exists \theta \in \mathbb{R}),\; z = \omega + re^{i\theta}\right]$.

**B)** Dans le plan complexe $\mathcal{P}$ rapporté à un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$, on considère les points $A$, $B$ et $C$ d'affixes respectives $z_A$, $z_B$ et $z_C$.

1. a) En utilisant les deux points $E$ et $F$ tels que : $\overrightarrow{OE} = \overrightarrow{AB}$ et $\overrightarrow{OF} = \overrightarrow{AC}$, montrer que : $\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right) \equiv \arg\left(\dfrac{z_C - z_A}{z_B - z_A}\right) \,[2\pi]$.
   b) Déterminer une mesure de l'angle $\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right)$ dans le cas où $A(1)$, $B(2+i)$ et $C(2+i\sqrt{3})$.

2. a) On suppose, et seulement dans cette question, que : $A\left(\frac{7}{5} + \frac{1}{5}i\right)$, $B(-1+i)$ et $C(1-i)$. Montrer que le triangle $ABC$ est rectangle en $A$.
   b) Dans le cas général, montrer l'équivalence suivante : $(ABC \text{ est rectangle en } A) \Leftrightarrow \dfrac{z_C - z_A}{z_B - z_A} \in i\mathbb{R}$.

3. Montrer l'équivalence suivante : $(ABC \text{ est équilatéral}) \Leftrightarrow \dfrac{z_C - z_A}{z_B - z_A} \in \left\{e^{i\frac{\pi}{3}}, e^{-i\frac{\pi}{3}}\right\}$.

4. Soit $A$, $B$, $C$ et $D$ quatre points deux à deux distincts et non alignés. Montrer l'équivalence suivante :
$$(A, B, C \text{ et } D \text{ sont cocycliques}) \Leftrightarrow \frac{z_C - z_A}{z_B - z_A} \div \frac{z_C - z_D}{z_B - z_D} \in \mathbb{R}$$
   On rappelle que les points $A$, $B$, $C$ et $D$ sont cocycliques (c'est-à-dire qu'ils appartiennent au même cercle) si, et seulement si : $\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right) \equiv \left(\widehat{\overrightarrow{DB}, \overrightarrow{DC}}\right) \,[\pi]$.

### Formules de Moivre et d'Euler

**A)** Soit $\theta$ et $\theta'$ deux réels et $n$ un entier naturel non nul.

1. Montrer que : $e^{i\theta} \cdot e^{i\theta'} = e^{i(\theta + \theta')}$ et $e^{i\theta} \cdot e^{-i\theta'} = e^{i(\theta - \theta')}$ et $\overline{e^{i\theta}} = e^{-i\theta}$.
2. Montrer que : $\left(e^{i\theta}\right)^n = e^{in\theta}$ puis en déduire que : $\left(\cos\theta + i\sin\theta\right)^n = \cos(n\theta) + i\sin(n\theta)$.

> La formule $(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$ est appelée « **Formule de Moivre** ».

3. Montrer que : $\cos\theta = \dfrac{e^{i\theta} + e^{-i\theta}}{2}$ et $\sin\theta = \dfrac{e^{i\theta} - e^{-i\theta}}{2i}$. Ces deux formules sont appelées « **Formules d'Euler** ».

**B)** Soit $\theta$ un nombre réel.

1. En utilisant la formule de Moivre, montrer que :
$$\cos(3\theta) = 4\cos^3\theta - 3\cos\theta \quad \text{et} \quad \cos(5\theta) = 16\cos^5\theta - 20\cos^3\theta + 5\cos\theta$$

2. Calculer $\sin(3\theta)$ et $\sin(5\theta)$ en fonction de $\sin\theta$.

3. Montrer que les nombres $\cos\left(\frac{\pi}{9}\right)$, $\cos\left(\frac{5\pi}{9}\right)$ et $\cos\left(\frac{11\pi}{9}\right)$ sont solutions de l'équation : $8x^3 - 6x - 1 = 0$.

4. En utilisant les formules d'Euler, montrer que :
$$\cos^4\theta = \frac{1}{8}(\cos(4\theta) + 4\cos(2\theta) + 3) \quad \text{et} \quad \sin^3\theta = \frac{1}{4}(3\sin\theta - \sin(3\theta))$$
   On dit qu'on a linéarisé les expressions $\cos^4\theta$ et $\sin^3\theta$.

5. Écrire $\cos\theta \cdot \sin^4\theta$ et $\cos^3(2\theta)$ sous la forme d'une somme de termes de la forme $\lambda\cos(px)$ et $\mu\sin(qx)$ avec $\lambda$ et $\mu$ des réels et $(p, q) \in \mathbb{N}^2$.

### Racine carrée d'un nombre complexe

1. Vérifier que pour tout $z \in \mathbb{C}$ : $z^2 + 1 = (z + i)(z - i)$ puis résoudre dans $\mathbb{C}$ l'équation : $z^2 = -1$.
   Les nombres $i$ et $-i$ sont appelés les racines carrées du nombre complexe $-1$. En général :
   > On appelle racine carrée d'un nombre complexe $u$, tout complexe $z$ tel que $z^2 = u$.

2. Déterminer les racines carrées des nombres suivants : $-49$ ; $2i$ ; $-2i$ (remarquer que $(1 + i)^2 = 2i$).

3. On pose $u = -24 - 70i$, et soit $z = x + iy$ avec $(x,y)\in \mathbb{R}^2$.
   a) Montrer que :
$$z^2 = u \Leftrightarrow \begin{cases} x^2 + y^2 = 74 \\ x^2 - y^2 = -24 \\ xy = -35 \end{cases}$$
   b) Montrer que le nombre $-24 - 70i$ admet deux racines carrées que l'on déterminera.

### Racines cubiques d'un nombre complexe

On considère le nombre complexe : $u = 2 - 2i$.

1. Écrire le nombre $u$ sous forme trigonométrique.
2. On considère dans $\mathbb{C}$ l'équation suivante : $(E) : z^3 = 2 - 2i$.
   a) On pose $z = re^{i\theta}$ où $r \in \mathbb{R}^*$ et $\theta \in \mathbb{R}$. Montrer que :
$$z^3 = 2 - 2i \Leftrightarrow \left( r^3 = 2\sqrt{2} \text{ et } \arg(z^3) \equiv -\frac{\pi}{4} + 2k\pi,\; k \in \mathbb{Z} \right)$$
   b) En déduire, sous forme trigonométrique, les solutions de l'équation $(E)$.

3. Dans le plan rapporté à un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$, on considère les points $M_0$, $M_1$ et $M_2$ images respectives des solutions $z_0$, $z_1$ et $z_2$ de l'équation $(E)$ avec : $\operatorname{Re}(z_2) < \operatorname{Re}(z_1) < \operatorname{Re}(z_0)$.
   a) Représenter les points $M_0$, $M_1$ et $M_2$ dans le repère $(O; \vec{\imath}, \vec{\jmath})$.
   b) Montrer que : $\left(\widehat{\overrightarrow{OM_0}, \overrightarrow{OM_1}}\right) \equiv \frac{2\pi}{3} \,[2\pi]$, $\left(\widehat{\overrightarrow{OM_1}, \overrightarrow{OM_2}}\right) \equiv \frac{2\pi}{3} \,[2\pi]$ et $\left(\widehat{\overrightarrow{OM_2}, \overrightarrow{OM_0}}\right) \equiv \frac{2\pi}{3} \,[2\pi]$.

### La représentation complexe d'une rotation

Le plan complexe $\mathscr{P}$ est rapporté à un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$.

Si $F$ est une transformation de $\mathscr{P}$ vers $\mathscr{P}$ transformant le point $M$ d'affixe $z$ en le point $M'$ d'affixe $z' = f(z)$, alors $z' = f(z)$ est l'écriture complexe (ou la représentation complexe) de l'application $F$.

1. Soit $\theta$ un nombre réel tel que : $0 < \theta < \pi$. On considère trois points $A$, $B$ et $C$ d'affixes respectives $z_A$, $z_B$ et $z_C$ tels que :
$$\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right) \equiv \theta \,[2\pi] \quad \text{et} \quad AB = AC$$
   Montrer que : $z_C - z_A = e^{i\theta}(z_B - z_A)$.

2. Déterminer l'écriture complexe de la rotation $R_1$ de centre $\Omega(1 - 2i)$ et d'angle $\frac{\pi}{2}$.

3. Soit $R$ l'application de $\mathcal{P}$ vers $\mathcal{P}$ qui, à chaque point $M(z)$, associe le point $M'(z')$ tel que :
$$z' = e^{i\frac{\pi}{3}}z + (1 + 2i)e^{-i\frac{\pi}{3}}$$
   a) Montrer qu'il existe un unique point $\Omega(\omega)$ tel que $R(\Omega) = \Omega$.
   b) Vérifier que : $z' - \omega = e^{i\frac{\pi}{3}}(z - \omega)$.
   c) Déterminer la nature de la transformation $R$ ainsi que ses éléments caractéristiques.

   > On dit que le point $\Omega$ est invariant par la transformation $F$ si $F(\Omega) = \Omega$.

## Cours

### 1. L'ensemble des nombres complexes

#### 1.1. Notion de nombre complexe

> **Théorème 1.**
> Il existe un ensemble noté $\mathbb{C}$ contenant $\mathbb{R}$ :
> - muni d'une addition notée $+$ et d'une multiplication notée $\times$ (ou le plus souvent implicitement, comme dans $\mathbb{R}$) possédant les mêmes propriétés que dans $\mathbb{R}$ ;
> - possédant un élément noté $i$ dont le carré vaut $-1$ : $i^2 = -1$ ;
> - où tout élément $z$, appelé nombre complexe ou complexe, s'écrit de manière unique sous la forme $z = x + iy$, avec $x$ et $y$ réels.

> **Remarques.**
> - On a : $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$.
> - L'addition et la multiplication des nombres réels se prolongent aux nombres complexes et les règles de calcul restent les mêmes.
> - Contrairement à $\mathbb{R}$, l'ensemble $\mathbb{C}$ n'est usuellement muni d'aucune relation d'ordre et nous ne pourrons donc pas dire qu'un nombre complexe est inférieur à un autre ni qu'il est positif.
> - Les nombres complexes $x + iy$ et $x + yi$ où $(x; y) \in \mathbb{R}^2$ représentent le même nombre complexe.
>
> On a :
$$\mathbb{C} = \{x + iy \;/\; (x; y) \in \mathbb{R}^2\}$$

#### 1.2. Forme algébrique d'un nombre complexe

> **Définition 1.**
> Étant donné $z \in \mathbb{C}$, il existe un unique couple $(x; y) \in \mathbb{R}^2$ tel que $z = x + iy$.
> - L'écriture $x + iy$ s'appelle la forme algébrique du nombre complexe $z$.
> - Le nombre $x$ est la partie réelle de $z$, notée $\operatorname{Re}(z)$.
> - Le nombre $y$ est la partie imaginaire de $z$, notée $\operatorname{Im}(z)$.
> - Un nombre complexe est réel lorsque sa partie imaginaire est nulle : $z \in \mathbb{R} \Leftrightarrow \operatorname{Im}(z) = 0$.
> - Un nombre complexe est dit imaginaire pur si sa partie réelle est nulle : $z \in i\mathbb{R} \Leftrightarrow \operatorname{Re}(z) = 0$.

> **Exemple.**
> On considère le nombre complexe : $z = 5 + 2i(1 - 3i)$.
> On a : $z = 5 + 2i - 6i^2 = 5 + 2i + 6 = 11 + 2i$. On a alors : $\operatorname{Re}(z) = 11$ et $\operatorname{Im}(z) = 2$.

#### 1.3. Égalité de deux nombres complexes

> **Proposition 1.**
> Deux nombres complexes sont égaux si et seulement s'ils ont mêmes parties réelles et mêmes parties imaginaires. En d'autres termes :
$$\left(\forall(z; z') \in \mathbb{C}^2\right) \quad z = z' \Leftrightarrow \left(\operatorname{Re}(z) = \operatorname{Re}(z') \text{ et } \operatorname{Im}(z) = \operatorname{Im}(z')\right)$$

> **Remarques.**
> - Le résultat de la proposition 1 est une conséquence immédiate de l'unicité de la forme algébrique d'un nombre complexe. Pour tout nombre complexe $z$ :
$$z = 0 \Leftrightarrow (\operatorname{Re}(z) = 0 \text{ et } \operatorname{Im}(z) = 0) \quad \text{et} \quad z \neq 0 \Leftrightarrow (\operatorname{Re}(z) \neq 0 \text{ ou } \operatorname{Im}(z) \neq 0)$$

> **Exemple.**
> On considère deux nombres complexes : $z_1 = x - 1 + (y + 2)i$ et $z_2 = -2xi + y$ où $(x; y) \in \mathbb{R}^2$. Déterminons les réels $x$ et $y$ pour que $z_1 = z_2$ :
> On a : $z_1 = z_2 \Leftrightarrow (x - 1 = y \text{ et } y + 2 = -2x) \Leftrightarrow \begin{cases} x - y = 1 \\ 2x + y = -2 \end{cases} \Leftrightarrow \left(x = -\frac{1}{3} \text{ et } y = -\frac{4}{3}\right)$.

### 2. Opérations sur les nombres complexes

#### 2.1. Addition et multiplication dans $\mathbb{C}$

> **Proposition 2.**
> Soit $z$ et $z'$ deux nombres complexes tels que : $z = x + iy$ et $z' = x' + iy'$ avec $(x; x'; y; y') \in \mathbb{R}^4$. On a :
$$z + z' = x + x' + i(y + y') \quad \text{et} \quad z \times z' = xx' - yy' + i(xy' + x'y)$$
> Pour tout $\lambda \in \mathbb{R}$ : $\lambda z = \lambda x + i(\lambda y)$.

> **Remarques.**
> - Pour tout $(z; z') \in \mathbb{C}^2$ et pour tout $\lambda \in \mathbb{R}$ on a :
$$\begin{cases} \operatorname{Re}(z + z') = \operatorname{Re}(z) + \operatorname{Re}(z') \\ \operatorname{Im}(z + z') = \operatorname{Im}(z) + \operatorname{Im}(z') \end{cases} \quad \text{et} \quad \begin{cases} \operatorname{Re}(\lambda z) = \lambda \operatorname{Re}(z) \\ \operatorname{Im}(\lambda z) = \lambda \operatorname{Im}(z) \end{cases}$$
> - Si $k \in \mathbb{N}$ alors $i^{2k} = (i^2)^k = (-1)^k$. Il en résulte donc : $i^{4k} = 1$ ; $i^{4k+1} = i$ ; $i^{4k+2} = -1$ ; $i^{4k+3} = -i$.

#### 2.2. Opposé d'un complexe — différence de deux complexes

> **Proposition 3.**
> Tout nombre complexe $z = x + iy$, où $x$ et $y$ sont des réels, possède un opposé dans $\mathbb{C}$, noté $-z$, qui est le nombre complexe $-x - iy$, et on écrit $-z = -x - iy$. Donc :
$$\operatorname{Re}(-z) = -\operatorname{Re}(z) \quad \text{et} \quad \operatorname{Im}(-z) = -\operatorname{Im}(z)$$

> **Définition 2.**
> La différence de deux nombres complexes $z$ et $z'$ est le nombre : $z - z' = z + (-z')$.

> **Remarques.**
> - Si $x$, $x'$, $y$ et $y'$ sont des nombres réels alors : $(x + iy) - (x' + iy') = x - x' + i(y - y')$.
> - Les identités remarquables vues dans $\mathbb{R}$ restent aussi valables dans $\mathbb{C}$. Ainsi, pour tous nombres complexes $z_1$ et $z_2$ on a :
$$(z_1 + z_2)^2 = z_1^2 + 2z_1 z_2 + z_2^2 \quad ; \quad (z_1 - z_2)^2 = z_1^2 - 2z_1 z_2 + z_2^2 \quad ; \quad (z_1 + z_2)(z_1 - z_2) = z_1^2 - z_2^2$$
>   En particulier, on a les égalités suivantes, valables pour tout $(a; b) \in \mathbb{R}^2$ :
$$(a + ib)^2 = a^2 - b^2 + 2abi \quad ; \quad (a - ib)^2 = a^2 - b^2 - 2abi \quad ; \quad (a + ib)(a - ib) = a^2 + b^2$$
>   On a aussi :
$$(z_1 + z_2)^3 = z_1^3 + 3z_1^2 z_2 + 3z_1 z_2^2 + z_2^3 \quad ; \quad (z_1 - z_2)^3 = z_1^3 - 3z_1^2 z_2 + 3z_1 z_2^2 - z_2^3$$
$$z_1^3 - z_2^3 = (z_1 - z_2)(z_1^2 + z_1 z_2 + z_2^2) \quad ; \quad z_1^3 + z_2^3 = (z_1 + z_2)(z_1^2 - z_1 z_2 + z_2^2)$$
>   Et de façon générale, on a pour tout $(z_1; z_2) \in \mathbb{C}^2$ et pour tout $n \in \mathbb{N}^*$ :
$$(z_1 + z_2)^n = \sum_{p=0}^n C_n^p z_1^p z_2^{n-p} = \sum_{q=0}^n C_n^q z_2^q z_1^{n-q} \quad (\text{Formule du binôme de Newton})$$
$$z_1^n - z_2^n = (z_1 - z_2)(z_1^{n-1} + z_1^{n-2}z_2 + \dots + z_1 z_2^{n-2} + z_2^{n-1}) = (z_1 - z_2)\left(\sum_{k=0}^{n-1} z_1^{n-k-1} z_2^k\right)$$
> - Un produit de nombres complexes est nul si, et seulement si, au moins un de ses facteurs est nul. En particulier :
$$(\forall(z; z') \in \mathbb{C}^2) \quad [z \times z' = 0 \Leftrightarrow (z = 0 \text{ ou } z' = 0)]$$

> **Exemples.**
> 1) Pour tout $z \in \mathbb{C}$, on pose : $z_1 = 5 - iz$ et $z_2 = z + i(z^2 + 1)$. Écrivons les nombres $z_1$ et $z_2$ sous leur forme algébrique dans chacun des cas suivants :
>   a) $z = i$ ;
>   b) $z = 2 + 3i$ ;
>   c) $z = (1 - 3i)^2$.
>
>   a) On a : $z_1 = 5 - i^2 = 5 - (-1) = 6$ et $z_2 = i + i(i^2 + 1) = i + i(-1 + 1) = i$.
>   b) On a : $z_1 = 5 - i(2 + 3i) = 5 - 2i - 3i^2 = 5 - 2i + 3 = 8 - 2i$, et $z_2 = 2 + 3i + i((2 + 3i)^2 + 1) = 2 + 3i + i(-4 + 12i) = -10 - i$.
>   c) On a : $z_1 = 5 - i(1 - 3i)^2 = 5 - i(-8 - 6i) = 5 + 8i - 6 = -1 + 8i$, et $z_2 = (1 - 3i)^2 + i((1 - 3i)^4 + 1) = -8 - 6i + i((-8 - 6i)^2 + 1) = -8 - 6i + i(29 + 96i) = -104 + 23i$.
>
> 2) On considère le nombre complexe : $t = 1 + \sqrt{3} + i(1 - \sqrt{3})$. Calculons puis mettons sous forme algébrique les nombres $t^2$, $t^4$, $t^6$ et $t^{12n}$ pour tout $n \in \mathbb{N}^*$ :
>   On a : $t^2 = (1 + \sqrt{3})^2 - (1 - \sqrt{3})^2 + 2i(1 + \sqrt{3})(1 - \sqrt{3}) = 4(\sqrt{3} - i) = 4\sqrt{3} - 4i$.
>   On a : $t^4 = [4(\sqrt{3} - i)]^2 = 16(\sqrt{3} - i)^2 = 16(2 - 2i\sqrt{3}) = 32 - 32\sqrt{3}i$.
>   On a : $t^6 = t^2 \times t^4 = 4(\sqrt{3} - i) \times 32(1 - i\sqrt{3}) = 128(\sqrt{3} - i)(1 - i\sqrt{3}) = 128(-4i) = -512i$.
>   On a : $t^{12} = (t^6)^2 = (-512i)^2 = (-2^9 i)^2 = -2^{18}$.
>   On a enfin, pour tout $n \in \mathbb{N}^*$ : $t^{12n} = (t^{12})^n = (-2^{18})^n$. (Attention : ne pas écrire $t^{12n} = (-2)^{18n}$.)

#### 2.3. Inverse d'un nombre complexe non nul — quotient de deux nombres complexes

> **Proposition 4.**
> Soit $z = x + iy$ un nombre complexe non nul tel que $(x; y) \in \mathbb{R}^2 - \{(0, 0)\}$. L'inverse du nombre $z$ est le nombre complexe noté $\frac{1}{z}$ ou $z^{-1}$ tel que :
$$\frac{1}{z} = \frac{1}{x + iy} = \frac{1}{x^2 + y^2}(x - iy) = \frac{x}{x^2 + y^2} - i\frac{y}{x^2 + y^2}$$

> **Preuve.**
> Soit $z = x + iy$ un nombre complexe non nul tel que $(x; y) \in \mathbb{R}^2 - \{(0, 0)\}$. On a tout d'abord $x^2 + y^2 \neq 0$ ; ensuite de l'égalité $(x + iy)(x - iy) = x^2 + y^2$ on tire :
$$\frac{1}{x^2 + y^2}(x + iy)(x - iy) = 1$$
> Il en résulte alors :
$$\frac{1}{x + iy} = \frac{1}{x^2 + y^2}(x - iy) = \frac{x}{x^2 + y^2} - i\frac{y}{x^2 + y^2}$$

> **Exemple.**
> Déterminons l'inverse du nombre complexe $z = (1 - 2i)(3 + 2i)$ :
> On a $z = 7 - 4i$, donc : $\dfrac{1}{z} = \dfrac{1}{7 - 4i} = \dfrac{7 + 4i}{7^2 + (-4)^2} = \dfrac{7}{65} + \dfrac{4}{65}i$.

> **Applications.**
> 1. Écrire sous forme algébrique le nombre complexe suivant : $Z = \left(2 + i\sqrt{3}\right)\left(3 - 4i\right) + \left(1 + \frac{1}{2}i\right)^2$.
> 2. Déterminer la forme algébrique du nombre complexe $u = z^2 - 4z \cdot z' + 3$ sachant que : $z = 1 - 3i$ et $z' = \frac{3}{2} + 5i$.
> 3. Soit : $j = -\frac{1}{2} + \frac{\sqrt{3}}{2}i$.
>    a) Calculer $j^2$ et $j^3$.
>    b) Soit $k \in \mathbb{N}$. Calculer $j^k$ selon les valeurs de $k$.
>    c) Vérifier que : $1 + j + j^2 = 0$.
>    d) Calculer la somme : $1 + j + j^2 + \dots + j^{2018}$.
> 4. Pour tout $z \in \mathbb{C}$, on pose : $f(z) = z^2 - z + 2$. Déterminer tous les nombres complexes $z$ tels que $f(z) \in \mathbb{R}$. (Poser $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$.)
> 5. Soit $z$ un nombre complexe différent de $-i$. Montrer que : $\dfrac{1}{z+i} \in \mathbb{R} \Leftrightarrow \operatorname{Im} z = -1$.

> **Proposition 5.**
> Soit $z = x + iy$ et $z' = x' + iy'$ deux complexes où $x$, $x'$, $y$ et $y'$ des réels tels que $(x; y) \neq (0; 0)$. Le quotient de $z'$ par $z$ est le nombre complexe noté $\frac{z'}{z}$ tel que : $\frac{z'}{z} = z' \times \frac{1}{z}$ et on a :
$$\frac{z'}{z} = \frac{x' + iy'}{x + iy} = \frac{xx' + yy'}{x^2 + y^2} + i\frac{xy' - yx'}{x^2 + y^2}$$

> **Exemples.**
> 1) Calculons le nombre complexe : $z = \dfrac{\sqrt{3} + 2i}{\sqrt{3} - 2i} + \dfrac{\sqrt{3} - 2i}{\sqrt{3} + 2i}$.
>   On a immédiatement : $z = \dfrac{(\sqrt{3} + 2i)^2 + (\sqrt{3} - 2i)^2}{(\sqrt{3} - 2i)(\sqrt{3} + 2i)} = -\dfrac{2}{7}$.
>
> 2) Résolvons dans $\mathbb{C}$ l'équation suivante : $(E) : (4+i)z = 2+i-z$.
>   L'équation $(E)$ est équivalente à $z + (4 + i)z = 2 + i$, c'est-à-dire $(5 + i)z = 2 + i$. Il s'ensuit donc :
$$z = \frac{2 + i}{5 + i} = \frac{(2 + i)(5 - i)}{5^2 + 1^2} = \frac{11 + 3i}{26} = \frac{11}{26} + \frac{3}{26}i$$
>   Par suite, l'ensemble solution de cette équation est : $S = \left\{\dfrac{11}{26} + \dfrac{3}{26}i\right\}$.
>
> 3) Soit $z = x + iy$ un nombre complexe avec $(x; y) \in \mathbb{R}^2$. On pose $f(z) = \dfrac{z + i}{z - 1}$. Déterminons les complexes $z$ ($z \neq 1$) pour que $f(z)$ soit un réel.
>   On a : $f(z) = \dfrac{x + i(y + 1)}{(x - 1) + iy} = \dfrac{(x + i(y + 1))((x - 1) - iy)}{(x - 1)^2 + y^2} = \dfrac{x^2 + y^2 - x + y}{(x - 1)^2 + y^2} + i\dfrac{x - y - 1}{(x - 1)^2 + y^2}$.
>   Il s'ensuit donc que : $\operatorname{Re}(f(z)) = \dfrac{x^2 + y^2 - x + y}{(x - 1)^2 + y^2}$ et $\operatorname{Im}(f(z)) = \dfrac{x - y - 1}{(x - 1)^2 + y^2}$.
>   On a alors : $f(z) \in \mathbb{R} \Leftrightarrow \operatorname{Im}(f(z)) = 0 \Leftrightarrow \begin{cases} x - y - 1 = 0 \\ (x - 1)^2 + y^2 \neq 0 \end{cases} \Leftrightarrow \begin{cases} y = x - 1 \\ (x; y) \neq (1; 0) \end{cases} \Leftrightarrow \begin{cases} z = x + i(x - 1) \\ x \neq 1 \end{cases}$.
>   Par suite, l'ensemble des nombres complexes $z$ tels que $f(z) \in \mathbb{R}$ est : $\{x + (x - 1)i \;/\; x \in \mathbb{R} - \{1\}\}$.

> **Applications.**
> 1. Écrire sous forme algébrique le nombre complexe suivant :
$$Z = (1 + i)\left(\frac{2 + i}{1 - i}\right)^2 - (1 + 3i)\left(\frac{2 + i}{1 - i}\right) + 6$$
> 2. Résoudre dans $\mathbb{C}$ les équations suivantes :
$$(E_1) \quad (-1 + 4i)z + (1 - 2i) = iz + 3 \quad ; \quad (E_2) \quad \frac{1 + 3iz}{1 + 3z} = i\frac{z + 2}{z - 5}$$
> 3. Résoudre dans $\mathbb{C}^2$ les systèmes suivants :
$$(S_1) : \begin{cases} 2iz + 3z' = i \\ iz + z' = 2 \end{cases} \quad ; \quad (S_2) : \begin{cases} 3z - 2z' = -11 \\ iz + (1 + i)z' = 3(4 - i) \end{cases}$$
> 4. Montrer que l'ensemble des nombres complexes $z$ pour lesquels $\dfrac{iz}{z - 2}$ est réel est :
$$E = \left\{x + iy \;/\; (x - 1)^2 + y^2 = 1 \text{ et } (x; y) \neq (2; 0)\right\}$$
> 5. Soit $z = x + iy$ un nombre complexe tel que $(x; y) \in \mathbb{R}^2$. Déterminer tous les nombres complexes $z$ dans chacun des cas suivants :
>    a) $iz^2 \in \mathbb{R}$ ;
>    b) $z^2 + z + 1 \in \mathbb{R}$ ;
>    c) $\dfrac{1 - iz}{1 + z} \in i\mathbb{R}$ ;
>    d) $\dfrac{z - 1}{iz} \in i\mathbb{R}$ ;
>    e) $\dfrac{3 + iz}{(1 + i)z - 1} \in \mathbb{R}$.

### 3. Représentation géométrique d'un complexe

#### 3.1. Affixe d'un point — affixe d'un vecteur

> **Définition 3.**
> Le plan $\mathcal{P}$ est muni d'un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$.
> - Soit $z = x + iy$ où $(x; y) \in \mathbb{R}^2$ un nombre complexe. L'unique point $M$, de coordonnées $(x; y)$ dans $(O; \vec{\imath}, \vec{\jmath})$, est appelé l'image du complexe $z$ et on écrit $M(z)$.
> - Soit $M$ un point, de coordonnées $(x; y)$ dans $(O; \vec{\imath}, \vec{\jmath})$. Le nombre complexe $z = x + iy$ est appelé l'affixe du point $M$. On le note $Aff(M)$ ou $z_M$.

> **Remarques.**
> - Le plan $\mathcal{P}$ étant muni d'un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$, à partir de la définition 3, on peut identifier l'ensemble $\mathbb{C}$ au plan $\mathcal{P}$ de la façon suivante :
>   - À tout nombre complexe $z = x + iy$ on associe le point $M(x; y)$.
>   - À tout point $M(x; y)$ du plan $\mathcal{P}$ on associe le nombre complexe $z = x + iy$.
>
>   L'application $f : \mathbb{C} \to \mathcal{P}$, $z \mapsto M(z)$ est une bijection. Sa bijection réciproque est : $f^{-1} : \mathcal{P} \to \mathbb{C}$, $M \mapsto Aff(M)$. Le plan $\mathcal{P}$ est appelé alors le plan complexe et on a :
$$(\forall(M; N) \in \mathcal{P}^2) \quad (Aff(M) = Aff(N) \Leftrightarrow M = N)$$
> - Tout point de l'axe des abscisses est l'image d'un nombre réel ; c'est pourquoi l'axe des abscisses s'appelle l'axe réel. On a alors : $M(z) \in (O; \vec{\imath}) \Leftrightarrow z \in \mathbb{R}$.
> - Tout point $B(0; b)$ de l'axe des ordonnées est l'image d'un nombre imaginaire pur ($Aff(B) = bi$), c'est pourquoi l'axe des ordonnées s'appelle l'axe imaginaire. On a alors : $M(z) \in (O; \vec{\jmath}) \Leftrightarrow z \in i\mathbb{R}$.

> **Définition 4.**
> Le plan $\mathcal{P}$ est muni d'un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$. Soit $z = x + iy$ un nombre complexe où $(x; y) \in \mathbb{R}^2$.
> Le vecteur $\vec{u} = x\vec{\imath} + y\vec{\jmath}$ est appelé l'image vectorielle du complexe $z$, et on écrit $\vec{u}(z)$.
> De même, le nombre $z$ est appelé l'affixe du vecteur $\vec{u}$, et on écrit $Aff(\vec{u}) = z$ ou parfois $z_{\vec{u}} = z$.

> **Remarques.**
> - Soit $z$ un nombre complexe. On a : $z = Aff(M) \Leftrightarrow z = Aff(\overrightarrow{OM})$.
> - Soit $\mathcal{V}_2$ l'ensemble des vecteurs du plan. L'application $g : \mathbb{C} \to \mathcal{V}_2$, $z \mapsto \vec{u}(z)$ est une bijection de $\mathbb{C}$ vers $\mathcal{V}_2$ et on a : $(\forall(\vec{u}; \vec{v}) \in \mathcal{V}_2^2)\; (\vec{u} = \vec{v} \Leftrightarrow Aff(\vec{u}) = Aff(\vec{v}))$.

#### 3.2. Interprétation géométrique de la somme, de la différence et de la multiplication par un réel

> **Proposition 6.**
> - Si $\vec{v}_1$ et $\vec{v}_2$ sont deux vecteurs du plan d'affixes respectives $z_1$ et $z_2$, alors l'affixe du vecteur $\vec{v}_1 + \vec{v}_2$ est $z_1 + z_2$. En d'autres termes : $Aff(\vec{v}_1 + \vec{v}_2) = Aff(\vec{v}_1) + Aff(\vec{v}_2)$.
> - Si $M_1$ et $M_2$ sont les images respectives des affixes $z_1$ et $z_2$, alors l'image du nombre $z_1 + z_2$ est le point $S$ tel que : $\overrightarrow{OS} = \overrightarrow{OM_1} + \overrightarrow{OM_2}$ (c'est-à-dire $\overrightarrow{OM_1SM_2}$ est un parallélogramme).

> **Remarques.**
> - Soit $z$ un nombre complexe et $\vec{u}(z)$ et $\vec{v}(-z)$ deux vecteurs du plan. On sait que $Aff(\vec{0}) = 0$ et $z + (-z) = 0$, donc d'après la proposition 6, on en déduit que $\vec{u} + \vec{v} = \vec{0}$. Ainsi $\vec{v} = -\vec{u}$ et alors : $Aff(-\vec{u}) = -Aff(\vec{u})$.
> - Soit $M(z)$ et $M'(-z)$. Comme $O(0)$ et $z + (-z) = 0$ alors $\overrightarrow{OM} + \overrightarrow{OM'} = \overrightarrow{OO} = \vec{0}$ et par suite : $\overrightarrow{OM'} = -\overrightarrow{OM}$. Ainsi, le point $M'(-z)$ est le symétrique du point $M(z)$ par rapport à $O$.
> - On peut aussi interpréter géométriquement l'addition de la manière suivante : étant donné un vecteur $\vec{u}$ d'affixe $a$, la translation de vecteur $\vec{u}$ transforme le point $M$, d'affixe $z$, en le point $M'$, d'affixe $z' = z + a$.

> **Proposition 7.**
> Soit $M_1(z_1)$ et $M_2(z_2)$ deux points du plan complexe. Alors l'affixe du vecteur $\overrightarrow{M_1M_2}$ est $z_2 - z_1$. En d'autres termes : $Aff(\overrightarrow{M_1M_2}) = Aff(M_2) - Aff(M_1)$.

> **Exemple.**
> On considère les points $A$ et $B$ d'affixes respectives : $z_A = 3 + 2i$ et $z_B = 1 + 5i$. Déterminons l'affixe du point $C$ pour lequel $OABC$ est un parallélogramme :
> Le quadrilatère $OABC$ est un parallélogramme si, et seulement si : $\overrightarrow{OC} = \overrightarrow{AB}$. D'après la proposition 7, l'affixe du vecteur $\overrightarrow{AB}$ est $z_B - z_A = -2 + 3i$. Et puisque l'affixe du vecteur $\overrightarrow{OC}$ est celle du point $C$ alors l'affixe du point $C$ est : $z_C = z_B - z_A = -2 + 3i$.

> **Applications.**
> 1. Soit $A$, $B$, $C$ et $D$ des points du plan d'affixes respectives $a$, $b$, $c$ et $d$. Montrer que : $(ABCD \text{ est un parallélogramme}) \Leftrightarrow a + c = b + d$.
> 2. Soit $A$, $B$ et $E$ des points du plan d'affixes respectives : $a = 3 - 4i$, $b = 7 - i$ et $e = 1 + i$. Et soit $M$ le point du plan défini par : $-\overrightarrow{AM} + \overrightarrow{BM} + \overrightarrow{EM} = \vec{0}$. Déterminer l'affixe du point $M$. Quelle est la nature du quadrilatère $ABME$ ?

> **Proposition 8.**
> - Si $\vec{u}$ est un vecteur d'affixe $z$ et $\lambda$ un nombre réel, alors l'affixe du vecteur $\lambda\vec{u}$ est $\lambda z$. En d'autres termes : $Aff(\lambda\vec{u}) = \lambda Aff(\vec{u})$.
> - Si $M(z)$ est un point du plan, alors l'image du nombre complexe $\lambda z$ est le point $P$ défini par : $\overrightarrow{OP} = \lambda\overrightarrow{OM}$.

> **Remarque.**
> À l'aide des propositions 6 et 8, on peut établir le résultat suivant : si $\vec{v}_1$ et $\vec{v}_2$ sont deux vecteurs du plan, alors pour tout $(\lambda_1; \lambda_2) \in \mathbb{R}^2$ :
$$Aff(\lambda_1\vec{v}_1 + \lambda_2\vec{v}_2) = \lambda_1 Aff(\vec{v}_1) + \lambda_2 Aff(\vec{v}_2)$$

#### 3.3. Interprétation complexe de l'alignement, du parallélisme et du barycentre

Soit $A$, $B$ et $C$ des points deux à deux distincts d'affixes respectives $z_A$, $z_B$ et $z_C$. Les points $A$, $B$ et $C$ sont alignés si, et seulement si :
$$\frac{z_C - z_A}{z_B - z_A} \in \mathbb{R}$$

> **Preuve.**
> Les points $A$, $B$ et $C$ sont alignés si, et seulement si : $(\exists \lambda \in \mathbb{R});\; \overrightarrow{AC} = \lambda\overrightarrow{AB}$. Puisque l'affixe du vecteur $\overrightarrow{AB}$ est $z_B - z_A$ et celle de $\overrightarrow{AC}$ est $z_C - z_A$, alors l'égalité $\overrightarrow{AC} = \lambda\overrightarrow{AB}$ est équivalente à $z_C - z_A = \lambda(z_B - z_A)$, c'est-à-dire : $\dfrac{z_C - z_A}{z_B - z_A} \in \mathbb{R}$.

> **Exemples.**
> 1) Soit $A$, $B$ et $C$ les points du plan complexe d'affixes respectives : $z_A = 6 - i$, $z_B = 1 - 11i$ et $z_C = 7 + i$.
>   On a : $z_B - z_A = -5 - 10i$ et $z_C - z_A = 1 + 2i$, donc $z_C - z_A = -\frac{1}{5}(z_B - z_A)$. Par conséquent : $\dfrac{z_C - z_A}{z_B - z_A} = -\frac{1}{5} \in \mathbb{R}$, ce qui entraîne que les points $A$, $B$ et $C$ soient alignés.
>
> 2) Soit $M(z)$, $A(1)$ et $N(z^2)$ avec $z \in \mathbb{C}$. Déterminons l'ensemble des points $M$ tels que $M$, $A$ et $N$ sont alignés :
>   - Si $z = 0$ alors les points $M$ et $N$ sont confondus.
>   - Si $z = 1$ alors les points $A$, $M$ et $N$ sont confondus.
>   On suppose maintenant que $z \neq 0$ et $z \neq 1$. Les points $A$, $M$ et $N$ sont alignés si, et seulement si $\dfrac{z^2 - 1}{z - 1} \in \mathbb{R}$, c'est-à-dire si $(z + 1) \in \mathbb{R}$. Or si on pose $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$ on obtient :
$$(z + 1) \in \mathbb{R} \Leftrightarrow \operatorname{Im}(z + 1) = 0 \Leftrightarrow y = 0$$
>   Par suite, l'ensemble des points recherché est l'axe réel ou l'axe des abscisses.
>
> 3) Soit $M(z)$, $A(1)$ et $N(iz + 1)$ avec $z \in \mathbb{C}$. Déterminons l'ensemble des points $M$ tels que $M$, $A$ et $N$ soient alignés :
>   - Si $z = 1$ alors les points $A$ et $M$ sont confondus.
>   - Si $z = 0$ alors les points $A$ et $N$ sont confondus.
>   - Si $z = \frac{1}{2} + \frac{1}{2}i$ alors les points $M$ et $N$ sont confondus.
>   On suppose maintenant que $z \neq 0$, $z \neq 1$ et $z \neq \frac{1}{2} + \frac{1}{2}i$. Les points $A$, $M$ et $N$ sont alignés si, et seulement si $\dfrac{1 - z}{1 - (iz + 1)} \in \mathbb{R}$. En posant $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$, on obtient :
$$\frac{1 - z}{1 - (iz + 1)} = \frac{1 - z}{-iz} = \frac{-1}{iz} + \frac{1}{i} = \frac{-1}{-y + ix} - i = \frac{y + ix}{y^2 + x^2} - i = \frac{y}{x^2 + y^2} + i\frac{x - x^2 - y^2}{x^2 + y^2}$$
>   Il s'ensuit donc : $\dfrac{1 - z}{1 - (iz + 1)} \in \mathbb{R} \Leftrightarrow \dfrac{x - x^2 - y^2}{x^2 + y^2} = 0 \Leftrightarrow x^2 + y^2 - x = 0 \Leftrightarrow \left(x - \dfrac{1}{2}\right)^2 + y^2 = \dfrac{1}{4}$.
>   Par suite, l'ensemble des points $M(z)$ recherché est le cercle de centre $\Omega\left(\frac{1}{2}\right)$ et de rayon $\frac{1}{2}$.

> **Applications.**
> Montrer que l'ensemble des points $M(z)$ pour lesquels les points $B(i)$, $M(z)$ et $M'(iz)$ sont alignés est un cercle que l'on déterminera.

> **Proposition 10.**
> Soit $A$, $B$, $C$ et $D$ quatre points du plan d'affixes respectives $z_A$, $z_B$, $z_C$ et $z_D$ tels que $A \neq B$ et $C \neq D$. Les droites $(AB)$ et $(CD)$ sont parallèles si, et seulement si : $\dfrac{z_D - z_C}{z_B - z_A} \in \mathbb{R}$.

> **Preuve.**
> Les droites $(AB)$ et $(CD)$ sont parallèles si, et seulement si : $(\exists k \in \mathbb{R});\; \overrightarrow{CD} = k\overrightarrow{AB}$, ce qui signifie que $z_D - z_C = k(z_B - z_A)$, c'est-à-dire que $\dfrac{z_D - z_C}{z_B - z_A} = k \in \mathbb{R}$, d'où le résultat.

> **Exemple.**
> Soit $A$, $B$ et $C$ les points du plan d'affixes respectives $z_A = -2 + 6i$, $z_B = 4 - 3i$ et $z_C = (2 - 3i)x$ où $x \in \mathbb{R}^*$.
> On a : $z_B - z_A = 6 - 9i$, donc $\dfrac{z_C}{z_B - z_A} = \dfrac{x}{3}$. Puisque $x \in \mathbb{R}^*$ alors $\dfrac{z_C}{z_B - z_A} \in \mathbb{R}$. Ainsi : $(AB) \parallel (OC)$.

> **Application.**
> Pour tout $z \in \mathbb{C}$, on considère les points $A(-1)$, $B(i)$, $M(z)$ et $N(z^2)$. Déterminer l'ensemble des points $M$ tels que les droites $(BM)$ et $(AN)$ soient parallèles.

> **Proposition 11.**
> Soit $A$ et $B$ deux points du plan d'affixes respectives $z_A$ et $z_B$, et soit $(\alpha; \beta) \in \mathbb{R}^2$ tel que $\alpha + \beta \neq 0$. L'affixe du barycentre $G$ du système pondéré $\{(A; \alpha); (B; \beta)\}$ est le complexe : $z_G = \dfrac{\alpha z_A + \beta z_B}{\alpha + \beta}$.

> **Remarques.**
> - Si $A(z_A)$ et $B(z_B)$ alors l'affixe du milieu $I$ du segment $[AB]$ est le nombre complexe $z_I = \dfrac{z_A + z_B}{2}$. En fait ceci n'est rien qu'un cas particulier du barycentre où les « poids » sont égaux.
> - On peut généraliser le résultat de la proposition 11 pour le barycentre de plus de deux points. Plus précisément : si $n$ est un entier naturel supérieur ou égal à 2 et $\alpha_1, \alpha_2, \dots, \alpha_n$ des réels tels que $\alpha_1 + \alpha_2 + \dots + \alpha_n \neq 0$, alors le barycentre $G$ du système pondéré $\{(A_1; \alpha_1); (A_2; \alpha_2); \dots; (A_n; \alpha_n)\}$ a pour affixe :
$$z_G = \frac{\alpha_1 z_{A_1} + \alpha_2 z_{A_2} + \dots + \alpha_n z_{A_n}}{\alpha_1 + \alpha_2 + \dots + \alpha_n}$$

> **Exemple.**
> Soit $A$, $B$ et $C$ les points du plan d'affixes respectives : $z_A = 3 + 3i$, $z_B = 5 - 2i$ et $z_C = 7 + 10i$.
> - Le milieu du segment $[AB]$ est le point $I$ d'affixe : $z_I = \dfrac{z_A + z_B}{2} = 4 + \dfrac{1}{2}i$.
> - Le barycentre $H$ du système pondéré $\{(B; -1); (C; 5)\}$ a pour affixe : $z_H = \dfrac{-z_B + 5z_C}{4} = \dfrac{15}{2} + 13i$.
> - Le centre de gravité du triangle $ABC$ est le point $G$ d'affixe : $z_G = \dfrac{z_A + z_B + z_C}{3} = 5 + \dfrac{11}{3}i$.

> **Applications.**
> 1. Soit $A$, $B$ et $C$ les points du plan d'affixes respectives : $a = 3 + 7i$, $b = 4 + 5i$ et $c = 2 + i$.
>    a) Déterminer l'affixe du point $G$ barycentre du système pondéré $\{(A;2);(B;1);(C;1)\}$ et l'affixe du point $H$ barycentre du système pondéré $\{(A;1);(B;2);(C;1)\}$.
>    b) Déterminer l'ensemble des points $M(z)$ du plan tels que : $\left\| 2\overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC}\right\| = \left\| \overrightarrow{MA} + 2\overrightarrow{MB} + \overrightarrow{MC}\right\|$.
> 2. Soit $x$ et $y$ deux nombres réels. Soit les points $A$, $B$, $C$ et $G$ du plan complexe d'affixes respectives : $z_A = 1 + iy$, $z_B = 2i$, $z_C = x - i$ et $z_G = 1 - i$. Déterminer les valeurs des réels $x$ et $y$ pour que le point $G$ soit le barycentre des points pondérés $(A; 2)$, $(B; -1)$ et $(C; 3)$.

### 4. Conjugué d'un nombre complexe

#### 4.1. Définition et interprétation géométrique

> **Définition 5.**
> Soit $z = x + iy$ un nombre complexe avec $(x; y) \in \mathbb{R}^2$. On appelle conjugué de $z$ le nombre complexe $x - iy$, noté $\overline{z}$, et on écrit : $\overline{z} = \overline{x + iy} = x - iy$. On a alors : $\overline{z} = \operatorname{Re}(z) - i\operatorname{Im}(z)$ et $\overline{\overline{z}} = z$.

> **Exemples.**
> On considère les nombres complexes :
$$z = 1 + 2i \quad ; \quad t = -7i \quad ; \quad u = 17 + 3\sqrt{2} \quad ; \quad v = 5 - 4i \quad ; \quad w = 3 + i(5 + i)$$
> Calculons les conjugués de ces nombres :
> On a : $\overline{z} = \overline{1 + 2i} = 1 - 2i$ ; $\overline{t} = \overline{-7i} = 7i$ ; $\overline{u} = \overline{17 + 3\sqrt{2}} = 17 + 3\sqrt{2}$ ; $\overline{v} = \overline{5 - 4i} = 5 + 4i$.
> On a : $w = 2 + 5i$, donc : $\overline{w} = \overline{2 + 5i} = 2 - 5i$.

> **Interprétation géométrique de la conjugaison.**
> Soit $z = x + iy$ un nombre complexe avec $(x; y) \in \mathbb{R}^2$.
> - La symétrie par rapport à l'axe des abscisses transforme le point $M(x; y)$ en $N(x; -y)$, d'affixe $Aff(N) = \overline{Aff(M)}$.
> - La symétrie par rapport à l'axe des ordonnées transforme le point $M(x; y)$ en $Q(-x; y)$, d'affixe $Aff(Q) = -\overline{Aff(M)}$.

#### 4.2. Propriétés du conjugué

> **Proposition 12.**
> Étant donné $z \in \mathbb{C}$, on a :
$$\operatorname{Re}(z) = \frac{1}{2}(z + \overline{z}) \quad \text{et} \quad \operatorname{Im}(z) = \frac{1}{2i}(z - \overline{z}) \quad \text{et} \quad z \cdot \overline{z} = (\operatorname{Re}(z))^2 + (\operatorname{Im}(z))^2$$
> On a donc : $z \in \mathbb{R} \Leftrightarrow \overline{z} = z$ et $z \in i\mathbb{R} \Leftrightarrow \overline{z} = -z$.

> **Preuve.**
> Soit $z = x + iy$ un nombre complexe avec $(x; y) \in \mathbb{R}^2$. On a : $x = \operatorname{Re}(z)$ et $y = \operatorname{Im}(z)$, d'où :
$$\frac{1}{2}(z + \overline{z}) = \frac{1}{2}(x + iy + x - iy) = x = \operatorname{Re}(z) \quad \text{et} \quad \frac{1}{2i}(z - \overline{z}) = \frac{1}{2i}(x + iy - x + iy) = y = \operatorname{Im}(z)$$
$$z \cdot \overline{z} = (x + iy)(x - iy) = x^2 - (iy)^2 = x^2 + y^2 = (\operatorname{Re}(z))^2 + (\operatorname{Im}(z))^2$$
> Pour les deux équivalences :
$$\overline{z} = z \Leftrightarrow z - \overline{z} = 0 \Leftrightarrow 2i\operatorname{Im}(z) = 0 \Leftrightarrow z \in \mathbb{R} \quad \text{et} \quad \overline{z} = -z \Leftrightarrow z + \overline{z} = 0 \Leftrightarrow 2\operatorname{Re}(z) = 0 \Leftrightarrow z \in i\mathbb{R}$$

> **Remarque.**
> - En pratique, pour éliminer les complexes du dénominateur d'une fraction, on multiplie numérateur et dénominateur par le conjugué du dénominateur.

> **Proposition 13.**
> Soit $z$ et $z'$ deux nombres complexes. On a alors les propriétés suivantes :
> - $\overline{z + z'} = \overline{z} + \overline{z'}$ et $\overline{z \cdot z'} = \overline{z} \cdot \overline{z'}$.
> - Pour tout $\lambda \in \mathbb{R}$ : $\overline{\lambda z} = \lambda \overline{z}$.
> - Si $z \neq 0$ alors : $\overline{\left(\frac{1}{z}\right)} = \frac{1}{\overline{z}}$ et $\overline{\left(\frac{z'}{z}\right)} = \frac{\overline{z'}}{\overline{z}}$.
> - Si $z \neq 0$ et $n \in \mathbb{Z}$ alors : $\overline{z^n} = (\overline{z})^n$.

> **Exemples.**
> 1) Pour tout $n \in \mathbb{Z}$, on pose : $u = (5 + 6i)^n + (5 - 6i)^n$ et $v = (\sqrt{3} + i)^{2n+1} + (i - \sqrt{3})^{2n+1}$. Montrons que le nombre $u$ est réel et que le nombre $v$ est imaginaire pur.
>   On a pour tout $n \in \mathbb{Z}$ :
$$\overline{u} = \overline{(5 + 6i)^n + (5 - 6i)^n} = (5 - 6i)^n + (5 + 6i)^n = u. \quad \text{Par suite : } u \text{ est réel.}$$
>   On a pour tout $n \in \mathbb{Z}$ :
$$\overline{v} = \overline{(\sqrt{3} + i)^{2n+1} + (i - \sqrt{3})^{2n+1}} = (\sqrt{3} - i)^{2n+1} + (-i - \sqrt{3})^{2n+1} = (-1)^{2n+1}(i - \sqrt{3})^{2n+1} + (-1)^{2n+1}(\sqrt{3} + i)^{2n+1}$$
>   Puisque $(-1)^{2n+1} = -1$ alors $\overline{v} = -(i - \sqrt{3})^{2n+1} - (\sqrt{3} + i)^{2n+1} = -v$. Par suite : $v$ est imaginaire pur.
>
> 2) Dans le plan complexe muni d'un repère orthonormé direct, on veut déterminer l'ensemble des points $M(z)$ pour lesquels $2iz - \overline{z}$ est réel.
>   On pose : $z' = 2iz - \overline{z}$, et soit $E$ l'ensemble des points $M(z)$ tels que $z' \in \mathbb{R}$. On a alors :
$$M \in E \Leftrightarrow z' \in \mathbb{R} \Leftrightarrow \overline{z'} = z' \Leftrightarrow \overline{2iz - \overline{z}} = 2iz - \overline{z} \Leftrightarrow -2i\overline{z} - z = 2iz - \overline{z} \Leftrightarrow z - \overline{z} = -2i(z + \overline{z})$$
>   Par conséquent : $M \in E \Leftrightarrow 2i\operatorname{Im}(z) = -4i\operatorname{Re}(z) \Leftrightarrow \operatorname{Im}(z) = -2\operatorname{Re}(z)$.
>   Si on considère $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$, on en déduit que : $M \in E \Leftrightarrow y = -2x$.
>   Par suite, l'ensemble $E = \{M(z) \;/\; 2iz - \overline{z} \in \mathbb{R}\}$ est la droite d'équation $y = -2x$.

> **Applications.**
> 1. Soit $z \in \mathbb{C}^*$. Simplifier l'expression suivante : $\overline{\left(\frac{iz + 1}{z}\right)} - \frac{1 - z}{z}$.
> 2. On considère le nombre complexe : $j = -\frac{1}{2} + i\frac{\sqrt{3}}{2}$.
>    a) Montrer que pour tout $n \in \mathbb{Z}$ : $(j^{2n} - j^n) \in i\mathbb{R}$.
>    b) Montrer que pour tout $(a;b;c)\in \mathbb{C}^3$ :
$$a^3 + b^3 + c^3 - 3abc = (a + b + c)(a + bj + cj^2)(a + bj^2 + cj)$$
> 3. Résoudre dans $\mathbb{C}$ les équations suivantes : $\overline{z} = (1 - i)z + 3 + 2i$ et $z^2 + \overline{z} - \frac{1}{4} = 0$.
> 4. Pour tout $z \in \mathbb{C}$, on pose : $f(z) = (z - 2)(\overline{z} + i)$. Soit $M(z)$ un point du plan complexe. Déterminer les ensembles suivants : $E = \{M(z) \;/\; f(z) \in \mathbb{R}\}$ et $F = \{M(z) \;/\; f(z) \in i\mathbb{R}\}$.
> 5. Déterminer dans le plan complexe, l'ensemble des points $M(z)$ pour lesquels $Z = \dfrac{1 + z}{1 - z}$ est réel.
> 6. Déterminer dans le plan complexe, l'ensemble des points $M(z)$ pour lesquels le nombre $Z' = \dfrac{z + i}{i\overline{z} + 3}$ est imaginaire pur.

> **Remarques.**
> - Soit $n$ un entier supérieur ou égal à 2, et $z_1, z_2, \dots, z_n$ des nombres complexes. Alors :
$$\overline{\sum_{k=1}^{n} z_k} = \sum_{k=1}^{n} \overline{z_k} \quad \text{et} \quad \overline{\prod_{k=1}^{n} z_k} = \prod_{k=1}^{n} \overline{z_k}$$
> - Soit $P(z)$ un polynôme dans $\mathbb{C}$ à coefficients réels : $P(z) = a_n z^n + a_{n-1}z^{n-1} + \dots + a_1 z + a_0$ (les nombres $a_0, a_1, \dots, a_n$ sont alors réels). On a alors pour tout $z \in \mathbb{C}$ :
$$\overline{P(z)} = \overline{a_n z^n + a_{n-1}z^{n-1} + \dots + a_1 z + a_0} = a_n(\overline{z})^n + a_{n-1}(\overline{z})^{n-1} + \dots + a_1\overline{z} + a_0 = P(\overline{z})$$
>   En particulier, si $\alpha$ est racine du polynôme $P$ (c'est-à-dire $P(\alpha) = 0$), alors $\overline{\alpha}$ est aussi racine de $P$ car : $P(\overline{\alpha}) = \overline{P(\alpha)} = 0$.
>
>   On obtient alors le résultat important suivant :
>   > « Si $\alpha$ est racine d'un polynôme à coefficients réels, alors $\overline{\alpha}$ est aussi racine de ce polynôme. »

### 5. Module d'un nombre complexe

#### 5.1. Définition et interprétation géométrique

> **Définition 6.**
> Soit $z = x + iy$ un nombre complexe avec $(x; y) \in \mathbb{R}^2$. Le module de $z$ est le réel positif noté $|z|$ défini par : $|z| = \sqrt{z \cdot \overline{z}} = \sqrt{x^2 + y^2}$. On a alors : $|z| = \sqrt{(\operatorname{Re}(z))^2 + (\operatorname{Im}(z))^2}$.

> **Exemples.**
$$|12 - 5i| = \sqrt{12^2 + (-5)^2} = \sqrt{169} = 13 \quad ; \quad |3 + 5i| = \sqrt{3^2 + 5^2} = \sqrt{34} \quad ; \quad |-2\sqrt{15}| = 2\sqrt{15}$$
$$|7| = 7 \quad ; \quad |-\sqrt{6} - \sqrt{2}i| = \sqrt{6+2} = \sqrt{8} = 2\sqrt{2} \quad ; \quad |5i| = \sqrt{5^2} = 5 \quad ; \quad |-3i| = \sqrt{(-3)^2} = 3$$
> Pour tout $\theta \in \left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ : $|\cos\theta + i\sin\theta| = \sqrt{\cos^2\theta + \sin^2\theta} = 1$ et $|1 + i\tan\theta| = \sqrt{1 + \tan^2\theta} = \dfrac{1}{\cos\theta}$.

> **Remarques.**
> - La notion de module prolonge celle de la valeur absolue, c'est-à-dire que le module d'un nombre réel est égal à sa valeur absolue.
>   On a pour tout $z \in \mathbb{C}$ : $|\overline{z}|^2 = z \cdot \overline{z}$ et $|\overline{z}| = |z|$. Si $z \neq 0$ alors : $\overline{z} = \dfrac{|z|^2}{z}$.

> **Interprétation géométrique du module.**
> Étant donné $z \in \mathbb{C}$, d'image $M$, le module de $z$ est la distance $OM$ : $|z| = \|\overrightarrow{OM}\| = OM$. Si $\vec{u}$ est un vecteur d'affixe $z$ alors : $|z| = \|\vec{u}\|$.

> **Proposition 14.**
> La distance entre deux points $A$ et $B$, d'affixes respectives $a$ et $b$, est : $AB = \|\overrightarrow{AB}\| = |b - a|$.

> **Proposition 15.**
> Soit $a$ un nombre complexe et $r$ un réel strictement positif. On note $A$ l'image de $a$. L'ensemble des images $M(z)$ des nombres complexes $z$ tels que :
> - $|z - a| = r$ est le cercle $\mathcal{C}$ de centre $A$ et de rayon $r$ ;
> - $|z - a| \leq r$ est le disque fermé $\mathcal{D}$ de centre $A$ et de rayon $r$ ;
> - $|z - a| < r$ est le disque ouvert $\Delta$ de centre $A$ et de rayon $r$.

> **Exemples.**
> 1) Soit $E$ l'ensemble des points $M(z)$ du plan tels que $|z| = 3$. Puisque $OM = 3$ alors $E$ est l'ensemble des points $M$ tels que $OM = 3$. Par conséquent, l'ensemble $E$ est le cercle de centre $O$ et de rayon 3.
> 2) Soit $F$ l'ensemble des points $M(z)$ du plan tels que $|z - 1 + i| \leq 4$. En notant $A$ le point d'affixe $1 - i$, on obtient : $M \in F \Leftrightarrow |z - (1 - i)| \leq 4 \Leftrightarrow AM \leq 4$. Par suite, l'ensemble $F$ est le disque fermé de centre $A$ et de rayon 4.

#### 5.2. Propriétés du module

> **Proposition 16.**
> Soit $z$ et $z'$ deux nombres complexes. On a les propriétés suivantes :
> - $|z| \geq 0$ et $|\operatorname{Re}(z)| \leq |z|$ et $|\operatorname{Im}(z)| \leq |z|$.
> - $|z| = 0 \Leftrightarrow z = 0$ et $|z - z'| = 0 \Leftrightarrow z = z'$.
> - $|z \times z'| = |z| \times |z'|$.
> - $|z| = |\overline{z}| = |-z| = |-\overline{z}|$.
> - Si $z \neq 0$ et $n \in \mathbb{Z}$ alors : $\left|\frac{1}{z}\right| = \frac{1}{|z|}$ et $\left|\frac{z'}{z}\right| = \frac{|z'|}{|z|}$ et $|z^n| = |z|^n$.

> **Exemples.**
> 1) Calculons les modules des nombres complexes suivants :
$$z_1 = (3 - 4i)(4 + 8i) \quad ; \quad z_2 = \frac{\sqrt{3} + i}{\sqrt{2} - i\sqrt{2}} \quad ; \quad z_3 = \left(\frac{1}{2} - i\frac{\sqrt{3}}{2}\right)^{2018} \quad ; \quad z_4 = \frac{-4i(5 - i)^6}{13(3 + 2i)^4}$$
>   En utilisant la définition du module et les propriétés énoncées dans la proposition 16, on obtient :
$$|z_1| = |3 - 4i| \times |4 + 8i| = \sqrt{25} \times \sqrt{80} = 20\sqrt{5} \quad ; \quad |z_2| = \frac{|\sqrt{3} + i|}{|\sqrt{2} - i\sqrt{2}|} = \frac{2}{2} = 1$$
$$|z_3| = \left|\frac{1}{2} - i\frac{\sqrt{3}}{2}\right|^{2018} = 1^{2018} = 1 \quad ; \quad |z_4| = \frac{|-4i| \cdot |5 - i|^6}{13 |3 + 2i|^4} = \frac{4 \times (\sqrt{26})^6}{13 \times (\sqrt{13})^4} = 32$$
>
> 2) Déterminons dans le plan complexe, l'ensemble $E$ des points $M(z)$ tels que : $|iz + 3| = \left|\frac{1}{i}z - 4i + 1\right|$. On a pour tout $z \in \mathbb{C}$ :
$$M(z) \in E \Leftrightarrow |iz + 3| = \left|\frac{1}{i}z - 4i + 1\right| \Leftrightarrow |i(z - 3i)| = \left|\frac{1}{i}(z + 4 + i)\right| \Leftrightarrow |i|\,|z - 3i| = \left|\frac{1}{i}\right|\,|z + 4 + i|$$
>   Comme $|i| = \left|\frac{1}{i}\right| = 1$, alors : $M(z) \in E \Leftrightarrow |z - 3i| = |z + 4 + i|$. Considérons les points $A(3i)$ et $B(-4 - i)$. On a donc : $M(z) \in E \Leftrightarrow AM = BM$. Par suite, l'ensemble $E$ est la médiatrice du segment $[AB]$.
>
> 3) Soit $F$ l'ensemble des points $M(z)$ du plan tels que $|iz - 2| = |\overline{z} + 1 - i|$.
>   On a pour tout $z \in \mathbb{C}$ : $|iz - 2| = |i(z + 2i)| = |i|\cdot|z + 2i| = |z + 2i|$ et $|\overline{z} + 1 - i| = |\overline{\overline{z} + 1 - i}| = |z + 1 + i|$.
>   On considère les points $A(-2i)$ et $B(-1 - i)$. On a alors : $M \in F \Leftrightarrow |z + 2i| = |z + 1 + i| \Leftrightarrow AM = BM$. Par suite, l'ensemble $F$ est la médiatrice du segment $[AB]$.
>
> 4) Soit $u$ un nombre complexe tel que $u \notin \mathbb{R}$. Montrons que : $(\forall z \in \mathbb{C})\; |1 + uz| = |1 + \overline{u}z| \Rightarrow z \in \mathbb{R}$. Soit $z \in \mathbb{C}$ vérifiant $|1 + uz| = |1 + \overline{u}z|$. On a alors :
$$|1 + uz| = |1 + \overline{u}z| \Rightarrow |1 + uz|^2 = |1 + \overline{u}z|^2 \Rightarrow (1 + uz)(1 + \overline{u}\,\overline{z}) = (1 + \overline{u}z)(1 + u\overline{z})$$
>   Il en résulte donc : $1 + uz + \overline{u}\,\overline{z} + u\overline{u}\,z\overline{z} = 1 + u\overline{z} + \overline{u}z + u\overline{u}\,z\overline{z}$, c'est-à-dire : $uz + \overline{u}\,\overline{z} = u\overline{z} + \overline{u}z$, par conséquent : $(u - \overline{u})z + (\overline{u} - u)\overline{z} = 0$, d'où : $(u - \overline{u})(z - \overline{z}) = 0$.
>   Puisque $u - \overline{u} \neq 0$ (car $u \notin \mathbb{R}$) alors nécessairement $z - \overline{z} = 0$, donc $z = \overline{z}$ et par suite : $z \in \mathbb{R}$.

> **Remarque.**
> Si $n$ est un entier supérieur ou égal à 2, et $z_1, z_2, \dots, z_n$ des nombres complexes, alors : $\left|\prod_{k=1}^{n} z_k\right| = \prod_{k=1}^{n} |z_k|$.

> **Applications.**
> 1. Déterminer le module du nombre complexe : $z = \left(\sqrt{2 - \sqrt{2}} + i\sqrt{2 + \sqrt{2}}\right)^{16}$.
> 2. Pour tout $z \in \mathbb{C} - \left\{-\frac{1}{2}i\right\}$, on pose : $Z = \dfrac{z + 2i}{2z + i}$. Montrer l'équivalence suivante : $|z| = 1 \Leftrightarrow |Z| = 1$.
> 3. Déterminer tous les nombres complexes $z$ tels que :
>    a) $|z^2| - |z - iz| = |\overline{z}|$ ;
>    b) $|-8iz^2| = 32$ ;
>    c) $|z - 1 + 2i| = 3|\overline{z} + 4 + 3i|$.
> 4. Soit $F$ l'application du plan complexe $\mathcal{P}$ vers $\mathcal{P}$ qui associe à tout point $M$ d'affixe $z \in \mathbb{C} - \{i\}$ le point $M'$ d'affixe $f(z) = \dfrac{1 - iz}{z - i}$. Montrer que si le point $M$ varie sur le cercle $\mathcal{C}$ de centre $A(i)$ et de rayon 4, alors le point $M'$ varie sur un cercle $\mathcal{C}'$ dont on déterminera le centre et le rayon.

> **Proposition 17.**
> Étant donné deux nombres complexes $z$ et $z'$, on a : $|z + z'| \le |z| + |z'|$. C'est l'inégalité triangulaire pour les nombres complexes.

> **Preuve.**
> On calcule :
$$(|z| + |z'|)^2 - |z + z'|^2 = (z\overline{z} + 2|z z'| + z'\overline{z'}) - (z + z')(\overline{z} + \overline{z'}) = 2(|\overline{z}z'| - \operatorname{Re}(\overline{z}z'))$$
> Puisque $\operatorname{Re}(\overline{z}z') \le |\overline{z}z'|$ (d'après la proposition 16) alors $|z + z'| \le |z| + |z'|$ car les réels $|z + z'|$ et $|z| + |z'|$ sont positifs.

> **Remarques.**
> - Soit $ABC$ un triangle et on pose : $a = BC$, $b = AC$ et $c = AB$. On sait que : $a \le b + c$, c'est-à-dire : $BC \le AC + AB$. Donc : $|z_C - z_B| \le |z_C - z_A| + |z_A - z_B|$. D'où la dénomination « inégalité triangulaire » pour cette relation.
> - On peut généraliser le résultat de la proposition 17 pour $n$ nombres complexes ($n \in \mathbb{N}^*$ et $n \ge 2$) comme suit : « Si $z_1, z_2, \dots, z_n$ sont des nombres complexes alors : $\left|\sum_{k=1}^n z_k\right| \le \sum_{k=1}^n |z_k|$ ».
> - La proposition 17 affirme que : $(\forall(z; z') \in \mathbb{C}^2)\; |z + z'| \le |z| + |z'|$. On peut alors se poser la question : « À quelles conditions a-t-on l'égalité $|z + z'| = |z| + |z'|$ ? »
>   - Si $z = 0$, l'inégalité triangulaire est une égalité.
>   - Si $z' = \lambda z$, avec $\lambda \in \mathbb{R}^+$, il vient $|z + z'| = |1 + \lambda||z| = (1 + \lambda)|z| = |z| + |z'|$.
>   - Si $|z + z'| = |z| + |z'|$ et $z \neq 0$, on a $\overline{z} z' \in \mathbb{R}^+$ (car, d'après la preuve précédente, $\operatorname{Re}(\overline{z}z') = |\overline{z}z'| \ge 0$), donc $z' = \lambda z$ avec $\lambda = \dfrac{\overline{z} \cdot z'}{|z|^2}$.

> **Corollaire.**
> Étant donné deux nombres complexes $z$ et $z'$, on a : $\bigl||z| - |z'|\bigr| \le |z - z'| \le |z| + |z'|$.

> **Applications.**
> 1. Soit $z_1$ et $z_2$ deux nombres complexes quelconques. Montrer l'inégalité suivante : $\dfrac{|z_1 + z_2|}{1 + |z_1 + z_2|} \le \dfrac{|z_1| + |z_2|}{1 + |z_1| + |z_2|}$.
> 2. Soit $z$ un nombre complexe. En utilisant l'inégalité triangulaire, montrer que : $|z| \le |z|^2 + |z - 1|$. (Indication : on pourra distinguer les deux cas : $|z| \ge 1$ et $|z| \le 1$.)

### 6. Forme trigonométrique d'un complexe

#### 6.1. Argument d'un nombre complexe non nul

> **Définition 7.**
> Soit $z$ un nombre complexe non nul, d'image $M$ dans le plan complexe $\mathcal{P}$. Toute mesure $\theta$ de l'angle orienté $\left(\widehat{\vec{\imath}, \overrightarrow{OM}}\right)$ s'appelle un argument de $z$. On le note $\arg(z)$ et on écrit : $\arg(z) \equiv \theta \,[2\pi]$.

> **Remarques.**
> - Soit $z$ un nombre complexe non nul. Si $\theta$ est un argument du nombre complexe $z$, alors tout nombre réel de la forme $\theta + 2k\pi$ avec $k \in \mathbb{Z}$ est aussi un argument de $z$. Dans la pratique, on prend souvent $\theta$ dans l'intervalle $]-\pi, \pi]$, c'est-à-dire la mesure principale de l'angle $\left(\widehat{\vec{\imath}, \overrightarrow{OM}}\right)$.
> - Le nombre 0 est l'unique nombre complexe qui n'a pas d'argument.

> **Exemples.**
> En utilisant la définition 7, on obtient les résultats suivants :
$$\arg(z_A) = -\frac{\pi}{4} \,[2\pi] \quad ; \quad \arg(z_B) = \frac{\pi}{6} \,[2\pi] \quad ; \quad \arg(z_C) = \frac{2\pi}{3} \,[2\pi] \quad ; \quad \arg(z_D) = 0 \,[2\pi]$$
$$\arg(z_E) = \frac{\pi}{2} \,[2\pi] \quad ; \quad \arg(z_F) = -\frac{5\pi}{6} \,[2\pi] \quad ; \quad \arg(z_G) = -\frac{\pi}{4} \,[2\pi] \quad ; \quad \arg(z_H) = \pi \,[2\pi]$$

#### 6.2. Forme trigonométrique d'un nombre complexe

> **Proposition 18.**
> - Soit $z = x + iy$ un nombre complexe non nul avec $(x; y) \in \mathbb{R}^2$ et $\theta$ un argument de $z$. Alors : $x = |z|\cos\theta$ et $y = |z|\sin\theta$.
> - Tout nombre complexe non nul $z$ s'écrit de manière unique sous la forme : $z = |z|(\cos\theta + i\sin\theta)$, où $\theta$ est un argument de $z$.

> **Définition 8.**
> Soit $z$ un nombre complexe non nul et $\theta$ un argument de $z$. L'écriture $z = |z|(\cos\theta + i\sin\theta)$ est appelée une écriture trigonométrique ou forme trigonométrique du nombre complexe $z$. Notation simplifiée : $z = [|z|; \theta]$.

> **Remarque.**
> Tout nombre complexe non nul admet une infinité de formes trigonométriques. Si $z \in \mathbb{C}^*$ alors : $z = |z|(\cos(\arg(z)) + i\sin(\arg(z)))$.

> **Définition 9.**
> Soit $z$ un nombre complexe non nul et $M$ son image dans le plan complexe. On pose : $r = OM$ et $\theta$ une mesure de l'angle $\left(\widehat{\vec{\imath}, \overrightarrow{OM}}\right)$ ($\arg(z) \equiv \theta \,[2\pi]$). Le couple $(r; \theta)$ est appelé le couple des coordonnées polaires du point $M$ par rapport à l'axe polaire $(O; \vec{\imath})$. Le point $O$ est le pôle.

> **Proposition 19.**
> Soit $z \in \mathbb{C}^*$. Si $z = r(\cos\theta + i\sin\theta)$ tel que $r \in \mathbb{R}^*$ et $\theta \in \mathbb{R}$ alors : $|z| = r$ et $\theta \equiv \arg(z) \,[2\pi]$.

> **Preuve.**
> Soit $z = r(\cos\theta + i\sin\theta)$ tel que $r \in \mathbb{R}^*$ et $\theta \in \mathbb{R}$. On a : $|z| = |r|\,|\cos\theta + i\sin\theta|$. Et puisque $r > 0$, alors $|r| = r$, et on a : $|\cos\theta + i\sin\theta| = \sqrt{\cos^2\theta + \sin^2\theta} = 1$. Donc : $|z| = r$.
> Soit $\varphi$ un argument de $z$. On a donc : $z = r(\cos\theta + i\sin\theta) = r(\cos\varphi + i\sin\varphi)$ ; il en résulte alors : $\cos\theta = \cos\varphi$ et $\sin\theta = \sin\varphi$. Par conséquent : $\theta \equiv \varphi \,[2\pi]$, ce qui signifie que $\theta$ est un argument de $z$.

> **Proposition 20.**
> Soit $z$ un nombre complexe non nul. On a les équivalences suivantes :
> 1) $z \in \mathbb{R}^* \Leftrightarrow \arg(z) \equiv 0 \,[\pi]$ ;
> 2) $z \in \mathbb{R}^*_+ \Leftrightarrow \arg(z) \equiv 0 \,[2\pi]$ ;
> 3) $z \in \mathbb{R}^*_- \Leftrightarrow \arg(z) \equiv \pi \,[2\pi]$ ;
> 4) $z \in i\mathbb{R}^* \Leftrightarrow \arg(z) \equiv \frac{\pi}{2} \,[\pi]$ ;
> 5) $z \in i\mathbb{R}^*_+ \Leftrightarrow \arg(z) \equiv \frac{\pi}{2} \,[2\pi]$ ;
> 6) $z \in i\mathbb{R}^*_- \Leftrightarrow \arg(z) \equiv -\frac{\pi}{2} \,[2\pi]$.

> **Remarques.**
> - Les propositions 18 et 19 nous indiquent que toute écriture du genre $r(\cos\theta + i\sin\theta)$ avec $r \in \mathbb{R}^*$ et $\theta \in \mathbb{R}$ est une forme trigonométrique d'un nombre complexe de module $r$ et d'argument $\theta$.
> - La proposition 20 nous facilite la détermination d'une forme trigonométrique d'un nombre réel ou imaginaire pur.
> - La détermination d'une écriture trigonométrique d'un nombre complexe non nul $z$ est équivalente à la détermination de son module et d'un de ses arguments. Pratiquement : si $z = x + iy$ avec $(x; y) \in \mathbb{R}^2 - \{(0, 0)\}$ alors $|z| = \sqrt{x^2 + y^2}$, et donc : $\dfrac{z}{|z|} = \dfrac{x}{\sqrt{x^2 + y^2}} + i\dfrac{y}{\sqrt{x^2 + y^2}}$.
>   Et si $\arg(z) \equiv \theta \,[2\pi]$ alors $z = |z|(\cos\theta + i\sin\theta)$, et donc : $\dfrac{z}{|z|} = \cos\theta + i\sin\theta$. Par conséquent : $\cos\theta = \dfrac{x}{\sqrt{x^2 + y^2}}$ et $\sin\theta = \dfrac{y}{\sqrt{x^2 + y^2}}$. Ainsi, la connaissance de $\cos\theta$ et $\sin\theta$ permet la détermination d'un argument de $z$ (on pourra utiliser les boutons $\cos^{-1}$ et $\sin^{-1}$ de la calculatrice).
> - Si $z = \lambda(\cos\theta + i\sin\theta)$ avec $\lambda \in \mathbb{R}^*_-$ alors $|z| = -\lambda$ et $z = |\lambda|(-\cos\theta - i\sin\theta)$. Par suite : $z = |\lambda|(\cos(\theta + \pi) + i\sin(\theta + \pi))$ est une forme trigonométrique du nombre $z$.

> **Exemples.**
> 1) Déterminons une forme trigonométrique de chacun des nombres complexes suivants :
$$z_1 = \sqrt{2} + i\sqrt{6} \quad ; \quad z_2 = -3\left(\cos\frac{\pi}{5} + i\sin\frac{\pi}{5}\right) \quad ; \quad z_3 = \frac{\sqrt{3}}{3} - i \quad ; \quad z_4 = -5 + 5i \quad ; \quad z_5 = \frac{-\sqrt{6} + 3i\sqrt{2}}{-i}$$
>
>   - On a : $|z_1| = \sqrt{(\sqrt{2})^2 + (\sqrt{6})^2} = \sqrt{8} = 2\sqrt{2}$ ; donc : $z_1 = 2\sqrt{2}\left(\frac{1}{2} + i\frac{\sqrt{3}}{2}\right)$. Par suite : $z_1 = 2\sqrt{2}\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right)$ est une forme trigonométrique du nombre $z_1$. Ainsi : $z_1 = \left[2\sqrt{2}; \frac{\pi}{3}\right]$.
>   - On a : $z_2 = 3\left(-\cos\frac{\pi}{5} - i\sin\frac{\pi}{5}\right) = 3\left(\cos\left(\frac{\pi}{5} + \pi\right) + i\sin\left(\frac{\pi}{5} + \pi\right)\right) = 3\left(\cos\frac{6\pi}{5} + i\sin\frac{6\pi}{5}\right)$. Par suite : $z_2 = 3\left(\cos\frac{6\pi}{5} + i\sin\frac{6\pi}{5}\right)$ est une forme trigonométrique du nombre $z_2$. Ainsi : $z_2 = \left[3; \frac{6\pi}{5}\right]$.
>   - On a : $|z_3| = \sqrt{\left(\frac{\sqrt{3}}{3}\right)^2 + (-1)^2} = \sqrt{\frac{4}{3}} = \frac{2\sqrt{3}}{3}$ ; donc : $z_3 = \frac{2\sqrt{3}}{3}\left(\frac{1}{2} - i\frac{\sqrt{3}}{2}\right)$. Par suite : $z_3 = \frac{2\sqrt{3}}{3}\left(\cos\left(-\frac{\pi}{3}\right) + i\sin\left(-\frac{\pi}{3}\right)\right)$ est une forme trigonométrique du nombre $z_3$. Ainsi : $z_3 = \left[\frac{2\sqrt{3}}{3}; -\frac{\pi}{3}\right]$.
>   - On a : $|z_4| = |-5|\cdot|1 - i| = 5\sqrt{2}$ ; donc : $z_4 = 5\sqrt{2}\left(-\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right)$. Par suite : $z_4 = 5\sqrt{2}\left(\cos\frac{3\pi}{4} + i\sin\frac{3\pi}{4}\right)$ est une forme trigonométrique du nombre $z_4$. Ainsi : $z_4 = \left[5\sqrt{2}; \frac{3\pi}{4}\right]$.
>   - On a : $z_5 = -3\sqrt{2} - \sqrt{6}i$, donc : $|z_5| = \sqrt{(-3\sqrt{2})^2 + (-\sqrt{6})^2} = \sqrt{24} = 2\sqrt{6}$. Par conséquent : $z_5 = 2\sqrt{6}\left(-\frac{\sqrt{3}}{2} - \frac{1}{2}i\right) = 2\sqrt{6}\left(\cos\left(-\frac{5\pi}{6}\right) + i\sin\left(-\frac{5\pi}{6}\right)\right)$ est une forme trigonométrique du nombre complexe $z_5$. Ainsi : $z_5 = \left[2\sqrt{6}; -\frac{5\pi}{6}\right]$.
>
> 2) Soit $\alpha \in \left]-\frac{\pi}{2}; \frac{3\pi}{2}\right] - \left\{\frac{\pi}{2}\right\}$. Déterminons une forme trigonométrique du nombre $z = 1 + i\tan\alpha$ :
>   On a : $z = 1 + i\tan\alpha = 1 + i\dfrac{\sin\alpha}{\cos\alpha} = \dfrac{1}{\cos\alpha}(\cos\alpha + i\sin\alpha)$. On peut distinguer deux cas :
>   - Si $\alpha \in \left]-\frac{\pi}{2}; \frac{\pi}{2}\right[$ alors $\cos\alpha > 0$ et donc : $z = \dfrac{1}{\cos\alpha}(\cos\alpha + i\sin\alpha)$. Ainsi : $z = \left[\dfrac{1}{\cos\alpha}; \alpha\right]$.
>   - Si $\alpha \in \left]\frac{\pi}{2}; \frac{3\pi}{2}\right[$ alors $\cos\alpha < 0$ et donc : $z = -\dfrac{1}{\cos\alpha}(\cos(\pi + \alpha) + i\sin(\pi + \alpha))$. Ainsi : $z = \left[-\dfrac{1}{\cos\alpha}; \pi + \alpha\right]$.

> **Applications.**
> 1. Donner une forme trigonométrique de chacun des nombres complexes suivants :
$$z_1 = -2\left(\cos\frac{3\pi}{7} - i\sin\frac{3\pi}{7}\right) \quad ; \quad z_2 = \sqrt{5}\left(\cos\frac{2\pi}{11} - i\sin\frac{2\pi}{11}\right) \quad ; \quad z_3 = \frac{1}{4}\left(\sin\frac{\pi}{9} + i\cos\frac{\pi}{9}\right)$$
> 2. Déterminer une forme trigonométrique de chacun des nombres complexes suivants :
$$Z_1 = \sqrt{15} + 3\sqrt{5}i \quad ; \quad Z_2 = -2\sqrt{3}i - 2 \quad ; \quad Z_3 = 1 - \sqrt{3} + (\sqrt{3} - 1)i \quad ; \quad Z_4 = \sqrt{3} - \frac{1}{2} + \frac{1 - 2\sqrt{3}}{2}i$$
> 3. Soit $\alpha \in \mathbb{R}$. Donner une forme trigonométrique de chacun des nombres complexes suivants :
$$u_1 = \cos\alpha - i\sin\alpha \quad ; \quad u_2 = -\cos\alpha + i\sin\alpha \quad ; \quad u_3 = -\cos\alpha - i\sin\alpha \quad ; \quad u_4 = \sin\alpha + i\cos\alpha$$
$$u_5 = \sin\alpha - i\cos\alpha \quad ; \quad u_6 = -\sin\alpha + i\cos\alpha \quad ; \quad u_7 = -\sin\alpha - i\cos\alpha$$
> 4. Soit $\theta$ un nombre réel de l'intervalle $\left]-\frac{\pi}{2}; 0\right[$. Déterminer une forme trigonométrique du nombre complexe $Z$ défini par : $Z = \sin(2\theta) - 2i\cos^2\theta$.
> 5. Soit $\theta$ un nombre réel tel que $\sin(2\theta) \neq 0$. Déterminer, selon les valeurs de $\theta$, une écriture trigonométrique de chacun des nombres complexes :
$$A = 1 + \cos(2\theta) + i\sin(2\theta) \quad ; \quad B = 1 - \sin(2\theta) + i\cos(2\theta) \quad ; \quad C = 1 - \cos(2\theta) + i\sin(2\theta)$$
> 6. Soit $z = a + ib$ un nombre complexe tel que $a \in \mathbb{R}^*$ et $b \in \mathbb{R}$. Montrer que :
$$\begin{cases} \arg(z) \equiv \operatorname{Arctan}\left(\frac{b}{a}\right) \quad [2\pi] \text{ si } a > 0 \\ \arg(z) \equiv \pi + \operatorname{Arctan}\left(\frac{b}{a}\right) \quad [2\pi] \text{ si } a < 0 \end{cases}$$

> **Proposition 21.**
> Pour des nombres complexes non nuls $z$ et $z'$, on a :
> 1) $z' = z \Leftrightarrow (|z'| = |z|$ et $\arg(z') \equiv \arg(z) \,[2\pi])$ ;
> 2) $z' = \overline{z} \Leftrightarrow (|z'| = |z|$ et $\arg(z') \equiv -\arg(z) \,[2\pi])$ ;
> 3) $z' = -z \Leftrightarrow (|z'| = |z|$ et $\arg(z') \equiv \pi + \arg(z) \,[2\pi])$.

> **Preuve.**
> - Pour 1), il suffit de noter que $z = |z|(\cos\theta + i\sin\theta)$ et $z' = |z'|(\cos\theta' + i\sin\theta')$, où $\theta$ est un argument de $z$ et $\theta'$ un argument de $z'$.
> - Pour 2), on a : $\overline{z} = |z|(\cos\theta - i\sin\theta) = |\overline{z}|(\cos(-\theta) + i\sin(-\theta))$.
> - Pour 3), on a : $-z = |z|(-\cos\theta - i\sin\theta) = |-z|(\cos(\pi + \theta) + i\sin(\pi + \theta))$.

> **Corollaire.**
> Soit $z$ un nombre complexe non nul. Si $z = [r; \theta]$ alors : $\overline{z} = [r; -\theta]$ et $-z = [r; \pi + \theta]$. En particulier, on a : $\arg(\overline{z}) \equiv -\arg(z) \,[2\pi]$ et $\arg(-z) \equiv \pi + \arg(z) \,[2\pi]$.

> **Proposition 22.**
> Soit $z$ et $z'$ deux nombres complexes non nuls tels que : $z = [r; \theta]$ et $z' = [r'; \theta']$. On a les relations suivantes :
> 1) $zz' = [rr'; \theta + \theta']$ et $\arg(zz') \equiv \arg(z) + \arg(z') \,[2\pi]$ ;
> 2) $\dfrac{1}{z} = \left[\dfrac{1}{r}; -\theta\right]$ et $\arg\left(\dfrac{1}{z}\right) \equiv -\arg(z) \,[2\pi]$ ;
> 3) $\dfrac{z}{z'} = \left[\dfrac{r}{r'}; \theta - \theta'\right]$ et $\arg\left(\dfrac{z}{z'}\right) \equiv \arg(z) - \arg(z') \,[2\pi]$ ;
> 4) Pour tout $n \in \mathbb{Z}$ : $z^n = [r^n; n\theta]$ et $\arg(z^n) \equiv n\arg(z) \,[2\pi]$.

> **Preuve.**
> Soit $z$ et $z'$ deux nombres complexes non nuls tels que : $z = [r; \theta]$ et $z' = [r'; \theta']$. Autrement dit : $z = r(\cos\theta + i\sin\theta)$ et $z' = r'(\cos\theta' + i\sin\theta')$.
> 1) On a : $z \cdot z' = rr'(\cos\theta + i\sin\theta)(\cos\theta' + i\sin\theta') = rr'\left((\cos\theta\cos\theta' - \sin\theta\sin\theta') + i(\sin\theta\cos\theta' + \cos\theta\sin\theta')\right)$. Par conséquent : $z \cdot z' = rr'(\cos(\theta + \theta') + i\sin(\theta + \theta'))$. Ainsi : $z \cdot z' = [rr'; \theta + \theta']$ et $\arg(z \cdot z') \equiv \arg(z) + \arg(z') \,[2\pi]$.
> 2) Puisque $z \cdot \frac{1}{z} = 1$ alors $z \cdot \frac{1}{z} = [1; 0]$. D'après les résultats de 1) : $|z|\left|\frac{1}{z}\right| = 1$ et $\arg(z) + \arg\left(\frac{1}{z}\right) \equiv 0 \,[2\pi]$. Par suite : $\frac{1}{z} = \left[\frac{1}{r}; -\theta\right]$ et $\arg\left(\frac{1}{z}\right) \equiv -\arg(z) \,[2\pi]$.
> 3) De l'égalité $\frac{z}{z'} = z \times \frac{1}{z'}$ et les résultats 1) et 2) on tire : $\left|\frac{z}{z'}\right| = |z| \times \left|\frac{1}{z'}\right| = \frac{r}{r'}$ et $\arg\left(\frac{z}{z'}\right) \equiv \arg(z) + \arg\left(\frac{1}{z'}\right) \,[2\pi]$. Par suite : $\frac{z}{z'} = \left[\frac{r}{r'}; \theta - \theta'\right]$ et $\arg\left(\frac{z}{z'}\right) \equiv \arg(z) - \arg(z') \,[2\pi]$.
> 4) Montrons par récurrence que pour tout $n \in \mathbb{N}$ : $z^n = [r^n; n\theta]$.
>   - **Initialisation** : on a pour $n = 0$, $z^0 = 1 = [1; 0] = [r^0; 0]$.
>   - **Hérédité** : soit $n \in \mathbb{N}$. Supposons que $z^n = [r^n; n\theta]$ et montrons que $z^{n+1} = [r^{n+1}; (n+1)\theta]$. On a : $z^{n+1} = z^n \times z = [r^n; n\theta] \times [r; \theta] = [r^n r; n\theta + \theta] = [r^{n+1}; (n+1)\theta]$.
>   - **Conclusion** : pour tout $n \in \mathbb{N}$, $z^n = [r^n; n\theta]$.
>
>   Si $n \in \mathbb{Z}^-$ alors $-n \in \mathbb{N}$, et donc : $z^n = \left(\frac{1}{z}\right)^{-n} = \left[\left(\frac{1}{r}\right)^{-n}; -n \times (-\theta)\right] = [r^n; n\theta]$. Par suite : $z^n = [r^n; n\theta]$ et $\arg(z^n) \equiv n\arg(z) \,[2\pi]$.

> **Remarques.**
> - Soit $n$ un entier supérieur ou égal à 2, et $z_1, z_2, \dots, z_n$ des nombres complexes non nuls. Alors : $\arg\left(\prod_{k=1}^n z_k\right) \equiv \sum_{k=1}^n \arg(z_k) \,[2\pi]$.
> - Si $z_1$ et $z_2$ sont deux nombres complexes non nuls tels que $z_1 + z_2 \neq 0$, alors on n'a pas en général $\arg(z_1 + z_2) \equiv \arg(z_1) + \arg(z_2) \,[2\pi]$. Contre-exemple : $\arg(1) + \arg(i) \equiv \frac{\pi}{2} \,[2\pi]$ et $\arg(1+i) \equiv \frac{\pi}{4} \,[2\pi]$, et $\frac{\pi}{2} \not\equiv \frac{\pi}{4} \,[2\pi]$.
> - Soit $z$ et $z'$ deux nombres complexes non nuls, et soit $M$ et $M'$ leurs images respectives dans le plan rapporté à un repère orthonormé $(O; \vec{\imath}, \vec{\jmath})$. À partir de la proposition 22, on peut déduire que le point $P(zz')$ est le point du plan complexe tel que : $OP = OM \times OM'$ et $\left(\widehat{\vec{\imath}, \overrightarrow{OP}}\right) \equiv \left(\widehat{\vec{\imath}, \overrightarrow{OM}}\right) + \left(\widehat{\vec{\imath}, \overrightarrow{OM'}}\right) \,[2\pi]$.

> **Exemples.**
> 1) On considère les nombres complexes : $a = (1-i)^{17}$, $b = (\sqrt{3}+i)^5$ et $z = \frac{a}{b}$. Déterminons une forme trigonométrique et la forme algébrique de chacun des nombres $a$, $b$ et $z$ puis déduisons-en les valeurs de $\cos\frac{\pi}{12}$ et $\sin\frac{\pi}{12}$ :
>   - Pour le nombre $a$ : On a $|1-i| = \sqrt{2}$ et $1-i = \sqrt{2}\left(\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i\right) = \sqrt{2}\left(\cos\left(-\frac{\pi}{4}\right) + i\sin\left(-\frac{\pi}{4}\right)\right)$, donc $1-i = \left[\sqrt{2}; -\frac{\pi}{4}\right]$ et $a = (1-i)^{17} = \left[\sqrt{2}; -\frac{\pi}{4}\right]^{17} = \left[(\sqrt{2})^{17}; -\frac{17\pi}{4}\right] = \left[256\sqrt{2}; -\frac{\pi}{4}\right]$.
>   Par conséquent, une forme trigonométrique du nombre $a$ est : $a = \left[256\sqrt{2}; -\frac{\pi}{4}\right]$. On a : $a = 256\sqrt{2}\left(\cos\left(-\frac{\pi}{4}\right) + i\sin\left(-\frac{\pi}{4}\right)\right) = 256\sqrt{2}\left(\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i\right) = 256 - 256i$.
>   - Pour le nombre $b$ : On a $|\sqrt{3} + i| = 2$ et $\sqrt{3} + i = 2\left(\frac{\sqrt{3}}{2} + \frac{1}{2}i\right) = 2\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)$, donc $\sqrt{3} + i = \left[2; \frac{\pi}{6}\right]$ et $b = (\sqrt{3} + i)^5 = \left[2; \frac{\pi}{6}\right]^5 = \left[32; \frac{5\pi}{6}\right]$.
>   Par conséquent, une forme trigonométrique du nombre $b$ est : $b = \left[32; \frac{5\pi}{6}\right]$. On a : $b = 32\left(\cos\frac{5\pi}{6} + i\sin\frac{5\pi}{6}\right) = 32\left(-\frac{\sqrt{3}}{2} + \frac{1}{2}i\right) = -16\sqrt{3} + 16i$.
>   - Pour le nombre $z$ : On a $z = \frac{a}{b} = \frac{256(1-i)}{-16(\sqrt{3}-i)} = \frac{-16(1-i)(\sqrt{3}+i)}{4}$. Donc la forme algébrique du nombre $z$ est : $z = -4(\sqrt{3}+1) + 4i(\sqrt{3}-1)$.
>   On peut obtenir une forme trigonométrique du nombre $z$ de la façon suivante :
$$z = \frac{a}{b} = \frac{\left[256\sqrt{2}; -\frac{\pi}{4}\right]}{\left[32; \frac{5\pi}{6}\right]} = \left[\frac{256\sqrt{2}}{32}; -\frac{\pi}{4} - \frac{5\pi}{6}\right] = \left[8\sqrt{2}; -\frac{13\pi}{12}\right]. \quad \text{Ainsi : } z = \left[8\sqrt{2}; \frac{11\pi}{12}\right].$$
>   Déterminons maintenant les valeurs des nombres $\cos\frac{\pi}{12}$ et $\sin\frac{\pi}{12}$ : on a $z = 8\sqrt{2}\left(\cos\frac{11\pi}{12} + i\sin\frac{11\pi}{12}\right) = -4(\sqrt{3}+1) + 4i(\sqrt{3}-1)$. Il s'ensuit donc :
$$\cos\frac{11\pi}{12} = \frac{-4(\sqrt{3}+1)}{8\sqrt{2}} = -\frac{\sqrt{6}+\sqrt{2}}{4} \quad \text{et} \quad \sin\frac{11\pi}{12} = \frac{4(\sqrt{3}-1)}{8\sqrt{2}} = \frac{\sqrt{6}-\sqrt{2}}{4}$$
>   D'où : $\cos\frac{\pi}{12} = -\cos\left(\pi - \frac{\pi}{12}\right) = -\cos\frac{11\pi}{12} = \frac{\sqrt{6}+\sqrt{2}}{4}$ et $\sin\frac{\pi}{12} = \sin\left(\pi - \frac{\pi}{12}\right) = \sin\frac{11\pi}{12} = \frac{\sqrt{6}-\sqrt{2}}{4}$.
>
> 2) On considère les nombres complexes : $z_1 = 2 + 2i$ et $z_2 = 1 + i\sqrt{3}$. Déterminons une forme trigonométrique de chacun des nombres : $z_1 \times z_2$ ; $\frac{1}{z_1}$ ; $-z_2$ ; $\frac{\overline{z_1}^4}{z_2}$.
>   Déterminons tout d'abord des formes trigonométriques de $z_1$ et $z_2$ : on a $|z_1| = 2\sqrt{2}$ et $|z_2| = 2$, et donc : $z_1 = 2\sqrt{2}\left(\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i\right) = 2\sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) = \left[2\sqrt{2}; \frac{\pi}{4}\right]$, et $z_2 = 2\left(\frac{1}{2} + \frac{\sqrt{3}}{2}i\right) = 2\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right) = \left[2; \frac{\pi}{3}\right]$.
>   Déterminons ensuite une écriture trigonométrique de chacun des nombres suivants :
$$\begin{aligned} \bullet\ z_1 \times z_2 &= \left[2\sqrt{2}; \frac{\pi}{4}\right] \times \left[2; \frac{\pi}{3}\right] = \left[4\sqrt{2}; \frac{7\pi}{12}\right]. \\ \bullet\ \frac{1}{z_1} &= \left[\frac{1}{2\sqrt{2}}; -\frac{\pi}{4}\right] = \left[\frac{\sqrt{2}}{4}; -\frac{\pi}{4}\right], \quad -z_2 = \left[2; \pi + \frac{\pi}{3}\right] = \left[2; \frac{4\pi}{3}\right] = \left[2; -\frac{2\pi}{3}\right]. \\ \bullet\ \frac{\overline{z_1}^4}{z_2} &= \frac{\left[2\sqrt{2}; -\frac{\pi}{4}\right]^4}{\left[2; \frac{\pi}{3}\right]} = \frac{\left[64; -\pi\right]}{\left[2; \frac{\pi}{3}\right]} = \left[32; -\frac{4\pi}{3}\right] = \left[32; \frac{2\pi}{3}\right]. \end{aligned}$$
>   Signalons enfin que tout nombre complexe non nul admet une infinité de formes trigonométriques ; et en pratique on prend souvent l'argument appartenant à l'intervalle $]-\pi; \pi]$ et parfois $[0; 2\pi[$.

> **Applications.**
> 1. Soit $\theta$ un nombre réel. Écrire sous forme trigonométrique chacun des nombres suivants :
$$z_1 = (1 - i\sqrt{3})(1+i)(\cos\theta - i\sin\theta) \quad \text{et} \quad z_2 = (1 + i\sqrt{3})(1-i)(\cos\theta + i\sin\theta)$$
> 2. On considère le nombre complexe : $z = \sqrt{2 - \sqrt{3}} - i\sqrt{2 + \sqrt{3}}$.
>    a) Calculer $z^2$ puis $|z^2|$ et $\arg(z^2)$.
>    b) En déduire une écriture trigonométrique du nombre complexe $z$.
>    c) Construire dans le plan complexe les points $A(z)$, $B(-z)$ et $C(z^2)$.
>    d) Déduire de ce qui précède, les valeurs de $\cos\frac{5\pi}{12}$ et $\sin\frac{5\pi}{12}$ puis celles de $\cos\frac{\pi}{12}$ et $\sin\frac{\pi}{12}$.
>    e) Vérifier que $z^{2016} \in \mathbb{R}^+$.
> 3. Soit $z$ un nombre complexe tel que $z \notin \mathbb{R}^-$. Montrer que : $2\arg(z + |z|) \equiv \arg(z) \,[2\pi]$.
> 4. Soit $z_1$ et $z_2$ deux nombres complexes non nuls tels que : $|z_1| = |z_2|$ et $z_1 + z_2 \neq 0$. Déterminer $\arg(z_1 + z_2)$ en fonction de $\arg(z_1)$ et $\arg(z_2)$.
> 5. Soit $n \in \mathbb{N}$. Déterminer la forme algébrique du nombre complexe : $u_n = (1 + i)^n - (1 + i\sqrt{3})^n$.
> 6. Soit $\theta$ un réel de l'intervalle $\left]-\frac{\pi}{2}; \frac{\pi}{2}\right[$. Écrire sous forme trigonométrique le nombre $z = \dfrac{\tan\theta}{1 + i\tan\theta}$.
> 7. Soit $\alpha \in \left]0; \frac{\pi}{4}\right[$. Déterminer le module et un argument du nombre : $Z = \dfrac{1 + \cos\alpha + i\sin\alpha}{\sqrt{1 + \sin(2\alpha)} + i\sqrt{1 - \sin(2\alpha)}}$.

#### 6.3. Angle de deux vecteurs et argument d'un complexe

On rappelle que le plan complexe $\mathcal{P}$ est rapporté à un repère orthonormé direct $(O; \vec{\imath}, \vec{\jmath})$.

> **Proposition 23.**
> Soit $\vec{u}$ et $\vec{v}$ deux vecteurs non nuls d'affixes respectives $z$ et $z'$, et soit $A$, $B$, $C$ et $D$ des points du plan complexe d'affixes respectives $z_A$, $z_B$, $z_C$ et $z_D$ tels que $A \neq B$ et $C \neq D$. Alors le nombre complexe $\frac{z'}{z}$ a pour argument toute mesure de l'angle $\left(\widehat{\vec{u}, \vec{v}}\right)$. Ainsi :
> 1) $\left(\widehat{\vec{\imath}, \vec{u}}\right) \equiv \arg(z) \,[2\pi]$ et $\left(\widehat{\vec{\imath}, \overrightarrow{AB}}\right) \equiv \arg(z_B - z_A) \,[2\pi]$ (argument de l'affixe du vecteur $\overrightarrow{AB}$) ;
> 2) $\left(\widehat{\vec{u}, \vec{v}}\right) \equiv \arg\left(\frac{z'}{z}\right) \,[2\pi]$ et $\left(\widehat{\overrightarrow{AB}, \overrightarrow{CD}}\right) \equiv \arg\left(\frac{z_D - z_C}{z_B - z_A}\right) \,[2\pi]$.

> **Preuve.**
> On a par définition de l'argument : $\left(\widehat{\vec{\imath}, \vec{u}}\right) \equiv \arg(z) \,[2\pi]$ et $\left(\widehat{\vec{\imath}, \vec{v}}\right) \equiv \arg(z') \,[2\pi]$. D'après la relation de Chasles :
$$\left(\widehat{\vec{u}, \vec{v}}\right) \equiv \left(\widehat{\vec{u}, \vec{\imath}}\right) + \left(\widehat{\vec{\imath}, \vec{v}}\right) \equiv \left(\widehat{\vec{\imath}, \vec{v}}\right) - \left(\widehat{\vec{\imath}, \vec{u}}\right) \equiv \arg(z') - \arg(z) \,[2\pi]$$
> Par conséquent : $\left(\widehat{\vec{u}, \vec{v}}\right) \equiv \arg\left(\frac{z'}{z}\right) \,[2\pi]$. Les résultats cités en 1) et 2) en découlent immédiatement en tenant compte du fait que l'affixe du vecteur $\overrightarrow{AB}$ est $z_B - z_A$, et celui de $\vec{\imath}$ est $1$.

> **Exemple.**
> Soit $A$, $B$ et $C$ les points du plan d'affixes respectives : $a = 2 + i$, $b = 3 + 2i$ et $c = 5 - i$. Soit $\alpha$ une mesure de l'angle orienté $\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right)$. Calculons $\tan\alpha$ :
> On a : $\alpha \equiv \arg\left(\frac{c-a}{b-a}\right) \,[2\pi]$ et $c-a = 3 - 2i$ et $b-a = 1 + i$ ; donc : $\dfrac{c-a}{b-a} = \dfrac{3-2i}{1+i} = \dfrac{1-5i}{2}$.
> Il en résulte alors $\left|\frac{c-a}{b-a}\right| = \sqrt{\frac{1}{4} + \frac{25}{4}} = \frac{\sqrt{26}}{2}$, et donc : $\sqrt{26}\cos\alpha = 1$ et $\sqrt{26}\sin\alpha = -5$ ; il s'ensuit donc : $\cos\alpha = \frac{1}{\sqrt{26}}$ et $\sin\alpha = -\frac{5}{\sqrt{26}}$. Par suite : $\tan\alpha = -5$.

> **Rappel.** Relation de Chasles pour les mesures des angles orientés : $\left(\widehat{\vec{u}, \vec{w}}\right) \equiv \left(\widehat{\vec{u}, \vec{v}}\right) + \left(\widehat{\vec{v}, \vec{w}}\right) \,[2\pi]$, où $\vec{u}$, $\vec{v}$ et $\vec{w}$ sont des vecteurs non nuls.

> **Proposition 24.**
> Soit $\vec{u}$ et $\vec{v}$ deux vecteurs non nuls d'affixes respectives $z$ et $z'$, et soit $A$, $B$, $C$ et $D$ des points deux à deux distincts du plan complexe d'affixes respectives $z_A$, $z_B$, $z_C$ et $z_D$. On a :
> 1) Les vecteurs $\vec{u}$ et $\vec{v}$ sont colinéaires si, et seulement si, $\arg\left(\frac{z'}{z}\right) \equiv 0 \,[\pi]$ (c'est-à-dire $\frac{z'}{z} \in \mathbb{R}$). Et : $(AB) \parallel (CD) \Leftrightarrow \arg\left(\frac{z_D - z_C}{z_B - z_A}\right) \equiv 0 \,[\pi]$.
> 2) Les vecteurs $\vec{u}$ et $\vec{v}$ sont orthogonaux si, et seulement si, $\arg\left(\frac{z'}{z}\right) \equiv \frac{\pi}{2} \,[\pi]$ (c'est-à-dire $\frac{z'}{z} \in i\mathbb{R}$). Et : $(AB) \perp (CD) \Leftrightarrow \arg\left(\frac{z_D - z_C}{z_B - z_A}\right) \equiv \frac{\pi}{2} \,[\pi]$.
> 3) Les points $A$, $B$, $C$ et $D$ sont alignés ou cocycliques (appartenant au même cercle) si, et seulement si : $\left(\frac{z_C - z_A}{z_B - z_A} \div \frac{z_C - z_D}{z_B - z_D}\right) \in \mathbb{R}$.

> **Exemple.**
> Soit $A$, $B$ et $C$ les points du plan complexe d'affixes respectives : $a = 2i$, $b = \sqrt{2}(1+i)$ et $c = a+b$. Montrons que $OBCA$ est un losange et que $\arg(c) \equiv \frac{3\pi}{8} \,[2\pi]$ :
> - De l'égalité $c = a + b$ on tire $\overrightarrow{OC} = \overrightarrow{OA} + \overrightarrow{OB}$, ce qui signifie que $OBCA$ est un parallélogramme. On a de plus $OA = OB$ car : $|a| = |2i| = 2$ et $|b| = |\sqrt{2}(1+i)| = 2$. Ainsi, $OBCA$ est un losange car c'est un parallélogramme ayant deux côtés consécutifs de même longueur.
> - On a : $\arg(c) \equiv \left(\widehat{\vec{\imath}, \overrightarrow{OC}}\right) \,[2\pi]$
$$\begin{aligned} & \equiv \left(\widehat{\vec{\imath}, \overrightarrow{OB}}\right) + \left(\widehat{\overrightarrow{OB}, \overrightarrow{OC}}\right) \,[2\pi] \\ & \equiv \left(\widehat{\vec{\imath}, \overrightarrow{OB}}\right) + \frac{1}{2}\left(\widehat{\overrightarrow{OB}, \overrightarrow{OA}}\right) \,[2\pi] \quad (\text{car } OBCA \text{ est un losange}) \\ & \equiv \arg(b) + \frac{1}{2}\arg\left(\frac{a}{b}\right) \,[2\pi] \\ & \equiv \frac{1}{2}(\arg(a) + \arg(b)) \,[2\pi] \end{aligned}$$
>   Un calcul immédiat nous donne $\arg(a) \equiv \frac{\pi}{2} \,[2\pi]$ et $\arg(b) \equiv \frac{\pi}{4} \,[2\pi]$. Ainsi : $\arg(c) \equiv \frac{3\pi}{8} \,[2\pi]$.

> **Applications.**
> 1. Dans le plan complexe, on considère trois points $A$, $B$, $C$ deux à deux distincts, d'affixes respectives $a$, $b$, $c$. On suppose que $a + bj + cj^2 = 0$ avec $j = -\frac{1}{2} + i\frac{\sqrt{3}}{2}$. Montrer que $1 + j + j^2 = 0$ et en déduire la nature du triangle $ABC$.
> 2. On considère le nombre complexe $a = 1 + i\sqrt{3}$ et on pose : $b = \overline{a}$ et $c = a^2$ et $d = \frac{2}{a}$. Montrer que les points $A(a)$, $B(b)$, $C(c)$ et $D(d)$ sont cocycliques.
> 3. Déterminer l'ensemble des points $A(z)$ tels que les points $A(z)$, $B(z^2)$ et $C(z^3)$ forment un triangle rectangle.

#### 6.4. Notation exponentielle d'un nombre complexe non nul

> **Définition 10.**
> Pour tout réel $\theta$, on note $e^{i\theta}$ le nombre complexe de module 1 et d'argument $\theta$. Autrement dit : $e^{i\theta} = \cos\theta + i\sin\theta$.

> **Exemple.**
> $e^{i\pi} = -1$ ; $e^{i\frac{\pi}{3}} = \frac{1}{2} + \frac{\sqrt{3}}{2}i$ ; $e^{i\frac{2\pi}{3}} = -\frac{1}{2} + i\frac{\sqrt{3}}{2} = j$ ; $e^{i\frac{\pi}{2}} = i$ ; $e^{i\frac{2017\pi}{4}} = \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}$ ; $e^{i\frac{3\pi}{2}} = -i$.

> **Remarques.**
> - D'après la définition 10, les nombres complexes de la forme $e^{i\theta}$ (avec $\theta \in \mathbb{R}$) sont les affixes des points du plan complexe situés sur le cercle trigonométrique, et inversement, tout point du cercle trigonométrique a une affixe de la forme $e^{i\theta}$ (avec $\theta \in \mathbb{R}$).
> - Par convention, on écrit pour tout $\theta \in \mathbb{R}$ : $\overline{e^{i\theta}} = e^{-i\theta}$.
> - Lorsque $\theta = 0$, alors on a $e^{i0} = 1$ ; ainsi, cette nouvelle définition est donc compatible avec la valeur que donne en 0 la fonction exponentielle déjà connue sur $\mathbb{R}$.

> **Proposition 25.**
> Soit $\theta$ et $\theta'$ deux nombres réels. Alors :
> 1) $|e^{i\theta}| = 1$ et $\arg(e^{i\theta}) \equiv \theta \,[2\pi]$ ;
> 2) $e^{i\theta} \times e^{i\theta'} = e^{i(\theta+\theta')}$ ;
> 3) $e^{-i\theta} = \overline{e^{i\theta}} = \dfrac{1}{e^{i\theta}} = \cos\theta - i\sin\theta$ ;
> 4) $\dfrac{e^{i\theta}}{e^{i\theta'}} = e^{i(\theta-\theta')}$ ;
> 5) $e^{i\theta} = e^{i\theta'} \Leftrightarrow \theta \equiv \theta' \,[2\pi]$ ;
> 6) $-e^{i\theta} = e^{i(\theta+\pi)}$.

> **Définition 11.**
> Soit $z$ un nombre complexe non nul de module $r$ et d'argument $\theta$. L'écriture $z = re^{i\theta}$ est appelée la notation exponentielle ou l'écriture exponentielle du nombre $z$.

> **Exemples.**
> - La notation exponentielle du nombre $a = 1 + i\sqrt{3}$ est : $a = 2e^{i\frac{\pi}{3}}$.
> - La notation exponentielle du nombre $b = -3$ est : $b = 3e^{i\pi}$.
> - La notation exponentielle du nombre $c = -4\cos\frac{\pi}{7} + 4i\sin\frac{\pi}{7}$ est : $c = 4e^{i\frac{6\pi}{7}}$.

> **Proposition 26.**
> - Pour tout réel $\theta$ et pour tout entier relatif $n$, on a $(e^{i\theta})^n = e^{in\theta}$ ou encore, par définition de $e^{i\theta}$ :
$$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta) \quad \text{« Formule de Moivre »}$$
> - Pour tout réel $\theta$ :
$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2} \quad \text{et} \quad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i} \quad \text{« Formules d'Euler »}$$

> **Exemples.**
> 1) Soit $\theta$ un nombre réel. On pose : $z = 1 + \cos\theta + i\sin\theta$ et $z' = 1 + \sin\theta - i\cos\theta$ et $u = \frac{z}{z'}$.
>   - On a : $z = 1 + e^{i\theta} = e^{i\frac{\theta}{2}}e^{-i\frac{\theta}{2}} + \left(e^{i\frac{\theta}{2}}\right)^2 = e^{i\frac{\theta}{2}}\left(e^{i\frac{\theta}{2}} + e^{-i\frac{\theta}{2}}\right)$. D'après les formules d'Euler, on a $e^{i\frac{\theta}{2}} + e^{-i\frac{\theta}{2}} = 2\cos\left(\frac{\theta}{2}\right)$ ; donc : $z = 2\cos\left(\frac{\theta}{2}\right)e^{i\frac{\theta}{2}}$. Ainsi :
>     - Si $\cos\left(\frac{\theta}{2}\right) > 0$, alors : $|z| = 2\cos\left(\frac{\theta}{2}\right)$ et $\arg(z) \equiv \frac{\theta}{2} \,[2\pi]$.
>     - Si $\cos\left(\frac{\theta}{2}\right) < 0$, alors : $|z| = -2\cos\left(\frac{\theta}{2}\right)$ et $\arg(z) \equiv \pi + \frac{\theta}{2} \,[2\pi]$.
>     - Si $\cos\left(\frac{\theta}{2}\right) = 0$, alors : $z = 0$ (l'argument de $z$ n'est pas défini).
>   - On a : $z' = 1 + \cos\left(\theta - \frac{\pi}{2}\right) + i\sin\left(\theta - \frac{\pi}{2}\right) = 1 + e^{i\left(\theta - \frac{\pi}{2}\right)} = 2\sin\left(\frac{\pi}{4} + \frac{\theta}{2}\right)e^{i\left(\frac{\theta}{2} - \frac{\pi}{4}\right)}$. Ainsi :
>     - Si $\sin\left(\frac{\pi}{4} + \frac{\theta}{2}\right) > 0$, alors : $|z'| = 2\sin\left(\frac{\pi}{4} + \frac{\theta}{2}\right)$ et $\arg(z') \equiv \frac{\theta}{2} - \frac{\pi}{4} \,[2\pi]$.
>     - Si $\sin\left(\frac{\pi}{4} + \frac{\theta}{2}\right) < 0$, alors : $|z'| = -2\sin\left(\frac{\pi}{4} + \frac{\theta}{2}\right)$ et $\arg(z') \equiv \frac{\theta}{2} + \frac{3\pi}{4} \,[2\pi]$.
>     - Si $\sin\left(\frac{\pi}{4} + \frac{\theta}{2}\right) = 0$, alors : $z' = 0$ (l'argument de $z'$ n'est pas défini).
>   - En supposant $\sin\left(\frac{\pi}{4} + \frac{\theta}{2}\right) \neq 0$, alors : $u = \dfrac{2\cos\left(\frac{\theta}{2}\right)e^{i\frac{\theta}{2}}}{2\sin\left(\frac{\pi}{4} + \frac{\theta}{2}\right)e^{i\left(\frac{\theta}{2} - \frac{\pi}{4}\right)}} = \dfrac{\cos\left(\frac{\theta}{2}\right)}{\sin\left(\frac{\pi}{4} + \frac{\theta}{2}\right)}e^{i\frac{\pi}{4}} = \dfrac{\sqrt{2}\cos\left(\frac{\theta}{2}\right)}{2\sin\left(\frac{\pi}{4} + \frac{\theta}{2}\right)}(1 + i)$.
>
> 2) Déterminons une forme algébrique du nombre complexe : $\left(\frac{1}{2} + i\frac{\sqrt{3}}{2}\right)^{2018}$.
>   On a d'après la formule de Moivre : $\left(\frac{1}{2} + i\frac{\sqrt{3}}{2}\right)^{2018} = \left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right)^{2018} = \cos\left(\frac{2018\pi}{3}\right) + i\sin\left(\frac{2018\pi}{3}\right)$. Par conséquent : $\left(\frac{1}{2} + i\frac{\sqrt{3}}{2}\right)^{2018} = \cos\left(\frac{2\pi}{3}\right) + i\sin\left(\frac{2\pi}{3}\right) = -\frac{1}{2} + \frac{\sqrt{3}}{2}i$, d'où le résultat.

> **Applications.**
> 1. Soit $\alpha$ et $\beta$ deux nombres réels quelconques.
>    a) Montrer que : $e^{i\alpha} + e^{i\beta} = 2\cos\left(\frac{\alpha - \beta}{2}\right)e^{i\left(\frac{\alpha + \beta}{2}\right)}$ et $e^{i\alpha} - e^{i\beta} = 2\sin\left(\frac{\alpha - \beta}{2}\right)e^{i\left(\frac{\alpha + \beta}{2} + \frac{\pi}{2}\right)}$.
>    b) On considère les nombres complexes suivants : $u = 1 + i\sqrt{3}$ ; $v = \sqrt{2}(1 + i)$ ; $t = (\sqrt{2} + 1) + i(\sqrt{2} + \sqrt{3})$ ; $z = 1 - (2 - \sqrt{3})i$. Écrire sous forme exponentielle les nombres $u$ et $v$ puis en déduire une écriture exponentielle de chacun des nombres complexes : $-v$ ; $u \cdot v$ ; $\frac{1}{u}$ ; $u^5 v^{-18}$ ; $t$ ; $z$ ; $\frac{z}{t}$.
>    c) On suppose dans cette question que $\cos\left(\frac{\alpha + \beta}{2}\right) \neq 0$. Donner une écriture exponentielle du nombre complexe : $\omega = \dfrac{e^{i\alpha}e^{i\beta}}{1 + e^{i(\alpha+\beta)}}$.
> 2. Pour tout $n \in \mathbb{Z}$, on pose : $A_n = (\sqrt{3} - i)^n + (\sqrt{3} + i)^n$. En utilisant la formule de Moivre, montrer l'équivalence suivante : $A_n = 2^{n+1} \Leftrightarrow n \equiv 0 \,[12]$.
> 3. Soit $\theta_1$ et $\theta_2$ deux réels et $n \in \mathbb{N}$. Si $z = e^{i\theta_1} + e^{i\theta_2}$, donner une expression simplifiée de $\operatorname{Re}(z^n)$.

#### 6.5. Applications trigonométriques des nombres complexes

La formule du binôme de Newton, la formule de Moivre et les formules d'Euler permettent de transformer certaines expressions trigonométriques.

**Développement de $\cos(n\theta)$ et $\sin(n\theta)$ :** Soit $n \in \mathbb{N}^*$ et $\theta \in \mathbb{R}$. On a :
$$\cos(n\theta) + i\sin(n\theta) = (\cos\theta + i\sin\theta)^n = \sum_{k=0}^n C_n^k \cos^{n-k}(\theta)\, i^k \sin^k(\theta)$$
En séparant les parties réelles et imaginaires, on en déduit les expressions de $\cos(n\theta)$ et $\sin(n\theta)$ en fonction de $\cos\theta$ et $\sin\theta$.

Voici quelques exemples pratiques :
- On a : $\cos(2\theta) + i\sin(2\theta) = (\cos\theta + i\sin\theta)^2 = \cos^2\theta - \sin^2\theta + 2i\sin\theta\cos\theta$, dont on déduit :
$$\cos(2\theta) = \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta \quad \text{et} \quad \sin(2\theta) = 2\sin\theta\cos\theta.$$
- On a : $\cos(3\theta) + i\sin(3\theta) = (\cos\theta + i\sin\theta)^3 = \cos^3\theta + 3i\cos^2\theta\sin\theta - 3\cos\theta\sin^2\theta - i\sin^3\theta$. On en déduit :
$$\begin{cases} \cos(3\theta) = \cos^3\theta - 3\cos\theta\sin^2\theta = 4\cos^3\theta - 3\cos\theta \\ \sin(3\theta) = 3\cos^2\theta\sin\theta - \sin^3\theta = -4\sin^3\theta + 3\sin\theta \end{cases}$$
On peut démontrer la formule plus générale suivante (à titre d'exercice). Pour tout $n \in \mathbb{N}^*$ :
$$\begin{cases} \cos(n\theta) = \displaystyle\sum_{p=0}^{E\left(\frac{n}{2}\right)} (-1)^p C_n^{2p} \cos^{n-2p}(\theta)\sin^{2p}(\theta) \\ \sin(n\theta) = \displaystyle\sum_{p=0}^{E\left(\frac{n-1}{2}\right)} (-1)^p C_n^{2p+1} \cos^{n-2p-1}(\theta)\sin^{2p+1}(\theta) \end{cases} \quad \left(E\left(\frac{n}{2}\right) \text{ étant la partie entière de } \frac{n}{2}\right)$$

**Linéarisation de $\cos^m\theta$, $\sin^n\theta$ et $\cos^m\theta\sin^n\theta$ pour $(m,n) \in \mathbb{N}^2$ :** Linéariser une expression du genre $\cos^m\theta$, $\sin^n\theta$ et $\cos^m\theta\sin^n\theta$, c'est la transformer en somme algébrique de termes du genre $a\cos(p\theta) + b\sin(q\theta)$ avec $(a;b) \in \mathbb{R}^2$ et $(p;q) \in \mathbb{N}^2$. Pour linéariser ces expressions, on utilise les formules d'Euler pour en déduire :
$$\cos^m\theta = \frac{1}{2^m}(e^{i\theta} + e^{-i\theta})^{m} \quad \text{et} \quad \sin^n\theta = \frac{1}{(2i)^n}(e^{i\theta} - e^{-i\theta})^n$$
On développe les expressions obtenues grâce au binôme de Newton, puis on fait réapparaître les fonctions cosinus et sinus. Voici quelques exemples pratiques :

**■ Linéarisation de $\cos^4 x$ :**
$$\cos^4 x = \left(\frac{e^{ix} + e^{-ix}}{2}\right)^4 = \frac{1}{16}\left(e^{4ix} + 4e^{2ix} + 6 + 4e^{-2ix} + e^{-4ix}\right) = \frac{1}{16}(2\cos(4x) + 8\cos(2x) + 6)$$
Par suite : $\cos^4 x = \dfrac{1}{8}(\cos(4x) + 4\cos(2x) + 3)$.

**■ Linéarisation de $\sin^5 x$ :**
$$\begin{aligned} \sin^5 x &= \left(\frac{e^{ix} - e^{-ix}}{2i}\right)^5 \\ &= \frac{-1}{32i}\left(e^{5ix} - 5e^{3ix} + 10e^{ix} - 10e^{-ix} + 5e^{-3ix} - e^{-5ix}\right) \\ &= \frac{-1}{32i}\left((e^{5ix} - e^{-5ix}) - 5(e^{3ix} - e^{-3ix}) + 10(e^{ix} - e^{-ix})\right) \end{aligned}$$
Par suite : $\sin^5 x = -\dfrac{1}{16}(\sin(5x) - 5\sin(3x) + 10\sin x)$.

**■ Linéarisation de $\cos^2(x)\sin^3(x)$ :**
On a : $\cos^2 x = \left(\frac{e^{ix} + e^{-ix}}{2}\right)^2 = \frac{1}{4}(e^{2ix} + 2 + e^{-2ix}) = \frac{1}{2}(\cos(2x) + 1)$, et : $\sin^3 x = \left(\frac{e^{ix} - e^{-ix}}{2i}\right)^3 = -\frac{1}{8i}(e^{3ix} - 3e^{ix} + 3e^{-ix} - e^{-3ix}) = -\frac{1}{4}(\sin(3x) - 3\sin x)$. Il s'ensuit donc :
$$\begin{aligned} \cos^2 x\sin^3 x &= \left(\frac{1}{2}(\cos(2x) + 1)\right)\left(-\frac{1}{4}(\sin(3x) - 3\sin x)\right) \\ &= -\frac{1}{8}(\cos(2x)\sin(3x) - 3\cos(2x)\sin x + \sin(3x) - 3\sin x) \end{aligned}$$
Et puisque : $\cos(2x)\sin(3x) = \frac{1}{2}(\sin(5x) + \sin x)$ et $\cos(2x)\sin x = \frac{1}{2}(\sin(3x) - \sin x)$, alors : $\cos^2(x)\sin^3(x) = -\dfrac{1}{16}(\sin(5x) - \sin(3x) - 2\sin x)$.

> **Applications.**
> 1. Linéariser $\sin^4 x$ puis calculer la somme : $S = \sin^4\frac{\pi}{8} + \sin^4\frac{3\pi}{8} + \sin^4\frac{5\pi}{8} + \sin^4\frac{7\pi}{8}$.
> 2. Linéariser l'expression suivante : $E = 6\cos^3(2x)\sin^3(2x) - \cos^2(2x)\sin^2(4x)$.
> 3. Soit $(p;q) \in \mathbb{R}^2$.
>    a) En utilisant $\cos p + \cos q = \operatorname{Re}(e^{ip} + e^{iq})$, montrer que : $\cos p + \cos q = 2\cos\left(\frac{p + q}{2}\right)\cos\left(\frac{p - q}{2}\right)$.
>    b) Montrer de même que : $\cos p - \cos q = -2\sin\left(\frac{p + q}{2}\right)\sin\left(\frac{p - q}{2}\right)$.
>    c) Factoriser de même les expressions : $\sin p + \sin q$ et $\sin p - \sin q$.
> 4. Soit $(a;b) \in \mathbb{R}^2$. En utilisant les formules d'Euler, retrouver les formules suivantes (vues en 1ère année du Bac) :
$$\cos a \cos b = \frac{1}{2}(\cos(a - b) + \cos(a + b)) \quad ; \quad \sin a \sin b = \frac{1}{2}(\cos(a - b) - \cos(a + b)) \quad ; \quad \sin a \cos b = \frac{1}{2}(\sin(a - b) + \sin(a + b))$$
> 5. Pour tout $n \in \mathbb{N}$ et $\theta \in ]0; \pi[$, on pose : $S_n = \sum_{k=0}^{n} \cos(k\theta)$.
>    a) Rappeler l'expression simplifiée de la somme $1 + q + q^2 + \dots + q^n$ pour $q \neq 1$.
>    b) Simplifier $T_n = \sum_{k=0}^{n} e^{ik\theta}$ et en déduire que pour tout $n \in \mathbb{N}$ : $S_n = \dfrac{\cos\frac{n\theta}{2}\sin\frac{(n+1)\theta}{2}}{\sin\frac{\theta}{2}}$.

### 7. Racines $n^{\text{èmes}}$ d'un nombre complexe non nul

#### 7.1. Racines $n^{\text{èmes}}$ de l'unité

> **Définition 12.**
> Soit $n$ un entier naturel supérieur ou égal à 2. On appelle racine $n^{\text{ème}}$ de l'unité tout nombre complexe $u$ tel que $u^n = 1$. L'ensemble des racines $n^{\text{èmes}}$ de l'unité est noté $\mathbb{U}_n$. On a donc : $\mathbb{U}_n = \{z \in \mathbb{C} \;/\; z^n = 1\}$.

> **Remarque.**
> Les racines $n^{\text{èmes}}$ de l'unité sont les solutions dans $\mathbb{C}$ de l'équation $z^n = 1$.

> **Exemples.**
> 1) Cas $n = 2$ : Les racines carrées de l'unité sont les solutions dans $\mathbb{C}$ de l'équation $z^2 = 1$. Ces solutions sont $1$ et $-1$. Ainsi : $\mathbb{U}_2 = \{-1; 1\}$.
> 2) Cas $n = 3$ : Les racines cubiques de l'unité sont les solutions dans $\mathbb{C}$ de l'équation $z^3 = 1$. Remarquons que si $z^3 = 1$ alors $|z^3| = |z|^3 = 1$ et par suite $|z| = 1$. Cela montre que les solutions de l'équation $z^3 = 1$ s'écrivent sous la forme $e^{i\theta}$ avec $e^{3i\theta} = 1$, c'est-à-dire $3\theta \equiv 0 \,[2\pi]$. Par conséquent, $\theta = k\frac{2\pi}{3}$ avec $k \in \mathbb{Z}$. En posant $\omega_k = e^{i\frac{2k\pi}{3}}$, on obtient :
>   - $\omega_0 = 1$.
>   - $\omega_1 = e^{i\frac{2\pi}{3}} = -\frac{1}{2} + i\frac{\sqrt{3}}{2}$. On note souvent ce nombre par $j$ : $j = e^{i\frac{2\pi}{3}} = -\frac{1}{2} + i\frac{\sqrt{3}}{2}$.
>   - $\omega_2 = e^{i\frac{4\pi}{3}} = -\frac{1}{2} - i\frac{\sqrt{3}}{2}$. Remarquons que : $\omega_2 = j^2 = \overline{j}$.
>   - $\omega_3 = 1$ et $\omega_4 = \omega_1$ et $\omega_5 = \omega_2$ et ainsi de suite.
>   Par suite, les racines cubiques de l'unité sont $1$, $j$ et $j^2$ : $\mathbb{U}_3 = \{1; j; j^2\}$.
> 3) Cas $n = 4$ : Les racines d'ordre 4 de l'unité sont les solutions dans $\mathbb{C}$ de l'équation $z^4 = 1$. Comme $z^4 - 1 = (z^2 - 1)(z^2 + 1) = (z - 1)(z + 1)(z - i)(z + i)$, alors les solutions de l'équation $z^4 = 1$ sont : $1; -1; i; -i$. Par suite : $\mathbb{U}_4 = \{1; -1; i; -i\}$.

> **Remarques.**
> - On a : $1 + j + j^2 = 0$ et $z^3 - 1 = (z - 1)(z - j)(z - j^2)$ pour tout $z \in \mathbb{C}$.
> - Pour $n \in \{2; 3; 4\}$, le produit de deux éléments de $\mathbb{U}_n$ est aussi élément de $\mathbb{U}_n$. En fait, ce résultat est valable pour tout entier $n \ge 2$.
> - Pour $n \in \{2; 3; 4\}$, l'inverse et le conjugué de tout élément de $\mathbb{U}_n$ sont aussi des éléments de $\mathbb{U}_n$. En fait, ce résultat est valable pour tout entier $n \ge 2$. On a donc pour tout $z \in \mathbb{C}$ : $z \in \mathbb{U}_n \Leftrightarrow \overline{z} \in \mathbb{U}_n \Leftrightarrow \frac{1}{z} \in \mathbb{U}_n$.
> - Soit $A_0$, $A_1$ et $A_2$ les points du plan d'affixes respectives $1$, $j$ et $j^2$. Alors, $A_0A_1A_2$ est un triangle équilatéral inscrit dans le cercle trigonométrique.
> - Soit $A_0$, $A_1$, $A_2$ et $A_3$ les points du plan d'affixes respectives $1$, $i$, $-1$ et $-i$. Alors, $A_0A_1A_2A_3$ est un carré inscrit dans le cercle trigonométrique.

> **Proposition 27.**
> Soit $n$ un entier naturel supérieur ou égal à 2. Les racines $n^{\text{èmes}}$ de l'unité sont les nombres qui s'écrivent sous la forme $e^{\frac{2ik\pi}{n}}$ où $k \in \{0; 1; 2; \dots; n-1\}$. On a donc :
$$\mathbb{U}_n = \left\{ e^{\frac{2ik\pi}{n}} \;/\; k \in \{0; 1; \dots; n-1\} \right\} \quad \text{et} \quad \operatorname{card}\mathbb{U}_n = n$$

> **Preuve.**
> Soit $z$ une racine $n^{\text{ème}}$ de 1. On a donc $z^n = 1$. En passant au module, on obtient $|z^n| = 1$, d'où $|z|^n = 1$. Puisque $|z|$ est positif, on déduit que $|z| = 1$. Ainsi, $z$ est de la forme $z = e^{i\theta}$. On a alors : $z^n = 1 \Leftrightarrow e^{in\theta} = 1 \Leftrightarrow n\theta \equiv 0 \,[2\pi] \Leftrightarrow \theta \equiv 0 \left[\frac{2\pi}{n}\right]$. Le réel $\theta$ est donc de la forme $\frac{2k\pi}{n}$ avec $k \in \mathbb{Z}$. On obtient finalement $z = e^{\frac{2ik\pi}{n}}$. Or, on constate que : $e^{\frac{2n\pi}{n}} = 1$ ; $e^{\frac{2(n+1)\pi}{n}} = e^{\frac{2\pi}{n}}$ ; $e^{\frac{2(n+2)\pi}{n}} = e^{\frac{4\pi}{n}}$ ; $\dots$ Autrement dit, si $k$ et $k'$ sont deux entiers relatifs tels que $k - k'$ est un multiple de $n$, alors $e^{\frac{2k\pi}{n}} = e^{\frac{2k'\pi}{n}}$. On peut donc se contenter de faire varier $k$ dans l'ensemble des entiers compris entre $0$ et $n-1$.
> Réciproquement, si $z = e^{\frac{2k\pi}{n}}$ avec $k \in \{0; 1; 2; \dots; n-1\}$, alors $z^n = \left(e^{\frac{2k\pi}{n}}\right)^n = e^{2ik\pi} = 1$, d'où $z$ est bien une racine $n^{\text{ème}}$ de l'unité.

> **Proposition 28.**
> Soit $n$ un entier naturel supérieur ou égal à 2. Pour tous $u$ et $v$ de $\mathbb{U}_n$ : $u \times v \in \mathbb{U}_n$ et $\frac{1}{u} \in \mathbb{U}_n$ et $\overline{u} \in \mathbb{U}_n$ (avec $\overline{u} = \frac{1}{u}$).

> **Preuve.**
> Soit $u$ et $v$ deux éléments de $\mathbb{U}_n$, c'est-à-dire que $u^n = 1$ et $v^n = 1$. Donc :
> - $(u \times v)^n = u^n \times v^n = 1 \times 1 = 1$, et donc $u \times v \in \mathbb{U}_n$ ;
> - $\left(\frac{1}{u}\right)^n = \frac{1}{u^n} = \frac{1}{1} = 1$, et donc $\frac{1}{u} \in \mathbb{U}_n$ ;
> - $\left(\overline{u}\right)^n = \overline{u^n} = \overline{1} = 1$, et donc $\overline{u} \in \mathbb{U}_n$.
>
> Ce qui achève la démonstration.

> **Exemples.**
> 1) Les racines $6^{\text{èmes}}$ de l'unité sont les nombres complexes $\omega_k = e^{i\frac{2k\pi}{6}} = e^{i\frac{k\pi}{3}}$ avec $k \in \{0; 1; \dots; 5\}$. Il s'ensuit donc : $\omega_0 = 1$ ; $\omega_1 = e^{i\frac{\pi}{3}} = \frac{1}{2} + \frac{\sqrt{3}}{2}i$ ; $\omega_2 = e^{i\frac{2\pi}{3}} = -\frac{1}{2} + \frac{\sqrt{3}}{2}i = j$ ; $\omega_3 = e^{i\pi} = -1$ ; $\omega_4 = e^{i\frac{4\pi}{3}} = \overline{\omega_1} = \frac{1}{2} - \frac{\sqrt{3}}{2}i$ ; $\omega_5 = e^{i\frac{5\pi}{3}} = \overline{\omega_2} = \overline{j}$.
> 2) Les racines $8^{\text{èmes}}$ de l'unité sont les nombres complexes $\omega_k = e^{i\frac{2k\pi}{8}} = e^{i\frac{k\pi}{4}}$ avec $k \in \{0; 1; \dots; 7\}$. Il s'ensuit donc : $\omega_0 = 1$ ; $\omega_1 = e^{i\frac{\pi}{4}} = \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}$ ; $\omega_2 = e^{i\frac{\pi}{2}} = i$ ; $\omega_3 = e^{i\frac{3\pi}{4}} = -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i$ ; $\omega_4 = e^{i\pi} = -1$ ; $\omega_5 = e^{i\frac{5\pi}{4}} = -\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i$ ; $\omega_6 = e^{i\frac{3\pi}{2}} = -i$ ; $\omega_7 = e^{i\frac{7\pi}{4}} = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i$.
>   Remarquer bien qu'on a : $\omega_5 = \overline{\omega_3}$ ; $\omega_6 = \overline{\omega_2}$ ; $\omega_7 = \overline{\omega_1}$.

> **Proposition 29.**
> Soit $n$ un entier naturel supérieur ou égal à 2. Posons, pour tout $k \in \{0; 1; \dots; n-1\}$ : $\omega_k = e^{i\frac{2k\pi}{n}}$. Alors :
> 1) Pour tout $k \in \{1, \dots, n-1\}$ : $\overline{\omega_k} = \omega_{n-k}$.
> 2) Pour tout $k \in \{0; 1; \dots; n-1\}$ : $\omega_k = \omega_1^k$.
> 3) La somme des $n$ racines $n^{\text{èmes}}$ de l'unité est nulle.
> 4) Les racines $n^{\text{èmes}}$ de l'unité sont représentées dans le plan complexe par les sommets d'un polygone régulier à $n$ côtés inscrit dans le cercle trigonométrique, et dont l'un des sommets est le point d'affixe 1. Ce polygone est symétrique par rapport à l'axe des abscisses.

> **Preuve.**
> 1) On a $\overline{\omega_k} = \overline{e^{i\frac{2k\pi}{n}}} = e^{-i\frac{2k\pi}{n}}$ et $\omega_{n-k} = e^{i\frac{2(n-k)\pi}{n}} = e^{i\left(2\pi - \frac{2k\pi}{n}\right)} = e^{2i\pi}\cdot e^{-i\frac{2k\pi}{n}} = e^{-i\frac{2k\pi}{n}}$, d'où l'égalité annoncée.
> 2) On a : $\omega_k = e^{i\frac{2k\pi}{n}} = \left(e^{i\frac{2\pi}{n}}\right)^k = \omega_1^k$.
> 3) D'après 2), on peut écrire : $\omega_0 + \omega_1 + \dots + \omega_{n-1} = 1 + \omega_1 + \omega_1^2 + \omega_1^3 + \dots + \omega_1^{n-1}$. Nous reconnaissons la somme des termes de la suite géométrique de premier terme 1 et de raison $\omega_1 \neq 1$ (car $n \ge 2$), d'où : $\omega_0 + \omega_1 + \dots + \omega_{n-1} = \dfrac{1 - \omega_1^n}{1 - \omega_1} = \dfrac{1 - e^{2i\pi}}{1 - \omega_1} = \dfrac{1 - 1}{1 - \omega_1} = 0$. Ainsi, la somme des $n$ racines $n^{\text{èmes}}$ de l'unité est nulle.
> 4) Les racines $n^{\text{èmes}}$ de l'unité sont au nombre de $n$, toutes de module 1, donc situées sur le cercle trigonométrique. Elles sont représentées par les sommets d'un polygone à $n$ côtés inscrit dans ce cercle. D'autre part, pour tout $k \in \{0; 1; \dots; n-1\}$ on a $\omega_{n-k} = \overline{\omega_k}$, donc ce polygone est symétrique par rapport à l'axe des abscisses.

> **Remarques.**
> - Les racines $n^{\text{èmes}}$ de $Z$ s'obtiennent à partir de l'une d'entre elles en multipliant celle-ci par chacune des racines $n^{\text{èmes}}$ de l'unité. En effet, si $z_0$ est l'une des racines $n^{\text{èmes}}$ de $Z$, on a :
$$z^n = Z \Leftrightarrow z^n = z_0^n \Leftrightarrow \left(\frac{z}{z_0}\right)^n = 1 \Leftrightarrow \left[(\exists \omega \in \mathbb{U}_n) \quad z = \omega z_0\right]$$
>   Par suite, l'ensemble des racines $n^{\text{èmes}}$ de $Z$ est : $\{z_0\omega \;/\; \omega \in \mathbb{U}_n\}$. Ainsi, pour trouver les racines $n^{\text{èmes}}$ de $Z$, il suffit donc d'en exhiber une et de la multiplier par toutes les racines $n^{\text{èmes}}$ de l'unité.
> - Une bonne connaissance des racines $n^{\text{èmes}}$ de l'unité est donc capitale pour résoudre ce type de problème.

> **Exemples.**
> 1) Déterminons les racines cubiques du nombre complexe : $Z = 4\sqrt{2}(-1+i)$. On a $|Z| = 4\sqrt{2}|-1+i| = 8$, donc : $Z = 8\left(-\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right) = 8e^{i\frac{3\pi}{4}} = \left(2e^{i\frac{\pi}{4}}\right)^3$. Par suite, les racines cubiques de $Z$ sont les nombres : $z_0 = 2e^{i\frac{\pi}{4}}$ et $z_1 = jz_0$ et $z_2 = j^2z_0$. Et comme $j = e^{i\frac{2\pi}{3}}$ et $j^2 = e^{i\frac{4\pi}{3}}$, alors : $z_1 = 2e^{i\left(\frac{2\pi}{3} + \frac{\pi}{4}\right)} = 2e^{i\frac{11\pi}{12}}$ et $z_2 = 2e^{i\left(\frac{4\pi}{3} + \frac{\pi}{4}\right)} = 2e^{i\frac{19\pi}{12}}$. On peut aussi déterminer les écritures algébriques de ces racines cubiques à partir de celles de $z_0$, $j$ et $j^2$.
> 2) Déterminons les racines quatrièmes (ou d'ordre 4) du nombre $-1$, c'est-à-dire les solutions de $z^4 = -1$. On a : $z^4 = -1 \Leftrightarrow z^4 = e^{i\pi} \Leftrightarrow z^4 = \left(e^{i\frac{\pi}{4}}\right)^4$. Par suite, les racines quatrièmes du nombre $-1$ sont :
$$z_0 = e^{i\frac{\pi}{4}} \quad ; \quad z_1 = e^{i\left(\frac{\pi}{4} + \frac{\pi}{2}\right)} = e^{i\frac{3\pi}{4}} \quad ; \quad z_2 = e^{i\left(\frac{\pi}{4} + \pi\right)} = e^{i\frac{5\pi}{4}} \quad ; \quad z_3 = e^{i\left(\frac{\pi}{4} + \frac{3\pi}{2}\right)} = e^{i\frac{7\pi}{4}} = e^{-i\frac{\pi}{4}}$$

> **Applications.**
> 1. Déterminer les racines cubiques du nombre complexe $1 - i$.
> 2. Déterminer les racines cinquièmes du nombre complexe $1 + i$.
> 3. Soit $n \in \mathbb{N}^* - \{1\}$. Déterminer les racines $n^{\text{èmes}}$ du nombre $-1$.
> 4. Déterminer les racines d'ordre 6 de l'unité et les écrire sous forme trigonométrique puis résoudre dans $\mathbb{C}$ l'équation suivante : $\left(\dfrac{z+i}{z-i}\right)^3 - \left(\dfrac{z-i}{z+i}\right)^3 = 0$.
> 5. Résoudre dans $\mathbb{C}$ l'équation suivante : $(z+1)^5 - (z-1)^5 = 0$. (On pourra poser : $Z = \dfrac{z+1}{z-1}$.)
> 6. a) Déterminer les racines cubiques du nombre complexe : $a = \dfrac{-\sqrt{2}}{16}(1+i)$.
>    b) En déduire les valeurs de $\cos\frac{13\pi}{12}$ et $\sin\frac{13\pi}{12}$.
> 7. On considère dans $\mathbb{C}$ l'équation suivante : $(E) : z^3 = 2 - 11i$.
>    a) Vérifier que $z_0 = 2 - i$ est une solution de $(E)$.
>    b) En déduire l'ensemble solution de l'équation $(E)$.
> 8. Pour tout $n \in \mathbb{N}^*$, résoudre l'équation $z^{2n+1} + 1 = 0$.
> 9. Résoudre dans $\mathbb{C}$ l'équation : $(E)\; z^3 = \overline{z}$.

### 8. Équations du second degré dans $\mathbb{C}$

#### 8.1. Racines carrées d'un nombre complexe

On sait que tout nombre complexe non nul $Z$ admet exactement deux racines carrées opposées. Ce sont les solutions dans $\mathbb{C}$ de l'équation $z^2 = Z$.

L'utilisation des formes trigonométrique ou exponentielle donne facilement les expressions des racines carrées d'un nombre complexe non nul quelconque mais on a parfois besoin d'exprimer une racine sous forme algébrique. Dans la pratique, on rencontre deux cas :

**1er cas :** Si $Z = |Z|e^{i\varphi}$ alors, d'après la proposition précédente, les racines carrées du nombre $Z$ sont :
$$\sqrt{|Z|}\,e^{i\frac{\varphi}{2}} \quad \text{et} \quad \sqrt{|Z|}\,e^{i\left(\frac{\varphi}{2} + \pi\right)}$$

**2nd cas :** Si $Z = X + iY$ avec $(X; Y) \in \mathbb{R}^2 - \{(0; 0)\}$. On pose $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$. On a :
$$z^2 = Z \Leftrightarrow X + iY = (x + iy)^2 \Leftrightarrow \begin{cases} x^2 - y^2 = X \\ 2xy = Y \end{cases}$$
On peut ajouter à ce dernier système d'équations celle obtenue en considérant les modules : $x^2 + y^2 = |z|^2 = |Z| = \sqrt{X^2 + Y^2}$. Ainsi, on obtient :
$$z^2 = Z \Leftrightarrow \begin{cases} x^2 - y^2 = X \\ x^2 + y^2 = \sqrt{X^2 + Y^2} \\ 2xy = Y \end{cases} \Leftrightarrow \begin{cases} x^2 = \frac{1}{2}(X + \sqrt{X^2 + Y^2}) \\ y^2 = \frac{1}{2}(-X + \sqrt{X^2 + Y^2}) \\ 2xy = Y \end{cases}$$
Puisque $(X; Y) \neq (0; 0)$, les deux premières équations du dernier système fournissent chacune deux solutions. La troisième équation $2xy = Y$ permet de sélectionner les deux uniques couples solutions en raisonnant sur le signe.

> **En résumé.** Tout nombre complexe non nul $Z$ admet exactement deux racines carrées opposées :
> 1) Si $Z = |Z|e^{i\varphi}$, alors les racines carrées sont : $\sqrt{|Z|}e^{i\frac{\varphi}{2}}$ et $\sqrt{|Z|}e^{i\left(\frac{\varphi}{2} + \pi\right)}$. En particulier :
>    - Si $Z \in \mathbb{R}_+^*$, ses racines carrées sont : $\sqrt{Z}$ et $-\sqrt{Z}$.
>    - Si $Z \in \mathbb{R}_-^*$, ses racines carrées sont : $i\sqrt{-Z}$ et $-i\sqrt{-Z}$.
>    - Si $Z \in i\mathbb{R}_+^*$, ses racines carrées sont : $\sqrt{\frac{|Z|}{2}}(1+i)$ et $-\sqrt{\frac{|Z|}{2}}(1+i)$.
>    - Si $Z \in i\mathbb{R}_-^*$, ses racines carrées sont : $\sqrt{\frac{|Z|}{2}}(1-i)$ et $-\sqrt{\frac{|Z|}{2}}(1-i)$.
> 2) Si $Z = X + iY$ avec $(X; Y) \in (\mathbb{R}^*)^2$, et si $\alpha = \frac{1}{2}(X + \sqrt{X^2 + Y^2})$ et $\beta = \frac{1}{2}(-X + \sqrt{X^2 + Y^2})$, alors les racines carrées de $Z$ sont :
>    - $\sqrt{\alpha} + i\sqrt{\beta}$ et $-\sqrt{\alpha} - i\sqrt{\beta}$ si $Y > 0$ ;
>    - $\sqrt{\alpha} - i\sqrt{\beta}$ et $-\sqrt{\alpha} + i\sqrt{\beta}$ si $Y < 0$.

> **Remarque.**
> Il n'est pas indispensable d'apprendre par cœur les résultats énoncés ci-dessus. Il faut plutôt savoir la démarche à suivre pour la détermination des racines carrées d'un nombre complexe selon le contexte.

> **Exemples.**
> 1) Les racines carrées du nombre $Z = -5$ sont : $\sqrt{5}i$ et $-\sqrt{5}i$.
> 2) Les racines carrées du nombre $Z = 6i$ sont : $\sqrt{3}(1+i)$ et $-\sqrt{3}(1+i)$.
> 3) Les racines carrées du nombre $Z = -11i$ sont : $\sqrt{\frac{11}{2}}(1-i)$ et $-\sqrt{\frac{11}{2}}(1-i)$.
> 4) Déterminons les racines carrées du nombre $Z = \frac{\sqrt{3}}{2} + \frac{1}{2}i$ : on a $|Z| = 1$ et $\arg Z \equiv \frac{\pi}{6} \,[2\pi]$, donc les racines carrées de $Z$ sont : $e^{i\frac{\pi}{12}}$ et $-e^{i\frac{\pi}{12}}$ (avec $-e^{i\frac{\pi}{12}} = e^{i\frac{13\pi}{12}}$).
> 5) Déterminons les racines carrées du nombre $Z = -24 + 70i$ : soit $z = x + iy$ une des racines carrées du nombre $Z$. On a alors :
$$z^2 = Z \Leftrightarrow (x + iy)^2 = -24 + 70i \Leftrightarrow \begin{cases} x^2 - y^2 = -24 \\ x^2 + y^2 = |-24 + 70i| = 74 \\ 2xy = 70 \end{cases} \Leftrightarrow \begin{cases} x^2 = 25 \\ y^2 = 49 \\ xy > 0 \end{cases}$$
>   Il s'ensuit donc : $z^2 = Z \Leftrightarrow [(x; y) = (5; 7) \text{ ou } (x; y) = (-5; -7)]$. Ainsi, les racines carrées du nombre $Z$ sont : $5 + 7i$ et $-5 - 7i$.

> **Applications.**
> 1. Déterminer les racines carrées de chacun des nombres complexes suivants :
$$-7 \quad ; \quad -25i \quad ; \quad 9 + 40i \quad ; \quad 1 + 2i\sqrt{2} \quad ; \quad 1 - i\sqrt{15} \quad ; \quad 1 - 4i\sqrt{3} \quad ; \quad \frac{i + \sqrt{3}}{i - \sqrt{3}}$$
> 2. a) Déterminer de deux façons différentes, les racines carrées du nombre complexe $1 + i$.
>    b) En déduire la valeur exacte de chacun de : $\cos\frac{\pi}{8}$ ; $\sin\frac{\pi}{8}$ ; $\tan\frac{\pi}{8}$.
> 3. Déterminer de deux façons différentes, les racines carrées du nombre complexe $-\sqrt{3} + i$, puis en déduire la valeur exacte des rapports trigonométriques : $\cos\frac{5\pi}{12}$ et $\sin\frac{5\pi}{12}$.

#### 8.2. Résolution algébrique d'une équation du second degré dans $\mathbb{C}$

Soit $(a; b; c) \in \mathbb{C}^* \times \mathbb{C} \times \mathbb{C}$. On considère l'équation $az^2 + bz + c = 0$, d'inconnue $z \in \mathbb{C}$. Pour résoudre cette équation, on utilise la forme canonique du trinôme :
$$az^2 + bz + c = a\left[\left(z + \frac{b}{2a}\right)^2 + \left(\frac{c}{a} - \frac{b^2}{4a^2}\right)\right] = a\left[\left(z + \frac{b}{2a}\right)^2 - \frac{b^2 - 4ac}{4a^2}\right]$$

En désignant par $\Delta = b^2 - 4ac$ le discriminant du trinôme, on a :
- Si $\Delta \neq 0$, l'équation admet deux solutions distinctes $z_1$ et $z_2$ données par :
$$z_1 = \frac{-b - \delta}{2a} \quad \text{et} \quad z_2 = \frac{-b + \delta}{2a}$$
où $\delta$ est une racine carrée de $\Delta$ (obtenue, par exemple, par une des méthodes exposées dans 8.1). De plus : $(\forall z \in \mathbb{C})\; az^2 + bz + c = a(z - z_1)(z - z_2)$. Enfin, les solutions $z_1$ et $z_2$ vérifient les relations suivantes, connues sous le nom de formules de Viet :
$$z_1 + z_2 = \frac{-b - \delta}{2a} + \frac{-b + \delta}{2a} = -\frac{b}{a} \quad \text{et} \quad z_1 \times z_2 = \frac{-b - \delta}{2a} \times \frac{-b + \delta}{2a} = \frac{b^2 - \Delta}{4a^2} = \frac{c}{a}$$
En notant $s = z_1 + z_2$ et $p = z_1 \times z_2$, on obtient l'égalité suivante : $az^2 + bz + c = a(z^2 - sz + p)$.
- Si $\Delta = 0$, l'équation a une seule solution, dite double, donnée par : $z = \dfrac{-b}{2a}$. De plus : $(\forall z \in \mathbb{C})\; az^2 + bz + c = a\left(z + \dfrac{b}{2a}\right)^2$.

> **Proposition 31.**
> Soit $(a; b; c) \in \mathbb{C}^* \times \mathbb{C} \times \mathbb{C}$ ainsi que l'équation d'inconnue $z \in \mathbb{C}$ : $az^2 + bz + c = 0$. On note $\Delta = b^2 - 4ac$ son discriminant.
> - Si $\Delta \neq 0$, l'équation admet deux solutions distinctes $z_1$ et $z_2$ données par :
$$z_1 = \frac{-b - \delta}{2a} \quad \text{et} \quad z_2 = \frac{-b + \delta}{2a} \quad \text{où } \delta \text{ est tel que } \delta^2 = \Delta.$$
>   De plus, on a la factorisation : $(\forall z \in \mathbb{C})\; az^2 + bz + c = a(z - z_1)(z - z_2)$.
> - Si $\Delta = 0$, l'équation a une seule solution, dite double, donnée par : $z = \dfrac{-b}{2a}$. De plus, on a la factorisation : $(\forall z \in \mathbb{C})\; az^2 + bz + c = a\left(z + \dfrac{b}{2a}\right)^2$.

> **Exemples.**
> Résolvons dans $\mathbb{C}$ l'équation suivante : $(1+i)z^2 - (1+7i)z + 14 + 21i = 0$. On a : $\Delta = (-(1+7i))^2 - 4(1+i)(14+21i) = -56 - 90i$. Déterminons les racines carrées du nombre $\Delta = -56 - 90i$. Soit $\delta = x + iy$ une des racines carrées du nombre $\Delta$. On a alors :
$$\delta^2 = \Delta \Leftrightarrow (x + iy)^2 = -56 - 90i \Leftrightarrow \begin{cases} x^2 - y^2 = -56 \\ x^2 + y^2 = |-56 - 90i| = 106 \\ xy = -45 \end{cases} \Leftrightarrow \begin{cases} x^2 = 25 \\ y^2 = 81 \\ xy < 0 \end{cases}$$
>   Il s'ensuit donc : $(x; y) = (5; -9)$ ou $(x; y) = (-5; 9)$. Donc, $\delta = 5 - 9i$ est une racine carrée de $\Delta$. Les solutions de cette équation sont : $z_1 = \dfrac{1+7i-5+9i}{2(1+i)} = 3+5i$ et $z_2 = \dfrac{1+7i+5-9i}{2(1+i)} = 1-2i$. Par suite, l'ensemble solution est : $S = \{3+5i; 1-2i\}$.
>
> Résolvons dans $\mathbb{C}$ l'équation suivante : $(E) : (4\cos\theta)z^2 - 2\cos(2\theta)z + i\sin\theta = 0$ où $\theta \in \left[0; \frac{\pi}{2}\right]$. Le discriminant de cette équation est : $\Delta = 4\cos^2(2\theta) - 16i\cos\theta\sin\theta$. Puisque $2\sin\theta\cos\theta = \sin(2\theta)$ et $\cos^2(2\theta) = 1 - \sin^2(2\theta)$ alors : $\Delta = 4(1 - \sin^2(2\theta) - 4i\cos\theta\sin\theta) = \left[2(1 - i\sin(2\theta))\right]^2$. Par suite, l'équation $(E)$ admet deux solutions données par :
$$z_1 = \frac{\cos(2\theta) - 1 + i\sin(2\theta)}{4\cos\theta} \quad \text{et} \quad z_2 = \frac{\cos(2\theta) + 1 - i\sin(2\theta)}{4\cos\theta}$$
>   D'autre part, on a : $\cos(2\theta) - 1 = -2\sin^2\theta$ et $\cos(2\theta) + 1 = 2\cos^2\theta$, donc :
$$z_1 = \frac{-\sin^2\theta + i\sin\theta\cos\theta}{2\cos\theta} \quad \text{et} \quad z_2 = \frac{\cos\theta - i\sin\theta}{2}. \quad \text{Ainsi : } S = \left\{\frac{-\sin^2\theta + i\sin\theta\cos\theta}{2\cos\theta}; \frac{\cos\theta - i\sin\theta}{2}\right\}$$

> **Remarque.**
> Afin de simplifier les calculs, on peut multiplier les membres de l'équation par le conjugué du coefficient de $z^2$. Par exemple, l'équation $(1+i)z^2 - (1+7i)z + 14 + 21i = 0$ est équivalente à : $z^2 - (4+3i)z + 13 - i = 0$ et qui a pour discriminant $-45 + 28i = (2+7i)^2$.

> **Corollaire.**
> Soit $a$, $b$ et $c$ trois réels, $a$ étant non nul, ainsi que l'équation dans $\mathbb{C}$ : $(E)\; az^2 + bz + c = 0$. On note $\Delta = b^2 - 4ac$ son discriminant.
> - Si $\Delta > 0$, alors l'équation $(E)$ a deux racines réelles distinctes $z_1$ et $z_2$ données par : $z_1 = \dfrac{-b - \sqrt{\Delta}}{2a}$ et $z_2 = \dfrac{-b + \sqrt{\Delta}}{2a}$.
> - Si $\Delta = 0$, l'équation a une racine double réelle donnée par : $z = \dfrac{-b}{2a}$.
> - Si $\Delta < 0$, alors l'équation $(E)$ a deux racines complexes distinctes conjuguées $z_1$ et $z_2$ données par : $z_1 = \dfrac{-b - i\sqrt{-\Delta}}{2a}$ et $z_2 = \dfrac{-b + i\sqrt{-\Delta}}{2a}$.

> **Exemple.**
> Étant donné un réel $\theta$, résolvons l'équation : $(E)\; z^2 - 2z\cos\theta + 1 = 0$. Le discriminant de cette équation est : $\Delta = 4\cos^2\theta - 4 = -4\sin^2\theta = (2i\sin\theta)^2$.
> - Si $\theta \equiv 0 \,[\pi]$, alors $\Delta = 0$ et l'équation $(E)$ admet une racine double : $z = 1$ si $\theta \equiv 0 \,[2\pi]$ ; $z = -1$ si $\theta \equiv \pi \,[2\pi]$.
> - Si $\theta \not\equiv 0 \,[\pi]$, alors $\Delta < 0$ et l'équation $(E)$ admet deux racines distinctes conjuguées : $z_1 = \cos\theta + i|\sin\theta|$ et $z_2 = \cos\theta - i|\sin\theta|$. En fait, dans ce cas, l'ensemble solution de $(E)$ peut aussi s'écrire : $S = \{\cos\theta + i\sin\theta; \cos\theta - i\sin\theta\} = \{e^{i\theta}; e^{-i\theta}\}$.

> **Applications.**
> 1. Résoudre dans $\mathbb{C}$ les équations suivantes :
$$z^2 - 2(2+i)z + 6 + 8i = 0 \quad ; \quad (1+i)z^2 + (6+4i)z + 9 + 7i = 0 \quad ; \quad (3+i)z^2 - (8+6i)z + 25 + 5i = 0$$
> 2. Résoudre dans $\mathbb{C}$ les équations suivantes :
$$z^4 - (i-1)z^2 - i = 0 \quad \text{et} \quad z^2 - 2z\sin\frac{\theta}{2}\cos\frac{\theta}{2} + \sin^2\left(\frac{\theta}{2}\right) = 0 \text{ avec } \theta \in ]0; \pi]$$

> **Proposition 32.**
> Soit $a$, $b$ et $c$ trois nombres complexes, avec $a \neq 0$. Les nombres complexes $z_1$ et $z_2$ (éventuellement égaux) vérifient : $z_1 + z_2 = -\frac{b}{a}$ et $z_1 \times z_2 = \frac{c}{a}$ si, et seulement si, $z_1$ et $z_2$ sont les deux racines (éventuellement confondues) de l'équation : $az^2 + bz + c = 0$.

> **Remarque.**
> On utilise la proposition précédente sous plusieurs formes :
> - Si l'on sait que $z_1$ et $z_2$ sont les racines de l'équation $az^2 + bz + c = 0$, alors on peut simplifier toute expression symétrique en $z_1$ et $z_2$, et l'évaluer en fonction de $z_1 + z_2$ et $z_1 \times z_2$, et donc de $a$, $b$ et $c$, sans avoir à expliciter $z_1$ et $z_2$. Dans la pratique, on rencontre souvent les expressions symétriques :
$$z_1^n + z_2^n \quad ; \quad z_1^n \times z_2^n \quad ; \quad \frac{1}{z_1^n} + \frac{1}{z_2^n} \quad ; \quad \left(\frac{z_1}{z_2}\right)^n + \left(\frac{z_2}{z_1}\right)^n \quad (\text{avec } n \in \{1; 2; 3; 4\})$$
> - Si $z_1$ et $z_2$ sont les racines de l'équation $az^2 + bz + c = 0$, et si l'on connaît une de ces racines, alors on peut facilement en déduire l'autre.
> - Si l'on connaît deux complexes $s$ et $p$, et si l'on cherche $z_1$ et $z_2$ tels que $z_1 + z_2 = s$ et $z_1z_2 = p$, alors une façon élégante et efficace de faire est de dire que $z_1$ et $z_2$ sont les racines de l'équation : $z^2 - sz + p = 0$.

> **Exemple.**
> Soit $z_1$ et $z_2$ les deux solutions (ou racines) de l'équation $z^2 - z + 4 = 0$. Exprimer $z_1^2 + z_2^2 - z_1z_2$ en fonction de $z_1 + z_2$ et $z_1z_2$, et en déduire sa valeur.
> Réponse : on a $z_1^2 + z_2^2 - z_1z_2 = z_1^2 + z_2^2 + 2z_1z_2 - 3z_1z_2 = (z_1 + z_2)^2 - 3z_1z_2$. On a $z_1 + z_2 = 1$ et $z_1z_2 = 4$, d'où : $z_1^2 + z_2^2 - z_1z_2 = 1^2 - 3 \times 4 = -11$.

> **Applications.**
> 1. Résoudre dans $\mathbb{C}$ l'équation $z^2 - (5 - i\sqrt{3})z + 6 - 3i\sqrt{3} = 0$ sachant qu'elle admet une racine réelle.
> 2. Résoudre dans $\mathbb{C}^2$ les systèmes suivants : $\begin{cases} z + z' = 3 + 4i \\ z \times z' = -13 - i \end{cases}$ et $\begin{cases} z_1 + z_2^2 = 3 + 6i \\ z_1 \times z_2^2 = -8 + 6i \end{cases}$.

### 9. Transformations usuelles du plan

Si $F$ est une application du plan $\mathscr{P}$ dans lui-même, on peut lui associer une unique application $f$ de $\mathbb{C}$ dans $\mathbb{C}$ telle que pour tous points $M(z)$ et $M'(z')$ on ait $M' = F(M)$ si, et seulement si, $z' = f(z)$. Réciproquement, la donnée de $f$ caractérise l'application $F$. On dit alors que $f$ est représentée par $F$ dans le plan complexe $\mathscr{P}$.

#### 9.1. La translation

> **Définition 14.**
> Soit $\vec{u}$ un vecteur du plan. La translation de vecteur $\vec{u}$ est l'application du plan dans lui-même qui, à tout point $M$, associe l'unique point $M'$ tel que : $\overrightarrow{MM'} = \vec{u}$.

> **Proposition 33.**
> Soit $\vec{u}$ un vecteur du plan et $a$ son affixe. La translation de vecteur $\vec{u}$ est représentée dans le plan complexe $\mathscr{P}$ par l'application :
$$z \mapsto z' = z + a$$
> La relation $z' = z + a$ s'appelle l'écriture (ou la formule) complexe de la translation $T$ de vecteur $\vec{u}(a)$.

#### 9.2. L'homothétie

> **Définition 15.**
> Soit $\Omega$ un point du plan et $\lambda \in \mathbb{R}^*$. L'homothétie de centre $\Omega$ et de rapport $\lambda$ est l'application du plan dans lui-même qui, à tout point $M$, associe l'unique point $M'$ tel que : $\overrightarrow{\Omega M'} = \lambda\overrightarrow{\Omega M}$.

> **Proposition 34.**
> L'homothétie de centre $\Omega$, d'affixe $\omega$, et de rapport $\lambda$ est représentée dans le plan complexe $\mathscr{P}$ par l'application :
$$z \mapsto z' = \omega + \lambda(z - \omega)$$
> La relation $z' = \omega + \lambda(z - \omega)$ s'appelle l'écriture (ou la formule) complexe de l'homothétie $H$ de centre $\Omega(\omega)$ et de rapport $\lambda$.

> **Exemple.**
> Soit $f$ l'application du plan $\mathcal{P}$ dans lui-même qui, à tout point $M(z)$, associe le point $M'(z')$ telle que : $z' = -2z + 3 - 3i$. Déterminons les points invariants par l'application $f$ : $f(M) = M \Leftrightarrow z = -2z + 3 - 3i \Leftrightarrow z = 1 - i$. Par conséquent, $f$ admet un point invariant qui est $\Omega(1 - i)$. On a donc : $z' - (1 - i) = -2(z - (1 - i))$. Par suite, $f$ est l'homothétie de centre $\Omega(1 - i)$ et de rapport $-2$.

#### 9.3. La rotation

> **Définition 16.**
> Soit $\Omega$ un point du plan et $\theta \in \mathbb{R}$. La rotation de centre $\Omega$ et d'angle $\theta$ est l'application du plan dans lui-même qui transforme $\Omega$ en $\Omega$, et tout point $M \neq \Omega$ en l'unique point $M'$ tel que :
$$\Omega M' = \Omega M \quad \text{et} \quad \left(\widehat{\overrightarrow{\Omega M}, \overrightarrow{\Omega M'}}\right) \equiv \theta \,[2\pi]$$

> **Proposition 35.**
> La rotation de centre $\Omega$, d'affixe $\omega$, et d'angle $\theta$ est représentée dans le plan complexe $\mathcal{P}$ par l'application :
$$z \mapsto z' = \omega + e^{i\theta}(z - \omega)$$
> La relation $z' = \omega + e^{i\theta}(z - \omega)$ s'appelle l'écriture (ou la formule) complexe de la rotation $R$ de centre $\Omega(\omega)$ et d'angle $\theta$.

> **Exemple.**
> 1) Déterminons l'écriture complexe de la rotation $R$ de centre $\Omega(1 + i)$ et d'angle $\frac{3\pi}{4}$ : on a : $e^{i\frac{3\pi}{4}} = \frac{\sqrt{2}}{2}(-1 + i)$. L'écriture complexe de la rotation $R$ est : $z' = (1 + i) + e^{i\frac{3\pi}{4}}(z - (1 + i))$, c'est-à-dire : $z' = \frac{\sqrt{2}}{2}(-1 + i)z + \sqrt{2} + 1 + i$.
> 2) Soit $R_1$ la rotation de centre $\Omega_1(i)$ et qui transforme $O$ (l'origine du repère) en le point $O_1\left(\frac{-\sqrt{3} + i}{2}\right)$. On sait que l'écriture complexe de la rotation $R_1$ s'écrit sous la forme : $z' = e^{i\theta}(z - i) + i$. Et puisque $R_1(O) = O_1$, alors $e^{i\theta} = \dfrac{\frac{-\sqrt{3} + i}{2} - i}{0 - i} = \dfrac{1}{2} - i\dfrac{\sqrt{3}}{2}$. On en déduit alors que : $\theta \equiv -\frac{\pi}{3} \,[2\pi]$. Par suite, $R_1$ est la rotation de centre $\Omega_1(i)$ et d'angle $-\frac{\pi}{3}$.

> **Applications.**
> 1. Soit $f$ l'application du plan $\mathcal{P}$ dans lui-même qui, à tout point $M(z)$, associe le point $M'(z')$ telle que $z' = -e^{i\frac{\pi}{3}}z + 1 + e^{i\frac{\pi}{3}}$. Montrer que $f$ est une rotation dont on déterminera le centre et l'angle.
> 2. Soit $A(i)$ un point du plan complexe. Pour tout $M(z)$, on note $M'$ le point d'affixe $iz$. Déterminer les nombres complexes $z$ pour lesquels le triangle $AMM'$ est isocèle et rectangle en $M$.

#### 9.4. Composition de quelques transformations du plan

Dans ce paragraphe, nous allons examiner plusieurs compositions à partir des exemples.

**I) Composée de deux rotations :** On considère le point $A(i)$. Soit $R_0$ la rotation de centre $O$ (origine du repère) et d'angle $\frac{\pi}{6}$, et soit $R_1$ la rotation de centre $A$ et d'angle $\frac{\pi}{3}$. Déterminons $R_1 \circ R_0$ :
Pour tout point $M$ d'affixe $z$, on pose $M' = R_0(M)$ et $M'' = R_1(M')$. Soit $z'$ l'affixe de $M'$ et $z''$ l'affixe de $M''$. On a $z' = e^{i\frac{\pi}{6}}z$ et $z'' - z_A = e^{i\frac{\pi}{3}}(z' - z_A)$ où $z_A$ est l'affixe de $A$ (autrement dit, $z_A = i$). Il s'ensuit donc : $z'' - i = e^{i\frac{\pi}{3}}(z' - i)$, et alors : $z'' = i + e^{i\frac{\pi}{3}}(z' - i)$. On en déduit alors : $z'' = e^{i\frac{\pi}{3}}\cdot e^{i\frac{\pi}{6}}z + i\left(1 - e^{i\frac{\pi}{3}}\right)$. Comme $e^{i\frac{\pi}{3}}\cdot e^{i\frac{\pi}{6}} = e^{i\frac{\pi}{2}} = i$, alors : $z'' = iz + \frac{\sqrt{3}}{2} + \frac{1}{2}i$.
On sait que la composée de deux rotations est une rotation. On va maintenant déterminer le centre de la rotation $R_1 \circ R_0$, qui n'est rien d'autre que le point invariant $\Omega(\omega)$ par la transformation $R_1 \circ R_0$. On a $\omega = i\omega + \frac{\sqrt{3}}{2} + \frac{1}{2}i$, ce qui donne $\omega = \frac{\sqrt{3}-1}{4} + i\frac{\sqrt{3}+1}{4}$. Et comme $i = e^{i\frac{\pi}{2}}$, alors $R_1 \circ R_0$ est la rotation de centre $\Omega(\omega)$ et d'angle $\frac{\pi}{2}$.

**II) Composée d'une rotation et d'une translation :** Soit $ABC$ un triangle isocèle et rectangle en $A$ tel que $\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right) \equiv \frac{\pi}{2} \,[2\pi]$. Soit $R$ la rotation de centre $A$ et qui transforme $B$ en $C$, et soit $T$ la translation de vecteur $\overrightarrow{AB}$. Déterminons $F_1 = R \circ T$ et $F_2 = T \circ R$ :
On munit le plan du repère orthonormé $\left(A; \frac{\overrightarrow{AB}}{\|\overrightarrow{AB}\|}, \frac{\overrightarrow{AC}}{\|\overrightarrow{AC}\|}\right)$. L'angle de la rotation $R$ est $\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right)$ ; ainsi $R$ est la rotation de centre $A$ et d'angle $\frac{\pi}{2}$. L'écriture complexe de la rotation $R$ est $z' = e^{i\frac{\pi}{2}}z$, c'est-à-dire, $z' = iz$. L'écriture complexe de la translation $T$ est $z'' = z + 1$.
Pour tout $M$ d'affixe $z$, on pose $M_1 = F_1(M)$, et on note $z_1$ l'affixe de $M_1$ ; $M_2 = F_2(M)$, et on note $z_2$ l'affixe de $M_2$. On a : $z_1 = i(z + 1)$ et $z_2 = iz + 1$. Et puisque : $z = i(z + 1) \Leftrightarrow (1 - i)z = i \Leftrightarrow z = \frac{-1 + i}{2}$, alors $\Omega_1\left(\frac{-1 + i}{2}\right)$ est l'unique point invariant par l'application $F_1$. L'écriture complexe de l'application $F_1$ s'écrit : $z_1 = e^{i\frac{\pi}{2}}z + \omega_1\left(1 - e^{i\frac{\pi}{2}}\right)$ où $\omega_1 = \frac{-1 + i}{2}$. $F_1$ est donc la rotation de centre $\Omega_1\left(\frac{-1 + i}{2}\right)$ et d'angle $\frac{\pi}{2}$.
De plus, $\Omega_2\left(\frac{1 + i}{2}\right)$ est l'unique point invariant par l'application $F_2$. $F_2$ est donc la rotation de centre $\Omega_2\left(\frac{1 + i}{2}\right)$ et d'angle $\frac{\pi}{2}$ ; ceci car $z_2 = e^{i\frac{\pi}{2}}z + \omega_2\left(1 - e^{i\frac{\pi}{2}}\right)$ où $\omega_2 = \frac{1 + i}{2}$. De l'égalité $z_2 - z_1 = 1 - i$ on tire $\overrightarrow{M_1M_2} = \overrightarrow{CB}$, ce qui montre que $CBM_1M_2$ est un parallélogramme.

**III) Composée d'une homothétie et d'une translation :** Soit $k \in \mathbb{R}^* - \{1\}$, et $H$ l'homothétie de centre un point $\Omega(\omega)$ donné et de rapport $k$. Soit $b$ un nombre complexe donné et $\vec{u}(b)$ le vecteur image de $b$, et $T$ la translation de vecteur $\vec{u}$. On pose : $F = H \circ T$ et $G = T \circ H$.
L'écriture complexe de l'homothétie $H$ est : $z_1 = kz + \omega(1 - k)$. L'écriture complexe de la translation $T$ est : $z_2 = z + b$. Déterminons l'écriture complexe des transformations $F$ et $G$ :
Pour tout $M(z)$, on pose $F(M) = M'$ et $G(M) = M''$. On note $z'$ l'affixe de $M'$, et $z''$ l'affixe de $M''$.
- On a $M' = H(M_2)$ où $M_2 = T(M)$, donc : $z' = kz_2 + \omega(1 - k) = k(z + b) + \omega(1 - k)$. Par suite, $z' = kz + kb + (1-k)\omega$ est l'écriture complexe de la transformation $F$. Il est facile de montrer que l'application $F$ admet $A\left(\frac{k}{1-k}b + \omega\right)$ comme unique point invariant, et que $F$ est l'homothétie de centre $A$ et de rapport $k$.
- On a $M'' = T(M_1)$ où $M_1 = H(M)$, donc : $z'' = z_1 + b$. Par suite, $z'' = kz + b + (1-k)\omega$ est l'écriture complexe de la transformation $G$. Il est facile de montrer que l'application $G$ admet $B\left(\frac{b}{1-k} + \omega\right)$ comme unique point invariant, et que $G$ est l'homothétie de centre $B$ et de rapport $k$.

**IV) Composée d'une rotation et d'une homothétie :** Soit $A$ le point d'affixe 2, et soit $\varphi$ l'application du plan $\mathcal{P}$ dans lui-même qui, à chaque point $M(z)$, associe le point $M_2(z_2)$ tel que : $z_2 = \frac{3+i\sqrt{3}}{4}z + \frac{1-i\sqrt{3}}{2}$. Soit $h$ l'homothétie de centre $A$ et de rapport $\frac{2}{\sqrt{3}}$ et on pose $f = \varphi \circ h$.
On pose $z_A = 2$. On a : $\frac{3+i\sqrt{3}}{4}z_A + \frac{1-i\sqrt{3}}{2} = z_A$, donc $\varphi(A) = A$. Cela signifie donc que $A$ est invariant par $\varphi$. L'écriture complexe de l'homothétie $h$ est : $z_1 = \frac{2}{\sqrt{3}}(z - 2) + 2$. Pour tout point $M(z)$, on pose $M' = f(M)$ et on note $z'$ l'affixe de $M'$. On a : $z' = \frac{3+i\sqrt{3}}{4}z_1 + \frac{1-i\sqrt{3}}{2}$, qu'on peut écrire encore : $z' - 2 = \frac{3+i\sqrt{3}}{4}(z_1 - 2)$. Comme $z_1 - 2 = \frac{2}{\sqrt{3}}(z - 2)$ alors $z' - 2 = \frac{3+i\sqrt{3}}{4} \times \frac{2}{\sqrt{3}}(z - 2)$, et donc : $z' - 2 = \frac{\sqrt{3}+i}{2}(z - 2)$. Et puisque $\frac{\sqrt{3}+i}{2} = e^{i\frac{\pi}{6}}$ alors : $z' - 2 = e^{i\frac{\pi}{6}}(z - 2)$. Ce qui montre bien que $f$ est la rotation de centre $A$ et d'angle $\frac{\pi}{6}$.
Et puisque $f = \varphi \circ h$, alors $f \circ h^{-1} = (\varphi \circ h) \circ h^{-1} = \varphi \circ (h \circ h^{-1}) = \varphi$ (car $h \circ h^{-1} = Id_{\mathcal{P}}$). D'où : $\varphi = f \circ h^{-1}$. Ainsi, l'application $\varphi$ est la composée de la rotation de centre $A$ et d'angle $\frac{\pi}{6}$, et de l'homothétie de centre $A$ et de rapport $\frac{\sqrt{3}}{2}$.

> **En résumé.** $a$ et $b$ sont deux nombres complexes tels que $a \neq 0$. Soit $T$ la transformation du plan d'écriture complexe $z' = az + b$.
> - Si $a = 1$ alors $T$ est la translation de vecteur $\vec{u}$ d'affixe $b$.
> - Si $a \in \mathbb{R}^* - \{1\}$ alors $T$ est l'homothétie de centre $\Omega\left(\frac{b}{1-a}\right)$ et de rapport $a$.
> - Si $a \notin \mathbb{R}$ et $|a| = 1$, alors $T$ est la rotation de centre $\Omega\left(\frac{b}{1-a}\right)$ d'angle $\arg(a)$.
> - Si $a \notin \mathbb{R}$ et $|a| \neq 1$, alors $T$ est la composée de la rotation $R$ de centre $\Omega\left(\frac{b}{1-a}\right)$ et d'angle $\arg(a)$, et de l'homothétie $H$ de centre $\Omega\left(\frac{b}{1-a}\right)$ et de rapport $|a|$. Dans ce cas, on a : $T = R \circ H = H \circ R$.

> **Applications.**
> 1. Soit $F$ une transformation du plan définie par son écriture complexe. Pour chacun des cas suivants, déterminer la nature et les éléments caractéristiques de $F$ :
>    a) $z' = z - 1 + 2i$ ;
>    b) $z' = \frac{3}{2}z + 1 - i$ ;
>    c) $z' = (\sqrt{3} - 1)z + 1 + i\sqrt{3}$ ;
>    d) $z' = \left(-\frac{1}{2} + \frac{\sqrt{3}}{2}i\right)z - 2i$ ;
>    e) $z' = (2 + 2\sqrt{3}i)z - 7 - i$.
> 2. Soit $H$ l'homothétie de centre $A(i)$ et de rapport $-4$, et $R$ la rotation de centre $B(2)$ et d'angle $-\frac{\pi}{4}$. On désigne par $T$ la translation de vecteur $\overrightarrow{AB}$. Déterminer la nature et les éléments caractéristiques de chacune des transformations suivantes : $H \circ T$ ; $H \circ R$ ; $H \circ T \circ R$.
> 3. Le plan complexe $\mathcal{P}$ est muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$. Soit $F$ l'application définie de $\mathcal{P}$ dans lui-même qui, à tout point $M(z)$, associe le point $M'(z')$ telle que : $z' = u^2z + u - 1$ où $u \in \mathbb{C}$.
>    a) Déterminer $E_1$ l'ensemble des valeurs $u$ pour lesquelles $F$ est une translation.
>    b) Déterminer $E_2$ l'ensemble des valeurs $u$ pour lesquelles $F$ est une rotation d'angle $\frac{\pi}{2}$.
>    c) Déterminer $E_3$ l'ensemble des valeurs $u$ pour lesquelles $F$ est une homothétie de rapport $-2$.
>    d) On pose $u = 1 - i$. Montrer que l'application $F$ est la composée d'une rotation d'angle $\frac{\pi}{2}$ et d'une homothétie de rapport $-2$ et qui ont un centre commun $\Omega$ que l'on déterminera.

## Méthodes

### A. Forme algébrique — forme trigonométrique

1) Calculer les parties réelle et imaginaire des nombres complexes suivants :
$$z_1 = (3 + 2i)^2(2 - i) \quad ; \quad z_2 = (3 + i)(2 - 3i)(4 + 5i) \quad ; \quad z_3 = (1 + i)^{10} \quad ; \quad z_4 = (2 - i)^4$$
$$z_5 = (4 - i)^3 + (1 + 5i)(2 + 3i)^3 \quad ; \quad z_6 = \frac{(3 + 2i)(1 + i)}{1 - i} \quad ; \quad z_7 = \frac{(5 - i)(2 - 3i)}{(1 + i)(1 - 2i)}$$

2) Soit les nombres complexes suivants : $z = 1 + i$ ; $z' = 1 + i\sqrt{3}$ ; $z'' = z \cdot z'$. Déterminer le module et un argument de chacun des nombres complexes $z$, $z'$ et $z''$. En déduire les valeurs exactes de : $\cos\frac{7\pi}{12}$ et $\sin\frac{7\pi}{12}$.

3) Calculer le module et un argument de chacun des nombres complexes suivants :
a) $\dfrac{1+i}{\sqrt{3}-i}$ ; b) $1+i\tan\theta$ ; c) $(1+i)^n$ ; d) $\dfrac{1+\cos\theta+i\sin\theta}{1-\cos\theta-i\sin\theta}$,
où $n \in \mathbb{N}$ et $\theta \in \mathbb{R}$ est tel que la quantité étudiée soit définie.

4) Mettre les nombres complexes suivants sous forme algébrique : ($n \in \mathbb{N}$ et $\theta \in \mathbb{R}$)
$$A = \left(1 + i\sqrt{3}\right)^9 \quad ; \quad B = \left(\frac{1 + i\sqrt{3}}{1 + i}\right)^{125} \quad ; \quad C = (1 + \cos\theta + i\sin\theta)^n$$

> **Solution.**
>
> 1) Calcul de la partie réelle et imaginaire :
> - On a $(3+2i)^2 = 9 + 12i - 4 = 5 + 12i$. Ensuite, $(5+12i)(2-i) = 10 - 5i + 24i + 12 = 22 + 19i$, par suite : $z_1 = 22 + 19i$. On conclut que : $\operatorname{Re}(z_1) = 22$ et $\operatorname{Im}(z_1) = 19$.
> - On a tout d'abord : $(3+i)(2-3i) = 9 - 7i$. Ensuite : $(9-7i)(4+5i) = 71 + 17i$, par suite : $z_2 = 71 + 17i$. On conclut que : $\operatorname{Re}(z_2) = 71$ et $\operatorname{Im}(z_2) = 17$.
> - On a $(1+i)^2 = 2i$, par conséquent : $(1+i)^{10} = ((1+i)^2)^5 = (2i)^5 = 32i^5 = 32i$. Ainsi : $z_3 = 32i$. On conclut que : $\operatorname{Re}(z_3) = 0$ et $\operatorname{Im}(z_3) = 32$.
> - On a $(2-i)^2 = 3 - 4i$, donc $(2-i)^4 = (3-4i)^2 = -7 - 24i$. Ainsi : $z_4 = -7 - 24i$. On conclut que : $\operatorname{Re}(z_4) = -7$ et $\operatorname{Im}(z_4) = -24$.
> - On a : $(4-i)^3 = 4^3 - 3 \times 4^2 \times i + 3 \times 4 \times i^2 - i^3 = 64 - 48i - 12 + i = 52 - 47i$. Ensuite : $(2+3i)^3 = 2^3 + 3 \times 2^2 \times (3i) + 3 \times 2 \times (3i)^2 + (3i)^3 = 8 + 36i - 54 - 27i = -46 + 9i$. Par conséquent : $z_5 = 52 - 47i + (1+5i)(-46+9i) = 52 - 47i - 46 + 9i - 230i - 45 = -39 - 268i$. Ainsi : $z_5 = -39 - 268i$. On conclut que : $\operatorname{Re}(z_5) = -39$ et $\operatorname{Im}(z_5) = -268$.
> - On a $\dfrac{1+i}{1-i} = \dfrac{(1+i)^2}{1^2-i^2} = \dfrac{2i}{2} = i$. Par conséquent : $z_6 = i(3+2i) = -2+3i$. Ainsi : $z_6 = -2+3i$. On conclut que : $\operatorname{Re}(z_6) = -2$ et $\operatorname{Im}(z_6) = 3$.
> - On a : $\dfrac{(5-i)(2-3i)}{(1+i)(1-2i)} = \dfrac{10-15i-2i-3}{1-2i+i+2} = \dfrac{7-17i}{3-i}$ ; de plus : $\dfrac{7-17i}{3-i} = \dfrac{(7-17i)(3+i)}{3^2-i^2} = \dfrac{38-44i}{10}$. Ainsi : $z_7 = \dfrac{19}{5} - \dfrac{22}{5}i$. On conclut que : $\operatorname{Re}(z_7) = \dfrac{19}{5}$ et $\operatorname{Im}(z_7) = -\dfrac{22}{5}$.
>
> 2) Soit les nombres complexes suivants : $z = 1+i$ ; $z' = 1+i\sqrt{3}$ ; $z'' = z \cdot z'$.
> - Par définition : $|z| = \sqrt{1+1} = \sqrt{2}$ ; d'où : $z = \sqrt{2}\left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right) = \sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) = \left[\sqrt{2}; \frac{\pi}{4}\right]$. Ainsi : $|z| = \sqrt{2}$ et $\arg z \equiv \frac{\pi}{4} \,[2\pi]$.
> - Par définition : $|z'| = \sqrt{1+3} = 2$ ; d'où : $z' = 2\left(\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = 2\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right) = \left[2; \frac{\pi}{3}\right]$. Ainsi : $|z'| = 2$ et $\arg z' \equiv \frac{\pi}{3} \,[2\pi]$.
> - Comme $z'' = z \cdot z'$ alors : $|z''| = |z|\cdot|z'|$ et $\arg z'' \equiv \arg z + \arg z' \,[2\pi]$. Ainsi : $|z''| = 2\sqrt{2}$ et $\arg z'' \equiv \frac{7\pi}{12} \,[2\pi]$.
> - Détermination des valeurs exactes de $\cos\frac{7\pi}{12}$ et $\sin\frac{7\pi}{12}$ : d'après ce qui précède : $z'' = \left[2\sqrt{2}; \frac{7\pi}{12}\right]$. On a également : $z'' = (1+i)(1+i\sqrt{3}) = (1-\sqrt{3}) + i(1+\sqrt{3})$. Par identification, respectivement, des parties réelles et imaginaires, on obtient :
$$\cos\frac{7\pi}{12} = \frac{1-\sqrt{3}}{2\sqrt{2}} = \frac{\sqrt{2}-\sqrt{6}}{4} \quad \text{et} \quad \sin\frac{7\pi}{12} = \frac{1+\sqrt{3}}{2\sqrt{2}} = \frac{\sqrt{2}+\sqrt{6}}{4}$$
>
> **À retenir :**
> - Pour effectuer des calculs dans l'ensemble des nombres complexes, on applique les mêmes règles de calcul que dans $\mathbb{R}$, en utilisant le fait que $i^2 = -1$.
> - Pour tout $p \in \mathbb{N}$ : $i^{2p} = (-1)^p$ et $i^{2p+1} = (-1)^p i$.
> - Pour simplifier un quotient, on essaye parfois de multiplier le numérateur et le dénominateur par l'expression conjuguée.
> - Pour mettre un nombre complexe non nul sous forme trigonométrique : dans les cas simples, on divise $z = a + ib$ par son module, en espérant reconnaître des valeurs usuelles de $\cos$ et $\sin$ ; sinon on utilise les formules de module $|z| = \sqrt{a^2 + b^2}$ et d'argument :
$$\arg z \equiv \operatorname{Arctan}\left(\frac{b}{a}\right) \,[2\pi] \text{ (si } a > 0\text{)} \quad \text{ou} \quad \arg z \equiv \operatorname{Arctan}\left(\frac{b}{a}\right) + \pi \,[2\pi] \text{ (si } a < 0\text{)}$$
> - Pour obtenir des résultats en trigonométrie lorsqu'on dispose de l'écriture algébrique et de l'écriture trigonométrique d'un nombre complexe non nul, il faut penser à identifier respectivement les parties réelles et les parties imaginaires dans ces deux écritures.
>
> 3) Calcul de module et d'un argument des nombres complexes suivants :
> a) Pour le nombre complexe $\dfrac{1+i}{\sqrt{3}-i}$ :
$$\frac{1+i}{\sqrt{3}-i} = \frac{\sqrt{2}\left(\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i\right)}{2\left(\frac{\sqrt{3}}{2} - \frac{1}{2}i\right)} = \frac{\left[\sqrt{2}; \frac{\pi}{4}\right]}{\left[2; -\frac{\pi}{6}\right]} = \left[\frac{\sqrt{2}}{2}; \frac{\pi}{4} + \frac{\pi}{6}\right] = \left[\frac{\sqrt{2}}{2}; \frac{5\pi}{12}\right].$$
>   Le module de $\dfrac{1+i}{\sqrt{3}-i}$ est donc $\dfrac{\sqrt{2}}{2}$ et $\dfrac{5\pi}{12}$ en est un argument.
> b) Pour le nombre complexe $1+i\tan\theta$ : pour que $\tan\theta$ soit défini, on doit avoir $\theta \neq \frac{\pi}{2} \,[\pi]$. On calcule alors : $|1+i\tan\theta| = \sqrt{1+\tan^2\theta} = \sqrt{\frac{1}{\cos^2\theta}} = \frac{1}{|\cos\theta|}$.
>   - Si $\cos\theta > 0$, on a alors : $1 + i\tan\theta = \frac{1}{\cos\theta}(\cos\theta + i\sin\theta) = \left[\frac{1}{\cos\theta}; \theta\right]$.
>   - Si $\cos\theta < 0$, on a alors : $1+i\tan\theta = -\frac{1}{\cos\theta}(-\cos\theta - i\sin\theta) = -\frac{1}{\cos\theta}(\cos(\pi+\theta) + i\sin(\pi+\theta)) = \left[-\frac{1}{\cos\theta}; \pi+\theta\right]$.
> c) Pour le nombre complexe $(1+i)^n$ : on a pour tout $n \in \mathbb{N}$ : $(1+i)^n = \left[\sqrt{2}; \frac{\pi}{4}\right]^n = \left[(\sqrt{2})^n; \frac{n\pi}{4}\right]$. Il en résulte que : le module de $(1+i)^n$ est $(\sqrt{2})^n$ et un argument en est $\frac{n\pi}{4}$.
> d) Pour le nombre complexe $\dfrac{1+\cos\theta+i\sin\theta}{1-\cos\theta-i\sin\theta}$ : l'expression est définie si et seulement si $\cos\theta+i\sin\theta = e^{i\theta} \neq 1$, c'est-à-dire $\theta \not\equiv 0 \,[2\pi]$. On a donc :
$$z = \frac{1+\cos\theta+i\sin\theta}{1-\cos\theta-i\sin\theta} = \frac{2\cos^2\left(\frac{\theta}{2}\right) + 2i\sin\left(\frac{\theta}{2}\right)\cos\left(\frac{\theta}{2}\right)}{2\sin^2\left(\frac{\theta}{2}\right) - 2i\sin\left(\frac{\theta}{2}\right)\cos\left(\frac{\theta}{2}\right)} = \frac{2\cos\left(\frac{\theta}{2}\right)\left(\cos\left(\frac{\theta}{2}\right) + i\sin\left(\frac{\theta}{2}\right)\right)}{-2i\sin\left(\frac{\theta}{2}\right)\left(\cos\left(\frac{\theta}{2}\right) + i\sin\left(\frac{\theta}{2}\right)\right)} = \frac{i}{\tan\left(\frac{\theta}{2}\right)}.$$
>   Ainsi : $|z| = \frac{1}{\left|\tan\left(\frac{\theta}{2}\right)\right|}$. Un argument en est $\frac{\pi}{2}$ si $\tan\left(\frac{\theta}{2}\right) > 0$, $-\frac{\pi}{2}$ sinon.
>
> 4) Mettre les nombres complexes suivants sous forme algébrique : ($n \in \mathbb{N}$ et $\theta \in \mathbb{R}$)
> - Pour le nombre complexe $A$ : on a : $1 + i\sqrt{3} = \left[2; \frac{\pi}{3}\right]$. Par conséquent : $A = \left(1 + i\sqrt{3}\right)^9 = \left[2; \frac{\pi}{3}\right]^9 = \left[2^9; 3\pi\right] = \left[2^9; \pi\right] = -2^9$. Par suite : $A = -512$.
> - Pour le nombre complexe $B$ : on a : $1 + i\sqrt{3} = \left[2; \frac{\pi}{3}\right]$ et $1 + i = \left[\sqrt{2}; \frac{\pi}{4}\right]$. Par conséquent :
$$\left(1 + i\sqrt{3}\right)^{125} = \left[2; \frac{\pi}{3}\right]^{125} = \left[2^{125}; \frac{125\pi}{3}\right] = \left[2^{125}; 42\pi - \frac{\pi}{3}\right] = \left[2^{125}; -\frac{\pi}{3}\right]$$
>   ce qui donne : $\left(1 + i\sqrt{3}\right)^{125} = 2^{125}\left(\cos\left(-\frac{\pi}{3}\right) + i\sin\left(-\frac{\pi}{3}\right)\right) = 2^{124}\left(1 - i\sqrt{3}\right)$.
>   De même : $\left(1 + i\right)^{125} = \left[\sqrt{2}; \frac{\pi}{4}\right]^{125} = \left[(\sqrt{2})^{125}; \frac{125\pi}{4}\right] = \left[2^{62}\sqrt{2}; 32\pi - \frac{3\pi}{4}\right] = \left[2^{62}\sqrt{2}; -\frac{3\pi}{4}\right]$. Il s'ensuit : $\left(1 + i\right)^{125} = 2^{62}\sqrt{2}\left(\cos\left(-\frac{3\pi}{4}\right) + i\sin\left(-\frac{3\pi}{4}\right)\right) = 2^{62}\left(-1 - i\right)$.
>   Donc : $B = \dfrac{\left(1 + i\sqrt{3}\right)^{125}}{\left(1 + i\right)^{125}} = \dfrac{2^{124}\left(1 - i\sqrt{3}\right)}{2^{62}\left(-1 - i\right)} = -2^{62}\dfrac{1 - i\sqrt{3}}{1 + i} = 2^{61}\left(-1 + i\sqrt{3}\right)\left(1 - i\right)$. Ainsi : $B = 2^{62}\left((\sqrt{3} - 1) + i(\sqrt{3} + 1)\right) = 2^{61}(\sqrt{3} - 1) + 2^{61}(\sqrt{3} + 1)i$.
> - Pour le nombre complexe $C$ : on a : $1 + \cos\theta + i\sin\theta = 2\cos\left(\frac{\theta}{2}\right)\left(\cos\left(\frac{\theta}{2}\right) + i\sin\left(\frac{\theta}{2}\right)\right)$. D'après la formule de Moivre :
$$C = 2^n\cos^n\left(\frac{\theta}{2}\right)\left(\cos\left(\frac{n\theta}{2}\right) + i\sin\left(\frac{n\theta}{2}\right)\right) = 2^n\cos^n\left(\frac{\theta}{2}\right)\cos\left(\frac{n\theta}{2}\right) + 2^n i\cos^n\left(\frac{\theta}{2}\right)\sin\left(\frac{n\theta}{2}\right)$$
>
> **À retenir :**
> - Lorsqu'on calcule le module et un argument d'un quotient, d'un produit, d'une puissance, il est souvent plus pratique de calculer le module et un argument de chacun des termes, puis d'utiliser les formules du cours.
> - Pour calculer les puissances élevées d'un nombre complexe, on utilise sa forme trigonométrique. La formule de Moivre permet alors de simplifier le calcul. De manière générale :
>   - L'écriture algébrique $x + iy$, $(x; y) \in \mathbb{R}^2$, est conseillée pour des calculs additifs.
>   - L'écriture trigonométrique (et aussi exponentielle) $[r; \theta]$, $(r; \theta) \in \mathbb{R}_+^* \times \mathbb{R}$, est conseillée pour des calculs multiplicatifs.

### B. Manipulation de la forme exponentielle

1) Mettre les nombres complexes suivants sous la forme exponentielle :
$$z_1 = \frac{3}{1+i} \quad ; \quad z_2 = -4e^{i\frac{\pi}{5}} \quad ; \quad z_3 = \left(\frac{-\sqrt{3}+i}{1-i}\right)^{96} \quad ; \quad z_4 = \frac{(\sqrt{6}-i\sqrt{2})(1+i)}{1-i}$$

2) Soit $(\theta; \alpha) \in \mathbb{R}^2$ avec $\alpha \not\equiv \pi \,[2\pi]$. Déterminer la partie réelle de : $A = \dfrac{e^{i\theta} + 1}{e^{i\alpha} + e^{2i\alpha}}$ et $B = \dfrac{e^{i\theta} - 1}{e^{i\alpha} + e^{2i\alpha}}$.

3) Soit $(p; q) \in \mathbb{R}^2$. Factoriser : $\sin p + \sin q$ ; $\cos p + \cos q$ ; $\cos p + \sin q$.

4) Soit $x \in \mathbb{R}$. Linéariser $\cos^5 x$ et $\cos^2 x \cdot \sin^3 x$.

5) Soit $(x; \alpha) \in \mathbb{R}^2$ et $n \in \mathbb{N}$. Calculer les sommes suivantes : (Indication : on pourra calculer $C_n + iS_n$)
$$C_n = \sum_{k=0}^n \cos(x+k\alpha) \quad ; \quad S_n = \sum_{k=0}^n \sin(x+k\alpha)$$

6) Soit $z_1$, $z_2$ des nombres complexes tels que : $|z_1| = |z_2| = 1$. Montrer que : $\dfrac{(z_1 + z_2)^2}{z_1 \cdot z_2} \in \mathbb{R}^+$.

> **Solution.**
>
> 1) Mettre les nombres complexes sous forme exponentielle :
> - On a : $1+i = \sqrt{2}\,e^{i\frac{\pi}{4}}$ ; il s'ensuit donc : $z_1 = \dfrac{3}{\sqrt{2}\,e^{i\frac{\pi}{4}}} = \dfrac{3\sqrt{2}}{2}e^{-i\frac{\pi}{4}}$.
> - On a immédiatement : $z_2 = -4e^{i\frac{\pi}{5}} = 4e^{i\pi}e^{i\frac{\pi}{5}} = 4e^{i\frac{6\pi}{5}}$.
> - On a : $-\sqrt{3}+i = 2\left(-\frac{\sqrt{3}}{2} + \frac{1}{2}i\right) = 2e^{i\frac{5\pi}{6}}$ et $1-i = \sqrt{2}\left(\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i\right) = \sqrt{2}\,e^{-i\frac{\pi}{4}}$. D'où :
$$z_3 = \left(\frac{2e^{i\frac{5\pi}{6}}}{\sqrt{2}\,e^{-i\frac{\pi}{4}}}\right)^{96} = \left(\sqrt{2}\,e^{i\frac{13\pi}{12}}\right)^{96} = (\sqrt{2})^{96}e^{104i\pi} = 2^{48}(e^{2i\pi})^{52}. \quad \text{Par suite : } z_3 = 2^{48}.$$
> - On a : $\sqrt{6}-i\sqrt{2} = 2\sqrt{2}\,e^{-i\frac{\pi}{6}}$ et $1+i = \sqrt{2}\,e^{i\frac{\pi}{4}}$ et $1-i = \sqrt{2}\,e^{-i\frac{\pi}{4}}$. Par conséquent :
$$z_4 = \frac{2\sqrt{2}\,e^{-i\frac{\pi}{6}} \cdot \sqrt{2}\,e^{i\frac{\pi}{4}}}{\sqrt{2}\,e^{-i\frac{\pi}{4}}} = 2\sqrt{2}\,e^{i\left(\frac{\pi}{4} - \frac{\pi}{6} + \frac{\pi}{4}\right)} = 2\sqrt{2}\,e^{i\frac{\pi}{3}}$$
>
> 2) Soit $(\theta; \alpha) \in \mathbb{R}^2$ avec $\alpha \not\equiv \pi \,[2\pi]$.
> - Déterminons la partie réelle de $A$ : on utilise la factorisation par l'arc moitié pour le numérateur et le dénominateur :
$$e^{i\theta} + 1 = e^{i\frac{\theta}{2}}\left(e^{i\frac{\theta}{2}} + e^{-i\frac{\theta}{2}}\right) = 2e^{i\frac{\theta}{2}}\cos\frac{\theta}{2} \quad \text{et} \quad e^{i\alpha} + e^{2i\alpha} = e^{i\frac{3\alpha}{2}}\left(e^{-i\frac{\alpha}{2}} + e^{i\frac{\alpha}{2}}\right) = 2e^{i\frac{3\alpha}{2}}\cos\frac{\alpha}{2}$$
>   On remarque que cette dernière expression est non nulle étant donné qu'on a $\alpha \not\equiv \pi \,[2\pi]$. On peut donc considérer le quotient des deux expressions : $A = \dfrac{2e^{i\frac{\theta}{2}}\cos\frac{\theta}{2}}{2e^{i\frac{3\alpha}{2}}\cos\frac{\alpha}{2}} = \dfrac{\cos\frac{\theta}{2}}{\cos\frac{\alpha}{2}}e^{i\left(\frac{\theta - 3\alpha}{2}\right)}$. Par suite : $\operatorname{Re}(A) = \dfrac{\cos\frac{\theta}{2}}{\cos\frac{\alpha}{2}}\operatorname{Re}\left(e^{i\left(\frac{\theta - 3\alpha}{2}\right)}\right) = \dfrac{\cos\left(\frac{\theta}{2}\right)\cos\left(\frac{\theta - 3\alpha}{2}\right)}{\cos\frac{\alpha}{2}}$.
> - Déterminons la partie réelle de $B$ : comme dans l'exemple précédent, on écrit : $e^{i\theta} - 1 = 2ie^{i\frac{\theta}{2}}\sin\frac{\theta}{2}$ et $e^{i\alpha} + e^{2i\alpha} = 2e^{i\frac{3\alpha}{2}}\cos\frac{\alpha}{2}$. Il s'ensuit donc : $B = \dfrac{2ie^{i\frac{\theta}{2}}\sin\frac{\theta}{2}}{2e^{i\frac{3\alpha}{2}}\cos\frac{\alpha}{2}} = \dfrac{\sin\frac{\theta}{2}}{\cos\frac{\alpha}{2}}ie^{i\left(\frac{\theta - 3\alpha}{2}\right)}$. On trouve : $\operatorname{Re}(B) = -\dfrac{\sin\left(\frac{\theta}{2}\right)\sin\left(\frac{\theta - 3\alpha}{2}\right)}{\cos\frac{\alpha}{2}}$.
>
> **À retenir :**
> - Il est important de savoir retrouver l'égalité : $1 + e^{i\theta} = 2\cos\left(\frac{\theta}{2}\right)e^{i\frac{\theta}{2}}$. L'angle $\frac{\theta}{2}$ se retrouve géométriquement en construisant les points d'affixes $1$, $e^{i\theta}$ et $1 + e^{i\theta}$ : on écrit alors $1 + e^{i\theta} = e^{i\frac{\theta}{2}}\left(e^{-i\frac{\theta}{2}} + e^{i\frac{\theta}{2}}\right) = 2\cos\left(\frac{\theta}{2}\right)e^{i\frac{\theta}{2}}$.
> - De même, en construisant les points d'affixes $e^{i\theta}$, $e^{i\theta'}$ et $e^{i\theta} + e^{i\theta'}$, on voit apparaître l'angle $\frac{\theta + \theta'}{2}$ :
$$e^{i\theta} + e^{i\theta'} = e^{i\frac{\theta + \theta'}{2}}\left(e^{i\frac{\theta - \theta'}{2}} + e^{-i\frac{\theta - \theta'}{2}}\right) = 2\cos\left(\frac{\theta - \theta'}{2}\right)e^{i\frac{\theta + \theta'}{2}}$$
> - De la même manière, on montre : $e^{i\theta} - 1 = e^{i\frac{\theta}{2}}\left(e^{i\frac{\theta}{2}} - e^{-i\frac{\theta}{2}}\right) = 2i\sin\left(\frac{\theta}{2}\right)e^{i\frac{\theta}{2}}$, et $e^{i\theta} - e^{i\theta'} = e^{i\frac{\theta + \theta'}{2}}\left(e^{i\frac{\theta - \theta'}{2}} - e^{-i\frac{\theta - \theta'}{2}}\right) = 2i\sin\left(\frac{\theta - \theta'}{2}\right)e^{i\frac{\theta + \theta'}{2}}$.
> - Il est souhaitable de connaître les formes trigonométriques et exponentielles de quelques nombres particuliers à savoir (on suppose ici $a \in \mathbb{R}^+$ et $b \in \mathbb{R}^+$) :
$$a = [a; 0] = ae^{i0} \quad ; \quad -a = [a; \pi] = ae^{i\pi} \quad ; \quad ib = \left[b; \frac{\pi}{2}\right] = be^{i\frac{\pi}{2}} \quad ; \quad -ib = \left[b; -\frac{\pi}{2}\right] = be^{-i\frac{\pi}{2}}$$
$$i = \left[1; \frac{\pi}{2}\right] = e^{i\frac{\pi}{2}} \quad ; \quad -i = \left[1; -\frac{\pi}{2}\right] = e^{-i\frac{\pi}{2}} \quad ; \quad j = \left[1; \frac{2\pi}{3}\right] = e^{i\frac{2\pi}{3}}$$
>   Ces égalités sont très utiles dans la géométrie des nombres complexes.
>
> 3) Soit $(p; q) \in \mathbb{R}^2$. Factorisons les expressions suivantes : la factorisation par l'arc moitié donne $e^{ip} + e^{iq} = 2\cos\left(\frac{p-q}{2}\right)e^{i\frac{p+q}{2}}$. Il s'ensuit donc :
$$\sin p + \sin q = \operatorname{Im}(e^{ip} + e^{iq}) = 2\cos\left(\frac{p - q}{2}\right)\sin\left(\frac{p + q}{2}\right)$$
$$\cos p + \cos q = \operatorname{Re}(e^{ip} + e^{iq}) = 2\cos\left(\frac{p - q}{2}\right)\cos\left(\frac{p + q}{2}\right)$$
$$\cos p + \sin q = \cos p + \cos\left(q - \frac{\pi}{2}\right) = 2\cos\left(\frac{p + q}{2} - \frac{\pi}{4}\right)\cos\left(\frac{p - q}{2} + \frac{\pi}{4}\right)$$
>
> 4) Linéarisons les expressions $\cos^5 x$ et $\cos^2 x \cdot \sin^3 x$ :
> - Pour l'expression $\cos^5 x$ : d'après la formule d'Euler : $\cos x = \dfrac{e^{ix} + e^{-ix}}{2}$ ; donc : $\cos^5 x = \left(\dfrac{e^{ix} + e^{-ix}}{2}\right)^5$. En utilisant la formule du binôme de Newton, on obtient :
$$\begin{aligned} \cos^5 x &= \frac{1}{2^5}\left(e^{5ix} + 5e^{4ix}e^{-ix} + 10e^{3ix}e^{-2ix} + 10e^{2ix}e^{-3ix} + 5e^{ix}e^{-4ix} + e^{-5ix}\right) \\ &= \frac{1}{2^5}\left(e^{5ix} + 5e^{3ix} + 10e^{ix} + 10e^{-ix} + 5e^{-3ix} + e^{-5ix}\right) \\ &= \frac{1}{2^5}\left(2\cos(5x) + 10\cos(3x) + 20\cos x\right) \end{aligned}$$
>   Par suite : $\cos^5 x = \dfrac{1}{16}\cos(5x) + \dfrac{5}{16}\cos(3x) + \dfrac{5}{8}\cos x$.
> - Pour l'expression $\cos^2 x \cdot \sin^3 x$ : d'après la formule d'Euler : $\cos x = \dfrac{e^{ix} + e^{-ix}}{2}$ et $\sin x = \dfrac{e^{ix} - e^{-ix}}{2i}$. Donc :
$$\begin{aligned} \cos^2 x \cdot \sin^3 x &= -\frac{1}{2^5 i}\left(e^{2ix} + e^{-2ix} + 2\right)\left(e^{3ix} - 3e^{ix} + 3e^{-ix} - e^{-3ix}\right) \\ &= -\frac{1}{2^5 i}\left(e^{5ix} - e^{-5ix} - e^{3ix} + e^{-3ix} - 2e^{ix} + 2e^{-ix}\right) \\ &= -\frac{1}{2^5 i}\left(2i\sin(5x) - 2i\sin(3x) - 4i\sin x\right) \end{aligned}$$
>   Par suite : $\cos^2 x \cdot \sin^3 x = \dfrac{1}{16}(-\sin(5x) + \sin(3x) + 2\sin x)$.
>
> **À retenir :**
> - Linéariser $\cos^m x \cdot \sin^n x$, c'est écrire cette expression sous la forme d'une somme d'expressions du genre $\cos(px)$ et $\sin(qx)$. Pour linéariser $\cos^m x \cdot \sin^n x$ :
>   - On écrit : $\cos^m x \cdot \sin^n x = \dfrac{1}{2^m 2^n i^n}\left(e^{ix} + e^{-ix}\right)^m\left(e^{ix} - e^{-ix}\right)^n$.
>   - On développe $\left(e^{ix} + e^{-ix}\right)^m\left(e^{ix} - e^{-ix}\right)^n$ en utilisant les identités remarquables ou la formule du binôme de Newton.
>   - On développe ensuite le produit obtenu ; enfin on simplifie en utilisant les relations : $e^{i\alpha x} + e^{-i\alpha x} = 2\cos(\alpha x)$ et $e^{i\alpha x} - e^{-i\alpha x} = 2i\sin(\alpha x)$.
> - La linéarisation de $\cos^m x \cdot \sin^n x$ est fondamentale pour le calcul de l'intégrale $\int_a^b \cos^m x \sin^n x\,dx$ lorsque les entiers $m$ et $n$ sont deux entiers pairs (voir chapitre IV, Analyse).
>
> 5) Soit $(x; \alpha) \in \mathbb{R}^2$ et $n \in \mathbb{N}$. Pour calculer $C_n$ et $S_n$, on peut former $C_n + iS_n$. On a : $C_n + iS_n = \sum_{k=0}^{n} e^{i(x+k\alpha)} = e^{ix}\sum_{k=0}^{n} e^{ik\alpha} = e^{ix}\sum_{k=0}^{n}\left(e^{i\alpha}\right)^k$. Deux cas peuvent se présenter :
> - Si $e^{i\alpha} = 1$ alors $C_n + iS_n = (n + 1)e^{ix}$, donc : $C_n = (n + 1)\cos x$ et $S_n = (n + 1)\sin x$.
> - Si $e^{i\alpha} \neq 1$ alors : $\sum_{k=0}^{n}\left(e^{i\alpha}\right)^k = \dfrac{e^{i(n+1)\alpha} - 1}{e^{i\alpha} - 1} = \dfrac{e^{i(n+1)\frac{\alpha}{2}} - e^{-i(n+1)\frac{\alpha}{2}}}{e^{i\frac{\alpha}{2}}\left(e^{i\frac{\alpha}{2}} - e^{-i\frac{\alpha}{2}}\right)} = e^{i n\frac{\alpha}{2}}\dfrac{\sin\frac{(n+1)\alpha}{2}}{\sin\frac{\alpha}{2}}$.
>   Donc : $C_n = \cos\left(x + \frac{n\alpha}{2}\right)\dfrac{\sin\frac{(n+1)\alpha}{2}}{\sin\frac{\alpha}{2}}$ et $S_n = \sin\left(x + \frac{n\alpha}{2}\right)\dfrac{\sin\frac{(n+1)\alpha}{2}}{\sin\frac{\alpha}{2}}$.
>
> 6) Soit $z_1$, $z_2$ des nombres complexes tels que : $|z_1| = |z_2| = 1$. Montrons que : $\dfrac{(z_1 + z_2)^2}{z_1 \cdot z_2} \in \mathbb{R}^+$.
>   Lorsqu'on connaît le module d'un nombre complexe, la principale façon de tirer profit de cette information est de passer en écriture exponentielle. $z_1$ et $z_2$ étant de module 1, il existe deux réels $\theta_1$ et $\theta_2$ tels que $z_1 = e^{i\theta_1}$ et $z_2 = e^{i\theta_2}$. Par conséquent :
$$\frac{(z_1 + z_2)^2}{z_1 z_2} = \frac{(e^{i\theta_1} + e^{i\theta_2})^2}{e^{i\theta_1}e^{i\theta_2}} = \frac{e^{2i\theta_1} + 2e^{i\theta_1}e^{i\theta_2} + e^{2i\theta_2}}{e^{i\theta_1}e^{i\theta_2}} = \frac{e^{i\theta_1}}{e^{i\theta_2}} + 2 + \frac{e^{i\theta_2}}{e^{i\theta_1}} = 2 + (e^{i(\theta_1 - \theta_2)} + e^{i(\theta_2 - \theta_1)})$$
>   Il s'ensuit donc : $\dfrac{(z_1 + z_2)^2}{z_1 z_2} = 2 + 2\cos(\theta_2 - \theta_1)$. Comme $\cos(\theta_2 - \theta_1) \ge -1$ alors $2 + 2\cos(\theta_2 - \theta_1) \ge 0$. En définitive : $\dfrac{(z_1 + z_2)^2}{z_1 z_2} \in \mathbb{R}^+$.

### C. Résolution des équations

1) Résoudre dans $\mathbb{C}$ les équations suivantes : ($\theta \in \mathbb{R}$)
$$(E_1) : 2z + 5\overline{z} = 1 - i \quad ; \quad (E_2) : z^2 + 8i = |z|^2 - 2 \quad ; \quad (E_3) : z^2 - 2^{\theta+1}(\cos\theta)z + 2^{2\theta} = 0$$
$$(E_4) : z + |z| = 5 + i \quad ; \quad (E_5) : z^2 + z - (1 + 3i) = 0$$

2) Résoudre dans $\mathbb{C}$ l'équation suivante sachant qu'elle admet une racine imaginaire pure $\alpha$ à déterminer :
$$(E) : z^3 - (1 + 2i)z^2 + 3(1 + i)z - 10(1 + i) = 0$$

> **Solution.**
>
> 1) Résolution des équations :
> - Pour l'équation $(E_1)$ : écrivons $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$. On obtient :
$$2z + 5\overline{z} = 1 - i \Leftrightarrow 2(x + iy) + 5(x - iy) = 1 - i \Leftrightarrow \begin{cases} 7x = 1 \\ -3y = -1 \end{cases} \Leftrightarrow \begin{cases} x = \frac{1}{7} \\ y = \frac{1}{3} \end{cases}$$
>   après avoir identifié les parties réelles et les parties imaginaires. L'équation possède donc une solution unique : $S = \left\{\dfrac{1}{7} + \dfrac{1}{3}i\right\}$.
> - Pour l'équation $(E_2)$ : écrivons $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$. L'équation de départ devient :
$$(x + iy)^2 + 8i = (x^2 + y^2) - 2 \Leftrightarrow x^2 - y^2 + 2ixy + 8i = x^2 + y^2 - 2 \Leftrightarrow \begin{cases} x^2 - y^2 = x^2 + y^2 - 2 \\ 2xy + 8 = 0 \end{cases}$$
>   après avoir identifié les parties réelles et les parties imaginaires. Ainsi :
$$(E_2) \Leftrightarrow \begin{cases} y^2 = 1 \\ xy = -4 \end{cases} \Leftrightarrow [(x; y) = (-4; 1) \text{ ou } (x; y) = (4; -1)]. \quad \text{Finalement : } S = \{-4 + i; 4 - i\}$$
> - Pour l'équation $(E_3)$ : l'équation a pour discriminant :
$$\Delta = (2^{\theta+1}\cos\theta)^2 - 4 \times 2^{2\theta} = 2^{2\theta+2}\cos^2\theta - 2^{2\theta+2} = -2^{2\theta+2}\sin^2\theta = (2^{\theta+1}i\sin\theta)^2$$
>   On distingue deux cas :
>   - Si $\theta \equiv 0 \,[\pi]$, alors $\Delta = 0$, donc l'équation admet une solution unique donnée par : $z = 2^\theta\cos\theta$.
>   - Si $\theta \not\equiv 0 \,[\pi]$, alors $\Delta \neq 0$, donc l'équation admet deux solutions données par : $z_1 = \dfrac{2^{\theta+1}\cos\theta + i2^{\theta+1}\sin\theta}{2} = 2^\theta e^{i\theta}$ et $z_2 = \dfrac{2^{\theta+1}\cos\theta - i2^{\theta+1}\sin\theta}{2} = 2^\theta e^{-i\theta}$.
>   Finalement : $S = \{2^\theta\cos\theta\}$ si $\theta \equiv 0 \,[\pi]$ ; $S = \{2^\theta e^{i\theta}; 2^\theta e^{-i\theta}\}$ sinon.
> - Pour l'équation $(E_4)$ : écrivons $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$. On a les équivalences :
$$z + |z| = 5 + i \Leftrightarrow x + iy + \sqrt{x^2 + y^2} = 5 + i \Leftrightarrow \begin{cases} x + \sqrt{x^2 + y^2} = 5 \\ y = 1 \end{cases} \Leftrightarrow \begin{cases} x + \sqrt{x^2 + 1} = 5 \\ y = 1 \end{cases}$$
>   Si $x > 5$, alors l'équation $x + \sqrt{x^2 + 1} = 5$ n'a pas de solution. Si $x \le 5$, alors elle est équivalente à $x^2 + 1 = 25 - 10x + x^2$, soit encore à $x = \frac{12}{5}$. Finalement, l'équation de départ possède une unique solution : $S = \left\{\dfrac{12}{5} + i\right\}$.
> - Pour l'équation $(E_5)$ : on a $\Delta = 1 + 4(1 + 3i) = 5 + 12i$. Il faut déterminer une racine carrée de $\Delta$ (notée $\delta$). Cherchons cette racine carrée sous sa forme algébrique, c'est-à-dire cherchons deux réels $\alpha$ et $\beta$ tels que : $(\alpha + i\beta)^2 = 5 + 12i$. Donc $\alpha$ et $\beta$ vérifient : $\alpha^2 - \beta^2 + 2i\alpha\beta = 5 + 12i$ ; donc : $\alpha^2 - \beta^2 = 5$ et $2\alpha\beta = 12$. De plus, comme $(\alpha + i\beta)^2 = 5 + 12i$ alors $|(\alpha + i\beta)^2| = |5 + 12i|$, ce qui donne : $\alpha^2 + \beta^2 = \sqrt{169} = 13$. Donc, $\alpha$ et $\beta$ vérifient le système :
$$\begin{cases} \alpha^2 - \beta^2 = 5 \\ \alpha^2 + \beta^2 = 13 \\ \alpha\beta = 6 \end{cases} \Leftrightarrow \begin{cases} 2\alpha^2 = 18 \\ 2\beta^2 = 8 \\ \alpha\beta = 6 \end{cases} \Leftrightarrow \begin{cases} \alpha = \pm 3 \\ \beta = \pm 2 \\ \alpha \text{ et } \beta \text{ de même signe} \end{cases}$$
>   Donc les racines carrées de $\Delta$ sont : $3 + 2i$ et $-3 - 2i$. Choisissons $\delta = 3 + 2i$. Alors les solutions de $(E_5)$ sont : $z_1 = \dfrac{-1 + (3 + 2i)}{2} = 1 + i$ et $z_2 = \dfrac{-1 - (3 + 2i)}{2} = -2 - i$. Ainsi : $S = \{1 + i; -2 - i\}$.
>
> **À retenir :**
> - Il y a en gros deux stratégies pour calculer les racines carrées d'un nombre complexe $\Delta$ :
>   - Dans le cas où l'on connaît la forme trigonométrique de $\Delta$ (par exemple si $\Delta$ est réel ou imaginaire pur), on part de cette forme, on prend la racine carrée du module et on divise un argument par 2.
>   - Dans tous les autres cas, on cherche une racine carrée de $\Delta = a + ib$ sous la forme $\delta = x + iy$ : 1) on développe $\delta^2 = \Delta$ et on identifie les parties réelles et les parties imaginaires ; 2) on ajoute l'équation $x^2 + y^2 = |\delta|^2 = |\Delta|$ et on trouve les valeurs de $x^2$ et $y^2$ ; 3) on obtient alors quatre solutions ; on en élimine deux en gardant celles dont les signes respectent l'équation $2xy = b$.
>
> 2) Résolution de l'équation $(E)$ : on cherche $\alpha = ix$ (avec $x \in \mathbb{R}$) solution de l'équation, donc tel que :
$$-ix^3 + (1+2i)x^2 + 3(1+i)xi - 10(1+i) = 0 \quad \Leftrightarrow \quad \begin{cases} x^2 - 3x - 10 = 0 \\ -x^3 + 2x^2 + 3x - 10 = 0 \end{cases}$$
>   en identifiant parties réelle et imaginaire. La première équation est du second degré, a pour discriminant $\Delta = 9 + 40 = 49$ et donc pour solutions $x_1 = 5$ et $x_2 = -2$. On vérifie que $x_2$ est solution de la seconde équation, mais $x_1$ ne l'est pas. Ainsi $\alpha = -2i$.
>   On cherche maintenant $(a; b; c) \in \mathbb{C}^3$ tel que pour $z \in \mathbb{C}$ :
$$z^3 - (1+2i)z^2 + 3(1+i)z - 10(1+i) = (z+2i)(az^2+bz+c) = az^3 + bz^2 + cz + 2iaz^2 + 2ibz + 2ic$$
>   En identifiant les coefficients, on obtient le système :
$$\begin{cases} a = 1 \\ b + 2ia = -(1+2i) \\ c + 2ib = 3(1+i) \\ 2ic = -10(1+i) \end{cases} \Leftrightarrow \begin{cases} a = 1 \\ c = \frac{-10(1+i)}{2i} = -5+5i \\ b = -1-2i-2ia = -1-4i \end{cases}$$
>   On a omis la troisième équation pour résoudre le système, mais on vérifie que $b = -1 - 4i$ et $c = -5 + 5i$ la vérifient bien. La solution trouvée est donc correcte. D'après ce qui précède, les solutions de $(E)$ sont $\alpha = -2i$ et les solutions de $z^2 - (1+4i)z + 5(-1+i) = 0$. Cette dernière équation a pour discriminant : $\Delta = (1+4i)^2 - 20(-1+i) = 1 + 8i - 16 + 20 - 20i = 5 - 12i$.
>   Pour la recherche des racines carrées de $\Delta$, soit on suit la même démarche vue pour l'équation $(E_5)$, soit on exploite le résultat $5 + 12i = (3 + 2i)^2$ (déjà montré) en passant au conjugué pour déduire l'égalité $5 - 12i = (3 - 2i)^2$. Les solutions de $(E)$ sont donc : $\alpha = -2i$ et $z_1 = \dfrac{1+4i+3-2i}{2} = 2+i$ et $z_2 = \dfrac{1+4i-3+2i}{2} = -1+3i$. Par suite : $S = \{-2i; 2+i; -1+3i\}$.
>
> **À retenir :**
> - Pour résoudre une équation du second degré à coefficients complexes, on calcule le discriminant de l'équation, puis, s'il est non nul, une racine carrée de ce discriminant (en suivant la méthode précédente). On utilise ensuite les formules du cours.
> - Pour résoudre des équations où apparaissent $z$ et $\overline{z}$ à la fois, on peut : poser $z = x + iy$ ou $z = re^{i\theta}$, puis utiliser la règle d'égalité de deux complexes ; ou passer au conjugué en utilisant l'équivalence : $f(z) = g(z) \Leftrightarrow \overline{f(z)} = \overline{g(z)}$.
> - On rappelle que les solutions $z_1$ et $z_2$ de $az^2 + bz + c = 0$ vérifient : $z_1 + z_2 = -\frac{b}{a}$ et $z_1 \times z_2 = \frac{c}{a}$.

### D. Les racines $n^{\text{èmes}}$ d'un nombre complexe

1) Déterminer les racines d'ordre 5 du nombre complexe $Z = \dfrac{\left(1 + i\sqrt{3}\right)^4}{\left(1 - i\right)^3}$.
2) a) Déterminer sous forme trigonométrique, puis sous forme algébrique, les racines sixièmes de 1.
   b) Calculer $(1 - i)^6$. En déduire les racines sixièmes du nombre $8i$.
   c) En déduire les valeurs de $\cos\frac{\pi}{12}$ et de $\sin\frac{\pi}{12}$.
3) Résoudre dans $\mathbb{C}$ l'équation suivante $(E)$ : $z^6 - (1 + 2i)z^3 - 1 + i = 0$.

> **Solution.**
>
> 1) Déterminons les racines d'ordre 5 du nombre complexe $Z$ : on a d'abord :
$$Z = \frac{\left(1 + i\sqrt{3}\right)^4}{\left(1 - i\right)^3} = \frac{\left[2; \frac{\pi}{3}\right]^4}{\left[\sqrt{2}; -\frac{\pi}{4}\right]^3} = \frac{\left[16; \frac{4\pi}{3}\right]}{\left[2\sqrt{2}; -\frac{3\pi}{4}\right]} = \left[4\sqrt{2}; \frac{25\pi}{12}\right]$$
>   Par conséquent, les racines d'ordre 5 du nombre complexe $Z$ sont :
$$z_k = \left[\sqrt[5]{4\sqrt{2}}; \frac{5\pi}{12} + \frac{2k\pi}{5}\right] = \left[\sqrt{2}; \frac{5\pi}{12} + \frac{2k\pi}{5}\right] \text{ où } k \in \{0; 1; 2; 3; 4\}$$
>
> 2) a) Les racines sixièmes de 1 sont les solutions dans $\mathbb{C}$ de l'équation $z^6 = 1$. Elles sont de la forme :
$$\omega_k = e^{i\frac{2k\pi}{6}} = \cos\left(\frac{k\pi}{3}\right) + i\sin\left(\frac{k\pi}{3}\right) \text{ avec } k \in \{0; 1; 2; 3; 4; 5\}$$
>   En ce qui concerne la forme algébrique de chacune des racines :
$$\omega_0 = 1 \quad ; \quad \omega_1 = \frac{1}{2} + i\frac{\sqrt{3}}{2} \quad ; \quad \omega_2 = -\frac{1}{2} + i\frac{\sqrt{3}}{2} \quad ; \quad \omega_3 = -1 \quad ; \quad \omega_4 = -\frac{1}{2} - i\frac{\sqrt{3}}{2} \quad ; \quad \omega_5 = \frac{1}{2} - i\frac{\sqrt{3}}{2}$$
>   b) Calculons $(1 - i)^6$ : $(1 - i)^6 = \left((1 - i)^2\right)^3 = (-2i)^3 = 8i$. Puisque $(1 - i)^6 = 8i$ alors $1 - i$ est une racine sixième de $8i$. Les autres racines sixièmes de $8i$ s'obtiennent en multipliant le nombre complexe $1 - i$ par les racines sixièmes de 1. En définitive, les racines sixièmes de $8i$ sont :
$$z_0 = (1 - i)\omega_0 = 1 - i \quad ; \quad z_1 = (1 - i)\omega_1 = \frac{\sqrt{3} + 1}{2} + \frac{\sqrt{3} - 1}{2}i \quad ; \quad z_2 = (1 - i)\omega_2 = \frac{\sqrt{3} - 1}{2} + \frac{\sqrt{3} + 1}{2}i$$
$$z_3 = (1 - i)\omega_3 = -1 + i \quad ; \quad z_4 = (1 - i)\omega_4 = -\frac{\sqrt{3} + 1}{2} - \frac{\sqrt{3} - 1}{2}i \quad ; \quad z_5 = (1 - i)\omega_5 = -\frac{\sqrt{3} - 1}{2} - \frac{\sqrt{3} + 1}{2}i$$
>   c) Les valeurs de $\cos\frac{\pi}{12}$ et de $\sin\frac{\pi}{12}$ : on a pour tout $k \in \{0; 1; 2; 3; 4; 5\}$, $z_k = (1 - i)\omega_k = \sqrt{2}\,e^{-i\frac{\pi}{4}}e^{i\frac{2k\pi}{6}} = \sqrt{2}\,e^{i\left(\frac{2k\pi}{6} - \frac{\pi}{4}\right)}$. On a : $z_1 = \sqrt{2}\,e^{i\frac{\pi}{12}} = \sqrt{2}\left(\cos\frac{\pi}{12} + i\sin\frac{\pi}{12}\right)$. Par conséquent : $\cos\frac{\pi}{12} = \frac{\sqrt{3} + 1}{2\sqrt{2}} = \frac{\sqrt{6} + \sqrt{2}}{4}$ et $\sin\frac{\pi}{12} = \frac{\sqrt{3} - 1}{2\sqrt{2}} = \frac{\sqrt{6} - \sqrt{2}}{4}$.
>
> **À retenir :**
> - Pour obtenir les racines $n$-ièmes d'un nombre complexe (non nul) avec $n \ge 3$, il faut la forme trigonométrique ou exponentielle de ce nombre complexe.
> - Il faut savoir retrouver le résultat suivant en procédant comme ci-dessus : les racines $n$-ièmes d'un nombre complexe $a$ pour lequel on connaît un nombre complexe $u$ vérifiant $u^n = a$ sont : $z_k = u e^{i\frac{2k\pi}{n}}$ avec $k \in \{0; 1; \dots; n-1\}$.
>
> 3) Résolution de l'équation $(E)$ : posons $Z = z^3$. L'équation donnée est équivalente à : $Z^2 - (1 + 2i)Z - 1 + i = 0$. La résolution de cette dernière équation donne : $Z = i$ ou $Z = 1 + i$ ; d'où : $z^3 = i = e^{i\frac{\pi}{2}}$ ou $z^3 = 1 + i = \sqrt{2}e^{i\frac{\pi}{4}}$.
>   - Les solutions de l'équation $z^3 = e^{i\frac{\pi}{2}}$ sont : $z = e^{i\frac{\pi}{6}}$, $z = e^{i\frac{5\pi}{6}}$ et $z = e^{i\frac{3\pi}{2}} = -i$ ;
>   - Les solutions de l'équation $z^3 = \sqrt{2}\,e^{i\frac{\pi}{4}}$ sont : $z = \sqrt[6]{2}\,e^{i\frac{\pi}{12}}$, $z = \sqrt[6]{2}\,e^{i\frac{3\pi}{4}}$ et $z = \sqrt[6]{2}\,e^{i\frac{17\pi}{12}}$.
>   En définitive, l'ensemble solution de l'équation $(E)$ est : $S = \left\{e^{i\frac{\pi}{6}}; e^{i\frac{5\pi}{6}}; -i; \sqrt[6]{2}\,e^{i\frac{\pi}{12}}; \sqrt[6]{2}\,e^{i\frac{3\pi}{4}}; \sqrt[6]{2}\,e^{i\frac{17\pi}{12}}\right\}$.
>
> **À retenir :** Pour résoudre une équation polynomiale du type : $(E_n) : az^{2n} + bz^n + c = 0$ ($a \neq 0$), on pose $Z = z^n$ et on résout l'équation du second degré $aZ^2 + bZ + c = 0$ d'inconnue $Z$. Si $\Delta = b^2 - 4ac$ est non nul, alors $(E_n)$ admet $2n$ solutions qui sont les racines $n$-ièmes des solutions de l'équation $aZ^2 + bZ + c = 0$.

### E. Nombres complexes et géométrie

Le plan complexe est rapporté à un repère orthonormé direct $(O; \vec{u}, \vec{v})$.

1) Déterminer l'ensemble des points $M(z)$ du plan dans les cas suivants :
a) $|(1 + i)z - 2i| = 2$ ; b) $|z - 1| = |z + i|$ ; c) $I(i)$, $M(z)$ et $M'(iz)$ sont alignés.

2) Pour tout $z \in \mathbb{C} - \{2i\}$, on pose : $Z = \dfrac{z + 1}{z - 2i}$. Déterminer l'ensemble des points $M(z)$ tels que :
a) $Z$ est réel ; b) $Z$ est imaginaire pur ; c) $Z$ vérifie $\arg Z \equiv \frac{\pi}{2} \,[2\pi]$.

> **Solution.**
>
> 1) a) On a pour $z \in \mathbb{C}$ : $|(1+i)z - 2i| = 2 \Leftrightarrow |1+i|\left|z - \frac{2i}{1+i}\right| = 2 \Leftrightarrow |z - (1+i)| = \sqrt{2}$. Si on note $A(1+i)$, alors $AM = \sqrt{2}$. Par conséquent, l'ensemble des points $M$ correspondants est le cercle de centre $A(1+i)$ et de rayon $\sqrt{2}$.
>    b) En notant $I(1)$ et $J(i)$, on aura l'équivalence : $|z-1| = |z-i| \Leftrightarrow IM = JM$ ; il s'ensuit donc que l'ensemble des points $M$ correspondants est la médiatrice du segment $[IJ]$.
>    c) Dire que les points $I$, $M$ et $M'$ sont alignés signifie que $M = I$ ou $M' = I$ ou $\left(\widehat{\overrightarrow{IM}, \overrightarrow{IM'}}\right) \equiv 0 \,[\pi]$. D'où $\arg\left(\dfrac{iz-i}{z-i}\right) \equiv 0 \,[\pi]$ ou $z=i$ ou $iz=i$. Par suite : $\arg\left(\dfrac{z-1}{z-i}\right) \equiv -\frac{\pi}{2} \,[\pi]$ ou $z=i$ ou $z=1$. Soit $B(1)$. On a alors : $\left(\widehat{\overrightarrow{IM}, \overrightarrow{BM}}\right) \equiv -\frac{\pi}{2} \,[\pi]$ ou $M = I$ ou $M = B$. Et donc : $(IM) \perp (BM)$ ou $M = I$ ou $M = B$. L'ensemble des points demandé est le cercle de diamètre $[IB]$.
>
> 2) a) Dire que $Z \in \mathbb{R}$ signifie que les points $M(z)$, $A(-1)$ et $B(2i)$ sont alignés et $M \neq B$. Par conséquent, l'ensemble des points demandé est la droite $(AB)$, excepté $B$.
>    b) Dire que $Z \in i\mathbb{R}$ signifie que $(AM) \perp (BM)$ et $M \neq B$. Par conséquent, l'ensemble des points demandé est le cercle de diamètre $[AB]$, excepté $B$.
>    c) Déterminons l'ensemble des points $M(z)$ tels que $\arg Z \equiv \frac{\pi}{2} \,[2\pi]$ : on a $\arg Z \equiv \frac{\pi}{2} \,[2\pi] \Leftrightarrow \arg\left(\dfrac{z+1}{z-2i}\right) \equiv \frac{\pi}{2} \,[2\pi] \Leftrightarrow \left(\widehat{\overrightarrow{BM}, \overrightarrow{AM}}\right) \equiv \frac{\pi}{2} \,[2\pi]$. Par conséquent, l'ensemble des points demandé est le demi-cercle de diamètre $[AB]$, contenant $O$, excepté $A$ et $B$.
>
> **À retenir :**
> - Quand on demande de prouver qu'un triangle est un triangle particulier, ou qu'un quadrilatère est un quadrilatère particulier, il faut toujours avoir à l'esprit que l'on peut calculer :
>   - une distance en appliquant la formule : $|z_B - z_A| = AB$ ;
>   - un angle en appliquant la formule : $\left(\widehat{\overrightarrow{AB}, \overrightarrow{CD}}\right) \equiv \arg\left(\dfrac{z_D - z_C}{z_B - z_A}\right) \,[2\pi]$.
> - Dans 90 % des cas, il sera demandé de calculer un rapport puis d'en déduire une propriété géométrique sur une configuration, ce qui se fait en prenant le module et l'argument du rapport et en utilisant les deux formules citées ci-dessus.
> - Pour déterminer l'ensemble des points $M(z)$ du plan vérifiant une condition donnée, on peut : si on voit des $M(z)$ partout, faire intervenir les barycentres pour se ramener à quelque chose de la forme $GM = r$ ou $AM = BM$.
>   - Pour $GM = r$ avec $r > 0$, c'est le cercle de centre $G$ et de rayon $r$.
>   - Pour $AM = BM$, c'est la médiatrice du segment $[AB]$.
> - Poser $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$. Cette méthode s'utilise lorsqu'on doit déterminer l'ensemble des points $M(z)$ tels que le nombre $Z = \dfrac{az + b}{cz + d}$ vérifie une propriété d'appartenance (réel, imaginaire, réel non nul, …) :
>   - Pour $Ax + By + C = 0$, c'est l'équation d'une droite.
>   - Pour $x^2 + y^2 + 2Ax + 2By + C = 0$ avec $A^2 + B^2 - C > 0$, c'est le cercle de centre $\Omega(-A; -B)$ et de rayon $r = \sqrt{A^2 + B^2 - C}$.
> - L'ensemble des points $M(z)$ vérifiant $\dfrac{z - a}{z - b} \in \mathbb{R}$ est la droite $(AB)$ privée de $B$, où $A(a)$ et $B(b)$.
> - L'ensemble des points $M(z)$ du plan vérifiant $\dfrac{z - a}{z - b} \in i\mathbb{R}$ est le cercle de diamètre $[AB]$ privé de $B$, où $A(a)$ et $B(b)$.
> - Dans un exercice faisant intervenir nombres complexes et géométrie, il n'est pas en général nécessaire d'utiliser ni la forme algébrique, ni la forme trigonométrique, ni les coordonnées des points mais les propriétés reliant les nombres complexes et la géométrie : distance, angle, alignement, orthogonalité.

### F. Transformations du plan (1)

On considère le plan complexe muni d'un repère orthonormé $(O; \vec{u}, \vec{v})$.

1) Soit $t$ la translation de vecteur $\vec{w} = 2\vec{u}$ qui, à tout point $M(z)$ associe le point $M'(z')$. Donner l'écriture complexe de la transformation $t$.
2) Soit $r$ la transformation du plan qui, à tout point $M'(z')$ associe le point $M''(z'')$ avec : $z'' = -iz' + 4i$.
   a) Démontrer que $r$ est une rotation dont on précisera le centre et l'angle.
   b) Déterminer l'écriture complexe de la transformation $r \circ t$.
3) Déterminer la nature et les caractéristiques de l'application $h$ d'écriture complexe : $z' = -3z + 5 + 2i$.

> **Solution.**
>
> 1) L'écriture complexe de la transformation $t$ est donnée par : $z' = z + 2$.
> 2) a) On a dans l'écriture complexe $z'' = -iz' + 4i$ : $-i \neq 1$ et $|-i| = 1$. Donc la transformation $r$ est une rotation. Le centre de $r$ est le point $\Omega(2 + 2i)$ et son angle est $\arg(-i) \equiv -\frac{\pi}{2} \,[2\pi]$.
>    b) En conservant les notations précédentes, on a : $z' = z + 2$ et $z'' = -iz' + 4i$. Donc $z'' = -i(z + 2) + 4i$. Ainsi, l'écriture complexe de la transformation $r \circ t$ est : $z'' = -iz + 2i$.
> 3) On a dans l'écriture complexe $z' = -3z + 5 + 2i$ : $-3 \in \mathbb{R}^*$ et $-3 \neq 1$. Donc $h$ est une homothétie de rapport $k = -3$. Son centre est le point $\Omega'\left(\frac{5}{4} + \frac{1}{2}i\right)$.
>
> **À retenir :** on rappelle que si $z' = az + b$ est l'écriture complexe d'une transformation $T$ avec $a \neq 1$ alors $T$ admet comme point fixe $\Omega\left(\dfrac{b}{1-a}\right)$.

### G. Transformations du plan (2)

Le plan complexe $\mathcal{P}$ est muni d'un repère orthonormé $(O; \vec{e}_1, \vec{e}_2)$. Pour tout $z \in \mathbb{C} - \{i\}$, on pose : $f(z) = \dfrac{iz + 2}{z - i}$ et on considère les points $A(i)$, $B(2i)$ et $M(z)$.

1) On pose $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$.
   a) Écrire $f(z)$ sous forme algébrique.
   b) Déterminer la nature de l'ensemble : $E = \{M(z) \;/\; f(z) \in \mathbb{R}\}$.

2) a) Montrer que pour tout $z \in \mathbb{C} - \{i; 2i\}$ : $|f(z)| = \dfrac{BM}{AM}$ et $\arg(f(z)) \equiv \frac{\pi}{2} + \left(\widehat{\overrightarrow{AM}, \overrightarrow{BM}}\right) \,[2\pi]$.
   b) Déterminer la nature de chacun des ensembles : $F = \{M(z) \;/\; |f(z)| = 1\}$ et $G = \{M(z) \;/\; f(z) \in i\mathbb{R}^*\}$.

3) a) Montrer que pour tout $z \in \mathbb{C} - \{i\}$ : $|f(z) - i| = \dfrac{1}{|z - i|}$ et $\arg(f(z) - i) \equiv -\arg(z - i) \,[2\pi]$.
   b) Montrer que si $M(z)$ appartient au cercle $\mathcal{C}$ de centre $A$ et de rayon $R = \frac{1}{2}$, alors le point $M'(f(z))$ appartient à un cercle à déterminer.

4) a) Déterminer les solutions $\alpha$ et $\beta$ de l'équation $f(z) = z$ avec $\operatorname{Re}(\alpha) = 1$.
   b) Soit $z \in \mathbb{C} - \{i; \alpha; \beta\}$ et soit $M(z)$, $M'(f(z))$, $C(\alpha)$ et $D(\beta)$ des points du plan $\mathcal{P}$. Montrer que $\dfrac{f(z) - \alpha}{f(z) - \beta} = -\dfrac{z - \alpha}{z - \beta}$ et en déduire que : $\left(\widehat{\overrightarrow{MD}, \overrightarrow{MC}}\right) \equiv \pi + \left(\widehat{\overrightarrow{M'D}, \overrightarrow{M'C}}\right) \,[2\pi]$.
   c) Que peut-on déduire des points $M$, $M'$, $C$ et $D$ ? Justifier.

> **Solution.**
>
> 1) a) En posant $z = x + iy$, on trouve :
$$f(z) = \frac{i(x + iy) + 2}{x + i(y - 1)} = \frac{x + i(x^2 + y^2 - 3y + 2)}{x^2 + (y - 1)^2} = \frac{x}{x^2 + (y - 1)^2} + \frac{x^2 + y^2 - 3y + 2}{x^2 + (y - 1)^2}i$$
>    b) Soit $M(z)$ (avec $z \neq i$) un point du plan. D'après le résultat précédent, on a les équivalences suivantes :
$$M(z) \in E \Leftrightarrow f(z) \in \mathbb{R} \Leftrightarrow \operatorname{Im}(f(z)) = 0 \Leftrightarrow x^2 + y^2 - 3y + 2 = 0 \Leftrightarrow x^2 + \left(y - \frac{3}{2}\right)^2 = \frac{1}{4}$$
>   Par suite, l'ensemble $E$ est le cercle de centre $\Omega\left(\frac{3}{2}i\right)$ et de rayon $\frac{1}{2}$, excepté le point $A$.
>
> 2) a) On a pour tout $z \in \mathbb{C} - \{i; 2i\}$ :
$$|f(z)| = \left|\frac{iz + 2}{z - i}\right| = \left|\frac{i(z - 2i)}{z - i}\right| = \left|\frac{z - 2i}{z - i}\right| = \frac{BM}{AM},$$
$$\arg(f(z)) \equiv \arg\left(i\frac{z - 2i}{z - i}\right) \equiv \arg(i) + \arg\left(\frac{z - 2i}{z - i}\right) \,[2\pi].$$
>   Par conséquent : $\arg(f(z)) \equiv \frac{\pi}{2} + \left(\widehat{\overrightarrow{AM}, \overrightarrow{BM}}\right) \,[2\pi]$.
>    b) Soit $M(z)$ (avec $z \neq i$) un point du plan. D'après 2) a), on déduit immédiatement :
>   - $M(z) \in F \Leftrightarrow |f(z)| = 1 \Leftrightarrow \frac{BM}{AM} = 1 \Leftrightarrow AM = BM$. Donc $F$ est la médiatrice du segment $[AB]$.
>   - $M(z) \in G \Leftrightarrow f(z) \in i\mathbb{R}^* \Leftrightarrow \arg(f(z)) \equiv \frac{\pi}{2} \,[\pi] \Leftrightarrow \frac{\pi}{2} + \left(\widehat{\overrightarrow{AM}, \overrightarrow{BM}}\right) \equiv \frac{\pi}{2} \,[\pi]$. Donc $M(z) \in G \Leftrightarrow \left(\widehat{\overrightarrow{AM}, \overrightarrow{BM}}\right) \equiv 0 \,[\pi] \Leftrightarrow M \in (AB)$. Ainsi, $G$ est la droite $(AB)$, privée de $A$ et $B$.
>
>   **Remarque importante :** soit $(\theta; \theta') \in \mathbb{R}^2$. On a : $\theta \equiv \theta' \,[2\pi] \Rightarrow \theta \equiv \theta' \,[\pi]$. La réciproque est fausse.
>
> 3) a) On a pour tout $z \in \mathbb{C} - \{i\}$ : $f(z) - i = \dfrac{iz + 2}{z - i} - i = \dfrac{iz + 2 - iz - 1}{z - i} = \dfrac{1}{z - i}$. Par conséquent :
$$|f(z) - i| = \frac{1}{|z - i|} \quad \text{et} \quad \arg(f(z) - i) \equiv -\arg(z - i) \,[2\pi]$$
>    b) Soit $M(z)$ (avec $z \neq i$) un point du cercle $\mathcal{C}$ et $M'$ le point d'affixe $f(z)$. On a $AM = \frac{1}{2}$, c'est-à-dire $|z - i| = \frac{1}{2}$ ; et puisque $|f(z) - i| = \frac{1}{|z - i|}$, alors $|f(z) - i| = 2$, c'est-à-dire $AM' = 2$. Par suite, le point $M'$ appartient au cercle de centre $A(i)$ et de rayon 2.
>
> 4) a) Les solutions demandées de l'équation $f(z) = z$ sont : $\alpha = 1 + i$ et $\beta = -1 + i$.
>    b) Soit $z \in \mathbb{C} - \{i; \alpha; \beta\}$. On a :
$$\frac{f(z) - \alpha}{f(z) - \beta} = \frac{\frac{iz + 2}{z - i} - (1 + i)}{\frac{iz + 2}{z - i} - (-1 + i)} = \frac{iz + 2 - z - iz + i - 1}{iz + 2 + z - iz - i - 1} = -\frac{z - (1 + i)}{z - (-1 + i)} = -\frac{z - \alpha}{z - \beta}, \text{ d'où le résultat.}$$
>   En passant aux arguments, on obtient immédiatement : $\left(\widehat{\overrightarrow{MD}, \overrightarrow{MC}}\right) \equiv \pi + \left(\widehat{\overrightarrow{M'D}, \overrightarrow{M'C}}\right) \,[2\pi]$.
>    c) On a : $\dfrac{f(z) - \alpha}{f(z) - \beta} \times \dfrac{z - \alpha}{z - \beta} = -1 \in \mathbb{R}$, donc les points $M$, $M'$, $C$ et $D$ sont alignés ou cocycliques.

## Exercices

### Exercices d'application

#### Forme algébrique et opérations

**Exercice 01.** Pour tout $z \in \mathbb{C}$, on pose : $z_1 = 3 + iz$ et $z_2 = z + i(z^2 + 5)$. Écrire $z_1$ et $z_2$ sous la forme algébrique dans chacun des cas suivants :
1) $z = -i$ ; 2) $z = 3 + 2i$ ; 3) $z = \dfrac{2+i}{2-i}$.

**Exercice 02.** Déterminer la forme algébrique de chacun des nombres complexes suivants :
$$A = (1 - 10i)(5 + 3i) \quad ; \quad B = \sqrt{3} + i - (5i + \sqrt{3})^2 \quad ; \quad C = \left(\frac{\sqrt{3}}{2} - \frac{1}{2}i\right)^2 \quad ; \quad D = \left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right)^3$$
$$U = \frac{3+i\sqrt{5}}{3-i\sqrt{5}} \quad ; \quad V = \frac{1}{\sqrt{3}-2i} \quad ; \quad W = \frac{-1+7i}{2-3i} \quad ; \quad X = \frac{(4-6i)^2}{(2+i)(1+3i)} \quad ; \quad Y = \frac{(i+1)(i+2)(5-7i)}{2i^8}$$

**Exercice 03.** Soit $z$ un nombre complexe différent de $-1$. On pose : $z = x + iy$ avec $(x; y) \in \mathbb{R}^2$. Déterminer la partie réelle et la partie imaginaire du nombre $Z$ dans chacun des cas suivants :
$$1^{\text{er}} \text{ cas} : Z = z^2 - 2iz - 1 \quad ; \quad 2^{\text{ème}} \text{ cas} : Z = \frac{4iz+3}{z+1}$$

**Exercice 04.** On considère le nombre complexe : $Z = \dfrac{5+3i\sqrt{3}}{1-2i\sqrt{3}}$.
1) Déterminer la forme algébrique de $Z$.
2) Calculer : $Z^2$ ; $Z^3$ ; $Z^{15}$.
3) a) Montrer que pour tout $n \in \mathbb{Z}$ : $Z^{3n+2} = -2^{3n+1}(1+i\sqrt{3})$ puis en déduire $Z^{20}$.

**Exercice 05.** On considère le nombre : $A = -1 + i(2 - \sqrt{3})$.
1) Calculer $A^2$, $A^3$ et $A^6$.
2) Montrer que : $(\forall n \in \mathbb{N})\; A^{12n} \in \mathbb{R}$.

**Exercice 06.** Soit $n$ un entier naturel. On pose : $j = -\dfrac{1}{2} + i\dfrac{\sqrt{3}}{2}$.
1) Calculer $j^2$ et $j^3$ puis $j^n$ selon les valeurs de $n$.
2) Vérifier que : $1 + j + j^2 = 0$.
3) Calculer la somme suivante : $S = 1 + j + j^2 + \dots + j^{2020}$.

**Exercice 07.** Soit $n$ un entier naturel.
1) a) Calculer $i^3$, $i^4$, $i^5$ et $i^n$ selon les valeurs de $n$.
   b) Calculer les deux sommes suivantes :
$$S = 1 + i + i^2 + i^3 + \dots + i^{2019} \quad ; \quad T = 1 - i + i^2 - i^3 + \dots + (-i)^{2019}$$
2) a) Calculer $(1 + i)^3$, $(1 + i)^4$ et $(1 + i)^n$ selon les valeurs de l'entier $n$.
   b) Déterminer tous les entiers naturels $n$ pour lesquels $(1 + i)^n$ est un nombre réel négatif.

**Exercice 08.** Soit $z = x + iy$ un nombre complexe avec $(x; y) \in \mathbb{R}^2$. Déterminer tous les nombres complexes $z$ tels que :
1) $\dfrac{z}{z+i} \in \mathbb{R}$ ; 2) $\dfrac{z-i}{z+i} \in i\mathbb{R}$ ; 3) $1 + z + z^2 \in \mathbb{R}$.

**Exercice 09.** Déterminer les valeurs de $z \in \mathbb{C}$ vérifiant l'égalité :
$$(z-1)^3 + (z-1)^2(z+1) + (z-1)(z+1)^2 + (z+1)^3 = 0$$

#### Représentation géométrique

**Exercice 10.** Le plan est muni d'un repère orthonormé $(O;\vec{u},\vec{v})$. On considère les points $A$, $B$ et $C$ d'affixes respectives : $z_A = 3 + 4i$, $z_B = 3i$ et $z_C = 2 - i$.
1) Déterminer l'affixe de chacun des vecteurs $\overrightarrow{AB}$ et $\overrightarrow{BC}$.
2) Soit $D$ le point du plan pour lequel $ABCD$ est un parallélogramme. Déterminer l'affixe de $D$.
3) Soit $E$ le point du plan défini par : $\overrightarrow{AE} = \overrightarrow{AB} + \overrightarrow{AC}$.
   a) Déterminer l'affixe du point $E$.
   b) Vérifier que $ABEC$ est un parallélogramme puis déterminer l'affixe de son centre.
   c) Déterminer l'affixe du vecteur $\overrightarrow{DE}$.

**Exercice 11.** Le plan est muni d'un repère orthonormé $(O;\vec{u},\vec{v})$, on considère les points $A$ et $B$ d'affixes respectives : $z_A = 4 + i$ et $z_B = 6 + 3i$.
1) Déterminer l'affixe du milieu du segment $[AB]$.
2) Déterminer l'affixe du point $G$, barycentre du système pondéré : $\{(O;2),(A;1),(B;-1)\}$.

**Exercice 12.** Le plan est muni d'un repère orthonormé $(O;\vec{u},\vec{v})$, on considère dans le plan complexe les points : $A(-2 + i)$ ; $B(3 + 3i)$ ; $C\left(1 + \frac{11}{5}i\right)$.
1) Déterminer l'affixe de chacun des vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$.
2) En déduire que les points $A$, $B$ et $C$ sont alignés.
3) Construire les points $A$ et $B$ dans le repère puis en déduire une construction du point $C$.
4) Déterminer les réels $a$ et $b$ pour que le point $C$ soit le barycentre des points pondérés $(A; a)$ et $(B; b)$, avec $a + b = 1$.
5) Donner l'affixe du centre de gravité du triangle $OAB$.

**Exercice 13.** Soit $b$ un nombre réel. Soit $M$ le point du plan d'affixe $z = 3 + ib$ et $M'$ son symétrique par rapport à la droite d'équation $y = 1$. Déterminer l'affixe $z'$ du point $M'$ en fonction de $b$.

**Exercice 14.** Dessiner dans le plan complexe les ensembles suivants :
1) $E = \{M(\lambda i) \;/\; \lambda \in \mathbb{R}^{+}\}$.
2) $F = \{M((1 - i)\lambda) \;/\; \lambda \in \mathbb{R}^*\}$.
3) $G = \left\{M\left((\sqrt{3} + i)k\right) \;/\; k \in \mathbb{R}\right\}$.

#### Équations du 1er degré — systèmes

**Exercice 15.** Résoudre dans $\mathbb{C}$ les équations suivantes :
1) $8 + 3i + iz + 7(z - 4i) = 0$ ; 2) $(9 + i)z = 3 + i - 2$ ;
3) $(3 - i)z + 3 + i = 2z - 4i$ ; 4) $\dfrac{3z}{z - i} = 1 + i\sqrt{3}$ ;
5) $\left((2 + i)z - i\right)(9z + 8 - 4i) = 0$ ; 6) $\dfrac{4z + 1}{iz + i} = \dfrac{4 + i}{3}$.

**Exercice 16.** Résoudre dans $\mathbb{C}^2$ les systèmes suivants :
$$(S_1): \begin{cases} 2z - z' = 5 \\ z - 3iz' = 7 \end{cases} ; \quad (S_2): \begin{cases} 3z - 2z' = -11 \\ iz + (1 + i)z' = 3(4 - i) \end{cases}$$
$$(S_3): \begin{cases} -5iz + \frac{3}{2}z' = \frac{i}{4} \\ 4z - iz' = 0 \end{cases} ; \quad (S_4): \begin{cases} \frac{1}{z} + \frac{1}{z'} = 1 + 3i \\ \frac{3i}{z} - \frac{2}{z'} = -3 - i \end{cases}$$

**Exercice 17.** On considère le polynôme $P$ défini par : $(\forall z \in \mathbb{C})\; P(z) = iz^2 + (3 + 4i)z - 7i + 3$.
1) Montrer que $1 + i$ est une racine du polynôme $P$.
2) En déduire une factorisation de $P$ sous la forme de produit de deux polynômes du $1^{\text{er}}$ degré.

#### Conjugué d'un nombre complexe

**Exercice 18.** Calculer de deux façons différentes le conjugué de chacun des nombres complexes suivants :
$$z_1 = (3 + i)(2 - 3i) \quad ; \quad z_2 = \frac{2 + i}{3 - i} \quad ; \quad z_3 = -\frac{5}{3 + 4i} \quad ; \quad z_4 = (1 + 2i)^3 - (1 - i)^4 \quad ; \quad z_5 = \frac{(1 + 5i)i}{(4 - i)^2}$$

**Exercice 19.** Soit $z$ un nombre complexe différent de $-1$. Simplifier l'expression :
$$\overline{\left(\frac{-z}{i(z + 1)}\right)} + i\frac{1 - i(z + 1)}{\overline{z} + 1}$$

**Exercice 20.** Soit $u$ un nombre complexe tel que : $u \neq 1$ et $u\overline{u} = 1$. Soit $z$ un nombre complexe non réel. Montrer que $Z = \dfrac{z - u\overline{z}}{1 - u}$ est réel.

**Exercice 21.** Soit $z = x + iy$ un nombre complexe avec $(x; y) \in \mathbb{R}^2$.
1) Déterminer la forme algébrique du nombre $3iz - \overline{z}$.
2) Résoudre dans $\mathbb{C}$ l'équation : $3iz - \overline{z} = 8i$.
3) Déterminer les nombres complexes $z$ pour lesquels $3iz - \overline{z}$ est imaginaire pur.

**Exercice 22.** Résoudre dans $\mathbb{C}$ les équations suivantes :
1) $z + i\overline{z} = 5 + 4i$ ; 2) $(z + 1 - i)(\overline{iz} + 2i - 4) = 0$ ;
3) $\overline{z} - z = (1 + 3i)z$ ; 4) $(2 - i)z + 3\overline{z} = 5 + 3i$ ;
5) $\overline{z} - 2i = 2z$ ; 6) $(1 + i)\overline{z} - 1 + i = \overline{z} - i$ ;
7) $z\overline{z} + (2 - i)z = 1 + i$ ; 8) $\overline{z}^2 - (3 + i)z + 3i = 0$ ;
9) $\dfrac{\overline{z} - 2}{\overline{z} + 1} = 2i$ ; 10) $\dfrac{4\overline{z} - 2}{z + 1} = -3 + i$.

**Exercice 23.** Résoudre dans $\mathbb{C}^2$ les systèmes suivants :
1) $\begin{cases} 2z - z' = i \\ 2\overline{z} + 3i\overline{z'} = 17 \end{cases}$ ; 2) $\begin{cases} 2z - 3z' = -4 + 5i \\ \overline{z} + \overline{z'} = 3 \end{cases}$ ;
3) $\begin{cases} z + \overline{t} = i \\ iz + (1 - i)t = 5 + i \end{cases}$ ; 4) $\begin{cases} 2\overline{z} + (1 - i)t = -2 + 2i \\ z - 5i\overline{t} = -8 + 7i \end{cases}$.

**Exercice 24.** Soit $z$ un nombre complexe non nul. Montrer l'équivalence suivante :
$$\frac{2z - 1}{z^2} \in \mathbb{R} \Leftrightarrow (z = \overline{z} \text{ ou } z + \overline{z} = 2z\overline{z})$$

**Exercice 25.** Soit $a$, $b$, $c$ et $d$ des nombres complexes deux à deux distincts. Montrer que :
$$\left(\frac{a - d}{b - c} \in i\mathbb{R} \text{ et } \frac{b - d}{c - a} \in i\mathbb{R}\right) \Rightarrow \frac{c - d}{a - b} \in i\mathbb{R}$$

#### Module d'un nombre complexe

**Exercice 26.** Déterminer le module de chacun des nombres suivants :
$$z_1 = (\sqrt{3} + i\sqrt{2})^2 \quad ; \quad z_2 = (2 + 3i)^2 + 5i \quad ; \quad z_3 = (3 + 2i)^3 \quad ; \quad z_4 = \frac{2017 + 2i}{2017 - 2i} \quad ; \quad z_5 = \left(\frac{\sqrt{17} - i}{5 + 3i}\right)^4$$
$$z_6 = (\sqrt{7} + i)(7 - i\sqrt{11}) \quad ; \quad z_8 = i(3 - 4i)^3(4 + i)^2$$

**Exercice 27.** Déterminer tous les nombres complexes $z$ vérifiant : $|z| = \left|\frac{1}{z}\right| = |z - 1|$.

**Exercice 28.** Soit $z$ et $z'$ deux nombres complexes. Montrer que :
$$\left|z + z'\right|^2 + \left|z - z'\right|^2 = 2\left(|z|^2 + |z'|^2\right)$$

**Exercice 29.**
1) Soit $a$, $b$ et $c$ des nombres complexes. Montrer que : $|1 + a| + |a + b| + |b| \ge 1$.
2) Soit $z$ un nombre complexe de module 1. Que peut-on dire de $|1 + z|^2 + |1 - z|^2$ ?

**Exercice 30.**
1) Soit $z$ et $z'$ deux nombres complexes non nuls. Montrer que : $\left|\dfrac{z}{|z|^2} - \dfrac{z'}{|z'|^2}\right| = \dfrac{|z - z'|}{|z| \times |z'|}$.
2) Soit $a$, $b$ et $c$ des nombres complexes de module 1.
   a) Montrer que : $|ab + bc + ca| = |a + b + c|$.
   b) Montrer que si $ac \neq -1$ alors : $\dfrac{a + c}{1 + ac} \in \mathbb{R}$ et $\dfrac{(c - b)(1 + ab)}{b(1 + ac)} \in i\mathbb{R}$.

**Exercice 31.** Soit $u$ un nombre complexe tel que : $|u| = 1$ et $u \neq 1$.
1) Montrer que : $\operatorname{Re}\left(\dfrac{1}{1 - u}\right) = \dfrac{1}{2}$.
2) Montrer que si $z \in \mathbb{C} \setminus \mathbb{R}$ alors : $\dfrac{z - u\overline{z}}{1 - u}$ est réel.

**Exercice 32.** Pour tout $z \in \mathbb{C} - \{1\}$, on pose : $h(z) = i\dfrac{1 + z}{1 - z}$.
1) Montrer que si $|z| = 1$, alors $h(z)$ est réel.
2) Montrer que : $|z| < 1 \Leftrightarrow \operatorname{Im}(h(z)) > 0$.

**Exercice 33.** Soit $z$ et $z'$ deux nombres complexes. Montrer que :
$$4z \cdot z' = |\overline{z} + z'|^2 - |\overline{z} - z'|^2 + i(|\overline{z} - iz'|^2 - |\overline{z} + iz'|^2)$$

**Exercice 34.** Montrer que pour tout $z \in \mathbb{C} - \{2\}$ : $\operatorname{Re}(z) < 1 \Rightarrow \left|\dfrac{z}{2 - z}\right| < 1$.

#### Argument — forme trigonométrique

**Exercice 35.** Déterminer un argument du nombre complexe $z$ dans chacun des cas suivants :
1) $z = -\sqrt{15} + i\sqrt{5}$ ; 2) $z = -1 - i\sqrt{3}$ ; 3) $z = -i$ ;
4) $z = (1 - i)^2$ ; 5) $z = (1 - i)(-\sqrt{3} + i)$ ;
6) $z = \dfrac{1 + i\sqrt{3}}{1 + i}$ ; 7) $z = \dfrac{\sqrt{3} - i}{2i}$ ; 8) $z = \dfrac{-5}{\sqrt{7} - i\sqrt{2}}$ ;
9) $z = \left(\dfrac{i}{\sqrt{3} - i}\right)^4$ ; 10) $z = \left(\dfrac{-1 - i\sqrt{3}}{-1 + i}\right)^{2018}$.

**Exercice 36.** Écrire sous forme trigonométrique les nombres complexes suivants :
$$z_1 = -\sqrt{2} - i\sqrt{2} \quad ; \quad z_2 = -\sqrt{6} + i\sqrt{2} \quad ; \quad z_3 = -2i \quad ; \quad z_4 = \frac{2i}{\sqrt{2} + i\sqrt{2}} \quad ; \quad z_5 = \frac{\sqrt{3} + i}{\sqrt{2} - i\sqrt{2}} \quad ; \quad z_6 = (\sqrt{3} - i)^2$$
$$z_7 = \left(\cos\frac{\pi}{12} + i\sin\frac{\pi}{12}\right)^8 \quad ; \quad z_8 = (1 - i)(1 - i\sqrt{3}) \quad ; \quad z_9 = \left(\frac{1 + i\sqrt{3}}{1 + i}\right)^{10} \quad ; \quad z_{10} = \frac{(1 - i\sqrt{3})^{12}}{(1 + i\sqrt{3})^7}$$

**Exercice 37.** Écrire sous forme trigonométrique les nombres complexes suivants :
1) $z_1 = 1 + \cos\alpha + i\sin\alpha$ avec $\pi < \alpha < 2\pi$ ;
2) $z_2 = \cos\alpha + i(1 + \sin\alpha)$ avec $-\frac{\pi}{2} < \alpha < \frac{3\pi}{2}$ ;
3) $z_3 = \dfrac{(1 - i\sqrt{3})(\cos\alpha + i\sin\alpha)}{(\cos\alpha + \sin\alpha) + i(\cos\alpha - \sin\alpha)}$ avec $\alpha \in \mathbb{R}$ ;
4) $z_4 = \dfrac{1 + i\tan\alpha}{1 - i\tan\alpha}$ avec $\frac{\pi}{2} < \alpha < \pi$.

**Exercice 39.** On pose : $a = -1 + i\sqrt{3}$.
1) Déterminer une forme trigonométrique de $a$.
2) Déterminer le nombre complexe $b$ tel que : $ab = 2\sqrt{2}\left(\cos\frac{17\pi}{12} + i\sin\frac{17\pi}{12}\right)$.
3) En déduire les valeurs de : $\cos\frac{17\pi}{12}$ et $\sin\frac{17\pi}{12}$.

**Exercice 40.** Pour tout $n \in \mathbb{N}$, on pose : $z_n = \dfrac{1}{2}\left[(1+i)^n + (1-i)^n\right]$. Montrer que : $z_n = 2^{\frac{n}{2}}\cos\dfrac{n\pi}{4}$.

**Exercice 41.** Écrire sous forme trigonométrique les nombres complexes suivants :
$$Z_1 = (i - \sqrt{3})\left[(1 - \sqrt{3}) + (\sqrt{3} - 1)i\right]$$
$$Z_2 = \frac{2 + \sqrt{3} + (2\sqrt{3} + 3)i}{\sqrt{2} - 2 + (\sqrt{2} - 2)i}$$
$$Z_3 = \left(\frac{1}{2} - \sqrt{3} - \frac{1 - 2\sqrt{3}}{2}i\right)^{2018}$$

**Exercice 42.** Soit $z = x + iy$ un élément de $\mathbb{C} - \mathbb{R}^-$ avec $(x; y) \in \mathbb{R}^2$. Montrer que : $\arg z \equiv 2\operatorname{Arctan}\left(\dfrac{y}{|z| + x}\right) \,[2\pi]$.

**Exercice 43.**
1) On considère le nombre complexe : $z = \sqrt{2} + i\sqrt{2 - \sqrt{2}}$. Montrer que : $\arg z + \arg(z - 1) \equiv \dfrac{\pi}{2} \,[2\pi]$.
2) On considère le nombre : $A = x + i\sqrt{2}$ avec $x \in \mathbb{R}$. Déterminer la valeur du réel $x$ pour laquelle : $\arg A + \arg(A - 1) \equiv \dfrac{\pi}{2} \,[2\pi]$.

#### Notation exponentielle

**Exercice 44.**
1) Donner la forme algébrique des nombres suivants :
$$a = 4e^{-i\frac{\pi}{2}} \quad ; \quad b = \frac{\sqrt{2}}{2}e^{i\frac{3\pi}{4}} \quad ; \quad c = 8e^{-i\frac{\pi}{3}}$$
2) Écrire sous forme exponentielle les nombres complexes suivants :
$$z_1 = 2018 \quad ; \quad z_2 = -15 \quad ; \quad z_3 = 9i \quad ; \quad z_4 = -\frac{i}{\sqrt{5}} \quad ; \quad z_5 = -4 + 4i \quad ; \quad z_6 = (1 + i\sqrt{3})^7 \quad ; \quad z_7 = \frac{5\sqrt{2}}{1 - i}$$
$$z_8 = -(\sqrt{3} - i)^{2017} \quad ; \quad z_9 = \frac{i}{(\sqrt{6} + i\sqrt{2})^2} \quad ; \quad z_{10} = e^{-i\frac{3\pi}{2}} \times e^{i\frac{2\pi}{3}} \quad ; \quad z_{11} = \frac{e^{-i\pi}}{\left(e^{i\frac{7\pi}{6}}\right)^2}$$
3) a) Écrire sous forme exponentielle les nombres complexes suivants :
$$z_1 = -7\sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) \quad \text{et} \quad z_2 = e^{i\frac{\pi}{2}} \times z_1^2$$
   b) En déduire la forme algébrique du nombre $z_2$.

**Exercice 45.** Les questions sont indépendantes.
1) Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$, construire les points suivants :
$$A\left(e^{i\frac{\pi}{4}}\right) \quad ; \quad B\left(-3e^{i\frac{\pi}{4}}\right) \quad ; \quad C\left(2e^{-i\frac{\pi}{3}}\right) \quad ; \quad D\left(1 + e^{-i\frac{\pi}{3}}\right)$$
2) Soit $\theta \in \mathbb{R}$. Écrire sous forme exponentielle les nombres complexes suivants :
$$z_1 = ie^{i\theta} \quad ; \quad z_2 = -3ie^{i\theta} \quad ; \quad z_3 = -5e^{i\theta}$$
3) Linéariser les expressions suivantes :
$$A(x) = \sin^2(x)\cos^4(x) \quad ; \quad B(x) = \sin^6(x) \quad ; \quad C(x) = \sin^3(x)\cos^3(x) \quad ; \quad D(x) = \cos^6(x)$$

**Exercice 46.** Pour tout réel $\theta \in ]0; 2\pi[$, on pose : $G(\theta) = \dfrac{i(1 - e^{i\theta})}{\sqrt{3}e^{i\theta}}$.
1) Montrer que : $G(\theta) = \dfrac{2}{\sqrt{3}}\sin\left(\dfrac{\theta}{2}\right)e^{-i\frac{\theta}{2}}$.
2) Calculer : $\left(G\left(\dfrac{2\pi}{3}\right)\right)^{12}$.

**Exercice 47.** Pour tout $z \in \mathbb{C}$ tel que $\operatorname{Re}(z) \neq 2$, on pose : $F(z) = \dfrac{4 - z\overline{z}}{4 - z - \overline{z}}$. Montrer que : $|F(z) - z| = |F(z) - 2|$.

**Exercice 48.** Pour tout $z \in \mathbb{C} - \{i\}$, on pose : $f(z) = \dfrac{z + i}{1 + iz}$. Montrer que : $\operatorname{Re}(f(z)) = \dfrac{1}{2} \Leftrightarrow \operatorname{Re}(z) = \dfrac{|1 + iz|^2}{4}$.

**Exercice 49.** Pour tout $\theta \in \mathbb{R}$, on pose : $z = \sin(2\theta) - 2i\cos^2\theta$.
1) On suppose dans cette question que : $-\frac{\pi}{2} < \theta < \frac{\pi}{2}$. Déterminer le module et un argument de $z$.
2) On suppose dans cette question que : $\frac{\pi}{2} < \theta < \pi$. Écrire $z$ sous forme exponentielle.

**Exercice 50.** Pour tout $n \in \mathbb{N}$, on pose : $z_n = \dfrac{1}{2}\left((1 + i)^n + (i - 1)^n\right)$.
1) Montrer que : $(\forall n \in \mathbb{N})\; z_n = 2^{\frac{n}{2}}\cos\left(\dfrac{n\pi}{4}\right)e^{i\frac{n\pi}{2}}$.
2) Soit $p \in \mathbb{N}$. Montrer que : $z_{2p} \in \mathbb{R}$ et $z_{2p+1} \in i\mathbb{R}$.

**Exercice 51.** Résoudre dans $\mathbb{C}$ l'équation : $z^3 = \overline{z}$.

**Exercice 52.** Soit $\theta$ un réel tel que $\theta \not\equiv \pi \,[2\pi]$, et soit $t = \tan\dfrac{\theta}{2}$.
1) Montrer que : $\dfrac{1 + it}{1 - it} = e^{i\theta}$.
2) a) Montrer que : $\dfrac{1 + it}{1 - it} = \dfrac{1 - t^2}{1 + t^2} + i\dfrac{2t}{1 + t^2}$.
   b) En déduire l'expression de $\cos\theta$ et $\sin\theta$ en fonction de $t$.

**Exercice 53.** Soit $\alpha$, $\beta$ et $\gamma$ trois réels tels que :
$$\begin{cases} \cos\alpha + \cos\beta + \cos\gamma = 0 \\ \sin\alpha + \sin\beta + \sin\gamma = 0 \end{cases}$$
Montrer que : $\begin{cases} \cos(2\alpha) + \cos(2\beta) + \cos(2\gamma) = 0 \\ \sin(2\alpha) + \sin(2\beta) + \sin(2\gamma) = 0 \end{cases}$.

**Exercice 54.** On considère les nombres complexes suivants :
$$z_0 = \frac{2}{3}e^{i\frac{\pi}{3}} \quad ; \quad z_1 = \frac{3}{2}e^{i\frac{19\pi}{30}} \quad ; \quad z_2 = \frac{3}{2}e^{i\frac{23\pi}{15}}$$
On pose : $u = z_0z_1$ et $v = \dfrac{z_2}{z_0}$.
1) a) Montrer que : $2u = -\sqrt{3} + i$ et $2v = -1 - i\sqrt{3}$.
   b) Calculer : $u^6 + v^6$.
2) Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{i}, \vec{j})$, on considère les points $A(u)$, $B(v)$ et $C(t)$ avec : $t = -\dfrac{\sqrt{3} + 1}{2} + i\dfrac{1 - \sqrt{3}}{2}$. Calculer $BC$ et une mesure de l'angle $\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right)$.

**Exercice 55.** Soit $\omega = e^{\frac{2i\pi}{7}}$. Calculer les nombres :
$$A = \omega + \omega^2 + \omega^4 \quad \text{et} \quad B = \omega^3 + \omega^5 + \omega^6$$
Indication : on pourra commencer par calculer $A + B$ et $AB$.

#### Équations du second degré

**Exercice 56.** Résoudre dans $\mathbb{C}$ les équations suivantes :
$$(E_1): z^2 - (3 + 2i)z + 5 + i = 0$$
$$(E_2): (-4 - 2i)z^2 + (7 - i)z + 1 + 3i = 0$$
$$(E_3): z^4 + z^2 + 1 = 0$$
$$(E_4): z^2 - (\sqrt{3} - i)z + 2(1 - i\sqrt{3}) = 0$$
$$(E_5): z^2 - (4 - i)z + 5 - 5i = 0$$
$$(E_6): z^4 + (3 - 6i)z^2 + 2(16 - 63i) = 0$$

**Exercice 57.** On considère dans $\mathbb{C}$ l'équation suivante : $(E): z^3 + (1 + i)z^2 + (-1 + i)z - i = 0$.
1) Montrer que l'équation $(E)$ admet une solution imaginaire pure $z_0$.
2) Déterminer les nombres complexes $b$ et $c$ tels que pour tout $z \in \mathbb{C}$ :
$$z^3 + (1 + i)z^2 + (-1 + i)z - i = (z - z_0)(z^2 + bz + c)$$
3) Résoudre dans $\mathbb{C}$ l'équation $(E)$.

**Exercice 58.** Résoudre dans $\mathbb{C}$ l'équation suivante :
$$z^3 + (2i - 11)z^2 + (25 - 19i)z - 8(1 - 3i) = 0$$
sachant qu'elle admet une solution réelle.

**Exercice 59.**
1) Résoudre dans $\mathbb{C}$ l'équation suivante : $(E): z^2 - (3 - 4i)z - 1 + 7i = 0$.
2) Soit $A$ et $C$ les images des solutions de $(E)$ dans le plan complexe $\mathcal{P}$ muni d'un repère orthonormé. Déterminer les affixes des points $B$ et $D$ du plan $\mathcal{P}$ pour lesquels $ABCD$ est un carré de diamètre $[AC]$.

**Exercice 60.** On considère dans $\mathbb{C}$ l'équation suivante : $(E): iz^3 - 2(\sqrt{3} + i)z^2 - 4(-\sqrt{3} + i)z + 8i = 0$.
1) Montrer que l'équation $(E)$ admet une solution réelle $z_0$.
2) Déterminer les nombres complexes $b$ et $c$ tels que pour tout $z \in \mathbb{C}$ :
$$iz^3 - 2(\sqrt{3} + i)z^2 - 4(-\sqrt{3} + i)z + 8i = (z - z_0)(z^2 + bz + c)$$
3) Résoudre dans $\mathbb{C}$ l'équation $(E)$.

**Exercice 61.**
1) Résoudre dans $\mathbb{C}$ l'équation suivante : $z^3 - (2 + 3i)z^2 + (4 + 6i)z - 8 = 0$, sachant qu'elle admet une solution réelle.
2) Soit $A$, $B$ et $C$ les images des solutions de l'équation dans le plan complexe $\mathcal{P}$ muni d'un repère orthonormé. Montrer que le triangle $ABC$ est rectangle.

**Exercice 62.** Soit $\theta$ un réel de l'intervalle $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$. On considère dans $\mathbb{C}$ l'équation $(E)$ suivante :
$$(E): \frac{1}{2}z^2 + 2z\cos(2\theta) + 1 + 2\cos(4\theta) = 0$$
1) Déterminer les valeurs de $\theta$ pour lesquelles $(E)$ admet deux solutions réelles.
2) Résoudre l'équation $(E)$ lorsque $\theta = -\frac{\pi}{12}$.

**Exercice 63.** Résoudre dans $\mathbb{C}^2$ les systèmes suivants :
$$(S_1): \begin{cases} z_1 + z_2 = 4 \\ z_1 \times z_2 = 7 - 4i \end{cases} ; \quad (S_2): \begin{cases} z_1 + z_2 = -2 + i \\ z_1 \times z_2 = 9 + 13i \end{cases}$$

**Exercice 64.** Résoudre dans $\mathbb{C}$ l'équation : $z + \dfrac{1}{z} = \sqrt{3}$. Puis écrire les solutions sous forme trigonométrique.

**Exercice 65.** Soit $\theta$ un réel de l'intervalle $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$. Résoudre dans $\mathbb{C}$ les équations suivantes :
$$(E_1) : 2z^2 - 2(1 + \cos\theta)z + 1 + \cos\theta = 0$$
$$(E_2) : z^2\cos^2\theta - 2z\cos^2\theta + 1 = 0$$
$$(E_3) : z^2\tan^2\theta - 2z\tan^3\theta + 1 + \tan^4\theta = 0$$
$$(E_4) : z^2 - 2ze^{i\theta} + 2i\sin(\theta)e^{i\theta} = 0$$

**Exercice 66.** On considère dans $\mathbb{C}$ l'équation $(E)$ suivante :
$$z^2 - \left[4 + (1 + \sqrt{2})i\right]z + 4\sqrt{2}i - \sqrt{2} = 0$$
1) Montrer que $(E)$ admet une solution imaginaire pure qu'on déterminera.
2) En déduire l'autre solution de l'équation $(E)$.

**Exercice 67.** Résoudre dans $\mathbb{C}$ l'équation : $4z^2 + 8|z^2| - 3 = 0$. Puis écrire les solutions sous forme trigonométrique.

**Exercice 68.** On considère dans $\mathbb{C}$ l'équation $(E)$ suivante :
$$(E): z^3 + (4\cos\theta - 2)z^2 + (4 - 8\cos\theta)z - 8 = 0$$
où $\theta$ est un réel de l'intervalle $]0; \pi[$.
1) a) Résoudre l'équation $(E)$ sachant qu'elle admet une solution réelle indépendante de $\theta$.
   b) Écrire les solutions de l'équation $(E)$ sous forme exponentielle.
2) On considère dans le plan complexe muni d'un repère orthonormé direct, les points suivants : $A(2)$ ; $B(-2e^{-i\theta})$ ; $C(-2e^{i\theta})$.
   a) Déterminer une mesure de l'angle $\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right)$.
   b) Déterminer la valeur de $\theta$ pour laquelle $ABC$ est un triangle équilatéral direct.
   c) Déterminer $z_E$ et $z_F$, affixes des points $E$ et $F$, milieux respectifs des segments $[AB]$ et $[AC]$.
   d) Montrer que $\dfrac{z_E}{z_F} \times \dfrac{z_F - z_A}{z_E - z_A} \in \mathbb{R}$ et en déduire que les points $A$, $O$, $E$ et $F$ sont cocycliques.

#### Transformations usuelles du plan

**Exercice 69.** Le plan complexe $\mathcal{P}$ est muni d'un repère orthonormé direct $(O; \vec{e}_1, \vec{e}_2)$. Déterminer la représentation complexe de chacune des transformations suivantes :
1) La translation de vecteur $\vec{u}\left(3 - \frac{2}{7}i\right)$.
2) La translation transformant le point $A(3 - 4i)$ en le point $B(-7 + 8i)$.
3) L'homothétie de centre $\Omega(2 - i)$ et de rapport $-3$.
4) L'homothétie de centre $\Omega(-3i)$ et transformant le point $A(-3)$ en le point $B(-4+i)$.
5) La rotation de centre $\Omega(-3)$ et d'angle $\frac{\pi}{4}$.
6) La rotation de centre $\Omega(-2 - i)$ et transformant le point $A(-1 - 2i)$ en le point $B(-1)$.

**Exercice 70.** Déterminer la nature de chacune des transformations suivantes puis donner ses caractéristiques :
1) $z' = z - 3i$ ; 2) $z' = 1 - i - z$ ; 3) $z' = -3iz$ ;
4) $z' + 2i = -3(z + 2i)$ ; 5) $z' + 3i = (1 - i)(z + 3i)$ ;
6) $z' = \dfrac{1 + i}{\sqrt{2}}z$ ; 7) $z' + 1 + i = -2e^{i\frac{2\pi}{3}}(z + 1 + i)$.

### Exercices de perfectionnement

**Exercice 71.** On considère dans $\mathbb{C}$ l'équation $(E)$ suivante :
$$(E): \frac{1}{2}z^3 - (1+i)z^2 + 2(1+i)z - 4i = 0$$
1) a) Montrer que l'équation $(E)$ admet une solution imaginaire pure $z_0$ à déterminer.
   b) Résoudre dans $\mathbb{C}$ l'équation $(E)$.
2) Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$, on considère les points : $A(1+i\sqrt{3})$ ; $B(1-i\sqrt{3})$ ; $C(2i)$.
   a) Montrer que : $OA = OB$.
   b) Soit $D$ le milieu du segment $[AC]$. Déterminer l'affixe du point $D$ et une mesure de l'angle $\left(\widehat{\vec{u}, \overrightarrow{OD}}\right)$.
   c) En déduire les valeurs de $\cos\left(\frac{5\pi}{12}\right)$ et $\sin\left(\frac{5\pi}{12}\right)$.
3) Soit $O'$ l'image du point $O$ par la rotation $R_1$ de centre $A$ et d'angle $-\frac{\pi}{2}$, et $B'$ l'image du point $B$ par la rotation $R_2$ de centre $A$ et d'angle $\frac{\pi}{2}$.
   a) Déterminer les affixes des points $O'$ et $B'$.
   b) Soit $I$ le milieu du segment $[OB]$. Montrer que $(AI)$ est une hauteur du triangle $AO'B'$.

**Exercice 72.** Soit les nombres : $a = 3i$ et $b = \sqrt{2}(1+i)+i$. Et on considère dans le plan complexe les points : $A(a)$ ; $B(b)$ ; $C(a+b-i)$ ; $E(i)$. Montrer que $EBCA$ est un losange et que : $\arg\left(1 + \dfrac{a-i}{b-i}\right) \equiv \dfrac{3\pi}{8} \,[2\pi]$.

**Exercice 73.** Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$, on considère les points $A$, $B$ et $C$ d'affixes respectives : $a = -2i$ ; $b = -1+i\sqrt{3}$ ; $c = \sqrt{3}+i$.
1) a) Vérifier que le point $O$ est le centre du cercle circonscrit du triangle $ABC$.
   b) Soit $G$ le centre de gravité du triangle $ABC$. Déterminer l'affixe $g$ du point $G$.
2) On considère le point $H$ d'affixe : $h = (\sqrt{3}-1)(1+i)$.
   a) Calculer $\arg\left(\dfrac{c - b}{h - a}\right)$ et $\arg\left(\dfrac{c - a}{h - b}\right)$.
   b) En déduire que $H$ est l'orthocentre de $ABC$.
3) Montrer que les points $O$, $G$ et $H$ sont alignés.

**Exercice 74.** Pour tout $z \in \mathbb{C}$, on pose : $P(z) = z^6 - 12z^4 + 36z^2 - 81$.
1) a) Déterminer les nombres $\alpha$ et $\beta$ tels que : $(\forall z \in \mathbb{C})\; P(z) = (z^2 - 9)(z^4 + \alpha z^2 + \beta)$.
   b) Résoudre dans $\mathbb{C}$ l'équation : $(E): P(z) = 0$.
   c) Vérifier que les solutions de $(E)$ sont les nombres complexes $z_k$ tels que :
$$\begin{cases} z_k = 3\left(\cos\left(\frac{k\pi}{3}\right) + i\sin\left(\frac{k\pi}{3}\right)\right) \\ k \in \{0; 1; 2; 3; 4; 5\} \end{cases}$$
2) Pour tout $k \in \{0; 1; 2; 3; 4; 5\}$, on pose : $u_k = 2i\left(z_k - 2\cos\left(\frac{k\pi}{3}\right)\right)$. Montrer que les nombres $u_k$ sont des termes successifs d'une suite géométrique puis calculer $u_1 + u_2 + \dots + u_5$.

**Exercice 75.** Dans le plan orienté, on considère deux points fixes et distincts $A$ et $\Omega$, et le cercle $\mathcal{C}$ de diamètre $[A\Omega]$. Soit $M$ un point parcourant le cercle $\mathcal{C}$ et différent des points $A$ et $\Omega$. On considère deux carrés directs $MAPN$ et $MKL\Omega$.
On munit le plan d'un repère orthonormé de telle sorte que $0$ et $1$ soient les affixes respectives de $\Omega$ et $A$. On note $k$, $\ell$, $m$, $n$ et $p$ respectivement les affixes des points $K$, $L$, $M$, $N$ et $P$.
1) Montrer que pour tout $M \in \mathcal{C}$ : $\left|m - \frac{1}{2}\right| = \frac{1}{2}$.
2) Montrer que : $\ell = im$ ; $p = -im + 1 + i$ ; $n = (1 - i)m + i$ ; $k = (1 + i)m$.
3) a) Montrer que le milieu $I$ du segment $[PL]$ ne dépend pas de la position du point $M$.
   b) Montrer que $I \in \mathcal{C}$ et déterminer sa position.
4) a) Calculer $KN$ et montrer qu'elle est constante.
   b) Quelle est la nature du triangle $INK$ ?
5) Montrer que le point $N$ appartient à un cercle fixe (indépendamment du point $M$) dont on déterminera le centre et le rayon.

**Exercice 76.** Soit $z = \rho e^{i\theta}$ tel que : $\rho > 0$ et $\theta \in \mathbb{R}$. Déterminer selon les valeurs de $\theta$, une forme trigonométrique du nombre complexe : $t = z - e^{i\frac{\pi}{3}}\overline{z}$.

**Exercice 77.** Soit $z$ et $z'$ deux complexes.
1) Montrer que : $|z \cdot z'|^2 - z \cdot z' - \overline{z} \cdot \overline{z'} + 1 = |z \cdot z' - 1|^2$.
2) Montrer les inégalités suivantes :
$$|z + z'|^2 \le (1 + |z|^2)(1 + |z'|^2)$$
$$2\operatorname{Re}(\overline{z} \cdot z') \le |z|^2 + |z'|^2$$
$$1 + |z \cdot z' - 1| \le (1 + |z - 1|)(1 + |z' - 1|)$$
3) On suppose dans cette question que : $|z| = |z'| = 1$.
   a) Montrer que : $\dfrac{(z + z')^2}{z \cdot z'} = z\overline{z'} + \overline{z}z' + 2$.
   b) En déduire que $\dfrac{(z + z')^2}{z \cdot z'}$ est un réel positif.
4) On suppose dans cette question que : $|z| \ge 1$ et $|z'| \ge 1$ et $|z + z'| \le 1$. Montrer que : $|z^2 + z'^2| > 1$.

**Exercice 78.** Pour tout $z \in \mathbb{C}^*$, on pose : $f(z) = z + \dfrac{4}{z}$.
1) Déterminer les solutions $z_1$ et $z_2$ de l'équation : $(E) : f(z) = -2$ avec $\operatorname{Im} z_1 > \operatorname{Im} z_2$.
2) a) Écrire $z_1$ et $z_2$ sous forme trigonométrique.
   b) Montrer que : $z_1^{2016} + z_2^{2016} = 2^{2017}$.
3) On munit le plan complexe $\mathcal{P}$ d'un repère orthonormé $(O; \vec{u}, \vec{v})$. On considère les points : $A(\alpha)$ ; $B(z_1)$ ; $C(z_2)$ où $\alpha \in \mathbb{R}^+$.
   a) Déterminer $\alpha$ pour que $ABC$ soit équilatéral.
   b) Montrer que pour tout $z \in \mathbb{C}^*$ : $f(z) = \overline{f(\overline{z})} \Leftrightarrow (z - \overline{z})(z\overline{z} - 4) = 0$.
   c) En déduire $\Gamma$, ensemble des points $M(z)$ pour lesquels $f(z)$ est réel.
   d) Vérifier que les points $A$, $B$ et $C$ appartiennent à $\Gamma$.

**Exercice 79.** Le plan complexe est rapporté à un repère orthonormé direct $(O; \vec{u}, \vec{v})$. On dit qu'un triangle équilatéral $ABC$ est direct si et seulement si : $\left(\widehat{\overrightarrow{AB}, \overrightarrow{AC}}\right) \equiv \frac{\pi}{3} \,[2\pi]$. On pose : $j = e^{i\frac{2\pi}{3}}$.
1) a) Vérifier que $1$, $j$ et $j^2$ sont solutions de $z^3 = 1$.
   b) Calculer $(1-j)(1+j+j^2)$ et en déduire que $1 + j + j^2 = 0$.
   c) Vérifier que : $e^{i\frac{\pi}{3}} + j^2 = 0$.
2) Dans le plan complexe, on considère trois points $A$, $B$ et $C$, deux à deux distincts, d'affixes respectives $a$, $b$ et $c$.
   a) Démontrer que le triangle $ABC$ est équilatéral direct si, et seulement si : $\dfrac{c-a}{b-a} = e^{i\frac{\pi}{3}}$.
   b) En utilisant les résultats des questions précédentes, montrer que le triangle $ABC$ est équilatéral direct si, et seulement si : $a + bj + cj^2 = 0$.
3) À tout nombre complexe $z$ différent de 1, on associe les points $R$, $M$, $M'$ d'affixes respectives $1$, $z$ et $\overline{z}$.
   a) Pour quelles valeurs de $z$, les points $M$ et $M'$ sont-ils distincts ?
   b) En supposant que la condition précédente est réalisée, montrer que l'ensemble $\Delta$ des points $M$ d'affixe $z$ tel que $RMM'$ soit équilatéral direct est une droite privée d'un point.

**Exercice 80.** Pour tout $\theta \in [0; \pi[$, on pose : $f(\theta) = \dfrac{ie^{i\theta} - 1}{(e^{i\theta} + 1)^2}$.
1) Montrer que : $\overline{f(\theta)} = ie^{i\theta}f(\theta)$.
2) Déterminer $\theta$ sachant que : $f(\theta) + \overline{f(\theta)} = 0$.
3) Écrire $f(\theta)$ sous forme exponentielle.

**Exercice 81.** Soit $a$ un nombre complexe différent de $i$ et $-i$. On considère l'équation $(E)$ suivante :
$$(E): (1 - i)z^2 - 2(a + 1)z + (1 + i)(1 + a^2) = 0$$
1) Résoudre l'équation $(E)$. On considère les nombres $\alpha = a + i$ et $\beta = 1 + ai$ et les points : $A(a)$ ; $B(\beta)$ ; $C(\alpha)$.
2) On suppose dans cette question que : $a = e^{i\theta}$. Écrire $\alpha$ et $\beta$ sous forme trigonométrique.
3) a) Montrer que : $\dfrac{\alpha}{\beta} \in \mathbb{R} \Leftrightarrow |a| = 1$.
   b) Déterminer l'ensemble des points $A(a)$ pour lesquels les points $O$, $B$ et $C$ sont alignés.
4) On suppose dans cette question que : $|a| = 1$ et $a^2 + a(2i - 1) - 1 \neq 0$.
   a) Montrer que : $\dfrac{\alpha^2}{a} \in i\mathbb{R}$.
   b) Montrer qu'il existe un unique nombre complexe $\omega$ tel que : $\dfrac{\alpha^2 - \omega}{a - \omega} = i$ et $\omega \neq 0$.
   c) On considère les points : $\Omega(\omega)$ et $D(\alpha^2)$. Montrer que $O$, $\Omega$, $D$ et $A$ sont cocycliques.
   d) Soit $\mathcal{C}$ le cercle circonscrit au quadrilatère $\Omega DAO$. Soit $R$ la rotation de centre $\Omega$ et d'angle $\frac{\pi}{2}$. Montrer que $R(A) = D$ et en déduire le centre et le rayon du cercle $\mathcal{C}$.

**Exercice 82.**
1) Montrer que pour tout $x \in \mathbb{R}$ et pour tout $z \in \mathbb{C}$ : $\left(z - e^{ix}\right)\left(z - e^{-ix}\right) = z^2 - 2z\cos x + 1$.
2) Montrer que pour tout $z \in \mathbb{C}$ : $z^5 - 1 = (z - 1)\left(z^2 - 2z\cos\frac{2\pi}{5} + 1\right)\left(z^2 - 2z\cos\frac{4\pi}{5} + 1\right)$.
3) Résoudre dans $\mathbb{C}$ l'équation $z^5 - 1 = 0$ puis en déduire les valeurs de $\cos\frac{2\pi}{5}$ et $\cos\frac{4\pi}{5}$.

### Problèmes de synthèse

#### Se préparer aux devoirs

**Devoir 1.**

Les parties A), B) et C) sont indépendantes.

**Partie A :** Soit $m$ un nombre complexe non nul. On considère dans $\mathbb{C}$ l'équation $(E)$ suivante :
$$(E) : z^2 - (3m - 2i)z + 2m^2 - 4mi = 0$$
1) Résoudre l'équation $(E)$.
2) Dans cette question, on prend $m = 1 + i$ ; et soit $z_1$ et $z_2$ les solutions de $(E)$ telles que $|z_1| < |z_2|$.
   a) Écrire $z_1$ et $z_2$ sous forme trigonométrique.
   b) Vérifier que $(-z_1)$ est une racine cubique de $z_2$ ; puis en déduire la forme algébrique des deux autres racines cubiques de $z_2$.
3) Le plan complexe est rapporté à un repère orthonormé direct $(O; \vec{u}, \vec{v})$, on considère les points : $A(i)$ ; $B(2m)$ ; $C(m - 2i)$, et on suppose que $m \notin i\mathbb{R}$.
   a) Montrer que les points $A$, $B$ et $C$ ne sont pas alignés.
   b) À l'extérieur du triangle $ABC$, on construit le point $D$ de telle sorte que le triangle $BCD$ soit rectangle et isocèle en $D$ ; et soit $d$ l'affixe du point $D$. Montrer que :
$$d = \frac{3m - im + 2 - 2i}{2} \quad \text{ou} \quad d = \frac{3m + im + 2 - 2i}{2}$$
   c) Déterminer la valeur de $m$ pour laquelle le quadrilatère $ABDC$ est un carré.

**Partie B :** Dans le plan muni d'un repère orthonormé direct $(O; \vec{e}_1, \vec{e}_2)$, on considère les points $I(i)$ et $I'(-i)$ ; et soit $f$ l'application définie de $\mathbb{C} - \{i\}$ dans $\mathbb{C}$ par :
$$f(z) = \frac{\overline{z}(z - i)}{\overline{z} + i}$$
Et soit $F$ l'application définie de $\mathcal{P} - \{I\}$ dans $\mathcal{P}$ qui associe à chaque point $M(z)$ le point $M'(z')$ où $z' = f(z)$.
1) Soit $z \in \mathbb{C}^* - \{i\}$.
   a) Établir les relations suivantes : $|z'| = |z|$ et $\arg(z') \equiv -\arg(z) + 2\arg(z - i)$.
   b) Montrer que si $|z| = 1$ alors : $f(z) = -i$.
2) a) Déterminer l'ensemble des points invariants par $F$.
   b) Quel est l'ensemble des points $M(z)$ pour lesquels $f(z)$ est imaginaire pur ?
3) a) Montrer les égalités suivantes :
$$z' + i = \frac{z \cdot \overline{z} - 1}{|\overline{z} + i|^2}(z - i) \quad \text{et} \quad z' - z = \frac{-i(z + \overline{z})}{|\overline{z} + i|^2}(z - i)$$
   b) En déduire que les vecteurs $\overrightarrow{AM}$ et $\overrightarrow{AM'}$ sont colinéaires, et que $\overrightarrow{AM}$ et $\overrightarrow{MM'}$ sont orthogonaux.
   c) Donner une méthode pour la construction géométrique de l'image de $M$ par l'application $F$.

**Partie C :** On considère dans $\mathbb{C}$ l'équation suivante :
$$(E) : z^3 - (4 + i)z^2 + (13 + 4i)z - 13i = 0$$
1) a) Montrer que l'équation $(E)$ admet une solution imaginaire pure $z_0$ que l'on déterminera.
   b) Résoudre dans $\mathbb{C}$ l'équation $(E)$.
2) Dans le plan complexe rapporté à un repère orthonormé direct $(O; \vec{u}, \vec{v})$, on considère les points : $A(i)$ ; $B(2 + 3i)$ ; $C(2 - 3i)$.
   a) Soit $r$ la rotation de centre $B$ et d'angle $\frac{\pi}{4}$. Déterminer l'affixe du point $A' = r(A)$.
   b) Montrer que les points $A'$, $B$ et $C$ sont alignés.
   c) Déterminer l'écriture complexe de l'homothétie de centre $B$ et qui transforme le point $C$ en $A'$.
   d) Vérifier que $h^{-1} \circ r(A) = C$ puis déterminer l'écriture complexe de l'application $h^{-1} \circ r$.

**Devoir 2.**

Les parties A), B) et C) sont indépendantes.

**Partie A :** Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$, on considère les points $A$, $B$ et $C$ d'affixes respectives : $a = 2$ ; $b = 1 - i$ ; $c = 1 + i$.
1) Calculer $\dfrac{c - a}{b - a}$ et en déduire la nature du triangle $ABC$.
2) Soit $r$ la rotation de centre $A$ et transformant le point $B$ en $C$.
   a) Déterminer l'angle de $r$ puis montrer que $z' = -iz + 2 + 2i$ est l'écriture complexe de $r$.
   b) Soit $\mathcal{C}$ le cercle de diamètre $[BC]$. Déterminer $\mathcal{C}'$ image de $\mathcal{C}$ par la rotation $r$ puis vérifier que $\mathcal{C}'$ passe par le point $C$.
3) Soit $M(z)$ un point de $\mathcal{C}$ différent de $C$, et $M'(z')$ son image par la rotation $r$.
   a) Montrer qu'il existe $\theta \in \left[0; \frac{\pi}{2}\right[ \cup \left]\frac{\pi}{2}; \pi\right]$ tel que $z = 1 + e^{i\theta}$ puis en déduire que : $z' = 2 + i - ie^{i\theta}$.
   b) Montrer que : $\dfrac{z' - c}{z - c} = \dfrac{2\cos\theta}{|e^{i\theta} - i|^2}$ et en déduire que les points $M$, $C$ et $M'$ sont alignés.
   c) Construire $A$, $B$, $C$, $\mathcal{C}$, $\mathcal{C}'$, $M$ et $M'$ dans le cas où $\theta = \frac{2\pi}{3}$.

**Partie B :** Pour tout $z \in \mathbb{C} - \{1\}$, on pose : $f(z) = \dfrac{iz}{z - 1}$.
1) Déterminer l'ensemble des points $M(z)$ du plan pour lesquels $f(z) \in i\mathbb{R}$.
2) On considère dans $\mathbb{C}$ l'équation : $f(z) = \dfrac{1}{\sqrt{3}}\;(E)$.
   a) Résoudre l'équation $(E)$. On note $z_1$ et $z_2$ les solutions de $(E)$ avec $|z_1| = 1$.
   b) Écrire $z_1$ et $z_2$ sous forme trigonométrique.
   c) Calculer $z_1^3 + z_2^6$.

**Partie C :** Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$, on considère les points $A(a)$ et $B(1)$ où $a \in \mathbb{C} - \{1\}$. Soit $f$ l'application définie par :
$$f : \mathcal{P} - \{B\} \to \mathcal{P}, \quad M(z) \mapsto M'(z') \quad \text{telle que : } z' = \frac{z - a}{z - 1}$$
1) Montrer que : $z' = z \Leftrightarrow z^2 - 2z + a = 0$.
2) On suppose que : $a = 1 + e^{i\theta}$ avec $\frac{\pi}{2} < \theta < \frac{3\pi}{2}$.
   a) Résoudre l'équation : $z^2 - 2z + a = 0$.
   b) Écrire le nombre $Z = 1 + e^{i\left(\frac{\theta}{2} - \frac{\pi}{2}\right)}$ sous forme trigonométrique. On pourra remarquer que : $1 + e^{i\theta} = e^{i\frac{\theta}{2}}\left(e^{i\frac{\theta}{2}} + e^{-i\frac{\theta}{2}}\right)$.
3) On suppose dans cette question que $a = -1$.
   a) Montrer que pour tout point $M \in \mathcal{P} - \{B\}$ : $\left(\widehat{\vec{u}, \overrightarrow{BM}}\right) + \left(\widehat{\vec{u}, \overrightarrow{BM'}}\right) \equiv 0 \,[2\pi]$.
   b) En déduire que $[BA)$ est une bissectrice de l'angle $\left(\widehat{\overrightarrow{BM}, \overrightarrow{BM'}}\right)$.
   c) En déduire que : $z' \in i\mathbb{R} \Leftrightarrow |z| = 1$.
   d) Soit $M$ un point du cercle trigonométrique différent de $B$. En déduire de ce qui précède une construction de $M'$ image de $M$ par l'application $f$.

**Devoir 3.**

Les parties A), B) et C) sont indépendantes.

**Partie A :** On considère dans $\mathbb{C}$ l'équation $(E)$ suivante :
$$(E): z^3 - \frac{3}{2}(\sqrt{3} + i)z - (1 + i) = 0$$
1) Vérifier que les racines cubiques de l'unité sont : $1$, $j$ et $\overline{j}$. (On rappelle que : $j = -\frac{1}{2} + i\frac{\sqrt{3}}{2}$.)
2) Déterminer deux nombres complexes $u$ et $v$ vérifiant le système : $(S): \begin{cases} u + v = 1 + i \\ u \cdot v = i \end{cases}$.
3) Soit $\alpha$ et $\beta$ deux nombres complexes tels que $\alpha + \beta$ est solution de $(E)$ et $\alpha\beta = -i \cdot j$.
   a) Montrer que $\alpha^3$ et $\beta^3$ vérifient le système $(S)$.
   b) En déduire que les solutions de $(E)$ s'écrivent : $1 - i \cdot j$ et $j(1 - i\overline{j})$ et $\overline{j}(1 - i)$.
4) Soit $\theta$ un élément de l'intervalle $]0; 2\pi[$.
   a) Déterminer, en fonction de $\theta$, le module et l'argument du nombre complexe $1 - (\cos\theta + i\sin\theta)$.
   b) Déterminer le module et l'argument de chacune des solutions de l'équation $(E)$.

**Partie B :** Soit $\alpha \in \mathbb{C}^*$. On considère l'application $f_\alpha$ définie de $\mathbb{C} - \{\alpha\}$ dans $\mathbb{C} - \{\alpha\}$ par : $f_\alpha(z) = \dfrac{\alpha z}{z - \alpha}$.
1) Montrer que : $f_\alpha(z) \in i\mathbb{R} \Leftrightarrow |z|^2\operatorname{Re}(\alpha) = |\alpha|^2\operatorname{Re}(z)$.
2) Pour tout $z \in \mathbb{C} - \{\alpha\}$, on pose : $|z - \alpha| = r$ et $\arg(z - \alpha) \equiv \theta \,[2\pi]$.
   a) Calculer $|f_\alpha(z) - \alpha|$ en fonction de $r$ et $|\alpha|$.
   b) Calculer $\arg(f_\alpha(z) - \alpha)$ en fonction de $\theta$ et $\arg\alpha$.
3) On prend dans cette question $\alpha = -1 + i$, et on considère dans le plan complexe $\mathcal{P}$ les ensembles :
$$\mathcal{D} = \left\{M(z) \;/\; \arg(f_\alpha(z) - \alpha) \equiv \frac{3\pi}{4} \,[2\pi]\right\} \quad ; \quad \mathcal{C} = \{M(z) \;/\; |f_\alpha(z) - \alpha| = 2\} \quad ; \quad \mathcal{E} = \{M(z) \;/\; f_\alpha(z) \in i\mathbb{R}\}$$
   a) Déterminer $\mathcal{C}$ et $\mathcal{E}$.
   b) Montrer que $\mathcal{D}$ est une demi-droite d'extrémité $A(\alpha)$ privée du point $A$, dont on détermine une équation cartésienne.
   c) Soit $z_0 \in \mathbb{C} - \{\alpha\}$ et $B(z_0)$ tel que $B \in \mathcal{D} \cap \mathcal{C}$. Écrire $f_\alpha(z_0)$ sous forme algébrique puis déterminer $z_0$.
   d) Construire $\mathcal{C}$, $\mathcal{D}$ et $\mathcal{E}$.
4) On considère l'application $\varphi$ qui, à chaque point $M(z)$, associe le point $M'(z')$ tel que : $z' = (-1 + i)z - 1 + 3i$.
   a) Montrer que $\varphi$ est la composée d'une homothétie et d'une rotation à déterminer.
   b) Déterminer les images de $\mathcal{C}$ et $\mathcal{D}$ par $\varphi$.

**Partie C :** Soit $x$ un nombre réel tel que : $x \not\equiv 0 \,[2\pi]$. Pour tout $n \in \mathbb{N}^*$, on pose : $S_n = 1 + e^{ix} + \dots + e^{inx}$.
1) Montrer que : $(\forall \theta \in \mathbb{R})\; 1 - e^{i\theta} = \left(-2i\sin\frac{\theta}{2}\right)e^{i\frac{\theta}{2}}$.
2) Montrer que : $(\forall n \in \mathbb{N}^*)\; S_n = \dfrac{1 - e^{i(n+1)x}}{1 - e^{ix}}$.
3) En déduire que : $(\forall n \in \mathbb{N}^*)\; S_n = \dfrac{\sin\left(\frac{(n+1)}{2}x\right)}{\sin\frac{x}{2}}e^{i\frac{nx}{2}}$.
4) On prend dans cette question : $x = \frac{\pi}{n}$ avec $n \ge 2$. On pose : $A_n = \sum_{k=0}^{n-1}\cos\left(\frac{k\pi}{n}\right)$ et $B_n = \sum_{k=0}^{n-1}\sin\left(\frac{k\pi}{n}\right)$.
   a) Vérifier que : $S_{n-1} = A_n + iB_n$.
   b) En déduire que $B_n = \dfrac{1}{\tan\left(\frac{\pi}{2n}\right)}$.

**Devoir 4.**

Les parties A), B), C) et D) sont indépendantes.

**Partie A :** Soit les nombres complexes suivants : $z = \dfrac{\sqrt{6} - i\sqrt{2}}{2}$ et $z' = 1 - i$.
1) a) Mettre sous forme trigonométrique : $z$ ; $z'$ ; $Z = \dfrac{z}{z'}$.
   b) En déduire les valeurs de $\cos\frac{\pi}{12}$ et $\sin\frac{\pi}{12}$.
2) On considère l'équation d'inconnue $x \in \mathbb{R}$ :
$$(\sqrt{6} + \sqrt{2})\cos x + (\sqrt{6} - \sqrt{2})\sin x = 2$$
   Résoudre cette équation puis placer les points images des solutions sur le cercle trigonométrique.

**Partie B :** Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$, on considère les points : $A(1)$ et $M(z)$, où : $z = e^{ix}$ avec $x \in ]-\pi; \pi]$. On désigne par $P$ le point du plan d'affixe $1 + z$ et par $Q$ celui d'affixe $z^2$.
1) a) À partir du point $M$, donner une construction géométrique de $P$ et $Q$.
   b) Placer les points $O$, $A$, $P$ et $Q$ sur une même figure.
2) Déterminer l'ensemble des points $P$ lorsque $x$ décrit l'intervalle $]-\pi; \pi]$. Représenter cet ensemble.
3) Soit $S$ le point d'affixe $1 + z + z^2$, où $z$ désigne toujours l'affixe du point $M$.
   a) Construire $S$ en justifiant la construction.
   b) Dans le cas où $S$ est différent du point $O$, tracer la droite $(OS)$. Quelle conjecture peut-on faire sur la position du point $M$ ?
   c) Démontrer que : $(\forall x \in ]-\pi; \pi])\; \dfrac{1 + z + z^2}{z} \in \mathbb{R}$. Conclure sur la conjecture précédente.

**Partie C :** Le plan $\mathcal{P}$ est rapporté à un repère orthonormé direct $(O; \vec{u}, \vec{v})$. Soit $\Gamma(O; R)$ le cercle de centre $O$ et de rayon $R$, et $A$ le point de coordonnées $(R; 0)$. Pour tout entier $n \ge 2$, on considère la rotation $r\left(O; \frac{2\pi}{n}\right)$ de centre $O$ et d'angle $\frac{2\pi}{n}$. On construit une suite de points par récurrence :
$$\begin{cases} M_0 = A \\ M_{k+1} = r(M_k)\;;\; k \in \mathbb{N} \end{cases}$$
1) Si $z_k$ est l'affixe de $M_k$ et $z_{k+1}$ est l'affixe de $M_{k+1}$, montrer par récurrence que : $(\forall k \in \mathbb{N})\; z_k = Re^{\frac{2ik\pi}{n}}$.
2) Calculer la distance $M_kM_{k+1}$. Pour $n = 8$, construire les points $M_k$.
3) On pose : $L_n = \sum_{k=0}^{n-1} M_kM_{k+1}$. Calculer $\lim_{n \to +\infty} L_n$ puis interpréter géométriquement le résultat obtenu.

**Partie D :** On considère dans $\mathbb{C}$ l'équation $(E)$ suivante :
$$z^3 - i(1 + 2\tan\theta)z^2 - (1 + \tan\theta)^2z + i(1 + \tan^2\theta) = 0 \quad \text{où} \quad \theta \in \left]-\frac{\pi}{2}; \frac{\pi}{2}\right[$$
1) Montrer que l'équation $(E)$ admet une solution imaginaire pure indépendante de $\theta$ à déterminer.
2) Déterminer les deux autres solutions. On note $a$ et $b$ ces solutions avec $\operatorname{Re}(a) > 0$.
3) Donner le module et l'argument de $a$ en fonction de $\theta$.
4) Soit $R$ la rotation d'angle $\frac{\pi}{2}$ et qui transforme le point $M(\tan\theta)$ en le point $B(b)$. Déterminer l'écriture complexe de la rotation $R$, ainsi que le centre $\Omega(\omega)$ de cette rotation.
5) Déterminer la valeur de $\theta$ pour laquelle les points $\Omega(\omega)$, $M(\tan\theta)$, $A(a)$ et $B(b)$ soient cocycliques.

**Devoir 5.**

Les parties A), B) et C) sont indépendantes.

**Partie A :** Pour tout $z \in \mathbb{C} - \{-1\}$, on pose : $f(z) = \dfrac{iz - 1}{(z + 1)^2}$.
1) a) Déterminer le réel $y$ tel que : $f(iy) = iy$.
   b) Résoudre dans $\mathbb{C}$ l'équation : $(E) : f(z) = z$. On note $z_0$, $z_1$ et $z_2$ les solutions de l'équation $(E)$ telles que : $\operatorname{Re}(z_0) = 0$ et $\operatorname{Re}(z_1) > \operatorname{Re}(z_2)$.
2) a) Vérifier que : $z_1 + 1 = e^{i\frac{11\pi}{6}}$ et $z_2 + 1 = e^{i\frac{7\pi}{6}}$.
   b) En déduire la forme trigonométrique de $z_1$ et $z_2$.
3) Dans cette question, on suppose que : $z = e^{i\alpha}$ avec $0 \le \alpha < \pi$.
   a) Montrer que : $\overline{f(z)} = izf(z)$.
   b) Déterminer $\alpha$ sachant que : $f(z) + \overline{f(z)} = 0$.
   c) Écrire $f(z)$ sous forme exponentielle.
4) Déterminer $z$ sachant que : $\begin{cases} |z| = 1 \\ \operatorname{Re}(f(z)) = \frac{1}{2} \end{cases}$.

**Partie B :** On considère les nombres complexes $z_n$ définis pour tout $n \in \mathbb{N}$ par :
$$\begin{cases} z_0 = 1 \\ z_{n+1} = \left(\frac{3}{4} + i\frac{\sqrt{3}}{4}\right)z_n \quad \text{si} \quad n \in \mathbb{N} \end{cases}$$
Et on note $A_n$ l'image du nombre complexe $z_n$ dans un repère orthonormé direct $(O; \vec{u}, \vec{v})$ avec $\|\vec{u}\| = 4\,\text{cm}$.
1) a) Écrire sous forme exponentielle les nombres $z_1$ à $z_n$.
   b) Placer les points $A_0$ à $A_n$ dans le repère.
2) Pour tout $n \in \mathbb{N}$, on pose : $d_n = |z_{n+1} - z_n|$.
   a) Vérifier que pour tout $n \in \mathbb{N}$ : $z_{n+2} - z_{n+1} = \left(\frac{3}{4} + i\frac{\sqrt{3}}{4}\right)(z_{n+1} - z_n)$.
   b) En déduire une relation liant $d_{n+1}$ et $d_n$ pour $n \in \mathbb{N}$ puis exprimer $d_n$ en fonction de $n$ et $d_0$.
   c) Donner une interprétation géométrique de chacun des nombres $d_n$.
   d) On pose pour tout $n \in \mathbb{N}$ : $L_n = \sum_{k=0}^n A_kA_{k+1}$, qui représente la longueur polygonale des sommets successifs $A_0, A_1, \dots, A_n$. Déterminer l'expression de $L_n$ en fonction de $n$, et la limite de la suite $(L_n)$ quand $n$ tend vers $+\infty$.
3) Pour tout $n \in \mathbb{N}$, on pose : $a_n = \arg(z_n) \,[2\pi]$.
   a) Établir une relation entre $a_{n+1}$ et $a_n$.
   b) En déduire que pour tout $n \in \mathbb{N}$ : $a_n \equiv \frac{n\pi}{6} \,[2\pi]$.
   c) Pour quelles valeurs de l'entier $n$ les points $O$, $A_0$ et $A_n$ sont-ils alignés ?

**Partie C :** Le plan est muni d'un repère orthonormé direct. Pour tout $z \in \mathbb{C}$, on pose : $P(z) = z^2 - (2 + 6i)z$.
1) Déterminer les ensembles suivants : $\mathcal{E} = \{M(z) \;/\; P(z) \in i\mathbb{R}\}$ et $\mathcal{D} = \{M(z) \;/\; P(z) \in \mathbb{R}\}$.
2) Résoudre dans $\mathbb{C}$ l'équation : $P(z) = 4 - 6i$.
3) On pose : $u = 1 + 5i$ ; $v = 1 + i$ ; $w = 239 - i$. Et : $\alpha = \arctan\frac{1}{5}$ et $\beta = \arctan\frac{1}{239}$.
   a) Vérifier que : $u^4 \times v = 4w$.
   b) Déterminer en fonction de $\alpha$ un argument de $u$ ; déterminer en fonction de $\beta$ un argument de $w$.
   c) En déduire que : $4\arctan\frac{1}{5} - \arctan\frac{1}{239} = \frac{\pi}{4}$.

#### Se préparer aux examens

**Problème 1.**
Le plan complexe est muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$.
1) On considère dans $\mathbb{C}$ l'équation suivante : $(E)\; z^2 - 4iz - 2 + 2i\sqrt{3} = 0$.
   a) Vérifier que le nombre $a = 1 + i(2 - \sqrt{3})$ est une solution de l'équation $(E)$.
   b) En déduire $b$ la deuxième solution de $(E)$.
2) a) Montrer que : $a^2 = 4(2 - \sqrt{3})e^{i\frac{\pi}{6}}$.
   b) Écrire $a$ sous forme trigonométrique.
3) On considère les points $A$, $B$ et $C$ d'affixes respectives $a$, $b$ et $c = 2i + 2e^{i\frac{\pi}{3}}$. Soit $\Gamma$ le cercle de diamètre $[AB]$.
   a) Déterminer $\omega$ l'affixe de $\Omega$ centre du cercle $\Gamma$.
   b) Montrer que les points $O$ et $C$ appartiennent à $\Gamma$.
   c) Montrer que le nombre $\dfrac{c - a}{c - b}$ est imaginaire pur.

**Problème 2.** *(Examen National 2010 — Session de rattrapage)*
1) On considère dans l'ensemble $\mathbb{C}$ l'équation suivante : $(E): z^2 - (5 + i\sqrt{3})z + 4 + 4i\sqrt{3} = 0$.
   a) Vérifier que $\left(3 - i\sqrt{3}\right)^2$ est le discriminant de $(E)$.
   b) Déterminer $a$ et $b$ solutions de l'équation $(E)$ (sachant que $b \in \mathbb{R}$).
   c) Vérifier que : $b = (1 - i\sqrt{3})a$.
2) Le plan complexe est muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$. Soit $A$ le point d'affixe $a$, et $B$ le point d'affixe $b$.
   a) Déterminer le nombre complexe $b_1$, affixe du point $B_1$, image du point $O$ par la rotation de centre $A$ et d'angle $\frac{\pi}{2}$.
   b) Montrer que $B$ est l'image de $B_1$ par l'homothétie de centre $A$ et de rapport $\sqrt{3}$.
   c) Vérifier que : $\arg\left(\dfrac{b}{b - a}\right) \equiv \frac{\pi}{6} \,[2\pi]$.
   d) Soit $C$ le point, d'affixe $c$, appartenant au cercle circonscrit du triangle $OAB$ et différent de $O$ et $A$. Déterminer un argument du nombre $\dfrac{c}{c - a}$.

**Problème 3.** *(Examen National 2015 — Session normale)*
Les parties A) et B) sont indépendantes. Le plan complexe $\mathcal{P}$ est muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$.

**Partie A :** On considère dans l'ensemble $\mathbb{C}$ l'équation suivante : $(E): z^2 - 4\left(1 + \frac{2}{3}i\right)z + \frac{5}{3} + 4i = 0$.
1) a) Vérifier que le nombre complexe $z_1 = 1 + \frac{2}{3}i$ est solution de l'équation $(E)$.
   b) Montrer que la deuxième solution de l'équation $(E)$ est : $z_2 = 3z_1$.
2) Soit $\theta$ un argument du nombre $z_1$. Écrire en fonction de $\theta$ une forme trigonométrique du nombre complexe $\frac{5}{3} + 4i$.

**Partie B :** On considère trois points $A$, $B$ et $\Omega$, deux à deux différents, d'affixes respectives $a$, $b$ et $\omega$. Soit $r$ la rotation de centre $\Omega$ et d'angle $\frac{\pi}{3}$. On pose : $P = r(A)$ et $Q = r(B)$.
1) a) Montrer que : $p = \omega + e^{i\frac{\pi}{3}}(a - \omega)$ et $q = \omega + e^{i\frac{\pi}{3}}(b - \omega)$.
   b) Montrer que : $\dfrac{1 - e^{i\frac{\pi}{3}}}{1 - e^{-i\frac{\pi}{3}}} = e^{i\frac{2\pi}{3}}$.
   c) Montrer que : $\dfrac{p - a}{q - b} = \dfrac{\omega - a}{\omega - b}e^{i\frac{2\pi}{3}}$.
2) On suppose que : $\dfrac{\omega - a}{\omega - b} = e^{i\frac{2\pi}{3}}$.
   a) Montrer que $APQB$ est un parallélogramme.
   b) Montrer que $\arg\left(\dfrac{b - a}{p - a}\right) \equiv \frac{\pi}{2} \,[2\pi]$ puis en déduire que $APQB$ est un rectangle.

**Problème 4.** *(Examen National 2012 — Session de rattrapage)*
Le plan complexe est muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$. On considère deux points $M_1$ et $M_2$ du plan complexe tels que les points $O$, $M_1$ et $M_2$ soient deux à deux distincts et non alignés. Soit $z_1$ et $z_2$ les affixes respectives des points $M_1$ et $M_2$, et soit $M$ le point d'affixe $z$ vérifiant la relation : $z = \dfrac{2z_1z_2}{z_1 + z_2}$.
1) a) Montrer que : $\dfrac{z_1 - z}{z_2 - z} \times \dfrac{z_2}{z_1} = -1$.
   b) En déduire que le point $M$ appartient au cercle circonscrit au triangle $OM_1M_2$.
2) Montrer que si $z_2 = \overline{z_1}$ alors $M$ appartient à l'axe réel.
3) On suppose dans cette question que $M_2$ est l'image de $M_1$ par la rotation $r$ de centre $O$ et d'angle $\alpha$ tel que $\alpha \in ]0; \pi[$.
   a) Calculer $z_2$ en fonction de $z_1$ et $\alpha$.
   b) En déduire que le point $M$ appartient à la médiatrice du segment $[M_1M_2]$.
4) Soit $\theta$ un réel donné de l'intervalle $]0; \pi[$. On suppose que $z_1$ et $z_2$ sont les racines de l'équation $6t^2 - (e^{i\theta} + 1)t + (e^{i\theta} - 1) = 0$.
   a) Sans calculer $z_1$ et $z_2$, vérifier que : $z = 2\dfrac{e^{i\theta} - 1}{e^{i\theta} + 1}$.
   b) Donner une écriture trigonométrique du nombre complexe $z$ en fonction de $\theta$.

**Problème 5.** *(Examen National 2016 — Session normale)*
Le plan complexe est muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$. Soit $\theta$ un réel tel que : $\theta \in \left[0; \frac{\pi}{2}\right] - \left\{\frac{\pi}{4}\right\}$.
1) On considère dans l'ensemble $\mathbb{C}$ l'équation suivante : $(E) : z^2 - \sqrt{2}e^{i\theta}z + e^{2i\theta} = 0$.
   a) Vérifier que le discriminant de l'équation $(E)$ est : $\Delta = \left(\sqrt{2}ie^{i\theta}\right)^2$.
   b) Soit $z_1$ et $z_2$ les solutions de l'équation $(E)$. Écrire $z_1$ et $z_2$ sous forme trigonométrique.
2) On considère les points $I$, $J$, $T_1$, $T_2$ et $A$ du plan d'affixes respectives $1$, $-1$, $e^{i\left(\theta + \frac{\pi}{4}\right)}$, $e^{i\left(\theta - \frac{\pi}{4}\right)}$ et $\sqrt{2}e^{i\theta}$.
   a) Montrer que les droites $(OA)$ et $(T_1T_2)$ sont perpendiculaires.
   b) Soit $K$ le milieu du segment $[T_1T_2]$. Montrer que les points $O$, $K$ et $A$ sont alignés.
   c) En déduire que la droite $(OA)$ est la médiatrice du segment $[T_1T_2]$.
3) Soit $r$ la rotation de centre $T_1$ et d'angle $\frac{\pi}{2}$.
   a) Donner l'écriture complexe de la rotation $r$.
   b) Vérifier que l'affixe du point $B$, image du point $I$ par la rotation $r$, est : $b = \sqrt{2}e^{i\theta} + i$.
   c) Montrer que $(IJ) \perp (AB)$.
   d) Déterminer l'affixe du point $C$, image du point $A$ par la translation de vecteur $-\vec{v}$.
4) Montrer que $A$ est le milieu du segment $[BC]$.

**Problème 6.** *(Examen National 2014 — Session normale)*
On considère dans $\mathbb{C}$ l'équation suivante : $(E) : z^2 - (1+i)z + 2 + 2i = 0$.
1) a) Vérifier que $(1-3i)^2$ est le discriminant de $(E)$.
   b) Déterminer $z_1$ et $z_2$, les racines de l'équation $(E)$. (On prend $z_1$ imaginaire pur.)
   c) Montrer que : $\dfrac{z_1}{z_2} = \sqrt{2}e^{i\frac{3\pi}{4}}$.
2) Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$, on considère les points : $A(z_1)$ et $B(z_2)$.
   a) Déterminer le nombre complexe $e$, affixe du point $E$, milieu du segment $[AB]$.
   b) Soit $r$ la rotation de centre $A$ et d'angle $\left(-\frac{\pi}{2}\right)$, et soit $c$ l'affixe du point $C$, image du point $E$ par la rotation $r$. Montrer que : $c = -\frac{3}{2} + \frac{3}{2}i$.
   c) Soit $D$ le point d'affixe $d = 1 + \frac{3}{2}i$. Montrer que le nombre $\left(\dfrac{z_2-d}{c-d}\right) \times \left(\dfrac{c-z_1}{z_2-z_1}\right)$ est réel puis interpréter géométriquement le résultat obtenu.

**Problème 7.** *(Examen National 2015 — Session de rattrapage)*
Le plan complexe est muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$. On considère l'application $r$ qui, à chaque point $M(z)$ du plan, associe le point $M_1(z_1)$ tel que : $z_1 = \dfrac{1+i\sqrt{3}}{2}z + \dfrac{\sqrt{3}+i}{2}$, et l'application $h$ qui, à chaque point $M(z)$ du plan, associe le point $M_2(z_2)$ tel que : $z_2 = -2z + 3i$. Et on pose : $F = h \circ r$.
1) Déterminer la nature de chacune des applications $r$ et $h$ et déterminer les éléments caractéristiques de chacune d'elles.
2) On considère les points $\Omega(i)$ et $A(a)$ où $a$ est un nombre complexe différent de $i$. On pose : $B = F(A)$ ; $C = F(B)$ ; $D = F(C)$.
   a) Montrer que si $M'(z')$ est l'image du point $M(z)$ par l'application $F$ alors : $z' - i = 2e^{i\frac{4\pi}{3}}(z - i)$.
   b) Vérifier que $\Omega$ est l'unique point invariant par l'application $F$ (c'est-à-dire : $F(\Omega) = \Omega$).
3) a) Déterminer en fonction du nombre $a$, les nombres complexes $b$, $c$ et $d$, affixes respectives des points $B$, $C$ et $D$.
   b) Montrer que les points $\Omega$, $A$ et $D$ sont alignés.
   c) Montrer que $\Omega$ est le barycentre du système pondéré $\{(B; 4); (C; 2); (D; 1)\}$.
   d) Déterminer l'ensemble des points $A(a)$ pour que le point $D$ appartienne à l'axe réel.

**Problème 8.** *(Examen National 2008 — Session de rattrapage)*
Les parties A) et B) sont indépendantes. Le plan complexe $\mathcal{P}$ est muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$.

**Partie A :** On considère dans l'ensemble $\mathbb{C}$ l'équation suivante : $(E) : iz^2 + (2-i)az - (1+i)a^2 = 0$, où $a$ est un nombre complexe non nul donné.
1) Déterminer $z_1$ et $z_2$, les racines de l'équation $(E)$.
2) a) Vérifier que : $z_1 \cdot z_2 = a^2(i-1)$.
   b) Montrer que : $\arg a \equiv \dfrac{-3\pi}{8} \left[\dfrac{\pi}{2}\right] \Leftrightarrow z_1z_2 \in \mathbb{R}$.

**Partie B :** Soit $c \in \mathbb{R}^*$ et $z \in \mathbb{C}^*$. On considère les points $A$, $B$, $C$, $D$ et $M$ d'affixes respectives $1$, $1+i$, $c$, $ic$ et $z$.
1) a) Montrer que les points $A$, $M$ et $D$ sont alignés si, et seulement si : $(ic+1)z + (ic-1)\overline{z} = 2ic$.
   b) Montrer que : $(AD) \perp (OM) \Leftrightarrow (ic+1)z - (ic-1)\overline{z} = 0$.
2) Soit $H$ la projection orthogonale du point $O$ sur la droite $(AD)$, et soit $h$ son affixe.
   a) Montrer que : $h - (1 + i) = \dfrac{i}{c}(h - c)$.
   b) En déduire que : $(CH) \perp (BH)$.

**Problème 9.** *(Examen National 2012 — Session normale)*
**Partie A :** Soit $a$ un nombre complexe différent de 1. On considère dans $\mathbb{C}$ l'équation $(E)$ d'inconnue $z$ : $(E) : 2z^2 - 2(a-1)z + (a-1)^2 = 0$.
1) Montrer que : $z_1 = \dfrac{(a-1)}{2}(1+i)$ et $z_2 = \dfrac{(a-1)}{2}(1-i)$ sont les solutions de l'équation $(E)$.
2) On prend : $a = e^{i\theta}$ avec $0 < \theta < \pi$.
   a) Montrer que : $a - 1 = 2\sin\left(\frac{\theta}{2}\right)e^{i\left(\frac{\theta + \pi}{2}\right)}$.
   b) En déduire une forme trigonométrique de chacune des solutions $z_1$ et $z_2$.

**Partie B :** Le plan complexe est muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$. On suppose que $\operatorname{Re}(a) < 0$ et on considère les points $A(a)$, $B(-i)$, $C(i)$ et $B'(1)$.
1) On note respectivement $J$ et $K$, les milieux des segments $[AC]$ et $[AB]$. Déterminer les affixes des points $J$ et $K$.
2) Soit $r_1$ la rotation de centre $J$ et d'angle $\frac{\pi}{2}$, et $r_2$ la rotation de centre $K$ et d'angle $\frac{\pi}{2}$. On pose $C' = r_1(C)$ et $A' = r_2(A)$, et on désigne par $c'$ l'affixe de $C'$ et $a'$ l'affixe de $A'$. Montrer que : $a' = z_1$ et $c' = z_2$.
3) Calculer $\dfrac{a' - c'}{a - 1}$ puis en déduire que la droite $(AB')$ est une hauteur du triangle $A'B'C'$.

**Problème 10.** *(Examen National 2013 — Session de rattrapage)*
Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$, on considère l'application de $\mathbb{C}$ dans $\mathbb{C}$ telle que : $f(z) = \dfrac{1}{6}\left[(1+i\sqrt{3})z + 2\overline{z}\right]$ ($\overline{z}$ étant le conjugué du nombre complexe $z$).
I) Résoudre dans $\mathbb{C}$ l'équation : $f(z) = 0$.
II) On pose : $z_0 = 1$ et $z_{n+1} = f(z_n)$ pour tout $n \in \mathbb{N}$. On désigne par $u_n$, le module du nombre $z_n$.
1) a) Montrer que : $(\forall n \in \mathbb{N})\; 0 \le u_{n+1} \le \frac{2}{3}u_n$.
   b) En déduire que la suite $(u_n)$ est convergente et calculer sa limite.
2) Pour tout $k \in \mathbb{N}$, on note $M_k$ l'image du nombre $z_k$, et pour tout $n \in \mathbb{N}$, on pose : $S_n = \sum_{k=0}^{n} OM_k = OM_0 + OM_1 + \dots + OM_n$.
   a) Montrer que : $(\forall n \in \mathbb{N})\; S_n \le 3$.
   b) Montrer que la suite $(S_n)$ est convergente. (Le calcul de la limite de $(S_n)$ n'est pas demandé.)
III) On pose : $z = re^{i\theta}$ avec $\theta \in ]-\pi; \pi]$ et $r \in \mathbb{R}^+$.
1) Montrer que : $f(z) = \dfrac{2}{3}r\cos\left(\theta + \frac{\pi}{6}\right)e^{i\frac{\pi}{6}}$.
2) Montrer que les points $M_1$, $M_2$, $\dots$, $M_n$ sont alignés ($n$ étant un entier naturel non nul).

**Problème 11.** *(Examen National 2006 — Session de rattrapage)*
On considère dans $\mathbb{C}$ l'équation $(E)$ suivante : $(E) : z^2 - (1 + \sqrt{3})(1 + i)z + 4i = 0$.
1) a) Vérifier que le discriminant de l'équation $(E)$ est : $\Delta = \left[(\sqrt{3} - 1)(1 - i)\right]^2$.
   b) Écrire sous forme trigonométrique, les solutions de l'équation $(E)$.
2) Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$, on considère les points $A$ et $B$ d'affixes respectives $a = 1 + i\sqrt{3}$ et $b = \sqrt{3} + i$.
   a) Montrer que $\mathscr{D}$, ensemble des points $M(z)$ tels que $z = \frac{1}{2}a\overline{z}$, est une droite passant par $B$.
   b) Soit $M$ et $M'$ deux points du plan d'affixes respectives $z$ et $z'$ tels que : $z' = a\overline{z} + b$ et $z \neq b$. Montrer que : $\dfrac{b^2}{(z' - b)(z - b)} = \dfrac{2}{|z - b|^2}$.
   c) En déduire que la droite $\mathscr{D}$ est une bissectrice de l'angle $\left(\widehat{\overrightarrow{BM}, \overrightarrow{BM'}}\right)$.

**Problème 12.** *(Examen National 2016 — Session de rattrapage)*
**Partie A :**
1) Résoudre dans $\mathbb{C}$ l'équation : $z^2 + i = 0$. (On note $a$ la solution telle que : $\operatorname{Re}(a) > 0$.)
2) a) Déterminer le module et un argument de $1 + a$.
   b) En déduire que : $\cos\frac{\pi}{8} = \frac{\sqrt{2 + \sqrt{2}}}{2}$.
   c) Vérifier que : $(1 + a)(1 - a) = 1 + i$ puis en déduire une forme trigonométrique de $1 - a$.

**Partie B :** Dans le plan complexe muni d'un repère orthonormé direct $(O; \vec{u}, \vec{v})$, on considère les points $A$, $B$, $M$ et $M'$ d'affixes respectives $a$, $-a$, $z$ et $z'$. On suppose de plus que : $zz' + i = 0$.
1) Soit $N$ le point d'affixe $\overline{z}$. Montrer que : $(ON) \perp (OM')$.
2) a) Montrer que : $z' - a = i\dfrac{z - a}{az}$.
   b) Montrer que si $z \neq -a$ alors : $z' \neq -a$ et $\dfrac{z' - a}{z' + a} = -\dfrac{z - a}{z + a}$.
3) On suppose que les points $A$, $B$ et $M$ sont non alignés. Montrer que le point $M'$ appartient au cercle circonscrit du triangle $ABM$.

**Problème 13.** *(Examen National 2014 — Session de rattrapage)*
On considère dans $\mathbb{C}$ l'équation suivante : $(E) : (1 + iz)^3(1 - i\tan\alpha) = (1 - iz)^3(1 + i\tan\alpha)$, où $\alpha$ est un réel de l'intervalle $I = \left]-\frac{\pi}{2}; \frac{\pi}{2}\right[$.
1) Soit $z_0$ une solution de $(E)$. Montrer que : $|1 + iz_0| = |1 - iz_0|$ et en déduire que $z_0$ est réel.
2) a) Donner la forme trigonométrique du nombre complexe : $\dfrac{1 + i\tan\alpha}{1 - i\tan\alpha}$.
   b) Soit $z$ un nombre complexe. On pose $z = \tan\varphi$ avec $\varphi$ un réel de l'intervalle $I$. Montrer que l'équation $(E)$ est équivalente à une équation $(E')$ d'inconnue $\varphi$ puis la résoudre.
   c) Résoudre l'équation $(E)$.

*(Extrait Bac 1998 — Session normale)*

## Résumé

- **Forme algébrique.** Tout nombre complexe $z$ s'écrit de manière unique $z = x + iy$, avec $x = \operatorname{Re}(z)$ et $y = \operatorname{Im}(z)$. On a $i^2 = -1$ et $\mathbb{C} = \{x + iy \;/\; (x;y) \in \mathbb{R}^2\}$.
- **Conjugué.** $\overline{z} = x - iy$ ; $\overline{z + z'} = \overline{z} + \overline{z'}$, $\overline{zz'} = \overline{z}\,\overline{z'}$, $\overline{\left(\frac{z'}{z}\right)} = \frac{\overline{z'}}{\overline{z}}$ ; $z \in \mathbb{R} \Leftrightarrow \overline{z} = z$, $z \in i\mathbb{R} \Leftrightarrow \overline{z} = -z$.
- **Module.** $|z| = \sqrt{x^2 + y^2} = \sqrt{z\overline{z}}$ ; $|zz'| = |z||z'|$, $\left|\frac{z'}{z}\right| = \frac{|z'|}{|z|}$ ; $AB = |z_B - z_A|$ ; $|z + z'| \le |z| + |z'|$ (inégalité triangulaire).
- **Argument et forme trigonométrique.** $z = |z|(\cos\theta + i\sin\theta) = [|z|; \theta]$, où $\theta \equiv \arg z \,[2\pi]$ ; $\arg(zz') \equiv \arg z + \arg z' \,[2\pi]$ ; $\arg\left(\frac{z'}{z}\right) \equiv \arg z' - \arg z \,[2\pi]$.
- **Notation exponentielle.** $e^{i\theta} = \cos\theta + i\sin\theta$ ; $z = |z|e^{i\theta}$ ; formule de Moivre $(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$ ; formules d'Euler $\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}$, $\sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$.
- **Racines $n^{\text{èmes}}$ de l'unité.** $\mathbb{U}_n = \left\{e^{\frac{2ik\pi}{n}} \;/\; k \in \{0; 1; \dots; n-1\}\right\}$, $\operatorname{card}\mathbb{U}_n = n$ ; la somme des racines est nulle.
- **Équation du second degré.** $az^2 + bz + c = 0$, $\Delta = b^2 - 4ac$ ; si $\Delta \neq 0$, $z_{1,2} = \frac{-b \pm \delta}{2a}$ où $\delta^2 = \Delta$ ; $z_1 + z_2 = -\frac{b}{a}$ et $z_1z_2 = \frac{c}{a}$.
- **Transformations usuelles.** Translation : $z' = z + a$ ; homothétie de centre $\Omega(\omega)$ et de rapport $\lambda$ : $z' = \omega + \lambda(z - \omega)$ ; rotation de centre $\Omega(\omega)$ et d'angle $\theta$ : $z' = \omega + e^{i\theta}(z - \omega)$.

## Auto-évaluation

- Reconnaître l'écriture algébrique, trigonométrique et exponentielle d'un nombre complexe et savoir passer de l'une à l'autre.
- Calculer module et argument d'un produit, d'un quotient et d'une puissance.
- Résoudre une équation du second degré à coefficients complexes et une équation de la forme $z^n = a$.
- Déterminer un ensemble de points défini par une condition portant sur $|z - a|$, $\arg(z - a)$ ou $\dfrac{z - a}{z - b}$.
- Reconnaître la nature d'une transformation d'écriture complexe $z' = az + b$ et déterminer ses éléments caractéristiques.
- S'évaluer à l'aide des « Problèmes » de la rubrique *Se préparer aux examens* (Problèmes 1 à 13).
