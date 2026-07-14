---
title: How to impersonate a Google cloud service account from another user account
description: A guide on how to impersonate a Google Cloud Service Account from another user account using gcloud CLI.
created: '2025-12-11 13:11:00'
categories:
  - devops
  - dev
  - google-cloud
  - gcp
  - cli
published: true
---

Let's say we've a cloud run function.

The service account `joe-runner`
in a big corp project called `big-corp`
should be allowed to invoke the cloud run function.

Our cloud run function is in a different project (`mwco`).

How can we test this from our user account?

First, we need to make sure that the service account
has the `roles/run.invoker` role on the cloud run function.

Via terraform, we can do this:

```hcl path="iac/iam.tf"
resource "google_cloud_run_v2_service_iam_member" "big_corp_invoker" {
  location   = google_cloudfunctions2_function.default.location
  name       = google_cloudfunctions2_function.default.name
  role       = "roles/run.invoker"
  member     = "serviceAccount:joe-runner@big-corp.iam.gserviceaccount.com"
  depends_on = [google_cloudfunctions2_function.default]
}
```

Or via gcloud cli:

```bash path="scripts/grant-run-invoker.sh"
gcloud run services add-iam-policy-binding my-cloud-run-function \
  --member="serviceAccount:serviceAccount:joe-runner@big-corp.iam.gserviceaccount.com" \
  --role="roles/run.invoker" \
  --region=eu-west3 \
  --project=mwco
```

Make sure that the user account that wants to impersonate the service account
has the `roles/iam.serviceAccountTokenCreator` role on the service account.

```bash path="scripts/grant-token-creator.sh"
gcloud projects add-iam-policy-binding big-corp \
  --member=user:gorilla.moe@mistweaverco.com \
  --role='roles/iam.serviceAccountTokenCreator'
```

And now, you want to grant a specific service account
access to invoke the cloud run.

```bash path="scripts/grant-token-creator-sa.sh"
gcloud iam service-accounts \
  add-iam-policy-binding \
  joe-runner@big-corp.iam.gserviceaccount.com \
  --member=user:gorilla.moe@mistweaverco.com \
  --role='roles/iam.serviceAccountTokenCreator' \
  --project=big-corp
```

Finally, to get a token that impersonates the service account,
and can be used to invoke the cloud run function:

```bash path="scripts/get-impersonation-token.sh"
gcloud auth print-access-token \
  --impersonate-service-account=joe-runner@big-corp.iam.gserviceaccount.com
```

This will return an access token that you can use
to invoke the cloud run function

```bash path="scripts/invoke-cloud-run-with-impersonation.sh"
export GCP_BEARER_TOKEN=$(gcloud auth print-access-token \
  --impersonate-service-account=joe-runner@big-corp.iam.gserviceaccount.com)
if [ -z "$GCP_BEARER_TOKEN" ]; then
  echo "Failed to get GCP bearer token"
  exit 1
else
curl -H "Authorization: Bearer $GCP_BEARER_TOKEN" \\
    https://my-cloud-run-function-eu-west3.a.run.app/
fi
```
