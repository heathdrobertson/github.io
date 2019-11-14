---
title: "NodeJS"
permalink: /notes/nodejs
excerpt: "NodeJS, Javascript, code, configuration and setup."
toc_label: "NodeJS TOC"
header:
    teaser: /assets/images/nodejs_teaser_image.png
---

## A Nodejs development environment:
```bash
docker run --rm --volumes-from=nix -it -v $(pwd):/home -w /home -p 3000:3000 nixos/nix nix-shell -p nodejs
```
