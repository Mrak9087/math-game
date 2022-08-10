import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';

import './game.css';
type TImage = {
    id: number;
    image: string;
};

type TResp = {
    category: string;
    images: TImage[];
};

type TCardGame = {
    card:TImage;
    state:string;
}

function shuffleArray(arr: TCardGame[]): TCardGame[] {
    for (let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}



const Game = () => {
    const [imageList, setImageList] = useState<TCardGame[]>([]);
    const [prev, setPrev] = useState(-1);
    const [isFlip, setIsFlip] = useState(false);
    const getImages = async () => {
        const res = await axios.get<TResp[]>('./images.json');
        const data = res.data;
        const tmp = data[0].images.slice(0, 4 ** 2 / 2);
        const cards = tmp.concat(tmp);

        setImageList(shuffleArray(cards.map((item)=>{
            return {card:item,state:''}
        })));
    };

    useEffect(() => {
        getImages();
    }, []);

    function check(current:number) {
        setIsFlip(true);
        if (imageList[current].card.id === imageList[prev].card.id){
            imageList[current].state = "correct";
            imageList[prev].state = "correct";
            setImageList([...imageList]);
            setPrev(-1);
            setIsFlip(false);
        } else {
            imageList[current].state = "error";
            imageList[prev].state = "error";
            setImageList([...imageList]);
            setTimeout(()=>{
                imageList[current].state = "";
                imageList[prev].state = "";
                setImageList([...imageList]);
                setPrev(-1);
                setIsFlip(false);
            },1000)
        }

        
    }

    const handleCardClick = (index: number) => {
        if (imageList[index].state || isFlip) return;
        if (prev === -1) {
            imageList[index].state = "active";
            setImageList([...imageList]);
            setPrev(index);
        } else {
            check(index)
        }
        
    };

    return (
        <div className="game">
            <div className={`gameGrid grid4`}>
                {imageList.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            category="dragons"
                            image={item.card.image}
                            index={index}
                            handleClick={handleCardClick}
                            state = {item.state}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Game;
