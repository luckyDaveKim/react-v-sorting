import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { stateActions } from '../../actions/state/StateAction';
import { chartDataActions } from '../../actions/chartdata/ChartDataAction';

export default function useControllerActions() {
  const dispatch = useDispatch();

  const onPlay = useCallback(() => {
    dispatch(stateActions.play());
  }, [dispatch]);

  const onPause = useCallback(() => {
    dispatch(stateActions.pause());
  }, [dispatch]);

  const onRest = useCallback(() => {
    dispatch(chartDataActions.initPlayIndex());
    dispatch(stateActions.play());
  }, [dispatch]);

  const onPrev = useCallback(() => {
    dispatch(stateActions.pause());
    dispatch(chartDataActions.prevPlayIndex());
  }, [dispatch]);

  const onNext = useCallback(() => {
    dispatch(stateActions.pause());
    dispatch(chartDataActions.nextPlayIndex());
  }, [dispatch]);

  const setSpeedRate = useCallback(
    speedRate => {
      dispatch(chartDataActions.setSpeedRate(speedRate));
    },
    [dispatch]
  );

  const changeAlgorithm = useCallback(
    algorithm => {
      dispatch(stateActions.stop());
      dispatch(chartDataActions.changeAlgorithm(algorithm));
      dispatch(chartDataActions.initData());
    },
    [dispatch]
  );

  const changeSize = useCallback(
    size => {
      dispatch(stateActions.stop());
      dispatch(chartDataActions.changeSize(size));
      dispatch(chartDataActions.initData());
    },
    [dispatch]
  );

  return {
    onPlay,
    onPause,
    onRest,
    onPrev,
    onNext,
    setSpeedRate,
    changeAlgorithm,
    changeSize,
  };
}
