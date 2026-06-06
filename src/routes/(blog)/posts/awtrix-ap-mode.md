---
title: Awtrix in AP Mode
description: How to configure Awtrix in Access Point mode and use its API for notifications.
created: '2026-06-06'
categories:
  - awtrix
  - iot
  - help
  - examples
  - guides
  - how-to
published: true
---

## How to Configure Wi-FiConnection in AP Mode

Use your phone or computer to search for Wi-Fi networks and
connect to the one named awtrix_XXXX.

Password: When prompted,
use the default password

```text
12345678
```

### Configure
Open a web browser on your connected device and
navigate to [192.168.4.1](http://192.168.4.1).

Join: In the setup portal,
enter your local 2.4GHz Wi-Fi SSID and password,
then click connect.

### Restart

The display will save the settings,
exit AP mode,
and restart to connect to your home network.

### How to Use the API

A small example of how to use the API to add and
remove rainbow text notifications:

```http
@IP = 192.168.178.40
@TEXT = Hello world!

### ADD_RAINBOW_TEXT

POST http://{{ IP }}/api/notify HTTP/1.1
Content-Type: application/json

{
  "text": "{{ TEXT }}",
  "rainbow": true,
  "repeat": -1,
  "hold": true
}

### REMOVE_RAINBOW_TEXT

POST http://{{ IP }}/api/notify HTTP/1.1
Content-Type: application/json

{}
```
