import React from 'react';
import { Content } from './Content';
import { shallow } from 'enzyme';

import exampleContenfulContent from './exampleContent';

it('Renders content', () => {
  const tree = shallow(<Content content={exampleContenfulContent} />);
  expect(tree).toMatchSnapshot();
});
