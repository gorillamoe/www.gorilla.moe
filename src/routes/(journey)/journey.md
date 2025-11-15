---
title: Journey
description: My journey through various jobs, projects, and experiences in the tech world.
date: '2025-11-15'
categories:
  - linux
  - software
  - webdev
  - dev
  - programming
  - projects
---

My journey through various jobs, projects, and experiences in the tech world.

## 2024 - Present - Cloud Native Backend Developer at TB International GmbH

Planned, built and deployed an
image service which enables all services at TB International to have a centralized service for image resolution.

It resolves product-images by GTIN,
internal item-code or t-number (which is specific to an automated store TB owns).

It can modify requested images in multiple ways.

The image service also offers some other utilities like generating barcodes.
It supports a multitude of backends as so-called providers.

I also planned,
built and deployed an authentication platform which
enables seamless authorization of various services against Microsoft Entra ID.

Refactored or rebuilt multiple services including
full CI automation and release management.

Integrated TB warehouse software with Amazon Marketplace via EDI.
The service has been built in Typescript from the ground up.

Tracked down multiple performance issues in
production systems and helped to solve them.

## 2019 - 2024 - DevOps Manager at t-online.de (Ströer Digital Publishing GmbH)

Helped transitioning from our k8s cluster to AWS.

The most interesting project in the AWS landscape included
two live streams we did.

Built the Infra handling the stream in AWS,
including various semi-automated kill switches.
If something would go wrong and we had to show a loop.

Looked into ad injections into the live feed.

Rebuilt the video player so it can handle live streams.
Streams were already supported,
but live-streams are different in that it has no end until you stop the feeding.

Built a tool to harvest the stream data from the live feed,
so the video editors could just create
snippets by supplying timestamps (from/to).

This was because they wanted to publish outtakes to
certain platforms during the ongoing livestream.

The team wanted to live-streams to be available as VOD afterwards.
The duration was roughly 3+ hours and I was a bit nervous
if the already aged video management system could handle that.
It worked quite well.

The "resume failed upload" feature came in handy,
due to the size of the input file and
the video editors using VPN from some countries that
don't have reliable internet access.

The offices in Frankfurt were shut down in March 2024 and
I was offered a severance package.

Maybe I could have stayed at the team called Buzz which was located in Berlin.

For which I already did some work mostly
regarding video performance on low end mobile devices.

Shout out to Matthias Naber,
our collab finding a solution to this was
one of the best experiences I had in my career!

I took the severance package and started looking for the next journey.

## 2018 - 2019 - Senior Software Engineer at t-online.de (Ströer Digital Publishing GmbH)

Helped the transition from on-prem bare-metal to
our own k8s cluster including CI/CD setups.

Developed some internal tooling for all journalists working for T-Online.

Architected, planned and built a Video Management System from
scratch to save the company a fortune (to get rid of the older SaaS).

This included a full package of:

- UI for the video editors
- buffered chunked uploads,
- resume failed uploads,
- real-time transcoding feedback,
- multi-provider with priority encoding,
- FTP, SFTP and S3 adapters for external companies to push videos
- on-demand transcoder pods (based on the current load)
- integrated health and integrity checks (that helped to debug issues we had with our S3 minio solution)
- a way to import the videos and metadata from the current SaaS system
- and a a custom built HTML5 Video-Player for t-online.de.

The biggest issue was the time constraint.

The contract was running out in a month.
I had to take the decision to renew it for at least a year or cancel it.
This would have meant that if I can't deliver in 1 month,
we'd probably loose all videos and metadata.
Videos made a big part of the revenue back then.
I took the leap and crunched through it with a lot of
all nighters and no days off until it was done.

The Video-Player was based off Video.js in its first iteration,
due to time constraints.

It was quickly swapped out with a complete rewrite without
any foundational work.
The newly built player supported a plugin system and
was one of the first ones to support OMID.
AFAIK, even the Google IMA SDK did not support it and there were no SDKs back then.
We had just the specifications as 100+ pages PDFs.

To be completely fair and transparent,
Schnee von Morgen with their HOMAD solution had this also working.

They helped me a lot to kickstart this.
Shout out to Nikolai Longolius, Vincent Schreiter and
Johannes Hofmann!

## 2016 - 2018 - Senior Developer at gofeminin.de (Funke National Brands GmbH)

Built tooling for automation of previously manual deployments.

Helped to migrate from SVN to Git (and GitLab).
Helped to build some browser games and
built tooling for translating several apps.

Built an Android and iOS health app.
Built certain advertising features that
helped to raise the revenue by quite a margin.
Implemented a working ad-blocker blocker,
which had to be taken down.

Because even if you lose ad revenue,
it's still necessary to have a huge amount of unique users,
so you get more ad revenue.
This seems to follow no logic, but that's the way it is.

Built services that automated most
workloads (which sadly led to people getting fired).

Dabbled a lot with CoffeeScript

Also helped design a service to fetch Google rankings.
It generated quite complex reports and had to mitigate
Google captchas (AI wasn't a thing back then).
I built this with our SEO expert in tandem.

I also changed the way our video producers supplied
the videos to all countries (mostly just DE, IT, ES, FR, US).
I built a service which consisted of several moving parts.

For the video editors, it just meant:
put the video file in this samba share.
The filename had to match a certain pattern,
otherwise the service would generate a `{filename}-error.txt` in the share.
Processed files just got deleted.
It wasn't super fancy, but it was a no-fuzz,
it just works TM solution that made everyone happy.

At that time,
I also had to deal with a lot of requests from designers and
product managers to install fonts on
their (corporate) locked down windows 7 PCs.
This led me to built an application to
"install" fonts without admin permissions in my spare time.
WinFonts4All was widely used,
even outside our company.
You might still find relevant search results about that.

Developed a windows app in my spare time that helped our
ad department to deploy changes in multiple countries easily.

Built a service that feeds our internal
Apache Solr, which powered our external multi-tenant search.

## 2009 - 2012 - Continued education at gofeminin.de (Axel Springer SE)

I continued my education at gofeminin.de.
This company was owned by Axel Springer SE (at that time).
Here, I honed my skills and knowledge in web development and digital media.

## 2008 - IT specialist apprenticeship at Arenga GmbH

I embarked on my journey in the tech world by
starting an apprenticeship as an IT specialist.

Sadly the company I worked for back then,
Arenga GmbH, had to file for insolvency in 2009.

However,
this experience laid the foundation for my future career in IT.
