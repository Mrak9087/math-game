import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='game'/>
          <Route path='settings'/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
