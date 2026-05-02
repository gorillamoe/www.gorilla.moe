---
title: Projects
description: A list of projects I started or I'm involved in.
date: '2026-05-02'
categories:
  - linux
  - software
  - webdev
  - dev
  - programming
  - projects
---

Here is a list of projects I started or I'm involved in.

## Excalidraw Desktop

[Excalidraw Desktop](https://github.com/mistweaverco/excalidraw-desktop)
Unofficial, offline-first desktop client for Excalidraw on Windows,
macOS, and Linux.
It's a complete rewrite and tries to be as close to the web version as possible,
while also adding some features like:

- Enchanced library management
- Free for all P2P collaboration, without required sign-ins (wip)

## Bananas Screen Sharing

[Bananas Screen sharing](https://getbananas.net) is a
simple and easy-to-use P2P screen sharing tool for Mac, Windows, and Linux.

Share your screen 🖥️ with anyone 🌈, anywhere 🏝️,
anytime 🕗 and collaborate with multiple cursors.

No need to sign up, log in, or create an account 🥷.
Just share your screen and start collaborating.

Bananas 🍌 creates a unique 🌟 connection url 🌐 for you to
share with your friends, family, or colleagues.

## Kulala API Testing Tools

[Kulala](https://getkulala.net) started as an API-Client Interface
for Neovim, but has since evolved into a full-fledged API testing
suite of applications.

## Zana - the niche LSP/DAP/Formatter/Linter manager

I started [Zana](https://getzana.net) when I wanted to have something
similar to Mason or LSPZero,
but also wanted to have things work for other editors
like VSCode, Emacs, etc.

Also I wanted a CLI tool, which Mason doesn't have AFAIK.

Plus, at that time, the Mason registry piled up with pull
requests and issues, and I was worried about the future of the
project.

Turns out, I was wrong and Mason is doing great,
but I still like Zana for its simplicity and ease of use.
Probably I'm the only user of Zana right now, but
I'm happy with that.

### Kuba - local DX with secrets made easy and portable

[Kuba](https://kuba.mwco.app) was born out of necessity (like almost all of my projects).

I was tired of sending `.env` files via email or chat to my team members.

Asking them to set up their local environment variables.
Asking around for the right values.
Taking care of not committing secrets to version control.

I wanted a uncomplicated solution that would allow me to
share environment variables with my team members
in a secure and easy way.

We're already using Google Cloud Secret Manager,
managed via Terraform, for our production secrets.

So I thought, why not use the same for local development?
Previously, you had to basically either write your own scripts
or use paid tools to sync secrets from GCP Secret Manager.
Or even worse, copy and paste them manually into your `.env` files.

Kuba solves this problem by allowing you to
fetch secrets from GCP Secret Manager
and pass them to your local applications.

They're directly injected into the environment of your
local development applications, without the need to
store them in `.env` files.

You can even convert existing `.env` files into
Kuba configuration files.

## Other Projects

- [White Noise](https://white-noise.mwco.app) - A simple white noise generator for focus and relaxation
- [Timetrack](https://timetrack.mwco.app) - A simple, offline-first, time tracking app with a focus on privacy
- [Snap.nvim](https://snap.nvim.forthelazy.dev) - A Neovim plugin to generate screenshots 📷
  that match your color scheme 🎨. Most other screenshot plugins generate images with
  hardcoded colors that don't match your theme.
- [Kikao.nvim](https://github.com/mistweaverco/kikao.nvim) -
  VSCode-like session management for Neovim.
  Also exposes an API for other plugins to use and persist data across sessions.
- [Snap.nvim](https://snap.nvim.forthelazy.dev) -
  A Neovim plugin to generate screenshots 📷
- [Bafa.nvim](https://github.com/mistweaverco/bafa.nvim) -
  A minimal 🤏🏾 BufExplorer alternative for lazy 🦥 people for
  your favorite ⚡editor ❤️.
- [Juu.nvim](https://github.com/mistweaverco/juu.nvim) -
  A minimal input styling plugin for the lazy 🦥 people for
  your favorite ⚡editor ❤️.
- Kulala for VSCode - Kulala inside VSCode
- [Kulala Core](https://github.com/mistweaverco/kulala-core) - The soon-to-be backend for all the kulala tools
- [VHS Era Theme for terminals](https://github.com/mistweaverco/vhs-era-theme.terminal)
- [VHS Era Theme for Neovim](https://neovim.theme.vhs-era.com)
- [OpenDeck Ajazz - OpenDeck Fork](https://opendeck.mwco.app)
- [Kimbia](https://kimbia.mwco.app) - Multipurpose, X-Platform, Task Runner
