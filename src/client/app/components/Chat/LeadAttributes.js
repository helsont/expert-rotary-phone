import React from 'react';

class LeadAttributes extends React.Component {
  render() {
    return (
      <div>
        <h2>Jane Smith</h2>
        <span className="label label-success">Active Lead</span>
        <span className="label label-danger">Primary</span>
        <hr></hr>
      </div>
    )
  }
}

export default LeadAttributes;
