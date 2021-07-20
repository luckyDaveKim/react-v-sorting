import React from 'react';
import useControllerActions from '../../../hooks/controller/useControllerAction';

const SizeController: React.FC = () => {
  const controllerActions = useControllerActions();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    controllerActions.changeSize(event.target.value);
  };

  return (
    <select onChange={onChange} defaultValue={10}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={25}>25</option>
      <option value={50}>50</option>
      <option value={75}>75</option>
      <option value={100}>100</option>
    </select>
  );
};

export default SizeController;
