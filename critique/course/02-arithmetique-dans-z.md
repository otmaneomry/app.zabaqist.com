# Chapitre 2 : Arithmétique dans $\mathbb{Z}$

## Histoire

Dans l'école pythagoricienne (Pythagore de Samos), à la deuxième moitié du VIème siècle avant J.-C., l'arithmétique était, avec la géométrie, l'astronomie et la musique, une des quatre sciences quantitatives ou mathématiques.

L'arithmétique modulaire est un ensemble de méthodes permettant la résolution de problèmes sur les nombres entiers. Ces méthodes dérivent de l'étude du reste obtenu par une division euclidienne.

En mathématiques appliquées, cette expression est d'un usage fréquent pour décrire les bases mathématiques de différents domaines de la théorie de l'information : cryptologie, théorie des codes et informatique.

De nombreux outils et algorithmes entrent dans ce champ d'étude. On y trouve les tests de primalités, la décomposition en produit de facteurs premiers, l'étude des polynômes...etc.

Source : https://fr.wikipedia.org

> **Pierre de Fermat** (1601–1665)
> **Carl Friedrich Gauss** (1777–1855)

## Objectifs

- Utiliser la décomposition en facteurs premiers pour déterminer le plus grand commun diviseur et le plus petit commun multiple de deux entiers ou plus.
- Utiliser les congruences modulo $n$ dans des situations arithmétiques.
- Mettre en œuvre les théorèmes de Bézout, de Gauss et de Fermat.
- Appliquer l'algorithme d'Euclide au calcul d'un PGCD et à la détermination de coefficients de Bézout.
- Résoudre dans $\mathbb{Z}^2$ une équation diophantienne de la forme $ax+by=c$.
- Écrire, comparer, additionner et multiplier des entiers dans différents systèmes de numération.

## Plan du chapitre

- Activités préparatoires
- **Cours** : PGCD et PPCM · nombres premiers · congruences et ensemble $\mathbb{Z}/n\mathbb{Z}$ · systèmes de numération.
- **Méthodes** : PGCD et PPCM · théorèmes de Bézout et de Gauss · congruences et équations diophantiennes · chiffrement de Hill.
- **Exercices et problèmes** : exercices d'application · exercices de perfectionnement · problèmes de synthèse.

## Prérequis

- Divisibilité et division euclidienne dans $\mathbb{Z}$.
- Calcul avec les puissances et décomposition d'un entier en facteurs premiers.
- Identités algébriques, suites numériques et raisonnement par récurrence.
- Manipulation des ensembles et résolution d'équations linéaires.

## Activités préparatoires

### Rappels
A) Divisibilité dans $\mathbb{Z}$ :

1. Soit $a, b, \alpha$ et $\beta$ des entiers relatifs tels que : $a = b\alpha + \beta$

Montrer que tout diviseur commun de $a$ et $b$ est un diviseur du nombre $\beta$.

2. Soit $x$ et $y$ deux entiers naturels.

a) Montrer que : $\bigl(7 \mid 4x+3y \text{ et } 7 \mid 7x+5y\bigr) \Rightarrow \bigl(7 \mid x \text{ et } 7 \mid y\bigr)$.
b) Cas général: soit $(u; v; \alpha; \beta) \in \mathbb{Z}^4$ et $d$ un diviseur commun des entiers $ux + vy$ et $\alpha x + \beta y$.

Montrer que $\text{si}|u\beta - v\alpha| = 1$ alors $d$ est un diviseur commun de $x$ et $y$.

B) Division euclidienne :

1. Déterminer les entiers naturels $ m $ sachant que les restes de la division euclidienne des nombres 21685 et 33509 par $ m $ sont respectivement 37 et 53.
2. Soit $ a $ et $ b $ deux entiers naturels vérifiant :

Le reste de la division euclidienne de $a$ par 11 est 2.
Le reste de la division euclidienne de $b$ par 11 est 7.

Déterminer le reste de la division euclidienne de $a + b$ et $a - b$ par 11 puis en déduire le reste de la division euclidienne de $a^2 - b^2$ par 11.

3. Soit $x$ un entier naturel tel que : $100^{100} = 13x + 35$

Déterminer, en fonction de $x$, le quotient et le reste de la division euclidienne du nombre $100^{100}$ par 13.

4. Soit $n$ un entier naturel supérieur ou égal à 2.

Déterminer le reste de la division euclidienne de $2^n - 1$ par $2^{n-1}$.

C) Congruence modulo :

1. Montrer que pour tout $ n \in \mathbb{N} : 9 \mid 7^{3n} - 1 $.
2. Déterminer le reste de la division euclidienne du nombre $(2792)^{2017}$ par 5.

3. Montrer que :

a) $(\forall n\in \mathbb{N})3^{3n}\equiv 1[13]$
b) Pour tout $ n \in \mathbb{N} $, le nombre $ 3^{6n + 2} + 3^{3n + 1} + 1 $ est divisible par 13.

D) Plus grand commun diviseur - Plus petit commun multiple - Algorithme d'Euclide :

1. Déterminer tous les entiers naturels $ x $ tels que: $ \begin{cases} x \wedge 144 = 18 \\ x < 144 \end{cases} $.
2. Soit $ n \in \mathbb{N}^* $. Déterminer le plus grand commun diviseur des nombres $ 7^{n+2} - 7^n $ et $ 5^{n+2} - 5^n $.
3. Déterminer le plus petit entier naturel $ p $ tel que:

$p \ge 3$ et le reste de la division euclidienne de $p$ par 12 et par 18 est le même et égal à 3.

4. En utilisant l'algorithme d'Euclide, déterminer $138807 \wedge 52089$ puis simplifier le nombre : $\frac{138807}{52089}$

E) Nombres premiers - Théorème fondamental de l'arithmétique :

1. Montrer que 2017 est un nombre premier.
2. Soit $ a, b $ et $ c $ des nombres premiers positifs tels que: $ a^3 b^2 c^2 + a^2 b^2 c + a = 1982 $.

a) Décomposer le nombre 1982 en produit de facteurs premiers.
b) En déduire que $ a = 2 $ puis déterminer $ b $ et $ c $.

3. Après avoir décomposé le nombre 17! en produit de facteurs premiers, quel est l'exposant du nombre 2 dans cette décomposition ?

### Nombres premiers entre eux
1. Montrer que: $ 1223 \wedge 717 = 1 $.
2. Montrer que: $(\forall n \in \mathbb{N}) (n^2 + 5n + 7) \wedge (n + 2) = 1$.
3. Montrer que: $(\forall n \in \mathbb{N}) (n^2 + 1) \wedge (n^2 + 2n + 2) \in \{1; 5\}$.
4. a) Montrer que: $(\forall n \in \mathbb{Z}) 3(14n + 3) - 2(21n + 4) = 1$.
b) En déduire que: $(\forall n \in \mathbb{Z}) (14n + 3) \wedge (21n + 4) = 1$.

Si $(a; b) \in \mathbb{Z}^2$ tel que $a \wedge b = 1$, on dit que $a$ et $b$ sont premiers entre eux

### Théorème de Bézout
A) Théorème de Bezout :

On considère les nombres : $a = 959$ et $b = 279$ .

1. Vérifier que l'algorithme d'Euclide donne les divisions suivantes :

$$\left\{ \begin{array}{l} a = b q _ { 1 } + r _ { 1 } \quad \text { avec } 0 < r _ { 1 } < b \\ b = r _ { 1 } q _ { 2 } + r _ { 2 } \quad \text { avec } 0 < r _ { 2 } < r _ { 1 } \\ r _ { 1 } = r _ { 2 } q _ { 3 } + r _ { 3 } \quad \text { avec } 0 < r _ { 3 } < r _ { 2 } \\ r _ { 2 } = r _ { 3 } q _ { 4 } + \delta \quad \text { avec } 0 < \delta < r _ { 3 } \\ r _ { 3 } = \delta q _ { 5 } \quad \text { avec } \delta = a \wedge b \end{array} \right.$$

On rappelle que $a \wedge b$ est le dernier reste non nul dans la méthode des divisions successives de $a$ par $b$

où $r_1, r_2, r_3$ et $\delta$ sont les restes successifs à déterminer.

2. Vérifier que: $ r_1 = a - 3b $ et $ r_2 = -2a + 7b $ et $ r_3 = 7a - 24b $ et $ \delta = -16a + 55b $.
3. a) Montrer qu'il existe un couple $(u; v)$ de $\mathbb{Z}^2$ tel que: $959u + 279v = 1$.
b) Déduire de cette relation que $959 \wedge 279 = 1$.
4. En suivant la démarche précédente, déterminer deux entiers relatifs $\alpha$ et $\beta$ tels que: $2160\alpha + 168\beta = 24$
5. Soit $ n $ un entier naturel.
a) Montrer que: $\left(n^{4} + 3n^{2} + 1\right)\wedge \left(n^{3} + 2n\right) = 1$
b) Déterminer un couple $(u, v)$ de $\mathbb{Z}^2$ tel que: $\left(n^4 + 3n^2 + 1\right)u + \left(n^3 + 2n\right)v = 1$.

Soit $a$ et $b$ deux entiers relatifs non nuls. On a : $a \wedge b = 1 \Leftrightarrow [(\exists(u; v) \in \mathbb{Z}^2); au + bv = 1]$ Ce résultat porte le nom de « Théorème de Bezout ».

B) Applications :

1ère application : Soit $a$ et $b$ deux entiers relatifs non nuls, et soit $\delta = a \wedge b$. On pose : $a = \delta\alpha$ et $b = \delta\beta$.

a) Vérifier que : $\alpha \wedge \beta = 1$.

b) En utilisant le théorème de Bezout, montrer que : $(\forall x \in \mathbb{N}^*)$ $(ax) \wedge (bx) = (a \wedge b)x$

2ème application : Soit $a, b$ et $c$ des entiers relatifs non nuls tels que $a \wedge b = 1$.

a) En utilisant le théorème de Bezout, montrer que : $(\forall y \in \mathbb{Z}^*)$ $a \wedge (by) = a \wedge y$

b) En déduire que : $(a \wedge b = 1 \text{ et } a \wedge c = 1) \Rightarrow a \wedge (bc) = 1$

3ème application : Soit $n$ un entier naturel non nul.

a) Montrer que les nombres $n$ et $n + 1$ sont premiers entre eux.

b) Montrer que les nombres $n + 2$ et $2n^2 + 4n + 1$ sont premiers entre eux.

### Théorème de Gauss
Soit $a, b$ et $c$ des entiers naturels.

1. A-t-on l'implication suivante: $(a \mid bc$ et $a$ ne divise pas $b) \Rightarrow a \mid c$? Justifier.
2. On suppose dans cette question que: $ a \wedge b = 1 $ et $ a \mid bc $.

En utilisant le théorème de Bezout, montrer que $a \mid c$.

On a alors montré le résultat suivant :

Pour tous $a, b$ et $c$ de $\mathbb{Z}^*$, on a : $(a \mid bc \text{ et } a \wedge b = 1) \Rightarrow a \mid c$

Ce résultat porte le nom de « Théorème de Gauss ».

3. Dans le plan muni d'un repère orthonormé $(O; \bar{i}, \bar{j})$, on considère le point $A(a; b)$ où $a$ et $b$ sont deux entiers relatifs premiers entre eux.

Montrer qu'il n'existe aucun point $M$ du segment $[OA]$ différent de $O$ et $A$ et dont les coordonnées sont des entiers relatifs.

### Équations diophantiennes
A) On considère dans $\mathbb{Z}^2$ l'équation suivante : $(E) : 959x + 279y = 1$

1. Vérifier que le couple $(-16;55)$ est une solution particulière de l'équation $(E)$.
2. Soit $(x,y)$ une solution de l'équation $(E)$.

a) Montrer que: $ 959(x + 16) + 279(y - 55) = 0 $.
b) En utilisant le théorème de Gauss, montrer que:

$$(\exists k \in \mathbb{Z}) : \begin{cases} x = -16 + 279k \\ y = 55 - 959k \end{cases}$$

c) Déterminer les solutions de l'équation $(E)$.

3. Application : Dans le plan muni d'un repère orthonormé $(O; \vec{i}, \vec{j})$, on considère la droite $(\Delta)$ d'équation $959x + 279y - 1 = 0$.

Montrer que la droite $(\Delta)$ passe par une infinité de points dont les coordonnées sont des entiers relatifs.

B) On considère dans $\mathbb{Z}^2$ l'équation suivante : $(E') : 700x + 429y = 5$

1. Déterminer tous les couples $(\alpha ;\beta)$ de $\mathbb{Z}^2$ tels que: $700\alpha +429\beta = 1$
2. Résoudre dans $\mathbb{Z}^2$ l'équation $(E^{\prime})$

C) Soit $a, b$ et $c$ des entiers relatifs non nuls.

1. Montrer que l'équation $ ax + by = c $ admet des solutions dans $ \mathbb{Z}^2 $ si, et seulement si, $ a \wedge b $ divise $ c $.
2. Est-ce que l'équation $ 26x + 65y = 20 $ admet des solutions dans $ \mathbb{Z}^2 $? Justifier.

On vient à alors de montrer le résultat suivant :

Toute équation dans $\mathbb{Z}^2$ de la forme $ax + by = c$ avec $(a; b; c) \in \mathbb{Z}^3$ est appelée une équation diophantienne. Cette équation admet des solutions dans $\mathbb{Z}^2$ si, et seulement si : $a \wedge b \mid c$.

### Nombres premiers
A) Soit $a$ et $b$ deux entiers relatifs, et $p$ un nombre premier positif.

1. Montrer que: $(\forall x \in \mathbb{Z})$ ($p \mid x$ ou $p \wedge x = 1$).
2. En déduire que: $ p \mid ab \Rightarrow (p \mid a \text{ ou } p \mid b) $.
3. Montrer que: $(\forall n \in \mathbb{N}^*)$ ($p \mid a^n \Rightarrow p \mid a$).
B) Pour tout $n\in \mathbb{N}^*$ , on pose: $a_{n} = (4n)! - 1$

1. Montrer que le reste de la division euclidienne de $a_{n}$ par 4 est 3.
2. Soit $ p $ un diviseur premier de $ a_{n} $. Montrer que $ p > n $.
3. Montrer qu'il existe une infinité de nombres premiers qui s'écrivent sous la forme $ 4k + 3 $ avec $ k \in \mathbb{N} $.

### Petit théorème de Fermat
A) Soit $p$ un nombre premier positif.

1. Soit $k$ un entier naturel tel que : $1 \le k \le p$.

a) Montrer que: $pC_{p - 1}^{k - 1} = kC_p^k$
b) En utilisant le théorème de Gauss, montrer que: $ p \mid C_p^k $.

On rappelle que :

$$C_p^k = \frac{p!}{k!(p-k)!} = \frac{p(p-1)\dots(p-k+1)}{k!}$$

2. Montrer que: $(\forall n \in \mathbb{N}) (n + 1)^p \equiv n^p + 1[p]$.
3. En déduire que: $(\forall n \in \mathbb{N}) n^p \equiv n[p]$.
4. Soit $ a \in \mathbb{Z} $. Montrer que si $ p $ ne divise pas $ a $ alors: $ a^{p-1} \equiv 1[p] $.

On a ainsi montré le résultat suivant dit « Petit théorème de Fermat »

Soit $p$ un nombre premier et $n$ un entier naturel.

On a $n^p \equiv n[p]$ et, si $p$ ne divise pas $n$, $n^{p-1} \equiv 1[p]$.

B) Applications :

1. Déterminer le reste de la division euclidienne du nombre 33782$^{240}$ par 17.
2. Soit $ p $ un nombre premier tel que: $ p \geq 19 $.

Montrer que : $16320 \mid p^{16} - 1$.

3. Soit $p$ et $q$ deux nombres premiers distincts.

a) Montrer que: $p^{q - 1} + q^{p - 1}\equiv 1[pq]$
b) Montrer que si $ p $ et $ q $ ne divisent pas un entier relatif $ a $ alors: $ a^{(p - 1)(q - 1)} \equiv 1[pq] $.

### Systèmes de numération
Le système de numération usuel utilise les numéros 0, 1, 2, 3, 4, 5, 6, 7, 8 et 9 et à l'aide desquels on peut représenter n'importe quel entier naturel selon la convention suivante : (à titre d'exemple)

Le nombre 139557 a été obtenu après la décomposition :

$$139557 = 10^5 + 3 \times 10^4 + 9 \times 10^3 + 5 \times 10^2 + 5 \times 10 + 7$$

Ce système familier n'est rien d'autre que le système de numération décimal.

Écriture d'un nombre dans le système de numération à base 8 :

Soit $N$ le nombre qui s'écrit $N = 3386$ dans le système de numération décimal :

Écrivons $N$ sous la forme $N = 8^n u_n + 8^{n-1} u_{n-1} + ... + 8u_1 + u_0$ où $u_0, u_1, ..., u_n$ sont des chiffres de 0 à 7 :

On a : $3386 = 8 \times 423 + 2 = 8(8 \times 52 + 7) + 2 = 8^2 \times 52 + 8 \times 7 + 2 = 8^2 \times (8 \times 6 + 4) + 8 \times 7 + 2$

ce qui donne : $3386 = 8^3 \times 6 + 8^2 \times 4 + 8 \times 7 + 2$. On écrit alors : $3386 = \overline{6472}_{(8)}$

> **Applications.**
1. Écrire dans le système à base 2 (appelé système binaire) les nombres suivantes: B; 24; 35; 76
2. On considère le nombre $A = \overline{21837}_{(9)}$ . Écrire le nombre $A$ dans le système a base 5.
3. Sachant que $\overline{58}_{(a)} + \overline{72}_{(a)} = \overline{141}_{(a)}$, déterminer la base $a$ puis calculer $\overline{58}_{(a)} \times \overline{72}_{(a)}$.
4. Soit $ B = 435 $ dans le système décimal.

Déterminer la base $b$ d'un système dans lequel le nombre $B$ s'écrit : $B = \overline{1161}_{(b)}$

## Cours
### 1. Plus grand commun diviseur — plus petit commun multiple
#### 1.1. RAPPELS ET COMPLÉMENTS

> **Définition 1.**
Soit a et b deux entiers relatifs non nuls.

- Le plus grand commun diviseur de $ a $ et $ b $, noté $ a \wedge b $ ou $ PGCD(a, b) $, est le plus grand des diviseurs positifs commun à $ a $ et $ b $.
- Le plus petit commun multiple de $ a $ et $ b $, noté $ a \vee b $ ou $ PPCM(a, b) $, est le plus petit des multiples strictement positifs commun à $ a $ et $ b $.
- On convient que: $ a \wedge 0 = |a| $ et $ a \vee 0 = 0 $

> **Exemples.**
$$\left\{ \begin{array}{l} 5 \wedge 15 = 5 \\ 5 \vee 15 = 15 \end{array} \right. ; \quad \left\{ \begin{array}{l} (-7) \wedge 16 = 1 \\ (-7) \vee 16 = 112 \end{array} \right. ; \quad \left\{ \begin{array}{l} 6 \wedge 9 = 3 \\ 6 \vee 9 = 18 \end{array} \right. ; \quad \left\{ \begin{array}{l} 27 \wedge 41 = 1 \\ 27 \vee 41 = 1107 \end{array} \right. ; \quad \left\{ \begin{array}{l} (-12) \wedge (-30) = 6 \\ (-12) \vee (-30) = 60 \end{array} \right.$$

> **Remarques.**
Soit a et b deux entiers relatifs non nuls. Si d = a ∧ b et m = a ∨ b alors :

- $d \geq 1$ et $d \mid a$ et $d \mid b$
- $ m \geq 1 $ et $ a \mid m $ et $ b \mid m $
Pour tout $c\in \mathbb{N}^*$ .. $\left[(c \mid a\text{et} c \mid b)\Rightarrow c \mid d\right]$ et $\left[(a \mid c\text{et} b \mid c)\Rightarrow m \mid c\right]$
Pour tout $c\in \mathbb{N}^*$ .. $\left[(c \mid a\text{et} c \mid b)\Rightarrow c\leq d\right]$ et $\left[(a \mid c\text{et} b \mid c)\Rightarrow m\leq c\right]$
- $ |a| \wedge |b| = d $ et $ a \wedge 1 = 1 $ et $ a \wedge a = a \wedge 0 = |a| $.
- $ |a| \vee |b| = m $ et $ a \vee 1 = |a| $ et $ a \vee a = |a| $.

> **Proposition 1.**
Soit a, b et c des entiers relatifs non nuls et n un entier naturel. Alors :

1) a ∧ b = b ∧ a ;

2) a ∨ b = b ∨ a ;

3) a \mid b ⇔ a ∧ b = |a| ⇔ a ∨ b = |b|

4) (a ∧ b) ∧ c = a ∧ (b ∧ c) ;

5) (ca) ∧ (cb) = |c| (a ∧ b) ;

6) $$\left\{ \begin{array}{l} c \mid a \\ c \mid b \end{array} \right. \Rightarrow \left( \frac{a}{c} \right) \wedge \left( \frac{b}{c} \right) = \frac{a \wedge b}{|c|}$$

7) (a ∨ b) ∨ c = a ∨ (b ∨ c) ;

8) (ca) ∨ (cb) = |c| (a ∨ b) ;

9) $$\left\{ \begin{array}{l} c \mid a \\ c \mid b \end{array} \right. \Rightarrow \left( \frac{a}{c} \right) \vee \left( \frac{b}{c} \right) = \frac{a \vee b}{|c|}$$

10) a'' ∧ b'' = (a ∧ b)'' ;

11) a'' ∨ b'' = (a ∨ b)'' ;

12) (a ∧ b) . (a ∨ b) = |ab|

> **Exemples.**
1) En utilisant les résultats de la proposition 1, on obtient :

- $7 \wedge 21 = 7$ et $7 \vee 21 = 21$ car $7 \mid 21$.
$\cdot (32\times 12)\wedge (32\times 75) = 32\times (12\wedge 75) = 32\times 3\times (4\wedge 25) = 32\times 3\times 1 = 96.$
$\cdot (-324)\vee 288 = 36\times ((-9)\vee 8) = 36\times 72 = 2592$

2) Montrons que si $(a; b; c; \alpha) \in \mathbb{Z}^4$ tel que $a = bc + \alpha$ alors : $a \wedge b = b \wedge \alpha$.

Posons $d_1 = a \wedge b$ et $d_2 = b \wedge \alpha$.

• On a $d_1 \mid a$ et $d_1 \mid b$, donc, $d_1 \mid a - bc$, c'est-à-dire $d_1 \mid \alpha$.

Ainsi, $d_1 \mid b$ et $d_1 \mid \alpha$, donc d'après la remarque précédente, $d_1 \mid d_2$.

• Inversement, $d_2 \mid b$ et $d_2 \mid \alpha$, donc, $d_2 \mid bc + \alpha$, c'est-à-dire $d_1 \mid a$. Ainsi, $d_2 \mid a$ et $d_2 \mid b$, donc, $d_2 \mid d_1$.

Puisque $d_1 \mid d_2$ et $d_1 \mid d_2$ alors $|d_1| = |d_2|$, et donc $d_1 = d_2$ puisque $d_1$ et $d_2$ sont des entiers naturels.

3) Pour tout $n \in \mathbb{N}^*$, on pose : $a_n = n^2 + 5n$, $b_n = (4n + 1)(n + 5)$, $d_n = a_n \wedge b_n$, $m_n = a_n \vee b_n$

Calculons $d_n$ et $m_n$ en fonction de $n$.

• On a pour tout $n \in \mathbb{N}^*$ : $a_n \wedge b_n = [n(n + 5)] \wedge [(4n + 1)(n + 5)] = (n + 5)[n \wedge (4n + 1)]$

Si $d$ est un diviseur commun de $n$ et $4n + 1$, alors $d \mid (4n + 1) - 4n$, donc $d \mid 1$, et alors $d = 1$. Il s'ensuit donc que $n \wedge (4n + 1) = 1$. Ainsi : $d_n = n + 5$.

• Pour déterminer $m_n$ en fonction de $n$, on peut suivre une des deux méthodes suivantes :

▪ 1ère méthode :

On a pour tout $n \in \mathbb{N}^*$ : $a_n \vee b_n = [n(n + 5)] \vee [(4n + 1)(n + 5)] = (n + 5)[n \vee (4n + 1)]$

Comme $n \wedge (4n + 1) = 1$ alors $n \vee (4n + 1) = n(4n + 1)$. Ainsi : $m_n = n(n + 5)(4n + 1)$

▪ 2ème méthode :

On a pour tout $n \in \mathbb{N}^*$, $(a_n \vee b_n) \times (a_n \wedge b_n) = a_n \times b_n$. Par conséquent :

$$m_n = a_n \vee b_n = \frac{a_n \times b_n}{a_n \wedge b_n} = \frac{a_n \times b_n}{d_n} = \frac{n(4n + 1)(n + 5)^2}{n + 5} = n(4n + 1)(n + 5).$$

> **Applications.**
1. Soit $x$ et $y$ deux entiers naturels non nuls. On pose : $a = 9x + 4y$ et $b = 2x + y$.

Montrer que : $a \wedge b = x \wedge y$.

2. Montrer que: $\left(\forall (a; b; c) \in \left(\mathbb{N}^{*}\right)^{3}\right)$ $a \wedge b = a \wedge \left(a^{2}bc + ac + b\right)$.
3. Pour tout $ n \in \mathbb{N}^* $, on pose: $ a_n = (25^n - 1)(9^n - 1) $ et $ b_n = (5^n + 1)(3^n + 1) $.

Déterminer $a_n \wedge b_n$ et $a_n \vee b_n$ en fonction de $n$.

Très Important

Pour tout $(x; y) \in (\mathbb{N}^*)^2$ :

$(x \mid y \text{ et } y \mid x) \Leftrightarrow x = y$

#### 1.2. CALCUL PRATIQUE DU P.G.C.D : ALGORITHME D'EUCLIDE

> **Proposition 2.**
Soit $a \in \mathbb{Z}^*$ et $b \in \mathbb{N}^*$.

Lorsque $b$ ne divise pas $a$, le plus grand commun diviseur des entiers $a$ et $b$ est égal au dernier reste non nul obtenu grâce à l'algorithme d'Euclide.

**Explication de l'algorithme d'Euclide.**

On considère deux entiers $a \in \mathbb{Z}^*$ et $b \in \mathbb{N}^*$.

On fait la division euclidienne de $a$ par $b$ : $a = bq_1 + r_1$ avec $0 \le r_1 < b_1$.

$\circ \mathrm{Si}r_{1} = 0$ , on arrete l'algorithmme en deduisant que: $a\wedge b = b$
$\circ \mathrm{Si}r_{1}\neq 0$ , on continue.

On fait la division euclidienne de $b$ par $r_1$ : $b = r_1q_2 + r_2$ avec $0 \le r_2 < r_1$.

$\circ \mathrm{Si}r_{2} = 0$ , on arrete l'algorithmme en deduisant que: $a\wedge b = r_1$
$\circ \mathrm{Si}r_{2}\neq 0$ , on continue.

Etc.

Notons que le processus engagé va s'arrêter, car sinon, on construirait une suite d'entiers naturels strictement décroissante, ce qui est impossible. Il existe donc un entier $p \in \mathbb{N}$ tel que $r_p \neq 0$ et $r_{p+1} = 0$.

Par conséquent : $a \wedge b = r_p$

> **Exemple.**
Calculons $6468 \wedge 1547$ en appliquant l'algorithme d'Euclide :

$$6468 = 1547 \times 4 + 280$$

$$1547 = 280 \times 5 + 147$$

$$280 = 147 \times 1 + 113$$

$$147 = 133 \times 1 + 14$$

$$133 = 14 \times 9 + \boxed{7}$$

$$14 = 7 \times 2 + 0$$

Le dernier reste non nul dans l'algorithme est 7, ce qui permet de conclure que : $6468 \wedge 1547 = 7$

#### 1.3. NOMBRES PREMIERS ENTRE EUX

> **Définition 2.**
Soit $a$ et $b$ deux entiers relatifs non nuls.

On dit que $a$ et $b$ sont premiers entre eux si le seul diviseur positif commun à $a$ et $b$ est 1, c'est-à-dire

si :

$$a \wedge b = 1$$

> **Exemples.**
1) Les nombres 12 et 35 sont premiers entre eux car: $12\wedge 35 = 1$
2) Les nombres 2018 et -625 sont premiers entre eux car: $2018\wedge (-625) = 1$
3) Les nombres $-45$ et $-18$ ne sont pas premiers entre eux car: $(-45)\wedge (-18) = 9$
4) Deux entiers relatifs successifs et non nuls sont premiers entre eux car:

$$\left(\forall n \in \mathbb{Z}^* - \{-1\}\right) \quad n \wedge (n+1) = 1$$

5) Soit $x \in \mathbb{Z}$. Montrons que : $(x^4 + 3x^2 + 3) \wedge (x^4 + 2x^2 + 1) = 1$

Posons $(x^4 + 3x^2 + 3) \wedge (x^4 + 2x^2 + 1) = d$. On a alors :

$$\begin{cases} d \mid x^4 + 3x^2 + 3 \\ d \mid x^4 + 2x^2 + 1 \end{cases} \Rightarrow \begin{cases} d \mid (x^4 + 3x^2 + 3) - (x^4 + 2x^2 + 1) \\ d \mid x^4 + 2x^2 + 1 \end{cases} \Rightarrow \begin{cases} d \mid x^2 + 2 \\ d \mid x^4 + 2x^2 + 1 \end{cases} \Rightarrow \begin{cases} d \mid x^2 (x^2 + 2) \\ d \mid x^4 + 2x^2 + 1 \end{cases}$$

Par conséquent : $d \mid x^4 + 2x^2 + 1 - x^2 (x^2 + 2)$, c'est-à-dire : $d \mid 1$. Ainsi : $d = 1$

En définitive : $(\forall x \in \mathbb{Z}) \quad (x^4 + 3x^2 + 3) \wedge (x^4 + 2x^2 + 1) = 1$

> **Applications.**
1. Montrer que: $(\forall x \in \mathbb{Z}) (2x + 1) \wedge (3x + 1) = 1$
2. Pour tout $x \in \mathbb{Z}$, on pose: $d = (9x + 4) \wedge (2x - 1)$

a) Montrer que: $d = 1$ ou $d = 17$
b) Déterminer les valeurs de $ x $ pour lesquelles les entiers $ 9x + 4 $ et $ 2x - 1 $ sont premiers entre eux.

> **Théorème 1.**
Soit $a$ et $b$ deux entiers relatifs non nuls, et $d$ un entier naturel non nul.

Alors : $d = a \wedge b \Leftrightarrow \left[ (\exists (\alpha; \beta) \in \mathbb{Z}^2) \ a = \alpha d \ \text{et} \ b = \beta d \ \text{et} \ \alpha \wedge \beta = 1 \right]$

> **Preuve.**
Supposons que $d = a \wedge b$. Comme $d \mid a$ et $d \mid b$ alors : $(\exists (\alpha; \beta) \in \mathbb{Z}^2) \ a = \alpha d \ \text{et} \ b = \beta d$. Il s'ensuit

donc : $d = (\alpha d) \wedge (\beta d) = |d| (\alpha \wedge \beta)$. Par suite : $\alpha \wedge \beta = 1 \ \text{car} \ d \in \mathbb{N}^*$.

Inversement, supposons que : $(\exists (\alpha; \beta) \in \mathbb{Z}^2) \ a = \alpha d \ \text{et} \ b = \beta d \ \text{et} \ \alpha \wedge \beta = 1$

