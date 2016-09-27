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
  loadDataFromServer: function() {
    $.ajax({
      url: URL + "trips/" + this.props.params.id,
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
    this.loadDataFromServer();
    // setInterval(this.loadDataFromServer, this.props.pollInterval);
  },
  render() {
    return (
      <div>
        <div>
          <h1>{this.state.data.name}</h1>
          <p>Location: {this.state.data.location}</p>
          <p>Description: {this.state.data.description}</p>
          <p>Start date: {this.state.data.start_date}</p>
          <p>End date: {this.state.data.end_date}</p>
        </div>
        <div>
          <Link to={"/trips/" + this.state.data.id + "/edit"}>Edit this trip</Link>
        </div>


        {this.props.children}
      </div>
    );
  }
});

