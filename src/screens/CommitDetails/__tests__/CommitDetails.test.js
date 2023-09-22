import React from 'react';
import {shallow} from 'enzyme';

import CommitDetails from '../CommitDetails';

describe('CommitDetails component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      commit: {user: {login: ''}, created_at: new Date()},
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<CommitDetails {...testProps} />);

      it('THEN should display a regular CommitDetails', () => {
        expect(shallowWrapper.debug()).toMatchSnapshot();
      });
    });
  });
});
