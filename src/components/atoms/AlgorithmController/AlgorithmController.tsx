import React from 'react';
import { Form } from 'react-bootstrap';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import selectionSort, {
  selectionSortLegend,
} from '../../../utils/algorithms/selectionSort';
import bubbleSort, {
  bubbleSortLegend,
} from '../../../utils/algorithms/bubbleSort';
import insertionSort, {
  insertionSortLegend,
} from '../../../utils/algorithms/insertionSort';
import mergeSort, {
  mergeSortLegend,
} from '../../../utils/algorithms/mergeSort';
import quickSort, {
  quickSortLegend,
} from '../../../utils/algorithms/quickSort';
import heapSort, { heapSortLegend } from '../../../utils/algorithms/heapSort';

const AlgorithmController: React.FC = () => {
  const controllerActions = useControllerActions();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let algorithm;
    let legend;

    switch (event.target.value) {
      case 'selectionSort':
        algorithm = selectionSort;
        legend = selectionSortLegend;
        break;
      case 'bubbleSort':
        algorithm = bubbleSort;
        legend = bubbleSortLegend;
        break;
      case 'insertionSort':
        algorithm = insertionSort;
        legend = insertionSortLegend;
        break;
      case 'mergeSort':
        algorithm = mergeSort;
        legend = mergeSortLegend;
        break;
      case 'quickSort':
        algorithm = quickSort;
        legend = quickSortLegend;
        break;
      case 'heapSort':
        algorithm = heapSort;
        legend = heapSortLegend;
        break;
      default:
        return;
    }

    controllerActions.changeAlgorithm(algorithm, legend);
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
      <option value={'heapSort'}>Heap Sort</option>
    </Form.Control>
  );
};

export default AlgorithmController;
