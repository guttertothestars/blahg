---
title: Bandit Level 0 → Level 1
description: Over the Wire Bandit walkthroughs. No credentials.
date: 2025-06-08
tags: [linux, cli]
---
# Level Goal
[Level 0 → Level 1](https://overthewire.org/wargames/bandit/bandit1.html "The files are inside the computer")

 Level Goal

The password for the next level is stored in a file called readme located in the home directory. Use this password to log into bandit1 using SSH. Whenever you find a password for a level, use SSH (on port 2220) to log into that level and continue the game.
Commands you may need to solve this level

ls , cd , cat , file , du , find

# Thought Process

`ls` is one of those commands I run constanttly and immediately, Usually after `pwd` if my prompt doesn't show me. Where am I and what else is here? `ls` shows me that there is one file in my current directory, called `readme`. `cat readme` prints the file contents to the terminal, showing the password. No need to check out `file`, `du`, or `find` yet, but I'm sure they'll come up soon.  