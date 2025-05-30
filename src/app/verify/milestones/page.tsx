'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, History, Clock, Bitcoin, FileCode, Network, Shield, Zap, Cpu, Globe, Link as LinkIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Define milestone data with categories
const bitcoinMilestones = [
  {
    id: 1,
    title: "Genesis Block",
    date: "January 3, 2009",
    blockHeight: 0,
    blockHash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
    category: "genesis",
    description: "The first block in the Bitcoin blockchain, mined by Satoshi Nakamoto. It contains the famous Times headline about bank bailouts.",
    significance: "Marked the beginning of the Bitcoin network and cryptocurrency era.",
    txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
    additionalInfo: "The coinbase transaction contains the text: 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'",
    icon: Bitcoin
  },
  {
    id: 2,
    title: "First Bitcoin Transaction",
    date: "January 12, 2009",
    blockHeight: 170,
    blockHash: "00000000d1145790a8694403d4063f323d499e655c83426834d4ce2f8dd4a2ee",
    category: "transaction",
    description: "The first peer-to-peer Bitcoin transaction, sent from Satoshi Nakamoto to Hal Finney.",
    significance: "Proved that Bitcoin could be used as a medium of exchange between individuals.",
    txid: "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
    additionalInfo: "Hal Finney was the first person besides Satoshi to run Bitcoin software and receive Bitcoin.",
    icon: LinkIcon
  },
  {
    id: 3,
    title: "First Bitcoin Exchange Rate",
    date: "October 5, 2009",
    blockHeight: 24835,
    category: "economic",
    description: "New Liberty Standard publishes the first Bitcoin exchange rate: $1 = 1,309.03 BTC.",
    significance: "First time Bitcoin was given a monetary value against traditional currency.",
    additionalInfo: "The rate was calculated based on the cost of electricity to mine Bitcoin.",
    icon: Globe
  },
  {
    id: 4,
    title: "First Halving",
    date: "November 28, 2012",
    blockHeight: 210000,
    blockHash: "000000000000048b95347e83192f69cf0366076336c639f9b7228e9ba171342e",
    category: "halving",
    description: "The first Bitcoin halving event, reducing the block reward from 50 BTC to 25 BTC.",
    significance: "Demonstrated Bitcoin's deflationary monetary policy in action.",
    additionalInfo: "This event reduced Bitcoin's inflation rate by 50%, affecting miner economics.",
    icon: Bitcoin
  },
  {
    id: 5,
    title: "SegWit Activation",
    date: "August 24, 2017",
    blockHeight: 481824,
    blockHash: "0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893",
    category: "upgrade",
    description: "Segregated Witness (SegWit) activated on the Bitcoin network after BIP141 reached activation threshold.",
    significance: "Major protocol upgrade that fixed transaction malleability and increased block capacity.",
    additionalInfo: "SegWit separated signature data from transaction data, enabling Lightning Network development.",
    icon: FileCode
  },
  {
    id: 6,
    title: "Second Halving",
    date: "July 9, 2016",
    blockHeight: 420000,
    blockHash: "000000000000000002cce816c0ab2c5c269cb081896b7dcb34b8422d6b74ffa1",
    category: "halving",
    description: "The second Bitcoin halving event, reducing the block reward from 25 BTC to 12.5 BTC.",
    significance: "Further reduced Bitcoin's inflation rate, continuing the predetermined issuance schedule.",
    additionalInfo: "This halving occurred during a period of increasing institutional interest in Bitcoin.",
    icon: Bitcoin
  },
  {
    id: 7,
    title: "Lightning Network Mainnet Launch",
    date: "March 15, 2018",
    category: "layer2",
    description: "Lightning Labs released the first beta version of the Lightning Network daemon (lnd) for Bitcoin mainnet.",
    significance: "Enabled scalable, instant, low-fee Bitcoin transactions through a second-layer solution.",
    additionalInfo: "The Lightning Network was made possible by the SegWit upgrade and represents Bitcoin's most significant scaling solution.",
    icon: Zap
  },
  {
    id: 8,
    title: "Third Halving",
    date: "May 11, 2020",
    blockHeight: 630000,
    blockHash: "000000000000000000024bead8df69990852c202db0e0097c1a12ea637d7e96d",
    category: "halving",
    description: "The third Bitcoin halving event, reducing the block reward from 12.5 BTC to 6.25 BTC.",
    significance: "Occurred during the COVID-19 pandemic, highlighting Bitcoin's fixed monetary policy during global uncertainty.",
    additionalInfo: "This halving preceded a major bull market and institutional adoption phase.",
    icon: Bitcoin
  },
  {
    id: 9,
    title: "Taproot Activation",
    date: "November 14, 2021",
    blockHeight: 709632,
    blockHash: "0000000000000000000687bca986194dc2c1f949318629b44bb54ec0a94d8244",
    category: "upgrade",
    description: "The Taproot upgrade activated on the Bitcoin network, implementing BIPs 340-342.",
    significance: "Enhanced privacy, scalability, and smart contract capabilities through Schnorr signatures and MAST.",
    additionalInfo: "Taproot was Bitcoin's most significant technical upgrade since SegWit, activated through a Speedy Trial mechanism.",
    icon: Shield
  },
  {
    id: 10,
    title: "Fourth Halving",
    date: "April 20, 2024",
    blockHeight: 840000,
    blockHash: "00000000000000000002bf19f1b5196b12a6f4d9e2a2fa7e5d5e9b2d8b3b3f4a",
    category: "halving",
    description: "The fourth Bitcoin halving event, reducing the block reward from 6.25 BTC to 3.125 BTC.",
    significance: "Further reduced Bitcoin's inflation rate to below 1.7% annually, making it less inflationary than most fiat currencies.",
    additionalInfo: "This halving occurred during a period of increasing mainstream adoption and regulatory clarity.",
    icon: Bitcoin
  }
];

