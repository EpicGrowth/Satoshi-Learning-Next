// Main Bitcoin Economics component
export default function BitcoinEconomics() {
  return (
    <ModuleContent
      moduleId="bitcoin-economics"
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
            moduleId="bitcoin-economics"
            sectionId="bitcoin-economics"
            verificationId="bitcoin-economics"
            label="I understand Bitcoin's economic principles"
          />
        </div>
      </div>
    </ModuleContent>
  );
}
