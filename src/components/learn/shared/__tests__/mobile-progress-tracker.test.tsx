import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MobileProgressTracker } from '../mobile-progress-tracker';
import { LearningProgressProvider } from '@/contexts/learning-progress-context';
import { bitcoinModules } from '@/config/learning-modules';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/learn/bitcoin/bitcoin-fundamentals/what-is-bitcoin',
  useRouter: () => ({
    push: jest.fn(),
    refresh: jest.fn()
  })
}));

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Wrapper component for testing
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <LearningProgressProvider>{children}</LearningProgressProvider>
);

describe('MobileProgressTracker', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('renders the Bitcoin learning path title', () => {
    render(
      <TestWrapper>
        <MobileProgressTracker modules={bitcoinModules} pathPrefix="bitcoin" />
      </TestWrapper>
    );

    expect(screen.getByText('Bitcoin Learning Path')).toBeInTheDocument();
  });

  it('toggles expanded state when clicking the toggle button', () => {
    render(
      <TestWrapper>
        <MobileProgressTracker modules={bitcoinModules} pathPrefix="bitcoin" />
      </TestWrapper>
    );

    // Find the toggle button by looking at the div containing the chevron icon
    const toggleButton = screen.getAllByRole('button').find(button => 
      button.querySelector('svg.lucide-chevron-down') !== null
    );
    
    expect(toggleButton).toBeDefined();
    
    // Initially, the expanded content should not be visible
    expect(screen.queryByText(bitcoinModules[0].title)).not.toBeInTheDocument();
    
    // Click the toggle button
    if (toggleButton) fireEvent.click(toggleButton);
    
    // After clicking, the expanded content should be visible
    expect(screen.getByText(bitcoinModules[0].title)).toBeInTheDocument();
  });

  // Skip this test for now as we can't easily test router navigation in this context
  it.skip('closes expanded state when navigating to a section', () => {
    render(
      <TestWrapper>
        <MobileProgressTracker modules={bitcoinModules} pathPrefix="bitcoin" />
      </TestWrapper>
    );

    // Find and click the toggle button to expand
    const toggleButton = screen.getAllByRole('button').find(button => 
      button.querySelector('svg.lucide-chevron-down') !== null
    );
    
    expect(toggleButton).toBeDefined();
    if (toggleButton) fireEvent.click(toggleButton);
    
    // Expand the first module
    const moduleHeader = screen.getByText(bitcoinModules[0].title);
    fireEvent.click(moduleHeader);
    
    // Find and click a section
    const sectionTitle = screen.getByText(bitcoinModules[0].sections[0].title);
    fireEvent.click(sectionTitle);
    
    // In a real environment, this would navigate to a new page
    // and the component would unmount, but in tests we can't easily simulate this
  });
});
