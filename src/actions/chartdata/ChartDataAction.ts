import { ActionType, createAction } from 'typesafe-actions';
import {
  INIT_PLAY_INDEX,
  NEXT_PLAY_INDEX,
  PREV_PLAY_INDEX,
  SET_SPEED_RATE,
} from './ChartDataActionTypes';

export const initPlayIndex = createAction(INIT_PLAY_INDEX)();
export const prevPlayIndex = createAction(PREV_PLAY_INDEX)();
export const nextPlayIndex = createAction(NEXT_PLAY_INDEX)();
export const setSpeedRate = createAction(SET_SPEED_RATE)<number>();

export const chartDataActions = {
  initPlayIndex,
  prevPlayIndex,
  nextPlayIndex,
  setSpeedRate,
};
export type ChartDataAction = ActionType<typeof chartDataActions>;
