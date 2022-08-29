import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
