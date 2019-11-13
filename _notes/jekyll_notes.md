---
permalink: /notes/jekyll
title: "Jekyll"
excerpt: "Jekyll website processes and tools to remember."
toc_label: "Jekyll TOC"
header:
    teaser: /assets/images/jekyll_teaser_image.png
---

### Adding a *Notes* collection subsection to a site:
1. Create a file ```_pages/notes.md```
1. Add YAML Front Matter:
    - ```yaml
        ---
        title: Notes
        layout: collection
        permalink: /notes/
        collection: notes
        entries_layout: grid
        classes: wide
        ---
        ```
1. Open ```_data/navigation.yml``` and add **Notes**.
    - ```yaml

      - title: "Notes"
        url: /notes/

      ```
1. Open ```_config.yml``` under the **Defaults** section add: 
    - ```yaml

      # _notes
      - scope:
        path: ""
        type: notes
      values:
        layout: single
        author_profile: true
        share: true
        comment: true
        teaser: true

      ```
1. Recompile the site to load the changes.

### Links

- [Site Configuration](https://mmistakes.github.io/minimal-mistakes/docs/configuration/)
- [_config.yml example](https://github.com/mmistakes/minimal-mistakes/blob/master/_config.yml)
- [Font Awsome Icons](https://fontawesome.com/icons?d=gallery)
- [The internet’s source of freely useable images.](https://unsplash.com)



