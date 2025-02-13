---
title: "21-690: Methods of Optimization"
author: ["Krish Matta"]
date: 2025-02-05T00:00:00-05:00
lastmod: 2025-02-12T00:00:00-05:00
tags: ["draft"]
draft: false
---

## Introduction {#introduction}

Below are my notes for the course 21-690: Methods of Optimization taught in the Spring 2025 semester by Professor Nicholas Boffi at Carnegie Mellon University.


## Affine Sets {#affine-sets}

**Definition** (Affine). A set \\(C \subseteq \mathbb{R}^n\\) is said to be _affine_ if for all \\(x, y \in C\\), we have that \\(\theta x + (1 - \theta) y \in C\\) for all \\(\theta \in \mathbb{R}\\).

Geometrically, affine sets are sets in which the line formed by any two points in the set is entirely contained in the set as well.

**Definition** (Affine Combination). An _affine combination_ of \\(\lbrace x\_i \rbrace\_{i=1}^k \subseteq \mathbb{R}^n\\) is a linear combination

\\[
\sum\_{i=1}^k \theta\_i x\_i
\\]

where \\(\theta\_i \in \mathbb{R}\\) for all \\(i \in [k]\\) and \\(\sum\_{i=1}^k \theta\_i = 1\\).

**Proposition**. Let \\(C \subseteq \mathbb{R}^n\\) be an affine set. Then, any affine combination of \\(\lbrace x\_i \rbrace\_{i=1}^k \subseteq C\\) is contained in \\(C\\).

**Proof**. By induction on \\(k\\).

**Definition** (Affine Hull). The _affine hull_ of a set \\(C \subseteq \mathbb{R}^n\\) is the set

\\[
\text{aff}( C) = \lbrace \theta x + (1 - \theta) y : x, y \in C, \theta \in \mathbb{R} \rbrace.
\\]

**Exercise**. Prove that the affine hull of \\(C \subseteq \mathbb{R}^n\\) is the smallest affine set containing \\(C\\).


## Convex Sets {#convex-sets}

Affine sets are certainly unbounded, as lines are unbounded. We can consider bounded sets by considering only line segments rather than entire lines. Thus lies the idea behind convexity.

**Definition** (Convex). A set \\(C \subseteq \mathbb{R}^n\\) is said to be _convex_ if for all \\(x, y \in C\\), we have that \\(\theta x + (1 - \theta) y \in C\\) for all \\(\theta \in [0, 1]\\).

Geometrically, convex sets are sets in which the line segment formed by any two points in the set is entirely contained in the set as well. Note that we only consider line segments by restricting our coefficients to \\([0, 1]\\).

We can similarly extend the idea of affine combinations and affine hulls to convexity.

**Definition** (Convex Combination). A _convex combination_ of \\(\lbrace x\_i \rbrace\_{i=1}^k \subseteq \mathbb{R}^n\\) is a linear combination

\\[
\sum\_{i=1}^k \theta\_i x\_i
\\]

where \\(\theta\_i \in [0, 1]\\) for all \\(i \in [k]\\) and \\(\sum\_{i=1}^k \theta\_i = 1\\).

**Proposition**. Let \\(C \subseteq \mathbb{R}^n\\) be a convex set. Then, any convex combination of \\(\lbrace x\_i \rbrace\_{i=1}^k \subseteq C\\) is contained in \\(C\\).

**Proof**. By induction on \\(k\\).

**Definition** (Convex Hull). The _convex hull_ of a set \\(C \subseteq \mathbb{R}^n\\) is the set

\\[
\text{conv}( C) = \lbrace \theta x + (1 - \theta) y : x, y \in C, \theta \in [0, 1] \rbrace.
\\]

**Exercise**. Prove that the convex hull of \\(C \subseteq \mathbb{R}^n\\) is the smallest convex set containing \\(C\\).


### Examples {#examples}


#### Cones {#cones}

