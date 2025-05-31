# Satoshi Station Learning Path System

## Overview

The learning path system in Satoshi Station is designed to guide users through a structured educational journey on Bitcoin and Lightning Network. This document explains the core mechanics of the learning paths, modules, sections, verification system, and progress tracking.

## Learning Path Structure

The learning content is organized in a hierarchical structure:

```text
Learning Path (Bitcoin/Lightning)
└── Module (e.g., "Bitcoin Basics")
    └── Section (e.g., "What is Bitcoin")
        └── Content with Verification Checkpoints
```

### Paths

There are two main learning paths:

1. **Bitcoin Path** - Covers Bitcoin fundamentals through advanced topics, using Bitcoin-orange theming
2. **Lightning Network Path** - Covers Lightning Network topics, using Lightning-purple theming

### Bitcoin Path Structure

1. **Bitcoin Fundamentals** (Beginner)
   - What is Bitcoin (`/bitcoin-fundamentals/what-is-bitcoin`)
   - The Blockchain (`/bitcoin-fundamentals/the-blockchain`)
   - Private Keys & Wallets (`/bitcoin-fundamentals/private-keys-wallets`)
   - Making Transactions (`/bitcoin-fundamentals/making-transactions`)

2. **Bitcoin Economics** (Intermediate)
   - Bitcoin Economics Overview (`/bitcoin-economics/bitcoin-economics`)
   - Economic Impact (`/bitcoin-economics/economic-impact`)
   - Game Theory (`/bitcoin-economics/game-theory`)
   - Market Dynamics (`/bitcoin-economics/market-dynamics`)
   - Monetary Policy (`/bitcoin-economics/monetary-policy`)

3. **Bitcoin Technical** (Advanced)
   - Mining & Consensus (`/bitcoin-technical/mining-consensus`)
   - Network Architecture (`/bitcoin-technical/network-architecture`)
   - Protocol Updates (`/bitcoin-technical/protocol-updates`)
   - Script Language (`/bitcoin-technical/script-language`)

### Lightning Path Structure

1. **Lightning Fundamentals** (Beginner)
   - What is Lightning (`/lightning-fundamentals/what-is-lightning`)
   - Payment Channels (`/lightning-fundamentals/payment-channels`)
   - HTLCs (`/lightning-fundamentals/htlc`)
   - Network Topology (`/lightning-fundamentals/network-topology`)
   - Onion Routing (`/lightning-fundamentals/onion-routing`)
   - How Lightning Works (`/lightning-fundamentals/how-lightning-works`)

2. **Channel Management** (Intermediate)
   - Opening Channels (`/lightning-channel-management/opening-channels`)
   - Channel Capacity (`/lightning-channel-management/channel-capacity`)
   - Channel Balancing (`/lightning-channel-management/channel-balancing`)
   - Closing Channels (`/lightning-channel-management/closing-channels`)

3. **Node Operations** (Intermediate)
   - Autopilot (`/lightning-node-operations/autopilot`)
   - Backup Strategies (`/lightning-node-operations/backup-strategies`)

4. **Advanced Concepts** (Advanced)
   - HTLC Deep Dive (`/lightning-advanced/htlc-deep-dive`)
   - Multipath Payments (`/lightning-advanced/multipath`)
   - Submarine Swaps (`/lightning-advanced/submarine`)
   - Watchtowers (`/lightning-advanced/watchtowers`)

## Verification Checkpoint System

### Verification Checkboxes

The verification checkboxes are a core mechanic for:

1. Confirming user understanding
2. Tracking learning progress
3. Providing a sense of accomplishment

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

### Progress Tracking

The system tracks user progress through the learning paths without restricting access:

1. **Open Access Model**:
   - All sections are freely accessible regardless of completion status
   - Users can explore content in any order based on their interests
   - Progress is still tracked for a sense of accomplishment
   - All sections are visually represented in the sidebar with their completion status
   - The sidebar provides a clear indication of progress through each learning path

2. **Progress Visualization**:
   - When a user checks a verification checkbox, the system:
     - Marks that verification point as complete
     - Updates the progress percentage for that section
     - If this completes the section, it visually indicates completion in the sidebar
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

1. **Section State Indicators**

The sidebar UI shows section state in several ways:

   - Completed sections have a check mark icon
   - In-progress sections show a progress percentage
   - Next recommended sections are highlighted with an arrow icon

2. **Path Overview**:
   - Path landing pages show module completion status
   - Visual indicators highlight completed, in-progress, and next recommended modules
   - Progress percentage displayed for each module card

## Learning Sidebar Implementation

The `learning-sidebar.tsx` component:
- Renders the navigation tree of modules and sections
- Displays progress indicators and percentages
- Handles module expansion/collapse
- Shows appropriate icons for completed and next recommended content
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
4. System updates progress and visually indicates completion in the sidebar
5. User continues to the next section or module

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

### Module Definition

Each module is defined in `learning-modules.ts` with:
- Unique ID with appropriate prefix (bitcoin- or lightning-)
- Title and description
- Difficulty level
- List of sections with their own IDs and metadata
- Prerequisites (if any)

### Client Components

All learning path components are client components (use 'client' directive) to enable:
- Interactive progress tracking
- Dynamic module unlocking
- Progress persistence
- Smooth navigation between sections

### URL Structure

URLs follow a consistent pattern:
- `/learn/[path]/[module]/[section]`
- Module IDs in URLs have prefixes stripped for cleaner URLs
- Internal code handles prefix normalization

### Static Generation

- All learning paths and sections are statically generated at build time
- Dynamic content fetching happens client-side after initial load
- Progress tracking runs entirely client-side

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

This document serves as the authoritative reference for the learning path system implementation.