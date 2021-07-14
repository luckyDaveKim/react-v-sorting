import { createReducer } from 'typesafe-actions';
import { StateAction } from '../actions/state/StateAction';
import { DONE, PAUSE, PLAY, STOP } from '../actions/state/StateActionTypes';
import {
  DoneState,
  IPlayState,
  PauseState,
  PlayState,
  StopState,
} from '../utils/playState';

/* Types */
type State = {
  status: IPlayState;
};
export type StateKey = keyof State;

const initialState: State = {
  status: new StopState(),
};

/* Reducer */
const status = createReducer<State, StateAction>(initialState, {
  [STOP]: state => {
    return { ...state, status: new StopState() };
  },
  [PLAY]: state => {
    return { ...state, status: new PlayState() };
  },
  [PAUSE]: state => {
    return { ...state, status: new PauseState() };
  },
  [DONE]: state => {
    return { ...state, status: new DoneState() };
  },
});

export default status;
