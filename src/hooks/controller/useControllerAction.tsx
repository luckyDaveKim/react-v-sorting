import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { stateActions } from '../../actions/state/StateAction';
import { controllerActions } from '../../actions/conroller/ControllerAction';

export default function useControllerActions() {
  const dispatch = useDispatch();

  const onPlayButton = useCallback(() => {
    dispatch(controllerActions.play());
    dispatch(stateActions.play());
  }, [dispatch]);

  const onPauseButton = useCallback(() => {
    dispatch(controllerActions.pause());
    dispatch(stateActions.pause());
  }, [dispatch]);

  const onRestButton = useCallback(() => {
    dispatch(controllerActions.reset());
    dispatch(stateActions.play());
  }, [dispatch]);

  const onPrevButton = useCallback(() => {
    dispatch(controllerActions.prev());
    dispatch(stateActions.pause());
  }, [dispatch]);

  const onNextButton = useCallback(() => {
    dispatch(controllerActions.next());
    dispatch(stateActions.pause());
  }, [dispatch]);

  const setSpeedRate = useCallback(
    speedRate => {
      dispatch(controllerActions.setSpeedRate(speedRate));
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
  };
}
