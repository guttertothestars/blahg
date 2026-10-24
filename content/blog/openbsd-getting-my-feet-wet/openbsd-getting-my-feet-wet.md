---
title: "OpenBSD - Getting my Feet Wet"
description: ""
date: 2026-10-11
tags: []
draft: true
---

Well now that I'm here I should figure out what to do with myself. 

The first thing to do, of course, is give myself all the power. I set sudo and Admin privileges up on my other machines so long ago I haven't really had to stop and think about _why_ to grant them, why to take them away, and why not just run root all the time.

The security group on OpenBSD that allows running commands with temporary root privileges is wheel. 

There don't seem to be a lot of OpenBSD 101 style youtube videos but I found a couple. 

One of the first suggestions of commands to run is `sysctl`.

In an attempt to get into the spirit of things before blindly running the command I first ran `man sysctl`