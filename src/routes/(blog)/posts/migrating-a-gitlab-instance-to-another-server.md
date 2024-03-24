---
title: Migrating a GitLab Instance to Another Server
description: Migrating a GitLab instance to another server is a breeze thanks to the built-in backup and restore functionality.
date: '2018-08-16 01:13:21.000'
categories:
  - gitlab
  - devops
  - dev
published: true
---

GitLab is an open-source web application for managing Git repositories
that I use to store a lot of my personal coding and university projects.
I have GitLab running on a root server and decided to migrate the running
instance to a new root server.

This blog post explains the process I used to perform the migration.

Preparing the Migration
GitLab provides the ability to create a backup of all the data and configurations and
to restore that backup in a fresh installation.
According to the docs it is required that the server from which the backup is made and
the server to which the backup is restored must be running the same version of GitLab.

Hence, to start the migration the first step was to update the existing GitLab instance to
the latest version:

```
# update GitLab on origin server to latest version
sudo apt-get update 
sudo apt-get install gitlab-ce
```

As usual, the GitLab update process works seamlessly.
Upgrading to the newest version of GitLab before the migration is helpful,
as there are probably fewer bugs during backup/restore in newer versions,
as each month a lot of bugs in GitLab are fixed.
If you are unsure or you are heavily using fairly new features make sure to
read the GitLab release blog posts or have a look at the GitLab changelog to
see if there are any known issues for backup and restore in the versions you have or
could upgrade to.

Backup the GitLab Instance
Performing the backup requires two steps:

1. Backup GitLab application data (repositories, issues, etc.)
2. Backup GitLab configuration (for 2FA secrets, secret CI variables, etc.)

If you don't do step 2) users with 2FA enabled will not
have access anymore on the new instance and
you will loose all your CI secret variables!

Backup GitLab Application Data
Make sure to configure the GitLab backup configuration to suit your needs. My GitLab instance automatically uploads the backups to an AWS S3 bucket and is configured as follows (if you change the gitlab.rb config, make sure to run gitlab-ctl reconfigure to apply the changes):

```ruby
# /etc/gitlab/gitlab.rb
gitlab_rails['backup_keep_time'] = 1468800 # 17 days, we'll do a backup every 5 days
gitlab_rails['backup_upload_connection'] = {
  'provider' => 'AWS',
  'region' => 'eu-central-1',
  'aws_access_key_id' => '<AWS_ACCESS_KEY>',
  'aws_secret_access_key' => '<AWS_SECRET_KEY>'
}
gitlab_rails['backup_upload_remote_directory'] = '<AWS_S3_BUCKET>'
```

With the backup configuration in place,
you can tell GitLab to immediately perform a backup by typing the following command:


```sh
# perform backup on origin server
/opt/gitlab/bin/gitlab-rake gitlab:backup:create
```

Backup GitLab Configuration
Next to the full backup with all application data you
also need to make a backup of the GitLab configuration.
You may do so by packing the whole configuration folder to a tar archive:

```sh
sudo sh -c 'umask 0077; tar -cf $(date "+etc-gitlab-%s.tar") -C /etc/gitlab .'
ls
etc-gitlab-1527935632.tar
```

You may then either download the file to your computer or also use S3
to store the configuration backup to.
Note that the application data backup contains encrypted data that can only
be decrypted using the credentials in
/etc/gitlab/gitlab-secrets.json -
so if you store both backups in the same location a potential hacker
would have access to everything.

```sh
# use the AWS CLI on your old GitLab server to upload it to S3
aws s3 cp ~/etc-gitlab*.tar s3://<AWS_S3_BUCKET>/config/

# or use scp from a shell on your local computer
scp "user@host:~/etc-gitlab*.tar" ./
```

Installing GitLab
Installing a fresh copy of GitLab is a breeze thanks to the Omnibus packaging.
As the new server in my case runs Ubuntu 16.04, the installation boils down to:

```sh
## installing GitLab
apt-get install curl openssh-server ca-certificates postfix
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
apt-get install gitlab-ce
gitlab-ctl reconfigure
```

Enabling HTTPS with Let's Encrypt
After the installation completed,
I enabled HTTPS for GitLab using Let's Encrypt.
The setup is straight forward and takes less than 5 minutes
(Update: starting with GitLab 10.7 there is a native GitLab Let's Encrypt integration).
After enabling HTTPS, make sure the firewall allows incoming HTTPS traffic
(and other required ports as well, if not yet allowed):

```sh
# open important ports and enable Ubuntu UFW firewall
ufw allow ssh
ufw allow http
ufw allow https
ufw enable
```

Download the Backup to the New GitLab Server
To restore the backup,
the backup file must first be placed on the new server.
As I have transfered the backup files to AWS S3,
I can download the file from there using the AWS CLI.
First, the AWS CLI has to be installed:

```sh
# install AWS CLI
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws

# authorize CLI
aws configure
```

To restore from a backup file,
the backup file needs to be placed in /var/opt/gitlab/backups/.
To download the file from S3 into the
correct directory issue the following CLI command:

```sh
aws s3 cp s3://<AWS_S3_BUCKET>/<TIMESTAMP>_gitlab_backup.tar /var/opt/gitlab/backups/<TIMESTAMP>_gitlab_backup.tar
```

Restore the GitLab Backup
Again, GitLab makes it very convenient to restore the backup.
The following commands work for restoring to an omnibus installation.
First, stop some required services:

```sh
# stop the services
sudo gitlab-ctl stop unicorn
sudo gitlab-ctl stop sidekiq
# verify they are really stopped
sudo gitlab-ctl status
```

Then, execute the actual restore.
Note that the official documentation states the value of
the BACKUP parameter should be just the `<TIMESTAMP>` part of the file name.
However, there seems to be a pending issue that requires you to
specify the full name if you run into errors:

```sh
# restore, might take some time
sudo gitlab-rake gitlab:backup:restore BACKUP=<TIMESTAMP>_gitlab_backup.tar
```

Next, restore the `/etc/gitlab/gitlab-secrets.json`
file from your configuration backup.
To do so, you first need to copy the tar backup file to your new GitLab instance:

```sh
# if you stored the configuration backup on S3, execute from the new GitLab server:
aws s3 cp s3://<AWS_S3_BUCKET>/config/etc-gitlab-<TIMESTAMP>.tar ~/etc-gitlab.tar

# if you stored the configuration backup on your local computer, execute from a local shell:
scp ./etc-gitlab*.tar "user@new-host:~/"
```

Now that you have configuration backup,
extract it and move the gitlab-secrets.json to its destination:

```sh
tar xf ./etc-gitlab*.tar
cp ./gitlab-secrets.json /etc/gitlab/gitlab-secrets.json
```

After the data has been restored and the secrets configuration is in place,
start the server again and verify that everything works as expected.

```sh
gitlab-ctl reconfigure
gitlab-ctl start
sudo gitlab-rake gitlab:check SANITIZE=true
```

## Conclusion

Although I feared the migration might fail,
migrating the GitLab server has been a really pleasant experience.
The documentation is excellent covering most possibilities and edge-cases.
I have no doubt that GitLab is the right place to store my code for years to come :-)
