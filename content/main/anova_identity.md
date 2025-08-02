---
title: "ANOVA Identity"
author: ["Krish Matta"]
date: 2025-08-02T00:00:00-04:00
lastmod: 2025-08-02T00:00:00-04:00
draft: false
---

The ANOVA identity in linear regression states that for labels \\(y\\), predictions \\(\hat{y}\\), and residuals \\(r = y - \hat{y}\\), if the residuals have an average of 0, then

\\[
\sum\_{i=1}^n (y\_i - \overline{y})^2 = \sum\_{i=1}^n (\hat{y}\_i - \overline{y})^2 + \sum\_{i=1}^n (y\_i - \hat{y}\_i)^2.
\\]

More intuitively,

\\[
TSS = ESS + RSS
\\]

where \\(TSS\\) is the total sum of squares, \\(ESS\\) is the explained sum of squares, and \\(RSS\\) is the residual sum of squares.


## Proof {#proof}

$$

\begin{aligned}
\sum\_{i=1}^n (y\_i - \overline{y})^2 &= \sum\_{i=1}^n (y\_i - \hat{y}\_i + \hat{y}\_i - \overline{y})^2 \\\\
&= \sum\_{i=1}^n \left( (y\_i - \hat{y}\_i)^2 + (\hat{y}\_i - \overline{y})^2 + 2 (y\_i - \hat{y\_i}) (\hat{y}\_i - \overline{y}) \right) \\\\
&= \sum\_{i=1}^n (y\_i - \hat{y}\_i)^2 + \sum\_{i=1}^n (\hat{y}\_i - \overline{y})^2 + 2 \sum\_{i=1}^n (y\_i - \hat{y\_i}) (\hat{y}\_i - \overline{y}) \\\\
&= \sum\_{i=1}^n (y\_i - \hat{y}\_i)^2 + \sum\_{i=1}^n (\hat{y}\_i - \overline{y})^2 + 2 \sum\_{i=1}^n (r\_i \hat{y\_i} - r\_i \overline{y}) \\\\
&= \sum\_{i=1}^n (y\_i - \hat{y}\_i)^2 + \sum\_{i=1}^n (\hat{y}\_i - \overline{y})^2 + 2 \sum\_{i=1}^n r\_i \hat{y\_i} - 2 \sum\_{i=1}^n r\_i \overline{y} \\\\
&= \sum\_{i=1}^n (y\_i - \hat{y}\_i)^2 + \sum\_{i=1}^n (\hat{y}\_i - \overline{y})^2 - 2 \overline{y} \sum\_{i=1}^n r\_i \\\\
&= \sum\_{i=1}^n (y\_i - \hat{y}\_i)^2 + \sum\_{i=1}^n (\hat{y}\_i - \overline{y})^2
\end{aligned}

$$

noting that \\(r\\) and \\(\hat{y}\\) are orthogonal.


## Implications {#implications}

Ordinary least squares with an intercept ensures that the average of the residuals is zero. Recall that ordinary least squares finds the orthogonal projection of \\(y\\) onto the column space of \\(X\\). If there's an intercept, then the column space of \\(X\\) includes \\(\mathbf{1}\\). Implying that the residual vector is orthogonal to \\(\mathbf{1}\\), or in other words, its sum is 0.

Hence, if we perform linear regression with an intercept, we have the above identity. Implying that the following identity holds for the [coefficient of determination]({{< relref "coefficient_of_determination.md" >}}):

\\[
R^2 = 1 - \dfrac{RSS}{TSS} = \dfrac{ESS}{TSS}.
\\]

With this in hand, we also have that

\\[
R^2 = \rho(y, \hat{y})^2.
\\]

To derive this, see that

$$

\begin{aligned}
R^2 &= \dfrac{ESS}{TSS} \\\\
&= \dfrac{\sum\_{i=1}^n (\hat{y}\_i - \overline{y})^2}{\sum\_{i=1}^n (y\_i - \overline{y})^2} \\\\
&= \dfrac{\text{Var}(\hat{y})}{\text{Var}(y)} \\\\
&= \dfrac{(\text{Var}(\hat{y}) + \text{Cov}(\hat{y}, r))^2}{\text{Var}(\hat{y}) \text{Var}(y)} \\\\
&= \dfrac{(\text{Cov}(\hat{y}, \hat{y} + r))^2}{\text{Var}(\hat{y}) \text{Var}(y)} \\\\
&= \dfrac{\text{Cov}(\hat{y}, y)^2}{\text{Var}(\hat{y}) \text{Var}(y)} \\\\
&= \rho(y, \hat{y})^2
\end{aligned}

$$

noting that \\(\overline{\hat{y}} = \overline{y}\\) as residuals sum to 0.
