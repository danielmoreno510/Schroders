import {produce} from 'immer';

import {
  FETCH_COMMIT_LIST,
  PUT_COMMIT_LIST,
  PUT_CURRENT_COMMIT,
  PUT_CHART,
} from '../actions/types';

export const initialState: ICommitInitialState = {
  isFetchingCommitList: true,
  commitList: [],
  commit: null,
  year: '',
  isLibrary: true,
};

export default (state = initialState, action: ICommitReducer) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_COMMIT_LIST:
        draft.isFetchingCommitList = true;
        draft.year = action.year;
        break;
      case PUT_COMMIT_LIST:
        draft.isFetchingCommitList = false;
        draft.commitList = [...new Set(action.commitList)];
        break;
      case PUT_CURRENT_COMMIT:
        draft.commit = action.commit;
        break;
      case PUT_CHART:
        draft.isLibrary = !draft.isLibrary;
        break;
      default:
        break;
    }
  });
