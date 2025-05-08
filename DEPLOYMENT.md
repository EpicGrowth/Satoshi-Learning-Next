# Satoshi Station Deployment Guide

This document provides detailed information about the deployment architecture, CI/CD pipelines, and infrastructure setup for the Satoshi Station Learning Platform.

## Deployment Architecture

Satoshi Station uses a modern cloud-native architecture:

1. **Code Repositories**:
   - Staging: `https://github.com/EpicGrowth/Satoshi-Learning-Next`
   - Production: `https://github.com/Epic-Growth/Satoshi-Learning-Path`

2. **CI/CD Pipeline**: GitHub Actions workflows for automated builds and deployments

3. **Containerization**: Docker for consistent builds and deployments

4. **Cloud Provider**: Google Cloud Platform (GCP)

5. **Hosting**: Google Cloud Run for serverless container deployment

6. **DNS & CDN**: Cloudflare for DNS management, CDN, and security

7. **Custom Domains**:
   - Staging: `staging.sats.sv`
   - Production: `sats.sv`

## Infrastructure Setup

### Google Cloud Platform Setup

1. **Project**: 
   - GCP Project ID: `satoshi-station`

2. **Service Accounts**:
   - `github-actions-deployer@satoshi-station.iam.gserviceaccount.com`: Used for GitHub Actions deployments with these roles:
     - Cloud Run Admin
     - Storage Admin
     - Service Account User
     - Artifact Registry Writer
     - Container Registry Service Agent
     - Storage Object Admin

3. **Cloud Run Services**:
   - Staging: `sats-web-staging`
   - Production: `sats-web`

### GitHub Secrets Configuration

The following secrets are configured in both repositories:

1. `GCP_PROJECT_ID`: The Google Cloud project ID (`satoshi-station`)
2. `GCP_SA_KEY`: The JSON service account key for the GitHub Actions deployer account

## CI/CD Pipelines

### Staging Deployment Workflow

The staging environment is deployed automatically when changes are pushed to the `main` branch of the staging repository.

Workflow File: `.github/workflows/deploy-staging-with-assets.yml`

Key steps:
1. Checkout repository
2. Set up Node.js and install dependencies
3. Update Next.js configuration for asset URLs
4. Build the Next.js application
5. Authenticate with Google Cloud
6. Build and push Docker container to Google Container Registry
7. Deploy to Cloud Run `sats-web-staging` service

### Production Deployment Workflow

The production environment is deployed when changes are pushed to the `main` branch of the production repository.

Workflow File: `.github/workflows/deploy-production.yml`

Key steps:
1. Checkout repository
2. Set up Node.js and install dependencies
3. Update Next.js configuration for asset URLs
4. Build the Next.js application
5. Authenticate with Google Cloud
6. Build and push Docker container to Google Container Registry
7. Deploy to Cloud Run `sats-web` service

## Domain Configuration

### Cloudflare Setup

1. **DNS Configuration**:
   - Staging: CNAME record for `staging.sats.sv` pointing to `ghs.googlehosted.com`
   - Production: CNAME record for `sats.sv` pointing to `ghs.googlehosted.com`
   - Both are configured as proxied records (orange cloud enabled)

2. **SSL/TLS Configuration**:
   - SSL/TLS encryption mode: Full
   - Always Use HTTPS: Enabled
   - HTTP Strict Transport Security (HSTS): Enabled

### Google Cloud Domain Mapping

1. **Staging**:
   ```
   gcloud beta run domain-mappings create --service=sats-web-staging --domain=staging.sats.sv --region=europe-west1
   ```

2. **Production**:
   ```
   gcloud beta run domain-mappings create --service=sats-web --domain=sats.sv --region=europe-west1
   ```

## Docker Configuration

The Dockerfile is configured to build an optimized Next.js application in standalone mode:

1. **Base Image**: Node.js 20 Alpine
2. **Build Process**:
   - Install dependencies in a separate layer
   - Build the Next.js application
   - Set up a non-root user for security
   - Copy only the necessary files to the production image
3. **Environment Variables**:
   - `NODE_ENV=production`
   - `NEXT_TELEMETRY_DISABLED=1`
   - Default port: 3000

## Next.js Configuration

The Next.js configuration in `next.config.js` includes:

1. `output: 'standalone'`: Optimized for containerization
2. `trailingSlash: true`: Better compatibility with CDNs
3. `images.domains`: Configured for both staging and production domains
4. `assetPrefix`: Set to the deployment domain for proper asset resolution
5. Build optimizations: ESLint and TypeScript checks disabled during build

## Troubleshooting

### Common Issues

1. **SSL Certificate Provisioning**:
   - After updating DNS records, SSL certificate provisioning can take 15-60 minutes
   - During this time, you may see SSL handshake errors (Cloudflare Error 525)

2. **GitHub Actions Permission Issues**:
   - If you see 403 Forbidden errors when pushing to Container Registry, check the service account permissions
   - Ensure the service account has proper roles (see Service Accounts section)

3. **Styling Issues on Custom Domain**:
   - If styles don't load correctly, verify that `assetPrefix` is set correctly in Next.js config
   - Check that the Cloud Run domain mapping is properly configured

### Useful Commands

1. **Check Cloud Run Services**:
   ```
   gcloud run services list --platform managed
   ```

2. **Check Domain Mappings**:
   ```
   gcloud beta run domain-mappings list --region=europe-west1
   ```

3. **View Service Logs**:
   ```
   gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=[SERVICE_NAME]" --limit=50
   ```

4. **Test Direct Cloud Run URL**:
   ```
   curl -I https://[SERVICE_NAME]-[ID].a.run.app
   ```

## Future Improvements

1. **Automated Database Migrations**: Set up automatic database migrations as part of the CI/CD pipeline
2. **Monitoring & Alerting**: Implement Cloud Monitoring and alerting for service health
3. **Cost Optimization**: Implement auto-scaling and cold start optimization
4. **Test Automation**: Add automated tests to the CI/CD pipeline
5. **Blue/Green Deployments**: Implement blue/green deployment strategy for zero-downtime updates
