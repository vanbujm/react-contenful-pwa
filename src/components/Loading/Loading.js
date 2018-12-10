import React from 'react';

const Loading = <div>Loading...</div>;
const Error = <div>Sorry, there was a problem loading the page.</div>;

const Loader = ({ isLoading, error, pastDelay, timeout, retry }) => {
  if (!pastDelay && pastDelay !== undefined) return null;
  if (timeout) {
    return (
      <div>
        Taking a long time... <button onClick={retry}>Retry</button>
      </div>
    );
  }
  if (isLoading) return Loading;
  if (error) return Error;
  return null;
};

export default Loader;
