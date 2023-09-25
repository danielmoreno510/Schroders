import commitsReducer, {initialState} from '../commitsReducer';
import {
  fetchCommitList,
  putChart,
  putCommitList,
  putCurrentCommit,
} from '../../actions/commitsActions';

describe('Commits Reducer', () => {
  describe('GIVEN the initial state', () => {
    describe('WHEN initialized', () => {
      it('THEN returns the initial state', () => {
        expect(commitsReducer(undefined, {year: ''})).toEqual(initialState);
      });
    });

    describe.each`
      action                  | expectedState
      ${fetchCommitList('')}  | ${{year: ''}}
      ${putCommitList([])}    | ${{isFetchingCommitList: false}}
      ${putCurrentCommit({})} | ${{commit: {}}}
      ${putChart({})}         | ${{isLibrary: false}}
    `('WHEN the “$action“ action is dispatched', ({action, expectedState}) => {
      it('THEN should return the correct state', () => {
        expect(commitsReducer(initialState, action)).toEqual({
          ...initialState,
          ...expectedState,
        });
      });
    });
  });
});
