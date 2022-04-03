import { USER_STATE, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAILURE } from './constants';
import stateBase from './state';

const initialState = stateBase[USER_STATE];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
        users: null,
      };
    case USER_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        users: action.payload.users,
      };
    case USER_LIST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isFetching: false,
        users: null,
      };
    default:
      return state;
  }
};

export default reducer;
