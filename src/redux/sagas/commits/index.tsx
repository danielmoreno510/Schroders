import {all} from 'redux-saga/effects';

import commitListSaga from './commitListSaga';

export default function* rootSaga() {
  yield all([commitListSaga()]);
}
