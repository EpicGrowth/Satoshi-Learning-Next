import { NextResponse } from 'next/server';
import { getBlockstreamCredentials } from '@/lib/secrets';


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const blockQuery = searchParams.get('query');
    
    if (!blockQuery) {
      return NextResponse.json(
        { error: 'Block height or hash is required' },
        { status: 400 }
      );
    }
    
    // Determine if the query is a block height (number) or hash (string)
    const isHeight = /^\d+$/.test(blockQuery);
    
    // Construct the appropriate API URL
    const apiUrl = isHeight
      ? `https://blockstream.info/api/block-height/${blockQuery}`
      : `https://blockstream.info/api/block/${blockQuery}`;
    
    // Get API credentials
    const { apiKey, apiSecret } = await getBlockstreamCredentials();
    
    // Prepare headers for authenticated request if credentials exist
    const headers: HeadersInit = {};
    if (apiKey && apiSecret) {
      const authString = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
      headers['Authorization'] = `Basic ${authString}`;
    }
    
    // First, if it's a height query, we need to get the block hash
    let blockHash = blockQuery;
    if (isHeight) {
      const heightResponse = await fetch(apiUrl, { headers });
      if (!heightResponse.ok) {
        return NextResponse.json(
          { error: `Block at height ${blockQuery} not found` },
          { status: 404 }
        );
      }
      blockHash = await heightResponse.text();
    }
    
    // Now get the block details using the hash
    const blockUrl = `https://blockstream.info/api/block/${blockHash}`;
    const blockResponse = await fetch(blockUrl, { headers });
    
    if (!blockResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch block data' },
        { status: blockResponse.status }
      );
    }
    
    const blockData = await blockResponse.json();
    
    // Get transaction IDs for the block
    const txsUrl = `https://blockstream.info/api/block/${blockHash}/txids`;
    const txsResponse = await fetch(txsUrl, { headers });
    
    if (txsResponse.ok) {
      const txids = await txsResponse.json();
      blockData.tx_count = txids.length;
      
      // Get the first 10 transactions to display
      const transactionsToFetch = txids.slice(0, 10);
      blockData.transactions = [];
      
      // Fetch basic info for each transaction
      for (const txid of transactionsToFetch) {
        try {
          const txUrl = `https://blockstream.info/api/tx/${txid}`;
          const txResponse = await fetch(txUrl, { headers });
          
          if (txResponse.ok) {
            const txData = await txResponse.json();
            blockData.transactions.push({
              txid: txData.txid,
              size: txData.size,
              weight: txData.weight,
              fee: txData.fee,
              vsize: txData.vsize,
              value: txData.vout.reduce((sum: number, output: any) => sum + output.value, 0)
            });
          }
        } catch (txError) {
          console.error(`Error fetching transaction ${txid}:`, txError);
        }
      }
    }
    
    return NextResponse.json(blockData);
  } catch (error) {
    console.error('Error fetching block data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
