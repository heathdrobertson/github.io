---
title: "Bash"
permalink: /notes/bash
excerpt: "Bash related tools to remember."
toc_label: "Bash TOC"
header:
    teaser: /assets/images/bash_teaser_image.png
    overlay_color: "#616261"
---

## Bash Tricks

### Removing Docker Containers

1. Pipe contianer ID's to text file.
```bash
docker ps -a -q > containers.txt
```

2. Edit containers.txt and remove the container ID's you wish to keep.
```bash
vim containers.txt
```

3. Loop through containers.txt line by line.
```bash
while read c; do
  docker rm "$c"
done < containers.txt
```

### Create Multiple Files

1. Create a list of file names:
```bash
lst="Sphere Cube Cuboid"
```

2. Use `for` loop to iterate over `$lst`.
```bash
for i in $lst; do touch "$i".hs; done
```
3. `unset lst` to remove the variable.


### Command Line Hacks

```bash
curl https://image.shutterstock.com/image-vector/cute-frog-cartoon-260nw-366900380.jpg --ouput frog.jpg
```

```bash
touch hello.txt && echo "I am a dev" >> hello.txt
```

- Create variable with a name, make a directory and cd into that directory
```bash
p=practice && mkdir "$p" && cd "$p"
```
