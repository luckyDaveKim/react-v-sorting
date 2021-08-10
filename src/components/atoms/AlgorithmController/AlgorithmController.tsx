import React from 'react';
import { Form } from 'react-bootstrap';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import selectionSort, {
  selectionSortCode,
  selectionSortDescription,
  selectionSortLegend,
  selectionSortPerformance,
  selectionSortTitle,
} from '../../../utils/algorithms/selectionSort';
import bubbleSort, {
  bubbleSortCode,
  bubbleSortDescription,
  bubbleSortLegend,
  bubbleSortPerformance,
  bubbleSortTitle,
} from '../../../utils/algorithms/bubbleSort';
import insertionSort, {
  insertionSortCode,
  insertionSortDescription,
  insertionSortLegend,
  insertionSortPerformance,
  insertionSortTitle,
} from '../../../utils/algorithms/insertionSort';
import mergeSort, {
  mergeSortCode,
  mergeSortDescription,
  mergeSortLegend,
  mergeSortPerformance,
  mergeSortTitle,
} from '../../../utils/algorithms/mergeSort';
import quickSort, {
  quickSortCode,
  quickSortDescription,
  quickSortLegend,
  quickSortPerformance,
  quickSortTitle,
} from '../../../utils/algorithms/quickSort';
import heapSort, {
  heapSortCode,
  heapSortDescription,
  heapSortLegend,
  heapSortPerformance,
  heapSortTitle,
} from '../../../utils/algorithms/heapSort';

const AlgorithmController: React.FC = () => {
  const controllerActions = useControllerActions();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let algorithm;
    let legend;
    let title;
    let description;
    let performance;
    let code;

    switch (event.target.value) {
      case 'selectionSort':
        algorithm = selectionSort;
        legend = selectionSortLegend;
        title = selectionSortTitle;
        description = selectionSortDescription;
        performance = selectionSortPerformance;
        code = selectionSortCode;
        break;
      case 'bubbleSort':
        algorithm = bubbleSort;
        legend = bubbleSortLegend;
        title = bubbleSortTitle;
        description = bubbleSortDescription;
        performance = bubbleSortPerformance;
        code = bubbleSortCode;
        break;
      case 'insertionSort':
        algorithm = insertionSort;
        legend = insertionSortLegend;
        title = insertionSortTitle;
        description = insertionSortDescription;
        performance = insertionSortPerformance;
        code = insertionSortCode;
        break;
      case 'mergeSort':
        algorithm = mergeSort;
        legend = mergeSortLegend;
        title = mergeSortTitle;
        description = mergeSortDescription;
        performance = mergeSortPerformance;
        code = mergeSortCode;
        break;
      case 'quickSort':
        algorithm = quickSort;
        legend = quickSortLegend;
        title = quickSortTitle;
        description = quickSortDescription;
        performance = quickSortPerformance;
        code = quickSortCode;
        break;
      case 'heapSort':
        algorithm = heapSort;
        legend = heapSortLegend;
        title = heapSortTitle;
        description = heapSortDescription;
        performance = heapSortPerformance;
        code = heapSortCode;
        break;
      default:
        return;
    }

    controllerActions.changeAlgorithm(
      algorithm,
      legend,
      title,
      description,
      performance,
      code
    );
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