On a alors : $a \wedge b = (\alpha d) \wedge (\beta d) = d (\alpha \wedge \beta) = d \times 1 = d$, d'où le résultat.

> **Théorème 2.**
Soit $(a, b) \in (\mathbb{Z}^*)^2$. On a l'implication : $d = a \wedge b \Rightarrow \left[ (\exists (u; v) \in \mathbb{Z}^2) \ d = au + bv \right]$

> **Preuve.**
- Quitte à replacer $a$ par $|a|$ et $b$ par $|b|$, il suffit de traiter le cas où $a$ et $b$ sont des entiers naturels. On va démontré l'existence de $u$ et $v$ par une récurrence sur $b \in \mathbb{N}^+$.
- Démontrons, par récurrence sur $ b \in \mathbb{N}^+ $, la propriété suivante:

$H_b : \langle \text{Pour tout } a \in \mathbb{N}^+, \text{ il existe } (u; v) \in \mathbb{Z}^2 \text{ tel que } au + bv = d \rangle$

- Initialisation: $ H_{1} $ est vraie car, pour tout $ a \in \mathbb{N}^{+} $, on a: $ a \times 1 + 1 \times (1 - a) = 1 $. (Ici: $ d = a \wedge 1 = 1 $)
- Hérédité: Supposons la propriété vraie jusqu'au rang $ b - 1 $. Soit $ a \in \mathbb{N}^+ $; notons $ d = a \wedge b $. On effectue la division euclidienne de $ a $ par $ b $: $ a = bq + r $ avec $ 0 \leq r < b $.

D'après la proposition 2, on a donc $d = b \wedge r$ et la propriété $H_r$ montre qu'il existe $(u'; v') \in \mathbb{Z}^2$ tel que : $bu' + rv' = d$.

On a donc : $bu' + (a - bq)v' = d$, ce qui donne $au + bv = d$ avec $u = v'$ et $v = u' - qv'$.

- Conclusion : Pour tout $a \in \mathbb{N}^+$, il existe $(u; v) \in \mathbb{Z}^2$ tel que $au + bv = d$.

> **Remarques.**
- Le couple $(u; v)$ n'est pas unique. Par exemple :

$9 \wedge 4 = 1 = 1 \times 9 - 2 \times 4$ ($u = 1$ et $v = -2$) ; $9 \wedge 4 = (-43) \times 9 + 97 \times 4$ ($u = -43$ et $v = 97$)

- La réciproque du théorème 2 est incorrecte ; contre-exemple : $3 \times 5 + 7 \times (-1) = 8$ mais $3 \wedge 7 \neq 8$.

#### 1.4. THÉORÈME DE BEZOUT

> **Théorème 3.**
Soit $a$ et $b$ deux entiers relatifs non nuls.

Alors :

$a \wedge b = 1 \Leftrightarrow \left[ \left( \exists (u; v) \in \mathbb{Z}^2 \right) au + bv = 1 \right]$

> **Preuve.**
Si $a \wedge b = 1$ alors d'après le théorème 2, il existe $(u, v) \in \mathbb{Z}^2$ tel que $au + bv = 1$.

Inversement, s'il existe deux entiers relatifs $u$ et $v$ tels que $au + bv = 1$, alors tout diviseur commun à $a$ et $b$ divise $au + bv$ donc est égal à $1$ ou $-1$. On en déduit que $a$ et $b$ sont premiers entre eux, d'où le résultat.

> **Exemples.**
1) Pour tout $ n \in \mathbb{N}^+ : n \wedge (n + 1) = 1 $ (car: $ 1 \times (n + 1) - 1 \times n = 1 $).
2) Pour tout $ n \in \mathbb{Z} : (n^2 + 2) \wedge (3n^2 + 5) = 1 $ (car: $ 3(n^2 + 2) - 1(3n^2 + 5) = 1 $).
3) Pour tout $ n \in \mathbb{N}^+ : (4n + 3) \wedge (9n + 7) = 1 $ (car: $ -9(4n + 3) + 4(9n + 7) = 1 $).

> **Applications.**
En utilisant le théorème de Bezout, montrer que pour tout $n \in \mathbb{N}$ :

a) $(5n + 3)\wedge (2n + 1) = 1$ b) $(2n - 1)\wedge (3 - 7n) = 1$ c) $(6n + 3)\wedge (3n + 1) = 1$
d) $(n + 1)\wedge (2n^2 -1) = 1$ e) $(2n(n + 1))\wedge (2n + 1) = 1$ f) $(6n^{2} - n)\wedge (2n - 1) = 1$

#### 1.5. DÉTERMINATION DES COEFFICIENTS DU THÉORÈME DE BEZOUT

L'inconvénient du théorème du Bezout, sous sa forme théorique, est qu'il ne fournit pas les coefficients $u$ et $v$ intervenant dans la relation $au + bv = 1$. L'algorithme d'Euclide fournit une réponse pratique à ce problème. À titre d'exemple, posons : $a = 1452$ et $b = 161$.

Utilisons la méthode de l'algorithme d'Euclide pour déterminer $a \wedge b$ :

$$\begin{array}{l} 1452 = 161 \times 9 + 3 \quad (\text{Ligne 1}) \\ 161 = 3 \times 53 + 2 \quad (\text{Ligne 2}) \\ 3 = 2 \times 1 + \boxed{1} \quad (\text{Ligne 3}) \\ 2 = 1 \times 2 + 0 \quad (\text{Ligne 4}) \end{array}$$

On déduit donc que $1452 \wedge 161 = 1$, donc, les entiers $a$ et $b$ sont premiers entre eux. Nous allons déduire des quatre lignes ci-dessus un couple $(u; v) \in \mathbb{Z}^2$ tel que $1452u + 161v = 1$. Il suffit pour cela de remonter l'algorithme d'Euclide :

$$\begin{array}{l} 1 = 3 - 2 \times 1 \quad (\text{D'après la ligne 3}) \\ = 3 - (161 - 3 \times 53) \times 1 \quad (\text{D'après la ligne 2}) \\ = 3 \times (1 + 53) - 161 \\ = (1452 - 161 \times 9) \times 54 - 161 \quad (\text{D'après la ligne 1}) \\ = 1452 \times 54 + 161 \times (-9 \times 54 - 1) \end{array}$$

$$1 = 1452 \times \underbrace{54}_{u} + 161 \times \underbrace{(-487)}_{v}$$

Finalement : $1452 \times 54 + 161 \times (-487) = 1$ ($u = 54$ et $v = -487$)

#### 1.6. APPLICATIONS DU THÉORÈME DE BEZOUT

> **Théorème 4.**
Soit $a, b$ et $c$ des entiers relatifs non nuls. On a l'implication : $(a \mid bc$ et $a \wedge b = 1) \Rightarrow a \mid c$

Ce résultat est connu sous le nom de « Théorème de Gauss ».

> **Preuve.**
Supposons que $a \mid bc$ et $a \wedge b = 1$. D'après le théorème de Bezout, on peut affirmer l'existence d'un couple $(u; v) \in \mathbb{Z}^2$ tel que $au + bv = 1$. On en déduit $acu + bcv = c$. Par ailleurs, $a \mid bc$, donc, il existe $k \in \mathbb{Z}$ tel que

$bc = ak$. Finalement, $acu + bcv = c$, c'est-à-dire $c = a(cu + kv)$, d'où $a \mid c$.

> **Remarque.**
Dans le théorème de Gauss, la condition $a \wedge b = 1$ est nécessaire. Par exemple : $12 \mid 9 \times 8$ mais $12$ ne divise ni le nombre 9 ni le nombre 8.

> **Exemple.**
Recherchons les entiers $a$ et $b$ vérifiant l'égalité $11a = 5b$. Si $a$ et $b$ sont de tels entiers, alors $5 \mid 11a$ et puisque $5 \wedge 11 = 1$, on déduit du théorème de Gauss que $5 \mid a$. Il existe donc $k \in \mathbb{Z}$ tel que $a = 5k$. En reportant dans l'égalité de départ, on trouve alors $55k = 5b$, d'où $b = 11k$. Réciproquement, tous les couples $(a; b)$ de la forme $(5k; 11k)$ (avec $k \in \mathbb{Z}$) sont solutions de l'égalité de départ.

> **Théorème 5.**
Soit $a, b$ et $c$ des entiers relatifs non nuls. On a l'implication : $(a \mid c \text{ et } b \mid c \text{ et } a \wedge b = 1) \Rightarrow ab \mid c$

> **Preuve.**
On sait que $(a \vee b) \cdot (a \wedge b) = |ab|$ et $a \wedge b = 1$, donc $a \vee b = |ab|$. Puisque $a \mid c$ et $b \mid c$, alors $a \vee b$ divise $c$, c'est-à-dire $|ab| \mid c$. Par suite : $ab \mid c$.

> **Remarque.**
Dans le théorème 5, la condition $a \wedge b = 1$ est nécessaire. Par exemple : $8 \mid 48$ et $12 \mid 48$ mais $12 \times 8$ ne divise pas 48.

> **Proposition 3.**
Soit $a, b$ et $c$ des entiers relatifs non nuls. Alors :

1) $(a\wedge b = 1$ et $a\wedge c = 1)\Leftrightarrow a\wedge bc = 1$
2) Pour tout $(m;n)\in \left(\mathbb{N}^{\star}\right)^{2}$ ： $\left(a\wedge b = 1\Leftrightarrow a\wedge b^{n} = 1\right)$ et $\left(a\wedge b = 1\Leftrightarrow a^{m}\wedge b^{n} = 1\right)$

> **Preuve.**
$(\Rightarrow)$ Supposons que $a \wedge b = 1$ et $a \wedge c = 1$. D'après le théorème de Bezout :

$$\left[ \left( \exists (\alpha; \beta) \in \mathbb{Z}^2 \right) \alpha a + \beta b = 1 \right] \quad \text{et} \quad \left[ \left( \exists (x; y) \in \mathbb{Z}^2 \right) x a + y c = 1 \right]$$

Par conséquent : $(\alpha a + \beta b)(xa + yc) = 1 \Leftrightarrow (\alpha ax + \alpha cy + \beta bx)a + \beta ybc = 1$

En posant : $u = \alpha ax + \alpha cy + \beta bx$ et $v = \beta y$, On aura : $(u; v) \in \mathbb{Z}^2$ et $au + bcv = 1$

Et d'après le théorème de Bezout : $a \wedge bc = 1$

(⇐) Inversement, on a d'après le théorème de Bezout :

$$a \wedge b c = 1 \Leftrightarrow \left[ \left( \exists (\alpha_1; \beta_1) \in \mathbb{Z}^2 \right) \alpha_1 a + \beta_1 b c = 1 \right]$$

Il s'ensuit donc : $\alpha_1 a + (\beta_1 c) b = \alpha_1 a + (\beta_1 b) c = 1$

D'après le théorème de Bezout :

$$a \wedge b = 1 \text{ (en prenant } u = \alpha_1 \text{ et } v = \beta_1 b) \quad ; \quad a \wedge c = 1 \text{ (en prenant } u = \alpha_1 \text{ et } v = \beta_1 c)$$

2) (⇔) On suppose que $a \wedge b = 1$. Montrons par récurrence que : $(\forall n \in \mathbb{N}^*) a \wedge b^n = 1$.

Initialisation : Pour $n = 1$, on a bien $a \wedge b^1 = 1$.

Hérédité : Soit $n \in \mathbb{N}^*$. Supposons que $a \wedge b^n = 1$ et montrons que $a \wedge b^{n+1} = 1$.

On a par hypothèse : $a \wedge b^n = 1$ et $a \wedge b = 1$, donc, d'après le résultat 1) précédent : $a \wedge (bb^n) = 1$,

ce qui entraîne que $a \wedge b^{n+1} = 1$.

Conclusion : $(\forall n \in \mathbb{N}^*) a \wedge b^n = 1$.

(⇐) Inversement, si $a \wedge (bb^{n-1}) = 1$, alors d'après le résultat 1) : $a \wedge b = 1$.

3) Soit $(m; n) \in (\mathbb{N}^*)^2$. D'après le résultat 2) : $a \wedge b = 1 \Leftrightarrow a \wedge b^n = 1 \Leftrightarrow b^n \wedge a = 1 = b^n \wedge a^m = 1$

Par suite : $\forall (m; n) \in (\mathbb{N}^*)^2 a \wedge b = 1 \Leftrightarrow a^m \wedge b^n = 1$

#### 1.7. L'ÉQUATION DIOPHANTIENNE $ax + by = c$

Une équation diophantienne est une équation polynomiale à une ou plusieurs inconnues dont les solutions sont cherchées parmi les nombres entiers, éventuellement rationnels, les coefficients étant eux-mêmes également entiers. Certaines équations diophantiennes ont demandé pour leur résolution les efforts conjugués de nombreux mathématiciens sur plusieurs siècles. Le dernier théorème de Fermat est un exemple typique ; il est conjecturé par Pierre de Fermat et démontré en 1994 par Andrew Wiles, après 357 ans d'efforts de la part de nombreux mathématiciens.

L'intérêt de la résolution de questions de cette nature réside rarement dans l'établissement d'un théorème clé pour les mathématiques, la physique ou les applications industrielles, même s'il existe des contre exemples comme la cryptologie, qui fait grand usage du petit théorème de Fermat. Leur analyse amène le développement d'outils mathématiques puissants dont l'usage dépasse le cadre de l'arithmétique.

La richesse et la beauté formelle des techniques issues de la résolution d'équations diophantiennes fait de l'arithmétique la branche « reine des mathématiques » pour David Hilbert.

L'équation $ax + by = c$, où les coefficients $a$, $b$ et $c$ sont trois entiers relatifs ($a$ et $b$ non tous deux nuls) et où les inconnues $x$ et $y$ sont entiers relatifs, est une des équations diophantiennes les plus simples à résoudre. Sa résolution s'appuie sur l'algorithme d'Euclide, le théorème de Bezout (qui correspond au cas, appelé aussi identité de Bezout, où c'est égal à $a \wedge b$) et le théorème de Gauss.

Dans l'ensemble des entiers relatifs, une telle équation possède, ou bien aucune solution, ou bien une infinité de solutions. Lorsque les coefficients et les inconnues sont des entiers naturels, l'équation possède un nombre fini de solutions.

> **Théorème 6.**
Soit $a, b$ et $c$ des entiers relatifs tels que $ab \neq 0$.

L'équation $ax + by = c$ d'inconnue $(x; y) \in \mathbb{Z}^2$ a des solutions si, et seulement si, $a \wedge b$ divise $c$.

> **Preuve.**
Soit $d = a \wedge b$ et $a = da'$, $b = db'$ avec $(a'; b') \in (\mathbb{Z}^*)^2$.

L'égalité $ax + by = c$ entraîne $d(a'x + b'y) = c$, ce qui montrer que $d$ est nécessairement un diviseur de $c$.
La condition « $a \wedge b$ divise $c$ » est nécessaire pour que $ax + by = c$ admette des solutions dans $\mathbb{Z}^2$.
En supposant que $a \wedge b$ divise $c$, on est ramené à la résolution de l'équation :

$$(E') : a'x + b'y = c', \text{ avec } c' = \frac{c}{d} \text{ et } a' \wedge b' = 1.$$

Puisque $a' \wedge b' = 1$, alors d'après le théorème de Bezout, il existe $(u; v) \in \mathbb{Z}^2$ tel que $au + bv = 1$. Il s'ensuit $a'(c'u) + b'(c'v) = c'$ et $(c'u; c'v)$ est une solution de l'équation $(E')$ dans $\mathbb{Z}^2$. Par suite :

« L'équation $ax + by = c$ admet des solutions dans $\mathbb{Z}^2$ si, et seulement si, $a \wedge b$ divise $c$ »

Technique de résolution de l'équation $(E')$ dans $\mathbb{Z}^2$ :

Soit $(x_0; y_0)$ une solution (particulière) de l'équation $(E')$. On a donc $a'x_0 + b'y_0 = c'$ et l'équation $(E')$ se lit alors : $a'x + b'y = a'x_0 + b'y_0$, c'est-à-dire : $a'(x - x_0) = b'(y_0 - y)$ (*)

La relation (*) entraîne $b' \\mid a'(x - x_0)$, et comme $a' \wedge b' = 1$, le théorème de Gauss nous donne $b' \\mid x - x_0$.
Soit $k \in \mathbb{Z}$ tel que $x - x_0 = b'k$. La relation (*) donne alors $y - y_0 = a'k$. Les solutions de $(E')$ dans $\mathbb{Z}^2$ ne peuvent être que $(x_0 + b'k; y_0 - a'k)$.

Pour conclure, il suffit de vérifier que tous ces couples sont solutions de $(E')$. D'où le théorème suivant :

> **Théorème 7.**
Si le couple $(x_0; y_0)$ est une solution de l'équation $(E)$ : $ax + by = c$, alors l'ensemble solution de

l'équation $(E)$ s'écrit sous la forme : $$S = \left\{ \left( x_0 + \frac{bk}{a \wedge b}; y_0 - \frac{ak}{a \wedge b} \right) \mid k \in \mathbb{Z} \right\}$$

> **Exemples.**
1) Résoudre dans $\mathbb{Z}^2$ l'équation : $(E_1) \quad 15x + 20y = 7$

On a $15 \wedge 20 = 5$. Et puisque 5 ne divise pas 7 alors l'équation $(E_1)$ n'a pas de solutions dans $\mathbb{Z}^2$ :
$S_1 = \emptyset$

2) Résoudre dans $\mathbb{Z}^2$ l'équation : $(E_2) \quad 54x + 21y = 906$

Utilisons la méthode de l'algorithme d'Euclide pour déterminer $54 \wedge 21$ :

$$54 = 2 \times 21 + 12$$

$$21 = 1 \times 12 + 9$$

$$12 = 1 \times 9 + [3]$$

$$9 = 3 \times 3 + 0$$

Il s'ensuit donc $54 \wedge 21 = 3$ et 3 divise 906. Par conséquent, l'équation $(E_2)$ admet une solution dans $\mathbb{Z}^2$.

En remontant l'algorithme d'Euclide, on obtient :

$$3 = 12 - 1 \times 9 = 12 - 1 \times (21 - 1 \times 12) = 12 \times 2 - 1 \times 21 = (54 - 2 \times 21) \times 2 - 1 \times 21 = 2 \times 54 - 5 \times 21$$

Ainsi, $2 \times 54 - 5 \times 21 = 3$. En multipliant les membres de cette dernière égalité par 302, on obtient :

$$54 \times 604 + 21 \times (-1510) = 906$$

On en déduit alors que $(x_0; y_0) = (604; -1510)$ est une solution particulière de l'équation $(E_2)$. Par suite,

l'ensemble solutions de l'équation $(E_2)$ est : $S_2 = \{(604 + 7k; -1510 - 18k)  \;/\; k \in \mathbb{Z}\}$

3) Résoudre dans $\mathbb{Z}^2$ l'équation : $(E_3) \quad 41x - 10y = 2018$

Remarquons que le couple $(1; 4)$ est une solution évidente de l'équation $41x - 10y = 1$. Il s'ensuit que

$(1 \times 2018; 4 \times 2018) = (2018; 8072)$ est une solution particulière de l'équation $(E_3)$. Ainsi, l'ensemble

solutions de l'équation $(E_3)$ est : $S_3 = \{(2018 - 10k; 8072 - 41k)  \;/\; k \in \mathbb{Z}\}$

Dans l'ensemble $S_3$, le nombre $k$ parcourt $\mathbb{Z}$, ce qui permet aussi d'écrire :

$$S_3 = \{(2018 + 10k; 8072 + 41k)  \;/\; k \in \mathbb{Z}\}$$

> **Applications.**
1. Résoudre dans $\mathbb{Z}^2$ les équations suivantes :

$$(E_1) : 2017x + 48y = -5 \quad ; \quad (E_2) : 297x - 72y = 45 \quad ; \quad (E_3) : 51x + 136y = 2018$$

2. On considère dans $\mathbb{Z}^2$ l'équation : $(E) : 324x - 245y = 7$

a) Montrer que si $(x,y)$ est une solution de $(E)$ alors $x$ est un multiple du nombre 7.
b) Résoudre dans $\mathbb{Z}^2$ l'équation $(E)$.
c) On pose $d = x \wedge y$ ou $(x, y)$ est une solution de $(E)$.

- Déterminer les valeurs possibles de l'entier $ d $.
- Déterminer les couples $(x, y)$ solutions de l'équation $(E)$ tels que $x \wedge y = 1$

3. Résoudre dans $\mathbb{N}^2$ l'équation suivante : $23562x - 13167y = 693$

#### 1.8. P.G.C.D ET P.P.C.M D'UN NOMBRE FINI D'ENTIERS RELATIFS

On montre sans difficulté que les notions de PGCD et PPCM sont associatives, au sens où :

$$\left( \forall (a; b; c) \in \left( \mathbb{Z}^* \right)^2 \right) \begin{cases} a \wedge (b \wedge c) = (a \wedge b) \wedge c \\ a \vee (b \vee c) = (a \vee b) \vee c \end{cases}$$

Ainsi, le calcul d'un PGCD ou d'un PPCM de n entiers peut se ramener au PGCD ou au PPCM de n-1 entiers par les égalités suivantes :

$$a_1 \wedge a_2 \wedge \dots \wedge a_n = a_1 \wedge (a_2 \wedge \dots \wedge a_n) \quad \text{et} \quad a_1 \vee a_2 \vee \dots \vee a_n = a_1 \vee (a_2 \vee \dots \vee a_n)$$

Cela permet de généraliser au cas de n entiers les définitions et résultats qui viennent d'être exposés concernant le PGCD et le PPCM de deux entiers.

> **Définition 3.**
Soit n un entier naturel, n ≥ 2, et des entiers relatifs non nuls a₁, a₂, ..., aₙ.

- Le plus grand commun diviseur des entiers a₁, a₂, ..., aₙ, noté a₁ ∧ a₂ ∧ ... ∧ aₙ ou PGCD(a₁, a₂, ..., aₙ), est le plus grand des diviseurs positifs communs à a₁, a₂, ..., aₙ.
- Le plus petit commun multiple des entiers a₁, a₂, ..., aₙ, noté a₁ ∨ a₂ ... ∨ aₙ ou PPCM(a₁, a₂, ..., aₙ), est le plus petit des multiples positifs communs à a₁, a₂, ..., aₙ.

> **Exemples.**
$$\begin{cases} 12 \wedge 15 \wedge 30 = 3 \\ 12 \vee 15 \vee 30 = 60 \end{cases} ; \quad \begin{cases} (-14) \wedge 21 \wedge 15 = 1 \\ (-14) \vee 21 \vee 15 = 210 \end{cases} ; \quad \begin{cases} 14 \wedge 21 \wedge 35 \wedge 49 = 7 \\ 14 \vee 21 \vee 35 \vee 49 = 1470 \end{cases}$$

> **Théorème 8.**
Soit n un entier naturel supérieur ou égal à 2, et des entiers relatifs non nuls a₁, a₂, ..., aₙ.

Il existe des entiers relatifs u₁, u₂, ..., uₙ tels que : $$\sum_{i=1}^{n} a_i u_i = \delta$$

où δ désigne le plus grand commun diviseur de a₁, a₂, ..., aₙ.

> **Preuve.**
On procède par récurrence sur n en montrant le résultat suivant :

$$\delta = a_1 \wedge a_2 \wedge \dots \wedge a_n \Rightarrow \left[ \left( \exists (u_1; u_2; \dots; u_n) \in \mathbb{Z}^n \right) ; \sum_{i=1}^{n} a_i u_i = \delta \right]$$

Initialisation : pour n = 2 déjà montré dans le théorème 2.

Hérédité : Supposons le résultat vrai pour tout n -uplet d'entiers relatifs non nuls. Considérons n + 1 entiers non nuls a₁, a₂, ..., aₙ, aₙ₊₁. Notons δ' = a₁ ∧ a₂ ∧ ... ∧ aₙ. L'hypothèse de récurrence donne l'existence

d'entiers $u_1', u_2', ..., u_n'$ tels que $a_1 u_1' + a_2 u_2' + ... + a_n u_n' = \delta'$. D'autre part, en notant :

$$\delta = a_1 \wedge a_2 \wedge ... \wedge a_n \wedge a_{n+1} = (a_1 \wedge a_2 \wedge ... \wedge a_n) \wedge a_{n+1} = \delta' \wedge a_{n+1}$$

Le théorème 2 pour deux entiers fournit deux entiers $u$ et $v$ tels que : $a_{n+1} u + \delta' v = \delta$.

On obtient alors : $a_{n+1} u + (a_1 u_1' + a_2 u_2' + ... + a_n u_n') v = \delta \Rightarrow a_1 u_1' v + a_2 u_2' v + ... + a_n u_n' v + a_{n+1} u = \delta$

ce qui montre le résultat du théorème 8 et achève la démonstration.

> **Définition 4.**
Soit $n$ un entier naturel supérieur ou égal à 2, et des entiers relatifs non nuls $a_1, a_2, ..., a_n$.

On dit que les entiers $a_1, a_2, ..., a_n$ sont premiers entre eux si l'est le seul diviseur positif commun à

tous ces entiers, c'est-à-dire : $a_1 \wedge a_2 \wedge ... \wedge a_n = 1$

> **Remarques.**
- Attention, dire que des entiers sont premiers entre eux ne signifie pas qu'ils sont entre eux deux à deux. Par exemple, les trois entiers $ a = 8 $, $ b = 7 $ et $ c = 12 $ sont premiers entre eux. Pourtant, les entiers $ a $ et $ c $ ont 4 pour grand diviseur commun: $ a \wedge c = 4 > 1 $.
- La relation $(a \vee b) \cdot (a \wedge b) = |ab|$ n'est pas valable pour plus de deux entiers relatifs.

Contre-exemple : $6 \vee 10 \vee 15 = 30$ et $6 \wedge 10 \wedge 15 = 1$

donc : $(6 \vee 10 \vee 15) \times (6 \wedge 10 \wedge 15) = 30$ et $30 \neq 6 \times 10 \times 15$

c'est-à-dire qu'on a en général : $(a \wedge b \wedge c) \times (a \vee b \vee c) \neq |abc|$

- Le résultat du théorème 1 reste aussi valable pour plus de deux entiers. Plus précisément : $(n \ge 2)$
$\delta = a_1 \wedge a_2 \wedge ... \wedge a_n$ signifie qu'il existe $(a_1', a_2', ..., a_n') \in \mathbb{Z}^n$ tel que pour tout $i \in \{1; 2; ...; n\}$ :

$$a_i = \delta a_i' \quad \text{et} \quad a_1' \wedge a_2' \wedge ... \wedge a_n' = 1$$

> **Théorème 9.**
Soit $n$ un entier naturel supérieur ou égal à 2, et des entiers relatifs non nuls $a_1, a_2, ..., a_n$.

Les entiers $a_1, a_2, ..., a_n$ sont premiers entre eux si, et seulement si : $\exists (u_1; u_2; ...; u_n) \in \mathbb{Z}^n$ ; $\sum_{i=1}^n a_i u_i = 1$

Autrement dit : $a_1 \wedge a_2 \wedge ... \wedge a_n = 1 \Leftrightarrow \left[ (\exists (u_1; u_2; ...; u_n) \in \mathbb{Z}^n) ; \sum_{i=1}^n a_i u_i = 1 \right]$

> **Preuve.**
Pour la démonstration du théorème 9, On suit la même démarche utilisée pour la démonstration du théorème de Bezout. (À vérifier)

#### 1.9. CONGRUENCE MODULO n (RAPPELS ET COMPLÉMENTS)

> **Définition 5.**
Soit n un entier naturel non nul.

On dit que deux entiers relatifs a et b sont congrus modulo n si n divise b - a, c'est-à-dire s'il existe un entier k ∈ ℤ tel que b = a + kn. On écrit: a ≡ b [n]

> **Exemples.**
1) On a $247 \equiv 7$ [15] car 15 \mid 247 - 7. De même: $163 \equiv -2$ [15] car 15 \mid 163 + 2.
2) $\operatorname{Si} n \in \mathbb{Z}$ alors: $n(n + 1) \equiv 0$ [2] et $(2n + 1)^2 \equiv 1$ [4]

> **Proposition 4.**
Soit n un entier naturel non nul.

La relation « de congruence » est une relation d'équivalence sur ℤ, c'est-à-dire :

1) Elle est reflexive: $(\forall a \in \mathbb{Z})$ $a \equiv a[n]$.
2) Elle est symétrique: $(\forall (a; b) \in \mathbb{Z}^2)$ ($a \equiv b[n] \Rightarrow b \equiv a[n]$).
3) Elle est transitive: $(\forall (a; b; c) \in \mathbb{Z}^3)$ ($a \equiv b[n]$ et $b \equiv c[n]$) $\Rightarrow a \equiv c[n]$

La proposition suivante montre que la relation de congruence est compatible avec les opérations usuelles dans ℤ.

> **Proposition 5.**
Soit n un entier naturel non nul et (a; b; c; d) ∈ ℤ⁴. Alors :

1) $a \equiv b[n] \Leftrightarrow$ (Les restes respectifs des divisions euclidiennes de $a$ et de $b$ par $n$ sont égaux).
2) $\operatorname{Si} a \equiv b[n]$ et $c \equiv d[n]$, alors: $a + c \equiv b + d[n]$ et $ac \equiv bd[n]$.
3) $\operatorname{Si} a \equiv b[n]$ et $k \in \mathbb{Z}$, alors: $ka \equiv kb[n]$.
4) $\operatorname{Si} a \equiv b[n]$ et $p \in \mathbb{N}$, alors: $a^p \equiv b^p[n]$.

> **Exemple.**
On pose : a = 2 × 7²⁰¹⁸ + 3 × 5²⁰¹⁸ - 5. Montrons que 24 divise a.

On a : 7 ≡ -1 [8] et 5 ≡ -3 [8] et 7² ≡ 1 [8] et 5² ≡ 1 [8]

Par conséquent : 2 × 7²⁰¹⁸ ≡ 2 [8] et 3 × 5²⁰¹⁸ ≡ 3 [8]

Il s'ensuit donc : 2 × 7²⁰¹⁸ + 3 × 5²⁰¹⁸ - 5 ≡ 2 + 3 - 5 [8], c'est-à-dire : a ≡ 0 [8]

On a: $7 \equiv 1[3]$ et $5 \equiv -1[3]$ et $7^2 \equiv 1[3]$ et $5^2 \equiv 1[3]$
Par conséquent: $2 \times 7^{2018} + 3 \times 5^{2018} - 5 \equiv 2 + 3 - 5[3]$, c'est-à-dire: $a \equiv 0[3]$.
Enfin, puisque $8 \mid a$ et $3 \mid a$ et $3 \wedge 8 = 1$ alors $24 \mid a$, d'où le résultat.

> **Applications.**
1. Montrer que le reste de la division euclidienne du nombre $ N = (2018)^{102} $ par 5 est égale à 4.
2. Déterminer le chiffre des unités du nombre: $ X = 2017^{1991^{1991}} $.
3. a) Déterminer les restes de la division euclidienne par 7 des nombres suivants:

5 ; 5² ; 5³ ; 5⁴ ; 5⁵ ; 5⁶ ; 5⁷

b) En déduire, selon les valeurs de l'entier naturel $n$, le reste de la division euclidienne de $5^n$ par 7.
4. Soit $a, b, m$ et $n$ des entiers naturels supérieurs ou égaux à 2.

a) Montrer l'implication suivante: $n\equiv 0$ [m] $\Rightarrow b^n\equiv 1$ [b"-1]
b) Etabir l'équivalence suivante: $a^n\equiv 0$ [b^n] $\Leftrightarrow a\equiv 0$ [b].

