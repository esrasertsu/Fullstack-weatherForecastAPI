import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

import Header from './Header';
const Weather = () => <h2>Weather Forecast</h2>



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div>
     <Header />
      <Route exact={true} path="/" component={Weather}/>
    </div>
    </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!Esra
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href="/auth/google">Sign in Google</a>
      </header>
    </div>
  );
}

export default App;
