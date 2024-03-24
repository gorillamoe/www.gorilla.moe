---
title: Rotate a MP4 file while preserving codec and quality attributes with FFmpeg or Avidemux
description: How to rotate a MP4 file while preserving codec and quality attributes with FFmpeg or Avidemux
date: '2013-05-14'
categories:
  - ffmpeg
  - avidemux
  - video
published: true
---

## With Avidemux

1. Open Avidemux
2. Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd> (for Windows)
3. Select Rotate
4. Save

## With FFmpeg

Rotate 90 clockwise:

```sh
ffmpeg -i in.mov -vf "transpose=1" out.mov
```

For the transpose parameter you can pass:

```
0 = 90CounterCLockwise and Vertical Flip (default)
1 = 90Clockwise
2 = 90CounterClockwise
3 = 90Clockwise and Vertical Flip
```

Use `-vf "transpose=2,transpose=2"` for 180 degrees.

Note that this will re-encode the audio and video parts. You can usually copy the audio without touching it, by using `-c:a copy`. To change the video quality, set the bitrate (for example with `-b:v 1M`) or have a look at the H.264 encoding guide if you want VBR options.

Source: [Stack Overflow][stackoverflow-ffmpeg]

Easy as pie 👍



[stackoverflow-ffmpeg]: https://stackoverflow.com/questions/3937387/rotating-videos-with-ffmpeg#answer-9570992
