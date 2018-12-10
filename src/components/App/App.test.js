import React from 'react';
import App from './App';
import TestRenderer from 'react-test-renderer';
import Loadable from 'react-loadable';

beforeEach(async () => {
  await Loadable.preloadAll();
});

it('renders without crashing', async () => {
  const tree = TestRenderer.create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
});
