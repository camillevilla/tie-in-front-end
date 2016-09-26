import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import $ from 'jquery';
// import CurrentUser from './CurrentUser';

import './App.css';


export default React.createClass({
  render() {
    return (
      <div>
        <h1>Welcome to Tie-In</h1>
        <ul>
          <li><Link to="/user/1/trips">Your Trips</Link></li>
          <li><Link to="/user/1/trips/new">Add Trip</Link></li>
          <li><Link to="/accommodations">Accommodations List</Link></li>
          <li><Link to="/events">Events List</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});


