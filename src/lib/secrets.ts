/**
 * Secret management utility for Satoshi Station
 * 
 * This module handles access to secrets in both development and production environments.
 * In development, it uses environment variables from .env.local
 * In production, it uses environment variables passed from GitHub Secrets
 */

/**
 * Get a secret from environment variables
 * @param name Secret name
 * @returns Secret value
 */
export async function getSecret(name: string): Promise<string> {
  return process.env[name] || '';
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
