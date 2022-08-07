import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import MathLink from "../MathLink";

import style from './header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <Container>
                <div className={style.headerWrapper}>
                    <Logo />
                    <MathLink path="/game" text="game"/>
                    <MathLink path="/settings" text="Settings"/>
                </div>
            </Container>
        </header>
    )
}

export default Header;