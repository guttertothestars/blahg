---
title: Bandit Level Zero
description: Over the Wire Bandit walkthroughs. No credentials.
date: 2025-06-07
tags: [linux, cli, ssh]
---
# Level Goal
[Level 0](https://overthewire.org/wargames/bandit/bandit0.html "What better place than here, what better time than now?") 

The goal for this level is for you to log into the game using SSH. The host to which you need to connect is bandit.labs.overthewire.org, on port 2220. The username is bandit0 and the password is bandit0. Once logged in, go to the Level 1 page to find out how to beat Level 1.

Commands you may need to solve this level:
`ssh`

# Thought Process

Fortunately i'm passingly familiar with `ssh` from the command line. But, I am a bit rusty on how to assign the right port, since `ssh` defaults to port 22. Fortunately I can use `man <command>` to see the manual for any given command. These aren't always the most riveting reading, but I always learn something.

From the manual it looks like running `ssh -p <port> <username>@<domain>` should do the trick.
