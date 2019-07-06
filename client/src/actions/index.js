import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_CITY } from './types';

// export const fetchUser = () =>
//  return function(dispatch){
//    axios
//    .get('/api/current_user')
//    .then(res => dispatch({ type: FETCH_USER, payload: res })
//    );
//  };



//refactor fetch function
  export const fetchUser = () => async dispatch => {
      const res = await axios.get('/api/current_user');
      dispatch({ type: FETCH_USER, payload: res.data });
    };

    export const fetchCities = () => async dispatch => {
      debugger;
        const res = await axios.get('/api/selectCities');
        dispatch({ type: FETCH_CITY, payload: res.data });
      };
