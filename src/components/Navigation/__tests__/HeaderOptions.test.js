import React from 'react';
import TestRenderer from 'react-test-renderer';

import HeaderOptions from '../HeaderOptions';

describe('HeaderOptions component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      changeScreen: jest.fn(),
      position: 'left',
    };

    describe('WHEN the component is rendered', () => {
      const testRenderer = TestRenderer.create(
        <HeaderOptions {...testProps} />,
      );

      it('THEN should display a regular HeaderOptions', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
      });
    });

    describe('WHEN the component is rendered with badge', () => {
      const customProps = {...testProps, badge: 1, position: 'right'};
      const testRenderer = TestRenderer.create(
        <HeaderOptions {...customProps} />,
      );

      it('THEN should display a regular HeaderOptions', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
      });
    });
  });
});
