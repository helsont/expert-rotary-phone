import React from 'react';
import {render} from 'react-dom';

import NavBar from './components/NavBar.js';

import ThreadsContainer from './components/Threads/ThreadsContainer.js';
import ChatContainer from './components/Chat/ChatContainer.js';
import ThreadDetailContainer from './components/ThreadDetail/ThreadDetailContainer.js';

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row row-eq-height">
            <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 thread-list">
              <ThreadsContainer />
            </div>
            <div className="col-xs-8 col-sm-8 col-md-6 col-lg-6 separator message-container">
              <ChatContainer />
            </div>
            <div className="hidden-xs hidden-sm col-md-3 col-lg-3 separator scrollable">
              <ThreadDetailContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    $(function () {
      // turn on tooltips
      $('[data-toggle="tooltip"]').tooltip()
    });
  }
}

module.exports.ReactApp = App;
