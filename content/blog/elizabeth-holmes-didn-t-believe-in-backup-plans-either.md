---
title: "Elizabeth Holmes Didn’t Believe in Backup Plans Either"
description: ""
date: 2026-10-24
tags: [backups, failure, FOSS, 2fa]
---
> "The minute that you have a backup plan, you've admitted that you're not going to succeed."
>
> Elizabeth Holmes

# My Phone Died, Mostly

My iPhone 13 mini's screen died last week. The phone itself didn't. It still buzzes. Still holds every one of my two-factor codes trapped inside on various authenticator apps. 

That last part is the problem. I'm a sysadmin. I tell people to back things up for a living. My authenticator app had no backup. The cobbler's kids can't heal themselves. Also, I can't turn off my morning alarms. Shameful.

So this is the story of getting a new phone running and, more importantly, making sure the next dead phone is a minor annoyance instead of a work-stopping disaster of account recovery.

## The new phone

I went with a Moto G Stylus 2026 on Android 16. I kind of wanted a Fairphone but my budget was tiny and I needed something I could walk into a store and walk out with. The long-term plan is to flash LineageOS on it. I've been in an iPhone family for a number of years and I'm past ready to exit the walled garden. The short-term plan is to get my life back onto a working screen first. I kind of hate how I've let myself get crippled without a working phone. Not like 'I need my socials crippled' like 'I can't charge my car or log into Meraki crippled'. Modernity was a mistake.


## The keys first

Before email, before apps, ~~before picking a wallpaper~~, I set up two things:

1) Bitwarden. Personal password manager. One master password, everything else lives in the vault.

2) Aegis. Open source authenticator for the rotating 6-digit codes. No account, works offline, and the big one: it writes encrypted backup files to a folder I choose, automatically, every time I change anything.


Then comes the fun part, re-enrolling 2FA everywhere. My school account (Microsoft sign-in) wants me to enter a code from my old authenticator to reset my old authenticator. Which is on the dead phone. Which is why I'm resetting it. Had to make a phone call to help desk for this one. Once I'm back in, it turns out Microsoft's setup screen has a small "Other options" link that lets you use any authenticator app instead of theirs. Aegis it is.

## Now, backups

The goal: everything important exists in at least two places besides the phone, and some of it in a place I can physically hold. Eventually I'll get to 3-2-1 but today I just want to go from 0 to 1.

**Phone to cloud.** FolderSync uploads the Aegis backups and a monthly encrypted Bitwarden export to my Google Drive, twice a day, one way. No extra encryption on top, since both files leave their apps already encrypted.

The first sync fails with "Permission to access files not found" and a Java stack trace that tells me nothing except that Java is involved. The fix: FolderSync needs two separate storage permissions, and one of them has to be full "all files" access, not "media files." Force stop, reselect the folder, green checkmarks.

**Phone to laptop.** Syncthing copies the phone's photos, pictures, documents and recordings to my laptop over Wi-Fi. Think Dropbox, minus Dropbox. The phone only sends and the laptop only receives, so there's no backwash. Deleted files on the phone get held in a versions folder on the laptop for 30 days, so something I take Monday and delete Tuesday still makes it into the weekly backup.

Small gotchas: Syncthing-Fork needs a file manager that supports its folder picker, and Motorola's built-in Files app doesn't. Material Files from F-Droid does. And two of my folders show "Unshared" because, well, I never shared them. [[KEEP. last sentence is good]]

**Laptop to a drive in a drawer.** I have a 1TB Toshiba external drive. Reformat as ext4, label it BACKUP, and set up BorgBackup driven by borgmatic. Borg takes a full snapshot every time but only stores what changed, encrypted, so I get weekly, monthly and yearly history without the drive filling up.

The passphrase has to come from somewhere when nobody's around to type it. Plain text file is out. That's how I learn my laptop already has an encrypted keyring that opens when I log in, that Chrome has been using all along, that there's a command line tool called `secret-tool` to put things in it, and that the GUI for all this is called Seahorse. What is Seahorse? It's a GNOME thing. 

A systemd timer checks every evening at 7. If it's been a week and the drive is plugged in, it backs up. If it's been a week and the drive is in the drawer, I get a desktop notification telling me to go get it, every day, until I do.

First real run: 110.84 GB of home folder, stored as 58.29 GB, 305,427 files, about 31 minutes. Then I try to browse the backup as a folder and Borg tells me I'm missing FUSE support, which is one more package and one more thing I now understand slightly better than I did that morning.

Now: if this phone dies tomorrow, I install Aegis, import a file, type a password, and I'm back. 

I can't remember where I read it or who said it but the idea that true deep learning comes after really getting burned by something. Probably a lot people. It was true for me. I knew better but I was lazy. I needed that deep, sinking sensation of knowing down to the bone that I was up a creek with no one to blame but myself to really internalize the object lesson; I'm not going to succeed and I admit it. That's okay if I have a backup or three. If 2 is 1 and 1 is none than what I was doing was truly dumb.
