# Chapitre 5 : Fonction exponentielle

## Histoire

> **Note d'édition.** La page d'ouverture du chapitre (page source 200) n'est disponible que sous forme d'image et son extraction automatique est inexploitable. La rubrique « Histoire », les capacités attendues et le plan du cours du manuel de référence ne sont donc pas reproduits ici.

## Objectifs

- Définir la fonction exponentielle comme fonction réciproque du logarithme népérien.
- Connaître et utiliser les propriétés algébriques de la fonction exponentielle.
- Résoudre des équations et des inéquations exponentielles.
- Étudier les limites et les variations de la fonction exponentielle.
- Représenter graphiquement les fonctions de la forme $a^x$ et $e^{kx+b}$.
- Modéliser des situations de croissance, de décroissance et de capitalisation.

## Plan du chapitre

- Activités préparatoires.
- **Cours** : définition · propriétés · dérivée · limites · exponentielle de base $a$.
- **Méthodes** : équations exponentielles · étude de fonctions · applications.
- **Exercices et problèmes** : application · perfectionnement · devoirs · examens.

## Prérequis

- Fonction logarithme népérien.
- Fonction réciproque et bijection.
- Dérivation, limites et continuité.
- Équations et inéquations algébriques.
- Suites numériques et théorème des accroissements finis.

## Activités préparatoires

### RAPPELS
A) À Propos des puissances :

1. Soit $r$ un nombre rationnel et $(x, y) \in (\mathbb{R}_+^n)^2$. Simplifier les expressions suivantes :

$$E = \frac{3 \times 8^{r-\frac{1}{3}} + 4^{r+1} \cdot (\sqrt{3})^{2r+4}}{8^r - (16)^{r+\frac{1}{2}} \times 2^{-r-4}} \quad \text{et} \quad F = \frac{\left(x^{-4}y^{\frac{1}{3}}\right)^2 \sqrt[3]{x^2 \cdot 4\sqrt{y}}}{y \cdot x^{-2} \sqrt[6]{x^2 y^{-2}}}$$

2. Résoudre dans Q l'équation suivante: \( 10^{(x - 2)(3 - x)} = \frac{1}{100} \)
3. Determiner le plus petit entier naturel n vérifiant l'inégalité: \( 3^n > (2016)^{40} \)
4. Montrer que pour tout \( n \in \mathbb{N} \): \( \sqrt{2^{2n} + 2^{n+1} + 1} - \sqrt{2^{2n} - 2^{n+1} + 1} = 2 \)
B) Propriétés algébriques de la fonction logarithme népérien :

1. Simplifier l'ecriture du nombre: \(a = \ln \left(\frac{\sqrt{2} - 1}{\sqrt{2} + 1}\right) - 2\ln \left(\sqrt{2} - 1\right)\)
2. Résoudre dans \(\mathbb{R}\) les équations suivantes:

$$\ln(2x - 1) + \ln(2x + 5) = \ln 7 \quad ; \quad 3(\ln x)^2 - 5\ln x + 2 = 0 \quad ; \quad |5 - 2\ln x| = |3 + \ln x^4|$$

3. Résoudre dans $\mathbb{R}$ les inéquations suivantes :

$$2(\ln x)^2 - \ln x - 3 \ge 0 \quad ; \quad \ln(7x + 6) - \ln(2x - 3) \ge \ln(x - 2) \quad ; \quad \ln(2x) \cdot \ln\left(\frac{2}{x}\right) \ge 2\ln(2) - 1$$

C) Étude d'une fonction numérique :

1. Soit $\varphi$ la fonction numérique définie sur $[0; +\infty[$ par : $\varphi(t) = \frac{2t}{1+t} - \ln(1+t)$

Étudier les variations de $\varphi$ sur $[0; +\infty[$ et en déduire qu'il existe un unique réel $\alpha \in ]3; 4[$ tel que $\varphi(\alpha) = 0$.

2. Soit $f$ la fonction numérique définie sur $[0; +\infty[$ par :

$$\begin{cases} f(x) = \frac{\ln(1+x^2)}{x} \text{ si } x > 0 \\ f(0) = 0 \end{cases}$$

$\mathcal{C}_f$ sa courbe représentative dans un repère orthonormé $(O; \bar{i}, \bar{j})$.

a) Montrer que \(f\) est derivable à droite en 0.
b) Determiner la nature de la branche infinie de la courbe \(\mathcal{C}_f\)
c) Montrer que \(f\) est derivable sur \(]0; +\infty[\) et que: \((\forall x \in ]0; +\infty[)\) \(f'(x) = \frac{\varphi(x^2)}{x^2}\)
d) Etudier les variations de la fonction \( f \) puis tracer \( \mathcal{C}_f \).

A) Première Partie :

1. Montrer que la fonction logarithme népérienne est une bijection de $]0; +\infty[$ vers $\mathbb{R}$.

La fonction $\ln$ admet alors une fonction réciproque définie sur $\mathbb{R}$ et à valeurs dans $]0; +\infty[$.

La fonction réciproque de la fonction logarithme népérienne est appelée la fonction exponentielle népérienne ou la fonction exponentielle de base $e$, et on la note $\exp$.

2. Calculer : $\exp(0)$, $\exp(1)$, $\exp(2)$, $\exp\left(\frac{1}{2}\right)$

3. Montrer que la fonction $\exp$ est continue, strictement croissante sur $\mathbb{R}$ et que $\exp(\mathbb{R}) = \mathbb{R}^*$.

4. Montrer que : $(\forall t \in \mathbb{R}^*)$ $\exp(\ln(t)) = t$ et $(\forall x \in \mathbb{R})$ $\ln(\exp(x)) = x$

5. Montrer que : $(\forall n \in \mathbb{N})$ $\exp(n) = e^n$

B) Deuxième Partie :

On considère les deux nombres :

$x = \frac{1}{3}$ et $y = \frac{1}{6}$

On pose : $a = \exp(x)$ et $b = \exp(y)$

1. Calculer $\ln a$, $\ln b$ et $\ln(ab)$.

2. En déduire que : $\exp(x) \cdot \exp(y) = \exp(x + y)$

C) Troisième Partie :

1. Soit $x \in \mathbb{R}$. On pose : $a = \exp(x)$ et $b = \exp(-x)$

Calculer $\ln a + \ln b$ puis écrire $b$ en fonction de $a$.

2. Résoudre dans $\mathbb{R}$ l'équation : $\exp(x) - 2\exp(-x) + 1 = 0$

D) Quatrième Partie :

1. Soit $x \in \mathbb{R}$. On pose : $a = \exp(2x)$ et $b = \exp(x)$

Montrer que $a = b^2$.

2. Résoudre dans $\mathbb{R}$ l'inéquation : $\exp(2x) + \exp(x) - 6 \ge 0$

E) Cinquième Partie :

1. En utilisant la représentation graphique de la fonction $\ln$, construire la courbe représentative de la fonction $\exp$ dans un repère orthonormé.

2. En déduire les limites suivantes :

$\lim_{x \to -\infty} \exp(x)$

$\lim_{x \to +\infty} \exp(x)$

$\lim_{x \to +\infty} \frac{\exp(x)}{x}$

Puis donner les interprétations graphiques que l'on peut tirer.

• Pour tout $\beta \in \mathbb{R}$, il existe un unique réel $\alpha \in \mathbb{R}^*$, tel que : $\beta = \ln(\alpha)$

• $\exp$ est une abréviation du mot « exponentielle » Si $\alpha \in \mathbb{R}^*$ et $\beta \in \mathbb{R}$ alors :

$\beta = \ln \alpha \Leftrightarrow \alpha = \exp(\beta)$

• Le nombre $e$ est l'unique réel tel que : $\ln(e) = 1$

### DÉRIVÉE DE LA FONCTION EXPONENTIELLE NÉPÉRIENNE
1. Montrer que la fonction exp est dérivable en 0 et que: \((\exp)'(0) = 1\)
2.a)Calculer la limite: \(\lim_{t\to 0}\frac{\exp(t) - 1}{t}\)
b) Determiner l'equation de la tangente à la courbe exp au point d'abscisse 0.
3. Soit \( f \) la fonction définie par: \( f(x) = \exp(\sin x) \) et soit \( x_0 = \frac{2017\pi}{2} \).

Montrer que la fonction $f$ est dérivable en $x_0$ et déterminer $f'(x_0)$.

### FONCTION EXPONENTIELLE DE BASE 10
1. Montrer que la fonction logarithme decimal \( x \mapsto \log \) est une bijection de \( ]0; +\infty[ \) vers \( \mathbb{R} \), et que log admet une fonction reciproque définie de \( \mathbb{R} \) vers \( ]0; +\infty[ \).
La fonction reciproque de la fonction logarithme decimal est appelée la fonction exponentielle de base 10, et on la note \(\exp_{10}\).
2. Montrer que pour tout \(n\in \mathbb{N}\) .. \(\exp_{10}(n) = 10^n\)
3. Montrer que pour tout \(x \in \mathbb{R}\) .. \(\exp_{10}(x) = \exp(x \ln 10)\)
4. Montrer que pour tout \(x \in \mathbb{R}\) .. \(\exp_{10}(2x) = (\exp_{10}(x))^2\)
5. Résoudre dans R l'équation suivante: \(\exp_{10}(2x) - 11\exp_{10}(x) + 10 = 0\)
6. Calculer \(\lim_{x\to +\infty}\exp_{10}(x)\) et \(\lim_{x\to -\infty}\exp_{10}(x)\).

## Cours

### 1. Fonction exponentielle népérienne
#### I.1. DÉFINITION ET PROPRIÉTÉS ÉLÉMENTAIRES
> **Définition 1.**
La fonction réciproque de la fonction logarithme népérienne est appelée la fonction exponentielle népérienne (ou la fonction exponentielle), et on la note exp.

> **Remarques.**
- La fonction ln est une bijection de $\mathbb{R}^*$ vers $\mathbb{R}$ : $(\forall \beta \in \mathbb{R})(\exists! a \in \mathbb{R}^*)$ $\beta = \ln(a)$
- Par définition de la fonction exp : $(\forall x \in \mathbb{R})(\forall y \in \mathbb{R}^*)$ ($y = \exp(x) \Leftrightarrow x = \ln(y)$)
- $\exp(0) = 1$ et $\exp(1) = c$ car : $\ln(1) = 0$ et $\ln(c) = 1$

> **Proposition 1.**
- La fonction exp est une bijection de $\mathbb{R}$ dans $\mathbb{R}^*$,
- La fonction exp est continue et strictement croissante sur $\mathbb{R}$,
- On a pour tout $x \in \mathbb{R}$ : $\exp(x) > 0$ et $\ln(\exp(x)) = x$
- On a pour tout $x \in \mathbb{R}^*$ : $\exp(\ln x) = x$

> **Corollaire.**
- Pour tout $(x, y) \in \mathbb{R}^2$ : $(\exp(x) = \exp(y) \Leftrightarrow x = y)$ et $(\exp(x) < \exp(y) \Leftrightarrow x < y)$
- Pour tout $x \in \mathbb{R}$ : $(\exp(x) = 1 \Leftrightarrow x = 0)$ et $(\exp(x) < 1 \Leftrightarrow x < 0)$ et $(\exp(x) > 1 \Leftrightarrow x > 0)$

> **Exemples.**
1) Résolvons dans $\mathbb{R}$ l'équation : $\exp\left(\frac{x+5}{2x+3}\right) = \exp\left(\frac{1}{x-1}\right)$

Cette équation est définie pour les réels $x$ tels que $2x + 3 \neq 0$ et $x - 1 \neq 0$, c'est-à-dire $x \in \mathbb{R} - \left\{1; \frac{-3}{2}\right\}$.

On a pour tout $x \in \mathbb{R} - \left\{1; \frac{-3}{2}\right\}$ :

$$\exp\left(\frac{x+5}{2x+3}\right) = \exp\left(\frac{1}{x-1}\right) \Leftrightarrow \frac{x+5}{2x+3} = \frac{1}{x-1} \Leftrightarrow (x+5)(x-1) = 2x + 3 \Leftrightarrow x^2 + 2x - 8 = 0$$

Les solutions de l'équation $x^2 + 2x - 8 = 0$ sont $-4$ et $2$, qui sont dans $\mathbb{R} - \left\{1; \frac{-3}{2}\right\}$.

Par suite, l'ensemble solution de l'équation est : $S = \{2; -4\}$

2) Résolvons dans $\mathbb{R}$ l'inéquation : $\exp(2x+1) \leq \exp\left(\frac{6}{x}\right)$

Cette inéquation est définie pour tout réel non nul. On a donc pour tout $x \in \mathbb{R}^+$ :

$$\exp(2x+1) \leq \exp\left(\frac{6}{x}\right) \Leftrightarrow 2x+1 \leq \frac{6}{x} \Leftrightarrow \frac{2x^2+x-6}{x} \leq 0$$

En étudiant le signe de $\frac{x^2+x-6}{x}$ on obtient comme ensemble solutions : $S = [-\infty, -2] \cup \left[0, \frac{3}{2}\right]$

> **Applications.**
Résoudre dans $\mathbb{R}$ les équations et les inéquations suivantes :

$$\begin{array}{l} \exp(-x^2) = \exp\left(\frac{3x+1}{x-5}\right) \quad ; \quad \exp\left(x^2 + \frac{1}{x^2}\right) = e^2 \quad ; \quad \exp(-x^2) > \exp(-x) \\ \exp(5x^2 - 7x + 2) \leq 1 \quad ; \quad \exp\left(\frac{1}{x+7}\right) \leq \exp\left(\frac{1}{(x+7)^2} - 12\right) \end{array}$$

#### 1.2. PROPRIÉTÉS ALGÉBRIQUES
> **Proposition 2.**
Pour tous réels $x$ et $y$ on a : $\exp(x+y) = \exp(x) \times \exp(y)$

> **Preuve.**
Posons $\exp(x) = t$ et $\exp(y) = s$. On a alors : $x = \ln(t)$ et $y = \ln(s)$

On sait que $\ln(t) + \ln(s) = \ln(st)$, donc $x+y = \ln(ts)$ et alors $\exp(x+y) = ts = \exp(x) \cdot \exp(y)$.

On peut dire donc que la fonction exp transforme les sommes en produits, et en utilisant un raisonnement par récurrence on peut montrer la propriété suivante :

> **Proposition 3.**
Pour tout $n \in \mathbb{N}^*$ et pour tous réels $x_1, x_2, ..., x_n$, on a :

$$\exp(x_1 + x_2 + ... + x_n) = \exp(x_1) \cdot \exp(x_2) ... \exp(x_n), \text{c'est-à-dire : } \exp\left(\sum_{k=1}^n x_k\right) = \prod_{k=1}^n \exp(x_k)$$

De la proposition 2, on déduit les résultats suivants :

> **Proposition 4.**
Soit $x$ et $y$ deux nombres réels, et $r$ un nombre rationnel. Alors :

$$\exp(-x) = \frac{1}{\exp(x)} \quad ; \quad \exp(x-y) = \frac{\exp(x)}{\exp(y)} \quad ; \quad \exp(rx) = (\exp(x))^r$$

#### 1.3. UNE AUTRE ÉCRITURE DE LA FONCTION exp
On a $\exp(1) = e$. On a déjà vu que pour tout $x \in \mathbb{R}$ et pour tout $r \in \mathbb{Q}$ : $\exp(rx) = (\exp(x))^r$
En particulier pour $x = 1$ : $\exp(r) = (\exp(1))^r = e^r$

On prolongera cette écriture en notant pour tout $x \in \mathbb{R}$ : $\exp(x) = e^x$

Remarquons enfin que cette nouvelle notation est compatible avec les notations des puissances connues.
Avec cette nouvelle notation, on résumera les résultats vus précédemment comme suit :

$\cdot (\forall x \in \mathbb{R}) (\forall y \in \mathbb{R}^+)$ $y = e^x \Leftrightarrow x = \ln y$

$\cdot (\forall x \in \mathbb{R}) e^x > 0$

$\cdot (\forall x \in \mathbb{R}) \ln(e^x) = x$ et $(\forall x \in \mathbb{R}^+)$ $e^{\ln x} = x$

$\cdot$ Pour tout $(x, y) \in \mathbb{R}^2$ : $(e^x = e^y \Leftrightarrow x = y)$ et $(e^x < e^y \Leftrightarrow x < y)$

$\cdot$ Pour tout $(x, y) \in \mathbb{R}^2$ et pour tout $r \in \mathbb{Q}$ :

$e^{x+y} = e^x \times e^y$ ; $e^{-x} = \frac{1}{e^x}$ ; $e^{x-y} = \frac{e^y}{e^y}$ ; $e^{xy} = (e^x)^x$

> **Exemples.**
1) Résolvons dans $\mathbb{R}$ l'équation : $e^{x^2} \cdot (e^x)^3 = (e^{-x})^2 \cdot e^{-7}$

On a pour tout $x \in \mathbb{R}$ :

$e^{x^2} \cdot (e^x)^3 = (e^{-x})^2 \cdot e^{-7} \Leftrightarrow e^{x^2} \cdot e^{3x} = e^{-5x} \cdot e^{-7} \Leftrightarrow e^{x^2+3x} = e^{-5x-7} \Leftrightarrow x^2 + 8x + 7 = 0$

Les solutions de l'équation $x^2 + 8x + 7 = 0$ sont $-7$ et $-1$. D'où l'ensemble solution est $S = \{-7; -1\}$.

2) Résolvons dans $\mathbb{R}$ l'inéquation : $e^{2x-3} - (e+1)e^{x-2} + 1 < 0$

On a pour tout $x \in \mathbb{R}$ :

$e^{2x-3} - (e+1)e^{x-2} + 1 < 0 \Leftrightarrow e^{-3} (e^{2x} - (e+1)e^{x+1} + e^3) < 0 \Leftrightarrow e^{2x} - (e+1)e^{x+1} + e^3 < 0$

En posant $t = e^x$ on obtient :

$e^{2x} - (e+1)e^{x+1} + e^3 < 0 \Leftrightarrow (e^x - e)(e^t - e^2) < 0 \Leftrightarrow e < e^x < e^2 \Leftrightarrow 1 < x < 2$

Par suite, l'ensemble solution de l'inéquation est : $S = ]1; 2[$

> **Applications.**
1) On considere la fonction \( f \) définie par \( f(x) = \frac{2e^{2x}}{e^{2x} + 1} \). Montrer que: \( (\forall x \in \mathbb{R})f(x) + f(-x) = 2 \)
2) Résoudre dans R l'équation: \( e^{\frac{3x}{x - 1}} - e^{\frac{x}{x - 1}} = 2e^{\frac{x}{x - 1}} - 2 \)
3) Résoudre dans R l'inéquation: \(\frac{(e^{2x} - 16)(e^x - 1)}{e^{x + 1} - e} \geq 0\)

