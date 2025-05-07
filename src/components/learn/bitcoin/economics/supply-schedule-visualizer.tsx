'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react'; // Added missing imports

// Interactive Supply Schedule Visualizer with Emission Curve
const SupplyScheduleVisualizer = () => {
  const [activeTab, setActiveTab] = useState<'issuance' | 'inflation'>('issuance');
  const [showDetails, setShowDetails] = useState(false);

  // Bitcoin halving and issuance data
  interface HalvingEvent {
    number: number;
    year: string;
    blocks: string;
    reward: number;
    newCoins: number;
    totalSupply: number;
    inflationRate: string;
  }

  const halvingEvents: HalvingEvent[] = [
    {
      number: 0,
      year: '2009',
      blocks: '0-209,999',
      reward: 50,
      newCoins: 10_500_000,
      totalSupply: 10_500_000,
      inflationRate: '∞ → 100%',
    },
    {
      number: 1,
      year: '2012',
      blocks: '210,000-419,999',
      reward: 25,
      newCoins: 5_250_000,
      totalSupply: 15_750_000,
      inflationRate: '33.3%',
    },
    {
      number: 2,
      year: '2016',
      blocks: '420,000-629,999',
      reward: 12.5,
      newCoins: 2_625_000,
      totalSupply: 18_375_000,
      inflationRate: '14.3%',
    },
    {
      number: 3,
      year: '2020',
      blocks: '630,000-839,999',
      reward: 6.25,
      newCoins: 1_312_500,
      totalSupply: 19_687_500,
      inflationRate: '6.7%',
    },
    {
      number: 4,
      year: '2024',
      blocks: '840,000-1,049,999',
      reward: 3.125,
      newCoins: 656_250,
      totalSupply: 20_343_750,
      inflationRate: '3.2%',
    },
    {
      number: 5,
      year: '2028',
      blocks: '1,050,000-1,259,999',
      reward: 1.5625,
      newCoins: 328_125,
      totalSupply: 20_671_875,
      inflationRate: '1.6%',
    },
    // Add more future events if needed for longer visualization
  ];

  // Generate emission curve data for visualization
  const generateEmissionData = () => {
    // Simplified curve data for visual representation
    const years = Array.from({ length: 32 }, (_, i) => 2009 + i); // Extend to 2040
    let cumulativeSupply = 0;

    return years.map((year) => {
      const epoch = Math.floor((year - 2009) / 4);
      let yearlyNewCoins = 0;
      let startOfYearSupply = cumulativeSupply;

      if (epoch < halvingEvents.length) {
        const blocksPerYear = 52560; // Approximate
        yearlyNewCoins = halvingEvents[epoch].reward * blocksPerYear;
        cumulativeSupply += yearlyNewCoins;
      } else if (cumulativeSupply < 21_000_000) {
        // Handle tail emission approximation if needed, though it approaches zero
        // For simplicity, assume ~0 after last defined halving completes
        yearlyNewCoins = 0;
      }
      
      cumulativeSupply = Math.min(cumulativeSupply, 21_000_000);
      
      const inflationRate =
        startOfYearSupply === 0 ? Infinity : (yearlyNewCoins / startOfYearSupply) * 100;

      return {
        year,
        supply: cumulativeSupply,
        newCoins: yearlyNewCoins,
        inflationRate: isFinite(inflationRate) ? inflationRate : 0, // Handle initial infinite rate
      };
    });
  };
  
  const emissionData = generateEmissionData();
  const maxSupply = 21_000_000;
  const maxInflation = 50; // Set a reasonable max for y-axis scaling

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium text-center mb-4">Bitcoin Emission Schedule</h5>

      <div className="flex border border-border rounded-md mb-4 overflow-hidden">
        <button
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'issuance'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          }`}
          onClick={() => setActiveTab('issuance')}
        >
          Supply Issuance
        </button>
        <button
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'inflation'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          }`}
          onClick={() => setActiveTab('inflation')}
        >
          Inflation Rate
        </button>
      </div>

      {/* Emission curve visualization - using SVG for better control */}
      <div className="h-72 mb-4 relative">
        <svg width="100%" height="100%" viewBox="0 0 500 300" preserveAspectRatio="xMidYMid meet">
          {/* Y-axis label */}
          <text
            x="-150" 
            y="20"
            transform="rotate(-90)"
            textAnchor="middle"
            fontSize="10"
            fill="currentColor"
            className="text-muted-foreground"
          >
            {activeTab === 'issuance' ? 'Total Supply (Million BTC)' : 'Annual Inflation Rate (%)'}
          </text>

          {/* X-axis label */}
          <text
            x="250" 
            y="295"
            textAnchor="middle"
            fontSize="10"
            fill="currentColor"
            className="text-muted-foreground"
          >
            Year
          </text>

          {/* Grid lines */}
          {/* Y grid lines */}
          {[...Array(5)].map((_, i) => (
            <line
              key={`y-grid-${i}`}
              x1="50"
              y1={50 + i * 40} // Adjust position based on scale
              x2="480"
              y2={50 + i * 40} 
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-border/50"
              strokeDasharray="2,2"
            />
          ))}
          {/* X grid lines */}
          {emissionData
            .filter((d, i) => i % 4 === 0 && i > 0) // Every 4 years, skip first
            .map((data, i) => (
              <line
                key={`x-grid-${i}`}
                x1={50 + (i + 1) * 4 * (430 / (emissionData.length -1))} // Adjust positioning
                y1="50"
                x2={50 + (i + 1) * 4 * (430 / (emissionData.length -1))}
                y2="250"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-border/50"
                strokeDasharray="2,2"
              />
            ))}
          
          {/* Axes */}
          <line x1="50" y1="50" x2="50" y2="250" stroke="currentColor" className="text-border" strokeWidth="1" /> {/* Y-axis */}
          <line x1="50" y1="250" x2="480" y2="250" stroke="currentColor" className="text-border" strokeWidth="1" /> {/* X-axis */}
          
          {/* Data Path */}
          <polyline
            fill="none"
            stroke="currentColor"
            className="text-primary" // Use theme primary color
            strokeWidth="2"
            points={emissionData
              .map((data, i) => {
                const x = 50 + i * (430 / (emissionData.length - 1)); // Scale x to fit 50-480
                const yValue = activeTab === 'issuance' ? data.supply / 1_000_000 : data.inflationRate;
                const maxY = activeTab === 'issuance' ? maxSupply / 1_000_000 : maxInflation;
                const y = 250 - (yValue / maxY) * 200; // Scale y to fit 50-250 (inverted)
                return `${x},${Math.max(50, Math.min(250, y))}`; // Clamp y within bounds
              })
              .join(' ')}
          />
          
          {/* Axis Ticks and Labels */}
          {/* Y-axis ticks */}
          {[...Array(6)].map((_, i) => {
              const yValue = activeTab === 'issuance' ? (i * (maxSupply/1_000_000)) / 5 : (i * maxInflation) / 5;
              const yPos = 250 - i * 40;
              return (
                  <g key={`y-tick-${i}`}>
                      <line x1="45" y1={yPos} x2="50" y2={yPos} stroke="currentColor" className="text-border" strokeWidth="1" />
                      <text x="40" y={yPos + 3} textAnchor="end" fontSize="8" fill="currentColor" className="text-muted-foreground">
                          {yValue.toFixed(activeTab === 'issuance' ? 0 : 1)}
                      </text>
                  </g>
              );
          })}
          {/* X-axis ticks */}
          {emissionData
            .filter((_, i) => i % 4 === 0) // Every 4 years
            .map((data, i) => {
              const xPos = 50 + i * 4 * (430 / (emissionData.length - 1));
              return (
                <g key={`x-tick-${i}`}>
                    <line x1={xPos} y1="250" x2={xPos} y2="255" stroke="currentColor" className="text-border" strokeWidth="1" />
                    <text x={xPos} y="265" textAnchor="middle" fontSize="8" fill="currentColor" className="text-muted-foreground">
                        {data.year}
                    </text>
                </g>
              );
          })}

        </svg>
      </div>
      
      {/* Halving details table */} 
      <button 
        onClick={() => setShowDetails(!showDetails)}
        className="text-sm text-primary hover:underline flex items-center justify-center w-full mb-3"
      >
        {showDetails ? 'Hide' : 'Show'} Halving Details {showDetails ? <ChevronDown className="h-4 w-4 ml-1" /> : <ChevronRight className="h-4 w-4 ml-1" />}
      </button>

      {showDetails && (
        <div className="overflow-x-auto text-xs">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-1.5 text-left font-medium">Halving</th>
                <th className="border border-border p-1.5 text-left font-medium">Year</th>
                <th className="border border-border p-1.5 text-left font-medium">Reward</th>
                <th className="border border-border p-1.5 text-left font-medium">New Coins</th>
                <th className="border border-border p-1.5 text-left font-medium">Total Supply</th>
                <th className="border border-border p-1.5 text-left font-medium">Inflation %</th>
              </tr>
            </thead>
            <tbody>
              {halvingEvents.map((event) => (
                <tr key={event.number}>
                  <td className="border border-border p-1.5">#{event.number}</td>
                  <td className="border border-border p-1.5">{event.year}</td>
                  <td className="border border-border p-1.5">{event.reward} BTC</td>
                  <td className="border border-border p-1.5">{event.newCoins.toLocaleString()}</td>
                  <td className="border border-border p-1.5">{event.totalSupply.toLocaleString()}</td>
                  <td className="border border-border p-1.5">{event.inflationRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SupplyScheduleVisualizer;
