import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faChevronRight,
  faPause,
  faPlay,
  faRedo,
} from '@fortawesome/free-solid-svg-icons';

export interface IPlayController {
  onPlay(): void;

  onPause(): void;

  onRest(): void;

  onPrev(): void;

  onNext(): void;
}

export interface IPlayState {
  onPlayButton(player: IPlayController): void;

  onPrevButton(player: IPlayController): void;

  onNextButton(player: IPlayController): void;

  getPlayButtonIcon(): IconProp;

  getPrevButtonIcon(): IconProp;

  getNextButtonIcon(): IconProp;
}

export class PlayState implements IPlayState {
  onPlayButton(player: IPlayController): void {
    player.onPause();
  }

  onPrevButton(player: IPlayController): void {
    player.onPrev();
  }

  onNextButton(player: IPlayController): void {
    player.onNext();
  }

  getPlayButtonIcon(): IconProp {
    return faPause;
  }

  getPrevButtonIcon(): IconProp {
    return faChevronLeft;
  }

  getNextButtonIcon(): IconProp {
    return faChevronRight;
  }
}

export class PauseState implements IPlayState {
  onPlayButton(player: IPlayController): void {
    player.onPlay();
  }

  onPrevButton(player: IPlayController): void {
    player.onPrev();
  }

  onNextButton(player: IPlayController): void {
    player.onNext();
  }

  getPlayButtonIcon(): IconProp {
    return faPlay;
  }

  getPrevButtonIcon(): IconProp {
    return faChevronLeft;
  }

  getNextButtonIcon(): IconProp {
    return faChevronRight;
  }
}

export class DoneState implements IPlayState {
  onPlayButton(player: IPlayController): void {
    player.onRest();
  }

  onPrevButton(player: IPlayController): void {
    player.onPrev();
  }

  onNextButton(player: IPlayController): void {
    player.onNext();
  }

  getPlayButtonIcon(): IconProp {
    return faRedo;
  }

  getPrevButtonIcon(): IconProp {
    return faChevronLeft;
  }

  getNextButtonIcon(): IconProp {
    return faChevronRight;
  }
}

export class StopState implements IPlayState {
  onPlayButton(player: IPlayController): void {
    player.onPlay();
  }

  onPrevButton(player: IPlayController): void {
    player.onPrev();
  }

  onNextButton(player: IPlayController): void {
    player.onNext();
  }

  getPlayButtonIcon(): IconProp {
    return faPlay;
  }

  getPrevButtonIcon(): IconProp {
    return faChevronLeft;
  }

  getNextButtonIcon(): IconProp {
    return faChevronRight;
  }
}
