# Post-Deployment Verification Checklist

Use this document to verify all aspects of the Satoshi Station Next.js migration after deployment.

## Typography and Branding Verification

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

## Functional Verification

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

## Responsive Design

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

## Performance Checks

- [ ] **Page Load Speed**:
  - Initial page load < 3 seconds
  - Page transitions smooth

- [ ] **Console Errors**:
  - No JavaScript errors in console
  - No 404 resource errors

## Platform Compatibility

- [ ] **Browser Testing**:
  - Chrome
  - Firefox
  - Safari
  - Edge

## Specific Page Checks

- [ ] **Homepage**
- [ ] **Bitcoin Learning Path Overview**
- [ ] **Lightning Learning Path Overview**
- [ ] **At least one module from each learning path**

## Final Check

- [ ] Take screenshots of key pages for documentation
- [ ] Compare with original site screenshots to verify visual consistency
- [ ] Document any minor issues for future sprints
