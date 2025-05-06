# Satoshi Station: Content Style Guide (Comprehensive)

## Integration with Existing sats.sv Content

### Preservation Framework
- Maintain current typography system and font choices from sats.sv
- Build upon established formatting patterns for core content
- Enhance existing voice characteristics while maintaining technical focus
- Expand current terminology standards with additional precision
- Implement changes as an evolution, not replacement

### Enhancement Strategy
- Preserve successful patterns while adding standardization
- Specify technical areas requiring additional precision
- Expand structure for new content types while respecting existing formats
- Use existing content as foundation for expanded guidelines
- Document successful patterns for consistent application

## Technical Terminology

### Bitcoin Terminology
- **Bitcoin**: Capitalize when referring to the protocol, network, or concept
- **bitcoin**: Lowercase when referring to the currency unit
- **BTC**: Standard abbreviation for bitcoin
- **sats/satoshis**: Acceptable for small denominations (1 satoshi = 0.00000001 BTC)
- **blockchain**: One word, lowercase
- **block explorer**: Two words, lowercase
- **block height**: Two words, lowercase
- **hash rate**: Two words, not "hashrate"
- **proof-of-work**: Hyphenated when used as a compound modifier

### Lightning Network Terminology
- **Lightning Network**: Capitalize both words when referring to the protocol
- **lightning payment**: Lowercase when referring to actions on the network
- **channel**: Lowercase when referring to Lightning payment channels
- **HTLC**: Acceptable abbreviation for Hash Time-Locked Contract
- **node**: Lowercase when referring to Lightning nodes
- **routing**: Lowercase when referring to payment routing
- **liquidity**: Lowercase when referring to channel capacity

### Technical Concepts
- **public key/private key**: Two words, lowercase
- **mnemonic seed/seed phrase**: Lowercase, avoid "recovery phrase"
- **cold storage/hot wallet**: Lowercase, no hyphen
- **on-chain/off-chain**: Hyphenated
- **non-custodial**: Hyphenated
- **trustless**: One word
- **self-custody**: Hyphenated
- **multisignature**: One word, can abbreviate as "multisig"

## Formatting Conventions

### Code Examples
- Use triple backticks with language specification:
  ```javascript
  const satoshis = 100000000; // 1 BTC
  ```
- Indent code blocks with 2 spaces
- Include comments for complex operations
- Separate code sections with blank lines for readability

### Command Line Instructions
- Use `$` to indicate command prompt:
  ```
  $ bitcoin-cli getblockchaininfo
  ```
- Indicate user inputs with angle brackets:
  ```
  $ bitcoin-cli getnewaddress <label>
  ```
- Wrap output in code blocks without the prompt symbol

### Technical Diagrams
- Use consistent color scheme for diagram elements:
  - Nodes: Blue
  - Transactions: Green
  - Blocks: Orange
  - Signatures: Purple
- Include legend for all diagrams
- Maintain minimalist design with only essential elements
- Use directional arrows to indicate data flow

## Grammar and Style

### Numbers and Units
- Spell out numbers one through nine; use numerals for 10 and above
- Use numerals for all technical measurements and values
- Use commas as thousand separators (e.g., 1,000 BTC)
- Use period as decimal separator (e.g., 0.1 BTC)
- Use space between number and unit (e.g., 50 MB)

### Abbreviations and Acronyms
- Define acronyms at first use in each article
- Avoid unnecessary abbreviations in educational content
- Don't use periods in acronyms (e.g., US not U.S.)
- Use common Bitcoin abbreviations without definition (BTC, UTXO)

### Punctuation
- Use Oxford comma in series (e.g., "nodes, miners, and developers")
- Use em dash (—) without spaces for breaks in thought
- Use serial semicolons for complex lists
- Use colon to introduce lists, explanations, or examples
- Minimize exclamation points; use sparingly for genuine emphasis

### Capitalization
- Use sentence case for headings (capitalize first word and proper nouns only)
- Capitalize proper names of specific technologies (e.g., Taproot, Schnorr signatures)
- Do not capitalize generic technical terms (e.g., consensus algorithm, cryptography)

## Content Structure

### Educational Articles
- Begin with a clear problem statement
- Follow with a concise TL;DR summary
- Use hierarchical headings (H2, H3, H4)
- Include "Verification Steps" section where applicable
- End with "Next Steps" or "Learn More" section
- Keep paragraphs under 4-5 sentences

### Technical Tutorials
- Begin with prerequisites and difficulty level
- List required software/hardware
- Structure as sequential, numbered steps
- Include troubleshooting section for common issues
- End with verification methods to confirm success
- Include code blocks for all commands/scripts

### Definitions and Explanations
- Begin with concise, technical definition
- Follow with expanded explanation
- Include real-world analogies where helpful
- Connect concept to Bitcoin's fundamental principles
- Provide verification methods for conceptual claims

