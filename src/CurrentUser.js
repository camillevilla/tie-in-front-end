import $ from 'jquery';
import React, { Component } from 'react';
const URL = "http://localhost:3000/"

var current_user_id = 1
var CurrentUser = {
  users: [],
  id: function() {
    return current_user_id;
    // if (current_user_id == 0) {
    //   this.loadUsersFromServer();
    //   current_user_id = this.users[0].id;
    // }
    // return current_user_id;
  },
  loadUsersFromServer: function() {
    $.ajax({
      url: URL + "users",
      dataType: 'json',
      success: function(data) {
        this.users = data;
      }.bind(this),      // makes sure 'this' continues to be the correct object inside the callback
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
};

export default CurrentUser;
