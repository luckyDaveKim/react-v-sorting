import React from 'react';
import { IPlayController, IPlayState } from '../../../utils/playState';
import useState from '../../../hooks/state/useState';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import SpeedController from '../../atoms/SpeedController/SpeedController';

const ChartPlayControllerWrapper: React.FC = () => {
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

interface IChartPlayControlProps {
  status: IPlayState;

  onPlayButton(): void;

  onPauseButton(): void;

  onRestButton(): void;

  onPrevButton(): void;

  onNextButton(): void;
}

class ChartPlayController
  extends React.Component<IChartPlayControlProps, any>
  implements IPlayController {
  public onPlayButton(): void {
    this.props.onPlayButton();
  }

  public onPauseButton(): void {
    this.props.onPauseButton();
  }

  public onRestButton(): void {
    this.props.onRestButton();
  }

  public onPrevButton(): void {
    this.props.onPrevButton();
  }

  public onNextButton(): void {
    this.props.onNextButton();
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.status.onPrevButton(this);
          }}
        >
          {this.props.status.getPrevButtonLabel()}
        </button>

        <button
          onClick={() => {
            this.props.status.onPlayButton(this);
          }}
        >
          {this.props.status.getPlayButtonLabel()}
        </button>

        <button
          onClick={() => {
            this.props.status.onNextButton(this);
          }}
        >
          {this.props.status.getNextButtonLabel()}
        </button>

        <SpeedController />
      </div>
    );
  }
}

export default ChartPlayControllerWrapper;
