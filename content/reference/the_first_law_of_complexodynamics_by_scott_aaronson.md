---
title: "The First Law of Complexodynamics by Scott Aaronson"
author: ["Krish Matta"]
date: 2024-11-23T00:00:00-05:00
lastmod: 2024-12-04T00:00:00-05:00
draft: false
---

## Motivation {#motivation}

Entropy is a measure of the disorder in a system. The higher the entropy, the greater the disorder. The second law of thermodynamics states that the entropy of any closed system will always increase with time, until it reaches some maximum value, at which point it plateaus.

During Scott's time at the "Setting Time Aright" conference, the opening speaker Sean Caroll made the observation that the _complexity_ of a system seems to peak in the middle of the timeframe while _entropy_ always increases. Here, we are using an intuitive notion of complexity (we have not yet defined it). An illustrative example of this phenomonenon is that of a glass with two layers of liquids, the top milk, and the bottom coffee. We can observe the system at three states. The initial state, in which the liquids are cleanly separated, has low entropy and low complexity. The final state, in which the liquids are completely mixed together, has high entropy and low complexity. A middle state, in which tendrils of the milk float upwards into the coffee has medium entropy (per the second law) and high complexity.

The point of this post is to formalize this notion of complexity via theoretical computer science.


## Warm-Up {#warm-up}

We begin by defining the notion of entropy via [Kolmogrov Complexity]({{< relref "../main/kolmogrov_complexity.md" >}}).

It is not immediately obvious how to do so. A first attempt may be to define the entropy of a state as its Kolmogrov complexity. But for deterministic systems, this notion is flawed: any intermediate state \\[s\\] can be described by only the initial state \\[c\\] and the number of time steps \\[t\\]. Meaning that Kolmogrov complexity scales with \\[|c| + \log t\\], slower than we'd expect for entropy.

We can solve this issue in two ways. One is to consider only stochastic systems. As our Turing machine must output the exact state, we would have to specify the decision of each random call to produce our intermediate state, resulting in polynomial growth with respect to time as we'd desire. A more interesting solution is to specify a computational bound on our Turing machine. Rather than define complexity to be the minimum length of any Turing machine outputting our string \\[x\\] (i.e. exactly the Kolmogrov complexity), we can define complexity to be the minimum length of any Turing machine outputting string \\[x\\] in \\[T(|x|)\\] time, where \\[T\\] is some fixed function. Here, we can no longer simulate states as we did earlier due to the resource bound. We will see this second solution be reused later.


## Defining Complexity {#defining-complexity}

To avoid confusion with Kolmogrov complexity, we will now refer to complexity as "complextropy". To define complextropy formally, we will use the idea of _sophistication_.

The idea of sophistication came about when Kolmogrov made the following observation: despite being produced in a simple, yet non-deterministic, process, a uniformly random string has high Kolmogrov complexity due to its lack of structure. How can we define a notion in which uniformly random strings are considered "simple"?

Let \\[S\\] be a set of \\[n\\] bit strings, \\[K(S)\\] be the number of bits in the shortest computer program that outputs the elements of \\[S\\] then halts (i.e. how compressible is \\[S\\]), and for \\[x \in S\\], \\[K(x | S)\\] the length of the shortest program that outputs \\[x\\] given an oracle to check membership in \\[S\\] (i.e. how much further information is necessary to specify \\[x\\] given \\[S\\]). Then, the _sophistication_ of \\[x\\], or \\[Soph(x)\\], is the smallest possible value of \\[K(S)\\] over all sets \\[S\\] such that:

1.  \\[x \in S\\]
2.  \\[K(x | S) \geq \log\_2(|S|) - c\\] for some constant \\[c\\].

Constraint (1) is intuitive. Constraint (2) is less so, but it essentially states that all of the non-random information in \\[x\\] can be summarized by saying that \\[x\\] is in \\[S\\].

Thus, \\[Soph(x)\\] is the shortest length of a program that describes not necessarily \\[x\\] itself, but a set \\[S\\] of which \\[x\\] is a random or generic member of, hence handling the uniformly random string case.

We can attempt to define the complextropy of an intermediate state \\[s\\] of some system as its sophistication. But we will quickly find that we run into the same issue as before: in any system, deterministic or stochastic, we can easily specify the set \\[S\\] of which \\[s\\] is a random element of by defining \\[S\\] to be all states that can be achieved starting at the initial state \\[c\\] and taking \\[t\\] time steps. Thus, the sophistication scales with \\[|c| + \log t\\], not what we'd hope for complextropy.

To solve this issue, we can apply the same fix from before: _resource bound the Turing machine_. For example, we can enforce that the complextropy of an \\[n\\] bit string \\[x\\] is instead the following. The sophistication of \\[x\\] is the minimum length of a computer program that outputs a uniformly random sample of some set \\[S\\] in \\[T(|x|)\\] time where:

1.  \\[x \in S\\].
2.  Any computer program that outputs \\[x\\] in \\[T(|x|)\\] time, given an oracle that provides independent and uniform samples from \\[S\\], has at least \\[\log\_2(|S|) - c\\] bits for some constant \\[c\\].

Here, \\[T(|x|)\\] must be a fixed function and acts as our resource bound. Additionally note that we now let our program output a uniformly random sample of \\[S\\] rather than all elements of \\[S\\] as before.

We conjecture that the above definition of complextropy will act as we wish: low at the initial and final states, high for intermediate states. Unfortunately, this is difficult to prove theoretically, but we could show it empirically via simulations and heuristics.
