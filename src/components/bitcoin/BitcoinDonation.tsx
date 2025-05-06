import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

const DonationContainer = styled.div`
  background: #f7f9fb;
  border-radius: 8px;
  padding: 24px;
  margin: 20px 0;
  border: 1px solid #e0e5eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #1e3a8a;
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e5eb;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  background: ${props => props.active ? '#f2f7ff' : 'transparent'};
  border: none;
  border-bottom: ${props => props.active ? '2px solid #1e3a8a' : 'none'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #f2f7ff;
  }
`;

const AddressBox = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #e0e5eb;
  border-radius: 4px;
  padding: 8px 12px;
  margin-bottom: 16px;
`;

const Address = styled.code`
  flex: 1;
  word-break: break-all;
  font-size: 0.9rem;
`;

const CopyButton = styled.button`
  background: #1e3a8a;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 12px;
  cursor: pointer;
  margin-left: 8px;
  transition: background 0.2s;
  
  &:hover {
    background: #152b5e;
  }
`;

const QRContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const InfoText = styled.p`
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.5;
`;

// Replace these with your actual addresses
const BITCOIN_ADDRESS = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";
const LIGHTNING_ADDRESS = "lnbc1p3zg42hpp5fzfmgwq6xawx6j4zuy5ynpwcnqkl38a9l0jx33k6nz79rgjkgs2qdqqcqzzgxqyz5vqsp5usyc4lk9chsfp97stjtmveejd3hy4xl3xw8ts0c5yqtl0467e6mq9qyyssqy7zr9xpzl07zhftkz94g5f97f7929772lx9ug5zqja95yjkgrxzavkrdlk452l0xvyhxa6v3ajq0gsgpw3072efxvg954cg6v4rtucpqvp5fz";

interface BitcoinDonationProps {
  className?: string;
}

const BitcoinDonation: React.FC<BitcoinDonationProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<'bitcoin' | 'lightning'>('bitcoin');
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  
  useEffect(() => {
    const address = activeTab === 'bitcoin' ? BITCOIN_ADDRESS : LIGHTNING_ADDRESS;
    const prefix = activeTab === 'bitcoin' ? 'bitcoin:' : '';
    
    QRCode.toDataURL(prefix + address, { errorCorrectionLevel: 'H' })
      .then(url => setQrCodeUrl(url))
      .catch(err => console.error('Error generating QR code:', err));
  }, [activeTab]);
  
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const currentAddress = activeTab === 'bitcoin' ? BITCOIN_ADDRESS : LIGHTNING_ADDRESS;
  
  return (
    <DonationContainer className={className}>
      <Title>Support Satoshi Station</Title>
      <InfoText>
        Help us continue providing educational resources about Bitcoin and the Lightning Network.
        Your donations directly support our development of verification tools and learning materials.
      </InfoText>
      
      <Tabs>
        <Tab 
          active={activeTab === 'bitcoin'} 
          onClick={() => setActiveTab('bitcoin')}
        >
          Bitcoin
        </Tab>
        <Tab 
          active={activeTab === 'lightning'} 
          onClick={() => setActiveTab('lightning')}
        >
          Lightning Network
        </Tab>
      </Tabs>
      
      <AddressBox>
        <Address>{currentAddress}</Address>
        <CopyToClipboard text={currentAddress} onCopy={handleCopy}>
          <CopyButton>{copied ? 'Copied!' : 'Copy'}</CopyButton>
        </CopyToClipboard>
      </AddressBox>
      
      <QRContainer>
        {qrCodeUrl && (
          <img 
            src={qrCodeUrl} 
            alt={`${activeTab === 'bitcoin' ? 'Bitcoin' : 'Lightning'} QR Code`} 
            width={180} 
            height={180} 
          />
        )}
      </QRContainer>
      
      <InfoText>
        {activeTab === 'bitcoin' 
          ? 'Send any amount of Bitcoin to this address. Transaction confirmations typically take 10-60 minutes.'
          : 'Lightning payments are instant and have minimal fees. Scan this QR code with your Lightning wallet.'}
      </InfoText>
    </DonationContainer>
  );
};

export default BitcoinDonation;
