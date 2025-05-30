# SatoshiStationNext

An interactive learning platform for Bitcoin and Lightning Network education.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the application.

## Documentation Structure

- [Development Guide](docs/DEVELOPMENT.md) - Complete development documentation
- [Technical Documentation](docs/TECHNICAL.md) - Technical architecture and implementation details
- [Deployment Strategy](docs/DEPLOYMENT_STRATEGY.md) - Deployment procedures and infrastructure
- [Content Strategy](docs/satoshi-station-content-strategy.md) - Content guidelines and standards
- [Visual Guidelines](docs/satoshi-station-visual-guidelines-comprehensive.md) - Visual design standards
- [Learning Path System](docs/LEARN_PATH_SYSTEM.md) - Learning path architecture and management
- [Mobile Components](docs/MOBILE_COMPONENTS.md) - Mobile navigation and progress tracking components
- [Search Indexing](docs/SEARCH_INDEXING.md) - Search functionality and indexing documentation
- [Post Deployment Verification](docs/POST_DEPLOYMENT_VERIFICATION.md) - Deployment verification procedures
- [Content Style Guide](docs/satoshi-station-content-style-guide-comprehensive.md) - Comprehensive content guidelines
- [Editorial Workflow](docs/satoshi-station-editorial-workflow.md) - Content creation and review process
- [Audience Personas](docs/satoshi-station-audience-personas.md) - Target audience definitions
- [Measurement Framework](docs/satoshi-station-measurement-framework.md) - Analytics and success metrics
- [Color & Typography](docs/COLOR-TYPOGRAPHY-UPDATE.md) - Design system specifications
- [Voice Application Guide](docs/satoshi-station-voice-application-guide.md) - Brand voice guidelines
- [Crisis Plan](docs/satoshi-station-crisis-plan.md) - Incident response procedures
- [Response Frameworks](docs/satoshi-station-response-frameworks.md) - Communication guidelines
- [Messaging Architecture](docs/satoshi-station-messaging-architecture.md) - Content organization strategy

## Project Overview

Satoshi Station's mission is to ignite a revolution in digital expression and Bitcoin education, empowering creators and championing a decentralized future. Our primary project goal is to develop a launchable, finished version of our interactive learning platform by completing its comprehensive learning path content. This development will be significantly driven by AI tools. A key deliverable will be an advanced learning path that serves as a proof-of-concept, enabling students to learn Bitcoin development through practical programming exercises that connect to real network data (e.g., from an Umbrel setup), thereby demonstrating the platform's core value: learning through building and verifying.

## Key Features

- **Interactive Learning Modules**: Comprehensive Bitcoin and Lightning Network educational content
- **Progress Tracking System**: Using React Context API and localStorage
- **Verification Checkboxes**: Custom-styled green checkboxes with white checkmarks for section completion
- **Learning Sidebar**: Module-based navigation showing progress percentages and completion status
- **Theme Support**: Dark and light modes with exact colors from the original sats.sv site
- **Honeycomb Background**: Recreated SVG-based hexagon pattern from the original site
- **Interactive Visualizations**: Lightning Network demonstrations and Bitcoin concept illustrations
- **Bitcoin Verification Tools**: Educational tools for verifying blocks, signatures, and Merkle proofs
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

## Page Structure

### Core Pages
- `/` - Homepage with learning path overview and features
- `/learn` - Learning paths overview
- `/resources` - Developer resources and documentation links

### Bitcoin Learning Path (`/learn/bitcoin/`)
1. **Bitcoin Fundamentals**
   - `/bitcoin-fundamentals/what-is-bitcoin`
   - `/bitcoin-fundamentals/the-blockchain`
   - `/bitcoin-fundamentals/private-keys-wallets`
   - `/bitcoin-fundamentals/making-transactions`

2. **Bitcoin Economics**
   - `/bitcoin-economics/bitcoin-economics`
   - `/bitcoin-economics/economic-impact`
   - `/bitcoin-economics/game-theory`
   - `/bitcoin-economics/market-dynamics`
   - `/bitcoin-economics/monetary-policy`

3. **Bitcoin Technical**
   - `/bitcoin-technical/mining-consensus`
   - `/bitcoin-technical/network-architecture`
   - `/bitcoin-technical/protocol-updates`
   - `/bitcoin-technical/script-language`

### Lightning Network Path (`/learn/lightning/`)
1. **Lightning Fundamentals**
   - `/lightning-fundamentals/what-is-lightning`
   - `/lightning-fundamentals/payment-channels`
   - `/lightning-fundamentals/htlc`
   - `/lightning-fundamentals/network-topology`
   - `/lightning-fundamentals/onion-routing`
   - `/lightning-fundamentals/how-lightning-works`

