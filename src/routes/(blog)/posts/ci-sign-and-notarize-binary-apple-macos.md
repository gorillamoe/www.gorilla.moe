---
title: How to sign and notarize a binary for Apple macOS in CI/CD
description: A step-by-step guide on signing and notarizing macOS binaries in a CI/CD pipeline.
created: '2025-10-29 16:42:00'
categories:
  - devops
  - dev
  - apple
  - macos
  - cicd
published: true
---

# Import an Apple signing certificate and provisioning profile in CI/CD

This guide provides a script to import an Apple signing certificate and
provisioning profile in a CI/CD environment.
This only works for macOS.

The script creates a temporary keychain,
imports the certificate,
and sets up necessary outputs for later steps in the pipeline.

```bash filename="ci-import-apple-certs.sh"
#!/usr/bin/env bash

# Needs to be run in macOS environment
# Imports Apple signing certificate and provisioning profile from GitHub secrets
# Creates temporary keychain and imports certificate into it
# Sets up outputs for use in later steps
#
# Requires the following secrets to be set and assigned to env in the repository:
# - BUILD_CERTIFICATE_BASE64: Base64 encoded .p12 certificate file
# - P12_PASSWORD: Base64 encoded password for the .p12 certificate
# - BUILD_PROVISION_PROFILE_BASE64: Base64 encoded .mobileprovision file
# - AUTH_KEY_BASE64: Base64 encoded .p8 auth key file for notarization

# Temporary directory
RUNNER_TEMP=${RUNNER_TEMP:-/tmp}

# Check where to output variables into
# GITHUB_OUTPUT is set by GitHub Actions automatically
# BITBUCKET_PIPELINES_VARIABLES_PATH is a custom variable for Bitbucket Pipelines
# CI_JOB_VARIABLES_FILE is set by GitLab CI/CD automatically
VARIABLES_OUTPUT_PATH=""

if [ -n "$GITHUB_OUTPUT" ]; then
  VARIABLES_OUTPUT_PATH="$GITHUB_OUTPUT"
elif [ -n "$BITBUCKET_PIPELINES_VARIABLES_PATH" ]; then
  VARIABLES_OUTPUT_PATH="$BITBUCKET_PIPELINES_VARIABLES_PATH"
elif [ -n "$CI_JOB_VARIABLES_FILE" ]; then
  VARIABLES_OUTPUT_PATH="$CI_JOB_VARIABLES_FILE"
fi

if [ -z "$VARIABLES_OUTPUT_PATH" ]; then
  echo "No CI/CD variables output path found. Exiting."
  exit 1
fi

# create variables
CERTIFICATE_PATH=$RUNNER_TEMP/build_certificate.p12
PP_PATH=$RUNNER_TEMP/build_pp.provisionprofile
KEYCHAIN_PATH=$RUNNER_TEMP/app-signing.keychain-db
AUTH_KEY_PATH=$RUNNER_TEMP/AuthKey.p8
KEYCHAIN_PASSWORD=$(date +%s | sha256sum | base64 | head -c 32)
P12_PASSWORD=$(echo -n "$P12_PASSWORD" | base64 --decode)

# import certificate and provisioning profile from secrets
echo -n "$BUILD_CERTIFICATE_BASE64" | base64 --decode -o "$CERTIFICATE_PATH"
echo -n "$BUILD_PROVISION_PROFILE_BASE64" | base64 --decode -o "$PP_PATH"

# create temporary keychain
security create-keychain -p "$KEYCHAIN_PASSWORD" "$KEYCHAIN_PATH"
security set-keychain-settings -lut 21600 "$KEYCHAIN_PATH"
security unlock-keychain -p "$KEYCHAIN_PASSWORD" "$KEYCHAIN_PATH"

# import certificate to keychain
security import "$CERTIFICATE_PATH" -P "$P12_PASSWORD" -A -t cert -f pkcs12 -k "$KEYCHAIN_PATH"
security set-key-partition-list -S apple-tool:,apple: -k "$KEYCHAIN_PASSWORD" "$KEYCHAIN_PATH"
security list-keychain -d user -s "$KEYCHAIN_PATH"

# apply provisioning profile
mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
cp "$PP_PATH" ~/Library/MobileDevice/Provisioning\ Profiles

# create auth key file for notarization
echo -n "$AUTH_KEY_BASE64" | base64 --decode -o "$AUTH_KEY_PATH"

# setup outputs
{
  echo "auth_key_path=$AUTH_KEY_PATH";
  echo "keychain_path=$KEYCHAIN_PATH";
  echo "pp_path=$PP_PATH";
  echo "certificate_path=$CERTIFICATE_PATH";
} >> "$VARIABLES_OUTPUT_PATH"
```

