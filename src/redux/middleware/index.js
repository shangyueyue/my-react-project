import thunk from 'redux-thunk'; // redux-thunk 支持 dispatch function，并且可以异步调用它
import logger from 'redux-logger'; // 利用redux-logger打印日志  放在最后一个

export default [thunk, logger];