> **Théorème 10.**
Soit $a, b$ et $c$ des entiers relatifs non nuls et $n \in \mathbb{N}^*$. Si $d = c \wedge n$ alors:

$$ac \equiv bc \ [n] \Leftrightarrow a \equiv b \ \left[ \frac{n}{d} \right]$$

> **Preuve.**
Soit $a, b$ et $c$ des entiers relatifs non nuls et $n \in \mathbb{N}^*$. On a alors:

$$ac \equiv bc \ [n] \Leftrightarrow [(\exists k \in \mathbb{Z}) \ ac - bc = kn] \Leftrightarrow [(\exists k \in \mathbb{Z}) \ c(a-b) = kn]$$

Puisque $d = c \wedge n$ alors il existe $(\alpha; \beta) \in \mathbb{Z}^2$ tel que: $n = \beta d$ et $c = \alpha d$ et $\alpha \wedge \beta = 1$.

Par conséquent: $ac \equiv bc \ [n] \Rightarrow \alpha d(a-b) = \beta dk \Rightarrow \alpha(a-b) = \beta k$

D'après le théorème de Gauss: $\begin{cases} \beta \mid \alpha(a-b) \\ \alpha \wedge \beta = 1 \end{cases} \Rightarrow \beta \mid a-b$. Donc: $a \equiv b \ [\beta]$.

Enfin, puisque $\beta = \frac{n}{d}$ alors: $a \equiv b \ \left[ \frac{n}{d} \right]$.

Inversement, supposons que $a \equiv b \ \left[ \frac{n}{d} \right]$. Alors, il existe $k \in \mathbb{Z}$ tel que: $a = b + k \cdot \frac{n}{d}$, et par conséquent:

$$a \equiv b \ \left[ \frac{n}{d} \right] \Rightarrow \alpha da = \alpha db + \alpha kn \Rightarrow ca = cb + \alpha kn$$

Par suite: $ac \equiv bc \ [n]$

Les résultats cités dans la proposition suivante sont des conséquences importantes du théorème 10, très utiles en pratique.

> **Proposition 6.**
Soit $a, b$ et $c$ des entiers relatifs non nuls et $(n; p) \in (\mathbb{N}^*)^c$ tels que $c \wedge n = 1$. Alors :

1) $ac \equiv bc \ [n] \Leftrightarrow a \equiv b \ [n]$

2) $\begin{cases} a \equiv b \ [n] \\ p \mid n \end{cases} \Rightarrow a \equiv b \ [p]$

3) $\begin{cases} ac \equiv bc \ [p] \\ p \text{ premier} \\ p \text{ ne divise pas } c \end{cases} \Rightarrow a \equiv b \ [p]$

> **Exemple.**
1) Résoudre dans $\mathbb{Z}$ l'équation suivante : $3x \equiv 4 \ [5]$

On a : $3x \equiv 4 \ [5] \Leftrightarrow 3x \equiv 9 \ [5]$. Puisque $3 \wedge 5 = 1$ alors : $3x \equiv 4 \ [5] \Leftrightarrow x \equiv 3 \ [5]$

Par suite, l'ensemble solution de cette équation est : $S = \{3 + 5k  \;/\; k \in \mathbb{Z}\}$

2) Résoudre dans $\mathbb{Z}$ l'équation suivante : $2x \equiv 4 \ [6]$

D'après le théorème 10 ($n = 6$ et $c = d = 2$), on a pour tout $x \in \mathbb{Z}$ : $2x \equiv 4 \ [6] \Leftrightarrow x \equiv 2 \ [3]$

Par suite, l'ensemble solution de cette équation est : $S = \{2 + 3k  \;/\; k \in \mathbb{Z}\}$

### 2. Les nombres premiers
#### 2.1. RAPPELS ET COMPLÉMENTS

Un entier relatif $n$ non nul a au plus $2n$ diviseurs (si $k \mid n$, alors $|k| \le |n|$ et $k \ne 0$).

Si $|n| \ge 2$, il y a au moins quatre diviseurs distincts : $1$ ; $-1$ ; $n$ ; $-n$.

1 et $-1$ ont exactement deux diviseurs.

> **Définition 6.**
Un entier relatif $p$ est dit premier lorsqu'il admet exactement quatre diviseurs.

> **Exemples.**
1) Les nombres suivants sont des entiers premiers: 2; 3; 5; 7; 11; -13; -17; -41; -97.
2) Le nombre 15 n'est pas premier car il est divisible par 5.
3) Le nombre 2016 n'est pas premier car il est divisible par 4.
4) Le nombre 2 est le seul entier naturel pair et premier.

> **Remarques.**
- Si $ p $ est un entier premier dans $ \mathbb{N} $, alors $ -p $ est premier dans $ \mathbb{Z} $. C'est pourquoi dans cette section, nous nous limitons à l'ensemble $ \mathbb{N} $ des entiers naturels.
L'ensemble des nombres premiers (positifs) est note $\mathbb{P}$
- Un entier $ n \geq 2 $ non premier est dit composé.

> **Applications.**
1. Pour tout $k \in \mathbb{Z}$, on pose : $H(k) = k^2 - k + 41$

Montrer que pour tout $k \in \mathbb{Z} \cap [-39; 40]$ : $H(k) \in \mathbb{P}$

2. Soit $ n $ un entier naturel supérieur ou égal à 2 tel que $ n $ divise $ (n - 1)! + 1 $.
Montrer que $ n $ est premier.
3. Soit $ n \in \mathbb{N} $. Déterminer les nombres premiers $ p $ qui s'écrivent sous la forme: $ p = n^4 + n^2 + 1 $.
4. Soit $ m $ un entier naturel supérieur ou égal à 2. Montrer que si $ 3^m + 1 $ est premier alors $ m $ est pair.

> **Théorème 11.**
Soit $n$ un entier composé supérieur ou égal à 2. Alors :

1) Le plus petit diviseur positif de $ n $ différent de l'est un nombre premier.
2) $n$ est un produit de nombres premiers. En particulier, $n$ possede au moins un diviseur premier.
3) $n$ possede un facteur premier $p$ tel que $p^2\leq n$

> **Preuve.**
Soit $n$ un entier composé supérieur ou égal à 2.

1) Puisque $n$ n'est pas premier, alors il admet un diviseur propre (c'est-à-dire différent de 1 et $n$). Notons $p$ le plus petit diviseur propre positif de $n$ et montrons que $p$ est premier.

Par l'absurde, si $p$ n'était pas premier, alors il admet un diviseur propre positif, que l'on le note $d$. Comme $d \mid p$ et $p \mid a$ alors $d \mid a$ et $1 < d < p$, et cela contredit le fait que $p$ est le plus petit diviseur propre positif de $n$. Par suite, l'entier $p$ est premier.

2) D'après 1), le nombre $n$ admet un diviseur premier $p_1$, donc, il existe un entier $n_1 \ge 2$ tel que : $n = n_1.p_1$. Si $n_1$ est premier, le résultat est prouvé, sinon $n_1$ admet un diviseur premier $p_2$, donc, il existe un entier $n_2 \ge 2$ tel que : $n_1 = p_2.n_2 = p_1.p_2.n_2$.

En recommençant cette opération un nombre fini de fois, nous aurons : $n = p_1.p_2 \dots p_r$ ($r \in \mathbb{N}^* - \{1\}$), ce qui montre que $n$ est un produit de nombres premiers.

3) Puisque $n \notin \mathbb{P}$, il s'écrit $n = ab$, où $a, b$ sont deux entiers strictement supérieurs à 1, on peut supposer que $a \le b$. Soit $p$ un facteur premier de $a$. Alors $p \mid n$, et $p^2 \le ap \le ab = n$.

Voici deux questions qui se posent naturellement :

- Comment savoir si un entier $N \geq 2$ est premier ?

La proposition ci-dessus donne une réponse : On dresse la liste des nombres premiers $p$ tels que $p^2 \leq N$, c'est-à-dire $p \leq E(\sqrt{N})$ ($x \mapsto E(x)$ est la fonction partie entière). Alors $N$ est premier et seulement s'il n'est multiple d'aucun des nombres obtenus.

À titre d'exemple : Montrons que le nombre 2017 est premier.

D'abord $E(\sqrt{2017}) = 44$. Les nombres premiers inférieurs ou égaux à 44 sont :

$$2 - 3 - 5 - 7 - 11 - 13 - 17 - 19 - 23 - 29 - 31 - 37 - 41 - 43$$

Par division euclidienne ou critère de divisibilité, on vérifie qu'aucun de ces nombres ne divise 2017.
- Soit $N \geq 2$ un entier donné, comment trouver tous les nombres premiers inférieurs ou égaux à $N$ ?
Le crible d'Ératosthène fournit une méthode. Dans la liste des entiers de 2 à $N$, on supprime tous les multiples de 2, puis tous les multiples de 3, et ainsi de suite. Après avoir supprimé tous les multiples d'un certain entier, le plus petit des entiers qui restent dans la liste, s'il y en a, est premier, et tous les nombres premiers entre 2 et $N$ sont obtenus successivement par ce procédé.

> **Applications.**
1. Parmi les nombres suivants, lesquels sont des nombres premiers :
127 1979 2003 13957 3599
2. En utilisant le crible d'Eratosthene, déterminer les nombres premiers qui existent entre 100 et 150.
3. Déterminer les nombres premiers qui existent entre 1000 et 1050.
4. Soit $ a $ et $ b $ deux entiers naturels supérieurs ou égaux à 2.

Montrer que le nombre $N = a^4 + 4b^4$ est composé.

> **Théorème 12.**
L'ensemble $\mathbb{P}$ des nombres premiers positifs est infini.

> **Preuve.**
De très nombreuses preuves de ce résultat existent. Proposons ici la démonstration d'Euclide, sans doute la plus connue, en raisonnant par l'absurde. Supposons que l'ensemble $\mathbb{P}$ soit fini. On peut alors écrire $\mathbb{P} = \{p_1; p_2; \dots; p_k\}$. D'après le résultat 2) du théorème 11, l'entier $N = p_1 \cdot p_2 \dots p_k + 1$ admet au moins un facteur premier $p$. Ce nombre premier est donc l'un des $p_i$. On a alors $p \mid N$ et $p \mid p_1 \cdot p_2 \dots p_k$, il en résulte alors $p \mid N - p_1 \cdot p_2 \dots p_k$, c'est-à-dire $p \mid 1$, ce qui est impossible. L'hypothèse de départ est donc fausse. Mieux encore, l'activité préparatoire n°6 montre l'existence d'une infinité de nombres premiers de la forme $4k + 3$. C'est une autre démonstration du théorème 12.

> **Théorème 13.**
1) Si $p$ et $q$ sont deux nombres premiers positifs distincts, alors ils sont premiers entre eux.

En d'autres termes : $(p \in \mathbb{P} \text{ et } q \in \mathbb{P} \text{ et } p \neq q) \Rightarrow p \wedge q = 1$

2) Si $p \in \mathbb{P}$, alors $p$ est premier avec tous les entiers qu'il ne divise pas.

En d'autres termes : $(\forall a \in \mathbb{Z}) (\forall p \in \mathbb{P}) [(p \text{ ne divise pas } a) \Rightarrow p \wedge a = 1]$

> **Preuve.**
1) On pose $d = p \wedge q$ et on suppose que $(p; q) \in \mathbb{P}^2$.

On a alors :

$$\begin{array}{l} d = p \wedge q \Rightarrow (d \mid p \text{ et } d \mid q) \\ \Rightarrow (d \in \{1; p\} \text{ et } d \in \{1; q\}) \\ \Rightarrow d \in \{1; p\} \cap \{1; q\} \\ \Rightarrow d = 1 \quad (\text{car } p \neq q) \end{array}$$

Par conséquent : $(p \in \mathbb{P} \text{ et } q \in \mathbb{P} \text{ et } p \neq q) \Rightarrow p \wedge q = 1$

2) Soit $a \in \mathbb{Z}$, et $p$ un nombre premier ne divisant pas $a$.

En posant $d = p \wedge a$ on obtient :

$$\begin{array}{l} d = p \wedge a \Rightarrow (d \mid p \text{ et } d \mid a) \\ \Rightarrow (d \in \{1; p\} \text{ et } d \mid a) \\ \Rightarrow [(d = 1 \text{ et } d \mid a) \text{ ou } (d = p \text{ et } d \mid a)] \\ \Rightarrow d = 1 \quad (\text{car } p \text{ ne divise pas } a) \end{array}$$

Par suite : $(\forall a \in \mathbb{Z}) (\forall p \in \mathbb{P}) [(p \text{ ne divise pas } a) \Rightarrow p \wedge a = 1]$

> **Proposition 7.**
Soit $(a; b) \in \mathbb{Z}^2$ et $p$ un nombre premier. Alors :

$$p \mid a b \Leftrightarrow (p \mid a \text{ ou } p \mid b)$$

> **Preuve.**
Si $p \mid a$ et $p \mid b$ alors on a bien évidemment $p \mid ab$. Inversement, supposons que $p \mid ab$ et que, par exemple, $p$ ne divise pas $a$; alors $p \wedge a = 1$ (d'après le théorème 13). Comme $p \mid ab$ alors, d'après le théorème de Gauss, $p \mid b$. Ainsi : $p \mid ab \Leftrightarrow (p \mid a \text{ ou } p \mid b)$

> **Corollaire.**

- Soit $a_1, a_2, \dots, a_n$ des entiers relatifs et $p$ un nombre premier. Alors :

$$p \mid a_1 . a_2 \dots a_n \Leftrightarrow (\exists i \in \{1; 2; \dots n\} \ p \mid a_i)$$

- Soit $a \in \mathbb{Z}$ et $p$ un nombre premier. Alors :

$$(\forall n \in \mathbb{N}^*) \ p \mid a^n \Leftrightarrow p \mid a$$

- Soit $p_1, p_2, \dots, p_n$ et $p$ des nombres premiers. Alors :

$$p \mid p_1 . p_2 \dots p_n \Leftrightarrow (\exists i \in \{1; 2; \dots n\} \ p = p_i)$$

> **Applications.**
1. Soit $a$ et $b$ deux entiers relatifs et $p$ un nombre premier.

a) Montrer que: $\left\{ \begin{array}{l} p \mid a \\ p \mid b \end{array} \right. \Leftrightarrow \left\{ \begin{array}{l} p \mid a + b \\ p \mid ab \end{array} \right.$
b) Montrer que: $a \wedge b = 1 \Leftrightarrow ab \wedge (a + b) = 1$.
c) En déduire que: $27 \wedge 182 = 1$.

Déterminer tous les nombres premiers positifs $p$ et $q$ sachant que :

$$p \mid q^2 - q \quad \text{et} \quad q \mid p^2 - p$$

#### 2.2. Petit théorème de Fermat

> **Théorème 14.**
Si $p$ est un nombre premier positif, alors il divise $a^p - a$, pour tout $a \in \mathbb{Z}$. Autrement dit :

$$(\forall a \in \mathbb{Z}) \ a^p \equiv a \ [p]$$

Si $p$ est un nombre premier positif, alors pour tout $a \in \mathbb{Z}$ :

$$p \wedge a = 1 \Rightarrow a^{p-1} \equiv 1 \ [p]$$

> **Remarques.**
• La réciproque du petit théorème de Fermat n'est pas vraie. Autrement dit, si $a^{p-1} \equiv 1 \ [p]$, alors l'entier $p$ n'est pas nécessairement premier. A titre d'exemple, le nombre $p = 341 = 31 \times 11$ n'est pas premier, or, il divise $2^{341} - 2$ car :

$$2^{341} - 2 = 2 \left( 2^{340} - 1 \right) = 2 \left( \left( 2^{10} \right)^{34} - 1 \right) = 2 \times \left( 2^{10} - 1 \right) \sum_{k=0}^{31} 2^{10k} = 2 \times 3 \times 341 \times \sum_{k=0}^{31} 2^{10k}$$

• Le petit théorème de Fermat permet de calculer le reste de n'importe quel entier assez grand modulo un nombre premier positif $p$.

> **Exemples.**
1) Déterminons le reste de la division euclidienne de nombre $2018^{2011}$ par 11 :

On a $2018 \equiv 5 \ [11]$, donc $2018^{2011} \equiv 5^{2011} \ [11]$. Puisque 11 est un nombre premier positif et $5 \wedge 11 = 1$, alors, selon le petit théorème de Fermat, $5^{10} \equiv 1 \ [11]$, d'où : $\left( 5^{10} \right)^{201} \times 5 \equiv 5 \ [11]$, et alors $5^{2011} \equiv 5 \ [11]$. Par suite, $2018^{2011} \equiv 5 \ [11]$, et comme $0 \le 5 < 11$ alors 5 est le reste demandé.

2) Soit $p$ un nombre premier différent de 7, et $n$ un entier naturel. Montrons que : $7^{n+p} - 7^{n+1} \equiv 0 \ [p]$.

posons : $a_n = 7^{n+p} - 7^{n+1}$. On a : $a_n = 7^{n+1} \left( 7^{p-1} - 1 \right)$.

Puisque $p \neq 7$ et $p$ est un nombre premier, alors, d'après le petit théorème de Fermat : $7^{p-1} - 1 \equiv 0 \ [p]$.

Il s'ensuit donc : $7^{n+1} \left( 7^{p-1} - 1 \right) \equiv 0 \ [p]$, c'est-à-dire : $7^{n+p} - 7^{n+1} \equiv 0 \ [p]$

3) Soit $n$ un entier supérieur ou égal à 2. Montrons que $n^5 \equiv n \ [30]$ :

Puisque 5 est un nombre premier positif, alors, d'après le petit théorème de Fermat : $n^5 \equiv n \ [5]$.

d'autre part, on a : $n^5 - n = n \left( n^4 - 1 \right) = n \left( n^2 - 1 \right) \left( n^2 + 1 \right) = \left( n^3 - n \right) \left( n^2 + 1 \right)$

Puisque 3 est un nombre premier positif, alors, d'après le petit théorème de Fermat : $n^3 \equiv n \ [3]$. Donc :

$\left( n^3 - n \right) \left( n^2 + 1 \right) \equiv 0 \ [3]$, c'est-à-dire : $n^5 - n \equiv 0 \ [3]$, donc : $n^5 \equiv n \ [3]$.

Puisque $n$ et $n^5$ ont la même parité, alors : $n^5 \equiv n \ [2]$.

En résumé : $2 \mid n^5 - n$ et $3 \mid n^5 - n$ et $5 \mid n^5 - n$

Puisque $2 \wedge 3 = 1$ alors $6 \mid n^5 - n$, et comme $6 \wedge 5 = 1$ alors $30 \mid n^5 - n$, c'est-à-dire : $n^5 \equiv n \ [30]$.

> **Applications.**
1. Montrer que pour tout $ n \in \mathbb{N} $: $ 12^{12n+1} + 1 \equiv 0 $ [13] et $ 10^{6n+4} + 3 \equiv 0 $ [7]
2. Déterminer le reste de la division euclidienne de $5^{38}$ par 11.
3. Déterminer l'ensemble des entiers naturels $ n $ pour lesquels: 3 divise le nombre $ 45671^n + 11569^n $.

#### 2.3. DÉCOMPOSITION EN PRODUIT DE FACTEURS PREMIERS

> **Théorème 15.**
Tout élément de $\mathbb{Z}^* - \{1; -1\}$ admet une décomposition en produit de nombres premiers, unique à l'ordre près des facteurs. Autrement dit, si $n \in \mathbb{Z}^* - \{1; -1\}$, il existe $N \in \mathbb{N}^*$, $\varepsilon \in \{-1; 1\}$, des nombres premiers deux à deux distincts $p_1, p_2, ..., p_N$, et des entiers $\alpha_1, \alpha_2, ..., \alpha_N$ de $\mathbb{N}^*$ tels que :

$$n = \varepsilon . p_1^{\alpha_1} . p_2^{\alpha_2} ... p_N^{\alpha_N}$$

Ce théorème est connu sous le nom « Théorème fondamental de l'arithmétique ».

> **Exemples.**
Décomposition de nombre 840 en produit de facteurs premiers :

$$840 = 2^3 \times 3 \times 5 \times 7$$

De même, en suivant la technique ci-contre, on trouve :

$$\begin{array}{l} 2073456 = 2^4 \times 3^2 \times 7 \times 11^2 \times 17 \\ -1950 = -2 \times 3 \times 5^2 \times 13 \\ -4096 = -2^{12} \end{array}$$

|  840 | 2  |
| --- | --- |
|  420 | 2  |
|  210 | 2  |
|  105 | 3  |
|  35 | 5  |
|  7 | 7  |
|  1 |   |

> **Applications.**
1. Décomposer en produit de facteurs premiers le nombre: $ a = 6^6 + 1 $
2. Décomposer en produit de facteurs premiers les nombres suivants:

1001 ; 4199 ; 10000 ; -1032 ; 111333 ; -102960

3. Soit $ n \in \mathbb{N}^* $. Décomposer en produit de facteurs premiers le nombre: $ N = 100^{2n} $.
4. Soit $ a $ et $ b $ deux entiers supérieurs ou égales à 2 et premiers entre eux.

Montrer l'équivalence suivante : $(ab$ est un carré parfait) $\Leftrightarrow (a$ et $b$ sont des carrés parfaits).

#### 2.4. Applications de la décomposition en produit de facteurs premiers
> **Théorème 16.**
Soit $n \in \mathbb{Z}^* - \{1; -1\}$ et sa décomposition $n = \varepsilon . p_1^{\alpha_1} . p_2^{\alpha_2} ... p_N^{\alpha_N}$ en produit de facteurs premiers.

• Les diviseurs de $n$ sont les entiers relatifs :

$$d = \varepsilon^*. p_1^{\gamma_1} . p_2^{\gamma_2} ... p_N^{\gamma_N} \quad \text{avec} \quad \forall k \in \{1; 2; ...; N\} \quad 0 \le \gamma_k \le \alpha_k \quad \text{et} \quad \varepsilon' \in \{-1; 1\}$$

• Le nombre de diviseurs positifs de $n$ est : $(1 + \alpha_1)(1 + \alpha_2)...(1 + \alpha_n)$

> **Exemples.**
1) Si $p$ est un nombre premier et $\alpha \in \mathbb{N}^*$, alors le nombre de diviseurs positifs de $p^\alpha$ est $1 + \alpha$.

Ces diviseurs sont : $1 \quad ; \quad p \quad ; \quad p^2 \quad ; \quad \dots \quad ; \quad p^\alpha$ (leur nombre est donc $1 + \alpha$)

2) Soit $p$ et $q$ deux nombres premiers distincts. Le nombre de diviseurs positifs de nombre $n = p^2 q^3$ est $(1 + 2)(1 + 3) = 12$. Ces diviseurs sont :

$$1 \quad ; \quad p \quad ; \quad p^2 \quad ; \quad q \quad ; \quad q^2 \quad ; \quad q^3 \quad ; \quad pq \quad ; \quad p^2 q \quad ; \quad pq^2 \quad ; \quad p^2 q^2 \quad ; \quad pq^3 \quad ; \quad p^2 q^3$$

3) On considère le nombre $n = 5 \times 7^2 \times 13$.

Le nombre de diviseurs positifs de $n$ est $2 \times 3 \times 2 = 12$ (citer ces diviseurs).

> **Applications.**
1. Déterminer le nombre de diviseur de nombre $ n = 3600 $.
2. On considère le nombre $a = p^2 q^5$ avec $p$ et $q$ deux nombres premiers distincts.

a) Donner tous les diviseurs de $a$
b) Déterminer la somme de tous les diviseurs positifs de $a$

3. Montrer l'équivalence suivante : $p \in \mathbb{P} \iff$ la somme des diviseurs de $p$ est $1 + p$.

### 3. L'ensemble $\mathbb{Z}/n\mathbb{Z}$
#### 3.1. CLASSES D'ÉQUIVALENCE

> **Définition 7.**
Soit $n$ un élément de $\mathbb{N}^*$.

L'ensemble des entiers relatifs qui ont le même reste $r$ de la division euclidienne par $n$ est appelé la classe d'équivalence de $r$, et on la note $\overline{r}$. C'est la classe d'équivalence de $r$ modulo $n$ dans $\mathbb{Z}$.
- Généralisation: Soit $ a \in \mathbb{Z} $ et $ n \in \mathbb{N}^* $.

La classe d'équivalence de $a$ modulo $n$ est l'ensemble défini par :

$$\overline{a} = \{x \in \mathbb{Z} \mid x \equiv a \, [n]\} = \{a + kn \mid k \in \mathbb{Z}\}$$

> **Exemples.**
1) Si $n = 2$ alors : $\overline{0} = \{x \in \mathbb{Z} \mid x \equiv 0 \, [2]\} = \{2k \mid k \in \mathbb{Z}\}$ et $\overline{1} = \{x \in \mathbb{Z} \mid x \equiv 1 \, [2]\} = \{2k + 1 \mid k \in \mathbb{Z}\}$

On voit bien que $\overline{0}$ est l'ensemble des nombres pairs, tandis que $\overline{1}$ est l'ensemble des nombres impairs.

Remarquons enfin que pour $n = 2$ : $\mathbb{Z} = \overline{0} \cup \overline{1}$

2) Si $n = 3$ alors : $\overline{0} = \{x \in \mathbb{Z} \mid x \equiv 0 \, [3]\} = \{3k \mid k \in \mathbb{Z}\}$ et $\overline{1} = \{x \in \mathbb{Z} \mid x \equiv 1 \, [3]\} = \{3k + 1 \mid k \in \mathbb{Z}\}$

et $\overline{2} = \{x \in \mathbb{Z} \mid x \equiv 2 \, [3]\} = \{3k + 2 \mid k \in \mathbb{Z}\}$. De plus, on a pour : $\mathbb{Z} = \overline{0} \cup \overline{1} \cup \overline{2}$.

> **Applications.**
Déterminer la classe d'équivalence modulo 12 de chacun des nombres : 116 ; 1979 ; 2018.

> **Proposition 8.**
Soit n un entier naturel non nul.

Pour tout x ∈ ℤ, on désigne par x̄ la classe d'équivalence de x modulo n. Alors :

1) $(\forall a\in \mathbb{Z})$ $\left(\exists !r\in \{0;1,\dots ,n - 1\}\right)\overline{a} = \overline{r}.$
2) $\operatorname{Si} 0 \leq r < n$ et $0 \leq r' < n$ alors: a) $\overline{r} = \overline{r'} \Leftrightarrow r = r'$; b) $r \neq r' \Leftrightarrow \overline{r} \cap \overline{r'} = \emptyset$
3) $(\forall x \in \mathbb{Z})$ ($\exists! r \in \{0;1;\ldots;n-1\}$) $x \in \overline{r}$. (r étant le reste de la division euclidienne de $x$ par $n$)
4) $\mathbb{Z} = \overline{0}\cup \overline{1}\cup \overline{2}\cup \ldots \cup \overline{n - 1}.$
5) $\mathbb{Z}/n\mathbb{Z} = \{\overline{0};\overline{1};\overline{2};\dots ;\overline{n - 1}\}$ et card $(\mathbb{Z}/n\mathbb{Z}) = n$

> **Exemples.**
1) On considère l'ensemble $\mathbb{Z}/2\mathbb{Z}$ :

On a : $\mathbb{Z}/2\mathbb{Z}$ = {0; 1} avec 0̄ = {2k \mid k ∈ ℤ} et 1̄ = {2k + 1 \mid k ∈ ℤ}.

On a : 4̄ = 0̄ = 8̄ = 20̄ = 2018 et 13̄ = 1̄ = 5̄ = 17̄ = 2019

2) On considère l'ensemble $\mathbb{Z}/3\mathbb{Z}$ :

On a : $\mathbb{Z}/3\mathbb{Z}$ = {0̄; 1̄; 2̄} avec 0̄ = {3k \mid k ∈ ℤ} et 1̄ = {3k + 1 \mid k ∈ ℤ} et 2̄ = {3k + 2 \mid k ∈ ℤ}

On a : 0̄ = 3̄ = 66̄ = 2016 et 1̄ = 4̄ = 7̄ = 2017 et 2̄ = 8̄ = 83̄ = 2018

#### 3.2. Opérations dans l'ensemble $\mathbb{Z}/n\mathbb{Z}$

> **INTRODUCTION.**
Soit x et y deux éléments de ℤ, et n ∈ ℕ*.

Soit r le reste de la division euclidienne de x par n, et r' le reste de la division euclidienne de y par n.

On a : { x ∈ r̄ ⇔ x ≡ r [n] , donc : x + y ≡ r + r' [n], c'est-à-dire : x̄ + y = r̄ + r'.

On a x + y ∈ r̄ + r' et on écrit alors : r̄ + r' = r̄ + r'.

On a : { x ∈ r̄ ⇔ x ≡ r [n] , donc : xy ≡ rr' [n], c'est-à-dire : xȳ = rr'.

On a xy ∈ rr' et on écrit alors : rr' = r̄ × r'.

Par suite, on peut donner la définition suivante :

> **Définition 8.**
Soit n un élément de N*.

- On définit l'addition dans $\mathbb{Z}/n\mathbb{Z}$ comme suit: Pour tous $\overline{x}$ et $\overline{y}$ de $\mathbb{Z}/n\mathbb{Z}$, $\overline{x} + \overline{y} = \overline{x + y}$.
- On définit la multiplication dans $\mathbb{Z}/n\mathbb{Z}$ comme suit: Pour tous $\overline{x}$ et $\overline{y}$ de $\mathbb{Z}/n\mathbb{Z}$, $\overline{x} \times \overline{y} = \overline{x \times y}$.

> **Exemples.**
1) On a dans l'ensemble $\mathbb{Z}/6\mathbb{Z}$ :

$$\overline{4} + \overline{2} = \overline{6} = \overline{0} \quad ; \quad \overline{5} \times \overline{4} = \overline{20} = \overline{2} \quad ; \quad \overline{5}^2 = \overline{25} = \overline{1} \quad ; \quad \overline{4} \times \overline{3} = \overline{12} = \overline{0}$$

2) Résolvons dans $\mathbb{Z}/7\mathbb{Z}$ les équations suivantes :

$$\overline{2}x = \overline{1} \quad ; \quad \overline{2}x = \overline{3} \quad ; \quad x^5 = \overline{1} \quad ; \quad x^2 - \overline{3}x + \overline{2} = \overline{0}$$

On a : $\mathbb{Z}/7\mathbb{Z}$ = {0; 1; 2; 3; 4; 5; 6}. On obtient alors le tableau suivant :

|  x | 0̅ | 1̅ | 2̅ | 3̅ | 4̅ | 5̅ | 6̅  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  2̅x | 0̅ | 2̅ | 4̅ | 6̅ | 1̅ | 3̅ | 5̅  |
|  x⁵ | 0̅ | 1̅ | 4̅ | 5̅ | 2̅ | 3̅ | 6̅  |
|  x² - 3̅x + 2̅ | 2̅ | 0̅ | 0̅ | 2̅ | 6̅ | 5̅ | 6̅  |

À partir de tableau ci-dessus, on en déduit que :

> L'ensemble des solutions de l'équation $\overline{2} x = \overline{1}$ est: $S = \{\overline{4}\}$.
> L'ensemble des solutions de l'équation $\overline{2} x = \overline{3}$ est: $S = \{\overline{5}\}$.
> L'ensemble des solutions de l'équation $ x^5 = \overline{1} $ est: $ S = \{\overline{1}\} $.
> L'ensemble des solutions de l'équation $ x^2 - \overline{3}x + \overline{2} = \overline{0} $ est: $ S = \{\overline{1};\overline{2}\} $.

