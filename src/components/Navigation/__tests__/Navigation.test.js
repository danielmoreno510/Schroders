import React from 'react';
import TestRenderer from 'react-test-renderer';

import Navigation from '../Navigation';

describe('Navigation component', () => {
  describe('WHEN the component is rendered', () => {
    const testRenderer = TestRenderer.create(<Navigation />);
    const testInstance = testRenderer.root;

    testInstance
      .findByProps({testID: 'Home'})
      .props.options(jest.fn())
      .headerLeft();
    testInstance
      .findByProps({testID: 'Menu'})
      .props.options(jest.fn())
      .headerLeft();

    it('THEN should display a regular Navigation', () => {
      expect(testRenderer.toJSON()).toMatchSnapshot();
    });
  });
});
