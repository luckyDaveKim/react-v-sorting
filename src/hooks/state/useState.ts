import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { StateKey } from '../../reducers/state';

export default function useState(key: StateKey) {
  return useSelector((state: RootState) => state.state[key]);
}
