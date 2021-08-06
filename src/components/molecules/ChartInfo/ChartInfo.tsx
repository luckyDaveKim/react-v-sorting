import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChartPerformance from '../../atoms/ChartPerformance/ChartPerformance';
import ChartDescription from '../../atoms/ChartDescription/ChartDescription';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

const ChartInfo: React.FC = () => {
  const title = useSelector((state: RootState) => state.chartData.title);

  return (
    <Container className="p-3 my-5">
      <Row>
        <Col className="border-top border-dark m-3 p-3">
          <h1>{title}</h1>
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
    </Container>
  );
};

export default ChartInfo;
