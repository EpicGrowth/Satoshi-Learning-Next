# Satoshi Station Deployment Instructions

This document provides detailed instructions for deploying the Satoshi Station Next application to Google Cloud Run for the staging environment.

## Deployment Architecture

- **Repository**: GitHub at `EpicGrowth/SatoshiStationNext`
- **CI/CD**: GitHub Actions workflow (`.github/workflows/consolidated-deploy.yml`)
- **Container Registry**: Google Container Registry (GCR)
- **Hosting**: Google Cloud Run
- **Domain**: `staging.sats.sv`

## Deployment Process

The deployment process is fully automated through GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions builds the Next.js app as a Docker container
3. Container is pushed to Google Container Registry
4. Cloud Run service is updated with the new container image
5. DNS is already configured to point to the Cloud Run service

## Prerequisites

To deploy this application, you need:

1. **Google Cloud Project** with the following services enabled:
   - Cloud Run
   - Container Registry
   - Cloud Build

2. **Service Account** with the following roles:
   - Cloud Run Admin
   - Storage Admin
   - Service Account User

3. **GitHub Secrets** configured in the repository:
   - `GCP_PROJECT_ID`: Your Google Cloud project ID
   - `GCP_SA_KEY`: The service account key JSON file contents

## Local Development and Testing

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build and test the Docker container locally:
```bash
docker build -t satoshi-station-next:local .
docker run -p 3000:3000 satoshi-station-next:local
```

## Manual Deployment

If you need to deploy manually without GitHub Actions:

1. Authenticate to Google Cloud:
```bash
gcloud auth login
gcloud config set project YOUR_GCP_PROJECT_ID
```

2. Build and push the Docker image:
```bash
docker build -t gcr.io/YOUR_GCP_PROJECT_ID/sats-web-staging:latest .
docker push gcr.io/YOUR_GCP_PROJECT_ID/sats-web-staging:latest
```

3. Deploy to Cloud Run:
```bash
gcloud run deploy sats-web-staging \
  --image gcr.io/YOUR_GCP_PROJECT_ID/sats-web-staging:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Connecting to Cloudflare

The domain `staging.sats.sv` is managed through Cloudflare. After deploying to Cloud Run:

1. Get the Cloud Run URL from the Google Cloud Console
2. In Cloudflare, create or update the CNAME record for `staging.sats.sv` to point to the Cloud Run URL
3. Ensure that Cloudflare SSL is set to "Full (strict)" mode
4. Configure Cloudflare cache rules as needed for optimal performance

## Troubleshooting

### Common Issues

1. **Build Failures**: Check the Dockerfile and ensure that `next.config.js` has `output: 'standalone'` set

2. **Container Startup Issues**: Check that the container is exposing port 3000 and the `CMD` in the Dockerfile is correct

3. **Domain Not Resolving**: Verify the Cloudflare DNS settings and ensure the CNAME points to the correct Cloud Run URL

4. **Container Permission Issues**: Ensure the Dockerfile creates and uses a non-root user (the default configuration uses a `nextjs` user)

### Viewing Logs

To view the Cloud Run service logs:

```bash
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=sats-web-staging" --limit=50
```

## Rollback Procedure

If you need to rollback to a previous version:

1. In the Google Cloud Console, go to Cloud Run
2. Select the `sats-web-staging` service
3. Click "Revisions" tab
4. Find the working revision and select "Deploy new revision from this revision"

## Contact

For deployment issues or questions, contact the development team at dev@example.com.