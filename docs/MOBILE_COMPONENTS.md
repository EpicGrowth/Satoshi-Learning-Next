# Mobile Navigation Components

## Overview

Satoshi Station Next implements two distinct mobile navigation components that serve different purposes in the learning path system:

1. **Mobile Progress Tracker** (`mobile-progress-tracker.tsx`)
2. **Mobile Learning Sidebar** (`mobile-learning-sidebar.tsx`)

This document explains the purpose, functionality, and differences between these components.

## Mobile Progress Tracker

The Mobile Progress Tracker is a fixed navigation component that appears at the top of the learning path pages on mobile devices.

### Features:
- Displays the current learning path title (Bitcoin/Lightning)
- Shows overall progress percentage across all modules
- Provides a collapsible view of all modules and sections
- Includes a reset button to clear progress data
- Allows quick navigation between sections

### Implementation Details:
- Progress calculation is based on completed sections (100% progress)
- Progress is capped at 100% to prevent display issues
- Includes visual indicators for completed, in-progress, and locked sections

## Mobile Learning Sidebar

The Mobile Learning Sidebar is a slide-in panel that provides detailed navigation through the learning path.

### Features:
- Triggered by a floating action button (FAB)
- Displays all modules with their difficulty levels
- Shows detailed progress for each section
- Provides filtering by difficulty level
- Includes a reset progress button
- Closes automatically when navigating to a section

### Implementation Details:
- Progress calculation is based on completed sections
- Progress is capped at 100% to prevent display issues
- Includes visual indicators for completed, next, and locked sections

## Usage Guidelines

Both components are necessary for the mobile learning experience:

1. **Mobile Progress Tracker** provides quick access to overall progress and navigation
2. **Mobile Learning Sidebar** provides detailed navigation and filtering options

When making changes to progress tracking or navigation:
- Update both components to maintain consistency
- Ensure progress calculation methods are identical
- Test both components on various mobile screen sizes

## Troubleshooting

Common issues:
- Incorrect progress percentages: Check the progress calculation in both components
- Navigation not working: Ensure path construction is correct
- Reset button not working: Verify localStorage interaction in the reset functions
