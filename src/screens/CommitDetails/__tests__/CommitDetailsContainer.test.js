import {mapStateToProps} from '../CommitDetailsContainer';

describe('GIVEN Commit container mapStateToProps() is defined', () => {
  describe('WHEN mapStateToProps is called with mockState', () => {
    const props = {
      commit: {},
    };

    const mockState = {
      commits: {...props},
    };

    it('THEN return needed props', () => {
      expect(mapStateToProps(mockState)).toEqual(props);
    });
  });
});
