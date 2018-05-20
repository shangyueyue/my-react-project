import * as types from '../constant-type';

export const addTodo = params => ({
  type: types.ADD_TO_DO,
  data: params,
});

export const fetchMsg = params => (dispatch, getState) => {
  // const {home} = getState();
  dispatch({
    type: [],
    payload: { ...params },
    meta: {
      url: '/add',
      method: 'get'
    }

  });
};
