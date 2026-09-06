# Chapitre 3 : Calcul de probabilités

## Histoire

Les probabilités sont aujourd'hui l'une des branches les plus importantes et les plus pointues des mathématiques. Pourtant, c'est en cherchant à résoudre des problèmes posés par les jeux de hasard que les mathématiciens donnent naissance aux probabilités.

Initialement, la probabilité d'un événement était définie comme le nombre de cas favorables pour l'événement, divisé par le nombre total d'issues possibles à l'expérience aléatoire.

Le véritable début de calcul de probabilités date de la correspondance entre Pierre de Fermat et Blaise Pascal en 1654. Ceux-ci commencent à élaborer les bases du traitement mathématique des probabilités autour de l'étude de jeux de hasard proposés. Même s'ils sont considérés comme les fondateurs du traitement des probabilités, ils n'ont rien publié de leurs travaux, et il faudra attendre Huygens pour avoir un premier ouvrage sur le sujet.

Source : https://fr.wikipedia.org

> **Blaise Pascal** (1623–1662)
> **Christiaan Huygens** (1629–1695)

## Objectifs

- Calculer la probabilité d'une réunion, d'une intersection et de l'événement contraire.
- Utiliser une probabilité conditionnelle et les formules des probabilités composées et totales.
- Choisir un modèle de dénombrement adapté à une expérience aléatoire.
- Reconnaître l'indépendance et l'incompatibilité d'événements.
- Déterminer la loi de probabilité, l'espérance, la variance et l'écart-type d'une variable aléatoire.
- Reconnaître une situation binomiale et exploiter la loi binomiale.

## Plan du chapitre

- Activités préparatoires
- **Cours** : vocabulaire probabiliste · probabilité d'un événement · probabilité conditionnelle · indépendance · variables aléatoires · loi binomiale.
- **Méthodes** : calcul des probabilités · probabilités conditionnelles · indépendance · variables aléatoires · loi binomiale.
- **Exercices et problèmes** : exercices d'application · exercices de perfectionnement · problèmes de synthèse.

## Prérequis

- Ensembles, réunion, intersection et complémentaire.
- Dénombrement : listes, tableaux, arbres, arrangements et combinaisons.
- Calcul algébrique, sommes finies et coefficients binomiaux.
- Fonctions, suites numériques et statistiques descriptives.

## Activités préparatoires

### RAPPELS
A) Calcul de $C_n^p, A_n^p$ et $n!$ :

1. Sans utiliser la calculatrice, déterminer les valeurs numériques de ce qui suit :

$C_{10}^3 \quad ; \quad C_{2018}^0 \quad ; \quad C_{2020}^{2019} \quad ; \quad C_{23}^{23} \quad ; \quad A_7^4 \quad ; \quad A_{2016}^1 \quad ; \quad A_{15}^0 \quad ; \quad A_6^6$

2. Soit $n$ un entier naturel non nul. Simplifier les expressions suivantes :

$C_n^0 \quad ; \quad C_n^1 \quad ; \quad C_n^2 \quad ; \quad C_n^n \quad ; \quad C_n^{n-1} \quad ; \quad A_n^0 \quad ; \quad A_n^1 \quad ; \quad A_n^2 \quad ; \quad A_n^n \quad ; \quad A_n^{n-1}$

B) Tirage simultané :

Dans une urne, on dépose huit boules blanches, six boules noires et quatre boules rouges.

On tire simultanément trois boules de l'urne. Combien y a-t-il de manières de tirer :

1. Aucune boule noire ?
2. Exactement une boule noire ?
3. Exactement deux boules noires ?
4. Trois boules noires ?
5. Trois boules de couleurs différentes deux à deux ?

C) Tirage successif avec remise :

On considère un sac contenant 4 jetons numérotés de 1 à 4. On tire successivement et avec remise 3 jetons du sac afin de former un nombre de trois chiffres.

1. Combien de nombres différents peut-on obtenir ?
2. Combien de nombres différents peut-on obtenir dans chacun des cas suivants :

a) Le nombre obtenu est impair ?
b) Le nombre obtenu est pair ?
c) Le nombre obtenu est strictement inférieur à 400 ?

D) Tirage successif sans remise :

Une entreprise comprend 35 employés dont 16 femmes et 19 hommes. On élit un bureau composé d'un président,

d'un vice-président et d'un trésorier. Les postes sont non cumulables.

1. Quel est le nombre de bureaux possibles ?
2. Quel est le nombre de bureaux :

a) ou le vice-président est une femme?
b) ou le président et le trésorier sont des hommes?
c) ou le président et le vice-président sont de sexes différents?

E) Statistiques descriptives :

Le tableau ci-dessous présente la série de notes obtenues par 20 élèves dans un devoir de mathématiques :

|  Les notes $x_y$ | 5 | 7 | 10 | 13 | 16  |
| --- | --- | --- | --- | --- | --- |
|  Nombre d'élèves $n_i$ | 1 | 2 | 8 | 6 | 3  |

Déterminer pour cette série statistique :

les fréquences $f_i$ ; la moyenne arithmétique $\bar{x}$ ; la variance $v$ ; l'écart-type $\sigma$.

### EXPÉRIENCE ALÉATOIRE - UNIVERS DES POSSIBLES - ÉVÉNEMENTS
On considère un dé cubique dont les faces sont numérotées de 1 à 6.

A) On lance le dé une seule fois dans l'air.

1. Avant que le dé se stabilise sur une table, conjecturer le résultat du jet qui sera indiqué par la face supérieure du dé.
2. Toute experimentation ou phénomène conduisant à plusieurs résultats, et pour lequel on ne peut pas savoir à priori le résultat qui se produit est appelée une expérience aléatoire.

Ces différents résultats sont appelés issues (ou résultats, éventualités, possibilités...).

Décrire l'ensemble de toutes les issues possibles pour cette expérience aléatoire. On note Ω cet ensemble. L'ensemble Ω est appelé l'univers de l'expérience aléatoire.

3. On considère la situation A : « obtenir un nombre pair ».

Conjecturer les éventualités vérifiées par A puis décrire A.

L'ensemble A est une partie de l'univers Ω. On dit que A est un événement.

Définir les éventualités vérifiées par les événements suivants et décrire ces événements :

B: «Obtenir un nombre impair »
C: «Obtenir un nombre divisible par 3 »
D: «Obtenir un nombre supérieur ou égal à 3 »

B) On lance maintenant le dé deux fois successivement et on note par le couple (a; b) chaque résultat de cette expérience aléatoire, avec a le résultat du premier lancer et b le résultat du deuxième lancer. On a donc : 1 ≤ a ≤ 6 et 1 ≤ b ≤ 6.

1. Quel est l'univers de cette experience aléatoire? Que vaut son cardinal?
2. On considere les événements suivants :

E: «Obtenir deux numéros égaux »
F: «Obtenir deux numéros différents »
G: «Obtenir deux numéros de parités différentes »

Déterminer le nombre d'éventualités vérifiées par chacun des événements E, F et G.

### OPÉRATIONS SUR LES ÉVÉNEMENTS : A ∩ B - A ∪ B - Ā
Une urne contient 3 boule rouges : R₁, R₂ et R₃ ; et deux boules vertes : V₁ et V₂ ; et une boule noire N₁.

On suppose que les boules sont indiscernables au toucher, et on considère l'expérience aléatoire suivante :

On tire simultanément au hasard deux boules de l'urne.

1. Donner toutes les issues possibles de cette expérience aléatoire et décrire l'univers Ω.

2. On considère les événements suivants :

A : « Obtenir exactement une boule verte »

B : « Obtenir au moins une boule rouge »

a) Décrire les événements A et B. Quel est le nombre d'éventualités vérifiées par A ? par B ?

b) On considère l'événement :

E : « Obtenir une boule verte et une boule rouge ».

- Décrire l'ensemble $ E $ puis écrire $ E $ en fonction des événements $ A $ et $ B $.
Lorsqu'une eventualite est realizée à la fois par $A$ et $B$, peut-on dire que l'événement $E$ est réalisé?

c) On considère l'événement :

F : « Obtenir deux boules rouges ou de couleurs différentes ».

- Décrire l'ensemble $ F $ puis écrire $ F $ en fonction des événements $ A $ et $ B $.
Lorsqu'une eventualite est realizée par $A$ ou $B$ ou les deux à la fois, peut-on dire que l'événement $E$ est réalisé?

d) Lorsqu'une éventualité ne réalise pas l'événement A, on dit alors que l'événement $\overline{A}$ (événement contraire de A) est réalisé. Autrement dit :

L'événement contraire d'un événement A, noté $\overline{A}$, est l'événement constitué par tous les éventualités qui ne sont pas dans A.

- Écrire une phrase traduisant la réalisation de l'événement $\overline{A}$ puis déscrire cet événement.
- Écrire une phrase traduisant la réalisation de l'événement $\overline{B}$ puis déscrire cet événement.

Soit $\omega$ une éventualité de l'univers $\Omega$. On a :

$$\omega \in A \cap B \Leftrightarrow (\omega \in A \text{ et } \omega \in B) ; \omega \in A \cup B \Leftrightarrow (\omega \in A \text{ ou } \omega \in B) ; \omega \in \overline{A} \Leftrightarrow \omega \notin A$$

### PROBABILITÉ DÉFINIE SUR $\Omega$ - SIMULATION
On lance 1000 fois une pièce de monnaie,

et on obtient la distribution ci-contre :

On souhaite savoir si les écarts entre les résultats obtenus et

le modèle d'équirépartition sont dus aux simples fluctuations

d'échantillonnage ou au fait que la pièce n'est pas bien équilibrée, ce qui voudrait alors dire que le modèle d'équirépartition est mal adapté à l'expérience étudiée.

A) Écart entre la distribution des fréquences observées et la loi équirépartie :

Par analogie avec la formule qui permet de calculer en géométrie le carré de la distance entre deux points, on mesure la carré de l'écart entre la distribution des fréquences observées $\{f_1; f_2\}$ et la loi de probabilité équiré-

partie $\left\{\frac{1}{2}; \frac{1}{2}\right\}$ par : $$d_{obs}^2 = \left(f_1 - \frac{1}{2}\right)^2 + \left(f_2 - \frac{1}{2}\right)^2$$

Calculer $d_{obs}^2$.

|   | PILE | FACE  |
| --- | --- | --- |
|  Fréquence | 0,528 | 0,472  |

B) Simulation la loi équirépartie :

Comment évaluer, à partir de la valeur calculée $d_{obs}^2$, l'éloignement des fréquences $\{f_1; f_2\}$ et $\{\frac{1}{2}, \frac{1}{2}\}$ ?

À partir de quel seuil cette valeur sera-t-elle jugée « petite » ou « grande » ?

Pour répondre à ces questions, on simule un grand nombre de fois une série de 1000 lancers d'une pièce bien équilibrée et on calcule pour chaque série la valeur de $d^2$ correspondante.

On pourra alors regarder comment se situe la valeur de $d_{obs}^2$ par rapport à l'ensemble des valeurs de $d^2$ ainsi obtenues.

On réalise 200 simulations à l'aide du tableur Excel, on notera 0 pour Pile et 1 pour Face.

1. Dans la cellule A1, saisir la formule $= \text{ENT}(2^{*} \text{ALEA}))$. Cette cellule affichera donc 0 ou 1 de façon aléatoire. Recopier la formule dans le domaine A1:GR1000 pour simuler 200 fois une série de 1000 lancers de la piece.
2. Dans la cellule A1003, saisir la formule `=SOMME(A1:A1000)/1000` qui donne pour résultat la fréquence de Pile pour la 1ère série. Dans la cellule A1004, saisir `=1-A1003` qui calcule la fréquence de Face et enfin dans A1005, saisir `=(A1003-0,5)^2+(A1004-0,5)^2` qui donnera donc pour résultat la valeur de $d^2$ pour la 1ère série de 1000 lancers.

Recopier ces formules jusqu'à la colonne GR.

3. Dans la cellule A1007, saisir $= \text{MIN(A1005:GR1005)}$ et dans la cellule B1007, saisir $= \text{MAX(A1005:GR1005)}$.
4. Pour terminer la feuille de calcul, dans la cellule C1007, saisir $=$ CENTILE(A1005:GR1005:0,9), on obtient ainsi le 9ème décile de la série des 200 valeurs de $d^2$.

|   | A | B | C | D | E | F | G  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  1003 | 0,49 | 0,508 | 0,505 | 0,492 | 0,497 | 0,488 | 0,503  |
|  1004 | 0,51 | 0,492 | 0,495 | 0,508 | 0,503 | 0,512 | 0,497  |
|  1005 | 0,0002 | 0,000128 | 5,E-05 | 0,000128 | 0,000018 | 0,000288 | 0,000018  |
|  1006 | $d^2$ minimum | $d^2$ maximum | D$_9$ |  |  |  |   |
|  1007 | 0 | 0,004418 | 0,001458 |  |  |  |   |

5. Avec la touche F9, réaliser de nouvelles séries de 200 simulations de 1000 lancers. Observer à chaque fois la valeur du 9ème décile D$_9$ et la comparer à $d_{obs}^2$.

C) Définir une règle de décision :

Lors d'une réalisation des 200 simulations, on a obtenu D$_9$ = 0,001458 et d'après la partie A), $d_{obs}^2$ = 0,001568, donc $d_{obs}^2 > D_9$.

Peut-on alors rejeter le fait que la pièce soit bien équilibrée ? La conclusion est-elle certaine ?

### LOI DES GRANDS NOMBRES
Les valeurs de $d^2$ obtenues dans la simulation diminuent quand on augmente le nombre $n$ de lancers de chaque série car les fluctuations d'échantillonnages sont moindres pour les grands échantillons.

D) Synthèse :

Le jeu de Pile ou Face est un exemple d'expérience aléatoire. Elle s'appelle ainsi car on ne peut pas prévoir le résultat qui se produira. Les résultats possibles s'appellent des issues. Ici, les issues sont « Pile » et « Face ». On a vu que lors du jeu de pile ou face, on n'obtenait pas forcément pile une fois sur deux, mais qu'en augmentant suffisamment le nombre de lancers, la fréquence d'apparition de « Pile » s'approche d'une valeur théorique. Cette valeur théorique s'appelle la probabilité de l'événement « Pile ». Cette probabilité vaut $$\frac{1}{2}$$.

Si on désigne par $$E$$ l'événement « la pièce a indiqué Pile » et par $$F$$ l'événement « la pièce a indiqué Face », on écrit $$P(E) = \frac{1}{2}$$ pour exprimer que la probabilité de l'événement « Pile » est égale à $$\frac{1}{2}$$. On a aussi : $$P(F) = \frac{1}{2}$$.

### HYPOTHÈSE D'ÉQUIPROBABILITÉ
On considère un dé bien équilibré dont les faces sont numérotées de 1 à 6. Puisque le dé est équilibré, alors toutes ses faces ont la même chance d'apparition, et cette chance vaut $$\frac{1}{6}$$. On dit alors que la probabilité d'apparition de chaque face est $$p = \frac{1}{6}$$, et que l'hypothèse d'équiprobabilité est bien vérifiée.

On peut généraliser la notion de probabilité sur un univers comme suit :

### GÉNÉRALISATION
On dit qu'on définit une probabilité $$P$$ sur l'univers $$\Omega = \{\omega_1; \omega_2; \dots; \omega_n\}$$ d'une expérience aléatoire ayant un nombre fini d'éventualités :

- si à chaque éventualité $$\omega_i$$ on associe un nombre réel $$p_i$$ tel que tous

les nombres $$p_i$$ vérifient : $$0 \le p_i \le 1$$ et $$\sum_{i=1}^{n} p_i = 1$$

- et si à chaque événement $$E$$ est associe le nombre $$P(E)$$ défini par :

$$P(E) = \sum_{\omega_i \in E} p_i$$, c'est-à-dire que la probabilité de chaque événement est la

somme des probabilités des événements élémentaires qui le composent.

On considère les événements suivants :

$$E_1$$ : « obtenir un nombre premier » ; $$E_2$$ : « obtenir un diviseur du nombre 12 »

$$E_3$$ : « obtenir un nombre impair et différent de 1 ».

1. En utilisant la définition ci-dessus, déterminer la probabilité de chacun des événements $$E_1$$, $$E_2$$ et $$E_3$$.

On note ces probabilités $$P(E_1)$$, $$P(E_2)$$ et $$P(E_3)$$.

2. a) Comparer ces probabilités avec les fréquences des nombres premiers, les diviseurs de 12 et les nombres impairs différents de 1.

b) Comparer $$\frac{\text{Card } E_i}{\text{Card } \Omega}$$ avec $$P(E_i)$$ dans chacun des cas suivants : $$i = 1$$ ; $$i = 2$$ ; $$i = 3$$.

### Probabilité conditionnelle
A) Vers la notion de probabilité conditionnelle :

On a réalisé une enquête auprès des employés d'une société d'assurances. Les résultats sont présentés dans le tableau ci-contre.

1. Une première expérience aléatoire :

On désigne au hasard une personne parmi les 1400 employés de la société, ce qui signifie que tous les

choix sont équiprobables. On considère les deux événements :

A : « la personne gagne moins de 13000 Dh par mois » ; B : « la personne est une femme ».

Calculer les probabilités des événements A, B et A ∩ B.

2. D'autres expériences aléatoires :

a) On désigne maintenant au hasard une personne parmi les 600 employés féminines de la société.

On appelle U l'événement « L'employé gagne moins de 13000 Dh par mois ».

Calculer la probabilité de l'événement U.

b) Enfin, dans une dernière situation, on désigne au hasard une personne parmi les 950 employés dont le salaire est strictement inférieur à 13000 Dh.

On appelle V l'événement « La personne désignée est une femme ». Calculer la probabilité de V.

3. Où l'on établit des relations :

En examinant la façon dont les probabilités précédentes ont été calculées à partir des effectifs du tableau, exprimer les probabilités des événements U et V en fonction de celles des événements A, B et A ∩ B.

B) Des arbres en probabilités :

1. Un arbre pour décrire les issues d'une expérience aléatoire :

Une urne contient quatre boules : une rouge, une verte, une bleue et une jaune.

On tire au hasard une boule, on note sa couleur, on la remet dans l'urne, puis on tire une deuxième boule et on note sa couleur.

a) Construire un arbre qui permet d'obtenir toutes les issues de l'expérience.
b) Calculer la probabilité d'obtenir exactement une boule verte.

2. Un arbre avec des probabilités conditionnelles :

Dans un magasin, deux tiroirs contiennent des ceintures.

Le tiroir 1 contient deux ceintures noires et trois marrons, le tiroir 2 contient trois ceintures noires et cinq marrons.

On choisit au hasard un tiroir, puis on tire une ceinture de ce tiroir, toujours au hasard.

On considère les événements suivants :

$U_{1}$ ：La ceinture provient du tiroir 1
M:La ceinture est marron.

a) Vérifier que la probabilité de l'événement $ M $ sachant que l'événement $ U_{i} $ est réalisé est égale à $ \frac{3}{5} $. On reporte cette probabilité ainsi que celle de l'événement $ U_{i} $ sur l'arbre ci-dessus.
b) Reproduire et compléter cet arbre en indiquant sur chaque branche la probabilité qui convient.

### VARIABLE ALÉATOIRE - LOI BINOMIALE
A) Vers la notion de variable aléatoire :

Une expérience aléatoire consiste à lancer un dé équilibré deux fois de suite. Une issue de l'expérience est un couple (a; b) où a est le numéro obtenu au 1er lancer et b au 2ème. Les nombres a et b sont des entiers compris. entre 1 et 6. On note Ω l'ensemble de toutes les issues possibles.

Soit S l'application qui associe à chaque issue (a; b) ∈ Ω, la somme a + b des deux numéros obtenus.

1. Quelle sont les valeurs possibles de la somme a + b lorsque (a; b) parcourt l'ensemble Ω ?

Dans la suite, on désigne par S(Ω) l'ensemble des valeurs prises par S.

2. Pour tout k ∈ S(Ω), on note (S = k) l'événement « la somme est égale à k ».

Déterminer les probabilités p_k = P(S = k) pour tout k ∈ S(Ω).

On dit alors qu'on a défini une loi de probabilité sur Ω.

B) La loi binomiale :

Un tireur effectue des tirs à l'issue desquels la probabilité qu'il atteigne sa cible est p = 3/4.

1. On suppose qu'il fait deux tirs et on note X la variable aléatoire associant à cette épreuve le nombre de succès obtenus.

a) Quelles sont les valeurs prises par la variable aléatoire $ X $?
b) Donner la loi de probabilité de la variable aléatoire $ X $.

(On pourra s'aider d'un arbre pondéré et on désignera par S les succès et E les échecs).

2. On suppose maintenant qu'il fait six tirs et on note Y le nombre de succès obtenus.

On a donc Y(Ω) = {0; 1; 2; 3; 4; 5; 6}. On voudrait calculer la probabilité de l'événement (Y = 4).

a) Peut-on encore facilement raisonner par un arbre?
b) Calculer la probabilité qu'il commence par quatre succès suivis de deux échecs.
c) Mais les succès et les échecs n'apparaissent pas nécessairement dans cet ordre. Parmi les « mots » de six lettres (avec ou sans sens) qui ne contiennent que des $ S $ et des $ E $, combien contiennent exactement quatre fois la dette $ S $?
d) En déduire la probabilité de l'événement $(Y = 4)$.

3. On suppose maintenant qu'il fait dix tirs et on note Z le nombre de succès obtenus.

On a alors : Z(Ω) = {0; 1; ...; 10}. Montrer que pour tout k ∈ Z(Ω) : P(Z = k) = C_{10}^k \left(\frac{3}{4}\right)^k \left(\frac{1}{4}\right)^{10-k}

## Cours
### 1. Le vocabulaire des probabilités
#### 1.1. EXPÉRIENCE ALÉATOIRE - NOTION D'ÉVÉNEMENT

> **Définition 1.**
Une expérience aléatoire (ou épreuve aléatoire) est une mise en œuvre, dans des conditions bien définies, d'un processus évolutif pour un système (matériel ou modèle) dont l'état final est observable (expérience concrète) ou imaginable (expérience abstraite) mais imprévisible. Un tel état final est appelé résultat de l'expérience aléatoire.

L'ensemble des résultats possibles d'une expérience aléatoire est appelé univers (ou univers des possibilités, ou ensemble fondamental), noté en général Ω.

Un élément de cet ensemble Ω est appelé une issue ou une éventualité. Il est dit réalisé s'il est effectivement constaté lors d'un déroulement particulier de l'expérience aléatoire.

> **Exemples.**
1) Le lancer d'un dé non truqué (ou non pipé) est une expérience aléatoire.

L'univers est : $$\Omega = \{1; 2; 3; 4; 5; 6\}$$

2) Le lancer de deux dés non truqués est une expérience aléatoire.

Un résultat est un couple d'éléments de $$\{1, 2, 3, 4, 5, 6\}$$. En effet, on suppose que ces dés sont discernables. Cela signifie qu'on peut décider qu'un dé est le dé numéro 1 et l'autre le dé numéro 2.

L'univers est donc : $$\Omega = \{(i; j) / 1 \le i \le 6 \text{ et } 1 \le j \le 6\}$$. C'est un ensemble fini à 36 éléments.

3) Le jeu « Pile ou Face » est une expérience aléatoire. L'univers Ω dépend dans ce cas de la façon dont le jeu est effectué. Voici quelques situations :

Situation 1 : On lance la pièce de monnaie une seule fois.

Ici : $$\Omega = \{P; F\}$$

Situation 2 : On lance la pièce de monnaie deux fois de suite.

Ici : $$\Omega = \{PP; PF; FP; FF\}$$

4) Le tirage de p objets parmi n objets, est une expérience aléatoire. L'univers Ω dépend du type de tirage. Si, par exemple, le tirage effectué est simultané, alors l'univers Ω est l'ensemble des combinaisons de p objets choisi parmi n objets. Il y a dans ce cas $$C_n^p$$ possibilités. Par contre, Si le tirage effectué est successif avec remise, alors l'univers Ω est l'ensemble des arrangements avec répétitions de p objets choisis parmi n objets. Il y a dans ce cas $$n^p$$ possibilités.

5) La mesure de la durée de vie d'une ampoule électrique est une expérience aléatoire.

Le résultat est un réel positif ou nul. L'univers est : $$\Omega = ]0, +\infty[$$

> **Définition 2.**
On appelle événement lié à une expérience aléatoire, tout résultat de cette expérience pouvant se produire. Chaque événement lié à cette expérience aléatoire est une partie de l'univers Ω de ses résultats observables.