## Signing and notarizing the binary

Once the certificate and provisioning profile are imported,
you can sign and notarize your macOS binary using the following commands:

```bash filename="ci-sign-and-notarize-binary.sh"
#!/usr/bin/env bash

# Needs to be run in macOS environment
# Signs and notarizes a macOS binary
#
# Requires the following environment variables to be set:
# - CODESIGNING_IDENTITY: Base64 encoded signing identity
# - CODESIGNING_PREFIX: Base64 encoded signing prefix
# - APPLE_KEY_ID: Base64 encoded signing key ID
# - APPLE_ISSUER: Base64 encoded signing issuer ID
# - APPLE_AUTH_KEY_PATH: Path to the Apple auth key file for notarization
# - WEBHOOK_URL: (optional) Webhook URL to send notification upon completion
#
# Example usage:
# export CODESIGNING_IDENTITY=$(echo -n "Developer ID Application: Your Name (TEAMID)" | base64)
# export CODESIGNING_PREFIX=$(echo -n "com.yourcompany.yourapp" | base64)
# export APPLE_KEY_ID=$(echo -n "ABC123DEFG" | base64)
# export APPLE_ISSUER=$(echo -n "XYZ987UVW" | base64)
# export APPLE_AUTH_KEY_PATH="/path/to/AuthKey.p8"
# export WEBHOOK_URL="https://hooks.example.com/notify"
# ./sign-and-notarize-binary.sh dist/my-app-cli

if [ -z "$CODESIGNING_IDENTITY" ] || [ -z "$CODESIGNING_PREFIX" ]; || [ -z "$APPLE_KEY_ID" ] || [ -z "$APPLE_ISSUER" ] || [ -z "$APPLE_AUTH_KEY_PATH" ]; then
  echo "CODESIGNING_IDENTITY, CODESIGNING_PREFIX, APPLE_KEY_ID, APPLE_ISSUER, and APPLE_AUTH_KEY_PATH environment variables must be set."
  exit 1
fi

if [ -z "$1" ]; then
  echo "You must provide the full path to the binary as the first argument."
  exit 1
fi

# Full path to the binary
FULL_PATH_TO_BINARY="$1"

if [ ! -f "$FULL_PATH_TO_BINARY" ]; then
  echo "The binary at path '$FULL_PATH_TO_BINARY' does not exist."
  exit 1
fi

# get binary name
BINARY_NAME=$(basename "$FULL_PATH_TO_BINARY")

# Temporary directory
RUNNER_TEMP=${RUNNER_TEMP:-/tmp}

CODESIGNING_IDENTITY=$(base64 --decode <<< "$CODESIGNING_IDENTITY")
CODESIGNING_PREFIX=$(base64 --decode <<< "$CODESIGNING_PREFIX")
codesign --sign "$CODESIGNING_IDENTITY" \
  --prefix "$CODESIGNING_PREFIX" \
  --options runtime dist/my-app-cli

# Zip the binary for notarization
zip -r "$RUNNER_TEMP/${BINARY_NAME}.zip" "$FULL_PATH_TO_BINARY"

APPLE_KEY_ID=$(base64 --decode <<< "$APPLE_KEY_ID")
APPLE_ISSUER=$(base64 --decode <<< "$APPLE_ISSUER")

# Notarize the binary
xcrun notarytool submit "$RUNNER_TEMP/${BINARY_NAME}.zip" \
  --key "$APPLE_AUTH_KEY_PATH" \
  --key-id "$APPLE_KEY_ID" \
  --issuer "$APPLE_ISSUER" \
  --wait

# Check notarization status
NOTARIZATION_STATUS=$?

if [ $NOTARIZATION_STATUS -ne 0 ]; then
  echo "Notarization failed."
  # If a webhook URL is provided, send a notification
  if [ -n "$WEBHOOK_URL" ]; then
    curl -X POST -H "Content-Type: application/json" -d "{\"success\":false,\"text\":\"Notarization of $BINARY_NAME failed.\"}" "$WEBHOOK_URL"
  fi
  exit 1
fi

# If a webhook URL is provided, send a notification
if [ -n "$WEBHOOK_URL" ]; then
  curl -X POST -H "Content-Type: application/json" -d "{\"success\":true,\"text\":\"Notarization of $BINARY_NAME succeeded.\"}" "$WEBHOOK_URL"
fi
```

