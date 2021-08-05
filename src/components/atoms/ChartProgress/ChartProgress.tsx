import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import styles from './ChartProgress.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

const ChartProgress: React.FC = () => {
  const data = useSelector((state: RootState) => state.chartData.data);
  const max = data.length - 1;
  const playIndex = useSelector(
    (state: RootState) => state.chartData.playIndex
  );

  return (
    <ProgressBar
      className={styles.Progress}
      variant="info"
      max={max}
      now={playIndex}
    />
  );
};

export default ChartProgress;
