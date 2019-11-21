---
title: "Dapps"
permalink: /notes/dapps
excerpt: "Bitcoin, Ethereum, Cardano, Holochain"
toc_label: "Dapps TOC"
header:
    teaser: /assets/images/dapps_teaser_image.png
    overlay_color: "#616261"
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


## Do you really need a blockchain?
These questions were originally put together by <a target="_blank" href="https://viant.io/">Viant</a>, a <a target="_blank" href="https://new.consensys.net/">ConsenSys incubated company</a>, that built an asset and domain agnostic blockchain-based supply chain platform <a target="_blank" href="https://traseable.com/">TraSeable Solutions</a>.</p>
<h3 id="problem-of-value-identification">Problem of Value Identification</h3>
<ol>
<li>Is there a need to <strong>share information, credentials or value</strong> with others?</li>
<li>Is <strong>trust</strong> a critical requirement to the process?</li>
<li>Do you need to <strong>prove</strong> to others you are <strong>transacting/reporting</strong> accurately?</li>
<li>Is there <strong>potential to monetize</strong> the data or digital asset in the value chain?</li>
<li>Who <strong>owns</strong> the <strong>problem</strong>? Individual or industry wide challenges?</li>
</ol>
<h3 id="stakeholders-buy-in">Stakeholders buy in</h3>
<ol>
<li>Is there a <strong>network</strong> of stakeholders (i.e. more than 2)?</li>
<li>Is there a <strong>dependency on others</strong> for information?</li>
<li>Does <strong>more than one participant</strong> need to <strong>update</strong> the data?</li>
<li>Is there <strong>scope to open up the ecosystem to ancillary parties</strong> in the future?</li>
<li>Are you <strong>working with other industry players</strong> on any activities?</li>
</ol>
<h3 id="technical-considerations">Technical considerations</h3>
<ol>
<li>Is there any ongoing need or future requirements for <strong>high data throughput</strong>?</li>
<li>Do you <strong>rely or use public data sources</strong> to make decisions?</li>
<li>Do you need to <strong>store a particularly rich/complex data structure</strong>?</li>
<li>Do you need to <strong>digitize assets</strong> in your value chain?</li>
<li>Do you <strong>need transaction privacy</strong>? Do you need <strong>anonymity</strong>?</li>
</ol>


## Resources for Web Services
<p>Need a review for Web Services or Javascript? Checkout these courses:</p>
<ul>
<li><a target="_blank" href="https://www.udacity.com/course/designing-restful-apis--ud388">Designing Restful APIs Course</a></li>
<li><a target="_blank" href="https://www.udacity.com/course/http-web-servers--ud303">Web Servers Course</a></li>
<li><a target="_blank" href="https://www.udacity.com/course/intro-to-javascript--ud803">Intro to Javascript</a></li>
</ul>

## Upcoming plan to build web service with private blockchain
<ul>
<li>Configure API web service with GET/POST endpoints<ul>
<li>Build and deploy local web service with Node.js</li>
<li>Configure API endpoints with static mock data for testing<ul>
<li>GET - Block by ID</li>
<li>POST - New Block</li>
</ul>
</li>
</ul>
</li>
<li>Migrate your private blockchain to your API web service<ul>
<li>Configure API endpoints to interact with your private blockchain<ul>
<li>GET - Block by ID</li>
<li>POST - New Block</li>
</ul>
</li>
<li>Create a method to validate blockchain health</li>
</ul>
</li>
</ul>
</div>
