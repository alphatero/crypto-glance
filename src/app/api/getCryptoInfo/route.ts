import axios from 'axios';
import { NextResponse } from 'next/server';
import { tokensIds } from '@/constants/tokens';

// Protect request use next.js serverless function
export async function GET(request: Request) {
  try {
    const { data } = await axios.get(process.env.COINMARKETCAP_API + 'v2/cryptocurrency/info', {
      params: {id: tokensIds.join(',')},
      headers: {
        'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
      },
    });

    return NextResponse.json(data);
  } catch (error:any) {
    return NextResponse.json({ error: error?.response?.data?.error || error.message }, { status: 500 });
  }
}