import React from 'react'
import styles from './Chart.module.css'
import Bar from '../../atoms/Bar/Bar'

export type Data = number[];

interface ChartProps {
  nums: Data;
}

const Chart: React.FC<ChartProps> = ({nums}) => {
  return (
    <div
      className={styles.Chart}
    >
      {nums.map((val, i) => (
        <Bar
          key={i}
          val={val}
        />))}
    </div>
  )
}

export default Chart