#### 1.4. DÉRIVÉE DE LA FONCTION EXPONENTIELLE NÉPÉRIENNE
> **Proposition 5.**
La fonction exp est dérivable sur $$\mathbb{R}$$ et on a : $$(\forall x \in \mathbb{R}) \exp'(x) = \exp(x)$$

Ce qui s'écrit aussi : $$(\forall x \in \mathbb{R}) (e^x)^x = e^x$$

> **Preuve.**
Posons $$f(x) = \ln x$$ où $$x \in \mathbb{R}^*$$. On a donc : $$f^{-1}(x) = e^x$$ et $$x \in \mathbb{R}$$.

Puisque $$f'(x) = \frac{1}{x} \neq 0$$ pour tout $$x \in \mathbb{R}^*$$ alors la fonction $$f^{-1}$$ est dérivable sur $$\mathbb{R}$$ et on a :

$$(e^x)^x = (f^{-1})^x(x) = \frac{1}{f'(f^{-1}(x))} = \frac{1}{\frac{1}{e^x}} = e^x$$

En utilisant la composée de deux fonctions dérivables, on montre la proposition suivante :

> **Proposition 6.**
Si $$u$$ est une fonction dérivable sur un intervalle $$I$$ alors la fonction $$x \mapsto e^{u(x)}$$ est dérivable sur $$I$$ et on a :

$$(\forall x \in I) \quad (e^{u(x)})^x = u'(x)e^{u(x)}$$

> **Exemples.**
Déterminons les dérivées des fonctions $$f$$, $$g$$ et $$h$$ définies par :

$$f(x) = e^{\sqrt{2x+1}} \quad ; \quad g(x) = e^{-2x^2} - 3e^{3x+1} \quad ; \quad h(x) = e^{\frac{x+1}{-x+3}}$$

- La fonction $$x \mapsto \sqrt{2x+1}$$ est dérivable sur $$]-\frac{1}{2}; +\infty[$$ et sa dérivée est $$x \mapsto \frac{1}{\sqrt{2x+1}}$$. Donc la fonction $$f$$ est dérivable sur $$]-\frac{1}{2}; +\infty[$$ et on a pour tout $$x \in ]-\frac{1}{2}; +\infty[$$ : $$f'(x) = \frac{e^{\sqrt{2x+1}}}{\sqrt{2x+1}}$$

- Les fonctions polynomiales $$x \mapsto -2x^2$$ et $$x \mapsto 3x+1$$ sont dérivables sur $$\mathbb{R}$$, et leurs dérivées sont $$x \mapsto -4x$$ et $$x \mapsto 3$$ respectivement. Donc la fonction $$g$$ est dérivable sur $$\mathbb{R}$$, et on a pour tout $$x \in \mathbb{R}$$ :

$$g'(x) = -4xe^{-2x^2} - 9e^{3x+1}$$

- La fonction rationnelle $$x \mapsto \frac{x+1}{-x+3}$$ est dérivable sur chacun des intervalles $$]3; +\infty[$$ et $$]-\infty; 3[$$, et sa dérivée est $$x \mapsto \frac{4}{(x-3)^2}$$ pour tout $$x \in \mathbb{R} - \{3\}$$. Donc la fonction $$h$$ est dérivable sur chacun des

intervalles $$]3; +\infty[$$ et $$]-\infty; 3[$$, et on a pour tout $$x \in \mathbb{R} - \{3\}$$ : $$h'(x) = \frac{4}{(x-3)^2} e^{\frac{x+1}{-x+3}}$$

> **Exemples.**
Déterminons les primitives des fonctions $f$, $g$ et $h$ définies par :

$$f(x) = \frac{e^{\sqrt{x}}}{\sqrt{x}} \quad ; \quad g(x) = \frac{e^{\operatorname{Arc} \tan x}}{1 + x^2} \quad ; \quad h(x) = \frac{1}{\sqrt[3]{x^2}} e^{\sqrt[3]{x}}$$

• Posons : $u(x) = \sqrt{x}$ ; donc $f'(x) = 2u'(x)e^{u(x)}$. Par suite, les primitives de la fonction $f$ sont :

$$x \mapsto 2e^{\sqrt{x}} + \lambda \text{ où } \lambda \in \mathbb{R}.$$

• Posons : $v(x) = \operatorname{Arc} \tan x$ ; donc $g'(x) = v'(x)e^{v(x)}$. Par suite, les primitives de la fonction $g$ sont :

$$x \mapsto e^{\operatorname{Arc} \tan x} + \lambda \text{ où } \lambda \in \mathbb{R}.$$

• Posons : $w(x) = \sqrt[3]{x}$ ; donc $h(x) = 3w'(x)e^{w(x)}$. Par suite, les primitives de la fonction $h$ sont :

$$x \mapsto 3e^{\sqrt[3]{x}} + \lambda \text{ où } \lambda \in \mathbb{R}.$$

> **Applications.**
1) Déterminer les dérivées des fonctions définies par les expressions suivantes :

$$f(x) = e^{\sqrt{2x^2 - x + 5}} \quad ; \quad g(x) = e^{\frac{2}{x} - \frac{1}{\sqrt[3]{x}}} \quad ; \quad h(x) = xe^{\frac{2x}{x^2 - 1}} \quad ; \quad k(x) = \frac{\sin(x)}{e^{\cos(2x)}}$$

2) Déterminer les primitives des fonctions définies par les expressions suivantes :

$$u(x) = \left(4 - \frac{1}{\sqrt{x}}\right)e^{2x - \sqrt{x}} \quad ; \quad v(x) = -\frac{\ln^2 x}{x}e^{(\ln x)^2} \quad ; \quad w(x) = \frac{e^{\frac{\sin x}{1 + \cos x}}}{1 + \cos x}$$

#### 1.5. LIMITES FONDAMENTALES
> **Proposition 7.**
• On a les limites fondamentales suivantes :

$$\lim_{x \to +\infty} e^x = +\infty \quad ; \quad \lim_{x \to -\infty} e^x = 0 \quad ; \quad \lim_{x \to +\infty} \frac{e^x}{x} = +\infty \quad ; \quad \lim_{x \to -\infty} xe^x = 0 \quad ; \quad \lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

• Si $a$ est un réel non nul alors : $\lim_{x \to 0} \frac{e^{ax} - 1}{x} = a$ et $\lim_{x \to a} \frac{e^x - e^a}{x - a} = e^a$

> **Preuve.**
Tous ces résultats se déduisent des limites de la fonction logarithme népérienne.

Les résultats $\lim_{x \to 0} \frac{e^{ax} - 1}{x} = a$ et $\lim_{x \to a} \frac{e^x - e^a}{x - a} = e^a$ peuvent être démontrés en utilisant le nombre dérivé.

On a : $$\lim_{x \to 0^+} \frac{e^{x^2}}{x} = \lim_{x \to 0^+} \frac{e^{x^2}}{\sqrt[3]{x}} \times \frac{1}{\sqrt[3]{x^2}} = +\infty$$ car $$\lim_{x \to 0^-} \frac{e^{x^2}}{x} = \lim_{x \to 0^+} \frac{e^{x^2}}{1} = 1$$ et $$\lim_{x \to 0^+} \frac{x}{\sqrt[3]{x^2}} = 0^\circ$$.

$$\lim_{x \to 0} \frac{e^{x \cdot x} - 1}{x} = 1 \times 1 = 1.$$

On a : $$\lim_{x \to 0} \frac{e^{x \cdot x} - 1}{x} = \lim_{x \to 0} \frac{e^{x \cdot x} - 1}{\sin x} \times \frac{\sin x}{x}$$. Puisque $$\lim_{x \to 0} \frac{e^{x \cdot x} - 1}{\sin x} = \lim_{t \to 0} \frac{e^{t} - 1}{t} = 1$$ et $$\lim_{x \to 0} \frac{\sin x}{x} = 1$$ alors :

3) Calculons les limites suivantes : $$\lim_{x \to 0} \frac{e^{x \cdot x} - 1}{x}$$ et $$\lim_{x \to 0^+} \frac{e^{x^2} - 1}{x}$$

On a en posant $$t = \sqrt{|x|}$$ : $$\lim_{x \to -\infty} x^3 e^{-x^2} = \lim_{t \to +\infty} (-t^{10} e^{-t}) = 0$$

2) Calculons la limite $$\lim_{x \to -\infty} x^5 e^{-x^2}$$ :

$$\lim_{x \to -\infty} (x^3 - x^2 + 5x)e^x = \lim_{x \to -\infty} (x^3 e^x - x^2 e^x + 5x e^x) = 0$$ car : $$\lim_{x \to -\infty} x^3 e^x = \lim_{x \to -\infty} x^2 e^x = \lim_{x \to -\infty} x e^x = 0$$

Car : $$\lim_{x \to +\infty} \frac{e^x}{x^2} = +\infty$$ et $$\lim_{x \to +\infty} \frac{3}{x} = \lim_{x \to +\infty} \frac{4}{x^2} = 0$$

$$\lim_{x \to +\infty} \frac{e^x}{x^2 + 3x + 4} = \lim_{x \to +\infty} \frac{e^x}{x^2 \left(1 + \frac{3}{x} + \frac{4}{x^2}\right)} = \lim_{x \to +\infty} \frac{e^x}{x^2} \times \frac{1}{1 + \frac{3}{x} + \frac{4}{x^2}} = +\infty$$

1) Calculons les limites suivantes : $$\lim_{x \to +\infty} \frac{e^x}{x^2 + 3x + 4}$$ et $$\lim_{x \to -\infty} (x^3 - x^2 + 5x)e^x$$

> **Exemples.**
Puisque $$\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty$$ alors $$\lim_{x \to +\infty} \frac{X^n}{e^x} = 0$$. Par suite : $$\lim_{x \to -\infty} x^n e^x = 0$$

On a : $$\lim_{x \to -\infty} x^n e^x = \lim_{x \to +\infty} (-X)^n e^{-x} = \lim_{x \to +\infty} \frac{(-1)^n X^n}{e^x}$$ (Ici on a posé $$X = -x$$)

Puisque $$\lim_{t \to +\infty} \frac{e^t}{t} = +\infty$$, alors $$\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty$$. De plus, on a aussi : $$\lim_{x \to +\infty} x^n e^{-x} = \lim_{x \to +\infty} \frac{x^n}{e^x} = 0$$

$$\lim_{x \to +\infty} \frac{e^x}{x^n} = \left(\frac{e^x}{x}\right)^n$$, et donc : $$\frac{e^x}{x^n} = \frac{1}{n^n} \left(\frac{\frac{x}{n}}{\frac{x}{n}}\right)^n$$. En posant $$t = \frac{x}{n}$$ on obtient : $$\lim_{x \to +\infty} \frac{e^x}{x^n} = \lim_{t \to +\infty} \frac{1}{n^n} \left(\frac{e^x}{t}\right)^n$$

On a pour tout $$x \in \mathbb{R}^*$$ :

> **Preuve.**
#### 5

#### FORMALISANCE FONDAMENTALES

> **Proposition 10.**
Soit $a$ un réel strictement positif et différent de $l$. Alors :

\(\left(\forall x\in \mathbb{R}\right)\left(\forall y\in \mathbb{R}_{+}^{*}\right)\quad y = a^{*}\Leftrightarrow x = \frac{\lny}{\ln a}\)
\(\left(\forall x\in \mathbb{R}\right)\log_a\left(a^*\right) = x\) et \(\left(\forall x\in \mathbb{R}_{+}^{*}\right)a^{\log_{a}(x)} = x\)
Pour tout \((x,y)\in \mathbb{R}^2\) .. \(a^{x + y} = a^x\times a^x\) et \(a^{x - y} = \frac{a^x}{a^x}\)

> **Remarque.**
Dans ce paragraphe, on a supposé que $a > 0$ et $a \neq 1$, et après avoir prolongé l'écriture $\exp_a$ sous la forme d'une puissance de $a$, on a obtenu : $(\forall x \in \mathbb{R}) a^x = e^{x \ln a}$

Le fait que $e^0 = 1$ nous conduit à poser « par convention » : $1^x = 1$ pour tout $x \in \mathbb{R}$

On a donc : $(\forall a \in \mathbb{R}_+^*) (\forall x \in \mathbb{R}) a^x = e^{x \ln a}$

> **Proposition 11.**
Soit $a$ et $b$ deux réels strictement positifs. Alors, pour tout $(x, y) \in \mathbb{R}^2$ :

$$a^{x+y} = a^x \times a^y \quad ; \quad a^{-y} = \frac{1}{a^y} \quad ; \quad a^{x-y} = \frac{a^x}{a^y} \quad ; \quad (a^x)^y = a^{xy} \quad ; \quad (ab)^y = a^x.b^x \quad ; \quad \left(\frac{a}{b}\right)^x = \frac{a^x}{b^x}$$

> **Exemples.**
1) Résolvons dans $\mathbb{R}$ l'équation suivante : $5^x = 15$

Cette équation s'écrit $e^{x \ln 5} = 15$, ce qui est équivaut à $x \ln 5 = \ln 15$, c'est-à-dire à $x = \frac{\ln 15}{\ln 5}$.

Par suite, l'ensemble des solutions de cette équation est : $S = \left\{ \frac{\ln 15}{\ln 5} \right\}$

2) Soit $a$ un réel de l'intervalle $]1; +\infty[$, et soit $x$ et $y$ deux réels strictement positifs.

Simplifions les expressions suivantes : $\alpha = a^{\frac{\log(\log a)}{\log a}}$ et $\beta = \log_a \left( \log_a a^{a^*} \right)$ et $\lambda = \frac{x^{\log_a(x)}}{y^{\log_a(x)}}$

Pour $\alpha$ : $\alpha = a^{\frac{\log(\log a)}{\log a}} = a^{\log_a(\log a)} = \log a$

Pour $\beta$ : $\beta = \log_a \left( \log_a a^{a^*} \right) = \log_a \left( a^a \right) = a \log_a (a) = a$

Pour $\lambda$ : $\lambda = \frac{x^{\log_a(x)}}{y^{\log_a(x)}} = \frac{e^{\frac{\ln(x) \ln(x)}{\ln(a)}}}{e^{\frac{\ln(x) \ln(x)}{\ln(a)}}} = 1$

2) Résolvons dans $\mathbb{R}$ l'inéquation : $3^{2s} \geq 5^{1-s}$
Cette inéquation est équivalente à $2x \ln 3 \geq (1-x) \ln 5$, c'est-à-dire que $(2 \ln 3 + \ln 5)x \geq \ln 5$. Par suite,
l'ensemble solution de cette inéquation est : $S = \left[ \frac{\ln 5}{2 \ln 3 + \ln 5}; +\infty \right]$
3) Résolvons dans $\mathbb{R}$ l'inéquation : $7^{s+1} - 7^{-s} < 6$
Cette inéquation est équivalente à $7.7^s - \frac{1}{7^s} - 6 < 0$, c'est-à-dire à $7.7^{2s} - 6.7^s - 1 < 0$. Or, on sait que
pour tout $t \in \mathbb{R}$, $7t^2 - 6t - 1 = (7t + 1)(t - 1)$. il s'ensuit donc que l'inéquation $7.7^{2s} - 6.7^s - 1 < 0$ est
équivalente à $(7^{s+1} + 1)(7^s - 1) < 0$, c'est-à-dire que $7^s < 1$ (ceci car $7^{s+1} + 1 > 0$). Ainsi, l'ensemble
solution de cette inéquation est : $S = \mathbb{R}^s$.

> **Applications.**
Applications
1) Resoudre dans \(\mathbb{R}\) les equations suivantes: \(-5\times 4^{r + 1} + 2\times 4^{-r} = 3\) \(3^{r} - 5\sqrt{3^{r}} +4 = 0\) \(9^{2r + 1} = \frac{36}{6^r}\) \(16^r -3^{2r - \frac{1}{2}} = 3^{2r - \frac{1}{2}} - 2^{4r - 1}\)
2) Resoudre dans \(\mathbb{R}\) l'inéquation suivante: \(\log 2 + \log (4^{r - 2} + 9)\leq 1 + \log (2^{r - 2} + 1)\)
3) Montrer que pour tout \((a,b,c)\in \left(\mathbb{R}_{+}^{r}\right)^{3}:a^{\frac{\ln b}{c}}.b^{\frac{\ln c}{a}}.c^{\frac{\ln a}{b}} = 1\)

### 2. Fonction exponentielle de base $a$

> **Note d'édition.** Le titre de la section 2 et les paragraphes 2.1 à 2.3 ne sont pas lisibles dans l'extraction des pages sources 210 et 211.

#### 2.4. ÉTUDE DE LA FONCTION $\exp_a$
> **Proposition 12.**
La fonction $\exp_a$ est dérivable sur $\mathbb{R}$ et on a pour tout $x \in \mathbb{R}$ : $(\exp_a)'(x) = (a^x)' = (\ln a)a^x$

> **Exemples.**
Calculons la dérivée de chacune des fonctions définies par :

$$f(x) = 4^x + 4^{-4x} \quad ; \quad g(x) = 5^{\sqrt{x+1}} \quad ; \quad h(x) = 2^{\frac{x}{x^2+1}}$$

