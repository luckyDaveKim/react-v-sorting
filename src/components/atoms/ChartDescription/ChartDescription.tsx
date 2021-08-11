import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

const ChartDescription: React.FC = () => {
  const sortChart = useSelector(
    (state: RootState) => state.chartData.sortChart
  );

  return <>{sortChart.getDescription()}</>;
};

export default ChartDescription;
