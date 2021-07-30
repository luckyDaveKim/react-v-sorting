import React from 'react';
import styles from './SortChart.module.css';
import Bar from '../../atoms/Bar/Bar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

export interface ISortChartData {
  nums: number[];
  groupA: number[];
  groupB: number[];
  groupC: number[];
  groupD: number[];
  sortedIndices: number[];
}

const SortChart: React.FC = () => {
  const data = useSelector((state: RootState) => state.chartData.data);
  const playIndex = useSelector(
    (state: RootState) => state.chartData.playIndex
  );
  const { nums, groupA, groupB, groupC, groupD, sortedIndices } = data[
    playIndex
  ];

  return (
    <ul className={styles.Chart}>
      {nums.map((num, i) => {
        return (
          <Bar
            key={i}
            val={num}
            isStateA={groupA.includes(i)}
            isStateB={groupB.includes(i)}
            isStateC={groupC.includes(i)}
            isStateD={groupD.includes(i)}
            isSorted={sortedIndices.includes(i)}
          />
        );
      })}
    </ul>
  );
};

export default SortChart;
