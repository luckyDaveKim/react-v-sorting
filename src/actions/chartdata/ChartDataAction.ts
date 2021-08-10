import { ActionType, createAction } from 'typesafe-actions';
import {
  CHANGE_ALGORITHM,
  CHANGE_SIZE,
  INIT_DATA,
  INIT_PLAY_INDEX,
  NEXT_PLAY_INDEX,
  PREV_PLAY_INDEX,
  SET_SPEED_RATE,
} from './ChartDataActionTypes';
import { ISort } from '../../utils/algorithms/ISort';
import {
  ICode,
  IDescription,
  ILegend,
  IPerformance,
  ITitle,
} from '../../utils/algorithms/helper';

export const initPlayIndex = createAction(INIT_PLAY_INDEX)();
export const prevPlayIndex = createAction(PREV_PLAY_INDEX)();
export const nextPlayIndex = createAction(NEXT_PLAY_INDEX)();
export const setSpeedRate = createAction(SET_SPEED_RATE)<number>();
export const changeAlgorithm = createAction(
  CHANGE_ALGORITHM,
  (
    algorithm: ISort,
    legend: ILegend,
    title: ITitle,
    description: IDescription,
    performance: IPerformance,
    code: ICode
  ) => ({ algorithm, legend, title, description, performance, code })
)();
export const changeSize = createAction(CHANGE_SIZE)<number>();
export const initData = createAction(INIT_DATA)();

export const chartDataActions = {
  initPlayIndex,
  prevPlayIndex,
  nextPlayIndex,
  setSpeedRate,
  changeAlgorithm,
  changeSize,
  initData,
};
export type ChartDataAction = ActionType<typeof chartDataActions>;
