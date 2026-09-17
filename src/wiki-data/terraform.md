---
title: Terraform
excerpt: |
  Commands that I rarely use, but don't want to have to search the whole internet for.
description: |
  Commands that I rarely use, but don't want to have to search the whole internet for.
created: '2026-09-17'
updated: '2026-09-17'
tags:
  - linux
  - devops
  - terraform
  - iac
  - infrastructure-as-code
---

## Import State of an Existing Resource

Import the state of an existing resource into Terraform.
This is useful when you have resources that were created outside of Terraform and you want to manage them with Terraform.

Example on how to import a Google Secret Manager secret into Terraform:

```sh
# Replace with your Google Cloud project number
export GOOGLE_PROJECT_NUMBER=1337
# Replace with your already existing Google Secret Manager secret ID
export GCP_SECRET_ID=your-secret-id
# Replace with your terraform resource name
export TERRAFORM_SECRET_RESOURCE_NAME=your_secret_resource_name
```

```sh
terraform import \
    -var-file=vars/prod.tfvars "google_secret_manager_secret.${TERRAFORM_SECRET_RESOURCE_NAME}" \
  "projects/${GOOGLE_PROJECT_NUMBER}/secrets/${GCP_SECRET_ID}"
```

## Remove an Imported Resource from the State File

Remove an imported resource from the Terraform state file without deleting the actual resource in the cloud provider.

Example on how to remove a Google Secret Manager secret from the Terraform state file:

```sh
export TERRAFORM_SECRET_RESOURCE_NAME=your_secret_resource_name
```

```sh
terraform state rm "google_secret_manager_secret.${TERRAFORM_SECRET_RESOURCE_NAME}"
```
