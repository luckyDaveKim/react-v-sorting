import { useSelector } from 'react-redux';
import { PlayerKey } from '../../store/redux/player';
import { RootState } from '../../store/redux';

export default function usePlayer(key: PlayerKey) {
  return useSelector((state: RootState) => state.player[key]);
}
