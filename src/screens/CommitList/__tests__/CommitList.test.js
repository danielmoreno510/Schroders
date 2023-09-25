import React from 'react';
import TestRenderer from 'react-test-renderer';

import CommitList from '../CommitList';

jest.spyOn(React, 'useEffect').mockImplementation(f => f());

describe('CommitList component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      isFetchingCommitList: true,
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
      getCommits: jest.fn(),
      setCurrentCommit: jest.fn(),
      navigation: {navigate: jest.fn()},
    };

    describe('WHEN the component is rendered', () => {
      const testRenderer = TestRenderer.create(<CommitList {...testProps} />);

      it('THEN should display a regular CommitList', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
      });
    });

    describe('WHEN showCommit functions are called', () => {
      const customProps = {
        ...testProps,
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
      };
      const testRenderer = TestRenderer.create(<CommitList {...customProps} />);
      const testInstance = testRenderer.root;
      testInstance.findByProps({testID: 'showCommit'}).props.onPress();

      it('THEN setCurrentCommit function should be called', () => {
        expect(testProps.setCurrentCommit).toBeCalledTimes(1);
      });
    });
  });
});
