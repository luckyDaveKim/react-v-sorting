import React from 'react';
import { Form } from 'react-bootstrap';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import selectionSort, {
  selectionSortDescription,
  selectionSortLegend,
  selectionSortPerformance,
  selectionSortTitle,
} from '../../../utils/algorithms/selectionSort';
import bubbleSort, {
  bubbleSortDescription,
  bubbleSortLegend,
  bubbleSortPerformance,
  bubbleSortTitle,
} from '../../../utils/algorithms/bubbleSort';
import insertionSort, {
  insertionSortDescription,
  insertionSortLegend,
  insertionSortPerformance,
  insertionSortTitle,
} from '../../../utils/algorithms/insertionSort';
import mergeSort, {
  mergeSortDescription,
  mergeSortLegend,
  mergeSortPerformance,
  mergeSortTitle,
} from '../../../utils/algorithms/mergeSort';
import quickSort, {
  quickSortDescription,
  quickSortLegend,
  quickSortPerformance,
  quickSortTitle,
} from '../../../utils/algorithms/quickSort';
import heapSort, {
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

    switch (event.target.value) {
      case 'selectionSort':
        algorithm = selectionSort;
        legend = selectionSortLegend;
        title = selectionSortTitle;
        description = selectionSortDescription;
        performance = selectionSortPerformance;
        break;
      case 'bubbleSort':
        algorithm = bubbleSort;
        legend = bubbleSortLegend;
        title = bubbleSortTitle;
        description = bubbleSortDescription;
        performance = bubbleSortPerformance;
        break;
      case 'insertionSort':
        algorithm = insertionSort;
        legend = insertionSortLegend;
        title = insertionSortTitle;
        description = insertionSortDescription;
        performance = insertionSortPerformance;
        break;
      case 'mergeSort':
        algorithm = mergeSort;
        legend = mergeSortLegend;
        title = mergeSortTitle;
        description = mergeSortDescription;
        performance = mergeSortPerformance;
        break;
      case 'quickSort':
        algorithm = quickSort;
        legend = quickSortLegend;
        title = quickSortTitle;
        description = quickSortDescription;
        performance = quickSortPerformance;
        break;
      case 'heapSort':
        algorithm = heapSort;
        legend = heapSortLegend;
        title = heapSortTitle;
        description = heapSortDescription;
        performance = heapSortPerformance;
        break;
      default:
        return;
    }

    controllerActions.changeAlgorithm(
      algorithm,
      legend,
      title,
      description,
      performance
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