## Voice and Tone

### Technical Precision
- Prioritize accuracy over simplicity
- Be exact in describing technical processes
- Quantify claims when possible (e.g., "reduces validation time by approximately 15%")
- Avoid subjective qualifiers (e.g., "very fast," "much better")
- Cite sources or reference code for technical claims

### Accessibility
- Define technical terms at first use
- Use analogies to explain complex concepts
- Layer complexity gradually
- Break down processes into discrete steps
- Use visualizations to support technical explanations

### Verification Focus
- Structure explanations to enable independent verification
- Include commands or tools for verification
- Specify expected outcomes precisely
- Explain implications of verification results
- Encourage readers to verify claims themselves

## Common Pitfalls to Avoid

### Technical Inaccuracies
- Confusing on-chain and Layer 2 characteristics
- Oversimplifying security models
- Misrepresenting trust assumptions
- Conflating protocol rules with implementation details
- Using outdated technical information

### Stylistic Issues
- Marketing-style hyperbole
- Vague generalizations
- Unnecessary jargon
- Passive voice in procedural instructions
- Excessive technical detail without practical context

## Content Type-Specific Guidelines

### Concept Explanations

#### Structure
1. **Definition**: Clear, technically precise statement
2. **Problem Statement**: What issue does this concept address?
3. **Technical Mechanism**: How it works with precise details
4. **Verification Method**: How to independently verify
5. **Real-World Implications**: Practical importance
6. **Further Resources**: Where to learn more

#### Example: UTXO Concept Explanation
```
# Understanding Bitcoin UTXOs

## Definition
A UTXO (Unspent Transaction Output) is an indivisible chunk of bitcoin locked to a specific owner and available for spending in future transactions.

## The Problem
Traditional financial ledgers track account balances, which creates synchronization challenges in distributed systems. Bitcoin needed a way to verify ownership and prevent double-spending without central coordination.

## How UTXOs Work
Rather than account balances, Bitcoin tracks unspent outputs from previous transactions. When you receive bitcoin, you're actually receiving an output locked to your key. When you spend, you consume entire UTXOs as inputs and create new outputs.

[Technical diagram showing TXID and output index structure]

## Verification
You can verify your own UTXO set by:
```bash
$ bitcoin-cli listunspent
```
This shows all UTXOs controlled by your wallet.

To verify the global UTXO set size:
```bash
$ bitcoin-cli gettxoutsetinfo
```

## Practical Implications
The UTXO model has several important consequences:
1. Transactions consume existing UTXOs entirely, creating change when needed
2. Your "balance" is actually the sum of discrete UTXOs
3. Transaction size increases with the number of inputs
4. Privacy considerations vary depending on how UTXOs are combined

## Learn More
- [Link to technical documentation]
- [Link to advanced UTXO management guide]
- [Link to privacy implications article]
```

### Step-by-Step Tutorials

#### Structure
1. **Overview**: Purpose and outcome
2. **Prerequisites**: Required knowledge, software, and hardware
3. **Difficulty and Duration**: Clearly marked
4. **Step-by-Step Instructions**: Numbered with verification points
5. **Troubleshooting**: Common issues and solutions
6. **Verification**: How to confirm success
7. **Next Steps**: Related tutorials or advanced options

#### Example: Tutorial Structure
```
# Setting Up a Bitcoin Core Full Node

## Overview
This tutorial walks through the process of setting up a Bitcoin Core full node that independently validates all transactions and blocks. By the end, you'll have a functioning node that contributes to Bitcoin's decentralization and security.

## Prerequisites
- A computer with at least 350GB free disk space
- Broadband internet connection (2+ Mbps)
- Basic command line knowledge
- [Optional] External HDD for blockchain storage

## Difficulty: Intermediate
## Estimated Time: 2-3 hours (plus 1-3 days for initial sync)

## Step 1: Download Bitcoin Core
Download the latest version of Bitcoin Core from the official website.

```bash
$ wget https://bitcoincore.org/bin/bitcoin-core-25.0/bitcoin-25.0-x86_64-linux-gnu.tar.gz
```

Verify the download using the provided signatures:
```bash
$ wget https://bitcoincore.org/bin/bitcoin-core-25.0/SHA256SUMS
$ wget https://bitcoincore.org/bin/bitcoin-core-25.0/SHA256SUMS.asc
$ sha256sum --check SHA256SUMS
bitcoin-25.0-x86_64-linux-gnu.tar.gz: OK
```

Further verification with GPG:
```bash
$ gpg --keyserver hkps://keys.openpgp.org --recv-keys 01EA5486DE18A882D4C2684590C8019E36C2E964
$ gpg --verify SHA256SUMS.asc
```

## Step 2: Install Bitcoin Core
...

## Troubleshooting
### Problem: Node won't connect to peers
Check if your firewall is blocking port 8333. Run:
```bash
$ sudo ufw status
```
If port 8333 isn't allowed, add a rule:
```bash
$ sudo ufw allow 8333
```

### Problem: Disk space error during sync
...

## Verification
To verify your node is functioning correctly:

1. Check that your node is accepting connections:
```bash
$ bitcoin-cli getnetworkinfo | grep connections
```
You should see a non-zero number of connections.

2. Verify blockchain sync status:
```bash
$ bitcoin-cli getblockchaininfo | grep blocks
$ bitcoin-cli getblockchaininfo | grep headers
```
When these numbers match, your blockchain is fully synced.

## Next Steps
- [Link to securing your node tutorial]
- [Link to lightning node setup]
- [Link to RPC commands guide]
```