> **Exemple.**
On lance un dé cubique honnête, puis un deuxième identique au premier, et on s'intéresse aux numéros affichés. On a déjà vu que : Ω = {(i, j) / 1 ≤ i ≤ 6 et 1 ≤ j ≤ 6}

- Si on note A l'événement « Les deux dés affichent le même numéro », alors :

$$A = \{(1, 1); (2, 2); (3, 3); (4, 4); (5, 5); (6, 6)\}$$

- Si on note B l'événement « Le premier dé affiche le numéro 1 », alors :

$$B = \{(1, 1); (1, 2); (1, 3); (1, 4); (1, 5); (1, 6)\}$$

- Si on note C l'événement « La somme des 2 numéros obtenus est 4 », alors :

$$C = \{(1, 3); (2, 2); (3, 1)\}$$

- Si on note D l'événement « Le produit des 2 numéros obtenus est 12 », alors :

$$D = \{(4, 3); (2, 6); (6, 2); (3, 4)\}$$

- Si on note E l'événement « Le produit des 2 numéros obtenus est 18 », alors :

$$E = \{(6, 3); (3, 6)\}$$

- Si on note F l'événement « La somme des 2 numéros obtenus est 1 », alors :

$$F = \emptyset$$

> **Remarques.**
- La définition 2 montre qu'un événement est une propriété attachée à l'expérience aléatoire qui peut être vérifiée ou non.
- Il est bon de remarquer qu'un événement se réalise lorsque le résultat constaté de l'épreuve est l'un des éléments qui constituent l'événement.
- L'ensemble de tous les événements est égal à l'ensemble de toutes les parties de Ω, qu'on note 𝒫(Ω).

> **Définition 3.**
Soit Ω l'univers lié à une expérience aléatoire.

- L'événement Ω se réalise toujours, et est appelé l'événement certain.
- L'événement ∅ ne se réalise jamais, et appelé l'événement impossible.
- L'événement {ω}, où ω ∈ Ω est appelé événement élémentaire.

#### 1.2. OPÉRATIONS SUR LES ÉVÉNEMENTS

> **Définition 4.**
Soit Ω l'univers lié à une expérience aléatoire. A et B étant deux événements de Ω.

- L'événement « A et B » est réalisé si, et seulement si, A et B sont réalisés au cours de la même expérience. Cet événement est appelé l'intersection des événements A et B, et on le note A ∩ B.
- L'événement « A ou B » est réalisé si, et seulement si, l'un au moins des deux événements A ou B est réalisé au cours de la même expérience. Cet événement est appelé la réunion des événements A et B, et on le note A ∪ B.
- L'événement « non A » est réalisé si, et seulement si, A n'est pas réalisé. Cet événement est appelé l'événement contraire de A, et on le note Ā.
- On dit que les événements A et B sont incompatibles ou disjoints s'ils ne peuvent pas être réalisés simultanément. Donc, A et B sont incompatibles si, et seulement si, A ∩ B = ∅.

> **Diagramme de Venn.**
Pour bien comprendre les opérations sur les événements et ses propriétés, on utilise une création mathématique intéressant qui s'appelle diagramme de Venn. Ce diagramme permet de représenter sur une figure, un ensemble et certaines de ses parties. A titre d'exemple :

Représentation de A ∩ B

Représentation de A ∪ B

Représentation de Ā

> **Exemples.**
1) On considère trois événements A, B et C définis sur le même univers Ω.

- L'événement « Parmi les trois événements A, B et C, seul A est réalisé » est l'événement A ∩ B̅ ∩ C̅.
- L'événement « les trois événements A, B et C sont réalisés » est l'événement A ∩ B ∩ C.
- L'événement « A et C sont réalisés mais pas B » est l'événement A ∩ B̅ ∩ C
- L'événement « Au moins l'un des trois événements est réalisé » est l'événement contraire de l'événement « tous les événements sont réalisés ». On peut donc exprimer cet événement par Ā ∩ B̅ ∩ C̅.
- L'événement « Au moins deux d'entre eux sont réalisés » signifie que soit exactement deux événements sont réalisés, soit exactement les trois sont réalisés. On peut donc exprimer cet événement par :

$$(\overline{A} \cap B \cap C) \cup (A \cap \overline{B} \cap C) \cup (A \cap B \cap \overline{C}) \cup (A \cap B \cap C)$$

2) Une urne contient 8 boules : 3 vertes, 4 noires et une rouge.
on tire au hasard et simultanément trois boules de l'urne
et on considère les événements suivants :

A: «Obtenir trois boules noires»
$B$ ： $\ll$ Obtenir trois boules vertes
C: «Obtenir exactement une boule verte»
$D$ : « Obtenir exactement une boule noire »

a) On considère l'événement :

E : « Obtenir 3 boules de la même couleur »

Obtenir 3 boules de la même couleur correspond à l'obtention, soit de 3 boules noires, soit 3 boules
vertes. Par conséquent : $$E = A \cup B$$.

b) On considère l'événement :

F : « Obtenir au plus deux boules vertes ».

L'événement F est l'événement contraire de l'événement B. Il s'ensuit donc : $$F = \overline{B}$$

c) On considère l'événement :

G : « Obtenir trois boules de couleurs deux à deux distinctes ».

Obtenir trois boules de couleurs deux à deux distinctes correspond à l'obtention d'une boule noire,
d'une boule rouge et d'une boule verte. Par suite : $$G = C \cap D$$.

d) Les événements B et C sont incompatibles car ils ne peuvent pas être réalisés en même temps. On a
alors $$B \cap C = \emptyset$$. Par contre, les événements D et C sont compatibles.

TABLEAU RÉCAPUTILATIF

|  Langage ensembliste | Langage probabiliste | Notation  |
| --- | --- | --- |
|  $$\Omega = \{\omega_1, ..., \omega_n\}$$ | Univers des possibilités | $$\Omega$$  |
|  Ensemble vide | Evénement impossible | $$\emptyset$$  |
|  $$\{\omega_i\}$$ | Evénement élémentaire | $$\{\omega_i\}$$  |
|  A est une partie de $$\Omega$$ | A est un événement | $$A \subset \Omega$$  |
|  $$C = A \cup B$$ | C est l'événement « A ou B » | $$C = A \cup B$$  |
|  $$C = A \cap B$$ | C est l'événement « A et B » | $$C = A \cap B$$  |
|  A et B sont disjoints | Les événements A et B sont incompatibles | $$A \cap B = \emptyset$$  |
|  A et B sont complémentaires | Les événements A et B sont contraires | $$B = \overline{A}$$  |

> **Applications.**
1. On considère une urne contenant 5 boules blanches et 3 boules noires. On tire successivement et avec remise quatre boules de l'urne.

a) Déterminer le nombre des cas possibles.
b) Déterminer le nombre des cas possibles vérifiés par les événements suivants :

A: «Obtenir quatre boules blanches » ; B: «Obtenir au moins une boule noire »
C: « Parmi les boules tirées, il y a deux boules blanches »

2. Dans chacune des situations décrites en-dessous, énoncer l'événement contraire de l'événement donné
a) Dans une classe, on choisit deux élèves au hasard :

A : « Les deux élèves sont des filles »

b) Au restaurant, Aïcha prend un plat et un dessert :

C : « Aïcha prend une viande et une glace »

c) À une loterie, Rachid achète trois billets :

D : « L'un des billets au moins est gagnant » ; E : « Deux billets au maximum sont gagnants »

3. Soit Ω un univers et soient A, B et C trois événements de Ω.

Traduire en termes ensemblistes (en utilisant uniquement les symboles d'union, d'intersection et de passage au complémentaire, ainsi que A, B et C) les événements suivants :

A₁ : « Seul A est réalisé » ; A₂ : « A et B sont réalisés, mais pas C »

A₃ : « Les trois événements sont réalisés » ; A₄ : « Un seul événement se produit »
A₅ : « Au moins l'un des trois événements se réalise.

> **Proposition 1.**
Soit Ω l'univers lié à une expérience aléatoire. A, B et C des événements de Ω.
On a alors les propriétés suivantes :

$$\begin{array}{l} A \cup B = B \cup A \quad ; \quad A \cap B = B \cap A \quad ; \quad A \cap \emptyset = \emptyset \quad ; \quad A \cup \emptyset = A \\ A \cap \Omega = A \quad ; \quad A \cup \Omega = \Omega \quad ; \quad \overline{\overline{A}} = A \quad ; \quad A \cup \overline{A} = \Omega \quad ; \quad A \cap \overline{A} = \emptyset \\ A \cup (B \cap C) = (A \cup B) \cap (A \cup C) \quad ; \quad (A \cup B) \cup C = A \cup (B \cup C) = A \cup B \cup C \\ A \cap (B \cup C) = (A \cap B) \cup (A \cap C) \quad ; \quad (A \cap B) \cap C = A \cap (B \cap C) = A \cap B \cap C \\ \overline{A \cup B} = \overline{A} \cap \overline{B} \quad ; \quad \overline{A \cap B} = \overline{A} \cup \overline{B} \quad ; \quad A = (A \cap B) \cup (A \cap \overline{B}) \end{array}$$

> **Remarques.**
- Comme dans le langage ensembliste, les égalités $ \overline{A \cup B} = \overline{A} \cap \overline{B} $ et $ \overline{A \cap B} = \overline{A} \cup \overline{B} $ portent le nom de « les lois de Morgan ».
L'egalite $A = (A\cap B)\cup (A\cap \overline{B})$ joue un role important en calcul des probabilités.

#### 1.3. SYSTÈMES COMPLETS D'ÉVÉNEMENTS

> **Définition 5.**
Soit $\Omega$ l'univers lié à une expérience aléatoire et $A_1, A_2, ..., A_n$ des événements de $\Omega$.

On dit que $A_1, A_2, ..., A_n$ forment un système complet d'événements lorsque les deux conditions suivantes sont vérifiées :

- Les événements $A_1, A_2, ..., A_n$ sont deux à deux incompatibles :

$$\forall (i, j) \in \{1; 2; ...; n\}^2 \quad i \neq j \Rightarrow A_i \cap A_j = \emptyset$$

- Les événements $A_1, A_2, ..., A_n$ sont complémentaires : $A_1 \cup A_2 \cup ... \cup A_n = \Omega$.

$\{A_1, A_2, A_3, A_4, A_5\}$ forme un système complet d'événements de $\Omega$

> **Remarques.**
- Pour tout événement non vide $ A $ de $ \Omega $, les événements $ A $ et $ \overline{A} $ forment un système complet d'événements car: $ A \cap \overline{A} = \emptyset $ et $ A \cup \overline{A} = \Omega $
- Pour tout universes fini $\Omega = \{\omega_1, \omega_2, \dots, \omega_n\}$, les événements élémentaires $\{\omega_1\}, \{\omega_2\}, \dots, \{\omega_n\}$ forment un système complet d'événements.

> **Exemple.**
On lance quatre fois un dé non truqué. Pour chaque $k \in \{1; 2; 3; 4\}$, on considère l'événement :

$A_k$ : « obtenir pour la première fois 6 au $k$-ième lancer »

et $E$ l'événement « n'obtenir aucun 6 à l'issue des quatre lancers ».

Les événements $A_1, A_2, A_3, A_4, E$ forment un système complet d'événements qui modélise l'information sur le rang du premier 6.

Les événements $A_i$ et $\overline{A}_i$ (respectivement $E$ et $\overline{E}$) forment un système complet d'événements qui modélise l'information sur le fait d'obtenir un 6 au premier lancer (respectivement sur le fait d'obtenir un 6 parmi les quatre lancers).

### 2. Probabilité d'un événement
#### 2.1. LOI DE PROBABILITÉ SUR UN ENSEMBLE FINI

> **Définition 6.**
Soit $\Omega = \{\omega_1; \omega_2; ...; \omega_n\}$ un ensemble fini.

- Définir une loi de probabilité sur $\Omega$, c'est attribuer à chaque éventualité $\omega_i$, un réel $p_i \in [0;1]$ de telle sorte que : $\sum_{i=1}^n p_i = p_1 + p_2 + ... + p_n = 1$

On dit alors que la probabilité de l'événement élémentaire $\{\omega_i\}$ est $p_i$, et on écrit : $P(\{\omega_i\}) = p_i$

- Étant donné un événement $A \subset \Omega$, on définit alors la probabilité de $A$, et on note $P(A)$ comme la somme des probabilités des événements élémentaires qui constituent $A$.

Le couple $(\Omega; P)$ est appelé un espace probabilisé fini.

> **Exemples.**
1) Lors de lancement d'un dé cubique non truqué, on obtient $\Omega = \{1; 2; 3; 4; 5; 6\}$.

Puisque toutes les faces ont la même chance d'être observées alors on peut définir une probabilité sur

$\Omega$ comme suit : $P(\{1\}) = P(\{2\}) = ... = P(\{6\}) = \frac{1}{6}$

Remarquons bien que toutes ces probabilités soient dans l'intervalle $[0;1]$ et leur somme est égale à 1.

Soit $A$ l'événement « obtenir un nombre pair ». On a alors $A = \{2; 4; 6\}$, et donc la probabilité de $A$ est :

$$P(A) = P(\{2\}) + P(\{4\}) + P(\{6\}) = \frac{1}{6} + \frac{1}{6} + \frac{1}{6} = \frac{1}{2}$$

2) On considère une pièce de monnaie truquée de telle sorte que la probabilité d'apparition de Face « $F$ » est égale au double de celle d'apparition de Pile « $P$ ». Calculons alors les probabilités des événements

$A$ : « Obtenir Face » et $B$ : « Obtenir Pile »

Ici l'univers est $\Omega = \{P; F\}$; donc $A$ et $B$ sont les événements élémentaires constituant cet univers.

Il en résulte alors : $P(\Omega) = P(A) + P(B)$. Puisque $P(A) = 2P(B)$ et $P(\Omega) = 1$ alors :

$$P(A) = \frac{2}{3} \quad \text{et} \quad P(B) = \frac{1}{3}$$

> **Applications.**
1. Un dé cubique truqué est tel que la probabilité $p_k$ de sortie du numéro $k$ est proportionnelle à $k$. On lance ce dé et on considère les événements :

$A$ : « Le numéro est pair » ; $B$ : « Le numéro est supérieur ou égal à 3 »

Calculer $p_k$ pour chaque $k \in \{1; 2; ...; 6\}$ puis en déduire les probabilités $P(A)$ et $P(B)$.

2. On jette une pièce de monnaie équilibrée trois fois de suite.

a) Citer la liste de tous les résultats possibles en notant $P$ pour Pile et $F$ pour face. (Exemple: $PPF$)
b) Donner la probabilité de chacun des événements suivants :

$A$ : « Le tirage ne comporte que des Piles » ; $B$ : « Le tirage comporte au moins une fois Face »

> **Proposition 2.**
Soit $\Omega$ l'univers lié à une expérience aléatoire, et $P$ une probabilité définie sur $\Omega$. Soit $A$ et $B$ deux événements de $\Omega$. On a alors les propriétés suivantes :

1) $P(\Omega) = 1$ et $P(\emptyset) = 0$ et $0 \leq P(A) \leq 1$.
2) Si $A$ et $B$ sont incompatibles alors: $P(A \cup B) = P(A) + P(B)$.
3) $P(\overline{A}) = 1 - P(A)$ et $P(B\cap \overline{A}) = P(B) - P(B\cap A)$

En particulier, si $A \subset B$ alors : $P(B \cap \overline{A}) = P(B) - P(A)$ et $P(A) \leq P(B)$

4) $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

> **Preuve.**
1) et 2) decoulent immédiatement de la définition 5.
3) Les événements $ A $ et $ \overline{A} $ sont incompatibles, donc: $ P(A) + P(\overline{A}) = P(A \cup \overline{A}) = P(\Omega) = 1 $. Par suite:

$$P(\overline{A}) = 1 - P(A)$$

Les événements $B \cap A$ et $B \cap \overline{A}$ sont incompatibles car $(B \cap A) \cap (B \cap \overline{A}) = B \cap A \cap \overline{A} = \emptyset$, donc :

$$P(B \cap A) + P(B \cap \overline{A}) = P((B \cap A) \cup (B \cap \overline{A})) = P(B \cap (A \cup \overline{A})) = P(B \cap \Omega) = P(B)$$

Ce qui donne : $P(B \cap \overline{A}) = P(B) - P(B \cap A)$

Si $A \subset B$ alors $B \cap A = A$, ce qui donne : $P(B \cap \overline{A}) = P(B) - P(A)$

Signalons au passage que ce résultat montre le caractère croissant de la fonction "probabilité".

4) Montrons maintenant l'égalité : $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

On a $A \cup B = A \cup (B \cap \overline{A})$ et $A \cap (B \cap \overline{A}) = \emptyset$ (faites un diagramme de Venn), par conséquent :

$P(A \cup B) = P(A) + P(B \cap \overline{A})$. D'après 3), on en déduit que : $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

> **Exemples.**
En étudiant une population, on a remarqué que, durant un mois, 40% des individus sont allés au cinéma, 25% sont allés au théâtre et 12,5% sont allés au cinéma et au théâtre. Calculons les probabilités que durant un mois, un individu :

a)ailleaucinémaouautheatre;
b) n'aille pas au cinema;

c) n'aille ni au cinema, ni au theatre;
d) aille au cinema mais pas au theatre.

Réponses :

Soit C l'événement « aller au cinéma » et T l'événement « aller au théâtre ». On a alors :

$$P(C) = 0,4 \quad ; \quad P(T) = 0,25 \quad ; \quad P(C \cap T) = 0,125$$

a) La probabilité qu'un individu aille au cinéma ou au théâtre est :

$$P(C \cup T) = P(C) + P(T) - P(C \cap T) = 0,4 + 0,25 - 0,125 = 0,525$$

b) La probabilité qu'un individu n'aille pas au cinéma est :

$$P(\overline{C}) = 1 - P(C) = 1 - 0,4 = 0,6$$

c) La probabilité qu'un individu n'aille ni au cinéma, ni au théâtre est:

$$P(\overline{C} \cap \overline{T}) = P(\overline{C \cup T}) = 1 - P(C \cup T) = 1 - 0,525 = 0,475$$

d) La probabilité qu'un individu aille au cinéma mais pas au théâtre est:

$$P(C \cap \overline{T}) = P(C) - P(C \cap T) = 0,525 - 0,25 = 0,275$$

Diagramme de Venn

> **Applications.**
1. Dans une classe de 38 élèves, on sait que :

31 etudient l'anglais, 24 l'espagnol et 17 l'allemand;
12 etudient à la fois anglais et allemand;
9 etudient espagnol et allemand;
4 etudient les trois langues simultanément.

On choisit un élève au hasard. Calculer les probabilités des événements suivants :

A : « L'élève étudie l'anglais et l'espagnol » ; B : « L'élève étudie l'anglais ou l'espagnol »

C : « L'élève étudie uniquement l'allemand »

$D$ ： $\ll$ L'elève étudie l'allemand et l'anglais, mais pas l'espagnol
$E$ ： $\ll$ L'elève étudie l'allemand ou l'anglais, mais pas l'espagnol

2. Soit $\Omega$ un univers et $p$ une probabilité définie sur $\Omega$.

On considère deux événements $A$ et $B$ tels que : $P(A) = \frac{1}{2}$ $P(B) = \frac{5}{12}$ ; $P(A \cup B) = \frac{3}{4}$. Calculer dans l'ordre que vous voulez :

$$\begin{array}{l} P(\overline{A}) \quad ; \quad P(\overline{A} \cap \overline{B}) \quad ; \quad P(A \cap B) \quad ; \quad P(\overline{A} \cap \overline{B}) \\ P(\overline{A \cap B}) \quad ; \quad P(A \cap \overline{B}) \quad ; \quad P(A \cup \overline{B}) \end{array}$$

3. Soit $\Omega$ un univers et $p$ une probabilité définie sur $\Omega$. Soit $A, B$ et $C$ des événements de $\Omega$.

Montrer la formule suivante dite « formule du crible de Poincaré » :

$$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C)$$

#### 2.2. HYPOTHÈSE D'ÉQUIPROBABILITÉ

La définition 5 ci-dessus montre que pour $$\Omega = \{\omega_1, ..., \omega_n\}$$, la donnée de $$n$$ nombres $$p_i, i \in \{1, 2, ..., n\}$$, associés à chacun des événements élémentaires par $$P(\{\omega_i\}) = p_i$$ tel que $$p_i \ge 0$$ et $$\sum_{i=1}^n p_i = 1$$, suffit à déterminer une probabilité $$p$$ sur $$\Omega$$. Ainsi, la probabilité d'un événement quelconque $$A$$ de $$\Omega$$ est définie comme la somme des probabilités de tous les événements élémentaires qui y sont inclus. Il y a un cas très fréquent dans la pratique où tous les événements élémentaires ont la même probabilité, ce qui correspond à la loi uniforme discrète définie par :

$$\text{Pour tout } i \in \{1, 2, ..., n\} : \quad p_i = \frac{1}{n}$$

Dans le langage des probabilités, on dit alors qu'il s'agit d'équiprobabilité. Cette particularité est souvent sous-entendue ou précisée par l'affirmation que les résultats de l'expérience sont obtenus au hasard. On obtient alors :

$$P(A) = \sum_{\omega_i \in A} \frac{1}{n} = \frac{1}{n} \times \text{Card } A = \frac{\text{Card } A}{\text{Card } \Omega} \quad (\text{Remarquer bien que } n = \text{Card } \Omega)$$

Ce résultat s'énonce souvent sous la forme de la règle énoncée par Laplace

au XVIIIe siècle : $$P(A) = \frac{\text{nombre de cas favorables pour } A}{\text{nombre de cas possibles}}$$

Un cas favorable étant un événement élémentaire qui réalise $$A$$. On est alors ramené à un simple problème de dénombrement (déjà vu en 1ère année du bac). Mais il faut bien faire attention que cette règle ne s'applique que dans le cas d'équiprobabilité.

> **Définition 7.**
Soit $$\Omega = \{\omega_1; \omega_2; ...; \omega_n\}$$ l'univers lié à une expérience aléatoire, et $$P$$ une probabilité définie sur $$\Omega$$. On dit qu'il y a équiprobabilité, lorsque les probabilités de tous les événements élémentaires sont égales. On dit aussi que $$P$$ est la probabilité uniforme sur $$\Omega$$.

> **Proposition 3.**
Soit $$\Omega = \{\omega_1; \omega_2; ...; \omega_n\}$$ l'univers lié à une expérience aléatoire, et $$P$$ une probabilité définie sur $$\Omega$$. Dans le cas d'équiprobabilité, on a les formules suivantes :

1) Pour tout $ i \in \{1, 2, \dots, n\} $: $ P(\{\omega_i\}) = \frac{1}{n} = \frac{1}{\text{Card } \Omega} $
2) Pour tout événement $ A $ de $ \Omega $: $ P(A) = \frac{\text{Card } A}{n} = \frac{\text{Card } A}{\text{Card } \Omega} $

> **Remarques.**
- Si l'énoncé du problème contient des phrases comme : « dé non pipé », « pièce non truquée », « manière équiprobable », « tirage au hasard », « boules indiscernables au toucher », ...etc., cela signifie qu'il s'agit bien d'une équiprobabilité. Bien entendu, dans la limite des programmes, on s'intéresse de façon générale à l'équiprobabilité dans la résolution des problèmes. Mais si l'énoncé indique qu'il n'y a pas d'équiprobabilité, on aura besoin d'autres informations pour résoudre le problème.
- Jusqu'à présent, pour calculer la probabilité d'un événement A, on peut envisager les stratégies suivantes :

- Exprimer A en fonction d'événements de probabilités connues dans le langage des événements;
- Modéliser A par une expression ensembliste. Cette traduction se fait en remplaçant les « et » par des « ∩ », les « ou » par des « ∪ » et les négations par des complémentaires ;
- Simplifier ou transformer l'expression obtenue grâce au calcul ensembliste de façon à pouvoir appliquer les formules des calculs des probabilités ; on pourra utiliser dans les simplifications les diagrammes ensemblistes.

> **Exemples.**
1) On jette trois dés identiques numérotés de 1 à 6. Il y a équiprobabilité des événements élémentaires de l'ensemble fondamental $$\Omega = \{1, 2, 3, 4, 5, 6\}^3$$. La probabilité d'un événement quelconque A se calcule

donc par $$P(A) = \frac{\text{Card } A}{\text{Card } \Omega}$$. En particulier :

