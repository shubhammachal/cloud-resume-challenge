#!/bin/bash

# Quick deployment script for React Resume
# This script assumes you already have AWS CLI configured

echo "🚀 Quick Deploy - React Resume to S3"

# Build the app
echo "📦 Building React app..."
npm run build

# Deploy to S3
echo "☁️  Deploying to S3..."
aws s3 sync dist/ s3://machal-resume-website --delete

# Set proper content type for index.html
aws s3 cp dist/index.html s3://machal-resume-website/index.html --content-type "text/html"

echo "✅ Deployment complete!"
echo "🌐 Your React resume should be live at your CloudFront URL"
echo "💡 Note: It may take a few minutes for CloudFront to serve the new content"
