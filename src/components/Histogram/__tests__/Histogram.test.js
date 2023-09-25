import React from 'react';
import TestRenderer from 'react-test-renderer';

import Histogram from '../Histogram';

describe('Histogram component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      histogram: [
        {
          name: 'test',
          label: 'test',
          value: 1,
          size: 1,
        },
      ],
      total: 0,
      isLibrary: true,
      changeChart: jest.fn(),
    };

    describe('WHEN the component is rendered without props', () => {
      const testRenderer = TestRenderer.create(<Histogram {...testProps} />);

      it('THEN should display a regular histogram', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
      });
    });
  });
});
