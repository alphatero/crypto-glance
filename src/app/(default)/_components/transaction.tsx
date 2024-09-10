'use client';

import { erc20Abi, parseUnits } from 'viem';
import { useEffect, useState } from 'react';
import { useWriteContract } from 'wagmi';
import { ethers } from 'ethers';
import { tokens, Tokens } from '@/constants/tokens';
import { useAccount } from 'wagmi';
import { useAssets } from '../_hooks/useAssets';
import { abi } from '@/constants/abi';

export const TransferButton = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const { address } = useAccount();

  const { writeContractAsync, isPending, isSuccess, isError } =
    useWriteContract({});

  const handleTransfer = () => {
    if (!address) return;

    const result = writeContractAsync({
      abi,
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      functionName: 'transferFrom',
      args: [
        '0xd2135CfB216b74109775236E36d4b433F1DF507B',
        '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',

        BigInt(1),
      ],
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Recipient address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer} disabled={isPending}>
        {isPending ? 'Sending...' : 'Send'}
      </button>
      {isSuccess && <div>Transaction Successful!</div>}
      {/* {isError && <div>Error: {isError.message}</div>} */}
    </div>
  );
};
