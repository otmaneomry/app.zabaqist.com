# Chapitre 6 : Calcul intégral

## Histoire

Au XVIe, deux problèmes, apparemment différents, requièrent l'attention des mathématiciens. Les uns cherchent une méthode générale pour calculer l'aire située sous une courbe : c'est le cas de John Wallis. D'autres, comme Pierre de Fermat, tentent de trouver un lien entre l'équation d'une courbe et de sa tangente, Isaac Newton, dans les années 1660, et Gottfried Leibniz, la décennie suivante, se rendent compte que les deux problèmes sont liés et établissent, semble-t-il indépendamment l'un de l'autre, une méthode générale. C'est ce qu'on appelle le calcul différentiel et intégral.

Source : https://fr.wikipedia.org

> **Isaac Newton** (1643–1727)
> **Gottfried Leibniz** (1646–1716)

## Capacités attendues

- Utiliser les techniques du calcul intégral pour le calcul de l'intégrale d'une fonction.

- Maitriser le calcul de l'aire d'un domaine plan limité par deux courbes et deux droites parallèles à l'axe des ordonnées.

- Calculer le volume d'un solide engendré par la rotation autour de l'axe des abscisses.

- Appliquer le calcul intégral pour prouver certaines inégalités et donner des approximations.

- Etudier les fonctions du type : $$x \mapsto \int_{a}^{x(t)} f(t) dt$$

- Encadrer une intégrale par deux suites en utilisant la méthode des rectangles (dans le cas de fonctions monotones).

- Déterminer les limites des deux suites : $$u_a = \frac{b-a}{n} \sum_{k=1}^{n} f\left(a+k, \frac{b-a}{n}\right), v_a = \frac{b-a}{n} \sum_{k=1}^{n-1} f\left(a+k, \frac{b-a}{n}\right)$$ (f étant une fonction continue sur l'intervalle [a,b])

- Etudier des fonctions et des suites définies par des intégrales.

## Plan du cours

- Activités Préparatoires *(page 243)*
- Connaissances Fondamentales
- Integrale d'une fonction continue sur un segment *(page 250)*
- Techniques de calcul d'intégrales *(page 253)*
- Intégration et ordre *(page 257)*
- Applications du calcul integral *(page 260)*- Techniques Et Astuces *(page 266)*- Exercices d'application *(page 274)*
- Exercices de perfectionnement *(page 281)*
- Problèmes de synthese *(page 289)*

## Prérequis

- Primitives d'une fonction continue et dérivées usuelles.
- Continuité, dérivabilité et variations d'une fonction numérique.
- Fonctions trigonométriques, logarithme népérien et exponentielle.
- Suites numériques, encadrements et limites.

## Activités préparatoires

### RAPPELS
A) Rappels sur les primitives :

1. Pour chacun des cas suivants, déterminer les primitives de la fonction f sur l'intervalle I :

a) $$f(x) = \frac{1}{x+1}$$ et $$I = ]-\infty; -1[$$

b) $$f(x) = \frac{2}{\sqrt{1-x}}$$ et $$I = ]-\infty; 1[$$

c) $$f(x) = \frac{1}{(x+3)^2}$$ et $$I = ]0; +\infty[$$

d) $$f(x) = \sin\left(\frac{1}{2}x\right)$$ et $$I = \mathbb{R}$$

e) $$f(x) = (x+1)e^{x^2-2x}$$ et $$I = \mathbb{R}$$

f) $$f(x) = \frac{2(x^4-1)}{x^3}$$ et $$I = ]0; +\infty[$$

g) $$f(x) = \frac{\sin x}{1+\cos^2 x}$$ et $$I = \mathbb{R}$$

h) $$f(x) = e^x\left(\frac{1}{x}+\ln x\right)$$ et $$I = ]0; +\infty[$$

2. On considère les fonctions numériques f et F définies sur R par :

$$f(x) = 2\text{Arc tan } x$$ et $$F(x) = 2x\text{Arc tan } x - \ln(1+x^2)$$

Montrer que F est une primitive de f sur R.

B) Autour de la notation différentielle :

1. Dans chacun des cas suivants, calculer $$\frac{dy}{dx}$$ :

a) $$y = 3x^2 - 2x$$ ; b) $$y = xe^{x^2}$$ ; c) $$y = \cos^3\left(\frac{x}{3}\right)$$ ; d) $$y = x + \sqrt{x^2 + 1}$$

2. On pose : $$dy = 5x^2\sqrt{1-x^2}dx$$ et $$u = 1-x^3$$. Montrer que : $$dy = -\frac{5}{3}\sqrt{u}du$$

3. On pose : $$dy = \frac{\cos x}{1+\sin^2 x}dx$$ et $$u = \sin x$$.

Déterminer dy en fonction de u et du.

### INTÉGRALE D'UNE FONCTION CONTINUE
A) Soit f une fonction continue sur un intervalle I, et soit a et b deux éléments de I.

Soit F et G deux primitives de la fonction f. Montrer alors que : $$F(b) - F(a) = G(b) - G(a)$$

On remarque alors que le nombre $$F(b) - F(a)$$ ne dépend pas du choix de la primitive de f.

Le nombre $$F(b) - F(a)$$ est appelé l'intégrale de f de a à b et, est notée $$\int_a^b f(x)dx$$ et on lit :

« Intégrale (ou somme) de $$f(x)dx$$ de a à b ». $$F(b) - F(a)$$ est noté $$[F(x)]^b$$. Donc :

$$\int_a^b f(x)dx = [F(x)]^b = F(b) - F(a)$$

B) Soit $f, g$ et $h$ les fonctions numériques définies sur $[0; 2]$ par :

$$f(x) = -3 \quad ; \quad g(x) = 6x - 7 \quad ; \quad \begin{cases} h(x) = 2 - x \text{ si } x \in [0; 1] \\ h(x) = 3x - 2 \text{ si } x \in ]1; 2] \end{cases}$$

1. Montrer que \( f, g \) et \( h \) sont continues sur [0; 2] et déterminer les primitives de chacune d'elles sur [0; 2].
2. Calculer les intégrales suivantes: \(\int_0^2 f(x)dx\) ； \(\int_0^2 g(x)dx\) ； \(\int_0^2 h(x)dx\)

### PROPRIÉTÉS DE L'INTÉGRALE
A) Soit $f$ la fonction numérique définie sur $[0; 2]$ par : $f(x) = 2|x - 1|$

1. Montrer que: \(\int_0^2 f(x)dx = \int_0^1 f(x)dx + \int_1^2 f(x)dx\)
2. En déduire la valeur de l'intégrale \(\int_0^2 f(x)dx\)

De façon générale : Si $f$ est une fonction continue sur un intervalle $I$,

alors pour tous $a, b$ et $c$ de $I$ : $\int_a^b f(x)dx = \int_a^c f(x)dx + \int_c^b f(x)dx$

Cette égalité s'appelle la relation de Chasles pour les intégrales.

3. Application: Calculer l'intégrale \(\int_{-\frac{\pi}{2}}^{\pi} |\sin x| dx\).
B) On considere les fonctions \( g \) et \( h \) définies sur l'intervalle [1;5] par: \( g(x) = (x - 1)\sqrt{x - 1} \) et \( h(x) = \sqrt{x - 1} \).
1. Determiner les primitives des fonctions \( g \) et \( h \) sur l'intervalle [1;5].
2. Calculer \(\int_{1}^{1}g(x)dx\) et \(\int_{1}^{1}h(x)dx\)
3. Calculer \(\int_{1}^{1}\left(g(x) + h(x)\right)dx\) et \(\int_{1}^{1}3g(x)dx\). Que remarque-t-on?

De façon générale : Si $g$ et $h$ sont deux fonctions continues sur un intervalle $I$ et $\lambda \in \mathbb{R}$, alors pour tous $a$ et $b$ de $I$ : $\int_a^b (g(x) + h(x))dx = \int_a^b g(x)dx + \int_a^b h(x)dx$ et $\int_a^b \lambda g(x)dx = \lambda \int_a^b g(x)dx$

4. Application : Calculer l'intégrale $\int_0^2 3 \tan^2 x dx$.

### INTÉGRATION ET DÉRIVATION
A) Soit $f$ une fonction continue sur un intervalle $I$ et soit $a \in I$.

1. Vérifier que \(\varphi(a) = 0\).
2. Montrer que \(\varphi\) est une primitive de la fonction \(f\) sur \(I\). On obtient alors le résultat suivant:

La fonction $x \mapsto \int_{0}^{1} f(t) dt$ est la primitive de la fonction $f$ sur $I$ qui s'annule en $a$.

B) Montrer que la fonction $g$ définie par $g(x) = \int_{0}^{1} \frac{1}{\ln t} dt$ est dérivable sur $[e^2, +\infty[$ puis déterminer $g'(x)$.

### INTERPRÉTATION GÉOMÉTRIQUE DE L'INTÉGRALE
A) Soit $f_1, f_2$ et $f_3$ des fonctions numériques définies sur l'intervalle $[-1; 3]$ par :

$$f_1(x) = 2 \quad \text{et} \quad f_2(x) = -\frac{1}{2}x + \frac{5}{2} \quad \text{et} \quad \begin{cases} f_1(x) = x + 2 & \text{si } -1 \le x < 0 \\ f_1(x) = -\frac{1}{2}x + 2 & \text{si } 0 \le x < 2 \\ f_1(x) = 2x - 3 & \text{si } 2 \le x \le 3 \end{cases}$$

Soit $\mathcal{C}_k$ ($k \in \{1, 2, 3\}$) la courbe représentative de $f_k$ dans un repère orthonormé $(O, \bar{i}, \bar{j})$ avec : $\|\bar{i}\| = 1cm$

1. Vérifier que $f_1, f_2$ et $f_3$ sont continues et positives sur $[-1; 3]$.
2. Soit $\Delta_k$ ($k \in \{1, 2, 3\}$) le domaine plan délimité par la courbe $\mathcal{C}_k$, l'axe des abscisses et les droites d'équations $x = -1$ et $x = 3$. On a donc : $\Delta_k = \{M(x, y) / -1 \le x \le 3 \text{ et } 0 \le y \le f_k(x)\}$

Soit $\sigma(\Delta_k)$ l'aire en $cm^2$ du domaine $\Delta_k$.

a) Calculer \(\sigma (\Delta_k)\) pour \(k\in \{1,2,3\}\)
b) Montrer que \(\sigma (\Delta_k) = \int_{-1}^{1}f_k(x)dx\) pour tout \(k\in \{1,2,3\}\)

B) Soit $f$ la fonction définie sur $[0; 4]$ par : $f(x) = \sqrt{x}$

Soit $\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O, \bar{i}, \bar{j})$ avec : $\|\bar{i}\| = 1cm$

Pour tout $t \in [0, 4]$ on note $\Delta_t$ le domaine plan délimité par la courbe $\mathcal{C}$, l'axe des abscisses et les droites d'équations $x = 0$ et $x = t$. Soit $\sigma(t)$ l'aire du domaine $\Delta_t$ en $cm^2$.

1. Soit $h$ un réel positif tel que : $1 < t + h < 4$

a) Que representation le nombre \(\sigma (t + h) - \sigma (t)\)?
b) Montrer que: \( h\sqrt{t} \leq \sigma(t + h) - \sigma(t) \leq h\sqrt{t + h} \)
c) En déduire que \( t \mapsto \sigma(t) \) est une primitive de la fonction \( f \) sur l'intervalle [0;4].

2. Montrer que pour tout \(t\in [0;4]\) .. \(\sigma (t) = \int_0^t f(x)dx\)
3. Calculer \(\sigma(t)\) en fonction de \(t\) et en deduire I'aire \(\sigma(4)\)

### TECHNIQUE D'INTÉGRATION PAR PARTIES
A) Soit $g$ la fonction numérique définie sur $\mathbb{R}$ par : $g(x) = x \sin x$

1. Vérifier que pour tout $x \in \mathbb{R} : g'(x) = \sin x + x \cos x$
2. En déduire la valeur de l'intégrale : $K = \int_0^{\frac{\pi}{2}} x \cos(x) dx$

B) Soit $h$ la fonction numérique définie sur $[0, +\infty]$ par : $h(x) = x \ln x$

1. Calculer $h'(x)$ pour tout $x \in [0, +\infty]$.
2. En déduire la valeur de l'intégrale $L = \int_0^x \ln(x) dx$.

C) Soit $u$ et $v$ deux fonctions dérivables sur un intervalle $I$ telles que leurs dérivées $u'$ et $v'$ soient continues sur $I$.

Montrer que pour tous $a$ et $b$ de $I$ : $\int_a^a u'(x)v(x)dx = [u(x)v(x)]_a^b - \int_a^b u(x)v'(x)dx$

Cette technique est appelée « intégration par parties »

D) En utilisant une intégration par parties sur l'intégrale $\int_a^{\infty} \frac{1}{\ln t} dt$, montrer que : $\int_a^{\infty} \left( \frac{1}{\ln t} - \frac{1}{\ln^2 t} \right) dt = \frac{e(e-2)}{2}$

### TECHNIQUE D'INTÉGRATION PAR CHANGEMENT DE VARIABLE
On considère la fonction numérique $f$ définie sur $[0; 3]$ par : $f(x) = x^2 \sqrt{1+x}$

On considère l'intégrale $K = \int_0^3 x^2 \sqrt{1+x} dx$ et la fonction $u : t \mapsto t^2 - 1$.

1. Vérifier que : $K = \int_{a(t)}^{a(t)} f(x) dx$.
2. En utilisant une primitive $F$ de la fonction $f$ sur le segment $[0; 3]$, montrer que : $K = \int_0^2 f(u(t))u'(t)dt$ puis déterminer la valeur de $K$.
3. Montrer que pour tous $\alpha$ et $\beta$ de l'intervalle $[1, +\infty]$ on a : $\int_{a(\alpha)}^{a(\beta)} f(x)dx = \int_\alpha^\beta f(u(t))u'(t)dt$

Cette technique est appelée « intégration par changement de variable ».

### INTÉGRATION ET ORDRE - VALEUR MOYENNE D'UNE FONCTION
A) Soit $\varphi$ la fonction numérique définie sur l'intervalle $\left[\frac{1}{2}; e\right]$ par : $\varphi(x) = e^x \ln x$

1. Déterminer le signe de $\varphi(x)$ sur $\left[\frac{1}{2}; e\right]$.

2. Déterminer le signe de chacune des intégrales : $\int_1^e \varphi(x) dx$ et $\int_{\frac{1}{2}}^e \varphi(x) dx$

De façon générale : Si $\varphi$ est continue et positive sur le segment $[a; b]$, alors $\int_a^b \varphi(x) dx \ge 0$

g) Soit $f$ la fonction numérique définie sur $\mathbb{R}^n$ par : $f(x) = \frac{\sin x}{x}$. On pose : $a = \frac{\pi}{2}$ et $b = \frac{5\pi}{6}$ et $I = [a; b]$.

1. Montrer que pour tout $x \in I$, $\frac{3}{5\pi} \leq f(x) \leq \frac{2}{\pi}$. En déduire que : $\frac{1}{5} \leq \int_a^b f(x) dx \leq \frac{2}{3}$

2. Montrer qu'il existe un réel $c \in [a; b]$ tel que : $\frac{1}{b-a} \int_a^b f(x) dx = f(c)$

Le nombre $\frac{1}{b-a} \int_a^b f(x) dx$ s'appelle la valeur moyenne de la fonction $f$ sur $[a; b]$.

### SOMMES DE RIEMANN
Soit $f$ une fonction continue sur un intervalle $I$, et $a$ et $b$ deux éléments $y$ de $I$ tels que $a < b$. Soit $n$ un entier supérieur ou égal à 2.

On suppose que la fonction $f$ est croissante sur $[a; b]$. On divise le segment $[a; b]$ en des segments $[x_i, x_{i+1}]$ de même longueur avec :

$x_0 = a ; x_1 = a + \frac{b-a}{n} ; ... ; x_k = a + k \frac{b-a}{n} ; ... ; x_n = a + n \frac{b-a}{n} = b$

1. Soit $k$ un entier naturel tel que $0 \leq k \leq n-1$

a) Montrer que : $(\forall x \in [x_k, x_{k+1}]) f(x_k) \leq f(x) \leq f(x_{k+1})$.

b) En déduire que : $\frac{b-a}{n} f(x_k) \leq \int_{x_k}^{x_{k+1}} f(x) dx \leq \frac{b-a}{n} f(x_{k+1})$

2. En additionnant les encadrements précédents, montrer que : $\frac{b-a}{n} \sum_{k=0}^{n-1} f(x_k) \leq \int_a^b f(x) dx \leq \frac{b-a}{n} \sum_{k=0}^{n-1} f(x_{k+1})$

3. On pose : $s_n = \frac{b-a}{n} \sum_{k=0}^{n-1} f(x_k)$ et $S_n = \frac{b-a}{n} \sum_{k=0}^{n-1} f(x_{k+1})$

Montrer que : $0 \leq S_n - s_n \leq \frac{(b-a)(f(b) - f(a))}{n}$ et en déduire que : $\lim_{n \to +\infty} (S_n - s_n) = 0$

4. On pose : $r_n = \int_a^b f(x) dx - s_n$ et $R_n = S_n - \int_a^b f(x) dx$

a) Montrer que : $0 \leq r_n \leq S_n - s_n$ et $0 \leq R_n \leq S_n - s_n$

b) En déduire que : $\lim_{n \to +\infty} S_n = \lim_{n \to +\infty} s_n = \int_a^b f(x) dx$. On admet le résultat suivant :

Si $f$ est une fonction continue sur un segment $[a; b]$ alors les suites $(s_n)_{n \geq 1}$ et $(S_n)_{n \geq 1}$ définies par :

$s_n = \frac{b-a}{n} \sum_{k=0}^{n-1} f\left(a + k \frac{b-a}{n}\right)$ et $S_n = \frac{b-a}{n} \sum_{k=1}^n f\left(a + k \frac{b-a}{n}\right)$

Convergent vers une limite commune qui est $\int_a^b f(x) dx$.

## Cours

### 1. Intégrale d'une fonction continue sur un segment
#### 1.1. L'INTÉGRALE ET LES PRIMITIVES
> **Définition 1.**
Soit $f$ une fonction continue sur un intervalle $I$, et soit $a$ et $b$ deux éléments de $I$.

Le nombre $F(b) - F(a)$, où $F$ est une primitive de $f$, est appelé l'intégrale de la fonction $f$ de $a \triangle b$,

et on le note $\int_a^b f(x)dx$. On écrit alors : $\int_a^b f(x)dx = [F(x)]_a^b = F(b) - F(a)$

> **Remarque.**
- $\int_a^b f(x)dx$ se lit « somme de $f(x)dx$ de $a \triangle b$ » ou « intégrale de $f(x)dx$ de $a \triangle b$ »

Les nombres $a$ et $b$ s'appellent les bornes de cette intégrale.

- Dans l'écriture $\int_a^b f(x)dx$, la lettre $x$ peut être remplacée par une autre lettre. Ainsi, on a :

$$\int_a^b f(x)dx = \int_a^b f(t)dt = \int_a^b f(u)du = \dots$$

> **Exemples.**
Calculons les intégrales suivantes : $\int_{a^2}^{a^2} \frac{\ln x}{x} dx$ ; $\int_0^{\ln 2} \frac{e^t}{e^t + 1} dt$ ; $\int_2^6 \sqrt{2 + x} dx$

En utilisant les primitives, on obtient les résultats suivants :

$$\int_{a^2}^{a^2} \frac{\ln x}{x} dx = \left[ \frac{1}{2} \ln^2 x \right]_{a^2}^{a^2} = \frac{1}{2} \ln^2 (e^x) - \frac{1}{2} \ln^2 (e^z) = 6 \quad ; \quad \int_0^{\ln 2} \frac{e^t}{e^t + 1} dt = [\ln(e^t + 1)]_{0}^{\ln 2} = \ln 3 - \ln 2$$

$$\int_2^6 \sqrt{2 + x} dx = \int_2^6 (2 + x)^{\frac{1}{2}} dx = \left[ \frac{2}{3} (2 + x)^{\frac{3}{2}} \right]_{2}^{6} = \frac{2}{3} \left( 8^{\frac{3}{2}} - 4^{\frac{3}{2}} \right) = \frac{16}{3} (2\sqrt{2} - 1)$$

> **Applications.**
1. Determiner la dérivée de la fonction \( F: x \mapsto \ln \left( x + \sqrt{x^2 + 1} \right) \) sur \( \mathbb{R}^* \) puis calculer \( L = \int_0^3 \frac{1}{\sqrt{x^2 + 1}} dx \).
2. Calculer les intégrales suivantes: \( I = \int_{1}^{\sqrt{2}} \frac{dx}{1 + x^2} \); \( J = \int_{\frac{1}{2}}^{a} \frac{\ln^3 x}{x} dx \); \( K = \int_{-2}^{1} x \cdot 2^{-x^2} dx \)

> **Propriété 1.**
Soit $f$ une fonction continue sur un intervalle $I$. Alors on a pour tous $a, b$ et $c$ de $I$ :

\(\int_{a}^{a}f(x)dx = 0\) et \(\int_{a}^{b}f(x)dx = -\int_{b}^{a}f(x)dx\)
\(\int_{a}^{b}f(x)dx = \int_{a}^{b}f(x)dx + \int_{c}^{b}f(x)dx\) (C'est la relation de Chasles pour les intégrales).

Exemple
Considérons l'intégrale $$I = \int_{-2}^{0} |x(x+1)| dx$$. Le tableau de signe de l'expression $$x(x+1)$$ sur $$[-2, 0]$$ est :

|  x | -2 | -1 | 0  |
| --- | --- | --- | --- |
|  x(x+1) | - | 0 | +  |

En utilisant la relation de Chasles, on obtient :

$$I = \int_{2}^{1} |x(x+1)| dx + \int_{1}^{0} |x(x+1)| dx = \int_{-2}^{1} (x^2 + x) dx + \int_{-1}^{0} (-x^2 - x) dx$$

D'où : $$I = \left[ \frac{1}{3} x^3 + \frac{1}{2} x^2 \right]_{-2}^{1} + \left[ -\frac{1}{3} x^3 - \frac{1}{2} x^2 \right]_{-1}^{0} = \left( \frac{1}{6} - \left( -\frac{2}{3} \right) \right) + \left( 0 - \left( -\frac{1}{6} \right) \right) = 1$$. Ainsi : $$I = 1$$

> **Applications.**
1. Calculer les intégrales suivantes : $$\int_{0}^{2} |3x - 4| dx$$ ; $$\int_{-1}^{2} |x^2 - 3x - 4| dx$$ ; $$\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} |\sin 2x| dx$$

2. Soit $$f$$ la fonction numérique définie sur $$[0; 4]$$ par : $$\begin{cases} f(x) = \frac{x}{4-x} \text{ si } 0 \le x < 2 \\ f(x) = \frac{4-x}{x} \text{ si } 2 \le x \le 4 \end{cases}$$

Vérifier que la fonction $$f$$ est continue sur $$[0; 4]$$ puis calculer l'intégrale : $$K = \int_{0}^{4} f(x) dx$$

> **Propriété 2.**
Soit $$f$$ et $$g$$ deux fonctions continues sur un intervalle $$I$$.

Pour tout $$(a, b) \in I^2$$ et pour tout $$\lambda \in \mathbb{R}$$ :

$$\int_{a}^{b} (f(x) + g(x)) dx = \int_{a}^{b} f(x) dx + \int_{a}^{b} g(x) dx \quad \text{et} \quad \int_{a}^{b} \lambda f(x) dx = \lambda \int_{a}^{b} f(x) dx$$

> **Preuve.**
Soit $$F$$ une primitive de $$f$$ sur $$I$$ et $$G$$ celle de $$g$$ sur $$I$$. On sait que $$F + G$$ est une primitive de $$f + g$$ et $$\lambda F$$ est une primitive de $$\lambda f$$. Il s'ensuit que :

$$\int_{a}^{b} (f(x) + g(x)) dx = (F + G)(b) - (F + G)(a) = (F(b) - F(a)) + (G(b) - G(a)) = \int_{a}^{b} f(x) dx + \int_{a}^{b} g(x) dx$$
$$\int_{a}^{b} \lambda f(x) dx = \lambda F(b) - \lambda F(a) = \lambda (F(b) - F(a)) = \lambda \int_{a}^{b} f(x) dx$$. D'où le résultat.

On peut regrouper les deux formules de la propriété 2 dans la formule suivante : « dite de linéarité »

$$(\forall (\lambda, \mu) \in \mathbb{R}^2) \int_{a}^{b} (\lambda f(x) + \mu g(x)) dx = \lambda \int_{a}^{b} f(x) dx + \mu \int_{a}^{b} g(x) dx$$

> **Exemples.**
1) On a: \( A = \int_{0}^{1}\frac{1}{4}\left(\frac{1}{x - 2} -\frac{1}{x + 2}\right)dx = \frac{1}{4}\left(\int_{0}^{x}\frac{dx}{x - 2} -\int_{0}^{1}\frac{dx}{x + 2}\right) = \frac{1}{4}\left(\left[\ln |x - 2|\right]_{0}^{x} + \left[\ln |x + 2|\right]_{0}^{x}\right) = -\frac{1}{4}\ln 3 \)
2) On considere les intégrales: \( K = \int_{0}^{x} \frac{\cos x}{\cos x + \sin x} dx \) et \( L = \int_{0}^{x} \frac{\sin x}{\cos x + \sin x} dx \).

On a: $$K + L = \int_{0}^{x} \frac{\cos x}{\cos x + \sin x} dx + \int_{0}^{x} \frac{\sin x}{\cos x + \sin x} dx = \int_{0}^{x} 1 dx = [x]_{0}^{x} = \frac{\pi}{4}$$

Et: $$K - L = \int_{0}^{x} \frac{\cos x - \sin x}{\cos x + \sin x} dx = [\ln |\cos x + \sin x|]_{0}^{x} = \frac{1}{2} \ln 2$$

Il s'ensuit donc que: $$2K = \frac{\pi}{4} + \frac{1}{2} \ln 2$$ et $$2L = \frac{\pi}{4} - \frac{1}{2} \ln 2$$. D'où: $$K = \frac{\pi}{8} + \frac{1}{4} \ln 2$$ et $$L = \frac{\pi}{8} - \frac{1}{4} \ln 2$$

> **Applications.**
1. Soit \( n \in \mathbb{N}^* \). Montrer que: \( \int_0^1 \frac{1 + x^{2n+1}}{1 + x} dx = 1 - \frac{1}{2} + \frac{1}{3} - \dots + \frac{1}{2n+1} \).
2. Calculer l'intégrale suivante: \( I = \int_{1}^{x}\ln xdx + \int_{1}^{x}\left(\frac{2\ln x}{x} +\ln \frac{1}{x}\right)dx \)
3. On pose: \( K = \int_{0}^{\ln 2}\frac{c' - 1}{c' + 1} dt \) et \( L = \int_{0}^{\ln 2}\frac{1}{c' + 1} dt \).

Calculer $$K + L$$ et $$K + 2L$$ puis en déduire les valeurs de $$K$$ et $$L$$.

#### 1.2. EXPRESSION D'UNE PRIMITIVE À L'AIDE D'UNE INTÉGRALE
> **Proposition 1.**
Soit $$f$$ une fonction continue sur un intervalle $$I$$ et $$a$$ un élément de $$I$$.

La fonction $$\varphi$$ définie sur $$I$$ par: $$\varphi(x) = \int_{0}^{x} f(t) dt$$ est la primitive de $$f$$ sur $$I$$ s'annulant en $$a$$.

> **Remarques.**
- La fonction $$\varphi$$ citée dans la proposition 1 est dérivable sur $$I$$ et de plus: $$(\forall x \in I) \varphi'(x) = f(x)$$
Il s'ensuit donc que pour tout $$x_0 \in I$$ :

$$\lim_{x \to x_0} \frac{1}{x - x_0} \int_{x_0}^{x} f(t) dt = \lim_{x \to x_0} \frac{\varphi(x) - \varphi(x_0)}{x - x_0} = \varphi'(x_0) = f(x_0)$$

On a aussi: $$\lim_{h \to 0} \frac{1}{h} \int_{x_0}^{x_0+h} f(t) dt = f(x_0)$$

- Puisque $$\ln$$ est la primitive de la fonction $$x \mapsto \frac{1}{x}$$ sur $$\mathbb{R}_+^\star$$ qui s'annule en 1 alors:

$$(\forall x \in \mathbb{R}_+^\star) \quad \ln x = \int_{x_0}^{x_0} \frac{1}{l} dt$$

Exemples
1) On considère la fonction $f$ définie sur $\mathbb{R}$ par : $f(x) = \int_0^x e^{-t^2} dt$
On sait que la fonction $t \mapsto e^{-t^2}$ est continue sur $\mathbb{R}$. Il s'ensuit donc que la fonction $f$ est dérivable sur $\mathbb{R}$ et on a pour tout $x \in \mathbb{R}$ : $f'(x) = e^{-t^2}$
2) Étudions les variations de la fonction $G$ définie sur $\mathbb{R}$ par : $G(x) = \int_0^x e^{t^2} (t^2 - 4) dt$
La fonction $G$ étant une primitive sur $\mathbb{R}$ de la fonction $g(x) = e^{x^2} (x^2 - 4)$. Il s'ensuit donc que la fonction $G$ est dérivable sur $\mathbb{R}$ et on a pour tout $x \in \mathbb{R}$ : $G'(x) = e^{x^2} (x^2 - 4)$
Le signe de $G'(x)$ sur $\mathbb{R}$ étant celui de $x^2 - 4$. Par suite :
• La fonction $G$ est croissante sur chacun des intervalles $[2; +\infty[$ et $]-\infty; -2]$.
• La fonction $G$ est décroissante sur l'intervalle $[-2; 2]$.

