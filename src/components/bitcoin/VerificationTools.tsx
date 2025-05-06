import React, { useState } from 'react';
import styled from 'styled-components';

const VerificationContainer = styled.div`
  padding: 24px;
  background: #f7f9fb;
  border-radius: 8px;
  border: 1px solid #e0e5eb;
  margin-bottom: 32px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #1e3a8a;
  margin-bottom: 16px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  color: #4b5563;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const ToolCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ToolHeader = styled.div`
  background: #1e3a8a;
  color: white;
  padding: 16px;
`;

const ToolTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const ToolDescription = styled.div`
  padding: 16px;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ToolButton = styled.button`
  display: block;
  width: 100%;
  background: #f2f7ff;
  color: #1e3a8a;
  border: none;
  padding: 12px 16px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #e5efff;
  }
`;

interface Tool {
  id: string;
  title: string;
  description: string;
  component: string;
}

const verificationTools: Tool[] = [
  {
    id: 'merkle-proof',
    title: 'Merkle Proof Verification',
    description: 'Verify that a transaction is included in a block using Merkle proofs, demonstrating how light clients can verify transactions without downloading the entire blockchain.',
    component: 'MerkleVerification'
  },
  {
    id: 'signature-verification',
    title: 'Digital Signature Verification',
    description: 'Verify digital signatures used in Bitcoin transactions to ensure authenticity and prevent tampering.',
    component: 'SignatureVerification'
  },
  {
    id: 'block-header',
    title: 'Block Header Validation',
    description: 'Learn how to validate Bitcoin block headers, including proof-of-work verification, timestamp checks, and difficulty adjustments.',
    component: 'BlockHeaderVerification'
  }
];

interface VerificationToolsProps {
  className?: string;
}

const VerificationTools: React.FC<VerificationToolsProps> = ({ className }) => {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  
  return (
    <VerificationContainer className={className}>
      <Title>Bitcoin Verification Tools</Title>
      <Subtitle>
        Experience the "Don't Trust, Verify" principle in action with these interactive tools.
        Each tool demonstrates a different aspect of Bitcoin's verification mechanisms.
      </Subtitle>
      
      <ToolsGrid>
        {verificationTools.map(tool => (
          <ToolCard key={tool.id}>
            <ToolHeader>
              <ToolTitle>{tool.title}</ToolTitle>
            </ToolHeader>
            <ToolDescription>
              {tool.description}
            </ToolDescription>
            <ToolButton onClick={() => setActiveTool(tool.component)}>
              Try this tool
            </ToolButton>
          </ToolCard>
        ))}
      </ToolsGrid>
      
      {/* Tool-specific components will be implemented in separate files */}
      {activeTool && (
        <div>
          {/* Dynamic component loading will be implemented here */}
        </div>
      )}
    </VerificationContainer>
  );
};

export default VerificationTools;
