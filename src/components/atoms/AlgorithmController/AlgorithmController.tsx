import React from 'react';
import { Form } from 'react-bootstrap';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import { SelectionSortChart } from '../../../utils/algorithms/SelectionSortChart';
import { BubbleSortChart } from '../../../utils/algorithms/BubbleSortChart';
import { InsertionSortChart } from '../../../utils/algorithms/InsertionSortChart';
import { MergeSortChart } from '../../../utils/algorithms/MergeSortChart';
import { QuickSortChart } from '../../../utils/algorithms/QuickSortChart';
import { HeapSortChart } from '../../../utils/algorithms/HeapSortChart';

const AlgorithmController: React.FC = () => {
  const controllerActions = useControllerActions();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let sortChart;

    switch (event.target.value) {
      case 'selectionSort':
        sortChart = new SelectionSortChart();
        break;
      case 'bubbleSort':
        sortChart = new BubbleSortChart();
        break;
      case 'insertionSort':
        sortChart = new InsertionSortChart();
        break;
      case 'mergeSort':
        sortChart = new MergeSortChart();
        break;
      case 'quickSort':
        sortChart = new QuickSortChart();
        break;
      case 'heapSort':
        sortChart = new HeapSortChart();
        break;
      default:
        return;
    }

    controllerActions.changeAlgorithm(sortChart);
  };

  return (
    <Form.Control
      as="select"
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
