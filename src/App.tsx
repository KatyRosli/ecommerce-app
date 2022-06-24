import React, { useEffect } from 'react';
import './App.css';
import {getWomenFashion} from './api/women-fashion';
import Home from './pages/home';

function App() {
  

  useEffect(() => {
    const data = getWomenFashion();
  }, []);

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
