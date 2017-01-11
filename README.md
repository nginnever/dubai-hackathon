![](https://ipfs.io/ipfs/QmatALcooE5Lo48k8HFT5D9Nw2RdzobZjZVhbpUbQKtBE1)
![](https://ipfs.io/ipfs/QmcrGt2mXPrmmUzYUYC9nJvpNR3UwmopHMFRLEy5qvirYa)
![](https://ipfs.io/ipfs/QmWWvarS7YRbsfFJaJ2YRvfLmXKFzMqRHziJAwa9BqWjq6)

# just Will It
prototype for a distributed asset ledger backed by Ethereum blockchain and IPFS content addressing network.

## Table of Contents

- [Project Status](#project-status)
- [How It Works](#how-it-works)
  - [p2p Identification](#p2p-ID)
  - [Registration](#registration)
  - [Asset Transfer] (#asset-transfer)
- [Install](#install)
  - [Dev Server](#dev-server)
  - [Build Source](#build-source)
- [Quick Start Guide](#quickstart-guide)
  - [Requirements](#requirements)
  - [Testnet](#testnet)
  - [Init](#init)
- [Contribute](#contribute)
- [Roadmap](#roadmap)


Hackathon links

http://www.hackathon.io/blockchain-virtual-govhack/projects

## How It Works

just Will It works generally as follows

### p2p-ID
The prototype application will generate a p2p ID: This will be an input box for a name, email, and password (optional a profile pic), a message about remembering this password, and a submit button. The ID generated is the same identification used to generate Ethereum transactions.

### Registration

Upon submitting a request will be made to a local running ethereum client to generate a new wallet.  Shortly after the application will send a transaction to a smart contract to create a new registry for that ID.  This entry will be a mapping of ID to IPFS hash, so when querying a user by ID you get back a hash that you can use to consult ipfs for the actual meta data of a user. This can be used to sign the metadata in the ipfs network with ethereum transactions allowing the smart contract to act as a portal for distributed identity. Similar projects like uPort explore this further.

### Willing assets

The application looks like a file system where you can upload and track the assets you have uploaded. You can assign IDs to uploaded pictures of an asset. So essentially you will see a folder listing [asset - ipfs multihash - ethereum ID]

Each time you upload an asset it will change the user object for that ID that is hashed and mapped to in the registry contract. So a user object might look like:

```
{
  ID: '1eTH...',
  Name: 'Voxelot'
  Email: 'ginneversource@gmail.com'
  Assets:
    {
      Car: 'Qm... (hash of image of car)',
      House: 'Qm... (hash of house image and so on)'
    },
  Willed_Assets:
    {
      Qm... (car hash): '1eTH2...',
      Qm... (house hash): '1eTH3...'
    }
}
```

### Asset Transfer 

Now when a lawyer (or authorized ID by the contract) wants to certify that ID 1eTH has died and the assets need to be transferred, he/she will issue a command to the smart contract like contract.issueDeath('1eTH', {to: contractAddy, gas: 2000})

This command will simply move the deceased ID to a list that gives permission to the clients to move the Willed_Assets to their respective ID. The client can have a claim assets button on the app that will generate a new user object with what the blockchain says is valid.

The Alpha client can be accessed here http://www.justwillit.today

## Project Status

**Status:** *In active development*

Check the project's [roadmap](https://github.com/nginnever/fileswarm/blob/master/ROADMAP.md) to see what's happening at the moment and what's planned next.

[![Project Status](https://badge.waffle.io/nginnever/fileswarm.svg?label=In%20Progress&title=In%20Progress)](https://waffle.io/nginnever/fileswarm)
[![CircleCI Status](https://circleci.com/gh/nginnever/fileswarm.svg?style=shield&circle-token=158cdbe02f9dc4ca4cf84d8f54a8b17b4ed881a1)](https://circleci.com/gh/nginnever/fileswarm)

See also [CHANGELOG](https://github.com/nginnever/fileswarm/blob/master/CHANGELOG.md) for what's new!


## Install

just_Will_it is a react/redux application and can be ran in the browser or with electron.

requirements:

- node.js
- npm

```
git clone https://github.com/nginnever/just-will-it.git
cd just-will-it
sudo npm i
```

#### Dev-server

Webpack hot reload server

``webpack-dev-server --host 0.0.0.0 --port 1337``

#### Build Source

Run from distribution

``npm run build``

Load /app/dist/index.html

Electron

currently electron isn't compatible with the ipfs webpack build so it won't work atm. 

``npm run build-osx``

## Quickstart Guide

#### Requirements

IPFS: See IPFS [install guide](https://ipfs.io/docs/install/). Soon the binary will be bundled with an install version.

CORS: Set the IPFS daemon to accept requests from localhost

``ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"http://example.com\"]"``

Geth: See [geth install](https://github.com/ethereum/go-ethereum/wiki/geth)

####Testnet:

Connect to morden testnet

```
geth --testnet console
```

Create new account if needed

```
geth --testnet account new
```

You will see a new directory in your .ethereum/testnet folder, wait for the morden testnet to sync up.

Start geth with the following flags, it is important to allow cors headers on the client and enable the rpcapi. 

```
geth --rpc --rpcaddr "localhost" --rpcport 8545 --rpccorsdomain "*" --rpcapi="db,eth,net,web3,personal,web3,debug" --datadir "<your geth install path>/.etherum" --unlock "<coinbase>" --testnet console
```

In order to use just-will-it you will need a small amount of ether to start adding yourself to seed contracts and answer challenges. Once challenge cycles have been entered the application will increase the balance of the seeder.

To obtain Morden testnet ether you can try a faucet here:

``http://faucet.ropsten.be:3001/``

or ZeroGox:

``https://zerogox.com/ethereum/wei_faucet``


#### Init

With webpack dev server:

- navigate to http://localhost:1337

With IPFS gateway:

- navigate to http://localhost:8080/ipfs/QmR2nmPqpMBxyA2msZvnVokiz7EdKZd8g5D325jhqunpWH

The application will initialize a user object to track your files and store it in your IPFS database with a pointer stored in the manager contract for your user account address.

#### Contribute

contribution guidelines coming soon!

#### Roadmap

TODO

- Break apart pyramid of doom functions
  - c () seeding
  - upload ()
- Write unit tests
  - React
  - Solidity
  - IPFS
- Solidity
  - add solidity and api methods for removig old files
  - make picking up seeds at random index
  - add events to listen to
- Get cost metrics
- UI updates
  - Make main table resizable 
  - fix position of table
  - build toolbar
  - make seeders and balance and success dynamic
- Replace async with parallel
- account for chunks < 100 bytes
- better error handling
- alerts for waiting for mining
- fix electron build
- fix js-ipfs

