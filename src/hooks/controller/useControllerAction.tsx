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
    dispatch(stateActions.pause());
    dispatch(chartDataActions.prevPlayIndex());
  }, [dispatch]);

  const onNextButton = useCallback(() => {
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
