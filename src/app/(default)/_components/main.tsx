'use client';

import { Connect } from './connect';
import { Profile } from './profile';
import { Assets } from './assets';
import { TransferButton } from './transaction';
import { useAccount } from 'wagmi';

export const Main = () => {
  const { isConnected } = useAccount();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full p-10">
      {isConnected ? <Profile /> : <Connect />}
      {isConnected && (
        <>
          <Assets />
          <TransferButton />
        </>
      )}
    </div>
  );
};
