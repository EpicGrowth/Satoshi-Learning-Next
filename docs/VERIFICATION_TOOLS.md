# Satoshi Station Verification Tools

## Overview

The verification tools in Satoshi Station allow users to independently verify Bitcoin and Lightning Network data, aligning with the core Bitcoin philosophy of "Don't Trust, Verify." These tools provide both educational value and practical utility.

## Tools Implementation

### 1. Block Explorer (`/verify/blocks`)

The Block Explorer allows users to search for and verify Bitcoin blocks by height or hash.

#### Features

- Search for blocks by height or hash
- View detailed block information
- Verify Merkle root calculations
- Navigate between blocks
- View transaction lists

#### Implementation

- Frontend: React components in `/src/app/verify/blocks/`
- API: Secure backend routes in `/src/app/api/bitcoin/blocks/`
- Data Source: Blockstream API with secure credential management

### 2. Digital Signatures (Planned: `/verify/signatures`)

Tools for verifying cryptographic signatures and creating signed messages.

#### Planned Features

- Message signing
- Signature verification
- Key pair validation
- Address generation

### 3. Merkle Proofs (Planned: `/verify/merkle`)

Tools for verifying transaction inclusion in blocks using Merkle proofs.

#### Merkle Features

- Merkle tree visualization
- Proof generation
- Proof verification
- SPV validation

## Security Implementation

### API Credential Management

Credentials for external APIs are managed securely:

1. **Development Environment**:
   - Credentials stored in `.env.local` (not committed to version control)
   - Sample configuration in `.env.local.example`

2. **Production Environment**:
   - Credentials stored as GitHub Secrets
   - Passed to Cloud Run as environment variables during deployment
   - Accessed securely at runtime via environment variables

### Implementation Details

- Secret management utilities in `/src/lib/secrets.ts`
- API routes handle all external API communication
- No credentials exposed to client-side code
- GitHub Actions workflow configured to pass secrets to Cloud Run

## Adding New Verification Tools

To add a new verification tool:

1. Create a new directory in `/src/app/verify/[tool-name]/`
2. Implement the frontend components
3. Create API routes in `/src/app/api/[service]/[tool-name]/` if needed
4. Update the verification tools list in `/src/app/verify/page.tsx`
5. Document the tool in this file

## Lightning Network Verification (Future)

Future Lightning Network verification tools will include:

1. **Channel Verification**:
   - Verify channel existence and capacity
   - Check channel state and policies

2. **Node Information**:
   - Verify node connectivity and capacity
   - Check routing capabilities

3. **Payment Verification**:
   - Verify payment routes
   - Check fee calculations

These tools will be implemented using a combination of public Lightning Network APIs and optional self-hosted node connections.
