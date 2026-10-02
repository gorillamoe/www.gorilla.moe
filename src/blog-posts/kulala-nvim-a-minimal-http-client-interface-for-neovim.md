---
title: Kulala.nvim - A minimal HTTP client interface for Neovim
description: A story about how I came to build Kulala.nvim, a minimal HTTP client interface for Neovim
created: '2024-07-27 19:45'
updated: '2026-10-02'
categories:
  - linux
  - windows
  - macos
  - neovim
  - curl
  - http
  - rest
  - graphql
  - api
  - plugin
published: true
---

I started [`Kulala.nvim`](https://kulala.app) as a replacement for the [`rest.nvim`](https://github.com/rest-nvim/rest.nvim) plugin,
because it has been archived and I wanted to have a minimal HTTP client interface for Neovim.

Not just for the fun, but because [I started a new job at TB International](/blog/started-a-new-job-at-tbint) and
needed a way to interact with the REST and GraphQL APIs of our services.

Yeah, I could have used Postman, but I wanted to have something integrated into Neovim.

It has gathered quite some stars on GitHub and
received some feedback from the [community on GitHub](https://github.com/dont-be-evil-company/kulala.nvim).

[Reddit](https://www.reddit.com/r/neovim/search/?q=kulala&type=link) folks also seem to like it.

It even started a new project called [kulala-fmt](https://github.com/dont-be-evil-company/kulala-fmt)
which is an opinionated formatter for `.http` and `.rest` files.
