import React, { useState } from "react";

import style from './card.module.css';

interface ICard{
    id:number;
    category:string;
    image:string;
}

const Card = ({id, category, image}:ICard) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const clickCard = () => {
        setIsFlipped(true);
        setTimeout(() => {setIsFlipped(false)}, 3000)
    }

    return (
        <div onClick={() => clickCard()} className={`${style.card} ${isFlipped ? style.flipped : ''}`}>
            <div className={style.front}>
                <img src={`images/${category}/${image}`} alt={image} />
            </div>
            <div className={style.back}></div>
            <div className={style.overlay}></div>
        </div>
    )
}

export default Card;