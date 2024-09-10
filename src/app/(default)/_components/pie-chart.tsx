import { Pie } from 'react-chartjs-2';
import bn from 'bignumber.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { chartStyles, chartOptions } from '@/constants/chartOptions';
import { useAssets } from '../_hooks/useAssets';
import { useAccount } from 'wagmi';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  const { address } = useAccount();
  const { assets, totalUsd } = useAssets(address);

  const data = {
    labels: assets.map((asset) => asset.symbol),
    datasets: [
      {
        label: 'Assets',
        data: assets.map((asset) =>
          bn(asset?.usd).dividedBy(totalUsd).multipliedBy(100).toFixed(2),
        ),
        ...chartStyles,
      },
    ],
  };

  return (
    <div className="size-60">
      <Pie data={data} options={chartOptions} />
    </div>
  );
};
