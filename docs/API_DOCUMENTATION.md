# Satoshi Station API Documentation

## Overview

This document outlines all APIs used in Satoshi Station, including internal APIs for verification tools, external Bitcoin/Lightning APIs, and third-party integrations. All APIs follow our verification-first approach and prioritize user privacy and security.

## API Categories

### 🔧 **Internal APIs**

#### Verification Tools API
**Base URL**: `/api/verify`
**Purpose**: Provides backend services for Bitcoin verification tools
**Authentication**: None (public endpoints)

##### Block Explorer API
**Endpoint**: `/api/verify/blocks`

```typescript
// GET /api/verify/blocks/[blockId]
interface BlockResponse {
  hash: string;
  height: number;
  timestamp: number;
  size: number;
  tx_count: number;
  merkle_root: string;
  previous_block_hash: string;
  difficulty: number;
  nonce: number;
  transactions?: Transaction[];
}

// GET /api/verify/blocks/[blockId]/transactions
interface TransactionListResponse {
  transactions: Transaction[];
  total_count: number;
  page: number;
  per_page: number;
  has_next: boolean;
  has_prev: boolean;
}

interface Transaction {
  txid: string;
  size: number;
  fee: number;
  inputs: TransactionInput[];
  outputs: TransactionOutput[];
  confirmations: number;
}
```

**Usage Examples**:
```typescript
// Fetch block by height
const block = await fetch('/api/verify/blocks/800000');

// Fetch block by hash
const block = await fetch('/api/verify/blocks/0000000000000000000320283a032748cef8227873ff4872689bf23f1cda83a5');

// Fetch block transactions with pagination
const txs = await fetch('/api/verify/blocks/800000/transactions?page=1&limit=25');
```

**Rate Limiting**: 100 requests per minute per IP
**Caching**: 10 minutes for confirmed blocks, 30 seconds for latest blocks

##### Signature Verification API
**Endpoint**: `/api/verify/signatures`

```typescript
// POST /api/verify/signatures/verify
interface SignatureVerificationRequest {
  address: string;
  message: string;
  signature: string;
}

interface SignatureVerificationResponse {
  valid: boolean;
  address: string;
  message: string;
  signature: string;
  verification_details: {
    public_key: string;
    signature_type: 'ECDSA' | 'Schnorr';
    address_type: 'P2PKH' | 'P2SH' | 'P2WPKH' | 'P2WSH' | 'P2TR';
  };
  error?: string;
}
```

**Usage Example**:
```typescript
const verification = await fetch('/api/verify/signatures/verify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    message: 'Hello, Bitcoin!',
    signature: 'signature_string_here'
  })
});
```

**Security Notes**:
- All cryptographic operations performed server-side
- No private keys are ever transmitted or stored
- Input validation and sanitization applied
- Rate limiting prevents abuse

##### Merkle Proof API
**Endpoint**: `/api/verify/merkle`

```typescript
// GET /api/verify/merkle/[txid]/proof
interface MerkleProofResponse {
  txid: string;
  block_hash: string;
  merkle_root: string;
  proof: {
    position: number;
    path: string[];
    direction: ('left' | 'right')[];
  };
  verification: {
    valid: boolean;
    calculated_root: string;
    steps: ProofStep[];
  };
}

interface ProofStep {
  level: number;
  hash: string;
  sibling_hash: string;
  direction: 'left' | 'right';
  combined_hash: string;
}
```

**Usage Example**:
```typescript
const proof = await fetch('/api/verify/merkle/f2ca1bb6c7e907d06dafe4687cce/proof');
```

#### Learning Progress API
**Endpoint**: `/api/progress`
**Purpose**: Manages user learning progress (future enhancement)
**Authentication**: Session-based (when user accounts are implemented)