a) La probabilité d'observer trois fois le même chiffre est : $$\frac{6}{6^3} = \frac{1}{36}$$

En effet, l'événement considéré est de la forme aaa, où il y a six choix possibles pour le chiffre a.

b) La probabilité d'observer deux fois le même chiffre et un autre différent est : $$3 \times \frac{6 \times 5}{6^3} = \frac{5}{12}$$.

En effet, il s'agit cette fois d'un événement de la forme aab, avec six choix pour le chiffre a, cinq choix pour b et trois possibilités pour la place du résultat b.

c) La probabilité d'observer trois chiffres différents est : $$\frac{6 \times 5 \times 4}{6^3} = \frac{5}{9}$$

En effet, un résultat quelconque de la forme abc correspond à une permutation de trois chiffres choisis parmi six.

2) Une urne contient deux boules blanches, trois boules rouges et cinq boules noires. On suppose que ces boules sont indiscernables au toucher.

Soit $$\Omega$$ l'univers des possibles.

a) On tire successivement et avec remise trois boules de l'urne.

$$\Omega$$ est l'ensemble des arrangements avec répétitions de 3 boules par les 10 boules.
Donc : $$\text{Card } \Omega = 10^3 = 1000$$

• La probabilité de l'événement A : « obtenir une boule de chaque couleur » est :

$$P(A) = \frac{\text{Card } A}{\text{Card } \Omega} = \frac{3!(2 \times 3 \times 5)}{10^3}. \text{ Par conséquent : } P(A) = \frac{9}{50} = 0,18$$

• La probabilité de l'événement B : « obtenir au moins deux boules noires » est :

$$P(B) = \frac{\text{Card } B}{\text{Card } \Omega} = \frac{C_3^1 \times (5^2 \times 5) + 5^3}{10^3}. \text{ Par conséquent : } P(B) = \frac{375 + 125}{1000} = \frac{1}{2}$$

• La probabilité de l'événement C : « obtenir des boules de même couleur » est :

$$P(C) = \frac{\text{Card } C}{\text{Card } \Omega} = \frac{3^3 + 5^3}{10^3}. \text{ Par conséquent : } P(C) = \frac{27 + 125}{1000} = \frac{19}{125}$$

b) On tire successivement et sans remise trois boules de l'urne.

Ω est l'ensemble des arrangements sans répétitions de 3 boules par les 10 boules.

Donc : Card Ω = A₁₀³ = 720

• La probabilité de l'événement A : « obtenir une boule de chaque couleur » est :

$$P(A) = \frac{\text{Card } A}{\text{Card } \Omega} = \frac{3!(A_2^1 \times A_3^1 \times A_4^1)}{720}. \text{ Par conséquent : } P(A) = \frac{180}{720} = \frac{1}{4}$$

• La probabilité de l'événement B : « obtenir au moins deux boules noires » est :

$$P(B) = \frac{\text{Card } B}{\text{Card } \Omega} = \frac{C_3^1 \times A_4^2 \times A_5^1 + A_6^3}{720}. \text{ Par conséquent : } P(B) = \frac{360}{720} = \frac{1}{2}$$

3) Dans un lot de 20 yaourts, il y en a 3 qui ont dépassé la date de péremption. On extrait au hasard et simultanément 4 yaourts. Calculons la probabilité de l'événement :

E : « un seul de ces yaourts ait dépassé la date de péremption ».

On choisit l'univers Ω = { combinaisons de 4 yaourts parmi 20 }. Donc :

$$\text{Card } \Omega = C_{20}^4 = 4845$$

Comme le tirage est simultané, on en déduit que : $$P(E) = \frac{\text{Card } E}{\text{Card } \Omega} = \frac{C_3^1 \times C_{17}^2}{4845} = \frac{8}{19}$$

4) On apprend que 18 personnes se sont présentées à une collecte de sang. Il y avait onze personnes du groupe O, quatre personnes du groupe A, deux personnes du groupe B et un personne du groupe AB.

À l'issue de la collecte, on prélève au hasard 3 flacons parmi les 18 flacons obtenus.

Calculons la probabilité de chacun des événements suivants :

L'événement E : « Les sangs des 3 flacons appartiennent au même groupe ».

L'événement F : « Parmi les 3 flacons prélevés, il y a au moins 1 flacon contenant du sang du groupe A »

L'événement G : « Les sangs des 3 flacons appartiennent à 3 groupes différents ».

Réponses :

L'expérience étant le prélèvement de 3 flacons parmi 18, l'univers des possibles Ω a pour cardinal :

$$\text{Card}(\Omega) = C_{18}^3 = 816$$

La probabilité de l'événement E est : $$P(E) = \frac{C_{11}^3 + C_4^3}{816} = \frac{169}{816}$$.

La probabilité de l'événement F est : $$P(F) = 1 - \frac{C_{14}^3}{816} = 1 - \frac{364}{816} = \frac{452}{816} = \frac{113}{204}$$.

La probabilité de l'événement G est : $$P(G) = \frac{11 \times 4 \times 2 + 11 \times 4 \times 1 + 11 \times 2 \times 1 + 4 \times 2 \times 1}{816} = \frac{27}{136}$$.

> **Applications.**
1. On compose au hasard un numéro de téléphone à 10 chiffres.

a) Quelle est la probabilité que tous les chiffres soient distincts?
b) Quelle est la probabilité qu'il commence par 01?
c) Quelle est la probabilité que ses chiffres forment une suite strictement croissant?

2. Un sac contient 10 jetons blancs, 6 jetons rouges et 4 jetons noirs.

a) On tire au hasard trois jetons successivement et avec remise.
Quel est l'événement le plus probable parmi les trois événements suivants ?

A: «Obtenir un tirage unicolore»
$B:$ «Obtenir un tirage bicolore
C: «Obtenir un tirage tricolore»

b) Même question si I'on tire simultanément trois jetons.
c) Même question si I'on tire successivement et sans remise.

3. On range aléatoirement cinq boules distinguables dans quatre boîtes également distinguables.

a) Quel est le nombre de rangements différents possibles?
b) Quelle est la probabilité que toutes les boules soient rangées dans la même boîte?
c) Quelle est la probabilité que deux boîtes exactement soient vides?
d) Quelle est la probabilité qu'une boîte exactement soit vide?
e) En déduire la probabilité qu'aucune boîte ne soit vide?

4. On jette trois fois un dé non pipé, et on note a, b et c les résultats successifs obtenus.

On note dans la suite : $$Q(x) = ax^2 + bx + c$$

Déterminer la probabilité pour que :

a) Le polynôme $Q$ ait deux racines réelles distinctes.
b) Le polynôme $Q$ ait une racine réelle double.
c) Le polynôme $Q$ n'ait pas de racines réelles.

5. On jette une pièce de monnaie en l'air cinq fois de suite et l'on note chaque fois la face apparente après sa chute.

Quelle est la probabilité d'obtenir ainsi exactement deux fois « Pile » ?

### 3. Probabilité conditionnelle
#### 3.1. INTRODUCTION

Pourquoi les probabilités conditionnelles ?

Les décisions dans la vie courante sont souvent influencées ou conditionnées par la survenue d'événements extérieurs. L'influence de ces événements sur d'autres événements ne peut souvent être appréhendée que de façon subjective, mais parfois cette influence peut être appréhendée de façon objective par une mesure de probabilité.

Soit $\Omega = \{\omega_1; \omega_2; \dots; \omega_n\}$ l'univers lié à une expérience aléatoire, et $P$ une probabilité définie sur $\Omega$.

Supposons que l'événement $A$ est réalisé. Sous l'information « $A$ est réalisé », un événement $B$ est réalisé si et seulement si $A \cap B$ est réalisé. On dira que la probabilité que $B$ est réalisé, sachant que $A$ est réalisé est :

$$\frac{\text{nombre de cas favorables à } A \cap B}{\text{nombre de cas favorables à } A} = \frac{\text{Card}(A \cap B)}{\text{Card } A} = \frac{\frac{\text{Card}(A \cap B)}{\text{Card } \Omega}}{\frac{\text{Card } A}{\text{Card } \Omega}} = \frac{P(A \cap B)}{P(A)}$$

Pour reconnaître une hypothèse de probabilité conditionnelle, on examine si la probabilité donnée est celle d'un événement $B$ sous la contrainte que l'événement $A$ soit réalisé. Par exemple, dans un établissement scolaire, la phrase « La probabilité qu'une fille soit de terminale bac sciences mathématiques vaut $\frac{1}{7}$ », ne correspond pas à une probabilité conditionnelle. Dans la phrase « Parmi les élèves de terminale bac, la probabilité qu'une fille soit de terminale bac sciences mathématiques vaut $\frac{5}{11}$ », $\frac{5}{11}$ correspond à une probabilité conditionnelle. Voici deux autres exemples concrets pour bien comprendre :

Exemple 1 :

On lance une fois un dé cubique parfait dont les faces sont numérotées de 1 à 6.

Soit $A$ l'événement : « on obtient un nombre inférieur ou égal à 5 » et $B$ l'événement : « on obtient un nombre supérieur ou égal à 3 ».

Supposons que l'on sache que $A$ est réalisé. Le résultat du lancer est donc un élément $\omega$ de $\{1, 2, 3, 4, 5\}$ et il y a 5 cas possibles. L'événement $B$ est réalisé signifie que $\omega \in \{3, 4, 5\}$. Il y a donc 3 cas favorables pour que $B$ soit réalisé. La probabilité que $B$ soit réalisé sachant que $A$ l'est est $\frac{3}{5}$.

Or, on a : $P(A) = \frac{5}{6}$ et $P(A \cap B) = \frac{3}{6}$. Donc : $\frac{P(A \cap B)}{P(A)} = \frac{3}{5}$

Exemple 2 :

Une pisciculture dispose de deux bassins notés $B_1$ et $B_2$. Le bassin $B_1$ contient 5 poissons dont 3 truites et 2 carpes, et $B_2$ contient 10 poissons dont 7 truites et 2 carpes. On extrait au hasard un poisson.

La probabilité d'obtenir une truite sachant qu'elle provient de $B_1$ est $\frac{3}{5} = 0,6$.

:3

> **Définition 8.**
Soit $P$ une probabilité définie sur un univers $\Omega$, et soit $A$ un événement tel que $P(A) \neq 0$.

Pour tout événement $B$, on pose : $P_A(B) = \frac{P(A \cap B)}{P(A)}$

$P_A$ est une probabilité définie sur $\Omega$, appelée probabilité conditionnelle relative à $A$ ou probabilité conditionnel sachant $A$.

$P_A(B)$ s'appelle « la probabilité de $B$ sachant que $A$ est réalisé » ou « la probabilité de $B$ sachant $A$ » ou encore « la probabilité de $B$ conditionnellement à $A$ ».

> **Remarques.**
- La probabilité $P_A(B)$ de $B$ sachant $A$ est à bien distinguer de la probabilité de l'intersection de $B$ et de $A$ égale à $P(A \cap B)$. En effet dans le calcul de la probabilité $P_A(B)$, nous supposons implicitement que l'événement $A$ est réalisé tandis que dans le calcul de la probabilité $P(A \cap B)$, nous cherchons la probabilité de l'événement ($A$ et $B$) où l'événement $A$ n'est pas a priori réalisé.

- Au lieu de $P_A(B)$, on note aussi $P(B/A)$. Cette notation prête à confession. La raison en est qu'elle donne à penser qu'il existe un événement conditionnel « $B/A$ » dont on calculerait la probabilité. Il n'existe pas d'événements conditionnels, mais seulement des probabilités conditionnelles, c'est-à-dire d'autres probabilités sur l'espace probabilisable.

- Il est parfois utile de connaître $P_B(A)$ pour calculer $P_A(B)$. En effet, on a la relation suivante : $P_A(B) = P_B(A) \times \frac{P(B)}{P(A)}$. Cette formule est connue sous le nom « Formule de Bayes ».

> **Exemple.**
On considère deux urnes dont les contenus sont les suivants :

$U_1$ : 2 boules blanches et 3 boules noires ; $U_2$ : 4 boules blanches et 2 boules noires.

On choisit une urne au hasard puis on y tire une boule. Calculons la probabilité que l'on ait choisi l'urne $U_1$ sachant que la boule tirée est blanche.

Notons les événements :

$U_1$ : « la boule est tirée de l'urne $U_1$ »

$U_2$ : « la boule est tirée de l'urne $U_2$ »

$B$ : « la boule tirée est blanche »

Selon les données : $P_{U_1}(B) = \frac{2}{5}$ et $P(U_1) = \frac{1}{2}$

Pour le calcul de $P(B)$, on peut faire un arbre de probabilité.

Voici un arbre pondéré modélisant la situation étudiée:

On a: $P(B) = \frac{1}{2} \times \frac{2}{5} + \frac{1}{2} \times \frac{2}{3} = \frac{8}{15}$

Il s'ensuit donc :

$$P_B(U_1) = P_{U_1}(B) \times \frac{P(U_1)}{P(B)} = \frac{2}{5} \times \frac{\frac{1}{2}}{\frac{8}{15}} = \frac{3}{8}$$

> **Corollaire.**
Soit $P$ une probabilité définie sur un univers $\Omega$, et soit $A$ un événement tel que $P(A) \neq 0$.

Puisque $P_A$ est une probabilité sur $\Omega$, elle possède toutes les propriétés d'une probabilité.

En particulier, on a :

1) $P_A(\emptyset) = 0$ et $P_A(A) = P_A(\Omega) = 1$.
2) Pour tout événement $ B $ vérifier $ B \subset A $, $ P_A(B) = 1 $.
3) Pour tout événement $ B $, $ P_A(\overline{B}) = 1 - P_A(B) $.
4) Pour tous événements $ B $ et $ C $: $ P_A(B \cup C) = P_A(B) + P_A(C) - P_A(B \cap C) $.
5) Pour tous événements $ B $ et $ C $: $ P_A(B \cap \overline{C}) = P_A(B) - P_A(B \cap C) $.

#### 3.2. FORMULE DES PROBABILITÉS COMPOSÉES

> **Proposition 4.**
Soit $P$ une probabilité définie sur un univers $\Omega$. Pour tous événements $A$ et $B$ de $\Omega$, on a la formule suivante dite « Formule des probabilités composées » :

1) $P(A\cap B) = P(A)\times P_A(B)$ si $P(A)\neq 0$
2) $P(A\cap B) = P(B)\times P_B(A)$ si $P(B)\neq 0$

> **Exemples.**
1) Une urne contient initialement 4 boules blanches et 2 boules noires.

On tire une boule. On la remet dans l'urne avec une boule de la même couleur. On procède à un deuxième tirage. Quelle est la probabilité d'obtenir deux boules noires ?

Réponse :

On note $N_1$, pour $i \in \{1; 2\}$, l'événement « on tire une boule noire au $i^{\text{ème}}$- tirage ». On obtient :

$$P(N_1 \cap N_2) = P(N_1) \times P_{N_1}(N_2) = \frac{2}{6} \times \frac{3}{7} = \frac{1}{7}$$

2) Une maladie affecte 3% d'une population. Un test sanguin détecte cette maladie avec une probabilité de 0,98 chez un malade mais il indique à tort à 4% des personnes saines qu'elles sont malades. On prend une personne au hasard ayant subi le test.

on peut schématiser ces données par l'arbre pondéré suivant :

M : La personne est malade
T : Le test est positif

a) La probabilité que la personne soit malade et que le test soit positif est :

$$P(T \cap M) = P(M) \cdot P_M(T) = 0,03 \times 0,98 = 0,0294$$

b) La probabilité que la personne soit malade et que le test soit négatif est :

$$P(\bar{T} \cap M) = P(M) \cdot P_M(\bar{T}) = 0,03 \times 0,02 = 0,0006$$

c) La probabilité que la personne soit en bonne santé et que le test soit négatif est :

$$P(\bar{T} \cap \bar{M}) = P(\bar{M}) \cdot P_{\bar{M}}(\bar{T}) = 0,97 \times 0,96 = 0,9312$$

d) La probabilité que la personne soit en bonne santé et que le test soit positif est :

$$P(T \cap \bar{M}) = P(\bar{M}) \cdot P_{\bar{M}}(T) = 0,97 \times 0,04 = 0,0388$$

e) La probabilité que le test soit positif est :

$$P(T) = P(T \cap M) + P(T \cap \bar{M}) = 0,0682$$

f) La probabilité que la personne soit malade sachant que le test est positif est :

$$P_T(M) = \frac{P(M)}{P(T)} \times P_M(T) = \frac{147}{341}$$

> **Applications.**
1. Le gérant d'un magasin d'informatique a reçu un lot de boîtes de CD-ROM.

5% des boîtes sont abîmées. Le gérant estime que :

- $60\%$ des boites abimées contiennent au moins un CD-ROM défectueux.
- $98\%$ des boites non abimées ne contiennent aucun CD-ROM défectueux.

Un client achète une boîte du lot. On désigne par A et B les événements suivants :

A : « La boîte est abîmée » ; B : « La boîte achetée contient au moins un CD-ROM défectueux »

a) Donner les probabilités suivantes: $ P(A) $; $ P(\overline{A}) $; $ P_A(D) $; $ P_{\overline{A}}(D) $; $ P_A(\overline{D}) $; $ P_{\overline{A}}(\overline{D}) $
b) Le client constate qu'un des CD-ROM achete est defectueux.

Quelle est la probabilité pour qu'il ait acheté une boîte abîmée ?

2. Un employé se rend à son travail. S'il est à l'heure, il prend le bus de ramassage gratuit mis à disposition par l'entreprise, s'il est en retard il prend le bus de la ville et il lui en coûte 15Dh.

Si l'employé est à l'heure un jour donné, la probabilité qu'il soit en retard le lendemain est $$\frac{1}{5}$$, s'il est en retard un jour donné, la probabilité qu'il soit en retard le lendemain est $$\frac{1}{20}$$.

Pour tout entier $$n \ge 1$$, on appelle $$R_n$$ l'événement : « L'employé est en retard le jour $$n$$ »

On pose : $$p_n = P(R_n)$$ , $$q_n = P(\overline{R}_n)$$ , $$p_1 = 0$$

a) Déterminer les probabilités conditionnelles $P_{R_n}(R_{n + 1})$ et $P_{R_n}(R_{n + 1})$
b) En utilisant la formule des probabilités composées, déterminer $ P\left(R_{n+1} \cap R_n\right) $ en fonction de $ p_n $, et $ P\left(R_{n+1} \cap \overline{R}_n\right) $ en fonction de $ q_n $.
c) En déduire que pour tout $ n \in \mathbb{N}^* $: $ p_{n+1} = \frac{1}{5} - \frac{3}{20} p_n $.
d) Montrer par recurrence que pour tout $ n \in \mathbb{N}^* $: $ p_n = \frac{4}{23}\left(1 - \left(-\frac{3}{20}\right)^{n-1}\right) $ puis déterminer $ \lim_{n \to \infty} p_n $.

#### 3.3. FORMULE DES PROBABILITÉS TOTALES

> **Proposition 5.**
Soit $$P$$ une probabilité définie sur un univers $$\Omega$$, et soit $$(A_1, A_2, ..., A_n)$$ un système complet d'événements de $$\Omega$$. Pour tout événement $$B \subset \Omega$$, on a la formule suivante dite « Formule des probabilités totales » :

$$P(B) = \sum_{i=1}^{n} P(B \cap A_i) = P(B \cap A_1) + P(B \cap A_2) + ... + P(B \cap A_n)$$

Si, pour tout $$i \in \{1; 2; ...; n\}$$, on a $$P(A_i) \neq 0$$, on obtient :

$$P(B) = \sum_{i=1}^{n} P_{A_i}(B)P(A_i) = P_{A_1}(B)P(A_1) + P_{A_2}(B)P(A_2) + ... + P_{A_n}(B)P(A_n)$$

> **Corollaire.**
Soit $$P$$ une probabilité définie sur un univers $$\Omega$$.

Pour tous événements $$A$$ et $$B$$ de $$\Omega$$, on a : $$P(B) = P(B \cap A) + P(B \cap \overline{A})$$.

Si $$0 < P(A) < 1$$, on obtient : $$P(B) = P_A(B) \times P(A) + P_{\overline{A}}(B) \times P(\overline{A})$$

> **Exemples.**
1) On dispose de 2 pièces de monnaie. Une des 2 pièces est équilibrée, l'autre est truquée : elle affiche Pile avec la probabilité $$\frac{3}{5}$$. On choisit au hasard une pièce et on la lance une fois. Calculons la probabilité

d'obtenir Pile. Pour cela, considérons les événements :

$P$ : « obtenir Pile » et $T$ : « la pièce est truquée »

Selon les données de l'exemple : $P(T) = P(\overline{T}) = \frac{1}{2}$ , $P_T(P) = \frac{3}{5}$ , $P_{\overline{T}}(P) = \frac{1}{2}$

D'après la formule des probabilités totales (on pourra dessiner un arbre pondéré), on a alors :

$$P(P) = P(T)P_T(P) + P(\overline{T})P_{\overline{T}}(P) = \frac{1}{2} \times \frac{3}{5} + \frac{1}{2} \times \frac{1}{2} = \frac{11}{20}$$

2) Une urne $A$ contient 5 boules rouges et 2 boules blanches et une urne $B$ contient 3 boules rouges et 4 boules blanches. On lance un dé équilibré :

- Si on obtient 1 ou 2, on tire une boule dans l'urne $A$.
- Si on obtient 3, 4, 5 ou 6, on tire une boule dans l'urne $B$.

Calculons la probabilité d'obtenir une boule rouge.

Pour cela, considérons les événements :

$D$ : « obtenir 1 ou 2 » et $R$ : « la boule tirée est rouge »

Selon les données de l'exemple : $P(D) = \frac{2}{6}$ ; $P(\overline{D}) = \frac{4}{6}$ ; $P_D(R) = \frac{5}{7}$ ; $P_{\overline{D}}(R) = \frac{3}{7}$

D'après la formule des probabilités totales (on pourra dessiner un arbre pondéré),

on a alors : $P(R) = P(D)P_D(R) + P(\overline{D})P_{\overline{D}}(R) = \frac{1}{3} \times \frac{5}{7} + \frac{2}{3} \times \frac{3}{7} = \frac{11}{21}$

3) A un carrefour, une étude statistique sur un feu tricolore montre que :

- Si le feu est vert, il y a $99\%$ de chances que l'automobiliste passe.
- Si le feu est orange, il y a $30\%$ de chances que l'automobiliste passe.
- Si le feu est rouge, il y a $1\%$ de chances que l'automobiliste passe.

Le cycle du feu tricolore dure une minute répartie comme suit : le feu vert dure 25 secondes, l'orange, 5 secondes et le rouge, 30 secondes. On veut calculer la probabilité qu'un automobiliste passe sans s'arrêter à ce feu tricolore.

Pour cela, on considère les événements

$A$ : « l'automobiliste passe » ; $V$ : « le feu est vert »

$O$ : « Le feu est orange » ; $R$ : « le feu est rouge »

Selon les données de l'exemple : $P_T(A) = \frac{99}{100}$ ; $P_R(A) = \frac{1}{100}$

$$P_O(A) = \frac{30}{100} \quad , \quad P(V) = \frac{25}{60} \quad , \quad P(O) = \frac{5}{60} \quad , \quad P(R) = \frac{30}{60}$$

On cherche à calculer $P(A)$. Comme la famille $V$, $O$ et $R$ forme un système complet d'événements, la formule des probabilités totales donne :

$$P(A) = P(V)P_T(A) + P(O)P_O(A) + P(R)P_R(A) = \frac{25}{60} \times \frac{99}{100} + \frac{5}{60} \times \frac{30}{100} + \frac{30}{60} \times \frac{1}{100}$$

Par suite : $P(A) = \frac{177}{400}$

### 4. Indépendance
#### 4.1. INDÉPENDANCE DES ÉVÉNEMENTS

> **Définition 9.**
Soit $P$ une probabilité définie sur un univers $\Omega$.

On dit que deux événements $A$ et $B$ de $\Omega$ sont indépendants si on a :

$$P(A \cap B) = P(A) \times P(B) \quad \text{ou} \quad P_B(A) = P(A) \quad \text{ou} \quad P_A(B) = P(B)$$

> **Remarques.**
- Les trois égalités citées dans la définition 9 ci-dessus sont équivalentes, à conditions bien sûr que $A$ et $B$ soient de probabilités non nulles, ce qui est souvent dans la pratique. Ainsi, si $P(A) \neq 0$, $A$ et $B$ sont indépendants si la probabilité de $B$ et sa probabilité conditionnelle à $A$ sont égales : la réalisation de l'événement $A$ n'influe pas sur celle de $B$. Lorsqu'une telle absence de lien causal (« indépendance » au sens logique) se manifeste entre deux événements $A$ et $B$, on peut affirmer l'indépendance de ces événements.

