import React from 'react';
import LeadAttributes from './LeadAttributes.js';
import ChatInput from './ChatInput.js';
import MessageContainer from './MessageContainer.js';

class ChatContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="message-list">
          <LeadAttributes/>
          <div>
            <MessageContainer/>
          </div>
        </div>
        <ChatInput/>
      </div>
    )
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
}

export default ChatContainer;
