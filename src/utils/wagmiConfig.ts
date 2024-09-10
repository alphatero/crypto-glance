import { http, createConfig,  cookieStorage,
  createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

// This is where we define our Wagmi configuration.
export function getConfig() {
  return createConfig({
    connectors: [
       injected(),
       // walletConnect({ projectId: 'https://eth-sepolia.g.alchemy.com/v2/bNI0aAf_HT-WrMx5zh2e95_7juZ15Kvg' }),
       // metaMask(),
       safe(),
     ],
    chains: [mainnet, sepolia],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(process.env.NEXT_PUBLIC_SEPOLIA_RPC),
    },
  })
}

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(''),
    [sepolia.id]: http(process.env.NEXT_PUBLIC_SEPOLIA_RPC),
  },
});