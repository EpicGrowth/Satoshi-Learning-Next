# Satoshi Station Component Library

## Overview

This document catalogs all reusable components in the Satoshi Station codebase, providing developers with a comprehensive reference for building consistent, accessible, and maintainable user interfaces.

## Design System Principles

### Core Values
- **Technical Precision**: Components reflect our verification-first approach
- **Functional Minimalism**: Every element serves a clear purpose
- **Sovereignty Empowerment**: UI supports user independence and control
- **Progressive Disclosure**: Information layers match user knowledge levels

### Visual Language
- **Colors**: Bitcoin orange (#e44c41), Lightning purple (#8E44AD), Liquid cyan (#00D4AA)
- **Typography**: System font stack for performance and consistency
- **Spacing**: 8px base unit with consistent scale (4, 8, 12, 16, 24, 32, 48, 64)
- **Borders**: Subtle 1px borders with proper contrast ratios

## Component Categories

### 🎯 **Learning Path Components**

#### ModuleLayout
**Location**: `src/components/learn/shared/module-layout.tsx`
**Purpose**: Main layout wrapper for all learning modules

```tsx
interface ModuleLayoutProps {
  children: React.ReactNode;
  currentPath: 'bitcoin' | 'lightning' | 'liquid';
  showSidebar?: boolean;
  className?: string;
}
```

**Features**:
- Responsive sidebar toggle
- Path-specific theming
- Mobile-first design
- Keyboard navigation support

**Usage**:
```tsx
<ModuleLayout currentPath="bitcoin" showSidebar={true}>
  <ModuleContent>
    {/* Learning content */}
  </ModuleContent>
</ModuleLayout>
```

#### ModuleContent
**Location**: `src/components/learn/shared/module-content.tsx`
**Purpose**: Content wrapper with progress tracking integration

```tsx
interface ModuleContentProps {
  moduleId: string;
  sectionId: string;
  children: React.ReactNode;
  metadata?: ModuleMetadata;
}
```

**Features**:
- Automatic progress tracking
- SEO metadata integration
- Print-friendly layouts
- Content accessibility enhancements

#### VerifyCheckbox
**Location**: `src/components/learn/shared/verify-checkbox.tsx`
**Purpose**: Interactive verification checkpoint

```tsx
interface VerifyCheckboxProps {
  moduleId: string;
  sectionId: string;
  verificationId: string;
  label?: string;
  disabled?: boolean;
  onVerify?: (verified: boolean) => void;
}
```

**Features**:
- Persistent state via localStorage
- Custom styling matching brand
- Accessible keyboard interactions
- Animation feedback
- Verification tracking

**Design Specs**:
- Size: 24x24px
- Background: #4CAF50 when checked
- Border: 2px solid #ddd when unchecked
- Checkmark: White Unicode ✓
- Hover state: Subtle elevation

#### LearningSidebar
**Location**: `src/components/learn/shared/learning-sidebar.tsx`
**Purpose**: Navigation and progress tracking for learning paths

```tsx
interface LearningSidebarProps {
  modules: LearningModule[];
  currentModuleId?: string;
  currentSectionId?: string;
  pathPrefix: string;
  onNavigate?: (moduleId: string, sectionId: string) => void;
}
```

**Features**:
- Collapsible module sections
- Progress indicators
- Path-specific theming
- Mobile responsive
- Keyboard navigation

### 🎨 **UI Foundation Components**

#### Button
**Location**: `src/components/ui/button.tsx`
**Purpose**: Primary interactive element

```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'verification' | 'danger';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
```

**Variants**:
- **Primary**: Main actions (#e44c41 background)
- **Secondary**: Alternative actions (transparent with border)
- **Tertiary**: Subtle actions (text only)
- **Verification**: Verification-specific actions (#4CAF50)
- **Danger**: Destructive actions (#ef4444)

**States**:
- Default
- Hover (10% darker)
- Active (pressed state)
- Disabled (50% opacity)
- Loading (spinner animation)

#### Card
**Location**: `src/components/ui/card.tsx`
**Purpose**: Content container with consistent styling

```tsx
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

**Features**:
- Consistent border radius (8px)
- Subtle shadows for elevation
- Dark mode compatible
- Responsive padding

#### Badge
**Location**: `src/components/ui/badge.tsx`
**Purpose**: Status indicators and labels

```tsx
interface BadgeProps {
  children: React.ReactNode;
  variant: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}
```

**Variants**:
- **Default**: Neutral gray
- **Success**: Green for completion (#4CAF50)
- **Warning**: Amber for attention (#f59e0b)
- **Error**: Red for issues (#ef4444)
- **Info**: Blue for information (#3b82f6)

### 📱 **Mobile Components**

#### MobileProgressTracker
**Location**: `src/components/learn/mobile/mobile-progress-tracker.tsx`
**Purpose**: Fixed mobile navigation with progress display

```tsx
interface MobileProgressTrackerProps {
  currentPath: 'bitcoin' | 'lightning' | 'liquid';
  totalProgress: number;
  modules: LearningModule[];
  currentModule?: string;
  onNavigate: (moduleId: string, sectionId: string) => void;
}
```

**Features**:
- Fixed positioning at top
- Collapsible progress view
- Touch-friendly interactions
- Progress visualization

#### MobileLearningSidebar
**Location**: `src/components/learn/mobile/mobile-learning-sidebar.tsx`
**Purpose**: Slide-out navigation panel for mobile

```tsx
interface MobileLearningSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  modules: LearningModule[];
  currentPath: 'bitcoin' | 'lightning' | 'liquid';
  onNavigate: (moduleId: string, sectionId: string) => void;
}
```

**Features**:
- Slide animation from right
- Backdrop overlay
- Swipe to close gesture
- Difficulty filtering
- Reset progress option

### 🔧 **Verification Tools Components**

#### BlockExplorer
**Location**: `src/components/verify/block-explorer.tsx`
**Purpose**: Interactive Bitcoin block exploration

```tsx
interface BlockExplorerProps {
  initialBlock?: string | number;
  showEducationalContent?: boolean;
  apiEndpoint?: string;
}
```

**Features**:
- Block search by height or hash
- Transaction list with pagination
- Educational annotations
- Responsive design
- Error handling

#### SignatureVerifier
**Location**: `src/components/verify/signature-verifier.tsx`
**Purpose**: Bitcoin message signature verification

```tsx
interface SignatureVerifierProps {
  showExampleData?: boolean;
  onVerificationComplete?: (result: VerificationResult) => void;
}
```

**Features**:
- Input validation
- Real-time verification
- Example data loading
- Educational tooltips
- Copy-to-clipboard functionality

#### MerkleProofVisualizer
**Location**: `src/components/verify/merkle-proof-visualizer.tsx`
**Purpose**: Visual Merkle tree and proof verification

```tsx
interface MerkleProofVisualizerProps {
  transactionId?: string;
  blockHash?: string;
  showVisualization?: boolean;
}
```

**Features**:
- Interactive tree visualization
- Step-by-step proof validation
- Educational explanations
- Responsive SVG graphics
- Animation sequences

### 🎭 **Animation Components**

#### HoneycombBackground
**Location**: `src/components/animations/honeycomb-background.tsx`
**Purpose**: Animated background pattern

```tsx
interface HoneycombBackgroundProps {
  density?: 'low' | 'medium' | 'high';
  color?: string;
  opacity?: number;
  animate?: boolean;
}
```

**Features**:
- SVG-based hexagon pattern
- Configurable density and colors
- CSS animation support
- Performance optimized
- Dark mode adaptive

#### LoadingSpinner
**Location**: `src/components/ui/loading-spinner.tsx`
**Purpose**: Loading state indicator

```tsx
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  message?: string;
}
```

**Features**:
- Smooth rotation animation
- Size variants
- Accessible labels
- Custom colors
- Optional text message

### 🎯 **Layout Components**

#### Header
**Location**: `src/components/layout/header.tsx`
**Purpose**: Main site navigation

```tsx
interface HeaderProps {
  currentPath?: string;
  user?: User;
  showSearch?: boolean;
  onThemeToggle?: () => void;
}
```

**Features**:
- Responsive navigation
- Dark mode toggle
- Search integration
- User authentication state
- Mobile hamburger menu

#### Footer
**Location**: `src/components/layout/footer.tsx`
**Purpose**: Site footer with links and information

```tsx
interface FooterProps {
  showSubscription?: boolean;
  compactMode?: boolean;
}
```

**Features**:
- Responsive column layout
- Social media links
- Newsletter subscription
- Copyright information
- Legal links

## Component Patterns

### 🎨 **Styling Patterns**

#### CSS Classes Convention
```css
/* Component naming: [component]-[element]-[modifier] */
.learning-sidebar-module-completed
.verify-checkbox-container-disabled
.mobile-tracker-progress-high

/* State classes */
.is-active
.is-loading
.is-disabled
.is-expanded
```

#### Tailwind Utility Patterns
```tsx
// Consistent spacing
"space-y-4 p-6 m-2"

// Interactive states
"hover:bg-gray-50 focus:ring-2 focus:ring-primary"

// Responsive design
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Dark mode
"bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
```

### 🔄 **State Management Patterns**

#### Context Usage
```tsx
// Learning Progress Context
const { isVerified, setVerified, getModuleProgress } = useLearningProgress();

// Theme Context
const { theme, setTheme } = useTheme();

// Mobile Context
const { isMobile, sidebarOpen, setSidebarOpen } = useMobile();
```

#### Local State Patterns
```tsx
// Loading states
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const [data, setData] = useState<T | null>(null);

// Form states
const [formData, setFormData] = useState(initialState);
const [validationErrors, setValidationErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
```

### ♿ **Accessibility Patterns**

#### ARIA Labels
```tsx
// Interactive elements
<button aria-label="Toggle sidebar" aria-expanded={isOpen}>
<input aria-describedby="email-error" aria-invalid={hasError}>
<div role="tabpanel" aria-labelledby="tab-1">

// Live regions
<div aria-live="polite" aria-atomic="true">
<div aria-live="assertive" role="alert">
```

#### Keyboard Navigation
```tsx
// Focus management
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    onClick();
  }
  if (e.key === 'Escape') {
    onClose();
  }
};

// Tab order
tabIndex={isDisabled ? -1 : 0}
```

## Development Guidelines

### 🛠️ **Component Creation**

#### File Structure
```
src/components/
├── [category]/
│   ├── [component-name]/
│   │   ├── index.tsx              # Main component
│   │   ├── [component-name].tsx   # Implementation
│   │   ├── types.ts               # TypeScript types
│   │   ├── hooks.ts               # Component-specific hooks
│   │   └── utils.ts               # Utility functions
│   └── shared/                    # Shared utilities
```

#### Component Template
```tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'alternate';
  size?: 'sm' | 'md' | 'lg';
}

