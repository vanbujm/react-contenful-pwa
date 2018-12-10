import React from 'react';
import { Content } from './Content';
import TestRenderer from 'react-test-renderer';

import exampleGraphCMSContent from './exampleContent';

it('Renders content', () => {
  const tree = TestRenderer.create(
    <Content courses={exampleGraphCMSContent} />
  );
  expect(tree).toMatchSnapshot();
});
