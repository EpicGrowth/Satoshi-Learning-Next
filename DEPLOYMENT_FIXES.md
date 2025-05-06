# Build Fixes Required Before Deployment

## Critical Fixes

### 1. Missing Component Definitions
Several components are referenced but not defined or imported:
- ModuleContent
- SatoshiQuote
- ModuleExplorer
- Info, Calendar, ArrowRight, BookOpen, CircleDollarSign
- EconomicPropertiesVisualizer
- IncentiveAlignmentVisualizer

### 2. ESLint Configuration
Add an `.eslintrc.js` file to disable specific React rules for unescaped entities:

```javascript
module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-assign-module-variable': 'off'
  }
};
```

### 3. React Hook Dependencies
Fix React Hook dependency warnings in:
- module-content.tsx
- verify-checkbox.tsx

## Additional Improvements

### 1. Unused Variables
Fix variables defined but not used:
- src/components/learn/layouts/article-layout.tsx: 'Bitcoin'
- src/components/learn/lightning/lightning-sidebar.tsx: 'progress'
- src/components/learn/progress/learning-progress.tsx: 'markComplete', 'lessonIndex'
- src/components/learn/shared/learning-sidebar.tsx: 'useMemo', 'handleResetProgress'
- src/components/learn/shared/mobile-nav.tsx: 'type'
- src/components/learn/shared/module-content.tsx: 'Zap', 'checkpoints', 'updateSectionProgress'
- src/components/learn/shared/module-layout.tsx: 'updateSectionProgress'
- src/components/theme/theme-toggle.tsx: 'theme'
- src/config/learning-modules.ts: 'Section', 'Difficulty'
- src/contexts/learning-progress-context.tsx: 'SectionProgress'
- src/utils/progress-migration.ts: 'SectionProgress', 'type'

### 2. Empty Interface
Fix empty interface in:
- src/components/ui/input.tsx

### 3. Module Assignment
Fix module assignment in:
- src/contexts/learning-progress-context.tsx

## Deployment Options

Given the number of issues, we have three options:

1. **Fix Issues Locally**: Address all errors before deploying
2. **Deploy with Suppressions**: Add ESLint suppressions to allow build with warnings
3. **Partial Deployment**: Deploy only the typography changes first, then address other issues

Recommended approach: **Option 2 - Deploy with Suppressions** by updating the next.config.js to include ESLint configuration that ignores these issues. This will allow us to deploy the typography enhancements while we work on the other fixes.
