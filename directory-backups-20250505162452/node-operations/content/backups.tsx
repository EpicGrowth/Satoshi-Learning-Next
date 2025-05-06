import React from 'react';
import { ModuleContent } from '@/components/learn/shared/components/module-content';
import { Server } from 'lucide-react';

const BackupsContent = () => (
  <div>
    <h2>Lightning Node Backups</h2>
    
    <h3>Importance of Backups</h3>
    <p>
      Proper backup procedures are crucial for Lightning nodes as they manage active payment channels 
      with real funds. Unlike regular Bitcoin transactions, Lightning channels require additional state 
      information to be backed up.
    </p>

    <h3>Types of Backups</h3>
    <ul>
      <li>
        <strong>Static Channel Backup (SCB):</strong>
        <ul>
          <li>Contains essential channel data needed for recovery</li>
          <li>Small file size, easy to backup frequently</li>
          <li>Enables safe channel recovery after node failure</li>
        </ul>
      </li>
      <li>
        <strong>Channel State Backup:</strong>
        <ul>
          <li>Complete channel state information</li>
          <li>Required for full channel restoration</li>
          <li>Must be kept up-to-date</li>
        </ul>
      </li>
      <li>
        <strong>Seed Backup:</strong>
        <ul>
          <li>Node's private key backup</li>
          <li>Critical for fund recovery</li>
          <li>Must be stored securely offline</li>
        </ul>
      </li>
    </ul>

    <h3>Backup Best Practices</h3>
    <ol>
      <li>
        <strong>Regular Backups:</strong>
        <ul>
          <li>Schedule automated backups</li>
          <li>Verify backup integrity regularly</li>
          <li>Keep multiple copies in different locations</li>
        </ul>
      </li>
      <li>
        <strong>Secure Storage:</strong>
        <ul>
          <li>Encrypt sensitive backup data</li>
          <li>Use offline storage for critical backups</li>
          <li>Implement access controls</li>
        </ul>
      </li>
      <li>
        <strong>Testing:</strong>
        <ul>
          <li>Regularly test recovery procedures</li>
          <li>Document recovery steps</li>
          <li>Maintain backup verification logs</li>
        </ul>
      </li>
    </ol>

    <h3>Recovery Procedures</h3>
    <ul>
      <li>Document step-by-step recovery procedures</li>
      <li>Test recovery process in a safe environment</li>
      <li>Keep recovery instructions with backup data</li>
      <li>Include contact information for support</li>
    </ul>
  </div>
);

const BackupsModule = () => {
  return (
    <ModuleContent
      moduleId="lightning-node-operations"
      moduleTitle="Node Operations"
      sectionTitle="Backups"
      moduleDescription="Learn about Lightning node backup strategies and best practices"
      difficulty="Beginner"
      icon={Server}
      sections={[
        {
          id: 'backups',
          title: 'Node Backups',
          content: <BackupsContent />
        }
      ]}
      verificationId="backups"
    />
  );
};

export default BackupsModule;
