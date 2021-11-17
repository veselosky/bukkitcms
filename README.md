# Bukkit CMS: A Simple, Scalable Web Content Management System

Bukkit CMS is a website content management system that you can install and
operate at extremely low cost. The system combines the run-time efficiency and
reliability of static site generators with the ease of use of dynamic
publishing systems. It runs entirely on cloud services and requires
no permanent infrastructure.

Using cloud services provides us with several features and advantages.

- **Durable storage.** Objects are stored with redundancy across multiple data
  centers, making data loss highly unlikely.
- **Web serving.** Our bucket is configured to serve assets directly to the
  web, allowing us to operate in "serverless" mode. No infrastructure to
  maintain or operate.
- **Low cost, high scale.** The system is so cheap to operate at small scale
  that it is nearly free. Yet with no changes, it scales up to meet the highest
  possible traffic loads.
- **Automatic versioning.** Our bucket is configured to retain every version of
  every file stored. Even data that is overwritten or deleted is still
  recoverable until it is explicitly purged. You must work very hard to lose
  data.

## How it works: the architecture of Bukkit CMS

Bukkit CMS consists of three major elements: the storage system (S3 buckets),
the user interface (a JavaScript application running in browser), and the
publishing functions (AWS Lambda functions exposed through API Gateway). AWS
Cognito provides our user database and authentication, controlling access to
the application and content assets.

The key principal behind Bukkit CMS is that everything needed to operate the
content management system and the web sites it manages is stored as static
files. Databases are not required, although they may be used to speed up
certain operations through indexing. However, these indexes are ephemeral,
and can be destroyed and reconstructed from files stored in the bucket without
any data loss.

This version is built on S3-compatible cloud storage and API gateway, although
the same principals could be applied to a plain file system and generic web
server with CGI scripts.

## Back End

The Bukkit CMS back end is a set of cloud services:

- **AWS Cognito** provides user database and authentication, issuing
  credentials that give the UI access to the API and storage.
- **S3** provides storage of our content and the CMS itself, serves the CMS and
  the websites, and provides security controlling access to private assets.
- **AWS Lambda functions** provide the compute capacity at the server side.
- **AWS API Gateway** provides access to publishing functions via the web UI.
- **AWS CloudFront** provides CDN services and custom domains.
- **AWS Certificate Manager** provides SSL certificates.

When the application is installed in an AWS account, it creates the Cognito
user pool, the Lambda function that implements the server-side CMS code, the
API gateway exposing the Lambda, and an S3 bucket. It creates a CloudFront
distribution with SSL certificate so the CMS can be served over SSL.

The web UI is installed in the S3 bucket at the root, with all its files
publicly readable. The S3 endpoint serves as the origin for the CloudFront
distribution.

The bucket is configured with versioning enabled. This bucket also serves as
the content repository for the CMS. Content assets are kept private.

## Front End

A Vue.js application that runs in the browser. Allowing you to browse the
content repository and edit website assets. For most functions, the browser
app reads data directly from the bucket, but posts changes to the back end
API.

See [Configuration Reference](https://cli.vuejs.org/config/).

TODO: Add Tiptap Editor https://tiptap.dev/installation/vue3
