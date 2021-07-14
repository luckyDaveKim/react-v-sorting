import { combineReducers } from 'redux';
import state from './state';
import controller from './controller';

const rootReducer = combineReducers({
  state,
  controller,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
