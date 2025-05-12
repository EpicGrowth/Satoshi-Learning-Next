'use client';

import { useState } from 'react';
import {
  Landmark,
  Shield,
  Building,
  BarChart,
  Building2,
  Users,
} from 'lucide-react';

// Interactive component to visualize economic transformation
export default function EconomicTransformationVisualizer() {
  const [activeView, setActiveView] = useState<'traditional' | 'bitcoin'>('traditional');

  // Define the connections array with correct structure

  return (
    <div className="p-4 bg-background rounded-lg border border-border my-6">
      <h5 className="font-medium text-center mb-4">Economic System Visualization</h5>

      <div className="flex border border-border rounded-md mb-6 overflow-hidden">
        <button
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            activeView === 'traditional'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          }`}
          onClick={() => setActiveView('traditional')}
        >
          Traditional Finance
        </button>
        <button
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            activeView === 'bitcoin'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          }`}
          onClick={() => setActiveView('bitcoin')}
        >
          Bitcoin Economy
        </button>
      </div>

      <div className="relative min-h-[400px] mb-4 border-4 border-muted/30 rounded-lg p-4">
        {/* Visualization of the economic system */}
        <div className="grid grid-cols-3 gap-4">
          {/* Central Banks / Bitcoin Network (central position) */}
          <div
            className={`col-span-3 mx-auto mb-6 w-48 ${
              activeView === 'bitcoin' ? 'bg-amber-50 dark:bg-amber-900/20' : 'bg-blue-50 dark:bg-blue-900/20'
            } p-3 rounded-lg border border-border shadow-sm`}
          >
            {activeView === 'traditional' ? (
              <div className="flex flex-col items-center text-center">
                <Landmark className="h-10 w-10 text-blue-500 mb-2" />
                <h6 className="font-medium">Central Banks</h6>
                <p className="text-xs text-muted-foreground mt-1">
                  Control money supply and monetary policy
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-amber-500 mb-2" />
                <h6 className="font-medium">Bitcoin Network</h6>
                <p className="text-xs text-muted-foreground mt-1">
                  Decentralized monetary system and payment network
                </p>
              </div>
            )}
          </div>

          {/* Second Tier */}
          <div
            className={`${activeView === 'traditional' ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-muted/50'} p-3 rounded-lg border border-border shadow-sm`}
          >
            <div className="flex flex-col items-center text-center">
              <Building
                className={`h-8 w-8 ${activeView === 'traditional' ? 'text-blue-500' : 'text-muted-foreground'} mb-2`}
              />
              <h6 className="font-medium">Commercial Banks</h6>
              <p className="text-xs text-muted-foreground mt-1">Financial intermediaries</p>
            </div>
          </div>

          <div className="bg-muted/50 p-3 rounded-lg border border-border shadow-sm">
            <div className="flex flex-col items-center text-center">
              <BarChart className="h-8 w-8 text-primary mb-2" />
              <h6 className="font-medium">Financial Markets</h6>
              <p className="text-xs text-muted-foreground mt-1">Capital allocation</p>
            </div>
          </div>

          <div className="bg-muted/50 p-3 rounded-lg border border-border shadow-sm">
            <div className="flex flex-col items-center text-center">
              <Building2 className="h-8 w-8 text-primary mb-2" />
              <h6 className="font-medium">Corporations</h6>
              <p className="text-xs text-muted-foreground mt-1">Goods & services providers</p>
            </div>
          </div>

          {/* Bottom Tier */}
          <div className="col-span-3 mx-auto mt-4 bg-muted/50 p-3 rounded-lg border border-border shadow-sm w-48">
            <div className="flex flex-col items-center text-center">
              <Users className="h-8 w-8 text-primary mb-2" />
              <h6 className="font-medium">Individuals</h6>
              <p className="text-xs text-muted-foreground mt-1">Consumers, workers & savers</p>
            </div>
          </div>
        </div>

        {/* Connection lines would normally be SVG paths, simplified here */}
        <div className="absolute inset-0 pointer-events-none">
          {/* These would be SVG paths in a production implementation */}
        </div>
      </div>

      <div className="p-3 rounded-md bg-primary/5">
        <h6 className="text-sm font-medium mb-2">Key System Changes in Bitcoin Economy:</h6>
        <ul className="text-xs text-muted-foreground space-y-2">
          {activeView === 'bitcoin' ? (
            <>
              <li>
                • Disintermediation of central banks and reduction of commercial banking sector
              </li>
              <li>• Direct peer-to-peer financial interactions without trusted third parties</li>
              <li>• Algorithmic monetary policy instead of discretionary human decisions</li>
              <li>• Reduced capital controls and financial surveillance</li>
            </>
          ) : (
            <>
              <li>• Hierarchical monetary control through multi-tiered banking system</li>
              <li>• Central banks set monetary policy, commercial banks allocate credit</li>
              <li>• Financial intermediaries required for most economic transactions</li>
              <li>• Nation-state boundaries create financial fragmentation</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
