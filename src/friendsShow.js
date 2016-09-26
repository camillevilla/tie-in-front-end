import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import $ from 'jquery';

const URL = "http://localhost:3000/"

export default React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadFriendsFromServer: function() {
    $.ajax({
      url: "http://localhost:3000/users/1/friends",
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
    this.loadFriendsFromServer();
    console.log(this.state.data)
    // setInterval(this.loadUsersFromServer, this.props.pollInterval);
  },
  render() {
    var friendNodes = this.state.data.map(function(friend) {
      return (
        <li key={friend.id}>
          {friend.first_name} {friend.last_name}
          
        </li>
      );
    });
    // console.log(friendNodes);
    return (
      <div>
        <h1>friends</h1>
        <ul>
          {friendNodes}
        </ul>
      </div>
    );
  }
});

// export default App;
