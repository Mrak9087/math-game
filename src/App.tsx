import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Game from './pages/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='game' element={<Game />}/>
          <Route path='settings'/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
