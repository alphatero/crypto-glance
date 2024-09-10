import { QueryClient } from '@tanstack/react-query';
import { structuralSharing } from 'wagmi/query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      structuralSharing,
    },
  },
});

