import React, { useEffect, useState } from "react";

import style from "./timer.module.css";

interface ITimer {
    secondCount:number;
    isRepeat:boolean;
    endFunc: () => void;
}

const Timer = ({secondCount, endFunc, isRepeat}:ITimer) => {
    const [seconds, setSeconds] = useState(secondCount);

    useEffect(()=>{
        console.log(secondCount,seconds,isRepeat);
        let timer:NodeJS.Timeout | undefined = undefined;
        if (seconds > 0) {
            timer = setTimeout(()=>{setSeconds((s) => s - 1)},1000);
        } else {
            endFunc();
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    },[seconds])

    useEffect(()=>{
        setSeconds(secondCount);
    },[ isRepeat])

    return (
        <div className={style.timer}>
            <div className={style.wrapper}>{seconds}</div>
        </div>
    )
}

export default Timer;