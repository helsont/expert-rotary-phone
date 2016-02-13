import React from 'react';

class ChatInput extends React.Component {
  render() {
    return (
      <div className="message-text-area-container">
        <div className="row">
          <div className="col-md-10 no-border">
            <textarea
            className="message-text-area"
            placeholder="Type a message here..."
            defaultValue="Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
            ></textarea>
          </div>
          <div className="col-md-2 no-border">
            <button className="btn btn-default message-text-area">Send</button>
          </div>
        </div>
      </div>
    );
  }
};

export default ChatInput;