**Definition** (Cone). A set \\(C\\) is a _cone_ if for all \\(x \in C\\), \\(\lambda x \in C\\) for all \\(\lambda > 0\\).

The traditional image of a "cone" is itself a cone, if extended to infinity.

Not all cones are convex: the union of two different lines is a cone, but not convex.


#### Hyperplanes and Halfspaces {#hyperplanes-and-halfspaces}

**Definition** (Hyperplane). Let \\(a \in \mathbb{R}^n\\) and \\(b \in \mathbb{R}\\). The set

\\[
\lbrace x \in \mathbb{R}^n : a^T x = b \rbrace
\\]

is a _hyperplane_.

Geometrically, hyperplanes are lines in \\(\mathbb{R}^2\\) and planes in \\(\mathbb{R}^3\\).

**Proposition**. All hyperplanes are affine.

**Proof**. Consider the hyperplane
\\[
S = \lbrace x \in \mathbb{R}^n : a^T x = b \rbrace.
\\]

Consider \\(x, y \in S\\) and \\(\theta \in \mathbb{R}\\). Then,

\\[
a^T \left( \theta x + (1 - \theta) y \right) = \theta (a^T x) + (1 - \theta) (a^T y) = \theta b + (1 - \theta) b = b.
\\]

Hence, \\(\theta x + (1 - \theta) y \in S\\) and so \\(S\\) is affine.

**Definition** (Halfspace). Let \\(a \in \mathbb{R}^n\\) and \\(b \in \mathbb{R}\\). The set

\\[
\lbrace x \in \mathbb{R}^n : a^T x \leq b \rbrace
\\]

is a _halfspace_.

Geometrically, halfspaces are one side of a hyperplane.

**Proposition**. All halfspaces are convex.


#### Balls and Ellipsoids {#balls-and-ellipsoids}

**Definition** (Ball). A ball is a set

\\[
B(x\_c, r) = \lbrace x \in \mathbb{R}^n : || x - x\_c || \leq r \rbrace,
\\]

where \\(r > 0\\).

**Proposition**. All balls are convex.

**Proof**. Consider some ball \\(B(x\_c, r)\\). Take \\(x, y \in B(x\_c, r)\\) and \\(\theta \in [0, 1]\\). Let \\(z = \theta x + (1 - \theta) y\\). We wish to show that \\(z \in B(x\_c, r)\\). Observe that by triangle inequality,

\\[
{ || z - x\_c || = || \theta x + (1 - \theta) y - x\_c || \leq || \theta x - \theta x\_c || + || (1 - \theta) y - (1 - \theta x\_c) || \leq \theta r + (1 - \theta) r = r},
\\]

hence \\(z \in B(x\_c, r)\\).

**Definition** (Ellipsoid). An ellipsoid is a set

\\[
\lbrace x \in \mathbb{R}^n : (x - x\_c)^T P^{-1} (x - x\_c) \leq 1 \rbrace
\\]

where \\(x\_c \in \mathbb{R}^n\\) and \\(P \in S^n\_{++}\\).

**Proposition**. All ellipsoids are convex.

**Proof**. Consider some ellipsoid

\\[
C = \lbrace x \in \mathbb{R}^n : (x - x\_c)^T P^{-1} (x - x\_c) \leq 1 \rbrace.
\\]

Take \\(x, y \in C\\), and \\(\theta \in [0, 1]\\). Let \\(z = \theta x + (1 - \theta) y\\). We wish to show that \\(z \in C\\). Observe that

