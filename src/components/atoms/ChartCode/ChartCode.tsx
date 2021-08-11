import React from 'react';
import Highlight from 'react-highlight.js';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

const ChartCode: React.FC = () => {
  const sortChart = useSelector(
    (state: RootState) => state.chartData.sortChart
  );

  return (
    <p className={'my-5'}>
      <Highlight language="TypeScript">{sortChart.getCode()}</Highlight>
    </p>
  );
};

export default ChartCode;
