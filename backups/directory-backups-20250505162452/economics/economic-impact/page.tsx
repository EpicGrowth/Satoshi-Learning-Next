'use client';

import { Metadata } from 'next';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import {
  Globe,
  Shield,
  CircleDollarSign,
  TrendingUp,
  Scale,
  Wallet,
  Info,
  BadgeDollarSign,
  PiggyBank,
  Briefcase,
  LineChart,
  Percent,
  BarChart3,
  FileText
} from 'lucide-react';

// Import local interactive components
import EconomicTransformationVisualizer from './economic-transformation-visualizer';
import FinancialInclusionCalculator from './financial-inclusion-calculator';

// Metadata
const metadataObject: Metadata = {
  title: 'Economic Impact | Bitcoin Economics | Satoshi Station',
  description: "Explore Bitcoin's impact on the global economy, financial inclusion, and individual sovereignty.",
  keywords: ['bitcoin', 'economic impact', 'financial inclusion', 'global economy', 'monetary policy', 'financial sovereignty', 'unbanked', 'remittances', 'satoshi station', 'bitcoin economics'],
  alternates: {
    canonical: '/learn/bitcoin/bitcoin-economics/economic-impact',
  },
  openGraph: {
    title: 'Economic Impact | Bitcoin Economics | Satoshi Station',
    description: "Explore Bitcoin's impact on the global economy, financial inclusion, and individual sovereignty.",
    url: '/learn/bitcoin/bitcoin-economics/economic-impact',
    images: ['/images/og/bitcoin-economics-economic-impact.png'] // Standard path
  },
  other: {
    'difficulty': 'Advanced',
    'timeToComplete': '35 minutes',
    'prerequisites': 'market-dynamics',
    'lastUpdated': '2024-07-29' // Placeholder date
  }
};

const moduleId = 'economics';
const sectionId = 'economic-impact';

