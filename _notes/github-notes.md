---
permalink: /notes/github
title: "GitHub"
excerpt: "GitHub tools and configurations."
---

### Setting up 2 Factor Auth and Cloning repos with HTTPS

[Caching your GitHub password in Git](https://help.github.com/en/github/using-git/caching-your-github-password-in-git)


[Managing a custom domain for your GitHub Pages site](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-records-with-your-dns-provider)

- Configure DNS A records to point at naked/apex domains e.g. toilethill.io
- CNAME Records point to subdomains like www.toilethill.io
- To list the current ip addresses your domain points to:
```bash
dig toilethill.io +noall +answer
``
