---
title: Bandit Level 6 → 7
description: Over the Wire Bandit walkthroughs. No credentials.
date: 2025-07-19
tags: [linux, cli, find]
---
# Level Goal
[Level 6 → 7](https://overthewire.org/wargames/bandit/bandit7.html ) 

The password for the next level is stored somewhere on the server and has all of the following properties:

- owned by user bandit7
- owned by group bandit6
- 33 bytes in size


Commands you may need to solve this level:

>`ls, cd, cat, file, du, find, grep`

# Thought Process

From the last challenge I'll use `file -size`. Diving back into the man pages for `find` I locate `-group <group name>`: The file belongs to group name (numeric group ID allowed) along with `-user <user name>`: file is owned by user name (numeric user ID allowed).

When I start looking around I see that there are tons of directories in the home folder so I'll run 
>`find . -size 33c -group bandit6 -user bandit7` 

to search them all. the `.` tells Linux to search the current directory, and all subdirectories. One can also point towards a specific directory by running 
>`find /home/subdirectory/subsubdirectory <criterion>`

Running my targeted `find` command doesn't get me anything so I'll either my command is wrong or the file I'm looking for isn't in the home directory. When I search `/` I get too many possible hits! But I notice they all seem inacessible, with `Permission denied` errors on all that I see. 
Since there are way more files than I want to scan visually I need to exclude this error. Let's send them into the void with   
>`2>/dev/null` 

This redirects all errors to what amounts to a black hole. The only file returned is hidden in the root directory, buried several subdirectories deep and, sure enough, it has our password.

