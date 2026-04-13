---
title: Uses
description: A list of services, hard- and software I use on a daily basis
date: '2026-04-14'
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

These are the ones I use nearly every day, sorted alphabetically:

- [**awscli**](https://aws.amazon.com/cli/): Amazon Web Services
- [**bat**](https://github.com/sharkdp/bat): a cat(1) clone with wings.
- [**black**](https://black.readthedocs.io/en/stable/): code formatter for python
- [**cek**](https://github.com/bschaatsbergen/cek): explore the (overlay) filesystem and layers of oci container images, without running them
- [**cidr**](https://github.com/bschaatsbergen/cek): simplifies IPv4/IPv6 CIDR network prefix management with counting, overlap checking, explanation, and subdivision
- [**cliamp**](https://www.cliamp.stream/): a retro music player inspired by winamp, built for the terminal
- [**csvq**](https://mithrandie.github.io/csvq/): command-line tool for querying csv files using sql-like syntax
- [**direnv**](http://direnv.net/): unclutter your .profile
- [**docker**](https://www.docker.com/): Containerization platform
- [**eslint**](https://eslint.org/): linter for javascript and typescript
- [**evalcache**](https://github.com/mroth/evalcache): zsh plugin to cache eval loads to improve shell startup time
- [**fastfetch**](https://github.com/fastfetch-cli/fastfetch): neofetch like system information tool
- [**fd**](https://github.com/sharkdp/fd): a simple, fast and user-friendly alternative to 'find'
- [**ffmpeg**](https://ffmpeg.org/): command-line tool for video and audio processing
- [**fzf**](https://junegunn.github.io/fzf/): command-line fuzzy finder
- [**gcloud**](https://cloud.google.com/sdk/docs/install): Google Cloud CLI
- [**git**](https://git-scm.com/): version control system
  - [**gh**](https://cli.github.com/): github cli
  - [**gitleaks**](https://github.com/gitleaks/gitleaks): detect hardcoded secrets in git repositories
- [**go-grip**](https://github.com/chrishrb/go-grip): Preview markdown files locally before committing them
- [**helm**](https://helm.sh/): Kubernetes package manager
- [**hyperfine**](https://github.com/sharkdp/hyperfine): command-line benchmarking tool
- [**imagick**](https://imagemagick.org/): Command-line tool for image manipulation
- [**jq**](https://stedolan.github.io/jq/): command-line json processor
- [**kimbia**](https://kimbia.mwco.app/): minimal cross-platform task runner.
- [**kuba**](https://kuba.mwco.app/): Easily access your secrets without messing with dotenv files
- [**kubectl**](https://kubernetes.io/docs/tasks/tools/): Kubernetes CLI
- [**kulala-cli**](https://cli.getkulala.net): Like httpYac, with support for GraphQL, gRPC, and websockets, compatible with JetBrains HTTP client
- [**mise**](https://mise.jdx.dev/): the front-end to your dev env
- [**oh-my-posh**](https://ohmyposh.dev/): Customisable and low-latency cross platform/shell prompt renderer
- [**openvpn**](https://openvpn.net/): vpn solution that just works
- [**oryx**](https://github.com/pythops/oryx): tui for sniffing network traffic using ebpf
- [**oxfmt**](https://oxc.rs/docs/guide/usage/formatter.html): high-performance code formatter for javascript and typescript
- [**oxlint**](https://oxc.rs/docs/guide/usage/linter.html): high-performance linter for javascript and typescript
- [**paru**](https://github.com/Morganamilo/paru): The GOAT AUR helper for Arch Linux
- [**pgcli**](https://github.com/dbcli/pgcli): cli for postgresql with autocompletion and syntax highlighting
- [**pnpm**](https://pnpm.io/): fast and disk space efficient package manager for javascript
- [**podman**](https://podman.io/): Containerization platform
- [**prettier**](https://prettier.io/): code formatter
- [**ripgrep**](https://github.com/burntsushi/ripgrep): fast search tool
- [**shellcheck**](https://github.com/koalaman/shellcheck): shellcheck, a static analysis tool for shell scripts
- [**sshuttle**](https://github.com/sshuttle/sshuttle): transparent proxy server that works as a poor man's vpn
- [**stylelint**](https://stylelint.io/): linter for css and tailwind css
- [**stylua**](https://github.com/johnnymorganz/stylua): a lua code formatter
- [**terraform**](https://www.terraform.io/): Infrastructure as Code tool
  - [**terragrunt**](https://terragrunt.gruntwork.io/): For everything more complex than pretty basic Terraform
  - [**terramate**](https://terramate.io/): Just because our legacy infrastructure is using this 🙈
- [**turborepo**](https://turborepo.dev/): Monorepo build system
- [**vale**](https://vale.sh/): linter for prose
- [**vhs**](https://github.com/charmbracelet/vhs): record and replay terminal sessions with style
- [**vite+**](https://viteplus.dev/): Manage your runtime, package manager, and frontend stack with one tool
- [**whosthere**](https://github.com/ramonvermeulen/whosthere): Local Area Network discovery tool with an interactive TUI
- [**wireguard**](https://www.wireguard.com/): modern vpn solution, but more complex to set up
- [**witr**](https://github.com/pranshuparmar/witr): Why is this running?
- [**yazi**](https://yazi-rs.github.io/): blazing fast terminal file manager written in rust, based on async i/o.
- [**yq**](https://github.com/mikefarah/yq): yq is a portable command-line yaml, json, xml, csv, toml, hcl and properties processor
- [**zana**](https://getzana.net/): Install and update LSP/DAP servers, DAP servers, linters, and formatters
- [**zns**](https://github.com/znscli/zns): cli tool for querying dns records with readable, colored output
- [**zoxide**](https://github.com/ajeetdsouza/zoxide): smarter cd command

## Programming

Maybe, just maybe, I forgot something... 🙈

### Runtimes

These are the runtimes I use for my projects, sorted alphabetically:

- [**bun**](https://bun.sh/): JavaScript runtime, package manager, and bundler
- [**deno**](https://deno.land/): JavaScript and TypeScript runtime with a focus on security and modern features
- [**node.js**](https://nodejs.org/): JavaScript runtime

### Frameworks

These are the frameworks I use for my projects, sorted alphabetically:

- [**Hono**](https://hono.dev/): Web framework for TypeScript with a focus on performance
- [**Next.js**](https://nextjs.org/): Web framework
- [**Strawberry**](https://strawberry.rocks/): GraphQL framework for Python
- [**SvelteKit**](https://kit.svelte.dev/): Web framework

### Libraries

These are the libraries I use for my projects, sorted alphabetically:

- [**Drizzle ORM**](https://orm.drizzle.team/): ORM for Node.js and TypeScript, with a focus on type safety
- [**Prisma**](https://www.prisma.io/): ORM for Node.js and TypeScript
- [**Tailwind CSS**](https://tailwindcss.com/): CSS framework
  - [**DaisyUI**](https://daisyui.com/): UI component library for Tailwind CSS

### Languages

These are the programming languages I use for my projects, sorted alphabetically:

- [**Bash**](https://www.gnu.org/software/bash/): I love myself some good old shell scripting
- [**CSharp**](https://learn.microsoft.com/en-us/dotnet/csharp/): Only if absolutely necessary
- [**Go**](https://go.dev/): Close second
- [**Python**](https://www.python.org/): If I have to..
- [**Rust**](https://www.rust-lang.org/): I try to avoid it, but I have to use it sometimes
- [**TypeScript**](https://www.typescriptlang.org/): Just bliss
- [**Zig**](https://ziglang.org/): Currently learning, seems really nice

### Design + prototyping

These are the tools I use for design and prototyping, sorted alphabetically:

- [**draw.io**](https://app.diagrams.net/): Simply the GOAT for diagramming
- [**Excalidraw**](https://excalidraw-desktop.mwco.app/): Quick sketches and wireframes
- [**Figma**](https://www.figma.com/): For collaborative design work

### Cloud computing

These are the cloud computing platforms I use for my projects, sorted alphabetically:

- [**Amazon Web Services**](https://aws.amazon.com/): For some specific services
- [**Google Cloud Platform**](https://cloud.google.com/): This is my daily business
- [**Hetzner Cloud**](https://www.hetzner.com/cloud): Most of my private and OSS projects are hosted here

### Server software

This is the server software I use for my projects, sorted alphabetically:

- [**Apache**](https://httpd.apache.org/): Web server
- [**Caddy**](https://caddyserver.com/): Web server and reverse proxy with automatic HTTPS
- [**Grafana**](https://grafana.com/): Analytics and monitoring platform
- [**Kubernetes**](https://kubernetes.io/): Container orchestration
- [**LetsEncrypt**](https://letsencrypt.org/): Free SSL/TLS certificates
- [**MinIO**](https://min.io/): Object storage server (discontinued)
- [**MongoDB**](https://www.mongodb.com/): NoSQL database, great for certain use cases
- [**MySQL**](https://www.mysql.com/): The longtime champion, still good
- [**Nginx**](http://f5.com/products/nginx#overview): Web server and reverse proxy
- [**PostgreSQL**](https://www.postgresql.org/): My go-to relational database
- [**Prometheus**](https://prometheus.io/): Monitoring and alerting toolkit
- [**Redis**](https://redis.io/): In-memory data structure store
- [**SQLite**](https://www.sqlite.org/index.html): Lightweight database, I mostly use it for single user and/or offline applications
- [**Traefik**](https://traefik.io/): Reverse proxy and load balancer

### Software as a Service (SaaS)

This is the software as a service I use for my projects, sorted alphabetically:

- [**Bitbucket**](https://bitbucket.org/): Really bad, but we use it at my day job
- [**Cloudflare**](https://www.cloudflare.com/): CDN and DNS management
- [**Docker Hub**](https://hub.docker.com/): Container image registry
- [**Github Pages**](https://pages.github.com/): Static site hosting, quick and easy
- [**Github**](https://github.com/): Code hosting platform, better than the competition
- [**Gitlab**](https://gitlab.com/): Close second for code hosting platform
- [**Gsuite**](https://gsuite.google.com/): E-Mail and productivity suite
- [**Hetzner, Hover and Godaddy**](https://dns.hetzner.com/): Domain registration and management
- [**Node package registry**](https://www.npmjs.com/): Package registry for JavaScript
- [**PyPI**](https://pypi.org/): Package registry for Python

## Desktop Apps

This is the software I use on a daily basis for my desktop work:

- **Window Manager**: [Mutter](<https://en.wikipedia.org/wiki/Mutter_(software)>)
  - **Desktop Environment**: [Gnome](https://en.wikipedia.org/wiki/GNOME)
    - **Extensions**: [](https://extensions.gnome.org/extension/8834/copyous/)
      - [AppIndicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/)
      - [Caffeine](https://extensions.gnome.org/extension/517/caffeine/)
      - [Copyus](https://extensions.gnome.org/extension/8834/copyous/)
      - [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)
      - [Frequency Boost Switch](https://extensions.gnome.org/extension/4792/frequency-boost-switch/)
      - [Tiling Shell](https://extensions.gnome.org/extension/7065/tiling-shell/)
- **Browser**: [Google Chrome](https://www.google.com/chrome/)
- **E-Mail Client**: [Gmail Web](https://mail.google.com/) and [Geary](https://wiki.gnome.org/Apps/Geary)
- **Office Suite**: [Google Docs](https://docs.google.com/) and [LibreOffice](https://www.libreoffice.org/)
- **Video Editing**: [Shotcut](https://shotcut.org/)
- **Graphics Editing**: [GIMP](https://gimp.org) & [Inkscape](https://inkscape.org/)
- **Audio Editing**: [Audacity](https://www.audacityteam.org/)

## Workstation + Gear

This is the hardware I use for my work:

- **Laptop**:
  - Processor: Intel Core™ Ultra 7 165H 22-core
  - RAM: 96GB DDR5
  - SSD: 4TB NVME
  - Keyboard: US International
  - OS: [CachyOS](https://cachyos.org/)
- **External screen**: [LG UltraWide Curved QHD Monitor 35WN75CP-B](/resources/uses/lg-uw-curved-qhd-monitor-35wn75cp-b.jpg)
- **Keyboard**: [ZSA Voyager](/resources/uses/zsa-voyager.mp4)
- **Touchpad**: [seenda Touchpad](/resources/uses/seenda-touchpad.jpg)
- **Mouse**: [Logitech G300s](/resources/uses/logitech-g300s.jpg)
- **Microphone**: [Tonor Q9 USB Condenser Microphone](/resources/uses/tonor-q9-usb-condenser-mic.jpg)
- **Webcam**: [AnkerWork C310 Webcam](/resources/uses/anker-work-c310-webcam.jpg)
  - **Lighting**: [LitONES 2.7k - 6.5k](/resources/uses/litones.jpg)

## Various other stuff

This is some other stuff I use non-regularly, but still want to mention:

- **Watch**: [Amazfit Bip 6](https://us.amazfit.com/products/bip-6)
- **Gaming**: [Ayn Odin 2 Portal Max](https://www.ayntec.com/products/odin2-portal?variant=46016396198080)
  - [GameNative](https://gamenative.app/)
  - [GeForce Now](https://www.nvidia.com/en-us/geforce-now/)
  - [Steam](https://store.steampowered.com/)
- **Streaming**:
  - Netflix
  - Amazon Prime
  - Audible