> **Applications.**
1. Soit $F$ la fonction numérique définie sur $]-1; 1[$ par : $F(x) = \int_0^x \frac{dt}{\sqrt{1 - t^2}}$
a) Montrer que la fonction $F$ est dérivable sur $]-1; 1[$ puis déterminer $F'(x)$ pour tout $x \in ]-1; 1[$.
b) Pour tout $u \in ]-\frac{\pi}{2}, \frac{\pi}{2}[$ on pose : $G(u) = F(\sin(u))$. Montrer que la fonction $G$ est linéaire.
2. Déterminer la fonction $h$ continue sur $\mathbb{R}$ telle que : $(\forall x \in \mathbb{R}) \int_0^x h(t) dt = \ln\left(\frac{1 + e^{2x}}{4}\right)$

> **Proposition 2.**
Soit $f$ une fonction continue sur un intervalle $I$ et $v$ une fonction dérivable sur un intervalle $J$ telle que $v(J) \subset I$. Alors pour tout $a \in I$ :
La fonction $F : x \mapsto \int_0^{a(x)} f(t) dt$ est dérivable sur $J$ et de plus : $(\forall x \in J) F'(x) = v'(x) f(v(x))$

> **Preuve.**
On a pour tout $x \in J$ : $F(x) = \varphi(v(x)) = \varphi_0 v(x)$ où $\varphi : x \mapsto \int_\varphi^x f(t) dt$. Donc : $F = \varphi_0 v$
Puisque $v$ est dérivable sur $J$ avec $v(J) \subset I$, et $\varphi$ est dérivable sur $I$ avec $\varphi' = f$, alors la fonction $F$ est dérivable sur $J$ et on a pour tout $x \in J$ : $F'(x) = v'(x) \varphi'(v(x)) = v'(x) f(v(x))$

> **Exemples.**
1) On considère la fonction $F$ définie sur $\mathbb{R}$ par : $F(x) = \int_0^{x^2 + 2x} \sqrt{1 + t} dt$
La fonction $f : t \mapsto \sqrt{1 + t}$ est continue sur $[-1; +\infty[$ et la fonction $v : x \mapsto x^2 + 2x$ est dérivable sur $\mathbb{R}$

#### RÉSUMÉ D'ÉTUDIÉS

avec $v(\mathbb{R}) = [-1; +\infty]$. Par suite, la fonction $F$ est dérivable sur $\mathbb{R}$ et de plus, pour tout $x \in \mathbb{R}$ :

$$F'(x) = v'(x)f(v(x)) = 2(x+1)\sqrt{(x+1)^2} = 2(x+1)[x+1]$$

2) Soit $G$ la fonction numérique définie sur $\mathbb{R}$ par : $G(x) = \int_{1x}^{2x} e^x dt$

Étudions les variations de la fonction $G$ sur $\mathbb{R}$ :

La fonction $f : t \mapsto e^t$ est continue sur $\mathbb{R}$. De plus, les fonctions $u : x \mapsto 3x$ et $v : x \mapsto 5x$ sont dérivables sur $\mathbb{R}$ et on a : $u'(x) = 3$ et $v'(x) = 5$

Selon la relation de Chasles : $G(x) = \int_0^{5x} e^x dt - \int_0^{3x} e^x dt$

D'après la proposition 2, la fonction $G$ est dérivable sur $\mathbb{R}$ et on a pour tout $x \in \mathbb{R}$ :

$$G'(x) = (5x)^t f(5x) - (3x)^t f(3x) = 5e^{3x^2} - 3e^{9x^2} = 5e^{9x^2} \left( e^{16x^2} - \frac{3}{5} \right)$$

Puisque $e^{16x^2} \ge 1$ alors $G'(x) > 0$ pour tout $x \in \mathbb{R}$. Ainsi, la fonction $G$ est strictement croissante sur $\mathbb{R}$.

> **Applications.**
1. Montrer que les fonctions \( F \) et \( G \) définies par: \( F(x) = \int_{\infty}^{x} \sqrt{1 - t^2} dt \) et \( G(x) = \int_{-x}^{2x} \ln(e^t + 1) dt \) sont dérivables sur \( \mathbb{R} \) et déterminer leurs fonctions dérivées.
2. Soit \( H \) la fonction numérique définie sur \( \mathbb{R}_+^* \) par: \( H(x) = \int_{x}^{2x} \frac{dt}{\ln(1 + t^2)} \)

Montrer que $H$ est dérivable sur $\mathbb{R}_+^*$ et que : $\ln(1+x^2)\ln(1+4x^2)H'(x) = \ln\left(\frac{(1+x^2)^2}{1+4x^2}\right)$

Puis étudier les variations de $H$ sur $\mathbb{R}_+^*$.

3. Étudier les variations des fonctions suivantes : $u : x \mapsto \int_{1x}^{4x} \frac{dt}{1+t^4}$ et $v : x \mapsto \int_0^{x^2} \frac{e^t}{1+t^4} dt$

#### 1.3. INTERPRÉTATION GÉOMÉTRIQUE D'UNE INTÉGRALE
> **Proposition 3.**
Soit $f$ une fonction continue et positive sur un segment $[a; b]$ ($a < b$) et $\mathcal{C}_f$ sa courbe représentative dans un repère orthogonal.

L'aire du domaine délimité par la courbe $\mathcal{C}_f$, l'axe des abscisses et les droites d'équations $x=a$ et $x=b$ est :

$$\mathcal{A} = \int_a^b f(x) dx$$

(exprimée en unités d'aire)

> **Exemple.**
On considère la fonction g définie sur R par : $$g(x) = -\frac{1}{2}x^2 - x$$
Dans la figure ci-contre, $$\mathcal{C}_g$$ est la courbe représentative
de g dans un repère orthonormé $$(O, \vec{i}, \vec{j})$$ avec $$\|\vec{i}\| = 1,5cm$$.
Puisque $$g(x) \ge 0$$ sur le segment $$[-2, 0]$$ alors l'aire du domaine
coloré $$\Delta$$ est donnée par :
$$\mathcal{A}(\Delta) = \int_{-2}^{0} \left(-\frac{1}{2}x^2 - x\right) dx$$ en unités d'aire (ici $$2,25cm^2$$)
Or : $$\int_{-2}^{0} \left(-\frac{1}{2}x^2 - x\right) dx = \left[-\frac{1}{6}x^3 - \frac{1}{2}x^2\right]_{-2}^{0} = \frac{2}{3}$$
Il s'ensuit donc que : $$\mathcal{A}(\Delta) = \frac{2}{3} \times 2,25cm^2 = 1,5cm^2$$

> **Applications.**
1. Soit f la fonction numérique définie sur R par : $$f(x) = 6 + 5e^x - e^{2x}$$
et $$\mathcal{C}_f$$ sa courbe représentative dans un repère orthonormé $$(O, \vec{i}, \vec{j})$$ avec : $$\|\vec{i}\| = \|\vec{j}\| = 2cm$$
Résoudre dans R l'inéquation $$f(x) \ge 0$$ puis déterminer l'aire du domaine délimité par $$\mathcal{C}_f$$, les axes du
repère et la droite d'équation $$x = \ln\left(\frac{5}{2}\right)$$.

2. Soit g la fonction numérique définie sur R par : $$g(x) = \cos\left(3x - \frac{\pi}{4}\right)$$,
et $$\mathcal{C}_g$$ son graphe dans un repère orthogonal $$(O, \vec{i}, \vec{j})$$ avec : $$\|\vec{i}\| = 2cm$$ et $$\|\vec{j}\| = 3cm$$. Déterminer l'aire
du domaine délimité par $$\mathcal{C}_g$$, l'axe des abscisses et les droites d'équations : $$x = -\frac{\pi}{12}$$ et $$x = \frac{\pi}{6}$$.

### 2. Techniques de calcul d'intégrales
#### 2.1. UTILISATION DES PRIMITIVES
Pour calculer une intégrale, on envisage en premier temps d'utiliser le tableau des primitives des fonctions
usuelles et leurs propriétés. Ainsi, et avant d'entamer le calcul d'une intégrale d'une fonction f, on doit vé-

rifier la continuité de f sur l'intervalle d'intégration puis voir si f s'écrit sous la forme u'.(v'ou)

(car une primitive de f est donc vou) ou bien voir si le problème demande de transformer l'expression de
la fonction f en une somme des fonctions faciles à intégrer.

Maintenant que le lien entre recherche de primitives et calcul d'intégrales a été rappelé, nous allons donner
deux méthodes permettant de simplifier le calcul d'intégrales et donc la recherche des primitives, à savoir :

Intégration par parties et intégration par changement de variable

#### 2.2. INTÉGRATION PAR PARTIES
> **Proposition 4.**
Soit $u$ et $v$ deux fonctions dérivables sur un intervalle $I$ telles que ses dérivées $u'$ et $v'$ soient continues sur $I$. Alors pour tout $(a, b) \in I^2$ on a : $\int_0^b u'(t)v(t)dt = [u(t)v(t)]_0^b - \int_0^b u(t)v'(t)dt$

> **Exemples.**
1) Calculons l'intégrale $I = \int_0^{\frac{3}{4}} \ln \left( t + \sqrt{t^2 + 1} \right) dt$ par intégration par parties :

Posons : $u = \ln \left( t + \sqrt{t^2 + 1} \right) \to u' = \frac{1}{\sqrt{t^2 + 1}}$ et $v' = 1 \to v = t$

Il s'ensuit donc : $I = \left[ t \ln \left( t + \sqrt{t^2 + 1} \right) \right]_0^{\frac{3}{4}} - \int_0^{\frac{3}{4}} \frac{t}{\sqrt{t^2 + 1}} dt = \frac{3}{4} \ln(2) - \left[ \sqrt{t^2 + 1} \right]_0^{\frac{3}{4}} = \frac{3}{4} \ln(2) - \frac{1}{4}$

2) Calculons l'intégrale $J = \int_1^{\sqrt{3}} t \operatorname{Arc} \tan(t) dt$ par intégration par parties :

Posons : $u = \operatorname{Arc} \tan t \to u' = \frac{1}{t^2 + 1}$ et $v' = t \to v = \frac{t^2}{2}$

Il s'ensuit donc : $J = \left[ \frac{t^2}{2} \operatorname{Arc} \tan t \right]_1^{\sqrt{3}} - \frac{1}{2} \int_1^{\sqrt{3}} \frac{t^2}{t^2 + 1} dt = \frac{3\pi}{8} - \frac{1}{2} \int_1^{\sqrt{3}} \frac{t^2}{t^2 + 1} dt$

D'autre part : $\frac{t^2}{t^2 + 1} = \frac{t^2 + 1 - 1}{t^2 + 1} = 1 - \frac{1}{t^2 + 1}$. Il s'ensuit donc :

$$J = \frac{3\pi}{8} - \frac{1}{2} \int_1^{\sqrt{3}} \left( 1 - \frac{1}{t^2 + 1} \right) dt = \frac{3\pi}{8} - \frac{1}{2} \left[ t - \operatorname{Arc} \tan t \right]_1^{\sqrt{3}} = \frac{5\pi}{12} + \frac{1}{2} - \frac{\sqrt{3}}{2}$$

3) On considère l'intégrale : $K = \int_0^{\frac{\pi}{2}} e^x \cos(x) dx$

La formule d'intégration par parties donne : (en posant : $u = e^x \to u' = e^x$ et $v' = \cos x \to v = -\sin x$)

$$K = \left[ e^x \cos x \right]_0^{\frac{\pi}{2}} + \int_0^{\frac{\pi}{2}} e^x \sin x dx = -1 + \int_0^{\frac{\pi}{2}} e^x \sin x dx$$

En réappliquant la formule d'intégration par parties sur l'intégrale $\int_0^{\frac{\pi}{2}} e^x \sin x dx$ en posant :

$u = e^x \to u' = e^x$ et $v' = \sin x \to v = \cos x$, on obtient :

$$\int_0^{\frac{\pi}{2}} e^x \sin x dx = \left[ e^x \sin x \right]_0^{\frac{\pi}{2}} - \int_0^{\frac{\pi}{2}} e^x \cos x dx = e^{\frac{\pi}{2}} - K$$

Il s'ensuit donc : $K = -1 + e^{\frac{\pi}{2}} - K$. Ainsi : $K = \frac{1}{2} \left( e^{\frac{\pi}{2}} - 1 \right)$

Applications
1. En appliquant la formule d'intégration par parties, calculer les intégrales suivantes :
$$I_1 = \int_{1}^{1} x e^x dx \quad ; \quad I_2 = \int_{-2}^{1} x \sqrt{2-x} dx \quad ; \quad I_3 = \int_{1}^{1} \ln(t^2+1) dt \quad ; \quad I_4 = \int_{0}^{\frac{\pi}{6}} \frac{x}{\cos^2 x} dx$$
$$I_5 = \int_{2}^{1} \ln \left| \frac{x-1}{x} \right| dx \quad ; \quad I_6 = \int_{1}^{e} \frac{\ln t}{t^2} dt \quad ; \quad I_7 = \int_{-1}^{\sqrt{3}} \operatorname{Arc} \tan(t) dt$$
$$J_n = \int_{1}^{e} (\ln t)^n dt \quad \text{et} \quad K_n = \int_{0}^{1} t^n e^t dt$$

2. Pour tout $n \in \mathbb{N}$ on pose : $J_{n+1} = \int_{1}^{e} (\ln t)^n dt$ et $K_n = \int_{0}^{1} t^n e^t dt$
En utilisant la formule d'intégration par parties, montrer que pour tout $n \in \mathbb{N}$ :
$$J_{n+1} + (n+1)J_n = e \quad \text{et} \quad K_{n+1} + (n+1)K_n = e$$
3. En utilisant la technique d'intégration par parties, déterminer toutes les primitives sur $\mathbb{R}^*$ de la fonction $x \mapsto \frac{x^2}{(x^3+1)^2} \ln x$.
4. En utilisant deux fois l'intégration par parties, calculer $K(x) = \int_{1}^{x} \cos(\ln t) dt$ pour tout $x \in \mathbb{R}^*$.

#### 2.3. INTÉGRATION PAR CHANGEMENT DE VARIABLE
> **Proposition 5.**
Soit $f$ une fonction continue sur un intervalle $I$. Soit $u$ une fonction dérivable sur un intervalle $E$ telle que : $u'$ est continue sur $E$ et $u(E) \subset I$.

On a alors pour tout $(\alpha, \beta) \in E^2$ : $\int_{\alpha}^{\beta} f(u(t)) u'(t) dt = \int_{u(\alpha)}^{u(\beta)} f(x) dx$

Si $u$ est une bijection de $E$ vers $I$, alors pour tout $(a, b) \in I^2$ : $\int_{a}^{b} f(x) dx = \int_{u^{-1}(a)}^{u^{-1}(b)} f(u(t)) u'(t) dt$

> **Preuve.**
Soit $F$ une primitive de la fonction $f$ sur $I$. On a alors :

$\int_{u(\alpha)}^{u(\beta)} f(x) dx = F(u(\beta)) - F(u(\alpha)) = F_{ou}(\beta) - F_{ou}(\alpha)$

On pose $G = F_{ou}$. Puisque $u$ est dérivable sur $E$ et $u(E) \subset I$ et $F$ est dérivable sur $I$, alors $G$ est dérivable sur $E$ et on a : $G' = (F'_{ou}) \times u' = (f_{ou}) \times u'$. Par suite, $F_{ou}$ est une primitive de $(f_{ou}) \times u'$ sur $E$.

Ainsi : $\int_{u(\alpha)}^{u(\beta)} f(x) dx = \int_{\alpha}^{\beta} f(u(t)) u'(t) dt$

Si $u$ est une bijection de $E$ vers $I$ alors pour tout $(a, b) \in I^2$ :

$\int_{a}^{b} f(x) dx = \int_{u(u^{-1}(\alpha))}^{u(u^{-1}(b))} f(x) dx \quad \text{et donc : } \int_{a}^{b} f(x) dx = \int_{u^{-1}(\alpha)}^{u^{-1}(b)} f(u(t)) u'(t) dt$

> **Remarque.**
• Pratiquement et en posant $x = u(t)$, on trouve $\frac{dx}{dt} = u'(t)$ c'est-à-dire que $dx = u'(t)dt$, de sorte que l'expression $f(u(t))u'(t)dt$ soit égale à l'expression $f(x)dx$, et on a :

$$t = \alpha \Rightarrow x = u(\alpha) \quad \text{et} \quad t = \beta \Rightarrow x = u(\beta)$$

On dit qu'on a effectué un changement de variable en posant $x = u(t)$.

> **Exemples.**
1) Calculons l'intégrale : $I = \int_{t=1}^{t} \frac{dt}{\sqrt{3 + \ln t}}$

En posant $x = \ln t$, on obtient $dx = \frac{dt}{t}$. On a de plus : $t = e^{-2} \Rightarrow x = -2$ et $t = e \Rightarrow x = 1$

Il s'ensuit donc : $I = \int_{-2}^{1} \frac{dx}{\sqrt{3 + x}} = \left[ 2\sqrt{3 + x} \right]_{-2}^{1} = 2$

2) Calculons l'intégrale : $J = \int_{0}^{1} \frac{\sqrt{x}}{x + 1} dx$

En posant $t = \sqrt{x}$, on obtient $x = t^2$ et $dx = 2t.dt$. Ainsi :

$$J = \int_{0}^{1} \frac{2t^2}{1 + t^2} dt = 2 \int_{0}^{1} \left( 1 - \frac{1}{1 + t^2} \right) dt = 2 \left[ t - \operatorname{Arc} \tan t \right]_{0}^{1} = 2 - \frac{\pi}{2}$$

3) Calculons l'intégrale : $K = \int_{0}^{1} \sqrt{1 - x^2} dx$

En posant $x = \sin t$, on obtient $dx = \cos t dt$. On a de plus : $x = 0 \Rightarrow x = 0$ et $x = 1 \Rightarrow t = \frac{\pi}{2}$

Ainsi : $K = \int_{0}^{\frac{\pi}{2}} \sqrt{\cos^2 t} \cdot \cos t dt = \int_{0}^{\frac{\pi}{2}} \cos^2 t dt = \frac{1}{2} \int_{0}^{\frac{\pi}{2}} (1 + \cos 2t) dt = \frac{1}{2} \left[ t + \frac{1}{2} \sin 2t \right]_{0}^{\frac{\pi}{2}} = \frac{\pi}{4}$

> **Applications.**
1. Calculer les intégrales suivantes :

$$I_1 = \int_{0}^{1} \sqrt{\frac{1 - x}{1 + x}} dx \quad (\text{poser } x = \cos t) \quad ; \quad I_2 = \int_{0}^{1} \frac{1}{1 + \sqrt{1 + x}} dx \quad (\text{poser } t = 1 + \sqrt{1 + x})$$

$$I_3 = \int_{2\sqrt{3}}^{2} \frac{dt}{t\sqrt{t^2 - 1}} \quad (\text{poser } t = \frac{1}{\sin x}) \quad ; \quad I_4 = \int_{-1}^{2} \frac{dx}{3x^2 + 2x + 1} \quad (\text{poser } t = \frac{3x + 1}{\sqrt{2}})$$

$$I_5 = \int_{0}^{1/2} \sqrt{e^x + 1} dx \quad (\text{poser } t = e^x) \quad ; \quad I_6 = \int_{1}^{\sqrt{3}} \frac{dx}{x^2\sqrt{4 - x^2}} \quad (\text{poser } u = \frac{1}{x})$$

2. Montrer que la fonction $F : x \mapsto \int_{2x}^{4x} \frac{t}{t^4 + t^2 + 1} dt$ est paire.

> **Preuve.**
Soit $F$ une primitive de la fonction $f$ sur $[a; b]$. Donc : $\int_a^b f(x)dx = F(b) - F(a)$. Puisque $f$ est positive sur $[a; b]$, alors la fonction $F$ est croissante sur $[a; b]$, donc $F(b) - F(a) \geq 0$, d'où $\int_a^b f(x)dx \geq 0$.

Si $f(x) \leq g(x)$ pour tout $x \in [a; b]$, alors $\int_a^b (g(x) - f(x))dx \geq 0$, et donc $\int_a^b f(x)dx \leq \int_a^b g(x)dx$.

> **Exemple.**
1) Encadrons l'intégrale : $A = \int_{\frac{\pi}{4}}^{\frac{\pi}{2}} \frac{dx}{\sin x}$

On a pour tout $x \in \left[\frac{\pi}{4}; \frac{\pi}{2}\right]$, $\sin \frac{\pi}{4} \leq \sin x \leq \sin \frac{\pi}{2}$ car $\sin$ est croissante sur $\left[\frac{\pi}{4}; \frac{\pi}{2}\right]$. Il s'ensuit donc que

$1 \leq \frac{1}{\sin x} \leq \sqrt{2}$ pour tout $x \in \left[\frac{\pi}{4}; \frac{\pi}{2}\right]$, d'où : $\int_{\frac{\pi}{4}}^{\frac{\pi}{2}} dx \leq \int_{\frac{\pi}{4}}^{\frac{\pi}{2}} \frac{dx}{\sin x} \leq \int_{\frac{\pi}{4}}^{\frac{\pi}{2}} \sqrt{2} dx$. Ainsi : $\frac{\pi}{4} \leq A \leq \frac{\pi\sqrt{2}}{4}$

2) Comparons les intégrales : $L = \int_0^{\frac{\pi}{4}} \ln(\cos x)dx$ et $K = \int_0^{\frac{\pi}{4}} \ln(\cos \sqrt{x})dx$

On a pour tout $x \in \left[0; \frac{\pi}{4}\right]$, $x \leq \sqrt{x}$. Puisque la fonction $\cos$ est décroissante sur $\left[0; \frac{\pi}{4}\right]$ alors pour tout $x \in \left[0; \frac{\pi}{4}\right]$, $\cos x \geq \cos \sqrt{x}$, et donc $\ln(\cos x) \geq \ln(\cos \sqrt{x})$ car $\ln$ est croissante sur $\mathbb{R}_+^*$.

que $\int_0^{\frac{\pi}{4}} \ln(\cos x)dx \geq \int_0^{\frac{\pi}{4}} \ln(\cos \sqrt{x})dx$, c'est-à-dire que $K \leq L$.

> **Applications.**
1. Montrer que : $0 \leq \int_1^{\frac{\pi}{2}} \frac{\sin t}{t} dt \leq \frac{\pi}{2} - 1$ et $\frac{\pi}{3} \leq \int_0^{\frac{\pi}{3}} \frac{1+t}{\cos t} dt \leq \frac{\pi^2}{9} + \frac{2\pi}{3}$

2. Montrer que pour tout $x \in \mathbb{R}_+^*$ : $0 \leq \int_x^{2x} \frac{dt}{\sqrt{t^4 + t^2 + 1}} \leq \frac{1}{x}$

3. Pour tout $n \in \mathbb{N}$, on pose: $I_n = \int_0^{\frac{\pi}{6}} x^n \cos(3x) dx$

a) Montrer que la suite \(\left(I_{n}\right)\) est décroissant.
b) Montrer que pour tout \(n\in \mathbb{N}\) .. \(0\leq I_n\leq \left(\frac{\pi}{6}\right)^n\) .En deduire \(\lim_{n\to \infty}I_n\)

### 3. Intégration et ordre

> **Note d'édition.** Le titre de la section 3 et le paragraphe 3.1 ne sont pas lisibles dans l'extraction des pages sources 253-254.

#### 3.2. INTÉGRALE ET VALEUR ABSOLUE
> **Proposition 7.**
Soit $f$ une fonction continue sur un intervalle $I$, et soit $(a; b) \in I^2$ tel que $a \le b$.

On a alors: $\left| \int_a^b f(x) dx \right| \le \int_a^b |f(x)| dx$

> **Exemple.**
Encadrons le nombre: $A = \left| \int_0^1 \frac{\sin(\pi t)}{2t+1} dt \right|$

On a: $A \le \int_0^1 \left| \frac{\sin(\pi t)}{2t+1} \right| dt$. On sait que pour tout $t \in [0; 1]$, $|\sin(\pi t)| \le 1$, donc $\left| \frac{\sin(\pi t)}{2t+1} \right| \le \frac{1}{2t+1}$ pour tout

$t \in [0; 1]$, et alors $A \le \int_0^1 \frac{1}{2t+1} dt$. Comme $\int_0^1 \frac{1}{2t+1} dt = \frac{1}{2} [\ln(2t+1)]_0^1 = \frac{\ln 3}{2}$ alors: $0 \le A \le \frac{\ln 3}{2}$

> **Applications.**
Montrer que pour tout $x \in \mathbb{R}$: $\left| \int_{2x-1}^{x^2} t \sqrt{3 + \cos t} \, dt \right| \le x^4 + (2x - 1)^2$

#### 3.3. VALEUR MOYENNE D'UNE FONCTION
> **Proposition 8.**
Soit $f$ une fonction continue sur un intervalle $I$, et soit $(a; b) \in I^2$ tel que $a \le b$.

- S'il existe deux réels $m$ et $M$ tels que pour tout $x \in [a; b]$, $m \le f(x) \le M$, alors:

$$m(b-a) \le \int_a^b f(x) dx \le M(b-a)$$

- S'il existe un réel $M$ tels que pour tout $x \in [a; b]$, $|f(x)| \le M$, alors: $\left| \int_a^b f(x) dx \right| \le M(b-a)$

> **Définition 2.**
Soit $f$ une fonction continue sur un segment $[a; b]$ ($a < b$).

La valeur moyenne de la fonction $f$ sur $[a; b]$ est le nombre réel $\mu = \frac{1}{b-a} \int_a^b f(x) dx$.

> **Remarques.**
- Très souvent dans la pratique, \( m \) et \( M \) représentent le minimum et le maximum de la fonction \( f \) sur le segment \( [a, b] \).
Si on a \(m\leq f\leq M\) sur \(\left[a,b\right]\) \((a <   b)\) , alors \(m\leq \mu \leq M\) .C'est pourquoi la proposition 8 porte le nom de « inegalite de la moyenne »
La formule \(\mu = \frac{1}{b - a}\int_{a}^{b}f(x)dx\) est une generalisation de la formule \(\overline{x} = \frac{1}{N}\sum_{i = 1}^{N}f(x_i)\) donnant la moyenne arithmetique d'une série statistique.

> **Proposition 9.**
Soit $f$ une fonction continue sur un segment $[a; b]$ $(a < b)$.

Il existe au moins un réel $c \in [a; b]$ tel que : $\int_{a}^{b} f(x)dx = (b - a)f(c)$

Ce résultat porte le nom de « Théorème de la moyenne »

> **Remarques.**
Si \(f([a,b]) = [m,M]\) et \(F\) designe une primitive de la fonction \(f\) sur \([a,b]\) , alors la formule \(\int_{a}^{b}f(x)dx = (b - a)f(c)\) est equivalente a \(F(b) - F(a) = (b - a)F'(c)\) , et cette formule n'est qu'une copie de la formule du theoreme des accroissements finis appliquee a la fonction \(F\)
- Graphiquement, une interprétation de ce théorème est que l'aire algébrique sous la courbe \(\mathcal{C}_f\) est égale à celle d'un rectangle de base \([a,b]\), et de hauteur l'ordonnée d'un point moyen de la courbe.

> **Exemples.**
La valeur moyenne de la fonction $x \mapsto \ln x \text{ sur } [1, e]$ est $\mu = \frac{1}{e-1} \int_{1}^{e} \ln(x)dx$. Une intégration par parties appliquée à l'intégrale $\int_{1}^{e} \ln(x)dx$ donne : $\int_{1}^{e} \ln(x)dx = [x \ln x]_{1}^{e} - \int_{1}^{e} dx = e - [x]_{1}^{e} = 1$, donc $\mu = \frac{1}{e-1}$.

2) Soit $f$ la fonction définie par : $f(x) = \frac{1}{\ln x} - \frac{1}{x-1}$. Pour tout $x \in ]1; +\infty[$, on pose : $H(x) = \int_x^{x^2} \frac{dt}{\ln t}$
D'après le théorème de la moyenne, il existe un réel $c_x \in [x; x^2]$ tel que :

$$H(x) = (x^2 - x)f(c_x) + [\ln(t-1)]_x^{x^2} = (x^2 - x)f(c_x) + \ln(x+1)$$

Ce résultat permet de calculer par exemple $\lim_{x \to 1^\infty} H(x)$ (on trouve : $\lim_{x \to 1^\infty} H(x) \approx \ln 2$)

> **Applications.**
1. Calculer la valeur moyenne de la fonction \( f: x \mapsto \frac{2e^{2x}}{2e^x - 1} \) sur le segment \( [0, \ln 2] \).
2. Soit \( a \) un réel strictement positif, et soit \( g \) une fonction continue sur \( [0, a] \). Pour tout \( n \in \mathbb{N} \) on pose: \( u_n = \int_0^a \frac{g(x)}{1 + nx} dx \). Détérminer la limite de la suite \( (u_n) \).
3. Soit \( h \) une fonction continue sur \( [0,1] \) telle que \( \int_0^h h(x)dx = \frac{\pi}{4} \). En appliquant le théorème de la moyenne à la fonction \( x \mapsto h(x) - \frac{1}{1 + x^2} \) sur \( [0,1] \), montré que: \( (\exists c \in [0,1]) \frac{1}{1 + c} \leq h(c) \leq \frac{1}{2c} \).

### 4. Applications du calcul intégral
#### 4.1. CALCUL DES AIRES
> **Proposition 10.**
Soit $f$ une fonction continue sur un segment $[a; b](a < b)$, et $\mathcal{C}_f$ sa courbe représentative dans un repère orthogonal.

L'aire du domaine délimité par $\mathcal{C}_f$, l'axe des abscisses et les droites d'équations $x = a$ et $x = b$ est égale à $\int_a^b |f(x)|dx$ (en unité d'aire).

