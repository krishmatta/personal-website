---
title: "Square Root Law"
author: ["Krish Matta"]
date: 2025-08-01T00:00:00-04:00
lastmod: 2025-08-01T00:00:00-04:00
draft: false
---

The square root law states that the standard deviation of the sample mean is the population standard deviation divided by the square root of the sample size, i.e.

\\[
SD(\overline{X}) = \dfrac{\sigma}{\sqrt{n}}
\\]


## Proof {#proof}

Consider \\(n\\) i.i.d. samples \\(X\_1, \dots, X\_n\\) from a distribution with

\\[
\mathbb{E}[X\_i] = \mu, \text{Var}(X\_i) = \sigma^2.
\\]

Then,

$$

\begin{aligned}
\text{Var}(\overline{X}) &= \text{Var} \left( \dfrac{1}{n} \sum\_{i=1}^n X\_i \right) \\\\
&= \dfrac{1}{n^2} \sum\_{i=1}^n \text{Var}(X\_i) \\\\
&= \dfrac{1}{n^2} \sum\_{i=1}^n \sigma^2 \\\\
&= \dfrac{\sigma^2}{n}.
\end{aligned}

$$

Hence,

\\[
SD(\overline{X}) = \sqrt{\text{Var}(\overline{X})} = \dfrac{\sigma}{\sqrt{n}}
\\]

as desired.
