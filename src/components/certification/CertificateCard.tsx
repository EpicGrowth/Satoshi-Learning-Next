import React from 'react';
import { Award, Download } from 'lucide-react';
import { type Certificate } from '@/types/progress';

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const pathName = certificate.pathType === 'bitcoin' 
    ? 'Bitcoin' 
    : certificate.pathType === 'lightning' 
    ? 'Lightning Network' 
    : 'Liquid';

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="relative p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Award className="w-8 h-8 text-yellow-500" />
          <h3 className="text-xl font-semibold text-gray-900">{pathName} Certification</h3>
        </div>
        <button 
          className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100"
          onClick={() => {
            // TODO: Implement certificate download
            console.log('Download certificate:', certificate.id);
          }}
        >
          <Download className="w-5 h-5" />
        </button>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Certificate ID:</span> {certificate.id}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Issued:</span> {formatDate(certificate.issuedAt)}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Modules Completed:</span> {certificate.completedModules.length}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Verify this certificate using the verification hash: 
          <span className="font-mono text-xs break-all">{certificate.verificationHash}</span>
        </p>
      </div>
    </div>
  );
}
