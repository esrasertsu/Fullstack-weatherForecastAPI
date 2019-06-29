import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import logo from '../logo.svg';
import '../App.css';

import Header from './Header';
const Weather = () => <h2>Weather Forecast</h2>


class App extends Component {
  componentMount(){
    this.props.fetchUser();
  }

  render(){
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
        <a href="/auth/google">Sign in Google</a>
      </header>
    </div>
  );
 }
}

export default connect(null, actions)(App);
