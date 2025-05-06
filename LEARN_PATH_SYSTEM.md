# Satoshi Station Learning Path System

## Overview

The learning path system in Satoshi Station is designed to guide users through a structured educational journey on Bitcoin and Lightning Network. This document explains the core mechanics of the learning paths, modules, sections, verification system, and progress tracking.

## Learning Path Structure

The learning content is organized in a hierarchical structure:

```
Learning Path (Bitcoin/Lightning)
└── Module (e.g., "Bitcoin Basics")
    └── Section (e.g., "What is Bitcoin")
        └── Content with Verification Checkpoints
```

### Paths

There are two main learning paths:
1. **Bitcoin Path** - Covers Bitcoin fundamentals, using Bitcoin-orange theming
2. **Lightning Network Path** - Covers Lightning Network topics, using Lightning-purple theming

### Modules

Each path contains multiple modules that group related content:
- **Bitcoin Modules**: Bitcoin Basics, Blockchain Technology, Mining & Consensus, etc.
- **Lightning Modules**: Lightning Fundamentals, Payment Channels, Routing, etc.

Modules track overall completion percentage based on verified sections.

### Sections

Sections are individual lessons within modules. Each section contains:
- Educational content (text, images, code examples)
- Interactive examples (when applicable)
- Verification checkboxes at key learning points

## Verification Checkpoint System

### Verification Checkboxes

The verification checkboxes are a core mechanic for:
1. Confirming user understanding
2. Tracking learning progress
3. Unlocking subsequent content

#### Implementation Details

The `verify-checkbox.tsx` component:
- Renders as a custom button with a square container
- Shows a green background (#4CAF50) with white checkmark when checked
- Stores verification state in the learning progress context
- Triggers unlocking of dependent content when checked

```tsx
// Key properties of the VerifyCheckbox component
interface VerifyCheckboxProps {
  moduleId: string;          // Which module this belongs to
  sectionId: string;         // Which section this belongs to
  verificationId: string;    // Unique identifier for this verification point
  label?: string;            // Text displayed next to checkbox
}
```

### Unlocking Mechanism

1. **Prerequisite System**:
   - Each section may have prerequisites (previously completed sections)
   - Sections with unmet prerequisites appear locked in the sidebar
   - Attempting to access locked content redirects to prerequisites

2. **Progressive Unlocking**:
   - When a user checks a verification checkbox, the system:
     - Marks that specific verification point as complete
     - Updates the progress percentage for the parent section/module
     - Checks if any dependent content can now be unlocked
     - Persists the verification state to localStorage

## Progress Tracking System

### Learning Progress Context

The progress system is implemented using React Context API (`learning-progress-context.tsx`):

```tsx
// Core functionality provided by the context
interface LearningProgressContextType {
  // Check if a specific verification point is completed
  isVerified: (moduleId: string, sectionId: string, verificationId: string) => boolean;
  
  // Mark a verification point as completed or not completed
  setVerified: (moduleId: string, sectionId: string, verificationId: string, verified: boolean) => void;
  
  // Get completion percentage for a module
  getModuleProgress: (moduleId: string) => number;
  
  // Check if a section is unlocked based on prerequisites
  isSectionUnlocked: (moduleId: string, sectionId: string) => boolean;
  
  // Get all verified items (for debugging)
  verifiedItems: Record<string, boolean>;
}
```

### Progress Persistence

- User progress is automatically saved to localStorage
- Format: `{moduleId}:{sectionId}:{verificationId}` as keys with boolean values
- Progress is loaded on app initialization
- Changes to verification status trigger storage updates

### Progress Visualization

1. **Sidebar Indicators**:
   - Each module shows an overall percentage complete
   - Modules display a color-coded progress bar (Bitcoin-orange or Lightning-purple)
   - Completed sections show a checkmark icon
   - Locked sections show a lock icon and appear dimmed

2. **Path Overview**:
   - Path landing pages show module completion status
   - Visual indicators highlight completed, in-progress, and locked modules

## Learning Sidebar Implementation

The `learning-sidebar.tsx` component:
- Renders the navigation tree of modules and sections
- Displays progress indicators and percentages
- Handles module expansion/collapse
- Shows appropriate icons for completed/locked content
- Styles differently based on the current learning path

```tsx
// Key functionality of the LearningPathSidebar component
interface LearningPathSidebarProps {
  modules: Module[];         // Available modules for this path
  pathPrefix: string;        // "bitcoin" or "lightning" to determine styling
  currentModuleId?: string;  // Currently active module
  currentSectionId?: string; // Currently active section
}
```

## Example Learning Flow

1. User starts at "What is Bitcoin" (first unlocked section)
2. User reads content and reaches a verification point
3. User checks the verification checkbox, confirming understanding
4. System updates progress and unlocks the next section
5. Sidebar updates to show progress and newly available content
6. User continues to the next section or module

## Technical Implementation Notes

1. **Client Components**:
   - All verification and progress-related components use the `'use client'` directive
   - This enables interactive functionality with React hooks and browser storage

2. **Modular Architecture**:
   - Learning content is separated from the progress/verification system
   - This allows content to be updated without affecting user progress

3. **Performance Considerations**:
   - Progress calculations are memoized to prevent unnecessary re-renders
   - localStorage access is batched to minimize performance impact

4. **Path-specific Theming**:
   - Bitcoin path uses `--bitcoin-orange` (#FF4500) as primary color
   - Lightning path uses `--lightning-purple` (#9C27B0) as primary color
   - These colors are applied to progress bars, icons, and interactive elements

## Development Guidelines

When extending or modifying the learning path system:

1. **Adding New Verification Points**:
   - Ensure each verification point has a unique ID within its section
   - Update any prerequisite relationships if needed
   - Consider the logical flow of content unlocking

2. **Creating New Sections/Modules**:
   - Follow the established content structure
   - Define clear prerequisites for progressive learning
   - Implement appropriate verification points

3. **Modifying the Progress System**:
   - Maintain backward compatibility with existing progress data
   - Test both new user and returning user scenarios
   - Ensure persistence works across page refreshes

4. **Styling Guidelines**:
   - Maintain consistent styling with the original sats.sv site
   - Use the defined color variables for Bitcoin/Lightning paths
   - Test both light and dark mode appearances