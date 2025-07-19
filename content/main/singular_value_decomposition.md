---
title: "Singular Value Decomposition"
author: ["Krish Matta"]
date: 2025-07-19T00:00:00-04:00
lastmod: 2025-07-19T00:00:00-04:00
draft: false
---

Singular value decomposition (SVD) refers to the property that for any \\(n \times m\\) matrix \\(A\\),

\\[
A = U D V^T
\\]

where \\(U\\) is an \\(n \times n\\) matrix whose columns are the eigenvectors of \\(AA^T\\), \\(D\\) is the \\(n \times m\\) matrix \\(\sqrt{\text{diag}(\text{eig}(AA^T))}\\), and \\(V\\) is the \\(m \times m\\) matrix whose columns are the eigenvectors of \\(A^T A\\).


## Geometric Interpretation {#geometric-interpretation}

SVD implies that the transformations induced by any matrix can be represented as the composition of an [orthogonal matrix]({{< relref "orthogonal_matrix.md" >}}) (\\(U\\)) followed by a diagonal scaling (\\(D\\)) followed by another orthogonal matrix (\\(V\\)).
