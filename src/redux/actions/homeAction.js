import * as types from '../constant-type';

export const fetchMsg = (params, cb) => (dispatch, getState) => {
  // const {home} = getState();
  dispatch({
    type: [],
    payload: {},
    meta: {
      url: '/add',
      params,
      method: 'get'
    },
    cb

  });
};
