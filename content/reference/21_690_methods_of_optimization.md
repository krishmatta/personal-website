---
title: "21-690: Methods of Optimization"
author: ["Krish Matta"]
date: 2025-02-05T00:00:00-05:00
lastmod: 2025-02-10T00:00:00-05:00
tags: ["draft"]
draft: false
---

## Introduction {#introduction}

Below are my notes for the course 21-690: Methods of Optimization taught in the Spring 2025 semester by Professor Nicholas Boffi at Carnegie Mellon University.


## Theory {#theory}


### Affine Sets {#affine-sets}

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


### Convex Sets {#convex-sets}

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


#### Hyperplanes and Halfspaces {#hyperplanes-and-halfspaces}

**Definition** (Hyperplane). Let \\(x, a \in \mathbb{R}^n\\) and \\(b \in \mathbb{R}\\). The set

\\[
\lbrace x : a^T x = b \rbrace
\\]

is a _hyperplane_.
