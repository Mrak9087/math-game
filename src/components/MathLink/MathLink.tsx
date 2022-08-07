import React from "react";
import { NavLink } from "react-router-dom";

import style from "./mathLink.module.css";

interface IMathLink {
    path:string;
    text:string;
}

const MathLink = ({path, text}:IMathLink) => {
    return (
        <NavLink to={path} className={style.mathLink}>{text}</NavLink>
    )
}

export default MathLink;