```typescript
// GET /api/progress/[userId]
interface ProgressResponse {
  user_id: string;
  bitcoin_progress: PathProgress;
  lightning_progress: PathProgress;
  liquid_progress: PathProgress;
  last_updated: string;
}

interface PathProgress {
  modules: ModuleProgress[];
  overall_completion: number;
  time_spent: number;
  achievements: Achievement[];
}

interface ModuleProgress {
  module_id: string;
  sections: SectionProgress[];
  completion_percentage: number;
  last_accessed: string;
}

// POST /api/progress/[userId]/verify
interface VerificationUpdate {
  module_id: string;
  section_id: string;
  verification_id: string;
  verified: boolean;
  timestamp: string;
}
```

### 🌐 **External Bitcoin APIs**

#### Blockstream API Integration
**Base URL**: `https://blockstream.info/api`
**Purpose**: Blockchain data and transaction information
**Rate Limiting**: Respect upstream limits (2 requests/second)

```typescript
// Wrapped API calls with error handling
class BlockstreamAPI {
  private baseURL = 'https://blockstream.info/api';
  
  async getBlock(blockId: string | number): Promise<Block> {
    const response = await fetch(`${this.baseURL}/block/${blockId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch block: ${response.statusText}`);
    }
    return response.json();
  }
  
  async getTransaction(txid: string): Promise<Transaction> {
    const response = await fetch(`${this.baseURL}/tx/${txid}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch transaction: ${response.statusText}`);
    }
    return response.json();
  }
  
  async getAddress(address: string): Promise<AddressInfo> {
    const response = await fetch(`${this.baseURL}/address/${address}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch address: ${response.statusText}`);
    }
    return response.json();
  }
}
```

#### Mempool.space API Integration
**Base URL**: `https://mempool.space/api/v1`
**Purpose**: Fee estimation and mempool statistics
**Usage**: Backup for block data and fee recommendations

```typescript
interface MempoolAPI {
  getFeeEstimates(): Promise<FeeEstimates>;
  getMempoolStats(): Promise<MempoolStats>;
  getBlockStats(): Promise<BlockStats>;
}

interface FeeEstimates {
  fastestFee: number;    // Next block confirmation
  halfHourFee: number;   // 30 minute confirmation
  hourFee: number;       // 1 hour confirmation
  economyFee: number;    // Lower priority
  minimumFee: number;    // Network minimum
}
```

### ⚡ **Lightning Network APIs**

#### Lightning Labs API (Future)
**Purpose**: Lightning Network data and node information
**Implementation Status**: Planned for Lightning learning path enhancement

```typescript
interface LightningAPI {
  getNodeInfo(pubkey: string): Promise<NodeInfo>;
  getChannelInfo(channelId: string): Promise<ChannelInfo>;
  getNetworkGraph(): Promise<NetworkGraph>;
  getInvoice(paymentHash: string): Promise<Invoice>;
}

interface NodeInfo {
  pubkey: string;
  alias: string;
  color: string;
  num_channels: number;
  total_capacity: number;
  addresses: NodeAddress[];
  features: FeatureFlags;
}
```

#### 1ML API Integration
**Base URL**: `https://1ml.com/api`
**Purpose**: Lightning Network statistics and node discovery

```typescript
interface OneMLAPI {
  getTopNodes(): Promise<NodeRanking[]>;
  getNetworkStats(): Promise<NetworkStatistics>;
  searchNodes(query: string): Promise<NodeSearchResult[]>;
}
```

### 🏦 **Liquid Network APIs**

#### Blockstream Liquid API
**Base URL**: `https://blockstream.info/liquid/api`
**Purpose**: Liquid sidechain data and asset information

```typescript
interface LiquidAPI {
  getAssets(): Promise<Asset[]>;
  getAsset(assetId: string): Promise<AssetDetails>;
  getPegInAddress(): Promise<PegInInfo>;
  getPegOutTransaction(txid: string): Promise<PegOutInfo>;
}

interface Asset {
  asset_id: string;
  name: string;
  ticker: string;
  precision: number;
  issuer_pubkey: string;
  total_supply: number;
  circulation: number;
  registry_data: AssetRegistry;
}
```

## API Security and Best Practices

### 🔒 **Security Implementation**

#### Rate Limiting
```typescript
// API route rate limiting configuration
export const rateLimit = {
  windowMs: 60 * 1000, // 1 minute
  max: 100, // requests per window
  message: 'Too many requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
};

// Per-endpoint specific limits
export const endpointLimits = {
  '/api/verify/blocks': { windowMs: 60000, max: 60 },
  '/api/verify/signatures': { windowMs: 60000, max: 30 },
  '/api/verify/merkle': { windowMs: 60000, max: 60 },
};
```

#### Input Validation
```typescript
import { z } from 'zod';

// Block ID validation (height or hash)
const blockIdSchema = z.union([
  z.number().int().min(0).max(1000000), // Block height
  z.string().regex(/^[0-9a-fA-F]{64}$/) // Block hash
]);

// Bitcoin address validation
const bitcoinAddressSchema = z.string().refine((addr) => {
  return /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(addr) || // Legacy
         /^bc1[a-z0-9]{39,59}$/.test(addr) ||              // Bech32
         /^3[a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(addr);      // P2SH
}, 'Invalid Bitcoin address format');

// Signature validation
const signatureSchema = z.object({
  address: bitcoinAddressSchema,
  message: z.string().min(1).max(1000),
  signature: z.string().min(1).max(200)
});
```

#### Error Handling
```typescript
export class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code: string = 'INTERNAL_ERROR'
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export const errorHandler = (error: Error, req: Request, res: Response) => {
  if (error instanceof APIError) {
    return res.status(error.statusCode).json({
      error: {
        message: error.message,
        code: error.code,
        timestamp: new Date().toISOString()
      }
    });
  }
  
  // Log unexpected errors
  console.error('Unexpected API error:', error);
  
  return res.status(500).json({
    error: {
      message: 'Internal server error',
      code: 'INTERNAL_ERROR',
      timestamp: new Date().toISOString()
    }
  });
};
```

### 📊 **Monitoring and Analytics**

#### API Metrics Collection
```typescript
interface APIMetrics {
  endpoint: string;
  method: string;
  status_code: number;
  response_time: number;
  timestamp: string;
  user_agent?: string;
  ip_address: string;
  error_code?: string;
}

// Metric collection middleware
export const metricsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();
  
  res.on('finish', () => {
    const metrics: APIMetrics = {
      endpoint: req.path,
      method: req.method,
      status_code: res.statusCode,
      response_time: Date.now() - startTime,
      timestamp: new Date().toISOString(),
      ip_address: req.ip,
      user_agent: req.get('User-Agent')
    };
    
    // Send to analytics service
    collectMetrics(metrics);
  });
  
  next();
};
```

#### Health Checks
```typescript
// GET /api/health
interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  version: string;
  services: ServiceHealth[];
  uptime: number;
}

interface ServiceHealth {
  name: string;
  status: 'up' | 'down' | 'degraded';
  response_time?: number;
  last_check: string;
  error?: string;
}

export async function healthCheck(): Promise<HealthCheckResponse> {
  const services = await Promise.allSettled([
    checkBlockstreamAPI(),
    checkMempoolAPI(),
    checkDatabase(),
    checkRedis()
  ]);
  
  return {
    status: calculateOverallHealth(services),
    timestamp: new Date().toISOString(),
    version: process.env.APP_VERSION || 'unknown',
    services: services.map(formatServiceHealth),
    uptime: process.uptime()
  };
}
```

## API Client Libraries

### 📱 **Frontend Integration**

#### React Query Integration
```typescript
import { useQuery, useMutation } from '@tanstack/react-query';

// Block data fetching
export const useBlock = (blockId: string | number) => {
  return useQuery({
    queryKey: ['block', blockId],
    queryFn: () => fetchBlock(blockId),
    staleTime: 10 * 60 * 1000, // 10 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
    retry: (failureCount, error) => {
      if (error.status === 404) return false;
      return failureCount < 3;
    }
  });
};

// Signature verification
export const useSignatureVerification = () => {
  return useMutation({
    mutationFn: verifySignature,
    onSuccess: (data) => {
      // Handle successful verification
      console.log('Signature verified:', data.valid);
    },
    onError: (error) => {
      // Handle verification error
      console.error('Verification failed:', error.message);
    }
  });
};
```

#### API Client Utilities
```typescript
class APIClient {
  private baseURL: string;
  
  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;
  }
  
  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };
    
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: response.statusText
      }));
      throw new APIError(error.message, response.status, error.code);
    }
    
    return response.json();
  }
  
  // Convenience methods
  get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }
  
  post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

// Export singleton instance
export const apiClient = new APIClient();
```

## Testing APIs

### 🧪 **API Testing Framework**

#### Integration Tests
```typescript
import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import { createServer } from './test-server';

describe('Verification API', () => {
  let server: any;
  
  beforeAll(async () => {
    server = await createServer();
  });
  
  afterAll(async () => {
    await server.close();
  });
  
  describe('Block Explorer API', () => {
    it('should fetch block by height', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/api/verify/blocks/800000'
      });
      
      expect(response.statusCode).toBe(200);
      expect(response.json()).toMatchObject({
        height: 800000,
        hash: expect.any(String),
        timestamp: expect.any(Number)
      });
    });
    
    it('should handle invalid block IDs', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/api/verify/blocks/invalid'
      });
      
      expect(response.statusCode).toBe(400);
      expect(response.json().error.code).toBe('INVALID_BLOCK_ID');
    });
  });
  
  describe('Signature Verification API', () => {
    it('should verify valid signatures', async () => {
      const validSignature = {
        address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        message: 'Test message',
        signature: 'valid_signature_string'
      };
      
      const response = await server.inject({
        method: 'POST',
        url: '/api/verify/signatures/verify',
        payload: validSignature
      });
      
      expect(response.statusCode).toBe(200);
      expect(response.json().valid).toBe(true);
    });
  });
});
```

#### Load Testing
```typescript
// K6 load testing script
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 100 }, // Ramp up
    { duration: '5m', target: 100 }, // Stay at 100 users
    { duration: '2m', target: 0 },   // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests under 500ms
    http_req_failed: ['rate<0.01'],   // Error rate under 1%
  },
};

export default function() {
  // Test block fetching
  let blockResponse = http.get('https://api.sats.sv/verify/blocks/800000');
  check(blockResponse, {
    'block fetch status is 200': (r) => r.status === 200,
    'block fetch duration < 500ms': (r) => r.timings.duration < 500,
  });
  
  sleep(1);
}
```

## Future API Enhancements

### 🚀 **Planned Features**

#### GraphQL API
```graphql
type Query {
  block(id: ID!): Block
  transaction(txid: ID!): Transaction
  address(address: String!): Address
  lightningNode(pubkey: String!): LightningNode
  liquidAsset(assetId: String!): LiquidAsset
}

type Block {
  hash: String!
  height: Int!
  timestamp: Int!
  transactions(first: Int, after: String): TransactionConnection
  merkleRoot: String!
  difficulty: Float!
}

type TransactionConnection {
  edges: [TransactionEdge!]!
  pageInfo: PageInfo!
}
```

#### WebSocket API
```typescript
// Real-time block and transaction updates
interface WebSocketEvents {
  'block:new': (block: Block) => void;
  'transaction:confirmed': (tx: Transaction) => void;
  'mempool:update': (stats: MempoolStats) => void;
  'lightning:channel:update': (channel: ChannelUpdate) => void;
}

// Client usage
const ws = new WebSocket('wss://api.sats.sv/ws');
ws.on('block:new', (block) => {
  console.log('New block:', block.height);
});
```

#### Machine Learning API
```typescript
// AI-powered Bitcoin education assistance
interface MLApi {
  generateExplanation(concept: string, level: 'beginner' | 'intermediate' | 'advanced'): Promise<string>;
  suggestNextTopic(userProgress: UserProgress): Promise<string[]>;
  assessUnderstanding(answers: QuizAnswers): Promise<AssessmentResult>;
}
```

---

*This API documentation is maintained alongside the codebase and updated with each release. For implementation details, see the respective API route files in `src/app/api/`.*