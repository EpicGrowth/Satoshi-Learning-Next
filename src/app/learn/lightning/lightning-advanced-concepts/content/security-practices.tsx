'use client';
import { Shield, Lock } from 'lucide-react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function SecurityPractices() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-advanced-concepts"
        sectionId="security-practices"
        checkpoints={2}
        moduleTitle="Lightning Security Best Practices"
        moduleDescription="Advanced security measures for Lightning Network nodes"
        difficulty="Advanced"
        icon={Shield}
      >
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Advanced Security Measures</h2>
            <p className="mb-4">
              Running a Lightning Network node securely requires multiple layers of protection. 
              This section covers advanced security practices to safeguard your Lightning node and funds.
            </p>

            <div className="my-6 space-y-4">
              <h3 className="text-xl font-semibold">Key Security Concepts:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Node hardening techniques and system security</li>
                <li>Private key management and backup procedures</li>
                <li>Channel security policies and monitoring</li>
                <li>Static channel backup (SCB) implementation</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-4 rounded-md my-6">
              <h4 className="font-medium mb-2">Technical Details:</h4>
              <p className="text-sm">
                Lightning security requires a multi-layered approach to protect node keys, ensure proper channel state backups, and monitor for potential attacks. Using hardware security modules (HSMs) for key storage adds an additional layer of protection for your channel funds.
              </p>
            </div>

            <VerifyCheckbox 
              moduleId="lightning-advanced-concepts" 
              verificationId="1" 
              sectionId="security-practices"
              label="I understand the core security considerations for Lightning nodes" 
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Security Implementation</h2>
            <p className="mb-4">
              Implementing proper security for a Lightning node requires attention to both operational and technical details. Here we explore practical implementations of Lightning security measures.
            </p>

            <div className="my-6 space-y-4">
              <h3 className="text-xl font-semibold">Implementation Guidelines:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular backup procedures and testing</li>
                <li>Secure remote access configuration</li>
                <li>Network security and firewall configuration</li>
                <li>Update management and security patching</li>
              </ul>
            </div>

            <VerifyCheckbox 
              moduleId="lightning-advanced-concepts" 
              verificationId="2" 
              sectionId="security-practices"
              label="I understand how to implement Lightning node security" 
            />
          </section>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