> **Preuve.**
Le plan est rapporté à un repère orthogonal $(O, \bar{i}, \bar{j})$.

$f$ une fonction définie et continue sur le segment $[a; b](a < b)$. $\mathcal{C}_f$ la courbe de $f$ dans le repère $(O, \bar{i}, \bar{j})$.

on rappelle que l'unité de mesure d'aire est l'aire du rectangle de dimensions $\|\bar{i}\|$ et $\|\bar{j}\|$.

Soit $(\Delta)$ le domaine délimité par $\mathcal{C}_f$, l'axe des abscisses et les droites d'équations

$x = a$ et $x = b$. On note $\sigma(\Delta)$ ou $\sigma(f)$

l'aire du domaine $(\Delta)$.

Le nombre positif \(\int_{a}^{b}|f(x)|dx\) est appelé l'aire géométrique du domaine \((\Delta)\)
Le nombre \(\int_{a}^{b}f(x)dx\) est appelé l'aire algebrique du domaine \((\Delta)\)

• Dans le cas où la fonction $f$ est positive sur $[a; b]$, on a déjà vu du paragraphe 1.3, qui concerne l'interprétation géométrique de l'intégrale, que : $\sigma(\Delta) = \int_{a}^{b} f(x) dx$ (unité de mesure).

• Dans le cas où la fonction $f$ est négative sur $[a; b]$, alors $(\Delta) = \{M(x, y) / f(x) \leq y \leq 0\}$. En utilisant la symétrie axiale d'axe $(Ox)$ (axe des abscisses), on remarque bien que l'aire du domaine $\sigma(\Delta)$ est égale à l'aire du domaine $(\Gamma)$ délimité par $e_{-f}$ (courbe de $-f$), l'axe des abscisses et les droites d'équations $x = a$ et $x = b$.

Donc : $\sigma(\Delta) = \sigma(\Gamma) = \int_{a}^{b} -f(x) dx$

Comme $|f| = -f$, alors $\sigma(\Delta) = \int_{a}^{b} |f(x)| dx$ (unité de mesure).

• Si la fonction $f$ change de signe sur $[a; b]$, par exemple il existe $c \in [a; b]$ tel que $f$ soit positive sur $[c; b]$ et négative sur $[a; c]$ alors : $\sigma(\Delta) = \sigma(\Delta_1) + \sigma(\Delta_2)$ avec $\sigma(\Delta_1) = \int_{a}^{c} -f(x) dx$

et $\sigma(\Delta_2) = \int_{a}^{b} f(x) dx$ et donc :

$$\sigma(\Delta) = \int_{a}^{b} |f(x)| dx + \int_{c}^{b} |f(x)| dx = \int_{a}^{b} |f(x)| dx$$

(unité d'aire).

> **Exemple.**
Dans le plan rapporté à un repère orthogonal, déterminons l'aire du domaine $(\Delta)$ délimité par la courbe de la fonction $f : x \mapsto \sin x$ et les droites d'équations : $x = 0$ et $x = \frac{3\pi}{2}$.

On remarque que la fonction $f$ change de signe sur l'intervalle $\left[0; \frac{3\pi}{2}\right]$ en $\pi$. Donc l'aire demandée

est : $\sigma(\Delta) = \int_{0}^{\frac{3\pi}{2}} |\sin x| dx$ (unités d'aire).

$$\sigma(\Delta) = \int_{0}^{\pi} \sin x dx + \int_{\pi}^{\frac{3\pi}{2}} (-\sin x) dx = [-\cos x]_{0}^{\pi} + [-\cos x]_{\pi}^{\frac{3\pi}{2}} = 3$$

Ainsi : $\sigma(\Delta) = 3u$ où $u$ est l'unité d'aire.

> **Applications.**
Soit $g$ la fonction numérique définie sur $[0, +\infty[$ par : $g(x) = x - 2\sqrt{x}$

Étudier le signe de $g(x)$ sur $[0, +\infty[$ puis calculer l'aire du domaine délimité par la courbe de $g$ et les droites d'équations : $x = 0$ et $x = 5$ et $y = 0$

> **Proposition 11.**
Le plan est rapporté à un repère orthogonal.

Soit $f$ et $g$ deux fonctions continues sur un segment $[a, b]$.

Soit $\mathcal{C}_f$ et $\mathcal{C}_g$ les courbes représentatives de $f$ et $g$.

Soit $(\Delta)$ le domaine délimité par les courbes

$\mathcal{C}_f$ et $\mathcal{C}_g$ et les droites d'équations $x = a$ et $x = b$. Alors :

L'aire du domaine $(\Delta)$ en unités d'aire est donnée par :

$$\sigma(\Delta) = \int_a^b |f(x) - g(x)| dx$$

#### 4.2. CALCUL DES VOLUMES
> **Proposition 12.**
L'espace est rapporté à un repère orthonormé $(O, \vec{i}, \vec{j}, \vec{k})$. Soit $(a; b) \in \mathbb{R}^2$ tel que $a < b$.

On considère un solide $(S)$ limité par deux plans parallèles

au plan $(O, \vec{i}, \vec{j})$ :

> le plan de cote a d'équation \( z = a \)
> le plan de cote b d'equation \(z = b\)

Si $S(t)$ est l'aire de l'intersection du solide $(S)$ avec tout

plan parallèle à $(O, \vec{i}, \vec{j})$ de cote $t$ alors le volume de ce

solide est (en unités de volume) : $v(S) = \int_a^b S(t) dt$

> **Preuve.**
Soit $v(t)$ le volume de l'ensemble des points appartenant à $(S)$ et qui sont compris entre les plans d'équations $z = a$ et $z = t$. Et soit $t_0 \in [a, b]$ et $h \in \mathbb{R}^+$, tel que $t_0 + h \in [a; b]$.

le volume de l'ensemble des points de $(S)$ et qui sont compris entre les plans d'équations $z = t_0$ et $z = t_0 + h$ est $v(t_0 + h) - v(t_0)$. Ce volume est encadré par les volumes des cylindres de hauteur $h$ et d'aires de bases

respectives $S(t_0)$ et $S(t_0 + h)$.

$S(S(t_0) \le S(t_0 + h))$, on obtient : $hS(t_0) \le v(t_0 + h) - v(t_0) \le hS(t_0 + h)$

$S(S(t_0 + h) \le S(t_0))$, on obtient : $hS(t_0 + h) \le v(t_0 + h) - v(t_0) \le hS(t_0)$

Dans les deux cas on a : $\left| \frac{v(t_0 + h) - v(t_0)}{h} - S(t_0) \right| \le |S(t_0 + h) - S(t_0)|$

Et puisqu'on a supposé que la fonction $S$ est continue sur $[a, b]$ alors $\lim_{h \to 0} S(t_0 + h) = S(t_0)$ et donc :

$\lim_{h \to 0} \frac{v(t_0 + h) - v(t_0)}{h} = S(t_0)$. On montre de même que $\lim_{h \to 0} \frac{v(t_0 + h) - v(t_0)}{h} = S(t_0)$.

Il s'ensuit que $v$ est dérivable sur $[a, b]$ et pour tout $t \in [a; b]$, $v'(t) = S(t)$. Cela signifie donc que $v$ est

la primitive de $S$ qui s'annule en $a$. Donc, pour tout $t \in [a; b]$ : $v(t) = \int_a^t S(x)dx$

Par suite, le volume du solide $(S)$ est : $v(S) = v(b) = \int_a^b S(x)dx$ ou encore $v(S) = \int_a^b S(t)dt$.

> **Proposition 13.**
L'espace est rapporté à un repère orthonormé $(O, \vec{i}, \vec{j}, \vec{k})$.

Soit $f$ une fonction continue sur un segment $[a, b](a < b)$, et $\mathcal{C}_g$ sa courbe représentative dans le repère $(O, \vec{i}, \vec{j})$.

Le volume du solide engendré par la rotation de la courbe $\mathcal{C}_g$ autour de l'axe des abscisses un tour complet est donné par la formule : $V = \pi \int_a^v (f(x))^2 dx$ (en unités de volume)

> **Exemple.**
Le volume du solide engendré par la rotation de la courbe de la fonction $f : x \mapsto e^{2x}$ sur $[0, 1]$ autour de l'axe des abscisses un tour complet est donné par :

$$V = \pi \int_0^1 (e^{2x})^2 dx = \pi \int_0^1 e^{4x} dx = \frac{\pi}{4} [e^{4x}]_0^1 = \frac{\pi (e^4 - 1)}{4} \quad (\text{en unité de volume})$$

> **Applications.**
1. Soit \( g \) la fonction numérique définie sur \( [0; \pi] \) par: \( g(x) = \sin x \). Calculer le volume du solide engendré par la rotation de la courbe \( \mathcal{C}_g \) autour de l'axe des abscisses un tour complet.
2. Calculer le volume du solide engendre par la rotation de cercle \((\mathcal{C})\) d'equation \(x^{2} + (y - 2)^{2} = 1\) autour de I'axe des abscisses.

> **Proposition 14.**
Soit $f$ une fonction continue et strictement monotone sur un segment $[a; b](a < b)$, et $\mathcal{C}_f$ sa courbe représentative dans un repère orthonormé $(O, \vec{i}, \vec{j})$.

Le volume du solide engendré par la rotation de la courbe $\mathcal{C}_f$ autour de l'axe des ordonnées un tour complet est donné la formule : $V = \pi \left| \int_{f(a)}^{f(b)} \left( f^{-1}(x) \right)^2 dx \right|$ (en unité de volume)

Si de plus, $f$ est dérivable sur $[a; b]$ alors : $V = \pi \int_a^b x^2 |f'(x)| dx$ (en unité de volume)

#### 4.3. ENCADREMENT D'UNE INTÉGRALE PAR DEUX SUITES. MÉTHODE DES RECTANGLES
> **Proposition 15.**
Soit $f$ une fonction continue sur un segment $[a; b](a < b)$. Pour tout entier $n \ge 2$ on pose :

$$x_0 = a \quad ; \quad x_1 = a + \frac{b-a}{n} \quad ; \quad \dots \quad ; \quad x_k = a + k \frac{b-a}{n} \quad ; \quad \dots \quad ; \quad x_n = a + n \frac{b-a}{n} = b$$

Pour tout $k \in \{0, 1, \dots, n-1\}$, on note $M_k$ la valeur maximale et $m_k$ la valeur minimale de $f$ sur le segment $[x_k; x_{k+1}]$. On pose enfin : $\lambda_n = \frac{b-a}{n} \sum_{k=0}^{n-1} M_k$ et $\mu_n = \frac{b-a}{n} \sum_{k=0}^{n-1} m_k$

On a alors pour tout entier $n \ge 2$ : $\mu_n \le \int_a^b f(x) dx \le \lambda_n$

> **Preuve.**
Pour tout entier $n \ge 2$ et pour tout $k \in \{0, 1, \dots, n-1\}$, on a :

$$\forall x \in [x_k; x_{k+1}], \ m_k \le f(x) \le M_k$$

Il s'ensuit donc que : $\int_{x_k}^{x_{k+1}} m_k dx \le \int_{x_k}^{x_{k+1}} f(x) dx \le \int_{x_k}^{x_{k+1}} M_k dx$

C'est-à-dire que :

$$m_k (x_{k+1} - x_k) \le \int_{x_k}^{x_{k+1}} f(x) dx \le M_k (x_{k+1} - x_k)$$

Et puisque $x_{k+1} - x_k = \frac{b-a}{n}$ alors :

$$\frac{b-a}{n} \sum_{k=0}^{n-1} m_k \le \sum_{k=0}^{n-1} \int_{x_k}^{x_{k+1}} f(x) dx \le \frac{b-a}{n} \sum_{k=0}^{n-1} M_k$$

D'après la relation de Chasles pour les intégrales, on a : $\sum_{k=0}^{n-1} \int_{x_k}^{x_{k+1}} f(x) dx = \int_a^b f(x) dx$

Et par suite, pour tout $n \ge 2$ : $\mu_n \le \int_a^b f(x) dx \le \lambda_n$.

> **Proposition 16.**
Soit $f$ une fonction continue sur un segment $[a, b]$ ($a \neq b$). Pour tout $n \in \mathbb{N}^2$, on pose :
$$S_n = \frac{b - a}{n} \sum_{i=1}^n f(a + k \frac{b - a}{n}) \quad \text{et} \quad S_n = \frac{b - a}{n} \sum_{i=1}^n f(a + k \frac{b - a}{n})$$
Alors les deux suites $(v_n)_{n \in \mathbb{N}^2}$ et $(S_n)_{n \in \mathbb{N}}$ convergent et admettent $\int_0^1 f(x) dx$ comme limite commune.

Astrément dit : $\lim_{n \to \infty} \frac{b - a}{n} \sum_{i=1}^n f(a + k \frac{b - a}{n}) = \lim_{n \to \infty} \frac{b - a}{n} \sum_{i=1}^n f(a + k \frac{b - a}{n}) = \int_0^1 f(x) dx$

> **Exemple.**
Déterminons les limites des suites $(u_n)_{n \in \mathbb{N}^2}$, $(v_n)_{n \in \mathbb{N}}$ et $(w_n)_{n \in \mathbb{N}}$ définies par :

$$u_n = \sum_{i=1}^n \frac{1}{n + k} \quad ; \quad v_n = \sum_{i=1}^n \frac{1}{\sqrt{n^2 + kn}} \quad ; \quad w_n = \frac{\pi}{2n} \sum_{i=1}^n \cos^2\left(\frac{k\pi}{2n}\right)$$

On a pour tout $n \in \mathbb{N}^2$ :

$$u_n = \sum_{i=1}^n \frac{1}{n + k} = \frac{1}{n} \sum_{i=1}^n \frac{1}{1 + \frac{k}{n}} = \frac{1}{n} \sum_{i=1}^n f\left(\frac{k}{n}\right) \quad \text{où} \quad f(x) = \frac{1}{1 + x}$$

$$v_n = \sum_{i=1}^n \frac{1}{\sqrt{n^2 + kn}} = \frac{1}{n} \sum_{i=1}^n \frac{1}{\sqrt{1 + \frac{k}{n}}} = \frac{1}{n} \sum_{i=1}^n g\left(\frac{k}{n}\right) \quad \text{où} \quad g(x) = \frac{1}{\sqrt{1 + x}}$$

$$w_n = \frac{\pi}{2n} \sum_{i=1}^n \cos^2\left(\frac{k\pi}{2n}\right) = \frac{\pi}{2n} + \frac{\pi}{2n} \sum_{i=1}^n h\left(\frac{k\pi}{2n}\right) = \quad \text{où} \quad h(x) = \cos^2 x$$

Les fonctions $f$ et $g$ sont continues sur $[0, 1]$ et $h$ est continue sur $\left[0, \frac{\pi}{2}\right]$. D'après la proposition précédente,

$$\lim_{n \to \infty} u_n = \lim_{n \to \infty} \frac{1}{n} \sum_{i=1}^n f\left(\frac{k}{n}\right) = \int_0^1 \frac{dx}{1 + x} = \left[ \ln(1 + x) \right]_0^1 = \ln 2$$

$$\lim_{n \to \infty} v_n = \lim_{n \to \infty} \frac{1}{n} \sum_{i=1}^n g\left(\frac{k}{n}\right) = \int_0^1 \frac{dx}{\sqrt{1 + x}} = \left[ 2\sqrt{1 + x} \right]_0^1 = 2(\sqrt{2} - 1)$$

$$\lim_{n \to \infty} w_n = \lim_{n \to \infty} \left( \frac{\pi}{2n} + \frac{\pi}{2n} \sum_{i=1}^n h\left(\frac{k\pi}{2n}\right) \right) = \int_0^1 \cos^2 x \, dx = \frac{1}{2} \int_0^1 (1 + \cos 2x) \, dx = \frac{1}{2} \left[ x + \frac{1}{2} \sin 2x \right]_0^1 = \frac{\pi}{4}$$

> **Applications.**
1. Calculer les limites : $\lim_{n \to \infty} n \sum_{i=1}^n \frac{1}{n^2 + k^2} \quad ; \quad \lim_{n \to \infty} \frac{1}{n} \sum_{i=1}^n \left( \frac{n}{n + k} \right)^2 \quad ; \quad \lim_{n \to \infty} \frac{2}{n^2} \sum_{i=1}^n \sqrt{n^2 - k^2}$

2. Soit $f$ la fonction continue sur un segment $[a, b]$ ($a \neq b$). Calculer : $\lim_{n \to \infty} \left[ \left( \sum_{i=1}^n f\left( \sqrt{1 + \frac{k}{n}} \right) \right) - n \right]$.

## Méthodes

A

### A. Techniques de calcul des intégrales
1) Calculer les intégrales suivantes en utilisant les primitives :

$$I = \int_{0}^{\frac{\pi}{4}} \frac{dx}{\cos^4 x} \quad ; \quad J = \int_{0}^{1} \frac{dx}{e^{x} + 1} \quad ; \quad K = \int_{1}^{4} \sqrt{x} (4 - x) dx \quad ; \quad L = \int_{0}^{1} x^2 \sqrt{1 + x} dx$$
$$M = \int_{0}^{\frac{\pi}{3}} \cos(2x) \sin^3 x dx \quad ; \quad N = \int_{0}^{1} 2^x 4^{x+2} 6^{x+3} dx \quad ; \quad P = \int_{1}^{x} \frac{x + 1}{x} (\ln(x) + x)^{\frac{1}{2}} dx$$

2) En utilisant la formule d'intégration par parties, calculer les intégrales suivantes :
$$I' = \int_{0}^{1} \frac{\ln(1 + x)}{(1 + x)^{\frac{1}{2}}} dx \quad ; \quad J' = \int_{0}^{\frac{\pi}{4}} \frac{x \sin x}{\cos^2 x} dx \quad ; \quad K' = \int_{1}^{x} \frac{(\ln x)^{\frac{1}{2}}}{x^2} dx \quad ; \quad L' = \int_{1}^{1} x 2^x dx \quad ; \quad M' = \int_{0}^{1} x^3 e^{x^2} dx$$

3) Par la formule d'intégration par changement de variable, calculer les intégrales suivantes :
$$A = \int_{-1}^{1} \sqrt{1 - x^2} dx \quad (\text{Poser } x = \sin t) \quad ; \quad B = \int_{\frac{\pi}{2}}^{\frac{\pi}{4}} \frac{dx}{\sqrt{x(1 - x)}} \quad (\text{Poser } x = \sin^2 t)$$
$$C = \int_{\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{dx}{\sin x} \quad (\text{Poser } t = \tan \frac{x}{2}) \quad ; \quad D = \int_{1}^{4} \frac{1 + x}{1 + \sqrt{x}} dx \quad (\text{Poser } t = \sqrt{x})$$

> **Solution.**
1) Calculons les intégrales suivantes en utilisant les primitives :

$$\bullet \quad I = \int_{0}^{\frac{\pi}{4}} \frac{dx}{\cos^4 x} = \int_{0}^{\frac{\pi}{4}} \frac{1}{\cos^2 x} \times \frac{1}{\cos^2 x} dx = \int_{0}^{\frac{\pi}{4}} (1 + \tan^2 x)(\tan x)^{\frac{1}{2}} dx = \left[ \tan x + \frac{\tan^3 x}{3} \right]_{0}^{\frac{\pi}{4}} = \frac{4}{3}$$
$$\bullet \quad J = \int_{0}^{1} \frac{1}{e^{t} + 1} dt = \int_{0}^{1} \frac{e^{-t}}{e^{-t} + 1} dt = \left[ -\ln(e^{-t} + 1) \right]_{0}^{1} = 1 + \ln \frac{2}{1 + e}$$
$$\bullet \quad K = \int_{1}^{4} \sqrt{x} (4 - x) dx = \int_{1}^{4} (4\sqrt{x} - x\sqrt{x}) dx = \int_{1}^{4} \left( 4x^{\frac{1}{2}} - x^{\frac{3}{2}} \right) dx = \left[ \frac{8}{3}x^{\frac{3}{2}} - \frac{2}{5}x^{\frac{5}{2}} \right]_{1}^{4} = \frac{94}{15}$$
$$\bullet \quad L = \int_{0}^{1} x^2 \sqrt{1 + x} dx = \int_{0}^{1} \left[ (x + 1)^{\frac{2}{2}} - 2(x + 1) + 1 \right] \sqrt{1 + x} dx = \int_{0}^{1} \left[ (x + 1)^{\frac{3}{2}} - 2(x + 1)^{\frac{3}{2}} + (x + 1)^{\frac{1}{2}} \right] dx$$

Par suite : $$L = \left[ \frac{2}{7}(x + 1)^{\frac{7}{2}} - \frac{4}{5}(x + 1)^{\frac{5}{2}} + \frac{2}{3}(x + 1)^{\frac{3}{2}} \right]_{0}^{1} = \frac{4}{105}(11\sqrt{2} - 4)$$

Pour le calcul de $$M = \int_{0}^{\frac{\pi}{3}} \cos(2x) \sin^3(x) dx$$, on peut linéariser l'expression $$\cos(2x) \sin^3 x$$.

La linéarisation de $$\cos(2x) \sin^3 x$$ donne : $$\cos(2x) \sin^3 x = -\frac{1}{8}(\sin(5x) - 3\sin(3x) + 4\sin x)$$

D'où : $$M = \frac{1}{8} \int_{0}^{\frac{\pi}{6}} (-\sin(5x) + 3\sin(3x) - 4\sin x) dx = \frac{1}{8} \left[ \frac{1}{5} \cos(5x) - \cos(3x) + 4 \cos x \right]_{0}^{\frac{\pi}{3}} = -\frac{1}{80}$$

$$\bullet \quad N = \int_{0}^{1} 2^x 4^{x+2} 6^{x+3} dx = 3456 \int_{0}^{1} 48^x dx = 3456 \int_{0}^{1} e^{x \ln 48} dx = 3456 \left[ \frac{1}{\ln 48} 48^x \right]_{0}^{1} = \frac{162432}{\ln 48}$$

$$I' = \int_{1}^{x} \frac{x+1}{x} (\ln(x)+x)^3 dx = \int_{1}^{x} (\ln(x)+1)^2 (\ln(x)+x)^3 dx = \left[ \frac{(\ln(x)+x)^4}{4} \right]_{1}^{x} = \frac{(1+e)^4 - 1}{4}$$

2) Calculons les intégrales suivantes en utilisant la formule d'intégration par parties :

Pour l'intégrale $I' : u = \ln(1+x)$, $v' = \frac{1}{(1+x)^3} = (1+x)^{-3} \rightarrow u' = \frac{1}{x+1}$, $v = -\frac{1}{2}(1+x)^{-2}$

$$I' = \left[ -\frac{\ln(1+x)}{2(1+x)^2} \right]_{0}^{1} + \frac{1}{2} \int_{0}^{1} (1+x)^{-3} dx = -\frac{\ln 2}{8} + \frac{1}{2} \left[ \frac{(1+x)^{-2}}{-2} \right]_{0}^{1} = \frac{3-2\ln 2}{16}$$

Pour l'intégrale $J' : u = x$, $v' = \frac{\sin x}{\cos^3 x} \rightarrow u' = 1$, $v = \frac{1}{4\cos^4 x}$

$$J' = \left[ \frac{x}{4\cos^4 x} \right]_{0}^{\frac{\pi}{4}} - \frac{1}{4} \int_{0}^{\pi} \frac{1}{\cos^4 x} dx = \frac{\pi}{4} - \frac{1}{4} \int_{0}^{\pi} (\tan x)^2 (1+\tan^2 x) dx = \frac{\pi}{4} - \frac{1}{4} \left[ \tan x + \frac{\tan^3 x}{3} \right]_{0}^{\frac{\pi}{4}}$$

Par suite : $J' = \pi - \frac{1}{3}$

Pour l'intégrale $K' : u = (\ln x)^3$, $v' = \frac{1}{x^2} \rightarrow u' = \frac{3(\ln x)^2}{x}$, $v = -\frac{1}{x}$

$$K' = \left[ -\frac{(\ln x)^2}{x} \right]_{1}^{x} + 3 \int_{1}^{x} \frac{(\ln x)^2}{x^2} dx = -\frac{1}{e} + 3 \int_{1}^{x} \frac{(\ln x)^2}{x^2} dx$$

Pour l'intégrale $\int_{1}^{x} \frac{(\ln x)^2}{x^2} dx : u = (\ln x)^2$, $v' = \frac{1}{x^2} \rightarrow u' = \frac{2\ln x}{x}$, $v = -\frac{1}{x}$

Donc : $\int_{1}^{x} \frac{(\ln x)^2}{x^2} dx = \left[ -\frac{(\ln x)^2}{x} \right]_{1}^{x} + 2 \int_{1}^{x} \frac{\ln x}{x^2} dx = -\frac{1}{e} + 2 \int_{1}^{x} \frac{\ln x}{x^2} dx$

Il en résulte donc que : $K' = -\frac{1}{e} + 3 \int_{1}^{x} \frac{(\ln x)^2}{x^2} dx = -\frac{1}{e} - \frac{3}{e} + 6 \int_{1}^{x} \frac{\ln x}{x^2} dx = -\frac{4}{e} + 6 \int_{1}^{x} \frac{\ln x}{x^2} dx$

Pour l'intégrale $\int_{1}^{x} \frac{\ln x}{x^2} dx : u = \ln x$, $v' = \frac{1}{x^2} \rightarrow u' = \frac{1}{x}$, $v = -\frac{1}{x}$

Donc : $\int_{1}^{x} \frac{\ln x}{x^2} dx = \left[ -\frac{\ln x}{x} \right]_{1}^{x} + \int_{1}^{x} \frac{1}{x^2} dx = -\frac{1}{e} + \left[ -\frac{1}{x} \right]_{1}^{x} = 1 - \frac{2}{e}$. Ainsi : $K' = -\frac{4}{e} + 6 \left( 1 - \frac{2}{e} \right) = 6 - \frac{16}{e}$

Pour l'intégrale $L' : u = x$, $v' = 2^x \rightarrow u' = 1$, $v = \frac{2^x}{\ln 2}$

$$L' = \left[ \frac{2^x x}{\ln 2} \right]_{-1}^{1} - \frac{1}{\ln 2} \int_{-1}^{1} 2^x dx = \frac{2}{\ln 2} + \frac{1}{2\ln 2} - \frac{1}{\ln 2} \left[ \frac{2^x}{\ln 2} \right]_{-1}^{1} = \frac{5}{2\ln 2} - \frac{3}{2(\ln 2)^2}$$

Pour l'intégrale $M'' : u = x^2$, $v' = xe^{x^2} \rightarrow u' = 2x$, $v = \frac{e^{x^2}}{2}$

$$M' = \left[ \frac{x^2 e^{x^2}}{2} \right]_0^1 - \int_0^1 x e^{x^2} dx = \frac{e}{2} - \left[ \frac{e^{x^2}}{2} \right]_0^1 = \frac{e}{2} - \left( \frac{e}{2} - \frac{1}{2} \right) = \frac{1}{2}$$

3) Par changement de variable, calculons les intégrales $A$, $B$, $C$ et $D$ :

- Pour l'intégrale $A$ : Posons $x = \sin t$, alors $dx = \cos(t)dt$. Donc :

$$A = \int_{\frac{\pi}{2}}^{\frac{\pi}{2}} \sqrt{1 - \sin^2(t)} \cos(t) dt = \int_{\frac{\pi}{2}}^{\frac{\pi}{2}} \cos^2(t) dt = \frac{1}{2} \int_{\frac{\pi}{2}}^{\frac{\pi}{2}} (1 + \cos(2t)) dt = \frac{1}{2} \left[ t + \frac{1}{2} \sin(2t) \right]_{\frac{\pi}{2}}^{\frac{\pi}{2}} = \frac{\pi}{2}$$

- Pour l'intégrale $B$ : Posons $x = \sin^2 t$, alors $dx = 2 \sin(t) \cos(t) dt$. Donc :

$$B = \int_{\frac{1}{2}}^{\frac{3}{4}} \frac{dx}{\sqrt{x(1-x)}} = \int_{\frac{\pi}{4}}^{\frac{\pi}{4}} \frac{2 \sin(t) \cos(t)}{\sin(t) \cos(t)} dt = \int_{\frac{\pi}{4}}^{\frac{\pi}{4}} 2 dt = \frac{\pi}{6}$$

- Pour l'intégrale $C$ : Posons $t = \tan \frac{x}{2}$, alors $x = 2 \text{Arctan } t$ et $dx = \frac{2dt}{1+t^2}$. On a de plus $\sin x = \frac{2t}{1+t^2}$,

donc : $C = \int_{\frac{\pi}{3}}^{\frac{\pi}{2}} \frac{dx}{\sin x} = \int_{\frac{\sqrt{3}}{3}}^{1} \frac{1+t^2}{2} \times \frac{2dt}{1+t^2} = \int_{\frac{\sqrt{3}}{3}}^{1} \frac{dt}{t} = [\ln|t|]_{\frac{\sqrt{3}}{3}}^{1} = \frac{1}{2} \ln 3$.

- Pour l'intégrale $D$ : Posons $t = \sqrt{x}$, alors $x = t^2$ et $dx = 2t dt$. Donc :

$$D = \int_{1}^{4} \frac{1+x}{1+\sqrt{x}} dx = \int_{1}^{2} \frac{1+t^2}{1+t^2} dt = 2 \int_{1}^{2} \frac{t^3+t}{1+t^2} dt$$

La division euclidienne de $t^3 + t$ par $t + 1$ donne : $t^3 + t = (t^2 - t + 2)(t + 1) - 2$

Par conséquent : $\int_{1}^{2} \frac{t^3+t}{1+t^2} dt = \int_{1}^{2} \left( t^2 - t + 2 - \frac{2}{t+1} \right) dt = \left[ \frac{t^3}{3} - \frac{t^2}{2} + 2t - 2 \ln|t+1| \right]_{1}^{2} = \frac{17}{6} + 2 \ln\left(\frac{2}{3}\right)$

Et par suite : $D = \frac{17}{3} + 4 \ln\left(\frac{2}{3}\right)$

- Pour calculer $\int_{a}^{b} P(x) \cos(x) dx$, $\int_{a}^{b} P(x) \sin(x) dx$ ou $\int_{a}^{b} P(x) e^{ax+\beta} dx$, où $P(x)$ est un polynôme, Il faut appliquer une intégration par parties, et dériver $P(x)$ de façon à abaisser son degré.

- La méthode des A.L.P.E.S est une méthode souvent fructueuse quand on est amené à intégrer par parties.

Principe : le choix de la fonction $u$ (fonction à dériver) se fait selon l'ordre en allant de $A$ vers $S$

|  A | L | P | E | S  |
| --- | --- | --- | --- | --- |
|  Arc tan x | ln x, log x | Polynômes, xⁿ | exp(x), aˣ | sin x, cos x, tan x  |

- Pour effectuer le changement de variable $x = \phi(t)$ dans l'intégrale $I = \int_{a}^{b} f(x) dx$ : On cherche deux valeurs $\alpha$ et $\beta$ telles que $\phi(\alpha) = a$ et $\phi(\beta) = b$. Dans l'intégrale $I$ : On remplace $a$ par $\alpha$, $b$ par $\beta$, $x$ par $\phi(t)$ et $dx$ par $\phi'(t) dt$. Donc : $I = \int_{\alpha}^{\beta} f(\phi(t)) \phi'(t) dt$

### B. Suite d'intégrales
On pose pour tout $n \in \mathbb{N}$ : $I_n = \int_0^1 x^n e^{-x} dx$

1) Calculer \( I_0 \) et \( I_1 \).
2) Trouver une relation récurrente entre \( I_{n} \) et \( I_{n + 1} \).
3) Montrer que pour tout entier \(n\in \mathbb{N}\) .. \(\frac{1}{e(n + 1)}\leq I_n\leq \frac{1}{n + 1}\)
4) On définit une suite \(\left(u_{n}\right)\) en posant pour tout entier \(n\): \(I_{n} = \frac{n!}{e}\left(e - u_{n}\right)\)

