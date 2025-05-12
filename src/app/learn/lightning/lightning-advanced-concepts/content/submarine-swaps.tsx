'use client';
import { Waves } from 'lucide-react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function SubmarineSwaps() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-advanced-concepts"
        sectionId="submarine-swaps"
        checkpoints={2}
        moduleTitle="Submarine Swaps"
        moduleDescription="Understanding the mechanics of submarine swaps in the Lightning Network"
        difficulty="Advanced"
        icon={Waves}
      >
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Submarine Swap Fundamentals</h2>
            <p className="mb-4">
              Submarine swaps are a technology that enables the trustless exchange of bitcoin between 
              on-chain transactions and Lightning Network payments. They provide a bridge between 
              these two systems without requiring mutual trust between the participants.
            </p>

            <div className="my-6 space-y-4">
              <h3 className="text-xl font-semibold">Key Concepts:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>On-chain to Lightning Network swaps and vice versa</li>
                <li>Hash Time Locked Contracts (HTLCs) implementation</li>
                <li>Atomic transaction guarantees</li>
                <li>Channel liquidity management through swaps</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-4 rounded-md my-6">
              <h4 className="font-medium mb-2">Technical Details:</h4>
              <p className="text-sm">
                Submarine swaps utilize hash time-locked contracts (HTLCs) to enable trustless exchanges between on-chain and Lightning Network bitcoin. The swap is atomic, meaning it either completes fully or not at all, eliminating counterparty risk.
              </p>
            </div>

            <VerifyCheckbox 
              moduleId="lightning-advanced-concepts" 
              verificationId="1" 
              sectionId="submarine-swaps"
              label="I understand the basic concept of submarine swaps" 
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Practical Applications</h2>
            <p className="mb-4">
              Submarine swaps solve several practical problems in the Lightning Network ecosystem, particularly around channel liquidity management and interoperability with on-chain systems.
            </p>

            <div className="my-6 space-y-4">
              <h3 className="text-xl font-semibold">Use Cases:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refilling Lightning channels without closing them</li>
                <li>Converting on-chain funds to Lightning without opening new channels</li>
                <li>Creating two-way pegs between on-chain and Lightning</li>
                <li>Building exchange services and liquidity marketplaces</li>
              </ul>
            </div>

            <VerifyCheckbox 
              moduleId="lightning-advanced-concepts" 
              verificationId="2" 
              sectionId="submarine-swaps"
              label="I understand the practical applications of submarine swaps" 
            />
          </section>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
