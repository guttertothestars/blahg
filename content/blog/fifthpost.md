---
title: Bandit Level 2 → Level 3
description: Over the Wire Bandit walkthroughs. No credentials.
date: 2025-06-18
#tags: second tag
---

# Level Goal
[Bandit Level 2 → Level 3](https://overthewire.org/wargames/bandit/bandit3.html) 

The password for the next level is stored in a file called 'spaces in this filename' located in the home directory

# Commands you may need to solve this level

`ls , cd , cat , file , du , find`

# Helpful Reading Material
[Google Search for “spaces in filename”](https://www.google.com/search?q=spaces+in+filename)

# Thought Process

This is why underscores are a linux tradition. Usually wrapping a string in qoutes allows it to be treated as a single word or token. Without the quotes the shell does something called 'Word Splitting', based on an 'Internal Field Separator, or IFS'

Just tossing qoutations around the file name and using our old friend `cat` is the answer here.