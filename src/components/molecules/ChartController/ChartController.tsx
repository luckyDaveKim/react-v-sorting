import React from 'react';
import ChartPlayController from '../ChartPlayController/ChartPlayController';
import useState from '../../../hooks/state/useState';
import { IPlayState } from '../../../utils/playState';
import useControllerActions from '../../../hooks/controller/useControllerAction';

const ChartController: React.FC = () => {
  const status = useState('status') as IPlayState;
  const controllerActions = useControllerActions();

  return (
    <div>
      <ChartPlayController
        status={status}
        onPlayButton={controllerActions.onPlayButton}
        onPauseButton={controllerActions.onPauseButton}
        onRestButton={controllerActions.onRestButton}
        onPrevButton={controllerActions.onPrevButton}
        onNextButton={controllerActions.onNextButton}
      />
    </div>
  );
};

export default ChartController;