a) Trouver une relation récurrente entre \( u_{n} \) et \( u_{n + 1} \).
b) Calculer \( u_{0} \) puis en déduire l'expression de \( u_{n} \) en fonction de \( n \).

5) Calculer $\lim_{n \to +\infty} \left(1 + \frac{1}{1!} + \frac{1}{2!} + \dots + \frac{1}{n!}\right)$.

> **Solution.**
1) Calcul de $I_0$ et $I_1$ :

- \( I_0 = \int_0^1 e^{-x} dx = \left[-e^{-x}\right]_0^1 = 1 - e^{-1} \)
Pour le calcul de \(I_{1}\) , une integration par parties donne: \(I_{1} = \left[-xe^{-x}\right]_{0}^{1} + \int_{0}^{1}e^{-x}dx = -e^{-1} + 1 - e^{-1} = 1 - \frac{2}{e}\)

2) Une intégration par parties sur $I_{n+1} = \int_0^1 x^{n+1} e^{-x} dx$ donne :

$$I_{n+1} = \left[-x^{n+1} e^{-x}\right]_0^1 + (n+1) \int_0^1 x^n e^{-x} dx = (n+1) I_n - \frac{1}{e}. \text{ D'où : } (\forall n \in \mathbb{N}) I_{n+1} = (n+1) I_n - \frac{1}{e}$$

3) On a pour tout $x \in [0; 1]$ et $n \in \mathbb{N}$ : $e^{-1} \le e^{-x} \le 1$ et $x^n e^{-1} \le x^n e^{-x} \le x^n$

Donc : $\int_0^1 x^n e^{-1} dx \le \int_0^1 x^n e^{-x} dx \le \int_0^1 x^n dx$. Par suite, pour tout $n \in \mathbb{N}$ : $\frac{1}{e(n+1)} \le I_n \le \frac{1}{n+1}$

4) On considère la suite $(u_n)$ en posant pour tout entier $n$ : $I_n = \frac{n!}{e}(e - u_n)$

a) On sait que pour tout $n \in \mathbb{N}$, $I_{n+1} = (n+1) I_n - \frac{1}{e}$. On en déduit alors que :

$$\frac{(n+1)!}{e}(e - u_{n+1}) = (n+1) \frac{n!}{e}(e - u_n) - \frac{1}{e}, \text{ C'est-à-dire : } -\frac{(n+1)!}{e} u_{n+1} = -\frac{(n+1)!}{e} u_n - \frac{1}{e}$$

D'où : $u_{n+1} = u_n + \frac{1}{(n+1)!}$

b) L'égalité $I_0 = \frac{1}{e}(e - u_0)$ donne $1 - \frac{1}{e} = \frac{1}{e}(e - u_0)$. Par conséquent : $u_0 = 1$

On a pour tout $n \in \mathbb{N}$ : $u_{n+1} = u_n + \frac{1}{(n+1)!}$. En particulier :

$$
\begin{array}{l}
u_1 = u_0 + \frac{1}{1!} \\
u_2 = u_1 + \frac{1}{2!} \\
\vdots \\
u_n = u_{n-1} + \frac{1}{n!}
\end{array}
$$

Par sommation, on obtient pour tout $n \in \mathbb{N}$ : $u_n = 1 + \frac{1}{1!} + \frac{1}{2!} + \dots + \frac{1}{n!}$

5) Calcul de $\lim_{n \to \infty} \left(1 + \frac{1}{1!} + \frac{1}{2!} + \dots + \frac{1}{n!}\right)$ :

On a : $\lim_{n \to \infty} \left(1 + \frac{1}{1!} + \frac{1}{2!} + \dots + \frac{1}{n!}\right) = \lim_{n \to \infty} u_n = \lim_{n \to \infty} \left(1 - \frac{I_n}{n!}\right) e$

D'après le résultat de 3), on a pour tout $n \in \mathbb{N}$ : $\frac{1}{e(n+1)} \le I_n \le \frac{1}{n+1}$

Puisque $\lim_{n \to \infty} \frac{1}{e(n+1)} = \lim_{n \to \infty} \frac{1}{n+1} = 0$, alors $\lim_{n \to \infty} I_n = 0$ et enfin : $\lim_{n \to \infty} u_n = e$

- L'intégrale étant un outil de calcul comme les autres, il n'est pas rare que des suites soient définies directement via des intégrales.

L'étude des problèmes classiques relatifs à l'étude des suites (majoration, minoration, monotonie, convergence) s'impose aussi pour les suites définies par des intégrales.

- On s'intéresse dans ce qui suit aux suites définies sur $\mathbb{N}$ par : $u_n = \int_a^b f_n(x) dx$

où les fonctions $f_n$ sont des fonctions continues sur le segment $[a, b]$.

Plusieurs techniques à savoir pour l'étude de la suite $(u_n)$ :

Pour justifier l'existence de \( u_{n} \), il suffit de justifier que la fonction \( f_{n} \) est continue sur \( [a, b] \) pour tout \( n \in \mathbb{N} \). Ceci se fait généralement en une ou deux lignes.
Pour étudier le signe de \( u_{n} \), on étudie le signe de \( f_{n} \) sur le segment \( [a, b] \).

- Si pour tout \( x \in [a; b] \), \( f_{n}(x) \geq 0 \), alors \( u_{n} \geq 0 \).
- Si pour tout \( x \in [a; b] \), \( f_{n}(x) \leq 0 \), alors \( u_{n} \leq 0 \).

Bien sûr, ces conditions sont des conditions suffisantes et pas nécessaires.

o Pour étudier la monotonie de la suite $(u_n)$, on utilise la linéarité de l'intégrale et

on étudie le signe de la différence : $u_{n+1} - u_n = \int_a^b (f_{n+1}(x) - f_n(x)) dx$

- Si pour tout \( x \in [a; b] \), \( f_{n+1}(x) - f_n(x) \geq 0 \), alors \( u_{n+1} - u_n \geq 0 \). D'où: \( (u_n) \) est croissant.

- Si pour tout $x \in [a; b]$, $f_{n+1}(x) - f_n(x) \leq 0$, alors $u_{n+1} - u_n \leq 0$. D'où: $(u_n)$ est décroissante.

Encore une fois, ces conditions sont des conditions suffisantes et pas nécessaires. Mais de toute façon, le cas le plus fréquemment posé est que $f_{n+1}(x) - f_n(x)$ garde un signe constant sur $[a; b]$.
Pour montrer un encadrement de $u_n$ de la forme : $v_n \leq u_n \leq w_n$

on cherchera un « bon encadrement » de la fonction $f_n$ sur $[a; b]$, puis on utilisera la propriété suivante :

Si pour tout $n \in \mathbb{N}$, $h_n(x) \leq f_n(x) \leq g_n(x)$, alors : $\int_a^b h_n(x) dx \leq \int_a^b f_n(x) dx \leq \int_a^b g_n(x) dx$
Pour établir une relation de récurrence entre $u_n$ et $u_{n+1}$ ou $u_{n+2}$, on utilisera dans la majorité des cas une intégration par parties.

### C. Étude d'une fonction définie par une intégrale
I) Soit $F$ la fonction définie sur $]0; +\infty[$ par : $F(x) = \int_x^{x^2} \frac{e^{-x^2}}{t} dt$

Montrer que $F$ est dérivable sur $]0; +\infty[$ puis calculer $F'(x)$ pour tout $x \in ]0; +\infty[$.

II) On considère la fonction $f$ définie sur $]0; +\infty[$ par : $f(t) = \frac{t-1}{t \ln t}$ si $t \neq 1$ et $f(1) = 1$.

1) Montrer que \( f \) est continue sur \( ]0; +\infty[ \).
2) Calculer \(\lim_{t\to 1}\int_{x}^{t^{2}}f(t)dt\)
3) En déduire la valeur de la limite: \(\lim_{t\to 1}\int_{x}^{t^{2}}\frac{dt}{\ln t}\)

> **Solution.**
I) La fonction $g$ définie sur $]0; +\infty[$ par $g(t) = \frac{e^{-t^2}}{t}$ est continue sur cet intervalle. Elle admet donc une primitive $G$ dérivable sur $]0; +\infty[$. De plus, les fonctions $u$ et $v$ définies sur $]0; +\infty[$ par $u(x) = x$ et $v(x) = x^2$ sont dérivables sur $]0; +\infty[$. On a donc pour tout $x \in ]0; +\infty[$ : $F(x) = G(x^2) - G(x) = G \circ v(x) - G \circ u(x)$
Cela entraîne la dérivabilité de la fonction $F$ sur $]0; +\infty[$. Pour tout $x \in ]0; +\infty[$ :

$$F'(x) = (x^2)^t G'(x^2) - G'(x) = \frac{2e^{-x^2} - e^{-x^2}}{x}$$

II) On considère la fonction $f$ définie sur $]0; +\infty[$ par : $f(t) = \frac{t-1}{t \ln t}$ si $t \neq 1$ et $f(1) = 1$.

1) Montrons que $f$ est continue sur $]0; +\infty[$ :

La fonction $f$ est continue sur les intervalles $]0; 1[$ et $]1; +\infty[$ car c'est le quotient de deux fonctions dérivables sur ces deux intervalles qui sont $t \mapsto t-1$ et $t \mapsto t \ln t$.

Reste à montrer la continuité de $f$ au point 1. On a :

$$\lim_{t \to 1} f(t) = \lim_{t \to 1} \frac{t-1}{t \ln t} = \lim_{t \to 1} \frac{1}{t} \times \frac{t-1}{\ln t} = 1 \times 1 = 1 = f(1)$$

Par conséquent, la fonction $f$ est continue sur $]0; +\infty[$.

2) Calculons $\lim_{t \to 1} \int_{x}^{x^2} f(t) dt$ :

Puisque la fonction $f$ est continue sur $]0; +\infty[$, alors elle admet une primitive $F$, continue et dérivable sur cet intervalle. On a donc : $\lim_{x \to 1} \int_{x}^{x^2} f(t) dt = \lim_{x \to 1} (F(x^2) - F(x)) = F(1) - F(1) = 0$

3) La valeur de la limite $\lim_{x \to 1} \int_{x}^{x^2} \frac{dt}{\ln t}$ :

Pour tout $x \in \mathbb{R}^+ - \{1\}$, la fonction $t \mapsto \frac{1}{\ln t}$ est continue sur chaque segment d'extrémité $x$ et $x^2$. Cela provient du fait que si $x > 1$ alors $[x; x^2] \subset ]1; +\infty[$ et si $x < 1$ alors $[x^2; x] \subset ]0; 1[$. On a donc :

$$\int_{x}^{x^2} \frac{dt}{\ln t} = \int_{x}^{x^2} \left( f(t) + \frac{1}{t \ln t} \right) dt = \int_{x}^{x^2} f(t) dt + [\ln |\ln t|]_{x}^{x^2} = \int_{x}^{x^2} f(t) dt + \ln \left| \frac{\ln x^2}{\ln x} \right| = \int_{x}^{x^2} f(t) dt + \ln 2$$

Par passage à la limite, on obtient : $\lim_{x \to 1} \int_{x}^{x^2} \frac{dt}{\ln t} = \ln 2$

• Pour étudier la dérivabilité de la fonction $F$ définie par l'expression : $F(x) = \int_{u(x)}^{u(x)} f(t) dt$

On peut vérifier que les fonctions $u$ et $v$ sont deux fonctions dérivables sur un intervalle $E$ et à valeurs dans un intervalle $I$ sur lequel la fonction $f$ est continue puis dériver la fonction $F$ en utilisant la formule de dérivation des fonctions composées :

$$F'(x) = \left( \int_{u(x)}^{u(x)} f(t) dt \right)' = v'(x) f(v(x)) - u'(x) f(u(x))$$

### D. Sommes de Riemann
1) Calculer les limites suivantes :

$$\ell_1 = \lim_{n \to +\infty} \frac{1}{n} \sum_{k=0}^{n} \left( \frac{k}{n} \right)^2 \quad ; \quad \ell_2 = \lim_{n \to +\infty} \frac{1}{n} \sum_{k=1}^{n} \cos \left( \frac{k \pi}{n} \right) \quad ; \quad \ell_3 = \lim_{n \to +\infty} \sum_{k=0}^{n} \frac{n+k}{n^2+k^2}$$

2) Calculer les limites suivantes :

$$L_1 = \lim_{n \to +\infty} \sum_{k=1}^{n} \frac{1}{\sqrt{n^2 + 2kn}} \quad ; \quad L_2 = \lim_{n \to +\infty} \prod_{k=1}^{n} \left( 1 + \frac{k^2}{n^2} \right)^{\frac{1}{n}}$$

> **Solution.**
1) Calcul de $$\ell_1 = \lim_{n \to +\infty} \frac{1}{n} \sum_{k=0}^{n} \left( \frac{k}{n} \right)^2$$: Considérons la fonction $$f$$ définie sur $$\mathbb{R}$$ par: $$f(x) = x^2$$

On a alors: $$\ell_1 = \lim_{n \to +\infty} \frac{1}{n} \sum_{k=0}^{n} \left( \frac{k}{n} \right)^2 = \lim_{n \to +\infty} \frac{1}{n} \sum_{k=0}^{n} f\left( \frac{k}{n} \right) = \int_0^1 f(x) dx = \int_0^1 x^2 dx = \left[ \frac{x^4}{4} \right]_0^1 = \frac{1}{4}$$

Calcul de $$\ell_2 = \lim_{n \to +\infty} \frac{1}{n} \sum_{k=0}^{n} \cos \left( \frac{k\pi}{n} \right)$$:

Considérons la fonction $$f$$ définie sur $$\mathbb{R}$$ par: $$f(x) = \cos(\pi x)$$

On a alors: $$\ell_2 = \lim_{n \to +\infty} \frac{1}{n} \sum_{k=0}^{n} \cos \left( \frac{k\pi}{n} \right) = \lim_{n \to +\infty} \frac{1}{n} \sum_{k=0}^{n} f\left( \frac{k}{n} \right) = \int_0^1 f(x) dx = \int_0^1 \cos(\pi x) dx = \left[ \frac{1}{\pi} \sin(\pi x) \right]_0^1 = 0$$

Calcul de $$\ell_3 = \lim_{n \to +\infty} \sum_{k=0}^{n} \frac{n+k}{n^2+k^2}$$: On a d'abord $$\ell_3 = \lim_{n \to +\infty} \sum_{k=0}^{n} \frac{n+k}{n^2+k^2} = \lim_{n \to +\infty} \frac{1}{n} \sum_{k=0}^{n} \frac{1+\frac{k}{n}}{1+\left( \frac{k}{n} \right)^2}$$

Considérons la fonction $$f$$ définie sur $$\mathbb{R}$$ par: $$f(x) = \frac{1+x}{1+x^2}$$

On a alors: $$\ell_1 = \lim_{n \to +\infty} \frac{1}{n} \sum_{k=0}^{n} f\left( \frac{k}{n} \right) = \int_0^1 f(x) dx = \int_0^1 \frac{1+x}{1+x^2} dx = \int_0^1 \frac{dx}{1+x^2} + \int_0^1 \frac{x}{1+x^2} dx$$

Et par suite: $$\ell_2 = [\text{Arctan } x]_0^1 + \left[ \frac{1}{2} \ln(1+x^2) \right]_0^1 = \frac{\pi}{4} + \frac{\ln 2}{2}$$

2) Calcul de $$L_1$$: On a pour tout $$n \in \mathbb{N}^*$$, $$\sum_{k=0}^{n} \frac{1}{\sqrt{n^2+2kn}} = \frac{1}{n} \sum_{k=0}^{n} \frac{1}{\sqrt{1+2\frac{k}{n}}}$$

On reconnaît une somme de Riemann.

La fonction $$x \mapsto \frac{1}{\sqrt{1+2x}}$$ est continue sur $$[0;1]$$, donc: $$L_1 = \int_0^1 \frac{dx}{\sqrt{1+2x}} = [\sqrt{1+2x}]_0^1 = \sqrt{3}-1$$

Calcul de $$L_2$$: Posons pour tout $$n \in \mathbb{N}^*$$: $$u_n = \prod_{k=0}^{n} \left( 1 + \frac{k^2}{n^2} \right)^{\frac{1}{2}}$$

On a $$u_n > 0$$ et $$\ln(u_n) = \frac{1}{n} \sum_{k=0}^{n} \ln \left( 1 + \frac{k^2}{n^2} \right)$$. On reconnaît une somme de Riemann.

La fonction $$x \mapsto \ln(1+x^2)$$ est continue sur $$[0;1]$$, donc: $$\lim_{n \to +\infty} \ln u_n = \int_0^1 \ln(1+x^2) dx$$.

Une intégration par parties appliquée à $$I = \int_0^1 \ln(1+x^2) dx$$ donne:

$$I = [x \ln(1+x^2)]_0^1 - \int_0^1 \frac{2x^2}{1+x^2} dx = \ln 2 - 2 \int_0^1 \left( 1 - \frac{1}{1+x^2} \right) dx = \ln 2 - 2 + 2 [\text{Arctan } x]_0^1 = \ln 2 - 2 + \frac{\pi}{2}.$$

Enfin, comme l'exponentielle est continue sur $$\mathbb{R}$$, on conclut: $$L_2 = \lim_{n \to +\infty} u_n = e^{\ln 2 - 2 + \frac{\pi}{2}} = 2e^{\frac{\pi}{2} - 2}.$$

Scanned avec CamScanner

## Exercices

### Exercices d'application

### INTÉGRATION PAR PRIMITIVATION
#### Exercice 01
Calculer les intégrales suivantes :

$$\begin{array}{l} A _ { 1 } = \int _ { - 2 } ^ { 3 } t \left( t ^ { 2 } + 2 \right) ^ { 2 } d t \quad ; \quad A _ { 2 } = \int _ { 1 } ^ { 3 } \left( \sqrt { t } - \frac { 1 } { \sqrt { t } } \right) ^ { 2 } d t \\ A _ { 3 } = \int _ { 0 } ^ { 1 } \frac { d x } { \sqrt { 2 x + 1 } } \quad ; \quad A _ { 4 } = \int _ { 1 } ^ { 3 } \frac { d x } { \left( 2 x + 1 \right) ^ { 2 0 1 8 } } \\ A _ { 5 } = \int _ { 0 } ^ { 1 } x ^ { 2 0 } \sqrt { x } d x \quad ; \quad A _ { 6 } = \int _ { 0 } ^ { 2 } ( x + 2 ) \sqrt { x ^ { 2 } + 4 x } d x \\ A _ { 7 } = \int _ { 2 } ^ { 0 } \frac { d x } { \sqrt { 1 + x } } \quad ; \quad A _ { 8 } = \int _ { 0 } ^ { 1 } \frac { x } { 1 + x ^ { 4 } } d x \end{array}$$

#### Exercice 02
Calculer les intégrales suivantes :

$$\begin{array}{l} B _ { 1 } = \int _ { 1 } ^ { 2 } x \sqrt { x - 1 } d x \quad ; \quad B _ { 2 } = \int _ { 2 } ^ { 3 } \frac { t } { \sqrt { t - 1 } } d t \\ B _ { 3 } = \int _ { 0 } ^ { 3 } \frac { x } { ( x - 1 ) \sqrt { x + 1 } } d x \quad ; \quad B _ { 4 } = \int _ { 4 } ^ { 0 } \frac { d x } { x + \sqrt { x } } \\ B _ { 5 } = \int _ { 1 } ^ { 4 } \frac { d x } { \sqrt { x } ( x + 1 ) } \quad ; \quad B _ { 6 } = \int _ { 2 } ^ { 3 } \frac { 2 x } { ( x - 1 ) ( x + 2 ) } d x \end{array}$$

#### Exercice 03
Calculer les intégrales suivantes :

$$\begin{array}{l} C _ { 1 } = \int _ { 0 } ^ { \pi } \left( \cos \frac { x } { 2 } - \sin 3 x \right) d x \quad ; \quad C _ { 2 } = \int _ { 0 } ^ { \frac { \pi } { 4 } } \sin ^ { 3 } ( 2 x ) d x \\ C _ { 3 } = \int _ { 0 } ^ { \pi } \sin ^ { 3 } x \cos x d x \quad ; \quad C _ { 4 } = \int _ { 0 } ^ { \frac { \pi } { 2 } } \frac { \cos x } { 2 + \sin x } d x \\ C _ { 5 } = \int _ { \frac { \pi } { 3 } } ^ { \frac { \pi } { 4 } } \cos ( 2 x ) \sin ( 3 x ) d x \quad ; \quad C _ { 6 } = \int _ { 0 } ^ { \frac { \pi } { 4 } } \tan ( 2 x ) d x \\ C _ { 7 } = \int _ { 0 } ^ { \frac { \pi } { 4 } } \left( \tan ^ { 3 } x + \tan x \right) d x \quad ; \quad C _ { 8 } = \int _ { \frac { \pi ^ { 3 } } { 4 } } ^ { \frac { \pi ^ { 3 } } { 4 } } \frac { \cos \sqrt { x } } { \sqrt { x } } d x \\ C _ { 9 } = \int _ { 0 } ^ { \frac { \pi } { 4 } } \tan ^ { 3 } x d x \quad ; \quad C _ { 9 } = \int _ { 0 } ^ { \frac { \pi } { 3 } } \frac { \cos ( 2 x ) } { ( 2 + \sin 2 x ) ^ { 4 } } d x \end{array}$$

#### Exercice 04
Calculer les intégrales suivantes :

$$\begin{array}{l} D _ { 1 } = \int _ { 1 } ^ { 2 } \frac { 1 } { x ^ { 2 } } e ^ { \frac { 1 } { x } } d x \quad ; \quad D _ { 2 } = \int _ { 0 } ^ { \frac { \pi } { 2 } } \sin ( 2 x ) e ^ { \cos ^ { 3 } x } d x \\ D _ { 3 } = \int _ { e ^ { x } } ^ { e ^ { 2 } } \frac { \ln t } { t } d t \quad ; \quad D _ { 4 } = \int _ { 0 } ^ { 1 } \left( 2 ^ { x } + 3 ^ { x } \right) d x \\ D _ { 5 } = \int _ { e ^ { x } } ^ { e ^ { 2 } } \left( x + \frac { 1 } { x } ( 1 + \ln x ) \right) d x \quad ; \quad D _ { 6 } = \int _ { e ^ { x } } ^ { e ^ { x } } \frac { d t } { t \ln t } \\ D _ { 7 } = \int _ { 1 } ^ { e ^ { x } } \frac { \cos ( \ln x ) } { x } d x \quad ; \quad D _ { 8 } = \int _ { e ^ { x } } ^ { e ^ { x } } \frac { \ln \left( 1 + \sqrt { x } \right) } { x + \sqrt { x } } d x \\ D _ { 9 } = \int _ { e ^ { x } } ^ { e ^ { 2 } } \frac { d t } { t \ln ^ { 2 } t } \quad ; \quad D _ { 1 0 } = \int _ { \ln 2 } ^ { \ln 3 } \frac { \left( e ^ { x } + 1 \right) \left( e ^ { x } + 2 \right) } { e ^ { x } } d x \end{array}$$

#### Exercice 05
Calculer les intégrales suivantes :

$$\begin{array}{l} I _ { 1 } = \int _ { 0 } ^ { \ln 3 } \frac { e ^ { x } - e ^ { - x } } { e ^ { x } + e ^ { - x } } d x \quad ; \quad I _ { 2 } = \int _ { 2 } ^ { 3 } ( 2 - x ) e ^ { e ^ { x } - 4 x } d x \\ I _ { 3 } = \int _ { 1 } ^ { e ^ { x } } \frac { d x } { x ( 1 + \ln x ) } \quad ; \quad I _ { 4 } = \int _ { 0 } ^ { \frac { \pi } { 3 } } \frac { d x } { ( 3 \tan x + 2 ) \cos ^ { 2 } x } \\ I _ { 5 } = \int _ { \frac { \pi } { 6 } } ^ { \frac { \pi } { 3 } } \frac { \tan x } { \ln ( \cos x ) } d x \quad ; \quad I _ { 6 } = \int _ { \frac { \pi } { 6 } } ^ { \frac { \pi } { 3 } } \frac { \tan x } { \ln ^ { 3 } ( \cos x ) } d x \\ I _ { 7 } = \int _ { 1 } ^ { 3 } \left( e ^ { x } \ln x + \frac { e ^ { x } } { x } \right) d x \quad ; \quad I _ { 8 } = \int _ { 0 } ^ { 1 } \frac { \left( \operatorname { A r c } \tan x \right) ^ { 2 } } { x ^ { 2 } + 1 } d x \end{array}$$

$$I _ { 9 } = \int _ { 0 } ^ { \pi } e ^ { x } \left( \sin x + \cos x \right) d x \quad ; \quad I _ { 1 0 } = \int _ { 0 } ^ { \frac { \pi } { 4 } } \frac { e ^ { \tan x } } { \cos ^ { 2 } x } d x$$

#### Exercice 06
On considère l'intégrale : $$I = \int _ { 0 } ^ { \frac { \pi } { 4 } } \frac { d x } { 1 + \sin ( 2 x ) }$$

1) Montrer que pour tout \( x \in \left[0; \frac{\pi}{4}\right] \):
\[
\frac { 1 } { 1 + \sin ( 2 x ) } = \frac { 1 + \tan ^ { 2 } x } { ( 1 + \tan x ) ^ { 2 } }
\]
2) En déduire la valeur de l'intégrale \(I\)

### LINÉARITÉ - RELATION DE CHASLES
#### Exercice 07
On considère les intégrales :

$$I = \int_{0}^{\frac{\pi}{2}} \frac{\cos x}{\cos x + \sin x} dx \quad \text{et} \quad J = \int_{0}^{\frac{\pi}{2}} \frac{\sin x}{\cos x + \sin x} dx$$

Calculer $I + J$ et $I - J$ puis en déduire $I$ et $J$

#### Exercice 08
On considère les intégrales :

$$I = \int_{0}^{\frac{\pi}{2}} \cos^4 x \, dx \quad ; \quad J = \int_{0}^{\frac{\pi}{2}} \sin^4 x \, dx$$
$$K = \int_{0}^{\frac{\pi}{2}} 2 \sin^2(x) \cos^2(x) \, dx$$

1) Calculator: \( I - J \) et \( I + J + K \)
2) a)-Calculer \(2\sin^2 (x)\cos^2 (x)\) en fonction de

$$\sin^2(2x) \text{ et } \cos(4x)$$

b)- Calculer $K$ puis en déduire les valeurs de $I$ et $J$.

#### Exercice 09
Soit $f$ la fonction numérique sur $\mathbb{R}$ par :

$$\begin{cases} f(x) = -\frac{1}{4}x + 6 & \text{si } x < 3 \\ f(x) = x + \frac{9}{4} & \text{si } x \ge 3 \end{cases}$$

Vérifier que $f$ est continue en 3 puis calculer $\int_{1}^{3} f(x) \, dx$.

#### Exercice 10
Calculer les intégrales suivantes :

