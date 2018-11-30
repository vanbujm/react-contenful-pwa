import React from 'react';
import { mount } from 'enzyme';
import App from './App';

// First mount causes dynamic import to work
mount(<App />);

it('renders without crashing', () => {
  const tree = mount(<App />);
  expect(tree).toMatchSnapshot();
});
