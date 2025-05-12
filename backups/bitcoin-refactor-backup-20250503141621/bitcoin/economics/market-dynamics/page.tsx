'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import {
  TrendingUp,
  Scale,
  Globe,
  Coins,
  Clock,
  Info,
  History,
  Calendar,
  HelpCircle,
  CheckCircle,
  ChevronRight,
  Network,
  CreditCard,
  Building,
  Landmark,
  LineChart,
  TrendingDown,
  Wallet,
  BarChart3,
  Layers,
} from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import LiquidityDepthVisualizer from './liquidity-depth-visualizer';
import MarketCycleExplorer from './market-cycle-explorer';
import MarketMaturityIndex from './market-maturity-index';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

const moduleId = 'economics';
const sectionId = 'market-dynamics';

export default function MarketDynamicsPage() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId={moduleId}
        sectionId={sectionId}
        checkpoints={1}
        moduleTitle="Market Dynamics"
        moduleDescription="Understanding how Bitcoin markets function, evolve, and discover price through supply, demand, and cycles."
        difficulty="Intermediate"
        icon={TrendingUp}
      >
        <div className="space-y-8">
          <SatoshiQuote
            quote="In this sense, it's more typical of a precious metal. Instead of the supply changing to keep the value the same, the supply is predetermined and the value changes. As the number of users grows, the value per coin increases."
            date="February 18, 2010"
            source="BitcoinTalk Forum"
            sourceUrl="https://bitcointalk.org/index.php?topic=57.msg415#msg415"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
            <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
              <p>
                "I designed Bitcoin with a fixed supply model deliberately, knowing that this fundamental property would create unique market dynamics compared to traditional currencies. When the maximum supply is known and inelastic, the market must discover price through free exchange rather than through central coordination."
              </p>
              <p className="mt-3">
                "This was a significant departure from conventional monetary thinking. Most economists believe currency supplies should be adjustable to meet economic conditions. I chose a different path—allowing price, not supply, to be the dynamic variable that responds to changing market conditions."
              </p>
              <p className="mt-3">
                "I anticipated that the emergence of liquid markets and price discovery would be challenging in the early phases. Without established infrastructure or historical precedent, Bitcoin's price would naturally be volatile as the market struggled to determine fair value for something entirely new. This volatility isn't a bug—it's a necessary mechanism for price discovery in a free market, especially one establishing the value of a novel asset class."
              </p>
              <p className="mt-3">
                "As adoption grows and markets mature, I expected this volatility would gradually diminish—though Bitcoin would continue to exhibit cyclical market behavior as adoption moves through distinct phases. These market cycles serve an important purpose, driving waves of attention, development, and infrastructure building that would be impossible without the associated price signals."
              </p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Price Discovery & Market Mechanics</h4>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Bitcoin's price is determined through global, 24/7 markets where buyers and sellers meet to exchange the asset based on their own valuation models. Unlike traditional assets, Bitcoin trades continuously and globally without circuit breakers or trading halts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-4 bg-background rounded-lg flex flex-col">
                  <div className="flex items-center mb-3">
                    <Scale className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <h5 className="font-medium">Supply and Demand</h5>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Bitcoin's price is determined solely by market forces—what buyers are willing to pay and what sellers are willing to accept. With a capped supply of 21 million coins, increased demand directly translates to price appreciation.
                  </p>
                  <div className="mt-3 p-2 bg-muted/50 rounded-md text-xs">
                    <p className="font-medium">Key Mechanism:</p>
                    <p className="text-muted-foreground mt-1">
                      Unlike fiat currencies that can be created at will, Bitcoin's inelastic supply means price must do the heavy lifting of balancing market supply and demand, leading to higher price volatility.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-background rounded-lg flex flex-col">
                  <div className="flex items-center mb-3">
                    <Globe className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <h5 className="font-medium">Global Price Discovery</h5>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Bitcoin trades 24/7/365 across hundreds of exchanges worldwide, with arbitrage traders ensuring that prices remain relatively consistent across markets despite regional variations in liquidity and regulations.
                  </p>
                  <div className="mt-3 p-2 bg-muted/50 rounded-md text-xs">
                    <p className="font-medium">Key Mechanism:</p>
                    <p className="text-muted-foreground mt-1">
                      Price differences between exchanges typically remain small due to arbitrage—traders buying where prices are lower and selling where prices are higher—which helps maintain a global consensus price.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-4 bg-background rounded-lg flex flex-col">
                  <div className="flex items-center mb-3">
                    <Coins className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <h5 className="font-medium">Market Depth & Liquidity</h5>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Market depth refers to the market's ability to absorb large buy or sell orders without significant price impact. Bitcoin's liquidity has grown dramatically over time, reducing slippage and providing more efficient price discovery.
                  </p>
                  <div className="mt-3 p-2 bg-muted/50 rounded-md text-xs">
                    <p className="font-medium">Evolution:</p>
                    <p className="text-muted-foreground mt-1">
                      In 2010, a $10,000 market buy could move prices by 10% or more. Today, the market can absorb hundreds of millions of dollars with minimal slippage, representing a thousandfold improvement in market depth.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-background rounded-lg flex flex-col">
                  <div className="flex items-center mb-3">
                    <Clock className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <h5 className="font-medium">Price Feedback Loops</h5>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Bitcoin markets exhibit positive feedback loops where price movements can trigger self-reinforcing behavior. Rising prices attract new buyers, while falling prices can trigger panic selling or liquidations.
                  </p>
                  <div className="mt-3 p-2 bg-muted/50 rounded-md text-xs">
                    <p className="font-medium">Key Mechanism:</p>
                    <p className="text-muted-foreground mt-1">
                      These feedback loops contribute to market cycles and can be amplified by derivatives leverage, where forced liquidations create cascading effects on price. Maturing markets have developed more robust mechanisms to absorb these shocks.
                    </p>
                  </div>
                </div>
              </div>

              <LiquidityDepthVisualizer />

              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-sm">
                <h5 className="font-medium mb-2 flex items-center">
                  <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                  Market Quote from Satoshi
                </h5>
                <div className="italic text-muted-foreground">
                  <p>
                    "Market price is determined by only one thing: how much someone is willing to pay for it right now. Exchanges are just places where people who want to trade bitcoin can find each other more easily."
                  </p>
                  <p className="mt-2">
                    "If there are 1 million good quality pork bellies produced in a year and 1 million people who each want one pork belly per year, the price of a pork belly will simply be whatever it takes for the least eager buyer and the least eager seller to make a deal."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-4 text-lg">Market Psychology & Cycles</h4>
              <div className="space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  Bitcoin markets exhibit cyclical behavior characterized by boom-bust cycles. These cycles follow psychological patterns that reflect changing investor sentiment and adoption waves.
                </p>

                <MarketCycleExplorer />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-background rounded-lg">
                    <h5 className="font-medium mb-3 flex items-center">
                      <History className="h-5 w-5 text-primary mr-2" />
                      <span>Previous Market Cycles</span>
                    </h5>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h6 className="text-xs font-medium">2011-2012 Cycle</h6>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Low: $0.30</span>
                          <span>Peak: $32</span>
                          <span className="text-red-500">Decline: -93%</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h6 className="text-xs font-medium">2013-2015 Cycle</h6>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Low: $2</span>
                          <span>Peak: $1,150</span>
                          <span className="text-red-500">Decline: -85%</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h6 className="text-xs font-medium">2017-2018 Cycle</h6>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Low: $150</span>
                          <span>Peak: $19,800</span>
                          <span className="text-red-500">Decline: -84%</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h6 className="text-xs font-medium">2020-2022 Cycle</h6>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Low: $3,800</span>
                          <span>Peak: $69,000</span>
                          <span className="text-red-500">Decline: -75%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-background rounded-lg">
                    <h5 className="font-medium mb-3 flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <span>Cycle Drivers</span>
                    </h5>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Halving events reduce new supply issuance every ~4 years</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Infrastructure expansion enables new adoption waves</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Macro conditions affect risk appetite and capital availability</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Regulatory developments impact institutional participation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Technological improvements expand use cases</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-background rounded-lg">
                    <h5 className="font-medium mb-3 flex items-center">
                      <HelpCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Cycle Evolution</span>
                    </h5>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>
                        Bitcoin's market cycles have evolved, with each cycle showing unique characteristics:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <ChevronRight className="h-3.5 w-3.5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>
                            <span className="font-medium">Diminishing volatility</span>: Each cycle has seen lower percentage drawdowns
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-3.5 w-3.5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>
                            <span className="font-medium">Lengthening cycles</span>: Time between market peaks has extended
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-3.5 w-3.5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>
                            <span className="font-medium">Increasing influence</span>: Correlation with traditional markets has grown
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-4 text-lg">Market Evolution & Maturity</h4>
              <div className="space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  Bitcoin markets have evolved from informal peer-to-peer exchanges to sophisticated financial infrastructure supporting billions in daily volume across spot, derivatives, and institutional markets.
                </p>

                <MarketMaturityIndex />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-background rounded-lg">
                    <h5 className="font-medium mb-3 flex items-center">
                      <Network className="h-5 w-5 text-primary mr-2" />
                      <span>Exchange Evolution</span>
                    </h5>
                    <div className="space-y-3">
                      <div className="p-3 border-l-4 border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20 rounded-r-md">
                        <h6 className="text-xs font-medium">First Generation (2010-2013)</h6>
                        <p className="text-xs text-muted-foreground mt-1">
                          Basic order books, frequent outages, limited security, and minimal regulatory compliance. Exemplified by early Mt. Gox, which handled 70% of all Bitcoin trading before its collapse.
                        </p>
                      </div>
                      <div className="p-3 border-l-4 border-purple-400 dark:border-purple-600 bg-purple-50 dark:bg-purple-900/20 rounded-r-md">
                        <h6 className="text-xs font-medium">Second Generation (2013-2017)</h6>
                        <p className="text-xs text-muted-foreground mt-1">
                          Improved security practices, basic fiat on-ramps, early regulatory engagement, and first professional trading tools. Exchanges like Coinbase, Kraken, and Bitstamp emerged.
                        </p>
                      </div>
                      <div className="p-3 border-l-4 border-green-400 dark:border-green-600 bg-green-50 dark:bg-green-900/20 rounded-r-md">
                        <h6 className="text-xs font-medium">Third Generation (2017-Present)</h6>
                        <p className="text-xs text-muted-foreground mt-1">
                          Institutional-grade security, advanced trading features, regulatory licensing, insurance coverage, and extensive market data. Integration with traditional financial systems and advanced derivatives.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-background rounded-lg">
                    <h5 className="font-medium mb-3 flex items-center">
                      <CreditCard className="h-5 w-5 text-primary mr-2" />
                      <span>Financial Product Development</span>
                    </h5>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/30 rounded-md">
                        <div className="flex justify-between mb-1">
                          <h6 className="text-xs font-medium">Spot Markets</h6>
                          <span className="text-xs text-green-500 font-medium">Fully Mature</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Direct trading of bitcoin for fiat or stablecoins. Now features institutional-grade execution, deep liquidity, and regulated venues across global jurisdictions.
                        </p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-md">
                        <div className="flex justify-between mb-1">
                          <h6 className="text-xs font-medium">Derivatives</h6>
                          <span className="text-xs text-green-500 font-medium">Advanced</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Futures, options, and perpetual swaps available on both crypto-native and traditional exchanges. Sophisticated products with regulated counterparties for risk management.
                        </p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-md">
                        <div className="flex justify-between mb-1">
                          <h6 className="text-xs font-medium">Investment Vehicles</h6>
                          <span className="text-xs text-amber-500 font-medium">Developing</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          ETFs, trusts, funds, and private vehicles. Recent innovations include spot ETFs in major markets, opening Bitcoin to traditional investment channels and retirement accounts.
                        </p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-md">
                        <div className="flex justify-between mb-1">
                          <h6 className="text-xs font-medium">Lending & Yield</h6>
                          <span className="text-xs text-amber-500 font-medium">Emerging</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Collateralized loans, interest-bearing accounts, and yield products. Still developing with mixed regulatory clarity; risk management practices improving after market stress events.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-medium mb-4">Key Market Developments</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                        <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">
                            First Bitcoin futures contracts (2017)
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            CME Group launched regulated Bitcoin futures, bringing institutional access
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                        <Building className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">
                            MicroStrategy treasury adoption (2020)
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            First major public company to adopt Bitcoin as primary treasury reserve
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                        <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">El Salvador adopts Bitcoin (2021)</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            First sovereign nation to adopt Bitcoin as legal tender
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                        <Landmark className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Spot Bitcoin ETFs approved (2024)</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            U.S. SEC approves spot Bitcoin ETFs, enabling mainstream investment access
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h4 className="font-medium mb-4 text-lg">Satoshi's Perspective</h4>
              <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
                <p>
                  "Looking at Bitcoin's market evolution, I find it fascinating how the system's design naturally handles the bootstrap phase of a new monetary asset. When I released Bitcoin, I couldn't simply declare a value for it—the market had to discover this through an organic process."
                </p>
                <p className="mt-3">
                  "The volatility and market cycles that have characterized Bitcoin's price history serve a crucial purpose. They create the attention and incentives necessary to drive adoption in waves, each building upon the previous one. During bull markets, new participants enter and infrastructure expands. During bear markets, speculation is washed out and genuine builders continue developing."
                </p>
                <p className="mt-3">
                  "What's most remarkable is watching the market mature over time. It hasn't been a straight line, but each cycle has produced more robust infrastructure, deeper liquidity, and greater resilience. The early fragile markets of 2010-2013 have evolved into sophisticated trading venues with institutional participation that would have been unimaginable in Bitcoin's early days."
                </p>
                <p className="mt-3">
                  "I designed Bitcoin to function without trusted third parties, but I always recognized that market infrastructure would be necessary for broader adoption. The key is ensuring that the core protocol remains decentralized while allowing a vibrant ecosystem to develop around it, providing different methods of access depending on users' needs and preferences."
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-border/40 pt-4">
              <VerifyCheckbox
                moduleId={moduleId}
                verificationId={sectionId}
                label="I understand Bitcoin's market dynamics and evolution"
              />
            </div>
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