## GitHub Actions Example

Here is an example of how to use the above scripts in a GitHub Actions workflow:

```yaml filename=".github/workflows/macos-sign-and-notarize.yml"
---
name: Release

on:
  push:
    tags:
      - 'v[0-9]+.[0-9]+.[0-9]+'
jobs:
  build-macos:
    name: Build for macOS
    runs-on: macos-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Set up env
        run: |
          VERSION=${GITHUB_REF_NAME#v}
          echo "VERSION=$VERSION" >> $GITHUB_ENV
          echo "PLATFORM=macos" >> $GITHUB_ENV
      - name: Set up Go
        uses: actions/setup-go@v5
        with:
          go-version: 1.24
      - name: Build for macOS
        run: ./scripts/build.sh
      - name: Install the Apple certificate, provisioning profile, and API key
        id: keychain
        env:
          BUILD_CERTIFICATE_BASE64: ${{ secrets.APPLE_BUILD_CERTIFICATE_BASE64 }}
          P12_PASSWORD: ${{ secrets.APPLE_P12_PASSWORD }}
          BUILD_PROVISION_PROFILE_BASE64: ${{ secrets.APPLE_BUILD_PROVISION_PROFILE_BASE64 }}
          AUTH_KEY_BASE64: ${{ secrets.APPLE_AUTH_KEY_BASE64 }}
        run: ./scripts/ci-import-apple-certs.sh
      - name: Sign the amd64 binary
        env: CODESIGNING_IDENTITY=${{ secrets.APPLE_CODESIGNING_IDENTITY }}
          CODESIGNING_PREFIX=${{ secrets.APPLE_CODESIGNING_PREFIX }}
          APPLE_KEY_ID=${{ secrets.APPLE_KEY_ID }}
          APPLE_ISSUER=${{ secrets.APPLE_ISSUER }}
          APPLE_AUTH_KEY_PATH=${{ steps.keychain.outputs.auth_key_path }}
          WEBHOOK_URL=${{ secrets.WEBHOOK_URL }}
        run: ./scripts/ci-sign-and-notarize-binary.sh dist/cli-macos-amd64
      - name: Sign the arm64 binary
        env: CODESIGNING_IDENTITY=${{ secrets.APPLE_CODESIGNING_IDENTITY }}
          CODESIGNING_PREFIX=${{ secrets.APPLE_CODESIGNING_PREFIX }}
          APPLE_KEY_ID=${{ secrets.APPLE_KEY_ID }}
          APPLE_ISSUER=${{ secrets.APPLE_ISSUER }}
          APPLE_AUTH_KEY_PATH=${{ steps.keychain.outputs.auth_key_path }}
          WEBHOOK_URL=${{ secrets.WEBHOOK_URL }}
        run: ./scripts/ci-sign-and-notarize-binary.sh dist/cli-macos-arm64
      - name: Release for macOS
        run: ./scripts/release.sh
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Conclusion

By following this guide, you can successfully sign and
notarize your macOS binaries in a CI/CD pipeline.

I also have a guide on how to generate the necessary Apple signing
certificates and provisioning profiles on linux:

- [How to create Apple signing certificates and provisioning profiles for macOS on linux](make-apple-developer-certificates-and-provisioning-profiles-work-on-linux).