> **Applications.**
1. Résoudre dans \mathbb{Z}/6\mathbb{Z} les équations suivantes :

$$\overline{4}x = \overline{2} \quad ; \quad \overline{3}x^2 + x + \overline{1} = \overline{0} \quad ; \quad (\overline{4}x - \overline{1})(\overline{2}x + \overline{3}) = \overline{0} \quad ; \quad x^3 = x$$

> **Théorème 17.**
Soit p un nombre premier positif. Alors :

1) $\left(\forall \overline{x} \in \mathbb{Z}/p\mathbb{Z} - \{\overline{0}\}\right)\left(\exists \overline{y} \in \mathbb{Z}/p\mathbb{Z} - \{\overline{0}\}\right)\overline{x} \times \overline{y} = \overline{1}$.
2) $\left(\forall (\overline{x};\overline{y})\in (\mathbb{Z}/p\mathbb{Z})^2\right)$ $\left[\overline{x}\times \overline{y} = \overline{0}\right.\Leftrightarrow \left(\overline{x} = \overline{0}\right.$ ou $\overline{y} = \overline{0})$

> **Preuve.**
1) On pose $E = \mathbb{Z}/p\mathbb{Z} - \{\overline{0}\}$. On a: $\overline{x} \in E \Leftrightarrow \overline{x} \in \{\overline{1}; \overline{2}; \dots; \overline{p-1}\}$; par conséquent:

$$\overline{x} \in E \Leftrightarrow (\exists \alpha \in \{1; 2; \dots; p-1\}) \quad \overline{x} = \overline{\alpha}$$

Puisque $p$ est premier et ne divise aucun élément de l'ensemble $\{1; 2; \dots; p-1\}$, alors $p \wedge \alpha = 1$
D'après le théorème de Bezout, il existe $(u; y) \in \mathbb{Z}^2$ tel que $pu + \alpha y = 1$, et donc $\overline{pu + \alpha y} = \overline{1}$, ce qui donne $\overline{\alpha} \times \overline{y} = \overline{1}$, c'est-à-dire $\overline{x} \times \overline{y} = \overline{1}$.

Par suite: $(\forall \overline{x} \in \mathbb{Z}/p\mathbb{Z} - \{\overline{0}\}) (\exists \overline{y} \in \mathbb{Z}/p\mathbb{Z} - \{\overline{0}\})$; $\overline{x} \times \overline{y} = \overline{1}$

2) Soit $(\overline{x}; \overline{y}) \in (\mathbb{Z}/p\mathbb{Z})^2$. L'égalité $\overline{x} \times \overline{y} = \overline{0}$ signifie que $xy \equiv 0[p]$, c'est-à-dire, que $p \mid xy$. Comme $p$ est premier, alors: $p \mid xy \Leftrightarrow (p \mid x \text{ ou } p \mid y) \Leftrightarrow (\overline{x} = \overline{0} \text{ ou } \overline{y} = \overline{0})$.

Par suite: $(\forall (\overline{x}; \overline{y}) \in (\mathbb{Z}/p\mathbb{Z})^2) [\overline{x} \times \overline{y} = \overline{0} \Leftrightarrow (\overline{x} = \overline{0} \text{ ou } \overline{y} = \overline{0})]$

#### 3.3. APPLICATIONS À LA CRYPTOGRAPHIE

Voici une application du théorème de Fermat. Il s'agit d'une méthode de codage très utilisée en cryptographie, la méthode RSA (due à Rivest, Shamir et Adleman). Soient $p$ et $q$ deux nombres premiers distincts, $N = pq$ et $c \in \mathbb{N}^*$
fixé premier avec $(p-1)(q-1)$.

L'expéditeur du message ne connaît que $N$ et $c$ : la « Clé publique », mais ni $p$ ni $q$. Le message à

transmettre est initialement constitué de « lettres » ou, plus généralement, de « caractères ». On le transforme en une liste de « chiffres » en remplaçant, dans le premier cas, chaque lettre par son rang dans l'alphabet et, dans le second, chaque caractère par le nombre qui le représente dans un certain encodage par exemple en utilisant le codage ASCII (American Standard Code for Information Interchange; versée étendue 8 bits) par un entier entre 0 et $255 = 2^8 - 1$. On découpe ensuite le message ainsi transformé en « tranches » de même longueur représentant chacune un nombre entier $x < N$, puis l'on remplace chaque tranche par le $\overline{x} \in \mathbb{Z}/N\mathbb{Z}$ correspondant. On code chaque $\overline{x}$ en le remplaçant par $\overline{y} = \overline{x}^c$ et l'on transmet la liste des $y \in \{0; 1; \dots; N-1\}$ correspondants.

Comment le destinataire du message peut-il décoder, c'est-à-dire retrouver $\overline{x}$ à partir de $\overline{y}$ en connaissant $p$ et $q$? Voici la réponse. D'après le théorème de Bezout, il existe deux entiers $d$ et $k$ tels que:

$cd - k(p-1)(q-1) = 1$; on peut de plus supposer $k \ge 1$, d'où $d \ge 1$. Alors $\overline{x} = \overline{y}^d$. En effet, il s'agit de

vérifier que $x^{cd} \equiv x[pq]$, ou encore que $pq$ divise $x^{cd} - x$. Comme $pq = p \vee q$, il suffit de voir que $x^{cd} - x$ est multiple de $p$ et $q$. Par symétrie, il suffit de montrer que $x^{cd} - x \equiv 0[p]$. C'est clair si $p \mid x$, auquel cas $p \mid x^{cd}$. Si $p$ ne divise pas $x$, le théorème de Fermat donne $x^{p-1} \equiv 1[p]$. Puisque :

$x^{cd} = x^{1+k(p-1)(q-1)} = x[x^{p-1}]^{k(q-1)}$, alors $x^{cd} \equiv x[p]$. Ainsi, pour récupérer $\overline{x}$, il suffit d'élever $\overline{y}$ à la puissance $d$.

En pratique, on choisit pour $p$ et $q$ deux « grands » nombres premiers distincts (de quelques centaines de chiffres chacun). Quel est l'intérêt ?

Le point capital est que, depuis un peu plus d'une vingtaine d'années, grâce à des méthodes que nous ne pouvons pas détailler ici, on sait fabriquer à la demande des nombres premiers $p$ et $q$ de la taille requise. En revanche, il se trouve que, dans l'état actuel, on ne peut pas factoriser un entier de taille de $N = pq$. Les entiers $N$ et $c$ constituent la « clé publique », ils peuvent sans inconvénient être connus de tous, et permettant de coder les messages.

Pour décoder il faut avoir $d$, ce qui revient, comme nous l'avons vu, à connaître le nombre suivant $(p-1)(q-1) = N - p - q + 1$, c'est-à-dire $p$ ou $q$. L'entier $d$, appelé « clé secrète », ne peut donc pas être trouvé, même si $N$ et $c$ sont connus, ainsi le message initial $\overline{x}$ et le message codé $\overline{y}$. C'est l'avantage essentiel de cette méthode de codage, dite à clé publique.

Voici un exemple numérique : $N := 415439 = pq$, où $p := 233$ et $q := 1783$. Alors :

$$(p-1)(q-1) = 232 \times 1732 = 2^4 \times 3^4 \times 11 \times 29$$

Choisissons $c := 113$ et $q := 336593$.

Il est facile de vérifier que $cd \equiv 1[(p-1)(q-1)]$. Le mot « eau » est codé par $\overline{x} := \overline{50121}$ (les numéros des lettres $e, a$ et $u$ sont 5,1 et 21 respectivement). On vérifie que $\overline{x}^c = \overline{220914}$.

### 4. Systèmes de numération
#### 4.1. REPRÉSENTATION D'UN ENTIER NATUREL DANS UN SYSTÈME DE NUMÉRATION

La numération est la science qui traite de la dénomination et de la représentation graphique des nombres. Le problème posé est de représenter tous les entiers naturels et les décimaux à l'aide d'un ensemble fini de symboles (appelés des chiffres) rassemblés selon des règles (le code) pour former un nombre.

Il est important de connaître les différents systèmes car ils sont utilisés en informatique et plus généralement dans le traitement de l'information. Selon le contexte il peut être plus judicieux d'utiliser un code plutôt qu'un autre, il faut donc savoir comment passer de l'un à l'autre.

> **Définition 9.**
La base $b$ d'un système de numération représente le nombre d'unités d'un certain rang, nécessaire pour former une unité de rang immédiatement supérieur.

L'ensemble $B_k = \{0; 1; 2; \dots; b - 1\}$, soit $b$ caractères (chiffres en base 10) quantifie le nombre d'unités d'un rang quelconque.

> **Exemples.**
1) Le Système Décimal :

C'est le système de représentation naturel connu par tout le monde. C'est le système de base 10 que nous utilisons tous les jours. il comprend dix symboles différents : $0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9$.

Prenons l'exemple du nombre $n = 2356$ :

Par convention nous l'écrivons $n = \overline{2356}_{(10)}$. L'indice « 10 » indique la base dans laquelle le nombre est écrit. Nous verrons plus tard que cela a son importance.

Ce nombre $n$ peut être écrit sous la forme suivante :

$$n = 2 \times 10^3 + 3 \times 10^2 + 5 \times 10^1 + 6 \times 10^0 = 2000 + 300 + 50 + 6 = 2356$$

Cette méthode de décomposition sera utilisée pour toutes les autres bases.

2) Le Système Binaire :

De nos jours, il est possible de compter avec une arithmétique ne possédant que deux chiffres 0 et 1.

L'informatique et l'électronique ont employé cette arithmétique dans des domaines divers. En effet,

l'électronique numérique est en train de prendre la place de l'électronique analogique :

l'enregistrement de la musique, le téléphone, la transmission des images de télévision, ...etc.

Un système de numération utilisant la base 2 s'adapte à toutes les technologies. En effet, nous ne disposons plus alors que de 2 caractères pour écrire les nombres dont nous avons besoin, 0 et 1.

Tout système pouvant se présenter dans deux états distincts pourra être adapté aux techniques binaires.

Exemples :

$$45 = 2^5 \times 1 + 2^4 \times 0 + 2^3 \times 1 + 2^2 \times 1 + 2 \times 0 + 1 = \overline{101101}_{(2)}$$

$$230 = 2^7 \times 1 + 2^6 \times 1 + 2^5 \times 1 + 2^4 \times 0 + 2^3 \times 0 + 2^2 \times 1 + 2 \times 1 = \overline{11100110}_{(2)}$$

On va voir ultérieurement comment obtenir la représentation binaire d'un entier.

Un peu de vocabulaire :

- Chaque élément binaire pouvant prendre la valeur 0 ou 1 est appelé un digit binaire (Binary digit: BIT)
- Une suite de 4 bits est appelée quartet
- Une suite de 8 bits est appelée octet.

Depuis 1998, l'organisme international IEC (International Electrotechnical Commission), a défini les mesures suivantes :

$$1 \text{Ko} = 1024 \text{octets} (2^{18}) \quad ; \quad 1 \text{Mo} = 1000 \text{Ko} \quad ; \quad 1 \text{Go} = 1000 \text{Mo} \quad ; \quad 1 \text{To} = 1000 \text{Go}$$

Mais de nombreux logiciels, parfois même certains systèmes d'exploitation, utilisent toujours la notation antérieure à 1998 pour laquelle $1 \text{Ko} = 1024 \text{octets} (2^{18} \text{bits})$.

> **Théorème 18.**
Soit $b$ un entier supérieur ou égal à 2.

Tout entier naturel non nul $n$ peut s'écrire de manière unique sous la forme :

$$n = a_m b^m + a_{m-1} b^{m-1} + \dots + a_2 b^2 + a_1 b + a_0$$

où $a_0, a_1, \dots, a_m$ sont des entiers tels que : $a_m \neq 0$ et $0 \leq a_i \leq b - 1$ pour tout $i \in \{0; 1; 2; \dots; m\}$.

On écrit : $n = \overline{a_m a_{m-1} \dots a_1 a_0}_{(b)}$, et on dit qu'on a représenté le nombre $n$ dans le système de numération de base $b$.

> **Preuve.**
En effectuant la division euclidienne de $n$ par $b$, on peut trouver deux entiers naturels $q_1$ et $a_0$ vérifiant la relation : $n = q_1 b + a_0$ et $0 \leq a_0 < b$

Si $q_1 \geq b$, alors on utilise encore une fois la division euclidienne pour obtenir deux entiers naturels $q_2$ et $a_1$ vérifiant la relation : $q_1 = q_2 b + a_1$ et $0 \leq a_1 < b$. En remplaçant $q_1$ dans l'égalité précédente, on obtient :

$$n = q_1 b + a_0 = (q_2 b + a_1) b + a_0 = q_2 b^2 + a_1 b + a_0$$

et en suivant le même processus des divisions successives, on va obtenir à l'étape $m$ deux entiers naturels $q_m$ et $a_{m-1}$ tels que : $q_{m-1} = q_m b + a_{m-1}$ et $0 \leq a_{m-1} \leq b$.

Et puisque $q_1 > q_2 > \dots > q_m$ (en remarquant que la suite $(q_i)_{i \in \mathbb{N}^*}$ est positive et strictement décroissante), alors il existe $m \in \mathbb{N}^*$ tel que $q_m < b$. Dans ce cas, on s'arrête en posant $a_m = q_m$ afin d'obtenir l'égalité :

$$n = a_m b^m + a_{m-1} b^{m-1} + \dots + a_2 b^2 + a_1 b + a_0$$

L'unicité de cette écriture provient de celle du couple $(q_i; a_i)$.

Méthode de représentation d'un entier naturel non nul $n$ dans un système de numération de base $b$ :

En utilisant la division euclidienne par $b$,

on obtient ce qui suit :

$$\begin{cases} n = q_0 b + a_0 \quad ; \quad 0 \leq a_0 < b \\ q_0 = q_1 b + a_1 \quad ; \quad 0 \leq a_1 < b \\ q_1 = q_2 b + a_2 \quad ; \quad 0 \leq a_2 < b \\ \vdots \quad \vdots \quad \vdots \\ q_{m-1} = a_m \quad ; \quad 0 \leq a_m < b \end{cases}$$

Par conséquent :

$$n = \overline{a_m a_{m-1} \dots a_1 a_0}_{(b)}$$

> **Exemples.**
1) Représentation du nombre 529 en système de base 8 :

Donc : $$529 = \overline{1021}_{(8)}$$

2) Représentation du nombre 496 en système de base 7 :
En suivant la même démarche, on obtient :

$$496 = \overline{1306}_{(7)}$$

3) Représentation du nombre 37 en système binaire :
En suivant la même démarche, on obtient : $$37 = \overline{100101}_{(2)}$$

> **Applications.**
1. Convertir en binaire les nombres suivants :

97 ; 397 ; 133 ; 110 ; 1652

2. Convertir en numération décimale les nombres dont l'écriture en binaire est :

$$\overline{101}_{(2)} ; \overline{1101110}_{(2)} ; \overline{10011011}_{(2)} ; \overline{110010110}_{(2)} ; \overline{101110011}_{(2)}$$

#### 4.2. COMPARAISON DE DEUX NOMBRES PRÉSENTÉS
DANS LE MÊME SYSTÈME DE NUMÉRATION

> **Théorème 19.**
Soit x et y deux entiers naturels représentés dans le même système de numération par :

$$x = \overline{a_n a_{n-1} \dots a_0}_{(b)} \quad \text{et} \quad y = \overline{c_m c_{m-1} \dots c_0}_{(b)}$$

1) Si $ m > n $ alors $ y > x $.
2) Si $ m = n $ et $ c_{n} = a_{n} $ et $ c_{n-1} = a_{n-1} $ et ... et $ c_{i+1} = a_{i+1} $ et $ c_{i} \neq a_{i} $, alors, l'ordre de $ x $ et $ y $ est celui de $ c_{i} $ et $ a_{i} $. En particulier, si $ c_{i} > a_{i} $ alors $ y > x $.

> **Exemples.**
1) Dans le système de numération de base 7, on pose : $$x = \overline{12651}_{(7)}$$ et $$y = \overline{5416}_{(7)}$$

On a le nombre de chiffres formant le nombre x est 5, tandis que le nombre de chiffres formant le nombre y est 4. Comme 5 > 4 alors x > y.

2) On a: $\overline{1345}_{(9)} > \overline{427}_{(9)}$ et $\overline{435}_{(6)} > \overline{432}_{(6)}$.
3) Dans le système de numération de la base 12, le chiffre 10 est noté $\alpha$ et le chiffre 11 est noté $\beta$.

Par exemple :

$$2278 = 1 \times 12^3 + 3 \times 12^2 + 9 \times 12^1 + \alpha \times 12^0 = \overline{139\alpha}_{(12)} \quad \text{et} \quad \overline{71\alpha9}_{(12)} > \overline{9\beta2}_{(12)}$$

#### 4.3. ADDITION ET MULTIPLICATION DE DEUX NOMBRES
PRÉSENTÉS DANS LE MÊME SYSTÈME DE NUMÉRATION

• On considère les deux nombres suivants : $x = \overline{5312}_{(6)}$ et $y = \overline{214}_{(6)}$

On veut représenter le nombre $x + y$ en base 6.

On a : $x = 5 \times 6^3 + 3 \times 6^2 + 6 + 2$ et $y = 2 \times 6^2 + 6 + 4$

Par conséquent : $x + y = 5 \times 6^3 + 5 \times 6^2 + 3 \times 6 = x = \overline{5530}_{(6)}$.

On peut représenter le nombre $x + y$ directement en base 6 en utilisant
la méthode vue au primaire « l'addition par retenue » comme suit :

• On considère les deux nombres suivants : $a = \overline{432}_{(5)}$ et $b = \overline{134}_{(5)}$

On veut représenter le nombre $a \times b$ en base 5.

On a : $a = 4 \times 5^2 + 3 \times 5 + 2$ et $b = 5^2 + 3 \times 5 + 4$

Par conséquent :

$$\begin{array}{l} a \times b = (4 \times 5^2 + 3 \times 5 + 2)(5^2 + 3 \times 5 + 4) \\ = 4 \times 5^4 + 3 \times 5^4 + 5^4 + 2 \times 5^2 + 3 \times 5^2 + 3 \times 5 + 5 + 3 \\ = 5^5 + 3 \times 5^4 + 5^3 + 4 \times 5 + 3 \\ = \overline{131043}_{(5)} \end{array}$$

Tout comme l'addition, on peut représenter le nombre $a \times b$ directement dans en
base 5 en utilisant la méthode de « la multiplication par retenue » comme suit :

#### 4.4. CRITÈRES DE DIVISIBILITÉ SUR LES NOMBRES
3 ; 4 ; 5 ; 9 ; 11 ; 25 DANS LE SYSTÈME DÉCIMAL

> **Proposition 9.**
Soit $x \in \mathbb{N}$ tel que $x = \overline{a_n a_{n-1} \dots a_1 a_0}_{(10)} = a_n \times 10^n + a_{n-1} \times 10^{n-1} + \dots + a_1 \times 10 + a_0$ avec :

$$a_n \neq 0 \quad \text{et} \quad 0 \leq a_i < 10 \text{ pour tout } i \in \{0; 1; \dots; n\}$$

On a alors les équivalences suivantes :

1) $x \equiv 0[5] \Leftrightarrow (a_0 = 5 \text{ ou } a_0 = 5)$

4) $x \equiv 0[3] \Leftrightarrow \sum_{i=0}^{n} a_i \equiv 0[3]$

2) $x \equiv 0[25] \Leftrightarrow \overline{a_1 a_0}_{(10)} \equiv 0[25]$

5) $x \equiv 0[9] \Leftrightarrow \sum_{i=0}^{n} a_i \equiv 0[9]$

3) $x \equiv 0[4] \Leftrightarrow \overline{a_1 a_0}_{(10)} \equiv 0[4]$

6) $x \equiv 0[11] \Leftrightarrow \sum_{i=0}^{n} (-1)^i a_i \equiv 0[11]$

$$\begin{array}{l} \frac{\overline{5312}_{(6)}}{\overline{214}_{(6)}} \\ = \overline{5530}_{(6)} \end{array}$$

$$\begin{array}{l} \frac{\overline{432}_{(5)}}{\overline{134}_{(5)}} \\ + \frac{3333}{240 \cdot 1} \\ + \frac{432 \cdot \cdot}{\overline{131043}_{(5)}} \end{array}$$

## Méthodes

### A. PGCD et PPCM
Les questions suivantes sont indépendantes.

1) Calculer $\left(3^{123} - 5\right) \wedge 25$ et $\left(2^{443} + 7\right) \wedge 15$.
2) Soit $ a, b $ et $ c $ des éléments de $ \mathbb{N}^* $. Montrer que $ c \mid ab \Rightarrow c \mid (a \wedge c)(b \wedge c) $.
3) Montrer que pour tout $(x,y)\in \mathbb{N}^{*2}$ .. $x\wedge y = 1\Leftrightarrow (x + y)\wedge (xy) = 1$
4) Soit $ n \in \mathbb{N}^* $. Calculer: $ (n^2 + n) \wedge (2n + 1) $ et $ (15n^2 + 8n + 6) \wedge (30n^2 + 21n + 13) $.
5) Trouver tous les couples d'entiers $(x,y)\in \mathbb{N}^2$ tels que: $(x\vee y) + 11(x\wedge y) = 203$
6) Soit $ m \in \mathbb{N}^* $ tel que $ 2^m + 1 $ soit premier. Montrer que $ m = 2^k $ avec $ k \in \mathbb{N} $.
7) Résoudre dans $\mathbb{N}^2$ les systèmes suivants:

$$\left\{ \begin{array}{l} x \wedge y = 18 \\ x \vee y = 540 \end{array} \right. ; \quad \left\{ \begin{array}{l} x + y = 56 \\ x \vee y = 105 \end{array} \right. ; \quad \left\{ \begin{array}{l} x \wedge y = x - y \\ x \vee y = 72 \end{array} \right.$$

8) Trouver $n \in \mathbb{Z}$ tel que: $\frac{n^2 - 9}{n^2 - 5n + 4} \in \mathbb{Z}$.

> **SOLUTION.**
1) Calculons $(3^{123} - 5) \wedge 25$:

Posons $d = (3^{123} - 5) \wedge 25$. On a $d \mid 25$ donc $d \in \{1; 5; 25\}$. Or 5 ne divise pas $3^{123}$ (car sinon, on aura $5 \mid 3$ car 5 est premier). Par conséquent, $3^{123} - 5$ n'est pas divisible par 5. Ainsi: $(3^{123} - 5) \wedge 25 = 1$. Calculons $(2^{443} + 7) \wedge 15$:

Posons $d' = (2^{443} + 7) \wedge 15$. On a $d' \\mid 15$ donc $d' \in \{1; 3; 5; 15\}$. On a $2^2 \equiv 1$ [3] donc $2^{442} \equiv 1$ [3].

Cela donne $2^{443} \equiv 2$ [3] et $2^{443} + 7 \equiv 0$ [3] et par conséquent, $3 \mid 2^{443} + 7$.

De même: $2^4 \equiv 1$ [5] et $2^{440} \equiv 1$ [5]. Ceci donne $2^{443} \equiv 8$ [5] et $2^{443} + 7 \equiv 0$ [5]. Par Conséquent,

$5 \mid 2^{443} + 7$. Puisque 3 et 5 sont premiers entre eux, alors $15 \mid 2^{443} + 7$. Ainsi: $(2^{443} + 7) \wedge 15 = 15$.

2) Soit $a, b$ et $c$ des éléments de $\mathbb{N}^*$. Montrons que $c \mid ab \Rightarrow c \mid (a \wedge c)(b \wedge c)$:

Posons: $a = p_1^{\alpha_1} \cdot p_2^{\alpha_2} \dots p_r^{\alpha_r}$, $b = p_1^{\beta_1} \cdot p_2^{\beta_2} \dots p_r^{\beta_r}$ et $c = p_1^{\gamma_1} \cdot p_2^{\gamma_2} \dots p_r^{\gamma_r}$. Puisque $c \mid ab$, alors pour tout $i \in \{1, 2, \dots, r\}$: $\gamma_i \leq \alpha_i + \beta_i$. D'autre part, on sait que:

$$a \wedge c = p_1^{\min(\alpha_1; \gamma_1)} \cdot p_2^{\min(\alpha_2; \gamma_2)} \dots p_r^{\min(\alpha_r; \gamma_r)} \quad \text{et} \quad b \wedge c = p_1^{\min(\beta_1; \gamma_1)} \cdot p_2^{\min(\beta_2; \gamma_2)} \dots p_r^{\min(\beta_r; \gamma_r)}$$

Donc $c \mid (a \wedge c)(b \wedge c)$ si, et seulement si: $\gamma_i \leq \min(\alpha_i; \gamma_i) + \min(\beta_i; \gamma_i)$

On distingue alors deux cas:

- Si $\min (\alpha_{i};\gamma_{i}) = \gamma_{i}$ ou $\min (\beta_i;\gamma_i) = \gamma_i$ , alors le résultat est trivial.
- Sinon, on a bien $\min (\alpha_i; \gamma_i) + \min (\beta_i; \gamma_i) = \alpha_i + \beta_i$ et donc: $\gamma_i \leq \min (\alpha_i; \gamma_i) + \min (\beta_i; \gamma_i)$.

Conclusion : $$c \mid ab \Rightarrow c \mid (a \wedge c)(b \wedge c)$$

3) Montrons que pour tout $$(x; y) \in \mathbb{N}^*$$ : $$x \wedge y = 1 \Leftrightarrow (x + y) \wedge (xy) = 1$$

Supposons que $$x \wedge y = 1$$. Si $$p$$ est un diviseur premier commun à $$x + y$$ et $$xy$$, alors :