export const ComponentName = React.forwardRef<
  HTMLDivElement,
  ComponentNameProps
>(({ children, className, variant = 'default', size = 'md', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        // Base styles
        'component-base-classes',
        // Variants
        {
          'variant-default-classes': variant === 'default',
          'variant-alternate-classes': variant === 'alternate',
        },
        // Sizes
        {
          'size-sm-classes': size === 'sm',
          'size-md-classes': size === 'md',
          'size-lg-classes': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

ComponentName.displayName = 'ComponentName';
```

### 🧪 **Testing Patterns**

#### Component Tests
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentName } from './component-name';

describe('ComponentName', () => {
  it('renders children correctly', () => {
    render(<ComponentName>Test content</ComponentName>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    const { container } = render(
      <ComponentName variant="alternate">Content</ComponentName>
    );
    expect(container.firstChild).toHaveClass('variant-alternate-classes');
  });

  it('handles interactions correctly', () => {
    const handleClick = jest.fn();
    render(
      <ComponentName onClick={handleClick}>Clickable</ComponentName>
    );
    fireEvent.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is accessible', async () => {
    render(<ComponentName>Accessible content</ComponentName>);
    // Test keyboard navigation
    fireEvent.keyDown(screen.getByText('Accessible content'), {
      key: 'Enter',
    });
    // Test screen reader compatibility
    expect(screen.getByText('Accessible content')).toHaveAttribute(
      'aria-label'
    );
  });
});
```

### 📏 **Performance Guidelines**

#### Optimization Patterns
```tsx
// Memo for expensive computations
const expensiveValue = useMemo(() => {
  return complexCalculation(data);
}, [data]);

// Callback memoization
const handleClick = useCallback((id: string) => {
  onItemClick(id);
}, [onItemClick]);

// Component memoization
const MemoizedComponent = React.memo(({ items, onSelect }) => {
  return (
    <div>
      {items.map(item => (
        <ItemComponent key={item.id} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
});

// Lazy loading for large components
const HeavyComponent = lazy(() => import('./heavy-component'));

// Virtual scrolling for large lists
const VirtualizedList = ({ items }) => {
  return (
    <FixedSizeList
      height={400}
      itemCount={items.length}
      itemSize={50}
      itemData={items}
    >
      {ItemRenderer}
    </FixedSizeList>
  );
};
```

#### Bundle Size Optimization
```tsx
// Tree-shakeable imports
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Avoid barrel imports for large libraries
import debounce from 'lodash/debounce'; // ✅ Good
import { debounce } from 'lodash'; // ❌ Imports entire library

// Dynamic imports for code splitting
const AdminPanel = dynamic(() => import('./admin-panel'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});
```

## Component Documentation Standards

### 📝 **Documentation Requirements**

#### Component README Template
```markdown
# ComponentName

Brief description of the component's purpose and use cases.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Component content |
| variant | 'default' \| 'alternate' | 'default' | Visual variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Component size |
| className | string | - | Additional CSS classes |

## Examples

### Basic Usage
```tsx
<ComponentName>
  Basic content
</ComponentName>
```

### Advanced Usage
```tsx
<ComponentName
  variant="alternate"
  size="lg"
  className="custom-class"
  onAction={handleAction}
>
  Advanced content with props
</ComponentName>
```

## Accessibility

- Supports keyboard navigation
- ARIA labels for screen readers
- High contrast mode compatible
- Focus management included

## Related Components

- [RelatedComponent1](../related-component1/README.md)
- [RelatedComponent2](../related-component2/README.md)
```

#### Storybook Stories (Future Enhancement)
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './component-name';

const meta: Meta<typeof ComponentName> = {
  title: 'UI/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'alternate'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default component',
  },
};

export const Alternate: Story = {
  args: {
    variant: 'alternate',
    children: 'Alternate variant',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <ComponentName size="sm">Small size</ComponentName>
      <ComponentName size="md">Medium size</ComponentName>
      <ComponentName size="lg">Large size</ComponentName>
    </div>
  ),
};
```

## Future Enhancements

### 🚀 **Planned Components**

#### Educational Components
- **InteractiveCodeEditor**: In-browser code execution for tutorials
- **BitcoinSimulator**: Visual blockchain demonstration
- **NetworkVisualizer**: Real-time Lightning Network topology
- **AssetExplorer**: Liquid asset browser and creator

#### Developer Tools
- **APIExplorer**: Interactive API documentation
- **DebugPanel**: Development debugging interface
- **PerformanceMonitor**: Real-time performance metrics
- **AccessibilityChecker**: Automated a11y testing

#### Advanced UI
- **DataVisualization**: Charts and graphs for Bitcoin data
- **VirtualKeyboard**: Secure input for sensitive data
- **QRCodeGenerator**: Bitcoin address and transaction QR codes
- **ThemeCustomizer**: User interface personalization

### 🔧 **Development Tools**

#### Component CLI (Planned)
```bash
# Generate new component
npm run component:create [name] [category]

# Generate component tests
npm run component:test [component-name]

# Generate component documentation
npm run component:docs [component-name]

# Validate component compliance
npm run component:validate [component-name]
```

#### Design Tokens Integration
```tsx
// Future design token system
const tokens = {
  color: {
    primary: { bitcoin: '#e44c41', lightning: '#8E44AD', liquid: '#00D4AA' },
    semantic: { success: '#4CAF50', warning: '#f59e0b', error: '#ef4444' }
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  typography: { heading: 'font-semibold', body: 'font-normal' },
  animation: { fast: '150ms', normal: '300ms', slow: '500ms' }
};
```

## Maintenance Schedule

### 🔄 **Regular Updates**
- **Weekly**: Component accessibility audits
- **Monthly**: Performance benchmarking
- **Quarterly**: Design system alignment review
- **Annually**: Major version updates and refactoring

### 📊 **Quality Metrics**
- Component test coverage: >90%
- Accessibility compliance: WCAG 2.1 AA
- Performance budget: <50kb per component
- Bundle size: <10% growth per quarter
- Documentation coverage: 100% of public APIs

### 🐛 **Issue Tracking**
- Component bugs: High priority fixes
- Accessibility issues: Immediate attention
- Performance regressions: Next sprint
- Documentation gaps: Weekly batch updates

---

*This component library documentation is maintained by the development team and updated with each release. For questions or contributions, see the [Development Guide](./DEVELOPMENT.md).*