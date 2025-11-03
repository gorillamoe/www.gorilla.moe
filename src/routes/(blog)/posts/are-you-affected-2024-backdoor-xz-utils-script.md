---
title: Are you affected by the 2024 backdoor in xz-utils?
description: How to check if you are affected by the 2024 backdoor in xz-utils.
created: '2024-03-31 13:48'
categories:
  - linux
  - opsec
  - backdoor
  - ssh
published: true
---

Yesterday (2024-03-29) a backdoor was discovered in xz-utils 💔.
It made the rounds on all social media opsec channels.

You can read the full disclosure [here](https://www.openwall.com/lists/oss-security/2024/03/29/4) and.
[here](https://nvd.nist.gov/vuln/detail/CVE-2024-3094).

As the only affected versions are `5.6.0` and `5.6.1`,
you can check if you are affected by running the gist below.
on a fleet of servers.

https://gist.github.com/gorillamoe/5922aa7b410ea6f03a57d25490492c02

If you are affected, you should upgrade to a newer version of xz-utils,
or disable SSH on the affected servers.

Stay safe out there 🙃!
