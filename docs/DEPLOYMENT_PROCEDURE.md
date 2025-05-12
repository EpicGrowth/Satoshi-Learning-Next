# Satoshi Station Next.js Migration: Deployment Procedure

This document provides step-by-step instructions for executing the deployment of the Next.js migration for sats.sv.

## Pre-Deployment Testing

Before initiating the deployment process, perform a final local verification:

```bash
# Start the development server
npm run dev

# In another terminal, run tests if available
npm test
```

Verify:
- All "Satoshi Station" text uses Exo 2 font (weight 700) with #FF523C orange color
- Dark mode functions correctly
- Learning paths navigation works
- Progress tracking functions properly

## Phase 1: Deploy to Development Repository and Staging

```bash
# If you haven't already cloned the development repository
git clone https://github.com/EpicGrowth/Satoshi-Learning-Next.git satoshi-next-dev
cd satoshi-next-dev

# Copy your files to the repository
# This assumes you're copying from your SatoshiStationNext directory
cp -r /home/jean-paul/Source/ClaudeCode/SatoshiStationNext/* .

# Remove any unneeded files
rm -rf node_modules
rm -rf .next

# Add changes and commit
git add .
git commit -m "Next.js migration with updated typography and dark mode"

# Push to development repository
git push origin main
```

## Phase 2: Test Staging Deployment

After Phase 1 is complete, GitHub Actions will automatically deploy to staging.

1. Access the staging site (URL will be provided by your team)
2. Test comprehensively:
   - Verify all typography requirements are met
   - Test all learning paths
   - Verify progress tracking
   - Test on multiple devices and browsers
   - Test in both light and dark mode

## Phase 3: Deploy to Production

Once staging tests pass:

```bash
# If you haven't already cloned the production repository
git clone https://github.com/Epic-Growth/Satoshi-Learning-Path.git satoshi-prod
cd satoshi-prod

# Option 1: Create a pull request from development to production
# This is the recommended approach for traceability

# Option 2: Copy files directly
cp -r /path/to/satoshi-next-dev/* .
rm -rf node_modules
rm -rf .next

# Add changes and commit
git add .
git commit -m "Next.js migration with updated typography and dark mode"

# Push to production branch
git push origin production
```

## Phase 4: DNS Cutover

Once the production deployment is verified:

1. Update DNS settings to point to the new deployment
2. Monitor site performance and error logs
3. Be prepared to revert DNS if issues arise

## Monitoring Post-Deployment

After deployment is complete, monitor:

1. Google Analytics for user behavior changes
2. Google Cloud logs for errors
3. Performance metrics
4. User feedback

## Rollback Procedure

If critical issues are detected:

### For Quick DNS Reversion:

Update DNS settings to point back to the original deployment.

### For Full Content Rollback:

```bash
# Find your backup folder name
gsutil ls gs://sats-sv-backups/

# Restore from backup to production
gsutil -m cp -r gs://sats-sv-backups/[BACKUP_FOLDER]/* gs://sats-sv-static/
```

## Deployment Verification Checklist

- [ ] All pages load correctly
- [ ] Typography requirements met (Exo 2 font, weight 700, #FF523C orange)
- [ ] Dark mode functions correctly
- [ ] Learning paths navigation works
- [ ] Progress tracking functions properly
- [ ] All interactive elements respond correctly
- [ ] Mobile responsiveness verified
- [ ] No console errors present
