// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Create this file next

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers as needed
});

export default rootReducer;
