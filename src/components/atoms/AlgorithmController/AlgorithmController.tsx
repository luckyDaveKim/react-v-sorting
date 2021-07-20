import React from 'react';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import selectionSort from '../../../utils/algorithms/selectionSort';

const AlgorithmController: React.FC = () => {
  const controllerActions = useControllerActions();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let algorithm;

    switch (event.target.value) {
      case 'selectionSort':
        algorithm = selectionSort;
        break;
      default:
        return;
    }

    controllerActions.changeAlgorithm(algorithm);
  };

  return (
    <select onChange={onChange} defaultValue={'selectionSort'}>
      <option value={'selectionSort'}>Selection Sort</option>
    </select>
  );
};

export default AlgorithmController;
