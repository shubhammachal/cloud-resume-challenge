# React Resume Deployment Guide

This guide explains how to deploy your modern React resume to AWS S3 with CloudFront.

## 🚀 Quick Deployment Steps

### 1. Build the React App
```bash
npm run build
```

### 2. Deploy to S3
```bash
# Sync the dist folder to your S3 bucket
aws s3 sync dist/ s3://machal-resume-website --delete

# Set proper content types for React SPA
aws s3 cp dist/index.html s3://machal-resume-website/index.html --content-type "text/html"
```

### 3. Invalidate CloudFront Cache
```bash
# Get your CloudFront distribution ID from AWS Console
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 📋 Detailed Setup Instructions

### Prerequisites
- AWS CLI configured with appropriate permissions
- Existing S3 bucket: `machal-resume-website`
- CloudFront distribution already set up

### Key Differences for React Apps

#### 1. **SPA Routing Support**
React apps use client-side routing, so we need to configure CloudFront to serve `index.html` for all routes.

#### 2. **Content Types**
React apps need proper MIME types for JavaScript and CSS files.

#### 3. **Error Pages**
Configure CloudFront to redirect 404s to `index.html` for SPA routing.

## 🔧 CloudFront Configuration Updates

### Custom Error Pages
Add these error page configurations to your CloudFront distribution:

1. **404 Error Page**
   - HTTP Error Code: 404
   - Error Caching Minimum TTL: 0
   - Customize Error Response: Yes
   - Response Page Path: `/index.html`
   - HTTP Response Code: 200

2. **403 Error Page**
   - HTTP Error Code: 403
   - Error Caching Minimum TTL: 0
   - Customize Error Response: Yes
   - Response Page Path: `/index.html`
   - HTTP Response Code: 200

### Cache Behaviors
- **Default (*)**: Cache based on query strings and headers
- **Assets (/assets/*)**: Long cache (1 year) for static assets
- **Vendor (/vendor/*)**: Long cache (1 year) for vendor files

## 📁 File Structure After Deployment

```
s3://machal-resume-website/
├── index.html              # Main React app entry point
├── assets/                 # React build assets
│   ├── index-*.js         # Main JavaScript bundle
│   ├── index-*.css        # Main CSS bundle
│   └── *.woff2, *.ttf     # Font files
├── img/                   # Images
│   └── profile.jpg
└── vendor/                # Third-party libraries
    ├── bootstrap/
    ├── font-awesome/
    └── devicons/
```

## 🛠️ Automated Deployment Scripts

### Option 1: Simple Deployment Script
```bash
#!/bin/bash
# deploy.sh

echo "Building React app..."
npm run build

echo "Deploying to S3..."
aws s3 sync dist/ s3://machal-resume-website --delete

echo "Setting proper content types..."
aws s3 cp dist/index.html s3://machal-resume-website/index.html --content-type "text/html"

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "Deployment complete!"
```

### Option 2: GitHub Actions CI/CD
```yaml
name: Deploy React Resume

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build React app
      run: npm run build
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Deploy to S3
      run: |
        aws s3 sync dist/ s3://machal-resume-website --delete
        aws s3 cp dist/index.html s3://machal-resume-website/index.html --content-type "text/html"
    
    - name: Invalidate CloudFront
      run: |
        aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
```

## 🔍 Troubleshooting

### Common Issues

1. **404 on Refresh**
   - Ensure CloudFront error pages are configured
   - Check that `index.html` is served for all routes

2. **Assets Not Loading**
   - Verify S3 bucket policy allows public read
   - Check CloudFront cache behaviors

3. **CORS Issues**
   - React app should work fine with S3 static hosting
   - API calls to your Lambda functions should work as before

### Testing Your Deployment

1. **Check S3 Bucket**
   ```bash
   aws s3 ls s3://machal-resume-website/
   ```

2. **Test CloudFront**
   ```bash
   curl -I https://your-cloudfront-domain.cloudfront.net/
   ```

3. **Verify React App**
   - Visit your CloudFront URL
   - Test navigation between sections
   - Check that visitor counter works
   - Test dark mode toggle

## 📊 Performance Optimization

### CloudFront Settings
- **Compression**: Enable gzip compression
- **Cache Headers**: Set appropriate cache headers
- **Security Headers**: Add security headers

### React App Optimization
- **Code Splitting**: Already implemented by Vite
- **Asset Optimization**: Images and fonts are optimized
- **Bundle Analysis**: Use `npm run build -- --analyze` to analyze bundle size

## 🔐 Security Considerations

1. **S3 Bucket Policy**: Ensure only necessary permissions
2. **CloudFront Security**: Use HTTPS only
3. **API Security**: Your existing Lambda functions are secure
4. **Content Security Policy**: Consider adding CSP headers

## 📈 Monitoring

- **CloudWatch**: Monitor CloudFront metrics
- **S3 Access Logs**: Enable S3 access logging
- **Real User Monitoring**: Consider adding RUM for performance insights

## 🎯 Next Steps

1. Update your existing CloudFront distribution with SPA error page configuration
2. Deploy the React app using the scripts above
3. Test all functionality
4. Update your CI/CD pipeline if needed
5. Monitor performance and user experience

Your modern React resume will be live on AWS with all the same functionality as your original site, plus the new modern features!
