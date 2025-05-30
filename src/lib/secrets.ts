/**
 * Secret management utility for Satoshi Station
 * 
 * This module handles access to secrets in both development and production environments.
 * In development, it uses environment variables from .env.local
 * In production, it uses Google Cloud Secret Manager
 */

// Import Google Cloud Secret Manager only in production to avoid development dependencies
let SecretManagerServiceClient: any;
if (process.env.NODE_ENV === 'production') {
  try {
    // Dynamic import to avoid requiring this in development
    const { SecretManagerServiceClient: Client } = require('@google-cloud/secret-manager');
    SecretManagerServiceClient = Client;
  } catch (error) {
    console.warn('Google Cloud Secret Manager not available, falling back to environment variables');
  }
}

/**
 * Get a secret from Google Cloud Secret Manager or environment variables
 * @param name Secret name
 * @returns Secret value
 */
export async function getSecret(name: string): Promise<string> {
  // In development or if Secret Manager is not available, use environment variables
  if (process.env.NODE_ENV !== 'production' || !SecretManagerServiceClient) {
    return process.env[name] || '';
  }
  
  try {
    const client = new SecretManagerServiceClient();
    const projectId = process.env.GOOGLE_CLOUD_PROJECT;
    
    if (!projectId) {
      console.warn('GOOGLE_CLOUD_PROJECT environment variable not set, falling back to environment variables');
      return process.env[name] || '';
    }
    
    const [version] = await client.accessSecretVersion({
      name: `projects/${projectId}/secrets/${name}/versions/latest`,
    });
    
    return version.payload?.data?.toString() || '';
  } catch (error) {
    console.error(`Error accessing secret ${name}:`, error);
    // Fall back to environment variables if Secret Manager fails
    return process.env[name] || '';
  }
}

/**
 * Get Blockstream API credentials
 * @returns Object containing apiKey and apiSecret
 */
export async function getBlockstreamCredentials() {
  const apiKey = await getSecret('BLOCKSTREAM_API_KEY');
  const apiSecret = await getSecret('BLOCKSTREAM_API_SECRET');
  
  return { apiKey, apiSecret };
}

/**
 * Get Lightning API credentials
 * @returns Object containing apiKey and apiSecret
 */
export async function getLightningCredentials() {
  const apiKey = await getSecret('LIGHTNING_API_KEY');
  const apiSecret = await getSecret('LIGHTNING_API_SECRET');
  
  return { apiKey, apiSecret };
}