La fonction \(f\) est derivable sur \(\mathbb{R}\) et on a: \((\forall x\in \mathbb{R})f^{\prime}(x) = 4^{x}.\ln 4 - 4\times 4^{-4x}\ln 4 = (4^{x} - 4^{-4x + 1})\ln 4\)
On a pour tout \(x\in [-1, + \infty [\cdot ,g(x) = e^{\sqrt{x + 1}\ln (5)}.\) Donc la fonction \(g\) est derivable sur \([-1; + \infty [\) et on a

$$\text{pour tout } x \in ]-1; +\infty[ : \quad g'(x) = \left(e^{\sqrt{x+1} \ln(5)}\right)' = \left(\sqrt{x+1} \ln(5)\right)' e^{\sqrt{x+1} \ln(5)} = \frac{\ln 5}{2\sqrt{x+1}}.5^{\sqrt{x+1}}$$

• On a pour tout $x \in \mathbb{R}$, $h(x) = e^{\frac{x}{x^2+1} \ln(2)}$. Donc la fonction $h$ est dérivable sur $\mathbb{R}$ et on a pour tout $x \in \mathbb{R}$ :

$$h'(x) = \left(e^{\frac{x}{x^2+1} \ln(2)}\right)' = \left(\frac{x}{x^2+1} \ln(2)\right)' e^{\frac{x}{x^2+1} \ln(2)} = \frac{(1-x^2) \ln 2}{(x^2+1)^2}.2^{\frac{x}{x^2+1}}$$

> **Proposition 13.**
• Si $a > 1$ alors la fonction $x \mapsto a^x$ est strictement croissante sur $\mathbb{R}$ :

$$\left(\forall (x, y) \in \mathbb{R}^2\right) \quad x < y \Leftrightarrow a^x < a^y$$

• Si $0 < a < 1$ alors la fonction $x \mapsto a^x$ est strictement décroissante sur $\mathbb{R}$ :

$$\left(\forall (x, y) \in \mathbb{R}^2\right) \quad x < y \Leftrightarrow a^x > a^y$$

> **Applications.**
1) Déterminer la dérivée de chacune des fonctions définies par :

$$g(x) = \left(\frac{2}{3}\right)^x \quad ; \quad h(x) = \left(3^x + 2^x - 5^x\right)^k \quad ; \quad k(x) = 5^{\sqrt{x^2 + x + 1}}$$

2) On considère la fonction $f$ définie sur $]0, +\infty[$ par : $f(x) = 2^x + 2^{\frac{6}{x}}$

a)-Calculer \(f^{\prime}(x)\) puis monrer que \(f\) est strictement decroissant sur \(\left]0;\sqrt{6}\right]\) et strictement croissant sur \(\left[\sqrt{6};+\infty\right]\).
b)-En déduire que l'équation \( f(x) = 12 \) admet une solution unique sur \( ]0; +\infty[ \) que l'on déterminera.

> **Proposition 14.**
- Si \( a > 1 \) alors: \( \lim_{x \to +\infty} a^x = +\infty \) et \( \lim_{x \to -\infty} a^x = 0 \).
- Si \( 0 < a < 1 \) alors: \( \lim_{x \to +\infty} a^x = 0 \) et \( \lim_{x \to -\infty} a^x = +\infty \)

> **Exemples.**
$$\lim_{x \to +\infty} \left(\frac{\pi}{3}\right)^x = +\infty \quad ; \quad \lim_{x \to -\infty} \left(\frac{\pi}{3}\right)^x = 0 \quad ; \quad \lim_{x \to +\infty} \left(\frac{1 + \sqrt{2}}{3}\right)^x = 0 \quad ; \quad \lim_{x \to +\infty} \left(\frac{1 + \sqrt{2}}{3}\right)^x = +\infty$$

$$\lim_{x \to +\infty} \left(3^x - e^x\right) = \lim_{x \to +\infty} 3^x \left(1 - \left(\frac{e}{3}\right)^x\right) = +\infty \quad \text{car : } \lim_{x \to +\infty} 3^x = +\infty \text{ et } \lim_{x \to +\infty} \left(\frac{e}{3}\right)^x = 0$$

> **Application.**
On considère la fonction numérique définie par : $f(x) = 4^x - 2^{x+1}$

1) Determiner \(D_{f}\) le domaine de definition de la fonction \(f\).
2) Calculer les limites de la fonction \( f \) aux bornes du domaine de définition.
3) Etudier les variations de la fonction \( f \).
4) Ecrire l'equation de la tangente à la courbe \(\mathcal{C}_f\) de \(f\) au point d'abscisse 0.
5) Construire la courbe \(\mathcal{C}_f\) dans un repere orthonorme.

> **Solution.**
1) Calcul des limites :

- \(\lim_{x \to +\infty} \left( x^3 + 5x^2 - e^x \right) = \lim_{x \to +\infty} e^x \left( x^3 e^{-x} + 5x^2 e^{-x} - 1 \right) = -\infty\) (car \(\lim_{x \to +\infty} x^3 e^{-x} = \lim_{x \to +\infty} x^2 e^{-x} = 0\))
- \(\lim_{x \to +\infty} \frac{x^3}{e^x - 1} = \lim_{x \to +\infty} \frac{x^3}{e^x (1 - e^{-x})} = \lim_{x \to +\infty} \frac{x^3}{e^x} \times \frac{1}{1 - e^{-x}} = 0\) (car \(\lim_{x \to +\infty} \frac{x^3}{e^x} = 0\) et \(\lim_{x \to +\infty} \frac{1}{1 - e^{-x}} = 1\))
- \(\lim_{x \to +\infty} \frac{1}{x^2} e^{\frac{1}{x^2}} = 0\) (car \(\lim_{x \to +\infty} \frac{1}{x^2} = 0\) et \(\lim_{x \to +\infty} e^{-\frac{1}{x^2}} = e^0 = 1\))
- \(\lim_{x \to +\infty} \frac{x^5}{5^x} = \lim_{x \to +\infty} e^{\ln \left( \frac{x^5}{5^x} \right)} = \lim_{x \to +\infty} e^{5 \ln x - x \ln 5} = \lim_{x \to +\infty} e^{x \left( 5 \frac{\ln x}{x} - \ln 5 \right)} = 0\) (car \(\lim_{x \to +\infty} \frac{\ln x}{x} = 0\))
- \(\lim_{x \to 0^+} (1 + x)^{\frac{1}{x}} = \lim_{x \to 0^+} e^{\frac{\ln(1 + x)}{x}} = e^1 = e\) (car \(\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1\))

2) a) On a immédiatement : $$\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} x^x = \lim_{x \to +\infty} e^{x \ln x} = +\infty$$ car $$\lim_{x \to +\infty} x \ln x = +\infty$$.

b) Continuité de $$f$$ sur $$]0; +\infty[$$ :

On a pour tout $$x \in ]0; +\infty[$$, $$f(x) = e^{x \ln x}$$. Puisque les fonctions $$x \mapsto x$$ et $$x \mapsto \ln x$$ sont continues sur $$]0; +\infty[$$ alors $$x \mapsto x \ln x$$ est continue sur $$]0; +\infty[$$ en tant que produit de deux fonctions continues sur cet intervalle. Il s'ensuit que $$x \mapsto e^{x \ln x}$$ (c'est-à-dire $$f$$) est continue sur $$]0; +\infty[$$.

Continuité de $$f$$ sur $$]-\infty; 0[$$ :

Les fonctions $$x \mapsto x$$ et $$x \mapsto e^x$$ sont continues sur $$]-\infty; 0[$$ ; il en résulte que la fonction $$x \mapsto xe^x$$ est

continuée sur $$]0; +\infty[$$ en tant que produit de deux fonctions continues sur cet intervalle. Il s'ensuit que

## Méthodes

la fonction $f$ est continue sur $]-\infty; 0[$ en tant que quotient de deux fonctions continues sur cet interval

à dénominateur ne s'annulant pas. Conclusion : $f$ est continue sur $]0; +\infty[$ et sur $]-\infty; 0[$.

c) Etudions la continuité de $f$ au point $x_0 = 0$ :

On a $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} x^x = \lim_{x \to 0^+} e^{x \ln x} = e^0 = 1 = f(0)$ (car $\lim_{x \to 0^+} x \ln x = 0$)

Il s'ensuit que la fonction $f$ est continue à droite en $0$.

On a $\lim_{x \to 0} f(x) = \lim_{x \to 0} \frac{x e^x}{1 - e^x} = \lim_{x \to 0} -\frac{x}{e^x - 1} \times e^x = -1 \times 1 = -1$ (car $\lim_{x \to 0} \frac{e^x - 1}{x} = 1$)

Puisque $\lim_{x \to 0^+} f(x) \neq f(0)$ alors la fonction $f$ n'est pas continue à gauche en $0$.

Conclusion : La fonction $f$ n'est pas continue en $x_0 = 0$.

- On retiendra que si $a$ et $b$ sont deux réels strictement positifs :

\(a^{f(x)} = b^{g(x)}\Leftrightarrow \exp \left(f(x)\ln a\right) = \exp \left(g(x)\ln b\right)\Leftrightarrow f(x)\ln a = g(x)\ln b\)
- Des que l'on rencontres une expression du type \( X^{Y} \) avec \( Y \) non entier alors on commence par écrire \( X^{Y} = e^{Y\ln X} \) (définition d'une puissance réelle), ce qui montre que cette écriture n'a un sens que pour \( X > 0 \).
Pour tout \(m\in \mathbb{R}^*\) , on a I'equivalence suivante: \(e^x = m\Leftrightarrow x = \ln m\)
- Soit \(\alpha\) un réel strictement positif et \(\beta\) un réel quelconque. Il faut savoir et savoir démontré les résultats suivants, très utiles en pratique :

\(\lim_{x \to +\infty} \frac{(\ln x)^{\beta}}{x^{\alpha}} = 0\) \(\lim_{x \to +\infty} \frac{e^{\alpha x}}{x^{\beta}} = +\infty\) \(\lim_{x \to 0^{\alpha}} x^{\alpha} |\ln x|^{\beta} = 0\)
\(\mathrm{Si}a\in ]1, + \infty [\mathrm{alors}:\lim_{x\to +\infty}\frac{a^x}{x^{\alpha}} = +\infty\) et \(\lim_{x\to -\infty}|x|^{\alpha}a^{x} = 0\)
\(\mathrm{Si}a\in ]0,1[\mathrm{alors}:\lim_{x\to +\infty}x^{\alpha}a^{x} = 0\) et \(\lim_{x\to -\infty}\frac{a^x}{|x|^{\alpha}} = +\infty\)

On retiendra ces formules en disant que, lorsqu'il s'agit d'une forme indéterminée :

La puissance l'emporte sur le logarithme

L'exponentielle l'emporte sur la puissance

- Si \(\lim_{x \to x_0} u(x) = 0\) alors \(\lim_{x \to x_0} \frac{e^{u(x)} - 1}{u(x)} = 1\). En pratique, on pose \(t = u(x)\) et la limite devient: \(\lim_{t \to 0} \frac{e^t - 1}{t} = 1\)
- Parfois un changement de variable simple permet d'aboutir à une limite de reférence. Par exemple,

pour calculer $\lim_{x \to +\infty} x \left( e^{\frac{1}{x}} - 1 \right)$, on pourra poser $t = \frac{1}{x}$ et donc : $\lim_{x \to +\infty} x \left( e^{\frac{1}{x}} - 1 \right) = \lim_{t \to 0} \frac{e^t - 1}{t} = 1$

- Il faut savoir et savoir démontrer quelques inégalités classiques relatives aux fonctions $x \mapsto \exp x$ et $x \mapsto \ln x$. A titre d'exemple : $(\forall x \in \mathbb{R}) e^x \geq x + 1$ ; $(\forall x \in \mathbb{R}^*)$ $\ln x \leq x - 1$ ; ...

### Étude d'une fonction à un paramètre
Sait n ∈ N*. On note f_n la fonction définie sur R par: f_n(x) = xe^{-n/x} si x ≠ 0 et f_n(0) = 0
1) a) Montrer que f_n est continue à droite en 0.
b) Montrer que f_n est dérivable à droite en 0 puis interpréter le résultat obtenu.
2) Calculer les limites suivantes : lim_{x→0} f_n(x) ; lim_{x→+∞} f_n(x) ; lim_{x→+∞} f_n(x) ; lim_{x→+∞} (f_n(x) - x)
3) a) Justifier brièvement que f_n est dérivable sur ]-∞; 0[ et ]0; +∞[.
b) Calculer f'_n(x) pour tout x ∈ R^*.
c) Dresser le tableau complet de variations de f_n.

> **Solution.**
1) a) Montrons que la fonction f_n est continue à droite en 0 :

On a : lim_{x→0'} f_n(x) = lim_{x→0'} xe^{-n/x} = 0 car lim_{x→0'} x = 0 et lim_{x→0'} (-n/x) = -∞ et lim_{x→+∞} e^x = 0.

Puisque lim_{x→0'} f_n(x) = 0 = f_n(0) alors f_n est continue à droite en 0.

b) Montrons que la fonction f_n est dérivable à droite en 0 :

On a : lim_{x→0'} (f_n(x) - f_n(0)) / x = lim_{x→0'} e^{-n/x} = 0

D'où la fonction f_n est dérivable à droite en 0 et de plus (f_n)'_d(0) = 0.

Interprétation : La courbe représentative C_f de f admet une tangente horizontale à droite au point O.

2) Calcul des limites :

lim_{x→0'} f_n(x) = lim_{x→0'} xe^{-n/x} = lim_{x→0'} (e^{-n/x}) / (-n) = lim_{x→+∞} (e^x / x) × (-n) = -∞ (on a posé X = -n/x)

lim_{x→+∞} f_n(x) = lim_{x→+∞} xe^{-n/x} = -∞ car lim_{x→+∞} x = -∞ et lim_{x→+∞} e^{-n/x} = e^0 = 1

lim_{x→+∞} f_n(x) = lim_{x→+∞} xe^{-n/x} = +∞ car lim_{x→+∞} x = +∞ et lim_{x→+∞} e^{-n/x} = e^0 = 1

lim_{x→+∞} (f_n(x) - x) = lim_{x→+∞} (xe^{-n/x} - x) = lim_{x→+∞} x(e^{-n/x} - 1) = lim_{x→+∞} (e^{-n/x} - 1) / (-n/x) × (-n) = lim_{x→0} (e^x - 1 / x) × (-n) = -n

Résumé : lim_{x→0} f_n(x) = -∞ ; lim_{x→+∞} f_n(x) = -∞ ; lim_{x→+∞} f_n(x) = +∞ ; lim_{x→+∞} (f_n(x) - x) = -n

3) a) La fonction x ↦ -n est une fonction rationnelle donc dérivable sur ]-∞; 0[ et sur ]0; +∞[. Par conséquent,

la fonction $x \mapsto \exp\left(-\frac{n}{x}\right)$ est dérivable sur $]-\infty; 0[$ et sur $]0; +\infty[$. La fonction $f_n$ est donc dérivable sur $]-\infty, 0[$ et sur $]0, +\infty[$ comme produit de deux fonctions dérivables sur $]-\infty; 0[$ et $]0; +\infty[$.
b) On a immédiatement, pour tout $x \in \mathbb{R}^* : f_n'(x) = \left(xe^{-\frac{n}{x}}\right)' = e^{-\frac{n}{x}} + \frac{n}{x^2}e^{-\frac{n}{x}} = \left(1 + \frac{n}{x^2}\right)e^{-\frac{n}{x}}$
c) Tableau de variations de $f_n$ :

|  x | -∞ | 0 | +∞  |
| --- | --- | --- | --- |
|  f_n'(x) | + | 0 | +  |
|  f_n(x) | -∞ | +∞ | 0  |

### Étude d'une fonction numérique
Soit $f$ la fonction numérique définie sur $\mathbb{R}^*$ par : $f(0) = 1$ et $f(x) = \frac{x}{e^x - 1}$ si $x > 0$
$\mathcal{C}_f$ sa courbe représentative dans un repère orthonormé $(O; \vec{i}, \vec{j})$.

1) a) Montrer que la fonction $f$ est continue sur $\mathbb{R}^*$.

b) Calculer $f'(x)$ pour tout $x \in \mathbb{R}^*$.

2) a) Montrer que pour tout $x \in \mathbb{R}^* : \frac{x^2}{2} \le e^x - 1 - x \le \frac{x^2}{2}e^x$

b) En déduire que $f$ est dérivable à droite en 0 et que $f_d'(0) = -\frac{1}{2}$.

3) On considère la fonction $g$ définie sur $\mathbb{R}^*$ par : $g(x) = xe^x - 2e^x + x + 2$

a) Étudier les variations de la fonction $g$ puis en déduire que pour tout $x \in \mathbb{R}^*$, $g(x) > 0$.

b) Montrer que pour tout $x \in \mathbb{R}^* : f''(x) = \frac{e^x g(x)}{\left(e^x - 1\right)^3}$.

Que peut-on en déduire sur la concavité de la courbe $\mathcal{C}_f$ ?

c) Calculer $\lim_{x \to +\infty} f(x)$ puis dresser le tableau complet de variations de la fonction $f$.

d) Construire la courbe $\mathcal{C}_f$.

4) On considère maintenant la suite numérique $(u_n)$ définie par : $u_0 = 0$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$.
a) Vérifier que pour tout $x \in \mathbb{R}^* : 0 \le f(x) \le 1$

> **Solution.**
1) a) Puisque les fonctions $x \mapsto x$ et $x \mapsto e^x - 1$ sont continues sur $\mathbb{R}^*$, alors la fonction $f$ est continue sur $\mathbb{R}^*$, en tant que quotient de deux fonctions continues sur cet intervalle.

On a au point $x_0 = 0 : \lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{x}{e^x - 1} = 1 = f(0)$. Donc $f$ est continue à droite en 0

Conclusion : La fonction $f$ est continue sur $\mathbb{R}^*$.

b) La fonction $f$ est dérivable sur $\mathbb{R}^*$, et on a pour tout $x \in \mathbb{R}^* : f'(x) = \left(\frac{x}{e^x - 1}\right)^x = \frac{e^x - 1 - xe^x}{(e^x - 1)^2}$

2) a) Montrer que pour tout $x \in \mathbb{R}^* : \frac{x^2}{2} \le e^x - 1 - x \le \frac{x^2}{2} e^x$.

On pose pour tout $x \in \mathbb{R}^* : u(x) = e^x - 1 - x - \frac{x^2}{2}$ et $v(x) = \frac{x^2}{2} e^x - e^x + 1 + x$

Les deux fonctions $u$ et $v$ sont deux fois dérivables sur $\mathbb{R}^*$ et de plus, on a pour tout $x \in \mathbb{R}^*$ :

$$u'(x) = e^x - 1 - x \quad , \quad u''(x) = e^x - 1 \quad , \quad v'(x) = xe^x - \frac{x^2}{2} e^x - e^x + 1 \quad , \quad v''(x) = xe^x + xe^x + \frac{x^2}{2} e^x$$

On a pour tout $x \in \mathbb{R}^*$, $u''(x) \ge 0$ et $v''(x) \ge 0$, il s'ensuit donc que les fonctions $u'$ et $v'$ sont croissantes sur $\mathbb{R}^*$. Ainsi, pour tout $x \in \mathbb{R}^*$, $u'(x) \ge u'(0)$ et $v'(x) \ge v'(0)$, c'est-à-dire que $u'(x) \ge 0$ et $v'(x) \ge 0$. Les fonctions $u$ et $v$ sont alors croissantes sur $\mathbb{R}^*$, d'où pour tout $x \in \mathbb{R}^*$, $u(x) \ge u(0)$ et $v(x) \ge v(0)$, c'est-à-dire que $u(x) \ge 0$ et $v(x) \ge 0$. En résumé : pour tout $x \in \mathbb{R}^*$, $\frac{x^2}{2} \le e^x - 1 - x \le \frac{x^2}{2} e^x$

b) On a d'après la question précédente, pour tout $x \in \mathbb{R}^* : \frac{x}{2} \le \frac{e^x - 1}{x} - 1 \le \frac{x}{2} e^x$

