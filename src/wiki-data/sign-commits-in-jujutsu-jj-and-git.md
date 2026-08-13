---
title: How to sign commits in Jujutsu (jj) and Git
excerpt: |
  How to sign commits in Jujutsu (jj) and Git using GPG/PGP keys.
description: |
  How to sign commits in Jujutsu (jj) and Git using GPG/PGP keys.
created: '2026-09-03'
tags:
  - git
  - jujutsu
  - jj
  - gpg
  - pgp
  - vcs
---

A brief guide on how to sign commits in Jujutsu (jj) and Git using GPG/PGP keys.

Assuming you don't have a GPG/PGP key yet,
you can generate one using the following command:

```sh
gpg --full-generate-key
```

When greeted with the prompt,
I would go with ECC (sign and encrypt):

```sh
Please select what kind of key you want:
  (1) RSA and RSA
  (2) DSA and Elgamal
  (3) DSA (sign only)
  (4) RSA (sign only)
  (9) ECC (sign and encrypt) *default*
  (10) ECC (sign only)
  (14) Existing key from card Your selection?
```

Then,
if it asks you for an elliptic curve,
choose Curve 25519, usually the default:

```sh
Please select which elliptic curve you want:
   (1) Curve 25519 *default*
   ...
```

Enter your name and email address when prompted.

Choose a strong passphrase for your key.

I would go with no expiration date for the key,
but you can choose an expiration date if you prefer.

Export your public and private key each to a file:

```sh
gpg --list-secret-keys --keyid-format=long
```

You'll see something like:

```text
sec   ed25519/ABCDEF1234567890 2026-09-03 [SC]
```

Then export the public key:

```sh
gpg --armor --export ABCDEF1234567890 > public-key.asc
```

And export the private key:

```sh
gpg --armor --export-secret-keys ABCDEF1234567890 > private-key.asc
```

To import later, you can use the following commands:

```sh
gpg --import public-key.asc
gpg --import private-key.asc
```

Back up these keys and the revocation certificate GnuPG automatically creates.
It's normally under:

```sh
ls -lah ~/.gnupg/openpgp-revocs.d/
```

Add your key to your [GitHub account](https://github.com/settings/keys)
(or other Git hosting service) by
copying the contents of `public-key.asc` and
pasting it into the GPG keys section of your account settings.

If you don't have the email address associated with your
GPG key in your GitHub account,
you can add it by going to your
[email settings](https://github.com/settings/emails).

Add this to your Git configuration:

```toml path=".config/git/gitconfig"
[user]
name = Gorilla Moe
email = me@gorilla.moe
signingkey = ABCDEF1234567890
```

For Jujutsu (jj),
you can add the following to your configuration:

```toml path=".config/jj/config.toml"
"$schema" = "https://jj-vcs.github.io/jj/latest/config-schema.json"

[user]
name = "Gorilla Moe"
email = "me@gorilla.moe"

[signing]
behavior = "own"
backend = "gpg"
backends.gpg.program = "gpg2"
```

Make sure to replace `Gorilla Moe`, `me@gorilla.moe`
(and `ABCDEF1234567890` in `gitconfig`) with your own values.
