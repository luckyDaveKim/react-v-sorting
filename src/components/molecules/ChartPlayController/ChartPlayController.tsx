import React from 'react';
import { IPlayController, IPlayState } from '../../../utils/playState';

export interface IChartPlayControlProps {
  status: IPlayState;

  onPlayButton(): void;

  onPauseButton(): void;

  onRestButton(): void;

  onPrevButton(): void;

  onNextButton(): void;
}

export class ChartPlayController
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
      </div>
    );
  }
}

export default ChartPlayController;
