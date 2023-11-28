import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import NameForm from './components/NameForm';

function App() {
  return (
    <div className = "App">
      <header className='App-header'>
        <HelloWorld />
        <Counter />
        <NameForm />
      </header>
    </div>
  )
}

export default App;