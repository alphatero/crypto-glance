import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { headers } from 'next/headers';
import { cookieToInitialState } from 'wagmi';
import { getConfig } from '@/utils/wagmiConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crypto Glance',
  description:
    'CryptoGlance is a sleek and efficient Web3 asset management tool for cryptocurrency users.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get('cookie'),
  );

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  );
}
