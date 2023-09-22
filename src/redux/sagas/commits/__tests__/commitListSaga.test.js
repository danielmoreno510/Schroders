import {runSaga} from 'redux-saga';

import * as commitsListService from '../../../../services/api/commitsService';
import {putCommitList} from '../../../actions';
import {fetchCommitList} from '../commitListSaga';

describe('fetchcommitList', () => {
  describe.each`
    action           | expectedService | response | name
    ${putCommitList} | ${'success'}    | ${[]}    | ${'putCommitList'}
    ${putCommitList} | ${'error'}      | ${null}  | ${'putCommitList'}
  `(
    'WHEN fetchcommitList saga is called with “$expectedService“ response in the commitsService service',
    ({action, expectedService, response, name}) => {
      it(`THEN ${name} action should be dispatched`, async () => {
        const promise =
          expectedService === 'success'
            ? Promise.resolve(response).then(
                data => data,
                error => error,
              )
            : Promise.reject(response).then(
                () => {},
                error => error,
              );
        const commitsService = jest
          .spyOn(commitsListService, 'getCommits')
          .mockImplementation(() => promise);

        const dispatched = [{commitList: response, type: 'PUT_COMMIT_LIST'}];
        const dispatch = {
          dispatch: actionDispatched => dispatched.push(actionDispatched),
        };
        await runSaga(dispatch, fetchCommitList, {operationId: 1});

        expect(commitsService).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([action(response)]);
        commitsService.mockClear();
      });
    },
  );
});
