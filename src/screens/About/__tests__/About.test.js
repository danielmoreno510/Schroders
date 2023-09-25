import React from 'react';
import TestRenderer from 'react-test-renderer';

import About from '../About';

describe('About component', () => {
  describe('GIVEN a set of valid props', () => {
    describe('WHEN the component is rendered', () => {
      const testRenderer = TestRenderer.create(<About />);

      it('THEN should display a regular About', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
      });
    });
  });
});
