'use client';

import { Eye, Shield } from 'lucide-react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function Watchtowers() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-advanced-concepts"
        sectionId="watchtowers"
        checkpoints={2}
        moduleTitle="Lightning Watchtowers"
        moduleDescription="Understanding the role and implementation of Lightning Network watchtowers"
        difficulty="Advanced"
        icon={Eye}
      >
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Watchtower Fundamentals</h2>
            <p className="mb-4">
              Watchtowers are third-party services that monitor the Lightning Network for 
              fraudulent channel closures and can take action to protect users if a counterparty 
              attempts to broadcast an outdated channel state.
            </p>

            <div className="my-6 space-y-4">
              <h3 className="text-xl font-semibold">Key Concepts:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Purpose and functionality of watchtowers</li>
                <li>Channel state monitoring mechanisms</li>
                <li>Breach protection protocols</li>
                <li>Penalty transaction enforcement</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-4 rounded-md my-6">
              <h4 className="font-medium mb-2">Technical Details:</h4>
              <p className="text-sm">
                Watchtowers monitor Lightning channels for fraud and can broadcast penalty transactions if a counterparty attempts to broadcast old channel states. They store encrypted channel states and only decrypt them when needed, preserving privacy.
              </p>
            </div>

            <VerifyCheckbox 
              moduleId="lightning-advanced-concepts" 
              verificationId="1" 
              sectionId="watchtowers"
              label="I understand the basic function of Lightning watchtowers" 
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Watchtower Implementation</h2>
            <p className="mb-4">
              Implementing watchtowers involves careful consideration of privacy, resource requirements, and economic incentives. Various Lightning implementations approach this differently.
            </p>

            <div className="my-6 space-y-4">
              <h3 className="text-xl font-semibold">Implementation Considerations:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Data storage requirements for watching channels</li>
                <li>Privacy-preserving designs using encrypted blobs</li>
                <li>Fee models and incentive structures</li>
                <li>Backup and redundancy strategies</li>
              </ul>
            </div>

            <VerifyCheckbox 
              moduleId="lightning-advanced-concepts" 
              verificationId="2" 
              sectionId="watchtowers"
              label="I understand how watchtowers are implemented in the Lightning Network" 
            />
          </section>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