Or : $\frac{f(x) - f(0)}{x} = \frac{\frac{x}{e^x - 1} - 1}{x} = \frac{x - e^x + 1}{x(e^x - 1)}$ pour tout $x \in \mathbb{R}^*$. Il s'ensuit donc que pour tout $x \in \mathbb{R}^*$ :

$$-\frac{e^x}{2} \times \frac{x}{e^x - 1} \le \frac{f(x) - f(0)}{x} \le -\frac{1}{2} \times \frac{x}{e^x - 1}$$

Puisque $\lim_{x \to 0^+} -\frac{e^x}{2} \times \frac{x}{e^x - 1} = \lim_{x \to 0^+} -\frac{1}{2} \times \frac{x}{e^x - 1} = -\frac{1}{2}$ (car $\lim_{x \to 0^+} \frac{x}{e^x - 1} = 1$) alors $\lim_{x \to 0^+} \frac{f(x) - f(0)}{x} = -\frac{1}{2}$

Par suite, la fonction $f$ est dérivable à droite en 0 et $f'_d(0) = -\frac{1}{2}$.

3) On considère la fonction $g$ définie sur $\mathbb{R}^*$ par : $g(x) = xe^x - 2e^x + x + 2$

a) La fonction $g$ est deux fois dérivable sur $\mathbb{R}^*$ en tant que somme des fonctions deux fois dérivables sur cet intervalle. De plus, on a pour tout $x \in \mathbb{R}^*$ : $g'(x) = xe^x - e^x + 1$ et $g''(x) = xe^x$.

Puisque $g''$ est positive sur $\mathbb{R}^*$ alors la fonction $g'$ est croissante sur $\mathbb{R}^*$, et donc $g'(x) \ge g'(0) = 0$ pour tout $x \in \mathbb{R}^*$. Ainsi, la fonction $g$ est strictement croissante sur $\mathbb{R}^*$.

Comme $g$ est strictement croissante sur $\mathbb{R}^*$, alors $g(x) > g(0)$ pour tout $x \in \mathbb{R}^*$. Autrement dit, pour tout $x \in \mathbb{R}^*$, $g(x) > 0$.

b) On a pour tout $x \in \mathbb{R}^*$ :

$$f''(x) = (f'(x))^t = \left( \frac{e^x - 1 - xe^x}{(e^x - 1)^2} \right)^t = \frac{(-xe^x)(e^x - 1)^2 - 2e^x(e^x - 1 - xe^x)(e^x - 1)}{(e^x - 1)^4}$$

D'où : $f''(x) = \frac{(-xe^x)(e^x - 1) - 2e^x(e^x - 1 - xe^x)}{(e^x - 1)^3} = \frac{e^x}{(e^x - 1)^3}(xe^x - 2e^x + x + 2) = \frac{e^x g(x)}{(e^x - 1)^3}$

Par suite : pour tout $x \in \mathbb{R}^* : f''(x) = \frac{e^x g(x)}{(e^x - 1)^3}$.

D'après la question précédente, on a pour tout $x \in \mathbb{R}^*$, $f''(x) > 0$. La courbe $\mathcal{C}_f$ est convexe.

c) On a : $\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{x}{e^x - 1} = \lim_{x \to +\infty} \frac{1}{\frac{e^x}{x} - \frac{1}{x}} = 0$ car $\lim_{x \to +\infty} \frac{e^x}{x} = +\infty$ et $\lim_{x \to +\infty} \frac{1}{x} = 0$.

Remarquons ensuite que pour tout $x \in \mathbb{R}^*$, $f'(x) = -\frac{g'(x)}{(e^x - 1)^2}$. Comme $g'(x) > 0$ pour tout $x \in \mathbb{R}^*$,

alors $f'(x) < 0$, et la fonction $f$ est alors strictement décroissante sur $\mathbb{R}^*$.

Tableau de variations de la fonction $f$ :

|  x | 0 | +∞  |
| --- | --- | --- |
|  f'(x) | -  |   |
|  f(x) | 1 | → 0  |

théorèmes des limites et encadrement, on en déduit que la suite $u_n$ est convergente et que $\lim_{n \to \infty} u_n = \ln 2$.

$n \in \mathbb{N}, |u_n - \ln 2| \le \left(\frac{1}{2}\right)^n \ln 2$ (à faire). Puisque $\frac{1}{2} \le ]-1; 1[$ alors $\lim_{n \to \infty} \left(\frac{1}{2}\right)^n \ln 2 = 0$ et donc, d'après les

d) De l'inégalité $|u_{n+1} - \ln 2| \le \frac{1}{2} |u_n - \ln 2|$, valable pour tout $n \in \mathbb{N}$, on montre par récurrence que pour tout

c'est-à-dire que pour tout $n \in \mathbb{N}: |u_{n+1} - \ln 2| \le \frac{1}{2} |u_n - \ln 2|$

et $\ln 2 \le [0; 1]$ alors, d'après l'inégalité des accroissements finis: $|f(u_n) - f(\ln 2)| \le \frac{1}{2} |u_n - \ln 2|$

on a $f$ est continue sur $[0; 1]$, dérivable sur $]0; 1[$ et pour tout $x \in ]0; 1[, |f'(x)| \le \frac{1}{2}$. Puisque $u_n \in [0; 1]$

On a donc pour tout $n \in \mathbb{N}: u_n \in [0; 1]$.

d'après la question 4) a), $u_n \in [0; 1]$ entraîne que $f(u_n) \in [0; 1]$, c'est-à-dire que $u_{n+1} \in [0; 1]$.

On a bien $u_0 \in [0, 1]$. Supposons que $u_n \in [0; 1]$ et montrons que $u_{n+1} \in [0; 1]$.

Montrons d'abord que pour tout $n \in \mathbb{N}: u_n \in [0; 1]$

c) Montrer que pour tout $n \in \mathbb{N}, |u_{n+1} - \ln 2| \le \frac{1}{2} |u_n - \ln 2|$:

Donc, l'ensemble des solutions de l'équation $f(x) = x$ est $S = \{\ln 2\}$.

b) On a pour tout $x \in \mathbb{R}^n: f(x) = x \Leftrightarrow \frac{x}{e^x - 1} = x \Leftrightarrow e^x - 1 = 1 \Leftrightarrow e^x = 2 \Leftrightarrow x = \ln 2$

Par conséquent, pour tout $x \in \mathbb{R}^n: 0 \le f(x) \le 1$

4) On considère maintenant la suite numérique $(u_n)$ définie par: $u_0 = 0$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$.

d) La courbe $\mathcal{C}_f$:

## Exercices

### Exercices d'application

### SIMPLIFICATION DES EXPRESSIONS
#### Exercice 01
Simplifier les expressions suivantes :

$$a_1 = e^{\ln 13} \quad ; \quad a_2 = e^{4 \ln 5} \quad ; \quad a_3 = e^{-\ln 7}$$

$$b_1 = e^{\frac{1}{3} \ln 27} \quad ; \quad b_2 = e^{\frac{1}{2} \ln 4} \quad ; \quad b_3 = e^{\ln 3 - \ln 5}$$

$$c_1 = \frac{e^{\ln 216}}{e^{3 \ln 6}} \quad ; \quad c_2 = \frac{e^{8 + \ln 7}}{e^{9 + \ln 14}} \quad ; \quad c_3 = -e^{-\ln \frac{1}{3}}$$

#### Exercice 02
Simplifier les écritures des nombres suivantes :

$$A_1 = \ln(e^{-5}) \quad ; \quad A_2 = \ln\left(\frac{1}{e^7}\right) \quad ; \quad A_3 = \ln\left(\sqrt{e^{-\ln(e^5)}}\right)$$

$$A_4 = \ln\left(\sqrt{e^5}\right) - \ln\left(\sqrt{e^4}\right) \quad ; \quad A_5 = \exp\left(-\frac{1}{5} \ln(e^{-5})\right)$$

#### Exercice 03
Si on a $$X = 3\left(e^{-7 + \ln(10^5)} - 1\right)$$ alors a-t-on l'égalité :

$$\ln X = \ln 3 + \ln(1000 - e^7) - 7$$

#### Exercice 04
Simplifier les expressions suivantes :

$$\begin{array}{l} A = \left(e^x\right)^2 \left(e^{-3x}\right)^2 \quad ; \quad B = \frac{e^{4x+5}}{e^{4x-3}} \quad ; \quad C = \frac{e^{3x} + e^{-2x}}{e^{-x}} \\ D = \frac{e^{2x} \sqrt{e^{x+2}}}{e^{1,2x} \sqrt{e^{2x}}} \quad ; \quad E = \ln(1 + e^{2x}) - \ln(1 + e^{-2x}) \\ F = e^{\ln(x+1)} - e^{\ln x} \quad ; \quad G = \sqrt[3]{e^{4x}} \left(\sqrt[3]{e^x}\right)^2 \end{array}$$

#### Exercice 05
Montrer que pour tout $$x \in \mathbb{R}$$ :

$$\left(e^{-2x} - e^x\right)\left(1 + e^{3x}\right) = \left(e^{-3x} + 1\right)\left(1 - e^{3x}\right)e^x$$

$$\ln\left(e^{2x} + e^x + 1\right) = 2x + \ln\left(e^{-2x} + e^{-x} + 1\right)$$

#### Exercice 06
1) Montrer que pour tout $$x \in \mathbb{R}^*$$ :

$$e^{\ln(3x+1)} - \ln\left(5e^{3x}\right) - \ln\left(\frac{1}{5}\right) = 1$$

2) Montrer que : $$(\forall t \in \mathbb{R}) \frac{1}{e^{-2t} + 1} = \frac{1}{2} - \frac{1 - e^{t}}{2(1 + e^{t})}$$

On considère la fonction $$f$$ définie par :

$$f(x) = e^{-\ln(2x)} - \ln\left(e^{\frac{2x+1}{2x}}\right)$$

1) Determiner \(D\), le domaine de definition de \(f\).
2) Montrer que \(f\) est constante sur \(D\).

#### Exercice 07
Soit $$f$$ et $$g$$ les fonctions définies sur $$\mathbb{R}$$ par : ($$a \in \mathbb{R}^*$$)

$$f(x) = \frac{e^{ax} - 1}{e^{ax} + 1} \quad \text{et} \quad g(x) = \sqrt{e^{ax}} - e^{\frac{ax}{2}}$$

Montrer que les fonctions $$f$$ et $$g$$ sont impaires.

### ÉQUATIONS - INÉQUATIONS - SYSTÈMES
#### Exercice 08
Résoudre dans $$\mathbb{R}$$ les équations suivantes :

$$\begin{array}{l} e^{x-1} = 3 \quad ; \quad e^{x-4} = e \quad ; \quad e^{2x} = e^{x^2} \quad ; \quad e^{2x} = 1 \\ e^{(x-1)(x-2)} = 1 \quad ; \quad e^{x^2 - 3x} = \frac{1}{e^2} \quad ; \quad e^{x^2} = \frac{1}{16} \quad ; \quad (e^{x})^2 = \frac{1}{16} \end{array}$$

#### Exercice 09
Résoudre dans $$\mathbb{R}$$ les équations suivantes :

$$e^{2x+3} = \sqrt{e} \quad ; \quad (e^x - 1)(e^x - 3) = 0 \quad ; \quad e^x = \sqrt{e^{x-3}}$$

$$\sqrt[3]{e} \times e^{2x} = (e^{x^3})^9 \quad ; \quad e^{-2x} e^{x+\ln 3} = e^{2x - \ln 8} \quad ; \quad e^{\frac{2x-1}{e^{x-3}}} = 0$$

$$\sqrt{1 - e^{-2x}} = \frac{1}{2} \quad ; \quad \frac{e^{-x} - 7}{e^{-x} + 7} = 2 \quad ; \quad e^{\frac{1}{e^{x}} - 6} = 81$$

#### PARCH (DESTINATION)

#### Exercice 15
Résoudre dans R les équations suivantes :

$$e^{2x} + e^{x} - 12 = 0 \quad ; \quad 3e^x + 4e^{-x} = 7$$

$$e^{4x} - 3e^{2x} - 4 = 0 \quad ; \quad e^{x-2} + e^{3-x} = 1 + e$$

$$e^{4x+3x} + e^{3x+2x} = 0 \quad ; \quad e^{\frac{3}{2}x} - 3e^x + 3e^{\frac{4}{2}} - 2 = 0$$

$$\frac{2e^x - 1}{e^x - 2} = \frac{-2}{1 + e^{-x}} \quad ; \quad (e^x + e^{-x})^3 + (e^x - e^{-x})^2 = 7e^x$$

#### Exercice 16
Résoudre dans R les équations suivantes :

$$e^{x} - (e^{x'})^2 = e^x \quad ; \quad e^{3x} - 2e^{2x} - e^{x'} + 2 = 0$$

$$e^{\frac{4x}{2e^{x'}} - 2e^{\frac{4x}{2e^{x'}} - 2e^{\frac{2x}{2e^{x'}} - 2e^{\frac{2x}{2e^{x'}}}}} + 2} \quad ; \quad e^{\frac{2}{x}} + e^{\frac{1}{x}} - 6 = 0$$

#### Exercice 17
Résoudre dans R les équations suivantes :

$$10^{2e^x} = 100 \quad ; \quad 10^{x-2} = 5 \quad ; \quad 7^x = 21 \quad ; \quad 5^{-x} = 3$$

$$2^{2e^{x-2}} = 11 \quad ; \quad (1, 2)^{x-3} = e \quad ; \quad 7^x = (\sqrt{7})^{3e^{x-2}}$$

$$3^{x-1} - 3^{x-2} = 12\sqrt{3} \quad ; \quad 2^{2x-1} + 3^x + 4^{x-\frac{1}{2}} - 9^{\frac{2}{2}} = 0$$

#### Exercice 18
Résoudre dans R les inéquations suivantes :

$$e^{2x} < 1 \quad ; \quad e^{x'} \geq -3 \quad ; \quad e^{\frac{4}{3}} < e^{x'} \quad ; \quad e^{3x-1} > \sqrt[3]{e^{x'}}$$

$$3 \leq 4 - e^{x'} \quad ; \quad e^{x'-x'} > e^{x'} \quad ; \quad e^{-4x' + 2x} \geq 1$$

$$e^{2x - 2x'} \geq \frac{1}{e^{x'}} \quad ; \quad \frac{1}{e^{2x}} \leq \frac{3}{e^{2x'}} \quad ; \quad (e^x)^2 > e^{x'}$$

#### Exercice 19
Résoudre dans R les inéquations suivantes :

$$\ln(4 - e^x) \geq 2 \quad ; \quad (e^x + 1)(e^x - 5) > 0 \quad ; \quad e^x - \frac{9}{e^x} < 0$$

$$\frac{2 - 3e^{x-x}}{1 - 3e^{x-x}} < \frac{1}{2} \quad ; \quad e^{\frac{4x}{2e^{x-2}}} \geq 2 \quad ; \quad \frac{e^{\frac{4}{3}x}}{e^{\frac{4}{3} - \frac{1}{2}}} \geq e^{-2}$$

$$(e^x - 2)(e^x - 4) < 0 \quad ; \quad -1 < e^{2x} - 1 < 1$$

#### Exercice 16a
Résoudre dans R les inéquations suivantes :

$$7e^{2x} - 4e^x - 3 > 0 \quad ; \quad e^{3x} - 6e^{2x} + 3e^x \leq 0$$

$$1 - 2e^x \leq 2e^x(1 - 2e^x) \quad ; \quad \frac{e^x - 1}{e^x + 1} + 1 > 0$$

$$e^{2x} + e^{2(\ln(2)-x)} \leq 5 \quad ; \quad e^{2x} - e^{x+2} - e^{2-x} + 1 \leq 0$$

#### Exercice 17
Résoudre dans R² les systèmes suivants :

$$\begin{cases} e^{x-y} = 12e^{-2} \\ e^{x+y} = \frac{4}{3} \end{cases} \quad ; \quad \begin{cases} e^x + e^{-x+1} = e + 1 \\ e^{x-1} + e^{-x} = 2 \end{cases}$$

$$\begin{cases} 2e^{x+2} - e^x = 15 \\ e^x + e^y = 20 \end{cases} \quad ; \quad \begin{cases} e^{2x+1} = 7e^y - 10 \\ 2(x-y) + 1 = 0 \end{cases}$$

$$\begin{cases} x + y = 1 \\ 3e^{x-3} - e^{x-2} = 2 \end{cases} \quad ; \quad \begin{cases} 4e^{-x} + 3e^{-x} = 1 \\ 3e^{x-y} = 4 \end{cases}$$

### CALCUL DES LIMITES
#### Exercice 18
Calculer les limites suivantes :

$$\lim_{x \to +\infty} (e^{2x} - e^{3x} + e^x) \quad ; \quad \lim_{x \to -\infty} (e^{2x} - e^{3x}) \quad ; \quad \lim_{x \to +\infty} (3x - e^x)$$

$$\lim_{x \to -\infty} x(e^{3x} - e^x) \quad ; \quad \lim_{x \to +\infty} x\left(\frac{3}{x} - 1\right) \quad ; \quad \lim_{x \to +\infty} xe^{x^2} - e^{3x} + x^2$$

$$\lim_{x \to -\infty} e^{\frac{x+3}{x-1}} \quad ; \quad \lim_{x \to 0^+} e^{\frac{1-x}{x}} \quad ; \quad \lim_{x \to +\infty} \frac{e^x - 2}{x} \quad ; \quad \lim_{x \to 0^+} \frac{e^{x^2} - 1}{4x}$$

$$\lim_{x \to -\infty} \frac{2e^{x-2x}}{x} \quad ; \quad \lim_{x \to 0} \frac{e^{2x} - 1}{x^2 - x} \quad ; \quad \lim_{x \to +\infty} \frac{e^{-2x} + 1}{e^x + e^{-x}}$$

$$\lim_{x \to +\infty} \frac{e^x - 2}{x^2 + 3} \quad ; \quad \lim_{x \to -\infty} \frac{1 - e^{-x}}{x} \quad ; \quad \lim_{x \to 0^+} \frac{e^x - 1}{\sqrt{x}} \quad ; \quad \lim_{x \to +\infty} \frac{e^x}{\sqrt{x}}$$

$$\lim_{x \to -\infty} \left(x + \frac{1}{x}\right)e^x \quad ; \quad \lim_{x \to +\infty} \frac{e^x - 1}{\sqrt{x}} \quad ; \quad \lim_{x \to +\infty} e^x \ln(1 + e^{-x})$$

$$\lim_{x \to -\infty} x^2\left(\frac{1}{e^x} - e^{\frac{1}{x-1}}\right) \quad ; \quad \lim_{x \to 0^+} (\sin x)e^{\frac{1}{x}} \quad ; \quad \lim_{x \to 0^+} xe^{\frac{1}{\sin x}}$$

### CALCUL DES DÉRIVÉES
#### Exercice 19
Étudier la dérivabilité de la fonction $f$ puis calculer sa dérivée dans chacun des cas suivants :

1) \(f(x) = e^{2x - 1}\) 2) \(f(x) = e^{-3x^2 + 2x - 7}\)
3) \(f(x) = \frac{e^x - 1}{e^x + 1}\); 4) \(f(x) = e^{\sqrt{2x} - 1}\)
5) \(f(x) = \sqrt{e^{2x} - e^x}\); 6) \(f(x) = e^{\cos x} - e^{-\cos x}\)
7) \(f(x) = \ln \left(4 + e^{5x}\right)\) 8) \(f(x) = xe^{\mathrm{Arc}\tan x}\)
9) \(f(x) = xe^{\frac{2x}{x^2 - 1}}\); 10) \(f(x) = \ln \left(\left|e^{2x} - 1\right|\right)\)

