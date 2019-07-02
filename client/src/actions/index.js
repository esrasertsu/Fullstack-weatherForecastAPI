import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_CITY } from './types';

let initialCities =[];

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

    // export const fetchCity = () =>
    //  return function(dispatch){
    //    axios
    //    .get('https://swapi.co/api/planets/')
    //    .then(res => dispatch({ type: FETCH_USER, payload: res })
    //    );
    //  };

  export const fetchCity = () => async dispatch => {

            const url = "https://api.apixu.com/v1/forecast.json?key=95d4c8915a8d4a0388665716193006&q=Sydney&days=10";
            const getData = async url => {
            try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json);
            } catch (error) {
              console.log(error);
            }
          };
          getData(url);

    //  dispatch({ type: FETCH_CITY, payload: res });

        };
