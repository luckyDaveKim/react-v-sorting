import { all, call, cancel, delay, flush, fork, put, race, select, take } from 'redux-saga/effects';
import * as PlayerActions from '../redux/player';
import { closeChannel, subscribe } from './channel';
import { buffers, EventChannel } from 'redux-saga';
import { RootState } from '../redux';

export function* start() {
  yield put(PlayerActions.watch());
}

export function* watcher() {
  while (yield take(PlayerActions.watch)) {
    try {
      yield put(PlayerActions.setStatus({ status: 'play' }));
      const worker = yield fork(connectChannel);
      yield take(PlayerActions.stop);
      yield cancel(worker);
    } catch (error) {
      console.error(error);
    } finally {
      yield all([
        put(PlayerActions.setStatus({ status: 'stop' })),
        put(PlayerActions.setPlayIndex(0)),
      ]);
    }
  }
}

function* connectChannel() {
  let channel: EventChannel<any>;
  try {
    const INTERVAL_TIME = 200;
    const buffer = buffers.sliding(1);

    const param = { interval: INTERVAL_TIME, buffer };
    channel = yield call(subscribe, param);

    while (true) {
      yield flush(channel);
      const store = yield select(getPlayerFromStore);
      if (store.data.length - 1 <= store.playIndex) {
        break;
      }

      yield put(PlayerActions.setPlayIndex(store.playIndex + 1));
      const { pause } = yield race({
        timeout: delay(INTERVAL_TIME),
        pause: take(PlayerActions.pause),
      });

      if (pause) {
        yield put(PlayerActions.setStatus({ status: 'pause' }));
        yield take(PlayerActions.restart);
        yield put(PlayerActions.setStatus({ status: 'play' }));
      }
    }

    yield put(PlayerActions.setStatus({ status: 'stop' }));
  } catch (error) {
    console.error(error);
  } finally {
    closeChannel(channel!);
  }
}

const getPlayerFromStore = (state: RootState) => state.player;
