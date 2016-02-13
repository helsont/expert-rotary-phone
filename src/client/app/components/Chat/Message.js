import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div>
        <div className="chat-message-outgoing">
          hi
        </div>
        <p className="text-left">Sent at 4:56pm.</p>

        <div className="clear"></div>

        <div className="chat-message-incoming">
          incoming
        </div>
        <p className="text-right">Sent at 5:56pm.</p>
        <div className="clear"></div>
      </div>
    )
  }
}

export default Message;