2. **Channel Management**
   - `/lightning-channel-management/opening-channels`
   - `/lightning-channel-management/channel-capacity`
   - `/lightning-channel-management/channel-balancing`
   - `/lightning-channel-management/closing-channels`

3. **Node Operations**
   - `/lightning-node-operations/autopilot`
   - `/lightning-node-operations/backup-strategies`

4. **Advanced Concepts**
   - `/lightning-advanced/htlc-deep-dive`
   - `/lightning-advanced/multipath`
   - `/lightning-advanced/submarine`
   - `/lightning-advanced/watchtowers`

## Implementation Details

### Core Components

- **Verification Checkbox**: Custom button-based implementation that matches the original green checkboxes
- **Learning Sidebar**: Expandable sections with progress tracking and Bitcoin/Lightning themed styling
- **Honeycomb Background**: SVG-based background pattern with themed overlays
- **Progress Tracking**: Context-based system for tracking and persisting user progress
- **Homepage Layout**: Exact recreation of the original sats.sv homepage layout

### Bitcoin Verification Tools

The platform includes a suite of interactive Bitcoin verification tools that serve both educational and practical purposes:

- **Block Explorer**: Allows users to search for blocks by height or hash and explore transaction details
  - Features educational content about block structure and headers
  - Includes visual diagrams showing the anatomy of a Bitcoin block
  - Provides pagination for transaction lists

- **Digital Signature Verification**: Enables users to verify Bitcoin message signatures
  - Includes tooltips explaining each input field (address, message, signature)
  - Provides example data for testing with Satoshi's address
  - Features educational content about ECDSA signatures and their importance

- **Merkle Proof Verification**: Allows users to verify transaction inclusion in blocks
  - Features visualization of Merkle trees and verification paths
  - Includes educational content about how Merkle proofs work
  - Explains the importance of Merkle proofs for lightweight clients

All verification tools feature a consistent design pattern with dark mode support and responsive layouts that work well on mobile devices. The tools are implemented as client-side components to ensure that private keys and sensitive data never leave the user's device.

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

## Search Functionality and Indexing

The website features a search bar that allows users to find content across the learning paths. This search functionality relies on a pre-generated JSON file (`public/search-index.json`) that contains an index of all searchable content.

### Generating the Search Index

A script is provided to automatically generate this `search-index.json` file based on the content in your project.

**1. Content Structure:**

*   The script expects learning content to be in `.mdx` files.
*   These files should be located under `src/content/`.
*   The directory structure should follow this pattern:
    *   `src/content/bitcoin/[module-slug]/[section-slug].mdx`
    *   `src/content/lightning/[module-slug]/[section-slug].mdx`
*   Each `.mdx` file must include frontmatter with the following fields:
    *   `title` (string): The title of the section.
    *   `description` (string, optional): A brief description of the section.
    *   `moduleId` (string): A unique identifier for the module (e.g., "btc1", "ln2").
    *   `sectionId` (string): A unique identifier for the section (e.g., "btc1-1", "ln2-3").
    *   `moduleOrder` (number): The numerical order of the module within its topic.
    *   `sectionOrder` (number): The numerical order of the section within its module.

**2. Dependencies:**

Ensure you have the necessary development dependencies installed. If not, run:
```bash
npm install -D typescript ts-node glob gray-matter strip-markdown fs-extra remark @types/glob @types/gray-matter @types/strip-markdown @types/fs-extra @types/node
```
Or, if using Yarn:
```bash
yarn add -D typescript ts-node glob gray-matter strip-markdown fs-extra remark @types/glob @types/gray-matter @types/strip-markdown @types/fs-extra @types/node
```

**3. Running the Script:**

To generate or update the search index, run the following command from the project root:
```bash
npm run build:search-index
```
Or, if using Yarn:
```bash
yarn build:search-index
```
This command executes the `scripts/generate-search-index.ts` script.

**Important Notes:**

*   If the `src/content/` directory does not exist or contains no `.mdx` files, the script will create an empty `public/search-index.json`. This ensures the application can still run but search will yield no results.
*   You should run this script whenever you add new content, update existing content, or change the frontmatter of your content files to ensure the search index is up-to-date.
*   Consider adding `npm run build:search-index` to your main `build` script in `package.json` (e.g., `"build": "npm run build:search-index && next build"`) to automate this process during builds.


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

1. Fork the repository
2. Create your feature branch
3. Follow our [Development Guide](docs/DEVELOPMENT.md)
4. Submit a pull request

## License

MIT License - see LICENSE file for details