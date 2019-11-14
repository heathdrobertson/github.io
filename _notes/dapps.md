---
title: "Dapps"
permalink: /notes/dapps
excerpt: "Bitcoin, Ethereum, Cardano, Holochain"
toc_label: "Dapps TOC"
header:
    teaser: /assets/images/dapps_teaser_image.png
---

## Bitcoin, Ethereum, Cardano, Holochain

This will eventually be multiple files.

## Bitcoincore Download & Install
__According to the Udacity course.__

1. I have downloaded a copy of bitcoincore to my external usb drive ***btc*** and unzipped it.
1. `cd /media/toilethill/btc/bitcoin-0.18.1/`
1. Run the command: `bin/bitcoin-qt` to start the ***GUI*** app and download historical transactions.
1. I created: `mkdir /media/toilethill/btc/.bitcoin` to download the 248gb history, it's going to take a while.

### Working with Testnet or RegNet Networks
1. I created a ***bitcoin.conf*** file in the Bitcoin Core `.bitcoin` dir.
    1. `testnet=1` added to the ***bitcoin.conf***.
    1. The Bitcoin App needs to be restarted and the logo turns from orange to green.

### Udacity Notes

1. You can using pruning to reduce the amount of space taken by the bitcoin blockchain.
    1. Create a bitcoin.conf file in your blockchain data directory. Find where Bitcoin creates its [default data directory](https://en.bitcoin.it/wiki/Data_directory) depending on your OS here.
    1. In the **bitcoin.conf** file, write `prune=550` and save file.
1. This will not make blockchain sync faster. It will make it take less space, though, which can be helpful.
1. See more here: [Full Node: Reduce Storage](https://bitcoin.org/en/full-node#reduce-storage).
