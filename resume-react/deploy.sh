#!/bin/bash

# React Resume Deployment Script
# This script builds and deploys the React resume to AWS S3

set -e  # Exit on any error

echo "🚀 Starting React Resume Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
S3_BUCKET="machal-resume-website"
CLOUDFRONT_DISTRIBUTION_ID=""  # You'll need to set this
AWS_REGION="us-east-1"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    print_error "AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if AWS CLI is configured
if ! aws sts get-caller-identity &> /dev/null; then
    print_error "AWS CLI is not configured. Please run 'aws configure' first."
    exit 1
fi

# Check if CloudFront distribution ID is set
if [ -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    print_warning "CloudFront distribution ID not set. Skipping cache invalidation."
    print_status "To set it, edit this script and add your distribution ID."
fi

print_status "Building React application..."
npm run build

if [ ! -d "dist" ]; then
    print_error "Build failed - dist directory not found"
    exit 1
fi

print_success "React app built successfully!"

print_status "Deploying to S3 bucket: $S3_BUCKET"

# Sync files to S3 with delete flag to remove old files
aws s3 sync dist/ s3://$S3_BUCKET --delete --region $AWS_REGION

# Set proper content type for index.html
aws s3 cp dist/index.html s3://$S3_BUCKET/index.html --content-type "text/html" --region $AWS_REGION

print_success "Files uploaded to S3 successfully!"

# Invalidate CloudFront cache if distribution ID is provided
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    print_status "Invalidating CloudFront cache..."
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text \
        --region $AWS_REGION)
    
    print_success "CloudFront cache invalidation started: $INVALIDATION_ID"
    print_status "Cache invalidation may take 10-15 minutes to complete."
else
    print_warning "Skipping CloudFront cache invalidation (distribution ID not set)"
fi

print_success "🎉 Deployment completed successfully!"
print_status "Your React resume should be live at your CloudFront URL."
print_status "Note: If you see the old site, wait for CloudFront cache to clear."

# Display useful information
echo ""
echo "📋 Deployment Summary:"
echo "  • S3 Bucket: $S3_BUCKET"
echo "  • Region: $AWS_REGION"
echo "  • Build Size: $(du -sh dist | cut -f1)"
echo "  • Files Deployed: $(find dist -type f | wc -l)"

if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "  • CloudFront Distribution: $CLOUDFRONT_DISTRIBUTION_ID"
    echo "  • Cache Invalidation: $INVALIDATION_ID"
fi

echo ""
print_status "Next steps:"
echo "  1. Test your site at the CloudFront URL"
echo "  2. Verify all functionality works (navigation, visitor counter, dark mode)"
echo "  3. Check that the site is responsive on mobile"
echo "  4. Update your CI/CD pipeline if needed"
