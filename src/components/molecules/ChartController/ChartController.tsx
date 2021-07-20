import React from 'react';
import ChartPlayController from '../ChartPlayController/ChartPlayController';
import AlgorithmController from '../../atoms/AlgorithmController/AlgorithmController';
import SizeController from '../../atoms/SizeController/SizeController';

const ChartController: React.FC = () => {
  return (
    <div>
      <ChartPlayController />

      <AlgorithmController />

      <SizeController />
    </div>
  );
};

export default ChartController;
