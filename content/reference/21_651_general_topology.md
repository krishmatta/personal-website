---
title: "21-651: General Topology"
author: ["Krish Matta"]
date: 2024-10-21T00:00:00-04:00
lastmod: 2024-10-22T00:00:00-04:00
tags: ["draft"]
draft: false
---

My notes of 21-651: General Topology in the Fall 2024 semester taught by James Cummings.


## Review {#review}

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
