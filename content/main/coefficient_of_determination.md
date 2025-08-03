---
title: "Coefficient of Determination"
author: ["Krish Matta"]
date: 2025-07-27T00:00:00-04:00
lastmod: 2025-08-03T00:00:00-04:00
draft: false
---

The coefficient of determination, denoted by \\(R^2\\), measures how well a regression line fits data. It is generally defined as

\\[
R^2 = 1 - \dfrac{\sum (y\_i - \hat{y}\_i)^2}{\sum (y\_i - \overline{y})^2}.
\\]


## Interpretation {#interpretation}

The coefficient of determination can be intepreted as the percent of variation in \\(y\\) values that can be attributed to the predictors. This view can be seen by noting that \\(\sum (y\_i - \overline{y})^2\\) is the total variance in \\(y\\) values and \\(\sum (y\_i - \hat{y}\_i)^2\\) is the variance which the model does not explain.

Another interpretation is that the coefficient of determination is the reduction in squared error compared to always predicting the sample mean. This can be seen by noticing that \\(\sum (y\_i - \overline{y})^2\\) is the mean squared error for predicting the sample mean.
