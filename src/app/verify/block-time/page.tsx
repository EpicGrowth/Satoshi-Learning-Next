'use client';

import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Info, 
  ArrowLeft, 
  Layers, 
  Timer, 
  TrendingUp, 
  BarChart3,
  Calendar,
  HelpCircle,
  ArrowUpDown,
  ServerIcon 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

export default function BlockTimePage() {
  const [blockHeight, setBlockHeight] = useState<number>(780000);
  const [blockRange, setBlockRange] = useState<number>(2016);
  const [timeScale, setTimeScale] = useState<string>('year');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('analyzer');

  // Sample data for demonstration
  // Initial data - must be the same on server and client to avoid hydration errors
  const initialBlockTimeData = {
    averageBlockTime: 9.8, // minutes
    minBlockTime: 0.5, // minutes
    maxBlockTime: 89.2, // minutes
    currentDifficulty: '71.12 T',
    nextAdjustment: '+2.3%',
    blocksUntilAdjustment: 1243,
    timeUntilAdjustment: '8 days, 14 hours',
    hashrate: '512.4 EH/s',
    historicalAverages: [
      { period: '2009', value: 7.5 },
      { period: '2010', value: 8.2 },
      { period: '2011', value: 9.1 },
      { period: '2012', value: 8.7 },
      { period: '2013', value: 9.3 },
      { period: '2014', value: 9.5 },
      { period: '2015', value: 9.6 },
      { period: '2016', value: 9.8 },
      { period: '2017', value: 10.1 },
      { period: '2018', value: 9.9 },
      { period: '2019', value: 9.8 },
      { period: '2020', value: 9.9 },
      { period: '2021', value: 9.7 },
      { period: '2022', value: 9.8 },
      { period: '2023', value: 9.9 },
      { period: '2024', value: 9.8 },
    ],
    difficultyAdjustments: [
      { date: '2024-01-01', change: '+1.2%' },
      { date: '2024-01-14', change: '-0.5%' },
      { date: '2024-01-28', change: '+3.1%' },
      { date: '2024-02-11', change: '+2.8%' },
      { date: '2024-02-25', change: '+1.5%' },
      { date: '2024-03-10', change: '+0.7%' },
      { date: '2024-03-24', change: '+2.1%' },
      { date: '2024-04-07', change: '+1.9%' },
      { date: '2024-04-21', change: '+0.3%' },
      { date: '2024-05-05', change: '+1.7%' },
      { date: '2024-05-19', change: '+2.3%' },
    ],
  };
  
  // State to hold the current data
  const [blockTimeData, setBlockTimeData] = useState(initialBlockTimeData);
  
  // State to track if data has been updated
  const [dataUpdated, setDataUpdated] = useState(false);

  const handleBlockHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setBlockHeight(value);
    }
  };

  const handleRangeChange = (value: number[]) => {
    setBlockRange(value[0]);
  };

  // Client-side only data generation to avoid hydration errors
  useEffect(() => {
    // This will only run on the client, avoiding hydration mismatches
    const generateData = () => {
      // No-op during initial render to avoid hydration errors
    };
    
    generateData();
  }, []);
  
  const handleAnalyze = () => {
    setIsLoading(true);
    setDataUpdated(false);
    
    // Simulate API call - this only runs on client interaction, so it's safe
    setTimeout(() => {
      // Use a deterministic seed based on inputs to generate consistent values
      const seed = blockHeight + blockRange;
      
      // Generate new data based on block height and range (using a more deterministic approach)
      const newAverageBlockTime = (9 + (seed % 10) / 5).toFixed(1);
      const newMinBlockTime = (0.2 + (seed % 8) / 10).toFixed(1);
      const newMaxBlockTime = (60 + (seed % 40)).toFixed(1);
      
      // Calculate new difficulty based on block height
      const difficultyBase = 70 + (blockHeight / 100000);
      const newDifficulty = `${difficultyBase.toFixed(2)} T`;
      
      // Calculate new adjustment based on time scale
      const adjustmentValue = ((seed % 10) / 2 - 1).toFixed(1);
      const newAdjustment = parseFloat(adjustmentValue) > 0 ? `+${adjustmentValue}%` : `${adjustmentValue}%`;
      
      // Update block time data with new values
      setBlockTimeData({
        ...initialBlockTimeData,
        averageBlockTime: parseFloat(newAverageBlockTime),
        minBlockTime: parseFloat(newMinBlockTime),
        maxBlockTime: parseFloat(newMaxBlockTime),
        currentDifficulty: newDifficulty,
        nextAdjustment: newAdjustment,
        blocksUntilAdjustment: 2016 - (blockHeight % 2016),
        timeUntilAdjustment: `${Math.floor(seed % 14)} days, ${Math.floor(seed % 24)} hours`,
        hashrate: `${(500 + (seed % 100)).toFixed(1)} EH/s`,
      });
      
      setDataUpdated(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/verify">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Verification Tools
          </Button>
        </Link>
      </div>

      <div className="text-center mb-10">
        <Badge variant="outline" className="mb-4">
          <Clock className="mr-1 h-3 w-3" />
          Block Time Analysis
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Bitcoin Block Time Analyzer</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Analyze Bitcoin block time intervals and difficulty adjustments throughout the blockchain history.
        </p>
      </div>

      <Tabs defaultValue="analyzer" className="mb-8" onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="analyzer">Block Time Analyzer</TabsTrigger>
          <TabsTrigger value="education">Learn About Block Time</TabsTrigger>
        </TabsList>

        <TabsContent value="analyzer" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 border-2 border-muted/50 shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Layers className="h-5 w-5 mr-2 text-primary" />
                Analysis Parameters
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center">
                      Starting Block Height
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-1 text-muted-foreground hover:text-primary transition-colors" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">The block height to start analysis from. Higher values represent more recent blocks.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <Badge variant="outline" className="bg-primary/5 font-mono">{blockHeight.toLocaleString()}</Badge>
                  </div>
                  <Input
                    type="number"
                    value={blockHeight}
                    onChange={handleBlockHeightChange}
                    className="font-mono"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center">
                      Block Range
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-1 text-muted-foreground hover:text-primary transition-colors" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">Number of blocks to analyze. A full difficulty adjustment period is 2,016 blocks.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <Badge variant="outline" className="bg-primary/5 font-mono">{blockRange.toLocaleString()}</Badge>
                  </div>
                  <Slider
                    defaultValue={[blockRange]}
                    max={2016}
                    min={144}
                    step={144}
                    onValueChange={handleRangeChange}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>144 blocks (1 day)</span>
                    <span>2,016 blocks (2 weeks)</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center">
                      Time Scale
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-1 text-muted-foreground hover:text-primary transition-colors" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">The time period to group historical data by.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <Badge variant="outline" className="bg-primary/5 capitalize">{timeScale}</Badge>
                  </div>
                  <Select
                    value={timeScale}
                    onValueChange={setTimeScale}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select time scale" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">Month</SelectItem>
                      <SelectItem value="quarter">Quarter</SelectItem>
                      <SelectItem value="year">Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleAnalyze} 
                  className="w-full mt-4 text-primary-foreground" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Timer className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Analyze Block Times
                    </>
                  )}
                </Button>
              </div>
            </Card>

            <Card className="p-6 md:col-span-2 border-2 border-muted/50 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Analysis Results
                </h2>
                {dataUpdated && (
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 animate-pulse">
                    Updated
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-muted/20 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Average Block Time</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{blockTimeData.averageBlockTime}</span>
                    <span className="text-sm ml-1">minutes</span>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <span>Range: </span>
                    <span className="font-mono">{blockTimeData.minBlockTime} - {blockTimeData.maxBlockTime} min</span>
                  </div>
                </div>

                <div className="bg-muted/20 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Current Difficulty</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold font-mono">{blockTimeData.currentDifficulty}</span>
                  </div>
                  <div className="mt-2 text-xs flex justify-between">
                    <span className="text-muted-foreground">Next: </span>
                    <Badge variant="outline" className={blockTimeData.nextAdjustment.startsWith('+') ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}>
                      {blockTimeData.nextAdjustment}
                    </Badge>
                    <span className="text-muted-foreground ml-2">in {blockTimeData.blocksUntilAdjustment} blocks</span>
                  </div>
                </div>

                <div className="bg-muted/20 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Network Hashrate</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold font-mono">{blockTimeData.hashrate}</span>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <span>Estimated time until adjustment: </span>
                    <span className="font-mono">{blockTimeData.timeUntilAdjustment}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3">Block Time Range</h3>
                  <div className="h-8 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-red-500/20 rounded-lg relative">
                    <div className="absolute top-full mt-1 left-0 text-xs text-muted-foreground">0 min</div>
                    <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">10 min (target)</div>
                    <div className="absolute top-full mt-1 right-0 text-xs text-muted-foreground">120+ min</div>
                    
                    {/* Target time marker */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full border-l-2 border-dashed border-primary/50"></div>
                    
                    {/* Current average marker */}
                    <div 
                      className="absolute top-0 h-full border-l-2 border-primary" 
                      style={{ left: `${Math.min((blockTimeData.averageBlockTime / 120) * 100, 100)}%` }}
                    >
                      <div className="absolute top-0 -translate-x-1/2 -translate-y-full bg-primary text-primary-foreground text-xs px-1 rounded">
                        {blockTimeData.averageBlockTime} min
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Historical Block Time Averages</h3>
                  <div className="flex items-end h-32 gap-1">
                    {blockTimeData.historicalAverages.map((item, index) => {
                      // Calculate color based on value (closer to 10 = greener)
                      const deviation = Math.abs(item.value - 10);
                      const colorClass = 
                        deviation < 0.3 ? 'bg-green-500' :
                        deviation < 1 ? 'bg-green-400' :
                        deviation < 2 ? 'bg-yellow-400' :
                        'bg-red-400';
                      
                      // Calculate height based on value (0-20 minutes scale)
                      const heightPercent = (item.value / 20) * 100;
                      
                      return (
                        <TooltipProvider key={index}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div 
                                className={`${colorClass} w-full rounded-t hover:opacity-80 transition-opacity cursor-help`}
                                style={{ height: `${heightPercent}%` }}
                              ></div>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              <div className="text-center">
                                <div className="font-bold">{item.period}</div>
                                <div>{item.value} minutes</div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>{blockTimeData.historicalAverages[0].period}</span>
                    <span>{blockTimeData.historicalAverages[blockTimeData.historicalAverages.length - 1].period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Recent Difficulty Adjustments</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="max-h-40 overflow-y-auto">
                      <table className="w-full">
                        <thead className="bg-muted/50 sticky top-0">
                          <tr>
                            <th className="text-xs font-medium text-left p-2">Date</th>
                            <th className="text-xs font-medium text-right p-2">Change</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {blockTimeData.difficultyAdjustments.map((adj, index) => (
                            <tr key={index} className="hover:bg-muted/20">
                              <td className="p-2 text-sm">{adj.date}</td>
                              <td className="p-2 text-sm text-right">
                                <Badge variant="outline" className={adj.change.startsWith('+') ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}>
                                  {adj.change}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="education" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 lg:col-span-1">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                Block Time Basics
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="what-is-block-time">
                  <AccordionTrigger className="text-left">What is Block Time?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">
                      Block time is the average time it takes for the Bitcoin network to generate a new block in the blockchain. 
                      Bitcoin is designed to have an average block time of approximately 10 minutes.
                    </p>
                    <p className="text-muted-foreground">
                      This timing is maintained through a process called difficulty adjustment, which occurs every 2,016 blocks (approximately every two weeks).
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="why-important">
                  <AccordionTrigger className="text-left">Why is Block Time Important?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">
                      Block time is a critical parameter that affects:
                    </p>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Transaction confirmation speed</li>
                      <li>Network security (longer block times make attacks more expensive)</li>
                      <li>Miner revenue and incentives</li>
                      <li>Overall network throughput</li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      The 10-minute target represents a balance between security and transaction throughput.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="block-time-variability">
                  <AccordionTrigger className="text-left">Why Does Block Time Vary?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">
                      Block times vary due to several factors:
                    </p>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Mining is a probabilistic process (like a lottery)</li>
                      <li>Changes in total network hash power</li>
                      <li>Network latency and propagation delays</li>
                      <li>Mining pool dynamics and strategies</li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      Individual block times can range from seconds to hours, but average around 10 minutes over time.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
            
            <Card className="p-6 lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Difficulty Adjustment
              </h2>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-muted/20 p-4">
                  <h3 className="font-medium mb-2">How Difficulty Adjustment Works</h3>
                  <p className="text-muted-foreground mb-2">
                    Bitcoin's difficulty adjustment mechanism is a self-regulating system that maintains the ~10 minute block time target regardless of changes in network hash power.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Measurement Period:</span> The network measures how long it took to mine 2,016 blocks.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                        <span className="text-xs font-bold">2</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Comparison:</span> Ideally, 2,016 blocks should take exactly 2 weeks (20,160 minutes).
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                        <span className="text-xs font-bold">3</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Adjustment:</span> If blocks were found too quickly, difficulty increases. If too slowly, difficulty decreases.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                        <span className="text-xs font-bold">4</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Limits:</span> Maximum adjustment is capped at 4x increase or 0.25x decrease to prevent extreme changes.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg bg-muted/20 p-4">
                    <h3 className="font-medium mb-2">Difficulty Formula</h3>
                    <div className="bg-background/80 p-3 rounded font-mono text-sm overflow-x-auto">
                      <p>new_difficulty = old_difficulty * (actual_time / expected_time)</p>
                      <p className="mt-2">where:</p>
                      <p>expected_time = 20,160 minutes</p>
                      <p>actual_time = time to mine 2,016 blocks</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-muted/20 p-4">
                    <h3 className="font-medium mb-2">Historical Perspective</h3>
                    <p className="text-sm text-muted-foreground">
                      Bitcoin's difficulty has increased dramatically over time:
                    </p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground mt-2 space-y-1">
                      <li>2009: ~1 (CPU mining era)</li>
                      <li>2013: ~10 million (GPU/FPGA era)</li>
                      <li>2017: ~1 trillion (ASIC mining dominance)</li>
                      <li>2024: ~70 trillion (industrial mining operations)</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      This represents a ~70 trillion times increase in mining difficulty since Bitcoin's launch.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 lg:col-span-3">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Block Time Implications
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-lg bg-muted/20 p-4">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2 bg-blue-500/10 text-blue-500 border-blue-500/20">Security</Badge>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Longer block times increase the cost of 51% attacks and make reorganizations more difficult. The 10-minute block time gives nodes across the globe enough time to stay synchronized despite internet latency.
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <span className="font-medium">Key point:</span> Each confirmed block exponentially increases Bitcoin's security against attacks.
                  </div>
                </div>
                
                <div className="rounded-lg bg-muted/20 p-4">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2 bg-green-500/10 text-green-500 border-green-500/20">Scalability</Badge>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Block time directly affects transaction throughput. With a 10-minute block time and limited block size, Bitcoin's base layer processes ~7 transactions per second. This limitation has led to the development of Layer 2 solutions like Lightning Network.
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <span className="font-medium">Key point:</span> Bitcoin prioritizes security and decentralization over raw transaction throughput.
                  </div>
                </div>
                
                <div className="rounded-lg bg-muted/20 p-4">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2 bg-purple-500/10 text-purple-500 border-purple-500/20">Economics</Badge>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Block time affects miner revenue predictability. Consistent block times help miners forecast their earnings and plan operations. It also affects fee markets during periods of high demand, as users compete to get transactions included in the next block.
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <span className="font-medium">Key point:</span> As block rewards decrease over time, transaction fees become increasingly important for network security.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
