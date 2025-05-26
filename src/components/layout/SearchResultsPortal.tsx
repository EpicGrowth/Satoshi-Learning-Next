'use client';

import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import { Lock, CheckCircle } from 'lucide-react';
import type { SearchIndexItem } from '@/types'; // Adjust if SearchIndexItem is moved
import { highlightMatch } from '@/lib/utils'; // Assuming a highlighting utility

interface SearchResultsPortalProps {
  results: SearchIndexItem[];
  searchQuery: string;
  inputRef: React.RefObject<HTMLElement>; // Can be any element that provides position
  onResultClick: (item: SearchIndexItem) => void;
  isSectionLocked: (
    topic: string,
    moduleId: string,
    sectionId: string
  ) => boolean;
  show: boolean;
}

const SearchResultsPortal: React.FC<SearchResultsPortalProps> = ({
  results,
  searchQuery,
  inputRef,
  onResultClick,
  isSectionLocked,
  show,
}) => {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const [position, setPosition] = useState<{ top: number; left: number; width: number } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a div to mount the portal into if it doesn't exist
    let container = document.getElementById('search-results-portal-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'search-results-portal-container';
      document.body.appendChild(container);
    }
    setPortalContainer(container);

    return () => {
      // Clean up the container when the component unmounts if it's empty or not needed
      if (container && container.parentNode === document.body && container.childElementCount === 0) {
        // document.body.removeChild(container); // Or leave it for reuse
      }
    };
  }, []);

  useEffect(() => {
    if (inputRef.current && show) {
      const rect = inputRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8, // 8px margin from input
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    } else {
      setPosition(null);
    }
  }, [inputRef, show, results, searchQuery]); // Re-calculate on show/results/query change too

  // Handle clicks outside the dropdown to close it (optional, can be managed in Header)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && 
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        // Logic to hide the portal, typically by calling a prop from Header
        // This portal doesn't control its own visibility directly via this hook in this version.
        // Visibility is controlled by the `show` prop passed from Header.tsx
      }
    };
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, inputRef]);

  if (!portalContainer || !show || !position || results.length === 0) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      ref={dropdownRef}
      className="absolute bg-background border border-border rounded-md shadow-xl z-[100] max-h-96 overflow-y-auto"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${position.width}px`,
        minWidth: '300px', // Ensure a minimum sensible width
        maxWidth: '600px', // And a maximum
      }}
    >
      <ul className="py-1">
        {results.map((item) => {
          const unlocked = !isSectionLocked(
            item.topic,
            item.moduleId,
            item.sectionId
          );
          return (
            <li key={item.id}>
              <Link
                href={unlocked ? item.path : '#'}
                onClick={(e) => {
                  if (!unlocked) {
                    e.preventDefault();
                  }
                  onResultClick(item);
                }}
                className={`flex items-center justify-between px-3 py-2.5 text-sm hover:bg-accent/80 transition-colors ${
                  !unlocked ? 'cursor-not-allowed text-muted-foreground/70' : 'text-foreground'
                }`}
                aria-disabled={!unlocked}
              >
                <div className="flex-grow overflow-hidden">
                  <div
                    className="font-medium truncate"
                    dangerouslySetInnerHTML={{
                      __html: highlightMatch(item.title, searchQuery),
                    }}
                  />
                  <p
                    className="text-xs text-muted-foreground truncate mt-0.5"
                    dangerouslySetInnerHTML={{
                      __html: highlightMatch(item.description, searchQuery),
                    }}
                  />
                </div>
                {unlocked ? (
                  <CheckCircle className="h-4 w-4 text-green-500 ml-3 flex-shrink-0" />
                ) : (
                  <Lock className="h-4 w-4 text-destructive/70 ml-3 flex-shrink-0" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>,
    portalContainer
  );
};

export default SearchResultsPortal;
