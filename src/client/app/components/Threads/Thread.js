import React from 'react';

class Thread extends React.Component {
  render() {
    return (
      <div>
        <div className="row thread">
          <b>Jane Smith</b><small className="float-right">2/11 at 5:46pm</small>
          <br></br>
          "I'm looking for an apartment..."
        </div>
      </div>
    )
  }
}

export default Thread;
