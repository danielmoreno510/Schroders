import React from 'react';
import {shallow} from 'enzyme';

import CommitList from '../CommitList';

jest.spyOn(React, 'useEffect').mockImplementation(f => f());

describe('CommitList component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      isFetchingCommitList: true,
      commitList: [],
      cart: [{}],
      getCommits: jest.fn(),
      setCurrentCommit: jest.fn(),
      navigation: {navigate: jest.fn()},
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<CommitList {...testProps} />);

      it('THEN should display a regular CommitList', () => {
        expect(shallowWrapper.debug()).toMatchSnapshot();
      });
    });

    describe('WHEN the addToCart and showCommit functions are called', () => {
      const customProps = {
        ...testProps,
        isFetchingCommitList: false,
        commitList: [{}],
      };
      const shallowWrapper = shallow(<CommitList {...customProps} />);
      const flatList = shallowWrapper.find('FlatList');
      const item = flatList.renderProp('renderItem')({});
      item.props().showCommit();
      flatList.props().keyExtractor({item: {id: 1}});

      it('THEN setAddToCart and setCurrentCommit function should be called', () => {
        expect(testProps.setCurrentCommit).toBeCalledTimes(1);
      });
    });
  });
});
