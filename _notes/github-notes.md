---
permalink: /notes/github
title: "GitHub"
excerpt: "GitHub tools and configurations."
toc_label: "GitHub TOC"
header:
    teaser: /assets/images/github_teaser_image.png
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


### Config Files

- [Customizing Git - Git Configuration](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)
    - [.gitconfig](https://git-scm.com/docs/git-config)
- [Git Tools - Credential Storage](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage)
    - [.git-credential](https://git-scm.com/docs/git-credential)
- [Commit Template .gitmessage](https://thoughtbot.com/blog/5-useful-tips-for-a-better-commit-message)
