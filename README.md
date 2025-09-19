# Cloud Resume Challenge

This repository contains the source code and infrastructure configuration for the **Cloud Resume Challenge**, a project aimed at building a cloud-hosted, serverless application using AWS services. The project combines frontend development, backend API creation, and cloud infrastructure management through Infrastructure as Code (IaC) principles.

## Introduction

The **Cloud Resume Challenge**, created by Forrest Brazeal, bridges the gap between cloud concepts and practical implementation. The goal is to host a static resume website enhanced with a serverless API that tracks the number of visitors.  

This project uses the following AWS services:
- **S3**: Static website hosting
- **CloudFront**: Content Delivery Network (CDN) for performance and security
- **Route 53**: DNS configuration and domain management
- **Lambda**: Backend logic
- **DynamoDB**: Visitor counter storage
- **API Gateway**: Interface for the backend API
- **AWS SAM**: Infrastructure as Code (IaC) framework for defining resources

## Features

- **Frontend**:  
  A static resume website built using HTML, CSS, and JavaScript, hosted in an S3 bucket with CloudFront for delivery.
  
- **Backend**:  
  A Python Lambda function that interacts with a DynamoDB table to track and update the visitor count. The API is exposed using API Gateway.

- **Custom Domain**:  
  A custom domain `shubham-machal.info` registered through Namecheap and configured via Route 53 with HTTPS enabled using AWS Certificate Manager (ACM).

- **Infrastructure as Code (IaC)**:  
  All AWS resources are defined and deployed using AWS SAM templates, ensuring consistent and repeatable deployments.

## Prerequisites

To deploy this project, ensure you have the following installed:

1. [AWS CLI](https://aws.amazon.com/cli/)
2. [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
3. [Python 3](https://www.python.org/downloads/)
4. [Docker](https://www.docker.com/products/docker-desktop)

## Website
https://www.shubham-machal.info

