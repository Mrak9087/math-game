import React, { useEffect, useState } from "react";

import style from "./timer.module.css";

interface ITimer {
    secondCount:number;
    endFunc: () => void;
}

const Timer = ({secondCount,endFunc}:ITimer) => {
    const [seconds, setSeconds] = useState(secondCount);

    useEffect(()=>{
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

    return (
        <div className={style.timer}>
            <div className={style.wrapper}>{seconds}</div>
        </div>
    )
}

export default Timer;