$$\left\{ \begin{array}{l} p \mid x + y \\ p \mid x y \end{array} \right. \Rightarrow \left\{ \begin{array}{l} p \mid x ^ {2} + x y \\ p \mid x y \\ p \mid x + y \end{array} \right. \Rightarrow \left\{ \begin{array}{l} p \mid x ^ {2} \\ p \mid x + y \end{array} \right. \Rightarrow \left\{ \begin{array}{l} p \mid x \\ p \mid x + y \end{array} \right. \Rightarrow \left\{ \begin{array}{l} p \mid x \\ p \mid y \end{array} \right.$$

Cela contredit l'hypothèse $$x \wedge y = 1$$. Donc $$(x + y) \wedge (xy) = 1$$.

Supposons que $$(x + y) \wedge (xy) = 1$$. Si $$d$$ est un diviseur commun à $$x$$ et $$y$$, alors ça serait aussi un diviseur commun à $$x + y$$ et $$xy$$, et ceci contredit l'hypothèse $$(x + y) \wedge (xy) = 1$$. D'où le résultat.

4) Soit $$n \in \mathbb{N}^*$$.

- Calculons $$(n^2 + n) \wedge (2n + 1)$$ : Soit $$d$$ un diviseur commun de $$n^2 + n$$ et $$2n + 1$$. On a alors :

$$\left\{ \begin{array}{l} d \mid n ^ {2} + n \\ d \mid 2 n + 1 \end{array} \right. \Rightarrow \left\{ \begin{array}{l} d \mid 2 n ^ {2} + 2 n \\ d \mid 2 n ^ {2} + n \\ d \mid 2 n + 1 \end{array} \right. \Rightarrow \left\{ \begin{array}{l} d \mid n \\ d \mid 2 n + 1 \end{array} \right. \Rightarrow \left\{ \begin{array}{l} d \mid 2 n \\ d \mid 2 n + 1 \end{array} \right. \Rightarrow d \mid 1 \Rightarrow d = 1$$

Ce qui montre que $$(n^2 + n) \wedge (2n + 1) = 1$$

- Calculons $$(15n^2 + 8n + 6) \wedge (30n^2 + 21n + 13)$$ :

Soit $$d$$ un diviseur commun de $$15n^2 + 8n + 6$$ et $$30n^2 + 21n + 13$$. On a alors :

$$\left\{ \begin{array}{l} d \mid 1 5 n ^ {2} + 8 n + 6 \\ d \mid 3 0 n ^ {2} + 2 1 n + 1 3 \end{array} \right. \Rightarrow \left\{ \begin{array}{l} d \mid 3 0 n ^ {2} + 1 6 n + 1 2 \\ d \mid 3 0 n ^ {2} + 2 1 n + 1 3 \\ d \mid 1 5 n ^ {2} + 8 n + 6 \end{array} \right. \Rightarrow \left\{ \begin{array}{l} d \mid 5 n + 1 \\ d \mid 1 5 n ^ {2} + 8 n + 6 \end{array} \right. \Rightarrow \left\{ \begin{array}{l} d \mid 5 n + 1 \\ d \mid 1 5 n ^ {2} + 3 n \\ d \mid 1 5 n ^ {2} + 8 n + 6 \end{array} \right. \Rightarrow \left\{ \begin{array}{l} d \mid 5 n + 1 \\ d \mid 5 n + 6 \end{array} \right.$$

Donc : $$\left\{ \begin{array}{l} d \mid 15n^2 + 8n + 6 \\ d \mid 30n^2 + 21n + 13 \end{array} \right. \Rightarrow \left\{ \begin{array}{l} d \mid 5n + 1 \\ d \mid 5 \end{array} \right. \Rightarrow \left\{ \begin{array}{l} d \mid 5n + 1 \\ d \mid 5n \end{array} \right. \Rightarrow d \mid 1 \Rightarrow d = 1$$

Par conséquent : $$(15n^2 + 8n + 6) \wedge (30n^2 + 21n + 13) = 1$$

5) Déterminons tous les couples d'entiers $$(x; y) \in \mathbb{N}^2$$ tels que : $$(x \vee y) + 11(x \wedge y) = 203$$

Posons $$d = x \wedge y$$. Ils existent alors des entiers naturels $$x'$$ et $$y'$$ tels que $$x = x'd$$ et $$y = y'd$$ avec $$x' \wedge y' = 1$$.

L'équation devient $$d(x'y' + 11) = 203 = 7 \times 29$$. On a donc $$d \in \{1; 7; 29; 203\}$$.

- 1er cas : $$d = 1$$

On a alors $$x'y' = 192 = 2^6 \times 3$$. Comme $$x' \wedge y' = 1$$ alors : $$(x'; y') \in \{(1; 192); (3; 64); (64; 3); (192; 1)\}$$ ;

ce qui donne $$(x; y) \in \{(1; 192); (3; 64); (64; 3); (192; 1)\}$$.

• 2ème cas : d = 7

On a alors x'y' = 18 = 2 × 3². Comme x' ∧ y' = 1 alors : (x', y') ∈ {(1;18); (9;2); (2;9); (18;1)}

Ce qui donne (x, y) ∈ {(7;126); (126;7); (14;63); (63;14)}

• 3ème cas : d = 29

On a alors x'y' = -4. Impossible car x' et y' sont des entiers naturels.

• 4ème cas : d = 203

On a alors x'y' = -10. Impossible car x' et y' sont des entiers naturels.

En définitive, les couples recherchés sont :

(7;126), (126;7), (14;63), (63;14), (1;192), (3;64), (64;3), (192;1)

6) Soit m ∈ ℕ* tel que 2^m + 1 soit premier. Montrons que m = 2^k avec k ∈ ℕ.

Supposons que l'entier m ne s'écrit pas sous la forme 2^k. Dans ce cas, il existe un couple (α; β) ∈ ℕ × ℕ* tel que m = 2^α × (2β + 1) et alors :

$$2^m + 1 = 2^{2^m \times (2\beta + 1)} + 1 = \left(2^{2^m}\right)^{2\beta + 1} + 1 = \left(2^{2^m}\right)^{1} + 1 = \left(2^{2^m}\right)^{2\beta} - \left(2^{2^m}\right)^{2\beta - 1} + \dots + 1$$

Ce qui montre que 2^{2^m} + 1 divise 2^m + 1. Ceci contredit l'hypothèse de primalité de 2^m + 1.

7) Résolvons les systèmes suivants :

• Le système { x ∧ y = 18; x ∨ y = 540 } : Posons x = 18x' et y = 18y' avec x' ∧ y' = 1. Le système devient :

{ x' ∧ y' = 1; x'y' = 30 } , Ce qui donne : (x'; y') ∈ {(30;1); (1;30); (15;2); (2;15); (5;6); (6;5)}

Par conséquent, l'ensemble solution du système est :

$$S = \{(540;18); (18;540); (270;36); (36;270); (180;54); (54;180); (108;90); (90;108)\}$$

• Le système { x + y = 56; x ∨ y = 105 } :

Posons d = x ∧ y. On a d \mid x et d \mid y, donc d \mid x + y et d \mid (x ∨ y), d'où d \mid (56 ∧ 105), c'est-à-dire d \mid 7. Deux cas peuvent se présenter :

• Si d = 1 alors le système devient : { x + y = 56; x, y = 105 } . Ce système n'a aucune solution dans ℕ².

• Si d = 7, on peut poser x = 7x' et y = 7y' avec x' ∧ y' = 1, et le système devient : { x' + y' = 8; x', y' = 15 } Ce système a pour solutions dans ℕ² : (3;5) et (5;3)

Par conséquent, l'ensemble solution du système est : S = {(21;35); (35;21)} • Le système { x ∧ y = x - y; x ∨ y = 72 } :

Posons x ∧ y = d, x = dx' et y = dy' avec x' ∧ y' = 1. Le système devient :

$$\left\{ \begin{array}{l} x' - y' = 1 \\ d x'y' = 72 \end{array} \right.$$ c'est-à-dire $$\left\{ \begin{array}{l} x' = y' + 1 \\ d y'(y' + 1) = 72 \end{array} \right.$$ Puisque $$y'(y' + 1) \mid 72$$ alors $$y' \in \{1; 2; 3; 8\}$$.

L'ensemble des solutions de système est : $$S = \{(72; 36); (36; 24); (24; 12); (9; 8)\}$$

8) Soit $$n \in \mathbb{Z}$$ tel que $$\frac{n^2 - 9}{n^2 - 5n + 4} \in \mathbb{Z}$$.

Puisque $$\frac{n^2 - 9}{n^2 - 5n + 4} = 1 + \frac{5n - 13}{n^2 - 5n + 4}$$ alors $$\frac{5n - 13}{n^2 - 5n + 4} \in \mathbb{Z}$$. Donc, si $$n \neq 1$$ et $$n \neq 4$$, alors :

$$(5n - 13) \wedge (n^2 - 5n + 4) = |n^2 - 5n + 4|$$

Donc $$|n^2 - 5n + 4| \leq |5n - 13|$$, c'est-à-dire : $$(n^2 - 10n + 17)(n^2 - 9) \leq 0$$.

Ceci n'est vrai que si $$n \in \{-3; -2; -1; 0; 2; 3; 5; 6; 7\}$$

Une vérification simple montre que : $$\frac{n^2 - 9}{n^2 - 5n + 4} \in \mathbb{Z} \Leftrightarrow (n = 3 \text{ ou } n = -3)$$

- Pour déterminer le pgcd de deux entiers : $$(k \in \mathbb{Z}^*)$$

- On essaye de se ramener à un pgcd plus simple en appliquant la formule :

$$\operatorname{pgcd}(ka; kb) = |k| \operatorname{pgcd}(a; b)$$

puis on utilise l'algorithme d'Euclide si le pgcd n'est pas évident.

- On décompose chaque entier en produit de facteurs premiers.
- On fait appel aux résultats suivants :

$$\operatorname{pgcd}(a; b) = \operatorname{pgcd}(a; b - aq) ; \quad \operatorname{pgcd}(a; b) = \operatorname{pgcd}(c; d) \Leftrightarrow \left\{ \begin{array}{l} \operatorname{pgcd}(a; b) \mid c \text{ et } \operatorname{pgcd}(a; b) \mid d \\ \operatorname{pgcd}(c; d) \mid a \text{ et } \operatorname{pgcd}(c; d) \mid b \end{array} \right.$$

- Pour déterminer le ppcm de deux entiers :

- On essaye de se ramener à un ppcm plus simple en appliquant la formule :

$$\operatorname{ppcm}(ka; kb) = |k| \operatorname{ppcm}(a; b)$$

- On décompose chaque entier en produit de facteurs premiers.

- On calcule le pgcd puis on applique la formule : $$\operatorname{ppcm}(a; b) = \frac{|ab|}{\operatorname{pgcd}(a; b)}$$

- Pour la résolution du système dans $$\mathbb{Z}^2$$ : $$(S) : \begin{cases} \operatorname{pgcd}(x; y) = d \\ \operatorname{ppcm}(x; y) = m \end{cases}$$, on suit la discussion suivante :

- Si $d$ ne divise pas $m$, alors le système $(S)$ n'a pas de solution dans $\mathbb{Z}^2$.
- Si $d$ divise $m$, on pose: $x = dx'$ et $y = dy'$ avec $\operatorname{pgcd}(x'; y') = 1$.

Dans ce cas, le système $$(S)$$ est équivalent au système : $$\left\{ \begin{array}{l} \operatorname{pgcd}(x'; y') = 1 \\ x'.y' = \frac{m}{d} \end{array} \right.$$

On achève la résolution en sélectionnant parmi les factorisations de $$\frac{m}{d}$$ celles pour lesquelles $$\text{pgcd}(x'; y') = 1$$.

- En arithmétique, s'il n'y a qu'un nombre raisonnable de cas à étudier, il est souvent préféable d'étudier un à un tous les cas只不过 que chercher un raisonnement global.
L'egalite $x^{\prime} - 1 = (x - 1)(x^{\prime -1} + x^{\prime -2} + \ldots +x + 1)$ (ou $r\in \mathbb{N}^*$ ) est a connaître absolument. Elle est tres souvent utilisée, par exemple pour les racines de l'unité dans $\mathbb{C}$ , la somme des premiers termes d'une suite géométrique...etc.

### B. Théorèmes de Bézout et de Gauss
Les questions 1, 2, 3 et 4 sont indépendantes.

1) Montrer que pour tout $(k;n)\in \left(\mathbb{N}^{*}\right)^{2}$ avec $k\leq n$ .. $k\wedge n = 1\Rightarrow n \mid C_n^k$
2) Montrer que pour tout $n\in \mathbb{N}^*$ .. $(n + 1) \mid C_{2n}^{n}$ (Indication: exprimer $C_{2n}^{n + 1}$ en fonction de $C_{2n}^{n}$).
3) Soit $(a; b; c) \in \left(\mathbb{Z}^{*}\right)^{3}$. En utilisant le théorème de Gauss, montrer que $a \wedge b = 1 \Rightarrow a \wedge (bc) = a \wedge c$.
4) Soit $\left(u_{n}\right)$ la suite définie par: $u_0 = 0$, $u_{1} = 1$ et pour tout $n \in \mathbb{N}: u_{n+2} = u_{n+1} + u_n$ (suite de FIBONACCI).

a) Montrer que: $\left(\forall n\in \mathbb{N}^{*}\right)u_{n + 1}u_{n - 1} - u_n^2 = (-1)^n$ et en deduire que: $\left(\forall n\in \mathbb{N}^{*}\right)u_{n}\wedge u_{n + 1} = 1.$
b) Montrer que: $(\forall n\in \mathbb{N})u_{m + n} = u_mu_{n + 1} + u_{m - 1}u_n.$
c) En déduire que $ u_{m} \wedge u_{n} = u_{m \wedge n} $ pour tout $ (m; n) \in (\mathbb{N}^{*})^{2} $.

> **SOLUTION.**
1) Montrer que pour tout $$(k;n)\in\left(\mathbb{N}^{*}\right)^{2}$$ avec $$k\leq n$$ : $$k\wedge n=1\Rightarrow n \mid C_{n}^{k}$$

Supposons que $$k\wedge n=1$$. On a : $$C_{n}^{k}=\frac{n!}{k!(n-k)!}=\frac{n}{k}\times\frac{(n-1)!}{(k-1)!(n-k)!}=\frac{n}{k}C_{n-1}^{k-1}$$. Ce qui entraîne que $$kC_{n}^{k}=nC_{n-1}^{k-1}$$ et donc $$n \mid kC_{n}^{k}$$. Or $$k\wedge n=1$$, donc d'après le théorème de Gauss, $$n \mid C_{n}^{k}$$; d'où le résultat.

2) Montrer que pour tout $$n\in\mathbb{N}^{*}:(n+1) \mid C_{2n}^{n}$$

On a pour tout $$n\in\mathbb{N}^{*}$$: $$C_{2n}^{n+1}=\frac{(2n)!}{(n+1)!(n-1)!}=\frac{2n\times(2n-1)(2n-2)\times\ldots\times n}{(n+1)!}=\frac{n}{n+1}C_{2n}^{n}$$

Ce qui donne $$(n+1)C_{2n}^{n+1}=nC_{2n}^{n}$$, et Par conséquent $$(n+1) \mid nC_{2n}^{n}$$. Comme $$n\wedge(n+1)=1$$, alors d'après le théorème de Gauss $$(n+1) \mid C_{2n}^{n}$$.

3) Soit $$(a;b;c)\in\left(\mathbb{Z}^{*}\right)^{3}$$. Montrons que $$a\wedge b=1\Rightarrow a\wedge(bc)=a\wedge c$$ :

Posons $d = a \wedge c$ et $d' = a \wedge (bc)$. On a bien $d \mid d'$ car si $d \mid a$ et $d \mid c$ alors $d \mid bc$ et donc $d \mid a \wedge (bc)$.

Montrons maintenant que $d' \\mid d$. On a $d' \\mid a$ et $d' \\mid bc$, et puisque $a \wedge b = 1$ alors $d' \wedge b = 1$ car sinon il existerait un diviseur premier $p$ commun à $d'$ et $b$, ce qui entraîne $p \mid a$ et $p \mid b$. $d'$ divise $bc$ et $d' \wedge b = 1$ donc d'après le théorème de Gauss $d' \\mid c$. Par conséquent, $d' \\mid a \wedge c$ et $d' \\mid d$.

Conclusion : $a \wedge b = 1 \Rightarrow a \wedge (bc) = a \wedge c$.

4) Soit $(u_n)$ la suite définie par : $u_0 = 0$, $u_1 = 1$ et pour tout $n \in \mathbb{N}$, $u_{n+2} = u_{n+1} + u_n$.

a) Montrons que pour tout $n \in \mathbb{N}^* : u_{n+1}u_{n-1} - u_n^2 = (-1)^n$

On a pose pour tout $n \in \mathbb{N}^*$, $v_n = u_{n+1}u_{n-1} - u_n^2$. On aura alors :

$$v_{n+1} = u_{n+2}u_n - u_{n+1}^2 = (u_n + u_{n+1})u_n - u_{n+1}(u_{n-1} + u_n) = u_n^2 - u_{n+1}u_{n-1} = -v_n$$

La suite $(v_n)_{n \ge 1}$ est géométrique de raison $q = -1$ et de premier terme $v_1 = -1$. Par conséquent, pour tout $n \in \mathbb{N}^*$, $v_n = (-1)^n$ et donc $u_{n+1}u_{n-1} - u_n^2 = (-1)^n$

Déduisons que pour tout $n \in \mathbb{N}^* : u_n \wedge u_{n+1} = 1$

Puisque $u_{n+1}u_{n-1} - u_n^2 = (-1)^n$, alors $u_n u_n - u_{n+1}u_{n-1} = 1$ ou $u_{n+1}u_{n-1} - u_n u_n = 1$. D'après le théorème de Bézout, $u_n \wedge u_{n+1} = 1$

b) Montrons que pour tout $n \in \mathbb{N} : u_{m+n} = u_m u_{n+1} + u_{m-1}u_n$

Pour $m = 1$ et $n \in \mathbb{N}$ : $u_{n+m} = u_{n+1} = u_{n+1}u_1 + u_n u_0 = u_{n+1}u_m + u_{m-1}u_n$

Pour $m = 2$ et $n \in \mathbb{N}$ : $u_{n+m} = u_{n+2} = u_{n+1} + u_n = u_{n+1}u_2 + u_n u_1 = u_{n+1}u_m + u_{m-1}u_n$

Soit $m \in \mathbb{N}^*$. Supposons que pour tout $n \in \mathbb{N}$, $u_{n+m} = u_{n+1}u_m + u_{m-1}u_n$ et $u_{n+m+1} = u_{n+1}u_{m+1} + u_m u_n$ et montrons que $u_{n+m+2} = u_{n+1}u_{m+2} + u_{m+1}u_n$.

On a pour tout $n \in \mathbb{N}$ :

$$u_{n+m+2} = u_{n+m+1} + u_{n+m} = u_{n+1}u_{m+1} + u_m u_n + u_{n+1}u_m + u_{m-1}u_n = u_{n+1}(u_{m+1} + u_m) + u_n(u_m + u_{m-1})$$

Par suite, pour tout $n \in \mathbb{N} : u_{m+n} = u_{n+1}u_{m+2} + u_{m+1}u_n$

c) Déduisons que pour tout $(m; n) \in (\mathbb{N}^*)^2 : u_m \wedge u_n = u_{m \wedge n}$

On utilisa les relations suivantes : $u_n \wedge u_{n+1} = 1$ (1) ; $u_{m+n} = u_m u_{n+1} + u_{m-1} u_n$ (2)

De (2) il résulte $u_{2n} = (u_{n+1} + u_{n-1})u_n$ ; d'où $u_n \mid u_{2n}$ pour tout $n \in \mathbb{N}^*$. Une récurrence simple sur $n$ montre alors que pour tout $n \in \mathbb{N}^*$ et pour tout $q \in \mathbb{N} : u_n \mid u_{qn}$.

Par ailleurs, on sait que $m \wedge n$ est le dernier reste non nul dans l'algorithme des divisions euclidiennes successives : $m \ge n \Rightarrow m = nq + r \Rightarrow m \wedge n = n \wedge r = ... = r_n$ où $r_n \mid r_{n-1}$.

Il résulte de ce qui précède que : $u_m = u_{nq+r} = u_r u_{nq+1} + u_{r-1} u_{nq}$

Et donc que : $u_m \wedge u_n = u_n \wedge u_r$ (3)

De (3) on déduit, exactement comme dans l'algorithme d'Euclide que : $u_m \wedge u_n = u_{m \wedge n}$

• Pour montrer que $P(n)$ est divisible par $b$, où $P(n)$ est un polynôme en $n$ :

- On essaye de l'ecrire comme produit de nombres consécutifs.
- On essaye une démonstration par récurrence.
Faire une étude des cas: $ n = r + bk $ avec $ r \in \{0;1;2,\ldots ;b - 1\} $.

• Pour montrer qu'une somme de puissance d'exposants dépendant de $n$ est divisible par $b$ :

- On utilise les congruences et le théorème de Fermat.
- On utilise une démonstration par récurrence.

• Pour montrer qu'un entier $b$ divise l'entier $a$, on peut :

- Vérifier que le reste de la division euclidienne de $ a $ par $ b $ est nul.
Utiliser le théorème de Gauss.
Utiliser la décomposition en facteurs premiers de $ a $ et $ b $, et montrer que tous les facteurs premiers de $ a $ apparaissent aussi dans la décomposition de $ a $, et avec une puissance supérieure.

• Pour montrer que deux entiers $a$ et $b$ sont premiers entre eux :

• On essaye d'appliquer le théorème de Bézout, en cherchant à trouver deux entiers $u$ et $v$ tels que :

$$au + bv = 1$$

- On prouve que leur pgcd vaut 1 par des divisions successives.
- On utilise les résultats suivants:

$$\left\{ \begin{array}{l} \operatorname{pgcd}(A; B) = 1 \\ \operatorname{pgcd}(A; C) = 1 \end{array} \right. \Rightarrow \operatorname{pgcd}(A; BC) = 1 \quad ; \quad \operatorname{pgcd}(A; B) = 1 \Leftrightarrow \operatorname{pgcd}(A^m; B^n) = 1$$

$$\operatorname{pgcd}(A; B) = 1 \Leftrightarrow \operatorname{pgcd}(A; B - Aq) = 1 \quad (\text{à montrer d'abord})$$

$$\operatorname{pgcd}(A; B) = 1 \Leftrightarrow \operatorname{pgcd}(A + B; AB) = 1 \quad (\text{à montrer d'abord})$$

### C. Congruences et équations diophantiennes
Une étoile est visible de la terre tous les 100 jours et est apparue y a 7 jours. Une seconde est visible du même point sur Terre tous les 59 jours et a été observée pour la dernière fois il y a 3 jours. Une troisième étoile est observable tous les 347 jours. On pourra la voir dans 3 jours exactement. Le but de l'exercice est de savoir leurs dates de conjonction, c'est-à-dire les dates auxquelles elles sont visibles au même endroit dans le ciel.

1) Démontrer que résoudre ce problème revient à résoudre le système $(S)$ suivant :

$$(S) : \left\{ \begin{array}{l} n \equiv 7 \quad [100] \\ n \equiv 3 \quad [59] \\ n \equiv 344 \quad [347] \end{array} \right.$$

2) Résolution du système intermédiaire : $$(S') : \left\{ \begin{array}{l} n \equiv 7 \quad [100] \\ n \equiv 3 \quad [59] \end{array} \right.$$

a) Démontrer qu'il existe $(u; v) \in \mathbb{Z}^2$ tel que: $100u + 59v = 1$.
b) Déterminer un couple $\left(u_0; v_0\right) \in \mathbb{Z}^2$ tel que: $100u_0 + 59v_0 = 1$.
c) Démontrer que $ n_0 = 7 - 4 \times 100 \times u_0 $ est une solution du système $ (S') $.
d) Démontré l'équivalence suivante:

$$(n \text{ est solution du système } (S')) \Leftrightarrow n - n_0 \equiv 0 \quad [5900]$$

e) En déduire les solutions de du système $(S')$.

3) Résolution du système $(S)$ :

a) Démontrer que résoudre $(S)$ revient à déterminer les entiers $n$ de la forme $n = 9207 + 5900k$ ou $k$ est un entier relatif tel que: $k \equiv 159$ [347].
b) En déduire les solutions de du système $(S)$.
c) Combien de jours devra-t-on attendre pour voir les trois étoiles en meme temps si I'on rate la premiere conjunction?

> **SOLUTION.**
1) Si $n$ est l'entier correspondant à ce jour, alors $n - 7$ est un multiple de 100, $n - 3$ est un multiple de 59 et $n + 3$ est un multiple de 347. On obtient alors :

$$\left\{ \begin{array}{l} n \equiv 7 \quad [100] \\ n \equiv 3 \quad [59] \\ n \equiv -3 \quad [347] \end{array} \right. , \text{ce qui est équivaut au système : } (S) : \left\{ \begin{array}{l} n \equiv 7 \quad [100] \\ n \equiv 3 \quad [59] \\ n \equiv 344 \quad [347] \end{array} \right.$$

2) a) En utilisant l'algorithme d'Euclide, on vérifie facilement que les entiers 100 et 59 sont premiers entre eux.

Donc, d'après le théorème de Bézout, il existe $(u; v) \in \mathbb{Z}^2$ tel que : $100u + 59v = 1$.

b) On reprend l'algorithme d'Euclide « à l'envers » pour déterminer le couple $(u_0; v_0) \in \mathbb{Z}^2$ tel que :

$100u_0 + 59v_0 = 1$. Le couple $(-23; 39)$ convient.

c) D'après la question précédente, $u_0 = -23$ et $n_0 = 7 - 4 \times 100 \times (-23) = 9207$. Or, $9207 \equiv 7 \quad [100]$ et

$9207 \equiv 3 \quad [59]$. Ainsi : $n_0 = 7 - 4 \times 100 \times u_0$ est bien une solution du système $(S')$.

d) On va démontrer cette équivalence en deux temps.

• Sen direct :

On suppose que $n$ est solution du système $(S')$. On a donc : $\left\{ \begin{array}{l} n \equiv 7 \quad [100] \\ n \equiv 3 \quad [59] \end{array} \right.$ et $\left\{ \begin{array}{l} n_0 \equiv 7 \quad [100] \\ n_0 \equiv 3 \quad [59] \end{array} \right.$

Par transitivité de la congruence : $n \equiv n_0 \quad [100]$ et $n \equiv n_0 \quad [59]$. Il s'ensuit donc que :

$100 \mid n - n_0$ et $59 \mid n - n_0$. Puisque $100 \wedge 59 = 1$ alors $5900 \mid n - n_0$. Ainsi : $n - n_0 \equiv 0$ [5900].

• Sen réciproque :

Supposons que $n - n_0 \equiv 0$ [5900]. Alors $5900 \mid n - n_0$. En particulier : $59 \mid n - n_0$ et $100 \mid n - n_0$ car 59 et 100 sont des diviseurs de 5900. Il s'ensuit donc que : $n \equiv n_0$ [100] et $n \equiv n_0$ [59].

Par suite : $n$ est solution du système $(S')$.

e) D'après la question précédente, les solutions du système $(S')$ sont les entiers $9207 + 5900k$ avec $k \in \mathbb{Z}$.

3) Résolution du système $(S)$ :

a) L'entier $n$ est solution du système $(S)$ si ; et seulement si, $n$ est solution du système $(S')$ et de l'équation $n \equiv 344$ [347]. Ce sont les entiers $n$ de la forme $9207 + 5900k$, $k \in \mathbb{Z}$ tels que $n \equiv 344$ [347].

soit $k \in \mathbb{Z}$. On a : $9207 + 5900k \equiv 344$ [347] $\Leftrightarrow 5900k \equiv -8863$ [347] $\Leftrightarrow k \equiv 159$ [347]

Réciproquement, si $k \equiv 159$ [347] alors $9207 + 5900k \equiv 344$ [347]. De plus, d'après la question 2) e), les entiers $9207 + 5900k$ sont solutions du système $(S')$.

b) L'équation $k \equiv 159$ [347] donne $k = 159 + 347\ell$ avec $\ell \in \mathbb{Z}$. Par suite, les solutions du système $(S)$ sont tous les entiers relatifs $n$ tels que : $n = 947307 + 2047300\ell$ où $\ell \in \mathbb{Z}$.

c) Les dates de conjonction sont les termes d'une suite arithmétique de raison 2047300. Elles sont donc espacées de 2047300 jours pour la prochaine rencontre. Cela correspond à environ 5609 ans.

• Il faut se souvenir de la façon dont on utilise l'algorithme d'Euclide pour montrer que deux entiers $a$ et $b$ sont premiers entre eux et ensuite pour obtenir des entiers $u$ et $v$ tels que $au + bv = 1$.

• Il faut se souvenir de l'importance des congruences en arithmétique et de leurs sens.

Soient $n \in \mathbb{N}^*$ et $(a; b) \in \mathbb{Z}^2$. On a : $a \equiv b[n] \Leftrightarrow n \mid (b - a) \Leftrightarrow [(\exists k \in \mathbb{Z}) b = a + kn]$

• Il est intéressant de connaître et savoir démontrer le résultat suivant :

Soit $a, b, m$ et $n$ des entiers relatifs tels que $m$ et $n$ soient premiers entre eux.

Le système $\begin{cases} x \equiv a[m] \\ x \equiv b[n] \end{cases}$ possède des solutions dans $\mathbb{Z}$. Si $x_0$ est l'une de ces solutions alors le système est équivalent à une seule équation dans $\mathbb{Z}$ qui est : $x \equiv x_0[mn]$

Voici quelques éléments de la démonstration :

« Puisque $m \wedge n = 1$ alors d'après de théorème de Bézout, il existe un couple $(u, v) \in \mathbb{Z}^2$ tel que $mu + nv = 1$. Si on pose $x_0 = bmu + anv$, alors $x_0$ est bien solution du système.

Puisque $m \mid x - x_0$ et $n \mid x - x_0$ et $m \wedge n = 1$ alors $mn \mid x - x_0$ et donc $x \equiv x_0[mn]$

Réciproquement, si $mn \mid x - x_0$ alors $m \mid x - x_0$ et $n \mid x - x_0$, d'où le résultat ».

Pour résoudre l'équation $ax + by = c$ dans $\mathbb{Z}^2$, on commence par calculer $d = a \wedge b$ et on note $a = a'd$ et $b = b'd$ avec $(a'; b') \in \mathbb{Z}^2$.

- Si $d$ ne divise pas $c$, alors l'équation $ax + by = c$ n'a pas de solution dans $\mathbb{Z}^2$.
- Si $d$ divise $c$, alors on note $c = c'd$ avec $c' \in \mathbb{Z}$.

Si $(u; v)$ est un couple de coefficients de Bézout pour $a$ et $b$, alors $(x_0; y_0) = (c'u; c'v)$ est une solution entière, on remarque que si $(x; y)$ est une solution de l'équation, alors $a(x - x_0) = -b(y - y_0)$. On termine la résolution en utilisant le théorème de Gauss.

### D. Chiffrement de Hill
Le chiffrement de Hill (1891-1961) est un chiffrement polygraphique, c'est-à-dire que l'on ne (dé)chiffre pas les lettres les unes après les autres, mais par paquets, ici de deux lettres.

Partie A:

On considère dans $\mathbb{Z}^2$ l'équation suivante : $(E) : 23x - 26y = 1$

1) Vérifier que le couple $(-9; -8)$ est solution particulière de l'équation $(E)$.
2) Résoudre alors l'équation $(E)$.
3) En déduire un entier $ a $ tel que: $ 0 \leq a \leq 25 $ et $ 23a \equiv 1 $ [26].

Partie B:

On veut coder un mot de deux lettres selon la procédure suivante :

Étape 1: Chaque lettre du mot est remplacée par un entier en utilisant le tableau ci-dessous :

On obtient un couple d'entiers $(x_1; x_2)$ où $x_1$ correspond à la première lettre du mot et $x_2$ correspond à la deuxième lettre du mot.

Étape 2: $(x_1; x_2)$ est transformé en $(y_1; y_2)$ tel que :

$$(S_1) : \begin{cases} y_1 \equiv 11x_1 + 3x_2 \text{ [26]} \\ y_2 \equiv 7x_1 + 4x_2 \text{ [26]} \end{cases} \quad \text{avec } 0 \le y_1 \le 25 \text{ et } 0 \le y_2 \le 25$$

Étape 3: $(y_1; y_2)$ est transformé en un mot de deux lettres en utilisant le tableau de correspondance donné dans l'étape 1.

Exemple : $\underline{\text{TE}}_{\text{mot en chair}} \xrightarrow{\text{étape 1}} (19; 4) \xrightarrow{\text{étape 2}} (13; 19) \xrightarrow{\text{étape 3}} \underline{\text{NT}}_{\text{mot codé}}$

1) Coder le mot ST.
2) On peut maintainant déterminer la procédure de décodage :

a) Montrer que tout couple $(x_1; x_2)$ vérifiant les équations du système $(S_1)$, vérifie les équations du

système : $$(S_2) : \begin{cases} 23x_1 \equiv 4y_1 + 23y_2 & [26] \\ 23x_2 \equiv 19y_1 + 11y_2 & [26] \end{cases}$$

b) À l'aide de la partie A, montrer que le couple $(x_1; x_2)$ vérifiant les équations du système $(S_2)$, vérifie les équations du système :

$$(S_3) : \begin{cases} x_1 \equiv 16y_1 + y_2 & [26] \\ x_2 \equiv 11y_1 + 5y_2 & [26] \end{cases}$$

c) Montrer que tout couple $(x_{1};x_{2})$ vérifier les équations du système $(S_{3})$, vérifie les équations du $(S_{1})$.
d) Decoder le mot YJ.

> **SOLUTION.**
**Partie A :**
On considère dans $\mathbb{Z}^2$ l'équation suivante : $(E) : 23x - 26y = 1$

1) On a $23 \times (-9) - 26 \times (-8) = -207 + 208 = 1$, donc $(-9; -8)$ est solution particulière de l'équation $(E)$.
2) Résolution de l'équation $(E)$: Posons $(x_0; y_0) = (-9; -8)$. Soit $(x; y) \in \mathbb{Z}^2$ une solution de $(E)$.

On a donc : $23x - 26y = 23x_0 - 26y_0 \Leftrightarrow 23(x - x_0) = 26(y - y_0)$. Ainsi, 26 divise $23(x - x_0)$ et 26 est premier avec 23. D'après le théorème de Gauss, 26 divise $x - x_0$. Par conséquent : $(\exists k \in \mathbb{Z}) x - x_0 = 26k$. L'égalité $23(x - x_0) = 26(y - y_0)$ donne $y - y_0 = 23k$. Ainsi, il existe $k \in \mathbb{Z}$ tel que :

$$x = -9 + 26k \quad \text{et} \quad y = -8 + 23k$$

En résumé, l'ensemble solution de l'équation $(E)$ est : $S = \{(-9 + 26k; -8 + 23k)  \;/\; k \in \mathbb{Z}\}$

3) Soit $a$ un entier relatif. La relation $23a \equiv 1[26]$ signifie qu'il existe $y \in \mathbb{Z}$ tel que $23a - 26y = 1$. D'après la question précédente, ceci impose l'existence d'un entier relatif $k$ tel que $a = -9 + 26k$. Ensuite :

$$0 \le a \le 25 \Leftrightarrow 0 \le -9 + 26k \le 25 \Leftrightarrow 9 \le 26k \le 34 \Leftrightarrow \frac{9}{26} \le k \le \frac{34}{26} \Leftrightarrow k = 1$$

Pour $k = 1$, on obtient $a = -9 + 26 = 17$. Réciproquement, puisque $17 \times 23 = 391 = 1 + 15 \times 26$, l'entier $a = 17$ est un entier tel que : $0 \le a \le 25$ et $23a \equiv 1[26]$.

**Partie B :**
1) Étape 1 : Le mot ST correspond à $(x_1; x_2) = (18; 19)$.

Étape 2 : On a $11x_1 + 3x_2 = 11 \times 18 + 3 \times 19 = 255$. L'entier $y_1$ est alors le reste de la division euclidienne de

255 par 26. Comme $255 = 21 + 234 = 21 + 9 \times 26$ et que $0 \leq 21 \leq 25$, on en déduit que $y_1 = 21$.

De la même façon, on montre que $y_2 = 20$.

Étape 3 : Le couple $(21; 20)$ correspond au mot VU et donc : Le mot ST se code en VU.

2) a) Soient $x_1, x_2, y_1$ et $y_2$ quatre entiers. On a les implications :

$$\begin{array}{l} \left\{ \begin{array}{l} y_1 \equiv 11x_1 + 3x_2 \quad [26] \\ y_2 \equiv 7x_1 + 4x_2 \quad [26] \end{array} \right. \Rightarrow \left\{ \begin{array}{l} 4y_1 + 23y_2 \equiv (4 \times 11 + 23 \times 7)x_1 + (4 \times 3 + 23 \times 4)x_2 \quad [26] \\ 19y_1 + 11y_2 \equiv (19 \times 11 + 11 \times 7)x_1 + (19 \times 3 + 11 \times 4)x_2 \quad [26] \end{array} \right. \\ \Rightarrow \left\{ \begin{array}{l} 4y_1 + 23y_2 \equiv 205x_1 + 104x_2 \quad [26] \\ 19y_1 + 11y_2 \equiv 286x_1 + 101x_2 \quad [26] \end{array} \right. \\ \Rightarrow \left\{ \begin{array}{l} 4y_1 + 23y_2 \equiv 23x_1 \quad [26] \\ 19y_1 + 11y_2 \equiv 23x_2 \quad [26] \end{array} \right. \end{array}$$

car $205 \equiv 23 [26]$, $104 \equiv 0 [26]$, $286 \equiv 0 [26]$ et $101 \equiv 23 [26]$ ; d'où le résultat.

b) En suivant la même démarche de la question 2) a), on trouve le résultat demandé. (A vérifier)
c) Reciproquement, on a les implications:

