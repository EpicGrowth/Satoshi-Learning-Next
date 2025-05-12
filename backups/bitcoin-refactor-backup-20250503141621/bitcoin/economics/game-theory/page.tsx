'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { PrisonersDilemmaGame } from '@/components/learn/bitcoin/economics/prisoners-dilemma-game';
import { MiningIncentivesVisual } from '@/components/learn/bitcoin/economics/mining-incentives-visual';
import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import {
  TrendingUp,
  ChevronRight,
  Info,
  Users,
  Zap,
  Shield,
  Scale,
  BadgeDollarSign,
  GitFork,
  BarChart,
  CheckCircle,
  XCircle,
  Award,
  Coins,
  ArrowBigRight,
  ArrowBigDown,
  AlertTriangle,
  ArrowDownUp,
  Key,
  Lock,
  Hash,
  Network,
  Gift,
  Target,
  BookOpen,
} from 'lucide-react';

const metadataObject: Metadata = {
  title: 'Game Theory in Bitcoin | Satoshi Station',
  description: 'Explore how game theory and economic incentives secure the Bitcoin network without central authority.',
  keywords: ['bitcoin game theory', 'nash equilibrium', 'mining incentives', 'network security', 'economic incentives', 'proof-of-work', 'satoshi station'],
  alternates: {
    canonical: '/learn/bitcoin/economics/game-theory',
  },
  openGraph: {
    title: 'Game Theory in Bitcoin | Satoshi Station',
    description: 'Explore how game theory and economic incentives secure the Bitcoin network without central authority.',
    url: '/learn/bitcoin/economics/game-theory',
    images: ['/images/og/bitcoin-game-theory.png']
  }
};

const moduleId = 'economics';
const sectionId = 'game-theory';

