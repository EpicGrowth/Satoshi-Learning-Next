'use client';

import React, { useEffect, useState } from 'react';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { usePathname } from 'next/navigation';
import { Check } from 'lucide-react';

interface VerifyCheckboxProps {
  moduleId: string;
  verificationId: string;
  label?: string;
  sectionId?: string;
}

const VerifyCheckbox: React.FC<VerifyCheckboxProps> = ({ 
  moduleId,
  verificationId,
  sectionId,
  label = "I understand what Bitcoin is and its revolutionary properties"
}) => {
  const { updateSectionProgress, getSectionProgress, markSectionComplete } = useLearningProgress();
  const pathname = usePathname();
  // Determine the path type from the URL and module ID
  const pathType: 'bitcoin' | 'lightning' = pathname.includes('/lightning') ? 'lightning' : 'bitcoin';
  
  // Normalize the module ID to ensure consistent behavior with prefixed IDs
  const normalizedModuleId = moduleId.includes('-') ? moduleId : `${pathType}-${moduleId}`;
  const actualSectionId = sectionId || verificationId;
  const [isChecked, setIsChecked] = useState(false);

  // Initialize checkbox state from context
  useEffect(() => {
    const progress = getSectionProgress(pathType, normalizedModuleId, actualSectionId);
    setIsChecked(progress >= 100);
    // Remove getSectionProgress from dependencies as it's causing a loop
  }, [normalizedModuleId, verificationId, actualSectionId, pathType]);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    
    if (newCheckedState) {
      updateSectionProgress(pathType, normalizedModuleId, actualSectionId, verificationId);
      markSectionComplete(pathType, normalizedModuleId, actualSectionId);
    }
  };

  return (
    <div className="mt-4 mb-8">
      <button 
        onClick={handleCheckboxChange}
        className="flex items-center focus:outline-none"
      >
        <div className={`
          w-5 h-5 rounded-sm flex items-center justify-center mr-3
          ${isChecked ? 'bg-emerald-500' : 'border border-muted-foreground'}
        `}>
          {isChecked && (
            <Check className="h-4 w-4 text-white" />
          )}
        </div>
        <span className="text-sm">{label}</span>
      </button>
    </div>
  );
};

export default VerifyCheckbox;