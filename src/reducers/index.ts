import { combineReducers } from 'redux';
import state from './state';
import chartData from './chartData';

const rootReducer = combineReducers({
  state,
  chartData,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
