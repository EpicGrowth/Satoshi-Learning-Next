'use client';

import { useState, useEffect } from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Save, Database, ArrowDownToLine, AlertTriangle } from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

export default function BackupStrategiesClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-node-operations"
        sectionId="backup-strategies"
        moduleTitle="Node Operations"
        moduleDescription="Essential backup strategies for Lightning node operators"
        difficulty="Intermediate"
        checkpoints={3}
      >
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Backup Strategies</h2>
          <p className="text-muted-foreground">
            Proper backup strategies are crucial for Lightning node operators. 
            Learn how to secure your channels, maintain data integrity, and 
            implement reliable recovery procedures.
          </p>
        </div>

        {/* Types of Backups */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Save className="h-5 w-5" />
            Types of Backups
          </h3>
          <div className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Static Channel Backup */}
              <div className="p-4 rounded-lg border bg-card">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Database className="h-4 w-4 text-primary" />
                  Static Channel Backup (SCB)
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Contains essential channel recovery data</li>
                  <li>Small file size, easy to backup frequently</li>
                  <li>Updated automatically when channels change</li>
                  <li>Required for basic channel recovery</li>
                </ul>
              </div>

              {/* Dynamic Channel State */}
              <div className="p-4 rounded-lg border bg-card">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <ArrowDownToLine className="h-4 w-4 text-primary" />
                  Dynamic Channel State
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Full channel state information</li>
                  <li>Required for optimal recovery</li>
                  <li>Larger size, needs frequent updates</li>
                  <li>Critical for maintaining balances</li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-800 dark:text-amber-300 mb-1">Important Note</h4>
                  <p className="text-sm text-amber-700/90 dark:text-amber-300/90">
                    Always maintain both types of backups. Static Channel Backups alone are not sufficient for complete channel recovery in all scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Best Practices</h3>
          <div className="space-y-4">
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
              <li>Automate backups after every channel state change</li>
              <li>Store backups in multiple secure locations</li>
              <li>Encrypt sensitive backup data</li>
              <li>Test recovery procedures regularly</li>
              <li>Document all backup and recovery processes</li>
              <li>Monitor backup execution and integrity</li>
            </ul>
          </div>
        </Card>

        <VerifyCheckbox
          moduleId="lightning-node-operations"
          sectionId="backup-strategies"
          verificationId="backup-understanding"
          label="I understand the importance of proper backup strategies and the different types of Lightning node backups required"
        />

        <div className="mt-6">
          <SatoshiQuote quote="Don't put all your eggs in one basket. The same applies to your node backups." />
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}