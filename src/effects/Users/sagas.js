import { call, put } from 'redux-saga/effects';
import { fetchUsersFailureAction, fetchUsersSuccessAction } from './actions';
import { getUsersRequest } from './requests';

export function* getUsersSaga(action) {
  try {
    const response = yield call(getUsersRequest, action.payload);

    if (response.status >= 400) {
      yield put(fetchUsersFailureAction({ error: response.data }));
    }

    yield put(fetchUsersSuccessAction({ users: response.data }));
  } catch (error) {
    yield put(fetchUsersFailureAction({ error: error.message }));
  }
}
