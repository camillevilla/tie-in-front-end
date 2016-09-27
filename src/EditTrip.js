import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import $ from 'jquery';

import './App.css';

// Need to change this to the current user, but use 1 for now
const user_id = 1;
const URL = "http://localhost:3000/"

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
  // contextTypes: {
  // router: React.PropTypes.object
  // },
  handleSubmit(event) {
    event.preventDefault();
    var newTrip = {
      trip:
      {
        name: event.target.elements[0].value,
        location: event.target.elements[1].value,
        description: event.target.elements[2].value,
        start_date: event.target.elements[3].value,
        end_date: event.target.elements[4].value
      }
    };
    this.postTripToServer(newTrip);

  },
  postTripToServer: function(trip) {
    var id = this.props.params.id;
    alert(this.props.params.id);
    $.ajax({
      url: URL + "trips/" + id,
      type: "PUT",
      dataType: 'json',
      data: trip,
      success: this.handleSuccess,      // makes sure 'this' continues to be the correct object inside the callback
      error: function(xhr, status, err) {
        alert( err.toString());
      }
    });
  },
  handleSuccess(response) {
    alert(response.message);
  },

  render() {
    return (
      <div>
        <h2>Edit trip</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name:  </label>
          <input type="text" />
          <label>Location:  </label>
          <input type="text" placeholder="location"/>
          <div>
          <textarea rows="5" cols="80">
          </textarea>
          </div>
          <label>Start date:  </label>
          <input type="datetime-local" />
          <label>End date:  </label>
          <input type="datetime-local" />
          <div><button type="submit">Submit</button></div>
        </form>
      </div>
    )
  }
});


