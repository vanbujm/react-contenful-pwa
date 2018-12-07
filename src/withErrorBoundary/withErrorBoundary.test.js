import React from 'react';
import { mount } from 'enzyme';

import { withErrorBoundary } from './withErrorBoundary';

const actualErrorLogger = console.error;

const ComponentThatBreaks = () => {
  throw new Error('Boom');
};

beforeAll(() => {
  // error boundary catches the error but logs it in console.error,
  //  we don't want to see the log every time the test is run
  console.error = () => null;
});

afterAll(() => {
  // Put the real console.error method back for other tests
  console.error = actualErrorLogger;
});

it('Catches errors', () => {
  const ComponentThatCatchesErrors = withErrorBoundary()(ComponentThatBreaks);
  expect(mount(<ComponentThatCatchesErrors />)).toMatchSnapshot();
});

it('Excepts a different error component', () => {
  const ComponentThatCatchesErrors = withErrorBoundary(() => (
    <h1>Wow, an error...</h1>
  ))(ComponentThatBreaks);
  expect(mount(<ComponentThatCatchesErrors />)).toMatchSnapshot();
});

it('Accepts an error handler', () => {
  let anError = null;
  const ComponentThatCatchesErrors = withErrorBoundary(
    null,
    error => (anError = error)
  )(ComponentThatBreaks);
  mount(<ComponentThatCatchesErrors />);
  expect(anError).not.toBeNull();
});
