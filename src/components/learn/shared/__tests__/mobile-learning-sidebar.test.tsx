import { render, screen, fireEvent } from '@testing-library/react';
import { MobileLearningSidebar } from '../mobile-learning-sidebar';
import { LearningProgressProvider } from '@/contexts/learning-progress-context';
import { bitcoinModules, lightningModules } from '@/config/learning-modules';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/learn/bitcoin/bitcoin-fundamentals/what-is-bitcoin',
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

describe('MobileLearningSidebar', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Mock document methods
    Object.defineProperty(document.body, 'style', {
      value: {
        overflow: '',
      },
      writable: true,
    });
  });

  it('renders the floating action button', () => {
    render(
      <TestWrapper>
        <MobileLearningSidebar modules={bitcoinModules} pathPrefix="bitcoin" />
      </TestWrapper>
    );

    // Check if the FAB button is rendered
    const fabButton = screen.getByRole('button', { name: /open learning path navigation/i });
    expect(fabButton).toBeInTheDocument();
  });

  it('opens the sidebar when FAB is clicked', () => {
    render(
      <TestWrapper>
        <MobileLearningSidebar modules={bitcoinModules} pathPrefix="bitcoin" />
      </TestWrapper>
    );

    // Click the FAB button
    const fabButton = screen.getByRole('button', { name: /open learning path navigation/i });
    fireEvent.click(fabButton);

    // Check if the sidebar is opened
    const sidebar = screen.getByRole('dialog', { name: /learning path navigation/i });
    expect(sidebar).toBeInTheDocument();
  });

  it('displays all modules and their sections', () => {
    render(
      <TestWrapper>
        <MobileLearningSidebar modules={bitcoinModules} pathPrefix="bitcoin" />
      </TestWrapper>
    );

    // Open the sidebar
    const fabButton = screen.getByRole('button', { name: /open learning path navigation/i });
    fireEvent.click(fabButton);

    // Check if all modules are displayed
    bitcoinModules.forEach((module) => {
      const moduleTitle = screen.getByText(module.title);
      expect(moduleTitle).toBeInTheDocument();
      
      // Click on the module to expand it
      fireEvent.click(moduleTitle);
      
      // Check if all sections of the module are displayed
      module.sections.forEach((section) => {
        const sectionTitle = screen.getByText(section.title);
        expect(sectionTitle).toBeInTheDocument();
      });
    });
  });

  it('handles section navigation correctly', () => {
    const mockOnModuleSelect = jest.fn();
    
    render(
      <TestWrapper>
        <MobileLearningSidebar 
          modules={bitcoinModules} 
          pathPrefix="bitcoin" 
          onModuleSelect={mockOnModuleSelect}
        />
      </TestWrapper>
    );

    // Open the sidebar
    const fabButton = screen.getByRole('button', { name: /open learning path navigation/i });
    fireEvent.click(fabButton);
    
    // Expand the first module
    const moduleTitle = screen.getByText(bitcoinModules[0].title);
    fireEvent.click(moduleTitle);
    
    // Click on the first section
    const sectionTitle = screen.getByText(bitcoinModules[0].sections[0].title);
    fireEvent.click(sectionTitle);
    
    // Check if onModuleSelect was called with the correct parameters
    expect(mockOnModuleSelect).toHaveBeenCalledWith(
      bitcoinModules[0].id,
      bitcoinModules[0].sections[0].id
    );
  });
});