### DÉTERMINATION DES PRIMITIVES
#### Exercice 20
Dans chacun des cas suivants, déterminer une primitive de la fonction $f$ sur un intervalle convenable :

1) \(f(x) = e^{-2x + 5}\); 2) \(f(x) = \sqrt{e^{2x}}\)
3) \(f(x) = xe^{x^2 + 1}\); 4) \(f(x) = \frac{e^{2x}}{\sqrt{2e^{2x} + 3}}\)
5) \(f(x) = \frac{e^{-\operatorname{Arc}\tan x}}{1 + x^2}\); 6) \(f(x) = \frac{e^x}{e^x + 1}\)
7) \(f(x) = \cos x.e^{\cos x}\); 8) \(f(x) = \frac{e^{4x} + e^x}{e^{4x} + 4e^x + 3}\)
9) \(f(x) = (1 + \tan^2 x)e^{-\tan x}\); 10) \(f(x) = 2^{x}\)

#### Exercice 21
On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par : $f(x) = e^{2x} \cos x$

1) Montrer qu'il existe deux réels \( \alpha \) et \( \beta \) à déterminer tels que: \( (\forall x \in \mathbb{R}) f(x) - \alpha f'(x) + \beta f''(x) = 0 \)
2) En déduire les primitives de \( f \) sur \( \mathbb{R} \).

### FONCTIONS PUISSANCES
#### Exercice 22
$a$ et $b$ étant deux réels strictement positifs et définitifs de 1. Simplifier les expressions suivantes :

$$A = \frac{\left(\frac{a^2}{b^2}\right)^{1-1.5} \times (b^3)^{1-\frac{1}{3}} \times (a^{1-2})^{2x}}{b^{2x} \times (a^3)^{1-\frac{1}{3}} \times (ab)^{2x}}$$
$$B = \frac{(4a^{-3})^{-\frac{2}{3}}}{(\sqrt[3]{b^{1-2}})^{\frac{3}{2}}} \times \frac{\sqrt[3]{27a^{-\sqrt{2}}} \times \sqrt{b^2}}{2^{2\sqrt{2}} \times a^4}$$
$$C = \frac{a \times a^{\frac{2}{1+\sqrt{2}}} + a^{2\sqrt{2}+1}}{a^{2\sqrt{2}} + \sqrt[3]{a^{1-\sqrt{2}}}}$$

#### Exercice 23
Ecrire sous la forme d'une puissance de $e$ :

$$D = \left(e^{12} \cdot e^{-5+4\sqrt{3}}\right)^{7-4\sqrt{3}} \quad \text{et} \quad E = \left(\frac{e^{4\sqrt{20}}}{e^{1-\sqrt{20}}} \right)^{\sqrt{20}+7}$$

#### Exercice 24
Résoudre dans $\mathbb{R}$ les équations suivantes :

$$3^{x+1} = 5^x \quad ; \quad 2^{\frac{x}{2}+1} = 3^{x-3} \quad ; \quad 2^{x+1} \cdot 3^{x-\frac{1}{2}} = 3\sqrt{2} \cdot 6^{2x}$$
$$\left(\frac{1}{13}\right)^{x^{3-3x}} = 169 \quad ; \quad 7^x = 3^{x^2} \quad ; \quad 9^x - 3^{x+1} - 54 = 0$$
$$5^{2x+2} - 126 \times 5^{x+1} + 125 = 0 \quad ; \quad 4^{x+1} + 2 \times 4^{x-1} = 7$$
$$100^{x-\frac{1}{2}} - 12 \times 10^{x-1} + 2 = 0 \quad ; \quad 7^{x+2} - 7^{x+1} = 6$$
$$100^{2x} - 10^{2x+1} + 9 = 0 \quad ; \quad 2^{2x} - 6^x = 2 \times 3^{2x}$$

#### Exercice 25
Résoudre dans $\mathbb{R}$ les équations suivantes :

$$2 \times 3^{2x+1} + \sqrt{3} \times 3^{x+1} = 2 \quad ; \quad x^{\sqrt{x}} = (\sqrt{x})^3$$
$$4^x - 3^{x-\frac{1}{2}} = 3^{x-\frac{1}{2}} - 2^{2x-1} \quad ; \quad x^{x+1} = x^{\frac{5}{2}}$$
$$2^{2x-1} + 3^x + 4^{x-\frac{1}{2}} - 9^{\frac{x}{2}+1} = 0 \quad ; \quad x^{\sqrt{x}} = (\sqrt{x})^{x-\sqrt{x}}$$

EXERCICE 26

#### Exercice 26
1) Resoudre dans \(\mathbb{R}\) l'équation suivante: \(2^{\sin^2 x} = \cos x\)
2) Soit \( a \) le nombre: \( a = \frac{\sqrt{5} + 1}{\sqrt{5} - 1} \)

Montrer que l'équation $a^{2x} - 3a^x + 1 = 0$ admet deux solutions réels $\alpha$ et $\beta$ telles que : $\alpha\beta = -1$

3) On considère l'équation $(E)$ suivante :

$$(E) : 15 \times 4^x + 8(5^x + 6^x - 7^x) = 0$$

Vérifier que 4 est une solution de $(E)$ puis la résoudre.

#### Exercice 27
Résoudre dans $\mathbb{R}$ les inéquations suivantes :

$$\begin{array}{l} \log(2) + \log(4^{x-1} + 9) \le 1 + \log(2^{x-1} + 1) ; 2^x < \frac{1}{2} \\ \left(2^{\frac{x-1}{2}}\right)^2 - 2^{2x\frac{2}{x}} - 2^{2x\frac{1}{x}} + 2 > 0 ; (\sqrt{7})^x \ge 125 \\ \ln(e^{x^2 - 4} - 6e^{4x^2}) \ge 0 ; \left(\frac{\pi}{2}\right)^x > 3 ; 11^{-x} < 11^{2x} \\ \left(\frac{1}{13}\right)^{4x} \le \frac{5}{4} ; 2^x + 2^{-x} \ge \frac{5}{2} ; 3^{2x} + 3^x - 2 \le 0 \\ (5^x - 2)(3^{x-1} - 9^{x-1} - 18) \le 0 ; \frac{2^x}{2^x + 2^{-x}} < \frac{1}{3} \end{array}$$

#### Exercice 28
Calculer les limites suivantes : $(m \in \mathbb{R}_+^n)$

$$\begin{array}{l} \lim_{x \to \infty} \left(\frac{2}{3}\right)^x ; \lim_{x \to 0} x^{\frac{x}{2}} ; \lim_{x \to 1} \frac{x^{\frac{x}{2}} - 1}{x - 1} ; \lim_{x \to 0} (1 - x)^{\frac{1}{x}} \\ \lim_{x \to \infty} (\tan x)^{\frac{x}{2}} ; \lim_{x \to 0} (x^2)^{\frac{1}{2x^2}} ; \lim_{x \to \infty} x^{\frac{1}{2}} \\ \lim_{x \to 0} \left(\frac{1 + \sin x}{1 + x}\right)^{\frac{1}{x}} ; \lim_{x \to \infty} \left(\frac{4x + 15}{4x + 7}\right)^x ; \lim_{x \to 0} (\cos x)^{\frac{1}{x}} \\ \lim_{x \to \infty} \left(\frac{\ln x}{\ln(x + 1)}\right)^{\frac{1}{x}} ; \lim_{x \to \infty} \left(\frac{x}{x - m}\right)^x \\ \lim_{x \to \infty} \frac{x^x - x}{\ln(1 + \sqrt{x^2 - 1})} ; \lim_{x \to \infty} x \left(\left(m + \frac{1}{x}\right)^{\frac{1}{x}} - 1\right) \end{array}$$

#### Exercice 29
Résoudre dans $\mathbb{R}^2$ les systèmes suivants :

$$\begin{array}{l} \begin{cases} 3^x + 7^x = 16 \\ 3^x - 7^x = 2 \end{cases} ; \begin{cases} 2^{x-2} \cdot 2^{x-1} = 1 \\ 2^x + 2^y = 5\sqrt{2} \end{cases} \\ \begin{cases} 4^x \times 5^x = 5^{2x-1} \\ 20^x + 25^x = 5^{2y-1} \end{cases} ; \begin{cases} 2^{x+y} = 16\sqrt{2} \\ 2^x + 2^{x-y} = 12\sqrt{2} \end{cases} \\ \begin{cases} e^{\frac{x}{x-1}} + e^{\frac{x}{y-1}} = 13 \\ e^{\frac{2x + x - y}{x(1 + 13y + 1)}} = 42 \end{cases} ; \begin{cases} 5^x \cdot 5^{2y} = 25 \\ \log_3 x + \log_3(2y + 3) = 1 \end{cases} \end{array}$$

### ÉTUDE DES FONCTIONS NUMÉRIQUES
#### Exercice 30
Soit $f$ la fonction définie sur $\mathbb{R}$ par : $f(x) = \frac{e^{2x} - 1}{e^{2x} + 1}$

1) Montrer que la fonction \( f \) est impaire.
2) Montrer que: \((\forall x \in \mathbb{R}) f(2x) = \frac{2f(x)}{1 + f^2(x)}\)
3) Montrer que:

$$(\forall (x, y) \in \mathbb{R}^2) f(x+y) = \frac{f(x) + f(y)}{1 + f(x)f(y)}$$

#### Exercice 31
Pour tout entier $n \ge 3$ on considère la fonction $f_n$ définie sur $\mathbb{R}$ par :

$$f_n(x) = \frac{x^n}{e^n - 1} \le x \ne 0 \quad \text{et} \quad f_n(0) = 0$$

1) Montrer que la fonction \( f_{n} \) est continue en 0.
2) Montrer que \( f_{n} \) est dérivable à droite en 0.
3) Calculator la limite: \(\lim_{x\to +x}f_n(x)\)

#### Exercice 32
Soit $a$ un réel strictement positif et différent de 1. Discuter selon les valeurs de réel $a$, le nombre de solutions de l'équation :

$$(E) : a^{(a^2)} = x$$

On considère la fonction $f$ définie sur $\mathbb{R}$ par

$$f(x) = \frac{1}{2}x^2 - x + ce^2$$

1) Calculer les limites: $\lim_{x \to \infty} f(x)$ et $\lim_{x \to \infty} f'(x)$.
2) Montrer que: $(\forall x \in \mathbb{R}) f'(x) = (x-1)(1-e^{-x})$
3) Dresser le tableau de variations de $f$.
4) Traer la courbe $\mathcal{C}_x$ dans un repère orthonormé.

Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x) = \frac{e^x}{\sqrt{1+e^x}}$.

$\mathcal{C}_x$ désigne sa courbe représentative dans un repère orthonormé $(O, i, j)$.

1) a) Calculer $\lim_{x \to \infty} f(x)$, $\lim_{x \to \infty} f'(x)$ et $\lim_{x \to \infty} \frac{f(x)}{x}$.
b) Étudier les branches infinies de la courbe $\mathcal{C}_x$.
2) Justifier que $f$ est dérivable sur $\mathbb{R}$ puis calculer $f'(x)$ pour tout $x \in \mathbb{R}$.
3) Dresser le tableau complet de variation de $f$.
4) Ecrire l'équation de la tangente $\mathcal{T}$ à $\mathcal{C}_x$ au point d'abscisse 0.
5) Traer $\mathcal{T}$ et $\mathcal{C}_x$.

Soit $f$ la fonction définie par $f(x) = (1+e^x)$.

$\mathcal{C}_x$ désigne sa courbe représentative dans un repère orthonormé $(O, i, j)$.

1) Justifier que le domaine de définition de la fonction $f$ est $\mathcal{A} = [-1; 0[ \dots ]0; +\infty[$.
2) a) Calculer les limites aux bornes de $\mathcal{A}$.
b) $f$ est-elle prolongable par continuité en 0 ? En $-1$ ?
3) Justifier soigneusement la continuité de la fonction $f$ en tout point de $\mathcal{A}$.

chacun des intervalles $J = 1; 0[$ et $J0; +\infty[$.

b) Montrer que pour tout $x \in \mathcal{A}$ :

$$f'(x) = \frac{(x+1)^2 \cdot [x - (x+1)\ln(x+1)]}{x^2(x+1)}$$

c) Dresser le tableau de variations de $f$. Traer

La résistance $R$ d'une thermistance varie avec la

température Kelvin $T$ selon la loi : $R(T) = R_0 e^{-t/\tau}$.

Avec : $a = 4 \times 10^3 K$ et $R_1 = 10^3 \Omega$ à $T = 300K$.

1) Déterminer le coefficient de température :

$$k(T) = \frac{1}{R(T)} \frac{dR}{dT}(T) \text{ et le calculer à } 300K.$$

2) Sachant que nous mesurons la résistance avec une précision de $0,1\%$, quelle variation de température pouvons-nous détecter au voisinage de $300K$ ?

(Indication : utiliser la formule que $\Delta T = \left| \frac{1}{k} \right| \frac{\Delta R}{R}$)

1) Soit $u$ la fonction définie sur $\mathbb{R}$ par :

$$u(t) = E\left(1 - e^{-\frac{t}{\tau}}\right) \text{ si } t \ge 0 \text{ et } u(t) = 0 \text{ si } t < 0$$

a) Déterminer l'équation de la demi-tangente à droite en 0 à la courbe $\mathcal{C}_x$.
b) Déterminer les coordonnées du point d'intersection $A$ de cette demi-tangente et de l'asyptome horizontale à $\mathcal{C}_x$.

2) Soit $i$ la fonction définie sur $\mathbb{R}$ par :

$$i(t) = \frac{E}{R} e^{-\frac{t}{\tau}} \text{ si } t \ge 0 \text{ et } i(t) = 0 \text{ si } t < 0$$

a) Donner l'équation de la demi-tangente à droite en 0 à la courbe $\mathcal{C}_x$.
b) Donner les coordonnées du point d'intersection $B$ de cette demi-tangente et l'axe des abscises.

### Exercices de perfectionnement

1. 2. 3. 4. 5. 6. 7. 8. 9. 10. 11. 12. 13. 14. 15. 16. 17. 18. 19. 20. 21. 22. 23. 24. 25. 26. 27. 28. 29. 30. 31. 32. 33. 34. 35. 36. 37. 38. 39. 40. 41. 42. 43. 44. 45. 46. 47. 48. 49. 50. 51. 52. 53. 54. 55. 56. 57. 58. 59. 60. 61. 62. 63. 64. 65. 66. 67. 68. 69. 70. 71. 72. 73. 74. 75. 76. 77. 78. 79. 80. 81. 82. 83. 84. 85. 86. 87. 88. 89. 90. 91. 92. 93. 94. 95. 96. 97. 98. 99.

#### RÈGLIER 9.0

On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$f(x) = \ln(e^{2x} + e^x + 1) - x$$

et soit $\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O, \bar{i}, \bar{j})$.

1) Montrer que pour tout $x \in \mathbb{R}$ :

$$f(x) = \ln(e^x + e^{-x} + 1)$$

et en déduire que la fonction $f$ est paire.

2) Calculer les limites: \(\lim_{x\to +\infty}f(x)\) et \(\lim_{x\to +\infty}f(x)\)
3) Montrer que les droites d'équations \(y = x\) et \(y = -x\) sont des asymptotes à la courbe \(\mathcal{C}\).
4) Etudier les variations de la fonction \( f \).
5) Tracer la courbe \(\mathcal{C}\).
6) Soit \( g \) la fonction définie sur \( \mathbb{R} \) par: \( g(x) = e^{-f(x)} \). Etudier les variations de \( g \) et tracer sa courbe \( \Gamma \).

#### RÈGLIER 10.0

On considère la fonction $f$ définie sur $\mathbb{R}$ par :

$$f(x) = \frac{e^x}{\sqrt{e^{2x} - 2e^x + 2}}$$

et soit $\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O, \bar{i}, \bar{j})$ avec : $\|\bar{i}\| = 3cm$.

1) Calculer les limites: \(\lim_{x\to -\infty}f(x)\) et \(\lim_{x\to +\infty}f(x)\)
2) Etudier les variations de la fonction \( f \).
3) Etudier la position relative de la courbe \(\mathcal{C}\) et de la droite \((\Delta)\) d'équation \(y = 1\)
4) a) Montrer que pour tout \( x \in \mathbb{R} \):

$$f^*(x) = \frac{e^x(e^x - 1)}{(e^{2x} - 2e^x + 2)^{\frac{1}{2}}}((e^x - 1)^2 - 5)$$

b) Étudier la concavité de la courbe $\mathcal{C}$ en déterminant ses points d'inflexion.

5) Tracer la courbe $\mathcal{C}$.

#### RÈGLIER 10.1

On considère la fonction numérique $f$ définie par :

$$f(x) = \sqrt{1 - e^{-2x}}$$

et soit $\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O, \bar{i}, \bar{j})$.

1) Determiner le domaine de definition de \( f \).
2) a) Montrer que pour tout \( x \in D - \{0\} \):

$$\frac{f(x)}{x} = \sqrt{\frac{2}{x}\left(\frac{e^{-2x} - 1}{-2x}\right)}$$

b) Calculer $\lim_{x \to 0^+} \frac{f(x)}{x}$ puis interpréter géométriquement le résultat obtenu.

3) Etudier les variations de la fonction \( f \).
4) Etudier les branches infinies de la courbe \(\mathcal{C}\).
5) Tracer la courbe \(\mathcal{C}\).
6) a) Montrer que pour tout \( x \in D - \{0\} \):

$$f(x) = f'(x)\left(-1 + \frac{1}{2(1+f(x))} + \frac{1}{2(1-f(x))}\right)$$

