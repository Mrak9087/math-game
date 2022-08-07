import React, { ReactNode } from "react";

import style from "./container.module.css";

interface IContainer {
    children: ReactNode;
}

const Container = ({children}: IContainer) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
}

export default Container;