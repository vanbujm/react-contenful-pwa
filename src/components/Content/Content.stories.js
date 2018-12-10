import React from 'react';
import { storiesOf } from '@storybook/react';

import { Content } from './Content';
import exampleContent from './exampleContent';
import contentNotes from './notes.md';

storiesOf('Content', module).add(
  'with some graphcms content',
  () => <Content content={exampleContent} />,
  {
    info: {
      text: contentNotes
    }
  }
);
