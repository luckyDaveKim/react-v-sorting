import React from 'react';
import { Form } from 'react-bootstrap';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import selectionSort from '../../../utils/algorithms/selectionSort';
import bubbleSort from '../../../utils/algorithms/bubbleSort';
import insertionSort from '../../../utils/algorithms/insertionSort';
import mergeSort from '../../../utils/algorithms/mergeSort';
import quickSort from '../../../utils/algorithms/quickSort';

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
      case 'insertionSort':
        algorithm = insertionSort;
        break;
      case 'mergeSort':
        algorithm = mergeSort;
        break;
      case 'quickSort':
        algorithm = quickSort;
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
      <option value={'insertionSort'}>Insertion Sort</option>
      <option value={'mergeSort'}>Merge Sort</option>
      <option value={'quickSort'}>Quick Sort</option>
    </Form.Control>
  );
};

export default AlgorithmController;
