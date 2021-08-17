import React from 'react';
import Card from './components/Card';

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Exercicie React-redux (Simple)</h1>
      <div className="line"> 
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="line"> 
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
