import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChartPerformance from '../../atoms/ChartPerformance/ChartPerformance';
import ChartDescription from '../../atoms/ChartDescription/ChartDescription';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import ChartCode from '../../atoms/ChartCode/ChartCode';

const ChartInfo: React.FC = () => {
  const sortChart = useSelector(
    (state: RootState) => state.chartData.sortChart
  );

  return (
    <Container className="p-3 my-5">
      <Row>
        <Col className="border-top border-dark m-3 p-3">
          <h1>{sortChart.getTitle()}</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="border-right">
          <ChartDescription />
        </Col>
        <Col lg={6} className="border-left">
          <ChartPerformance />
        </Col>
      </Row>
      <Row>
        <Col>
          <ChartCode />
        </Col>
      </Row>
    </Container>
  );
};

export default ChartInfo;
