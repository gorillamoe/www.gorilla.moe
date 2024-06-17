---
title: Now page
description: What I am doing right now.
date: '2024-06-12'
categories:
  - linux
  - software
  - webdev
  - dev
---

Here is a list of things I am currently working on or learning.

## i3 to Sway Migration

I am currently migrating from i3 to sway.

Everything seems to work as I wish, except for the multi-touch gestures.

I have to find a replacement for touchegg 😢.

## ZSH hacking

I previously used `bash` as my shell, but I recently switched to `zsh`.

I started out with oh-my-zsh,
but I quickly realized that it's too bloated for my taste.

The startup time was a bit slow and I didn't need most of the features.
So I started to build my own setup from scratch.

With all the things shaved off that I don't need,
I managed to spin up a new shell twice as fast as before.

The greatest impact on the startup time was the removal of the `nvm` script.

But as I need `nvm` for my daily work,
I decided to try out lazy loading the `nvm` script.

This helped to shave off quite some time from the startup time.

I'm quite happy with the [results](https://github.com/gorillamoe/dotfiles/tree/trunk/configurations/zsh).

## i3 + Polybar + Rofi

In my continous quest to find the perfect desktop setup,
when it comes to productivity and aesthetics, I'm yet again back to i3wm.
I am currently working on a new setup with i3, Polybar and Rofi.

Back in the days I used i3wm with dmenu and a custom statusbar and
was quite happy with it, but then I switched to regular Gnome, MacOS and now Pop!\_OS.

I am quite happy with Pop!\_OS, its launcher, it's speed and simplicity,
but I'm always eager to improve and I see a lot of potential in going back i3wm.

Follow my journey with i3wm on my [dotfiles repo](https://github.com/gorillamoe/dotfiles).

## Wishlist

I migrated my [wishlist](/wishlist) to a simple markdown file.

## Tracking time

My wife needed a time tracking tool for her work.

The requirements were simple:

- Track time ⏰ for different projects
- Offline 🙈 first citizen
- No bullshit 💩 like ads or tracking or login requirements or subscription fees
- Export the data as PDF
- Ideally it should work well with Linux 🐧, Mac and Windows

I didn't research much, but I didn't find anything that fits the bill.

So I decided to build a simple time tracking tool myself.
It started off as a simple TUI app in Go,
but I quickly realized that I my wife would prefer a GUI.

So I started building a simple Electron app.
Then I migrated everything from Electron and plain JS
to React, TypeScript and Vite including a CI/CD pipeline.

Welcome to [timetrack ⏰](https://timetrack.mistweaver.co).

## Move to Pop!\_OS

I recently moved from [ArchLinux](https://www.archlinux.org) (10y+)
to MacOS (because work-related stuff) and now I settled with ❤️
[Pop!\_OS](https://pop.system76.com/).

## Fresh start

I cleaned up my [dotfiles repo](https://github.com/gorillamoe/dotfiles).

I recently moved from [ArchLinux](https://www.archlinux.org) (10y+)
to MacOS (because work-related stuff) and now I settled with ❤️
[Pop!\_OS](https://pop.system76.com/).

## What are you using?

I created a [uses page](/uses) to list the tools and software I use.

## Powered by SvelteKit

I have migrated [this site](/) to SvelteKit.

The site is now statically generated and hosted on a cheap Hetzner cloud instance.
The deployment is automated with GitHub Actions.

## Learning SvelteKit

I am currently learning SvelteKit,
a framework for building web applications with Svelte.
I am excited to see how it compares to other frameworks like React and Vue.
