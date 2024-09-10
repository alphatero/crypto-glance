import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchCryptoInfo = async () => {
  const res = await axios.get(`/api/getCryptoInfo`);

  return res.data;
};

export const useCryptoInfo = () => {
  const { data: cryptoInfo, isPending } = useQuery({
    queryKey: ['cryptoInfo'],
    queryFn: fetchCryptoInfo,
  });

  return {
    cryptoInfo,
    isPending,
  };
};