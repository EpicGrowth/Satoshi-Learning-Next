'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Bitcoin, Calculator, ChevronDown, ChevronUp, Clock, Info, LineChart, Coins, Calendar, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Bitcoin mining reward constants
const INITIAL_BLOCK_REWARD = 50; // BTC
const HALVING_INTERVAL = 210000; // blocks
const BLOCKS_PER_DAY = 144; // ~10 minutes per block
const TOTAL_SUPPLY = 21000000; // BTC

// Educational content about Bitcoin mining rewards
const educationalContent = [
  {
    title: "Block Rewards",
    content: "Block rewards are new bitcoins distributed to miners who successfully mine a block. This is how new bitcoins are created and enter circulation."
  },
  {
    title: "Halving Events",
    content: "Approximately every four years (210,000 blocks), the block reward is cut in half. This 'halving' mechanism ensures Bitcoin's scarcity and controls its inflation rate."
  },
  {
    title: "Fixed Supply",
    content: "Bitcoin has a maximum supply of 21 million coins. Due to the halving schedule, the last bitcoin will be mined around the year 2140."
  }
];

// Historical halving events
const halvingEvents = [
  { number: 1, date: "November 28, 2012", blockHeight: 210000, rewardAfter: 25 },
  { number: 2, date: "July 9, 2016", blockHeight: 420000, rewardAfter: 12.5 },
  { number: 3, date: "May 11, 2020", blockHeight: 630000, rewardAfter: 6.25 },
  { number: 4, date: "April 2024", blockHeight: 840000, rewardAfter: 3.125, future: true },
  { number: 5, date: "~2028", blockHeight: 1050000, rewardAfter: 1.5625, future: true },
];

