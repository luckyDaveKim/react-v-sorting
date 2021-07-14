import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { ControllerKey } from '../../reducers/controller';

export default function useController(key: ControllerKey) {
  return useSelector((state: RootState) => state.controller[key]);
}
