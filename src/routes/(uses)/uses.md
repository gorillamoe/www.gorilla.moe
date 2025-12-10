---
title: Uses
description: A list of services, hard- and software I use on a daily basis
date: '2025-12-10'
categories:
  - linux
  - macos
  - software
  - webdev
  - dev
published: true
---

Sometimes, people ask me what IDE, theme, font, etc I use.
So I decided to write up a little post that sums up.
This page is inspired by [Web Bos's page](https://wesbos.com/uses).

## Editor + Terminal

This is my pretty heavily customized setup for coding and
terminal work:

- **Editor**: [Neovim](https://neovim.io/)
  - **Configuration**: [Neovimfiles](https://github.com/gorillamoe/neovimfiles)
  - **Editor Theme**: [VHS Era](https://github.com/mistweaverco/vhs-era-theme.nvim)
- **Terminal**: [WezTerm](https://wezterm.org)
  - **Terminal Fonts**: [Fira Code Nerd Font](https://www.nerdfonts.com/font-downloads) and [VictorMono Nerd Font](https://www.nerdfonts.com/font-downloads)
  - **Terminal Theme**: [VHS Era](https://github.com/mistweaverco/vhs-era-theme.terminal)
- **Terminal Multiplexer**: [WezTerm built-in](https://github.com/gorillamoe/dotfiles/blob/trunk/configurations/wezterm/wezterm/wezterm-tmux.lua)
- **Dotfiles**: [Dotfiles](https://github.com/gorillamoe/dotfiles)

## CLI tools

I live in the terminal, so I need some tools to get my work done.

These are the ones I use nearly every day:

- [**Zana**](https://getzana.net/): Install and update LSP/DAP servers, DAP servers, linters, and formatters
- [**Kuba**](https://kuba.mwco.app/): Easily access your secrets without messing with dotenv files.
- [**Terraform**](https://www.terraform.io/): Infrastructure as Code tool
  - [**Terragrunt**](https://terragrunt.gruntwork.io/): For everything more complex than pretty basic Terraform
  - [**Terramate**](https://terramate.io/): Just because our legacy infrastructure is using this 🙈
- [**gcloud**](https://cloud.google.com/sdk/docs/install): Google Cloud CLI
- [**Docker**](https://www.docker.com/): Containerization platform
- [**podman**](https://podman.io/): Containerization platform
- [**kubectl**](https://kubernetes.io/docs/tasks/tools/): Kubernetes CLI
- [**Helm**](https://helm.sh/): Kubernetes package manager
- [**awscli**](https://aws.amazon.com/cli/): Amazon Web Services
- [**Imagick**](https://imagemagick.org/): Command-line tool for image manipulation
- [**FFmpeg**](https://ffmpeg.org/): Command-line tool for video and audio processing
- [**OpenVPN**](https://openvpn.net/): VPN solution that just works
- [**Wireguard**](https://www.wireguard.com/): Modern VPN solution, but more complex to set up
- [**zoxide**](https://github.com/ajeetdsouza/zoxide): Smarter cd command
- [**git**](https://git-scm.com/): Version control system
  - [**gh**](https://cli.github.com/): GitHub CLI
- [**ESlint**](https://eslint.org/): Linter for JavaScript and TypeScript
- [**Prettier**](https://prettier.io/): Code formatter
- [**Black**](https://black.readthedocs.io/en/stable/): Code formatter for Python
- [**Vale**](https://vale.sh/): Linter for prose
- [**Yazi**](https://yazi-rs.github.io/): Blazing fast terminal file manager written in Rust, based on async I/O.
- [**ripgrep**](https://github.com/BurntSushi/ripgrep): Fast search tool
- [**jq**](https://stedolan.github.io/jq/): Command-line JSON processor

## Programming

Maybe, just maybe, I forgot something... 🙈

### Runtimes

- [**bun**](https://bun.sh/): JavaScript runtime
- [**Node.js**](https://nodejs.org/): JavaScript runtime
- [**Deno**](https://deno.land/): JavaScript and TypeScript

### Frameworks

- [**SvelteKit**](https://kit.svelte.dev/): Web framework
- [**Next.js**](https://nextjs.org/): Web framework
- [**Strawberry**](https://strawberry.rocks/): GraphQL framework for Python
- [**Hono**](https://hono.dev/): Web framework for TypeScript with a focus on performance

### Libraries

- [**Prisma**](https://www.prisma.io/): ORM for Node.js and TypeScript
- [**Tailwind CSS**](https://tailwindcss.com/): CSS framework
  - [**DaisyUI**](https://daisyui.com/): UI component library for Tailwind CSS

### Languages

- [**TypeScript**](https://www.typescriptlang.org/): Just bliss
- [**Go**](https://go.dev/): Close second
- [**Bash**](https://www.gnu.org/software/bash/): I love myself some good old shell scripting
- [**Zig**](https://ziglang.org/): Currently learning, seems really nice
- [**Python**](https://www.python.org/): If I have to..
- [**Rust**](https://www.rust-lang.org/): I try to avoid it, but I have to use it sometimes
- [**CSharp**](https://learn.microsoft.com/en-us/dotnet/csharp/): Only if absolutely necessary

### Design + prototyping

- [**draw.io**](https://app.diagrams.net/): Simply the GOAT for diagramming
- [**Figma**](https://www.figma.com/): For collaborative design work
- [**Excalidraw**](https://excalidraw.com/): Quick sketches and wireframes

### Cloud computing

- [**Google Cloud Platform**](https://cloud.google.com/): This is my daily business
- [**Amazon Web Services**](https://aws.amazon.com/): For some specific services
- [**Hetzner Cloud**](https://www.hetzner.com/cloud): Most of my private and OSS projects are hosted here

### Server software

- [**PostgreSQL**](https://www.postgresql.org/): My go-to relational database
- [**MySQL**](https://www.mysql.com/): The longtime champion, still good
- [**SQLite**](https://www.sqlite.org/index.html): Lightweight database, I mostly use it for single user and/or offline applications
- [**MongoDB**](https://www.mongodb.com/): NoSQL database, great for certain use cases
- [**Redis**](https://redis.io/): In-memory data structure store
- [**Nginx**](http://f5.com/products/nginx#overview): Web server and reverse proxy
- [**Caddy**](https://caddyserver.com/): Web server and reverse proxy with automatic HTTPS
- [**Apache**](https://httpd.apache.org/): Web server
- [**LetsEncrypt**](https://letsencrypt.org/): Free SSL/TLS certificates
- [**MinIO**](https://min.io/): Object storage server (discontinued)
- [**Kubernetes**](https://kubernetes.io/): Container orchestration
- [**Prometheus**](https://prometheus.io/): Monitoring and alerting toolkit
- [**Grafana**](https://grafana.com/): Analytics and monitoring platform
- [**Traefik**](https://traefik.io/): Reverse proxy and load balancer

### Software as a Service (SaaS)

- [**Github**](https://github.com/): Code hosting platform, better than the competition
- [**Gitlab**](https://gitlab.com/): Close second for code hosting platform
- [**Bitbucket**](https://bitbucket.org/): Really bad, but we use it at my day job
- [**Node package registry**](https://www.npmjs.com/): Package registry for JavaScript
- [**PyPI**](https://pypi.org/): Package registry for Python
- [**Docker Hub**](https://hub.docker.com/): Container image registry
- [**Github Pages**](https://pages.github.com/): Static site hosting, quick and easy
- [**Cloudflare**](https://www.cloudflare.com/): CDN and DNS management
- [**Hetzner, Hover and Godaddy**](https://dns.hetzner.com/): Domain registration and management
- [**Gsuite**](https://gsuite.google.com/): E-Mail and productivity suite

## Desktop Apps

- **Window Manager**: [Mutter](<https://en.wikipedia.org/wiki/Mutter_(software)>)
  - **Desktop Environment**: [Gnome](https://en.wikipedia.org/wiki/GNOME)
- **Browser**: [Google Chrome](https://www.google.com/chrome/)
- **E-Mail Client**: [Gmail Web](https://mail.google.com/) and [Geary](https://wiki.gnome.org/Apps/Geary)
- **Office Suite**: [Google Docs](https://docs.google.com/) and [LibreOffice](https://www.libreoffice.org/)
- **Video Editing**: [Shotcut](https://shotcut.org/)
- **Graphics Editing**: [GIMP](https://gimp.org) & [Inkscape](https://inkscape.org/)
- **Audio Editing**: [Audacity](https://www.audacityteam.org/)
- **Music Manager**: [Clementine](https://www.clementine-player.org/)

## Workstation + Gear

- **Laptop**:
  - Processor: Intel Core™ Ultra 7 165H 22-core
  - RAM: 96GB DDR5
  - SSD: 4TB NVME
  - Keyboard: US International
  - OS: [Manjaro Linux](https://manjaro.org/)
- **External screen**: [LG UltraWide Curved QHD Monitor 35WN75CP-B](/resources/uses/lg-uw-curved-qhd-monitor-35wn75cp-b.jpg)
- **Keyboard**: [ZSA Voyager](/resources/uses/zsa-voyager.mp4)
- **Touchpad**: [seenda Touchpad](/resources/uses/seenda-touchpad.jpg)
- **Mouse**: [Logitech G300s](/resources/uses/logitech-g300s.jpg)
- **Microphone**: [Tonor Q9 USB Condenser Microphone](/resources/uses/tonor-q9-usb-condenser-mic.jpg)
- **Webcam**: [AnkerWork C310 Webcam](/resources/uses/anker-work-c310-webcam.jpg)
  - **Lighting**: [LitONES 2.7k - 6.5k](/resources/uses/litones.jpg)

## Various other stuff

- **Watch**: [Amazfit Bip 6](https://us.amazfit.com/products/bip-6)
- **Gaming**: [Odin2 Portal](https://www.ayntec.com/products/odin2-portal?variant=46016396198080)
- **Streaming**:
  - Netflix
  - Amazon Prime
  - Audible
