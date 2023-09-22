import {produce} from 'immer';

import {
  FETCH_COMMIT_LIST,
  PUT_COMMIT_LIST,
  PUT_CURRENT_COMMIT,
} from '../actions/types';

export const initialState: ICommitInitialState = {
  isFetchingCommitList: true,
  commitList: [],
  commit: null,
  year: '',
};

export default (state = initialState, action: ICommitReducer) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_COMMIT_LIST:
        draft.isFetchingCommitList = true;
        draft.year = action.year;
        break;
      case PUT_COMMIT_LIST:
        draft.commitList = [...new Set(action.commitList)];
        draft.isFetchingCommitList = false;
        break;
      case PUT_CURRENT_COMMIT:
        draft.commit = action.commit;
        break;
      default:
        break;
    }
  });
