import React from 'react';
import TestRenderer from 'react-test-renderer';

import Commit from '../Commit';

describe('Commit component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      commit: {user: {login: ''}, created_at: new Date()},
      showCommit: jest.fn(),
    };

    describe('WHEN the component is rendered', () => {
      const testRenderer = TestRenderer.create(<Commit {...testProps} />);

      it('THEN should display a regular Commit', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
      });
    });
  });
});
