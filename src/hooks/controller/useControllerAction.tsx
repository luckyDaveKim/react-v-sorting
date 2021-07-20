import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { stateActions } from '../../actions/state/StateAction';
import { chartDataActions } from '../../actions/chartdata/ChartDataAction';

export default function useControllerActions() {
  const dispatch = useDispatch();

  const onPlayButton = useCallback(() => {
    dispatch(stateActions.play());
  }, [dispatch]);

  const onPauseButton = useCallback(() => {
    dispatch(stateActions.pause());
  }, [dispatch]);

  const onRestButton = useCallback(() => {
    dispatch(chartDataActions.initPlayIndex());
    dispatch(stateActions.play());
  }, [dispatch]);

  const onPrevButton = useCallback(() => {
    dispatch(chartDataActions.prevPlayIndex());
    dispatch(stateActions.pause());
  }, [dispatch]);

  const onNextButton = useCallback(() => {
    dispatch(chartDataActions.nextPlayIndex());
    dispatch(stateActions.pause());
  }, [dispatch]);

  const setSpeedRate = useCallback(
    speedRate => {
      dispatch(chartDataActions.setSpeedRate(speedRate));
    },
    [dispatch]
  );

  const changeAlgorithm = useCallback(
    algorithm => {
      dispatch(chartDataActions.changeAlgorithm(algorithm));
      dispatch(chartDataActions.initData());
      dispatch(chartDataActions.initPlayIndex());
      dispatch(stateActions.stop());
    },
    [dispatch]
  );

  return {
    onPlayButton,
    onPauseButton,
    onRestButton,
    onPrevButton,
    onNextButton,
    setSpeedRate,
    changeAlgorithm,
  };
}
