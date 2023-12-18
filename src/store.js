// store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/indeex'; // Create this file next

const store = createStore (rootReducer,window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_() );

export default store;
