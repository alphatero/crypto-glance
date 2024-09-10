import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAccount } from 'wagmi';
import { useAssets } from '../_hooks/useAssets';
import Image from 'next/image';
import bn from 'bignumber.js';
import { PieChart } from './pie-chart';
import { tokens } from '@/constants/tokens';

export const Assets = () => {
  const { address } = useAccount();
  const { assets, totalUsd } = useAssets(address);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <h2 className="text-2xl font-bold">Assets</h2>

      <div className="flex gap-4 justify-center items-center flex-col md:flex-row">
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Asset</TableCell>
                <TableCell align="right">Balance</TableCell>
                <TableCell align="right">USD</TableCell>
                <TableCell align="right">Percentage</TableCell>
                <TableCell align="right">Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assets.length > 0 &&
                assets.map((asset) => (
                  <TableRow key={asset?.balance?.symbol}>
                    <TableCell component="th" scope="row">
                      <div className="flex gap-2 items-center">
                        <Image
                          width={40}
                          height={40}
                          src={asset?.img}
                          alt={asset?.balance?.symbol || ''}
                        />
                        {asset?.balance?.symbol}
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      {asset?.balance?.formatted} {asset?.balance?.symbol}
                    </TableCell>
                    <TableCell align="right">{asset?.usd} USD</TableCell>
                    <TableCell align="right">
                      {asset?.usd !== '--'
                        ? bn(asset?.usd)
                            .dividedBy(totalUsd)
                            .multipliedBy(100)
                            .toFixed(2)
                        : '--'}
                      %
                    </TableCell>
                    <TableCell align="right">
                      {asset?.balance?.symbol &&
                        tokens[asset?.balance?.symbol.toLocaleLowerCase()]
                          ?.address}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <PieChart />
      </div>
    </div>
  );
};