$$A = \int_{-1}^{1} |3x^2 - 6x| \, dx \quad ; \quad B = \int_{2}^{1} |x^2 - 7x + 12| \, dx$$
$$I = \int_{2}^{1} |\ln x| \, dx \quad ; \quad J = \int_{0}^{2\pi} (|\sin x| + |\cos x|) \, dx$$
$$K = \int_{-1}^{1} |e^x - 1| \, dx \quad ; \quad L = \int_{0}^{\pi} \sin x |\cos x| \, dx$$
$$M = \int_{-1}^{1} \frac{|x-1|+|x-2|}{|x^2-9|+x^2+16} \, dx \quad ; \quad \int_{-1}^{1} (|x|+|x^2-1|) \, dx$$

#### Exercice 11
Soit $f$ la fonction définie par : $f(x) = \frac{1}{(x^2+3x+2)^3}$

1) Déterminer les réels $a, b, c, d, \alpha$ et $\beta$ tels que pour tout $x \in [2; 3]$ :

$$f(x) = \frac{a}{(x+1)^3} + \frac{b}{(x+2)^3} + \frac{c}{(x+1)^2} + \frac{d}{(x+2)^2} + \frac{\alpha}{x+1} + \frac{\beta}{x+2}$$

2) On considère la suite numérique $(u_n)$ définie par :

$$u_n = \int_{0}^{\infty} f(x) \, dx$$

Calculer $u_n$ en fonction de $n$ puis montrer que :

$$\lim_{n \to \infty} u_n = \ln(64) - \frac{33}{8}$$

### INTÉGRATION PAR PARTIES
#### Exercice 12
En utilisant la formule d'intégration par parties, calculer les intégrales suivantes :

$$A = \int_{\frac{1}{2}}^{1} \frac{x}{\sqrt{1+2x}} \, dx \quad ; \quad B = \int_{1}^{\pi} x \ln x \, dx$$
$$C = \int_{0}^{1} (x+3)e^{-x} \, dx \quad ; \quad D = \int_{0}^{\frac{\pi}{2}} (4x-1)e^{3x} \, dx$$
$$E = \int_{0}^{\frac{\pi}{4}} x \cos^2(2x) \, dx \quad ; \quad F = \int_{0}^{\frac{\pi}{2}} x^3 \sqrt{x^2+1} \, dx$$
$$G = \int_{-1}^{1} \frac{x+2}{\sqrt{x+5}} \, dx \quad ; \quad H = \int_{0}^{\frac{\pi}{2}} x \sin x \cos x \, dx$$

#### Exercice 13
En utilisant la formule d'intégration par parties, calculer les intégrales suivantes :

$$I = \int_{0}^{\frac{\pi}{2}} (2x^2-x) \cos x \, dx \quad ; \quad J = \int_{0}^{\pi} (3x+4) \cos^2 x \, dx$$
$$K = \int_{0}^{\pi} x^2 \sin(\ln x) \, dx \quad ; \quad L = \int_{1}^{\pi} \ln^2 x \, dx$$

D. 13: [A] (B) (C) (D) (E) (F)

#### Exercice 14
En utilisant la formule d'intégration par parties, calculer les intégrales suivantes :

$$I _ { 1 } = \int _ { 0 } ^ { \frac { \pi } { 3 } } \frac { x } { \cos ^ { 2 } x } d x \quad ; \quad I _ { 2 } = \int _ { - \frac { \pi } { 3 } } \frac { x \sin x } { \cos ^ { 3 } x } d x$$

$$I _ { 3 } = \int _ { 0 } ^ { \frac { \pi } { 3 } } e ^ { x } \sin x d x \quad ; \quad I _ { 4 } = \int _ { 0 } ^ { 1 } \operatorname { A r c } \tan x d x$$

$$I _ { 5 } = \int _ { 1 } ^ { 4 } e ^ { \sqrt { x } } d x \quad ; \quad I _ { 6 } = \int _ { 1 } ^ { 1 } \frac { x \ln x } { \left( 1 + x ^ { 2 } \right) ^ { 2 } } d x$$

#### Exercice 15
Soit $$( u _ { n } ) _ { n \in \mathbb { N } }$$, la suite définie par : $$u _ { n } = \int _ { \frac { 1 } { 2 } } ^ { 1 } x ^ { n } \ln ( x ) d x$$

1) En utilisant une intégration par parties, calculer pour tout $$r \in \mathbb { Q } - \{ - 1 \}$$ et pour tout $$a \in \mathbb { R } ^ { * }$$ l'intégrale :

$$I _ { r } ( a ) = \int _ { 1 } ^ { r } x ^ { r } \ln ( x ) d x$$

2) Étudier la limite de la suite $$( u _ { n } ) _ { n \in \mathbb { N } ^ { * } }$$.

#### Exercice 16
On considère la fonction numérique définie sur $$\mathbb { R }$$

par : $$f ( x ) = \frac { x e ^ { x } } { e ^ { x } + 1 }$$

1) Montrer que pour tout $$x \in \mathbb { R }$$ :

$$f ^ { \prime } ( x ) = \frac { e ^ { x } \left( e ^ { x } + x + 1 \right) } { \left( e ^ { x } + 1 \right) ^ { 2 } }$$

2) En utilisant la formule d'intégration parties, calcu-

ler l'intégrale : $$I = \int _ { 1 } ^ { 2 } \frac { e ^ { x } \left( e ^ { x } + x + 1 \right) } { \left( e ^ { x } + 1 \right) ^ { 2 } } \ln ( x ) d x$$

#### Exercice 17
1)- En utilisant deux fois la formule d'intégration par parties, montrer que : $$\int _ { 0 } ^ { \frac { \pi } { 8 } } e ^ { - 2 t } \cos ( 2 t ) d t = \frac { 1 } { 4 }$$

2)- On considère les intégrales $$E$$ et $$F$$ telles que :

$$E = \int _ { 0 } ^ { \frac { \pi } { 8 } } e ^ { - 2 t } \cos ^ { 2 } ( t ) d t \quad \text { et } \quad F = \int _ { 0 } ^ { \frac { \pi } { 8 } } e ^ { - 2 t } \sin ^ { 2 } ( t ) d t$$

Calculer $$E + F$$ et $$E - F$$ puis en déduire les valeurs des intégrales $$E$$ et $$F$$.

#### Exercice 18
On pose pour tout $$n \in \mathbb { N }$$ : $$I _ { n } = \int _ { 0 } ^ { 1 } x ^ { n } \sqrt { 1 - x } d x$$

1) Calculator \(I_0\)
2) a) En utilisant une intégration par parties, montré que: \((\forall n \in \mathbb{N}), (2n + 5)I_{n+1} = (2n + 2)I_n\)
b) En déduire les valeurs de \( I_{1} \) et \( I_{2} \).

#### Exercice 19
1) Vérifier que: \( \left( {\forall t \in  {\mathbb{R}}^{ * }}\right)  \frac{1}{\left( {t + 1}\right) ^ {2}} = 1 - \frac{t}{t + 1} - \frac{t}{\left( {t + 1}\right) ^ {2}} \)
2) Calculer l'intégrale: \( I = \int_{0}^{1} \frac{dx}{\left(e^{x} + 1\right)^{2}} \)
3) En utilisant une intégration par parties, calculer

l'intégrale suivante : $$J = \int _ { 0 } ^ { 1 } \frac { x e ^ { x } } { \left( e ^ { x } + 1 \right) ^ { 2 } } d x$$

#### Exercice 20
En utilisant une intégration par parties, déterminer le réel $$a$$ tel que : $$\int _ { 0 } ^ { 1 } ( x + a ) e ^ { x } d x = e$$

#### Exercice 21
En utilisant la formule d'intégration par parties, calculer les intégrales suivantes :

$$\begin{array} { l } { I = \int _ { 0 } ^ { 1 + a } \left( 1 + e ^ { x } \right) \ln \left( x + e ^ { x } \right) d x \quad ( \text { où } a \in ] 1 ; + \infty [ ) } \\ { J = \int _ { \frac { \pi } { 4 } } ^ { \frac { \pi } { 2 } } e ^ { 2 x } \sin \left( e ^ { x } \right) d x \quad ; \quad K = \int _ { 0 } ^ { \sqrt { 3 } } \frac { x ^ { 3 } } { \sqrt { 1 + x ^ { 2 } } } d x } \\ { L = \int _ { 0 } ^ { \frac { \pi } { 2 } } \cos x . \ln \left( 1 + \cos x \right) d x \quad ; \quad M = \int _ { 1 } ^ { 2 } \frac { 1 } { x ^ { 3 } } e ^ { \frac { 1 } { 2 } } d x } \\ { N = \int _ { 0 } ^ { 2 \pi } \frac { \ln \left( 1 + x \right) } { \sqrt { 1 + x } } d x \quad ; \quad P = \int _ { 0 } ^ { \pi } e ^ { - 2 x } \sin ^ { 2 } x d x } \end{array}$$

#### Exercice 22
On pose : $$\left( \forall x \in ] 0 ; 1 [ \right) \quad I ( x ) = \int _ { t } ^ { 1 } t . \operatorname { A r c t a n } \left( \frac { 1 } { t } \right) d t$$

1) En utilisant la formule d'intégration par parties, exprimer \( I(x) \) en fonction de \( x \).
2) Calculator \(\lim_{x\to 0^{-}}I(x)\)

### INTEGRATION PAR CHANGEMENT DE VARIABLE
En utilisant la technique de changement de variable, calculer les intégrales suivantes :

$$A = \int_{0}^{1} \frac{dx}{x + \sqrt{x - 1}} \quad (\text{poser : } t = \sqrt{x - 1})$$

$$B = \int_{0}^{1} x \sqrt{x + 1} \, dx \quad (\text{poser : } t = \sqrt{x + 1})$$

$$C = \int_{0}^{1} \sqrt{1 + \sin x} \, dx \quad (\text{poser : } t = \frac{x}{2} - \frac{\pi}{4})$$

$$D = \int_{0}^{1} \frac{dx}{4x^2 + 9} \quad (\text{poser : } t = \frac{2x}{3})$$

$$E = \int_{0}^{1} x^2 \sqrt{1 - x^2} \, dx \quad (\text{poser : } x = \cos t)$$

$$F = \int_{0}^{\sin(x^2)} \frac{dx}{e^x (1 + e^{2x})} \quad (\text{poser : } x = -\ln t)$$

En utilisant la technique de changement de variable, calculer les intégrales suivantes :

$$I_1 = \int_{0}^{1} \frac{\sqrt{x}}{1 + x} \, dx \quad (\text{poser : } t = \sqrt{x})$$

$$I_2 = \int_{0}^{1} \frac{1 + \cos x}{1 - \cos x} \, dx \quad (\text{poser : } t = \tan \frac{x}{2})$$

$$I_3 = \int_{0}^{1} \sqrt{1 + x^2} \, dx \quad (\text{poser : } x = \frac{e^x - e^{-x}}{2})$$

$$I_4 = \int_{0}^{1} \frac{1 + \sqrt{x - 1}}{x - 2} \, dx \quad (\text{poser : } t = \sqrt{x - 1})$$

$$I_5 = \int_{0}^{1} \sqrt{x^2 - 1} \, dx \quad (\text{poser : } x = \frac{e^x + e^{-x}}{2})$$

$$I_6 = \int_{0}^{\frac{\sqrt{x}}{2}} \frac{2x}{\cos^2(x^2)} \, dx \quad (\text{poser : } x = t^2)$$

$$I_7 = \int_{0}^{1} \frac{dx}{\sqrt{1 + x^2}} \quad (\text{poser : } x = \frac{t^2 - 1}{2t} \text{ et } t > 0)$$

$$I_8 = \int_{0}^{1} \frac{dt}{\sqrt{t (t - 4\sqrt{t} + 5)}} \quad (\text{poser : } x = \sqrt{t} - 2)$$

1) Déterminer deux (éclat et fl) tels que pour tout

$$t = -1 \quad \frac{t}{(t + 1)^2} = \frac{it}{t + 1} + \frac{fl}{(t + 1)^2}$$

2) En utilisant une intégration par changement de variable et en posant $x = t^3$, calculer l'intégrale :

$$I = \int_{0}^{1} \frac{dx}{\sqrt{x (\sqrt{x} + 1)^2}}$$

#### RANGER 1.2

1) Vérifier que : $(V t \in \mathbb{R} - [-1]) \frac{t^2}{t + 1} = t - 1 + \frac{1}{t + 1}$

2) Calculer l'intégrale : $I = \int_{0}^{\sqrt{3}} \frac{t^3}{1 + t} \, dt$

3) En posant $t = \sqrt{e^x}$, calculer : $J = \int_{0}^{\infty} \frac{e^x}{1 + e^{-x}} \, dx$

#### RANGER 1.3

En posant $t = 2x + 1$, calculer l'intégrale :

$$I = \int_{\frac{1}{2}}^{1} \frac{dx}{4x^2 + 4x + 5}$$

#### RANGER 1.4

Montrer que : $\int_{0}^{1} \frac{dx}{x^2 - x + 1} = \frac{2\pi}{3\sqrt{3}}$

#### RANGER 1.5

Pour tout $x \in [-1, 0]$, on pose : $F(x) = \int_{\frac{1}{2}}^{1} \frac{dt}{t\sqrt{1 + t}}$

1) Calculer $F(x)$ en fonction de $x$.

2) Calculer $\lim_{x \to 0} F(x)$ et $\lim_{x \to 1} F(x)$.

#### RANGER 1.6

En utilisant l'intégration par changement de variable, Calculer les intégrales suivantes :

$$I = \int_{0}^{\infty} \sqrt{e^x - 1} \, dx \quad : \quad J = \int_{0}^{\infty} \frac{x + 2}{\sqrt{x + 4}} \, dx$$

$$K = \int_{0}^{\frac{\pi}{2}} \tan^4 x \, dx \quad : \quad L = \int_{0}^{\infty} \frac{e^x}{1 + e^x} \ln(1 + e^x) \, dx$$

EXERCICE 31

#### Exercice 32
Pour tout $x \in \mathbb{R}^+$ on pose : $f(x) = \int_0^1 \frac{\sqrt{t}}{\sqrt{1 + t^2}} dt$

1) Calculer la dérivée sur $\mathbb{R}$ de la fonction :

$$\varphi : x \mapsto \ln \left(x + \sqrt{x^2 + 1}\right)$$

2) En utilisant une intégration par changement de variable, calculer $f(x)$.

#### Exercice 33
Pour tout $a \in \mathbb{R}^+$ et $n \in \mathbb{N}^+$ on pose :

$$I_a(a) = \int_0^a \frac{\sqrt{1 + x^{2a}}}{x} dx$$

1) Vérifier que pour tout $t \in \mathbb{R} - \{-1; 1\}$ :

$$\frac{t^2}{t^2 - 1} = 1 + \frac{1}{2} \left(\frac{1}{t - 1} - \frac{1}{t + 1}\right)$$

2) En utilisant une intégration par changement de variable en posant $t = \sqrt{1 + x^{2a}}$, calculer $I_a(a)$ en fonction de $n$ et $a$.

### INTÉGRATION ET ORDRE
#### Exercice 33
On considère l'intégrale : $I = \int_0^1 \frac{e^x}{1 + x} dx$

1) a) Montrer que: \(\left(\forall t\in \mathbb{R}^{+}\right)1 - t\leq e^{-t}\leq 1\)
b) En déduire que pour tout \( x \in [0,1] \):

$$1 - x \leq e^{-x} \leq 1 - x + \frac{x^2}{2}$$

2) a) Vérifier que pour tout $x \in [0; 1]$ :

$$\frac{x^4}{1 + x} = x^3 - x^2 + x - 1 + \frac{1}{1 + x}$$

b) En déduire que : $\frac{1}{2} \leq I \leq \frac{5}{24} + \frac{\ln 2}{5}$

#### Exercice 34
Calculer : $\lim_{x \to 0^+} \int_0^{2x} \frac{dt}{t^2 \sqrt{1 + t^2}}$ et $\lim_{x \to +\infty} \int_0^{2x} \frac{dt}{1 + \sqrt{t}}$

#### Exercice 35
Soit $a \in \mathbb{R}^+$ et $f$ une fonction continue sur le segment $[0; a]$. On définit la suite $(u_n)_{n \ge 1}$ par : $u_n = \int_0^a \frac{f(x)}{1 + nx} dx$ Calculer $\lim_{n \to +\infty} u_n$.

#### Exercice 36
On considère la fonction $F$ définie sur $\mathbb{R}$ par :

$$F(x) = \int_0^{2x} \frac{dt}{\sqrt{1 + t^2 + t^4}}$$

1) Montrer que la fonction \(F\) est paire.
2) a) Montrer que pour tout \(x \in \mathbb{R}^+\), il existe

$$c \in [x; 2x] \text{ tel que : } F(x) = \frac{x}{\sqrt{1 + c^2 + e^4}}$$

b) En déduire que : $(\forall x \in \mathbb{R}^+)$ $0 \leq F(x) \leq \frac{1}{x}$ puis en déduire $\lim_{x \to +\infty} F(x)$.

3) Calculer $F'(x)$ pour tout $x \in \mathbb{R}$.

### AIRES ET VOLUMES
#### Exercice 37
Le plan est rapporté à un repère orthonormé.

Calculer l'aire du domaine délimité par la courbe de la fonction $f$ définie par $f(x) = x^2$ Arc tan $x$, l'axe des abscisses et les droites d'équations $x = -1$ et $x = \sqrt{3}$.

#### Exercice 38
Le plan est rapporté à un repère orthogonal $(O; \bar{i}, \bar{j})$ avec $\|\bar{i}\| = 2cm$ et $\|\bar{j}\| = 4cm$.

Calculer l'aire du domaine délimité par les courbes des fonctions $f$ et $g$ définies sur $[e; e^*]$ par :

$$f(x) = \frac{x + 1}{x \ln x} \text{ et } g(x) = \frac{1}{\ln x}$$

Le plan est rapporté à un repère orthonormé $$(O, \vec{i}, \vec{j})$$
tel que $$\frac{1}{2} \pi \ge 2\pi$$. Soit $$\mathcal{C}$$ la courbe représentative de
la restriction de la fonction $$x \mapsto \tan x$$ sur $$\left[-\frac{x}{4}, \frac{x}{4}\right]$$.
Calculer le volume du solide engendré par la rotation
de la courbe $$\mathcal{C}$$ autour de l'axe des abscisses.

Le plan est rapporté à un repère orthonormé $$(O, \vec{i}, \vec{j})$$.
Soit $$\mathcal{C}$$ la courbe représentative de la restriction de la
fonction $$\cos \pi \, \text{sur } I = [2\pi, 3\pi]$$.

1) Vérifier que la fonction $$x \mapsto \cos x$$ réalise une bijection de $$I$$ sur un intervalle $$J$$ à déterminer.
2) Calculer le volume du solide engendré par la rotation de la courbe $$\mathcal{C}$$ autour de l'axe des ordonnées.

#### EXPRENCE 41

1) On pose : $$I_p = \int x (\ln(x) + 1)^p dx$$ où $$p \in \mathbb{N}$$.

a) En utilisant une intégration par parties, montrer
que : $$(\forall p \in \mathbb{N}) \quad 2I_p = e^2 2^p - pI_{p-1} - 1$$

b) En déduire que : $$I_1 = e^2 + \frac{1}{2} I_0$$

2) Calculer le volume du solide engendré par la rotation de la courbe $$\mathcal{C}_f$$ de la fonction :

$$f : x \mapsto \sqrt{x} (1 + \ln x)$$

autour de l'axe des abscisses sur $$[1; e]$$.

#### EXPRENCE 42

On considère la fonction $$f$$ définie sur $$\mathbb{R}$$ par :

$$\begin{cases} f(x) = e^x \sqrt{1 - e^x} & \text{si } x \le 0 \\ f(x) = 1 - \frac{\ln x}{x} + \left(\frac{\ln x}{x}\right)^2 & \text{si } x > 0 \end{cases}$$

$$\mathcal{C}$$ sa courbe dans un repère orthonormé.

1) Étudier la continuité de $$f$$ en $$\emptyset$$.
2) Étudier la dérivabilité de $$f$$ en $$\emptyset$$.
3) Déterminer les branches infinies de la courbe $$\mathcal{C}$$.
4) Étudier les variations de la fonction $$f$$.
5) Ecrire l'équation de la tangente à la courbe $$\mathcal{C}$$ au point d'abscisse 1.

6) Construire la courbe $$\mathcal{C}$$.

7) On considère les intégrales :

$$I = \int \frac{\ln x}{x^2} dx \quad , \quad J = \int \frac{(\ln x)^2}{x^2} dx \quad , \quad K = \int \frac{\ln x}{x} dx$$

a) Calculer $$I$$ et $$K$$ puis montrer que : $$J = e^{-1} + 2I$$
b) Calculer l'aire du domaine délimité par $$\mathcal{C}$$ et les droites d'équations $$x = 1, x = e$$ et $$y = 1$$.

8) Soit $$\lambda \in \mathbb{R}^+$$. On note $$V(\lambda)$$ le volume engendré par la rotation de la courbe la restriction de $$f$$ sur $$[\lambda, \emptyset]$$ autour de l'axe des abscisses (un tour complet)
a) Calculer $$V(\lambda)$$ en fonction de $$\lambda$$.
b) Calculer $$\lim_{\lambda \to \infty} V(\lambda)$$.

### LES SOMMES DE RIEMANN
#### EXPRENCE 43

Calculer $$\lim_{n \to \infty} u_n$$ dans chacun des cas suivants :

1) $$u_n = \sum_{k=1}^n \frac{k^2}{n^2 \sqrt{n^2 + k^2}}$$ ; 2) $$u_n = \sum_{k=1}^{n-1} \frac{n+k}{n^2+k^2}$$
3) $$u_n = \frac{1}{n} \sum_{k=1}^n \frac{k^2}{\sqrt{(n^2+k^2)^2}}$$ ; 4) $$u_n = \frac{1}{n\sqrt{n}} \sum_{k=1}^{n-1} \frac{k}{\sqrt{n+k}}$$

#### EXPRENCE 44

Calculer $$\lim_{n \to \infty} u_n$$ dans chacun des cas suivants :

1) $$u_n = \frac{1}{n} \left[ \prod_{k=1}^n (n+k) \right]^{\frac{1}{n}}$$ ; 2) $$u_n = \left[ \prod_{k=1}^n \left(1 + \frac{k}{n}\right)^k \right]^{\frac{1}{n}}$$

On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par :

$$f(x) = \begin{cases} \int_{0}^{x} (1 + \ln t) dt \text{ si } x > 0 \\ f(0) = 0 \\ \frac{1}{x^2} e^{\frac{1}{x}} \text{ si } x < 0 \end{cases}$$

1) Montrer que pour tout $x \in \mathbb{R}^+$ :

$$f(x) = (1 + x) \ln(1 + x) - x \ln x$$

2) a) Montrer que $f$ est continue en 0.

b) Montrer que $\lim_{x \to \infty} f(x) = +\infty$ et calculer

$$\lim_{x \to \infty} f(x).$$

3) a) Étudier la dérivabilité de $f$ en 0 puis donner une interprétation géométrique au résultat.

b) Calculer $f'(x)$ pour tout $x \in \mathbb{R}^+$.

c) Dresser le tableau de variations de $f$.

4) On considère la suite numérique $(u_n)_{n \ge 1}$ définie

pour tout $n \in \mathbb{N}^*$ par : $u_n = \sum_{k=0}^{\infty} \frac{n}{(k-2n)^2} e^{\left[\frac{n}{k-2n}\right]}$

Calculer la limite de la suite $(u_n)_{n \ge 1}$.

### ÉTUDE DES FONCTIONS
#### LA RÉGION 45

1) Montrer que pour tout $t \in \mathbb{R}$ :

$$\frac{(1+t)^2}{(1+t^2)(3+t^2)} = \frac{t}{1+t^2} - \frac{t}{3+t^2} + \frac{1}{3+t^2}$$

2) Montrer que pour tout $\alpha \in \mathbb{R}$ :

$$\int_{0}^{\alpha} \frac{1}{3+t^2} dt = \frac{1}{\sqrt{3}} \text{Arctan}\left(\frac{\alpha}{\sqrt{3}}\right)$$

3) On considère la fonction $F$ définie sur $[0; \pi]$ par :

$$F(x) = \int_{0}^{x} \frac{1 + \sin u}{2 + \cos u} du$$

a) Montrer que \(F\) est derivable sur \([0; \pi]\).
b) En utilisant une integration par changement de variable et en posant \(t = \tan \frac{u}{2}\), montré que:

$$(\forall x \in [0; \pi]) \quad F(x) = 2 \int_{0}^{\tan \frac{x}{2}} \frac{(1+t)^2}{(1+t^2)(3+t^2)} dt$$

c) En utilisant les questions (1) et (2), montrer que pour tout $x \in [0; \pi]$ :

$$F(x) = \ln 3 + \frac{2}{\sqrt{3}} \text{Arctan}\left(\frac{\tan \frac{x}{2}}{\sqrt{3}}\right) + \ln\left(\frac{1 + \tan^2 \frac{x}{2}}{3 + \tan^2 \frac{x}{2}}\right)$$

d) En utilisant la continuité de $F$, montrer que :

$$\int_{0}^{x} \frac{1 + \sin u}{2 + \cos u} du = \ln 3 + \frac{\pi}{\sqrt{3}}$$

#### LA RÉGION 47

Soit $f$ la fonction numérique définie sur $[1; +\infty]$ par :

$$f(x) = e^{-\sqrt{x^2}}$$

et soit $\mathscr{C}_f$ sa courbe représentative dans un repère orthonormé $(O, \bar{i}, \bar{j})$ avec : $[\bar{i}] = [\bar{j}] = 2cm$.

On pose : $(\forall x \in [0; 1]) \quad F(x) = \int_{0}^{1 + (\ln x)^2} f(t) dt$

1) a) Montrer que : $(\forall x \in [0; 1]) \quad F'(x) = 2 \ln x$

b) Calculer $F(x)$ pour tout $x \in [0; 1]$.

2) Pour tout $\alpha \ge 1$, on note $S(\alpha)$ l'aire du domaine délimité par la courbe $\mathscr{C}_f$, l'axe des abscisses et les droites d'équations $x = 1$ et $x = \alpha$.

a) Montrer que :

$$S(\alpha) = F(f(\alpha)) \quad (\text{en unité d'aire})$$

b) Calculer $S(\alpha)$ et $\lim_{\alpha \to \infty} S(\alpha)$

### Exercices de perfectionnement

#### Exercice 48
Pour tout $n \in \mathbb{N}$ on pose : $u_n = \int_0^1 \frac{2^n t}{1 + n 2^n t^2} dt$

1) Calculer \(u_{0}\)
2) Calculer \( u_{n} \) en fonction de \( n \) puis déterminer \( \lim_{n\to \infty}u_n \).

#### Exercice 49
On considère la fonction $f$ définie sur $I = \left[0; \frac{\pi}{4}\right]$ par :

$$f(x) = \frac{\sin x}{\cos^3 x}$$

On considère l'intégrale : $K = \int_0^{\frac{\pi}{4}} \frac{1}{\cos^4 x} dx$

1) Montrer que: \((\forall x \in I) f'(x) = \frac{3}{\cos^4 x} - \frac{2}{\cos^2 x}\)
2) En déduire la valeur de \( K \).

#### Exercice 50
Soit $f$ la fonction définie sur $\mathbb{R}$ par : $f(x) = e^{-x} \sin x$

1) Verifier que: \((\forall x \in \mathbb{R}) f'(x) + 2f'(x) + 2f(x) = 0\)
2) Soit \(n\in \mathbb{N}\) .Calculer: \(a_{n} = \int_{n\times n}^{(n + 1)n}f(x)dx\)

#### Exercice 51
1) Calculer l'intégrale suivante: \( I = \int_{0}^{\frac{\pi}{4}} \frac{1}{\cos^4 x} dx \)
2) En utilisant une intégration par parties, calculer

l'intégrale : $J = \int_0^{\frac{\pi}{4}} \frac{x \sin x}{\cos^4 x} dx$

#### Exercice 52
En utilisant la formule de l'intégration par parties, une ou plusieurs fois, calculer les intégrales suivantes :

$$I_1 = \int_0^1 x^2 e^{-x} dx \quad ; \quad I_2 = \int_0^{\frac{\pi}{4}} (x^2 + 4x) \sin(2x) dx$$

$$I_3 = \int_0^{\pi} x \ln^2(x) dx \quad ; \quad I_4 = \int_0^{\pi} e^x \sin(x) dx$$

$$I_5 = \int_0^1 3x^3 \operatorname{Arc} \tan(x) dx \quad ; \quad I_6 = \int_0^1 x^2 \sqrt{x+3} dx$$

#### Exercice 53
On considère les intégrales suivantes :

$$I = \int_0^{\pi} e^x \cos^2(x) dx \quad , \quad J = \int_0^{\pi} e^x \sin^2(x) dx$$
$$K = \int_0^{\pi} e^x \cos(2x) dx$$

1) En utilisant deux fois la formule d'intégration par parties, calculer la valeur du \( K \).
2) Calculer \( I + J \) et \( I - J \) puis en déduire les valeurs des intégrales \( I \) et \( J \).
3) Écrire \( \cos^2 x \) et \( \sin^2 x \) en fonction de \( \cos(2x) \) puis calculer la valeur de chacune des intégrales \( I \) et \( J \) en utilisant celle de l'intégrale \( K \).

#### Exercice 54
Pour tout $x \in \mathbb{R}$ on pose : $f(x) = \int_1^x (t-1)(t+3)e^{-x} dt$

1) Calculer \( f(x) \) en fonction de \( x \).
2) Determiner \(\lim_{x\to +\infty}f(x)\)