- L'indépendance n'est en général pas démontrable. Elle constitue un choix (ou une conséquence) de la modélisation probabiliste d'un phénomène aléatoire. Lorsqu'il est demandé de démontrer que deux événements sont indépendants, c'est parce qu'il existe déjà une hypothèse d'indépendance (éventuellement dissimulée) parmi les données du problème.

- Lorsque l'énoncé du problème contient des phrases comme « tirage avec remise dans une urne », « lancers successifs d'une pièce »..., l'indépendance est claire.

- Attention ! l'indépendance (notion probabiliste) ne doit pas être confondue avec l'incompatibilité (notion ensembliste). En fait, deux événements incompatibles (et de probabilités non nulles) ne sont jamais indépendants puisque, si tel est le cas de $A$ et $B$, on a : $P(A) = P_B(A) = \frac{P(A \cap B)}{P(B)} = 0$. Intuitivement, deux événements incompatibles sont dépendants l'un de l'autre puisque la place occupée par l'un ne peut être occupée par l'autre.

> **Exemples.**
1) On lance deux dés non truqués. On considère les événements :

$A$ : « Le premier dé donne un numéro pair » et $B$ : « le deuxième dé donne 3 »

Le nombre de résultats possibles est : $\text{Card } \Omega = 6^2 = 36$

Il s'ensuit donc : $P(A) = \frac{\text{Card } A}{\text{Card } \Omega} = \frac{3 \times 6}{36} = \frac{1}{2}$ et $P(B) = \frac{\text{Card } B}{\text{Card } \Omega} = \frac{6}{36} = \frac{1}{6}$.

Comme $A \cap B = \{(2;3); (4;3); (6;3)\}$, on obtient : $P(A \cap B) = \frac{3}{36} = \frac{1}{12}$.

Enfin, et puisque $P(A \cap B) = P(A) \times P(B) = \frac{1}{12}$, les événements $A$ et $B$ sont indépendants.

2) Une urne contient 13 boules dont 6 noires, 3 blanches et 4 rouges. On tire au hasard et simultanément 4 boules de l'urne. On considère les événements :

$A$ : « on obtient deux boules blanches » et $B$ : « on obtient deux boules rouges »

Le nombre de résultats possibles est : $\text{Card } \Omega = C_{13}^4 = 715$. On a alors :

$$\begin{array}{l} \bullet P(A) = \frac{\text{Card } A}{\text{Card } \Omega} = \frac{C_3^2 \times C_{10}^2}{715} = \frac{27}{143} \quad \text{et} \quad P(B) = \frac{\text{Card } B}{\text{Card } \Omega} = \frac{C_4^2 \times C_9^2}{715} = \frac{216}{715} \\ \bullet P(A \cap B) = \frac{\text{Card } (A \cap B)}{\text{Card } \Omega} = \frac{C_3^2 \times C_4^2}{715} = \frac{18}{715} \end{array}$$

Comme $P(A \cap B) \neq P(A) \times P(B)$, alors les événements $A$ et $B$ ne sont pas indépendants.

3) Une pièce de monnaie (truquée ou pas) est lancée deux fois de suite. L'univers est $\Omega = \{PP; PF; FP; F\}$ On considère les événements :

$A$ : « les deux lancers ne donnent pas le même résultat » et $B$ : « le deuxième lancer donne face »

- Si la piece est parfaitement équilibrée, alors: $ P(A) = \frac{2}{4} = \frac{1}{2} $ et $ P(B) = \frac{2}{4} = \frac{1}{2} $ et $ P(A \cap B) = \frac{1}{4} $. Ainsi, les événements $ A $ et $ B $ sont indépendants.
- Si la piece est truquee et qu'elle tombe sur pile avec une probabilité de $\frac{3}{4}$, on obtient alors:

$$\begin{array}{l} P(A) = P(\{(P; F)\}) + P(\{(F; P)\}) = \frac{3}{4} \times \frac{1}{4} + \frac{1}{4} \times \frac{3}{4} = \frac{3}{8} \\ P(B) = P(\{(F; F)\}) + P(\{(P; F)\}) = \frac{1}{4} \times \frac{1}{4} + \frac{3}{4} \times \frac{1}{4} = \frac{1}{8} \\ P(A \cap B) = P(\{(P; F)\}) = \frac{3}{4} \times \frac{1}{4} = \frac{3}{16} \end{array}$$

Puisque $P(A \cap B) \neq P(A) \times P(B)$, alors les événements $A$ et $B$ ne sont pas indépendants.

> **Applications.**
1. Dans une université, une enquête sur le tabagisme a donné les résultats suivants :

On choisit au hasard l'une des 1000 personnes interrogées.

On note $A$ et $B$ les événements :

$A$ : « En réponse à l'enquête, la personne a déclaré être du sexe féminin

$B$ : « En réponse à l'enquête, la personne a déclaré fumeur»

a) $A$ et $B$ sont-ils indépendants? Justifier votre response.
b) Même question pour la meme enquete dans une autre universite ou les résultats sont consignes dans le tableau ci-dessous:

|   | Hommes | Femmes  |
| --- | --- | --- |
|  Fumeurs | 420 | 75  |
|  Non-fumeurs | 280 | 225  |

|   | Hommes | Femmes  |
| --- | --- | --- |
|  Fumeurs | 440 | 360  |
|  Non-fumeurs | 110 | 90  |

2. Soient A et B deux événements indépendants d'un univers Ω, et P une probabilité définie sur Ω.
Montrer les résultats suivants :

a) A et B̄ sont indépendants.

b) Ā et B sont indépendants.

c) Ā et B̄ sont indépendants.

d) P(A ∩ B) × P(Ā ∩ B̄) = P(A ∩ B̄) × P(Ā ∩ B).

#### 4.2. ÉPREUVES INDÉPENDANTES - RÉPÉTITION D'UNE ÉPREUVE

> **Définition 10.**
Il y a répétition d'expériences identiques, lorsque la même expérience aléatoire est répétée plusieurs fois de suite. Ces expériences aléatoires successives sont indépendantes lorsque l'issue de l'une quelconque de ces expériences ne dépend pas de l'issue des autres expériences.

> **Exemples.**
1) On lance 10 fois de suite un dé cubique bien équilibré dont les faces sont numérotées de 1 à 6 et on s'intéresse au nombre de 6 obtenus.
2) On lance une pièce de monnaie équilibrée 100 fois et on s'intéresse au nombre de fois où la pièce retombe sur pile.

> **Proposition 6.**
Soit A un événement de probabilité p lors d'une épreuve aléatoire, et soit n un entier naturel non nul. Lorsqu'on répète cette épreuve n fois de manières identiques et indépendantes, alors la probabilité que l'événement A soit réalisé k fois exactement est : Cₙᵏ pᵏ (1 - p)ⁿ⁻ᵏ où k ∈ {0; 1; 2; ...; n}.

> **Exemple.**
On lance 10 fois de suite un dé cubique bien équilibré dont les faces sont numérotées de 1 à 6 et on s'intéresse au nombre de 6 obtenus.

- La probabilité d'obtenir « le numéro 6 » 3 fois exactement est : C₁₀³ (1/6)³ (5/6)⁷.
- La probabilité de n'obtenir jamais « le numéro 6 » est : C₁₀⁰ (1/6)⁰ (5/6)¹⁰ = (5/6)¹⁰.
- La probabilité d'obtenir « le numéro 6 » une fois exactement est : C₁₀¹ (1/6)(5/6)⁹.

### 5. Variables aléatoires
#### 5.1. INTRODUCTION

La première question qu'on peut poser dans ce chapitre est la suivante :
« Pourquoi les variables aléatoires ? A quoi servent-elles ? »

Le besoin de calculs, comme par exemple celui de la moyenne associée aux différents résultats possibles d'une épreuve aléatoire, impose que ce résultat, symbolisé ou non par un nombre, soit mis sous forme numérique. C'est pourquoi on souhaitera presque toujours, traduire par une valeur numérique l'événement réalisé.

Pour un lancer de pièce de monnaie, on peut retenir par exemple comme codage des résultats : pile $\mapsto 0$, face $\mapsto 1$. Pour un lancer de dé, il y a un codage naturel puisque le résultat a ici un caractère numérique : face1 $\mapsto 1$,..., face6 $\mapsto 6$. Mais on peut bien sûr envisager d'autres codages, comme par exemple noter par 0 tout résultat pair et par 1 tout résultat impair.

Bien entendu la valeur numérique associée à un résultat est arbitraire et correspond à un codage des événements qui va se faire au moyen d'une certaine application, notée usuellement $X$, qui va associer un nombre à chaque événement élémentaire, soit :

$$\begin{array}{l} X: \Omega \to \mathbb{R} \\ \omega \mapsto X(\omega) = x \end{array}$$

Le résultat $\omega$ ayant un caractère aléatoire, la valeur numérique $X(\omega)$ associée a aussi un caractère aléatoire. Il serait donc intéressant de pouvoir calculer la probabilité que $X$ prenne une certaine valeur ou appartienne à un certain intervalle.

Pour pouvoir définir cette probabilité sur l'ensemble image $X(\Omega) \subset \mathbb{R}$, il faut pouvoir revenir en arrière sur l'ensemble de départ puisque la probabilité est définie sur $\Omega$. Il va donc falloir imposer une certaine condition à cette application qui sera alors appelée variable aléatoire.

Le rôle extrêmement important que jouent les variables aléatoires est la modélisation d'un caractère quantitatif. En effet, si on considère une population $\Omega$ sur laquelle est défini un caractère quantitatif $X$, alors $X$ est une application de $\Omega$ dans $\mathbb{R}$ qui, à tout individu $\omega$, associe un réel $x = X(\omega) \in X(\Omega)$ ensemble des valeurs du caractère. Cette application modélise le caractère d'une façon déterministe en ce sens que, si on connaît l'individu $\omega$, on connaît aussitôt la valeur de $x$.

> **Définition 11.**
Soit $\Omega$ l'univers d'une expérience aléatoire.

Une variable aléatoire réelle définie sur $\Omega$ est une application $X$ définie sur $\Omega$ à valeurs dans $\mathbb{R}$. L'ensemble $X(\Omega)$ des valeurs prises par $X$ s'appelle le support de la variable aléatoire $X$.

> **Remarques.**
- Noter bien qu'une variable aléatoire est une application définie sur $\Omega$ et non une variable numérique.
- Comme $\Omega$ est fini, il en est de même de son image par l'application $X$. En notant $n$ le cardinal de $X(\Omega)$, on écrira d'habitude $X(\Omega) = \{x_1; x_2; \ldots; x_n\}$. Dans la plupart des exemples concrets, on a $X(\Omega) \subset \mathbb{N}$ ou, plus rarement, $X(\Omega) \subset \mathbb{Z}$.
Pour insister sur l'importance des valeurs prises par $X$ et non sur les valeurs des antécédents, l'événement $\{\omega \in \Omega / X(\omega) = x\}$ sera noté tout simplement $(X = x)$ ou parfois $[X = x]$. De même, les événements $\{\omega \in \Omega / X(\omega) \leq x\}$ et $\{\omega \in \Omega / x' < X(\omega) < x\}$ seront notés respectivement $(X \leq x)$ et $(x' < X < x)$.

> **Exemples.**
1) Une urne contient 100 boules de différentes couleurs à savoir : 10 bleues, 10 rouges, 5 orange, 15 vertes, 20 noires, 40 marrons.

Expérience aléatoire : tirer une boule dans l'urne.

Résultat $(\omega \in \Omega)$ : couleur de la boule extraite de l'urne.

On a donc $\Omega = \{b, r, o, v, n, m\}$ (La couleur est identifiée par sa première lettre).

A chaque élément $\omega \in \Omega$, on associe un nombre qui représente un gain en DH, ce nombre est négatif s'il s'agit d'une perte.

$$b \mapsto X(b) = 100 \quad ; \quad r \mapsto X(r) = 300 \quad ; \quad o \mapsto X(o) = -200$$

$$v \mapsto X(v) = 100 \quad ; \quad n \mapsto X(n) = -200 \quad ; \quad m \mapsto X(m) = 50$$

La variable aléatoire $X$ est bien définie comme une application de $\Omega$ dans $\mathbb{R}$.

La variable aléatoire $X$ peut prendre quatre valeurs :

$$x_1 = -200 \quad ; \quad x_2 = 50 \quad ; \quad x_3 = 100 \quad ; \quad x_4 = 300$$

Ces valeurs de $X$ apparaissent de façon aléatoire avec les expériences.

Les éléments « $o$ » et « $n$ » ont la même image : $X(o) = X(n) = -200$

2) Un joueur lance deux dés dont les faces sont numérotées de 1 à 6.

On a : $\Omega = \{(x_1, x_2) / x_1, x_2 \in \{1, 2, \dots, 6\}\}$ et $\text{Card } \Omega = 36$. Considérons l'application $X$ qui à chaque résultat possible de ces lancers associe la somme de chiffres apparus :

$$X : \Omega \to \mathbb{R}, \ (x_1, x_2) \mapsto X(x_1, x_2) = x_1 + x_2$$

Alors $X$ est une variable aléatoire sur $\Omega$ et $X(\Omega) = \{2, 3, \dots, 12\}$. Par exemple :

$$(X = 5) = \{(x_1, x_2) \in \Omega / x_1 + x_2 = 5\} = \{(1, 4), (2, 3), (3, 2), (4, 1)\}$$

#### 5.2. Loi de probabilité d'une variable aléatoire

> **Définition 12.**
Soit X une variable aléatoire définie sur un espace probabilisé fini (Ω; P), et X(Ω) son support.
On appelle loi de probabilité de X (ou loi de X ou distribution de X) l'ensemble des couples (xi, pi)
où : xi ∈ X(Ω) et pi = P(X = xi)

> **Remarque.**
En pratique, pour déterminer la loi de probabilité d'une variable aléatoire X, on détermine les valeurs xi susceptibles d'être prises par X, puis les probabilités pi = P(X = xi). On peut résumer les résultats obtenus sous forme d'un tableau donnant les probabilités des différents éléments de l'ensemble X(Ω):

|  xi | x1 | x2 | ... | xn  |
| --- | --- | --- | --- | --- |
|  pi | p1 | p2 | ... | pn  |

Comme les événements (X = xi), où i ∈ {1, 2, ..., n}, forment un système complet d'événements alors

$$\sum_{i=1}^{n} p_i = p_1 + p_2 + ... + p_n = 1$$

> **Exemples.**
1) Un dé cubique, non truqué et non standard, porte inscrits sur ses faces les nombres :

$$-2 \ ; \ -2 \ ; \ 1 \ ; \ 1 \ ; \ 1 \ ; \ 4$$

Soit X la variable aléatoire égale au numéro que ce dé affiche après un lancer. Ici Ω = {-2; -2; 1; 1; 4} et Card Ω = 6. L'ensemble des valeurs prises par X est : X(Ω) = {-2, 1, 4}.

Calculons maintenant les probabilités : P(X = -2) ; P(X = 1) ; P(X = 4)

On a : P(X = -2) = 2/6 = 1/3 ; P(X = 1) = 3/6 = 1/2 ; P(X = 4) = 1/6

Loi de probabilité de X:

|  xi | -2 | 1 | 4  |
| --- | --- | --- | --- |
|  pi | 1/3 | 1/2 | 1/6  |

2) Un joueur joue à un jeu où la probabilité de gagner est 0,32. S'il gagne, il reçoit 40DH, sinon il perd 20DH. Soit G la variable aléatoire égale au gain algébrique du joueur (une perte est un gain négatif).

Déterminons la loi de probabilité de G :

p'après l'énoncé, on a G(Ω) = {-20, 40}.

La loi de probabilité de G est :

$$P(G = -20) = 1 - 0,32 = 0,68 \quad \text{et} \quad P(G = 40) = 0,32$$

3) Un marchand de glaces propose 9 parfums au choix pour les glaces en cornet.

Trois clients choisissent chacun un des parfums proposés.

Soit X la variable aléatoire égale au nombre de parfums différents choisis par les trois clients.

Si on désigne par Ω l'univers des possibles, on obtient Card Ω = 9³ = 729.

L'ensemble des valeurs prises par X est : X(Ω) = {1, 2, 3}

Calculons maintenant les probabilités :

$$P(X = 1) \quad ; \quad P(X = 2) \quad ; \quad P(X = 3)$$

On a : (X = 1) = {(parfum 1, parfum 1, parfum 1);...; (parfum 9, parfum 9, parfum 9)}

Donc : $$P(X = 1) = \frac{9}{729} = \frac{1}{81}$$

L'événement (X = 3) est constitué des arrangements de 3 parfums choisis parmi 9.

Donc : $$P(X = 1) = \frac{A_0^3}{729} = \frac{56}{81}$$. Puisque on a X(Ω) = {1, 2, 3} alors :

$$P(X = 2) = 1 - P(X = 1) - P(X = 3) = 1 - \frac{56}{81} - \frac{1}{81} = \frac{24}{81}$$

Loi de probabilité de X :

|  x_{i} | 1 | 2 | 3  |
| --- | --- | --- | --- |
|  p_{i} | 1/81 | 24/81 | 56/81  |

4) Une urne contient quatre boules rouges et six boules blanches. On tire successivement et avec remise deux boules de l'urne. On note X la variable aléatoire égale au nombre de boules rouges tirées.

On a ici X(Ω) = {0, 1, 2}. On note :

R₁ l'événement « on obtient une boule rouge au premier tirage »

R₂ l'événement « on obtient une boule rouge au deuxième tirage »

Dans ce cas, on a :

$$(X = 0) = \overline{R}_1 \cap \overline{R}_2 \quad ; \quad (X = 1) = (\overline{R}_1 \cap R_2) \cup (R_1 \cap \overline{R}_2) \quad ; \quad (X = 2) = R_1 \cap R_2$$

De plus, les événements R̄₁ et R̄₂ sont indépendants. Donc :

$$P(X = 0) = P(\overline{R}_1 \cap \overline{R}_2) = P(\overline{R}_1) \cdot P(\overline{R}_2) = \frac{6}{10} \times \frac{6}{10} = \frac{9}{25}$$

On montre de même que :

$$\begin{array}{l} P(X=1) = P(\overline{R}_1 \cap R_2) + P(R_1 \cap \overline{R}_2) \\ = P(\overline{R}_1) \cdot P(R_2) + P(R_1) \cdot P(\overline{R}_2) \\ = \frac{6}{10} \times \frac{4}{10} + \frac{4}{10} \times \frac{6}{10} \\ = \frac{12}{25} \end{array}$$

$$\begin{array}{l} P(X=2) = P(R_1 \cap R_2) \\ = P(R_1) \cdot P(R_2) \\ = \frac{4}{10} \times \frac{4}{10} \\ = \frac{4}{25} \end{array}$$

Loi de probabilité de $X$ :

|  $x_i$ | 0 | 1 | 2  |
| --- | --- | --- | --- |
|  $p_i$ | $\frac{9}{25}$ | $\frac{12}{25}$ | $\frac{4}{25}$  |

> **Applications.**
1. Un dé cubique est truqué de sorte que la probabilité d'obtenir $k \in \{1; 2; 3; 4; 5; 6\}$ soit proportionnelle.
On note $X$ la variable aléatoire correspondant au numéro obtenu. Déterminer la loi de $X$

2. On lance simultanément deux dés à 6 faces. On appelle $X$ la variable aléatoire égale à la somme des numéros obtenus et $Y$ la variable aléatoire égale au maximum des numéros obtenus.

a) Déterminer la loi de probabilité de $X$.
b) Déterminer la loi de probabilité de $Y$.

3. On tire 4 boules d'une urne contenant 3 boules blanches et 2 boules noires indiscernables au toucher.
Soit $X$ la variable aléatoire égale au nombre de boules noires obtenues.

Dans chacun des cas suivants, déterminer la loi de probabilité de $X$ :

a) Si le tirage se fait successivement et avec remise.
b) Si le tirage se fait successivement et sans remise.

#### 5.3. ESPÉRANCE MATHÉMATIQUE - VARIANCE - ÉCART-TYPE

> **Définition 13.**
Soit $X$ une variable aléatoire définie sur un espace probabilisé fini $(\Omega; P)$ telle que :

$$X(\Omega) = \{x_1, x_2, ..., x_n\} \quad \text{et} \quad p_i = P(X = x_i) \text{ pour tout } i \in \{1, 2, ..., n\}$$

On appelle espérance mathématique de $X$ le nombre réel donné par la formule :

$$E(X) = \sum_{i=1}^{n} x_i p(X = x_i) = \sum_{i=1}^{n} x_i p_i$$

> **Interprétation de l'espérance mathématique.**
L'espérance mathématique $E(X)$ est la moyenne des valeurs prises par la variable aléatoire $X$ perdérées par la probabilité que $X$ prenne cette valeur. Dans le cas où $E(X) = 0$, on dit que la variable aléatoire $X$ est centrée.

On notera que l'espérance ne dépend pas directement de la variable aléatoire mais seulement de sa loi. À l'origine des probabilités, la quantité $E(X)$ a été introduite pour traduire la notion de gain moyen, ou espérance de gain, la variable aléatoire $X$ représentant la valeur du gain à un certain jeu. Dans un jeu au hasard, lorsque $E(X) = 0$, le jeu est dit équitable. En revanche, si $E(X) < 0$ le jeu est défavorable au joueur. Pour les économistes et statisticiens, $E(X)$ est souvent noté $\mu$ ou $m$. Bien que le terme de moyenne soit communément employé pour désigner l'espérance mathématique, la signification n'est pas la même que la moyenne utilisée en statistique descriptive. Cette dernière se calcule avec des fréquences observées.

> **Exemples.**
1) Le tableau suivant présente la variable aléatoire $X$ égale au gain algébrique lors d'un jeu : (les valeurs sont donnée en $DH$)

|  $x_i$ | -200 | 50 | 100 | 300  |
| --- | --- | --- | --- | --- |
|  $p_i$ | 0,25 | 0,40 | 0,25 | 0,10  |

L'espérance mathématique de $X$ est :

$$E(X) = -200 \times 0,25 + 50 \times 0,40 + 100 \times 0,25 + 300 \times 0,10 = 25 DH$$

Puisque ici $E(X) > 0$ alors le jeu est favorable pour le joueur.

2) Soit $n \in \mathbb{N}^*$. On considère la variable aléatoire $X$ définie par :

$$X(\Omega) = \{1, 2, ..., n\} \text{ et pour tout } k \in X(\Omega), P(X=k) = \frac{2k}{n(n+1)}.$$

Calculons l'espérance mathématique $E(X)$ : (On rappelle que $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$)

$$E(X) = \sum_{k=1}^{n} k P(X=k) = \sum_{k=1}^{n} \frac{2k^2}{n(n+1)} = \frac{2}{n(n+1)} \sum_{k=1}^{n} k^2 = \frac{2}{n(n+1)} \frac{n(n+1)(2n+1)}{6} = \frac{2n+1}{3}$$

> **Définition 14.**
Soit $X$ une variable aléatoire définie sur un espace probabilisé fini $(\Omega; P)$ telle que :

$$X(\Omega) = \{x_1, x_2, ..., x_n\} \quad \text{et} \quad p_i = P(X=x_i) \text{ pour tout } i \in \{1, 2, ..., n\}$$

On appelle variance mathématique de $X$ le nombre réel positif :

$$V(X) = E[(X - E(X))^2] = \sum_{i=1}^{n} p_i (x_i - E(X))^2$$

La racine carrée de la variance est appelée écart-type de $X$ et on la note $\sigma(X)$.

On a donc :

$$\sigma(X) = \sqrt{V(X)}$$

> **Interprétation de la variance mathématique.**
La variance d'une variable aléatoire est toujours positive. C'est la moyenne des carrés de la distance entre valeurs de X et l'espérance de X. La variance est donc une mesure de la dispersion de X par rapport à E(X). Plus la variance est élevée, plus la dispersion est grande et plus les réalisations x de la variable aléatoire X sont dispersées.

A titre d'exemple, considérons les deux variables aléatoires discrètes X et Y dont les lois de probabilité sont données par les tableaux suivants :

|  x_{i} | 2 | 4 | 6  |
| --- | --- | --- | --- |
|  P(X = x_{i}) | 1/4 | 1/4 | 1/2  |

