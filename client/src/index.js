import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import './index.css';

import App from './components/App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root'));


  //https://api.apixu.com/v1/forecast.json?key=95d4c8915a8d4a0388665716193006&q=Paris

console.log('RAPIDAPI WEATHER KEY IS', process.env.RAPIDAPI_WEATHER_KEY);
console.log('Environment is', process.env.NODE_ENV);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



serviceWorker.unregister();
