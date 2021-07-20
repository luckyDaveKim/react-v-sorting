import {
  call,
  cancel,
  delay,
  flush,
  fork,
  put,
  race,
  select,
  take,
} from 'redux-saga/effects';
import * as RunnerActions from '../actions/runner/RunnerAction';
import * as StateActions from '../actions/state/StateAction';
import * as ChartDataActions from '../actions/chartdata/ChartDataAction';
import { closeChannel, subscribe } from './channel';
import { buffers, EventChannel } from 'redux-saga';
import { RootState } from '../reducers';

export function* start() {
  yield put(RunnerActions.watch());
}

export function* watcher() {
  while (yield take(RunnerActions.watch)) {
    try {
      const worker = yield fork(connectChannel);
      yield take([StateActions.stop, StateActions.done]);
      yield cancel(worker);
    } catch (error) {
      console.error(error);
    }
  }
}

function* connectChannel() {
  let channel: EventChannel<any>;
  try {
    const DEFAULT_SPEED = 300;
    const buffer = buffers.sliding(1);
    const param = { interval: 1, buffer };
    channel = yield call(subscribe, param);

    while (true) {
      yield flush(channel);
      const store = yield select(getPlayerFromStore);
      if (store.data.length - 1 <= store.playIndex) {
        break;
      }

      const intervalTime = DEFAULT_SPEED / store.speedRate;
      const { pause } = yield race({
        timeout: delay(intervalTime),
        pause: take(StateActions.pause),
      });

      if (pause) {
        yield put(StateActions.pause());
        yield take(StateActions.play);
      } else {
        yield put(ChartDataActions.nextPlayIndex());
      }
    }

    yield put(StateActions.done());
  } catch (error) {
    console.error(error);
  } finally {
    closeChannel(channel!);
  }
}

const getPlayerFromStore = (state: RootState) => state.chartData;
