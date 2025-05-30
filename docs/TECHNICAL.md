# SatoshiStationNext Technical Documentation

## Architecture Overview

SatoshiStationNext is built on modern web technologies with a focus on performance, maintainability, and user experience:

- **Framework**: Next.js with App Router
- **UI Layer**: React with TypeScript
- **Styling**: Tailwind CSS with custom theming
- **State Management**: React Context API
- **Data Persistence**: LocalStorage for progress tracking
- **Deployment**: Google Cloud Run with CloudFlare CDN

## Implementation Details

### Core Components

1. **Learning Path System**

   - Modular content structure
   - Progress tracking via Context API
   - Verification checkpoints
   - Dynamic navigation

2. **Content Management**

   - Markdown-based content
   - Component-based layouts
   - Dynamic imports for code splitting
   - Optimized image handling

3. **Bitcoin Verification Tools**

   - Client-side cryptographic operations
   - Educational content integration
   - Interactive visualizations
   - Responsive design for all devices
   - WebAssembly compatibility for cryptographic libraries

4. **Performance Optimizations**

   - Server-side rendering
   - Image optimization
   - Code splitting strategies
   - Caching policies
   - Automatic scaling via Cloud Run

### Bitcoin Verification Tools Implementation

The platform includes three main Bitcoin verification tools, each implemented as client-side components to ensure security and privacy:

#### 1. Block Explorer

**Implementation Details:**
- **API Integration**: Uses Blockstream API to fetch block and transaction data
- **Pagination**: Implements client-side pagination for transaction lists
- **Educational Content**: Integrates visual diagrams and explanatory text
- **File Structure**:
  - `/src/app/verify/blocks/page.tsx`: Main component with UI and educational content
  - `/src/app/api/bitcoin/blocks/transactions/route.ts`: API route for fetching transaction data

**Technical Considerations:**
- Uses server-side API routes to proxy requests to Blockstream for better error handling
- Implements loading states and error boundaries for better UX
- Responsive design adapts to different screen sizes

#### 2. Digital Signature Verification

**Implementation Details:**
- **Libraries**: Uses bitcoinjs-lib and tiny-secp256k1 for cryptographic operations
- **Client Components**: Implemented as client components to handle WebAssembly dependencies
- **Educational Content**: Includes explanations of ECDSA signatures and their applications
- **File Structure**:
  - `/src/app/verify/signatures/page.tsx`: Container component with dynamic imports
  - `/src/app/verify/signatures/signature-verification-tool.tsx`: Client component with verification logic

**Technical Considerations:**
- Uses dynamic imports to handle WebAssembly compatibility
- Implements tooltips and example data for better user experience
- All cryptographic operations happen client-side for security

#### 3. Merkle Proof Verification

**Implementation Details:**
- **Visualization**: Interactive visualization of Merkle trees and verification paths
- **API Integration**: Fetches Merkle proof data from Blockstream API
- **Educational Content**: Explains how Merkle proofs enable lightweight verification
- **File Structure**:
  - `/src/app/verify/merkle/page.tsx`: Main component with verification logic and visualization

**Technical Considerations:**
- Uses recursive algorithms to build and visualize Merkle trees
- Implements responsive design for the tree visualization
- Provides step-by-step explanation of the verification process

### Development Workflow

1. **Setup Process**

   ```bash
   npm install
   npm run dev
   ```

2. **Build Process**

   ```bash
   # Creates standalone Next.js server
   npm run build
   
   # Start production server
   node server.js
   ```

3. **Testing**

   - Unit tests: `npm run test`
   - E2E tests: `npm run test:e2e`
   - Visual regression: `npm run test:visual`

## Security Considerations

1. **Server-Side Security**

   - Rate limiting
   - HTTPS enforcement
   - Server headers configuration
   - Cloud Run security features

2. **Client-Side Security**

   - XSS prevention
   - CSRF protection
   - Content Security Policy
   - Secure localStorage usage

3. **API Security**

   - Rate limiting
   - Input validation
   - Error handling
   - CORS configuration

