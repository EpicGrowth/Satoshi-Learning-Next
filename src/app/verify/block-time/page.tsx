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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function BlockTimePage() {
  const [blockData, setBlockData] = useState({
    currentBlockTime: 10, // minutes
    historicalAverage: 9.8, // minutes
    targetBlockTime: 10, // minutes
    lastAdjustment: -0.2, // percent
    nextAdjustment: 0.1, // estimated percent
    blocksUntilAdjustment: 1342,
    difficultyEpoch: 2016, // blocks in a difficulty adjustment period
  });

  const [timelineData, setTimelineData] = useState([
    { date: '2009-01-03', blockTime: 10, event: 'Genesis Block' },
    { date: '2010-12-12', blockTime: 9.7, event: 'First Difficulty Spikes' },
    { date: '2013-11-18', blockTime: 8.3, event: 'Major Mining Expansion' },
    { date: '2016-07-09', blockTime: 10.2, event: 'Second Halving' },
    { date: '2017-12-17', blockTime: 7.5, event: 'Price ATH / Mining Rush' },
    { date: '2020-05-11', blockTime: 9.9, event: 'Third Halving' },
    { date: '2021-05-12', blockTime: 11.8, event: 'China Mining Ban' },
    { date: '2024-04-19', blockTime: 10.1, event: 'Fourth Halving' },
  ]);

  return (
    <div className="container py-10 max-w-5xl">
      <div className="mb-6">
        <Link href="/verify" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Verification Tools
        </Link>
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <Clock className="mr-3 h-7 w-7 text-bitcoin-orange" />
          Block Time Verification
        </h1>
        <p className="text-muted-foreground text-lg">
          Monitor Bitcoin's block time and understand how the difficulty adjustment mechanism works to maintain the ~10 minute target.
        </p>
      </div>

      <Tabs defaultValue="monitor" className="mt-8">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="monitor">Current Status</TabsTrigger>
          <TabsTrigger value="learn">How It Works</TabsTrigger>
          <TabsTrigger value="history">Historical Data</TabsTrigger>
        </TabsList>

        <TabsContent value="monitor" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-muted-foreground">Current Block Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-bitcoin-orange">{blockData.currentBlockTime} min</div>
                <p className="text-sm text-muted-foreground mt-1">
                  {blockData.currentBlockTime === blockData.targetBlockTime 
                    ? "On target" 
                    : blockData.currentBlockTime > blockData.targetBlockTime 
                      ? "Slower than target" 
                      : "Faster than target"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-muted-foreground">Target Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{blockData.targetBlockTime} min</div>
                <p className="text-sm text-muted-foreground mt-1">Set by consensus rules</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-muted-foreground">Last Adjustment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${blockData.lastAdjustment > 0 ? 'text-green-500' : blockData.lastAdjustment < 0 ? 'text-red-500' : ''}`}>
                  {blockData.lastAdjustment > 0 ? '+' : ''}{blockData.lastAdjustment}%
                </div>
                <p className="text-sm text-muted-foreground mt-1">Difficulty change</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-muted-foreground">Next Adjustment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {blockData.blocksUntilAdjustment} blocks
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Est. {Math.round(blockData.blocksUntilAdjustment * blockData.currentBlockTime / 60 / 24)} days
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Block Time Trend</CardTitle>
              <CardDescription>Average time between blocks over the last 2016 blocks (one difficulty period)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="h-10 w-10 mx-auto mb-2" />
                  <p>Block time visualization would appear here</p>
                  <p className="text-sm">(Simulated data - would connect to a real API)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>About Block Time Verification</AlertTitle>
            <AlertDescription>
              This tool monitors the current average block time and compares it to Bitcoin's target of 10 minutes. 
              The difficulty adjustment mechanism ensures that regardless of total network hashrate, blocks are 
              found approximately every 10 minutes on average.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="learn" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>How Bitcoin Maintains Block Time</CardTitle>
              <CardDescription>Understanding the difficulty adjustment mechanism</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium flex items-center">
                  <Timer className="mr-2 h-5 w-5 text-bitcoin-orange" />
                  The 10-Minute Target
                </h3>
                <p>
                  Bitcoin is designed to produce new blocks approximately every 10 minutes. This timing was chosen by Satoshi Nakamoto as a balance between fast confirmation times and reducing the likelihood of chain splits due to network propagation delays.
                </p>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <h3 className="text-lg font-medium flex items-center">
                  <Layers className="mr-2 h-5 w-5 text-bitcoin-orange" />
                  Difficulty Adjustment
                </h3>
                <p>
                  Every 2016 blocks (approximately 2 weeks), Bitcoin automatically adjusts the mining difficulty based on how quickly the previous 2016 blocks were mined:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>If blocks were mined faster than 10 minutes on average, difficulty increases</li>
                  <li>If blocks were mined slower than 10 minutes on average, difficulty decreases</li>
                  <li>Maximum adjustment is limited to 4x in either direction to prevent extreme changes</li>
                </ul>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <h3 className="text-lg font-medium flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-bitcoin-orange" />
                  Why Block Times Vary
                </h3>
                <p>
                  Block discovery follows a Poisson process, meaning individual block times can vary significantly:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Some blocks may be found in seconds while others might take 30+ minutes</li>
                  <li>The 10-minute target is an average over time, not a guarantee for each block</li>
                  <li>Hashrate changes between difficulty adjustments can temporarily affect block times</li>
                </ul>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <h3 className="text-lg font-medium flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5 text-bitcoin-orange" />
                  Why This Matters
                </h3>
                <p>
                  The difficulty adjustment mechanism is crucial for Bitcoin's security and predictable issuance:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ensures consistent block times regardless of how much mining power joins or leaves the network</li>
                  <li>Maintains Bitcoin's predictable issuance schedule and controlled inflation</li>
                  <li>Prevents attackers from easily manipulating the block creation rate</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Historical Block Time Events</CardTitle>
              <CardDescription>Notable periods in Bitcoin's block time history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {timelineData.map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="min-w-[100px] text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      {event.date}
                    </div>
                    <div className="min-w-[80px]">
                      <Badge variant={event.blockTime > 10.5 ? "destructive" : event.blockTime < 9.5 ? "default" : "outline"}>
                        <ArrowUpDown className="h-3 w-3 mr-1" />
                        {event.blockTime} min
                      </Badge>
                    </div>
                    <div>
                      <p className="font-medium">{event.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-muted-foreground">
                Data represents average block times during these historical periods
              </p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Block Time Distribution</CardTitle>
              <CardDescription>Statistical distribution of block times since 2009</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="h-10 w-10 mx-auto mb-2" />
                  <p>Block time distribution chart would appear here</p>
                  <p className="text-sm">(Simulated data - would connect to a real API)</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground w-full text-center">
                The distribution follows a Poisson process with most blocks found between 1-20 minutes
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
