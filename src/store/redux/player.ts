import { ActionType, createAction, createReducer } from 'typesafe-actions';
import generateChartData from '../../utils/chartData';
import { ISortChartData } from '../../components/molecules/SortChart/SortChart';

export type Status = 'stop' | 'pause' | 'play';

export interface ISetStatus {
  status: Status;
}

/* Actions */
export const START = 'player/START'; // player를 시작한다.
export const PAUSE = 'player/PAUSE'; // player를 일시 정지한다.
export const STOP = 'player/STOP'; // player를 멈춘다.
export const WATCH = 'player/WATCH'; // player 시작 여부를 확인한다.
export const RESTART = 'player/RESTART'; // 일시 정지된 player를 재시작한다.
export const SET_STATUS = 'player/SET_STATUS'; // status를 업데이트한다.
export const SET_DATA = 'player/SET_DATA'; // data를 업데이트 한다.
export const SET_PLAY_INDEX = 'player/SET_PLAY_INDEX'; // playIndex를 업데이트한다.

export const start = createAction(START)();
export const watch = createAction(WATCH)();
export const pause = createAction(PAUSE)();
export const stop = createAction(STOP)();
export const restart = createAction(RESTART)();
export const setStatus = createAction(SET_STATUS)<ISetStatus>();
export const setData = createAction(SET_DATA)<ISortChartData[]>();
export const setPlayIndex = createAction(SET_PLAY_INDEX)<number>();

export const actions = {
  start,
  watch,
  pause,
  stop,
  restart,
  setStatus,
  setData,
  setPlayIndex,
};

/* Types */
type PlayerAction = ActionType<typeof actions>;
type PlayerState = {
  status: Status;
  data: ISortChartData[];
  playIndex: number;
};
export type PlayerKey = keyof PlayerState;

const initialState: PlayerState = {
  status: 'stop',
  data: generateChartData({ size: 10 }),
  playIndex: 0,
};

/* Reducer */
const status = createReducer<PlayerState, PlayerAction>(initialState, {
  [SET_STATUS]: (state, actions) => {
    const { status } = actions.payload;
    return { ...state, status };
  },
  [SET_DATA]: (state, actions) => {
    const { payload: data } = actions;
    return { ...state, data, playIndex: 0 };
  },
  [SET_PLAY_INDEX]: (state, actions) => {
    const { payload: playIndex } = actions;
    return { ...state, playIndex };
  },
});

export default status;
