import React, { useState } from "react";

import style from './card.module.css';

const Card = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const clickCard = () => {
        setIsFlipped(true);
    }

    return (
        <div onClick={() => clickCard()} className={`${style.card} ${isFlipped ? style.flipped : ''}`}>
            <div className={style.front}></div>
            <div className={style.back}></div>
            <div className={style.overlay}></div>
        </div>
    )
}

export default Card;