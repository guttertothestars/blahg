---
title: Bandit Level 5 → 6
description: Over the Wire Bandit walkthroughs. No credentials.
date: 2025-07-08
tags: [linux, cli, find]
---
# Level Goal
[Level 5 → 6](https://overthewire.org/wargames/bandit/bandit6.html ) 

The password for the next level is stored in a file somewhere under the inhere directory and has all of the following properties:

- human-readable
- 1033 bytes in size
- not executable

Commands you may need to solve this level:
>`ls, cd, cat, file, du, find`

# Thought Process

First things first, just poke around and see what we're working with. A directory with a lot of subdirectories, with a lot of files in those subdirectories.

Initially I thought I could do something similar to the last level with `file` to find the human-readable file but I couldn't get it to recurse. I might try a nested loop but that seems off-base.

Next I read the man pages for `du` and `find`, which both seem promising. `find` seems to get me closer to where I want to go and I can daisy chain a couple of arguments to get most of the way to where I need to be. 

>`find . -type f -size 1033c ! -executable`

`-type f` looks for regular files as opposed to a number of other file types  

`-size <filesize><unit of measurement>` gives me a specific file size, but the filesize could be prepended with `+` or `-` to look for file larger or smaller than. 

`-executable` searches for files with the exectuable permission bit toggles, and prepending it with `!` negates it to search for non-executable files.

This returns just one file which `file ./pathname` tells me is ASCII text, but very long. Sure enough `cat` gets me the password and a bunch of empty space.