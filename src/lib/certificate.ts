import { type Certificate } from '@/types/progress';
import { createHash } from 'crypto';

export function generateCertificateId(pathType: 'bitcoin' | 'lightning' | 'liquid', timestamp: string): string {
  // Generate a unique certificate ID based on path type and timestamp
  const prefix = pathType === 'bitcoin' ? 'BTC' : pathType === 'lightning' ? 'LN' : 'LQ';
  const hash = createHash('sha256')
    .update(`${pathType}-${timestamp}`)
    .digest('hex')
    .slice(0, 8);
  return `${prefix}-${hash}`;
}

export function generateVerificationHash(certificate: Omit<Certificate, 'verificationHash'>): string {
  // Generate a verification hash for the certificate
  const dataToHash = JSON.stringify({
    id: certificate.id,
    pathType: certificate.pathType,
    issuedAt: certificate.issuedAt,
    completedModules: certificate.completedModules
  });
  
  return createHash('sha256')
    .update(dataToHash)
    .digest('hex');
}

export function createCertificate(
  pathType: 'bitcoin' | 'lightning' | 'liquid',
  recipientName: string,
  completedModules: string[],
  moduleDetails: Array<{
    id: string;
    title: string;
    completedAt: string;
    sections: Array<{
      id: string;
      title: string;
      completedAt: string;
    }>;
  }>
): Certificate {
  const issuedAt = new Date().toISOString();
  const id = generateCertificateId(pathType, issuedAt);
  
  const certificateData = {
    id,
    recipientName,
    pathType,
    issuedAt,
    completedModules,
    moduleDetails
  };

  return {
    ...certificateData,
    verificationHash: generateVerificationHash(certificateData)
  };
}

export function verifyCertificate(certificate: Certificate): boolean {
  // Verify the certificate's authenticity by checking its hash
  const { verificationHash, ...certificateData } = certificate;
  const computedHash = generateVerificationHash(certificateData);
  return computedHash === verificationHash;
}

export function isPathCompleted(
  pathType: 'bitcoin' | 'lightning' | 'liquid',
  completedModules: string[],
  requiredModules: string[]
): boolean {
  // Check if all required modules for the path are completed
  return requiredModules.every(moduleId => completedModules.includes(moduleId));
}
