import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import Users from './Users';
import Trips from './Trips';
import AddTrip from './AddTrip';
import Accommodations from './Accommodations';
import './index.css';
import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/users" component={Users}/>
    <Route path="/trips" component={Trips}/>
    <Route path="/trips/new" component={AddTrip}/>
    <Route path="/accommodations" component={Accommodations} />
  </Router>
), document.getElementById('root'))


