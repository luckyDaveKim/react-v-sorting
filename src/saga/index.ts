import { all, fork, takeEvery } from 'redux-saga/effects';

import * as StateSaga from './state';
import * as StateActions from '../actions/state/StateAction';

function* handlePlayer() {
  yield takeEvery(StateActions.play, StateSaga.start);
  yield fork(StateSaga.watcher);
}

export default function* rootSaga() {
  yield all([fork(handlePlayer)]);
}
