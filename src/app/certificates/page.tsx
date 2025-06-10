'use client';

import React, { useState } from 'react';
import { CertificateDisplay } from '@/components/certification/CertificateDisplay';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { bitcoinModules } from '@/config/learning-modules';

export default function CertificatesPage() {
  const { progress, generatePathCertificate, markSectionComplete, updateSectionProgress, resetProgress } = useLearningProgress();
  const [recipientName, setRecipientName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateTestCertificate = async () => {
    if (!recipientName.trim()) {
      alert('Please enter your name first');
      return;
    }

    setIsGenerating(true);

    try {
      // First, prepare module details
      const moduleDetails = bitcoinModules.map(module => ({
        id: module.id,
        title: module.title,
        completedAt: new Date().toISOString(),
        sections: module.sections.map(section => ({
          id: section.id,
          title: section.title,
          completedAt: new Date().toISOString()
        }))
      }));

      // Then, mark all modules and sections as complete
      for (const module of bitcoinModules) {
        for (const section of module.sections) {
          try {
            // Mark steps as complete (assuming max 3 steps per section)
            for (let step = 1; step <= (section.checkboxCount || 3); step++) {
              await new Promise(resolve => setTimeout(resolve, 10)); // Small delay to prevent state conflicts
              updateSectionProgress('bitcoin', module.id, section.id, step.toString());
            }
            // Mark section as complete
            markSectionComplete('bitcoin', module.id, section.id);
          } catch (sectionError) {
            console.warn(`Error completing section ${section.id} in module ${module.id}:`, sectionError);
            // Continue with other sections even if one fails
          }
        }
      }

      // Finally, generate the certificate
      await generatePathCertificate('bitcoin', recipientName, moduleDetails);
    } catch (error) {
      console.error('Failed to generate certificate:', error);
      // Don't show the error alert since the certificate might still be generated
    } finally {
      setIsGenerating(false);
    }
  };
  const certificates = Object.values(progress.certificates || {});

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Certificates</h1>
      
      <div className="mb-8 p-6 bg-card rounded-lg border border-border">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Generate Test Certificate</h2>
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <label htmlFor="recipientName" className="block text-sm font-medium mb-2">
              Recipient Name
            </label>
            <input
              type="text"
              id="recipientName"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-input bg-background rounded-md focus:ring-ring focus:border-ring"
            />
          </div>
          <button
            onClick={handleGenerateTestCertificate}
            disabled={isGenerating || !recipientName.trim()}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? 'Generating...' : 'Generate Certificate'}
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Certificates</h2>
        {certificates.length > 0 && (
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all certificates? This cannot be undone.')) {
                resetProgress();
              }
            }}
            className="px-4 py-2 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-md transition-colors"
          >
            Reset All Certificates
          </button>
        )}
      </div>

      {certificates.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map(certificate => (
            <CertificateDisplay key={certificate.id} certificate={certificate} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-card rounded-lg border border-border">
          <p className="text-muted-foreground">No certificates yet. Complete a learning path to earn your first certificate!</p>
        </div>
      )}
    </div>
  );
}
