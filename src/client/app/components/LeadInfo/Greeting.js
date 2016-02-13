import React from 'react';

class Greeting extends React.Component {
  react() {
    return (
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Send</button>
          </span>
          <textarea
            type="text"
            className="form-control"
            rows="2"
            data-toggle="tooltip"
            data-placement="top"
            title={this.props.greeting}
            value={this.props.greeting}
            readOnly></textarea>
        </div>
      </div>
    );
  }
}

export default Greeting;
