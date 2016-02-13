import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Ask</button>
            </span>
            <textarea
              className="form-control"
              rows="1"
              data-toggle="tooltip"
              data-placement="top"
              title={this.props.question}
              placeholder={this.props.question}>
            </textarea>
          </div>
        </div>
      </div>
  }
}

export default Question;