$$
\begin{aligned}
(z - x_c)^T P^{-1} (z - x_c) &= (\theta x + (1 - \theta) y - x_c)^T P^{-1} (\theta x + (1 - \theta) y - x_c) \\
&= (\theta x + (1 - \theta) y - \theta x_c - (1 - \theta) x_c)^T P^{-1} (\theta x + (1 - \theta) y - \theta x_c - (1 - \theta) x_c) \\
&= (\theta (x - x_c) + (1 - \theta) (y - x_c))^T P^{-1} (\theta (x - x_c) + (1 - \theta)(y - x_c)) \\
&= \theta^2 (x - x_c)^T P^{-1} (x - x_c) + \theta (1 - \theta) ((x - x_c)^T P^{-1} (y - x_c) + (y - x_c)^T P^{-1} (x - x_c)) + (1 - \theta)^2 (y - x_c)^T P^{-1} (y - x_c) \\
&= \theta^2 (x - x_c)^T P^{-1} (x - x_c) + 2 \theta (1 - \theta) (x - x_c)^T P^{-1} (y - x_c) + (1 - \theta)^2 (y - x_c)^T P^{-1} (y - x_c) \\
&\leq \theta^2 (x - x_c)^T P^{-1} (x - x_c) + 2 \theta (1 - \theta) \sqrt{(x-x_c)^T P^{-1} (x - x_c)} \sqrt{(y - x_c)^T P^{-1} (y - x_c)} + (1 - \theta)^2 (y - x_c)^T P^{-1} (y - x_c) \\
&= \left(\theta \sqrt{(x - x_c)^T P^{-1} (x - x_c)} + (1 - \theta) \sqrt{(y - x_c)^T P^{-1} (y - x_c)}\right)^2 \\
&\leq (\theta + (1 - \theta))^2 \\
&= 1.
\end{aligned}
$$

Hence, \\(z \in C\\), and so all ellipsoids are convex.


#### Polyhedra {#polyhedra}

**Definition** (Polyhedra). A polyhedra is a set

\\[
P = \lbrace x \in \mathbb{R}^n : \left( \forall i \in [m], a\_i^T x \leq b\_i \right) \land \left( \forall i \in [p],  c\_i^T x = d\_i \right) \rbrace.
\\]

Polyhedra are typically presented with the notation

\\[
P = \lbrace x \in \mathbb{R}^n : Ax \preceq b, Cx = d \rbrace
\\]

where \\(A \in \mathbb{R}^{m \times n}, b \in \mathbb{R}^m, C \in \mathbb{R}^{p \times n}, d \in \mathbb{R}^p\\).

Geometrically, polyhedra are the intersection of a finite number of hyperplanes and halfspaces.


### Operations that Preserve Convexity {#operations-that-preserve-convexity}


#### Intersection {#intersection}

**Proposition**. Intersection preserves convexity.

**Proof**. Let \\(I\\) be an index set such that for all \\(i\\), \\(C\_i \subseteq \mathbb{R}^n\\) is a convex set. Let \\(C = \bigcap\_{i \in I} C\_i\\). We claim that \\(C\\) is convex.

Consider \\(x, y \in C\\), and \\(\theta \in [0, 1]\\). Set \\(z = \theta x + (1 - \theta) y\\). It suffices to show that \\(z \in C\\).

By definition of \\(C\\), \\(x, y \in C\_i\\) for all \\(i \in I\\). By convexity of \\(C\_i\\), we have that \\(z \in C\_i\\) for all \\(i \in I\\). Hence, \\(z \in C\\), as desired.

**Exercise**. The positive semidefinite cone, \\(S^n\_{+}\\), is convex.

**Solution**. Observe that

\\[
S^n\_{+} = \bigcap\_{z \in \mathbb{R}^n} \lbrace X \in \mathbb{R}^{n \times n} : z^T X z \geq 0 \rbrace.
\\]

Every set on the right hand side is convex. The intersection of convex sets is convex, hence the positive semidefinite cone is convex.


#### Affine Functions {#affine-functions}

**Definition** (Affine Function). A function \\(f: \mathbb{R}^n \rightarrow \mathbb{R}^m\\) is _affine_ if it is of the form

\\[
f(x) = Ax + b.
\\]

**Proposition**. The image of a convex set over an affine function is convex.

**Proof**. Let \\(C \subseteq \mathbb{R}^n\\) be a convex set and \\(f: \mathbb{R}^n \rightarrow \mathbb{R}^m\\) an affine function via \\(f(x) = Ax + b\\). We wish to show that \\(f[C]\\) is convex.

