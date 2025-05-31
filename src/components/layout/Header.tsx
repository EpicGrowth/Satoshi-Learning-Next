'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Bitcoin, Zap, Shield, Menu, Search, Github, Lock, ArrowLeft } from 'lucide-react';
import Fuse, { type IFuseOptions } from 'fuse.js';
import type { SearchIndexItem } from '@/types';
import SearchResultsPortal from './SearchResultsPortal';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { MobileNav } from './mobile-nav';
import { Input } from '@/components/ui/input';
import type { FC } from 'react';
import { useLearningProgress } from '@/contexts/learning-progress-context';

const navigationItems = [
	{ name: 'Bitcoin', href: '/learn/bitcoin', icon: Bitcoin },
	{ name: 'Lightning', href: '/learn/lightning', icon: Zap },
	{ name: 'Resources', href: '/resources', icon: Shield },
	{ name: 'Explorer', href: '/contact-explorer', icon: Search },
];

export const Header: FC = () => {
	const router = useRouter();
	const { progress, isSectionLocked: isContextSectionLocked } = useLearningProgress(); // Renamed to avoid conflict if a local var was also named isSectionLocked

	const [searchQuery, setSearchQuery] = React.useState('');
	const [searchResults, setSearchResults] = React.useState<SearchIndexItem[]>([]);
	const [searchIndexData, setSearchIndexData] = React.useState<SearchIndexItem[]>([]);
	const [fuseInstance, setFuseInstance] = React.useState<Fuse<SearchIndexItem> | null>(null);
	const [isSearchFocused, setIsSearchFocused] = React.useState(false);
	const searchInputRef = React.useRef<HTMLInputElement>(null);
  const searchResultsRef = React.useRef<HTMLDivElement>(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mobileSearchVisible, setMobileSearchVisible] = React.useState(false);
	const [isScrolled, setIsScrolled] = React.useState(false);
	const pathname = usePathname();

	React.useEffect(() => {
		// Fetch search index and initialize Fuse.js
		fetch('/search-index.json')
			.then((res) => res.json())
			.then((data: SearchIndexItem[]) => {
				console.log('Fetched search index data:', data);
				setSearchIndexData(data);
				const fuseOptions: IFuseOptions<SearchIndexItem> = {
					keys: [
						{ name: 'title', weight: 0.7 },
						{ name: 'description', weight: 0.4 },
						{ name: 'fullText', weight: 0.2 },
						{ name: 'moduleId', weight: 0.1 }, // For searching like 'btc1'
						{ name: 'sectionId', weight: 0.1 } // For searching like 'btc1-1'
					],
					includeScore: true,
					threshold: 0.4, // Adjust for desired fuzziness
					minMatchCharLength: 2,
				};
				const newFuseInstance = new Fuse(data, fuseOptions);
				setFuseInstance(newFuseInstance);
				console.log('Fuse.js instance initialized:', newFuseInstance);
			})
			.catch(error => console.error("Failed to load search index:", error));
	}, []);

	React.useEffect(() => {
		// Handle scroll for header style
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	React.useEffect(() => {
    // Close search results when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node) &&
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const query = event.target.value;
		setSearchQuery(query);
		console.log(`handleSearchChange: query='${query}', fuseInstance exists?`, !!fuseInstance);
		if (fuseInstance && query.trim().length > 1) {
			const rawFuseResults = fuseInstance.search(query);
			console.log('Raw Fuse results:', rawFuseResults);
			// Sort by score (lower is better), then by moduleOrder, then sectionOrder
      const sortedResults = rawFuseResults
        .sort((a, b) => {
          if (a.score !== undefined && b.score !== undefined && a.score !== b.score) {
            return a.score - b.score;
          }
          if (a.item.moduleOrder !== b.item.moduleOrder) {
            return a.item.moduleOrder - b.item.moduleOrder;
          }
          return a.item.sectionOrder - b.item.sectionOrder;
        })
        .map((result) => result.item);
      setSearchResults(sortedResults.slice(0, 10)); // Limit to top 10 results
      console.log('Updated searchResults state:', sortedResults.slice(0, 10));
		} else {
			setSearchResults([]);
			console.log('Cleared searchResults state');
		}
	};

	const handleResultClick = (item: SearchIndexItem) => {
		const unlocked = !isContextSectionLocked(item.topic, item.moduleId, item.sectionId);
		if (unlocked) {
			router.push(item.path);
		} else {
      // Navigate to the main page of the learning path if locked
      const basePath = item.topic === 'bitcoin' ? '/learn/bitcoin' : '/learn/lightning';
      router.push(basePath);
    }
		setIsSearchFocused(false);
		setSearchQuery('');
		setSearchResults([]);
	};

	return (
		<header
			className={`sticky top-0 z-50 w-full transition-all duration-200 ${
				isScrolled
					? 'backdrop-blur-md bg-background/95 border-b border-border/40 supports-[backdrop-filter]:bg-background/90 shadow-md'
					: ''
			}`}
			role="banner"
		>
			<div className="container px-4 mx-auto max-w-7xl"> {/* Removed overflow-hidden to allow portal to escape if absolutely positioned relative to viewport/body */}
{/* Conditional rendering for mobile search view vs normal view */}
        {mobileSearchVisible ? (
          <div className="flex h-20 items-center w-full md:hidden"> {/* Only show this layout on mobile when search is active */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileSearchVisible(false)}
              aria-label="Close search"
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="relative flex-grow" ref={searchInputRef}> {/* Assign ref here for portal positioning */}
              <Input
                type="search"
                placeholder="Search content..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-border/50 bg-background/60 backdrop-blur-sm 
                           text-sm focus:border-bitcoin-orange/40 focus:ring-bitcoin-orange/30 transition-all duration-200"
                aria-label="Search content"
                value={searchQuery} // Use existing state
                onChange={handleSearchChange} // Use existing handler
                onFocus={() => setIsSearchFocused(true)} // Use existing handler
                autoFocus
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          </div>
        ) : (
          // Normal Header View
          <div className="flex h-20 items-center justify-between">
					<Link
						href="/"
						className="flex items-center space-x-1 group relative overflow-hidden py-2 flex-shrink-0"
						aria-label="Satoshi Station Home"
					>
						<div className="absolute -inset-1 bg-bitcoin-orange/15 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						<div className="relative flex items-center">
							<div className="relative z-10 mr-1.5 transition-all duration-300 group-hover:translate-y-[-2px]">
								<div className="relative rounded-full p-1.5 bg-bitcoin-orange/15">
									<Bitcoin
										className="h-5 w-5 text-bitcoin-orange"
										aria-hidden="true"
									/>
								</div>
							</div>
							<div className="relative z-10">
								<span
								className="text-xl md:text-2xl whitespace-nowrap text-bitcoin-orange font-brand tracking-tight"
								style={{ fontWeight: 700 }}
							>
								Satoshi Station
							</span>
							</div>
						</div>
					</Link>

					<nav className="flex items-center gap-2 sm:gap-4 overflow-x-auto">
						{/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-4 xl:gap-6">
							{navigationItems.map((item) => {
								const basePath = '/learn/' + pathname.split('/')[2];
								const isActive =
									item.href.includes(basePath) ||
									pathname === item.href;

								return (
									<Link
										key={item.name}
										href={item.href}
										className={`text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap ${
											isActive
												? 'text-bitcoin-orange font-semibold'
												: 'text-muted-foreground hover:text-foreground'
										}`}
										aria-current={isActive ? 'page' : undefined}
									>
										<span className="flex items-center">
											<item.icon
												className="h-4 w-4 mr-1.5"
												aria-hidden="true"
											/>
											{item.name}
										</span>
									</Link>
								);
							})}
						</div>

            {/* Desktop Search Input */}
            <div className="relative hidden md:flex items-center min-w-[180px] xl:min-w-[220px] overflow-hidden" ref={searchInputRef}>
							<Input
								type="search"
								placeholder="Search..."
								className="w-full pl-10 pr-4 py-2 rounded-md border border-border/50 bg-background/60 backdrop-blur-sm 
                         text-sm focus:border-bitcoin-orange/40 focus:ring-bitcoin-orange/30 transition-all duration-200"
								aria-label="Search content"
								value={searchQuery}
								onChange={handleSearchChange}
								onFocus={() => setIsSearchFocused(true)}
							/>
							<SearchResultsPortal
								results={searchResults}
								searchQuery={searchQuery}
								inputRef={searchInputRef} // This ref is on the div wrapping the input
								onResultClick={handleResultClick}
								isSectionLocked={isContextSectionLocked}
								show={isSearchFocused && searchQuery.length > 1 && searchResults.length > 0}
							/>
							<Search
								className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
								aria-hidden="true"
							/>
						</div>

						<Button
							variant="default"
							size="sm"
							className="bg-bitcoin-orange text-white hover:bg-bitcoin-orange/90 hidden md:inline-flex
                       transition-all duration-200 hover:scale-105 shadow-md hover:shadow-bitcoin-orange/20 whitespace-nowrap"
							asChild
						>
							<Link href="/learn/bitcoin">Start Learning</Link>
						</Button>

            {/* Mobile Controls: Search Icon and Theme Toggle */}
            <div className="flex items-center md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open search"
                onClick={() => setMobileSearchVisible(true)}
                className="mr-1"
              >
                <Search className="h-5 w-5" />
              </Button>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation Menu (Hamburger) */}
						<div className="md:hidden">
							<MobileNav />
						</div>
					</nav>
				</div>
        )} {/* End conditional rendering for mobile search view */}

        {/* SearchResultsPortal - needs to be accessible by both desktop and mobile inputs */}
        {/* This portal is now outside the conditional block to serve both inputs. */}
        {/* We might need to adjust its 'show' prop or positioning logic if inputRef changes based on view */}
        <SearchResultsPortal
          results={searchResults}
          searchQuery={searchQuery}
          inputRef={searchInputRef} // This ref is now on the parent div of the active input
          onResultClick={handleResultClick}
          isSectionLocked={isContextSectionLocked}
          show={isSearchFocused && searchQuery.length > 1 && searchResults.length > 0}
        />
			</div>
		</header>
	);
};

export default Header;
