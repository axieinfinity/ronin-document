---
description: Run a Ronin mainnet validator node from a Docker image.
---

# Run a validator node
This guide demonstrates how to run a Ronin mainnet validator node from a Docker image.

## Prerequisites
### Install Docker
* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose plugin](https://docs.docker.com/compose/install/)

### Review system requirements
Recommended system requirements for running a Ronin mainnet node:
* 8-core CPU
* 32 GB RAM
* 700 GB high-speed SSD
* AMD64 architecture

These requirements, however, are not future-proof because Ronin data size grows over time.
### Generate a key
Generate a private key for your validator node by following the steps in [Generate keys](/docs/node-operators/generate-keys). You will need this key later in the process.

## Install Ronin node 
1. Set up directories:

Create a node directory:

```
mkdir ~/ronin
```

Go to the newly created directory:

```
cd ~/ronin
```

Create a chain data directory:

```
mkdir -p chaindata/data/ronin
```

2. Export `HOST_IP`: 

```
export HOST_IP = $(hostname -i)
```

3. Create a `docker-compose.yml` file:

```
vim docker-compose.yml
```
copy this content to the file

4. Copy this code block to the file:

```
version: "3"
services:
  node:
    image: ${NODE_IMAGE}
    stop_grace_period: 5m
    stop_signal: SIGINT
    hostname: node
    container_name: node
    ports:
      - ${HOST_IP}:8545:8545
      - 127.0.0.1:8546:8546
      - 30303:30303
      - 30303:30303/udp
      - 6060:6060
    volumes:
      - ~/ronin/chaindata:/ronin
    environment:
      - SYNC_MODE=snap
      - PASSWORD=${PASSWORD}
      - PRIVATE_KEY=${VALIDATOR_PRIVATE_KEY}
      - BOOTNODES=${BOOTNODES}
      - NETWORK_ID=${NETWORK_ID}
      - RONIN_PARAMS=${RONIN_PARAMS}
      - VERBOSITY=${VERBOSITY}
      - MINE=${MINE}
      - GASPRICE=${GASPRICE}
      - GENESIS_PATH=${GENESIS_PATH}
      - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
```

5. Create an `.env` file. This file contains the configuration parameters for your node.

Create `.env`
```
vim .env
```

6. Copy this code block to the file: 

```
INSTANCE_NAME=your-instance-name
NODE_IMAGE=your-node-image
VALIDATOR_PRIVATE_KEY=your-private-key
PASSWORD=your-password

MINE=true

BOOTNODES=enode://cfa5f00c55eba79f359c9d95f5c0b2bb8e173867ffbb6e212c6799a52918502519e56650970e34caf1cd17418d4da46c3243588578886c3b4f8c42d1934bf108@104.198.242.88:30303,enode://f500391c41906a1dae249df084a3d1659fe602db671730b2778316114a5f7df44a0c6864a8dfffdc380fc81c6965dd911338e0e2591eb78a506857015d166250@34.135.18.26:30303,enode://fc7b8ceafe16e6f79ab2da3e73d0a3163d0c28efe0778863102f8f27758986fe28c1540a9a0bbdff29ab93ad1c5803462efe6c98165bbb404d9d099a55f1d2c9@130.211.208.201:30303
NETWORK_ID=2020
DEPLOYMENT=production
GASPRICE=20000000000
VERBOSITY=3

CHAIN_STATS_WS_SECRET=xQj2MZPaN6
CHAIN_STATS_WS_SERVER=stats.roninchain.com

RONIN_PARAMS=--http.api eth,net,web3,consortium --miner.gaslimit 100000000 --miner.gasreserve 10000000
```

Replace the following keys in the `.env` file with your node's information:
* `INSTANCE_NAME`: Your node's name, which can be seen on the [stats page](https://stats.roninchain.com/).
* `VALIDATOR_PRIVATE_KEY`: Your validator private key, without the `0x` prefix.
* `NODE_IMAGE`: The version of your node's image, which can be found under [Latest image](/docs/node-operators/upgrade#latest-image).
* `PASSWORD`: The password used to encrypt your private key.

7. Start the node

```
docker-compose up -d
```

8. Review the log:

```
docker logs node -f --tail 100
```

Your node is up and listening at `localhost:8545`.

9. Confirm that your node is working: After a few minutes, go to the [stats page](https://stats.roninchain.com/) to check the status of the node. If it's green, the node is connected and up to date with the network.
