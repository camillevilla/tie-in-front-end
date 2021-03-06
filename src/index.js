import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import Users from './Users';
import UserTrips from './UserTrips';
import Friends from './friendsShow';
import AddTrip from './AddTrip';
import Accommodations from './Accommodations';
import Events from './Events';
// import CurrentUser from './CurrentUser';
import './index.css';


render((
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/users" component={Users} />
        <Route path="/user/:id/trips" component={UserTrips}/>
        <Route path="/user/:id/trips/new" component={AddTrip}/>
        <Route path="/accommodations" component={Accommodations} />
        <Route path="/events" component={Events} />
        <Route path="/users/1/friendships" component={Friends}/>
      </Route>
    </Router>
  </div>
), document.getElementById('root'))


