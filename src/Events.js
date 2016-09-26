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
  loadEventsFromServer: function() {
    $.ajax({
      url: URL + "events",
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
    this.loadEventsFromServer();
  },
  render() {
    const eventNodes = this.state.data.map(function(event) {
      return (
        <li key={event.id}>{event.name}, {event.description} Created by: {event.creator_id} | Trip: {event.trip_id} | Location: {event.location} | Starts at: {event.start_time} | Ends at: {event.end_time}
        </li>
      );
    })
    return (
      <div>
        <h1>Events</h1>
        <ul>
          {eventNodes}
        </ul>
      </div>
    )
  }
});

