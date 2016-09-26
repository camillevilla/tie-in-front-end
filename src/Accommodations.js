const React = require('react')
const ReactDOM = require('react')
const $ = require('jquery')

const Accommodations = React.createClass({
  getInitialState () {
    return {
      data: []
    };
  },
  loadAccommodationsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, error) {
        console.error(this.props.url, status, error.toString());
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
  }
});

ReactDOM.render(
  <Accommodations url='http://localhost:3000/accommodations' />, document.getElementById('root')
)
