import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

import './game.css';
type TImage = {
    id:number,
    image:string,
}

type TResp = {
    category:string,
    images:TImage[];
}

function shuffleArray(arr:TImage[]):TImage[]{
    for (let i = arr.length - 1; i >= 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const Game = () => {
    const [imageList, setImageList] = useState<TImage[]>([]);
    const getImages = async () => {
        const res = await axios.get<TResp[]>('./images.json');
        const data = res.data;
        const tmp = data[0].images.slice(0, (4**2)/2)
        const cards = tmp.concat(tmp);
        console.log(cards);
        
        setImageList(shuffleArray(cards));
    }

    useEffect(()=>{
        getImages();
    },[])

    return (
        <div className="game">
            <div className={`gameGrid grid4`}>
                {imageList.map((item,index)=>{
                    return <Card key={index} id={item.id} category='dragons' image={item.image}/>
                })}
            </div>
        </div>
    )
}

export default Game;