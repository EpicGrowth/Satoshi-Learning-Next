# Repository Strategy

## Overview

SatoshiStationNext uses a dual-repository strategy to manage staging and production environments:

1. **Staging Repository**
   - Repository: `https://github.com/EpicGrowth/Satoshi-Learning-Next`
   - Purpose: Development and staging
   - Environment: staging.sats.sv
   - Branch Strategy: Feature branches -> main
   - Auto-deploys on main branch updates

2. **Production Repository**
   - Repository: `https://github.com/Epic-Growth/Satoshi-Learning-Path`
   - Purpose: Production deployment
   - Environment: sats.sv
   - Branch Strategy: Protected main branch
   - Deploys only after PR approval

## Development Workflow

1. **Development Process**
   ```
   # In staging repo (Satoshi-Learning-Next)
   git checkout -b feature/new-feature
   # Make changes, commit
   git push origin feature/new-feature
   # Create PR to main, get review, merge
   # Auto-deploys to staging.sats.sv
   ```

2. **Promotion to Production**
   ```
   # In production repo (Satoshi-Learning-Path)
   git checkout -b release/v1.x.x staging/main
   # Create PR to main
   # Review, test, approve
   # Merges deploy to sats.sv
   ```

## Branch Protection Rules

### Staging Repository
- Protected branch: `main`
- Require pull request reviews
- Allow force pushes for hotfixes
- Auto-deploy to staging environment

### Production Repository
- Protected branch: `main`
- Require 2 pull request reviews
- No force pushes allowed
- Require status checks to pass
- Deploy only after approval

## Deployment Configuration

### Staging
- Service: sats-web-staging
- Region: us-central1
- Min instances: 0
- Max instances: 5
- Memory: 512Mi
- Domain: staging.sats.sv

### Production
- Service: sats-web-production
- Region: europe-west1
- Min instances: 0
- Max instances: 10
- Memory: 1Gi
- Domain: sats.sv

## Infrastructure Separation

Our staging and production environments are deliberately separated:

1. **Regional Separation**
   - Staging in us-central1
   - Production in europe-west1
   - Benefits:
     - Clear resource separation
     - Tests global CDN configuration
     - Different latency profiles for testing

2. **Resource Configuration**
   - Staging uses less memory (512Mi)
   - Production uses more memory (1Gi)
   - Different instance scaling limits
   - Helps optimize costs

## Repository Setup

1. **Local Development Setup**
   ```bash
   # Clone staging repo for development
   git clone https://github.com/EpicGrowth/Satoshi-Learning-Next.git sats-next
   cd sats-next
   
   # Add production remote for releases
   git remote add production https://github.com/Epic-Growth/Satoshi-Learning-Path.git
   ```

2. **Production Repository Setup**
   ```bash
   # Clone production repo
   git clone https://github.com/Epic-Growth/Satoshi-Learning-Path.git sats-production
   cd sats-production
   
   # Add staging remote for promotion
   git remote add staging https://github.com/EpicGrowth/Satoshi-Learning-Next.git
   ```

## Promotion Script

Save as `scripts/promote-to-production.sh`:
```bash
#!/bin/bash
VERSION=$1

if [ -z "$VERSION" ]; then
  echo "Usage: ./promote-to-production.sh v1.x.x"
  exit 1
fi

# Fetch latest from staging
git fetch staging

# Create release branch
git checkout -b release/$VERSION staging/main

# Push to production repo
git push origin release/$VERSION

echo "Created release branch release/$VERSION"
echo "Create a PR at: https://github.com/Epic-Growth/Satoshi-Learning-Path/compare/main...release/$VERSION"
```

## GitHub Actions Configuration

Both repositories use similar workflow files but with environment-specific settings:
- Staging deploys automatically on merge to main
- Production requires PR approval before deployment
- Both use Cloud Run with different service names
- Both use Cloudflare for DNS and caching