### Technical Comparisons

#### Structure
1. **Comparison Purpose**: Why these options are being compared
2. **Technical Parameters**: Side-by-side factual comparison
3. **Use Case Analysis**: When each option is appropriate
4. **Trade-off Framework**: Clear presentation of advantages/disadvantages
5. **Verification Methods**: How to test claims independently
6. **Decision Guidance**: Framework for making informed choices

#### Example Framework
```
# Bitcoin Hardware Wallet Comparison: Coldcard vs Trezor

## Comparison Framework
This comparison evaluates two popular hardware wallets based on security model, technical features, sovereignty implications, and verification capabilities.

## Technical Specifications

| Feature | Coldcard Mk4 | Trezor Model T |
|---------|-------------|----------------|
| Secure Element | Yes (ATECC608B) | No |
| Air-gap Capability | Yes (microSD) | No |
| Open Source | Partial | Full (hardware & software) |
| Screen | 128×64 monochrome | 240×240 color touchscreen |
| Connectivity | USB-C, microSD | USB-C |
| Multisig Support | Yes (up to 8-of-8) | Yes (up to 15-of-15) |
| PSBT Support | Yes | Yes |
| Price | $149 | $219 |

## Security Model Analysis
### Coldcard
The Coldcard implements a security model based on:
- Dedicated secure element for private key operations
- Physical security mechanisms (anti-tampering)
- Optional complete air-gap operation
- Encrypted backups on microSD cards

### Trezor
The Trezor implements a security model based on:
- Fully open source design (verifiable supply chain)
- Deterministic builds (verifiable software)
- PIN protection with exponential backoff
- Shamir Secret Sharing backup option

## Verification Capabilities
### How to verify Coldcard authenticity:
1. Check the holographic seal on packaging
2. Verify the device provides expected entropy at first boot
3. Compare displayed xpub against derivation from seed

### How to verify Trezor authenticity:
1. Verify bootloader signature during initialization
2. Confirm firmware signature verification
3. Compare firmware hash with published values

## Use Case Recommendations
### Coldcard is better suited for:
- Users prioritizing air-gap security
- Cold storage of larger amounts
- Advanced multisig configurations
- Users comfortable with technical interfaces

### Trezor is better suited for:
- Users valuing fully open source hardware
- Those needing intuitive touchscreen interface
- Users integrating with various cryptocurrencies
- Beginners to hardware security

## Technical Trade-offs
Each device represents different security trade-offs:
- Secure element (closed source but specialized hardware) vs. fully open architecture
- Air-gap capability vs. user interface simplicity
- Specialized Bitcoin focus vs. multi-currency flexibility

## Independent Testing Resources
To verify these claims independently:
- [Link to security audit reports]
- [Link to testing methodology]
- [Link to community verification tests]
```

## Editorial Process

### Pre-Publication Checklist
- Technical accuracy verified by subject matter expert
- Code examples tested in current environment
- Verification steps confirmed to work
- Adherence to style guide confirmed
- Spelling and grammar checked

### Versioning
- Note publication date and last updated date
- Indicate Bitcoin Core version referenced
- Flag content for review when protocol changes occur
- Maintain changelog for substantive updates
- Archive outdated technical content with clear labeling

### Review Roles
- **Technical Reviewer**: Verifies technical accuracy and completeness
- **Content Editor**: Ensures style guide adherence and readability
- **Verification Specialist**: Tests all verification steps and procedures
- **Final Approver**: Signs off on content meeting all standards

## Transitional Implementation

### Integration with Existing Content
- Perform content audit of current sats.sv material
- Document successful patterns for continuation
- Create template documents based on these guidelines
- Prioritize standardization for new and high-traffic content
- Develop style checking tools for the editorial process

### Training and Resources
- Create condensed style reference sheet for quick checks
- Develop onboarding materials for new content creators
- Establish regular style training sessions
- Create example library of excellent content pieces
- Build verification process documentation

This style guide serves as a comprehensive framework for Satoshi Station content, building upon the successful approaches already established on sats.sv while enhancing technical precision, verification focus, and educational effectiveness across all materials.