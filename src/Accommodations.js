const React = require('react')
const $ = require('jquery')

import './App.css'

const URL = "http://localhost:3000/"

export default React.createClass({
  getInitialState () {
    return {
      data: []
    };
  },
  loadAccommodationsFromServer: function() {
    $.ajax({
      url: URL + "accommodations",
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadAccommodationsFromServer();
  },
  render() {
    const accommodationNodes = this.state.data.map(function(accommodation) {
      return (
        <li key={accommodation.id}>Created by: {accommodation.creator_id} | Trip: {accommodation.trip_id} | Location: {accommodation.location} | Check-in: {accommodation.check_in} | Check-out: {accommodation.check_out}
        </li>
      );
    })
    return (
      <div>
        <h1>Accommodations</h1>
        <ul>
          {accommodationNodes}
        </ul>
      </div>
    )
  }
});

