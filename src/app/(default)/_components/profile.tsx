'use client';

import { useAccount, useBalance, useDisconnect } from 'wagmi';
import { Button } from '@mui/material';

export function Profile() {
  // get account address
  const { address } = useAccount();
  // disconnect account
  const { disconnect } = useDisconnect();

  const balance = useBalance({
    address,
  });

  return (
    <div className="border-2 border-white rounded-lg w-full p-4 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
      <div className="flex gap-2">
        <span className="font-bold">Address:</span>
        {address && <div className="text-blue-500">{address}</div>}
      </div>
      <div className="flex gap-2 mb-4">
        <span className="font-bold">Balance:</span>
        {balance && (
          <div className="text-blue-500">
            {balance?.data?.formatted}
            {balance.data?.symbol}
          </div>
        )}
      </div>
      <Button variant="contained" onClick={() => disconnect()}>
        Disconnect
      </Button>
    </div>
  );
}