#### Exercice 55
Soit $m \in \mathbb{R}_+^n$. On pose : $I(m) = \int_{-\infty}^m e^{1 - 2x} dx$

Calculer $I(m)$ en fonction de $m$ puis donner $\lim_{m \to +\infty} I(m)$.

#### Exercice 56
1) Calculer l'intégrale suivante: \( I = \int_{\infty}^{0} \frac{dx}{1 + 2e^x} \)
2) En utilisant une intégration par parties, calculer l'intégrale: \( I = \int_{\infty}^{0} e^{-x} \ln \left(1 + 2e^{x}\right) dx \)

#### Exercice 57
Pour tout $n \in \mathbb{N}$, on pose : $I_n = \int_0^1 \frac{x^{2n+1}}{\sqrt{1+x^2}} dx$

1) Calculer \( I_0 \).
2) En utilisant une intégration par parties, montré que pour tout \( n \in \mathbb{N} \): \( (2n + 3)I_{n+1} = \sqrt{2} - 2(n + 1)I_n \).
3) En déduire les valeurs de \( I_{1} \) et \( I_{2} \).

• 4.3. (6) (6) (6) (6) (6) (6) (6) (6)

#### Exercice 6a
On considère les intégrales :

$$I = \int_0^1 \frac{dx}{\sqrt{x^2 + 2}}, \quad J = \int_0^1 \frac{x^2}{\sqrt{x^2 + 2}} dx, \quad K = \int_0^1 \sqrt{x^2 + 2} dx$$

1) Montrer que: \(J + 2I = K\)
2) Soit \( f \) la fonction numérique définie sur \([0,1]\) par:

$$f(x) = \ln\left(x + \sqrt{x^2 + 2}\right)$$

a)-Calculer \(f^{\prime}(x)\) pour tout \(x\in [0,1]\)
b)-En déduire la valeur de l'intégrale \(I\)

3) a)- En utilisant deux fois la formule d'intégration par parties, montré que: \( K = \sqrt{3} - J \)
b)-En déduire les valeurs de \(J\) et \(K\)

#### Exercice 6b
Soit $\lambda \in [0,1]$.

1) En utilisant une intégration par parties, calculer l'intégrale: \( I(\lambda) = \int_0^{1 - \lambda} \ln(1 - t^2) dt \)
2) Determiner la limite: \(\lim_{\lambda \to 0}I(\lambda)\)

#### Exercice 6c
Soit $a \in \mathbb{R}^*$. On considère les intégrales :

$$F_a(x) = \int_0^x \frac{dt}{\sqrt{t^2 + a^2}} \quad \text{et} \quad G_a(x) = \int_0^x \sqrt{t^2 + a^2} dt$$

1) Montrer que: \( F_{a}(x) = \ln \left(x + \sqrt{x^{2} + a^{2}}\right) - \ln a \)
2) En utilisant une intégration par parties, exprimer \( G_{a}(x) \) en fonction de \( x \).

#### Exercice 6d
Calculer les intégrales suivantes :

$$\begin{array}{l} I_1 = \int_0^{\frac{\pi}{4}} \frac{\cos x}{1 + \cos x} dx \quad ; \quad I_2 = \int_0^{\frac{\pi}{3}} \sin(2x) \cos(5x) dx \\ I_3 = \int_0^{\ln(\sqrt{3})} e^x \operatorname{Arctan}(e^{-x}) dx \quad ; \quad I_4 = \int_0^{\frac{\pi}{3}} \sin^4(x) dx \\ I_5 = \int_0^{\frac{\pi}{2}} (2x + 1) \cos^2(x) \sin(x) dx \quad ; \quad I_6 = \int_0^1 x^3 e^{-x^2} dx \\ I_7 = \int_{-\frac{\pi}{2}}^x (x \cos x + \sin x) dx \quad ; \quad \int_{-\frac{\pi}{2}}^x \tan(x) dx \end{array}$$

#### Exercice 6e
Pour tout $n \in \mathbb{N}$, on pose :

$$A_n = \int_0^{\frac{\pi}{2}} e^{-\pi n} \sin(x) dx \quad \text{et} \quad B_n = \int_0^{\frac{\pi}{2}} e^{-\pi n} \cos(x) dx$$

1) Calculator \(A_0\) et \(B_0\)
2) En utilisant la formule d'intégration par parties,

montrer que : $A_n + nB_n = 1$ et $-nA_n + B_n = e^{-\frac{2\pi}{n}}$

3) a) En déduire \( A_{n} \) et \( B_{n} \) en fonction de \( n \).
b) Determiner \(\lim_{n\to \infty}A_n\) et \(\lim_{n\to \infty}B_n\)

#### Exercice 6f
Pour tout $n \in \mathbb{N}$ on pose : $u_n = \frac{1}{n!} \int_0^1 (1-x)^n e^x dx$

1) Montrer que: \(\forall n\in \mathbb{N},u_{n + 1} = u_n - \frac{1}{(n + 1)!}\)
2) En déduire que: \(\forall n\in \mathbb{N},u_n = e - \sum_{k = 0}^{n}\frac{1}{k!}\)

#### Exercice 6g
Pour tout $n \in \mathbb{N}^*$ on pose : $I_n = \int_0^1 \frac{dt}{(1 + t^2)^n}$

1) Calculator \(I_{1}\)
2) a) En utilisant la formule d'intégration par parties, calculer \( I_{n+1} - I_n \) en fonction de \( I_n \) et \( n \).
b) En déduire \( I_2 \) et \( I_3 \).

#### Exercice 6h
En utilisant l'intégration par changement de variable, calculer les intégrales suivantes :

1) \( I = \int_0^{\sqrt{3}} \frac{1 - t^2}{(1 + t^2)\sqrt{1 + t^4}} dt \) avec \( \left(u = t + \frac{1}{t}\right) \)
2) \(J = \int_{-\frac{\pi}{8}}^{\frac{\pi}{8}}\frac{\sin x}{\cos(2x)\cos x} dx\) avec \((t = \cos 2x)\)
3) \(K = \int_{-\frac{\pi}{8}}^{\frac{\pi}{8}}\frac{\sin x}{\cos(x)\sqrt{2 + \sin^2x}} dx\) avec \((t = \sin^2 x)\)
4) \(L = \int_{1}^{t}\frac{\cos(\ln t)}{t} dx\) avec \((x = \ln t)\)

2.4.3. (1) (2) (3) (4) (5) (6) (7) (8) (9) (10)

#### Exercice 66
Pour tout $$(a; x) \in \mathbb{R}^2$$ on pose : $$F_a(x) = \int_0^x \sqrt{\frac{e^t}{1 + e^t}} dt$$

1) En utilisant l'intégration par changement de variable suivant: \( u = \sqrt{\frac{e^t}{1 + e^t}} \), calculer \( F_{a}(x) \) en fonction de \( a \) et \( x \).
2) Montrer que: \(\lim_{x\to -\infty}F_a(x) = 2\ln \left(\sqrt{1 + e^x} +\sqrt{e^x}\right)\)

#### Exercice 67
1) Soit $$a \in [1; +\infty[$$. Pour tout $$x \in \mathbb{R}^+$$ on pose :

$$I_a(x) = \int_0^x t^2 \sqrt{t + a} dt$$

En utilisant l'intégration par changement de variable et en posant $$u = \sqrt{t + a}$$, Montrer que :

$$I_a(x) = \frac{2}{105} \left[ (x + a)^{\frac{3}{2}} (15x^2 - 12ax + 8a^2) - 8a^{\frac{3}{2}} \right]$$

2) Calculer l'intégrale : $$J(x) = \int_0^x \frac{t^2}{\sqrt{t + 1 + \sqrt{t + 4}}} dt$$

#### Exercice 68
1) Soit $$f$$ la fonction définie sur $$I = [1; +\infty[$$ par :

$$f(t) = \frac{1}{2} \left( \sqrt{t} + \frac{1}{\sqrt{t}} \right)$$

Montrer que $$f$$ réalise une bijection de $$I$$ sur $$I$$ puis définir sa fonction réciproque $$f^{-1}$$.

2) Soit $$\varphi$$ la fonction sur définie $$]1; +\infty[$$ par :

$$\varphi(x) = \int_{\sqrt{2}}^x \frac{du}{\sqrt{u^2 - 1}}$$

En utilisant une intégration par changement de variable en posant $$u = f(t)$$, calculer $$\varphi(x)$$.

#### Exercice 69
On considère l'intégrale : $$I = \int_{-\frac{\pi}{4}}^{\frac{\pi}{4}} \frac{\cos x}{1 + e^{2x}} dx$$

1) En utilisant le changement de variable $$t = -x$$,

montrer que : $$I = \int_{-\frac{\pi}{4}}^{\frac{\pi}{4}} \frac{e^{2t} \cos t}{1 + e^{2t}} dt$$

2) En déduire que : $$I = \frac{\sqrt{2}}{2}$$

#### Exercice 70
On considère les intégrales suivantes :

$$I = \int_1^1 t \operatorname{Arc} \tan(t) dt \quad \text{et} \quad J = \int_1^1 \frac{t \operatorname{Arc} \tan(t)}{1 + e^t} dt$$

1) En utilisant une intégration par parties, calculer \( I \).
2) Montrer que: \( J = \int_{-1}^{1} \frac{e^t}{1 + e^t} (t \operatorname{Arc} \tan t) dt \)
3) En déduire la valeur de l'intégrale \(J\)

#### Exercice 71
En utilisant une intégration par changement de variable et en posant $$t = \frac{\pi}{4} - x$$, calculer les intégrales :

$$\begin{array}{l} L_1 = \int_0^{\pi/4} \ln(1 + \tan x) dx \\ L_2 = \int_0^{\pi/4} (\cos^4(2x) + \sin^4(2x)) \ln(1 + \tan x) dx \end{array}$$

#### Exercice 72
Soit $$n \in \mathbb{N}^+$$ et $$\alpha \in \mathbb{R}_+^*$$. On pose :

$$I_\alpha(\alpha) = \int_0^{\frac{\pi}{2n}} \frac{\cos^\alpha(nt)}{\cos^\alpha(nt) + \sin^\alpha(nt)} dt$$

Calculer $$I_\alpha(\alpha)$$ et vérifier qu'elle est indépendante de $$\alpha$$.

#### Exercice 73
1) Soit $$f$$ une fonction continue sur le segment $$[a; b]$$.

Montrer que : $$\int_a^b f(x) dx = \int_a^b f(a + b - x) dx$$

2) En déduire la valeur de l'intégrale :

$$I = \int_0^{\frac{\pi}{2}} \left( \sqrt{\cos t} - \sqrt{\sin t} \right) dt$$

#### Exercice 74
Soit $$f$$ une fonction continue sur un intervalle $$I$$.

Montrer que pour tout $$(a; b) \in I^2$$ :

$$\int_a^b f(x) dx = (b - a) \int_0^b f(a + (b - a)t) dt$$

#### Exercice 75
Calculer : $$\int_{\frac{\pi}{4}}^{\frac{\pi}{4}} \frac{\cos x}{\sin^2 x} dx + \int_0^{\frac{\pi}{4}} \frac{\sin x}{\cos^2 x} dx$$

2.3.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.

#### Exercice 78
Montrer que : $$\int_{-1}^{1} \cos(x) \ln\left(\frac{1-x}{1+x}\right) dx = 0$$

#### Exercice 79
Soit $$f$$ une fonction continue sur $$\mathbb{R}$$ telle que :

$$(\exists \lambda \in \mathbb{R}) (\forall x \in \mathbb{R}) \int_{-x}^{x} f(t) dt = \lambda$$

Montrer que la fonction $$f$$ est impaire.

#### Exercice 79
Soit $$f$$ une fonction continue sur $$[-a; a]$$ (où $$a \in \mathbb{R}^+$$).

1) Montrer que: \(\int_{-a}^{a}f(t)dt = \int_{0}^{a}(f(t) + f(-t))dt\)
2) En déduire les implications suivantes:

a)-Si \(f\) est impare alors: \(\int_{-a}^{a}f(t)dt = 0\)
b)-Si \(f\) est paire alors: \(\int_{-a}^{a}f(t)dt = 2\int_{0}^{a}f(t)dt\)

#### Exercice 79
Soit $$f$$ une fonction impaire et continue sur $$\mathbb{R}$$ et $$n$$ un entier naturel.

1) Montrer que: \(\int_{-a}^{a}f(x)\cos (nx)dx = 0\)
2) Montrer que:

$$\int_{-a}^{a} f(x) \sin(nx) dx = 2 \int_{0}^{a} f(x) \sin(nx) dx$$

#### Exercice 80
Soit $$a \in ]0; 1[ \cup ]1; +\infty[$$.

1) Montrer que si $$f$$ et continue sur $$[-a; a]$$ et paire,

alors : $$\int_{-a}^{a} \frac{f(x)}{e^x + 1} dx = \int_{0}^{a} f(x) dx$$

2) En déduire la valeur de : $$\int_{-a}^{a} \frac{dx}{(x^2 + 1)(e^x + 1)}$$

#### Exercice 81
Soit $$f$$ une fonction continue sur le segment $$[a; b]$$ telle pour tout $$x \in [a; b]$$ : $$f(a + b - x) = f(x)$$

Montrer alors que :

$$\int_{a}^{b} x f(x) dx = \frac{a+b}{2} \int_{a}^{b} f(x) dx$$

#### Exercice 82
On considère l'intégrale $$I$$ définie par :

$$I = \int_{-1}^{1} \frac{(x^4 + x^2 + 1)^2 + e^x}{e^x + 1} dx$$

En utilisant le changement $$x = -t$$, montrer que :

$$I = \int_{-1}^{1} \frac{(x^4 + x^2 + 1)^2 e^x + 1}{e^x + 1} dx$$

puis en déduire la valeur de $$I$$.

#### Exercice 83
1) a) Montrer que: \(\left(\forall t\in \mathbb{R}^{+}\right)1 - t\leq \frac{1}{1 + t}\leq 1\)
b) En déduire que pour tout \( x \in \mathbb{R}^+ \):

$$x - \frac{x^2}{2} \leq \ln(1+x) \leq x$$

2) En déduire alors un encadrement de l'intégrale

$$I = \int_{0}^{1} \ln(1+x^2) dx \text{ à } 10^{-1} \text{ près.}$$

#### Exercice 84
Soit $$f : \mathbb{R}^+ \to \mathbb{R}^+$$ une bijection et $$g$$ sa bijection réciproque. On suppose que $$f$$ et $$g$$ sont continues sur $$\mathbb{R}^+$$.

1) Montrer que pour tout $$x \in \mathbb{R}^+$$ :

$$\int_{0}^{1} f(t) dt + \int_{0}^{f(x)} g(t) dt = x f(x)$$

2) En déduire la valeur de : $$F(x) = \int_{0}^{1} \text{Arc tant } dt$$

#### Exercice 85
(Les questions suivantes sont indépendantes)

1) En utilisant une intégration par parties, calculer

l'intégrale suivante : $$I = \int_{0}^{1} \frac{x^2}{(1+x^2)^2} dx$$

2) Calculer l'intégrale suivante :

$$J = \int_{0}^{\frac{x}{2}} \frac{1}{2 + \cos x} dx \text{ (on pourra poser : } t = \tan \frac{x}{2})$$

3) Calculer la limite suivante: \(\lim_{n\to \infty}\frac{1}{n^2}\sum_{k = 1}^{n}k e^{k}\)
4) Calculer l'intégrale: \( K = \int_{0}^{t}\sin^{2}x.\cos^{4}xdx \)

#### Exercice 86
On considere la suite \(\left(u_{n}\right)\) définie par: \(u_{n} = \frac{(-1)^{n}}{2n + 1}\)
On pose pour tout \(n\in \mathbb{N}\) .. \(S_{n} = u_{0} + u_{1} + \ldots +u_{n}\)
1) Calculer l'intégrale: \(\int_0^1 x^{2n}dx\)
2) Montrer que: \(S_{n} = \int_{0}^{1}\frac{1 + (-1)^{n}x^{2n + 2}}{1 + x^{2}} dx\)
3) Montrer que: \((\forall n \in \mathbb{N}) S_n - \frac{\pi}{4} = (-1)^n \int_0^1 \frac{x^{2n+2}}{1 + x^2} dx\) puis calculer \(\lim_{n \to \infty} S_n\).

#### Exercice 87
Pour tout $n \in \mathbb{N}^*$ on pose : $I_n = \frac{1}{n! \cdot 2^{n+1}} \int_0^1 (1-t)^n e^{-t/2} dt$

1) Calculator \(I_{1}\).
2) Montrer que: \((\forall n \in \mathbb{N}^*) I_{n+1} = I_n - \frac{1}{(n+1)! 2^{n+1}}\)
3) En déduire que: \(\left(\forall n\in \mathbb{N}^{*}\right)\sqrt{e} = \sum_{k = 0}^{n}\frac{1}{k!2^{k}} +I_{n}\)
4) a)- Montrer qu'il existe \(A \in \mathbb{R}^*\) tel que:

$$(\forall n \in \mathbb{N}^*) \ 0 \le I_n \le \frac{A}{2^n \cdot n!}$$

b)- En déduire la valeur de la limite : $\lim_{n \to \infty} \sum_{k=0}^n \frac{1}{k! \cdot 2^k}$

#### Exercice 88
On considère la suite numérique $(u_n)_{n \in \mathbb{N}^*}$ définie par :

$$(\forall n \in \mathbb{N}^*) \ u_n = n \int_1^\pi \frac{\sin x}{x^n} dx$$

1) En utilisant une intégration par parties, montrer

que : $(\forall n \ge 2) \ u_n = \frac{n}{n-1} \left( \sin 1 + \int_1^\pi \frac{\cos x}{x^{n-1}} dx \right)$

2) a)- Montrer que: \((\forall n \geq 2) \left| \int_{1}^{\pi} \frac{\cos x}{x^{n-1}} dx \right| \leq \int_{1}^{\pi} \frac{dx}{x^{n-1}}\)
b)-En déduire que: \(\lim_{n\to \infty}\left(\int_1^x\frac{\cos x}{x^{n - 1}} dx\right) = 0\)
c)- Montrer que: \(\lim_{n\to \infty}u_n = \sin 1\)

#### Exercice 89
Soit $f$ et $g$ deux fonctions continues sur $[a, b]$.

1) Justifier que pour tout $\lambda \in \mathbb{R}$ :

$$\int_0^1 (\lambda f(x) + g(x))^2 dx \ge 0$$

2) En déduire que :

$$\left| \int_0^1 f(x)g(x)dx \right| \le \sqrt{\int_0^1 f^2(x)dx} \times \sqrt{\int_0^1 g^2(x)dx}$$

3) Montrer les inégalités suivantes :

a) \(\int_{\frac{\pi}{4}}^{\frac{\pi}{2}} \frac{\sin x}{x} dx \le \sqrt{\frac{\pi + 2}{4\pi}}\)
b) \(\left(\int_0^1 e^{x^2}dx\right)\cdot \left(\int_0^1 e^{-x^2}dx\right)\geq 1\)

4) Soit $h$ une fonction continue sur $[0; 1]$ telle que :

$$(\forall x \in [0; 1]) \ 0 < f(x) < \ln 2$$

On pose : $A = \int_0^1 e^{f(x)} dx$ et $B = \int_0^1 e^{-f(x)} dx$

Montrer que : $1 \le AB < 2$ et $0 \le \frac{A}{B} < 1$

#### Exercice 90
Soit $f$ une fonction continue sur $[0; 1]$ et vérifiant :

$\int_0^1 f(t)dt = 0$. En utilisant la fonction $\phi$ définie par :

$$\phi(x) = e^{-x} \int_0^1 f(t)dt$$

Montrer que : $(\exists c \in ]0; 1[)$ $\int_0^1 f(t)dt = f(c)$

#### Exercice 91
Soit $f$ une fonction non constante et dérivable sur $[0; 1]$ telle que $f(0) = 0$. On considère la fonction $g$ définie sur $[0; 1]$ par : $g(x) = (1-x) \int_0^x f(t)dt$

1) Montrer qu'il existe \(\alpha \in ]0,1[\) tel que: \(g^{\prime}(\alpha) = 0\)
2) En appliquant le théorème de Rolle à la fonction \( h \) définie sur \( [0, \alpha] \) par:

$$h(x) = -\int_0^x f(x)dx + (1-x)f(x)$$

Montrer que : $(\exists x_0 \in ]0; 1[)$ $f'(x_0) > 2f(x_0)$

EXERCICE 92

#### Exercice 92
On considère la suite numérique $(u_n)_{n \in \mathbb{N}^*}$ définie par :

$$\left(\forall n \in \mathbb{N}^*\right) u_n = \int_0^1 e^{-\frac{x^2}{n}} dx$$

1) Vérifier que: \((\forall x \in [0,1]) e^{-\frac{1}{n}} \leq e^{-\frac{x^2}{n}} \leq 1\)
2) En déduire que la suite \(\left(u_{n}\right)_{n\in \mathbb{N}^*}\) est convergente et déterminer sa limite.
3) Montrer que pour tout \( n \in \mathbb{N}^* \), il existe un réel \( c_n \in [0,1] \) tel que: \( c_n^2 = -n\ln u_n \)

#### Exercice 93
On considère la fonction numérique $f$ définie par :

$$f(x) = \frac{1}{x} \int_0^x \frac{dt}{\sqrt{1+t^2}} \quad \text{si} \quad x \neq 0 \quad \text{et} \quad f(0) = 1$$

1) Détérminer \(D_{f}\) le domaine de définition de \(f\).
2) Montrer que la fonction \( f \) est paire.
3) a) Montrer que pour tout \(x\in \mathbb{R}^*\)

$$\frac{x}{\sqrt{1+x^2}} \leq \int_0^x \frac{dt}{\sqrt{1+t^2}} \leq x$$

b) Montrer que \( f \) est continue et dérivable à droite en zéro.
4) a) Vérifier que: \( \left(\forall t \in [1, +\infty[\right) \frac{1}{\sqrt{1 + t^2}} \leq \frac{1}{\sqrt{t}} \)
b) En déduire \(\lim_{x\to +\infty}f(x)\)
5) Etudier les variations de \( f \) puis tracer sa courbe \( \mathcal{C}_f \).

#### Exercice 94
On considère la suite numérique $(u_n)_{n \geq 1}$ définie par :

$$u_n = \int_0^n x (\ln x)^n dx$$

1) Montrer que \(\left(u_{n}\right)_{n\geq 1}\) est positive et décroissant.
2) Montrer que: \(\left(\forall n\in \mathbb{N}^{\prime}\right)2u_{n + 1} + (n + 1)u_n = e^2\)
3) Montrer que: \(\left(\forall n\in \mathbb{N}^{\prime}\right)\frac{e^{2}}{n + 3}\leq u_{n}\leq \frac{e^{2}}{n + 1}\)

puis en déduire la limite de la suite $(u_n)_{n \geq 1}$.

#### Exercice 95
Pour tout $n \in \mathbb{N}^*$ on pose : $u_n = \int_0^2 \frac{2t+3}{t+2} e^{\frac{t}{n}} dt$

1) Étudier les variations de la fonction $\varphi$ définie sur

$$[0; 2] \text{ par : } \varphi(t) = \frac{2t+3}{t+2}$$

En déduire que : $(\forall t \in [0; 2]) \frac{3}{2} \leq \varphi(t) \leq \frac{7}{4}$

2) a) Montrer que pour tout $n \in \mathbb{N}^*$ :

$$\frac{3}{2} n \left(e^{\frac{2}{n}} - 1\right) \leq u_n \leq \frac{7}{4} n \left(e^{\frac{2}{n}} - 1\right)$$

b) Montrer que si la suite $(u_n)_{n \geq 1}$, converge alors

sa limite $\ell$ vérifie : $3 \leq \ell \leq \frac{7}{2}$

3) a) Vérifier que : $(\forall t \in [0,2]) \frac{2t+3}{t+2} = 2 - \frac{1}{t+2}$

et en déduire la valeur de : $I = \int_0^2 \frac{2t+3}{t+2} dt$

b) Montrer que: \(\left(\forall n\in \mathbb{N}^{\prime}\right)I\leq u_{n}\leq e^{n}I\)
c) En déduire que \(\left(u_{n}\right)_{n\in \mathbb{N}}\) converge en précisant sa limite.

#### Exercice 96
On pose pour tout $n \in \mathbb{N}$ : $u_n = \int_0^1 \frac{e^{-x^2}}{1+t+n} dt$

1) Détérminer la monotonie de la suite \(\left(u_{n}\right)\) puis montré que: \(\left(\forall n\in \mathbb{N}\right)u_n\geq 0\)
2) Montrer que \(\lim_{n\to \infty}u_n = 0\)
3) On considere les fonctions \( f \) et \( g \) définies sur [0;1]

par : $f(x) = e^{-x} + x - 1$ et $g(x) = 1 - x + \frac{x^2}{2} - e^{-x}$

a) Etudier les variations de la fonction \( f \).
b) En déduire le sens de variation de \( g \) sur \([0,1]\).
c) Montrer que:

$$(\forall x \in [0; 1]) \ 1 - x \leq e^{-x} \leq 1 - x + \frac{x^2}{2}$$

d) En déduire un encadrement de $e^{-x^2}$ pour $t \in [0; 1]$.

e) Montrer que pour tout $n \in \mathbb{N}$ :
$$\frac{2}{3(n+2)} \le u_n \le \frac{23}{30(n+1)}$$

f) Déterminer un rang $n_0 \in \mathbb{N}$ à partir duquel on a :
$$(\forall n \ge n_0) \quad u_n \le 10^{-2}$$

On considère la suite numérique $(u_n)_{n \ge 1}$ définie par :
$$u_n = \int_0^1 \sqrt{1-x^n} \, dx$$

1) Montrer que \(\left(u_{n}\right)_{n\ge 1}\) est croissant.
2) a) Verifier que pour tout \(x\in [0,1]\)

$$1 - x \le \sqrt{1-x} \le 1 - \frac{x}{2}$$

b) En déduire que : $$(\forall n \in \mathbb{N}^*) \frac{n}{n+1} \le u_n \le \frac{2n+1}{2n+2}$$
puis préciser la limite de $(u_n)_{n \ge 1}$.

Pour tout $n \in \mathbb{N}$ on pose : $$I_n = \int_0^1 \frac{t^n}{\sqrt{1+t^2}} \, dt$$

1) a) Calculer la dérivée de la fonction $t$ définie par :

$$u(t) = \ln(t + \sqrt{1+t^2})$$

b) Calculer les intégrales $I_0$ et $I_1$

2) Determiner la monotonie de la suite \(\left(I_{n}\right)\).
3) Montrer que: \((\forall n \in \mathbb{N}) I_{n+2} + I_n = \int_0^t t^n \sqrt{1 + t^2} dt\)
4) En utilisant la formule d'intégration par parties, montré que: \((n + 2)I_{n + 2} + (n + 1)I_n = \sqrt{2}\)
5) En déduire que pour tout \( n \in \mathbb{N} \):

$$(2n+3)I_{n+2} \le \sqrt{2} \le (2n+3)I_n$$

6) Montrer que la suite $(nI_n)$ converge en précisant sa limite.

On considère la suite numérique $(I_n)$ définie par :

$$I_n = \int_0^1 x^n \sqrt{1-x} \, dx$$

1) Calculer \( I_0 \) et \( I_1 \).
2) En utilisant le changement \( t = \sqrt{1 - x} \), montré

que : $$(\forall n \in \mathbb{N}) I_n = 2 \sum_{k=0}^n C_n^a \frac{(-1)^k}{2k+1}$$

3) a) Montrer que :

$$(\forall n \in \mathbb{N}) (2n+5) I_{n+1} = 2(n+1) I_n$$

b) En déduire par récurrence que :

$$(\forall n \in \mathbb{N}) I_n = \frac{2^{2n+2} (n!)^2 (n+1)}{(2n+3)!}$$

4) a) Déterminer les réels $a, b$ et $c$ tels que pour tout

$$x \in [0,1] : \frac{2}{x^2-2} = a + \frac{b}{x-\sqrt{2}} + \frac{c}{x+\sqrt{2}}$$

b) En déduire la valeur de : $$\int_0^1 \frac{x^2}{x^2-2} \, dx$$

5) On pose pour tout $n \in \mathbb{N}$ :

$$J_n = \int_0^1 x^n \frac{\sqrt{1-x}}{1+x} \, dx \quad \text{et} \quad S_n = \sum_{k=0}^n (-1)^k I_k$$

a) En utilisant le changement \( t = \sqrt{1 - x} \), calculer \( J_0 \).
b) Montrer que: \((\forall n \in \mathbb{N}) 0 \le J_n \le \frac{1}{n+1}\)

et en déduire $\lim_{n \to \infty} J_n$.

c) Montrer que: \((\forall n \in \mathbb{N}) S_n = J_0 - (-1)^{n+1} J_{n+1}\)
d) En déduire la limite de la suite \(\left(S_{n}\right)\).

#### Exercice 100
On pose : $$I = \int_0^x \frac{\sin t}{t} \, dt$$

1) On considère la fonction $F$ définie sur $\left[\frac{\pi}{2}, \pi\right]$ par :

$$F(x) = \int_0^x \frac{\sin t}{t} \, dt$$, et la fonction $G$ définie sur

$$\left[0, \frac{1}{2}\right]$$ par : $$G(x) = \int_0^x \frac{\sin(\pi t)}{1-t} \, dt$$

1) Montrer que pour tout $x \in \left[0, \frac{1}{2}\right]$ :

$$G(x) = F(\pi) - F(\pi(1-x))$$

2) En déduire que: $$I = \int_0^{\frac{1}{2}} \frac{\sin(\pi t)}{1-t} dt$$

