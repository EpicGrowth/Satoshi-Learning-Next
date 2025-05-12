'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Server, HardDrive, Cpu, Wifi, Code, ShieldCheck, Settings, Terminal, Database, Shield, FileCode, Workflow, AlertCircle, Network, FileDown, CheckSquare } from 'lucide-react'; // Added FileDown, CheckSquare
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

const moduleId = 'lightning-node-operations';
const sectionId = 'node-installation';

export default function NodeInstallationPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        {/* Content migrated and adapted from SatsSV node-installation.tsx */}
        <div className="space-y-8">
          
          {/* Section 1: Prerequisites */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-primary"/> 
              Prerequisites
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Before installing a Lightning node, ensure you have the necessary hardware and software
                requirements in place, as discussed in the 'Node Setup' section.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                     <HardDrive className="h-5 w-5 mr-2 text-muted-foreground"/>
                    Hardware Recap
                  </h4>
                  <ul className="space-y-2 list-disc pl-5 text-sm text-muted-foreground">
                    <li>Storage: 1TB+ SSD recommended</li>
                    <li>RAM: 4GB minimum (8GB+ recommended)</li>
                    <li>CPU: Multi-core processor</li>
                    <li>Stable internet connection (Always-on)</li>
                    <li>Reliable Power (UPS recommended)</li>
                  </ul>
                </div>
                
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                     <Code className="h-5 w-5 mr-2 text-muted-foreground"/>
                    Software Recap
                  </h4>
                  <ul className="space-y-2 list-disc pl-5 text-sm text-muted-foreground">
                    <li>Bitcoin Core (fully synced or syncing)</li>
                    <li>Operating System (Linux preferred)</li>
                    <li>Comfort with Command Line (often needed)</li>
                  </ul>
                </div>
              </div>
               <p className="text-sm text-muted-foreground italic">
                Refer back to the 'Node Setup' section for detailed explanations of these requirements.
              </p>
            </div>
          </div>

          {/* Section 2: Installation Steps */}
          <div className="bg-card p-6 rounded-lg border border-border">
             <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Terminal className="h-5 w-5 mr-2 text-primary"/>
                General Installation Steps
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                The exact installation steps vary depending on the Lightning implementation (LND, Core Lightning, Eclair, etc.) and your operating system. However, the general process involves these key stages:
              </p>
              
              <ol className="list-decimal pl-6 space-y-6">
                <li>
                  <strong className="flex items-center mb-1">
                     <FileDown className="h-4 w-4 mr-2"/> 
                    Download the Software
                  </strong>
                  <p className="text-sm text-muted-foreground">
                    Visit the official website or GitHub repository of your chosen Lightning implementation (e.g., LND's GitHub releases page). Download the appropriate binary or source code for your system architecture (e.g., amd64, arm64).
                  </p>
                </li>
                <li>
                  <strong className="flex items-center mb-1">
                     <CheckSquare className="h-4 w-4 mr-2"/> 
                    Verify the Download
                  </strong>
                  <p className="text-sm text-muted-foreground">
                    This is a crucial security step. Download the corresponding signature file (usually `.sig` or `.asc`) and the developer's public PGP key. Use a tool like GPG (GNU Privacy Guard) to verify that the signature matches the downloaded software binary. This confirms the software hasn't been tampered with.
                  </p>
                  <pre className="mt-2 p-3 bg-muted/50 rounded text-xs overflow-x-auto">
                    <code>
                      # Example GPG verification steps (conceptual)
                      gpg --import developer-key.asc
                      gpg --verify software-binary.sig software-binary.tar.gz 
                    </code>
                  </pre>
                  <p className="text-xs text-muted-foreground mt-1 italic">
                    Consult the specific project's documentation for exact verification instructions.
                  </p>
                </li>
                <li>
                  <strong className="flex items-center mb-1">
                     <Server className="h-4 w-4 mr-2"/>
                    Install and Configure
                  </strong>
                  <p className="text-sm text-muted-foreground">
                    Follow the detailed installation guide provided by the implementation's developers. This typically involves:
                  </p>
                   <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
                      <li>Extracting the software archive.</li>
                      <li>Moving the binaries to an executable path (e.g., `/usr/local/bin`).</li>
                      <li>Creating necessary configuration files (e.g., `lnd.conf`, `bitcoin.conf`).</li>
                      <li>Setting up permissions and potentially system services (e.g., systemd) to run the node reliably.</li>
                      <li>Configuring the Lightning node to connect to your Bitcoin Core node (RPC/ZMQ details).</li>
                   </ul>
                </li>
                 <li>
                  <strong className="flex items-center mb-1">
                     <Network className="h-4 w-4 mr-2"/>
                    Initial Startup & Sync
                  </strong>
                  <p className="text-sm text-muted-foreground">
                    Start the Lightning node daemon. It will need to connect to your Bitcoin node and potentially perform its own initial synchronization or setup procedures. Monitor the logs for any errors.
                  </p>
                </li>
              </ol>

               <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  Node Management Software
                </h5>
                <p className="text-sm text-muted-foreground">
                  Remember, using node management software like Umbrel, RaspiBlitz, Start9, etc., often automates many of these installation and configuration steps, providing a much simpler user experience, especially for beginners. If you choose one of these platforms, follow their specific setup guides.
                </p>
              </div>
            </div>
          </div>

        </div>
        {/* Content migration ends here */}

        {/* Verification Checkpoint */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={`${sectionId}-complete`} 
          label="I understand the general steps involved in installing Lightning node software."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
