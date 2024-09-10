'use client'
import { config } from '@/utils/wagmiConfig';
import { useMemo,useEffect,useState } from 'react';
import bn from 'bignumber.js';
import { getBalance, GetBalanceReturnType } from 'wagmi/actions';
import { useCryptoInfo } from '@/service/useCryptoInfo';
import { useCryptoQuote } from '@/service/useCryptoQuote';
import { useBalances } from './useBalances';
type Address = `0x${string}` | undefined;


const calculateUsd = (balance?: string, price?: string) => {
  if (!balance || !price) {
    return '--';
  }
  return bn(balance).multipliedBy(price).toNumber();
}


// Maybe have better idea to get the assets
export const useAssets = (address: Address) => {
  const [totalUsd, setTotalUsd] = useState(0);
  
  const { balances } = useBalances(address);
  const { cryptoInfo } = useCryptoInfo();
  const { cryptoQuote } = useCryptoQuote();

  const cryptos = cryptoInfo?.data;
  const quotes = cryptoQuote?.data;  

  const assetArray = useMemo(() => {
    if (!cryptos || !quotes) {
      return [];
    }

    return Object.keys(cryptos).map( (id) => {
      const crypto = cryptos[id];
      const quote = quotes[id];
      console.log('balances', balances);
      const cryptoBalance = balances.find((balance) => balance.id === Number(id));
      console.log('cryptoBalance', cryptoBalance);
      

      return {
        symbol: crypto.symbol,
        img: crypto.logo,
        balance: cryptoBalance?.balance.data,
        usd: calculateUsd(cryptoBalance?.balance.data?.formatted, quote.quote.USD.price)
      }
      
    });
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [cryptos, quotes]);

  console.log(assetArray);

  useEffect(() => {
      if (!assetArray) {
        return;
      }
      const total = assetArray.reduce((acc, asset) => {
        if (asset.usd!=='--') {
          return bn(acc).plus(asset.usd).toNumber();
        }
        return acc; // Add a default return value for the reduce function
      }, 0);
      setTotalUsd(total);
    }, [assetArray]);
  
  console.log('totalUsd', totalUsd);
  return {
    totalUsd,
    assets: assetArray,
  }
}
