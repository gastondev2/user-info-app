import { USER_LIST_FAILURE, USER_LIST_SUCCESS, USER_LIST_REQUEST } from './constants';

export const fetchUsersRequestAction = payload => ({
  type: USER_LIST_REQUEST,
  payload,
});

export const fetchUsersSuccessAction = payload => ({
  type: USER_LIST_SUCCESS,
  payload,
});

export const fetchUsersFailureAction = payload => ({
  type: USER_LIST_FAILURE,
  payload,
});
