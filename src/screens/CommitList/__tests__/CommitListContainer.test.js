import {mapStateToProps, mapDispatchToProps} from '../CommitListContainer';

describe('GIVEN Commit container mapStateToProps() is defined', () => {
  describe('WHEN mapStateToProps is called with mockState', () => {
    const props = {
      commitList: [],
    };

    const mockState = {
      commits: {...props},
    };

    it('THEN return needed props', () => {
      expect(mapStateToProps(mockState)).toEqual(props);
    });
  });

  describe('WHEN the setCurrentCommit action is called', () => {
    it('THEN make a dispatch to PUT_CURRENT_COMMIT action', () => {
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).setCurrentCommit({});
      expect(dispatch.mock.calls[0][0]).toEqual({
        commit: {},
        type: 'PUT_CURRENT_COMMIT',
      });
    });
  });
});
