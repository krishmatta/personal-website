---
title: "Diagonalizable Matrix"
author: ["Krish Matta"]
date: 2025-08-03T00:00:00-04:00
lastmod: 2025-08-03T00:00:00-04:00
draft: false
---

A square matrix \\(A\\) is _diagonalizable_ if there exists a basis made up of eigenvectors of \\(A\\). In other words,

\\[
A = PDP^{-1}
\\]

where \\(P\\)'s columns are the eigenvectors of \\(A\\) and \\(D\\) is the diagonal of \\(A\\)'s eigenvalues. Intuitively, \\(P\\) is the transformation from the eigenbasis to the standard basis, and \\(D\\) is the transformation of \\(A\\) expressed under this eigenbasis. To prove this, assume that \\(A\\)'s eigenvectors form a basis and observe that \\(AP = PD\\) hence \\(A = PDP^{-1}\\) by invertibility. For the converse, assume that \\(A = PDP^{-1}\\) for some diagonal matrix \\(D\\). Then, \\(AP = PD\\), implying that the columns of \\(P\\) are \\(A\\)'s eigenvectors. As \\(P\\) is invertible, its columns form a basis, as desired.
