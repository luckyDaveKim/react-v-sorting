import React from 'react';
import useControllerActions from '../../../hooks/controller/useControllerAction';

const SpeedController: React.FC = () => {
  const controllerActions = useControllerActions();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    controllerActions.setSpeedRate(event.target.value);
  };

  return (
    <select onChange={onChange}>
      <option value={0.5}>x0.5</option>
      <option value={1} selected>
        x1.0
      </option>
      <option value={1.5}>x1.5</option>
      <option value={2}>x2.0</option>
    </select>
  );
};

export default SpeedController;
