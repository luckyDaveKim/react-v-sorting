import React from 'react';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import { Form } from 'react-bootstrap';

const SpeedController: React.FC = () => {
  const controllerActions = useControllerActions();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    controllerActions.setSpeedRate(event.target.value);
  };

  return (
    <Form.Control as="select" custom defaultValue={1} onChange={onChange}>
      <option value={0.5}>x0.5</option>
      <option value={1}>x1.0</option>
      <option value={1.5}>x1.5</option>
      <option value={2}>x2.0</option>
      <option value={99}>x99</option>
    </Form.Control>
  );
};

export default SpeedController;
