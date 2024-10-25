---
title: "21-651: General Topology"
author: ["Krish Matta"]
date: 2024-10-21T00:00:00-04:00
lastmod: 2024-10-25T00:00:00-04:00
tags: ["draft"]
draft: false
---

My notes of 21-651: General Topology in the Fall 2024 semester taught by James Cummings.


## Prerequisites {#prerequisites}

**Definition** (Metric Space): A _metric space_ is a tuple \\[(M, d)\\] where \\[M\\] is a set and \\[d: M \times M \rightarrow \mathbb{R}\_{\geq 0}\\] is a function that satisfies the following properties:

-   For all \\[x, y \in M\\], \\[d(x, y) = 0 \iff x = y\\]
-   For all \\[x, y \in M\\], \\[d(x, y) = d(y, x)\\]
-   For all \\[x, y, z \in M\\], \\[d(x, z) \leq d(x, y) + d(y, z)\\]

**Definition** (Convergence in a Metric Space): Let \\[(M, d)\\] be a metric space. We say that the sequence \\[(x\_n)\_{n \in \mathbb{N}}\\] converges to \\[x \in M\\] if for all \\[\epsilon > 0\\], there exists a \\[N \in \mathbb{N}\\] such that for all \\[n \geq N\\], \\[d(x\_n, x) < \epsilon\\].

**Proposition**: Let \\[(M, d)\\] be a metric space and \\[(x\_n)\_{n \in \mathbb{N}}\\] be a sequence in \\[M\\]. Then, the sequence converges to at most one point.

**Proof**: Assume for the sake of contradiction that \\[(x\_n)\_{n \in \mathbb{N}}\\] converges to two distinct points, \\[y\_1, y\_2 \in M\\] where \\[y\_1 \neq y\_2\\]. Let \\[\epsilon = d(y\_1, y\_2) / 2 > 0\\]. We may then extract \\[N\\] such that for all \\[n \geq N\\], \\[d(y\_1, x\_n), d(y\_2, x\_n) \leq \epsilon\\]. Then,

\\[
d(y\_1, y\_2) \leq d(y\_1, x\_N) + d(x\_N, y\_2) < \epsilon + \epsilon = 2\epsilon = d(y\_1, y\_2),
\\]

a contradiction.

**Definition** (Continuity in a Metric Space): Let \\[(M\_1, d\_1), (M\_2, d\_2)\\] be metric spaces. We say that a function \\[f: M\_1 \rightarrow M\_2\\] is continuous if for all \\[x \in M\_1\\], all \\[\epsilon > 0\\], there exists a \\[\delta > 0\\] such that \\[d\_1(x, y) < \delta \implies d\_2(f(x), f(y)) < \epsilon\\].

**Definition** (Open in Metric Space): Let \\[(M, d)\\] be a metric space and \\[U \subseteq M\\] be a subset. We say that \\[U\\] is open if for all \\[x \in U\\], there exists \\[\epsilon > 0\\] such that \\[B\_{\epsilon}(x) \subseteq U\\].

**Definition** (Closed in Metric Space): Let \\[(M, d)\\] be a metric space and \\[U \subseteq M\\] be a subset. We say that \\[U\\] is closed if \\[M \setminus U\\] is open.

From these definitions, we can see that \\[\emptyset\\] is open and \\[M\\] itself is open.

**Proposition**: Any union of open sets in a metric space is open. Any finite intersection of open sets in a metric space is open.

**Definition** (Ball): Let \\[(M, d)\\] be a metric space. We define the ball centered around \\[x \in M\\] with radius \\[\epsilon > 0\\] as the set \\[B\_{\epsilon}(x) = \lbrace y \in M : d(x, y) < \epsilon) \rbrace\\].

**Proposition**: Let \\[(M, d)\\] be a metric space, \\[x \in M\\], and \\[\epsilon > 0\\]. Then, the set \\[B\_{\epsilon}(x)\\] is open.

