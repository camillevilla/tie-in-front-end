import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import $ from 'jquery';

import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>Welcome to Tie-In!</h2>
//         </div>
//       </div>
//     );
//   }
// }

var UserList = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadUsersFromServer: function() {
    $.ajax({
      url: this.props.url,
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
    this.loadUsersFromServer();
    // setInterval(this.loadUsersFromServer, this.props.pollInterval);
  },
  render() {
    var userNodes = this.state.data.map(function(user) {
      return (
        <li key={user.id}>
          {user.first_name} {user.last_name}
        </li>
      );
    });
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {userNodes}
        </ul>
      </div>
    );
  }
});

// export default App;

ReactDOM.render(
  <UserList  url='http://tie-in.herokuapp.com/users' />,
  document.getElementById('root')
)
;