$$\left\{ \begin{array}{l} x_1 \equiv 16y_1 + y_2 [26] \\ x_2 \equiv 11y_1 + 5y_2 [26] \end{array} \right. \Rightarrow \left\{ \begin{array}{l} 11x_1 + 3x_2 \equiv 209y_1 + 26y_2 [26] \\ 7x_1 + 4x_2 \equiv 156y_1 + 27y_2 [26] \end{array} \right. \Rightarrow \left\{ \begin{array}{l} y_1 \equiv 11x_1 + 3x_2 [26] \\ y_2 \equiv 7x_1 + 4x_2 [26] \end{array} \right.$$

En résumé : $$\left\{ \begin{array}{l} y_1 \equiv 11x_1 + 3x_2 [26] \\ y_2 \equiv 7x_1 + 4x_2 [26] \end{array} \right. \Leftrightarrow \left\{ \begin{array}{l} x_1 \equiv 16y_1 + y_2 [26] \\ x_2 \equiv 11y_1 + 5y_2 [26] \end{array} \right.$$

d) Le mot YJ correspond au couple $(y_1; y_2) = (24; 9)$. De plus :

- $ 16y_{1} + y_{2} = 16 \times 24 + 9 = 393 = 3 + 15 \times 26 $ et donc $ x_{1} = 3 $.
- $ 11y_{1} + 5y_{2} = 11 \times 24 + 5 \times 9 = 309 = 23 + 11 \times 26 $ et donc $ x_{2} = 23 $.

Le couple $(3; 23)$ correspond au mot DX et donc :

Le mot YJ se décode en DX

## Exercices

### Exercices d'application
#### DIVISION EUCLIDIENNE DANS $\mathbb{Z}$
**Exercice 1.**
1) On sait que le reste de la division euclidienne d'un entier $a$ par 12 est égale à 7. Déterminer le reste de la division euclidienne de $a$ par 3.
2) On sait que le reste de la division euclidienne d'un entier $ b $ par 3 est égale à 2. Déterminer les valeurs possibles du reste de la division euclidienne de $ b $ par 12.

**Exercice 2.**
1) Déterminer, selon les valeurs de l'entier naturel $ n $, le reste de la division euclidienne de $ 37^n $ par 7.
2) En déduire le reste de la division euclidienne des nombres $37^{26}$ et $37^{250}$ par 7.
3) Quel est le reste de la division euclidienne de nombre $ N = (705432)^{3} $ par 11?

**Exercice 3.**
Soit n un entier naturel.

1) Déterminer le reste de la division euclidienne de $2^{n}$ par3.
2) Déterminer le reste de la division euclidienne de $(275423)^{n}$ par 3.
3) Déterminer le reste de la division euclidienne de $(372121)^{n}$ par 3.
4) Déterminer les valeurs de l'entier $ n $ pour lesquelles le nombre $ N = (275423)^n + (372121)^n $ est divisible par 3.

**Exercice 4.**
Montrer que le nombre $$a = n^2(n^2 - 1)$$ est divisible par 12 pour tout $$n \in \mathbb{N}$$.

**Exercice 5.**
Déterminer les entiers naturels n pour lesquelles le nombre $$a = n^2 - 3n + 6$$ est divisible par 5.

**Exercice 6.**
Soit a, b, c et d des entiers relatifs tels que $$ad + bc$$. On suppose que $$ad + bc$$ divise les nombres a, b, c et d. Établir que : $$|ad + bc| = 1$$.

**Exercice 7.**
1) On pose : $$E = \{n \in \mathbb{N} \;/\; n \geq 7\}$$

Déterminer les valeurs de $$n \in E$$ pour lesquelles : $$n - 6 \mid n + 9$$

2) Soit $ n \in \mathbb{Z} - \{3\} $. Déterminer les valeurs de $ n $ pour lesquelles: $ n - 3 \mid n^3 - 3 $
3) Résoudre dans $\mathbb{N}^2$ l'équation: $3xy + x + 3y = 99$

#### CONGRUENCE MODULO
**Exercice 8.**
Déterminer $$x \in \mathbb{Z}$$ sachant que :

1) $ 212 \equiv x[11] $ et $ 0 < x < 11 $.
2) $1111 \equiv x[23]$ et $-23 < x < 0$.
3) $7000 \equiv x[102]$ et $-102 < x < 0$.
4) $2017 \equiv x[20]$ et $0 < x < 20$.
5) $(2601)^{187} \equiv x[11]$ et $0 \leq x < 11$.
6) $(20197)^{1438} \equiv x[7]$ et $0 \leq x < 7$.

**Exercice 9.**
Soit $$(a; b) \in \mathbb{Z}^2$$ et $$(m; n) \in (\mathbb{N}^*)^2$$. Montrer que :

$$\begin{cases} n \mid m \\ a \equiv b [m] \end{cases} \Rightarrow a \equiv b [n]$$

**Exercice 10.**
Dans chacun des cas suivants, déterminer le reste de la division euclidienne de a par b.

1) $a = 5^{200}$ et $b = 7$ ；2） $a = 8^{2018} - 8$ et $b = 11$
3) $a = 7 \times 3^{20}$ et $b = 5$; 4) $a = 2017^{1438}$ et $b = 3$

**Exercice 11.**
1) Montrer que: $(\forall n\in \mathbb{N})$ $10^{3n}\equiv 1[27]$
2) On pose: $ N = 10^{100} + 100^{10} $
Déterminer le reste de la division euclidienne de $ N $ par 27.

#### Nombres premiers
**Exercice 12.**
Les questions suivantes sont indépendantes.

1) Soit $ p $ un nombre premier supérieur ou égal à 3. Montrer que: $ p \equiv 1[4] $ et $ p \equiv 3[4] $
2) Soit $ a, b $ et $ c $ trois nombres premiers distincts et strictement supérieurs ou égales à 3. Montrer que $ a^2 + b^2 + c^2 $ n'est pas premier.
3) Soit $ p $ un nombre premier supérieur ou égal à 5. Montrer que: $ p^2 + 11 \equiv 0[12] $
4) Montrer que la somme de trois entiers naturels impairs consecutifs n'est pas un nombre premier.
5) Soit $a \in \mathbb{Z}$. Le nombre $a^4 + a^2 + 1$ est-il premier?
6) Soit $a, b, c$ et $d$ des entiers naturels non nuls. Montrer que si $ab = cd$ alors $a^2 + b^2 + c^2 + d^2$ n'est pas premier.
7) Soit $(x; y) \in \mathbb{N}^2$ tel que $x > 1$ et $y > 1$. Montrer que $N = a^4 + 4b^4$ n'est pas premier.
8) Déterminer les valeurs de l'entier naturel $ n $ pour lesquelles $ n^4 + 4 $ est premier.
9) Soit $ p $ un nombre premier supérieur ou égal à 3. Résoudre dans $ \mathbb{N}^2 $ l'équation: $ x^2 - y^2 = p $

**Exercice 13.**
Soit $(a; b) \in \mathbb{N}^+ \times \mathbb{N}^+$. On suppose que les nombres $a$, $a + b$ et $a + 2b$ sont premiers.

1) Montrer que $ b $ est pair.
2) Montrer que si $a > 3$ alors 3 divise $b$.
3) Donner trois exemples dans lesquels les entiers $a$, $a + b$ et $a + 2b$ sont des nombres premiers.

**Exercice 14.**
Soit $p$ un nombre premier supérieur ou égal à 5.

1) Montrer que: $p^2 \equiv 1[3]$ et $2^p \equiv 2[3]$.
2) En déduire que l'entier $ p^2 + 2^p $ n'est pas premier.

#### ALGORITHME D'EUCLIDE ET P.G.C.D
**Exercice 15.**
En utilisant l'algorithme d'Euclide, Déterminer $a \wedge b$ dans chacun des cas suivants :

1) $a = 604800$ et $b = 176280$
2) $a = 1309770$ et $b = 571725$

**Exercice 16.**
Déterminer $b$ tel que : $600 < b < 1100$ et $630 \wedge b = 105$.

**Exercice 17.**
Les questions 1), 2) et 3) sont indépendantes.

1) On pose : $a = 257$ et $b = 45$

a) En utilisant l'algorithme d'Euclide, calculer $ a \wedge b $.
b) En déduire qu'il existe un couple $(\alpha; \beta) \in \mathbb{Z}^2$ tel que: $\alpha a + \beta b = a \wedge b$ ($\alpha$ et $\beta$ à déterminer).

2) En utilisant l'algorithme d'Euclide, déterminer deux entiers relatifs $x$ et $y$ tels que :

$$1050x + 735y = 1050 \wedge 735$$

3) En utilisant l'algorithme d'Euclide, calculer $137 \wedge 726$ puis déterminer $(x_0; y_0) \in \mathbb{Z}^2$ tel que :

$$726x_0 + 137y_0 = 1$$

**Exercice 18.**
Soit a et b deux entiers naturels non nuls. Établir que :

1) $(3a + 4b)\wedge (4a + 5b) = 1.$
2) $(4a + 15b)\wedge (3a + 11b) = 1.$
3) $(a + 2b)\wedge (2a + b) = 1$ ou $(a + 2b)\wedge (2a + b) = 3.$

**Exercice 19.**
Pour tout n ∈ ℕ, on pose :

$$a = 9n + 2 \quad \text{et} \quad b = 9n^2 - n - 4$$

1) Montrer que: $ a \wedge b = (3n + 4) \wedge 10 $
2) En déduire les valeurs possibles de $ a \wedge b $.
3 Déterminer selon les valeurs de $ n $, la valeur de $ a \wedge b $.

**Exercice 20.**
1) Montrer que pour tout (a; b; c) ∈ ℤ³ :

$$a \wedge c = 1 \Rightarrow (ab) \wedge c = b \wedge c$$

2) Pour tout n ∈ ℕ, on pose :

$$c = 5n + 8 \quad \text{et} \quad b = n^2 + n - 3$$

a) Montrer que pour tout n ∈ ℕ :

$$b \wedge c = (5n + 8) \wedge (3n + 15) = (n + 22) \wedge 51$$

b) Déterminer les valeurs possible de $ b \wedge c $.
c) Déterminer selon les valeurs de $ n $, la valeur de plus grand commun diviseur de $ b $ et $ c $.

**Exercice 21.**
Soit (a; b) ∈ (ℕ⁺)².

1) On suppose dans cette question que a ∧ b = 1.

a) Montrer que si a + b impair, alors :

$$(a^2 + b^2) \wedge (a + b) = 1$$

b) Montrer que : (a² - ab + b²) ∧ (a + b) ≤ 3

2) Montrer que :

$$(a^2 + b^2) \wedge (ab) = (a \wedge b)^2$$

$$a \wedge b = (a + b) \wedge (a \vee b)$$

$$(a \wedge b) + (a \vee b) = a + b \Leftrightarrow (a \mid b \text{ ou } b \mid a)$$

#### THÉORÈME DE BEZOUT - THÉORÈME DE GAUSS
**Exercice 22.**
En utilisant le théorème de Bezout, montrer que pour tout n ∈ ℕ :

1) $n\wedge (2n + 1) = 1$ 2) $(2n + 3)\wedge (3n + 5) = 1$
3) $n\wedge (n^3 +1) = 1$ 4) $(7n + 2)\wedge (11n + 3) = 1$
5) $(n + 2)\wedge (2n^2 +4n + 1) = 1.$

**Exercice 23.**
1) Montrer que pour tout n ∈ ℕ :

$$(n^2 + 4n + 1) \wedge (n + 4) = 1$$

2) a) Développer (n² + 1)² et (n² + 1)³.

b) En déduire, à l'aide de théorème de Bezout, que

$$(\forall n \in \mathbb{N}) (n^4 + 2n^2 + 1) \wedge (n^4 + 3n^2 + 3) = 1$$

**Exercice 24.**
1) Déterminer $(a; b) \in \mathbb{Z}^2$ sachant: $3a = 2b$.
2) Résoudre dans $\mathbb{Z}^2$ les équations suivantes:

$$(E_1) : 7x = 5y \quad ; \quad (E_2) : 5(x - 1) = 2(x - 3)$$

3) Trouver (α; β) ∈ ℤ² tel que : 4(α - 1) = 7(β + 2)

avec : -20 ≤ α ≤ 21 et -34 ≤ β ≤ 25

**Exercice 25.**
Soit (x; y; z) ∈ ℕ³ tel que : 3x - 7y - 24z = 0

En utilisant le théorème de Gauss, montrer que 21 divise y(x - z).

**Exercice 26.**
Déterminer tous les entiers naturels n tels que n ≤ 10

et : n ≡ 5 [139] et n ≡ 5 [140]

**Exercice 27.**
Déterminer dans ℕ² tous les couples (x; y) tels que :

$$\frac{x + 12}{y + 15} \quad \frac{x}{y} \quad \text{et} \quad x \wedge y = 1$$

#### L'ensemble $\mathbb{Z}/n\mathbb{Z}$
**Exercice 28.**
Résoudre les équations suivantes :

1) $x\in \mathbb{Z}/5\mathbb{Z}$
2) $x\in \mathbb{Z}/7\mathbb{Z}$
3) $x\in \mathbb{Z}/7\mathbb{Z}$
4) $x\in \mathbb{Z}/8\mathbb{Z}$
5) $x\in \mathbb{Z}/6\mathbb{Z}$
6) $x\in \mathbb{Z}/7\mathbb{Z}$

1) $x\in \mathbb{Z}/5\mathbb{Z}$
2) $x\in \mathbb{Z}/7\mathbb{Z}$
3) $x\in \mathbb{Z}/7\mathbb{Z}$
4) $x\in \mathbb{Z}/8\mathbb{Z}$
5) $x\in \mathbb{Z}/6\mathbb{Z}$
6) $x\in \mathbb{Z}/7\mathbb{Z}$

**Exercice 29.**
Résoudre dans $(\mathbb{Z}/5\mathbb{Z})^2$ les systèmes suivants :

$$\begin{cases} \overline{3}x + \overline{2}y = \overline{1} \\ \overline{2}x + \overline{4}y = \overline{3} \end{cases} ; \quad \begin{cases} \overline{2}x + \overline{7}y = \overline{3} \\ x + \overline{4}y = \overline{2} \end{cases}$$

**Exercice 30.**
1) Résoudre dans $(\mathbb{Z}/8\mathbb{Z})^2$ le système suivant :

$$\begin{cases} \overline{2}x + \overline{6}y = \overline{4} \\ x - \overline{3}y = \overline{0} \end{cases}$$

2) Trouver tous les couples $(a; b) \in \mathbb{Z}^2$ tels que les nombres $2a - 6b - 4$ et $a - 3b$ soient divisibles à la fois par 8.

**Exercice 31.**
Résoudre dans $\mathbb{Z}$ ce qui suit :

1) $8x \equiv 1[5]$ ; 2) $x^2 \equiv 4[7]$ ; 3) $4x \equiv 1[3]$

**Exercice 32.**
Soit $p$ un nombre premier.

1) Résoudre dans $\mathbb{Z}/p^2\mathbb{Z}$ l'équation: $x^{2} = \overline{0}$.
2) Résoudre dans $\mathbb{Z}/49\mathbb{Z}$ l'équation:

$$x^2 + 1\overline{6}x + 1\overline{5} = \overline{0}$$

3) Résoudre dans $\mathbb{Z}$ l'équation : $4x^2 - 2x - 2 \equiv 0[9]$

#### Équations diophantiennes
**Exercice 33.**
1) Déterminer $168 \wedge 20$.
2) Les équations suivantes admettent-elles des solutions dans $\mathbb{Z}^2$

$$\begin{array}{l} (E_1): 168x + 20y = 6 \quad ; \quad (E_2): 168x + 20y = 4 \\ (E_3): 42x + 5y = 2 \quad ; \quad (E_4): 336x + 40y = 20 \end{array}$$

3) a) Déterminer un couple $(m; p) \in \mathbb{Z}^2$ tel que :

$$42m + 5p = 1$$

b) En déduire une solution $(u_0; v_0)$ de l'équation :

$$(x; y) \in \mathbb{Z}^2 \quad 42x + 5y = 2$$

c) Résoudre dans $\mathbb{Z}^2$ l'équation: $42x + 5y = 2$
d) En déduire les solutions dans $\mathbb{Z}^2$ de l'équation:

$$(42x + 5y - 3)(42x + 5y + 3) = -5$$

**Exercice 34.**
1) Résoudre dans $\mathbb{Z}^2$ l'équation: $17x - 7y = 1$
2) Résoudre dans $\mathbb{Z}$ les systèmes:

a) $\begin{cases} x \equiv 2[7] \\ x \equiv -2[17] \end{cases}$ ; b) $\begin{cases} x \equiv -2[7] \\ x \equiv 2[17] \end{cases}$

3) Résoudre dans $\mathbb{Z}$ l'équation : $x^2 \equiv 4[119]$

**Exercice 35.**
On considère dans $\mathbb{Z}^2$ l'équation $(E)$ suivante :

$$(E): 324x - 245y = 7$$

1) Montrer que si $(x;y)$ est une solution de $(E)$, alors le nombre $x$ est divisible par 7.
2) Résoudre l'équation $(E)$.
3) Soit $(x; y)$ une solution de $(E)$. On pose: $d = x \wedge y$.

a) Déterminer les valeurs possibles de $d$.
b) Déterminer les couples $(x; y)$ solutions de l'équation $(E)$ tels que: $x \wedge y = 1$

#### APPLICATIONS DU THÉORÈME DE FERMAT
**Exercice 36.**
1) Montre que: $2^{349} \equiv 2[7]$ et $8^{2020} \equiv 1[11]$
2) Montrer que 13 divise $2^{70} + 3^{70}$.
3) Déterminer le reste de la division euclidienne de nombre $5^{38}$ par 11.
4) Montrer que $2018^{2010} - 4$ est divisible par 5.

**Exercice 37.**
Soit $p$ un nombre premier positif et $x$ un entier tel que :

$1 < x < p - 1$. Montrer que : $(x^2 - 1)^{p-1} \equiv 1[p]$

**Exercice 38.**
On considère dans $\mathbb{Z}^2$ l'équation $(E)$ suivante :

$$(E) : x^3 - 3y^3 - 6y^2 - 13x + 10 = 0$$

Montrer que $(E)$ n'admet pas de solution dans $\mathbb{Z}^2$.

**Exercice 39.**
Soit $n \in \mathbb{Z}$ et $p$ un nombre premier tel que $p > 2$.

1) Montrer que: $n^p \equiv n[2]$
2) En déduire à l'aide de théorème de Fermat que:

$$(n+1)^p - (n^p + 1) \equiv 0[2p]$$

**Exercice 40.**
Soit $n \in \mathbb{Z}$.

1) Montrer que: $n^7 + 6n \equiv 0[7]$ et $n^7 \equiv n[42]$
2) a) Montrer que: $n^5 - n \equiv 0[5]$

b) En déduire que : $n(n^2 - 1)(n^2 - 4) \equiv 0[5]$

3) Montrer que : $n^2(n^2 - 1)(n^2 + 1) \equiv 0[60]$

**Exercice 41.**
Soit $p$ un nombre premier tel que $p$ divise $1 + 2^p$.

Montrer que $p = 3$.

**Exercice 42.**
Soit $a, b, c$ et $d$ des entiers naturels non nuls.

À l'aide de théorème de Fermat, montrer que :

$$a^{4b+d} - a^{4c+d} \equiv 0[30]$$

**Exercice 43.**
Soit $p$ un nombre premier positif et $(a; b) \in \mathbb{Z}^2$.

Montrer que si $a^p \equiv b^p[p]$, alors $a^p \equiv b^p[p^2]$.

**Exercice 44.**
Soit $p$ un nombre premier positif impair et $n \in \mathbb{N}^*$ tel que $n \wedge p = 1$.

1) Montrer que: $n^{\frac{p - 1}{2}}\equiv 1[p]$ et $n^{\frac{p - 1}{2}}\equiv -1[p]$
2) Montrer que: $n^{p(p - 1)}\equiv 1[p]$

#### Systèmes de numération
**Exercice 45.**
1) Déterminer les valeurs des entiers naturels $ x $ et $ y $ pour lesquelles le nombre $ N = \overline{26x95y}_{(10)} $ est divisible par 3 et par 11.
2) Déterminer les chiffres $\alpha$ et $\beta$ pour lesquels le nombre $K = \overline{11\alpha1\beta}_{(10)}$ est divisible par 28.

**Exercice 46.**
Résoudre dans $\mathbb{N}$ les équations suivantes :

$$\begin{array}{l} (E_1) : \overline{23}_{(10)} = \overline{27}_{(b)} \quad ; \quad (E_2) : \overline{136}_{(10)} = \overline{253}_{(b)} \\ (E_3) : \overline{303}_{(10)} = \overline{523}_{(b)} \quad ; \quad (E_4) : \overline{12551}_{(10)} = \overline{30407}_{(b)} \end{array}$$

**Exercice 47.**
Soit $b$ un entier naturel supérieur ou égal à 6.

On considère le nombre $N = \overline{1540}_{(b)}$.

1) Montrer que le nombre $N$ est divisible par $b$, par $b + 1$ et par $b + 4$.
2) Existe-t-il des valeurs de l'entier $ b $ pour lesquelles le nombre $ N $ est divisible par $ b - 1 $?

**Exercice 48.**
Les questions suivantes sont indépendantes.

A) Soit $N \in \mathbb{N}$ tel que : $N = \overline{52}_p$ et $N = \overline{42}_q$.
Déterminer les valeurs de $p$ et $q$.

B) Soit $X = \overline{62310425}_{(7)}$.

Déterminer l'écriture du reste de la division euclidienne de $X$ dans le système de numération de base 7.

C) Déterminer les entiers naturels $\alpha, \beta$ et $b$ tels que :

$$\overline{\beta\beta\beta}_{(b)} = \overline{\alpha\alpha}_{(2)}$$

D) On considère les nombres suivants:

$$x = \overline{236}_{(8)} \quad \text{et} \quad y = \overline{347}_{(8)}$$

Calculer : $x + y$ et $x \times y$

E) Soit $b$ un entier naturel supérieur ou égal à 2 tel

que : $\overline{45}_{(b)} + \overline{36}_{(b)} = \overline{103}_{(b)}$

Calculer : $\overline{45}_{(b)} \times \overline{36}_{(b)}$

F) Représenter le nombre $\overline{4523}_{(8)}$ dans le système de numération binaire.

**Exercice 49.**
Les questions suivantes sont indépendantes.

A) Soit $N = \overline{1010111}_{(2)}$. Montrer que le reste de la division euclidienne de $N$ par $2^3$ est $\overline{111}_{(2)}$.

B) Déterminer l'entier naturel $b$ sachant que :

$$334 = \overline{11032}_{(b)}$$

C) Soit $p \in \mathbb{N}^* - \{1\}$. Montrer que le nombre $\overline{10401}_{(p)}$ n'est pas premier.

**Exercice 50.**
On considère le nombre : $N = \overline{28\alpha75\beta}_{(10)}$

1) Montrer que: $3 \mid N\Rightarrow 3 \mid 1 + \alpha +\beta$
2) Montrer que: $N\equiv 8 - \alpha +\beta$ [11]
3) En déduire $\alpha$ et $\beta$ sachant que: $3 \mid N$ et $11 \mid N$

#### ARITHMÉTIQUE ET SUITES NUMÉRIQUES
**Exercice 51.**
On considère la suite numérique $(u_n)$ définie par :

$$\begin{cases} u_0 = 14 \\ u_{n+1} = 5u_n - 6 \text{ si } n \in \mathbb{N} \end{cases}$$

1) Montrer que: $(\forall n\in \mathbb{N})u_n\in \mathbb{N}$
2) Montrer que pour tout $n\in \mathbb{N}$

$$u_{n+2} \equiv u_n [4] \quad \text{et} \quad 2u_n \equiv 28 [100]$$

3) A-t-on : $(\forall n \in \mathbb{N}) u_n \equiv 14 [100]$

**Exercice 52.**
Pour tout $n \in \mathbb{N}^*$, on pose : $S_n = \sum_{p=1}^n p^3$.

1) Calculer $S_{n + 1}\wedge S_n$
2) Montrer que: $(\forall n\in \mathbb{N}^*)S_{n + 2}\wedge S_{n + 1}\wedge S_n = 1$

**Exercice 53.**
Pour tout $n \in \mathbb{N}^*$, on pose : $F_n = 2^{2^n} + 1$.

Montrer que : $(\forall (n; k) \in \mathbb{N}^* \times \mathbb{N}^*) F_n \wedge F_{n+k} = 1$

**Exercice 54.**
Pour tout $n \in \mathbb{N}^*$, on pose :

$$x_n = \frac{n(n+1)}{2} ; \quad y_n = \frac{n(n+1)(2n+1)}{6} ; \quad z_n = x_n^2$$

1) Montrer que pour tout $n \in \mathbb{N}^*$ :

$$x_n \in \mathbb{N} \quad \text{et} \quad y_n \in \mathbb{N} \quad \text{et} \quad z_n \in \mathbb{N}$$

2) Pour tout $n \in \mathbb{N}^*$, on pose : $d_n = (2n+1) \wedge 3$

a) Calculer $d_{n}$ en fonction de $n$
b) En déduire $ x_{n} \wedge y_{n} $.

3) Calculer $\Delta_{n} = n\wedge (n + 2)$
4) En déduire $ z_{n+1} \wedge z_n $.
5) Montrer que si $ n \geq 2 $ alors: $ z_{n} \wedge z_{n+1} \wedge z_{n+2} = 1 $.

### Exercices de perfectionnement
**Exercice 55.**
Montrer que pour tout $n \in \mathbb{N}$ :

a) $3^{6n + 3} + 1\equiv 0[7]$ ；b） $10^{n}(9n - 1)\equiv 8[9]$
c) $3^{6n + 2} + 3^{3n + 1} + 1\equiv 0[13]$ ；d） $7^{3n}\equiv 1[9]$
e) $5n^{3} + n\equiv 0[6]$ ；f） $n(n + 1)(n + 5)\equiv 0[6]$
g) $5\left(n^{2} + n\right)^{2}\equiv 0[20]$ ；h） $4^n +7^n\equiv 2[9]$

**Exercice 56.**
1) Montrer que pour tout $n \in \mathbb{N}$ :

$$6^n \equiv 1 + 5n \text{ [25]} \quad \text{et} \quad 4^n + 6n - 1 \equiv 0 \text{ [9]}$$

2) Montrer que pour tout $(a; b) \in \mathbb{N}^2$ :

$$ab(a^2 - b^2) \equiv 0 \text{ [3]}$$

3) Montrer que pour tout $n \in \mathbb{Z}$ : $n^{19} \equiv n \text{ [19]}$

**Exercice 57.**
Montrer que pour tout $n \in \mathbb{N}^*$ :

$$\begin{array}{l} (n + 1)^n \equiv 1 \text{ [n}^2 \text{ ]} \quad ; \quad 2^{2n-1} \times 3^{n+2} + 1 \equiv 0 \text{ [11]} \\ n(n + 1)(n + 2)(n + 3) \equiv 0 \text{ [24]} \end{array}$$

**Exercice 58.**
Résoudre dans $\mathbb{N}$ ce qui suit :

a) $2^{n} + 5^{n}\equiv 0[7]$ ；b） $100 + 102^{n} + 103^{n}\equiv 0[7]$
c) $(2n + 3)5^{n}\equiv 0[8]$ ；d） $5^{n} + 2n + 3\equiv 0[8]$

**Exercice 59.**
1) Déterminer l'ensemble des diviseurs de 210.
2) Soit $(x; y) \in \left(\mathbb{N}^{*}\right)^{2}$. On pose:

$$m = x \vee y \quad \text{et} \quad d = x \wedge y$$

Déterminer tous les couples $(x; y)$ vérifiant :

$$\begin{cases} m = 210d \\ y - x = d \end{cases}$$

**Exercice 60.**
Les questions 1), 2) et 3) sont indépendantes.

Pour tout $(a; b) \in \left(\mathbb{N}^*\right)^2$, on pose :

$$m = a \vee b \quad \text{et} \quad d = a \wedge b$$

1) Déterminer tous les couples $(a; b)$ tels que: $a$ ne divise pas $b$ et $a < b$ et $2m + 3d = 78$.
2) Déterminer tous les couples $(a; b)$ tels que:

$$\begin{cases} a \le b \\ a + b = 100 \\ m = 19 \end{cases}$$

3) Déterminer tous les couples $(a; b)$ tels que :

$$a < b \quad \text{et} \quad m - d = 77.$$

4) Déterminer tous les paires $\{a; b\}$ tels que :

$$2m + 7d = 11$$

**Exercice 61.**
Soit $a$, $b$, $\alpha$ et $\beta$ des éléments de $\mathbb{Z}^*$ tels que : $a = b\alpha + \beta$.

1) Montrer que: $a \wedge b = b \wedge \beta$.
2) On pose: $ d_{1} = a \wedge b $ et $ d_{2} = (9a + 7b) \wedge (5a + 4b) $.
Déterminer $ d_{2} $ en fonction de $ d_{1} $.
3) Calculer $(9n + 4)\wedge (2n - 1)$ selon les valeurs de $n\in \mathbb{Z}$

**Exercice 62.**
1) Soit $(a; b) \in \left(\mathbb{N}^*\right)^2$ tel que : $a + b = 23$

a) Montrer que: $a \wedge b = 1$.
b) En déduire $ a $ et $ b $ tels que: $ a < b $ et $ a \vee b = 126 $

2) Résoudre dans $\mathbb{Z}^2$ l'équation: $9u - 14v = 1$.
3) On considère l'ensemble $S$ des nombres $x\in \mathbb{Z}$ tels

que : $$\begin{cases} x \equiv 4 \text{ [9]} \\ x \equiv 5 \text{ [14]} \end{cases}$$

Montrer que les éléments de $S$ est congrus à un même nombre modulo 126.

**Exercice 63.**
On considère dans $\mathbb{Z}^2$ l'équation $(E)$ suivante :

$$(E) : 409x - 68y = 17$$

1) Montrer que si $(x; y)$ est solution de $(E)$ alors le nombre $x$ est divisible par 17.
2) Déterminer la solution $(x_0; y_0)$ de l'équation $(E)$ tel que $0 < x_0 < 30$ et en déduire les solutions de $(E)$.
3) Soit $(x;y)$ une solution de $(E)$.

a) Montrer que le quotient de la division euclidienne de $y$ par $x$ est indépendant de $x$ et de $y$.
b) Montrer que $ x \wedge y = 17 $ si, et seulement si, le reste de la division euclidienne de $ y $ par $ x $ est un multiple du nombre 17.

**Exercice 64.**
Soit $(u; v) \in (\mathbb{Z}^*)^2$.

1) Montrer que si $ u \wedge v = 1 $ alors: $ (u^2 + v^2) \wedge u = 1 $ et $ (u^2 + v^2) \wedge v = 1 $ et $ (u^2 + v^2) \wedge (uv) = 1 $
2) On considère dans $\left(\mathbb{Z}^*\right)^3$ l'équation:

