---
title: "Multivariate Normal Distribution"
author: ["Krish Matta"]
date: 2025-08-08T00:00:00-04:00
lastmod: 2025-08-09T00:00:00-04:00
draft: false
---

The multivariate normal distribution is a generalization of the one-dimensional normal distribution to higher dimensions. A $k$-dimensional random vector

\\[
X = (X\_1, X\_2, \dots, X\_k)^T
\\]

is said to be $k$-variate normal with mean vector \\(\mu \in \mathbb{R}^k\\) and covariance matrix \\(\Sigma \in \mathbb{R}^{k \times k}\\), written as \\(X \sim \mathcal{N}\_k(\mu, \Sigma)\\), if every linear combination of its components is normally distributed. In other words,

\\[
\forall a \in \mathbb{R}^k, \quad a^T X \sim \mathcal{N}(a^T \mu, a^T \Sigma a).
\\]


## Density Function {#density-function}

The distribution's density function, when \\(\Sigma\\) is positive semi-definite, is

\\[
f\_{X}(x) = \dfrac{1}{(2 \pi)^{k / 2} \det(\Sigma)^{1/2}} \text{exp} \left( - \dfrac{1}{2}(x - \mu)^T \Sigma^{-1} (x - \mu) \right).
\\]
