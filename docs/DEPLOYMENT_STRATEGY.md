# Deployment Strategy

## Overview

SatoshiStationNext uses a cloud-based deployment strategy with Google Cloud Platform (GCP) and CloudFlare for optimal performance and reliability. The application is deployed as a standalone Next.js server on Cloud Run.

## Infrastructure

- **Primary Hosting**: Google Cloud Run (europe-west1)
- **CDN**: CloudFlare
- **CI/CD**: GitHub Actions
- **DNS**: CloudFlare DNS
- **SSL**: CloudFlare SSL/TLS

## Deployment Process

### 1. Build Process

The application is built using Next.js standalone output mode, which creates a self-contained production server:

```bash
# Production build with standalone output
npm run build
```

### 2. Automated Deployment

The GitHub Actions workflow handles:

- Building the application with standalone output
- Creating a Docker container
- Running tests
- Deploying to Cloud Run
- Invalidating CloudFlare cache

### 3. Monitoring

- Web Vitals tracking via Google Analytics
- Error tracking via Sentry
- Performance monitoring via CloudFlare
- Uptime monitoring via UptimeRobot

## Rollback Procedure

1. Access Google Cloud Console
2. Navigate to Cloud Run
3. Select previous revision
4. "Set as new revision" to rollback
5. Invalidate CloudFlare cache

## Security Measures

- HTTPS enforcement
- Content Security Policy (CSP)
- CloudFlare WAF rules
- Regular security audits
- Automated vulnerability scanning

## Performance Optimization

1. **CDN Configuration**

   - Asset caching rules
   - Browser caching policies
   - Compression settings

2. **Server Configuration**

   - Automatic scaling
   - Memory allocation
   - Instance count management

3. **Image Optimization**

   - Next.js Image component
   - WebP format usage
   - Responsive images

4. **Code Optimization**
   - Code splitting
   - Tree shaking
   - Bundle analysis

## Environment Configuration

### Production

- Domain: `https://sats.sv`
- GCP Project: satoshi-station
- Cloud Run Service: sats-sv-production
- Region: europe-west1

### Staging

- Domain: `https://staging.sats.sv`
- GCP Project: satoshi-station
- Cloud Run Service: sats-sv-staging
- Region: europe-west1

## Monitoring and Alerts

- Uptime monitoring
- Performance alerts
- Error rate thresholds
- Traffic anomaly detection
- Cloud Run metrics monitoring

## Disaster Recovery

1. **Backup Strategy**

   - Container image versioning
   - Configuration backups
   - Monthly full system backups

2. **Recovery Procedures**
   - Rollback to previous Cloud Run revision
   - DNS failover procedures
   - Configuration restoration process
