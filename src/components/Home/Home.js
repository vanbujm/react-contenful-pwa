import React from 'react';
import { mapProps } from 'recompose';

const Home = () => <div>Home</div>;

export default mapProps(() => ({}))(React.memo(Home));
