import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import Users from './Users';
// import Trips from './Trips';
import UserTrips from './UserTrips';
import AddTrip from './AddTrip';
import Accommodations from './Accommodations';
import Events from './Events';
import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/users" component={Users}/>
    <Route path="/user/:id/trips" component={UserTrips}/>
    <Route path="/user/:id/trips/new" component={AddTrip}/>
    <Route path="/accommodations" component={Accommodations} />
    <Route path="/events" component={Events} />
  </Router>
), document.getElementById('root'))


