import React from 'react'
import styles from './SortChart.module.css'
import Bar from '../../atoms/Bar/Bar'

export interface SortChartData {
  data: number[];
  comparingIndices: number[];
  comparedIndices: number[];
  sortedIndices: number[];
}

interface ChartProps {
  sortChartData: SortChartData;
}

const SortChart: React.FC<ChartProps> = ({
                                           sortChartData: {
                                             data,
                                             comparingIndices,
                                             comparedIndices,
                                             sortedIndices
                                           }
                                         }) => {
  return (
    <div
      className={styles.Chart}
    >
      {data.map((val, i) => {
        const isComparing = comparingIndices.includes(i)
        const isCompared = comparedIndices.includes(i)
        const isSorted = sortedIndices.includes(i)

        return (
          <Bar
            key={i}
            val={val}
            isComparing={isComparing}
            isCompared={isCompared}
            isSorted={isSorted}
          />
        )
      })}
    </div>
  )
}

export default SortChart