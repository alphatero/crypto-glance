'use client';
import { Connector, useChainId, useConnect } from 'wagmi';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

export const Connect = () => {
  const chainId = useChainId();
  const { connectors, connect } = useConnect();

  return (
    <div className="flex gap-4 w-full border-2 border-white justify-center items-center p-4 rounded-lg">
      {connectors.map((connector) => (
        <ConnectorButton
          key={connector.uid}
          connector={connector}
          onClick={() => connect({ connector, chainId })}
        />
      ))}
    </div>
  );
};

const ConnectorButton = ({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector, setReady]);

  if (!ready) return <></>;

  return (
    <Button
      variant="contained"
      type="button"
      onClick={onClick}
      disabled={!ready}
    >
      {connector.name}
    </Button>
  );
};
