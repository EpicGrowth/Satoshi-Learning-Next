'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Shield, Lock, KeyRound, FileCode, AlertCircle, Workflow, Settings, Eye, Terminal, Wifi, Server, Bell, NetworkIcon, UserCheck, UserX, Database, HardDrive, FileWarning } from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

const moduleId = 'lightning-node-operations';
const sectionId = 'security-setup';

export default function SecuritySetupPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <SatoshiQuote
            quote="Governments are good at cutting off the heads of centrally controlled networks like Napster, but pure P2P networks like Gnutella and Tor seem to be holding their own."
            source="Satoshi Nakamoto"
            date="November 7, 2008"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-primary" />
              Lightning Node Security Setup
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Proper security configuration is critical for Lightning nodes, which manage active payment channels and hold funds. This section covers essential security measures including access control, encryption, firewall configuration, and security monitoring.
            </p>
          </div>

          {/* Section 1: Access Control */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Lock className="h-5 w-5 mr-2 text-primary" />
              Access Control
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Properly configured access control protects your node from unauthorized access while still allowing legitimate administration and usage.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <UserCheck className="h-4 w-4 mr-2 text-green-500" />
                    Authentication Methods
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Password Protection:</strong> Use strong, unique passwords for all accounts and interfaces.</li>
                    <li><strong>SSH Key Authentication:</strong> Disable password login and use key-based authentication for SSH.</li>
                    <li><strong>API Authentication:</strong> Implement macaroons (LND) or other API access tokens for granular permissions.</li>
                    <li><strong>TLS Certificates:</strong> Configure proper SSL/TLS certificates for API and web interfaces.</li>
                    <li><strong>Two-Factor Authentication:</strong> Add 2FA where possible for administration interfaces.</li>
                  </ul>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <UserX className="h-4 w-4 mr-2 text-red-500" />
                    Authorization & Access Restrictions
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Principle of Least Privilege:</strong> Grant only necessary permissions required for each user/service.</li>
                    <li><strong>Role-Based Access:</strong> Create different access levels for administration vs. monitoring.</li>
                    <li><strong>IP Restrictions:</strong> Limit API access to specific IP addresses or ranges.</li>
                    <li><strong>Command Limitations:</strong> Restrict which RPC commands can be executed remotely.</li>
                    <li><strong>Secure Admin Interfaces:</strong> Place admin UIs behind VPNs or secure proxies.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <Terminal className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                  LND Macaroon Security Example
                </h5>
                <div className="text-sm text-muted-foreground">
                  <p>LND uses macaroons (specialized cookies) for authorization with fine-grained permissions:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                    <li><code>admin.macaroon</code>: Full administrative privileges (highest risk)</li>
                    <li><code>readonly.macaroon</code>: View-only access to node data</li>
                    <li><code>invoice.macaroon</code>: Only allows creating invoices</li>
                    <li>Custom macaroons: Create purpose-specific tokens with exact permissions needed</li>
                  </ul>
                  <p className="mt-2 text-xs italic">When sharing access with services or tools, always use the most restrictive macaroon possible for the task required.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Encryption Setup */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <KeyRound className="h-5 w-5 mr-2 text-primary" />
              Encryption Configuration
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Encryption protects sensitive data both in transit and at rest, ensuring that even if other security measures fail, your data remains protected.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Database className="h-4 w-4 mr-2 text-purple-500" />
                    Data Encryption
                  </h4>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                      <li><strong>Wallet Encryption:</strong> Encrypt wallet files with strong passwords</li>
                      <li><strong>Disk Encryption:</strong> Use full disk encryption for the node's system</li>
                      <li><strong>Database Security:</strong> Secure channel.db and other critical data stores</li>
                      <li><strong>Secure Memory Management:</strong> Limit exposure of sensitive data in memory</li>
                      <li><strong>Key Derivation:</strong> Use secure key derivation functions (KDFs) with high work factors</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-4 rounded-lg border border-border">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Wifi className="h-4 w-4 mr-2 text-blue-500" />
                    Communication Security
                  </h4>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                      <li><strong>TLS Configuration:</strong> Use strong TLS cipher suites and protocols</li>
                      <li><strong>Certificate Validation:</strong> Properly validate certificates, avoid self-signed certs for important connections</li>
                      <li><strong>Secure RPC:</strong> Encrypt all RPC communications with strong TLS</li>
                      <li><strong>API Transport Security:</strong> Secure REST and gRPC interfaces</li>
                      <li><strong>VPN Usage:</strong> Consider placing administrative interfaces behind a VPN</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h4 className="font-medium mb-2 flex items-center">
                    <KeyRound className="h-4 w-4 mr-2 text-yellow-500" />
                    Key Management
                  </h4>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                      <li><strong>Seed Security:</strong> Store seed phrases offline in secure locations</li>
                      <li><strong>Key Rotation:</strong> Regularly rotate TLS certificates and API keys</li>
                      <li><strong>Hardware Security:</strong> Consider hardware security modules (HSMs) for critical keys</li>
                      <li><strong>Key Backups:</strong> Securely back up keys with encryption and physical security</li>
                      <li><strong>Compartmentalization:</strong> Different keys for different functions</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-4 rounded-lg border border-border">
                  <h4 className="font-medium mb-2 flex items-center">
                    <HardDrive className="h-4 w-4 mr-2 text-green-500" />
                    Backup Encryption
                  </h4>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                      <li><strong>SCB Encryption:</strong> Encrypt Static Channel Backups (LND) or equivalent</li>
                      <li><strong>Encrypted Archives:</strong> Use GPG or other strong encryption for backup files</li>
                      <li><strong>Password Management:</strong> Use a secure system to manage encryption passwords</li>
                      <li><strong>Encrypted Transfer:</strong> Use secure channels when moving backups between systems</li>
                      <li><strong>Offline Storage:</strong> Consider cold storage for critical backups</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Firewall Configuration */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <NetworkIcon className="h-5 w-5 mr-2 text-primary" />
              Firewall & Network Security
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                A properly configured firewall restricts network access to only the services that need to be exposed, limiting the attack surface of your node.
              </p>

              <div className="bg-background p-5 rounded-lg border border-border">
                <h4 className="font-medium mb-3">Essential Firewall Rules</h4>
                <div className="space-y-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h5 className="text-sm font-medium mb-2 flex items-center">
                      <Workflow className="h-4 w-4 mr-2 text-indigo-500" />
                      Port Access Control
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium text-xs">Lightning Services</p>
                        <ul className="list-disc pl-4 text-xs space-y-1 mt-1">
                          <li><strong>9735-9736:</strong> Lightning protocol (inbound connections)</li>
                          <li><strong>10009:</strong> LND gRPC API (restrict carefully)</li>
                          <li><strong>8080/8083:</strong> REST APIs (highly restrict or VPN only)</li>
                          <li><strong>9911:</strong> Watchtower (if running one)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-xs">Bitcoin Services</p>
                        <ul className="list-disc pl-4 text-xs space-y-1 mt-1">
                          <li><strong>8333:</strong> Bitcoin mainnet p2p</li>
                          <li><strong>8332:</strong> Bitcoin RPC (restrict to localhost)</li>
                          <li><strong>28333:</strong> BIP157 (if enabled)</li>
                          <li><strong>18333:</strong> Bitcoin testnet (if used)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-2">IP Filtering</h5>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                        <li>Implement IP whitelisting for admin interfaces</li>
                        <li>Consider geo-blocking for high-risk regions</li>
                        <li>Use fail2ban or similar for brute force protection</li>
                        <li>Allow public P2P ports only if running public node</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-2">Rate Limiting</h5>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                        <li>Limit connection attempts per IP address</li>
                        <li>Implement anti-DDoS measures</li>
                        <li>Configure connection timeouts appropriately</li>
                        <li>Monitor traffic patterns for anomalies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-2" />
                  Network Isolation Strategies
                </h5>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li><strong>VPN Access:</strong> Place administrative interfaces behind a VPN for secure remote access.</li>
                  <li><strong>Reverse Proxy:</strong> Use a reverse proxy with strong authentication for web interfaces.</li>
                  <li><strong>Network Segmentation:</strong> Place your node on a separate network segment from other services.</li>
                  <li><strong>Tor Hidden Services:</strong> Consider running services as Tor hidden services for enhanced privacy and security.</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  Example: Run your node with <code>--listen.inet=127.0.0.1</code> to only accept connections via Tor, protecting your IP address.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Security Monitoring */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Eye className="h-5 w-5 mr-2 text-primary" />
              Security Monitoring & Alerts
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Active monitoring helps detect potential security issues before they become serious breaches, allowing for rapid response.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <FileCode className="h-4 w-4 mr-2 text-blue-500" />
                    Log Monitoring
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Critical Logs:</strong> Monitor debug.log, lnd.log, and other application logs.</li>
                    <li><strong>System Logs:</strong> Check auth.log, syslog for unusual access attempts.</li>
                    <li><strong>Bitcoin Logs:</strong> Monitor underlying Bitcoin node warnings and errors.</li>
                    <li><strong>Log Centralization:</strong> Consider log aggregation for easier monitoring.</li>
                    <li><strong>Log Rotation:</strong> Ensure logs are rotated but preserved for security analysis.</li>
                  </ul>
                </div>

                <div className="bg-background p-4 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Bell className="h-4 w-4 mr-2 text-red-500" />
                    Alert System
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Critical Alerts:</strong> Node down, channel forced close, failed authentication.</li>
                    <li><strong>Warning Alerts:</strong> Unusual traffic, resource constraints, pending updates.</li>
                    <li><strong>Notification Methods:</strong> Email, SMS, Telegram bots, dedicated monitoring apps.</li>
                    <li><strong>Alert Prioritization:</strong> Define severity levels to prevent alert fatigue.</li>
                    <li><strong>Response Procedures:</strong> Document actions to take for each alert type.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-background p-5 rounded-lg border border-border">
                <h4 className="font-medium mb-3">Security Auditing & Review</h4>
                <div className="space-y-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h5 className="text-sm font-medium mb-2">Regular Security Checks</h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Scheduled Audits:</strong> Weekly system and permission checks</li>
                        <li><strong>Software Updates:</strong> Regular review of available security patches</li>
                        <li><strong>Configuration Review:</strong> Periodic validation of security settings</li>
                        <li><strong>Penetration Testing:</strong> Occasional testing of external-facing services</li>
                        <li><strong>Chain Analysis:</strong> Review on-chain footprint for privacy leaks</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-2">Monitoring Tools</h5>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                        <li>Prometheus + Grafana for metrics visualization</li>
                        <li>BOS Scorecard for node quality assessment</li>
                        <li>RTL/ThunderHub for channel monitoring</li>
                        <li>Fail2ban for intrusion prevention</li>
                        <li>Custom script monitors for specific checks</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-2">Response Planning</h5>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                        <li>Document incident response procedures</li>
                        <li>Maintain up-to-date backups for recovery</li>
                        <li>Plan for different security breach scenarios</li>
                        <li>Test recovery processes periodically</li>
                        <li>Keep contact information for security assistance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <Settings className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                  Security Monitoring Example
                </h5>
                <p className="text-sm text-muted-foreground">
                  A basic security monitoring setup might include:
                </p>
                <ol className="list-decimal pl-6 mt-2 space-y-1 text-xs text-muted-foreground">
                  <li>Prometheus metrics collection from Bitcoin and Lightning nodes</li>
                  <li>Grafana dashboard displaying key security metrics and thresholds</li>
                  <li>Telegram bot sending alerts for suspicious events or outages</li>
                  <li>Daily log analysis script checking for authentication failures</li>
                  <li>Weekly security configuration review checklist</li>
                </ol>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  Remember: Active monitoring combined with proper security configuration is your best defense against security incidents.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Verification Checkpoint */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={`${sectionId}-complete`} 
          label="I understand the essential security considerations for a Lightning node, including access control, encryption, firewall configuration, and monitoring."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
