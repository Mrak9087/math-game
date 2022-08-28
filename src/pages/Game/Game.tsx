import axios from 'axios';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import Counter from '../../components/Counter';
import Modal from '../../components/Modal';
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
  card: TImage;
  state: string;
};

function shuffleArray(arr: TImage[]): TImage[] {
  for (let i = arr.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Game = memo(() => {
  const store = useSelector((state: RootState) => state);

  const countCard = store.difficulty ** 2;

  const [imageList, setImageList] = useState<TCardGame[]>([]);
  const [arrLoadImg, setArrLoadImg] = useState(new Array(countCard).fill(false));
  const [prev, setPrev] = useState(-1);
  const [isFlip, setIsFlip] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [isRepeat, setIsRepeat] = useState(false);

  const isLoading: boolean = useMemo(() => {
    const result = arrLoadImg.filter((item) => {
      if (item) return item;
    }).length;
    return Boolean(result);
  }, [arrLoadImg]);

  const loadImage = (index: number) => {
    arrLoadImg[index] = true;
    setArrLoadImg([...arrLoadImg]);
  };

  const getImages = async (category: string) => {
    const res = await axios.get<TResp[]>('./images.json');
    const data = res.data;
    const tmp = data.filter((item) => item.category === category)[0].images;
    const shufArr = shuffleArray(tmp);
    const arrayImg = shufArr.slice(0, countCard / 2);
    let cards = arrayImg.concat(arrayImg);
    cards = shuffleArray(cards);
    const gameCards = cards.map((item) => {
      return { card: item, state: 'active' };
    });
    setImageList(gameCards);
    setIsFlip(true);
  };

  const rotateCard = () => {
    const tmp = imageList.map((item) => {
      item.state = '';
      return item;
    });
    setImageList(tmp);
    setIsFlip(false);
  };

  useEffect(() => {
    setErrorCount(0);
    setCorrectCount(0);
    setPrev(-1);
    
    getImages(store.category);
  }, [isRepeat]);

  useEffect(() => {
    if (correctCount === countCard / 2) {
      setIsEnd(true);
    }
  }, [correctCount]);

  const closeModal = () => {
    setIsEnd(false);
  };

  const retryGame = () => {
    setArrLoadImg(arrLoadImg.map(()=> false));
    closeModal();
    setIsRepeat((s) => !s);
  };

  function check(current: number) {
    setIsFlip(true);
    if (imageList[current].card.id === imageList[prev].card.id) {
      imageList[current].state = 'correct';
      imageList[prev].state = 'correct';
      setCorrectCount((c) => c + 1);
      setImageList([...imageList]);
      setPrev(-1);
      setIsFlip(false);
    } else {
      imageList[current].state = 'error';
      imageList[prev].state = 'error';
      setErrorCount((c) => c + 1);
      setImageList([...imageList]);
      setTimeout(() => {
        imageList[current].state = '';
        imageList[prev].state = '';
        setImageList([...imageList]);
        setPrev(-1);
        setIsFlip(false);
      }, 1000);
    }
  }

  const handleCardClick = (index: number) => {
    if (imageList[index].state || isFlip) return;
    if (prev === -1) {
      imageList[index].state = 'active';
      setImageList([...imageList]);
      setPrev(index);
    } else {
      check(index);
    }
  };

  return (
    <div className="game">
      <div className="gameInfo">
        {isLoading ? (
          <>
            <Counter count={correctCount} name="Correct" classColor="ansCor" />
            <Timer
              secondCount={store.difficulty * 5 - 10}
              endFunc={rotateCard}
              isRepeat={isRepeat}
            />
            <Counter count={errorCount} name="Error" classColor="ansErr" />
          </>
        ) : (
          ''
        )}
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
              handleLoad={loadImage}
              state={item.state}
            />
          );
        })}
      </div>
      {isEnd ? (
        <Modal
          closeModal={closeModal}
          retryGame={retryGame}
          countCorrect={correctCount}
          countError={errorCount}
        />
      ) : (
        ''
      )}
    </div>
  );
});

export default Game;