|  y_{k} | -4 | 3 | 33  |
| --- | --- | --- | --- |
|  P(Y = y_{k}) | 1/2 | 1/3 | 1/6  |

Un calcul élémentaire montre que les variables X et Y ont même espérance : E(X) = E(Y) = 4,5

Par contre, le calcul de la variance à l'aide de la définition ci-dessus donne : V(X) = 11/4 et V(Y) = 689/4. Ces dernières indiquent une dispersion de Y autour de sa moyenne beaucoup plus grande que celle de X. Pour le calcul de la variance, la formule V(X) = Σ$_{i=1}$$^{n}$ p$_{i}$(x$_{i}$ - E(X))$^{2}$ est un peu lourde et aboutit parfois à des calculs compliqués. C'est pourquoi il est préférable d'utiliser la formule développée suivante nommée « formule de Koenig »

> **Proposition 7.**
Soit X une variable aléatoire définie sur un espace probabilisé fini (Ω; P) telle que :

$$X(\Omega) = \{x_1, x_2, ..., x_n\} \quad \text{et} \quad p_i = P(X = x_i) \text{ pour tout } i \in \{1, 2, ..., n\}$$

On a alors la formule suivante dite « formule de Koenig » :

$$V(X) = E(X^2) - (E(X))^2 = \sum_{i=1}^{n} p_i x_i^2 - (E(X))^2$$

> **Exemple.**
Soit $n \in \mathbb{N}$*. On rappelle les sommes classiques :

$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2} \quad ; \quad \sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6} \quad ; \quad \sum_{k=1}^{n} k^3 = \frac{n^2(n+1)^2}{4}$$

On considère la variable aléatoire X définie par :

$$X(\Omega) = \{1, 2, ..., n\} \quad \text{et} \quad \text{pour tout } k \in X(\Omega), P(X = k) = \frac{2k-1}{n^2}$$

Calculons E(X) et V(X) :

On a d'abord : $$E(X) = \sum_{k=1}^{n} k P(X=k) = \sum_{k=1}^{n} \frac{2k^2-k}{n^2} = \frac{1}{n^2} \left( 2 \sum_{k=1}^{n} k^2 - \sum_{k=1}^{n} k \right)$$

Donc : $$E(X) = \frac{(n+1)(n-1)}{6n}$$

Ensuite : $$E(X^2) = \sum_{k=1}^{n} k^2 P(X=k) = \sum_{k=1}^{n} \frac{2k^3-k^2}{n^2} = \frac{1}{n^2} \left( 2 \sum_{k=1}^{n} k^3 - \sum_{k=1}^{n} k^2 \right)$$

Il en résulte alors : $$E(X^2) = \frac{(n+1)(3n^2+n-1)}{6n}$$

D'où : $$V(X) = E(X^2) - (E(X))^2 = \frac{(n+1)(17n^3+7n^2-5n-1)}{36n^2}$$

> **Applications.**
A. Pour une demande aléatoire de x tonnes de denrées périssables, un grossiste commande y tonnes de denrées chaque jour avec y ∈ {1, 2, 3, 4, 5, 6}.

Soit X la variable aléatoire « demande en tonnes » et sa loi de probabilité :

|  x_{i} | 0 | 1 | 2 | 3 | 4 | 5 | 6  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  p_{i} | 0,02 | 0,15 | 0,25 | 0,30 | 0,15 | 0,10 | 0,03  |

1. a) Calculer la probabilité que le grossiste vende moins de trois tonnes de denrées dans la journée.

b) Calculer le nombre moyen de tonnes vendues chaque jour.

c) Calculer l'écart-type de X

2. Le grossiste gagne 5000 Dhs par tonne vendue et perd 2000 Dhs par tonne non vendue.

Soit la variable G$_{y}$ : {0, 1, 2, 3, 4, 5, 6} → ℝ dont les valeurs sont égales au bénéfice

lorsque y tonnes sont commandées pour une journée.

a) Construire un tableau donnant les valeurs prises par G$_{y}$

pour y ∈ {1, 2, ..., 6} ainsi que les probabilité associées.

b) Calculer E(G$_{y}$) pour y ∈ {1, 2, ..., 6}.

Pour quelle valeur de y l'espérance de gain est maximale ?

B. On lance simultanément deux dés à 6 faces.

On appelle Z la variable aléatoire égale à la valeur absolue de la différence des numéros obtenus.

1. Déterminer la loi de probabilité de $ Z $.
2. Calculer L'espérance mathématique de $ Z $.
3. En déduire la variance et l'écart-type de $ Z $.

#### 5.4. FONCTION DE RÉPARTITION

> **Définition 15.**
Soit $X$ une variable aléatoire définie sur un espace probabilisé fini $(\Omega; P)$.

La fonction $F_X$ définie pour tout $x \in \mathbb{R}$ par : $F_X(x) = P(X \le x)$

est appelée la fonction de répartition de $X$.

> **Remarques.**
- La définition 14 ci-dessus est justifiée car, pour tout réel $x$, $(X \le x)$ est un événement, donc on peut calculer sa probabilité.
- La fonction de répartition $F_X$ est définie sur $\mathbb{R}$ et non seulement sur le support $X(\Omega)$ (ensemble des valeurs prises par $X$).

> **Exemple.**
On considère le tableau suivant donnant la loi de probabilité d'une variable aléatoire $X$ :

|  $x_i$ | -2 | -1 | 2 | 3  |
| --- | --- | --- | --- | --- |
|  $p_i$ | $\frac{1}{3}$ | $\frac{1}{6}$ | $\frac{1}{3}$ | $\frac{1}{6}$  |

Déterminons la fonction de répartition $F_X$ de la variable aléatoire $X$ :

On a par définition, pour tout $x \in \mathbb{R}$ : $F_X(x) = P(X \le x)$. Il s'ensuit donc :

- Si $x < -2$ : $F_X(x) = 0$

- Si $2 \le x < 3$ : $F_X(x) = \frac{1}{3} + \frac{1}{6} + \frac{1}{3} = \frac{5}{6}$

- Si $-2 \le x < -1$ : $F_X(x) = \frac{1}{3}$

- Si $3 \le x$ : $F_X(x) = 1$

- Si $-1 \le x < 2$ : $F_X(x) = \frac{1}{3} + \frac{1}{6} = \frac{1}{2}$

Par suite, la fonction de répartition de $X$ est donnée par :

$$F_X(x) = \begin{cases} 0 & \text{si } x < -2 \\ \frac{1}{3} & \text{si } -2 \le x < -1 \\ \frac{1}{2} & \text{si } -1 \le x < 2 \\ \frac{5}{6} & \text{si } 2 \le x < 3 \\ 1 & \text{si } x \ge 3 \end{cases}$$

Représentation graphique de $F_X$

> **Applications.**
1. Soit $X$ une variable aléatoire discrète ayant pour distribution de probabilité :

|  $x_i$ | 0 | 1 | 2 | 3 | 4  |
| --- | --- | --- | --- | --- | --- |
|  $P(X = x_i)$ | 0,1 | 0,2 | 0,4 | 0,15 | 0,15  |

a) Verifier que le tableau representation bien une distribution de probabilité.
b) Calculer les probabilités suivantes: $ P(1 \leq X \leq 3) $; $ P(X \geq 2) $; $ P_{(X \geq 2)}(X = 4) $.
c) Calculer l'espérance mathématique $ E(X) $ et l'écart-type $ \sigma(X) $.
d) Déterminer la fonction de répartition $ F_{X} $ de $ X $ puis tracer sa courbe.

2. On lance une pièce de monnaie 4 fois de suite. Soit $X$ la variable aléatoire qui associe à chaque éventualité, le nombre de fois d'apparition de la face $F$.

a) Déterminer la loi de probabilité de la variable aléatoire $ X $.
b) Déterminer la fonction de répartition $ F_{X} $ de $ X $ puis tracer sa courbe.
c) Quelle est la probabilité d'obtenir la face $ F $ au plus trois fois?

3. Dix chevaux, quatre blancs et six noirs entrent sur la piste d'un cirque un par un et au hasard.

On appelle $X$ la variable aléatoire égale au nombre de chevaux blancs précédant le premier cheval noir.

Préciser la loi de $X$ puis déterminer la fonction de répartition $F_X$ de $X$ et tracer son graphe.

### 6. La loi binomiale
#### 6.1. Situation type
Considérons une urne contenant un nombre fini de boules blanches et de boules noires supposées indiscernables au toucher, la proportion des boules blanches dans l'urne étant $p$ et la proportion de boules noires $q = 1 - p$. Soit l'expérience qui consiste à tirer $n$ boules avec remise dans cette urne. On note $X$ le nombre de boules blanches obtenues.

On a $X(\Omega) = \{0; 1; \dots; n\}$ et, pour tout $k \in X(\Omega) : P(X = k) = C_n^k p^k (1 - p)^{n-k}$. En effet :

L'événement $(X = k)$ est la réalisation disjointe des événements $A_{i_1, i_2, \dots, i_k}$ :

« on a tiré des boules blanches aux tirages numéros $i_1, i_2, \dots, i_k$ et des boules noires aux $n - k$ autres tirages » pour $1 \le i_1 < \dots < i_k \le n$. On a $P(A_{i_1, i_2, \dots, i_k}) = p^k q^{n-k}$, car de les résultats des différents tirages sont indépendants, et comme $A_{i_1, i_2, \dots, i_k}$ est la réunion de $C_n^k$ événements (qui correspondent au nombre de façons de choisir $i_1, i_2, \dots, i_k$ dans $\{1; 2; \dots; n\}$, c'est-à-dire les places des tirages donnant des boules blanches parmi les $n$ tirages), on obtient $P(X = k) = C_n^k p^k q^{n-k}$.

> **Définition 16.**
Soit $X$ une variable aléatoire définie sur un espace probabilisé fini $(\Omega; P)$, et $n \in \mathbb{N}^*$.

On dit que $X$ suit la loi binomiale de paramètres $n$ et $p$ si on a :

$$X(\Omega) = \{0; 1; \dots; n\} \quad \text{et} \quad P(X = k) = C_n^k p^k (1 - p)^{n-k} \text{ pour tout } k \in X(\Omega)$$

> **Remarques.**
- On a d'après la formule du binôme :

$$\sum_{k=0}^n P(X = k) = \sum_{k=0}^n C_n^k p^k q^{n-k} = (p + q)^n = 1^n = 1$$

Cela montre bien qu'il s'agit d'une loi de probabilité.

- Dans la pratique, on se donne un événement $A$ associé à une expérience aléatoire et qui se réalise avec la probabilité $p$. On répète cette expérience $n$ fois de manière indépendante. On désigne par $X$ la variable aléatoire réelle qui compte le nombre de fois où $A$ se réalise. Alors la variable $X$ suit une loi binomiale de paramètres $n$ et $p$.

> **Exemples.**
1) On lance 50 fois, de manière indépendante, une pièce truquée dont la probabilité d'obtenir face est 0,4, et on note $X$ la variable aléatoire égale au nombre de faces obtenues durant ces 50 lancers. Alors $X$ suit une loi binomiale de paramètres $n = 50$ et $p = 0,4$. Par conséquent :

$$X(\Omega) = \{0, 1, \dots, 50\} \quad \text{et} \quad P(X = k) = C_{50}^k (0,4)^k (0,6)^{50-k}$$

2) Une fabrique de microprocesseurs utilise un procédé qui produit en moyenne 2% de pièces défectueuses. Toutes les deux heures, on choisit au hasard et avec remise 50 pièces parmi les microprocesseurs produits. Le nombre de pièces défectueuses trouvées est une variable aléatoire $X$. Déterminons la loi de la variable aléatoire $X$ :

On a $X(\Omega) = \{0; 1; \dots; 50\}$. On considère l'événement $A$ : « la pièce est défectueuse ».

Par l'énoncé, $X$ est égale au nombre de réalisations de l'événement $A$ en 50 expériences indépendantes. On en déduit que $X$ suit une loi binomiale de paramètres $n = 50$ et $p = P(A) = \frac{2}{100} = 0,02$. De plus,

On a pour tout $k \in X(\Omega)$ : $P(X = k) = C_{50}^k (0,02)^k (1 - 0,02)^{50-k}$

On adopte la règle de contrôle de qualité suivante : la production sera arrêtée si l'échantillon contient au moins 3 pièces défectueuses. Dans ce cas, la probabilité que la production soit arrêtée est donc :

$P(X \ge 3) = 1 - P(X < 3) = 1 - (P(X = 0) + P(X = 1) + P(X = 2))$

3) A la livraison d'un nombre très important de colis dont 1% sont endommagés, on prélève au hasard un échantillon de 50 colis. On admet que l'on peut assimiler ce prélèvement à 50 tirages avec remise.

Soit Y la variable aléatoire égale au nombre de colis endommagés.

On a Y(Ω) = {0, 1, ..., 50}. On considère l'événement A : « le colis est endommagé ».

Par l'énoncé, Y est égale au nombre de réalisations de l'événement A en 50 expériences indépendantes.

On en déduit que Y suit une loi binomiale de paramètres n = 50 et p = P(A) = 1/100 = 0,01. De plus :

On a pour tout k ∈ Y(Ω) : P(Y = k) = C^0₅₀(0,01)^k (1 - 0,01)^50-k

Considérons les événements :

E : « L'échantillon ne comporte aucun colis endommagé »

F : « L'échantillon comporte un seul colis endommagé »

G : « L'échantillon comporte au moins deux colis endommagés »

On a alors :

P(E) = P(X = 0) = C^0₅₀ × (0,01)^0 × (0,99)^50 d'où P(E) ≈ 0,60

P(F) = P(X = 1) = C^1₅₀ × (0,01)^1 × (0,99)^49 d'où P(F) ≈ 0,31

P(G) = P(X ≥ 2) = 1 - P(X = 0) - P(X = 1) d'où P(G) ≈ 0,09

> **Proposition 8.**
Si la variable aléatoire X suit la loi de Binomiale de paramètres n et p alors :

E(X) = np et V(X) = np(1 - p)

> **Applications.**
Un sac contient 7 boules blanches et 3 boules noires. On tire une boule au hasard et on répète l'opération avec remise. Soit X le nombre de boules blanches obtenues en 6 tirages.

1. Préciser la loi de $ X $. On donnera les valeurs prises par $ X $ et pour chacune de ces valeurs de $ P(X = k) $.
2. Calculer la probabilité d'obtenir :

a) 5 boules blanches en 6 tirages.
b) Au plus 4 boules blanches en 6 tirages.
c) Ni plus de 5 boules ni moins de 2 boules en 6 tirages.

3. Déterminer l'espérance mathématique E(X) et la variance V(X).

## Méthodes

### A. Calcul des probabilités
Les questions suivantes sont indépendantes.

1) Soit $A$ et $B$ deux événements tels que : $P(A) = 0,6$ et $P(B) = 0,3$ et $P(A \cap B) = 0,1$.

a) Quelle est la probabilité que $ A $ et $ B $ se réalisent simultanément?
b) Calculer la probabilité que $ A $ ou $ B $ se réalise.
c) Calculer la probabilité que ni $A$, ni $B$ se réalisent.

2) Soit $ A $ et $ B $ deux événements. Montré que: $ P(A) - P(\overline{B}) \leq P(A \cap B) \leq \min(P(A); P(B)) $.
3) Soit $A, B$ et $C$ trois événements tels que:

$P(A) = 0,6$ ; $P(A \cap B) = 0,2$ ; $P(B \cap C) = 0,1$ ; $P(A \cap C) = 0,1$ ; $P(A \cap B \cap C) = 0,0$.

a) Calculer $P(A\cup (B\cap C))$ et $P(A\cap (B\cup C))$
b) On suppose que $P(B) = 0,4$. Calculer: $P(\overline{A} \cap \overline{B})$ et $P(A \cap \overline{B})$.

4) Soit $n \in \mathbb{N}^*$ et $\Omega = \{1; 2; \dots; n\}$. On considère l'application $Q : \Omega \to \mathbb{R}$ définie par :

$$(\forall k \in \Omega) \quad Q(\{k\}) = \frac{2k}{n(n+1)}$$

Montrer que $Q$ définit est une probabilité sur $\Omega$.

> **Solution.**
1) a) La probabilité que $ A $ et $ B $ se réalisent simultanément est $ P(A \cap B) = 0, 1 $.
b) La probabilité que $ A $ ou $ B $ se réalise est $ P(A \cup B) $. Il s'ensuit donc:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0,6 + 0,3 - 0,1 = 0,8$$

c) La probabilité que ni $A$, ni $B$ se réalisent est $P(\overline{A} \cap \overline{B})$. D'après le résultat de la question précédente

$$P(\overline{A} \cap \overline{B}) = P(\overline{A \cup B}) = 1 - P(A \cup B) = 1 - 0,8 = 0,2$$

2) Soit $A$ et $B$ deux événements. On a d'une part $A \cap B \subset A$ et $A \cap B \subset B$ ; par conséquent, $P(A \cap B) \leq P(A)$ et $P(A \cap B) \leq P(B)$. Il s'ensuit donc : $P(A \cap B) \leq \min(P(A); P(B))$. D'autre part, on a la formule

$$P(A \cap B) = P(A) + P(B) - P(A \cup B)$$

Comme $P(A \cup B) \leq 1$ et $P(\overline{B}) = 1 - P(B)$, on a : $P(A \cap B) \geq P(A) + P(B) - 1$

ce qui entraîne que : $P(A \cap B) \geq P(A) - P(\overline{B})$.

Au final : $P(A) - P(\overline{B}) \leq P(A \cap B) \leq \min(P(A); P(B))$

3) Soit $A$, $B$ et $C$ trois événements.

a) Calculons $P(A \cup (B \cap C))$ et $P(A \cap (B \cup C))$ :

$$P(A \cup (B \cap C)) = P(A) + P(B \cap C) - P(A \cap B \cap C) = 0,6 + 0,1 - 0,05 = 0,65$$

$$P(A \cap (B \cup C)) = P((A \cap B) \cup (A \cap C)) = P(A \cap B) + P(A \cap C) - P(A \cap B \cap C)$$

ce qui donne : $P(A \cap (B \cup C)) = 0,2 + 0,1 - 0,05 = 0,25$

b) On suppose que $P(B) = 0,4$. On a :

$$P(\overline{A} \cap \overline{B}) = P(\overline{A \cup B}) = 1 - P(A \cup B) = 1 - (P(A) + P(B) - P(A \cap B)) = 0,2$$

$$P(A \cap \overline{B}) = P(A) - P(A \cap B) = 0,6 - 0,2 = 0,4$$

4) On a $\Omega = \{1; 2; \dots; n\}$. Pour tout $k \in \Omega$, on a : $Q(\{k\}) = \frac{2k}{n(n+1)} \ge 0$.

De plus, en utilisant la formule $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$, on obtient :

$$\sum_{k=1}^{n} Q(\{k\}) = \frac{2}{n(n+1)} \sum_{k=1}^{n} k = \frac{2}{n(n+1)} \times \frac{n(n+1)}{2} = 1$$

Donc $Q$ est une probabilité sur $\Omega$.

• Pour calculer une probabilité, on peut utiliser les règles suivantes :

- La somme des probabilités des événements élémentaires vaut 1.
- Une probabilité est toujours comprise entre 0 et 1.
- La probabilité d'un événement est égale à la somme des probabilités des événements élémentaires

qui le composent. En cas d'équiprobabilité : $P(A) = \frac{\text{Card } A}{\text{Card } \Omega}$

• Pour deux événements $A$ et $B$ :

$$P(A \cup B) = P(A) + P(B) - P(A \cap B) ; P(\overline{A}) = 1 - P(A) ; P(A \cap \overline{B}) = P(A) - P(A \cap B)$$

### B. Probabilité conditionnelle
Une entreprise comprend 40% de cadres et 60% d'employés. On sait que 80% des cadres et 50% des Employés parlent l'anglais.

1) On interroge une personne de cette entreprise au hasard ; quelle est la probabilité pour que ce soit :

a) un cadre parlant l'anglais?
b) un employé parlant l'anglais?
c) une personne parlant l'anglais?

2) La personne interrogée parle l'anglais.

a) Quelle est la probabilité pour que ce soit un employé?
b) Quelle est la probabilité pour que soit un cadre?

> **Solution.**
La meilleure façon pour répondre à cet exercice est l'utilisation d'un arbre pondéré.

On note E, C et A les événements suivants :

A : « La personne parle l'Anglais » ; E : « La personne interrogée est un employé »

C : « La personne interrogée est un cadre »

1) On interroge une personne de cette entreprise au hasard :

a) La probabilité pour que la personne soit un cadre parlant anglais est: $ P(C \cap A) = \frac{40}{100} \times \frac{80}{100} = 0.32 $.
b) La probabilité pour que la personne soit un employé parlant anglais est: $ P(E \cap A) = \frac{60}{100} \times \frac{50}{100} = 0.5 $.
c) La probabilité pour que la personne parle l'anglais est: $ P(A) = 0,32 + 0,3 = 0,62 $.

2) La personne interrogée parle l'anglais.

a) La probabilité pour que ce soit un employé est: $ P_A(E) = \frac{P(E \cap A)}{P(A)} = \frac{0.3}{0.62} = \frac{15}{31} $.
b) La probabilité pour que ce soit un cadre est: $ P_A(C) = \frac{P(C \cap A)}{P(A)} = \frac{0.32}{0.62} = \frac{16}{31} $.

• Un arbre pondéré des probabilités vérifie toujours les propriétés fondamentales suivantes :

• La probabilité d'un chemin est le produit des probabilités de ses branches (formule des probabilités composées) : $$P(A \cap B) = P(A)P_A(B)$$

• Pour les branches issues d'un même nœud, la somme des probabilités vaut 1 :

$$P(A) + P(\overline{A}) = 1 \quad ; \quad P_A(B) + P_A(\overline{B}) = 1 \quad ; \quad P_{\overline{A}}(B) + P_{\overline{A}}(\overline{B}) = 1$$

• La probabilité d'un événement est la somme des probabilités des chemins qui le réalisent :

$$P(B) = P(A \cap B) + P(\overline{A} \cap B) = P(A)P_A(B) + P(\overline{A})P_{\overline{A}}(B)$$

• Si on connaît un système complet d'événements $$(A_1, A_2, A_3)$$, on peut réaliser un arbre de probabilité comme suit :

Par exemple, la formule des probabilités totales s'écrit dans ce cas :

$$P(B) = P(A_1).P_{A_1}(B) + P(A_2).P_{A_2}(B) + P(A_3).P_{A_3}(B)$$

Attention ! L'arbre a pour but de schématiser l'expérience aléatoire et la comprendre.

Il ne constitue en aucun cas une démonstration !

### C. Indépendance
Un élève se présente à deux concours $C_1$ et $C_2$. Ces deux concours sont indépendants. Il a une chance sur trois de réussir le concours $C_1$ et une chance sur trois de réussir le concours $C_2$.

Pensant augmenter ses chances de réussite, l'élève décide de passer les deux concours.

Quelle probabilité $p$ a-t-il de réussir au moins un concours ?

> **Solution.**
La probabilité de réussir le concours $C_1$ est $\frac{1}{3}$ et même chose pour le concours $C_2$. On note :

$A$ l'événement « l'élève réussisse le concours $C_1$ » et $B$ l'événement « l'élève réussisse le concours $C_2$ ».

Puisque les deux concours sont indépendants alors $P(A \cap B) = P(A).P(B)$.

La probabilité de réussir au moins un concours est donc :

$$p = P(A \cup B) = P(A) + P(B) - P(A \cap B) = P(A) + P(B) - P(A).P(B) = \frac{2}{3} - \frac{1}{9} = \frac{5}{9}$$

Remarque : On peut aussi penser à l'événement contraire, c'est-à-dire « rater les deux concours ».

- Pour étudier l'indépendance de deux événements $A$ et $B$, on compare $P(A \cap B)$ et

$P(A) \times P(B)$, ou $P_A(B)$ et $P(B)$, ou $P_B(A)$ et $P(A)$. En cas d'égalité, les événements

$A$ et $B$ sont indépendants.

- Pour calculer des probabilités dans le cadre d'expériences répétées indépendantes, on utilise le

principe multiplicatif pour les probabilités, après s'être assuré de l'indépendance de ces expériences.

### D. Variables aléatoires

- Connaître la loi de probabilité d'une variable aléatoire discrète, c'est connaître les valeurs possibles prises par cette variable et les probabilités élémentaires $p_k = P(X = x_k)$.
- S'il manque une seule probabilité, par exemple $P(X = x_1)$. On utilise le système complet d'événements $(X = x_1), ..., (X = x_n)$. On a l'égalité $\sum_{k=1}^{n} P(X = x_k) = 1$ et alors :

