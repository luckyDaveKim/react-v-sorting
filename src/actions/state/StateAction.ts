import { ActionType, createAction } from 'typesafe-actions';
import { DONE, PAUSE, PLAY, STOP } from './StateActionTypes';

export const stop = createAction(STOP)();
export const play = createAction(PLAY)();
export const pause = createAction(PAUSE)();
export const done = createAction(DONE)();

export const stateActions = {
  stop,
  play,
  pause,
  done,
};
export type StateAction = ActionType<typeof stateActions>;