Consider \\(x, y \in f[C]\\), and \\(\theta \in [0, 1]\\). Define \\(z = \theta x + (1 - \theta) y\\). It suffices to show that \\(z \in f[C]\\).

As \\(x, y \in f[C]\\), there exists \\(s, t \in C\\) such that \\(f(s) = x\\) and \\(f(t) = y\\).

Let \\(u = \theta s + (1 - \theta) t\\). As \\(C\\) is convex, we have that \\(u \in C\\).

Thus,

$$
\begin{aligned}
z &= \theta x + (1 - \theta) y \\
&= \theta f(s) + (1 - \theta) f(t) \\
&= \theta As + \theta b + (1 - \theta) At + (1 - \theta) b \\
&= A (\theta s + (1 - \theta) t) + b \\
&= Au + b \\
&= f(u) \in f[C],
\end{aligned}
$$

as desired.

The above proposition implies that scaling, translation, and projection preserve convexity.

**Proposition**. The pre-image of a convex set over an affine function is convex.

**Proof**. Let \\(C \subseteq \mathbb{R}^m\\) be a convex set and \\(f: \mathbb{R}^n \rightarrow \mathbb{R}^m\\) an affine function via \\(f(x) = Ax + b\\). We wish to show that \\(f^{-1}[C]\\) is convex.

Consider \\(x, y \in f^{-1}[C]\\), and \\(\theta \in [0, 1]\\). It suffices to show that \\(z = \theta x + (1 - \theta) y \in f^{-1}[C]\\), which in turn we must show that \\(f(z) \in C\\).

Observe that

$$
\begin{aligned}
f(z) &= f\left(\theta x + (1 - \theta)y) \right) \\
&= \theta A x + \theta b + (1 - \theta) A y + (1 - \theta) b \\
&= \theta f(x) + (1 - \theta) f(y) \in C
\end{aligned}
$$

by convexity of \\(C\\).


#### Perspective Function {#perspective-function}

**Definition** (Perspective Function). The perspective function \\(P: \mathbb{R}^{n} \times \mathbb{R}\_{++} \rightarrow \mathbb{R}^n\\) is defined via

\\[
P(s, t) = \dfrac{s}{t}.
\\]

**Proposition**. The image of a convex set over the perspective function is convex.

**Proof**. Let \\(C \subseteq \mathbb{R}^n \times \mathbb{R}\_{++}\\) be a convex set. We wish to show that \\(P[C]\\) is convex.

Consider \\(x, y \in P[C]\\). We wish to show that for any \\(\theta \in [0, 1]\\), \\(\theta x + (1 - \theta) y \in P[C]\\). The proof is difficult if done directly, hence we will take a slightly different approach.

Fix \\(\theta \in [0, 1]\\). Since \\(x, y \in P[C]\\), there exists \\((a, s), (b, t) \in C\\) such that \\(P(a, c) = x\\) and \\(P(b, t) = y\\).

By convexity of \\(C\\), we have that

\\[
(\theta a + (1 - \theta) b, \theta s + (1 - \theta) t) = \theta (a, s) + (1 - \theta) (b, t) \in C.
\\]

Hence,

\\[
\dfrac{\theta s P(x)}{\theta s + (1 - \theta) t} + \dfrac{(1 - \theta) t P(y)}{\theta s + (1 - \theta) t} = \dfrac{\theta a + (1 - \theta) b}{\theta s + (1 - \theta) t}= P(\theta a + (1 - \theta) b, \theta s + (1 - \theta) t) \in P[C]
\\]

Let

\\[
\mu = \dfrac{\theta s}{\theta s + (1 - \theta) t}.
\\]

Through substitution, we have that

\\[
\mu P(x) + (1 - \mu) P(y) \in P[C].
\\]

As we vary \\(\theta \in [0, 1]\\), \\(\mu\\) varies from \\(0\\) to \\(1\\), implying that \\(P[C]\\) is convex.
