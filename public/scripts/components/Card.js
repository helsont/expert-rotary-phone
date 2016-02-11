
var Card = React.createClass({
  getInitialState: function() {
    return {
      number: '917-555-555',
      firstName: 'Jane',
      lastName: 'Smith',
      lastMessage: 'Thanks, I look forward to your response.',
      date: 'Yesterday at 5:39pm'
    };
  },
  render: function() {
    return (
      <div className="card grey lighten-4" ref="root">
        <div className="card-content white-text">
          <span className="card-title">{this.state.firstName} {this.state.lastName}</span>
          <p>{this.state.lastMessage}</p>
          <p>{this.state.date}</p>
        </div>
        <div className="card-action">
          <a href="#" className="light-blue-text">Open</a>
          <a href="#" className="light-blue-text">Manage</a>
        </div>
      </div>
    );
  }
});
