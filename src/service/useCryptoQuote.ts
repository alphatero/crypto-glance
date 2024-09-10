import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchCryptoQuote = async () => {
  const res = await axios.get(`/api/getCryptoQuote`);

  return res.data;
}

export const useCryptoQuote = () => {
  const { data: cryptoQuote, isPending } = useQuery({
    queryKey: ['cryptoQuote'],
    queryFn: fetchCryptoQuote,
  });

  return {
    cryptoQuote,
    isPending,
  };
};