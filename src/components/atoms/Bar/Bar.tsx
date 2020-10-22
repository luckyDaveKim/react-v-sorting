import React from 'react'
import styles from './Bar.module.css'

export interface BarProps {
  val: number;
}

const Bar: React.FC<BarProps> = ({val}) => (
  <div
    className={styles.Bar}
    style={{ height: `${val}%` }}
  >
    {val}
  </div>
)

export default Bar