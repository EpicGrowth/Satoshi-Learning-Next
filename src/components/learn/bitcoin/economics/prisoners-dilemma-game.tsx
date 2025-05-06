'use client';

import { useState } from 'react';

// Interactive Prisoner's Dilemma Simulator
export function PrisonersDilemmaGame() {
  const [strategyA, setStrategyA] = useState<'cooperate' | 'defect'>('cooperate');
  const [strategyB, setStrategyB] = useState<'cooperate' | 'defect'>('cooperate');

  // Calculate payoffs based on classic prisoner's dilemma
  const getPayoffs = () => {
    if (strategyA === 'cooperate' && strategyB === 'cooperate') {
      return { a: -1, b: -1, description: 'Both serve 1 year (mutual cooperation)' };
    } else if (strategyA === 'cooperate' && strategyB === 'defect') {
      return { a: -3, b: 0, description: 'A serves 3 years, B goes free (B betrays)' };
    } else if (strategyA === 'defect' && strategyB === 'cooperate') {
      return { a: 0, b: -3, description: 'A goes free, B serves 3 years (A betrays)' };
    } else {
      return { a: -2, b: -2, description: 'Both serve 2 years (mutual defection)' };
    }
  };

  const payoffs = getPayoffs();

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium mb-4 text-center">Prisoner's Dilemma Simulator</h5>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-3">
          <h6 className="text-sm font-medium">Prisoner A's Strategy</h6>
          <div className="flex gap-2">
            <button
              className={`flex-1 px-3 py-2 text-sm rounded-md transition-colors ${
                strategyA === 'cooperate'
                  ? 'bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-900'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
              onClick={() => setStrategyA('cooperate')}
            >
              Cooperate (Stay Silent)
            </button>
            <button
              className={`flex-1 px-3 py-2 text-sm rounded-md transition-colors ${
                strategyA === 'defect'
                  ? 'bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
              onClick={() => setStrategyA('defect')}
            >
              Defect (Betray)
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <h6 className="text-sm font-medium">Prisoner B's Strategy</h6>
          <div className="flex gap-2">
            <button
              className={`flex-1 px-3 py-2 text-sm rounded-md transition-colors ${
                strategyB === 'cooperate'
                  ? 'bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-900'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
              onClick={() => setStrategyB('cooperate')}
            >
              Cooperate (Stay Silent)
            </button>
            <button
              className={`flex-1 px-3 py-2 text-sm rounded-md transition-colors ${
                strategyB === 'defect'
                  ? 'bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
              onClick={() => setStrategyB('defect')}
            >
              Defect (Betray)
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 bg-muted/50 rounded-md text-center">
          <p className="text-xs text-muted-foreground mb-1">Prisoner A's Outcome</p>
          <p className={`text-xl font-bold ${payoffs.a === 0 ? 'text-green-500' : 'text-red-500'}`}>
            {payoffs.a === 0
              ? 'Free!'
              : `${Math.abs(payoffs.a)} year${Math.abs(payoffs.a) > 1 ? 's' : ''}`}
          </p>
        </div>
        <div className="p-3 bg-muted/50 rounded-md text-center">
          <p className="text-xs text-muted-foreground mb-1">Prisoner B's Outcome</p>
          <p className={`text-xl font-bold ${payoffs.b === 0 ? 'text-green-500' : 'text-red-500'}`}>
            {payoffs.b === 0
              ? 'Free!'
              : `${Math.abs(payoffs.b)} year${Math.abs(payoffs.b) > 1 ? 's' : ''}`}
          </p>
        </div>
      </div>

      <div className="p-3 bg-primary/5 rounded-md">
        <p className="text-sm text-center">
          Result: <span className="font-medium">{payoffs.description}</span>
        </p>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          {strategyA === 'defect' &&
            strategyB === 'defect' &&
            'This is the Nash Equilibrium - neither prisoner can improve their outcome by changing strategy unilaterally.'}
          {strategyA === 'cooperate' &&
            strategyB === 'cooperate' &&
            "This is the optimal collective outcome, but it's unstable because each prisoner has incentive to defect."}
          {((strategyA === 'defect' && strategyB === 'cooperate') ||
            (strategyA === 'cooperate' && strategyB === 'defect')) &&
            'This outcome creates maximum inequality and incentivizes retaliation in repeated games.'}
        </p>
      </div>
    </div>
  );
}
