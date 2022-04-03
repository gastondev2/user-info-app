import { all, takeEvery } from 'redux-saga/effects';

import { getUsersSaga } from './effects/Users/sagas';
import { USER_LIST_REQUEST } from './effects/Users/constants';

export default function* rootSaga() {
  yield all([takeEvery(USER_LIST_REQUEST, getUsersSaga)]);
}
