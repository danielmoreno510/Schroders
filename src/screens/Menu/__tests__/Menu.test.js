import React from 'react';
import TestRenderer from 'react-test-renderer';

import Menu from '../Menu';

describe('Menu component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      navigation: {navigate: jest.fn()},
    };

    describe('WHEN the component is rendered', () => {
      const testRenderer = TestRenderer.create(<Menu {...testProps} />);

      it('THEN should display a regular Menu', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
      });
    });

    describe('WHEN the menu option is pressed', () => {
      const testRenderer = TestRenderer.create(<Menu {...testProps} />);
      const testInstance = testRenderer.root;
      testInstance.findByProps({testID: 'Home'}).props.onPress();

      it('THEN navigation function should be called', () => {
        expect(testProps.navigation.navigate).toBeCalledTimes(1);
      });
    });
  });
});
