import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './ChartLegend.module.css';
import barStyles from '../../atoms/Bar/Bar.module.css';

const ChartLegend: React.FC = () => {
  const sortChart = useSelector(
    (state: RootState) => state.chartData.sortChart
  );
  const legend = sortChart.getLegend();

  const barGroupA = legend.groupA ? (
    <li className={styles.LegendItem}>
      <div className={[styles.LegendBox, barStyles.BarStateA].join(' ')} />
      <span>{legend.groupA}</span>
    </li>
  ) : null;

  const barGroupB = legend.groupB ? (
    <li className={styles.LegendItem}>
      <div className={[styles.LegendBox, barStyles.BarStateB].join(' ')} />
      <span>{legend.groupB}</span>
    </li>
  ) : null;

  const barGroupC = legend.groupC ? (
    <li className={styles.LegendItem}>
      <div className={[styles.LegendBox, barStyles.BarStateC].join(' ')} />
      <span>{legend.groupC}</span>
    </li>
  ) : null;

  const barGroupD = legend.groupD ? (
    <li className={styles.LegendItem}>
      <div className={[styles.LegendBox, barStyles.BarStateD].join(' ')} />
      <span>{legend.groupD}</span>
    </li>
  ) : null;

  const barSorted = (
    <li className={styles.LegendItem}>
      <div className={[styles.LegendBox, barStyles.BarSorting].join(' ')} />
      <span>{legend.sorted}</span>
    </li>
  );

  return (
    <Container>
      <Row>
        <Col>
          <ul className={styles.Legend}>
            {barGroupA}
            {barGroupB}
            {barGroupC}
            {barGroupD}
            {barSorted}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ChartLegend;
