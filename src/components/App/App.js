import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Layout from '../Layout';
import logo from '../../logo.svg';
import './App.css';
import Loading from '../Loading';

const loadingConfig = {
  delay: 100,
  timeout: 10000
};

const Content = Loadable({
  loader: () => import('../Content'),
  loading: Loading,
  ...loadingConfig
});

const Home = Loadable({
  loader: () => import('../Home'),
  loading: Loading,
  ...loadingConfig
});

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <Link className="link" to="/content">
          Content
        </Link>
      </header>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/content" component={Content} />
        </Switch>
      </Layout>
    </div>
  </BrowserRouter>
);

export default App;
