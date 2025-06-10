import React, { useRef } from 'react';
import { Award, Download, Check } from 'lucide-react';
import { type Certificate } from '@/types/progress';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface CertificateDisplayProps {
  certificate: Certificate;
}

export function CertificateDisplay({ certificate }: CertificateDisplayProps) {
  const certificateRef = useRef<HTMLDivElement>(null);
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
    <div ref={certificateRef} className="bg-card rounded-lg shadow-md border border-border p-6 h-full flex flex-col">
      {/* Certificate Header */}
      <div className="text-center border-b border-border pb-6">
        <div className="flex justify-center mb-4">
          <Award className="w-16 h-16 text-yellow-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Certificate of Completion</h1>
        <h2 className="text-lg text-muted-foreground">{pathName} Learning Path</h2>
      </div>

      {/* Certificate Body */}
      <div className="py-6 text-center">
        <p className="text-sm text-muted-foreground mb-1">This is to certify that</p>
        <h2 className="text-xl font-bold mb-2">{certificate.recipientName}</h2>
        <p className="text-sm text-muted-foreground">
          has successfully completed the {pathName} learning path
          <br />on {formatDate(certificate.issuedAt)}
        </p>
      </div>

      {/* Modules Completed */}
      <div className="border-t border-border pt-6 flex-grow">
        <h3 className="text-lg font-semibold mb-4">Completed Modules</h3>
        <div className="space-y-6">
          {certificate.moduleDetails ? (
            // New certificate format with detailed module info
            certificate.moduleDetails.map((module) => (
              <div key={module.id} className="bg-muted/50 rounded-lg p-3">
                <h4 className="font-semibold mb-2 flex items-center text-sm">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  {module.title}
                </h4>
                <div className="pl-7 space-y-1">
                  {module.sections.map((section) => (
                    <div key={section.id} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      {section.title}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Legacy certificate format with just module IDs
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="text-muted-foreground text-sm">
                {certificate.completedModules.map((moduleId) => (
                  <div key={moduleId} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Module: {moduleId}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Certificate Footer */}
      <div className="border-t border-border mt-6 pt-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
          <div className="text-xs text-muted-foreground">
            <p>Certificate ID: {certificate.id}</p>
            <p className="mt-1">
              Verify using hash: <span className="font-mono">{certificate.verificationHash.slice(0, 16)}...</span>
            </p>
          </div>
          <button 
            className="flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-sm"
            onClick={async () => {
              if (!certificateRef.current) return;
              
              try {
                // Create canvas from certificate element
                const canvas = await html2canvas(certificateRef.current, {
                  backgroundColor: '#ffffff',
                  scale: 2, // Higher resolution
                });
                
                // Convert to PDF
                const pdf = new jsPDF({
                  orientation: 'portrait',
                  unit: 'px',
                  format: [canvas.width, canvas.height]
                });
                
                // Add image to PDF
                pdf.addImage(
                  canvas.toDataURL('image/png'),
                  'PNG',
                  0,
                  0,
                  canvas.width,
                  canvas.height
                );
                
                // Download PDF
                pdf.save(`satoshi-station-certificate-${certificate.id}.pdf`);
              } catch (error) {
                console.error('Error generating certificate PDF:', error);
                alert('Failed to generate certificate PDF. Please try again.');
              }
            }}
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