II) Soit $$(u_n)$$ la suite définie par: $$u_n = \int_0^{\frac{1}{2}} t^n \sin(\pi t) dt$$
1) Calculer $$u_0$$ et $$u_1$$, et montrer que pour tout $$n \ge 2$$:

$$u_n = \frac{1}{n^2} \left[ \frac{n}{2^{n-1}} - n(n-1)u_{n-2} \right]$$

2) Montrer que: $$I = \sum_{k=0}^{n-1} u_k + R_n$$

avec: $$R_n = \int_0^{\frac{1}{2}} \frac{t^n \sin(\pi t)}{1-t} dt$$

3) Montrer que pour tout $$t \in \left[0; \frac{1}{2}\right]$$: $$\frac{t^n \sin(\pi t)}{1-t} \le 2t^n$$
puis en déduire que: $$(\forall n \ge 2) \quad |R_n| \le \frac{1}{(n+1)2^n}$$

4) Montrer que: $$I = \lim_{n \to \infty} \sum_{k=0}^{n-1} u_k$$

5) Déterminer une valeur approchée de $$I$$ à $$10^{-2}$$ près.

#### Exercice 101
On considère la fonction numérique $$F$$ définie sur $$\mathbb{R}^+$$ par: $$F(x) = \int_0^{x+\sqrt{x}} \frac{dt}{t^{\frac{1}{2}} \sqrt{1+t^2}}$$

En utilisant le théorème de la moyenne, calculer les limites suivantes: $$\lim_{x \to \infty} F(x)$$ et $$\lim_{x \to 0^+} F(x)$$

#### Exercice 102
1) En utilisant une intégration par changement de variable, calculer l'intégrale: (poser $$t = \operatorname{Arc} \tan u$$)

$$I = \int_{\frac{\pi}{3}}^x \frac{2dt}{\sin(2t)(\tan t - 1)} \text{ où } x \in \left[ \frac{\pi}{3}; \frac{\pi}{2} \right]$$

2) Soit $$x \in \left[ \frac{\pi}{3}; \frac{\pi}{2} \right]$$. On considère la fonction $$v$$ définie

$$\text{sur} \left[ \frac{\pi}{3}; x \right] \text{ par: } \left( \forall t \in \left[ \frac{\pi}{3}; x \right] \right) v(t) = \frac{1}{1 - \tan t}$$

a) Calculer $$v'(t)$$ pour tout $$t \in \left[ \frac{\pi}{3}; x \right]$$.

b) Calculer l'intégrale:

$$J = \int_{\frac{\pi}{3}}^x \frac{1 + \tan^2 t}{(1 - \tan t)^2} \ln(\tan t) dt$$

#### Exercice 103
Le but de cet exercice est de montrer l'irrationalité du nombre $$\pi$$ (c'est-à-dire: $$\pi \notin \mathbb{Q}$$)

1) Soit $$(u_n)$$ une suite numérique à valeurs dans $$\mathbb{Z}$$. Montrer que la suite $$(u_n)$$ converge si et seulement si elle est stationnaire (c'est-dire: il existe $$N \in \mathbb{N}$$) tel que pour tout $$n \ge N$$, $$u_n = u_0$$

2) Pour $$(a; b; n) \in (\mathbb{N}^+)^2$$, on pose:

$$P_n(x) = \frac{1}{n!} x^n (bx - a)^n \text{ et } I_n = \int_0^x P_n(x) \sin x dx$$

a) Montrer que, pour tout $$(a; b; n) \in (\mathbb{N}^+)^2$$, $$P_n$$ et ses dérivées successives prennent en $$0$$ et $$\frac{a}{b}$$ des valeurs entières (valeurs dans $$\mathbb{Z}$$).

b) Montrer que, pour $$(a, b) \in (\mathbb{N}^+)^2$$: $$\lim_{n \to \infty} I_n = 0$$

3) On suppose que: $$\left( \exists (a, b) \in (\mathbb{N}^+)^2 \right) \quad \pi = \frac{a}{b}$$.

a) Avec les notations de 2) a), montrer que pour tout $$n \in \mathbb{N}^+$$: $$I_n \in \mathbb{Z}$$

b) En utilisant le résultat de la question 1), déduire une contradiction.

#### Exercice 104
Soit $$f$$ et $$g$$ deux fonctions continues sur un segment $$[a; b]$$ telles que:

i. $$(\forall t \in [a; b]) \, g(t) \ge 0$$.

ii. $$(\exists M \in \mathbb{R}^+) \, (\forall t \in [a; b]) \, |f(t)| \le M$$.

1) Montrer que: $$\left| \int_a^b f(t) g(t) dt \right| \le M \int_a^b g(t) dt$$

2) Montrer que:

$$(\exists c \in [a; b]) \quad \int_a^b f(t) g(t) dt = f(c) \int_a^b g(t) dt$$

## Problèmes de synthèse

### Se préparer aux devoirs

1) Calculer les intégrales suivantes :

$$I_1 = \int_0^1 (x^2 - 3)^2 dx \quad ; \quad I_2 = \int_0^1 |x^2 - 2x - 3| dx$$

$$I_3 = \int_0^1 \left( x - \frac{1}{x^2} + \frac{1}{\sqrt{x}} \right) \quad ; \quad I_4 = \int_{-1}^2 \frac{2x}{\sqrt{x + 2}} dx$$

$$I_5 = \int_{-2}^0 (x + 1)\sqrt{x^2 + 2x + 3} \quad ; \quad I_6 = \int_0^{\frac{\pi}{4}} \frac{dx}{\tan^3 x}$$

$$I_7 = \int_0^{3x/4} e^{2x}\sqrt{1 + e^{2x}} dx \quad ; \quad I_8 = \int_0^1 (2^x + 3^{2x}) dx$$

2) En utilisant la formule d'intégration par parties, calculer les intégrales suivantes :

$$J_1 = \int_0^{\frac{\pi}{2}} \frac{x^3}{\sqrt{1 + x^2}} dx \quad ; \quad J_2 = \int_{\ln 2}^{\ln 3} \frac{e^{2x}}{(1 + e^x)^2} dx$$

$$J_3 = \int_0^1 \ln(x + \sqrt{x^2 + 1}) dx \quad ; \quad J_4 = \int_0^{\frac{\pi}{4}} \frac{\ln x}{\sqrt{x}} dx$$

$$J_5 = \int_0^2 \frac{x \ln x}{(x^2 + 1)^2} dx \quad ; \quad J_6 = \int_0^{\frac{\pi}{4}} \frac{x e^x}{(1 + e^x)^2} dx$$

$$J_7 = \int_0^{\frac{\pi}{4}} \frac{\ln x}{(x + 1)^2} dx \quad ; \quad J_8 = \int_0^{\frac{\pi}{4}} x \sin \frac{x}{4} dx$$

3) Soit $f$ une fonction numérique continue sur $[0; 1]$. On note $M = \underset{\alpha \in [0,1]}{\text{Max}} |f(x)|$. Montrer que :

$$\left| \int_0^1 (f(x) + xf(1 - x)) dx \right| \le \frac{3}{2} M$$

4) Soit $f : [0; 1] \to \mathbb{R}$ une fonction dérivable et de dérivée continue. A l'aide d'une intégration par parties, montrer que : $\lim_{n \to \infty} n \int_0^1 x^n f(x) dx = f(1)$

5) Soit $g : [0; +\infty] \to \mathbb{R}$ continue telle que, pour tout $x \in \mathbb{R}^* : \quad 0 \le g(x) \le \int_0^x g(t) dt$

Montrer que $g$ est identiquement nulle.

1) Calculer les intégrales suivantes :

$$I_1 = \int_0^1 \frac{x^2 + 1}{\sqrt[3]{x}} dx \quad ; \quad I_2 = \int_0^2 \frac{x^3 - 4x^3 + 7}{x^2} dx$$

$$I_3 = \int_{-1}^1 (1 + |x + 2| + |x - 2|)^3 dx \quad ; \quad I_4 = \int_{-1}^2 \frac{x}{\sqrt{3 - x}} dx$$

$$I_5 = \int_{-\frac{\pi}{2}}^\frac{\sin x}{\sqrt{3 + \cos x}} dx \quad ; \quad I_6 = \int_0^{\frac{\pi}{2}} \frac{e^{3x}}{(1 + e^{3x})^2} dx$$

$$I_7 = \int_0^{\frac{\pi}{4}} \sin(3x) \cos(5x) dx \quad ; \quad I_8 = \int_0^1 \frac{dx}{1 + e^x}$$

2) En utilisant la formule d'intégration par parties, calculer les intégrales suivantes :

$$J_1 = \int_0^{\frac{\pi}{2}} \frac{x \sin x}{\cos^3 x} dx \quad ; \quad J_2 = \int_0^{\frac{\pi}{2}} (2x - 1) \cos^2 x dx$$

$$J_3 = \int_0^{\frac{\pi}{2}} x \sin x \cos x dx \quad ; \quad J_4 = \int_0^1 x^2 e^x dx$$

$$J_5 = \int_0^{\frac{\pi}{2}} x^2 \sin(2x) dx \quad ; \quad J_6 = \int_0^{\frac{\pi}{2}} e^x \sin x dx$$

$$J_7 = \int_0^{\frac{\pi}{2}} 2x \sin x \cos^2 \frac{x}{2} dx \quad ; \quad J_8 = \int_0^{\frac{\pi}{2}} x (\ln x)^2 dx$$

3) On considère les intégrales suivantes :

$$I = \int_0^{\frac{\pi}{4}} \ln(1 + \tan t) dt \quad \text{et} \quad J = \int_0^{\frac{\pi}{4}} \ln\left(\sin\left(\frac{\pi}{4} + t\right)\right) dt$$

$$K = \int_0^{\frac{\pi}{4}} \ln(\cos t) dt$$

a) Ecrire l'intégrale \(I\) en fonction de \(J\) et \(K\).
b) Montrer que: \(J = K\)
c) Calculator l'integrale \(I\)

4) On pose pour tout $n \in \mathbb{N}^* : I_n = \frac{1}{2^n} \int_0^{\frac{1}{2}} \frac{(1 - 2x)^n}{(1 - x)^n} dx$

a) Calculer \(I_{1}\).
b) En utilisant une intégration par parties, montré

$$\text{que : } (\forall n \in \mathbb{N}^*) I_{n+1} = \frac{-1}{2^{n+1}(n+2)} + \frac{n+1}{n+2} I_n$$

AVRIG

Soit $\alpha \in \left[0, \frac{\pi}{4}\right]$. Pour tout $n \in \mathbb{N}^*$, on pose :

Deuxième Partie :

$$\text{Deuxième Partie :}$$

en fonction de $I_1$ et $I_{4k+1}$.

b) Pour $k \in \mathbb{N}^*$, calculer la somme $\sum_{p=0}^{k-1} \varphi(4p+1)$

c) En déduire : $\lim_{k \to \infty} \sum_{q=0}^{2k} \frac{(-1)^q}{2q+1}$

6) a) Calculer $I_1$ et $I_2$.

b) Pour $k \in \mathbb{N}^*$, calculer la somme $\sum_{p=0}^{k-1} \varphi(4p+2)$

en fonction de $I_2$ et $I_{4k+2}$.

5) a) Calculer $I_0$ et $I_2$.

5) a) Calculer $I_0$ et $I_2$.

b) Pour $k \in \mathbb{N}^*$, calculer la somme $\sum_{p=0}^{k-1} \varphi(4p+2)$

en fonction de $I_1$ et $I_{4k+1}$.

3) Montrer que : $(\forall n \in \mathbb{N}) \frac{1}{2(n+1)} \le I_n \le \frac{1}{n+1}$

2) Montrer que : $(\forall n \in \mathbb{N}) I_n + I_{n+2} = \frac{1}{n+1}$

1) Montrer que la suite $(I_n)$ est positive et croissante.

Pour tout $n \in \mathbb{N}$, on pose : $I_n = \int_0^\pi (\tan x)^n dx$

1) Montrer que la suite $(I_n)$ est positive et croissante.

2) Montrer que : $(\forall n \in \mathbb{N}) I_n + I_{n+2} = \frac{1}{n+1}$

2) Montrer que : $(\forall n \in \mathbb{N}) I_n + I_{n+2} = \frac{1}{n+1}$

et en déduire la limite de la courbe $\mathcal{C}_F$ de $F$ au

voisinage de $+\infty$.

3) Montrer que $F$ est dérivable sur $\mathbb{R}^*$ et que pour

tout $x \in \mathbb{R}^* : F(x) = \frac{f(x)}{x \ln(1+x)}$

4) Calculer $\lim_{x \to 0} F(x)$ puis dresser le tableau de varia-

2) Montrer que $F$ est continue et dérivable à droite

en zéro.

3) Montrer que $F$ est dérivable sur $\mathbb{R}^*$ et que pour

tout $x \in \mathbb{R}^* : F'(x) = \frac{f(x)}{x \ln(1+x)}$

4) Montrer que la suite $(I_n)$ est positive et croissante.

2) Montrer que : $(\forall n \in \mathbb{N}) I_n + I_{n+2} = \frac{1}{n+1}$

2) Montrer que : $(\forall n \in \mathbb{N}) I_n + I_{n+2} = \frac{1}{n+1}$

2) Montrer que : $(\forall n \in \mathbb{N}) I_n + I_{n+2} = \frac{1}{n+1}$

2) Montrer que : $(\forall n \in \mathbb{N}) I_n + I_{n+2} = \frac{1}{n+1}$

2) Montrer que : $(\forall n \in \mathbb{N}) I_n + I_{n+2} = \frac{1}{n+1}$

3) On considère la fonction $f$ définie sur $\mathbb{R}^*$ par :

montrer que : $f(x) = e^x \ln(1+x) - x$

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x \ln(1+x)} = \frac{1}{2}$$

Étudier les variations de la fonction $f$ et en

débuire que $f(x) \ge 0$ pour tout $x \in \mathbb{R}^*$.

On admet que : $(\forall x \in \mathbb{R}) e^x \ge 1 + x$

Deuxième partie :

On considère la fonction $F$ définie sur $\mathbb{R}^*$ par :

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x \ln(1+x)} = \frac{1}{2}$$

a) Sans calculer $I(x)$, montrer que :

2) Pour tout réel $x$, on pose : $I(x) = e^x \int_0^1 \frac{t^2}{2} e^{-t} dt$

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x \ln(1+x)} = 0$$

1) Calculer $\lim_{x \to 0} \frac{e^x - 1 - x}{x}$ et en déduire que :

Première partie :

$$K_{n}(\alpha) = \int_{0}^{\frac{\pi}{2}} (\tan(x))^{n} dx \text{ et } S_{n}(\alpha) = \sum_{m=1}^{n} K_{m}(\alpha)$$

1) Montrer que pour tout $n \in \mathbb{N}$ :

$$\left| S_{n}(\alpha) - \int_{0}^{\pi} \frac{\tan x}{1 - \tan x} dx \right| \leq \frac{\alpha (\tan \alpha)^{n+1}}{1 - \alpha}$$

2) En déduire que : $\lim_{n \to \infty} S_{n}(\alpha) = \int_{0}^{\pi} \frac{\tan x}{1 - \tan x} dx$ .

On pose : $A(\alpha) = \int_{0}^{\pi} \frac{\tan x}{1 - \tan x} dx$

Troisième Partie :

Pour tout $n \in \mathbb{N}^*$, on pose : $S_{n} = \sum_{m=1}^{n} I_{m}$

1) Soit $M \in \mathbb{R}_+^*$ .

a) Montrer que pour tout $u \in \mathbb{R} - \{1\}$ :

$$\frac{u}{(1-u)(1+u^2)} = \frac{1}{2(1-u)} + \frac{1}{2} \cdot \frac{u-1}{1+u^2}$$

b) En utilisant le changement de variable $u = \tan x$ calculer $A(\alpha)$ en fonction de $\tan \alpha$ et $\alpha$ .

c) Calculer la limite $\lim_{\alpha \to \left[\frac{\pi}{4}\right]} A(\alpha)$ et en déduire que :

$$\left( \exists \beta \in ]0; \frac{\pi}{4}[ ] \right) \quad A(\alpha) > M+1$$

d) Montrer que :

$$(\exists n_0 \in \mathbb{N})(\forall n \geq n_0), \quad |S_n(\beta) - A(\beta)| \leq 1$$

2) Montrer que :

$$(\forall n \in \mathbb{N}^*)(\forall \alpha \in ]0; \frac{\pi}{4}[ ], \quad S_n \geq S_n(\alpha)$$

3) Déduire de ce qui précède que : $\lim_{n \to \infty} S_n = +\infty$

#### Devoir 5
Pour tout $n \in \mathbb{N}^*$ et $a \in \mathbb{R}^+$, on pose :

$$I_n(a) = \int_{0}^{\pi} e^{-\infty} \ln(n+x) dx$$

1) Etablir l'encadrement :

$$(\forall x \in \mathbb{R}_+^*)(\forall n \in \mathbb{N}^*) \ln n \leq \ln(n+x) \leq \ln n + \frac{x}{n}$$

2) Trouver alors un encadrement de \( I_{n}(a) \).
3) Montrer que la fonction \(a \mapsto I_n(a)\) est croissant sur \(\mathbb{R}^+\).

#### Devoir 6
**Première Partie.**
1) Soit $h$ la fonction numérique définie sur $\mathbb{R}^*$ par :

$$h(x) = x - \ln x$$

Montrer que : $(\forall x \in \mathbb{R}_+^*) h(x) \geq 1$

2) On considère la fonction $f$ définie sur $\mathbb{R}^*$ par :

$$f(0) = 0 \quad \text{et} \quad f(x) = \frac{1}{x - \ln x} \text{ si } x > 0$$

a) Montrer que la fonction \( f \) est continue sur \( \mathbb{R}^* \).
b) La fonction \( f \) est-elle dérivable à droite en 0?

**Deuxième Partie.**
Soit $F$ la fonction numérique définie sur $\mathbb{R}^*$ par :

$$F(x) = \int_{x}^{2x} f(t) dt$$

1) a) Montrer que \(F\) est derivable sur \(\mathbb{R}^+\).
b) Montrer que \(F_{\alpha}^{\prime}(0) = 0\) et que:

$$(\forall x \in \mathbb{R}_+^*) F'(x) = \frac{\ln 2 - \ln x}{h(2x) \cdot h(x)}$$

2) a) Verifier que: \(\ln 2 = \int_{x}^{2x} \frac{dt}{t}\)
b) Montrer que pour tout \(x \in [1; +\infty[\)

$$0 \leq F(x) - \ln 2 \leq \frac{\ln(2x)}{x - \ln x}$$

c) En déduire la limite : $\lim_{x \to \infty} F(x)$

3) a) Montrer que : $F\left(\frac{1}{2}\right) \leq \ln 2$

b) Montrer que : $\left( \exists \alpha \in \left[\frac{1}{2}; 1\right] \right)$; $F(\alpha) = \ln 2$

4) a) Dresser le tableau de variations de \(F\).
b) Tracer la courbe \(\mathcal{C}_F\) de \(F\) dans un repere orthonormé (On admet que: \(F(1) \approx 0,9\) et \(F(2) \approx 1,1\))

5) On considère la fonction $G$ définie sur $[1; +\infty[$ par :

$$G(x) = \int_{1}^{x} \frac{\ln t}{t - \ln t} dt$$

Montrer que : $$(\forall x \ge 1) G(x) \ge \frac{1}{2} \ln^2(x)$$

Puis en déduire $$\lim_{x \to \infty} G(x)$$.

**Troisième Partie.**
On considère la suite numérique $$(u_n)_{n \ge 0}$$ définie par :

$$u_n = \int_0^n \frac{t}{t - \ln t} dt$$

1) a) Montrer que : $$(\forall t > 0) \frac{t}{t - \ln t} \le t$$

b) Montrer que la suite $$(u_n)_{n \ge 0}$$ est croissante.

c) En déduire que la suite $$(u_n)_{n \ge 0}$$ est convergente

et que sa limite $$\ell$$ vérifie : $$\ell \in [0; \frac{1}{2}]$$

2) On considère la suite numérique $$(v_n)_{n \ge 0}$$ définie par :

$$v_n = \int_0^n \frac{t}{t - \ln t} dt$$

a) Calculer $$\int_0^n \left(1 - \frac{\ln t}{t}\right) dt$$ puis montrer que :

$$(\forall n \ge 5) v_n \ge n$$

b) En déduire la limite de la suite $$(v_n)_{n \ge 0}$$.

**Première Partie.**
On considère la fonction $$f$$ définie sur $$\mathbb{R}$$ par :

$$f(0) = 1 \quad \text{et} \quad f(x) = \frac{\operatorname{Arc} \tan x}{x} \quad \text{si} \quad x \neq 0$$

1) Montrer que $$f$$ est paire et continue sur $$\mathbb{R}$$.

2) a) Montrer que pour tout $$x \in \mathbb{R}^*$$ :

$$x - \frac{x^3}{3} < \operatorname{Arc} \tan x < x - \frac{x^3}{3} + \frac{x^5}{5}$$

b) En déduire que la fonction $$f$$ est dérivable en $$0$$ et que $$f'(0) = 0$$.

c) Calculer $$f'(x)$$ pour tout $$x \in \mathbb{R}^*$$.

3) En utilisant une intégration par partie, montrer

que : $$(\forall x \in \mathbb{R}^*) \int_0^x \frac{t^2}{(1 + t^2)^2} dt = -\frac{1}{2} x^2 f'(x)$$

Puis en déduire les variations de $$f$$.

4) Tracer la courbe $$\mathcal{C}_f$$ de $$f$$ dans un repère orthonome avec $$[\vec{i}] = [\vec{j}] = 2cm$$.

**Deuxième Partie.**
On considère la fonction $$F$$ définie sur $$\mathbb{R}$$ par :

$$F(0) = 1 \quad \text{et} \quad F(x) = \frac{1}{x} \int_0^t f(t) dt \quad \text{si} \quad x \neq 0$$

1) Montrer que $$F$$ est paire et continue sur $$\mathbb{R}$$.

2) Montrer que : $$(\forall x \in \mathbb{R}) f(x) \le F(x) \le 1$$

3) Montrer que : $$(\forall x \in \mathbb{R}^*) F'(x) = \frac{1}{x} (f(x) - F(x))$$

4) a) Montrer que la fonction $$F$$ est dérivable en $$0$$ puis calculer $$F'(0)$$.

b) Donner les variations de la fonction $$F$$.

c) Montrer que pour tout $$x \in ]1; +\infty[$$ :

$$0 < \frac{1}{x} \int_0^x f(t) dt \le \frac{\pi}{2} \cdot \frac{\ln x}{x}$$

Puis en déduire $$\lim_{x \to \infty} F(x)$$.

**Troisième Partie.**
On considère la suite numérique $$(u_n)$$ définie par :

$$u_0 = 1 \quad \text{et} \quad u_{n+1} = F(u_n) \quad \text{pour tout} \quad n \in \mathbb{N}$$

1) a) Vérifier que : $$(\forall t \in \mathbb{R}^*) 0 \le \frac{t}{1 + t^2} \le \frac{1}{2}$$

b) Montrer que : $$(\forall x \in \mathbb{R}^*) |F'(x)| \le \frac{1}{x} (1 - f(x))$$

c) Montrer que pour tout $$x \in \mathbb{R}^*$$ :

$$\frac{1}{x} (1 - f(x)) = \frac{1}{x^2} \int_0^x \frac{t^2}{1 + t^2} dt$$

Puis en déduire que : $$(\forall x \in \mathbb{R}^*) |F'(x)| \le \frac{1}{4}$$

2) Montrer que l'équation $$F(x) = x$$ admet une solution unique $$\alpha$$ dans l'intervalle $$]0; 1]$$.

3) a) Montrer que : $$(\forall n \in \mathbb{N}) |u_{n+1} - \alpha| \le \frac{1}{4} |u_n - \alpha|$$

b) En déduire que la suite $$(u_n)$$ est convergente et déterminer sa limite.

### Se préparer aux examens

1) On considère la fonction numérique $f_n$ définie sur

$$\mathbb{R}^* \text{ par : } f(x) = \frac{e^{-x}}{x}$$

1) Calculer les limites de la fonction \( f \) aux bornes de son domaine de definition.
2) Etudier les variations de la fonction \( f \).
Soit la courbe représentative de \( f \) dans un repère orthonome \( (O, \bar{I}, \bar{J}) \).
3) a) Etudier les branches infinies de la courbe \(\mathcal{C}\)
b) Tracer la courbe \(\mathcal{C}\)
III) Soit \( (u_{n}) \) la suite définie par: \( u_{n} = 1 \) et pour tout

$$n \in \mathbb{N}, u_{n+1} = (u_n)^2 f(u_n) = u_n e^{-u_n}$$

1) Montrer que: \((\forall x \in \mathbb{R}) e^x \geq x + 1\)
2) En deduire que: \((\forall x \in \mathbb{R}^*) x^2 f(x) \leq \frac{x}{x + 1}\)
3a) En utilisant un raisonnement par recurrence,

$$\text{montrer que : } (\forall n \in \mathbb{N}) 0 < u_n < \frac{1}{n+1}$$

b) Montrer que la suite $(u_n)$ est convergente et déterminer sa limite.

4) On pose pour tout $n \in \mathbb{N}^* : v_n = \sum_{k=0}^{n-1} u_k$

a) Montrer que: \(\left(\forall n\in \mathbb{N}^{*}\right)v_{n} = \ln \left(\frac{1}{u_{n}}\right)\)
b) Determiner la limite de la suite \(\left(v_{n}\right)_{n\in \mathbb{N}}\)

III) On considère la fonction $F$ définie sur $\mathbb{R}^*$ par :

$$\begin{cases} F(x) = \int_{x^2}^{x^2} f(t) dt \quad \text{si } x > 0 \\ F(0) = 2 \ln 2 \end{cases}$$

1) a) Vérifier que: \(\int_{x^2}^{x^2} \frac{1}{t} dt = 2 \ln 2\)
b) En utilisant le résultat de la question II)1), monrer que: \((\forall t > 0) - t \leq e^{-t} - 1 \leq 0\)

2) a) Montrer que : $(\forall x > 0) - 3x^2 \leq F(x) - 2 \ln 2 \leq 0$

b) En déduire que la fonction $F$ est continue et dérivable à droite en zéro.

3) a) Montrer que : $(\forall t \geq 1) f(t) < e^{-t}$

b) En déduire la limite suivante : $\lim_{x \to \infty} F(x)$

4) a) Montrer que $F$ est dérivable sur l'intervalle $[0, +\infty[$ puis calculer $F'(x)$.

b) Dresser le tableau des variations de $F$.

c) Construire $\mathcal{C}_F$, la courbe représentative de $F$, dans le repère $(O, \bar{I}, \bar{J})$.

5) Soit $G$ la fonction numérique définie sur $[0, +\infty[$ par : $G(x) = \int_{x^2}^{x^2} e^{-t} \ln(t) dt$

a) Montrer que pour tout $x \in [0, +\infty[$ :

$$G(x) = F(\sqrt{x}) - e^{-x} \ln(4x) + e^{-x} \ln(x)$$

b) Calculer la limite : $\lim_{x \to 0} (e^{-x} - e^{-2x}) \ln x$

c) En déduire la limite : $\lim_{x \to 0} G(x)$

**Examen National 2004 (Session Normale)**

#### Problème 2
1) On considère la fonction $f$ définie sur $[0, +\infty[$ par :

$$\begin{cases} f(x) = \frac{-x \ln x}{1+x^2} \quad \text{si } x > 0 \\ f(0) = 0 \end{cases}$$

1)a) Montrer que la fonction $f$ est continue sur $[0, +\infty[$ et à droite de 0.

On admet dans la suite que $f$ est continue sur $[0, +\infty[$.

b) Étudier le signe de $f(x)$ sur $[0, +\infty[$.

2)a) Montrer que : $(\forall x \in \mathbb{R}^*) f\left(\frac{1}{x}\right) = -f(x)$

b) Montrer que $f$ est dérivable sur $[0, +\infty[$.

c) Montrer qu'il existe un réel $\alpha \in ]0; 1[$ tel que $f'(\alpha) = 0$

d) En déduire que : $f'\left(\frac{1}{\alpha}\right) = 0$

On considère la fonction $F$ définie sur $[0; +\infty[$ par :

$$F(x) = \int_{\mathbb{R}} f(t) dt$$

Et soit $\mathscr{C}_F$ sa courbe représentative dans un repère orthonormé $(O; \bar{i}, \bar{j})$.

II)

1) a) Vérifier que : $(\forall t \in [1; +\infty[)$ $\frac{1}{2} \le \frac{t^2}{1+t^2} \le 1$

b) En déduire que pour tout $x \ge 1$ :

$$F(1) - \frac{1}{2}(\ln x)^2 \le F(x) \le F(1) - \frac{1}{4}(\ln x)^2$$

(Remarquer que :

$$F(x) = \int_{0}^{1} f(t) dt - \int_{1}^{x} \left( \frac{t^2}{1+t^2} \right) \frac{\ln t}{t} dt)$$

c) Calculer les limites $\lim_{x \to +\infty} F(x)$ et $\lim_{x \to -\infty} \frac{F(x)}{x}$ puis interpréter graphiquement les résultats obtenus.

2)a) Montrer que la fonction $F$ est dérivable sur $\mathbb{R}^*$ puis calculer $F'(x)$ pour tout $x \in \mathbb{R}^*$.

b) Étudier les variations de la fonction $F$ sur $\mathbb{R}^*$.

III)

