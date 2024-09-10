'use client';
import { useState, type ReactNode } from 'react';
import { getConfig } from '@/utils/wagmiConfig';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/utils/queryClient';
import { type State, WagmiProvider } from 'wagmi';
import { StyledEngineProvider } from '@mui/material/styles';

type ProvidersProps = {
  children: ReactNode;
  initialState: State | undefined;
};

// This is where we wrap our app with whatever providers we need.
export const Providers = ({ children, initialState }: ProvidersProps) => {
  const [wagmiConfig] = useState(() => getConfig());

  return (
    <StyledEngineProvider injectFirst>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </StyledEngineProvider>
  );
};
