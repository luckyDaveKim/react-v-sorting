import React from 'react';
import SortChart from '../../molecules/SortChart/SortChart';
import ChartController from '../../molecules/ChartController/ChartController';
import { Col, Container, Row } from 'react-bootstrap';
import ChartLegend from '../../molecules/ChartLegend/ChartLegend';

const SortVisualizer: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <SortChart />
        </Col>
      </Row>
      <Row>
        <Col>
          <ChartController />
        </Col>
      </Row>
      <Row>
        <Col>
          <ChartLegend />
        </Col>
      </Row>
    </Container>
  );
};

export default SortVisualizer;
