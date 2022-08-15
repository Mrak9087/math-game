import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import Counter from '../../components/Counter';
import Timer from '../../components/Timer';
import { RootState } from '../../store/store';

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

function shuffleArray(arr: TImage[]): TImage[] {
    for (let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}



const Game = () => {
    const store = useSelector((state:RootState) => state);
    const [imageList, setImageList] = useState<TCardGame[]>([]);
    const [prev, setPrev] = useState(-1);
    const [isFlip, setIsFlip] = useState(false);
    const [correctCount, setCorrectCount] = useState(0)
    const [errorCount, setErrorCount] = useState(0)

    const getImages = async (category:string) => {
        const res = await axios.get<TResp[]>('./images.json');
        const data = res.data;
        const tmp = data.filter((item) => item.category === category)[0].images;
        const shufArr = shuffleArray(tmp);
        const arrayImg = shufArr.slice(0, store.difficulty ** 2 / 2);
        let cards = arrayImg.concat(arrayImg);
        cards = shuffleArray(cards);
        const gameCards = cards.map((item)=>{
           return {card:item, state:'active'}
        });
        setImageList(gameCards);
        setIsFlip(true);
    };

    const rotateCard = ()=>{
        const tmp = imageList.map((item)=> {
            item.state="";
            return item;
        });
        setImageList(tmp);
        setIsFlip(false);
    };

    useEffect(() => {
        getImages(store.category);
    }, []);

    function check(current:number) {
        setIsFlip(true);
        if (imageList[current].card.id === imageList[prev].card.id){
            imageList[current].state = "correct";
            imageList[prev].state = "correct";
            setCorrectCount((c) => c + 1);
            setImageList([...imageList]);
            setPrev(-1);
            setIsFlip(false);
        } else {
            imageList[current].state = "error";
            imageList[prev].state = "error";
            setErrorCount((c) => c + 1);
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
            <div className="gameInfo">
                <Counter count={correctCount} name='Correct' classColor='ansCor'/>
                <Timer secondCount={store.difficulty * 5 - 10} endFunc={rotateCard}/>
                <Counter count={errorCount} name='Error' classColor='ansErr'/>
            </div>
            <div className={`gameGrid grid${store.difficulty}`}>
                {imageList.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            category={store.category}
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
