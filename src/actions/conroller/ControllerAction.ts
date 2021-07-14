import { ActionType, createAction } from 'typesafe-actions';
import { NEXT, PAUSE, PLAY, PREV, RESET } from './ControllerActionTypes';

export const play = createAction(PLAY)();
export const pause = createAction(PAUSE)();
export const reset = createAction(RESET)();
export const prev = createAction(PREV)();
export const next = createAction(NEXT)();

export const controllerActions = {
  play,
  pause,
  prev,
  next,
  reset
};
export type ControllerAction = ActionType<typeof controllerActions>;