$$P(X = x_1) = 1 - \sum_{k=2}^{n} P(X = x_k)$$

### E. Loi binomiale
Dans cet exercice, on étudie quelques situations probabilistes liées à un standard téléphonique d'un service après-vente. Le standard de ce service après-vente reçoit deux types d'appels :

Les appels concernant le petit électroménager et les appels concernant les appareils audio et vidéo.
Lors d'un appel, le problème est soit résolu directement par téléphone, soit il nécessite l'intervention d'un technicien. On considère les événements suivants :

$E$ : « Un appel concerne le petit électroménager »

$A$ : « Un appel concerne les appareils audio-vidéo »

$T$ : « Le problème posé se résout directement par téléphone »

De plus, des études ont permis d'établir les résultats suivants :

- $(H_1)$ Le standard reçoit 20% d'appels concernant le petit électroménager et 80% d'appels concernant les appareils audio et vidéo.
- $(H_2)$ Lorsqu'un appel concerne le petit électroménager, la probabilité pour que le problème soit résolu par téléphone est de 0,5.
- $(H_3)$ Lorsqu'un appel concerne un appareil audio-vidéo, la probabilité pour que le problème soit résolu par téléphone est de 0,375.

On supposera enfin les appels indépendants les uns des autres.

1) a) Traduire en terme de probabilité les données $(H_1), (H_2)$ et $(H_3)$.

b) Montrer que $P(T) = 0,4$.

c) On suppose qu'une personne appelant le standard a vu son problème résolu directement par téléphone. Calculer la probabilité pour que le problème posé concerne un petit électroménager.

2) Un standardiste reçoit 10 appels dans l'heure, on note $X$ la variable aléatoire représentant le nombre d'appels concernant le petit électroménager.

- a) Déterminer la loi de $X$ : on donnera les valeurs prises par $X$ ainsi que, pour chacune d'elles, la probabilité correspondante.
- b) Donner les valeurs de l'espérance mathématique et de la variance de $X$.

3) Pendant une période de 10 jours, un standardiste reçoit 600 appels. On note Y la variable aléatoire représentant le nombre d'appels résolus directement par téléphone.

a) Donner la loi de $Y$
b) Préciser l'espérance mathématique $ E(Y) $ et l'écart-type $ \sigma(Y) $.

> **Solution.**
1) a) L'hypothèse (H₁) se traduit par : P(E) = 0,2 et P(A) = 0,8.

L'hypothèse (H₂) se traduit par : P_E(T) = 0,5 ; L'hypothèse (H₃) se traduit par : P_A(T) = 0,375

b) Les événements $ E $ et $ A $ forment un système complet d'événements donc d'après la formule des probabilités totales: $ P(T) = P(E) \times P_E(T) + P(A) \times P_A(T) = 0,2 \times 0,5 + 0,8 \times 0,375 = 0,4 $.
c) Il s'agit de calculer la probabilité $ P_{T}(E) $. On a: $ P_{T}(E) = \frac{P(T \cap E)}{P(T)} = \frac{P(E) \times P_{E}(T)}{P(T)} = \frac{0,2 \times 0,5}{0,4} = \frac{1}{4} $.

2) a) La variable aléatoire X compte le nombre de réalisations de l'événement succès « l'appel concerne le petit électroménager » de probabilité 0,2 lors de 10 épreuves identiques et indépendantes. Donc la variable aléatoire X suit la loi binomiale de paramètres n = 10 et p = 0,2. Par suite :

$$X(\Omega) = \{0; 1; \dots; 10\} \text{ et pour tout } k \in X(\Omega) : P(X=k) = C_{10}^k (0,2)^k (0,8)^{10-k}.$$

b) L'espérance mathématique de X est : E(X) = np = 10 × 0,2 = 2.

la variance de $Y$ est : $V(Y)$ = np(1-p) = 2 × 0,8 = 1,6.

3) a) La variable aléatoire Y compte le nombre de réalisations de l'événement succès « Le problème posé se résout directement par téléphone » de probabilité 0,4 lors de 600 épreuves identiques et indépendantes.

Donc la variable aléatoire Y suit la loi binomiale de paramètres n = 600 et p = 0,4. Par suite :

$$Y(\Omega) = \{0; 1; \dots; 600\} \text{ et pour tout } k \in Y(\Omega) : P(Y=k) = C_{600}^k (0,4)^k (0,6)^{600-k}.$$

b) L'espérance mathématique de Y est : E(Y) = np = 600 × 0,4 = 240.

la variance de $Y$ est : $V(Y)$ = np(1-p) = 240 × 0,6 = 144. L'écart-type est : $\sigma(Y) = \sqrt{V(Y)}$ = 12.

• Pour reconnaître une loi binomiale, on repère des mots clés dans l'énoncé, par exemple :

$\langle X\rangle$ est la variable aléatoire qui compte le nombre de ...
On repete de manière identique et indépendante l'expérience...

• Si X suit une loi binomiale de paramètre p et n, alors :

$$E(X) = np \quad ; \quad V(X) = np(1-p) \quad ; \quad \sigma(X) = \sqrt{np(1-p)}$$

## Exercices

### Exercices d'application
#### EXPÉRIENCES ALÉATOIRES - ÉVÉNEMENTS
**Exercice 1.**
Soit $\Omega$ un univers et soient $A, B$ et $C$ trois événements de $\Omega$. Traduire en termes ensemblistes (en utilisant uniquement les symboles d'union, d'intersection et de passage au complémentaire, ainsi que $A, B$ et $C$) les événements suivants :

1) Seul $A$ se réalise.
2) $A$ et $B$ se réalisent, mais pas $C$.
3) Les trois événements se réalisent.
4) Au moins l'un des trois événements se réalise.
5) Au moins deux des trois événements se réalisent.
6) Deux événements au plus se produit.
7) Un seul événement se produit.
8) Deux événements seulement se produit.
9) Aucun ne se réalise.
10) Au plus l'un des trois se réalise.
11) Exactement deux des trois se réalisent.

#### CALCUL DES PROBABILITÉS
**Exercice 2.**
On lance trois dés $E, F$ et $H$; les faces de chacun d'eux sont numérotées de 1 à 6. On suppose que les faces ont la même probabilité d'apparition. Calculer les probabilités d'obtenir :

1) Le numéro 5 une seule fois exactement.
2) Au moins une fois le numéro 5.
3) Trois numéros identiques.
4) Au moins deux faces portant le même numéro.
5) Exactement deux faces portant le même numéro.
6) La somme des numéros est paire.
7) La somme des numéros est strictement supérieur à 26.

**Exercice 3.**
On lance une pièce équilibrée quatre fois de suite.

1) Décrire de façon ensembliste les événements suivants :

$A$ ：On obtient deux fois Pile et deux fois Facs
$B$ ：Les deux premiers lancers ont donné des résultats différents

2) Calculer les probabilités suivantes :

$P(A) \quad ; \quad P(B) \quad ; \quad P(A \cap B) \quad ; \quad P(A \cup B)$

**Exercice 4.**
On considère un dé cubique truqué de telle sorte que la probabilité d'apparition de numéro 6 est égale à 11 fois la probabilité d'apparition de chacune des cinq autres faces.

1) Calculer la probabilité d'apparition de chaque face.
2) On lance le dé une seule fois. Calculer la probabilité d'obtenir :

a) Un multiple de 3 ; b) Un numéro impair

**Exercice 5.**
1) Dans une urne sont placées 15 boules verts et 10 boules blanches. On tire successivement et sans remise 5 boules de l'urne.

Calculer les probabilités suivantes :

a) On obtient 5 boules vertes.
b) On obtient une première boule verte, les deux suivantes blanches et les deux dernières vertes.
c) On obtient au plus une boule blanche.
d) On obtient trois boules vertes et deux boules blanches.

2) Reprendre les questions a), b), c) et d) de 1) avec des tirages successifs avec remise.
3) Reprendre les questions a), c) et d) de 1) avec des tirages simultanés.

**Exercice 6.**
On jette une pièce de monnaie trois fois de suite.

1) Citer la liste de tous les résultats possibles en no- tant $P$ pour Pile et $F$ pour face. (Exemple: PPF)
2) Donner la probabilité de chacun des événements suivants:

A: « Le tirage ne comporte que des Piles»
B: « Le tirage comporte au moins une fois Face »

**Exercice 7.**
On lance une pièce équilibrée quatre fois de suite.

1) Décrire de façon ensembliste les événements suivants :

A:On obtient deux fois Pile et deux fois Face
B: « Les deux premiers lancers ont donné des résultats différents »

2) Calculer les probabilités suivantes :

$$P(A) ; P(B) ; P(A \cap B) ; P(A \cup B)$$

**Exercice 8.**
Un coffre contient 6 diamants, 8 émeraudes et 10 rubis.
On tire quatre pierres précieuses au hasard dans le coffre.

Calculer les probabilités des événements suivants :

A: « Les quatre pierres sont du même type »
B:On tire deux diamants
C:On tire autant de diamants que de rubis

**Exercice 9.**
Le bureau d'un organisme comprend :

3 secrétaires, 5 trésoriers, 2 présidents.

On constitue une commission de trois membres pris au hasard dans ce bureau.

1) Quelle est la probabilité que cette commission com- prenne un président, un trésorier et un secretaire?
2) Quelle est la probabilité que cette commission com- comprenne trois trésoriers?
3) Quelle est la probabilité que cette commission com- comprenne au moins une secretaire?

**Exercice 10.**
Soit $(\Omega; P)$ un espace probabilisé.

On considère deux événements $E$ et $F$ tels que :

$$P(E) = \frac{1}{2} ; P(F) = \frac{1}{4} ; P(E \cap F) = \frac{5}{36}$$

Calculer dans l'ordre que vous voulez :

$$P(\bar{E}) ; P(E \cup F) ; P(\bar{E} \cap \bar{F})$$

$$P(E \cap \bar{F}) ; P(E \cup \bar{F}) ; P(\bar{E} \cup \bar{F})$$

**Exercice 11.**
On considère un dé cubique truqué dont les faces sont numérotées de 1 à 6 telles que :

- Les faces portant les numéros pairs ont la même probabilité d'apparition.
- Les faces portant les numéros impairs ont la même probabilité d'apparition.
- La probabilité d'apparition d'un numéro pair est égale au double de celle d'un numéro impair.

1) Calculer la probabilité d'apparition d'un numéro impair et la probabilité d'apparition des faces du dé.
2) On lance le dé trois fois de suite.

Calculer la probabilité de chacun des événements :

A: « Aucune apparition d'un numéro impair »
B: « Obtenir trois numéros successifs dans n'importe quel ordre »

**Exercice 12.**
Dans une entreprise qui comporte 400 personnes,

300 sont assurées contre la maladie,

160 contre les accidents et 120 à la

fois contre la maladie et les accidents.

Si l'on choisit au hasard une personne

dans l'entreprise, qu'elle est la probabilité qu'elle soit assurée :

a) Contre la maladie, mais pas contre les accidents?
b) Contre la maladie ou les accidents?
c) Ni contre la maladie, ni contre les accidents?

**Exercice 13.**
Dans le parking d'un club privé sont parquées 50 voitures. Parmi celles-ci il y a 20 Jaguars, 35 décapotables,

dont 12 Jaguars décapotables.

On emprunte une voiture au hasard.

Calculer la probabilité d'avoir :

1) Une Jaguar non décapotable.
2) Une décapotable qui ne soit pas une Jaguar.
3) Une voiture qui ne soit ni une Jaguar, ni une décapotable.

**Exercice 14.**
Un sac contient 10 jetons blancs, 6 jetons rouges et 4 jetons noires.

1) On tire trois jetons successivement et avec remise. Quel est l'évènement le plus probable parmi les trois événements suivants ?

A: «Obtenir un tirage unicolore»
B: «Obtenir un tirage bicolore »
C: «Obtenir un tirage tricolore »

2) Même question si I'on tire simultanément trois jetons.
3) Même question si I'on tire successivement et sans remise.

**Exercice 15.**
Soit $n \in \mathbb{N}$. Une urne contient 30 boules dont $(n + 1)$ sont rouges, $(n + 2)$ sont vertes et le reste est composé de boules blanches. ( On suppose que $n < 13$ )

On tire au hasard, successivement et avec remise trois boules de l'urne.

Calculer la probabilité de chacun des événements suivants :

A: «Obtenir une boule rouge puis une boule verte et enfin une boule blanche dans cet ordre »
B: «Obtenir deux boules rouges et une boule verte »
C: «Obtenir des boules de couleurs deux à deux distinctes »

#### Probabilité conditionnelle
**Exercice 16.**
Une urne contient 8 boules :

4boulesrouges numérotees1;1;2;2.
4boulesvertes numérotees1;1;2;2.

On tire simultanément au hasard deux boules de l'urne. Calculer la probabilité de chacun des événements :

$R$ : « Obtenir deux boules rouges »

$R_2$ : « Obtenir deux boules rouges sachant que l'une d'elles porte le numéro 2 »

$V_1$ : « Obtenir deux boules vertes sachant que l'une d'elles est verte et porte le numéro 1 »

**Exercice 17.**
Un sac contient 32 pions :

16 pions rouges dont 6 d'entre eux portent la lettre F
16 pions noires dont 6 d'entre eux portent la lettre F.

On tire au hasard un pion du sac et on considère les événements suivants :

A: «Le pion tiré est noire »
B: «Le pion tiré est porte la dette F»

1) Calculer $P_{B}(A)$.
2) Calculer la probabilité de tirer un pion noir et portant la dette $F$.

**Exercice 18.**
On considère trois urnes :

- $U_{1}$ contient deux boules noires et trois boules rouges
- $U_{2}$ contient une boule noire et quatre boules rouges
- $U_{3}$ contient trois boules noires et quatre boules rouges.

On tire une boule dans $U_1$ et une boule dans $U_2$ et on les met dans $U_3$. On tire une boule de $U_3$, elle est noire. Quelle est la probabilité que la boule tirée de $U_1$ soit rouge ?

**Exercice 19.**
1) Soient A et B deux évènements tels que :

$$P(A) = 0,2 \ ; \ P(B) = 0,3 \ ; \ P(A \cup B) = 0,5$$

Calculer $P_B(A)$ et $P_A(B)$

2) Soient E et F deux évènements tels que :

$$P_F(E) = \frac{1}{2} \ ; \ P_E(F) = \frac{2}{3} \ ; \ P(E \cup F) = 0,2$$

Calculer $P(E)$ et $P(F)$

**Exercice 20.**
Soient A et B deux évènements tels que :

$$P(A) = \frac{1}{2} \ ; \ P(B) = \frac{2}{5} \ ; \ P_A(B) = \frac{3}{5}$$

Calculer : $P(A \cap B) \ ; \ P_B(A) \ ; \ P_B(\overline{A})$

**Exercice 21.**
On lance deux dés bien équilibrés. On considère les évènements suivants :

A : « La face numéro 2 apparaît au moins une fois »

B : « La somme des points est égale à 6 »

Calculer les probabilités suivantes :

$$P(A) \ ; \ P(B) \ ; \ P(A \cap B)$$

$$P_B(A) \ ; \ P_A(B) \ ; \ P_A(B)$$

**Exercice 22.**
Un laboratoire utilise un test biologique pour le dépistage d'une maladie rare (un pour mille de la population). Ce test biologique possède les caractéristiques suivantes :

99,9% des patients sains
donnent un résultat négatif.
- $90\%$ des patients réellement

malades donnent un résultat positif.

1) Un patient subit ce test, le résultat est positif.

a) Calculer la probabilité pour que ce patient soit réellement malade.
b) Calculer la probabilité que ce patient soit sain.

2) Calculer la probabilité pour que le résultat soit positif.

**Exercice 23.**
Adam, Rachid et Manal vont à la chasse.

Leurs coefficients de réussite

respectifs sont $\frac{4}{5}$, $\frac{1}{2}$ et $\frac{1}{10}$

(probabilité pour qu'une balle tirée atteigne son but).

On supposera que leurs résultats ne sont bien sur incompatibles, mais qu'ils sont indépendants.

Ils tirent simultanément sur le même lapin.

1) Montrer que le lapin a quand même sa chance en évaluant la probabilité qu'il ne soit pas touché. En déduire la probabilité qu'il soit touché.
2) Quelle est la probabilité qu'Adam soit le seul à toucher le lapin?
3) On suppose dans cette question que le lapin est touché.

a) Quelle est la probabilité qu'Adam ait participé au crime?
b) Quelle est la probabilité qu'Adam soit le seul responsable?
c) Àprous avoir autopsié le lapin (ou tout simplement après l'avoir mangé), on constate qu'il ne contenait qu'une seule balle. Quelle est la probabilité que ce soit celle d'Adam?

**Exercice 24.**
On considère une urne contenant 4 boules blanches et 3 boules noires. On tire une à une et sans remise 3 boules de l'urne.

Quelle est la probabilité pour que la première boule tirée soit noire, la seconde blanche et la troisième noire ?

**Exercice 25.**
Trois pièces non truquées (10 dirhams, 5 dirhams, 1 dirham) sont jetées simultanément.

Déterminer la probabilité que toutes les pièces donnent face sachant que :

1) La pièce de 5 dirhams a donné face.
2) Au moins l'une des pièces a donné face.

**Exercice 26.**
Une usine fabrique des pièces dont 1,8% sont défectueuses. Le contrôle des pièces s'effectue selon les probabilités conditionnelles suivantes :

- Sachant qu'une pièce est bonne, elle est acceptée avec une probabilité de 0,97.
- Sachant qu'une pièce est mauvaise, elle est refusée avec une probabilité de 0,99.

1) Quelle est la probabilité pour qu'une pièce soit défectueuse ?
2) a) Montrer que la probabilité pour qu'une pièce soit défectueuse et acceptée est 0,00018.
b) Montrer que la probabilité pour qu'une pièce soit bonne et refusée est 0,02946.
c) Calculer la probabilité pour qu'il y ait une erreur dans le contrôle.
3) Si on effectue cinq contrôles de suite, quelle est la probabilité pour qu'il y ait exactement deux erreurs de contrôle ?

**Exercice 27.**
Le gérant d'un magasin de matériel informatique a acheté un stock de boîtes de disquette. 5% des boîtes sont abîmées. Le gérant estime que :

- 60% des boîtes abîmées contiennent au moins une disquette défectueuse.
- 98% des boîtes en bon état ne contiennent aucune disquette défectueuse.
- Les états des diverses boîtes sont indépendants les uns des autres.

Un client achète une des boîtes du lot.

On désigne par A et D les événements suivants :

A : « La boîte achetée est abîmée »

B : « La boîte achetée contienne au moins une disquette défectueuse »

1) a) Donner les probabilités :

$$P(A) ; P(\overline{A}) ; P_A(D) ; P_A(\overline{D}) ; P_A(\overline{D})$$

b) Calculer la probabilité de l'événement D.
2) Le client constate qu'une des disquettes est défectueuse. Quelle est la probabilité qu'il ait achetée une boîte abîmée ?

**Exercice 28.**
Une enquête est faite auprès des 1000 élèves d'un lycée sans internat, afin de savoir s'ils disposent d'un ordinateur chez eux. Dans ce lycée, 55% des élèves sont demi-pensionnaires.

L'enquête révèle, d'une part que 40% des élèves disposent d'au moins un ordinateur chez eux, et, d'autre part, que parmi ces lycées disposant d'au moins un ordinateur chez eux, 216 ne sont pas demi-pensionnaires.

1) Compléter le tableau des effectifs suivant :

|   | demi-pensionnaires | Non demi-pensionnaires | Total  |
| --- | --- | --- | --- |
|  Lycéens disposant d'au moins un ordinateur chez eux |  |  |   |
|  Lycéens ne disposant pas d'ordinateur chez eux |  |  |   |
|  Total |  |  | 1000  |

2) On tire au hasard le nom d'un élève du lycée. Tous les élèves ont la même probabilité d'être choisis. On considère les événements suivants :

D : « L'élève est demi-pensionnaire »

O : « L'élève dispose d'au moins un ordinateur chez lui »

a) En s'inspirant sur les données du tableau, déterminer les probabilités :

$$P(D) ; P(O) ; P_O(D) ; P_D(O)$$

b) En déduire les probabilités :

$$P(D \cap O) \quad \text{et} \quad P(D \cup O)$$

**Exercice 29.**
Dans une usine, on utilise conjointement deux machines $M_1$ et $M_2$ pour fabriquer des pièces cylindriques en série. Pour une période donnée, leurs probabilités de tomber en panne sont respectivement 0,01 et 0,008. De plus, la probabilité de l'évènement « la machine $M_1$ est en panne sachant que $M_2$ est en panne » vaut 0, 4.
1) Quelle est la probabilité d'avoir les deux machines en panne au même moment ?
2) Quelle est la probabilité d'avoir au moins une machine qui fonctionne ?

**Exercice 30.**
Une banque propose deux types de carte bancaire à ses clients : « VISA » et « MasterCard »
Parmi l'ensemble de ses clients, 50% possèdent une carte VISA, 40% possèdent une MasterCard et 25% possèdent les deux types de carte.

Soit A l'évènement :
« le client possède une carte VISA »

1) Expliciter les événements suivants à l'aide du langage ensembliste et calculer la probabilité correspondante, en justifiant les calculs :

$E$ : « Un client possède au moins un des deux type de carte »

$F$ : « Un client ne possède aucun des deux type de carte »

$G$ : « Un client ne possède qu'un seul type de carte »

2) On considère un client qui possède une carte VISA. Quelle est la probabilité qu'il possède aussi une carte MasterCard ?

3) On considère un client qui possède au moins une

carte. Quelle est la probabilité que ce soit une carte VISA ?

#### INDÉPENDANCE DES ÉVÉNEMENTS
**Exercice 31.**
Soit A et B deux événements tels que :

$$P(A) = 0,8 \quad \text{et} \quad P(B) = 0,4$$

1) Peut-on avoir $P(A\cap B) = 0,1$ ?Justifier.
2) Si $P(A\cap B) = 0,2$ , que peut-on en deduire?
3) Si $P(A\cap B) = 0,4$ , que peut-on en deduire?
4) Déterminer $P(A\cap B)$ sachant que les événements $A$ et $B$ sont indépendants.

**Exercice 32.**
On lance un dé cubique dont les faces sont numérotées de 1 à 6 et on considère les événements :

$A$ : « Le numéro obtenu est strictement supérieur à 4 »

$B$ : « Le numéro obtenu est pair »

1) Calculer: $P(A)$; $P(B)$; $P(A \cap B)$
2) Les événements $A$ et $B$ sont-ils indépendants?

**Exercice 33.**
Soit A et B deux événements indépendants tels que :

$$P(A \cap B) = \frac{1}{10} \quad \text{et} \quad P(A \cup B) = \frac{3}{5}$$

Déterminer $P(A)$ et $P(B)$.

**Exercice 34.**
On considère les deux événements suivants :

A: Une famille a des enfants des deux sexes
$B$ : « Une famille a au plus un garçon »

On s'intéresse dans cet exercice aux familles qui ont trois enfants.

1) Calculer la probabilité qu'une famille a deux filles.
2) Calculer la probabilité qu'une famille a au moins un garçon.
3) Montrer que les événements $ A $ et $ B $ sont indépendants.

**Exercice 35.**
Un atelier d'assemblage de matériel informatique s'approvisionne en pièces d'un certain modèle.

L'atelier reçoit ce modèle de pièce en grande quantité. Chaque pièce peut présenter deux défauts que l'on appelle défaut a et défaut b.

On prélève une pièce au hasard dans une importante livraison. On considère les événements :

A : « l'appareil présente le défaut a »

B : « l'appareil présente le défaut b »

On admet que les probabilités des événements A et B sont : P(A) = 0,02 et P(B) = 0,01

On suppose que les deux événements A et B sont indépendants.

1) Calculer la probabilité des événements suivants :

E : « La pièce présente le défaut a et le défaut b »

F : « La pièce présente au moins un des défauts »

G : « La pièce ne présente aucun défaut »

2) Calculer la probabilité que la pièce présente les deux défauts sachant qu'elle est défectueuse.

**Exercice 36.**
La probabilité qu'une personne donnée contracte la grippe en un an est 0,4. La probabilité pour que cette personne soit atteinte d'une maladie M, autre que la grippe, pendant la même période est 0,2. On suppose que contracter la grippe et la maladie M sont deux événements indépendants.

