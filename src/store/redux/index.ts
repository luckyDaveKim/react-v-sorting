import { combineReducers } from 'redux';
import player from './player';

const rootReducer = combineReducers({
  player,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
