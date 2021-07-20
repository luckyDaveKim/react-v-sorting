import React from 'react';
import ChartPlayController from '../ChartPlayController/ChartPlayController';
import AlgorithmController from '../../atoms/AlgorithmController/AlgorithmController';

const ChartController: React.FC = () => {
  return (
    <div>
      <ChartPlayController />

      <AlgorithmController />
    </div>
  );
};

export default ChartController;