Quelle est la probabilité pour que cette personne contracte au moins l'une de ces deux maladies en un an ?

**Exercice 37.**
On considère deux urnes U₁ et U₂ contenant chacune n boules rouges et 2n boules vertes.

1) On tire une boule dans chaque urne. Quelle est la probabilité d'obtenir deux vertes.
2) On tire une boule dans, on la met dans $U_{2}$ puis on tire une boule dans $U_{2}$.

#### VARIABLES ALÉATOIRES RÉELLES
**Exercice 38.**
Soit X la variable aléatoire définie par le tableau suivant :

|  xᵢ | 1 | 2 | 3 | 4 | 5  |
| --- | --- | --- | --- | --- | --- |
|  pᵢ | 0,25 | p₂ | 0,18 | p₄ | 0,37  |

1) Déterminer la valeur de $ p_2 $ et $ p_4 $, sachant que les événements $ [X = 2] $ et $ [X = 4] $ sont équiprobables.
2) Calculer les probabilités suivantes:

$$P(X \ge 2) \ ; \ P(1 \le X \le 3) \ ; \ P_{(X \ge 2)}(X \le 4)$$

3) Calculer l'espérance $ E(X) $ et l'écart-type $ \sigma(X) $.
4) Déterminer la fonction de répartition $ F_{\gamma} $ de $ X $ puis tracer sa courbe.

**Exercice 39.**
Un marchand de glaces propose dix parfums au choix pour des glaces en cornet.

Trois élèves choisissent, au hasard et indépendamment l'un de l'autre, un des parfums proposés.

1) Calculer la probabilité de l'événement :

A : « Les trois élèves choisissent des parfums deux à deux distincts »

2) Soit X la variable aléatoire égale au nombre de parfums choisis par les trois élèves.

a) Déterminer la loi de probabilité de $ X $.
b) Calculer l'espérance mathématique $ E(X) $ puis interpréter le résultat obtenu.

**Exercice 40.**
Un chef de service commercial estime avoir une probabilité 0,6 de faire gagner 100000 Dirhams à son entreprise. Si cette opération est manquée, la perte est de 200000 Dirhams.

Quelle est l'espérance mathématique du gain ?

**Exercice 41.**
On considère le jeu suivant : le joueur lance d'abord un dé non truqué.

S'il obtient 1, 2 ou 3, il gagne l'équivalent en dirhams (c'est-à-dire 1 Dh s'il obtient 1 par exemple). Sinon, il perd 2 Dh. On note X la variable aléatoire correspondant au gain du joueur (négatif en cas de perte).

1) Donner la loi de probabilité de $ X $ et sa fonction de répartition $ F_{X} $.
2) Calculer l'espérance mathématique $ E(X) $ et la variance $ V(X) $.
3) On modifie le jeu de la façon suivante : les gains restent les mêmes pour les résultats 1, 2 ou 3, mais si le joueur obtient autre chose, il reliance le dé. S'il obtient 3 ou moins, il gagne $3Dh$, sinon il perd $5Dhs$.

a) Décrire formellement l'univers du nouveau jeu.
b) On note $ Y $ la variable aléatoire qui désigne le nouveau gain du joueur.

Donner la loi de Y et calculer son espérance.

4) Quelle variante du jeu est la plus avantageuse pour le joueur ? Justifier.

#### LA LOI BINOMIALE
**Exercice 42.**
Soit X une variable aléatoire suivant la loi binomiale de paramètres n = 20 et p = 0,4.

1) a) Déterminer X(Ω) et l'expression de P(X = k) pour tout k ∈ X(Ω)

b) En déduire les probabilités suivantes :

P(X = 6) ; P(X ≤ 3) ; P(X ≥ 2)

P(X = 8,5) ; P(3 ≤ X ≤ 6) ; P(X ≥ 3)(X ≤ 6)

2) Déterminer les valeurs de l'entier naturel $ n_0 $ pour lesquelles: $ P(X \geq n_0) \leq 0.63 $
3) Déterminer l'espérance et la variance de $ X $.

**Exercice 43.**
La probabilité que Younes d'atteindre une cible est p (avec p ∈ ]0;1[). Il tire 5 fois de suite.

1) On considère les événements suivants :

A:La cible est atteinte dans les deux premiers essais
$B$ : La cible est atteinte dans le deuxième et le troisième essais
C:La cible est atteinte dans le troisieme et le quatrieme essais

a) Les événements $ A $ et $ B $ sont-ils indépendants?
b) Les événements $ A $ et $ C $ sont-ils indépendants?

2) Soit X la variable aléatoire égale au nombre de fois que la cible est atteinte.

a) Préciser la loi de $X$. On donnera $X(\Omega)$ et l'expression de $P(X = k)$ pour tout $k \in X(\Omega)$.
b) Calculer la probabilité d'atteindre la cible au moins deux fois.
c) Donner la valeur de l'espérance $ E(X) $ et la variance $ V(X) $.
d) Définir la fonction de répartition $ F $ de $ X $ puis tracer sa courbe dans un repère orthogonal.

**Exercice 44.**
Considérerons l'expérience aléatoire qui consiste à lancer un dé non pipé, l'issue de l'expérience étant l'apparition ou non du chiffre 6. L'expérience est répétée 100 fois.

1) Préciser la loi de probabilité de la variable aléatoire $ X $ égale au nombre de fois où le chiffre 6 est apparu au cours des 100 lancers.
2) Calculer l'espérance et l'écart-type de $ X $.

**Exercice 45.**
Soit X une variable aléatoire binomiale de paramètres n et p. Montrer que pour tout k ∈ {0;1;...;n-1} on a :

P(X = k + 1) = (n - k) / (1 + k)(1 - p) P(X = k)

### Exercices de perfectionnement
**Exercice 46.**
On choisit une carte au hasard dans un jeu de 32 cartes. On définit les événements suivants :

A: La carte choise est un pique
$B$ : La carte choise est rouge (coeur ou carreau)
C: La carte choise est une figure (valet ou dame ou roi)

2) Déterminer les probabilités des événements suivants :

$$A ; B ; C ; A \cap B ; B \cap C ; A \cup B ; A \cup C$$

3) Déterminer la probabilité de l'événement suivant :
$$D : \text{« La carte choisie n'est ni un pique ni une figure »}$$

**Exercice 47.**
On lance un dé quatre fois de suite. Calculer les probabilités des événements suivants :

A: On obtient quatre fois le même chiffre
$B$ : On obtient quatre chiffres différents
$C$ : On obtient quatre chiffres qui se suivent en croissant ou en décroissant

**Exercice 48.**
Soit $$\Omega$$ un espace muni d'une probabilité $$P$$.

On considère trois événements $$A, B$$ et $$C$$ tels que :

$$P(A) = P(B) = \frac{2}{3} ; P(A \cap C) = \frac{1}{4} ; P(B \cap C) = \frac{1}{3}$$

$$P(C) = P(A \cap B) = \frac{1}{2} ; P(A \cap B \cap C) = \frac{1}{6}$$

Déterminer la probabilité des événements suivants :

1) $C$ se réalise sans que $B$ se réalise.
2) $A$ et $B$ se réalisent sans que $C$ se réalise.
3) Deux au moins des événements $A, B$ et $C$ se réalisent.
4) Aucun des événements $A, B$ et $C$ ne se réalise.

**Exercice 49.**
Soit $$A$$ et $$B$$ deux événements d'un espace probabilisé $$(\Omega; P)$$ tels que :

$$P(A) = \frac{4}{5} ; P_A(B) = \frac{7}{10} ; P_A(B) = \frac{1}{2}$$

1) a) Calculer $P(A\cap B)$ et $P(\overline{A}\cap B)$
b) En déduire $P(B)$.
2) a) Calculer $P(A\cap \overline{B})$ et $P(\overline{A}\cap \overline{B})$
b) Calculer $P(\overline{B})$ de deux facons différentes.
3) Calculer $P_B(A)$.

**Exercice 50.**
Soit $$E_1, E_2$$ et $$E_3$$ trois événements quelconques d'un ensemble fondamental $$\Omega$$.

1) Traduire en termes ensemblistes (en utilisant uniquement les symboles d'union, d'intersection et de passage au complémentaire, ainsi que $$E_1, E_2$$ et $$E_3$$) les événements suivants :

$$H : \text{« Un et un seul des trois événements se produit »}$$

$$K : \text{« Deux et deux seulement des trois événements se produisent »}$$

$$L : \text{« Les trois événements se produisent simultanément »}$$

2) Calculer les probabilités des événements $$H, K$$ et $$L$$ sachant que : $$P(E_1 \cup E_2 \cup E_3) = 0,8$$

$$P(E_2 \cap E_3) = 0,2 ; P(E_1 \cap E_2) = 0,4$$

$$P(E_1 \cap E_3) = 0,3 ; P(E_1 \cap E_2 \cap E_3) = 0,1$$

**Exercice 51.**
Soit $$A$$ et $$B$$ deux événements d'un espace probabilisé $$(\Omega; P)$$. Montrer que $$A$$ et $$B$$ sont indépendants si, et seulement si :

$$P(A \cap B) \times P(\overline{A} \cap \overline{B}) = P(\overline{A} \cap B) \times P(A \cap \overline{B})$$

**Exercice 52.**
On jette une pièce de monnaie en l'air cinq fois de suite et l'on note chaque fois quelle est la face apparente après sa chute.

Quelle est la probabilité d'obtenir ainsi exactement deux fois « Pile » ?

**Exercice 53.**
Une compagnie aérienne étudie la réservation sur l'un de ses vols. Une place donnée est libre le jour d'ouverture de la réservation de la manière suivante :

Si la place est réservé le jour $k$, elle le sera encore le

le jour $k + 1$ avec la probabilité $\frac{9}{10}$.

Si la place est libre le jour $k$, elle sera réservée le jour $k + 1$ avec la

probabilité $\frac{4}{10}$.

Pour $k \in \mathbb{N}$, on note $r_k$ la probabilité de que la place soit réservée le jour $k$.

On pose par convention $r_0 = 0$.

1) Exprimer $ r_{k+1} $ en fonction de $ r_k $.
2) En déduire l'expression explicite de $ r_k $ en fonction de $ k $ et calculer $ \lim_{n \to \infty} r_n = r $.

**Exercice 54.**
Des enfants s'entraînent à réussir des paniers de basket. Pour chacun d'eux, indépendamment les uns des autres et des essais successifs, la probabilité de réussite d'un panier est $p$ ($p \in ]0,1[$).

Hamza est l'un de ces enfants ; soit $N$ le nombre d'essais que va faire Hamza.

On considère la variable aléatoire $X$ qui égale au nombre des paniers réussis par Hamza parmi les $N$ essais.

1) Montrer que $X$ suit une loi binomiale dont on déterminera les paramètres.
2) Quelle est la probabilité que Hamza ne réussisse

aucun panier ?

3) Soit $\alpha \in ]0,1[$.

Montrer qu'une condition nécessaire et suffisante pour que la probabilité qu'il réussisse au moins un panier soit supérieure ou égale à $1 - \alpha$, est :

$$N \geq \frac{\ln \alpha}{\ln(1-p)}$$

**Exercice 55.**
Une urne contient cinq boules noires et cinq boules blanches indiscernables au toucher.

On tire successivement et avec remise $n$ de ces boules dans l'urne, $n$ étant un entier naturel tel que $n \geq 2$.

On considère les deux évènements suivants :

A: On obtient des boules des deux couleurs
B: On obtient au plus une boule blanche

1) Calculer $P(A)$ et $P(B)$ en fonction de $n$.
2) Montrer que les événements $ A $ et $ B $ sont indépendants si et seulement si: $ 2^{n-1} = n + 1 $

**Exercice 56.**
Un gardien d'un phare doit ouvrir une porte avec un trousseau de $n$ clefs dont une et une seule convient. Il essaie les clefs au hasard les unes après les autres. Calculer, pour tout $k \in \{1; 2; \dots; n\}$, la probabilité que la porte s'ouvre à la k-ième tentative (et pas avant).

**Exercice 57.**
On considère le circuit électrique ci-dessous :

Les probabilités pour que les interrupteurs $A, B, C, D, E$ et $F$ soient ouverts sont respectivement $\frac{3}{10}, \frac{1}{2}, \frac{1}{10}, \frac{4}{5}, \frac{2}{5}$ et $\frac{1}{10}$.

Quelle est la probabilité pour que le courant passe ? (On suppose les évènements indépendants)

**Exercice 58.**
On dispose de n boîtes pouvant contenir de 0 à n boules numérotées de 1 à n. On place les n boules au hasard dans les n boîtes.

1) On désigne par $p_n$ la probabilité que chaque boîte contienne exactement une boule.

Montrer que : $p_n = \frac{n!}{n^n}$

2) a) Justifier que : $\frac{p_n}{p_{n+1}} = \left(1 + \frac{1}{n}\right)^n$

b) En utilisant la formule du binôme, montrer que pour tout $x \in \mathbb{R}^+$ : $(1+x)^n \ge 1+nx$

c) En déduire de ce qui précède que : $\frac{p_n}{p_{n+1}} \ge 2$

puis que : $p_n \le \frac{1}{2^{n-1}}$

d) Déterminer $\lim_{n \to +\infty} p_n$.

**Exercice 59.**
On considère deux pièces de monnaie truquées $M_1$ et $M_2$. Lorsqu'on lance la pièce $M_1$, la probabilité d'avoir face est égale à $\frac{1}{3}$ et lorsqu'on lance $M_2$, la probabilité d'avoir face est égale à $\frac{2}{9}$.

On effectue une succession de parties de la façon suivante :

- À la premier partie, on prend une des deux pièces au hasard et on lance cette pièce ; si le résultat est face, on joue la deuxième partie avec $M_1$, sinon on joue avec $M_2$.

- Pour tout entier $n \in \mathbb{N}^*$, on joue la $(n+1)^{\text{éliminal}}$ partie avec $M_1$ si on a obtenu face à la $n^{\text{éliminal}}$ partie ; on joue la $(n+1)^{\text{éliminal}}$ partie avec $M_2$ si on a obtenu pile à la $n^{\text{éliminal}}$ partie.

On note $p_n$ la probabilité d'avoir face à la $n^{\text{éliminal}}$ partie.

1) En utilisant la formule des probabilités totales a) Calculer les valeurs de $p_1$ et $p_2$.

b) Etablir que pour tout $n \in \mathbb{N}^*$ : $p_{n+1} = \frac{1}{9} p_n$.

2) a) Donner l'expression de $p_n$ en fonction de $n$. b) Calculer $\lim_{n \to +\infty} p_n$.

**Exercice 60.**
Un mobile se déplace aléatoirement dans l'ensemble des sommets d'un triangle $ABC$ de la façon suivante si, à l'instant $n$, il est sur l'un quelconque des trous sommets, alors à l'instant $(n+1)$, soit il y reste avec la probabilité de $\frac{2}{3}$, soit il se déplace sur l'un des deux autres sommets, et ceci avec la même probabilité par chacun de ces deux sommets. Initialement (c'est-à-dire à l'instant 0), le mobile se trouve en $A$.

On définit, pour tout $n \in \mathbb{N}$, les événements $A_n$ (resp. $B_n, C_n$) :

Le mobile se trouve en $A$ à l'instant $n$ (resp. en $B$, est) et les probabilités :

$$a_n = P(A_n) \quad ; \quad b_n = P(B_n) \quad ; \quad c_n = P(C_n)$$

1) Pour tout $n \in \mathbb{N}$, calculer $a_n + b_n + c_n$.

2) Exprimer, pour tout $n \in \mathbb{N}$, $a_{n+1}, b_{n+1}, c_{n+1}$ en fonction de $a_n, b_n, c_n$.

3) En déduire que pour tout $n \in \mathbb{N}$ :

$$a_{n+1} - b_{n+1} = \frac{1}{2}(a_n - b_n) \text{ et } a_{n+1} - c_{n+1} = \frac{1}{2}(a_n - c_n)$$

4) En déduire une expression de $a_n, b_n, c_n$ en fonction de $n$.

**Exercice 61.**
Un restaurant dispose de 80 places. La pratique montre que 20% des clients ayant réservé le soir ne viennent finalement pas. Ce soir, le restaurant enregistre 24 observations. Soit $X$ la variable aléatoire égale au nombre

de clients ayant réservé qui viennent.

1) Déterminer la loi de la variable aléatoire $ X $.
2) Calculer l'espérance $ E(X) $ et la variance $ V(X) $.

**Exercice 62.**
On considère les matrices :

$$A = \begin{pmatrix} \frac{1}{2} & \frac{1}{2} \\ 1 & 0 \end{pmatrix} ; P = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} ; D = \begin{pmatrix} 1 & 0 \\ 0 & -\frac{1}{2} \end{pmatrix}$$

1) a) Montrer que $P$ est inversible et calculer $P^{-1}$.
b) Verifier que $P^{-1}AP = D$
2) a) Exprimer $A$ en fonction de $D, P$ et $P^{-1}$.
b) Montrer que: $(\forall n\in \mathbb{N})A^n = PD^n P^{-1}$
c) Calculer $D^n$ pour tout entier naturel $n$.
d) En déduire que pour tout $ n \in \mathbb{N} $:

$$A^n = \frac{1}{3} \begin{pmatrix} 2 + \left(-\frac{1}{2}\right)^n & 1 - \left(-\frac{1}{2}\right)^n \\ 2 + \left(-\frac{1}{2}\right)^{n-1} & 1 - \left(-\frac{1}{2}\right)^{n-1} \end{pmatrix}$$

Une mouche se déplace aléatoirement dans un appartement constituée de 3 pièces contiguës A, B et C. À l'instant initial 0, la mouche se trouve dans la pièce B. On suppose que les déplacements qui suivent se font selon le protocole suivant :

- Si à l'instant $ n $ donné la mouche est dans la piece $ A $ ou dans la piece $ C $ alors elle revient dans la piece $ B $ à l'instant $ n + 1 $;
- Si à l'instant $ n $ donné la mouche est dans la piece $ B $ alors elle y reste à l'instant $ n + 1 $ avec une probabilité $ \frac{1}{2} $, sinon elle va de façon equiprobable dans $ A $ ou dans $ C $.

Pour tout entier naturel n, on définit l'évènement :

$$A_n$$ : « La mouche est dans la pièce A à l'instant n »

On définit de même les évènements $$B_n$$ et $$C_n$$. Enfin,

on note $$a_n, b_n$$ et $$c_n$$ les probabilités respectives de ces évènements.

3) Montrer en utilisant la formule des probabilités totales que pour tout $$n \in \mathbb{N}$$ :

$$a_{n+1} = \frac{1}{4}b_n ; b_{n+1} = a_n + \frac{1}{2}b_n + c_n ; c_{n+1} = \frac{1}{4}b_n$$

4) Montrer que pour tout entier naturel n on a :

$$b_{n+2} = \frac{1}{2}b_{n+1} + \frac{1}{2}b_n$$

On considère, pour tout $$n \in \mathbb{N}$$, la matrice colonne :

$$U_n = \begin{pmatrix} b_{n+1} \\ b_n \end{pmatrix}$$

5) a) Justifier que $$U_0 = \begin{pmatrix} \frac{1}{2} \\ 1 \end{pmatrix}$$.

b) Montrer que: $(\forall n\in \mathbb{N})U_{n + 1} = AU_n$
c) Montrer par récurrence que:

$$(\forall n \in \mathbb{N}) U_n = A^n U_0$$

d) Déduire de la question 2.d) que pour tout $$n \in \mathbb{N}$$,

on a : $$b_n = \frac{1}{3} \left( 2 + \left(-\frac{1}{2}\right)^n \right)$$

e) En déduire, pour tout $$n \in \mathbb{N}$$, des expressions de $$a_n$$ et $$c_n$$ e fonction de n.

**Exercice 63.**
Une entreprise fabrique en série des balles de ping-pong à l'aide de deux machines A et B.

La machine A produit un tiers des éléments, les autres étant produits par la machine B.

Certaines balles fabriquées présentent un défaut. C'est le cas pour 12% des balles fabriquées par la machine A et pour 9% de celles fabriquées par la machine B. À la sortie des machines les balles arrivent dans le désordre sur un tapis roulant. Ce qui fait que si l'on prend une balle au hasard à la sortie du processus de la fabrication, la probabilité qu'elle provienne de A est $$\frac{1}{3}$$ et celle qu'elle provienne de B est $$\frac{2}{3}$$.

1) a) On prélève sur le tapis roulant une balle au hasard.

On définit les événements :

A : « La balle provient de la machine A »

B : « La balle provient de la machine B »

D : « La balle prélève présente un défaut »

Montrer que : $$P(D) = \frac{1}{10}$$

b) On constate que la balle prélevée présente un défaut. Quelle est la probabilité qu'elle ait été fabriquée par la machine A.

2) On se donne un entier naturel n non nul et on suppose maintenant que l'on prélève n balles au hasard à la sortie du tapis roulant. Les prélèvements successifs sont supposés indépendants les uns des autres. Soit X la variable aléatoires égale au nombre de balles défectueuses prélevées.

a) Justifier que X suit une loi binomiale et préciser ses paramètres. Donner les valeurs prises par X et pour chacune de ces valeurs k la valeur de $$P(X = k)$$.

b) Déterminer, en fonction de n, les valeurs de l'espérance $$E(X)$$ et de la variance $$V(X)$$.

**Exercice 64.**
**Partie A :**
Une usine de microprocesseurs informatiques fabrique 1000 microprocesseurs par jour.

La probabilité qu'un microprocesseur soit défectueux est $$p = \frac{1}{200}$$. Soit X le nombre de microprocesseurs défectueux dans une journée de production.

1) a) Déterminer la loi de probabilité de $ X $.
b) Calculer son espérance et sa variance.
2) Calculer la probabilité qu'il y ait au plus un microprocesseur défectueux dans la production d'une journée.

**Partie B :**
Les microprocesseurs installés dans les ordinateurs

d'un constructeur informatique proviennent de 3 usines $$U_1, U_2$$ et $$U_3$$ qui fournissent respectivement 50%, 30% et 20% des microprocesseurs.

À la livraison, chaque microprocesseur est vérifié en 1 a été établi que 4% des microprocesseurs provenant de $$U_1$$ étaient défectueux, ainsi que 5% de ceux de $$U_2$$ et 10% de ceux de $$U_3$$.

1) Retranscrire clairement l'énoncé à l'aide d'événement et de probabilités.
2) Déterminer la probabilité qu'un microprocesseur soit défectueux.
3) Calculer la probabilité qu'un microprocesseur défectueux provienne de l'usine $ U_{1} $.

**Exercice 65.**
L'étoile Sirius est la plus brillante du ciel de l'hémisphère Nord.

La probabilité annuelle d'apparition

d'au moins une comète plus brillante que Sirius est $$\frac{1}{43} (\approx 0,0232)$$. Calculer la probabilité qu'il apparaisse au moins une comète plus brillante que Sirius pendant un siècle d'observation.

**Exercice 66.**
A et B sont deux avions ayant respectivement 4 et 2 moteurs. Les moteurs sont supposés indépendants les uns des autres, et ils ont une probabilité p de tomber en panne. Chaque avion arrive à destination si moins de la moitié de ses moteurs tombe en panne.

Quel avion choisissez-vous ?

(on discutera en fonction de p).

**Exercice 67.**
On lance deux fois de suite un dé cubique non pipé. Sachant que la somme des deux nombres est 6, quelle est la probabilité que ces deux nombres soient égaux ?

### Problèmes de synthèse
#### Se préparer aux devoirs
**Devoir I.**
Les parties A), B) et C) sont indépendantes.

**Partie A :**
Dans une assemblée de 250 personnes, on remarque que les hommes portant la cravate ou ayant les yeux bleus. Il y a 120 hommes qui portent la cravate, 85 hommes qui ont les yeux bleus. Il y a 120 hommes qui portent la cravate, 85 hommes qui ont les yeux bleus, dont 50 portent la cravate.

On discute avec une personne choisie au hasard dans cette assemblée.

1) Quelle est la probabilité que ce soit un homme portant la cravate?
2) Quelle est la probabilité que ce soit un homme aux yeux bleus et portant la cravate?
3) Quelle est la probabilité que ce soit un homme aux yeux bleus ou portant la cravate?
4) Quelle est la probabilité de discuter avec une personne qui n'est ni un homme aux yeux bleus, ni un homme portant la cravate?

**Partie B :**
Une usine fabrique des pièces dont 1,8% sont défectueuses. Le contrôle des pièces s'effectue selon les probabilités conditionnelles suivantes :

