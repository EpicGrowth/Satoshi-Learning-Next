'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Droplet, Layers, AlertCircle, InfoIcon, ExternalLink, Copy } from 'lucide-react';
import { getLiquidAsset, getRegisteredLiquidAssets, LBTC_ASSET_ID, LiquidAsset } from '@/lib/api/liquid-api';

export function AssetExplorer() {
  const [searchInput, setSearchInput] = useState('');
  const [assetId, setAssetId] = useState(LBTC_ASSET_ID); // Default to L-BTC
  const [currentAsset, setCurrentAsset] = useState<LiquidAsset | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [popularAssets, setPopularAssets] = useState<Record<string, LiquidAsset>>({});
  const [copied, setCopied] = useState(false);

  // Fetch popular assets on component mount
  useEffect(() => {
    async function fetchPopularAssets() {
      try {
        // Attempt to get registered assets from the API
        const assets = await getRegisteredLiquidAssets();
        setPopularAssets(assets);
      } catch (error) {
        console.error('Error fetching registered assets:', error);
        // Fallback to hardcoded popular assets if API fails
        setPopularAssets({
          [LBTC_ASSET_ID]: {
            asset_id: LBTC_ASSET_ID,
            chain_stats: {
              tx_count: 0,
              issuance_count: 1,
              issued_amount: 0,
              burned_amount: 0,
              has_blinded_issuances: true,
              reissuance_tokens: '',
              burned_reissuance_tokens: '',
            },
            name: 'Liquid Bitcoin',
            ticker: 'L-BTC',
            precision: 8,
            entity: {
              domain: 'blockstream.com',
            },
            status: {
              confirmed: true,
              block_height: 1,
              block_hash: '',
              block_time: 0,
            },
          },
        });
      }
    }

    fetchPopularAssets();
    // Also fetch the default asset (L-BTC)
    fetchAsset(LBTC_ASSET_ID);
  }, []);

  // Function to fetch asset data
  async function fetchAsset(id: string) {
    setLoading(true);
    setError(null);
    
    try {
      const asset = await getLiquidAsset(id);
      setCurrentAsset(asset);
      setAssetId(id);
    } catch (error) {
      console.error('Error fetching asset:', error);
      setError('Unable to find asset with this ID. Please check the ID and try again.');
      setCurrentAsset(null);
    } finally {
      setLoading(false);
    }
  }

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      fetchAsset(searchInput.trim());
    }
  };

  // Handle copy to clipboard
  const handleCopy = () => {
    if (currentAsset) {
      navigator.clipboard.writeText(currentAsset.asset_id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Format timestamp to readable date
  const formatDate = (timestamp: number) => {
    if (!timestamp) return 'Unknown';
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  // Format large numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="space-y-6">
      <Card className="border-cyan-600/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-cyan-600" />
            Liquid Asset Explorer
          </CardTitle>
          <CardDescription>
            Explore assets on the Liquid Network using the Blockstream API
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              placeholder="Enter asset ID..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700">
              Search
            </Button>
          </form>

          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Popular assets:</p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className={`${assetId === LBTC_ASSET_ID ? 'border-cyan-600 text-cyan-600' : ''}`}
                onClick={() => fetchAsset(LBTC_ASSET_ID)}
              >
                L-BTC
              </Button>
              {Object.entries(popularAssets)
                .filter(([id]) => id !== LBTC_ASSET_ID) // Filter out L-BTC since we already have a button for it
                .slice(0, 5) // Limit to 5 popular assets
                .map(([id, asset]) => (
                  <Button
                    key={id}
                    variant="outline"
                    size="sm"
                    className={`${assetId === id ? 'border-cyan-600 text-cyan-600' : ''}`}
                    onClick={() => fetchAsset(id)}
                  >
                    {asset.ticker || asset.name || id.substring(0, 8) + '...'}
                  </Button>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600"></div>
            </div>
          </CardContent>
        </Card>
      ) : error ? (
        <Card className="border-red-400/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-500">
              <AlertCircle className="h-5 w-5" />
              Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{error}</p>
          </CardContent>
        </Card>
      ) : currentAsset ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Droplet className="h-5 w-5 text-cyan-600" />
                {currentAsset.name || 'Unnamed Asset'}
                {currentAsset.ticker && <span className="text-sm text-muted-foreground ml-2">({currentAsset.ticker})</span>}
              </div>
              <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 px-2">
                {copied ? (
                  <span className="text-green-600 text-xs">Copied!</span>
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </CardTitle>
            <CardDescription className="flex items-center gap-1 break-all font-mono text-xs">
              {currentAsset.asset_id}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                  <InfoIcon className="h-4 w-4 text-cyan-600" />
                  Asset Information
                </h4>
                <div className="bg-muted/50 rounded-md p-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Precision:</span>{' '}
                      <span className="font-medium">{currentAsset.precision || 0}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Issuer Domain:</span>{' '}
                      <span className="font-medium">
                        {currentAsset.entity?.domain || 'Unknown'}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Issuance Date:</span>{' '}
                      <span className="font-medium">
                        {formatDate(currentAsset.status?.block_time)}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Block Height:</span>{' '}
                      <span className="font-medium">
                        {currentAsset.status?.block_height || 'Unknown'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                  <Layers className="h-4 w-4 text-cyan-600" />
                  Chain Statistics
                </h4>
                <div className="bg-muted/50 rounded-md p-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Transaction Count:</span>{' '}
                      <span className="font-medium">
                        {formatNumber(currentAsset.chain_stats?.tx_count || 0)}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Issuance Count:</span>{' '}
                      <span className="font-medium">
                        {formatNumber(currentAsset.chain_stats?.issuance_count || 0)}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Issued Amount:</span>{' '}
                      <span className="font-medium">
                        {currentAsset.chain_stats?.has_blinded_issuances
                          ? 'Confidential'
                          : formatNumber(currentAsset.chain_stats?.issued_amount || 0)}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Burned Amount:</span>{' '}
                      <span className="font-medium">
                        {currentAsset.chain_stats?.has_blinded_issuances
                          ? 'Confidential'
                          : formatNumber(currentAsset.chain_stats?.burned_amount || 0)}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Has Blinded Issuances:</span>{' '}
                      <span className="font-medium">
                        {currentAsset.chain_stats?.has_blinded_issuances ? 'Yes' : 'No'}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Reissuable:</span>{' '}
                      <span className="font-medium">
                        {currentAsset.chain_stats?.reissuance_tokens ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between pt-2">
            <p className="text-xs text-muted-foreground">
              Data provided by Blockstream Liquid API
            </p>
            <a
              href={`https://blockstream.info/liquid/asset/${currentAsset.asset_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-1 text-cyan-600 hover:underline"
            >
              View on Explorer <ExternalLink className="h-3 w-3" />
            </a>
          </CardFooter>
        </Card>
      ) : null}

      <div className="rounded-md bg-cyan-50 dark:bg-cyan-950/30 p-4 border border-cyan-200 dark:border-cyan-900/50">
        <h4 className="text-sm font-medium mb-2 text-cyan-800 dark:text-cyan-300 flex items-center gap-1">
          <InfoIcon className="h-4 w-4" />
          Learning About Liquid Assets
        </h4>
        <p className="text-sm text-cyan-700 dark:text-cyan-400">
          The Liquid Network supports various types of assets beyond L-BTC, including tokens, securities, and stablecoins. 
          Each asset has a unique identifier (Asset ID) and can be transferred with privacy using Confidential Transactions.
          Try exploring different assets to understand the ecosystem!
        </p>
      </div>
    </div>
  );
}