import http from '../../http';
import {getCommits} from '../commitsService';

describe('commit service', () => {
  describe('WHEN the shooes service is called', () => {
    const request = '2023';
    const httpSpy = jest
      .spyOn(http, 'get')
      .mockImplementation(() => ({data: {items: []}}));

    it('THEN should send a get request', async () => {
      await getCommits(request);
      expect(httpSpy).toHaveBeenCalledWith(expect.stringMatching(/issues/));
    });
  });
});