$$(E) : (x^2 + y^2)z = 26xy$$

a) Soit $(x; y; z)$ une solution de $(E)$ tel que $x \wedge y = 1$. Montrer qu'il existe $t \in \mathbb{Z}$ tel que :

$$(x^2 + y^2)t = 26$$

b) Trouver tous les triplets $(x; y; z)$ solutions de l'équation $(E)$ tels que : $x \wedge y = 1$.

**Exercice 65.**
On considère dans $\mathbb{N}^* \times \mathbb{N}^*$ l'équation $(E)$ suivante :

$$(E) : x^2 + y^2 + xy - 13x = 0$$

On pose : $d = x \wedge y$ et $x = ad$ et $y = bd$

1) Montrer que $a$ divise $d$.
2) On pose: $d = ac$ ou $c\in \mathbb{N}^*$

Montrer que : $c(a^2 + ab + b^2) = 13$

3) En déduire que $ c = 1 $.
4) Résoudre dans $\mathbb{N}^* \times \mathbb{N}^*$ l'équation $(E)$.

**Exercice 66.**
Soit $p$ et $q$ deux entiers naturels non nuls.

1) Montrer que si $p \wedge q = 1$ alors :

$$(p + q) \wedge p = 1 \text{ et } p \wedge q(p + 1) = 1$$

2) Soit $(x; y) \in \mathbb{N}^* \times \mathbb{N}^*$ tel que :

$$(1) \quad x(43 - x) = y(x + y)$$

On pose : $d = x \wedge y$ et $x = ad$ et $y = bd$

a) Montrer que: $a(43 - ad) = bd(a + b)$.
b) Montrer que $a$ divise $d$. On pose donc $d = ac$.
c) Montrer que $c\left(a^{2} + ab + b^{2}\right) = 43$

et en déduire $c = 1$.

d) Déterminer tous les couples $(x; y) \in \mathbb{N}^* \times \mathbb{N}^*$ vérifiant la relation $(1)$.

**Exercice 67.**
On considère dans $\mathbb{Z}^2$ l'équation $(E)$ suivante :

$$(E) : 4x^2 - 9y^2 = 432$$

1) a) Montrer que si $(x;y)$ est une solution de $(E)$, alors: $2 \mid y$ et $3 \mid x$.
b) Montrer que si $(X;Y)$ est une solution de l'équation $X^{2} - Y^{2} = 12$ alors $(3X;2Y)$ est une solution de l'équation $(E)$.
2) a) Résoudre dans $\mathbb{Z}^2$ l'équation $X^2 - Y^2 = 12$.
b) En déduire les solutions de l'équation $(E)$.

**Exercice 68.**
Soit $(a; b) \in \mathbb{N}^2$. On pose :

$$A = 11a + 2b \quad \text{et} \quad B = 18a + 5b$$

1) a) Calculer $7A + B$ en fonction de $a$ et $b$.
b) En déduire que: $A \equiv 0[19] \Leftrightarrow B \equiv 0[19]$
2) On pose: $A \wedge B = \delta$

Montrer que : $a \wedge b = 1 \Rightarrow \delta \in \{1; 19\}$

**Exercice 69.**
Le plan est muni d'un repère orthonormé $(O; \vec{i}, \vec{j})$.

On considère les plans $\mathcal{P}$ et $\mathcal{Q}$ définis par :

\[
\mathscr {P}: x + 2 y - z + 2 = 0 \text { et } \mathscr {Q}: 3 x - y + 5 z = 0
\]

1) Montrer que les plans $\mathcal{P}$ et $\mathcal{Q}$ se coupent selon une droite $\mathcal{D}$.
2) Soit $ M(x; y; z) $ un point de l'espace.
Montrer que: $M \in \mathcal{D} \Leftrightarrow 8x + 9y + 10 = 0$
3) Quelle sont les points de la droite $\mathcal{D}$ dont les coordonnées appartiennent à $\mathbb{Z}$?

**Exercice 70.**
1) Montrer que pour tout $(a; b; c) \in \mathbb{Z}^3$:

\[
a \wedge b = b \wedge (a - b c)
\]

2) Montrer que pour tout $n \in \mathbb{Z}$:

\[
\left(5 n ^ {3} - n\right) \wedge (n + 2) = (n + 2) \wedge 38
\]

3) Déterminer l'ensemble H définie par :

\[
H = \left\{n \in \mathbb {Z} \mid (n + 2) \mid (5 n ^ {3} - n) \right\}
\]

4) Quelles sont les valeurs possibles de nombre :

\[
\left(5 n ^ {3} - n\right) \wedge (n + 2)?
\]

5) Déterminer l'ensemble K définie par :

\[
K = \left\{n \in \mathbb {Z} \mid (5 n ^ {3} - n) \wedge (n + 2) = 19 \right\}
\]

**Exercice 71.**
Résoudre dans $\left(\mathbb{N}^{*}\right)^{2}$ les systèmes suivants :

1)  $ \left\{\begin{aligned}x\wedge y&=x-y\\ x\vee y&=12\end{aligned}\right. $ ; 2)  $ \left\{\begin{aligned}x\wedge y&=x-y\\ x\vee y&=12\end{aligned}\right. $

3)  $ \left\{\begin{aligned}x\wedge y&=12\\ x\vee y&=420\\ x>y>20\end{aligned}\right. $ ; 4)  $ \left\{\begin{aligned}x\vee y&=\left(x\wedge y\right)^{2}\\ x+y&=180\end{aligned}\right. $

**Exercice 72.**
Soit $(a;b;c;d)\in (\mathbb{Z}^{*})^{4}$ tel que: $a\wedge b = c\wedge d = 1$

Montrer que:  $ (ac) \wedge (bd) = (a \wedge d)(b \wedge c) $

**Exercice 73.**
Soit $(a;b;c;d;p;q)\in (\mathbb{Z}^{*})^{6}$ tel que: $ad - bc = 1$

Montrer que:  $ (ap + bq) \wedge (cp + dq) = p \wedge q $

**Exercice 74.**
Soit $(x;p;q;d)\in (\mathbb{N}^{*})^{4}$ avec $x > 1$.

1) Montrer que si $d \mid p$ alors $\left(x^{d} - 1\right)$ divise $\left(x^{p} - 1\right)$.
2) a) Montrer que si $ p \wedge q = d $ alors il existe un couple $ (m; n) \in \mathbb{N}^2 $ avec $ mp - nq = d $.

b) En déduire que si $ p \wedge q = d $, alors il existe un couple $ (m; n) \in \mathbb{N}^2 $ tel que :

\[
\left(x ^ {m p} - 1\right) - \left(x ^ {n q} - 1\right) x ^ {d} = x ^ {d} - 1
\]

3) Déduire de ce qui précède que :

\[
\left(x ^ {m p} - 1\right) \wedge \left(x ^ {n q} - 1\right) = x ^ {d} - 1
\]

**Exercice 75.**
Soit a et b deux entiers naturels non nuls.

1) Montrer que :

\[
(a \wedge b) + (a \vee b) = a + b \Leftrightarrow (a \mid b \text {   et   } b \mid a)
\]

\[
\left(a ^ {2} + a b + b ^ {2}\right) \wedge (a b) = (a \wedge b) ^ {2}
\]

2) a) Montrer l'équivalence: $a^2 \mid b^2 \Leftrightarrow a \mid b$

b) En déduire que: $(\forall r \in \mathbb{Q}^*) r^2 \in \mathbb{Z} \Leftrightarrow r \in \mathbb{Z}$

**Exercice 76.**
On considère l'ensemble :

\[
S = \left\{\left(x; y\right) \in \mathbb {N} ^ {2} \mid 2 ^ {x} - 3 ^ {y} = 1 \right\}
\]

1) Montrer que:  $ (2;1)\in S $  et  $ (1;0)\in S $
2) Soit $(x; y) \in \mathbb{N}^2$ tel que: $(x; y) \notin \{(1; 0); (2; 1)\}$ On suppose que $y \geq 2$.

a) Montrer que:  $ (x;y)\in S\Rightarrow2^{x}\equiv1[9] $

b) Montrer que: $2^{x} \equiv 1[9] \Rightarrow x \equiv 0[6]$

3) En déduire que: $ S = \{(1;0); (2;1)\} $

**Exercice 77.**
Soit $p$ un nombre premier.

1) a) On suppose dans cette question que $p \ge 5$.

Montrer que $p^2 \equiv 1[3]$ et $2^p \equiv 2[3]$ puis en déduire que $p^2 + 2^p$ n'est pas premier.

b) Montrer que si $p^2 + 2^p$ est premier alors $p = 3$.

2) Montrer que si $p$ divise $2^p + 1$ alors $p = 3$.

3) a) Vérifier que pour tout $x \in \mathbb{N}^*$ :

$$\left( 2x^2 + x \right)^2 < 4 \left( 1 + x + x^2 + x^3 + x^4 \right) < \left( 2x^2 + x + 2 \right)^2$$

b) Montrer que si la somme des diviseurs positifs du nombre $p^4$ est un carré parfait alors $p = 3$.

**Exercice 78.**
Déterminer les entiers naturels $a, b$ et $c$ tels que :

$$\begin{cases} a \wedge b = 12 \\ b \wedge c = 18 \\ a + b + c = 102 \end{cases}$$

**Exercice 79.**
On considère dans $\mathbb{Z}^3$ l'équation : (1) $x^2 + 5y^2 = z^2$

1) On pose $\delta = x \wedge y$.

Montrer que l'on peut restreindre la résolution de l'équation (1) à $\delta = 1$.

2) On pose $d = (z - x) \wedge (z + x)$.

Montrer que : $d = 1$ ou $d = 2$

3) Montrer que si $d = 1$, alors il existe $(u; v) \in \mathbb{Z}^2$ tel que : $u$ et $v$ impairs et $y = uv$ et $5u^2 + v^2 = z$.

4) Montrer que si $y = 2$, alors il existe $(u; v) \in \mathbb{Z}^2$ tel que : $u$ et $v$ impairs et $y = 2uv$ et $5u^2 + v^2 = z$.

5) Résoudre dans $\mathbb{Z}^3$ l'équation (1).

**Exercice 80.**
Soit $(x; y) \in \mathbb{N}^2$ tel que : $xy \mid (x^2 + y^2 - x)$

Montrer que $x$ est un carré parfait.

**Exercice 81.**
Soit $(x; y) \in \mathbb{Z}^2$ tel que : $x + y^2 = y^3$.

1) On suppose que $xy \neq 0$.

a) Montrer que $y$ divise $x$.

b) On pose : $x = dy$. Établir que $y$ divise $d$.

c) En déduire qu'il existe $\alpha \in \mathbb{Z}^*$ tel que :

$$y = 2\alpha + 1 \quad \text{et} \quad x = 2\alpha(2\alpha + 1)^3$$

2) Résoudre dans $\mathbb{Z}^2$ l'équation : $x + y^2 = y^3$

**Exercice 82.**
1) Soit $p$ et $q$ deux éléments de $\mathbb{Z}^*$ tels que $p \wedge q = 1$.

a) Montrer que pour tout $(a; b) \in \mathbb{Z}^2$, le système :

$$(S) : \begin{cases} x \equiv a[p] \\ x \equiv b[q] \end{cases}$$

admet au moins une solution dans $\mathbb{Z}$.

b) Montrer que si $x$ et $x'$ sont deux solutions de $(S)$,

alors : $x \equiv x'[pq]$

c) Soit $x_0$ une solution particulière de $(S)$.

Résoudre dans $\mathbb{Z}$.

2) Application :

Résoudre dans $\mathbb{Z}$ les systèmes suivants : $(n \ge 2)$

$$(S_1) : \begin{cases} x \equiv 4[6] \\ x \equiv 2[11] \end{cases} ; \quad (S_2) : \begin{cases} x \equiv 3[n] \\ x \equiv 5[n+1] \end{cases}$$

**Exercice 83.**
Soit $(a; b; c; n) \in (\mathbb{N}^*)^3$ tel que : $a \wedge b = 1$ et $ab = c^n$.

Montrer que : $(\exists (\alpha; \beta) \in \mathbb{N}^2)$ ; $a = \alpha^n$ et $b = \beta^n$

**Exercice 84.**
Résoudre dans $\mathbb{Z}$ les systèmes de congruence :

$$(S_1) : \begin{cases} 5x \equiv 7[11] \\ 7x \equiv 11[5] \\ 11x \equiv 5[7] \end{cases} ; \quad (S_2) : \begin{cases} x \equiv 1[6] \\ x \equiv 3[10] \\ x \equiv 7[15] \end{cases}$$

**Exercice 85.**
On considère le polynôme :

$$P(x) = 16x^3 - 20x^2 - 8x + 3$$

On suppose que $P$ admet une racine dans $\mathbb{Q}^*$ que l'on note $\frac{m}{n}$ avec : $m \in \mathbb{Z}^*$ et $n \in \mathbb{N}^*$ et $m \wedge n = 1$.

1) Montrer que: $m \mid 3$ et $n \mid 16$
2) Soit $a\in \mathbb{Z}$

a) Déterminer un polynôme $Q$ tel que :

$$(\forall x \in \mathbb{R}) \quad P(x) - P(a) = (x - a)Q(x)$$

b) Vérifier que: $ n^2 Q\left(\frac{m}{n}\right) \in \mathbb{Z} $
c) Montrer que: $(m - an)\wedge n = 1$

3) En déduire que $(m - an)$ divise $P(a)$.

**Exercice 86.**
Soit $p \in \mathbb{N}^*$. On pose :

$$S = (2p - 1)^2 + (2p + 1)^2 + (2p + 3)^2$$

On suppose que $S = \overline{xxxx}$ dans le système décimal.

1) Montrer que: $ 12p(p + 1) = 11(x\overline{101} - 1) $
2) Montrer que: $p^2 \leq 832$
3) En déduire le chiffre $ x $.

**Exercice 87.**
1) Pour tout $n \in \mathbb{N}^* - \{1\}$, on pose : $a_n = (n!)^2 + 1$

a) Montrer que $ a_{n} $ est impair.
b) Montrer que $ a_{n} $ admet un diviseur premier strictement supérieur à $ n $.
c) On admet que le nombre $ p $ s'écrit sous la forme $ p = 4k + 3 $ avec $ k \in \mathbb{N} $. Montrer que $ a_{n} $ divise le nombre $ (n!)^{2(2k + 1)} + 1 $ et que le nombre $ p $ divise le nombre $ (n!)^p + n! $.

d) En déduire que le nombre $p$ ne peut pas s'écrire

sous la forme : $p = 4k + 3$ avec $k \in \mathbb{N}$.

2) En déduire de ce qui précède que la suite numérique $\left(4n + 1\right)_{n \in \mathbb{N}}$ contient une infinité des nombres premiers.

**Exercice 88.**
On considère la suite $(u_n)$ définie par :

$$\begin{cases} u_0 = 0 \text{ et } u_1 = 1 \\ u_{n+2} = 3u_{n+1} - 2u_n \quad (\forall n \in \mathbb{N}) \end{cases}$$

1) Calculer les termes $u_{2}, u_{3}, u_{4}, u_{5}$ et $u_{6}$.
2) Montrer que: $(\forall n \in \mathbb{N})$ $u_{n+1} = 2u_n + 1$ et en déduire $u_{n+1} \wedge u_n$.
3) a) Montrer que pour tout $ n \in \mathbb{N} : u_n = 2^n - 1 $. les nombres $ 2^n - 1 $ et $ 2^{n+1} - 1 $ sont-ils premiers entre eux pour tout $ n \in \mathbb{N} $? Justifier.
b) Vérifier que pour tout $(n;p)\in \mathbb{N}^2$

$$u_{n+p} = u_n(u_p + 1) + u_p$$

et en déduire que : $u_{n+p} \wedge u_p = u_n \wedge u_p$ (1)

c) Soit $(a; b) \in (\mathbb{N}^*)^2$ et $r$ le reste de la division euclidienne de $a$ par $b$.

En déduire de la propriété (1) que :

$$u_a \wedge u_b = u_b \wedge u_r \quad \text{et} \quad u_n \wedge u_b = u_{(a+b)}$$

d) Calculer $u_{1980} \wedge u_{312}$.

**Exercice 89.**
Soit $n$ un entier supérieur ou égal à 3. On pose :

$$S_n = \{x \in \mathbb{Z}/n\mathbb{Z} \mid x^2 + \overline{1} = \overline{0}\}$$

1) Justifier que $\overline{0}$ et $\overline{1}$ et $-1$ n'appartiennent pas a $S_{n}$
2) Montrer que pour tous $ x $ et $ y $ de $ S_{n} $:

$$(x + y)(x - y) = \overline{0}$$

3) Montrer que si l'entier $n$ est premier, alors :

$$\text{card } S_n = 2 \text{ ou } S_n = \emptyset$$

4) Résoudre l'équation $x^2 + \overline{1} = \overline{0}$ dans les cas où :

$$n \in \{5; 6; 7; 10\}$$

### Problèmes de synthèse
#### Se préparer aux devoirs
**Devoir I.**
Les parties A), B), C), D) et E) sont indépendantes.
Partie A:

1) a) Montrer que pour tout $n \in \mathbb{N}^*$ :

$$(2n+1) \wedge n = 1 \text{ et } (2n+1) \wedge n^2 = 1$$

b) En déduire que si $(n; d) \in \mathbb{N}^* \times \mathbb{N}^*$ tel que $d$ divise $2n+1$ alors $d \wedge n^2 = 1$.

2) Déterminer l'ensemble des entiers naturels $n$ tels que : $(2n+1) \wedge 5 = 5$

3) a) Montrer que pour tout $n \in \mathbb{N}^*$ :

$$n^2(n^2+1) \wedge (2n+1) = (2n+1) \wedge 5$$

b) En déduire l'ensemble des entiers naturels $n$ tels que : $n^2(n^2+1) \wedge (2n+1) = 1$

**Partie B :**
1) Résoudre dans $\mathbb{Z}^2$ l'équation: $11x - 7y = 10$
2) Résoudre dans $\mathbb{Z}$ les systèmes suivants:

$$(S_1) : \begin{cases} z \equiv 5 \text{ [7]} \\ z \equiv -5 \text{ [11]} \end{cases} ; (S_2) : \begin{cases} z \equiv -5 \text{ [7]} \\ z \equiv 5 \text{ [11]} \end{cases}$$

3) Résoudre dans $\mathbb{Z}$ l'équation : $z^2 \equiv 25 \text{ [77]}$

**Partie C :**
1) Soit $(m; n) \in \mathbb{N}^* \times \mathbb{N}^*$ tel que : $m \wedge n = 1$

a) Montrer que: $2m^2 + n^2 \neq 0[5]$
b) En déduire que: $\left(2m^{2} + n^{2}\right)\wedge 5 = 1$

2) On considère dans $\mathbb{R}$ l'équation $(E)$ suivante :

$$(E) : 2x^3 + x - 5 = 0$$

a) Montrer que $(E)$ admet une unique solution $\alpha$ dans $\mathbb{R}$ et que: $1 < \alpha < 2$.
b) On suppose que: $\alpha = \frac{m}{n}$ avec $m$ et $n$ des entiers naturels premiers entiers eux.

Vérifier que : $(2m^2 + n^2)m = 5n^3$ puis montrer

que : $m = 5$

c) En déduire que $\alpha$ est irrationnel.

**Partie D :**
1) Démontrer que, pour tout $n \in \mathbb{N}$, $2^{3n} - 1$ est un multiple de 7.

En déduire que $2^{3n+1} - 2$ est un multiple de 7 et que $2^{3n+2} - 4$ est un multiple de 7.

2) Déterminer les restes de la division euclidienne par 7 des puissances de 2.
3) Pour tout $p\in \mathbb{N}$ , on considère le nombre:

$$A_p = 2^p + 2^{2p} + 2^{3p}$$

a) Si $p = 3n$,quel est le reste de la division euclidienne de $A_{p}$ par 7?
b) Démontrer que si $ p = 3n + 1 $, alors $ 7 \mid p $.
c) Etudier le cas où $ p = 3n + 2 $.

4) On considère les nombres $a$ et $b$ écrits dans le système binaire :

$$a = \overline{1001001000}_{(2)} \text{ et } b = \overline{1000100010000}_{(2)}$$

a) Vérifier que ces deux nombres sont de la forme $A_{p}$
b) $a$ et $b$ sont-ils divisibles par 7? Justifier.

**Partie E :** *(Codage Affine)*
On numérise les lettres de l'alphabet par :

$$A = 0, B = 1, ..., Z = 25$$

On code ces lettres grâce à la fonction :

$$f(x) \equiv 17x + 22 \text{ [26]}$$

1) Coder les mots suivants :

« ARITHMETIQUE » et « FERMAT »

2) Déterminer la fonction $ f^{-1} $ de décodage.
3) Decoder les mots suivants:

« OAYRC » et « GAUSS » et « ELMOFIDE »

**Devoir 2.**

Les parties A), B), C), D) et E) sont indépendantes.

**Partie A :**
Soit $n \in \mathbb{N}$, on pose : $d = (n^2 + 1) \wedge (n + 1)$

1) a) Déterminer le nombre $d$ suivant la parité de $n$.
b) Montrer que pour tout $n \in \mathbb{N}^*$, le nombre $n^2 + 1$ n'est pas un carré parfait.

2) Soit $a, b$ et $n$ sont des entiers naturels non nuls et tels que : $a \wedge b = 1$ et $a(n^2 + 1) = b^2(n + 1)$

a) Montrer que : $a \wedge b^2 = 1$ et $a \leq n$ et $b \leq n$.

b) Montrer que : $(n^2 + 1) \wedge (n + 1) = 2$

c) On pose : $n^2 + 1 = 2p$ et $n + 1 = 2q$
avec : $(p; q) \in \mathbb{N}^* \times \mathbb{N}^*$ et $p \wedge q = 1$

Montrer que : $a = q$ et $b^2 = p$

d) On pose : $b = a + 1$.
Calculer $a, b$ et $n$.

**Partie B :**
1) Montrer que 163 est un nombre premier.

2) On considère dans $\mathbb{Z}^2$ l'équation $(E)$ suivante :

$$(E) : 13x - 162y = 1$$

a) Déterminer une solution particulière de $(E)$.

b) Résoudre dans $\mathbb{Z}^2$ l'équation $(E)$.

3) On considère dans $\mathbb{Z}$ le système $(S)$ suivant :

$$(S) : \begin{cases} x \equiv a[13] \\ x \equiv b[162] \end{cases} \text{ où } (a; b) \in \mathbb{Z}^2$$

a) Vérifier que le nombre $x_0 = 325b - 324a$ est une solution du système $(S)$.

b) Montrer que : $(S) \Leftrightarrow x \equiv x_0[2106]$

c) Résoudre dans $\mathbb{Z}$ le système $(S)$ dans le cas où $a = 2$ et $b = 3$.

4) Soit $x \in \mathbb{Z}$ tel que : $x^{25} \equiv 3[163]$

a) Montrer que : $x \wedge 163 = 1$ puis que $x \equiv 3^{13}[163]$.

b) En déduire que : $x^{25} \equiv 3[163] \Leftrightarrow x \equiv 3^{13}[163]$

**Partie C :**
Soit $p$ et $q$ deux nombres premiers positifs distincts.

1) a) Montrer que : $p^{q-1} \equiv 1[q]$ et $q^{q-1} \equiv 1[p]$

b) Montrer que : $p^{q-1} + q^{p-1} \equiv 1[pq]$

c) En déduire que l'équation d'inconnue

$$(x; y) \in \mathbb{Z}^2 : (p^{q-1} + q^{p-1})x + pqy \equiv x[pq]$$

n'admet pas de solution dans $\mathbb{Z}^2$.

2) Soit $a \in \mathbb{Z}$ tel que : $a \wedge p = 1$ et $a \wedge q = 1$

a) Montrer que : $a^{(p-1)(q-1)} \equiv 1[pq]$.

b) En déduire que $27^{4200} - 1$ est divisible par 4331.

**Partie D :**
Soit $m$ un entier naturel supérieur ou égal à 2.

1) Montrer que $m^2$ et $m - 1$ sont premiers entre eux.

2) On considère dans $\mathbb{Z}^2$ l'équation suivante :

$$(E_m) : m^2x + (m - 1)y = 1$$

Montrer que l'ensemble des solutions de $(E_m)$ est :

$$S_m = \left\{ (km - k + 1; -km^2 - m - 1)  \;/\; k \in \mathbb{Z} \right\}$$

3) Dans cette question, on pose : $m = 7$.

a) Vérifier que le couple $(49; -400)$ est une solution de l'équation $(E_7)$.

b) Montrer que 401 est un nombre premier.

c) En déduire en utilisant le théorème de Fermat que : $2011^{49^2} \equiv 2011[401]$

**Partie E :**
Soit $n \in \mathbb{N}$ tel que $n \geq 9$. On considère les nombres :

$$a = \overline{1680}_{(n)} \text{ et } b = \overline{252}_{(n)}$$

1) Montrer que : $n + 2 \mid b$ et $n + 2 \mid a$

2) On pose : $\alpha = \overline{21}_{(n)}$ et $\beta = \overline{14}_{(n)}$ et $d = \alpha \wedge \beta$

a) Montrer que $d$ divise 7.

b) Montrer que : $7 \mid (n - 3) \Rightarrow (7 \mid \alpha \text{ et } 7 \mid \beta)$

3) Montrer que : $(2n + 1) \wedge n = 1$

4) Déterminer $a \wedge b$ selon les valeurs de l'entier $n$.

**Devoir 3.**
Les parties A), B), C), D) et E) sont indépendantes.

Partie A:

Pour tout $n \in \mathbb{N}^* - \{1\}$, on pose: $a_n = \frac{n^3 - 1}{n + 1}$

1) a) On pose: $d = (n^3 - 1) \wedge (n + 1)$

Montrer que $d = (n + 1) \wedge 2$ puis déterminer les valeurs de $d$ selon la parité de l'entier $n$.

b) Existe-t-il des valeurs de $ n $ pour lesquelles $ a_{n} $ est un entier naturel?
c) Quelles sont les valeurs de $ n $ pour lesquelles $ a_{n} $ est une fraction irreductible.

2) On suppose dans cette question que $a_n$ est un nombre décimal, c'est-à-dire que:

$$\exists (\alpha; \beta) \in \mathbb{N}^2 \mid a_n = \frac{\alpha}{10^\beta}$$

a) Soit $p$ un entier premier positif tel que $p \mid n + 1$. Montrer que: $p = 5$ ou $p = 2$.
b) En déduire que $ a_{n} $ est un nombre décimal si, et seulement si:

$$(\exists (p; q) \in \mathbb{N}^2) \quad a_n = \frac{(2^p \times 5^q - 1)^3 - 1}{2^p \times 5^q}$$

Partie B:

Dans le système de numération de base $n$ ($n \ge 6$), on considère les nombres: $a = \overline{2310}_{(n)}$ et $b = \overline{252}_{(n)}$.

1) a) Montrer que $2n + 1$ divise $a$ et $b$.
b) On pose: $ d = a \wedge b $. Montrer que $ d = 2n + 1 $ ou $ d = 2(2n + 1) $ selon la parité de nombre $ n $.

2) On prend $n = 6$. Résoudre dans $\mathbb{Z}^2$ l'équation:

$$ax + by = -26$$

Partie C:

On considère dans $\mathbb{Z}^2$ l'équation: $(E) : 23x - 47y = 1$

1) a) Vérifier que l'équation $(E)$ admet au moins une solution dans $\mathbb{Z}^2$ puis la résoudre.

b) Déterminer tous les entiers relatifs $N$ vérifiant:

$$\begin{cases} N \equiv 1 \ [23] \\ N \equiv 2 \ [47] \end{cases}$$

2) a) Résoudre dans $\mathbb{Z}/47\mathbb{Z}$ l'équation: $\overline{x}^2 = \overline{1}$.
b) Montrer que pour tout $x \in \{1; 2; \ldots; 46\}$:

$$x^{23} \equiv -1 \ [47] \quad \text{ou} \quad x^{23} \equiv 1 \ [47]$$

c) Montrer que: $46! \equiv 46 \ [47]$

3) Montrer que le reste de la division euclidienne de nombre $2^{586}$ par 1081 est 1.

Partie D:

Dans le plan muni d'un repère orthonormé, on considère le point $M_n (\cos \alpha_n; \sin \alpha_n)$ tel que:

$$\alpha_n = \frac{\pi}{2} + \frac{5n\pi}{6} \quad \text{avec} \quad n \in \mathbb{N}$$

1) Soit $(n; p) \in \mathbb{N}^2$ tel que $n \ge p$.

Montrer que les points $M_n$ et $M_p$ sont confondus si, et seulement si: 12 divise $(n - p)$.

2) On considère dans $\mathbb{Z}^2$ l'équation: $(E) : 12x - 5y = 3$

a) Résoudre l'équation $(E)$.
b) En déduire l'ensemble des entiers naturels $ n $ tels les points $ M_{n} $ appartiennent à la demi-droite $ [Ox] $. (Demi-axe des abscisses positives)

Partie E:

Soit $a$ et $b$ deux entiers relatifs non nuls.

1) Montrer que: $a \wedge b = 1 \Rightarrow a \wedge [b(a + b)] = 1$
2) On considère dans $\left(\mathbb{N}^{\star}\right)^{2}$ l'équation $(E)$ suivante:

$$(E) : x^2 + y^2 + xy - 31x = 0$$

Soit $(x; y)$ une solution de $(E)$ et on pose: $d = x \wedge y$.

a) Montrer qu'il existe un couple $(a; b) \in (\mathbb{N}^*)^2$ tel

que: $a(31 - da) = bd(a + b)$

b) En déduire que $a$ divise $d$.

3) a) Montrer qu'il existe $c \in \mathbb{N}^*$ tel que:

$$c(a^2 + b^2 + ab) = 31$$

b) En déduire que $c = 1$.

4) En déduire les solutions de l'équation $(E)$.

**Devoir 4.**
On considère dans $\mathbb{N}^3$ l'équation : $(E) : x^2 + y^2 = z^2$

Partie A:
1) Vérifier que $(0; 0; 0), (3; 4; 5)$ et $(5; 12; 13)$ sont solutions de l'équation $(E)$.

2) Soit $(u; v) \in \mathbb{N}^2$ tel que $u < v$.
Montrer que $(u^2 - v^2; 2uv; u^2 + v^2)$ est une solution de l'équation $(E)$.

3) Montrer que si $(x; y; z)$ est solution de $(E)$ alors $(nx; ny; nz)$ est aussi solution de $(E)$ où $n \in \mathbb{N}$.

**Partie B :**
Dans cette partie, on veut résoudre l'équation $(E)$ dans l'ensemble $(\mathbb{N}^*)^3$.

Soit $(x; y; z)$ une solution de l'équation $(E)$.

On pose : $x \wedge y \wedge z = d$

1) Montrer qu'on peut restreindre l'étude à $d = 1$.
Dans tout ce qui suit, $(x; y; z)$ est une solution de $(E)$ telle que : $x \wedge y \wedge z = 1$

2) Montrer que : $x \wedge y = y \wedge z = z \wedge x = 1$

3) Montrer que $x$ et $y$ ont des parités distinctes et que le nombre $z$ est impair.

On suppose dans ce qui suit que $z$ et $x$ sont impairs, $y$ est pair et on pose : $\delta = (z - x) \wedge (z + x)$

4) Montrer que si $c^2 = ab$ et $a \wedge b = 1$ alors :

