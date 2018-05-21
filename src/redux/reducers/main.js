import * as types from '../constant-type';

const initState = {
  results: {}
};
function main(state = initState, action) {
  const { type, results } = action;
  switch (type) {
    case types.FETCH_MAIN_LIST_BEGIN:
      return { ...state };
    case types.FETCH_MAIN_LIST_SUCCESS:
      return { ...state, results };
    case types.FETCH_MAIN_LIST_FAILURE:
      return { ...state, results };
    default: return state;
  }
}

export default main;
