import { Buffer, buffers, eventChannel, EventChannel } from 'redux-saga';

interface ISubscribe {
  interval: number;
  buffer: Buffer<any>;
}

export function subscribe(param: ISubscribe) {
  const { interval, buffer } = param;

  return eventChannel<number>((emit) => {
    const iv = setInterval(() => {
      emit(+interval);
    }, interval);

    return () => {
      clearInterval(iv);
    };
  }, buffer || buffers);
}

export function closeChannel(channel: EventChannel<any>) {
  if (channel) channel.close();
}
