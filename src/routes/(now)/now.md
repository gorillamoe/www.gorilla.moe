---
title: Now page
description: What I am doing right now.
date: '2025-10-26'
categories:
  - linux
  - software
  - webdev
  - dev
---

Here is a list of things I am currently working on or learning.

## Kulala for VSCode 🐼

I got a ruff start of a Kulala extension for VSCode.
It's still in the early stages, but it works quite well.

## Kulala Core

The kulala-core will become the backend for all the kulala tools.
It parses `.http` files and exectutes requests,
including scripts, without any external requirements.

This project aims to replace the requirement for cURL,
any custom parsing logic and nodejs for scripting.

This will make kulala tools faster, more reliable,
and easier to use.

Also it will make it easier to build new tools,
like a kulala extension for VSCode.

See the current progress here:

- [GitHub Repository](https://github.com/mistweaverco/kulala-core)

## VHS Era 🎞️

I started a new project called VHS Era.

There are currently two themes available:

- [VHS Era for terminals (wezterm & kitty)](https://github.com/mistweaverco/vhs-era-theme.terminal)
- [VHS Era for Neovim](https://github.com/mistweaverco/vhs-era-theme.nvim)

## OpenDeck Ajazz 🎛️

I recently got an Ajazz AKP05 stream deck clone.

To get it to work on Linux,
I [forked](https://opendeck.mwco.app) the
[OpenDeck](https://github.com/nekename/OpenDeck) project
and added support for the Ajazz AKP05.

## Kuba 🔒

Securely and easily access your environment variables.

No more sending `.env` files via email or chat to your team members.

Kuba helps you to get rid of `.env` files.
Pass env directly from GCP Secret Manager,
AWS Secrets Manager, Azure Key Vault,
and OpenBao to your application.

- [Website](https://kuba.mwco.app)

## Kimbia 🐆

A minimal cross-platform task runner.

You can use Kimbia to run a series of tasks like linting, testing, building, and deploying your application.

You could also use a Makefile, bash- or npm-scripts, but Kimbia is easier to use and reason about.

Additionally, Kimbia supports dotenv files out of the box, is cross-platform, has documentation built-in and a simple and clean configuration file format.

Give it a [try](https://kimbia.mwco.app) and [let me know](https://bsky.app/profile/gorilla.moe) what you think.

## back to the arch 🐧

I'm back to Arch Linux, specifically to Manjaro.

I tried Ubuntu, but had some issues with the display, the performance, and occasionally freezing.

## getzana.net 📦

Zana is a minimal TUI for managing LSP servers, DAP servers, linters, and formatters, for Neovim, but not limited to just Neovim.

## getkulala.net 🐼

I am again working on the [kulala](https://getkulala.net) family.

Kulala is a minimal REST-Client Interface and set of tools for working with RESTful APIs. It also supports GraphQL.

I am currently working on a new product: [Kulala for Desktop](https://github.com/mistweaverco/kulala).

## Working on bananas 🍌

I am currently working on a new project called [bananas](https://getbananas.net).

Bananas Screen Sharing is a simple and easy-to-use screen sharing tool for
Mac, Windows, and Linux.

It utilizes a peer-to-peer connection to share your screen with others,
without the need for an account or any server infrastructure.

## Working on kulala.nvim and kulala-fmt

I am currently working on a new Neovim plugin called [kulala.nvim](https://kulala.mwco.app).

It is a replacement for the achieved [rest.nvim](https://github.com/rest-nvim/rest.nvim) plugin.

I started it, because I started a new job and
I needed a better tool for my daily work (mainly working with APIs).

I also started a new formatter called [kulala-fmt](https://github.com/mistweaverco/kulala-fmt).

It is a formatter for `.http` and `.rest` files and accompanies the kulala.nvim plugin.

## Getting started with bitbucket

We are using Bitbucket at work and I am currently getting all the ins and outs of it.

But, to be honest, I am not a big fan of it. I'm more of a GitHub person.

I'm missing a lot of features that GitHub has, like the GitHub CLI, GitHub Actions, GitHub Packages, etc.

## Started a new job

I started a new job at [TBInt](https://tbint.de) as a Cloud-Native Backend Developer.

I am working with Python, TypeScript, Docker, GCP, Terraform, GQL, SAP and a lot of other cool 😎 stuff.

That's so cool, because I previously (mostly) worked with AWS, Terraform, Docker, gRPC and TypeScript.

I am excited to work with a great team and to learn ✨ a lot of new things and make an impact 🥷.

I've never heard of TBInt before, but they are such a great 💪 and huge 🐋 company.

## Back to Gnome

Here I am again, back to Gnome.

I tried to switch to i3 and then to sway, but I missed some features and the simplicity of Gnome.

Too be honest, it just gets the job done and gets out of the way.

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
