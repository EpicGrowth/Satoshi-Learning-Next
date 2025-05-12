'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Settings, FileText, Network, Lock, FolderClosed, RadioTower, ShieldCheck, KeyRound, Code } from 'lucide-react';

const moduleId = 'lightning-node-operations';
const sectionId = 'basic-configuration';

export default function BasicConfigurationPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        {/* Content migrated and adapted from SatsSV basic-configuration.tsx */}
        <div className="space-y-8">

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Settings className="h-6 w-6 mr-2 text-primary" />
              Basic Node Configuration
            </h2>
            <p className="text-muted-foreground">
              Configuring your Lightning node correctly is crucial for performance, security, and reliability. While default settings often work, understanding key parameters allows for optimization based on your specific setup and goals.
            </p>
          </div>

          {/* Section 1: Configuration Files */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Configuration Files
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Most Lightning implementations (LND, Core Lightning, etc.) use configuration files (e.g., `lnd.conf`, `config`) to manage settings. These files are typically text-based and located in the node's data directory.
              </p>
              <p className="text-muted-foreground">
                Understanding the structure and syntax of this file is the first step. Settings are often grouped into sections (e.g., `[Application Options]`, `[Bitcoin]`, `[tor]`).
              </p>

              <div className="bg-background p-5 rounded-lg border border-border mt-4">
                <h4 className="font-medium mb-3 flex items-center">
                  <FolderClosed className="h-5 w-5 mr-2 text-muted-foreground" />
                  Common Configuration Areas
                </h4>
                <ul className="space-y-2 list-disc pl-5 text-sm text-muted-foreground">
                  <li><strong>Network Settings:</strong> Specifying Bitcoin network (mainnet, testnet, simnet), connection details for Bitcoin Core.</li>
                  <li><strong>Application Options:</strong> Node alias, color, listening ports, database settings.</li>
                  <li><strong>Routing:</strong> Fee policies, channel management parameters.</li>
                  <li><strong>Security:</strong> RPC/REST API access controls, TLS certificate paths.</li>
                  <li><strong>Tor/Privacy:</strong> Settings for running the node over Tor.</li>
                </ul>
              </div>
               <p className="text-sm text-muted-foreground italic mt-4">
                Always consult the official documentation for your specific Lightning implementation for a complete list of configuration options and their default values.
              </p>
            </div>
          </div>

          {/* Section 2: Key Parameters */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <KeyRound className="h-5 w-5 mr-2 text-primary" />
              Key Parameters to Understand
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                While there are many options, here are some fundamental parameters you should be familiar with:
              </p>
              
              <div className="space-y-4">
                  <div>
                    <strong className="flex items-center mb-1">
                      <RadioTower className="h-4 w-4 mr-2" />
                      Network Mode (`bitcoin.mainnet`, `bitcoin.testnet`, etc.)
                    </strong>
                    <p className="text-sm text-muted-foreground pl-6">
                      Ensures your node connects to the correct Bitcoin network. Mismatching this can lead to significant issues.
                    </p>
                  </div>
                  <div>
                    <strong className="flex items-center mb-1">
                       <Code className="h-4 w-4 mr-2" />
                      Bitcoin Core Connection (`bitcoin.node`, `bitcoind.rpcuser`, `bitcoind.rpcpass`, etc.)
                    </strong>
                    <p className="text-sm text-muted-foreground pl-6">
                      Specifies how your Lightning node communicates with your Bitcoin full node (e.g., using RPC or ZeroMQ) for blockchain data.
                    </p>
                  </div>
                   <div>
                    <strong className="flex items-center mb-1">
                       <Network className="h-4 w-4 mr-2" />
                      Listening Addresses (`listen`, `externalip`)
                    </strong>
                    <p className="text-sm text-muted-foreground pl-6">
                      Defines the network interfaces and ports your node listens on for incoming peer-to-peer connections. `externalip` helps other nodes find yours if you're behind NAT.
                    </p>
                  </div>
                   <div>
                    <strong className="flex items-center mb-1">
                      <ShieldCheck className="h-4 w-4 mr-2" />
                      RPC/REST Listeners (`rpclisten`, `restlisten`)
                    </strong>
                    <p className="text-sm text-muted-foreground pl-6">
                      Configures where the node listens for API requests (e.g., from wallets or management tools). Proper security (TLS, macaroons for LND) is vital here.
                    </p>
                  </div>
                   <div>
                    <strong className="flex items-center mb-1">
                      <Lock className="h-4 w-4 mr-2" />
                       Privacy Settings (`tor.active`, `tor.streamisolation` etc.)
                    </strong>
                    <p className="text-sm text-muted-foreground pl-6">
                       Options to enhance privacy by routing traffic through Tor. Requires Tor to be installed and configured.
                    </p>
                  </div>
              </div>
                <p className="text-sm text-muted-foreground italic mt-4">
                Start with defaults, and only change parameters you fully understand. Incorrect configuration can impact connectivity, security, and fund safety.
              </p>
            </div>
          </div>

        </div>
        {/* Content migration ends here */}

        {/* Verification Checkpoint */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={`${sectionId}-complete`} 
          label="I understand the role of configuration files and key parameters in a Lightning node setup."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
