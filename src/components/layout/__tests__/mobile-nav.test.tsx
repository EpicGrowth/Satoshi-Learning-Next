import { render, screen, fireEvent } from '@testing-library/react';
import { MobileNav } from '../mobile-nav.improved';
import { LearningProgressProvider } from '@/contexts/learning-progress-context';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/learn/bitcoin/bitcoin-fundamentals/what-is-bitcoin',
}));

// Mock learning modules
jest.mock('@/config/learning-modules', () => ({
  bitcoinModules: [
    {
      id: 'bitcoin-fundamentals',
      title: 'Bitcoin Fundamentals',
      difficulty: 'beginner',
      sections: [
        { id: 'what-is-bitcoin', title: 'What is Bitcoin', checkboxCount: 3 },
        { id: 'the-blockchain', title: 'The Blockchain', checkboxCount: 4 },
      ],
    },
  ],
  lightningModules: [
    {
      id: 'fundamentals',
      title: 'Lightning Fundamentals',
      difficulty: 'beginner',
      sections: [
        { id: 'what-is-lightning', title: 'What is Lightning', checkboxCount: 3 },
        { id: 'channels', title: 'Lightning Channels', checkboxCount: 4 },
      ],
    },
  ],
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
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  it('opens the navigation menu when button is clicked', () => {
    render(
      <TestWrapper>
        <MobileNav />
      </TestWrapper>
    );

    // Click the menu button
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(menuButton);

    // Check if the navigation menu is opened
    const satoshiStationText = screen.getByText('Satoshi Station');
    expect(satoshiStationText).toBeInTheDocument();
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
    const bitcoinLearning = screen.getByText('Bitcoin Learning');
    const lightningLearning = screen.getByText('Lightning Learning');
    
    expect(bitcoinLearning).toBeInTheDocument();
    expect(lightningLearning).toBeInTheDocument();
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
    const bitcoinLearning = screen.getByText('Bitcoin Learning');
    fireEvent.click(bitcoinLearning);

    // Check if Bitcoin Fundamentals is displayed
    const bitcoinFundamentals = screen.getByText('Bitcoin Fundamentals');
    expect(bitcoinFundamentals).toBeInTheDocument();
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
    const satoshiStationText = screen.queryByText('Satoshi Station');
    expect(satoshiStationText).not.toBeInTheDocument();
  });
});
