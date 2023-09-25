import React from 'react';
import TestRenderer from 'react-test-renderer';

import CommitDetails from '../CommitDetails';

describe('CommitDetails component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      commit: {user: {login: ''}, created_at: new Date()},
    };

    describe('WHEN the component is rendered', () => {
      const testRenderer = TestRenderer.create(
        <CommitDetails {...testProps} />,
      );

      it('THEN should display a regular CommitDetails', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
      });
    });
  });
});
