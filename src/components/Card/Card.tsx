import React, { useState } from "react";

import './card.css';

interface ICard{
    category:string;
    image:string;
    index:number;
    state:string;
    handleClick:(index:number)=>void;
}

const Card = ({state,category, image, index, handleClick}:ICard) => {

    const cl = state ? " active " + state : "";

    const clickCard = () => {
        handleClick(index);
    }

    return (
        <div onClick={() => clickCard()} className={`card ${cl}`}>
            <div className="front">
                <img src={`images/${category}/${image}`} alt={image} />
            </div>
            <div className="back"></div>
            <div className="overlay"></div>
        </div>
    )
}

export default Card;