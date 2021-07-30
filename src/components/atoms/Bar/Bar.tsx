import React from 'react';
import styles from './Bar.module.css';

export interface IBarProps {
  val: number;
  isStateA: boolean;
  isStateB: boolean;
  isStateC: boolean;
  isStateD: boolean;
  isSorted: boolean;
}

const Bar: React.FC<IBarProps> = ({
  val,
  isStateA,
  isStateB,
  isStateC,
  isStateD,
  isSorted,
}) => {
  let className = styles.Bar;

  if (isStateA || isStateB || isStateC || isStateD) {
    className += ` ${styles.SelectedBar}`;
  }

  if (isStateA) {
    className += ` ${styles.BarStateA}`;
  }
  if (isStateB) {
    className += ` ${styles.BarStateB}`;
  }
  if (isStateC) {
    className += ` ${styles.BarStateC}`;
  }
  if (isStateD) {
    className += ` ${styles.BarStateD}`;
  }
  if (isSorted) {
    className += ` ${styles.BarSorting}`;
  }

  return <li className={className} style={{ height: `${val}%` }} />;
};

export default Bar;
