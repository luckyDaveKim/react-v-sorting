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
import { ISortChart } from '../utils/algorithms/ISortChart';
import { SelectionSortChart } from '../utils/algorithms/SelectionSortChart';

/* Types */
type ChartDataState = {
  sortChart: ISortChart;
  data: ISortChartData[];
  playIndex: number;
  speedRate: number;
  size: number;
};
export type ChartDataKey = keyof ChartDataState;

const selectionSortChart = new SelectionSortChart();
const chartData = createChartData({
  size: 10,
  algorithm: selectionSortChart.sort,
});

const initialState: ChartDataState = {
  sortChart: selectionSortChart,
  data: chartData,
  playIndex: 0,
  speedRate: 1,
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
      return { ...state, sortChart: action.payload };
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
          algorithm: state.sortChart.sort,
        }),
      };
    },
  }
);

export default controller;
