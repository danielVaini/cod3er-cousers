import React from 'react';

import './App.css'
import Interval from './components/Interval';
import Media from './components/Media';
import Raffle from './components/Raffle';
import Sum from './components/Sum';


function App() {
  return (
    <div className="App">
      <h1>Exercicie React-redux (Simple)</h1>
      <div className="line">
        <Interval />

      </div>
      <div className="line">
        <Media />
        <Sum />
        <Raffle />
        
      </div>
    </div>
  );
}

export default App;
