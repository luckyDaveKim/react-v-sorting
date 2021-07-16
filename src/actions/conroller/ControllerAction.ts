import { ActionType, createAction } from 'typesafe-actions';
import { NEXT, PAUSE, PLAY, PREV, RESET, SET_SPEED_RATE } from './ControllerActionTypes';

export const play = createAction(PLAY)();
export const pause = createAction(PAUSE)();
export const reset = createAction(RESET)();
export const prev = createAction(PREV)();
export const next = createAction(NEXT)();
export const setSpeedRate = createAction(SET_SPEED_RATE)<number>();

export const controllerActions = {
  play,
  pause,
  prev,
  next,
  reset,
  setSpeedRate
};
export type ControllerAction = ActionType<typeof controllerActions>;
