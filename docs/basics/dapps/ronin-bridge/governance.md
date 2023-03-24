---
description: Governance of Ronin Bridge
---

# Validator governance
The governance process is conducted via a decentralized voting mechanism. In Ronin, each Governing Validator has a corresponding governor account. The governors are empowered to vote for proposals such as: adding/removing governing validators, upgrading contracts, changing thresholds, etc.

A governor can create a new proposal for other governors to vote on. After 70% of the governors approve the proposal, the change can be applied.

![Governance flow](<./assets/governance.png>)

The governance voting method is serial by design: only one governance vote can be held at a time, and that vote must be completed before moving to a new vote. One way to conceptualize the governor is as a cold wallet while the validator can be thought of as a hot wallet.

The governor credentials are ideally stored inside a hardware wallet and should only be used on the occasions when a vote is needed. Doing so significantly reduces the risk of attackers getting access to the validator nodes, and brings down the overall risk of network exploitation.