export default function EconomicImpactPage() {
  const totalCheckpoints = 1; // Corrected checkpoint count

  return (
    <ModuleLayout>
      <ModuleContent
        moduleId={moduleId}
        sectionId={sectionId}
        checkpoints={totalCheckpoints}
        moduleTitle="Economic Impact"
        moduleDescription="Exploring Bitcoin's transformative effects on the global economy, financial inclusion, and individual sovereignty."
        difficulty="Advanced"
        icon={TrendingUp}
      >
        <div className="space-y-8">
          <SatoshiQuote
            quote="The root problem with conventional currency is all the trust that's required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust."
            date="February 11, 2009"
            source="P2P Foundation Forum"
            sourceUrl="https://p2pfoundation.ning.com/forum/topics/bitcoin-open-source"
          />

          {/* Note from Satoshi */}
          <Card className="p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
            <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed space-y-3">
               <p>
                "When I created Bitcoin, I wasn't just designing a payment system or a new form of
                digital cash. I was proposing an entirely different economic paradigm—one that could
                operate parallel to the existing system without requiring trust in any central
                authority or institution."
              </p>
              <p>
                "I often think about the broader economic implications of what happens when you
                introduce a truly scarce digital asset into a world where all other forms of money
                can be created at will. Traditional economics operates under certain assumptions
                about how money works and how economic policies can be implemented. Bitcoin
                challenges many of these core assumptions."
              </p>
              <p>
                "In the legacy financial system, monetary policy is implemented by central
                authorities who decide when and how much currency to create, who gets access to it
                first, and how it should flow through the economy. Bitcoin replaces this with an
                algorithmic, transparent system where the rules are known to all participants and
                cannot be changed without broad consensus. This fundamentally transforms economic
                relationships by removing the power differential between money creators and money
                users."
              </p>
            </div>
          </Card>

           {/* Global Economic Properties */}
          <Card className="p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Global Economic Properties</h4>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Bitcoin introduces unique economic properties that differentiate it from traditional
                monetary systems. These properties create ripple effects throughout the global
                economy that are only beginning to be understood.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Borderless Transactions */}
                <div className="p-4 bg-background rounded-lg flex flex-col">
                  <div className="flex items-center mb-3">
                    <Globe className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <h5 className="font-medium">Borderless Transactions</h5>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Bitcoin enables global value transfer without intermediaries or restrictions,
                    creating a truly international monetary network that operates 24/7, regardless
                    of banking hours or national holidays.
                  </p>
                  <div className="mt-3 p-2 bg-muted/50 rounded-md text-xs">
                    <p className="font-medium">Economic Impact:</p>
                    <p className="text-muted-foreground mt-1">
                      Reduces friction in international trade and remittances, lowering costs for
                      cross-border commerce and potentially increasing global economic activity by
                      1-2% through efficiency gains.
                    </p>
                  </div>
                </div>
                {/* Financial Sovereignty */}
                <div className="p-4 bg-background rounded-lg flex flex-col">
                  <div className="flex items-center mb-3">
                    <Shield className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <h5 className="font-medium">Financial Sovereignty</h5>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Bitcoin provides individuals with full control over their wealth without
                    dependence on traditional financial systems, creating a parallel economic system
                    resistant to political control or censorship.
                  </p>
                  <div className="mt-3 p-2 bg-muted/50 rounded-md text-xs">
                    <p className="font-medium">Economic Impact:</p>
                    <p className="text-muted-foreground mt-1">
                      Creates an economic safety valve that can limit governments' ability to
                      implement capital controls or confiscatory policies, potentially constraining
                      poor monetary policy decisions in the long term.
                    </p>
                  </div>
                </div>
                {/* Banking Alternative */}
                <div className="p-4 bg-background rounded-lg flex flex-col">
                  <div className="flex items-center mb-3">
                    <CircleDollarSign className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <h5 className="font-medium">Banking Alternative</h5>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Bitcoin provides access to financial services for the unbanked and underbanked
                    populations—approximately 1.7 billion adults worldwide—without requiring
                    traditional banking infrastructure.
                  </p>
                   <div className="mt-3 p-2 bg-muted/50 rounded-md text-xs">
                    <p className="font-medium">Economic Impact:</p>
                    <p className="text-muted-foreground mt-1">
                      Could unlock economic potential in underserved regions by enabling
                      participation in the global digital economy, potentially adding $250-500B in
                      economic activity from previously excluded populations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Fixed Supply Economics */}
                 <div className="p-4 bg-background rounded-lg flex flex-col">
                  <div className="flex items-center mb-3">
                    <Scale className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <h5 className="font-medium">Fixed Supply Economics</h5>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Bitcoin's 21 million coin limit creates an unprecedented form of digital
                    scarcity, contrasting sharply with the elastic supply of fiat currencies
                    controlled by central banks.
                  </p>
                  <div className="mt-3 p-2 bg-muted/50 rounded-md text-xs">
                    <p className="font-medium">Economic Impact:</p>
                    <p className="text-muted-foreground mt-1">
                      Provides a hedge against monetary inflation and potentially forces more fiscal
                      discipline from governments if widely adopted, as deficit spending becomes
                      more difficult without monetary expansion.
                    </p>
                  </div>
                </div>
                {/* Self-Custody Economics */}
                <div className="p-4 bg-background rounded-lg flex flex-col">
                  <div className="flex items-center mb-3">
                    <Wallet className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <h5 className="font-medium">Self-Custody Economics</h5>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Bitcoin enables direct ownership of assets without custodians, eliminating
                    counterparty risk and transforming the economic relationship between individuals
                    and their money.
                  </p>
                   <div className="mt-3 p-2 bg-muted/50 rounded-md text-xs">
                    <p className="font-medium">Economic Impact:</p>
                    <p className="text-muted-foreground mt-1">
                      Reduces systemic risk by limiting fractional reserve practices and ensuring
                      that assets aren't rehypothecated, potentially preventing financial crises
                      caused by overleveraged financial institutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Integrate the visualizer component */}
              <EconomicTransformationVisualizer />
            </div>
          </Card>

          {/* Financial Inclusion Section */}
          <Card className="p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Financial Inclusion & Global Impact</h4>
             <div className="space-y-5">
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-900">
                <h5 className="font-medium mb-2 flex items-center">
                  <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                  <span>The Unbanked Opportunity</span>
                </h5>
                <p className="text-sm text-muted-foreground">
                  Approximately 1.7 billion adults worldwide lack access to basic financial
                  services. Bitcoin's permissionless nature allows anyone with internet access to
                  participate in the global economy without needing approval from financial
                  institutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {/* Remittance Revolution */}
                <div className="p-4 bg-background rounded-lg">
                  <h5 className="font-medium mb-3 flex items-center">
                    <BadgeDollarSign className="h-5 w-5 text-primary mr-2" />
                    <span>Remittance Revolution</span>
                  </h5>
                   <p className="text-sm text-muted-foreground mb-3">
                    The global remittance market exceeds $700 billion annually, with fees averaging
                    6.5% according to the World Bank. Bitcoin's borderless nature enables
                    near-instant transfers at a fraction of traditional costs.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs p-2 bg-muted/30 rounded">
                      <span>Traditional Remittance</span>
                      <span className="font-medium text-red-500">6-9% Fee</span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2 bg-muted/30 rounded">
                      <span>Bitcoin Remittance</span>
                      <span className="font-medium text-green-500">~1% Fee</span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2 bg-muted/30 rounded">
                      <span>Lightning Network</span>
                      <span className="font-medium text-green-500">&lt;0.1% Fee</span>
                    </div>
                  </div>
                </div>
                {/* Entrepreneurial Access */}
                 <div className="p-4 bg-background rounded-lg">
                  <h5 className="font-medium mb-3 flex items-center">
                    <Briefcase className="h-5 w-5 text-primary mr-2" />
                    <span>Entrepreneurial Access</span>
                  </h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bitcoin enables global micropayments, borderless fundraising, and international
                    commerce for entrepreneurs in developing economies who are often excluded from
                    traditional financial services.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs p-2 bg-muted/30 rounded">
                      <span>Traditional Merchant Account</span>
                      <span className="font-medium">60+ day approval</span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2 bg-muted/30 rounded">
                      <span>Traditional Fundraising</span>
                      <span className="font-medium">Geographically limited</span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2 bg-muted/30 rounded">
                      <span>Bitcoin Integration</span>
                      <span className="font-medium text-green-500">Instant, global</span>
                    </div>
                  </div>
                </div>
                {/* Economic Resilience */}
                <div className="p-4 bg-background rounded-lg">
                  <h5 className="font-medium mb-3 flex items-center">
                    <LineChart className="h-5 w-5 text-primary mr-2" />
                    <span>Economic Resilience</span>
                  </h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    In countries experiencing high inflation or currency controls, Bitcoin provides
                    a store of value alternative that cannot be arbitrarily debased by government
                    policies.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs p-2 bg-muted/30 rounded">
                      <span>Venezuela Bolivar (2018-2022)</span>
                      <span className="font-medium text-red-500">~3,000,000% loss</span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2 bg-muted/30 rounded">
                      <span>Turkish Lira (2018-2022)</span>
                      <span className="font-medium text-red-500">~84% loss</span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2 bg-muted/30 rounded">
                      <span>Bitcoin (4-year cycles)</span>
                      <span className="font-medium">+123% CAGR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrate the calculator component */}
              <FinancialInclusionCalculator />
            </div>
          </Card>

           {/* Macroeconomic Implications Section */}
           <Card className="p-6 rounded-lg border border-border">
             <h4 className="font-medium mb-4 text-lg">Macroeconomic Implications</h4>
             <div className="space-y-5">
               <p className="text-muted-foreground leading-relaxed">
                 As Bitcoin adoption grows, its influence on global economic policy and financial
                 markets becomes more significant, potentially reshaping fundamental economic
                 assumptions and practices.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Monetary Policy Constraints */}
                 <div className="p-4 bg-background rounded-lg">
                   <h5 className="font-medium mb-3 flex items-center">
                     <Percent className="h-5 w-5 text-primary mr-2" />
                     <span>Monetary Policy Constraints</span>
                   </h5>
                   <p className="text-sm text-muted-foreground mb-3">
                     As Bitcoin gains adoption, it could constrain central banks' ability to
                     implement certain monetary policies, particularly those involving significant
                     currency debasement.
                   </p>
                   <div className="p-3 bg-muted/50 rounded-md">
                     <h6 className="text-xs font-medium mb-2">Potential Long-term Effects:</h6>
                     <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                       <li>
                         Central banks may need to maintain more disciplined monetary policy to
                         prevent capital flight to Bitcoin
                       </li>
                       <li>
                         Governments may shift toward more sustainable fiscal policies rather than
                         relying on monetary expansion
                       </li>
                       <li>
                         Central bank digital currencies (CBDCs) may emerge as a competitive response
                       </li>
                     </ul>
                   </div>
                 </div>
                 {/* Financial System Transformation */}
                 <div className="p-4 bg-background rounded-lg">
                   <h5 className="font-medium mb-3 flex items-center">
                     <BarChart3 className="h-5 w-5 text-primary mr-2" />
                     <span>Financial System Transformation</span>
                   </h5>
                   <p className="text-sm text-muted-foreground mb-3">
                     Bitcoin and blockchain technology challenge traditional financial intermediaries
                     by enabling peer-to-peer transactions without trusted third parties.
                   </p>
                   <div className="p-3 bg-muted/50 rounded-md">
                     <h6 className="text-xs font-medium mb-2">Potential System Changes:</h6>
                     <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                       <li>
                         Banking sector may shift toward value-added services rather than basic
                         custody and transfers
                       </li>
                       <li>Reduction in counterparty risk throughout the financial system</li>
                       <li>Transparency increases as more transactions move to public ledgers</li>
                     </ul>
                   </div>
                 </div>
               </div>

               {/* Systemic Effects Table */}
               <div className="p-4 bg-background rounded-lg">
                 <h5 className="font-medium mb-3">Systemic Economic Effects</h5>
                 <div className="overflow-x-auto">
                   <table className="w-full text-sm">
                     <thead>
                       <tr className="bg-muted/50">
                         <th className="p-3 text-left font-medium border border-border">
                           Economic Domain
                         </th>
                         <th className="p-3 text-left font-medium border border-border">
                           Current System
                         </th>
                         <th className="p-3 text-left font-medium border border-border">
                           Bitcoin Impact
                         </th>
                         <th className="p-3 text-left font-medium border border-border">
                           Long-term Implications
                         </th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td className="p-3 border border-border">
                           <div className="font-medium">Monetary Policy</div>
                         </td>
                         <td className="p-3 border border-border">
                           <div className="text-xs">
                             Discretionary control by central banks with ability to expand money
                             supply indefinitely
                           </div>
                         </td>
                         <td className="p-3 border border-border">
                           <div className="text-xs">
                             Introduction of a fixed-supply alternative asset that cannot be inflated
                           </div>
                         </td>
                         <td className="p-3 border border-border">
                           <div className="text-xs text-muted-foreground">
                             Central banks may face competitive pressure to maintain monetary
                             stability or risk capital flight
                           </div>
                         </td>
                       </tr>
                       <tr className="bg-muted/20">
                         <td className="p-3 border border-border">
                           <div className="font-medium">Banking System</div>
                         </td>
                         <td className="p-3 border border-border">
                           <div className="text-xs">
                             Fractional reserve banking with systemic counterparty risk and deposit
                             insurance
                           </div>
                         </td>
                         <td className="p-3 border border-border">
                           <div className="text-xs">
                             Self-custody options that eliminate counterparty risk and prevent
                             fractional reserves
                           </div>
                         </td>
                         <td className="p-3 border border-border">
                           <div className="text-xs text-muted-foreground">
                             Banking sector may transform toward value-added services rather than
                             basic custody
                           </div>
                         </td>
                       </tr>
                       <tr>
                         <td className="p-3 border border-border">
                           <div className="font-medium">Global Trade</div>
                         </td>
                         <td className="p-3 border border-border">
                           <div className="text-xs">
                             Dominated by USD with political influence over SWIFT and international
                             payments
                           </div>
                         </td>
                         <td className="p-3 border border-border">
                           <div className="text-xs">
                             Neutral payment rail that cannot be politically influenced or weaponized
                           </div>
                         </td>
                         <td className="p-3 border border-border">
                           <div className="text-xs text-muted-foreground">
                             Reduced friction in international commerce and potentially less economic
                             sanctions power
                           </div>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </div>

               {/* Research & Resources */}
               <Card className="p-4 rounded-lg border border-border bg-card">
                 <h5 className="font-medium mb-4">Research & Resources</h5>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                     <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                     <div>
                       <a
                         href="https://www.imf.org/en/Publications/fintech-notes/Issues/2022/01/11/Behind-the-Scenes-of-Central-Bank-Digital-Currency-511856"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-sm hover:underline text-primary font-medium"
                       >
                         IMF: The Rise of Digital Money
                       </a>
                       <p className="text-xs text-muted-foreground mt-1">
                         Analysis of how Bitcoin and other digital currencies impact the global
                         financial system
                       </p>
                     </div>
                   </div>
                   <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                     <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                     <div>
                       <a
                         href="https://www.bis.org/publ/work765.htm"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-sm hover:underline text-primary font-medium"
                       >
                         BIS: Beyond the Doomsday Economics of Bitcoin
                       </a>
                       <p className="text-xs text-muted-foreground mt-1">
                         Central bank perspective on Bitcoin's economic limitations and potential
                       </p>
                     </div>
                   </div>
                   <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                     <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                     <div>
                       <a
                         href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3506748"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-sm hover:underline text-primary font-medium"
                       >
                         Bitcoin and Global Financial Stress
                       </a>
                       <p className="text-xs text-muted-foreground mt-1">
                         Research on Bitcoin's behavior during periods of global financial
                         instability
                       </p>
                     </div>
                   </div>
                   <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                     <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                     <div>
                       <a
                         href="https://www.worldbank.org/en/topic/financialinclusion"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-sm hover:underline text-primary font-medium"
                       >
                         World Bank: Financial Inclusion Overview
                       </a>
                       <p className="text-xs text-muted-foreground mt-1">
                         Data on global financial inclusion challenges that Bitcoin may address
                       </p>
                     </div>
                   </div>
                 </div>
               </Card>
             </div>
           </Card>

           {/* Satoshi's Perspective */}
           <Card className="p-6 bg-card rounded-lg border border-border">
             <h4 className="font-medium mb-4 text-lg">Satoshi's Perspective</h4>
             <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed space-y-3">
               <p>
                 "I've often wondered how Bitcoin's long-term economic impact will unfold. The
                 existing global financial system evolved over centuries, with many of its practices
                 and assumptions deeply embedded in our economic thinking. Bitcoin represents a
                 profound challenge to this status quo."
               </p>
               <p>
                 "One of the most interesting aspects will be seeing how a truly fixed-supply digital
                 asset interacts with traditional elastic money supplies. While economists have long
                 debated the merits of hard money versus flexible monetary policy, we've never had
                 the technology to actually implement a global, digital, fixed-supply asset that
                 could serve as a viable alternative to government money."
               </p>
               <p>
                 "Perhaps Bitcoin's greatest economic contribution won't be replacing the current
                 system entirely, but providing a check against its worst excesses. When citizens
                 have a choice to exit their national currency during periods of mismanagement, it
                 creates a powerful incentive for better monetary stewardship. In this way, Bitcoin
                 may ultimately improve all monetary systems through competition, even for those who
                 never use it directly."
               </p>
             </div>
           </Card>

           {/* Final Checkpoint */}
           <div className="mt-6 border-t border-border/40 pt-4">
             <VerifyCheckbox
               moduleId={moduleId}
               sectionId={sectionId}
               // Use sectionId in verificationId for consistency
               verificationId={`${sectionId}-conclusion`}
               label="I understand Bitcoin's potential economic impact."
             />
           </div>

        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
