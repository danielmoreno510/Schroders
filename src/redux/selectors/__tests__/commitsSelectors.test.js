import {cloneDeep} from 'lodash';

import {getHistogramData} from '../commitsSelectors';
import {histogramData} from '../../../constants';

describe('getHistogramData selector', () => {
  describe('GIVEN a set of valid state', () => {
    it('WHEN the selector should return histogramData data', () => {
      const state = {
        commits: {
          commitList: [
            {
              id: 1,
              node_id: '1',
              title: 'Test 1',
              user: {login: 'Test', id: '1', avatar_url: ''},
              comments: 3,
              created_at: '2022-09-21',
              body: 'Body 1',
            },
          ],
        },
      };

      const histogramDataFormatted = cloneDeep(histogramData);
      histogramDataFormatted[8] = {
        ...histogramDataFormatted[8],
        value: 1,
        size: 90,
      };

      const result = getHistogramData(state);
      expect(result).toEqual(histogramDataFormatted);
    });
  });
});
