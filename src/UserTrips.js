import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import $ from 'jquery';

import './App.css';

const URL = "http://localhost:3000/"

// Trip list
export default React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadTripsFromServer: function() {
    $.ajax({
      url: URL + "user/" + this.props.params.id + "/trips",
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),      // makes sure 'this' continues to be the correct object inside the callback
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  // componentDidMount is called after component is rendered for the first time
  componentDidMount: function() {
    this.loadTripsFromServer();
    // setInterval(this.loadTripsFromServer, this.props.pollInterval);
  },
  render() {
    var tripNodes = this.state.data.map(function(trip) {
      return (
        <li key={trip.id}>
          {trip.name}
        </li>
      );
    });
    return (
      <div>
        <h1>Trips</h1>
        <ul>
          {tripNodes}
        </ul>
      </div>
    );
  }
});

