import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faChevronRight,
  faPause,
  faPlay,
  faRedo,
} from '@fortawesome/free-solid-svg-icons';

export interface IPlayController {
  onPlayButton(): void;

  onPauseButton(): void;

  onRestButton(): void;

  onPrevButton(): void;

  onNextButton(): void;
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
    player.onPauseButton();
  }

  onPrevButton(player: IPlayController): void {
    player.onPrevButton();
  }

  onNextButton(player: IPlayController): void {
    player.onNextButton();
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
    player.onPlayButton();
  }

  onPrevButton(player: IPlayController): void {
    player.onPrevButton();
  }

  onNextButton(player: IPlayController): void {
    player.onNextButton();
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
    player.onRestButton();
  }

  onPrevButton(player: IPlayController): void {
    player.onPrevButton();
  }

  onNextButton(player: IPlayController): void {
    player.onNextButton();
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
    player.onPlayButton();
  }

  onPrevButton(player: IPlayController): void {
    player.onPrevButton();
  }

  onNextButton(player: IPlayController): void {
    player.onNextButton();
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
