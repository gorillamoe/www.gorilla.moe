---
title: Make Apple Developer Certificates and Provisioning Profiles Work on Linux
description: How to make Apple Developer Certificates and Provisioning Profiles work on Linux.
created: '2025-03-10 01:01:00'
categories:
  - devops
  - dev
  - apple
  - macos
  - cicd
published: true
---

Lately, I've been working on some projects that required me to build and sign macOS applications on my Linux machine.

This is a guide on how to make Apple Developer Certificates and Provisioning Profiles work on Linux.

1. Create a new directory;

```sh
mkdir -p ~/.apple-certificates && cd ~/.apple-certificates
```

2. Generate a certificate signing request

```sh
openssl req -nodes -newkey rsa:2048 -keyout macos.key -out CertificateSigningRequest.certSigningRequest
```

3. With the information like so (make sure to it a password):

```
Country Name (2 letter code) [AU]:DE
State or Province Name (full name) [Some-State]:Sankt Augustin
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:mistweaverco
Organizational Unit Name (eg, section) []:IT
Common Name (e.g. server FQDN or YOUR name) []:mistweaverco.com
Email Address []:
```

4. Go to the [Apple Developer Portal](https://developer.apple.com) and [create a new certificate](https://developer.apple.com/account/resources/certificates/list).

5. Go through the wizard (either of the _Developer ID_ ones), selecting the certificate type, and uploading the .csr.

6. Download the .cer file, saving it to the folder created in step 1

7. Convert the .cer file to a .pem file

```sh
openssl x509 -in macos.cer -inform DER -out macos.pem -outform PEM
```

8. Convert the .pem to a .p12:

```sh
openssl pkcs12 -export -legacy -inkey macos.key -in macos.pem -out macos.p12
```

9. You can now create a "Provisioning Profile" in the "Member Center" on
   developer.apple.com using the certificate you made in step 4
