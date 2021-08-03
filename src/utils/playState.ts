import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faChevronRight,
  faPause,
  faPlay,
  faStop,
  faRedo,
} from '@fortawesome/free-solid-svg-icons';

export interface IPlayController {
  onPlay(): void;

  onStop(): void;

  onPause(): void;

  onRest(): void;

  onPrev(): void;

  onNext(): void;
}

export interface IPlayState {
  onPlayButton(player: IPlayController): void;

  onStopButton(player: IPlayController): void;

  onPrevButton(player: IPlayController): void;

  onNextButton(player: IPlayController): void;

  getPlayButtonIcon(): IconProp;

  getStopButtonIcon(): IconProp;

  getPrevButtonIcon(): IconProp;

  getNextButtonIcon(): IconProp;
}

abstract class State implements IPlayState {
  public onPlayButton(player: IPlayController): void {
    player.onPlay();
  }

  public onStopButton(player: IPlayController): void {
    player.onStop();
  }

  public onPrevButton(player: IPlayController): void {
    player.onPrev();
  }

  public onNextButton(player: IPlayController): void {
    player.onNext();
  }

  public getPlayButtonIcon(): IconProp {
    return faPlay;
  }

  public getStopButtonIcon(): IconProp {
    return faStop;
  }

  public getPrevButtonIcon(): IconProp {
    return faChevronLeft;
  }

  public getNextButtonIcon(): IconProp {
    return faChevronRight;
  }
}

export class PlayState extends State {
  public onPlayButton(player: IPlayController): void {
    player.onPause();
  }

  public getPlayButtonIcon(): IconProp {
    return faPause;
  }
}

export class PauseState extends State {}

export class DoneState extends State {
  public onPlayButton(player: IPlayController): void {
    player.onRest();
  }

  public getPlayButtonIcon(): IconProp {
    return faRedo;
  }
}

export class StopState extends State {
  public onPlayButton(player: IPlayController): void {
    player.onPlay();
  }
}
