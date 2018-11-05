import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout><div>Test</div></Layout>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders children', () => {
  const tree = renderer
    .create(<Layout><div>Test</div></Layout>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
