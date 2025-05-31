/**
 * Liquid Network API Service
 * Interfaces with the Blockstream Liquid API
 */

// Base URL for Blockstream Liquid API
const LIQUID_API_BASE_URL = 'https://blockstream.info/liquid/api';

// Interface for Liquid asset
export interface LiquidAsset {
  asset_id: string;
  chain_stats: {
    tx_count: number;
    issuance_count: number;
    issued_amount: number;
    burned_amount: number;
    has_blinded_issuances: boolean;
    reissuance_tokens: string;
    burned_reissuance_tokens: string;
  };
  name?: string;
  ticker?: string;
  precision?: number;
  entity?: {
    domain: string;
  };
  issuance_txin?: {
    txid: string;
    vin: number;
  };
  issuance_prevout?: {
    txid: string;
    vout: number;
  };
  status: {
    confirmed: boolean;
    block_height: number;
    block_hash: string;
    block_time: number;
  };
}

// Interface for Liquid block
export interface LiquidBlock {
  id: string;
  height: number;
  version: number;
  timestamp: number;
  tx_count: number;
  size: number;
  weight: number;
  merkle_root: string;
  previousblockhash: string;
  mediantime: number;
  nonce: number;
  bits: number;
  difficulty: number;
}

// Interface for Liquid transaction
export interface LiquidTransaction {
  txid: string;
  version: number;
  locktime: number;
  size: number;
  weight: number;
  fee: number;
  status: {
    confirmed: boolean;
    block_height?: number;
    block_hash?: string;
    block_time?: number;
  };
  vin: Array<{
    txid: string;
    vout: number;
    prevout: {
      scriptpubkey: string;
      scriptpubkey_asm: string;
      scriptpubkey_type: string;
      scriptpubkey_address: string;
      value: number;
      valuecommitment?: string;
      asset?: string;
      assetcommitment?: string;
    };
    scriptsig: string;
    scriptsig_asm: string;
    witness: string[];
    is_coinbase: boolean;
    sequence: number;
  }>;
  vout: Array<{
    scriptpubkey: string;
    scriptpubkey_asm: string;
    scriptpubkey_type: string;
    scriptpubkey_address?: string;
    value?: number;
    valuecommitment?: string;
    asset?: string;
    assetcommitment?: string;
  }>;
}

// Interface for Liquid network stats
export interface LiquidNetworkStats {
  tx_count: number;
  block_count: number;
  mempool_count: number;
  difficulty: number;
  issuance_count: number;
  reissuance_count: number;
  peg_in_count: number;
  peg_out_count: number;
  burn_count: number;
}

/**
 * Helper function to fetch data from the Liquid API
 */
async function fetchFromLiquidAPI<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${LIQUID_API_BASE_URL}${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching from Liquid API: ${response.statusText}`);
    }
    
    return response.json() as Promise<T>;
  } catch (error) {
    console.error('Liquid API fetch error:', error);
    throw error;
  }
}

/**
 * Get Liquid network statistics
 */
export async function getLiquidNetworkStats(): Promise<LiquidNetworkStats> {
  return fetchFromLiquidAPI<LiquidNetworkStats>('/stats');
}

/**
 * Get information about a specific Liquid block by hash or height
 */
export async function getLiquidBlock(hashOrHeight: string | number): Promise<LiquidBlock> {
  return fetchFromLiquidAPI<LiquidBlock>(`/block/${hashOrHeight}`);
}

/**
 * Get the most recent Liquid blocks
 */
export async function getLatestLiquidBlocks(): Promise<LiquidBlock[]> {
  return fetchFromLiquidAPI<LiquidBlock[]>('/blocks/tip/n/10');
}

/**
 * Get transactions in a specific Liquid block
 */
export async function getLiquidBlockTransactions(blockHash: string): Promise<string[]> {
  return fetchFromLiquidAPI<string[]>(`/block/${blockHash}/txids`);
}

/**
 * Get information about a specific Liquid transaction
 */
export async function getLiquidTransaction(txid: string): Promise<LiquidTransaction> {
  return fetchFromLiquidAPI<LiquidTransaction>(`/tx/${txid}`);
}

/**
 * Get information about a specific Liquid asset
 */
export async function getLiquidAsset(assetId: string): Promise<LiquidAsset> {
  return fetchFromLiquidAPI<LiquidAsset>(`/asset/${assetId}`);
}

/**
 * Get a list of registered Liquid assets
 */
export async function getRegisteredLiquidAssets(): Promise<Record<string, LiquidAsset>> {
  return fetchFromLiquidAPI<Record<string, LiquidAsset>>('/assets/registry');
}

/**
 * Get mempool information for Liquid
 */
export async function getLiquidMempool(): Promise<string[]> {
  return fetchFromLiquidAPI<string[]>('/mempool/txids');
}

/**
 * Get information about a specific address on Liquid
 */
export async function getLiquidAddress(address: string): Promise<any> {
  return fetchFromLiquidAPI<any>(`/address/${address}`);
}

/**
 * L-BTC Asset ID (Liquid Bitcoin)
 */
export const LBTC_ASSET_ID = '6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d';