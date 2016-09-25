import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import App from './App';
import Users from './Users';
import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Users}>
      <Route path="/users" component={Users}/>
    </Route>
  </Router>
), document.getElementById('root'))


