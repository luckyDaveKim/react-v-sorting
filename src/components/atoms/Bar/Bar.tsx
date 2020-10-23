import React from 'react'
import styles from './Bar.module.css'

export interface BarProps {
  val: number;
  isComparing: boolean;
  isCompared: boolean;
  isSorted: boolean;
}

const Bar: React.FC<BarProps> = ({
                                   val,
                                   isComparing,
                                   isCompared,
                                   isSorted
                                 }) => {
  let className = styles.Bar
  if (isComparing) {
    className += ` ${styles.BarComparing}`
  }
  if (isCompared) {
    className += ` ${styles.BarCompared}`
  }
  if (isSorted) {
    className += ` ${styles.BarSorting}`
  }

  return (
    <div
      className={className}
      style={{height: `${val}%`}}
    >
      {val}
    </div>
  )
}

export default Bar