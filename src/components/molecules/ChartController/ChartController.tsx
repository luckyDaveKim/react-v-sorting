import React from 'react';
import ChartPlayController from '../ChartPlayController/ChartPlayController';
import { Col, Container, Form, Row } from 'react-bootstrap';
import SpeedController from '../../atoms/SpeedController/SpeedController';

const ChartController: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <ChartPlayController />
        </Col>
        <Col md={4}>
          <Form.Group as={Row}>
            <Form.Label column sm="3">
              Speed
            </Form.Label>
            <Col sm="9">
              <SpeedController />
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default ChartController;
