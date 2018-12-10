import React from 'react';
import Layout from './Layout';
import TestRenderer from 'react-test-renderer';

it('renders without crashing', () => {
  const tree = TestRenderer.create(
    <Layout>
      <div>Test</div>
    </Layout>
  );
  expect(tree).toMatchSnapshot();
});

it('Renders children', () => {
  const tree = TestRenderer.create(
    <Layout>
      <div>Test</div>
    </Layout>
  );
  expect(tree).toMatchSnapshot();
});
