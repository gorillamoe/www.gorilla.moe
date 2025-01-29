---
title: FFmpeg - height not divisible by 2
description: How to fix the error "height not divisible by 2" in FFmpeg
date: '2025-01-29 19:44'
categories:
  - linux
  - ubuntu
  - ffmpeg
  - video
published: true
---

When you are encoding a video with FFmpeg,
you may encounter the error `height not divisible by 2`.

This error occurs when the height of the video is not divisible by 2.
This is a common error when encoding videos with FFmpeg.

To fix this error,
you can add the `-vf "pad=ceil(iw/2)*2:ceil(ih/2)*2"` option to your FFmpeg command.

Here is an example:

```sh
ffmpeg -i input.webm -vf "pad=ceil(iw/2)*2:ceil(ih/2)*2" output.mp4
```

Happy hacking 🥷!
