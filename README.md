# Satoshi Station Next

Satoshi Station is a comprehensive learning platform for Bitcoin and Lightning Network education. This project is the Next.js migration and redesign of the original Satoshi Learning Path (sats.sv), built with modern web technologies and an improved user experience while maintaining the exact look and feel of the original site.

> **IMPORTANT**: This repository deploys to **staging.sats.sv** for testing and validation before changes are promoted to production at **sats.sv**.

## Project Overview

This project is a faithful recreation of the Satoshi Learning Path (sats.sv) using Next.js, focusing on:

1. **Exact Visual Fidelity**: Matching pixel-perfect UI elements from the original sats.sv site
2. **Functional Equivalence**: Preserving all learning features including verification checkboxes and progress tracking
3. **Modern Frontend Architecture**: Implementing with Next.js App Router, React client components, and Tailwind CSS

We're reconstructing the site based on screenshots of the original, ensuring that elements like the Bitcoin-orange and Lightning-purple color schemes, honeycomb background patterns, and component layouts precisely match the original experience.

## Key Features

- **Interactive Learning Modules**: Comprehensive Bitcoin and Lightning Network educational content
- **Progress Tracking System**: Using React Context API and localStorage
- **Verification Checkboxes**: Custom-styled green checkboxes with white checkmarks for section completion
- **Learning Sidebar**: Module-based navigation showing progress percentages and completion status
- **Theme Support**: Dark and light modes with exact colors from the original sats.sv site
- **Honeycomb Background**: Recreated SVG-based hexagon pattern from the original site
- **Interactive Visualizations**: Lightning Network demonstrations and Bitcoin concept illustrations
- **Strict Typography Requirements**: Exo 2 font (weight 700) with exact #FF523C orange color for all Satoshi Station branding

## Learning Path Structure

The Satoshi Station Next learning path is divided into two main categories: Bitcoin and Lightning. Each learning path is independent, allowing users to progress through either path without prerequisites from the other.

## Project Structure

The project uses a directory structure that reflects the learning modules for both Bitcoin and Lightning paths.

### Directory Layout

```bash
src/app/learn/
  ├── bitcoin/               # Bitcoin learning path
  │   ├── bitcoin-fundamentals/      # Bitcoin fundamentals module
  │   ├── bitcoin-economics/         # Bitcoin economics module
  │   └── bitcoin-technical/         # Bitcoin technical module
  │
  └── lightning/             # Lightning learning path
      ├── lightning-fundamentals/         # Lightning fundamentals module
      ├── lightning-node-operations/      # Lightning node operations module
      ├── lightning-channel-management/   # Lightning channel management module
      ├── lightning-routing-operations/   # Lightning routing operations module
      └── lightning-security/            # Lightning security module
```

### Naming Conventions

Both learning paths use consistent naming conventions with prefixed directory names:

- **Bitcoin path**: Module directories use the 'bitcoin-' prefix (e.g., `bitcoin-fundamentals`, `bitcoin-economics`)
- **Lightning path**: Module directories use the 'lightning-' prefix (e.g., `lightning-fundamentals`, `lightning-node-operations`)

Each module directory contains section directories, which in turn contain the `page.tsx` files that render the content for that section.

## Learning Path Architecture

The learning path system has the following key components:

1. **Module Structure**: Content is organized into modules and sections in the configuration (`src/config/learning-modules.ts`)

2. **Progress Tracking**: The `LearningProgressContext` tracks user progress through sections and modules

3. **Path Independence**: Bitcoin and Lightning paths are completely independent of each other

4. **Progressive Unlocking**: Within each path, sections unlock progressively as users complete previous sections

5. **Verification System**: Each section has a single verification checkbox that marks that section as completed

6. **Responsive Design**: All learning path content is fully responsive for desktop, tablet, and mobile devices

7. **Theming**: Bitcoin content uses a blue theme, while Lightning content uses a purple theme

### Bitcoin Modules

#### Bitcoin Fundamentals (Beginner)

- What is Bitcoin?
- Blockchain Basics
- Private Keys & Wallets
- Making Transactions

#### Bitcoin Economics (Intermediate)

- Bitcoin Economics (Overview)
- Monetary Policy

### Lightning Modules

#### Lightning Fundamentals (Beginner)

- What is Lightning?
- How Lightning Works
- Payment Channels
- Network Topology
- HTLCs (Hash Time-Locked Contracts)
- Onion Routing

#### Lightning Node Operations (Intermediate)

- Node Installation
- Node Setup
- Basic Configuration
- Channel Management
- Routing
- Monitoring
- Maintenance Tasks
- Backups
- Security Setup

#### Lightning Channel Management (Intermediate)

- Opening Channels
- Channel Capacity
- Channel Balancing
- Closing Channels

#### Lightning Routing Operations (Advanced)

- Path Finding
- Fee Management
- Route Optimization

#### Lightning Security (Advanced)

- Node Security
- Channel Security
- Network Security
- Key Management

#### Bitcoin Economics (Continued)

- Game Theory
- Market Dynamics
- Economic Impact

#### Technical Deep Dive (Advanced)

- Script Language
- Mining & Consensus
- Network Architecture
- Protocol Updates
- Security & Best Practices

### Lightning Modules

- Lightning Fundamentals
- Payment Channels
- Routing & Pathfinding
- Lightning Implementations
- Lightning Applications
- LNURL & Lightning Address

### Developer Resources

- Development Basics
- Bitcoin RPC
- Lightning Development
- Smart Contracts
- Security Best Practices
- Wallet Development

## Implementation Details

### Core Components