$$\left( \exists (\alpha; \beta) \in \mathbb{N}^2 \right) \left[ a = \alpha^2 \text{ et } b = \beta^2 \text{ et } \alpha \wedge \beta = 1 \right]$$

5) a) Montrer que : $\delta = 2$

b) En déduire qu'il existe $(u; v) \in \mathbb{N}^2$ tel que :

$$\begin{cases} z + x = 2u^2 \\ z - x = 2v^2 \\ u \wedge v = 1 \end{cases} \text{ puis que } y = 2uv$$

c) En déduire que :

$$(x; y; z) = (u^2 - v^2; 2uv; u^2 + v^2)$$

d) Donner les solutions de l'équation $(E)$.

**Devoir 5.**
Les questions suivantes sont indépendantes :

Q1) Quel est le reste de la division euclidienne de nombre $5^{100}$ par 7 ?

Q2) Montrer que $100^7 - 100$ est divisible par 7.

Q3) Démontrer que pour tout $n \in \mathbb{N}^*$, $5^{2n} - 2^{2n+1}$ est divisible par 7.

Q4) Calculer le reste de la division euclidienne de $353^{2018}$ par 13.

Q5) Calculer selon les valeurs de $n \in \mathbb{N}$, le reste de la division euclidienne de $7^n$ par 19.

Q6) On considère le nombre $N$ définie par :

$$N = \overline{abcdabcd}_{(10)} \text{ (c.-à-d. : écrit en base 10)}$$
Montrer que $N$ est divisible par 73.

Q7) Déterminer les entiers naturels $n$ tels que :

$$\frac{n+17}{n+4} \in \mathbb{Z}$$

Q8) Déterminer les entiers naturels $n$ tels que :

$$\frac{n^2 + 2n + 2}{n + 3} \in \mathbb{N}$$

Q9) On pose pour tout $(m; n) \in \mathbb{N}^2$ :

$$u(n; m) = \frac{(2n)! (2m)!}{n! m! (m+n)!}$$

a) Montrer que pour tout $(m; n) \in \mathbb{N}^2$ :

$$u(n+1; m) + u(n; m+1) = 4u(n; m)$$

b) En utilisant un raisonnement par récurrence sur $m$, montrer que pour tout $(m; n) \in \mathbb{N}^2$ :

$$u(n; m) \in \mathbb{N}$$

Q10) Déterminer $\underset{m \in \mathbb{N}}{\text{Max}} \sin(2^n)$, où le nombre $2^n$ est exprimé en degré.

Q11) Trouver tous les couples d'entiers $(x, y) \in \mathbb{N}^2$ tels que : $(x \vee y) + 11(x \wedge y) = 203$

Q12) Résoudre dans $\mathbb{N}^2$ l'équation suivante :

$$3x^3 + xy + 4y^3 = 349$$

On se propose de démontrer le théorème d'Euler, publié en 1761 par le mathématicien Leonard Euler.

Ce théorème est une généralisation du petit théorème de Fermat (qui ne traite que le cas où n est un nombre premier).

Il s'énonce de la façon suivante :

« Soit n un entier naturel et a un nombre premier avec n, alors a^{φ(n)} ≡ 1 [n] »

où φ : N* → N* désigne la fonction indicatrice d'Euler.

Soit (a; n) ∈ (N*)^2.

On note :

- φ, la fonction indicatrice d'Euler, la fonction

φ : N* → N*, définie par : φ(n) = Card(A)

où : A = {m ∈ N* \;/\; m < n et m ∧ n = 1}.

- m_1, m_2, ..., m_{φ(n)} les éléments de A.

et r_1, r_2, ..., r_{φ(n)} leurs restes respectifs par la division euclidienne par n.

1) a) Calculer :

- φ(1), φ(2), φ(p) si p est un nombre premier.

- φ(p × q), où p et p sont des nombres premiers distincts.

- φ(p^k), où p un nombre premier et k ∈ N.

b) Démontrer que : p premier ⇔ φ(p) = p - 1

c) Soit (u; v) ∈ N* × N*. Montrer que :

u ∧ v = 1 ⇒ φ(u × v) = φ(u) × φ(v)

d) Soit n ∈ N* - {1} et n = p_1^{α_1} × p_2^{α_2} × ... × p_k^{α_k} sa décomposition en produits de facteurs premiers. Montrer que :

φ(n) = n(1 - 1 \mid p_1)(1 - 1 \mid p_2) ... (1 - 1 \mid p_k)

e) Calculer φ(3240).

2) Si a ∧ n = 1, montrer que les nombres r_1, r_2, ..., r_{φ(n)} sont distincts, compris entre 1 et n - 1 et tous

premiers avec n.

3) En déduire que :

m_1 × m_2 × ... × m_{φ(n)} ≡ r_1 × r_2 × ... × r_{φ(n)} [n]

puis que : a^{φ(n)} ≡ 1 [n]

4) Établir que pour tout (a; n) ∈ (N*)^2 :

a ∧ n = 1 ⇒ a^{φ(n)} ≡ 1 [n]

5) Applications à l'algorithme RSA :

Soit p et q deux nombres premiers distincts et supérieurs ou égales à 3. On pose : n = pq.

Soit m un entier vérifiant : 0 ≤ m < n.

a) Montrer qu'il existe au moins un entier e premier avec (p - 1)(q - 1) et vérifiant :

1 < e < (p - 1)(q - 1)

b) Montrer qu'il existe un unique entier d vérifiant :

ed ≡ 1[(p - 1)(q - 1)] et 1 ≤ ed < (p - 1)(q - 1)

c) Montrer que : m^{ed} ≡ m [n]

6) Mise en œuvre de l'algorithme RSA :

Le résultat de la question précédente a un intérêt cryptographique. A priori, il permet de crypter les nombres entre 0 et n - 1.

Le chiffrement se fait en élevant à la puissance e :

f : n → n^e

Le déchiffrement en portant à la puissance d :

g : n → n^d

En effet, si un message en clair est n, le message chiffré est f(n) et comme g(f(n)) = n, on le déchiffre grâce à la fonction g.

En 1977, Ronald Rivest, Adi Shamir et Leonard Adleman ont remarqué qu'on disposait ainsi d'une méthode de chiffrement dont la clé était distincte de celle de déchiffrement. Elle est aujourd'hui appelée RSA en hommage à se inventeurs.

Voici une application pratique :

- Rachid choisit secrètement deux très grands nombres premiers p et q et publie : n = p × q

- Il choisit un exposant public convenable e (petit en

général, souvent égal à 3, pour simplifier les calculs).

- Il calcule l'exposant secret d par inversion modulaire.
- Le message à transmettre est découpé en entiers m < n.
- Ahmed calcule m' = m^e et envoie l'entier codé à Rachid.
- Rachid décode m' par :

$$\left(m'\right)^d = \left(m^e\right)^d = m^{ed} = m[n]$$

un éventuel attaquant indiscret peut capter le message codé m' mai il ne peut calculer, en un temps raisonnable, l'exposant de décodage d.

a) On donne p = 41 et q = 53. Calculer n et φ(n).
b) Montrer que e = 1427 est premier avec φ(n) en utilisant l'algorithme d'Euclide.
c) En déduire l'exposant secret d.
f) Coder, puis décoder l'entier 666 par l'algorithme RSA.

**Devoir 7.**
Le numéro INSEE de sécurité sociale est un code alphanumérique formé d'un nombre N de 13 chiffres qui sont dans l'ordre :

- Un chiffre pour le sexe.
- Deux chiffres pour l'année de naissance.
- Deux chiffres pour le département de naissance.
- Trois chiffres pour la commune de naissance.
- Trois chiffres qui permettent de distinguer les personnes nées au même lieu à la même période.

Auquel on rajoute une clé de contrôle codée sur deux chiffres. Cette clé est fabriquée par : k ≡ -N[97]

1) Calculer la clé associée au numéro :

$$N = 171\ 08\ 11\ 055\ 386$$

2) Montrer que si un seul chiffre de N est erroné, alors une erreur est détectée.
3) Montrer que si deux chiffres consécutifs de N sont intervertis, alors l'erreur est détectée.

**Devoir 8.**
Les parties A), B) et C) sont indépendantes.

Partie A : Autour du théorème de Wilson

1) Soit p un nombre premier et x un entier naturel. Démontrer l'équivalence :

$$x^2 \equiv 1[p] \Leftrightarrow (x \equiv 1[p] \text{ ou } x \equiv -1[p])$$

2) On dit qu'un entier naturel x est inversible modulo p s'il existe un entier naturel y tel que : xy ≡ 1[p]. y est appelé un inverse de x.

a) Montrer que tous les éléments de l'ensemble $ A = \{1;2,\ldots ,p - 1\} $ sont inversibles modulo $ p $ et que leur inverse est unique dans $ A $.
b) Quels sont les éléments qui sont leur propre inverse?
c) En déduire que:

$$p \text{ est un nombre premier } \Leftrightarrow (p-1)! \equiv -1[p]$$

Ceci constitue le théorème de Wilson.

Partie B : Les nombres parfaits

Un nombre entier naturel non nul est dit parfait s'il égal à la somme de ses diviseurs strictement positifs (autre que lui-même). Ainsi 6 est parfait car les diviseurs stricts de 6 sont 1, 2 et 3 et 1 + 2 + 3 = 6.

1) Montrer que 28 est un nombre parfait.
2) Soit $ n \geq 2 $ un entier. Montrer que si $ 2^n - 1 $ est premier alors $ 2^{n-1} (2^n - 1) $ est parfait.

Partie C : Numération décimale

Soit n ∈ ℕ*.

1) Déterminer en fonction de $ n $, le nombre de chiffres de $ n $ en base 10.
2) Soit $\sigma(n)$ la somme des chiffres de $n$ en base10

a) Montrer que la suite $\left(\frac{\sigma(n + 1)}{\sigma(n)}\right)_{n\geq 1}$ est bornée.
b) Montrer que $1 \leq \sigma(n) \leq 9(1 + \log n)$
c) Montrer que $\lim_{n\to \infty}\sqrt[n]{\sigma(n)} = 1$

#### Se préparer aux examens
On considère dans $\mathbb{Z}^2$ l'équation suivante :

$$(E) : 143x - 195y = 52$$

1) a) Déterminer le plus grand commun diviseur des nombres 143 et 195 et en déduire que l'équation $(E)$ admet des solutions dans $\mathbb{Z}^2$.
b) Sachant que $(-1; - 1)$ est une solution particulière de $(E)$, résoudre dans $\mathbb{Z}^2$ l'équation $(E)$ en indiquant les étapes de la résolution.
2) Soit $ n $ un entier naturel non nul et premier avec 5. Montrer que pour tout $ k \in \mathbb{N} : n^{4k} \equiv 1[5] $.
3) Soit $ x $ et $ y $ deux entiers naturels non nuls tels que:

$$x \equiv y \quad [4]$$

a) Montrer que pour tout $n\in \mathbb{N}^*$ .. $n^x\equiv n^y$ [5].
b) En déduire que pour tout $ n \in \mathbb{N}^* : n^x \equiv n^y $ [10].

4) Soit $x$ et $y$ deux entiers naturels tels que le couple $(x; y)$ soit solution de l'équation $(E)$.

Montrer que pour tout $n \in \mathbb{N}^*$, les nombres $n^x$ et $n^y$ ont le même chiffre d'unité dans le système de numération décimal.

**Examen National 2012 (Session Normale).**

Soit $x$ un entier relatif tel que : $x^{1439} \equiv 1436 \quad [2015]$

1) Sachant que $ 1436 \times 1051 - 2015 \times 749 = 1 $, montré 1436 et 2015 sont premiers entre eux.
2) Soit $ d $ un diviseur commun des nombres $ x $ et 2015. a) Montrer que $ d $ divise 1436.
b) En déduire que $ x $ et 2015 sont premiers entre eux.
3) a) En utilisant le théorème de Fermat, montrer que:

$$x^{1440} \equiv 1 \quad [5] \text{ et } x^{1440} \equiv 1 \quad [13] \text{ et } x^{1440} \equiv 1 \quad [31]$$

(remarquer que : $2015 = 5 \times 13 \times 31$)

b) Montrer que $x^{1440} \equiv 1 \quad [65]$ puis en déduire que :

$$x^{1440} \equiv 1 \quad [2015]$$

4) Montrer que : $x \equiv 1050 \quad [2015]$.

**Examen National 2015 (Session Normale).**

**Problème 3.**
Soit $n$ un entier naturel non nul. On pose :

$$b_n = 2 \times 10^n + 1 \quad \text{et} \quad c_n = 2 \times 10^n - 1$$

1) Montrer que $ b_{n} \wedge c_{n} = c_{n} \wedge 2 $ puis en déduire que les entiers $ b_{n} $ et $ c_{n} $ sont premiers entre eux.
2) Trouver un couple $(x_{n};y_{n})$ de $\mathbb{Z}^2$ vérifier l'égalité:

$$b_n \cdot x_n + c_n y_n = 1$$

**Examen National 2014 (Session De Rattrapage).**

**Problème 4.**
1) On considère dans $\mathbb{Z}^2$ l'équation $(E)$ suivante :

$$195x - 232y = 1$$

a) Déterminer le plus grand commun diviseur des entiers 195 et 232.
b) Montrer que l'ensemble des solutions de $(E)$ est:

$$S = \{(163 + 232k; 137 + 195k)  \;/\; k \in \mathbb{Z}\}$$

c) Trouver l'unique entier naturel $d$ vérifiant :

$$0 \le d \le 232 \quad \text{et} \quad 195d \equiv 1 \quad [232]$$

2) Montrer que le nombre 233 est premier.
3) On désigne par $ A $ l'ensemble des entiers naturels compris « au sens large » entre 0 et 232.

On considère l'application $f$ définie de $A$ dans $A$ comme suit :

Pour tout $a \in A$, $f(a)$ est le reste de la division euclidienne de nombre $a^{195}$ par 233.

a) Montrer que pour tout $(a; b) \in A^2$ :

$$f(a) = f(b) \Rightarrow a = b$$

b) Soit $(a; b) \in A^2$ tel que $f(a) = b$.

Déterminer $a$ en fonction de $b$.

c) En déduire que l'application $f$ est bijective puis déterminer sa bijection réciproque.

**Examen National 2007 (Session Normale).**

On considère dans $\left(\mathbb{N}^{+}\right)^{2}$ l'équation $(E)$ suivante :

$$(E): x^{2}(x^{2}+7)=y(2x+y)$$

Soit $(x; y) \in \left(\mathbb{N}^{+}\right)^{2}$ et $\delta = x \wedge y$. On pose :

$$x = \delta a \quad \text{et} \quad y = \delta b$$

1) On suppose que $(x; y)$ est une solution de $(E)$.

a) Vérifier que: $ a^2 \left( \delta^2 a^2 + 7 \right) = b(2a + b) $
b) En déduire qu'il existe un entier naturel $ k $ tel que: $ \delta^2 a^2 + 7 = kb $ et $ 2a + b = ka^2 $.
c) Montrer que $a = 1$
d) En déduire que: $(b + 1)^2 = \delta^2 + 8$.

2) Résoudre dans $\left(\mathbb{N}^{+}\right)^{2}$ l'équation $(E)$.

**Examen National 2003 (Session Normale).**

**Partie A :**
Soit $(a; b)$ un élément de $\mathbb{N}^{+} \times \mathbb{N}^{+}$ tel que le nombre premier 173 divise $a^{3} + b^{3}$.

1) Montrer que: $ a^{171} \equiv -b^{171}[173] $.
(remarquer que $ 171 = 3 \times 57 $)
2) Montrer que le nombre 173 divise $ a $ si, et seulement si 173 divise $ b $.
3) On suppose que 173 divise $ a $. Montrer que 173 divise le nombre $ a + b $.
4) On suppose que 173 ne divise pas $a$.

a) En utilisant le théorème de Fermat, montrer que

$$a^{172} \equiv b^{172}[173]$$

b) Montrer que: $ a^{171}(a + b) \equiv 0[173] $
c) En déduire que 173 divise $ a + b $.

**Partie B :**
On considère dans $\mathbb{N}^{+} \times \mathbb{N}^{+}$ l'équation :

$$(E): x^{3} + y^{3} = 173(xy+1)$$

Soit $(x; y)$ un élément de $\mathbb{N}^{+} \times \mathbb{N}^{+}$ solution de $(E)$.

On pose : $x + y = 173k$ avec $k \in \mathbb{N}^{+}$.

1) Vérifier que : $k(x-y)^{2} + (k-1)xy = 1$.

2) Montrer que $k = 1$ puis résoudre l'équation $(E)$.

**Examen National 2016 (Session Normale).**

1) Résoudre dans $\mathbb{Z}^2$ l'équation: $(E): 3x - 2y = 1$
2) Soit $ n $ un entier naturel non nul.

a) Montrer que le couple $(14n + 3;21n + 4)$ est sol. tion de I'équation $(E)$
b) En déduire que les nombres $14n + 3$ et $21n + 4$ sont premiers entre eux.

3) Soit $d = (2n+1) \wedge (21n+4)$.

a) Montrer que $d = 1$ ou $d = 13$
b) Montrer que: $d = 13\Leftrightarrow n = 6[13]$

4) Pour tout $n \in \mathbb{N}$ tel que $n \geq 2$, on pose :

$$A = 21n^{2} - 17n - 4 \quad \text{et} \quad B = 28n^{3} - 8n^{2} - 17n - 4$$

a) Montrer que $A$ et $B$ sont divisible par $n - 1$.
b) Déterminer selon les valeurs de $ n $, le plus grand commun diviseur des entiers $ A $ et $ B $.

**Examen National 2004 (Session De rattrapage).**

Pour tout $n \in \mathbb{N}^{+}$, on pose : $a_{n} = \frac{333 \dots 31}{n \text{ fois}}$

1) Vérifier que les entiers $ a_{1} $ et $ a_{2} $ sont premiers.
2) Montrer que pour tout $ n \in \mathbb{N}^+ $: $ 3a_n + 7 = 10^{n-1} $.
3) Montrer que pour tout $k\in \mathbb{N}:10^{30k + 2}\equiv 7[31]$
4) Montrer que pour tout $k\in \mathbb{N}:3a_{30k + 1}\equiv 0[31]$ puis en déduire que 31 divise $a_{30k + 1}$
5) Montrer que pour tout $ n \in \mathbb{N}^+ $, si $ n \equiv 1[30] $ alors l'équation $ a_n x + 31y = 1 $ n'admet pas de solutions dans l'ensemble $ \mathbb{Z}^2 $.

**Examen National 2014 (Session Normale).**

**Problème 1.**
1) Soit $n$ un entier naturel.

a) Montrer que si $ n $ est impair alors: $ n^2 \equiv 1[8] $
b) Montrer que si $n$ est pair alors:

$$n^2 \equiv 0[8] \quad \text{ou} \quad n^2 \equiv 1[8]$$

2) Soit $a, b$ et $c$ des entiers naturels impaires.

a) Montrer que le nombre $ a^2 + b^2 + c^2 $ n'est pas un carré parfait (c'est-à-dire, n'est pas un carré d'un entier naturel.
b) Montrer que: $ 2(ab + bc + ac) \equiv 6[8] $.

(on pourra remarquer que :

$$(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc)$$

c) En déduire que $ 2(ab + ac + bc) $ n'est pas un carré parfait.
d) Montrer que $ ab + ac + bc $ n'est pas un carré parfait.

**Examen National 2004 (Session Normale).**

**Problème 2.**
1) a) Vérifier que 503 n'est pas un entier premier.
b) Montrer que: $7^{502} \equiv 1[503]$

puis en déduire que : $7^{2008} \equiv 1[503]$

2) On considère dans $\mathbb{Z}^2$ l'équation $(E)$ suivante :

$$(E) : 49x - 6y = 1$$

Sachant que le couple $(1; 8)$ est solution de $(E)$, résoudre dans $\mathbb{Z}^2$ l'équation $(E)$ en indiquant les étapes de la résolution.

3) On pose : $N = 1 + 7 + 7^2 + ... + 7^{2007}$

a) Montrer que le couple $(7^{2006};N)$ est une solution de I'équation $(E)$.
b) Montrer que: $N \equiv 0[4]$ et $N \equiv 0[503]$
c) En déduire que $ N $ est divisible par 2012.

**Examen National 2012 (Session De Rattrapage).**

**Problème 3.**
Soit $N$ l'entier naturel exprimé dans le système de numération décimal par :

$$N = \underbrace{111...11}_{\substack{2010 \text{ fois} \\ \text{le chiffre 1}}}$$

1) Montrer que $N$ est divisible par 11.
2) a) Vérifier que le nombre 2011 est premier et que:

$$10^{2010} - 1 = 9N$$

b) Montrer que 2011 divise $9N$
c) En déduire que 2011 divise $9N$

3) Montrer que le nombre $N$ est divisible par 22121.

**Examen National 2011 (Session Normale).**

**Problème 4.**
**Partie A :**
Soit $p$ un nombre premier supérieur ou égal à 5.

1) Montrer que $p^2 \equiv 1[3]$.
2) a) En utilisant la parité du nombre $ p $, montré qu'il existe un entier naturel $ q $ tel que:

$$p^2 - 1 = 4q(q + 1)$$

b) En déduire que : $p^2 \equiv 1[8]$.

3) Montrer que : $p^2 \equiv 1[24]$

**Partie B :**
Soit $a$ un entier naturel premier avec le nombre 24.

1) Montrer que: $a^2 \equiv 1[24]$.
2) Existe-t-il des entiers naturels $a_1, a_2, \ldots, a_{23}$ tels que:

$a_1^2 + a_2^2 + ... + a_{23}^2 = 23997$ et $a_k \wedge 24 = 1$ pour tout entier $k \in \{1; 2; ...; 23\}$ ?

**Examen National 2005 (Session Normale).**

**Problème 5.**
Pour tout entier $x$ supérieur ou égale à 2, $\overline{abc}_x$ désigne l'écriture du nombre "$abc$" dans le système de numération à base $x$.

1) On considère dans $\mathbb{Z}^2$ l'équation $(E)$ suivante :

$$(E) : (x+1)^2 = 9 + 5y$$

a) Soit $(x; y)$ une solution de l'équation $(E)$.

Montrer que : $x \equiv 1[5]$ ou $x \equiv 2[5]$

b) Résoudre l'équation $(E)$.

2) Montrer que pour tout $k \in \mathbb{Z}$ :

$$(5k^2 + 4k - 1) \wedge (5k + 1) = (k - 3) \wedge 8$$

3) Résoudre dans $\mathbb{N}^2$ le système $(S)$ suivant :

$$(S) : \begin{cases} \overline{121}_x = \overline{59}_y \\ x \wedge y = 8 \\ x \equiv 1[5] \end{cases}$$

**Examen National 2005 (Session De Rattrapage).**

Soit $x$ un entier naturel vérifiant : $10^x \equiv 2[19]$

1) a) Vérifier que : $10^{x+1} \equiv 1[19]$

b) Montrer que : $10^{18} \equiv 1[19]$

2) Soit $d$ le plus grand commun diviseur de $x+1$ et $18$.

a) Montrer que: $10^{d} \equiv 1$ [19].
b) Montrer que: $d = 18$
c) En déduire que: $ x \equiv 17[18] $.

**Examen National 2011 (Session De Rattrapage).**

On considère dans $\mathbb{Z}$ le système $(S)$ suivant :

$$(S) : \begin{cases} x \equiv a[p] \\ x \equiv b[p] \end{cases}$$

où $a, b, p$ et $q$ sont des entiers relatifs avec $p \wedge q = 1$.

1) a) Montrer qu'il existe un couple $(u_0; v_0) \in \mathbb{Z}^2$ tel

que : $pu_0 + qv_0 = 1$

b) Montrer que $x_0 = bqu_0 + aqv_0$.

2) Soit $x$ une solution du système $(S)$.

Montrer que le nombre $pq$ divise le nombre $x - x_0$.

3) Soit $ x $ un entier relatif tel que $ pq $ divise $ x - x_0 $. Montrer que $ x $ est solution du système $ (S) $.
4) En déduire l'ensemble solution du système $(S)$.
5) Résoudre dans $\mathbb{Z}$ le système suivant:

$$\begin{cases} x \equiv 1[8] \\ x \equiv 3[13] \end{cases}$$

**Examen National 2007 (Session De Rattrapage).**

1) Déterminer les entiers naturels $m$ tels que :

$$m^2 + 1 \equiv 0[5]$$

2) Soit $p$ un nombre premier tel que :

$$p = 3 + 4k \quad \text{avec} \quad k \in \mathbb{N}$$

et soit $n \in \mathbb{N}$ tel que : $n^2 + 1 \equiv 0[p]$

a) Vérifier que: $\left(n^{2}\right)^{1 + 2k}\equiv -1[p]$
b) Montrer que $n$ et $p$ sont premiers entre eux.
c) En déduire que: $\left(n^{2}\right)^{1 + 2k}\equiv 1[p]$
d) En déduire de ce qui précède qu'il n'existe aucun entier naturel vérifiant : $n^2 + 1 \equiv 0[p]$.

**Examen National 2010 (Session Normale).**

Pour tout $n \in \mathbb{N}^*$, on pose : $a_n = 2^n + 3^n + 6^n - 1$

1) a) Vérifier que $ a_{n} $ est pair pour tout $ n \in \mathbb{N}^* $.
b) Déterminer les valeurs de $ n $ pour lesquelles on a

$$a_n \equiv 0[3]$$

2) Soit $p$ un nombre premier tel que $p > 3$.

a) Montrer que :

$$2^{p-1} \equiv 1[p] \text{ et } 3^{p-1} \equiv 1[p] \text{ et } 6^{p-1} \equiv 1[p]$$

b) Montrer que $p$ divise $a_{p - 2}$
c) Montrer que pour tout entier naturel premier $q$ il existe $n\in \mathbb{N}^*$ tel que: $a_{n}\wedge q = q$

**Examen National 2009 (Session Normale).**

On considère dans $\mathbb{N}^* \times \mathbb{N}^*$ l'équation :

$$(E) : x^2(x + y) = y^2(x - y)^2$$

1) Soit $(x; y)$ une solution de $(E)$. On pose :

$$d = x \wedge y \quad ; \quad x = ad \quad ; \quad y = bd$$

a) Vérifier que: $ db^2(a - b)^2 = (a + b)a^2 $
b) En déduire que: $ b = 1 $.
c) Montrer que: $ a \neq 1 $ et $ (a - 1) $ divise $ (a + 1) $.
d) En déduire que: $ a = 2 $ ou $ a = 3 $

2) Résoudre dans $\mathbb{N}^* \times \mathbb{N}^*$ l'équation $(E)$.

**Examen National 2006 (Session Normale).**

**Partie A :**
On considère dans $\mathbb{Z}^2$ l'équation suivante :

$$(E) : 35u - 96v = 1$$

1) Vérifier que le couple $(11;4)$ est une solution particulière de l'équation $(E)$.
2) En déduire l'ensemble solution de l'équation $(E)$.

**Partie B :**
On considère dans $\mathbb{N}^2$ l'équation : $(F) : x^{35} \equiv 2[97]$

1) Soit $x$ une solution de l'équation $(F)$.

a) Montrer que le nombre 97 est premier et que les entiers $ x $ et 97 sont premiers entre eux.
b) Montrer que: $x^{96} \equiv 1[97]$
c) Montrer que: $x \equiv 2^{11}[97]$

2) Montrer que si un entier naturel $ x $ vérifie la relation $ x \equiv 2^{11}[97] $, alors $ x $ est une solution de $ (F) $.
3) Montrer que l'ensemble solution de l'équation $(F)$ est l'ensemble des entiers naturels qui s'écrivent sous la forme $11 + 97k$ avec $k\in \mathbb{N}$.

**Examen National 2008 (Session Normale).**

1) On pose : $a = pn$ et $b = p(n - 1)$

où $p \in \mathbb{N}^*$ et $n \in \mathbb{N}^* - \{1\}$.

Montrer que : $a \wedge b = a - b$

2) Montrer que si $a$ et $b$ sont des entiers naturels non nuls vérifiant l'égalité $a \wedge b = a - b$, alors il existe $(p; n) \in \mathbb{N}^2$ tel que : $a = pn$ et $b = p(n - 1)$.

3) Application :

Pour tout $(x; y) \in (\mathbb{N}^*)^2$, on pose : $a = 40x(3y + 2)$,

$$b = 15x(8y + 5) \text{ et } c = 24x(5y + 3).$$

a) Déterminer: $ a \wedge b $ et $ b \wedge c $.
b) Vérifier que: $ a \wedge b \wedge c = x $.

**Examen Bac 1995 (Session Normale).**

On considère dans $\mathbb{Z}^2$ l'équation $(E)$ suivante :

$$(E) : 16x - 5y = 65$$

On désigne par $S$ l'ensemble solution de $(E)$.

1) Montrer que si $(x;y)\in S$ alors: $x\equiv 0[5]$
2) Résoudre dans $\mathbb{Z}^2$ l'équation $(E)$.
3) Soit $(x; y) \in S$. On pose: $d = x \wedge y$.

a) Déterminer les valeurs possible de l'entier $ d $.
b) Déterminer les éléments $(x; y)$ de $S$ vérifier $d = 5$.

4) Soit $N = \overline{abc}_{(10)}$ un entier naturel écrit dans le système de numération décimale (avec $a \neq 0$ et $b \neq 0$).

On pose : $R(N) = \overline{cba}_{(10)}$.

a) Montrer que si $R(N) = 4N - 9$ alors :

$$133a + 10b = 32c + 3$$

puis en déduire que $a = 1$.

b) Déterminer les entiers naturels $N$ tels que :

$$R(N) = 4N - 9$$

**Examen Bac 1998 (Session Normale).**

## Résumé

- **Divisibilité.** Pour $a,b\in\mathbb{Z}$, $a\mid b$ signifie qu'il existe $k\in\mathbb{Z}$ tel que $b=ak$.
- **PGCD et PPCM.** L'algorithme d'Euclide calcule $a\wedge b$ ; pour $a$ et $b$ non nuls, $(a\wedge b)(a\vee b)=|ab|$.
- **Bézout.** $a\wedge b=1$ si, et seulement si, il existe $(u,v)\in\mathbb{Z}^2$ tel que $au+bv=1$.
- **Gauss.** Si $a\mid bc$ et $a\wedge b=1$, alors $a\mid c$.
- **Équation diophantienne.** L'équation $ax+by=c$ admet des solutions entières si, et seulement si, $a\wedge b$ divise $c$.
- **Congruences.** $a\equiv b\pmod n$ signifie que $n\mid(a-b)$ ; l'addition, la soustraction, la multiplication et les puissances sont compatibles avec cette relation.
- **Petit théorème de Fermat.** Si $p$ est premier, alors $a^p\equiv a\pmod p$ ; si $p\nmid a$, alors $a^{p-1}\equiv1\pmod p$.
- **Numération.** En base $b\ge2$, tout entier naturel s'écrit de manière unique sous la forme $a_nb^n+\cdots+a_1b+a_0$, avec $0\le a_i<b$ et $a_n\ne0$.

## Auto-évaluation

- Savoir calculer un PGCD par l'algorithme d'Euclide et retrouver des coefficients de Bézout.
- Reconnaître deux entiers premiers entre eux et appliquer correctement les théorèmes de Bézout et de Gauss.
- Résoudre une équation diophantienne linéaire dans $\mathbb{Z}^2$.
- Effectuer des calculs de congruences et exploiter le petit théorème de Fermat.
- Décomposer un entier en facteurs premiers et en déduire un PGCD ou un PPCM.
- Convertir et calculer des entiers dans une base de numération donnée.