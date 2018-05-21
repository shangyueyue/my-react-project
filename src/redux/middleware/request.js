import http from '@/api/http/';

const request = ({ dispatch }) => next => (action) => {
  const {
    type, payload, meta = {}, cb
  } = action;
  if (!type || !Array.isArray(type)) {
    return next(action);
  }
  const [BEGIN, SUCCESS, FAILURE] = type;
  dispatch({ type: BEGIN, payload });
  const { url, params, method } = meta;
  if (url){
    http.request({ url, params, method }).then((res) => {
      console.log('results', res);
      const { code, data } = res;
      if (code === 0){
        dispatch({
          type: SUCCESS,
          results: data
        });
        if (cb){ cb(data); }
      } else {
        dispatch({
          type: FAILURE,
          results: data
        });
      }
    }).catch((error) => {
      console.log('error', error);
    });
  }
};

export default request;
