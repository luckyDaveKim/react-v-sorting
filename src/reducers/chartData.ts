import { createReducer } from 'typesafe-actions';
import generateChartData from '../utils/chartData';
import { ISortChartData } from '../components/molecules/SortChart/SortChart';
import {
  CHANGE_ALGORITHM,
  INIT_DATA,
  INIT_PLAY_INDEX,
  NEXT_PLAY_INDEX,
  PREV_PLAY_INDEX,
  SET_SPEED_RATE,
} from '../actions/chartdata/ChartDataActionTypes';
import { ChartDataAction } from '../actions/chartdata/ChartDataAction';
import { ISort } from '../utils/algorithms/ISort';
import selectionSort from '../utils/algorithms/selectionSort';

/* Types */
type ChartDataState = {
  data: ISortChartData[];
  playIndex: number;
  speedRate: number;
  algorithm: ISort;
};
export type ChartDataKey = keyof ChartDataState;

const initialState: ChartDataState = {
  data: generateChartData({ size: 10 }),
  playIndex: 0,
  speedRate: 1,
  algorithm: selectionSort,
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
    [CHANGE_ALGORITHM]: (state, action) => {
      return { ...state, algorithm: action.payload };
    },
    [INIT_DATA]: state => {
      return { ...state, data: generateChartData({ size: 10 }) };
    },
  }
);

export default controller;
