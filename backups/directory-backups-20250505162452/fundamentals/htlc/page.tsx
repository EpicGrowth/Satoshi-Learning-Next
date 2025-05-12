// Placeholder for 'Hash Time-Locked Contracts' (Fundamentals) section
'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

const moduleId = 'fundamentals';
const sectionId = 'htlc';

export default function HTLCFundamentalsPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <p>Content for Understanding HTLCs (Beginner) is currently missing.</p>
        {/* Add actual content here later */}
        <VerifyCheckbox moduleId={moduleId} sectionId={sectionId} verificationId={sectionId} />
      </ModuleContent>
    </ModuleLayout>
  );
}
