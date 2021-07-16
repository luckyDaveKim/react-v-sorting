import { createReducer } from 'typesafe-actions';
import generateChartData from '../utils/chartData';
import { ISortChartData } from '../components/molecules/SortChart/SortChart';
import {
  NEXT,
  PAUSE,
  PLAY,
  PREV,
  RESET,
  SET_SPEED_RATE,
} from '../actions/conroller/ControllerActionTypes';
import { ControllerAction } from '../actions/conroller/ControllerAction';

/* Types */
type ControllerState = {
  data: ISortChartData[];
  playIndex: number;
  speedRate: number;
};
export type ControllerKey = keyof ControllerState;

const initialState: ControllerState = {
  data: generateChartData({ size: 10 }),
  playIndex: 0,
  speedRate: 1,
};

/* Reducer */
const controller = createReducer<ControllerState, ControllerAction>(
  initialState,
  {
    [PLAY]: state => {
      return { ...state };
    },
    [PAUSE]: state => {
      return { ...state };
    },
    [RESET]: state => {
      return { ...state, playIndex: 0 };
    },
    [PREV]: state => {
      const prevPlayIndex = Math.max(0, state.playIndex - 1);
      return { ...state, playIndex: prevPlayIndex };
    },
    [NEXT]: state => {
      const nextPlayIndex = Math.min(
        state.data.length - 1,
        state.playIndex + 1
      );
      return { ...state, playIndex: nextPlayIndex };
    },
    [SET_SPEED_RATE]: (state, action) => {
      return { ...state, speedRate: action.payload };
    },
  }
);

export default controller;
