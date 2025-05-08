# Satoshi Station Next.js Migration Deployment Strategy

This document outlines the comprehensive strategy for deploying the Next.js migration of the original sats.sv website.

## Repository and Domain Structure

Our deployment is structured around two separate repositories and domains:

1. **Staging Environment**:
   - Repository: [Satoshi-Learning-Next](https://github.com/EpicGrowth/Satoshi-Learning-Next) (this repository)
   - Domain: `staging.sats.sv`
   - Google Cloud Run Service: `sats-web-staging`
   - Purpose: Testing and validating changes before production deployment

2. **Production Environment**:
   - Repository: [Satoshi-Learning-Path](https://github.com/Epic-Growth/Satoshi-Learning-Path)
   - Domains: `sats.sv` and `www.sats.sv`
   - Google Cloud Run Service: `sats-web`
   - Purpose: Live production site

## Pre-Deployment Checklist

- [ ] All "Satoshi Station" text uses Exo 2 font (weight 700) with #FF523C orange color
- [ ] Dark mode enhancements are functional and match the original site's aesthetic
- [ ] Learning path navigation and progress tracking work properly
- [ ] All interactive elements function correctly
- [ ] Responsive design verified on mobile and desktop
- [ ] Key pages load correctly and match original site's content
- [ ] Deployment GitHub Actions workflows are configured correctly

## Backup Strategy

### Creating a Full Backup of the Original Site

Before deploying the Next.js migration, we'll create a complete backup of the original production site:

1. Execute the GitHub Action workflow: `backup-original-site.yml`
2. This will create a timestamped backup in the `sats-sv-backups` bucket
3. The backup will contain all static assets, HTML files, and content from the original site
4. A metadata file will be included with the backup date and reason

### Accessing the Backup

If needed, the backup can be accessed via:
- Google Cloud Console: https://console.cloud.google.com/storage/browser/sats-sv-backups
- Command line: `gsutil ls gs://sats-sv-backups/`

## Phased Deployment Approach

### Phase 1: Development Repository and Staging Environment

1. Push Next.js migration to development repository:
   ```bash
   git remote add epic-dev https://github.com/EpicGrowth/Satoshi-Learning-Next.git
   git push epic-dev main
   ```

2. GitHub Actions will deploy to the staging bucket: `sats-sv-staging`

3. Test staging environment thoroughly:
   - Verify all pages load correctly
   - Test all interactive elements (progress tracking, navigation)
   - Verify typography: Exo 2 font (weight 700) for all "Satoshi Station" text
   - Test on multiple browsers and devices
   - Verify both light and dark mode

### Phase 2: Limited Production Testing (DNS not switched)

1. Deploy to production bucket but don't switch DNS:
   ```bash
   git remote add epic-prod https://github.com/Epic-Growth/Satoshi-Learning-Path.git
   git push epic-prod main:production
   ```

2. Test production deployment directly via the bucket URL:
   - URL format: `https://storage.googleapis.com/sats-sv-static/index.html`
   - This tests the production environment without affecting live users

### Phase 3: Full Production Deployment

1. Schedule a deployment window with minimal traffic
2. Switch DNS to point to the new production deployment
3. Monitor for any issues or errors

## Rollback Plan

If critical issues are detected after deployment, implement the following rollback procedure:

### Quick Rollback (DNS Reversion)

1. Revert DNS settings to point back to the original deployment
2. This is the fastest method to restore service

### Full Rollback (Content Restoration)

1. Restore the backup from the `sats-sv-backups` bucket to the production bucket:
   ```bash
   gsutil -m cp -r gs://sats-sv-backups/[BACKUP_FOLDER]/* gs://sats-sv-static/
   ```

2. Verify the rollback is complete and the site is functioning correctly

## Post-Deployment Monitoring

After deployment, closely monitor:

1. Google Analytics for any unusual patterns
2. Error logs in Google Cloud
3. Performance metrics
4. User feedback

## Contact Information

In case of deployment issues, contact:
- Primary: [Your Name/Team]
- Secondary: [Backup Contact]

## Success Criteria

The deployment is considered successful when:
1. All pages load correctly on sats.sv
2. Typography requirements are met (Exo 2 font, weight 700, #FF523C orange color)
3. No increase in error rates compared to previous deployment
4. User progress tracking functions correctly
