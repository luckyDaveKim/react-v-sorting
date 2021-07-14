import React from 'react';
import SortChart from '../../molecules/SortChart/SortChart';
import ChartController from '../../molecules/ChartController/ChartController';

const SortVisualizer: React.FC = () => {
  return (
    <div>
      <SortChart />

      <ChartController />
    </div>
  );
};

export default SortVisualizer;
