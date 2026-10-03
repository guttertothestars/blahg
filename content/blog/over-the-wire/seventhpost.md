---
title: Bandit Level 4 → Level 5
description: Over the Wire Bandit walkthroughs. No credentials.
date: 2025-07-02
tags: [linux, cli, bash]
---

# Level Goal
[Level 4 → 5](https://overthewire.org/wargames/bandit/bandit5.html "There's a flag on the play")

The password for the next level is stored in the only human-readable file in the inhere directory. Tip: if your terminal is messed up, try the “reset” command.

# Commands you may need to solve this level

`ls , cd , cat , file , du , find`

# Thought Process

These are starting to get a wee bit trickier! We start out back with good old `/inhere` and the injunction to find the only human-readable file. There are 10 files, `-file00` - `-file09`. My first thought is that I don't want to manually look at each of these because I'm lazy. So I want a loop to do that work for me. 

```bash
for filename in *; do ${filename}; done

bandit4@bandit:~/inhere$ for filename in *; do file ${filename}; done
file: Cannot open 'ile00' (No such file or directory)
file: Cannot open 'ile01' (No such file or directory)
file: Cannot open 'ile02' (No such file or directory)
file: Cannot open 'ile03' (No such file or directory)
file: Cannot open 'ile04' (No such file or directory)
file: Cannot open 'ile05' (No such file or directory)
file: Cannot open 'ile06' (No such file or directory)
file: Cannot open 'ile07' (No such file or directory)
file: Cannot open 'ile08' (No such file or directory)
file: Cannot open 'ile09' (No such file or directory)
```
The good news is my loop works. The bad news is the `file` command is trying to open files while omitting the `-f` from the beginning of each file. I remember running into this issue back on level 1! The suggestion was to provide the full path to the file to avoid the command treating the dash in the filename as a command flag.

```bash
bandit4@bandit:~/inhere$ for filename in *; do file ./${filename}; done
./-file00: PGP Secret Sub-key -
./-file01: data
./-file02: data
./-file03: data
./-file04: data
./-file05: data
./-file06: data
./-file07: ASCII text
./-file08: data
./-file09: data
```
Which points me to the correct file and next level's password.


