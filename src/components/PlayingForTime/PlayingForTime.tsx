import { useDispatch, useSelector } from 'react-redux';
import { setPlayingForTime } from '../../store/reducers/gameSlice';
import { AppDispatch, RootState } from '../../store/store';

import style from './playingForTime.module.css';

const PlayingForTime = () => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const activeClass = store.playingForTime ? style.active : '';

  const handleClick = () => {
    dispatch(setPlayingForTime(!store.playingForTime));
  };

  return (
    <div className={style.forTime}>
      <h2>Playing for Time</h2>
      <div className={`${style.checkTime} ${activeClass}`} onClick={handleClick}></div>
    </div>
  );
};

export default PlayingForTime;
