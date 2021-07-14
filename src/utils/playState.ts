import { ChartPlayController } from '../components/molecules/ChartPlayController/ChartPlayController';

const playLabel = 'Play';
const pauseLabel = '||';
const resetLabel = 'Rest';
const prevLabel = '<';
const nextLabel = '>';

export interface IPlayController {
  onPlayButton(): void;

  onPauseButton(): void;

  onRestButton(): void;

  onPrevButton(): void;

  onNextButton(): void;
}

export interface IPlayState {
  onPlayButton(player: ChartPlayController): void;

  onPrevButton(player: ChartPlayController): void;

  onNextButton(player: ChartPlayController): void;

  getPlayButtonLabel(): string;

  getPrevButtonLabel(): string;

  getNextButtonLabel(): string;
}

export class PlayState implements IPlayState {
  onPlayButton(player: IPlayController): void {
    player.onPauseButton();
  }

  onPrevButton(player: IPlayController): void {
    player.onPrevButton();
  }

  onNextButton(player: IPlayController): void {
    player.onNextButton();
  }

  getPlayButtonLabel(): string {
    return pauseLabel;
  }

  getPrevButtonLabel(): string {
    return prevLabel;
  }

  getNextButtonLabel(): string {
    return nextLabel;
  }
}

export class PauseState implements IPlayState {
  onPlayButton(player: IPlayController): void {
    player.onPlayButton();
  }

  onPrevButton(player: IPlayController): void {
    player.onPrevButton();
  }

  onNextButton(player: IPlayController): void {
    player.onNextButton();
  }

  getPlayButtonLabel(): string {
    return playLabel;
  }

  getPrevButtonLabel(): string {
    return prevLabel;
  }

  getNextButtonLabel(): string {
    return nextLabel;
  }
}

export class DoneState implements IPlayState {
  onPlayButton(player: IPlayController): void {
    player.onRestButton();
  }

  onPrevButton(player: IPlayController): void {
    player.onPrevButton();
  }

  onNextButton(player: IPlayController): void {
    player.onNextButton();
  }

  getPlayButtonLabel(): string {
    return resetLabel;
  }

  getPrevButtonLabel(): string {
    return prevLabel;
  }

  getNextButtonLabel(): string {
    return nextLabel;
  }
}

export class StopState implements IPlayState {
  onPlayButton(player: IPlayController): void {
    player.onPlayButton();
  }

  onPrevButton(player: IPlayController): void {
    player.onPrevButton();
  }

  onNextButton(player: IPlayController): void {
    player.onNextButton();
  }

  getPlayButtonLabel(): string {
    return playLabel;
  }

  getPrevButtonLabel(): string {
    return prevLabel;
  }

  getNextButtonLabel(): string {
    return nextLabel;
  }
}
