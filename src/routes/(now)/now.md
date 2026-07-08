---
title: Now page
description: What I am doing right now.
date: '2026-07-08'
categories:
  - linux
  - software
  - webdev
  - dev
---

## Terms used in this page

Integrated Development Environment (IDE) - a software application that
provides comprehensive facilities to computer
programmers for software development.

Language Server Protocol (LSP) - a protocol that
defines how a language server communicates with a client
(like an editor or IDE).

Debug Adapter Protocol (DAP) - a protocol that
defines how a debugger communicates with a client
(like an editor or IDE).

Amazon Web Services (AWS) - a subsidiary of
Amazon providing on-demand cloud computing platforms and
APIs to individuals, companies, and governments.

Google Cloud Platform (GCP), a suite of cloud computing services
competing with AWS, Microsoft Azure, and others.

Video Home System (VHS) - a standard for consumer-level analog video recording
mostly used from the late 1970s to the early 2000s.

Visual Studio (e)Xtensions (VSX) - a marketplace for
extensions for Visual Studio Code and other editors.

---

Here is a list of things I am currently working on or learning.

## Kulala Desktop

Currently [cooking][kulala-desktop-git].

## Kulala for (Visual Studio) Code

Already available:

- [Visual Studio Marketplace][kulala.vscode-marketplace]
- [Open VSX Registry][kulala.open-vsx]

## Kulala for Neovim

The recent big release of the 6x branch (Kulala.nvim meets Kulala-Core)
was a huge milestone for the project.

## Kulala Core

The kulala-core ~will become~ is the backend for all
the kulala tools.

It parses `.http` files and exectutes requests,
including scripts, without any external requirements.

This will make kulala tools faster, more reliable,
and easier to use.

It makes it easier to build new tools,
like a kulala extension for VSCode.

## WithSecrets

Securely and easily access your environment variables.

No more sending `.env` files via email or chat to your team members.

Kuba helps you to get rid of `.env` files.
Pass env directly from GCP Secret Manager,
AWS Secrets Manager, Azure Key Vault,
and OpenBao to your application.

- [Website](https://withsecrets.com)

## nvpm 📦

nvpm is a Command Line Interface (CLI) for managing tooling for Neovim,
but it can also be used for other tools.

It's biggest selling point is that
it has a min-release-age built-in,
preventing you from installing packages that are too new.

- LSP servers
- DAP servers
- Linters
- Formatters
- Plugins
- Themes

[kulala.vscode-marketplace]: https://marketplace.visualstudio.com/items?itemName=mistweaverco.kulala
[kulala.open-vsx]: https://open-vsx.org/extension/mistweaverco/kulala
[kulala-desktop-git]: https://github.com/mistweaverco/kulala-desktop
[vhs-era-theme.terminal]: https://github.com/mistweaverco/vhs-era-theme.terminal
[vhs-era-theme.nvim]: https://github.com/mistweaverco/vhs-era-theme.nvim
