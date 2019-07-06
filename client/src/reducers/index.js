import { combineReducers } from 'redux';
import authReducer from './authReducer';
//import citySearchReducer from './citySearchReducer';

export default combineReducers({
 auth : authReducer,
  //city : citySearchReducer
});
