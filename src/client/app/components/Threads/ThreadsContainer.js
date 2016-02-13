import React from 'react';
import Thread from './Thread.js';

class ThreadsContainer extends React.Component{
  render() {
    return (
      <div>
        <Thread />
        <Thread />
        <Thread />
        <Thread />
        <Thread />
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

export default ThreadsContainer;
