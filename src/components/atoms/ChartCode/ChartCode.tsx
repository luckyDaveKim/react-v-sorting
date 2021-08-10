import React from 'react';
import Highlight from 'react-highlight.js';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

const ChartCode: React.FC = () => {
  const code = useSelector((state: RootState) => state.chartData.code);

  return (
    <p className={'my-5'}>
      <Highlight language="TypeScript">{code}</Highlight>
    </p>
  );
};

export default ChartCode;
