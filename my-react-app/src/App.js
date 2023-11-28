import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';

function App() {
  return (
    <div className = "App">
      <header className='App-header'>
        <HelloWorld />
        <Counter />
      </header>
    </div>
  )
}

export default App;