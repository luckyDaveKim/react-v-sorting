import React from 'react';
import styles from './SortChart.module.css';
import Bar from '../../atoms/Bar/Bar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

export interface ISortChartData {
  nums: number[];
  comparingIndices: number[];
  comparedIndices: number[];
  sortedIndices: number[];
}

const SortChart: React.FC = () => {
  const data = useSelector((state: RootState) => state.chartData.data);
  const playIndex = useSelector(
    (state: RootState) => state.chartData.playIndex
  );
  const { nums, comparingIndices, comparedIndices, sortedIndices } = data[
    playIndex
  ];

  return (
    <div className={styles.Chart}>
      {nums.map((num, i) => {
        return (
          <Bar
            key={i}
            val={num}
            isComparing={comparingIndices.includes(i)}
            isCompared={comparedIndices.includes(i)}
            isSorted={sortedIndices.includes(i)}
          />
        );
      })}
    </div>
  );
};

export default SortChart;
