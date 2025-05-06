# Technical Documentation

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
