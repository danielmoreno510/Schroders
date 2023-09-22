import {takeLatest, put, call, PutEffect, CallEffect} from 'redux-saga/effects';

import {putCommitList} from '../../actions';
import {FETCH_COMMIT_LIST} from '../../actions/types';
import {getCommits} from '../../../services/api/commitsService';
import {handleHttpError} from '../../../services/httpUtils';

type TCommitEffect =
  | PutEffect<{type: string}>
  | CallEffect<ICommitListResponseData>;

export function* fetchCommitList({
  year,
}: {
  year: string;
}): Generator<TCommitEffect, void, ICommitListResponseData> {
  const context = 'fetchCommitList saga';

  try {
    const response: ICommitListResponseData = yield call(getCommits, year);

    // Dispatches an action to get the node data to the state tree.
    yield put(putCommitList(response.items));
  } catch (error: unknown) {
    yield put(putCommitList([]));
    handleHttpError(error as IHttpError, context);
  }
}
/** * Watcher saga that waits for an action and forks the fetch saga. */
export default function* watchFetchCommitList() {
  // @ts-ignore
  yield takeLatest(FETCH_COMMIT_LIST, fetchCommitList);
}