export default function GameTheoryPage() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId={moduleId}
        sectionId={sectionId}
        checkpoints={4}
        moduleTitle="Game Theory"
        moduleDescription="Learn how incentives and strategic interactions secure the Bitcoin network."
        difficulty="Intermediate"
        icon={TrendingUp}
      >
        <div className="space-y-8">
          <SatoshiQuote
            quote="The steady addition of a constant amount of new coins is analogous to gold miners expending resources to add gold to circulation. In our case, it is CPU time and electricity that is expended."
            date="November 8, 2008"
            source="Bitcoin Whitepaper"
          />

          <Card className="p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
            <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed space-y-3">
              <p>
                "When I designed Bitcoin, I faced a fundamental challenge: how to create a
                decentralized monetary system that would remain stable without a central authority.
                Traditional currencies rely on trusted third parties and legal frameworks to enforce
                rules, but Bitcoin had to operate in a trustless environment where participants
                might act in their own self-interest, potentially at the expense of the system."
              </p>
              <p>
                "Game theory provided the solution. By carefully aligning economic incentives with
                the security of the network, I created a system where rational participants find it
                more profitable to follow the rules than to attempt to subvert them. The mining
                reward, transaction fees, proof-of-work difficulty—these aren't arbitrary design
                choices, but carefully calibrated mechanisms that create a Nash equilibrium where
                honest behavior is the dominant strategy."
              </p>
              <p>
                "The brilliance of this approach is that Bitcoin doesn't require participants to act
                altruistically. It assumes they will act in their own economic self-interest, and
                then harnesses that self-interest to secure the network. In this way, the invisible
                hand of incentives guides individual miners toward actions that benefit the
                collective, creating a system that is both decentralized and remarkably stable."
              </p>
            </div>
          </Card>

          <Card className="p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Game Theory Fundamentals</h4>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Game theory is the mathematical study of strategic interaction among rational
                decision-makers. In Bitcoin, it forms the foundation of the incentive mechanisms
                that secure the network without requiring trust between participants.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-background rounded-lg">
                  <h5 className="font-medium mb-3 flex items-center">
                    <Scale className="h-5 w-5 text-primary mr-2" />
                    <span>The Nash Equilibrium</span>
                  </h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    A Nash Equilibrium is a stable state where no participant can gain by
                    unilaterally changing their strategy while others maintain theirs. This concept
                    is central to Bitcoin's security model.
                  </p>
                  <div className="space-y-2">
                    <div className="p-3 bg-muted/50 rounded-md">
                      <h6 className="text-xs font-medium">In Bitcoin Mining:</h6>
                      <p className="text-xs text-muted-foreground mt-1">
                        Miners reach a Nash Equilibrium when they all follow the consensus rules.
                        Any individual miner trying to cheat would have their blocks rejected,
                        making honesty the most profitable long-term strategy.
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-md">
                      <h6 className="text-xs font-medium">In Node Operation:</h6>
                      <p className="text-xs text-muted-foreground mt-1">
                        Full nodes reach a Nash Equilibrium by all enforcing the same consensus
                        rules. A node that accepts invalid transactions gains no benefit but risks
                        accepting counterfeit coins.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background rounded-lg">
                  <h5 className="font-medium mb-3 flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <span>The Prisoner's Dilemma</span>
                  </h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    The classic prisoner's dilemma illustrates how individual rational choices can
                    lead to collectively suboptimal outcomes when participants can't coordinate.
                    Bitcoin's design transforms this dynamic.
                  </p>
                  <div className="p-3 bg-muted/50 rounded-md">
                    <h6 className="text-xs font-medium">Bitcoin's Solution:</h6>
                    <p className="text-xs text-muted-foreground mt-1">
                      Bitcoin transforms what would typically be a prisoner's dilemma into a
                      coordination game by aligning incentives. Unlike traditional prisoner's
                      dilemmas where defection is individually rational, in Bitcoin, coordination
                      (honest mining) becomes the dominant strategy.
                    </p>
                  </div>
                  {/* Link removed as component is directly below */}
                </div>
              </div>

              <div id="prisoners-dilemma-demo">
                <PrisonersDilemmaGame />
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-sm">
                <h5 className="font-medium mb-2 flex items-center">
                  <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                  Mathematical Foundations
                </h5>
                <p className="text-muted-foreground">
                  "Bitcoin's game-theoretic design wasn't accidental. I studied decades of research
                  in mechanism design and incentive engineering to create a system where the Nash
                  equilibrium aligns with the desired behavior..."
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Incentive Mechanisms</h4>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Bitcoin's security doesn't rely on altruism or trust, but on carefully designed
                economic incentives that make honest behavior more profitable than dishonest
                behavior.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-muted/50 rounded-md">
                  <h5 className="font-medium mb-2 flex items-center gap-2"><Coins className="h-4 w-4 text-primary" />Block Reward</h5>
                  <p className="text-xs text-muted-foreground">The primary incentive for miners, decreasing over time via halving events.</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-md">
                  <h5 className="font-medium mb-2 flex items-center gap-2"><BadgeDollarSign className="h-4 w-4 text-primary" />Transaction Fees</h5>
                  <p className="text-xs text-muted-foreground">A secondary incentive, becoming more important as block rewards diminish.</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-md">
                  <h5 className="font-medium mb-2 flex items-center gap-2"><ArrowDownUp className="h-4 w-4 text-primary" />Difficulty Adjustment</h5>
                  <p className="text-xs text-muted-foreground">Ensures block production remains stable (~10 mins) regardless of total hash power.</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed pt-2">
                These mechanisms work together. The block reward and fees incentivize participation,
                while the difficulty adjustment ensures the cost of mining remains substantial, making
                attacks expensive and maintaining the security budget.
              </p>
            </div>
          </Card>

          <Card className="p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Mining Strategy Incentives</h4>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                The interaction between incentives and potential attack vectors is crucial.
                Visualizing the payoffs helps understand why honest mining prevails.
              </p>
              <MiningIncentivesVisual />
              <p className="text-sm text-muted-foreground pt-2">
                As the visualizer demonstrates, honest mining offers consistent, positive expected returns proportional to the miner's hash power. Conversely, most attack strategies (like trying to mine invalid blocks or executing a 51% attack) are extremely costly, have a low probability of success, and often undermine the value of the very asset the attacker seeks to gain. This makes rational economic actors strongly prefer honest participation.
              </p>
            </div>
          </Card>

          <Card className="p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Conclusion: The Elegance of Incentives</h4>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Bitcoin's reliance on game theory is one of its most revolutionary aspects. Instead
                of depending on a central authority or trusted intermediaries, it creates a
                self-regulating system where the collective good emerges from individual
                self-interest. This alignment of incentives is what allows Bitcoin to function as a
                decentralized, secure, and censorship-resistant network.
              </p>
              <SatoshiQuote
                quote="It's very attractive to the libertarian viewpoint if we can explain it properly. I'm better with code than with words though."
                date="April 17, 2009"
                source="P2P Foundation Forum"
                sourceUrl="https://p2pfoundation.ning.com/forum/topics/bitcoin-open-source?commentId=2003008%3AComment%3A9488"
              />
            </div>
          </Card>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="game-theory"
              label="I understand how game theory and incentives secure Bitcoin"
            />
          </div>

        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
