# SatoshiStationNext Development Guide

This document provides comprehensive information about the project structure, architecture, and development conventions used in SatoshiStationNext. It's designed to help developers (both human and AI) understand the codebase quickly and make effective contributions.

## Project Architecture

SatoshiStationNext is a Next.js application built with:

- **Next.js App Router**: Providing page routing and server components
- **React**: For UI components and client-side interactivity
- **Tailwind CSS**: For styling with custom configuration
- **TypeScript**: For type safety and improved developer experience
- **LocalStorage**: For persisting learning progress

### Key Directories

```
/
├── public/                 # Static assets like images
├── scripts/                # Utility scripts for maintenance
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── learn/          # Learning paths
│   │   │   ├── bitcoin/    # Bitcoin learning path
│   │   │   └── lightning/  # Lightning learning path
│   ├── components/         # React components
│   │   ├── layout/         # Layout components
│   │   ├── learn/          # Learning-specific components
│   │   │   ├── bitcoin/    # Bitcoin-specific components
│   │   │   ├── lightning/  # Lightning-specific components
│   │   │   └── shared/     # Shared learning components
│   │   └── ui/             # UI components
│   ├── config/             # Configuration files
│   ├── contexts/           # React contexts
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── styles/             # Global styles
│   └── types/              # TypeScript type definitions
└── tailwind.config.js      # Tailwind configuration
```

## Naming Conventions

### Directory Structure

1. **Learning Path Directories**:
   - Bitcoin module directories use the `bitcoin-` prefix (e.g., `bitcoin-fundamentals`)
   - Lightning module directories use the `lightning-` prefix (e.g., `lightning-fundamentals`)
   - These prefixes must match the module IDs defined in `learning-modules.ts`

2. **Page Files**:
   - Each learning section has its own `page.tsx` file
   - All pages use the `'use client'` directive as they need client-side interactivity

### ID Conventions

1. **Module IDs**:
   - Bitcoin modules: `bitcoin-[module-name]` (e.g., `bitcoin-fundamentals`)
   - Lightning modules: `lightning-[module-name]` (e.g., `lightning-fundamentals`)

2. **Section IDs**:
   - Simple kebab-case identifiers (e.g., `what-is-bitcoin`)
   - Do not include parent module prefixes in section IDs

3. **URL Structure**:
   - Bitcoin: `/learn/bitcoin/[module-path]/[section-path]`
   - Lightning: `/learn/lightning/[module-path]/[section-path]`

## Recent Fixes and Improvements

### Lightning Path Stabilization

The Lightning learning path was recently stabilized with the following changes:

1. **Consistent Naming**:
   - All Lightning modules now consistently use the `lightning-` prefix in both:
     - Directory structure
     - Module IDs in the configuration

2. **URL Handling Improvements**:
   - Fixed URL construction in landing pages to properly strip prefixes
   - Updated navigation components to handle prefixed module IDs

3. **Module Progress Tracking**:
   - Modified `ModuleContent` component to normalize module IDs
   - Updated `VerifyCheckbox` component to handle both prefixed and non-prefixed IDs

4. **Missing Pages**:
   - Added all missing pages in the Lightning Advanced Concepts section:
     - HTLC Deep Dive
     - Multipath Payments
     - Submarine Swaps
     - Watchtowers

### Directory Cleanup

A cleanup script was created to remove redundant directories:

- **Location**: `/scripts/cleanup-redundant-directories.sh`
- **Purpose**: Removes old non-prefixed directories that were replaced with prefixed versions
- **Backup**: Creates a backup of removed directories at `/directory-backups-YYYYMMDDHHMMSS`

## Theme Configuration

The project uses a custom Tailwind configuration with specific theme colors:

1. **Bitcoin Theme**:
   - Primary color: `#e44c41` (reddish-orange)
   - Deep color: `#c83932`
   - Hover color: `#e86b62`
   - Light color: `#fbf0ef`
   - Dark color: `#a32e28`

2. **Lightning Theme**:
   - Purple: `#8E44AD`
   - Blue: `#2980B9`
   - Yellow: `#F1C40F`
   - Green: `#27AE60`
   - Red: `#E74C3C`

