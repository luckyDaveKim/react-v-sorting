import React, { useEffect, useState } from 'react';
import styles from './SortVisualizer.module.css'
import usePlayer from '../../../hooks/player/usePlayer';
import usePlayerActions from '../../../hooks/player/usePlayerAction';
import SortChart from '../../molecules/SortChart/SortChart';

const buttonComponent = {
  play: { key: 'play', title: 'Play' },
  pause: { key: 'pause', title: 'Pause' },
  restart: { key: 'restart', title: 'Restart' },
  stop: { key: 'stop', title: 'Stop' },
};
type ButtonType = keyof typeof buttonComponent;

const SortVisualizer: React.FC = () => {
  const status = usePlayer('status');
  const playerActions = usePlayerActions();

  const [buttonTypes, setButtonTypes] = useState<ButtonType[]>(['play', 'stop']);

  useEffect(() => {
    let _buttonTypes: ButtonType[] = [];
    switch (status) {
      case 'play':
        _buttonTypes.push('pause');
        break;
      case 'pause':
        _buttonTypes.push('restart');
        break;
      case 'stop':
        _buttonTypes.push('play');
        break;
    }

    _buttonTypes.push('stop');
    setButtonTypes(_buttonTypes);
  }, [status]);

  const handleButtonClick = (type: ButtonType) => {
    switch (type) {
      case 'play':
        playerActions.onStart();
        break;
      case 'pause':
        playerActions.onPause();
        break;
      case 'stop':
        playerActions.onStop();
        break;
      case 'restart':
        playerActions.onRestart();
        break;
      default:
        console.log(`type of ${type} is not matched in 'handleButtonClick()'`);
    }
  };

  return (
    <div>
      <SortChart />

      {buttonTypes.map((eachButtonType) => {
        const button = buttonComponent[eachButtonType];
        return (
          <button
            key={button.key}
            className={button.key === 'stop' ? styles.sub : styles.main}
            onClick={() => handleButtonClick(eachButtonType)}
          >
            {button.title}
          </button>
        );
      })}
    </div>
  );
};

export default SortVisualizer;
