import React from 'react';
import { mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const tree = mount(<App />);
  expect(tree).toMatchSnapshot();
});