b) En déduire les primitives de $f$ sur $\mathbb{R}^*$.

#### RÈGLIER 11.1

Soit $f$ la fonction numérique définie sur $\mathbb{R}$ par :

$$f(x) = \frac{2x - 1}{x^2} e^{1 - \frac{1}{x}} \text{ si } x \neq 0 \quad \text{et} \quad f(0) = 0$$

1) a) Etudier la continuite de \( f \) en 0.
b) Montrer que \( f \) est dérivable à droite en 0 puis interpréter géométriequement le résultat obtenu.
2) Etudier les variations de la fonction \( f \).
3) Tracer la courbe \(\mathcal{C}_f\) de \(f\) dans un repere orthonorme.
4) Determiner les reels \(a\) et \(b\) pour que la fonction \(F\)

définie par : $F(x) = \left(a + \frac{b}{x}\right)e^{1 - \frac{1}{x}}$

soit une primitive de la fonction $f$ sur $\mathbb{R}^*$.

A.  \( \left[\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)\left(\frac{1}{2}\right) \)

1) On consider les fonctions \( y \) et \( h \) défilées sur \( \mathbb{R} \) par :

\[
\varepsilon (t) = 1 + t - e ^ {t} \quad \text { et } \quad h (t) = (1 - t) e ^ {t}
\]

1) a) Monter que pour tout \( t \in \mathbb{R} \):

\[
\varepsilon (t) \leq 0 \quad \text {   et   } \quad h (t) <   1
\]

b) En déduire que:  \( \left(\forall i\in\{-\infty,1\}\right)1+i\leq e^{i}\leq\frac{1}{1-i} \)

2) Moniter que:  \( \left(\forall x\in\mathbb{R}^{2}\right)\frac{x}{x-1}\leq x\left(e^{1}-1\right)\leq1 \)

11) On considère la fonction \( f \) définie sur \( \mathbb{R} \) par :

\[
\left\{ \begin{array}{l l} f (x) = x e ^ {\frac {1}{x}} & \text { si } x <   0 \\ f (x) = x \ln (1 + x) & \text { si } x \geq 0 \end{array} \right.
\]

1) Étudier la continuité et la dérivabilité de \( f \) en 0.

2) a) Étudier les variations de la fonction \( f \).

b) Moniter que:  \( \left(\forall x\in\mathbb{R}^{2}\right)\frac{1}{x-1}\leq x^{2}-x-1\leq0 \)

c) En déduire que la courbe \(\mathcal{C}_{\varepsilon}\) de \(f\) admet une asymptote oblique \((\Lambda)\) à déterminer, puis étudier la position relative de \(\mathcal{C}_{\varepsilon}\) et \((\Lambda)\) sur \(\mathbb{R}^{2}\).

5) Étudier l'intersection de la courbe \(\mathcal{C}_{\varepsilon}\) et de la droite \((2): y = x\), puis tracer la courbe \(\mathcal{C}_{\varepsilon}\).

4) a) Montrer que \( f \) admet une fonction réciproque \( f^{-1} \) définie sur un intervalle \( J \) à déterminer.

b) Tracer la courbe de \( f^{-1} \) dans le même repère.

Dans chacun des cas suivants, étudier les variations de la fonction \( u \) puis étudier son signe. Étudier ensuite la fonction \( f \) (les limites et les variations)

1) \( f(x) = e^{-x} + \ln(1 + x) \) et \( u(x) = 1 - (x + 1)e^{-x} \)

2) \( f(x) = \frac{x + 1}{2e^{x} - 1} \) et \( u(x) = 1 + 2xe^{x} \)

3) \( f(x) = \frac{(x - 2)e^x}{e^x + 1} \) et \( u(x) = e^x + x - 1 \)

#### EXHIC 41

Soil \( f \) la fonction définie sur \( [1, +\infty] \) par :

\[
\left\{ \begin{array}{l} f (x) = (\ln x) ^ {x} = e ^ {\frac {1}{x} \ln (\ln x)} \quad \text { si } x > 1 \\ f (1) = 0 \end{array} \right.
\]

1) Calculer la limite:  \( \lim_{x\to\infty}f(x) \)

2) Montrer que \( f \) est continue sur \( [1, +\infty] \).

3) Déterminer la limite:  \( \lim_{h\to0}\frac{f(1+h)-f(1)}{h} \)

f est-elle dérivable à droite en zéro ? Justifier.

4) a) Étudier les variations de la fonction \(\varphi\) définie sur \([1, +\infty]\) par: \(\varphi(x) = 1 + \ln(x)\ln(\ln x)\)

b) En déduire que \( f \) est croissante sur \( [1, +\infty[ \).

5) a) Montrer que pour tout \( x \in [1, +\infty] \):

\[
\ln \left(\frac {f (x)}{x}\right) = x \ln (\ln x) - \ln (x)
\]

b) Calculer:  \( \lim_{x\to\infty}\left(x\ln(\ln x)-\ln(x)\right) \)

c) En déduire que:  \( \lim_{x\to\infty}\frac{f(x)}{x}=+\infty \)

6) Tracer la courbe de \( f \) dans un repère orthonormé.

#### 2.1.1.1

Montrer que:  \( \lim_{x\to\infty}\left(e^{x+1}-e^{x}\right)^{\frac{1}{x}}=e \)

#### 2.1.1.2

Pour tout \( n \in \mathbb{N}^+ \), on considère la fonction \( f_n \) définie sur \( \mathbb{R} \) par: \( f_n(x) = xe^x - n \)

1) Montrer que \( f_{n} \) est strictement croissante sur l'intervalle \( [-1, +\infty[ \).

2) Montrer que l'équation \( f_n(x) = 0 \) admet une solution unique \( u_n \) dans l'intervalle \( [0, +\infty[ \).

3) Montrer que \( (u_{n})_{n\geq 1} \) est strictement décroissant.

4) Montrer que pour tout entier \( n \geq 3 \): \( \ln(n) - \ln(\ln n) \leq u_n \leq \ln(n) \)

5) Determiner alors la limite:  \( \lim_{n\to\infty}\frac{u_{n}}{n} \)

EXERCICE 47
Soit $f$ la fonction définie sur $\mathbb{R}^*$ par : $f(x) = \frac{e^x}{x}$
1) Étudier la fonction $f$ : (limites et variations)
2) a) Étudier les branches infinies de la courbe $\mathcal{C}_f$.
b) Tracer la courbe $\mathcal{C}_f$ dans un repère orthonormé.
3) Soit $(u_n)$ la suite numérique définie par :
$u_0 = 1$ et $u_{n+1} = u_n^2 f(u_n) = u_n e^{-u_n}$ si $n \in \mathbb{N}$
a) Montrer que : $(\forall x \in \mathbb{R}) \, e^x \geq x + 1$
b) En déduire que : $(\forall x \in \mathbb{R}^*)$ $x^2 f(x) \leq \frac{x}{1+x}$
4) Montrer que : $(\forall n \in \mathbb{N}) \, 0 < u_n \leq \frac{1}{n+1}$
5) Soit $n \in \mathbb{N}^*$. On pose : $v_n = \sum_{k=0}^{n-1} u_k = u_0 + \dots + u_{n-k}$
a) Montrer que : $(\forall n \in \mathbb{N}^*)$ $v_n = -\ln(u_n)$
b) Déterminer les limites des suites $(u_n)$ et $(v_n)$.
EXERCICE 48
A) Soit $f$ la fonction définie par : $f(x) = 2e^x - 2 - xe^x$
1) Étudier les variations de la fonction $f$ sur $\mathbb{R}$.
2) Montrer que l'équation $f(x) = 0$ admet deux solutions dans $\mathbb{R}$ dont une $\alpha$ telle que $1,5 < \alpha < 1,6$.
B) Soit $(u_n)$ la suite numérique définie par :
$u_0 = \frac{3}{2}$ et $u_{n+1} = 2 - 2e^{-u_n}$ pour tout $n \in \mathbb{N}$.
1) On pose pour tout $x \in \left[\frac{3}{2}; 2\right]$ : $g(x) = 2 - 2e^{-x}$
a) Étudier les variations de $g$ puis justifier que :
$g(I) \subset I$ et $|g'(x)| \leq \frac{1}{2}$ pour tout $x \in I$
b) Montrer que pour tout $n \in \mathbb{N}$, $u_n \in I$.
c) Montrer que $(u_n)$ est croissante et en déduire qu'elle est convergente, et que $\lim_{n \to \infty} u_n = \alpha$.
2) a) Montrer que : $(\forall n \in \mathbb{N}) |u_{n+1} - \alpha| \leq \frac{1}{2} |u_n - \alpha|$
b) Retrouver encore une fois que : $\lim_{n \to \infty} u_n = \alpha$.

EXERCICE 49
Soit $(u_n)_{n \geq 1}$ la suite numérique définie par :
$u_1 = 1 + \frac{1}{e}$ et $u_{n+1} = u_n \left(1 + \frac{1}{e^{n+1}}\right) \quad (\forall n \in \mathbb{N}^*)$
1) Montrer que pour tout $x \in \mathbb{R}$ :
$e^{-x} - \frac{e^{-2x}}{2} < \ln(1+e^{-x}) < e^{-x}$
2) a) Montrer que $(u_n)_{n \geq 1}$ est strictement croissante.
b) Montrer que : $(\forall n \in \mathbb{N}^*)$ $\ln u_n = \sum_{k=1}^{n} \ln(1+e^{-k})$
c) On pose pour tout $n \in \mathbb{N}^*$ :
$R_n = \frac{1}{e} + \frac{1}{e^2} + \dots + \frac{1}{e^n}$ et $S_n = \frac{1}{e} + \frac{1}{e^2} + \dots + \frac{1}{e^{2n}}$
En utilisant les résultats de la question 1) et 2)b),
Montrer que : $R_n - \frac{1}{2} S_n < \ln(u_n) < R_n$
3) a) Soit $a$ un réel de l'intervalle $]\!|_1 \to \infty[$.
Calculer la somme : $T_n = \frac{1}{a} + \frac{1}{a^2} + \dots + \frac{1}{a^n}$
puis déterminer la limite : $\lim_{n \to \infty} T_n$
b) Montrer que la suite $(u_n)_{n \geq 1}$ est majorée et en déduire qu'elle est convergente. On note $\ell$ sa limite.
c) Montrer que : $e^{\frac{2e^{-\ell}}{2(e^{\ell}-1)}} \leq \ell \leq e^{\frac{1}{2e^{-\ell}}}$

EXERCISE D'ACTION

#### EXERCISE

Pour tout $n \in \mathbb{N}^*$, on considère la fonction $f_n$ définie sur $\mathbb{R}$ par : $f_n(x) = xe^x - nx$

Première Partie : On considère la fonction $g_n$ définie sur $\mathbb{R}$ par : $g_n(x) = (x+1)e^x - n$

1) Etudier les variations de la fonction \( g_{n} \).
2) a) Montrer qu'il existe un unique réel \( \alpha_{n} \) tel que

$g_n(\alpha_n) = 0$ et que $0 \le \alpha_n \le \ln(n)$.

b) Justifier l'égalité: \(\alpha_{n} = \ln \left(\frac{n}{1 + \alpha_{n}}\right)\)
3) a) Montrer que: \((\forall x \in \mathbb{R}^*) \ln x \leq x - 1\)
b) En déduire que: \((\forall n \in \mathbb{N}^*) \frac{1}{2} \ln(n) \leq \alpha_n\)
c) Determiner les limites: \(\lim_{n\to \infty}\alpha_n\) et \(\lim_{n\to \infty}\frac{\alpha_n}{n}\)

Deuxième Partie : Soit $\mathcal{C}_n$ la courbe représentative de $f_n$ dans un repère orthonormé $(O; \bar{i}, \bar{j})$.

1) a) Etudier les variations de la fonction \( f_{n} \).
b) Montrer que: \(f_{n}(\alpha_{n}) = -\frac{n\alpha_{n}^{2}}{1 + \alpha_{n}}\)
2) Montrer que la courbe \(\mathcal{C}_n\) admet une asymptote oblique \(D_{n}\) qu'on déterminera.
3) Etudier la position relative de la courbe \(\mathcal{C}_n\) et de l'axe des abscisses.
4) Etudier la position relative des courbes \(\mathcal{C}_n\) et \(\mathcal{C}_{n + 1}\)
5) a) Montrer que \(\frac{7}{20} \leq \alpha_{2} \leq \frac{2}{5}\) puis en déduire un encadrement de \(f_{2}(\alpha_{2})\).
b) Construire \(\mathcal{C}_1\) et \(\mathcal{C}_2\) dans un même repere.

#### EXERCISE

A) Soit $u$ et $v$ les fonctions définies sur $\mathbb{R}$ par :

$u(x) = 1 + x + \frac{x^2}{2} - e^x$ et $v(x) = 1 + x - \left(1 - \frac{x^2}{2}\right)e^x$

1) a) Étudier les variations de la fonction $u'$ et en déduire son signe.

b) Étudier les variations de la fonction $u$ sur $\mathbb{R}$

2) a) Etudier les variations de la fonction \( v' \) et en déduire que: \( (\forall x \in \mathbb{R}) \, v'(x) \geq 0 \)
b) Etudier les variations de la fonction \(\mathbf{v}\) sur \(\mathbb{R}\)
3) Deduire de ce qui precede que:

$\left(\forall x \in \mathbb{R}^*\right) \frac{x^2}{2}e^x \le e^x - 1 - x \le \frac{x^2}{2}$
$\left(\forall x \in \mathbb{R}^*\right) \frac{x^2}{2} \le e^x - 1 - x \le \frac{x^2}{2}e^x$

4) Soit $f$ la fonction numérique définie sur $\mathbb{R}$ par :

$\begin{cases} f(x) = \frac{e^x - 1 - x}{x^2} - \frac{1}{2} \text{ si } x = 0 \\ f(0) = 0 \end{cases}$

a) Montrer que \(f\) est continue sur \(\mathbb{R}\)
b) En déduire que pour tout \(x \in \mathbb{R}\):

$e^x = 1 + x + \frac{x^2}{2} + x^2 f(x)$ avec $\lim_{x \to 0} f(x) = 0$

B) Soit $g$ la fonction numérique définie sur $\mathbb{R}$ par :

$g(x) = \frac{e^x - 1}{x} \text{ si } x \neq 0 \text{ et } g(0) = 1$

$\mathcal{C}_n$ désigne sa courbe représentative dans un repère orthonormé $(O; \bar{i}, \bar{j})$.

1) Montrer que \( g \) est dérivable en 0 et préciser \( g'(0) \).
2) Etudier les branches infinies de la courbe \(\mathcal{C}_g\)
3) Etudier les variations de la fonction \( g \) et dresser sur tableau de variations.
4) Tracer la courbe \(\mathcal{C}_g\)
C) Soit \( h \) la fonction définie par: \( h(x) = \sqrt{e^x - 1 - x} \).

1) Determiner \(D_{h}\) le domaine de definition de \(h\)
2) Etudier la derivabilité de \( h \) en 0.
D) Soit \(F\) la fonction définie sur \(\big] - 1; + \infty [\) par:

$F(t) = \frac{\ln(1+t)}{t} \text{ si } t \neq 0 \text{ et } F(0) = 1$

En utilisant le résultat de A)4), montrer que $F$ est dérivable en 0 et déterminer $F'(0)$.

**Partie A.**
1) Soit $g$ la fonction définie par : $g(x) = \frac{x-1}{x} - \ln|x|$

a) Etudier les variations de la fonction \( g \).
b) Montrer qu'il existe un reel negatif unique \(\alpha\) tel que \(g(\alpha) = 0\)
c) En déduire le signe de \( g(x) \).

2) Soit $h$ la fonction numérique définie sur $]1, +\infty[$

par : $h(x) = \frac{1}{x(x-1)} - \frac{\ln(x)}{(x-1)^2} = \frac{g(x)}{(x-1)^2}$

a) Montrer que \( h'(x) = \frac{u(x)}{(x - 1)^1} \) ou \( u \) est une fonction définie sur \( ]1; +\infty[ \).
b) Etudier les variations de la fonction \( u \) et en déduire le signe de \( u(x) \) et celui de \( h'(x) \) sur \( ]1; +\infty[ \).

**Partie B.**
Soit $f$ la fonction numérique définie par :

$$f(x) = |x|^{\frac{1}{x-1}}$$

1) Determiner \(D_{f}\) le domaine de definition de \(f\) et les limites de \(f\) aux bornes de \(D_{f}\).
2) Montrer que \( f \) est prolongable par continuité en \( x_0 = 1 \) et donner son prolongement.
3) Etudier les variations de \( f \) sur \( D_{f} \).
4) Construire la courbe représentative de \( f \) dans un repère orthonormé \( (O, \vec{i}, \vec{j}) \) (unité \( 2cm \)).

(On donne $\alpha \approx -3, 6$)

5) Montrer qu'il existe un unique réel $\ell \ge \frac{3}{2}$ tel que $f(\ell) = \ell$.

**Partie C.**
On considère maintenant la suite $(u_n)$ définie par :

$$u_0 = 4 \text{ et } u_{n+1} = f(u_n) \text{ avec } n \in \mathbb{N}.$$

1) Montrer qu'il existe un réel $q \in ]0; 1[$ tel que :

$$\left( \forall x \ge \frac{3}{2} \right) |f'(x)| \le q$$

2) Montrer que: \((\forall n \in \mathbb{N}) |u_{n+1} - \ell| \le q |u_n - \ell|\)
3) Determiner \(\lim_{n\to \infty}u_n\)

#### Exercice 54
Etudier puis représenter les fonctions suivantes :

$$\begin{array}{l} f: \begin{cases} f(x) = \frac{1}{x^2} e^{-\frac{1}{x}}, & x \ne 0 \\ f(0) = 0 \end{cases} \\ g: \begin{cases} g(x) = e^{x^2 \ln|x|}, & x \ne 0 \\ g(0) = 1 \end{cases} \\ h: \begin{cases} h(x) = \left| 1 + \frac{1}{x} \right|^x, & x \in \mathbb{R} - \{0; -1\} \\ h(0) = 1 \end{cases} \end{array}$$

#### Exercice 55
On considère les fonctions numériques $f$, $g$ et $h$ définies sur $\mathbb{R} - \{1; -1\}$ par :

$$\begin{array}{l} f(x) = -x + \frac{1}{2} \ln \left| \frac{x+1}{x-1} \right| : \quad g(x) = \frac{x^3}{3(1-x^2)} \\ h(x) = f(x) - g(x) \end{array}$$

1) a) Dresser le tableau des variations de \( f \) et \( g \).
b) Etudier le signe de \( h(x) \) sur \( ] - 1; 1[ \).
2) Soit \( n \in \mathbb{N}^* \). Exprimer en fonction \( n \):

