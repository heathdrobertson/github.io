---
title: "Welcome to ToiletHill.io!"
date: 2019-11-14T11:58:00-00:00
categories:
  - blog
tags:
  - Welcome
  - tools
---

<ul>
{% for path in site.data.path.path %}
<li>
	{{ path[0] }} - {{ path }}
</li>
{% endfor %}
</ul>
