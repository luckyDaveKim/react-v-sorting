import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

const ChartDescription: React.FC = () => {
  const description = useSelector(
    (state: RootState) => state.chartData.description
  );

  return <>{description}</>;
};

export default ChartDescription;
