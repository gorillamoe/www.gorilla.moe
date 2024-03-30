---
title: Are you affected by the 2024 backdoor in xz-utils?
description: How to check if you are affected by the 2024 backdoor in xz-utils.
date: '2024-03-30 15:45'
categories:
  - linux
  - opsec
  - backdoor
  - ssh
published: true
---

Yesterday a backdoor was discovered in xz-utils 💔.
It made the rounds on all social media opsec channels.

You can read the full disclosure [here](https://www.openwall.com/lists/oss-security/2024/03/29/4).

As the only affected versions are `5.6.0` and `5.6.1`,
you can check if you are affected by running the following command script
on a fleet of servers.

`xz-affected-check-colored.sh`

```sh
#!/usr/bin/env bash

RED='\\033[0;31m'
GREEN='\\033[0;32m'
NC='\\033[0m'

AFFECTED_MSG="${RED}affected${NC}"
NOT_AFFECTED_MSG="${GREEN}not affected${NC}"

if ! command -v xz &> /dev/null
then
    echo -e "${NOT_AFFECTED_MSG}"
    exit
fi

if xz --version | grep -q "5.6.0\\|5.6.1"; then
    echo -e "${AFFECTED_MSG}"
else
    echo -e "${NOT_AFFECTED_MSG}"
fi
```

If you don't like the colors 🤷, here is a version without colored output

`xz-affected-check.sh`

```sh
#!/usr/bin/env bash

AFFECTED_MSG="affected"
NOT_AFFECTED_MSG="not affected"

if ! command -v xz &> /dev/null
then
    echo "${NOT_AFFECTED_MSG}"
    exit
fi

if xz --version | grep -q "5.6.0\\|5.6.1"; then
    echo "${AFFECTED_MSG}"
else
    echo "${NOT_AFFECTED_MSG}"
fi
```

If you happen to only check a single server or your desktop,
you can run this simple one-liner in your terminal:

```sh
xz --version | grep -q "5.6.0\\|5.6.1" && echo "affected" || echo "not affected"
```

If you are affected, you should upgrade to a newer version of xz-utils,
or disable SSH on the affected servers.

Stay safe out there 🙃!
