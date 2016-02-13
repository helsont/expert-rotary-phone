import React from 'react';
import Message from './Message.js';

class ChatContainer extends React.Component {
  render() {
    return (
      <div className="chat-container scrollable">
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </div>
    )
  }
}

export default ChatContainer;