$$(2n+1)f\left(\frac{1}{2n+1}\right) \text{ et } (2n+1)g\left(\frac{1}{2n+1}\right)$$

3) On considère les suites numériques $(u_n)_{n \ge 1}$ et $(v_n)_{n \ge 1}$

définies par : $u_n = \frac{n^{\frac{2n+1}{n}}}{n!} e^{-n}$ et $v_n = u_n e^{-\frac{1}{12n}}$

Montrer que les suites $(u_n)_{n \ge 1}$ et $(v_n)_{n \ge 1}$ sont adjacentes.

## Problèmes de synthèse

### Se préparer aux devoirs

1) Calculer les limites suivantes :

$$\lim_{x \to \infty} \frac{e^{x^2} - \cos x}{x^2} ; \lim_{x \to \infty} \frac{e^{x^2} - 1}{\cos x - 1} ; \lim_{x \to \infty} \frac{2^x - 2}{x - 1}$$
$$\lim_{x \to \infty} (\ln(1 + x))^x ; \lim_{x \to \infty} \frac{x^{\ln x}}{(\ln x)^x} ; \lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x$$
$$\lim_{x \to \infty} (\cos x + \sin x)^{\frac{1}{x}} ; \lim_{x \to \infty} (\cos x)^{\frac{1}{\ln x}}$$

2) Soit \(\alpha \in \mathbb{R}^*\). Etudier les variations des fonctions \(f_{\alpha}\) définies sur \(]0; +\alpha[\) par: \(f_{\alpha}(x) = (1 + x^{\alpha})^{\frac{1}{\alpha}}\)
3) Montrer que: \((\forall x \in \mathbb{R}_{+}^{*})\left(1 + \frac{1}{x}\right)^{x} < e < \left(1 + \frac{1}{x}\right)^{x + 1}\)
4) Soit \( f \) la fonction définie par: \( f(x) = e^{x + 1} \sin x \). Montrer que pour tout \( n \in \mathbb{N} \):

$$f^{(n)}(x) = 2^n e^{x + 1} \sin\left(x + \frac{n\pi}{6}\right)$$

5) A l'aide du théorème des accroissements finis, déterminer la limite : $$\lim_{x \to \infty} x^2 \left( e^{\frac{1}{x+1}} - e^{\frac{1}{x}} \right)$$

6) Les molécules d'un gaz enfermé dans un récipient à la température T sont animées d'une vitesse de v cm.s⁻¹. Cet état d'équilibre est caractérisé par la fonction de distribution de vitesse de Maxwell-

Boltzmann : $$F(v) = cv^2 \exp\left(-\frac{mv^2}{2kT}\right)$$

Où T est la température (en Kelvin), m la masse d'une molécule et c et k des constantes strictement positives. Montrer que la valeur maximale de F a

lieu en $$v = \sqrt{\frac{2kT}{m}}$$.

Soit \(f\) la fonction definie sur \(\mathbb{R}\) par: \(f(x) = e^{\frac{1}{x}}\)
1) a) Etudier les variations de la fonction \( f \).
b) En déduire que: \( f([0,1]) \subset [0,1] \).
2) Montrer que: \((\forall x \in [0,1]) |f'(x)| \leq \frac{1}{2}\).
3) On considere la suite numérique \(u_{0} = 0\) et \(u_{n + 1} = f(u_n)\) pour tout \(n\in \mathbb{N}\)
a) Montrer que: \((\forall n\in \mathbb{N})u_n\in [0,1]\)
b) En utilisant l'inégalité des accroissements fin, monrer que: \((\forall n\in \mathbb{N})|u_{n + 1} - 1|\leq \frac{1}{2} |u_n - 1|\)
c) En déduire que la suite \((u_{n})\) est convergente et déterminant sa limite.

#### Devoir 3
Soit f la fonction définie sur R par : $$f(x) = \frac{x}{e^{x} + 1}$$

1) a) Montrer que \( f \) est paire.
b) Etudier les variations de \( f \) et tracer l'allure de sa courbe.
c) Montrer qu'il existe un unique reel positif tel que \( f(\ell) = \ell \), puis justifier que \( 0 \leq \ell \leq \frac{1}{2} \).
d) Montrer que pour tout \(x \in \mathbb{R}^*\): \(|f'(x)| \leq \frac{1}{2}\).

2) On considère la suite numérique (uₙ) définie par :

$$u_0 = 0 \text{ et } u_{n+1} = f(u_n)$$

a) Montrer que pour tout \(n\in \mathbb{N}\) .. \(u_{n}\in \left[0,\frac{1}{2}\right]\)
b) Montrer que pour tout \(n\in \mathbb{N}\)

$$|u_{n+1} - \ell| \leq \frac{1}{2} |u_n - \ell|$$

c) En déduire que la suite (uₙ) est convergente et déterminer sa limite.

#### Devoir 4
**Partie I:** On considère la fonction $g$ définie par :

$$g(t) = \frac{t}{t+1} - \ln(1+t)$$

On note $\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O; \vec{i}, \vec{j})$.

1) Donner \(\mathfrak{D}_k\), l'ensemble de definition de \(g\).
2) Montrer que \(\lim_{t\to +1}g(t) = -\infty\) .Qu'en deduit-on?
3) Etudier la nature de la branche infinie en \(+\infty\)
4) Dresser le tableau complet de variations de \(g\)
5) Preciser le signe de \(g\) sur \(\mathfrak{D}_g\)

**Partie II:** On définit la fonction $f$ sur $\mathbb{R}$ par :

$$f(x) = e^{-x} \ln(1+e^x)$$

1) Justifier que \(f\) est bien definie sur \(\mathbb{R}\)
2) Determiner \(\lim_{x\to +\infty}f(x)\) et \(\lim_{x\to +\infty}f(x)\) puis interpréter géométriequement les résultats obtenus.
3) Montrer que pour tout \(x \in \mathbb{R}\): \(f'(x) = e^{-x} g(e^x)\)
4) En déduire le tableau de variation complet de \( f \).
5) Verifier que pour tout \( x \in \mathbb{R} : 0 \leq f(x) \leq 1 \)
6) On introduit la fonction \( h \) définie sur \( \mathbb{R} \) par:

$$h(x) = f(x) - x$$

a) Montrer que \( h \) est strictement décroissant sur \( \mathbb{R} \).
b) En déduire que l'équation \( h(x) = 0 \) admet une unique solution, que l'on notera \( \alpha \).
c) Verifier que \(\alpha \in [0,1]\)

**Partie III:** On introduit la suite $(u_n)$ définie par :

$$u_0 = 0 \text{ et } u_{n+1} = f(u_n) \text{ pour tout } n \in \mathbb{N}$$

1) Montrer que pour tout \(n\in \mathbb{N}\) .. \(u_{n}\in [0,1]\)
2) Montrer que: \((\forall n\in \mathbb{N})|u_{n + 1} - \alpha |\leq 0,6|u_n - \alpha |\)
3) En déduire que la suite \(\left(u_{n}\right)\) est convergente et déterminer sa limite.

#### Devoir 5
Soit la fonction $f$ définie sur $\mathbb{R}$ par :

$$f(x) = (x^2 + 1)e^{-x}$$

On note $\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O; \vec{i}, \vec{j})$.

1) Etudier les branches infinies de la courbe \(\mathcal{C}\).
2) Montrer que: \((\forall x \in \mathbb{R}) f'(x) = -(1 - x)^2 e^{-x}\)
3) Dresser le tableau de variation de \( f \).
4) Tracer la courbe \(\mathcal{C}\).
5) On considere maintainant la fonction \( h \) définie sur \( \mathbb{R} \) par: \( h(x) = f(x) - x \)

a) Montrer que \( h \) est strictement décroissant sur \( \mathbb{R} \).
b) Etabir que l'équation \( f(x) = x \) admet une unique solution, notée \( \alpha \). Vérifier que \( \alpha \in \left[\frac{1}{2}; 1\right] \).

6) a) Justifier que: \( f\left(\left[\frac{1}{2}; 1\right]\right) \subset \left[\frac{1}{2}; 1\right] \).
b) Montrer que: \(\left(\forall x\in \left[\frac{1}{2};1\right]\right)\left|f^{\prime}(x)\right|\leq \frac{1}{4}\)

7) On considère la suite $(u_n)$ définie par :

$$u_0 = 1 \text{ et } u_{n+1} = f(u_n)$$

a) Montrer que pour tout \(n\in \mathbb{N}\) .. \(u_{n}\in \left[\frac{1}{2};1\right]\)
b) Montrer que: \((\forall n \in \mathbb{N}) |u_{n+1} - \alpha| \leq \frac{1}{2} |u_n - \alpha|\)
c) En déduire que la suite \(\left(u_{n}\right)\) est convergente et déterminer sa limite.

#### Devoir 6
La fonction *cosinus hyperbolique*, notée $\text{ch}$, est définie pour tout $x \in \mathbb{R}$ par : $\text{ch} x = \frac{e^x + e^{-x}}{2}$.

La fonction *sinus hyperbolique*, notée $\text{sh}$, est définie pour tout $x \in \mathbb{R}$ par : $\text{sh} x = \frac{e^x - e^{-x}}{2}$.

1) a) Vérifier que pour tout $x \in \mathbb{R}$ :

$$\operatorname { c h } x + \operatorname { s h } x = e ^ { x } \quad \text { e t } \quad \operatorname { c h } ^ { 2 } x - \operatorname { s h } ^ { 2 } x = 1$$

b) Etudier la parité des fonctions ch et sh.

2) Dresser le tableau de variations de chacune des fonctions ch et sh (aussi les limites en $+\infty$ et $-\infty$)

3) Tracer les graphes des fonctions ch et sh dans un même repère orthonormé $(O; \vec{i}, \vec{j})$.

4) Montrer que la fonction sh admet une fonction réciproque définie sur $\mathbb{R}$.

La fonction réciproque de sh est appelée fonction argument sinus hyperbolique, et est notée Argsh.

5) a) Montrer que pour tout $x \in \mathbb{R}$ :

$$(\operatorname { A r g s h } ) ^ { * } ( x ) = { \frac { 1 } { \sqrt { x ^ { 2 } + 1 } } }$$

b) En déduire que pour tout $x \in \mathbb{R}$ :

$$\operatorname { A r g s h } x = \ln \left( x + { \sqrt { x ^ { 2 } + 1 } } \right)$$

6) Soit $g$ la restriction de la fonction ch sur $[0; +\infty[$. Montrer que la fonction $g$ admet une fonction réciproque définie sur $[1; +\infty[$. La fonction $g$ est appelée fonction argument cosinus hyperbolique, et est notée Argsh.

7) a) Montrer que pour tout $x \in ]1; +\infty[$ :

$$(\operatorname { A r g c h } ) ^ { * } ( x ) = { \frac { 1 } { \sqrt { x ^ { 2 } - 1 } } }$$

b) En déduire que pour tout $x \in [1; +\infty[$ :

$$\operatorname { A r g c h } x = \ln \left( x + { \sqrt { x ^ { 2 } - 1 } } \right)$$

8) On définit la fonction tangente hyperbolique, notée th, par : $\operatorname { t h } x = { \frac { \operatorname { s h } x } { \operatorname { c h } x } }$.

a) Etudier la fonction th (domaine de définition, parité, branches infinies, tableau de variations)

b) On note Argsh la fonction réciproque de la fonction th. Montrer que pour tout $x \in ]-1; 1[$ :

$$\operatorname { A r g t h } x = { \frac { 1 } { 2 } } \ln \left( { \frac { 1 + x } { 1 - x } } \right)$$

Soit la fonction $f$ définie sur $\mathbb{R}$ par : $f(x) = 2x$. On note $^c\mathcal{C}_f$ le graphe de $f$ dans un repère orthonormé $(O; \vec{i}, \vec{j})$ (unité $4cm$).

1) a) Etudier les variations de la fonction $f$. b) Étudier les branches infinies de la courbe $^c\mathcal{C}_f$. c) Tracer la courbe $^c\mathcal{C}_f$.

2) Montrer que $f$ réalise une bijection de $[-1; +\infty[$ sur un ensemble que l'on déterminera. Déterminer les variations de $f^{-1}$ et tracer la représentation graphique de la fonction $f^{-1}$.

3) Montrer qu'il existe un unique réel $\alpha > 0$ tel que $\alpha.e^{\alpha} = 1$. Vérifier que $\alpha \in [0; 1]$.

4) On considère la suite $(u_n)$ définie par $u_n = \alpha$ et pour tout $n \in \mathbb{N}$, $u_{n+1} = f^{-1}(u_n)$.

a) Montrer que : $u_n \in [0, 1]$ existe.

b) Montrer que pour tout $x \in [0; 1]$ : $f(x) \ge x$.

c) En déduire que la suite $(u_n)$ est décroissante.

d) Montrer que la suite $(u_n)$ est convergente et déterminer sa limite.

5) On pose pour tout $n \in \mathbb{N}$ : $S_n = \sum_{k=0}^{n} u_k$

a) Montrer que : $\forall n \in \mathbb{N}, u_{n+1} = \frac{1}{2} u_n e^{-u_{n+1}}$

b) En déduire que pour tout $n \in \mathbb{N}$ : $u_n = \frac{e^{-S_n}}{2^n}$

6) a) Montrer que $n \in \mathbb{N}$ : $u_n \le \left( \frac{1}{2} \right)^n$.

b) En déduire que la suite $(S_n)$ est majorée par $2$.

c) Montrer alors que $(S_n)$ est convergente.

d) On note $L = \lim_{n \to \infty} S_n$. Montrer que : $\alpha \le L \le 2$

### Se préparer aux examens

PROBLÈME 1
1) Pour tout $n \in \mathbb{N}^*$ on considère la fonction $g_n$ définie par :

Et soit $\mathcal{C}_n$ sa courbe représentative dans un repère orthonormé $(O, \bar{i}, \bar{j})$.

1) a) Étudier les variations de la fonction $g_n$.
b) Montrer que $g_n$ admet un minimum absolu en un réel $u_n$ qu'on exprimera en fonction de $n$.

2) a) Calculer les limites : $\lim_{n \to \infty} g_n(x)$ et $\lim_{n \to \infty} g_n(x)$
b) Déterminer les branches infinies de $\mathcal{C}_n$.

3) a) Étudier la position relative des courbes $\mathcal{C}_1$ et $\mathcal{C}_2$.
b) Tracer dans le repère $(O, \bar{i}, \bar{j})$ les courbes $\mathcal{C}_1$ et $\mathcal{C}_2$. (On prend : $\|\bar{i}\| = 2cm$)

4) On pose pour tout $n \in \mathbb{N}^* : v_n = g_n(u_n)$

Montrer que les suites $(u_n)_{n \in \mathbb{N}^*}$ et $(v_n)_{n \in \mathbb{N}^*}$ sont convergentes et déterminer leur limites.

II) On considère la fonction $f_n$ définie sur $\mathbb{R}$ par :
$f_n(x) = x + e^{nx}$

Et soit $\Gamma_n$ sa courbe représentative dans un repère orthonormé $(O, \bar{i}, \bar{j})$.

1) Etudier les variations de la fonction \( f_{n} \).
2) En déduire que l'équation \( f_{n}(x) = 0 \) admet une solution unique \( \alpha_{n} \).
3) a) Montrer que \(\alpha_{1}\in ] - \ln 2; - \frac{1}{2} [\)
b) Montrer que les quantités \((x - \alpha_{1})\) et \((e^{x} + \alpha_{1})\) ont le même signe.
4) On considere la fonction \(\varphi\) definie sur \([- \infty, -\frac{1}{2}]\)

par : $\varphi(x) = e^x - \frac{1}{\sqrt{e}}x$

a) - Montrer que la fonction $\varphi$ est décroissante sur l'intervalle $\left]-\infty; -\frac{1}{2}\right]$.

b) - En déduire que pour tout $x \in \left]-\infty; -\frac{1}{2}\right]$ :

$$|e^x + \alpha_1| \le \frac{1}{\sqrt{e}} |x - \alpha_1|$$

5) On considère la suite $(\beta_n)$ définie par :

$$\beta_n = -\frac{1}{2}$$ et pour tout $n \in \mathbb{N}$ : $\beta_{n+1} = -e^{\beta_n}$

a) Montrer qu'il existe un réel $\alpha$ tel que :

$$(\forall n \in \mathbb{N}) : |\beta_{n+1} - \alpha_1| \le \alpha |\beta_n - \alpha_1|$$

b) Montrer que la suite $(\beta_n)$ est convergente et déterminer sa limite.

Ex. (1) (2) (3) (4) (5) (6) (7) (8) (9) (10)

#### Problème 2
Première Partie :
Dans cette partie, $n$ est un entier naturel supérieur ou égal à 3.

On considère la fonction $g_n$ définie sur $\mathbb{R}^*$ par :

$$g_n(x) = nx + 2 \ln x$$

1) Dresser le tableau de variations de \( g_{n} \).
2) Montrer que: \(\left(\forall x\in \mathbb{R}_{+}^{*}\right)\sqrt{x} >\ln x\)
3) a) Montrer que l'équation \( g_{n}(x) = 0 \) admet une solution unique \( \alpha_{n} \) dans \( \mathbb{R}_{+}^{*} \) et que \( \frac{1}{n} < \alpha_{n} < \frac{1}{\sqrt{n}} \).
b) En déduire \(\lim_{n\to \infty}\alpha_n\)

Deuxième Partie :

1) Soit $f$ la fonction numérique définie sur $[0; +\infty[$ par :

$$f(x) = \sqrt[3]{x} e^{-x}$$

Et soit $\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O, \bar{i}, \bar{j})$ avec : $\|\bar{i}\| = \|\bar{j}\| = 3cm$

1) Etudier la derivabilité de la fonction \( f \) à droite en 0 puis interpréter le résultat géométriquement.
2) Calculer \(\lim_{x\to \infty}f(x)\) puis interpréter le résultat géométriequement.

3) a) Montrer que : $$(\forall x \in \mathbb{R}^+)f'(x) = \frac{1 - 3x}{3x} f(x)$$

b) Dresser le tableau de variations de $$f$$.

4) Construire $$\mathcal{C}$$ (On prend : $$f\left(\frac{1}{3}\right) \approx 0,5$$)

II) Posons : $$I = \left[\frac{1}{3}; 1\right]$$

1) a) Montrer que $$f(I) \subset I$$.

b) En utilisant le résultat de la question 3)a), montrer que : $$(\forall x \in I) |f'(x)| \leq \frac{2}{3}$$

