import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css';

import Header from './Header';
import Forecasts from './Forecasts';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
  return (
    <div className="App">
    <BrowserRouter>
    <div>
     <Header />
      <Route exact={true} path="/forecast" component={Forecasts}/>
    </div>
    </BrowserRouter>
    </div>
  );
 }
}

export default connect(null, actions)(App);
