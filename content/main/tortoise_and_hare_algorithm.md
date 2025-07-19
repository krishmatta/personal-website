---
title: "Tortoise and Hare Algorithm"
author: ["Krish Matta"]
date: 2025-07-19T00:00:00-04:00
lastmod: 2025-07-19T00:00:00-04:00
draft: false
---

The Tortoise and Hare algorithm is an algorithm used to determine if a linked list has a cycle in linear time and constant space.

The algorithm maintains two pointers, one which moves normally (tortoise), and one which moves at twice the speed (hare). If the pointers ever meet, then a cycle exists. If either pointer reaches the end of the list, then no cycle exists.

In Python:

```python
def tortoise_and_hare(head):
  tortoise = hare = head
  while (hare is not None) and (hare.next is not None):
    tortoise = tortoise.next
    hare = hare.next.next
    if tortoise == hare:
      return True # Pointers meet, exists cycle
  return False # End found, no cycle exists
```


## Proof {#proof}

If the linked list does not have a cycle, then the hare will reach the end first and the algorithm returns false.

If the linked list does have a cycle of length \\(k\\), note that no pointer can leave the cycle once entered. Hence, at some point, both pointers must be in the cycle. Since the hare moves at twice the speed of the tortoise, each iteration reduces the distance between the two pointers by 1 (think of the hare as being behind the tortoise once in the cycle). Thus, the two pointers will eventually meet at a distance of 0 and the algorithm returns true.
