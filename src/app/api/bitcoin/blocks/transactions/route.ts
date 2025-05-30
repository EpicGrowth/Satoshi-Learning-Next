import { NextResponse } from 'next/server';
import { getBlockstreamCredentials } from '@/lib/secrets';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const blockHash = searchParams.get('blockHash');
    const start = parseInt(searchParams.get('start') || '0');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    if (!blockHash) {
      return NextResponse.json(
        { error: 'Block hash is required' },
        { status: 400 }
      );
    }
    
    // Get API credentials
    const { apiKey, apiSecret } = await getBlockstreamCredentials();
    
    // Prepare headers for authenticated request if credentials exist
    const headers: HeadersInit = {};
    if (apiKey && apiSecret) {
      const authString = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
      headers['Authorization'] = `Basic ${authString}`;
    }
    
    // Fetch transaction IDs for the block
    const txsUrl = `https://blockstream.info/api/block/${blockHash}/txids`;
    const txsResponse = await fetch(txsUrl, { headers });
    
    if (!txsResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch transaction IDs' },
        { status: txsResponse.status }
      );
    }
    
    const allTxids = await txsResponse.json();
    
    // Apply pagination
    const paginatedTxids = allTxids.slice(start, start + limit);
    
    // Fetch details for each transaction
    const transactions = await Promise.all(
      paginatedTxids.map(async (txid: string) => {
        try {
          const txUrl = `https://blockstream.info/api/tx/${txid}`;
          const txResponse = await fetch(txUrl, { headers });
          
          if (!txResponse.ok) {
            return { txid, error: 'Failed to fetch transaction data' };
          }
          
          const txData = await txResponse.json();
          return {
            txid: txData.txid,
            size: txData.size,
            weight: txData.weight,
            fee: txData.fee,
            vsize: txData.vsize,
            value: txData.vout.reduce((sum: number, output: any) => sum + output.value, 0)
          };
        } catch (error) {
          console.error(`Error fetching transaction ${txid}:`, error);
          return { txid, error: 'Failed to fetch transaction data' };
        }
      })
    );
    
    return NextResponse.json(transactions);
  } catch (error) {
    console.error('Error fetching transaction IDs:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
