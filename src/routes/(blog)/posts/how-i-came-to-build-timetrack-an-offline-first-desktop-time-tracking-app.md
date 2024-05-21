---
title: How I came to build timetrack
description: A story about how I came to build timetrack, an offline-first desktop time tracking app
date: '2024-05-21 22:33'
categories:
  - linux
  - windows
  - macos
  - app
  - electron
  - typescript
  - golang
published: true
---

It all started with a simple inquiry from my wife:

Can you search for a time tracking app that works offline,
that doesn't require a subscription,
that doesn't store my data in the cloud,
that doesn't require me to create an account,
that doesn't require me to log in,
that is dead simple to use?

Sure thing, I said. I'll find one for you.

I searched high and low,
but I couldn't find one that met all of her requirements.
I found some that met some of her requirements,
but none that met all of them.

Most of the time tracking apps I found were either too complex,
or required a subscription, or stored data in the cloud,
or required an account, or required a login,
or required an internet connection,
or needed to be installed on a server.

Then I asked what the app needed exactly to do.

The response was clear: I just need to be able to track my time.
It doesn't need to do anything else.

It doesn't need to generate reports,
it doesn't need to have a calendar view,
it doesn't need to to store the data.

Just a counter with a text of the activity that I can start and stop and
when I exit the app, nothing needs to be stored...

Alright, that is easy to do, I thought.

I started to build the app using golang and with the use of the
awesome CharmCLI libraries.

It looked good and everything was working as expected.

Then, after my wife started using it,
she asked me if I could make it so that it stored the data.

Sure thing, I said. I'll add that feature.
I added a sqlite db to store the data and it was working great.

Then she asked if it could also have a generate a PDF report feature.

That's when I decided to rewrite the app using Electron and plain old JavaScript.

It was working and I had a CI pipeline that was building the app for Linux, Windows and MacOS.

But I wasn't happy with the codebase, it was getting too big and too complex
and it was a pain to maintain, because it was quite messy.

I did deliver quite fast, because I just hacked it together, but I knew that I had to rewrite it.

I decided to rewrite it using TypeScript, React and Vite.

I struggled quite a bit, because I was new to Electron and also never used Redux before.
But I needed to have a global store and the ovious choice was Redux.

I also had to learn quite a bit about
best practices when it comes to Electron and database migrations,
because the app needed to be backwards compatible with the old sqlite db,
at least it should not lose the data or prompt the user to do anything manually.

Then I faced a bug in the Electron forge TS + React + Vitejs template that I was using.
Under some circumstances, the app wouldn't build for MacOS and Linux.
I had to fix it and I had to learn quite a bit about the Electron forge internals.

Then I fixed it and I was able to build the app for all platforms.

I'm happy with the result and my wife is happy with the app.

Maybe you want to try it out, too, here it is: [timetrack.mistweaver.co](https://timetrack.mistweaver.co).
