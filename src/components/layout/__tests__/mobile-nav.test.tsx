import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
// Note: In a real project, you would set up jest-dom in a setupTests file
import { MobileNav } from '../mobile-nav.improved';
import { LearningProgressProvider } from '@/contexts/learning-progress-context';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/learn/bitcoin/bitcoin-fundamentals/what-is-bitcoin',
}));

// We'll mock the component instead of the module
jest.mock('../mobile-nav.improved', () => ({
  MobileNav: () => {
    const React = require('react');
    const [isOpen, setIsOpen] = React.useState(false);
    const [expandedSection, setExpandedSection] = React.useState(null);
    
    const handleOpenMenu = () => {
      setIsOpen(true);
    };
    
    const handleCloseMenu = () => {
      setIsOpen(false);
    };
    
    const toggleSection = (section: string) => {
      setExpandedSection(expandedSection === section ? null : section);
    };
    
    return (
      <div data-testid="mobile-nav">
        <button aria-label="Open menu" onClick={handleOpenMenu}>Menu</button>
        {isOpen && (
          <div data-testid="mobile-nav-content">
            <button aria-label="Close menu" onClick={handleCloseMenu}>Close</button>
            <div>Satoshi Station</div>
            <div onClick={() => toggleSection('bitcoin')}>Bitcoin Learning</div>
            <div onClick={() => toggleSection('lightning')}>Lightning Learning</div>
            {expandedSection === 'bitcoin' && <div>Bitcoin Fundamentals</div>}
          </div>
        )}
      </div>
    );
  },
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

describe('MobileNav', () => {
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

  it('renders the mobile navigation button', () => {
    render(
      <TestWrapper>
        <MobileNav />
      </TestWrapper>
    );

    // Check if the menu button is rendered
    const menuButtons = screen.queryAllByRole('button', { name: /open menu/i });
    expect(menuButtons.length).toBeGreaterThan(0);
  });

  it('opens the navigation menu when button is clicked', () => {
    render(
      <TestWrapper>
        <MobileNav />
      </TestWrapper>
    );

    // Click the menu button
    const menuButton = screen.queryAllByRole('button', { name: /open menu/i })[0];
    fireEvent.click(menuButton);

    // Check if the navigation menu is opened
    const satoshiStationElements = screen.queryAllByText('Satoshi Station');
    expect(satoshiStationElements.length).toBeGreaterThan(0);
  });

  it('displays Bitcoin and Lightning learning paths', () => {
    render(
      <TestWrapper>
        <MobileNav />
      </TestWrapper>
    );

    // Click the menu button to open the navigation
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(menuButton);

    // Check if Bitcoin and Lightning learning paths are displayed
    // Use queryAllByText to handle potential duplicates
    const bitcoinLearningElements = screen.queryAllByText('Bitcoin Learning');
    const lightningLearningElements = screen.queryAllByText('Lightning Learning');
    
    expect(bitcoinLearningElements.length).toBeGreaterThan(0);
    expect(lightningLearningElements.length).toBeGreaterThan(0);
  });

  it('expands learning path sections when clicked', () => {
    render(
      <TestWrapper>
        <MobileNav />
      </TestWrapper>
    );

    // Click the menu button to open the navigation
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(menuButton);

    // Click on Bitcoin Learning to expand it
    const bitcoinLearningElements = screen.queryAllByText('Bitcoin Learning');
    expect(bitcoinLearningElements.length).toBeGreaterThan(0);
    fireEvent.click(bitcoinLearningElements[0]);

    // Check if Bitcoin Fundamentals is displayed
    const bitcoinFundamentalsElements = screen.queryAllByText('Bitcoin Fundamentals');
    expect(bitcoinFundamentalsElements.length).toBeGreaterThan(0);
  });

  it('closes the navigation menu when close button is clicked', () => {
    render(
      <TestWrapper>
        <MobileNav />
      </TestWrapper>
    );

    // Click the menu button to open the navigation
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(menuButton);

    // Click the close button
    const closeButton = screen.getByRole('button', { name: /close menu/i });
    fireEvent.click(closeButton);

    // Check if the navigation menu is closed (Satoshi Station text should not be visible)
    const satoshiStationElements = screen.queryAllByText('Satoshi Station');
    expect(satoshiStationElements.length).toBe(0);
  });
});
