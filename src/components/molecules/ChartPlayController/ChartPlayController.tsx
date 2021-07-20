import React from 'react';
import { IPlayController, IPlayState } from '../../../utils/playState';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

const ChartPlayControllerWrapper: React.FC = () => {
  const status = useSelector((state: RootState) => state.state.status);
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
        <Button
          variant={'outline-primary'}
          size={'sm'}
          className={'m-1'}
          onClick={() => {
            this.props.status.onPrevButton(this);
          }}
        >
          <FontAwesomeIcon icon={this.props.status.getPrevButtonIcon()} />
        </Button>

        <Button
          variant={'primary'}
          className={'m-1'}
          onClick={() => {
            this.props.status.onPlayButton(this);
          }}
        >
          <FontAwesomeIcon icon={this.props.status.getPlayButtonIcon()} />
        </Button>

        <Button
          variant={'outline-primary'}
          size={'sm'}
          className={'m-1'}
          onClick={() => {
            this.props.status.onNextButton(this);
          }}
        >
          <FontAwesomeIcon icon={this.props.status.getNextButtonIcon()} />
        </Button>
      </div>
    );
  }
}

export default ChartPlayControllerWrapper;