// Define categories for filtering
const categories = [
  { id: "all", name: "All Milestones", icon: History },
  { id: "genesis", name: "Genesis", icon: Bitcoin },
  { id: "transaction", name: "Transactions", icon: LinkIcon },
  { id: "halving", name: "Halvings", icon: Clock },
  { id: "upgrade", name: "Protocol Upgrades", icon: FileCode },
  { id: "layer2", name: "Layer 2 Solutions", icon: Zap },
  { id: "economic", name: "Economic Events", icon: Globe }
];

export default function MilestonesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);
  
  // Filter milestones based on selected category
  const filteredMilestones = selectedCategory === "all" 
    ? bitcoinMilestones 
    : bitcoinMilestones.filter(milestone => milestone.category === selectedCategory);

  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" asChild className="mr-4">
          <Link href="/verify">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Verification Tools
          </Link>
        </Button>
      </div>

      <div className="text-center mb-10">
        <Badge variant="outline" className="mb-4">
          <History className="mr-1 h-3 w-3" />
          Blockchain Milestones
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Bitcoin's Historical Journey</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore significant blocks and events that shaped Bitcoin's history and development.
        </p>
      </div>

      {/* Category Tabs */}
      <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {categories.map(category => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center">
              <category.icon className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.id === "all" ? "All" : category.name.split(" ")[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Timeline */}
      <div className="relative border-l border-primary/30 ml-4 md:ml-6 space-y-10 mb-16">
        {filteredMilestones.map((milestone, index) => (
          <div key={milestone.id} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-4 md:-left-6 mt-1.5 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <milestone.icon className="h-4 w-4 text-primary" />
            </div>
            
            {/* Timeline content */}
            <div className="ml-8 md:ml-10">
              <Card className={`border-l-4 ${selectedMilestone === milestone.id ? 'border-l-primary' : 'border-l-primary/30'} hover:border-l-primary transition-colors duration-300`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Clock className="mr-1 h-3 w-3" />
                        {milestone.date}
                        {milestone.blockHeight !== undefined && (
                          <span className="ml-3 flex items-center">
                            <Cpu className="mr-1 h-3 w-3" />
                            Block {milestone.blockHeight.toLocaleString()}
                          </span>
                        )}
                      </CardDescription>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setSelectedMilestone(selectedMilestone === milestone.id ? null : milestone.id)}
                      className="text-xs"
                    >
                      {selectedMilestone === milestone.id ? 'Less' : 'More'} Info
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  
                  {selectedMilestone === milestone.id && (
                    <div className="mt-4 space-y-4">
                      <div className="bg-muted/50 p-4 rounded-md">
                        <h4 className="font-medium mb-2 text-sm">Historical Significance</h4>
                        <p className="text-sm text-muted-foreground">{milestone.significance}</p>
                      </div>
                      
                      {milestone.additionalInfo && (
                        <div className="bg-muted/30 p-4 rounded-md">
                          <h4 className="font-medium mb-2 text-sm">Additional Information</h4>
                          <p className="text-sm text-muted-foreground">{milestone.additionalInfo}</p>
                        </div>
                      )}
                      
                      {milestone.blockHash && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Block Hash</h4>
                          <div className="bg-muted p-2 rounded text-xs font-mono overflow-x-auto">
                            {milestone.blockHash}
                          </div>
                        </div>
                      )}
                      
                      {milestone.txid && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Transaction ID</h4>
                          <div className="bg-muted p-2 rounded text-xs font-mono overflow-x-auto">
                            {milestone.txid}
                          </div>
                        </div>
                      )}
                      
                      {milestone.blockHeight !== undefined && (
                        <div className="mt-4">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            asChild
                            className="text-xs"
                          >
                            <Link href={`/verify/blocks?block=${milestone.blockHeight}`}>
                              View Block in Explorer
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Educational Content */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Understanding Bitcoin's Evolution</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-primary/10 hover:border-primary/20 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Protocol Upgrades</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Bitcoin evolves through soft forks - backward-compatible upgrades that allow nodes to opt in to new rules. 
                Major upgrades like SegWit and Taproot have enhanced Bitcoin's scalability, privacy, and smart contract capabilities 
                while maintaining its core principles of decentralization and security.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/10 hover:border-primary/20 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Halving Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Bitcoin's monetary policy includes a halving event approximately every four years (210,000 blocks), 
                where the block reward is cut in half. This predictable supply schedule creates a disinflationary 
                currency with a maximum supply of 21 million bitcoins, expected to be reached around the year 2140.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Alert className="bg-muted/50 border-muted mb-8">
          <History className="h-4 w-4" />
          <AlertTitle>Verifiable History</AlertTitle>
          <AlertDescription className="text-sm">
            Bitcoin's blockchain provides a transparent, immutable record of its entire history. Every transaction, 
            block, and network upgrade is permanently recorded and can be independently verified by anyone running a node.
          </AlertDescription>
        </Alert>
        
        <div className="bg-muted/30 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Bitcoin's Development Philosophy</h3>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Bitcoin development follows a conservative approach prioritizing security, decentralization, and backward compatibility. 
              Changes to the protocol require broad consensus among developers, miners, and users.
            </p>
            <p>
              This careful approach has allowed Bitcoin to maintain its security and reliability for over a decade, 
              while still evolving to meet new challenges and opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
