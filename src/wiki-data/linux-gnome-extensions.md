---
title: Linux Gnome Extensions
excerpt: Everything related to Gnome Extensions
description: Everything related to Gnome Extensions
created: '2026-11-26'
updated: '2026-10-26'
tags:
  - archlinux
  - linux
  - gnome
  - gnome-extensions
---

## Disable all Gnome Extensions via Terminal

After installing or updating Gnome extensions
or Gnome itself, some extensions like Copyus
causes my Gnome to become completely unresponsive
and the only way to get Gnome working again
is to power off by holding power and on the GDM
login screen switch to TTY via CTRL+ALT+F1
and then disable all extensions

```sh
gsettings set org.gnome.shell disable-user-extensions true
```

after this, I can login normally again, without
a completely unresponsive Gnome session.

I usually remove the extension then and
enable the existing ones again.
