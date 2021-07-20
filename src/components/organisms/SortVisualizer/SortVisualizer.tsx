import React from 'react';
import SortChart from '../../molecules/SortChart/SortChart';
import ChartController from '../../molecules/ChartController/ChartController';
import { Col, Container, Row } from 'react-bootstrap';

const SortVisualizer: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <SortChart />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ChartController />
        </Col>
      </Row>
    </Container>
  );
};

export default SortVisualizer;
