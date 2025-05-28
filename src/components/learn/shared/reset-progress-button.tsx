'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function ResetProgressButton({ pathPrefix }: { pathPrefix: 'bitcoin' | 'lightning' }) {
  const [isResetting, setIsResetting] = useState(false);
  const router = useRouter();

  const handleReset = () => {
    if (typeof window === 'undefined') return;
    
    setIsResetting(true);
    
    try {
      // Get current progress data
      const savedProgress = localStorage.getItem('satoshi-station-progress');
      
      if (savedProgress) {
        const progressData = JSON.parse(savedProgress);
        
        // Reset only the specified path
        if (progressData[pathPrefix]) {
          progressData[pathPrefix] = {};
          
          // Save the updated progress data
          localStorage.setItem('satoshi-station-progress', JSON.stringify(progressData));
          
          // Force a refresh to apply changes
          router.refresh();
        }
      }
    } catch (error) {
      console.error('Failed to reset progress:', error);
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-2 text-destructive hover:bg-destructive/10"
      onClick={() => {
        if (window.confirm(`Are you sure you want to reset all ${pathPrefix} learning progress? This cannot be undone.`)) {
          handleReset();
        }
      }}
      disabled={isResetting}
    >
      <Trash2 className="h-4 w-4" />
      Reset Progress
    </Button>
  );
}
