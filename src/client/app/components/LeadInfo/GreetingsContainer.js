import React from 'react';
import Greeting from './Greeting.js';
import LeadAttributes from './LeadAttributes.js';
import LeadInfoContainer from './LeadInfoContainer.js';

class GreetingsContainer extends React.Component {
  render() {
    return (
      <div>
        <h2>Lead Info</h2>
        <hr></hr>

        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="First Name"></input>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Last Name"></input>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Budget"></input>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Moving To"></input>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Moving On"></input>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Beds"></input>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this);
    if (!node) {
      return;
    }
    var el = node.parentElement;

    var y = $(window).height() - 70;
    $(el).css('height', y + 'px');
  }
};

export default GreetingsContainer;
