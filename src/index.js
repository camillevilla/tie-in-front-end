import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import Users from './Users';
import Accommodations from './Accommodations';
import './index.css';

render((
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <Route path="/users" component={Users} />
      <Route path="/accommodations" component={Accommodations} />
    </Route>
  </Router>
), document.getElementById('root'))


