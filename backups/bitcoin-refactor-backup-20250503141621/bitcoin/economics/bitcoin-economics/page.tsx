'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ModuleContent } from '@/components/learn/shared/module-content';
import {
  Coins,
  Scale,
  LineChart,
  Landmark,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Lock,
  Globe,
  FolderTree,
  FileText,
  Calendar,
  BookOpen,
  ChevronRight,
  Info,
  Smartphone,
  CircleDollarSign,
} from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

// --- Visualizer Components --- 

// Interactive module explorer component
const ModuleExplorer = () => {
  const [activeModule, setActiveModule] = useState<string>('fundamentals');

  interface ModuleInfo {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    path: string;
    topics: string[];
  }

  const modules: ModuleInfo[] = [
    {
      id: 'fundamentals',
      title: 'Economic Fundamentals',
      description: "Core economic principles that underpin Bitcoin's design and functionality",
      icon: Scale,
      path: '/learn/bitcoin/economics/bitcoin-economics', // Adjusted path
      topics: [
        'Fixed supply and digital scarcity',
        'Properties of sound money',
        'Incentive alignment',
        'Network security economics',
        'Decentralized consensus',
      ],
    },
    {
      id: 'monetary',
      title: 'Monetary Policy',
      description: "How Bitcoin's monetary system works and differs from traditional currencies",
      icon: Landmark,
      path: '/learn/bitcoin/economics/monetary-policy', // Adjusted path
      topics: [
        'Predetermined issuance schedule',
        'Halving mechanism',
        'Comparison with fiat currencies',
        'Long-term issuance and inflation',
        'Mining rewards vs. transaction fees',
      ],
    },
    {
      id: 'market',
      title: 'Market Dynamics',
      description: 'How Bitcoin markets function, mature, and evolve over time',
      icon: LineChart,
      path: '/learn/bitcoin/economics/market-dynamics', // Adjusted path
      topics: [
        'Price discovery mechanisms',
        'Market maturity and liquidity',
        'Market cycles and psychology',
        'Trading infrastructure development',
        'Financial product evolution',
      ],
    },
    {
      id: 'game',
      title: 'Game Theory',
      description: 'Strategic interactions between network participants that maintain security',
      icon: CheckCircle,
      path: '/learn/bitcoin/economics/game-theory', // Adjusted path
      topics: [
        'Nash equilibrium in mining',
        'Attack vectors and costs',
        'Honest mining incentives',
        'Network defense mechanisms',
        "Long-term prisoner's dilemma",
      ],
    },
    {
      id: 'impact',
      title: 'Economic Impact',
      description: "Bitcoin's broader effects on global economic systems",
      icon: Globe,
      path: '/learn/bitcoin/economics/economic-impact', // Adjusted path
      topics: [
        'Financial inclusion and access',
        'Macroeconomic implications',
        'Global monetary evolution',
        'Banking system challenges',
        'National currency competition',
      ],
    },
  ];

  const currentModule = modules.find((m) => m.id === activeModule) || modules[0];

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium text-center mb-4">Bitcoin Economics Modules</h5>

      <div className="grid grid-cols-5 gap-1 mb-6">
        {modules.map((module) => (
          <button
            key={module.id}
            className={`p-2 transition-colors text-center ${
              activeModule === module.id
                ? 'bg-primary text-primary-foreground rounded-md'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md'
            }`}
            onClick={() => setActiveModule(module.id)}
          >
            <module.icon
              className={`h-5 w-5 mx-auto mb-1 ${
                activeModule === module.id ? 'text-primary-foreground' : 'text-primary'
              }`}
            />
            <span className="text-xs font-medium block truncate">{module.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      <div className="p-4 border border-border rounded-lg bg-muted/10">
        <div className="flex items-center mb-3">
          <currentModule.icon className="h-5 w-5 text-primary mr-2" />
          <h5 className="font-medium">{currentModule.title}</h5>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{currentModule.description}</p>

        <div className="space-y-2 mb-4">
          <h6 className="text-xs font-medium">Key Topics:</h6>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {currentModule.topics.map((topic, i) => (
              <li key={i} className="flex items-baseline text-xs text-muted-foreground">
                <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-right">
          <Link
            href={currentModule.path}
            className="inline-flex items-center text-xs text-primary hover:text-primary/80"
          >
            Explore {currentModule.title} <ChevronRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Interactive economic properties visualizer
const EconomicPropertiesVisualizer = () => {
  const [activeProperty, setActiveProperty] = useState<string>('scarcity');

  const properties = [
    {
      id: 'scarcity',
      title: 'Scarcity',
      icon: Lock,
      description:
        'Fixed supply of 21 million coins creates genuine digital scarcity, unlike any previous digital asset.',
      impact:
        'Ensures Bitcoin cannot be arbitrarily inflated, protecting its value from dilution through supply expansion.',
      comparison:
        "Fiat currencies can be created without limit, while even gold's supply increases by ~1.5% annually.",
      technical:
        'Enforced by the block subsidy halving mechanism and the 64 halving limit in the Bitcoin Core code.',
    },
    {
      id: 'divisibility',
      title: 'Divisibility',
      icon: FolderTree,
      description:
        'Each bitcoin can be divided into 100 million units (satoshis), enabling microtransactions and fine-grained value allocation.',
      impact: 'Allows Bitcoin to scale in value without losing utility for smaller transactions.',
      comparison:
        'Far more divisible than gold or fiat currencies (which typically divide only to 2 decimal places).',
      technical:
        'Implemented through 8 decimal places in the protocol, with potential for additional decimal places via Layer 2 solutions.',
    },
    {
      id: 'portability',
      title: 'Portability',
      icon: Smartphone,
      description:
        'Bitcoin can be transferred anywhere in the world via the internet, regardless of amount, with minimal physical constraints.',
      impact:
        'Enables global value transfer without the limitations of physical transportation or third-party permission.',
      comparison:
        'Superior to gold (heavy, difficult to transport) and even digital fiat (restricted by banking hours, jurisdictions).',
      technical:
        'Information packets transmitted through peer-to-peer network, with private keys providing access from any location.',
    },
    {
      id: 'fungibility',
      title: 'Fungibility',
      icon: Coins,
      description:
        'Each bitcoin (or satoshi) is functionally identical to any other at the protocol level, making units interchangeable.',
      impact:
        'Creates a neutral monetary base where value is consistent regardless of coin history.',
      comparison:
        'Similar to gold, but surveillance challenges fungibility at the social/market layer.',
      technical: 'All valid UTXOs are treated identically by the protocol, regardless of history.',
    },
    {
      id: 'durability',
      title: 'Durability',
      icon: Shield,
      description:
        'Bitcoin exists as information secured by cryptography and distributed across thousands of nodes worldwide.',
      impact:
        'Resistant to physical degradation, providing perfect durability as long as the network exists.',
      comparison:
        'Superior to both physical money (which degrades) and centralized digital money (vulnerable to single points of failure).',
      technical:
        'Redundant storage across decentralized network provides resilience against physical and digital threats.',
    },
    {
      id: 'verifiability',
      title: 'Verifiability',
      icon: CheckCircle,
      description:
        "Bitcoin's authenticity can be cryptographically verified by anyone running a full node, without trusting third parties.",
      impact:
        'Eliminates counterfeiting and enables trustless transactions without centralized verification.',
      comparison:
        'Surpasses both physical currencies (require specialized equipment) and digital fiat (requires trusted intermediaries).',
      technical:
        'Implemented through public-key cryptography and the ability to independently validate the entire blockchain history.',
    },
  ];

  const currentProperty = properties.find((p) => p.id === activeProperty) || properties[0];

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium text-center mb-4">Economic Properties of Bitcoin</h5>

      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {properties.map((property) => (
          <button
            key={property.id}
            className={`px-3 py-2 rounded-md transition-colors flex items-center gap-2 ${
              activeProperty === property.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveProperty(property.id)}
          >
            <property.icon className="h-4 w-4" />
            <span className="text-xs font-medium">{property.title}</span>
          </button>
        ))}
      </div>

      <div className="p-4 border border-border rounded-lg">
        <div className="flex items-center mb-3">
          <currentProperty.icon className="h-6 w-6 text-primary mr-2" />
          <h5 className="font-medium">{currentProperty.title}</h5>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{currentProperty.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 bg-muted/30 rounded-md">
            <h6 className="text-xs font-medium mb-1">Economic Impact</h6>
            <p className="text-xs text-muted-foreground">{currentProperty.impact}</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-md">
            <h6 className="text-xs font-medium mb-1">Comparison</h6>
            <p className="text-xs text-muted-foreground">{currentProperty.comparison}</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-md">
            <h6 className="text-xs font-medium mb-1">Technical Implementation</h6>
            <p className="text-xs text-muted-foreground">{currentProperty.technical}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Incentive alignment visualizer
const IncentiveAlignmentVisualizer = () => {
  const [activeParticipant, setActiveParticipant] = useState<string>('miners');

  const participants = [
    {
      id: 'miners',
      title: 'Miners',
      icon: Zap,
      role: 'Secure the network by creating valid blocks and extending the blockchain',
      incentives: [
        'Block rewards (new coins) according to fixed schedule',
        'Transaction fees from users competing for block space',
        'Maintaining system integrity to protect hardware investment',
      ],
      alignment:
        'Miners are incentivized to follow consensus rules and create valid blocks, as mining invalid blocks results in wasted electricity and rejected rewards.',
    },
    {
      id: 'nodes',
      title: 'Full Nodes',
      icon: Shield,
      role: 'Verify all transactions and blocks, enforce consensus rules, and relay valid information',
      incentives: [
        'Ability to verify transactions without trusting third parties',
        'Protection against rule changes that could devalue holdings',
        'Support of the system that secures their Bitcoin value',
      ],
      alignment:
        'Nodes enforce consensus rules autonomously, rejecting invalid transactions/blocks regardless of miner approval, creating a check on miner power.',
    },
    {
      id: 'users',
      title: 'Users/Holders',
      icon: Coins,
      role: 'Hold bitcoin as a store of value, medium of exchange, or investment; create transaction demand',
      incentives: [
        'Potential appreciation of scarce asset',
        'Freedom from third-party control over savings',
        'Access to global, permissionless payments',
      ],
      alignment:
        'Users create demand for block space through transactions and value through adoption, while being incentivized to support security and verification.',
    },
    {
      id: 'developers',
      title: 'Developers',
      icon: FileText,
      role: 'Maintain and improve protocol code, fix bugs, and propose enhancements',
      incentives: [
        'Personal bitcoin holdings appreciate with network improvements',
        'Professional reputation within the community',
        'Creating useful tools for personal use and others',
      ],
      alignment:
        'Developers are motivated to improve rather than harm the network, but have no special authority to change consensus rules, requiring broad community support.',
    },
  ];

  const currentParticipant =
    participants.find((p) => p.id === activeParticipant) || participants[0];

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium text-center mb-4">Network Incentive Alignment</h5>

      <div className="flex border border-border rounded-md mb-6 overflow-hidden">
        {participants.map((participant) => (
          <button
            key={participant.id}
            className={`flex-1 py-2 transition-colors flex flex-col items-center ${
              activeParticipant === participant.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/30 hover:bg-muted text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveParticipant(participant.id)}
          >
            <participant.icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{participant.title}</span>
          </button>
        ))}
      </div>

      <div className="p-4 border border-border rounded-lg">
        <div className="flex items-center mb-3">
          <currentParticipant.icon className="h-6 w-6 text-primary mr-2" />
          <h5 className="font-medium">{currentParticipant.title}</h5>
        </div>

        <div className="mb-4">
          <h6 className="text-xs font-medium mb-1">Network Role:</h6>
          <p className="text-sm text-muted-foreground">{currentParticipant.role}</p>
        </div>

        <div className="mb-4">
          <h6 className="text-xs font-medium mb-1">Key Incentives:</h6>
          <ul className="space-y-2">
            {currentParticipant.incentives.map((incentive, i) => (
              <li key={i} className="flex items-baseline text-xs text-muted-foreground">
                <ArrowRight className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                <span>{incentive}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-3 bg-primary/5 rounded-md">
          <h6 className="text-xs font-medium mb-1">System Alignment:</h6>
          <p className="text-xs text-muted-foreground">{currentParticipant.alignment}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Component --- 

export default function BitcoinEconomics() {
  return (
    <ModuleContent
      moduleId="economics" // Corrected moduleId
      sectionId="bitcoin-economics"
      moduleTitle="Bitcoin Economics"
      moduleDescription="Economic principles of Bitcoin"
      difficulty="Intermediate"
      checkpoints={1} 
    >
      <div className="space-y-8">
        <SatoshiQuote
          quote="As a thought experiment, imagine there was a base metal as scarce as gold but with the following properties: boring grey in colour, not a good conductor of electricity, not particularly strong [...], not useful for any practical or ornamental purpose [...] and one special, magical property: can be transported over a communications channel."
          date="August 27, 2010"
          source="BitcoinTalk Forum"
          sourceUrl="https://bitcointalk.org/index.php?topic=583.msg11405#msg11405"
        />

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "When I designed Bitcoin, I wasn't just creating a digital payment system—I was
              attempting to solve a fundamental economic problem that has plagued monetary systems
              throughout history: the inability to create scarcity in the digital realm and the
              resulting vulnerability to centralized control and manipulation.
            </p>
            <p className="mt-3">
              The traditional approach to digital value transfer has been to create centralized
              ledgers and rely on trusted third parties. But this arrangement puts immense power
              in the hands of those who control the ledger. In contrast, Bitcoin's decentralized
              architecture distributes this power broadly, creating a system where no single
              entity can manipulate the monetary policy.
            </p>
            <p className="mt-3">
              I took inspiration from both Austrian economics and the history of gold-backed
              currencies. The key insight was that money functions best when its supply is
              predictable and resistant to arbitrary expansion. Bitcoin's fixed issuance schedule
              wasn't just a technical parameter—it was a direct response to the increasing
              monetary expansion of the post-2008 financial world.
            </p>
            <p className="mt-3">
              What's fascinating is how Bitcoin's economic properties emerge from simple rules and
              aligned incentives rather than top-down control. The system I designed doesn't
              require participants to be altruistic or moral; it simply makes honest behavior more
              profitable than dishonest behavior. This market-based approach to security is what
              enables Bitcoin to function without central administrators."
            </p>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">Bitcoin Economics Overview</h4>
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              Bitcoin represents a novel economic system with unique properties that differentiate
              it from both traditional currencies and previous digital payment systems.
              Understanding these economic principles is essential to grasping Bitcoin's value
              proposition and potential impact on the global financial system.
            </p>

            <ModuleExplorer />

            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-sm">
              <h5 className="font-medium mb-2 flex items-center">
                <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                Bitcoin's Economic Innovation
              </h5>
              <div className="italic text-muted-foreground">
                <p>
                  "Bitcoin's most profound innovation isn't technological—it's economic. For the
                  first time in history, we have a monetary system with a perfectly predictable
                  supply schedule that doesn't require trust in any central institution. This
                  creates an entirely new paradigm for how money can function in a digital age.
                </p>
                <p className="mt-3">
                  When examining Bitcoin through an economic lens, we must understand that its
                  properties challenge many assumptions of traditional monetary theory,
                  particularly around the necessity of monetary flexibility and central
                  coordination. Bitcoin demonstrates that a decentralized system with fixed rules
                  can create a functional monetary network without requiring trusted third parties
                  or human decision-makers."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">Economic Properties</h4>
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              Bitcoin has specific economic properties that emerge from its design. These
              properties make it unique among both digital assets and traditional currencies,
              creating a new category of money with characteristics previously impossible to
              combine.
            </p>

            <EconomicPropertiesVisualizer />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-background rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <h5 className="font-medium">Historical Context</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Bitcoin emerged during the 2008 financial crisis, when unprecedented monetary
                  expansion raised questions about the stability of the global financial system.
                  This context shaped its focus on predictability and resistance to centralized
                  control.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start text-xs gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5" />
                    <span>Genesis block includes reference to bank bailouts</span>
                  </div>
                  <div className="flex items-start text-xs gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5" />
                    <span>Designed as an alternative to fractional reserve banking</span>
                  </div>
                  <div className="flex items-start text-xs gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5" />
                    <span>Implemented principles of sound money in digital form</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-background rounded-lg">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-5 w-5 text-primary mr-2" />
                  <h5 className="font-medium">Economic Schools of Thought</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Bitcoin's design shows influence from several economic traditions, particularly
                  the Austrian School's emphasis on sound money and skepticism of centralized
                  monetary control.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start text-xs gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5" />
                    <span>Austrian economics: focus on scarcity and market-determined value</span>
                  </div>
                  <div className="flex items-start text-xs gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5" />
                    <span>Monetarist influence: predictable supply growth rules</span>
                  </div>
                  <div className="flex items-start text-xs gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5" />
                    <span>Game theory: incentive mechanisms for decentralized consensus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">Incentive Structure</h4>
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              Bitcoin's security and functionality depend on a carefully balanced system of
              economic incentives that align the interests of various network participants. These
              incentives create an emergent order without requiring central coordination.
            </p>

            <IncentiveAlignmentVisualizer />

            <div className="p-4 bg-background rounded-lg">
              <h5 className="font-medium mb-3 flex items-center">
                <CircleDollarSign className="h-5 w-5 text-primary mr-2" />
                <span>Network-wide Nash Equilibrium</span>
              </h5>
              <p className="text-sm text-muted-foreground mb-3">
                Bitcoin's incentive structure creates a Nash equilibrium where following the
                consensus rules is the most profitable strategy for all participants. This makes
                the system self-enforcing without requiring trust in any central authority.
              </p>
              <div className="p-3 bg-muted/30 rounded-md text-xs">
                <p className="font-medium mb-1">Emergent Properties:</p>
                <p className="text-muted-foreground">
                  The interaction of miners, nodes, users, and developers creates a robust,
                  decentralized system where economically rational behavior by self-interested
                  participants leads to overall system integrity and security. This demonstrates
                  how complex, functional monetary systems can emerge from simple rules and
                  aligned incentives without central coordination.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-card rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">Satoshi's Perspective</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "What makes the economics of Bitcoin truly fascinating is how its various components
              balance and reinforce each other. The proof-of-work mining system might seem
              wasteful in isolation, but within the full context of Bitcoin's design, it creates
              the only known mechanism for distributing a digital asset without a central issuer
              while simultaneously securing the network.
            </p>
            <p className="mt-3">
              I deliberately kept the economic rules simple and predictable. Complex monetary
              policies require human judgment, which inevitably introduces politics and social
              capture. Bitcoin's rigidity—often criticized by mainstream economists—is actually
              its greatest strength. Users can verify the rules themselves and know they won't
              change arbitrarily.
            </p>
            <p className="mt-3">
              The beauty of this system is that it doesn't require everyone to understand the
              complex interplay of incentives that make it work. People participate for their own
              purposes—miners to earn revenue, users to make payments or store value, developers
              to solve technical challenges. Yet through these individual actions, a resilient
              monetary network emerges.
            </p>
            <p className="mt-3">
              While I focused primarily on creating a functional system, I recognize that
              Bitcoin's economic implications extend far beyond its technical operation. By
              introducing true digital scarcity and removing the need for trusted third parties,
              Bitcoin has started a profound shift in how we think about money, trust, and
              economic organization in the digital age."
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-border/40 pt-4">
          <VerifyCheckbox
            moduleId="economics" // Corrected moduleId
            sectionId="bitcoin-economics" // Ensure this matches config
            verificationId="bitcoin-economics-complete" // Use a unique ID for this checkpoint
            label="I understand Bitcoin's economic principles"
          />
        </div>
      </div>

      {/* Verify Checkbox will be added later */}
    </ModuleContent>
  );
}
