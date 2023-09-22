import commitsActions from '../commitsActions';

describe('Commits Actions', () => {
  const actionsArray = Object.keys(commitsActions);
  describe.each(actionsArray)('GIVEN %s action', action => {
    describe('WHEN the action is called', () => {
      const result = commitsActions[action]();
      it('THEN should be an object', () => {
        expect(typeof result).toBe('object');
      });
      it('AND should have a type as key', () => {
        expect(result).toHaveProperty('type');
      });
      it('AND type should be a string', () => {
        expect(typeof result.type).toBe('string');
      });
    });
  });
});
