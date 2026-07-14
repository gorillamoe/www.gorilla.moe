---
title: Enable verbose debug logging for Python requests
excerpt: |
  How to enable verbose debug logging for the Python requests library.
description: |
  How to enable verbose debug logging for the Python requests library.
created: '2026-07-14'
updated: '2026-07-14'
tags:
  - python
  - python-requests
  - ssl
---

This is how you can enable verbose debug logging for the
Python `requests` library.

This is useful for debugging HTTP requests and responses.

```python
import requests
import logging
import http.client

http.client.HTTPConnection.debuglevel = 1
logging.basicConfig()
logging.getLogger().setLevel(logging.DEBUG)
req_log = logging.getLogger('requests.packages.urllib3')
req_log.setLevel(logging.DEBUG)
req_log.propagate = True
```
