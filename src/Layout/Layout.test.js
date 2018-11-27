import React from 'react';
import Layout from './Layout';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const tree = shallow(<Layout><div>Test</div></Layout>);
  expect(tree).toMatchSnapshot();
});

it('Renders children', () => {
  const tree = shallow(<Layout><div>Test</div></Layout>);
  expect(tree).toMatchSnapshot();
});
