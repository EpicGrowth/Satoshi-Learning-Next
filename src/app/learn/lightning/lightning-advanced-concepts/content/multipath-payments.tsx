'use client';

import { GitBranch } from 'lucide-react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function MultipathPayments() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-advanced-concepts"
        sectionId="multipath-payments"
        checkpoints={2}
        moduleTitle="Multi-path Payments"
        moduleDescription="Understanding multi-path payments in the Lightning Network"
        difficulty="Advanced"
        icon={GitBranch}
      >
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Multi-path Payment Concepts</h2>
            <p className="mb-4">
              Multipath payments split a Lightning payment across multiple routes, allowing 
              larger transactions than would be supported by a single channel. This effectively 
              improves liquidity by utilizing the aggregate capacity of multiple paths.
            </p>

            <div className="my-6 space-y-4">
              <h3 className="text-xl font-semibold">Key Concepts:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment splitting across multiple channels</li>
                <li>Route diversity for better reliability</li>
                <li>Improved success probability for large payments</li>
                <li>Channel capacity optimization</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-4 rounded-md my-6">
              <h4 className="font-medium mb-2">Technical Details:</h4>
              <p className="text-sm">
                Multipath payments split a Lightning payment across multiple routes, allowing larger transactions than would be supported by a single channel. This effectively improves liquidity by utilizing the aggregate capacity of multiple paths.
              </p>
            </div>

            <VerifyCheckbox 
              moduleId="lightning-advanced-concepts"
              verificationId="1" 
              sectionId="multipath-payments"
              label="I understand how multi-path payments work" 
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Advantages of Multi-path Payments</h2>
            <p className="mb-4">
              Using multipath payments significantly improves the success rate for larger Lightning payments by dividing them across multiple routes. This technique leverages the distributed nature of the Lightning Network.
            </p>

            <div className="my-6 space-y-4">
              <h3 className="text-xl font-semibold">Benefits:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Higher success rate for large payments</li>
                <li>Better utilization of available liquidity</li>
                <li>Reduced need for large individual channels</li>
                <li>Enhanced privacy through payment fragmentation</li>
              </ul>
            </div>

            <VerifyCheckbox 
              moduleId="lightning-advanced-concepts" 
              verificationId="2" 
              sectionId="multipath-payments"
              label="I understand the advantages of multi-path payments" 
            />
          </section>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
