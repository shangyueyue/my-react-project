import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // redux-thunk 支持 dispatch function，并且可以异步调用它
import logger from 'redux-logger'; // 利用redux-logger打印日志  放在最后一个
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from '@/redux/reducers';

const rootReducer = combineReducers({...reducers});
const middlewares=[thunk,logger];
const store = createStore(
    rootReducer,
    // composeWithDevTools(applyMiddleware(...middlewares))
);
console.log("store",store);
export default store;