import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import $ from 'jquery';

import './App.css';

// Need to change this to the current user, but use 1 for now
const user_id = 1;
const URL = "http://localhost:3000/"

export default React.createClass({
  // contextTypes: {
  // router: React.PropTypes.object
  // },
  handleSubmit(event) {
    event.preventDefault();
    var newTrip = {
      name: event.target.elements[0].value,
      location: event.target.elements[1].value,
      description: event.target.elements[2].value,
      start_date: event.target.elements[3].value,
      end_date: event.target.elements[4].value
    };
    this.postTripToServer(newTrip);
    // What is the purpose of the weird quotes?
    // const path = `/users/${user_id}`
    // Send this path to the router
    // this.context.router.push(path)

  },
  postTripToServer: function(trip) {
    $.ajax({
      url: URL + "trips",
      type: "POST",
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
        <h2>Add a new trip</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name:  </label>
          <input type="text" placeholder="name"/>
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


