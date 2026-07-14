---
title: Create Windows 10 Bootable USB Stick on Linux
description: How to create a Windows 10 bootable USB stick on Linux.
created: '2019-07-07 11:28:28.000'
categories:
  - windows10
  - windows
  - linux
published: true
---

**First things first: I tried multiple versions which all failed,
even when using the official Windows 10 USB Creation Tool
(using a real version of Windows 10; my wife's PC).**

The only thing that worked, was using [Rufus](https://rufus.ie/)
(with an existing Windows 10 installation).

Things that I tried, before nearly giving up (all of them failed):

- `dd`ing an offical ISO image
- The [guide from _It's FOSS_](https://itsfoss.com/bootable-windows-usb-linux/)
- Windows 10 media creation tool (it bailed out with some weird error message; wasn't able to fix that)

I'm not kidding you,
it took me nearly two full days,
because flashing USB and stuff is slow as hell and
I had to switch computers all the time.

This was such a pain in the ass,
but I had to do it once again,
because some extended friend (is it called extended friend?!)
asked me "fix" his laptop.

That is, because I'm a programmer and
everyone thinks that programmers know all the shit.

I know programming really well, but apart from that, I do not know shit!

So, to sum things up:

Spare your time and energy and try to get hold of a computer with windows already installed.
Then download an official ISO image and use the freeware Rufus to create a bootable USB stick.
