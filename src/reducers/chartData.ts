import { createReducer } from 'typesafe-actions';
import generateChartData from '../utils/chartData';
import { ISortChartData } from '../components/molecules/SortChart/SortChart';
import {
  INIT_PLAY_INDEX,
  NEXT_PLAY_INDEX,
  PREV_PLAY_INDEX,
  SET_SPEED_RATE,
} from '../actions/chartdata/ChartDataActionTypes';
import { ChartDataAction } from '../actions/chartdata/ChartDataAction';

/* Types */
type ChartDataState = {
  data: ISortChartData[];
  playIndex: number;
  speedRate: number;
};
export type ChartDataKey = keyof ChartDataState;

const initialState: ChartDataState = {
  data: generateChartData({ size: 10 }),
  playIndex: 0,
  speedRate: 1,
};

/* Reducer */
const controller = createReducer<ChartDataState, ChartDataAction>(
  initialState,
  {
    [INIT_PLAY_INDEX]: state => {
      return { ...state, playIndex: 0 };
    },
    [PREV_PLAY_INDEX]: state => {
      const prevPlayIndex = Math.max(0, state.playIndex - 1);
      return { ...state, playIndex: prevPlayIndex };
    },
    [NEXT_PLAY_INDEX]: state => {
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
