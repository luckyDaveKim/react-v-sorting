import React from 'react';
import styles from './ChartPlayController.module.css';
import { IPlayController, IPlayState } from '../../../utils/playState';
import useControllerActions from '../../../hooks/controller/useControllerAction';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

const ChartPlayControllerWrapper: React.FC = () => {
  const status = useSelector((state: RootState) => state.state.status);
  const controllerActions = useControllerActions();

  const data = useSelector((state: RootState) => state.chartData.data);
  const playIndex = useSelector(
    (state: RootState) => state.chartData.playIndex
  );

  return (
    <ChartPlayController
      status={status}
      dataSize={data.length}
      playIndex={playIndex}
      onPlay={controllerActions.onPlay}
      onStop={controllerActions.onStop}
      onPause={controllerActions.onPause}
      onRest={controllerActions.onRest}
      onPrev={controllerActions.onPrev}
      onNext={controllerActions.onNext}
    />
  );
};

interface IChartPlayControlProps {
  status: IPlayState;

  dataSize: number;

  playIndex: number;

  onPlay(): void;

  onStop(): void;

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

  public onStop(): void {
    this.props.onStop();
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
    const isFirstIndex = this.props.playIndex === 0;
    const isLastIndex = this.props.playIndex === this.props.dataSize - 1;

    return (
      <div className={styles.ChartPlayController}>
        <Button
          variant={'outline-primary'}
          size={'sm'}
          className={'m-1'}
          disabled={isFirstIndex}
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
          className={'m-1'}
          disabled={isFirstIndex}
          onClick={() => {
            this.props.status.onStopButton(this);
          }}
        >
          <FontAwesomeIcon icon={this.props.status.getStopButtonIcon()} />
        </Button>

        <Button
          variant={'outline-primary'}
          size={'sm'}
          className={'m-1'}
          disabled={isLastIndex}
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
