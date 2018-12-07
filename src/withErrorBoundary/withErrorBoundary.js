import React from 'react';
import { lifecycle, setDisplayName, wrapDisplayName, compose } from 'recompose';

export const withErrorBoundary = (
  FallbackComponent,
  errorHandler
) => BaseComponent => {
  const lifeCycleSpec = {
    componentDidCatch(error, info) {
      if (errorHandler !== undefined) {
        errorHandler(error, info);
      }
      this.setState({ hasError: true });
    }
  };

  const ErrorBoundary = props => {
    const { hasError } = props;
    const ActualFallbackComponent = FallbackComponent ? (
      <FallbackComponent {...props} />
    ) : (
      <h1>Yikes, something went wrong.</h1>
    );

    if (hasError) return ActualFallbackComponent;
    return <BaseComponent {...props} />;
  };

  if (process.env.NODE_ENV !== 'production') {
    return compose(
      setDisplayName(wrapDisplayName(BaseComponent, 'withErrorBoundary')),
      lifecycle(lifeCycleSpec)
    )(ErrorBoundary);
  }

  return lifecycle(lifeCycleSpec)(ErrorBoundary);
};

export default withErrorBoundary;
