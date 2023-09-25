import React from 'react';
import TestRenderer from 'react-test-renderer';

import Button from '../Button';

describe('Button component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      primaryColor: '#002337',
      onPress: jest.fn(),
    };

    describe('WHEN the component is rendered without props', () => {
      const testRenderer = TestRenderer.create(<Button {...testProps} />);

      it('THEN should display a regular button', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
      });
    });

    describe('WHEN the component is rendered with props', () => {
      const customProps = {
        ...testProps,
        text: 'Test',
        disabled: true,
        styleButton: {color: 'red'},
        styleText: {color: 'red'},
      };
      const testRenderer = TestRenderer.create(<Button {...customProps} />);

      it('THEN should display a regular button', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
      });
    });
  });
});