- **Verification Checkbox**: Custom button-based implementation that matches the original green checkboxes
- **Learning Sidebar**: Expandable sections with progress tracking and Bitcoin/Lightning themed styling
- **Honeycomb Background**: SVG-based background pattern with themed overlays
- **Progress Tracking**: Context-based system for tracking and persisting user progress
- **Homepage Layout**: Exact recreation of the original sats.sv homepage layout

### Design System

- **Colors**:
  - Bitcoin Orange: #FF4500 (exact match from original site)
  - Lightning Purple: #9C27B0
  - Background (Light): HSL(48 45% 96%) - Light cream/beige
  - Background (Dark): HSL(226 35% 9%) - Dark navy

- **Typography**:
  - System fonts to match original: -apple-system, BlinkMacSystemFont, 'Segoe UI', etc.
  
- **Layout**:
  - Learning path sidebar (240px width)
  - Content area with verification checkboxes
  - Responsive design matching breakpoints of original

### Special Features

- **Progress Indicators**: Percentage-based completion tracking with progress bars
- **Module Expansion**: Interactive accordion-style navigation
- **Conditional Rendering**: Locked/unlocked sections based on prerequisites
- **Bitcoin/Lightning Path Distinction**: Separate styling for Bitcoin vs Lightning paths

## Project Structure

```
src/
├── app/
│   ├── page.tsx - Homepage (exact match to sats.sv)
│   ├── page.satoshi-station.tsx - Updated homepage implementation
│   ├── globals.css - Theme definitions matching sats.sv colors
│   └── learn/ - Learning modules organized by path
├── components/
│   ├── animations/
│   │   └── HoneycombBackground.tsx - Recreated honeycomb pattern
│   ├── layout/
│   │   ├── Header.tsx - Main navigation
│   │   └── Header.updated.tsx - Updated header matching screenshots
│   └── learn/shared/
│       ├── verify-checkbox.tsx - Custom verification checkbox
│       └── learning-sidebar.tsx - Module navigation with progress
├── contexts/
│   └── learning-progress-context.tsx - Progress tracking system
└── config/
    └── learning-modules.ts - Module definitions
```

## Development Guidelines

When working on this project, follow these key principles:

1. **Visual Fidelity**: Always reference the original sats.sv screenshots when implementing UI elements
2. **Progress Persistence**: Ensure that progress tracking works correctly with localStorage
3. **Responsive Design**: Maintain the responsive behavior of the original site
4. **Theme Consistency**: Use the exact colors defined in globals.css and tailwind.config.js
5. **Component Structure**: Follow the established component organization pattern

## Technology Stack

- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS with custom theme configuration
- **State Management**: React Context API for progress tracking
- **Persistence**: localStorage for saving user progress
- **UI Components**: Custom components based on shadcn/ui primitives
- **Icons**: Lucide React for icon system

## Deployment

Satoshi Station Next is deployed using GitHub Actions to Google Cloud Storage with a Cloud Load Balancer for serving the content.

### Deployment Architecture

- **Development Repository**: GitHub at `EpicGrowth/Satoshi-Learning-Next`
- **Production Repository**: GitHub at `Epic-Growth/Satoshi-Learning-Path`
- **CI/CD**: GitHub Actions workflow (`.github/workflows/deploy.yml`)
- **Hosting**: Google Cloud Storage static website + Cloud Load Balancer
- **Domain**: `sats.sv`

### Deployment Process

The deployment process is fully automated:

1. Push changes to the `main` branch
2. GitHub Actions builds the Next.js app as static files
3. Static files are deployed to Google Cloud Storage bucket `sats-sv-static`
4. Content is served via Cloud Load Balancer with proper caching rules

For detailed deployment instructions, see the [Deployment Process](./DEVELOPMENT.md#deployment-process) section in the development documentation.

## Running the Project

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the application

## Visual References

The design is based on screenshots of the original sats.sv site, which can be found in:
- `/home/jean-paul/Source/ClaudeCode/Lightning Network _ Satoshi Learning Path.png` (Light mode)
- `/home/jean-paul/Source/ClaudeCode/Lightning Network _ Satoshi Learning Path (2).png` (Dark mode)

These screenshots serve as the definitive reference for the visual design.

## Development Status

### Completed
- Implemented dark mode with colors matching the original sats.sv site
- Added interactive learning modules with content from the original site
- Implemented verification checkboxes with progress tracking
- Implemented learning sidebar with proper module expansion and progress display
- Updated verification checkboxes to match the original green style
- Stabilized Lightning learning path with consistent naming conventions
- Fixed module navigation and progress tracking for both Bitcoin and Lightning paths
- Implemented consistent URL structure for both learning paths
- Added all missing pages in the Lightning learning path, including advanced concepts

### Roadmap
- Add more interactive visualizations and demos
- Implement user accounts and cloud synchronization of progress
- Add search functionality across learning content
- Create downloadable resources and cheat sheets
- Improve accessibility features

## Troubleshooting

If you encounter issues with the learning paths or content:

1. **404 Errors**: Check if the page structure matches the configuration in `src/config/learning-modules.ts`
2. **Progress Not Saving**: Clear browser localStorage or check the `LearningProgressContext` implementation
3. **Missing Module Content**: Ensure all files follow the correct naming convention with prefixes
4. **Navigation Issues**: Verify that the URL construction in landing pages is correct

## Contributing

To contribute to this project:

1. Create a feature branch for your changes
2. Follow the established naming conventions and code structure
3. Test thoroughly before submitting pull requests
4. Include documentation updates in the README for any structural changes

## License

MIT