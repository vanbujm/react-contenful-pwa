import React from 'react';
import { Content } from './Content';
import { shallow } from 'enzyme';

import exampleGraphCMSContent from './exampleContent';

it('Renders content', () => {
  const tree = shallow(<Content courses={exampleGraphCMSContent} />);
  expect(tree).toMatchSnapshot();
});
