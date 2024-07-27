---
title: Kulala.nvim - A minimal HTTP client interface for Neovim
description: A story about how I came to build Kulala.nvim, a minimal HTTP client interface for Neovim
date: '2024-07-27 19:45'
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

I started Kulala.nvim as a replacement for the [rest.nvim](https://github.com/rest-nvim/rest.nvim) plugin,
because it has been archived and I wanted to have a minimal HTTP client interface for Neovim.

Not just for the fun, but because [I started a new job at TBInt](/blog/started-a-new-job-at-tbint) and
needed a way to interact with the REST and GraphQL APIs of our services.

Yeah, I could have used Postman, but I wanted to have something integrated into Neovim.

It has gathered quite some stars on github and
received some feedback from the [community on github](https://github.com/mistweaverco/kulala.nvim).

[reddit](https://www.reddit.com/r/neovim/search/?q=kulala&type=link) folks also seem to like it.

It even started a new project called [kulala-fmt](https://github.com/mistweaverco/kulala-fmt)
which is an opiniated formatter for `.http` and `.rest` files.
