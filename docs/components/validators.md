---
description: >-
  Validators are responsible for validating transactions and generating blocks,
  ensuring the network’s security and the consistency of the ledger.
sidebar_position: 1
---

# Validators

## Node recognition

The Ronin nodes must have a validator list so they can specify which validator will generate the next block. There is a mechanism executed every 30 minutes to sync the validator list from a contract named `SidechainValidator`. When we want to add or remove a validator, this contract is modified.

## Validator responsibilities

Validators are in charge of:

* Generating blocks during their turn.
* Helping other validators generate blocks when they miss their turn.
* Acknowledging deposit and withdrawal events to facilitate asset assets transfers.
* Updating validator events.
* Updating effective threshold events.

### Generating blocks

Whenever a block is generated, the next validator has to validate incoming transactions and generate a new block.

The block generated by the designated validator has a larger difficult weight. If the designated validator can not produce a block, the other validators will generate a new block. In this case, that block will have a smaller difficult weight. These difficult weights help nodes have additional facilities to reorganize in case the chain is forked.

### Acknowledging events

The validators have to acknowledge every event related to the transfer gateway and validator contract.

The validators acknowledge the deposit event and withdrawal event to facilitate asset transferring. In the SidechainValidator contract, there is a threshold setting indicating that an event needs to have at least that ratio of acknowledgment from validators, whether it is adding or removing validators, depositing or withdrawing assets, or also updating that defined threshold.

## Become a validator

Follow [Become a validator](../validator/become-validator.mdx).