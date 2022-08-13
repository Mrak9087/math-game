import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDiff } from "../../../store/reducers/gameSlice";
import { AppDispatch, RootState } from "../../../store/store";

import style from "./levelIem.module.css";

interface ILevelItem {
    nameLevel:string;
    diffLevel:number;
}

const LevelItem = ({nameLevel, diffLevel}:ILevelItem) => {
    const store = useSelector((state:RootState)=>state);
    const dispatch = useDispatch<AppDispatch>();

    const activeClass = diffLevel === store.difficulty ? style.active : '';

    const handlerClick = () => {
        dispatch(setDiff(diffLevel))
    }

    return (
        <div className={`${style.levelItem} ${activeClass}`} onClick={handlerClick}>{nameLevel}</div>
    )
}

export default LevelItem;