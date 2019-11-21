---
title: "NodeJS"
permalink: /notes/nodejs
excerpt: "NodeJS, Javascript, code, configuration and setup."
toc_label: "NodeJS TOC"
header:
    teaser: /assets/images/nodejs_teaser_image.png
    overlay_color: "#616261"
---

## A Nodejs development environment:
```bash
docker run --rm --volumes-from=nix -it -v $(pwd):/home -w /home -p 3000:3000 nixos/nix nix-shell -p nodejs
```


## Node Exepress Environment

```bash
docker run --rm --volumes-from=nix -it -v $(pwd):/app -w /app -p 3000:3000 nixos/nix nix-shell /app/.config/default.nix -p python -p nodejs --run "npm install"
```
