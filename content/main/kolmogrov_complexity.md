---
title: "Kolmogrov Complexity"
author: ["Krish Matta"]
date: 2024-12-04T00:00:00-05:00
lastmod: 2024-12-04T00:00:00-05:00
draft: false
---

Kolmogrov complexity is the length of the most compressed version of a string. Formally, the Kolmogrov complexity of a string \\[x\\] is defined to be the minimum length of any Turing machine which outputs the string \\[x\\].

Intuitively, Kolmogrov complexity is correlated to the _structure_ of a string. Strings with more structure can be described by shorter programs. Take the example of strings "ababab" and "aslkdf". The Kolmogrov complexity of the first string is much lower than that of the second string due to its structure. A Turing machine that outputs the former string is `return "ab" * 3`, whereas it is difficult to exploit any structure in the latter, hence the Turing machine `return "aslkdf"`. Note that these machines only serve as an example, and are not necessarily the minimal Turing machines for either string.
