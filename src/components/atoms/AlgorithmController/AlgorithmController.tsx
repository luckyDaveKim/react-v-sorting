import React from 'react';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import selectionSort from '../../../utils/algorithms/selectionSort';
import bubbleSort from '../../../utils/algorithms/bubbleSort';

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
    <select onChange={onChange} defaultValue={'selectionSort'}>
      <option value={'selectionSort'}>Selection Sort</option>
      <option value={'bubbleSort'}>Bubble Sort</option>
    </select>
  );
};

export default AlgorithmController;
