# Post-Deployment Verification Checklist

This checklist should be used to verify deployments in both staging and production environments.

## Environment Information

### Staging Environment
- URL: `staging.sats.sv`
- Region: us-central1
- Service: sats-web-staging

### Production Environment
- URL: `sats.sv`
- Region: europe-west1
- Service: sats-web-production

## Deployment Verification

- [ ] **Cloud Run Service**:
  - [ ] Correct service is deployed (staging or production)
  - [ ] Region is correct for environment
  - [ ] Memory and CPU limits are correct
  - [ ] Min/max instances are correct

- [ ] **Domain Configuration**:
  - [ ] Domain resolves to correct Cloud Run service
  - [ ] SSL certificate is valid
  - [ ] Cloudflare proxy status is correct

- [ ] **Environment Variables**:
  - [ ] DEPLOY_ENV is set correctly ('staging' or 'production')
  - [ ] All required environment variables are present

## Application Verification

- [ ] **Typography and Branding Verification**:
  - [ ] **Satoshi Station Logo/Text in Header**:
    - Uses Exo 2 font with weight 700
    - Color matches #FF523C exactly
    - Text does not wrap (whitespace-nowrap applied)
    - Letter-spacing and text-shadow match specifications

  - [ ] **Satoshi Station Text in Hero Section**:
    - Uses Exo 2 font with weight 700
    - Color matches #FF523C exactly
    - Text does not wrap
    - Styling consistent with header

  - [ ] **Satoshi Station Text in Footer**:
    - Consistent with header and hero section styling
    - Same font, weight, and color

- [ ] **Functional Verification**:
  - [ ] **Dark Mode**:
    - Toggling between light/dark works
    - Dark mode colors match original site
    - All elements have proper contrast

  - [ ] **Learning Paths**:
    - Bitcoin learning path loads correctly
    - Lightning learning path loads correctly
    - Navigation between modules works

  - [ ] **Progress Tracking**:
    - Checkboxes can be toggled
    - Progress is saved between page refreshes
    - Progress percentage updates correctly

  - [ ] **Navigation**:
    - Sidebar navigation expands/collapses correctly
    - Links to all sections work properly
    - Breadcrumbs show correctly

- [ ] **Responsive Design**:
  - [ ] **Mobile View** (< 640px):
    - All content readable and accessible
    - Navigation collapses properly
    - No horizontal scrolling needed

  - [ ] **Tablet View** (640px - 1024px):
    - Layout adjusts appropriately
    - Typography scales correctly

  - [ ] **Desktop View** (> 1024px):
    - Layout uses space efficiently
    - All UI elements properly sized

- [ ] **Performance Checks**:
  - [ ] **Page Load Speed**:
    - Initial page load < 3 seconds
    - Page transitions smooth

  - [ ] **Console Errors**:
    - No JavaScript errors in console
    - No 404 resource errors

  - [ ] **Browser Testing**:
    - Chrome
    - Firefox
    - Safari
    - Edge

## Cross-Environment Testing

- [ ] **Feature Parity**:
  - [ ] All features working in staging also work in production
  - [ ] No staging-only features visible in production
  - [ ] No development routes accessible

- [ ] **Performance Testing**:
  - [ ] Load times comparable between environments
  - [ ] No region-specific performance issues
  - [ ] CDN caching working correctly

## Rollback Preparation

- [ ] Previous deployment revision noted: ____________
- [ ] Rollback procedure reviewed
- [ ] Team notified of deployment
- [ ] Monitoring alerts configured

## Post-Deployment Monitoring (24h)

- [ ] Error rates normal
- [ ] Response times stable
- [ ] Resource usage within expected range
- [ ] No unexpected Cloudflare cache misses