- Sachant qu'une piece est bonne, elle est acceptée avec une probabilité de 0,97.
- Sachant qu'une piece est mauvaise, elle est refusée avec une probabilité de 0,99.

1) Quelle est la probabilité pour qu'une piece soit défectueuse?
2) a) Montrer que la probabilité pour qu'une piece soit défectueuse et acceptée est 0,00018.
b) Montrer que la probabilité pour qu'une piece

soit bonne et refusée est 0,02946.

c) Calculer la probabilité pour qu'il y ait une erreur dans le contrôle.

3) Si on effectue cinq contrôles de suite, quelle est la probabilité pour qu'il y ait exactement deux erreurs de contrôle ?

**Partie C :**
Mouna est élève en terminale. Chaque matin, elle se lève en retard avec la probabilité $$\frac{1}{3}$$. Lorsqu'elle se lève en retard elle est obligée de prendre le bus pour se rendre au lycée. Par contre, lorsqu'elle est à l'heure, elle choisit avec deux chances sur cinq d'aller à pied et avec trois chances sur cinq de prendre le bus.

On considère un matin donné et on définit les événements :

$$R$$ : « Mouna se lève en retard »
$$B$$ : « Mouna prend le bus »

1) Montrer en utilisant la formule des probabilités totales que: $ P(B) = \frac{11}{15} $.
2) On remarque qu'un matin donne Mouna prend le bus.
Quelle est la probabilité qu'elle se soit levée à l'heure?
3) On étudie maintainant les trajets pendant les 180 jours de cours d'une année scolaire. On suppose que chaque jour les choix de Mouna sont indépendantes des choix des jours précédents.

On nomme $$X$$ la variable aléatoire égale au nombre de fois ou Mouna prend le bus.

a) Reconnaître la loi de $X$. Donner l'ensemble $X(\Omega)$ des valeurs prises par $X$ et pour chaque entier $k$, une expression de $P(X = k)$ en fonction de $k$.
b) Donner $E(X)$ et $V(X)$.
c) En moyenne combien de matins dans l'année Mouna peut-elle espérer allez au lycée à pied?

**Devoir 2.**
Le secteur de production d'une entreprise est composé de trois catégories de personnel :

- Les ingénieurs;
- Les opérateurs de production;
- Les agents de maintenance.

Il y a 8% d'ingénieurs et 82% d'opérateurs de production. Les femmes représentent 50% des ingénieurs, 25% des agents de maintenance et 60% des opérateurs de production.

**Partie A :**
Dans cette partie, on interroge au hasard un membre du personnel de cette entreprise.

On note les évènements suivants :

M : « Le personnel interrogé est un agent de maintenance »

O : « Le personnel interrogé est un opérateur de production »

I : « Le personnel interrogé est un ingénieur »

F : « Le personnel interrogé est une femme »

1) Construire un arbre pondéré correspondant aux données.
2) Calculer la probabilité d'interroger :

a) Un agent de maintenance
b)Une femme agent de maintenance
c) Un femme

**Partie B :**
Le service de maintenance effectue l'entretien des machines, mais il est appelé aussi à intervenir en cas de panne. Pour cela une alarme est prévue. Des études ont montré que sur une journée :

- La probabilité qu'il n'y ait pas de panne et que l'alarme se déclenche est égale à 0,002.
- La probabilité qu'une panne survienne et que l'alarme ne se déclenche pas est égale à 0,003;
- La probabilité qu'une panne se produit est égale à 0,04.

On note :

- A l'événement : « L'alarme se déclenche »
- B l'événement : « Une panne se produit »

1) Démontrer que la probabilité qu'une panne survienne et que l'alarme se déclenche est égale à 0,007.
2) Calculer la probabilité que l'alarme se déclenche.
3) Calculer la probabilité qu'il y ait une panne sachet que l'alarme se déclenche.

**Devoir 3.**
Une roue de loterie se compose de secteurs identiques numérotés de 1 à 12.

Une personne fait tourner la roue devant un repère.
On suppose que chaque secteur a la même probabilité de s'arrêter devant ce repère.

À chaque partie, un joueur mise une certaine somme d'argent en choisissant un, deux ou trois numéros sur les 12. Il est gagnant si le secteur qui s'arrête devant ce repère porte l'un des numéros qu'il a choisis.

Un joueur possédant un crédit illimité, effectue une partie en adoptant la stratégie suivante :

- Il mise sur le chiffre 1 à la première partie.
- S'il perd à la $ n^{\text{ème}} $ partie, $ n \geq 1 $, il mise uniquement sur les chiffres 1 et 2 à la partie suivante et s'il peut la $ n^{\text{ème}} $ partie, il mise sur les chiffres 1, 3 et 5.

1) On note $p_n$ la probabilité de l'événement :

$A_n$ : « Le joueur gagne la $n^{\text{ème}}$ partie »

a) Calculer les probabilités conditionnelles :

$$P_{A_n}(A_{n+1}) \text{ et } P_{A_n}(A_{n+1})$$

b) En déduire que: $(\forall n \in \mathbb{N}^*) p_{n+1} = \frac{1}{12} p_n + \frac{1}{6}$
c) On pose pour tout $n\in \mathbb{N}^*$ .. $u_{n} = p_{n} - \frac{2}{11}$

Montrer que la suite $(u_n)_{n \in \mathbb{N}^*}$ est géométrique.
En déduire l'expression de $p_n$ en fonction de ce puis déterminer $\lim_{n \to +\infty} p_n$.

2) Soit $k$ un entier tel que $1 \le k \le n$.

On note $B_k$ l'événement :

« Le joueur gagne une seule fois au cours des n premières parties et ce gain a lieu à la kème partie »

a) A l'aide de la formule des probabilités composées, calculer $ P(B_{n}) $.
b) Calculer $P(B_{k})$ pour $k\leq n - 1$
c) En déduire la probabilité $ q_{n} $ pour que le joueur gagne une seule fois au cours des $ n $ premières parties.

**Devoir 4.**
Les parties A), B) et C) sont indépendantes.

**Partie A :**
Une urne contient deux boules blanches, trois boules rouges et cinq boules noires. On suppose que ces boules sont indiscernables au toucher.

1) On tire au hasard, successivement et avec remise trois boules de l'urne.

Calculer les probabilités des événements suivants :

E : « Obtenir une boule de chaque couleur »

F : « Obtenir au moins deux boules noires »

G : « Obtenir deux boules rouges et une boule blanche sachant que la première boule tirée est blanche »

2) Dans cette question, on tire au hasard, successivement et sans remise trois boules de l'urne.

Calculer la probabilité de chacun des événements E, F et G.

**Partie B :**
On jette un dé cubique non truqué, dont les faces sont numérotées de 1 à 6, trois fois de suite.

1) On considère les événements :

A : « Obtenir au moins un 6 »

B : « Deux dés au moins donnent le même résultat »

a) Calculer la probabilité de chacun des événements :

$$\overline{A} \quad ; \quad \overline{B} \quad ; \quad A \quad ; \quad B$$

b) Calculer $P\left(\overline{A}\cap \overline{B}\right)$ et en deduire $P\left(\overline{A}\cap B\right)$
c) Calculer de la même manière $P(A\cap B)$

Les événements A et B sont-ils indépendants ?

2) Soit X la variable aléatoire qui représente le nombre d'as obtenus.

a) Déterminer la loi de probabilité de $ X $.
b) Calculer l'espérance mathématique, la variance et l'écart-type de $ X $.
c) Déterminer la fonction de répartition de $ X $ puis tracer sa courbe.

**Partie C :**
Une guêpe entre par inadvertance dans un appartement composé de deux pièces A et B. Elle est dans la pièce A à l'instant t = 0, et évolue ainsi :

- Si elle est en $ A $ à l'instant $ n $, elle reste en $ A $ avec une probabilité de $ \frac{1}{3} $ ou passse en $ B $ avec une probabilité $ \frac{2}{3} $ à l'instant $ n + 1 $.
- Si elle est en $ B $, elle returne en $ A $ avec une probabilité de $ \frac{1}{4} $, reste en $ B $ avec une probabilité $ \frac{1}{2} $ et sort de l'appartement avec une probabilité de $ \frac{1}{4} $. Si elle est dehors, elle y reste.

On note An, Bn et Cn les événements suivants :

An : « La guêpe est en A à l'instant n »

Bn : « La guêpe est en B à l'instant n »

Cn : « La guêpe est en dehors à l'instant n »

Les probabilités respectives de ces événements sont notées an, bn et cn.

1) Calculer $a_0, b_0, c_0, a_1, b_1, c_1, a_2, b_2$ et $c_2$.
2) Exprimer $a_{n + 1}$ et $b_{n + 1}$ en fonction de $a_{n}$ et $b_{n}$.
3) On définit les suites $\left(u_{n}\right)$ et $\left(v_{n}\right)$ pour tout $n\in \mathbb{N}$

par : $$u_n = \frac{6}{10}a_n - \frac{3}{10}b_n$$ et $$v_n = \frac{4}{10}a_n + \frac{3}{10}b_n$$

a) Montrer que la suite $\left(u_{n}\right)$ est constante.
b) Montrer que la suite $\left(v_{n}\right)$ est géométrie.
c) Exprimer $u_{n}$ et $\nu_{n}$ en fonction de $n$
d) En déduire les expressions de $ a_{n} $ et $ b_{n} $ en fonction de $ n $. Que vaut $ c_{n} $?

**Devoir 5.**
On considère deux urnes U et V qui contient chacune des boules blanches et rouges indiscernables au toucher. On choisit au hasard et de manière équiprobable une des deux urnes et on y tire une boule au hasard. Soit les événements :

A : « L'urne U a été choisie »

B : « L'urne V a été choisie »

R : « Obtenir une boule rouge »

1) On suppose dans cette question que l'urne U contient une boule rouge et 4 boules blanches ; et que l'urne V contient 4 boules rouges et deux blanches.

a) Déterminer les probabilités suivantes :

$$P(A) \quad ; \quad P_A(R) \quad ; \quad P(A \cap R)$$

b) Montrer que : $$P(R) = \frac{13}{30}$$

c) Sachant qu'on a obtenu une boule rouge, quelle est la probabilité qu'elle soit tirée de l'urne U ?

2) Dans cette question, on suppose que l'urne U contient 4 boules blanches et n boules rouges ; et que l'urne V contient deux boules blanches et 5 - n boules rouges (avec n ∈ {0; 1; 2; 3; 4; 5}).

a) Exprimer $$P_A(R)$$ et $$P_B(R)$$ en fonction de n.

b) Montrer que : $$P(R) = \frac{-n^2 + 4n + 10}{(4 + n)(7 - n)}$$.

c) On sait que n prend six valeurs entières. Déterminer la distribution des cinq boules sur les urnes U et V pour que P(R) soit maximale.

**Devoir 6.**
Une entreprise fabrique des appareils électriques en grande quantité.

**Partie A :**
On admet que 5% des appareils présentent un défaut. On contrôle les appareils d'un lot.

Ce contrôle refuse 90% des appareils avec défaut et accepte 80% des appareils sans défaut.

On prélève au hasard dans le lot.

On considère les événements suivants :

D : « L'appareil a un défaut »

A : « L'appareil est accepté à l'issue du contrôle »

1) Donner la valeur des probabilités et probabilités conditionnelles suivantes :

$$P(D) \quad ; \quad P(\overline{D}) \quad ; \quad P_D(\overline{A}) \quad ; \quad P_D(A) \quad ; \quad P_D(A)$$

2) Calculer à 0,001 près les probabilités suivantes :

$$P(A \cap D) \quad \text{et} \quad P(A \cap \overline{D})$$

3) Déduire de ce qui la probabilité la probabilité $$P(A)$$ à 0,001 près.

4) Calculer à 0,001 près la probabilité qu'un appareil soit défectueux sachant qu'il a été accepté par le contrôle.

**Partie B :**
On prélève au hasard 10 appareils électriques d'une livraison pour vérification. La livraison étant suffisamment important pour que l'on puisse assimiler ce prélèvement à un tirage avec remise des appareils. On rappelle que 5% des appareils présentent un défaut.

On considère la variable aléatoire X qui, à tout prélèvement de 10 appareils, associe le nombre sans défaut de ce prélèvement.

1) Justifier que $X$ suit une loi binomiale dont on déterminera les paramètres.
2) Préciser $X(\Omega)$ et, pour tout $k\in X(\Omega)$, donner la valeur de $P(X = k)$.
3) Déterminer les valeurs de l'espérance $ E(X) $ et de la variance $ V(X) $.
4) Donner la probabilité que, dans un tel prélèvement, tous les appareils soient sans défaut.
5) Déterminer la fonction de répartition $ F_{X} $ de $ X $ puis tracer sa courbe.

#### Se préparer aux examens
**Problème 1.**
Un sac contient 10 boules blanches et 10 boules rouges indiscernables au toucher. On tire au hasard une boule du sac. Si la boule tirée est rouge, on la remet dans le sac ; et si elle blanche, on la remplace par 3 boules rouges puis on tire une boule du sac.

1) Calculer la probabilité de chacun des événements suivants :

R : « Les deux boules tirées sont rouges »

B : « Les deux boules tirées sont blanches »

E : « Les deux boules tirées sont de couleurs différentes »

2) Calculer la probabilité que la première boule tirée est blanche sachant que la deuxième boule tirée est rouge.

**Examen National 2004 (Session de rattrapage).**

**Problème 2.**
On distribue aléatoirement quatre boules indiscernables au toucher et numérotées 1, 2, 3 et 4 à six personnes A, B, C, D, E et F. (Chaque personne peut y avoir 0 ou 1 ou 2 ou 3 ou 4 boules).

1) Quel est le nombre d'éventualités?
2) Calculer la probabilité pour que la personne $A$ a obtenu au moins une boule.
3) Calculer la probabilité de l'événement suivant: « Le total des boules obtenues par $ B $ et $ C $ est égal au nombre des boules obtenues par $ A $ »

**Examen National 2006 (Session de rattrapage).**

**Problème 3.**
On considère trois urnes U, V et W telles que :

L'une W contient une boule noire et deux boules blanches;
- Les urnes U et V contient chacune deux boules noires et deux boules blanches.

On considère l'expérience suivante :

On tire une boule de l'urne W. Si la boule tirée est blanche, on la remet dans l'urne U puis on y tire deux boules simultanément ; et si la boule tirée de W est noire, on la remet dans l'urne V puis on y tire deux boules simultanément.

1) Quelle est la probabilité que le tirage soit effectué dans l'urne U?
2) Quelle est la probabilité de tirer deux boules blanches à la fin de l'expérience?
3) Soit $ X $ la variable aléatoire qui est égale au nombre de boules blanches tirées à la fin de l'expérience? Déterminer la loi de probabilité de la variable $ X $.

**Examen National 2014 (Session de rattrapage).**

**Problème 4.**
On considère deux urnes U et V. L'urne U contient 4 boules rouges et 4 boules bleues ; l'urne V contient 2 boules rouges et 4 boules bleues.

On considère l'expérience suivante : On tire au hasard une boule de l'urne U : Si elle est rouge, on la remet dans l'urne U puis on tire au hasard une boule de l'urne V ; et si elle est bleue, on la remet à côté puis on tire au hasard une boule de l'urne V.

On considère les événements suivants :

$R_{U}$ : La boule tirée de l'urne U est rouge
$B_{U}$ : La boule tirée de l'urne U est bleue
$R_{V}$ : La boule tirée de l'urne V est rouge
$B_{V}$ : La boule tirée de l'urne V est bleue

1) Calculer les probabilités des événements $ R_{U} $ et $ B_{U} $.
2) a) Calculer la probabilité de l'événement $B_V$ sachant que l'événement $R_U$ est réalisé.
b) Calculer la probabilité de l'événement $B_V$ sachant que l'événement $B_U$ est réalisé.

3) Montrer que la probabilité de $B_V$ est $ \frac{13}{21} $.
4) En déduire la probabilité de l'événement $R_V$

**Examen National 2016 (Session de rattrapage).**

**Problème 5.**
**Partie A :**
1) Soit $a \in \mathbb{Z}$. Montrer que si $a$ et 13 sont premiers entre eux, alors : $a^{2016} = 1$ [13]

2) On considère dans $\mathbb{Z}$ l'équation : $(E) : x^{2015} = 2$ [13] et soit $x$ une solution de l'équation $(E)$.

a) Montrer que $x$ et 13 sont premiers entre eux.
b) Montrer que : $x = 7$ [13].

**Partie B :**
On considère une urne $U$ contenant cinquante boules numérotées de 1 à 50. (Les boules sont indiscernables au toucher).

1) On tire au hasard une boule de l'urne. Quelle est la probabilité d'obtenir une boule portant un numéro solution de l'équation $(E)$ ?

2) On tire au hasard une boule de l'urne, on note son numéro puis on la remet dans l'urne. On répète cette expérience trois fois de suite.
Quelle est la probabilité d'obtenir exactement deux fois portant un numéro solution de l'équation $(E)$ ?

**Examen National 2015 (session normale).**

**Problème 6.**
Une urne contient 3 boules rouges et 4 boules noires indiscernables au toucher.

I- On tire successivement et avec remise 4 boules de l'urne et on considère la variable aléatoire $X$ égale au nombre de boules noires tirées de l'urne.

1) Préciser la loi de la variable aléatoire $X$.
2) Calculer l'espérance mathématique $E(X)$ de $X$.

II- On effectue l'expérience aléatoire suivante sur trois étapes comme suit :

1$^{ère}$ étape : On tire une boule de l'urne, on note sa couleur puis on la remet dans l'urne.

2$^{ème}$ étape : On ajoute dans l'urne 5 boules de même couleur de celle de la 1$^{ère}$ boule tirée.

3$^{ème}$ étape : On tire successivement et sans remise 3 boules de l'urne parmi les 12 boules.

On considère les événements suivants :
$N$ : « La 1$^{ère}$ boule tirée de l'urne est noire »
$R$ : « La 1$^{ère}$ boule tirée de l'urne est rouge »
$E$ : « Les boules tirées dans la 3$^{ème}$ étape sont toutes noires ».

1) Montrer que : $P(E \cap N) = \frac{12}{55}$.
2) Calculer $P(E)$.
3) Calculer la probabilité de l'événement $R$ sachant l'événement $E$ est réalisé.

**Examen National 2013 (Session de rattrapage).**

**Problème 7.**
Soit $n$ un entier supérieur ou égal à 4.

On considère trois urnes $U_1, U_2$ et $U_3$ tels que :

- L'urne $U_1$ contient une boule rouge et $(n-1)$ boules noires.
- L'urne $U_2$ contient deux boules rouges et $(n-2)$ boules noires.
- L'urne $U_3$ contient trois boules rouges et $(n-3)$ boules noires.

On considère l'expérience aléatoire suivante :
On choisit au hasard une urne par les trois urnes et on y tire simultanément deux boules.

On considère la variable aléatoire $X$ égale au nombre de boules rouges tirées de l'urne.

1) Déterminer les valeurs prises par $X$.
2) a) Montrer que : $P(X=2) = \frac{8}{3n(n-1)}$

b) Montrer que : $P(X=1) = \frac{4(3n-7)}{3n(n-1)}$

c) En déduire la loi de probabilité de $X$.

3) Sachant qu'on a obtenu deux boules rouges, quelle est la probabilité que le tirage a été effectué dans l'urne $U_3$.

**Examen National 2009 (Session de rattrapage).**

**Problème 8.**
Soit n un entier impair supérieur ou égal à 3.

On considère n urnes numérotées de 1 à n. L'urne numéro k (1 ≤ k ≤ n) contient k boules blanches et n - k boules noires indiscernables au toucher.

On choisit aléatoirement une urne et on y tire une boule et une seule.

1) Calculer la probabilité d'obtenir une boule blanche.
2) Calculer la probabilité que le tirage soit effectué dans une urne de numéro impair.
3) Calculer la probabilité d'obtenir une boule blanche sachant que le tirage a été effectué dans une urne de numéro impair.

**Examen National 2007 (Session de rattrapage).**

**Problème 9.**
Soit n un entier supérieur ou égal à 20.

Un sac contient 10 boules blanches et n - 10 boules noires indiscernables au toucher.

On tire une boule du sac, on note sa couleur puis on la remet dans le sac.

On répète cette expérience n fois de suite. On note p_k la probabilité d'obtention de k boules blanches avec k ∈ {0; 1; 2; ...; n}.

1) Calculer p_k en fonction de n et k.
2) On pose u_k = (p_{k+1} / p_k) avec k ∈ {0; 1; ...; n-1}.

a) Montrer que: u_k = (n - k / (k + 1)) × (10 / (n - 10)).
b) Montrer les équivalences suivantes:

0 ≤ k ≤ 9 ⇔ u_k ≥ 1

10 ≤ k ≤ n - 1 ⇔ u_k ≤ 1

c) En déduire la plus grande valeur M de p_k quand l'entier k varie dans l'ensemble {0; 1; 2; ...; n} puis

établir que: M = (n! / (n^n)) × (10^10 / 10!) × ((n - 10)^n - 10) / ((n - 10)!)!

**Examen National 2005 (Session de rattrapage).**

**Problème 10.**
Une urne contient 4 boules blanches et trois boules rouges indiscernables au toucher. On tire au hasard une boule de l'urne, on note sa couleur puis on la remet dans l'urne.

On répète successivement l'expérience et on s'arrête dès qu'on a obtenu successivement deux boules de la même couleur.

Soit X la variable aléatoire égale au rang de tirage dans lequel l'expérience s'est arrêtée.

1) Calculer les probabilités des événements :

[X = 2] et [X = 3]

2) Soit k $\in \mathbb{N}^*$.

a) Montrer que la probabilité de l'événement

[X = 2k] est: p_{2k} = 5/8 (3/16)^{k-1}

b) Montrer que la probabilité de l'événement

[X = 2k + 1] est: p_{2k+1} = (3/16)^k

**Examen National 2008 (Session de rattrapage).**

**Problème 11.**
Une urne contient une boule blanche et une boule noire indiscernables au toucher. On tire successivement et avec remise n boules de l'urne (n ≥ 2).

1) Calculer les probabilités des événements suivants :

A : « Obtenir exactement une boule blanche »

B : « Obtenir au plus une boule blanche »

2) On considère l'événement :

C : « Obtenir des boules des deux couleurs »

Calculer P(C̄) et en déduire P(C).

3) Soit X la variable aléatoire égale au nombre des boules blanches obtenues lors de n tirages.

a) Déterminer la loi de probabilité de X.
b) Déterminer l'espérance E(X) de X.
c) En déduire que: (∀n $\in \mathbb{N}^*$) Σ_{k=0}^{n} kC_n^k = n2^{n-1}

**Examen National 2000 (session normale).**

## Résumé

- **Événements.** Un événement est une partie de l'univers $\Omega$ ; l'événement contraire de $A$ est $\overline{A}$.
- **Réunion et intersection.** $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ et $P(\overline{A})=1-P(A)$.
- **Équiprobabilité.** Lorsque les issues sont équiprobables, $P(A)=\dfrac{\operatorname{card}(A)}{\operatorname{card}(\Omega)}$.
- **Probabilité conditionnelle.** Si $P(A)>0$, alors $P_A(B)=\dfrac{P(A\cap B)}{P(A)}$ et $P(A\cap B)=P(A)P_A(B)$.
- **Probabilités totales.** Si $(A_i)$ est un système complet d'événements, alors $P(B)=\sum_i P(A_i)P_{A_i}(B)$.
- **Indépendance.** Les événements $A$ et $B$ sont indépendants si, et seulement si, $P(A\cap B)=P(A)P(B)$.
- **Variable aléatoire.** Pour une variable discrète $X$, $E(X)=\sum_i x_iP(X=x_i)$ et $V(X)=E(X^2)-E(X)^2$.
- **Loi binomiale.** Si $X\sim\mathcal{B}(n,p)$, alors $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$, $E(X)=np$ et $V(X)=np(1-p)$.

## Auto-évaluation

- Décrire une expérience aléatoire, son univers et ses événements avec le langage ensembliste.
- Calculer des probabilités par dénombrement, avec ou sans remise.
- Utiliser un arbre pondéré et les formules des probabilités composées et totales.
- Calculer et interpréter une probabilité conditionnelle.
- Vérifier l'indépendance de deux événements ou de plusieurs épreuves.
- Déterminer la loi, l'espérance, la variance et la fonction de répartition d'une variable aléatoire.
- Reconnaître une loi binomiale et calculer les probabilités associées.