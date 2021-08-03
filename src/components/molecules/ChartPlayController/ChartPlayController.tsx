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
        onPlay={controllerActions.onPlay}
        onPause={controllerActions.onPause}
        onRest={controllerActions.onRest}
        onPrev={controllerActions.onPrev}
        onNext={controllerActions.onNext}
      />
    </div>
  );
};

interface IChartPlayControlProps {
  status: IPlayState;

  onPlay(): void;

  onPause(): void;

  onRest(): void;

  onPrev(): void;

  onNext(): void;
}

class ChartPlayController
  extends React.Component<IChartPlayControlProps, any>
  implements IPlayController {
  public onPlay(): void {
    this.props.onPlay();
  }

  public onPause(): void {
    this.props.onPause();
  }

  public onRest(): void {
    this.props.onRest();
  }

  public onPrev(): void {
    this.props.onPrev();
  }

  public onNext(): void {
    this.props.onNext();
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
