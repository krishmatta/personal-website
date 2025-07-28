---
title: "Variance Inflation Factor"
author: ["Krish Matta"]
date: 2025-07-27T00:00:00-04:00
lastmod: 2025-07-27T00:00:00-04:00
draft: false
---

The variance inflation factor (VIF) measures how much the variance of coefficients in linear regression are inflated by a particular predictor. For the $i$-th predictor, the variance inflation factor is

\\[
\text{VIF}\_i = \dfrac{1}{1 - R\_i^2}
\\]

where \\(R\_i^2\\) is the \\(R^2\\) value when regressing the $i$-th predictor against the other predictors. As a heuristic, a VIF greater than 10 indicates [multicollinearity]({{< relref "multicollinearity.md" >}}).
