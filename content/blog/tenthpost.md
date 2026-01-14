---
title: Bandit Level 7 → 8
description: Over the Wire Bandit walkthroughs. No credentials.
date: 2025-07-23
#tags: ["Over the Wire", linux, CLI, Bandit]
---
# Level Goal
[Level 7 → 8](https://overthewire.org/wargames/bandit/bandit8.html ) 

The password for the next level is stored in the file data.txt next to the word millionth


Commands you may need to solve this level:

>`man, grep, sort, uniq, strings, base64, tr, tar, gzip, bzip2, xxd`

# Thought Process
The task is to find one word in a file with many, many words.

After taking a look at the output of the sole file in my home directory, data.txt I can tell I need some easy way to scan for the string 'millionth'

I know I can use `cat` to output the entirety of the file, and I know that I can pipe the output of one command into another command with `|`. If I combine that with `grep` to search for the word I'm looking for I should find my answer.
