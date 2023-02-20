import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState (['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }


  return (
    <div className="App">
      {colors.map((color, i) => 
      <ColorBlock key={i} color={color} />
      )}
      <ColorForm addColor = {addColor} />
    </div>
  );
}

export default App;
