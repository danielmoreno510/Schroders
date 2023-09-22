import {all} from 'redux-saga/effects';
import commitsSagas from './commits';

export default function* rootSaga() {
  yield all([commitsSagas()]);
}