## Deployment Strategy

1. **Build Pipeline**

   - GitHub Actions automation
   - Docker containerization
   - Asset optimization
   - Cache management

2. **Infrastructure**

   - Google Cloud Run configuration
   - CloudFlare CDN setup
   - DNS management
   - SSL/TLS configuration

## Monitoring and Maintenance

1. **Performance Monitoring**

   - Web Vitals tracking
   - Error reporting
   - User analytics
   - Load testing
   - Cloud Run metrics

2. **Update Procedures**

   - Dependency updates
   - Security patches
   - Feature deployments
   - Container revision management

## Future Development

1. **Planned Features**

   - Enhanced progress tracking
   - Interactive exercises
   - Social learning features
   - Mobile app integration

2. **Technical Debt**

   - Component refactoring
   - Test coverage improvement
   - Documentation updates
   - Performance optimization

## Architecture

### Component Structure

```
components/
├── learn/
│   ├── shared/
│   │   ├── module-layout.tsx     # Main layout for learning modules
│   │   ├── module-content.tsx    # Content wrapper with progress tracking
│   │   └── learning-sidebar.tsx  # Sidebar with module navigation
│   ├── bitcoin/
│   │   └── bitcoin-sidebar.tsx   # Bitcoin-specific sidebar
│   └── lightning/
│       └── lightning-sidebar.tsx  # Lightning-specific sidebar
```

### Page Structure

```
app/
├── learn/
│   ├── bitcoin/
│   │   ├── layout.tsx            # Bitcoin learning path layout
│   │   ├── page.tsx             # Bitcoin learning path overview
│   │   └── fundamentals/        # Bitcoin fundamental modules
│   │       ├── what-is-bitcoin/
│   │       ├── blockchain/
│   │       ├── transactions/
│   │       └── mining/
│   └── lightning/
       ├── layout.tsx            # Lightning learning path layout
       ├── page.tsx             # Lightning learning path overview
       └── fundamentals/        # Lightning fundamental modules
           ├── what-is-lightning/
           ├── payment-channels/
           └── routing/
```

## State Management

### Learning Progress Context

The `LearningProgressContext` manages:
- Module completion status
- Section progress
- Checkpoint tracking
- Progress persistence

```typescript
interface LearningProgress {
  [moduleId: string]: {
    [sectionId: string]: boolean[];
  };
}

interface LearningProgressContextType {
  progress: LearningProgress;
  updateProgress: (moduleId: string, sectionId: string, checkboxIndex: number) => void;
  calculateSectionProgress: (moduleId: string, sectionId: string) => number;
  calculateModuleProgress: (moduleId: string) => number;
  isSectionLocked: (moduleId: string) => boolean;
  resetProgress: (pathType: 'bitcoin' | 'lightning') => void;
}
```

### Module Configuration

Modules are defined in `config/learning-modules.ts`:

```typescript
interface LearningModule {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: LucideIcon;
  locked: boolean;
  sections: Section[];
}

interface Section {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  checkboxCount: number;
}
```

## UI Components

### ModuleLayout
- Handles sidebar visibility
- Provides navigation between sections
- Shows progress indicators

### ModuleContent
- Wraps module content
- Manages checkpoint tracking
- Provides consistent styling

### LearningSidebar
- Shows module hierarchy
- Indicates progress
- Handles navigation
- Shows module difficulty

## Progress Tracking System

### Storage
- Uses localStorage for persistence
- Automatically saves on changes
- Loads on initial mount

### Progress Calculation
- Section progress = completed checkpoints / total checkpoints
- Module progress = average of section progress
- Path progress = average of module progress

### Module Locking
- First module is always unlocked
- Subsequent modules require previous module completion
- Lock status is checked dynamically

## Styling

### Theme
- Uses Tailwind CSS for styling
- Supports dark/light modes
- Consistent spacing and colors
- Responsive design

### Components
- Built on shadcn/ui
- Custom components extend base styles
- Consistent use of icons from Lucide
- Responsive breakpoints
