import React from 'react';
import ChartPlayController from '../ChartPlayController/ChartPlayController';
import AlgorithmController from '../../atoms/AlgorithmController/AlgorithmController';
import SizeController from '../../atoms/SizeController/SizeController';
import { Col, Container, Row } from 'react-bootstrap';
import SpeedController from '../../atoms/SpeedController/SpeedController';

const ChartController: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <ChartPlayController />
        </Col>
        <Col md={2}>
          <SpeedController />
        </Col>
        <Col md={3}>
          <AlgorithmController />
        </Col>
        <Col md={2}>
          <SizeController />
        </Col>
      </Row>
    </Container>
  );
};

export default ChartController;
