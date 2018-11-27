import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import Home from '../Home';
import Content from '../Content';
import logo from '../logo.svg';
import './App.css';

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
