import React from 'react';

import style from './main.module.css';

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.mainWrapper}>
        <h2>MATH-GAME</h2>
        <p className={style.descriptionGame}>
          A game for the development of memory. You can choose the difficulty and pictures, and you
          can also play for a while.
        </p>
      </div>
    </div>
  );
};

export default Main;
