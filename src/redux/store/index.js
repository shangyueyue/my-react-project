import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import * as reducers from '../reducers';
import middlewares from '../middleware/';

const rootReducer = combineReducers({ ...reducers });
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
