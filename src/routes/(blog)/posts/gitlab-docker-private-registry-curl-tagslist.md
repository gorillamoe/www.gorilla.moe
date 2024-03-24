---
title: How to get a list of tags from a private GitLab Docker Registry with curl
description: We tried to mirror the Docker images (all tags) of the private GitLab Docker Registry from a project we sourced to an external company. This has been a real struggle, because I haven't done this before and I had no idea how to get this thing going.
date: '2018-10-30 16:28:15'
categories:
  - gitlab
  - devops
  - dev
  - docker
published: true
---

We tried to mirror the Docker images (all tags) of the
private GitLab Docker Registry from a project we sourced to an external company.

This has been a real struggle,
because I haven't done this before and I had no idea how to get this thing going.

## Prerequisites

- [Bash](<https://en.wikipedia.org/wiki/Bash_(Unix_shell)>)
- [curl](https://curl.haxx.se/)
- [jq](https://stedolan.github.io/jq/)

Instead of placeholders, we assume that our GitLab is available at
`git.itjustworks.cc` and our GitLab Docker Container Registry is availabe at
`registry.itjustworks.cc`.

Anyway, this is how you do it in bash:

## Use a token instead of a password

Log into Gitlab, then head over to your settings page and click on _Access Tokens_

(https://<em>git.itjustworks.cc</em>/<strong>profile/personal_access_tokens</strong>)

Create an access token with _read_registry_ scope.
This _grants read-only access to container registry images on private projects._

## Encode username and token

To get the bearer token, we have to authenticate and this is done with our _username_ (`gorillamoe`) and our _access_token_ (`for_the-LulZ`).

It would be way too easy, if we could just pass them as they are;
we have to `base64`-encode them like so:

```sh
basic_auth_encoded=$(echo "gorillamoe:for_the-LulZ" | base64 -)
```

Then `echo`ing should give us `Z29yaWxsYS5tb2U6Zm9yX3RoZS1MdWxaCg==`:

```sh
echo $basic_auth_encoded
# should be Z29yaWxsYS5tb2U6Zm9yX3RoZS1MdWxaCg==
```

## Request bearer token

You need to also pass it the path of the docker image.
In dockerhub-land there is only `username/image-name`
(e.g. `https://hub.docker.com/gorillamoe/seefu/` would be `gorillamoe/seefu`),
but in GitLab there is no such limitation. It could be anything.

For simplicitys sake, let's assume the docker image URL is
`registry.itjustworks.cc/foo/bar/baz/gorillamoe`,
then the path is `foo/bar/baz/walialu`.

Now that we have our credentials encoded, we request a bearer token:

```sh
docker_image_path="foo/bar/baz/gorillamoe"
bearer_token=$(curl -s -X GET -H "Authorization: Basic $basic_auth_encoded" "https://git.itjustworks.cc/jwt/auth?client_id=docker&offline_token=true&service=container_registry&scope=repository:$docker_image_path:push,pull" | jq -r .token)
```

## Request tags list

Now, that we have the bearer token,
we can request the tags:

```sh
tags=$(curl -s -X GET -H "Authorization: Bearer $bearer_token" "https://registry.itjustworks.cc/v2/$docker_image_path/tags/list" | jq -rc .tags[])
```

## Iterate over each tag in list

And iterate over all them tags is easy as pie:

```sh
echo "Tags for $docker_image_path"
for tag in $tags; do
	echo "$tag"
done
```

That's it!