export default function MiningRewardsPage() {
  const [blockHeight, setBlockHeight] = useState<number>(840000);
  const [blockReward, setBlockReward] = useState<number>(0);
  const [totalBitcoinMined, setTotalBitcoinMined] = useState<number>(0);
  const [percentageMined, setPercentageMined] = useState<number>(0);
  const [nextHalvingBlock, setNextHalvingBlock] = useState<number>(0);
  const [blocksUntilHalving, setBlocksUntilHalving] = useState<number>(0);
  const [daysUntilHalving, setDaysUntilHalving] = useState<number>(0);
  const [currentHalvingEra, setCurrentHalvingEra] = useState<number>(0);
  const [customBlockHeight, setCustomBlockHeight] = useState<string>("");
  const [viewMode, setViewMode] = useState<'calculator' | 'timeline'>('calculator');
  const [chartData, setChartData] = useState<any[]>([]);

  // Calculate mining rewards based on block height
  useEffect(() => {
    // Calculate which halving era we're in
    const era = Math.floor(blockHeight / HALVING_INTERVAL);
    setCurrentHalvingEra(era);
    
    // Calculate block reward
    const reward = INITIAL_BLOCK_REWARD / Math.pow(2, era);
    setBlockReward(reward);
    
    // Calculate next halving block
    const next = (era + 1) * HALVING_INTERVAL;
    setNextHalvingBlock(next);
    
    // Calculate blocks until next halving
    const blocksRemaining = next - blockHeight;
    setBlocksUntilHalving(blocksRemaining);
    
    // Calculate days until next halving (approximate)
    setDaysUntilHalving(blocksRemaining / BLOCKS_PER_DAY);
    
    // Calculate total Bitcoin mined so far
    let totalMined = 0;
    
    // Add full eras
    for (let i = 0; i < era; i++) {
      totalMined += HALVING_INTERVAL * (INITIAL_BLOCK_REWARD / Math.pow(2, i));
    }
    
    // Add current era partial
    const blocksInCurrentEra = blockHeight - (era * HALVING_INTERVAL);
    totalMined += blocksInCurrentEra * reward;
    
    setTotalBitcoinMined(totalMined);
    setPercentageMined((totalMined / TOTAL_SUPPLY) * 100);
    
    // Generate chart data for visualization
    generateChartData();
  }, [blockHeight]);
  
  // Generate data for the emission chart
  const generateChartData = () => {
    const data = [];
    const maxBlocks = 6930000; // Approximately when 99% of all Bitcoin will be mined
    const interval = maxBlocks / 20; // 20 data points
    
    for (let i = 0; i <= maxBlocks; i += interval) {
      const era = Math.floor(i / HALVING_INTERVAL);
      let totalMined = 0;
      
      // Add full eras
      for (let j = 0; j < era; j++) {
        totalMined += HALVING_INTERVAL * (INITIAL_BLOCK_REWARD / Math.pow(2, j));
      }
      
      // Add current era partial
      const blocksInCurrentEra = i - (era * HALVING_INTERVAL);
      totalMined += blocksInCurrentEra * (INITIAL_BLOCK_REWARD / Math.pow(2, era));
      
      // Calculate year (approximate)
      const year = 2009 + (i / BLOCKS_PER_DAY / 365);
      
      data.push({
        blockHeight: i,
        year: Math.floor(year),
        bitcoinMined: totalMined,
        percentageMined: (totalMined / TOTAL_SUPPLY) * 100
      });
    }
    
    setChartData(data);
  };
  
  // Handle custom block height input
  const handleCustomBlockHeight = () => {
    const height = parseInt(customBlockHeight);
    if (!isNaN(height) && height >= 0) {
      setBlockHeight(height);
    }
  };
  
  // Format large numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

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
          <Bitcoin className="mr-1 h-3 w-3" />
          Mining Reward Calculator
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Bitcoin Mining Rewards</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Calculate block rewards, visualize the halving schedule, and understand Bitcoin's emission curve.
        </p>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className="flex border rounded-lg overflow-hidden">
          <Button 
            variant={viewMode === 'calculator' ? 'default' : 'ghost'} 
            className="rounded-none"
            onClick={() => setViewMode('calculator')}
          >
            <Calculator className="mr-2 h-4 w-4" />
            Reward Calculator
          </Button>
          <Button 
            variant={viewMode === 'timeline' ? 'default' : 'ghost'} 
            className="rounded-none"
            onClick={() => setViewMode('timeline')}
          >
            <LineChart className="mr-2 h-4 w-4" />
            Halving Timeline
          </Button>
        </div>
      </div>

      {viewMode === 'calculator' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 h-5 w-5 text-primary" />
                Block Reward Calculator
              </CardTitle>
              <CardDescription>
                Calculate the mining reward for any block height
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <Label htmlFor="blockHeight">Block Height</Label>
                    <span className="text-sm text-muted-foreground">{formatNumber(blockHeight)}</span>
                  </div>
                  <Slider
                    id="blockHeight"
                    min={0}
                    max={6930000}
                    step={HALVING_INTERVAL / 10}
                    value={[blockHeight]}
                    onValueChange={(value) => setBlockHeight(value[0])}
                    className="mb-4"
                  />
                  <div className="flex items-end gap-4">
                    <div className="flex-1">
                      <Label htmlFor="customBlockHeight">Custom Block Height</Label>
                      <Input
                        id="customBlockHeight"
                        type="number"
                        placeholder="Enter block height"
                        value={customBlockHeight}
                        onChange={(e) => setCustomBlockHeight(e.target.value)}
                        min={0}
                      />
                    </div>
                    <Button onClick={handleCustomBlockHeight}>Calculate</Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Bitcoin className="h-5 w-5 mr-2 text-primary" />
                      <h3 className="font-medium">Block Reward</h3>
                    </div>
                    <div className="text-3xl font-bold">{blockReward.toFixed(8)} BTC</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Reward for mining block #{formatNumber(blockHeight)}
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Coins className="h-5 w-5 mr-2 text-primary" />
                      <h3 className="font-medium">Total Bitcoin Mined</h3>
                    </div>
                    <div className="text-3xl font-bold">{totalBitcoinMined.toFixed(2)} BTC</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {percentageMined.toFixed(2)}% of total supply
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      <h3 className="font-medium">Halving Era</h3>
                    </div>
                    <div className="text-3xl font-bold">#{currentHalvingEra + 1}</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {currentHalvingEra === 0 ? "Genesis Era" : `After halving #${currentHalvingEra}`}
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      <h3 className="font-medium">Next Halving</h3>
                    </div>
                    <div className="text-3xl font-bold">{formatNumber(blocksUntilHalving)}</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      blocks (~{Math.round(daysUntilHalving)} days) until block #{formatNumber(nextHalvingBlock)}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="mr-2 h-5 w-5 text-primary" />
                Bitcoin Emission
              </CardTitle>
              <CardDescription>
                Understanding Bitcoin's supply curve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative pt-8 pb-4 px-2 h-[300px] flex items-end">
                {chartData.map((point, index) => {
                  const height = (point.percentageMined / 100) * 250;
                  const width = 100 / chartData.length;
                  return (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div 
                            className="bg-primary/80 hover:bg-primary cursor-pointer transition-colors"
                            style={{ 
                              height: `${height}px`, 
                              width: `${width}%`,
                              marginRight: '1px'
                            }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="text-xs">
                            <div>Year: {point.year}</div>
                            <div>Block: {formatNumber(point.blockHeight)}</div>
                            <div>BTC Mined: {point.bitcoinMined.toFixed(2)}</div>
                            <div>{point.percentageMined.toFixed(2)}% of supply</div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
                
                {/* Current block marker */}
                <div 
                  className="absolute bottom-0 w-0.5 bg-red-500 h-[300px]"
                  style={{ 
                    left: `${(blockHeight / 6930000) * 100}%`,
                    zIndex: 10
                  }}
                />
                
                {/* Halving markers */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((halvingNum) => (
                  <div 
                    key={halvingNum}
                    className="absolute bottom-0 w-0.5 bg-yellow-500/50 h-[300px]"
                    style={{ 
                      left: `${(halvingNum * HALVING_INTERVAL / 6930000) * 100}%`,
                      zIndex: 5
                    }}
                  />
                ))}
                
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground">
                  <div>100%</div>
                  <div>75%</div>
                  <div>50%</div>
                  <div>25%</div>
                  <div>0%</div>
                </div>
                
                {/* X-axis labels */}
                <div className="absolute bottom-[-20px] w-full flex justify-between text-xs text-muted-foreground">
                  <div>2009</div>
                  <div>2024</div>
                  <div>2040</div>
                  <div>2060</div>
                  <div>2080</div>
                  <div>2100+</div>
                </div>
              </div>
              
              <div className="mt-8 space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary mr-2" />
                  <span>Bitcoin mined over time</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 mr-2" />
                  <span>Current block position</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500/50 mr-2" />
                  <span>Halving events</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              Bitcoin Halving Timeline
            </CardTitle>
            <CardDescription>
              Historical and future Bitcoin halving events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative border-l-2 border-primary/30 pl-8 py-4 ml-4">
              {halvingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`mb-12 relative ${event.future ? 'opacity-70' : ''}`}
                >
                  {/* Timeline node */}
                  <div 
                    className={`absolute left-[-37px] w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                      event.blockHeight <= blockHeight 
                        ? 'bg-primary border-primary text-white' 
                        : 'bg-background border-primary/50'
                    }`}
                  >
                    {event.number}
                  </div>
                  
                  {/* Content */}
                  <div className={`p-6 rounded-lg border ${
                    event.blockHeight <= blockHeight 
                      ? 'border-primary/30 bg-primary/5' 
                      : 'border-muted bg-muted/10'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Zap className="h-5 w-5 mr-2 text-primary" />
                        Halving #{event.number}
                        {event.future && (
                          <Badge variant="outline" className="ml-2 text-xs">Future</Badge>
                        )}
                      </h3>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setBlockHeight(event.blockHeight)}
                      >
                        View Details
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Date</div>
                        <div className="font-medium">{event.date}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Block Height</div>
                        <div className="font-medium">{formatNumber(event.blockHeight)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Reward After</div>
                        <div className="font-medium">{event.rewardAfter} BTC</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-sm">
                      {event.number === 1 && (
                        <p>The first Bitcoin halving reduced the block reward from 50 BTC to 25 BTC.</p>
                      )}
                      {event.number === 2 && (
                        <p>The second halving occurred in 2016, reducing the block reward to 12.5 BTC.</p>
                      )}
                      {event.number === 3 && (
                        <p>The third halving took place during the COVID-19 pandemic, cutting the reward to 6.25 BTC.</p>
                      )}
                      {event.number === 4 && (
                        <p>The fourth halving is expected in April 2024, which will reduce the block reward to 3.125 BTC.</p>
                      )}
                      {event.number === 5 && (
                        <p>The fifth halving is projected to occur around 2028, further reducing the block reward to 1.5625 BTC.</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Future halvings indicator */}
              <div className="absolute bottom-0 left-[-8px]">
                <div className="w-4 h-10 flex flex-col items-center">
                  <div className="w-1 h-1 rounded-full bg-primary mb-1"></div>
                  <div className="w-1 h-1 rounded-full bg-primary mb-1"></div>
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                </div>
              </div>
              
              {/* Final halving (approximate) */}
              <div className="mb-8 relative opacity-50">
                <div className="absolute left-[-37px] w-6 h-6 rounded-full flex items-center justify-center border-2 bg-background border-primary/50">
                  33
                </div>
                
                <div className="p-6 rounded-lg border border-muted bg-muted/10">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    Final Halving
                    <Badge variant="outline" className="ml-2 text-xs">~2136</Badge>
                  </h3>
                  
                  <div className="mt-4 text-sm">
                    <p>The final Bitcoin halving is expected to occur around the year 2136 at block height ~6,930,000. After this point, the block reward will be less than 1 satoshi (0.00000001 BTC), effectively ending the block subsidy. Miners will then rely entirely on transaction fees.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Educational content section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Understanding Bitcoin Mining Rewards</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {educationalContent.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
          
          <AccordionItem value="item-advanced">
            <AccordionTrigger className="text-lg font-medium">
              The Mathematics of Bitcoin Supply
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p className="mb-4">
                Bitcoin's total supply is capped at 21 million coins. This is determined by the sum of a geometric series:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg font-mono text-center mb-4">
                50 × 210,000 × (1 + 1/2 + 1/4 + 1/8 + ... + 1/2^n)
              </div>
              <p className="mb-4">
                As n approaches infinity, this sum approaches 100 × 210,000 = 21,000,000 BTC.
              </p>
              <p>
                In practice, due to rounding and some early mining quirks, the actual total will be slightly less than 21 million.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {/* Bitcoin emission visualization */}
        <div className="mt-12 border rounded-lg p-6 bg-muted/30">
          <h3 className="text-lg font-semibold mb-4">Bitcoin Emission Schedule</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-3">Key Characteristics</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                  <span><strong>Predictable Supply:</strong> Bitcoin's issuance is mathematically determined and cannot be altered without network consensus.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                  <span><strong>Diminishing Inflation:</strong> Bitcoin's inflation rate decreases with each halving, approaching zero over time.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                  <span><strong>Scarcity Mechanism:</strong> The halving schedule creates increasing scarcity, which has historically preceded price appreciation cycles.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                  <span><strong>Long-term Mining Incentives:</strong> As block rewards decrease, transaction fees are expected to become the primary incentive for miners.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Emission By Era</h4>
              <div className="space-y-4">
                <div className="bg-background p-3 rounded border">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">First 4 Years (2009-2012)</span>
                    <span className="text-sm">10.5M BTC</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                
                <div className="bg-background p-3 rounded border">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Second 4 Years (2013-2016)</span>
                    <span className="text-sm">5.25M BTC</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                
                <div className="bg-background p-3 rounded border">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Third 4 Years (2017-2020)</span>
                    <span className="text-sm">2.625M BTC</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '12.5%' }}></div>
                  </div>
                </div>
                
                <div className="bg-background p-3 rounded border">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Fourth 4 Years (2021-2024)</span>
                    <span className="text-sm">1.31M BTC</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '6.25%' }}></div>
                  </div>
                </div>
                
                <div className="bg-background p-3 rounded border">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Remaining (2025+)</span>
                    <span className="text-sm">~1.31M BTC</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '6.25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
