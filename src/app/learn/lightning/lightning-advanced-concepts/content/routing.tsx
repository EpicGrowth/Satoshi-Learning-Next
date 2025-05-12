'use client';

import { Network } from 'lucide-react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function Routing() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-advanced-concepts"
        sectionId="routing"
        checkpoints={2}
        moduleTitle="Lightning Network Routing"
        moduleDescription="Understanding how payments are routed through the Lightning Network"
        difficulty="Advanced"
        icon={Network}
      >
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Routing Fundamentals</h2>
            <p className="mb-4">
              The Lightning Network uses a source-based onion routing system to safely move payments 
              through multiple payment channels. Understanding how routing works is essential for 
              operating effective Lightning nodes.
            </p>

            <div className="my-6 space-y-4">
              <h3 className="text-xl font-semibold">Key Concepts:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Path finding algorithms that determine optimal routes</li>
                <li>Fee calculation and economic incentives</li>
                <li>Route optimization for reliability and cost</li>
                <li>Failure handling and retry mechanisms</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-4 rounded-md my-6">
              <h4 className="font-medium mb-2">Technical Details:</h4>
              <p className="text-sm">
                Routing uses source-based onion routing, where each node in the path only knows its immediate predecessor and successor. This provides strong privacy while allowing payments to traverse the network efficiently.
              </p>
            </div>

            <VerifyCheckbox 
              moduleId="lightning-advanced-concepts" 
              verificationId="1" 
              sectionId="routing"
              label="I understand the basics of Lightning Network routing" 
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Practical Routing Examples</h2>
            <p className="mb-4">
              When a Lightning payment is sent, it must find a path through the network of payment channels. This routing process involves several steps and considerations.
            </p>

            <div className="my-6 space-y-4">
              <h3 className="text-xl font-semibold">Example Payment Flow:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Initial route discovery using graph information</li>
                <li>Payment preparation with onion encryption layers</li>
                <li>Forwarding through intermediary nodes</li>
                <li>Handling success confirmations or failure notifications</li>
              </ul>
            </div>

            <VerifyCheckbox 
              moduleId="lightning-advanced-concepts" 
              verificationId="2" 
              sectionId="routing"
              label="I understand how payments traverse the Lightning Network" 
            />
          </section>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
