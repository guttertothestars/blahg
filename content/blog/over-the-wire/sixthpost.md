---
title: Bandit Level 3 → Level 4
description: Over the Wire Bandit walkthroughs. No credentials.
date: 2025-06-25
tags: [linux, cli]
---

# Level Goal
[Bandit Level 3 → Level 4](https://overthewire.org/wargames/bandit/bandit4.html) 

The password for the next level is stored in a hidden file in the inhere directory.

# Commands you may need to solve this level

`ls , cd , cat , file , du , find`

# Thought Process

Oooh, I know this one! the command to view hidden files is `ls -a` or list files, all. There's lots of cool stuff the `ls` command can do. One fun one is to pipe it into `grep` to search for strings in the file name like `ls | grep examplestring` to return any files in the directory that contain 'examplestring' in the name.