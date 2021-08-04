import React from 'react';
import { Container, Form, Navbar } from 'react-bootstrap';
import AlgorithmController from '../../atoms/AlgorithmController/AlgorithmController';
import SizeController from '../../atoms/SizeController/SizeController';

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="/">React V Sorting</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Form className="mr-3">
            <Form.Label>Algorithm</Form.Label>
            <AlgorithmController />
          </Form>

          <Form className="mr-3">
            <Form.Label>Size</Form.Label>
            <SizeController />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
