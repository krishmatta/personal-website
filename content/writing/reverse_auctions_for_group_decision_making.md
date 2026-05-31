---
title: "Reverse Auctions for Group Decision-Making"
author: ["Krish Matta"]
date: 2025-02-25T00:00:00-05:00
lastmod: 2025-02-25T00:00:00-05:00
draft: false
---

I recently faced a dilemma with a group of friends in which [auction theory](https://en.wikipedia.org/wiki/Auction_theory) provided a nice solution to ensure everyone's satisfaction. Due to its elegance and potential application to similar coordination problems, I detail the solution below as well as some intuition for why it works.


## Scenario {#scenario}

You and \\(n-1\\) friends are traveling to Spain next week. Due to unforeseen circumstances, the hotel is booked for only \\(n-1\\) people, hence one person must find other housing. However, because of the short-term notice as well as money constraints, the only option is a hostel where that person must live with others they do not know. No one in the group is eager to live in the hostel as the hotel is particularly nice. How can we fairly pick the hostel-goer?


## Intuition {#intuition}

If asked to perform something unpleasant, every person has a minimum amount of compensation they would want in order to perform said task. Thus, we can think to solve the dilemma by providing money to the hostel-goer as consolation. Under this framework, we must decide who is picked to be the hostel-goer and how much compensation they should receive while respecting everyone's interests. A flawed system would allow the hostel-goer to demand compensation exceeding what hotel-stayers are willing to pay.

Interestingly, auction theory provides a solution that guarantees satisfaction for all. In particular, we can think of the scenario as a reverse auction. In a reverse auction, the typical roles are reversed: there is one buyer and several sellers. The sellers compete to sell their good to the buyer. The scenario can be framed as a reverse auction by thinking of everyone in the group as a seller, selling away their right to stay in the hotel. The buyer is the collective group, buying away someone's right to stay in the hotel.

The high-level idea is to pick the hostel-goer through some reverse auction system, providing them with compensation. The remaining hotel-stayers evenly split the payout of the hostel-goer's compensation.


## First-Price Sealed-Bid Reverse Auction {#first-price-sealed-bid-reverse-auction}

The reverse auction can be executed via a first-price sealed-bid reverse auction. Essentially, every person in the group writes the _minimum compensation they need to stay in the hostel_ on a paper slip. This slip is their bid to sell their right to the hotel. Every person submits their slip to a box, while keeping their bid hidden. After everyone submits their bid, the slips are inspected to determine the lowest bidder. The lowest bidder is deemed the hostel-goer, and the remaining \\(n - 1\\) group evenly splits paying the hostel-goer's compensation.

A digression: depending on the group of people, the minimum compensation may be very high. In the case where it is higher than the price of a hotel room, it's obviously a better choice to pick the hotel room.


## Satisfaction Guarantees {#satisfaction-guarantees}

Assuming that everyone is truthful in bidding, the above system can be shown to be "satisfying" in that every person is satisfied at the end. We can inspect the satisfaction of every person at the end of the auction.


### Hostel-Goer {#hostel-goer}

The hostel-goer is satisfied. Yes, they must live in the hostel, but they are receiving the minimum compensation they asked for to live in the hostel. If they feel unsatisfied, then the compensation they wrote on the slip does not match their true desired compensation.


### Hotel-Stayers {#hotel-stayers}

Every hotel-stayer is satisfied, assuming they are fair. A fair person who would need \\(x\\) dollars to stay in the hostel should understand why the hostel-goer needs \\(y\\) dollars to stay in the hotel, where \\(y < x\\). If not, then this person is unfair; they expect different standards between themself and the hostel-goer. Thus, assuming fairness, every hotel-stayer should be satisfied in paying \\(y / (n - 1) < x\\) dollars to the hostel-goer.


## Incentive Compatibility {#incentive-compatibility}

As with all first-price auctions, the above mechanism is unfortunately not incentive compatible, meaning that people are not incentivized to bid their true value. Instead, group members are incentivized to "shade upwards," in which they bid higher than their true desired compensation in an attempt to increase their payout, if they were the lowest bidder.

Unfortunately, this bidding strategy can lead to an inefficient allocation. It is very possible for the person with the true minimum required compensation to shade upwards enough such that someone else is picked to be the hostel-goer. In simpler terms, the person who is "most okay" with living in the hostel is not actually chosen to be in the hostel, a clear shortcoming of this approach.

A typical solution to amending the incentive incompatibility of a first-price auction is to instead use a Vickrey auction. Everything proceeds as above, but in the end, the hostel-goer is _instead paid the compensation of the second lowest bid_.

One can show that everyone remains satisfied in this reverse Vickrey auction, but due to the unique circumstances, it is actually also incentive incompatible, contrary to what is typically expected of a Vickrey auction. In particular, by paying out the value of the second minimum bid, group members are now encouraged to shade downwards. In the event that they are selected to be a hostel-goer, shading downwards has no effect on their compensation. In the event that they are a hotel-stayer, shading downwards decreases the amount of compensation they would need to pay out. Hence, people are still not incentivized to bid their true value.

Unfortunately, creating an incentive compatible mechanism is quite difficult and I haven't yet figured out a way to do so, or if it is even possible. I suspect that randomization is required. In the meanwhile, I recommend the first-price auction as it incurs less cost on the hotel-stayers.


## Practicality {#practicality}

Auctions only work if everyone is familiar with the rules. Hence, if you were to actually employ this in some real-life scenario, I highly recommend you outline the exact rules of the auction in your initial proposal. Otherwise, people won't properly bid and the resulting allocation is inefficient. The above analysis also assumes that everyone is rational, thus it's a good idea to give some time to people to think about their decision and the rules of the auction rather than rush them.
