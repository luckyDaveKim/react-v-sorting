import React from 'react';
import styles from './SortChart.module.css';
import Bar from '../../atoms/Bar/Bar';
import usePlayer from '../../../hooks/player/usePlayer';

export interface ISortChartData {
  nums: number[];
  comparingIndices: number[];
  comparedIndices: number[];
  sortedIndices: number[];
}

const SortChart: React.FC = () => {
  const data = usePlayer('data') as ISortChartData[];
  const playIndex = usePlayer('playIndex') as number;
  const { nums, comparingIndices, comparedIndices, sortedIndices } = data[playIndex];

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
