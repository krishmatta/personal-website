---
title: "Orthogonal Matrix"
author: ["Krish Matta"]
date: 2025-07-19T00:00:00-04:00
lastmod: 2025-07-19T00:00:00-04:00
draft: false
---

An orthogonal matrix is a real square matrix \\(Q\\) such that its transpose is its inverse, i.e. \\(Q^T Q = I\\).


## Geometric Interpretation {#geometric-interpretation}

Transformations induced by orthogonal matrices are always linear [isometries]({{< relref "isometry.md" >}}) that fix the origin (e.g. rotations, reflections). Consider two points \\(x, y \in \mathbb{R}^n\\). Then,

$$

\begin{aligned}
d(x, y)^2 &= \\\\
(x-y)^T (x-y) &= \\\\
(x-y)^T I (x-y) &= \\\\
(x-y)^T Q^T Q (x-y) &= \\\\
(Qx - Qy)^T (Qx - Qy) &= \\\\
d(Qx, Qy)^2.
\end{aligned}

$$
