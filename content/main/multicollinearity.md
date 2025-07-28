---
title: "Multicollinearity"
author: ["Krish Matta"]
date: 2025-07-27T00:00:00-04:00
lastmod: 2025-07-27T00:00:00-04:00
draft: false
---

Multicollinearity refers to the situation in regression where at least two predictors are highly correlated with one another in a linear fashion.


## Linear Regression {#linear-regression}


### Implications {#implications}

When performing linear regression, multicollinearity is undesired, as it causes the model to be less robust to different training data (i.e. has high variance over training datasets).

To understand why, first consider the pathological case of "perfect multicollinearity" in which the true model is \\(y = \beta\_1 x\\), we have that \\(z = x\\), and we regress \\(y\\) over \\(x, z\\). Then, \\(y = \hat{\beta}\_1 x + \hat{\beta}\_2 z\\) for _any_ \\(\hat{\beta}\\) such that \\(\hat{\beta}\_1 + \hat{\beta}\_2 = \beta\_1\\). Formally, this can be seen by the fact that \\(X^T X\\) is rank deficient, as \\(X\\) has two identical columns \\(x, z\\). Hence, \\(X^T X\\) has no inverse and multiple solutions exist.

Now consider the more typical multicollinearity case in which \\(x, z\\) are not exact copies, but are highly correlated; for the sake of example, say that \\(z = x + \epsilon\\) where \\(\epsilon \sim \mathcal{N}(0, \sigma^2)\\). In this case, a unique solution exists as \\(X^T X\\) has full rank, but it's "nearly rank deficient" as it has a very small eigenvalue. Hence, \\((X^T X)^{-1}\\) contains large entries. From ordinary least squares, we have that

\\[
\text{Var}(\hat{\beta}) = \sigma^2 (X^T X)^{-1}.
\\]

Hence, small perturbations in the training data may cause large changes in \\(\hat{\beta}\\).


### Detection {#detection}

Multicollinearity can be detected by checking the correlation matrix of the predictors.

Another way to detect multicollinearity is by the [variance inflation factor]({{< relref "variance_inflation_factor.md" >}}) (VIF).
