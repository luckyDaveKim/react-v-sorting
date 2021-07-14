import { ActionType, createAction } from 'typesafe-actions';
import { WATCH } from './RunnerActionTypes';

export const watch = createAction(WATCH)();

export const runnerActions = {
  watch,
};
export type RunnerAction = ActionType<typeof runnerActions>;
