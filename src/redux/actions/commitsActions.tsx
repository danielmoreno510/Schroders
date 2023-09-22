import {FETCH_COMMIT_LIST, PUT_COMMIT_LIST, PUT_CURRENT_COMMIT} from './types';

export const fetchCommitList = (year: string): ICommitReducer => ({
  type: FETCH_COMMIT_LIST,
  year,
});

export const putCommitList = (commitList: ICommit[]): ICommitReducer => ({
  type: PUT_COMMIT_LIST,
  commitList,
});

export const putCurrentCommit = (commit: ICommit): ICommitReducer => ({
  type: PUT_CURRENT_COMMIT,
  commit,
});

export default {
  fetchCommitList,
  putCommitList,
};
