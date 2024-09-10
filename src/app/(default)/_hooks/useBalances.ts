'use client'
import { useBalance } from "wagmi"
import { tokensIds, Tokens, tokens } from "@/constants/tokens";
import { config } from "@/utils/wagmiConfig";

type Address = `0x${string}` | undefined;

export const useBalances = (address: Address) => {
  // get all tokens balances can't use useBalance for each token
  const balanceWtbc = useBalance({
    address,
    token: tokens[Tokens.wbtc].address
  });

  const balanceUsdt = useBalance({
    address,
    token: tokens[Tokens.usdt].address,
    config
  });

  const balanceLink = useBalance({
    address,
    token: tokens[Tokens.link].address,
  });

  const balanceAave = useBalance({
    address,
    token: tokens[Tokens.aave].address,
  });

  const balanceUsdc = useBalance({
    address,
    token: tokens[Tokens.usdc].address,
  });

  const balanceDai = useBalance({
    address,
    token: tokens[Tokens.dai].address,
  });

  const balanceEurs = useBalance({
    address,
    token: tokens[Tokens.eurs].address,
  });

  const balances = [
    {
      id: Number(tokens[Tokens.wbtc].id),
      balance: balanceWtbc,
    },
    {
      id: Number(tokens[Tokens.usdt].id),
      balance: balanceUsdt,
    },
    {
      id: Number(tokens[Tokens.link].id),
      balance: balanceLink,
    },
    {
      id: Number(tokens[Tokens.aave].id),
      balance: balanceAave,
    },
    {
      id: Number(tokens[Tokens.usdc].id),
      balance: balanceUsdc,
    },
    {
      id: Number(tokens[Tokens.dai].id),
      balance: balanceDai,
    },
    {
      id: Number(tokens[Tokens.eurs].id),
      balance: balanceEurs,
    },
  ];

  return {
    balances,
  };

}
