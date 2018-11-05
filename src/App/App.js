import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Layout from '../Layout';
import Home from '../Home';
import Content from '../Content';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
            <Link className="link" to="/content">Content</Link>
          </header>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/content" component={Content}/>
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