c) Montrer que : $$[f(x) = x \text{ et } x > 0] \Leftrightarrow x = \alpha_1$$ où $$\alpha_1$$ est la solution de l'équation $$g_1(x) = 0$$.

2) Soit $$(u_n)$$ la suite définie par :

$$u_0 = \frac{1}{3} \quad \text{et} \quad (\forall n \in \mathbb{N}) u_{n+1} = f(u_n)$$

a) Montrer que : $$(\forall n \in \mathbb{N}) u_n \in I$$

b) Montrer que : $$(\forall n \in \mathbb{N}) |u_{n+1} - \alpha_1| \leq \frac{2}{3} |u_n - \alpha_1|$$

c) En déduire que : $$(\forall n \in \mathbb{N}) |u_n - \alpha_1| \leq \left(\frac{2}{3}\right)^{n+1}$$

d) Montrer que la suite $$(u_n)$$ est convergente en déterminant sa limite.

Examen National 2006 (Session Normale)

#### Problème 3
Dans ce problème, $$n$$ est un entier naturel non nul. On considère la fonction numérique $$f_n$$ définie sur $$\mathcal{R}$$

par : $$f_n(x) = x + \frac{e^{-x}}{n}$$

Et soit $$\mathcal{C}_n$$ sa courbe représentative dans un repère orthonormé $$(O; \vec{i}, \vec{j})$$.

1) Calculer $$\lim_{x \to +\infty} f_n(x)$$ et $$\lim_{x \to -\infty} f_n(x)$$

2) a) Étudier la nature de la branche infinie de la courbe $$\mathcal{C}_n$$ au voisinage de $$-\infty$$.

b) Montrer que la droite $$\mathcal{D}$$ d'équation $$y = x$$ est une asymptote de la courbe $$\mathcal{C}_n$$ au voisinage de $$+\infty$$, et déterminer la position relative de $$\mathcal{C}_n$$ et $$\mathcal{D}$$.

3) Étudier les variations de la fonction $$f_n$$ puis dresser le tableau de variations de $$f_n$$.

4) Construire la courbe $$\mathcal{C}_3$$.

(On prend : $$f_1(-1,5) \approx 0$$, $$f_1(-0,6) \approx 0$$, $$\ln 3 \approx 1,1$$)

5)a) Montrer que si $$n \geq 3$$ alors $$\frac{e}{n} < \ln n$$.

b) Montrer que si $$n \geq 3$$ alors l'équation $$f_n(x) \approx 0$$ admet exactement deux solutions $$x_n$$ et $$y_n$$ telles

que : $$x_n \leq -\ln n$$ et $$-\frac{e}{n} \leq y_n \leq 0$$

c) Calculer $$\lim_{n \to +\infty} x_n$$ et $$\lim_{n \to +\infty} y_n$$.

6) Soit $$g$$ la fonction numérique définie sur $$\mathcal{R}$$ par :

$$\begin{cases} g(x) = -1 - x \ln x \text{ si } x > 0 \\ g(0) = -1 \end{cases}$$

a) Montrer que $$g$$ est continue à droite de 0.

b) Vérifier que pour tout $$n \geq 3$$ : $$g\left(\frac{-1}{x_n}\right) = \frac{\ln n}{x_n}$$

c) En déduire $$\lim_{n \to +\infty} \frac{\ln n}{x_n}$$.

Examen National 2012 (Session Normale)

#### Problème 4
I) On considère la fonction numérique $$f$$ définie sur l'intervalle $$[0; +\infty[$$ par : $$f(x) = 4xe^{-x^2}$$ Et soit $$\mathcal{C}$$ sa courbe représentative dans un repère orthonormé $$(O; \vec{i}, \vec{j})$$.

1) Calculer la limite de $$f$$ en $$+\infty$$.

2) Étudier les variations de la fonction $$f$$ puis dresser son tableau de variations.

3) Déterminer l'équation de la demi-tangente à la courbe $$\mathcal{C}$$ à l'origine du repère puis tracer la courbe $$\mathcal{C}$$. (On pend $$\|\vec{i}\| = \|\vec{j}\| = 2cm$$, et on admet que le point d'abscisse $$\sqrt{\frac{3}{2}}$$ est un point d'inflexion de $$\mathcal{C}$$).

II) Soit $$n$$ un entier supérieur ou égal à 2.

On considère la fonction $$f_n$$ définie sur $$[0; +\infty[$$ par :

$$f_n(x) = 4x^n e^{-x^2}$$

1) a) Montrer que : $$(\forall x > 1) e^{-x^2} < e^{-x}$$

b) En déduire la limite de $$f_n$$ quand $$x$$ tend vers $$+\infty$$.

2) Étudier les variations de la fonction $$f_n$$ sur $$[0; +\infty[$$

puis dresser son tableau de variations.

3) Montrer qu'il existe un unique réel $$u_n$$ de l'intervalle

tel que : $$f_n(u_n) = 1$$

4) a) Vérifier que : $$(\forall n \ge 2) f_{n+1}(u_n) = u_n$$

b) Montrer que $$(u_n)_{n \ge 2}$$ est strictement décroissante puis en déduire qu'elle est convergente.

5) On pose : $$\ell = \lim_{n \to +\infty} u_n$$

a) Montrer que : $$0 < \ell \le 1$$

b) Montrer que : $$(\forall n \ge 2) - \frac{\ln 4}{n} < u_n < \frac{1}{n} - \frac{\ln 4}{n}$$

#### Problème 5
I) Soit $$g$$ la fonction définie sur $$[0; +\infty[$$ par :

$$g(x) = \ln(1+x) - \frac{x}{1+x}$$

1) Etudier les variations de la fonction \( g \) sur \( [0; +\infty[ \).
2) En déduire le signe de \( g(x) \) sur \( [0; +\infty[ \).
II) Soit \( f \) la fonction définie sur \( \mathbb{R} \) par:

$$f(x) = e^x \ln(1+e^{-x})$$

1) Montrer que: \(\lim_{x \to +\infty} f(x) = 1\) et \(\lim_{x \to -\infty} f(x) = 0\)
2) Montrer que: \((\forall x \in \mathbb{R}) f'(x) = e^x g(e^{-x})\)
3) Dresser le tableau de variations de la fonction \( f \).
4) On note \(\mathcal{C}\) la courbe représentative de \(f\), et \(\mathcal{C}'\) celle de la fonction \((-f)\).

Tracer $$\mathcal{C}$$ et $$\mathcal{C}'$$ dans un même repère orthonormé $$(O; \vec{i}, \vec{j})$$. (On admet que $$\mathcal{C}$$ admet un unique point d'inflexion d'abscisse $$x_0 \approx -0,7$$).

5) Montrer que: \((\forall x \in [-1;0]) 0 < f'(x) \leq g(e)\)
6) Montrer que l'equation \( f(x) + x = 0 \) admet une

solution $$\alpha$$ dans $$\mathbb{R}$$ et que $$-1 < \alpha < 0$$.

7) On considère la suite numérique $$(u_n)$$ définie par :

$$u_0 = 0$$ et $$u_{n+1} = -f(u_n)$$ pour tout $$n \in \mathbb{N}$$

a) Montrer que: \((\forall n \in \mathbb{N}) - 1 \leq u_n \leq 0\)
b) Montrer que:

$$(\forall n \in \mathbb{N}) |u_{n+1} - \alpha| \le g(e)|u_n - \alpha|$$

c) En déduire que : $$(\forall n \in \mathbb{N}) |u_n - \alpha| \le (g(e))^n$$

8) Sachant que $$g(e) < 0,6$$, calculer $$\lim_{n \to +\infty} u_n$$.

#### Problème 6
#### Problème 6
Soit $$n$$ un entier naturel non nul.

On considère la fonction numérique $$f_n$$ définie par :

$$f_n(x) = \frac{1}{1+e^{-\frac{x}{2}(1-n)}}$$

Et soit $$\mathcal{C}_n$$ sa courbe représentative dans un repère orthonormé $$(O; \vec{i}, \vec{j})$$.

1) a) Calculer \(\lim_{x \to +\infty} f_n(x)\) et \(\lim_{x \to -\infty} f_n(x)\) puis interpréter graphiquement les résultats obtenus.
b) Montrer que la fonction \( f_{n} \) est dérivable sur \( \mathbb{R} \) puis calculer \( f_{n}'(x) \) pour tout \( x \in \mathbb{R} \).
c) Montrer que \( f_{n} \) est strictement croissant sur \( \mathbb{R} \).

2) a) Montrer que le point $$I_n\left(n, \frac{1}{2}\right)$$ est un centre de symétrie de la courbe $$\mathcal{C}_n$$.

b) Construire la courbe $$\mathcal{C}_1$$.

3) a) Montrer que l'equation \( f_{n}(x) = x \) admet une unique solution \( u_{n} \) dans l'intervalle \( ]0; n[ \).
b) Montrer que:

$$(\forall n \in \mathbb{N}^*) (\forall x \in \mathbb{R}) f_{n+1}(x) < f_n(x)$$

c) Montrer que la suite \(\left(u_{n}\right)_{n\ge 1}\) est strictement decroissante puis qu'elle est convergente.
d) Calculer \(\lim_{n\to +\infty}u_n\)

Recherche Nationale 2015 (Session De Rechanger)

2016年1月1日

#### Problème 7
Dans tout ce problème, n désigne un entier naturel supérieur ou égal à 2.

On considère la fonction numérique $f_n$ définie par :

$$f_n(x) = \frac{x}{n} - e^{-nx}$$

Et soit $\mathcal{C}_n$ sa courbe représentative dans un repère orthonormé $(O; \bar{i}, \bar{j})$.

1)a) Calculer \(\lim_{x\to +x}f_n(x)\) et \(\lim_{x\to -x}f_n(x)\)
b) Etudier les branches infinies de la courbe \(\mathcal{C}_n\)
2) Calculer \( f_{n}^{\prime}(x) \) pour tout \( x \in \mathbb{R} \) puis dresser le tableau de variations de la fonction \( f_{n} \).
3)a) Montrer que l'équation \( f_{n}(x) = 0 \) admet une unique solution \( \alpha_{n} \) dans \( \mathbb{R} \).
b) Montrer que \( f_{n}\left(\frac{1}{n}\right) < 0 \).
c) Montrer que pour tout \( x \in \mathbb{R} : e^x \geq x + 1 \) puis en déduire que \( f_n(1) > 0 \).
d) Montrer que: \(\frac{1}{n} <  \alpha_{n} <   1\)

4) Tracer la courbe \(\mathcal{C}_2\) (On donne: \(\alpha_{2}\approx 0,6\)
5)a) Montrer que:

$$f_{n+1}(\alpha_n) = \frac{ne^{-(n+1)\alpha_n}}{n+1} \left( e^{\alpha_n} - \frac{1}{n} - 1 \right)$$

b) En déduire que: \((\forall n \geq 2) f_{n+1}(\alpha_n) \geq 0\)
c) Montrer que la suite \((\alpha_{n})_{n\geq 2}\) est decroissante puis en deduire qu'elle est convergente.
6)a) En utilisant le résultat de la question 3)d), monr er que: \((\forall n\geq 2)\frac{1}{n^2} < e^{-n\alpha_n} <   \frac{1}{n}\)
b) En déduire que: \((\forall n \geq 2) \frac{\ln n}{n} < \alpha_n < \frac{2 \ln n}{n}\)
c) Determiner \(\lim_{n\to \infty}\alpha_n\)

Examen National 2006 (Session De Rattrapage)

#### Problème 8
Première Partie :

On considère la fonction $f$ définie sur $\mathbb{R}^+$ par :

$$f(0) = 0 \quad \text{et} \quad f(x) = (x+2)e^{-\frac{x}{2}} \quad \text{si} \quad x > 0$$

Et soit $\mathcal{C}$ sa courbe dans un repère orthonormé.

1) a) Montrer que \( f \) est continue à droite en 0.
b) Montrer que \( f \) est dérivable à droite en 0.
c) Montrer que \( f \) est strictement croissant sur \( \mathbb{R}^+ \).

2) a) Calculer la limite $\lim_{x\to+\infty} f(x)$.

b) Montrer que: \((\forall t \in \mathbb{R}^+)\) \(0 \leq e^{-t} + t - 1 \leq \frac{t^2}{2}\)
c) Montrer que: \((\forall x \in \mathbb{R}_+^+)\frac{-4}{x} \leq f(x) - x \leq \frac{4}{x^2} - \frac{2}{x}\)
d) En déduire que la courbe \(\mathcal{C}\) admet une asymptote oblique \(\mathcal{D}\) qu'on déterminera par une équation cartésienne.

3) Tracer la droite $\mathcal{D}$ et la courbe $\mathcal{C}$.

Deuxième Partie : $n$ est un entier naturel non nul. On considère la fonction $f_n$ définie sur $\mathbb{R}^+$ par :

$$f_n(0) = 0 \quad \text{et} \quad f_n(x) = \left( x + \frac{2}{n} \right) e^{-\frac{x}{2}} \quad \text{si} \quad x > 0$$

1) Montrer que \( f_{n} \) est dérivable à droite en 0.
2) Etudier les variations de la fonction \( f_{n} \) sur \( \mathbb{R}^+ \).
3) a) Montrer que l'équation \( f_{n}(x) = \frac{2}{n} \) admet une unique solution \( a_{n} \) dans \( \mathbb{R}^{+} \).

b) Montrer que :

$$(\forall x > 0) (\forall n \in \mathbb{N}^+) f_{n+1}(x) - \frac{2}{n+1} > f_n(x) - \frac{2}{n}$$

c) En déduire que la suite \(\left(a_{n}\right)_{n\geq 1}\) est décroissant.
puis qu'elle est convergente. On note: \(a = \lim_{n\to \infty}a_n\)
d) Montrer que: \((\forall n \in \mathbb{N}^{+}) na_{n} = 2e^{\frac{2}{n}} - 2\)
e) Montrer que \(a = 0\)

Examen National 2006 (Session No 1)

Première Partie :

1) En appliquant le deuxième des avertissements finis sur la fonction $f$ et $g$, montrer que pour tout réel correctement positif il existe un réel $0 \le |0, x| \le 1$

$$\text{que } e^0 = \frac{1}{1 - e^{-1}}$$

2) En déduire que

a) \((\forall x > 0) 1 - x < e^{-1}\)
b) \((\forall x > 0) x + 1 < e^{-1}\)
c) \((\forall x > 0) 0 < \ln \left(\frac{10^{-1}}{e^{-1} - 1}\right) < x\)

Deuxième Partie :

On considère la fonction numérique $f$ définie sur l'intervalle $|0, x| \le 1$ par :

$$f(0) = 1 \quad \text{et} \quad f(x) = \frac{10^{-1}}{e^{-1} - 1} \quad \text{si} \quad x > 0$$

Et soit $\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(0, 1, 2)$.

1) a) Montrer que \( f \) est continue à droite en 0.
b) Montrer que \(\lim_{x\to 0}\left(f(x) - x\right) = 0\) puis interpréter graphiquement le résultat obtenu.

2) a) Montrer que : $(\forall x \ge 0) x - \frac{x^2}{2} \le -e^{-1} + 1$

(On pourra utiliser le résultat de la question 2) a) de la première partie).

b) En déduire que :

$$(\forall x \ge 0) \frac{x^2}{2} - \frac{x^2}{6} \le e^{-1} + x - 1 \le \frac{x^2}{2}$$

3) a) Vérifier que :

$$(\forall x \ge 0) \frac{f(x) - 1}{x} = \frac{e^{-1} + x - 1}{x^2} f(x)$$

b) En déduire que : $\lim_{x \to 0} \frac{f(x) - 1}{x} = \frac{1}{2}$

Puis interpréter le résultat obtenu.

4) a) Montrer que la fonction $f$ est dérivable sur l'intervalle $|0, x| \le 1$ et que :

$$(\forall x \in |0, x| \le 1) f'(x) = \frac{e^0 \left(e^0 - 1\right) x^2}{(e^0 - 1)^2}$$

b) En déduire que la fonction $f$ est strictement croissante sur $|0, x|$.

(On pourra utiliser le résultat de la question 2) b) de la première partie)

Troisième Partie :

On considère la suite numérique $(u_n)$ définie par :

$$u_n > 0 \quad \text{et} \quad u_{n+1} = \ln(f(u_n)) \quad \text{pour tout } n \in \mathbb{N}$$

1) Montrer que pour tout \( n \in \mathbb{N} : u_n > 0 \)
2) Montrer que la suite \((u_{n})\) est strictement derrroissante puis en deduire qu'elle est convergente (On pourra utiliser le résultat de la question 2) y de la première partie)
3) Montrer que 0 est l'unique solution de l'equation \(\ln (f(x)) = x\) puis déterminer la limite de la suite \((u_{n})\).

Examen National 2016 (Session Normale)

#### Problème 10
Soit $f$ la fonction définie sur $\mathbb{R}^+$ par : $f(x) = 2x - e^{-x^2}$. Et soit $\mathcal{C}_f$ sa courbe dans un repère orthonormé.

1) Calculer \(\lim_{x\to 0}\left(f(x) - 2x\right)\) puis interpréter le résultat graphiquement.
2) Calculer \( f'(x) \) pour tout \( x \in \mathbb{R}^+ \), puis dresser le tableau de variations de la fonction \( f \).
3) Montrer que l'equation \( f(x) = 0 \) admet une solution unique \( \alpha \) sur \( \mathbb{R}^+ \), et que \( 0 < \alpha < 1 \).
4) Tracer la courbe \(\mathcal{C}_f\)

Examen National 2008 (Session Normale)

## Résumé

- La fonction exponentielle est la fonction réciproque de la fonction logarithme népérien.
- Pour tous réels $x$ et $y$, $e^{x+y}=e^x e^y$.
- La fonction $e^x$ est strictement croissante sur $\mathbb{R}$, vérifie $\ln(e^x)=x$ et $e^{\ln x}=x$.
- $(e^x)'=e^x$ et, plus généralement, $(e^{u(x)})'=u'(x)e^{u(x)}$.
- Les limites fondamentales sont $\lim_{x\to +\infty} e^x=+\infty$, $\lim_{x\to -\infty} e^x=0$ et $\lim_{x\to 0}\frac{e^x-1}{x}=1$.
- Pour $a>0$ et $a\neq 1$, on a $a^x=e^{x\ln a}$ et $(a^x)'=(\ln a)a^x$.

## Auto-évaluation

- Définir la fonction exponentielle et son domaine.
- Simplifier des expressions contenant des exponentielles.
- Résoudre une équation ou une inéquation exponentielle.
- Calculer une dérivée de la forme $(e^{u(x)})'$.
- Étudier les variations d'une fonction exponentielle.
- Pratiquer les limites de référence et un exercice de type baccalauréat.