1)a) Montrer que: \((\forall t\in \mathbb{R}^*) - t\ln t\leq \frac{1}{e}\)
b) Montrer que: \((\forall t\in \mathbb{R}^*)f(t)\leq \frac{1}{e}\)
c) En déduire que: \((\forall x > 0) F(x) < x\)

On considère la suite numérique $(u_n)$ définie par :

$$u_n \in ]0, 1[ \quad \text{et} \quad (\forall n \in \mathbb{N}) \quad u_{n+1} = F(u_n)$$

2)a) Montrer que : $(\forall n \in \mathbb{N}) u_n \in ]0, 1[$

b) Montrer que la suite \((u_{n})\) est strictement décroissantie puis en déduire qu'elle est convergente.
c) Determiner la limite de la suite \((u_{n})\)

L'Atmen National 2014 (Session Normale)

On considère la fonction $g$ définie sur $[0; +\infty[$ par :

$$g(x) = \frac{1}{x^2} e^{-\frac{1}{x^2}} \quad \text{si} \quad x > 0 \quad , \text{et} \quad g(0) = 0$$

1) Montrer que \( g \) est continue sur \( [0; +\infty[ \).
2) Pour tout \( x \in ]0; +\infty[ \) on pose: \( L(x) = \int_0^x g(t)dt \)

a) Calculer \(L(x)\) pour tout \(x\in ]0; + \infty [\)
b) Montrer que \(L\) est continue sur \(\left]0; + \infty \right[\)
c) Calculer la limite \(\lim_{x\to 0^{+}}L(x)\) puis en deduire \(L(0)\)

3) Pour tout $n \in \mathbb{N}^*$, on pose : $s_n = \frac{1}{n} \sum_{p=0}^{n \to -1} g\left(\frac{p}{n}\right)$

Montrer que la suite $(s_n)_{n \ge 1}$ est convergente puis préciser sa limite.

L'Atmen National 2014 (Session Normale)

#### Problème 4
**Première Partie.**
On considère la fonction $f$ définie sur $\mathbb{R}^*$ par :

$$f(0) = 0 \quad \text{et} \quad f(x) = x(1 + \ln^2 x) \quad \text{si} \quad x > 0$$

Et soit $\mathscr{C}$ sa courbe représentative dans un repère orthonormé $(O; \bar{i}, \bar{j})$.

1) Calculer \(\lim_{x\to +\infty}f(x)\) et \(\lim_{x\to +\infty}\frac{f(x)}{x}\) puis interpréter graphiquement le résultat obtenu.
2) a) Montrer que \( f \) est continue à droite en 0.

b) Calculer \(\lim_{x\to 0^{-}}\frac{f(x)}{x}\) puis interpréter le résultat graphiquement.
c) Calculer \( f'(x) \) pour tout \( x \in \mathbb{R}^* \), puis en déduire que \( f \) est strictement croissant sur \( \mathbb{R}^* \).

3) a) Montrer que \(\mathcal{C}\) admet un point d'inflexion \(I\) d'abscisse \(e^{-1}\).
b) Etudier la position relative de la courbe \(\mathcal{C}\) par rapport à la droite \(\mathcal{D}\) d'équation \(y = x\).
c) Construire la courbe \(\mathcal{C}\). (On prend: \(e^{-1} = 0,4\))

**Deuxième Partie.**
On considère la suite $(u_n)$ définie par :

$$u_n = e^{-1} \quad \text{et} \quad u_{n+1} = f(u_n) \quad \text{pour tout} \quad n \in \mathbb{N}$$

1) Montrer par recurrence que: \((\forall n\in \mathbb{N})e^{-1}\leq u_n <   1\)
2) Montrer que \((u_{n})\) est strictement croissantie puis en deduire qu'elle est convergente.
3) On pose: \(\lim_{n\to \infty}u_n = \ell\)
a) Montrer que \(e^{-1}\leq \ell < 1\)
b) Détérminer la valeur de \(\ell\).

Troisième Partie:
Soit $F$ la fonction numérique définie sur l'intervalle $[0; +\infty[$ par: $F(x) = \int_x^1 f(t)dt$

1) a) Montrer que la fonction $H$ définie par:
$H(x) = -\frac{1}{4}x^2 + \frac{1}{2}x^2 \ln x$

est une primitive de $h: x \mapsto x \ln x$ sur $\mathbb{R}^*$.

b) Montrer que pour tout $x \in \mathbb{R}^*$:

$$\int_x^1 t^2 \ln(t)dt = \frac{x^2}{2} \ln^2 x - \int_1^1 t \ln(t)dt$$

c) En déduire que pour tout $x \in \mathbb{R}^*$:

$$F(x) = -\frac{3}{4} + \frac{3}{2}x^2 - \frac{x^2}{2} \ln x + \frac{x^2}{2} \ln^2 x$$

2) a) Montrer que \(F\) est continue sur \(\mathbb{R}^+\).
b) Calculer \(\lim_{x\to 0^{+}}F(x)\) puis en deduire la valeur de

l'intégrale $\int_0^1 f(x)dx$.

Examen National 2015 (Session Normale)

#### Problème 5
On considère la fonction $g$ définie sur $\mathbb{R}^*$ par:

$$g(x) = \int_x^{1x} \frac{\cos t}{t} dt$$

1) Montrer que la fonction \( g \) est paire.
2) Montrer que \( g \) est dérivable sur \( ]0; +\infty[ \) puis calculer \( g'(x) \) pour tout \( x > 0 \).
3) a) En utilisant la formule d'intégration par parties, vérifier que pour tout \( x > 0 \):

$$\int_x^{1x} \frac{\cos t}{t} dt = \frac{\sin 3x - 3 \sin x}{3x} + \int_x^{1x} \frac{\sin t}{t^2} dt$$

b) Montrer que pour tout $x > 0$: $|g(x)| \le \frac{2}{x}$ puis en déduire $\lim_{x \to \infty} g(x)$.

4) a) En remarquant que $1 - \cos t \le t$ pour tout $t \in \mathbb{R}^*$, montrer que: $0 \le \int_x^{1x} \frac{1 - \cos t}{t} dt \le 2x$

b) Vérifier que pour tout $x \in \mathbb{R}^*$:

$$g(x) - \ln 3 = \int_x^{1x} \frac{\cos t - 1}{t} dt$$

c) En déduire $\lim_{x \to 0^+} g(x)$.

Examen National 2015 (Session De Rattrapage)

#### Problème 6
On considère la fonction $F$ définie sur $[0; 1]$ par:

$$F(0) = 1 \text{ et } F(x) = \frac{1}{x} - \frac{\ln(1 + 2x)}{2x^2} \text{ si } x \in ]0; 1]$$

1) Soit $x \in [0; 1]$. Montrer que pour tout $t \in [0; x]$:

$$\frac{1}{1 + 2x} \le \frac{1}{1 + 2t} \le 1$$

2) Soit $x \in ]0; 1]$.

a) Montrer que: \(F(x) = \frac{2}{x^2}\int_0^x\frac{t}{1 + 2t} dt\)
b) Montrer que: \(\frac{1}{1 + 2x}\leq F(x)\leq 1\)

puis en déduire que la fonction $F$ est continue à droite en zéro.

3) En utilisant la formule d'intégration par parties, montrer que pour tout $x \in [0; 1]$:

$$\int_0^x \frac{2t}{1 + 2t} dt = \frac{x^2}{1 + 2x} + 2 \int_0^x \left(\frac{t}{1 + 2t}\right)^2 dt$$

4) Soit $x \in ]0; 1]$:

a) Montrer que: $F'(x) = -\frac{4}{x^2} \int_0^x \left(\frac{t}{1 + 2t}\right)^2 dt$

D

b) En utilisant le résultat de la question 1), montrer que: $-\frac{4}{3} \le F^*(x) \le -\frac{4}{3(1+2x)^2}$

c) En appliquant le théorème des accroissements finis à la fonction $F$ sur $[0; x]$, montrer que:

$$-\frac{4}{3} \le \frac{F(x) - F(0)}{x} \le \frac{-4}{3(1+2x)^2}$$

d) En déduire que la fonction $F$ est dérivable à droite en 0 en précisant la valeur de $F_0(0)$.

**Première Partie.**
On considère la fonction $f$ définie sur $[0; 1]$ par:

$$f(1) = 0 \text{ et } f(x) = \frac{1}{1 - \ln(1-x)} \text{ si } 0 \le x < 1$$

Et soit $\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O; \bar{i}, \bar{j})$ avec: $[\bar{i}] = [\bar{j}] = 2cm$

1) Montrer que \( f \) est continue a gauche en 1.
2) Etudier la derivabilité de \( f \) à gauche en 1.
3) Etudier les variations de la fonction \( f \) sur \( I \) puis donner son tableau de variations.
4) a) Montrer que \(\mathcal{C}\) admet un unique point d'inflexion dont l'abscisse est \(\frac{e - 1}{\pi}\).
b) Construire la courbe \(\mathcal{C}\) en indiquant sa demi-tangente au point d'abscisse 0.
5) Montrer qu'il existe un unique réel \( \alpha \in I \) tel que \( f(\alpha) = \alpha \).
6) a) Montrer que \( f \) est une bijection de \( I \) vers \( I \).
b) Determiner \(f^{\prime \prime}(x)\) pour tout \(x\in I\)

**Deuxième Partie.**
On pose pour tout $n \in \mathbb{N}$ : $I_n = \int_0^t t^n f(t) dt$

1) Montrer que la suite $(I_n)$ est décroissante puis qu'elle est convergente.

2) Montrer que pour tout $n \in \mathbb{N}$ : $0 \le I_n \le \frac{1}{n+1}$ puis déterminer la limite de la suite $(I_n)$.

**Troisième Partie.**
Pour tout réel $x$ de l'intervalle $J = [0; 1[$ et pour tout $n \in \mathbb{N}^*$ on pose:

$$F_0(x) = \int_0^t f(t) dt \quad , \quad F_n(x) = \int_0^t t^n f(t) dt$$

$$F(x) = \int_0^t \frac{f(t)}{1-t} dt \quad , \quad S_n(x) = \sum_{k=0}^{k=1} F_k(x)$$

1) Montrer que pour tout $n \in \mathbb{N}$ et pour tout $x \in J$ :

$$F(x) - S_n(x) = \int_0^t \frac{t^{n+1} f(t)}{1-t} dt$$

2) a) Montrer que la fonction $u$ définie sur $J$ par:

$$u(x) = (1-x)(1 - \ln(1-x))$$

est strictement décroissante sur $J$.

b) En déduire que la fonction $t \mapsto \frac{f(t)}{1-t}$ est strictement croissante sur $[0; x]$ pour tout $x \in J$.

3) a) Montrer que pour tout $n \in \mathbb{N}$ et pour tout $x \in J$ :

$$0 \le F(x) - S_n(x) \le \frac{1}{n+2} \left( \frac{1}{1-x} \right)$$

b) En déduire que pour tout $x \in J$ :

$$\lim_{n \to \infty} S_n(x) = F(x)$$

4) a) Déterminer $F(x)$ pour tout $x \in J$.

b) Déterminer la limite: $\lim_{x \to 0} F(x)$

On considère la fonction $g$ définie sur $[0; +\infty[$ par:

$$g(0) = \ln 2 \text{ et } g(x) = \int_0^{2x} \frac{e^{-t}}{t} dt \text{ si } x > 0$$

1) a) Montrer que:

$$(\forall x > 0) \ (\forall t \in [x; 2x]) \ e^{-2x} \le e^{-t} \le e^{-x}$$

b) Montrer que pour tout $x > 0$:

$$e^{-2x} \ln 2 \le g(x) \le e^{-x} \ln 2$$

c) En déduire que \( g \) est continue à droite en 0.
2) Montrer que la fonction \( g \) est dérivable sur \( ]0; +\infty[ \) puis calculer \( g'(x) \) pour tout \( x \in \mathbb{R}_+^* \).
3) a) Montrer que: \((\forall t > 0) - 1 \leq \frac{e^{-t} - 1}{t} \leq -e^{-t}\)

Puis calculer $g'(x)$ pour tout $x > 0$. (On pourra utiliser le théorème des accroissements finis).

b) Montrer que pour tout $x > 0$ :

$$-1 \le \frac{g(x) - \ln 2}{x} \le \frac{e^{-2x} - e^{-x}}{x}$$

c) En déduire que $g$ est dérivable à droite en 0.

l'Examen National 2015 (Session Normale)

**Première Partie.**
Soit $f$ la fonction définie sur $\mathbb{R}_+^*$ par : $f(x) = \frac{-\ln x}{\sqrt{x}}$

Et soit $\mathscr{C}$ sa courbe représentative dans un repère orthonormé $(O; \vec{i}, \vec{j})$ avec : $\|\vec{i}\| = 1 \text{ cm}$

1) Calculer $\lim_{x \to \infty} f(x)$ et $\lim_{x \to +\infty} f(x)$ puis donner une

interprétation géométrique à chacun des résultats obtenus.

2) Calculer $f'(x)$ puis en déduire les variations de la fonction $f$ sur $\mathbb{R}_+^*$.

3) Pour tout $n \in \mathbb{N}^*$ on considère la fonction $g_n$ définie sur $]0; 1[$ par : $g_n(x) = f(x) - x^n$

a) Montrer que \(g_{n}\) est strictement décroissant sur l'intervalle \(\left]0;1\right[\).
b) En déduire que pour tout \( n \in \mathbb{N}^* \), il existe un unique réel \( \alpha_{n} \in ]0; 1[ \) tel que: \( f(\alpha_{n}) = (\alpha_{n})^{n} \).
c) Montrer que: \((\forall n\in \mathbb{N}^{\prime})g_{n}(\alpha_{n + 1}) <   0\)
d) Montrer que la suite \((\alpha_{n})_{n\in I}\) est strictement

croissante puis en déduire qu'elle est convergente.

4) On pose : $\ell = \lim_{n \to +\infty} \alpha_n$

a) Verifier que: \(0 < \alpha_{1} \leq \ell \leq 1\)
b) Verifier que \( h(\alpha_{n}) = n \) pour tout \( n \in \mathbb{N}^* \) ou:

$$h(x) = -\frac{1}{2} + \frac{\ln(-\ln(x))}{\ln x}$$

c) Montrer que: \(\ell = 1\)
d) En déduire que: \(\lim_{n \to +\infty} (\alpha_n)^n = 0\)

**Deuxième Partie.**
1) a) Etudier le signe de l'intégrale \(\int_{x}^{1}f(t)dt\) pour tout \(x\in \mathbb{R}_+^*\)
b) En utilisant la formule d'intégration par parties, montré que pour tout \( x \in \mathbb{R}_+^* \):

$$\int_x^1 f(t)dt = 4 - 4\sqrt{x} + 2\sqrt{x} \ln x$$

c) En déduire (en $\text{cm}^2$) l'aire du domaine délimité par la courbe $\mathscr{C}$ et les droites d'équations :

$$x = 1 \quad \text{et} \quad x = e^2 \quad \text{et} \quad y = 0$$

2) Pour tout $n \in \mathbb{N}^*$ on pose : $u_n = \frac{1}{n} \sum_{k=1}^{n-1} f\left(\frac{k}{n}\right)$

a) Montrer que pour tout $(n, k) \in (\mathbb{N}^*)^2$ tel que

$$n \ge 2 \text{ et } 1 \le k \le n-1 :$$

$$\frac{1}{n} f\left(\frac{k+1}{n}\right) \le \int_{\frac{1}{n}}^{\frac{k+1}{n}} f(x)dx \le \frac{1}{n} f\left(\frac{k}{n}\right)$$

b) Montrer que pour tout $n \in \mathbb{N}^*$ :

$$\int_{\frac{1}{n}}^1 f(t)dt \le u_n \le \frac{1}{n} f\left(\frac{1}{n}\right) + \int_{\frac{1}{n}}^1 f(t)dt$$

c) En déduire $\lim_{n \to +\infty} u_n$.

l'Examen National 2014 (Session De Rattrapage)

On considère la fonction $g$ définie sur $[0; +\infty[$ par :

$$g(x) = \int_{\sqrt{x}}^{1} e^{-x^2} dt$$

1) Pour tout $x \in \mathbb{R}$, on pose : $k(x) = \int_{0}^{x} e^{-x^2} dt$

a) Vérifier que pour tout $x \in [0; +\infty[$ :

$$g(x) = -k(\sqrt{x})$$

b) Montrer que $g$ est continue $[0; +\infty[$ et dérivable sur $]0; +\infty[$.

c) Calculer $g'(x)$ pour tout $x \in \mathbb{R}^*$ puis en déduire que $g$ est strictement décroissante sur $\mathbb{R}^*$.

2) a) Montrer que : $(\forall x \in \mathbb{R}^*)$ $\frac{g(x) - g(0)}{x} < -\frac{e^{-x}}{2\sqrt{x}}$

b) En déduire que $g$ n'est pas dérivable à droite en 0 et donner une interprétation géométrique au résultat obtenu.

Examen National 2014 (Session De Rattrapage)

#### Problème 10
1) On considère la fonction $f$ définie sur $[0; +\infty[$ par :

$$f(0) = 1 \quad \text{et} \quad f(x) = \frac{1}{\sqrt{1 + x^2 \ln^2 x}} \quad \text{si } x > 0$$

a) Montrer que $f$ est continue à droite en 0 puis calculer $\lim_{x \to +\infty} f(x)$.

b) Étudier la dérivabilité de la fonction $f$ à droite en 0 (on pourra utiliser $\lim_{x \to +\infty} x \ln^2 x = 0$)

c) Montrer que $f$ est dérivable sur $]0; +\infty[$ et que :

$$(\forall x > 0) \quad f'(x) = \frac{-x \ln(x)(1 + \ln x)}{(1 + x^2 \ln^2 x)^{\frac{3}{2}}}$$

d) Dresser le tableau de variations de $f$.

2) Soit $F$ la fonction définie sur $[0; +\infty[$ par :

$$F(x) = \int_{0}^{x} f(t) dt$$

Et soit $\mathcal{C}_F$ sa courbe représentative dans un repère orthonormé $(O, \bar{i}, \bar{j})$.

a) Déterminer une primitive de la fonction

$$x \mapsto \frac{1}{x \ln x} \text{ sur l'intervalle } [e; +\infty[.$$

b) Montrer que pour tout réel $t \ge e$ :

$$t \ln t \le \sqrt{1 + t^2 \ln^2 t} \le \sqrt{2} \, t \ln t$$

c) Montrer que pour tout réel $x \ge e$ :

$$\frac{1}{\sqrt{2}} \ln(\ln x) \le \int_{e}^{x} \frac{dt}{\sqrt{1 + t^2 \ln^2 t}} \le \ln(\ln x)$$

d) En déduire que :

$$\lim_{x \to +\infty} F(x) = +\infty \quad \text{et} \quad \lim_{x \to +\infty} \frac{F(x)}{x} = 0$$

e) Montrer que $\mathcal{C}_F$ admet deux points d'inflexion dont on déterminera les abscisses.

f) Tracer $\mathcal{C}_F$ (prendre : $F(1) \approx 0,5$, $F\left(\frac{1}{e}\right) \approx 0,4$)

3) Pour tout $x \in [0; +\infty[$, on pose : $\varphi(x) = x - F(x)$

a) Montrer que $\lim_{x \to +\infty} \varphi(x) = +\infty$ puis étudier les variations de la fonction $\varphi$.

b) Montrer que pour tout $n \in \mathbb{N}$, l'équation $\varphi(x) = n$ admet une solution unique $\alpha_n$ dans $[0; +\infty[$.

c) Montrer que pour tout $n \in \mathbb{N}$ : $\alpha_n \ge n$ puis calculer $\lim_{n \to +\infty} \alpha_n$.

4) a) Montrer que pour tout $n \in \mathbb{N}^*$ :

$$0 \le \frac{F(\alpha_n)}{\alpha_n} \le \frac{F(n)}{n} + f(n)$$

(On pourra utiliser le théorème des accroissements finis).

b) Calculer $\lim_{n \to +\infty} \frac{\alpha_n}{n}$.

Examen National 2013 (Session De Rattrapage)

#### Problème 10
On considère la fonction $h$ définie sur $[1; +\infty[$ par :

$$h(1) = 1 \quad \text{et} \quad h(x) = \frac{x-1}{x \ln x} \text{ pour tout } x > 1$$

1) a) Monrer que \( h \) est continué à droite en 1.
b) Monrer que pour tout \( x > 1 \): \( \ln x < x - 1 \) puis en déduire que la fonction \( h \) est strictement décessante sur l'intervalle \( [1; +\infty] \).
2) a) Calculer \(\lim_{x\to 0}h(x)\) puis dresser le tableau des variations de la fonction \(h\)
b) En déduire que: \((\forall x\in I),0\leq h(x)\leq 1\)

Deuxième Partie :
On considère la fonction $g$ définie sur $[1; +\infty[$ par :
$g(1) = \ln 2$ et $(\forall x > 1)$ $g(x) = \int_{x}^{x} \frac{dt}{\sqrt{t \ln t}}$

Et soit $\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O, I, J)$.

1) a) Vérifier que : $(\forall x > 1) \int_{x}^{x} \frac{dt}{t \ln t} = \ln 2$

b) Vérifier que pour tout réel $x > 1$ :

$$g(x) - \ln 2 = \int_{x}^{x} \frac{\sqrt{t} - 1}{t \ln t} dt$$

c) Montrer que pour tout réel $x > 1$ :

$$g(x) - \ln 2 = \int_{x+1}^{x} \frac{t - 1}{t \ln t} dt$$

2) a) Montrer que pour tout réel $x > 1$ :

$$(x - \sqrt{x})h(x) \leq g(x) - \ln 2 \leq (x - \sqrt{x})h(\sqrt{x})$$

b) En déduire que $g$ est dérivable à droite en 1.

c) Montrer que :

$$\lim_{x \to \infty} g(x) = +\infty \text{ et } \lim_{x \to \infty} \frac{g(x)}{x} = +\infty$$

3) a) Montrer que $g$ est dérivable sur $[1; +\infty[$ et que
pour tout $x > 1$ : $g'(x) = \frac{1}{2}h(\sqrt{x})$

b) En déduire : $(\forall x > 1) \ 0 < g'(x) \leq \frac{1}{2}$

Puis dresser le tableau de variations de $g$.

c) Construire la courbe $\mathcal{C}$.

**Troisième Partie.**
1) Soit $k$ la fonction définie sur $[1; +\infty[$ par :

$$k(x) = g'(x) - x + 1$$

1) Montrer que $k$ réalise une bijection de $[1; +\infty[$ sur
l'intervalle $[-\infty; \ln 2]$.

2) En déduire qu'il existe un unique réel $\alpha \in [1; +\infty[$
tel que : $1 + g(\alpha) = \alpha$

II) On considère la suite numérique $(u_\alpha)$ définie par :
$$1 \leq u_1 < \alpha \text{ et } (\forall n \in \mathbb{N}) \ u_{n+1} = 1 + g(u_\alpha)$$

1) a) Montrer que : $(\forall n \in \mathbb{N}) \ 1 \leq u_\alpha < \alpha$

b) Montrer que $(u_\alpha)$ est strictement croissante.

c) En déduire que $(u_\alpha)$ est convergente et que
$$\lim_{n \to \infty} u_\alpha = \alpha$$.

2) a) Montrer que : $(\forall n \in \mathbb{N}) \ |u_{n+1} - \alpha| \leq \frac{1}{2} |u_\alpha - \alpha|$

b) Montrer que : $(\forall n \in \mathbb{N}) \ |u_\alpha - \alpha| \leq \left(\frac{1}{2}\right)^n |u_1 - \alpha|$

c) En déduire encore une fois que : $\lim_{n \to \infty} u_\alpha = \alpha$

Examen National 2013 (Section Normale)

#### Introduction

On pose pour tout $x \in \mathbb{R}^+$ par : $F(x) = \int_{x}^{x} \frac{\ln t}{1 + t^2} dt$

1) Calculer \( F(1) \).
2) Montrer que \( F \) est dérivable sur \( \mathbb{R}^+ \) et calculer \( F'(x) \). En déduire que: \( (\forall x \in \mathbb{R}^+) F(x) = 0 \)

3) En utilisant une intégration par parties, montrer que :
$$F(x) = \left( \text{Arc tan } x + \text{Arc tan } \frac{1}{x} \right) \ln x - \int_{x}^{x} \frac{\text{Arc tan } t}{t} dt$$

4) Montrer que: \((\forall x > 0)\) Arc tan \(\frac{1}{x} = \frac{\pi}{2} -\mathrm{Arc}\tan x\)
5) En déduire que: \((\forall x > 0)\) \(\ln x = \frac{2}{\pi}\int_{x}^{x}\frac{\operatorname{Arc}\tan t}{t} dt\)

Examen National 2012 (Section De Retrappage)

#### 12.4.2. (1) (2) (3) (4) (5) (6) (7) (8) (9) (10)

On considère la fonction $F$ définie sur $I = ]0; +\infty[$ par :

$$F(x) = \int_{\ln 2}^{x} \frac{1}{\sqrt{e^t - 1}} dt$$

1) a) Étudier le signe de $F(x)$ pour tout $x \in I$.

b) Montrer que la fonction $F$ est dérivable sur $I$ et calculer $F'(x)$ pour tout $x \in I$.

c) Montrer que la fonction $F$ est strictement croissante sur $I$.

2) a) En utilisant une intégration par changement de variable et en posant $u = \sqrt{e^t - 1}$, montrer que pour tout $x \in I$ :

$$\int_{\ln 2}^{x} \frac{1}{\sqrt{e^t - 1}} dt = 2 \text{Arctan} \sqrt{e^t - 1} - \frac{\pi}{2}$$

b) Calculer $\lim_{x \to 0^+} F(x)$ et $\lim_{x \to +\infty} F(x)$

3) a) Montrer que la fonction $F$ réalise une bijection de $I$ sur un intervalle $J$ à déterminer.

b) Déterminer la bijection réciproque $F^{-1}$ de $F$.

Examen National 2016 (Session Normale)

Soit $f$ la fonction numérique définie sur $\mathbb{R}$ par :

$$f(x) = (1 + x)e^{-2x}$$

Et soit $^c\mathcal{C}$ sa courbe représentative dans un repère orthonormé $(O; \bar{i}, \bar{j})$.

**Première Partie.**
1) a) Calculer $\lim_{x \to +\infty} f(x)$ et $\lim_{x \to -\infty} f(x)$.

b) Étudier les branches infinies de la courbe $^c\mathcal{C}$.

2) Étudier les variations de la fonction $f$.

3) a) Étudier la concavité de la courbe $^c\mathcal{C}$.

b) Tracer la courbe $^c\mathcal{C}$.

**Deuxième Partie.**
Soit $n$ un entier naturel non nul.

On note $A_n$ l'aire du domaine délimité par la courbe $^c\mathcal{C}$.

l'axe des abscisses, l'axe des ordonnées et la droite d'équation $x = n$.

1) Calculator \(A_{n}\) en fonction de \(n\)
2) Calculator \(\lim_{n\to \infty}A_n\)

**Troisième Partie.**
Pour tout $n \in \mathbb{N}^*$ on pose : $u_n = n \int_0^1 (f(x))^n dx$

1) Montrer que pour tout $n \in \mathbb{N}^*$ :

$$u_n = \int_0^n \left(1 + \frac{t}{n}\right)^n e^{-2t} dt \quad (\text{on pourra pose } t = nx)$$

2) a) Montrer que : $(\forall u \in [1; 2]), 2 - u \le \frac{1}{u} \le 1$

b) En déduire que pour tout $x \in [0; n]$ :

$$x - \frac{x^2}{2n} \le n \ln\left(1 + \frac{x}{n}\right) \le x$$

3) a) Montrer que : $(\forall n \in \mathbb{N}^*) u_n \le \int_0^n e^{-x} dx$

b) Montrer que: \(\left(\forall n\in \mathbb{N}^{\prime}\right)e^{-\frac{1}{2\sqrt{n}}}\int_{0}^{\sqrt{n}}e^{-x}dx\leq u_n\)
c) En déduire que la suite \(\left(u_{n}\right)_{n\geq 1}\) est convergente et déterminer sa limite.

4) Soit $a$ un réel de l'intervalle $]0; 1[$.

a) Montrer que :

$$\int_a^1 n(f(x))^n dx \le n(1-a)(f(a))^n$$

b) En déduire que: \(\lim_{n\to \infty}\int_{a}^{1}n(f(x))^n dx = 0\)
c) Calculator \(\lim_{n\to \infty}\int_0^n n(f(x))^n dx\)

Examen National 2005 (Session De Rattrapage)

## Résumé

- L'intégrale d'une fonction continue sur un segment est la différence des valeurs d'une primitive aux bornes.
- La relation de Chasles et la linéarité permettent de décomposer une intégrale.
- La fonction $x\mapsto\int_a^x f(t)\,dt$ est la primitive de $f$ qui s'annule en $a$.
- Pour une fonction positive, l'intégrale est l'aire du domaine situé sous la courbe.
- Les techniques de calcul sont la reconnaissance d'une primitive, le changement de variable et l'intégration par parties.
- L'intégration conserve l'ordre et fournit des encadrements ainsi que la valeur moyenne d'une fonction.
- Le calcul intégral donne les aires planes, les volumes de révolution et les limites des sommes de Riemann.

## Auto-évaluation

- Définir l'intégrale d'une fonction continue sur un segment.
- Calculer une intégrale à l'aide d'une primitive.
- Utiliser la relation de Chasles, la linéarité et les propriétés d'ordre.
- Interpréter géométriquement une intégrale et calculer une aire ou un volume.
- Choisir entre changement de variable et intégration par parties.
- Encadrer une intégrale par la méthode des rectangles et reconnaître une somme de Riemann.
- Étudier une fonction définie par une intégrale.
