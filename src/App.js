import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import $ from 'jquery';

import './App.css';

export default React.createClass({
  render() {
      <div>
        <h1>Welcome to Tie-In</h1>
        <ul>
          <li><Link to="/users">User List</Link></li>
          <li><Link to="/accommodations">Accommodations List</Link></li>

        </ul>
      </div>
  }
});


