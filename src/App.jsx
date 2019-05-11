import React from 'react'
import logo from './components/assets/jdogimage.png'
import './App.css'
import Nvbr from './components/CustomNavbar'


function App() {
  return (
    <div className="App">
      <Nvbr />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          Chase Was Here Bitch
        </a>
      </header>
    </div>
  );
}

export default App;