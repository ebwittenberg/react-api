import React from 'react';
import './App.css';

import Weather from './Weather';
import Thrones from './Thrones';

function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center', backgroundColor: '#E8A87C', margin:'0', padding:'20px'}}>Mega API</h1>
      <div style={{backgroundColor: '#92c651'}}>
        <h1 style={{textAlign: 'center', margin: '0'}}>Weather and Fortune</h1>
        <Weather />
      </div>
      <div>
        <h1 style={{textAlign: 'center'}}>Game of Thrones</h1>
        <Thrones />

      </div>
  
    </div>
  );
}

export default App;
