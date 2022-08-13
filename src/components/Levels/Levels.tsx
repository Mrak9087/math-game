import React from "react";
import LevelItem from "./LevelItem";

import style from "./levels.module.css";

interface ILevels {
    name: string;
    diff: number;
}

interface ILevelsArr {
    arrLevels: ILevels[];
}


const Levels = ({arrLevels}:ILevelsArr) => {
    return (
        <div className={style.levels}>
            <h2>Difficulty</h2>
            <div className={style.levelsWrapper}>
                {arrLevels.map((item)=><LevelItem key={item.diff} diffLevel={item.diff} nameLevel={item.name}/>)}
            </div>
        </div>
    )
}

export default Levels;