import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import Logo from '../Logo';
import MathLink from '../MathLink';

import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerWrapper}>
          <Link to="/" className="logoLink">
            <Logo />
          </Link>
          <MathLink path="/game" text="game" />
          <MathLink path="/settings" text="Settings" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
