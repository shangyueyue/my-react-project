import * as types from '../constant-type';

export const fetchMainList = (params, cb) => (dispatch) => {
  // const {home} = getState();
  dispatch({
    type: [
      types.FETCH_MAIN_LIST_BEGIN,
      types.FETCH_MAIN_LIST_SUCCESS,
      types.FETCH_MAIN_LIST_FAILURE
    ],
    payload: { ...params },
    meta: {
      url: '/main',
      params,
      method: 'get'
    },
    cb

  });
};
