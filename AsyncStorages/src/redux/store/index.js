import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

const {default: userReducer} = require('../reducers');

const rootReducer = combineReducers({
  usae: userReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
