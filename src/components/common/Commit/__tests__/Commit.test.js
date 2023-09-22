import React from 'react';
import {shallow} from 'enzyme';

import Commit from '../Commit';

describe('Commit component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      commit: {user: {login: ''}, created_at: new Date()},
      showCommit: jest.fn(),
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<Commit {...testProps} />);

      it('THEN should display a regular Commit', () => {
        expect(shallowWrapper.debug()).toMatchSnapshot();
      });
    });
  });
});
