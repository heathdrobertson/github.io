---
permalink: /notes/vim
title: "Vim"
excerpt: "Vim and NeoVim tools and configurations."
---

To exit Vim, run commands in terminal and return to Vim as you left it.

### Using Terminal from within Vim
- To pause Vim and go to a terminal:
    - ```ctrl+z```
- To start Vim and return to where you left off:
    - ```fg```

### Vim Spelling
- To activate spelling in current buffer:
    - ```setlocal spell```
    - This can be set permenantly in .vimrc or init.vim 
    - ```[s and ]s``` move between highlighted missspleled words.
    - ```z=``` opens a list of possible word options.
    - ```:help spell``` for more commands.
