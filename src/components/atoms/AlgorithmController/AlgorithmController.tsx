import React from 'react';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import selectionSort from '../../../utils/algorithms/selectionSort';
import bubbleSort from '../../../utils/algorithms/bubbleSort';
import { Form } from 'react-bootstrap';

const AlgorithmController: React.FC = () => {
  const controllerActions = useControllerActions();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let algorithm;

    switch (event.target.value) {
      case 'selectionSort':
        algorithm = selectionSort;
        break;
      case 'bubbleSort':
        algorithm = bubbleSort;
        break;
      default:
        return;
    }

    controllerActions.changeAlgorithm(algorithm);
  };

  return (
    <Form.Control
      as="select"
      custom
      defaultValue={'selectionSort'}
      onChange={onChange}
    >
      <option value={'selectionSort'}>Selection Sort</option>
      <option value={'bubbleSort'}>Bubble Sort</option>
    </Form.Control>
  );
};

export default AlgorithmController;
