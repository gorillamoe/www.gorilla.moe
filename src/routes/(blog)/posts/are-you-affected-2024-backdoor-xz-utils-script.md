---
title: Are you affected by the 2024 backdoor in xz-utils?
description: How to check if you are affected by the 2024 backdoor in xz-utils.
date: '2024-03-31 10:11'
categories:
  - linux
  - opsec
  - backdoor
  - ssh
published: true
---

Yesterday a backdoor was discovered in xz-utils 💔.
It made the rounds on all social media opsec channels.

You can read the full disclosure [here](https://www.openwall.com/lists/oss-security/2024/03/29/4) and.
[here](https://nvd.nist.gov/vuln/detail/CVE-2024-3094).

As the only affected versions are `5.6.0` and `5.6.1`,
you can check if you are affected by running the following command script
on a fleet of servers.

`CVE-2024-3094-checker.sh`

```sh
#!/usr/bin/env bash

VULNERABLE_MESSAGE="vulnerable"
SAFE_MESSAGE="safe"

if command -v apt-get &>/dev/null; then
    PKG_MANAGER="apt-get"
elif command -v zypper &>/dev/null; then
    PKG_MANAGER="zypper"
else
    echo "unsupported system"
    exit 1
fi

if [ "$PKG_MANAGER" = "zypper" ]; then
    version=$(rpm -q xz)
    if [[ $version =~ (5\\.6\\.(0|1)) ]]; then
        echo "$VULNERABLE_MESSAGE"
    else
        echo "$SAFE_MESSAGE"
    fi
elif [ "$PKG_MANAGER" = "apt-get" ]; then
    version=$(dpkg -l | grep "xz-utils" | awk '{print $3}')
    if [[ "$version" == *"5.6.0"* || "$version" == *"5.6.1"* ]]; then
        echo "$VULNERABLE_MESSAGE"
    else
        echo "$SAFE_MESSAGE"
    fi
fi
```

If you are affected, you should upgrade to a newer version of xz-utils,
or disable SSH on the affected servers.

Stay safe out there 🙃!
