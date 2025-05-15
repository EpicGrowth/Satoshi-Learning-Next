# SatoshiStationNext Technical Documentation

## Architecture Overview

SatoshiStationNext is built on modern web technologies with a focus on performance, maintainability, and user experience:

- **Framework**: Next.js with App Router
- **UI Layer**: React with TypeScript
- **Styling**: Tailwind CSS with custom theming
- **State Management**: React Context API
- **Data Persistence**: LocalStorage for progress tracking
- **Deployment**: Google Cloud Storage with CloudFlare CDN

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

3. **Performance Optimizations**
   - Static page generation
   - Image optimization pipeline
   - Code splitting strategies
   - Caching policies

### Development Workflow

1. **Setup Process**
   ```bash
   npm install
   npm run dev
   ```

2. **Build Process**
   ```bash
   npm run build
   npm run export
   ```

3. **Testing**
   - Unit tests: `npm run test`
   - E2E tests: `npm run test:e2e`
   - Visual regression: `npm run test:visual`

## Security Considerations

1. **Client-Side Security**
   - XSS prevention
   - CSRF protection
   - Content Security Policy
   - Secure localStorage usage

2. **API Security**
   - Rate limiting
   - Input validation
   - Error handling
   - CORS configuration

## Deployment Strategy

1. **Build Pipeline**
   - GitHub Actions automation
   - Environment-specific builds
   - Asset optimization
   - Cache management

2. **Infrastructure**
   - Google Cloud Storage configuration
   - CloudFlare CDN setup
   - DNS management
   - SSL/TLS configuration

## Monitoring and Maintenance

1. **Performance Monitoring**
   - Web Vitals tracking
   - Error reporting
   - User analytics
   - Load testing

2. **Update Procedures**
   - Dependency updates
   - Security patches
   - Feature deployments
   - Rollback procedures

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
