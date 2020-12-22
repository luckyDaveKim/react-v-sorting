import { all, fork, takeEvery } from 'redux-saga/effects';

import * as PlayerActions from '../redux/player';
import * as PlayerSaga from './player';

function* handlePlayer() {
  yield takeEvery(PlayerActions.start, PlayerSaga.start);
  yield fork(PlayerSaga.watcher);
}

export default function* rootSaga() {
  yield all([fork(handlePlayer)]);
}
