import { createReducer } from 'typesafe-actions';
import createChartData from '../utils/chartData';
import { ISortChartData } from '../components/molecules/SortChart/SortChart';
import {
  CHANGE_ALGORITHM,
  CHANGE_SIZE,
  INIT_DATA,
  INIT_PLAY_INDEX,
  NEXT_PLAY_INDEX,
  PREV_PLAY_INDEX,
  SET_SPEED_RATE,
} from '../actions/chartdata/ChartDataActionTypes';
import { ChartDataAction } from '../actions/chartdata/ChartDataAction';
import { ISort } from '../utils/algorithms/ISort';
import selectionSort, {
  selectionSortDescription,
  selectionSortLegend,
  selectionSortPerformance,
  selectionSortTitle,
} from '../utils/algorithms/selectionSort';
import {
  IDescription,
  ILegend,
  IPerformance,
  ITitle,
} from '../utils/algorithms/helper';

/* Types */
type ChartDataState = {
  data: ISortChartData[];
  legend: ILegend;
  title: ITitle;
  description: IDescription;
  performance: IPerformance;
  playIndex: number;
  speedRate: number;
  algorithm: ISort;
  size: number;
};
export type ChartDataKey = keyof ChartDataState;

const initialState: ChartDataState = {
  data: createChartData({ size: 10, algorithm: selectionSort }),
  legend: selectionSortLegend,
  title: selectionSortTitle,
  description: selectionSortDescription,
  performance: selectionSortPerformance,
  playIndex: 0,
  speedRate: 1,
  algorithm: selectionSort,
  size: 10,
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
      return {
        ...state,
        algorithm: action.payload.algorithm,
        legend: action.payload.legend,
        title: action.payload.title,
        description: action.payload.description,
        performance: action.payload.performance,
      };
    },
    [CHANGE_SIZE]: (state, action) => {
      return { ...state, size: action.payload };
    },
    [INIT_DATA]: state => {
      return {
        ...state,
        playIndex: 0,
        data: createChartData({
          size: state.size,
          algorithm: state.algorithm,
        }),
      };
    },
  }
);

export default controller;
