import React from 'react';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import { Form } from 'react-bootstrap';

const SizeController: React.FC = () => {
  const controllerActions = useControllerActions();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    controllerActions.changeSize(event.target.value);
  };

  return (
    <Form.Control as="select" defaultValue={10} onChange={onChange}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={25}>25</option>
      <option value={50}>50</option>
      <option value={75}>75</option>
      <option value={100}>100</option>
    </Form.Control>
  );
};

export default SizeController;
