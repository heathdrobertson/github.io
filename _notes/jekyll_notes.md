---
permalink: /notes/jekyll
title: "Jekyll"
excerpt: "Jekyll website processes and tools to remember."
toc_label: "Jekyll TOC"
header:
    teaser: /assets/images/jekyll_teaser_image.png
    overlay_color: "#616261"
---

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

### Adding Collections
Adding a *Notes* subsection to a site:
1. Create a file ```_pages/notes.md```
1. Add YAML Front Matter:
```yaml
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
```yaml
- title: "Notes"
  url: /notes/
```

1. Open ```_config.yml``` under the **Defaults** section add.
```yaml
# _notes
defaults:
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

- [Sample Markdown Files](https://github.com/mmistakes/minimal-mistakes/tree/master/docs)
- [Site Configuration](https://mmistakes.github.io/minimal-mistakes/docs/configuration/)
- [_config.yml example](https://github.com/mmistakes/minimal-mistakes/blob/master/_config.yml)
- [Font Awsome Icons](https://fontawesome.com/icons?d=gallery)
- [The internet’s source of freely useable images.](https://unsplash.com)