**Proof**: Pick \\[y \in B\_{\epsilon}(x)\\]. Take \\[\epsilon' = \epsilon - d(x, y)\\]. We claim that \\[B\_{\epsilon'}(y) \subseteq B\_{\epsilon}(x)\\]. Consider \\[z \in B\_{\epsilon'}(y)\\]. Then,

\\[
d(x, z) \leq d(x, y) + d(y, z) < d(x, y) + \epsilon' = d(x, y) + \epsilon - d(x, y) = \epsilon,
\\]

as desired. Thus, \\[z \in B\_{\epsilon}(x).\\]

Some useful facts about open spaces in metric spaces.

**Proposition**: Let \\[(M, d)\\] be a metric space. Then, a subset \\[F \subseteq X\\] is an open set if and only if \\[F\\] is a union of open balls.

**Proof**: We first prove the forwards direction. Let \\[F\\] be an open set. For \\[x \in F\\], let \\[\epsilon\_x > 0\\] be such that \\[B\_{\epsilon\_x}(x) \subseteq F\\]. Then,

\\[
F = \bigcup\_{x \in F} B\_{\epsilon\_x}(x)
\\]

as desired.

We now prove the backwards direction. Any union of open sets is open. Thus, a union of open balls is open, as desired.

Recall that earlier, we discussed concepts of convergence and continuity in terms of the metric function. In fact, we can reframe these concepts in terms of _open sets_, which will prove crucial to the study of topology.

**Proposition**: Let \\[(M, d)\\] be a metric space, and \\[(x\_n)\_{n \in \mathbb{N}}\\] be a sequence in \\[M\\]. Then, the sequence converges to \\[x \in M\\] if and only if for all open sets \\[U \subseteq M\\] where \\[x \in U\\], there exists \\[N\\] such that for all \\[n \geq N\\], \\[x\_n \in U\\].

**Proposition**: Let \\[(M\_1, d\_1), (M\_2, d\_2)\\] be metric spaces, and \\[f: M\_1 \rightarrow M\_2\\] be a function. Then, \\[f\\] is continuous if and only if for all open \\[U \subseteq M\_2\\], \\[f^{-1}[U]\\] is open in \\[M\_1\\].

**Proof**: We first prove the forwards direction. Let \\[f\\] be a continuous function. Consider some open \\[U \subseteq M\_2\\]. Assume for the sake of contradiction that \\[f^{-1}[U]\\] is not open. Then, there exists some \\[x \in f^{-1}[U]\\] such that for all \\[\epsilon > 0\\], \\[B\_{\epsilon}(x) \not \subseteq f^{-1}[U]\\]. Of course, then, \\[f\\] is not continuous (we can not find a \\[\delta\\] for any \\[\epsilon\\]), providing us with a contradiction. Thus, \\[f^{-1}[U]\\] must be open.

We now prove the backwards direction. We wish to show that \\[f\\] is continuous. Take \\[x \in M\_1\\] and \\[\epsilon > 0\\]. Of course, \\[B\_{\epsilon}(f(x))\\] is open in \\[M\_2\\]. Meaning that \\[f^{-1}[B\_{\epsilon}(f(x))]\\] is open in \\[M\_1\\]. And so, we can find \\[\delta > 0\\] such that \\[B\_{\delta}(x) \subseteq f^{-1}[B\_{\epsilon}(f(x))]\\].

These characterizations of convergence and continuity make certain proofs extremely easy, such as showing composition of continuity.


## Topological Spaces {#topological-spaces}

The study of topology focuses on generalizing the notion of openness, and henceforth convergence as well as continuity, from a metric space.

**Definition** (Topology): Let \\[X\\] be a set. A _topology_ on \\[X\\] is a set \\[\tau \in P(X)\\] such that the following hold:

1.  \\[X, \emptyset \in \tau\\].
2.  \\[\tau\\] is closed under union.
3.  \\[\tau\\] is closed under finite intersections.

Elements of \\[\tau\\] are called the open sets of \\[(X, \tau)\\]. We say that \\[(X, \tau)\\] is a _topological space_.

Thus, we can think of a topology as an abstraction of open sets on a metric space.

We call the topology on a metric space induced by the metric function the _metric topology_.

**Remark**: Not every topology comes from a metric. There is a whole class of theorems related to determining whether a topology is from a metric or not.

We call the topology \\[\tau = \lbrace \emptyset, X \rbrace\\] the _discrete topology_.

We call the topology \\[\tau = \mathcal{P}(X)\\] the _indiscrete topology_.

**Definition** (Continuity): Let \\[(X, \tau\_X)\\] and \\[(Y, \tau\_Y)\\] be topological spaces, and \\[f: X \rightarrow Y\\] a function. We say that \\[f\\] is continuous if for all open \\[V \subseteq Y\\], \\[f^{-1}[V]\\] is open in \\[X\\].

From now on, we will say that a set \\[X\\] is a topological space and use \\[\tau\_X\\] to refer to its topology.

**Proposition**: Let \\[X, Y, Z\\] be topological spaces. Then, the following hold:

1.  The identity function \\[1\_{X}: X \rightarrow X\\] is continuous.
2.  If \\[f: X \rightarrow Y\\] and \\[G: Y \rightarrow Z\\] are continuous, then \\[f \circ g\\] is continuous.

**Definition** (Closed): Let \\[X\\] be a topological space. We say that \\[A \subseteq X\\] is closed if \\[X \setminus A\\] is open.

**Proposition**: Let \\[X\\] be a topological space. Then, the following hold:

1.  \\[\emptyset, X\\] are closed.
2.  Any intersection of closed sets is closed.
3.  Any finite union of closed sets is closed.

**Proof**: (1) is trivial. (2) and (3) follow by De Morgan's Laws.

**Remark**: In metric spaces, we have learned that for a convergent sequence of points in a closed set, the limit of the sequence is in the set. This does not hold true in general topological spaces, however.

**Proposition**: Let \\[X, Y\\] be topological spaces and \\[f: X \rightarrow Y\\] a function. Then, \\[f\\] is continuous if and only if for every closed \\[F \subseteq Y\\], \\[f^{-1}[F]\\] is closed.

**Proof**: We first prove the forwards direction. Assume that \\[f\\] is continuous. Let \\[F\\] be a closed subset of \\[Y\\]. Thus, \\[Y \setminus F\\] is open. Meaning that \\[f^{-1}[Y \setminus F]\\] is open. Thus, \\[f^{-1}[Y \setminus F] = X \setminus f^{-1}[F]\\] is open, and so \\[f^{-1}[F]\\] is closed, as desired.

We now prove the backwards direction. Let \\[U\\] be an open subset of \\[Y\\]. Then, \\[Y \setminus U\\] is closed, so \\[f^{-1}[Y \setminus U]\\] is closed, and thus \\[f^{-1}[Y \setminus U] = X \setminus f^{-1}[U]\\] is closed. Implying that \\[f^{-1}[U]\\] is open. Since \\[U\\] is arbitrary, \\[f\\] is continuous.

Not all topological spaces are made equal.

**Definition** (Hausdorff): Let \\[X\\] be a topological space. We say that \\[X\\] is _Hausdorff_, or \\[T\_2\\], if for all \\[a, b \in X\\] such that \\[a \neq b\\], there exists open \\[U, V \subseteq X\\] such that \\[a \in U\\], \\[b \in V\\], and \\[U \cap V = \emptyset\\].

Intuitively, a Hausdorff space is one in which we can separate any two points by open sets.

**Proposition**: Let \\[M\\] be a metric space. \\[M\\] is Hausdorff.

**Proof**: Consider \\[a, b \in M\\]. Let \\[\epsilon = d(a, b) / 2\\]. Let \\[U = B\_{\epsilon}(a)\\] and \\[V = B\_{\epsilon}(b)\\]. Clearly, \\[U\\] and \\[V\\] are open. Furthermore, \\[a \in U\\] and \\[b \in V\\]. We claim that \\[U \cap V = \emptyset\\]. Consider \\[z \in U\\]. Then, \\[d(a, b) \leq d(a, z) + d(z, b)\\] meaning that

\\[
d(z, b) \geq d(a, b) - d(a, z) > d(a, b) - \epsilon = d(a, b) / 2 = \epsilon
\\]

meaning that \\[z \notin V\\], as desired.

Thus, \\[M\\] is Hausdorff.

**Remark**: Not all topologies are Hausdorff. For example, fix some set \\[X\\] and let \\[a, b \in X\\] such that \\[a \neq b\\]. Then, we may construct the topology \\[\tau = \lbrace \emptyset, \lbrace a, b \rbrace, X \rbrace\\] and note that \\[a\\] and \\[b\\] can not be separated.

**Definition** (Interior): Let \\[X\\] be a topological space and \\[A \subseteq X\\]. Then, the _interior_ of \\[A\\], \\[int(A)\\], is the set \\[\bigcup\_{B \in \tau, B \subseteq A} B\\]. Note that the interior is trivially open, as it is a union of open sets. Thus, the interior may be thought of as the largest open subset of \\[A\\].

**Remark**: Let \\[X\\] be a topological space and \\[A \subseteq X\\]. Then, if \\[A\\] is "large," it need not be that \\[int(A)\\] is "large". For example, consider \\[X = \mathbb{R}\\] with the usual metric. Then, \\[int(\mathbb{Q}) = \emptyset\\] due to the density of the reals, yet \\[\mathbb{Q}\\] is itself dense in \\[\mathbb{R}\\].

**Definition** (Closure): Let \\[X\\] be a topological space and \\[A \subseteq X\\]. The _closure_ of \\[A\\], \\[cl(A)\\], is the set \\[\bigcap\_{B \in \tau, B \supseteq A} B\\].

**Proposition**: Let \\[X\\] be a topological space and \\[A \subseteq X\\]. Then, the following hold:

1.  \\[X \setminus cl(A) = int(X \setminus A)\\].
2.  \\[int(int(A))\\].
3.  \\[cl(cl(A))\\].

**Proof**:
We only prove (1).

\\[X \setminus cl(A) \subseteq int(X \setminus A)\\]

Take \\[x \in X \setminus cl(A)\\]. Note that \\[X \setminus cl(A)\\] is an open subset of \\[X \setminus A\\], since \\[cl(A)\\] is closed and \\[cl(A) \supseteq A\\]. Thus, \\[x \in int(X \setminus A)\\].

\\[X \setminus cl(A) \supseteq int(X \setminus A)\\]

Take \\[x \in int(X \setminus A)\\]. Note that \\[int(X \setminus A)\\] is an open subset of \\[X \setminus A\\]. Thus, \\[X \setminus int(X \setminus A)\\] is a closed superset of \\[A\\]. Furthermore, \\[x \notin X \setminus int(X \setminus A)\\]. Meaning that \\[x \notin cl(A)\\]. And so, \\[x \in X \setminus cl(A)\\], as desired.

**Definition** (Basis): A basis of a topology \\[\tau\\] is a set \\[B \subseteq \tau\\] such that every set in \\[\tau\\] is the union of sets in \\[B\\].

Recall that by a prior proposition, the set of open balls in a metric space forms a basis for the metric topology.

We will typically only a topology by only some basis.

A natural question arises: given some set \\[X\\] and a family of subsets of \\[X\\], how can we determine whether this subset forms the basis of a topology? In other words, how do we know when some family of sets is a valid basis?

**Proposition**: Let \\[X\\] be a set and \\[B\\] a family of subsets of \\[X\\]. Then, \\[B\\] is a basis for some topology on \\[X\\] if and only if \\[\bigcup B = X\\] and every pairwise intersection of \\[B\\] can be represented as a union of elements of \\[B\\].

**Proof**: We first prove the forwards direction. Of course, \\[\bigcup B = X\\] since we must have that \\[X\\] can be represented as a union of elements in \\[B\\] since \\[X\\] is always an element of a topology. Furthermore, all pairwise intersections are present in the topology, and thus must be represented as a union of elements in \\[B\\].

We now prove the backwards direction. We wish to show that the set containing any union of elements in \\[B\\] forms a topology over \\[X\\]. Since \\[\bigcup B = X\\], we of course have \\[X\\] in our topology. Furthermore, the empty union results in the empty set, and thus, \\[\emptyset\\] is in our topology.

The topology is trivially closed under union, as the union of unions of elements in \\[B\\] is itself a union of elements of \\[B\\].

Finally, we show that the topology is closed under finite intersection. It suffices to show that the topology is closed under pairwise intersection by induction. Consider two sets \\[U, V\\] in our topology. Then, by definition of our topology,

\\[
U = \bigcup\_{i \in I} B\_i
\\]

and

\\[
V = \bigcup\_{j \in J} B\_j
\\]

where \\[B\_i, B\_j \in B\\].

Then,

\\[
U \cap V = \left( \bigcup\_{i \in I} B\_i \right) \cap \left( \bigcup\_{j \in J} B\_j \right) = \bigcup\_{i \in I} \bigcup\_{j \in J} B\_i \cap B\_j.
\\]

Note, each term in the right-hand side can be represented as a union of elements in \\[B\\] by hypothesis, and thus \\[U \cap V\\] is in the topology, as desired.

**Proposition**: Let \\[X\\] be a set and \\[B\\] be a basis for some topology \\[\tau\\] on \\[X\\]. The following are equivalent: for \\[A \subseteq X\\],

1.  \\[A\\] is open.
2.  For all \\[x \in A\\], \\[x \in U\\] where \\[U \in B\\], and \\[U \subseteq A\\].

**Proof**: We first prove the forwards direction. Since \\[A\\] is open, it is the union of sets in \\[B\\]. Thus, each point in \\[A\\] lives in \\[U\\] for some \\[U \in B\\].

We now prove the backwards direction. For \\[x \in A\\], let \\[U\_x \in B\\] be such that \\[x \in U\_x\\] and \\[U\_x \subseteq A\\]. Then, \\[A = \bigcup\_{x \in A} U\_x\\] and so \\[A\\] is open.

Recall the definition of Hausdorff, or \\[T\_2\\]. \\[T\_2\\] is part of a larger taxonomy regarding separation.

**Definition** (\\[T\_1\\]): Let \\[X\\] be topological space. Then, \\[X\\] is \\[T\_1\\] if for all \\[a, b \in X\\], there exists open \\[U\\] such that \\[x \in U\\] but \\[y \notin U\\].

**Proposition**: Let \\[X\\] be a topological space. Then, \\[X\\] is \\[T\_1\\] if and only if for all \\[x \in X\\], the set \\[\lbrace x \rbrace\\] is closed.

**Proof**: We first prove the forwards direction. Consider \\[x, y \in X\\]. Since \\[\lbrace y \rbrace\\] is closed, \\[U = X \setminus \lbrace y \rbrace\\] is an open set containing \\[x\\] but not \\[y\\], as desired.

We now prove the backwards direction. Consider \\[x \in X\\]. We claim that \\[X \setminus \lbrace x \rbrace\\] is open, thereby implying that \\[\lbrace x \rbrace\\] is closed. Note that for each \\[y \in X \setminus \lbrace x \rbrace\\], we can find open \\[U\_y\\] such that \\[y \in U\_y\\] but \\[x \notin U\_y\\]. Then,

\\[
X \setminus \lbrace x \rbrace = \bigcup\_{y \in X \setminus \lbrace x \rbrace} U\_y,
\\]

as desired.

**Definition** (Finer and Coarser): Let \\[X\\] be a set and let \\[\tau, \sigma\\] be topologies on \\[X\\]. Then, \\[\tau\\] is _finer_ than \\[\sigma\\] and \\[\sigma\\] is _coarser_ than \\[\tau\\] if \\[\sigma \subseteq \tau\\].

**Definition** (Homeomorphism): Let \\[X, Y\\] be topological spaces. A homemorphism between \\[X\\] and \\[Y\\] is a bijection \\[f: X \rightarrow Y\\] such that \\[A \subseteq X\\] is open if and only if \\[f[A]\\] is open. In other words, a homeomorphism is a continuous bijection whose inverse is continuous.

\\[X\\] and \\[Y\\] are said to be homeomorphic if there exists a homeomorphism between them.

Imagine that we have sets \\[X, Y\\], and a function \\[f: X \rightarrow Y\\]. We wish to construct topologies such that \\[f\\] is continuous. Intuitively, we need \\[\tau\_X\\] to be finer, and \\[\tau\_Y\\] to be coarser.

**Definition** (Subspace Topology): Let \\[X\\] be a topological space and \\[A \subseteq X\\]. Define the inclusion map \\[i: A \rightarrow X\\] via \\[i(x) = x\\]. The _subspace topology_ is the weakest topology on \\[A\\] which makes the inclusion map continuous.

**Proposition**: Let \\[X\\] be a topological space and \\[A \subseteq X\\]. Then, the subspace topology on \\[A\\] is \\[\tau\_A = \lbrace U \cap A : U \in \tau \rbrace.\\]

**Proof**: Consider open \\[U \in X\\]. Then, \\[i^{-1}[U] = U \cap A,\\] which must be open for \\[i\\] to be continuous.

Furthermore, \\[\tau\_A\\] is trivially a topology by virtue of \\[\tau\\] being a topology.

So far, we have discussed the weakest topology making a function continuous in regards to subspaces. We can generalize this notion.

**Definition** (Initial Topology): Let \\[X\\] be a set, \\[Y\\] a topological space, and \\[f\_i: X \rightarrow Y\\] a family of functions indexed by \\[i \in I\\]. The _initial topology_ on \\[X\\] is the weakest topology on \\[X\\] such that each \\[f\_i\\] is continuous.

**Definition** (Product Topology): Let \\[X, Y\\] be topological spaces. Consider the set \\[X \times Y\\]. Let \\[p: X \times Y \rightarrow X\\] via \\[p(x, y) = x\\] and \\[q: X \times Y \rightarrow Y\\] via \\[q(x, y) = y\\]. Then, the product topology is the initial topology on \\[X \times Y\\] to make \\[p\\] and \\[q\\] continuous.

What does the product topology actually look like? Let's consider the constraints our topology must have. Consider an open set \\[U \subseteq X\\]. For \\[p\\] to be continuous, we must have that \\[p^{-1}[U] = \lbrace (x, y) : x \in U \land y \in Y \rbrace\\] is open. Similarly for open \\[V \subseteq X\\].

Can such sets alone form a basis for a topology? No, since the intersection of such sets can form \\[\lbrace (x, y) : x \in U \land y \in V \rbrace\\] where \\[U, V\\] open in \\[X, Y\\] respectively.

Thus, the product topology is that formed by the basis \\[\lbrace U \times V : U \in \tau\_x \land V \in \tau\_Y \rbrace.\\]

**Definition** (Embedding): Let \\[X, Y\\] be topological spaces. An embedding of \\[X\\] into \\[Y\\] is an injective function \\[j: X \rightarrow Y\\] such that \\[j\\] is a homeomorphism from \\[X\\] to \\[j[X]\\], under the subspace topology.


## Connectedness {#connectedness}

**Definition** (Connected): Let \\[X\\] be a topological space. \\[X\\] is _connected_ if there do not exist \\[U, V \subseteq X\\] such that the following hold:

1.  \\[U, V\\] are open.
2.  \\[U, V\\] are non-empty.
3.  \\[U \cup V = X\\].
4.  \\[U \cap V = \emptyset\\].

In other words, \\[X\\] is connected if it can not be separated into two disjoint non-empty open sets.

**Definition** (Clopen): A _clopen_ set is a set that is both open and closed.

**Proposition**: Let \\[X\\] be a topological space. Then, \\[X\\] is connected if and only if its only clopen sets are \\[\emptyset, X\\].

**Proof**: We first prove the forwards direction. Assume for the sake of contradiction that there exists some clopen set \\[S \subseteq X\\]. Note that \\[S\\] is non-empty. Furthermore, \\[X \setminus S\\] is clopen as well. Then, \\[S\\] and \\[X \setminus S\\] are open sets separating \\[X\\], a contradiction since \\[X\\] is connected.

We now prove the backwards direction. Assume for the sake of contradiction that \\[X\\] is not connected. Let \\[U, V\\] be the non-empty open and disjoint sets separating \\[X\\]. Clearly, both \\[U\\] and \\[V\\] are clopen, and neither are \\[\emptyset\\] or \\[X\\] (otherwise one would be empty).

**Definition**: Let \\[X\\] be a topological space and \\[A \subseteq X\\]. Then, \\[A\\] is a connected subset of \\[X\\] if it is a connected space under the subspace topology.

**Definition**: Let \\[X\\] be a space and \\[A \subseteq X\\]. If \\[S\\] is open in \\[A\\] under the subspace topology, then we say that \\[S\\] is _relatively open_ in \\[A\\].

**Proposition**: \\[[0, 1]\\] is connected.

**Proof**: Assume for the sake of contradiction that \\[[0, 1]\\] is not connected. Then, there exist non-empty open \\[U, V\\] such that \\[U \cup V = [0, 1]\\] and \\[U \cap V = \emptyset\\].

Without loss of generality, assume that \\[0 \in U\\]. Define \\[S = \lbrace x \in [0, 1] : [0, x] \subseteq U \rbrace\\]. Let \\[p = \sup S\\]. Of course, \\[p < 1\\], otherwise \\[V = \emptyset\\].

We claim that \\[p \notin U\\]. If it were, then we could find a ball around \\[p\\] living in \\[U\\], and find an element larger than \\[p\\] in \\[S\\]. Thus, we must have that \\[p \in V\\]. But then, we could form a ball around \\[p\\] living in \\[V\\], implying that the supremum of \\[U\\] is actually smaller than \\[p\\]. Thus, there is a contradiction in either case and \\[[0, 1]\\] must be connected.

**Proposition**: Let \\[X\\] be a topological space and consider \\[x\_0 \in X\\]. Let \\[\lbrace C\_i : i \in I \rbrace\\] be a set such that each \\[C\_i\\] is a connected set where \\[x\_0 \in C\_i\\]. Then, \\[\bigcup C\_i\\] is connected.

**Proof**: Assume for the sake of contradiction that \\[\bigcup C\_i\\] is not connected. Let \\[U, V\\] be open disjoint sets separating \\[\bigcup C\_i\\].

Without loss of generality, assume that \\[x\_0 \in U\\]. Since \\[V \subseteq \bigcup C\_i\\], there exists some \\[i \in I\\] where \\[C\_i \cap V \neq \emptyset\\].

Then, \\[U \cap C\_i \neq \emptyset\\] and \\[V \cap C\_i \neq \emptyset\\], meaning that \\[U\\] and \\[V\\] separate \\[C\_i\\], a contradiction since \\[C\_i\\] is connected.

We can think that points in a topological space are "connected" to one another if there exists a connected set containing both points. We formalize this intuition below.

**Proposition**: Let \\[X\\] be a topological space. Consider the binary relation \\[\sim\\] defined such that for \\[x, y \in X\\], \\[x \sim y\\] if and only if there exists a connected set \\[C\\] such that \\[x, y \in C\\]. Then, \\[\sim\\] is an equivalence relation.

**Proof**:

1.  \\[\sim\\] is reflexive. Consider \\[x \in X\\]. Then, \\[\lbrace x \rbrace\\] is clearly a connected set. Thus, \\[x \sim x\\] with \\[C = \lbrace x \rbrace\\].
2.  \\[\sim\\] is symmetric. Consider \\[x, y \in X\\] such that \\[x \sim y\\]. Then, there exists connected \\[C \subseteq X\\] where \\[x, y \in C\\]. Thus, \\[y \sim x\\] as well.
3.  \\[\sim\\] is transitive. Consider \\[x, y, z \in X\\] such that \\[x \sim y\\] and \\[y \sim z\\]. Let \\[C\_1 \subseteq X\\] be such that \\[x, y \in C\_1\\] and \\[C\_1\\] connected. Similarly for \\[C\_2\\], except that \\[y, z \in C\_2\\]. By the prior proposition, \\[C\_1 \cup C\_2\\] is a connected set containing \\[x\\] and \\[z\\]. Thus, \\[x \sim z\\].

**Definition** (Connected Component): Let \\[X\\] be a topological space and pick \\[x \in X\\]. The _connected component_ of \\[x\\] is the equivalence class formed by the above relation \\[\sim\\]. Intuitively, the connected component of \\[x\\] is the largest connected set containing \\[x\\].

**Proposition**: Let \\[X\\] be a topological space, \\[x \in X\\], and \\[C \subseteq X\\] the connected component of \\[x\\]. Then, there does not exist a connected set \\[D \subseteq X\\] such that \\[D \supset C\\] and \\[x \in C\\].

**Proof**: Assume otherwise. Then, choose \\[y \in D \setminus C\\]. By virtue of \\[D\\], \\[x \sim y\\]. Meaning that \\[y \in C\\] by definition, a contradiction.

Thus, the connected components of \\[X\\] are maximally connected sets in \\[X\\] and partition \\[X\\].

**Proposition**: Let \\[X\\] be a topological space and \\[C \subseteq X\\] be a connected set. Then, \\[cl( C)\\] is connected.

**Proof**: Assume for the sake of contradiction that \\[cl( C)\\] is not connected. Let \\[U, V\\] be the open and disjoint sets separating \\[cl( C)\\]. If \\[U \cap C \neq \emptyset, V \cap C \neq \emptyset\\], then we are done, since then \\[U, V\\] separate \\[C\\]. Thus, assume otherwise. Without loss of generality, assume that \\[C \subseteq U\\].

Thus, \\[C \subseteq X \setminus V\\] which is closed. Meaning that \\[C \subseteq (X \setminus V) \cap cl( C)\\] is closed. Furthermore, \\[(X \setminus V) \cap cl( C)\\] is a proper subset of \\[cl( C)\\] since \\[V \cap cl( C) \neq \emptyset\\]. In particular, there is a smaller closed set containing \\[C\\] than \\[cl( C)\\], a contradiction.

**Proposition**: Let \\[X\\] be a topological space and \\[C \subseteq X\\] a connected component of \\[X\\]. Then, \\[C\\] is closed.

**Proof**: Of course, \\[C \subseteq cl( C)\\] by definition. Furthermore, \\[cl( C) \subseteq C\\] since \\[cl( C)\\] is connected and \\[C\\] is maximal. Thus, \\[cl( C) = C\\] and so \\[C\\] is closed.

**Proposition**: Let \\[X\\] be a connected set. If \\[X\\] has finitely many connected components, then each connected component is clopen.

**Proof**: By the prior proposition, each component is closed. Fix some connected component \\[C\\]. Then, \\[X \setminus C\\] is a finite union of connected components, and thus is closed, implying that \\[C\\] is open, as desired.

**Definition** (Path): Let \\[X\\] be a topological space. A _path_ for \\[x, y \in X\\] is a continuous function \\[f: [0, 1] \rightarrow X\\] such that \\[f(0) = x\\] and \\[f(1) = y\\]. A _loop_ is a path from \\[x\\] to \\[x\\].

Recall the relation we defined for connectedness. We can similarly define a relation for path-connectedness.

**Proposition**: Let \\[X\\] be a topological space. Define the binary relation \\[\sim\\] over \\[X\\] where for \\[x, y \in X\\], \\[x \sim y\\] if and only if \\[x\\] and \\[y\\] are path-connected.

**Proof**:

1.  For reflexiveness, consider the constant loop.

2.  For symmetry, consider a path \\[f\\] and define the path \\[g(x) = f(1 - x)\\].

3.  For transitivity, apply the pasting lemma.

The classes under this relation are called the path components of \\[X\\].

**Definition** (Path-Connected): Let \\[X\\] be a topological space. Then, \\[X\\] is _path-connected_ if there is only one path-connected component.

**Proposition**: Path-connected implies connected.

**Proof**: Let \\[X\\] be a path-connected topological space. Assume for the sake of contradiction that \\[X\\] is not connected. Then, there exist two non-empty open disjoint sets \\[U, V\\] separating \\[X\\]. Consider \\[x \in U\\] and \\[y \in V\\]. Since \\[X\\] is path-connected, there exists a path \\[f: [0, 1] \rightarrow X\\] between \\[x\\] and \\[y\\].

Consider the sets \\[f^{-1}[U], f^{-1}[V]\\]. Since \\[f\\] is open, both sets are open. Additionally, since \\[U, V\\] are disjoint, the two sets are disjoint. In particular, we have that these two sets separate \\[[0, 1]\\], a contradiction since it is connected.

**Definition**: Let \\[X\\] be a topological space, and \\[A \subseteq X\\]. Then, \\[A\\] is path-connected if it is path-connected under the subspace topology.

**Proposition**: Let \\[X, Y\\] be topological spaces, and \\[f: X \rightarrow Y\\] a continuous surjection. Then, \\[X\\] connected implies \\[Y\\] connected.


## Completeness {#completeness}

**Proposition**: Let \\[X\\] be a topological space and \\[A \subseteq X\\]. Then, \\[x \in cl(A)\\] if and only if for all open \\[U \ni x\\], \\[U \cap A \neq \emptyset\\].

**Proof**: We first show the forwards direction. Assume for the sake of contradiction that there exists some open \\[U \ni x\\] such that \\[U \cap A = \emptyset\\]. Then, \\[X \setminus U\\] is closed and contains \\[A\\] without containing \\[x\\], meaning that \\[x \notin cl(A)\\], a contradiction.

We now prove the backwards direction. Let \\[S\\] be a closed set such that \\[A \subseteq S\\]. It suffices to show that \\[x \in S\\]. Note that \\[X \setminus S\\] is open, and does not intersect \\[A\\]. If \\[x\\] were not in \\[S\\], and thus in \\[X \setminus S\\], we would need that \\[X \setminus S\\] intersects \\[A\\] by hypothesis, a contradiction.

**Definition** (Cauchy): Let \\[M\\] be a metric space, and \\[(x\_n)\_{n \in \mathbb{N}}\\] a sequence. The sequence is said to be _Cauchy_ if for all \\[\epsilon > 0\\], there exists a \\[N\\] such that for all \\[m, n \geq N\\], \\[d(x\_m, x\_n) < \epsilon\\].

**Proposition**: Convergent implies Cauchy.

**Proof**: By triangle inequality.

**Definition** (Complete): Let \\[M\\] be a metric space. Then, \\[M\\] is _complete_ if every Cauchy sequence in \\[M\\] is convergent.

**Proposition**: Let \\[M\\] be a metric space and \\[A \subseteq M\\]. Then,

\\[
cl(A) = \lbrace x : \exists (x\_n)\_{n \in \mathbb{N}} \subseteq M, x\_n \rightarrow x \rbrace.
\\]

**Proof**: We proceed by double containment. Denote the right-hand side with \\[S\\].

\\[cl(A) \subseteq S\\]

Consider \\[x \in cl(A)\\]. By a prior proposition, for all open \\[U \ni x\\], \\[U\\] must intersect \\[A\\].

Define the sequence \\[(x\_n)\_{n \in \mathbb{N}}\\] as follows. For \\[n \in \mathbb{N}\\], consider the ball \\[B\_{2^{-n}}(x)\\]. This ball is open and contains \\[x\\]. Thus, it intersects with \\[A\\]. Let \\[x\_n\\] be some element in the intersection.

Clearly, this sequence converges. Furthermore, the sequence is entirely contained in \\[A\\], implying that \\[x \in S\\], as desired.

\\[S \subseteq cl(A)\\]

It suffices to show that for all open \\[U \ni x\\], \\[U\\] intersects \\[A\\]. We can easily find some ball with radius \\[\epsilon\\] inside \\[U\\] that contains \\[x\\], and by definition of convergence, the ball intersects the sequence which lives in \\[A\\], as desired.

**Proposition**: Let \\[M\\] be a complete metric space and consider \\[A \subseteq M\\]. Then, the following are equivalent:

1.  \\[A\\] is complete.
2.  \\[A\\] is closed.

**Proof**: We first prove the forwards direction. To show that \\[A\\] is closed, it suffices to show that every convergent sequence converges to something in \\[A\\], i.e. \\[A\\] is its own closure by the prior proposition. This is true by definition of completeness, since all convergent sequences are Cauchy.

We now prove the backwards direction. Consider some Cauchy sequence in \\[A\\]. Since \\[M\\] is complete, this Cauchy sequence converges to something in \\[M\\]. Since \\[A\\] is closed, this must converge to something in \\[A\\] by the prior proposition.

**Definition** (Dense): Let \\[X\\] be a topological space and consider \\[A \subseteq X\\]. Then, \\[A\\] is said to be _dense_ if \\[cl(A) = X\\].

Given this definition of density, the question naturally arises: can we complete an incomplete metric space?

**Proposition**: Given a metric space \\[(M, d)\\], there exists a completion \\[(\bar{M}, \bar{d})\\] such that the following hold:

1.  \\[M\\] is dense in \\[\bar{M}\\].
2.  \\[\bar{d}\\] extends \\[d\\].
3.  \\[\bar{M}\\] is complete.

**Proof**: Details of the proof omitted, but the general idea is to consider an equivalence relation over Cauchy sequences in \\[M\\] where two Cauchy sequences are equivalent if the sequence of their index-wise distances converges to \\[0\\]. Then, construct \\[\bar{M}\\] as the set of equivalence classes over the Cauchy sequences of \\[M\\].


## Compactness {#compactness}

**Definition** (Open Cover): Let \\[X\\] be a topological space. An _open cover_ of \\[X\\] is a family of open sets \\[(U\_i)\_{i \in I}\\] such that \\[\bigcup\_{i \in I} U\_i = X\\].

**Definition** (Compact): Let \\[X\\] be a topological space. \\[X\\] is said to be _compact_ if for all open covers \\[(U\_i)\_{i \in I},\\] there exists finite \\[J \subseteq I\\] such that \\[\bigcup\_{j \in J} U\_j = X\\].

**Definition**: Let \\[X\\] be a topological space and consider \\[A \subseteq X\\]. Then, \\[A\\] is said to be compact if it is compact under the subspace topology.

**Proposition**: Let \\[X\\] be a compact space and consider \\[A \subseteq X\\]. Then, if \\[A\\] is closed, \\[A\\] is compact.

**Proof**: Consider an open cover \\[(U\_i)\_{i \in I} \supseteq A\\]. Since \\[A\\] is closed, \\[X \setminus A\\] is open. Then, \\[(X \setminus A), (U\_i)\_{i \in I}\\] form an open cover for \\[X\\]. Since \\[X\\] is compact, we can extract finite \\[J \subseteq I\\] such that \\[(X \setminus A), (U\_j)\_{j \in J}\\] cover \\[X\\]. Thus, \\[(U\_j)\_{j \in J}\\] cover \\[A\\], as desired.

**Proposition**: Let \\[X\\] be a Hausdorff topological space. Consider compact \\[C \subseteq X\\]. Then, \\[C\\] is closed.

**Proof**: It suffices to show that \\[X \setminus C\\] is open.

Fix some \\[y \in X \setminus C\\]. For each \\[x \in C\\], find open and disjoint \\[U\_x, V\_x\\] such that \\[x \in U\_x\\] and \\[y \in V\_x\\].

Clearly, \\[C\\] is covered by \\[U\_x\\]. Thus, we may find finite \\[U\_i\\] where \\[i \in I\\] that cover \\[C\\].

We now claim that the intersection of \\[V\_i\\] does not intersect \\[C\\]. Note that for each \\[x \in C\\], there exists some \\[V\_i\\] that does not include \\[x\\], implying the result.

Furthermore, the intersection of \\[V\_i\\] is open and contains \\[y\\]. Denote the intersection of \\[V\_i\\] as \\[V\_y\\]. Since the intersection is finite, \\[V\_y\\] is open.

Then, the union of \\[V\_y\\] over all \\[y\\] equals \\[X \setminus C\\] and is open, as desired.

**Proposition**: Let \\[X\\] be a compact topological space. Let \\[f: X \rightarrow Y\\] be continuous and surjective. Then, \\[Y\\] is compact.

**Proof**: Let \\[U\_i\\] where \\[i \in I\\] be an open covering of \\[Y\\]. Since \\[f\\] is continuous, \\[f^{-1}[U\_i]\\] is a family of open sets covering \\[f^{-1}[Y]\\]. Of course, \\[f^{-1}[Y] = X\\], so \\[f^{-1}[U\_i]\\] is a family of open sets covering \\[X\\]. Since \\[X\\] is compact, we can extract a finite \\[J \subseteq I\\] such that \\[f^{-1}[U\_j]\\] for \\[j \in J\\] covers \\[X\\]. Since \\[f\\] is surjective, \\[U\_j\\] covers \\[Y\\], as desired.

**Definition** (Limit Point): Let \\[X\\] be a topological space and consider \\[A \subseteq X\\]. Then, \\[x \in X\\] is a limit point of \\[A\\] if \\[x \in cl(A \setminus \lbrace x \rbrace)\\]. Equivalently, for all open \\[U \ni x\\], \\[U\\] intersects \\[A\\] somewhere other than \\[x\\].

**Proposition**: Let \\[X\\] be a topological space and \\[A \subseteq X\\]. Define \\[A'\\] to be the set of limit points of \\[A\\]. Then, \\[cl(A) = A \cup A'\\].

The above proposition implies that \\[A\\] is closed if and only if it contains its limit points.

**Definition** (Convergence): Let \\[X\\] be a topological space and \\[(x\_n)\_{n \in \mathbb{N}}\\] a sequence. Then, the sequence _converges_ to \\[x \in X\\] if for all open \\[U \ni x\\], there exists \\[N \in \mathbb{N}\\] such that for all \\[n \geq N\\], \\[x\_n \in U\\].

**Definition** (Sequentially Compact): Let \\[X\\] be a topological space. Then, \\[X\\] is _sequentially compact_ if for all sequences \\[(x\_n)\_{n \in \mathbb{N}} \subseteq X\\], there exists an infinite convergent subsequence \\[(x\_{n\_i})\_{i \in \mathbb{N}}\\]

**Proposition**: Let \\[X\\] be a metric space. Then, \\[X\\] is compact if and only if it is sequentially compact.

**Proof**: We first prove the forwards direction.

We claim that in a compact topological, every infinite set has a limit point. Let \\[X\\] be a compact topological space and \\[A \subseteq X\\] an infinite subset of \\[X\\]. Assume for the sake of contradiction that \\[A\\] does not have a limit point. Then, for all \\[x \in X\\], there exists some open \\[U\_x \ni x\\] where \\[U\_x \cap A \subseteq \lbrace x \rbrace\\]. Of course, \\[\bigcup\_{x \in X} U\_x = X\\]. Since \\[X\\] is compact, there exists finite \\[I\\] where \\[\bigcup\_{i \in I} U\_{x\_i} = X\\]. But, this is a contradiction, since we need all \\[x \in A\\], \\[U\_x\\] to cover \\[A\\] since \\[U\_x \cap A \subseteq \lbrace x \rbrace\\], and \\[A\\] is infinite.

Now consider some sequence \\[(x\_n)\_{n \in \mathbb{N}} \subseteq X\\]. Let \\[A = \lbrace x\_n : n \in \mathbb{N} \rbrace\\]. If \\[A\\] is finite, then we can easily recover a convergent finite subsequence: by the pigeonhole principle, some element must repeat infinitely, hence we can select the constant subsequence containing only this element. Thus, assume that \\[A\\] is infinite. By the prior claim, \\[A\\] must have a limit point, say \\[x \in X\\]. In other words, for all open \\[U \ni x\\], \\[U \cap A\\] contains something other than \\[x\\].

We now define a subsequence of \\[(x\_n)\_{n \in \mathbb{N}}\\] which converges to \\[x\\] as such. First, we define \\[x\_{n\_0}\\]. Consider the ball \\[B\_{1}(x)\\]. Since this ball is open, there exists some \\[x\_j\\] in this ball. Let \\[x\_{n\_0} = x\_j\\]. We then define the remainder of the sequence inductively. For \\[i \in \mathbb{N}\\], consider the ball \\[B\_{2^{-i}}(x)\\]. Since the ball is open, there exists some \\[x\_j\\] in this ball. We claim that there must exist some \\[x\_j\\] in this ball where \\[j > n\_{i-1}\\]. Assume for the sake of contradiction not. Then, there are finite points in the sequence \\[x\_n\\] where \\[n < n\_{i-1}\\]. Consider the point in this sequence with minimum distance from \\[x\\], say distance of \\[\epsilon\\]. Then, for \\[B\_{\delta}(x)\\] where \\[\delta < \epsilon\\], no point in the sequence is in the ball. A contradiction since \\[x\\] is a limit point to the sequence. Thus, we can find \\[x\_j\\] in the ball where \\[j > n\_{i-1}\\]. We then let \\[x\_{n\_i} = x\_j\\].

This sequence defined inductively then converges to \\[x\\] by construction. Furthermore, this sequence is a subsequence of our original sequence. Since our original sequence was arbitrary, we conclude that \\[X\\] is sequentially compact.

We now prove the backwards direction. Assume for the sake of contradiction that \\[X\\] is not compact. In other words, there exists an open cover \\[(U\_i)\_{i \in I}\\] of \\[X\\] that has no finite subcover.

We claim the following: there exists \\[\delta > 0\\] such that for all \\[x \in X\\], \\[B\_{\delta}(x) \subseteq U\_i\\] for some \\[i \in I\\]. If not, then consider then construct the following sequence. For \\[x\_n\\], there exists some \\[x \in X\\] such that \\[B\_{2^{-n}}(x)\\] is not contained in any \\[U\_i\\]. Let \\[x\_n\\] be such an \\[x\\].

By sequential compactness, this sequence has a convergent subsequence \\[(x\_{n\_i})\_{i \in \mathbb{N}}\\] which converges to some \\[y \in X\\].

Since \\[(U\_i)\_{i \in I}\\] is an open cover of \\[X\\], there exists some \\[i \in I\\] where \\[y \in U\_i\\]. Let \\[\epsilon > 0\\] be such that \\[B\_{\epsilon}(y) \subseteq U\_i\\]. Per the definition of convergence, let \\[N\_1\\] be such that for all \\[i \geq N\_1\\], \\[x\_{n\_i} \in B\_{\epsilon/2}(y)\\]. Then, let \\[N\_2\\] be such that \\[2^{-N\_2} < \epsilon / 2\\].

Let \\[N = \max \lbrace N\_1, N\_2 \rbrace\\]. Consider some \\[i \geq N\\]. We claim that \\[B\_{2^{-n\_i}}(x\_{n\_i}) \subseteq U\_i\\], providing a contradiction by construction of the sequence. To show this, it suffices to show that \\[B\_{2^{-n\_i}}(x\_{n\_i}) \subseteq B\_{\epsilon}(y)\\]. Consider some \\[z \in B\_{2^{-n\_i}}(x\_{n\_i})\\]. Since \\[n\_i \geq N\_2\\], \\[2^{-{n\_i}} < 2^{-N\_2} < \epsilon / 2\\]. Meaning that

\\[
d(y, z) \leq d(y, x\_{n\_i}) + d(x\_{n\_i}, z) < \epsilon / 2 + \epsilon / 2 = \epsilon
\\]

and so \\[z \in B\_{\epsilon}(y)\\], as desired. Note that \\[d(y, x\_{n\_i}) < \epsilon / 2\\] since \\[n\_i \geq N\_1\\].

Thus, we have shown that if \\[(U\_i)\_{i \in I}\\] has no finite subcover, there exists some \\[\delta > 0\\] where for all \\[x \in X\\], \\[B\_{\delta}(x) \subseteq U\_i\\] for some \\[i \in I\\].

Construct the following sequence inductively. Let \\[x\_0\\] be some \\[x \in X\\]. For \\[x\_n\\], pick some \\[x \in X \setminus \left( \bigcup\_{i=0}^{n-1} B\_{\delta}(x\_i) \right)\\]. Such an \\[x\\] must exist because if not, then there exists a finite subcover for \\[X\\] of \\[(B\_{\delta}(x))\_{x \in X}\\], which implies a finite subcover for \\[(U\_i)\_{i \in I}\\].

By construction, any pair of elements in this sequence has a distance of at least \\[\delta\\]. Implying that no convergent subsequence exists, a contradiction by the sequential compactness of \\[X\\].

The above proposition does not hold for general topological spaces.

**Definition** (Totally Bounded): Let \\[M\\] be a metric space. \\[M\\] is said to be _totally bounded_ if for all \\[\epsilon > 0\\], there exists a finite set \\[I\\] such that \\[\bigcup\_{i \in I} B\_{\epsilon}(x\_i) = M\\] where \\[x\_i \in M\\].

**Proposition**: Let \\[M\\] be a metric space. Then, the following are equivalent:

1.  \\[M\\] is compact.
2.  \\[M\\] is sequentially compact.
3.  \\[M\\] is complete and totally bounded.

**Proof**: By the previous proposition, we have already shown that (1) and (2) are equivalent.

We first show that (1) and (2) implies (3).

First, we claim that \\[M\\] is complete. Assume for the sake of contradiction that \\[M\\] were not complete. Thus, there exists a Cauchy sequence \\[(x\_n)\_{n \in \mathbb{N}}\\] which does not converge to anything in \\[M\\]. Since \\[M\\] is sequentially compact, there exists some subsequence which converges to \\[y \in M\\]. We can then easily show that the original sequence must also converge to \\[y\\], a contradiction.

We now claim that \\[M\\] is totally bounded. Fix \\[\epsilon > 0\\]. Then, \\[(B\_{\epsilon}(x))\_{x \in M}\\] forms an open cover of \\[M\\]; by compactness, we can extract a finite subcover, as desired.

We now show that (3) implies (2).

Consider some sequence \\[(x\_n)\_{n \in \mathbb{N}}\\]. To define \\[x\_{n\_0}\\], find finite \\[B\_{1}(x)\\] which covers \\[X\\]. By pigeonhole principle, there must be some \\[x \in X\\] where \\[B\_{\epsilon}(x)\\] contains infinite points in the sequence. Let \\[x\_{n\_0} = x\_n\\] where \\[x\_n \in B\_{\epsilon}(x)\\]. Then to define \\[x\_{n\_i}\\], find finite \\[B\_{2^{-i}}(x)\\] which covers \\[X\\]. By pigeonhole principle, there must exist some \\[x \in X\\] where infinite \\[x\_n\\] s.t. \\[n > n\_{i-1}\\] live in \\[B\_{2^{-i}}(x)\\]. Let \\[x\_{n\_i} = x\_n\\] where \\[n > n\_{i-1}\\] and \\[x\_n \in B\_{2^{-i}}(x)\\].

The constructed subsequence is clearly Cauchy. By completeness, the subsequence converges, as desired.


## Countability {#countability}

**Proposition**: Let \\[X\\] be a Hausdorff topological space, and \\[(x\_n)\_{n \in \mathbb{N}}\\] a sequence in \\[X\\]. Then, \\[(x\_n)\_{n \in \mathbb{N}}\\] converges to at most one point \\[x \in X\\].

**Proof**: Assume for the sake of contradiction that \\[(x\_n)\_{n \in \mathbb{N}}\\] converges to \\[x, y \in X\\] where \\[x \neq y\\].

As \\[X\\] is Hausdorff, there exists open and disjoint \\[U, V\\] where \\[x \in U\\] and \\[y \in V\\].

Per the definition of convergence, there exist \\[N\\] where for \\[n \geq N\\], \\[x\_n \in U, V\\]. A contradiction since \\[U, V\\] are disjoint.

**Proposition**: Let \\[X\\] be a general topological space, \\[A \subseteq X\\], and \\[(x\_n)\_{n \in \mathbb{N}} \subseteq A\\] such that \\[x\_n \rightarrow x\\]. Then, \\[x \in cl(A)\\].

**Proof**: Follows by using the definition of convergent sequence, as well as the fact that the closure of \\[A\\] contains points such that all open sets around the point intersect with \\[A\\].

Note, the converse of the above proposition does not hold in general topological spaces. That is, not every element in the closure of \\[A\\] must have a sequence in \\[A\\] that converges to it.

**Definition** (Neighborhood): Let \\[X\\] be a topological space and consider \\[x \in X\\]. A neighborhood of \\[x\\] is a set \\[N\\] such that \\[x \in int(N)\\]. Equivalently, some open subset of \\[N\\] contains \\[x\\].

Intuitively, the above definition of neighborhood is somewhat similar to how one is first introduced to open sets in real analysis: a set is open if every point can be contained in a ball contained in the set.

Note that the neighborhood itself does not need to be open. An _open_ neighborhood is one that is open, however.

Recall that a basis for a topological space is a set such that all open sets in the space can be formed as a union of sets in the basis. We can form a similar idea for neighborhoods.

**Definition** (Neighborhood Basis): Let \\[X\\] be a topological space and fix \\[x \in X\\]. A _neighborhood basis_ for \\[x\\] is a set \\[\mathcal{N}\\] of neighborhoods such that for all neighborhoods \\[M\\] of \\[x\\], there exists \\[N \in \mathcal{N}\\] where \\[N \subseteq M\\].

**Definition** (Open Neighborhood Basis): Let \\[X\\] be a topological space and fix \\[x \in X\\]. An _open neighborhood basis_ for \\[x\\] is a neighborhood basis for \\[x\\] consisting of only open sets.

One may wonder, why bother considering non-open neighborhoods?

**Definition** (Locally Compact): Let \\[X\\] be a topological space. \\[X\\] is said to be _locally compact_ if for all \\[x \in X\\], there exists a compact neighborhood for \\[x\\].

For example \\[\mathbb{R}^n\\] is not compact, but is locally compact.

**Definition**: Let \\[X\\] be a topological space. Then,

1.  \\[X\\] is said to be _first countable_ if for all \\[x \in X\\], \\[x\\] has a countable neighborhood basis.
2.  \\[X\\] is said to be _second countable_ if \\[X\\] itself has a countable basis.

**Proposition**: Second countable implies first countable.

**Proof**: Let \\[X\\] be a topological space, and consider \\[x \in X\\]. Then, a countable neighborhood basis is the subset of \\[X\\]'s countable basis of sets containing \\[x\\].

**Proposition**: Let \\[M\\] be a metric space. \\[M\\] is first countable.

**Proof**: Consider \\[x \in M\\]. Then, a countable neighborhood basis for \\[x\\] is \\[\lbrace B\_{2^{-n}}(x) : n \in \mathbb{N} \rbrace\\].

**Proposition**: Let \\[X\\] be a topological space that is first countable. Then, for \\[A \subseteq X\\], \\[x \in cl(A)\\] if and only if there is a sequence \\[(x\_n)\_{n \in \mathbb{N}} \subseteq A\\] such that \\[x\_n \rightarrow x\\].

**Proof**: We have already shown the backwards direction for general topological spaces. Thus, we only show the forwards direction.

Consider \\[x \in cl(A)\\].

If \\[x \in A\\], we are done, since the constant sequence of \\[x\\] converges to \\[x\\].

Thus, assume that \\[x \in cl(A) \setminus A\\]. By a prior proposition, \\[x\\] must be a limit point.

Since \\[X\\] is first countable, there exists a countable open neighborhood basis for \\[x\\], call this \\[\mathcal{N}\\].

If \\[\mathcal{N}\\] is finite, we can easily find the intersection of all \\[N \in \mathcal{N}\\], call this \\[N'\\]. We must have that \\[N'\\] itself is open, as it is the product of a finite intersection of open sets. Furthermore, since \\[x\\] is a limit point of \\[A\\], there exists some \\[y \in A \cap N'\\]. We claim that the constant sequence of \\[y\\] converges to \\[x\\]. Note that for any open \\[U \ni x\\], there must exist some \\[N \in \mathcal{N}\\] where \\[N \subseteq U\\], and so, \\[y \in N \subseteq U\\], as desired.

If \\[\mathcal{N}\\] is infinite, we can find a bijection \\[\phi: \mathbb{N} \rightarrow \mathcal{N}\\]. For \\[n \in \mathbb{N}\\], define \\[x\_n\\] as such. Let \\[N' = \bigcap\_{i=1}^{n} \phi(i)\\]. Since \\[N'\\] is the finite intersection of open sets, it must be open. Since \\[x\\] is a limit point in \\[A\\], we have that there exists \\[y \in N' \cap A\\]. Let \\[x\_n = y\\].

We now claim that the sequence converges to \\[x\\]. Consider open \\[U \ni x\\]. There must exist some \\[N \in \mathcal{N}\\] where \\[N \subseteq U\\]. Let \\[i = \phi^{-1}(N)\\]. Then, for all \\[j \geq i\\], \\[x\_j \in N \subseteq U\\], as desired.

**Definition** (Sequential): Let \\[X\\] be a topological space. Then, \\[X\\] is said to be _sequential_ if for all \\[A \subseteq X\\], \\[cl(A) = \lbrace x : \exists (x\_n)\_{n \in \mathbb{N}} \subseteq A, x\_n \rightarrow x \rbrace\\].


## Tychonoff's Theorem {#tychonoff-s-theorem}

So far, we have found that sequences act nicely in metric spaces. Under a metric space, a set is closed if and only if it is sequentially closed, and similarly, a set is compact if and only if it is sequentially compact. These results do not, however, hold under general topological spaces. Is there a generalization of sequences we can find for general topological spaces? In other words, can we "fix" these results by using some structure other than a sequence, but similar?

**Definition** (Partially Ordered Set): A _partially ordered set_ (or poset) is a set \\[S\\] with a binary relation \\[\leq\\] such that the following hold:

1.  \\[x \leq x\\] for all \\[x \in S\\].
2.  \\[x \leq y \leq z\\] implies \\[x \leq z\\] for all \\[x, y, z \in S\\].
3.  \\[x \leq y, y \leq x\\] implies that \\[x = y\\] for all \\[x, y \in S\\].

Note that in a poset, there does not necessarily need to be a relation between elements of the set, but for those elements which do have a relation, the relation acts "nicely".

**Definition** (Directed Set): A _directed set_ is a poset \\[D\\] such that for all \\[x, y \in D\\], there exists \\[z \in D\\] such that \\[x, y \leq z\\].

A simple example of a directed set is a power set ordered by inclusion, i.e. \\[U \leq V \iff U \subseteq V\\]. This is directed since for \\[U, V\\], \\[U, V \subseteq U \cup V\\].

**Definition**: Let \\[D\\] be a directed set, and \\[P\\] be some property over elements of \\[D\\]. We say that \\[P\\] _holds eventually_ if there exists some \\[x \in D\\] where for all \\[y \geq x\\], \\[P(y)\\] holds.

**Definition** (Net): Let \\[X\\] be a topological space and \\[D\\] a directed set. A _net_ in \\[X\\] is a function \\[\varphi: D \rightarrow X\\] denoted via \\[(x\_i)\_{i \in D}\\] where \\[x\_i = \varphi(i)\\].

**Definition** (Net Convergence): Let \\[X\\] be a topological space, \\[D\\] a directed set, and \\[(x\_i)\_{i \in D}\\] a net. Then, this net is said to converge to \\[x \in X\\] if for all open \\[U \ni x\\], \\[x\_i \in U\\] eventually.

**Proposition**: Let \\[X\\] be a topological space and \\[A \subseteq X\\]. Then, \\[x \in cl(A)\\] if and only if there exists some net \\[(x\_i)\_{i \in D} \subseteq A\\] that converges to \\[x\\].

**Proof**: We first show the forwards direction. Consider \\[x \in cl(A)\\]. Let \\[D\\] be all open sets \\[U \ni x\\]. Let \\[D\\] be the set of all \\[U\\], ordered such that \\[U \leq V\\] if and only if \\[V \subseteq U\\]. Define \\[x\_U\\] such that \\[x\_U \in A \cap U\\], must exist by definition of the closure. We claim that \\[(x\_U)\_{U \in D}\\] converges to \\[x\\].

Consider open \\[U \ni x\\]. Then, by definition, for all open \\[V\\] such that \\[U \leq V\\], \\[x\_V \in U\\], as desired.

**Proposition**: Let \\[X\\] be a Hausdorff topological space, \\[D\\] a directed set, and \\[(x\_i)\_{i \in D}\\] a net in \\[X\\]. Then, \\[(x\_i)\_{i \in D}\\] converges to at most one point in \\[X\\].

**Proof**: Assume for the sake of contradiction that there exist two \\[x, y \in X\\] such that \\[x \neq y\\] and \\[(x\_i)\_{i \in D}\\] converges to both \\[x\\] and \\[y\\].

Let \\[U, V\\] be open disjoint sets separating \\[x\\] and \\[y\\]. Since the net converges to both \\[x\\] and \\[y\\], there exists \\[i, j \in D\\] such that for all \\[k \geq i\\], \\[x\_k \in U\\] and for all \\[k \geq j\\], \\[x\_k \in V\\].

Then, let \\[k\\] be such that \\[i, j \leq k\\]. Then, for all \\[\ell \geq k\\], \\[x\_\ell \in U \cap V\\], a contradiction since they are disjoint.

**Proposition**: Let \\[X\\] be a topological space such that every net converges to at most one point. Then, \\[X\\] is Hausdorff.

**Proof**: Assume for the sake of contradiction that \\[X\\] is not Hausdorff, and let \\[x, y \in X\\] such that \\[x \neq y\\] and \\[x, y\\] cannot be separated.

Then, consider the directed set \\[D = \lbrace (U, V) : U, V \in \tau, x \in U, y \in V \rbrace\\] such that \\[(U\_1, V\_1) \leq (U\_2, V\_2)\\] if and only if \\[U\_2 \subseteq U\_1, V\_2 \subseteq V\_1\\].

Define the net \\[(x\_{(U, V)})\_{(U, V) \in D}\\] such that \\[x\_{(U, V)} \in U \cap V\\]. Note that \\[x\_{(U, V)}\\] must exist since \\[x, y\\] cannot be separated.

We claim that this net converges to both \\[x, y\\], providing a contradiction. We only show the result for \\[x\\].

Let open \\[U \ni x\\], and observe that for all \\[(U, X) \leq (U', V),\\] \\[x\_{(U', V)} \in U' \subseteq U\\], as desired.

**Definition** (Finite Intersection Property): A collection of sets \\[X\\] has the _finite intersection property_ if the intersection of every finite family in \\[X\\] is non-empty.

**Proposition**: Let \\[X\\] be a topological space. Then, \\[X\\] is compact if and only if every family of closed subsets \\[F\\] that has the finite-intersection property has a non-empty intersection.

**Proof**: We first show the forwards direction. Consider a family of closed subsets \\[F\\] that has the finite-intersection property. We wish to show that \\[F\\] has a non-empty intersection.

Assume for the sake of contradiction that their intersection is empty. Then, the family of open subsets \\[(X \setminus C)\_{C \in F}\\] covers \\[X\\]. By compactness of \\[X\\], there exists finite \\[C\_i\\] such that \\[(X \setminus C\_i)\_{C\_i \in F}\\] covers \\[X\\]. Implying that the finite intersection of \\[C\_i\\] is empty, a contradiction since \\[F\\] has the finite intersection property.

We now show the backwards direction. Let \\[(U\_i)\_{i \in I}\\] be an open cover of \\[X\\]. Assume for the sake of contradiction that there is no finite subcover.

Consider the family of closed sets \\[F = (X \setminus U\_i)\_{i \in I}\\]. We claim that \\[F\\] has the finite intersection property. If it did not, then it would have a finite subcover.

Since \\[F\\] has the finite intersection property, it has a non-empty intersection. Implying that \\[(U\_i)\_{i \in I}\\] is not actually a cover of \\[X\\], a contradiction.

**Definition** (Subnet): Let \\[D\\] be a directed set and \\[(x\_i)\_{i \in D}\\] a net. Then, a subnet is a directed set \\[E\\] and a function \\[h: E \rightarrow D\\] such that the following hold:

1.  \\[h\\] is order-preserving. For \\[i, j \in E\\] such that \\[i \leq j\\], \\[h(i) \leq h(j)\\].
2.  \\[h\\] is cofinal. For \\[i \in D\\], there exists \\[j \in E\\] where \\[i \leq h(j)\\].

The subnet is notated as \\[(y\_i)\_{i \in E}\\] where \\[y\_{i} = x\_{h(i)}\\].

**Definition**: Let \\[D\\] be a directed set, \\[(x\_i)\_{i \in D}\\] a net, and \\[P\\] a property over elements in the net. Then, \\[P\\] is said to hold frequently if for all \\[i \in D\\], there exists \\[j \geq i\\] such that \\[P(x\_j)\\] holds.

**Definition**: Let \\[X\\] be a topological space, \\[D\\] a directed set, and \\[(x\_i)\_{i \in D}\\] a net in \\[X\\]. Then, \\[x \in X\\] is a _cluster point_ of the net if for all open \\[U \ni x\\], \\[x\_i \in U\\] frequently.

Cluster points are the analog of limit points for nets.

**Proposition**: Let \\[X\\] be a topological space, \\[D\\] a directed set, \\[(x\_i)\_{i \in D}\\] a net in \\[X\\], and fix \\[x \in X\\]. Then, \\[x\\] is a cluster point of the net if and only if there exists a subnet converging to \\[x\\].

**Proof**: We first show the forwards direction. Let \\[E = \lbrace (i, U) : i \in D, U \in \tau, x \in U, x\_i \in U \rbrace\\] ordered such that \\[(i, U) \leq (j, V)\\] if and only if \\[i \leq j\\] and \\[V \subseteq U\\].

We claim that \\[E\\] is directed. Consider \\[(i, U), (j, V) \in E\\]. Then, there must exist \\[k \geq i, j\\]. Observe that \\[U \cap V\\] is open containing \\[x\\]. Note that since \\[x\\] is a cluster point, there exists \\[\ell \geq k\\] such that \\[x\_{\ell} \in U \cap V\\]. Then, \\[(\ell, U \cap V)\\] is greater than both elements.

Now consider \\[h: E \rightarrow D\\] such that \\[h(i, U) = i\\]. Of course, \\[h\\] is order preserving. Furthermore, \\[h\\] is cofinal since for \\[i \in D\\], \\[i \leq h(i, X)\\].

Observe that by definition, this subnet converges to \\[x\\].

We now show the backwards direction. Let \\[i \in D\\]. Fix open \\[U \ni x\\]. By cofinality of \\[h\\], there exists \\[j \in E\\] such that \\[i \leq h(j)\\]. Since the subnet converges to \\[x\\], there exists \\[k \geq j\\] such that \\[y\_k \in U\\]. Then, \\[i \leq h(j) \leq h(k)\\] and \\[x\_{h(k)} \in U\\]. Since \\[i\\] is arbitrary, \\[y\\] is a cluster point to the net.

**Proposition**: Let \\[X\\] be a topological space. Then, \\[X\\] is compact if and only if every net in \\[X\\] has a convergent subnet.

**Proof**: We first prove the forwards direction. Consider a directed set \\[D\\] and a net \\[(x\_i)\_{i \in D} \subseteq X\\].

It suffices to show that \\[(x\_i)\_{i \in D}\\] has a cluster point, by a prior proposition.

Assume for the sake of contradiction that \\[(x\_i)\_{i \in D}\\] has no cluster point. In other words, for all \\[x \in X\\], there exists open \\[U\_x \ni x\\] such that there exists some \\[i \in D\\] where for all \\[j \geq i\\], \\[x\_i \notin U\_x\\].

Note that \\[(U\_x)\_{x \in X}\\] forms an open cover for \\[X\\]. Thus, we can extract a finite subcover \\[(U\_{x\_j})\_{j \in J}\\], where \\[J\\] is finite.

Let \\[i\_j\\] be such that for all \\[i \geq i\_j\\], \\[x\_i \notin U\_{x\_j}\\]. Then, find \\[k\\] such that \\[k \geq i\_1, i\_2, \dots, i\_j\\] and observe that \\[x\_k \notin U\_{x\_j}\\] for all \\[j\\], a contradiction.

We now prove the backwards direction. Let \\[F\\] be a family of closed sets with the finite intersection property. Define \\[D\\] to contain all finite intersections of sets in \\[F\\], ordered by inclusion. For \\[S \in D\\], let \\[x\_S \in S\\].

We can extract a convergent subnet \\[(y\_i)\_{i \in E}\\] and \\[h: E \rightarrow D\\] which converges to \\[x \in X\\].

We claim that \\[x\\] is in the intersection of \\[F\\]. It suffices to show that for each \\[C \in F\\], \\[x \in C\\].

Since \\[C\\] is closed, it suffices to show that for all open \\[U \ni x\\], \\[U \cap C \neq \emptyset\\].

Consider \\[U \ni x\\]. By cofinality of \\[h\\], there exists \\[i \in E\\] such that \\[h(i) \subseteq C\\]. Since the subnet converges to \\[x\\], there exists \\[j \geq i\\] such that \\[h(j) \subseteq h(i) \subseteq C\\] and \\[h(j) \cap U \neq \emptyset\\]. Thus, \\[C \cap U \neq \emptyset\\], as desired.

We now shift our attention towards arbitrary products of topological spaces.

**Proposition**: Let \\[(X\_i)\_{i \in I}\\] be a family of topological spaces, and \\[X = \prod\_{i \in I} X\_i\\] their product. Assign \\[X\\] the initial topology such that for all \\[\pi\_i: X \rightarrow X\_i\\] via \\[\pi\_i((x\_i)\_{i \in I}) = x\_i\\], \\[\pi\_i\\] is continuous. Then, a basis for the topology on \\[X\\] is the following:

\\[
\prod\_{i \in I} U\_i \subseteq \prod\_{i \in I} \tau\_i
\\]

and the set

\\[
\lbrace i : U\_i \neq X\_i \rbrace
\\]

is finite.

**Proof**: First note that the above basis is a valid basis, as it is closed under finite intersection.

Now consider some open \\[U\_i \in \tau\_i\\]. For \\[\pi\_i\\] to be continuous, \\[\pi\_i^{-1}[U\_i]\\] must be open.

Implying that \\[X\\] must have a topology in which:

for any open \\[U\_i\\], \\[\prod\_{j \in I \setminus \lbrace i \rbrace} X\_i \times U\_i\\] must be open.

In any topology containing such open sets, we have that all sets where a finite number of \\[i \in I\\] are open sets in \\[X\_i\\], and all else are \\[X\_i\\] by finite intersection, leading us to exactly our basis.

Our goal is to prove Tychonoff's theorem, which states the following:

**Proposition** (Tychonoff's Theorem): Let \\[(X\_i)\_{i \in I}\\] be a family of compact topological spaces. Then, \\[X = \prod\_{i \in I} X\_i\\] is compact.

We are actually not currently able to prove Tychonoff's theorem with our current machinery. Let's examine why.

We begin with a _false_ start to Tychonoff's theorem.

Consider a net \\[((x\_i)\_{i \in I, j})\_{j \in D} \subseteq X\\]. Since each \\[X\_i\\] is compact, there exists a cluster point \\[y\_i\\] for the net \\[(x\_{i, j})\_{j \in D}\\]. We can then try to prove that \\[(y\_i)\_{i \in I}\\] is a cluster point for our original net, but we will fail due to the weakness of occuring _frequently_. More specifically, if I find some \\[j\\] such that \\[x\_{i, j} = x\_i\\] for some component \\[i \in I\\], there is no guarantee that \\[x\_{k, j} = x\_k\\] for \\[k \in I \setminus \lbrace i \rbrace\\].

For the remainder of this section, our goal will be to develop the machinery that will enable us to prove Tychonoff's, then use it to prove the theorem.

**Proposition**: Let \\[(X\_i)\_{i \in I}\\] be a family of topological spaces, and let \\[X\\] be their product with the usual product topology. Consider a directed set \\[D\\] and a net \\[((x\_{i, j})\_{i \in I})\_{j \in D}\\]. Then, the net converges to \\[(x\_i)\_{i \in I} \in X\\] if and only if for all \\[i \in I\\], the net \\[(x\_{i, j})\_{j \in D}\\] converges to \\[x\_i\\].

**Proof**: We first show the forwards direction. Assume that the net \\[((x\_{i, j})\_{i \in I})\_{j \in D}\\] converges to \\[(x\_i)\_{i \in I}\\].

Fix open \\[U \ni (x\_i)\_{i \in I}\\] such that \\[U\_i\\] is open---we can do so by the basis of the topology on \\[X\\]. Since the net converges, find \\[j \in D\\] such that for all \\[k \geq j\\], \\[(x\_{i, k})\_{i \in I} \in U\\]. Implying that \\[x\_{i, k} \in U\_i\\]. Implying that the net \\[(x\_{i, j})\_{j \in D}\\] converges to \\[x\_i\\], as desired.

We now show the backwards direction. Assume that for all \\[i \in I\\], \\[(x\_{i, j})\_{j \in D}\\] converges to \\[x\_i\\]. We wish to show that \\[((x\_{i, j})\_{i \in I})\_{j \in D}\\] converges to \\[(x\_i)\_{i \in I}\\].

Consider some open \\[U \ni (x\_i)\_{i \in I}\\]. In particular, it suffices to only consider \\[U\\] in the basis. Recall the basis we showed for \\[X\\]: let \\[J \subseteq I\\] be the finite set \\[J\\] such that for all \\[j \in J\\], \\[U\_j \neq X\_j\\]. Note that each \\[U\_j\\] is open in \\[X\_j\\].

Fix \\[k \in D\\]. For each \\[j \in J\\], let \\[k\_j \in D\\] be such that \\[k\_j \geq k\\] and for all \\[\ell \geq k\_j\\], \\[x\_{j, \ell} \in U\_j\\]. Of course, \\[k\_j\\] exists by the definition of convergence. Since there are finite \\[k\_j\\], let \\[\ell \in D\\] be such that \\[\ell \geq k\_j\\] for all \\[j \in J\\].

We claim that for all \\[\ell' \geq \ell\\], \\[(x\_{i, \ell'})\_{i \in I} \in U\\]. Note that for \\[i \in I \setminus J\\], \\[x\_{i, \ell'} \in X\_i = U\_i\\]. For \\[i \in J\\], \\[x\_{i, \ell'} \in U\_i\\] by construction of \\[\ell'\\].

Thus, our net converges to \\[(x\_i)\_{i \in I}\\], as desired.

The above proposition seems odd: we have essentially shown equivalence between convergence and pointwise convergence, a result that is typically false in different contexts (e.g. convergence of functions). Here, we were able to exploit the finite property of the basis of open sets in \\[X\\].

**Definition** (Ultranet): Let \\[X\\] be a topological space, \\[D\\] a directed set, and \\[(x\_i)\_{i \in D}\\] a net. Then, the net is an ultranet if for all \\[A \subseteq X\\], either \\[x\_i \in A\\] eventually, or \\[x\_i \notin A\\] eventually.

Note that by directedness of \\[D\\], you cannot be in and not in \\[A\\] eventually.

**Proposition**: Let \\[X\\] be a topological space, \\[D\\] a directed set, \\[(x\_i)\_{i \in D}\\] an ultranet in \\[X\\], and \\[A \subseteq X\\]. Then, \\[x\_i \in A\\] frequently if and only if \\[x\_i \in A\\] eventually.

**Proof**: Note that the backwards direction follows directly by the definition of eventual and frequently. Thus, we only show the forwards direction.

Assume that \\[x\_i \in A\\] frequently. Since the net is an ultranet, either \\[x\_i \in A\\] eventually or \\[x\_i \notin A\\] eventually. But, if \\[x\_i \in A\\] frequently, we cannot have \\[x\_i \notin A\\] eventually. Meaning that \\[x\_i \in A\\] eventually,  as desired.

By the prior proposition, for an ultranet, a point is a cluster point if and only if the ultranet converges to it.

**Proposition**: Let \\[X, Y\\] be topological spaces, \\[D\\] a directed set, \\[(x\_i)\_{i \in D}\\] an ultranet in \\[X\\], and \\[f: X \rightarrow Y\\] a function. Then, \\[(f(x\_i))\_{i \in D}\\] is an ultranet in \\[Y\\].

**Proof**: Consider \\[A \subseteq Y\\]. Per definition of ultranet, either \\[x\_i \in f^{-1}[A]\\] eventually, or \\[x\_i \notin f^{-1}[A]\\] eventually. Without loss of generality, assume the former. Then, \\[f(x\_i) \in A\\] eventually, as desired.

We will now work towards proving that any net has an ultra subnet, which in turn will allow us to prove Tychonoff's.

**Proposition** (Chain): Let \\[\mathbb{P}\\] be a poset. A _chain_ on \\[\mathbb{P}\\] is a subset \\[S \subseteq \mathbb{P}\\] such that for all \\[x, y \in S\\], either \\[x \leq y\\] or \\[y \leq x\\].

A chain \\[S\\] is _bounded_ if there is \\[y \in \mathbb{P}\\] such that for all \\[x \in S\\], \\[x \leq y\\].

**Proposition** (Zorn's Lemma): Let \\[\mathbb{P}\\] be a poset such that every chain is bounded. Then, for every \\[x \in \mathbb{P}\\], there exists \\[y \in \mathbb{P}\\] such that \\[x \leq y\\] and \\[y\\] is maximal, i.e. there does not exist \\[z \in \mathbb{P}\\] where \\[y \leq z\\] and \\[y \neq z\\].

**Definition** (Filter): Let \\[X\\] be a set. A _filter_ on \\[X\\] is a set \\[F\\] of subsets of \\[X\\] such that the following hold:

1.  If \\[A \in F\\], and \\[A \subseteq B \subseteq X\\], then \\[B \in F\\].
2.  If \\[A, B \in F\\], then \\[A \cap B \in F\\].
3.  \\[\emptyset \notin F, X \in F\\].

Intuitively, a filter defines sets that are large. (1) states that a superset of a large set is large. (2) states that sets are so large that their intersection is large. (3) states that the empty set must not be large, but the entire set must be large.

**Proposition**: Let \\[X\\] be a set and \\[F\\] a filter on \\[X\\]. Then, for \\[A \subseteq X\\], \\[X \setminus A \notin F\\] if and only if \\[A \cap B \neq \emptyset\\] for all \\[B \in F\\].

**Definition** (Ultrafilter): A filter \\[F \subseteq X\\] is an _ultrafilter_ if for all \\[A \subseteq X\\], either \\[A \in F\\] or \\[X \setminus A \in F\\].

**Proposition**: Any net has an ultra subnet.

**Proof**: Let \\[X\\] be a topological space. Let \\[\mathbb{P}\\] be the set of filters on \\[X\\], ordered by inclusion, i.e. \\[F\_1 \leq F\_2 \iff F\_1 \subseteq F\_2\\]. Of course, \\[\mathbb{P}\\] is a poset.

Let \\[S\\] be a chain of \\[\mathbb{P}\\]. Note that the chain is bounded by \\[\bigcup S\\]. It is not difficult to verify that \\[\bigcup S \in \mathbb{P}\\].

Thus, we can apply Zorn's to \\[\mathbb{P}\\]. We claim that a maximal filter \\[F\\] is an ultrafilter (in fact, they are equivalent, but we do not need this result). Assume not. Let \\[F^{+} = \lbrace S \subseteq X : X \setminus S \notin F \rbrace\\], i.e. the set of all sets which are not small.

Note that \\[F\\] is an ultrafilter if and only if \\[F = F^{+}\\].

Clearly, \\[F \subseteq F^{+}\\]. We thus need to show that for a maximal filter \\[F\\], \\[F^{+} \subseteq F\\].

Consider \\[S \in F^{+}\\]. Assume for the sake of contradiction that \\[S \notin F\\]. Construct \\[G = \lbrace T \subseteq X : \exists A \in F, A \cap S \subseteq T \rbrace\\]. \\[G\\] is a filter containing \\[F\\], contradicting the maximality of \\[F\\].

Thus, maximality implies ultrafilter.

Now consider a topological space \\[X\\], and a net \\[(x\_i)\_{i \in D}\\]. Then, there is a natural filter associated with the net: \\[F = \lbrace A \subseteq X : x\_i \in A \text{ eventually} \rbrace\\].

By Zorn's, there is a maximal filter \\[U\\] such that \\[F \subseteq U\\]. \\[U\\] is an ultrafilter.

Let \\[E = \lbrace (i, A) : i \in D, A \in U, x\_i \in A \rbrace\\]. Order \\[E\\] such that \\[(i, A) \leq (j, B) \iff i \leq j \land B \subseteq A\\]. Let \\[h: E \rightarrow D\\] via \\[h(i, A) = i\\]. Of course, \\[h\\] is order-preserving and cofinal.

Observe that this subnet is an ultranet by construction.

With this result in hand, we can now prove Tychonoff's theorem.

**Proof** (Tychonoff's Theorem): Let \\[(X\_i)\_{i \in I}\\] be a family of compact spaces and \\[X\\] their product with the product topology. To show that \\[X\\] is compact, it suffices to show that every net has a convergent subnet. Consider some net. By the prior proposition, the net has an ultra subnet. We claim that this ultra subnet converges. It suffices to show that each component of the subnet converges, by a prior proposition. Note that the component of an ultra subnet is itself an ultranet. To show that the component converges, it thus suffices to show that the component has a cluster point. By definition of compactness, every net has a convergent subnet. Implying that every net in a compact space has a cluster point. Meaning that the ultra subnet component has a cluster point and thus converges, as desired.