3. **Dark Mode**:
   - Uses CSS variables defined in Tailwind configuration
   - Activated using the `dark` class on the document

## Common Issues and Solutions

### 404 Errors

If encountering 404 errors in the learning paths:

1. Check if the page structure matches the configuration in `src/config/learning-modules.ts`
2. Verify that all directories and files follow the naming conventions
3. Ensure that all module IDs in page files match the IDs in configuration

### Progress Tracking Issues

If progress tracking is not working correctly:

1. Check if the `moduleId` and `sectionId` in page files match the configuration
2. Verify that the `VerifyCheckbox` component is properly configured
3. Check the `LearningProgressContext` implementation in `src/contexts/LearningProgressContext.tsx`

### Navigation Problems

If navigation between pages is broken:

1. Verify URL construction in landing pages (`src/app/learn/bitcoin/page.tsx` and `src/app/learn/lightning/page.tsx`)
2. Check the `handleModuleClick` function in both landing pages
3. Ensure navigation links in header and sidebar components use the correct paths

## Adding New Content

When adding new learning content:

1. **Configuration**:
   - Add the new module/section to `src/config/learning-modules.ts`
   - Follow the established ID conventions

2. **Directory Structure**:
   - Create directories following the prefixed naming pattern
   - Place the page.tsx file in the correct section directory

3. **Page Content**:
   - Use the `ModuleLayout` and `ModuleContent` components
   - Include the correct `moduleId` and `sectionId`
   - Add a `VerifyCheckbox` component with appropriate verification ID

4. **Testing**:
   - Test navigation to the new content
   - Verify that progress tracking works correctly
   - Check mobile and desktop layouts

## Performance Considerations

To maintain good performance:

1. Use Next.js Image component for optimized images
2. Keep component re-renders minimal in the learning path
3. Use the appropriate Next.js data fetching methods
4. Consider code splitting for large content sections

## Deployment Process

### GitHub Repository Structure

The project uses a dual-repository structure with separate development and production repositories:

1. **Development Repository**:
   - GitHub repository: `https://github.com/EpicGrowth/Satoshi-Learning-Next`
   - Used for active development and testing
   - Configured with GitHub Actions for deployment to staging environment

2. **Production Repository**:
   - GitHub repository: `https://github.com/Epic-Growth/Satoshi-Learning-Path`
   - Used for production deployment
   - Changes are merged from development repo when ready for production

3. **GitHub Actions Workflow**:
   - Triggered on push to `main` branch
   - Builds the Next.js app with static export
   - Authenticates to Google Cloud using service account key
   - Deploys static files to Google Cloud Storage
   - Updates cache headers for optimal performance

### Google Cloud Setup

The application is hosted on Google Cloud using the following components in both staging and production environments:

1. **Google Cloud Storage**:
   - Production Bucket: `sats-sv-static` (serves sats.sv domain)
   - Staging Bucket: `sats-sv-staging`
   - Public access enabled for website hosting on both buckets
   - Default document: `index.html`
   - 404 page: `404.html`

2. **Load Balancer**:
   - Frontend configuration with HTTPS and SSL certificate
   - Backend service: `sats-sv-backend`
   - URL map to handle routing

3. **Cloud Build**:
   - Configuration in `cloud-build.yaml`
   - Automated builds on commit

### Deployment Credentials

To deploy to Google Cloud, the following credentials are required:

1. **Service Account Key**:
   - Stored as GitHub Secret: `GCP_SA_KEY`
   - Roles required:
     - Storage Admin
     - Compute Load Balancer Admin

2. **Domain Configuration**:
   - Domain: `sats.sv`
   - DNS records managed in Google Cloud DNS

### Manual Deployment

To manually deploy the application:

```bash
# Build the application
npm run build

# Deploy to Google Cloud Storage
gcloud auth login
gsutil -m rsync -r -d ./out gs://sats-sv-static
```

## Future Development Roadmap

Planned enhancements for the project:

1. User authentication and cloud-based progress tracking
2. Advanced interactive learning exercises
3. Improved search functionality across content
4. Additional visualization components for complex concepts
5. Multi-language support for international audiences

---

This guide is intended to evolve as the project grows. Developers are encouraged to update it with new information as the codebase changes.
