import React from 'react';
import TestRenderer from 'react-test-renderer';

import Home from '../Home';

describe('Home component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      isFetchingCommitList: false,
      commitList: [
        {
          id: 1,
          node_id: '1',
          title: 'Test 1',
          user: {login: 'Test', id: '1', avatar_url: ''},
          comments: 3,
          created_at: '2022-09-21',
          body: 'Body 1',
        },
      ],
      histogramData: [{name: 'test', label: 'test', value: 1, size: 1}],
      year: '2023',
      getCommits: () => jest.fn(),
      navigation: {navigate: jest.fn()},
    };

    describe('WHEN the component is rendered', () => {
      const testRenderer = TestRenderer.create(<Home {...testProps} />);

      it('THEN should display a regular Home', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
      });
    });

    describe('WHEN the commits button is pressed', () => {
      const testRenderer = TestRenderer.create(<Home {...testProps} />);
      const testInstance = testRenderer.root;
      testInstance.findByProps({text: 'Show List'}).props.onPress();

      it('THEN navigation function should be called', () => {
        expect(testProps.navigation.navigate).toBeCalledTimes(1);
      });
    });
  });
});
