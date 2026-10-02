---
title: Now page
description: What I am doing right now.
date: '2026-10-01'
categories:
  - linux
  - software
  - webdev
  - dev
---

## Terms Used in This Page

Integrated Development Environment (IDE) - a software application that
provides comprehensive facilities to computer
programmers for software development.

Language Server Protocol (LSP) - a protocol that
defines how a language server communicates with a client
(like an editor or IDE).

Debug Adapter Protocol (`DAP`) - a protocol that
defines how a debugger communicates with a client
(like an editor or IDE).

Amazon Web Services (AWS) - a subsidiary of
Amazon providing on-demand cloud computing platforms and
APIs to individuals, companies, and governments.

Google Cloud Platform (`GCP`), a suite of cloud computing services
competing with AWS, Microsoft Azure, and others.

Video Home System (VHS) - a standard for consumer-level analog video recording
mostly used from the late 1970s to the early 2000s.

Visual Studio `(e)Xtensions` (`VSX`) - a marketplace for
extensions for Visual Studio Code and other editors.

---

Here is a list of things I am currently working on or learning.

## remnix

Encrypted, server-free shell history.

Commands live in a local SQLite database.

Synchronization is optional:
a background daemon can copy encrypted event bundles to
storage you already have (Google Drive, Dropbox, S3, a folder, …).

Think of it as Atuin's nerdy little sister,
but BYO (Bring Your Own) storage and hackable.

- [Website](https://remnix.app)

## Kulala Desktop

Currently [cooking][kulala-desktop-git].

## Kulala for (Visual Studio) Code

Already available:

- [Visual Studio Marketplace][kulala-code-marketplace]
- [`Open VSX Registry`][kulala-open-vsx]

## Kulala for Neovim

The recent big release of the 6x branch (`kulala.nvim` meets `kulala-core`)
was a huge milestone for the project.

## Kulala-Core

The kulala-core ~~will become~~ is the backend for all
the kulala tools.

It parses `.http` files and executes requests,
including scripts, without any external requirements.

This will make `kulala` tools faster, more reliable,
and easier to use.

It makes it easier to build new tools,
like a `kulala` extension for Visual Studio Code.

## WithSecrets

Securely and easily access your environment variables.

No more sending `.env` files via email or chat to your team members.

WithSecrets helps you to get rid of `.env` files.
Pass env directly from `GCP` Secret Manager,
AWS Secrets Manager, Azure Key Vault,
and `OpenBao` to your application.

- [Website](https://withsecrets.com)

## nvpm 📦

nvpm is a Command Line Interface (CLI) for managing tooling for Neovim,
but it can also be used for other tools.

It's biggest selling point is that
it has a `min-release-age` built-in,
preventing you from installing packages that are too new.

- LSP servers
- `DAP` servers
- Linters
- Formatters
- Plugins
- Themes

[kulala-code-marketplace]: https://marketplace.visualstudio.com/items?itemName=dont-be-evil-company.kulala-code
[kulala-open-vsx]: https://open-vsx.org/extension/dont-be-evil-company/kulala-code
[kulala-desktop-git]: https://github.com/dont-be-evil-company/kulala-desktop
[vhs-era-theme.terminal]: https://github.com/dont-be-evil-company/vhs-era-theme.terminal
[vhs-era-theme.nvim]: https://github.com/dont-be-evil-company/vhs-era-theme.nvim
