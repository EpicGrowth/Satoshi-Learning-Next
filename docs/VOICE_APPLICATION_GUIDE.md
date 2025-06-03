# Satoshi Station: Voice Application Guide by Content Type

This guide provides specific instructions for adapting our brand voice across different content formats while maintaining consistency with our core voice principles.

## Technical Tutorials

### Voice Adaptation
- **Technical Precision:** Highest emphasis
- **Practical Focus:** Strong emphasis
- **Strategic Context:** Minimal emphasis

### Tone Characteristics
- Methodical and sequential
- Precision in command syntax and parameters
- Matter-of-fact about security implications
- Direct instructions with clear expected outcomes
- Detailed about potential errors and troubleshooting

### Structural Elements
- Prerequisites clearly stated upfront
- Numbered steps with verification points
- Code blocks with precise formatting
- Troubleshooting sections for common issues
- Security considerations highlighted
- Next steps for building on tutorial

### Language Patterns
- Imperative voice for commands ("Run this command" not "You should run this command")
- Present tense for process descriptions
- Technical terminology with links to definitions when necessary
- Minimal use of qualifiers or subjective assessments

### Do's and Don'ts

**Do:**
- Begin with clear prerequisites and difficulty level
- Provide exact commands with expected outputs
- Explain why each step is necessary
- Include verification steps throughout
- Highlight security implications

**Don't:**
- Use unnecessary analogies that oversimplify
- Skip verification steps for brevity
- Assume knowledge not listed in prerequisites
- Use vague or approximate instructions
- Oversimplify security considerations

### Example
```
# Running a Bitcoin Node: Security-Focused Setup

## Prerequisites
- Linux system with minimum 350GB storage
- Basic command line knowledge
- 2GB RAM minimum (4GB recommended)

## Difficulty: Intermediate

Running your own Bitcoin node eliminates trust requirements for transaction verification. This tutorial creates a security-hardened node configuration.

### 1. Create a dedicated user account

```bash
sudo adduser bitcoin
sudo usermod -aG sudo bitcoin
```

Verify creation:
```bash
id bitcoin
```

Expected output:
```
uid=1001(bitcoin) gid=1001(bitcoin) groups=1001(bitcoin),27(sudo)
```

Creating a dedicated user restricts potential security compromises to this account only.
```

---

## Educational Articles

### Voice Adaptation
- **Technical Precision:** Strong emphasis
- **Practical Focus:** Moderate emphasis
- **Strategic Context:** Strong emphasis

### Tone Characteristics
- Methodical building of concepts
- Clear definitions of technical terms
- Contextual explanations for design decisions
- Historical perspective where relevant
- Verification-focused for all claims

### Structural Elements
- Clear problem statement introduction